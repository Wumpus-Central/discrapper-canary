n.d(t, { g: () => o }), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(100392),
    s = n(102609);
function o(e) {
    let { label: t, description: n, experiment: o, experimentId: l, overrideInfo: c } = e;
    return (0, r.jsx)(i.l6P, {
        label: t,
        description: n,
        value: null != c ? c.variantId : void 0,
        clearable: null != c,
        options: (0, a.hp)(o),
        onSelectionChange: (e) => (0, s.t$)(o.system, l, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
