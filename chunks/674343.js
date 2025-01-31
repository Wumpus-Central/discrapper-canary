n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(313201),
    o = n(36703),
    c = n(860069);
let d = (0, a.hQ)();
function u(e) {
    let { volume: t, title: n, description: s, label: a, onVolumeChange: u, refreshStyles: m = !1 } = e;
    return (0, i.jsxs)('div', {
        className: r()(c.soundboardRow, { [c.refresh]: m }),
        children: [
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(l.xJW, {
                    title: n,
                    children: (0, i.jsx)(l.R94, { children: s })
                })
            }),
            (0, i.jsx)('div', {
                className: c.soundboardColumn,
                children: (0, i.jsx)(l.xJW, {
                    title: a,
                    titleId: d,
                    children: (0, i.jsx)(l.iRW, {
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
