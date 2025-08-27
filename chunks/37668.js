i.d(e, { default: () => b });
var n = i(951288),
    r = i(647438),
    s = i(442837),
    a = i(82659),
    l = i(481060),
    c = i(594174),
    d = i(63063),
    o = i(86419),
    u = i(778414),
    x = i(872269),
    h = i(228168),
    p = i(388032),
    g = i(107669);
function w(t) {
    let { widget: e, user: i } = t;
    return (0, n.jsx)(u.Z, {
        widget: e,
        user: i,
        isGameFetching: () => !1,
        disableInteraction: !0,
    });
}
function b(t) {
    let { transitionState: e, widget: i, userId: u, onClose: b, trackUserProfileAction: m } = t,
        v = r.useCallback(() => {
            (0, o.y8)(i.type), m({ action: "EDIT_ACTION" }), b(), (0, x.L$)(h.qb.WIDGET_REMOVED);
        }, [i.type, b, m]),
        f = (0, s.e7)([c.default], () => c.default.getUser(u));
    return null == f
        ? null
        : (0, n.jsxs)(a.Modal, {
              transitionState: e,
              onClose: b,
              title: p.intl.string(p.t.Mm07YW),
              subtitle: p.intl.format(p.t["x+djIy"], { helpUrl: d.w }),
              actions: [
                  {
                      variant: "secondary",
                      text: p.intl.string(p.t["ETE/oK"]),
                      onClick: b,
                  },
                  {
                      variant: "critical-primary",
                      text: p.intl.string(p.t.Mm07YW),
                      onClick: v,
                  },
              ],
              children: [
                  (0, n.jsx)("div", {
                      className: g.widgetPreview,
                      children: (0, n.jsx)(w, {
                          widget: i,
                          user: f,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: g.hintText,
                      children: (0, n.jsx)(l.Text, {
                          color: "text-secondary",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeX),
                      }),
                  }),
              ],
          });
}
