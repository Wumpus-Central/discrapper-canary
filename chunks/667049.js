n.d(t, { A: () => l });
var i = n(17928),
    a = n(495544),
    r = n(841595),
    s = n(61881);
function l(e) {
    let t = (0, i.bG)([a.default], () => {
            let t = a.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.bG)([s.A], () => s.A.getPendingWidgets()),
        l = (0, i.yK)([r.A], () => {
            if (null == e) return [];
            let t = r.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : l;
}
