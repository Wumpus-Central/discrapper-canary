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
    y = n(937889),
    x = n(703656),
    C = n(359110),
    v = n(695346),
    j = n(131704),
    O = n(592125),
    E = n(430824),
    I = n(496675),
    P = n(699516),
    S = n(768119),
    Z = n(944486),
    N = n(594174),
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
    let { search: n, searchId: l, renderEmbeds: o, scrollTo: f, searchResults: m, blockCount: g, ignoreCount: b, onChangePage: _, onClick: y } = e,
        { offset: C, totalResults: v, isSearching: j, showBlockedResults: E } = n,
        I = i.useCallback(
            (e) => {
                if (j) return;
                let t = e - 1;
                null == _ || _(t), d.oO(l, t);
            },
            [l, j, _]
        ),
        Z = i.useCallback(
            (e, t) => {
                if ((null == y || y(e, t), e.blocked))
                    c.Z.show({
                        title: R.intl.string(R.t['j7eA/v']),
                        body: R.intl.formatToPlainString(R.t.dTNNgo, { name: e.author.username }),
                        confirmText: R.intl.string(R.t.BddRzc)
                    });
                else if (e.ignored)
                    c.Z.show({
                        title: R.intl.string(R.t.XyWoKS),
                        body: R.intl.formatToPlainString(R.t['8t8doK'], { name: e.author.username }),
                        confirmText: R.intl.string(R.t.BddRzc)
                    });
                else {
                    let t = O.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: S.Z.getAnalyticsId(l) }), (0, x.uL)(w.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [y, l]
        ),
        N = i.useMemo(() => {
            let e;
            if (null == m) return [];
            let t = 0;
            return m.reduce((n, r) => {
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
        }, [m, E]),
        A = i.useRef([]),
        D = N.reduce((e, t) => e + 1 + t.results.length, 0),
        U = i.useCallback(
            (e, t) => {
                if (!h.Z.keyboardModeEnabled) return;
                let n = A.current,
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
        G = i.useCallback((e) => {
            let t = A.current[e];
            null == t || t.jumpTo();
        }, []),
        F = (0, a.ZP)({
            navId: 'search-results',
            itemCount: D,
            focusedIndex: 0,
            setFocus: U,
            onSelect: G
        }),
        H = S.Z.getQuery(l),
        V = S.Z.getSearchType(l) === w.aib.FAVORITES,
        z = (0, p.nC)(null != (t = null == H ? void 0 : H.content) ? t : ''),
        W = N.map((e) => {
            let { channel: t, results: n, startIndex: i } = e;
            return (0, r.jsx)(
                B,
                {
                    channel: t,
                    results: n,
                    highlighter: z,
                    startIndex: i,
                    resultRefs: A,
                    totalResults: v,
                    scrollTo: f,
                    searchId: l,
                    renderEmbeds: o,
                    offset: C,
                    jumpToMessage: Z,
                    listNavigator: F,
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
    }, [m]);
    let q = (0, s.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                L(M({ ref: Y }, F.getContainerProps(), q), {
                    'aria-busy': j,
                    children: W
                })
            ),
            g > 0 || b > 0
                ? (0, r.jsxs)(s.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => d.QY(l, !E),
                      children: [
                          (0, r.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, r.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: E ? (g > 0 && b > 0 ? R.intl.formatToPlainString(R.t['OvJs9/'], { count: g + b }) : g > 0 ? R.intl.formatToPlainString(R.t['n/1QFR'], { count: g }) : R.intl.formatToPlainString(R.t.ypezTE, { count: b })) : g > 0 && b > 0 ? R.intl.formatToPlainString(R.t.EJHRcX, { count: g + b }) : g > 0 ? R.intl.formatToPlainString(R.t.HTE8JC, { count: g }) : R.intl.formatToPlainString(R.t.e7f8r6, { count: b })
                          })
                      ]
                  })
                : null,
            !j &&
                !V &&
                (0, r.jsx)(T.Z, {
                    changePage: I,
                    offset: C,
                    totalResults: v,
                    pageLength: w.vpv
                })
        ]
    });
}
function U(e) {
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
function B(e) {
    var t, n, l;
    let { channel: o, results: a, highlighter: c, startIndex: u, resultRefs: d, totalResults: p, scrollTo: h, searchId: x, renderEmbeds: j, offset: S, jumpToMessage: T, listNavigator: R, favoriteSearch: D } = e,
        B = v.cC.useSetting(),
        G = (0, b.p)(),
        F = i.useCallback((e) => {
            if (e === Z.Z.getChannelId()) return;
            let t = O.Z.getChannel(e);
            null != t && I.Z.can(w.Plq.VIEW_CHANNEL, t) && (0, C.Kh)(t.id);
        }, []),
        H = null != o ? (0, f.F6)(o, N.default, P.Z, !1) : '???',
        V = D && null != o.guild_id ? (null == (t = E.Z.getGuild(o.guild_id)) ? void 0 : t.name) : null,
        z = (null == o ? void 0 : o.parent_id) != null ? O.Z.getChannel(o.parent_id) : null,
        W = null != (n = null == z ? void 0 : z.name) ? n : null,
        Y = null != (l = (0, m.KS)(o)) ? l : s.VL1,
        q = I.Z.can(w.Plq.MANAGE_MESSAGES, o),
        { content: K } = (0, y.ZP)(
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
    return (0, r.jsx)(g.aQ.Provider, {
        value: (0, _.Z)(B, q),
        children: (0, r.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': $,
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: () => F(o.id),
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
                                        L(M({}, e), {
                                            ref: X,
                                            className: k.channelNameText,
                                            children: [D && null !== V && ''.concat(V, ' : '), K]
                                        })
                                    )
                            }),
                            (0, r.jsx)(U, {
                                parentChannel: z,
                                onSelectChannel: F
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
                            searchId: x,
                            renderEmbeds: j,
                            searchOffset: S,
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
