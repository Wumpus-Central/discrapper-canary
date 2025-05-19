n.d(t, { Z: () => U }), n(35282), n(539854), n(388685);
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
    C = n(804063),
    x = n(703656),
    y = n(359110),
    v = n(695346),
    j = n(131704),
    O = n(592125),
    E = n(430824),
    I = n(496675),
    P = n(699516),
    S = n(768119),
    Z = n(944486),
    N = n(594174),
    T = n(72006),
    A = n(101695),
    w = n(683101),
    R = n(981631),
    M = n(388032),
    k = n(613660);
function L(e) {
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
function U(e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: a, scrollTo: h, searchResults: f, blockCount: m, ignoreCount: g, onChangePage: b, onClick: _ } = e,
        { offset: y, totalResults: v, isSearching: j, showBlockedResults: E } = n,
        I = i.useCallback(
            (e) => {
                if (j) return;
                let t = e - 1;
                null == b || b(t);
                let n = null != l ? S.Z.getEditorState(l) : null,
                    r = null != n ? T.Sq(n) : null;
                u.oO(l, t, r);
            },
            [l, j, b]
        ),
        Z = i.useCallback(
            (e, t) => {
                if ((null == _ || _(e, t), (0, C.Z)(e))) {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    c.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: S.Z.getAnalyticsId(l) }), (0, x.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [_, l]
        ),
        N = i.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!E && null != i && (P.Z.isBlockedForMessage(i) || P.Z.isIgnoredForMessage(i))) return n;
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
        w = i.useRef([]),
        U = N.reduce((e, t) => e + 1 + t.results.length, 0),
        B = i.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = w.current,
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
        F = i.useCallback((e) => {
            let t = w.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, o.ZP)({
            navId: 'search-results',
            itemCount: U,
            focusedIndex: 0,
            setFocus: B,
            onSelect: F
        }),
        V = S.Z.getQuery(l),
        z = S.Z.getSearchType(l) === R.aib.FAVORITES,
        W = (0, d.nC)(null != (t = null == V ? void 0 : V.content) ? t : ''),
        Y = N.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    results: n,
                    highlighter: W,
                    startIndex: i,
                    resultRefs: w,
                    totalResults: v,
                    scrollTo: h,
                    searchId: l,
                    renderEmbeds: a,
                    offset: y,
                    jumpToMessage: Z,
                    listNavigator: H,
                    favoriteSearch: z
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    Y.push();
    let q = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = q.current) || e.focus();
    }, [f]);
    let K = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                D(L({ ref: q }, H.getContainerProps(), K), {
                    'aria-busy': j,
                    children: Y
                })
            ),
            m > 0 || g > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(l, !E),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: E ? (m > 0 && g > 0 ? M.intl.formatToPlainString(M.t['OvJs9/'], { count: m + g }) : m > 0 ? M.intl.formatToPlainString(M.t['n/1QFR'], { count: m }) : M.intl.formatToPlainString(M.t.ypezTE, { count: g })) : m > 0 && g > 0 ? M.intl.formatToPlainString(M.t.EJHRcX, { count: m + g }) : m > 0 ? M.intl.formatToPlainString(M.t.HTE8JC, { count: m }) : M.intl.formatToPlainString(M.t.e7f8r6, { count: g })
                          })
                      ]
                  })
                : null,
            !j &&
                !z &&
                (0, r.jsx)(A.Z, {
                    changePage: I,
                    offset: y,
                    totalResults: v,
                    pageLength: R.vpv
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
    return (0, j.Em)(t.type)
        ? (0, r.jsx)(s.P3F, {
              className: a()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: l
          })
        : (0, r.jsx)('div', {
              className: k.parentChannelName,
              children: l
          });
}
function G(e) {
    var t, n, l;
    let { channel: a, results: o, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: C, searchId: x, renderEmbeds: j, offset: S, jumpToMessage: T, listNavigator: A, favoriteSearch: M } = e,
        U = v.cC.useSetting(),
        G = (0, g.p)(),
        F = i.useCallback((e) => {
            if (e === Z.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && I.Z.can(R.Plq.VIEW_CHANNEL, t) && (0, y.Kh)(t.id);
        }, []),
        H = null != a ? (0, h.F6)(a, N.default, P.Z, !1) : '???',
        V = M && null != a.guild_id ? (null == (t = E.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        z = (null == a ? void 0 : a.parent_id) != null ? O.Z.getChannel(a.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        Y = null != (l = (0, f.KS)(a)) ? l : s.VL1,
        q = I.Z.can(R.Plq.MANAGE_MESSAGES, a),
        { content: K } = (0, _.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: G
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
            className: k.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => F(a.id),
                    children: (0, r.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, r.jsx)(Y, {
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
                                        D(L({}, e), {
                                            ref: X,
                                            className: k.channelNameText,
                                            children: [M && null !== V && ''.concat(V, ' : '), K]
                                        })
                                    )
                            }),
                            (0, r.jsx)(B, {
                                parentChannel: z,
                                onSelectChannel: F
                            })
                        ]
                    })
                }),
                o.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        w.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: p,
                            scrollTo: C,
                            searchId: x,
                            renderEmbeds: j,
                            searchOffset: S,
                            pageResultsLength: o.length,
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
