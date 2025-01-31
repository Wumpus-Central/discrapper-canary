n.d(t, { Z: () => a });
var i = n(192379),
    r = n(570140);
function a(e) {
    let { userActivity: t } = e,
        n = null == t ? void 0 : t.applicationId;
    i.useEffect(() => {
        null != t &&
            null != n &&
            r.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_OPEN',
                location: t.location,
                applicationId: n
            });
    }, [n, t]);
}
