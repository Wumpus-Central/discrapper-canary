n.d(t, { Z: () => a });
var r = n(473749),
    i = n(661111);
function a(e) {
    r.useEffect(() => {
        if (null != e)
            return (
                i.Z.lockChangeLog(e),
                () => {
                    i.Z.unlockChangeLog(e);
                }
            );
    }, [e]);
}
