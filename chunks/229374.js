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
    S = n(288254),
    G = n(253932),
    O = n(95701),
    R = n(734057),
    C = n(576705),
    L = n(994500),
    D = n(309010),
    f = n(287809),
    x = n(822382),
    M = n(876689),
    p = n(712838),
    U = n(652215),
    k = n(985018),
    b = n(405587);
function F(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, d.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, A.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: b.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.Text, { className: b.yK, variant: "text-xs/medium", color: "text-default", children: r }),
        ],
    });
    return null != t && (0, O.Z_)(t.type)
        ? (0, l.jsx)(E.DUT, {
              className: i()(b.rg, b.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: b.rg, children: s });
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
            listNavigator: O,
        } = e,
        x = G.gs.useSetting(),
        M = (0, S.IL)(t),
        k = r.useCallback((e) => {
            if (e === D.A.getChannelId()) return;
            let t = R.A.getChannel(e);
            null == t || ((C.A.can(U.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.iN)(t.id));
        }, []),
        j = null != t ? (0, d.m1)(t, f.default, L.A, !1) : "???",
        v = t?.parent_id != null ? R.A.getChannel(t.parent_id) : null,
        P = null != v ? (0, d.m1)(v, f.default, L.A) : null,
        y = (0, A.gU)(t) ?? E.N$i,
        X = C.A.can(U.xBc.MANAGE_MESSAGES, t),
        { content: B } = (0, T.Ay)({ content: j, embeds: [] }, { postProcessor: a }),
        V = r.useRef(null),
        [H, w] = r.useState(!1);
    r.useEffect(() => {
        let e = V.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && w(e.offsetWidth < e.scrollWidth);
    }, []);
    let W = [j, P].filter((e) => null != e).join(", ");
    return (0, l.jsx)(m.Bs.Provider, {
        value: (0, g.A)(x, X),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: b.JT,
            "aria-label": W,
            children: [
                (0, l.jsx)(E.DUT, {
                    onClick: () => k(t.id),
                    children: (0, l.jsxs)("div", {
                        className: b.aT,
                        children: [
                            (0, l.jsx)(y, { className: b.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)(o.m_, {
                                asContainer: !0,
                                text: j,
                                shouldShow: H,
                                children: (0, l.jsx)("span", { ref: V, className: b.Kw, children: B }),
                            }),
                            (0, l.jsx)(F, { parentChannel: v, onSelectChannel: k }),
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
                            listItemProps: O.getItemProps({ index: r }),
                            isSpoilerHidden: M,
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
        } = e,
        { offset: O, totalResults: C, isSearching: D, showBlockedResults: f } = t,
        p = r.useCallback(
            (e, t) => {
                g?.(e, t);
                let n = () => {
                    let t = R.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S }),
                        (0, N.pX)(U.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, I.A)(e, n) && n();
            },
            [g, S],
        ),
        F = r.useMemo(() => {
            let e,
                t = 0;
            return i.reduce((n, l) => {
                if (!f && (L.A.isBlockedForMessage(l) || L.A.isIgnoredForMessage(l))) return n;
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
        }, [i, f]),
        v = r.useRef([]),
        P = F.reduce((e, t) => e + 1 + t.messages.length, 0),
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
        V = (0, c.wG)((0, x.dX)(G) ?? ""),
        H = F.map((e) => {
            let { channel: t, messages: r, startIndex: i } = e;
            return (0, l.jsx)(
                j,
                {
                    channel: t,
                    messages: r,
                    highlighter: V,
                    startIndex: i,
                    resultRefs: v,
                    totalResults: C,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: O,
                    jumpToMessage: p,
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
                      className: b.P,
                      onClick: () => {
                          m?.(!f);
                      },
                      children: [
                          (0, l.jsx)("div", { className: b.y }),
                          (0, l.jsx)("div", {
                              className: b.__invalid_resultsBlockedText,
                              children: f
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
            !D &&
                (0, l.jsx)(M.A, {
                    renderPageWrapper: h,
                    onPageChange: A,
                    offset: O,
                    totalCount: T ?? C,
                    pageSize: U.T_y,
                }),
        ],
    });
});
