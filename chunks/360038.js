n.d(t, { u: () => p }), n(539854), n(35282);
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
let p = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push("mod+".concat(n));
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            p = parseInt(t.split("+")[1], 10);
        if ((0 === p && (p = 10), isNaN(p) || 0 === p)) return;
        let _ = a.o.getConfig({ location: "jumptoguild" }).dmsTab,
            m = +!!_;
        if (
            null !=
            (n =
                1 === p || (_ && 2 === p)
                    ? f.ME
                    : (0, i.z)(r.Z, l.Z, c.Z)
                      ? p === 2 + m
                          ? f.I_8
                          : d.ZP.getFlattenedGuildIds()[p - 3 - m]
                      : d.ZP.getFlattenedGuildIds()[p - 2 - m])
        )
            return (
                n === f.ME && _ && 2 === p
                    ? (0, o.uL)(f.Z5c.ME_DMS)
                    : n === f.ME && null == u.Z.getGuildId()
                      ? (0, o.uL)(f.Z5c.CHANNEL(n))
                      : (0, s.X)(n),
                !1
            );
    },
};
