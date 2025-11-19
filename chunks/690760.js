n.d(t, { s: () => l }), n(388685);
var r = n(473749),
    i = n(835473),
    a = n(350327);
function l(e) {
    var t;
    let n = null == (t = (0, a.uV)().data) ? void 0 : t.map((e) => e.application_id),
        l = r.useMemo(() => {
            let t = new Set();
            for (let n of e) t.add(n.applicationId);
            if (null != n) for (let e of n) t.add(e);
            return [...t];
        }, [n, e]);
    return (0, i.Z)(l);
}
