n.d(t, { y: () => s }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(922699),
    o = n(492435);
function s(e) {
    let { label: t, description: n, experiment: s, experimentId: l, overrideInfo: c } = e;
    return (0, r.jsx)(i.q4e, {
        label: t,
        description: n,
        value: null != c ? c.variantId : null,
        clearable: null != c,
        options: (0, a.ak)(s),
        onChange: (e) => (0, o.rX)(s.system, l, e),
    });
}
