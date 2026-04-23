n.d(e, { A: () => G, m: () => T });
var i = n(627968),
    a = n(64700),
    r = n(17928),
    s = n(862482),
    l = n(821609),
    d = n(935462),
    c = n(834730),
    o = n(534514),
    m = n(292666),
    g = n(308528),
    p = n(845584),
    C = n(235986),
    _ = n(915089),
    L = n(548118),
    u = n(808728),
    x = n(71393),
    E = n(985018),
    b = n(940480);
function T(t) {
    let { createdGuildId: e, hasFooter: n = !0, onClose: T, onChannelPromptCompleted: G, isSlideReady: I } = t,
        [D, h] = a.useState(""),
        [A, U] = a.useState(null),
        [y, v] = a.useState(!1),
        N = (0, _.GV)(),
        j = (0, r.bG)([x.A], () => x.A.getGuild(e), [e]),
        f = a.useRef(null);
    a.useEffect(() => {
        I && f.current?.focus();
    }, [I]);
    let S = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == j)) return;
                v(!0), U(null);
                let e = u.Ay.getDefaultChannel(j.id);
                try {
                    let t = E.intl.formatToPlainString(E.t.V4lepJ, { topic: D });
                    await g.A.createTextChannel(j.id, D, e?.parent_id, t), G();
                } catch (t) {
                    U(new p.Wl(t));
                }
                v(!1);
            },
            [j, D, G],
        ),
        M = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.$, {
                    variant: "primary",
                    text: E.intl.string(E.t.i4jeWR),
                    onClick: S,
                    disabled: 0 === D.length,
                    loading: y,
                }),
                (0, i.jsx)(s.$n, {
                    "data-migration-pending": !0,
                    className: b.SZ,
                    look: s.$n.Looks.BLANK,
                    size: s.$n.Sizes.MIN,
                    onClick: G,
                    children: E.intl.string(E.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(d.rQ, {
                    "data-migration-pending": !0,
                    className: b.wx,
                    direction: C.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != j && (0, i.jsx)(L.Ay, { guild: j }),
                        (0, i.jsx)(c.E, {
                            className: b.J5,
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: j?.name,
                        }),
                        (0, i.jsx)(o.D, {
                            className: b.DD,
                            variant: "heading-sm/semibold",
                            children: E.intl.string(E.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(c.E, {
                            className: b.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: E.intl.string(E.t["+855Pm"]),
                        }),
                        null != T && (0, i.jsx)(d.s_, { "data-migration-pending": !0, className: b.b, onClick: T }),
                    ],
                }),
                (0, i.jsxs)(d.$m, {
                    "data-migration-pending": !0,
                    className: b.Q6,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: S,
                            children: (0, i.jsx)(m.k, {
                                label: E.intl.string(E.t.bY20tU),
                                error: A?.getFieldMessage("name"),
                                type: "text",
                                value: D,
                                id: N,
                                onChange: h,
                                placeholder: E.intl.string(E.t.xGOYA8),
                                inputRef: f,
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
                n && (0, i.jsx)(d.jl, { "data-migration-pending": !0, children: M }),
            ],
        }),
        footer: M,
    };
}
function G(t) {
    let { content: e } = T(t);
    return e;
}
