n.d(t, {
    f: () => s,
});
var r = n(64700),
    i = n(965660),
    l = n(601193),
    a = n(324580);

function s() {
    let e = l.A.useField("selectedTab"),
        t = r.useMemo(
            () =>
                [a.o.FEATURED, a.o.GAMING, a.o.MUSIC, a.o.ENTERTAINMENT, a.o.TECH, a.o.EDUCATION, a.o.HUBS].map(
                    (e) => ({
                        id: e,
                        label: (0, i.jR)(e),
                    }),
                ),
            [],
        ),
        n = r.useCallback((e) => {
            l.A.setState({
                selectedTab: e,
            });
        }, []);
    return (
        r.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || n(t[0].id);
        }, [e, t, n]),
        {
            tabs: t,
            selectedTab: null != e ? e : t[0].id,
            setSelectedTab: n,
        }
    );
}
