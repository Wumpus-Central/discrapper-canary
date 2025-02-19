t.d(n, { Z: () => A }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(512722),
    o = t.n(a),
    c = t(442837),
    u = t(481060),
    d = t(410575),
    m = t(2052),
    g = t(924557),
    h = t(600164),
    x = t(436774),
    v = t(140465),
    f = t(774026),
    j = t(592125),
    Z = t(944486),
    N = t(594174),
    S = t(74538),
    p = t(451467),
    C = t(122186),
    b = t(37113),
    P = t(981631),
    T = t(388032),
    E = t(382840),
    I = t(958472),
    O = t(455812);
function y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function R(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function W(e) {
    let { analyticsLocation: n, onClose: i } = e;
    (0, u.ZDy)(async () => {
        let { default: e } = await t.e('28479').then(t.bind(t, 78865));
        return (t) =>
            (0, l.jsx)(
                e,
                R(y({}, t), {
                    onCloseParent: i,
                    analyticsSource: n
                })
            );
    });
}
function k() {
    return (0, l.jsxs)('div', {
        className: I.toolTipTextContainer,
        children: [
            (0, l.jsx)(u.SrA, {
                size: 'md',
                color: x.JX.PREMIUM_TIER_2,
                className: s()(I.premiumIcon)
            }),
            (0, l.jsx)(u.Text, {
                className: I.upsellText,
                variant: 'text-sm/medium',
                children: T.NW.string(T.t.sEAnVF)
            })
        ]
    });
}
function w(e) {
    let n,
        t,
        { type: i, selected: r, needsPremium: a, needsDemo: o, analyticsLocation: c, onClick: d, onClose: m, setIsHovering: g } = e,
        { value: h, label: x } = i;
    return (
        a
            ? ((n = (0, l.jsx)(u.DY3, {
                  tooltipClassName: I.tooltip,
                  spacing: 6,
                  'aria-label': T.NW.string(T.t.sEAnVF),
                  text: (0, l.jsx)(k, {}),
                  children: (0, l.jsx)('div', {
                      className: I.textContainer,
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      children: (0, l.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: s()(I.selectorNitroText, I.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (t = () =>
                  W({
                      analyticsLocation: c,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: I.textContainer,
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: s()(I.selectorText, { [I.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (t = () => d(h))),
        {
            content: n,
            className: s()(I.selectorButton, {
                [I.selectorButtonSelected]: r,
                [I.perksDemo]: o,
                [I.premiumUpsell]: a
            }),
            onClick: t
        }
    );
}
function A(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: r, selectedFPS: s, onResolutionChange: a, onFPSChange: x, onPresetChange: k, targetGuildPremiumTier: A, captureDeviceSelected: D } = e,
        M = (0, c.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        _ = (0, c.e7)([Z.Z, j.Z], () => j.Z.getChannel(Z.Z.getVoiceChannelId())),
        L = S.ZP.canStreamQuality(S.U2.MID, M),
        { location: z } = (0, m.O)(),
        U = (0, g.Zq)({ autoTrackExposure: !1 }),
        G = (0, v.B4)({ location: 'StreamSettings' }),
        F = N.default.getUser(null == _ ? void 0 : _.hdStreamingBuyerId),
        V = null != _ && null != _.hdStreamingUntil && new Date(_.hdStreamingUntil) > new Date() && null != F,
        J = !L && !U,
        [B, X] = i.useState(!1),
        Y = D ? b.z8 : b.WC,
        H = R(y({}, z), { section: P.jXE.STREAM_SETTINGS }),
        K = (0, l.jsx)(u.hE2, {
            buttons: Y.map((e) =>
                w({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, p.Z)(t, e.value, s, M, A, _),
                    needsDemo: G && e.value !== b.LY.RESOLUTION_720,
                    analyticsLocation: H,
                    onClick: () => a(e.value),
                    onClose: n,
                    setIsHovering: X
                })
            )
        }),
        q = (0, l.jsx)(u.hE2, {
            buttons: b.k0.map((e) =>
                w({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, p.Z)(t, r, e.value, M, A, _),
                    needsDemo: G && e.value === b.ws.FPS_60,
                    analyticsLocation: H,
                    onClick: () => x(e.value),
                    onClose: n,
                    setIsHovering: X
                })
            )
        }),
        Q = [
            {
                value: b.tI.PRESET_VIDEO,
                label: T.NW.string(T.t.HcwHc3)
            },
            ...(D
                ? []
                : [
                      {
                          value: b.tI.PRESET_DOCUMENTS,
                          label: T.NW.string(T.t['/RfohI'])
                      }
                  ]),
            {
                value: b.tI.PRESET_CUSTOM,
                label: T.NW.string(T.t['+eOtrK'])
            }
        ],
        $ =
            t === b.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(h.Z, {
                              children: (0, l.jsx)(u.xJW, {
                                  title: T.NW.string(T.t.rHyPXl),
                                  titleClassName: E.formItemTitleSlim,
                                  className: I.documentModeGroup,
                                  children: (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: T.NW.format(T.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          J
                              ? (0, l.jsx)(C.Z, {
                                    message: T.NW.string(T.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: W
                                })
                              : null,
                          G && (0, l.jsx)(C.c, {}),
                          V &&
                              null != _.hdStreamingUntil &&
                              (0, l.jsx)(f.Z, {
                                  streamingUntil: _.hdStreamingUntil,
                                  user: F,
                                  channel: _
                              })
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(h.Z, {
                              children: [
                                  (0, l.jsx)(u.xJW, {
                                      title: T.NW.string(T.t.rHyPXl),
                                      className: I.settingsGroup,
                                      titleClassName: E.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, l.jsx)(u.xJW, {
                                      title: T.NW.string(T.t.SkkeIi),
                                      className: I.settingsGroup,
                                      titleClassName: E.formItemTitleSlim,
                                      children: q
                                  })
                              ]
                          }),
                          J
                              ? (0, l.jsx)(C.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: W,
                                    glow: B
                                })
                              : null,
                          G && (0, l.jsx)(C.c, {}),
                          V &&
                              null != _.hdStreamingUntil &&
                              (0, l.jsx)(f.Z, {
                                  streamingUntil: null == _ ? void 0 : _.hdStreamingUntil,
                                  user: F,
                                  channel: _
                              })
                      ]
                  });
    return (0, l.jsx)(
        d.Z,
        R(y({}, H), {
            children: (0, l.jsx)(u.xJW, {
                title: T.NW.string(T.t.ax4FnZ),
                titleClassName: E.formItemTitle,
                className: E.modalContent,
                children: (0, l.jsxs)('div', {
                    className: I.qualitySettingsContainer,
                    children: [
                        (0, l.jsx)(u.q4e, {
                            value: t,
                            className: O.marginTop8,
                            options: Q,
                            onChange: (e) => k(e)
                        }),
                        $
                    ]
                })
            })
        })
    );
}
