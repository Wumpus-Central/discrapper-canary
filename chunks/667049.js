r.d(t, { A: () => i });
var u = r(17928),
    n = r(280450),
    l = r(543572),
    d = r(61881);
function i(e) {
    let t = (0, u.bG)([n.default], () => {
            let t = n.default.getId();
            return null != e && t === e;
        }, [e]),
        r = (0, u.bG)([d.A], () => d.A.getPendingWidgets()),
        i = (0, u.yK)([l.A], () => {
            if (null == e) return [];
            let t = l.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== r ? r : i;
}
