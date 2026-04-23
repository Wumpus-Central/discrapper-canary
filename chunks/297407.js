n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(534514),
    l = n(573613),
    s = n(777347),
    a = n(915491),
    o = n(985018),
    d = n(639796);
function u(e) {
    let { guildId: t } = e,
        n = (0, s.A)(t);
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.D, {
                      className: d.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: o.intl.string(o.t.yM9Krm),
                  }),
                  (0, r.jsx)(l.Ip, {
                      className: d.k,
                      fade: !0,
                      children: n.map((e, t) => (0, r.jsx)(a.A, { boost: e }, `boost-activity-${t}`)),
                  }),
              ],
          });
}
