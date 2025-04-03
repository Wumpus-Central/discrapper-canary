n.d(t, { z: () => s });
var r = n(192379),
    i = n(703656),
    l = n(113434),
    a = n(220068),
    o = n(388032);
function s() {
    let e = a.Z.useField('tab'),
        t = r.useCallback((e) => {
            (0, i.dL)('#'), a.Z.setState({ tab: e });
        }, []);
    return {
        tabs: r.useMemo(
            () => [
                {
                    id: l.e5.ALL,
                    label: o.NW.string(o.t['0SzXmp'])
                },
                {
                    id: l.e5.CLAIMED,
                    label: o.NW.string(o.t.zyNYND)
                }
            ],
            []
        ),
        selectedTab: e,
        onSelectTab: t
    };
}
