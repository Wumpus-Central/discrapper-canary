n.d(t, {
    A: () => l,
}),
    n(638769),
    n(896048);
var r = n(64700),
    i = n(354138),
    a = n(927813),
    s = n(60809);

function o(e) {
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
        [l, c] = r.useState(s.Ug.ALPHABETICAL),
        u = r.useMemo(() => {
            var e, r;
            return null != (e = null == (r = n.find((e) => e.section.id === t)) ? void 0 : r.data) ? e : [];
        }, [n, t]),
        { popularSortedCommands: d, canSort: f } = o({
            alphabeticalSortedCommands: u,
        });
    r.useEffect(() => {
        let e = t;
        i.Di(e, {
            dontRefetchMs: a.A.Millis.DAY,
        });
    }, [t]),
        r.useLayoutEffect(() => {
            f && c(s.Ug.POPULAR);
        }, [f]);
    let p = u;
    switch (l) {
        case s.Ug.POPULAR:
            p = d;
            break;
        case s.Ug.ALPHABETICAL:
            p = u;
    }
    return {
        sortOrder: l,
        setSortOrder: c,
        commands: p,
        canSort: f,
    };
}
