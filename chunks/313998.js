t.d(n, { A: () => G, g: () => T }), t(321073);
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
    m = t(313369),
    f = t(325909),
    x = t(47167),
    b = t(932001),
    p = t(378570),
    h = t(164891),
    E = t(734057),
    C = t(309010),
    _ = t(806931),
    N = t(49999),
    j = t(985018),
    v = t(951808);
function T(e, n) {
    let t = (0, d.bG)([C.A], () => C.A.getVoiceChannelId()),
        l = (0, d.bG)([E.A], () => E.A.getChannel(t)?.getGuildId() ?? void 0),
        { enabled: i } = h.A.useExperiment({ guildId: l, location: n });
    return i ? t : e;
}
function G(e, n) {
    let [t, i] = (0, d.yK)(
            [g.A],
            () => [null != n ? g.A.getParticipants(n) : null, null != n ? g.A.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        x = (0, d.bG)([E.A], () => E.A.getChannel(n)),
        C = (0, f.oP)(e, "context_menu", n),
        { enabled: T } = h.A.useExperiment({ guildId: x?.guild_id, location: "useRingHangupItem" }),
        { copyVariant: G } = m.o.useConfig({ location: "useRingHangupItem" }),
        O = !C || t?.length === 0 || null == n,
        y = T && x?.guild_id != null,
        M = null == i,
        U = null != i && i.type === _.lp.USER && i.ringing,
        S = [];
    y && !O && (M || U) && S.push(s.M.RING_USER_TO_VC_NEW_BADGE);
    let [R, P] = (0, b.kn)(S),
        D = R === s.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: V } = (0, c.Ay)();
    if (
        ((0, A.A)(
            {
                type: a.ImpressionTypes.MENU,
                name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: { voice_channel_id: n, voice_guild_id: x?.guild_id, location_stack: V },
            },
            { disableTrack: O || !y },
            [e.id],
        ),
        O)
    )
        return null;
    if (M) {
        let t = y ? j.intl.string(j.t["3Hv9qQ"]) : T ? j.intl.string(j.t.RDheZm) : j.intl.string(j.t.bHa9kN);
        return (0, l.jsx)(u.Drp, {
            id: "ring",
            label: t,
            badge: D ? "new" : void 0,
            subtext: y || "control" !== G ? (0, l.jsx)(I, { channel: x }) : null,
            action: () => {
                D && P(N.i.TAKE_ACTION), o.A.ring(n, [e.id], "user_context_menu"), y && null != n && (0, p.iN)(n);
            },
        });
    }
    return U
        ? (0, l.jsx)(u.Drp, {
              id: "stop-ringing",
              label: j.intl.string(j.t.ygslb0),
              badge: D ? "new" : void 0,
              subtext: y
                  ? (0, l.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        className: r()(v.W$, v.DF),
                        children: j.intl.format(j.t.dwfzZi, { channelName: (0, l.jsx)(I, { channel: x }) }),
                    })
                  : null,
              action: () => {
                  D && P(N.i.TAKE_ACTION), o.A.stopRinging(n, [e.id]);
              },
          })
        : null;
}
let I = (e) => {
    let { channel: n } = e,
        t = (0, x.Ay)(n);
    return (0, l.jsxs)("div", {
        className: v.W$,
        children: [
            (0, l.jsx)(u.HKD, { size: "xs" }),
            (0, l.jsx)(u.Text, { variant: "text-xs/medium", className: v.HA, children: t }),
        ],
    });
};
