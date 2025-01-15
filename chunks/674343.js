n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(313201),
    o = n(36703),
    c = n(256082);
let d = (0, l.hQ)();
function u(e) {
    let { volume: t, title: n, description: r, label: l, onVolumeChange: u } = e;
    return (0, i.jsxs)('div', {
        className: s()(c.soundboardRow),
        children: [
            (0, i.jsxs)('div', {
                className: s()(c.soundboardColumn, c.leftColumn),
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        tag: a.FormTitleTags.H5,
                        className: c.soundboardTitle,
                        children: n
                    }),
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: r
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(c.soundboardColumn, c.__invalid_rightColumn),
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        id: d,
                        tag: a.FormTitleTags.H5,
                        className: c.soundboardSubtitle,
                        children: l
                    }),
                    (0, i.jsx)(a.Slider, {
                        initialValue: (0, o.P)(t),
                        maxValue: 100,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        onValueChange: u,
                        'aria-labelledby': d
                    })
                ]
            })
        ]
    });
}
