n.d(t, { Z: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(313201),
    o = n(36703),
    s = n(684554);
let l = (0, a.hQ)();
function c(e) {
    let { volume: t, title: n, description: a, label: c, onVolumeChange: u } = e;
    return (0, r.jsxs)("div", {
        className: s.soundboardRow,
        children: [
            (0, r.jsx)("div", {
                className: s.soundboardColumn,
                children: (0, r.jsx)(i.xJW, {
                    title: n,
                    children: (0, r.jsx)(i.R94, { children: a }),
                }),
            }),
            (0, r.jsx)("div", {
                className: s.soundboardColumn,
                children: (0, r.jsx)(i.xJW, {
                    title: c,
                    titleId: l,
                    children: (0, r.jsx)(i.iRW, {
                        initialValue: (0, o.P)(t),
                        maxValue: 100,
                        onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                        onValueChange: u,
                        "aria-labelledby": l,
                    }),
                }),
            }),
        ],
    });
}
