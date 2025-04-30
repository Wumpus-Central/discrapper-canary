t.d(n, {
    Nn: () => h,
    ZP: () => C,
    ms: () => b
});
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(481060),
    l = t(762762),
    c = t(690786),
    u = t(827397),
    d = t(279604),
    p = t(535396),
    m = t(680278),
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
function j(e) {
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
        s = x.intl.string(t ? m.default.TZsu1d : m.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && s,
            !i &&
                (0, r.jsx)('span', {
                    className: _.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function b(e) {
    var { guildId: n, powerup: t, onClick: i } = e,
        o = g(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, u.Z)(n, t),
        { onShowMore: l } = (0, d.ZP)(n, t),
        c = p.uc.has(t.skuId);
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
                        null == i || i(e), c ? null == s || s(e) : null == l || l();
                    }
                },
                o
            ),
            { children: c ? x.intl.string(m.default['g5Ds6+']) : x.intl.string(x.t['OBCR+v']) }
        )
    );
}
function h(e) {
    var { guildId: n, powerup: t, compact: o, onError: u } = e,
        p = g(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: b, isLoading: h, error: C, onShowDeactivate: N } = (0, d.ZP)(n, t),
        Z = null != (0, c.Z)(n, t),
        { disabled: E, reason: I } = (0, l.Z)(n, t, Z);
    return (
        i.useEffect(() => {
            null == u || u(C);
        }, [C, u]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != I ? I : Z ? x.intl.string(m.default.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : Z
                      ? (0, r.jsxs)('div', {
                            className: _.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: x.intl.string(m.default.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: x.intl.formatToPlainString(m.default['5HQUzM'], { boostCount: t.cost })
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
                                wrapperClassName: s()(_.secondaryButton, { [_.buttonWrapper]: !0 === p.grow }),
                                color: Z ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': x.intl.string(Z ? m.default.TZsu1d : m.default.gSxlHR),
                                disabled: E,
                                onClick: Z ? N : b,
                                submitting: h
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(j, {
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
function C(e) {
    let { className: n, guildId: t, powerup: i, onError: o } = e,
        a = null != (0, c.Z)(t, i),
        l = !a;
    return (0, r.jsxs)('div', {
        className: s()(_.container, n),
        children: [
            (0, r.jsx)(h, {
                guildId: t,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            a &&
                (0, r.jsx)(b, {
                    guildId: t,
                    powerup: i
                })
        ]
    });
}
