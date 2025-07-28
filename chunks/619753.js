(n.d(t, { Z: () => F }), n(35282), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(837969),
    s = n(481060),
    c = n(904245),
    u = n(963374),
    d = n(607070),
    p = n(933557),
    m = n(471445),
    f = n(95398),
    g = n(905405),
    _ = n(255269),
    h = n(937889),
    b = n(804063),
    E = n(703656),
    C = n(359110),
    x = n(695346),
    v = n(131704),
    y = n(592125),
    O = n(430824),
    j = n(496675),
    I = n(699516),
    S = n(944486),
    T = n(594174),
    N = n(748610),
    P = n(171900),
    A = n(518944),
    w = n(861262),
    Z = n(101695),
    R = n(683101),
    L = n(981631),
    D = n(388032),
    k = n(378869);
function M(e) {
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
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = i.memo(function (e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: p, searchResults: m, blockCount: f, ignoreCount: g, onPageChange: _, onClick: h } = e,
        { offset: C, totalResults: x, isSearching: v, showBlockedResults: O } = n,
        j = i.useCallback(
            (e, t) => {
                if ((null == h || h(e, t), (0, b.Z)(e))) {
                    let t = y.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: P.Z.getAnalyticsId(l) }), (0, E.uL)(L.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [h, l]
        ),
        S = i.useMemo(() => {
            let e;
            if (null == m) return [];
            let t = 0;
            return m.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!O && null != i && (I.Z.isBlockedForMessage(i) || I.Z.isIgnoredForMessage(i))) return n;
                let l = y.Z.getChannel(r[0].channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) &&
                            n.push({
                                channel: l,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == l ? void 0 : l.id)),
                    n
                );
            }, []);
        }, [m, O]),
        T = i.useRef([]),
        R = S.reduce((e, t) => e + 1 + t.results.length, 0),
        F = i.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = T.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                p(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [p]
        ),
        B = i.useCallback((e) => {
            let t = T.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, o.ZP)({
            navId: 'search-results',
            itemCount: R,
            focusedIndex: 0,
            setFocus: F,
            onSelect: B
        }),
        V = A.Z.getSearchResultsQuery(l),
        z = (0, w.k)(l) === L.aib.FAVORITES,
        W = (0, u.nC)(null != (t = null == V ? void 0 : V.content) ? t : ''),
        K = S.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    results: n,
                    highlighter: W,
                    startIndex: i,
                    resultRefs: T,
                    totalResults: x,
                    scrollTo: p,
                    searchId: l,
                    renderEmbeds: a,
                    offset: C,
                    jumpToMessage: j,
                    listNavigator: H,
                    favoriteSearch: z
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    K.push();
    let Y = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = Y.current) || e.focus();
    }, [m]);
    let X = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                U(M({ ref: Y }, H.getContainerProps(), X), {
                    'aria-busy': v,
                    children: K
                })
            ),
            f > 0 || g > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => N.Z.setShowBlockedResults(l, !O),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: O ? (f > 0 && g > 0 ? D.intl.formatToPlainString(D.t['OvJs9/'], { count: f + g }) : f > 0 ? D.intl.formatToPlainString(D.t['n/1QFR'], { count: f }) : D.intl.formatToPlainString(D.t.ypezTE, { count: g })) : f > 0 && g > 0 ? D.intl.formatToPlainString(D.t.EJHRcX, { count: f + g }) : f > 0 ? D.intl.formatToPlainString(D.t.HTE8JC, { count: f }) : D.intl.formatToPlainString(D.t.e7f8r6, { count: g })
                          })
                      ]
                  })
                : null,
            !v &&
                !z &&
                (0, r.jsx)(Z.Z, {
                    onPageChange: _,
                    offset: C,
                    totalCount: x,
                    pageSize: L.vpv
                })
        ]
    });
});
function B(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, m.KS)(t) : null;
    if (null == i) return null;
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i, {
                className: k.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: k.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, v.Em)(t.type)
        ? (0, r.jsx)(s.P3F, {
              className: a()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: l
          })
        : (0, r.jsx)('div', {
              className: k.parentChannelName,
              children: l
          });
}
function G(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: b, scrollTo: E, searchId: v, renderEmbeds: N, offset: P, jumpToMessage: A, listNavigator: w, favoriteSearch: Z } = e,
        D = x.cC.useSetting(),
        F = (0, g.p)(),
        G = i.useCallback((e) => {
            if (e === S.Z.getChannelId()) return;
            let t = y.Z.getChannel(e);
            null != t && (j.Z.can(L.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, C.Kh)(t.id);
        }, []),
        H = null != a ? (0, p.F6)(a, T.default, I.Z, !1) : '???',
        V = Z && null != a.guild_id ? (null == (t = O.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        z = (null == a ? void 0 : a.parent_id) != null ? y.Z.getChannel(a.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        K = null != (l = (0, m.KS)(a)) ? l : s.VL1,
        Y = j.Z.can(L.Plq.MANAGE_MESSAGES, a),
        { content: X } = (0, h.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: F
            }
        ),
        q = i.useRef(null),
        [Q, J] = i.useState(!1);
    i.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [H, W, V].filter((e) => null != e).join(', ');
    return (0, r.jsx)(f.aQ.Provider, {
        value: (0, _.Z)(D, Y),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => G(a.id),
                    children: (0, r.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, r.jsx)(K, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: H,
                                shouldShow: Q,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        U(M({}, e), {
                                            ref: q,
                                            className: k.channelNameText,
                                            children: [Z && null !== V && ''.concat(V, ' : '), X]
                                        })
                                    )
                            }),
                            (0, r.jsx)(B, {
                                parentChannel: z,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        R.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: b,
                            scrollTo: E,
                            searchId: v,
                            renderEmbeds: N,
                            searchOffset: P,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: A,
                            listItemProps: w.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
