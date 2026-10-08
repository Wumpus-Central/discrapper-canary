n.d(t, { ZQ: () => f, sn: () => o, uh: () => c });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    i = n(280450),
    s = n(609425),
    d = n(245175);
let u = r.createContext(d.yw.OFF);
function c() {
    return r.useContext(u);
}
function o() {
    return !(0, d.rA)(c(), d.yw.OFF);
}
function y(e) {
    let { location: t, children: n } = e,
        { placement: r } = d.fM.useConfig({ location: t });
    return (0, l.jsx)(u.Provider, { value: r, children: n });
}
function f(e) {
    let { user: t, guildId: n, location: r, children: d } = e,
        u = (0, a.bG)([i.default], () => i.default.getId() === t.id),
        c = (0, s.A)({ userId: t.id, guildId: n });
    return u || null == c ? d : (0, l.jsx)(y, { location: r, children: d });
}
