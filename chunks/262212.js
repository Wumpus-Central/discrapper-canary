t.d(n, {
    Nn: () => E,
    ZP: () => I,
    ms: () => C
});
var r = t(255367),
    i = t(73800),
    o = t(120356),
    s = t.n(o),
    a = t(481060),
    l = t(762762),
    c = t(690786),
    u = t(639777),
    d = t(827397),
    p = t(279604),
    m = t(535396),
    _ = t(93841),
    x = t(388032),
    f = t(503945);
function v() {
    return (v =
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function j(e, n) {
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
function b(e, n) {
    if (null == e) return {};
    var t,
        r,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (t = o[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    }
    return i;
}
function h(e) {
    let { powerup: n, isActive: t, compact: i } = e,
        o = t
            ? (0, r.jsx)(a.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(a.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        s = x.intl.string(t ? _.default.TZsu1d : _.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && s,
            !i &&
                (0, r.jsx)('span', {
                    className: f.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function C(e) {
    var { guildId: n, powerup: t, onClick: i } = e,
        o = b(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, d.Z)(n, t),
        { onShowMore: l } = (0, p.ZP)(n, t),
        c = m.uc.has(t.skuId);
    return (0, r.jsx)(
        a.zxk,
        j(
            g(
                {
                    className: f.primaryButton,
                    innerClassName: f.buttonInner,
                    wrapperClassName: f.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == i || i(e), c ? null == s || s(e) : null == l || l();
                    }
                },
                o
            ),
            { children: c ? x.intl.string(_.default['g5Ds6+']) : x.intl.string(x.t['0Q61kJ']) }
        )
    );
}
function E(e) {
    var { guildId: n, powerup: t, compact: o, onError: u } = e,
        d = b(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: m, isLoading: v, error: C, onShowDeactivate: E } = (0, p.ZP)(n, t),
        N = null != (0, c.Z)(n, t),
        { disabled: Z, reason: I } = (0, l.Z)(n, t, N);
    return (
        i.useEffect(() => {
            null == u || u(C);
        }, [C, u]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != I ? I : N ? x.intl.string(_.default.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : N
                      ? (0, r.jsxs)('div', {
                            className: f.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: x.intl.string(_.default.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: x.intl.formatToPlainString(_.default['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    j(
                        g(
                            j(g({}, e), {
                                className: f.secondaryButton,
                                innerClassName: f.buttonInner,
                                wrapperClassName: s()(f.secondaryButton, { [f.buttonWrapper]: !0 === d.grow }),
                                color: N ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': x.intl.string(N ? _.default.TZsu1d : _.default.gSxlHR),
                                disabled: Z,
                                onClick: N ? E : m,
                                submitting: v
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(h, {
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
        { onShowMore: o } = (0, p.ZP)(t, i);
    return (0, r.jsx)('div', {
        className: s()(f.container, n),
        children: (0, r.jsx)(a.zxk, {
            className: f.primaryButton,
            innerClassName: f.buttonInner,
            wrapperClassName: f.buttonWrapper,
            grow: !0,
            onClick: o,
            children: i.type === m.Us.LEVEL ? x.intl.string(x.t['0Q61kJ']) : x.intl.string(x.t.Xa11Eh)
        })
    });
}
function Z(e) {
    let { className: n, guildId: t, powerup: i, onError: o } = e,
        a = null != (0, c.Z)(t, i),
        l = !a;
    return (0, r.jsxs)('div', {
        className: s()(f.container, n),
        children: [
            (0, r.jsx)(E, {
                guildId: t,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            a &&
                (0, r.jsx)(C, {
                    guildId: t,
                    powerup: i
                })
        ]
    });
}
function I(e) {
    var n = v(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, u.Z)(n.guildId) ? (0, r.jsx)(Z, g({}, n)) : (0, r.jsx)(N, g({}, n));
}
