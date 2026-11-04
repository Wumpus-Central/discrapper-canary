var e = n(477900),
    l = n(582128),
    s = n(855986),
    a = n(189213),
    r = n(834730),
    c = n(287809),
    d = n(975571),
    o = n(735321),
    u = n(720060),
    E = n(384377),
    h = n(518477),
    p = n(792996),
    x = n(511177);
function b(t) {
    let { widget: i, user: n } = t;
    return (0, e.jsx)(u.u, { widget: i, user: n, allowEditing: !1, disableInteraction: !0 });
}
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, widget: n, userId: u, onClose: g, trackUserProfileEditAction: j } = t,
                m = l.useCallback(() => {
                    ((0, o.qA)(n),
                        j({ action: "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() }),
                        g(),
                        (0, E.XA)(h.jM.WIDGET_REMOVED));
                }, [n, g, j]),
                C = (0, s.bG)([c.default], () => c.default.getUser(u));
            return null == C
                ? null
                : (0, e.jsxs)(a.a, {
                      transitionState: i,
                      onClose: g,
                      title: p.intl.string(p.t.Mm07Yc),
                      subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: d.C }),
                      actions: [
                          { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: g },
                          { variant: "critical-primary", text: p.intl.string(p.t.Mm07Yc), onClick: m },
                      ],
                      children: [
                          (0, e.jsx)("div", { className: x.w, children: (0, e.jsx)(b, { widget: n, user: C }) }),
                          (0, e.jsx)("div", {
                              className: x.d,
                              children: (0, e.jsx)(r.E, {
                                  color: "text-subtle",
                                  variant: "body-sm/normal",
                                  children: p.intl.string(p.t.bQNGeT),
                              }),
                          }),
                      ],
                  });
        },
    },
);
