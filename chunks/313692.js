n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(399606),
    c = n(481060),
    d = n(493773),
    u = n(963374),
    h = n(735020),
    p = n(786761),
    m = n(937889),
    f = n(619753),
    g = n(433355),
    C = n(271383),
    x = n(594174),
    v = n(189432),
    _ = n(356778),
    I = n(370595),
    E = n(50493),
    b = n(758570),
    Z = n(949801);
function N(e) {
    var t, n;
    let { userId: r, guildId: N, location: S, className: T, onNavigate: j } = e,
        A = l.useRef(null),
        y = (0, o.e7)([g.ZP], () => g.ZP.getGuildSidebarState(N), [N]),
        P = l.useRef(0),
        [M, R] = l.useState(null !== (t = null == y ? void 0 : y.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        L = (0, _.z0)(r, N, {
            addtionalQuery: M,
            shouldDispatch: !0
        }),
        k = (0, o.e7)([x.default], () => x.default.getUser(r), [r]),
        O = (0, o.e7)([C.ZP], () => C.ZP.getMember(N, r), [N, r]);
    (0, d.N)(() => {
        let e = null == y ? void 0 : y.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = A.current) ||
                void 0 === t ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let D = l.useCallback(
            (e) => {
                if (null == y) return;
                let t = e.target.scrollTop;
                (P.current = t),
                    (0, v.r)(N, r, y.baseChannelId, {
                        modViewPanel: E.k.MESSAGE_HISTORY,
                        additionalSearchQuery: M,
                        scrollOffset: P.current
                    });
            },
            [N, r, y, M]
        ),
        w = (0, s.throttle)(D, 300),
        B = l.useCallback(
            (e) => {
                if (null == y) return;
                let t = {
                    ...M,
                    offset: 25 * e
                };
                R(t),
                    (0, v.r)(N, r, y.baseChannelId, {
                        modViewPanel: E.k.MESSAGE_HISTORY,
                        additionalSearchQuery: t,
                        scrollOffset: P.current
                    });
            },
            [N, r, y, M]
        ),
        U = null !== (n = null == M ? void 0 : M.offset) && void 0 !== n ? n : 0,
        H = (0, o.e7)(
            [h.Z],
            () => {
                if (null == L.result) return [];
                let e = L.result.messages,
                    t = (0, u.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = h.Z.getMessage(e.id, e.channel_id),
                            i = (0, p.e5)(e);
                        return (
                            null != n &&
                                (i = i.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            i.isSearchHit
                                ? i.set(
                                      'customRenderedContent',
                                      (0, m.ZP)(i, {
                                          postProcessor: t,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  )
                                : i
                        );
                    })
                );
            },
            [L.result]
        ),
        G = l.useMemo(() => {
            var e, t, n, i;
            return null == L.result
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
                      documentsIndexed: null !== (e = L.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = L.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = L.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: U,
                      totalResults: null !== (i = L.result.total_results) && void 0 !== i ? i : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [L.result, U]);
    return null == k || null == O || null == G
        ? null
        : (0, i.jsxs)('div', {
              className: a()(b.container, T),
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: N,
                      userId: r,
                      onNavigate: j
                  }),
                  (0, i.jsx)(c.AdvancedScroller, {
                      className: Z.innerContainer,
                      ref: A,
                      onScroll: w,
                      children: (0, i.jsx)(f.Z, {
                          searchResults: H,
                          search: G,
                          searchId: r,
                          renderEmbeds: !0,
                          blockCount: 0,
                          ignoreCount: 0,
                          scrollTo: () => {},
                          onChangePage: B
                      })
                  })
              ]
          });
}
