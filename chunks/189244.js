a.d(t, { A: () => f });
var n = a(627968);
a(64700);
var l = a(311907),
    i = a(873298),
    s = a(534514),
    r = a(834730),
    o = a(821609),
    d = a(775602),
    c = a(590180),
    u = a(4227),
    m = a(993408),
    h = a(841702),
    p = a(544028),
    x = a(253932),
    g = a(287809),
    v = a(850730),
    b = a(385803),
    _ = a(155248);
function f() {
    (0, h.Bf)();
    let e = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        t = x.eh.useSetting(),
        a = (0, l.bG)([p.A], () => p.A.theme),
        f = t.backgroundGradientPresetId,
        j = (0, l.bG)([u.A], () => u.A.purchases),
        A = (0, m.x9)(j),
        y = (0, m.$W)(j),
        C = e?.avatarDecoration?.skuId,
        E = e?.collectibles?.nameplate?.skuId,
        S = null != C ? (A.find((e) => e.skuId === C) ?? null) : null,
        N = null != E ? (y.find((e) => e.skuId === E) ?? null) : null,
        k = (0, l.bG)([c.A], () => c.A.getProduct(S?.skuId)),
        I = (0, l.bG)([c.A], () => c.A.getProduct(N?.skuId)),
        D = (0, l.bG)([d.A], () => d.A.fontSize),
        T = (0, l.bG)([d.A], () => d.A.messageGroupSpacing),
        w = x.Xi.useSetting();
    return (
        (0, v.DB)(),
        (0, n.jsxs)("div", {
            className: _.kL,
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, n.jsx)(r.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, n.jsx)(o.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: v.t0 }),
                        (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: v.ZL,
                        }),
                        (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: v.ln,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, n.jsxs)(r.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, n.jsxs)(r.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != f ? b.ag[f]?.getName() : "None"],
                        }),
                        (0, n.jsxs)(r.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", k?.name ?? "None"],
                        }),
                        (0, n.jsxs)(r.E, { variant: "text-md/normal", children: ["Nameplate: ", I?.name ?? "None"] }),
                        (0, n.jsxs)(r.E, { variant: "text-md/normal", children: ["Font Size: ", D, "px"] }),
                        (0, n.jsxs)(r.E, { variant: "text-md/normal", children: ["Message Spacing: ", T] }),
                        (0, n.jsxs)(r.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                w,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case i.NS.COMPACT:
                                            return "Compact";
                                        case i.NS.COZY:
                                            return "Cozy";
                                        case i.NS.DEFAULT:
                                            return "Default";
                                        case i.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(w),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
