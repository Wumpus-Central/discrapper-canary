a.d(t, { f: () => n });
var s = a(64700),
    l = a(965660),
    r = a(601193),
    i = a(324580);
function n() {
    let e = r.A.useField("selectedTab"),
        t = s.useMemo(
            () =>
                [i.o.FEATURED, i.o.GAMING, i.o.MUSIC, i.o.ENTERTAINMENT, i.o.TECH, i.o.EDUCATION, i.o.HUBS].map(
                    (e) => ({ id: e, label: (0, l.jR)(e) }),
                ),
            [],
        ),
        a = s.useCallback((e) => {
            r.A.setState({ selectedTab: e });
        }, []);
    return (
        s.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || a(t[0].id);
        }, [e, t, a]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: a }
    );
}
