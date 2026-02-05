n.d(t, { p: () => N });
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(397927),
    l = n(308528),
    o = n(922529),
    c = n(780964),
    d = n(12901),
    u = n(840065),
    _ = n(899847),
    m = n(809697),
    A = n(153739),
    g = n(534654),
    E = n(834981),
    h = n(191627),
    p = n(652215),
    C = n(842130),
    x = n(985018),
    T = n(191248);
let I = (e) => {
        let { title: t, buttonText: n, onButtonPress: s } = e;
        return (0, i.jsxs)(r.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsx)(r.EYj, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(a.Button, { text: n, onClick: s, variant: "secondary", size: "sm" }),
            ],
        });
    },
    S = () => {
        let e = (0, E.vx)(),
            t = () => {
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, { section: p.nc_.CONTENT_AND_SOCIAL });
            };
        return (0, i.jsxs)(r.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(r.EYj, { variant: "text-sm/semibold", children: x.intl.string(C.default.ahKIJO) }),
                        (0, i.jsx)(r.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: x.intl.format(C.default.X9rW0j, {
                                openSettingsHook: (e, n) => (0, i.jsx)(a.MzZ, { onClick: t, children: e }, n),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.Button, {
                    text: x.intl.formatToPlainString(C.default.ggcjPR, { count: e.length }),
                    onClick: () => {
                        (0, d.default)(), l.A.openPrivateChannel({ recipientIds: e });
                    },
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    f = () => {
        let e = (0, A.y3)(),
            t = (0, A.tl)(),
            { handleTabChange: n } = (0, m.A)();
        s.useEffect(() => {
            e?.id != null && t && _.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let a = (e) => {
            n(e);
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(r.EYj, { variant: "text-sm/semibold", children: x.intl.string(C.default.ahKIJO) }),
                        (0, i.jsx)(r.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: x.intl.string(C.default.Sv236e),
                        }),
                    ],
                }),
                (0, i.jsx)(I, {
                    title: x.intl.string(x.t["+o1pDZ"]),
                    buttonText: x.intl.string(x.t.bt75uw),
                    onButtonPress: () => a(h.u9.CONTENT_AND_SOCIAL),
                }),
                (0, i.jsx)(o.A, { className: T.yF }),
                (0, i.jsx)(I, {
                    title: x.intl.string(x.t.OAuOHD),
                    buttonText: x.intl.string(x.t.bt75uw),
                    onButtonPress: () => a(h.u9.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    N = () => {
        let e = (0, g.A)();
        return 0 === (0, E.vx)().length
            ? null
            : (0, i.jsx)("div", { className: T.kL, children: e ? (0, i.jsx)(S, {}) : (0, i.jsx)(f, {}) });
    };
