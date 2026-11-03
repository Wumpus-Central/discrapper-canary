(n.d(t, { A: () => ei }), n(321073));
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
    x = n(939249),
    p = n(834730),
    E = n(276293),
    C = n(866665),
    T = n(148494),
    A = n(738768),
    N = n(775602),
    _ = n(964167),
    v = n(47167),
    I = n(713654),
    j = n(997141),
    S = n(146849),
    P = n(954403),
    y = n(39672),
    D = n(863439),
    b = n(521981),
    k = n(81437),
    R = n(78377),
    M = n(976860),
    U = n(378570),
    L = n(302031),
    O = n(288254),
    X = n(253932),
    G = n(95701),
    w = n(734057),
    F = n(576705),
    V = n(994500),
    $ = n(309010),
    W = n(287809),
    B = n(822382),
    K = n(876689),
    z = n(621466),
    J = n(559106),
    H = n(442433),
    q = n(636922),
    Q = n(486020),
    Z = n(105292),
    Y = n(823954);
function ee(e) {
    let { message: t } = e,
        n = Q.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: Y.Iy,
        children: [
            (0, l.jsx)("img", { className: Y.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: Y.ur,
                children: [
                    (0, l.jsx)(p.E, { variant: "body-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: Y.SR,
                        children: Z.intl.string(Z.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class et extends a.PureComponent {
    containerRef = a.createRef();
    hitRef = a.createRef();
    handleContextMenu = (e, t) => {
        let r = w.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, H.L3)(e, async () => {
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
            for (; (0, z.vq)(e) && e !== t;) {
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
            i = w.A.getChannel(e.channel_id);
        if (null == i) return null;
        let u = `search-result-${e.id}`;
        return (0, l.jsx)(J.vN, {
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
                    (0, l.jsx)(x.D, {
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
                                    ? (0, l.jsx)(ee, { message: e })
                                    : (0, l.jsx)(q.A, {
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
                        children: (0, l.jsx)(x.D, {
                            className: Y.x6,
                            onClick: this.jumpTo,
                            children: Z.intl.string(Z.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var en = n(652215),
    er = n(979882);
function el(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        r = (0, v.Ay)(t);
    if (null == r) return null;
    let a = null != t ? (0, I.gU)(t) : null;
    if (null == a) return null;
    let s = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a, { className: er.gQ, size: "xxs", color: "currentColor" }),
            (0, l.jsx)(p.E, {
                className: er.yK,
                variant: "body-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
    return null != t && (0, G.Z_)(t.type)
        ? (0, l.jsx)(x.D, {
              className: i()(er.rg, er.fj),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: s,
          })
        : (0, l.jsx)("div", { className: er.rg, children: s });
}
let ea = { formatInline: !0, noStyleAndInteraction: !0 };
function es(e) {
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
        m = X.gs.useSetting(),
        g = (0, O.IL)(t),
        T = a.useCallback((e) => {
            if (e === $.Ay.getChannelId()) return;
            let t = w.A.getChannel(e);
            null == t || ((F.A.can(en.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, U.iN)(t.id));
        }, []),
        A = null != t ? (0, v.m1)(t, W.default, V.A, !1) : "???",
        N = t?.parent_id != null ? w.A.getChannel(t.parent_id) : null,
        _ = null != N ? (0, v.m1)(N, W.default, V.A) : null,
        P = (0, I.gU)(t) ?? E.N,
        k = F.A.can(en.xBc.MANAGE_MESSAGES, t),
        M = (0, S.I2)({ location: "SearchResultListChannelResults" }).enabled,
        G = (0, j.j)({ excluded: j.Z }),
        B = (0, y.N)(A, { enabled: M, syntax: G }),
        K = M
            ? (0, l.jsx)(R.O.Provider, {
                  value: ea,
                  children: (0, l.jsx)(a.Suspense, { children: (0, l.jsx)(y.A, { content: A, parsed: B }) }),
              })
            : (0, b.Ay)({ content: A, embeds: [] }, { postProcessor: r }).content,
        z = a.useRef(null),
        [J, H] = a.useState(!1);
    a.useEffect(() => {
        let e = z.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && H(e.offsetWidth < e.scrollWidth);
    }, [A, B]);
    let q = [A, _].filter((e) => null != e).join(", "),
        Q = (0, D.A)(m, k);
    return (0, l.jsx)(L.Bs.Provider, {
        value: Q,
        children: (0, l.jsxs)("ul", {
            role: "group",
            className: er.JT,
            "aria-label": q,
            children: [
                (0, l.jsx)(x.D, {
                    onClick: () => T(t.id),
                    children: (0, l.jsxs)("div", {
                        className: er.aT,
                        children: [
                            (0, l.jsx)(P, { className: er.er, size: "xs", color: "currentColor" }),
                            (0, l.jsx)("div", {
                                className: er.rm,
                                children: (0, l.jsx)(C.m, {
                                    asContainer: !0,
                                    text: A,
                                    shouldShow: J,
                                    children: (0, l.jsx)(p.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        tag: "span",
                                        ref: z,
                                        className: er.Kw,
                                        children: K,
                                    }),
                                }),
                            }),
                            (0, l.jsx)(el, { parentChannel: N, onSelectChannel: T }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let r = s + t;
                    return (0, l.jsx)(
                        et,
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
let ei = a.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: r,
            messages: s,
            blockCount: i,
            ignoreCount: p,
            onPageChange: E,
            onClick: C,
            paginationTotalCount: v,
            renderPageWrapper: I,
            onBlockedResultsClick: j,
            searchRequestAnalyticsId: S,
            searchResultsQuery: y,
        } = e,
        { offset: D, totalResults: b, isSearching: R, showBlockedResults: U } = t,
        L = a.useCallback(
            (e, t) => {
                function n() {
                    let t = w.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    T.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: S });
                    let r = en.BVt.CHANNEL(n, e.channel_id, e.id);
                    (0, M.pX)(t?.type === en.rbe.GUILD_APP ? (0, _.gu)(r) : r);
                }
                (C?.(e, t), (0, k.A)(e, n) && n());
            },
            [C, S],
        ),
        O = a.useMemo(() => {
            let e,
                t = 0;
            return s.reduce((n, r) => {
                if (!U && (V.A.isBlockedForMessage(r) || V.A.isIgnoredForMessage(r))) return n;
                let l = w.A.getChannel(r.channel_id);
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
        G = (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r = 0,
                    onSelect: l,
                    setFocus: s,
                    getNewFocusIndex: i,
                    maintainFocusPosition: g = !0,
                    includeSetSizes: x = !0,
                    focusOnMount: p = !0,
                    enabled: E = !0,
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
                            maintainFocusPosition: x,
                            includeSetSizes: p,
                            focusOnMount: E,
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
                    let [I, j] = a.useState(!1),
                        [S] = a.useState(
                            () =>
                                new c.Lp((e) => () => {
                                    let t = null != _.current && "string" == typeof e ? _.current(e) : e;
                                    "number" != typeof t || t < 0 || g({ type: o.SET_FOCUSED_INDEX, index: t });
                                }),
                        );
                    a.useEffect(() => () => S.clean(), [S]);
                    let P = a.useCallback(
                            (e, t) => {
                                v.current && s(e, t);
                            },
                            [s],
                        ),
                        [y, D] = a.useState(!0);
                    a.useEffect(() => {
                        y && !E ? D(!1) : P(T(t, r), r);
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
                            I || j(!0);
                        }, [I]),
                        M = a.useCallback(() => {
                            I || (x ? P(T(t, r), r) : b(!0));
                        }, [T, t, P, x, I, r, b]),
                        U = a.useCallback(
                            (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                    requestAnimationFrame(() => {
                                        null == h(f(T, t, r)) ? P(t) : j(!1);
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
                            () => ({ role: "list", tabIndex: I && x ? -1 : 0, id: t, onKeyDown: k, ref: L }),
                            [t, I, k, x],
                        ),
                        X = a.useCallback(
                            (e) => {
                                let { index: n } = e;
                                return {
                                    role: "listitem",
                                    "aria-setsize": p ? N.current : void 0,
                                    "aria-posinset": p ? n + 1 : void 0,
                                    id: T(t, n),
                                    tabIndex: x && n === r ? 0 : -1,
                                    onFocus: S.get(null != _.current ? T(t, n) : n),
                                };
                            },
                            [T, t, r, x, S, p],
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
                    includeSetSizes: x,
                    focusOnMount: p,
                    enabled: E,
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
        F = (0, B.dX)(y) ?? "",
        $ = (0, A.wG)(F),
        W = a.useMemo(() => (0, A.th)(F), [F]),
        z = O.map((e) => {
            let { channel: t, messages: a, startIndex: s } = e;
            return (0, l.jsx)(
                es,
                {
                    channel: t,
                    messages: a,
                    highlighter: $,
                    startIndex: s,
                    resultRefs: X,
                    totalResults: b,
                    scrollTo: r,
                    renderEmbeds: n,
                    offset: D,
                    jumpToMessage: L,
                    listNavigator: G,
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
                ...G.getContainerProps(),
                ...H,
                "aria-busy": R,
                children: (0, l.jsx)(P.G.Provider, { value: W, children: z }),
            }),
            i > 0 || p > 0
                ? (0, l.jsxs)(x.D, {
                      tag: "div",
                      className: er.P,
                      onClick: function () {
                          j?.(!U);
                      },
                      children: [
                          (0, l.jsx)("div", { className: er.y }),
                          (0, l.jsx)("div", {
                              className: er.__invalid_resultsBlockedText,
                              children: U
                                  ? i > 0 && p > 0
                                      ? Z.intl.formatToPlainString(Z.t.OvJs9w, { count: i + p })
                                      : i > 0
                                        ? Z.intl.formatToPlainString(Z.t["n/1QFS"], { count: i })
                                        : Z.intl.formatToPlainString(Z.t.ypezTA, { count: p })
                                  : i > 0 && p > 0
                                    ? Z.intl.formatToPlainString(Z.t.EJHRcV, { count: i + p })
                                    : i > 0
                                      ? Z.intl.formatToPlainString(Z.t.HTE8JP, { count: i })
                                      : Z.intl.formatToPlainString(Z.t.e7f8r9, { count: p }),
                          }),
                      ],
                  })
                : null,
            null != E &&
                !R &&
                (0, l.jsx)(K.A, {
                    renderPageWrapper: I,
                    onPageChange: E,
                    offset: D,
                    totalCount: v ?? b,
                    pageSize: en.T_y,
                }),
        ],
    });
});
