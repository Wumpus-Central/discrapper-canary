n.d(e, { default: () => x });
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    c = n(397927),
    s = n(287809),
    o = n(975571),
    u = n(735321),
    d = n(463259),
    f = n(384377),
    b = n(518477),
    p = n(985018),
    g = n(22047);
function j(t) {
    let { widget: e, user: n } = t;
    return (0, r.jsx)(d.u, {
        widget: e,
        user: n,
        disableInteraction: !0,
    });
}
function x(t) {
    let { transitionState: e, widget: n, userId: d, onClose: x, trackUserProfileEditAction: h } = t,
        m = i.useCallback(() => {
            (0, u.qA)(n),
                h(
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                r.forEach(function (e) {
                                    var r;
                                    (r = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = r);
                                });
                        }
                        return t;
                    })({ action: "WIDGET_REMOVED" }, n.getProfileEditAnalyticsOptions()),
                ),
                x(),
                (0, f.XA)(b.jM.WIDGET_REMOVED);
        }, [n, x, h]),
        y = (0, a.bG)([s.default], () => s.default.getUser(d));
    return null == y
        ? null
        : (0, r.jsxs)(l.Modal, {
              transitionState: e,
              onClose: x,
              title: p.intl.string(p.t.Mm07Yc),
              subtitle: p.intl.format(p.t["x+djI4"], { helpUrl: o.C }),
              actions: [
                  {
                      variant: "secondary",
                      text: p.intl.string(p.t["ETE/oC"]),
                      onClick: x,
                  },
                  {
                      variant: "critical-primary",
                      text: p.intl.string(p.t.Mm07Yc),
                      onClick: m,
                  },
              ],
              children: [
                  (0, r.jsx)("div", {
                      className: g.w,
                      children: (0, r.jsx)(j, {
                          widget: n,
                          user: y,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: g.d,
                      children: (0, r.jsx)(c.Text, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
