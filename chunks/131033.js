n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var l = n(793030),
    r = n(388032),
    a = n(456486);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(l.X6q, {
                      className: a.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: r.intl.string(r.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(l.xvT, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}
