var e = l(855986),
    r = l(782068);
function u(t) {
    return (0, e.bG)([r.A], () => (null == t ? null : r.A.getCopy(t)), [t]);
}
l.d(
    n,
    {},
    {
        AJ: function (t) {
            return null != u(t);
        },
        Ay: u,
        GB: function (t) {
            return (0, e.bG)([r.A], () => r.A.getDownstreamUpdates(t), [t]);
        },
        cg: function (t) {
            return (0, e.bG)([r.A], () => r.A.getLastSync(t), [t]);
        },
    },
);
