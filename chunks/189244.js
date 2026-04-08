n.d(t, { A: () => v });
var a = n(627968);
n(64700);
var i = n(311907),
    s = n(873298),
    l = n(397927),
    r = n(775602),
    o = n(590180),
    d = n(4227),
    c = n(993408),
    u = n(841702),
    m = n(544028),
    h = n(253932),
    x = n(287809),
    p = n(850730),
    g = n(385803),
    f = n(749929);
function v() {
    (0, u.Bf)();
    let e = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        t = h.eh.useSetting(),
        n = (0, i.bG)([m.A], () => m.A.theme),
        v = t.backgroundGradientPresetId,
        _ = (0, i.bG)([d.A], () => d.A.purchases),
        b = (0, c.x9)(_),
        j = (0, c.$W)(_),
        A = e?.avatarDecoration?.skuId,
        C = e?.collectibles?.nameplate?.skuId,
        y = null != A ? (b.find((e) => e.skuId === A) ?? null) : null,
        S = null != C ? (j.find((e) => e.skuId === C) ?? null) : null,
        E = (0, i.bG)([o.A], () => o.A.getProduct(y?.skuId)),
        T = (0, i.bG)([o.A], () => o.A.getProduct(S?.skuId)),
        N = (0, i.bG)([r.A], () => r.A.fontSize),
        I = (0, i.bG)([r.A], () => r.A.messageGroupSpacing),
        k = h.Xi.useSetting();
    return (
        (0, p.DB)(),
        (0, a.jsxs)("div", {
            className: f.kL,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Theme",
                            onClick: p.t0,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: p.ZL,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: p.ln,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(l.Heading, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, a.jsxs)(l.Text, { variant: "text-md/normal", children: ["Theme: ", n] }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != v ? g.ag[v]?.getName() : "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", E?.name ?? "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", T?.name ?? "None"],
                        }),
                        (0, a.jsxs)(l.Text, { variant: "text-md/normal", children: ["Font Size: ", N, "px"] }),
                        (0, a.jsxs)(l.Text, { variant: "text-md/normal", children: ["Message Spacing: ", I] }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                k,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case s.NS.COMPACT:
                                            return "Compact";
                                        case s.NS.COZY:
                                            return "Cozy";
                                        case s.NS.DEFAULT:
                                            return "Default";
                                        case s.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(k),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
