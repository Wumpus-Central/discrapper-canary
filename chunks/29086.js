n.d(t, { Y: () => a });
var r = n(192379),
    i = n(726115),
    l = n(859921),
    o = n(128449);
function a() {
    let e = l.Z.useField('selectedTab'),
        t = r.useMemo(
            () =>
                [o.vf.FEATURED, o.vf.GAMING, o.vf.MUSIC, o.vf.ENTERTAINMENT, o.vf.TECH, o.vf.EDUCATION, o.vf.HUBS].map((e) => ({
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
