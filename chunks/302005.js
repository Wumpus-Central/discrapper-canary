"use strict";
n.d(t, { z: () => _ });
var i = n(17928),
    r = n(554146),
    a = n(192308),
    s = n(826673),
    l = n(131607),
    o = n(309010),
    d = n(313281),
    c = n(652215);
let u = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);
function _(e) {
    let { location: t, isChannelSelected: n, isTargetInViewport: c = !0, channelType: _, isPopoverAllowed: E = !0 } = e,
        A = (0, s.JZ)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        { isExperimentEnabled: h } = (0, d.TW)(t),
        I = (0, i.bG)([o.A], () => null != o.A.getVoiceChannelId()),
        f = (0, a.useHasAnyModalOpen)(),
        p = h && c && n && u.has(_) && E && !I && !f,
        [T, m] = (0, l.kn)(p && A ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return { showMenuItemPopover: T === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markMenuItemPopoverAsDismissed: m };
}
