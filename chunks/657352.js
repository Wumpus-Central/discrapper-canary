n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(388032),
    o = n(695256);
let s = (e) => {
    let { guild: t, onClose: s } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: o.image,
                src: n(238980)
            }),
            (0, r.jsxs)('div', {
                className: o.content,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        children: a.intl.format(a.t.THgVCA, { guild: t.name })
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: a.intl.string(a.t['1yq3nJ'])
                    }),
                    (0, r.jsx)('div', {
                        className: o.buttonContainer,
                        children: (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: a.intl.string(a.t.hLw0wc),
                            onClick: s
                        })
                    })
                ]
            })
        ]
    });
};
