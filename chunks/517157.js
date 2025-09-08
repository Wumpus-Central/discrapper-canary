n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(835473),
    l = n(314897),
    a = n(931847),
    o = n(621853),
    s = n(224724);
function c(e) {
    let t = (0, r.e7)([l.default], () => {
            let t = l.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.e7)([s.Z], () => s.Z.getPendingWidgets()),
        c = (0, r.Wu)([o.Z], () => {
            var t;
            if (null == e) return [];
            let n = o.Z.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        }, [e]);
    return ((0, i.Z)(
        (function (e) {
            let t = new Set();
            return (
                e.forEach((e) => {
                    e instanceof a.q && t.add(e.applicationId);
                }),
                [...t]
            );
        })([...c, ...(null != n ? n : [])]),
    ),
    t && null !== n)
        ? n
        : c;
}
