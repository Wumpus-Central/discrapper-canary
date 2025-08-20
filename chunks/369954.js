n.d(t, { J: () => g });
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(481060),
    o = n(493683),
    s = n(37234),
    l = n(511010),
    c = n(981312),
    u = n(277537),
    d = n(631885),
    f = n(292352),
    _ = n(345909),
    p = n(388032),
    h = n(271650);
let m = (e) => {
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
    g = () => {
        let e = (0, c.U)(),
            t = (0, d.mq)(f.ne.ACTIVE);
        if (!(0, u.PO)("settings-controls") || 0 === t.length) return null;
        let n = (e) => {},
            a = () => {
                (0, s.xf)(), o.Z.openPrivateChannel({ recipientIds: t.map((e) => e.id) });
            };
        return (0, r.jsxs)(i.Kq, {
            padding: { top: 24 },
            gap: 4,
            children: [
                (0, r.jsx)(i.xv, {
                    variant: "eyebrow",
                    color: "text-secondary",
                    children: p.intl.string(_.default.ahKIJC),
                }),
                (0, r.jsx)(i.Kq, {
                    gap: 8,
                    children: e
                        ? (0, r.jsx)(m, {
                              title: p.intl.string(_.default.X9rW0t),
                              buttonText: p.intl.formatToPlainString(_.default.w0JA3N, { count: t.length }),
                              onButtonPress: a,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(m, {
                                      title: p.intl.string(p.t["+o1pDQ"]),
                                      buttonText: p.intl.string(p.t.bt75u7),
                                      onButtonPress: () => n("content_and_social"),
                                  }),
                                  (0, r.jsx)(l.Z, { className: h.divider }),
                                  (0, r.jsx)(m, {
                                      title: p.intl.string(p.t.OAuOHB),
                                      buttonText: p.intl.string(p.t.bt75u7),
                                      onButtonPress: () => n("data_and_privacy"),
                                  }),
                              ],
                          }),
                }),
            ],
        });
    };
