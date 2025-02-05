n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(271383),
    C = n(594174),
    x = n(189432),
    v = n(356778),
    E = n(370595),
    I = n(50493),
    b = n(758570),
    Z = n(949801);
function N(e) {
    var t, n;
    let { userId: a, guildId: N, location: T, className: S, onNavigate: j } = e,
        y = l.useRef(null),
        A = (0, o.e7)([g.ZP], () => g.ZP.getGuildSidebarState(N), [N]),
        P = l.useRef(0),
        [R, M] = l.useState(null !== (t = null == A ? void 0 : A.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        L = (0, v.z0)(a, N, {
            addtionalQuery: R,
            shouldDispatch: !0
        }),
        k = (0, o.e7)([C.default], () => C.default.getUser(a), [a]),
        O = (0, o.e7)([_.ZP], () => _.ZP.getMember(N, a), [N, a]);
    (0, d.Ng)(() => {
        let e = null == A ? void 0 : A.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = y.current) ||
                void 0 === t ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    });
    let D = l.useCallback(
            (e) => {
                if (null == A) return;
                let t = e.target.scrollTop;
                (P.current = t),
                    (0, x.r)(N, a, A.baseChannelId, {
                        modViewPanel: I.k.MESSAGE_HISTORY,
                        additionalSearchQuery: R,
                        scrollOffset: P.current
                    });
            },
            [N, a, A, R]
        ),
        w = (0, s.throttle)(D, 300),
        U = l.useCallback(
            (e) => {
                if (null == A) return;
                let t = {
                    ...R,
                    offset: 25 * e
                };
                M(t),
                    (0, x.r)(N, a, A.baseChannelId, {
                        modViewPanel: I.k.MESSAGE_HISTORY,
                        additionalSearchQuery: t,
                        scrollOffset: P.current
                    });
            },
            [N, a, A, R]
        ),
        B = null !== (n = null == R ? void 0 : R.offset) && void 0 !== n ? n : 0,
        F = (0, o.e7)(
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
        H = l.useMemo(() => {
            var e, t, n, i;
            return null == L.result
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
                      documentsIndexed: null !== (e = L.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = L.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = L.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: B,
                      totalResults: null !== (i = L.result.total_results) && void 0 !== i ? i : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [L.result, B]);
    return null == k || null == O || null == H
        ? null
        : (0, i.jsxs)('div', {
              className: r()(b.container, S),
              children: [
                  (0, i.jsx)(E.Z, {
                      guildId: N,
                      userId: a,
                      onNavigate: j
                  }),
                  (0, i.jsx)(c.Den, {
                      className: Z.innerContainer,
                      ref: y,
                      onScroll: w,
                      children: (0, i.jsx)(f.Z, {
                          searchResults: F,
                          search: H,
                          searchId: a,
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
