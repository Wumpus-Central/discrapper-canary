n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(183766),
    l = n(158954),
    c = n(397927),
    u = n(854987),
    d = n(181380),
    f = n(420156);
function p(e) {
    let {
            onClick: t,
            children: n,
            className: a,
            contentClassName: p,
            active: _ = !1,
            muteSound: h = !1,
            disabled: m = !1,
        } = e,
        g = i.useContext(u.P),
        E = (0, c.rdh)(g.primaryColor).hex(),
        b = (0, c.rdh)(g.secondaryColor).hex(),
        y = (0, d.V)(o.A),
        O = i.useCallback(() => {
            m || (h || y(), null == t || t());
        }, [t, h, y, m]);
    return (0, r.jsx)(l.DUT, {
        className: s()(a, f.In, {
            [f.vu]: _,
            [f.r9]: m,
        }),
        style: { backgroundColor: E },
        onClick: O,
        children: (0, r.jsx)("div", {
            className: s()(p, f.LG),
            style: { borderColor: b },
            children: n,
        }),
    });
}
