n.d(t, {
    a: () => s,
    y: () => l
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(499533),
    o = n(492435);
function s(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : a.Z.getExperimentBucketName(e),
        value: e
    }));
}
function l(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: a } = e;
    return (0, r.jsx)(i.q4e, {
        value: null != a ? a.bucket : null,
        clearable: null != a,
        options: s(t.buckets, t.description),
        onChange: (e) => {
            (0, o.rX)(n, e);
        }
    });
}
