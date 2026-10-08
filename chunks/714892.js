a.d(n, { default: () => j });
var e = a(477900),
    l = a(582128),
    t = a(834730),
    s = a(173936),
    o = a(376357),
    d = a(148494),
    c = a(9578),
    r = a(429913),
    u = a(914718),
    m = a(451909),
    p = a(446244),
    k = a(734057),
    _ = a(174459),
    C = a(957565),
    h = a(403362),
    g = a(871123),
    x = a(366523),
    f = a(652215),
    E = a(381941),
    S = a(660183),
    N = a(884540);
function A(i) {
    let { skus: n } = i,
        [a] = n,
        o = (0, r.h)(a?.applicationId),
        d = l.useMemo(() => n.map((i) => i.id), [n]),
        u = l.useMemo(() => (null != a ? (0, g.aU)(a.applicationId, d) : ""), [a, d]),
        m = n.length > 1 ? S.intl.formatToPlainString(S.t.j7Go5A, { count: n.length }) : a?.name;
    return (0, e.jsxs)("div", {
        className: N.sq,
        children: [
            (0, e.jsxs)("div", {
                className: N.kx,
                children: [
                    (0, e.jsx)(c.A, {
                        title: m,
                        href: u,
                        children: (0, e.jsx)(t.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: m,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: N.Bo,
                        children: [
                            (0, e.jsx)(s.LinkIcon, { size: "xs", color: "currentColor", className: N.wP }),
                            (0, e.jsx)(t.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: S.intl.formatToPlainString(S.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: N.sN,
                children: n.map((i) =>
                    (0, e.jsx)(
                        x.e,
                        {
                            containerClassName: N.Pq,
                            foregroundImageClassName: N.nf,
                            backgroundImageClassName: N.nf,
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
function j(i) {
    let { skus: n, source: a, onClose: t, ...c } = i,
        x = n[0]?.applicationId,
        N = (0, r.h)(x),
        j = l.useMemo(() => n.map((i) => i.id), [n]),
        I = l.useCallback(
            async (i, n, a) => {
                let { withMessage: e, closeAfterSend: l } = n;
                a(!0);
                try {
                    let n = (await Promise.all(i.map(p.pk))).filter(h.Vq);
                    if (0 === n.length || (l && t(), null == x)) return void a(!1);
                    let s = (0, g.c2)(x, j);
                    for (let i of n) {
                        let n = k.A.getChannel(i);
                        if (null != n) {
                            let i = await d.A.sendMessage(n.id, m.Ay.parse(n, s + (e ?? "")), !1, {
                                location: E.Hx.SOCIAL_LAYER_STOREFRONT,
                            });
                            i?.ok === !0 &&
                                _.default.track(f.HAw.SLAYER_STOREFRONT_EMBED_SENT, {
                                    application_id: x,
                                    application_name: N?.name ?? null,
                                    guild_id: (0, g.n5)(x) ?? null,
                                    destination_guild_id: n.getGuildId() ?? null,
                                    channel_id: n.id,
                                    message_id: i.body?.id ?? null,
                                    sku_ids: j,
                                    sku_count: j.length,
                                });
                        }
                    }
                    (0, o.P0)((0, o.ox)(S.intl.string(S.t.kwmYkt), o.Ck.SUCCESS));
                } catch (i) {
                    (0, o.P0)((0, o.ox)(S.intl.string(S.t.iufib1), o.Ck.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [N, x, t, j],
        ),
        v = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        null != x &&
                            (_.default.track(f.HAw.SLAYER_STOREFRONT_EMBED_COPY_LINK_CLICKED, {
                                application_id: x,
                                application_name: N?.name ?? null,
                                guild_id: (0, g.n5)(x) ?? null,
                                sku_ids: j,
                                sku_count: j.length,
                            }),
                            (0, C.C)((0, g.aU)(x, j), () =>
                                (0, o.P0)((0, o.ox)(S.intl.string(S.t["L/PwZf"]), o.Ck.SUCCESS)),
                            ));
                    },
                    icon: s.LinkIcon,
                },
            ],
            [N, x, j],
        );
    return (0, e.jsx)(u.ForwardModal, {
        ...c,
        onClose: t,
        source: a,
        customPreview: (0, e.jsx)(A, { skus: n }),
        customSubtitle: S.intl.string(S.t.yiaXeN),
        customSendHandler: I,
        additionalActions: v,
    });
}
