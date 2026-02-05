"use strict";
n.d(t, { J: () => _ }), n(321073);
var r = n(181079),
    i = n(832275),
    a = n(976860),
    s = n(345942),
    o = n(734057),
    l = n(576705),
    u = n(967198),
    c = n(711014),
    d = n(652215);
let _ = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push(`mod+${n}`);
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            _ = parseInt(t.split("+")[1], 10);
        if (
            (0 === _ && (_ = 10), !isNaN(_) && 0 !== _) &&
            null !=
                (n =
                    1 === _
                        ? d.ME
                        : (0, i.J)(r.A, o.A, l.A)
                          ? 2 === _
                              ? d.YYv
                              : c.Ay.getFlattenedGuildIds()[_ - 3]
                          : c.Ay.getFlattenedGuildIds()[_ - 2])
        )
            return n === d.ME && null == u.A.getGuildId() ? (0, a.pX)(d.BVt.CHANNEL(n)) : (0, s.u)(n), !1;
    },
};
