"use strict";
a.d(t, { A: () => p });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    l = a(46054),
    o = a(465364),
    c = a(207963),
    _ = a(647901),
    d = a(560438),
    u = a(483496),
    f = a(206314);
function p(e) {
    let t,
        { content: a, className: s } = e,
        p =
            ((t = (0, c.jc)()),
            (0, r.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, o.ko)(t.message, d.l)
                              : (0, o.Le)({ channelId: t.channelId, renderOptions: d.l })),
                      l.A.parse(a, !0, e));
            }, [a, t])),
        m = (0, _.X)();
    return (0, n.jsx)("div", { className: i()(s, f.PT, u.T, m.className), children: p });
}
