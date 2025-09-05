n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n(399606),
    u = n(481060),
    c = n(493773),
    d = n(963374),
    E = n(735020),
    _ = n(786761),
    A = n(937889),
    m = n(619753),
    T = n(23750),
    I = n(433355),
    g = n(271383),
    f = n(594174),
    h = n(189432),
    N = n(356778),
    O = n(370595),
    p = n(50493),
    R = n(981631),
    S = n(152540),
    C = n(447334);
function D(e) {
    var t, n;
    let { userId: i, guildId: D, location: L, className: b, onNavigate: U } = e,
        v = l.useRef(null),
        M = (0, o.e7)([I.ZP], () => I.ZP.getGuildSidebarState(D), [D]),
        x = l.useRef(0),
        [P, j] = l.useState(null != (t = null == M ? void 0 : M.details.additionalSearchQuery) ? t : {}),
        y = (0, N.z0)(i, D, {
            addtionalQuery: P,
            shouldDispatch: !0,
        }),
        w = (0, o.e7)([f.default], () => f.default.getUser(i), [i]),
        G = (0, o.e7)([g.ZP], () => g.ZP.getMember(D, i), [D, i]);
    (0, c.Ng)(() => {
        let e = null == M ? void 0 : M.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = v.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1,
                });
        }
    });
    let k = l.useCallback(
            (e) => {
                null != M &&
                    ((x.current = e.target.scrollTop),
                    (0, h.r)(D, i, M.baseChannelId, {
                        modViewPanel: p.k.MESSAGE_HISTORY,
                        additionalSearchQuery: P,
                        scrollOffset: x.current,
                    }));
            },
            [D, i, M, P],
        ),
        F = (0, s.throttle)(k, 300),
        Z = l.useCallback(
            (e) => {
                var t, n;
                if (null == M) return;
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
                    })({}, P)),
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
                j(r),
                    (0, h.r)(D, i, M.baseChannelId, {
                        modViewPanel: p.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: x.current,
                    });
            },
            [D, i, M, P],
        ),
        z = null != (n = null == P ? void 0 : P.offset) ? n : 0,
        B = (0, o.e7)([E.Z], () => {
            if (null == y.result) return [];
            let e = (0, d.nC)("");
            return y.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, _.e5)(t);
                })
                .map((t) => {
                    let n = E.Z.getMessage(t.id, t.channel_id),
                        r = new T.ZP(t);
                    return (
                        null != n &&
                            (r = r.merge({
                                attachments: n.attachments,
                                embeds: n.embeds,
                            })),
                        (r = r.set(
                            "customRenderedContent",
                            (0, A.ZP)(r, {
                                postProcessor: e,
                                allowHeading: !0,
                                allowList: !0,
                            }),
                        ))
                    );
                });
        }, [y.result]),
        V = l.useMemo(() => {
            var e, t, n, r;
            return null == y.result
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
                      documentsIndexed: null != (e = y.result.documents_indexed) ? e : 0,
                      isSearching: !1,
                      isIndexing: null != (t = y.result.doing_deep_historical_index) && t,
                      isHistoricalIndexing: null != (n = y.result.doing_deep_historical_index) && n,
                      offset: z,
                      totalResults: null != (r = y.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1,
                  };
        }, [y.result, z]);
    return null == w || null == G || null == V
        ? null
        : (0, r.jsxs)("div", {
              className: a()(S.container, b),
              children: [
                  (0, r.jsx)(O.Z, {
                      guildId: D,
                      userId: i,
                      onNavigate: U,
                  }),
                  (0, r.jsx)(u.Den, {
                      className: C.innerContainer,
                      ref: v,
                      onScroll: F,
                      children: (0, r.jsx)(m.Z, {
                          messages: B,
                          search: V,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: R.dG4,
                          onPageChange: Z,
                          onBlockedResultsClick: R.dG4,
                      }),
                  }),
              ],
          });
}
