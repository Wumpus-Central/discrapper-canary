n.d(t, { Z: () => g });
var a = n(951288);
n(647438);
var r = n(442837),
    l = n(524437),
    i = n(481060),
    o = n(607070),
    s = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(223143),
    m = n(210887),
    p = n(695346),
    h = n(594174),
    x = n(176038),
    f = n(469115),
    b = n(685960);
function g() {
    var e, t, n, g, v, j, _, y;
    (0, u.mw)();
    let C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        S = p.L1.useSetting(),
        E = (0, r.e7)([m.Z], () => m.Z.theme),
        O = S.backgroundGradientPresetId,
        T = (0, r.e7)([c.Z], () => c.Z.purchases),
        N = (0, d.Ad)(T),
        P = (0, d.jT)(T),
        I = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        w = null == C || null == (n = C.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        k = null != I && null != (v = N.find((e) => e.skuId === I)) ? v : null,
        R = null != w && null != (j = P.find((e) => e.skuId === w)) ? j : null,
        A = (0, r.e7)([s.Z], () => s.Z.getProduct(null == k ? void 0 : k.skuId)),
        D = (0, r.e7)([s.Z], () => s.Z.getProduct(null == R ? void 0 : R.skuId)),
        Z = (0, r.e7)([o.Z], () => o.Z.fontSize),
        M = (0, r.e7)([o.Z], () => o.Z.messageGroupSpacing),
        L = p.YC.useSetting();
    return (
        (0, x.ub)(),
        (0, a.jsxs)("div", {
            className: b.container,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Theme",
                            onClick: x.aB,
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: x.th,
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: x._Y,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Current Settings",
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Theme: ", E],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != O ? (null == (g = f.qt[O]) ? void 0 : g.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == A ? void 0 : A.name) ? _ : "None"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == D ? void 0 : D.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", Z, "px"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", M],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                L,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case l.Pi.COMPACT:
                                            return "Compact";
                                        case l.Pi.COZY:
                                            return "Cozy";
                                        case l.Pi.DEFAULT:
                                            return "Default";
                                        case l.Pi.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(L),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
