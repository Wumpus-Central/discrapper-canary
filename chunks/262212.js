t.d(n, {
    Nn: () => b,
    ZP: () => N,
    ms: () => j
});
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(481060),
    l = t(762762),
    c = t(690786),
    d = t(827397),
    u = t(279604),
    m = t(535396),
    p = t(680278),
    x = t(388032),
    _ = t(503945);
function f(e) {
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
function g(e, n) {
    if (null == e) return {};
    var t,
        r,
        o = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (t = s[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (t = s[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
    }
    return o;
}
function h(e) {
    let { powerup: n, isActive: t, compact: o } = e,
        s = t
            ? (0, r.jsx)(a.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(a.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        i = x.NW.string(t ? p.Z.TZsu1d : p.Z.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, r.jsx)('span', {
                    className: _.dot,
                    children: '\u2022'
                }),
            s,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function j(e) {
    var { guildId: n, powerup: t, onClick: o } = e,
        s = g(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, d.Z)(n, t),
        { onShowMore: l } = (0, u.ZP)(n, t),
        c = m.uc.has(t.skuId);
    return (0, r.jsx)(
        a.zxk,
        v(
            f(
                {
                    className: _.primaryButton,
                    innerClassName: _.buttonInner,
                    wrapperClassName: _.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), c ? null == i || i(e) : null == l || l();
                    }
                },
                s
            ),
            { children: c ? x.NW.string(p.Z['g5Ds6+']) : x.NW.string(x.t['OBCR+v']) }
        )
    );
}
function b(e) {
    var { guildId: n, powerup: t, compact: s, onError: d } = e,
        m = g(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: j, isLoading: b, error: N, onShowDeactivate: C } = (0, u.ZP)(n, t),
        Z = null != (0, c.Z)(n, t),
        { disabled: E, reason: I } = (0, l.Z)(n, t, Z);
    return (
        o.useEffect(() => {
            null == d || d(N);
        }, [N, d]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != I ? I : Z ? x.NW.string(p.Z.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : Z
                      ? (0, r.jsxs)('div', {
                            className: _.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: x.NW.string(p.Z.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: x.NW.formatToPlainString(p.Z['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    v(
                        f(
                            v(f({}, e), {
                                className: _.secondaryButton,
                                innerClassName: _.buttonInner,
                                wrapperClassName: i()(_.secondaryButton, { [_.buttonWrapper]: !0 === m.grow }),
                                color: Z ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': x.NW.string(Z ? p.Z.TZsu1d : p.Z.gSxlHR),
                                disabled: E,
                                onClick: Z ? C : j,
                                submitting: b
                            }),
                            m
                        ),
                        {
                            children: (0, r.jsx)(h, {
                                powerup: t,
                                isActive: Z,
                                compact: s
                            })
                        }
                    )
                )
        })
    );
}
function N(e) {
    let { className: n, guildId: t, powerup: o, onError: s } = e,
        a = null != (0, c.Z)(t, o),
        l = !a;
    return (0, r.jsxs)('div', {
        className: i()(_.container, n),
        children: [
            (0, r.jsx)(b, {
                guildId: t,
                powerup: o,
                onError: s,
                grow: l,
                compact: !l
            }),
            a &&
                (0, r.jsx)(j, {
                    guildId: t,
                    powerup: o
                })
        ]
    });
}
