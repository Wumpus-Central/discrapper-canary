n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(777347),
    s = n(915491),
    o = n(985018),
    a = n(542899);
function u(e) {
    let { guildId: t } = e,
        n = (0, i.A)(t);
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.DZT, {
                      className: a.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: o.intl.string(o.t.yM9Krm),
                  }),
                  (0, r.jsx)(l.IpV, {
                      className: a.k,
                      fade: !0,
                      children: n.map((e, t) => (0, r.jsx)(s.A, { boost: e }, `boost-activity-${t}`)),
                  }),
              ],
          });
}
