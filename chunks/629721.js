n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(695366),
    l = n(834730),
    s = n(827734),
    a = n(371028),
    o = n(676908);
function d(e) {
    let { guildId: t, powerupNames: n, warnings: d } = e,
        { shouldShow: u, title: c, description: _ } = (0, a.A)(t, n);
    return u
        ? (0, r.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, r.jsx)(i.E, { color: s.A.colors.TEXT_FEEDBACK_WARNING, className: o.Kk }),
                  (0, r.jsx)(l.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: c }),
                  (0, r.jsxs)(l.E, {
                      variant: "text-sm/medium",
                      children: [
                          _,
                          d?.map((e, t) =>
                              (0, r.jsx)(
                                  l.E,
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
