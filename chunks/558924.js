n.d(t, {
    O: () => N,
    Z: () => E,
}),
    n(388685),
    n(539854);
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    a = n(990547),
    o = n(831209),
    s = n(442837),
    u = n(704215),
    d = n(481060),
    c = n(26151),
    g = n(906732),
    f = n(213609),
    b = n(358221),
    Z = n(985588),
    m = n(933557),
    v = n(243778),
    p = n(359110),
    O = n(163612),
    h = n(592125),
    j = n(944486),
    x = n(354459),
    _ = n(921944),
    y = n(388032),
    I = n(604570);
function N(e, t) {
    let n = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
        l = (0, s.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getChannel(n)) ? void 0 : e.getGuildId()) ? t : void 0;
        }),
        { enabled: i } = O.Z.useExperiment({
            guildId: l,
            location: t,
        });
    return i ? n : e;
}
function E(e, t) {
    let [n, i] = (0, s.Wu)(
            [b.Z],
            () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null],
            [t, e.id],
        ),
        o = (0, s.e7)([h.Z], () => h.Z.getChannel(t)),
        m = (0, Z.s)(e, "context_menu", t),
        { enabled: j } = O.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: "useRingHangupItem",
        }),
        N = !m || (null == n ? void 0 : n.length) === 0 || null == t,
        E = j && (null == o ? void 0 : o.guild_id) != null,
        S = null == i,
        A = null != i && i.type === x.fO.USER && i.ringing,
        U = [];
    E && !N && (S || A) && U.push(u.z.RING_USER_TO_VC_NEW_BADGE);
    let [D, L] = (0, v.US)(U),
        T = D === u.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: w } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: t,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: w,
            },
        },
        { disableTrack: N || !E },
        [e.id],
    ),
    N)
        ? null
        : S
          ? (0, l.jsx)(d.sNh, {
                id: "ring",
                label: E
                    ? (0, l.jsxs)("div", {
                          className: I.label,
                          children: [y.intl.string(y.t["3Hv9qQ"]), T && (0, l.jsx)(C, {})],
                      })
                    : y.intl.string(y.t.bHa9kN),
                subtext: E ? (0, l.jsx)(P, { channel: o }) : null,
                action: () => {
                    T && L(_.L.TAKE_ACTION), c.Z.ring(t, [e.id], "user_context_menu"), E && null != t && (0, p.Kh)(t);
                },
                className: I.menuItem,
            })
          : A
            ? (0, l.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: I.label,
                      children: [y.intl.string(y.t.ygslb0), T && (0, l.jsx)(C, {})],
                  }),
                  subtext: E
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(I.subtext, I.ringing),
                            children: y.intl.format(y.t.dwfzZi, { channelName: (0, l.jsx)(P, { channel: o }) }),
                        })
                      : null,
                  action: () => {
                      T && L(_.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id]);
                  },
                  className: I.menuItem,
              })
            : null;
}
let P = (e) => {
        let { channel: t } = e,
            n = (0, m.ZP)(t);
        return (0, l.jsxs)("div", {
            className: I.subtext,
            children: [
                (0, l.jsx)(d.gj8, { size: "xs" }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: I.channelName,
                    children: n,
                }),
            ],
        });
    },
    C = () =>
        (0, l.jsx)(d.IGR, {
            color: o.Z.BG_BRAND,
            text: y.intl.string(y.t.y2b7CA),
        });
