"use strict";
n.d(t, { B: () => d });
var i = n(17928),
    r = n(192308),
    a = n(309010),
    s = n(676168),
    l = n(652215);
let o = new Set([l.rbe.DM, l.rbe.GROUP_DM, l.rbe.GUILD_TEXT, l.rbe.GUILD_ANNOUNCEMENT, l.rbe.GUILD_FORUM]);
function d(e) {
    let { isChannelSelected: t, isTargetInViewport: n = !0, channelType: l, isPopoverAllowed: d = !0 } = e,
        c = (0, i.bG)([a.Ay], () => null != a.Ay.getVoiceChannelId()),
        u = (0, r.useHasAnyModalOpen)(),
        _ = n && t && o.has(l) && d && !c && !u,
        { shouldShowPopover: E, markPopoverAsDismissed: A } = (0, s.zO)(_);
    return { showMenuItemPopover: E, markMenuItemPopoverAsDismissed: A };
}
