n.d(t, { A: () => en }), n(321073);
var r,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    u = n.n(a),
    i = n(741918),
    c = (((r = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), r),
    o = n(602034);
let d = [i.D$.TAB, i.D$.UP, i.D$.DOWN];
function f(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function h(e) {
    return document.querySelector(e);
}
function m(e) {
    document.getElementById(e)?.focus();
}
var g = n(990078),
    E = n(312138),
    p = n(939249),
    x = n(834730),
    C = n(276293),
    T = n(720149),
    A = n(738768),
    N = n(775602),
    _ = n(47167),
    v = n(713654),
    I = n(863439),
    D = n(465364),
    S = n(81437),
    j = n(976860),
    P = n(378570),
    b = n(302031),
    k = n(288254),
    y = n(885386),
    R = n(95701),
    M = n(734057),
    U = n(576705),
    X = n(994500),
    O = n(309010),
    L = n(287809),
    w = n(822382),
    F = n(932793),
    G = n(42754);
function V(e) {
    let { onPageChange: t, offset: n, totalCount: r, pageSize: a, renderPageWrapper: u } = e,
        i = Math.floor(n / a) + 1,
        c = s.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: G.k,
        children: (0, l.jsx)(F.m, {
            currentPage: i,
            totalCount: r,
            pageSize: a,
            onPageChange: c,
            maxVisiblePages: 5,
            renderPageWrapper: u,
        }),
    });
}
var $ = n(621466),
    W = n(187322),
    B = n(442433),
    K = n(636922),
    z = n(486020),
    J = n(375708),
    H = n(208423);
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
                    (0, l.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(x.E, {
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
class Q extends s.PureComponent {
    containerRef = s.createRef();
    hitRef = s.createRef();
    handleContextMenu = (e, t) => {
        let r = M.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, B.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("90238"),
                    n.e("93103"),
                    n.e("52229"),
                    n.e("61268"),
                    n.e("91671"),
                    n.e("95998"),
                    n.e("81189"),
                    n.e("203"),
                    n.e("44801"),
                    n.e("27687"),
                    n.e("12663"),
                    n.e("80419"),
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
            for (; (0, $.vq)(e) && e !== t; ) {
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
                totalResults: s,
                isSpoilerHidden: a,
            } = this.props,
            u = M.A.getChannel(e.channel_id);
        if (null == u) return null;
        let i = `search-result-${e.id}`;
        return (0, l.jsx)(W.vN, {
            ringTarget: this.hitRef,
            ringClassName: H.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: H.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": s,
                "aria-labelledby": i,
                children: [
                    (0, l.jsx)(p.D, {
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
                                children: a
                                    ? (0, l.jsx)(q, { message: e })
                                    : (0, l.jsx)(K.A, {
                                          id: i,
                                          message: e,
                                          channel: u,
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
                        children: (0, l.jsx)(p.D, {
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
var Z = n(652215),
    Y = n(494339);
function ee(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, _.Ay)(t);
    if (null == r) return null;
    let s = null != t ? (0, v.gU)(t) : null;
    if (null == s) return null;
    let a = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s, { className: Y.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(x.E, {
                className: Y.yK,
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
    return null != t && (0, R.Z_)(t.type)
        ? (0, l.jsx)(p.D, {
              className: u()(Y.rg, Y.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a,
          })
        : (0, l.jsx)("div", { className: Y.rg, children: a });
}
function et(e) {
    let {
            channel: t,
            messages: n,
            highlighter: r,
            startIndex: a,
            resultRefs: u,
            totalResults: i,
            scrollTo: c,
            renderEmbeds: o,
            offset: d,
            jumpToMessage: f,
            listNavigator: h,
        } = e,
        m = y.gs.useSetting(),
        E = (0, k.IL)(t),
        x = s.useCallback((e) => {
            if (e === O.A.getChannelId()) return;
            let t = M.A.getChannel(e);
            null == t || ((U.A.can(Z.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, P.iN)(t.id));
        }, []),
        T = null != t ? (0, _.m1)(t, L.default, X.A, !1) : "???",
        A = t?.parent_id != null ? M.A.getChannel(t.parent_id) : null,
        N = null != A ? (0, _.m1)(A, L.default, X.A) : null,
        S = (0, v.gU)(t) ?? C.N,
        j = U.A.can(Z.xBc.MANAGE_MESSAGES, t),
        { content: R } = (0, D.Ay)({ content: T, embeds: [] }, { postProcessor: r }),
        w = s.useRef(null),
        [F, G] = s.useState(!1);
    s.useEffect(() => {
        let e = w.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && G(e.offsetWidth < e.scrollWidth);
    }, []);
    let V = [T, N].filter((e) => null != e).join(", ");
    return (0, l.jsx)(b.Bs.Provider, {
        value: (0, I.A)(m, j),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: Y.JT,
            "aria-label": V,
            children: [
                (0, l.jsx)(p.D, {
                    onClick: () => x(t.id),
                    children: (0, l.jsxs)("div", {
                        className: Y.aT,
                        children: [
                            (0, l.jsx)(S, { className: Y.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: Y.rm,
                                children: (0, l.jsx)(g.m, {
                                    asContainer: !0,
                                    text: T,
                                    shouldShow: F,
                                    children: (0, l.jsx)("span", { ref: w, className: Y.Kw, children: R }),
                                }),
                            }),
                            (0, l.jsx)(ee, { parentChannel: A, onSelectChannel: x }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = a + t;
                    return (0, l.jsx)(
                        Q,
                        {
                            ref: (e) => {
                                u.current[r] = e;
                            },
                            totalResults: i,
                            scrollTo: c,
                            renderEmbeds: o,
                            searchOffset: d,
                            pageResultsLength: n.length,
                            message: e,
                            index: r,
                            onJump: f,
                            listItemProps: h.getItemProps({ index: r }),
                            isSpoilerHidden: E,
                        },
                        `search-result-${r}`,
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
            scrollTo: r,
            messages: a,
            blockCount: u,
            ignoreCount: g,
            onPageChange: x,
            onClick: C,
            paginationTotalCount: _,
            renderPageWrapper: v,
            onBlockedResultsClick: I,
            searchRequestAnalyticsId: D,
            searchResultsQuery: P,
        } = e,
        { offset: b, totalResults: k, isSearching: y, showBlockedResults: R } = t,
        U = s.useCallback(
            (e, t) => {
                C?.(e, t);
                let n = () => {
                    let t = M.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    T.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: D }),
                        (0, j.pX)(Z.BVt.CHANNEL(n, e.channel_id, e.id));
                };
                (0, S.A)(e, n) && n();
            },
            [C, D],
        ),
        O = s.useMemo(() => {
            let e,
                t = 0;
            return a.reduce((n, r) => {
                if (!R && (X.A.isBlockedForMessage(r) || X.A.isIgnoredForMessage(r))) return n;
                let l = M.A.getChannel(r.channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) && n.push({ channel: l, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(r),
                        (e = l?.id)),
                    n
                );
            }, []);
        }, [a, R]),
        L = s.useRef([]),
        F = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r = 0,
                    onSelect: l,
                    setFocus: a,
                    getNewFocusIndex: u,
                    maintainFocusPosition: g = !0,
                    includeSetSizes: E = !0,
                    focusOnMount: p = !0,
                    enabled: x = !0,
                    onDispatch: C,
                } = e,
                T = s.useCallback(
                    (e, t) => {
                        let n = (function (e, t) {
                            switch (t.type) {
                                case i.X2.NAVIGATE_UP:
                                    return { ...e, focusedIndex: Math.max(0, e.focusedIndex - 1) };
                                case i.X2.NAVIGATE_DOWN:
                                    return { ...e, focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) };
                                case i.X2.NAVIGATE_START:
                                    return { ...e, focusedIndex: 0 };
                                case i.X2.NAVIGATE_END:
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
                                case i.X2.SELECT_FOCUSED_ITEM:
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
                [A, N] = s.useReducer(T, { focusedIndex: r, itemCount: n }),
                { itemCount: _, focusedIndex: v } = A,
                [I] = s.useState(() => (0, o.nF)(N, 16));
            return (
                s.useEffect(() => {
                    N({ type: c.UPDATE_ITEM_COUNT, itemCount: n });
                }, [n]),
                (function (e) {
                    let {
                            navId: t,
                            itemCount: n,
                            focusedIndex: r,
                            onSelect: l,
                            setFocus: a = m,
                            getNewFocusIndex: u,
                            dispatch: g,
                            maintainFocusPosition: E,
                            includeSetSizes: p,
                            focusOnMount: x,
                            enabled: C,
                            makeId: T = o.M4,
                            getIndexFromId: A,
                        } = e,
                        N = s.useRef(n),
                        _ = s.useRef(A);
                    (_.current = A), (N.current = n);
                    let v = s.useRef(C);
                    s.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [I, D] = s.useState(!1),
                        [S] = s.useState(
                            () =>
                                new o.Lp((e) => () => {
                                    let t = null != _.current && "string" == typeof e ? _.current(e) : e;
                                    "number" != typeof t || t < 0 || g({ type: c.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    s.useEffect(() => () => S.clean(), [S]);
                    let j = s.useCallback(
                            (e, t) => {
                                v.current && a(e, t);
                            },
                            [a],
                        ),
                        [P, b] = s.useState(!0);
                    s.useEffect(() => {
                        P && !x ? b(!1) : j(T(t, r), r);
                    }, [r]);
                    let k = s.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != u ? u(r) : r;
                                n !== r && g({ type: c.SET_FOCUSED_INDEX, index: n }), e && j(T(t, n), n);
                            },
                            [T, r, u, g, t, j],
                        ),
                        y = s.useCallback(
                            (e) => {
                                if (!v.current) return;
                                if (
                                    d.includes(e.key) &&
                                    !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                    e.currentTarget === e.target
                                ) {
                                    e.preventDefault(), e.stopPropagation(), k();
                                    return;
                                }
                                let n = (function (e) {
                                    switch (e.key) {
                                        case i.D$.ENTER:
                                        case i.D$.SPACE:
                                            return i.X2.SELECT_FOCUSED_ITEM;
                                        case i.D$.UP:
                                            return i.X2.NAVIGATE_UP;
                                        case i.D$.DOWN:
                                            return i.X2.NAVIGATE_DOWN;
                                        case i.D$.HOME:
                                            return i.X2.NAVIGATE_START;
                                        case i.D$.END:
                                            return i.X2.NAVIGATE_END;
                                    }
                                })(e);
                                switch (n) {
                                    case i.X2.NAVIGATE_UP:
                                    case i.X2.NAVIGATE_DOWN:
                                    case i.X2.NAVIGATE_START:
                                    case i.X2.NAVIGATE_END:
                                        e.preventDefault(), e.stopPropagation(), g({ type: n });
                                        return;
                                    case i.X2.SELECT_FOCUSED_ITEM:
                                        let s = h(f(T, t, r));
                                        if (s?.ownerDocument.activeElement !== s || e.repeat) return;
                                        if ((e.preventDefault(), e.stopPropagation(), g({ type: n }), null != l))
                                            return void l(r);
                                        s?.click();
                                }
                            },
                            [T, t, g, r, k, l],
                        ),
                        R = s.useCallback(() => {
                            I || D(!0);
                        }, [I]),
                        M = s.useCallback(() => {
                            I || (E ? j(T(t, r), r) : k(!0));
                        }, [T, t, j, E, I, r, k]),
                        U = s.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == h(f(T, t, r)) ? j(t) : D(!1);
                                    });
                            },
                            [T, t, r, j],
                        ),
                        X = s.useRef(null);
                    s.useLayoutEffect(() => {
                        let e = X.current;
                        if (null != e)
                            return (
                                e.addEventListener("focusin", R),
                                e.addEventListener("focus", M),
                                e.addEventListener("focusout", U),
                                () => {
                                    e.removeEventListener("focusin", R),
                                        e.removeEventListener("focus", M),
                                        e.removeEventListener("focusout", U);
                                }
                            );
                    }, [M, R, U]);
                    let O = s.useCallback(
                            () => ({ role: "list", tabIndex: I && E ? -1 : 0, id: t, onKeyDown: y, ref: X }),
                            [t, I, y, E],
                        ),
                        L = s.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": p ? N.current : void 0,
                                    "aria-posinset": p ? n + 1 : void 0,
                                    id: T(t, n),
                                    tabIndex: E && n === r ? 0 : -1,
                                    onFocus: S.get(null != _.current ? T(t, n) : n),
                                };
                            },
                            [T, t, r, E, S, p],
                        );
                    return s.useMemo(() => ({ dispatch: g, getContainerProps: O, getItemProps: L }), [g, O, L]);
                })({
                    navId: t,
                    itemCount: _,
                    focusedIndex: v,
                    dispatch: I,
                    onSelect: l,
                    setFocus: a,
                    getNewFocusIndex: u,
                    maintainFocusPosition: g,
                    includeSetSizes: E,
                    focusOnMount: p,
                    enabled: x,
                })
            );
        })({
            navId: "search-results",
            itemCount: O.reduce((e, t) => e + 1 + t.messages.length, 0),
            focusedIndex: 0,
            setFocus: s.useCallback(
                (e, t) => {
                    if (!N.A.keyboardModeEnabled) return;
                    let n = L.current,
                        l = null != t ? n[t] : void 0;
                    if (null == l || null == l.hitRef.current) return;
                    let s = l.hitRef.current.getClientRects()[0];
                    r(s.top - 0.5 * s.height, !1, () => {
                        document.getElementById(e)?.focus();
                    });
                },
                [r],
            ),
            onSelect: s.useCallback((e) => {
                let t = L.current[e];
                t?.jumpTo();
            }, []),
        }),
        G = (0, A.wG)((0, w.dX)(P) ?? ""),
        $ = O.map((e) => {
            let { channel: t, messages: s, startIndex: a } = e;
            return (0, l.jsx)(
                et,
                {
                    channel: t,
                    messages: s,
                    highlighter: G,
                    startIndex: a,
                    resultRefs: L,
                    totalResults: k,
                    scrollTo: r,
                    renderEmbeds: n,
                    offset: b,
                    jumpToMessage: U,
                    listNavigator: F,
                },
                `${t.id}-${a}`,
            );
        });
    $.push();
    let W = s.useRef(null);
    s.useLayoutEffect(() => {
        W.current?.focus();
    }, [a]);
    let B = (0, E.R7)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: W, ...F.getContainerProps(), ...B, "aria-busy": y, children: $ }),
            u > 0 || g > 0
                ? (0, l.jsxs)(p.D, {
                      tag: "div",
                      className: Y.P,
                      onClick: () => {
                          I?.(!R);
                      },
                      children: [
                          (0, l.jsx)("div", { className: Y.y }),
                          (0, l.jsx)("div", {
                              className: Y.__invalid_resultsBlockedText,
                              children: R
                                  ? u > 0 && g > 0
                                      ? J.intl.formatToPlainString(J.t.OvJs9w, { count: u + g })
                                      : u > 0
                                        ? J.intl.formatToPlainString(J.t["n/1QFS"], { count: u })
                                        : J.intl.formatToPlainString(J.t.ypezTA, { count: g })
                                  : u > 0 && g > 0
                                    ? J.intl.formatToPlainString(J.t.EJHRcV, { count: u + g })
                                    : u > 0
                                      ? J.intl.formatToPlainString(J.t.HTE8JP, { count: u })
                                      : J.intl.formatToPlainString(J.t.e7f8r9, { count: g }),
                          }),
                      ],
                  })
                : null,
            !y &&
                (0, l.jsx)(V, {
                    renderPageWrapper: v,
                    onPageChange: x,
                    offset: b,
                    totalCount: _ ?? k,
                    pageSize: Z.T_y,
                }),
        ],
    });
});
