n.d(t, { Z: () => s });
var i = n(192379),
    r = n(661111);
function s(e) {
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
