n.d(t, { E: () => c });
var r = n(192379),
    i = n(399606),
    a = n(661111),
    o = n(706454),
    s = n(802098),
    l = n(596401);
function d(e, t) {
    let {
        changelog: n,
        loadState: o,
        defaultChangelog: d,
        defaultLoadState: c
    } = (0, i.cj)(
        [s.Z],
        () => {
            let n = null != e ? s.Z.getChangelog(e, t) : null,
                r = null != e ? s.Z.getChangelog(e, 'en-US') : null,
                i = null != e && s.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: n,
                loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: r,
                defaultLoadState: i
            };
        },
        [e, t]
    );
    return (r.useEffect(() => {
        null != e && null == n && o === l.LU.NOT_LOADED && a.Z.fetchChangelog(e, t);
    }, [e, n, o, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1
          }
        : null == n && o === l.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: d,
                loaded: c !== l.LU.NOT_LOADED
            }
          : {
                id: e,
                changelog: n,
                loaded: o !== l.LU.NOT_LOADED
            };
}
function c() {
    let e = (0, i.e7)([o.default], () => o.default.locale),
        t = (0, i.e7)([s.Z], () => s.Z.latestChangelogId()),
        n = (0, i.e7)([s.Z], () => s.Z.getConfig()),
        r = null != n && 0 === Object.keys(n).length,
        a = null != n && Object.keys(n).length > 0 && null == t,
        l = (0, i.e7)([s.Z], () => s.Z.overrideId()),
        { changelog: c, loaded: u } = d(t, e),
        { changelog: _, loaded: m } = d(l, e);
    return null == l || (null == _ && m)
        ? {
              id: t,
              changelog: c,
              loaded: !!r || u,
              clientTooOld: a
          }
        : {
              id: l,
              changelog: _,
              loaded: m,
              clientTooOld: !1
          };
}
