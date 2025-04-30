e.d(t, { i: () => o });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(359119),
    d = e(832239),
    s = e(237292),
    a = e(100932),
    u = e(388032);
function o(n) {
    let t = (0, a.x)(n),
        e = (0, s.y0)({ location: 'inappropriate_conversation_context_menu' });
    if (null === t || !e) return null;
    let { isTier1: o, isTier2: c } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !o &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-1-inappro',
                    label: u.intl.string(u.t.EuzCER),
                    action: () => (0, d.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !c &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-2-inappro',
                    label: u.intl.string(u.t['tBw/1t']),
                    action: () => (0, d.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
