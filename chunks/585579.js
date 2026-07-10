"use strict";
n.d(t, { E: () => u });
var i = n(627968),
    r = n(64700),
    a = n(405433),
    s = n(821609),
    l = n(688810),
    o = n(609174),
    d = n(602902),
    c = n(375708);
function u(e) {
    let { variant: t = "primary" } = e,
        n = (0, o.Y_)(),
        { analyticsLocations: u } = (0, l.Ay)(),
        _ = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, d.K)([n], { analyticsLocations: u });
            },
            [n, u],
        );
    return (0, i.jsx)(s.$, {
        onClick: _,
        icon: a.l,
        variant: t,
        size: "sm",
        text: c.intl.string(c.t.RDE0Sc),
        fullWidth: !0,
    });
}
