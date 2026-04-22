n.d(t, { A: () => $ }), n(321073);
var a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(416681),
    u = n(990078),
    o = n(312138),
    c = n(939249),
    d = n(834730),
    h = n(276293),
    g = n(843472),
    f = n(570209),
    p = n(775602),
    m = n(47167),
    x = n(713654),
    E = n(863439),
    A = n(465364),
    C = n(81437),
    N = n(976860),
    P = n(378570),
    T = n(302031),
    v = n(288254),
    y = n(253932),
    k = n(95701),
    j = n(734057),
    _ = n(576705),
    b = n(994500),
    D = n(309010),
    I = n(287809),
    S = n(822382),
    M = n(876689),
    R = n(712838),
    U = n(652215),
    w = n(985018),
    G = n(494339);
function L(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, m.Ay)(t);
    if (null == r) return null;
    let l = null != t ? (0, x.gU)(t) : null;
    if (null == l) return null;
    let i = (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l, { className: G.gQ, size: "xxs", color: "currentColor" }),
            (0, a.jsx)(d.E, { className: G.yK, variant: "text-xs/medium", color: "text-default", children: r }),
        ],
    });
    return null != t && (0, k.Z_)(t.type)
        ? (0, a.jsx)(c.D, {
              className: s()(G.rg, G.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: i,
          })
        : (0, a.jsx)("div", { className: G.rg, children: i });
}
function X(e) {
    let {
            channel: t,
            messages: n,
            highlighter: l,
            startIndex: s,
            resultRefs: i,
            totalResults: o,
            scrollTo: d,
            renderEmbeds: g,
            offset: f,
            jumpToMessage: p,
            listNavigator: C,
        } = e,
        N = y.gs.useSetting(),
        k = (0, v.IL)(t),
        S = r.useCallback((e) => {
            if (e === D.A.getChannelId()) return;
            let t = j.A.getChannel(e);
            null == t || ((_.A.can(U.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, P.iN)(t.id));
        }, []),
        M = null != t ? (0, m.m1)(t, I.default, b.A, !1) : "???",
        w = t?.parent_id != null ? j.A.getChannel(t.parent_id) : null,
        X = null != w ? (0, m.m1)(w, I.default, b.A) : null,
        $ = (0, x.gU)(t) ?? h.N,
        B = _.A.can(U.xBc.MANAGE_MESSAGES, t),
        { content: F } = (0, A.Ay)({ content: M, embeds: [] }, { postProcessor: l }),
        O = r.useRef(null),
        [V, J] = r.useState(!1);
    r.useEffect(() => {
        let e = O.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let K = [M, X].filter((e) => null != e).join(", ");
    return (0, a.jsx)(T.Bs.Provider, {
        value: (0, E.A)(N, B),
        children: (0, a.jsxs)("ul", {
            role: "group",
            className: G.JT,
            "aria-label": K,
            children: [
                (0, a.jsx)(c.D, {
                    onClick: () => S(t.id),
                    children: (0, a.jsxs)("div", {
                        className: G.aT,
                        children: [
                            (0, a.jsx)($, { className: G.er, size: "xs", color: "currentColor" }),
                            (0, a.jsx)(u.m, {
                                asContainer: !0,
                                text: M,
                                shouldShow: V,
                                children: (0, a.jsx)("span", { ref: O, className: G.Kw, children: F }),
                            }),
                            (0, a.jsx)(L, { parentChannel: w, onSelectChannel: S }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = s + t;
                    return (0, a.jsx)(
                        R.A,
                        {
                            ref: (e) => {
                                i.current[r] = e;
                            },
                            totalResults: o,
                            scrollTo: d,
                            renderEmbeds: g,
                            searchOffset: f,
                            pageResultsLength: n.length,
                            message: e,
                            index: r,
                            onJump: p,
                            listItemProps: C.getItemProps({ index: r }),
                            isSpoilerHidden: k,
                        },
                        `search-result-${r}`,
                    );
                }),
            ],
        }),
    });
}
let $ = r.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: l,
            messages: s,
            blockCount: u,
            ignoreCount: d,
            onPageChange: h,
            onClick: m,
            paginationTotalCount: x,
            renderPageWrapper: E,
            onBlockedResultsClick: A,
            searchRequestAnalyticsId: P,
            searchResultsQuery: T,
        } = e,
        { offset: v, totalResults: y, isSearching: k, showBlockedResults: _ } = t,
        D = r.useCallback(
            (e, t) => {
                m?.(e, t);
                let n = () => {
                    let t = j.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    g.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: P }),
                        (0, N.pX)(U.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, C.A)(e, n) && n();
            },
            [m, P],
        ),
        I = r.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, a) => {
                if (!_ && (b.A.isBlockedForMessage(a) || b.A.isIgnoredForMessage(a))) return n;
                let r = j.A.getChannel(a.channel_id);
                return (
                    null == r ||
                        ((null == e || e !== r.id) && n.push({ channel: r, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(a),
                        (e = r?.id)),
                    n
                );
            }, []);
        }, [s, _]),
        R = r.useRef([]),
        L = I.reduce((e, t) => e + 1 + t.messages.length, 0),
        $ = r.useCallback(
            (e, t) => {
                if (!p.A.keyboardModeEnabled) return;
                let n = R.current,
                    a = null != t ? n[t] : void 0;
                if (null == a || null == a.hitRef.current) return;
                let r = a.hitRef.current.getClientRects()[0];
                l(r.top - 0.5 * r.height, !1, () => {
                    document.getElementById(e)?.focus();
                });
            },
            [l],
        ),
        B = r.useCallback((e) => {
            let t = R.current[e];
            t?.jumpTo();
        }, []),
        F = (0, i.Ay)({ navId: "search-results", itemCount: L, focusedIndex: 0, setFocus: $, onSelect: B }),
        O = (0, f.wG)((0, S.dX)(T) ?? ""),
        V = I.map((e) => {
            let { channel: t, messages: r, startIndex: s } = e;
            return (0, a.jsx)(
                X,
                {
                    channel: t,
                    messages: r,
                    highlighter: O,
                    startIndex: s,
                    resultRefs: R,
                    totalResults: y,
                    scrollTo: l,
                    renderEmbeds: n,
                    offset: v,
                    jumpToMessage: D,
                    listNavigator: F,
                },
                `${t.id}-${s}`,
            );
        });
    V.push();
    let J = r.useRef(null);
    r.useLayoutEffect(() => {
        J.current?.focus();
    }, [s]);
    let K = (0, o.R7)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: J, ...F.getContainerProps(), ...K, "aria-busy": k, children: V }),
            u > 0 || d > 0
                ? (0, a.jsxs)(c.D, {
                      tag: "div",
                      className: G.P,
                      onClick: () => {
                          A?.(!_);
                      },
                      children: [
                          (0, a.jsx)("div", { className: G.y }),
                          (0, a.jsx)("div", {
                              className: G.__invalid_resultsBlockedText,
                              children: _
                                  ? u > 0 && d > 0
                                      ? w.intl.formatToPlainString(w.t.OvJs9w, { count: u + d })
                                      : u > 0
                                        ? w.intl.formatToPlainString(w.t["n/1QFS"], { count: u })
                                        : w.intl.formatToPlainString(w.t.ypezTA, { count: d })
                                  : u > 0 && d > 0
                                    ? w.intl.formatToPlainString(w.t.EJHRcV, { count: u + d })
                                    : u > 0
                                      ? w.intl.formatToPlainString(w.t.HTE8JP, { count: u })
                                      : w.intl.formatToPlainString(w.t.e7f8r9, { count: d }),
                          }),
                      ],
                  })
                : null,
            !k &&
                (0, a.jsx)(M.A, {
                    renderPageWrapper: E,
                    onPageChange: h,
                    offset: v,
                    totalCount: x ?? y,
                    pageSize: U.T_y,
                }),
        ],
    });
});
