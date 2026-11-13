(n.r(t), n.d(t, { default: () => et }));
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
    g = n.n(h),
    m = n(646514),
    p = n(366605),
    b = n(214947),
    x = n(34188),
    y = n(577473),
    C = n(403581),
    A = n(27232),
    k = n(812993),
    I = n(866665),
    E = n(939249),
    M = n(834730),
    w = n(329921),
    R = n(789645),
    v = n(442433),
    N = n(571694),
    P = n(47167),
    S = n(713654),
    T = n(5180),
    j = n(682163),
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
                handlePointerUp: eg,
                handleClickCapture: em,
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
                showUnreadDot: ey,
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
            eC = (0, r.jsx)(p.PinIcon, { size: "sm", color: "currentColor", className: U.PA }),
            eA = null;
        if (!t.pinned) {
            if ("route" === t.kind)
                t.routePath === F.BVt.FRIENDS
                    ? (eA = (0, r.jsx)(b.FriendsIcon, { size: "sm", color: "currentColor", className: U.PA }))
                    : t.routePath === F.BVt.COLLECTIBLES_SHOP
                      ? (eA = (0, r.jsx)(x.ShopIcon, { size: "sm", color: "currentColor", className: U.PA }))
                      : t.routePath === F.BVt.QUEST_HOME
                        ? (eA = (0, r.jsx)(y.QuestsIcon, { size: "sm", color: "currentColor", className: U.PA }))
                        : t.routePath === F.BVt.APPLICATION_STORE &&
                          (eA = (0, r.jsx)(C.NitroWheelIcon, { size: "sm", color: "currentColor", className: U.PA }));
            else if ((0, T.ai)(t.guildId))
                eA = (0, r.jsx)(A.StarIcon, { size: "sm", color: "currentColor", className: U.PA });
            else if (null != Q && Q.isThread()) {
                let e = (0, S.gU)(Q);
                null != e && (eA = (0, r.jsx)(e, { size: "sm", color: "currentColor", className: U.PA }));
            } else if (null != J)
                eA = (0, r.jsx)(j.Ay, { guild: J, size: j.Ay.Sizes.SMOL, active: !0, className: U.$f });
            else if (null != Q && (Q.isDM() || Q.isGroupDM())) {
                let e = null != ee ? ee.getAvatarURL(void 0, 18) : (0, N.Y)(Q, 18);
                null != e &&
                    (eA = (0, r.jsx)("img", { className: U.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
            }
        }
        let ek = "channel" !== t.kind || null == J || null == Q || Q.isThread() ? null : (0, S.gU)(Q),
            eI = null;
        eb > 0 &&
            (eI = (0, r.jsx)("div", {
                className: U.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(k.hV, {
                    count: eb,
                    color: ex ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            }));
        let eE = null != J ? G.intl.formatToPlainString(G.t.HPMTD3, { channelName: en, guildName: J.name }) : en;
        return (0, r.jsxs)("div", {
            ref: ep,
            className: g()(U.Mf, { [U.yR]: s, [U.MY]: Z, [U.nE]: u }),
            onPointerDown: ef,
            onPointerMove: eh,
            onPointerUp: eg,
            onPointerCancel: eg,
            onClickCapture: em,
            onContextMenu: es,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsx)(I.m, {
                    position: "bottom",
                    text: eE,
                    delay: 500,
                    shouldShow: !ea && !u,
                    ariaHidden: null == J,
                    children: (0, r.jsxs)(E.D, {
                        className: U.eg,
                        onClick: er,
                        onAuxClick: ei,
                        "aria-current": s ? "page" : void 0,
                        children: [
                            (t.pinned || null != eA) &&
                                (0, r.jsxs)("span", { className: U.P0, children: [t.pinned && eC, eA, eI] }),
                            null != ek &&
                                (0, r.jsx)(ek, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: g()(U.j1, { [U.Av]: o }),
                                }),
                            (0, r.jsxs)(M.E, {
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
                                  ey &&
                                  (0, r.jsx)("div", {
                                      className: U.XE,
                                      "aria-hidden": !0,
                                      children: (0, r.jsx)(w.N, { variant: "neutral" }),
                                  }),
                              (0, r.jsx)(I.m, {
                                  position: "bottom",
                                  text: G.intl.string(G.t.In6PEK),
                                  keyboardShortcut: c.nK.binds["0"],
                                  ariaHidden: !0,
                                  children: (0, r.jsx)(E.D, {
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
var K = n(333007),
    W = n(717421),
    Z = n(775602);
function q(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function Q(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function J(e) {
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
var ee = n(266553);
function et() {
    let {
            tabs: e,
            activeTabId: t,
            isVisible: n,
            isAtMaxTabs: h,
            maxTabs: g,
        } = (0, i.cf)([d.A], () => ({
            tabs: d.A.getTabs(),
            activeTabId: d.A.getActiveTabId(),
            isVisible: d.A.isTabBarVisible(),
            isAtMaxTabs: d.A.isAtMaxTabs(),
            maxTabs: d.A.getMaxTabs(),
        })),
        m = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId()),
        {
            setStripRef: p,
            registerTabNode: b,
            setNewTabButtonRef: x,
            handleDragStart: y,
            handleDragMove: C,
            handleDragEnd: A,
            handleCloseStart: k,
        } = (function (e) {
            let [, t] = (0, W.z)(() => ({ progress: 0, config: { duration: 150 } })),
                n = l.useRef(null);
            l.useEffect(() => () => n.current?.(!1), []);
            let r = l.useRef(null),
                i = l.useRef(new Map()),
                s = l.useRef(null),
                a = l.useRef(null),
                u = l.useRef(0),
                o = l.useRef(0),
                c = l.useRef([]),
                f = l.useRef(0),
                h = l.useRef(0),
                g = l.useRef(0),
                m = l.useRef(0),
                p = l.useRef(0),
                b = l.useRef(0),
                x = l.useRef(0),
                y = l.useCallback((e, t) => {
                    null != t ? i.current.set(e, t) : i.current.delete(e);
                }, []),
                C = l.useCallback((e) => {
                    s.current = e;
                }, []),
                A = l.useCallback((e) => {
                    r.current = e;
                }, []),
                k = l.useRef(new Map()),
                I = e.map((e) => e.id).join(",");
            l.useLayoutEffect(() => {
                if (null != a.current) return;
                let t = i.current,
                    n = k.current;
                t.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                });
                let r = new Map();
                if (
                    (t.forEach((t, n) => {
                        e.some((e) => e.id === n) && r.set(n, t.getBoundingClientRect().left);
                    }),
                    n.size === e.length && e.every((e) => n.has(e.id)) && !Z.Ay.useReducedMotion)
                ) {
                    let e = [];
                    if (
                        (t.forEach((t, l) => {
                            let i = n.get(l),
                                s = r.get(l);
                            if (null == i || null == s) return;
                            let a = i - s;
                            Math.abs(a) > 0.5 && e.push({ node: t, delta: a });
                        }),
                        e.length > 0)
                    ) {
                        for (let { node: t, delta: n } of e) t.style.transform = `translateX(${n}px)`;
                        for (let { node: t } of (e[0].node.offsetHeight, e))
                            ((t.style.transition = "transform 150ms ease-out"),
                                (t.style.transform = ""),
                                t.addEventListener(
                                    "transitionend",
                                    () => {
                                        t.style.transition = "";
                                    },
                                    { once: !0 },
                                ));
                    }
                }
                k.current = r;
            }, [I]);
            let E = l.useRef(!1),
                M = l.useRef(!1),
                w = l.useRef(new Map()),
                R = l.useCallback(() => {
                    let e = new Map();
                    return (
                        w.current.forEach((t, n) => {
                            (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                        }),
                        e.forEach((e, t) => {
                            ((t.style.transition = ""), q(t, e));
                        }),
                        w.current.clear(),
                        e
                    );
                }, []),
                v = l.useCallback((e) => {
                    if (Z.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let r = n.getBoundingClientRect().width;
                            Math.abs(r - e) > 0.5 && t.push({ node: n, from: e, to: r });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), q(e, n));
                        for (let { node: e, to: n } of (t[0].node.offsetWidth, t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), q(e, n));
                            let t = setTimeout(() => {
                                (w.current.delete(e), (e.style.transition = ""), Q(e));
                            }, 150);
                            w.current.set(e, t);
                        }
                    }
                }, []);
            l.useEffect(() => {
                let e = w.current;
                return () => e.forEach((e) => clearTimeout(e));
            }, []);
            let N = l.useCallback(() => {
                    ((M.current = !0), R());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => q(t, e)));
                }, [R]),
                P = l.useCallback(() => {
                    ((M.current = !1), R());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(Q), v(e));
                }, [R, v]);
            l.useEffect(() => {
                function e(e) {
                    if (!M.current) return;
                    let t = r.current;
                    if (null == t) return;
                    let n = t.getBoundingClientRect(),
                        l =
                            e.clientX >= n.left - 32 &&
                            e.clientX <= n.right + 32 &&
                            e.clientY >= n.top - 32 &&
                            e.clientY <= n.bottom + 32;
                    l !== E.current && ((E.current = l), l || P());
                }
                return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
            }, [P]);
            let S = l.useCallback(() => {
                    let e = r.current,
                        t = null != e && e.matches(":hover");
                    ((E.current = t), t && N());
                }, [N]),
                T = l.useRef(e);
            l.useLayoutEffect(() => {
                T.current = e;
            }, [e]);
            let j = l.useCallback((e, t) => {
                let n = T.current,
                    l = r.current,
                    d = i.current.get(e);
                if (null == l || null == d) return;
                let y = l.getBoundingClientRect(),
                    C = parseFloat(getComputedStyle(l).columnGap);
                g.current = Number.isFinite(C) ? C : 0;
                let A = [];
                n.forEach((e) => {
                    let t = i.current.get(e.id);
                    null != t && A.push({ id: e.id, node: t });
                });
                let k = new Map();
                A.forEach((e) => {
                    let { node: t } = e;
                    return k.set(t, t.getBoundingClientRect());
                });
                let I = s.current;
                (null != I && k.set(I, I.getBoundingClientRect()),
                    k.forEach((e, t) => {
                        ((t.style.position = "absolute"),
                            (t.style.boxSizing = "border-box"),
                            (t.style.left = `${e.left - y.left}px`),
                            (t.style.top = `${e.top - y.top}px`),
                            (t.style.width = `${e.width}px`),
                            (t.style.height = `${e.height}px`),
                            (t.style.margin = "0"));
                    }));
                let E = Z.Ay.useReducedMotion,
                    M = [],
                    w = 1 / 0,
                    R = n.find((t) => t.id === e)?.pinned === !0,
                    v = 1 / 0,
                    N = -1 / 0;
                (A.forEach((t) => {
                    let { id: r, node: l } = t,
                        i = k.get(l);
                    if (null == i) return;
                    let s = i.left - y.left;
                    if (
                        ((w = Math.min(w, s)),
                        n.find((e) => e.id === r)?.pinned === R &&
                            ((v = Math.min(v, s)), (N = Math.max(N, s + i.width))),
                        r === e)
                    ) {
                        h.current = i.width;
                        return;
                    }
                    (E || (l.style.transition = "left 150ms ease-out"),
                        M.push({ node: l, size: i.width, center: s + i.width / 2 }));
                }),
                    (c.current = M),
                    (f.current = Number.isFinite(w) ? w : 0),
                    (u.current = t));
                let P = parseFloat(d.style.left);
                o.current = P;
                let S = Number.isFinite(v) ? v : P,
                    j = Number.isFinite(N) ? N : P + h.current;
                ((m.current = Math.min(S, P)),
                    (p.current = Math.max(j - h.current, P)),
                    (b.current = n.findIndex((t) => t.id === e)),
                    (x.current = P),
                    (a.current = e),
                    (d.style.zIndex = "1"),
                    (d.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            }, []);
            return {
                setStripRef: A,
                registerTabNode: y,
                setNewTabButtonRef: C,
                handleDragStart: j,
                handleDragMove: l.useCallback((e, t) => {
                    if (a.current !== e) return;
                    let n = i.current.get(e);
                    if (null == n) return;
                    let r = Math.min(Math.max(o.current + t - u.current, m.current), p.current);
                    n.style.left = `${r}px`;
                    let l = c.current,
                        s = h.current,
                        d = r + s,
                        y = o.current + s / 2,
                        C = 0;
                    for (let e of l) {
                        let t = e.center > y ? d : r;
                        e.center < t && C++;
                    }
                    let A = g.current,
                        k = f.current,
                        I = k;
                    (l.forEach((e, t) => {
                        (t === C && ((I = k), (k += s + A)), (e.node.style.left = `${k}px`), (k += e.size + A));
                    }),
                        C >= l.length && (I = k),
                        (b.current = C),
                        (x.current = I));
                }, []),
                handleDragEnd: l.useCallback(async () => {
                    let e = a.current;
                    if (null == e) return;
                    let r = i.current.get(e),
                        l = null != r ? parseFloat(r.style.left) : 0 / 0,
                        u = x.current,
                        o = T.current.filter((t) => t.id !== e).map((e) => e.id),
                        f = o.slice(b.current),
                        h = o.slice(0, b.current).reverse(),
                        g = !1,
                        m = function () {
                            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            if (g) return;
                            ((g = !0), (n.current = null));
                            let r = d.A.getTabs(),
                                l = r.find((t) => t.id === e),
                                u = r.filter((t) => t.id !== e),
                                o = (e) => u.some((t) => t.id === e && t.pinned === l?.pinned),
                                m = f.find(o),
                                p = h.find(o),
                                b =
                                    null != m
                                        ? u.findIndex((e) => e.id === m)
                                        : null != p
                                          ? u.findIndex((e) => e.id === p) + 1
                                          : u.length,
                                x = () => (0, _.Aq)(e, b);
                            (t ? (0, K.flushSync)(x) : x(),
                                i.current.forEach(J),
                                null != s.current && J(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                T.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (k.current = y));
                        };
                    (null == r ||
                        !Number.isFinite(l) ||
                        Z.Ay.useReducedMotion ||
                        ((n.current = m),
                        await t({
                            from: { progress: 0 },
                            to: { progress: 1 },
                            reset: !0,
                            onChange: (e) => {
                                let { progress: t } = e;
                                g || (r.style.left = `${l + (u - l) * t}px`);
                            },
                        })),
                        m());
                }, [t]),
                handleCloseStart: S,
            };
        })(e),
        [I, E] = l.useState(() => new Map()),
        [M, w] = l.useState(e);
    if (M !== e) {
        let t = M.filter((t) => !e.some((e) => e.id === t.id));
        (t.length > 0 &&
            E((e) => {
                let n = new Map(e);
                return (t.forEach((e) => n.set(e.id, { tab: e, index: M.indexOf(e) })), n);
            }),
            w(e));
    }
    let R = l.useRef(0);
    l.useLayoutEffect(() => {
        (I.size > R.current && k(), (R.current = I.size));
    }, [I, k]);
    let v = l.useCallback((e) => {
        E((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!n) return null;
    let N = h ? G.intl.formatToPlainString(G.t["I8l3Z+"], { count: g }) : void 0,
        P = e.length > 1,
        S = [...e];
    return (
        I.forEach((e) => {
            let { tab: t, index: n } = e;
            return S.splice(Math.min(n, S.length), 0, t);
        }),
        (0, r.jsxs)("div", {
            ref: p,
            className: ee.$,
            role: "group",
            "aria-label": G.intl.string(G.t.es0PkU),
            onDoubleClick: () => o.Ay.maximize(),
            children: [
                S.map((e) =>
                    (0, r.jsx)(
                        H,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: P,
                            isExiting: I.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === m,
                            registerTabNode: b,
                            onDragStart: y,
                            onDragMove: C,
                            onDragEnd: A,
                            onExited: v,
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)("div", {
                    ref: x,
                    className: ee.Y,
                    children: (0, r.jsx)(a.A, {
                        icon: s.PlusLargeIcon,
                        onClick: () => (0, f.k)("new_tab_button"),
                        disabled: null != N,
                        tooltip: N ?? G.intl.string(G.t.GR7NIF),
                        tooltipKeyboardShortcut: null == N ? c.T3.binds["0"] : void 0,
                    }),
                }),
            ],
        })
    );
}
