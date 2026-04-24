n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(735438),
    o = n.n(r),
    s = n(990078),
    c = n(862482),
    d = n(834730),
    u = n(548118),
    _ = n(758963);
function p(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: r,
            onClick: p,
            size: f = u.Ay.Sizes.SMALLER,
            hideOverflowCount: h = !1,
            disableGuildNameTooltip: m = !1,
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
        })(f);
    return i.length <= 0
        ? null
        : (0, a.jsx)("div", {
              className: l()(t, _.HD),
              children: (function () {
                  let e = i.length - n,
                      t = e + 1,
                      b = e > 0 && !h,
                      A = Math.min(i.length, n) - 1,
                      E = o()(i)
                          .take(n)
                          .map((e, t) => {
                              let n = e.name,
                                  i = l()(_.my, g, t === A && !b && _.NE);
                              return m
                                  ? (0, a.jsx)("div", {
                                        className: i,
                                        children: (0, a.jsx)(u.Ay, { guild: e, onClick: p, size: f, showTooltip: !1 }),
                                    })
                                  : (0, a.jsx)(
                                        s.m,
                                        {
                                            asContainer: !0,
                                            text: n,
                                            children: (0, a.jsx)(u.Ay, { guild: e, onClick: p, size: f }),
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
                      })(f);
                      E[E.length - 1] = (0, a.jsx)(c.$n, {
                          className: l()(_.ju, g),
                          onFocus: r,
                          onClick: (e) => p?.(e),
                          look: c.$n.Looks.BLANK,
                          size: c.$n.Sizes.NONE,
                          children: (0, a.jsx)(d.E, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
                      });
                  }
                  return E;
              })(),
          });
}
