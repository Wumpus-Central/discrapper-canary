(n.d(t, { Z: () => U }), n(35282), n(539854), n(388685));
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
    S = n(255269),
    I = n(937889),
    f = n(804063),
    h = n(703656),
    T = n(359110),
    m = n(695346),
    g = n(131704),
    N = n(592125),
    y = n(430824),
    R = n(496675),
    A = n(699516),
    b = n(944486),
    C = n(594174),
    P = n(101695),
    D = n(683101),
    M = n(981631),
    j = n(388032),
    x = n(378869);
function v(e) {
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
function k(e, t) {
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
function Z(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, E.KS)(t) : null;
    if (null == i) return null;
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i, {
                className: x.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: x.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, g.Em)(t.type)
        ? (0, r.jsx)(s.P3F, {
              className: a()(x.parentChannelName, x.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: l
          })
        : (0, r.jsx)('div', {
              className: x.parentChannelName,
              children: l
          });
}
function L(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: f, scrollTo: h, renderEmbeds: g, offset: P, jumpToMessage: j, listNavigator: L, favoriteSearch: U } = e,
        F = m.cC.useSetting(),
        w = (0, O.p)(),
        G = i.useCallback((e) => {
            if (e === b.Z.getChannelId()) return;
            let t = N.Z.getChannel(e);
            null != t && (R.Z.can(M.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, T.Kh)(t.id);
        }, []),
        V = null != a ? (0, _.F6)(a, C.default, A.Z, !1) : '???',
        B = U && null != a.guild_id ? (null == (t = y.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        W = (null == a ? void 0 : a.parent_id) != null ? N.Z.getChannel(a.parent_id) : null,
        H = null != (n = null == W ? void 0 : W.name) ? n : null,
        z = null != (l = (0, E.KS)(a)) ? l : s.VL1,
        Y = R.Z.can(M.Plq.MANAGE_MESSAGES, a),
        { content: K } = (0, I.ZP)(
            {
                content: V,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: w
            }
        ),
        q = i.useRef(null),
        [Q, X] = i.useState(!1);
    i.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [V, H, B].filter((e) => null != e).join(', ');
    return (0, r.jsx)(p.aQ.Provider, {
        value: (0, S.Z)(F, Y),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: x.searchResultGroup,
            'aria-label': J,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => G(a.id),
                    children: (0, r.jsxs)('div', {
                        className: x.channelNameContainer,
                        children: [
                            (0, r.jsx)(z, {
                                className: x.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: V,
                                shouldShow: Q,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        k(v({}, e), {
                                            ref: q,
                                            className: x.channelNameText,
                                            children: [U && null !== B && ''.concat(B, ' : '), K]
                                        })
                                    )
                            }),
                            (0, r.jsx)(Z, {
                                parentChannel: W,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        D.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: f,
                            scrollTo: h,
                            renderEmbeds: g,
                            searchOffset: P,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: j,
                            listItemProps: L.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
let U = i.memo(function (e) {
    var t;
    let { search: n, renderEmbeds: l, scrollTo: a, searchResults: _, blockCount: E, ignoreCount: p, onPageChange: O, onClick: S, paginationTotalCount: I, renderPageWrapper: T, onBlockedResultsClick: m, searchRequestAnalyticsId: g, searchResultsQuery: y, isFavoritesSearch: R } = e,
        { offset: b, totalResults: C, isSearching: D, showBlockedResults: Z } = n,
        U = i.useCallback(
            (e, t) => {
                if ((null == S || S(e, t), (0, f.Z)(e))) {
                    let t = N.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: g }), (0, h.uL)(M.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [S, g]
        ),
        F = i.useMemo(() => {
            let e;
            if (null == _) return [];
            let t = 0;
            return _.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!Z && null != i && (A.Z.isBlockedForMessage(i) || A.Z.isIgnoredForMessage(i))) return n;
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
        }, [_, Z]),
        w = i.useRef([]),
        G = F.reduce((e, t) => e + 1 + t.results.length, 0),
        V = i.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = w.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                a(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [a]
        ),
        B = i.useCallback((e) => {
            let t = w.current[e];
            null == t || t.jumpTo();
        }, []),
        W = (0, o.ZP)({
            navId: 'search-results',
            itemCount: G,
            focusedIndex: 0,
            setFocus: V,
            onSelect: B
        }),
        H = (0, u.nC)(null != (t = null == y ? void 0 : y.content) ? t : ''),
        z = F.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                L,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: i,
                    resultRefs: w,
                    totalResults: C,
                    scrollTo: a,
                    renderEmbeds: l,
                    offset: b,
                    jumpToMessage: U,
                    listNavigator: W,
                    favoriteSearch: null != R && R
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    z.push();
    let Y = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = Y.current) || e.focus();
    }, [_]);
    let K = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                k(v({ ref: Y }, W.getContainerProps(), K), {
                    'aria-busy': D,
                    children: z
                })
            ),
            E > 0 || p > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: x.resultsBlocked,
                      onClick: () => {
                          null == m || m(!Z);
                      },
                      children: [
                          (0, r.jsx)('div', { className: x.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: x.__invalid_resultsBlockedText,
                              children: Z ? (E > 0 && p > 0 ? j.intl.formatToPlainString(j.t['OvJs9/'], { count: E + p }) : E > 0 ? j.intl.formatToPlainString(j.t['n/1QFR'], { count: E }) : j.intl.formatToPlainString(j.t.ypezTE, { count: p })) : E > 0 && p > 0 ? j.intl.formatToPlainString(j.t.EJHRcX, { count: E + p }) : E > 0 ? j.intl.formatToPlainString(j.t.HTE8JC, { count: E }) : j.intl.formatToPlainString(j.t.e7f8r6, { count: p })
                          })
                      ]
                  })
                : null,
            !D &&
                !R &&
                (0, r.jsx)(P.Z, {
                    renderPageWrapper: T,
                    onPageChange: O,
                    offset: b,
                    totalCount: null != I ? I : C,
                    pageSize: M.vpv
                })
        ]
    });
});
