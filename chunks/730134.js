i.d(a, { A: () => u });
var r = i(477900),
    s = i(582128),
    t = i(778712),
    d = i(97808),
    n = i(386467);
let u = s.memo(function (e) {
    var a;
    let { user: i, size: u = t._3.SIZE_32, animate: c = !1, "aria-hidden": h = !1, ...p } = e,
        o = s.useContext(n.A);
    return (0, r.jsx)(d.eu, {
        src: ((a = (0, t.FT)(u)), i.getAvatarURL(o, a, c)),
        size: u,
        "aria-label": h ? void 0 : i.username,
        "aria-hidden": h,
        ...p,
    });
});
