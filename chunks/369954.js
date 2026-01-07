n.d(t, { J: () => I });
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
    p = n(841409),
    _ = n(780985),
    m = n(631885),
    h = n(292352),
    g = n(981631),
    E = n(517319),
    b = n(388032),
    y = n(837842);
let O = (e) => {
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
    v = () => {
        let e = (0, m.ZM)(),
            t = () => {
                (0, d.default)(), s.Z.openPrivateChannel({ recipientIds: e });
            },
            n = () => {
                l.Z.setSection(g.oAB.CONTENT_AND_SOCIAL);
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
                            children: b.intl.string(E.default.ahKIJO),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: b.intl.format(E.default.X9rW0j, {
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
                    text: b.intl.formatToPlainString(E.default.ggcjPR, { count: e.length }),
                    onClick: t,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    S = () => {
        let e = (0, _.cz)(),
            t = (0, _.$r)(),
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
                            children: b.intl.string(E.default.ahKIJO),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: b.intl.string(E.default.Sv236e),
                        }),
                    ],
                }),
                (0, r.jsx)(O, {
                    title: b.intl.string(b.t["+o1pDZ"]),
                    buttonText: b.intl.string(b.t.bt75uw),
                    onButtonPress: () => o(h.dG.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(c.Z, { className: y.divider }),
                (0, r.jsx)(O, {
                    title: b.intl.string(b.t.OAuOHD),
                    buttonText: b.intl.string(b.t.bt75uw),
                    onButtonPress: () => o(h.dG.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    I = () => {
        let e = (0, u.U)();
        return 0 === (0, m.ZM)().length
            ? null
            : (0, r.jsx)("div", {
                  className: y.container,
                  children: e ? (0, r.jsx)(v, {}) : (0, r.jsx)(S, {}),
              });
    };
