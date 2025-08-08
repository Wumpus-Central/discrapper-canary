n.d(t, { e: () => O });
var i = n(255367),
    r = n(73800),
    s = n(793030),
    a = n(920155),
    l = n(744399),
    o = n(454028),
    c = n(966902),
    d = n(237872),
    u = n(562618),
    m = n(230711),
    p = n(906732),
    g = n(70097),
    h = n(688465),
    f = n(829716),
    b = n(981631),
    x = n(921944),
    _ = n(698282),
    j = n(388032),
    E = n(481916),
    C = n(374104);
function O(e) {
    let { markAsDismissed: t, targetElementRef: n, children: O } = e,
        { analyticsLocations: v } = (0, p.ZP)(),
        S = (0, r.useCallback)(() => {
            t(x.L.TAKE_ACTION),
                m.Z.open(b.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: v }),
                (0, f.I)({ analyticsLocations: v });
        }, [t, v]),
        T = (0, r.useCallback)(() => {
            t(x.L.USER_DISMISS);
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            O,
            (0, i.jsxs)(a.m, {
                targetElementRef: n,
                shouldShow: !0,
                align: "right",
                position: "top",
                gradientColor: "nitro-pink",
                children: [
                    (0, i.jsx)(d.u, { onClick: T }),
                    (0, i.jsx)(o.V, {
                        asset: (0, i.jsx)(g.Z, {
                            src: C.Z,
                            width: 160,
                            height: 90,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                        }),
                        size: "md",
                        className: E.asset,
                    }),
                    (0, i.jsx)(h.Z, { className: E.betaTag }),
                    (0, i.jsx)(u.Y, { title: j.intl.string(_.default["1AE46+"]) }),
                    (0, i.jsxs)(s.xv, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        className: E.subtitle,
                        children: [j.intl.string(_.default.cNc1g4), (0, i.jsx)("br", {}), j.intl.string(j.t["4JNXHB"])],
                    }),
                    (0, i.jsx)(l.k, {
                        actions: [
                            {
                                text: j.intl.string(j.t.uw9zIy),
                                variant: "primary",
                                onClick: S,
                            },
                        ],
                    }),
                    (0, i.jsx)(c.$, {
                        caretConfig: {
                            position: "bottom",
                            align: "center",
                        },
                    }),
                ],
            }),
        ],
    });
}
