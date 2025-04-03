n.d(t, {
    Nn: () => y,
    ZP: () => x
});
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    c = n(481060),
    i = n(413335),
    l = n(762762),
    u = n(690786),
    d = n(827397),
    p = n(279604),
    f = n(535396),
    b = n(680278),
    m = n(388032),
    O = n(503945);
function j(e) {
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
function _(e, t) {
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
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function I(e) {
    let { powerup: t, isActive: n, compact: o } = e,
        s = n
            ? (0, r.jsx)(c.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(i.Z, {
                  size: 'sm',
                  className: O.boost,
                  color: 'currentColor'
              }),
        a = m.NW.string(n ? b.Z.TZsu1d : b.Z.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && a,
            !o &&
                (0, r.jsx)('span', {
                    className: O.dot,
                    children: '\u2022'
                }),
            s,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function v(e) {
    var { guildId: t, powerup: n } = e,
        o = g(e, ['guildId', 'powerup']);
    let s = (0, d.Z)(t, n);
    return (0, r.jsx)(
        c.zxk,
        _(
            j(
                {
                    className: O.primaryButton,
                    innerClassName: O.buttonInner,
                    wrapperClassName: O.buttonWrapper,
                    grow: !0,
                    onClick: s
                },
                o
            ),
            { children: m.NW.string(b.Z['g5Ds6+']) }
        )
    );
}
function y(e) {
    var { guildId: t, powerup: n, compact: s, onError: i } = e,
        d = g(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: f, isLoading: v, error: y, onShowDeactivate: x } = (0, p.ZP)(t, n),
        N = null != (0, u.Z)(t, n),
        { disabled: k, reason: h } = (0, l.Z)(t, n, N);
    return (
        o.useEffect(() => {
            null == i || i(y);
        }, [y, i]),
        (0, r.jsx)(c.ua7, {
            delay: 100,
            'aria-label': null != h ? h : N ? m.NW.string(b.Z.TZsu1d) : void 0,
            text:
                null != h
                    ? h
                    : N
                      ? (0, r.jsxs)('div', {
                            className: O.tooltipContainer,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    children: m.NW.string(b.Z.TZsu1d)
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    children: m.NW.formatToPlainString(b.Z['5HQUzM'], { boostCount: n.cost })
                                })
                            ]
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    c.zxk,
                    _(
                        j(
                            _(j({}, e), {
                                className: O.secondaryButton,
                                innerClassName: a()(O.buttonInner, O.secondaryButtonInner),
                                wrapperClassName: a()({ [O.buttonWrapper]: !0 === d.grow }),
                                color: N ? c.Ttl.PRIMARY : c.Ttl.BRAND,
                                'aria-label': m.NW.string(N ? b.Z.TZsu1d : b.Z.gSxlHR),
                                disabled: k,
                                onClick: N ? x : f,
                                submitting: v
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(I, {
                                powerup: n,
                                isActive: N,
                                compact: s
                            })
                        }
                    )
                )
        })
    );
}
function x(e) {
    let { className: t, guildId: n, powerup: o, onError: s } = e,
        c = null != (0, u.Z)(n, o),
        i = f.uc.has(o.skuId),
        l = !c || !i;
    return (0, r.jsxs)('div', {
        className: a()(O.container, t),
        children: [
            (0, r.jsx)(y, {
                guildId: n,
                powerup: o,
                onError: s,
                grow: l,
                compact: !l
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
