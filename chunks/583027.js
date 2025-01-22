t.d(n, {
    Mo: function () {
        return d;
    },
    SC: function () {
        return c;
    },
    _U: function () {
        return r;
    }
}),
    t(47120);
var i = t(15729),
    l = t(877124),
    a = t(731965);
let o = (0, i.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function d(e) {
    let { command: n, location: t, sectionName: i } = e,
        { commandAnalyticsContext: l } = o.getState(),
        d = l.get(n);
    if (null == d || d.location !== t || d.sectionName !== i) {
        let e = new Map(l);
        e.set(n, {
            location: t,
            sectionName: i
        }),
            (0, a.j)(() => o.setState({ commandAnalyticsContext: e }));
    }
}
function r(e) {
    let { commandAnalyticsContext: n } = o.getState();
    return n.get(e);
}
function c(e) {
    let { commandAnalyticsContext: n } = o.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, a.j)(() => o.setState({ commandAnalyticsContext: t }));
    }
}
