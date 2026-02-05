"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(473193),
    u = n(397927),
    c = n(824994),
    d = n(176201),
    _ = n(676608),
    f = n(317525),
    p = n(679740);
let h = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: h = !0,
            preview: m = !1,
            disableInteraction: g = !1,
            childrenRepliedMessage: E,
            childrenExecutedCommand: A,
            childrenHeader: I,
            childrenSystemMessage: T,
            childrenButtons: y,
            childrenMessageContent: S,
            childrenAccessories: v,
            messageRef: C,
            focusProps: b = { offset: { left: 4, right: 4 } },
            hasThread: N,
            isSystemMessage: R,
            hasReply: O,
            author: D,
            onMouseEnter: L,
            onMouseLeave: w,
            ...x
        } = e,
        P = (0, o.bG)([f.A], () =>
            D?.guildId == null || D?.colorRoleId == null ? null : f.A.getRole(D.guildId, D.colorRoleId),
        ),
        M = (0, _.jV)(D?.guildId, P) && (0, d.kz)(D),
        [k, U] = i.useState(!1),
        G = i.useCallback(
            (e) => {
                U(!0), L?.(e);
            },
            [L],
        ),
        V = i.useCallback(
            (e) => {
                U(!1), w?.(e);
            },
            [w],
        ),
        F = (0, c.W)({ location: "BaseMessage" }),
        B = (0, r.jsx)(l.C.Provider, {
            value: { animate: k, setAnimate: U },
            children: (0, r.jsx)(u.vN3, {
                ...b,
                children: (0, r.jsxs)("div", {
                    className: s()(t, {
                        [p.D7]: M,
                        [p.e8]: F && D?.displayNameStyles != null && D?.guildId == null,
                        [p.iE]: !0,
                        [p.kl]: a,
                        [p.oE]: n,
                        [p.VH]: m,
                        [p.E]: !n,
                        [p.GZ]: h,
                        [p.pR]: N,
                        [p.X4]: R,
                        [p.h8]: O,
                    }),
                    ref: C,
                    ...x,
                    role: "article",
                    onMouseEnter: G,
                    onMouseLeave: V,
                    children: [
                        E,
                        A,
                        (0, r.jsxs)("div", { className: p.PG, children: [T, I, null == T && S] }),
                        v,
                        null != y ? (0, r.jsx)("div", { className: p.UD, children: y }) : null,
                    ],
                }),
            }),
        });
    return g ? (0, r.jsx)(u.M1G, { children: B }) : B;
};
