n.d(t, { Z: () => j }), n(47120), n(653041);
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(831209),
    o = n(442837),
    s = n(704215),
    u = n(481060),
    c = n(26151),
    d = n(358221),
    g = n(985588),
    f = n(933557),
    b = n(243778),
    Z = n(163612),
    N = n(592125),
    m = n(354459),
    v = n(921944),
    p = n(388032),
    O = n(386571);
function j(e, t) {
    let [n, i] = (0, o.Wu)([d.Z], () => [null != t ? d.Z.getParticipants(t) : null, null != t ? d.Z.getParticipant(t, e.id) : null], [t, e.id]),
        a = (0, o.e7)([N.Z], () => N.Z.getChannel(t)),
        f = (0, g.s)(e, 'context_menu', t),
        { enabled: j } = Z.Z.useExperiment({
            guildId: null == a ? void 0 : a.guild_id,
            location: 'useRingHangupItem'
        }),
        y = !f || (null == n ? void 0 : n.length) === 0 || null == t,
        _ = j && (null == a ? void 0 : a.guild_id) != null,
        P = null == i,
        W = null != i && i.type === m.fO.USER && i.ringing,
        E = [];
    _ && !y && (P || W) && E.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [I, A] = (0, b.US)(E),
        S = I === s.z.RING_USER_TO_VC_NEW_BADGE;
    return y
        ? null
        : P
          ? (0, l.jsx)(u.sNh, {
                id: 'ring',
                label: _
                    ? (0, l.jsxs)('div', {
                          className: O.label,
                          children: [p.NW.string(p.t['3Hv9qa']), S && (0, l.jsx)(h, {})]
                      })
                    : p.NW.string(p.t.bHa9kJ),
                subtext: _ ? (0, l.jsx)(x, { channel: a }) : null,
                action: () => {
                    S && A(v.L.TAKE_ACTION), c.Z.ring(t, [e.id]);
                },
                className: O.menuItem
            })
          : W
            ? (0, l.jsx)(u.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: O.label,
                      children: [p.NW.string(p.t.ygslb2), S && (0, l.jsx)(h, {})]
                  }),
                  subtext: _
                      ? (0, l.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            className: r()(O.subtext, O.ringing),
                            children: p.NW.format(p.t.dwfzZm, { channelName: (0, l.jsx)(x, { channel: a }) })
                        })
                      : null,
                  action: () => {
                      S && A(v.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id]);
                  },
                  className: O.menuItem
              })
            : null;
}
let x = (e) => {
        let { channel: t } = e,
            n = (0, f.ZP)(t);
        return (0, l.jsxs)('div', {
            className: O.subtext,
            children: [
                (0, l.jsx)(u.gj8, { size: 'xs' }),
                (0, l.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    className: O.channelName,
                    children: n
                })
            ]
        });
    },
    h = () =>
        (0, l.jsx)(u.IGR, {
            color: a.Z.BG_BRAND,
            text: p.NW.string(p.t.y2b7CA)
        });
