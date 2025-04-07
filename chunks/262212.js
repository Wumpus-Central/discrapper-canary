t.d(n, {
    Nn: () => Z,
    ZP: () => C,
    ms: () => h
});
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(481060),
    l = t(413335),
    c = t(762762),
    d = t(690786),
    u = t(827397),
    m = t(279604),
    p = t(535396),
    x = t(680278),
    _ = t(388032),
    v = t(503945);
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
function f(e, n) {
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
        o = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
    }
    return o;
}
function j(e) {
    let { powerup: n, isActive: t, compact: o } = e,
        i = t
            ? (0, r.jsx)(a.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.Z, {
                  size: 'sm',
                  className: v.boost,
                  color: 'currentColor'
              }),
        s = _.NW.string(t ? x.Z.TZsu1d : x.Z.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && s,
            !o &&
                (0, r.jsx)('span', {
                    className: v.dot,
                    children: '\u2022'
                }),
            i,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function h(e) {
    var { guildId: n, powerup: t, onClick: o } = e,
        i = b(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, u.Z)(n, t);
    return (0, r.jsx)(
        a.zxk,
        f(
            g(
                {
                    className: v.primaryButton,
                    innerClassName: v.buttonInner,
                    wrapperClassName: v.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), null == s || s(e);
                    }
                },
                i
            ),
            { children: _.NW.string(x.Z['g5Ds6+']) }
        )
    );
}
function Z(e) {
    var { guildId: n, powerup: t, compact: i, onError: l } = e,
        u = b(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: p, isLoading: h, error: Z, onShowDeactivate: C } = (0, m.ZP)(n, t),
        N = null != (0, d.Z)(n, t),
        { disabled: I, reason: w } = (0, c.Z)(n, t, N);
    return (
        o.useEffect(() => {
            null == l || l(Z);
        }, [Z, l]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != w ? w : N ? _.NW.string(x.Z.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : N
                      ? (0, r.jsxs)('div', {
                            className: v.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: _.NW.string(x.Z.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: _.NW.formatToPlainString(x.Z['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    f(
                        g(
                            f(g({}, e), {
                                className: v.secondaryButton,
                                innerClassName: s()(v.buttonInner, v.secondaryButtonInner),
                                wrapperClassName: s()({ [v.buttonWrapper]: !0 === u.grow }),
                                color: N ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': _.NW.string(N ? x.Z.TZsu1d : x.Z.gSxlHR),
                                disabled: I,
                                onClick: N ? C : p,
                                submitting: h
                            }),
                            u
                        ),
                        {
                            children: (0, r.jsx)(j, {
                                powerup: t,
                                isActive: N,
                                compact: i
                            })
                        }
                    )
                )
        })
    );
}
function C(e) {
    let { className: n, guildId: t, powerup: o, onError: i } = e,
        a = null != (0, d.Z)(t, o),
        l = p.uc.has(o.skuId),
        c = !a || !l;
    return (0, r.jsxs)('div', {
        className: s()(v.container, n),
        children: [
            (0, r.jsx)(Z, {
                guildId: t,
                powerup: o,
                onError: i,
                grow: c,
                compact: !c
            }),
            l &&
                a &&
                (0, r.jsx)(h, {
                    guildId: t,
                    powerup: o
                })
        ]
    });
}
