n.d(t, { B: () => a });
var i = n(676168),
    r = n(501672),
    l = n(652215);
let s = new Set([l.rbe.DM, l.rbe.GROUP_DM, l.rbe.GUILD_TEXT, l.rbe.GUILD_ANNOUNCEMENT, l.rbe.GUILD_FORUM]);
function a(e) {
    let { isChannelSelected: t, isTargetInViewport: n = !0, channelType: l, isPopoverAllowed: a = !0 } = e,
        o = (0, r.A)(),
        u = n && t && s.has(l) && a && o,
        { shouldShowPopover: c, markPopoverAsDismissed: d } = (0, i.zO)(u);
    return { showMenuItemPopover: c, markMenuItemPopoverAsDismissed: d };
}
