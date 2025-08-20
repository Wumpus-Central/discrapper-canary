n.d(t, { Z: () => O }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(570140),
    s = n(45114),
    c = n(306680),
    u = n(626135),
    d = n(99325),
    p = n(866112),
    h = n(273387),
    f = n(683818),
    m = n(102888),
    g = n(65839),
    b = n(453879),
    _ = n(408310),
    y = n(75666),
    C = n(981631),
    x = n(420212),
    v = n(806328);
let O = (e) => {
    let { channel: t, guild: O } = e,
        {
            currentCategoryId: j,
            directoryEntries: E,
            categoryCounts: S,
            allEntriesCount: I,
            isLoading: P,
        } = (0, l.cj)([h.Z], () => {
            let e = h.Z.getCurrentCategoryId(t.id),
                n = h.Z.getDirectoryEntries(t.id, e === y.AR.ALL ? null : e),
                r = h.Z.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: r,
                allEntriesCount: h.Z.getDirectoryAllEntriesCount(t.id),
                isLoading: h.Z.isFetching(),
            };
        });
    i.useEffect(
        () => () => {
            let e = c.ZP.lastMessageId(t.id);
            null != e &&
                o.Z.wait(() => {
                    (0, s.In)(
                        t.id,
                        {
                            object: C.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: C.Qqv.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let Z = i.useMemo(() => (null != E ? (0, b.v)(Object.values(E), j) : null), [E, j]),
        {
            mostRecentQuery: T,
            searchFetching: N,
            searchResults: A,
        } = (0, l.cj)([p.Z], () => {
            let { mostRecentQuery: e, fetching: n } = p.Z.getSearchState(t.id);
            return {
                mostRecentQuery: e,
                searchFetching: n,
                searchResults: p.Z.getSearchResults(t.id, e),
            };
        }),
        [w, R] = i.useState(T),
        M = "" !== T,
        D = { mostRecentQuery: T },
        L = i.useRef(D);
    i.useEffect(() => {
        L.current = D;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e } = L.current;
            d.c$(t.id), d.YZ(t.id), R(e);
        }, [t.id]),
        i.useEffect(() => {
            u.default.track(C.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: O.id,
                primary_category_id: j,
            });
        }, [t.id, O.id, j]);
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
                                      directoryGuildName: O.name,
                                      directoryGuildId: O.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: j === y.AR.ALL ? null : j,
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
                e.key === x.vn.ENTER &&
                (d.Rq(t.id, w),
                u.default.track(C.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: O.id,
                }));
        },
        B = () => {
            R(""), d.So(t.id);
        };
    return M
        ? (0, r.jsx)(_.Z, {
              searchQuery: w,
              setSearchQuery: R,
              mostRecentQuery: T,
              handleSearchKeyPress: U,
              handleClearSearch: B,
              handleCreateOrAddGuild: k,
              searchResults: A,
              searchFetching: N,
          })
        : null == Z && null == j
          ? (0, r.jsx)("div", {
                className: v.pageContainer,
                children: (0, r.jsx)(a.$jN, { className: v.spinner }),
            })
          : (null == Z ? void 0 : Z.length) === 0 && null == j
            ? (0, r.jsx)("div", {
                  className: v.pageContainer,
                  children: (0, r.jsx)(m.Z, {
                      guild: O,
                      onAddGuild: k,
                  }),
              })
            : (0, r.jsx)(g.Z, {
                  channel: t,
                  searchQuery: w,
                  setSearchQuery: R,
                  handleSearchKeyPress: U,
                  handleClearSearch: B,
                  handleCreateOrAddGuild: k,
                  currentCategoryId: j,
                  handleSelectCategory: (e) => {
                      d.Su(t.id, e);
                  },
                  directoryEntries: Z,
                  categoryCounts: S,
                  allEntriesCount: I,
                  isLoading: P,
              });
};
