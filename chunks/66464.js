"use strict";
r.d(t, { M: () => o });
var n = r(295551),
    i = r(268678);
function o(e) {
    let { id: t, label: r, "aria-labelledby": o, "aria-label": a, labelElementType: s = "label" } = e;
    t = (0, n.Bi)(t);
    let l = (0, n.Bi)(),
        u = {};
    return (
        r && ((o = o ? `${l} ${o}` : l), (u = { id: l, htmlFor: "label" === s ? t : void 0 })),
        { labelProps: u, fieldProps: (0, i.b)({ id: t, "aria-label": a, "aria-labelledby": o }) }
    );
}
