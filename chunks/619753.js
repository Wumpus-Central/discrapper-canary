(n.d(t, { Z: () => Z }), n(35282), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(837969),
    l = n(481060),
    c = n(904245),
    u = n(963374),
    d = n(607070),
    f = n(933557),
    _ = n(471445),
    p = n(95398),
    h = n(905405),
    m = n(255269),
    g = n(937889),
    E = n(804063),
    b = n(703656),
    y = n(359110),
    O = n(695346),
    v = n(131704),
    I = n(592125),
    T = n(430824),
    S = n(496675),
    A = n(699516),
    N = n(944486),
    C = n(594174),
    w = n(101695),
    R = n(683101),
    P = n(981631),
    D = n(388032),
    L = n(378869);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
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
                x(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    var t;
    let { search: n, renderEmbeds: a, scrollTo: o, searchResults: f, blockCount: _, ignoreCount: p, onPageChange: h, onClick: m, paginationTotalCount: g, renderPageWrapper: y, onBlockedResultsClick: O, searchRequestAnalyticsId: v, searchResultsQuery: T, isFavoritesSearch: S } = e,
        { offset: N, totalResults: C, isSearching: R, showBlockedResults: x } = n,
        j = i.useCallback(
            (e, t) => {
                if ((null == m || m(e, t), (0, E.Z)(e))) {
                    let t = I.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: v }), (0, b.uL)(P.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [m, v]
        ),
        U = i.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!x && null != i && (A.Z.isBlockedForMessage(i) || A.Z.isIgnoredForMessage(i))) return n;
                let a = I.Z.getChannel(r[0].channel_id);
                return (
                    null == a ||
                        ((null == e || e !== a.id) &&
                            n.push({
                                channel: a,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == a ? void 0 : a.id)),
                    n
                );
            }, []);
        }, [f, x]),
        G = i.useRef([]),
        Z = U.reduce((e, t) => e + 1 + t.results.length, 0),
        F = i.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = G.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                o(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [o]
        ),
        V = i.useCallback((e) => {
            let t = G.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, s.ZP)({
            navId: 'search-results',
            itemCount: Z,
            focusedIndex: 0,
            setFocus: F,
            onSelect: V
        }),
        Y = (0, u.nC)(null != (t = null == T ? void 0 : T.content) ? t : ''),
        W = U.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                B,
                {
                    channel: t,
                    results: n,
                    highlighter: Y,
                    startIndex: i,
                    resultRefs: G,
                    totalResults: C,
                    scrollTo: o,
                    renderEmbeds: a,
                    offset: N,
                    jumpToMessage: j,
                    listNavigator: H,
                    favoriteSearch: null != S && S
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    W.push();
    let K = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = K.current) || e.focus();
    }, [f]);
    let z = (0, l.mFp)(),
        q = () => (_ > 0 && p > 0 ? D.intl.formatToPlainString(D.t['OvJs9/'], { count: _ + p }) : _ > 0 ? D.intl.formatToPlainString(D.t['n/1QFR'], { count: _ }) : D.intl.formatToPlainString(D.t.ypezTE, { count: p })),
        $ = () => (_ > 0 && p > 0 ? D.intl.formatToPlainString(D.t.EJHRcX, { count: _ + p }) : _ > 0 ? D.intl.formatToPlainString(D.t.HTE8JC, { count: _ }) : D.intl.formatToPlainString(D.t.e7f8r6, { count: p })),
        X = () => {
            null == O || O(!x);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                M(k({ ref: K }, H.getContainerProps(), z), {
                    'aria-busy': R,
                    children: W
                })
            ),
            _ > 0 || p > 0
                ? (0, r.jsxs)(l.P3F, {
                      tag: 'div',
                      className: L.resultsBlocked,
                      onClick: X,
                      children: [
                          (0, r.jsx)('div', { className: L.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: L.__invalid_resultsBlockedText,
                              children: x ? q() : $()
                          })
                      ]
                  })
                : null,
            !R &&
                !S &&
                (0, r.jsx)(w.Z, {
                    renderPageWrapper: y,
                    onPageChange: h,
                    offset: N,
                    totalCount: null != g ? g : C,
                    pageSize: P.vpv
                })
        ]
    });
}
function G(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, _.KS)(t) : null;
    if (null == i) return null;
    let a = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i, {
                className: L.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(l.Text, {
                className: L.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, v.Em)(t.type)
        ? (0, r.jsx)(l.P3F, {
              className: o()(L.parentChannelName, L.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: a
          })
        : (0, r.jsx)('div', {
              className: L.parentChannelName,
              children: a
          });
}
function B(e) {
    var t, n, a;
    let { channel: o, results: s, highlighter: c, startIndex: u, resultRefs: d, totalResults: E, scrollTo: b, renderEmbeds: v, offset: w, jumpToMessage: D, listNavigator: x, favoriteSearch: j } = e,
        U = O.cC.useSetting(),
        B = (0, h.p)(),
        Z = i.useCallback((e) => {
            if (e === N.Z.getChannelId()) return;
            let t = I.Z.getChannel(e);
            null != t && (S.Z.can(P.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, y.Kh)(t.id);
        }, []),
        F = null != o ? (0, f.F6)(o, C.default, A.Z, !1) : '???',
        V = j && null != o.guild_id ? (null == (t = T.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        H = (null == o ? void 0 : o.parent_id) != null ? I.Z.getChannel(o.parent_id) : null,
        Y = null != (n = null == H ? void 0 : H.name) ? n : null,
        W = null != (a = (0, _.KS)(o)) ? a : l.VL1,
        K = S.Z.can(P.Plq.MANAGE_MESSAGES, o),
        { content: z } = (0, g.ZP)(
            {
                content: F,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: B
            }
        ),
        q = i.useRef(null),
        [$, X] = i.useState(!1);
    i.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let Q = [F, Y, V].filter((e) => null != e).join(', ');
    return (0, r.jsx)(p.aQ.Provider, {
        value: (0, m.Z)(U, K),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: L.searchResultGroup,
            'aria-label': Q,
            children: [
                (0, r.jsx)(l.P3F, {
                    onClick: () => Z(o.id),
                    children: (0, r.jsxs)('div', {
                        className: L.channelNameContainer,
                        children: [
                            (0, r.jsx)(W, {
                                className: L.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(l.ua7, {
                                text: F,
                                shouldShow: $,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        M(k({}, e), {
                                            ref: q,
                                            className: L.channelNameText,
                                            children: [j && null !== V && ''.concat(V, ' : '), z]
                                        })
                                    )
                            }),
                            (0, r.jsx)(G, {
                                parentChannel: H,
                                onSelectChannel: Z
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        R.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: E,
                            scrollTo: b,
                            renderEmbeds: v,
                            searchOffset: w,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: D,
                            listItemProps: x.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
let Z = i.memo(U);
