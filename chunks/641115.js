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
    h = n(924557),
    m = n(600164),
    x = n(436774),
    p = n(140465),
    g = n(774026),
    _ = n(592125),
    v = n(944486),
    j = n(594174),
    b = n(74538),
    C = n(451467),
    S = n(122186),
    N = n(37113),
    y = n(981631),
    Z = n(388032),
    w = n(711597),
    O = n(64479),
    I = n(802138);
function P(e) {
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
function T(e, t) {
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
function E(e) {
    let { analyticsLocation: t } = e;
    (0, d.ZDy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) => (0, r.jsx)(e, T(P({}, n), { analyticsSource: t }));
    });
}
function R() {
    return (0, r.jsxs)('div', {
        className: O.toolTipTextContainer,
        children: [
            (0, r.jsx)(d.SrA, {
                size: 'md',
                color: x.JX.PREMIUM_TIER_2,
                className: O.premiumIcon
            }),
            (0, r.jsx)(d.Text, {
                className: O.upsellText,
                variant: 'text-sm/medium',
                children: Z.NW.string(Z.t.sEAnVF)
            })
        ]
    });
}
function W(e) {
    let t,
        n,
        { type: l, selected: i, needsPremium: o, needsDemo: a, analyticsLocation: c, onClick: u, onClose: f, setIsHovering: h } = e,
        { value: m, label: x } = l;
    return (
        o
            ? ((t = (0, r.jsx)(d.DY3, {
                  tooltipClassName: O.tooltip,
                  spacing: 6,
                  'aria-label': Z.NW.string(Z.t.sEAnVF),
                  text: (0, r.jsx)(R, {}),
                  children: (0, r.jsx)('div', {
                      className: O.textContainer,
                      onMouseEnter: () => h(!0),
                      onMouseLeave: () => h(!1),
                      children: (0, r.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: s()(O.selectorNitroText, O.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (n = () =>
                  E({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, r.jsx)('div', {
                  className: O.textContainer,
                  children: (0, r.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: s()(O.selectorText, { [O.enhancedSelectorNitroText]: a }),
                      children: x
                  })
              })),
              (n = () => u(m))),
        {
            content: t,
            className: s()(O.selectorButton, {
                [O.selectorButtonSelected]: i,
                [O.perksDemo]: a,
                [O.premiumUpsell]: o
            }),
            onClick: n
        }
    );
}
function k(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: i, selectedFPS: s, onResolutionChange: o, onFPSChange: x, onPresetChange: R, targetGuildPremiumTier: k, captureDeviceSelected: A } = e,
        M = (0, c.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        L = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())),
        D = b.ZP.canStreamQuality(b.U2.MID, M),
        { location: G } = (0, f.O)(),
        B = (0, h.Zq)({ autoTrackExposure: !1 }),
        U = (0, p.B4)({ location: 'StreamSettings' }),
        F = j.default.getUser(null == L ? void 0 : L.hdStreamingBuyerId),
        z = null != L && null != L.hdStreamingUntil && new Date(L.hdStreamingUntil) > new Date() && null != F,
        H = !D && !B,
        [V, J] = l.useState(!1),
        X = A ? N.z8 : N.WC,
        Y = T(P({}, G), { section: y.jXE.STREAM_SETTINGS }),
        K = (0, r.jsx)(d.hE2, {
            buttons: X.map((e) =>
                W({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, C.Z)(n, e.value, s, M, k, L),
                    needsDemo: U && e.value !== N.LY.RESOLUTION_720,
                    analyticsLocation: Y,
                    onClick: () => o(e.value),
                    onClose: t,
                    setIsHovering: J
                })
            )
        }),
        q = (0, r.jsx)(d.hE2, {
            buttons: N.k0.map((e) =>
                W({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, C.Z)(n, i, e.value, M, k, L),
                    needsDemo: U && e.value === N.ws.FPS_60,
                    analyticsLocation: Y,
                    onClick: () => x(e.value),
                    onClose: t,
                    setIsHovering: J
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
                          (0, r.jsx)(m.Z, {
                              children: (0, r.jsx)(d.xJW, {
                                  title: Z.NW.string(Z.t.rHyPXl),
                                  titleClassName: w.formItemTitleSlim,
                                  className: O.documentModeGroup,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: Z.NW.format(Z.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          H
                              ? (0, r.jsx)(S.Z, {
                                    message: Z.NW.string(Z.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: E
                                })
                              : null,
                          U && (0, r.jsx)(S.c, {}),
                          z &&
                              null != L.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: L.hdStreamingUntil,
                                  user: F,
                                  channel: L
                              })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(m.Z, {
                              children: [
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.NW.string(Z.t.rHyPXl),
                                      className: O.settingsGroup,
                                      titleClassName: w.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, r.jsx)(d.xJW, {
                                      title: Z.NW.string(Z.t.SkkeIi),
                                      className: O.settingsGroup,
                                      titleClassName: w.formItemTitleSlim,
                                      children: q
                                  })
                              ]
                          }),
                          H
                              ? (0, r.jsx)(S.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: E,
                                    glow: V
                                })
                              : null,
                          U && (0, r.jsx)(S.c, {}),
                          z &&
                              null != L.hdStreamingUntil &&
                              (0, r.jsx)(g.Z, {
                                  streamingUntil: null == L ? void 0 : L.hdStreamingUntil,
                                  user: F,
                                  channel: L
                              })
                      ]
                  });
    return (0, r.jsx)(
        u.Z,
        T(P({}, Y), {
            children: (0, r.jsx)(d.xJW, {
                title: Z.NW.string(Z.t.ax4FnZ),
                titleClassName: w.formItemTitle,
                className: w.modalContent,
                children: (0, r.jsxs)('div', {
                    className: O.qualitySettingsContainer,
                    children: [
                        (0, r.jsx)(d.q4e, {
                            value: n,
                            className: I.marginTop8,
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
