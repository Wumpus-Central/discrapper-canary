n.d(t, { default: () => h });
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    d = n(397927),
    o = n(287809),
    _ = n(975571),
    s = n(735321),
    E = n(463259),
    p = n(606758),
    c = n(518477),
    u = n(985018),
    S = n(910136);
function T(e) {
    let { widget: t, user: n } = e;
    return (0, i.jsx)(E.u, { widget: t, user: n, disableInteraction: !0 });
}
function h(e) {
    let { transitionState: t, widget: n, userId: E, onClose: h, trackUserProfileEditAction: I } = e,
        R = a.useCallback(() => {
            (0, s.qA)(n),
                I({ action: "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() }),
                h(),
                (0, p.XA)(c.jM.WIDGET_REMOVED);
        }, [n, h, I]),
        v = (0, r.bG)([o.default], () => o.default.getUser(E));
    return null == v
        ? null
        : (0, i.jsxs)(l.Modal, {
              transitionState: t,
              onClose: h,
              title: u.intl.string(u.t.Mm07Yc),
              subtitle: u.intl.format(u.t["x+djI4"], { helpUrl: _.C }),
              actions: [
                  { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: h },
                  { variant: "critical-primary", text: u.intl.string(u.t.Mm07Yc), onClick: R },
              ],
              children: [
                  (0, i.jsx)("div", { className: S.w, children: (0, i.jsx)(T, { widget: n, user: v }) }),
                  (0, i.jsx)("div", {
                      className: S.d,
                      children: (0, i.jsx)(d.Text, {
                          color: "text-subtle",
                          variant: "text-sm/normal",
                          children: u.intl.string(u.t.bQNGeT),
                      }),
                  }),
              ],
          });
}
