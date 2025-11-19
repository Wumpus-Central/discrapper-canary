n.d(t, { J: () => S });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(493683),
    l = n(230711),
    c = n(511010),
    u = n(981312),
    d = n(342386),
    f = n(260722),
    _ = n(277537),
    p = n(841409),
    h = n(780985),
    m = n(631885),
    g = n(292352),
    E = n(981631),
    b = n(313570),
    y = n(388032),
    O = n(671683);
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
    I = () => {
        let e = (0, m.ZM)(),
            t = () => {
                (0, d.default)(), s.Z.openPrivateChannel({ recipientIds: e });
            },
            n = () => {
                l.Z.setSection(E.oAB.CONTENT_AND_SOCIAL);
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
                            color: "text-tertiary",
                            children: y.intl.format(b.default.X9rW0j, {
                                openSettingsHook: (e, t) =>
                                    (0, r.jsx)(
                                        o.Anchor,
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
    T = () => {
        let e = (0, h.cz)(),
            t = (0, h.$r)(),
            { handleTabChange: n } = (0, p.Z)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && f.ZP.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id);
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
                            color: "text-tertiary",
                            children: y.intl.string(b.default.Sv236e),
                        }),
                    ],
                }),
                (0, r.jsx)(v, {
                    title: y.intl.string(y.t["+o1pDZ"]),
                    buttonText: y.intl.string(y.t.bt75uw),
                    onButtonPress: () => o(g.dG.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(c.Z, { className: O.divider }),
                (0, r.jsx)(v, {
                    title: y.intl.string(y.t.OAuOHD),
                    buttonText: y.intl.string(y.t.bt75uw),
                    onButtonPress: () => o(g.dG.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    S = () => {
        let e = (0, u.U)(),
            t = (0, m.ZM)();
        return (0, _.PO)("settings-controls") && 0 !== t.length
            ? (0, r.jsx)("div", {
                  className: O.container,
                  children: e ? (0, r.jsx)(I, {}) : (0, r.jsx)(T, {}),
              })
            : null;
    };
