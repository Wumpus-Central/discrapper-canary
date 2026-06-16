n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(46054),
    s = n(465364),
    u = n(298236),
    d = n(647901);
let c = { allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
var h = n(958517),
    v = n(992595);
function f(e) {
    let t,
        { content: n, className: a } = e,
        f =
            ((t = (0, u.jc)()),
            (0, i.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, s.ko)(t.message, c)
                              : (0, s.Le)({ channelId: t.channelId, renderOptions: c })),
                      o.A.parse(n, !0, e));
            }, [n, t])),
        p = (0, d.X)();
    return (0, r.jsx)("div", { className: l()(a, v.PT, h.T, p.className), children: f });
}
