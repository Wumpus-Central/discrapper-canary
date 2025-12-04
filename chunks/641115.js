t.d(n, { Z: () => _ }), t(388685);
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(199849),
    d = t(681715),
    m = t(755721),
    x = t(481060),
    g = t(410575),
    h = t(2052),
    j = t(924557),
    v = t(600164),
    p = t(436774),
    f = t(140465),
    Z = t(592125),
    S = t(944486),
    N = t(594174),
    b = t(74538),
    C = t(451467),
    P = t(122186),
    T = t(37113),
    y = t(981631),
    O = t(388032),
    E = t(542257),
    I = t(381994),
    k = t(197571);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function D(e) {
    let { analyticsLocation: n } = e;
    (0, x.ZDy)(async () => {
        let { default: e } = await t.e("28479").then(t.bind(t, 78865));
        return (t) => (0, l.jsx)(e, R(A({}, t), { analyticsSource: n }));
    });
}
function U(e) {
    let n,
        t,
        {
            type: r,
            selected: i,
            needsPremium: a,
            needsDemo: c,
            analyticsLocation: o,
            onClick: u,
            onClose: m,
            setIsHovering: g,
        } = e,
        { value: h, label: j } = r;
    return (
        a
            ? ((n = (0, l.jsx)(d.i_, {
                  asContainer: !0,
                  spacing: 6,
                  body: O.intl.string(O.t.sEAnVH),
                  assetSize: 24,
                  asset: (0, l.jsx)(x.SrA, {
                      size: "md",
                      color: p.JX.PREMIUM_TIER_2,
                  }),
                  children: (0, l.jsx)("div", {
                      className: I.textContainer,
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      children: (0, l.jsx)(x.Text, {
                          variant: "text-xs/bold",
                          className: s()(I.selectorNitroText, I.enhancedSelectorNitroText),
                          children: j,
                      }),
                  }),
              })),
              (t = () =>
                  D({
                      analyticsLocation: o,
                      onClose: m,
                  })))
            : ((n = (0, l.jsx)("div", {
                  className: I.textContainer,
                  children: (0, l.jsx)(x.Text, {
                      variant: "text-xs/normal",
                      className: s()(I.selectorText, { [I.enhancedSelectorNitroText]: c }),
                      children: j,
                  }),
              })),
              (t = () => u(h))),
        {
            content: n,
            className: s()(I.selectorButton, {
                [I.selectorButtonSelected]: i,
                [I.perksDemo]: c,
                [I.premiumUpsell]: a,
            }),
            onClick: t,
        }
    );
}
function _(e) {
    let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: i,
            selectedFPS: s,
            onResolutionChange: a,
            onFPSChange: d,
            onPresetChange: p,
            targetGuildPremiumTier: _,
            captureDeviceSelected: w,
        } = e,
        M = (0, o.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return c()(null != e, "StreamSettings: user cannot be undefined"), e;
        }),
        L = (0, o.e7)([S.Z, Z.Z], () => Z.Z.getChannel(S.Z.getVoiceChannelId())),
        B = b.ZP.canStreamQuality(b.U2.MID, M),
        { location: G } = (0, h.O)(),
        z = (0, j.Zq)({ autoTrackExposure: !1 }),
        F = (0, f.B4)(),
        W = !B && !z,
        [V, H] = r.useState(!1),
        X = w ? T.z8 : T.WC,
        Y = R(A({}, G), { section: y.jXE.STREAM_SETTINGS }),
        q = (0, l.jsx)(m.hE, {
            buttons: X.map((e) =>
                U({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, C.Z)(t, e.value, s, M, _, L),
                    needsDemo: F && e.value !== T.ApplicationStreamResolutions.RESOLUTION_720,
                    analyticsLocation: Y,
                    onClick: () => a(e.value),
                    onClose: n,
                    setIsHovering: H,
                }),
            ),
        }),
        K = (0, l.jsx)(m.hE, {
            buttons: T.k0.map((e) =>
                U({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, C.Z)(t, i, e.value, M, _, L),
                    needsDemo: F && e.value === T.ApplicationStreamFPS.FPS_60,
                    analyticsLocation: Y,
                    onClick: () => d(e.value),
                    onClose: n,
                    setIsHovering: H,
                }),
            ),
        }),
        J = [
            {
                value: T.ApplicationStreamPresets.PRESET_VIDEO,
                label: O.intl.string(O.t.HcwHcx),
            },
            ...(w
                ? []
                : [
                      {
                          value: T.ApplicationStreamPresets.PRESET_DOCUMENTS,
                          label: O.intl.string(O.t["/RfohG"]),
                      },
                  ]),
            {
                value: T.ApplicationStreamPresets.PRESET_CUSTOM,
                label: O.intl.string(O.t["+eOtrD"]),
            },
        ],
        Q =
            t === T.ApplicationStreamPresets.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(v.Z, {
                              children: (0, l.jsx)(x.gNt, {
                                  label: O.intl.string(O.t.rHyPXg),
                                  children: (0, l.jsx)(x.Text, {
                                      variant: "text-xs/normal",
                                      children: O.intl.format(O.t["U+hmag"], { fps: s }),
                                  }),
                              }),
                          }),
                          W
                              ? (0, l.jsx)(P.Z, {
                                    message: O.intl.string(O.t.deDogB),
                                    onClose: n,
                                    openStreamUpsellModal: D,
                                })
                              : null,
                          F && (0, l.jsx)(P.c, {}),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.NIo, {
                              children: [
                                  (0, l.jsx)(x.gNt, {
                                      label: O.intl.string(O.t.rHyPXg),
                                      children: q,
                                  }),
                                  (0, l.jsx)(x.gNt, {
                                      label: O.intl.string(O.t.SkkeIt),
                                      children: K,
                                  }),
                              ],
                          }),
                          W
                              ? (0, l.jsx)(P.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: D,
                                    glow: V,
                                })
                              : null,
                          F && (0, l.jsx)(P.c, {}),
                      ],
                  });
    return (0, l.jsx)(
        g.Z,
        R(A({}, Y), {
            children: (0, l.jsx)("div", {
                className: E.modalContent,
                children: (0, l.jsxs)("div", {
                    className: I.qualitySettingsContainer,
                    children: [
                        (0, l.jsx)(u.y6, {
                            label: O.intl.string(O.t.ax4Fnc),
                            value: t,
                            className: k.marginTop8,
                            options: J,
                            onChange: (e) => p(e),
                        }),
                        Q,
                    ],
                }),
            }),
        }),
    );
}
