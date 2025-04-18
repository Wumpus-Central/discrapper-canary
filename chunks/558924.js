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
    N = t(933557),
    p = t(243778),
    m = t(359110),
    v = t(163612),
    h = t(592125),
    x = t(354459),
    _ = t(921944),
    O = t(388032),
    j = t(519287);
function I(n, e) {
    let [t, i] = (0, u.Wu)([Z.Z], () => [null != e ? Z.Z.getParticipants(e) : null, null != e ? Z.Z.getParticipant(e, n.id) : null], [e, n.id]),
        s = (0, u.e7)([h.Z], () => h.Z.getChannel(e)),
        N = (0, b.s)(n, 'context_menu', e),
        { enabled: I } = v.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: 'useRingHangupItem'
        }),
        C = !N || (null == t ? void 0 : t.length) === 0 || null == e,
        E = I && (null == s ? void 0 : s.guild_id) != null,
        W = null == i,
        T = null != i && i.type === x.fO.USER && i.ringing,
        U = [];
    E && !C && (W || T) && U.push(o.z.RING_USER_TO_VC_NEW_BADGE);
    let [k, A] = (0, p.US)(U),
        S = k === o.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: w } = (0, g.ZP)();
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: e,
                voice_guild_id: null == s ? void 0 : s.guild_id,
                location_stack: w
            }
        },
        { disableTrack: C || !E },
        [n.id]
    ),
    C)
        ? null
        : W
          ? (0, l.jsx)(c.sNh, {
                id: 'ring',
                label: E
                    ? (0, l.jsxs)('div', {
                          className: j.label,
                          children: [O.NW.string(O.t['3Hv9qa']), S && (0, l.jsx)(P, {})]
                      })
                    : O.NW.string(O.t.bHa9kJ),
                subtext: E ? (0, l.jsx)(y, { channel: s }) : null,
                action: () => {
                    S && A(_.L.TAKE_ACTION), d.Z.ring(e, [n.id]), E && null != e && (0, m.Kh)(e);
                },
                className: j.menuItem
            })
          : T
            ? (0, l.jsx)(c.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: j.label,
                      children: [O.NW.string(O.t.ygslb2), S && (0, l.jsx)(P, {})]
                  }),
                  subtext: E
                      ? (0, l.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            className: r()(j.subtext, j.ringing),
                            children: O.NW.format(O.t.dwfzZm, { channelName: (0, l.jsx)(y, { channel: s }) })
                        })
                      : null,
                  action: () => {
                      S && A(_.L.TAKE_ACTION), d.Z.stopRinging(e, [n.id]);
                  },
                  className: j.menuItem
              })
            : null;
}
let y = (n) => {
        let { channel: e } = n,
            t = (0, N.ZP)(e);
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
            text: O.NW.string(O.t.y2b7CA)
        });
