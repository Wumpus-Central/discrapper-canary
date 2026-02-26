"use strict";
n.d(t, { J: () => f }), n(321073);
var r = n(181079),
    i = n(957300),
    s = n(616075),
    a = n(832275),
    o = n(976860),
    l = n(345942),
    u = n(967198),
    c = n(711014),
    d = n(287809),
    _ = n(652215);
let f = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push(`mod+${n}`);
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            f = parseInt(t.split("+")[1], 10);
        if ((0 === f && (f = 10), !isNaN(f) && 0 !== f)) {
            if (1 === f) n = _.ME;
            else {
                let e = i.E.getState().isPreviewMode,
                    { enabled: t, hasHigherPrivileges: o } = s.w.getConfig({ location: "jumpToGuild" });
                n = (0, a.J)(r.A, d.default, e, t, o)
                    ? 2 === f
                        ? _.YYv
                        : c.Ay.getFlattenedGuildIds()[f - 3]
                    : c.Ay.getFlattenedGuildIds()[f - 2];
            }
            if (null != n)
                return n === _.ME && null == u.A.getGuildId() ? (0, o.pX)(_.BVt.CHANNEL(n)) : (0, l.u)(n), !1;
        }
    },
};
