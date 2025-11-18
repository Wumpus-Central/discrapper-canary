l.d(e, { t: () => d }), l(953529);
var t = l(54381),
    i = l(481060),
    a = l(64208);
function d(n) {
    let { leaderboard: e } = n;
    return null == e
        ? null
        : (0, t.jsxs)("div", {
              className: a.textContainer,
              children: [
                  (0, t.jsx)(i.Text, {
                      variant: "display-lg",
                      color: "text-primary",
                      children: e.title,
                  }),
                  (0, t.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-secondary",
                      children: e.description,
                  }),
              ],
          });
}
