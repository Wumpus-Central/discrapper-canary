n.d(t, { u: () => _ }), n(539854), n(35282);
var r = n(853856),
    i = n(706590),
    a = n(365113),
    o = n(703656),
    s = n(769654),
    l = n(592125),
    c = n(496675),
    u = n(914010),
    d = n(771845),
    f = n(981631);
let _ = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push("mod+".concat(n));
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            _ = parseInt(t.split("+")[1], 10);
        if ((0 === _ && (_ = 10), isNaN(_) || 0 === _)) return;
        let p = a.o.getConfig({ location: "jumptoguild" }).dmsTab,
            h = +!!p;
        if (
            null !=
            (n =
                1 === _ || (p && 2 === _)
                    ? f.ME
                    : (0, i.z)(r.Z, l.Z, c.Z)
                      ? _ === 2 + h
                          ? f.I_8
                          : d.ZP.getFlattenedGuildIds()[_ - 3 - h]
                      : d.ZP.getFlattenedGuildIds()[_ - 2 - h])
        )
            return (
                n === f.ME && p && 2 === _
                    ? (0, o.uL)(f.Z5c.ME_DMS)
                    : n === f.ME && null == u.Z.getGuildId()
                      ? (0, o.uL)(f.Z5c.CHANNEL(n))
                      : (0, s.X)(n),
                !1
            );
    },
};
