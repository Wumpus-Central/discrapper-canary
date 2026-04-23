n.d(t, { A: () => r });
var i = n(64700),
    l = n(354138),
    a = n(927813),
    s = n(60809);
function r(e) {
    let { sectionId: t, commandsByActiveSection: n } = e,
        [r, o] = i.useState(s.Ug.ALPHABETICAL),
        c = i.useMemo(() => n.find((e) => e.section.id === t)?.data ?? [], [n, t]),
        { popularSortedCommands: d, canSort: u } = (function (e) {
            let { alphabeticalSortedCommands: t } = e;
            return i.useMemo(() => {
                if (t.length <= 1) return { popularSortedCommands: t, canSort: !1 };
                let e = !1,
                    n = t.map(
                        (t, n) => (
                            (e = e || null != t.global_popularity_rank), { command: t, alphabeticalSortIndex: n }
                        ),
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
                          canSort: !0,
                      })
                    : { popularSortedCommands: t, canSort: !1 };
            }, [t]);
        })({ alphabeticalSortedCommands: c });
    i.useEffect(() => {
        l.Di(t, { dontRefetchMs: a.A.Millis.DAY });
    }, [t]),
        i.useLayoutEffect(() => {
            u && o(s.Ug.POPULAR);
        }, [u]);
    let m = c;
    switch (r) {
        case s.Ug.POPULAR:
            m = d;
            break;
        case s.Ug.ALPHABETICAL:
            m = c;
    }
    return { sortOrder: r, setSortOrder: o, commands: m, canSort: u };
}
