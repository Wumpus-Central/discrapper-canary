n.d(t, { Z: () => v }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(306680),
    d = n(626135),
    u = n(99325),
    p = n(866112),
    h = n(273387),
    f = n(683818),
    g = n(102888),
    m = n(756195),
    b = n(453879),
    _ = n(408310),
    y = n(75666),
    O = n(981631),
    x = n(295907),
    j = n(806328);
let v = (e) => {
    let { channel: t, guild: v } = e,
        {
            currentCategoryId: C,
            directoryEntries: I,
            categoryCounts: S,
            allEntriesCount: E,
            isLoading: Z,
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
                s.Z.wait(() => {
                    (0, o.ack)(
                        t.id,
                        {
                            object: O.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
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
    let P = i.useMemo(() => (null != I ? (0, b.v)(Object.values(I), C) : null), [I, C]),
        {
            mostRecentQuery: T,
            searchFetching: N,
            searchResults: R,
        } = (0, l.cj)([p.Z], () => {
            let { mostRecentQuery: e, fetching: n } = p.Z.getSearchState(t.id);
            return {
                mostRecentQuery: e,
                searchFetching: n,
                searchResults: p.Z.getSearchResults(t.id, e),
            };
        }),
        [w, A] = i.useState(T),
        D = "" !== T,
        L = { mostRecentQuery: T },
        M = i.useRef(L);
    i.useEffect(() => {
        M.current = L;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e } = M.current;
            u.c$(t.id), u.YZ(t.id), A(e);
        }, [t.id]),
        i.useEffect(() => {
            d.default.track(O.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: v.id,
                primary_category_id: C,
            });
        }, [t.id, v.id, C]);
    let k = (0, f.G)(t),
        U = i.useMemo(
            () =>
                k
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
                                              currentCategoryId: C === y.AR.ALL ? null : C,
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
            [k, v.name, v.id, t.id, C],
        ),
        G = (e) => {
            0 !== w.trim().length &&
                e.key === x.vn.ENTER &&
                (u.Rq(t.id, w),
                d.default.track(O.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: v.id,
                }));
        },
        H = () => {
            A(""), u.So(t.id);
        };
    return D
        ? (0, r.jsx)(_.Z, {
              searchQuery: w,
              setSearchQuery: A,
              mostRecentQuery: T,
              handleSearchKeyPress: G,
              handleClearSearch: H,
              handleCreateOrAddGuild: U,
              searchResults: R,
              searchFetching: N,
          })
        : null == P && null == C
          ? (0, r.jsx)("div", {
                className: j.pageContainer,
                children: (0, r.jsx)(a.$jN, { className: j.spinner }),
            })
          : (null == P ? void 0 : P.length) === 0 && null == C
            ? (0, r.jsx)("div", {
                  className: j.pageContainer,
                  children: (0, r.jsx)(g.Z, {
                      guild: v,
                      onAddGuild: U,
                  }),
              })
            : (0, r.jsx)(m.Z, {
                  channel: t,
                  searchQuery: w,
                  setSearchQuery: A,
                  handleSearchKeyPress: G,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: U,
                  currentCategoryId: C,
                  handleSelectCategory: (e) => {
                      u.Su(t.id, e);
                  },
                  directoryEntries: P,
                  categoryCounts: S,
                  allEntriesCount: E,
                  isLoading: Z,
              });
};
