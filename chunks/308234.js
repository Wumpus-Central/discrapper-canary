n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(707554),
    o = n(834730),
    d = n(415350),
    c = n(162025),
    u = n(992595);
function m(e) {
    let { color: t, className: n, variant: a, text: m, lineClamp: _ } = e,
        h = (0, r.$)(),
        p = l.useMemo(
            () =>
                null == m
                    ? null
                    : (0, d.A)(m, !0, { allowHeading: null == _, allowList: null == _, initialHeaderLevel: h }),
            [m, _, h],
        );
    return (0, i.jsx)(o.E, {
        className: s()(n, u.PT, { [c.E]: null != _ && _ > 1, [c.D]: 1 === _ }),
        color: t,
        variant: a,
        lineClamp: _,
        children: p,
    });
}
