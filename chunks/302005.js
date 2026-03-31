n.d(t, { z: () => m });
var l = n(311907),
    s = n(554146),
    i = n(192308),
    a = n(826673),
    r = n(932001),
    u = n(309010),
    o = n(93055),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function m(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: m, isPopoverAllowed: A = !0 } = e,
        E = (0, a.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: p } = (0, o.TW)(t),
        f = (0, l.bG)([u.A], () => null != u.A.getVoiceChannelId()),
        S = (0, i.useHasAnyModalOpen)(),
        h = p && c && n && d.has(m) && A && !f && !S,
        [T, x] = (0, r.kn)(h && E ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: T === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: x };
}
