n.d(a, { default: () => A });
var t = n(477900),
    e = n(582128),
    l = n(834730),
    s = n(173936),
    o = n(858899),
    d = n(148494),
    c = n(9578),
    r = n(429913),
    u = n(228427),
    m = n(451909),
    p = n(223863),
    _ = n(734057),
    h = n(174459),
    k = n(957565),
    g = n(403362),
    x = n(871123),
    f = n(366523),
    C = n(652215),
    N = n(381941),
    E = n(105292),
    v = n(884540);
function j(i) {
    let { skus: a } = i,
        [n] = a,
        o = (0, r.h)(n?.applicationId),
        d = e.useMemo(() => a.map((i) => i.id), [a]),
        u = e.useMemo(() => (null != n ? (0, x.aU)(n.applicationId, d) : ""), [n, d]),
        m = a.length > 1 ? E.intl.formatToPlainString(E.t.j7Go5A, { count: a.length }) : n?.name;
    return (0, t.jsxs)("div", {
        className: v.sq,
        children: [
            (0, t.jsxs)("div", {
                className: v.kx,
                children: [
                    (0, t.jsx)(c.A, {
                        title: m,
                        href: u,
                        children: (0, t.jsx)(l.E, {
                            variant: "body-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: m,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: v.Bo,
                        children: [
                            (0, t.jsx)(s.LinkIcon, { size: "xs", color: "currentColor", className: v.wP }),
                            (0, t.jsx)(l.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                children: E.intl.formatToPlainString(E.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: v.sN,
                children: a.map((i) =>
                    (0, t.jsx)(
                        f.e,
                        {
                            containerClassName: v.Pq,
                            foregroundImageClassName: v.nf,
                            backgroundImageClassName: v.nf,
                            sku: i,
                            shape: "square",
                        },
                        i.id,
                    ),
                ),
            }),
        ],
    });
}
function A(i) {
    let { skus: a, source: n, onClose: l, ...c } = i,
        f = a[0]?.applicationId,
        v = (0, r.h)(f),
        A = e.useMemo(() => a.map((i) => i.id), [a]),
        w = e.useCallback(
            async (i, a, n) => {
                let { withMessage: t, closeAfterSend: e } = a;
                n(!0);
                try {
                    let a = (await Promise.all(i.map(p.pk))).filter(g.Vq);
                    if (0 === a.length || (e && l(), null == f)) return void n(!1);
                    let s = (0, x.c2)(f, A);
                    for (let i of a) {
                        let a = _.A.getChannel(i);
                        if (null != a) {
                            let i = await d.A.sendMessage(a.id, m.Ay.parse(a, s + (t ?? "")), !1, {
                                location: N.Hx.SOCIAL_LAYER_STOREFRONT,
                            });
                            i?.ok === !0 &&
                                h.default.track(C.HAw.SLAYER_STOREFRONT_EMBED_SENT, {
                                    application_id: f,
                                    application_name: v?.name ?? null,
                                    guild_id: (0, x.n5)(f) ?? null,
                                    destination_guild_id: a.getGuildId() ?? null,
                                    channel_id: a.id,
                                    message_id: i.body?.id ?? null,
                                    sku_ids: A,
                                    sku_count: A.length,
                                });
                        }
                    }
                    (0, o.P0)({ text: E.intl.string(E.t.kwmYkt), variant: "success" });
                } catch (i) {
                    (0, o.P0)({ text: E.intl.string(E.t.iufib1), variant: "critical" });
                } finally {
                    n(!1);
                }
            },
            [v, f, l, A],
        ),
        I = e.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        null != f &&
                            (h.default.track(C.HAw.SLAYER_STOREFRONT_EMBED_COPY_LINK_CLICKED, {
                                application_id: f,
                                application_name: v?.name ?? null,
                                guild_id: (0, x.n5)(f) ?? null,
                                sku_ids: A,
                                sku_count: A.length,
                            }),
                            (0, k.C)((0, x.aU)(f, A), () =>
                                (0, o.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                            ));
                    },
                    icon: s.LinkIcon,
                },
            ],
            [v, f, A],
        );
    return (0, t.jsx)(u.ForwardModal, {
        ...c,
        onClose: l,
        source: n,
        customPreview: (0, t.jsx)(j, { skus: a }),
        customSubtitle: E.intl.string(E.t.yiaXeN),
        customSendHandler: w,
        additionalActions: I,
    });
}
