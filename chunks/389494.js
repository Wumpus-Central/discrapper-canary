n.d(t, {
    a: () => s,
    y: () => l
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(499533),
    a = n(492435);
function s(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : o.Z.getExperimentBucketName(e),
        value: e
    }));
}
function l(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: o } = e;
    return (0, r.jsx)(i.q4e, {
        value: null != o ? o.bucket : null,
        clearable: null != o,
        options: s(t.buckets, t.description),
        onChange: (e) => {
            (0, a.rX)(n, e);
        }
    });
}
