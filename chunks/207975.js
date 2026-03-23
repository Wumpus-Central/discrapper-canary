s.d(t, { A: () => a });
var r = s(64700),
    i = s(971276),
    n = s(639214),
    l = s(830012);
function a(e, t, s) {
    let a = (0, i.s)();
    return r.useMemo(() => {
        if (null == s || !a) return null;
        for (let r of s) {
            let s = t.find((e) => (0, l.A)(r.id, e.windowHandle));
            if (s?.id == null) continue;
            let i = (0, n.L7)(e, s.id);
            if (null != i && i.userStatus?.enrolledAt != null && i.userStatus?.completedAt == null)
                return { source: r, quest: i };
        }
        return null;
    }, [a, e, t, s]);
}
