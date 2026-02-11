n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(334738),
    d = n(222823),
    c = n(954571),
    u = n(208882),
    h = n(938764),
    A = n(519480),
    m = n(352123),
    p = n(372536),
    g = n(491346),
    _ = n(667369),
    f = n(647026),
    x = n(946116),
    C = n(652215),
    E = n(650583),
    I = n(875514);
let b = (e) => {
    let { channel: t, guild: b } = e,
        {
            currentCategoryId: N,
            directoryEntries: S,
            categoryCounts: T,
            allEntriesCount: v,
            isLoading: y,
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
            let e = d.Ay.lastMessageId(t.id);
            null != e &&
                r.h.wait(() => {
                    (0, o.ack)(
                        t.id,
                        {
                            object: C.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: C.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let j = l.useMemo(() => (null != S ? (0, _._)(Object.values(S), N) : null), [S, N]),
        {
            mostRecentQuery: R,
            searchFetching: O,
            searchResults: L,
        } = (0, s.cf)([h.A], () => {
            let { mostRecentQuery: e, fetching: n } = h.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: h.A.getSearchResults(t.id, e) };
        }),
        [M, D] = l.useState(R),
        G = "" !== R,
        U = { mostRecentQuery: R },
        P = l.useRef(U);
    l.useEffect(() => {
        P.current = U;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e } = P.current;
            u.Yc(t.id), u.YS(t.id), D(e);
        }, [t.id]),
        l.useEffect(() => {
            c.default.track(C.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: b.id,
                primary_category_id: N,
            });
        }, [t.id, b.id, N]);
    let w = (0, m.b)(t),
        k = l.useMemo(
            () =>
                w
                    ? () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      directoryGuildName: b.name,
                                      directoryGuildId: b.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: N === x.mU.ALL ? null : N,
                                  });
                          });
                      }
                    : void 0,
            [w, b.name, b.id, t.id, N],
        ),
        V = (e) => {
            0 !== M.trim().length &&
                e.key === E.dh.ENTER &&
                (u.Se(t.id, M),
                c.default.track(C.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: b.id,
                }));
        },
        B = () => {
            D(""), u.BA(t.id);
        };
    return G
        ? (0, i.jsx)(f.A, {
              searchQuery: M,
              setSearchQuery: D,
              mostRecentQuery: R,
              handleSearchKeyPress: V,
              handleClearSearch: B,
              handleCreateOrAddGuild: k,
              searchResults: L,
              searchFetching: O,
          })
        : null == j && null == N
          ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(a.y$y, { className: I.u1 }) })
          : j?.length === 0 && null == N
            ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(p.A, { guild: b, onAddGuild: k }) })
            : (0, i.jsx)(g.A, {
                  channel: t,
                  searchQuery: M,
                  setSearchQuery: D,
                  handleSearchKeyPress: V,
                  handleClearSearch: B,
                  handleCreateOrAddGuild: k,
                  currentCategoryId: N,
                  handleSelectCategory: (e) => {
                      u.uU(t.id, e);
                  },
                  directoryEntries: j,
                  categoryCounts: T,
                  allEntriesCount: v,
                  isLoading: y,
              });
};
