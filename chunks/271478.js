t.d(n, { g: () => o });
var l = t(477900);
t(582128);
var a = t(691885),
    i = t(100392),
    r = t(102609);
function o(e) {
    let { label: n, description: t, experiment: o, experimentId: s, overrideInfo: c } = e;
    return (0, l.jsx)(a.l, {
        label: n,
        description: t,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, i.hp)(o),
        onSelectionChange: (e) => (0, r.t$)(o.system, s, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
