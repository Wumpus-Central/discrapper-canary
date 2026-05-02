n.d(t, { z: () => h });
var l = n(17928),
    s = n(554146),
    i = n(192308),
    a = n(826673),
    r = n(131607),
    o = n(309010),
    c = n(313281),
    u = n(652215);
let d = new Set([u.rbe.DM, u.rbe.GROUP_DM, u.rbe.GUILD_TEXT, u.rbe.GUILD_ANNOUNCEMENT, u.rbe.GUILD_FORUM]);
function h(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: u = !0, channelType: h, isPopoverAllowed: m = !0 } = e,
        p = (0, a.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: f } = (0, c.TW)(t),
        g = (0, l.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        A = (0, i.useHasAnyModalOpen)(),
        x = f && u && n && d.has(h) && m && !g && !A,
        [C, E] = (0, r.kn)(x && p ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: C === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: E };
}
