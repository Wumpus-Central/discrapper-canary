n.d(t, {
    F: () => f,
    J: () => p,
});
var r = n(205369),
    l = n(22174),
    i = n(686956),
    a = n(71393),
    s = n(576705),
    o = n(977997),
    c = n(607567),
    u = n(652215);
let d = "DRAGGABLE_USER";
function f(e) {
    return (0, r.T)(
        d,
        {
            canDrop(e) {
                var t, n;
                let { channel: r } = e,
                    l = r.getGuildId(),
                    i = null != (t = null == (n = a.A.getGuild(l)) ? void 0 : n.maxVideoChannelUsers) ? t : -1,
                    d = c.Ay.countVoiceStatesForChannel(r.id),
                    f = null != l && o.A.hasVideo(r.id) && i > 0 && d >= i + 1;
                return s.A.can(u.xBc.MOVE_MEMBERS, r) && s.A.can(u.xBc.CONNECT, r) && !f;
            },
            drop(e, t) {
                let { channel: n } = e,
                    r = o.A.getVoiceStateForUser(t.getItem().user.id);
                (null == r ? void 0 : r.channelId) !== n.id &&
                    i.A.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            },
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop(),
        }),
    )(e);
}
function p(e) {
    return (0, l.I)(
        d,
        {
            canDrag(e) {
                let { user: t, canDrag: n } = e;
                return null != n && n;
            },
            beginDrag(e) {
                let { user: t } = e;
                return { user: t };
            },
        },
        (e) => ({ connectUserDragSource: e.dragSource() }),
    )(e);
}
