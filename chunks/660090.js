n.d(t, { Z: () => l }), n(642613), n(388685);
var r = n(647438),
    i = n(471518),
    a = n(70956),
    o = n(314734);
function s(e) {
    let { alphabeticalSortedCommands: t } = e;
    return r.useMemo(() => {
        if (t.length <= 1)
            return {
                popularSortedCommands: t,
                canSort: !1,
            };
        let e = !1,
            n = t.map(
                (t, n) => (
                    (e = e || null != t.global_popularity_rank),
                    {
                        command: t,
                        alphabeticalSortIndex: n,
                    }
                ),
            );
        return e
            ? (n.sort((e, t) => {
                  let n = e.command.global_popularity_rank,
                      r = t.command.global_popularity_rank;
                  if (null != n && null != r) {
                      if (n !== r) return n - r;
                  } else if (null != n) return -1;
                  else if (null != r) return 1;
                  return e.alphabeticalSortIndex - t.alphabeticalSortIndex;
              }),
              {
                  popularSortedCommands: n.map((e) => {
                      let { command: t } = e;
                      return t;
                  }),
                  canSort: !0,
              })
            : {
                  popularSortedCommands: t,
                  canSort: !1,
              };
    }, [t]);
}
function l(e) {
    let { sectionId: t, commandsByActiveSection: n } = e,
        [l, c] = r.useState(o.bS.ALPHABETICAL),
        u = r.useMemo(() => {
            var e, r;
            return null != (r = null == (e = n.find((e) => e.section.id === t)) ? void 0 : e.data) ? r : [];
        }, [n, t]),
        { popularSortedCommands: d, canSort: f } = s({ alphabeticalSortedCommands: u });
    r.useEffect(() => {
        let e = t;
        i.i6(e, { dontRefetchMs: a.Z.Millis.DAY });
    }, [t]),
        r.useLayoutEffect(() => {
            f && c(o.bS.POPULAR);
        }, [f]);
    let _ = u;
    switch (l) {
        case o.bS.POPULAR:
            _ = d;
            break;
        case o.bS.ALPHABETICAL:
            _ = u;
    }
    return {
        sortOrder: l,
        setSortOrder: c,
        commands: _,
        canSort: f,
    };
}
