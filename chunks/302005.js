n.d(t, { z: () => f });
var i = n(17928),
    l = n(554146);
if (88245 != n.j) var r = n(192308);
var s = n(826673),
    a = n(131607),
    o = n(309010),
    u = n(313281),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function f(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: f, isPopoverAllowed: A = !0 } = e,
        m = (0, s.HX)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: g } = (0, u.TW)(t),
        N = (0, i.bG)([o.Ay], () => null != o.Ay.getVoiceChannelId()),
        v = (0, r.useHasAnyModalOpen)(),
        p = g && c && n && d.has(f) && A && !N && !v,
        [h, I] = (0, a.kn)(p && m ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: h === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: I };
}
