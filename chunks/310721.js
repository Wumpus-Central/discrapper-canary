n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var l = n(534514),
    i = n(834730),
    r = n(155718),
    s = n(985018),
    o = n(141535);
function d(e) {
    let { game: t } = e,
        n = (t.companies ?? []).filter((e) => e.roles.includes(r.wk.PUBLISHER));
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(l.D, {
                      className: o.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: s.intl.string(s.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(i.E, { variant: "text-sm/normal", children: n.map((e) => e.name).join(", ") }),
              ],
          });
}
