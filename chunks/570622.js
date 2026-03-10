n.d(t, { z: () => u });
var l = n(554146),
    s = n(826673),
    a = n(932001),
    i = n(93055),
    r = n(652215);
let o = new Set([
    r.rbe.DM,
    r.rbe.GROUP_DM,
    r.rbe.GUILD_TEXT,
    r.rbe.GUILD_ANNOUNCEMENT,
    r.rbe.ANNOUNCEMENT_THREAD,
    r.rbe.GUILD_FORUM,
]);
function u(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: r = !0, channelType: u, isPopoverAllowed: c = !0 } = e,
        d = (0, s.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: m } = (0, i.TW)(t),
        A = m && r && n && o.has(u) && c,
        [p, f] = (0, a.kn)(A && d ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: p === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: f };
}
