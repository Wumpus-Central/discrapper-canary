n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(873298),
    a = n(827734),
    r = n(397927),
    o = n(835835),
    d = n(966597),
    c = n(85109),
    u = n(566908),
    h = n(646468),
    A = n(790368),
    g = n(435084),
    m = n(412484),
    p = n(985018),
    _ = n(655967);
function x(e) {
    let { tab: t, setTab: n, badgeState: h, closePopout: g } = e,
        { enabled: m, inInbox: x } = d.A.useExperiment({ location: "RecentsPopout" }),
        E = (0, u.Sc)({ location: "RecentsHeader" }),
        C = (0, l.bG)([c.A], () => c.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.Y9, {
        className: _.wx,
        children: [
            (0, i.jsxs)("div", {
                className: _.qd,
                children: [
                    (0, i.jsx)(r.K$s, { size: "md", color: "currentColor", className: _.yH }),
                    (0, i.jsx)(r.Heading, {
                        className: _.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: p.intl.string(p.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(r.sqX, {
                        className: _.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": p.intl.string(p.t["8k+6QY"]),
                        children: [(0, i.jsx)(f, { tab: t }), (0, i.jsx)(A.A, { closePopout: g })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _.YF,
                children: (0, i.jsxs)(r.VQ0, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: _.$H,
                    children: [
                        (0, i.jsxs)(r.VQ0.Item, {
                            id: s.Y2.FOR_YOU,
                            "aria-label": p.intl.string(p.t["En+D+u"]),
                            className: _.Mf,
                            children: [
                                p.intl.string(p.t["En+D+u"]),
                                h?.badgeForYou
                                    ? (0, i.jsx)(r.SC0, {
                                          color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: _.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            id: s.Y2.UNREADS,
                            className: _.Mf,
                            children: p.intl.string(p.t.sRUdB8),
                        }),
                        (0, i.jsx)(r.VQ0.Item, {
                            "aria-label": p.intl.string(p.t.GRZF96),
                            id: s.Y2.MENTIONS,
                            className: _.Mf,
                            children: p.intl.string(p.t.GRZF96),
                        }),
                        m && x
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": p.intl.string(p.t["2pAkDA"]),
                                  id: s.Y2.BOOKMARKS,
                                  className: _.Mf,
                                  children:
                                      0 === C
                                          ? p.intl.string(p.t["2pAkDA"])
                                          : p.intl.formatToPlainString(p.t.I4fryG, { count: C }),
                              })
                            : null,
                        E
                            ? (0, i.jsx)(r.VQ0.Item, {
                                  "aria-label": "scheduled",
                                  id: s.Y2.SCHEDULED,
                                  className: _.Mf,
                                  children: p.intl.string(p.t.Fn6Odn),
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
        ? (0, i.jsx)(h.xc, {})
        : t === s.Y2.UNREADS
          ? (0, i.jsx)(m.NH, {})
          : t === s.Y2.MENTIONS
            ? (0, i.jsx)(g.A, {})
            : null;
}
