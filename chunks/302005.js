n.d(t, { z: () => A });
var i = n(17928),
    l = n(554146),
    s = n(192308),
    r = n(826673),
    a = n(131607),
    o = n(309010),
    u = n(313281),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function A(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: A, isPopoverAllowed: m = !0 } = e,
        g = (0, r.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: N } = (0, u.TW)(t),
        f = (0, i.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        p = (0, s.useHasAnyModalOpen)(),
        h = N && c && n && d.has(A) && m && !f && !p,
        [I, R] = (0, a.kn)(h && g ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: I === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: R };
}
