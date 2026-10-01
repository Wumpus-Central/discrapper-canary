t.d(n, { g: () => o });
var l = t(477900);
t(582128);
var r = t(691885),
    a = t(100392),
    i = t(102609);
function o(e) {
    let { label: n, description: t, experiment: o, experimentId: s, overrideInfo: c } = e;
    return (0, l.jsx)(r.l, {
        label: n,
        description: t,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, a.hp)(o),
        onSelectionChange: (e) => (0, i.t$)(o.system, s, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
