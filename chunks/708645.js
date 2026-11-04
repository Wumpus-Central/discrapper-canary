var l = n(477900),
    r = n(582128),
    a = n(855986),
    i = n(46653),
    s = n(609425),
    d = n(245175);
let u = r.createContext(d.yw.OFF);
function c() {
    return r.useContext(u);
}
function o(e) {
    let { location: t, children: n } = e,
        { placement: r } = d.fM.useConfig({ location: t });
    return (0, l.jsx)(u.Provider, { value: r, children: n });
}
n.d(
    t,
    {},
    {
        ZQ: function (e) {
            let { user: t, guildId: n, location: r, children: d } = e,
                u = (0, a.bG)([i.default], () => i.default.getId() === t.id),
                c = (0, s.A)({ userId: t.id, guildId: n });
            return u || null == c ? d : (0, l.jsx)(o, { location: r, children: d });
        },
        sn: function () {
            return !(0, d.rA)(c(), d.yw.OFF);
        },
        uh: c,
    },
);
