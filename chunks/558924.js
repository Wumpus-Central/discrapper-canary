t.d(n, { Z: () => N }), t(388685), t(539854);
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
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
    m = t(243778),
    O = t(359110),
    h = t(163612),
    j = t(592125),
    P = t(354459),
    v = t(921944),
    x = t(388032),
    y = t(940082);
function N(e, n) {
    let [t, i] = (0, u.Wu)([b.Z], () => [null != n ? b.Z.getParticipants(n) : null, null != n ? b.Z.getParticipant(n, e.id) : null], [n, e.id]),
        o = (0, u.e7)([j.Z], () => j.Z.getChannel(n)),
        p = (0, f.s)(e, 'context_menu', n),
        { enabled: N } = h.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: 'useRingHangupItem'
        }),
        C = !p || (null == t ? void 0 : t.length) === 0 || null == n,
        I = N && (null == o ? void 0 : o.guild_id) != null,
        S = null == i,
        T = null != i && i.type === P.fO.USER && i.ringing,
        U = [];
    I && !C && (S || T) && U.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [A, R] = (0, m.US)(U),
        w = A === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, g.ZP)();
    return ((0, Z.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: M
            }
        },
        { disableTrack: C || !I },
        [e.id]
    ),
    C)
        ? null
        : S
          ? (0, l.jsx)(c.sNh, {
                id: 'ring',
                label: I
                    ? (0, l.jsxs)('div', {
                          className: y.label,
                          children: [x.intl.string(x.t['3Hv9qa']), w && (0, l.jsx)(E, {})]
                      })
                    : x.intl.string(x.t.bHa9kJ),
                subtext: I ? (0, l.jsx)(_, { channel: o }) : null,
                action: () => {
                    w && R(v.L.TAKE_ACTION), d.Z.ring(n, [e.id]), I && null != n && (0, O.Kh)(n);
                },
                className: y.menuItem
            })
          : T
            ? (0, l.jsx)(c.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: y.label,
                      children: [x.intl.string(x.t.ygslb2), w && (0, l.jsx)(E, {})]
                  }),
                  subtext: I
                      ? (0, l.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            className: r()(y.subtext, y.ringing),
                            children: x.intl.format(x.t.dwfzZm, { channelName: (0, l.jsx)(_, { channel: o }) })
                        })
                      : null,
                  action: () => {
                      w && R(v.L.TAKE_ACTION), d.Z.stopRinging(n, [e.id]);
                  },
                  className: y.menuItem
              })
            : null;
}
let _ = (e) => {
        let { channel: n } = e,
            t = (0, p.ZP)(n);
        return (0, l.jsxs)('div', {
            className: y.subtext,
            children: [
                (0, l.jsx)(c.gj8, { size: 'xs' }),
                (0, l.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    className: y.channelName,
                    children: t
                })
            ]
        });
    },
    E = () =>
        (0, l.jsx)(c.IGR, {
            color: o.Z.BG_BRAND,
            text: x.intl.string(x.t.y2b7CA)
        });
