n.d(t, { Z: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(313201),
    o = n(36703),
    c = n(193452);
let d = (0, l.hQ)();
function u(e) {
    let { volume: t, title: n, description: i, label: l, onVolumeChange: u, refreshStyles: m = !1 } = e;
    return (0, r.jsxs)('div', {
        className: s()(c.soundboardRow, { [c.refresh]: m }),
        children: [
            (0, r.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, r.jsx)(a.xJW, {
                    title: n,
                    children: (0, r.jsx)(a.R94, { children: i })
                })
            }),
            (0, r.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, r.jsx)(a.xJW, {
                    title: l,
                    titleId: d,
                    children: (0, r.jsx)(a.iRW, {
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
