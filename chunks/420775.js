n.d(t, { A: () => f });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n(311907),
    E = n(397927),
    u = n(964486),
    c = n(570209),
    _ = n(457699),
    d = n(141468),
    A = n(465364),
    g = n(229374),
    T = n(383233),
    I = n(761640),
    N = n(696451),
    h = n(994500),
    m = n(287809),
    S = n(706752),
    G = n(744432),
    O = n(62697),
    R = n(486974),
    C = n(652215),
    L = n(645267),
    D = n(375256);
function f(e) {
    let { userId: t, guildId: n, location: a, className: f, onNavigate: x } = e,
        M = r.useRef(null),
        p = (0, o.bG)([I.Ay], () => I.Ay.getGuildSidebarState(n), [n]),
        U = r.useRef(0),
        [k, b] = r.useState(p?.details.additionalSearchQuery ?? {}),
        F = (0, G.KR)(t, n, { addtionalQuery: k, shouldDispatch: !0 }),
        j = (0, o.bG)([m.default], () => m.default.getUser(t), [t]),
        v = (0, o.bG)([N.Ay], () => N.Ay.getMember(n, t), [n, t]);
    (0, u.u5)(() => {
        let e = p?.details.scrollOffset;
        null != e && M.current?.scrollTo({ to: e, animate: !1 });
    });
    let P = r.useCallback(
            (e) => {
                null == p ||
                    ((U.current = e.target.scrollTop),
                    (0, S.z)(n, t, p.baseChannelId, {
                        modViewPanel: R.g.MESSAGE_HISTORY,
                        additionalSearchQuery: k,
                        scrollOffset: U.current,
                    }));
            },
            [n, t, p, k],
        ),
        y = (0, s.throttle)(P, 300),
        X = r.useCallback(
            (e) => {
                if (null == p) return;
                let l = { ...k, offset: 25 * e };
                b(l),
                    (0, S.z)(n, t, p.baseChannelId, {
                        modViewPanel: R.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: U.current,
                    });
            },
            [n, t, p, k],
        ),
        B = k?.offset ?? 0,
        [V, H] = r.useState(!1),
        w = (0, o.bG)([_.A], () => {
            if (null == F.result) return [];
            let e = (0, c.wG)("");
            return F.result.messages
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
                            (0, A.Ay)(l, { postProcessor: e, allowHeading: !0, allowList: !0 }),
                        ))
                    );
                });
        }, [F.result]),
        { blockCount: W, ignoreCount: Y } = (0, o.cf)([h.A], () => {
            let e = 0,
                t = 0;
            return (
                w.forEach((n) => {
                    h.A.isBlockedForMessage(n) ? e++ : h.A.isIgnoredForMessage(n) && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        }),
        K = r.useMemo(
            () =>
                null == F.result
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
                          documentsIndexed: F.result.documents_indexed ?? 0,
                          isSearching: !1,
                          isIndexing: F.result.doing_deep_historical_index ?? !1,
                          isHistoricalIndexing: F.result.doing_deep_historical_index ?? !1,
                          offset: B,
                          totalResults: F.result.total_results ?? 0,
                          hasError: !1,
                          showBlockedResults: V,
                          showNoResultsAlt: !1,
                      },
            [F.result, B, V],
        );
    return null == j || null == v || null == K
        ? null
        : (0, l.jsxs)("div", {
              className: i()(L.kL, f),
              children: [
                  (0, l.jsx)(O.A, { guildId: n, userId: t, onNavigate: x }),
                  (0, l.jsx)(E.T7Y, {
                      className: D.W,
                      ref: M,
                      onScroll: y,
                      children: (0, l.jsx)(g.A, {
                          messages: w,
                          search: K,
                          renderEmbeds: !0,
                          blockCount: W,
                          ignoreCount: Y,
                          scrollTo: C.tEg,
                          onPageChange: X,
                          onBlockedResultsClick: H,
                      }),
                  }),
              ],
          });
}
