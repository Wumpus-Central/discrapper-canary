"use strict";
n.d(t, { DA: () => T, PK: () => h, UW: () => p, dt: () => _, k3: () => m, r1: () => f, zO: () => I });
var i = n(582128),
    r = n(554146),
    a = n(558845),
    s = n(131607),
    l = n(595529),
    o = n(379587),
    d = n(93055),
    c = n(501672),
    u = n(49999);
let _ = [
        r.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        r.M.FAVORITES_GUILD_NEW_BADGE,
        r.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    E = [r.M.FAVORITES_SERVER_ONBOARDING_INTRO, r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM],
    A = [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
function h() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, a.Ay)((e) => e.postConnectionOpen),
        [i, l] = (0, s.kn)(t && e && n ? [r.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        [d] = (0, s.kn)(
            i === r.M.FAVORITES_SERVER_ONBOARDING_INTRO ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [],
            void 0,
            !0,
        );
    return { shouldShowPopover: d === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: l };
}
function I(e) {
    let { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, d.DZ)(),
        i = (0, c.A)(),
        a =
            (function () {
                let [e] = (0, l.gc)(E);
                return e ?? null;
            })() === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [u, _] = (0, s.kn)(t && e && i && !n && a ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { shouldShowPopover: u === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: _ };
}
function f() {
    let [e] = (0, l.gc)(A),
        t = e === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [n, a] = i.useState(t);
    return t && !n && a(!0), t || n;
}
function p() {
    return (0, a.dD)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO) && (0, a.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
}
function T() {
    let e = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        t = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
    return e && t;
}
function m(e) {
    let { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        [n, i] = (0, s.kn)(t && e ? [r.M.FAVORITES_GUILD_NEW_BADGE] : []),
        a = n === r.M.FAVORITES_GUILD_NEW_BADGE;
    return {
        shouldShowBetaTag: a,
        dismissBetaTag: () => {
            a && i(u.i.TAKE_ACTION);
        },
    };
}
