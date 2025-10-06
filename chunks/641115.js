n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
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
    g = n(436774),
    x = n(140465),
    _ = n(592125),
    v = n(944486),
    j = n(594174),
    b = n(74538),
    S = n(451467),
    C = n(122186),
    y = n(37113),
    O = n(981631),
    w = n(388032),
    Z = n(79985),
    I = n(763021),
    N = n(10198);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    (0, u.ZDy)(async () => {
        let { default: e } = await n.e("28479").then(n.bind(n, 78865));
        return (n) => (0, r.jsx)(e, T(P({}, n), { analyticsSource: t }));
    });
}
function R() {
    return (0, r.jsxs)("div", {
        className: I.toolTipTextContainer,
        children: [
            (0, r.jsx)(u.SrA, {
                size: "md",
                color: g.JX.PREMIUM_TIER_2,
                className: I.premiumIcon,
            }),
            (0, r.jsx)(u.Text, {
                className: I.upsellText,
                variant: "text-sm/medium",
                children: w.intl.string(w.t.sEAnVF),
            }),
        ],
    });
}
function A(e) {
    let t,
        n,
        {
            type: i,
            selected: l,
            needsPremium: o,
            needsDemo: a,
            analyticsLocation: c,
            onClick: d,
            onClose: f,
            setIsHovering: m,
        } = e,
        { value: h, label: p } = i;
    return (
        o
            ? ((t = (0, r.jsx)(u.DY3, {
                  tooltipClassName: I.tooltip,
                  spacing: 6,
                  "aria-label": w.intl.string(w.t.sEAnVF),
                  text: (0, r.jsx)(R, {}),
                  children: (0, r.jsx)("div", {
                      className: I.textContainer,
                      onMouseEnter: () => m(!0),
                      onMouseLeave: () => m(!1),
                      children: (0, r.jsx)(u.Text, {
                          variant: "text-xs/bold",
                          className: s()(I.selectorNitroText, I.enhancedSelectorNitroText),
                          children: p,
                      }),
                  }),
              })),
              (n = () =>
                  E({
                      analyticsLocation: c,
                      onClose: f,
                  })))
            : ((t = (0, r.jsx)("div", {
                  className: I.textContainer,
                  children: (0, r.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      className: s()(I.selectorText, { [I.enhancedSelectorNitroText]: a }),
                      children: p,
                  }),
              })),
              (n = () => d(h))),
        {
            content: t,
            className: s()(I.selectorButton, {
                [I.selectorButtonSelected]: l,
                [I.perksDemo]: a,
                [I.premiumUpsell]: o,
            }),
            onClick: n,
        }
    );
}
function k(e) {
    let {
            onClose: t,
            selectedPreset: n,
            selectedResolution: l,
            selectedFPS: s,
            onResolutionChange: o,
            onFPSChange: g,
            onPresetChange: R,
            targetGuildPremiumTier: k,
            captureDeviceSelected: M,
        } = e,
        D = (0, c.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "StreamSettings: user cannot be undefined"), e;
        }),
        L = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())),
        B = b.ZP.canStreamQuality(b.U2.MID, D),
        { location: G } = (0, m.O)(),
        U = (0, h.Zq)({ autoTrackExposure: !1 }),
        W = (0, x.B4)(),
        z = !B && !U,
        [F, H] = i.useState(!1),
        V = M ? y.z8 : y.WC,
        Y = T(P({}, G), { section: O.jXE.STREAM_SETTINGS }),
        J = (0, r.jsx)(d.hE, {
            buttons: V.map((e) =>
                A({
                    type: e,
                    selected: e.value === l,
                    needsPremium: !(0, S.Z)(n, e.value, s, D, k, L),
                    needsDemo: W && e.value !== y.LY.RESOLUTION_720,
                    analyticsLocation: Y,
                    onClick: () => o(e.value),
                    onClose: t,
                    setIsHovering: H,
                }),
            ),
        }),
        X = (0, r.jsx)(d.hE, {
            buttons: y.k0.map((e) =>
                A({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, S.Z)(n, l, e.value, D, k, L),
                    needsDemo: W && e.value === y.ws.FPS_60,
                    analyticsLocation: Y,
                    onClick: () => g(e.value),
                    onClose: t,
                    setIsHovering: H,
                }),
            ),
        }),
        K = [
            {
                value: y.tI.PRESET_VIDEO,
                label: w.intl.string(w.t.HcwHc3),
            },
            ...(M
                ? []
                : [
                      {
                          value: y.tI.PRESET_DOCUMENTS,
                          label: w.intl.string(w.t["/RfohI"]),
                      },
                  ]),
            {
                value: y.tI.PRESET_CUSTOM,
                label: w.intl.string(w.t["+eOtrK"]),
            },
        ],
        q =
            n === y.tI.PRESET_DOCUMENTS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.Z, {
                              children: (0, r.jsx)(u.xJW, {
                                  title: w.intl.string(w.t.rHyPXl),
                                  titleClassName: Z.formItemTitleSlim,
                                  className: I.documentModeGroup,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      children: w.intl.format(w.t["U+hmam"], { fps: s }),
                                  }),
                              }),
                          }),
                          z
                              ? (0, r.jsx)(C.Z, {
                                    message: w.intl.string(w.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: E,
                                })
                              : null,
                          W && (0, r.jsx)(C.c, {}),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(p.Z, {
                              children: [
                                  (0, r.jsx)(u.xJW, {
                                      title: w.intl.string(w.t.rHyPXl),
                                      className: I.settingsGroup,
                                      titleClassName: Z.formItemTitleSlim,
                                      children: J,
                                  }),
                                  (0, r.jsx)(u.xJW, {
                                      title: w.intl.string(w.t.SkkeIi),
                                      className: I.settingsGroup,
                                      titleClassName: Z.formItemTitleSlim,
                                      children: X,
                                  }),
                              ],
                          }),
                          z
                              ? (0, r.jsx)(C.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: E,
                                    glow: F,
                                })
                              : null,
                          W && (0, r.jsx)(C.c, {}),
                      ],
                  });
    return (0, r.jsx)(
        f.Z,
        T(P({}, Y), {
            children: (0, r.jsx)(u.xJW, {
                title: w.intl.string(w.t.ax4FnZ),
                titleClassName: Z.formItemTitle,
                className: Z.modalContent,
                children: (0, r.jsxs)("div", {
                    className: I.qualitySettingsContainer,
                    children: [
                        (0, r.jsx)(u.q4e, {
                            value: n,
                            className: N.marginTop8,
                            options: K,
                            onChange: (e) => R(e),
                        }),
                        q,
                    ],
                }),
            }),
        }),
    );
}
