n.d(t, { Z: () => d }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(313201),
    l = n(36703),
    c = n(684554);
let u = (0, s.hQ)();
function d(e) {
    let { volume: t, title: n, description: i, label: s, onVolumeChange: d, refreshStyles: f = !1 } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.soundboardRow, { [c.refresh]: f }),
        children: [
            (0, r.jsx)("div", {
                className: c.soundboardColumn,
                children: (0, r.jsx)(o.xJW, {
                    title: n,
                    children: (0, r.jsx)(o.R94, { children: i }),
                }),
            }),
            (0, r.jsx)("div", {
                className: c.soundboardColumn,
                children: (0, r.jsx)(o.xJW, {
                    title: s,
                    titleId: u,
                    children: (0, r.jsx)(o.iRW, {
                        initialValue: (0, l.P)(t),
                        maxValue: 100,
                        onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                        onValueChange: d,
                        "aria-labelledby": u,
                    }),
                }),
            }),
        ],
    });
}
