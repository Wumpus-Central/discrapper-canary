n.d(t, { Z: () => O }), n(724458), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(837969),
    o = n(481060),
    c = n(668781),
    d = n(904245),
    u = n(603263),
    h = n(963374),
    p = n(607070),
    m = n(933557),
    f = n(471445),
    g = n(95398),
    _ = n(905405),
    C = n(255269),
    x = n(937889),
    v = n(703656),
    E = n(359110),
    I = n(695346),
    b = n(131704),
    Z = n(592125),
    N = n(430824),
    T = n(496675),
    S = n(699516),
    j = n(768119),
    y = n(944486),
    A = n(594174),
    P = n(101695),
    R = n(683101),
    M = n(981631),
    L = n(388032),
    k = n(370167);
function O(e) {
    var t;
    let { search: n, searchId: a, renderEmbeds: r, scrollTo: m, searchResults: f, blockCount: g, ignoreCount: _, onChangePage: C } = e,
        { offset: x, totalResults: E, isSearching: I, showBlockedResults: b } = n,
        N = l.useCallback(
            (e) => {
                if (I) return;
                let t = e - 1;
                null == C || C(t), u.oO(a, t);
            },
            [a, I, C]
        ),
        T = l.useCallback(
            (e) => {
                if (e.blocked)
                    c.Z.show({
                        title: L.intl.string(L.t['j7eA/v']),
                        body: L.intl.formatToPlainString(L.t.dTNNgo, { name: e.author.username }),
                        confirmText: L.intl.string(L.t.BddRzc)
                    });
                else if (e.ignored)
                    c.Z.show({
                        title: L.intl.string(L.t.XyWoKS),
                        body: L.intl.formatToPlainString(L.t['8t8doK'], { name: e.author.username }),
                        confirmText: L.intl.string(L.t.BddRzc)
                    });
                else {
                    let t = Z.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    d.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: j.Z.getAnalyticsId(a) }), (0, v.uL)(M.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [a]
        ),
        y = l.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, i) => {
                let l = i.find((e) => e.isSearchHit);
                if (!b && null != l && (S.Z.isBlockedForMessage(l) || S.Z.isIgnoredForMessage(l))) return n;
                let a = Z.Z.getChannel(i[0].channel_id);
                return (
                    null == a ||
                        ((null == e || e !== a.id) &&
                            n.push({
                                channel: a,
                                results: [],
                                startIndex: t
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(i),
                        (e = null == a ? void 0 : a.id)),
                    n
                );
            }, []);
        }, [f, b]),
        A = l.useRef([]),
        R = y.reduce((e, t) => e + 1 + t.results.length, 0),
        O = l.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = A.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let l = i.hitRef.current.getClientRects()[0];
                m(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
                });
            },
            [m]
        ),
        D = l.useCallback((e) => {
            let t = A.current[e];
            null == t || t.jumpTo();
        }, []),
        U = (0, s.ZP)({
            navId: 'search-results',
            itemCount: R,
            focusedIndex: 0,
            setFocus: O,
            onSelect: D
        }),
        B = j.Z.getQuery(a),
        F = j.Z.getSearchType(a) === M.aib.FAVORITES,
        H = (0, h.nC)(null !== (t = null == B ? void 0 : B.content) && void 0 !== t ? t : ''),
        G = y.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, i.jsx)(
                w,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: l,
                    resultRefs: A,
                    totalResults: E,
                    scrollTo: m,
                    searchId: a,
                    renderEmbeds: r,
                    offset: x,
                    jumpToMessage: T,
                    listNavigator: U,
                    favoriteSearch: F
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    G.push();
    let V = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null === (e = V.current) || void 0 === e || e.focus();
    }, [f]);
    let z = (0, o.mFp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: V,
                ...U.getContainerProps(),
                ...z,
                'aria-busy': I,
                children: G
            }),
            g > 0 || _ > 0
                ? (0, i.jsxs)(o.P3F, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(a, !b),
                      children: [
                          (0, i.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: b ? (g > 0 && _ > 0 ? L.intl.formatToPlainString(L.t['OvJs9/'], { count: g + _ }) : g > 0 ? L.intl.formatToPlainString(L.t['n/1QFR'], { count: g }) : L.intl.formatToPlainString(L.t.ypezTE, { count: _ })) : g > 0 && _ > 0 ? L.intl.formatToPlainString(L.t.EJHRcX, { count: g + _ }) : g > 0 ? L.intl.formatToPlainString(L.t.HTE8JC, { count: g }) : L.intl.formatToPlainString(L.t.e7f8r6, { count: _ })
                          })
                      ]
                  })
                : null,
            !I &&
                !F &&
                (0, i.jsx)(P.Z, {
                    changePage: N,
                    offset: x,
                    totalResults: E,
                    pageLength: M.vpv
                })
        ]
    });
}
function D(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, f.KS)(t) : null;
    if (null == l) return null;
    let a = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l, {
                className: k.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: k.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, b.Em)(t.type)
        ? (0, i.jsx)(o.P3F, {
              className: r()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a
          })
        : (0, i.jsx)('div', {
              className: k.parentChannelName,
              children: a
          });
}
function w(e) {
    var t, n, a;
    let { channel: r, results: s, highlighter: c, startIndex: d, resultRefs: u, totalResults: h, scrollTo: p, searchId: v, renderEmbeds: b, offset: j, jumpToMessage: P, listNavigator: L, favoriteSearch: O } = e,
        w = I.cC.useSetting(),
        U = (0, _.p)(),
        B = l.useCallback((e) => {
            if (e === y.Z.getChannelId()) return;
            let t = Z.Z.getChannel(e);
            null != t && T.Z.can(M.Plq.VIEW_CHANNEL, t) && (0, E.Kh)(t.id);
        }, []),
        F = null != r ? (0, m.F6)(r, A.default, S.Z, !1) : '???',
        H = O && null != r.guild_id ? (null === (t = N.Z.getGuild(r.guild_id)) || void 0 === t ? void 0 : t.name) : null,
        G = (null == r ? void 0 : r.parent_id) != null ? Z.Z.getChannel(r.parent_id) : null,
        V = null !== (n = null == G ? void 0 : G.name) && void 0 !== n ? n : null,
        z = null !== (a = (0, f.KS)(r)) && void 0 !== a ? a : o.VL1,
        W = T.Z.can(M.Plq.MANAGE_MESSAGES, r),
        { content: Y } = (0, x.ZP)(
            {
                content: F,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: U
            }
        ),
        q = l.useRef(null),
        [K, X] = l.useState(!1);
    l.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [F, V, H].filter((e) => null != e).join(', ');
    return (0, i.jsx)(g.a.Provider, {
        value: (0, C.Z)(w, W),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': J,
            children: [
                (0, i.jsx)(o.P3F, {
                    onClick: () => B(r.id),
                    children: (0, i.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, i.jsx)(z, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(o.ua7, {
                                text: F,
                                shouldShow: K,
                                children: (e) =>
                                    (0, i.jsxs)('span', {
                                        ...e,
                                        ref: q,
                                        className: k.channelNameText,
                                        children: [O && null !== H && ''.concat(H, ' : '), Y]
                                    })
                            }),
                            (0, i.jsx)(D, {
                                parentChannel: G,
                                onSelectChannel: B
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = d + t;
                    return (0, i.jsx)(
                        R.Z,
                        {
                            ref: (e) => (u.current[n] = e),
                            totalResults: h,
                            scrollTo: p,
                            searchId: v,
                            renderEmbeds: b,
                            searchOffset: j,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: P,
                            listItemProps: L.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
