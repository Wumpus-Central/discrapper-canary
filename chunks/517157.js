n.d(t, { Z: () => a });
var r = n(442837),
    i = n(314897),
    l = n(621853),
    o = n(224724);
function a(e) {
    let t = (0, r.e7)([i.default], () => {
            let t = i.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.e7)([o.Z], () => o.Z.getPendingWidgets()),
        a = (0, r.Wu)([l.Z], () => {
            var t;
            if (null == e) return [];
            let n = l.Z.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        }, [e]);
    return t && null !== n ? n : a;
}
