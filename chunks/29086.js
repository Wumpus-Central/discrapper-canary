n.d(t, { Y: () => o });
var r = n(192379),
    i = n(726115),
    l = n(859921),
    a = n(128449);
function o() {
    let e = l.Z.useField('selectedTab'),
        t = r.useMemo(
            () =>
                [a.vf.FEATURED, a.vf.GAMING, a.vf.MUSIC, a.vf.ENTERTAINMENT, a.vf.TECH, a.vf.EDUCATION, a.vf.HUBS].map((e) => ({
                    id: e,
                    label: (0, i.vb)(e)
                })),
            []
        ),
        n = r.useCallback((e) => {
            l.Z.setState({ selectedTab: e });
        }, []);
    return (
        r.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || n(t[0].id);
        }, [e, t, n]),
        {
            tabs: t,
            selectedTab: null != e ? e : t[0].id,
            setSelectedTab: n
        }
    );
}
