n.d(t, { J: () => T });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(493683),
    l = n(511010),
    c = n(981312),
    u = n(313789),
    d = n(342386),
    f = n(518596),
    p = n(260722),
    _ = n(841409),
    m = n(780985),
    h = n(631885),
    g = n(292352),
    E = n(981631),
    b = n(517319),
    y = n(388032),
    O = n(837842);
let v = (e) => {
        let { title: t, buttonText: n, onButtonPress: i } = e;
        return (0, r.jsxs)(a.Kqy, {
            padding: {
                top: 12,
                bottom: 12,
            },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsx)(a.xvT, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(o.Button, {
                    text: n,
                    onClick: i,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    S = () => {
        let e = (0, h.ZM)(),
            t = () => {
                (0, d.default)(), s.Z.openPrivateChannel({ recipientIds: e });
            },
            n = () => {
                (0, f.openUserSettings)(u.n.CONTENT_AND_SOCIAL_PANEL, { section: E.oAB.CONTENT_AND_SOCIAL });
            };
        return (0, r.jsxs)(a.Kqy, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, r.jsx)(a.xvT, {
                            variant: "text-sm/semibold",
                            children: y.intl.string(b.default.ahKIJO),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: y.intl.format(b.default.X9rW0j, {
                                openSettingsHook: (e, t) =>
                                    (0, r.jsx)(
                                        o.eee,
                                        {
                                            onClick: n,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.Button, {
                    text: y.intl.formatToPlainString(b.default.ggcjPR, { count: e.length }),
                    onClick: t,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    I = () => {
        let e = (0, m.cz)(),
            t = (0, m.$r)(),
            { handleTabChange: n } = (0, _.Z)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && p.ZP.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id);
        }, [null == e ? void 0 : e.id, t]);
        let o = (e) => {
            n(e);
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, r.jsx)(a.xvT, {
                            variant: "text-sm/semibold",
                            children: y.intl.string(b.default.ahKIJO),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: y.intl.string(b.default.Sv236e),
                        }),
                    ],
                }),
                (0, r.jsx)(v, {
                    title: y.intl.string(y.t["+o1pDZ"]),
                    buttonText: y.intl.string(y.t.bt75uw),
                    onButtonPress: () => o(g.dG.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(l.Z, { className: O.divider }),
                (0, r.jsx)(v, {
                    title: y.intl.string(y.t.OAuOHD),
                    buttonText: y.intl.string(y.t.bt75uw),
                    onButtonPress: () => o(g.dG.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    T = () => {
        let e = (0, c.U)();
        return 0 === (0, h.ZM)().length
            ? null
            : (0, r.jsx)("div", {
                  className: O.container,
                  children: e ? (0, r.jsx)(S, {}) : (0, r.jsx)(I, {}),
              });
    };
