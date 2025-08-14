n.d(t, {
    a: () => s,
    y: () => l,
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(492435),
    a = n(438159);
function s(e) {
    return (0, a.v)(e).map((e) => ({
        label: e.label,
        value: e.id,
    }));
}
function l(e) {
    let { experiment: t, experimentId: n, overrideInfo: a } = e;
    return (0, r.jsx)(i.q4e, {
        value: null != a ? a.variantId : null,
        clearable: null != a,
        options: s(t),
        onChange: (e) => (0, o.rX)(t.system, n, e),
    });
}
