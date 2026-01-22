r.d(t, { A: () => c }), r(896048);
var n = r(64700),
    l = r(677402),
    s = r(639214),
    i = r(830012),
    a = r(654487);
function c(e, t, r) {
    let c = (0, l.H)({ location: a.rE.STREAM_SOURCE_SELECT });
    return n.useMemo(() => {
        if (null == r || !c) return null;
        for (let a of r) {
            var n, l;
            let r = t.find((e) => (0, i.A)(a.id, e.windowHandle));
            if ((null == r ? void 0 : r.id) == null) continue;
            let c = (0, s.L7)(e, r.id);
            if (
                null != c &&
                (null == (n = c.userStatus) ? void 0 : n.enrolledAt) != null &&
                (null == (l = c.userStatus) ? void 0 : l.completedAt) == null
            )
                return {
                    source: a,
                    quest: c,
                };
        }
        return null;
    }, [c, e, t, r]);
}
