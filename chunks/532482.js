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
    w = n(366605),
    A = n(329921),
    R = n(789645),
    v = n(442433),
    I = n(571694),
    M = n(47167),
    E = n(713654),
    N = n(5180),
    j = n(682163),
    P = n(734057),
    D = n(71393),
    S = n(218461),
    z = n(543465),
    B = n(287809);
n(712960);
var T = n(652215),
    L = n(792996),
    U = n(133281);
function G() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let $ = new Map(),
    F = new Set(),
    O = !1;
function Y(e) {
    let {
            tab: t,
            isActive: i,
            closable: a,
            registerTabNode: u,
            onDragStart: c,
            onDragMove: f,
            onDragEnd: Y,
            onCloseStart: X,
            onRequestClose: _,
        } = e,
        [V, H] = l.useState(() => (O || ((O = !0), d.A.getTabs().forEach((e) => F.add(e.id))), !F.has(t.id) && !G()));
    (l.useEffect(() => {
        F.add(t.id);
    }, [t.id]),
        l.useEffect(() => {
            if (!V) return;
            let e = setTimeout(() => H(!1), 150);
            return () => clearTimeout(e);
        }, [V]));
    let [K, q] = l.useState(!1),
        W = (0, s.bG)([P.A], () => ("channel" === t.kind ? P.A.getChannel(t.channelId) : null), [t]),
        Z = (0, s.bG)([D.A], () => ("channel" === t.kind ? D.A.getGuild(t.guildId) : null), [t]),
        J = (0, s.bG)([B.default], () => (null != W && W.isDM() ? B.default.getUser(W.getRecipientId()) : null), [W]),
        Q = (0, M.Ay)(W);
    "channel" === t.kind && null != Q && $.set(t.channelId, Q);
    let ee = "route" === t.kind ? t.routeLabel : (Q ?? $.get(t.channelId) ?? L.intl.string(L.t.zLZPmk)),
        et = l.useCallback(() => {
            (0, o.ZD)(t.id);
        }, [t.id]),
        en = l.useCallback(() => {
            if (!K && a) {
                if ((X(t.id), G())) return void _(t.id);
                (q(!0),
                    setTimeout(() => {
                        (_(t.id), d.A.getTabs().some((e) => e.id === t.id) && q(!1));
                    }, 150));
            }
        }, [K, a, X, _, t.id]),
        er = l.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), en());
            },
            [en],
        ),
        el = l.useCallback(
            (e) => {
                (0, v.L3)(e, async () => {
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
        })({ itemId: t.id, onDragStart: c, onDragMove: f, onDragEnd: Y }),
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
            [S.Ay, z.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = S.Ay.getMentionCount(t.channelId),
                    n = z.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: S.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && S.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        eg = null;
    if ("route" === t.kind)
        t.routePath === T.BVt.FRIENDS
            ? (eg = (0, r.jsx)(p.$, { size: "xs", color: "currentColor", className: U.PA }))
            : t.routePath === T.BVt.COLLECTIBLES_SHOP
              ? (eg = (0, r.jsx)(m.U, { size: "xs", color: "currentColor", className: U.PA }))
              : t.routePath === T.BVt.QUEST_HOME &&
                (eg = (0, r.jsx)(x.r, { size: "xs", color: "currentColor", className: U.PA }));
    else if ((0, N.ai)(t.guildId)) eg = (0, r.jsx)(b.StarIcon, { size: "xs", color: "currentColor", className: U.PA });
    else if (null != W && W.isThread()) {
        let e = (0, E.gU)(W);
        null != e && (eg = (0, r.jsx)(e, { size: "xs", color: "currentColor", className: U.PA }));
    } else if (null != Z) eg = (0, r.jsx)(j.Ay, { guild: Z, size: j.Ay.Sizes.SMOL, active: !0, className: U.$f });
    else if (null != W && (W.isDM() || W.isGroupDM())) {
        let e = null != J ? J.getAvatarURL(void 0, 16) : (0, I.Y)(W, 16);
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
                              (0, r.jsx)(w.t, { size: "xs", color: "currentColor" }),
                              !i && eh && (0, r.jsx)(A.N, { className: U.UU, variant: "neutral" }),
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
                                        children: (0, r.jsx)(A.N, { variant: "neutral" }),
                                    }),
                                (0, r.jsx)(y.D, {
                                    className: U.b,
                                    onClick: en,
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": L.intl.formatToPlainString(L.t["A/PzIa"], { channelName: ee }),
                                    children: (0, r.jsx)(R.P, { size: "xs" }),
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
        w,
        A,
        R,
        v,
        I,
        M,
        E,
        N,
        j,
        P,
        D,
        S,
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
            registerTabNode: G,
            setNewTabButtonRef: $,
            handleDragStart: F,
            handleDragMove: O,
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
        (w = l.useRef(0)),
        (A = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (R = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (v = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (I = l.useRef(new Map())),
        (M = z.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != f.current) return;
            let e = t.current,
                n = I.current;
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
            I.current = r;
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
                l !== E.current && ((E.current = l), l || P());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [P]),
        (D = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((E.current = n), n && j());
        }, [j])),
        (S = l.useCallback(
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
                let A = _(),
                    R = [],
                    v = 1 / 0,
                    I = -1 / 0;
                (c.forEach((e) => {
                    let { id: t, node: n } = e,
                        l = o.get(n);
                    if (null == l) return;
                    let s = l.left - a.left;
                    if (((v = Math.min(v, s)), (I = Math.max(I, s + l.width)), t === r)) {
                        x.current = l.width;
                        return;
                    }
                    (A || (n.style.transition = X), R.push({ node: n, size: l.width, center: s + l.width / 2 }));
                }),
                    (p.current = R),
                    (m.current = Number.isFinite(v) ? v : 0),
                    (h.current = l));
                let M = parseFloat(i.style.left);
                g.current = M;
                let E = Number.isFinite(I) ? I : 0;
                ((C.current = Math.min(m.current, M)),
                    (y.current = Math.max(E - x.current, M)),
                    (k.current = z.findIndex((e) => e.id === r)),
                    (w.current = M),
                    (f.current = r),
                    (i.style.zIndex = "1"),
                    (i.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            },
            [z],
        )),
        {
            setStripRef: v,
            registerTabNode: A,
            setNewTabButtonRef: R,
            handleDragStart: S,
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
                    A = d;
                (s.forEach((e, t) => {
                    (t === c && ((A = d), (d += i + o)), (e.node.style.left = `${d}px`), (d += e.size + o));
                }),
                    c >= s.length && (A = d),
                    (k.current = c),
                    (w.current = A));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = f.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = w.current;
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
                        (I.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : 0 / 0;
                null == r || _() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? i()
                    : ((r.style.transition = X),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", i, { once: !0 }),
                      setTimeout(i, 200));
            }, []),
            handleCloseStart: D,
        }),
        [W, Z] = l.useState(() => new Set()),
        J = l.useCallback(
            (e) => {
                (q(), Z((t) => new Set(t).add(e)));
            },
            [q],
        ),
        Q = l.useCallback((e) => {
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
                    Y,
                    {
                        tab: e,
                        isActive: e.id === B,
                        closable: ee,
                        registerTabNode: G,
                        onDragStart: F,
                        onDragMove: O,
                        onDragEnd: K,
                        onCloseStart: J,
                        onRequestClose: Q,
                    },
                    e.id,
                ),
            ),
            (0, r.jsx)("div", {
                ref: $,
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
