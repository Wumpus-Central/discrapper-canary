l.d(n, { A: () => A });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    o = l(473193),
    c = l(259678),
    d = l(346055),
    u = l(824994),
    m = l(176201),
    h = l(676608),
    g = l(317525),
    x = l(281867);
let A = function (e) {
    let {
            className: n,
            compact: l = !1,
            contentOnly: a = !1,
            zalgo: A = !0,
            preview: v = !1,
            disableInteraction: p = !1,
            childrenRepliedMessage: j,
            childrenExecutedCommand: f,
            childrenHeader: N,
            childrenSystemMessage: I,
            childrenButtons: C,
            childrenMessageContent: b,
            childrenAccessories: y,
            messageRef: E,
            focusProps: M = { offset: { left: 4, right: 4 } },
            hasThread: _,
            isSystemMessage: R,
            hasReply: S,
            author: T,
            onMouseEnter: w,
            onMouseLeave: O,
            ...G
        } = e,
        k = (0, r.bG)([g.A], () =>
            T?.guildId == null || T?.colorRoleId == null ? null : g.A.getRole(T.guildId, T.colorRoleId),
        ),
        P = (0, h.jV)(T?.guildId, k) && (0, m.kz)(T),
        [D, L] = i.useState(!1),
        V = i.useCallback(
            (e) => {
                L(!0), w?.(e);
            },
            [w],
        ),
        U = i.useCallback(
            (e) => {
                L(!1), O?.(e);
            },
            [O],
        ),
        H = (0, u.W)({ location: "BaseMessage" }),
        $ = (0, t.jsx)(o.C.Provider, {
            value: { animate: D, setAnimate: L },
            children: (0, t.jsx)(c.vN, {
                ...M,
                children: (0, t.jsxs)("div", {
                    className: s()(n, {
                        [x.D7]: P,
                        [x.e8]: H && T?.displayNameStyles != null && T?.guildId == null,
                        [x.iE]: !0,
                        [x.kl]: a,
                        [x.oE]: l,
                        [x.VH]: v,
                        [x.E]: !l,
                        [x.GZ]: A,
                        [x.pR]: _,
                        [x.X4]: R,
                        [x.h8]: S,
                    }),
                    ref: E,
                    ...G,
                    role: "article",
                    onMouseEnter: V,
                    onMouseLeave: U,
                    children: [
                        j,
                        f,
                        (0, t.jsxs)("div", { className: x.PG, children: [I, N, null == I && b] }),
                        y,
                        null != C ? (0, t.jsx)("div", { className: x.UD, children: C }) : null,
                    ],
                }),
            }),
        });
    return p ? (0, t.jsx)(d.M, { children: $ }) : $;
};
