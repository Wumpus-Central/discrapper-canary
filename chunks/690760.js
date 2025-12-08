n.d(t, { s: () => a }), n(388685);
var r = n(473749),
    i = n(835473),
    l = n(350327);
function a(e) {
    var t;
    let n = null == (t = (0, l.uV)().data) ? void 0 : t.map((e) => e.application_id),
        a = r.useMemo(() => {
            let t = new Set();
            for (let n of e) t.add(n.applicationId);
            if (null != n) for (let e of n) t.add(e);
            return [...t];
        }, [n, e]);
    return (0, i.Z)(a);
}
