t.d(n, {
    Nn: () => b,
    ZP: () => N,
    ms: () => h
});
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(481060),
    l = t(762762),
    c = t(690786),
    d = t(827397),
    u = t(279604),
    p = t(535396),
    m = t(696672),
    x = t(388032),
    _ = t(556059);
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
function g(e, n) {
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
            : (0, r.jsx)(a.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        s = x.NW.string(t ? m.Z.TZsu1d : m.Z.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && s,
            !o &&
                (0, r.jsx)('span', {
                    className: _.dot,
                    children: '\u2022'
                }),
            i,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function h(e) {
    var { guildId: n, powerup: t, onClick: o } = e,
        i = g(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, d.Z)(n, t),
        { onShowMore: l } = (0, u.ZP)(n, t),
        c = p.uc.has(t.skuId);
    return (0, r.jsx)(
        a.zxk,
        f(
            v(
                {
                    className: _.primaryButton,
                    innerClassName: _.buttonInner,
                    wrapperClassName: _.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), c ? null == s || s(e) : null == l || l();
                    }
                },
                i
            ),
            { children: c ? x.NW.string(m.Z['g5Ds6+']) : x.NW.string(x.t['OBCR+v']) }
        )
    );
}
function b(e) {
    var { guildId: n, powerup: t, compact: i, onError: d } = e,
        p = g(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: h, isLoading: b, error: N, onShowDeactivate: Z } = (0, u.ZP)(n, t),
        C = null != (0, c.Z)(n, t),
        { disabled: E, reason: I } = (0, l.Z)(n, t, C);
    return (
        o.useEffect(() => {
            null == d || d(N);
        }, [N, d]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != I ? I : C ? x.NW.string(m.Z.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : C
                      ? (0, r.jsxs)('div', {
                            className: _.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: x.NW.string(m.Z.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: x.NW.formatToPlainString(m.Z['5HQUzM'], { boostCount: t.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zxk,
                    f(
                        v(
                            f(v({}, e), {
                                className: _.secondaryButton,
                                innerClassName: _.buttonInner,
                                wrapperClassName: s()(_.secondaryButton, { [_.buttonWrapper]: !0 === p.grow }),
                                color: C ? a.Ttl.PRIMARY : a.Ttl.BRAND,
                                'aria-label': x.NW.string(C ? m.Z.TZsu1d : m.Z.gSxlHR),
                                disabled: E,
                                onClick: C ? Z : h,
                                submitting: b
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(j, {
                                powerup: t,
                                isActive: C,
                                compact: i
                            })
                        }
                    )
                )
        })
    );
}
function N(e) {
    let { className: n, guildId: t, powerup: o, onError: i } = e,
        a = null != (0, c.Z)(t, o),
        l = !a;
    return (0, r.jsxs)('div', {
        className: s()(_.container, n),
        children: [
            (0, r.jsx)(b, {
                guildId: t,
                powerup: o,
                onError: i,
                grow: l,
                compact: !l
            }),
            a &&
                (0, r.jsx)(h, {
                    guildId: t,
                    powerup: o
                })
        ]
    });
}
