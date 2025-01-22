r.d(n, {
    Dp: function () {
        return A;
    },
    Hh: function () {
        return C;
    },
    ZP: function () {
        return N;
    },
    hq: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(831209),
    c = r(442837),
    d = r(481060),
    f = r(914010),
    p = r(594174),
    h = r(36703),
    _ = r(74538),
    m = r(125900),
    g = r(824690),
    E = r(240479),
    v = r(710111),
    y = r(388032),
    b = r(89107),
    I = r(965965);
function T() {
    let { volume: e, onVolumeChange: n } = (0, g.Z)();
    return (0, a.jsxs)(d.Clickable, {
        className: b.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, a.jsx)(d.Text, {
                variant: 'text-sm/normal',
                children: y.intl.string(y.t['2JbvKy'])
            }),
            (0, a.jsx)(d.Slider, {
                onValueChange: n,
                className: b.slider,
                initialValue: (0, h.P)(e),
                maxValue: 100
            })
        ]
    });
}
function S(e) {
    let { sound: n, forceShowBetaLabel: r = !1 } = e,
        i = (0, m.V2)({ location: 'SoundmojiBanner' }),
        o = (0, c.e7)([p.default], () => _.ZP.canUseSoundboardEverywhere(p.default.getCurrentUser())),
        s = (0, c.e7)([f.Z], () => f.Z.getGuildId());
    return r || o || n.guildId === v.X8 || n.guildId === s || !i
        ? (0, a.jsx)(d.TextBadge, {
              text: 'BETA',
              color: u.Z.BG_BRAND,
              className: b.betaBadge
          })
        : (0, a.jsxs)('div', {
              className: b.infoNitroContainer,
              children: [
                  (0, a.jsx)('div', { className: b.infoNitroBackground }),
                  (0, a.jsxs)('div', {
                      className: b.infoNitroTextContainer,
                      children: [
                          (0, a.jsx)(d.NitroWheelIcon, {
                              size: 'xxs',
                              color: 'white',
                              className: b.infoNitroIcon
                          }),
                          (0, a.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: b.infoNitroText,
                              children: y.intl.string(y.t['BMw+7O'])
                          }),
                          (0, a.jsx)(d.TextBadge, {
                              text: 'BETA',
                              color: u.Z.BG_BRAND,
                              className: b.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function A(e) {
    let { sound: n } = e;
    return (0, a.jsxs)('div', {
        className: l()(b.infoContainer, b.infoTooltip),
        children: [
            (0, a.jsx)(S, { sound: n }),
            (0, a.jsxs)('div', {
                className: b.infoSoundContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.infoSoundInnerContainer,
                        children: [
                            (0, a.jsx)(d.SoundboardIcon, {
                                size: 'sm',
                                className: b.infoSoundIcon
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: n.name
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: b.infoSoundInnerContainer,
                        children: (0, a.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { renderPopout: n, position: r, tooltipText: i, children: s, setTooltipShowing: u, clickableClassName: c } = e,
        [f, p] = o.useState(!1),
        [h, _] = o.useState(String(Date.now())),
        m = o.useCallback(
            (e) => {
                e.stopPropagation(), p(!f);
            },
            [f]
        ),
        g = o.useCallback(() => {
            _(String(Date.now()));
        }, []),
        E = o.useRef(null);
    o.useEffect(() => {
        var e, n;
        f ? null === (e = E.current) || void 0 === e || e.focus() : null === (n = E.current) || void 0 === n || n.blur(), null == u || u(f);
    }, [f, u]);
    let v = !f;
    return (0, a.jsx)(d.Popout, {
        renderPopout: (e) =>
            (0, a.jsx)(d.Clickable, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: n({
                    ...e,
                    refreshPosition: g
                })
            }),
        align: 'center',
        nudgeAlignIntoViewport: !0,
        position: r,
        shouldShow: f,
        onRequestClose: () => p(!1),
        animationPosition: 'bottom',
        positionKey: h,
        closeOnScroll: !0,
        children: (e) =>
            (0, a.jsx)(d.Tooltip, {
                onTooltipHide: () => {
                    v && (null == u || u(!1));
                },
                onTooltipShow: () => {
                    v && (null == u || u(!0));
                },
                text: i,
                position: 'top',
                shouldShow: v,
                children: (n) =>
                    (0, a.jsx)(d.Clickable, {
                        innerRef: E,
                        ...n,
                        ...e,
                        'aria-label': i,
                        onClick: m,
                        className: l()(I.secondaryButtonRefresh, c),
                        children: s
                    })
            })
    });
}
function N(e) {
    let { sound: n, channel: r, setTooltipShowing: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(C, {
                setTooltipShowing: i,
                renderPopout: () => (0, a.jsx)(T, {}),
                tooltipText: y.intl.string(y.t['19lt29']),
                position: 'top',
                children: (0, a.jsx)(d.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            }),
            (0, a.jsx)(C, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, a.jsx)(E.Z, {
                        sound: n,
                        channel: r,
                        ...e
                    }),
                tooltipText: y.intl.string(y.t.KVbJU1),
                position: 'right',
                children: (0, a.jsx)(d.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            })
        ]
    });
}
