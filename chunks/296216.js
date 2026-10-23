t.d(i, { F: () => g, J: () => h });
var n = t(477900),
    l = t(582128),
    s = t(949152),
    a = t(739822),
    r = t(66834),
    d = t(71393),
    o = t(576705),
    u = t(977997),
    c = t(607567),
    A = t(652215);
let m = "DRAGGABLE_USER";
function g(e) {
    return l.memo(function (i) {
        let { channel: t } = i,
            [l, a] = (0, s.H)(
                () => ({
                    accept: m,
                    canDrop: () => {
                        let e, i, n, l;
                        return (
                            (e = t.getGuildId()),
                            (i = d.A.getGuild(e)?.maxVideoChannelUsers ?? -1),
                            (n = c.Ay.countVoiceStatesForChannel(t.id)),
                            (l = null != e && u.A.hasVideo(t.id) && i > 0 && n >= i + 1),
                            o.A.can(A.xBc.MOVE_MEMBERS, t) && o.A.can(A.xBc.CONNECT, t) && !l
                        );
                    },
                    drop(e) {
                        let { user: i } = e,
                            n = u.A.getVoiceStateForUser(i.id);
                        n?.channelId !== t.id && r.A.setChannel(t.getGuildId(), i.id, t.id);
                    },
                    collect: (e) => e.isOver() && e.canDrop(),
                }),
                [t],
            );
        return (0, n.jsx)(e, { ...i, connectUserDropTarget: a, isUserOver: l });
    });
}
function h(e) {
    return l.memo(function (i) {
        let { user: t, canDrag: l } = i,
            [, s] = (0, a.i)(() => ({ type: m, item: { user: t }, canDrag: () => l ?? !1 }), [t, l]);
        return (0, n.jsx)(e, { ...i, connectUserDragSource: s });
    });
}
