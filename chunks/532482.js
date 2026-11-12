(n.r(t), n.d(t, { default: () => et }));
var r = n(477900),
    l = n(582128),
    i = n(855986),
    s = n(663341),
    a = n(189252),
    u = n(945810),
    o = n(309010),
    c = n(287809),
    d = n(253400),
    f = n(300259),
    h = n(442325),
    m = n(716099),
    g = n(503698),
    p = n.n(g),
    b = n(646514),
    x = n(366605),
    C = n(214947),
    y = n(34188),
    k = n(577473),
    w = n(403581),
    E = n(27232),
    A = n(812993),
    I = n(866665),
    M = n(939249),
    R = n(834730),
    v = n(329921),
    N = n(789645),
    P = n(442433),
    S = n(571694),
    T = n(47167),
    j = n(713654),
    D = n(5180),
    z = n(682163),
    B = n(734057),
    L = n(71393),
    O = n(218461),
    _ = n(543465),
    F = n(114129);
n(712960);
var G = n(652215),
    U = n(792996),
    $ = n(133281);
function X() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let Y = new Map(),
    V = new Set(),
    K = !1,
    H = l.memo(function (e) {
        let {
                tab: t,
                isActive: s,
                closable: a,
                isExiting: u,
                isConnectedVoiceChannel: o,
                registerTabNode: d,
                onDragStart: m,
                onDragMove: g,
                onDragEnd: H,
                onExited: W,
            } = e,
            [Z, q] = l.useState(
                () => (K || ((K = !0), h.A.getTabs().forEach((e) => V.add(e.id))), !V.has(t.id) && !X()),
            );
        (l.useEffect(() => {
            V.add(t.id);
        }, [t.id]),
            l.useEffect(() => {
                if (!Z) return;
                let e = setTimeout(() => q(!1), 150);
                return () => clearTimeout(e);
            }, [Z]));
        let Q = (0, i.bG)([B.A], () => ("channel" === t.kind ? B.A.getChannel(t.channelId) : null), [t]),
            J = (0, i.bG)([L.A], () => ("channel" === t.kind ? L.A.getGuild(t.guildId) : null), [t]),
            ee = (0, i.bG)([c.default], () => (null != Q && Q.isDM() ? c.default.getUser(Q.getRecipientId()) : null), [
                Q,
            ]),
            et = (0, T.Ay)(Q);
        "channel" === t.kind && null != et && Y.set(t.channelId, et);
        let en = "route" === t.kind ? t.routeLabel : (et ?? Y.get(t.channelId) ?? U.intl.string(U.t.zLZPmk)),
            er = l.useCallback(() => {
                (0, F.ZD)(t.id, "tab_click");
            }, [t]),
            el = l.useCallback(
                (e) => {
                    !u && a && (0, F.f5)(t.id, e);
                },
                [u, a, t.id],
            );
        l.useEffect(() => {
            if (!u) return;
            if (X()) return void W(t.id);
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
                    (0, P.L3)(e, async () => {
                        let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                        return (n) => (0, r.jsx)(e, { ...n, tab: t, onRequestClose: () => el("context_menu") });
                    });
                },
                [t, el],
            ),
            [ea, eu] = l.useState(!1),
            eo = l.useCallback(
                (e, t) => {
                    (eu(!0), m(e, t));
                },
                [m],
            ),
            ec = l.useCallback(() => {
                (eu(!1), H());
            }, [H]),
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
            })({ itemId: t.id, onDragStart: eo, onDragMove: g, onDragEnd: ec }),
            ep = l.useCallback(
                (e) => {
                    ((ed.current = e), d(t.id, e));
                },
                [ed, d, t.id],
            ),
            {
                mentionCount: eb,
                isLowImportanceMention: ex,
                showUnreadDot: eC,
            } = (0, i.cf)(
                [O.Ay, _.Ay],
                () => {
                    if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                    let e = O.Ay.getMentionCount(t.channelId),
                        n = _.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                    return {
                        mentionCount: e,
                        isLowImportanceMention: O.Ay.getIsMentionLowImportance(t.channelId),
                        showUnreadDot: 0 === e && !n && O.Ay.hasUnread(t.channelId),
                    };
                },
                [t],
            ),
            ey = (0, r.jsx)(x.PinIcon, { size: "sm", color: "currentColor", className: $.PA }),
            ek = t.pinned && null == t.pinScope,
            ew = null;
        if (!ek) {
            if ("route" === t.kind)
                t.routePath === G.BVt.FRIENDS
                    ? (ew = (0, r.jsx)(C.FriendsIcon, { size: "sm", color: "currentColor", className: $.PA }))
                    : t.routePath === G.BVt.COLLECTIBLES_SHOP
                      ? (ew = (0, r.jsx)(y.ShopIcon, { size: "sm", color: "currentColor", className: $.PA }))
                      : t.routePath === G.BVt.QUEST_HOME
                        ? (ew = (0, r.jsx)(k.QuestsIcon, { size: "sm", color: "currentColor", className: $.PA }))
                        : t.routePath === G.BVt.APPLICATION_STORE &&
                          (ew = (0, r.jsx)(w.NitroWheelIcon, { size: "sm", color: "currentColor", className: $.PA }));
            else if ((0, D.ai)(t.guildId))
                ew = (0, r.jsx)(E.StarIcon, { size: "sm", color: "currentColor", className: $.PA });
            else if (null != Q && Q.isThread()) {
                let e = (0, j.gU)(Q);
                null != e && (ew = (0, r.jsx)(e, { size: "sm", color: "currentColor", className: $.PA }));
            } else if (null != J)
                ew = (0, r.jsx)(z.Ay, { guild: J, size: z.Ay.Sizes.SMOL, active: !0, className: $.$f });
            else if (null != Q && (Q.isDM() || Q.isGroupDM())) {
                let e = null != ee ? ee.getAvatarURL(void 0, 18) : (0, S.Y)(Q, 18);
                null != e &&
                    (ew = (0, r.jsx)("img", { className: $.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
            }
        }
        let eE = "channel" !== t.kind || null == J || null == Q || Q.isThread() ? null : (0, j.gU)(Q),
            eA = null;
        eb > 0 &&
            (eA = (0, r.jsx)("div", {
                className: $.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(A.hV, {
                    count: eb,
                    color: ex ? b.A.colors.BACKGROUND_MOD_STRONG.css : b.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            }));
        let eI =
            ek && null != J ? U.intl.formatToPlainString(U.t.HPMTD3, { channelName: en, guildName: J.name }) : void 0;
        return (0, r.jsxs)("div", {
            ref: ep,
            className: p()($.Mf, { [$.yR]: s, [$.MY]: Z, [$.nE]: u }),
            onPointerDown: ef,
            onPointerMove: eh,
            onPointerUp: em,
            onPointerCancel: em,
            onClickCapture: eg,
            onContextMenu: es,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsx)(I.m, {
                    position: "bottom",
                    text: eI,
                    shouldShow: !ea,
                    children: (0, r.jsxs)(M.D, {
                        className: $.eg,
                        onClick: er,
                        onAuxClick: ei,
                        "aria-current": s ? "page" : void 0,
                        children: [
                            (t.pinned || null != ew) &&
                                (0, r.jsxs)("span", { className: $.P0, children: [t.pinned && ey, ew, eA] }),
                            null != eE &&
                                (0, r.jsx)(eE, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: p()($.j1, { [$.Av]: o }),
                                }),
                            (0, r.jsxs)(R.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: $.HA,
                                children: [en, (0, r.jsx)("span", { className: $.Zi, "aria-hidden": !0 })],
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
                                      className: $.XE,
                                      "aria-hidden": !0,
                                      children: (0, r.jsx)(v.N, { variant: "neutral" }),
                                  }),
                              (0, r.jsx)(I.m, {
                                  position: "bottom",
                                  text: U.intl.string(U.t.In6PEK),
                                  keyboardShortcut: f.nK.binds["0"],
                                  ariaHidden: !0,
                                  children: (0, r.jsx)(M.D, {
                                      className: $.b,
                                      onClick: () => el("close_button"),
                                      onPointerDown: (e) => e.stopPropagation(),
                                      "aria-label": U.intl.formatToPlainString(U.t["A/PzIa"], { channelName: en }),
                                      children: (0, r.jsx)(N.XSmallIcon, { size: "sm" }),
                                  }),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    });
n(321073);
let W = "left 150ms ease-out";
function Z() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
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
    let e,
        t,
        n,
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
        S,
        T,
        j,
        D,
        z,
        B,
        L,
        O,
        _,
        G,
        {
            tabs: $,
            activeTabId: X,
            isVisible: Y,
            isAtMaxTabs: V,
            maxTabs: K,
        } = (0, i.cf)([h.A, u.Bt, c.default], () => ({
            tabs: h.A.getTabs(),
            activeTabId: h.A.getActiveTabId(),
            isVisible: h.A.isTabBarVisible(),
            isAtMaxTabs: h.A.isAtMaxTabs(),
            maxTabs: h.A.getMaxTabs(),
        })),
        et = (0, i.bG)([o.Ay], () => o.Ay.getVoiceChannelId()),
        {
            setStripRef: en,
            registerTabNode: er,
            setNewTabButtonRef: el,
            handleDragStart: ei,
            handleDragMove: es,
            handleDragEnd: ea,
            handleCloseStart: eu,
        } = ((e = l.useRef(null)),
        (t = l.useRef(new Map())),
        (n = l.useRef(null)),
        (g = l.useRef(null)),
        (p = l.useRef(0)),
        (b = l.useRef(0)),
        (x = l.useRef([])),
        (C = l.useRef(0)),
        (y = l.useRef(0)),
        (k = l.useRef(0)),
        (w = l.useRef(0)),
        (E = l.useRef(0)),
        (A = l.useRef(0)),
        (I = l.useRef(0)),
        (M = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (R = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (v = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (N = l.useRef(new Map())),
        (P = $.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != g.current) return;
            let e = t.current,
                n = N.current;
            e.forEach((e) => {
                ((e.style.transition = ""), (e.style.transform = ""));
            });
            let r = new Map();
            if (
                (e.forEach((e, t) => {
                    $.some((e) => e.id === t) && r.set(t, e.getBoundingClientRect().left);
                }),
                n.size === $.length && $.every((e) => n.has(e.id)) && !Z())
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
            N.current = r;
        }, [P]),
        (S = l.useRef(!1)),
        (T = l.useRef(!1)),
        (j = l.useRef(new Map())),
        (D = l.useCallback(() => {
            let e = new Map();
            return (
                j.current.forEach((t, n) => {
                    (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                }),
                e.forEach((e, t) => {
                    ((t.style.transition = ""), q(t, e));
                }),
                j.current.clear(),
                e
            );
        }, [])),
        (z = l.useCallback((e) => {
            if (Z()) return;
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
                        (j.current.delete(e), (e.style.transition = ""), Q(e));
                    }, 150);
                    j.current.set(e, t);
                }
            }
        }, [])),
        l.useEffect(() => {
            let e = j.current;
            return () => e.forEach((e) => clearTimeout(e));
        }, []),
        (B = l.useCallback(() => {
            ((T.current = !0), D());
            let e = new Map();
            (t.current.forEach((t) => {
                "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
            }),
                e.forEach((e, t) => q(t, e)));
        }, [D])),
        (L = l.useCallback(() => {
            ((T.current = !1), D());
            let e = new Map();
            (t.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), t.current.forEach(Q), z(e));
        }, [D, z])),
        l.useEffect(() => {
            function t(t) {
                if (!T.current) return;
                let n = e.current;
                if (null == n) return;
                let r = n.getBoundingClientRect(),
                    l =
                        t.clientX >= r.left - 32 &&
                        t.clientX <= r.right + 32 &&
                        t.clientY >= r.top - 32 &&
                        t.clientY <= r.bottom + 32;
                l !== S.current && ((S.current = l), l || L());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [L]),
        (O = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((S.current = n), n && B());
        }, [B])),
        (_ = l.useRef($)),
        l.useLayoutEffect(() => {
            _.current = $;
        }, [$]),
        (G = l.useCallback((r, l) => {
            let i = _.current,
                s = e.current,
                a = t.current.get(r);
            if (null == s || null == a) return;
            let u = s.getBoundingClientRect(),
                o = parseFloat(getComputedStyle(s).columnGap);
            k.current = Number.isFinite(o) ? o : 0;
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
            let h = Z(),
                m = [],
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
                    y.current = l.width;
                    return;
                }
                (h || (n.style.transition = W), m.push({ node: n, size: l.width, center: s + l.width / 2 }));
            }),
                (x.current = m),
                (C.current = Number.isFinite(M) ? M : 0),
                (p.current = l));
            let P = parseFloat(a.style.left);
            b.current = P;
            let S = Number.isFinite(v) ? v : P,
                T = Number.isFinite(N) ? N : P + y.current;
            ((w.current = Math.min(S, P)),
                (E.current = Math.max(T - y.current, P)),
                (A.current = i.findIndex((e) => e.id === r)),
                (I.current = P),
                (g.current = r),
                (a.style.zIndex = "1"),
                (a.style.boxShadow = "0 4px 12px var(--elevation-high)"));
        }, [])),
        {
            setStripRef: v,
            registerTabNode: M,
            setNewTabButtonRef: R,
            handleDragStart: G,
            handleDragMove: l.useCallback((e, n) => {
                if (g.current !== e) return;
                let r = t.current.get(e);
                if (null == r) return;
                let l = Math.min(Math.max(b.current + n - p.current, w.current), E.current);
                r.style.left = `${l}px`;
                let i = x.current,
                    s = y.current,
                    a = l + s,
                    u = b.current + s / 2,
                    o = 0;
                for (let e of i) {
                    let t = e.center > u ? a : l;
                    e.center < t && o++;
                }
                let c = k.current,
                    d = C.current,
                    f = d;
                (i.forEach((e, t) => {
                    (t === o && ((f = d), (d += s + c)), (e.node.style.left = `${d}px`), (d += e.size + c));
                }),
                    o >= i.length && (f = d),
                    (A.current = o),
                    (I.current = f));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = g.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = I.current;
                (0, F.Aq)(e, A.current);
                let i = !1;
                function s() {
                    if (i) return;
                    ((i = !0),
                        t.current.forEach(J),
                        null != n.current && J(n.current),
                        (g.current = null),
                        (x.current = []));
                    let e = new Map();
                    (t.current.forEach((t, n) => {
                        _.current.some((e) => e.id === n) && e.set(n, t.getBoundingClientRect().left);
                    }),
                        (N.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : 0 / 0;
                null == r || Z() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? s()
                    : ((r.style.transition = W),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", s, { once: !0 }),
                      setTimeout(s, 200));
            }, []),
            handleCloseStart: O,
        }),
        [eo, ec] = l.useState(() => new Map()),
        [ed, ef] = l.useState($);
    if (ed !== $) {
        let e = ed.filter((e) => !$.some((t) => t.id === e.id));
        (e.length > 0 &&
            ec((t) => {
                let n = new Map(t);
                return (e.forEach((e) => n.set(e.id, { tab: e, index: ed.indexOf(e) })), n);
            }),
            ef($));
    }
    let eh = l.useRef(0);
    l.useLayoutEffect(() => {
        (eo.size > eh.current && eu(), (eh.current = eo.size));
    }, [eo, eu]);
    let em = l.useCallback((e) => {
        ec((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!Y) return null;
    let eg = V ? U.intl.formatToPlainString(U.t["I8l3Z+"], { count: K }) : void 0,
        ep = $.length > 1,
        eb = [...$];
    return (
        eo.forEach((e) => {
            let { tab: t, index: n } = e;
            return eb.splice(Math.min(n, eb.length), 0, t);
        }),
        (0, r.jsxs)("div", {
            ref: en,
            className: ee.$,
            role: "group",
            "aria-label": U.intl.string(U.t.es0PkU),
            onDoubleClick: () => d.Ay.maximize(),
            children: [
                eb.map((e) =>
                    (0, r.jsx)(
                        H,
                        {
                            tab: e,
                            isActive: e.id === X,
                            closable: ep,
                            isExiting: eo.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === et,
                            registerTabNode: er,
                            onDragStart: ei,
                            onDragMove: es,
                            onDragEnd: ea,
                            onExited: em,
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)("div", {
                    ref: el,
                    className: ee.Y,
                    children: (0, r.jsx)(a.A, {
                        icon: s.PlusLargeIcon,
                        onClick: () => (0, m.k)("new_tab_button"),
                        disabled: null != eg,
                        tooltip: eg ?? U.intl.string(U.t.GR7NIF),
                        tooltipKeyboardShortcut: null == eg ? f.T3.binds["0"] : void 0,
                    }),
                }),
            ],
        })
    );
}
