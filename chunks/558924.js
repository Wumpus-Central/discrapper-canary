i.d(e, {
    Z: function () {
        return c;
    }
}),
    i(47120);
var r = i(200651);
i(192379);
var t = i(442837),
    a = i(481060),
    s = i(26151),
    d = i(358221),
    o = i(985588),
    l = i(354459),
    u = i(388032);
function c(n, e) {
    let [i, c] = (0, t.Wu)([d.Z], () => [d.Z.getParticipants(e), d.Z.getParticipant(e, n.id)], [e, n.id]);
    return (0, o.s)(n) && 0 !== i.length
        ? null == c
            ? (0, r.jsx)(a.MenuItem, {
                  id: 'ring',
                  label: u.intl.string(u.t.bHa9kJ),
                  action: () => s.Z.ring(e, [n.id])
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, r.jsx)(a.MenuItem, {
                    id: 'stop-ringing',
                    label: u.intl.string(u.t.ygslb2),
                    action: () => s.Z.stopRinging(e, [n.id])
                })
              : null
        : null;
}
