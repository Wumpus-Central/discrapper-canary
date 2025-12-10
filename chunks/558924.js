n.d(t, {
    O: () => y,
    Z: () => P,
}),
    n(388685),
    n(539854);
var l = n(54381);
n(473749);
var i = n(120356),
    r = n.n(i),
    a = n(990547),
    o = n(442837),
    s = n(704215),
    u = n(692547),
    d = n(481060),
    c = n(26151),
    g = n(906732),
    f = n(213609),
    b = n(358221),
    Z = n(985588),
    p = n(933557),
    m = n(243778),
    v = n(359110),
    O = n(163612),
    h = n(592125),
    _ = n(944486),
    j = n(354459),
    x = n(921944),
    I = n(388032),
    N = n(604570);
function y(e, t) {
    let n = (0, o.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        l = (0, o.e7)([h.Z], () => {
            var e, t;
            return null != (t = null == (e = h.Z.getChannel(n)) ? void 0 : e.getGuildId()) ? t : void 0;
        }),
        { enabled: i } = O.Z.useExperiment({
            guildId: l,
            location: t,
        });
    return i ? n : e;
}
function P(e, t) {
    let [n, i] = (0, o.Wu)(
            [b.Z],
            () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null],
            [t, e.id],
        ),
        u = (0, o.e7)([h.Z], () => h.Z.getChannel(t)),
        p = (0, Z.s)(e, "context_menu", t),
        { enabled: _ } = O.Z.useExperiment({
            guildId: null == u ? void 0 : u.guild_id,
            location: "useRingHangupItem",
        }),
        y = !p || (null == n ? void 0 : n.length) === 0 || null == t,
        P = _ && (null == u ? void 0 : u.guild_id) != null,
        A = null == i,
        S = null != i && i.type === j.fO.USER && i.ringing,
        D = [];
    P && !y && (A || S) && D.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [U, T] = (0, m.US)(D),
        L = U === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: t,
                voice_guild_id: null == u ? void 0 : u.guild_id,
                location_stack: M,
            },
        },
        { disableTrack: y || !P },
        [e.id],
    ),
    y)
        ? null
        : A
          ? (0, l.jsx)(d.sNh, {
                id: "ring",
                label: P
                    ? (0, l.jsxs)("div", {
                          className: N.label,
                          children: [I.intl.string(I.t["3Hv9qQ"]), L && (0, l.jsx)(C, {})],
                      })
                    : I.intl.string(I.t.bHa9kN),
                subtext: P ? (0, l.jsx)(E, { channel: u }) : null,
                action: () => {
                    L && T(x.L.TAKE_ACTION), c.Z.ring(t, [e.id], "user_context_menu"), P && null != t && (0, v.Kh)(t);
                },
                className: N.menuItem,
            })
          : S
            ? (0, l.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: N.label,
                      children: [I.intl.string(I.t.ygslb0), L && (0, l.jsx)(C, {})],
                  }),
                  subtext: P
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(N.subtext, N.ringing),
                            children: I.intl.format(I.t.dwfzZi, { channelName: (0, l.jsx)(E, { channel: u }) }),
                        })
                      : null,
                  action: () => {
                      L && T(x.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id]);
                  },
                  className: N.menuItem,
              })
            : null;
}
let E = (e) => {
        let { channel: t } = e,
            n = (0, p.ZP)(t);
        return (0, l.jsxs)("div", {
            className: N.subtext,
            children: [
                (0, l.jsx)(d.gj8, { size: "xs" }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: N.channelName,
                    children: n,
                }),
            ],
        });
    },
    C = () =>
        (0, l.jsx)(d.IGR, {
            color: u.Z.colors.BACKGROUND_BRAND.css,
            text: I.intl.string(I.t.y2b7CA),
        });
