n.d(t, { A: () => en }), n(321073);
var a,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    i = n.n(r),
    u = n(741918),
    o = (((a = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (a.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), a),
    c = n(602034);
let d = [u.D$.TAB, u.D$.UP, u.D$.DOWN];
function h(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function g(e) {
    return document.querySelector(e);
}
function f(e) {
    document.getElementById(e)?.focus();
}
var m = n(990078),
    p = n(312138),
    x = n(939249),
    E = n(834730),
    C = n(276293),
    N = n(720149),
    A = n(738768),
    T = n(775602),
    P = n(47167),
    v = n(713654),
    y = n(863439),
    j = n(465364),
    k = n(81437),
    _ = n(976860),
    b = n(378570),
    I = n(302031),
    S = n(288254),
    D = n(253932),
    M = n(95701),
    R = n(734057),
    w = n(576705),
    L = n(994500),
    U = n(309010),
    G = n(287809),
    X = n(822382),
    $ = n(932793),
    B = n(42754);
function F(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: r, renderPageWrapper: i } = e,
        u = Math.floor(n / r) + 1,
        o = s.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: B.k,
        children: (0, l.jsx)($.m, {
            currentPage: u,
            totalCount: a,
            pageSize: r,
            onPageChange: o,
            maxVisiblePages: 5,
            renderPageWrapper: i,
        }),
    });
}
var O = n(621466),
    V = n(187322),
    K = n(442433),
    W = n(636922),
    J = n(486020),
    z = n(985018),
    H = n(208423);
function Q(e) {
    let { message: t } = e,
        n = J.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        a = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: H.Iy,
        children: [
            (0, l.jsx)("img", { className: H.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: H.ur,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/semibold", color: "text-default", children: a }),
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: H.SR,
                        children: z.intl.string(z.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class Z extends s.PureComponent {
    containerRef = s.createRef();
    hitRef = s.createRef();
    handleContextMenu = (e, t) => {
        let a = R.A.getChannel(t.channel_id);
        null != a &&
            (e.stopPropagation(),
            (0, K.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("93103"), n.e("18108")]).then(n.bind(n, 847342));
                return (n) => (0, l.jsx)(e, { ...n, message: t, channel: a });
            }));
    };
    jumpTo = (e) => {
        null != e && (e.preventDefault(), e.stopPropagation());
        let { onJump: t, message: n, index: a } = this.props;
        null != n && t(n, a);
    };
    handleMessageClick = (e) => {
        !(function (e, t) {
            let n = window?.getSelection();
            if (null != n && !n.isCollapsed) return !0;
            if (null == e || null == t) return !1;
            for (; (0, O.vq)(e) && e !== t; ) {
                let { tagName: t } = e;
                if ("A" === t || "BUTTON" === t || ("IMG" === t && "true" !== e.getAttribute("aria-hidden"))) return !0;
                e = e.parentNode;
            }
            return !1;
        })(e.target, this.containerRef.current)
            ? this.jumpTo(e)
            : e.stopPropagation();
    };
    render() {
        let {
                message: e,
                listItemProps: t,
                searchOffset: n,
                index: a,
                totalResults: s,
                isSpoilerHidden: r,
            } = this.props,
            i = R.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, l.jsx)(V.vN, {
            ringTarget: this.hitRef,
            ringClassName: H.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: H.kL,
                ...t,
                "aria-posinset": 1 + n + a,
                "aria-setsize": s,
                "aria-labelledby": u,
                children: [
                    (0, l.jsx)(x.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: H.mk,
                        focusProps: { enabled: !1 },
                        children: (0, l.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: H.iU,
                                children: r
                                    ? (0, l.jsx)(Q, { message: e })
                                    : (0, l.jsx)(W.A, {
                                          id: u,
                                          message: e,
                                          channel: i,
                                          onContextMenu: (t) => this.handleContextMenu(t, e),
                                          animateAvatar: !1,
                                          subscribeToComponentDispatch: !1,
                                          trackAnnouncementViews: !0,
                                      }),
                            },
                            e.id,
                        ),
                    }),
                    (0, l.jsx)("div", {
                        className: H.NC,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(x.D, {
                            className: H.x6,
                            onClick: this.jumpTo,
                            children: z.intl.string(z.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var q = n(652215),
    Y = n(494339);
function ee(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        a = (0, P.Ay)(t);
    if (null == a) return null;
    let s = null != t ? (0, v.gU)(t) : null;
    if (null == s) return null;
    let r = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s, { className: Y.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.E, {
                className: Y.yK,
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: a,
            }),
        ],
    });
    return null != t && (0, M.Z_)(t.type)
        ? (0, l.jsx)(x.D, {
              className: i()(Y.rg, Y.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: r,
          })
        : (0, l.jsx)("div", { className: Y.rg, children: r });
}
function et(e) {
    let {
            channel: t,
            messages: n,
            highlighter: a,
            startIndex: r,
            resultRefs: i,
            totalResults: u,
            scrollTo: o,
            renderEmbeds: c,
            offset: d,
            jumpToMessage: h,
            listNavigator: g,
        } = e,
        f = D.gs.useSetting(),
        p = (0, S.IL)(t),
        E = s.useCallback((e) => {
            if (e === U.A.getChannelId()) return;
            let t = R.A.getChannel(e);
            null == t || ((w.A.can(q.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, b.iN)(t.id));
        }, []),
        N = null != t ? (0, P.m1)(t, G.default, L.A, !1) : "???",
        A = t?.parent_id != null ? R.A.getChannel(t.parent_id) : null,
        T = null != A ? (0, P.m1)(A, G.default, L.A) : null,
        k = (0, v.gU)(t) ?? C.N,
        _ = w.A.can(q.xBc.MANAGE_MESSAGES, t),
        { content: M } = (0, j.Ay)({ content: N, embeds: [] }, { postProcessor: a }),
        X = s.useRef(null),
        [$, B] = s.useState(!1);
    s.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && B(e.offsetWidth < e.scrollWidth);
    }, []);
    let F = [N, T].filter((e) => null != e).join(", ");
    return (0, l.jsx)(I.Bs.Provider, {
        value: (0, y.A)(f, _),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: Y.JT,
            "aria-label": F,
            children: [
                (0, l.jsx)(x.D, {
                    onClick: () => E(t.id),
                    children: (0, l.jsxs)("div", {
                        className: Y.aT,
                        children: [
                            (0, l.jsx)(k, { className: Y.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: Y.rm,
                                children: (0, l.jsx)(m.m, {
                                    asContainer: !0,
                                    text: N,
                                    shouldShow: $,
                                    children: (0, l.jsx)("span", { ref: X, className: Y.Kw, children: M }),
                                }),
                            }),
                            (0, l.jsx)(ee, { parentChannel: A, onSelectChannel: E }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let a = r + t;
                    return (0, l.jsx)(
                        Z,
                        {
                            ref: (e) => {
                                i.current[a] = e;
                            },
                            totalResults: u,
                            scrollTo: o,
                            renderEmbeds: c,
                            searchOffset: d,
                            pageResultsLength: n.length,
                            message: e,
                            index: a,
                            onJump: h,
                            listItemProps: g.getItemProps({ index: a }),
                            isSpoilerHidden: p,
                        },
                        `search-result-${a}`,
                    );
                }),
            ],
        }),
    });
}
let en = s.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: a,
            messages: r,
            blockCount: i,
            ignoreCount: m,
            onPageChange: E,
            onClick: C,
            paginationTotalCount: P,
            renderPageWrapper: v,
            onBlockedResultsClick: y,
            searchRequestAnalyticsId: j,
            searchResultsQuery: b,
        } = e,
        { offset: I, totalResults: S, isSearching: D, showBlockedResults: M } = t,
        w = s.useCallback(
            (e, t) => {
                C?.(e, t);
                let n = () => {
                    let t = R.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    N.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: j }),
                        (0, _.pX)(q.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, k.A)(e, n) && n();
            },
            [C, j],
        ),
        U = s.useMemo(() => {
            let e,
                t = 0;
            return r.reduce((n, a) => {
                if (!M && (L.A.isBlockedForMessage(a) || L.A.isIgnoredForMessage(a))) return n;
                let l = R.A.getChannel(a.channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) && n.push({ channel: l, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(a),
                        (e = l?.id)),
                    n
                );
            }, []);
        }, [r, M]),
        G = s.useRef([]),
        $ = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: a = 0,
                    onSelect: l,
                    setFocus: r,
                    getNewFocusIndex: i,
                    maintainFocusPosition: m = !0,
                    includeSetSizes: p = !0,
                    focusOnMount: x = !0,
                    enabled: E = !0,
                    onDispatch: C,
                } = e,
                N = s.useCallback(
                    (e, t) => {
                        let n = (function (e, t) {
                            switch (t.type) {
                                case u.X2.NAVIGATE_UP:
                                    return { ...e, focusedIndex: Math.max(0, e.focusedIndex - 1) };
                                case u.X2.NAVIGATE_DOWN:
                                    return { ...e, focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) };
                                case u.X2.NAVIGATE_START:
                                    return { ...e, focusedIndex: 0 };
                                case u.X2.NAVIGATE_END:
                                    return { ...e, focusedIndex: e.itemCount - 1 };
                                case "UPDATE_ITEM_COUNT":
                                    return (function (e, t) {
                                        let { itemCount: n } = t;
                                        return { ...e, itemCount: n, focusedIndex: Math.min(n - 1, e.focusedIndex) };
                                    })(e, t);
                                case "SET_FOCUSED_INDEX":
                                    return (function (e, t) {
                                        let { index: n } = t;
                                        return { ...e, focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1)) };
                                    })(e, t);
                                case u.X2.SELECT_FOCUSED_ITEM:
                                    break;
                                default:
                                    console.warn(`Listbox navigator was given an unhandled action ${t.type}`);
                            }
                            return e;
                        })(e, t);
                        return null != C && C(e, n, t), n;
                    },
                    [C],
                ),
                [A, T] = s.useReducer(N, { focusedIndex: a, itemCount: n }),
                { itemCount: P, focusedIndex: v } = A,
                [y] = s.useState(() => (0, c.nF)(T, 16));
            return (
                s.useEffect(() => {
                    T({ type: o.UPDATE_ITEM_COUNT, itemCount: n });
                }, [n]),
                (function (e) {
                    let {
                            navId: t,
                            itemCount: n,
                            focusedIndex: a,
                            onSelect: l,
                            setFocus: r = f,
                            getNewFocusIndex: i,
                            dispatch: m,
                            maintainFocusPosition: p,
                            includeSetSizes: x,
                            focusOnMount: E,
                            enabled: C,
                            makeId: N = c.M4,
                            getIndexFromId: A,
                        } = e,
                        T = s.useRef(n),
                        P = s.useRef(A);
                    (P.current = A), (T.current = n);
                    let v = s.useRef(C);
                    s.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [y, j] = s.useState(!1),
                        [k] = s.useState(
                            () =>
                                new c.Lp((e) => () => {
                                    let t = null != P.current && "string" == typeof e ? P.current(e) : e;
                                    "number" != typeof t || t < 0 || m({ type: o.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    s.useEffect(() => () => k.clean(), [k]);
                    let _ = s.useCallback(
                            (e, t) => {
                                v.current && r(e, t);
                            },
                            [r],
                        ),
                        [b, I] = s.useState(!0);
                    s.useEffect(() => {
                        b && !E ? I(!1) : _(N(t, a), a);
                    }, [a]);
                    let S = s.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != i ? i(a) : a;
                                n !== a && m({ type: o.SET_FOCUSED_INDEX, index: n }), e && _(N(t, n), n);
                            },
                            [N, a, i, m, t, _],
                        ),
                        D = s.useCallback(
                            (e) => {
                                if (!v.current) return;
                                if (
                                    d.includes(e.key) &&
                                    !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                    e.currentTarget === e.target
                                ) {
                                    e.preventDefault(), e.stopPropagation(), S();
                                    return;
                                }
                                let n = (function (e) {
                                    switch (e.key) {
                                        case u.D$.ENTER:
                                        case u.D$.SPACE:
                                            return u.X2.SELECT_FOCUSED_ITEM;
                                        case u.D$.UP:
                                            return u.X2.NAVIGATE_UP;
                                        case u.D$.DOWN:
                                            return u.X2.NAVIGATE_DOWN;
                                        case u.D$.HOME:
                                            return u.X2.NAVIGATE_START;
                                        case u.D$.END:
                                            return u.X2.NAVIGATE_END;
                                    }
                                })(e);
                                switch (n) {
                                    case u.X2.NAVIGATE_UP:
                                    case u.X2.NAVIGATE_DOWN:
                                    case u.X2.NAVIGATE_START:
                                    case u.X2.NAVIGATE_END:
                                        e.preventDefault(), e.stopPropagation(), m({ type: n });
                                        return;
                                    case u.X2.SELECT_FOCUSED_ITEM:
                                        let s = g(h(N, t, a));
                                        if (s?.ownerDocument.activeElement !== s || e.repeat) return;
                                        if ((e.preventDefault(), e.stopPropagation(), m({ type: n }), null != l))
                                            return void l(a);
                                        s?.click();
                                }
                            },
                            [N, t, m, a, S, l],
                        ),
                        M = s.useCallback(() => {
                            y || j(!0);
                        }, [y]),
                        R = s.useCallback(() => {
                            y || (p ? _(N(t, a), a) : S(!0));
                        }, [N, t, _, p, y, a, S]),
                        w = s.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == g(h(N, t, a)) ? _(t) : j(!1);
                                    });
                            },
                            [N, t, a, _],
                        ),
                        L = s.useRef(null);
                    s.useLayoutEffect(() => {
                        let e = L.current;
                        if (null != e)
                            return (
                                e.addEventListener("focusin", M),
                                e.addEventListener("focus", R),
                                e.addEventListener("focusout", w),
                                () => {
                                    e.removeEventListener("focusin", M),
                                        e.removeEventListener("focus", R),
                                        e.removeEventListener("focusout", w);
                                }
                            );
                    }, [R, M, w]);
                    let U = s.useCallback(
                            () => ({ role: "list", tabIndex: y && p ? -1 : 0, id: t, onKeyDown: D, ref: L }),
                            [t, y, D, p],
                        ),
                        G = s.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": x ? T.current : void 0,
                                    "aria-posinset": x ? n + 1 : void 0,
                                    id: N(t, n),
                                    tabIndex: p && n === a ? 0 : -1,
                                    onFocus: k.get(null != P.current ? N(t, n) : n),
                                };
                            },
                            [N, t, a, p, k, x],
                        );
                    return s.useMemo(() => ({ dispatch: m, getContainerProps: U, getItemProps: G }), [m, U, G]);
                })({
                    navId: t,
                    itemCount: P,
                    focusedIndex: v,
                    dispatch: y,
                    onSelect: l,
                    setFocus: r,
                    getNewFocusIndex: i,
                    maintainFocusPosition: m,
                    includeSetSizes: p,
                    focusOnMount: x,
                    enabled: E,
                })
            );
        })({
            navId: "search-results",
            itemCount: U.reduce((e, t) => e + 1 + t.messages.length, 0),
            focusedIndex: 0,
            setFocus: s.useCallback(
                (e, t) => {
                    if (!T.A.keyboardModeEnabled) return;
                    let n = G.current,
                        l = null != t ? n[t] : void 0;
                    if (null == l || null == l.hitRef.current) return;
                    let s = l.hitRef.current.getClientRects()[0];
                    a(s.top - 0.5 * s.height, !1, () => {
                        document.getElementById(e)?.focus();
                    });
                },
                [a],
            ),
            onSelect: s.useCallback((e) => {
                let t = G.current[e];
                t?.jumpTo();
            }, []),
        }),
        B = (0, A.wG)((0, X.dX)(b) ?? ""),
        O = U.map((e) => {
            let { channel: t, messages: s, startIndex: r } = e;
            return (0, l.jsx)(
                et,
                {
                    channel: t,
                    messages: s,
                    highlighter: B,
                    startIndex: r,
                    resultRefs: G,
                    totalResults: S,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: I,
                    jumpToMessage: w,
                    listNavigator: $,
                },
                `${t.id}-${r}`,
            );
        });
    O.push();
    let V = s.useRef(null);
    s.useLayoutEffect(() => {
        V.current?.focus();
    }, [r]);
    let K = (0, p.R7)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: V, ...$.getContainerProps(), ...K, "aria-busy": D, children: O }),
            i > 0 || m > 0
                ? (0, l.jsxs)(x.D, {
                      tag: "div",
                      className: Y.P,
                      onClick: () => {
                          y?.(!M);
                      },
                      children: [
                          (0, l.jsx)("div", { className: Y.y }),
                          (0, l.jsx)("div", {
                              className: Y.__invalid_resultsBlockedText,
                              children: M
                                  ? i > 0 && m > 0
                                      ? z.intl.formatToPlainString(z.t.OvJs9w, { count: i + m })
                                      : i > 0
                                        ? z.intl.formatToPlainString(z.t["n/1QFS"], { count: i })
                                        : z.intl.formatToPlainString(z.t.ypezTA, { count: m })
                                  : i > 0 && m > 0
                                    ? z.intl.formatToPlainString(z.t.EJHRcV, { count: i + m })
                                    : i > 0
                                      ? z.intl.formatToPlainString(z.t.HTE8JP, { count: i })
                                      : z.intl.formatToPlainString(z.t.e7f8r9, { count: m }),
                          }),
                      ],
                  })
                : null,
            !D &&
                (0, l.jsx)(F, {
                    renderPageWrapper: v,
                    onPageChange: E,
                    offset: I,
                    totalCount: P ?? S,
                    pageSize: q.T_y,
                }),
        ],
    });
});
