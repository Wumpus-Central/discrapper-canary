n.d(t, {
    a: () => s,
    y: () => l,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(492435),
    o = n(438159);
function s(e) {
    return (0, o.v)(e).map((e) => ({
        label: e.label,
        value: e.id,
    }));
}
function l(e) {
    let { experiment: t, experimentId: n, overrideInfo: o } = e;
    return (0, r.jsx)(i.q4e, {
        value: null != o ? o.variantId : null,
        clearable: null != o,
        options: s(t),
        onChange: (e) => (0, a.rX)(t.system, n, e),
    });
}
