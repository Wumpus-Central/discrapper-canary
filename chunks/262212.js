r.d(t, {
    Nn: () => k,
    ZP: () => S,
    ms: () => O
});
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    s = r(755721),
    l = r(481060),
    c = r(762762),
    d = r(639777),
    u = r(973772),
    p = r(827397),
    m = r(279604),
    f = r(535396),
    _ = r(93841),
    g = r(388032),
    b = r(503945);
function j() {
    return (j =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function C(e, t) {
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
function v(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
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
        i = g.intl.string(r ? _.default.TZsu1d : _.default.gSxlHR);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !o && i,
            !o &&
                (0, n.jsx)('span', {
                    className: b.dot,
                    children: '\u2022'
                }),
            a,
            (0, n.jsx)('span', { children: t.cost })
        ]
    });
}
function h(e) {
    let { guildId: t, powerup: r } = e,
        o = (0, u.Z)(t, r);
    if (o.type === f.A3.LEVEL_ACTIVATED) {
        var a, i;
        return (0, n.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: g.intl.string(_.default['9oYuvb'])
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: g.intl.formatToPlainString(_.default.WRRYUV, { perkName: null != (i = null == (a = o.sourcePowerup) ? void 0 : a.title) ? i : g.intl.string(g.t.BfF6EB) })
                })
            ]
        });
    }
    if (o.type === f.A3.POWERUP_ACTIVATED)
        return (0, n.jsxs)('div', {
            className: b.tooltipContainer,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    children: g.intl.string(_.default.TZsu1d)
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    children: g.intl.formatToPlainString(_.default['5HQUzM'], { boostCount: r.cost })
                })
            ]
        });
}
function O(e) {
    var { guildId: t, powerup: r, onClick: o } = e,
        a = v(e, ['guildId', 'powerup', 'onClick']);
    let i = (0, p.Z)(t, r),
        { onShowMore: l } = (0, m.ZP)(t, r),
        c = f.uc.has(r.skuId);
    return (0, n.jsx)(
        s.zx,
        C(
            x(
                {
                    className: b.primaryButton,
                    innerClassName: b.buttonInner,
                    wrapperClassName: b.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == o || o(e), c ? null == i || i(e) : null == l || l());
                    }
                },
                a
            ),
            { children: c ? g.intl.string(_.default['g5Ds6+']) : g.intl.string(g.t['0Q61kJ']) }
        )
    );
}
function k(e) {
    var { guildId: t, powerup: r, compact: a, onError: d } = e,
        p = v(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: j, isLoading: O, error: k, onShowDeactivate: P } = (0, m.ZP)(t, r),
        w = (0, u.Z)(t, r).type !== f.A3.INACTIVE,
        { disabled: S, reason: E } = (0, c.Z)(t, r, w);
    return (
        o.useEffect(() => {
            null == d || d(k);
        }, [k, d]),
        (0, n.jsx)(l.ua7, {
            delay: 100,
            'aria-label': null != E ? E : w ? g.intl.string(_.default.TZsu1d) : void 0,
            text:
                null != E
                    ? E
                    : w
                      ? (0, n.jsx)(h, {
                            guildId: t,
                            powerup: r
                        })
                      : void 0,
            children: (e) =>
                (0, n.jsx)(
                    s.zx,
                    C(
                        x(
                            C(x({}, e), {
                                className: b.secondaryButton,
                                innerClassName: b.buttonInner,
                                wrapperClassName: i()(b.secondaryButton, { [b.buttonWrapper]: !0 === p.grow }),
                                color: w ? s.Tt.PRIMARY : s.Tt.BRAND,
                                'aria-label': g.intl.string(w ? _.default.TZsu1d : _.default.gSxlHR),
                                disabled: S,
                                onClick: w ? P : j,
                                submitting: O
                            }),
                            p
                        ),
                        {
                            children: (0, n.jsx)(y, {
                                powerup: r,
                                isActive: w,
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function P(e) {
    let { className: t, guildId: r, powerup: o } = e,
        { onShowMore: a } = (0, m.ZP)(r, o);
    return (0, n.jsx)('div', {
        className: i()(b.container, t),
        children: (0, n.jsx)(s.zx, {
            className: b.primaryButton,
            innerClassName: b.buttonInner,
            wrapperClassName: b.buttonWrapper,
            grow: !0,
            onClick: a,
            children: o.type === f.Us.LEVEL ? g.intl.string(g.t['0Q61kJ']) : g.intl.string(g.t.Xa11Eh)
        })
    });
}
function w(e) {
    let { className: t, guildId: r, powerup: o, onError: a } = e,
        s = (0, u.Z)(r, o).type !== f.A3.INACTIVE,
        l = !s;
    return (0, n.jsxs)('div', {
        className: i()(b.container, t),
        children: [
            (0, n.jsx)(k, {
                guildId: r,
                powerup: o,
                onError: a,
                grow: l,
                compact: !l
            }),
            s &&
                (0, n.jsx)(O, {
                    guildId: r,
                    powerup: o
                })
        ]
    });
}
function S(e) {
    var t = j(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, d.Z)(t.guildId) ? (0, n.jsx)(w, x({}, t)) : (0, n.jsx)(P, x({}, t));
}
