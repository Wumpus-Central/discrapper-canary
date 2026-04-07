n.d(t, { A: () => o });
var a = n(627968);
n(64700);
var i = n(158954),
    l = n(155718),
    r = n(985018),
    s = n(282063);
function o(e) {
    let { game: t } = e,
        n = (t.companies ?? []).filter((e) => e.roles.includes(l.wk.PUBLISHER));
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(i.DZT, {
                      className: s.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: r.intl.string(r.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(i.EYj, { variant: "text-sm/normal", children: n.map((e) => e.name).join(", ") }),
              ],
          });
}
