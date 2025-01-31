n.d(t, { u: () => f }), n(653041);
var i = n(853856),
    r = n(706590),
    a = n(703656),
    s = n(769654),
    o = n(592125),
    l = n(496675),
    u = n(914010),
    c = n(771845),
    d = n(981631);
let f = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push('mod+'.concat(n));
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            f = parseInt(t.split('+')[1], 10);
        return (0 === f && (f = 10), isNaN(f) || 0 === f || null == (n = 1 === f ? d.ME : (0, r.z)(i.Z, o.Z, l.Z) ? (2 === f ? d.I_8 : c.ZP.getFlattenedGuildIds()[f - 3]) : c.ZP.getFlattenedGuildIds()[f - 2])) ? void 0 : (n === d.ME && null == u.Z.getGuildId() ? (0, a.uL)(d.Z5c.CHANNEL(n)) : (0, s.X)(n), !1);
    }
};
