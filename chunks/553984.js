n.d(t, {
    Z: () => d,
    x: () => u
}),
    n(388685);
var r,
    i = n(255367),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(388032),
    c = n(381231),
    u = (((r = {}).ANNOUNCEMENTS = 'announcements'), (r.MENTIONS = 'mentions'), r);
function d(e) {
    let { selectedFilters: t, setFilters: n } = e,
        r = (e) => {
            n((t) => (t.has(e) ? new Set() : new Set([e])));
        },
        l = {
            announcements: a.intl.string(a.t['2qyUOz']),
            mentions: a.intl.string(a.t['GRZF9/'])
        };
    return (0, i.jsx)('div', {
        className: c.filters,
        children: Object.keys(l).map((e) =>
            (0, i.jsx)(
                s.P3F,
                {
                    className: o()(c.filterBtn, { [c.active]: t.has(e) }),
                    onClick: () => r(e),
                    children: l[e]
                },
                e
            )
        )
    });
}
