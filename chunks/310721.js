l.d(t, {
    A: () => s,
    v: () => o,
});
var n = l(627968);
l(64700);
var i = l(158954),
    a = l(985018),
    r = l(851822);

function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(i.DZT, {
                      className: r.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: a.intl.string(a.t["4Byy/G"]),
                  }),
                  (0, n.jsx)(i.EYj, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}

function o(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(i.DZT, {
                      className: r.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: a.intl.string(a.t["4Byy/G"]),
                  }),
                  (0, n.jsx)(i.EYj, {
                      variant: "text-sm/normal",
                      children: t.publishers.join(", "),
                  }),
              ],
          });
}
