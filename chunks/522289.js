n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(755721),
    c = n(481060),
    u = n(565138),
    d = n(223390);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Z.Sizes.SMALLER;
    switch (e) {
        case u.Z.Sizes.SMOL:
            return d.size16;
        case u.Z.Sizes.MINI:
            return d.size20;
        case u.Z.Sizes.SMALLER:
        default:
            return d.size24;
    }
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Z.Sizes.SMALLER;
    switch (e) {
        case u.Z.Sizes.SMOL:
        case u.Z.Sizes.MINI:
            return 'text-xxs/semibold';
        case u.Z.Sizes.SMALLER:
        default:
            return 'text-xs/medium';
    }
}
function p(e) {
    let { className: t, maxGuilds: n, guilds: i, onFocus: o, onClick: p, size: h = u.Z.Sizes.SMALLER, hideOverflowCount: m = !1, disableGuildNameTooltip: g = !1 } = e,
        E = f(h);
    function b() {
        let e = i.length - n,
            t = e + 1,
            f = e > 0 && !m,
            b = Math.min(i.length, n) - 1,
            y = s()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === b && !f,
                        o = a()(d.avatar, E, i && d.isLast);
                    return g
                        ? (0, r.jsx)('div', {
                              className: o,
                              children: (0, r.jsx)(u.Z, {
                                  guild: e,
                                  onClick: p,
                                  size: h,
                                  showTooltip: !1
                              })
                          })
                        : (0, r.jsx)(
                              c.DY3,
                              {
                                  text: n,
                                  className: o,
                                  children: (0, r.jsx)(u.Z, {
                                      guild: e,
                                      onClick: p,
                                      size: h
                                  })
                              },
                              e.id
                          );
                })
                .value();
        if (f) {
            let e = _(h);
            y[y.length - 1] = (0, r.jsx)(l.zx, {
                className: a()(d.overflow, E),
                onFocus: o,
                onClick: (e) => (null == p ? void 0 : p(e)),
                look: l.zx.Looks.BLANK,
                size: l.zx.Sizes.NONE,
                children: (0, r.jsx)(c.Text, {
                    variant: e,
                    children: t > 99 ? '>99' : '+'.concat(t)
                })
            });
        }
        return y;
    }
    return i.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: a()(t, d.avatars),
              children: b()
          });
}
