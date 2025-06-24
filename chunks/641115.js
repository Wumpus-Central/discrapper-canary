n.d(t, {
    W: () => R,
    Z: () => A
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(410575),
    f = n(2052),
    m = n(924557),
    h = n(600164),
    p = n(436774),
    x = n(140465),
    g = n(774026),
    _ = n(592125),
    v = n(944486),
    j = n(594174),
    b = n(74538),
    S = n(451467),
    C = n(122186),
    y = n(37113),
    O = n(981631),
    Z = n(388032),
    I = n(347226),
    w = n(480197),
    N = n(20493);
function T(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
function P(e) {
    let { analyticsLocation: t } = e;
    (0, d.ZDy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) => (0, r.jsx)(e, E(T({}, n), { analyticsSource: t }));
    });
}
function R() {
    return (0, r.jsxs)('div', {
        className: w.toolTipTextContainer,
        children: [
            (0, r.jsx)(d.SrA, {
                size: 'md',
                color: p.JX.PREMIUM_TIER_2,
                className: w.premiumIcon
            }),
            (0, r.jsx)(d.Text, {
                className: w.upsellText,
                variant: 'text-sm/medium',
                children: Z.intl.string(Z.t.sEAnVF)
            })
        ]
    });
}
function k(e) {
    let t,
        n,
        { type: i, selected: l, needsPremium: o, needsDemo: a, analyticsLocation: c, onClick: u, onClose: f, setIsHovering: m } = e,
        { value: h, label: p } = i;
    return (
        o
            ? ((t = (0, r.jsx)(d.DY3, {
                  tooltipClassName: w.tooltip,
                  spacing: 6,
                  'aria-label': Z.intl.string(Z.t.sEAnVF),
                  text: (0, r.jsx)(R, {}),
                  children: (0, r.jsx)('div', {
                      className: w.textContainer,
                      onMouseEnter: () => m(!0),
                      onMouseLeave: () => m(!1),
                      children: (0, r.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: s()(w.selectorNitroText, w.enhancedSelectorNitroText),
                          children: p
                      })
                  })
              })),
              (n = () =>
                  P({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, r.jsx)('div', {
                  className: w.textContainer,
                  children: (0, r.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: s()(w.selectorText, { [w.enhancedSelectorNitroText]: a }),
                      children: p
                  })
              })),
              (n = () => u(h))),
        {
            content: t,
            className: s()(w.selectorButton, {
                [w.selectorButtonSelected]: l,
                [w.perksDemo]: a,
                [w.premiumUpsell]: o
            }),
            onClick: n
        }
    );
}
function A(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: l, selectedFPS: s, onResolutionChange: o, onFPSChange: p, onPresetChange: R, targetGuildPremiumTier: A, captureDeviceSelected: M } = e,
        L = (0, c.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        D = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())),
        B = b.ZP.canStreamQuality(b.U2.MID, L),
        { location: U } = (0, f.O)(),
        G = (0, m.Zq)({ autoTrackExposure: !1 }),
        W = (0, x.B4)(),
        z = j.default.getUser(null == D ? void 0 : D.hdStreamingBuyerId),
        F = null != D && null != D.hdStreamingUntil && new Date(D.hdStreamingUntil) > new Date() && null != z,
        H = !B && !G,
        [V, Y] = i.useState(!1),
        X = M ? y.z8 : y.WC,
        J = E(T({}, U), { section: O.jXE.STREAM_SETTINGS }),
        K = (0, r.jsx)(d.hE2, {
            buttons: X.map((e) =>
                k({
                    type: e,
                    selected: e.value === l,
                    needsPremium: !(0, S.Z)(n, e.value, s, L, A, D),
                    needsDemo: W && e.value !== y.LY.RESOLUTION_720,
                    analyticsLocation: J,
                    onClick: () => o(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        q = (0, r.jsx)(d.hE2, {
            buttons: y.k0.map((e) =>
                k({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, S.Z)(n, l, e.value, L, A, D),
                    needsDemo: W && e.value === y.ws.FPS_60,
                    analyticsLocation: J,
                    onClick: () => p(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        Q = [
            {
                value: y.tI.PRESET_VIDEO,
                label: Z.intl.string(Z.t.HcwHc3)
            },
            ...(M
                ? []
                : [
                      {
                          value: y.tI.PRESET_DOCUMENTS,
                          label: Z.intl.string(Z.t['/RfohI'])
                      }
                  ]),
            {
                value: y.tI.PRESET_CUSTOM,
                label: Z.intl.string(Z.t['+eOtrK'])
            }
        ],
        $ =
            n === y.tI.PRESET_DOCUMENTS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(d.xJW, {
                                  title: Z.intl.string(Z.t.rHyPXl),
                                  titleClassName: I.formItemTitleSlim,
                                  className: w.documentModeGroup,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: Z.intl.format(Z.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          H
                              ? (0, r.jsx)(C.Z, {
                                    message: Z.intl.string(Z.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: P
                                })
                              : null,
                          W && (0, r.jsx)(C.c, {}),
                          F &&
                              null != D.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: D.hdStreamingUntil,
                                  user: z,
                                  channel: D
                              })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(h.Z, {
                              children: [
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.intl.string(Z.t.rHyPXl),
                                      className: w.settingsGroup,
                                      titleClassName: I.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.intl.string(Z.t.SkkeIi),
                                      className: w.settingsGroup,
                                      titleClassName: I.formItemTitleSlim,
                                      children: q
                                  })
                              ]
                          }),
                          H
                              ? (0, r.jsx)(C.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: P,
                                    glow: V
                                })
                              : null,
                          W && (0, r.jsx)(C.c, {}),
                          F &&
                              null != D.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: null == D ? void 0 : D.hdStreamingUntil,
                                  user: z,
                                  channel: D
                              })
                      ]
                  });
    return (0, r.jsx)(
        u.Z,
        E(T({}, J), {
            children: (0, r.jsx)(d.xJW, {
                title: Z.intl.string(Z.t.ax4FnZ),
                titleClassName: I.formItemTitle,
                className: I.modalContent,
                children: (0, r.jsxs)('div', {
                    className: w.qualitySettingsContainer,
                    children: [
                        (0, r.jsx)(d.q4e, {
                            value: n,
                            className: N.marginTop8,
                            options: Q,
                            onChange: (e) => R(e)
                        }),
                        $
                    ]
                })
            })
        })
    );
}
