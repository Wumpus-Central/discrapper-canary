"use strict";
n.d(t, { J: () => h }), n(321073);
var r = n(554146),
    i = n(771781),
    s = n(826673),
    a = n(181079),
    o = n(379587),
    l = n(832275),
    u = n(976860),
    c = n(345942),
    d = n(967198),
    _ = n(711014),
    f = n(287809),
    p = n(652215);
let h = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push(`mod+${n}`);
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            h = parseInt(t.split("+")[1], 10);
        if ((0 === h && (h = 10), !isNaN(h) && 0 !== h)) {
            if (1 === h) n = p.ME;
            else {
                let { enabled: e, hasHigherPrivileges: t } = o.o.getConfig({ location: "jumpToGuild" }),
                    u = (0, i.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
                    c = (0, s.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
                n = (0, l.J)(a.A, f.default, d.A, {
                    favoritesGuildXPEnabled: e,
                    hasHigherPrivileges: t,
                    isMenuItemDCSelected: u,
                    isIntroDCDismissed: c,
                })
                    ? 2 === h
                        ? p.YYv
                        : _.Ay.getFlattenedGuildIds()[h - 3]
                    : _.Ay.getFlattenedGuildIds()[h - 2];
            }
            if (null != n)
                return n === p.ME && null == d.A.getGuildId() ? (0, u.pX)(p.BVt.CHANNEL(n)) : (0, c.u)(n), !1;
        }
    },
};
