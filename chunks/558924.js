t.d(n, {
    O: () => j,
    Z: () => A,
}),
    t(388685),
    t(539854);
var i = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    a = t(990547),
    o = t(831209),
    u = t(442837),
    s = t(704215),
    d = t(481060),
    c = t(26151),
    f = t(906732),
    g = t(213609),
    h = t(358221),
    v = t(985588),
    _ = t(933557),
    b = t(243778),
    p = t(359110),
    O = t(163612),
    Z = t(592125),
    m = t(944486),
    E = t(354459),
    N = t(921944),
    C = t(388032),
    y = t(604570);
function j(e, n) {
    let t = (0, u.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        i = (0, u.e7)([Z.Z], () => {
            var e, n;
            return null != (n = null == (e = Z.Z.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: l } = O.Z.useExperiment({
            guildId: i,
            location: n,
        });
    return l ? t : e;
}
function A(e, n) {
    let [t, l] = (0, u.Wu)(
            [h.Z],
            () => [null != n ? h.Z.getParticipants(n) : null, null != n ? h.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        o = (0, u.e7)([Z.Z], () => Z.Z.getChannel(n)),
        _ = (0, v.s)(e, "context_menu", n),
        { enabled: m } = O.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: "useRingHangupItem",
        }),
        j = !_ || (null == t ? void 0 : t.length) === 0 || null == n,
        A = m && (null == o ? void 0 : o.guild_id) != null,
        P = null == l,
        U = null != l && l.type === E.fO.USER && l.ringing,
        T = [];
    A && !j && (P || U) && T.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [R, S] = (0, b.US)(T),
        D = R === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, f.ZP)();
    return ((0, g.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: M,
            },
        },
        { disableTrack: j || !A },
        [e.id],
    ),
    j)
        ? null
        : P
          ? (0, i.jsx)(d.sNh, {
                id: "ring",
                label: A
                    ? (0, i.jsxs)("div", {
                          className: y.label,
                          children: [C.intl.string(C.t["3Hv9qQ"]), D && (0, i.jsx)(x, {})],
                      })
                    : C.intl.string(C.t.bHa9kN),
                subtext: A ? (0, i.jsx)(I, { channel: o }) : null,
                action: () => {
                    D && S(N.L.TAKE_ACTION), c.Z.ring(n, [e.id], "user_context_menu"), A && null != n && (0, p.Kh)(n);
                },
                className: y.menuItem,
            })
          : U
            ? (0, i.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, i.jsxs)("div", {
                      className: y.label,
                      children: [C.intl.string(C.t.ygslb0), D && (0, i.jsx)(x, {})],
                  }),
                  subtext: A
                      ? (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(y.subtext, y.ringing),
                            children: C.intl.format(C.t.dwfzZi, { channelName: (0, i.jsx)(I, { channel: o }) }),
                        })
                      : null,
                  action: () => {
                      D && S(N.L.TAKE_ACTION), c.Z.stopRinging(n, [e.id]);
                  },
                  className: y.menuItem,
              })
            : null;
}
let I = (e) => {
        let { channel: n } = e,
            t = (0, _.ZP)(n);
        return (0, i.jsxs)("div", {
            className: y.subtext,
            children: [
                (0, i.jsx)(d.gj8, { size: "xs" }),
                (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: y.channelName,
                    children: t,
                }),
            ],
        });
    },
    x = () =>
        (0, i.jsx)(d.IGR, {
            color: o.Z.BG_BRAND,
            text: C.intl.string(C.t.y2b7CA),
        });
