n.d(t, { A: () => c }), n(733351);
var l = n(989349),
    r = n.n(l),
    i = n(9448),
    s = n(974930),
    a = n(988794),
    o = n(985018);
function c(e, t) {
    return {
        entity: (function (e) {
            let { entityType: t, channelId: n } = e,
                l = (0, i.k5)(e);
            return null == t || t === a.Ps.NONE
                ? "An event type must be specified."
                : (null == l || "" === l.trim()) && null == n
                  ? "Either a location or channel must be specified."
                  : void 0;
        })(e),
        schedule: (function (e, t) {
            let n = (0, s.N5)(e),
                { entityType: l } = e;
            if (null == n || (null == n ? void 0 : n.startDate) == null) return o.intl.string(o.t.M73YyN);
            let { startDate: i, endDate: c } = n;
            return l === a.Ps.EXTERNAL && null == c
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
