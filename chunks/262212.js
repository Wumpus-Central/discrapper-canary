t.d(n, {
    Nn: () => N,
    ZP: () => I,
    ms: () => E
});
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(755721),
    l = t(481060),
    c = t(762762),
    d = t(690786),
    u = t(639777),
    m = t(827397),
    p = t(279604),
    _ = t(535396),
    f = t(93841),
    x = t(388032),
    b = t(503945);
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
function h(e, n) {
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
function j(e, n) {
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
function C(e) {
    let { powerup: n, isActive: t, compact: i } = e,
        o = t
            ? (0, r.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        a = x.intl.string(t ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && a,
            !i &&
                (0, r.jsx)('span', {
                    className: b.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function E(e) {
    var { guildId: n, powerup: t, onClick: i } = e,
        o = j(e, ['guildId', 'powerup', 'onClick']);
    let a = (0, m.Z)(n, t),
        { onShowMore: l } = (0, p.ZP)(n, t),
        c = _.uc.has(t.skuId);
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
function N(e) {
    var { guildId: n, powerup: t, compact: o, onError: u } = e,
        m = j(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: _, isLoading: v, error: E, onShowDeactivate: N } = (0, p.ZP)(n, t),
        Z = null != (0, d.Z)(n, t),
        { disabled: O, reason: I } = (0, c.Z)(n, t, Z);
    return (
        i.useEffect(() => {
            null == u || u(E);
        }, [E, u]),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != I ? I : Z ? x.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : Z
                      ? (0, r.jsxs)('div', {
                            className: b.tooltipContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/semibold',
                                    children: x.intl.string(f.default.TZsu1d)
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    children: x.intl.formatToPlainString(f.default['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
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
                                wrapperClassName: a()(b.secondaryButton, { [b.buttonWrapper]: !0 === m.grow }),
                                color: Z ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': x.intl.string(Z ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: O,
                                onClick: Z ? N : _,
                                submitting: v
                            }),
                            m
                        ),
                        {
                            children: (0, r.jsx)(C, {
                                powerup: t,
                                isActive: Z,
                                compact: o
                            })
                        }
                    )
                )
        })
    );
}
function Z(e) {
    let { className: n, guildId: t, powerup: i } = e,
        { onShowMore: o } = (0, p.ZP)(t, i);
    return (0, r.jsx)('div', {
        className: a()(b.container, n),
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
function O(e) {
    let { className: n, guildId: t, powerup: i, onError: o } = e,
        s = null != (0, d.Z)(t, i),
        l = !s;
    return (0, r.jsxs)('div', {
        className: a()(b.container, n),
        children: [
            (0, r.jsx)(N, {
                guildId: t,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            s &&
                (0, r.jsx)(E, {
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
    return (0, u.Z)(n.guildId) ? (0, r.jsx)(O, g({}, n)) : (0, r.jsx)(Z, g({}, n));
}
