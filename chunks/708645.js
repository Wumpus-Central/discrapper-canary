var l = t(477900),
    r = t(582128),
    i = t(855986),
    a = t(46653),
    s = t(609425),
    d = t(245175);
let c = r.createContext(d.yw.OFF);
function u() {
    return r.useContext(c);
}
function o(e) {
    let { location: n, children: t } = e,
        { placement: r } = d.fM.useConfig({ location: n });
    return (0, l.jsx)(c.Provider, { value: r, children: t });
}
t.d(
    n,
    {},
    {
        ZQ: function (e) {
            let { user: n, guildId: t, location: r, children: d } = e,
                c = (0, i.bG)([a.default], () => a.default.getId() === n.id),
                u = (0, s.A)({ userId: n.id, guildId: t });
            return c || null == u ? d : (0, l.jsx)(o, { location: r, children: d });
        },
        sn: function () {
            return !(0, d.rA)(u(), d.yw.OFF);
        },
        uh: u,
    },
);
