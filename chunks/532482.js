(n.r(t), n.d(t, { default: () => K }));
var r = n(477900),
    l = n(582128),
    s = n(855986),
    i = n(663341),
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
    I = n(366605),
    w = n(329921),
    A = n(789645),
    R = n(442433),
    v = n(571694),
    M = n(47167),
    E = n(713654),
    N = n(5180),
    j = n(682163),
    S = n(734057),
    P = n(71393),
    D = n(218461),
    z = n(543465),
    B = n(287809);
n(712960);
var T = n(652215),
    L = n(792996),
    U = n(133281);
function F() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let G = new Map(),
    O = new Set(),
    $ = !1;
function X(e) {
    let {
            tab: t,
            isActive: i,
            closable: a,
            registerTabNode: u,
            onDragStart: c,
            onDragMove: f,
            onDragEnd: X,
            onCloseStart: Y,
            onRequestClose: _,
        } = e,
        [V, H] = l.useState(() => ($ || (($ = !0), d.A.getTabs().forEach((e) => O.add(e.id))), !O.has(t.id) && !F()));
    (l.useEffect(() => {
        O.add(t.id);
    }, [t.id]),
        l.useEffect(() => {
            if (!V) return;
            let e = setTimeout(() => H(!1), 150);
            return () => clearTimeout(e);
        }, [V]));
    let [K, q] = l.useState(!1),
        W = (0, s.bG)([S.A], () => ("channel" === t.kind ? S.A.getChannel(t.channelId) : null), [t]),
        Z = (0, s.bG)([P.A], () => ("channel" === t.kind ? P.A.getGuild(t.guildId) : null), [t]),
        Q = (0, s.bG)([B.default], () => (null != W && W.isDM() ? B.default.getUser(W.getRecipientId()) : null), [W]),
        J = (0, M.Ay)(W);
    "channel" === t.kind && null != J && G.set(t.channelId, J);
    let ee = "route" === t.kind ? t.routeLabel : (J ?? G.get(t.channelId) ?? L.intl.string(L.t.zLZPmk)),
        et = l.useCallback(() => {
            (0, o.ZD)(t.id);
        }, [t.id]),
        en = l.useCallback(() => {
            if (!K && a) {
                if ((Y(t.id), F())) return void _(t.id);
                (q(!0),
                    setTimeout(() => {
                        (_(t.id), d.A.getTabs().some((e) => e.id === t.id) && q(!1));
                    }, 150));
            }
        }, [K, a, Y, _, t.id]),
        er = l.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), en());
            },
            [en],
        ),
        el = l.useCallback(
            (e) => {
                (0, R.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, r.jsx)(e, { ...n, tab: t, onRequestClose: en });
                });
            },
            [t, en],
        ),
        {
            nodeRef: es,
            handlePointerDown: ei,
            handlePointerMove: ea,
            handlePointerUp: eu,
            handleClickCapture: ec,
        } = (function (e) {
            let { itemId: t, onDragStart: n, onDragMove: r, onDragEnd: s } = e,
                i = l.useRef(null),
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
                                    i.current?.setPointerCapture(e.pointerId),
                                    n(t, e.clientX, e.clientY));
                            }
                            (e.preventDefault(), r(t, e.clientX, e.clientY));
                        }
                    },
                    [n, r, t],
                );
            return {
                nodeRef: i,
                handlePointerDown: c,
                handlePointerMove: o,
                handlePointerUp: l.useCallback(
                    (e) => {
                        let t = a.current;
                        null != t &&
                            t.pointerId === e.pointerId &&
                            ((a.current = null), t.dragging && ((u.current = !0), s()));
                    },
                    [s],
                ),
                handleClickCapture: l.useCallback((e) => {
                    u.current && ((u.current = !1), e.preventDefault(), e.stopPropagation());
                }, []),
            };
        })({ itemId: t.id, onDragStart: c, onDragMove: f, onDragEnd: X }),
        eo = l.useCallback(
            (e) => {
                ((es.current = e), u(t.id, e));
            },
            [es, u, t.id],
        ),
        {
            mentionCount: ed,
            isLowImportanceMention: ef,
            showUnreadDot: eh,
        } = (0, s.cf)(
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
            ? (eg = (0, r.jsx)(p.FriendsIcon, { size: "xs", color: "currentColor", className: U.PA }))
            : t.routePath === T.BVt.COLLECTIBLES_SHOP
              ? (eg = (0, r.jsx)(m.ShopIcon, { size: "xs", color: "currentColor", className: U.PA }))
              : t.routePath === T.BVt.QUEST_HOME &&
                (eg = (0, r.jsx)(x.QuestsIcon, { size: "xs", color: "currentColor", className: U.PA }));
    else if ((0, N.ai)(t.guildId)) eg = (0, r.jsx)(b.StarIcon, { size: "xs", color: "currentColor", className: U.PA });
    else if (null != W && W.isThread()) {
        let e = (0, E.gU)(W);
        null != e && (eg = (0, r.jsx)(e, { size: "xs", color: "currentColor", className: U.PA }));
    } else if (null != Z) eg = (0, r.jsx)(j.Ay, { guild: Z, size: j.Ay.Sizes.SMOL, active: !0, className: U.$f });
    else if (null != W && (W.isDM() || W.isGroupDM())) {
        let e = null != Q ? Q.getAvatarURL(void 0, 16) : (0, v.Y)(W, 16);
        null != e && (eg = (0, r.jsx)("img", { className: U.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let ep = null;
    return (
        ed > 0 &&
            (ep = (0, r.jsx)("div", {
                className: U.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(C.hV, {
                    count: ed,
                    color: ef ? g.A.colors.BACKGROUND_MOD_STRONG.css : g.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            })),
        (0, r.jsxs)("div", {
            ref: eo,
            className: h()(U.Mf, { [U.yR]: i, [U.MY]: V, [U.nE]: K }),
            onPointerDown: ei,
            onPointerMove: ea,
            onPointerUp: eu,
            onPointerCancel: eu,
            onClickCapture: ec,
            onContextMenu: el,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsxs)(y.D, {
                    className: U.eg,
                    onClick: et,
                    onAuxClick: er,
                    "aria-current": i ? "page" : void 0,
                    children: [
                        null != eg && (0, r.jsxs)("span", { className: U.P0, children: [eg, ep] }),
                        (0, r.jsxs)(k.E, {
                            variant: "body-sm/medium",
                            className: U.HA,
                            children: [ee, (0, r.jsx)("span", { className: U.Zi, "aria-hidden": !0 })],
                        }),
                    ],
                }),
                t.pinned
                    ? (0, r.jsxs)("div", {
                          className: U.n3,
                          "aria-hidden": !0,
                          children: [
                              (0, r.jsx)(I.PinIcon, { size: "xs", color: "currentColor" }),
                              !i && eh && (0, r.jsx)(w.N, { className: U.UU, variant: "neutral" }),
                          ],
                      })
                    : a
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                !i &&
                                    eh &&
                                    (0, r.jsx)("div", {
                                        className: U.XE,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(w.N, { variant: "neutral" }),
                                    }),
                                (0, r.jsx)(y.D, {
                                    className: U.b,
                                    onClick: en,
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": L.intl.formatToPlainString(L.t["A/PzIa"], { channelName: ee }),
                                    children: (0, r.jsx)(A.XSmallIcon, { size: "xs" }),
                                }),
                            ],
                        })
                      : null,
            ],
        })
    );
}
n(321073);
let Y = "left 150ms ease-out";
function _() {
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
function K() {
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
        I,
        w,
        A,
        R,
        v,
        M,
        E,
        N,
        j,
        S,
        P,
        D,
        {
            tabs: z,
            activeTabId: B,
            isVisible: T,
        } = (0, s.cf)([d.A, u.Bt], () => ({
            tabs: d.A.getTabs(),
            activeTabId: d.A.getActiveTabId(),
            isVisible: d.A.isTabBarVisible(),
        })),
        {
            setStripRef: U,
            registerTabNode: F,
            setNewTabButtonRef: G,
            handleDragStart: O,
            handleDragMove: $,
            handleDragEnd: K,
            handleCloseStart: q,
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
        (I = l.useRef(0)),
        (w = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (A = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (R = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (v = l.useRef(new Map())),
        (M = z.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != f.current) return;
            let e = t.current,
                n = v.current;
            e.forEach((e) => {
                ((e.style.transition = ""), (e.style.transform = ""));
            });
            let r = new Map();
            if (
                (e.forEach((e, t) => {
                    r.set(t, e.getBoundingClientRect().left);
                }),
                n.size === r.size && Array.from(r.keys()).every((e) => n.has(e)) && !_())
            ) {
                let t = [];
                if (
                    (e.forEach((e, l) => {
                        let s = n.get(l),
                            i = r.get(l);
                        if (null == s || null == i) return;
                        let a = s - i;
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
            v.current = r;
        }, [M]),
        (E = l.useRef(!1)),
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
        (S = l.useCallback(() => {
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
                l !== E.current && ((E.current = l), l || S());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [S]),
        (P = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((E.current = n), n && j());
        }, [j])),
        (D = l.useCallback(
            (r, l) => {
                let s = e.current,
                    i = t.current.get(r);
                if (null == s || null == i) return;
                let a = s.getBoundingClientRect(),
                    u = parseFloat(getComputedStyle(s).columnGap);
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
                let w = _(),
                    A = [],
                    R = 1 / 0,
                    v = -1 / 0;
                (c.forEach((e) => {
                    let { id: t, node: n } = e,
                        l = o.get(n);
                    if (null == l) return;
                    let s = l.left - a.left;
                    if (((R = Math.min(R, s)), (v = Math.max(v, s + l.width)), t === r)) {
                        x.current = l.width;
                        return;
                    }
                    (w || (n.style.transition = Y), A.push({ node: n, size: l.width, center: s + l.width / 2 }));
                }),
                    (p.current = A),
                    (m.current = Number.isFinite(R) ? R : 0),
                    (h.current = l));
                let M = parseFloat(i.style.left);
                g.current = M;
                let E = Number.isFinite(v) ? v : 0;
                ((C.current = Math.min(m.current, M)),
                    (y.current = Math.max(E - x.current, M)),
                    (k.current = z.findIndex((e) => e.id === r)),
                    (I.current = M),
                    (f.current = r),
                    (i.style.zIndex = "1"),
                    (i.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            },
            [z],
        )),
        {
            setStripRef: R,
            registerTabNode: w,
            setNewTabButtonRef: A,
            handleDragStart: D,
            handleDragMove: l.useCallback((e, n) => {
                if (f.current !== e) return;
                let r = t.current.get(e);
                if (null == r) return;
                let l = Math.min(Math.max(g.current + n - h.current, C.current), y.current);
                r.style.left = `${l}px`;
                let s = p.current,
                    i = x.current,
                    a = l + i,
                    u = g.current + i / 2,
                    c = 0;
                for (let e of s) {
                    let t = e.center > u ? a : l;
                    e.center < t && c++;
                }
                let o = b.current,
                    d = m.current,
                    w = d;
                (s.forEach((e, t) => {
                    (t === c && ((w = d), (d += i + o)), (e.node.style.left = `${d}px`), (d += e.size + o));
                }),
                    c >= s.length && (w = d),
                    (k.current = c),
                    (I.current = w));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = f.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = I.current;
                (0, o.Aq)(e, k.current);
                let s = !1;
                function i() {
                    if (s) return;
                    ((s = !0),
                        t.current.forEach(V),
                        null != n.current && V(n.current),
                        (f.current = null),
                        (p.current = []));
                    let e = new Map();
                    (t.current.forEach((t, n) => {
                        e.set(n, t.getBoundingClientRect().left);
                    }),
                        (v.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : 0 / 0;
                null == r || _() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? i()
                    : ((r.style.transition = Y),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", i, { once: !0 }),
                      setTimeout(i, 200));
            }, []),
            handleCloseStart: P,
        }),
        [W, Z] = l.useState(() => new Set()),
        Q = l.useCallback(
            (e) => {
                (q(), Z((t) => new Set(t).add(e)));
            },
            [q],
        ),
        J = l.useCallback((e) => {
            ((0, o.f5)(e),
                Z((t) => {
                    let n = new Set(t);
                    return (n.delete(e), n);
                }));
        }, []);
    if (!T) return null;
    let ee = z.filter((e) => !W.has(e.id)).length > 1;
    return (0, r.jsxs)("div", {
        ref: U,
        className: H.$,
        role: "group",
        "aria-label": L.intl.string(L.t.es0PkU),
        onDoubleClick: () => c.Ay.maximize(),
        children: [
            z.map((e) =>
                (0, r.jsx)(
                    X,
                    {
                        tab: e,
                        isActive: e.id === B,
                        closable: ee,
                        registerTabNode: F,
                        onDragStart: O,
                        onDragMove: $,
                        onDragEnd: K,
                        onCloseStart: Q,
                        onRequestClose: J,
                    },
                    e.id,
                ),
            ),
            (0, r.jsx)("div", {
                ref: G,
                className: H.Y,
                children: (0, r.jsx)(a.A, {
                    icon: i.PlusLargeIcon,
                    onClick: o.JC,
                    "aria-label": L.intl.string(L.t.GR7NIF),
                }),
            }),
        ],
    });
}
