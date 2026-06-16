n.d(e, { Mv: () => o, My: () => p, bV: () => l });
var a = n(353640),
    c = n(499867),
    i = n(121894);
let s = (0, a.v)((0, c.eh)(() => ({ commandAnalyticsContext: new Map() })));
function o(t) {
    let { command: e, location: n, sectionName: a } = t,
        { commandAnalyticsContext: c } = s.getState(),
        o = c.get(e);
    if (null == o || o.location !== n || o.sectionName !== a) {
        let t = new Map(c);
        t.set(e, { location: n, sectionName: a }), (0, i.r)(() => s.setState({ commandAnalyticsContext: t }));
    }
}
function l(t) {
    let { commandAnalyticsContext: e } = s.getState();
    return e.get(t);
}
function p(t) {
    let { commandAnalyticsContext: e } = s.getState();
    if (e.has(t)) {
        let n = new Map(e);
        n.delete(t), (0, i.r)(() => s.setState({ commandAnalyticsContext: n }));
    }
}
