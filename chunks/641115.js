t.d(n, { Z: () => U }), t(388685);
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(681715),
    d = t(755721),
    m = t(481060),
    x = t(410575),
    g = t(2052),
    h = t(924557),
    j = t(600164),
    v = t(436774),
    p = t(140465),
    f = t(592125),
    Z = t(944486),
    S = t(594174),
    N = t(74538),
    b = t(451467),
    C = t(122186),
    P = t(37113),
    T = t(981631),
    y = t(388032),
    O = t(542257),
    E = t(381994),
    I = t(197571);
function k(e) {
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
function A(e, n) {
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
function R(e) {
    let { analyticsLocation: n } = e;
    (0, m.ZDy)(async () => {
        let { default: e } = await t.e("28479").then(t.bind(t, 78865));
        return (t) => (0, l.jsx)(e, A(k({}, t), { analyticsSource: n }));
    });
}
function D(e) {
    let n,
        t,
        {
            type: r,
            selected: i,
            needsPremium: a,
            needsDemo: c,
            analyticsLocation: o,
            onClick: d,
            onClose: x,
            setIsHovering: g,
        } = e,
        { value: h, label: j } = r;
    return (
        a
            ? ((n = (0, l.jsx)(u.i_, {
                  asContainer: !0,
                  spacing: 6,
                  body: y.intl.string(y.t.sEAnVH),
                  assetSize: 24,
                  asset: (0, l.jsx)(m.SrA, {
                      size: "md",
                      color: v.JX.PREMIUM_TIER_2,
                  }),
                  children: (0, l.jsx)("div", {
                      className: E.textContainer,
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      children: (0, l.jsx)(m.Text, {
                          variant: "text-xs/bold",
                          className: s()(E.selectorNitroText, E.enhancedSelectorNitroText),
                          children: j,
                      }),
                  }),
              })),
              (t = () =>
                  R({
                      analyticsLocation: o,
                      onClose: x,
                  })))
            : ((n = (0, l.jsx)("div", {
                  className: E.textContainer,
                  children: (0, l.jsx)(m.Text, {
                      variant: "text-xs/normal",
                      className: s()(E.selectorText, { [E.enhancedSelectorNitroText]: c }),
                      children: j,
                  }),
              })),
              (t = () => d(h))),
        {
            content: n,
            className: s()(E.selectorButton, {
                [E.selectorButtonSelected]: i,
                [E.perksDemo]: c,
                [E.premiumUpsell]: a,
            }),
            onClick: t,
        }
    );
}
function U(e) {
    let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: i,
            selectedFPS: s,
            onResolutionChange: a,
            onFPSChange: u,
            onPresetChange: v,
            targetGuildPremiumTier: U,
            captureDeviceSelected: _,
        } = e,
        w = (0, o.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return c()(null != e, "StreamSettings: user cannot be undefined"), e;
        }),
        M = (0, o.e7)([Z.Z, f.Z], () => f.Z.getChannel(Z.Z.getVoiceChannelId())),
        L = N.ZP.canStreamQuality(N.U2.MID, w),
        { location: B } = (0, g.O)(),
        G = (0, h.Zq)({ autoTrackExposure: !1 }),
        z = (0, p.B4)(),
        F = !L && !G,
        [W, V] = r.useState(!1),
        H = _ ? P.z8 : P.WC,
        X = A(k({}, B), { section: T.jXE.STREAM_SETTINGS }),
        Y = (0, l.jsx)(d.hE, {
            buttons: H.map((e) =>
                D({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, b.Z)(t, e.value, s, w, U, M),
                    needsDemo: z && e.value !== P.ApplicationStreamResolutions.RESOLUTION_720,
                    analyticsLocation: X,
                    onClick: () => a(e.value),
                    onClose: n,
                    setIsHovering: V,
                }),
            ),
        }),
        q = (0, l.jsx)(d.hE, {
            buttons: P.k0.map((e) =>
                D({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, b.Z)(t, i, e.value, w, U, M),
                    needsDemo: z && e.value === P.ApplicationStreamFPS.FPS_60,
                    analyticsLocation: X,
                    onClick: () => u(e.value),
                    onClose: n,
                    setIsHovering: V,
                }),
            ),
        }),
        K = [
            {
                value: P.ApplicationStreamPresets.PRESET_VIDEO,
                label: y.intl.string(y.t.HcwHcx),
            },
            ...(_
                ? []
                : [
                      {
                          value: P.ApplicationStreamPresets.PRESET_DOCUMENTS,
                          label: y.intl.string(y.t["/RfohG"]),
                      },
                  ]),
            {
                value: P.ApplicationStreamPresets.PRESET_CUSTOM,
                label: y.intl.string(y.t["+eOtrD"]),
            },
        ],
        J =
            t === P.ApplicationStreamPresets.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(j.Z, {
                              children: (0, l.jsx)(m.gNt, {
                                  label: y.intl.string(y.t.rHyPXg),
                                  children: (0, l.jsx)(m.Text, {
                                      variant: "text-xs/normal",
                                      children: y.intl.format(y.t["U+hmag"], { fps: s }),
                                  }),
                              }),
                          }),
                          F
                              ? (0, l.jsx)(C.Z, {
                                    message: y.intl.string(y.t.deDogB),
                                    onClose: n,
                                    openStreamUpsellModal: R,
                                })
                              : null,
                          z && (0, l.jsx)(C.c, {}),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(m.NIo, {
                              children: [
                                  (0, l.jsx)(m.gNt, {
                                      label: y.intl.string(y.t.rHyPXg),
                                      children: Y,
                                  }),
                                  (0, l.jsx)(m.gNt, {
                                      label: y.intl.string(y.t.SkkeIt),
                                      children: q,
                                  }),
                              ],
                          }),
                          F
                              ? (0, l.jsx)(C.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: R,
                                    glow: W,
                                })
                              : null,
                          z && (0, l.jsx)(C.c, {}),
                      ],
                  });
    return (0, l.jsx)(
        x.Z,
        A(k({}, X), {
            children: (0, l.jsx)("div", {
                className: O.modalContent,
                children: (0, l.jsxs)("div", {
                    className: E.qualitySettingsContainer,
                    children: [
                        (0, l.jsx)(m.q4e, {
                            label: y.intl.string(y.t.ax4Fnc),
                            value: t,
                            className: I.marginTop8,
                            options: K,
                            onChange: (e) => v(e),
                        }),
                        J,
                    ],
                }),
            }),
        }),
    );
}
