"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(735438),
    l = n.n(s),
    o = n(990078),
    d = n(862482),
    c = n(834730),
    u = n(548118),
    _ = n(758963);
function E(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: r,
            onFocus: s,
            onClick: E,
            size: A = u.Ay.Sizes.SMALLER,
            hideOverflowCount: h = !1,
            disableGuildNameTooltip: I = !1,
        } = e,
        f = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Ay.Sizes.SMALLER;
            switch (e) {
                case u.Ay.Sizes.SMOL:
                    return _.nc;
                case u.Ay.Sizes.MINI:
                    return _.qV;
                case u.Ay.Sizes.SMALLER:
                default:
                    return _.q1;
            }
        })(A);
    return r.length <= 0
        ? null
        : (0, i.jsx)("div", {
              className: a()(t, _.HD),
              children: (function () {
                  let e = r.length - n,
                      t = e + 1,
                      p = e > 0 && !h,
                      T = Math.min(r.length, n) - 1,
                      m = l()(r)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  r = a()(_.my, f, t === T && !p && _.NE);
                              return (0, i.jsx)(
                                  "div",
                                  {
                                      className: r,
                                      children: I
                                          ? (0, i.jsx)(u.Ay, { guild: e, onClick: E, size: A, showTooltip: !1 })
                                          : (0, i.jsx)(o.m, {
                                                asContainer: !0,
                                                text: n,
                                                children: (0, i.jsx)(u.Ay, {
                                                    guild: e,
                                                    onClick: E,
                                                    size: A,
                                                    showTooltip: !1,
                                                }),
                                            }),
                                  },
                                  e.id,
                              );
                          })
                          .value();
                  if (p) {
                      let e = (function () {
                          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Ay.Sizes.SMALLER;
                          switch (e) {
                              case u.Ay.Sizes.SMOL:
                              case u.Ay.Sizes.MINI:
                                  return "text-xxs/semibold";
                              case u.Ay.Sizes.SMALLER:
                              default:
                                  return "text-xs/medium";
                          }
                      })(A);
                      m[m.length - 1] = (0, i.jsx)(d.$n, {
                          className: a()(_.ju, f),
                          onFocus: s,
                          onClick: (e) => E?.(e),
                          look: d.$n.Looks.BLANK,
                          size: d.$n.Sizes.NONE,
                          children: (0, i.jsx)(c.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return m;
              })(),
          });
}
