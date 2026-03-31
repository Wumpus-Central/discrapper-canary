n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(334738),
    c = n(222823),
    d = n(954571),
    u = n(208882),
    h = n(938764),
    A = n(519480),
    _ = n(352123),
    m = n(372536),
    g = n(491346),
    p = n(667369),
    f = n(647026),
    x = n(946116),
    E = n(652215),
    I = n(650583),
    C = n(46570);
let N = (e) => {
    let { channel: t, guild: N } = e,
        {
            currentCategoryId: T,
            directoryEntries: S,
            categoryCounts: b,
            allEntriesCount: y,
            isLoading: v,
        } = (0, s.cf)([A.A], () => {
            let e = A.A.getCurrentCategoryId(t.id),
                n = A.A.getDirectoryEntries(t.id, e === x.mU.ALL ? null : e),
                i = A.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: A.A.getDirectoryAllEntriesCount(t.id),
                isLoading: A.A.isFetching(),
            };
        });
    l.useEffect(
        () => () => {
            let e = c.Ay.lastMessageId(t.id);
            null != e &&
                r.h.wait(() => {
                    (0, o.ack)(
                        t.id,
                        {
                            object: E.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: E.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let j = l.useMemo(() => (null != S ? (0, p._)(Object.values(S), T) : null), [S, T]),
        {
            mostRecentQuery: R,
            searchFetching: O,
            searchResults: L,
        } = (0, s.cf)([h.A], () => {
            let { mostRecentQuery: e, fetching: n } = h.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: h.A.getSearchResults(t.id, e) };
        }),
        [M, D] = l.useState(R),
        U = "" !== R,
        G = { mostRecentQuery: R },
        P = l.useRef(G);
    l.useEffect(() => {
        P.current = G;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e } = P.current;
            u.Yc(t.id), u.YS(t.id), D(e);
        }, [t.id]),
        l.useEffect(() => {
            d.default.track(E.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: N.id,
                primary_category_id: T,
            });
        }, [t.id, N.id, T]);
    let k = (0, _.b)(t),
        w = l.useMemo(
            () =>
                k
                    ? () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      directoryGuildName: N.name,
                                      directoryGuildId: N.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: T === x.mU.ALL ? null : T,
                                  });
                          });
                      }
                    : void 0,
            [k, N.name, N.id, t.id, T],
        ),
        B = (e) => {
            0 !== M.trim().length &&
                e.key === I.dh.ENTER &&
                (u.Se(t.id, M),
                d.default.track(E.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: N.id,
                }));
        },
        V = () => {
            D(""), u.BA(t.id);
        };
    return U
        ? (0, i.jsx)(f.A, {
              searchQuery: M,
              setSearchQuery: D,
              mostRecentQuery: R,
              handleSearchKeyPress: B,
              handleClearSearch: V,
              handleCreateOrAddGuild: w,
              searchResults: L,
              searchFetching: O,
          })
        : null == j && null == T
          ? (0, i.jsx)("div", { className: C.$$, children: (0, i.jsx)(a.y$y, { className: C.u1 }) })
          : j?.length === 0 && null == T
            ? (0, i.jsx)("div", { className: C.$$, children: (0, i.jsx)(m.A, { guild: N, onAddGuild: w }) })
            : (0, i.jsx)(g.A, {
                  channel: t,
                  searchQuery: M,
                  setSearchQuery: D,
                  handleSearchKeyPress: B,
                  handleClearSearch: V,
                  handleCreateOrAddGuild: w,
                  currentCategoryId: T,
                  handleSelectCategory: (e) => {
                      u.uU(t.id, e);
                  },
                  directoryEntries: j,
                  categoryCounts: b,
                  allEntriesCount: y,
                  isLoading: v,
              });
};
