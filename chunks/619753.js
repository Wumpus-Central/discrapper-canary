(n.d(t, { Z: () => U }), n(35282), n(539854), n(388685));
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
    _ = n(95398),
    h = n(905405),
    g = n(255269),
    b = n(937889),
    E = n(804063),
    y = n(703656),
    x = n(359110),
    C = n(695346),
    v = n(131704),
    O = n(592125),
    j = n(430824),
    I = n(496675),
    S = n(699516),
    T = n(768119),
    N = n(944486),
    P = n(594174),
    A = n(861262),
    w = n(101695),
    Z = n(683101),
    R = n(981631),
    L = n(388032),
    k = n(378869);
function D(e) {
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
function M(e, t) {
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
let U = i.memo(function (e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: m, searchResults: f, blockCount: _, ignoreCount: h, onPageChange: g, onClick: b } = e,
        { offset: x, totalResults: C, isSearching: v, showBlockedResults: j } = n,
        I = i.useCallback(
            (e, t) => {
                if ((null == b || b(e, t), (0, E.Z)(e))) {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    (c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: T.Z.getAnalyticsId(l) }), (0, y.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id)));
                }
            },
            [b, l]
        ),
        N = i.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!j && null != i && (S.Z.isBlockedForMessage(i) || S.Z.isIgnoredForMessage(i))) return n;
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
        }, [f, j]),
        P = i.useRef([]),
        Z = N.reduce((e, t) => e + 1 + t.results.length, 0),
        U = i.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = P.current,
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
        F = i.useCallback((e) => {
            let t = P.current[e];
            null == t || t.jumpTo();
        }, []),
        G = (0, o.ZP)({
            navId: 'search-results',
            itemCount: Z,
            focusedIndex: 0,
            setFocus: U,
            onSelect: F
        }),
        H = T.Z.getQuery(l),
        V = (0, A.k)(l) === R.aib.FAVORITES,
        z = (0, d.nC)(null != (t = null == H ? void 0 : H.content) ? t : ''),
        W = N.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                B,
                {
                    channel: t,
                    results: n,
                    highlighter: z,
                    startIndex: i,
                    resultRefs: P,
                    totalResults: C,
                    scrollTo: m,
                    searchId: l,
                    renderEmbeds: a,
                    offset: x,
                    jumpToMessage: I,
                    listNavigator: G,
                    favoriteSearch: V
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
    let Y = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                M(D({ ref: K }, G.getContainerProps(), Y), {
                    'aria-busy': v,
                    children: W
                })
            ),
            _ > 0 || h > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(l, !j),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: j ? (_ > 0 && h > 0 ? L.intl.formatToPlainString(L.t['OvJs9/'], { count: _ + h }) : _ > 0 ? L.intl.formatToPlainString(L.t['n/1QFR'], { count: _ }) : L.intl.formatToPlainString(L.t.ypezTE, { count: h })) : _ > 0 && h > 0 ? L.intl.formatToPlainString(L.t.EJHRcX, { count: _ + h }) : _ > 0 ? L.intl.formatToPlainString(L.t.HTE8JC, { count: _ }) : L.intl.formatToPlainString(L.t.e7f8r6, { count: h })
                          })
                      ]
                  })
                : null,
            !v &&
                !V &&
                (0, r.jsx)(w.Z, {
                    onPageChange: g,
                    offset: x,
                    totalCount: C,
                    pageSize: R.vpv
                })
        ]
    });
});
function F(e) {
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
    return (0, v.Em)(t.type)
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
function B(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: E, searchId: y, renderEmbeds: v, offset: T, jumpToMessage: A, listNavigator: w, favoriteSearch: L } = e,
        U = C.cC.useSetting(),
        B = (0, h.p)(),
        G = i.useCallback((e) => {
            if (e === N.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && (I.Z.can(R.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, x.Kh)(t.id);
        }, []),
        H = null != a ? (0, m.F6)(a, P.default, S.Z, !1) : '???',
        V = L && null != a.guild_id ? (null == (t = j.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        z = (null == a ? void 0 : a.parent_id) != null ? O.Z.getChannel(a.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        K = null != (l = (0, f.KS)(a)) ? l : s.VL1,
        Y = I.Z.can(R.Plq.MANAGE_MESSAGES, a),
        { content: X } = (0, b.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: B
            }
        ),
        q = i.useRef(null),
        [Q, J] = i.useState(!1);
    i.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [H, W, V].filter((e) => null != e).join(', ');
    return (0, r.jsx)(_.aQ.Provider, {
        value: (0, g.Z)(U, Y),
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
                                        M(D({}, e), {
                                            ref: q,
                                            className: k.channelNameText,
                                            children: [L && null !== V && ''.concat(V, ' : '), X]
                                        })
                                    )
                            }),
                            (0, r.jsx)(F, {
                                parentChannel: z,
                                onSelectChannel: G
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        Z.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: p,
                            scrollTo: E,
                            searchId: y,
                            renderEmbeds: v,
                            searchOffset: T,
                            pageResultsLength: o.length,
                            result: e,
                            index: n,
                            onJump: A,
                            listItemProps: w.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
