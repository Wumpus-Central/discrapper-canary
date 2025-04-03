n.d(t, { Z: () => y }), n(47120), n(653041);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(990547),
    o = n(831209),
    s = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(26151),
    g = n(906732),
    f = n(213609),
    b = n(358221),
    Z = n(985588),
    N = n(933557),
    m = n(243778),
    v = n(359110),
    p = n(163612),
    O = n(592125),
    h = n(354459),
    j = n(921944),
    x = n(388032),
    _ = n(940082);
function y(e, t) {
    let [n, l] = (0, s.Wu)([b.Z], () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null], [t, e.id]),
        o = (0, s.e7)([O.Z], () => O.Z.getChannel(t)),
        N = (0, Z.s)(e, 'context_menu', t),
        { enabled: y } = p.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: 'useRingHangupItem'
        }),
        I = !N || (null == n ? void 0 : n.length) === 0 || null == t,
        W = y && (null == o ? void 0 : o.guild_id) != null,
        A = null == l,
        S = null != l && l.type === h.fO.USER && l.ringing,
        C = [];
    W && !I && (A || S) && C.push(u.z.RING_USER_TO_VC_NEW_BADGE);
    let [U, D] = (0, m.US)(C),
        L = U === u.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: T } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: t,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: T
            }
        },
        { disableTrack: I || !W },
        [e.id]
    ),
    I)
        ? null
        : A
          ? (0, i.jsx)(c.sNh, {
                id: 'ring',
                label: W
                    ? (0, i.jsxs)('div', {
                          className: _.label,
                          children: [x.NW.string(x.t['3Hv9qa']), L && (0, i.jsx)(E, {})]
                      })
                    : x.NW.string(x.t.bHa9kJ),
                subtext: W ? (0, i.jsx)(P, { channel: o }) : null,
                action: () => {
                    L && D(j.L.TAKE_ACTION), d.Z.ring(t, [e.id]), W && null != t && (0, v.Kh)(t);
                },
                className: _.menuItem
            })
          : S
            ? (0, i.jsx)(c.sNh, {
                  id: 'stop-ringing',
                  label: (0, i.jsxs)('div', {
                      className: _.label,
                      children: [x.NW.string(x.t.ygslb2), L && (0, i.jsx)(E, {})]
                  }),
                  subtext: W
                      ? (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            className: r()(_.subtext, _.ringing),
                            children: x.NW.format(x.t.dwfzZm, { channelName: (0, i.jsx)(P, { channel: o }) })
                        })
                      : null,
                  action: () => {
                      L && D(j.L.TAKE_ACTION), d.Z.stopRinging(t, [e.id]);
                  },
                  className: _.menuItem
              })
            : null;
}
let P = (e) => {
        let { channel: t } = e,
            n = (0, N.ZP)(t);
        return (0, i.jsxs)('div', {
            className: _.subtext,
            children: [
                (0, i.jsx)(c.gj8, { size: 'xs' }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    className: _.channelName,
                    children: n
                })
            ]
        });
    },
    E = () =>
        (0, i.jsx)(c.IGR, {
            color: o.Z.BG_BRAND,
            text: x.NW.string(x.t.y2b7CA)
        });
