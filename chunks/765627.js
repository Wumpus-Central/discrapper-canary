"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(873298),
    a = n(827734),
    r = n(397927),
    o = n(966597),
    c = n(85109),
    d = n(566908),
    u = n(646468),
    h = n(790368),
    A = n(435084),
    m = n(412484),
    _ = n(985018),
    p = n(655967);
function g(e) {
    let { tab: t, setTab: n, badgeState: u, closePopout: A } = e,
        { enabled: m, inInbox: g } = o.A.useConfig({ location: "RecentsPopout" }),
        x = (0, d.Sc)(),
        C = (0, s.bG)([c.A], () => c.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: p.wx,
        children: [
            (0, i.jsxs)("div", {
                className: p.qd,
                children: [
                    (0, i.jsx)(r.K$s, { size: "md", color: "currentColor", className: p.yH }),
                    (0, i.jsx)(r.Heading, {
                        className: p.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: _.intl.string(_.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(r.sqX, {
                        className: p.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": _.intl.string(_.t["8k+6QY"]),
                        children: [(0, i.jsx)(f, { tab: t }), (0, i.jsx)(h.A, { closePopout: A })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: p.YF,
                children: (0, i.jsxs)(r.VQ0, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: p.$H,
                    children: [
                        (0, i.jsxs)(r.VQ0.Item, {
                            id: l.Y2.FOR_YOU,
                            "aria-label": _.intl.string(_.t["En+D+u"]),
                            className: p.Mf,
                            children: [
                                _.intl.string(_.t["En+D+u"]),
                                u?.badgeForYou
                                    ? (0, i.jsx)(r.SC0, {
                                          color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: p.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            id: l.Y2.UNREADS,
                            className: p.Mf,
                            children: _.intl.string(_.t.sRUdB8),
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            "aria-label": _.intl.string(_.t.GRZF96),
                            id: l.Y2.MENTIONS,
                            className: p.Mf,
                            children: _.intl.string(_.t.GRZF96),
                        }),
                        m && g
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": _.intl.string(_.t["2pAkDA"]),
                                  id: l.Y2.BOOKMARKS,
                                  className: p.Mf,
                                  children:
                                      0 === C
                                          ? _.intl.string(_.t["2pAkDA"])
                                          : _.intl.formatToPlainString(_.t.I4fryG, { count: C }),
                              })
                            : null,
                        x
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": "scheduled",
                                  id: l.Y2.SCHEDULED,
                                  className: p.Mf,
                                  children: _.intl.string(_.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function f(e) {
    let { tab: t } = e;
    return t === l.Y2.FOR_YOU
        ? (0, i.jsx)(u.xc, {})
        : t === l.Y2.UNREADS
          ? (0, i.jsx)(m.NH, {})
          : t === l.Y2.MENTIONS
            ? (0, i.jsx)(A.A, {})
            : null;
}
