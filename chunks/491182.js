n.d(l, { A: () => A });
var i = n(477900),
    t = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(473193),
    c = n(559106),
    d = n(346055),
    u = n(824994),
    h = n(176201),
    m = n(676608),
    g = n(317525),
    x = n(318626);
let A = function (e) {
    let {
            className: l,
            compact: n = !1,
            contentOnly: s = !1,
            zalgo: A = !0,
            preview: j = !1,
            disableInteraction: p = !1,
            childrenRepliedMessage: v,
            childrenExecutedCommand: N,
            childrenHeader: f,
            childrenSystemMessage: I,
            childrenButtons: b,
            childrenMessageContent: C,
            childrenAccessories: y,
            messageRef: E,
            focusProps: _ = { offset: { left: 4, right: 4 } },
            hasThread: S,
            isSystemMessage: M,
            hasReply: R,
            author: T,
            onMouseEnter: w,
            onMouseLeave: O,
            ...k
        } = e,
        G = (0, r.bG)([g.A], () =>
            T?.guildId == null || T?.colorRoleId == null ? null : g.A.getRole(T.guildId, T.colorRoleId),
        ),
        P = (0, m.jV)(T?.guildId, G) && (0, h.kz)(T),
        [D, L] = t.useState(!1),
        U = t.useCallback(
            (e) => {
                (L(!0), w?.(e));
            },
            [w],
        ),
        V = t.useCallback(
            (e) => {
                (L(!1), O?.(e));
            },
            [O],
        ),
        H = (0, u.W)({ location: "BaseMessage" }),
        $ = t.useMemo(() => ({ animate: D, setAnimate: L }), [D]),
        z = (0, i.jsx)(o.C.Provider, {
            value: $,
            children: (0, i.jsx)(c.vN, {
                ..._,
                children: (0, i.jsxs)("div", {
                    className: a()(l, {
                        [x.D7]: P,
                        [x.e8]: H && T?.displayNameStyles != null && T?.guildId == null,
                        [x.iE]: !0,
                        [x.kl]: s,
                        [x.oE]: n,
                        [x.VH]: j,
                        [x.E]: !n,
                        [x.GZ]: A,
                        [x.pR]: S,
                        [x.X4]: M,
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
                        (0, i.jsxs)("div", { className: x.PG, children: [I, f, null == I && C] }),
                        y,
                        null != b ? (0, i.jsx)("div", { className: x.UD, children: b }) : null,
                    ],
                }),
            }),
        });
    return p ? (0, i.jsx)(d.M, { children: z }) : z;
};
