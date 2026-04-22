"use strict";
n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    l = n(735438),
    s = n.n(l),
    d = n(990078),
    o = n(862482),
    c = n(834730),
    u = n(263063),
    _ = n(758963);
function m(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: l,
            onClick: m,
            size: p = u.Ay.Sizes.SMALLER,
            hideOverflowCount: h = !1,
            disableGuildNameTooltip: g = !1,
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
        })(p);
    return i.length <= 0
        ? null
        : (0, a.jsx)("div", {
              className: r()(t, _.HD),
              children: (function () {
                  let e = i.length - n,
                      t = e + 1,
                      b = e > 0 && !h,
                      A = Math.min(i.length, n) - 1,
                      x = s()(i)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  i = r()(_.my, f, t === A && !b && _.NE);
                              return g
                                  ? (0, a.jsx)("div", {
                                        className: i,
                                        children: (0, a.jsx)(u.Ay, { guild: e, onClick: m, size: p, showTooltip: !1 }),
                                    })
                                  : (0, a.jsx)(
                                        d.m,
                                        {
                                            asContainer: !0,
                                            text: n,
                                            children: (0, a.jsx)(u.Ay, { guild: e, onClick: m, size: p }),
                                        },
                                        e.id,
                                    );
                          })
                          .value();
                  if (b) {
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
                      })(p);
                      x[x.length - 1] = (0, a.jsx)(o.$n, {
                          className: r()(_.ju, f),
                          onFocus: l,
                          onClick: (e) => m?.(e),
                          look: o.$n.Looks.BLANK,
                          size: o.$n.Sizes.NONE,
                          children: (0, a.jsx)(c.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return x;
              })(),
          });
}
