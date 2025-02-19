n.d(t, { Z: () => O }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(570140),
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
    C = n(453879),
    v = n(408310),
    y = n(75666),
    x = n(981631),
    j = n(282458);
let O = (e) => {
    var t;
    let { channel: O, guild: N } = e,
        {
            currentCategoryId: E,
            directoryEntries: P,
            categoryCounts: I,
            allEntriesCount: S,
            isLoading: Z
        } = (0, l.cj)([m.Z], () => {
            let e = m.Z.getCurrentCategoryId(O.id),
                t = m.Z.getDirectoryEntries(O.id, e === y.AR.ALL ? null : e),
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
                a.Z.wait(() => {
                    (0, s.In)(O.id, !0, !0, e);
                });
        },
        [O.id]
    );
    let T = i.useMemo(() => (null != P ? (0, C.v)(Object.values(P), E) : null), [P, E]),
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
        [k, M] = i.useState(A),
        L = '' !== A,
        { showHubEventsList: D } = c.Z.useExperiment(
            {
                guildId: null !== (t = N.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        ),
        W = {
            mostRecentQuery: A,
            showHubEventsList: D
        },
        U = i.useRef(W);
    i.useEffect(() => {
        U.current = W;
    }),
        i.useEffect(() => {
            let { mostRecentQuery: e, showHubEventsList: t } = U.current;
            h.c$(O.id), h.YZ(O.id), t && p.c(O.id), M(e);
        }, [O.id]),
        i.useEffect(() => {
            d.default.track(x.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: O.id,
                directory_guild_id: N.id,
                primary_category_id: E
            });
        }, [O.id, N.id, E]);
    let B = (0, g.G)(O)
            ? () => {
                  (0, o.ZDy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (i = i =
                                  {
                                      directoryGuildName: N.name,
                                      directoryGuildId: N.id,
                                      directoryChannelId: O.id,
                                      currentCategoryId: E === y.AR.ALL ? null : E
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
        F = (e) => {
            0 !== k.trim().length &&
                e.charCode === x.yXg.ENTER &&
                (h.Rq(O.id, k),
                d.default.track(x.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: O.id,
                    directory_guild_id: N.id
                }));
        },
        H = () => {
            M(''), h.So(O.id);
        };
    return L
        ? (0, r.jsx)(v.Z, {
              searchQuery: k,
              setSearchQuery: M,
              mostRecentQuery: A,
              handleSearchKeyPress: F,
              handleClearSearch: H,
              handleCreateOrAddGuild: B,
              searchResults: R,
              searchFetching: w
          })
        : null == T && null == E
          ? (0, r.jsx)('div', {
                className: j.pageContainer,
                children: (0, r.jsx)(o.$jN, { className: j.spinner })
            })
          : (null == T ? void 0 : T.length) === 0 && null == E
            ? (0, r.jsx)('div', {
                  className: j.pageContainer,
                  children: (0, r.jsx)(b.Z, {
                      guild: N,
                      onAddGuild: B
                  })
              })
            : (0, r.jsx)(_.Z, {
                  channel: O,
                  searchQuery: k,
                  setSearchQuery: M,
                  handleSearchKeyPress: F,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: B,
                  currentCategoryId: E,
                  handleSelectCategory: (e) => {
                      h.Su(O.id, e);
                  },
                  directoryEntries: T,
                  categoryCounts: I,
                  allEntriesCount: S,
                  isLoading: Z
              });
};
