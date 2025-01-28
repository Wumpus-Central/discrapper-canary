t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var i = t(192379),
    l = t(674588),
    a = t(70956),
    o = t(314734);
function r(e) {
    let { sectionId: n, commandsByActiveSection: t } = e,
        [r, s] = i.useState(o.bS.ALPHABETICAL),
        c = i.useMemo(() => {
            var e, i;
            return null !== (i = null === (e = t.find((e) => e.section.id === n)) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : [];
        }, [t, n]),
        { popularSortedCommands: d, canSort: u } = (function (e) {
            let { alphabeticalSortedCommands: n } = e;
            return i.useMemo(() => {
                if (n.length <= 1)
                    return {
                        popularSortedCommands: n,
                        canSort: !1
                    };
                let e = !1,
                    t = n.map(
                        (n, t) => (
                            (e = e || null != n.global_popularity_rank),
                            {
                                command: n,
                                alphabeticalSortIndex: t
                            }
                        )
                    );
                return e
                    ? (t.sort((e, n) => {
                          let t = e.command.global_popularity_rank,
                              i = n.command.global_popularity_rank;
                          if (null != t && null != i) {
                              if (t !== i) return t - i;
                          } else if (null != t) return -1;
                          else if (null != i) return 1;
                          return e.alphabeticalSortIndex - n.alphabeticalSortIndex;
                      }),
                      {
                          popularSortedCommands: t.map((e) => {
                              let { command: n } = e;
                              return n;
                          }),
                          canSort: !0
                      })
                    : {
                          popularSortedCommands: n,
                          canSort: !1
                      };
            }, [n]);
        })({ alphabeticalSortedCommands: c });
    i.useEffect(() => {
        l.i6(n, { dontRefetchMs: a.Z.Millis.DAY });
    }, [n]),
        i.useLayoutEffect(() => {
            if (!!u) s(o.bS.POPULAR);
        }, [u]);
    let m = c;
    switch (r) {
        case o.bS.POPULAR:
            m = d;
            break;
        case o.bS.ALPHABETICAL:
            m = c;
    }
    return {
        sortOrder: r,
        setSortOrder: s,
        commands: m,
        canSort: u
    };
}
