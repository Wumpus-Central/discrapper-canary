n.d(t, { Z: () => c });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(982183),
    a = n(381231);
function c(e) {
    let { selectedFilter: t, setSelectedFilter: n } = e,
        i = s.by;
    return (0, r.jsx)('div', {
        className: a.filters,
        children: Object.keys(i).map((e) =>
            (0, r.jsx)(
                o.P3F,
                {
                    className: l()(a.filterBtn, { [a.active]: t === e }),
                    onClick: () => n(e),
                    children: i[e]
                },
                e
            )
        )
    });
}
