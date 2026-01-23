n.d(t, {
    F: () => a,
});
var r = n(64700),
    i = n(810498);

function a(e) {
    return r.useMemo(() => {
        var t;
        if (null == e) return;
        let n = e.colors;
        if (null != n && !(n.length < 2))
            return (0, i.K5)({
                gradient: n,
                angle: null != (t = e.angle) ? t : void 0,
            });
    }, [e]);
}
