"use strict";
n.d(t, { J: () => p }), n(321073);
var i = n(554146),
    r = n(558845),
    s = n(826673),
    a = n(181079),
    o = n(379587),
    l = n(832275),
    u = n(976860),
    c = n(345942),
    d = n(967198),
    _ = n(711014),
    h = n(287809),
    f = n(652215);
let p = {
    binds: (() => {
        let e = [];
        for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
        return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            p = parseInt(t.split("+")[1], 10);
        if ((0 === p && (p = 10), !isNaN(p) && 0 !== p)) {
            if (1 === p) n = f.ME;
            else {
                let { enabled: e } = o.o.getConfig({ location: "jumpToGuild" }),
                    t = (0, r.dD)(i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
                    u = (0, s.k8)(i.M.FAVORITES_SERVER_ONBOARDING_INTRO);
                n = (0, l.J)(a.A, h.default, d.A, {
                    favoritesGuildXPEnabled: e,
                    isMenuItemDCSelected: t,
                    isIntroDCDismissed: u,
                })
                    ? 2 === p
                        ? f.YYv
                        : _.Ay.getFlattenedGuildIds()[p - 3]
                    : _.Ay.getFlattenedGuildIds()[p - 2];
            }
            if (null != n)
                return n === f.ME && null == d.A.getGuildId() ? (0, u.pX)(f.BVt.CHANNEL(n)) : (0, c.u)(n), !1;
        }
    },
};
