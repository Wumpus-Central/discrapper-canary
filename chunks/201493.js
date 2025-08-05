(n.d(t, { Z: () => C }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(147754),
    d = n(306680),
    u = n(626135),
    h = n(597),
    p = n(99325),
    f = n(866112),
    g = n(273387),
    m = n(683818),
    b = n(102888),
    _ = n(65839),
    y = n(453879),
    j = n(408310),
    O = n(75666),
    x = n(981631),
    v = n(400816);
let C = (e) => {
    var t;
    let { channel: C, guild: E } = e,
        {
            currentCategoryId: Z,
            directoryEntries: I,
            categoryCounts: S,
            allEntriesCount: P,
            isLoading: T
        } = (0, l.cj)([g.Z], () => {
            let e = g.Z.getCurrentCategoryId(C.id),
                t = g.Z.getDirectoryEntries(C.id, e === O.AR.ALL ? null : e),
                n = g.Z.getDirectoryCategoryCounts(C.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: n,
                allEntriesCount: g.Z.getDirectoryAllEntriesCount(C.id),
                isLoading: g.Z.isFetching()
            };
        });
    i.useEffect(
        () => () => {
            let e = d.ZP.lastMessageId(C.id);
            null != e &&
                s.Z.wait(() => {
                    (0, o.In)(
                        C.id,
                        {
                            object: x.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: x.Qqv.ACK_AUTOMATIC
                        },
                        !0,
                        !0,
                        e
                    );
                });
        },
        [C.id]
    );
    let N = i.useMemo(() => (null != I ? (0, y.v)(Object.values(I), Z) : null), [I, Z]),
        {
            mostRecentQuery: w,
            searchFetching: R,
            searchResults: A
        } = (0, l.cj)([f.Z], () => {
            let { mostRecentQuery: e, fetching: t } = f.Z.getSearchState(C.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: f.Z.getSearchResults(C.id, e)
            };
        }),
        [D, L] = i.useState(w),
        M = '' !== w,
        { showHubEventsList: k } = c.Z.useExperiment(
            {
                guildId: null != (t = E.id) ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        ),
        U = {
            mostRecentQuery: w,
            showHubEventsList: k
        },
        G = i.useRef(U);
    (i.useEffect(() => {
        G.current = U;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e, showHubEventsList: t } = G.current;
            (p.c$(C.id), p.YZ(C.id), t && h.c(C.id), L(e));
        }, [C.id]),
        i.useEffect(() => {
            u.default.track(x.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: C.id,
                directory_guild_id: E.id,
                primary_category_id: Z
            });
        }, [C.id, E.id, Z]));
    let F = (0, m.G)(C)
            ? () => {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, t)),
                              (i = i =
                                  {
                                      directoryGuildName: E.name,
                                      directoryGuildId: E.id,
                                      directoryChannelId: C.id,
                                      currentCategoryId: Z === O.AR.ALL ? null : Z
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n)
                          );
                      };
                  });
              }
            : void 0,
        B = (e) => {
            0 !== D.trim().length &&
                e.charCode === x.yXg.ENTER &&
                (p.Rq(C.id, D),
                u.default.track(x.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: C.id,
                    directory_guild_id: E.id
                }));
        },
        H = () => {
            (L(''), p.So(C.id));
        };
    return M
        ? (0, r.jsx)(j.Z, {
              searchQuery: D,
              setSearchQuery: L,
              mostRecentQuery: w,
              handleSearchKeyPress: B,
              handleClearSearch: H,
              handleCreateOrAddGuild: F,
              searchResults: A,
              searchFetching: R
          })
        : null == N && null == Z
          ? (0, r.jsx)('div', {
                className: v.pageContainer,
                children: (0, r.jsx)(a.$jN, { className: v.spinner })
            })
          : (null == N ? void 0 : N.length) === 0 && null == Z
            ? (0, r.jsx)('div', {
                  className: v.pageContainer,
                  children: (0, r.jsx)(b.Z, {
                      guild: E,
                      onAddGuild: F
                  })
              })
            : (0, r.jsx)(_.Z, {
                  channel: C,
                  searchQuery: D,
                  setSearchQuery: L,
                  handleSearchKeyPress: B,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: F,
                  currentCategoryId: Z,
                  handleSelectCategory: (e) => {
                      p.Su(C.id, e);
                  },
                  directoryEntries: N,
                  categoryCounts: S,
                  allEntriesCount: P,
                  isLoading: T
              });
};
