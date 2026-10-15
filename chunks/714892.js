a.d(t, { default: () => A });
var e = a(477900),
    n = a(582128),
    l = a(834730),
    s = a(173936),
    o = a(858899),
    c = a(148494),
    d = a(9578),
    r = a(429913),
    u = a(914718),
    m = a(451909),
    p = a(446244),
    _ = a(734057),
    h = a(174459),
    k = a(957565),
    g = a(403362),
    x = a(871123),
    f = a(366523),
    C = a(652215),
    N = a(381941),
    E = a(105292),
    v = a(884540);
function j(i) {
    let { skus: t } = i,
        [a] = t,
        o = (0, r.h)(a?.applicationId),
        c = n.useMemo(() => t.map((i) => i.id), [t]),
        u = n.useMemo(() => (null != a ? (0, x.aU)(a.applicationId, c) : ""), [a, c]),
        m = t.length > 1 ? E.intl.formatToPlainString(E.t.j7Go5A, { count: t.length }) : a?.name;
    return (0, e.jsxs)("div", {
        className: v.sq,
        children: [
            (0, e.jsxs)("div", {
                className: v.kx,
                children: [
                    (0, e.jsx)(d.A, {
                        title: m,
                        href: u,
                        children: (0, e.jsx)(l.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: m,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: v.Bo,
                        children: [
                            (0, e.jsx)(s.LinkIcon, { size: "xs", color: "currentColor", className: v.wP }),
                            (0, e.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: E.intl.formatToPlainString(E.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: v.sN,
                children: t.map((i) =>
                    (0, e.jsx)(
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
    let { skus: t, source: a, onClose: l, ...d } = i,
        f = t[0]?.applicationId,
        v = (0, r.h)(f),
        A = n.useMemo(() => t.map((i) => i.id), [t]),
        w = n.useCallback(
            async (i, t, a) => {
                let { withMessage: e, closeAfterSend: n } = t;
                a(!0);
                try {
                    let t = (await Promise.all(i.map(p.pk))).filter(g.Vq);
                    if (0 === t.length || (n && l(), null == f)) return void a(!1);
                    let s = (0, x.c2)(f, A);
                    for (let i of t) {
                        let t = _.A.getChannel(i);
                        if (null != t) {
                            let i = await c.A.sendMessage(t.id, m.Ay.parse(t, s + (e ?? "")), !1, {
                                location: N.Hx.SOCIAL_LAYER_STOREFRONT,
                            });
                            i?.ok === !0 &&
                                h.default.track(C.HAw.SLAYER_STOREFRONT_EMBED_SENT, {
                                    application_id: f,
                                    application_name: v?.name ?? null,
                                    guild_id: (0, x.n5)(f) ?? null,
                                    destination_guild_id: t.getGuildId() ?? null,
                                    channel_id: t.id,
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
                    a(!1);
                }
            },
            [v, f, l, A],
        ),
        I = n.useMemo(
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
    return (0, e.jsx)(u.ForwardModal, {
        ...d,
        onClose: l,
        source: a,
        customPreview: (0, e.jsx)(j, { skus: t }),
        customSubtitle: E.intl.string(E.t.yiaXeN),
        customSendHandler: w,
        additionalActions: I,
    });
}
