e.d(i, { default: () => E });
var n = e(627968),
    l = e(64700),
    s = e(158954),
    r = e(311907),
    a = e(397927),
    c = e(287809),
    d = e(975571),
    o = e(735321),
    u = e(463259),
    x = e(606758),
    h = e(518477),
    p = e(985018),
    b = e(34589);
function g(t) {
    let { widget: i, user: e } = t;
    return (0, n.jsx)(u.u, { widget: i, user: e, disableInteraction: !0 });
}
function E(t) {
    let { transitionState: i, widget: e, userId: u, onClose: E, trackUserProfileEditAction: j } = t,
        m = l.useCallback(() => {
            (0, o.qA)(e),
                j({ action: "WIDGET_REMOVED", ...e.getProfileEditAnalyticsOptions() }),
                E(),
                (0, x.XA)(h.jM.WIDGET_REMOVED);
        }, [e, E, j]),
        w = (0, r.bG)([c.default], () => c.default.getUser(u));
    return null == w
        ? null
        : (0, n.jsxs)(s.Modal, {
              transitionState: i,
              onClose: E,
              title: p.intl.string(p.t.Mm07Yc),
              subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: d.C }),
              actions: [
                  { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: E },
                  { variant: "critical-primary", text: p.intl.string(p.t.Mm07Yc), onClick: m },
              ],
              children: [
                  (0, n.jsx)("div", { className: b.w, children: (0, n.jsx)(g, { widget: e, user: w }) }),
                  (0, n.jsx)("div", {
                      className: b.d,
                      children: (0, n.jsx)(a.Text, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
