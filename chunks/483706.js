n.d(t, {
    p: () => T,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(397927),
    a = n(308528),
    o = n(922529),
    c = n(840387),
    d = n(780964),
    u = n(12901),
    _ = n(840065),
    p = n(899847),
    m = n(809697),
    g = n(153739),
    A = n(834981),
    f = n(191627),
    h = n(652215),
    b = n(842130),
    E = n(985018),
    x = n(191248);
let O = (e) => {
        let { title: t, buttonText: n, onButtonPress: i } = e;
        return (0, r.jsxs)(l.BJc, {
            padding: {
                top: 12,
                bottom: 12,
            },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(s.Button, {
                    text: n,
                    onClick: i,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    C = () => {
        let e = (0, A.vx)(),
            t = () => {
                (0, _.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: h.nc_.CONTENT_AND_SOCIAL,
                });
            };
        return (0, r.jsxs)(l.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, r.jsx)(l.EYj, {
                            variant: "text-sm/semibold",
                            children: E.intl.string(b.default.ahKIJO),
                        }),
                        (0, r.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: E.intl.format(b.default.X9rW0j, {
                                openSettingsHook: (e, n) =>
                                    (0, r.jsx)(
                                        s.MzZ,
                                        {
                                            onClick: t,
                                            children: e,
                                        },
                                        n,
                                    ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Button, {
                    text: E.intl.formatToPlainString(b.default.ggcjPR, {
                        count: e.length,
                    }),
                    onClick: () => {
                        (0, u.default)(),
                            a.A.openPrivateChannel({
                                recipientIds: e,
                            });
                    },
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    I = () => {
        let e = (0, g.y3)(),
            t = (0, g.tl)(),
            { handleTabChange: n } = (0, m.A)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && p.Ay.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id);
        }, [null == e ? void 0 : e.id, t]);
        let s = (e) => {
            n(e);
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, r.jsx)(l.EYj, {
                            variant: "text-sm/semibold",
                            children: E.intl.string(b.default.ahKIJO),
                        }),
                        (0, r.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: E.intl.string(b.default.Sv236e),
                        }),
                    ],
                }),
                (0, r.jsx)(O, {
                    title: E.intl.string(E.t["+o1pDZ"]),
                    buttonText: E.intl.string(E.t.bt75uw),
                    onButtonPress: () => s(f.u9.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(o.A, {
                    className: x.yF,
                }),
                (0, r.jsx)(O, {
                    title: E.intl.string(E.t.OAuOHD),
                    buttonText: E.intl.string(E.t.bt75uw),
                    onButtonPress: () => s(f.u9.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    T = () => {
        let e = (0, c.Z)();
        return 0 === (0, A.vx)().length
            ? null
            : (0, r.jsx)("div", {
                  className: x.kL,
                  children: e ? (0, r.jsx)(C, {}) : (0, r.jsx)(I, {}),
              });
    };
