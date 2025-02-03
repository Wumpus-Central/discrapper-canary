n.d(t, {
    Dp: () => T,
    Hh: () => S,
    ZP: () => A,
    hq: () => I
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(831209),
    l = n(442837),
    u = n(481060),
    c = n(914010),
    d = n(594174),
    f = n(36703),
    _ = n(74538),
    p = n(125900),
    h = n(824690),
    m = n(240479),
    g = n(710111),
    E = n(388032),
    v = n(89107),
    y = n(965965);
function I() {
    let { volume: e, onVolumeChange: t } = (0, h.Z)();
    return (0, i.jsxs)(u.P3F, {
        className: v.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: E.intl.string(E.t['2JbvKy'])
            }),
            (0, i.jsx)(u.iRW, {
                onValueChange: t,
                className: v.slider,
                initialValue: (0, f.P)(e),
                maxValue: 100
            })
        ]
    });
}
function b(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        r = (0, p.V2)({ location: 'SoundmojiBanner' }),
        a = (0, l.e7)([d.default], () => _.ZP.canUseSoundboardEverywhere(d.default.getCurrentUser())),
        s = (0, l.e7)([c.Z], () => c.Z.getGuildId());
    return n || a || t.guildId === g.X8 || t.guildId === s || !r
        ? (0, i.jsx)(u.IGR, {
              text: 'BETA',
              color: o.Z.BG_BRAND,
              className: v.betaBadge
          })
        : (0, i.jsxs)('div', {
              className: v.infoNitroContainer,
              children: [
                  (0, i.jsx)('div', { className: v.infoNitroBackground }),
                  (0, i.jsxs)('div', {
                      className: v.infoNitroTextContainer,
                      children: [
                          (0, i.jsx)(u.SrA, {
                              size: 'xxs',
                              color: 'white',
                              className: v.infoNitroIcon
                          }),
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: v.infoNitroText,
                              children: E.intl.string(E.t['BMw+7O'])
                          }),
                          (0, i.jsx)(u.IGR, {
                              text: 'BETA',
                              color: o.Z.BG_BRAND,
                              className: v.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function T(e) {
    let { sound: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(v.infoContainer, v.infoTooltip),
        children: [
            (0, i.jsx)(b, { sound: t }),
            (0, i.jsxs)('div', {
                className: v.infoSoundContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.infoSoundInnerContainer,
                        children: [
                            (0, i.jsx)(u.KY1, {
                                size: 'sm',
                                className: v.infoSoundIcon
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: v.infoSoundInnerContainer,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            children: E.intl.string(E.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: o, setTooltipShowing: l, clickableClassName: c } = e,
        [d, f] = r.useState(!1),
        [_, p] = r.useState(String(Date.now())),
        h = r.useCallback(
            (e) => {
                e.stopPropagation(), f(!d);
            },
            [d]
        ),
        m = r.useCallback(() => {
            p(String(Date.now()));
        }, []),
        g = r.useRef(null);
    r.useEffect(() => {
        var e, t;
        d ? null === (e = g.current) || void 0 === e || e.focus() : null === (t = g.current) || void 0 === t || t.blur(), null == l || l(d);
    }, [d, l]);
    let E = !d;
    return (0, i.jsx)(u.yRy, {
        renderPopout: (e) =>
            (0, i.jsx)(u.P3F, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({
                    ...e,
                    refreshPosition: m
                })
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
            (0, i.jsx)(u.ua7, {
                onTooltipHide: () => {
                    E && (null == l || l(!1));
                },
                onTooltipShow: () => {
                    E && (null == l || l(!0));
                },
                text: a,
                position: 'top',
                shouldShow: E,
                children: (t) =>
                    (0, i.jsx)(u.P3F, {
                        innerRef: g,
                        ...t,
                        ...e,
                        'aria-label': a,
                        onClick: h,
                        className: s()(y.secondaryButtonRefresh, c),
                        children: o
                    })
            })
    });
}
function A(e) {
    let { sound: t, channel: n, setTooltipShowing: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                setTooltipShowing: r,
                renderPopout: () => (0, i.jsx)(I, {}),
                tooltipText: E.intl.string(E.t['19lt29']),
                position: 'top',
                children: (0, i.jsx)(u.gj8, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.secondaryIcon
                })
            }),
            (0, i.jsx)(S, {
                setTooltipShowing: r,
                renderPopout: (e) =>
                    (0, i.jsx)(m.Z, {
                        sound: t,
                        channel: n,
                        ...e
                    }),
                tooltipText: E.intl.string(E.t.KVbJU1),
                position: 'right',
                children: (0, i.jsx)(u.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.secondaryIcon
                })
            })
        ]
    });
}
