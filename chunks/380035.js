n.d(i, { default: () => b });
var e = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(17928),
    r = n(834730),
    c = n(287809),
    d = n(975571),
    o = n(735321),
    u = n(890093),
    x = n(384377),
    E = n(518477),
    h = n(375708),
    p = n(708584);
function g(t) {
    let { widget: i, user: n } = t;
    return (0, e.jsx)(u.u, { widget: i, user: n, allowEditing: !1, disableInteraction: !0 });
}
function b(t) {
    let { transitionState: i, widget: n, userId: u, onClose: b, trackUserProfileEditAction: j } = t,
        m = l.useCallback(() => {
            (0, o.qA)(n),
                j({ action: "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() }),
                b(),
                (0, x.XA)(E.jM.WIDGET_REMOVED);
        }, [n, b, j]),
        C = (0, a.bG)([c.default], () => c.default.getUser(u));
    return null == C
        ? null
        : (0, e.jsxs)(s.Modal, {
              transitionState: i,
              onClose: b,
              title: h.intl.string(h.t.Mm07Yc),
              subtitle: h.intl.format(h.t["x+djI4"], { helpUrl: d.C }),
              actions: [
                  { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: b },
                  { variant: "critical-primary", text: h.intl.string(h.t.Mm07Yc), onClick: m },
              ],
              children: [
                  (0, e.jsx)("div", { className: p.w, children: (0, e.jsx)(g, { widget: n, user: C }) }),
                  (0, e.jsx)("div", {
                      className: p.d,
                      children: (0, e.jsx)(r.E, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: h.intl.string(h.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
