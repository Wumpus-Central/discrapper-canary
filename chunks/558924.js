e.d(n, { Z: () => c }), e(47120);
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(26151),
    d = e(358221),
    r = e(985588),
    s = e(354459),
    u = e(388032);
function c(t, n) {
    let [e, c] = (0, l.Wu)([d.Z], () => [null != n ? d.Z.getParticipants(n) : null, null != n ? d.Z.getParticipant(n, t.id) : null], [n, t.id]);
    return (0, r.s)(t, 'context_menu', n) && (null == e ? void 0 : e.length) !== 0 && null != n
        ? null == c
            ? (0, i.jsx)(a.sNh, {
                  id: 'ring',
                  label: u.intl.string(u.t.bHa9kJ),
                  action: () => o.Z.ring(n, [t.id])
              })
            : c.type === s.fO.USER && c.ringing
              ? (0, i.jsx)(a.sNh, {
                    id: 'stop-ringing',
                    label: u.intl.string(u.t.ygslb2),
                    action: () => o.Z.stopRinging(n, [t.id])
                })
              : null
        : null;
}
