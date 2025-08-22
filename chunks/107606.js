n.d(t, { Z: () => b });
var a = n(951288);
n(647438);
var r = n(442837),
    l = n(524437),
    i = n(481060),
    s = n(607070),
    o = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(223143),
    m = n(210887),
    x = n(695346),
    h = n(594174),
    p = n(176038),
    f = n(469115),
    v = n(685960);
function b() {
    var e, t, n, b, j, g, _, y;
    (0, u.mw)();
    let C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        N = x.L1.useSetting(),
        E = (0, r.e7)([m.Z], () => m.Z.theme),
        O = N.backgroundGradientPresetId,
        T = (0, r.e7)([c.Z], () => c.Z.purchases),
        S = (0, d.Ad)(T),
        P = (0, d.jT)(T),
        w = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        k = null == C || null == (n = C.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        I = null != w && null != (j = S.find((e) => e.skuId === w)) ? j : null,
        R = null != k && null != (g = P.find((e) => e.skuId === k)) ? g : null,
        Z = (0, r.e7)([o.Z], () => o.Z.getProduct(null == I ? void 0 : I.skuId)),
        A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? void 0 : R.skuId)),
        D = (0, r.e7)([s.Z], () => s.Z.fontSize),
        L = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
        M = x.YC.useSetting();
    return (
        (0, p.ub)(),
        (0, a.jsxs)("div", {
            className: v.container,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, a.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Theme",
                            onClick: p.aB,
                        }),
                        (0, a.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: p.th,
                        }),
                        (0, a.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: p._Y,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.X6q, {
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
                                null != O ? (null == (b = f.qt[O]) ? void 0 : b.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == Z ? void 0 : Z.name) ? _ : "None"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == A ? void 0 : A.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", D, "px"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", L],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                M,
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
