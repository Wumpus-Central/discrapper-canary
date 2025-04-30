n.d(t, { Z: () => l });
var r = n(192379),
    i = n(914010);
function l(e) {
    r.useEffect(() => {
        let t = null;
        function n() {
            let n = i.Z.getGuildId();
            n !== t && ((t = null != n ? n : null), e(null != n ? n : null, !1));
        }
        return (
            i.Z.addChangeListener(n),
            () => {
                i.Z.removeChangeListener(n);
            }
        );
    }, [e]);
}
