t.d(e, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(26151),
    o = t(358221),
    d = t(985588),
    u = t(354459),
    s = t(388032);
function c(n, e) {
    let [t, c] = (0, r.Wu)([o.Z], () => [o.Z.getParticipants(e), o.Z.getParticipant(e, n.id)], [e, n.id]);
    return (0, d.s)(n) && 0 !== t.length
        ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                  id: 'ring',
                  label: s.intl.string(s.t.bHa9kJ),
                  action: () => a.Z.ring(e, [n.id])
              })
            : c.type === u.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                    id: 'stop-ringing',
                    label: s.intl.string(s.t.ygslb2),
                    action: () => a.Z.stopRinging(e, [n.id])
                })
              : null
        : null;
}
