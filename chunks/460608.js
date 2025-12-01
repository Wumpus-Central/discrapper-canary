n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(793030),
    o = n(665957),
    l = n(659679),
    a = n(388032),
    s = n(240379);
function c(e) {
    let { guildId: t } = e,
        n = (0, o.Z)(t);
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: s.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: a.intl.string(a.t.yM9Krm),
                  }),
                  (0, r.jsx)(i.zJl, {
                      className: s.container,
                      fade: !0,
                      children: n.map((e, t) => (0, r.jsx)(l.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
