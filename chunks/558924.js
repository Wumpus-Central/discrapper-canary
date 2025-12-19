t.d(n, {
    O: () => y,
    Z: () => A,
}),
    t(388685),
    t(539854);
var i = t(54381);
t(473749);
var l = t(120356),
    r = t.n(l),
    a = t(990547),
    o = t(442837),
    u = t(704215),
    c = t(692547),
    s = t(481060),
    d = t(26151),
    f = t(906732),
    g = t(213609),
    v = t(358221),
    h = t(985588),
    b = t(933557),
    _ = t(243778),
    p = t(359110),
    m = t(163612),
    O = t(592125),
    Z = t(944486),
    E = t(354459),
    N = t(921944),
    C = t(388032),
    j = t(59110);
function y(e, n) {
    let t = (0, o.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        i = (0, o.e7)([O.Z], () => {
            var e, n;
            return null != (n = null == (e = O.Z.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: l } = m.Z.useExperiment({
            guildId: i,
            location: n,
        });
    return l ? t : e;
}
function A(e, n) {
    let [t, l] = (0, o.Wu)(
            [v.Z],
            () => [null != n ? v.Z.getParticipants(n) : null, null != n ? v.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        c = (0, o.e7)([O.Z], () => O.Z.getChannel(n)),
        b = (0, h.s)(e, "context_menu", n),
        { enabled: Z } = m.Z.useExperiment({
            guildId: null == c ? void 0 : c.guild_id,
            location: "useRingHangupItem",
        }),
        y = !b || (null == t ? void 0 : t.length) === 0 || null == n,
        A = Z && (null == c ? void 0 : c.guild_id) != null,
        P = null == l,
        U = null != l && l.type === E.fO.USER && l.ringing,
        T = [];
    A && !y && (P || U) && T.push(u.z.RING_USER_TO_VC_NEW_BADGE);
    let [S, R] = (0, _.US)(T),
        D = S === u.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, f.ZP)();
    return ((0, g.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == c ? void 0 : c.guild_id,
                location_stack: M,
            },
        },
        { disableTrack: y || !A },
        [e.id],
    ),
    y)
        ? null
        : P
          ? (0, i.jsx)(s.sNh, {
                id: "ring",
                label: A
                    ? (0, i.jsxs)("div", {
                          className: j.label,
                          children: [C.intl.string(C.t["3Hv9qQ"]), D && (0, i.jsx)(I, {})],
                      })
                    : C.intl.string(C.t.bHa9kN),
                subtext: A ? (0, i.jsx)(x, { channel: c }) : null,
                action: () => {
                    D && R(N.L.TAKE_ACTION), d.Z.ring(n, [e.id], "user_context_menu"), A && null != n && (0, p.Kh)(n);
                },
                className: j.menuItem,
            })
          : U
            ? (0, i.jsx)(s.sNh, {
                  id: "stop-ringing",
                  label: (0, i.jsxs)("div", {
                      className: j.label,
                      children: [C.intl.string(C.t.ygslb0), D && (0, i.jsx)(I, {})],
                  }),
                  subtext: A
                      ? (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            className: r()(j.subtext, j.ringing),
                            children: C.intl.format(C.t.dwfzZi, { channelName: (0, i.jsx)(x, { channel: c }) }),
                        })
                      : null,
                  action: () => {
                      D && R(N.L.TAKE_ACTION), d.Z.stopRinging(n, [e.id]);
                  },
                  className: j.menuItem,
              })
            : null;
}
let x = (e) => {
        let { channel: n } = e,
            t = (0, b.ZP)(n);
        return (0, i.jsxs)("div", {
            className: j.subtext,
            children: [
                (0, i.jsx)(s.gj8, { size: "xs" }),
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    className: j.channelName,
                    children: t,
                }),
            ],
        });
    },
    I = () =>
        (0, i.jsx)(s.IGR, {
            color: c.Z.colors.BACKGROUND_BRAND.css,
            text: C.intl.string(C.t.y2b7CA),
        });
