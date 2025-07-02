(n.d(t, { Z: () => k }), n(35282), n(539854), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(837969),
    o = n(481060),
    u = n(904245),
    c = n(603263),
    d = n(963374),
    E = n(607070),
    _ = n(933557),
    A = n(471445),
    m = n(95398),
    T = n(905405),
    f = n(255269),
    g = n(937889),
    I = n(804063),
    h = n(703656),
    O = n(359110),
    N = n(695346),
    p = n(131704),
    R = n(592125),
    S = n(430824),
    C = n(496675),
    b = n(699516),
    v = n(768119),
    D = n(944486),
    x = n(594174),
    L = n(861262),
    M = n(101695),
    U = n(683101),
    j = n(981631),
    P = n(388032),
    y = n(378869);
function w(e) {
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
function G(e, t) {
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
function k(e) {
    var t;
    let { search: n, searchId: i, renderEmbeds: s, scrollTo: _, searchResults: A, blockCount: m, ignoreCount: T, onPageChange: f, onClick: g } = e,
        { offset: O, totalResults: N, isSearching: p, showBlockedResults: S } = n,
        C = l.useCallback(
            (e, t) => {
                if ((null == g || g(e, t), (0, I.Z)(e))) {
                    let t = R.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: v.Z.getAnalyticsId(i) }), (0, h.uL)(j.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [g, i]
        ),
        D = l.useMemo(() => {
            let e;
            if (null == A) return [];
            let t = 0;
            return A.reduce((n, r) => {
                let l = r.find((e) => e.isSearchHit);
                if (!S && null != l && (b.Z.isBlockedForMessage(l) || b.Z.isIgnoredForMessage(l))) return n;
                let i = R.Z.getChannel(r[0].channel_id);
                return (
                    null == i ||
                        ((null == e || e !== i.id) &&
                            n.push({
                                channel: i,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == i ? void 0 : i.id)),
                    n
                );
            }, []);
        }, [A, S]),
        x = l.useRef([]),
        U = D.reduce((e, t) => e + 1 + t.results.length, 0),
        k = l.useCallback(
            (e, t) => {
                if (!E.Z.keyboardModeEnabled) return;
                let n = x.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                _(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [_]
        ),
        F = l.useCallback((e) => {
            let t = x.current[e];
            null == t || t.jumpTo();
        }, []),
        z = (0, a.ZP)({
            navId: 'search-results',
            itemCount: U,
            focusedIndex: 0,
            setFocus: k,
            onSelect: F
        }),
        B = v.Z.getQuery(i),
        V = (0, L.k)(i) === j.aib.FAVORITES,
        H = (0, d.nC)(null != (t = null == B ? void 0 : B.content) ? t : ''),
        K = D.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, r.jsx)(
                Z,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: l,
                    resultRefs: x,
                    totalResults: N,
                    scrollTo: _,
                    searchId: i,
                    renderEmbeds: s,
                    offset: O,
                    jumpToMessage: C,
                    listNavigator: z,
                    favoriteSearch: V
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    K.push();
    let W = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null == (e = W.current) || e.focus();
    }, [A]);
    let q = (0, o.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                G(w({ ref: W }, z.getContainerProps(), q), {
                    'aria-busy': p,
                    children: K
                })
            ),
            m > 0 || T > 0
                ? (0, r.jsxs)(o.P3F, {
                      tag: 'div',
                      className: y.resultsBlocked,
                      onClick: () => c.QY(i, !S),
                      children: [
                          (0, r.jsx)('div', { className: y.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: y.__invalid_resultsBlockedText,
                              children: S ? (m > 0 && T > 0 ? P.intl.formatToPlainString(P.t['OvJs9/'], { count: m + T }) : m > 0 ? P.intl.formatToPlainString(P.t['n/1QFR'], { count: m }) : P.intl.formatToPlainString(P.t.ypezTE, { count: T })) : m > 0 && T > 0 ? P.intl.formatToPlainString(P.t.EJHRcX, { count: m + T }) : m > 0 ? P.intl.formatToPlainString(P.t.HTE8JC, { count: m }) : P.intl.formatToPlainString(P.t.e7f8r6, { count: T })
                          })
                      ]
                  })
                : null,
            !p &&
                !V &&
                (0, r.jsx)(M.Z, {
                    onPageChange: f,
                    offset: O,
                    totalCount: N,
                    pageSize: j.vpv
                })
        ]
    });
}
function F(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, A.KS)(t) : null;
    if (null == l) return null;
    let i = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                className: y.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(o.Text, {
                className: y.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, p.Em)(t.type)
        ? (0, r.jsx)(o.P3F, {
              className: s()(y.parentChannelName, y.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: i
          })
        : (0, r.jsx)('div', {
              className: y.parentChannelName,
              children: i
          });
}
function Z(e) {
    var t, n, i;
    let { channel: s, results: a, highlighter: u, startIndex: c, resultRefs: d, totalResults: E, scrollTo: I, searchId: h, renderEmbeds: p, offset: v, jumpToMessage: L, listNavigator: M, favoriteSearch: P } = e,
        k = N.cC.useSetting(),
        Z = (0, T.p)(),
        z = l.useCallback((e) => {
            if (e === D.Z.getChannelId()) return;
            let t = R.Z.getChannel(e);
            null != t && C.Z.can(j.Plq.VIEW_CHANNEL, t) && (0, O.Kh)(t.id);
        }, []),
        B = null != s ? (0, _.F6)(s, x.default, b.Z, !1) : '???',
        V = P && null != s.guild_id ? (null == (t = S.Z.getGuild(s.guild_id)) ? void 0 : t.name) : null,
        H = (null == s ? void 0 : s.parent_id) != null ? R.Z.getChannel(s.parent_id) : null,
        K = null != (n = null == H ? void 0 : H.name) ? n : null,
        W = null != (i = (0, A.KS)(s)) ? i : o.VL1,
        q = C.Z.can(j.Plq.MANAGE_MESSAGES, s),
        { content: Y } = (0, g.ZP)(
            {
                content: B,
                embeds: []
            },
            {
                postProcessor: u,
                shouldFilterKeywords: Z
            }
        ),
        J = l.useRef(null),
        [X, Q] = l.useState(!1);
    l.useEffect(() => {
        let e = J.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Q(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [B, K, V].filter((e) => null != e).join(', ');
    return (0, r.jsx)(m.aQ.Provider, {
        value: (0, f.Z)(k, q),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: y.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(o.P3F, {
                    onClick: () => z(s.id),
                    children: (0, r.jsxs)('div', {
                        className: y.channelNameContainer,
                        children: [
                            (0, r.jsx)(W, {
                                className: y.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(o.ua7, {
                                text: B,
                                shouldShow: X,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        G(w({}, e), {
                                            ref: J,
                                            className: y.channelNameText,
                                            children: [P && null !== V && ''.concat(V, ' : '), Y]
                                        })
                                    )
                            }),
                            (0, r.jsx)(F, {
                                parentChannel: H,
                                onSelectChannel: z
                            })
                        ]
                    })
                }),
                a.map((e, t) => {
                    let n = c + t;
                    return (0, r.jsx)(
                        U.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: E,
                            scrollTo: I,
                            searchId: h,
                            renderEmbeds: p,
                            searchOffset: v,
                            pageResultsLength: a.length,
                            result: e,
                            index: n,
                            onJump: L,
                            listItemProps: M.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
