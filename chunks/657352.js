n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(388032),
    o = n(695256);
let a = (e) => {
    let { guild: t, onClose: a } = e;
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
                        children: l.NW.format(l.t.THgVCA, { guild: t.name })
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: l.NW.string(l.t['1yq3nJ'])
                    }),
                    (0, r.jsx)('div', {
                        className: o.buttonContainer,
                        children: (0, r.jsx)(i.zxk, {
                            onClick: a,
                            children: l.NW.string(l.t.hLw0wc)
                        })
                    })
                ]
            })
        ]
    });
};
