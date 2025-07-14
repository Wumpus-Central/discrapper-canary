t.d(n, {
    Nn: () => I,
    ZP: () => S,
    ms: () => O
});
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(755721),
    l = t(481060),
    c = t(762762),
    u = t(975951),
    d = t(639777),
    m = t(322043),
    p = t(717259),
    _ = t(827397),
    f = t(279604),
    x = t(535396),
    v = t(93841),
    b = t(388032),
    g = t(503945);
function h() {
    return (h =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
function j(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                ((r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r));
            }));
    }
    return e;
}
function C(e, n) {
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
function E(e, n) {
    if (null == e) return {};
    var t,
        r,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((t = o[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
}
function Z(e) {
    let { powerup: n, isActive: t, compact: i } = e,
        o = t
            ? (0, r.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        a = b.intl.string(t ? v.default.TZsu1d : v.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && a,
            !i &&
                (0, r.jsx)('span', {
                    className: g.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: n.cost })
        ]
    });
}
function N(e) {
    let { guildId: n, powerup: t } = e,
        { activatedEntitlement: i, activatedLevelPowerup: o } = (0, u.Z)(n, t);
    if ((0, p.Z)(n, t)) {
        var a;
        return (0, r.jsxs)('div', {
            className: g.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: b.intl.string(v.default['9oYuvb'])
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: b.intl.formatToPlainString(v.default.WRRYUV, { perkName: null != (a = null == o ? void 0 : o.title) ? a : b.intl.string(b.t.BfF6EB) })
                })
            ]
        });
    }
    if (null != i)
        return (0, r.jsxs)('div', {
            className: g.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: b.intl.string(v.default.TZsu1d)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: b.intl.formatToPlainString(v.default['5HQUzM'], { boostCount: t.cost })
                })
            ]
        });
}
function O(e) {
    var { guildId: n, powerup: t, onClick: i } = e,
        o = E(e, ['guildId', 'powerup', 'onClick']);
    let a = (0, _.Z)(n, t),
        { onShowMore: l } = (0, f.ZP)(n, t),
        c = x.uc.has(t.skuId);
    return (0, r.jsx)(
        s.zx,
        C(
            j(
                {
                    className: g.primaryButton,
                    innerClassName: g.buttonInner,
                    wrapperClassName: g.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == i || i(e), c ? null == a || a(e) : null == l || l());
                    }
                },
                o
            ),
            { children: c ? b.intl.string(v.default['g5Ds6+']) : b.intl.string(b.t['0Q61kJ']) }
        )
    );
}
function I(e) {
    var { guildId: n, powerup: t, compact: o, onError: u } = e,
        d = E(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: p, isLoading: _, error: x, onShowDeactivate: h } = (0, f.ZP)(n, t),
        O = (0, m.Z)(n, t),
        { disabled: I, reason: P } = (0, c.Z)(n, t, O);
    return (
        i.useEffect(() => {
            null == u || u(x);
        }, [x, u]),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != P ? P : O ? b.intl.string(v.default.TZsu1d) : void 0,
            text:
                null != P
                    ? P
                    : O
                      ? (0, r.jsx)(N, {
                            guildId: n,
                            powerup: t
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    C(
                        j(
                            C(j({}, e), {
                                className: g.secondaryButton,
                                innerClassName: g.buttonInner,
                                wrapperClassName: a()(g.secondaryButton, { [g.buttonWrapper]: !0 === d.grow }),
                                color: O ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': b.intl.string(O ? v.default.TZsu1d : v.default.gSxlHR),
                                disabled: I,
                                onClick: O ? h : p,
                                submitting: _
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(Z, {
                                powerup: t,
                                isActive: O,
                                compact: o
                            })
                        }
                    )
                )
        })
    );
}
function P(e) {
    let { className: n, guildId: t, powerup: i } = e,
        { onShowMore: o } = (0, f.ZP)(t, i);
    return (0, r.jsx)('div', {
        className: a()(g.container, n),
        children: (0, r.jsx)(s.zx, {
            className: g.primaryButton,
            innerClassName: g.buttonInner,
            wrapperClassName: g.buttonWrapper,
            grow: !0,
            onClick: o,
            children: i.type === x.Us.LEVEL ? b.intl.string(b.t['0Q61kJ']) : b.intl.string(b.t.Xa11Eh)
        })
    });
}
function w(e) {
    let { className: n, guildId: t, powerup: i, onError: o } = e,
        s = (0, m.Z)(t, i),
        l = !s;
    return (0, r.jsxs)('div', {
        className: a()(g.container, n),
        children: [
            (0, r.jsx)(I, {
                guildId: t,
                powerup: i,
                onError: o,
                grow: l,
                compact: !l
            }),
            s &&
                (0, r.jsx)(O, {
                    guildId: t,
                    powerup: i
                })
        ]
    });
}
function S(e) {
    var n = h(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(n.guildId) ? (0, r.jsx)(w, j({}, n)) : (0, r.jsx)(P, j({}, n));
}
