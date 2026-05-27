n.d(t, { z: () => h });
var l = n(17928),
    s = n(554146),
    i = n(192308),
    a = n(826673),
    r = n(131607),
    o = n(309010),
    u = n(313281),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function h(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: h, isPopoverAllowed: m = !0 } = e,
        p = (0, a.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: f } = (0, u.TW)(t),
        g = (0, l.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        A = (0, i.useHasAnyModalOpen)(),
        x = f && c && n && d.has(h) && m && !g && !A,
        [C, v] = (0, r.kn)(x && p ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: C === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: v };
}
