t.d(n, { Z: () => y }), t(388685), t(539854);
var l = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    a = t(990547),
    o = t(831209),
    u = t(442837),
    s = t(704215),
    c = t(481060),
    d = t(26151),
    g = t(906732),
    Z = t(213609),
    b = t(358221),
    f = t(985588),
    p = t(933557),
    O = t(243778),
    m = t(359110),
    N = t(163612),
    h = t(592125),
    j = t(354459),
    P = t(921944),
    x = t(388032),
    v = t(940082);
function y(e, n) {
    let [t, r] = (0, u.Wu)([b.Z], () => [null != n ? b.Z.getParticipants(n) : null, null != n ? b.Z.getParticipant(n, e.id) : null], [n, e.id]),
        o = (0, u.e7)([h.Z], () => h.Z.getChannel(n)),
        p = (0, f.s)(e, 'context_menu', n),
        { enabled: y } = N.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: 'useRingHangupItem'
        }),
        C = !p || (null == t ? void 0 : t.length) === 0 || null == n,
        I = y && (null == o ? void 0 : o.guild_id) != null,
        T = null == r,
        S = null != r && r.type === j.fO.USER && r.ringing,
        U = [];
    I && !C && (T || S) && U.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [W, A] = (0, O.US)(U),
        R = W === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: w } = (0, g.ZP)();
    return ((0, Z.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: w
            }
        },
        { disableTrack: C || !I },
        [e.id]
    ),
    C)
        ? null
        : T
          ? (0, l.jsx)(c.sNh, {
                id: 'ring',
                label: I
                    ? (0, l.jsxs)('div', {
                          className: v.label,
                          children: [x.NW.string(x.t['3Hv9qa']), R && (0, l.jsx)(E, {})]
                      })
                    : x.NW.string(x.t.bHa9kJ),
                subtext: I ? (0, l.jsx)(_, { channel: o }) : null,
                action: () => {
                    R && A(P.L.TAKE_ACTION), d.Z.ring(n, [e.id]), I && null != n && (0, m.Kh)(n);
                },
                className: v.menuItem
            })
          : S
            ? (0, l.jsx)(c.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: v.label,
                      children: [x.NW.string(x.t.ygslb2), R && (0, l.jsx)(E, {})]
                  }),
                  subtext: I
                      ? (0, l.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            className: i()(v.subtext, v.ringing),
                            children: x.NW.format(x.t.dwfzZm, { channelName: (0, l.jsx)(_, { channel: o }) })
                        })
                      : null,
                  action: () => {
                      R && A(P.L.TAKE_ACTION), d.Z.stopRinging(n, [e.id]);
                  },
                  className: v.menuItem
              })
            : null;
}
let _ = (e) => {
        let { channel: n } = e,
            t = (0, p.ZP)(n);
        return (0, l.jsxs)('div', {
            className: v.subtext,
            children: [
                (0, l.jsx)(c.gj8, { size: 'xs' }),
                (0, l.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    className: v.channelName,
                    children: t
                })
            ]
        });
    },
    E = () =>
        (0, l.jsx)(c.IGR, {
            color: o.Z.BG_BRAND,
            text: x.NW.string(x.t.y2b7CA)
        });
