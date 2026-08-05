e.d(i, { default: () => b });
var n = e(477900),
    l = e(582128),
    s = e(189213),
    a = e(17928),
    r = e(834730),
    c = e(287809),
    d = e(975571),
    o = e(735321),
    u = e(177e3),
    x = e(384377),
    E = e(518477),
    h = e(375708),
    p = e(732208);
function g(t) {
    let { widget: i, user: e } = t;
    return (0, n.jsx)(u.u, { widget: i, user: e, allowEditing: !1, disableInteraction: !0 });
}
function b(t) {
    let { transitionState: i, widget: e, userId: u, onClose: b, trackUserProfileEditAction: j } = t,
        m = l.useCallback(() => {
            (0, o.qA)(e),
                j({ action: "WIDGET_REMOVED", ...e.getProfileEditAnalyticsOptions() }),
                b(),
                (0, x.XA)(E.jM.WIDGET_REMOVED);
        }, [e, b, j]),
        C = (0, a.bG)([c.default], () => c.default.getUser(u));
    return null == C
        ? null
        : (0, n.jsxs)(s.Modal, {
              transitionState: i,
              onClose: b,
              title: h.intl.string(h.t.Mm07Yc),
              subtitle: h.intl.format(h.t["x+djI4"], { helpUrl: d.C }),
              actions: [
                  { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: b },
                  { variant: "critical-primary", text: h.intl.string(h.t.Mm07Yc), onClick: m },
              ],
              children: [
                  (0, n.jsx)("div", { className: p.w, children: (0, n.jsx)(g, { widget: e, user: C }) }),
                  (0, n.jsx)("div", {
                      className: p.d,
                      children: (0, n.jsx)(r.E, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: h.intl.string(h.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
