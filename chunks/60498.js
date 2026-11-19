var l = e(855986),
    r = e(782068);
function i(t) {
    return (0, l.bG)([r.A], () => (null == t ? null : r.A.getCopy(t)), [t]);
}
e.d(
    n,
    {},
    {
        AJ: function (t) {
            return null != i(t);
        },
        Ay: i,
        GB: function (t) {
            return (0, l.bG)([r.A], () => r.A.getDownstreamUpdates(t), [t]);
        },
        cg: function (t) {
            return (0, l.bG)([r.A], () => r.A.getLastSync(t), [t]);
        },
    },
);
