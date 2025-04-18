n.d(t, { A: () => p });
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    o = n(410030),
    a = n(540059),
    s = n(176412),
    c = n(759718),
    u = n(983008),
    d = n(478408);
function p(e) {
    let { searchQuery: t, textContent: n, type: p } = e,
        m = (0, a.Q3)('AppLauncherEmptyState'),
        f = (0, o.ZP)(),
        h = (0, r.ap)(f) ? d : u;
    return (
        (0, s.Bm)(p, t),
        (0, i.jsxs)('div', {
            className: c.emptyStateContainer,
            children: [
                m
                    ? null
                    : (0, i.jsx)('img', {
                          className: c.emptyStateImage,
                          src: h,
                          alt: 'empty state'
                      }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: n
                })
            ]
        })
    );
}
