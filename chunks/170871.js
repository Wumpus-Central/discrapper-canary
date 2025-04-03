n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(979264),
    u = n(308083),
    m = n(580273);
function g(e) {
    let { className: t, clanTag: n, clanBadge: s, onTagClick: g, guildId: p, guildName: h, guildIcon: f, guildIconSize: b, memberCount: N } = e,
        x = i.useRef(null),
        [_, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = x.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, r.jsxs)('div', {
            className: a()(m.container, t),
            children: [
                (0, r.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, r.jsx)(o.b, {
                            guildId: p,
                            guildName: h,
                            guildIcon: f,
                            iconSize: b,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, r.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, r.jsx)(l.ua7, {
                                    text: h,
                                    color: l.ua7.Colors.PRIMARY,
                                    shouldShow: _,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(
                                            'span',
                                            ((t = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        r.forEach(function (t) {
                                                            var r;
                                                            (r = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = r);
                                                        });
                                                }
                                                return e;
                                            })({ ref: x }, e)),
                                            (n = n =
                                                {
                                                    className: m.guildName,
                                                    children: h
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    }
                                }),
                                null != N && (0, r.jsx)(c.Z, { count: N })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, r.jsx)(d.aG, {
                        guildId: p,
                        className: m.tag,
                        clanTag: n,
                        clanBadge: s,
                        onClick: g,
                        badgeSize: u.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: m.badge
                    })
                })
            ]
        })
    );
}
