var i = n(200651);
n(192379);
var l = n(481060),
    r = n(388032),
    a = n(904424);
t.Z = (e) => {
    let { guild: t, onClose: s } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: a.image,
                src: n(238980)
            }),
            (0, i.jsxs)('div', {
                className: a.content,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: r.intl.format(r.t.THgVCA, { guild: t.name })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: r.intl.string(r.t['1yq3nJ'])
                    }),
                    (0, i.jsx)('div', {
                        className: a.buttonContainer,
                        children: (0, i.jsx)(l.Button, {
                            onClick: s,
                            children: r.intl.string(r.t.hLw0wc)
                        })
                    })
                ]
            })
        ]
    });
};
