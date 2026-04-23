n.d(t, { A: () => M });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(735438),
    E = n(311907),
    _ = n(599319),
    u = n(964486),
    o = n(570209),
    c = n(457699),
    d = n(141468),
    A = n(465364),
    g = n(229374),
    T = n(383233),
    I = n(761640),
    N = n(696451),
    G = n(994500),
    m = n(287809),
    O = n(706752),
    S = n(744432),
    R = n(62697),
    D = n(486974),
    h = n(652215),
    L = n(645267),
    C = n(375256);
function M(e) {
    let { userId: t, guildId: n, location: r, className: M, onNavigate: f } = e,
        x = a.useRef(null),
        U = (0, E.bG)([I.Ay], () => I.Ay.getGuildSidebarState(n), [n]),
        p = a.useRef(0),
        [b, F] = a.useState(U?.details.additionalSearchQuery ?? {}),
        k = (0, S.KR)(t, n, { addtionalQuery: b, shouldDispatch: !0 }),
        P = (0, E.bG)([m.default], () => m.default.getUser(t), [t]),
        j = (0, E.bG)([N.Ay], () => N.Ay.getMember(n, t), [n, t]);
    (0, u.u5)(() => {
        let e = U?.details.scrollOffset;
        null != e && x.current?.scrollTo({ to: e, animate: !1 });
    });
    let v = a.useCallback(
            (e) => {
                null == U ||
                    ((p.current = e.target.scrollTop),
                    (0, O.z)(n, t, U.baseChannelId, {
                        modViewPanel: D.g.MESSAGE_HISTORY,
                        additionalSearchQuery: b,
                        scrollOffset: p.current,
                    }));
            },
            [n, t, U, b],
        ),
        y = (0, s.throttle)(v, 300),
        X = a.useCallback(
            (e) => {
                if (null == U) return;
                let l = { ...b, offset: 25 * e };
                F(l),
                    (0, O.z)(n, t, U.baseChannelId, {
                        modViewPanel: D.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: p.current,
                    });
            },
            [n, t, U, b],
        ),
        B = b?.offset ?? 0,
        [V, H] = a.useState(!1),
        w = (0, E.bG)([c.A], () => {
            if (null == k.result) return [];
            let e = (0, o.wG)("");
            return k.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, d.rh)(t);
                })
                .map((t) => {
                    let n = c.A.getMessage(t.id, t.channel_id),
                        l = new T.Ay(t);
                    return (
                        null != n && (l = l.merge({ attachments: n.attachments, embeds: n.embeds })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, A.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [k.result]),
        { blockCount: W, ignoreCount: Y } = (0, E.cf)([G.A], () => {
            let e = 0,
                t = 0;
            return (
                w.forEach((n) => {
                    G.A.isBlockedForMessage(n) ? e++ : G.A.isIgnoredForMessage(n) && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        }),
        K = a.useMemo(
            () =>
                null == k.result
                    ? {
                          documentsIndexed: 0,
                          isSearching: !0,
                          isIndexing: !1,
                          isHistoricalIndexing: !1,
                          offset: B,
                          totalResults: 0,
                          hasError: !1,
                          showBlockedResults: V,
                          showNoResultsAlt: !1,
                      }
                    : {
                          documentsIndexed: k.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: k.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: k.result.doing_deep_historical_index ?? !1,
                          offset: B,
                          totalResults: k.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: V,
                          showNoResultsAlt: !1,
                      },
            [k.result, B, V],
        );
    return null == P || null == j || null == K
        ? null
        : (0, l.jsxs)("div", {
              className: i()(L.kL, M),
              children: [
                  (0, l.jsx)(R.A, { guildId: n, userId: t, onNavigate: f }),
                  (0, l.jsx)(_.Ch, {
                      className: C.W,
                      ref: x,
                      onScroll: y,
                      children: (0, l.jsx)(g.A, {
                          messages: w,
                          search: K,
                          renderEmbeds: !0,
                          blockCount: W,
                          ignoreCount: Y,
                          scrollTo: h.tEg,
                          onPageChange: X,
                          onBlockedResultsClick: H,
                      }),
                  }),
              ],
          });
}
