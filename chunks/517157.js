n.d(t, { Z: () => a });
var r = n(442837),
    l = n(314897),
    i = n(621853),
    o = n(224724);
function a(e) {
    let t = (0, r.e7)([l.default], () => {
            let t = l.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.e7)([o.Z], () => o.Z.getPendingWidgets()),
        a = (0, r.e7)([i.Z], () => {
            var t;
            if (null == e) return [];
            let n = i.Z.getUserProfile(e);
            return null != (t = null == n ? void 0 : n.widgets) ? t : [];
        });
    return t && null !== n ? n : a;
}
