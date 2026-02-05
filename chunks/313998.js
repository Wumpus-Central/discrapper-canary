n.d(e, { A: () => N, g: () => T }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(110259),
    s = n(311907),
    d = n(554146),
    o = n(397927),
    u = n(387755),
    c = n(688810),
    A = n(139286),
    g = n(313961),
    b = n(313369),
    p = n(325909),
    f = n(47167),
    m = n(379848),
    x = n(378570),
    _ = n(164891),
    v = n(734057),
    I = n(309010),
    h = n(806931),
    C = n(49999),
    E = n(985018),
    D = n(951808);
function T(t, e) {
    let n = (0, s.bG)([I.A], () => I.A.getVoiceChannelId()),
        i = (0, s.bG)([v.A], () => v.A.getChannel(n)?.getGuildId() ?? void 0),
        { enabled: l } = _.A.useExperiment({ guildId: i, location: e });
    return l ? n : t;
}
function N(t, e) {
    let [n, l] = (0, s.yK)(
            [g.A],
            () => [null != e ? g.A.getParticipants(e) : null, null != e ? g.A.getParticipant(e, t.id) : null],
            [e, t.id],
        ),
        f = (0, s.bG)([v.A], () => v.A.getChannel(e)),
        I = (0, p.oP)(t, "context_menu", e),
        { enabled: T } = _.A.useExperiment({ guildId: f?.guild_id, location: "useRingHangupItem" }),
        { copyVariant: N } = b.o.useConfig({ location: "useRingHangupItem" }),
        G = !I || n?.length === 0 || null == e,
        U = T && f?.guild_id != null,
        j = null == l,
        L = null != l && l.type === h.lp.USER && l.ringing,
        M = [];
    U && !G && (j || L) && M.push(d.M.RING_USER_TO_VC_NEW_BADGE);
    let [V, O] = (0, m.kn)(M),
        k = V === d.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: S } = (0, c.Ay)();
    if (
        ((0, A.A)(
            {
                type: r.ImpressionTypes.MENU,
                name: r.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: { voice_channel_id: e, voice_guild_id: f?.guild_id, location_stack: S },
            },
            { disableTrack: G || !U },
            [t.id],
        ),
        G)
    )
        return null;
    if (j) {
        let n = U ? E.intl.string(E.t["3Hv9qQ"]) : "add" === N ? E.intl.string(E.t.xlwRY6) : E.intl.string(E.t.bHa9kN);
        return (0, i.jsx)(o.Drp, {
            id: "ring",
            label: n,
            badge: k ? "new" : void 0,
            subtext: U || "control" !== N ? (0, i.jsx)(y, { channel: f }) : null,
            action: () => {
                k && O(C.i.TAKE_ACTION), u.A.ring(e, [t.id], "user_context_menu"), U && null != e && (0, x.iN)(e);
            },
        });
    }
    return L
        ? (0, i.jsx)(o.Drp, {
              id: "stop-ringing",
              label: E.intl.string(E.t.ygslb0),
              badge: k ? "new" : void 0,
              subtext: U
                  ? (0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: a()(D.W$, D.DF),
                        children: E.intl.format(E.t.dwfzZi, { channelName: (0, i.jsx)(y, { channel: f }) }),
                    })
                  : null,
              action: () => {
                  k && O(C.i.TAKE_ACTION), u.A.stopRinging(e, [t.id]);
              },
          })
        : null;
}
let y = (t) => {
    let { channel: e } = t,
        n = (0, f.Ay)(e);
    return (0, i.jsxs)("div", {
        className: D.W$,
        children: [
            (0, i.jsx)(o.HKD, { size: "xs" }),
            (0, i.jsx)(o.Text, { variant: "text-xs/medium", className: D.HA, children: n }),
        ],
    });
};
