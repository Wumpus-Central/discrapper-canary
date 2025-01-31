n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    l = n(674588),
    a = n(70956),
    o = n(314734);
function s(e) {
    let { sectionId: t, commandsByActiveSection: n } = e,
        [s, r] = i.useState(o.bS.ALPHABETICAL),
        c = i.useMemo(() => {
            var e, i;
            return null !== (i = null === (e = n.find((e) => e.section.id === t)) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : [];
        }, [n, t]),
        { popularSortedCommands: d, canSort: u } = (function (e) {
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
        })({ alphabeticalSortedCommands: c });
    i.useEffect(() => {
        l.i6(t, { dontRefetchMs: a.Z.Millis.DAY });
    }, [t]),
        i.useLayoutEffect(() => {
            u && r(o.bS.POPULAR);
        }, [u]);
    let m = c;
    switch (s) {
        case o.bS.POPULAR:
            m = d;
            break;
        case o.bS.ALPHABETICAL:
            m = c;
    }
    return {
        sortOrder: s,
        setSortOrder: r,
        commands: m,
        canSort: u
    };
}
