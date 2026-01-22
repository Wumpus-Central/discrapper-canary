n.d(t, {
    Mv: () => o,
    My: () => c,
    bV: () => l,
}),
    n(896048);
var r = n(353640),
    i = n(499867),
    a = n(121894);
let s = (0, r.v)(
    (0, i.eh)(() => ({
        commandAnalyticsContext: new Map(),
    })),
);

function o(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: i } = s.getState(),
        o = i.get(t);
    if (null == o || o.location !== n || o.sectionName !== r) {
        let e = new Map(i);
        e.set(t, {
            location: n,
            sectionName: r,
        }),
            (0, a.r)(() =>
                s.setState({
                    commandAnalyticsContext: e,
                }),
            );
    }
}

function l(e) {
    let { commandAnalyticsContext: t } = s.getState();
    return t.get(e);
}

function c(e) {
    let { commandAnalyticsContext: t } = s.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e),
            (0, a.r)(() =>
                s.setState({
                    commandAnalyticsContext: n,
                }),
            );
    }
}
