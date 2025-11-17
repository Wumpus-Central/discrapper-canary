i.d(e, { default: () => b });
var n = i(54381),
    r = i(473749),
    s = i(793030),
    l = i(442837),
    a = i(481060),
    c = i(594174),
    d = i(63063),
    o = i(86419),
    u = i(778414),
    x = i(872269),
    h = i(228168),
    p = i(388032),
    w = i(107669);
function g(t) {
    let { widget: e, user: i } = t;
    return (0, n.jsx)(u.Z, {
        widget: e,
        user: i,
        disableInteraction: !0,
    });
}
function b(t) {
    let { transitionState: e, widget: i, userId: u, onClose: b, trackUserProfileEditAction: v } = t,
        E = r.useCallback(() => {
            (0, o.y8)(i.type),
                v({
                    action: "WIDGET_REMOVED",
                    widgetEdited: i.type,
                }),
                b(),
                (0, x.L$)(h.qb.WIDGET_REMOVED);
        }, [i.type, b, v]),
        f = (0, l.e7)([c.default], () => c.default.getUser(u));
    return null == f
        ? null
        : (0, n.jsxs)(s.Modal, {
              transitionState: e,
              onClose: b,
              title: p.intl.string(p.t.Mm07Yc),
              subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: d.w }),
              actions: [
                  {
                      variant: "secondary",
                      text: p.intl.string(p.t["ETE/oC"]),
                      onClick: b,
                  },
                  {
                      variant: "critical-primary",
                      text: p.intl.string(p.t.Mm07Yc),
                      onClick: E,
                  },
              ],
              children: [
                  (0, n.jsx)("div", {
                      className: w.widgetPreview,
                      children: (0, n.jsx)(g, {
                          widget: i,
                          user: f,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: w.hintText,
                      children: (0, n.jsx)(a.Text, {
                          color: "text-secondary",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
