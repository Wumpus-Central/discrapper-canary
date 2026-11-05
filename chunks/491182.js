var i = n(477900),
    t = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(855986),
    o = n(473193),
    c = n(559106),
    d = n(346055),
    u = n(824994),
    h = n(176201),
    m = n(676608),
    g = n(317525),
    x = n(318626);
n.d(
    l,
    {},
    {
        A: function (e) {
            let {
                    className: l,
                    compact: n = !1,
                    contentOnly: s = !1,
                    zalgo: A = !0,
                    preview: j = !1,
                    disableInteraction: p = !1,
                    childrenRepliedMessage: v,
                    childrenExecutedCommand: N,
                    childrenHeader: I,
                    childrenSystemMessage: f,
                    childrenButtons: b,
                    childrenMessageContent: C,
                    childrenAccessories: y,
                    messageRef: E,
                    focusProps: _ = { offset: { left: 4, right: 4 } },
                    hasThread: M,
                    isSystemMessage: S,
                    hasReply: R,
                    author: w,
                    onMouseEnter: T,
                    onMouseLeave: O,
                    ...k
                } = e,
                G = (0, r.bG)([g.A], () =>
                    w?.guildId == null || w?.colorRoleId == null ? null : g.A.getRole(w.guildId, w.colorRoleId),
                ),
                P = (0, m.jV)(w?.guildId, G) && (0, h.kz)(w),
                [D, L] = t.useState(!1),
                U = t.useCallback(
                    (e) => {
                        (L(!0), T?.(e));
                    },
                    [T],
                ),
                V = t.useCallback(
                    (e) => {
                        (L(!1), O?.(e));
                    },
                    [O],
                ),
                $ = (0, u.W)({ location: "BaseMessage" }),
                H = t.useMemo(() => ({ animate: D, setAnimate: L }), [D]),
                z = (0, i.jsx)(o.C.Provider, {
                    value: H,
                    children: (0, i.jsx)(c.vN, {
                        ..._,
                        children: (0, i.jsxs)("div", {
                            className: a()(l, {
                                [x.D7]: P,
                                [x.e8]: $ && w?.displayNameStyles != null && w?.guildId == null,
                                [x.iE]: !0,
                                [x.kl]: s,
                                [x.oE]: n,
                                [x.VH]: j,
                                [x.E]: !n,
                                [x.GZ]: A,
                                [x.pR]: M,
                                [x.X4]: S,
                                [x.h8]: R,
                            }),
                            ref: E,
                            ...k,
                            role: "article",
                            onMouseEnter: U,
                            onMouseLeave: V,
                            children: [
                                v,
                                N,
                                (0, i.jsxs)("div", { className: x.PG, children: [f, I, null == f && C] }),
                                y,
                                null != b ? (0, i.jsx)("div", { className: x.UD, children: b }) : null,
                            ],
                        }),
                    }),
                });
            return p ? (0, i.jsx)(d.M, { children: z }) : z;
        },
    },
);
