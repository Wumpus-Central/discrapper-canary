var l = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(46653),
    s = n(609425),
    d = n(245175);
let c = r.createContext(d.yw.OFF);
function u() {
    return r.useContext(c);
}
function o(e) {
    let { location: t, children: n } = e,
        { placement: r } = d.fM.useConfig({ location: t });
    return (0, l.jsx)(c.Provider, { value: r, children: n });
}
n.d(
    t,
    {},
    {
        ZQ: function (e) {
            let { user: t, guildId: n, location: r, children: d } = e,
                c = (0, i.bG)([a.default], () => a.default.getId() === t.id),
                u = (0, s.A)({ userId: t.id, guildId: n });
            return c || null == u ? d : (0, l.jsx)(o, { location: r, children: d });
        },
        sn: function () {
            return !(0, d.rA)(u(), d.yw.OFF);
        },
        uh: u,
    },
);
