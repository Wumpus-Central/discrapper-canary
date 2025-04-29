n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(178625);
let a = (e) => {
    let { title: t, subtitle: n, icon: a } = e;
    return (0, r.jsxs)('div', {
        className: o.wrapper,
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: 'xs',
                    color: 'currentColor',
                    className: o.icon
                }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                className: o.title,
                children: t
            }),
            null != n && '' !== n
                ? (0, r.jsx)(i.Text, {
                      variant: 'text-xs/semibold',
                      className: o.subtitle,
                      children: n
                  })
                : null
        ]
    });
};
