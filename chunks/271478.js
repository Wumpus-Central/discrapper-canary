n.d(t, { g: () => a });
var l = n(477900);
n(582128);
var i = n(691885),
    s = n(100392),
    r = n(102609);
function a(e) {
    let { label: t, description: n, experiment: a, experimentId: o, overrideInfo: u } = e;
    return (0, l.jsx)(i.l, {
        label: t,
        description: n,
        value: null != u ? u.variantId : void 0,
        clearable: null != u,
        options: (0, s.hp)(a),
        onSelectionChange: (e) => (0, r.t$)(a.system, o, e),
        selectionMode: "single",
        fullWidth: !0,
    });
}
