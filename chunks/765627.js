n.d(t, { A: () => I });
var s = n(627968);
n(64700);
var a = n(417597),
    l = n(873298),
    i = n(827734),
    r = n(912592),
    o = n(534514),
    d = n(890856),
    c = n(761508),
    u = n(777666),
    h = n(966597),
    _ = n(85109),
    A = n(566908),
    m = n(646468),
    g = n(790368),
    f = n(435084),
    E = n(412484),
    N = n(985018),
    p = n(716030);
function I(e) {
    let { tab: t, setTab: n, badgeState: m, closePopout: f } = e,
        { enabled: E, inInbox: I } = h.A.useConfig({ location: "RecentsPopout" }),
        S = (0, A.Sc)(),
        x = (0, a.bG)([_.A], () => _.A.getOverdueMessageReminderCount());
    return (0, s.jsxs)("div", {
        className: p.wx,
        children: [
            (0, s.jsxs)("div", {
                className: p.qd,
                children: [
                    (0, s.jsx)(r.K, { size: "md", color: "currentColor", className: p.yH }),
                    (0, s.jsx)(o.D, {
                        className: p.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: N.intl.string(N.t.GSmTKJ),
                    }),
                    (0, s.jsxs)(d.s, {
                        className: p.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": N.intl.string(N.t["8k+6QY"]),
                        children: [(0, s.jsx)(C, { tab: t }), (0, s.jsx)(g.A, { closePopout: f })],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: p.YF,
                children: (0, s.jsxs)(c.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: p.$H,
                    children: [
                        (0, s.jsxs)(c.V.Item, {
                            id: l.Y2.FOR_YOU,
                            "aria-label": N.intl.string(N.t["En+D+u"]),
                            className: p.Mf,
                            children: [
                                N.intl.string(N.t["En+D+u"]),
                                m?.badgeForYou
                                    ? (0, s.jsx)(u.SC, {
                                          color: i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: p.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, s.jsx)(c.V.Item, {
                            id: l.Y2.UNREADS,
                            className: p.Mf,
                            children: N.intl.string(N.t.sRUdB8),
                        }),
                        (0, s.jsx)(c.V.Item, {
                            "aria-label": N.intl.string(N.t.GRZF96),
                            id: l.Y2.MENTIONS,
                            className: p.Mf,
                            children: N.intl.string(N.t.GRZF96),
                        }),
                        E && I
                            ? (0, s.jsx)(c.V.Item, {
                                  "aria-label": N.intl.string(N.t["2pAkDA"]),
                                  id: l.Y2.BOOKMARKS,
                                  className: p.Mf,
                                  children:
                                      0 === x
                                          ? N.intl.string(N.t["2pAkDA"])
                                          : N.intl.formatToPlainString(N.t.I4fryG, { count: x }),
                              })
                            : null,
                        S
                            ? (0, s.jsx)(c.V.Item, {
                                  "aria-label": "scheduled",
                                  id: l.Y2.SCHEDULED,
                                  className: p.Mf,
                                  children: N.intl.string(N.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function C(e) {
    let { tab: t } = e;
    return t === l.Y2.FOR_YOU
        ? (0, s.jsx)(m.xc, {})
        : t === l.Y2.UNREADS
          ? (0, s.jsx)(E.NH, {})
          : t === l.Y2.MENTIONS
            ? (0, s.jsx)(f.A, {})
            : null;
}
