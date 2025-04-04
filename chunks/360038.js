n.d(t, { u: () => f }), n(653041), n(301563);
var r = n(853856),
    i = n(706590),
    o = n(703656),
    a = n(769654),
    s = n(592125),
    l = n(496675),
    c = n(914010),
    u = n(771845),
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
        if ((0 === f && (f = 10), !isNaN(f) && 0 !== f) && null != (n = 1 === f ? d.ME : (0, i.z)(r.Z, s.Z, l.Z) ? (2 === f ? d.I_8 : u.ZP.getFlattenedGuildIds()[f - 3]) : u.ZP.getFlattenedGuildIds()[f - 2])) return n === d.ME && null == c.Z.getGuildId() ? (0, o.uL)(d.Z5c.CHANNEL(n)) : (0, a.X)(n), !1;
    }
};
