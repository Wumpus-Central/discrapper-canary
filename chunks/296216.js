n.d(t, { F: () => h, J: () => A });
var i = n(205369),
    l = n(22174),
    s = n(686956),
    a = n(71393),
    r = n(576705),
    o = n(977997),
    c = n(607567),
    d = n(652215);
let u = "DRAGGABLE_USER";
function h(e) {
    return (0, i.T)(
        u,
        {
            canDrop(e) {
                let { channel: t } = e,
                    n = t.getGuildId(),
                    i = a.A.getGuild(n)?.maxVideoChannelUsers ?? -1,
                    l = c.Ay.countVoiceStatesForChannel(t.id),
                    s = null != n && o.A.hasVideo(t.id) && i > 0 && l >= i + 1;
                return r.A.can(d.xBc.MOVE_MEMBERS, t) && r.A.can(d.xBc.CONNECT, t) && !s;
            },
            drop(e, t) {
                let { channel: n } = e,
                    i = o.A.getVoiceStateForUser(t.getItem().user.id);
                i?.channelId !== n.id && s.A.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            },
        },
        (e, t) => ({ connectUserDropTarget: e.dropTarget(), isUserOver: t.isOver() && t.canDrop() }),
    )(e);
}
function A(e) {
    return (0, l.I)(
        u,
        {
            canDrag(e) {
                let { user: t, canDrag: n } = e;
                return n ?? !1;
            },
            beginDrag(e) {
                let { user: t } = e;
                return { user: t };
            },
        },
        (e) => ({ connectUserDragSource: e.dragSource() }),
    )(e);
}
