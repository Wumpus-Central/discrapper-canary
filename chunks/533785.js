t.d(n, { t: () => r }), t(953529);
var l = t(951288),
    i = t(481060),
    a = t(661009);
function r(e) {
    let { leaderboard: n } = e;
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: a.textContainer,
              children: [
                  (0, l.jsx)(i.Text, {
                      variant: "display-lg",
                      color: "text-primary",
                      children: n.title,
                  }),
                  (0, l.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-secondary",
                      children: n.description,
                  }),
              ],
          });
}
