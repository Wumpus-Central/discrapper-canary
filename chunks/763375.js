i.d(t, { default: () => P });
var a = i(477900),
    s = i(582128),
    n = i(834730),
    l = i(173936),
    o = i(691540),
    r = i(857250),
    c = i(97483),
    d = i(148494),
    u = i(9578),
    m = i(688810),
    C = i(429913),
    k = i(953832),
    p = i(451909),
    _ = i(223863),
    x = i(734057),
    h = i(174459),
    f = i(957565),
    g = i(403362),
    N = i(871123),
    E = i(366523),
    A = i(995393),
    I = i(652215),
    S = i(381941),
    w = i(375708),
    L = i(700957);
function O(e) {
    let { sku: t, guildId: i } = e,
        o = (0, C.h)(t.applicationId),
        r = s.useMemo(() => (0, N.OY)(i, t), [i, t]);
    return (0, a.jsxs)("div", {
        className: L.sq,
        children: [
            (0, a.jsxs)("div", {
                className: L.kx,
                children: [
                    (0, a.jsx)(u.A, {
                        title: t.name,
                        href: r,
                        children: (0, a.jsx)(n.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: t.name,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: L.Bo,
                        children: [
                            (0, a.jsx)(l.LinkIcon, { size: "xs", color: "currentColor", className: L.ds }),
                            (0, a.jsx)(n.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: w.intl.formatToPlainString(w.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(E.e, {
                containerClassName: L.wP,
                foregroundImageClassName: L.wP,
                backgroundImageClassName: L.wP,
                sku: t,
                shape: "square",
            }),
        ],
    });
}
function P(e) {
    let { sku: t, guildId: i, source: n, onClose: u, analyticsLocations: C, analyticsContext: E, ...L } = e,
        { analyticsLocations: P } = (0, m.Ay)(C ?? []),
        j = s.useCallback(
            async (e, a, s) => {
                let { withMessage: n, closeAfterSend: l } = a;
                s(!0);
                try {
                    let a = (await Promise.all(e.map(_.pk))).filter(g.Vq);
                    if (0 === a.length) return void s(!1);
                    l && u();
                    let m = (0, N.Q6)(i, t);
                    for (let e of a) {
                        let t = x.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, p.Ay.parse(t, m + (n ?? "")), !1, {
                                location: S.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, o.P0)((0, r.o)(w.intl.string(w.t.kwmYkt), c.Ck.SUCCESS));
                } catch (e) {
                    (0, o.P0)((0, r.o)(w.intl.string(w.t.iufib1), c.Ck.FAILURE));
                } finally {
                    s(!1);
                }
            },
            [u, i, t],
        ),
        v = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        h.default.track(I.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: E?.sessionId,
                            guild_id: i,
                            application_id: t.applicationId,
                            sku_id: t.id,
                            cta_type: A.Ng.COPY_LINK_BUTTON,
                            location_stack: P,
                        }),
                            (0, f.C)((0, N.OY)(i, t), () =>
                                (0, o.P0)((0, r.o)(w.intl.string(w.t["L/PwZf"]), c.Ck.SUCCESS)),
                            );
                    },
                    icon: l.LinkIcon,
                },
            ],
            [i, t, E?.sessionId, P],
        );
    return (0, a.jsx)(k.ForwardModal, {
        ...L,
        onClose: u,
        source: n,
        customPreview: (0, a.jsx)(O, { sku: t, guildId: i }),
        customSubtitle: w.intl.string(w.t.yiaXeN),
        customSendHandler: j,
        additionalActions: v,
    });
}
