a.d(t, { Z: () => f });
var n = a(951288);
a(647438);
var r = a(442837),
    l = a(524437),
    i = a(481060),
    s = a(607070),
    o = a(597688),
    c = a(1870),
    d = a(884697),
    u = a(223143),
    m = a(210887),
    x = a(695346),
    h = a(594174),
    p = a(176038),
    v = a(469115),
    b = a(685960);
function f() {
    var e, t, a, f, j, g, _, y;
    (0, u.mw)();
    let C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        N = x.L1.useSetting(),
        O = (0, r.e7)([m.Z], () => m.Z.theme),
        E = N.backgroundGradientPresetId,
        T = (0, r.e7)([c.Z], () => c.Z.purchases),
        S = (0, d.Ad)(T),
        P = (0, d.jT)(T),
        w = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        I = null == C || null == (a = C.collectibles) || null == (t = a.nameplate) ? void 0 : t.skuId,
        k = null != w && null != (j = S.find((e) => e.skuId === w)) ? j : null,
        R = null != I && null != (g = P.find((e) => e.skuId === I)) ? g : null,
        Z = (0, r.e7)([o.Z], () => o.Z.getProduct(null == k ? void 0 : k.skuId)),
        A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? void 0 : R.skuId)),
        D = (0, r.e7)([s.Z], () => s.Z.fontSize),
        L = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
        M = x.YC.useSetting();
    return (
        (0, p.ub)(),
        (0, n.jsxs)("div", {
            className: b.container,
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Theme",
                            onClick: p.aB,
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: p.th,
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: p._Y,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Current Settings",
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Theme: ", O],
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != E ? (null == (f = v.qt[E]) ? void 0 : f.getName()) : "None",
                            ],
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == Z ? void 0 : Z.name) ? _ : "None"],
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == A ? void 0 : A.name) ? y : "None"],
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", D, "px"],
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", L],
                        }),
                        (0, n.jsxs)(i.Text, {
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
