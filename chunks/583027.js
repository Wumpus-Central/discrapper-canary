(t.d(n, {
    Mo: () => c,
    SC: () => d,
    _U: () => l
}),
    t(388685));
var o = t(97519),
    r = t(296574),
    i = t(731965);
let a = (0, o.U)((0, r.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: n, location: t, sectionName: o } = e,
        { commandAnalyticsContext: r } = a.getState(),
        c = r.get(n);
    if (null == c || c.location !== t || c.sectionName !== o) {
        let e = new Map(r);
        (e.set(n, {
            location: t,
            sectionName: o
        }),
            (0, i.j)(() => a.setState({ commandAnalyticsContext: e })));
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
        (t.delete(e), (0, i.j)(() => a.setState({ commandAnalyticsContext: t })));
    }
}
