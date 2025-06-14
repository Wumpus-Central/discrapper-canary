r.d(t, {
    Nn: () => h,
    ZP: () => C,
    ms: () => O
});
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    l = r(481060),
    s = r(762762),
    c = r(690786),
    u = r(827397),
    d = r(279604),
    p = r(535396),
    f = r(93841),
    b = r(388032),
    g = r(503945);
function _(e) {
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
function m(e, t) {
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
function j(e, t) {
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
function y(e) {
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
        i = b.intl.string(r ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, n.jsx)('span', {
                    className: g.dot,
                    children: '\u2022'
                }),
            a,
            (0, n.jsx)('span', { children: t.cost })
        ]
    });
}
function O(e) {
    var { guildId: t, powerup: r, onClick: o } = e,
        a = j(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, u.Z)(t, r),
        { onShowMore: s } = (0, d.ZP)(t, r),
        c = p.uc.has(r.skuId);
    return (0, n.jsx)(
        l.zxk,
        m(
            _(
                {
                    className: g.primaryButton,
                    innerClassName: g.buttonInner,
                    wrapperClassName: g.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        null == o || o(e), c ? null == i || i(e) : null == s || s();
                    }
                },
                a
            ),
            { children: c ? b.intl.string(f.default['g5Ds6+']) : b.intl.string(b.t['0Q61kJ']) }
        )
    );
}
function h(e) {
    var { guildId: t, powerup: r, compact: a, onError: u } = e,
        p = j(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: O, isLoading: h, error: C, onShowDeactivate: x } = (0, d.ZP)(t, r),
        v = null != (0, c.Z)(t, r),
        { disabled: P, reason: w } = (0, s.Z)(t, r, v);
    return (
        o.useEffect(() => {
            null == u || u(C);
        }, [C, u]),
        (0, n.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != w ? w : v ? b.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : v
                      ? (0, n.jsxs)('div', {
                            className: g.tooltipContainer,
                            children: [
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/semibold',
                                    children: b.intl.string(f.default.TZsu1d)
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    children: b.intl.formatToPlainString(f.default['5HQUzM'], { boostCount: r.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, n.jsx)(
                    l.zxk,
                    m(
                        _(
                            m(_({}, e), {
                                className: g.secondaryButton,
                                innerClassName: g.buttonInner,
                                wrapperClassName: i()(g.secondaryButton, { [g.buttonWrapper]: !0 === p.grow }),
                                color: v ? l.Ttl.PRIMARY : l.Ttl.BRAND,
                                'aria-label': b.intl.string(v ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: P,
                                onClick: v ? x : O,
                                submitting: h
                            }),
                            p
                        ),
                        {
                            children: (0, n.jsx)(y, {
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
function C(e) {
    let { className: t, guildId: r, powerup: o, onError: a } = e,
        l = null != (0, c.Z)(r, o),
        s = !l;
    return (0, n.jsxs)('div', {
        className: i()(g.container, t),
        children: [
            (0, n.jsx)(h, {
                guildId: r,
                powerup: o,
                onError: a,
                grow: s,
                compact: !s
            }),
            l &&
                (0, n.jsx)(O, {
                    guildId: r,
                    powerup: o
                })
        ]
    });
}
