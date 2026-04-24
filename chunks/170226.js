"use strict";
n.d(t, { A: () => m });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(46054),
    o = n(465364),
    c = n(298236),
    d = n(647901);
let u = { allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
var _ = n(958517),
    p = n(992595);
function m(e) {
    let t,
        { content: n, className: i } = e,
        m =
            ((t = (0, c.jc)()),
            (0, r.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, o.ko)(t.message, u)
                              : (0, o.Le)({ channelId: t.channelId, renderOptions: u })),
                      s.A.parse(n, !0, e));
            }, [n, t])),
        h = (0, d.X)();
    return (0, a.jsx)("div", { className: l()(i, p.PT, _.T, h.className), children: m });
}
