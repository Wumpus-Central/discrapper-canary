r.d(t, { Z: () => s });
var n = r(951288);
r(647438);
var i = r(793030),
    l = r(388032),
    a = r(226788);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(i.X6q, {
                      className: a.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: l.intl.string(l.t["4Byy/P"]),
                  }),
                  (0, n.jsx)(i.xvT, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}
