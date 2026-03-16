t.d(n, { A: () => j, g: () => v }), t(321073);
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(110259),
    d = t(311907),
    s = t(554146),
    u = t(397927),
    o = t(387755),
    c = t(688810),
    A = t(139286),
    g = t(313961),
    m = t(325909),
    x = t(47167),
    f = t(932001),
    b = t(378570),
    p = t(164891),
    h = t(734057),
    E = t(309010),
    _ = t(806931),
    C = t(49999),
    N = t(985018),
    T = t(951808);
function v(e, n) {
    let t = (0, d.bG)([E.A], () => E.A.getVoiceChannelId()),
        l = (0, d.bG)([h.A], () => h.A.getChannel(t)?.getGuildId() ?? void 0),
        { enabled: i } = p.A.useExperiment({ guildId: l, location: n });
    return i ? t : e;
}
function j(e, n) {
    let [t, i] = (0, d.yK)(
            [g.A],
            () => [null != n ? g.A.getParticipants(n) : null, null != n ? g.A.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        x = (0, d.bG)([h.A], () => h.A.getChannel(n)),
        E = (0, m.oP)(e, "context_menu", n),
        { enabled: v } = p.A.useExperiment({ guildId: x?.guild_id, location: "useRingHangupItem" }),
        j = !E || t?.length === 0 || null == n,
        I = x?.guild_id != null,
        O = v && I,
        M = null == i,
        y = null != i && i.type === _.lp.USER && i.ringing,
        U = [];
    O && !j && (M || y) && U.push(s.M.RING_USER_TO_VC_NEW_BADGE);
    let [S, P] = (0, f.kn)(U),
        R = S === s.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: D } = (0, c.Ay)();
    if (
        ((0, A.A)(
            {
                type: a.ImpressionTypes.MENU,
                name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: { voice_channel_id: n, voice_guild_id: x?.guild_id, location_stack: D },
            },
            { disableTrack: j || !O },
            [e.id],
        ),
        j)
    )
        return null;
    if (M) {
        let t = I ? N.intl.string(N.t["3Hv9qQ"]) : N.intl.string(N.t.RDheZm);
        return (0, l.jsx)(u.Drp, {
            id: "ring",
            label: t,
            badge: R ? "new" : void 0,
            subtext: O ? (0, l.jsx)(G, { channel: x }) : null,
            action: () => {
                R && P(C.i.TAKE_ACTION), o.A.ring(n, [e.id], "user_context_menu"), O && null != n && (0, b.iN)(n);
            },
        });
    }
    return y
        ? (0, l.jsx)(u.Drp, {
              id: "stop-ringing",
              label: N.intl.string(N.t.ygslb0),
              badge: R ? "new" : void 0,
              subtext: O
                  ? (0, l.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        className: r()(T.W$, T.DF),
                        children: N.intl.format(N.t.dwfzZi, { channelName: (0, l.jsx)(G, { channel: x }) }),
                    })
                  : null,
              action: () => {
                  R && P(C.i.TAKE_ACTION), o.A.stopRinging(n, [e.id]);
              },
          })
        : null;
}
let G = (e) => {
    let { channel: n } = e,
        t = (0, x.Ay)(n);
    return (0, l.jsxs)("div", {
        className: T.W$,
        children: [
            (0, l.jsx)(u.HKD, { size: "xs" }),
            (0, l.jsx)(u.Text, { variant: "text-xs/medium", className: T.HA, children: t }),
        ],
    });
};
