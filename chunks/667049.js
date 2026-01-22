n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(961350),
    l = n(622543),
    a = n(61881);

function s(e) {
    let t = (0, r.bG)([i.default], () => {
            let t = i.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.bG)([a.A], () => a.A.getPendingWidgets()),
        s = (0, r.yK)([l.A], () => {
            var t;
            if (null == e) return [];
            let n = l.A.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        }, [e]);
    return t && null !== n ? n : s;
}
