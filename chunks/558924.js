n.d(t, { Z: () => v }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(26151),
    u = n(358221),
    c = n(985588),
    d = n(933557),
    g = n(163612),
    f = n(592125),
    b = n(354459),
    Z = n(388032),
    m = n(386571);
function v(e, t) {
    let [n, l] = (0, a.Wu)([u.Z], () => [null != t ? u.Z.getParticipants(t) : null, null != t ? u.Z.getParticipant(t, e.id) : null], [t, e.id]),
        d = (0, a.e7)([f.Z], () => f.Z.getChannel(t)),
        v = (0, c.s)(e, 'context_menu', t),
        { enabled: p } = g.Z.useExperiment({
            guildId: null == d ? void 0 : d.guild_id,
            location: 'useRingHangupItem'
        }),
        O = p && (null == d ? void 0 : d.guild_id) != null;
    return v && (null == n ? void 0 : n.length) !== 0 && null != t
        ? null == l
            ? (0, i.jsx)(o.sNh, {
                  id: 'ring',
                  label: O ? Z.NW.string(Z.t['3Hv9qa']) : Z.NW.string(Z.t.bHa9kJ),
                  subtext: O ? (0, i.jsx)(N, { channel: d }) : null,
                  action: () => s.Z.ring(t, [e.id]),
                  className: m.menuItem
              })
            : l.type === b.fO.USER && l.ringing
              ? (0, i.jsx)(o.sNh, {
                    id: 'stop-ringing',
                    label: Z.NW.string(Z.t.ygslb2),
                    subtext: O
                        ? (0, i.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              className: r()(m.subtext, m.ringing),
                              children: Z.NW.format(Z.t.dwfzZm, { channelName: (0, i.jsx)(N, { channel: d }) })
                          })
                        : null,
                    action: () => s.Z.stopRinging(t, [e.id]),
                    className: m.menuItem
                })
              : null
        : null;
}
let N = (e) => {
    let { channel: t } = e,
        n = (0, d.ZP)(t);
    return (0, i.jsxs)('div', {
        className: m.subtext,
        children: [
            (0, i.jsx)(o.gj8, { size: 'xs' }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: m.channelName,
                children: n
            })
        ]
    });
};
