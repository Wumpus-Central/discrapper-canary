n.d(t, {
    Z: () => j,
    x: () => v
}),
    n(653041);
var r,
    i = n(200651),
    a = n(192379),
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
    _ = n(960319);
function f(e) {
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
var v = (((r = {})[(r.SMALL = (0, h.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (r[(r.LARGE = (0, h.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE'), r);
let x = {
        [v.SMALL]: _.moreGuildsSmall,
        [v.LARGE]: _.moreGuildsLarge
    },
    C = {
        [v.SMALL]: _.iconSmall,
        [v.LARGE]: _.iconLarge
    };
function j(e) {
    var t, n, r;
    let { application: l, mutualGuilds: c, mutualGuildShownMax: h = 4, className: j, textVariant: y = 'text-sm/normal', compact: I, guildIconSize: O = v.LARGE, guildsClassName: N } = e,
        P = (0, s.e7)([p.default], () => p.default.locale),
        S = new Intl.ListFormat(P),
        E = null !== (n = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        A = null !== (r = null == c ? void 0 : c.length) && void 0 !== r ? r : 0,
        L = Math.max(0, E - A),
        { shownMutualGuilds: T, hiddenMutualGuilds: R } = a.useMemo(() => {
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
        k = R.length,
        Z = (function (e, t, n, r, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return g.NW.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let a = t > 0 ? g.t.YR8PSE : g.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return g.NW.formatToPlainString(a, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n)
            });
        })(E, A, L, P, I);
    return 0 === T.length && null == Z
        ? null
        : (0, i.jsxs)('div', {
              className: o()(j, _.wrapper),
              children: [
                  (0, i.jsx)('div', {
                      className: o()(_.icons, N),
                      children:
                          T.length > 0
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        T.map((e, t) => {
                                            let n = t === T.length - 1 && 0 === k,
                                                r = m.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: O,
                                                    canAnimate: !1
                                                }),
                                                l = (0, i.jsx)(d.ua7, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, i.jsx)(
                                                            'img',
                                                            b(f({}, e), {
                                                                className: o()(_.icon, C[O]),
                                                                src: r,
                                                                alt: ''
                                                            })
                                                        )
                                                });
                                            return n
                                                ? (0, i.jsx)(a.Fragment, { children: l }, e.id)
                                                : (0, i.jsx)(
                                                      u.ZP,
                                                      {
                                                          className: _.iconMask,
                                                          height: O,
                                                          width: O,
                                                          mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: l
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        k > 0
                                            ? (0, i.jsx)(d.ua7, {
                                                  text: g.NW.formatToPlainString(g.t.m6oRrK, { appNames: S.format(R.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, i.jsxs)(
                                                          'div',
                                                          b(f({}, e), {
                                                              className: o()(_.moreGuilds, x[O]),
                                                              children: ['+', k]
                                                          })
                                                      )
                                              })
                                            : null
                                    ]
                                })
                              : (0, i.jsx)(d.QTo, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: O,
                                    height: O,
                                    className: _.defaultIcon
                                })
                  }),
                  null != Z
                      ? (0, i.jsx)(d.Text, {
                            variant: y,
                            color: 'header-secondary',
                            children: Z
                        })
                      : null
              ]
          });
}
