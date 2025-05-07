n.d(t, {
    Nn: () => v,
    ZP: () => x,
    ms: () => g
});
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    c = n(762762),
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
function _(e, t) {
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
function I(e) {
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
        i = b.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && i,
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
function g(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        a = _(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, u.Z)(t, n),
        { onShowMore: c } = (0, d.ZP)(t, n),
        l = p.uc.has(n.skuId);
    return (0, r.jsx)(
        s.zxk,
        j(
            O(
                {
                    className: m.primaryButton,
                    innerClassName: m.buttonInner,
                    wrapperClassName: m.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), l ? null == i || i(e) : null == c || c();
                    }
                },
                a
            ),
            { children: l ? b.intl.string(f.default['g5Ds6+']) : b.intl.string(b.t['OBCR+v']) }
        )
    );
}
function v(e) {
    var { guildId: t, powerup: n, compact: a, onError: u } = e,
        p = _(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: g, isLoading: v, error: x, onShowDeactivate: y } = (0, d.ZP)(t, n),
        k = null != (0, l.Z)(t, n),
        { disabled: h, reason: E } = (0, c.Z)(t, n, k);
    return (
        o.useEffect(() => {
            null == u || u(x);
        }, [x, u]),
        (0, r.jsx)(s.ua7, {
            delay: 100,
            'aria-label': null != E ? E : k ? b.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != E
                    ? E
                    : k
                      ? (0, r.jsxs)('div', {
                            className: m.tooltipContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/semibold',
                                    children: b.intl.string(f.default.TZsu1d)
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    children: b.intl.formatToPlainString(f.default['5HQUzM'], { boostCount: n.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    j(
                        O(
                            j(O({}, e), {
                                className: m.secondaryButton,
                                innerClassName: m.buttonInner,
                                wrapperClassName: i()(m.secondaryButton, { [m.buttonWrapper]: !0 === p.grow }),
                                color: k ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                                'aria-label': b.intl.string(k ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: h,
                                onClick: k ? y : g,
                                submitting: v
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(I, {
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
function x(e) {
    let { className: t, guildId: n, powerup: o, onError: a } = e,
        s = null != (0, l.Z)(n, o),
        c = !s;
    return (0, r.jsxs)('div', {
        className: i()(m.container, t),
        children: [
            (0, r.jsx)(v, {
                guildId: n,
                powerup: o,
                onError: a,
                grow: c,
                compact: !c
            }),
            s &&
                (0, r.jsx)(g, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
