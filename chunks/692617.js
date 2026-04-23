n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(735438),
    s = n.n(r),
    d = n(990078),
    o = n(862482),
    c = n(834730),
    u = n(263063),
    _ = n(758963);
function m(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: a,
            onFocus: r,
            onClick: m,
            size: h = u.Ay.Sizes.SMALLER,
            hideOverflowCount: g = !1,
            disableGuildNameTooltip: p = !1,
        } = e,
        x = (function () {
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
        })(h);
    return a.length <= 0
        ? null
        : (0, l.jsx)("div", {
              className: i()(t, _.HD),
              children: (function () {
                  let e = a.length - n,
                      t = e + 1,
                      A = e > 0 && !g,
                      f = Math.min(a.length, n) - 1,
                      v = s()(a)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  a = i()(_.my, x, t === f && !A && _.NE);
                              return p
                                  ? (0, l.jsx)("div", {
                                        className: a,
                                        children: (0, l.jsx)(u.Ay, { guild: e, onClick: m, size: h, showTooltip: !1 }),
                                    })
                                  : (0, l.jsx)(
                                        d.m,
                                        {
                                            asContainer: !0,
                                            text: n,
                                            children: (0, l.jsx)(u.Ay, { guild: e, onClick: m, size: h }),
                                        },
                                        e.id,
                                    );
                          })
                          .value();
                  if (A) {
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
                      })(h);
                      v[v.length - 1] = (0, l.jsx)(o.$n, {
                          className: i()(_.ju, x),
                          onFocus: r,
                          onClick: (e) => m?.(e),
                          look: o.$n.Looks.BLANK,
                          size: o.$n.Sizes.NONE,
                          children: (0, l.jsx)(c.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return v;
              })(),
          });
}
