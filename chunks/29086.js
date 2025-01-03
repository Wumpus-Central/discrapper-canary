n.d(t, {
    Y: function () {
        return s;
    }
});
var i = n(192379),
    r = n(726115),
    l = n(859921),
    a = n(128449);
function s() {
    let e = l.Z.useField('selectedTab'),
        t = i.useMemo(
            () =>
                [a.vf.FEATURED, a.vf.GAMING, a.vf.MUSIC, a.vf.ENTERTAINMENT, a.vf.TECH, a.vf.EDUCATION, a.vf.HUBS].map((e) => ({
                    id: e,
                    label: (0, r.vb)(e)
                })),
            []
        ),
        n = i.useCallback((e) => {
            l.Z.setState({ selectedTab: e });
        }, []);
    return (
        i.useEffect(() => {
            (null == e || !t.some((t) => t.id === e)) && n(t[0].id);
        }, [e, t, n]),
        {
            tabs: t,
            selectedTab: null != e ? e : t[0].id,
            setSelectedTab: n
        }
    );
}
