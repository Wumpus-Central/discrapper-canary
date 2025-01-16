n.d(t, {
    Z: function () {
        return d;
    },
    j: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(113434),
    a = n(786089),
    s = n(383747),
    o = n(710914),
    c = n(308470);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: o } = (0, l.eN)();
    return o && 0 === n.length
        ? (0, i.jsx)(r.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(l.e5.ALL) })
          : (0, i.jsx)('div', {
                className: c.gridContainer,
                children: n.map((e) => (0, i.jsx)(a.Z, { quest: e }, e.id))
            });
}
function u(e) {
    let { onSelectTab: t } = e,
        { quests: n, isFetchingCurrentQuests: a } = (0, l.bA)(l.e5.CLAIMED);
    return a && 0 === n.length
        ? (0, i.jsx)(r.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(l.e5.ALL) })
          : (0, i.jsx)(o.Z, {
                quests: n,
                isFetching: a
            });
}
