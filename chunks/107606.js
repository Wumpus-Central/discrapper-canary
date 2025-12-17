n.d(t, { Z: () => g });
var a = n(54381);
n(473749);
var r = n(442837),
    l = n(524437),
    i = n(481060),
    s = n(607070),
    o = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(223143),
    m = n(210887),
    p = n(695346),
    h = n(594174),
    f = n(176038),
    x = n(469115),
    b = n(431135);
function g() {
    var e, t, n, g, v, j, y, C;
    (0, u.mw)();
    let _ = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        S = p.L1.useSetting(),
        E = (0, r.e7)([m.Z], () => m.Z.theme),
        T = S.backgroundGradientPresetId,
        O = (0, r.e7)([c.Z], () => c.Z.purchases),
        N = (0, d.Ad)(O),
        w = (0, d.jT)(O),
        P = null == _ || null == (e = _.avatarDecoration) ? void 0 : e.skuId,
        I = null == _ || null == (n = _.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        k = null != P && null != (v = N.find((e) => e.skuId === P)) ? v : null,
        R = null != I && null != (j = w.find((e) => e.skuId === I)) ? j : null,
        A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == k ? void 0 : k.skuId)),
        Z = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? void 0 : R.skuId)),
        D = (0, r.e7)([s.Z], () => s.Z.fontSize),
        L = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
        M = p.YC.useSetting();
    return (
        (0, f.ub)(),
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
                            onClick: f.aB,
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: f.th,
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: f._Y,
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
                                null != T ? (null == (g = x.qt[T]) ? void 0 : g.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (y = null == A ? void 0 : A.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(i.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (C = null == Z ? void 0 : Z.name) ? C : "None"],
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
