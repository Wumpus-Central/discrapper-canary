n.d(t, { E: () => d });
var r = n(647438),
    o = n(399606),
    a = n(661111),
    i = n(706454),
    l = n(802098),
    c = n(596401);
function s(e, t) {
    let {
        changelog: n,
        loadState: i,
        defaultChangelog: s,
        defaultLoadState: d,
    } = (0, o.cj)([l.Z], () => {
        let n = null != e ? l.Z.getChangelog(e, t) : null,
            r = null != e ? l.Z.getChangelog(e, "en-US") : null,
            o = null != e && l.Z.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: n,
            loadState: null != e && l.Z.getChangelogLoadStatus(e, t),
            defaultChangelog: r,
            defaultLoadState: o,
        };
    }, [e, t]);
    return (r.useEffect(() => {
        null != e && null == n && i === c.LU.NOT_LOADED && a.Z.fetchChangelog(e, t);
    }, [e, n, i, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1,
          }
        : null == n && i === c.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: s,
                loaded: d !== c.LU.NOT_LOADED,
            }
          : {
                id: e,
                changelog: n,
                loaded: i !== c.LU.NOT_LOADED,
            };
}
function d() {
    let e = (0, o.e7)([i.default], () => i.default.locale),
        t = (0, o.e7)([l.Z], () => l.Z.latestChangelogId()),
        n = (0, o.e7)([l.Z], () => l.Z.getConfig()),
        r = null != n && 0 === Object.keys(n).length,
        a = null != n && Object.keys(n).length > 0 && null == t,
        c = (0, o.e7)([l.Z], () => l.Z.overrideId()),
        { changelog: d, loaded: u } = s(t, e),
        { changelog: m, loaded: p } = s(c, e);
    return null == c || (null == m && p)
        ? {
              id: t,
              changelog: d,
              loaded: !!r || u,
              clientTooOld: a,
          }
        : {
              id: c,
              changelog: m,
              loaded: p,
              clientTooOld: !1,
          };
}
