"use strict";
n.d(t, { J: () => u }), n(321073);
var i = n(749884),
    r = n(976860),
    a = n(345942),
    s = n(114129),
    l = n(442325),
    o = n(967198),
    d = n(711014),
    c = n(652215);
let u = {
    binds: (() => {
        let e = [];
        for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
        return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            u = parseInt(t.split("+")[1], 10);
        if ((0 === u && (u = 10), l.A.isTabBarVisible())) {
            let e = l.A.getTabs()[u - 1];
            return null != e && (0, s.ZD)(e.id), !1;
        }
        if (
            !isNaN(u) &&
            0 !== u &&
            null !=
                (n =
                    1 === u
                        ? c.ME
                        : (0, i.J)()
                          ? 2 === u
                              ? c.YYv
                              : d.Ay.getFlattenedGuildIds()[u - 3]
                          : d.Ay.getFlattenedGuildIds()[u - 2])
        )
            return n === c.ME && null == o.A.getGuildId() ? (0, r.pX)(c.BVt.CHANNEL(n)) : (0, a.u)(n), !1;
    },
};
