n.d(t, {
    Nn: () => P,
    ZP: () => I,
    ms: () => O
});
var r = n(255367),
    l = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(755721),
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
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
}
function y(e) {
    let { powerup: t, isActive: n, compact: l } = e,
        a = n
            ? (0, r.jsx)(i.mTd, {
                  size: 'sm',
                  color: 'currentColor'
              })
            : (0, r.jsx)(i.$Eu, {
                  size: 'sm',
                  color: 'currentColor'
              }),
        s = _.intl.string(n ? b.default.TZsu1d : b.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && s,
            !l &&
                (0, r.jsx)('span', {
                    className: h.dot,
                    children: '\u2022'
                }),
            a,
            (0, r.jsx)('span', { children: t.cost })
        ]
    });
}
function k(e) {
    let { guildId: t, powerup: n } = e,
        l = (0, p.Z)(t, n);
    if (l.type === g.A3.LEVEL_ACTIVATED) {
        var a, s;
        return (0, r.jsxs)('div', {
            className: h.tooltipContainer,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    children: _.intl.string(b.default['9oYuvb'])
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/medium',
                    children: _.intl.formatToPlainString(b.default.WRRYUV, { perkName: null != (s = null == (a = l.sourcePowerup) ? void 0 : a.title) ? s : _.intl.string(_.t.BfF6EB) })
                })
            ]
        });
    }
    if (l.type === g.A3.POWERUP_ACTIVATED)
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
    var { guildId: t, powerup: n, onClick: l } = e,
        a = C(e, ['guildId', 'powerup', 'onClick']);
    let s = (0, m.Z)(t, n),
        { onShowMore: i } = (0, f.ZP)(t, n),
        c = g.uc.has(n.skuId);
    return (0, r.jsx)(
        o.zx,
        v(
            j(
                {
                    className: h.primaryButton,
                    innerClassName: h.buttonInner,
                    wrapperClassName: h.buttonWrapper,
                    grow: !0,
                    onClick: (e) => {
                        (null == l || l(e), c ? null == s || s(e) : null == i || i());
                    }
                },
                a
            ),
            { children: c ? _.intl.string(b.default['g5Ds6+']) : _.intl.string(_.t['0Q61kJ']) }
        )
    );
}
function P(e) {
    var { guildId: t, powerup: n, compact: a, onError: d } = e,
        u = C(e, ['guildId', 'powerup', 'compact', 'onError']);
    let { onActivate: m, isLoading: x, error: O, onShowDeactivate: P } = (0, f.ZP)(t, n),
        w = (0, p.Z)(t, n).type !== g.A3.INACTIVE,
        { disabled: S, reason: I } = (0, c.Z)(t, n, w);
    return (
        l.useEffect(() => {
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
                    o.zx,
                    v(
                        j(
                            v(j({}, e), {
                                className: h.secondaryButton,
                                innerClassName: h.buttonInner,
                                wrapperClassName: s()(h.secondaryButton, { [h.buttonWrapper]: !0 === u.grow }),
                                color: w ? o.Tt.PRIMARY : o.Tt.BRAND,
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
                                compact: a
                            })
                        }
                    )
                )
        })
    );
}
function w(e) {
    let { className: t, guildId: n, powerup: l } = e,
        { onShowMore: a } = (0, f.ZP)(n, l);
    return (0, r.jsx)('div', {
        className: s()(h.container, t),
        children: (0, r.jsx)(o.zx, {
            className: h.primaryButton,
            innerClassName: h.buttonInner,
            wrapperClassName: h.buttonWrapper,
            grow: !0,
            onClick: a,
            children: l.type === g.Us.LEVEL ? _.intl.string(_.t['0Q61kJ']) : _.intl.string(_.t.Xa11Eh)
        })
    });
}
function S(e) {
    let { className: t, guildId: n, powerup: l, onError: a } = e,
        o = (0, p.Z)(n, l).type !== g.A3.INACTIVE,
        i = (0, d.Z)(n, l, 'GuildPowerupCardFooterAdmin'),
        c = o || !i,
        u = !o;
    return (0, r.jsxs)('div', {
        className: s()(h.container, t),
        children: [
            c &&
                (0, r.jsx)(P, {
                    guildId: n,
                    powerup: l,
                    onError: a,
                    grow: u,
                    compact: !u
                }),
            o &&
                (0, r.jsx)(O, {
                    guildId: n,
                    powerup: l
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
