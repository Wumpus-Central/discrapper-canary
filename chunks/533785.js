n.d(t, { t: () => i }), n(953529);
var a = n(951288),
    r = n(481060),
    l = n(661009);
function i(e) {
    let { leaderboard: t } = e;
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: l.textContainer,
              children: [
                  (0, a.jsx)(r.Text, {
                      variant: "display-lg",
                      color: "text-primary",
                      children: t.title,
                  }),
                  (0, a.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-secondary",
                      children: t.description,
                  }),
              ],
          });
}
