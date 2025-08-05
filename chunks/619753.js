(n.d(t, { Z: () => Z }), n(35282), n(539854), n(388685));
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
    T = n(695346),
    S = n(131704),
    N = n(592125),
    m = n(430824),
    R = n(496675),
    A = n(699516),
    y = n(944486),
    b = n(594174),
    P = n(101695),
    D = n(683101),
    v = n(981631),
    M = n(388032),
    k = n(378869);
function U(e) {
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
function L(e, t) {
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
function j(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let r = null != t ? (0, _.KS)(t) : null;
    if (null == r) return null;
    let l = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r, {
                className: k.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, i.jsx)(a.Text, {
                className: k.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, S.Em)(t.type)
        ? (0, i.jsx)(a.P3F, {
              className: o()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: l
          })
        : (0, i.jsx)('div', {
              className: k.parentChannelName,
              children: l
          });
}
function x(e) {
    var t, n, l;
    let { channel: o, results: s, highlighter: c, startIndex: d, resultRefs: u, totalResults: f, scrollTo: C, renderEmbeds: S, offset: P, jumpToMessage: M, listNavigator: x, favoriteSearch: Z } = e,
        F = T.cC.useSetting(),
        w = (0, p.p)(),
        G = r.useCallback((e) => {
            if (e === y.Z.getChannelId()) return;
            let t = N.Z.getChannel(e);
            null != t && (R.Z.can(v.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, O.Kh)(t.id);
        }, []),
        V = null != o ? (0, h.F6)(o, b.default, A.Z, !1) : '???',
        B = Z && null != o.guild_id ? (null == (t = m.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        W = (null == o ? void 0 : o.parent_id) != null ? N.Z.getChannel(o.parent_id) : null,
        z = null != (n = null == W ? void 0 : W.name) ? n : null,
        H = null != (l = (0, _.KS)(o)) ? l : a.VL1,
        Y = R.Z.can(v.Plq.MANAGE_MESSAGES, o),
        { content: K } = (0, g.ZP)(
            {
                content: V,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: w
            }
        ),
        X = r.useRef(null),
        [q, J] = r.useState(!1);
    r.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let Q = [V, z, B].filter((e) => null != e).join(', ');
    return (0, i.jsx)(E.aQ.Provider, {
        value: (0, I.Z)(F, Y),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': Q,
            children: [
                (0, i.jsx)(a.P3F, {
                    onClick: () => G(o.id),
                    children: (0, i.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, i.jsx)(H, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(a.ua7, {
                                text: V,
                                shouldShow: q,
                                children: (e) =>
                                    (0, i.jsxs)(
                                        'span',
                                        L(U({}, e), {
                                            ref: X,
                                            className: k.channelNameText,
                                            children: [Z && null !== B && ''.concat(B, ' : '), K]
                                        })
                                    )
                            }),
                            (0, i.jsx)(j, {
                                parentChannel: W,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = d + t;
                    return (0, i.jsx)(
                        D.Z,
                        {
                            ref: (e) => {
                                u.current[n] = e;
                            },
                            totalResults: f,
                            scrollTo: C,
                            renderEmbeds: S,
                            searchOffset: P,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: M,
                            listItemProps: x.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
let Z = r.memo(function (e) {
    var t;
    let { search: n, renderEmbeds: l, scrollTo: o, searchResults: h, blockCount: _, ignoreCount: E, onPageChange: p, onClick: I, paginationTotalCount: g, renderPageWrapper: O, onBlockedResultsClick: T, searchRequestAnalyticsId: S, searchResultsQuery: m, isFavoritesSearch: R } = e,
        { offset: y, totalResults: b, isSearching: D, showBlockedResults: j } = n,
        Z = r.useCallback(
            (e, t) => {
                if ((null == I || I(e, t), (0, f.Z)(e))) {
                    let t = N.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: S }), (0, C.uL)(v.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [I, S]
        ),
        F = r.useMemo(() => {
            let e;
            if (null == h) return [];
            let t = 0;
            return h.reduce((n, i) => {
                let r = i.find((e) => e.isSearchHit);
                if (!j && null != r && (A.Z.isBlockedForMessage(r) || A.Z.isIgnoredForMessage(r))) return n;
                let l = N.Z.getChannel(i[0].channel_id);
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
        }, [h, j]),
        w = r.useRef([]),
        G = F.reduce((e, t) => e + 1 + t.results.length, 0),
        V = r.useCallback(
            (e, t) => {
                if (!u.Z.keyboardModeEnabled) return;
                let n = w.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let r = i.hitRef.current.getClientRects()[0];
                o(r.top - 0.5 * r.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [o]
        ),
        B = r.useCallback((e) => {
            let t = w.current[e];
            null == t || t.jumpTo();
        }, []),
        W = (0, s.ZP)({
            navId: 'search-results',
            itemCount: G,
            focusedIndex: 0,
            setFocus: V,
            onSelect: B
        }),
        z = (0, d.nC)(null != (t = null == m ? void 0 : m.content) ? t : ''),
        H = F.map((e) => {
            let { channel: t, results: n, startIndex: r } = e;
            return (0, i.jsx)(
                x,
                {
                    channel: t,
                    results: n,
                    highlighter: z,
                    startIndex: r,
                    resultRefs: w,
                    totalResults: b,
                    scrollTo: o,
                    renderEmbeds: l,
                    offset: y,
                    jumpToMessage: Z,
                    listNavigator: W,
                    favoriteSearch: null != R && R
                },
                ''.concat(t.id, '-').concat(r)
            );
        });
    H.push();
    let Y = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        null == (e = Y.current) || e.focus();
    }, [h]);
    let K = (0, a.mFp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                'div',
                L(U({ ref: Y }, W.getContainerProps(), K), {
                    'aria-busy': D,
                    children: H
                })
            ),
            _ > 0 || E > 0
                ? (0, i.jsxs)(a.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => {
                          null == T || T(!j);
                      },
                      children: [
                          (0, i.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: j ? (_ > 0 && E > 0 ? M.intl.formatToPlainString(M.t['OvJs9/'], { count: _ + E }) : _ > 0 ? M.intl.formatToPlainString(M.t['n/1QFR'], { count: _ }) : M.intl.formatToPlainString(M.t.ypezTE, { count: E })) : _ > 0 && E > 0 ? M.intl.formatToPlainString(M.t.EJHRcX, { count: _ + E }) : _ > 0 ? M.intl.formatToPlainString(M.t.HTE8JC, { count: _ }) : M.intl.formatToPlainString(M.t.e7f8r6, { count: E })
                          })
                      ]
                  })
                : null,
            !D &&
                !R &&
                (0, i.jsx)(P.Z, {
                    renderPageWrapper: O,
                    onPageChange: p,
                    offset: y,
                    totalCount: null != g ? g : b,
                    pageSize: v.vpv
                })
        ]
    });
});
