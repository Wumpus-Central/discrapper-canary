n.d(t, {
    Z: () => u,
    j: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(113434),
    a = n(786089),
    o = n(383747),
    s = n(710914),
    c = n(767780);
function u(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: s } = (0, l.eN)();
    return s && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(o.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)('div', {
                className: c.gridContainer,
                children: n.map((e) => (0, r.jsx)(a.Z, { quest: e }, e.id))
            });
}
function d(e) {
    let { onSelectTab: t } = e,
        { quests: n, isFetchingCurrentQuests: a } = (0, l.bA)(l.e5.CLAIMED);
    return a && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(o.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)(s.Z, {
                quests: n,
                isFetching: a
            });
}
