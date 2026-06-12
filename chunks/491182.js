n.d(l, { A: () => A });
var t = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(473193),
    c = n(187322),
    d = n(346055),
    u = n(824994),
    m = n(176201),
    h = n(676608),
    g = n(317525),
    x = n(334211);
let A = function (e) {
    let {
            className: l,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: A = !0,
            preview: p = !1,
            disableInteraction: j = !1,
            childrenRepliedMessage: v,
            childrenExecutedCommand: N,
            childrenHeader: f,
            childrenSystemMessage: C,
            childrenButtons: I,
            childrenMessageContent: b,
            childrenAccessories: y,
            messageRef: E,
            focusProps: _ = { offset: { left: 4, right: 4 } },
            hasThread: M,
            isSystemMessage: R,
            hasReply: w,
            author: S,
            onMouseEnter: T,
            onMouseLeave: G,
            ...O
        } = e,
        P = (0, r.bG)([g.A], () =>
            S?.guildId == null || S?.colorRoleId == null ? null : g.A.getRole(S.guildId, S.colorRoleId),
        ),
        k = (0, h.jV)(S?.guildId, P) && (0, m.kz)(S),
        [D, L] = i.useState(!1),
        V = i.useCallback(
            (e) => {
                L(!0), T?.(e);
            },
            [T],
        ),
        U = i.useCallback(
            (e) => {
                L(!1), G?.(e);
            },
            [G],
        ),
        H = (0, u.W)({ location: "BaseMessage" }),
        $ = (0, t.jsx)(o.C.Provider, {
            value: { animate: D, setAnimate: L },
            children: (0, t.jsx)(c.vN, {
                ..._,
                children: (0, t.jsxs)("div", {
                    className: s()(l, {
                        [x.D7]: k,
                        [x.e8]: H && S?.displayNameStyles != null && S?.guildId == null,
                        [x.iE]: !0,
                        [x.kl]: a,
                        [x.oE]: n,
                        [x.VH]: p,
                        [x.E]: !n,
                        [x.GZ]: A,
                        [x.pR]: M,
                        [x.X4]: R,
                        [x.h8]: w,
                    }),
                    ref: E,
                    ...O,
                    role: "article",
                    onMouseEnter: V,
                    onMouseLeave: U,
                    children: [
                        v,
                        N,
                        (0, t.jsxs)("div", { className: x.PG, children: [C, f, null == C && b] }),
                        y,
                        null != I ? (0, t.jsx)("div", { className: x.UD, children: I }) : null,
                    ],
                }),
            }),
        });
    return j ? (0, t.jsx)(d.M, { children: $ }) : $;
};
