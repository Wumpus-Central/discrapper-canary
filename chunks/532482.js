(n.r(t), n.d(t, { default: () => ee }));
var r = n(477900),
    l = n(582128),
    i = n(855986),
    s = n(663341),
    a = n(189252),
    u = n(309010),
    o = n(253400),
    c = n(300259),
    d = n(931519),
    f = n(716099),
    h = n(503698),
    m = n.n(h),
    g = n(646514),
    p = n(366605),
    b = n(214947),
    x = n(34188),
    C = n(577473),
    y = n(403581),
    k = n(27232),
    w = n(812993),
    E = n(866665),
    A = n(939249),
    I = n(834730),
    M = n(329921),
    R = n(789645),
    v = n(442433),
    N = n(571694),
    P = n(47167),
    T = n(713654),
    j = n(5180),
    S = n(682163),
    D = n(734057),
    z = n(71393),
    B = n(218461),
    L = n(543465),
    O = n(287809),
    _ = n(114129);
n(712960);
var F = n(652215),
    G = n(792996),
    U = n(133281);
function $() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let X = new Map(),
    Y = new Set(),
    V = !1,
    H = l.memo(function (e) {
        let {
                tab: t,
                isActive: s,
                closable: a,
                isExiting: u,
                isConnectedVoiceChannel: o,
                registerTabNode: f,
                onDragStart: h,
                onDragMove: H,
                onDragEnd: K,
                onExited: W,
            } = e,
            [Z, q] = l.useState(
                () => (V || ((V = !0), d.A.getTabs().forEach((e) => Y.add(e.id))), !Y.has(t.id) && !$()),
            );
        (l.useEffect(() => {
            Y.add(t.id);
        }, [t.id]),
            l.useEffect(() => {
                if (!Z) return;
                let e = setTimeout(() => q(!1), 150);
                return () => clearTimeout(e);
            }, [Z]));
        let Q = (0, i.bG)([D.A], () => ("channel" === t.kind ? D.A.getChannel(t.channelId) : null), [t]),
            J = (0, i.bG)([z.A], () => ("channel" === t.kind ? z.A.getGuild(t.guildId) : null), [t]),
            ee = (0, i.bG)([O.default], () => (null != Q && Q.isDM() ? O.default.getUser(Q.getRecipientId()) : null), [
                Q,
            ]),
            et = (0, P.Ay)(Q);
        "channel" === t.kind && null != et && X.set(t.channelId, et);
        let en = "route" === t.kind ? t.routeLabel : (et ?? X.get(t.channelId) ?? G.intl.string(G.t.zLZPmk)),
            er = l.useCallback(() => {
                (0, _.ZD)(t.id, "tab_click");
            }, [t]),
            el = l.useCallback(
                (e) => {
                    !u && a && (0, _.f5)(t.id, e);
                },
                [u, a, t.id],
            );
        l.useEffect(() => {
            if (!u) return;
            if ($()) return void W(t.id);
            let e = setTimeout(() => W(t.id), 150);
            return () => clearTimeout(e);
        }, [u, W, t.id]);
        let ei = l.useCallback(
                (e) => {
                    1 === e.button && (e.preventDefault(), el("middle_click"));
                },
                [el],
            ),
            es = l.useCallback(
                (e) => {
                    (0, v.L3)(e, async () => {
                        let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                        return (n) => (0, r.jsx)(e, { ...n, tab: t, onRequestClose: () => el("context_menu") });
                    });
                },
                [t, el],
            ),
            [ea, eu] = l.useState(!1),
            eo = l.useCallback(
                (e, t) => {
                    (eu(!0), h(e, t));
                },
                [h],
            ),
            ec = l.useCallback(() => {
                (eu(!1), K());
            }, [K]),
            {
                nodeRef: ed,
                handlePointerDown: ef,
                handlePointerMove: eh,
                handlePointerUp: em,
                handleClickCapture: eg,
            } = (function (e) {
                let { itemId: t, onDragStart: n, onDragMove: r, onDragEnd: i } = e,
                    s = l.useRef(null),
                    a = l.useRef(null),
                    u = l.useRef(!1),
                    o = l.useCallback((e) => {
                        0 === e.button &&
                            ((u.current = !1),
                            (a.current = {
                                pointerId: e.pointerId,
                                startX: e.clientX,
                                startY: e.clientY,
                                dragging: !1,
                            }));
                    }, []),
                    c = l.useCallback(
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
                    handlePointerDown: o,
                    handlePointerMove: c,
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
            })({ itemId: t.id, onDragStart: eo, onDragMove: H, onDragEnd: ec }),
            ep = l.useCallback(
                (e) => {
                    ((ed.current = e), f(t.id, e));
                },
                [ed, f, t.id],
            ),
            {
                mentionCount: eb,
                isLowImportanceMention: ex,
                showUnreadDot: eC,
            } = (0, i.cf)(
                [B.Ay, L.Ay],
                () => {
                    if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                    let e = B.Ay.getMentionCount(t.channelId),
                        n = L.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                    return {
                        mentionCount: e,
                        isLowImportanceMention: B.Ay.getIsMentionLowImportance(t.channelId),
                        showUnreadDot: 0 === e && !n && B.Ay.hasUnread(t.channelId),
                    };
                },
                [t],
            ),
            ey = (0, r.jsx)(p.PinIcon, { size: "sm", color: "currentColor", className: U.PA }),
            ek = null;
        if (!t.pinned) {
            if ("route" === t.kind)
                t.routePath === F.BVt.FRIENDS
                    ? (ek = (0, r.jsx)(b.FriendsIcon, { size: "sm", color: "currentColor", className: U.PA }))
                    : t.routePath === F.BVt.COLLECTIBLES_SHOP
                      ? (ek = (0, r.jsx)(x.ShopIcon, { size: "sm", color: "currentColor", className: U.PA }))
                      : t.routePath === F.BVt.QUEST_HOME
                        ? (ek = (0, r.jsx)(C.QuestsIcon, { size: "sm", color: "currentColor", className: U.PA }))
                        : t.routePath === F.BVt.APPLICATION_STORE &&
                          (ek = (0, r.jsx)(y.NitroWheelIcon, { size: "sm", color: "currentColor", className: U.PA }));
            else if ((0, j.ai)(t.guildId))
                ek = (0, r.jsx)(k.StarIcon, { size: "sm", color: "currentColor", className: U.PA });
            else if (null != Q && Q.isThread()) {
                let e = (0, T.gU)(Q);
                null != e && (ek = (0, r.jsx)(e, { size: "sm", color: "currentColor", className: U.PA }));
            } else if (null != J)
                ek = (0, r.jsx)(S.Ay, { guild: J, size: S.Ay.Sizes.SMOL, active: !0, className: U.$f });
            else if (null != Q && (Q.isDM() || Q.isGroupDM())) {
                let e = null != ee ? ee.getAvatarURL(void 0, 18) : (0, N.Y)(Q, 18);
                null != e &&
                    (ek = (0, r.jsx)("img", { className: U.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
            }
        }
        let ew = "channel" !== t.kind || null == J || null == Q || Q.isThread() ? null : (0, T.gU)(Q),
            eE = null;
        eb > 0 &&
            (eE = (0, r.jsx)("div", {
                className: U.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(w.hV, {
                    count: eb,
                    color: ex ? g.A.colors.BACKGROUND_MOD_STRONG.css : g.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            }));
        let eA = null != J ? G.intl.formatToPlainString(G.t.HPMTD3, { channelName: en, guildName: J.name }) : en;
        return (0, r.jsxs)("div", {
            ref: ep,
            className: m()(U.Mf, { [U.yR]: s, [U.MY]: Z, [U.nE]: u }),
            onPointerDown: ef,
            onPointerMove: eh,
            onPointerUp: em,
            onPointerCancel: em,
            onClickCapture: eg,
            onContextMenu: es,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsx)(E.m, {
                    position: "bottom",
                    text: eA,
                    delay: 500,
                    shouldShow: !ea && !u,
                    ariaHidden: null == J,
                    children: (0, r.jsxs)(A.D, {
                        className: U.eg,
                        onClick: er,
                        onAuxClick: ei,
                        "aria-current": s ? "page" : void 0,
                        children: [
                            (t.pinned || null != ek) &&
                                (0, r.jsxs)("span", { className: U.P0, children: [t.pinned && ey, ek, eE] }),
                            null != ew &&
                                (0, r.jsx)(ew, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: m()(U.j1, { [U.Av]: o }),
                                }),
                            (0, r.jsxs)(I.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: U.HA,
                                children: [en, (0, r.jsx)("span", { className: U.Zi, "aria-hidden": !0 })],
                            }),
                        ],
                    }),
                }),
                a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              !s &&
                                  eC &&
                                  (0, r.jsx)("div", {
                                      className: U.XE,
                                      "aria-hidden": !0,
                                      children: (0, r.jsx)(M.N, { variant: "neutral" }),
                                  }),
                              (0, r.jsx)(E.m, {
                                  position: "bottom",
                                  text: G.intl.string(G.t.In6PEK),
                                  keyboardShortcut: c.nK.binds["0"],
                                  ariaHidden: !0,
                                  children: (0, r.jsx)(A.D, {
                                      className: U.b,
                                      onClick: () => el("close_button"),
                                      onPointerDown: (e) => e.stopPropagation(),
                                      "aria-label": G.intl.formatToPlainString(G.t["A/PzIa"], { channelName: en }),
                                      children: (0, r.jsx)(R.XSmallIcon, { size: "sm" }),
                                  }),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    });
n(321073);
let K = "left 150ms ease-out";
function W() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Z(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function q(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function Q(e) {
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
var J = n(266553);
function ee() {
    let e,
        t,
        n,
        h,
        m,
        g,
        p,
        b,
        x,
        C,
        y,
        k,
        w,
        E,
        A,
        I,
        M,
        R,
        v,
        N,
        P,
        T,
        j,
        S,
        D,
        z,
        B,
        L,
        O,
        {
            tabs: F,
            activeTabId: U,
            isVisible: $,
            isAtMaxTabs: X,
            maxTabs: Y,
        } = (0, i.cf)([d.A], () => ({
            tabs: d.A.getTabs(),
            activeTabId: d.A.getActiveTabId(),
            isVisible: d.A.isTabBarVisible(),
            isAtMaxTabs: d.A.isAtMaxTabs(),
            maxTabs: d.A.getMaxTabs(),
        })),
        V = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId()),
        {
            setStripRef: ee,
            registerTabNode: et,
            setNewTabButtonRef: en,
            handleDragStart: er,
            handleDragMove: el,
            handleDragEnd: ei,
            handleCloseStart: es,
        } = ((e = l.useRef(null)),
        (t = l.useRef(new Map())),
        (n = l.useRef(null)),
        (h = l.useRef(null)),
        (m = l.useRef(0)),
        (g = l.useRef(0)),
        (p = l.useRef([])),
        (b = l.useRef(0)),
        (x = l.useRef(0)),
        (C = l.useRef(0)),
        (y = l.useRef(0)),
        (k = l.useRef(0)),
        (w = l.useRef(0)),
        (E = l.useRef(0)),
        (A = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (I = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (M = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (R = l.useRef(new Map())),
        (v = F.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != h.current) return;
            let e = t.current,
                n = R.current;
            e.forEach((e) => {
                ((e.style.transition = ""), (e.style.transform = ""));
            });
            let r = new Map();
            if (
                (e.forEach((e, t) => {
                    F.some((e) => e.id === t) && r.set(t, e.getBoundingClientRect().left);
                }),
                n.size === F.length && F.every((e) => n.has(e.id)) && !W())
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
        }, [v]),
        (N = l.useRef(!1)),
        (P = l.useRef(!1)),
        (T = l.useRef(new Map())),
        (j = l.useCallback(() => {
            let e = new Map();
            return (
                T.current.forEach((t, n) => {
                    (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                }),
                e.forEach((e, t) => {
                    ((t.style.transition = ""), Z(t, e));
                }),
                T.current.clear(),
                e
            );
        }, [])),
        (S = l.useCallback((e) => {
            if (W()) return;
            let t = [];
            if (
                (e.forEach((e, n) => {
                    let r = n.getBoundingClientRect().width;
                    Math.abs(r - e) > 0.5 && t.push({ node: n, from: e, to: r });
                }),
                0 !== t.length)
            ) {
                for (let { node: e, from: n } of t) ((e.style.transition = ""), Z(e, n));
                for (let { node: e, to: n } of (t[0].node.offsetWidth, t)) {
                    ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), Z(e, n));
                    let t = setTimeout(() => {
                        (T.current.delete(e), (e.style.transition = ""), q(e));
                    }, 150);
                    T.current.set(e, t);
                }
            }
        }, [])),
        l.useEffect(() => {
            let e = T.current;
            return () => e.forEach((e) => clearTimeout(e));
        }, []),
        (D = l.useCallback(() => {
            ((P.current = !0), j());
            let e = new Map();
            (t.current.forEach((t) => {
                "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
            }),
                e.forEach((e, t) => Z(t, e)));
        }, [j])),
        (z = l.useCallback(() => {
            ((P.current = !1), j());
            let e = new Map();
            (t.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), t.current.forEach(q), S(e));
        }, [j, S])),
        l.useEffect(() => {
            function t(t) {
                if (!P.current) return;
                let n = e.current;
                if (null == n) return;
                let r = n.getBoundingClientRect(),
                    l =
                        t.clientX >= r.left - 32 &&
                        t.clientX <= r.right + 32 &&
                        t.clientY >= r.top - 32 &&
                        t.clientY <= r.bottom + 32;
                l !== N.current && ((N.current = l), l || z());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [z]),
        (B = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((N.current = n), n && D());
        }, [D])),
        (L = l.useRef(F)),
        l.useLayoutEffect(() => {
            L.current = F;
        }, [F]),
        (O = l.useCallback((r, l) => {
            let i = L.current,
                s = e.current,
                a = t.current.get(r);
            if (null == s || null == a) return;
            let u = s.getBoundingClientRect(),
                o = parseFloat(getComputedStyle(s).columnGap);
            C.current = Number.isFinite(o) ? o : 0;
            let c = [];
            i.forEach((e) => {
                let n = t.current.get(e.id);
                null != n && c.push({ id: e.id, node: n });
            });
            let d = new Map();
            c.forEach((e) => {
                let { node: t } = e;
                return d.set(t, t.getBoundingClientRect());
            });
            let f = n.current;
            (null != f && d.set(f, f.getBoundingClientRect()),
                d.forEach((e, t) => {
                    ((t.style.position = "absolute"),
                        (t.style.boxSizing = "border-box"),
                        (t.style.left = `${e.left - u.left}px`),
                        (t.style.top = `${e.top - u.top}px`),
                        (t.style.width = `${e.width}px`),
                        (t.style.height = `${e.height}px`),
                        (t.style.margin = "0"));
                }));
            let A = W(),
                I = [],
                M = 1 / 0,
                R = i.find((e) => e.id === r)?.pinned === !0,
                v = 1 / 0,
                N = -1 / 0;
            (c.forEach((e) => {
                let { id: t, node: n } = e,
                    l = d.get(n);
                if (null == l) return;
                let s = l.left - u.left;
                if (
                    ((M = Math.min(M, s)),
                    i.find((e) => e.id === t)?.pinned === R && ((v = Math.min(v, s)), (N = Math.max(N, s + l.width))),
                    t === r)
                ) {
                    x.current = l.width;
                    return;
                }
                (A || (n.style.transition = K), I.push({ node: n, size: l.width, center: s + l.width / 2 }));
            }),
                (p.current = I),
                (b.current = Number.isFinite(M) ? M : 0),
                (m.current = l));
            let P = parseFloat(a.style.left);
            g.current = P;
            let T = Number.isFinite(v) ? v : P,
                j = Number.isFinite(N) ? N : P + x.current;
            ((y.current = Math.min(T, P)),
                (k.current = Math.max(j - x.current, P)),
                (w.current = i.findIndex((e) => e.id === r)),
                (E.current = P),
                (h.current = r),
                (a.style.zIndex = "1"),
                (a.style.boxShadow = "0 4px 12px var(--elevation-high)"));
        }, [])),
        {
            setStripRef: M,
            registerTabNode: A,
            setNewTabButtonRef: I,
            handleDragStart: O,
            handleDragMove: l.useCallback((e, n) => {
                if (h.current !== e) return;
                let r = t.current.get(e);
                if (null == r) return;
                let l = Math.min(Math.max(g.current + n - m.current, y.current), k.current);
                r.style.left = `${l}px`;
                let i = p.current,
                    s = x.current,
                    a = l + s,
                    u = g.current + s / 2,
                    o = 0;
                for (let e of i) {
                    let t = e.center > u ? a : l;
                    e.center < t && o++;
                }
                let c = C.current,
                    d = b.current,
                    f = d;
                (i.forEach((e, t) => {
                    (t === o && ((f = d), (d += s + c)), (e.node.style.left = `${d}px`), (d += e.size + c));
                }),
                    o >= i.length && (f = d),
                    (w.current = o),
                    (E.current = f));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = h.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = E.current;
                (0, _.Aq)(e, w.current);
                let i = !1;
                function s() {
                    if (i) return;
                    ((i = !0),
                        t.current.forEach(Q),
                        null != n.current && Q(n.current),
                        (h.current = null),
                        (p.current = []));
                    let e = new Map();
                    (t.current.forEach((t, n) => {
                        L.current.some((e) => e.id === n) && e.set(n, t.getBoundingClientRect().left);
                    }),
                        (R.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : 0 / 0;
                null == r || W() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? s()
                    : ((r.style.transition = K),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", s, { once: !0 }),
                      setTimeout(s, 200));
            }, []),
            handleCloseStart: B,
        }),
        [ea, eu] = l.useState(() => new Map()),
        [eo, ec] = l.useState(F);
    if (eo !== F) {
        let e = eo.filter((e) => !F.some((t) => t.id === e.id));
        (e.length > 0 &&
            eu((t) => {
                let n = new Map(t);
                return (e.forEach((e) => n.set(e.id, { tab: e, index: eo.indexOf(e) })), n);
            }),
            ec(F));
    }
    let ed = l.useRef(0);
    l.useLayoutEffect(() => {
        (ea.size > ed.current && es(), (ed.current = ea.size));
    }, [ea, es]);
    let ef = l.useCallback((e) => {
        eu((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!$) return null;
    let eh = X ? G.intl.formatToPlainString(G.t["I8l3Z+"], { count: Y }) : void 0,
        em = F.length > 1,
        eg = [...F];
    return (
        ea.forEach((e) => {
            let { tab: t, index: n } = e;
            return eg.splice(Math.min(n, eg.length), 0, t);
        }),
        (0, r.jsxs)("div", {
            ref: ee,
            className: J.$,
            role: "group",
            "aria-label": G.intl.string(G.t.es0PkU),
            onDoubleClick: () => o.Ay.maximize(),
            children: [
                eg.map((e) =>
                    (0, r.jsx)(
                        H,
                        {
                            tab: e,
                            isActive: e.id === U,
                            closable: em,
                            isExiting: ea.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === V,
                            registerTabNode: et,
                            onDragStart: er,
                            onDragMove: el,
                            onDragEnd: ei,
                            onExited: ef,
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)("div", {
                    ref: en,
                    className: J.Y,
                    children: (0, r.jsx)(a.A, {
                        icon: s.PlusLargeIcon,
                        onClick: () => (0, f.k)("new_tab_button"),
                        disabled: null != eh,
                        tooltip: eh ?? G.intl.string(G.t.GR7NIF),
                        tooltipKeyboardShortcut: null == eh ? c.T3.binds["0"] : void 0,
                    }),
                }),
            ],
        })
    );
}
