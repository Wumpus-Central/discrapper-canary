n.r(t),
    n.d(t, {
        openPlayground: () => d,
        openPlaygroundFromParsedUrl: () => f,
    }),
    n(388685),
    n(35282);
var r = n(37234),
    i = n(819640),
    a = n(594174),
    o = n(653592),
    s = n(156142),
    l = n(981631);
function c(e) {
    for (let t of o.componentPlaygroundConfigs) {
        let n = t.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != n) return n.id;
    }
    return null;
}
function u(e, t) {
    for (let n of o.componentPlaygroundConfigs) {
        let r = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != r)
            for (let e of r.groups) {
                let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                if (null != n) return n.id;
            }
    }
    return null;
}
function d(e, t) {
    let n = a.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return !1;
    let o = null != e ? c(e) : null,
        d = null != o && null != t ? u(o, t) : null;
    return (
        s.PlaygroundStore.setState({
            selectedCollection: o,
            selectedStory: d,
        }),
        i.Z.getLayers().includes(l.S9g.COMPONENT_PLAYGROUND) || (0, r.jN)(l.S9g.COMPONENT_PLAYGROUND),
        !0
    );
}
function f(e) {
    let { match: t } = e;
    return d(t.collection, t.story);
}
