t.d(n, {
    Nn: () => h,
    ZP: () => Z,
    ms: () => j
});
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(481060),
    l = t(762762),
    c = t(690786),
    u = t(827397),
    d = t(279604),
    m = t(535396),
    p = t(680278),
    x = t(388032),
    _ = t(503945);
function v(e) {
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
function g(e, n) {
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
function f(e, n) {
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
function b(e) {
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
        s = f(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, u.Z)(n, t);
    return (0, r.jsx)(
        a.zxk,
        g(
            v(
                {
                    className: _.primaryButton,
                    innerClassName: _.buttonInner,
                    wrapperClassName: _.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), null == i || i(e);
                    }
                },
                s
            ),
            { children: x.NW.string(p.Z['g5Ds6+']) }
        )
    );
}
function h(e) {
    var { guildId: n, powerup: t, compact: s, onError: u } = e,
        m = f(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: j, isLoading: h, error: Z, onShowDeactivate: N } = (0, d.ZP)(n, t),
        C = null != (0, c.Z)(n, t),
        { disabled: E, reason: I } = (0, l.Z)(n, t, C);
    return (
        o.useEffect(() => {
            null == u || u(Z);
        }, [Z, u]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != I ? I : C ? x.NW.string(p.Z.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : C
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
                    g(
                        v(
                            g(v({}, e), {
                                className: _.secondaryButton,
                                innerClassName: _.buttonInner,
                                wrapperClassName: i()({ [_.buttonWrapper]: !0 === m.grow }),
                                color: C ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': x.NW.string(C ? p.Z.TZsu1d : p.Z.gSxlHR),
                                disabled: E,
                                onClick: C ? N : j,
                                submitting: h
                            }),
                            m
                        ),
                        {
                            children: (0, r.jsx)(b, {
                                powerup: t,
                                isActive: C,
                                compact: s
                            })
                        }
                    )
                )
        })
    );
}
function Z(e) {
    let { className: n, guildId: t, powerup: o, onError: s } = e,
        a = null != (0, c.Z)(t, o),
        l = m.uc.has(o.skuId),
        u = !a || !l;
    return (0, r.jsxs)('div', {
        className: i()(_.container, n),
        children: [
            (0, r.jsx)(h, {
                guildId: t,
                powerup: o,
                onError: s,
                grow: u,
                compact: !u
            }),
            l &&
                a &&
                (0, r.jsx)(j, {
                    guildId: t,
                    powerup: o
                })
        ]
    });
}
