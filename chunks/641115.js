t.d(n, { Z: () => w }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(755721),
    d = t(481060),
    m = t(410575),
    x = t(2052),
    g = t(924557),
    h = t(600164),
    j = t(436774),
    p = t(140465),
    v = t(592125),
    f = t(944486),
    Z = t(594174),
    S = t(74538),
    N = t(451467),
    C = t(122186),
    b = t(37113),
    P = t(981631),
    T = t(388032),
    I = t(79985),
    E = t(763021),
    O = t(10198);
function y(e) {
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
function k(e, n) {
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
function A(e) {
    let { analyticsLocation: n } = e;
    (0, d.ZDy)(async () => {
        let { default: e } = await t.e("28479").then(t.bind(t, 78865));
        return (t) => (0, l.jsx)(e, k(y({}, t), { analyticsSource: n }));
    });
}
function R() {
    return (0, l.jsxs)("div", {
        className: E.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.SrA, {
                size: "md",
                color: j.JX.PREMIUM_TIER_2,
                className: E.premiumIcon,
            }),
            (0, l.jsx)(d.Text, {
                className: E.upsellText,
                variant: "text-sm/medium",
                children: T.intl.string(T.t.sEAnVF),
            }),
        ],
    });
}
function M(e) {
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
            setIsHovering: x,
        } = e,
        { value: g, label: h } = r;
    return (
        a
            ? ((n = (0, l.jsx)(d.jSM, {
                  tooltipClassName: E.tooltip,
                  spacing: 6,
                  "aria-label": T.intl.string(T.t.sEAnVF),
                  text: (0, l.jsx)(R, {}),
                  children: (0, l.jsx)("div", {
                      className: E.textContainer,
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/bold",
                          className: s()(E.selectorNitroText, E.enhancedSelectorNitroText),
                          children: h,
                      }),
                  }),
              })),
              (t = () =>
                  A({
                      analyticsLocation: o,
                      onClose: m,
                  })))
            : ((n = (0, l.jsx)("div", {
                  className: E.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      className: s()(E.selectorText, { [E.enhancedSelectorNitroText]: c }),
                      children: h,
                  }),
              })),
              (t = () => u(g))),
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
function w(e) {
    let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: i,
            selectedFPS: s,
            onResolutionChange: a,
            onFPSChange: j,
            onPresetChange: R,
            targetGuildPremiumTier: w,
            captureDeviceSelected: U,
        } = e,
        D = (0, o.e7)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return c()(null != e, "StreamSettings: user cannot be undefined"), e;
        }),
        _ = (0, o.e7)([f.Z, v.Z], () => v.Z.getChannel(f.Z.getVoiceChannelId())),
        z = S.ZP.canStreamQuality(S.U2.MID, D),
        { location: L } = (0, x.O)(),
        G = (0, g.Zq)({ autoTrackExposure: !1 }),
        B = (0, p.B4)(),
        F = !z && !G,
        [W, V] = r.useState(!1),
        Y = U ? b.z8 : b.WC,
        q = k(y({}, L), { section: P.jXE.STREAM_SETTINGS }),
        H = (0, l.jsx)(u.hE, {
            buttons: Y.map((e) =>
                M({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, N.Z)(t, e.value, s, D, w, _),
                    needsDemo: B && e.value !== b.ApplicationStreamResolutions.RESOLUTION_720,
                    analyticsLocation: q,
                    onClick: () => a(e.value),
                    onClose: n,
                    setIsHovering: V,
                }),
            ),
        }),
        X = (0, l.jsx)(u.hE, {
            buttons: b.k0.map((e) =>
                M({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, N.Z)(t, i, e.value, D, w, _),
                    needsDemo: B && e.value === b.ApplicationStreamFPS.FPS_60,
                    analyticsLocation: q,
                    onClick: () => j(e.value),
                    onClose: n,
                    setIsHovering: V,
                }),
            ),
        }),
        K = [
            {
                value: b.ApplicationStreamPresets.PRESET_VIDEO,
                label: T.intl.string(T.t.HcwHc3),
            },
            ...(U
                ? []
                : [
                      {
                          value: b.ApplicationStreamPresets.PRESET_DOCUMENTS,
                          label: T.intl.string(T.t["/RfohI"]),
                      },
                  ]),
            {
                value: b.ApplicationStreamPresets.PRESET_CUSTOM,
                label: T.intl.string(T.t["+eOtrK"]),
            },
        ],
        J =
            t === b.ApplicationStreamPresets.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(h.Z, {
                              children: (0, l.jsx)(d.gNt, {
                                  label: T.intl.string(T.t.rHyPXl),
                                  children: (0, l.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      children: T.intl.format(T.t["U+hmam"], { fps: s }),
                                  }),
                              }),
                          }),
                          F
                              ? (0, l.jsx)(C.Z, {
                                    message: T.intl.string(T.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: A,
                                })
                              : null,
                          B && (0, l.jsx)(C.c, {}),
                      ],
                  })
                : (0, l.jsxs)(d.Kqy, {
                      gap: 16,
                      children: [
                          (0, l.jsxs)(d.NIo, {
                              children: [
                                  (0, l.jsx)(d.gNt, {
                                      label: T.intl.string(T.t.rHyPXl),
                                      children: H,
                                  }),
                                  (0, l.jsx)(d.gNt, {
                                      label: T.intl.string(T.t.SkkeIi),
                                      children: X,
                                  }),
                              ],
                          }),
                          F
                              ? (0, l.jsx)(C.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: A,
                                    glow: W,
                                })
                              : null,
                          B && (0, l.jsx)(C.c, {}),
                      ],
                  });
    return (0, l.jsx)(
        m.Z,
        k(y({}, q), {
            children: (0, l.jsx)("div", {
                className: I.modalContent,
                children: (0, l.jsxs)("div", {
                    className: E.qualitySettingsContainer,
                    children: [
                        (0, l.jsx)(d.q4e, {
                            label: T.intl.string(T.t.ax4FnZ),
                            value: t,
                            className: O.marginTop8,
                            options: K,
                            onChange: (e) => R(e),
                        }),
                        J,
                    ],
                }),
            }),
        }),
    );
}
