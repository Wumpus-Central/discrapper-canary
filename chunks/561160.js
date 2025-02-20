n.d(t, { A: () => m });
var i = n(200651);
n(192379);
var l = n(780384),
    r = n(481060),
    o = n(410030),
    a = n(540059),
    s = n(176412),
    c = n(211065),
    u = n(983008),
    d = n(478408);
function m(e) {
    let { searchQuery: t, textContent: n, type: m } = e,
        p = (0, a.Q3)('AppLauncherEmptyState'),
        h = (0, o.ZP)(),
        f = (0, l.ap)(h) ? d : u;
    return (
        (0, s.Bm)(m, t),
        (0, i.jsxs)('div', {
            className: c.emptyStateContainer,
            children: [
                p
                    ? null
                    : (0, i.jsx)('img', {
                          className: c.emptyStateImage,
                          src: f,
                          alt: 'empty state'
                      }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: n
                })
            ]
        })
    );
}
