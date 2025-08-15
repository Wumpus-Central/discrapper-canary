e.d(n, { i: () => o });
var i = e(951288);
e(647438);
var r = e(481060),
    l = e(359119),
    s = e(832239),
    a = e(237292),
    d = e(100932),
    u = e(388032);
function o(t) {
    let n = (0, d.x)(t),
        e = (0, a.y0)({ location: "inappropriate_conversation_context_menu" });
    if (null === n || !e) return null;
    let { isTier1: o, isTier2: c } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !o &&
                (0, i.jsx)(r.sNh, {
                    id: "mark-as-tier-1-inappro",
                    label: u.intl.string(u.t.EuzCER),
                    action: () => (0, s.KK)(t.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
                }),
            !c &&
                (0, i.jsx)(r.sNh, {
                    id: "mark-as-tier-2-inappro",
                    label: u.intl.string(u.t["tBw/1t"]),
                    action: () => (0, s.KK)(t.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2),
                }),
        ],
    });
}
