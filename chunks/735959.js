n.d(t, { Z: () => f }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(469571),
    l = n(913527),
    s = n.n(l),
    o = n(330711),
    c = n(442837),
    d = n(481060),
    u = n(665149),
    m = n(706454),
    p = n(428530),
    h = n(257785),
    x = n(388032);
function f() {
    let e = (0, c.e7)([m.default], () => m.default.locale),
        [t, n] = r.useState(),
        l = (0, i.runtimeHashMessageKey)(null != t ? t : ""),
        f = r.useMemo(() => x.t[l], [l]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(u.ZP, {
                children: [
                    (0, a.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: "Locale",
                    }),
                    (0, a.jsx)(u.ZP.Title, { children: "Locale" }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                children: [
                    (0, a.jsx)(h.Z9, {
                        name: "Active System",
                        children: "@discord/intl",
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "App",
                        children: e,
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "System",
                        children: x.systemLocale,
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "@discord/intl",
                        children: x.intl.currentLocale,
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "common i18n",
                        children: o.Z.getLocale(),
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "Moment",
                        children: s().locale(),
                    }),
                ],
            }),
            (0, a.jsxs)(u.ZP, {
                children: [
                    (0, a.jsx)(u.ZP.Icon, {
                        icon: d.os0,
                        tooltip: "Messages",
                    }),
                    (0, a.jsx)(u.ZP.Title, { children: "New System Messages" }),
                ],
            }),
            (0, a.jsx)(h.E, {
                children: (0, a.jsx)(h.Z9, {
                    name: "Unique Rendered Main Messages",
                    children: Object.keys(x.t).length,
                }),
            }),
            (0, a.jsx)("div", {
                style: { margin: 16 },
                children: (0, a.jsx)(d.oil, {
                    onChange: function (e) {
                        n(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, a.jsxs)(h.E, {
                children: [
                    (0, a.jsx)(h.Z9, {
                        name: "Hashed key",
                        children: l,
                    }),
                    (0, a.jsx)(h.Z9, {
                        name: "Exists?",
                        children: null != f ? "yes" : "no",
                    }),
                ],
            }),
            (0, a.jsx)(p.Z, { data: null == f ? void 0 : f(e) }),
        ],
    });
}
