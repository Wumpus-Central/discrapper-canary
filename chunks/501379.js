a.d(t, { A: () => v });
var n = a(627968),
    l = a(64700),
    i = a(919523),
    s = a(989349),
    r = a.n(s),
    o = a(855522),
    d = a(311907),
    c = a(37646),
    u = a(292666),
    m = a(58736),
    h = a(773669),
    p = a(231545),
    x = a(708403),
    g = a(985018);
function v() {
    let e = (0, d.bG)([h.default], () => h.default.locale),
        [t, a] = l.useState(),
        s = (0, i.runtimeHashMessageKey)(t ?? ""),
        v = l.useMemo(() => g.t[s], [s]);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)(m.Ay, {
                children: [
                    (0, n.jsx)(m.Ay.Icon, { icon: c.U, tooltip: "Locale" }),
                    (0, n.jsx)(m.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, n.jsxs)(x.OA, {
                children: [
                    (0, n.jsx)(x.mA, { name: "Active System", children: "@discord/intl" }),
                    (0, n.jsx)(x.mA, { name: "App", children: e }),
                    (0, n.jsx)(x.mA, { name: "System", children: g.systemLocale }),
                    (0, n.jsx)(x.mA, { name: "@discord/intl", children: g.intl.currentLocale }),
                    (0, n.jsx)(x.mA, { name: "common i18n", children: o.A.getLocale() }),
                    (0, n.jsx)(x.mA, { name: "Moment", children: r().locale() }),
                ],
            }),
            (0, n.jsxs)(m.Ay, {
                children: [
                    (0, n.jsx)(m.Ay.Icon, { icon: c.U, tooltip: "Messages" }),
                    (0, n.jsx)(m.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, n.jsx)(x.OA, {
                children: (0, n.jsx)(x.mA, {
                    name: "Unique Rendered Main Messages",
                    children: Object.keys(g.t).length,
                }),
            }),
            (0, n.jsx)("div", {
                style: { margin: 16 },
                children: (0, n.jsx)(u.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, n.jsxs)(x.OA, {
                children: [
                    (0, n.jsx)(x.mA, { name: "Hashed key", children: s }),
                    (0, n.jsx)(x.mA, { name: "Exists?", children: null != v ? "yes" : "no" }),
                ],
            }),
            (0, n.jsx)(p.A, { data: v?.(e) }),
        ],
    });
}
