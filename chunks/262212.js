t.d(n, {
    Nn: () => E,
    ZP: () => O,
    ms: () => C
});
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(481060),
    l = t(762762),
    c = t(690786),
    d = t(639777),
    u = t(827397),
    m = t(279604),
    p = t(535396),
    _ = t(93841),
    f = t(388032),
    x = t(503945);
function b() {
    return (b =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
function g(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                ((r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r));
            }));
    }
    return e;
}
function v(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function h(e, n) {
    if (null == e) return {};
    var t,
        r,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((t = o[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
}
function j(e) {
    let { powerup: n, isActive: t, compact: i } = e,
        o = t
            ? (0, r.jsx)(s.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(s.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        a = f.intl.string(t ? _.default.TZsu1d : _.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && a,
            !i &&
                (0, r.jsx)('span', {
                    className: x.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function C(e) {
    var { guildId: n, powerup: t, onClick: i } = e,
        o = h(e, ['guildId', 'powerup', 'onClick']);
    let a = (0, u.Z)(n, t),
        { onShowMore: l } = (0, m.ZP)(n, t),
        c = p.uc.has(t.skuId);
    return (0, r.jsx)(
        s.zxk,
        v(
            g(
                {
                    className: x.primaryButton,
                    innerClassName: x.buttonInner,
                    wrapperClassName: x.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == i || i(e), c ? null == a || a(e) : null == l || l());
                    }
                },
                o
            ),
            { children: c ? f.intl.string(_.default['g5Ds6+']) : f.intl.string(f.t['0Q61kJ']) }
        )
    );
}
function E(e) {
    var { guildId: n, powerup: t, compact: o, onError: d } = e,
        u = h(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: p, isLoading: b, error: C, onShowDeactivate: E } = (0, m.ZP)(n, t),
        N = null != (0, c.Z)(n, t),
        { disabled: Z, reason: O } = (0, l.Z)(n, t, N);
    return (
        i.useEffect(() => {
            null == d || d(C);
        }, [C, d]),
        (0, r.jsx)(s.ua7, {
            delay: 100,
            'aria-label': null != O ? O : N ? f.intl.string(_.default.TZsu1d) : void 0,
            text:
                null != O
                    ? O
                    : N
                      ? (0, r.jsxs)('div', {
                            className: x.tooltipContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/semibold',
                                    children: f.intl.string(_.default.TZsu1d)
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    children: f.intl.formatToPlainString(_.default['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    v(
                        g(
                            v(g({}, e), {
                                className: x.secondaryButton,
                                innerClassName: x.buttonInner,
                                wrapperClassName: a()(x.secondaryButton, { [x.buttonWrapper]: !0 === u.grow }),
                                color: N ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                                'aria-label': f.intl.string(N ? _.default.TZsu1d : _.default.gSxlHR),
                                disabled: Z,
                                onClick: N ? E : p,
                                submitting: b
                            }),
                            u
                        ),
                        {
                            children: (0, r.jsx)(j, {
                                powerup: t,
                                isActive: N,
                                compact: o
                            })
                        }
                    )
                )
        })
    );
}
function N(e) {
    let { className: n, guildId: t, powerup: i } = e,
        { onShowMore: o } = (0, m.ZP)(t, i);
    return (0, r.jsx)('div', {
        className: a()(x.container, n),
        children: (0, r.jsx)(s.zxk, {
            className: x.primaryButton,
            innerClassName: x.buttonInner,
            wrapperClassName: x.buttonWrapper,
            grow: !0,
            onClick: o,
            children: i.type === p.Us.LEVEL ? f.intl.string(f.t['0Q61kJ']) : f.intl.string(f.t.Xa11Eh)
        })
    });
}
function Z(e) {
    let { className: n, guildId: t, powerup: i, onError: o } = e,
        s = null != (0, c.Z)(t, i),
        l = !s;
    return (0, r.jsxs)('div', {
        className: a()(x.container, n),
        children: [
            (0, r.jsx)(E, {
                guildId: t,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            s &&
                (0, r.jsx)(C, {
                    guildId: t,
                    powerup: i
                })
        ]
    });
}
function O(e) {
    var n = b(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(n.guildId) ? (0, r.jsx)(Z, g({}, n)) : (0, r.jsx)(N, g({}, n));
}
