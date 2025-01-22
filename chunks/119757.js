r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(33601);
let s = (e) => {
    let { title: n, subtitle: r, icon: s } = e;
    return (0, i.jsxs)('div', {
        className: o.wrapper,
        children: [
            null != s &&
                (0, i.jsx)(s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: o.icon
                }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: o.title,
                children: n
            }),
            null != r && '' !== r
                ? (0, i.jsx)(a.Text, {
                      variant: 'text-xs/semibold',
                      className: o.subtitle,
                      children: r
                  })
                : null
        ]
    });
};
