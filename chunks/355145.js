n.d(t, { B: () => u });
var i = n(17928);
if (88245 != n.j) var r = n(192308);
var l = n(309010),
    s = n(676168),
    a = n(652215);
let o = new Set([a.rbe.DM, a.rbe.GROUP_DM, a.rbe.GUILD_TEXT, a.rbe.GUILD_ANNOUNCEMENT, a.rbe.GUILD_FORUM]);
function u(e) {
    let { isChannelSelected: t, isTargetInViewport: n = !0, channelType: a, isPopoverAllowed: u = !0 } = e,
        c = (0, i.bG)([l.Ay], () => null != l.Ay.getVoiceChannelId()),
        d = (0, r.useHasAnyModalOpen)(),
        f = n && t && o.has(a) && u && !c && !d,
        { shouldShowPopover: m, markPopoverAsDismissed: A } = (0, s.zO)(f);
    return { showMenuItemPopover: m, markMenuItemPopoverAsDismissed: A };
}
