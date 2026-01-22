n.d(t, {
    J: () => c,
}),
    n(747238);
var r = n(64700),
    i = n(960488),
    l = n(403362),
    a = n(631001),
    s = n(890687),
    o = n(985018);

function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = a.A.useField("tab"),
        c = (0, i.zy)(),
        u = (0, s.p5)();
    r.useEffect(() => {
        a.A.getState().initializeFromUrl(c.search, u);
    }, [c.search, u]);
    let d = r.useCallback((e) => {
        a.A.getState().setTab(e);
    }, []);
    return {
        tabs: r.useMemo(
            () =>
                [
                    {
                        id: s.NC.ALL,
                        label: o.intl.string(o.t["0SzXmi"]),
                    },
                    t
                        ? {
                              id: s.NC.CLAIMED,
                              label: o.intl.string(o.t.zyNYNB),
                          }
                        : null,
                    t && u
                        ? {
                              id: s.NC.PREVIEW_TOOL,
                              label: o.intl.string(o.t.BDUDau),
                          }
                        : null,
                ].filter(l.Vq),
            [t, u],
        ),
        selectedTab: n,
        onSelectTab: d,
    };
}
