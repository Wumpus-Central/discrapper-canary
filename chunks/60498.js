var n = l(855986),
    a = l(782068);
function r(e) {
    return (0, n.bG)([a.A], () => (null == e ? null : a.A.getCopy(e)), [e]);
}
l.d(
    t,
    {},
    {
        AJ: function (e) {
            return null != r(e);
        },
        Ay: r,
        GB: function (e) {
            return (0, n.bG)([a.A], () => a.A.getDownstreamUpdates(e), [e]);
        },
        cg: function (e) {
            return (0, n.bG)([a.A], () => a.A.getLastSync(e), [e]);
        },
    },
);
