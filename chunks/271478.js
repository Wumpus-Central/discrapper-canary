t.d(n, { g: () => s });
var l = t(477900);
t(582128);
var a = t(691885),
    i = t(100392),
    r = t(102609);
function s(e) {
    let { label: n, description: t, experiment: s, experimentId: o, overrideInfo: c } = e;
    return (0, l.jsx)(a.l, {
        label: n,
        description: t,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, i.hp)(s),
        onSelectionChange: (e) => (0, r.t$)(s.system, o, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
