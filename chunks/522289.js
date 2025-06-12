n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(481060),
    c = n(565138),
    u = n(223390);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.Z.Sizes.SMALLER;
    switch (e) {
        case c.Z.Sizes.SMOL:
            return u.size16;
        case c.Z.Sizes.MINI:
            return u.size20;
        case c.Z.Sizes.SMALLER:
        default:
            return u.size24;
    }
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.Z.Sizes.SMALLER;
    switch (e) {
        case c.Z.Sizes.SMOL:
        case c.Z.Sizes.MINI:
            return 'text-xxs/semibold';
        case c.Z.Sizes.SMALLER:
        default:
            return 'text-xs/medium';
    }
}
function f(e) {
    let { className: t, maxGuilds: n, guilds: i, onFocus: o, onClick: f, size: p = c.Z.Sizes.SMALLER, hideOverflowCount: h = !1, disableGuildNameTooltip: m = !1 } = e,
        g = d(p);
    function E() {
        let e = i.length - n,
            t = e + 1,
            d = e > 0 && !h,
            E = Math.min(i.length, n) - 1,
            b = s()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === E && !d,
                        o = a()(u.avatar, g, i && u.isLast);
                    return m
                        ? (0, r.jsx)('div', {
                              className: o,
                              children: (0, r.jsx)(c.Z, {
                                  guild: e,
                                  onClick: f,
                                  size: p,
                                  showTooltip: !1
                              })
                          })
                        : (0, r.jsx)(
                              l.DY3,
                              {
                                  text: n,
                                  className: o,
                                  children: (0, r.jsx)(c.Z, {
                                      guild: e,
                                      onClick: f,
                                      size: p
                                  })
                              },
                              e.id
                          );
                })
                .value();
        if (d) {
            let e = _(p);
            b[b.length - 1] = (0, r.jsx)(l.zxk, {
                className: a()(u.overflow, g),
                onFocus: o,
                onClick: (e) => (null == f ? void 0 : f(e)),
                look: l.zxk.Looks.BLANK,
                size: l.zxk.Sizes.NONE,
                children: (0, r.jsx)(l.Text, {
                    variant: e,
                    children: t > 99 ? '>99' : '+'.concat(t)
                })
            });
        }
        return b;
    }
    return i.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: a()(t, u.avatars),
              children: E()
          });
}
