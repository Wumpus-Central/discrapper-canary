n.d(t, {
    A: () => R,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n(417597),
    c = n(397927),
    u = n(964486),
    E = n(570209),
    d = n(457699),
    _ = n(141468),
    g = n(465364),
    A = n(229374),
    T = n(383233),
    f = n(761640),
    h = n(696451),
    I = n(287809),
    O = n(706752),
    N = n(744432),
    m = n(62697),
    S = n(486974),
    p = n(652215),
    b = n(438536),
    G = n(618695);

function R(e) {
    var t, n;
    let { userId: a, guildId: R, location: D, className: L, onNavigate: x } = e,
        C = r.useRef(null),
        M = (0, o.bG)([f.Ay], () => f.Ay.getGuildSidebarState(R), [R]),
        v = r.useRef(0),
        [j, U] = r.useState(null != (t = null == M ? void 0 : M.details.additionalSearchQuery) ? t : {}),
        y = (0, N.KR)(a, R, {
            addtionalQuery: j,
            shouldDispatch: !0,
        }),
        P = (0, o.bG)([I.default], () => I.default.getUser(a), [a]),
        k = (0, o.bG)([h.Ay], () => h.Ay.getMember(R, a), [R, a]);
    (0, u.u5)(() => {
        let e = null == M ? void 0 : M.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = C.current) ||
                t.scrollTo({
                    to: e,
                    animate: !1,
                });
        }
    });
    let F = r.useCallback(
            (e) => {
                null == M ||
                    ((v.current = e.target.scrollTop),
                    (0, O.z)(R, a, M.baseChannelId, {
                        modViewPanel: S.g.MESSAGE_HISTORY,
                        additionalSearchQuery: j,
                        scrollOffset: v.current,
                    }));
            },
            [R, a, M, j],
        ),
        w = (0, s.throttle)(F, 300),
        X = r.useCallback(
            (e) => {
                var t, n;
                if (null == M) return;
                let l =
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, j)),
                    (n = n =
                        {
                            offset: 25 * e,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t);
                U(l),
                    (0, O.z)(R, a, M.baseChannelId, {
                        modViewPanel: S.g.MESSAGE_HISTORY,
                        additionalSearchQuery: l,
                        scrollOffset: v.current,
                    });
            },
            [R, a, M, j],
        ),
        B = null != (n = null == j ? void 0 : j.offset) ? n : 0,
        V = (0, o.bG)([d.A], () => {
            if (null == y.result) return [];
            let e = (0, E.wG)("");
            return y.result.messages
                .map((e) => {
                    let [t] = e;
                    return (0, _.rh)(t);
                })
                .map((t) => {
                    let n = d.A.getMessage(t.id, t.channel_id),
                        l = new T.Ay(t);
                    return (
                        null != n &&
                            (l = l.merge({
                                attachments: n.attachments,
                                embeds: n.embeds,
                            })),
                        (l = l.set(
                            "customRenderedContent",
                            (0, g.Ay)(l, {
                                postProcessor: e,
                                allowHeading: !0,
                                allowList: !0,
                            }),
                        ))
                    );
                });
        }, [y.result]),
        H = r.useMemo(() => {
            var e, t, n, l;
            return null == y.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: B,
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
                      offset: B,
                      totalResults: null != (l = y.result.total_results) ? l : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1,
                  };
        }, [y.result, B]);
    return null == P || null == k || null == H
        ? null
        : (0, l.jsxs)("div", {
              className: i()(b.kL, L),
              children: [
                  (0, l.jsx)(m.A, {
                      guildId: R,
                      userId: a,
                      onNavigate: x,
                  }),
                  (0, l.jsx)(c.T7Y, {
                      className: G.W,
                      ref: C,
                      onScroll: w,
                      children: (0, l.jsx)(A.A, {
                          messages: V,
                          search: H,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: p.tEg,
                          onPageChange: X,
                          onBlockedResultsClick: p.tEg,
                      }),
                  }),
              ],
          });
}
