n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(873298),
    a = n(827734),
    s = n(397927),
    o = n(835835),
    c = n(966597),
    u = n(85109),
    d = n(566908),
    f = n(646468),
    p = n(790368),
    h = n(435084),
    b = n(412484),
    g = n(985018),
    m = n(655967);

function A(e) {
    let { tab: t, setTab: n, badgeState: f, closePopout: h } = e,
        { enabled: b, inInbox: A } = c.A.useExperiment({
            location: "RecentsPopout",
        }),
        O = (0, d.Sc)({
            location: "RecentsHeader",
        }),
        j = (0, l.bG)([u.A], () => u.A.getOverdueMessageReminderCount());
    return (0, r.jsxs)(o.Y9, {
        className: m.wx,
        children: [
            (0, r.jsxs)("div", {
                className: m.qd,
                children: [
                    (0, r.jsx)(s.K$s, {
                        size: "md",
                        color: "currentColor",
                        className: m.yH,
                    }),
                    (0, r.jsx)(s.Heading, {
                        className: m.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: g.intl.string(g.t.GSmTKJ),
                    }),
                    (0, r.jsxs)(s.sqX, {
                        className: m.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: {
                            enabled: !1,
                        },
                        "aria-label": g.intl.string(g.t["8k+6QY"]),
                        children: [
                            (0, r.jsx)(y, {
                                tab: t,
                            }),
                            (0, r.jsx)(p.A, {
                                closePopout: h,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.YF,
                children: (0, r.jsxs)(s.VQ0, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: m.$H,
                    children: [
                        (0, r.jsxs)(s.VQ0.Item, {
                            id: i.Y2.FOR_YOU,
                            "aria-label": g.intl.string(g.t["En+D+u"]),
                            className: m.Mf,
                            children: [
                                g.intl.string(g.t["En+D+u"]),
                                (null == f ? void 0 : f.badgeForYou)
                                    ? (0, r.jsx)(s.SC0, {
                                          color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: m.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(s.VQ0.Item, {
                            id: i.Y2.UNREADS,
                            className: m.Mf,
                            children: g.intl.string(g.t.sRUdB8),
                        }),
                        (0, r.jsx)(s.VQ0.Item, {
                            "aria-label": g.intl.string(g.t.GRZF96),
                            id: i.Y2.MENTIONS,
                            className: m.Mf,
                            children: g.intl.string(g.t.GRZF96),
                        }),
                        b && A
                            ? (0, r.jsx)(s.VQ0.Item, {
                                  "aria-label": g.intl.string(g.t["2pAkDA"]),
                                  id: i.Y2.BOOKMARKS,
                                  className: m.Mf,
                                  children:
                                      0 === j
                                          ? g.intl.string(g.t["2pAkDA"])
                                          : g.intl.formatToPlainString(g.t.I4fryG, {
                                                count: j,
                                            }),
                              })
                            : null,
                        O
                            ? (0, r.jsx)(s.VQ0.Item, {
                                  "aria-label": "scheduled",
                                  id: i.Y2.SCHEDULED,
                                  className: m.Mf,
                                  children: g.intl.string(g.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}

function y(e) {
    let { tab: t } = e;
    return t === i.Y2.FOR_YOU
        ? (0, r.jsx)(f.xc, {})
        : t === i.Y2.UNREADS
          ? (0, r.jsx)(b.NH, {})
          : t === i.Y2.MENTIONS
            ? (0, r.jsx)(h.A, {})
            : null;
}
