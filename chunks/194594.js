(n.d(t, {
    Z: () => j,
    x: () => x
}),
    n(539854));
var r,
    a = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let { application: l, mutualGuilds: c, mutualGuildShownMax: h = 4, className: j, textVariant: y = 'text-sm/normal', compact: I, guildIconSize: O = x.LARGE, guildsClassName: S, children: P } = e,
        E = (0, o.e7)([p.default], () => p.default.locale),
        N = new Intl.ListFormat(E),
        T = null != (n = null == (t = l.directory_entry) ? void 0 : t.guild_count) ? n : 0,
        A = null != (r = null == c ? void 0 : c.length) ? r : 0,
        L = Math.max(0, T - A),
        { shownMutualGuilds: R, hiddenMutualGuilds: Z } = i.useMemo(() => {
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
        w = Z.length,
        D = (function (e, t, n, r, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return g.intl.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? g.t.YR8PSE : g.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: a ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return g.intl.formatToPlainString(i, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n)
            });
        })(T, A, L, E, I);
    return 0 === R.length && null == D
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  P,
                  (0, a.jsxs)('div', {
                      className: s()(j, f.wrapper),
                      children: [
                          (0, a.jsx)('div', {
                              className: s()(f.icons, S),
                              children:
                                  R.length > 0
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                R.map((e, t) => {
                                                    let n = t === R.length - 1 && 0 === w,
                                                        r = m.ZP.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: O,
                                                            canAnimate: !1
                                                        }),
                                                        l = (0, a.jsx)(d.ua7, {
                                                            text: e.name,
                                                            position: 'top',
                                                            children: (e) =>
                                                                (0, a.jsx)(
                                                                    'img',
                                                                    b(_({}, e), {
                                                                        className: s()(f.icon, C[O]),
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
                                                                  height: O,
                                                                  width: O,
                                                                  mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: l
                                                              },
                                                              e.id
                                                          );
                                                }),
                                                w > 0
                                                    ? (0, a.jsx)(d.ua7, {
                                                          text: g.intl.formatToPlainString(g.t.m6oRrK, { appNames: N.format(Z.map((e) => e.name)) }),
                                                          position: 'top',
                                                          children: (e) =>
                                                              (0, a.jsxs)(
                                                                  'div',
                                                                  b(_({}, e), {
                                                                      className: s()(f.moreGuilds, v[O]),
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
                                            width: O,
                                            height: O,
                                            className: f.defaultIcon
                                        })
                          }),
                          null != D
                              ? (0, a.jsx)(d.Text, {
                                    variant: y,
                                    color: 'header-secondary',
                                    children: D
                                })
                              : null
                      ]
                  })
              ]
          });
}
