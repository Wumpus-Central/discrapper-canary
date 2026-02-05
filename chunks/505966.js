n.d(t, { A: () => c });
var l = n(989349),
    i = n.n(l),
    s = n(9448),
    a = n(974930),
    r = n(988794),
    d = n(985018);
function c(e, t) {
    return {
        entity: (function (e) {
            let { entityType: t, channelId: n } = e,
                l = (0, s.k5)(e);
            return null == t || t === r.Ps.NONE
                ? "An event type must be specified."
                : (null == l || "" === l.trim()) && null == n
                  ? "Either a location or channel must be specified."
                  : void 0;
        })(e),
        schedule: (function (e, t) {
            let n = (0, a.N5)(e),
                { entityType: l } = e;
            if (null == n || n?.startDate == null) return d.intl.string(d.t.M73YyN);
            let { startDate: s, endDate: c } = n;
            return l === r.Ps.EXTERNAL && null == c
                ? d.intl.string(d.t["H16p/w"])
                : !t && s.isBefore(i()())
                  ? d.intl.string(d.t.AXR5Ss)
                  : null != c && null != s && c.isBefore(s)
                    ? d.intl.string(d.t.LpjF4K)
                    : null != c && c.isBefore(i()())
                      ? d.intl.string(d.t.ViDcm2)
                      : void 0;
        })(e, t),
        topic: (function (e) {
            let { name: t } = e;
            return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
        })(e),
    };
}
