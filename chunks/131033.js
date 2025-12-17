n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var i = n(793030),
    r = n(388032),
    l = n(452379);
function o(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(i.X6q, {
                      className: l.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: r.intl.string(r.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(i.xvT, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}
