n.d(t, { s: () => a }), n(388685);
var r = n(647438),
    i = n(835473),
    l = n(350327);
function a(e) {
    let t = (0, l.oz)().data,
        n = r.useMemo(() => {
            let n = new Set();
            for (let t of e) n.add(t.applicationId);
            if (null != t) for (let e of t) n.add(e);
            return [...n];
        }, [t, e]);
    (0, i.Z)(n);
}
