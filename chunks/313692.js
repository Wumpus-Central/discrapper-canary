n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    l = n(647438),
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
    I = n(23750),
    m = n(433355),
    g = n(271383),
    N = n(594174),
    h = n(189432),
    O = n(356778),
    f = n(370595),
    R = n(50493),
    S = n(981631),
    p = n(87819),
    C = n(125134);
function D(e) {
    var t, n;
    let { userId: i, guildId: D, location: U, className: L, onNavigate: M } = e,
        b = l.useRef(null),
        x = (0, o.e7)([m.ZP], () => m.ZP.getGuildSidebarState(D), [D]),
        v = l.useRef(0),
        [P, j] = l.useState(null != (t = null == x ? void 0 : x.details.additionalSearchQuery) ? t : {}),
        y = (0, O.z0)(i, D, {
            addtionalQuery: P,
            shouldDispatch: !0,
        }),
        G = (0, o.e7)([N.default], () => N.default.getUser(i), [i]),
        k = (0, o.e7)([g.ZP], () => g.ZP.getMember(D, i), [D, i]);
    (0, c.Ng)(() => {
        let e = null == x ? void 0 : x.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = b.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1,
                });
        }
    });
    let F = l.useCallback(
            (e) => {
                null != x &&
                    ((v.current = e.target.scrollTop),
                    (0, h.r)(D, i, x.baseChannelId, {
                        modViewPanel: R.k.MESSAGE_HISTORY,
                        additionalSearchQuery: P,
                        scrollOffset: v.current,
                    }));
            },
            [D, i, x, P],
        ),
        w = (0, a.throttle)(F, 300),
        z = l.useCallback(
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
                    (0, h.r)(D, i, x.baseChannelId, {
                        modViewPanel: R.k.MESSAGE_HISTORY,
                        additionalSearchQuery: r,
                        scrollOffset: v.current,
                    });
            },
            [D, i, x, P],
        ),
        V = null != (n = null == P ? void 0 : P.offset) ? n : 0,
        Z = (0, o.e7)([d.Z], () => {
            if (null == y.result) return [];
            let e = (0, E.nC)("");
            return y.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, _.e5)(t);
                })
                .map((t) => {
                    let n = d.Z.getMessage(t.id, t.channel_id),
                        r = new I.ZP(t);
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
        B = l.useMemo(() => {
            var e, t, n, r;
            return null == y.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: V,
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
                      offset: V,
                      totalResults: null != (r = y.result.total_results) ? r : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1,
                  };
        }, [y.result, V]);
    return null == G || null == k || null == B
        ? null
        : (0, r.jsxs)("div", {
              className: s()(p.container, L),
              children: [
                  (0, r.jsx)(f.Z, {
                      guildId: D,
                      userId: i,
                      onNavigate: M,
                  }),
                  (0, r.jsx)(u.Den, {
                      className: C.innerContainer,
                      ref: b,
                      onScroll: w,
                      children: (0, r.jsx)(T.Z, {
                          messages: Z,
                          search: B,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: S.dG4,
                          onPageChange: z,
                          onBlockedResultsClick: S.dG4,
                      }),
                  }),
              ],
          });
}
