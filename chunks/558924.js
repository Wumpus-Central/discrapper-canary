n.d(e, { Z: () => c }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(26151),
    r = n(358221),
    o = n(985588),
    s = n(354459),
    u = n(388032);
function c(t, e) {
    let [n, c] = (0, l.Wu)([r.Z], () => [null != e ? r.Z.getParticipants(e) : null, null != e ? r.Z.getParticipant(e, t.id) : null], [e, t.id]);
    return (0, o.s)(t, 'context_menu', e) && (null == n ? void 0 : n.length) !== 0 && null != e
        ? null == c
            ? (0, i.jsx)(a.sNh, {
                  id: 'ring',
                  label: u.intl.string(u.t.bHa9kJ),
                  action: () => d.Z.ring(e, [t.id])
              })
            : c.type === s.fO.USER && c.ringing
              ? (0, i.jsx)(a.sNh, {
                    id: 'stop-ringing',
                    label: u.intl.string(u.t.ygslb2),
                    action: () => d.Z.stopRinging(e, [t.id])
                })
              : null
        : null;
}
