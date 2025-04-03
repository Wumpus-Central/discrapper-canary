n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(512722),
    a = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(410575),
    f = n(2052),
    m = n(924557),
    h = n(600164),
    x = n(436774),
    p = n(140465),
    g = n(774026),
    _ = n(592125),
    j = n(944486),
    v = n(594174),
    b = n(74538),
    S = n(451467),
    C = n(122186),
    N = n(37113),
    y = n(981631),
    Z = n(388032),
    I = n(347226),
    w = n(480197),
    O = n(20493);
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
                color: x.JX.PREMIUM_TIER_2,
                className: w.premiumIcon
            }),
            (0, r.jsx)(d.Text, {
                className: w.upsellText,
                variant: 'text-sm/medium',
                children: Z.NW.string(Z.t.sEAnVF)
            })
        ]
    });
}
function W(e) {
    let t,
        n,
        { type: l, selected: i, needsPremium: o, needsDemo: a, analyticsLocation: c, onClick: u, onClose: f, setIsHovering: m } = e,
        { value: h, label: x } = l;
    return (
        o
            ? ((t = (0, r.jsx)(d.DY3, {
                  tooltipClassName: w.tooltip,
                  spacing: 6,
                  'aria-label': Z.NW.string(Z.t.sEAnVF),
                  text: (0, r.jsx)(R, {}),
                  children: (0, r.jsx)('div', {
                      className: w.textContainer,
                      onMouseEnter: () => m(!0),
                      onMouseLeave: () => m(!1),
                      children: (0, r.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: s()(w.selectorNitroText, w.enhancedSelectorNitroText),
                          children: x
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
                      children: x
                  })
              })),
              (n = () => u(h))),
        {
            content: t,
            className: s()(w.selectorButton, {
                [w.selectorButtonSelected]: i,
                [w.perksDemo]: a,
                [w.premiumUpsell]: o
            }),
            onClick: n
        }
    );
}
function k(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: i, selectedFPS: s, onResolutionChange: o, onFPSChange: x, onPresetChange: R, targetGuildPremiumTier: k, captureDeviceSelected: A } = e,
        M = (0, c.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return a()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        L = (0, c.e7)([j.Z, _.Z], () => _.Z.getChannel(j.Z.getVoiceChannelId())),
        D = b.ZP.canStreamQuality(b.U2.MID, M),
        { location: G } = (0, f.O)(),
        U = (0, m.Zq)({ autoTrackExposure: !1 }),
        B = (0, p.B4)(),
        z = v.default.getUser(null == L ? void 0 : L.hdStreamingBuyerId),
        F = null != L && null != L.hdStreamingUntil && new Date(L.hdStreamingUntil) > new Date() && null != z,
        H = !D && !U,
        [V, Y] = l.useState(!1),
        J = A ? N.z8 : N.WC,
        X = E(T({}, G), { section: y.jXE.STREAM_SETTINGS }),
        K = (0, r.jsx)(d.hE2, {
            buttons: J.map((e) =>
                W({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, S.Z)(n, e.value, s, M, k, L),
                    needsDemo: B && e.value !== N.LY.RESOLUTION_720,
                    analyticsLocation: X,
                    onClick: () => o(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        q = (0, r.jsx)(d.hE2, {
            buttons: N.k0.map((e) =>
                W({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, S.Z)(n, i, e.value, M, k, L),
                    needsDemo: B && e.value === N.ws.FPS_60,
                    analyticsLocation: X,
                    onClick: () => x(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        Q = [
            {
                value: N.tI.PRESET_VIDEO,
                label: Z.NW.string(Z.t.HcwHc3)
            },
            ...(A
                ? []
                : [
                      {
                          value: N.tI.PRESET_DOCUMENTS,
                          label: Z.NW.string(Z.t['/RfohI'])
                      }
                  ]),
            {
                value: N.tI.PRESET_CUSTOM,
                label: Z.NW.string(Z.t['+eOtrK'])
            }
        ],
        $ =
            n === N.tI.PRESET_DOCUMENTS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(h.Z, {
                              children: (0, r.jsx)(d.xJW, {
                                  title: Z.NW.string(Z.t.rHyPXl),
                                  titleClassName: I.formItemTitleSlim,
                                  className: w.documentModeGroup,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: Z.NW.format(Z.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          H
                              ? (0, r.jsx)(C.Z, {
                                    message: Z.NW.string(Z.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: P
                                })
                              : null,
                          B && (0, r.jsx)(C.c, {}),
                          F &&
                              null != L.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: L.hdStreamingUntil,
                                  user: z,
                                  channel: L
                              })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(h.Z, {
                              children: [
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.NW.string(Z.t.rHyPXl),
                                      className: w.settingsGroup,
                                      titleClassName: I.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.NW.string(Z.t.SkkeIi),
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
                          B && (0, r.jsx)(C.c, {}),
                          F &&
                              null != L.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: null == L ? void 0 : L.hdStreamingUntil,
                                  user: z,
                                  channel: L
                              })
                      ]
                  });
    return (0, r.jsx)(
        u.Z,
        E(T({}, X), {
            children: (0, r.jsx)(d.xJW, {
                title: Z.NW.string(Z.t.ax4FnZ),
                titleClassName: I.formItemTitle,
                className: I.modalContent,
                children: (0, r.jsxs)('div', {
                    className: w.qualitySettingsContainer,
                    children: [
                        (0, r.jsx)(d.q4e, {
                            value: n,
                            className: O.marginTop8,
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
