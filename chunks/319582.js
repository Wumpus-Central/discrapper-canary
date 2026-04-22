"use strict";
n.d(t, { MR: () => u, fY: () => c }), n(321073);
var a = n(64700),
    i = n(403362),
    r = n(129443),
    l = n(83140),
    s = n(843540),
    d = n(17372);
let o = {
    [d.Wb.SAFETY_DM_SPAM_FILTER]: r.A,
    [d.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.A,
    [d.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: l.A,
};
function c(e) {
    return a.useMemo(() => {
        var t;
        let n;
        return null != e
            ? ((t = e),
              (n = []),
              Object.entries(o).forEach((e) => {
                  let [a, i] = e;
                  (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(t)) && n.push(a);
              }),
              0 === n.length ? null : n)
            : null;
    }, [e]);
}
function u(e, t) {
    return a.useMemo(
        () =>
            e
                .map((e) => {
                    var n, a;
                    let i;
                    return (
                        (n = e),
                        (a = t),
                        !(function (e, t) {
                            let { predicate: n, eligibleChannelTypes: a } = e,
                                i = null == n || n?.() === !0,
                                r = null == t || null == a || a.includes(t);
                            return i && r;
                        })((i = o[n]), a)
                            ? null
                            : i
                    );
                })
                .filter(i.Vq),
        [e, t],
    );
}
