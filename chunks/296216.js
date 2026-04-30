i.d(t, { F: () => m, J: () => h });
var n = i(913247),
    l = i(22174),
    s = i(66834),
    a = i(71393),
    r = i(576705),
    d = i(977997),
    o = i(607567),
    u = i(652215);
let c = "DRAGGABLE_USER";
function m(e) {
    return (0, n.T)(
        c,
        {
            canDrop(e) {
                let { channel: t } = e,
                    i = t.getGuildId(),
                    n = a.A.getGuild(i)?.maxVideoChannelUsers ?? -1,
                    l = o.Ay.countVoiceStatesForChannel(t.id),
                    s = null != i && d.A.hasVideo(t.id) && n > 0 && l >= n + 1;
                return r.A.can(u.xBc.MOVE_MEMBERS, t) && r.A.can(u.xBc.CONNECT, t) && !s;
            },
            drop(e, t) {
                let { channel: i } = e,
                    n = d.A.getVoiceStateForUser(t.getItem().user.id);
                n?.channelId !== i.id && s.A.setChannel(i.getGuildId(), t.getItem().user.id, i.id);
            },
        },
        (e, t) => ({ connectUserDropTarget: e.dropTarget(), isUserOver: t.isOver() && t.canDrop() }),
    )(e);
}
function h(e) {
    return (0, l.I)(
        c,
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
