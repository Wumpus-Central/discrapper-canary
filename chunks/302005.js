n.d(t, { z: () => h });
var i = n(17928),
    l = n(554146),
    s = n(192308),
    a = n(826673),
    r = n(131607),
    o = n(309010),
    d = n(313281),
    c = n(652215);
let u = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function h(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: h, isPopoverAllowed: p = !0 } = e,
        m = (0, a.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: f } = (0, d.TW)(t),
        g = (0, i.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        A = (0, s.useHasAnyModalOpen)(),
        x = f && c && n && u.has(h) && p && !g && !A,
        [v, E] = (0, r.kn)(x && m ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: v === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: E };
}
