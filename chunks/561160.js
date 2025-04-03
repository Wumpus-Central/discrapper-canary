n.d(t, { A: () => p });
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    a = n(410030),
    o = n(540059),
    c = n(176412),
    s = n(146173),
    u = n(983008),
    d = n(478408);
function p(e) {
    let { searchQuery: t, textContent: n, type: p } = e,
        m = (0, o.Q3)('AppLauncherEmptyState'),
        f = (0, a.ZP)(),
        h = (0, r.ap)(f) ? d : u;
    return (
        (0, c.Bm)(p, t),
        (0, i.jsxs)('div', {
            className: s.emptyStateContainer,
            children: [
                m
                    ? null
                    : (0, i.jsx)('img', {
                          className: s.emptyStateImage,
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
