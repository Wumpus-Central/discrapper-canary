n.d(t, { Z: () => p }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(172751),
    u = n(131085),
    m = n(818307);
function p(e) {
    let { className: t, clanTag: n, clanBadge: s, onTagClick: p, guildId: g, guildName: h, guildIcon: f, guildIconSize: b, memberCount: _ } = e,
        x = r.useRef(null),
        [E, j] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = x.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && j(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: l()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: g,
                            guildName: h,
                            guildIcon: f,
                            iconSize: b,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, i.jsx)(a.ua7, {
                                    text: h,
                                    color: a.ua7.Colors.PRIMARY,
                                    shouldShow: E,
                                    children: (e) => {
                                        var t, n;
                                        return (0, i.jsx)(
                                            'span',
                                            ((t = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        i = Object.keys(n);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (i = i.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        i.forEach(function (t) {
                                                            var i;
                                                            (i = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: i,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = i);
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
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    }
                                }),
                                null != _ && (0, i.jsx)(c.Z, { count: _ })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, i.jsx)(d.m0, {
                        guildId: g,
                        className: m.tag,
                        guildTag: n,
                        guildBadge: s,
                        onClick: p,
                        badgeSize: u.Gg.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: m.badge
                    })
                })
            ]
        })
    );
}
