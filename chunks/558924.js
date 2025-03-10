n.d(t, { Z: () => Z }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(26151),
    o = n(358221),
    s = n(985588),
    u = n(933557),
    c = n(163612),
    d = n(592125),
    g = n(354459),
    f = n(388032),
    b = n(386571);
function Z(e, t) {
    let [n, u] = (0, l.Wu)([o.Z], () => [null != t ? o.Z.getParticipants(t) : null, null != t ? o.Z.getParticipant(t, e.id) : null], [t, e.id]),
        Z = (0, l.e7)([d.Z], () => d.Z.getChannel(t)),
        v = (0, s.s)(e, 'context_menu', t),
        { enabled: N } = c.Z.useExperiment({
            guildId: null == Z ? void 0 : Z.guild_id,
            location: 'useRingHangupItem'
        }),
        p = N && (null == Z ? void 0 : Z.guild_id) != null;
    return v && (null == n ? void 0 : n.length) !== 0 && null != t
        ? null == u
            ? (0, i.jsx)(r.sNh, {
                  id: 'ring',
                  label: p ? f.NW.string(f.t['3Hv9qa']) : f.NW.string(f.t.bHa9kJ),
                  subtext: p ? (0, i.jsx)(m, { channel: Z }) : null,
                  action: () => a.Z.ring(t, [e.id]),
                  className: b.menuItem
              })
            : u.type === g.fO.USER && u.ringing
              ? (0, i.jsx)(r.sNh, {
                    id: 'stop-ringing',
                    label: f.NW.string(f.t.ygslb2),
                    subtext: p
                        ? (0, i.jsx)(r.Text, {
                              variant: 'text-xs/medium',
                              className: b.subtext,
                              children: f.NW.format(f.t.dwfzZm, { channelName: (0, i.jsx)(m, { channel: Z }) })
                          })
                        : null,
                    action: () => a.Z.stopRinging(t, [e.id]),
                    className: b.menuItem
                })
              : null
        : null;
}
let m = (e) => {
    let { channel: t } = e,
        n = (0, u.ZP)(t);
    return (0, i.jsxs)('div', {
        className: b.subtext,
        children: [
            (0, i.jsx)(r.gj8, { size: 'xs' }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/medium',
                className: b.channelName,
                children: n
            })
        ]
    });
};
