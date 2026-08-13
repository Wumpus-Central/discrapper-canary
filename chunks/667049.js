n.d(t, { A: () => l });
var r = n(17928),
    a = n(280450),
    i = n(321191),
    d = n(61881);
function l(e) {
    let t = (0, r.bG)([a.default], () => {
            let t = a.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, r.bG)([d.A], () => d.A.getPendingWidgets()),
        l = (0, r.yK)([i.A], () => {
            if (null == e) return [];
            let t = i.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : l;
}
