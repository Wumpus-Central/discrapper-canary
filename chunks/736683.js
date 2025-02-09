n.d(t, {
    Z: () => d,
    j: () => u
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(113434),
    a = n(786089),
    s = n(383747),
    o = n(710914),
    c = n(249579);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: o } = (0, r.eN)();
    return o && 0 === n.length
        ? (0, i.jsx)(l.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(r.e5.ALL) })
          : (0, i.jsx)('div', {
                className: c.gridContainer,
                children: n.map((e) => (0, i.jsx)(a.Z, { quest: e }, e.id))
            });
}
function u(e) {
    let { onSelectTab: t } = e,
        { quests: n, isFetchingCurrentQuests: a } = (0, r.bA)(r.e5.CLAIMED);
    return a && 0 === n.length
        ? (0, i.jsx)(l.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(r.e5.ALL) })
          : (0, i.jsx)(o.Z, {
                quests: n,
                isFetching: a
            });
}
