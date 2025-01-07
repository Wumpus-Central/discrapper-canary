t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(913527),
    i = t.n(l),
    r = t(230900),
    a = t(854698),
    s = t(765305),
    o = t(388032);
function c(e, n) {
    return {
        entity: (function (e) {
            let { entityType: n, channelId: t } = e,
                l = (0, r.xV)(e);
            return null == n || n === s.WX.NONE ? 'An event type must be specified.' : (null == l || '' === l.trim()) && null == t ? 'Either a location or channel must be specified.' : void 0;
        })(e),
        schedule: (function (e, n) {
            let t = (0, a.v1)(e),
                { entityType: l } = e;
            if (null == t || (null == t ? void 0 : t.startDate) == null) return o.intl.string(o.t.M73YyM);
            let { startDate: r, endDate: c } = t;
            return l === s.WX.EXTERNAL && null == c ? o.intl.string(o.t['H16p//']) : !n && r.isBefore(i()()) ? o.intl.string(o.t.AXR5Sk) : null != c && null != r && c.isBefore(r) ? o.intl.string(o.t.LpjF4O) : null != c && c.isBefore(i()()) ? o.intl.string(o.t.ViDcm5) : void 0;
        })(e, n),
        topic: (function (e) {
            let { name: n } = e;
            return null == n || '' === n.trim() ? 'Topic must be specified.' : void 0;
        })(e)
    };
}
