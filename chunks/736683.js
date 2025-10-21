n.d(t, {
    Z: () => u,
    j: () => d,
}),
    n(388685),
    n(642613);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(113434),
    a = n(786089),
    o = n(383747),
    s = n(710914),
    c = n(16167);
function u(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: s } = (0, l.eN)();
    return s && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(o.Z, { onClick: () => t(l.e5.ALL) })
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
        { quests: n, isFetchingCurrentQuests: a, hasFetched: u } = (0, l.bA)(l.e5.CLAIMED);
    return a && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: c.spinner })
        : 0 === n.length
          ? (0, r.jsx)(o.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)(s.Z, {
                quests: n,
                isFetching: a,
                hasFetched: u,
            });
}
