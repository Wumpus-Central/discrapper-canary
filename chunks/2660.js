n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var s = n(442837),
    i = n(481060),
    o = n(204418),
    l = n(594174),
    a = n(113434),
    c = n(182294),
    u = n(335203);
let d = (e) => {
        let { questConfig: t, fallback: n, isFocused: d } = e,
            m = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
            { avatarDecoration: p, isFetching: x } = (0, a.DU)(t);
        return x
            ? (0, r.jsx)('div', {
                  className: u.questsCollectibleReward,
                  children: (0, r.jsx)(i.$jN, {})
              })
            : null == m || null == p
              ? n
              : (0, r.jsx)('div', {
                    className: u.questsCollectibleReward,
                    children: (0, r.jsx)(o.Z, {
                        avatarSize: c.EF.SIZE_56,
                        user: m,
                        guildId: null,
                        avatarDecorationOverride: p,
                        animateOnHover: !d
                    })
                });
    },
    m = (e) =>
        (0, r.jsx)(
            d,
            (function (e) {
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
            })({}, e)
        );
