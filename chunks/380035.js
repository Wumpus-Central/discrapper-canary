i.d(n, { default: () => b });
var t = i(627968),
    a = i(64700),
    l = i(189213),
    r = i(311907),
    o = i(834730),
    c = i(287809),
    d = i(975571),
    s = i(735321),
    _ = i(463259),
    u = i(606758),
    p = i(518477),
    g = i(985018),
    v = i(708584);
function m(e) {
    let { widget: n, user: i } = e;
    return (0, t.jsx)(_.u, { widget: n, user: i, disableInteraction: !0 });
}
function b(e) {
    let { transitionState: n, widget: i, userId: _, onClose: b, trackUserProfileEditAction: C } = e,
        y = a.useCallback(() => {
            (0, s.qA)(i),
                C({ action: "WIDGET_REMOVED", ...i.getProfileEditAnalyticsOptions() }),
                b(),
                (0, u.XA)(p.jM.WIDGET_REMOVED);
        }, [i, b, C]),
        f = (0, r.bG)([c.default], () => c.default.getUser(_));
    return null == f
        ? null
        : (0, t.jsxs)(l.Modal, {
              transitionState: n,
              onClose: b,
              title: g.intl.string(g.t.Mm07Yc),
              subtitle: g.intl.format(g.t["x+djI4"], { helpUrl: d.C }),
              actions: [
                  { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: b },
                  { variant: "critical-primary", text: g.intl.string(g.t.Mm07Yc), onClick: y },
              ],
              children: [
                  (0, t.jsx)("div", { className: v.w, children: (0, t.jsx)(m, { widget: i, user: f }) }),
                  (0, t.jsx)("div", {
                      className: v.d,
                      children: (0, t.jsx)(o.E, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: g.intl.string(g.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
