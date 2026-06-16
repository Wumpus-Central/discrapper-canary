e.d(n, { A: () => L, m: () => D });
var i = e(627968),
    a = e(64700),
    r = e(17928),
    l = e(862482),
    s = e(821609),
    d = e(935462),
    p = e(834730),
    c = e(534514),
    m = e(292666),
    _ = e(308528),
    g = e(913122),
    o = e(235986),
    E = e(915089),
    C = e(548118),
    T = e(808728),
    I = e(71393),
    G = e(375708),
    b = e(940480);
function D(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: D, onChannelPromptCompleted: L, isSlideReady: u } = t,
        [U, A] = a.useState(""),
        [x, y] = a.useState(null),
        [O, S] = a.useState(!1),
        N = (0, E.GV)(),
        h = (0, r.bG)([I.A], () => I.A.getGuild(n), [n]),
        v = a.useRef(null);
    a.useEffect(() => {
        u && v.current?.focus();
    }, [u]);
    let R = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == h)) return;
                S(!0), y(null);
                let n = T.Ay.getDefaultChannel(h.id);
                try {
                    let t = G.intl.formatToPlainString(G.t.V4lepJ, { topic: U });
                    await _.A.createTextChannel(h.id, U, n?.parent_id, t), L();
                } catch (t) {
                    y(new g.Wl(t));
                }
                S(!1);
            },
            [h, U, L],
        ),
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.$, {
                    variant: "primary",
                    text: G.intl.string(G.t.i4jeWR),
                    onClick: R,
                    disabled: 0 === U.length,
                    loading: O,
                }),
                (0, i.jsx)(l.$n, {
                    "data-migration-pending": !0,
                    className: b.SZ,
                    look: l.$n.Looks.BLANK,
                    size: l.$n.Sizes.MIN,
                    onClick: L,
                    children: G.intl.string(G.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(d.rQ, {
                    "data-migration-pending": !0,
                    className: b.wx,
                    direction: o.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != h && (0, i.jsx)(C.Ay, { guild: h }),
                        (0, i.jsx)(p.E, {
                            className: b.J5,
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: h?.name,
                        }),
                        (0, i.jsx)(c.D, {
                            className: b.DD,
                            variant: "heading-sm/semibold",
                            children: G.intl.string(G.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(p.E, {
                            className: b.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: G.intl.string(G.t["+855Pm"]),
                        }),
                        null != D && (0, i.jsx)(d.s_, { "data-migration-pending": !0, className: b.b, onClick: D }),
                    ],
                }),
                (0, i.jsxs)(d.$m, {
                    "data-migration-pending": !0,
                    className: b.Q6,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: R,
                            children: (0, i.jsx)(m.k, {
                                label: G.intl.string(G.t.bY20tU),
                                error: x?.getFieldMessage("name"),
                                type: "text",
                                value: U,
                                id: N,
                                onChange: A,
                                placeholder: G.intl.string(G.t.xGOYA8),
                                inputRef: v,
                            }),
                        }),
                        null != x &&
                            0 === Object.keys(x.fields).length &&
                            (0, i.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: x.message,
                            }),
                    ],
                }),
                e && (0, i.jsx)(d.jl, { "data-migration-pending": !0, children: j }),
            ],
        }),
        footer: j,
    };
}
function L(t) {
    let { content: n } = D(t);
    return n;
}
