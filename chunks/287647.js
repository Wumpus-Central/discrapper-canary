n.d(t, { e: () => E });
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
    g = n(829716),
    h = n(981631),
    f = n(921944),
    b = n(698282),
    x = n(388032),
    _ = n(481916),
    j = n(401948);
function E(e) {
    let { markAsDismissed: t, targetElementRef: n, children: E } = e,
        { analyticsLocations: C } = (0, p.ZP)(),
        O = (0, r.useCallback)(() => {
            t(f.L.TAKE_ACTION),
                m.Z.open(h.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: C }),
                (0, g.I)({ analyticsLocations: C });
        }, [t, C]),
        v = (0, r.useCallback)(() => {
            t(f.L.USER_DISMISS);
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E,
            (0, i.jsxs)(a.m, {
                targetElementRef: n,
                shouldShow: !0,
                align: "right",
                position: "top",
                children: [
                    (0, i.jsx)(d.u, { onClick: v }),
                    (0, i.jsx)(o.V, {
                        asset: (0, i.jsx)("img", {
                            src: j.Z,
                            alt: "",
                        }),
                        size: "md",
                        className: _.asset,
                    }),
                    (0, i.jsx)(u.Y, { title: x.intl.string(b.default["1AE46+"]) }),
                    (0, i.jsxs)(s.xv, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        className: _.subtitle,
                        children: [x.intl.string(b.default.cNc1g4), (0, i.jsx)("br", {}), x.intl.string(x.t["4JNXHB"])],
                    }),
                    (0, i.jsx)(l.k, {
                        actions: [
                            {
                                text: x.intl.string(x.t.uw9zIy),
                                variant: "primary",
                                onClick: O,
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
