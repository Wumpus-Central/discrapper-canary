s.d(t, { z: () => c });
var l = s(554146),
    n = s(826673),
    a = s(932001),
    i = s(757036),
    r = s(379587),
    o = s(652215);
let u = new Set([
    o.rbe.DM,
    o.rbe.GROUP_DM,
    o.rbe.GUILD_TEXT,
    o.rbe.GUILD_ANNOUNCEMENT,
    o.rbe.ANNOUNCEMENT_THREAD,
    o.rbe.GUILD_FORUM,
]);
function c(e) {
    let { location: t, isChannelSelected: s, channelType: o, isPopoverAllowed: c = !0 } = e,
        d = (0, n.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        m = (0, i.L)(),
        A = (0, r.m)({ location: t }).enabled && s && u.has(o) && c,
        [p, x] = (0, a.kn)(A && d ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
        showMenuItemPopover: p === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        markMenuItemPopoverAsDismissed: x,
        isPremium: m,
    };
}
