n.d(t, { J: () => I });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(481060),
    s = n(493683),
    l = n(511010),
    c = n(981312),
    u = n(342386),
    d = n(260722),
    f = n(277537),
    _ = n(841409),
    p = n(780985),
    h = n(631885),
    m = n(292352),
    g = n(345909),
    E = n(388032),
    b = n(271650);
let y = (e) => {
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
                (0, r.jsx)(o.zxk, {
                    text: n,
                    onClick: i,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    O = () => {
        let e = (0, h.ZM)(),
            t = () => {
                (0, u.default)(), s.Z.openPrivateChannel({ recipientIds: e });
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
                            children: E.intl.string(g.default.ahKIJC),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-tertiary",
                            children: E.intl.string(g.default.X9rW0t),
                        }),
                    ],
                }),
                (0, r.jsx)(o.zxk, {
                    text: E.intl.formatToPlainString(g.default.ggcjPT, { count: e.length }),
                    onClick: t,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    v = () => {
        let e = (0, p.cz)(),
            t = (0, p.$r)(),
            { handleTabChange: n } = (0, _.Z)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && d.ZP.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id);
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
                            children: E.intl.string(g.default.ahKIJC),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/medium",
                            color: "text-tertiary",
                            children: E.intl.string(g.default.Sv236e),
                        }),
                    ],
                }),
                (0, r.jsx)(y, {
                    title: E.intl.string(E.t["+o1pDQ"]),
                    buttonText: E.intl.string(E.t.bt75u7),
                    onButtonPress: () => o(m.dG.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(l.Z, { className: b.divider }),
                (0, r.jsx)(y, {
                    title: E.intl.string(E.t.OAuOHB),
                    buttonText: E.intl.string(E.t.bt75u7),
                    onButtonPress: () => o(m.dG.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    I = () => {
        let e = (0, c.U)(),
            t = (0, h.ZM)();
        return (0, f.PO)("settings-controls") && 0 !== t.length
            ? (0, r.jsx)("div", {
                  className: b.container,
                  children: e ? (0, r.jsx)(O, {}) : (0, r.jsx)(v, {}),
              })
            : null;
    };
