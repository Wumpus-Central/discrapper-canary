t.d(n, {
    Mo: () => c,
    SC: () => d,
    _U: () => l,
}),
    t(388685);
var r = t(97519),
    o = t(296574),
    i = t(731965);
let a = (0, r.U)((0, o.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: n, location: t, sectionName: r } = e,
        { commandAnalyticsContext: o } = a.getState(),
        c = o.get(n);
    if (null == c || c.location !== t || c.sectionName !== r) {
        let e = new Map(o);
        e.set(n, {
            location: t,
            sectionName: r,
        }),
            (0, i.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function l(e) {
    let { commandAnalyticsContext: n } = a.getState();
    return n.get(e);
}
function d(e) {
    let { commandAnalyticsContext: n } = a.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, i.j)(() => a.setState({ commandAnalyticsContext: t }));
    }
}
