n.d(t, { Z: () => N }), n(388685), n(539854);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
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
    j = n(354459),
    x = n(921944),
    _ = n(388032),
    y = n(940082);
function N(e, t) {
    let [n, l] = (0, s.Wu)([b.Z], () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null], [t, e.id]),
        o = (0, s.e7)([h.Z], () => h.Z.getChannel(t)),
        m = (0, Z.s)(e, 'context_menu', t),
        { enabled: N } = O.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: 'useRingHangupItem'
        }),
        E = !m || (null == n ? void 0 : n.length) === 0 || null == t,
        S = N && (null == o ? void 0 : o.guild_id) != null,
        A = null == l,
        C = null != l && l.type === j.fO.USER && l.ringing,
        U = [];
    S && !E && (A || C) && U.push(u.z.RING_USER_TO_VC_NEW_BADGE);
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
                location_stack: w
            }
        },
        { disableTrack: E || !S },
        [e.id]
    ),
    E)
        ? null
        : A
          ? (0, i.jsx)(d.sNh, {
                id: 'ring',
                label: S
                    ? (0, i.jsxs)('div', {
                          className: y.label,
                          children: [_.intl.string(_.t['3Hv9qa']), T && (0, i.jsx)(P, {})]
                      })
                    : _.intl.string(_.t.bHa9kJ),
                subtext: S ? (0, i.jsx)(I, { channel: o }) : null,
                action: () => {
                    T && L(x.L.TAKE_ACTION), c.Z.ring(t, [e.id]), S && null != t && (0, p.Kh)(t);
                },
                className: y.menuItem
            })
          : C
            ? (0, i.jsx)(d.sNh, {
                  id: 'stop-ringing',
                  label: (0, i.jsxs)('div', {
                      className: y.label,
                      children: [_.intl.string(_.t.ygslb2), T && (0, i.jsx)(P, {})]
                  }),
                  subtext: S
                      ? (0, i.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            className: r()(y.subtext, y.ringing),
                            children: _.intl.format(_.t.dwfzZm, { channelName: (0, i.jsx)(I, { channel: o }) })
                        })
                      : null,
                  action: () => {
                      T && L(x.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id]);
                  },
                  className: y.menuItem
              })
            : null;
}
let I = (e) => {
        let { channel: t } = e,
            n = (0, m.ZP)(t);
        return (0, i.jsxs)('div', {
            className: y.subtext,
            children: [
                (0, i.jsx)(d.gj8, { size: 'xs' }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    className: y.channelName,
                    children: n
                })
            ]
        });
    },
    P = () =>
        (0, i.jsx)(d.IGR, {
            color: o.Z.BG_BRAND,
            text: _.intl.string(_.t.y2b7CA)
        });
