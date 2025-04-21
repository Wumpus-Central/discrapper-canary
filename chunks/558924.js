t.d(e, { Z: () => I }), t(388685), t(539854);
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(990547),
    s = t(831209),
    u = t(442837),
    o = t(704215),
    c = t(481060),
    d = t(26151),
    g = t(906732),
    f = t(213609),
    Z = t(358221),
    b = t(985588),
    p = t(933557),
    m = t(243778),
    v = t(359110),
    h = t(163612),
    x = t(592125),
    _ = t(354459),
    O = t(921944),
    N = t(388032),
    j = t(940082);
function I(n, e) {
    let [t, i] = (0, u.Wu)([Z.Z], () => [null != e ? Z.Z.getParticipants(e) : null, null != e ? Z.Z.getParticipant(e, n.id) : null], [e, n.id]),
        s = (0, u.e7)([x.Z], () => x.Z.getChannel(e)),
        p = (0, b.s)(n, 'context_menu', e),
        { enabled: I } = h.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: 'useRingHangupItem'
        }),
        C = !p || (null == t ? void 0 : t.length) === 0 || null == e,
        E = I && (null == s ? void 0 : s.guild_id) != null,
        T = null == i,
        U = null != i && i.type === _.fO.USER && i.ringing,
        k = [];
    E && !C && (T || U) && k.push(o.z.RING_USER_TO_VC_NEW_BADGE);
    let [A, S] = (0, m.US)(k),
        w = A === o.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: R } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: e,
                voice_guild_id: null == s ? void 0 : s.guild_id,
                location_stack: R
            }
        },
        { disableTrack: C || !E },
        [n.id]
    ),
    C)
        ? null
        : T
          ? (0, l.jsx)(c.sNh, {
                id: 'ring',
                label: E
                    ? (0, l.jsxs)('div', {
                          className: j.label,
                          children: [N.intl.string(N.t['3Hv9qa']), w && (0, l.jsx)(P, {})]
                      })
                    : N.intl.string(N.t.bHa9kJ),
                subtext: E ? (0, l.jsx)(y, { channel: s }) : null,
                action: () => {
                    w && S(O.L.TAKE_ACTION), d.Z.ring(e, [n.id]), E && null != e && (0, v.Kh)(e);
                },
                className: j.menuItem
            })
          : U
            ? (0, l.jsx)(c.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: j.label,
                      children: [N.intl.string(N.t.ygslb2), w && (0, l.jsx)(P, {})]
                  }),
                  subtext: E
                      ? (0, l.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            className: r()(j.subtext, j.ringing),
                            children: N.intl.format(N.t.dwfzZm, { channelName: (0, l.jsx)(y, { channel: s }) })
                        })
                      : null,
                  action: () => {
                      w && S(O.L.TAKE_ACTION), d.Z.stopRinging(e, [n.id]);
                  },
                  className: j.menuItem
              })
            : null;
}
let y = (n) => {
        let { channel: e } = n,
            t = (0, p.ZP)(e);
        return (0, l.jsxs)('div', {
            className: j.subtext,
            children: [
                (0, l.jsx)(c.gj8, { size: 'xs' }),
                (0, l.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    className: j.channelName,
                    children: t
                })
            ]
        });
    },
    P = () =>
        (0, l.jsx)(c.IGR, {
            color: s.Z.BG_BRAND,
            text: N.intl.string(N.t.y2b7CA)
        });
