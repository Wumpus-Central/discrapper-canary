n.d(e, { default: () => h });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(442837),
    c = n(481060),
    o = n(594174),
    s = n(63063),
    u = n(86419),
    d = n(778414),
    b = n(872269),
    f = n(228168),
    p = n(388032),
    g = n(107669);
function x(t) {
    let { widget: e, user: n } = t;
    return (0, i.jsx)(d.Z, {
        widget: e,
        user: n,
        disableInteraction: !0,
    });
}
function h(t) {
    let { transitionState: e, widget: n, userId: d, onClose: h, trackUserProfileEditAction: w } = t,
        y = r.useCallback(() => {
            (0, u.y8)(n.type),
                w(
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                i.forEach(function (e) {
                                    var i;
                                    (i = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = i);
                                });
                        }
                        return t;
                    })({ action: "WIDGET_REMOVED" }, n.getProfileEditAnalyticsOptions()),
                ),
                h(),
                (0, b.L$)(f.qb.WIDGET_REMOVED);
        }, [n, h, w]),
        v = (0, a.e7)([o.default], () => o.default.getUser(d));
    return null == v
        ? null
        : (0, i.jsxs)(l.Modal, {
              transitionState: e,
              onClose: h,
              title: p.intl.string(p.t.Mm07Yc),
              subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: s.w }),
              actions: [
                  {
                      variant: "secondary",
                      text: p.intl.string(p.t["ETE/oC"]),
                      onClick: h,
                  },
                  {
                      variant: "critical-primary",
                      text: p.intl.string(p.t.Mm07Yc),
                      onClick: y,
                  },
              ],
              children: [
                  (0, i.jsx)("div", {
                      className: g.widgetPreview,
                      children: (0, i.jsx)(x, {
                          widget: n,
                          user: v,
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: g.hintText,
                      children: (0, i.jsx)(c.Text, {
                          color: "text-secondary",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
