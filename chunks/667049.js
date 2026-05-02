n.d(t, { A: () => r });
var i = n(17928),
    l = n(495544),
    s = n(841595),
    a = n(61881);
function r(e) {
    let t = (0, i.bG)([l.default], () => {
            let t = l.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.bG)([a.A], () => a.A.getPendingWidgets()),
        r = (0, i.yK)([s.A], () => {
            if (null == e) return [];
            let t = s.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : r;
}
