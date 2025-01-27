n.d(t, {
    O: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(607070),
    s = n(720333);
function o(e) {
    let { category: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, r.jsx)('div', {
        className: s.banner,
        'aria-label': t.name,
        children: (0, r.jsxs)('div', {
            className: s.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !n &&
                    (0, r.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: s.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, r.jsx)(l.Text, {
                    className: s.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
