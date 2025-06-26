n.d(t, { Z: () => o }), n(642613), n(388685);
var l = n(73800),
    i = n(471518),
    r = n(70956),
    a = n(314734);
function o(e) {
    let { sectionId: t, commandsByActiveSection: n } = e,
        [o, s] = l.useState(a.bS.ALPHABETICAL),
        c = l.useMemo(() => {
            var e, l;
            return null != (l = null == (e = n.find((e) => e.section.id === t)) ? void 0 : e.data) ? l : [];
        }, [n, t]),
        { popularSortedCommands: u, canSort: d } = (function (e) {
            let { alphabeticalSortedCommands: t } = e;
            return l.useMemo(() => {
                if (t.length <= 1)
                    return {
                        popularSortedCommands: t,
                        canSort: !1
                    };
                let e = !1,
                    n = t.map(
                        (t, n) => (
                            (e = e || null != t.global_popularity_rank),
                            {
                                command: t,
                                alphabeticalSortIndex: n
                            }
                        )
                    );
                return e
                    ? (n.sort((e, t) => {
                          let n = e.command.global_popularity_rank,
                              l = t.command.global_popularity_rank;
                          if (null != n && null != l) {
                              if (n !== l) return n - l;
                          } else if (null != n) return -1;
                          else if (null != l) return 1;
                          return e.alphabeticalSortIndex - t.alphabeticalSortIndex;
                      }),
                      {
                          popularSortedCommands: n.map((e) => {
                              let { command: t } = e;
                              return t;
                          }),
                          canSort: !0
                      })
                    : {
                          popularSortedCommands: t,
                          canSort: !1
                      };
            }, [t]);
        })({ alphabeticalSortedCommands: c });
    l.useEffect(() => {
        i.i6(t, { dontRefetchMs: r.Z.Millis.DAY });
    }, [t]),
        l.useLayoutEffect(() => {
            d && s(a.bS.POPULAR);
        }, [d]);
    let p = c;
    switch (o) {
        case a.bS.POPULAR:
            p = u;
            break;
        case a.bS.ALPHABETICAL:
            p = c;
    }
    return {
        sortOrder: o,
        setSortOrder: s,
        commands: p,
        canSort: d
    };
}
