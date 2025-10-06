t.d(n, { t: () => i }), t(953529);
var a = t(951288),
    l = t(481060),
    r = t(64208);
function i(e) {
    let { leaderboard: n } = e;
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: r.textContainer,
              children: [
                  (0, a.jsx)(l.Text, {
                      variant: "display-lg",
                      color: "text-primary",
                      children: n.title,
                  }),
                  (0, a.jsx)(l.X6q, {
                      variant: "heading-lg/semibold",
                      color: "text-secondary",
                      children: n.description,
                  }),
              ],
          });
}
