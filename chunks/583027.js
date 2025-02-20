t.d(n, {
    Mo: () => i,
    SC: () => _,
    _U: () => l
}),
    t(47120);
var o = t(15729),
    r = t(877124),
    c = t(731965);
let a = (0, o.U)((0, r.XR)(() => ({ commandAnalyticsContext: new Map() })));
function i(e) {
    let { command: n, location: t, sectionName: o } = e,
        { commandAnalyticsContext: r } = a.getState(),
        i = r.get(n);
    if (null == i || i.location !== t || i.sectionName !== o) {
        let e = new Map(r);
        e.set(n, {
            location: t,
            sectionName: o
        }),
            (0, c.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function l(e) {
    let { commandAnalyticsContext: n } = a.getState();
    return n.get(e);
}
function _(e) {
    let { commandAnalyticsContext: n } = a.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, c.j)(() => a.setState({ commandAnalyticsContext: t }));
    }
}
