r.d(t, { Z: () => o });
var n = r(442837),
    i = r(314897),
    a = r(621853),
    l = r(224724);
function o(e) {
    let t = (0, n.e7)([i.default], () => {
            let t = i.default.getId();
            return null != e && t === e;
        }, [e]),
        r = (0, n.e7)([l.Z], () => l.Z.getPendingWidgets()),
        o = (0, n.Wu)([a.Z], () => {
            var t;
            if (null == e) return [];
            let r = a.Z.getUserProfile(e);
            return null != (t = null == r ? void 0 : r.widgets) ? t : [];
        }, [e]);
    return t && null !== r ? r : o;
}
