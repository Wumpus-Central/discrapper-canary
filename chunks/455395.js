n.d(t, { i: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(359119),
    a = n(832239),
    o = n(237292),
    s = n(100932),
    c = n(388032);
function u(e) {
    let t = (0, s.x)(e),
        n = (0, o.y0)({ location: 'inappropriate_conversation_context_menu' });
    if (null === t || !n) return null;
    let { isTier1: u, isTier2: d } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !u &&
                (0, r.jsx)(i.sNh, {
                    id: 'mark-as-tier-1-inappro',
                    label: c.NW.string(c.t.EuzCER),
                    action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !d &&
                (0, r.jsx)(i.sNh, {
                    id: 'mark-as-tier-2-inappro',
                    label: c.NW.string(c.t['tBw/1t']),
                    action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
