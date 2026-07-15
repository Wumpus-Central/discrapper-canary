"use strict";
n.d(t, { E: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(405433),
    s = n(821609),
    l = n(688810),
    o = n(609174),
    d = n(721610),
    c = n(602902),
    u = n(375708);
function _(e) {
    let { variant: t = "primary" } = e,
        n = (0, o.Y_)(),
        { analyticsLocations: _ } = (0, l.Ay)(),
        { onSelectClip: E } = r.useContext(d.$),
        A = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != E) ? E(n) : (0, c.K)([n], { analyticsLocations: _ });
            },
            [n, _, E],
        );
    return (0, i.jsx)(s.$, {
        onClick: A,
        icon: a.l,
        variant: t,
        size: "sm",
        text: u.intl.string(u.t.RDE0Sc),
        fullWidth: !0,
    });
}
