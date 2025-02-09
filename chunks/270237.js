n.d(t, { Z: () => a });
var i = n(192379),
    r = n(661111);
function a(e) {
    i.useEffect(() => {
        if (null != e)
            return (
                r.Z.lockChangeLog(e),
                () => {
                    r.Z.unlockChangeLog(e);
                }
            );
    }, [e]);
}
