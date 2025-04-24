n.d(t, {
    Mo: () => a,
    SC: () => c,
    _U: () => s
}),
    n(388685);
var r = n(290486),
    o = n(291476),
    l = n(731965);
let i = (0, r.U)((0, o.XR)(() => ({ commandAnalyticsContext: new Map() })));
function a(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: o } = i.getState(),
        a = o.get(t);
    if (null == a || a.location !== n || a.sectionName !== r) {
        let e = new Map(o);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, l.j)(() => i.setState({ commandAnalyticsContext: e }));
    }
}
function s(e) {
    let { commandAnalyticsContext: t } = i.getState();
    return t.get(e);
}
function c(e) {
    let { commandAnalyticsContext: t } = i.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, l.j)(() => i.setState({ commandAnalyticsContext: n }));
    }
}
