(n.r(t), n.d(t, { default: () => q }));
var r = n(477900),
    l = n(582128),
    i = n(855986),
    s = n(663341),
    a = n(189252),
    u = n(945810),
    c = n(253400),
    o = n(114129),
    d = n(442325),
    f = n(503698),
    h = n.n(f),
    g = n(646514),
    p = n(214947),
    m = n(34188),
    x = n(577473),
    b = n(27232),
    C = n(812993),
    y = n(939249),
    k = n(834730),
    w = n(366605),
    A = n(329921),
    I = n(789645),
    v = n(442433),
    R = n(571694),
    E = n(47167),
    M = n(713654),
    N = n(5180),
    j = n(682163),
    P = n(734057),
    S = n(71393),
    D = n(218461),
    z = n(543465),
    B = n(287809);
n(712960);
var T = n(652215),
    L = n(792996),
    _ = n(133281);
function F() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let U = new Map(),
    G = new Set(),
    O = !1;
function $(e) {
    let {
            tab: t,
            isActive: s,
            closable: a,
            registerTabNode: u,
            onDragStart: c,
            onDragMove: f,
            onDragEnd: $,
            onCloseStart: X,
            onRequestClose: Y,
        } = e,
        [V, H] = l.useState(() => (O || ((O = !0), d.A.getTabs().forEach((e) => G.add(e.id))), !G.has(t.id) && !F()));
    (l.useEffect(() => {
        G.add(t.id);
    }, [t.id]),
        l.useEffect(() => {
            if (!V) return;
            let e = setTimeout(() => H(!1), 150);
            return () => clearTimeout(e);
        }, [V]));
    let [K, q] = l.useState(!1),
        W = (0, i.bG)([P.A], () => ("channel" === t.kind ? P.A.getChannel(t.channelId) : null), [t]),
        Z = (0, i.bG)([S.A], () => ("channel" === t.kind ? S.A.getGuild(t.guildId) : null), [t]),
        Q = (0, i.bG)([B.default], () => (null != W && W.isDM() ? B.default.getUser(W.getRecipientId()) : null), [W]),
        J = (0, E.Ay)(W);
    "channel" === t.kind && null != J && U.set(t.channelId, J);
    let ee = "route" === t.kind ? t.routeLabel : (J ?? U.get(t.channelId) ?? L.intl.string(L.t.zLZPmk)),
        et = l.useCallback(() => {
            (0, o.ZD)(t.id, "tab_click");
        }, [t.id]),
        en = l.useCallback(
            (e) => {
                if (!K && a) {
                    if ((X(t.id), F())) return void Y(t.id, e);
                    (q(!0),
                        setTimeout(() => {
                            (Y(t.id, e), d.A.getTabs().some((e) => e.id === t.id) && q(!1));
                        }, 150));
                }
            },
            [K, a, X, Y, t.id],
        ),
        er = l.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), en("middle_click"));
            },
            [en],
        ),
        el = l.useCallback(
            (e) => {
                (0, v.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, r.jsx)(e, { ...n, tab: t, onRequestClose: () => en("context_menu") });
                });
            },
            [t, en],
        ),
        {
            nodeRef: ei,
            handlePointerDown: es,
            handlePointerMove: ea,
            handlePointerUp: eu,
            handleClickCapture: ec,
        } = (function (e) {
            let { itemId: t, onDragStart: n, onDragMove: r, onDragEnd: i } = e,
                s = l.useRef(null),
                a = l.useRef(null),
                u = l.useRef(!1),
                c = l.useCallback((e) => {
                    0 === e.button &&
                        ((u.current = !1),
                        (a.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, dragging: !1 }));
                }, []),
                o = l.useCallback(
                    (e) => {
                        let l = a.current;
                        if (null != l && l.pointerId === e.pointerId) {
                            if (!l.dragging) {
                                if (3 > Math.hypot(e.clientX - l.startX, e.clientY - l.startY)) return;
                                ((l.dragging = !0),
                                    s.current?.setPointerCapture(e.pointerId),
                                    n(t, e.clientX, e.clientY));
                            }
                            (e.preventDefault(), r(t, e.clientX, e.clientY));
                        }
                    },
                    [n, r, t],
                );
            return {
                nodeRef: s,
                handlePointerDown: c,
                handlePointerMove: o,
                handlePointerUp: l.useCallback(
                    (e) => {
                        let t = a.current;
                        null != t &&
                            t.pointerId === e.pointerId &&
                            ((a.current = null), t.dragging && ((u.current = !0), i()));
                    },
                    [i],
                ),
                handleClickCapture: l.useCallback((e) => {
                    u.current && ((u.current = !1), e.preventDefault(), e.stopPropagation());
                }, []),
            };
        })({ itemId: t.id, onDragStart: c, onDragMove: f, onDragEnd: $ }),
        eo = l.useCallback(
            (e) => {
                ((ei.current = e), u(t.id, e));
            },
            [ei, u, t.id],
        ),
        {
            mentionCount: ed,
            isLowImportanceMention: ef,
            showUnreadDot: eh,
        } = (0, i.cf)(
            [D.Ay, z.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = D.Ay.getMentionCount(t.channelId),
                    n = z.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: D.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && D.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        eg = null;
    if ("route" === t.kind)
        t.routePath === T.BVt.FRIENDS
            ? (eg = (0, r.jsx)(p.FriendsIcon, { size: "xs", color: "currentColor", className: _.PA }))
            : t.routePath === T.BVt.COLLECTIBLES_SHOP
              ? (eg = (0, r.jsx)(m.ShopIcon, { size: "xs", color: "currentColor", className: _.PA }))
              : t.routePath === T.BVt.QUEST_HOME &&
                (eg = (0, r.jsx)(x.QuestsIcon, { size: "xs", color: "currentColor", className: _.PA }));
    else if ((0, N.ai)(t.guildId)) eg = (0, r.jsx)(b.StarIcon, { size: "xs", color: "currentColor", className: _.PA });
    else if (null != W && W.isThread()) {
        let e = (0, M.gU)(W);
        null != e && (eg = (0, r.jsx)(e, { size: "xs", color: "currentColor", className: _.PA }));
    } else if (null != Z) eg = (0, r.jsx)(j.Ay, { guild: Z, size: j.Ay.Sizes.SMOL, active: !0, className: _.$f });
    else if (null != W && (W.isDM() || W.isGroupDM())) {
        let e = null != Q ? Q.getAvatarURL(void 0, 16) : (0, R.Y)(W, 16);
        null != e && (eg = (0, r.jsx)("img", { className: _.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let ep = null;
    return (
        ed > 0 &&
            (ep = (0, r.jsx)("div", {
                className: _.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(C.hV, {
                    count: ed,
                    color: ef ? g.A.colors.BACKGROUND_MOD_STRONG.css : g.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            })),
        (0, r.jsxs)("div", {
            ref: eo,
            className: h()(_.Mf, { [_.yR]: s, [_.MY]: V, [_.nE]: K }),
            onPointerDown: es,
            onPointerMove: ea,
            onPointerUp: eu,
            onPointerCancel: eu,
            onClickCapture: ec,
            onContextMenu: el,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsxs)(y.D, {
                    className: _.eg,
                    onClick: et,
                    onAuxClick: er,
                    "aria-current": s ? "page" : void 0,
                    children: [
                        null != eg && (0, r.jsxs)("span", { className: _.P0, children: [eg, ep] }),
                        (0, r.jsxs)(k.E, {
                            variant: "body-sm/medium",
                            className: _.HA,
                            children: [ee, (0, r.jsx)("span", { className: _.Zi, "aria-hidden": !0 })],
                        }),
                    ],
                }),
                t.pinned
                    ? (0, r.jsxs)("div", {
                          className: _.n3,
                          "aria-hidden": !0,
                          children: [
                              (0, r.jsx)(w.PinIcon, { size: "xs", color: "currentColor" }),
                              !s && eh && (0, r.jsx)(A.N, { className: _.UU, variant: "neutral" }),
                          ],
                      })
                    : a
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                !s &&
                                    eh &&
                                    (0, r.jsx)("div", {
                                        className: _.XE,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(A.N, { variant: "neutral" }),
                                    }),
                                (0, r.jsx)(y.D, {
                                    className: _.b,
                                    onClick: () => en("close_button"),
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": L.intl.formatToPlainString(L.t["A/PzIa"], { channelName: ee }),
                                    children: (0, r.jsx)(I.XSmallIcon, { size: "xs" }),
                                }),
                            ],
                        })
                      : null,
            ],
        })
    );
}
n(321073);
let X = "left 150ms ease-out";
function Y() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function V(e) {
    ((e.style.position = ""),
        (e.style.boxSizing = ""),
        (e.style.left = ""),
        (e.style.top = ""),
        (e.style.width = ""),
        (e.style.height = ""),
        (e.style.margin = ""),
        (e.style.zIndex = ""),
        (e.style.boxShadow = ""),
        (e.style.transition = ""));
}
var H = n(266553);
let K = !1;
function q() {
    let e,
        t,
        n,
        f,
        h,
        g,
        p,
        m,
        x,
        b,
        C,
        y,
        k,
        w,
        A,
        I,
        v,
        R,
        E,
        M,
        N,
        j,
        P,
        S,
        D,
        {
            tabs: z,
            activeTabId: B,
            isVisible: T,
        } = (0, i.cf)([d.A, u.Bt], () => ({
            tabs: d.A.getTabs(),
            activeTabId: d.A.getActiveTabId(),
            isVisible: d.A.isTabBarVisible(),
        })),
        {
            setStripRef: _,
            registerTabNode: F,
            setNewTabButtonRef: U,
            handleDragStart: G,
            handleDragMove: O,
            handleDragEnd: q,
            handleCloseStart: W,
        } = ((e = l.useRef(null)),
        (t = l.useRef(new Map())),
        (n = l.useRef(null)),
        (f = l.useRef(null)),
        (h = l.useRef(0)),
        (g = l.useRef(0)),
        (p = l.useRef([])),
        (m = l.useRef(0)),
        (x = l.useRef(0)),
        (b = l.useRef(0)),
        (C = l.useRef(0)),
        (y = l.useRef(0)),
        (k = l.useRef(0)),
        (w = l.useRef(0)),
        (A = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (I = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (v = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (R = l.useRef(new Map())),
        (E = z.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != f.current) return;
            let e = t.current,
                n = R.current;
            e.forEach((e) => {
                ((e.style.transition = ""), (e.style.transform = ""));
            });
            let r = new Map();
            if (
                (e.forEach((e, t) => {
                    r.set(t, e.getBoundingClientRect().left);
                }),
                n.size === r.size && Array.from(r.keys()).every((e) => n.has(e)) && !Y())
            ) {
                let t = [];
                if (
                    (e.forEach((e, l) => {
                        let i = n.get(l),
                            s = r.get(l);
                        if (null == i || null == s) return;
                        let a = i - s;
                        Math.abs(a) > 0.5 && t.push({ node: e, delta: a });
                    }),
                    t.length > 0)
                ) {
                    for (let { node: e, delta: n } of t) e.style.transform = `translateX(${n}px)`;
                    for (let { node: e } of (t[0].node.offsetHeight, t))
                        ((e.style.transition = "transform 150ms ease-out"),
                            (e.style.transform = ""),
                            e.addEventListener(
                                "transitionend",
                                () => {
                                    e.style.transition = "";
                                },
                                { once: !0 },
                            ));
                }
            }
            R.current = r;
        }, [E]),
        (M = l.useRef(!1)),
        (N = l.useRef(!1)),
        (j = l.useCallback(() => {
            N.current = !0;
            let e = new Map();
            (t.current.forEach((t) => {
                "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
            }),
                e.forEach((e, t) => {
                    ((t.style.flexGrow = "0"),
                        (t.style.flexShrink = "0"),
                        (t.style.flexBasis = `${e}px`),
                        (t.style.maxWidth = `${e}px`));
                }));
        }, [])),
        (P = l.useCallback(() => {
            ((N.current = !1),
                t.current.forEach((e) => {
                    ((e.style.flexGrow = ""),
                        (e.style.flexShrink = ""),
                        (e.style.flexBasis = ""),
                        (e.style.maxWidth = ""));
                }));
        }, [])),
        l.useEffect(() => {
            function t(t) {
                if (!N.current) return;
                let n = e.current;
                if (null == n) return;
                let r = n.getBoundingClientRect(),
                    l =
                        t.clientX >= r.left - 32 &&
                        t.clientX <= r.right + 32 &&
                        t.clientY >= r.top - 32 &&
                        t.clientY <= r.bottom + 32;
                l !== M.current && ((M.current = l), l || P());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [P]),
        (S = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((M.current = n), n && j());
        }, [j])),
        (D = l.useCallback(
            (r, l) => {
                let i = e.current,
                    s = t.current.get(r);
                if (null == i || null == s) return;
                let a = i.getBoundingClientRect(),
                    u = parseFloat(getComputedStyle(i).columnGap);
                b.current = Number.isFinite(u) ? u : 0;
                let c = [];
                z.forEach((e) => {
                    let n = t.current.get(e.id);
                    null != n && c.push({ id: e.id, node: n });
                });
                let o = new Map();
                c.forEach((e) => {
                    let { node: t } = e;
                    return o.set(t, t.getBoundingClientRect());
                });
                let d = n.current;
                (null != d && o.set(d, d.getBoundingClientRect()),
                    o.forEach((e, t) => {
                        ((t.style.position = "absolute"),
                            (t.style.boxSizing = "border-box"),
                            (t.style.left = `${e.left - a.left}px`),
                            (t.style.top = `${e.top - a.top}px`),
                            (t.style.width = `${e.width}px`),
                            (t.style.height = `${e.height}px`),
                            (t.style.margin = "0"));
                    }));
                let A = Y(),
                    I = [],
                    v = 1 / 0,
                    R = -1 / 0;
                (c.forEach((e) => {
                    let { id: t, node: n } = e,
                        l = o.get(n);
                    if (null == l) return;
                    let i = l.left - a.left;
                    if (((v = Math.min(v, i)), (R = Math.max(R, i + l.width)), t === r)) {
                        x.current = l.width;
                        return;
                    }
                    (A || (n.style.transition = X), I.push({ node: n, size: l.width, center: i + l.width / 2 }));
                }),
                    (p.current = I),
                    (m.current = Number.isFinite(v) ? v : 0),
                    (h.current = l));
                let E = parseFloat(s.style.left);
                g.current = E;
                let M = Number.isFinite(R) ? R : 0;
                ((C.current = Math.min(m.current, E)),
                    (y.current = Math.max(M - x.current, E)),
                    (k.current = z.findIndex((e) => e.id === r)),
                    (w.current = E),
                    (f.current = r),
                    (s.style.zIndex = "1"),
                    (s.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            },
            [z],
        )),
        {
            setStripRef: v,
            registerTabNode: A,
            setNewTabButtonRef: I,
            handleDragStart: D,
            handleDragMove: l.useCallback((e, n) => {
                if (f.current !== e) return;
                let r = t.current.get(e);
                if (null == r) return;
                let l = Math.min(Math.max(g.current + n - h.current, C.current), y.current);
                r.style.left = `${l}px`;
                let i = p.current,
                    s = x.current,
                    a = l + s,
                    u = g.current + s / 2,
                    c = 0;
                for (let e of i) {
                    let t = e.center > u ? a : l;
                    e.center < t && c++;
                }
                let o = b.current,
                    d = m.current,
                    A = d;
                (i.forEach((e, t) => {
                    (t === c && ((A = d), (d += s + o)), (e.node.style.left = `${d}px`), (d += e.size + o));
                }),
                    c >= i.length && (A = d),
                    (k.current = c),
                    (w.current = A));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = f.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = w.current;
                (0, o.Aq)(e, k.current);
                let i = !1;
                function s() {
                    if (i) return;
                    ((i = !0),
                        t.current.forEach(V),
                        null != n.current && V(n.current),
                        (f.current = null),
                        (p.current = []));
                    let e = new Map();
                    (t.current.forEach((t, n) => {
                        e.set(n, t.getBoundingClientRect().left);
                    }),
                        (R.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : 0 / 0;
                null == r || Y() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? s()
                    : ((r.style.transition = X),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", s, { once: !0 }),
                      setTimeout(s, 200));
            }, []),
            handleCloseStart: S,
        });
    l.useEffect(() => {
        if (K) return;
        K = !0;
        let e = d.A.getActiveTab();
        null != e && (0, o.FP)(e, "app_start", !1, !0);
    }, []);
    let [Z, Q] = l.useState(() => new Set()),
        J = l.useCallback(
            (e) => {
                (W(), Q((t) => new Set(t).add(e)));
            },
            [W],
        ),
        ee = l.useCallback((e, t) => {
            ((0, o.f5)(e, t),
                Q((t) => {
                    let n = new Set(t);
                    return (n.delete(e), n);
                }));
        }, []);
    if (!T) return null;
    let et = z.filter((e) => !Z.has(e.id)).length > 1;
    return (0, r.jsxs)("div", {
        ref: _,
        className: H.$,
        role: "group",
        "aria-label": L.intl.string(L.t.es0PkU),
        onDoubleClick: () => c.Ay.maximize(),
        children: [
            z.map((e) =>
                (0, r.jsx)(
                    $,
                    {
                        tab: e,
                        isActive: e.id === B,
                        closable: et,
                        registerTabNode: F,
                        onDragStart: G,
                        onDragMove: O,
                        onDragEnd: q,
                        onCloseStart: J,
                        onRequestClose: ee,
                    },
                    e.id,
                ),
            ),
            (0, r.jsx)("div", {
                ref: U,
                className: H.Y,
                children: (0, r.jsx)(a.A, {
                    icon: s.PlusLargeIcon,
                    onClick: () => (0, o.JC)("new_tab_button"),
                    "aria-label": L.intl.string(L.t.GR7NIF),
                }),
            }),
        ],
    });
}
