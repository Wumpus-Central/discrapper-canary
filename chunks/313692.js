(t.d(e, { Z: () => H }), t(388685));
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
    I = t(12740),
    p = t(450355);
function H(A) {
    var e, t;
    let { userId: l, guildId: H, location: b, className: Q, onNavigate: O } = A,
        P = r.useRef(null),
        V = (0, a.e7)([u.ZP], () => u.ZP.getGuildSidebarState(H), [H]),
        j = r.useRef(0),
        [T, y] = r.useState(null != (e = null == V ? void 0 : V.details.additionalSearchQuery) ? e : {}),
        m = (0, w.z0)(l, H, {
            addtionalQuery: T,
            shouldDispatch: !0
        }),
        L = (0, a.e7)([C.default], () => C.default.getUser(l), [l]),
        x = (0, a.e7)([d.ZP], () => d.ZP.getMember(H, l), [H, l]);
    (0, g.Ng)(() => {
        let A = null == V ? void 0 : V.details.scrollOffset;
        if (null != A) {
            var e;
            null == (e = P.current) ||
                e.scrollTo({
                    to: A,
                    animate: !1
                });
        }
    });
    let Z = r.useCallback(
            (A) => {
                null != V &&
                    ((j.current = A.target.scrollTop),
                    (0, B.r)(H, l, V.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: T,
                        scrollOffset: j.current
                    }));
            },
            [H, l, V, T]
        ),
        N = (0, s.throttle)(Z, 300),
        R = r.useCallback(
            (A) => {
                var e, t;
                if (null == V) return;
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
                (y(n),
                    (0, B.r)(H, l, V.baseChannelId, {
                        modViewPanel: M.k.MESSAGE_HISTORY,
                        additionalSearchQuery: n,
                        scrollOffset: j.current
                    }));
            },
            [H, l, V, T]
        ),
        S = null != (t = null == T ? void 0 : T.offset) ? t : 0,
        G = (0, a.e7)(
            [v.Z],
            () => {
                if (null == m.result) return [];
                let A = m.result.messages,
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
            [m.result]
        ),
        U = r.useMemo(() => {
            var A, e, t, n;
            return null == m.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: S,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null != (A = m.result.documents_indexed) ? A : 0,
                      isSearching: !1,
                      isIndexing: null != (e = m.result.doing_deep_historical_index) && e,
                      isHistoricalIndexing: null != (t = m.result.doing_deep_historical_index) && t,
                      offset: S,
                      totalResults: null != (n = m.result.total_results) ? n : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [m.result, S]);
    return null == L || null == x || null == U
        ? null
        : (0, n.jsxs)('div', {
              className: i()(I.container, Q),
              children: [
                  (0, n.jsx)(D.Z, {
                      guildId: H,
                      userId: l,
                      onNavigate: O
                  }),
                  (0, n.jsx)(o.Den, {
                      className: p.innerContainer,
                      ref: P,
                      onScroll: N,
                      children: (0, n.jsx)(E.Z, {
                          searchResults: G,
                          search: U,
                          searchId: l,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onPageChange: R
                      })
                  })
              ]
          });
}
