n.d(t, {
    Nn: () => N,
    ZP: () => P,
    ms: () => I
});
var r = n(255367),
    o = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(755721),
    l = n(481060),
    c = n(762762),
    u = n(639777),
    d = n(973772),
    p = n(827397),
    m = n(279604),
    f = n(535396),
    _ = n(93841),
    x = n(388032),
    v = n(503945);
function g() {
    return (g =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function b(e) {
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
}
function h(e) {
    let { powerup: t, isActive: n, compact: o } = e,
        i = n
            ? (0, r.jsx)(l.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        s = x.intl.string(n ? _.default.TZsu1d : _.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && s,
            !o &&
                (0, r.jsx)('span', {
                    className: v.dot,
                    children: '\u2022'
                }),
            i,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function C(e) {
    let { guildId: t, powerup: n } = e,
        o = (0, d.Z)(t, n);
    if (o.type === f.A3.LEVEL_ACTIVATED) {
        var i, s;
        return (0, r.jsxs)('div', {
            className: v.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: x.intl.string(_.default['9oYuvb'])
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: x.intl.formatToPlainString(_.default.WRRYUV, { perkName: null != (s = null == (i = o.sourcePowerup) ? void 0 : i.title) ? s : x.intl.string(x.t.BfF6EB) })
                })
            ]
        });
    }
    if (o.type === f.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)('div', {
            className: v.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: x.intl.string(_.default.TZsu1d)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: x.intl.formatToPlainString(_.default['5HQUzM'], { boostCount: n.cost })
                })
            ]
        });
}
function I(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        i = E(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, p.Z)(t, n),
        { onShowMore: l } = (0, m.ZP)(t, n),
        c = f.uc.has(n.skuId);
    return (0, r.jsx)(
        a.zx,
        j(
            b(
                {
                    className: v.primaryButton,
                    innerClassName: v.buttonInner,
                    wrapperClassName: v.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == o || o(e), c ? null == s || s(e) : null == l || l());
                    }
                },
                i
            ),
            { children: c ? x.intl.string(_.default['g5Ds6+']) : x.intl.string(x.t['0Q61kJ']) }
        )
    );
}
function N(e) {
    var { guildId: t, powerup: n, compact: i, onError: u } = e,
        p = E(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: g, isLoading: I, error: N, onShowDeactivate: Z } = (0, m.ZP)(t, n),
        O = (0, d.Z)(t, n).type !== f.A3.INACTIVE,
        { disabled: P, reason: w } = (0, c.Z)(t, n, O);
    return (
        o.useEffect(() => {
            null == u || u(N);
        }, [N, u]),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != w ? w : O ? x.intl.string(_.default.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : O
                      ? (0, r.jsx)(C, {
                            guildId: t,
                            powerup: n
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zx,
                    j(
                        b(
                            j(b({}, e), {
                                className: v.secondaryButton,
                                innerClassName: v.buttonInner,
                                wrapperClassName: s()(v.secondaryButton, { [v.buttonWrapper]: !0 === p.grow }),
                                color: O ? a.Tt.PRIMARY : a.Tt.BRAND,
                                'aria-label': x.intl.string(O ? _.default.TZsu1d : _.default.gSxlHR),
                                disabled: P,
                                onClick: O ? Z : g,
                                submitting: I
                            }),
                            p
                        ),
                        {
                            children: (0, r.jsx)(h, {
                                powerup: n,
                                isActive: O,
                                compact: i
                            })
                        }
                    )
                )
        })
    );
}
function Z(e) {
    let { className: t, guildId: n, powerup: o } = e,
        { onShowMore: i } = (0, m.ZP)(n, o);
    return (0, r.jsx)('div', {
        className: s()(v.container, t),
        children: (0, r.jsx)(a.zx, {
            className: v.primaryButton,
            innerClassName: v.buttonInner,
            wrapperClassName: v.buttonWrapper,
            grow: !0,
            onClick: i,
            children: o.type === f.Us.LEVEL ? x.intl.string(x.t['0Q61kJ']) : x.intl.string(x.t.Xa11Eh)
        })
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: o, onError: i } = e,
        a = (0, d.Z)(n, o).type !== f.A3.INACTIVE,
        l = !a;
    return (0, r.jsxs)('div', {
        className: s()(v.container, t),
        children: [
            (0, r.jsx)(N, {
                guildId: n,
                powerup: o,
                onError: i,
                grow: l,
                compact: !l
            }),
            a &&
                (0, r.jsx)(I, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
function P(e) {
    var t = g(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, u.Z)(t.guildId) ? (0, r.jsx)(O, b({}, t)) : (0, r.jsx)(Z, b({}, t));
}
