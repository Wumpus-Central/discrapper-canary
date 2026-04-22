n.d(t, { Mv: () => r, My: () => c, bV: () => o });
var i = n(353640),
    l = n(499867),
    a = n(121894);
let s = (0, i.v)((0, l.eh)(() => ({ commandAnalyticsContext: new Map() })));
function r(e) {
    let { command: t, location: n, sectionName: i } = e,
        { commandAnalyticsContext: l } = s.getState(),
        r = l.get(t);
    if (null == r || r.location !== n || r.sectionName !== i) {
        let e = new Map(l);
        e.set(t, { location: n, sectionName: i }), (0, a.r)(() => s.setState({ commandAnalyticsContext: e }));
    }
}
function o(e) {
    let { commandAnalyticsContext: t } = s.getState();
    return t.get(e);
}
function c(e) {
    let { commandAnalyticsContext: t } = s.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, a.r)(() => s.setState({ commandAnalyticsContext: n }));
    }
}
