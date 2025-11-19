n.d(t, {
    fW: () => u,
    jc: () => m,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(823379),
    l = n(568315),
    a = n(83126),
    s = n(218471),
    o = n(46912),
    c = n(82554);
let d = {
    [c.zR.SAFETY_DM_SPAM_FILTER]: l.Z,
    [c.zR.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: o.Z,
    [c.zR.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: s.Z,
    [c.zR.SAFETY_LANGUAGE_FILTER]: a.Z,
};
function u(e) {
    return r.useMemo(
        () =>
            null != e
                ? (function (e) {
                      let t = [];
                      return (
                          Object.entries(d).forEach((n) => {
                              let [r, i] = n;
                              (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(r);
                          }),
                          0 === t.length ? null : t
                      );
                  })(e)
                : null,
        [e],
    );
}
function m(e, t) {
    return r.useMemo(
        () =>
            e
                .map((e) =>
                    (function (e, t) {
                        let n = d[e];
                        return !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: r } = e,
                                i = null == n || (null == n ? void 0 : n()) === !0,
                                l = null == t || null == r || r.includes(t);
                            return i && l;
                        })(n, t)
                            ? null
                            : n;
                    })(e, t),
                )
                .filter(i.lm),
        [e, t],
    );
}
