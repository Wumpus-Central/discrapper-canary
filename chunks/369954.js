n.d(t, { J: () => v });
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
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsx)(a.xvT, {
                    variant: "text-sm/semibold",
                    color: "interactive-active",
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
        let e = (0, p.cz)(),
            t = (0, p.$r)(),
            { handleTabChange: n } = (0, _.Z)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && d.ZP.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id);
        }, [null == e ? void 0 : e.id, t]);
        let a = (e) => {
            n(e);
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y, {
                    title: E.intl.string(E.t["+o1pDQ"]),
                    buttonText: E.intl.string(E.t.bt75u7),
                    onButtonPress: () => a(m.dG.CONTENT_AND_SOCIAL),
                }),
                (0, r.jsx)(l.Z, { className: b.divider }),
                (0, r.jsx)(y, {
                    title: E.intl.string(E.t.OAuOHB),
                    buttonText: E.intl.string(E.t.bt75u7),
                    onButtonPress: () => a(m.dG.DATA_AND_PRIVACY),
                }),
            ],
        });
    },
    v = () => {
        let e = (0, c.U)(),
            t = (0, h.mq)(m.ne.ACTIVE);
        if (!(0, f.PO)("settings-controls") || 0 === t.length) return null;
        let n = () => {
            (0, u.default)(), s.Z.openPrivateChannel({ recipientIds: t.map((e) => e.id) });
        };
        return (0, r.jsxs)(a.Kqy, {
            padding: { top: 24 },
            gap: 4,
            className: b.container,
            children: [
                (0, r.jsx)(a.xvT, {
                    variant: "eyebrow",
                    color: "text-secondary",
                    children: E.intl.string(g.default.ahKIJC),
                }),
                (0, r.jsx)(a.Kqy, {
                    gap: 8,
                    children: e
                        ? (0, r.jsx)(y, {
                              title: E.intl.string(g.default.X9rW0t),
                              buttonText: E.intl.formatToPlainString(g.default.w0JA3N, { count: t.length }),
                              onButtonPress: n,
                          })
                        : (0, r.jsx)(O, {}),
                }),
            ],
        });
    };
