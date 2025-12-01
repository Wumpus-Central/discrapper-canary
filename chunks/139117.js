n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(565138),
    f = n(120230);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Z.Sizes.SMALLER;
    switch (e) {
        case d.Z.Sizes.SMOL:
            return f.size16;
        case d.Z.Sizes.MINI:
            return f.size20;
        case d.Z.Sizes.SMALLER:
        default:
            return f.size24;
    }
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Z.Sizes.SMALLER;
    switch (e) {
        case d.Z.Sizes.SMOL:
        case d.Z.Sizes.MINI:
            return "text-xxs/semibold";
        case d.Z.Sizes.SMALLER:
        default:
            return "text-xs/medium";
    }
}
function m(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: o,
            onClick: m,
            size: h = d.Z.Sizes.SMALLER,
            hideOverflowCount: g = !1,
            disableGuildNameTooltip: E = !1,
        } = e,
        b = p(h);
    function y() {
        let e = i.length - n,
            t = e + 1,
            p = e > 0 && !g,
            y = Math.min(i.length, n) - 1,
            O = s()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === y && !p,
                        o = a()(f.avatar, b, i && f.isLast);
                    return E
                        ? (0, r.jsx)("div", {
                              className: o,
                              children: (0, r.jsx)(d.Z, {
                                  guild: e,
                                  onClick: m,
                                  size: h,
                                  showTooltip: !1,
                              }),
                          })
                        : (0, r.jsx)(
                              l.u,
                              {
                                  asContainer: !0,
                                  text: n,
                                  children: (0, r.jsx)(d.Z, {
                                      guild: e,
                                      onClick: m,
                                      size: h,
                                  }),
                              },
                              e.id,
                          );
                })
                .value();
        if (p) {
            let e = _(h);
            O[O.length - 1] = (0, r.jsx)(c.zx, {
                className: a()(f.overflow, b),
                onFocus: o,
                onClick: (e) => (null == m ? void 0 : m(e)),
                look: c.zx.Looks.BLANK,
                size: c.zx.Sizes.NONE,
                children: (0, r.jsx)(u.Text, {
                    variant: e,
                    children: t > 99 ? ">99" : "+".concat(t),
                }),
            });
        }
        return O;
    }
    return i.length <= 0
        ? null
        : (0, r.jsx)("div", {
              className: a()(t, f.avatars),
              children: y(),
          });
}
