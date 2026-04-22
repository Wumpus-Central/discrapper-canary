"use strict";
n.d(t, { J: () => h }), n(321073);
var r = n(554146),
    i = n(771781),
    s = n(826673),
    a = n(181079),
    o = n(379587),
    l = n(832275),
    u = n(976860),
    d = n(345942),
    c = n(967198),
    _ = n(711014),
    f = n(287809),
    E = n(652215);
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
            if (1 === h) n = E.ME;
            else {
                let { enabled: e } = o.o.getConfig({ location: "jumpToGuild" }),
                    t = (0, i.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
                    u = (0, s.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
                n = (0, l.J)(a.A, f.default, c.A, {
                    favoritesGuildXPEnabled: e,
                    isMenuItemDCSelected: t,
                    isIntroDCDismissed: u,
                })
                    ? 2 === h
                        ? E.YYv
                        : _.Ay.getFlattenedGuildIds()[h - 3]
                    : _.Ay.getFlattenedGuildIds()[h - 2];
            }
            if (null != n)
                return n === E.ME && null == c.A.getGuildId() ? (0, u.pX)(E.BVt.CHANNEL(n)) : (0, d.u)(n), !1;
        }
    },
};
