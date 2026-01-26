t.d(e, {
    A: () => C,
    g: () => E,
}),
    t(896048),
    t(321073);
var i = t(627968);
t(64700);
var l = t(503698),
    r = t.n(l),
    a = t(110259),
    o = t(311907),
    u = t(554146),
    d = t(397927),
    s = t(387755),
    c = t(688810),
    g = t(139286),
    A = t(313961),
    p = t(313369),
    b = t(325909),
    f = t(47167),
    v = t(379848),
    m = t(378570),
    _ = t(164891),
    y = t(734057),
    O = t(309010),
    x = t(806931),
    h = t(49999),
    j = t(985018),
    I = t(951808);

function E(n, e) {
    let t = (0, o.bG)([O.A], () => O.A.getVoiceChannelId()),
        i = (0, o.bG)([y.A], () => {
            var n, e;
            return null != (n = null == (e = y.A.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: l } = _.A.useExperiment({
            guildId: i,
            location: e,
        });
    return l ? t : n;
}

function C(n, e) {
    let [t, l] = (0, o.yK)(
            [A.A],
            () => [null != e ? A.A.getParticipants(e) : null, null != e ? A.A.getParticipant(e, n.id) : null],
            [e, n.id],
        ),
        f = (0, o.bG)([y.A], () => y.A.getChannel(e)),
        O = (0, b.o)(n, "context_menu", e),
        { enabled: E } = _.A.useExperiment({
            guildId: null == f ? void 0 : f.guild_id,
            location: "useRingHangupItem",
        }),
        { copyVariant: C } = p.o.useConfig({
            location: "useRingHangupItem",
        }),
        G = !O || (null == t ? void 0 : t.length) === 0 || null == e,
        P = E && (null == f ? void 0 : f.guild_id) != null,
        T = null == l,
        k = null != l && l.type === x.lp.USER && l.ringing,
        S = [];
    P && !G && (T || k) && S.push(u.M.RING_USER_TO_VC_NEW_BADGE);
    let [U, w] = (0, v.kn)(S),
        D = U === u.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: R } = (0, c.Ay)();
    if (
        ((0, g.A)(
            {
                type: a.ImpressionTypes.MENU,
                name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
                properties: {
                    voice_channel_id: e,
                    voice_guild_id: null == f ? void 0 : f.guild_id,
                    location_stack: R,
                },
            },
            {
                disableTrack: G || !P,
            },
            [n.id],
        ),
        G)
    )
        return null;
    if (T) {
        let t = P ? j.intl.string(j.t["3Hv9qQ"]) : "add" === C ? j.intl.string(j.t.xlwRY6) : j.intl.string(j.t.bHa9kN);
        return (0, i.jsx)(d.Drp, {
            id: "ring",
            label: t,
            badge: D ? "new" : void 0,
            subtext:
                P || "control" !== C
                    ? (0, i.jsx)(N, {
                          channel: f,
                      })
                    : null,
            action: () => {
                D && w(h.i.TAKE_ACTION), s.A.ring(e, [n.id], "user_context_menu"), P && null != e && (0, m.iN)(e);
            },
        });
    }
    return k
        ? (0, i.jsx)(d.Drp, {
              id: "stop-ringing",
              label: j.intl.string(j.t.ygslb0),
              badge: D ? "new" : void 0,
              subtext: P
                  ? (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: r()(I.W$, I.DF),
                        children: j.intl.format(j.t.dwfzZi, {
                            channelName: (0, i.jsx)(N, {
                                channel: f,
                            }),
                        }),
                    })
                  : null,
              action: () => {
                  D && w(h.i.TAKE_ACTION), s.A.stopRinging(e, [n.id]);
              },
          })
        : null;
}
let N = (n) => {
    let { channel: e } = n,
        t = (0, f.Ay)(e);
    return (0, i.jsxs)("div", {
        className: I.W$,
        children: [
            (0, i.jsx)(d.HKD, {
                size: "xs",
            }),
            (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                className: I.HA,
                children: t,
            }),
        ],
    });
};
