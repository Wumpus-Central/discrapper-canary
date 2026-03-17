n.d(t, { A: () => s });
var a = n(627968);
n(64700);
var l = n(158954),
    i = n(985018),
    r = n(851822);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(l.DZT, {
                      className: r.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: i.intl.string(i.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(l.EYj, { variant: "text-sm/normal", children: t.publishers.join(", ") }),
              ],
          });
}
