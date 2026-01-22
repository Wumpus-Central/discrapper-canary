n.d(t, {
    A: () => y,
}),
    n(801541),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(889137),
    o = n(397927),
    c = n(375901),
    u = n(491182),
    d = n(371741),
    f = n(922529),
    p = n(888675),
    h = n(652215),
    b = n(985018),
    g = n(410132),
    m = n(119907);

function A(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: a } = e,
        c = (0, s.YW)({
            collapsedReason: a,
        })
            .with(
                {
                    collapsedReason: b.t["VFWjc+"],
                },
                () =>
                    (0, r.jsx)(o.G3N, {
                        size: "md",
                        color: "currentColor",
                        className: g.Q6,
                    }),
            )
            .with(
                {
                    collapsedReason: b.t["+FcYM/"],
                },
                () =>
                    (0, r.jsx)(o.KTN, {
                        size: "md",
                        color: "currentColor",
                        className: g.Q6,
                    }),
            )
            .otherwise(() =>
                (0, r.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: g.Q6,
                }),
            );
    return (0, r.jsx)(u.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(p.A, {
            compact: i,
            className: g.L9,
            iconNode: c,
            children: (0, r.jsxs)("div", {
                className: g.Fo,
                children: [
                    b.intl.format(a, {
                        count: l,
                    }),
                    " —",
                    " ",
                    (0, r.jsx)(o.DUT, {
                        tag: "span",
                        onClick: n,
                        className: g.rB,
                        children: t ? b.intl.string(b.t.fgq1gs) : b.intl.string(b.t.XJuakA),
                    }),
                ],
            }),
        }),
    });
}
let y = l.memo(function (e) {
    var t;
    let { messages: n, channel: i, compact: s = !1, unreadId: o, collapsedReason: u } = e,
        { hasJumpTarget: p = !1 } = n,
        [b, y] = l.useState(p),
        O = l.useCallback(() => y((e) => !e), []);
    l.useEffect(() => {
        p && y(!0);
    }, [p]);
    let j = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)("div", {
        className: a()({
            [m._A]: !0,
            [g.sz]: b,
        }),
        children: [
            n.hasUnread && (!b || (null == (t = n.content[0]) ? void 0 : t.type) === h.TZK.DIVIDER)
                ? (0, r.jsx)(
                      f.A,
                      {
                          isUnread: !0,
                          id: o,
                      },
                      "divider",
                  )
                : null,
            (0, r.jsx)(
                A,
                {
                    count: j,
                    compact: s,
                    expanded: b,
                    onClick: O,
                    collapsedReason: u,
                },
                "collapsed-message-item",
            ),
            b
                ? n.content.map((e, t) => {
                      if (e.type === h.TZK.DIVIDER && t > 0) {
                          var l, a;
                          let e = null != (l = null == (a = n.content[t + 1]) ? void 0 : a.isGroupStart) && l;
                          return (0, r.jsx)(
                              f.A,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: o,
                              },
                              "divider",
                          );
                      }
                      if (e.type === h.TZK.MESSAGE || e.type === h.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === h.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, c.j)(i.id, e.content.id),
                                  className: g.__invalid_blocked,
                                  compact: s,
                                  channel: i,
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
