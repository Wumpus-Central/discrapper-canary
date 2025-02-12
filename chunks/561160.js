n.d(t, { A: () => m });
var i = n(200651);
n(192379);
var l = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(540059),
    r = n(176412),
    c = n(124252),
    d = n(983008),
    u = n(478408);
function m(e) {
    let { searchQuery: t, textContent: n, type: m } = e,
        p = (0, s.Q3)('AppLauncherEmptyState'),
        h = (0, o.ZP)(),
        x = (0, l.ap)(h) ? u : d;
    return (
        (0, r.Bm)(m, t),
        (0, i.jsxs)('div', {
            className: c.emptyStateContainer,
            children: [
                p
                    ? null
                    : (0, i.jsx)('img', {
                          className: c.emptyStateImage,
                          src: x,
                          alt: 'empty state'
                      }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: n
                })
            ]
        })
    );
}
