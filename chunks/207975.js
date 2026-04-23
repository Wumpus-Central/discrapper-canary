s.d(t, { A: () => a });
var i = s(64700),
    r = s(971276),
    n = s(639214),
    l = s(830012);
function a(e, t, s) {
    let a = (0, r.s)();
    return i.useMemo(() => {
        if (null == s || !a) return null;
        for (let i of s) {
            let s = t.find((e) => (0, l.A)(i.id, e.windowHandle));
            if (s?.id == null) continue;
            let r = (0, n.L7)(e, s.id);
            if (null != r && r.userStatus?.enrolledAt != null && r.userStatus?.completedAt == null)
                return { source: i, quest: r };
        }
        return null;
    }, [a, e, t, s]);
}
