n.d(t, { A: () => m });
var i = n(64700),
    a = n(17928),
    s = n(975807),
    r = n(183972),
    l = n(919466),
    c = n(196099),
    o = n(297966),
    d = n(927813);
n(985603);
let u = 5 * d.A.Millis.MINUTE;
function m(e) {
    let t = (0, a.bG)([l.A], () => l.A.getLastFetchTime()),
        n = (0, c.M)("xbox");
    return i.useCallback(async () => {
        var i;
        if (null != e && null != (i = t) && Date.now() - i < u) (0, s.A)(e.url, !0);
        else {
            let e = await (0, r.aB)(o.n9.XGPP);
            e?.redirect != null && (0, s.A)(e.redirect.url, !0);
        }
        n(c.H.CLAIM);
    }, [e, t, n]);
}
