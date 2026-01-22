n.d(t, { A: () => g });
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(873298),
    r = n(397927),
    s = n(775602),
    o = n(590180),
    c = n(4227),
    d = n(993408),
    u = n(841702),
    m = n(544028),
    p = n(253932),
    h = n(287809),
    f = n(850730),
    x = n(385803),
    b = n(607335);
function g() {
    var e, t, n, g, v, j, y, _;
    (0, u.Bf)();
    let A = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        C = p.eh.useSetting(),
        S = (0, l.bG)([m.A], () => m.A.theme),
        O = C.backgroundGradientPresetId,
        E = (0, l.bG)([c.A], () => c.A.purchases),
        N = (0, d.x9)(E),
        T = (0, d.$W)(E),
        I = null == A || null == (v = A.avatarDecoration) ? void 0 : v.skuId,
        w = null == A || null == (y = A.collectibles) || null == (j = y.nameplate) ? void 0 : j.skuId,
        k = null != I && null != (e = N.find((e) => e.skuId === I)) ? e : null,
        P = null != w && null != (t = T.find((e) => e.skuId === w)) ? t : null,
        R = (0, l.bG)([o.A], () => o.A.getProduct(null == k ? void 0 : k.skuId)),
        D = (0, l.bG)([o.A], () => o.A.getProduct(null == P ? void 0 : P.skuId)),
        M = (0, l.bG)([s.A], () => s.A.fontSize),
        L = (0, l.bG)([s.A], () => s.A.messageGroupSpacing),
        U = p.Xi.useSetting();
    return (
        (0, f.DB)(),
        (0, a.jsxs)("div", {
            className: b.kL,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Theme",
                            onClick: f.t0,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: f.ZL,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: f.ln,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Current Settings",
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Theme: ", S],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != O ? (null == (_ = x.ag[O]) ? void 0 : _.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (n = null == R ? void 0 : R.name) ? n : "None"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (g = null == D ? void 0 : D.name) ? g : "None"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", M, "px"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", L],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                U,
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
                                })(U),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
