if ((i.d(t, { F: () => m, J: () => A }), 21552 == i.j)) var l = i(205369);
var n = i(639627),
    s = i(66834),
    a = i(71393),
    r = i(576705),
    c = i(977997),
    o = i(607567),
    d = i(652215);
let u = "DRAGGABLE_USER";
function m(e) {
    return (0, l.T)(
        u,
        {
            canDrop(e) {
                let { channel: t } = e,
                    i = t.getGuildId(),
                    l = a.A.getGuild(i)?.maxVideoChannelUsers ?? -1,
                    n = o.Ay.countVoiceStatesForChannel(t.id),
                    s = null != i && c.A.hasVideo(t.id) && l > 0 && n >= l + 1;
                return r.A.can(d.xBc.MOVE_MEMBERS, t) && r.A.can(d.xBc.CONNECT, t) && !s;
            },
            drop(e, t) {
                let { channel: i } = e,
                    l = c.A.getVoiceStateForUser(t.getItem().user.id);
                l?.channelId !== i.id && s.A.setChannel(i.getGuildId(), t.getItem().user.id, i.id);
            },
        },
        (e, t) => ({ connectUserDropTarget: e.dropTarget(), isUserOver: t.isOver() && t.canDrop() }),
    )(e);
}
function A(e) {
    return (0, n.I)(
        u,
        {
            canDrag(e) {
                let { user: t, canDrag: i } = e;
                return i ?? !1;
            },
            beginDrag(e) {
                let { user: t } = e;
                return { user: t };
            },
        },
        (e) => ({ connectUserDragSource: e.dragSource() }),
    )(e);
}
