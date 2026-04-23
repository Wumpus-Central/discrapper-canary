n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(289873),
    o = n(73153),
    d = n(334738),
    c = n(222823),
    u = n(954571),
    h = n(208882),
    A = n(938764),
    _ = n(519480),
    m = n(352123),
    g = n(372536),
    p = n(268965),
    f = n(667369),
    E = n(647026),
    x = n(946116),
    I = n(652215),
    C = n(650583),
    b = n(562845);
let N = (e) => {
    let { channel: t, guild: N } = e,
        {
            currentCategoryId: S,
            directoryEntries: v,
            categoryCounts: T,
            allEntriesCount: y,
            isLoading: j,
        } = (0, s.cf)([_.A], () => {
            let e = _.A.getCurrentCategoryId(t.id),
                n = _.A.getDirectoryEntries(t.id, e === x.mU.ALL ? null : e),
                i = _.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: _.A.getDirectoryAllEntriesCount(t.id),
                isLoading: _.A.isFetching(),
            };
        });
    l.useEffect(
        () => () => {
            let e = c.Ay.lastMessageId(t.id);
            null != e &&
                o.h.wait(() => {
                    (0, d.ack)(
                        t.id,
                        {
                            object: I.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: I.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let R = l.useMemo(() => (null != v ? (0, f._)(Object.values(v), S) : null), [v, S]),
        {
            mostRecentQuery: L,
            searchFetching: O,
            searchResults: G,
        } = (0, s.cf)([A.A], () => {
            let { mostRecentQuery: e, fetching: n } = A.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: A.A.getSearchResults(t.id, e) };
        }),
        [M, D] = l.useState(L),
        U = "" !== L,
        P = { mostRecentQuery: L },
        w = l.useRef(P);
    l.useEffect(() => {
        w.current = P;
    }),
        l.useEffect(() => {
            let { mostRecentQuery: e } = w.current;
            h.Yc(t.id), h.YS(t.id), D(e);
        }, [t.id]),
        l.useEffect(() => {
            u.default.track(I.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: N.id,
                primary_category_id: S,
            });
        }, [t.id, N.id, S]);
    let k = (0, m.b)(t),
        V = l.useMemo(
            () =>
                k
                    ? () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      directoryGuildName: N.name,
                                      directoryGuildId: N.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: S === x.mU.ALL ? null : S,
                                  });
                          });
                      }
                    : void 0,
            [k, N.name, N.id, t.id, S],
        ),
        B = (e) => {
            0 !== M.trim().length &&
                e.key === C.dh.ENTER &&
                (h.Se(t.id, M),
                u.default.track(I.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: N.id,
                }));
        },
        H = () => {
            D(""), h.BA(t.id);
        };
    return U
        ? (0, i.jsx)(E.A, {
              searchQuery: M,
              setSearchQuery: D,
              mostRecentQuery: L,
              handleSearchKeyPress: B,
              handleClearSearch: H,
              handleCreateOrAddGuild: V,
              searchResults: G,
              searchFetching: O,
          })
        : null == R && null == S
          ? (0, i.jsx)("div", { className: b.$$, children: (0, i.jsx)(r.y, { className: b.u1 }) })
          : R?.length === 0 && null == S
            ? (0, i.jsx)("div", { className: b.$$, children: (0, i.jsx)(g.A, { guild: N, onAddGuild: V }) })
            : (0, i.jsx)(p.A, {
                  channel: t,
                  searchQuery: M,
                  setSearchQuery: D,
                  handleSearchKeyPress: B,
                  handleClearSearch: H,
                  handleCreateOrAddGuild: V,
                  currentCategoryId: S,
                  handleSelectCategory: (e) => {
                      h.uU(t.id, e);
                  },
                  directoryEntries: R,
                  categoryCounts: T,
                  allEntriesCount: y,
                  isLoading: j,
              });
};
