n.d(t, { J: () => E });
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(481060),
    o = n(493683),
    s = n(37234),
    l = n(511010),
    c = n(981312),
    u = n(277537),
    d = n(841409),
    f = n(631885),
    _ = n(292352),
    p = n(345909),
    h = n(388032),
    m = n(271650);
let g = (e) => {
        let { title: t, buttonText: n, onButtonPress: o } = e;
        return (0, r.jsxs)(i.Kq, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, r.jsx)(i.xv, {
                    variant: "text-sm/semibold",
                    color: "interactive-active",
                    children: t,
                }),
                (0, r.jsx)(a.zxk, {
                    text: n,
                    onClick: o,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    E = () => {
        let e = (0, c.U)(),
            t = (0, f.mq)(_.ne.ACTIVE),
            n = (0, u.PO)("settings-controls"),
            { handleTabChange: a } = (0, d.Z)();
        if (!n || 0 === t.length) return null;
        let E = (e) => {
                a(e);
            },
            b = () => {
                (0, s.xf)(), o.Z.openPrivateChannel({ recipientIds: t.map((e) => e.id) });
            };
        return (0, r.jsxs)(i.Kq, {
            padding: { top: 24 },
            gap: 4,
            children: [
                (0, r.jsx)(i.xv, {
                    variant: "eyebrow",
                    color: "text-secondary",
                    children: h.intl.string(p.default.ahKIJC),
                }),
                (0, r.jsx)(i.Kq, {
                    gap: 8,
                    children: e
                        ? (0, r.jsx)(g, {
                              title: h.intl.string(p.default.X9rW0t),
                              buttonText: h.intl.formatToPlainString(p.default.w0JA3N, { count: t.length }),
                              onButtonPress: b,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(g, {
                                      title: h.intl.string(h.t["+o1pDQ"]),
                                      buttonText: h.intl.string(h.t.bt75u7),
                                      onButtonPress: () => E(_.dG.CONTENT_AND_SOCIAL),
                                  }),
                                  (0, r.jsx)(l.Z, { className: m.divider }),
                                  (0, r.jsx)(g, {
                                      title: h.intl.string(h.t.OAuOHB),
                                      buttonText: h.intl.string(h.t.bt75u7),
                                      onButtonPress: () => E(_.dG.DATA_AND_PRIVACY),
                                  }),
                              ],
                          }),
                }),
            ],
        });
    };
