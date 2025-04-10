n.d(t, {
    Mo: () => i,
    SC: () => u,
    _U: () => c
}),
    n(388685);
var r = n(290486),
    l = n(291476),
    o = n(731965);
let a = (0, r.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function i(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: l } = a.getState(),
        i = l.get(t);
    if (null == i || i.location !== n || i.sectionName !== r) {
        let e = new Map(l);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, o.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: t } = a.getState();
    return t.get(e);
}
function u(e) {
    let { commandAnalyticsContext: t } = a.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, o.j)(() => a.setState({ commandAnalyticsContext: n }));
    }
}
