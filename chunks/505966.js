l.d(t, { A: () => o });
var n = l(989349),
    i = l.n(n),
    s = l(9448),
    a = l(974930),
    r = l(988794),
    d = l(985018);
function o(e, t) {
    return {
        entity: (function (e) {
            let { entityType: t, channelId: l } = e,
                n = (0, s.k5)(e);
            return null == t || t === r.Ps.NONE
                ? "An event type must be specified."
                : (null == n || "" === n.trim()) && null == l
                  ? "Either a location or channel must be specified."
                  : void 0;
        })(e),
        schedule: (function (e, t) {
            let l = (0, a.N5)(e),
                { entityType: n } = e;
            if (null == l || l?.startDate == null) return d.intl.string(d.t.M73YyN);
            let { startDate: s, endDate: o } = l;
            return n === r.Ps.EXTERNAL && null == o
                ? d.intl.string(d.t["H16p/w"])
                : !t && s.isBefore(i()())
                  ? d.intl.string(d.t.AXR5Ss)
                  : null != o && null != s && o.isBefore(s)
                    ? d.intl.string(d.t.LpjF4K)
                    : null != o && o.isBefore(i()())
                      ? d.intl.string(d.t.ViDcm2)
                      : void 0;
        })(e, t),
        topic: (function (e) {
            let { name: t } = e;
            return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
        })(e),
    };
}
