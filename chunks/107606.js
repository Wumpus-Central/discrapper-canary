n.d(t, { Z: () => b });
var a = n(54381);
n(473749);
var l = n(442837),
    i = n(524437),
    r = n(481060),
    s = n(607070),
    o = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(223143),
    m = n(210887),
    p = n(695346),
    h = n(594174),
    x = n(176038),
    g = n(469115),
    f = n(685960);
function b() {
    var e, t, n, b, v, j, _, y;
    (0, u.mw)();
    let C = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        S = p.L1.useSetting(),
        E = (0, l.e7)([m.Z], () => m.Z.theme),
        N = S.backgroundGradientPresetId,
        T = (0, l.e7)([c.Z], () => c.Z.purchases),
        O = (0, d.Ad)(T),
        P = (0, d.jT)(T),
        I = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        w = null == C || null == (n = C.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        k = null != I && null != (v = O.find((e) => e.skuId === I)) ? v : null,
        A = null != w && null != (j = P.find((e) => e.skuId === w)) ? j : null,
        R = (0, l.e7)([o.Z], () => o.Z.getProduct(null == k ? void 0 : k.skuId)),
        Z = (0, l.e7)([o.Z], () => o.Z.getProduct(null == A ? void 0 : A.skuId)),
        D = (0, l.e7)([s.Z], () => s.Z.fontSize),
        L = (0, l.e7)([s.Z], () => s.Z.messageGroupSpacing),
        M = p.YC.useSetting();
    return (
        (0, x.ub)(),
        (0, a.jsxs)("div", {
            className: f.container,
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
                            onClick: x.aB,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: x.th,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: x._Y,
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
                            children: ["Theme: ", E],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != N ? (null == (b = g.qt[N]) ? void 0 : b.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == R ? void 0 : R.name) ? _ : "None"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == Z ? void 0 : Z.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", D, "px"],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", L],
                        }),
                        (0, a.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                M,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case i.Pi.COMPACT:
                                            return "Compact";
                                        case i.Pi.COZY:
                                            return "Cozy";
                                        case i.Pi.DEFAULT:
                                            return "Default";
                                        case i.Pi.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(M),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
