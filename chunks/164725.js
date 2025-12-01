n.d(t, { d: () => d }), n(467055);
var r = n(473749),
    i = n(835473),
    a = n(768494),
    o = n(929677),
    s = n(823379);
function l(e) {
    return null != e && null != e.width && null != e.height;
}
function c(e) {
    let t = null != e ? (0, a.ym)(e) : null;
    return l(t) ? t : null;
}
function u(e, t) {
    var n, r, i, a, o, s, l, u, d, f, p, _;
    let m = e.getIconURL(16),
        h = null == t || null == (i = t.profile) || null == (r = i.data) || null == (n = r.primary) ? void 0 : n.season,
        g =
            null == t || null == (s = t.profile) || null == (o = s.data) || null == (a = o.primary)
                ? void 0
                : a.rank_name,
        E = c(
            null == t || null == (d = t.profile) || null == (u = d.data) || null == (l = u.primary)
                ? void 0
                : l.rank_image,
        ),
        b = c(
            null == t || null == (_ = t.profile) || null == (p = _.data) || null == (f = p.primary)
                ? void 0
                : f.featured_played_character_image,
        );
    return null == e || null == m || null == h || null == g || null == b
        ? null
        : {
              application: {
                  id: e.id,
                  name: e.name,
                  icon: m,
              },
              season: h,
              currentRankName: g,
              currentRankImage: E,
              featuredCharacterImage: b,
          };
}
function d(e, t) {
    let n = (0, i.Z)(t.map((e) => e.applicationId)),
        { data: a } = (0, o.O)(e);
    return r.useMemo(() => {
        var e;
        let r = Object.fromEntries(n.filter(s.lm).map((e) => [e.id, e])),
            i = Object.fromEntries(null != (e = null == a ? void 0 : a.map((e) => [e.application_id, e])) ? e : []);
        return Object.fromEntries(
            t
                .map((e) => {
                    let t = r[e.applicationId],
                        n = i[e.applicationId];
                    if (null == t || null == n) return null;
                    let a = u(t, n);
                    return null == a ? null : [e.applicationId, a];
                })
                .filter(s.lm),
        );
    }, [n, a, t]);
}
