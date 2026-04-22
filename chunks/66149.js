n.d(t, { A: () => I }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(889137),
    o = n(952270),
    c = n(428678),
    d = n(353182),
    u = n(789645),
    h = n(939249),
    m = n(375901),
    A = n(491182),
    g = n(371741),
    p = n(922529),
    _ = n(888675),
    f = n(652215),
    E = n(985018),
    C = n(21623),
    x = n(701628);
function S(e) {
    let { expanded: t, onClick: n, count: l, compact: a, collapsedReason: s, canUncollapse: m = !0 } = e,
        g = (0, r.YW)({ collapsedReason: s })
            .with({ collapsedReason: E.t["VFWjc+"] }, () =>
                (0, i.jsx)(o.G, { size: "md", color: "currentColor", className: C.Q6 }),
            )
            .with({ collapsedReason: E.t["+FcYM/"] }, () =>
                (0, i.jsx)(c.K, { size: "md", color: "currentColor", className: C.Q6 }),
            )
            .with({ collapsedReason: E.t.rHRovo }, () =>
                (0, i.jsx)(d._, { size: "md", color: "currentColor", className: C.TG }),
            )
            .otherwise(() => (0, i.jsx)(u.P, { size: "md", color: "currentColor", className: C.Q6 }));
    return (0, i.jsx)(A.A, {
        compact: a,
        role: "group",
        childrenMessageContent: (0, i.jsx)(_.A, {
            compact: a,
            className: C.L9,
            iconNode: g,
            children: (0, i.jsxs)("div", {
                className: m ? C.Fo : C.GU,
                children: [
                    E.intl.format(s, { count: l }),
                    m &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " — ",
                                (0, i.jsx)(h.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: C.rB,
                                    children: t ? E.intl.string(E.t.fgq1gs) : E.intl.string(E.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let I = l.memo(function (e) {
    let { messages: t, channel: n, compact: a = !1, unreadId: r, collapsedReason: o, canUncollapse: c = !0 } = e,
        { hasJumpTarget: d = !1 } = t,
        [u, h] = l.useState(d && c),
        A = l.useCallback(() => {
            c && h((e) => !e);
        }, [c]);
    l.useEffect(() => {
        d && c && h(!0);
    }, [d, c]);
    let _ = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, i.jsxs)("div", {
        className: s()({ [x._A]: !0, [C.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === f.TZK.DIVIDER)
                ? (0, i.jsx)(p.A, { isUnread: !0, id: r }, "divider")
                : null,
            (0, i.jsx)(
                S,
                { count: _, compact: a, expanded: u, onClick: A, collapsedReason: o, canUncollapse: c },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, l) => {
                      if (e.type === f.TZK.DIVIDER && l > 0) {
                          let e = t.content[l + 1]?.isGroupStart ?? !1;
                          return (0, i.jsx)(p.A, { isUnread: !0, isBeforeGroup: e, id: r }, "divider");
                      }
                      if (e.type === f.TZK.MESSAGE || e.type === f.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === f.TZK.THREAD_STARTER_MESSAGE ? g.VO : g.Ay;
                          return (0, i.jsx)(
                              t,
                              {
                                  id: (0, m.j)(n.id, e.content.id),
                                  className: C.__invalid_blocked,
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
