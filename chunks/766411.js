r.d(t, { E: () => d });
var n = r(73800),
    o = r(399606),
    i = r(661111),
    s = r(706454),
    a = r(802098),
    l = r(596401);
function c(e, t) {
    let {
        changelog: r,
        loadState: s,
        defaultChangelog: c,
        defaultLoadState: d
    } = (0, o.cj)(
        [a.Z],
        () => {
            let r = null != e ? a.Z.getChangelog(e, t) : null,
                n = null != e ? a.Z.getChangelog(e, 'en-US') : null,
                o = null != e && a.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: r,
                loadState: null != e && a.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: n,
                defaultLoadState: o
            };
        },
        [e, t]
    );
    return (n.useEffect(() => {
        null != e && null == r && s === l.LU.NOT_LOADED && i.Z.fetchChangelog(e, t);
    }, [e, r, s, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1
          }
        : null == r && s === l.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: c,
                loaded: d !== l.LU.NOT_LOADED
            }
          : {
                id: e,
                changelog: r,
                loaded: s !== l.LU.NOT_LOADED
            };
}
function d() {
    let e = (0, o.e7)([s.default], () => s.default.locale),
        t = (0, o.e7)([a.Z], () => a.Z.latestChangelogId()),
        r = (0, o.e7)([a.Z], () => a.Z.getConfig()),
        n = null != r && 0 === Object.keys(r).length,
        i = null != r && Object.keys(r).length > 0 && null == t,
        l = (0, o.e7)([a.Z], () => a.Z.overrideId()),
        { changelog: d, loaded: u } = c(t, e),
        { changelog: p, loaded: m } = c(l, e);
    return null == l || (null == p && m)
        ? {
              id: t,
              changelog: d,
              loaded: !!n || u,
              clientTooOld: i
          }
        : {
              id: l,
              changelog: p,
              loaded: m,
              clientTooOld: !1
          };
}
