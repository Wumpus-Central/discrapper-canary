n.d(t, {
    Z: () => j,
    x: () => x
}),
    n(539854);
var r,
    a = n(200651),
    i = n(192379),
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
    _ = n(64718);
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
var x = (((r = {})[(r.SMALL = (0, h.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (r[(r.LARGE = (0, h.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE'), r);
let v = {
        [x.SMALL]: _.moreGuildsSmall,
        [x.LARGE]: _.moreGuildsLarge
    },
    C = {
        [x.SMALL]: _.iconSmall,
        [x.LARGE]: _.iconLarge
    };
function j(e) {
    var t, n, r;
    let { application: l, mutualGuilds: c, mutualGuildShownMax: h = 4, className: j, textVariant: y = 'text-sm/normal', compact: I, guildIconSize: N = x.LARGE, guildsClassName: O } = e,
        P = (0, o.e7)([p.default], () => p.default.locale),
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
        Z = R.length,
        k = (function (e, t, n, r, a) {
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
        })(E, T, A, P, I);
    return 0 === L.length && null == k
        ? null
        : (0, a.jsxs)('div', {
              className: s()(j, _.wrapper),
              children: [
                  (0, a.jsx)('div', {
                      className: s()(_.icons, O),
                      children:
                          L.length > 0
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        L.map((e, t) => {
                                            let n = t === L.length - 1 && 0 === Z,
                                                r = m.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: N,
                                                    canAnimate: !1
                                                }),
                                                l = (0, a.jsx)(d.ua7, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, a.jsx)(
                                                            'img',
                                                            b(f({}, e), {
                                                                className: s()(_.icon, C[N]),
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
                                                          className: _.iconMask,
                                                          height: N,
                                                          width: N,
                                                          mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: l
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        Z > 0
                                            ? (0, a.jsx)(d.ua7, {
                                                  text: g.NW.formatToPlainString(g.t.m6oRrK, { appNames: S.format(R.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, a.jsxs)(
                                                          'div',
                                                          b(f({}, e), {
                                                              className: s()(_.moreGuilds, v[N]),
                                                              children: ['+', Z]
                                                          })
                                                      )
                                              })
                                            : null
                                    ]
                                })
                              : (0, a.jsx)(d.QTo, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: N,
                                    height: N,
                                    className: _.defaultIcon
                                })
                  }),
                  null != k
                      ? (0, a.jsx)(d.Text, {
                            variant: y,
                            color: 'header-secondary',
                            children: k
                        })
                      : null
              ]
          });
}
