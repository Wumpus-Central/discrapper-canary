"use strict";
r.d(t, { M: () => i });
var n = r(709157),
    o = r(637096);
function i(e) {
    let { id: t, label: r, "aria-labelledby": i, "aria-label": a, labelElementType: s = "label" } = e;
    t = (0, n.Bi)(t);
    let l = (0, n.Bi)(),
        u = {};
    return (
        r && ((i = i ? `${l} ${i}` : l), (u = { id: l, htmlFor: "label" === s ? t : void 0 })),
        { labelProps: u, fieldProps: (0, o.b)({ id: t, "aria-label": a, "aria-labelledby": i }) }
    );
}
