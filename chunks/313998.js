e.d(i, { A: () => j, g: () => R }), e(321073);
var t = e(627968);
e(64700);
var l = e(503698),
    s = e.n(l),
    u = e(562708),
    a = e(17928),
    d = e(554146),
    r = e(477782),
    c = e(834730),
    _ = e(983851),
    g = e(387755),
    o = e(688810),
    A = e(139286),
    p = e(313961),
    m = e(325909),
    x = e(47167),
    h = e(131607),
    E = e(378570),
    N = e(164891),
    I = e(734057),
    b = e(309010),
    v = e(806931),
    C = e(49999),
    G = e(375708),
    T = e(295573);
function R(n, i) {
    let e = (0, a.bG)([b.A], () => b.A.getVoiceChannelId()),
        t = (0, a.bG)([I.A], () => I.A.getChannel(e)?.getGuildId() ?? void 0),
        { enabled: l } = N.A.useExperiment({ guildId: t, location: i });
    return l ? e : n;
}
function j(n, i) {
    let [e, l] = (0, a.yK)(
            [p.A],
            () => [null != i ? p.A.getParticipants(i) : null, null != i ? p.A.getParticipant(i, n.id) : null],
            [i, n.id],
        ),
        _ = (0, a.bG)([I.A], () => I.A.getChannel(i)),
        x = (0, m.oP)(n, "context_menu", i),
        { enabled: b } = N.A.useExperiment({ guildId: _?.guild_id, location: "useRingHangupItem" }),
        R = !x || e?.length === 0 || null == i,
        j = _?.guild_id != null,
        k = b && j,
        y = null == l,
        D = null != l && l.type === v.lp.USER && l.ringing,
        O = [];
    k && !R && (y || D) && O.push(d.M.RING_USER_TO_VC_NEW_BADGE);
    let [U, w] = (0, h.kn)(O),
        H = U === d.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, o.Ay)();
    if (
        ((0, A.A)(
            {
                type: u.ImpressionTypes.MENU,
                name: u.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: { voice_channel_id: i, voice_guild_id: _?.guild_id, location_stack: M },
            },
            { disableTrack: R || !k },
            [n.id],
        ),
        R)
    )
        return null;
    if (y) {
        let e = j ? G.intl.string(G.t["3Hv9qQ"]) : G.intl.string(G.t.RDheZm);
        return (0, t.jsx)(r.Dr, {
            id: "ring",
            label: e,
            badge: H ? "new" : void 0,
            subtext: k ? (0, t.jsx)(f, { channel: _ }) : null,
            action: () => {
                H && w(C.i.TAKE_ACTION), g.A.ring(i, [n.id], "user_context_menu"), k && null != i && (0, E.iN)(i);
            },
        });
    }
    return D
        ? (0, t.jsx)(r.Dr, {
              id: "stop-ringing",
              label: G.intl.string(G.t.ygslb0),
              badge: H ? "new" : void 0,
              subtext: k
                  ? (0, t.jsx)(c.E, {
                        variant: "text-xs/medium",
                        className: s()(T.W$, T.DF),
                        children: G.intl.format(G.t.dwfzZi, { channelName: (0, t.jsx)(f, { channel: _ }) }),
                    })
                  : null,
              action: () => {
                  H && w(C.i.TAKE_ACTION), g.A.stopRinging(i, [n.id]);
              },
          })
        : null;
}
function f(n) {
    let { channel: i } = n,
        e = (0, x.Ay)(i);
    return (0, t.jsxs)("div", {
        className: T.W$,
        children: [
            (0, t.jsx)(_.H, { size: "xs" }),
            (0, t.jsx)(c.E, { variant: "text-xs/medium", className: T.HA, children: e }),
        ],
    });
}
