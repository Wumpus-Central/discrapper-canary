n.d(t, { A: () => P }), n(747238), n(321073), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(416681),
    o = n(435371),
    c = n(397927),
    u = n(843472),
    E = n(570209),
    d = n(775602),
    _ = n(47167),
    g = n(713654),
    A = n(863439),
    T = n(465364),
    f = n(81437),
    h = n(976860),
    I = n(378570),
    O = n(302031),
    N = n(253932),
    m = n(95701),
    S = n(734057),
    p = n(71393),
    b = n(576705),
    G = n(994500),
    R = n(309010),
    D = n(287809),
    L = n(822382),
    x = n(876689),
    C = n(712838),
    M = n(652215),
    v = n(985018),
    j = n(274808);
function U(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let r = null != t ? (0, g.gU)(t) : null;
    if (null == r) return null;
    let a = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r, {
                className: j.gQ,
                size: "xxs",
                color: "currentColor",
            }),
            (0, l.jsx)(c.Text, {
                className: j.yK,
                variant: "text-xs/medium",
                color: "text-default",
                children: t.name,
            }),
        ],
    });
    return (0, m.Z_)(t.type)
        ? (0, l.jsx)(c.DUT, {
              className: i()(j.rg, j.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a,
          })
        : (0, l.jsx)("div", {
              className: j.rg,
              children: a,
          });
}
function y(e) {
    var t, n, a;
    let {
            channel: i,
            messages: s,
            highlighter: u,
            startIndex: E,
            resultRefs: d,
            totalResults: f,
            scrollTo: h,
            renderEmbeds: m,
            offset: L,
            jumpToMessage: x,
            listNavigator: v,
            favoriteSearch: y,
        } = e,
        P = N.gs.useSetting(),
        k = r.useCallback((e) => {
            if (e === R.A.getChannelId()) return;
            let t = S.A.getChannel(e);
            null == t || ((b.A.can(M.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, I.iN)(t.id));
        }, []),
        F = null != i ? (0, _.m1)(i, D.default, G.A, !1) : "???",
        w = y && null != i.guild_id ? (null == (a = p.A.getGuild(i.guild_id)) ? void 0 : a.name) : null,
        X = (null == i ? void 0 : i.parent_id) != null ? S.A.getChannel(i.parent_id) : null,
        B = null != (t = null == X ? void 0 : X.name) ? t : null,
        V = null != (n = (0, g.gU)(i)) ? n : c.N$i,
        H = b.A.can(M.xBc.MANAGE_MESSAGES, i),
        { content: W } = (0, T.Ay)(
            {
                content: F,
                embeds: [],
            },
            { postProcessor: u },
        ),
        K = r.useRef(null),
        [Y, z] = r.useState(!1);
    r.useEffect(() => {
        let e = K.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [F, B, w].filter((e) => null != e).join(", ");
    return (0, l.jsx)(O.Bs.Provider, {
        value: (0, A.A)(P, H),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: j.JT,
            "aria-label": J,
            children: [
                (0, l.jsx)(c.DUT, {
                    onClick: () => k(i.id),
                    children: (0, l.jsxs)("div", {
                        className: j.aT,
                        children: [
                            (0, l.jsx)(V, {
                                className: j.er,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, l.jsx)(o.m_, {
                                asContainer: !0,
                                text: F,
                                shouldShow: Y,
                                children: (0, l.jsxs)("span", {
                                    ref: K,
                                    className: j.Kw,
                                    children: [y && null !== w && "".concat(w, " : "), W],
                                }),
                            }),
                            (0, l.jsx)(U, {
                                parentChannel: X,
                                onSelectChannel: k,
                            }),
                        ],
                    }),
                }),
                s.map((e, t) => {
                    let n = E + t;
                    return (0, l.jsx)(
                        C.A,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: f,
                            scrollTo: h,
                            renderEmbeds: m,
                            searchOffset: L,
                            pageResultsLength: s.length,
                            message: e,
                            index: n,
                            onJump: x,
                            listItemProps: v.getItemProps({ index: n }),
                        },
                        "search-result-".concat(n),
                    );
                }),
            ],
        }),
    });
}
let P = r.memo(function (e) {
    var t, n, a;
    let {
            search: i,
            renderEmbeds: o,
            scrollTo: _,
            messages: g,
            blockCount: A,
            ignoreCount: T,
            onPageChange: I,
            onClick: O,
            paginationTotalCount: N,
            renderPageWrapper: m,
            onBlockedResultsClick: p,
            searchRequestAnalyticsId: b,
            searchResultsQuery: R,
            isFavoritesSearch: D,
        } = e,
        { offset: C, totalResults: U, isSearching: P, showBlockedResults: k } = i,
        F = r.useCallback(
            (e, t) => {
                null == O || O(e, t);
                let n = () => {
                    let t = S.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: b }),
                        (0, h.pX)(M.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, f.A)(e, n) && n();
            },
            [O, b],
        ),
        w = r.useMemo(() => {
            let e,
                t = 0;
            return g.reduce((n, l) => {
                if (!k && (G.A.isBlockedForMessage(l) || G.A.isIgnoredForMessage(l))) return n;
                let r = S.A.getChannel(l.channel_id);
                return (
                    null == r ||
                        ((null == e || e !== r.id) &&
                            n.push({
                                channel: r,
                                messages: [],
                                startIndex: t,
                            }),
                        (t += 1),
                        n[n.length - 1].messages.push(l),
                        (e = null == r ? void 0 : r.id)),
                    n
                );
            }, []);
        }, [g, k]),
        X = r.useRef([]),
        B = w.reduce((e, t) => e + 1 + t.messages.length, 0),
        V = r.useCallback(
            (e, t) => {
                if (!d.A.keyboardModeEnabled) return;
                let n = X.current,
                    l = null != t ? n[t] : void 0;
                if (null == l || null == l.hitRef.current) return;
                let r = l.hitRef.current.getClientRects()[0];
                _(r.top - 0.5 * r.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [_],
        ),
        H = r.useCallback((e) => {
            let t = X.current[e];
            null == t || t.jumpTo();
        }, []),
        W = (0, s.Ay)({
            navId: "search-results",
            itemCount: B,
            focusedIndex: 0,
            setFocus: V,
            onSelect: H,
        }),
        K = (0, E.wG)(null != (t = (0, L.dX)(R)) ? t : ""),
        Y = w.map((e) => {
            let { channel: t, messages: n, startIndex: r } = e;
            return (0, l.jsx)(
                y,
                {
                    channel: t,
                    messages: n,
                    highlighter: K,
                    startIndex: r,
                    resultRefs: X,
                    totalResults: U,
                    scrollTo: _,
                    renderEmbeds: o,
                    offset: C,
                    jumpToMessage: F,
                    listNavigator: W,
                    favoriteSearch: null != D && D,
                },
                "".concat(t.id, "-").concat(r),
            );
        });
    Y.push();
    let z = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        null == (e = z.current) || e.focus();
    }, [g]);
    let J = (0, c.R7z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(
                "div",
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({ ref: z }, W.getContainerProps(), J)),
                (a = a =
                    {
                        "aria-busy": P,
                        children: Y,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n),
            ),
            A > 0 || T > 0
                ? (0, l.jsxs)(c.DUT, {
                      tag: "div",
                      className: j.P,
                      onClick: () => {
                          null == p || p(!k);
                      },
                      children: [
                          (0, l.jsx)("div", { className: j.y }),
                          (0, l.jsx)("div", {
                              className: j.__invalid_resultsBlockedText,
                              children: k
                                  ? A > 0 && T > 0
                                      ? v.intl.formatToPlainString(v.t.OvJs9w, { count: A + T })
                                      : A > 0
                                        ? v.intl.formatToPlainString(v.t["n/1QFS"], { count: A })
                                        : v.intl.formatToPlainString(v.t.ypezTA, { count: T })
                                  : A > 0 && T > 0
                                    ? v.intl.formatToPlainString(v.t.EJHRcV, { count: A + T })
                                    : A > 0
                                      ? v.intl.formatToPlainString(v.t.HTE8JP, { count: A })
                                      : v.intl.formatToPlainString(v.t.e7f8r9, { count: T }),
                          }),
                      ],
                  })
                : null,
            !P &&
                !D &&
                (0, l.jsx)(x.A, {
                    renderPageWrapper: m,
                    onPageChange: I,
                    offset: C,
                    totalCount: null != N ? N : U,
                    pageSize: M.T_y,
                }),
        ],
    });
});
