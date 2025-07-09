n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(388032),
    a = n(695256);
let o = (e) => {
    let { guild: t, onClose: o } = e;
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: a.image,
                src: n(238980)
            }),
            (0, r.jsxs)('div', {
                className: a.content,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        children: l.intl.format(l.t.THgVCA, { guild: t.name })
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: l.intl.string(l.t['1yq3nJ'])
                    }),
                    (0, r.jsx)('div', {
                        className: a.buttonContainer,
                        children: (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: l.intl.string(l.t.hLw0wc),
                            onClick: o
                        })
                    })
                ]
            })
        ]
    });
};
