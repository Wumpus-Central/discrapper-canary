n.d(t, { Z: () => r });
var i = n(192379),
    l = n(914010);
function r(e) {
    i.useEffect(() => {
        let t = null;
        function n() {
            let n = l.Z.getGuildId();
            n !== t && ((t = null != n ? n : null), e(null != n ? n : null, !1));
        }
        return (
            l.Z.addChangeListener(n),
            () => {
                l.Z.removeChangeListener(n);
            }
        );
    }, [e]);
}
