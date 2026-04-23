"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    o = n(473193),
    c = n(187322),
    u = n(247928),
    d = n(824994),
    m = n(176201),
    g = n(676608),
    h = n(317525),
    p = n(334211);
let A = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: s = !1,
            zalgo: A = !0,
            preview: _ = !1,
            disableInteraction: f = !1,
            childrenRepliedMessage: v,
            childrenExecutedCommand: x,
            childrenHeader: C,
            childrenSystemMessage: I,
            childrenButtons: N,
            childrenMessageContent: E,
            childrenAccessories: b,
            messageRef: T,
            focusProps: S = { offset: { left: 4, right: 4 } },
            hasThread: y,
            isSystemMessage: j,
            hasReply: R,
            author: M,
            onMouseEnter: w,
            onMouseLeave: O,
            ...D
        } = e,
        L = (0, r.bG)([h.A], () =>
            M?.guildId == null || M?.colorRoleId == null ? null : h.A.getRole(M.guildId, M.colorRoleId),
        ),
        k = (0, g.jV)(M?.guildId, L) && (0, m.kz)(M),
        [G, U] = a.useState(!1),
        P = a.useCallback(
            (e) => {
                U(!0), w?.(e);
            },
            [w],
        ),
        V = a.useCallback(
            (e) => {
                U(!1), O?.(e);
            },
            [O],
        ),
        F = (0, d.W)({ location: "BaseMessage" }),
        H = (0, l.jsx)(o.C.Provider, {
            value: { animate: G, setAnimate: U },
            children: (0, l.jsx)(c.vN, {
                ...S,
                children: (0, l.jsxs)("div", {
                    className: i()(t, {
                        [p.D7]: k,
                        [p.e8]: F && M?.displayNameStyles != null && M?.guildId == null,
                        [p.iE]: !0,
                        [p.kl]: s,
                        [p.oE]: n,
                        [p.VH]: _,
                        [p.E]: !n,
                        [p.GZ]: A,
                        [p.pR]: y,
                        [p.X4]: j,
                        [p.h8]: R,
                    }),
                    ref: T,
                    ...D,
                    role: "article",
                    onMouseEnter: P,
                    onMouseLeave: V,
                    children: [
                        v,
                        x,
                        (0, l.jsxs)("div", { className: p.PG, children: [I, C, null == I && E] }),
                        b,
                        null != N ? (0, l.jsx)("div", { className: p.UD, children: N }) : null,
                    ],
                }),
            }),
        });
    return f ? (0, l.jsx)(u.M, { children: H }) : H;
};
