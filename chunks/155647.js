n.d(t, {
    fW: () => d,
    jc: () => u
}),
    n(47120),
    n(653041);
var r = n(192379),
    l = n(823379),
    i = n(568315),
    a = n(83126),
    o = n(617191),
    s = n(82554);
let c = {
    [s.zR.SAFETY_DM_SPAM_FILTER]: i.Z,
    [s.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: o.Z,
    [s.zR.SAFETY_LANGUAGE_FILTER]: a.Z
};
function d(e) {
    return r.useMemo(
        () =>
            null != e
                ? (function (e) {
                      let t = [];
                      return (
                          Object.entries(c).forEach((n) => {
                              let [r, l] = n;
                              (null == l.eligibleReportSubtypes || l.eligibleReportSubtypes.includes(e)) && t.push(r);
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
                                l = null == n || (null == n ? void 0 : n()) === !0,
                                i = null == t || null == r || r.includes(t);
                            return l && i;
                        })(n, t)
                            ? null
                            : n;
                    })(e, t)
                )
                .filter(l.lm),
        [e, t]
    );
}
