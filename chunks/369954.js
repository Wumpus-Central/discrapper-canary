n.d(t, { J: () => b });
var i = n(951288);
n(647438);
var r = n(793030),
    s = n(481060),
    a = n(493683),
    l = n(37234),
    o = n(511010),
    c = n(981312),
    d = n(277537),
    u = n(631885),
    m = n(292352),
    p = n(345909),
    g = n(388032),
    h = n(271650);
let f = (e) => {
        let { title: t, buttonText: n, onButtonPress: a } = e;
        return (0, i.jsxs)(r.Kq, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsx)(r.xv, {
                    variant: "text-sm/semibold",
                    color: "interactive-active",
                    children: t,
                }),
                (0, i.jsx)(s.zxk, {
                    text: n,
                    onClick: a,
                    variant: "secondary",
                    size: "sm",
                }),
            ],
        });
    },
    b = () => {
        let e = (0, c.U)(),
            t = (0, u.mq)(m.ne.ACTIVE);
        if (!(0, d.PO)("settings-controls") || 0 === t.length) return null;
        let n = (e) => {};
        return (0, i.jsxs)(r.Kq, {
            padding: { top: 24 },
            gap: 4,
            children: [
                (0, i.jsx)(r.xv, {
                    variant: "eyebrow",
                    color: "text-secondary",
                    children: g.intl.string(p.default.ahKIJC),
                }),
                (0, i.jsx)(r.Kq, {
                    gap: 8,
                    children: e
                        ? (0, i.jsx)(f, {
                              title: g.intl.string(p.default.X9rW0t),
                              buttonText: g.intl.formatToPlainString(p.default.w0JA3N, { count: t.length }),
                              onButtonPress: () => {
                                  (0, l.xf)(), a.Z.openPrivateChannel({ recipientIds: t.map((e) => e.id) });
                              },
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f, {
                                      title: g.intl.string(g.t["+o1pDQ"]),
                                      buttonText: g.intl.string(g.t.bt75u7),
                                      onButtonPress: () => n("content_and_social"),
                                  }),
                                  (0, i.jsx)(o.Z, { className: h.divider }),
                                  (0, i.jsx)(f, {
                                      title: g.intl.string(g.t.OAuOHB),
                                      buttonText: g.intl.string(g.t.bt75u7),
                                      onButtonPress: () => n("data_and_privacy"),
                                  }),
                              ],
                          }),
                }),
            ],
        });
    };
