n.d(t, { Z: () => v }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(306680),
    d = n(626135),
    u = n(99325),
    h = n(866112),
    p = n(273387),
    f = n(683818),
    g = n(102888),
    m = n(65839),
    b = n(453879),
    y = n(408310),
    _ = n(75666),
    j = n(981631),
    O = n(295907),
    x = n(806328);
let v = (e) => {
    let { channel: t, guild: v } = e,
        {
            currentCategoryId: C,
            directoryEntries: I,
            categoryCounts: S,
            allEntriesCount: E,
            isLoading: Z,
        } = (0, l.cj)([p.Z], () => {
            let e = p.Z.getCurrentCategoryId(t.id),
                n = p.Z.getDirectoryEntries(t.id, e === _.AR.ALL ? null : e),
                r = p.Z.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: r,
                allEntriesCount: p.Z.getDirectoryAllEntriesCount(t.id),
                isLoading: p.Z.isFetching(),
            };
        });
    i.useEffect(
        () => () => {
            let e = c.ZP.lastMessageId(t.id);
            null != e &&
                s.Z.wait(() => {
                    (0, o.In)(
                        t.id,
                        {
                            object: j.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: j.Qqv.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let T = i.useMemo(() => (null != I ? (0, b.v)(Object.values(I), C) : null), [I, C]),
        {
            mostRecentQuery: P,
            searchFetching: N,
            searchResults: R,
        } = (0, l.cj)([h.Z], () => {
            let { mostRecentQuery: e, fetching: n } = h.Z.getSearchState(t.id);
            return {
                mostRecentQuery: e,
                searchFetching: n,
                searchResults: h.Z.getSearchResults(t.id, e),
            };
        }),
        [w, A] = i.useState(P),
        D = "" !== P,
        L = { mostRecentQuery: P },
        M = i.useRef(L);
    i.useEffect(() => {
        M.current = L;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e } = M.current;
            u.c$(t.id), u.YZ(t.id), A(e);
        }, [t.id]),
        i.useEffect(() => {
            d.default.track(j.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: v.id,
                primary_category_id: C,
            });
        }, [t.id, v.id, C]);
    let k = (0, f.G)(t)
            ? () => {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await n.e("79764").then(n.bind(n, 533202));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
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
                              (l = l =
                                  {
                                      directoryGuildName: v.name,
                                      directoryGuildId: v.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: C === _.AR.ALL ? null : C,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i),
                          );
                      };
                  });
              }
            : void 0,
        U = (e) => {
            0 !== w.trim().length &&
                e.key === O.vn.ENTER &&
                (u.Rq(t.id, w),
                d.default.track(j.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: v.id,
                }));
        },
        G = () => {
            A(""), u.So(t.id);
        };
    return D
        ? (0, r.jsx)(y.Z, {
              searchQuery: w,
              setSearchQuery: A,
              mostRecentQuery: P,
              handleSearchKeyPress: U,
              handleClearSearch: G,
              handleCreateOrAddGuild: k,
              searchResults: R,
              searchFetching: N,
          })
        : null == T && null == C
          ? (0, r.jsx)("div", {
                className: x.pageContainer,
                children: (0, r.jsx)(a.$jN, { className: x.spinner }),
            })
          : (null == T ? void 0 : T.length) === 0 && null == C
            ? (0, r.jsx)("div", {
                  className: x.pageContainer,
                  children: (0, r.jsx)(g.Z, {
                      guild: v,
                      onAddGuild: k,
                  }),
              })
            : (0, r.jsx)(m.Z, {
                  channel: t,
                  searchQuery: w,
                  setSearchQuery: A,
                  handleSearchKeyPress: U,
                  handleClearSearch: G,
                  handleCreateOrAddGuild: k,
                  currentCategoryId: C,
                  handleSelectCategory: (e) => {
                      u.Su(t.id, e);
                  },
                  directoryEntries: T,
                  categoryCounts: S,
                  allEntriesCount: E,
                  isLoading: Z,
              });
};
