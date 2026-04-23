s.d(t, { J: () => c });
var n = s(64700),
    l = s(873263),
    a = s(403362),
    r = s(631001),
    i = s(890687),
    o = s(985018);
function c(e) {
    let { withClaimedQuestsTab: t = !0 } = e,
        s = r.A.useField("tab"),
        c = (0, l.zy)(),
        u = (0, i.p5)();
    n.useEffect(() => {
        r.A.getState().initializeFromUrl(c.search, u);
    }, [c.search, u]);
    let d = n.useCallback((e) => {
        r.A.getState().setTab(e);
    }, []);
    return {
        tabs: n.useMemo(
            () =>
                [
                    { id: i.NC.ALL, label: o.intl.string(o.t["0SzXmi"]) },
                    t ? { id: i.NC.CLAIMED, label: o.intl.string(o.t.zyNYNB) } : null,
                    t && u ? { id: i.NC.PREVIEW_TOOL, label: o.intl.string(o.t.BDUDau) } : null,
                ].filter(a.Vq),
            [t, u],
        ),
        selectedTab: s,
        onSelectTab: d,
    };
}
