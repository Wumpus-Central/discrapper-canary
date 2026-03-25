n.d(t, { A: () => P }), n(321073);
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
    g = n(5180),
    T = n(863439),
    I = n(465364),
    N = n(81437),
    h = n(976860),
    m = n(378570),
    S = n(302031),
    G = n(253932),
    O = n(95701),
    R = n(734057),
    C = n(576705),
    L = n(994500),
    D = n(309010),
    f = n(967198),
    x = n(287809),
    M = n(822382),
    p = n(876689),
    U = n(712838),
    k = n(652215),
    b = n(985018),
    F = n(274808);
function j(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if (t?.name == null) return null;
    let r = null != t ? (0, A.gU)(t) : null;
    if (null == r) return null;
    let a = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r, { className: F.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.Text, { className: F.yK, variant: "text-xs/medium", color: "text-default", children: t.name }),
        ],
    });
    return (0, O.Z_)(t.type)
        ? (0, l.jsx)(E.DUT, {
              className: i()(F.rg, F.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a,
          })
        : (0, l.jsx)("div", { className: F.rg, children: a });
}
function v(e) {
    let {
            channel: t,
            messages: n,
            highlighter: a,
            startIndex: i,
            resultRefs: s,
            totalResults: u,
            scrollTo: c,
            renderEmbeds: _,
            offset: g,
            jumpToMessage: N,
            listNavigator: h,
        } = e,
        O = G.gs.useSetting(),
        f = r.useCallback((e) => {
            if (e === D.A.getChannelId()) return;
            let t = R.A.getChannel(e);
            null == t || ((C.A.can(k.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, m.iN)(t.id));
        }, []),
        M = null != t ? (0, d.m1)(t, x.default, L.A, !1) : "???",
        p = t?.parent_id != null ? R.A.getChannel(t.parent_id) : null,
        b = p?.name ?? null,
        v = (0, A.gU)(t) ?? E.N$i,
        P = C.A.can(k.xBc.MANAGE_MESSAGES, t),
        { content: y } = (0, I.Ay)({ content: M, embeds: [] }, { postProcessor: a }),
        X = r.useRef(null),
        [B, V] = r.useState(!1);
    r.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && V(e.offsetWidth < e.scrollWidth);
    }, []);
    let H = [M, b].filter((e) => null != e).join(", ");
    return (0, l.jsx)(S.Bs.Provider, {
        value: (0, T.A)(O, P),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: F.JT,
            "aria-label": H,
            children: [
                (0, l.jsx)(E.DUT, {
                    onClick: () => f(t.id),
                    children: (0, l.jsxs)("div", {
                        className: F.aT,
                        children: [
                            (0, l.jsx)(v, { className: F.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)(o.m_, {
                                asContainer: !0,
                                text: M,
                                shouldShow: B,
                                children: (0, l.jsx)("span", { ref: X, className: F.Kw, children: y }),
                            }),
                            (0, l.jsx)(j, { parentChannel: p, onSelectChannel: f }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = i + t;
                    return (0, l.jsx)(
                        U.A,
                        {
                            ref: (e) => {
                                s.current[r] = e;
                            },
                            totalResults: u,
                            scrollTo: c,
                            renderEmbeds: _,
                            searchOffset: g,
                            pageResultsLength: n.length,
                            message: e,
                            index: r,
                            onJump: N,
                            listItemProps: h.getItemProps({ index: r }),
                        },
                        `search-result-${r}`,
                    );
                }),
            ],
        }),
    });
}
let P = r.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: a,
            messages: i,
            blockCount: o,
            ignoreCount: d,
            onPageChange: A,
            onClick: T,
            paginationTotalCount: I,
            renderPageWrapper: m,
            onBlockedResultsClick: S,
            searchRequestAnalyticsId: G,
            searchResultsQuery: O,
        } = e,
        { offset: C, totalResults: D, isSearching: x, showBlockedResults: U } = t,
        j = r.useCallback(
            (e, t) => {
                T?.(e, t);
                let n = () => {
                    let t = R.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null,
                        l = (0, g.ai)(f.A.getGuildId()) ? k.YYv : n;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: G }),
                        (0, h.pX)(k.BVt.CHANNEL(l, e.channel_id, e.id));
                };
                (0, N.A)(e, n) && n();
            },
            [T, G],
        ),
        P = r.useMemo(() => {
            let e,
                t = 0;
            return i.reduce((n, l) => {
                if (!U && (L.A.isBlockedForMessage(l) || L.A.isIgnoredForMessage(l))) return n;
                let r = R.A.getChannel(l.channel_id);
                return (
                    null == r ||
                        ((null == e || e !== r.id) && n.push({ channel: r, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(l),
                        (e = r?.id)),
                    n
                );
            }, []);
        }, [i, U]),
        y = r.useRef([]),
        X = P.reduce((e, t) => e + 1 + t.messages.length, 0),
        B = r.useCallback(
            (e, t) => {
                if (!_.A.keyboardModeEnabled) return;
                let n = y.current,
                    l = null != t ? n[t] : void 0;
                if (null == l || null == l.hitRef.current) return;
                let r = l.hitRef.current.getClientRects()[0];
                a(r.top - 0.5 * r.height, !1, () => {
                    document.getElementById(e)?.focus();
                });
            },
            [a],
        ),
        V = r.useCallback((e) => {
            let t = y.current[e];
            t?.jumpTo();
        }, []),
        H = (0, s.Ay)({ navId: "search-results", itemCount: X, focusedIndex: 0, setFocus: B, onSelect: V }),
        w = (0, c.wG)((0, M.dX)(O) ?? ""),
        W = P.map((e) => {
            let { channel: t, messages: r, startIndex: i } = e;
            return (0, l.jsx)(
                v,
                {
                    channel: t,
                    messages: r,
                    highlighter: w,
                    startIndex: i,
                    resultRefs: y,
                    totalResults: D,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: C,
                    jumpToMessage: j,
                    listNavigator: H,
                },
                `${t.id}-${i}`,
            );
        });
    W.push();
    let Y = r.useRef(null);
    r.useLayoutEffect(() => {
        Y.current?.focus();
    }, [i]);
    let K = (0, E.R7z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: Y, ...H.getContainerProps(), ...K, "aria-busy": x, children: W }),
            o > 0 || d > 0
                ? (0, l.jsxs)(E.DUT, {
                      tag: "div",
                      className: F.P,
                      onClick: () => {
                          S?.(!U);
                      },
                      children: [
                          (0, l.jsx)("div", { className: F.y }),
                          (0, l.jsx)("div", {
                              className: F.__invalid_resultsBlockedText,
                              children: U
                                  ? o > 0 && d > 0
                                      ? b.intl.formatToPlainString(b.t.OvJs9w, { count: o + d })
                                      : o > 0
                                        ? b.intl.formatToPlainString(b.t["n/1QFS"], { count: o })
                                        : b.intl.formatToPlainString(b.t.ypezTA, { count: d })
                                  : o > 0 && d > 0
                                    ? b.intl.formatToPlainString(b.t.EJHRcV, { count: o + d })
                                    : o > 0
                                      ? b.intl.formatToPlainString(b.t.HTE8JP, { count: o })
                                      : b.intl.formatToPlainString(b.t.e7f8r9, { count: d }),
                          }),
                      ],
                  })
                : null,
            !x &&
                (0, l.jsx)(p.A, {
                    renderPageWrapper: m,
                    onPageChange: A,
                    offset: C,
                    totalCount: I ?? D,
                    pageSize: k.T_y,
                }),
        ],
    });
});
