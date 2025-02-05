t.d(n, {
    Mo: () => d,
    SC: () => r,
    _U: () => c
}),
    t(47120);
var l = t(15729),
    i = t(877124),
    a = t(731965);
let o = (0, l.U)((0, i.XR)(() => ({ commandAnalyticsContext: new Map() })));
function d(e) {
    let { command: n, location: t, sectionName: l } = e,
        { commandAnalyticsContext: i } = o.getState(),
        d = i.get(n);
    if (null == d || d.location !== t || d.sectionName !== l) {
        let e = new Map(i);
        e.set(n, {
            location: t,
            sectionName: l
        }),
            (0, a.j)(() => o.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: n } = o.getState();
    return n.get(e);
}
function r(e) {
    let { commandAnalyticsContext: n } = o.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, a.j)(() => o.setState({ commandAnalyticsContext: t }));
    }
}
