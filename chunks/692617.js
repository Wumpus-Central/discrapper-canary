n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(990078),
    c = n(421380),
    u = n(397927),
    d = n(263063),
    f = n(232358);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
    switch (e) {
        case d.A.Sizes.SMOL:
            return f.nc;
        case d.A.Sizes.MINI:
            return f.qV;
        case d.A.Sizes.SMALLER:
        default:
            return f.q1;
    }
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
    switch (e) {
        case d.A.Sizes.SMOL:
        case d.A.Sizes.MINI:
            return "text-xxs/semibold";
        case d.A.Sizes.SMALLER:
        default:
            return "text-xs/medium";
    }
}
function h(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: s,
            onClick: h,
            size: m = d.A.Sizes.SMALLER,
            hideOverflowCount: g = !1,
            disableGuildNameTooltip: E = !1,
        } = e,
        b = p(m);
    function y() {
        let e = i.length - n,
            t = e + 1,
            p = e > 0 && !g,
            y = Math.min(i.length, n) - 1,
            O = o()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === y && !p,
                        s = a()(f.my, b, i && f.NE);
                    return E
                        ? (0, r.jsx)("div", {
                              className: s,
                              children: (0, r.jsx)(d.A, {
                                  guild: e,
                                  onClick: h,
                                  size: m,
                                  showTooltip: !1,
                              }),
                          })
                        : (0, r.jsx)(
                              l.m,
                              {
                                  asContainer: !0,
                                  text: n,
                                  children: (0, r.jsx)(d.A, {
                                      guild: e,
                                      onClick: h,
                                      size: m,
                                  }),
                              },
                              e.id,
                          );
                })
                .value();
        if (p) {
            let e = _(m);
            O[O.length - 1] = (0, r.jsx)(c.$n, {
                className: a()(f.ju, b),
                onFocus: s,
                onClick: (e) => (null == h ? void 0 : h(e)),
                look: c.$n.Looks.BLANK,
                size: c.$n.Sizes.NONE,
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
              className: a()(t, f.HD),
              children: y(),
          });
}
