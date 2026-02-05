"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(397927),
    l = n(11351),
    r = n(306444),
    a = n(922975),
    o = n(963175),
    d = n(792105),
    c = n(389082),
    u = n(136230),
    m = n(985018),
    g = n(436151);
function x() {
    let { editStateId: e, guildId: t } = (0, r.O)(),
        [, x] = a.$7(e, t),
        [h, _] = a.xR(e, t),
        A = a.It(e, t);
    function p() {
        (0, s.mMO)(async () => {
            let { default: e } = await n.e("64939").then(n.bind(n, 836774));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    guildId: t,
                    onUploadIcon: (e) => x({ icon: e, unicodeEmoji: null }),
                    onSelectUnicodeEmoji: (e) => x({ icon: null, unicodeEmoji: e }),
                });
        });
    }
    let f = (0, l.gN)();
    return (0, i.jsx)(o.A, {
        title: m.intl.string(m.t["Ah+sQ9"]),
        description: m.intl.string(m.t.ixbWiB),
        children: (0, i.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(s.D0$, {
                    label: m.intl.string(m.t["6OUqDa"]),
                    disabled: f,
                    children: (0, i.jsx)(c.A, { value: h, onChange: _, disabled: f }),
                }),
                (0, i.jsx)(s.D0$, {
                    label: m.intl.string(m.t["zn8/AX"]),
                    disabled: f,
                    description: m.intl.string(m.t.AqHUrU),
                    children: (0, i.jsxs)(s.BJc, {
                        direction: "horizontal",
                        gap: 16,
                        children: [
                            (0, i.jsx)(u.A, {
                                role: A,
                                "aria-label": m.intl.string(m.t.mD1oGB),
                                onClick: p,
                                disabled: f,
                            }),
                            (0, i.jsx)(s.Button, {
                                variant: "secondary",
                                onClick: p,
                                disabled: f,
                                text: m.intl.string(m.t.mD1oGB),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(s.M1G, {
                    children: (0, i.jsxs)("div", {
                        className: g.i,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(d.A, { guildId: t, role: A, className: g.z, theme: "light" }),
                            (0, i.jsx)(d.A, { guildId: t, role: A, className: g.z, theme: "dark" }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
