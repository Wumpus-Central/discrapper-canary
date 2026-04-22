"use strict";
n.d(t, { g: () => a });
var i = n(627968);
n(64700);
var l = n(691885),
    s = n(100392),
    r = n(102609);
function a(e) {
    let { label: t, description: n, experiment: a, experimentId: o, overrideInfo: c } = e;
    return (0, i.jsx)(l.l, {
        label: t,
        description: n,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, s.hp)(a),
        onSelectionChange: (e) => (0, r.t$)(a.system, o, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
