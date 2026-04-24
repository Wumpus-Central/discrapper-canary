"use strict";
n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    l = n(735438),
    s = n.n(l),
    o = n(990078),
    c = n(862482),
    d = n(834730),
    u = n(548118),
    _ = n(758963);
function p(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: r,
            onFocus: l,
            onClick: p,
            size: m = u.Ay.Sizes.SMALLER,
            hideOverflowCount: h = !1,
            disableGuildNameTooltip: f = !1,
        } = e,
        g = (function () {
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
        })(m);
    return r.length <= 0
        ? null
        : (0, a.jsx)("div", {
              className: i()(t, _.HD),
              children: (function () {
                  let e = r.length - n,
                      t = e + 1,
                      b = e > 0 && !h,
                      v = Math.min(r.length, n) - 1,
                      A = s()(r)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  r = i()(_.my, g, t === v && !b && _.NE);
                              return f
                                  ? (0, a.jsx)("div", {
                                        className: r,
                                        children: (0, a.jsx)(u.Ay, { guild: e, onClick: p, size: m, showTooltip: !1 }),
                                    })
                                  : (0, a.jsx)(
                                        o.m,
                                        {
                                            asContainer: !0,
                                            text: n,
                                            children: (0, a.jsx)(u.Ay, { guild: e, onClick: p, size: m }),
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
                      })(m);
                      A[A.length - 1] = (0, a.jsx)(c.$n, {
                          className: i()(_.ju, g),
                          onFocus: l,
                          onClick: (e) => p?.(e),
                          look: c.$n.Looks.BLANK,
                          size: c.$n.Sizes.NONE,
                          children: (0, a.jsx)(d.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return A;
              })(),
          });
}
