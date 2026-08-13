"use strict";
n.d(t, { dt: () => u, k3: () => I, r1: () => h, zO: () => A });
var i = n(582128),
    r = n(554146),
    a = n(131607),
    s = n(595529),
    l = n(379587),
    o = n(93055),
    d = n(501672),
    c = n(49999);
let u = [
        r.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        r.M.FAVORITES_GUILD_NEW_BADGE,
        r.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    _ = [r.M.FAVORITES_SERVER_ONBOARDING_INTRO, r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM],
    E = [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
function A(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, o.DZ)(),
        i = (0, d.A)(),
        c =
            (function () {
                let [e] = (0, s.gc)(_);
                return e ?? null;
            })() === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [u, E] = (0, a.kn)(t && e && i && !n && c ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { shouldShowPopover: u === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: E };
}
function h() {
    let [e] = (0, s.gc)(E),
        t = e === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [n, a] = i.useState(t);
    return t && !n && a(!0), t || n;
}
function I(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
        [n, i] = (0, a.kn)(t && e ? [r.M.FAVORITES_GUILD_NEW_BADGE] : []),
        s = n === r.M.FAVORITES_GUILD_NEW_BADGE;
    return {
        shouldShowBetaTag: s,
        dismissBetaTag: () => {
            s && i(c.i.TAKE_ACTION);
        },
    };
}
