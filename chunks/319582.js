n.d(t, {
    MR: () => u,
    fY: () => d,
}),
    n(896048),
    n(321073);
var l = n(64700),
    r = n(403362),
    a = n(129443),
    i = n(83140),
    s = n(843540),
    o = n(17372);
let c = {
    [o.Wb.SAFETY_DM_SPAM_FILTER]: a.A,
    [o.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.A,
    [o.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: i.A,
};
function d(e) {
    return l.useMemo(() => {
        var t;
        let n;
        return null != e
            ? ((t = e),
              (n = []),
              Object.entries(c).forEach((e) => {
                  let [l, r] = e;
                  (null == r.eligibleReportSubtypes || r.eligibleReportSubtypes.includes(t)) && n.push(l);
              }),
              0 === n.length ? null : n)
            : null;
    }, [e]);
}
function u(e, t) {
    return l.useMemo(
        () =>
            e
                .map((e) => {
                    var n, l;
                    let r;
                    return (
                        (n = e),
                        (l = t),
                        !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: l } = e,
                                r = null == n || (null == n ? void 0 : n()) === !0,
                                a = null == t || null == l || l.includes(t);
                            return r && a;
                        })((r = c[n]), l)
                            ? null
                            : r
                    );
                })
                .filter(r.Vq),
        [e, t],
    );
}
