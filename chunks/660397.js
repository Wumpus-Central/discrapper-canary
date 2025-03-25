n.d(t, { ZP: () => v });
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    c = n(481060),
    i = n(413335),
    l = n(762762),
    u = n(690786),
    d = n(279604),
    b = n(535396),
    p = n(367123),
    m = n(388032),
    f = n(423839);
function j(e) {
    let { powerup: t, isActive: n, compact: r } = e,
        s = n
            ? (0, o.jsx)(c.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, o.jsx)(i.Z, {
                  size: 'sm',
                  className: f.boost,
                  color: 'currentColor'
              }),
        a = m.NW.string(n ? p.Z.TZsu1d : p.Z.gSxlHR);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            !r && a,
            !r &&
                (0, o.jsx)('span', {
                    className: f.dot,
                    children: '\u2022'
                }),
            s,
            (0, o.jsx)('span', { children: t.cost })
        ]
    });
}
function O(e) {
    let { guildId: t, powerup: n, onError: s, compact: i } = e,
        { onActivate: b, isLoading: O, error: _, onShowDeactivate: v } = (0, d.ZP)(t, n),
        g = null != (0, u.Z)(t, n),
        { disabled: x, reason: y } = (0, l.Z)(t, n, g);
    return (
        r.useEffect(() => {
            null == s || s(_);
        }, [_, s]),
        (0, o.jsx)(c.ua7, {
            delay: 100,
            'aria-label': null != y ? y : g ? m.NW.string(p.Z.TZsu1d) : void 0,
            text:
                null != y
                    ? y
                    : g
                      ? (0, o.jsxs)('div', {
                            className: f.tooltipContainer,
                            children: [
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    children: m.NW.string(p.Z.TZsu1d)
                                }),
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    children: m.NW.formatToPlainString(p.Z['5HQUzM'], { boostCount: n.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) => {
                var t, r;
                return (0, o.jsx)(
                    c.zxk,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    (o = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            className: f.secondaryButton,
                            innerClassName: a()(f.buttonInner, f.secondaryButtonInner),
                            wrapperClassName: a()({ [f.buttonWrapper]: !i }),
                            color: g ? c.Ttl.PRIMARY : c.Ttl.BRAND,
                            'aria-label': m.NW.string(g ? p.Z.TZsu1d : p.Z.gSxlHR),
                            grow: !i,
                            disabled: x,
                            onClick: g ? v : b,
                            submitting: O,
                            children: (0, o.jsx)(j, {
                                powerup: n,
                                isActive: g,
                                compact: i
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, o);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        })
    );
}
function _() {
    return (0, o.jsx)(c.zxk, {
        className: f.primaryButton,
        innerClassName: f.buttonInner,
        wrapperClassName: f.buttonWrapper,
        grow: !0,
        onClick: () => {},
        children: m.NW.string(p.Z['g5Ds6+'])
    });
}
function v(e) {
    let { className: t, guildId: n, powerup: r, onError: s } = e,
        c = null != (0, u.Z)(n, r),
        i = r.type === b.Us.PERK;
    return (0, o.jsxs)('div', {
        className: a()(f.container, t),
        children: [
            (0, o.jsx)(O, {
                guildId: n,
                powerup: r,
                onError: s,
                compact: c && i
            }),
            i && c && (0, o.jsx)(_, {})
        ]
    });
}
