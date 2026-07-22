"use strict";
n.d(t, { J: () => h }), n(321073);
var i = n(554146),
    r = n(558845),
    a = n(826673),
    s = n(181079),
    l = n(379587),
    o = n(832275),
    d = n(976860),
    c = n(345942),
    u = n(967198),
    _ = n(711014),
    E = n(287809),
    A = n(652215);
let h = {
    binds: (() => {
        let e = [];
        for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
        return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            h = parseInt(t.split("+")[1], 10);
        if ((0 === h && (h = 10), !isNaN(h) && 0 !== h)) {
            if (1 === h) n = A.ME;
            else {
                let { enabled: e } = l.oS.getConfig({ location: "jumpToGuild" }),
                    t = (0, r.dD)(i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
                    d = (0, a.k8)(i.M.FAVORITES_SERVER_ONBOARDING_INTRO);
                n = (0, o.J)(s.A, E.default, u.A, {
                    favoritesGuildXPEnabled: e,
                    isMenuItemDCSelected: t,
                    isIntroDCDismissed: d,
                })
                    ? 2 === h
                        ? A.YYv
                        : _.Ay.getFlattenedGuildIds()[h - 3]
                    : _.Ay.getFlattenedGuildIds()[h - 2];
            }
            if (null != n)
                return n === A.ME && null == u.A.getGuildId() ? (0, d.pX)(A.BVt.CHANNEL(n)) : (0, c.u)(n), !1;
        }
    },
};
