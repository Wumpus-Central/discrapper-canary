(n.d(t, { Z: () => G }), n(35282), n(539854), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(837969),
    a = n(481060),
    c = n(904245),
    d = n(963374),
    u = n(607070),
    h = n(933557),
    _ = n(471445),
    E = n(95398),
    p = n(905405),
    I = n(255269),
    g = n(937889),
    f = n(804063),
    C = n(703656),
    O = n(359110),
    S = n(695346),
    T = n(131704),
    m = n(592125),
    N = n(430824),
    R = n(496675),
    A = n(699516),
    y = n(944486),
    b = n(594174),
    P = n(748610),
    D = n(171900),
    v = n(518944),
    M = n(861262),
    k = n(101695),
    U = n(683101),
    L = n(981631),
    j = n(388032),
    x = n(378869);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let r = null != t ? (0, _.KS)(t) : null;
    if (null == r) return null;
    let l = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r, {
                className: x.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, i.jsx)(a.Text, {
                className: x.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, T.Em)(t.type)
        ? (0, i.jsx)(a.P3F, {
              className: o()(x.parentChannelName, x.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: l
          })
        : (0, i.jsx)('div', {
              className: x.parentChannelName,
              children: l
          });
}
function V(e) {
    var t, n, l;
    let { channel: o, results: s, highlighter: c, startIndex: d, resultRefs: u, totalResults: f, scrollTo: C, searchId: T, renderEmbeds: P, offset: D, jumpToMessage: v, listNavigator: M, favoriteSearch: k } = e,
        j = S.cC.useSetting(),
        V = (0, p.p)(),
        G = r.useCallback((e) => {
            if (e === y.Z.getChannelId()) return;
            let t = m.Z.getChannel(e);
            null != t && (R.Z.can(L.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, O.Kh)(t.id);
        }, []),
        B = null != o ? (0, h.F6)(o, b.default, A.Z, !1) : '???',
        W = k && null != o.guild_id ? (null == (t = N.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        z = (null == o ? void 0 : o.parent_id) != null ? m.Z.getChannel(o.parent_id) : null,
        H = null != (n = null == z ? void 0 : z.name) ? n : null,
        Y = null != (l = (0, _.KS)(o)) ? l : a.VL1,
        K = R.Z.can(L.Plq.MANAGE_MESSAGES, o),
        { content: q } = (0, g.ZP)(
            {
                content: B,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: V
            }
        ),
        X = r.useRef(null),
        [J, Q] = r.useState(!1);
    r.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Q(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [B, H, W].filter((e) => null != e).join(', ');
    return (0, i.jsx)(E.aQ.Provider, {
        value: (0, I.Z)(j, K),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: x.searchResultGroup,
            'aria-label': $,
            children: [
                (0, i.jsx)(a.P3F, {
                    onClick: () => G(o.id),
                    children: (0, i.jsxs)('div', {
                        className: x.channelNameContainer,
                        children: [
                            (0, i.jsx)(Y, {
                                className: x.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(a.ua7, {
                                text: B,
                                shouldShow: J,
                                children: (e) =>
                                    (0, i.jsxs)(
                                        'span',
                                        F(Z({}, e), {
                                            ref: X,
                                            className: x.channelNameText,
                                            children: [k && null !== W && ''.concat(W, ' : '), q]
                                        })
                                    )
                            }),
                            (0, i.jsx)(w, {
                                parentChannel: z,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = d + t;
                    return (0, i.jsx)(
                        U.Z,
                        {
                            ref: (e) => {
                                u.current[n] = e;
                            },
                            totalResults: f,
                            scrollTo: C,
                            searchId: T,
                            renderEmbeds: P,
                            searchOffset: D,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: v,
                            listItemProps: M.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
let G = r.memo(function (e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: o, scrollTo: h, searchResults: _, blockCount: E, ignoreCount: p, onPageChange: I, onClick: g, paginationTotalCount: O, renderPageWrapper: S } = e,
        { offset: T, totalResults: N, isSearching: R, showBlockedResults: y } = n,
        b = r.useCallback(
            (e, t) => {
                if ((null == g || g(e, t), (0, f.Z)(e))) {
                    let t = m.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: D.Z.getAnalyticsId(l) }), (0, C.uL)(L.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [g, l]
        ),
        U = r.useMemo(() => {
            let e;
            if (null == _) return [];
            let t = 0;
            return _.reduce((n, i) => {
                let r = i.find((e) => e.isSearchHit);
                if (!y && null != r && (A.Z.isBlockedForMessage(r) || A.Z.isIgnoredForMessage(r))) return n;
                let l = m.Z.getChannel(i[0].channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) &&
                            n.push({
                                channel: l,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(i),
                        (e = null == l ? void 0 : l.id)),
                    n
                );
            }, []);
        }, [_, y]),
        w = r.useRef([]),
        G = U.reduce((e, t) => e + 1 + t.results.length, 0),
        B = r.useCallback(
            (e, t) => {
                if (!u.Z.keyboardModeEnabled) return;
                let n = w.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let r = i.hitRef.current.getClientRects()[0];
                h(r.top - 0.5 * r.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [h]
        ),
        W = r.useCallback((e) => {
            let t = w.current[e];
            null == t || t.jumpTo();
        }, []),
        z = (0, s.ZP)({
            navId: 'search-results',
            itemCount: G,
            focusedIndex: 0,
            setFocus: B,
            onSelect: W
        }),
        H = v.Z.getSearchResultsQuery(l),
        Y = (0, M.k)(l) === L.aib.FAVORITES,
        K = (0, d.nC)(null != (t = null == H ? void 0 : H.content) ? t : ''),
        q = U.map((e) => {
            let { channel: t, results: n, startIndex: r } = e;
            return (0, i.jsx)(
                V,
                {
                    channel: t,
                    results: n,
                    highlighter: K,
                    startIndex: r,
                    resultRefs: w,
                    totalResults: N,
                    scrollTo: h,
                    searchId: l,
                    renderEmbeds: o,
                    offset: T,
                    jumpToMessage: b,
                    listNavigator: z,
                    favoriteSearch: Y
                },
                ''.concat(t.id, '-').concat(r)
            );
        });
    q.push();
    let X = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        null == (e = X.current) || e.focus();
    }, [_]);
    let J = (0, a.mFp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                'div',
                F(Z({ ref: X }, z.getContainerProps(), J), {
                    'aria-busy': R,
                    children: q
                })
            ),
            E > 0 || p > 0
                ? (0, i.jsxs)(a.P3F, {
                      tag: 'div',
                      className: x.resultsBlocked,
                      onClick: () => P.Z.setShowBlockedResults(l, !y),
                      children: [
                          (0, i.jsx)('div', { className: x.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: x.__invalid_resultsBlockedText,
                              children: y ? (E > 0 && p > 0 ? j.intl.formatToPlainString(j.t['OvJs9/'], { count: E + p }) : E > 0 ? j.intl.formatToPlainString(j.t['n/1QFR'], { count: E }) : j.intl.formatToPlainString(j.t.ypezTE, { count: p })) : E > 0 && p > 0 ? j.intl.formatToPlainString(j.t.EJHRcX, { count: E + p }) : E > 0 ? j.intl.formatToPlainString(j.t.HTE8JC, { count: E }) : j.intl.formatToPlainString(j.t.e7f8r6, { count: p })
                          })
                      ]
                  })
                : null,
            !R &&
                !Y &&
                (0, i.jsx)(k.Z, {
                    renderPageWrapper: S,
                    onPageChange: I,
                    offset: T,
                    totalCount: null != O ? O : N,
                    pageSize: L.vpv
                })
        ]
    });
});
