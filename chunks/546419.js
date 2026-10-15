(n.r(l), n.d(l, { default: () => F }), n(321073));
var t = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(739822),
    u = n(949152),
    c = n(17928),
    o = n(661531),
    d = n(214947),
    f = n(34188),
    g = n(577473),
    h = n(27232),
    x = n(812993),
    C = n(939249),
    m = n(834730),
    b = n(366605),
    A = n(498032),
    p = n(789645),
    N = n(663341),
    I = n(442433),
    j = n(571694),
    k = n(47167),
    D = n(713654),
    v = n(189252),
    y = n(945810),
    M = n(5180),
    R = n(548118),
    P = n(734057),
    B = n(71393),
    E = n(573163),
    L = n(543465),
    T = n(287809),
    w = n(19575),
    z = n(114129),
    O = n(442325),
    U = n(652215),
    S = n(105292),
    G = n(266553);
let _ = "CHANNEL_TAB",
    H = new Map();
function V(e) {
    let {
            tab: l,
            index: i,
            isActive: N,
            closable: v,
            registerTabNode: y,
            onDragHover: w,
            onDragDrop: O,
            onDragEnd: V,
        } = e,
        F = (0, c.bG)([P.A], () => ("channel" === l.kind ? P.A.getChannel(l.channelId) : null), [l]),
        K = (0, c.bG)([B.A], () => ("channel" === l.kind ? B.A.getGuild(l.guildId) : null), [l]),
        $ = (0, c.bG)([T.default], () => (null != F && F.isDM() ? T.default.getUser(F.getRecipientId()) : null), [F]),
        X = (0, k.Ay)(F);
    "channel" === l.kind && null != X && H.set(l.channelId, X);
    let Y = "route" === l.kind ? l.routeLabel : (X ?? H.get(l.channelId) ?? S.intl.string(S.t.zLZPmk)),
        Z = r.useCallback(() => {
            (0, z.ZD)(l.id);
        }, [l.id]),
        q = r.useCallback(() => {
            (0, z.f5)(l.id);
        }, [l.id]),
        J = r.useCallback(
            (e) => {
                1 === e.button && v && (e.preventDefault(), (0, z.f5)(l.id));
            },
            [l.id, v],
        ),
        Q = r.useCallback(
            (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await n.e("99401").then(n.bind(n, 774448));
                    return (n) => (0, t.jsx)(e, { ...n, tab: l });
                });
            },
            [l],
        ),
        W = r.useRef(null),
        [{ isDragging: ee }, el] = (0, s.i)({
            type: _,
            item: () => ({ id: l.id, index: i }),
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: () => {
                V();
            },
        }),
        [, en] = (0, u.H)({
            accept: _,
            hover: (e, n) => {
                if (null == W.current || e.id === l.id) return;
                let t = W.current.getBoundingClientRect(),
                    r = (t.left + t.right) / 2,
                    i = n.getClientOffset();
                null != i && w(e.id, l.id, i.x < r ? "before" : "after");
            },
            drop: (e) => {
                O(e.id);
            },
        }),
        et = r.useCallback(
            (e) => {
                ((W.current = e), el(en(e)), y(l.id, e));
            },
            [el, en, y, l.id],
        ),
        {
            mentionCount: er,
            isLowImportanceMention: ei,
            showUnreadDot: ea,
        } = (0, c.cf)(
            [E.Ay, L.Ay],
            () => {
                if ("channel" !== l.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = E.Ay.getMentionCount(l.channelId),
                    n = L.Ay.isGuildOrCategoryOrChannelMuted(l.guildId, l.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: E.Ay.getIsMentionLowImportance(l.channelId),
                    showUnreadDot: 0 === e && !n && E.Ay.hasUnread(l.channelId),
                };
            },
            [l],
        ),
        es = null;
    if ("route" === l.kind)
        l.routePath === U.BVt.FRIENDS
            ? (es = (0, t.jsx)(d.$, { size: "xs", color: "currentColor", className: G.PA }))
            : l.routePath === U.BVt.COLLECTIBLES_SHOP
              ? (es = (0, t.jsx)(f.U, { size: "xs", color: "currentColor", className: G.PA }))
              : l.routePath === U.BVt.QUEST_HOME &&
                (es = (0, t.jsx)(g.r, { size: "xs", color: "currentColor", className: G.PA }));
    else if ((0, M.ai)(l.guildId)) es = (0, t.jsx)(h.StarIcon, { size: "xs", color: "currentColor", className: G.PA });
    else if (null != F && F.isThread()) {
        let e = (0, D.gU)(F);
        null != e && (es = (0, t.jsx)(e, { size: "xs", color: "currentColor", className: G.PA }));
    } else if (null != K) es = (0, t.jsx)(R.Ay, { guild: K, size: R.Ay.Sizes.SMOL, active: !0, className: G.$f });
    else if (null != F && (F.isDM() || F.isGroupDM())) {
        let e = null != $ ? $.getAvatarURL(void 0, 16) : (0, j.Y)(F, 16);
        null != e && (es = (0, t.jsx)("img", { className: G.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let eu = null;
    return (
        er > 0 &&
            (eu = (0, t.jsx)("div", {
                className: G.WK,
                "aria-hidden": !0,
                children: (0, t.jsx)(x.hV, {
                    count: er,
                    color: ei ? o.A.colors.BACKGROUND_MOD_STRONG.css : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            })),
        (0, t.jsxs)("div", {
            ref: et,
            className: a()(G.Mf, { [G.yR]: N, [G.VS]: ee }),
            onContextMenu: Q,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, t.jsxs)(C.D, {
                    className: G.eg,
                    onClick: Z,
                    onAuxClick: J,
                    "aria-current": N ? "page" : void 0,
                    children: [
                        null != es && (0, t.jsxs)("span", { className: G.P0, children: [es, eu] }),
                        (0, t.jsx)(m.E, { variant: "text-sm/medium", lineClamp: 1, children: Y }),
                    ],
                }),
                l.pinned
                    ? (0, t.jsxs)("div", {
                          className: G.n3,
                          "aria-hidden": !0,
                          children: [
                              (0, t.jsx)(b.t, { size: "xs", color: "currentColor" }),
                              !N && ea && (0, t.jsx)(A.N, { className: G.UU, variant: "neutral" }),
                          ],
                      })
                    : v
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                !N &&
                                    ea &&
                                    (0, t.jsx)("div", {
                                        className: G.XE,
                                        "aria-hidden": !0,
                                        children: (0, t.jsx)(A.N, { variant: "neutral" }),
                                    }),
                                (0, t.jsx)(C.D, {
                                    className: G.b,
                                    onClick: q,
                                    "aria-label": S.intl.formatToPlainString(S.t["A/PzIa"], { channelName: Y }),
                                    children: (0, t.jsx)(p.P, { size: "xs" }),
                                }),
                            ],
                        })
                      : null,
            ],
        })
    );
}
function F() {
    let {
            tabs: e,
            activeTabId: l,
            isVisible: n,
        } = (0, c.cf)([O.A, y.Bt], () => ({
            tabs: O.A.getTabs(),
            activeTabId: O.A.getActiveTabId(),
            isVisible: O.A.isTabBarVisible(),
        })),
        i = r.useRef(null),
        a = r.useRef(new Map()),
        s = r.useRef(null),
        o = r.useRef(null),
        [d, f] = r.useState(null),
        g = r.useCallback((e, l) => {
            null != l ? a.current.set(e, l) : a.current.delete(e);
        }, []),
        h = r.useCallback((e, l, n) => {
            let t = O.A.getTabs(),
                r = i.current,
                u = a.current.get(l);
            if (null == r || null == u) return;
            let c = t.findIndex((l) => l.id === e),
                d = t.findIndex((e) => e.id === l);
            if (-1 === c || -1 === d) return;
            let g = "before" === n ? d : d + 1,
                h = c < g ? g - 1 : g;
            if (h === o.current) return;
            ((o.current = h), (s.current = { toIndex: h }));
            let x = r.getBoundingClientRect(),
                C = u.getBoundingClientRect();
            f("before" === n ? C.left - x.left - 1 : C.right - x.left - 1);
        }, []),
        x = r.useCallback((e) => {
            let l = s.current;
            (null != l && (0, z.Aq)(e, l.toIndex), (s.current = null), (o.current = null), f(null));
        }, []),
        C = r.useCallback(() => {
            ((s.current = null), (o.current = null), f(null));
        }, []),
        [, m] = (0, u.H)({
            accept: _,
            drop: (e, l) => {
                l.didDrop() || x(e.id);
            },
        }),
        b = r.useCallback(
            (e) => {
                ((i.current = e), m(e));
            },
            [m],
        ),
        A = e.map((e) => e.id).join(",");
    if (
        (r.useLayoutEffect(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let e = a.current;
            if (0 === e.size) return;
            let l = new Map();
            (e.forEach((e, n) => {
                l.set(n, e.getBoundingClientRect().left);
            }),
                e.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                }));
            let n = [];
            if (
                (e.forEach((e, t) => {
                    let r = l.get(t);
                    if (null == r) return;
                    let i = r - e.getBoundingClientRect().left;
                    Math.abs(i) > 0.5 && n.push({ node: e, dx: i });
                }),
                0 !== n.length)
            ) {
                for (let { node: e, dx: l } of n) e.style.transform = `translateX(${l}px)`;
                for (let { node: e } of (n[0].node.offsetHeight, n))
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
        }, [A]),
        !n)
    )
        return null;
    let p = e.length > 1;
    return (0, t.jsxs)("div", {
        ref: b,
        className: G.$H,
        role: "group",
        "aria-label": S.intl.string(S.t.es0PkU),
        onDoubleClick: () => w.Ay.maximize(),
        children: [
            e.map((e, n) =>
                (0, t.jsx)(
                    V,
                    {
                        tab: e,
                        index: n,
                        isActive: e.id === l,
                        closable: p,
                        registerTabNode: g,
                        onDragHover: h,
                        onDragDrop: x,
                        onDragEnd: C,
                    },
                    e.id,
                ),
            ),
            (0, t.jsx)("div", {
                className: G.YB,
                children: (0, t.jsx)(v.A, {
                    icon: N.PlusLargeIcon,
                    onClick: z.JC,
                    "aria-label": S.intl.string(S.t.GR7NIF),
                }),
            }),
            null != d && (0, t.jsx)("div", { className: G.Lx, style: { left: d } }),
        ],
    });
}
