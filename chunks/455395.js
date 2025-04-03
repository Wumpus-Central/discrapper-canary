t.d(e, { i: () => o });
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(359119),
    d = t(832239),
    s = t(237292),
    a = t(100932),
    u = t(388032);
function o(n) {
    let e = (0, a.x)(n),
        t = (0, s.y0)({ location: 'inappropriate_conversation_context_menu' });
    if (null === e || !t) return null;
    let { isTier1: o, isTier2: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !o &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-1-inappro',
                    label: u.NW.string(u.t.EuzCER),
                    action: () => (0, d.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !c &&
                (0, i.jsx)(l.sNh, {
                    id: 'mark-as-tier-2-inappro',
                    label: u.NW.string(u.t['tBw/1t']),
                    action: () => (0, d.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
