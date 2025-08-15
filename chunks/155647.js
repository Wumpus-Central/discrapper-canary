n.d(t, {
    fW: () => u,
    jc: () => m,
}),
    n(388685),
    n(539854);
var r = n(73800),
    a = n(823379),
    i = n(568315),
    l = n(83126),
    o = n(218471),
    s = n(46912),
    c = n(82554);
let d = {
    [c.zR.SAFETY_DM_SPAM_FILTER]: i.Z,
    [c.zR.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.Z,
    [c.zR.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: o.Z,
    [c.zR.SAFETY_LANGUAGE_FILTER]: l.Z,
};
function u(e) {
    return r.useMemo(
        () =>
            null != e
                ? (function (e) {
                      let t = [];
                      return (
                          Object.entries(d).forEach((n) => {
                              let [r, a] = n;
                              (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && t.push(r);
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
                                a = null == n || (null == n ? void 0 : n()) === !0,
                                i = null == t || null == r || r.includes(t);
                            return a && i;
                        })(n, t)
                            ? null
                            : n;
                    })(e, t),
                )
                .filter(a.lm),
        [e, t],
    );
}
