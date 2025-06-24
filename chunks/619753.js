n.d(t, { Z: () => L }), n(35282), n(539854), n(388685);
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
    h = n(933557),
    f = n(471445),
    m = n(95398),
    g = n(905405),
    b = n(255269),
    _ = n(937889),
    y = n(804063),
    x = n(703656),
    C = n(359110),
    v = n(695346),
    j = n(131704),
    O = n(592125),
    E = n(430824),
    I = n(496675),
    S = n(699516),
    P = n(768119),
    Z = n(944486),
    N = n(594174),
    T = n(101695),
    A = n(683101),
    w = n(981631),
    R = n(388032),
    M = n(378869);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: h, searchResults: f, blockCount: m, ignoreCount: g, onPageChange: b, onClick: _ } = e,
        { offset: C, totalResults: v, isSearching: j, showBlockedResults: E } = n,
        I = i.useCallback(
            (e, t) => {
                if ((null == _ || _(e, t), (0, y.Z)(e))) {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: P.Z.getAnalyticsId(l) }), (0, x.uL)(w.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [_, l]
        ),
        Z = i.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!E && null != i && (S.Z.isBlockedForMessage(i) || S.Z.isIgnoredForMessage(i))) return n;
                let l = O.Z.getChannel(r[0].channel_id);
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
        }, [f, E]),
        N = i.useRef([]),
        A = Z.reduce((e, t) => e + 1 + t.results.length, 0),
        L = i.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = N.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                h(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [h]
        ),
        U = i.useCallback((e) => {
            let t = N.current[e];
            null == t || t.jumpTo();
        }, []),
        F = (0, o.ZP)({
            navId: 'search-results',
            itemCount: A,
            focusedIndex: 0,
            setFocus: L,
            onSelect: U
        }),
        G = P.Z.getQuery(l),
        H = P.Z.getSearchType(l) === w.aib.FAVORITES,
        V = (0, d.nC)(null != (t = null == G ? void 0 : G.content) ? t : ''),
        z = Z.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                B,
                {
                    channel: t,
                    results: n,
                    highlighter: V,
                    startIndex: i,
                    resultRefs: N,
                    totalResults: v,
                    scrollTo: h,
                    searchId: l,
                    renderEmbeds: a,
                    offset: C,
                    jumpToMessage: I,
                    listNavigator: F,
                    favoriteSearch: H
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    z.push();
    let W = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = W.current) || e.focus();
    }, [f]);
    let Y = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                D(k({ ref: W }, F.getContainerProps(), Y), {
                    'aria-busy': j,
                    children: z
                })
            ),
            m > 0 || g > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: M.resultsBlocked,
                      onClick: () => u.QY(l, !E),
                      children: [
                          (0, r.jsx)('div', { className: M.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: M.__invalid_resultsBlockedText,
                              children: E ? (m > 0 && g > 0 ? R.intl.formatToPlainString(R.t['OvJs9/'], { count: m + g }) : m > 0 ? R.intl.formatToPlainString(R.t['n/1QFR'], { count: m }) : R.intl.formatToPlainString(R.t.ypezTE, { count: g })) : m > 0 && g > 0 ? R.intl.formatToPlainString(R.t.EJHRcX, { count: m + g }) : m > 0 ? R.intl.formatToPlainString(R.t.HTE8JC, { count: m }) : R.intl.formatToPlainString(R.t.e7f8r6, { count: g })
                          })
                      ]
                  })
                : null,
            !j &&
                !H &&
                (0, r.jsx)(T.Z, {
                    onPageChange: b,
                    offset: C,
                    totalCount: v,
                    pageSize: w.vpv
                })
        ]
    });
}
function U(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, f.KS)(t) : null;
    if (null == i) return null;
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i, {
                className: M.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: M.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, j.Em)(t.type)
        ? (0, r.jsx)(s.P3F, {
              className: a()(M.parentChannelName, M.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: l
          })
        : (0, r.jsx)('div', {
              className: M.parentChannelName,
              children: l
          });
}
function B(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: y, searchId: x, renderEmbeds: j, offset: P, jumpToMessage: T, listNavigator: R, favoriteSearch: L } = e,
        B = v.cC.useSetting(),
        F = (0, g.p)(),
        G = i.useCallback((e) => {
            if (e === Z.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && I.Z.can(w.Plq.VIEW_CHANNEL, t) && (0, C.Kh)(t.id);
        }, []),
        H = null != a ? (0, h.F6)(a, N.default, S.Z, !1) : '???',
        V = L && null != a.guild_id ? (null == (t = E.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        z = (null == a ? void 0 : a.parent_id) != null ? O.Z.getChannel(a.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        Y = null != (l = (0, f.KS)(a)) ? l : s.VL1,
        q = I.Z.can(w.Plq.MANAGE_MESSAGES, a),
        { content: K } = (0, _.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: F
            }
        ),
        X = i.useRef(null),
        [Q, J] = i.useState(!1);
    i.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [H, W, V].filter((e) => null != e).join(', ');
    return (0, r.jsx)(m.aQ.Provider, {
        value: (0, b.Z)(B, q),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: M.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => G(a.id),
                    children: (0, r.jsxs)('div', {
                        className: M.channelNameContainer,
                        children: [
                            (0, r.jsx)(Y, {
                                className: M.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: H,
                                shouldShow: Q,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        D(k({}, e), {
                                            ref: X,
                                            className: M.channelNameText,
                                            children: [L && null !== V && ''.concat(V, ' : '), K]
                                        })
                                    )
                            }),
                            (0, r.jsx)(U, {
                                parentChannel: z,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        A.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: p,
                            scrollTo: y,
                            searchId: x,
                            renderEmbeds: j,
                            searchOffset: P,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: T,
                            listItemProps: R.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
