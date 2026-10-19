e.d(n, { A: () => u, m: () => D });
var i = e(477900),
    a = e(582128),
    r = e(17928),
    l = e(862482),
    s = e(935462),
    d = e(821609),
    c = e(834730),
    p = e(297264),
    m = e(95477),
    _ = e(308528),
    g = e(913122),
    o = e(235986),
    E = e(915089),
    C = e(548118),
    T = e(808728),
    b = e(71393),
    G = e(105292),
    I = e(645781);
function D(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: D, onChannelPromptCompleted: u, isSlideReady: L } = t,
        [U, x] = a.useState(""),
        [A, y] = a.useState(null),
        [O, S] = a.useState(!1),
        h = (0, E.GV)(),
        N = (0, r.bG)([b.A], () => b.A.getGuild(n), [n]),
        v = a.useRef(null);
    a.useEffect(() => {
        L && v.current?.focus();
    }, [L]);
    let R = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == N)) return;
                (S(!0), y(null));
                let n = T.Ay.getDefaultChannel(N.id);
                try {
                    let t = G.intl.formatToPlainString(G.t.V4lepJ, { topic: U });
                    (await _.A.createTextChannel(N.id, U, n?.parent_id, t), u());
                } catch (t) {
                    y(new g.Wl(t));
                }
                S(!1);
            },
            [N, U, u],
        ),
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.$, {
                    variant: "primary",
                    text: G.intl.string(G.t.i4jeWR),
                    onClick: R,
                    disabled: 0 === U.length,
                    loading: O,
                }),
                (0, i.jsx)(l.$n, {
                    "data-migration-pending": !0,
                    className: I.SZ,
                    look: l.$n.Looks.BLANK,
                    size: l.$n.Sizes.MIN,
                    onClick: u,
                    children: G.intl.string(G.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.rQ, {
                    "data-migration-pending": !0,
                    className: I.wx,
                    direction: o.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != N && (0, i.jsx)(C.Ay, { guild: N }),
                        (0, i.jsx)(c.E, {
                            className: I.J5,
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: N?.name,
                        }),
                        (0, i.jsx)(p.D, {
                            className: I.DD,
                            variant: "heading-sm/semibold",
                            children: G.intl.string(G.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(c.E, {
                            className: I.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: G.intl.string(G.t["+855Pm"]),
                        }),
                        null != D && (0, i.jsx)(s.s_, { "data-migration-pending": !0, className: I.b, onClick: D }),
                    ],
                }),
                (0, i.jsxs)(s.$m, {
                    "data-migration-pending": !0,
                    scrollbarGutter: !1,
                    className: I.Q6,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: R,
                            children: (0, i.jsx)(m.k, {
                                label: G.intl.string(G.t.bY20tU),
                                error: A?.getFieldMessage("name"),
                                type: "text",
                                value: U,
                                id: h,
                                onChange: x,
                                placeholder: G.intl.string(G.t.xGOYA8),
                                inputRef: v,
                            }),
                        }),
                        null != A &&
                            0 === Object.keys(A.fields).length &&
                            (0, i.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: A.message,
                            }),
                    ],
                }),
                e && (0, i.jsx)(s.jl, { "data-migration-pending": !0, children: j }),
            ],
        }),
        footer: j,
    };
}
function u(t) {
    let { content: n } = D(t);
    return n;
}
