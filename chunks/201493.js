n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(570140),
    o = n(45114),
    c = n(147754),
    d = n(306680),
    u = n(626135),
    h = n(597),
    p = n(99325),
    m = n(866112),
    f = n(273387),
    g = n(683818),
    _ = n(102888),
    C = n(65839),
    x = n(453879),
    v = n(408310),
    E = n(486527),
    I = n(981631),
    b = n(405143);
let Z = (e) => {
    var t;
    let { channel: Z, guild: N } = e,
        {
            currentCategoryId: T,
            directoryEntries: S,
            categoryCounts: j,
            allEntriesCount: A,
            isLoading: y
        } = (0, a.cj)([f.Z], () => {
            let e = f.Z.getCurrentCategoryId(Z.id),
                t = f.Z.getDirectoryEntries(Z.id, e === E.AR.ALL ? null : e),
                n = f.Z.getDirectoryCategoryCounts(Z.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: n,
                allEntriesCount: f.Z.getDirectoryAllEntriesCount(Z.id),
                isLoading: f.Z.isFetching()
            };
        });
    l.useEffect(
        () => () => {
            let e = d.ZP.lastMessageId(Z.id);
            null != e &&
                s.Z.wait(() => {
                    (0, o.In)(Z.id, !0, !0, e);
                });
        },
        [Z.id]
    );
    let P = l.useMemo(() => (null != S ? (0, x.v)(Object.values(S), T) : null), [S, T]),
        {
            mostRecentQuery: R,
            searchFetching: M,
            searchResults: L
        } = (0, a.cj)([m.Z], () => {
            let { mostRecentQuery: e, fetching: t } = m.Z.getSearchState(Z.id);
            return {
                mostRecentQuery: e,
                searchFetching: t,
                searchResults: m.Z.getSearchResults(Z.id, e)
            };
        }),
        [k, O] = l.useState(R),
        D = '' !== R,
        { showHubEventsList: w } = c.Z.useExperiment(
            {
                guildId: null !== (t = N.id) && void 0 !== t ? t : '',
                location: '6f7fb0_1'
            },
            { autoTrackExposure: !1 }
        ),
        U = {
            mostRecentQuery: R,
            showHubEventsList: w
        },
        B = l.useRef(U);
    l.useEffect(() => {
        B.current = U;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e, showHubEventsList: t } = B.current;
            p.c$(Z.id), p.YZ(Z.id), t && h.c(Z.id), O(e);
        }, [Z.id]),
        l.useEffect(() => {
            u.default.track(I.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: Z.id,
                directory_guild_id: N.id,
                primary_category_id: T
            });
        }, [Z.id, N.id, T]);
    let F = (0, g.G)(Z)
            ? () => {
                  (0, r.ZDy)(async () => {
                      let { default: e } = await n.e('79764').then(n.bind(n, 533202));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              directoryGuildName: N.name,
                              directoryGuildId: N.id,
                              directoryChannelId: Z.id,
                              currentCategoryId: T === E.AR.ALL ? null : T
                          });
                  });
              }
            : void 0,
        H = (e) => {
            0 !== k.trim().length &&
                e.charCode === I.yXg.ENTER &&
                (p.Rq(Z.id, k),
                u.default.track(I.rMx.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: Z.id,
                    directory_guild_id: N.id
                }));
        },
        G = () => {
            O(''), p.So(Z.id);
        };
    return D
        ? (0, i.jsx)(v.Z, {
              searchQuery: k,
              setSearchQuery: O,
              mostRecentQuery: R,
              handleSearchKeyPress: H,
              handleClearSearch: G,
              handleCreateOrAddGuild: F,
              searchResults: L,
              searchFetching: M
          })
        : null == P && null == T
          ? (0, i.jsx)('div', {
                className: b.pageContainer,
                children: (0, i.jsx)(r.$jN, { className: b.spinner })
            })
          : (null == P ? void 0 : P.length) === 0 && null == T
            ? (0, i.jsx)('div', {
                  className: b.pageContainer,
                  children: (0, i.jsx)(_.Z, {
                      guild: N,
                      onAddGuild: F
                  })
              })
            : (0, i.jsx)(C.Z, {
                  channel: Z,
                  searchQuery: k,
                  setSearchQuery: O,
                  handleSearchKeyPress: H,
                  handleClearSearch: G,
                  handleCreateOrAddGuild: F,
                  currentCategoryId: T,
                  handleSelectCategory: (e) => {
                      p.Su(Z.id, e);
                  },
                  directoryEntries: P,
                  categoryCounts: j,
                  allEntriesCount: A,
                  isLoading: y
              });
};
