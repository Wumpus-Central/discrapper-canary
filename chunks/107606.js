n.d(t, { Z: () => b });
var a = n(54381);
n(473749);
var r = n(442837),
    i = n(524437),
    l = n(481060),
    s = n(607070),
    o = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(223143),
    m = n(210887),
    p = n(695346),
    h = n(594174),
    x = n(176038),
    f = n(469115),
    g = n(685960);
function b() {
    var e, t, n, b, v, j, _, y;
    (0, u.mw)();
    let C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        S = p.L1.useSetting(),
        E = (0, r.e7)([m.Z], () => m.Z.theme),
        O = S.backgroundGradientPresetId,
        T = (0, r.e7)([c.Z], () => c.Z.purchases),
        N = (0, d.Ad)(T),
        P = (0, d.jT)(T),
        w = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        I = null == C || null == (n = C.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        k = null != w && null != (v = N.find((e) => e.skuId === w)) ? v : null,
        R = null != I && null != (j = P.find((e) => e.skuId === I)) ? j : null,
        A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == k ? void 0 : k.skuId)),
        D = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? void 0 : R.skuId)),
        Z = (0, r.e7)([s.Z], () => s.Z.fontSize),
        L = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
        M = p.YC.useSetting();
    return (
        (0, x.ub)(),
        (0, a.jsxs)("div", {
            className: g.container,
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
                            onClick: x.aB,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: x.th,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: x._Y,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Current Settings",
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Theme: ", E],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != O ? (null == (b = f.qt[O]) ? void 0 : b.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == A ? void 0 : A.name) ? _ : "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == D ? void 0 : D.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", Z, "px"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", L],
                        }),
                        (0, a.jsxs)(l.Text, {
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
