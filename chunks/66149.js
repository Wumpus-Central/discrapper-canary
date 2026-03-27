n.d(t, { A: () => E }), n(801541);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(889137),
    o = n(397927),
    c = n(375901),
    d = n(491182),
    u = n(371741),
    h = n(922529),
    m = n(888675),
    A = n(652215),
    g = n(985018),
    p = n(213607),
    f = n(480972);
function _(e) {
    let { expanded: t, onClick: n, count: l, compact: s, collapsedReason: a, canUncollapse: c = !0 } = e,
        u = (0, r.YW)({ collapsedReason: a })
            .with({ collapsedReason: g.t["VFWjc+"] }, () =>
                (0, i.jsx)(o.G3N, { size: "md", color: "currentColor", className: p.Q6 }),
            )
            .with({ collapsedReason: g.t["+FcYM/"] }, () =>
                (0, i.jsx)(o.KTN, { size: "md", color: "currentColor", className: p.Q6 }),
            )
            .with({ collapsedReason: g.t.rHRovo }, () =>
                (0, i.jsx)(o._mZ, { size: "md", color: "currentColor", className: p.TG }),
            )
            .otherwise(() => (0, i.jsx)(o.PGe, { size: "md", color: "currentColor", className: p.Q6 }));
    return (0, i.jsx)(d.A, {
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(m.A, {
            compact: s,
            className: p.L9,
            iconNode: u,
            children: (0, i.jsxs)("div", {
                className: c ? p.Fo : p.GU,
                children: [
                    g.intl.format(a, { count: l }),
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " — ",
                                (0, i.jsx)(o.DUT, {
                                    tag: "span",
                                    onClick: n,
                                    className: p.rB,
                                    children: t ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let E = l.memo(function (e) {
    let { messages: t, channel: n, compact: s = !1, unreadId: r, collapsedReason: o, canUncollapse: d = !0 } = e,
        { hasJumpTarget: m = !1 } = t,
        [g, E] = l.useState(m && d),
        x = l.useCallback(() => {
            d && E((e) => !e);
        }, [d]);
    l.useEffect(() => {
        m && d && E(!0);
    }, [m, d]);
    let C = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, i.jsxs)("div", {
        className: a()({ [f._A]: !0, [p.sz]: g }),
        children: [
            t.hasUnread && (!g || t.content[0]?.type === A.TZK.DIVIDER)
                ? (0, i.jsx)(h.A, { isUnread: !0, id: r }, "divider")
                : null,
            (0, i.jsx)(
                _,
                { count: C, compact: s, expanded: g, onClick: x, collapsedReason: o, canUncollapse: d },
                "collapsed-message-item",
            ),
            g
                ? t.content.map((e, l) => {
                      if (e.type === A.TZK.DIVIDER && l > 0) {
                          let e = t.content[l + 1]?.isGroupStart ?? !1;
                          return (0, i.jsx)(h.A, { isUnread: !0, isBeforeGroup: e, id: r }, "divider");
                      }
                      if (e.type === A.TZK.MESSAGE || e.type === A.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === A.TZK.THREAD_STARTER_MESSAGE ? u.VO : u.Ay;
                          return (0, i.jsx)(
                              t,
                              {
                                  id: (0, c.j)(n.id, e.content.id),
                                  className: p.__invalid_blocked,
                                  compact: s,
                                  channel: n,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1,
                              },
                              e.content.id,
                          );
                      }
                  })
                : null,
        ],
    });
});
