r.d(n, {
    u: function () {
        return h;
    }
});
var i = r(653041);
var a = r(853856),
    o = r(706590),
    s = r(703656),
    l = r(769654),
    u = r(592125),
    c = r(496675),
    d = r(914010),
    f = r(771845),
    p = r(981631);
let h = {
    binds: (() => {
        let e = 10,
            n = [];
        for (let r = 1; r < e; r++) n.push('mod+'.concat(r));
        return n;
    })(),
    comboKeysBindGlobal: !0,
    action(e, n) {
        let r,
            i = parseInt(n.split('+')[1], 10);
        return (0 === i && (i = 10), isNaN(i) || 0 === i || null == (r = 1 === i ? p.ME : (0, o.z)(a.Z, u.Z, c.Z) ? (2 === i ? p.I_8 : f.ZP.getFlattenedGuildIds()[i - 3]) : f.ZP.getFlattenedGuildIds()[i - 2])) ? void 0 : r === p.ME && null == d.Z.getGuildId() ? ((0, s.uL)(p.Z5c.CHANNEL(r)), !1) : ((0, l.X)(r), !1);
    }
};
