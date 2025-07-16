(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n(399606),
    u = n(481060),
    c = n(493773),
    E = n(963374),
    d = n(735020),
    _ = n(786761),
    A = n(937889),
    T = n(619753),
    I = n(433355),
    g = n(271383),
    m = n(594174),
    f = n(189432),
    O = n(356778),
    N = n(370595),
    h = n(50493),
    R = n(12740),
    p = n(450355);
function S(e) {
    var t, n;
    let { userId: i, guildId: S, location: C, className: b, onNavigate: D } = e,
        v = l.useRef(null),
        U = (0, o.e7)([I.ZP], () => I.ZP.getGuildSidebarState(S), [S]),
        L = l.useRef(0),
        [M, x] = l.useState(null != (t = null == U ? void 0 : U.details.additionalSearchQuery) ? t : {}),
        P = (0, O.z0)(i, S, {
            addtionalQuery: M,
            shouldDispatch: !0
        }),
        j = (0, o.e7)([m.default], () => m.default.getUser(i), [i]),
        y = (0, o.e7)([g.ZP], () => g.ZP.getMember(S, i), [S, i]);
    (0, c.Ng)(() => {
        let e = null == U ? void 0 : U.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = v.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let w = l.useCallback(
            (e) => {
                null != U &&
                    ((L.current = e.target.scrollTop),
                    (0, f.r)(S, i, U.baseChannelId, {
                        modViewPanel: h.k.MESSAGE_HISTORY,
                        additionalSearchQuery: M,
                        scrollOffset: L.current
                    }));
            },
            [S, i, U, M]
        ),
        G = (0, a.throttle)(w, 300),
        z = l.useCallback(
            (e) => {
                var t, n;
                if (null == U) return;
                let r =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, M)),
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
                (x(r),
                    (0, f.r)(S, i, U.baseChannelId, {
                        modViewPanel: h.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: L.current
                    }));
            },
            [S, i, U, M]
        ),
        B = null != (n = null == M ? void 0 : M.offset) ? n : 0,
        Z = (0, o.e7)(
            [d.Z],
            () => {
                if (null == P.result) return [];
                let e = P.result.messages,
                    t = (0, E.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = d.Z.getMessage(e.id, e.channel_id),
                            r = (0, _.e5)(e);
                        return (
                            null != n &&
                                (r = r.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            r.isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, A.ZP)(r, {
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
            [P.result]
        ),
        F = l.useMemo(() => {
            var e, t, n, r;
            return null == P.result
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
                      documentsIndexed: null != (e = P.result.documents_indexed) ? e : 0,
                      isSearching: !1,
                      isIndexing: null != (t = P.result.doing_deep_historical_index) && t,
                      isHistoricalIndexing: null != (n = P.result.doing_deep_historical_index) && n,
                      offset: B,
                      totalResults: null != (r = P.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [P.result, B]);
    return null == j || null == y || null == F
        ? null
        : (0, r.jsxs)('div', {
              className: s()(R.container, b),
              children: [
                  (0, r.jsx)(N.Z, {
                      guildId: S,
                      userId: i,
                      onNavigate: D
                  }),
                  (0, r.jsx)(u.Den, {
                      className: p.innerContainer,
                      ref: v,
                      onScroll: G,
                      children: (0, r.jsx)(T.Z, {
                          searchResults: Z,
                          search: F,
                          searchId: i,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onPageChange: z
                      })
                  })
              ]
          });
}
