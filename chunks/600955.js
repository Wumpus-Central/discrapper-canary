"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(690450);
function o(e) {
    let { checked: t, onChange: n, disabled: s, className: o, tooltipProps: d } = e,
        c = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, i.jsx)(r.DUT, {
        onClick: c,
        onMouseDown: c,
        onMouseUp: c,
        className: l()(a.ZW, o),
        ...d,
        children: (0, i.jsx)(r.dOG, { checked: t, onChange: n, disabled: s }),
    });
}
