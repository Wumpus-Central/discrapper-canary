i.d(e, { default: () => g });
var n = i(255367),
    r = i(73800),
    s = i(442837),
    a = i(82659),
    l = i(481060),
    c = i(594174),
    d = i(63063),
    o = i(86419),
    u = i(778414),
    x = i(388032),
    h = i(39766);
function p(t) {
    let { widget: e, user: i } = t;
    return (0, n.jsx)(u.Z, {
        widget: e,
        user: i,
        isGameFetching: () => !1,
        disableInteraction: !0,
    });
}
function g(t) {
    let { transitionState: e, widget: i, userId: u, onClose: g } = t,
        w = r.useCallback(() => {
            (0, o.y8)(i.type), g();
        }, [i.type, g]),
        v = (0, s.e7)([c.default], () => c.default.getUser(u));
    return null == v
        ? null
        : (0, n.jsxs)(a.Modal, {
              transitionState: e,
              onClose: g,
              title: x.intl.string(x.t.Mm07YW),
              subtitle: x.intl.format(x.t["x+djIy"], { helpUrl: d.w }),
              actionBarInput: (0, n.jsx)("div", {}),
              actions: [
                  {
                      variant: "secondary",
                      text: x.intl.string(x.t["ETE/oK"]),
                      onClick: g,
                  },
                  {
                      variant: "critical-primary",
                      text: x.intl.string(x.t.Mm07YW),
                      onClick: w,
                  },
              ],
              children: [
                  (0, n.jsx)("div", {
                      className: h.widgetPreview,
                      children: (0, n.jsx)(p, {
                          widget: i,
                          user: v,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: h.hintText,
                      children: (0, n.jsx)(l.Text, {
                          color: "text-secondary",
                          variant: "text-sm/normal",
                          children: x.intl.string(x.t.bQNGeX),
                      }),
                  }),
              ],
          });
}
