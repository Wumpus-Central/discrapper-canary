n.d(t, {
    A: () => x,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(932433),
    r = n(989349),
    s = n.n(r),
    o = n(855522),
    c = n(311907),
    d = n(397927),
    u = n(58736),
    m = n(773669),
    p = n(231545),
    h = n(708403),
    f = n(985018);

function x() {
    let e = (0, c.bG)([m.default], () => m.default.locale),
        [t, n] = l.useState(),
        r = (0, i.runtimeHashMessageKey)(null != t ? t : ""),
        x = l.useMemo(() => f.t[r], [r]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(u.Ay, {
                children: [
                    (0, a.jsx)(u.Ay.Icon, {
                        icon: d.UaP,
                        tooltip: "Locale",
                    }),
                    (0, a.jsx)(u.Ay.Title, {
                        children: "Locale",
                    }),
                ],
            }),
            (0, a.jsxs)(h.OA, {
                children: [
                    (0, a.jsx)(h.mA, {
                        name: "Active System",
                        children: "@discord/intl",
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "App",
                        children: e,
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "System",
                        children: f.systemLocale,
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "@discord/intl",
                        children: f.intl.currentLocale,
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "common i18n",
                        children: o.A.getLocale(),
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "Moment",
                        children: s().locale(),
                    }),
                ],
            }),
            (0, a.jsxs)(u.Ay, {
                children: [
                    (0, a.jsx)(u.Ay.Icon, {
                        icon: d.UaP,
                        tooltip: "Messages",
                    }),
                    (0, a.jsx)(u.Ay.Title, {
                        children: "New System Messages",
                    }),
                ],
            }),
            (0, a.jsx)(h.OA, {
                children: (0, a.jsx)(h.mA, {
                    name: "Unique Rendered Main Messages",
                    children: Object.keys(f.t).length,
                }),
            }),
            (0, a.jsx)("div", {
                style: {
                    margin: 16,
                },
                children: (0, a.jsx)(d.ksK, {
                    onChange: function (e) {
                        n(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, a.jsxs)(h.OA, {
                children: [
                    (0, a.jsx)(h.mA, {
                        name: "Hashed key",
                        children: r,
                    }),
                    (0, a.jsx)(h.mA, {
                        name: "Exists?",
                        children: null != x ? "yes" : "no",
                    }),
                ],
            }),
            (0, a.jsx)(p.A, {
                data: null == x ? void 0 : x(e),
            }),
        ],
    });
}
