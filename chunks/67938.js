r.d(t, { O: () => s });
var n = r(200651);
r(192379);
var l = r(442837),
    i = r(481060),
    a = r(607070),
    o = r(726256);
function s(e) {
    let { category: t } = e,
        r = (0, l.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, n.jsx)('div', {
        className: o.banner,
        'aria-label': t.name,
        children: (0, n.jsxs)('div', {
            className: o.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !r &&
                    (0, n.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: o.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, n.jsx)(i.Text, {
                    className: o.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
