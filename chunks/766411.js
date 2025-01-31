n.d(t, { E: () => c });
var r = n(192379),
    i = n(399606),
    d = n(661111),
    o = n(706454),
    a = n(802098),
    l = n(596401);
function s(e, t) {
    let {
        changelog: n,
        loadState: o,
        defaultChangelog: s,
        defaultLoadState: c
    } = (0, i.cj)(
        [a.Z],
        () => {
            let n = null != e ? a.Z.getChangelog(e, t) : null,
                r = null != e ? a.Z.getChangelog(e, 'en-US') : null,
                i = null != e && a.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: n,
                loadState: null != e && a.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: r,
                defaultLoadState: i
            };
        },
        [e, t]
    );
    return (r.useEffect(() => {
        null != e && null == n && o === l.LU.NOT_LOADED && d.Z.fetchChangelog(e, t);
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
                changelog: s,
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
        t = (0, i.e7)([a.Z], () => a.Z.latestChangelogId()),
        n = (0, i.e7)([a.Z], () => a.Z.getConfig()),
        r = null != n && 0 === Object.keys(n).length,
        d = null != n && Object.keys(n).length > 0 && null == t,
        l = (0, i.e7)([a.Z], () => a.Z.overrideId()),
        { changelog: c, loaded: m } = s(t, e),
        { changelog: _, loaded: h } = s(l, e);
    return null == l || (null == _ && h)
        ? {
              id: t,
              changelog: c,
              loaded: !!r || m,
              clientTooOld: d
          }
        : {
              id: l,
              changelog: _,
              loaded: h,
              clientTooOld: !1
          };
}
