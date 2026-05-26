i.d(t, { A: () => r });
var n = i(17928),
    s = i(495544),
    l = i(841595),
    a = i(61881);
function r(e) {
    let t = (0, n.bG)([s.default], () => {
            let t = s.default.getId();
            return null != e && t === e;
        }, [e]),
        i = (0, n.bG)([a.A], () => a.A.getPendingWidgets()),
        r = (0, n.yK)([l.A], () => {
            if (null == e) return [];
            let t = l.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== i ? i : r;
}
