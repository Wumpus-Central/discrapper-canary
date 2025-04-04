n.d(t, {
    Dp: () => A,
    Hh: () => C,
    ZP: () => R,
    hq: () => T
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(831209),
    l = n(442837),
    c = n(481060),
    u = n(914010),
    d = n(594174),
    f = n(36703),
    _ = n(74538),
    p = n(125900),
    h = n(824690),
    m = n(240479),
    g = n(710111),
    E = n(388032),
    b = n(367753),
    y = n(419718);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T() {
    let { volume: e, onVolumeChange: t } = (0, h.Z)();
    return (0, r.jsxs)(c.P3F, {
        className: b.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: E.NW.string(E.t['2JbvKy'])
            }),
            (0, r.jsx)(c.iRW, {
                onValueChange: t,
                className: b.slider,
                initialValue: (0, f.P)(e),
                maxValue: 100
            })
        ]
    });
}
function N(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, p.V2)({ location: 'SoundmojiBanner' }),
        o = (0, l.e7)([d.default], () => _.ZP.canUseSoundboardEverywhere(d.default.getCurrentUser())),
        a = (0, l.e7)([u.Z], () => u.Z.getGuildId());
    return n || o || t.guildId === g.X8 || t.guildId === a || !i
        ? (0, r.jsx)(c.IGR, {
              text: 'BETA',
              color: s.Z.BG_BRAND,
              className: b.betaBadge
          })
        : (0, r.jsxs)('div', {
              className: b.infoNitroContainer,
              children: [
                  (0, r.jsx)('div', { className: b.infoNitroBackground }),
                  (0, r.jsxs)('div', {
                      className: b.infoNitroTextContainer,
                      children: [
                          (0, r.jsx)(c.SrA, {
                              size: 'xxs',
                              color: 'white',
                              className: b.infoNitroIcon
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: b.infoNitroText,
                              children: E.NW.string(E.t['BMw+7O'])
                          }),
                          (0, r.jsx)(c.IGR, {
                              text: 'BETA',
                              color: s.Z.BG_BRAND,
                              className: b.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function A(e) {
    let { sound: t } = e;
    return (0, r.jsxs)('div', {
        className: a()(b.infoContainer, b.infoTooltip),
        children: [
            (0, r.jsx)(N, { sound: t }),
            (0, r.jsxs)('div', {
                className: b.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(c.KY1, {
                                size: 'sm',
                                className: b.infoSoundIcon
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: b.infoSoundInnerContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: E.NW.string(E.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { renderPopout: t, position: n, tooltipText: o, children: s, setTooltipShowing: l, clickableClassName: u } = e,
        [d, f] = i.useState(!1),
        [_, p] = i.useState(String(Date.now())),
        h = i.useCallback(
            (e) => {
                e.stopPropagation(), f(!d);
            },
            [d]
        ),
        m = i.useCallback(() => {
            p(String(Date.now()));
        }, []),
        g = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d ? null == (e = g.current) || e.focus() : null == (t = g.current) || t.blur(), null == l || l(d);
    }, [d, l]);
    let E = !d;
    return (0, r.jsx)(c.yRy, {
        renderPopout: (e) =>
            (0, r.jsx)(c.P3F, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t(S(O({}, e), { refreshPosition: m }))
            }),
        align: 'center',
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => f(!1),
        animationPosition: 'bottom',
        positionKey: _,
        closeOnScroll: !0,
        children: (e) =>
            (0, r.jsx)(c.ua7, {
                onTooltipHide: () => {
                    E && (null == l || l(!1));
                },
                onTooltipShow: () => {
                    E && (null == l || l(!0));
                },
                text: o,
                position: 'top',
                shouldShow: E,
                children: (t) =>
                    (0, r.jsx)(
                        c.P3F,
                        S(O({ innerRef: g }, t, e), {
                            'aria-label': o,
                            onClick: h,
                            className: a()(y.secondaryButtonRefresh, u),
                            children: s
                        })
                    )
            })
    });
}
function R(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(T, {}),
                tooltipText: E.NW.string(E.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(c.gj8, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.secondaryIcon
                })
            }),
            (0, r.jsx)(C, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(
                        m.Z,
                        O(
                            {
                                sound: t,
                                channel: n
                            },
                            e
                        )
                    ),
                tooltipText: E.NW.string(E.t.KVbJU1),
                position: 'right',
                children: (0, r.jsx)(c.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.secondaryIcon
                })
            })
        ]
    });
}
