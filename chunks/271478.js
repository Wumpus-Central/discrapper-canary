"use strict";
n.d(t, { g: () => l });
var i = n(477900);
n(582128);
var r = n(691885),
    a = n(100392),
    s = n(102609);
function l(e) {
    let { label: t, description: n, experiment: l, experimentId: o, overrideInfo: d } = e;
    return (0, i.jsx)(r.l, {
        label: t,
        description: n,
        value: null != d ? d.variantId : void 0,
        clearable: null != d,
        options: (0, a.hp)(l),
        onSelectionChange: (e) => (0, s.t$)(l.system, o, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
