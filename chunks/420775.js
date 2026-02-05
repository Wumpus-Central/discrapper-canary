n.d(t, { A: () => D });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n(417597),
    E = n(397927),
    u = n(964486),
    c = n(570209),
    _ = n(457699),
    d = n(141468),
    g = n(465364),
    A = n(229374),
    T = n(383233),
    I = n(761640),
    N = n(696451),
    h = n(287809),
    m = n(706752),
    S = n(744432),
    G = n(62697),
    O = n(486974),
    C = n(652215),
    R = n(438536),
    L = n(618695);
function D(e) {
    let { userId: t, guildId: n, location: a, className: D, onNavigate: f } = e,
        x = r.useRef(null),
        M = (0, o.bG)([I.Ay], () => I.Ay.getGuildSidebarState(n), [n]),
        p = r.useRef(0),
        [U, k] = r.useState(M?.details.additionalSearchQuery ?? {}),
        b = (0, S.KR)(t, n, { addtionalQuery: U, shouldDispatch: !0 }),
        F = (0, o.bG)([h.default], () => h.default.getUser(t), [t]),
        j = (0, o.bG)([N.Ay], () => N.Ay.getMember(n, t), [n, t]);
    (0, u.u5)(() => {
        let e = M?.details.scrollOffset;
        null != e && x.current?.scrollTo({ to: e, animate: !1 });
    });
    let v = r.useCallback(
            (e) => {
                null == M ||
                    ((p.current = e.target.scrollTop),
                    (0, m.z)(n, t, M.baseChannelId, {
                        modViewPanel: O.g.MESSAGE_HISTORY,
                        additionalSearchQuery: U,
                        scrollOffset: p.current,
                    }));
            },
            [n, t, M, U],
        ),
        P = (0, s.throttle)(v, 300),
        y = r.useCallback(
            (e) => {
                if (null == M) return;
                let l = { ...U, offset: 25 * e };
                k(l),
                    (0, m.z)(n, t, M.baseChannelId, {
                        modViewPanel: O.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: p.current,
                    });
            },
            [n, t, M, U],
        ),
        X = U?.offset ?? 0,
        B = (0, o.bG)([_.A], () => {
            if (null == b.result) return [];
            let e = (0, c.wG)("");
            return b.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, d.rh)(t);
                })
                .map((t) => {
                    let n = _.A.getMessage(t.id, t.channel_id),
                        l = new T.Ay(t);
                    return (
                        null != n && (l = l.merge({ attachments: n.attachments, embeds: n.embeds })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, g.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [b.result]),
        V = r.useMemo(
            () =>
                null == b.result
                    ? {
                          documentsIndexed: 0,
                          isSearching: !0,
                          isIndexing: !1,
                          isHistoricalIndexing: !1,
                          offset: X,
                          totalResults: 0,
                          hasError: !1,
                          showBlockedResults: !1,
                          showNoResultsAlt: !1,
                      }
                    : {
                          documentsIndexed: b.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: b.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: b.result.doing_deep_historical_index ?? !1,
                          offset: X,
                          totalResults: b.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: !1,
                          showNoResultsAlt: !1,
                      },
            [b.result, X],
        );
    return null == F || null == j || null == V
        ? null
        : (0, l.jsxs)("div", {
              className: i()(R.kL, D),
              children: [
                  (0, l.jsx)(G.A, { guildId: n, userId: t, onNavigate: f }),
                  (0, l.jsx)(E.T7Y, {
                      className: L.W,
                      ref: x,
                      onScroll: P,
                      children: (0, l.jsx)(A.A, {
                          messages: B,
                          search: V,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: C.tEg,
                          onPageChange: y,
                          onBlockedResultsClick: C.tEg,
                      }),
                  }),
              ],
          });
}
