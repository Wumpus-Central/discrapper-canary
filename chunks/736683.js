n.d(t, { Z: () => c }), n(388685), n(642613);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(968843),
    a = n(786089),
    o = n(383747),
    s = n(799323);
function c(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: c } = (0, l.eN)();
    return c && 0 === n.length
        ? (0, r.jsx)(i.$jN, { className: s.spinner })
        : 0 === n.length
          ? (0, r.jsx)(o.Z, { onClick: () => t(l.e5.ALL) })
          : (0, r.jsx)("div", {
                className: s.gridContainer,
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
