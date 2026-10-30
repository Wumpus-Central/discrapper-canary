(i.r(t), i.d(t, { default: () => g }));
var e = i(477900),
    l = i(582128),
    c = i(806163),
    s = i(17928),
    u = i(398773),
    a = i(972013),
    d = i(751841),
    o = i(152367),
    r = i(189252),
    p = i(976860),
    f = i(381991),
    h = i(809526),
    k = i(105292),
    j = i(274158);
function A() {
    (0, d.q6)((0, p.JK)().location.pathname) ? (0, f.lB)() : (0, f.Ay)();
}
function b() {
    return (0, e.jsx)("div", {
        className: j.N,
        children: (0, e.jsx)(r.A, { icon: o.D, tooltip: k.intl.string(h.default.uk6jhJ), onClick: A }),
    });
}
function g(n) {
    let { placement: t } = n;
    !(function (n) {
        let { pathname: t, search: i, hash: e } = (0, c.zy)();
        l.useEffect(() => {
            n && !(0, d.q6)(t) && (0, u.v8)(`${t}${i}${e}`);
        }, [n, t, i, e]);
    })("leading" === t);
    let i = (0, s.bG)([a.A], () => a.A.isPinned());
    return "leading" !== t || i ? null : (0, e.jsx)(b, {});
}
