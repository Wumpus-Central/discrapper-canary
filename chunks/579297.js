n.d(t, { A: () => a });
var i = n(64700),
    l = n(765671);
function a() {
    let { ref: e, width: t } = (0, l.Ay)(),
        [n, a] = i.useState();
    return (
        i.useEffect(() => {
            null == n && null != t && a(t);
        }, [n, t]),
        [e, n]
    );
}
