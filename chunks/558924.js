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
    Z = n(359110),
    N = n(163612),
    m = n(592125),
    v = n(354459),
    p = n(921944),
    O = n(388032),
    h = n(386571);
function j(e, t) {
    let [n, i] = (0, o.Wu)([d.Z], () => [null != t ? d.Z.getParticipants(t) : null, null != t ? d.Z.getParticipant(t, e.id) : null], [t, e.id]),
        a = (0, o.e7)([m.Z], () => m.Z.getChannel(t)),
        f = (0, g.s)(e, 'context_menu', t),
        { enabled: j } = N.Z.useExperiment({
            guildId: null == a ? void 0 : a.guild_id,
            location: 'useRingHangupItem'
        }),
        _ = !f || (null == n ? void 0 : n.length) === 0 || null == t,
        P = j && (null == a ? void 0 : a.guild_id) != null,
        E = null == i,
        W = null != i && i.type === v.fO.USER && i.ringing,
        I = [];
    P && !_ && (E || W) && I.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [A, S] = (0, b.US)(I),
        C = A === s.z.RING_USER_TO_VC_NEW_BADGE;
    return _
        ? null
        : E
          ? (0, l.jsx)(u.sNh, {
                id: 'ring',
                label: P
                    ? (0, l.jsxs)('div', {
                          className: h.label,
                          children: [O.NW.string(O.t['3Hv9qa']), C && (0, l.jsx)(y, {})]
                      })
                    : O.NW.string(O.t.bHa9kJ),
                subtext: P ? (0, l.jsx)(x, { channel: a }) : null,
                action: () => {
                    C && S(p.L.TAKE_ACTION), c.Z.ring(t, [e.id]), P && null != t && (0, Z.Kh)(t);
                },
                className: h.menuItem
            })
          : W
            ? (0, l.jsx)(u.sNh, {
                  id: 'stop-ringing',
                  label: (0, l.jsxs)('div', {
                      className: h.label,
                      children: [O.NW.string(O.t.ygslb2), C && (0, l.jsx)(y, {})]
                  }),
                  subtext: P
                      ? (0, l.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            className: r()(h.subtext, h.ringing),
                            children: O.NW.format(O.t.dwfzZm, { channelName: (0, l.jsx)(x, { channel: a }) })
                        })
                      : null,
                  action: () => {
                      C && S(p.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id]);
                  },
                  className: h.menuItem
              })
            : null;
}
let x = (e) => {
        let { channel: t } = e,
            n = (0, f.ZP)(t);
        return (0, l.jsxs)('div', {
            className: h.subtext,
            children: [
                (0, l.jsx)(u.gj8, { size: 'xs' }),
                (0, l.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    className: h.channelName,
                    children: n
                })
            ]
        });
    },
    y = () =>
        (0, l.jsx)(u.IGR, {
            color: a.Z.BG_BRAND,
            text: O.NW.string(O.t.y2b7CA)
        });
