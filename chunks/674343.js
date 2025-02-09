n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(313201),
    o = n(36703),
    c = n(317334);
let d = (0, a.hQ)();
function u(e) {
    let { volume: t, title: n, description: s, label: a, onVolumeChange: u, refreshStyles: h = !1 } = e;
    return (0, i.jsxs)('div', {
        className: l()(c.soundboardRow, { [c.refresh]: h }),
        children: [
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(r.xJW, {
                    title: n,
                    children: (0, i.jsx)(r.R94, { children: s })
                })
            }),
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(r.xJW, {
                    title: a,
                    titleId: d,
                    children: (0, i.jsx)(r.iRW, {
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
