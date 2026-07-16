n.d(t, { A: () => g });
var i = n(627968),
    l = n(17928),
    a = n(939249),
    s = n(367513),
    r = n(313961),
    o = n(267102),
    c = n(699707),
    d = n(461782),
    u = n(734057),
    p = n(309010),
    h = n(920639),
    m = n(889426),
    A = n(652215),
    x = n(496978);
let g = function (e) {
    let { channelId: t, popoutType: n, width: g, height: f } = e,
        C = (0, o.Us)(),
        y = (0, l.bG)([r.A], () => r.A.getSelectedParticipant(t)),
        j = (0, l.bG)([u.A], () => u.A.getChannel(t)),
        v = (0, l.bG)([p.A], () => null != j && p.A.getVoiceChannelId() === j.id),
        {
            participants: E,
            layout: N,
            participantsOpen: I,
        } = (0, l.cf)([r.A], () => {
            let e = null != j ? r.A.getLayout(j.id, C) : A.DUB.NORMAL;
            return {
                participants: r.A.getParticipants(t),
                layout: C === A.BRT.POPOUT && e !== A.DUB.FULL_SCREEN ? A.DUB.NO_CHAT : e,
                participantsOpen: r.A.getParticipantsOpen(t),
            };
        }),
        T = (0, l.yK)([r.A], () => [...r.A.getStreamParticipants(t), ...r.A.getVideoParticipants(t)]);
    if (null == y || null == j) return null;
    let _ = (e, n) => {
        n.preventDefault(),
            n.stopPropagation(),
            y?.id === e.id
                ? (s.A.selectParticipant(j.id, null),
                  (0, h.n0)({ interactionType: "call_tile_collapsed", channelId: t }))
                : s.A.selectParticipant(j.id, e.id);
    };
    return (0, i.jsx)(a.D, {
        style: { width: g, height: f },
        className: x.L,
        onClick: () => {
            s.A.selectParticipant(j.id, null), (0, h.n0)({ interactionType: "call_tile_collapsed", channelId: t });
        },
        children: (0, i.jsx)(d.Ay, {
            timeout: 2e3,
            children: (e) =>
                (0, i.jsx)(c.A, {
                    onSelectParticipant: _,
                    selectedParticipant: y,
                    popoutType: n,
                    channel: j,
                    width: g,
                    height: f,
                    inCall: v,
                    participants: E,
                    layout: N,
                    filteredParticipants: T,
                    idle: e.idle,
                    showParticipants: I,
                    onContextMenuParticipant: (e, n, i, l) =>
                        (0, m.A)({
                            participant: e,
                            event: n,
                            minimalContextMenu: i,
                            entrypoint: l,
                            channelId: t,
                            appContext: C,
                            location: "GuildRoomVideoOverlay",
                        }),
                }),
        }),
    });
};
