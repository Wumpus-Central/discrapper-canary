n.d(t, { A: () => x }), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(73153),
    o = n(334738),
    c = n(222823),
    u = n(954571),
    d = n(208882),
    f = n(938764),
    p = n(519480),
    h = n(352123),
    b = n(372536),
    g = n(268965),
    m = n(667369),
    A = n(647026),
    y = n(946116),
    O = n(652215),
    j = n(650583),
    v = n(10544);
let x = (e) => {
    let { channel: t, guild: x } = e,
        {
            currentCategoryId: E,
            directoryEntries: _,
            categoryCounts: C,
            allEntriesCount: S,
            isLoading: I,
        } = (0, i.cf)([p.A], () => {
            let e = p.A.getCurrentCategoryId(t.id),
                n = p.A.getDirectoryEntries(t.id, e === y.mU.ALL ? null : e),
                r = p.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: r,
                allEntriesCount: p.A.getDirectoryAllEntriesCount(t.id),
                isLoading: p.A.isFetching(),
            };
        });
    l.useEffect(
        () => () => {
            let e = c.Ay.lastMessageId(t.id);
            null != e &&
                s.h.wait(() => {
                    (0, o.ack)(
                        t.id,
                        {
                            object: O.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let N = l.useMemo(() => (null != _ ? (0, m._)(Object.values(_), E) : null), [_, E]),
        {
            mostRecentQuery: T,
            searchFetching: P,
            searchResults: w,
        } = (0, i.cf)([f.A], () => {
            let { mostRecentQuery: e, fetching: n } = f.A.getSearchState(t.id);
            return {
                mostRecentQuery: e,
                searchFetching: n,
                searchResults: f.A.getSearchResults(t.id, e),
            };
        }),
        [R, D] = l.useState(T),
        M = "" !== T,
        L = { mostRecentQuery: T },
        G = l.useRef(L);
    l.useEffect(() => {
        G.current = L;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e } = G.current;
            d.Yc(t.id), d.YS(t.id), D(e);
        }, [t.id]),
        l.useEffect(() => {
            u.default.track(O.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: x.id,
                primary_category_id: E,
            });
        }, [t.id, x.id, E]);
    let k = (0, h.b)(t),
        U = l.useMemo(
            () =>
                k
                    ? () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) => {
                                  var l, i;
                                  return (0, r.jsx)(
                                      e,
                                      ((l = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  r = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (r = r.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      }),
                                                  )),
                                                  r.forEach(function (t) {
                                                      var r;
                                                      (r = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: r,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (e[t] = r);
                                                  });
                                          }
                                          return e;
                                      })({}, n)),
                                      (i = i =
                                          {
                                              directoryGuildName: x.name,
                                              directoryGuildId: x.id,
                                              directoryChannelId: t.id,
                                              currentCategoryId: E === y.mU.ALL ? null : E,
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(i)).forEach(function (e) {
                                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                            }),
                                      l),
                                  );
                              };
                          });
                      }
                    : void 0,
            [k, x.name, x.id, t.id, E],
        ),
        V = (e) => {
            0 !== R.trim().length &&
                e.key === j.dh.ENTER &&
                (d.Se(t.id, R),
                u.default.track(O.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: x.id,
                }));
        },
        F = () => {
            D(""), d.BA(t.id);
        };
    return M
        ? (0, r.jsx)(A.A, {
              searchQuery: R,
              setSearchQuery: D,
              mostRecentQuery: T,
              handleSearchKeyPress: V,
              handleClearSearch: F,
              handleCreateOrAddGuild: U,
              searchResults: w,
              searchFetching: P,
          })
        : null == N && null == E
          ? (0, r.jsx)("div", {
                className: v.$$,
                children: (0, r.jsx)(a.y$y, { className: v.u1 }),
            })
          : (null == N ? void 0 : N.length) === 0 && null == E
            ? (0, r.jsx)("div", {
                  className: v.$$,
                  children: (0, r.jsx)(b.A, {
                      guild: x,
                      onAddGuild: U,
                  }),
              })
            : (0, r.jsx)(g.A, {
                  channel: t,
                  searchQuery: R,
                  setSearchQuery: D,
                  handleSearchKeyPress: V,
                  handleClearSearch: F,
                  handleCreateOrAddGuild: U,
                  currentCategoryId: E,
                  handleSelectCategory: (e) => {
                      d.uU(t.id, e);
                  },
                  directoryEntries: N,
                  categoryCounts: C,
                  allEntriesCount: S,
                  isLoading: I,
              });
};
