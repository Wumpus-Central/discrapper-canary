t.d(n, {
    O: () => y,
    Z: () => I,
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
    b = t(933557),
    _ = t(243778),
    p = t(359110),
    O = t(163612),
    Z = t(592125),
    m = t(944486),
    E = t(354459),
    C = t(921944),
    N = t(388032),
    j = t(604570);
function y(e, n) {
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
function I(e, n) {
    let [t, l] = (0, u.Wu)(
            [h.Z],
            () => [null != n ? h.Z.getParticipants(n) : null, null != n ? h.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        o = (0, u.e7)([Z.Z], () => Z.Z.getChannel(n)),
        b = (0, v.s)(e, "context_menu", n),
        { enabled: m } = O.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: "useRingHangupItem",
        }),
        y = !b || (null == t ? void 0 : t.length) === 0 || null == n,
        I = m && (null == o ? void 0 : o.guild_id) != null,
        P = null == l,
        U = null != l && l.type === E.fO.USER && l.ringing,
        T = [];
    I && !y && (P || U) && T.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [R, S] = (0, _.US)(T),
        D = R === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: k } = (0, f.ZP)();
    return ((0, g.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: k,
            },
        },
        { disableTrack: y || !I },
        [e.id],
    ),
    y)
        ? null
        : P
          ? (0, i.jsx)(d.sNh, {
                id: "ring",
                label: I
                    ? (0, i.jsxs)("div", {
                          className: j.label,
                          children: [N.intl.string(N.t["3Hv9qQ"]), D && (0, i.jsx)(x, {})],
                      })
                    : N.intl.string(N.t.bHa9kN),
                subtext: I ? (0, i.jsx)(A, { channel: o }) : null,
                action: () => {
                    D && S(C.L.TAKE_ACTION), c.Z.ring(n, [e.id], "user_context_menu"), I && null != n && (0, p.Kh)(n);
                },
                className: j.menuItem,
            })
          : U
            ? (0, i.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, i.jsxs)("div", {
                      className: j.label,
                      children: [N.intl.string(N.t.ygslb0), D && (0, i.jsx)(x, {})],
                  }),
                  subtext: I
                      ? (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(j.subtext, j.ringing),
                            children: N.intl.format(N.t.dwfzZi, { channelName: (0, i.jsx)(A, { channel: o }) }),
                        })
                      : null,
                  action: () => {
                      D && S(C.L.TAKE_ACTION), c.Z.stopRinging(n, [e.id]);
                  },
                  className: j.menuItem,
              })
            : null;
}
let A = (e) => {
        let { channel: n } = e,
            t = (0, b.ZP)(n);
        return (0, i.jsxs)("div", {
            className: j.subtext,
            children: [
                (0, i.jsx)(d.gj8, { size: "xs" }),
                (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: j.channelName,
                    children: t,
                }),
            ],
        });
    },
    x = () =>
        (0, i.jsx)(d.IGR, {
            color: o.Z.BG_BRAND,
            text: N.intl.string(N.t.y2b7CA),
        });
