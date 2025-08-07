n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(392711),
    o = n(399606),
    u = n(481060),
    c = n(493773),
    d = n(963374),
    E = n(735020),
    _ = n(786761),
    A = n(937889),
    T = n(619753),
    m = n(433355),
    I = n(271383),
    g = n(594174),
    f = n(189432),
    N = n(356778),
    h = n(370595),
    O = n(50493),
    p = n(981631),
    R = n(12740),
    S = n(450355);
function C(e) {
    var t, n;
    let { userId: s, guildId: C, location: v, className: D, onNavigate: b } = e,
        L = l.useRef(null),
        x = (0, o.e7)([m.ZP], () => m.ZP.getGuildSidebarState(C), [C]),
        U = l.useRef(0),
        [M, P] = l.useState(null != (t = null == x ? void 0 : x.details.additionalSearchQuery) ? t : {}),
        j = (0, N.z0)(s, C, {
            addtionalQuery: M,
            shouldDispatch: !0,
        }),
        y = (0, o.e7)([g.default], () => g.default.getUser(s), [s]),
        w = (0, o.e7)([I.ZP], () => I.ZP.getMember(C, s), [C, s]);
    (0, c.Ng)(() => {
        let e = null == x ? void 0 : x.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = L.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1,
                });
        }
    });
    let G = l.useCallback(
            (e) => {
                null != x &&
                    ((U.current = e.target.scrollTop),
                    (0, f.r)(C, s, x.baseChannelId, {
                        modViewPanel: O.k.MESSAGE_HISTORY,
                        additionalSearchQuery: M,
                        scrollOffset: U.current,
                    }));
            },
            [C, s, x, M],
        ),
        k = (0, a.throttle)(G, 300),
        F = l.useCallback(
            (e) => {
                var t, n;
                if (null == x) return;
                let r =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
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
                P(r),
                    (0, f.r)(C, s, x.baseChannelId, {
                        modViewPanel: O.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: U.current,
                    });
            },
            [C, s, x, M],
        ),
        z = null != (n = null == M ? void 0 : M.offset) ? n : 0,
        Z = (0, o.e7)([E.Z], () => {
            if (null == j.result) return [];
            let e = j.result.messages,
                t = (0, d.nC)("");
            return e.map((e) =>
                e.map((e) => {
                    let n = E.Z.getMessage(e.id, e.channel_id),
                        r = (0, _.e5)(e);
                    return (
                        null != n &&
                            (r = r.merge({
                                attachments: n.attachments,
                                embeds: n.embeds,
                            })),
                        r.isSearchHit
                            ? r.set(
                                  "customRenderedContent",
                                  (0, A.ZP)(r, {
                                      postProcessor: t,
                                      allowHeading: !0,
                                      allowList: !0,
                                  }),
                              )
                            : r
                    );
                }),
            );
        }, [j.result]),
        B = l.useMemo(() => {
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
                      showNoResultsAlt: !1,
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
                      showNoResultsAlt: !1,
                  };
        }, [j.result, z]);
    return null == y || null == w || null == B
        ? null
        : (0, r.jsxs)("div", {
              className: i()(R.container, D),
              children: [
                  (0, r.jsx)(h.Z, {
                      guildId: C,
                      userId: s,
                      onNavigate: b,
                  }),
                  (0, r.jsx)(u.Den, {
                      className: S.innerContainer,
                      ref: L,
                      onScroll: k,
                      children: (0, r.jsx)(T.Z, {
                          searchResults: Z,
                          search: B,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: p.dG4,
                          onPageChange: F,
                          onBlockedResultsClick: p.dG4,
                      }),
                  }),
              ],
          });
}
