t.d(n, { Z: () => d });
var l = t(913527),
    i = t.n(l),
    r = t(230900),
    s = t(854698),
    a = t(765305),
    o = t(388032);
function d(e, n) {
    return {
        entity: (function (e) {
            let { entityType: n, channelId: t } = e,
                l = (0, r.xV)(e);
            return null == n || n === a.WX.NONE ? 'An event type must be specified.' : (null == l || '' === l.trim()) && null == t ? 'Either a location or channel must be specified.' : void 0;
        })(e),
        schedule: (function (e, n) {
            let t = (0, s.v1)(e),
                { entityType: l } = e;
            if (null == t || (null == t ? void 0 : t.startDate) == null) return o.intl.string(o.t.M73YyM);
            let { startDate: r, endDate: d } = t;
            return l === a.WX.EXTERNAL && null == d ? o.intl.string(o.t['H16p//']) : !n && r.isBefore(i()()) ? o.intl.string(o.t.AXR5Sk) : null != d && null != r && d.isBefore(r) ? o.intl.string(o.t.LpjF4O) : null != d && d.isBefore(i()()) ? o.intl.string(o.t.ViDcm5) : void 0;
        })(e, n),
        topic: (function (e) {
            let { name: n } = e;
            return null == n || '' === n.trim() ? 'Topic must be specified.' : void 0;
        })(e)
    };
}
