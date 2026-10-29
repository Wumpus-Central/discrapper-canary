(n.d(t, { A: () => en }), n(321073));
var r,
    l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    u = n(741918),
    c = (((r = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), r),
    o = n(602034);
let d = [u.D$.TAB, u.D$.UP, u.D$.DOWN];
function f(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function h(e) {
    return document.querySelector(e);
}
function m(e) {
    document.getElementById(e)?.focus();
}
var g = n(312138),
    x = n(939249),
    E = n(834730),
    p = n(276293),
    C = n(866665),
    T = n(148494),
    A = n(738768),
    N = n(775602),
    _ = n(964167),
    v = n(47167),
    I = n(713654),
    P = n(954403),
    D = n(863439),
    S = n(521981),
    j = n(81437),
    y = n(976860),
    b = n(378570),
    k = n(302031),
    R = n(288254),
    M = n(253932),
    U = n(95701),
    X = n(734057),
    L = n(576705),
    O = n(994500),
    G = n(309010),
    w = n(287809),
    F = n(822382),
    V = n(876689),
    $ = n(621466),
    W = n(559106),
    B = n(442433),
    K = n(636922),
    z = n(486020),
    J = n(105292),
    H = n(823954);
function q(e) {
    let { message: t } = e,
        n = z.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: H.Iy,
        children: [
            (0, l.jsx)("img", { className: H.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: H.ur,
                children: [
                    (0, l.jsx)(E.E, { variant: "text-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: H.SR,
                        children: J.intl.string(J.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class Q extends a.PureComponent {
    containerRef = a.createRef();
    hitRef = a.createRef();
    handleContextMenu = (e, t) => {
        let r = X.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, B.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("587308"),
                    n.e("292699"),
                    n.e("691671"),
                    n.e("295998"),
                    n.e("527687"),
                    n.e("81189"),
                    n.e("200203"),
                    n.e("944801"),
                    n.e("812663"),
                    n.e("480419"),
                ]).then(n.bind(n, 847342));
                return (n) => (0, l.jsx)(e, { ...n, message: t, channel: r });
            }));
    };
    jumpTo = (e) => {
        null != e && (e.preventDefault(), e.stopPropagation());
        let { onJump: t, message: n, index: r } = this.props;
        null != n && t(n, r);
    };
    handleMessageClick = (e) => {
        !(function (e, t) {
            let n = window?.getSelection();
            if (null != n && !n.isCollapsed) return !0;
            if (null == e || null == t) return !1;
            for (; (0, $.vq)(e) && e !== t;) {
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
                index: r,
                totalResults: a,
                isSpoilerHidden: s,
            } = this.props,
            i = X.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, l.jsx)(W.vN, {
            ringTarget: this.hitRef,
            ringClassName: H.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: H.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": a,
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
                                children: s
                                    ? (0, l.jsx)(q, { message: e })
                                    : (0, l.jsx)(K.A, {
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
                            children: J.intl.string(J.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var Y = n(652215),
    Z = n(979882);
function ee(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, v.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, I.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: Z.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.E, {
                className: Z.yK,
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
    return null != t && (0, U.Z_)(t.type)
        ? (0, l.jsx)(x.D, {
              className: i()(Z.rg, Z.fj),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: Z.rg, children: s });
}
function et(e) {
    let {
            channel: t,
            messages: n,
            highlighter: r,
            startIndex: s,
            resultRefs: i,
            totalResults: u,
            scrollTo: c,
            renderEmbeds: o,
            offset: d,
            jumpToMessage: f,
            listNavigator: h,
        } = e,
        m = M.gs.useSetting(),
        g = (0, R.IL)(t),
        T = a.useCallback((e) => {
            if (e === G.Ay.getChannelId()) return;
            let t = X.A.getChannel(e);
            null == t || ((L.A.can(Y.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, b.iN)(t.id));
        }, []),
        A = null != t ? (0, v.m1)(t, w.default, O.A, !1) : "???",
        N = t?.parent_id != null ? X.A.getChannel(t.parent_id) : null,
        _ = null != N ? (0, v.m1)(N, w.default, O.A) : null,
        P = (0, I.gU)(t) ?? p.N,
        j = L.A.can(Y.xBc.MANAGE_MESSAGES, t),
        { content: y } = (0, S.Ay)({ content: A, embeds: [] }, { postProcessor: r }),
        U = a.useRef(null),
        [F, V] = a.useState(!1);
    a.useEffect(() => {
        let e = U.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && V(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [A, _].filter((e) => null != e).join(", "),
        W = (0, D.A)(m, j);
    return (0, l.jsx)(k.Bs.Provider, {
        value: W,
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: Z.JT,
            "aria-label": $,
            children: [
                (0, l.jsx)(x.D, {
                    onClick: () => T(t.id),
                    children: (0, l.jsxs)("div", {
                        className: Z.aT,
                        children: [
                            (0, l.jsx)(P, { className: Z.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: Z.rm,
                                children: (0, l.jsx)(C.m, {
                                    asContainer: !0,
                                    text: A,
                                    shouldShow: F,
                                    children: (0, l.jsx)(E.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        tag: "span",
                                        ref: U,
                                        className: Z.Kw,
                                        children: y,
                                    }),
                                }),
                            }),
                            (0, l.jsx)(ee, { parentChannel: N, onSelectChannel: T }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = s + t;
                    return (0, l.jsx)(
                        Q,
                        {
                            ref: (e) => {
                                i.current[r] = e;
                            },
                            totalResults: u,
                            scrollTo: c,
                            renderEmbeds: o,
                            searchOffset: d,
                            pageResultsLength: n.length,
                            message: e,
                            index: r,
                            onJump: f,
                            listItemProps: h.getItemProps({ index: r }),
                            isSpoilerHidden: g,
                        },
                        `search-result-${r}`,
                    );
                }),
            ],
        }),
    });
}
let en = a.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: r,
            messages: s,
            blockCount: i,
            ignoreCount: E,
            onPageChange: p,
            onClick: C,
            paginationTotalCount: v,
            renderPageWrapper: I,
            onBlockedResultsClick: D,
            searchRequestAnalyticsId: S,
            searchResultsQuery: b,
        } = e,
        { offset: k, totalResults: R, isSearching: M, showBlockedResults: U } = t,
        L = a.useCallback(
            (e, t) => {
                function n() {
                    let t = X.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    T.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S });
                    let r = Y.BVt.CHANNEL(n, e.channel_id, e.id);
                    (0, y.pX)(t?.type === Y.rbe.GUILD_APP ? (0, _.gu)(r) : r);
                }
                (C?.(e, t), (0, j.A)(e, n) && n());
            },
            [C, S],
        ),
        G = a.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, r) => {
                if (!U && (O.A.isBlockedForMessage(r) || O.A.isIgnoredForMessage(r))) return n;
                let l = X.A.getChannel(r.channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) && n.push({ channel: l, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(r),
                        (e = l?.id)),
                    n
                );
            }, []);
        }, [s, U]),
        w = a.useRef([]),
        $ = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r = 0,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g = !0,
                    includeSetSizes: x = !0,
                    focusOnMount: E = !0,
                    enabled: p = !0,
                    onDispatch: C,
                } = e,
                T = a.useCallback(
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
                        return (null != C && C(e, n, t), n);
                    },
                    [C],
                ),
                [A, N] = a.useReducer(T, { focusedIndex: r, itemCount: n }),
                { itemCount: _, focusedIndex: v } = A,
                [I] = a.useState(() => (0, o.nF)(N, 16));
            return (
                a.useEffect(() => {
                    N({ type: c.UPDATE_ITEM_COUNT, itemCount: n });
                }, [n]),
                (function (e) {
                    let {
                            navId: t,
                            itemCount: n,
                            focusedIndex: r,
                            onSelect: l,
                            setFocus: s = m,
                            getNewFocusIndex: i,
                            dispatch: g,
                            maintainFocusPosition: x,
                            includeSetSizes: E,
                            focusOnMount: p,
                            enabled: C,
                            makeId: T = o.M4,
                            getIndexFromId: A,
                        } = e,
                        N = a.useRef(n),
                        _ = a.useRef(A);
                    ((_.current = A), (N.current = n));
                    let v = a.useRef(C);
                    a.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [I, P] = a.useState(!1),
                        [D] = a.useState(
                            () =>
                                new o.Lp((e) => () => {
                                    let t = null != _.current && "string" == typeof e ? _.current(e) : e;
                                    "number" != typeof t || t < 0 || g({ type: c.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    a.useEffect(() => () => D.clean(), [D]);
                    let S = a.useCallback(
                            (e, t) => {
                                v.current && s(e, t);
                            },
                            [s],
                        ),
                        [j, y] = a.useState(!0);
                    a.useEffect(() => {
                        j && !p ? y(!1) : S(T(t, r), r);
                    }, [r]);
                    let b = a.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != i ? i(r) : r;
                                (n !== r && g({ type: c.SET_FOCUSED_INDEX, index: n }), e && S(T(t, n), n));
                            },
                            [T, r, i, g, t, S],
                        ),
                        k = a.useCallback(
                            (e) => {
                                if (!v.current) return;
                                if (
                                    d.includes(e.key) &&
                                    !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                    e.currentTarget === e.target
                                ) {
                                    (e.preventDefault(), e.stopPropagation(), b());
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
                                        (e.preventDefault(), e.stopPropagation(), g({ type: n }));
                                        return;
                                    case u.X2.SELECT_FOCUSED_ITEM:
                                        let a = h(f(T, t, r));
                                        if (a?.ownerDocument.activeElement !== a || e.repeat) return;
                                        if ((e.preventDefault(), e.stopPropagation(), g({ type: n }), null != l))
                                            return void l(r);
                                        a?.click();
                                }
                            },
                            [T, t, g, r, b, l],
                        ),
                        R = a.useCallback(() => {
                            I || P(!0);
                        }, [I]),
                        M = a.useCallback(() => {
                            I || (x ? S(T(t, r), r) : b(!0));
                        }, [T, t, S, x, I, r, b]),
                        U = a.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == h(f(T, t, r)) ? S(t) : P(!1);
                                    });
                            },
                            [T, t, r, S],
                        ),
                        X = a.useRef(null);
                    a.useLayoutEffect(() => {
                        let e = X.current;
                        if (null != e)
                            return (
                                e.addEventListener("focusin", R),
                                e.addEventListener("focus", M),
                                e.addEventListener("focusout", U),
                                () => {
                                    (e.removeEventListener("focusin", R),
                                        e.removeEventListener("focus", M),
                                        e.removeEventListener("focusout", U));
                                }
                            );
                    }, [M, R, U]);
                    let L = a.useCallback(
                            () => ({ role: "list", tabIndex: I && x ? -1 : 0, id: t, onKeyDown: k, ref: X }),
                            [t, I, k, x],
                        ),
                        O = a.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": E ? N.current : void 0,
                                    "aria-posinset": E ? n + 1 : void 0,
                                    id: T(t, n),
                                    tabIndex: x && n === r ? 0 : -1,
                                    onFocus: D.get(null != _.current ? T(t, n) : n),
                                };
                            },
                            [T, t, r, x, D, E],
                        );
                    return a.useMemo(() => ({ dispatch: g, getContainerProps: L, getItemProps: O }), [g, L, O]);
                })({
                    navId: t,
                    itemCount: _,
                    focusedIndex: v,
                    dispatch: I,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g,
                    includeSetSizes: x,
                    focusOnMount: E,
                    enabled: p,
                })
            );
        })({
            navId: "search-results",
            itemCount: G.reduce((e, t) => e + 1 + t.messages.length, 0),
            focusedIndex: 0,
            setFocus: a.useCallback(
                (e, t) => {
                    if (!N.Ay.keyboardModeEnabled) return;
                    let n = w.current,
                        l = null != t ? n[t] : void 0;
                    if (null == l || null == l.hitRef.current) return;
                    let a = l.hitRef.current.getClientRects()[0];
                    r(a.top - 0.5 * a.height, !1, () => {
                        document.getElementById(e)?.focus();
                    });
                },
                [r],
            ),
            onSelect: a.useCallback((e) => {
                let t = w.current[e];
                t?.jumpTo();
            }, []),
        }),
        W = (0, F.dX)(b) ?? "",
        B = (0, A.wG)(W),
        K = a.useMemo(() => (0, A.th)(W), [W]),
        z = G.map((e) => {
            let { channel: t, messages: a, startIndex: s } = e;
            return (0, l.jsx)(
                et,
                {
                    channel: t,
                    messages: a,
                    highlighter: B,
                    startIndex: s,
                    resultRefs: w,
                    totalResults: R,
                    scrollTo: r,
                    renderEmbeds: n,
                    offset: k,
                    jumpToMessage: L,
                    listNavigator: $,
                },
                `${t.id}-${s}`,
            );
        });
    z.push();
    let H = a.useRef(null);
    a.useLayoutEffect(() => {
        H.current?.focus();
    }, [s]);
    let q = (0, g.R7)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: H,
                ...$.getContainerProps(),
                ...q,
                "aria-busy": M,
                children: (0, l.jsx)(P.G.Provider, { value: K, children: z }),
            }),
            i > 0 || E > 0
                ? (0, l.jsxs)(x.D, {
                      tag: "div",
                      className: Z.P,
                      onClick: function () {
                          D?.(!U);
                      },
                      children: [
                          (0, l.jsx)("div", { className: Z.y }),
                          (0, l.jsx)("div", {
                              className: Z.__invalid_resultsBlockedText,
                              children: U
                                  ? i > 0 && E > 0
                                      ? J.intl.formatToPlainString(J.t.OvJs9w, { count: i + E })
                                      : i > 0
                                        ? J.intl.formatToPlainString(J.t["n/1QFS"], { count: i })
                                        : J.intl.formatToPlainString(J.t.ypezTA, { count: E })
                                  : i > 0 && E > 0
                                    ? J.intl.formatToPlainString(J.t.EJHRcV, { count: i + E })
                                    : i > 0
                                      ? J.intl.formatToPlainString(J.t.HTE8JP, { count: i })
                                      : J.intl.formatToPlainString(J.t.e7f8r9, { count: E }),
                          }),
                      ],
                  })
                : null,
            null != p &&
                !M &&
                (0, l.jsx)(V.A, {
                    renderPageWrapper: I,
                    onPageChange: p,
                    offset: k,
                    totalCount: v ?? R,
                    pageSize: Y.T_y,
                }),
        ],
    });
});
