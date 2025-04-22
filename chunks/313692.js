n.d(t, { Z: () => E }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(399606),
    c = n(481060),
    u = n(493773),
    d = n(963374),
    p = n(735020),
    h = n(786761),
    f = n(937889),
    m = n(619753),
    g = n(433355),
    b = n(271383),
    _ = n(594174),
    y = n(189432),
    C = n(356778),
    x = n(370595),
    v = n(50493),
    j = n(12740),
    O = n(450355);
function E(e) {
    var t, n;
    let { userId: l, guildId: E, location: I, className: S, onNavigate: P } = e,
        Z = i.useRef(null),
        N = (0, s.e7)([g.ZP], () => g.ZP.getGuildSidebarState(E), [E]),
        T = i.useRef(0),
        [A, w] = i.useState(null != (t = null == N ? void 0 : N.details.additionalSearchQuery) ? t : {}),
        R = (0, C.z0)(l, E, {
            addtionalQuery: A,
            shouldDispatch: !0
        }),
        k = (0, s.e7)([_.default], () => _.default.getUser(l), [l]),
        M = (0, s.e7)([b.ZP], () => b.ZP.getMember(E, l), [E, l]);
    (0, u.Ng)(() => {
        let e = null == N ? void 0 : N.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = Z.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let L = i.useCallback(
            (e) => {
                null != N &&
                    ((T.current = e.target.scrollTop),
                    (0, y.r)(E, l, N.baseChannelId, {
                        modViewPanel: v.k.MESSAGE_HISTORY,
                        additionalSearchQuery: A,
                        scrollOffset: T.current
                    }));
            },
            [E, l, N, A]
        ),
        D = (0, a.throttle)(L, 300),
        U = i.useCallback(
            (e) => {
                var t, n;
                if (null == N) return;
                let r =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, A)),
                    (n = n = { offset: 25 * e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t);
                w(r),
                    (0, y.r)(E, l, N.baseChannelId, {
                        modViewPanel: v.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: T.current
                    });
            },
            [E, l, N, A]
        ),
        B = null != (n = null == A ? void 0 : A.offset) ? n : 0,
        G = (0, s.e7)(
            [p.Z],
            () => {
                if (null == R.result) return [];
                let e = R.result.messages,
                    t = (0, d.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = p.Z.getMessage(e.id, e.channel_id),
                            r = (0, h.e5)(e);
                        return (
                            null != n &&
                                (r = r.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            r.isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, f.ZP)(r, {
                                          postProcessor: t,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  )
                                : r
                        );
                    })
                );
            },
            [R.result]
        ),
        F = i.useMemo(() => {
            var e, t, n, r;
            return null == R.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: B,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null != (e = R.result.documents_indexed) ? e : 0,
                      isSearching: !1,
                      isIndexing: null != (t = R.result.doing_deep_historical_index) && t,
                      isHistoricalIndexing: null != (n = R.result.doing_deep_historical_index) && n,
                      offset: B,
                      totalResults: null != (r = R.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [R.result, B]);
    return null == k || null == M || null == F
        ? null
        : (0, r.jsxs)('div', {
              className: o()(j.container, S),
              children: [
                  (0, r.jsx)(x.Z, {
                      guildId: E,
                      userId: l,
                      onNavigate: P
                  }),
                  (0, r.jsx)(c.Den, {
                      className: O.innerContainer,
                      ref: Z,
                      onScroll: D,
                      children: (0, r.jsx)(m.Z, {
                          searchResults: G,
                          search: F,
                          searchId: l,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onChangePage: U
                      })
                  })
              ]
          });
}
