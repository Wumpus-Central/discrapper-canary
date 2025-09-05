n.d(t, { Z: () => c }), n(388685);
var r = n(296009),
    i = n(442837),
    l = n(835473),
    a = n(314897),
    o = n(621853),
    s = n(224724);
function c(e) {
    let t = (0, i.e7)([a.default], () => {
            let t = a.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.e7)([s.Z], () => s.Z.getPendingWidgets()),
        c = (0, i.Wu)([o.Z], () => {
            var t;
            if (null == e) return [];
            let n = o.Z.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        }, [e]);
    return ((0, l.Z)(
        (function (e) {
            let t = new Set();
            return (
                e.forEach((e) => {
                    e.type === r.l.APPLICATION && t.add(e.applicationId);
                }),
                [...t]
            );
        })([...c, ...(null != n ? n : [])]),
    ),
    t && null !== n)
        ? n
        : c;
}
