n.d(t, { e: () => N });
var i = n(951288),
    r = n(647438),
    s = n(793030),
    a = n(442837),
    l = n(920155),
    o = n(744399),
    c = n(454028),
    d = n(966902),
    u = n(237872),
    m = n(562618),
    p = n(230711),
    g = n(906732),
    h = n(70097),
    f = n(710845),
    b = n(688465),
    x = n(451478),
    _ = n(829716),
    j = n(981631),
    E = n(921944),
    C = n(693450),
    O = n(388032),
    v = n(520005),
    S = n(374104);
let T = new f.Z("DisplayNameStylesCoachmark");
function N(e) {
    let { markAsDismissed: t, targetElementRef: n, children: f } = e,
        { analyticsLocations: N } = (0, g.ZP)(),
        I = (0, r.useRef)(null),
        y = (0, a.e7)([x.Z], () => x.Z.isFocused()),
        A = (0, r.useCallback)(() => {
            t(E.L.TAKE_ACTION),
                p.Z.open(j.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: N }),
                (0, _.I)({ analyticsLocations: N });
        }, [t, N]),
        P = (0, r.useCallback)(() => {
            t(E.L.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            var e, t, n;
            y && (null == (e = I.current) ? void 0 : e.paused)
                ? null == (t = I.current) || t.play().catch(T.error)
                : y || null == (n = I.current) || n.pause();
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                f,
                (0, i.jsxs)(l.m, {
                    targetElementRef: n,
                    shouldShow: !0,
                    align: "right",
                    position: "top",
                    gradientColor: "nitro-pink",
                    children: [
                        (0, i.jsx)(u.u, { onClick: P }),
                        (0, i.jsx)(c.V, {
                            asset: (0, i.jsx)(h.Z, {
                                src: S.Z,
                                width: 160,
                                height: 69,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                ref: I,
                            }),
                            size: "md",
                            className: v.asset,
                        }),
                        (0, i.jsx)(b.Z, { className: v.betaTag }),
                        (0, i.jsx)(m.Y, { title: O.intl.string(C.default["1AE46+"]) }),
                        (0, i.jsxs)(s.xv, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: v.subtitle,
                            children: [
                                O.intl.string(C.default.cNc1g4),
                                (0, i.jsx)("br", {}),
                                O.intl.string(O.t["4JNXHB"]),
                            ],
                        }),
                        (0, i.jsx)(o.k, {
                            actions: [
                                {
                                    text: O.intl.string(O.t.uw9zIy),
                                    variant: "primary",
                                    onClick: A,
                                },
                            ],
                        }),
                        (0, i.jsx)(d.$, {
                            caretConfig: {
                                position: "bottom",
                                align: "center",
                            },
                        }),
                    ],
                }),
            ],
        })
    );
}
