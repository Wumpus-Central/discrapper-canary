r.d(t, {
    Mo: () => a,
    SC: () => i,
    _U: () => c
}),
    r(388685);
var n = r(381814),
    o = r(734641),
    l = r(731965);
let s = (0, n.U)((0, o.XR)(() => ({ commandAnalyticsContext: new Map() })));
function a(e) {
    let { command: t, location: r, sectionName: n } = e,
        { commandAnalyticsContext: o } = s.getState(),
        a = o.get(t);
    if (null == a || a.location !== r || a.sectionName !== n) {
        let e = new Map(o);
        e.set(t, {
            location: r,
            sectionName: n
        }),
            (0, l.j)(() => s.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: t } = s.getState();
    return t.get(e);
}
function i(e) {
    let { commandAnalyticsContext: t } = s.getState();
    if (t.has(e)) {
        let r = new Map(t);
        r.delete(e), (0, l.j)(() => s.setState({ commandAnalyticsContext: r }));
    }
}
