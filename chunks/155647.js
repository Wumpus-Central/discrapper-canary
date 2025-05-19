n.d(t, {
    fW: () => d,
    jc: () => u
}),
    n(388685),
    n(539854);
var r = n(73800),
    a = n(823379),
    i = n(568315),
    l = n(83126),
    o = n(617191),
    s = n(82554);
let c = {
    [s.zR.SAFETY_DM_SPAM_FILTER]: i.Z,
    [s.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: o.Z,
    [s.zR.SAFETY_LANGUAGE_FILTER]: l.Z
};
function d(e) {
    return r.useMemo(
        () =>
            null != e
                ? (function (e) {
                      let t = [];
                      return (
                          Object.entries(c).forEach((n) => {
                              let [r, a] = n;
                              (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && t.push(r);
                          }),
                          0 === t.length ? null : t
                      );
                  })(e)
                : null,
        [e]
    );
}
function u(e, t) {
    return r.useMemo(
        () =>
            e
                .map((e) =>
                    (function (e, t) {
                        let n = c[e];
                        return !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: r } = e,
                                a = null == n || (null == n ? void 0 : n()) === !0,
                                i = null == t || null == r || r.includes(t);
                            return a && i;
                        })(n, t)
                            ? null
                            : n;
                    })(e, t)
                )
                .filter(a.lm),
        [e, t]
    );
}
