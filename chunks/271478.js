"use strict";
n.d(t, { g: () => o });
var i = n(627968);
n(64700);
var r = n(691885),
    s = n(100392),
    a = n(102609);
function o(e) {
    let { label: t, description: n, experiment: o, experimentId: l, overrideInfo: u } = e;
    return (0, i.jsx)(r.l, {
        label: t,
        description: n,
        value: null != u ? u.variantId : void 0,
        clearable: null != u,
        options: (0, s.hp)(o),
        onSelectionChange: (e) => (0, a.t$)(o.system, l, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
