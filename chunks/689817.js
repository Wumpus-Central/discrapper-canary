n.d(t, { f: () => s });
var i = n(64700),
    r = n(965660),
    a = n(601193),
    l = n(324580);
function s() {
    let e = a.A.useField("selectedTab"),
        t = i.useMemo(
            () =>
                [l.o.FEATURED, l.o.GAMING, l.o.MUSIC, l.o.ENTERTAINMENT, l.o.TECH, l.o.EDUCATION, l.o.HUBS].map(
                    (e) => ({ id: e, label: (0, r.jR)(e) }),
                ),
            [],
        ),
        n = i.useCallback((e) => {
            a.A.setState({ selectedTab: e });
        }, []);
    return (
        i.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || n(t[0].id);
        }, [e, t, n]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: n }
    );
}
