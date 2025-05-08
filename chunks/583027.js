n.d(t, {
    Mo: () => u,
    SC: () => a,
    _U: () => c
}),
    n(388685);
var r = n(381814),
    l = n(734641),
    o = n(731965);
let i = (0, r.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function u(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: l } = i.getState(),
        u = l.get(t);
    if (null == u || u.location !== n || u.sectionName !== r) {
        let e = new Map(l);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, o.j)(() => i.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: t } = i.getState();
    return t.get(e);
}
function a(e) {
    let { commandAnalyticsContext: t } = i.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, o.j)(() => i.setState({ commandAnalyticsContext: n }));
    }
}
