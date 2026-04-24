n.d(l, { A: () => v });
var t = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(17928),
    o = n(473193),
    u = n(187322),
    d = n(247928),
    c = n(824994),
    g = n(176201),
    h = n(676608),
    m = n(317525),
    A = n(334211);
let v = function (e) {
    let {
            className: l,
            compact: n = !1,
            contentOnly: i = !1,
            zalgo: v = !0,
            preview: f = !1,
            disableInteraction: x = !1,
            childrenRepliedMessage: p,
            childrenExecutedCommand: j,
            childrenHeader: C,
            childrenSystemMessage: N,
            childrenButtons: I,
            childrenMessageContent: _,
            childrenAccessories: E,
            messageRef: b,
            focusProps: M = { offset: { left: 4, right: 4 } },
            hasThread: S,
            isSystemMessage: y,
            hasReply: w,
            author: T,
            onMouseEnter: R,
            onMouseLeave: O,
            ...G
        } = e,
        D = (0, r.bG)([m.A], () =>
            T?.guildId == null || T?.colorRoleId == null ? null : m.A.getRole(T.guildId, T.colorRoleId),
        ),
        L = (0, h.jV)(T?.guildId, D) && (0, g.kz)(T),
        [P, V] = a.useState(!1),
        U = a.useCallback(
            (e) => {
                V(!0), R?.(e);
            },
            [R],
        ),
        B = a.useCallback(
            (e) => {
                V(!1), O?.(e);
            },
            [O],
        ),
        k = (0, c.W)({ location: "BaseMessage" }),
        H = (0, t.jsx)(o.C.Provider, {
            value: { animate: P, setAnimate: V },
            children: (0, t.jsx)(u.vN, {
                ...M,
                children: (0, t.jsxs)("div", {
                    className: s()(l, {
                        [A.D7]: L,
                        [A.e8]: k && T?.displayNameStyles != null && T?.guildId == null,
                        [A.iE]: !0,
                        [A.kl]: i,
                        [A.oE]: n,
                        [A.VH]: f,
                        [A.E]: !n,
                        [A.GZ]: v,
                        [A.pR]: S,
                        [A.X4]: y,
                        [A.h8]: w,
                    }),
                    ref: b,
                    ...G,
                    role: "article",
                    onMouseEnter: U,
                    onMouseLeave: B,
                    children: [
                        p,
                        j,
                        (0, t.jsxs)("div", { className: A.PG, children: [N, C, null == N && _] }),
                        E,
                        null != I ? (0, t.jsx)("div", { className: A.UD, children: I }) : null,
                    ],
                }),
            }),
        });
    return x ? (0, t.jsx)(d.M, { children: H }) : H;
};
