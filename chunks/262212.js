n.d(t, {
    Nn: () => y,
    ZP: () => E,
    ms: () => x
});
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(762762),
    c = n(690786),
    u = n(639777),
    d = n(827397),
    p = n(279604),
    f = n(535396),
    b = n(93841),
    m = n(388032),
    O = n(503945);
function j() {
    return (j =
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
function v(e, t) {
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function _(e) {
    let { powerup: t, isActive: n, compact: o } = e,
        a = n
            ? (0, r.jsx)(s.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(s.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        i = m.intl.string(n ? b.default.TZsu1d : b.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, r.jsx)('span', {
                    className: O.dot,
                    children: '\u2022'
                }),
            a,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function x(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        a = I(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, d.Z)(t, n),
        { onShowMore: l } = (0, p.ZP)(t, n),
        c = f.uc.has(n.skuId);
    return (0, r.jsx)(
        s.zxk,
        v(
            g(
                {
                    className: O.primaryButton,
                    innerClassName: O.buttonInner,
                    wrapperClassName: O.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), c ? null == i || i(e) : null == l || l();
                    }
                },
                a
            ),
            { children: c ? m.intl.string(b.default['g5Ds6+']) : m.intl.string(m.t['0Q61kJ']) }
        )
    );
}
function y(e) {
    var { guildId: t, powerup: n, compact: a, onError: u } = e,
        d = I(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: f, isLoading: j, error: x, onShowDeactivate: y } = (0, p.ZP)(t, n),
        k = null != (0, c.Z)(t, n),
        { disabled: h, reason: E } = (0, l.Z)(t, n, k);
    return (
        o.useEffect(() => {
            null == u || u(x);
        }, [x, u]),
        (0, r.jsx)(s.ua7, {
            delay: 100,
            'aria-label': null != E ? E : k ? m.intl.string(b.default.TZsu1d) : void 0,
            text:
                null != E
                    ? E
                    : k
                      ? (0, r.jsxs)('div', {
                            className: O.tooltipContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/semibold',
                                    children: m.intl.string(b.default.TZsu1d)
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    children: m.intl.formatToPlainString(b.default['5HQUzM'], { boostCount: n.cost })
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
                                className: O.secondaryButton,
                                innerClassName: O.buttonInner,
                                wrapperClassName: i()(O.secondaryButton, { [O.buttonWrapper]: !0 === d.grow }),
                                color: k ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                                'aria-label': m.intl.string(k ? b.default.TZsu1d : b.default.gSxlHR),
                                disabled: h,
                                onClick: k ? y : f,
                                submitting: j
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(_, {
                                powerup: n,
                                isActive: k,
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function k(e) {
    let { className: t, guildId: n, powerup: o } = e,
        { onShowMore: a } = (0, p.ZP)(n, o);
    return (0, r.jsx)('div', {
        className: i()(O.container, t),
        children: (0, r.jsx)(s.zxk, {
            className: O.primaryButton,
            innerClassName: O.buttonInner,
            wrapperClassName: O.buttonWrapper,
            grow: !0,
            onClick: a,
            children: o.type === f.Us.LEVEL ? m.intl.string(m.t['0Q61kJ']) : m.intl.string(m.t.Xa11Eh)
        })
    });
}
function h(e) {
    let { className: t, guildId: n, powerup: o, onError: a } = e,
        s = null != (0, c.Z)(n, o),
        l = !s;
    return (0, r.jsxs)('div', {
        className: i()(O.container, t),
        children: [
            (0, r.jsx)(y, {
                guildId: n,
                powerup: o,
                onError: a,
                grow: l,
                compact: !l
            }),
            s &&
                (0, r.jsx)(x, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
function E(e) {
    var t = j(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, u.Z)(t.guildId) ? (0, r.jsx)(h, g({}, t)) : (0, r.jsx)(k, g({}, t));
}
