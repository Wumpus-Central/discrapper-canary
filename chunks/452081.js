n.d(t, {
    z: function () {
        return o;
    }
});
var i = n(192379),
    r = n(703656),
    l = n(113434),
    a = n(220068),
    s = n(388032);
function o() {
    let e = a.Z.useField('tab'),
        t = i.useCallback((e) => {
            (0, r.dL)('#'), a.Z.setState({ tab: e });
        }, []);
    return {
        tabs: i.useMemo(
            () => [
                {
                    id: l.e5.ALL,
                    label: s.intl.string(s.t['0SzXmp'])
                },
                {
                    id: l.e5.CLAIMED,
                    label: s.intl.string(s.t.zyNYND)
                }
            ],
            []
        ),
        selectedTab: e,
        onSelectTab: t
    };
}
