n.d(t, {
    Mo: () => c,
    SC: () => u,
    _U: () => a
}),
    n(47120);
var r = n(230383),
    o = n(781930),
    l = n(731965);
let i = (0, r.U)((0, o.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: o } = i.getState(),
        c = o.get(t);
    if (null == c || c.location !== n || c.sectionName !== r) {
        let e = new Map(o);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, l.j)(() => i.setState({ commandAnalyticsContext: e }));
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
        n.delete(e), (0, l.j)(() => i.setState({ commandAnalyticsContext: n }));
    }
}
