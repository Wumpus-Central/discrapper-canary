n.d(t, {
    Z: () => u,
    j: () => d,
}),
    n(388685),
    n(642613);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(968843),
    a = n(786089),
    s = n(383747),
    o = n(710914),
    c = n(799323);
function u(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: o } = (0, l.eN)();
    return o && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(s.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)("div", {
                className: c.gridContainer,
                children: [...n]
                    .sort((e, t) => {
                        var n, r, i, l;
                        return (null != (i = null == (n = t.userStatus) ? void 0 : n.claimedAt) ? i : "").localeCompare(
                            null != (l = null == (r = e.userStatus) ? void 0 : r.claimedAt) ? l : "",
                        );
                    })
                    .map((e) => (0, r.jsx)(a.Z, { quest: e }, e.id)),
            });
}
function d(e) {
    let { onSelectTab: t } = e,
        { quests: n, excludedQuests: a, isFetchingCurrentQuests: u, hasFetched: d } = (0, l.bA)(l.e5.CLAIMED);
    return u && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(s.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)(o.Z, {
                quests: n,
                excludedQuests: a,
                isFetching: u,
                hasFetched: d,
            });
}
