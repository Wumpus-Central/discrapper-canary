(n.d(t, { Z: () => G }), n(35282), n(539854), n(388685));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(837969),
    o = n(481060),
    u = n(904245),
    c = n(963374),
    E = n(607070),
    d = n(933557),
    _ = n(471445),
    A = n(95398),
    T = n(905405),
    m = n(255269),
    I = n(937889),
    g = n(804063),
    f = n(703656),
    N = n(359110),
    h = n(695346),
    O = n(131704),
    p = n(592125),
    R = n(430824),
    S = n(496675),
    C = n(699516),
    v = n(944486),
    D = n(594174),
    b = n(101695),
    L = n(683101),
    x = n(981631),
    U = n(388032),
    M = n(378869);
function P(e) {
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
function j(e, t) {
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
function y(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, _.KS)(t) : null;
    if (null == l) return null;
    let s = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                className: M.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(o.Text, {
                className: M.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, O.Em)(t.type)
        ? (0, r.jsx)(o.P3F, {
              className: i()(M.parentChannelName, M.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: s
          })
        : (0, r.jsx)('div', {
              className: M.parentChannelName,
              children: s
          });
}
function w(e) {
    var t, n, s;
    let { channel: i, results: a, highlighter: u, startIndex: c, resultRefs: E, totalResults: g, scrollTo: f, renderEmbeds: O, offset: b, jumpToMessage: U, listNavigator: w, favoriteSearch: G } = e,
        k = h.cC.useSetting(),
        F = (0, T.p)(),
        z = l.useCallback((e) => {
            if (e === v.Z.getChannelId()) return;
            let t = p.Z.getChannel(e);
            null != t && (S.Z.can(x.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, N.Kh)(t.id);
        }, []),
        Z = null != i ? (0, d.F6)(i, D.default, C.Z, !1) : '???',
        B = G && null != i.guild_id ? (null == (t = R.Z.getGuild(i.guild_id)) ? void 0 : t.name) : null,
        V = (null == i ? void 0 : i.parent_id) != null ? p.Z.getChannel(i.parent_id) : null,
        H = null != (n = null == V ? void 0 : V.name) ? n : null,
        K = null != (s = (0, _.KS)(i)) ? s : o.VL1,
        W = S.Z.can(x.Plq.MANAGE_MESSAGES, i),
        { content: q } = (0, I.ZP)(
            {
                content: Z,
                embeds: []
            },
            {
                postProcessor: u,
                shouldFilterKeywords: F
            }
        ),
        Y = l.useRef(null),
        [J, X] = l.useState(!1);
    l.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let Q = [Z, H, B].filter((e) => null != e).join(', ');
    return (0, r.jsx)(A.aQ.Provider, {
        value: (0, m.Z)(k, W),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: M.searchResultGroup,
            'aria-label': Q,
            children: [
                (0, r.jsx)(o.P3F, {
                    onClick: () => z(i.id),
                    children: (0, r.jsxs)('div', {
                        className: M.channelNameContainer,
                        children: [
                            (0, r.jsx)(K, {
                                className: M.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(o.ua7, {
                                text: Z,
                                shouldShow: J,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        j(P({}, e), {
                                            ref: Y,
                                            className: M.channelNameText,
                                            children: [G && null !== B && ''.concat(B, ' : '), q]
                                        })
                                    )
                            }),
                            (0, r.jsx)(y, {
                                parentChannel: V,
                                onSelectChannel: z
                            })
                        ]
                    })
                }),
                a.map((e, t) => {
                    let n = c + t;
                    return (0, r.jsx)(
                        L.Z,
                        {
                            ref: (e) => {
                                E.current[n] = e;
                            },
                            totalResults: g,
                            scrollTo: f,
                            renderEmbeds: O,
                            searchOffset: b,
                            pageResultsLength: a.length,
                            result: e,
                            index: n,
                            onJump: U,
                            listItemProps: w.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
let G = l.memo(function (e) {
    var t;
    let { search: n, renderEmbeds: s, scrollTo: i, searchResults: d, blockCount: _, ignoreCount: A, onPageChange: T, onClick: m, paginationTotalCount: I, renderPageWrapper: N, onBlockedResultsClick: h, searchRequestAnalyticsId: O, searchResultsQuery: R, isFavoritesSearch: S } = e,
        { offset: v, totalResults: D, isSearching: L, showBlockedResults: y } = n,
        G = l.useCallback(
            (e, t) => {
                if ((null == m || m(e, t), (0, g.Z)(e))) {
                    let t = p.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: O }), (0, f.uL)(x.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [m, O]
        ),
        k = l.useMemo(() => {
            let e;
            if (null == d) return [];
            let t = 0;
            return d.reduce((n, r) => {
                let l = r.find((e) => e.isSearchHit);
                if (!y && null != l && (C.Z.isBlockedForMessage(l) || C.Z.isIgnoredForMessage(l))) return n;
                let s = p.Z.getChannel(r[0].channel_id);
                return (
                    null == s ||
                        ((null == e || e !== s.id) &&
                            n.push({
                                channel: s,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == s ? void 0 : s.id)),
                    n
                );
            }, []);
        }, [d, y]),
        F = l.useRef([]),
        z = k.reduce((e, t) => e + 1 + t.results.length, 0),
        Z = l.useCallback(
            (e, t) => {
                if (!E.Z.keyboardModeEnabled) return;
                let n = F.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                i(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [i]
        ),
        B = l.useCallback((e) => {
            let t = F.current[e];
            null == t || t.jumpTo();
        }, []),
        V = (0, a.ZP)({
            navId: 'search-results',
            itemCount: z,
            focusedIndex: 0,
            setFocus: Z,
            onSelect: B
        }),
        H = (0, c.nC)(null != (t = null == R ? void 0 : R.content) ? t : ''),
        K = k.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, r.jsx)(
                w,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: l,
                    resultRefs: F,
                    totalResults: D,
                    scrollTo: i,
                    renderEmbeds: s,
                    offset: v,
                    jumpToMessage: G,
                    listNavigator: V,
                    favoriteSearch: null != S && S
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    K.push();
    let W = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null == (e = W.current) || e.focus();
    }, [d]);
    let q = (0, o.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                j(P({ ref: W }, V.getContainerProps(), q), {
                    'aria-busy': L,
                    children: K
                })
            ),
            _ > 0 || A > 0
                ? (0, r.jsxs)(o.P3F, {
                      tag: 'div',
                      className: M.resultsBlocked,
                      onClick: () => {
                          null == h || h(!y);
                      },
                      children: [
                          (0, r.jsx)('div', { className: M.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: M.__invalid_resultsBlockedText,
                              children: y ? (_ > 0 && A > 0 ? U.intl.formatToPlainString(U.t['OvJs9/'], { count: _ + A }) : _ > 0 ? U.intl.formatToPlainString(U.t['n/1QFR'], { count: _ }) : U.intl.formatToPlainString(U.t.ypezTE, { count: A })) : _ > 0 && A > 0 ? U.intl.formatToPlainString(U.t.EJHRcX, { count: _ + A }) : _ > 0 ? U.intl.formatToPlainString(U.t.HTE8JC, { count: _ }) : U.intl.formatToPlainString(U.t.e7f8r6, { count: A })
                          })
                      ]
                  })
                : null,
            !L &&
                !S &&
                (0, r.jsx)(b.Z, {
                    renderPageWrapper: N,
                    onPageChange: T,
                    offset: v,
                    totalCount: null != I ? I : D,
                    pageSize: x.vpv
                })
        ]
    });
});
