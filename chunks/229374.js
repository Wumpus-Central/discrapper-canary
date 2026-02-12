n.d(t, { A: () => v }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(416681),
    o = n(435371),
    E = n(397927),
    u = n(843472),
    c = n(570209),
    _ = n(775602),
    d = n(47167),
    A = n(713654),
    g = n(863439),
    T = n(465364),
    I = n(81437),
    N = n(976860),
    h = n(378570),
    m = n(302031),
    S = n(253932),
    G = n(95701),
    O = n(734057),
    R = n(71393),
    C = n(576705),
    L = n(994500),
    D = n(309010),
    f = n(287809),
    x = n(822382),
    M = n(876689),
    p = n(712838),
    U = n(652215),
    k = n(985018),
    b = n(274808);
function F(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if (t?.name == null) return null;
    let r = null != t ? (0, A.gU)(t) : null;
    if (null == r) return null;
    let a = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r, { className: b.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.Text, { className: b.yK, variant: "text-xs/medium", color: "text-default", children: t.name }),
        ],
    });
    return (0, G.Z_)(t.type)
        ? (0, l.jsx)(E.DUT, {
              className: i()(b.rg, b.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a,
          })
        : (0, l.jsx)("div", { className: b.rg, children: a });
}
function j(e) {
    let {
            channel: t,
            messages: n,
            highlighter: a,
            startIndex: i,
            resultRefs: s,
            totalResults: u,
            scrollTo: c,
            renderEmbeds: _,
            offset: I,
            jumpToMessage: N,
            listNavigator: G,
            favoriteSearch: x,
        } = e,
        M = S.gs.useSetting(),
        k = r.useCallback((e) => {
            if (e === D.A.getChannelId()) return;
            let t = O.A.getChannel(e);
            null == t || ((C.A.can(U.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.iN)(t.id));
        }, []),
        j = null != t ? (0, d.m1)(t, f.default, L.A, !1) : "???",
        v = x && null != t.guild_id ? R.A.getGuild(t.guild_id)?.name : null,
        P = t?.parent_id != null ? O.A.getChannel(t.parent_id) : null,
        y = P?.name ?? null,
        X = (0, A.gU)(t) ?? E.N$i,
        B = C.A.can(U.xBc.MANAGE_MESSAGES, t),
        { content: V } = (0, T.Ay)({ content: j, embeds: [] }, { postProcessor: a }),
        H = r.useRef(null),
        [w, W] = r.useState(!1);
    r.useEffect(() => {
        let e = H.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && W(e.offsetWidth < e.scrollWidth);
    }, []);
    let Y = [j, y, v].filter((e) => null != e).join(", ");
    return (0, l.jsx)(m.Bs.Provider, {
        value: (0, g.A)(M, B),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: b.JT,
            "aria-label": Y,
            children: [
                (0, l.jsx)(E.DUT, {
                    onClick: () => k(t.id),
                    children: (0, l.jsxs)("div", {
                        className: b.aT,
                        children: [
                            (0, l.jsx)(X, { className: b.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)(o.m_, {
                                asContainer: !0,
                                text: j,
                                shouldShow: w,
                                children: (0, l.jsxs)("span", {
                                    ref: H,
                                    className: b.Kw,
                                    children: [x && null !== v && `${v} : `, V],
                                }),
                            }),
                            (0, l.jsx)(F, { parentChannel: P, onSelectChannel: k }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = i + t;
                    return (0, l.jsx)(
                        p.A,
                        {
                            ref: (e) => {
                                s.current[r] = e;
                            },
                            totalResults: u,
                            scrollTo: c,
                            renderEmbeds: _,
                            searchOffset: I,
                            pageResultsLength: n.length,
                            message: e,
                            index: r,
                            onJump: N,
                            listItemProps: G.getItemProps({ index: r }),
                        },
                        `search-result-${r}`,
                    );
                }),
            ],
        }),
    });
}
let v = r.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: a,
            messages: i,
            blockCount: o,
            ignoreCount: d,
            onPageChange: A,
            onClick: g,
            paginationTotalCount: T,
            renderPageWrapper: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: S,
            searchResultsQuery: G,
            isFavoritesSearch: R,
        } = e,
        { offset: C, totalResults: D, isSearching: f, showBlockedResults: p } = t,
        F = r.useCallback(
            (e, t) => {
                g?.(e, t);
                let n = () => {
                    let t = O.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S }),
                        (0, N.pX)(U.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, I.A)(e, n) && n();
            },
            [g, S],
        ),
        v = r.useMemo(() => {
            let e,
                t = 0;
            return i.reduce((n, l) => {
                if (!p && (L.A.isBlockedForMessage(l) || L.A.isIgnoredForMessage(l))) return n;
                let r = O.A.getChannel(l.channel_id);
                return (
                    null == r ||
                        ((null == e || e !== r.id) && n.push({ channel: r, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(l),
                        (e = r?.id)),
                    n
                );
            }, []);
        }, [i, p]),
        P = r.useRef([]),
        y = v.reduce((e, t) => e + 1 + t.messages.length, 0),
        X = r.useCallback(
            (e, t) => {
                if (!_.A.keyboardModeEnabled) return;
                let n = P.current,
                    l = null != t ? n[t] : void 0;
                if (null == l || null == l.hitRef.current) return;
                let r = l.hitRef.current.getClientRects()[0];
                a(r.top - 0.5 * r.height, !1, () => {
                    document.getElementById(e)?.focus();
                });
            },
            [a],
        ),
        B = r.useCallback((e) => {
            let t = P.current[e];
            t?.jumpTo();
        }, []),
        V = (0, s.Ay)({ navId: "search-results", itemCount: y, focusedIndex: 0, setFocus: X, onSelect: B }),
        H = (0, c.wG)((0, x.dX)(G) ?? ""),
        w = v.map((e) => {
            let { channel: t, messages: r, startIndex: i } = e;
            return (0, l.jsx)(
                j,
                {
                    channel: t,
                    messages: r,
                    highlighter: H,
                    startIndex: i,
                    resultRefs: P,
                    totalResults: D,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: C,
                    jumpToMessage: F,
                    listNavigator: V,
                    favoriteSearch: R ?? !1,
                },
                `${t.id}-${i}`,
            );
        });
    w.push();
    let W = r.useRef(null);
    r.useLayoutEffect(() => {
        W.current?.focus();
    }, [i]);
    let Y = (0, E.R7z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: W, ...V.getContainerProps(), ...Y, "aria-busy": f, children: w }),
            o > 0 || d > 0
                ? (0, l.jsxs)(E.DUT, {
                      tag: "div",
                      className: b.P,
                      onClick: () => {
                          m?.(!p);
                      },
                      children: [
                          (0, l.jsx)("div", { className: b.y }),
                          (0, l.jsx)("div", {
                              className: b.__invalid_resultsBlockedText,
                              children: p
                                  ? o > 0 && d > 0
                                      ? k.intl.formatToPlainString(k.t.OvJs9w, { count: o + d })
                                      : o > 0
                                        ? k.intl.formatToPlainString(k.t["n/1QFS"], { count: o })
                                        : k.intl.formatToPlainString(k.t.ypezTA, { count: d })
                                  : o > 0 && d > 0
                                    ? k.intl.formatToPlainString(k.t.EJHRcV, { count: o + d })
                                    : o > 0
                                      ? k.intl.formatToPlainString(k.t.HTE8JP, { count: o })
                                      : k.intl.formatToPlainString(k.t.e7f8r9, { count: d }),
                          }),
                      ],
                  })
                : null,
            !f &&
                !R &&
                (0, l.jsx)(M.A, {
                    renderPageWrapper: h,
                    onPageChange: A,
                    offset: C,
                    totalCount: T ?? D,
                    pageSize: U.T_y,
                }),
        ],
    });
});
