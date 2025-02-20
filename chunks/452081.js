n.d(t, { z: () => s });
var r = n(192379),
    i = n(703656),
    l = n(113434),
    o = n(220068),
    a = n(388032);
function s() {
    let e = o.Z.useField('tab'),
        t = r.useCallback((e) => {
            (0, i.dL)('#'), o.Z.setState({ tab: e });
        }, []);
    return {
        tabs: r.useMemo(
            () => [
                {
                    id: l.e5.ALL,
                    label: a.NW.string(a.t['0SzXmp'])
                },
                {
                    id: l.e5.CLAIMED,
                    label: a.NW.string(a.t.zyNYND)
                }
            ],
            []
        ),
        selectedTab: e,
        onSelectTab: t
    };
}
