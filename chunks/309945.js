n.d(t, { Z: () => u }), n(953529);
var r = n(54381);
n(473749);
var i = n(657707),
    o = n(793030),
    l = n(692547),
    a = n(899892),
    s = n(183742);
function u(e) {
    let { guildId: t, powerupNames: n, warnings: u } = e,
        { shouldShow: c, title: d, description: f } = (0, a.Z)(t, n);
    return c
        ? (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  (0, r.jsx)(i.CircleErrorIcon, {
                      color: l.Z.colors.TEXT_FEEDBACK_WARNING,
                      className: s.icon,
                  }),
                  (0, r.jsx)(o.xvT, {
                      variant: "text-md/semibold",
                      color: "text-feedback-warning",
                      children: d,
                  }),
                  (0, r.jsxs)(o.xvT, {
                      variant: "text-sm/medium",
                      children: [
                          f,
                          null == u
                              ? void 0
                              : u.map((e, t) =>
                                    (0, r.jsx)(
                                        o.xvT,
                                        {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            className: s.warning,
                                            children: e,
                                        },
                                        "warning-".concat(t),
                                    ),
                                ),
                      ],
                  }),
              ],
          })
        : null;
}
