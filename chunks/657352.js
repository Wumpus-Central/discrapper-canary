n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(388032),
    r = n(934964);
let s = (e) => {
    let { guild: t, onClose: s } = e;
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: r.image,
                src: n(238980)
            }),
            (0, i.jsxs)('div', {
                className: r.content,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: a.intl.format(a.t.THgVCA, { guild: t.name })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: a.intl.string(a.t['1yq3nJ'])
                    }),
                    (0, i.jsx)('div', {
                        className: r.buttonContainer,
                        children: (0, i.jsx)(l.zxk, {
                            onClick: s,
                            children: a.intl.string(a.t.hLw0wc)
                        })
                    })
                ]
            })
        ]
    });
};
