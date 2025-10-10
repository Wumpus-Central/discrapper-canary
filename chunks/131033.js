n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(793030),
    l = n(388032),
    a = n(226788);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: a.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: l.intl.string(l.t["4Byy/P"]),
                  }),
                  (0, r.jsx)(i.xvT, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}
