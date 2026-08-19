e.d(n, { A: () => L, m: () => D });
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
    G = e(71393),
    I = e(375708),
    b = e(645781);
function D(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: D, onChannelPromptCompleted: L, isSlideReady: u } = t,
        [U, A] = a.useState(""),
        [x, y] = a.useState(null),
        [O, S] = a.useState(!1),
        N = (0, E.GV)(),
        h = (0, r.bG)([G.A], () => G.A.getGuild(n), [n]),
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
                    let t = I.intl.formatToPlainString(I.t.V4lepJ, { topic: U });
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
                (0, i.jsx)(d.$, {
                    variant: "primary",
                    text: I.intl.string(I.t.i4jeWR),
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
                    children: I.intl.string(I.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.rQ, {
                    "data-migration-pending": !0,
                    className: b.wx,
                    direction: o.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != h && (0, i.jsx)(C.Ay, { guild: h }),
                        (0, i.jsx)(c.E, {
                            className: b.J5,
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: h?.name,
                        }),
                        (0, i.jsx)(p.D, {
                            className: b.DD,
                            variant: "heading-sm/semibold",
                            children: I.intl.string(I.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(c.E, {
                            className: b.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: I.intl.string(I.t["+855Pm"]),
                        }),
                        null != D && (0, i.jsx)(s.s_, { "data-migration-pending": !0, className: b.b, onClick: D }),
                    ],
                }),
                (0, i.jsxs)(s.$m, {
                    "data-migration-pending": !0,
                    scrollbarGutter: !1,
                    className: b.Q6,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: R,
                            children: (0, i.jsx)(m.k, {
                                label: I.intl.string(I.t.bY20tU),
                                error: x?.getFieldMessage("name"),
                                type: "text",
                                value: U,
                                id: N,
                                onChange: A,
                                placeholder: I.intl.string(I.t.xGOYA8),
                                inputRef: v,
                            }),
                        }),
                        null != x &&
                            0 === Object.keys(x.fields).length &&
                            (0, i.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: x.message,
                            }),
                    ],
                }),
                e && (0, i.jsx)(s.jl, { "data-migration-pending": !0, children: j }),
            ],
        }),
        footer: j,
    };
}
function L(t) {
    let { content: n } = D(t);
    return n;
}
