t.d(e, {
    Mo: () => c,
    SC: () => d,
    _U: () => _
}),
    t(47120);
var o = t(15729),
    a = t(877124),
    r = t(731965);
let i = (0, o.U)((0, a.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(n) {
    let { command: e, location: t, sectionName: o } = n,
        { commandAnalyticsContext: a } = i.getState(),
        c = a.get(e);
    if (null == c || c.location !== t || c.sectionName !== o) {
        let n = new Map(a);
        n.set(e, {
            location: t,
            sectionName: o
        }),
            (0, r.j)(() => i.setState({ commandAnalyticsContext: n }));
    }
}
function _(n) {
    let { commandAnalyticsContext: e } = i.getState();
    return e.get(n);
}
function d(n) {
    let { commandAnalyticsContext: e } = i.getState();
    if (e.has(n)) {
        let t = new Map(e);
        t.delete(n), (0, r.j)(() => i.setState({ commandAnalyticsContext: t }));
    }
}
