n.d(t, {
    y: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(349435),
    a = n(178186),
    o = n(617641),
    s = n(937624),
    d = n(985018);

function c(e) {
    let t = (0, s.P)(e),
        n = (0, o.Lc)({
            location: "inappropriate_conversation_context_menu",
        });
    if (null === t || !n) return null;
    let { isTier1: c, isTier2: u } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c &&
                (0, r.jsx)(i.Drp, {
                    id: "mark-as-tier-1-inappro",
                    label: d.intl.string(d.t.EuzCET),
                    action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
                }),
            !u &&
                (0, r.jsx)(i.Drp, {
                    id: "mark-as-tier-2-inappro",
                    label: d.intl.string(d.t["tBw/1i"]),
                    action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2),
                }),
        ],
    });
}
