n.d(t, { J: () => d });
var i = n(64700),
    r = n(960488),
    a = n(403362),
    l = n(631001),
    s = n(890687),
    o = n(985018);
function d(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        n = l.A.useField("tab"),
        d = (0, r.zy)(),
        c = (0, s.p5)();
    i.useEffect(() => {
        l.A.getState().initializeFromUrl(d.search, c);
    }, [d.search, c]);
    let u = i.useCallback((e) => {
        l.A.getState().setTab(e);
    }, []);
    return {
        tabs: i.useMemo(
            () =>
                [
                    { id: s.NC.ALL, label: o.intl.string(o.t["0SzXmi"]) },
                    t ? { id: s.NC.CLAIMED, label: o.intl.string(o.t.zyNYNB) } : null,
                    t && c ? { id: s.NC.PREVIEW_TOOL, label: o.intl.string(o.t.BDUDau) } : null,
                ].filter(a.Vq),
            [t, c],
        ),
        selectedTab: n,
        onSelectTab: u,
    };
}
