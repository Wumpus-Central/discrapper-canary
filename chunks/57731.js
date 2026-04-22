n.d(t, { A: () => A });
var i = n(627968),
    l = n(192308),
    s = n(331322),
    r = n(452027),
    a = n(821609),
    o = n(247928),
    d = n(11351),
    c = n(306444),
    u = n(922975),
    m = n(963175),
    g = n(792105),
    h = n(389082),
    x = n(136230),
    _ = n(985018),
    p = n(148988);
function A() {
    let { editStateId: e, guildId: t } = (0, c.O)(),
        [, A] = u.$7(e, t),
        [E, f] = u.xR(e, t),
        j = u.It(e, t);
    function N() {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("64939").then(n.bind(n, 836774));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    guildId: t,
                    onUploadIcon: (e) => A({ icon: e, unicodeEmoji: null }),
                    onSelectUnicodeEmoji: (e) => A({ icon: null, unicodeEmoji: e }),
                });
        });
    }
    let I = (0, d.gN)();
    return (0, i.jsx)(m.A, {
        title: _.intl.string(_.t["Ah+sQ9"]),
        description: _.intl.string(_.t.ixbWiB),
        children: (0, i.jsxs)(s.B, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(r.D, {
                    label: _.intl.string(_.t["6OUqDa"]),
                    disabled: I,
                    children: (0, i.jsx)(h.A, { value: E, onChange: f, disabled: I }),
                }),
                (0, i.jsx)(r.D, {
                    label: _.intl.string(_.t["zn8/AX"]),
                    disabled: I,
                    description: _.intl.string(_.t.AqHUrU),
                    children: (0, i.jsxs)(s.B, {
                        direction: "horizontal",
                        gap: 16,
                        children: [
                            (0, i.jsx)(x.A, {
                                role: j,
                                "aria-label": _.intl.string(_.t.mD1oGB),
                                onClick: N,
                                disabled: I,
                            }),
                            (0, i.jsx)(a.$, {
                                variant: "secondary",
                                onClick: N,
                                disabled: I,
                                text: _.intl.string(_.t.mD1oGB),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(o.M, {
                    children: (0, i.jsxs)("div", {
                        className: p.i,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(g.A, { guildId: t, role: j, className: p.z, theme: "light" }),
                            (0, i.jsx)(g.A, { guildId: t, role: j, className: p.z, theme: "dark" }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
