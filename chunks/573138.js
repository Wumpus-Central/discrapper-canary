n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(854987),
    c = n(398225),
    u = n(256024);
function d(e) {
    let { children: t, noPadding: n = !1, centered: a = !0, verticalFlow: d = !1, className: f } = e,
        p = i.useContext(l.P),
        _ = (0, o.rdh)(p.primaryColor).hex(),
        h = (0, c.HL)();
    return (0, r.jsx)(c.gy.Provider, {
        value: h,
        children: (0, r.jsx)("div", {
            className: s()(
                u.kL,
                {
                    [u.pK]: !n,
                    [u.g7]: a,
                    [u.W5]: d,
                },
                f,
            ),
            style: { color: _ },
            children: t,
        }),
    });
}
