n.d(t, { A: () => g });
var a = n(627968),
    s = n(64700),
    i = n(932433),
    l = n(989349),
    r = n.n(l),
    o = n(855522),
    d = n(311907),
    c = n(397927),
    u = n(58736),
    m = n(773669),
    h = n(231545),
    x = n(708403),
    p = n(985018);
function g() {
    let e = (0, d.bG)([m.default], () => m.default.locale),
        [t, n] = s.useState(),
        l = (0, i.runtimeHashMessageKey)(t ?? ""),
        g = s.useMemo(() => p.t[l], [l]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(u.Ay, {
                children: [
                    (0, a.jsx)(u.Ay.Icon, { icon: c.UaP, tooltip: "Locale" }),
                    (0, a.jsx)(u.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, a.jsxs)(x.OA, {
                children: [
                    (0, a.jsx)(x.mA, { name: "Active System", children: "@discord/intl" }),
                    (0, a.jsx)(x.mA, { name: "App", children: e }),
                    (0, a.jsx)(x.mA, { name: "System", children: p.systemLocale }),
                    (0, a.jsx)(x.mA, { name: "@discord/intl", children: p.intl.currentLocale }),
                    (0, a.jsx)(x.mA, { name: "common i18n", children: o.A.getLocale() }),
                    (0, a.jsx)(x.mA, { name: "Moment", children: r().locale() }),
                ],
            }),
            (0, a.jsxs)(u.Ay, {
                children: [
                    (0, a.jsx)(u.Ay.Icon, { icon: c.UaP, tooltip: "Messages" }),
                    (0, a.jsx)(u.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, a.jsx)(x.OA, {
                children: (0, a.jsx)(x.mA, {
                    name: "Unique Rendered Main Messages",
                    children: Object.keys(p.t).length,
                }),
            }),
            (0, a.jsx)("div", {
                style: { margin: 16 },
                children: (0, a.jsx)(c.ksK, {
                    onChange: function (e) {
                        n(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, a.jsxs)(x.OA, {
                children: [
                    (0, a.jsx)(x.mA, { name: "Hashed key", children: l }),
                    (0, a.jsx)(x.mA, { name: "Exists?", children: null != g ? "yes" : "no" }),
                ],
            }),
            (0, a.jsx)(h.A, { data: g?.(e) }),
        ],
    });
}
