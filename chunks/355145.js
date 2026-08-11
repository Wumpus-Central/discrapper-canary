"use strict";
n.d(t, { B: () => l });
var i = n(676168),
    r = n(501672),
    a = n(652215);
let s = new Set([a.rbe.DM, a.rbe.GROUP_DM, a.rbe.GUILD_TEXT, a.rbe.GUILD_ANNOUNCEMENT, a.rbe.GUILD_FORUM]);
function l(e) {
    let { isChannelSelected: t, isTargetInViewport: n = !0, channelType: a, isPopoverAllowed: l = !0 } = e,
        o = (0, r.A)(),
        d = n && t && s.has(a) && l && o,
        { shouldShowPopover: c, markPopoverAsDismissed: u } = (0, i.zO)(d);
    return { showMenuItemPopover: c, markMenuItemPopoverAsDismissed: u };
}
