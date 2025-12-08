n.d(t, { Z: () => c }), n(781311);
var l = n(913527),
    r = n.n(l),
    i = n(230900),
    a = n(854698),
    s = n(765305),
    o = n(388032);
function c(e, t) {
    return {
        entity: (function (e) {
            let { entityType: t, channelId: n } = e,
                l = (0, i.xV)(e);
            return null == t || t === s.WX.NONE
                ? "An event type must be specified."
                : (null == l || "" === l.trim()) && null == n
                  ? "Either a location or channel must be specified."
                  : void 0;
        })(e),
        schedule: (function (e, t) {
            let n = (0, a.v1)(e),
                { entityType: l } = e;
            if (null == n || (null == n ? void 0 : n.startDate) == null) return o.intl.string(o.t.M73YyN);
            let { startDate: i, endDate: c } = n;
            return l === s.WX.EXTERNAL && null == c
                ? o.intl.string(o.t["H16p/w"])
                : !t && i.isBefore(r()())
                  ? o.intl.string(o.t.AXR5Ss)
                  : null != c && null != i && c.isBefore(i)
                    ? o.intl.string(o.t.LpjF4K)
                    : null != c && c.isBefore(r()())
                      ? o.intl.string(o.t.ViDcm2)
                      : void 0;
        })(e, t),
        topic: (function (e) {
            let { name: t } = e;
            return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
        })(e),
    };
}
