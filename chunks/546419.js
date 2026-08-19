n.r(l), n.d(l, { default: () => V }), n(321073);
var t = n(477900),
    r = n(582128),
    s = n(503698),
    i = n.n(s),
    a = n(930235),
    c = n(651300),
    o = n(17928),
    u = n(661531),
    d = n(214947),
    f = n(34188),
    g = n(577473),
    h = n(27232),
    C = n(812993),
    x = n(939249),
    m = n(834730),
    b = n(366605),
    A = n(789645),
    p = n(663341),
    I = n(442433),
    j = n(571694),
    k = n(47167),
    N = n(174355),
    D = n(189252),
    y = n(945810),
    v = n(5180),
    E = n(548118),
    M = n(734057),
    R = n(71393),
    P = n(568548),
    B = n(543465),
    L = n(287809),
    T = n(19575),
    w = n(114129),
    z = n(442325),
    O = n(652215),
    S = n(375708),
    U = n(897572);
let G = "CHANNEL_TAB",
    H = new Map();
function _(e) {
    let {
            tab: l,
            index: s,
            isActive: p,
            closable: D,
            registerTabNode: y,
            onDragHover: T,
            onDragDrop: z,
            onDragEnd: _,
        } = e,
        V = (0, o.bG)([M.A], () => ("channel" === l.kind ? M.A.getChannel(l.channelId) : null), [l]),
        F = (0, o.bG)([R.A], () => ("channel" === l.kind ? R.A.getGuild(l.guildId) : null), [l]),
        K = (0, o.bG)([L.default], () => (null != V && V.isDM() ? L.default.getUser(V.getRecipientId()) : null), [V]),
        $ = (0, k.Ay)(V);
    "channel" === l.kind && null != $ && H.set(l.channelId, $);
    let W = "route" === l.kind ? l.routeLabel : ($ ?? H.get(l.channelId) ?? S.intl.string(S.t.zLZPmk)),
        X = r.useCallback(() => {
            (0, w.ZD)(l.id);
        }, [l.id]),
        Y = r.useCallback(() => {
            (0, w.f5)(l.id);
        }, [l.id]),
        Z = r.useCallback(
            (e) => {
                1 === e.button && D && (e.preventDefault(), (0, w.f5)(l.id));
            },
            [l.id, D],
        ),
        q = r.useCallback(
            (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await n.e("99401").then(n.bind(n, 774448));
                    return (n) => (0, t.jsx)(e, { ...n, tab: l });
                });
            },
            [l],
        ),
        J = r.useRef(null),
        [{ isDragging: Q }, ee] = (0, a.i)({
            type: G,
            item: () => ({ id: l.id, index: s }),
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: () => {
                _();
            },
        }),
        [, el] = (0, c.H)({
            accept: G,
            hover: (e, n) => {
                if (null == J.current || e.id === l.id) return;
                let t = J.current.getBoundingClientRect(),
                    r = (t.left + t.right) / 2,
                    s = n.getClientOffset();
                null != s && T(e.id, l.id, s.x < r ? "before" : "after");
            },
            drop: (e) => {
                z(e.id);
            },
        }),
        en = r.useCallback(
            (e) => {
                (J.current = e), ee(el(e)), y(l.id, e);
            },
            [ee, el, y, l.id],
        ),
        {
            mentionCount: et,
            isLowImportanceMention: er,
            showUnreadDot: es,
        } = (0, o.cf)([P.Ay, B.Ay], () => {
            if ("channel" !== l.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
            let e = P.Ay.getMentionCount(l.channelId),
                n = B.Ay.isGuildOrCategoryOrChannelMuted(l.guildId, l.channelId);
            return {
                mentionCount: e,
                isLowImportanceMention: P.Ay.getIsMentionLowImportance(l.channelId),
                showUnreadDot: 0 === e && !n && P.Ay.hasUnread(l.channelId),
            };
        }, [l]),
        ei = null;
    if ("route" === l.kind)
        l.routePath === O.BVt.FRIENDS
            ? (ei = (0, t.jsx)(d.$, { size: "xs", color: "currentColor", className: U.PA }))
            : l.routePath === O.BVt.COLLECTIBLES_SHOP
              ? (ei = (0, t.jsx)(f.U, { size: "xs", color: "currentColor", className: U.PA }))
              : l.routePath === O.BVt.QUEST_HOME &&
                (ei = (0, t.jsx)(g.r, { size: "xs", color: "currentColor", className: U.PA }));
    else if ((0, v.ai)(l.guildId)) ei = (0, t.jsx)(h.StarIcon, { size: "xs", color: "currentColor", className: U.PA });
    else if (null != V && V.isThread()) {
        let e = (0, N.gU)(V);
        null != e && (ei = (0, t.jsx)(e, { size: "xs", color: "currentColor", className: U.PA }));
    } else if (null != F) ei = (0, t.jsx)(E.Ay, { guild: F, size: E.Ay.Sizes.SMOL, active: !0, className: U.$f });
    else if (null != V && (V.isDM() || V.isGroupDM())) {
        let e = null != K ? K.getAvatarURL(void 0, 16) : (0, j.Y)(V, 16);
        null != e && (ei = (0, t.jsx)("img", { className: U.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let ea = null;
    return (
        et > 0 &&
            (ea = (0, t.jsx)("div", {
                className: U.WK,
                "aria-hidden": !0,
                children: (0, t.jsx)(C.hV, {
                    count: et,
                    color: er ? u.A.colors.BACKGROUND_MOD_STRONG.css : u.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            })),
        (0, t.jsxs)("div", {
            ref: en,
            className: i()(U.Mf, { [U.yR]: p, [U.VS]: Q }),
            onContextMenu: q,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, t.jsxs)(x.D, {
                    className: U.eg,
                    onClick: X,
                    onAuxClick: Z,
                    "aria-current": p ? "page" : void 0,
                    children: [
                        null != ei && (0, t.jsxs)("span", { className: U.P0, children: [ei, ea] }),
                        (0, t.jsx)(m.E, { variant: "text-sm/medium", lineClamp: 1, children: W }),
                    ],
                }),
                l.pinned
                    ? (0, t.jsxs)("div", {
                          className: U.n3,
                          "aria-hidden": !0,
                          children: [
                              (0, t.jsx)(b.t, { size: "xs", color: "currentColor" }),
                              !p && es && (0, t.jsx)(C.SC, { className: U.UU, color: u.A.colors.WHITE.css }),
                          ],
                      })
                    : D
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                !p &&
                                    es &&
                                    (0, t.jsx)("div", {
                                        className: U.XE,
                                        "aria-hidden": !0,
                                        children: (0, t.jsx)(C.SC, { color: u.A.colors.WHITE.css }),
                                    }),
                                (0, t.jsx)(x.D, {
                                    className: U.b,
                                    onClick: Y,
                                    "aria-label": S.intl.formatToPlainString(S.t["A/PzIa"], { channelName: W }),
                                    children: (0, t.jsx)(A.P, { size: "xs" }),
                                }),
                            ],
                        })
                      : null,
            ],
        })
    );
}
function V() {
    let {
            tabs: e,
            activeTabId: l,
            isVisible: n,
        } = (0, o.cf)([z.A, y.Bt], () => ({
            tabs: z.A.getTabs(),
            activeTabId: z.A.getActiveTabId(),
            isVisible: z.A.isTabBarVisible(),
        })),
        s = r.useRef(null),
        i = r.useRef(new Map()),
        a = r.useRef(null),
        u = r.useRef(null),
        [d, f] = r.useState(null),
        g = r.useCallback((e, l) => {
            null != l ? i.current.set(e, l) : i.current.delete(e);
        }, []),
        h = r.useCallback((e, l, n) => {
            let t = z.A.getTabs(),
                r = s.current,
                c = i.current.get(l);
            if (null == r || null == c) return;
            let o = t.findIndex((l) => l.id === e),
                d = t.findIndex((e) => e.id === l);
            if (-1 === o || -1 === d) return;
            let g = "before" === n ? d : d + 1,
                h = o < g ? g - 1 : g;
            if (h === u.current) return;
            (u.current = h), (a.current = { toIndex: h });
            let C = r.getBoundingClientRect(),
                x = c.getBoundingClientRect();
            f("before" === n ? x.left - C.left - 1 : x.right - C.left - 1);
        }, []),
        C = r.useCallback((e) => {
            let l = a.current;
            null != l && (0, w.Aq)(e, l.toIndex), (a.current = null), (u.current = null), f(null);
        }, []),
        x = r.useCallback(() => {
            (a.current = null), (u.current = null), f(null);
        }, []),
        [, m] = (0, c.H)({
            accept: G,
            drop: (e, l) => {
                l.didDrop() || C(e.id);
            },
        }),
        b = r.useCallback(
            (e) => {
                (s.current = e), m(e);
            },
            [m],
        ),
        A = e.map((e) => e.id).join(",");
    if (
        (r.useLayoutEffect(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let e = i.current;
            if (0 === e.size) return;
            let l = new Map();
            e.forEach((e, n) => {
                l.set(n, e.getBoundingClientRect().left);
            }),
                e.forEach((e) => {
                    (e.style.transition = ""), (e.style.transform = "");
                });
            let n = [];
            if (
                (e.forEach((e, t) => {
                    let r = l.get(t);
                    if (null == r) return;
                    let s = r - e.getBoundingClientRect().left;
                    Math.abs(s) > 0.5 && n.push({ node: e, dx: s });
                }),
                0 !== n.length)
            ) {
                for (let { node: e, dx: l } of n) e.style.transform = `translateX(${l}px)`;
                for (let { node: e } of (n[0].node.offsetHeight, n))
                    (e.style.transition = "transform 150ms ease-out"),
                        (e.style.transform = ""),
                        e.addEventListener(
                            "transitionend",
                            () => {
                                e.style.transition = "";
                            },
                            { once: !0 },
                        );
            }
        }, [A]),
        !n)
    )
        return null;
    let I = e.length > 1;
    return (0, t.jsxs)("div", {
        ref: b,
        className: U.$H,
        role: "group",
        "aria-label": S.intl.string(S.t.es0PkU),
        onDoubleClick: () => T.Ay.maximize(),
        children: [
            e.map((e, n) =>
                (0, t.jsx)(
                    _,
                    {
                        tab: e,
                        index: n,
                        isActive: e.id === l,
                        closable: I,
                        registerTabNode: g,
                        onDragHover: h,
                        onDragDrop: C,
                        onDragEnd: x,
                    },
                    e.id,
                ),
            ),
            (0, t.jsx)("div", {
                className: U.YB,
                children: (0, t.jsx)(D.A, {
                    icon: p.PlusLargeIcon,
                    onClick: w.JC,
                    "aria-label": S.intl.string(S.t.GR7NIF),
                }),
            }),
            null != d && (0, t.jsx)("div", { className: U.Lx, style: { left: d } }),
        ],
    });
}
