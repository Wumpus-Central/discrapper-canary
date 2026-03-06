"use strict";
n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var a = n(158954),
    i = n(985018),
    r = n(728528);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(a.DZT, {
                      className: r.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: i.intl.string(i.t["4Byy/G"]),
                  }),
                  (0, l.jsx)(a.EYj, { variant: "text-sm/normal", children: t.publishers.join(", ") }),
              ],
          });
}
