n.d(t, { A: () => S });
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
    g = n(352123),
    m = n(372536),
    p = n(268965),
    _ = n(667369),
    x = n(647026),
    f = n(946116),
    E = n(652215),
    C = n(650583),
    I = n(10544);
let S = (e) => {
    let { channel: t, guild: S } = e,
        {
            currentCategoryId: b,
            directoryEntries: N,
            categoryCounts: T,
            allEntriesCount: j,
            isLoading: v,
        } = (0, s.cf)([A.A], () => {
            let e = A.A.getCurrentCategoryId(t.id),
                n = A.A.getDirectoryEntries(t.id, e === f.mU.ALL ? null : e),
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
    let y = l.useMemo(() => (null != N ? (0, _._)(Object.values(N), b) : null), [N, b]),
        {
            mostRecentQuery: R,
            searchFetching: O,
            searchResults: L,
        } = (0, s.cf)([h.A], () => {
            let { mostRecentQuery: e, fetching: n } = h.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: h.A.getSearchResults(t.id, e) };
        }),
        [D, M] = l.useState(R),
        G = "" !== R,
        U = { mostRecentQuery: R },
        P = l.useRef(U);
    l.useEffect(() => {
        P.current = U;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e } = P.current;
            u.Yc(t.id), u.YS(t.id), M(e);
        }, [t.id]),
        l.useEffect(() => {
            c.default.track(E.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: S.id,
                primary_category_id: b,
            });
        }, [t.id, S.id, b]);
    let k = (0, g.b)(t),
        w = l.useMemo(
            () =>
                k
                    ? () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      directoryGuildName: S.name,
                                      directoryGuildId: S.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: b === f.mU.ALL ? null : b,
                                  });
                          });
                      }
                    : void 0,
            [k, S.name, S.id, t.id, b],
        ),
        V = (e) => {
            0 !== D.trim().length &&
                e.key === C.dh.ENTER &&
                (u.Se(t.id, D),
                c.default.track(E.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: S.id,
                }));
        },
        B = () => {
            M(""), u.BA(t.id);
        };
    return G
        ? (0, i.jsx)(x.A, {
              searchQuery: D,
              setSearchQuery: M,
              mostRecentQuery: R,
              handleSearchKeyPress: V,
              handleClearSearch: B,
              handleCreateOrAddGuild: w,
              searchResults: L,
              searchFetching: O,
          })
        : null == y && null == b
          ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(a.y$y, { className: I.u1 }) })
          : y?.length === 0 && null == b
            ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(m.A, { guild: S, onAddGuild: w }) })
            : (0, i.jsx)(p.A, {
                  channel: t,
                  searchQuery: D,
                  setSearchQuery: M,
                  handleSearchKeyPress: V,
                  handleClearSearch: B,
                  handleCreateOrAddGuild: w,
                  currentCategoryId: b,
                  handleSelectCategory: (e) => {
                      u.uU(t.id, e);
                  },
                  directoryEntries: y,
                  categoryCounts: T,
                  allEntriesCount: j,
                  isLoading: v,
              });
};
