t.d(e, {
    O: () => C,
    Z: () => P,
}),
    t(388685),
    t(539854);
var l = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    a = t(990547),
    u = t(442837),
    s = t(704215),
    o = t(692547),
    d = t(481060),
    c = t(26151),
    g = t(906732),
    f = t(213609),
    Z = t(358221),
    p = t(957914),
    b = t(985588),
    m = t(933557),
    v = t(243778),
    _ = t(359110),
    h = t(163612),
    x = t(592125),
    N = t(944486),
    O = t(354459),
    I = t(921944),
    j = t(388032),
    y = t(59110);
function C(n, e) {
    let t = (0, u.e7)([N.Z], () => N.Z.getVoiceChannelId()),
        l = (0, u.e7)([x.Z], () => {
            var n, e;
            return null != (e = null == (n = x.Z.getChannel(t)) ? void 0 : n.getGuildId()) ? e : void 0;
        }),
        { enabled: i } = h.Z.useExperiment({
            guildId: l,
            location: e,
        });
    return i ? t : n;
}
function P(n, e) {
    let [t, i] = (0, u.Wu)(
            [Z.Z],
            () => [null != e ? Z.Z.getParticipants(e) : null, null != e ? Z.Z.getParticipant(e, n.id) : null],
            [e, n.id],
        ),
        o = (0, u.e7)([x.Z], () => x.Z.getChannel(e)),
        m = (0, b.s)(n, "context_menu", e),
        { enabled: N } = h.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: "useRingHangupItem",
        }),
        { copyVariant: C } = p.N.useConfig({ location: "useRingHangupItem" }),
        P = !m || (null == t ? void 0 : t.length) === 0 || null == e,
        T = N && (null == o ? void 0 : o.guild_id) != null,
        U = null == i,
        k = null != i && i.type === O.fO.USER && i.ringing,
        S = [];
    T && !P && (U || k) && S.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [R, w] = (0, v.US)(S),
        V = R === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: G } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: e,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: G,
            },
        },
        { disableTrack: P || !T },
        [n.id],
    ),
    P)
        ? null
        : U
          ? (0, l.jsx)(d.sNh, {
                id: "ring",
                label: T
                    ? (0, l.jsxs)("div", {
                          className: y.label,
                          children: [j.intl.string(j.t["3Hv9qQ"]), V && (0, l.jsx)(A, {})],
                      })
                    : "add" === C
                      ? j.intl.string(j.t.xlwRY6)
                      : j.intl.string(j.t.bHa9kN),
                subtext: T || "control" !== C ? (0, l.jsx)(E, { channel: o }) : null,
                action: () => {
                    V && w(I.L.TAKE_ACTION), c.Z.ring(e, [n.id], "user_context_menu"), T && null != e && (0, _.Kh)(e);
                },
                className: y.menuItem,
            })
          : k
            ? (0, l.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: y.label,
                      children: [j.intl.string(j.t.ygslb0), V && (0, l.jsx)(A, {})],
                  }),
                  subtext: T
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(y.subtext, y.ringing),
                            children: j.intl.format(j.t.dwfzZi, { channelName: (0, l.jsx)(E, { channel: o }) }),
                        })
                      : null,
                  action: () => {
                      V && w(I.L.TAKE_ACTION), c.Z.stopRinging(e, [n.id]);
                  },
                  className: y.menuItem,
              })
            : null;
}
let E = (n) => {
        let { channel: e } = n,
            t = (0, m.ZP)(e);
        return (0, l.jsxs)("div", {
            className: y.subtext,
            children: [
                (0, l.jsx)(d.gj8, { size: "xs" }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: y.channelName,
                    children: t,
                }),
            ],
        });
    },
    A = () =>
        (0, l.jsx)(d.IGR, {
            color: o.Z.colors.BACKGROUND_BRAND.css,
            text: j.intl.string(j.t.y2b7CA),
        });
