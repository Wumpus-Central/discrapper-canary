n.d(t, { A: () => j }), n(321073);
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
    R = n(576705),
    C = n(994500),
    L = n(309010),
    D = n(287809),
    f = n(822382),
    x = n(876689),
    M = n(712838),
    p = n(652215),
    U = n(985018),
    k = n(125486);
function b(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, d.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, A.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: k.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.Text, { className: k.yK, variant: "text-xs/medium", color: "text-default", children: r }),
        ],
    });
    return null != t && (0, G.Z_)(t.type)
        ? (0, l.jsx)(E.DUT, {
              className: i()(k.rg, k.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: k.rg, children: s });
}
function F(e) {
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
        } = e,
        f = S.gs.useSetting(),
        x = r.useCallback((e) => {
            if (e === L.A.getChannelId()) return;
            let t = O.A.getChannel(e);
            null == t || ((R.A.can(p.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.iN)(t.id));
        }, []),
        U = null != t ? (0, d.m1)(t, D.default, C.A, !1) : "???",
        F = t?.parent_id != null ? O.A.getChannel(t.parent_id) : null,
        j = null != F ? (0, d.m1)(F, D.default, C.A) : null,
        v = (0, A.gU)(t) ?? E.N$i,
        P = R.A.can(p.xBc.MANAGE_MESSAGES, t),
        { content: y } = (0, T.Ay)({ content: U, embeds: [] }, { postProcessor: a }),
        X = r.useRef(null),
        [B, V] = r.useState(!1);
    r.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && V(e.offsetWidth < e.scrollWidth);
    }, []);
    let H = [U, j].filter((e) => null != e).join(", ");
    return (0, l.jsx)(m.Bs.Provider, {
        value: (0, g.A)(f, P),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: k.JT,
            "aria-label": H,
            children: [
                (0, l.jsx)(E.DUT, {
                    onClick: () => x(t.id),
                    children: (0, l.jsxs)("div", {
                        className: k.aT,
                        children: [
                            (0, l.jsx)(v, { className: k.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)(o.m_, {
                                asContainer: !0,
                                text: U,
                                shouldShow: B,
                                children: (0, l.jsx)("span", { ref: X, className: k.Kw, children: y }),
                            }),
                            (0, l.jsx)(b, { parentChannel: F, onSelectChannel: x }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = i + t;
                    return (0, l.jsx)(
                        M.A,
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
let j = r.memo(function (e) {
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
        } = e,
        { offset: R, totalResults: L, isSearching: D, showBlockedResults: M } = t,
        b = r.useCallback(
            (e, t) => {
                g?.(e, t);
                let n = () => {
                    let t = O.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S }),
                        (0, N.pX)(p.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, I.A)(e, n) && n();
            },
            [g, S],
        ),
        j = r.useMemo(() => {
            let e,
                t = 0;
            return i.reduce((n, l) => {
                if (!M && (C.A.isBlockedForMessage(l) || C.A.isIgnoredForMessage(l))) return n;
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
        }, [i, M]),
        v = r.useRef([]),
        P = j.reduce((e, t) => e + 1 + t.messages.length, 0),
        y = r.useCallback(
            (e, t) => {
                if (!_.A.keyboardModeEnabled) return;
                let n = v.current,
                    l = null != t ? n[t] : void 0;
                if (null == l || null == l.hitRef.current) return;
                let r = l.hitRef.current.getClientRects()[0];
                a(r.top - 0.5 * r.height, !1, () => {
                    document.getElementById(e)?.focus();
                });
            },
            [a],
        ),
        X = r.useCallback((e) => {
            let t = v.current[e];
            t?.jumpTo();
        }, []),
        B = (0, s.Ay)({ navId: "search-results", itemCount: P, focusedIndex: 0, setFocus: y, onSelect: X }),
        V = (0, c.wG)((0, f.dX)(G) ?? ""),
        H = j.map((e) => {
            let { channel: t, messages: r, startIndex: i } = e;
            return (0, l.jsx)(
                F,
                {
                    channel: t,
                    messages: r,
                    highlighter: V,
                    startIndex: i,
                    resultRefs: v,
                    totalResults: L,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: R,
                    jumpToMessage: b,
                    listNavigator: B,
                },
                `${t.id}-${i}`,
            );
        });
    H.push();
    let w = r.useRef(null);
    r.useLayoutEffect(() => {
        w.current?.focus();
    }, [i]);
    let W = (0, E.R7z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: w, ...B.getContainerProps(), ...W, "aria-busy": D, children: H }),
            o > 0 || d > 0
                ? (0, l.jsxs)(E.DUT, {
                      tag: "div",
                      className: k.P,
                      onClick: () => {
                          m?.(!M);
                      },
                      children: [
                          (0, l.jsx)("div", { className: k.y }),
                          (0, l.jsx)("div", {
                              className: k.__invalid_resultsBlockedText,
                              children: M
                                  ? o > 0 && d > 0
                                      ? U.intl.formatToPlainString(U.t.OvJs9w, { count: o + d })
                                      : o > 0
                                        ? U.intl.formatToPlainString(U.t["n/1QFS"], { count: o })
                                        : U.intl.formatToPlainString(U.t.ypezTA, { count: d })
                                  : o > 0 && d > 0
                                    ? U.intl.formatToPlainString(U.t.EJHRcV, { count: o + d })
                                    : o > 0
                                      ? U.intl.formatToPlainString(U.t.HTE8JP, { count: o })
                                      : U.intl.formatToPlainString(U.t.e7f8r9, { count: d }),
                          }),
                      ],
                  })
                : null,
            !D &&
                (0, l.jsx)(x.A, {
                    renderPageWrapper: h,
                    onPageChange: A,
                    offset: R,
                    totalCount: T ?? L,
                    pageSize: p.T_y,
                }),
        ],
    });
});
