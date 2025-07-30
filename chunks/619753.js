(n.d(t, { Z: () => w }), n(35282), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(837969),
    s = n(481060),
    c = n(904245),
    u = n(963374),
    d = n(607070),
    _ = n(933557),
    E = n(471445),
    p = n(95398),
    O = n(905405),
    f = n(255269),
    I = n(937889),
    h = n(804063),
    T = n(703656),
    S = n(359110),
    m = n(695346),
    g = n(131704),
    N = n(592125),
    R = n(430824),
    b = n(496675),
    y = n(699516),
    A = n(944486),
    C = n(594174),
    P = n(748610),
    D = n(171900),
    M = n(518944),
    j = n(861262),
    x = n(101695),
    k = n(683101),
    v = n(981631),
    L = n(388032),
    U = n(378869);
function Z(e) {
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
function F(e, t) {
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
let w = i.memo(function (e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: _, searchResults: E, blockCount: p, ignoreCount: O, onPageChange: f, onClick: I } = e,
        { offset: S, totalResults: m, isSearching: g, showBlockedResults: R } = n,
        b = i.useCallback(
            (e, t) => {
                if ((null == I || I(e, t), (0, h.Z)(e))) {
                    let t = N.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: D.Z.getAnalyticsId(l) }), (0, T.uL)(v.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [I, l]
        ),
        A = i.useMemo(() => {
            let e;
            if (null == E) return [];
            let t = 0;
            return E.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!R && null != i && (y.Z.isBlockedForMessage(i) || y.Z.isIgnoredForMessage(i))) return n;
                let l = N.Z.getChannel(r[0].channel_id);
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
        }, [E, R]),
        C = i.useRef([]),
        k = A.reduce((e, t) => e + 1 + t.results.length, 0),
        w = i.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = C.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                _(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [_]
        ),
        G = i.useCallback((e) => {
            let t = C.current[e];
            null == t || t.jumpTo();
        }, []),
        B = (0, o.ZP)({
            navId: 'search-results',
            itemCount: k,
            focusedIndex: 0,
            setFocus: w,
            onSelect: G
        }),
        W = M.Z.getSearchResultsQuery(l),
        H = (0, j.k)(l) === v.aib.FAVORITES,
        z = (0, u.nC)(null != (t = null == W ? void 0 : W.content) ? t : ''),
        Y = A.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                V,
                {
                    channel: t,
                    results: n,
                    highlighter: z,
                    startIndex: i,
                    resultRefs: C,
                    totalResults: m,
                    scrollTo: _,
                    searchId: l,
                    renderEmbeds: a,
                    offset: S,
                    jumpToMessage: b,
                    listNavigator: B,
                    favoriteSearch: H
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    Y.push();
    let K = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = K.current) || e.focus();
    }, [E]);
    let q = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                F(Z({ ref: K }, B.getContainerProps(), q), {
                    'aria-busy': g,
                    children: Y
                })
            ),
            p > 0 || O > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: U.resultsBlocked,
                      onClick: () => P.Z.setShowBlockedResults(l, !R),
                      children: [
                          (0, r.jsx)('div', { className: U.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: U.__invalid_resultsBlockedText,
                              children: R ? (p > 0 && O > 0 ? L.intl.formatToPlainString(L.t['OvJs9/'], { count: p + O }) : p > 0 ? L.intl.formatToPlainString(L.t['n/1QFR'], { count: p }) : L.intl.formatToPlainString(L.t.ypezTE, { count: O })) : p > 0 && O > 0 ? L.intl.formatToPlainString(L.t.EJHRcX, { count: p + O }) : p > 0 ? L.intl.formatToPlainString(L.t.HTE8JC, { count: p }) : L.intl.formatToPlainString(L.t.e7f8r6, { count: O })
                          })
                      ]
                  })
                : null,
            !g &&
                !H &&
                (0, r.jsx)(x.Z, {
                    onPageChange: f,
                    offset: S,
                    totalCount: m,
                    pageSize: v.vpv
                })
        ]
    });
});
function G(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, E.KS)(t) : null;
    if (null == i) return null;
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i, {
                className: U.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: U.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, g.Em)(t.type)
        ? (0, r.jsx)(s.P3F, {
              className: a()(U.parentChannelName, U.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: l
          })
        : (0, r.jsx)('div', {
              className: U.parentChannelName,
              children: l
          });
}
function V(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: h, scrollTo: T, searchId: g, renderEmbeds: P, offset: D, jumpToMessage: M, listNavigator: j, favoriteSearch: x } = e,
        L = m.cC.useSetting(),
        w = (0, O.p)(),
        V = i.useCallback((e) => {
            if (e === A.Z.getChannelId()) return;
            let t = N.Z.getChannel(e);
            null != t && (b.Z.can(v.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, S.Kh)(t.id);
        }, []),
        B = null != a ? (0, _.F6)(a, C.default, y.Z, !1) : '???',
        W = x && null != a.guild_id ? (null == (t = R.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        H = (null == a ? void 0 : a.parent_id) != null ? N.Z.getChannel(a.parent_id) : null,
        z = null != (n = null == H ? void 0 : H.name) ? n : null,
        Y = null != (l = (0, E.KS)(a)) ? l : s.VL1,
        K = b.Z.can(v.Plq.MANAGE_MESSAGES, a),
        { content: q } = (0, I.ZP)(
            {
                content: B,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: w
            }
        ),
        X = i.useRef(null),
        [Q, J] = i.useState(!1);
    i.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [B, z, W].filter((e) => null != e).join(', ');
    return (0, r.jsx)(p.aQ.Provider, {
        value: (0, f.Z)(L, K),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: U.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => V(a.id),
                    children: (0, r.jsxs)('div', {
                        className: U.channelNameContainer,
                        children: [
                            (0, r.jsx)(Y, {
                                className: U.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: B,
                                shouldShow: Q,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        F(Z({}, e), {
                                            ref: X,
                                            className: U.channelNameText,
                                            children: [x && null !== W && ''.concat(W, ' : '), q]
                                        })
                                    )
                            }),
                            (0, r.jsx)(G, {
                                parentChannel: H,
                                onSelectChannel: V
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        k.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: h,
                            scrollTo: T,
                            searchId: g,
                            renderEmbeds: P,
                            searchOffset: D,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: M,
                            listItemProps: j.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
