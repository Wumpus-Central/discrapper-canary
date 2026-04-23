n.d(t, { A: () => s });
var i = n(17928),
    r = n(495544),
    a = n(841595),
    l = n(61881);
function s(e) {
    let t = (0, i.bG)([r.default], () => {
            let t = r.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.bG)([l.A], () => l.A.getPendingWidgets()),
        s = (0, i.yK)([a.A], () => {
            if (null == e) return [];
            let t = a.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : s;
}
