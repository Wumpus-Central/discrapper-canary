(n.d(t, { A: () => es }), n(321073));
var r,
    l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    u = n(741918),
    o = (((r = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), r),
    c = n(602034);
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
    p = n(939249),
    E = n(834730),
    x = n(276293),
    C = n(866665),
    T = n(148494),
    A = n(738768),
    N = n(775602),
    _ = n(964167),
    v = n(47167),
    I = n(713654),
    S = n(146849),
    j = n(954403),
    P = n(532255),
    y = n(863439),
    D = n(521981),
    b = n(81437),
    k = n(78377),
    R = n(976860),
    M = n(378570),
    U = n(302031),
    L = n(288254),
    O = n(253932),
    X = n(95701),
    G = n(734057),
    w = n(576705),
    F = n(994500),
    V = n(309010),
    $ = n(287809),
    W = n(822382),
    B = n(876689),
    K = n(621466),
    z = n(559106),
    J = n(442433),
    H = n(636922),
    q = n(486020),
    Q = n(105292),
    Y = n(823954);
function Z(e) {
    let { message: t } = e,
        n = q.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: Y.Iy,
        children: [
            (0, l.jsx)("img", { className: Y.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: Y.ur,
                children: [
                    (0, l.jsx)(E.E, { variant: "body-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(E.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: Y.SR,
                        children: Q.intl.string(Q.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class ee extends a.PureComponent {
    containerRef = a.createRef();
    hitRef = a.createRef();
    handleContextMenu = (e, t) => {
        let r = G.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, J.L3)(e, async () => {
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
            for (; (0, K.vq)(e) && e !== t;) {
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
            i = G.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, l.jsx)(z.vN, {
            ringTarget: this.hitRef,
            ringClassName: Y.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: Y.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": a,
                "aria-labelledby": u,
                children: [
                    (0, l.jsx)(p.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: Y.mk,
                        focusProps: { enabled: !1 },
                        children: (0, l.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: Y.iU,
                                children: s
                                    ? (0, l.jsx)(Z, { message: e })
                                    : (0, l.jsx)(H.A, {
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
                        className: Y.NC,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(p.D, {
                            className: Y.x6,
                            onClick: this.jumpTo,
                            children: Q.intl.string(Q.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var et = n(652215),
    en = n(979882);
function er(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, v.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, I.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: en.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(E.E, {
                className: en.yK,
                variant: "body-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
    return null != t && (0, X.Z_)(t.type)
        ? (0, l.jsx)(p.D, {
              className: i()(en.rg, en.fj),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: en.rg, children: s });
}
let el = { formatInline: !0, noStyleAndInteraction: !0 };
function ea(e) {
    let {
            channel: t,
            messages: n,
            highlighter: r,
            startIndex: s,
            resultRefs: i,
            totalResults: u,
            scrollTo: o,
            renderEmbeds: c,
            offset: d,
            jumpToMessage: f,
            listNavigator: h,
        } = e,
        m = O.gs.useSetting(),
        g = (0, L.IL)(t),
        T = a.useCallback((e) => {
            if (e === V.Ay.getChannelId()) return;
            let t = G.A.getChannel(e);
            null == t || ((w.A.can(et.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, M.iN)(t.id));
        }, []),
        A = null != t ? (0, v.m1)(t, $.default, F.A, !1) : "???",
        N = t?.parent_id != null ? G.A.getChannel(t.parent_id) : null,
        _ = null != N ? (0, v.m1)(N, $.default, F.A) : null,
        j = (0, I.gU)(t) ?? x.N,
        b = w.A.can(et.xBc.MANAGE_MESSAGES, t),
        R = (0, S.I2)({ location: "SearchResultListChannelResults" }).enabled,
        X = (0, P.N)(A, { enabled: R, formatInline: !0 }),
        W = R
            ? (0, l.jsx)(k.O.Provider, {
                  value: el,
                  children: (0, l.jsx)(a.Suspense, { children: (0, l.jsx)(P.A, { content: A, parsed: X }) }),
              })
            : (0, D.Ay)({ content: A, embeds: [] }, { postProcessor: r }).content,
        B = a.useRef(null),
        [K, z] = a.useState(!1);
    a.useEffect(() => {
        let e = B.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, [A, X]);
    let J = [A, _].filter((e) => null != e).join(", "),
        H = (0, y.A)(m, b);
    return (0, l.jsx)(U.Bs.Provider, {
        value: H,
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: en.JT,
            "aria-label": J,
            children: [
                (0, l.jsx)(p.D, {
                    onClick: () => T(t.id),
                    children: (0, l.jsxs)("div", {
                        className: en.aT,
                        children: [
                            (0, l.jsx)(j, { className: en.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: en.rm,
                                children: (0, l.jsx)(C.m, {
                                    asContainer: !0,
                                    text: A,
                                    shouldShow: K,
                                    children: (0, l.jsx)(E.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        tag: "span",
                                        ref: B,
                                        className: en.Kw,
                                        children: W,
                                    }),
                                }),
                            }),
                            (0, l.jsx)(er, { parentChannel: N, onSelectChannel: T }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = s + t;
                    return (0, l.jsx)(
                        ee,
                        {
                            ref: (e) => {
                                i.current[r] = e;
                            },
                            totalResults: u,
                            scrollTo: o,
                            renderEmbeds: c,
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
let es = a.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: r,
            messages: s,
            blockCount: i,
            ignoreCount: E,
            onPageChange: x,
            onClick: C,
            paginationTotalCount: v,
            renderPageWrapper: I,
            onBlockedResultsClick: S,
            searchRequestAnalyticsId: P,
            searchResultsQuery: y,
        } = e,
        { offset: D, totalResults: k, isSearching: M, showBlockedResults: U } = t,
        L = a.useCallback(
            (e, t) => {
                function n() {
                    let t = G.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    T.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: P });
                    let r = et.BVt.CHANNEL(n, e.channel_id, e.id);
                    (0, R.pX)(t?.type === et.rbe.GUILD_APP ? (0, _.gu)(r) : r);
                }
                (C?.(e, t), (0, b.A)(e, n) && n());
            },
            [C, P],
        ),
        O = a.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, r) => {
                if (!U && (F.A.isBlockedForMessage(r) || F.A.isIgnoredForMessage(r))) return n;
                let l = G.A.getChannel(r.channel_id);
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
        X = a.useRef([]),
        w = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r = 0,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g = !0,
                    includeSetSizes: p = !0,
                    focusOnMount: E = !0,
                    enabled: x = !0,
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
                [I] = a.useState(() => (0, c.nF)(N, 16));
            return (
                a.useEffect(() => {
                    N({ type: o.UPDATE_ITEM_COUNT, itemCount: n });
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
                            maintainFocusPosition: p,
                            includeSetSizes: E,
                            focusOnMount: x,
                            enabled: C,
                            makeId: T = c.M4,
                            getIndexFromId: A,
                        } = e,
                        N = a.useRef(n),
                        _ = a.useRef(A);
                    ((_.current = A), (N.current = n));
                    let v = a.useRef(C);
                    a.useEffect(() => {
                        v.current = C;
                    }, [C]);
                    let [I, S] = a.useState(!1),
                        [j] = a.useState(
                            () =>
                                new c.Lp((e) => () => {
                                    let t = null != _.current && "string" == typeof e ? _.current(e) : e;
                                    "number" != typeof t || t < 0 || g({ type: o.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    a.useEffect(() => () => j.clean(), [j]);
                    let P = a.useCallback(
                            (e, t) => {
                                v.current && s(e, t);
                            },
                            [s],
                        ),
                        [y, D] = a.useState(!0);
                    a.useEffect(() => {
                        y && !x ? D(!1) : P(T(t, r), r);
                    }, [r]);
                    let b = a.useCallback(
                            function () {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    n = null != i ? i(r) : r;
                                (n !== r && g({ type: o.SET_FOCUSED_INDEX, index: n }), e && P(T(t, n), n));
                            },
                            [T, r, i, g, t, P],
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
                            I || S(!0);
                        }, [I]),
                        M = a.useCallback(() => {
                            I || (p ? P(T(t, r), r) : b(!0));
                        }, [T, t, P, p, I, r, b]),
                        U = a.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == h(f(T, t, r)) ? P(t) : S(!1);
                                    });
                            },
                            [T, t, r, P],
                        ),
                        L = a.useRef(null);
                    a.useLayoutEffect(() => {
                        let e = L.current;
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
                    let O = a.useCallback(
                            () => ({ role: "list", tabIndex: I && p ? -1 : 0, id: t, onKeyDown: k, ref: L }),
                            [t, I, k, p],
                        ),
                        X = a.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": E ? N.current : void 0,
                                    "aria-posinset": E ? n + 1 : void 0,
                                    id: T(t, n),
                                    tabIndex: p && n === r ? 0 : -1,
                                    onFocus: j.get(null != _.current ? T(t, n) : n),
                                };
                            },
                            [T, t, r, p, j, E],
                        );
                    return a.useMemo(() => ({ dispatch: g, getContainerProps: O, getItemProps: X }), [g, O, X]);
                })({
                    navId: t,
                    itemCount: _,
                    focusedIndex: v,
                    dispatch: I,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g,
                    includeSetSizes: p,
                    focusOnMount: E,
                    enabled: x,
                })
            );
        })({
            navId: "search-results",
            itemCount: O.reduce((e, t) => e + 1 + t.messages.length, 0),
            focusedIndex: 0,
            setFocus: a.useCallback(
                (e, t) => {
                    if (!N.Ay.keyboardModeEnabled) return;
                    let n = X.current,
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
                let t = X.current[e];
                t?.jumpTo();
            }, []),
        }),
        V = (0, W.dX)(y) ?? "",
        $ = (0, A.wG)(V),
        K = a.useMemo(() => (0, A.th)(V), [V]),
        z = O.map((e) => {
            let { channel: t, messages: a, startIndex: s } = e;
            return (0, l.jsx)(
                ea,
                {
                    channel: t,
                    messages: a,
                    highlighter: $,
                    startIndex: s,
                    resultRefs: X,
                    totalResults: k,
                    scrollTo: r,
                    renderEmbeds: n,
                    offset: D,
                    jumpToMessage: L,
                    listNavigator: w,
                },
                `${t.id}-${s}`,
            );
        });
    z.push();
    let J = a.useRef(null);
    a.useLayoutEffect(() => {
        J.current?.focus();
    }, [s]);
    let H = (0, g.R7)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: J,
                ...w.getContainerProps(),
                ...H,
                "aria-busy": M,
                children: (0, l.jsx)(j.G.Provider, { value: K, children: z }),
            }),
            i > 0 || E > 0
                ? (0, l.jsxs)(p.D, {
                      tag: "div",
                      className: en.P,
                      onClick: function () {
                          S?.(!U);
                      },
                      children: [
                          (0, l.jsx)("div", { className: en.y }),
                          (0, l.jsx)("div", {
                              className: en.__invalid_resultsBlockedText,
                              children: U
                                  ? i > 0 && E > 0
                                      ? Q.intl.formatToPlainString(Q.t.OvJs9w, { count: i + E })
                                      : i > 0
                                        ? Q.intl.formatToPlainString(Q.t["n/1QFS"], { count: i })
                                        : Q.intl.formatToPlainString(Q.t.ypezTA, { count: E })
                                  : i > 0 && E > 0
                                    ? Q.intl.formatToPlainString(Q.t.EJHRcV, { count: i + E })
                                    : i > 0
                                      ? Q.intl.formatToPlainString(Q.t.HTE8JP, { count: i })
                                      : Q.intl.formatToPlainString(Q.t.e7f8r9, { count: E }),
                          }),
                      ],
                  })
                : null,
            null != x &&
                !M &&
                (0, l.jsx)(B.A, {
                    renderPageWrapper: I,
                    onPageChange: x,
                    offset: D,
                    totalCount: v ?? k,
                    pageSize: et.T_y,
                }),
        ],
    });
});
