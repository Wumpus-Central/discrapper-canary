n.d(t, {
    Nn: () => O,
    ZP: () => w,
    ms: () => N
});
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    c = n(762762),
    u = n(10765),
    d = n(639777),
    p = n(973772),
    m = n(827397),
    f = n(279604),
    _ = n(535396),
    x = n(93841),
    v = n(388032),
    b = n(503945);
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
function j(e) {
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
function E(e, t) {
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
function h(e, t) {
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
function C(e) {
    let { powerup: t, isActive: n, compact: o } = e,
        i = n
            ? (0, r.jsx)(a.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(a.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        l = v.intl.string(n ? x.default.TZsu1d : x.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && l,
            !o &&
                (0, r.jsx)('span', {
                    className: b.dot,
                    children: '\u2022'
                }),
            i,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function I(e) {
    let { guildId: t, powerup: n } = e,
        o = (0, p.Z)(t, n);
    if (o.type === _.A3.LEVEL_ACTIVATED) {
        var i, l;
        return (0, r.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/semibold',
                    children: v.intl.string(x.default['9oYuvb'])
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    children: v.intl.formatToPlainString(x.default.WRRYUV, { perkName: null != (l = null == (i = o.sourcePowerup) ? void 0 : i.title) ? l : v.intl.string(v.t.BfF6EB) })
                })
            ]
        });
    }
    if (o.type === _.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/semibold',
                    children: v.intl.string(x.default.TZsu1d)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    children: v.intl.formatToPlainString(x.default['5HQUzM'], { boostCount: n.cost })
                })
            ]
        });
}
function N(e) {
    var { guildId: t, powerup: n, onClick: o } = e,
        i = h(e, ['guildId', 'powerup', 'onClick']);
    let l = (0, m.Z)(t, n),
        { onShowMore: a } = (0, f.ZP)(t, n),
        c = _.uc.has(n.skuId);
    return (0, r.jsx)(
        s.zx,
        E(
            j(
                {
                    className: b.primaryButton,
                    innerClassName: b.buttonInner,
                    wrapperClassName: b.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == o || o(e), c ? null == l || l(e) : null == a || a());
                    }
                },
                i
            ),
            { children: c ? v.intl.string(x.default['g5Ds6+']) : v.intl.string(v.t['0Q61kJ']) }
        )
    );
}
function O(e) {
    var { guildId: t, powerup: n, compact: i, onError: u } = e,
        d = h(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: m, isLoading: g, error: N, onShowDeactivate: O } = (0, f.ZP)(t, n),
        P = (0, p.Z)(t, n).type !== _.A3.INACTIVE,
        { disabled: Z, reason: w } = (0, c.Z)(t, n, P);
    return (
        o.useEffect(() => {
            null == u || u(N);
        }, [N, u]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            'aria-label': null != w ? w : P ? v.intl.string(x.default.TZsu1d) : void 0,
            text:
                null != w
                    ? w
                    : P
                      ? (0, r.jsx)(I, {
                            guildId: t,
                            powerup: n
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    E(
                        j(
                            E(j({}, e), {
                                className: b.secondaryButton,
                                innerClassName: b.buttonInner,
                                wrapperClassName: l()(b.secondaryButton, { [b.buttonWrapper]: !0 === d.grow }),
                                color: P ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': v.intl.string(P ? x.default.TZsu1d : x.default.gSxlHR),
                                disabled: Z,
                                onClick: P ? O : m,
                                submitting: g
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(C, {
                                powerup: n,
                                isActive: P,
                                compact: i
                            })
                        }
                    )
                )
        })
    );
}
function P(e) {
    let { className: t, guildId: n, powerup: o } = e,
        { onShowMore: i } = (0, f.ZP)(n, o);
    return (0, r.jsx)('div', {
        className: l()(b.container, t),
        children: (0, r.jsx)(s.zx, {
            className: b.primaryButton,
            innerClassName: b.buttonInner,
            wrapperClassName: b.buttonWrapper,
            grow: !0,
            onClick: i,
            children: o.type === _.Us.LEVEL ? v.intl.string(v.t['0Q61kJ']) : v.intl.string(v.t.Xa11Eh)
        })
    });
}
function Z(e) {
    let { className: t, guildId: n, powerup: o, onError: i } = e,
        s = (0, p.Z)(n, o).type !== _.A3.INACTIVE,
        a = (0, u.Z)(n, o, 'GuildPowerupCardFooterAdmin'),
        c = s || !a,
        d = !s;
    return (0, r.jsxs)('div', {
        className: l()(b.container, t),
        children: [
            c &&
                (0, r.jsx)(O, {
                    guildId: n,
                    powerup: o,
                    onError: i,
                    grow: d,
                    compact: !d
                }),
            s &&
                (0, r.jsx)(N, {
                    guildId: n,
                    powerup: o
                })
        ]
    });
}
function w(e) {
    var t = g(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(t.guildId) ? (0, r.jsx)(Z, j({}, t)) : (0, r.jsx)(P, j({}, t));
}
