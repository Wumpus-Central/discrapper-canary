n.d(t, { E: () => d });
var r = n(647438),
    o = n(399606),
    a = n(661111),
    i = n(706454),
    s = n(802098),
    l = n(596401);
function c(e, t) {
    let {
        changelog: n,
        loadState: i,
        defaultChangelog: c,
        defaultLoadState: d,
    } = (0, o.cj)([s.Z], () => {
        let n = null != e ? s.Z.getChangelog(e, t) : null,
            r = null != e ? s.Z.getChangelog(e, "en-US") : null,
            o = null != e && s.Z.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: n,
            loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
            defaultChangelog: r,
            defaultLoadState: o,
        };
    }, [e, t]);
    return (r.useEffect(() => {
        null != e && null == n && i === l.LU.NOT_LOADED && a.Z.fetchChangelog(e, t);
    }, [e, n, i, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1,
          }
        : null == n && i === l.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: c,
                loaded: d !== l.LU.NOT_LOADED,
            }
          : {
                id: e,
                changelog: n,
                loaded: i !== l.LU.NOT_LOADED,
            };
}
function d() {
    let e = (0, o.e7)([i.default], () => i.default.locale),
        t = (0, o.e7)([s.Z], () => s.Z.latestChangelogId()),
        n = (0, o.e7)([s.Z], () => s.Z.getConfig()),
        r = null != n && 0 === Object.keys(n).length,
        a = null != n && Object.keys(n).length > 0 && null == t,
        l = (0, o.e7)([s.Z], () => s.Z.overrideId()),
        { changelog: d, loaded: u } = c(t, e),
        { changelog: p, loaded: m } = c(l, e);
    return null == l || (null == p && m)
        ? {
              id: t,
              changelog: d,
              loaded: !!r || u,
              clientTooOld: a,
          }
        : {
              id: l,
              changelog: p,
              loaded: m,
              clientTooOld: !1,
          };
}
