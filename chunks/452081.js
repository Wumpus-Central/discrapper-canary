n.d(t, { z: () => c }), n(35282);
var r = n(473749),
    i = n(828700),
    l = n(823379),
    a = n(313481),
    s = n(283833),
    o = n(388032);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = s.Z.useField("tab"),
        c = (0, i.TH)(),
        u = (0, a.aV)();
    r.useEffect(() => {
        s.Z.getState().initializeFromUrl(c.search, u);
    }, [c.search, u]);
    let d = r.useCallback((e) => {
        s.Z.getState().setTab(e);
    }, []);
    return {
        tabs: r.useMemo(
            () =>
                [
                    {
                        id: a.e5.ALL,
                        label: o.intl.string(o.t["0SzXmi"]),
                    },
                    t
                        ? {
                              id: a.e5.CLAIMED,
                              label: o.intl.string(o.t.zyNYNB),
                          }
                        : null,
                    t && u
                        ? {
                              id: a.e5.PREVIEW_TOOL,
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
