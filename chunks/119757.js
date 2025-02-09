n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(588283);
let s = (e) => {
    let { title: t, subtitle: n, icon: s } = e;
    return (0, i.jsxs)('div', {
        className: a.wrapper,
        children: [
            null != s &&
                (0, i.jsx)(s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: a.icon
                }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: a.title,
                children: t
            }),
            null != n && '' !== n
                ? (0, i.jsx)(r.Text, {
                      variant: 'text-xs/semibold',
                      className: a.subtitle,
                      children: n
                  })
                : null
        ]
    });
};
