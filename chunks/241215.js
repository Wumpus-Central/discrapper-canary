n.d(t, { A: () => x });
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
    m = n(652215),
    A = n(496978);
let x = function (e) {
    let { channelId: t, popoutType: n, width: x, height: g } = e,
        f = (0, o.Us)(),
        C = (0, l.bG)([r.A], () => r.A.getSelectedParticipant(t)),
        j = (0, l.bG)([u.A], () => u.A.getChannel(t)),
        y = (0, l.bG)([p.A], () => null != j && p.A.getVoiceChannelId() === j.id),
        {
            participants: v,
            layout: E,
            pariticipantsOpen: N,
        } = (0, l.cf)([r.A], () => {
            let e = null != j ? r.A.getLayout(j.id, f) : m.DUB.NORMAL;
            return {
                participants: r.A.getParticipants(t),
                layout: f === m.BRT.POPOUT && e !== m.DUB.FULL_SCREEN ? m.DUB.NO_CHAT : e,
                pariticipantsOpen: r.A.getParticipantsOpen(t),
            };
        }),
        I = (0, l.yK)([r.A], () => [...r.A.getStreamParticipants(t), ...r.A.getVideoParticipants(t)]);
    if (null == C || null == j) return null;
    let T = (e, n) => {
        n.preventDefault(),
            n.stopPropagation(),
            C?.id === e.id
                ? (s.A.selectParticipant(j.id, null),
                  (0, h.n0)({ interactionType: "call_tile_collapsed", channelId: t }))
                : s.A.selectParticipant(j.id, e.id);
    };
    return (0, i.jsx)(a.D, {
        style: { width: x, height: g },
        className: A.L,
        onClick: () => {
            s.A.selectParticipant(j.id, null), (0, h.n0)({ interactionType: "call_tile_collapsed", channelId: t });
        },
        children: (0, i.jsx)(d.Ay, {
            timeout: 2e3,
            children: (e) =>
                (0, i.jsx)(c.A, {
                    onSelectParticipant: T,
                    selectedParticipant: C,
                    popoutType: n,
                    channel: j,
                    width: x,
                    height: g,
                    inCall: y,
                    participants: v,
                    layout: E,
                    filteredParticipants: I,
                    idle: e.idle,
                    showParticipants: N,
                }),
        }),
    });
};
