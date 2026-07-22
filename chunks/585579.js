n.d(t, { E: () => f });
var l = n(627968),
    r = n(64700),
    a = n(405433),
    i = n(821609),
    s = n(688810),
    u = n(609174),
    c = n(721610),
    o = n(602902),
    d = n(375708);
function f(e) {
    let { variant: t = "primary" } = e,
        n = (0, u.Y_)(),
        { analyticsLocations: f } = (0, s.Ay)(),
        { onSelectClip: p } = r.useContext(c.$),
        m = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != p) ? p(n) : (0, o.K)([n], { analyticsLocations: f });
            },
            [n, f, p],
        );
    return (0, l.jsx)(i.$, {
        onClick: m,
        icon: a.l,
        variant: t,
        size: "sm",
        text: d.intl.string(d.t.RDE0Sc),
        fullWidth: !0,
    });
}
