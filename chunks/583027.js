t.d(n, {
    Mo: () => c,
    SC: () => d,
    _U: () => l
}),
    t(47120);
var o = t(15729),
    a = t(877124),
    r = t(731965);
let i = (0, o.U)((0, a.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: n, location: t, sectionName: o } = e,
        { commandAnalyticsContext: a } = i.getState(),
        c = a.get(n);
    if (null == c || c.location !== t || c.sectionName !== o) {
        let e = new Map(a);
        e.set(n, {
            location: t,
            sectionName: o
        }),
            (0, r.j)(() => i.setState({ commandAnalyticsContext: e }));
    }
}
function l(e) {
    let { commandAnalyticsContext: n } = i.getState();
    return n.get(e);
}
function d(e) {
    let { commandAnalyticsContext: n } = i.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, r.j)(() => i.setState({ commandAnalyticsContext: t }));
    }
}
