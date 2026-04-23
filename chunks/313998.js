l.d(n, { A: () => y, g: () => I }), l(321073);
var t = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    a = l(110259),
    d = l(17928),
    s = l(554146),
    o = l(477782),
    u = l(834730),
    c = l(983851),
    A = l(387755),
    g = l(688810),
    b = l(139286),
    m = l(313961),
    x = l(325909),
    f = l(47167),
    h = l(932001),
    E = l(378570),
    C = l(164891),
    p = l(734057),
    _ = l(309010),
    N = l(806931),
    T = l(49999),
    v = l(985018),
    j = l(295573);
function I(e, n) {
    let l = (0, d.bG)([_.A], () => _.A.getVoiceChannelId()),
        t = (0, d.bG)([p.A], () => p.A.getChannel(l)?.getGuildId() ?? void 0),
        { enabled: i } = C.A.useExperiment({ guildId: t, location: n });
    return i ? l : e;
}
function y(e, n) {
    let [l, i] = (0, d.yK)(
            [m.A],
            () => [null != n ? m.A.getParticipants(n) : null, null != n ? m.A.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        c = (0, d.bG)([p.A], () => p.A.getChannel(n)),
        f = (0, x.oP)(e, "context_menu", n),
        { enabled: _ } = C.A.useExperiment({ guildId: c?.guild_id, location: "useRingHangupItem" }),
        I = !f || l?.length === 0 || null == n,
        y = c?.guild_id != null,
        M = _ && y,
        O = null == i,
        U = null != i && i.type === N.lp.USER && i.ringing,
        S = [];
    M && !I && (O || U) && S.push(s.M.RING_USER_TO_VC_NEW_BADGE);
    let [P, R] = (0, h.kn)(S),
        D = P === s.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: k } = (0, g.Ay)();
    if (
        ((0, b.A)(
            {
                type: a.ImpressionTypes.MENU,
                name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: { voice_channel_id: n, voice_guild_id: c?.guild_id, location_stack: k },
            },
            { disableTrack: I || !M },
            [e.id],
        ),
        I)
    )
        return null;
    if (O) {
        let l = y ? v.intl.string(v.t["3Hv9qQ"]) : v.intl.string(v.t.RDheZm);
        return (0, t.jsx)(o.Dr, {
            id: "ring",
            label: l,
            badge: D ? "new" : void 0,
            subtext: M ? (0, t.jsx)(G, { channel: c }) : null,
            action: () => {
                D && R(T.i.TAKE_ACTION), A.A.ring(n, [e.id], "user_context_menu"), M && null != n && (0, E.iN)(n);
            },
        });
    }
    return U
        ? (0, t.jsx)(o.Dr, {
              id: "stop-ringing",
              label: v.intl.string(v.t.ygslb0),
              badge: D ? "new" : void 0,
              subtext: M
                  ? (0, t.jsx)(u.E, {
                        variant: "text-xs/medium",
                        className: r()(j.W$, j.DF),
                        children: v.intl.format(v.t.dwfzZi, { channelName: (0, t.jsx)(G, { channel: c }) }),
                    })
                  : null,
              action: () => {
                  D && R(T.i.TAKE_ACTION), A.A.stopRinging(n, [e.id]);
              },
          })
        : null;
}
let G = (e) => {
    let { channel: n } = e,
        l = (0, f.Ay)(n);
    return (0, t.jsxs)("div", {
        className: j.W$,
        children: [
            (0, t.jsx)(c.H, { size: "xs" }),
            (0, t.jsx)(u.E, { variant: "text-xs/medium", className: j.HA, children: l }),
        ],
    });
};
