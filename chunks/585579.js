"use strict";
n.d(t, { E: () => u });
var i = n(627968),
    r = n(64700),
    s = n(405433),
    a = n(821609),
    o = n(688810),
    l = n(609174),
    _ = n(602902),
    d = n(985018);
let u = (e) => {
    let { variant: t = "primary" } = e,
        n = (0, l.Y_)(),
        { analyticsLocations: u } = (0, o.Ay)(),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, _.K)([n], { analyticsLocations: u });
            },
            [n, u],
        );
    return (0, i.jsx)(a.$, {
        onClick: c,
        icon: s.l,
        variant: t,
        size: "sm",
        text: d.intl.string(d.t.RDE0Sc),
        fullWidth: !0,
    });
};
