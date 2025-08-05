(n.d(t, { Z: () => p }), n(388685));
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
    N = n(189432),
    O = n(356778),
    f = n(370595),
    R = n(50493),
    S = n(981631),
    C = n(12740),
    h = n(450355);
function p(e) {
    var t, n;
    let { userId: i, guildId: p, location: D, className: U, onNavigate: L } = e,
        v = l.useRef(null),
        b = (0, o.e7)([I.ZP], () => I.ZP.getGuildSidebarState(p), [p]),
        M = l.useRef(0),
        [x, P] = l.useState(null != (t = null == b ? void 0 : b.details.additionalSearchQuery) ? t : {}),
        j = (0, O.z0)(i, p, {
            addtionalQuery: x,
            shouldDispatch: !0
        }),
        y = (0, o.e7)([m.default], () => m.default.getUser(i), [i]),
        G = (0, o.e7)([g.ZP], () => g.ZP.getMember(p, i), [p, i]);
    (0, c.Ng)(() => {
        let e = null == b ? void 0 : b.details.scrollOffset;
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
                null != b &&
                    ((M.current = e.target.scrollTop),
                    (0, N.r)(p, i, b.baseChannelId, {
                        modViewPanel: R.k.MESSAGE_HISTORY,
                        additionalSearchQuery: x,
                        scrollOffset: M.current
                    }));
            },
            [p, i, b, x]
        ),
        F = (0, a.throttle)(w, 300),
        B = l.useCallback(
            (e) => {
                var t, n;
                if (null == b) return;
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
                    })({}, x)),
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
                (P(r),
                    (0, N.r)(p, i, b.baseChannelId, {
                        modViewPanel: R.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: M.current
                    }));
            },
            [p, i, b, x]
        ),
        z = null != (n = null == x ? void 0 : x.offset) ? n : 0,
        V = (0, o.e7)(
            [d.Z],
            () => {
                if (null == j.result) return [];
                let e = j.result.messages,
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
            [j.result]
        ),
        Z = l.useMemo(() => {
            var e, t, n, r;
            return null == j.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: z,
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
                      offset: z,
                      totalResults: null != (r = j.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [j.result, z]);
    return null == y || null == G || null == Z
        ? null
        : (0, r.jsxs)('div', {
              className: s()(C.container, U),
              children: [
                  (0, r.jsx)(f.Z, {
                      guildId: p,
                      userId: i,
                      onNavigate: L
                  }),
                  (0, r.jsx)(u.Den, {
                      className: h.innerContainer,
                      ref: v,
                      onScroll: F,
                      children: (0, r.jsx)(T.Z, {
                          searchResults: V,
                          search: Z,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: S.dG4,
                          onPageChange: B,
                          onBlockedResultsClick: S.dG4
                      })
                  })
              ]
          });
}
