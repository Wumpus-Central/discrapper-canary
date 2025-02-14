l.d(n, { Z: () => d });
var t = l(913527),
    i = l.n(t),
    a = l(230900),
    r = l(854698),
    s = l(765305),
    o = l(388032);
function d(e, n) {
    return {
        entity: (function (e) {
            let { entityType: n, channelId: l } = e,
                t = (0, a.xV)(e);
            return null == n || n === s.WX.NONE ? 'An event type must be specified.' : (null == t || '' === t.trim()) && null == l ? 'Either a location or channel must be specified.' : void 0;
        })(e),
        schedule: (function (e, n) {
            let l = (0, r.v1)(e),
                { entityType: t } = e;
            if (null == l || (null == l ? void 0 : l.startDate) == null) return o.intl.string(o.t.M73YyM);
            let { startDate: a, endDate: d } = l;
            return t === s.WX.EXTERNAL && null == d ? o.intl.string(o.t['H16p//']) : !n && a.isBefore(i()()) ? o.intl.string(o.t.AXR5Sk) : null != d && null != a && d.isBefore(a) ? o.intl.string(o.t.LpjF4O) : null != d && d.isBefore(i()()) ? o.intl.string(o.t.ViDcm5) : void 0;
        })(e, n),
        topic: (function (e) {
            let { name: n } = e;
            return null == n || '' === n.trim() ? 'Topic must be specified.' : void 0;
        })(e)
    };
}
