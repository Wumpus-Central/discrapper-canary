n.d(t, { Z: () => g });
var a = n(951288);
n(647438);
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
    b = n(685960);
function g() {
    var e, t, n, g, v, j, _, y;
    (0, u.mw)();
    let C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        E = p.L1.useSetting(),
        S = (0, r.e7)([m.Z], () => m.Z.theme),
        T = E.backgroundGradientPresetId,
        O = (0, r.e7)([c.Z], () => c.Z.purchases),
        N = (0, d.Ad)(O),
        P = (0, d.jT)(O),
        I = null == C || null == (e = C.avatarDecoration) ? void 0 : e.skuId,
        w = null == C || null == (n = C.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
        R = null != I && null != (v = N.find((e) => e.skuId === I)) ? v : null,
        k = null != w && null != (j = P.find((e) => e.skuId === w)) ? j : null,
        A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? void 0 : R.skuId)),
        Z = (0, r.e7)([o.Z], () => o.Z.getProduct(null == k ? void 0 : k.skuId)),
        D = (0, r.e7)([s.Z], () => s.Z.fontSize),
        M = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
        L = p.YC.useSetting();
    return (
        (0, x.ub)(),
        (0, a.jsxs)("div", {
            className: b.container,
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
                            children: ["Theme: ", S],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Client Theme ID:",
                                " ",
                                null != T ? (null == (g = f.qt[T]) ? void 0 : g.getName()) : "None",
                            ],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", null != (_ = null == A ? void 0 : A.name) ? _ : "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Nameplate: ", null != (y = null == Z ? void 0 : Z.name) ? y : "None"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Font Size: ", D, "px"],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Message Spacing: ", M],
                        }),
                        (0, a.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                L,
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
