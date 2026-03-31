n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(873298),
    a = n(827734),
    r = n(397927),
    o = n(966597),
    c = n(85109),
    d = n(566908),
    u = n(646468),
    h = n(790368),
    A = n(435084),
    _ = n(412484),
    m = n(985018),
    g = n(958766);
function p(e) {
    let { tab: t, setTab: n, badgeState: u, closePopout: A } = e,
        { enabled: _, inInbox: p } = o.A.useConfig({ location: "RecentsPopout" }),
        x = (0, d.Sc)(),
        E = (0, l.bG)([c.A], () => c.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: g.wx,
        children: [
            (0, i.jsxs)("div", {
                className: g.qd,
                children: [
                    (0, i.jsx)(r.K$s, { size: "md", color: "currentColor", className: g.yH }),
                    (0, i.jsx)(r.Heading, {
                        className: g.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: m.intl.string(m.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(r.sqX, {
                        className: g.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": m.intl.string(m.t["8k+6QY"]),
                        children: [(0, i.jsx)(f, { tab: t }), (0, i.jsx)(h.A, { closePopout: A })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: g.YF,
                children: (0, i.jsxs)(r.VQ0, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: g.$H,
                    children: [
                        (0, i.jsxs)(r.VQ0.Item, {
                            id: s.Y2.FOR_YOU,
                            "aria-label": m.intl.string(m.t["En+D+u"]),
                            className: g.Mf,
                            children: [
                                m.intl.string(m.t["En+D+u"]),
                                u?.badgeForYou
                                    ? (0, i.jsx)(r.SC0, {
                                          color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: g.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            id: s.Y2.UNREADS,
                            className: g.Mf,
                            children: m.intl.string(m.t.sRUdB8),
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            "aria-label": m.intl.string(m.t.GRZF96),
                            id: s.Y2.MENTIONS,
                            className: g.Mf,
                            children: m.intl.string(m.t.GRZF96),
                        }),
                        _ && p
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": m.intl.string(m.t["2pAkDA"]),
                                  id: s.Y2.BOOKMARKS,
                                  className: g.Mf,
                                  children:
                                      0 === E
                                          ? m.intl.string(m.t["2pAkDA"])
                                          : m.intl.formatToPlainString(m.t.I4fryG, { count: E }),
                              })
                            : null,
                        x
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": "scheduled",
                                  id: s.Y2.SCHEDULED,
                                  className: g.Mf,
                                  children: m.intl.string(m.t.Fn6Odn),
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
    return t === s.Y2.FOR_YOU
        ? (0, i.jsx)(u.xc, {})
        : t === s.Y2.UNREADS
          ? (0, i.jsx)(_.NH, {})
          : t === s.Y2.MENTIONS
            ? (0, i.jsx)(A.A, {})
            : null;
}
