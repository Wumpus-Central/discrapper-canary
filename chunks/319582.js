n.d(t, { MR: () => u, fY: () => c }), n(321073);
var l = n(64700),
    a = n(403362),
    i = n(129443),
    r = n(83140),
    s = n(843540),
    d = n(17372);
let o = {
    [d.Wb.SAFETY_DM_SPAM_FILTER]: i.A,
    [d.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.A,
    [d.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: r.A,
};
function c(e) {
    return l.useMemo(() => {
        var t;
        let n;
        return null != e
            ? ((t = e),
              (n = []),
              Object.entries(o).forEach((e) => {
                  let [l, a] = e;
                  (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(t)) && n.push(l);
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
                    let a;
                    return (
                        (n = e),
                        (l = t),
                        !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: l } = e,
                                a = null == n || n?.() === !0,
                                i = null == t || null == l || l.includes(t);
                            return a && i;
                        })((a = o[n]), l)
                            ? null
                            : a
                    );
                })
                .filter(a.Vq),
        [e, t],
    );
}
