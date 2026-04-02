n.d(t, { p: () => v });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(397927),
    r = n(308528),
    o = n(922529),
    d = n(780964),
    c = n(779733),
    u = n(858897),
    m = n(899847),
    g = n(936926),
    _ = n(809697),
    x = n(153739),
    A = n(534654),
    h = n(834981),
    p = n(191627),
    T = n(870236),
    f = n(985018),
    S = n(515218);
let E = (e) => {
        let { title: t, buttonText: n, onButtonPress: s } = e;
        return (0, i.jsxs)(l.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsx)(l.EYj, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(a.Button, { text: n, onClick: s, variant: "secondary", size: "sm" }),
            ],
        });
    },
    b = () => {
        let e = (0, h.vx)(),
            t = () => {
                (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL);
            };
        return (0, i.jsxs)(l.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(l.EYj, { variant: "text-sm/semibold", children: f.intl.string(T.default.ahKIJO) }),
                        (0, i.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: f.intl.format(T.default.X9rW0j, {
                                openSettingsHook: (e, n) => (0, i.jsx)(a.MzZ, { onClick: t, children: e }, n),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.Button, {
                    text: f.intl.formatToPlainString(T.default.ggcjPR, { count: e.length }),
                    onClick: () => {
                        (0, c.default)(), r.A.openPrivateChannel({ recipientIds: e });
                    },
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    C = (e) => {
        let { teenId: t } = e,
            s = (0, x.y3)(),
            r = s?.restrictedSchedule?.rules.length ?? 0;
        return (0, i.jsxs)(l.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(l.EYj, { variant: "text-md/medium", children: f.intl.string(T.default["1Op+NP"]) }),
                        (0, i.jsx)(l.EYj, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                0 === r
                                    ? f.intl.string(T.default.fOBIZH)
                                    : f.intl.formatToPlainString(T.default.XfwcpX, { count: r }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.Button, {
                    text: f.intl.string(T.default.OwFF4o),
                    onClick: () => {
                        (0, a.mMO)(async () => {
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
    N = () => {
        let e = (0, x.y3)(),
            t = (0, x.tl)(),
            { handleTabChange: n } = (0, _.A)(),
            a = (0, g.Vh)({ location: "TimeControlsRow" });
        s.useEffect(() => {
            e?.id != null && t && m.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let r = (e) => {
            n(e);
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(l.EYj, { variant: "text-sm/semibold", children: f.intl.string(T.default.ahKIJO) }),
                        (0, i.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: f.intl.string(T.default.Sv236e),
                        }),
                    ],
                }),
                (0, i.jsx)(E, {
                    title: f.intl.string(f.t["+o1pDZ"]),
                    buttonText: f.intl.string(f.t.bt75uw),
                    onButtonPress: () => r(p.u9.CONTENT_AND_SOCIAL),
                }),
                (0, i.jsx)(o.A, { className: S.yF }),
                (0, i.jsx)(E, {
                    title: f.intl.string(f.t.OAuOHD),
                    buttonText: f.intl.string(f.t.bt75uw),
                    onButtonPress: () => r(p.u9.DATA_AND_PRIVACY),
                }),
                a &&
                    e?.id != null &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.A, { className: S.yF }), (0, i.jsx)(C, { teenId: e.id })],
                    }),
            ],
        });
    },
    v = () => {
        let e = (0, A.A)();
        return 0 === (0, h.vx)().length
            ? null
            : (0, i.jsx)("div", { className: S.kL, children: e ? (0, i.jsx)(b, {}) : (0, i.jsx)(N, {}) });
    };
