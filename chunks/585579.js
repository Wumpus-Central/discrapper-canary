n.d(t, { E: () => d });
var a = n(627968),
    r = n(64700),
    l = n(405433),
    i = n(821609),
    s = n(688810),
    u = n(609174),
    c = n(602902),
    o = n(375708);
function d(e) {
    let { variant: t = "primary" } = e,
        n = (0, u.Y_)(),
        { analyticsLocations: d } = (0, s.Ay)(),
        f = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, c.K)([n], { analyticsLocations: d });
            },
            [n, d],
        );
    return (0, a.jsx)(i.$, {
        onClick: f,
        icon: l.l,
        variant: t,
        size: "sm",
        text: o.intl.string(o.t.RDE0Sc),
        fullWidth: !0,
    });
}
