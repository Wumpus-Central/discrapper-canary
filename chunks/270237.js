n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(192379),
    s = n(661111);
function r(e) {
    i.useEffect(() => {
        if (null != e)
            return (
                s.Z.lockChangeLog(e),
                () => {
                    s.Z.unlockChangeLog(e);
                }
            );
    }, [e]);
}
