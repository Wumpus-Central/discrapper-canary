i.d(t, { F: () => h, J: () => g });
var n = i(477900),
    l = i(582128),
    s = i(949152),
    a = i(739822),
    r = i(66834),
    d = i(71393),
    u = i(576705),
    o = i(977997),
    c = i(607567),
    A = i(652215);
let m = "DRAGGABLE_USER";
function h(e) {
    return l.memo(function (t) {
        let { channel: i } = t,
            [l, a] = (0, s.H)(
                () => ({
                    accept: m,
                    canDrop: () => {
                        let e, t, n, l;
                        return (
                            (e = i.getGuildId()),
                            (t = d.A.getGuild(e)?.maxVideoChannelUsers ?? -1),
                            (n = c.Ay.countVoiceStatesForChannel(i.id)),
                            (l = null != e && o.A.hasVideo(i.id) && t > 0 && n >= t + 1),
                            u.A.can(A.xBc.MOVE_MEMBERS, i) && u.A.can(A.xBc.CONNECT, i) && !l
                        );
                    },
                    drop(e) {
                        let { user: t } = e,
                            n = o.A.getVoiceStateForUser(t.id);
                        n?.channelId !== i.id && r.A.setChannel(i.getGuildId(), t.id, i.id);
                    },
                    collect: (e) => e.isOver() && e.canDrop(),
                }),
                [i],
            );
        return (0, n.jsx)(e, { ...t, connectUserDropTarget: a, isUserOver: l });
    });
}
function g(e) {
    return l.memo(function (t) {
        let { user: i, canDrag: l } = t,
            [, s] = (0, a.i)(() => ({ type: m, item: { user: i }, canDrag: () => l ?? !1 }), [i, l]);
        return (0, n.jsx)(e, { ...t, connectUserDragSource: s });
    });
}
