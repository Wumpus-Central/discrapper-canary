e.d(t, {
    Z: function () {
        return c;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    o = e(26151),
    u = e(358221),
    a = e(985588),
    d = e(354459),
    s = e(388032);
function c(n, t) {
    let [e, c] = (0, l.Wu)([u.Z], () => [null != t ? u.Z.getParticipants(t) : null, null != t ? u.Z.getParticipant(t, n.id) : null], [t, n.id]);
    return (0, a.s)(n, 'context_menu', t) && (null == e ? void 0 : e.length) !== 0 && null != t
        ? null == c
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'ring',
                  label: s.intl.string(s.t.bHa9kJ),
                  action: () => o.Z.ring(t, [n.id])
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(r.MenuItem, {
                    id: 'stop-ringing',
                    label: s.intl.string(s.t.ygslb2),
                    action: () => o.Z.stopRinging(t, [n.id])
                })
              : null
        : null;
}
