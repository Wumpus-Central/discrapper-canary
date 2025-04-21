n.d(t, { i: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(359119),
    s = n(832239),
    a = n(237292),
    d = n(100932),
    o = n(388032);
function u(e) {
    let t = (0, d.x)(e),
        n = (0, a.y0)({ location: 'inappropriate_conversation_context_menu' });
    if (null === t || !n) return null;
    let { isTier1: u, isTier2: c } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !u &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-1-inappro',
                    label: o.intl.string(o.t.EuzCER),
                    action: () => (0, s.KK)(e.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !c &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-2-inappro',
                    label: o.intl.string(o.t['tBw/1t']),
                    action: () => (0, s.KK)(e.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
