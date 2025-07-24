(n.d(t, { Z: () => F }), n(35282), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(837969),
    s = n(481060),
    c = n(904245),
    u = n(603263),
    d = n(963374),
    p = n(607070),
    m = n(933557),
    f = n(471445),
    g = n(95398),
    _ = n(905405),
    h = n(255269),
    b = n(937889),
    E = n(804063),
    C = n(703656),
    x = n(359110),
    v = n(903488),
    O = n(695346),
    y = n(131704),
    j = n(592125),
    I = n(430824),
    S = n(496675),
    T = n(699516),
    N = n(768119),
    P = n(944486),
    A = n(594174),
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
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: m, searchResults: f, blockCount: g, ignoreCount: _, onPageChange: h, onClick: b } = e,
        { offset: x, totalResults: O, isSearching: y, showBlockedResults: I } = n,
        S = i.useCallback(
            (e, t) => {
                if ((null == b || b(e, t), (0, E.Z)(e))) {
                    let t = j.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: v.Z.getAnalyticsId(l) }), (0, C.uL)(L.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [b, l]
        ),
        P = i.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!I && null != i && (T.Z.isBlockedForMessage(i) || T.Z.isIgnoredForMessage(i))) return n;
                let l = j.Z.getChannel(r[0].channel_id);
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
        }, [f, I]),
        A = i.useRef([]),
        R = P.reduce((e, t) => e + 1 + t.results.length, 0),
        F = i.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = A.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                m(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [m]
        ),
        B = i.useCallback((e) => {
            let t = A.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, o.ZP)({
            navId: 'search-results',
            itemCount: R,
            focusedIndex: 0,
            setFocus: F,
            onSelect: B
        }),
        V = N.Z.getSearchResultsQuery(l),
        z = (0, w.k)(l) === L.aib.FAVORITES,
        W = (0, d.nC)(null != (t = null == V ? void 0 : V.content) ? t : ''),
        K = P.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    results: n,
                    highlighter: W,
                    startIndex: i,
                    resultRefs: A,
                    totalResults: O,
                    scrollTo: m,
                    searchId: l,
                    renderEmbeds: a,
                    offset: x,
                    jumpToMessage: S,
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
    }, [f]);
    let X = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                U(M({ ref: Y }, H.getContainerProps(), X), {
                    'aria-busy': y,
                    children: K
                })
            ),
            g > 0 || _ > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(l, !I),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: I ? (g > 0 && _ > 0 ? D.intl.formatToPlainString(D.t['OvJs9/'], { count: g + _ }) : g > 0 ? D.intl.formatToPlainString(D.t['n/1QFR'], { count: g }) : D.intl.formatToPlainString(D.t.ypezTE, { count: _ })) : g > 0 && _ > 0 ? D.intl.formatToPlainString(D.t.EJHRcX, { count: g + _ }) : g > 0 ? D.intl.formatToPlainString(D.t.HTE8JC, { count: g }) : D.intl.formatToPlainString(D.t.e7f8r6, { count: _ })
                          })
                      ]
                  })
                : null,
            !y &&
                !z &&
                (0, r.jsx)(Z.Z, {
                    onPageChange: h,
                    offset: x,
                    totalCount: O,
                    pageSize: L.vpv
                })
        ]
    });
});
function B(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, f.KS)(t) : null;
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
    return (0, y.Em)(t.type)
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
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: E, searchId: C, renderEmbeds: v, offset: y, jumpToMessage: N, listNavigator: w, favoriteSearch: Z } = e,
        D = O.cC.useSetting(),
        F = (0, _.p)(),
        G = i.useCallback((e) => {
            if (e === P.Z.getChannelId()) return;
            let t = j.Z.getChannel(e);
            null != t && (S.Z.can(L.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, x.Kh)(t.id);
        }, []),
        H = null != a ? (0, m.F6)(a, A.default, T.Z, !1) : '???',
        V = Z && null != a.guild_id ? (null == (t = I.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        z = (null == a ? void 0 : a.parent_id) != null ? j.Z.getChannel(a.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        K = null != (l = (0, f.KS)(a)) ? l : s.VL1,
        Y = S.Z.can(L.Plq.MANAGE_MESSAGES, a),
        { content: X } = (0, b.ZP)(
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
    return (0, r.jsx)(g.aQ.Provider, {
        value: (0, h.Z)(D, Y),
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
                            totalResults: p,
                            scrollTo: E,
                            searchId: C,
                            renderEmbeds: v,
                            searchOffset: y,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: N,
                            listItemProps: w.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
