"use strict";
n.d(t, { dt: () => _, k3: () => f, r1: () => I, zO: () => h });
var i = n(582128),
    r = n(554146),
    a = n(131607),
    s = n(595529),
    l = n(379587),
    o = n(93055),
    d = n(501672),
    c = n(771959),
    u = n(49999);
let _ = [
        r.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        r.M.FAVORITES_GUILD_NEW_BADGE,
        r.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    E = [r.M.FAVORITES_SERVER_ONBOARDING_INTRO, r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM],
    A = [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
function h(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, o.DZ)(),
        i = (0, d.A)(),
        c =
            (function () {
                let [e] = (0, s.gc)(E);
                return e ?? null;
            })() === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [u, _] = (0, a.kn)(t && e && i && !n && c ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { shouldShowPopover: u === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: _ };
}
function I() {
    let [e] = (0, s.gc)(A),
        t = e === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [n, a] = i.useState(t);
    return t && !n && a(!0), (t || n) && !(0, c.zW)();
}
function f(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        [n, i] = (0, a.kn)(t && e ? [r.M.FAVORITES_GUILD_NEW_BADGE] : []),
        s = n === r.M.FAVORITES_GUILD_NEW_BADGE;
    return {
        shouldShowBetaTag: s,
        dismissBetaTag: () => {
            s && i(u.i.TAKE_ACTION);
        },
    };
}
