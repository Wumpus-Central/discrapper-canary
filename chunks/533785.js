l.d(n, { t: () => r }), l(953529);
var t = l(951288),
    i = l(481060),
    a = l(661009);
function r(e) {
    let { leaderboard: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: a.textContainer,
              children: [
                  (0, t.jsx)(i.Text, {
                      variant: "display-lg",
                      color: "text-primary",
                      children: n.title,
                  }),
                  (0, t.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-secondary",
                      children: n.description,
                  }),
              ],
          });
}
