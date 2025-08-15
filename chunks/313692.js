t.d(e, { Z: () => b }), t(388685);
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    a = t(392711),
    s = t(399606),
    o = t(481060),
    g = t(493773),
    c = t(963374),
    f = t(735020),
    v = t(786761),
    u = t(937889),
    h = t(619753),
    d = t(433355),
    E = t(271383),
    C = t(594174),
    B = t(189432),
    w = t(356778),
    D = t(370595),
    M = t(50493),
    p = t(981631),
    I = t(87819),
    H = t(125134);
function b(A) {
    var e, t;
    let { userId: l, guildId: b, location: O, className: Q, onNavigate: P } = A,
        j = r.useRef(null),
        V = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(b), [b]),
        m = r.useRef(0),
        [T, y] = r.useState(null != (e = null == V ? void 0 : V.details.additionalSearchQuery) ? e : {}),
        L = (0, w.z0)(l, b, {
            addtionalQuery: T,
            shouldDispatch: !0,
        }),
        x = (0, s.e7)([C.default], () => C.default.getUser(l), [l]),
        N = (0, s.e7)([E.ZP], () => E.ZP.getMember(b, l), [b, l]);
    (0, g.Ng)(() => {
        let A = null == V ? void 0 : V.details.scrollOffset;
        if (null != A) {
            var e;
            null == (e = j.current) ||
                e.scrollTo({
                    to: A,
                    animate: !1,
                });
        }
    });
    let Z = r.useCallback(
            (A) => {
                null != V &&
                    ((m.current = A.target.scrollTop),
                    (0, B.r)(b, l, V.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: T,
                        scrollOffset: m.current,
                    }));
            },
            [b, l, V, T],
        ),
        S = (0, a.throttle)(Z, 300),
        R = r.useCallback(
            (A) => {
                var e, t;
                if (null == V) return;
                let n =
                    ((e = (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    }),
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    (n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (A[e] = n);
                                });
                        }
                        return A;
                    })({}, T)),
                    (t = t = { offset: 25 * A }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (A, e) {
                              var t = Object.keys(A);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(A);
                                  t.push.apply(t, n);
                              }
                              return t;
                          })(Object(t)).forEach(function (A) {
                              Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
                          }),
                    e);
                y(n),
                    (0, B.r)(b, l, V.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: n,
                        scrollOffset: m.current,
                    });
            },
            [b, l, V, T],
        ),
        G = null != (t = null == T ? void 0 : T.offset) ? t : 0,
        U = (0, s.e7)([f.Z], () => {
            if (null == L.result) return [];
            let A = L.result.messages,
                e = (0, c.nC)("");
            return A.map((A) =>
                A.map((A) => {
                    let t = f.Z.getMessage(A.id, A.channel_id),
                        n = (0, v.e5)(A);
                    return (
                        null != t &&
                            (n = n.merge({
                                attachments: t.attachments,
                                embeds: t.embeds,
                            })),
                        n.isSearchHit
                            ? n.set(
                                  "customRenderedContent",
                                  (0, u.ZP)(n, {
                                      postProcessor: e,
                                      allowHeading: !0,
                                      allowList: !0,
                                  }),
                              )
                            : n
                    );
                }),
            );
        }, [L.result]),
        F = r.useMemo(() => {
            var A, e, t, n;
            return null == L.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: G,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1,
                  }
                : {
                      documentsIndexed: null != (A = L.result.documents_indexed) ? A : 0,
                      isSearching: !1,
                      isIndexing: null != (e = L.result.doing_deep_historical_index) && e,
                      isHistoricalIndexing: null != (t = L.result.doing_deep_historical_index) && t,
                      offset: G,
                      totalResults: null != (n = L.result.total_results) ? n : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1,
                  };
        }, [L.result, G]);
    return null == x || null == N || null == F
        ? null
        : (0, n.jsxs)("div", {
              className: i()(I.container, Q),
              children: [
                  (0, n.jsx)(D.Z, {
                      guildId: b,
                      userId: l,
                      onNavigate: P,
                  }),
                  (0, n.jsx)(o.Den, {
                      className: H.innerContainer,
                      ref: j,
                      onScroll: S,
                      children: (0, n.jsx)(h.Z, {
                          searchResults: U,
                          search: F,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: p.dG4,
                          onPageChange: R,
                          onBlockedResultsClick: p.dG4,
                      }),
                  }),
              ],
          });
}
