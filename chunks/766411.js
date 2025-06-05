n.d(t, { E: () => d });
var r = n(73800),
    o = n(399606),
    i = n(661111),
    a = n(706454),
    s = n(802098),
    l = n(596401);
function c(e, t) {
    let {
        changelog: n,
        loadState: a,
        defaultChangelog: c,
        defaultLoadState: d
    } = (0, o.cj)(
        [s.Z],
        () => {
            let n = null != e ? s.Z.getChangelog(e, t) : null,
                r = null != e ? s.Z.getChangelog(e, 'en-US') : null,
                o = null != e && s.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: n,
                loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: r,
                defaultLoadState: o
            };
        },
        [e, t]
    );
    return (r.useEffect(() => {
        null != e && null == n && a === l.LU.NOT_LOADED && i.Z.fetchChangelog(e, t);
    }, [e, n, a, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1
          }
        : null == n && a === l.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: c,
                loaded: d !== l.LU.NOT_LOADED
            }
          : {
                id: e,
                changelog: n,
                loaded: a !== l.LU.NOT_LOADED
            };
}
function d() {
    let e = (0, o.e7)([a.default], () => a.default.locale),
        t = (0, o.e7)([s.Z], () => s.Z.latestChangelogId()),
        n = (0, o.e7)([s.Z], () => s.Z.getConfig()),
        r = null != n && 0 === Object.keys(n).length,
        i = null != n && Object.keys(n).length > 0 && null == t,
        l = (0, o.e7)([s.Z], () => s.Z.overrideId()),
        { changelog: d, loaded: u } = c(t, e),
        { changelog: p, loaded: m } = c(l, e);
    return null == l || (null == p && m)
        ? {
              id: t,
              changelog: d,
              loaded: !!r || u,
              clientTooOld: i
          }
        : {
              id: l,
              changelog: p,
              loaded: m,
              clientTooOld: !1
          };
}
