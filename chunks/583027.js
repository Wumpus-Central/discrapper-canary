n.d(t, {
    Mo: () => c,
    SC: () => u,
    _U: () => a
}),
    n(388685);
var r = n(290486),
    l = n(291476),
    o = n(731965);
let i = (0, r.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: l } = i.getState(),
        c = l.get(t);
    if (null == c || c.location !== n || c.sectionName !== r) {
        let e = new Map(l);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, o.j)(() => i.setState({ commandAnalyticsContext: e }));
    }
}
function a(e) {
    let { commandAnalyticsContext: t } = i.getState();
    return t.get(e);
}
function u(e) {
    let { commandAnalyticsContext: t } = i.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, o.j)(() => i.setState({ commandAnalyticsContext: n }));
    }
}
