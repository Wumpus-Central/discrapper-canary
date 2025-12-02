n.d(t, { z: () => c }), n(35282);
var r = n(473749),
    i = n(828700),
    l = n(823379),
    a = n(283833),
    s = n(968843),
    o = n(388032);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = a.Z.useField("tab"),
        c = (0, i.TH)(),
        u = (0, s.aV)();
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
                        id: s.e5.ALL,
                        label: o.intl.string(o.t["0SzXmi"]),
                    },
                    t
                        ? {
                              id: s.e5.CLAIMED,
                              label: o.intl.string(o.t.zyNYNB),
                          }
                        : null,
                    t && u
                        ? {
                              id: s.e5.PREVIEW_TOOL,
                              label: o.intl.string(o.t.BDUDau),
                          }
                        : null,
                ].filter(l.lm),
            [t, u],
        ),
        selectedTab: n,
        onSelectTab: d,
    };
}
