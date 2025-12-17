n.d(t, { z: () => c }), n(35282);
var r = n(473749),
    i = n(828700),
    l = n(823379),
    a = n(283833),
    o = n(968843),
    s = n(388032);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = a.Z.useField("tab"),
        c = (0, i.TH)(),
        u = (0, o.aV)();
    r.useEffect(() => {
        a.Z.getState().initializeFromUrl(c.search, u);
    }, [c.search, u]);
    let d = r.useCallback((e) => {
        a.Z.getState().setTab(e);
    }, []);
    return {
        tabs: r.useMemo(
            () =>
                [
                    {
                        id: o.e5.ALL,
                        label: s.intl.string(s.t["0SzXmi"]),
                    },
                    t
                        ? {
                              id: o.e5.CLAIMED,
                              label: s.intl.string(s.t.zyNYNB),
                          }
                        : null,
                    t && u
                        ? {
                              id: o.e5.PREVIEW_TOOL,
                              label: s.intl.string(s.t.BDUDau),
                          }
                        : null,
                ].filter(l.lm),
            [t, u],
        ),
        selectedTab: n,
        onSelectTab: d,
    };
}
