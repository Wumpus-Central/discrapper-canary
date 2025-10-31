n.d(t, {
    Mo: () => o,
    SC: () => c,
    _U: () => s,
}),
    n(388685);
var i = n(191336),
    l = n(180059),
    r = n(731965);
let a = (0, i.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function o(e) {
    let { command: t, location: n, sectionName: i } = e,
        { commandAnalyticsContext: l } = a.getState(),
        o = l.get(t);
    if (null == o || o.location !== n || o.sectionName !== i) {
        let e = new Map(l);
        e.set(t, {
            location: n,
            sectionName: i,
        }),
            (0, r.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function s(e) {
    let { commandAnalyticsContext: t } = a.getState();
    return t.get(e);
}
function c(e) {
    let { commandAnalyticsContext: t } = a.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, r.j)(() => a.setState({ commandAnalyticsContext: n }));
    }
}
