var i = n(477900),
    t = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(473193),
    d = n(559106),
    u = n(346055),
    c = n(824994),
    m = n(176201),
    h = n(676608),
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
                    contentOnly: a = !1,
                    zalgo: p = !0,
                    preview: A = !1,
                    disableInteraction: j = !1,
                    childrenRepliedMessage: v,
                    childrenExecutedCommand: I,
                    childrenHeader: N,
                    childrenSystemMessage: f,
                    childrenButtons: b,
                    childrenMessageContent: C,
                    childrenAccessories: y,
                    messageRef: E,
                    focusProps: _ = { offset: { left: 4, right: 4 } },
                    hasThread: M,
                    isSystemMessage: R,
                    hasReply: T,
                    author: w,
                    onMouseEnter: S,
                    onMouseLeave: O,
                    ...P
                } = e,
                k = (0, r.bG)([g.A], () =>
                    w?.guildId == null || w?.colorRoleId == null ? null : g.A.getRole(w.guildId, w.colorRoleId),
                ),
                G = (0, h.jV)(w?.guildId, k) && (0, m.kz)(w),
                [D, L] = t.useState(!1),
                U = t.useCallback(
                    (e) => {
                        (L(!0), S?.(e));
                    },
                    [S],
                ),
                $ = t.useCallback(
                    (e) => {
                        (L(!1), O?.(e));
                    },
                    [O],
                ),
                V = (0, c.W)({ location: "BaseMessage" }),
                H = t.useMemo(() => ({ animate: D, setAnimate: L }), [D]),
                B = (0, i.jsx)(o.C.Provider, {
                    value: H,
                    children: (0, i.jsx)(d.vN, {
                        ..._,
                        children: (0, i.jsxs)("div", {
                            className: s()(l, {
                                [x.D7]: G,
                                [x.e8]: V && w?.displayNameStyles != null && w?.guildId == null,
                                [x.iE]: !0,
                                [x.kl]: a,
                                [x.oE]: n,
                                [x.VH]: A,
                                [x.E]: !n,
                                [x.GZ]: p,
                                [x.pR]: M,
                                [x.X4]: R,
                                [x.h8]: T,
                            }),
                            ref: E,
                            ...P,
                            role: "article",
                            onMouseEnter: U,
                            onMouseLeave: $,
                            children: [
                                v,
                                I,
                                (0, i.jsxs)("div", { className: x.PG, children: [f, N, null == f && C] }),
                                y,
                                null != b ? (0, i.jsx)("div", { className: x.UD, children: b }) : null,
                            ],
                        }),
                    }),
                });
            return j ? (0, i.jsx)(u.M, { children: B }) : B;
        },
    },
);
