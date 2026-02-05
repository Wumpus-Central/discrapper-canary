n.d(t, { A: () => E }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(889137),
    o = n(397927),
    c = n(375901),
    d = n(491182),
    u = n(371741),
    h = n(922529),
    m = n(888675),
    A = n(652215),
    p = n(985018),
    g = n(410132),
    f = n(119907);
function _(e) {
    let { expanded: t, onClick: n, count: l, compact: a, collapsedReason: s, canUncollapse: c = !0 } = e,
        u = (0, r.YW)({ collapsedReason: s })
            .with({ collapsedReason: p.t["VFWjc+"] }, () =>
                (0, i.jsx)(o.G3N, { size: "md", color: "currentColor", className: g.Q6 }),
            )
            .with({ collapsedReason: p.t["+FcYM/"] }, () =>
                (0, i.jsx)(o.KTN, { size: "md", color: "currentColor", className: g.Q6 }),
            )
            .otherwise(() => (0, i.jsx)(o.PGe, { size: "md", color: "currentColor", className: g.Q6 })),
        h = c ? u : (0, i.jsx)(o.DUT, { tag: "span", onClick: n, className: g.Y4, children: u });
    return (0, i.jsx)(d.A, {
        compact: a,
        role: "group",
        childrenMessageContent: (0, i.jsx)(m.A, {
            compact: a,
            className: g.L9,
            iconNode: h,
            children: (0, i.jsxs)("div", {
                className: g.Fo,
                children: [
                    p.intl.format(s, { count: l }),
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " — ",
                                (0, i.jsx)(o.DUT, {
                                    tag: "span",
                                    onClick: n,
                                    className: g.rB,
                                    children: t ? p.intl.string(p.t.fgq1gs) : p.intl.string(p.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let E = l.memo(function (e) {
    let { messages: t, channel: n, compact: a = !1, unreadId: r, collapsedReason: o, canUncollapse: d = !0 } = e,
        { hasJumpTarget: m = !1 } = t,
        [p, E] = l.useState(m && d),
        [C, x] = l.useState(!1),
        S = l.useCallback(() => {
            d ? E((e) => !e) : x(!0);
        }, [d]);
    if (
        (l.useEffect(() => {
            m && d && E(!0);
        }, [m, d]),
        C)
    )
        return null;
    let T = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, i.jsxs)("div", {
        className: s()({ [f._A]: !0, [g.sz]: p }),
        children: [
            t.hasUnread && (!p || t.content[0]?.type === A.TZK.DIVIDER)
                ? (0, i.jsx)(h.A, { isUnread: !0, id: r }, "divider")
                : null,
            (0, i.jsx)(
                _,
                { count: T, compact: a, expanded: p, onClick: S, collapsedReason: o, canUncollapse: d },
                "collapsed-message-item",
            ),
            p
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
                                  className: g.__invalid_blocked,
                                  compact: a,
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
