n.d(t, {
    Nn: () => k,
    ZP: () => N,
    ms: () => C
});
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(762762),
    u = n(10765),
    d = n(639777),
    p = n(973772),
    f = n(827397),
    b = n(279604),
    m = n(535396),
    O = n(93841),
    j = n(388032),
    I = n(503945);
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
}
function y(e) {
    let { powerup: t, isActive: n, compact: o } = e,
        a = n
            ? (0, r.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        i = j.intl.string(n ? O.default.TZsu1d : O.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, r.jsx)('span', {
                    className: I.dot,
                    children: '\u2022'
                }),
            a,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function E(e) {
    let { guildId: t, powerup: n } = e,
        o = (0, p.Z)(t, n);
    if (o.type === m.A3.LEVEL_ACTIVATED) {
        var a, i;
        return (0, r.jsxs)('div', {
            className: I.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: j.intl.string(O.default['9oYuvb'])
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: j.intl.formatToPlainString(O.default.WRRYUV, { perkName: null != (i = null == (a = o.sourcePowerup) ? void 0 : a.title) ? i : j.intl.string(j.t.BfF6EB) })
                })
            ]
        });
    }
    if (o.type === m.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)('div', {
            className: I.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: j.intl.string(O.default.TZsu1d)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: j.intl.formatToPlainString(O.default['5HQUzM'], { boostCount: n.cost })
                })
            ]
        });
}
function C(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        a = v(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, f.Z)(t, n),
        { onShowMore: l } = (0, b.ZP)(t, n),
        c = m.uc.has(n.skuId);
    return (0, r.jsx)(
        s.zx,
        x(
            g(
                {
                    className: I.primaryButton,
                    innerClassName: I.buttonInner,
                    wrapperClassName: I.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == o || o(e), c ? null == i || i(e) : null == l || l());
                    }
                },
                a
            ),
            { children: c ? j.intl.string(O.default['g5Ds6+']) : j.intl.string(j.t['0Q61kJ']) }
        )
    );
}
function k(e) {
    var { guildId: t, powerup: n, compact: a, onError: u } = e,
        d = v(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: f, isLoading: _, error: C, onShowDeactivate: k } = (0, b.ZP)(t, n),
        h = (0, p.Z)(t, n).type !== m.A3.INACTIVE,
        { disabled: P, reason: N } = (0, c.Z)(t, n, h);
    return (
        o.useEffect(() => {
            null == u || u(C);
        }, [C, u]),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != N ? N : h ? j.intl.string(O.default.TZsu1d) : void 0,
            text:
                null != N
                    ? N
                    : h
                      ? (0, r.jsx)(E, {
                            guildId: t,
                            powerup: n
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    x(
                        g(
                            x(g({}, e), {
                                className: I.secondaryButton,
                                innerClassName: I.buttonInner,
                                wrapperClassName: i()(I.secondaryButton, { [I.buttonWrapper]: !0 === d.grow }),
                                color: h ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': j.intl.string(h ? O.default.TZsu1d : O.default.gSxlHR),
                                disabled: P,
                                onClick: h ? k : f,
                                submitting: _
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(y, {
                                powerup: n,
                                isActive: h,
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function h(e) {
    let { className: t, guildId: n, powerup: o } = e,
        { onShowMore: a } = (0, b.ZP)(n, o);
    return (0, r.jsx)('div', {
        className: i()(I.container, t),
        children: (0, r.jsx)(s.zx, {
            className: I.primaryButton,
            innerClassName: I.buttonInner,
            wrapperClassName: I.buttonWrapper,
            grow: !0,
            onClick: a,
            children: o.type === m.Us.LEVEL ? j.intl.string(j.t['0Q61kJ']) : j.intl.string(j.t.Xa11Eh)
        })
    });
}
function P(e) {
    let { className: t, guildId: n, powerup: o, onError: a } = e,
        s = (0, p.Z)(n, o).type !== m.A3.INACTIVE,
        l = (0, u.Z)(n, o, 'GuildPowerupCardFooterAdmin'),
        c = s || !l,
        d = !s;
    return (0, r.jsxs)('div', {
        className: i()(I.container, t),
        children: [
            c &&
                (0, r.jsx)(k, {
                    guildId: n,
                    powerup: o,
                    onError: a,
                    grow: d,
                    compact: !d
                }),
            s &&
                (0, r.jsx)(C, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
function N(e) {
    var t = _(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(t.guildId) ? (0, r.jsx)(P, g({}, t)) : (0, r.jsx)(h, g({}, t));
}
