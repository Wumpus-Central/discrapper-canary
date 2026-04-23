n.d(t, { A: () => en }), n(321073);
var a,
    r = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
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
    P = n(775602),
    T = n(47167),
    v = n(713654),
    y = n(863439),
    k = n(465364),
    j = n(81437),
    b = n(976860),
    _ = n(378570),
    I = n(302031),
    S = n(288254),
    D = n(253932),
    M = n(95701),
    R = n(734057),
    w = n(576705),
    G = n(994500),
    U = n(309010),
    L = n(287809),
    X = n(822382),
    $ = n(932793),
    B = n(42754);
function F(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: s, renderPageWrapper: i } = e,
        u = Math.floor(n / s) + 1,
        o = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, r.jsx)("div", {
        className: B.k,
        children: (0, r.jsx)($.m, {
            currentPage: u,
            totalCount: a,
            pageSize: s,
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
    return (0, r.jsxs)("div", {
        className: H.Iy,
        children: [
            (0, r.jsx)("img", { className: H.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: H.ur,
                children: [
                    (0, r.jsx)(E.E, { variant: "text-sm/semibold", color: "text-default", children: a }),
                    (0, r.jsx)(E.E, {
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
class q extends l.PureComponent {
    containerRef = l.createRef();
    hitRef = l.createRef();
    handleContextMenu = (e, t) => {
        let a = R.A.getChannel(t.channel_id);
        null != a &&
            (e.stopPropagation(),
            (0, K.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("93103"), n.e("64879"), n.e("74473")]).then(
                    n.bind(n, 847342),
                );
                return (n) => (0, r.jsx)(e, { ...n, message: t, channel: a });
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
                totalResults: l,
                isSpoilerHidden: s,
            } = this.props,
            i = R.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, r.jsx)(V.vN, {
            ringTarget: this.hitRef,
            ringClassName: H.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)("li", {
                className: H.kL,
                ...t,
                "aria-posinset": 1 + n + a,
                "aria-setsize": l,
                "aria-labelledby": u,
                children: [
                    (0, r.jsx)(x.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: H.mk,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: H.iU,
                                children: s
                                    ? (0, r.jsx)(Q, { message: e })
                                    : (0, r.jsx)(W.A, {
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
                    (0, r.jsx)("div", {
                        className: H.NC,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(x.D, {
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
var Z = n(652215),
    Y = n(494339);
function ee(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        a = (0, T.Ay)(t);
    if (null == a) return null;
    let l = null != t ? (0, v.gU)(t) : null;
    if (null == l) return null;
    let s = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { className: Y.gQ, size: "xxs", color: "currentColor" }),
            (0, r.jsx)(E.E, { className: Y.yK, variant: "text-xs/medium", color: "text-default", children: a }),
        ],
    });
    return null != t && (0, M.Z_)(t.type)
        ? (0, r.jsx)(x.D, {
              className: i()(Y.rg, Y.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: s,
          })
        : (0, r.jsx)("div", { className: Y.rg, children: s });
}
function et(e) {
    let {
            channel: t,
            messages: n,
            highlighter: a,
            startIndex: s,
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
        E = l.useCallback((e) => {
            if (e === U.A.getChannelId()) return;
            let t = R.A.getChannel(e);
            null == t || ((w.A.can(Z.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, _.iN)(t.id));
        }, []),
        N = null != t ? (0, T.m1)(t, L.default, G.A, !1) : "???",
        A = t?.parent_id != null ? R.A.getChannel(t.parent_id) : null,
        P = null != A ? (0, T.m1)(A, L.default, G.A) : null,
        j = (0, v.gU)(t) ?? C.N,
        b = w.A.can(Z.xBc.MANAGE_MESSAGES, t),
        { content: M } = (0, k.Ay)({ content: N, embeds: [] }, { postProcessor: a }),
        X = l.useRef(null),
        [$, B] = l.useState(!1);
    l.useEffect(() => {
        let e = X.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && B(e.offsetWidth < e.scrollWidth);
    }, []);
    let F = [N, P].filter((e) => null != e).join(", ");
    return (0, r.jsx)(I.Bs.Provider, {
        value: (0, y.A)(f, b),
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: Y.JT,
            "aria-label": F,
            children: [
                (0, r.jsx)(x.D, {
                    onClick: () => E(t.id),
                    children: (0, r.jsxs)("div", {
                        className: Y.aT,
                        children: [
                            (0, r.jsx)(j, { className: Y.er, size: "xs", color: "currentColor" }),
                            (0, r.jsx)(m.m, {
                                asContainer: !0,
                                text: N,
                                shouldShow: $,
                                children: (0, r.jsx)("span", { ref: X, className: Y.Kw, children: M }),
                            }),
                            (0, r.jsx)(ee, { parentChannel: A, onSelectChannel: E }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let a = s + t;
                    return (0, r.jsx)(
                        q,
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
let en = l.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: a,
            messages: s,
            blockCount: i,
            ignoreCount: m,
            onPageChange: E,
            onClick: C,
            paginationTotalCount: T,
            renderPageWrapper: v,
            onBlockedResultsClick: y,
            searchRequestAnalyticsId: k,
            searchResultsQuery: _,
        } = e,
        { offset: I, totalResults: S, isSearching: D, showBlockedResults: M } = t,
        w = l.useCallback(
            (e, t) => {
                C?.(e, t);
                let n = () => {
                    let t = R.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    N.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: k }),
                        (0, b.pX)(Z.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, j.A)(e, n) && n();
            },
            [C, k],
        ),
        U = l.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, a) => {
                if (!M && (G.A.isBlockedForMessage(a) || G.A.isIgnoredForMessage(a))) return n;
                let r = R.A.getChannel(a.channel_id);
                return (
                    null == r ||
                        ((null == e || e !== r.id) && n.push({ channel: r, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(a),
                        (e = r?.id)),
                    n
                );
            }, []);
        }, [s, M]),
        L = l.useRef([]),
        $ = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: a = 0,
                    onSelect: r,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: m = !0,
                    includeSetSizes: p = !0,
                    focusOnMount: x = !0,
                    enabled: E = !0,
                    onDispatch: C,
                } = e,
                N = l.useCallback(
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
                [A, P] = l.useReducer(N, { focusedIndex: a, itemCount: n }),
                { itemCount: T, focusedIndex: v } = A,
                [y] = l.useState(() => (0, c.nF)(P, 16));
            return (
                l.useEffect(() => {
                    P({ type: o.UPDATE_ITEM_COUNT, itemCount: n });
                }, [n]),
                (function (e) {
                    let {
                            navId: t,
                            itemCount: n,
                            focusedIndex: a,
                            onSelect: r,
                            setFocus: s = f,
                            getNewFocusIndex: i,
                            dispatch: m,
                            maintainFocusPosition: p,
                            includeSetSizes: x,
                            focusOnMount: E,
                            enabled: C,
                            makeId: N = c.M4,
                            getIndexFromId: A,
                        } = e,
                        P = l.useRef(n),
                        T = l.useRef(A);
                    (T.current = A), (P.current = n);
                    let v = l.useRef(C);
                    l.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [y, k] = l.useState(!1),
                        [j] = l.useState(
                            () =>
                                new c.Lp((e) => () => {
                                    let t = null != T.current && "string" == typeof e ? T.current(e) : e;
                                    "number" != typeof t || t < 0 || m({ type: o.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    l.useEffect(() => () => j.clean(), [j]);
                    let b = l.useCallback(
                            (e, t) => {
                                v.current && s(e, t);
                            },
                            [s],
                        ),
                        [_, I] = l.useState(!0);
                    l.useEffect(() => {
                        _ && !E ? I(!1) : b(N(t, a), a);
                    }, [a]);
                    let S = l.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != i ? i(a) : a;
                                n !== a && m({ type: o.SET_FOCUSED_INDEX, index: n }), e && b(N(t, n), n);
                            },
                            [N, a, i, m, t, b],
                        ),
                        D = l.useCallback(
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
                                        let l = g(h(N, t, a));
                                        if (l?.ownerDocument.activeElement !== l || e.repeat) return;
                                        if ((e.preventDefault(), e.stopPropagation(), m({ type: n }), null != r))
                                            return void r(a);
                                        l?.click();
                                }
                            },
                            [N, t, m, a, S, r],
                        ),
                        M = l.useCallback(() => {
                            y || k(!0);
                        }, [y]),
                        R = l.useCallback(() => {
                            y || (p ? b(N(t, a), a) : S(!0));
                        }, [N, t, b, p, y, a, S]),
                        w = l.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == g(h(N, t, a)) ? b(t) : k(!1);
                                    });
                            },
                            [N, t, a, b],
                        ),
                        G = l.useRef(null);
                    l.useLayoutEffect(() => {
                        let e = G.current;
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
                    let U = l.useCallback(
                            () => ({ role: "list", tabIndex: y && p ? -1 : 0, id: t, onKeyDown: D, ref: G }),
                            [t, y, D, p],
                        ),
                        L = l.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": x ? P.current : void 0,
                                    "aria-posinset": x ? n + 1 : void 0,
                                    id: N(t, n),
                                    tabIndex: p && n === a ? 0 : -1,
                                    onFocus: j.get(null != T.current ? N(t, n) : n),
                                };
                            },
                            [N, t, a, p, j, x],
                        );
                    return l.useMemo(() => ({ dispatch: m, getContainerProps: U, getItemProps: L }), [m, U, L]);
                })({
                    navId: t,
                    itemCount: T,
                    focusedIndex: v,
                    dispatch: y,
                    onSelect: r,
                    setFocus: s,
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
            setFocus: l.useCallback(
                (e, t) => {
                    if (!P.A.keyboardModeEnabled) return;
                    let n = L.current,
                        r = null != t ? n[t] : void 0;
                    if (null == r || null == r.hitRef.current) return;
                    let l = r.hitRef.current.getClientRects()[0];
                    a(l.top - 0.5 * l.height, !1, () => {
                        document.getElementById(e)?.focus();
                    });
                },
                [a],
            ),
            onSelect: l.useCallback((e) => {
                let t = L.current[e];
                t?.jumpTo();
            }, []),
        }),
        B = (0, A.wG)((0, X.dX)(_) ?? ""),
        O = U.map((e) => {
            let { channel: t, messages: l, startIndex: s } = e;
            return (0, r.jsx)(
                et,
                {
                    channel: t,
                    messages: l,
                    highlighter: B,
                    startIndex: s,
                    resultRefs: L,
                    totalResults: S,
                    scrollTo: a,
                    renderEmbeds: n,
                    offset: I,
                    jumpToMessage: w,
                    listNavigator: $,
                },
                `${t.id}-${s}`,
            );
        });
    O.push();
    let V = l.useRef(null);
    l.useLayoutEffect(() => {
        V.current?.focus();
    }, [s]);
    let K = (0, p.R7)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: V, ...$.getContainerProps(), ...K, "aria-busy": D, children: O }),
            i > 0 || m > 0
                ? (0, r.jsxs)(x.D, {
                      tag: "div",
                      className: Y.P,
                      onClick: () => {
                          y?.(!M);
                      },
                      children: [
                          (0, r.jsx)("div", { className: Y.y }),
                          (0, r.jsx)("div", {
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
                (0, r.jsx)(F, {
                    renderPageWrapper: v,
                    onPageChange: E,
                    offset: I,
                    totalCount: T ?? S,
                    pageSize: Z.T_y,
                }),
        ],
    });
});
