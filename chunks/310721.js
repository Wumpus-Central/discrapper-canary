i.d(t, { A: () => r, v: () => c });
var l = i(627968);
i(64700);
var a = i(158954),
    n = i(985018),
    s = i(851822);
function r(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(a.DZT, {
                      className: s.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: n.intl.string(n.t["4Byy/G"]),
                  }),
                  (0, l.jsx)(a.EYj, { variant: "text-sm/normal", children: t.publishers.join(", ") }),
              ],
          });
}
function c(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(a.DZT, {
                      className: s.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: n.intl.string(n.t["4Byy/G"]),
                  }),
                  (0, l.jsx)(a.EYj, { variant: "text-sm/normal", children: t.publishers.join(", ") }),
              ],
          });
}
