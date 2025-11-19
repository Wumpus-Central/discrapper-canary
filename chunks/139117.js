n.d(t, { Z: () => h });
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
    f = n(772530);
function _() {
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
function p() {
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
function h(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: o,
            onClick: h,
            size: m = d.Z.Sizes.SMALLER,
            hideOverflowCount: g = !1,
            disableGuildNameTooltip: E = !1,
        } = e,
        b = _(m);
    function y() {
        let e = i.length - n,
            t = e + 1,
            _ = e > 0 && !g,
            y = Math.min(i.length, n) - 1,
            O = s()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === y && !_,
                        o = a()(f.avatar, b, i && f.isLast);
                    return E
                        ? (0, r.jsx)("div", {
                              className: o,
                              children: (0, r.jsx)(d.Z, {
                                  guild: e,
                                  onClick: h,
                                  size: m,
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
                                      onClick: h,
                                      size: m,
                                  }),
                              },
                              e.id,
                          );
                })
                .value();
        if (_) {
            let e = p(m);
            O[O.length - 1] = (0, r.jsx)(c.zx, {
                className: a()(f.overflow, b),
                onFocus: o,
                onClick: (e) => (null == h ? void 0 : h(e)),
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
