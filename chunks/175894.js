r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(570140);
function o(e) {
    let { userActivity: n } = e,
        r = null == n ? void 0 : n.applicationId;
    i.useEffect(() => {
        null != n &&
            null != r &&
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_OPEN',
                location: n.location,
                applicationId: r
            });
    }, [r, n]);
}
