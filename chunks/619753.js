n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(905405),
    x = n(255269),
    v = n(937889),
    _ = n(703656),
    I = n(359110),
    E = n(695346),
    b = n(131704),
    Z = n(592125),
    S = n(430824),
    N = n(496675),
    T = n(699516),
    j = n(768119),
    A = n(944486),
    y = n(594174),
    P = n(101695),
    M = n(683101),
    R = n(981631),
    L = n(388032),
    k = n(370167);
function O(e) {
    var t;
    let { search: n, searchId: r, renderEmbeds: a, scrollTo: m, searchResults: f, blockCount: g, ignoreCount: C, onChangePage: x } = e,
        { offset: v, totalResults: I, isSearching: E, showBlockedResults: b } = n,
        S = l.useCallback(
            (e) => {
                if (E) return;
                let t = e - 1;
                null == x || x(t), u.oO(r, t);
            },
            [r, E, x]
        ),
        N = l.useCallback(
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
                    d.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: j.Z.getAnalyticsId(r) }), (0, _.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [r]
        ),
        A = l.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, i) => {
                let l = i.find((e) => e.isSearchHit);
                if (!b && null != l && (T.Z.isBlockedForMessage(l) || T.Z.isIgnoredForMessage(l))) return n;
                let r = Z.Z.getChannel(i[0].channel_id);
                return null == r
                    ? n
                    : ((null == e || e !== r.id) &&
                          n.push({
                              channel: r,
                              results: [],
                              startIndex: t
                          }),
                      (t += 1),
                      n[n.length - 1].results.push(i),
                      (e = null == r ? void 0 : r.id),
                      n);
            }, []);
        }, [f, b]),
        y = l.useRef([]),
        M = A.reduce((e, t) => e + 1 + t.results.length, 0),
        O = l.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = y.current,
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
            let t = y.current[e];
            null == t || t.jumpTo();
        }, []),
        B = (0, s.ZP)({
            navId: 'search-results',
            itemCount: M,
            focusedIndex: 0,
            setFocus: O,
            onSelect: D
        }),
        U = j.Z.getQuery(r),
        H = j.Z.getSearchType(r) === R.aib.FAVORITES,
        G = (0, h.nC)(null !== (t = null == U ? void 0 : U.content) && void 0 !== t ? t : ''),
        F = A.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, i.jsx)(
                w,
                {
                    channel: t,
                    results: n,
                    highlighter: G,
                    startIndex: l,
                    resultRefs: y,
                    totalResults: I,
                    scrollTo: m,
                    searchId: r,
                    renderEmbeds: a,
                    offset: v,
                    jumpToMessage: N,
                    listNavigator: B,
                    favoriteSearch: H
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    F.push();
    let V = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null === (e = V.current) || void 0 === e || e.focus();
    }, [f]);
    let z = (0, o.useFocusJumpSection)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: V,
                ...B.getContainerProps(),
                ...z,
                'aria-busy': E,
                children: F
            }),
            g > 0 || C > 0
                ? (0, i.jsxs)(o.Clickable, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(r, !b),
                      children: [
                          (0, i.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: b ? (g > 0 && C > 0 ? L.intl.formatToPlainString(L.t['OvJs9/'], { count: g + C }) : g > 0 ? L.intl.formatToPlainString(L.t['n/1QFR'], { count: g }) : L.intl.formatToPlainString(L.t.ypezTE, { count: C })) : g > 0 && C > 0 ? L.intl.formatToPlainString(L.t.EJHRcX, { count: g + C }) : g > 0 ? L.intl.formatToPlainString(L.t.HTE8JC, { count: g }) : L.intl.formatToPlainString(L.t.e7f8r6, { count: C })
                          })
                      ]
                  })
                : null,
            !E &&
                !H &&
                (0, i.jsx)(P.Z, {
                    changePage: S,
                    offset: v,
                    totalResults: I,
                    pageLength: R.vpv
                })
        ]
    });
}
function D(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, f.KS)(t) : null;
    if (null == l) return null;
    let r = (0, i.jsxs)(i.Fragment, {
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
        ? (0, i.jsx)(o.Clickable, {
              className: a()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: r
          })
        : (0, i.jsx)('div', {
              className: k.parentChannelName,
              children: r
          });
}
function w(e) {
    var t, n, r;
    let { channel: a, results: s, highlighter: c, startIndex: d, resultRefs: u, totalResults: h, scrollTo: p, searchId: _, renderEmbeds: b, offset: j, jumpToMessage: P, listNavigator: L, favoriteSearch: O } = e,
        w = E.cC.useSetting(),
        B = (0, C.p)(),
        U = l.useCallback((e) => {
            if (e === A.Z.getChannelId()) return;
            let t = Z.Z.getChannel(e);
            if (null != t && !!N.Z.can(R.Plq.VIEW_CHANNEL, t)) (0, I.Kh)(t.id);
        }, []),
        H = null != a ? (0, m.F6)(a, y.default, T.Z, !1) : '???',
        G = O && null != a.guild_id ? (null === (t = S.Z.getGuild(a.guild_id)) || void 0 === t ? void 0 : t.name) : null,
        F = (null == a ? void 0 : a.parent_id) != null ? Z.Z.getChannel(a.parent_id) : null,
        V = null !== (n = null == F ? void 0 : F.name) && void 0 !== n ? n : null,
        z = null !== (r = (0, f.KS)(a)) && void 0 !== r ? r : o.TextIcon,
        W = N.Z.can(R.Plq.MANAGE_MESSAGES, a),
        { content: K } = (0, v.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: B
            }
        ),
        Y = l.useRef(null),
        [q, X] = l.useState(!1);
    l.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [H, V, G].filter((e) => null != e).join(', ');
    return (0, i.jsx)(g.a.Provider, {
        value: (0, x.Z)(w, W),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': J,
            children: [
                (0, i.jsx)(o.Clickable, {
                    onClick: () => U(a.id),
                    children: (0, i.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, i.jsx)(z, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(o.Tooltip, {
                                text: H,
                                shouldShow: q,
                                children: (e) =>
                                    (0, i.jsxs)('span', {
                                        ...e,
                                        ref: Y,
                                        className: k.channelNameText,
                                        children: [O && null !== G && ''.concat(G, ' : '), K]
                                    })
                            }),
                            (0, i.jsx)(D, {
                                parentChannel: F,
                                onSelectChannel: U
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = d + t;
                    return (0, i.jsx)(
                        M.Z,
                        {
                            ref: (e) => (u.current[n] = e),
                            totalResults: h,
                            scrollTo: p,
                            searchId: _,
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
