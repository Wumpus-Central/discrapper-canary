n.d(t, {
    a: () => a,
    y: () => s
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(492435);
function a(e) {
    return e.map((e) => ({
        label: e.label,
        value: e.id
    }));
}
function s(e) {
    let { experiment: t, experimentId: n, overrideInfo: s } = e;
    return (0, r.jsx)(i.q4e, {
        value: null != s ? s.variantId : null,
        clearable: null != s,
        options: a(t.variants),
        onChange: (e) => (0, o.rX)(t.system, n, e)
    });
}
