t.d(n, {
    A: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(780384),
    a = t(481060),
    o = t(410030),
    r = t(176412),
    s = t(48097),
    c = t(983008),
    d = t(478408);
function u(e) {
    let { searchQuery: n, textContent: t, type: u } = e,
        m = (0, o.ZP)(),
        p = (0, l.ap)(m) ? d : c;
    return (
        (0, r.Bm)(u, n),
        (0, i.jsxs)('div', {
            className: s.emptyStateContainer,
            children: [
                (0, i.jsx)('img', {
                    className: s.emptyStateImage,
                    src: p,
                    alt: 'empty state'
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: t
                })
            ]
        })
    );
}
