t.d(n, { default: () => w });
var a = t(627968),
    o = t(64700),
    r = t(834730),
    s = t(173936),
    i = t(691540),
    l = t(857250),
    c = t(97483),
    _ = t(843472),
    d = t(9578),
    u = t(688810),
    A = t(429913),
    C = t(911269),
    E = t(451909),
    m = t(223863),
    N = t(734057),
    p = t(954571),
    I = t(957565),
    O = t(403362),
    f = t(871123),
    T = t(366523),
    R = t(995393),
    h = t(652215),
    g = t(381941),
    S = t(985018),
    P = t(860738);
function b(e) {
    let { sku: n, guildId: t } = e,
        i = (0, A.h)(n.applicationId),
        l = o.useMemo(() => (0, f.OY)(t, n), [t, n]);
    return (0, a.jsxs)("div", {
        className: P.sq,
        children: [
            (0, a.jsxs)("div", {
                className: P.kx,
                children: [
                    (0, a.jsx)(d.A, {
                        title: n.name,
                        href: l,
                        children: (0, a.jsx)(r.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: n.name,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: P.Bo,
                        children: [
                            (0, a.jsx)(s.q, { size: "xs", color: "currentColor", className: P.ds }),
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: S.intl.formatToPlainString(S.t["CqpEC+"], { applicationName: i?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(T.e, {
                containerClassName: P.wP,
                foregroundImageClassName: P.wP,
                backgroundImageClassName: P.wP,
                sku: n,
                shape: "square",
            }),
        ],
    });
}
function w(e) {
    let { sku: n, guildId: t, source: r, onClose: d, analyticsLocations: A, analyticsContext: T, ...P } = e,
        { analyticsLocations: w } = (0, u.Ay)(A ?? []),
        y = o.useCallback(
            async (e, a, o) => {
                let { withMessage: r, closeAfterSend: s } = a;
                o(!0);
                try {
                    let a = (await Promise.all(e.map(m.pk))).filter(O.Vq);
                    if (0 === a.length) return void o(!1);
                    s && d();
                    let u = (0, f.Q6)(t, n);
                    for (let e of a) {
                        let n = N.A.getChannel(e);
                        null != n &&
                            (await _.A.sendMessage(n.id, E.Ay.parse(n, u + (r ?? "")), !1, {
                                location: g.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, i.P0)((0, l.o)(S.intl.string(S.t.kwmYkt), c.Ck.SUCCESS));
                } catch (e) {
                    (0, i.P0)((0, l.o)(S.intl.string(S.t.iufib1), c.Ck.FAILURE));
                } finally {
                    o(!1);
                }
            },
            [d, t, n],
        ),
        D = o.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        p.default.track(h.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: T?.sessionId,
                            guild_id: t,
                            sku_id: n.id,
                            cta_type: R.Ng.COPY_LINK_BUTTON,
                            location_stack: w,
                        }),
                            (0, I.C)((0, f.OY)(t, n), () =>
                                (0, i.P0)((0, l.o)(S.intl.string(S.t["L/PwZf"]), c.Ck.SUCCESS)),
                            );
                    },
                    icon: s.q,
                },
            ],
            [t, n, T?.sessionId, w],
        );
    return (0, a.jsx)(C.ForwardModal, {
        ...P,
        onClose: d,
        source: r,
        customPreview: (0, a.jsx)(b, { sku: n, guildId: t }),
        customSubtitle: S.intl.string(S.t.yiaXeN),
        customSendHandler: y,
        additionalActions: D,
    });
}
