n.d(t, { Z: () => o });
var r = n(192379),
    i = n(570140);
function o(e) {
    let { userActivity: t } = e,
        n = null == t ? void 0 : t.applicationId;
    r.useEffect(() => {
        null != t &&
            null != n &&
            i.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_OPEN',
                location: t.location,
                applicationId: n
            });
    }, [n, t]);
}
