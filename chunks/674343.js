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
    c = n(860069);
let d = (0, l.hQ)();
function u(e) {
    let { volume: t, title: n, description: r, label: l, onVolumeChange: u, refreshStyles: m = !1 } = e;
    return (0, i.jsxs)('div', {
        className: s()(c.soundboardRow, { [c.refresh]: m }),
        children: [
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(a.FormItem, {
                    title: n,
                    children: (0, i.jsx)(a.FormText, { children: r })
                })
            }),
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(a.FormItem, {
                    title: l,
                    titleId: d,
                    children: (0, i.jsx)(a.Slider, {
                        initialValue: (0, o.P)(t),
                        maxValue: 100,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        onValueChange: u,
                        'aria-labelledby': d
                    })
                })
            })
        ]
    });
}
