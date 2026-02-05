s.d(t, { A: () => o });
var r = s(64700),
    i = s(677402),
    n = s(639214),
    l = s(830012),
    a = s(654487);
function o(e, t, s) {
    let o = (0, i.H)({ location: a.rE.STREAM_SOURCE_SELECT });
    return r.useMemo(() => {
        if (null == s || !o) return null;
        for (let r of s) {
            let s = t.find((e) => (0, l.A)(r.id, e.windowHandle));
            if (s?.id == null) continue;
            let i = (0, n.L7)(e, s.id);
            if (null != i && i.userStatus?.enrolledAt != null && i.userStatus?.completedAt == null)
                return { source: r, quest: i };
        }
        return null;
    }, [o, e, t, s]);
}
