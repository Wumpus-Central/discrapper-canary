n.d(t, { y: () => o });
var r = n(627968);
n(64700);
var i = n(477782),
    l = n(349435),
    a = n(178186),
    d = n(617641),
    s = n(937624),
    u = n(985018);
function o(e) {
    let t = (0, s.P)(e),
        n = (0, d.Lc)({ location: "inappropriate_conversation_context_menu" });
    if (null === t || !n) return null;
    let { isTier1: o, isTier2: c } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o &&
                (0, r.jsx)(i.Dr, {
                    id: "mark-as-tier-1-inappro",
                    label: u.intl.string(u.t.EuzCET),
                    action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
                }),
            !c &&
                (0, r.jsx)(i.Dr, {
                    id: "mark-as-tier-2-inappro",
                    label: u.intl.string(u.t["tBw/1i"]),
                    action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2),
                }),
        ],
    });
}
