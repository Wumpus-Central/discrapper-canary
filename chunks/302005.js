n.d(t, { z: () => p });
var l = n(311907),
    s = n(554146),
    a = n(192308),
    r = n(826673),
    i = n(932001),
    o = n(309010),
    u = n(93055),
    d = n(652215);
let c = new Set([d.rbe.DM, d.rbe.GROUP_DM, d.rbe.GUILD_TEXT, d.rbe.GUILD_ANNOUNCEMENT, d.rbe.GUILD_FORUM]);
function p(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: d = !0, channelType: p, isPopoverAllowed: m = !0 } = e,
        f = (0, r.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: A } = (0, u.TW)(t),
        v = (0, l.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        h = (0, a.useHasAnyModalOpen)(),
        E = A && d && n && c.has(p) && m && !v && !h,
        [g, x] = (0, i.kn)(E && f ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: g === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: x };
}
