"use strict";
n.d(t, { M: () => a });
var r = n(709157),
    i = n(637096);
function a(e) {
    let { id: t, label: n, "aria-labelledby": a, "aria-label": o, labelElementType: s = "label" } = e;
    t = (0, r.Bi)(t);
    let l = (0, r.Bi)(),
        u = {};
    return (
        n && ((a = a ? `${l} ${a}` : l), (u = { id: l, htmlFor: "label" === s ? t : void 0 })),
        { labelProps: u, fieldProps: (0, i.b)({ id: t, "aria-label": o, "aria-labelledby": a }) }
    );
}
