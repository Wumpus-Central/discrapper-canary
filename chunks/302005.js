n.d(t, { z: () => A });
var i = n(17928),
    l = n(554146);
if (88245 != n.j) var r = n(192308);
var s = n(826673),
    a = n(131607),
    o = n(309010),
    u = n(313281),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function A(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: A, isPopoverAllowed: f = !0 } = e,
        m = (0, s.HX)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: N } = (0, u.TW)(t),
        v = (0, i.bG)([o.Ay], () => null != o.Ay.getVoiceChannelId()),
        g = (0, r.useHasAnyModalOpen)(),
        p = N && c && n && d.has(A) && f && !v && !g,
        [_, E] = (0, a.kn)(p && m ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: _ === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: E };
}
