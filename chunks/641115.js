(n.d(t, {
    W: () => A,
    Z: () => M
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    f = n(410575),
    m = n(2052),
    h = n(924557),
    p = n(600164),
    x = n(436774),
    g = n(140465),
    _ = n(774026),
    v = n(592125),
    j = n(944486),
    b = n(594174),
    S = n(74538),
    C = n(451467),
    y = n(122186),
    O = n(37113),
    Z = n(981631),
    w = n(388032),
    I = n(347226),
    N = n(480197),
    T = n(20493);
function E(e) {
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
function P(e, t) {
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
function R(e) {
    let { analyticsLocation: t } = e;
    (0, u.ZDy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) => (0, r.jsx)(e, P(E({}, n), { analyticsSource: t }));
    });
}
function A() {
    return (0, r.jsxs)('div', {
        className: N.toolTipTextContainer,
        children: [
            (0, r.jsx)(u.SrA, {
                size: 'md',
                color: x.JX.PREMIUM_TIER_2,
                className: N.premiumIcon
            }),
            (0, r.jsx)(u.Text, {
                className: N.upsellText,
                variant: 'text-sm/medium',
                children: w.intl.string(w.t.sEAnVF)
            })
        ]
    });
}
function k(e) {
    let t,
        n,
        { type: i, selected: l, needsPremium: o, needsDemo: a, analyticsLocation: c, onClick: d, onClose: f, setIsHovering: m } = e,
        { value: h, label: p } = i;
    return (
        o
            ? ((t = (0, r.jsx)(u.DY3, {
                  tooltipClassName: N.tooltip,
                  spacing: 6,
                  'aria-label': w.intl.string(w.t.sEAnVF),
                  text: (0, r.jsx)(A, {}),
                  children: (0, r.jsx)('div', {
                      className: N.textContainer,
                      onMouseEnter: () => m(!0),
                      onMouseLeave: () => m(!1),
                      children: (0, r.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: s()(N.selectorNitroText, N.enhancedSelectorNitroText),
                          children: p
                      })
                  })
              })),
              (n = () =>
                  R({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, r.jsx)('div', {
                  className: N.textContainer,
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: s()(N.selectorText, { [N.enhancedSelectorNitroText]: a }),
                      children: p
                  })
              })),
              (n = () => d(h))),
        {
            content: t,
            className: s()(N.selectorButton, {
                [N.selectorButtonSelected]: l,
                [N.perksDemo]: a,
                [N.premiumUpsell]: o
            }),
            onClick: n
        }
    );
}
function M(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: l, selectedFPS: s, onResolutionChange: o, onFPSChange: x, onPresetChange: A, targetGuildPremiumTier: M, captureDeviceSelected: D } = e,
        L = (0, c.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return (a()(null != e, 'StreamSettings: user cannot be undefined'), e);
        }),
        B = (0, c.e7)([j.Z, v.Z], () => v.Z.getChannel(j.Z.getVoiceChannelId())),
        G = S.ZP.canStreamQuality(S.U2.MID, L),
        { location: U } = (0, m.O)(),
        W = (0, h.Zq)({ autoTrackExposure: !1 }),
        F = (0, g.B4)(),
        z = b.default.getUser(null == B ? void 0 : B.hdStreamingBuyerId),
        H = null != B && null != B.hdStreamingUntil && new Date(B.hdStreamingUntil) > new Date() && null != z,
        V = !G && !W,
        [Y, X] = i.useState(!1),
        J = D ? O.z8 : O.WC,
        K = P(E({}, U), { section: Z.jXE.STREAM_SETTINGS }),
        q = (0, r.jsx)(d.hE, {
            buttons: J.map((e) =>
                k({
                    type: e,
                    selected: e.value === l,
                    needsPremium: !(0, C.Z)(n, e.value, s, L, M, B),
                    needsDemo: F && e.value !== O.LY.RESOLUTION_720,
                    analyticsLocation: K,
                    onClick: () => o(e.value),
                    onClose: t,
                    setIsHovering: X
                })
            )
        }),
        Q = (0, r.jsx)(d.hE, {
            buttons: O.k0.map((e) =>
                k({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, C.Z)(n, l, e.value, L, M, B),
                    needsDemo: F && e.value === O.ws.FPS_60,
                    analyticsLocation: K,
                    onClick: () => x(e.value),
                    onClose: t,
                    setIsHovering: X
                })
            )
        }),
        $ = [
            {
                value: O.tI.PRESET_VIDEO,
                label: w.intl.string(w.t.HcwHc3)
            },
            ...(D
                ? []
                : [
                      {
                          value: O.tI.PRESET_DOCUMENTS,
                          label: w.intl.string(w.t['/RfohI'])
                      }
                  ]),
            {
                value: O.tI.PRESET_CUSTOM,
                label: w.intl.string(w.t['+eOtrK'])
            }
        ],
        ee =
            n === O.tI.PRESET_DOCUMENTS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.Z, {
                              children: (0, r.jsx)(u.xJW, {
                                  title: w.intl.string(w.t.rHyPXl),
                                  titleClassName: I.formItemTitleSlim,
                                  className: N.documentModeGroup,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: w.intl.format(w.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          V
                              ? (0, r.jsx)(y.Z, {
                                    message: w.intl.string(w.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: R
                                })
                              : null,
                          F && (0, r.jsx)(y.c, {}),
                          H &&
                              null != B.hdStreamingUntil &&
                              (0, r.jsx)(_.Z, {
                                  streamingUntil: B.hdStreamingUntil,
                                  user: z,
                                  channel: B
                              })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(p.Z, {
                              children: [
                                  (0, r.jsx)(u.xJW, {
                                      title: w.intl.string(w.t.rHyPXl),
                                      className: N.settingsGroup,
                                      titleClassName: I.formItemTitleSlim,
                                      children: q
                                  }),
                                  (0, r.jsx)(u.xJW, {
                                      title: w.intl.string(w.t.SkkeIi),
                                      className: N.settingsGroup,
                                      titleClassName: I.formItemTitleSlim,
                                      children: Q
                                  })
                              ]
                          }),
                          V
                              ? (0, r.jsx)(y.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: R,
                                    glow: Y
                                })
                              : null,
                          F && (0, r.jsx)(y.c, {}),
                          H &&
                              null != B.hdStreamingUntil &&
                              (0, r.jsx)(_.Z, {
                                  streamingUntil: null == B ? void 0 : B.hdStreamingUntil,
                                  user: z,
                                  channel: B
                              })
                      ]
                  });
    return (0, r.jsx)(
        f.Z,
        P(E({}, K), {
            children: (0, r.jsx)(u.xJW, {
                title: w.intl.string(w.t.ax4FnZ),
                titleClassName: I.formItemTitle,
                className: I.modalContent,
                children: (0, r.jsxs)('div', {
                    className: N.qualitySettingsContainer,
                    children: [
                        (0, r.jsx)(u.q4e, {
                            value: n,
                            className: T.marginTop8,
                            options: $,
                            onChange: (e) => A(e)
                        }),
                        ee
                    ]
                })
            })
        })
    );
}
