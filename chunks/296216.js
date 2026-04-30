i.d(t, { F: () => h, J: () => p });
var r = i(913247),
    n = i(639627),
    o = i(686956),
    a = i(71393),
    l = i(576705),
    s = i(977997),
    u = i(607567),
    d = i(652215);
let c = "DRAGGABLE_USER";
function h(e) {
    return (0, r.T)(
        c,
        {
            canDrop(e) {
                let { channel: t } = e,
                    i = t.getGuildId(),
                    r = a.A.getGuild(i)?.maxVideoChannelUsers ?? -1,
                    n = u.Ay.countVoiceStatesForChannel(t.id),
                    o = null != i && s.A.hasVideo(t.id) && r > 0 && n >= r + 1;
                return l.A.can(d.xBc.MOVE_MEMBERS, t) && l.A.can(d.xBc.CONNECT, t) && !o;
            },
            drop(e, t) {
                let { channel: i } = e,
                    r = s.A.getVoiceStateForUser(t.getItem().user.id);
                r?.channelId !== i.id && o.A.setChannel(i.getGuildId(), t.getItem().user.id, i.id);
            },
        },
        (e, t) => ({ connectUserDropTarget: e.dropTarget(), isUserOver: t.isOver() && t.canDrop() }),
    )(e);
}
function p(e) {
    return (0, n.I)(
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
