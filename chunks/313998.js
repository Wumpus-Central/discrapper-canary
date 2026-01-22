e.d(t, {
    A: () => E,
    g: () => C,
}),
    e(896048),
    e(321073);
var l = e(627968);
e(64700);
var i = e(503698),
    r = e.n(i),
    a = e(110259),
    o = e(311907),
    u = e(554146),
    s = e(827734),
    d = e(397927),
    c = e(387755),
    A = e(688810),
    g = e(139286),
    p = e(313961),
    b = e(313369),
    f = e(325909),
    m = e(47167),
    v = e(379848),
    _ = e(378570),
    x = e(164891),
    y = e(734057),
    O = e(309010),
    j = e(806931),
    h = e(49999),
    N = e(985018),
    I = e(951808);

function C(n, t) {
    let e = (0, o.bG)([O.A], () => O.A.getVoiceChannelId()),
        l = (0, o.bG)([y.A], () => {
            var n, t;
            return null != (n = null == (t = y.A.getChannel(e)) ? void 0 : t.getGuildId()) ? n : void 0;
        }),
        { enabled: i } = x.A.useExperiment({
            guildId: l,
            location: t,
        });
    return i ? e : n;
}

function E(n, t) {
    let [e, i] = (0, o.yK)(
            [p.A],
            () => [null != t ? p.A.getParticipants(t) : null, null != t ? p.A.getParticipant(t, n.id) : null],
            [t, n.id],
        ),
        s = (0, o.bG)([y.A], () => y.A.getChannel(t)),
        m = (0, f.o)(n, "context_menu", t),
        { enabled: O } = x.A.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: "useRingHangupItem",
        }),
        { copyVariant: C } = b.o.useConfig({
            location: "useRingHangupItem",
        }),
        E = !m || (null == e ? void 0 : e.length) === 0 || null == t,
        T = O && (null == s ? void 0 : s.guild_id) != null,
        k = null == i,
        D = null != i && i.type === j.lp.USER && i.ringing,
        R = [];
    T && !E && (k || D) && R.push(u.M.RING_USER_TO_VC_NEW_BADGE);
    let [S, U] = (0, v.kn)(R),
        w = S === u.M.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: V } = (0, A.Ay)();
    return ((0, g.A)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: t,
                voice_guild_id: null == s ? void 0 : s.guild_id,
                location_stack: V,
            },
        },
        {
            disableTrack: E || !T,
        },
        [n.id],
    ),
    E)
        ? null
        : k
          ? (0, l.jsx)(d.Drp, {
                id: "ring",
                label: T
                    ? (0, l.jsxs)("div", {
                          className: I.Pf,
                          children: [N.intl.string(N.t["3Hv9qQ"]), w && (0, l.jsx)(G, {})],
                      })
                    : "add" === C
                      ? N.intl.string(N.t.xlwRY6)
                      : N.intl.string(N.t.bHa9kN),
                subtext:
                    T || "control" !== C
                        ? (0, l.jsx)(P, {
                              channel: s,
                          })
                        : null,
                action: () => {
                    w && U(h.i.TAKE_ACTION), c.A.ring(t, [n.id], "user_context_menu"), T && null != t && (0, _.iN)(t);
                },
                className: I.j$,
            })
          : D
            ? (0, l.jsx)(d.Drp, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: I.Pf,
                      children: [N.intl.string(N.t.ygslb0), w && (0, l.jsx)(G, {})],
                  }),
                  subtext: T
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(I.W$, I.DF),
                            children: N.intl.format(N.t.dwfzZi, {
                                channelName: (0, l.jsx)(P, {
                                    channel: s,
                                }),
                            }),
                        })
                      : null,
                  action: () => {
                      w && U(h.i.TAKE_ACTION), c.A.stopRinging(t, [n.id]);
                  },
                  className: I.j$,
              })
            : null;
}
let P = (n) => {
        let { channel: t } = n,
            e = (0, m.Ay)(t);
        return (0, l.jsxs)("div", {
            className: I.W$,
            children: [
                (0, l.jsx)(d.HKD, {
                    size: "xs",
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: I.HA,
                    children: e,
                }),
            ],
        });
    },
    G = () =>
        (0, l.jsx)(d.LpS, {
            color: s.A.colors.BACKGROUND_BRAND.css,
            text: N.intl.string(N.t.y2b7CA),
        });
