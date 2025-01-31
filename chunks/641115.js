t.d(n, { Z: () => w }), t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(512722),
    o = t.n(r),
    u = t(848246),
    c = t(442837),
    d = t(481060),
    m = t(410575),
    x = t(2052),
    g = t(924557),
    h = t(600164),
    v = t(436774),
    Z = t(933843),
    S = t(140465),
    j = t(1163),
    C = t(774026),
    f = t(592125),
    p = t(944486),
    N = t(594174),
    T = t(74538),
    E = t(451467),
    I = t(122186),
    P = t(37113),
    R = t(981631),
    k = t(474936),
    A = t(388032),
    b = t(456963),
    M = t(998139),
    D = t(232186);
function _(e) {
    let { analyticsLocation: n, onClose: i } = e;
    (0, d.ZDy)(async () => {
        let { default: e } = await t.e('28479').then(t.bind(t, 78865));
        return (t) =>
            (0, l.jsx)(e, {
                ...t,
                onCloseParent: i,
                analyticsSource: n
            });
    });
}
function L() {
    return (0, l.jsxs)('div', {
        className: M.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.SrA, {
                size: 'md',
                color: v.JX.PREMIUM_TIER_2,
                className: a()(M.premiumIcon)
            }),
            (0, l.jsx)(d.Text, {
                className: M.upsellText,
                variant: 'text-sm/medium',
                children: A.intl.string(A.t.sEAnVF)
            })
        ]
    });
}
function z(e) {
    let n,
        t,
        { type: i, selected: s, needsPremium: r, needsDemo: o, analyticsLocation: u, onClick: c, onClose: m, setIsHovering: x } = e,
        { value: g, label: h } = i;
    return (
        r
            ? ((n = (0, l.jsx)(d.DY3, {
                  tooltipClassName: M.tooltip,
                  spacing: 6,
                  'aria-label': A.intl.string(A.t.sEAnVF),
                  text: (0, l.jsx)(L, {}),
                  children: (0, l.jsx)('div', {
                      className: M.textContainer,
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: a()(M.selectorNitroText, M.enhancedSelectorNitroText),
                          children: h
                      })
                  })
              })),
              (t = () =>
                  _({
                      analyticsLocation: u,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: M.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: a()(M.selectorText, { [M.enhancedSelectorNitroText]: o }),
                      children: h
                  })
              })),
              (t = () => c(g))),
        {
            content: n,
            className: a()(M.selectorButton, {
                [M.selectorButtonSelected]: s,
                [M.perksDemo]: o,
                [M.premiumUpsell]: r
            }),
            onClick: t
        }
    );
}
function w(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: s, selectedFPS: a, onResolutionChange: r, onFPSChange: v, onPresetChange: L, targetGuildPremiumTier: w, captureDeviceSelected: U } = e,
        y = (0, c.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        G = (0, c.e7)([p.Z, f.Z], () => f.Z.getChannel(p.Z.getVoiceChannelId())),
        O = T.ZP.canStreamQuality(T.U2.MID, y),
        { location: W } = (0, x.O)(),
        F = (0, g.Zq)({ autoTrackExposure: !1 }),
        B = (0, T.I5)(y, k.p9.TIER_1);
    j.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: B
        }
    );
    let J = (0, S.B4)({ location: 'StreamSettings' }),
        V = N.default.getUser(null == G ? void 0 : G.hdStreamingBuyerId),
        Y = null != G && null != G.hdStreamingUntil && new Date(G.hdStreamingUntil) > new Date() && null != V,
        H = (0, Z.So)(u.q.STREAM_HIGH_QUALITY),
        X = (!O && !F) || H,
        [K, q] = i.useState(!1),
        Q = U ? P.z8 : P.WC,
        $ = {
            ...W,
            section: R.jXE.STREAM_SETTINGS
        },
        ee = (0, l.jsx)(d.hE2, {
            buttons: Q.map((e) =>
                z({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, E.Z)(t, e.value, a, y, w, G),
                    needsDemo: (H || J) && e.value !== P.LY.RESOLUTION_720,
                    analyticsLocation: $,
                    onClick: () => r(e.value),
                    onClose: n,
                    setIsHovering: q
                })
            )
        }),
        en = (0, l.jsx)(d.hE2, {
            buttons: P.k0.map((e) =>
                z({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, E.Z)(t, s, e.value, y, w, G),
                    needsDemo: (H || J) && e.value === P.ws.FPS_60,
                    analyticsLocation: $,
                    onClick: () => v(e.value),
                    onClose: n,
                    setIsHovering: q
                })
            )
        }),
        et = [
            {
                value: P.tI.PRESET_VIDEO,
                label: A.intl.string(A.t.HcwHc3)
            },
            ...(U
                ? []
                : [
                      {
                          value: P.tI.PRESET_DOCUMENTS,
                          label: A.intl.string(A.t['/RfohI'])
                      }
                  ]),
            {
                value: P.tI.PRESET_CUSTOM,
                label: A.intl.string(A.t['+eOtrK'])
            }
        ],
        el =
            t === P.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(h.Z, {
                              children: (0, l.jsx)(d.xJW, {
                                  title: A.intl.string(A.t.rHyPXl),
                                  titleClassName: b.formItemTitleSlim,
                                  className: M.documentModeGroup,
                                  children: (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: A.intl.format(A.t['U+hmam'], { fps: a })
                                  })
                              })
                          }),
                          X
                              ? (0, l.jsx)(I.Z, {
                                    message: A.intl.string(A.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: _
                                })
                              : null,
                          J && (0, l.jsx)(I.c, {}),
                          Y &&
                              null != G.hdStreamingUntil &&
                              (0, l.jsx)(C.Z, {
                                  streamingUntil: G.hdStreamingUntil,
                                  user: V,
                                  channel: G
                              })
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(h.Z, {
                              children: [
                                  (0, l.jsx)(d.xJW, {
                                      title: A.intl.string(A.t.rHyPXl),
                                      className: M.settingsGroup,
                                      titleClassName: b.formItemTitleSlim,
                                      children: ee
                                  }),
                                  (0, l.jsx)(d.xJW, {
                                      title: A.intl.string(A.t.SkkeIi),
                                      className: M.settingsGroup,
                                      titleClassName: b.formItemTitleSlim,
                                      children: en
                                  })
                              ]
                          }),
                          X
                              ? (0, l.jsx)(I.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: _,
                                    glow: K
                                })
                              : null,
                          J && (0, l.jsx)(I.c, {}),
                          Y &&
                              null != G.hdStreamingUntil &&
                              (0, l.jsx)(C.Z, {
                                  streamingUntil: null == G ? void 0 : G.hdStreamingUntil,
                                  user: V,
                                  channel: G
                              })
                      ]
                  });
    return (0, l.jsx)(m.Z, {
        ...$,
        children: (0, l.jsx)(d.xJW, {
            title: A.intl.string(A.t.ax4FnZ),
            titleClassName: b.formItemTitle,
            className: b.modalContent,
            children: (0, l.jsxs)('div', {
                className: M.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(d.q4e, {
                        value: t,
                        className: D.marginTop8,
                        options: et,
                        onChange: (e) => L(e)
                    }),
                    el
                ]
            })
        })
    });
}
