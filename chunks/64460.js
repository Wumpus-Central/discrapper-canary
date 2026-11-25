n(321073);
var i = n(749884),
    r = n(976860),
    a = n(345942),
    s = n(114129),
    l = n(442325),
    o = n(858760),
    d = n(967198),
    c = n(711014),
    u = n(652215);
let _ = {
    binds: (() => {
        let e = [];
        for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
        return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            _ = parseInt(t.split("+")[1], 10);
        if ((0 === _ && (_ = 10), (0, o.Z6)("jumpToGuild"))) {
            let e = l.A.getTabs()[_ - 1];
            return (null != e && (0, s.ZD)(e.id, "keyboard_number"), !1);
        }
        if (
            !isNaN(_) &&
            0 !== _ &&
            null !=
                (n =
                    1 === _
                        ? u.ME
                        : (0, i.J)()
                          ? 2 === _
                              ? u.YYv
                              : c.Ay.getFlattenedGuildIds()[_ - 3]
                          : c.Ay.getFlattenedGuildIds()[_ - 2])
        )
            return (n === u.ME && null == d.A.getGuildId() ? (0, r.pX)(u.BVt.CHANNEL(n)) : (0, a.u)(n), !1);
    },
};
n.d(t, {}, { J: _ });
