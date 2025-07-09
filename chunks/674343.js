(n.d(t, { Z: () => u }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(313201),
    o = n(36703),
    c = n(193452);
let d = (0, l.hQ)();
function u(e) {
    let { volume: t, title: n, description: r, label: l, onVolumeChange: u, refreshStyles: m = !1 } = e;
    return (0, i.jsxs)('div', {
        className: s()(c.soundboardRow, { [c.refresh]: m }),
        children: [
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(a.xJW, {
                    title: n,
                    children: (0, i.jsx)(a.R94, { children: r })
                })
            }),
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(a.xJW, {
                    title: l,
                    titleId: d,
                    children: (0, i.jsx)(a.iRW, {
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
