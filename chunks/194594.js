n.d(t, {
    Z: () => j,
    x: () => x
}),
    n(653041);
var r,
    a = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(686546),
    p = n(706454),
    m = n(768581),
    h = n(624138),
    g = n(388032),
    f = n(581330);
function _(e) {
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
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var x = (((r = {})[(r.SMALL = (0, h.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (r[(r.LARGE = (0, h.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE'), r);
let v = {
        [x.SMALL]: f.moreGuildsSmall,
        [x.LARGE]: f.moreGuildsLarge
    },
    C = {
        [x.SMALL]: f.iconSmall,
        [x.LARGE]: f.iconLarge
    };
function j(e) {
    var t, n, r;
    let { application: l, mutualGuilds: c, mutualGuildShownMax: h = 4, className: j, textVariant: y = 'text-sm/normal', compact: O, guildIconSize: I = x.LARGE, guildsClassName: N } = e,
        P = (0, s.e7)([p.default], () => p.default.locale),
        S = new Intl.ListFormat(P),
        E = null != (n = null == (t = l.directory_entry) ? void 0 : t.guild_count) ? n : 0,
        T = null != (r = null == c ? void 0 : c.length) ? r : 0,
        A = Math.max(0, E - T),
        { shownMutualGuilds: L, hiddenMutualGuilds: R } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == c ||
                    c.forEach((n) => {
                        e.length < h && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === h && t.length > 0 && (t.push(e[h - 1]), (e = e.slice(0, h - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [c, h]),
        w = R.length,
        Z = (function (e, t, n, r, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return g.NW.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? g.t.YR8PSE : g.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: a ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return g.NW.formatToPlainString(i, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n)
            });
        })(E, T, A, P, O);
    return 0 === L.length && null == Z
        ? null
        : (0, a.jsxs)('div', {
              className: o()(j, f.wrapper),
              children: [
                  (0, a.jsx)('div', {
                      className: o()(f.icons, N),
                      children:
                          L.length > 0
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        L.map((e, t) => {
                                            let n = t === L.length - 1 && 0 === w,
                                                r = m.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: I,
                                                    canAnimate: !1
                                                }),
                                                l = (0, a.jsx)(d.ua7, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, a.jsx)(
                                                            'img',
                                                            b(_({}, e), {
                                                                className: o()(f.icon, C[I]),
                                                                src: r,
                                                                alt: ''
                                                            })
                                                        )
                                                });
                                            return n
                                                ? (0, a.jsx)(i.Fragment, { children: l }, e.id)
                                                : (0, a.jsx)(
                                                      u.ZP,
                                                      {
                                                          className: f.iconMask,
                                                          height: I,
                                                          width: I,
                                                          mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: l
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        w > 0
                                            ? (0, a.jsx)(d.ua7, {
                                                  text: g.NW.formatToPlainString(g.t.m6oRrK, { appNames: S.format(R.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, a.jsxs)(
                                                          'div',
                                                          b(_({}, e), {
                                                              className: o()(f.moreGuilds, v[I]),
                                                              children: ['+', w]
                                                          })
                                                      )
                                              })
                                            : null
                                    ]
                                })
                              : (0, a.jsx)(d.QTo, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: I,
                                    height: I,
                                    className: f.defaultIcon
                                })
                  }),
                  null != Z
                      ? (0, a.jsx)(d.Text, {
                            variant: y,
                            color: 'header-secondary',
                            children: Z
                        })
                      : null
              ]
          });
}
