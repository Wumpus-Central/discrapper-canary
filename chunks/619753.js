n.d(t, { Z: () => U }), n(35282), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(837969),
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
    C = n(703656),
    x = n(359110),
    v = n(695346),
    j = n(131704),
    O = n(592125),
    E = n(430824),
    I = n(496675),
    S = n(699516),
    P = n(768119),
    Z = n(944486),
    N = n(594174),
    T = n(861262),
    A = n(101695),
    w = n(683101),
    R = n(981631),
    k = n(388032),
    M = n(378869);
function D(e) {
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
function L(e, t) {
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
function U(e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: o, scrollTo: h, searchResults: f, blockCount: m, ignoreCount: g, onPageChange: b, onClick: _ } = e,
        { offset: x, totalResults: v, isSearching: j, showBlockedResults: E } = n,
        I = i.useCallback(
            (e, t) => {
                if ((null == _ || _(e, t), (0, y.Z)(e))) {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: P.Z.getAnalyticsId(l) }), (0, C.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id));
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
        w = Z.reduce((e, t) => e + 1 + t.results.length, 0),
        U = i.useCallback(
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
        B = i.useCallback((e) => {
            let t = N.current[e];
            null == t || t.jumpTo();
        }, []),
        G = (0, a.ZP)({
            navId: 'search-results',
            itemCount: w,
            focusedIndex: 0,
            setFocus: U,
            onSelect: B
        }),
        H = P.Z.getQuery(l),
        V = (0, T.k)(l) === R.aib.FAVORITES,
        z = (0, d.nC)(null != (t = null == H ? void 0 : H.content) ? t : ''),
        W = Z.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                F,
                {
                    channel: t,
                    results: n,
                    highlighter: z,
                    startIndex: i,
                    resultRefs: N,
                    totalResults: v,
                    scrollTo: h,
                    searchId: l,
                    renderEmbeds: o,
                    offset: x,
                    jumpToMessage: I,
                    listNavigator: G,
                    favoriteSearch: V
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    W.push();
    let Y = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = Y.current) || e.focus();
    }, [f]);
    let q = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                L(D({ ref: Y }, G.getContainerProps(), q), {
                    'aria-busy': j,
                    children: W
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
                              children: E ? (m > 0 && g > 0 ? k.intl.formatToPlainString(k.t['OvJs9/'], { count: m + g }) : m > 0 ? k.intl.formatToPlainString(k.t['n/1QFR'], { count: m }) : k.intl.formatToPlainString(k.t.ypezTE, { count: g })) : m > 0 && g > 0 ? k.intl.formatToPlainString(k.t.EJHRcX, { count: m + g }) : m > 0 ? k.intl.formatToPlainString(k.t.HTE8JC, { count: m }) : k.intl.formatToPlainString(k.t.e7f8r6, { count: g })
                          })
                      ]
                  })
                : null,
            !j &&
                !V &&
                (0, r.jsx)(A.Z, {
                    onPageChange: b,
                    offset: x,
                    totalCount: v,
                    pageSize: R.vpv
                })
        ]
    });
}
function B(e) {
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
              className: o()(M.parentChannelName, M.parentChannelNameClickable),
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
function F(e) {
    var t, n, l;
    let { channel: o, results: a, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: y, searchId: C, renderEmbeds: j, offset: P, jumpToMessage: T, listNavigator: A, favoriteSearch: k } = e,
        U = v.cC.useSetting(),
        F = (0, g.p)(),
        G = i.useCallback((e) => {
            if (e === Z.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && I.Z.can(R.Plq.VIEW_CHANNEL, t) && (0, x.Kh)(t.id);
        }, []),
        H = null != o ? (0, h.F6)(o, N.default, S.Z, !1) : '???',
        V = k && null != o.guild_id ? (null == (t = E.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        z = (null == o ? void 0 : o.parent_id) != null ? O.Z.getChannel(o.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        Y = null != (l = (0, f.KS)(o)) ? l : s.VL1,
        q = I.Z.can(R.Plq.MANAGE_MESSAGES, o),
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
        value: (0, b.Z)(U, q),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: M.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => G(o.id),
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
                                        L(D({}, e), {
                                            ref: X,
                                            className: M.channelNameText,
                                            children: [k && null !== V && ''.concat(V, ' : '), K]
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
                a.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        w.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: p,
                            scrollTo: y,
                            searchId: C,
                            renderEmbeds: j,
                            searchOffset: P,
                            pageResultsLength: a.length,
                            result: e,
                            index: n,
                            onJump: T,
                            listItemProps: A.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
