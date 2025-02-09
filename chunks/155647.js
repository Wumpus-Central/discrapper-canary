n.d(t, {
    fW: () => c,
    jc: () => u
}),
    n(47120),
    n(653041);
var l = n(192379),
    i = n(823379),
    r = n(568315),
    a = n(83126),
    s = n(617191),
    o = n(82554);
let d = {
    [o.zR.SAFETY_DM_SPAM_FILTER]: r.Z,
    [o.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: s.Z,
    [o.zR.SAFETY_LANGUAGE_FILTER]: a.Z
};
function c(e) {
    return l.useMemo(
        () =>
            null != e
                ? (function (e) {
                      let t = [];
                      return (
                          Object.entries(d).forEach((n) => {
                              let [l, i] = n;
                              (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(l);
                          }),
                          0 === t.length ? null : t
                      );
                  })(e)
                : null,
        [e]
    );
}
function u(e, t) {
    return l.useMemo(
        () =>
            e
                .map((e) =>
                    (function (e, t) {
                        let n = d[e];
                        return !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: l } = e,
                                i = null == n || (null == n ? void 0 : n()) === !0,
                                r = null == t || null == l || l.includes(t);
                            return i && r;
                        })(n, t)
                            ? null
                            : n;
                    })(e, t)
                )
                .filter(i.lm),
        [e, t]
    );
}
