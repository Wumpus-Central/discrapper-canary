(t.d(e, { Z: () => b }), t(388685));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(392711),
    a = t(399606),
    o = t(481060),
    g = t(493773),
    f = t(963374),
    v = t(735020),
    c = t(786761),
    h = t(937889),
    E = t(619753),
    u = t(433355),
    d = t(271383),
    C = t(594174),
    B = t(189432),
    w = t(356778),
    D = t(370595),
    M = t(50493),
    I = t(981631),
    p = t(12740),
    H = t(450355);
function b(A) {
    var e, t;
    let { userId: l, guildId: b, location: Q, className: O, onNavigate: P } = A,
        V = r.useRef(null),
        j = (0, a.e7)([u.ZP], () => u.ZP.getGuildSidebarState(b), [b]),
        T = r.useRef(0),
        [y, m] = r.useState(null != (e = null == j ? void 0 : j.details.additionalSearchQuery) ? e : {}),
        L = (0, w.z0)(l, b, {
            addtionalQuery: y,
            shouldDispatch: !0
        }),
        x = (0, a.e7)([C.default], () => C.default.getUser(l), [l]),
        Z = (0, a.e7)([d.ZP], () => d.ZP.getMember(b, l), [b, l]);
    (0, g.Ng)(() => {
        let A = null == j ? void 0 : j.details.scrollOffset;
        if (null != A) {
            var e;
            null == (e = V.current) ||
                e.scrollTo({
                    to: A,
                    animate: !1
                });
        }
    });
    let N = r.useCallback(
            (A) => {
                null != j &&
                    ((T.current = A.target.scrollTop),
                    (0, B.r)(b, l, j.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: y,
                        scrollOffset: T.current
                    }));
            },
            [b, l, j, y]
        ),
        S = (0, s.throttle)(N, 300),
        R = r.useCallback(
            (A) => {
                var e, t;
                if (null == j) return;
                let n =
                    ((e = (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    })
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    ((n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[e] = n));
                                }));
                        }
                        return A;
                    })({}, y)),
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
                (m(n),
                    (0, B.r)(b, l, j.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: n,
                        scrollOffset: T.current
                    }));
            },
            [b, l, j, y]
        ),
        G = null != (t = null == y ? void 0 : y.offset) ? t : 0,
        U = (0, a.e7)(
            [v.Z],
            () => {
                if (null == L.result) return [];
                let A = L.result.messages,
                    e = (0, f.nC)('');
                return A.map((A) =>
                    A.map((A) => {
                        let t = v.Z.getMessage(A.id, A.channel_id),
                            n = (0, c.e5)(A);
                        return (
                            null != t &&
                                (n = n.merge({
                                    attachments: t.attachments,
                                    embeds: t.embeds
                                })),
                            n.isSearchHit
                                ? n.set(
                                      'customRenderedContent',
                                      (0, h.ZP)(n, {
                                          postProcessor: e,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  )
                                : n
                        );
                    })
                );
            },
            [L.result]
        ),
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
                      showNoResultsAlt: !1
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
                      showNoResultsAlt: !1
                  };
        }, [L.result, G]);
    return null == x || null == Z || null == F
        ? null
        : (0, n.jsxs)('div', {
              className: i()(p.container, O),
              children: [
                  (0, n.jsx)(D.Z, {
                      guildId: b,
                      userId: l,
                      onNavigate: P
                  }),
                  (0, n.jsx)(o.Den, {
                      className: H.innerContainer,
                      ref: V,
                      onScroll: S,
                      children: (0, n.jsx)(E.Z, {
                          searchResults: U,
                          search: F,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: I.dG4,
                          onPageChange: R,
                          onBlockedResultsClick: I.dG4
                      })
                  })
              ]
          });
}
