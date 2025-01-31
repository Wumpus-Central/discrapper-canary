n.d(t, { Y: () => s });
var i = n(192379),
    l = n(726115),
    r = n(859921),
    a = n(128449);
function s() {
    let e = r.Z.useField('selectedTab'),
        t = i.useMemo(
            () =>
                [a.vf.FEATURED, a.vf.GAMING, a.vf.MUSIC, a.vf.ENTERTAINMENT, a.vf.TECH, a.vf.EDUCATION, a.vf.HUBS].map((e) => ({
                    id: e,
                    label: (0, l.vb)(e)
                })),
            []
        ),
        n = i.useCallback((e) => {
            r.Z.setState({ selectedTab: e });
        }, []);
    return (
        i.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || n(t[0].id);
        }, [e, t, n]),
        {
            tabs: t,
            selectedTab: null != e ? e : t[0].id,
            setSelectedTab: n
        }
    );
}
