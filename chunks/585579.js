n.d(t, { E: () => p });
var l = n(627968),
    a = n(64700),
    r = n(405433),
    i = n(821609),
    s = n(688810),
    u = n(609174),
    c = n(721610),
    o = n(602902),
    d = n(375708);
function p(e) {
    let { variant: t = "primary" } = e,
        n = (0, u.Y_)(),
        { analyticsLocations: p } = (0, s.Ay)(),
        { onSelectClip: f } = a.useContext(c.$),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != f) ? f(n) : (0, o.K)([n], { analyticsLocations: p });
            },
            [n, p, f],
        );
    return (0, l.jsx)(i.$, {
        onClick: m,
        icon: r.l,
        variant: t,
        size: "sm",
        text: d.intl.string(d.t.RDE0Sc),
        fullWidth: !0,
    });
}
