e.d(i, { default: () => b });
var n = e(54381),
    a = e(473749),
    r = e(793030),
    l = e(442837),
    s = e(481060),
    c = e(594174),
    d = e(63063),
    o = e(931847),
    u = e(86419),
    p = e(778414),
    x = e(872269),
    h = e(228168),
    w = e(388032),
    g = e(107669);
function v(t) {
    let { widget: i, user: e } = t;
    return (0, n.jsx)(p.Z, {
        widget: i,
        user: e,
        disableInteraction: !0,
    });
}
function b(t) {
    let { transitionState: i, widget: e, userId: p, onClose: b, trackUserProfileEditAction: f } = t,
        E = a.useCallback(() => {
            (0, u.y8)(e.type),
                f({
                    action: "WIDGET_REMOVED",
                    widgetEdited: e.type,
                    applicationId: e instanceof o.q ? e.applicationId : void 0,
                }),
                b(),
                (0, x.L$)(h.qb.WIDGET_REMOVED);
        }, [e, b, f]),
        m = (0, l.e7)([c.default], () => c.default.getUser(p));
    return null == m
        ? null
        : (0, n.jsxs)(r.Modal, {
              transitionState: i,
              onClose: b,
              title: w.intl.string(w.t.Mm07Yc),
              subtitle: w.intl.format(w.t["x+djI4"], { helpUrl: d.w }),
              actions: [
                  {
                      variant: "secondary",
                      text: w.intl.string(w.t["ETE/oC"]),
                      onClick: b,
                  },
                  {
                      variant: "critical-primary",
                      text: w.intl.string(w.t.Mm07Yc),
                      onClick: E,
                  },
              ],
              children: [
                  (0, n.jsx)("div", {
                      className: g.widgetPreview,
                      children: (0, n.jsx)(v, {
                          widget: e,
                          user: m,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: g.hintText,
                      children: (0, n.jsx)(s.Text, {
                          color: "text-secondary",
                          variant: "text-sm/normal",
                          children: w.intl.string(w.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
