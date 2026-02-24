n.d(t, { p: () => j });
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(397927),
    r = n(308528),
    o = n(922529),
    c = n(780964),
    d = n(12901),
    u = n(840065),
    _ = n(899847),
    m = n(936926),
    A = n(809697),
    g = n(153739),
    h = n(534654),
    x = n(834981),
    p = n(191627),
    E = n(652215),
    C = n(842130),
    T = n(985018),
    S = n(191248);
let I = (e) => {
        let { title: t, buttonText: n, onButtonPress: s } = e;
        return (0, i.jsxs)(a.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsx)(a.EYj, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(l.Button, { text: n, onClick: s, variant: "secondary", size: "sm" }),
            ],
        });
    },
    f = () => {
        let e = (0, x.vx)(),
            t = () => {
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, { section: E.nc_.CONTENT_AND_SOCIAL });
            };
        return (0, i.jsxs)(a.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(a.EYj, { variant: "text-sm/semibold", children: T.intl.string(C.default.ahKIJO) }),
                        (0, i.jsx)(a.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: T.intl.format(C.default.X9rW0j, {
                                openSettingsHook: (e, n) => (0, i.jsx)(l.MzZ, { onClick: t, children: e }, n),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.Button, {
                    text: T.intl.formatToPlainString(C.default.ggcjPR, { count: e.length }),
                    onClick: () => {
                        (0, d.default)(), r.A.openPrivateChannel({ recipientIds: e });
                    },
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    N = (e) => {
        let { teenId: t } = e,
            s = (0, g.y3)(),
            r = s?.restrictedSchedule?.rules.length ?? 0;
        return (0, i.jsxs)(a.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(a.EYj, { variant: "text-md/medium", children: T.intl.string(C.default["1Op+NP"]) }),
                        (0, i.jsx)(a.EYj, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                0 === r
                                    ? T.intl.string(C.default.fOBIZH)
                                    : T.intl.formatToPlainString(C.default.XfwcpX, { count: r }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.Button, {
                    text: T.intl.string(C.default.OwFF4o),
                    onClick: () => {
                        (0, l.mMO)(async () => {
                            let { default: e } = await n.e("38842").then(n.bind(n, 6241));
                            return (n) => (0, i.jsx)(e, { ...n, teenId: t });
                        });
                    },
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    b = () => {
        let e = (0, g.y3)(),
            t = (0, g.tl)(),
            { handleTabChange: n } = (0, A.A)(),
            l = (0, m.Vh)({ location: "TimeControlsRow" });
        s.useEffect(() => {
            e?.id != null && t && _.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let r = (e) => {
            n(e);
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(a.EYj, { variant: "text-sm/semibold", children: T.intl.string(C.default.ahKIJO) }),
                        (0, i.jsx)(a.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: T.intl.string(C.default.Sv236e),
                        }),
                    ],
                }),
                (0, i.jsx)(I, {
                    title: T.intl.string(T.t["+o1pDZ"]),
                    buttonText: T.intl.string(T.t.bt75uw),
                    onButtonPress: () => r(p.u9.CONTENT_AND_SOCIAL),
                }),
                (0, i.jsx)(o.A, { className: S.yF }),
                (0, i.jsx)(I, {
                    title: T.intl.string(T.t.OAuOHD),
                    buttonText: T.intl.string(T.t.bt75uw),
                    onButtonPress: () => r(p.u9.DATA_AND_PRIVACY),
                }),
                l &&
                    e?.id != null &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.A, { className: S.yF }), (0, i.jsx)(N, { teenId: e.id })],
                    }),
            ],
        });
    },
    j = () => {
        let e = (0, h.A)();
        return 0 === (0, x.vx)().length
            ? null
            : (0, i.jsx)("div", { className: S.kL, children: e ? (0, i.jsx)(f, {}) : (0, i.jsx)(b, {}) });
    };
