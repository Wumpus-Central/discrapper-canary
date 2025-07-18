(n.d(t, { Z: () => O }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(570140),
    s = n(45114),
    c = n(147754),
    u = n(306680),
    d = n(626135),
    p = n(597),
    h = n(99325),
    f = n(866112),
    m = n(273387),
    g = n(683818),
    b = n(102888),
    _ = n(65839),
    y = n(453879),
    C = n(408310),
    x = n(75666),
    v = n(981631),
    j = n(400816);
let O = (e) => {
    var t;
    let { channel: O, guild: E } = e,
        {
            currentCategoryId: S,
            directoryEntries: P,
            categoryCounts: I,
            allEntriesCount: Z,
            isLoading: T
        } = (0, l.cj)([m.Z], () => {
            let e = m.Z.getCurrentCategoryId(O.id),
                t = m.Z.getDirectoryEntries(O.id, e === x.AR.ALL ? null : e),
                n = m.Z.getDirectoryCategoryCounts(O.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: n,
                allEntriesCount: m.Z.getDirectoryAllEntriesCount(O.id),
                isLoading: m.Z.isFetching()
            };
        });
    i.useEffect(
        () => () => {
            let e = u.ZP.lastMessageId(O.id);
            null != e &&
                o.Z.wait(() => {
                    (0, s.In)(
                        O.id,
                        {
                            object: v.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: v.Qqv.ACK_AUTOMATIC
                        },
                        !0,
                        !0,
                        e
                    );
                });
        },
        [O.id]
    );
    let N = i.useMemo(() => (null != P ? (0, y.v)(Object.values(P), S) : null), [P, S]),
        {
            mostRecentQuery: A,
            searchFetching: w,
            searchResults: R
        } = (0, l.cj)([f.Z], () => {
            let { mostRecentQuery: e, fetching: t } = f.Z.getSearchState(O.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: f.Z.getSearchResults(O.id, e)
            };
        }),
        [M, D] = i.useState(A),
        L = '' !== A,
        { showHubEventsList: k } = c.Z.useExperiment(
            {
                guildId: null != (t = E.id) ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        ),
        U = {
            mostRecentQuery: A,
            showHubEventsList: k
        },
        B = i.useRef(U);
    (i.useEffect(() => {
        B.current = U;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e, showHubEventsList: t } = B.current;
            (h.c$(O.id), h.YZ(O.id), t && p.c(O.id), D(e));
        }, [O.id]),
        i.useEffect(() => {
            d.default.track(v.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: O.id,
                directory_guild_id: E.id,
                primary_category_id: S
            });
        }, [O.id, E.id, S]));
    let F = (0, g.G)(O)
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
                                      directoryChannelId: O.id,
                                      currentCategoryId: S === x.AR.ALL ? null : S
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
        H = (e) => {
            0 !== M.trim().length &&
                e.charCode === v.yXg.ENTER &&
                (h.Rq(O.id, M),
                d.default.track(v.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: O.id,
                    directory_guild_id: E.id
                }));
        },
        G = () => {
            (D(''), h.So(O.id));
        };
    return L
        ? (0, r.jsx)(C.Z, {
              searchQuery: M,
              setSearchQuery: D,
              mostRecentQuery: A,
              handleSearchKeyPress: H,
              handleClearSearch: G,
              handleCreateOrAddGuild: F,
              searchResults: R,
              searchFetching: w
          })
        : null == N && null == S
          ? (0, r.jsx)('div', {
                className: j.pageContainer,
                children: (0, r.jsx)(a.$jN, { className: j.spinner })
            })
          : (null == N ? void 0 : N.length) === 0 && null == S
            ? (0, r.jsx)('div', {
                  className: j.pageContainer,
                  children: (0, r.jsx)(b.Z, {
                      guild: E,
                      onAddGuild: F
                  })
              })
            : (0, r.jsx)(_.Z, {
                  channel: O,
                  searchQuery: M,
                  setSearchQuery: D,
                  handleSearchKeyPress: H,
                  handleClearSearch: G,
                  handleCreateOrAddGuild: F,
                  currentCategoryId: S,
                  handleSelectCategory: (e) => {
                      h.Su(O.id, e);
                  },
                  directoryEntries: N,
                  categoryCounts: I,
                  allEntriesCount: Z,
                  isLoading: T
              });
};
