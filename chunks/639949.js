n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(594931),
    l = n(793030),
    c = n(481060),
    u = n(324060),
    d = n(989392),
    f = n(417830);
function p(e) {
    let {
            onClick: t,
            children: n,
            className: a,
            contentClassName: p,
            active: _ = !1,
            muteSound: m = !1,
            disabled: h = !1,
        } = e,
        g = i.useContext(u.Q),
        E = (0, c.dQu)(g.primaryColor).hex(),
        b = (0, c.dQu)(g.secondaryColor).hex(),
        y = (0, d.T)(s.Z),
        O = i.useCallback(() => {
            h || (m || y(), null == t || t());
        }, [t, m, y, h]);
    return (0, r.jsx)(l.P3F, {
        className: o()(a, f.outerButton, {
            [f.active]: _,
            [f.disabled]: h,
        }),
        style: { backgroundColor: E },
        onClick: O,
        children: (0, r.jsx)("div", {
            className: o()(p, f.innerButton),
            style: { borderColor: b },
            children: n,
        }),
    });
}
