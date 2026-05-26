i.d(s, { A: () => A });
var n = i(627968);
i(64700);
var t = i(503698),
    l = i.n(t),
    c = i(735438),
    a = i.n(c),
    r = i(990078),
    u = i(862482),
    o = i(834730),
    d = i(548118),
    h = i(758963);
function A(e) {
    let {
            className: s,
            maxGuilds: i,
            guilds: t,
            onFocus: c,
            onClick: A,
            size: S = d.Ay.Sizes.SMALLER,
            hideOverflowCount: L = !1,
            disableGuildNameTooltip: x = !1,
        } = e,
        z = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Ay.Sizes.SMALLER;
            switch (e) {
                case d.Ay.Sizes.SMOL:
                    return h.nc;
                case d.Ay.Sizes.MINI:
                    return h.qV;
                case d.Ay.Sizes.SMALLER:
                default:
                    return h.q1;
            }
        })(S);
    return t.length <= 0
        ? null
        : (0, n.jsx)("div", {
              className: l()(s, h.HD),
              children: (function () {
                  let e = t.length - i,
                      s = e + 1,
                      y = e > 0 && !L,
                      m = Math.min(t.length, i) - 1,
                      k = a()(t)
                          .take(i)
                          .map((e, s) => {
                              let i = e.name,
                                  t = l()(h.my, z, s === m && !y && h.NE);
                              return x
                                  ? (0, n.jsx)("div", {
                                        className: t,
                                        children: (0, n.jsx)(d.Ay, { guild: e, onClick: A, size: S, showTooltip: !1 }),
                                    })
                                  : (0, n.jsx)(
                                        r.m,
                                        {
                                            asContainer: !0,
                                            text: i,
                                            children: (0, n.jsx)(d.Ay, { guild: e, onClick: A, size: S }),
                                        },
                                        e.id,
                                    );
                          })
                          .value();
                  if (y) {
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
                      })(S);
                      k[k.length - 1] = (0, n.jsx)(u.$n, {
                          className: l()(h.ju, z),
                          onFocus: c,
                          onClick: (e) => A?.(e),
                          look: u.$n.Looks.BLANK,
                          size: u.$n.Sizes.NONE,
                          children: (0, n.jsx)(o.E, { variant: e, children: s > 99 ? ">99" : `+${s}` }),
                      });
                  }
                  return k;
              })(),
          });
}
