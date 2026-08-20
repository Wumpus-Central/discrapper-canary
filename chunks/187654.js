n.d(t, { A: () => ee }), n(321073);
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
    E = n(939249),
    x = n(834730),
    p = n(276293),
    C = n(866665),
    T = n(148494),
    A = n(738768),
    N = n(775602),
    _ = n(47167),
    v = n(713654),
    I = n(863439),
    S = n(521981),
    D = n(81437),
    j = n(976860),
    P = n(378570),
    y = n(302031),
    b = n(288254),
    k = n(885386),
    R = n(95701),
    M = n(734057),
    U = n(576705),
    X = n(994500),
    O = n(309010),
    L = n(287809),
    w = n(822382),
    F = n(876689),
    G = n(621466),
    V = n(259678),
    $ = n(442433),
    W = n(636922),
    B = n(486020),
    K = n(375708),
    z = n(823954);
function J(e) {
    let { message: t } = e,
        n = B.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: z.Iy,
        children: [
            (0, l.jsx)("img", { className: z.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: z.ur,
                children: [
                    (0, l.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: z.SR,
                        children: K.intl.string(K.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class H extends a.PureComponent {
    containerRef = a.createRef();
    hitRef = a.createRef();
    handleContextMenu = (e, t) => {
        let r = M.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, $.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("295998"),
                    n.e("81189"),
                    n.e("200203"),
                    n.e("944801"),
                    n.e("720045"),
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
            for (; (0, G.vq)(e) && e !== t; ) {
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
            i = M.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, l.jsx)(V.vN, {
            ringTarget: this.hitRef,
            ringClassName: z.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: z.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": a,
                "aria-labelledby": u,
                children: [
                    (0, l.jsx)(E.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: z.mk,
                        focusProps: { enabled: !1 },
                        children: (0, l.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: z.iU,
                                children: s
                                    ? (0, l.jsx)(J, { message: e })
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
                        className: z.NC,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(E.D, {
                            className: z.x6,
                            onClick: this.jumpTo,
                            children: K.intl.string(K.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var q = n(652215),
    Q = n(979882);
function Y(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, _.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, v.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: Q.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(x.E, {
                className: Q.yK,
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
    return null != t && (0, R.Z_)(t.type)
        ? (0, l.jsx)(E.D, {
              className: i()(Q.rg, Q.fj),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: Q.rg, children: s });
}
function Z(e) {
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
        m = k.gs.useSetting(),
        g = (0, b.IL)(t),
        T = a.useCallback((e) => {
            if (e === O.Ay.getChannelId()) return;
            let t = M.A.getChannel(e);
            null == t || ((U.A.can(q.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, P.iN)(t.id));
        }, []),
        A = null != t ? (0, _.m1)(t, L.default, X.A, !1) : "???",
        N = t?.parent_id != null ? M.A.getChannel(t.parent_id) : null,
        D = null != N ? (0, _.m1)(N, L.default, X.A) : null,
        j = (0, v.gU)(t) ?? p.N,
        R = U.A.can(q.xBc.MANAGE_MESSAGES, t),
        { content: w } = (0, S.Ay)({ content: A, embeds: [] }, { postProcessor: r }),
        F = a.useRef(null),
        [G, V] = a.useState(!1);
    a.useEffect(() => {
        let e = F.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && V(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = [A, D].filter((e) => null != e).join(", ");
    return (0, l.jsx)(y.Bs.Provider, {
        value: (0, I.A)(m, R),
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: Q.JT,
            "aria-label": $,
            children: [
                (0, l.jsx)(E.D, {
                    onClick: () => T(t.id),
                    children: (0, l.jsxs)("div", {
                        className: Q.aT,
                        children: [
                            (0, l.jsx)(j, { className: Q.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: Q.rm,
                                children: (0, l.jsx)(C.m, {
                                    asContainer: !0,
                                    text: A,
                                    shouldShow: G,
                                    children: (0, l.jsx)(x.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        tag: "span",
                                        ref: F,
                                        className: Q.Kw,
                                        children: w,
                                    }),
                                }),
                            }),
                            (0, l.jsx)(Y, { parentChannel: N, onSelectChannel: T }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = s + t;
                    return (0, l.jsx)(
                        H,
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
let ee = a.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: r,
            messages: s,
            blockCount: i,
            ignoreCount: x,
            onPageChange: p,
            onClick: C,
            paginationTotalCount: _,
            renderPageWrapper: v,
            onBlockedResultsClick: I,
            searchRequestAnalyticsId: S,
            searchResultsQuery: P,
        } = e,
        { offset: y, totalResults: b, isSearching: k, showBlockedResults: R } = t,
        U = a.useCallback(
            (e, t) => {
                function n() {
                    let t = M.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    T.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S }),
                        (0, j.pX)(q.BVt.CHANNEL(n, e.channel_id, e.id));
                }
                C?.(e, t), (0, D.A)(e, n) && n();
            },
            [C, S],
        ),
        O = a.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, r) => {
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
        }, [s, R]),
        L = a.useRef([]),
        G = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r = 0,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g = !0,
                    includeSetSizes: E = !0,
                    focusOnMount: x = !0,
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
                        return null != C && C(e, n, t), n;
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
                            maintainFocusPosition: E,
                            includeSetSizes: x,
                            focusOnMount: p,
                            enabled: C,
                            makeId: T = o.M4,
                            getIndexFromId: A,
                        } = e,
                        N = a.useRef(n),
                        _ = a.useRef(A);
                    (_.current = A), (N.current = n);
                    let v = a.useRef(C);
                    a.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [I, S] = a.useState(!1),
                        [D] = a.useState(
                            () =>
                                new o.Lp((e) => () => {
                                    let t = null != _.current && "string" == typeof e ? _.current(e) : e;
                                    "number" != typeof t || t < 0 || g({ type: c.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    a.useEffect(() => () => D.clean(), [D]);
                    let j = a.useCallback(
                            (e, t) => {
                                v.current && s(e, t);
                            },
                            [s],
                        ),
                        [P, y] = a.useState(!0);
                    a.useEffect(() => {
                        P && !p ? y(!1) : j(T(t, r), r);
                    }, [r]);
                    let b = a.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != i ? i(r) : r;
                                n !== r && g({ type: c.SET_FOCUSED_INDEX, index: n }), e && j(T(t, n), n);
                            },
                            [T, r, i, g, t, j],
                        ),
                        k = a.useCallback(
                            (e) => {
                                if (!v.current) return;
                                if (
                                    d.includes(e.key) &&
                                    !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                                    e.currentTarget === e.target
                                ) {
                                    e.preventDefault(), e.stopPropagation(), b();
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
                                        e.preventDefault(), e.stopPropagation(), g({ type: n });
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
                            I || S(!0);
                        }, [I]),
                        M = a.useCallback(() => {
                            I || (E ? j(T(t, r), r) : b(!0));
                        }, [T, t, j, E, I, r, b]),
                        U = a.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == h(f(T, t, r)) ? j(t) : S(!1);
                                    });
                            },
                            [T, t, r, j],
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
                                    e.removeEventListener("focusin", R),
                                        e.removeEventListener("focus", M),
                                        e.removeEventListener("focusout", U);
                                }
                            );
                    }, [M, R, U]);
                    let O = a.useCallback(
                            () => ({ role: "list", tabIndex: I && E ? -1 : 0, id: t, onKeyDown: k, ref: X }),
                            [t, I, k, E],
                        ),
                        L = a.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": x ? N.current : void 0,
                                    "aria-posinset": x ? n + 1 : void 0,
                                    id: T(t, n),
                                    tabIndex: E && n === r ? 0 : -1,
                                    onFocus: D.get(null != _.current ? T(t, n) : n),
                                };
                            },
                            [T, t, r, E, D, x],
                        );
                    return a.useMemo(() => ({ dispatch: g, getContainerProps: O, getItemProps: L }), [g, O, L]);
                })({
                    navId: t,
                    itemCount: _,
                    focusedIndex: v,
                    dispatch: I,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g,
                    includeSetSizes: E,
                    focusOnMount: x,
                    enabled: p,
                })
            );
        })({
            navId: "search-results",
            itemCount: O.reduce((e, t) => e + 1 + t.messages.length, 0),
            focusedIndex: 0,
            setFocus: a.useCallback(
                (e, t) => {
                    if (!N.Ay.keyboardModeEnabled) return;
                    let n = L.current,
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
                let t = L.current[e];
                t?.jumpTo();
            }, []),
        }),
        V = (0, A.wG)((0, w.dX)(P) ?? ""),
        $ = O.map((e) => {
            let { channel: t, messages: a, startIndex: s } = e;
            return (0, l.jsx)(
                Z,
                {
                    channel: t,
                    messages: a,
                    highlighter: V,
                    startIndex: s,
                    resultRefs: L,
                    totalResults: b,
                    scrollTo: r,
                    renderEmbeds: n,
                    offset: y,
                    jumpToMessage: U,
                    listNavigator: G,
                },
                `${t.id}-${s}`,
            );
        });
    $.push();
    let W = a.useRef(null);
    a.useLayoutEffect(() => {
        W.current?.focus();
    }, [s]);
    let B = (0, g.R7)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: W, ...G.getContainerProps(), ...B, "aria-busy": k, children: $ }),
            i > 0 || x > 0
                ? (0, l.jsxs)(E.D, {
                      tag: "div",
                      className: Q.P,
                      onClick: function () {
                          I?.(!R);
                      },
                      children: [
                          (0, l.jsx)("div", { className: Q.y }),
                          (0, l.jsx)("div", {
                              className: Q.__invalid_resultsBlockedText,
                              children: R
                                  ? i > 0 && x > 0
                                      ? K.intl.formatToPlainString(K.t.OvJs9w, { count: i + x })
                                      : i > 0
                                        ? K.intl.formatToPlainString(K.t["n/1QFS"], { count: i })
                                        : K.intl.formatToPlainString(K.t.ypezTA, { count: x })
                                  : i > 0 && x > 0
                                    ? K.intl.formatToPlainString(K.t.EJHRcV, { count: i + x })
                                    : i > 0
                                      ? K.intl.formatToPlainString(K.t.HTE8JP, { count: i })
                                      : K.intl.formatToPlainString(K.t.e7f8r9, { count: x }),
                          }),
                      ],
                  })
                : null,
            null != p &&
                !k &&
                (0, l.jsx)(F.A, {
                    renderPageWrapper: v,
                    onPageChange: p,
                    offset: y,
                    totalCount: _ ?? b,
                    pageSize: q.T_y,
                }),
        ],
    });
});
