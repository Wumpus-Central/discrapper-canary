l.d(t, {
    A: () => u,
});
var r = l(627968);
l(64700);
var n = l(158954),
    i = l(777347),
    s = l(915491),
    o = l(985018),
    a = l(542899);

function u(e) {
    let { guildId: t } = e,
        l = (0, i.A)(t);
    return 0 === l.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(n.DZT, {
                      className: a.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: o.intl.string(o.t.yM9Krm),
                  }),
                  (0, r.jsx)(n.IpV, {
                      className: a.k,
                      fade: !0,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              s.A,
                              {
                                  boost: e,
                              },
                              "boost-activity-".concat(t),
                          ),
                      ),
                  }),
              ],
          });
}
