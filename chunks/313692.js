n.d(t, { Z: () => N }), n(47120);
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
    C = n(189432),
    v = n(356778),
    y = n(370595),
    x = n(50493),
    j = n(211971),
    O = n(776141);
function N(e) {
    var t, n;
    let { userId: l, guildId: N, location: E, className: P, onNavigate: I } = e,
        S = i.useRef(null),
        Z = (0, s.e7)([g.ZP], () => g.ZP.getGuildSidebarState(N), [N]),
        T = i.useRef(0),
        [A, w] = i.useState(null !== (t = null == Z ? void 0 : Z.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        R = (0, v.z0)(l, N, {
            addtionalQuery: A,
            shouldDispatch: !0
        }),
        k = (0, s.e7)([_.default], () => _.default.getUser(l), [l]),
        M = (0, s.e7)([b.ZP], () => b.ZP.getMember(N, l), [N, l]);
    (0, u.Ng)(() => {
        let e = null == Z ? void 0 : Z.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = S.current) ||
                void 0 === t ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let L = i.useCallback(
            (e) => {
                if (null == Z) return;
                let t = e.target.scrollTop;
                (T.current = t),
                    (0, C.r)(N, l, Z.baseChannelId, {
                        modViewPanel: x.k.MESSAGE_HISTORY,
                        additionalSearchQuery: A,
                        scrollOffset: T.current
                    });
            },
            [N, l, Z, A]
        ),
        D = (0, a.throttle)(L, 300),
        W = i.useCallback(
            (e) => {
                var t, n;
                if (null == Z) return;
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
                    (0, C.r)(N, l, Z.baseChannelId, {
                        modViewPanel: x.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: T.current
                    });
            },
            [N, l, Z, A]
        ),
        U = null !== (n = null == A ? void 0 : A.offset) && void 0 !== n ? n : 0,
        B = (0, s.e7)(
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
                      offset: U,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null !== (e = R.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = R.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = R.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: U,
                      totalResults: null !== (r = R.result.total_results) && void 0 !== r ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [R.result, U]);
    return null == k || null == M || null == F
        ? null
        : (0, r.jsxs)('div', {
              className: o()(j.container, P),
              children: [
                  (0, r.jsx)(y.Z, {
                      guildId: N,
                      userId: l,
                      onNavigate: I
                  }),
                  (0, r.jsx)(c.Den, {
                      className: O.innerContainer,
                      ref: S,
                      onScroll: D,
                      children: (0, r.jsx)(m.Z, {
                          searchResults: B,
                          search: F,
                          searchId: l,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onChangePage: W
                      })
                  })
              ]
          });
}
