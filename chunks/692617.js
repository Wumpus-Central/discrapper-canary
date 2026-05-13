"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(990078),
    u = n(862482),
    c = n(834730),
    d = n(548118),
    _ = n(758963);
function f(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: r,
            onFocus: a,
            onClick: f,
            size: h = d.Ay.Sizes.SMALLER,
            hideOverflowCount: p = !1,
            disableGuildNameTooltip: E = !1,
        } = e,
        m = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Ay.Sizes.SMALLER;
            switch (e) {
                case d.Ay.Sizes.SMOL:
                    return _.nc;
                case d.Ay.Sizes.MINI:
                    return _.qV;
                case d.Ay.Sizes.SMALLER:
                default:
                    return _.q1;
            }
        })(h);
    return r.length <= 0
        ? null
        : (0, i.jsx)("div", {
              className: s()(t, _.HD),
              children: (function () {
                  let e = r.length - n,
                      t = e + 1,
                      g = e > 0 && !p,
                      A = Math.min(r.length, n) - 1,
                      I = o()(r)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  r = s()(_.my, m, t === A && !g && _.NE);
                              return E
                                  ? (0, i.jsx)("div", {
                                        className: r,
                                        children: (0, i.jsx)(d.Ay, { guild: e, onClick: f, size: h, showTooltip: !1 }),
                                    })
                                  : (0, i.jsx)(
                                        l.m,
                                        {
                                            asContainer: !0,
                                            text: n,
                                            children: (0, i.jsx)(d.Ay, { guild: e, onClick: f, size: h }),
                                        },
                                        e.id,
                                    );
                          })
                          .value();
                  if (g) {
                      let e = (function () {
                          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Ay.Sizes.SMALLER;
                          switch (e) {
                              case d.Ay.Sizes.SMOL:
                              case d.Ay.Sizes.MINI:
                                  return "text-xxs/semibold";
                              case d.Ay.Sizes.SMALLER:
                              default:
                                  return "text-xs/medium";
                          }
                      })(h);
                      I[I.length - 1] = (0, i.jsx)(u.$n, {
                          className: s()(_.ju, m),
                          onFocus: a,
                          onClick: (e) => f?.(e),
                          look: u.$n.Looks.BLANK,
                          size: u.$n.Sizes.NONE,
                          children: (0, i.jsx)(c.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return I;
              })(),
          });
}
