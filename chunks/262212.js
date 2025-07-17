n.d(t, {
    Nn: () => I,
    ZP: () => P,
    ms: () => N
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(755721),
    l = n(481060),
    c = n(762762),
    d = n(639777),
    u = n(973772),
    p = n(827397),
    m = n(279604),
    _ = n(535396),
    f = n(93841),
    x = n(388032),
    b = n(503945);
function v() {
    return (v =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function g(e) {
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
function h(e, t) {
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
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e) {
    let { powerup: t, isActive: n, compact: i } = e,
        o = n
            ? (0, r.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        a = x.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && a,
            !i &&
                (0, r.jsx)('span', {
                    className: b.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function C(e) {
    let { guildId: t, powerup: n } = e,
        i = (0, u.Z)(t, n);
    if (i.type === _.A3.LEVEL_ACTIVATED) {
        var o, a;
        return (0, r.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: x.intl.string(f.default['9oYuvb'])
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: x.intl.formatToPlainString(f.default.WRRYUV, { perkName: null != (a = null == (o = i.sourcePowerup) ? void 0 : o.title) ? a : x.intl.string(x.t.BfF6EB) })
                })
            ]
        });
    }
    if (i.type === _.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: x.intl.string(f.default.TZsu1d)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: x.intl.formatToPlainString(f.default['5HQUzM'], { boostCount: n.cost })
                })
            ]
        });
}
function N(e) {
    var { guildId: t, powerup: n, onClick: i } = e,
        o = j(e, ['guildId', 'powerup', 'onClick']);
    let a = (0, p.Z)(t, n),
        { onShowMore: l } = (0, m.ZP)(t, n),
        c = _.uc.has(n.skuId);
    return (0, r.jsx)(
        s.zx,
        h(
            g(
                {
                    className: b.primaryButton,
                    innerClassName: b.buttonInner,
                    wrapperClassName: b.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == i || i(e), c ? null == a || a(e) : null == l || l());
                    }
                },
                o
            ),
            { children: c ? x.intl.string(f.default['g5Ds6+']) : x.intl.string(x.t['0Q61kJ']) }
        )
    );
}
function I(e) {
    var { guildId: t, powerup: n, compact: o, onError: d } = e,
        p = j(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: v, isLoading: N, error: I, onShowDeactivate: O } = (0, m.ZP)(t, n),
        Z = (0, u.Z)(t, n).type !== _.A3.INACTIVE,
        { disabled: P, reason: w } = (0, c.Z)(t, n, Z);
    return (
        i.useEffect(() => {
            null == d || d(I);
        }, [I, d]),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != w ? w : Z ? x.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : Z
                      ? (0, r.jsx)(C, {
                            guildId: t,
                            powerup: n
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    h(
                        g(
                            h(g({}, e), {
                                className: b.secondaryButton,
                                innerClassName: b.buttonInner,
                                wrapperClassName: a()(b.secondaryButton, { [b.buttonWrapper]: !0 === p.grow }),
                                color: Z ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': x.intl.string(Z ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: P,
                                onClick: Z ? O : v,
                                submitting: N
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(E, {
                                powerup: n,
                                isActive: Z,
                                compact: o
                            })
                        }
                    )
                )
        })
    );
}
function O(e) {
    let { className: t, guildId: n, powerup: i } = e,
        { onShowMore: o } = (0, m.ZP)(n, i);
    return (0, r.jsx)('div', {
        className: a()(b.container, t),
        children: (0, r.jsx)(s.zx, {
            className: b.primaryButton,
            innerClassName: b.buttonInner,
            wrapperClassName: b.buttonWrapper,
            grow: !0,
            onClick: o,
            children: i.type === _.Us.LEVEL ? x.intl.string(x.t['0Q61kJ']) : x.intl.string(x.t.Xa11Eh)
        })
    });
}
function Z(e) {
    let { className: t, guildId: n, powerup: i, onError: o } = e,
        s = (0, u.Z)(n, i).type !== _.A3.INACTIVE,
        l = !s;
    return (0, r.jsxs)('div', {
        className: a()(b.container, t),
        children: [
            (0, r.jsx)(I, {
                guildId: n,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            s &&
                (0, r.jsx)(N, {
                    guildId: n,
                    powerup: i
                })
        ]
    });
}
function P(e) {
    var t = v(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(t.guildId) ? (0, r.jsx)(Z, g({}, t)) : (0, r.jsx)(O, g({}, t));
}
