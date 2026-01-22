l.d(t, {
    A: () => u,
}),
    l(228524);
var r = l(627968);
l(64700);
var n = l(934551),
    i = l(158954),
    s = l(827734),
    o = l(371028),
    a = l(37725);

function u(e) {
    let { guildId: t, powerupNames: l, warnings: u } = e,
        { shouldShow: d, title: c, description: f } = (0, o.A)(t, l);
    return d
        ? (0, r.jsxs)("div", {
              className: a.kL,
              children: [
                  (0, r.jsx)(n.CircleErrorIcon, {
                      color: s.A.colors.TEXT_FEEDBACK_WARNING,
                      className: a.Kk,
                  }),
                  (0, r.jsx)(i.EYj, {
                      variant: "text-md/semibold",
                      color: "text-feedback-warning",
                      children: c,
                  }),
                  (0, r.jsxs)(i.EYj, {
                      variant: "text-sm/medium",
                      children: [
                          f,
                          null == u
                              ? void 0
                              : u.map((e, t) =>
                                    (0, r.jsx)(
                                        i.EYj,
                                        {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            className: a.$e,
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
