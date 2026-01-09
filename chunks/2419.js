n.r(t),
    n.d(t, {
        openPlayground: () => c,
        openPlaygroundFromParsedUrl: () => u,
    }),
    n(388685),
    n(35282);
var r = n(37234),
    i = n(819640),
    l = n(594174),
    a = n(653592),
    o = n(156142),
    s = n(981631);
function c(e, t) {
    let n = l.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return !1;
    let c =
            null != e
                ? (function (e) {
                      for (let t of a.componentPlaygroundConfigs) {
                          let n = t.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != n) return n.id;
                      }
                      return null;
                  })(e)
                : null,
        u =
            null != c && null != t
                ? (function (e, t) {
                      for (let n of a.componentPlaygroundConfigs) {
                          let r = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != r)
                              for (let e of r.groups) {
                                  let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                                  if (null != n) return n.id;
                              }
                      }
                      return null;
                  })(c, t)
                : null;
    return (
        o.PlaygroundStore.setState({
            selectedCollection: c,
            selectedStory: u,
        }),
        i.Z.getLayers().includes(s.S9g.COMPONENT_PLAYGROUND) || (0, r.jN)(s.S9g.COMPONENT_PLAYGROUND),
        !0
    );
}
function u(e) {
    let { match: t } = e;
    return c(t.collection, t.story);
}
