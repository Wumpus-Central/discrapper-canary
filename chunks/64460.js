"use strict";
n.d(t, { J: () => d }), n(321073);
var i = n(832275),
    r = n(976860),
    a = n(345942),
    s = n(967198),
    l = n(711014),
    o = n(652215);
let d = {
    binds: (() => {
        let e = [];
        for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
        return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            d = parseInt(t.split("+")[1], 10);
        if (
            (0 === d && (d = 10), !isNaN(d) && 0 !== d) &&
            null !=
                (n =
                    1 === d
                        ? o.ME
                        : (0, i.J)()
                          ? 2 === d
                              ? o.YYv
                              : l.Ay.getFlattenedGuildIds()[d - 3]
                          : l.Ay.getFlattenedGuildIds()[d - 2])
        )
            return n === o.ME && null == s.A.getGuildId() ? (0, r.pX)(o.BVt.CHANNEL(n)) : (0, a.u)(n), !1;
    },
};
