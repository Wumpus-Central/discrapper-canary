n.d(t, { z: () => c }), n(35282);
var r = n(647438),
    i = n(843611),
    l = n(823379),
    a = n(113434),
    o = n(220068),
    s = n(388032);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = o.Z.useField("tab"),
        c = (0, i.TH)(),
        u = (0, a.aV)();
    r.useEffect(() => {
        o.Z.getState().initializeFromUrl(c.search, u);
    }, [c.search, u]);
    let d = r.useCallback((e) => {
        o.Z.getState().setTab(e);
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
                    t && u
                        ? {
                              id: a.e5.PREVIEW_TOOL,
                              label: s.intl.string(s.t.BDUDam),
                          }
                        : null,
                ].filter(l.lm),
            [t, u],
        ),
        selectedTab: n,
        onSelectTab: d,
    };
}
