n.d(t, { z: () => c });
var r = n(647438),
    i = n(703656),
    l = n(823379),
    a = n(113434),
    o = n(220068),
    s = n(388032);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = o.Z.useField("tab"),
        c = r.useCallback((e) => {
            (0, i.dL)("#"), o.Z.setState({ tab: e });
        }, []);
    return {
        tabs: r.useMemo(
            () =>
                [
                    {
                        id: a.e5.ALL,
                        label: s.intl.string(s.t["0SzXmp"]),
                    },
                    t
                        ? {
                              id: a.e5.CLAIMED,
                              label: s.intl.string(s.t.zyNYND),
                          }
                        : null,
                ].filter(l.lm),
            [t],
        ),
        selectedTab: n,
        onSelectTab: c,
    };
}
