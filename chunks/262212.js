n.d(t, {
    Nn: () => x,
    ZP: () => y,
    ms: () => v
});
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    i = n(762762),
    l = n(690786),
    u = n(827397),
    d = n(279604),
    p = n(535396),
    f = n(680278),
    b = n(388032),
    m = n(503945);
function O(e) {
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
function j(e, t) {
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
function g(e, t) {
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
            ? (0, r.jsx)(c.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(c.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        s = b.NW.string(n ? f.Z.TZsu1d : f.Z.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && s,
            !o &&
                (0, r.jsx)('span', {
                    className: m.dot,
                    children: '\u2022'
                }),
            a,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function v(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        a = g(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, u.Z)(t, n);
    return (0, r.jsx)(
        c.zxk,
        j(
            O(
                {
                    className: m.primaryButton,
                    innerClassName: m.buttonInner,
                    wrapperClassName: m.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), null == s || s(e);
                    }
                },
                a
            ),
            { children: b.NW.string(f.Z['g5Ds6+']) }
        )
    );
}
function x(e) {
    var { guildId: t, powerup: n, compact: a, onError: u } = e,
        p = g(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: v, isLoading: x, error: y, onShowDeactivate: I } = (0, d.ZP)(t, n),
        N = null != (0, l.Z)(t, n),
        { disabled: k, reason: h } = (0, i.Z)(t, n, N);
    return (
        o.useEffect(() => {
            null == u || u(y);
        }, [y, u]),
        (0, r.jsx)(c.ua7, {
            delay: 100,
            'aria-label': null != h ? h : N ? b.NW.string(f.Z.TZsu1d) : void 0,
            text:
                null != h
                    ? h
                    : N
                      ? (0, r.jsxs)('div', {
                            className: m.tooltipContainer,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    children: b.NW.string(f.Z.TZsu1d)
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    children: b.NW.formatToPlainString(f.Z['5HQUzM'], { boostCount: n.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    c.zxk,
                    j(
                        O(
                            j(O({}, e), {
                                className: m.secondaryButton,
                                innerClassName: m.buttonInner,
                                wrapperClassName: s()(m.secondaryButton, { [m.buttonWrapper]: !0 === p.grow }),
                                color: N ? c.Ttl.PRIMARY : c.Ttl.BRAND,
                                'aria-label': b.NW.string(N ? f.Z.TZsu1d : f.Z.gSxlHR),
                                disabled: k,
                                onClick: N ? I : v,
                                submitting: x
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(_, {
                                powerup: n,
                                isActive: N,
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function y(e) {
    let { className: t, guildId: n, powerup: o, onError: a } = e,
        c = null != (0, l.Z)(n, o),
        i = p.uc.has(o.skuId),
        u = !c || !i;
    return (0, r.jsxs)('div', {
        className: s()(m.container, t),
        children: [
            (0, r.jsx)(x, {
                guildId: n,
                powerup: o,
                onError: a,
                grow: u,
                compact: !u
            }),
            i &&
                c &&
                (0, r.jsx)(v, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
