(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n(399606),
    u = n(481060),
    c = n(493773),
    d = n(963374),
    E = n(735020),
    _ = n(786761),
    A = n(937889),
    m = n(619753),
    T = n(433355),
    f = n(271383),
    g = n(594174),
    I = n(189432),
    h = n(356778),
    O = n(370595),
    N = n(50493),
    p = n(12740),
    R = n(450355);
function S(e) {
    var t, n;
    let { userId: i, guildId: S, location: C, className: b, onNavigate: v } = e,
        D = l.useRef(null),
        x = (0, o.e7)([T.ZP], () => T.ZP.getGuildSidebarState(S), [S]),
        M = l.useRef(0),
        [L, U] = l.useState(null != (t = null == x ? void 0 : x.details.additionalSearchQuery) ? t : {}),
        j = (0, h.z0)(i, S, {
            addtionalQuery: L,
            shouldDispatch: !0
        }),
        P = (0, o.e7)([g.default], () => g.default.getUser(i), [i]),
        y = (0, o.e7)([f.ZP], () => f.ZP.getMember(S, i), [S, i]);
    (0, c.Ng)(() => {
        let e = null == x ? void 0 : x.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = D.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let w = l.useCallback(
            (e) => {
                null != x &&
                    ((M.current = e.target.scrollTop),
                    (0, I.r)(S, i, x.baseChannelId, {
                        modViewPanel: N.k.MESSAGE_HISTORY,
                        additionalSearchQuery: L,
                        scrollOffset: M.current
                    }));
            },
            [S, i, x, L]
        ),
        G = (0, a.throttle)(w, 300),
        k = l.useCallback(
            (e) => {
                var t, n;
                if (null == x) return;
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
                    })({}, L)),
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
                (U(r),
                    (0, I.r)(S, i, x.baseChannelId, {
                        modViewPanel: N.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: M.current
                    }));
            },
            [S, i, x, L]
        ),
        F = null != (n = null == L ? void 0 : L.offset) ? n : 0,
        Z = (0, o.e7)(
            [E.Z],
            () => {
                if (null == j.result) return [];
                let e = j.result.messages,
                    t = (0, d.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = E.Z.getMessage(e.id, e.channel_id),
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
            [j.result]
        ),
        z = l.useMemo(() => {
            var e, t, n, r;
            return null == j.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: F,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null != (e = j.result.documents_indexed) ? e : 0,
                      isSearching: !1,
                      isIndexing: null != (t = j.result.doing_deep_historical_index) && t,
                      isHistoricalIndexing: null != (n = j.result.doing_deep_historical_index) && n,
                      offset: F,
                      totalResults: null != (r = j.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [j.result, F]);
    return null == P || null == y || null == z
        ? null
        : (0, r.jsxs)('div', {
              className: s()(p.container, b),
              children: [
                  (0, r.jsx)(O.Z, {
                      guildId: S,
                      userId: i,
                      onNavigate: v
                  }),
                  (0, r.jsx)(u.Den, {
                      className: R.innerContainer,
                      ref: D,
                      onScroll: G,
                      children: (0, r.jsx)(m.Z, {
                          searchResults: Z,
                          search: z,
                          searchId: i,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onPageChange: k
                      })
                  })
              ]
          });
}
