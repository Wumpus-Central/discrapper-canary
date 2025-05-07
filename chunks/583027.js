n.d(t, {
    Mo: () => a,
    SC: () => u,
    _U: () => c
}),
    n(388685);
var r = n(381814),
    l = n(734641),
    i = n(731965);
let o = (0, r.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function a(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: l } = o.getState(),
        a = l.get(t);
    if (null == a || a.location !== n || a.sectionName !== r) {
        let e = new Map(l);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, i.j)(() => o.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: t } = o.getState();
    return t.get(e);
}
function u(e) {
    let { commandAnalyticsContext: t } = o.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, i.j)(() => o.setState({ commandAnalyticsContext: n }));
    }
}
