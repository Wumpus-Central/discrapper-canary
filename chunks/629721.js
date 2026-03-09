n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(158954),
    s = n(827734),
    a = n(371028),
    o = n(37725);
function d(e) {
    let { guildId: t, powerupNames: n, warnings: d } = e,
        { shouldShow: u, title: c, description: m } = (0, a.A)(t, n);
    return u
        ? (0, r.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, r.jsx)(i.CircleErrorIcon, { color: s.A.colors.TEXT_FEEDBACK_WARNING, className: o.Kk }),
                  (0, r.jsx)(l.EYj, { variant: "text-md/semibold", color: "text-feedback-warning", children: c }),
                  (0, r.jsxs)(l.EYj, {
                      variant: "text-sm/medium",
                      children: [
                          m,
                          d?.map((e, t) =>
                              (0, r.jsx)(
                                  l.EYj,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: o.$e,
                                      children: e,
                                  },
                                  `warning-${t}`,
                              ),
                          ),
                      ],
                  }),
              ],
          })
        : null;
}
