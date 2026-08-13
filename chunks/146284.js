"use strict";
n.d(t, { DA: () => S, r1: () => m, zO: () => T, dt: () => h, UW: () => g, k3: () => N, PK: () => p });
var i = n(582128),
    r = n(554146),
    a = n(558845),
    s = n(131607),
    l = n(595529),
    o = n(379587),
    d = n(93055),
    c = n(17928),
    u = n(192308),
    _ = n(309010);
function E() {
    let e = (0, c.bG)([_.Ay], () => null != _.Ay.getVoiceChannelId()),
        t = (0, u.useHasAnyModalOpen)();
    return !e && !t;
}
var A = n(49999);
let h = [
        r.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        r.M.FAVORITES_GUILD_NEW_BADGE,
        r.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    I = [r.M.FAVORITES_SERVER_ONBOARDING_INTRO, r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM],
    f = [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
function p(e) {
    let { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        n = E(),
        i = (0, a.Ay)((e) => e.postConnectionOpen),
        [l, d] = (0, s.kn)(t && e && n && i ? [r.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        [c] = (0, s.kn)(
            l === r.M.FAVORITES_SERVER_ONBOARDING_INTRO ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [],
            void 0,
            !0,
        );
    return { shouldShowPopover: c === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: d };
}
function T(e) {
    let { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        n = (0, d.DZ)(),
        i = E(),
        a =
            (function () {
                let [e] = (0, l.gc)(I);
                return e ?? null;
            })() === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [c, u] = (0, s.kn)(t && e && i && !n && a ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { shouldShowPopover: c === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: u };
}
function m() {
    let [e] = (0, l.gc)(f),
        t = e === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        [n, a] = i.useState(t);
    return t && !n && a(!0), t || n;
}
function g() {
    return (0, a.dD)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO) && (0, a.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
}
function S() {
    let e = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        t = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
    return e && t;
}
function N(e) {
    let { isFreemium: t } = (0, o.m)({ location: "FavoritesDismissibleContent" }),
        [n, i] = (0, s.kn)(t && e ? [r.M.FAVORITES_GUILD_NEW_BADGE] : []),
        a = n === r.M.FAVORITES_GUILD_NEW_BADGE;
    return {
        shouldShowBetaTag: a,
        dismissBetaTag: () => {
            a && i(A.i.TAKE_ACTION);
        },
    };
}
