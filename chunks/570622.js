n.d(t, { z: () => c });
var l = n(554146),
    s = n(826673),
    a = n(932001),
    i = n(757036),
    r = n(379587),
    o = n(652215);
let u = new Set([
    o.rbe.DM,
    o.rbe.GROUP_DM,
    o.rbe.GUILD_TEXT,
    o.rbe.GUILD_ANNOUNCEMENT,
    o.rbe.ANNOUNCEMENT_THREAD,
    o.rbe.GUILD_FORUM,
]);
function c(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: o = !0, channelType: c, isPopoverAllowed: d = !0 } = e,
        m = (0, s.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        A = (0, i.L)(),
        p = (0, r.m)({ location: t }).enabled && o && n && u.has(c) && d,
        [h, x] = (0, a.kn)(p && m ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
        showMenuItemPopover: h === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        markMenuItemPopoverAsDismissed: x,
        isPremium: A,
    };
}
