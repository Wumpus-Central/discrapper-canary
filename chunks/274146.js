"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(73153),
    o = n(334738),
    c = n(222823),
    d = n(954571),
    u = n(208882),
    h = n(938764),
    A = n(519480),
    m = n(352123),
    _ = n(372536),
    p = n(491346),
    g = n(667369),
    f = n(647026),
    x = n(946116),
    E = n(652215),
    C = n(650583),
    I = n(46570);
let N = (e) => {
    let { channel: t, guild: N } = e,
        {
            currentCategoryId: b,
            directoryEntries: S,
            categoryCounts: T,
            allEntriesCount: v,
            isLoading: y,
        } = (0, l.cf)([A.A], () => {
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
    s.useEffect(
        () => () => {
            let e = c.Ay.lastMessageId(t.id);
            null != e &&
                a.h.wait(() => {
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
    let j = s.useMemo(() => (null != S ? (0, g._)(Object.values(S), b) : null), [S, b]),
        {
            mostRecentQuery: R,
            searchFetching: O,
            searchResults: L,
        } = (0, l.cf)([h.A], () => {
            let { mostRecentQuery: e, fetching: n } = h.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: h.A.getSearchResults(t.id, e) };
        }),
        [M, D] = s.useState(R),
        G = "" !== R,
        U = { mostRecentQuery: R },
        P = s.useRef(U);
    s.useEffect(() => {
        P.current = U;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = P.current;
            u.Yc(t.id), u.YS(t.id), D(e);
        }, [t.id]),
        s.useEffect(() => {
            d.default.track(E.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: N.id,
                primary_category_id: b,
            });
        }, [t.id, N.id, b]);
    let w = (0, m.b)(t),
        k = s.useMemo(
            () =>
                w
                    ? () => {
                          (0, r.mMO)(async () => {
                              let { default: e } = await n.e("6759").then(n.bind(n, 953722));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      directoryGuildName: N.name,
                                      directoryGuildId: N.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: b === x.mU.ALL ? null : b,
                                  });
                          });
                      }
                    : void 0,
            [w, N.name, N.id, t.id, b],
        ),
        V = (e) => {
            0 !== M.trim().length &&
                e.key === C.dh.ENTER &&
                (u.Se(t.id, M),
                d.default.track(E.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: N.id,
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
        : null == j && null == b
          ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(r.y$y, { className: I.u1 }) })
          : j?.length === 0 && null == b
            ? (0, i.jsx)("div", { className: I.$$, children: (0, i.jsx)(_.A, { guild: N, onAddGuild: k }) })
            : (0, i.jsx)(p.A, {
                  channel: t,
                  searchQuery: M,
                  setSearchQuery: D,
                  handleSearchKeyPress: V,
                  handleClearSearch: B,
                  handleCreateOrAddGuild: k,
                  currentCategoryId: b,
                  handleSelectCategory: (e) => {
                      u.uU(t.id, e);
                  },
                  directoryEntries: j,
                  categoryCounts: T,
                  allEntriesCount: v,
                  isLoading: y,
              });
};
