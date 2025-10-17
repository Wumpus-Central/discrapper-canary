n.d(t, { Z: () => o });
var r = n(442837),
    i = n(314897),
    a = n(621853),
    l = n(224724);
function o(e) {
    let t = (0, r.e7)([i.default], () => {
            let t = i.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.e7)([l.Z], () => l.Z.getPendingWidgets()),
        o = (0, r.Wu)([a.Z], () => {
            var t;
            if (null == e) return [];
            let n = a.Z.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        }, [e]);
    return t && null !== n ? n : o;
}
