r.d(n, {
    Dp: function () {
        return A;
    },
    Hh: function () {
        return N;
    },
    ZP: function () {
        return C;
    },
    hq: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(831209),
    c = r(442837),
    d = r(481060),
    f = r(914010),
    _ = r(594174),
    h = r(36703),
    p = r(74538),
    m = r(125900),
    g = r(824690),
    E = r(240479),
    v = r(710111),
    I = r(388032),
    T = r(89107),
    b = r(965965);
function y() {
    let { volume: e, onVolumeChange: n } = (0, g.Z)();
    return (0, a.jsxs)(d.Clickable, {
        className: T.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, a.jsx)(d.Text, {
                variant: 'text-sm/normal',
                children: I.intl.string(I.t['2JbvKy'])
            }),
            (0, a.jsx)(d.Slider, {
                onValueChange: n,
                className: T.slider,
                initialValue: (0, h.P)(e),
                maxValue: 100
            })
        ]
    });
}
function S(e) {
    let { sound: n, forceShowBetaLabel: r = !1 } = e,
        i = (0, m.V2)({ location: 'SoundmojiBanner' }),
        s = (0, c.e7)([_.default], () => p.ZP.canUseSoundboardEverywhere(_.default.getCurrentUser())),
        o = (0, c.e7)([f.Z], () => f.Z.getGuildId());
    return r || s || n.guildId === v.X8 || n.guildId === o || !i
        ? (0, a.jsx)(d.TextBadge, {
              text: 'BETA',
              color: u.Z.BG_BRAND,
              className: T.betaBadge
          })
        : (0, a.jsxs)('div', {
              className: T.infoNitroContainer,
              children: [
                  (0, a.jsx)('div', { className: T.infoNitroBackground }),
                  (0, a.jsxs)('div', {
                      className: T.infoNitroTextContainer,
                      children: [
                          (0, a.jsx)(d.NitroWheelIcon, {
                              size: 'xxs',
                              color: 'white',
                              className: T.infoNitroIcon
                          }),
                          (0, a.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: T.infoNitroText,
                              children: I.intl.string(I.t['BMw+7O'])
                          }),
                          (0, a.jsx)(d.TextBadge, {
                              text: 'BETA',
                              color: u.Z.BG_BRAND,
                              className: T.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function A(e) {
    let { sound: n } = e;
    return (0, a.jsxs)('div', {
        className: l()(T.infoContainer, T.infoTooltip),
        children: [
            (0, a.jsx)(S, { sound: n }),
            (0, a.jsxs)('div', {
                className: T.infoSoundContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: T.infoSoundInnerContainer,
                        children: [
                            (0, a.jsx)(d.SoundboardIcon, {
                                size: 'sm',
                                className: T.infoSoundIcon
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: n.name
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: T.infoSoundInnerContainer,
                        children: (0, a.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            children: I.intl.string(I.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { renderPopout: n, position: r, tooltipText: i, children: o, setTooltipShowing: u, clickableClassName: c } = e,
        [f, _] = s.useState(!1),
        [h, p] = s.useState(String(Date.now())),
        m = s.useCallback(
            (e) => {
                e.stopPropagation(), _(!f);
            },
            [f]
        ),
        g = s.useCallback(() => {
            p(String(Date.now()));
        }, []),
        E = s.useRef(null);
    s.useEffect(() => {
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
        onRequestClose: () => _(!1),
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
                        className: l()(b.secondaryButtonRefresh, c),
                        children: o
                    })
            })
    });
}
function C(e) {
    let { sound: n, channel: r, setTooltipShowing: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(N, {
                setTooltipShowing: i,
                renderPopout: () => (0, a.jsx)(y, {}),
                tooltipText: I.intl.string(I.t['19lt29']),
                position: 'top',
                children: (0, a.jsx)(d.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.secondaryIcon
                })
            }),
            (0, a.jsx)(N, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, a.jsx)(E.Z, {
                        sound: n,
                        channel: r,
                        ...e
                    }),
                tooltipText: I.intl.string(I.t.KVbJU1),
                position: 'right',
                children: (0, a.jsx)(d.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.secondaryIcon
                })
            })
        ]
    });
}
