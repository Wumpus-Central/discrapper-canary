n.d(t, {
    Mo: () => s,
    SC: () => c,
    _U: () => l,
}),
    n(388685);
var r = n(97519),
    i = n(296574),
    o = n(731965);
let a = (0, r.U)((0, i.XR)(() => ({ commandAnalyticsContext: new Map() })));
function s(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: i } = a.getState(),
        s = i.get(t);
    if (null == s || s.location !== n || s.sectionName !== r) {
        let e = new Map(i);
        e.set(t, {
            location: n,
            sectionName: r,
        }),
            (0, o.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function l(e) {
    let { commandAnalyticsContext: t } = a.getState();
    return t.get(e);
}
function c(e) {
    let { commandAnalyticsContext: t } = a.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, o.j)(() => a.setState({ commandAnalyticsContext: n }));
    }
}
