"use strict";
n.d(t, { g: () => r });
var l = n(627968);
n(64700);
var i = n(691885),
    s = n(100392),
    a = n(102609);
function r(e) {
    let { label: t, description: n, experiment: r, experimentId: o, overrideInfo: c } = e;
    return (0, l.jsx)(i.l, {
        label: t,
        description: n,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, s.hp)(r),
        onSelectionChange: (e) => (0, a.t$)(r.system, o, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
