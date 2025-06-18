r.d(t, {
    Nn: () => x,
    ZP: () => w,
    ms: () => C
});
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    l = r(481060),
    s = r(762762),
    c = r(690786),
    u = r(639777),
    d = r(827397),
    p = r(279604),
    f = r(535396),
    b = r(93841),
    g = r(388032),
    _ = r(503945);
function m() {
    return (m =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
function h(e) {
    let { powerup: t, isActive: r, compact: o } = e,
        a = r
            ? (0, n.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, n.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        i = g.intl.string(r ? b.default.TZsu1d : b.default.gSxlHR);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, n.jsx)('span', {
                    className: _.dot,
                    children: '\u2022'
                }),
            a,
            (0, n.jsx)('span', { children: t.cost })
        ]
    });
}
function C(e) {
    var { guildId: t, powerup: r, onClick: o } = e,
        a = O(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, d.Z)(t, r),
        { onShowMore: s } = (0, p.ZP)(t, r),
        c = f.uc.has(r.skuId);
    return (0, n.jsx)(
        l.zxk,
        y(
            j(
                {
                    className: _.primaryButton,
                    innerClassName: _.buttonInner,
                    wrapperClassName: _.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), c ? null == i || i(e) : null == s || s();
                    }
                },
                a
            ),
            { children: c ? g.intl.string(b.default['g5Ds6+']) : g.intl.string(g.t['0Q61kJ']) }
        )
    );
}
function x(e) {
    var { guildId: t, powerup: r, compact: a, onError: u } = e,
        d = O(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: f, isLoading: m, error: C, onShowDeactivate: x } = (0, p.ZP)(t, r),
        v = null != (0, c.Z)(t, r),
        { disabled: P, reason: w } = (0, s.Z)(t, r, v);
    return (
        o.useEffect(() => {
            null == u || u(C);
        }, [C, u]),
        (0, n.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != w ? w : v ? g.intl.string(b.default.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : v
                      ? (0, n.jsxs)('div', {
                            className: _.tooltipContainer,
                            children: [
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/semibold',
                                    children: g.intl.string(b.default.TZsu1d)
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    children: g.intl.formatToPlainString(b.default['5HQUzM'], { boostCount: r.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, n.jsx)(
                    l.zxk,
                    y(
                        j(
                            y(j({}, e), {
                                className: _.secondaryButton,
                                innerClassName: _.buttonInner,
                                wrapperClassName: i()(_.secondaryButton, { [_.buttonWrapper]: !0 === d.grow }),
                                color: v ? l.Ttl.PRIMARY : l.Ttl.BRAND,
                                'aria-label': g.intl.string(v ? b.default.TZsu1d : b.default.gSxlHR),
                                disabled: P,
                                onClick: v ? x : f,
                                submitting: m
                            }),
                            d
                        ),
                        {
                            children: (0, n.jsx)(h, {
                                powerup: r,
                                isActive: v,
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function v(e) {
    let { className: t, guildId: r, powerup: o } = e,
        { onShowMore: a } = (0, p.ZP)(r, o);
    return (0, n.jsx)('div', {
        className: i()(_.container, t),
        children: (0, n.jsx)(l.zxk, {
            className: _.primaryButton,
            innerClassName: _.buttonInner,
            wrapperClassName: _.buttonWrapper,
            grow: !0,
            onClick: a,
            children: o.type === f.Us.LEVEL ? g.intl.string(g.t['0Q61kJ']) : g.intl.string(g.t.Xa11Eh)
        })
    });
}
function P(e) {
    let { className: t, guildId: r, powerup: o, onError: a } = e,
        l = null != (0, c.Z)(r, o),
        s = !l;
    return (0, n.jsxs)('div', {
        className: i()(_.container, t),
        children: [
            (0, n.jsx)(x, {
                guildId: r,
                powerup: o,
                onError: a,
                grow: s,
                compact: !s
            }),
            l &&
                (0, n.jsx)(C, {
                    guildId: r,
                    powerup: o
                })
        ]
    });
}
function w(e) {
    var t = m(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, u.Z)(t.guildId) ? (0, n.jsx)(P, j({}, t)) : (0, n.jsx)(v, j({}, t));
}
