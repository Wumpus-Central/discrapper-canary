n.d(t, { Z: () => o }), n(230036), n(47120);
var i = n(192379),
    r = n(471518),
    l = n(70956),
    a = n(314734);
function o(e) {
    let { sectionId: t, commandsByActiveSection: n } = e,
        [o, c] = i.useState(a.bS.ALPHABETICAL),
        s = i.useMemo(() => {
            var e, i;
            return null != (i = null == (e = n.find((e) => e.section.id === t)) ? void 0 : e.data) ? i : [];
        }, [n, t]),
        { popularSortedCommands: u, canSort: d } = (function (e) {
            let { alphabeticalSortedCommands: t } = e;
            return i.useMemo(() => {
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
                              i = t.command.global_popularity_rank;
                          if (null != n && null != i) {
                              if (n !== i) return n - i;
                          } else if (null != n) return -1;
                          else if (null != i) return 1;
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
        })({ alphabeticalSortedCommands: s });
    i.useEffect(() => {
        r.i6(t, { dontRefetchMs: l.Z.Millis.DAY });
    }, [t]),
        i.useLayoutEffect(() => {
            d && c(a.bS.POPULAR);
        }, [d]);
    let p = s;
    switch (o) {
        case a.bS.POPULAR:
            p = u;
            break;
        case a.bS.ALPHABETICAL:
            p = s;
    }
    return {
        sortOrder: o,
        setSortOrder: c,
        commands: p,
        canSort: d
    };
}
