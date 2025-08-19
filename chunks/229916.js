n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var a = n(442837),
    i = n(481060),
    o = n(778414),
    l = n(594174),
    s = n(388032),
    c = n(641081);
let d = (e) => {
    let { widget: t, userId: n } = e,
        d = (0, a.e7)([l.default], () => l.default.getUser(n));
    return null == d
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.SpsnDQ),
                  }),
                  (0, r.jsx)(o.Z, {
                      widget: t,
                      user: d,
                      isGameFetching: () => !1,
                      disableInteraction: !0,
                  }),
              ],
          });
};
