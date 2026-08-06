n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(939249),
    r = n(367513),
    o = n(313961),
    c = n(267102),
    d = n(699707),
    u = n(461782),
    h = n(734057),
    p = n(309010),
    m = n(625494),
    A = n(920639),
    f = n(889426),
    x = n(652215),
    g = n(804362);
let C = function (e) {
    let { channelId: t, popoutType: n, width: C, height: y } = e,
        j = (0, c.Us)(),
        v = (0, a.bG)([o.A], () => o.A.getSelectedParticipant(t)),
        E = (0, a.bG)([h.A], () => h.A.getChannel(t)),
        N = (0, a.bG)([p.Ay], () => null != E && p.Ay.getVoiceChannelId() === E.id),
        {
            participants: I,
            layout: b,
            participantsOpen: T,
        } = (0, a.cf)([o.A], () => {
            let e = null != E ? o.A.getLayout(E.id, j) : x.DUB.NORMAL;
            return {
                participants: o.A.getParticipants(t),
                layout: j === x.BRT.POPOUT && e !== x.DUB.FULL_SCREEN ? x.DUB.NO_CHAT : e,
                participantsOpen: o.A.getParticipantsOpen(t),
            };
        }),
        _ = (0, a.yK)([o.A], () => [...o.A.getStreamParticipants(t), ...o.A.getVideoParticipants(t)]);
    if (
        ((0, l.useEffect)(() => {
            if (null != v && null != E)
                return (
                    m._.subscribe(x.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE, e),
                    () => {
                        m._.unsubscribe(x.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE, e);
                    }
                );
            function e() {
                null != E &&
                    (r.A.selectParticipant(E.id, null),
                    (0, A.n0)({ interactionType: "call_tile_collapsed", channelId: t }));
            }
        }, [v, E, t]),
        null == v || null == E)
    )
        return null;
    function R(e, n) {
        null != E &&
            (n.preventDefault(),
            n.stopPropagation(),
            v?.id === e.id
                ? (r.A.selectParticipant(E.id, null),
                  (0, A.n0)({ interactionType: "call_tile_collapsed", channelId: t }))
                : r.A.selectParticipant(E.id, e.id));
    }
    return (0, i.jsx)(s.D, {
        style: { width: C, height: y },
        className: g.L,
        onClick: function () {
            null != E &&
                (r.A.selectParticipant(E.id, null),
                (0, A.n0)({ interactionType: "call_tile_collapsed", channelId: t }));
        },
        children: (0, i.jsx)(u.Ay, {
            timeout: 2e3,
            children: (e) =>
                (0, i.jsx)(d.A, {
                    onSelectParticipant: R,
                    selectedParticipant: v,
                    popoutType: n,
                    channel: E,
                    width: C,
                    height: y,
                    inCall: N,
                    participants: I,
                    layout: b,
                    filteredParticipants: _,
                    idle: e.idle,
                    showParticipants: T,
                    onContextMenuParticipant: (e, n, i, l) =>
                        (0, f.A)({
                            participant: e,
                            event: n,
                            minimalContextMenu: i,
                            entrypoint: l,
                            channelId: t,
                            appContext: j,
                            location: "GuildRoomVideoOverlay",
                        }),
                }),
        }),
    });
};
