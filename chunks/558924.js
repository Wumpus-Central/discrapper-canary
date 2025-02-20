n.d(t, { Z: () => d }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(26151),
    a = n(358221),
    u = n(985588),
    s = n(354459),
    c = n(388032);
function d(e, t) {
    let [n, d] = (0, l.Wu)([a.Z], () => [null != t ? a.Z.getParticipants(t) : null, null != t ? a.Z.getParticipant(t, e.id) : null], [t, e.id]);
    return (0, u.s)(e, 'context_menu', t) && (null == n ? void 0 : n.length) !== 0 && null != t
        ? null == d
            ? (0, i.jsx)(r.sNh, {
                  id: 'ring',
                  label: c.NW.string(c.t.bHa9kJ),
                  action: () => o.Z.ring(t, [e.id])
              })
            : d.type === s.fO.USER && d.ringing
              ? (0, i.jsx)(r.sNh, {
                    id: 'stop-ringing',
                    label: c.NW.string(c.t.ygslb2),
                    action: () => o.Z.stopRinging(t, [e.id])
                })
              : null
        : null;
}
