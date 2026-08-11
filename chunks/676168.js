"use strict";
n.d(t, { DA: () => A, PK: () => u, UW: () => E, dt: () => d, k3: () => h, zO: () => _ });
var i = n(554146),
    r = n(558845),
    a = n(131607),
    s = n(595529),
    l = n(379587),
    o = n(49999);
let d = [
        i.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        i.M.FAVORITES_GUILD_NEW_BADGE,
        i.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    c = [i.M.FAVORITES_SERVER_ONBOARDING_INTRO, i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { isFreemium: t = !1 } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, r.Ay)((e) => e.postConnectionOpen),
        [s, o] = (0, a.kn)(t && e && n ? [i.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        [d] = (0, a.kn)(
            s === i.M.FAVORITES_SERVER_ONBOARDING_INTRO ? [i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [],
            void 0,
            !0,
        );
    return { shouldShowPopover: d === i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: o };
}
function _(e) {
    let { isFreemium: t = !1 } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        n =
            (function () {
                let [e] = (0, s.gc)(c);
                return e ?? null;
            })() === i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [r, o] = (0, a.kn)(t && e && n ? [i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { shouldShowPopover: r === i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: o };
}
function E() {
    return (0, r.dD)(i.M.FAVORITES_SERVER_ONBOARDING_INTRO) && (0, r.dD)(i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
}
function A() {
    let e = (0, r.mB)(i.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        t = (0, r.mB)(i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
    return e && t;
}
function h(e) {
    let { isFreemium: t = !1 } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        [n, r] = (0, a.kn)(t && e ? [i.M.FAVORITES_GUILD_NEW_BADGE] : []),
        s = n === i.M.FAVORITES_GUILD_NEW_BADGE;
    return {
        shouldShowBetaTag: s,
        dismissBetaTag: () => {
            s && r(o.i.TAKE_ACTION);
        },
    };
}
i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
