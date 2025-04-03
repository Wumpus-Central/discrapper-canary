n.d(t, { Z: () => s });
var r = n(192379),
    i = n(661111);
function s(e) {
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
