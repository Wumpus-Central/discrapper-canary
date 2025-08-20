a.d(t, { Z: () => v }), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(631562),
    i = a(913527),
    s = a.n(i),
    o = a(330711),
    c = a(442837),
    d = a(481060),
    u = a(665149),
    m = a(706454),
    x = a(185910),
    h = a(257785),
    p = a(388032);
function v() {
    let e = (0, c.e7)([m.default], () => m.default.locale),
        [t, a] = r.useState(),
        i = (0, l.runtimeHashMessageKey)(null != t ? t : ""),
        v = r.useMemo(() => p.t[i], [i]);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)(u.ZP, {
                children: [
                    (0, n.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: "Locale",
                    }),
                    (0, n.jsx)(u.ZP.Title, { children: "Locale" }),
                ],
            }),
            (0, n.jsxs)(h.E, {
                children: [
                    (0, n.jsx)(h.Z9, {
                        name: "Active System",
                        children: "@discord/intl",
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "App",
                        children: e,
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "System",
                        children: p.systemLocale,
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "@discord/intl",
                        children: p.intl.currentLocale,
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "common i18n",
                        children: o.Z.getLocale(),
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "Moment",
                        children: s().locale(),
                    }),
                ],
            }),
            (0, n.jsxs)(u.ZP, {
                children: [
                    (0, n.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: "Messages",
                    }),
                    (0, n.jsx)(u.ZP.Title, { children: "New System Messages" }),
                ],
            }),
            (0, n.jsx)(h.E, {
                children: (0, n.jsx)(h.Z9, {
                    name: "Unique Rendered Main Messages",
                    children: Object.keys(p.t).length,
                }),
            }),
            (0, n.jsx)("div", {
                style: { margin: 16 },
                children: (0, n.jsx)(d.oil, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, n.jsxs)(h.E, {
                children: [
                    (0, n.jsx)(h.Z9, {
                        name: "Hashed key",
                        children: i,
                    }),
                    (0, n.jsx)(h.Z9, {
                        name: "Exists?",
                        children: null != v ? "yes" : "no",
                    }),
                ],
            }),
            (0, n.jsx)(x.Z, { data: null == v ? void 0 : v(e) }),
        ],
    });
}
