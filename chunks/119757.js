r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(33601);
let o = (e) => {
    let { title: n, subtitle: r, icon: o } = e;
    return (0, i.jsxs)('div', {
        className: s.wrapper,
        children: [
            null != o &&
                (0, i.jsx)(o, {
                    size: 'xs',
                    color: 'currentColor',
                    className: s.icon
                }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: s.title,
                children: n
            }),
            null != r && '' !== r
                ? (0, i.jsx)(a.Text, {
                      variant: 'text-xs/semibold',
                      className: s.subtitle,
                      children: r
                  })
                : null
        ]
    });
};
