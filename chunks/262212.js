n.d(t, {
    Nn: () => P,
    ZP: () => I,
    ms: () => O
});
var r = n(255367),
    s = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(755721),
    i = n(481060),
    c = n(762762),
    d = n(10765),
    u = n(639777),
    p = n(973772),
    m = n(827397),
    f = n(279604),
    g = n(535396),
    b = n(93841),
    _ = n(388032),
    h = n(503945);
function x() {
    return (x =
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
function v(e, t) {
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
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
}
function y(e) {
    let { powerup: t, isActive: n, compact: s } = e,
        o = n
            ? (0, r.jsx)(i.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(i.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        l = _.intl.string(n ? b.default.TZsu1d : b.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !s && l,
            !s &&
                (0, r.jsx)('span', {
                    className: h.dot,
                    children: '\u2022'
                }),
            o,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function k(e) {
    let { guildId: t, powerup: n } = e,
        s = (0, p.Z)(t, n);
    if (s.type === g.A3.LEVEL_ACTIVATED) {
        var o, l;
        return (0, r.jsxs)('div', {
            className: h.tooltipContainer,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    children: _.intl.string(b.default['9oYuvb'])
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/medium',
                    children: _.intl.formatToPlainString(b.default.WRRYUV, { perkName: null != (l = null == (o = s.sourcePowerup) ? void 0 : o.title) ? l : _.intl.string(_.t.BfF6EB) })
                })
            ]
        });
    }
    if (s.type === g.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)('div', {
            className: h.tooltipContainer,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    children: _.intl.string(b.default.TZsu1d)
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/medium',
                    children: _.intl.formatToPlainString(b.default['5HQUzM'], { boostCount: n.cost })
                })
            ]
        });
}
function O(e) {
    var { guildId: t, powerup: n, onClick: s } = e,
        o = C(e, ['guildId', 'powerup', 'onClick']);
    let l = (0, m.Z)(t, n),
        { onShowMore: i } = (0, f.ZP)(t, n),
        c = g.uc.has(n.skuId);
    return (0, r.jsx)(
        a.zx,
        v(
            j(
                {
                    className: h.primaryButton,
                    innerClassName: h.buttonInner,
                    wrapperClassName: h.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == s || s(e), c ? null == l || l(e) : null == i || i());
                    }
                },
                o
            ),
            { children: c ? _.intl.string(b.default['g5Ds6+']) : _.intl.string(_.t['0Q61kJ']) }
        )
    );
}
function P(e) {
    var { guildId: t, powerup: n, compact: o, onError: d } = e,
        u = C(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: m, isLoading: x, error: O, onShowDeactivate: P } = (0, f.ZP)(t, n),
        w = (0, p.Z)(t, n).type !== g.A3.INACTIVE,
        { disabled: S, reason: I } = (0, c.Z)(t, n, w);
    return (
        s.useEffect(() => {
            null == d || d(O);
        }, [O, d]),
        (0, r.jsx)(i.ua7, {
            delay: 100,
            'aria-label': null != I ? I : w ? _.intl.string(b.default.TZsu1d) : void 0,
            text:
                null != I
                    ? I
                    : w
                      ? (0, r.jsx)(k, {
                            guildId: t,
                            powerup: n
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zx,
                    v(
                        j(
                            v(j({}, e), {
                                className: h.secondaryButton,
                                innerClassName: h.buttonInner,
                                wrapperClassName: l()(h.secondaryButton, { [h.buttonWrapper]: !0 === u.grow }),
                                color: w ? a.Tt.PRIMARY : a.Tt.BRAND,
                                'aria-label': _.intl.string(w ? b.default.TZsu1d : b.default.gSxlHR),
                                disabled: S,
                                onClick: w ? P : m,
                                submitting: x
                            }),
                            u
                        ),
                        {
                            children: (0, r.jsx)(y, {
                                powerup: n,
                                isActive: w,
                                compact: o
                            })
                        }
                    )
                )
        })
    );
}
function w(e) {
    let { className: t, guildId: n, powerup: s } = e,
        { onShowMore: o } = (0, f.ZP)(n, s);
    return (0, r.jsx)('div', {
        className: l()(h.container, t),
        children: (0, r.jsx)(a.zx, {
            className: h.primaryButton,
            innerClassName: h.buttonInner,
            wrapperClassName: h.buttonWrapper,
            grow: !0,
            onClick: o,
            children: s.type === g.Us.LEVEL ? _.intl.string(_.t['0Q61kJ']) : _.intl.string(_.t.Xa11Eh)
        })
    });
}
function S(e) {
    let { className: t, guildId: n, powerup: s, onError: o } = e,
        a = (0, p.Z)(n, s).type !== g.A3.INACTIVE,
        i = (0, d.Z)(n, s, 'GuildPowerupCardFooterAdmin'),
        c = a || !i,
        u = !a;
    return (0, r.jsxs)('div', {
        className: l()(h.container, t),
        children: [
            c &&
                (0, r.jsx)(P, {
                    guildId: n,
                    powerup: s,
                    onError: o,
                    grow: u,
                    compact: !u
                }),
            a &&
                (0, r.jsx)(O, {
                    guildId: n,
                    powerup: s
                })
        ]
    });
}
function I(e) {
    var t = x(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, u.Z)(t.guildId) ? (0, r.jsx)(S, j({}, t)) : (0, r.jsx)(w, j({}, t));
}
