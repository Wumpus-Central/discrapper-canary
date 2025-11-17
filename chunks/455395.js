t.d(n, { i: () => c });
var i = t(54381);
t(473749);
var r = t(481060),
    l = t(359119),
    a = t(832239),
    s = t(237292),
    o = t(100932),
    d = t(388032);
function c(e) {
    let n = (0, o.x)(e),
        t = (0, s.y0)({ location: "inappropriate_conversation_context_menu" });
    if (null === n || !t) return null;
    let { isTier1: c, isTier2: u } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !c &&
                (0, i.jsx)(r.sNh, {
                    id: "mark-as-tier-1-inappro",
                    label: d.intl.string(d.t.EuzCET),
                    action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
                }),
            !u &&
                (0, i.jsx)(r.sNh, {
                    id: "mark-as-tier-2-inappro",
                    label: d.intl.string(d.t["tBw/1i"]),
                    action: () => (0, a.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2),
                }),
        ],
    });
}
