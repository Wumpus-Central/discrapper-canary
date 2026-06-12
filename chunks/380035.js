e.d(i, { default: () => g });
var n = e(627968),
    l = e(64700),
    s = e(189213),
    a = e(17928),
    r = e(834730),
    c = e(287809),
    d = e(975571),
    o = e(735321),
    u = e(598161),
    x = e(606758),
    h = e(518477),
    p = e(375708),
    E = e(708584);
function b(t) {
    let { widget: i, user: e } = t;
    return (0, n.jsx)(u.u, { widget: i, user: e, disableInteraction: !0 });
}
function g(t) {
    let { transitionState: i, widget: e, userId: u, onClose: g, trackUserProfileEditAction: j } = t,
        m = l.useCallback(() => {
            (0, o.qA)(e),
                j({ action: "WIDGET_REMOVED", ...e.getProfileEditAnalyticsOptions() }),
                g(),
                (0, x.XA)(h.jM.WIDGET_REMOVED);
        }, [e, g, j]),
        C = (0, a.bG)([c.default], () => c.default.getUser(u));
    return null == C
        ? null
        : (0, n.jsxs)(s.Modal, {
              transitionState: i,
              onClose: g,
              title: p.intl.string(p.t.Mm07Yc),
              subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: d.C }),
              actions: [
                  { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: g },
                  { variant: "critical-primary", text: p.intl.string(p.t.Mm07Yc), onClick: m },
              ],
              children: [
                  (0, n.jsx)("div", { className: E.w, children: (0, n.jsx)(b, { widget: e, user: C }) }),
                  (0, n.jsx)("div", {
                      className: E.d,
                      children: (0, n.jsx)(r.E, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
