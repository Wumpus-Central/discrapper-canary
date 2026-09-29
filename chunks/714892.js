a.d(n, { default: () => v });
var e = a(477900),
    l = a(582128),
    t = a(834730),
    s = a(173936),
    o = a(691540),
    d = a(857250),
    c = a(97483),
    r = a(148494),
    u = a(9578),
    m = a(429913),
    p = a(914718),
    k = a(451909),
    _ = a(446244),
    C = a(734057),
    h = a(174459),
    g = a(957565),
    f = a(403362),
    x = a(871123),
    E = a(366523),
    S = a(652215),
    N = a(381941),
    A = a(375708),
    j = a(884540);
function I(i) {
    let { skus: n } = i,
        [a] = n,
        o = (0, m.h)(a?.applicationId),
        d = l.useMemo(() => n.map((i) => i.id), [n]),
        c = l.useMemo(() => (null != a ? (0, x.aU)(a.applicationId, d) : ""), [a, d]),
        r = n.length > 1 ? A.intl.formatToPlainString(A.t.j7Go5A, { count: n.length }) : a?.name;
    return (0, e.jsxs)("div", {
        className: j.sq,
        children: [
            (0, e.jsxs)("div", {
                className: j.kx,
                children: [
                    (0, e.jsx)(u.A, {
                        title: r,
                        href: c,
                        children: (0, e.jsx)(t.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: r,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: j.Bo,
                        children: [
                            (0, e.jsx)(s.LinkIcon, { size: "xs", color: "currentColor", className: j.wP }),
                            (0, e.jsx)(t.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: A.intl.formatToPlainString(A.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: j.sN,
                children: n.map((i) =>
                    (0, e.jsx)(
                        E.e,
                        {
                            containerClassName: j.Pq,
                            foregroundImageClassName: j.nf,
                            backgroundImageClassName: j.nf,
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
function v(i) {
    let { skus: n, source: a, onClose: t, ...u } = i,
        E = n[0]?.applicationId,
        j = (0, m.h)(E),
        v = l.useMemo(() => n.map((i) => i.id), [n]),
        w = l.useCallback(
            async (i, n, a) => {
                let { withMessage: e, closeAfterSend: l } = n;
                a(!0);
                try {
                    let n = (await Promise.all(i.map(_.pk))).filter(f.Vq);
                    if (0 === n.length || (l && t(), null == E)) return void a(!1);
                    let s = (0, x.c2)(E, v);
                    for (let i of n) {
                        let n = C.A.getChannel(i);
                        if (null != n) {
                            let i = await r.A.sendMessage(n.id, k.Ay.parse(n, s + (e ?? "")), !1, {
                                location: N.Hx.SOCIAL_LAYER_STOREFRONT,
                            });
                            i?.ok === !0 &&
                                h.default.track(S.HAw.SLAYER_STOREFRONT_EMBED_SENT, {
                                    application_id: E,
                                    application_name: j?.name ?? null,
                                    guild_id: (0, x.n5)(E) ?? null,
                                    destination_guild_id: n.getGuildId() ?? null,
                                    channel_id: n.id,
                                    message_id: i.body?.id ?? null,
                                    sku_ids: v,
                                    sku_count: v.length,
                                });
                        }
                    }
                    (0, o.P0)((0, d.o)(A.intl.string(A.t.kwmYkt), c.Ck.SUCCESS));
                } catch (i) {
                    (0, o.P0)((0, d.o)(A.intl.string(A.t.iufib1), c.Ck.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [j, E, t, v],
        ),
        P = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        null != E &&
                            (h.default.track(S.HAw.SLAYER_STOREFRONT_EMBED_COPY_LINK_CLICKED, {
                                application_id: E,
                                application_name: j?.name ?? null,
                                guild_id: (0, x.n5)(E) ?? null,
                                sku_ids: v,
                                sku_count: v.length,
                            }),
                            (0, g.C)((0, x.aU)(E, v), () =>
                                (0, o.P0)((0, d.o)(A.intl.string(A.t["L/PwZf"]), c.Ck.SUCCESS)),
                            ));
                    },
                    icon: s.LinkIcon,
                },
            ],
            [j, E, v],
        );
    return (0, e.jsx)(p.ForwardModal, {
        ...u,
        onClose: t,
        source: a,
        customPreview: (0, e.jsx)(I, { skus: n }),
        customSubtitle: A.intl.string(A.t.yiaXeN),
        customSendHandler: w,
        additionalActions: P,
    });
}
