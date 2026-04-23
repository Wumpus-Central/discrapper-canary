n.d(t, { z: () => f });
var a = n(17928),
    r = n(554146),
    l = n(192308),
    i = n(826673),
    o = n(932001),
    s = n(309010),
    d = n(313281),
    c = n(652215);
let u = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function f(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: f, isPopoverAllowed: p = !0 } = e,
        m = (0, i.JZ)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: b } = (0, d.TW)(t),
        v = (0, a.bG)([s.A], () => null != s.A.getVoiceChannelId()),
        h = (0, l.useHasAnyModalOpen)(),
        A = b && c && n && u.has(f) && p && !v && !h,
        [g, E] = (0, o.kn)(A && m ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: g === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: E };
}
