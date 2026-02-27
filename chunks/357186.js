"use strict";
n.d(t, { c: () => f });
var r = n(379197),
    i = n(554146),
    s = n(933681),
    a = n(155718),
    o = n(933958),
    l = n(476370),
    u = n(457421),
    c = n(514190),
    d = n(173834),
    _ = n(188275);
function f(e) {
    switch (e) {
        case i.M.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            return u.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)?.version ?? 0;
        case i.M.GIFTING_PROMOTION_ICON:
        case i.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.M.GIFTING_PROMOTION_REMINDER:
            return (0, d.p)();
        case i.M.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, l.C)({ storeState: o.Ay.getState(), surface: a.YI.VOICE_LAUNCHER });
        case i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
            return 0;
        case i.M.COLLECTIBLES_SHOP_WIDE_BANNER:
            return (0, c.N)();
        case i.M.GAME_SHOP_ANNOUNCEMENT_MODAL:
            return _.Lo;
        case i.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD:
        case i.M.GAME_SHOP_ORBS_REWARD_BANNER:
        case i.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT:
        case i.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL:
            return 1;
        default:
            return (0, s.dr)(e, { andFail: !1 }), 0;
    }
}
