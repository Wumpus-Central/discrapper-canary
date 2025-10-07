n.d(t, {
    a: () => s,
    y: () => l,
}),
    n(953529);
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
    let { label: t, description: n, experiment: o, experimentId: l, overrideInfo: c } = e;
    return (0, r.jsx)(i.q4e, {
        label: t,
        description: n,
        value: null != c ? c.variantId : null,
        clearable: null != c,
        options: s(o),
        onChange: (e) => (0, a.rX)(o.system, l, e),
    });
}
