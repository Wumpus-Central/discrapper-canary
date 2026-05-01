"use strict";
n.d(t, { z: () => _ });
var i = n(17928),
    r = n(554146),
    s = n(192308),
    a = n(826673),
    o = n(131607),
    l = n(309010),
    u = n(313281),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function _(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: _, isPopoverAllowed: f = !0 } = e,
        h = (0, a.JZ)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: p } = (0, u.TW)(t),
        E = (0, i.bG)([l.A], () => null != l.A.getVoiceChannelId()),
        m = (0, s.useHasAnyModalOpen)(),
        g = p && c && n && d.has(_) && f && !E && !m,
        [A, I] = (0, o.kn)(g && h ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: A === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: I };
}
