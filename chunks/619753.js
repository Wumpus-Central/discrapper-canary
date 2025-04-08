n.d(t, { Z: () => D }), n(35282), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(837969),
    s = n(481060),
    c = n(668781),
    u = n(904245),
    d = n(603263),
    p = n(963374),
    h = n(607070),
    f = n(933557),
    m = n(471445),
    g = n(95398),
    b = n(905405),
    _ = n(255269),
    C = n(937889),
    y = n(703656),
    x = n(359110),
    v = n(695346),
    j = n(131704),
    O = n(592125),
    E = n(430824),
    N = n(496675),
    I = n(699516),
    P = n(768119),
    S = n(944486),
    Z = n(594174),
    T = n(101695),
    A = n(683101),
    w = n(981631),
    R = n(388032),
    k = n(378869);
function M(e) {
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
function D(e) {
    var t;
    let { search: n, searchId: l, renderEmbeds: o, scrollTo: f, searchResults: m, blockCount: g, ignoreCount: b, onChangePage: _ } = e,
        { offset: C, totalResults: x, isSearching: v, showBlockedResults: j } = n,
        E = i.useCallback(
            (e) => {
                if (v) return;
                let t = e - 1;
                null == _ || _(t), d.oO(l, t);
            },
            [l, v, _]
        ),
        N = i.useCallback(
            (e) => {
                if (e.blocked)
                    c.Z.show({
                        title: R.NW.string(R.t['j7eA/v']),
                        body: R.NW.formatToPlainString(R.t.dTNNgo, { name: e.author.username }),
                        confirmText: R.NW.string(R.t.BddRzc)
                    });
                else if (e.ignored)
                    c.Z.show({
                        title: R.NW.string(R.t.XyWoKS),
                        body: R.NW.formatToPlainString(R.t['8t8doK'], { name: e.author.username }),
                        confirmText: R.NW.string(R.t.BddRzc)
                    });
                else {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: P.Z.getAnalyticsId(l) }), (0, y.uL)(w.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [l]
        ),
        S = i.useMemo(() => {
            let e;
            if (null == m) return [];
            let t = 0;
            return m.reduce((n, r) => {
                let i = r.find((e) => e.isSearchHit);
                if (!j && null != i && (I.Z.isBlockedForMessage(i) || I.Z.isIgnoredForMessage(i))) return n;
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
        }, [m, j]),
        Z = i.useRef([]),
        A = S.reduce((e, t) => e + 1 + t.results.length, 0),
        D = i.useCallback(
            (e, t) => {
                if (!h.Z.keyboardModeEnabled) return;
                let n = Z.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let i = r.hitRef.current.getClientRects()[0];
                f(i.top - 0.5 * i.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [f]
        ),
        W = i.useCallback((e) => {
            let t = Z.current[e];
            null == t || t.jumpTo();
        }, []),
        B = (0, a.ZP)({
            navId: 'search-results',
            itemCount: A,
            focusedIndex: 0,
            setFocus: D,
            onSelect: W
        }),
        H = P.Z.getQuery(l),
        F = P.Z.getSearchType(l) === w.aib.FAVORITES,
        G = (0, p.nC)(null != (t = null == H ? void 0 : H.content) ? t : ''),
        V = S.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                U,
                {
                    channel: t,
                    results: n,
                    highlighter: G,
                    startIndex: i,
                    resultRefs: Z,
                    totalResults: x,
                    scrollTo: f,
                    searchId: l,
                    renderEmbeds: o,
                    offset: C,
                    jumpToMessage: N,
                    listNavigator: B,
                    favoriteSearch: F
                },
                ''.concat(t.id, '-').concat(i)
            );
        });
    V.push();
    let z = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        null == (e = z.current) || e.focus();
    }, [m]);
    let Y = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                L(M({ ref: z }, B.getContainerProps(), Y), {
                    'aria-busy': v,
                    children: V
                })
            ),
            g > 0 || b > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => d.QY(l, !j),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: j ? (g > 0 && b > 0 ? R.NW.formatToPlainString(R.t['OvJs9/'], { count: g + b }) : g > 0 ? R.NW.formatToPlainString(R.t['n/1QFR'], { count: g }) : R.NW.formatToPlainString(R.t.ypezTE, { count: b })) : g > 0 && b > 0 ? R.NW.formatToPlainString(R.t.EJHRcX, { count: g + b }) : g > 0 ? R.NW.formatToPlainString(R.t.HTE8JC, { count: g }) : R.NW.formatToPlainString(R.t.e7f8r6, { count: b })
                          })
                      ]
                  })
                : null,
            !v &&
                !F &&
                (0, r.jsx)(T.Z, {
                    changePage: E,
                    offset: C,
                    totalResults: x,
                    pageLength: w.vpv
                })
        ]
    });
}
function W(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let i = null != t ? (0, m.KS)(t) : null;
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
              className: o()(k.parentChannelName, k.parentChannelNameClickable),
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
function U(e) {
    var t, n, l;
    let { channel: o, results: a, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: h, searchId: y, renderEmbeds: j, offset: P, jumpToMessage: T, listNavigator: R, favoriteSearch: D } = e,
        U = v.cC.useSetting(),
        B = (0, b.p)(),
        H = i.useCallback((e) => {
            if (e === S.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && N.Z.can(w.Plq.VIEW_CHANNEL, t) && (0, x.Kh)(t.id);
        }, []),
        F = null != o ? (0, f.F6)(o, Z.default, I.Z, !1) : '???',
        G = D && null != o.guild_id ? (null == (t = E.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        V = (null == o ? void 0 : o.parent_id) != null ? O.Z.getChannel(o.parent_id) : null,
        z = null != (n = null == V ? void 0 : V.name) ? n : null,
        Y = null != (l = (0, m.KS)(o)) ? l : s.VL1,
        q = N.Z.can(w.Plq.MANAGE_MESSAGES, o),
        { content: K } = (0, C.ZP)(
            {
                content: F,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: B
            }
        ),
        X = i.useRef(null),
        [Q, J] = i.useState(!1);
    i.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [F, z, G].filter((e) => null != e).join(', ');
    return (0, r.jsx)(g.aQ.Provider, {
        value: (0, _.Z)(U, q),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => H(o.id),
                    children: (0, r.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, r.jsx)(Y, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: F,
                                shouldShow: Q,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        'span',
                                        L(M({}, e), {
                                            ref: X,
                                            className: k.channelNameText,
                                            children: [D && null !== G && ''.concat(G, ' : '), K]
                                        })
                                    )
                            }),
                            (0, r.jsx)(W, {
                                parentChannel: V,
                                onSelectChannel: H
                            })
                        ]
                    })
                }),
                a.map((e, t) => {
                    let n = u + t;
                    return (0, r.jsx)(
                        A.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: p,
                            scrollTo: h,
                            searchId: y,
                            renderEmbeds: j,
                            searchOffset: P,
                            pageResultsLength: a.length,
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
