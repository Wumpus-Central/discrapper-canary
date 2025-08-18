n.d(t, { Z: () => et }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    m = n(230711),
    p = n(419363),
    g = n(857595),
    h = n(607070),
    f = n(299363),
    b = n(627845),
    x = n(906732),
    _ = n(675997),
    j = n(377171),
    E = n(313201),
    C = n(243778),
    O = n(594928),
    v = n(829716),
    S = n(786761),
    T = n(3148),
    N = n(739566),
    I = n(753206),
    y = n(440849),
    A = n(921801),
    P = n(196051),
    R = n(441729),
    D = n(626135),
    Z = n(63063),
    w = n(695346),
    k = n(263937),
    L = n(996073),
    B = n(526761),
    M = n(726985),
    U = n(981631),
    V = n(611480),
    G = n(653477),
    F = n(388032),
    H = n(693450),
    z = n(953752),
    W = n(197571),
    Y = n(328756);
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = (0, E.hQ)(),
    J = (0, E.hQ)(),
    Q = (0, E.hQ)(),
    $ = o().debounce((e) => {
        (0, g.o2)(e);
    }, 250),
    ee = o().debounce((e) => {
        (0, P.Ct)(e);
    }, 250);
function et(e) {
    let t = f.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = _.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        r = O.f.useExperiment({ location: "UserSettingsAccessibility" }).enabled;
    return (0, i.jsxs)(u.hjN, {
        tag: u.RB0.H1,
        title: F.intl.string(F.t.G0neg4),
        children: [
            (0, i.jsx)("div", {
                className: W.marginBottom20,
                children: (0, i.jsx)(en, {}),
            }),
            t
                ? (0, i.jsx)(A.F, {
                      setting: M.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, i.jsx)(ei, {}),
                  })
                : null,
            (0, i.jsxs)(A.F, {
                setting: M.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(er, {}), (0, i.jsx)(u.$i$, {})],
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(es, {}),
            }),
            n
                ? (0, i.jsx)(A.F, {
                      setting: M.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, i.jsx)(ea, {}),
                  })
                : null,
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(el, {}),
            }),
            r &&
                (0, i.jsx)(A.F, {
                    setting: M.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, i.jsx)(eo, {}),
                }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(ec, {}),
            }),
            (0, b.b)()
                ? (0, i.jsxs)(A.F, {
                      setting: M.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(ed, {}), " "],
                  })
                : null,
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)(eu, {}),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(em, {}),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(ep, {}),
            }),
            (0, i.jsx)(eg, {}),
            (0, i.jsxs)(A.F, {
                setting: M.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(u.$i$, { className: W.marginTop20 }),
                    (0, i.jsx)(u.Text, {
                        className: W.marginTop20,
                        variant: "text-md/normal",
                        children: F.intl.format(F.t.DHpTjY, {
                            onAppearanceClick() {
                                m.Z.open(U.oAB.APPEARANCE);
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function en() {
    let e = w.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, S.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: "1337",
                            content: F.intl.formatToPlainString(F.t.bB80LC, {
                                previewLink: "https://discord.com/accessibility",
                            }),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(0),
                    },
                ),
            );
            return (e.colorString = "green"), e;
        });
    return (0, i.jsx)(u.Rny, {
        children: (0, i.jsxs)(u.Zbd, {
            className: z.preview,
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("div", {
                    className: z.previewHeader,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: F.intl.string(F.t["2RHHg4"]),
                        }),
                        (0, i.jsx)("div", {
                            className: z.previewAvatars,
                            children: [U.Skl.ONLINE, U.Skl.DND, U.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    u.Xo$,
                                    {
                                        "aria-label": F.intl.string(F.t.lqaIxM),
                                        src: Y,
                                        size: u.EFr.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: z.previewMessage,
                    children: (0, i.jsx)(I.Z, {
                        compact: e,
                        author: q(K({}, (0, N.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ei() {
    let e = (0, c.e7)([h.Z], () => h.Z.isHighContrastModeEnabled);
    return (0, i.jsx)(u.hjN, {
        children: (0, i.jsx)(u.j7V, {
            value: e,
            onChange: function (e) {
                (0, g.vW)(e ? h.X.HIGH : h.X.DEFAULT);
            },
            note: F.intl.string(F.t["v2qF8/"]),
            children: (0, i.jsxs)(u.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    F.intl.string(F.t.aZlePj),
                    " ",
                    (0, i.jsx)(C.ZP, {
                        contentTypes: [d.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === d.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, i.jsx)(u.IGR, {
                                      text: F.intl.string(F.t.y2b7CA),
                                      color: j.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                ],
            }),
        }),
    });
}
function er() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors,
    }));
    return (0, i.jsxs)(u.hjN, {
        className: W.marginTop20,
        children: [
            (0, i.jsx)(u.vwX, {
                id: X,
                className: W.marginBottom8,
                children: F.intl.string(F.t["5PWWCQ"]),
            }),
            (0, i.jsx)(u.R94, {
                id: J,
                type: u.R94.Types.DESCRIPTION,
                className: W.marginBottom20,
                children: F.intl.string(F.t["0PbE/P"]),
            }),
            (0, i.jsx)(u.iRW, {
                "aria-labelledby": X,
                "aria-describedby": J,
                markers: U.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: $,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(u.j7V, {
                    hideBorder: !0,
                    className: a()(W.marginTop20, W.marginBottom20),
                    value: t,
                    onChange: g.f1,
                    note: F.intl.string(F.t.nlAOER),
                    children: F.intl.string(F.t.bQCodH),
                }),
            }),
        ],
    });
}
function es() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(u.xJW, {
        className: W.marginTop20,
        children: (0, i.jsx)(u.j7V, {
            note: F.intl.string(F.t["72i5GB"]),
            value: e,
            onChange: function () {
                (0, g.gs)(!e);
            },
            children: F.intl.string(F.t.OLZFBw),
        }),
    });
}
function ea() {
    let e = (0, c.e7)([h.Z], () => {
        var e;
        return null == (e = h.Z.enableCustomCursor) || e;
    });
    return (0, i.jsx)(u.xJW, {
        className: W.marginTop20,
        children: (0, i.jsx)(u.j7V, {
            note: F.intl.string(F.t.nNZ1T0),
            value: e,
            onChange: () => (0, g.HU)(!e),
            children: F.intl.string(F.t["+IsihY"]),
        }),
    });
}
function el() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.xJW, {
                title: F.intl.string(F.t.uSOPWl),
                className: W.marginTop20,
                children: [
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: W.marginBottom8,
                        children: F.intl.string(F.t["86hjzc"]),
                    }),
                    (0, i.jsx)(u.FXm, {
                        options: [
                            {
                                name: F.intl.string(F.t.YEOEi4),
                                value: "username",
                            },
                            {
                                name: F.intl.string(F.t.mQaro6),
                                value: "dot",
                            },
                            {
                                name: F.intl.string(F.t.Ji2EVF),
                                value: "hidden",
                            },
                        ],
                        onChange: function (e) {
                            (0, g.u1)(e.value);
                        },
                        value: e,
                    }),
                ],
            }),
            (0, i.jsx)(u.$i$, { className: W.marginTop20 }),
        ],
    });
}
function eo() {
    let e = (0, c.e7)([h.Z], () => h.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, x.ZP)();
    return (0, i.jsx)(u.xJW, {
        className: W.marginTop20,
        children: (0, i.jsx)(u.j7V, {
            value: e,
            onChange: function (e) {
                (0, g.X2)(e), D.default.track(U.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
            },
            note: F.intl.format(H.default.L8U56u, {
                onClickOpenModal() {
                    (0, v.I)({ analyticsLocations: t });
                },
            }),
            children: F.intl.string(H.default["2gFUEx"]),
        }),
    });
}
function ec() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, L.Z)(t, B.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(u.xJW, {
            ref: t,
            title: F.intl.string(F.t.BT8Bmp),
            className: a()(W.marginTop20, z.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(u.j7V, {
                    note: F.intl.format(F.t.u6UjrK, {
                        onThemeClick() {
                            m.Z.open(U.oAB.APPEARANCE);
                        },
                    }),
                    className: W.marginTop20,
                    value: e,
                    onChange: g.Uv,
                    children: F.intl.string(F.t["sSY+mJ"]),
                }),
            }),
        })
    );
}
function ed() {
    let [e] = (0, c.Wu)([h.Z], () => [h.Z.syncForcedColors, h.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)),
            t !== e && (s.current = setTimeout(() => (0, g.qz)(t), 150));
    }, [t, e]);
    let a = F.intl.format(F.t.GwEVEx, { learnMoreLink: Z.Z.getArticleURL(U.BhN.FORCED_COLORS) });
    return (0, i.jsx)(u.xJW, {
        title: F.intl.string(F.t.TYyfOz),
        className: W.marginTop20,
        children: (0, i.jsx)(A.F, {
            setting: M.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(u.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: F.intl.string(F.t.cguieX),
            }),
        }),
    });
}
function eu() {
    let e = w.QK.useSetting(),
        t = w.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: d,
        } = (0, c.cj)([h.Z, k.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: k.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: k.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        m = r.useRef(null);
    (0, L.Z)(m, B.rP.REDUCED_MOTION);
    let p = r.useCallback(
            (e, t) => {
                (0, g.Zt)(t ? "auto" : l);
            },
            [l],
        ),
        f = r.useCallback((e) => {
            (0, g.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, i.jsxs)(u.xJW, {
        ref: m,
        title: F.intl.string(F.t.e3TR1d),
        className: a()(W.marginTop20, z.reducedMotion),
        children: [
            (0, i.jsx)(u.R94, {
                type: u.R94.Types.DESCRIPTION,
                className: W.marginBottom8,
                children: F.intl.format(F.t["2l9U2t"], { helpdeskArticle: Z.Z.getArticleURL(U.BhN.REDUCED_MOTION) }),
            }),
            (0, i.jsx)(u.XZJ, {
                className: a()(W.marginTop20, W.marginBottom20),
                value: "auto" === s,
                shape: u.XZJ.Shapes.BOX,
                type: u.XZJ.Types.INVERTED,
                onChange: p,
                children: (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children: F.intl.string(F.t["+Dx+HB"]),
                }),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(u.j7V, {
                    value: n,
                    onChange: f,
                    children: F.intl.string(F.t.b3XBzs),
                }),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(u.j7V, {
                    className: W.marginBottom20,
                    value: e,
                    note: null != o ? (0, y.Z)(o) : void 0,
                    onChange: w.QK.updateSetting,
                    children: F.intl.string(F.t.Iayoh4),
                }),
            }),
            (0, i.jsx)(A.F, {
                setting: M.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(u.j7V, {
                    className: W.marginBottom20,
                    value: t,
                    note: null != d ? (0, y.Z)(d) : void 0,
                    onChange: w.Yk.updateSetting,
                    children: F.intl.string(F.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function em() {
    let e = w.Wp.useSetting(),
        t = (0, c.e7)([k.Z], () => k.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = r.useCallback((e) => {
            w.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(u.xJW, {
        className: W.marginTop20,
        title: F.intl.string(F.t["6NtAuL"]),
        children: [
            (0, i.jsx)(u.R94, {
                type: u.R94.Types.DESCRIPTION,
                className: W.marginBottom8,
                children: null != t ? (0, y.Z)(t) : F.intl.string(F.t.GRa6U1),
            }),
            (0, i.jsx)(u.FXm, {
                options: [
                    {
                        name: F.intl.string(F.t["Xp+X2d"]),
                        value: V.yr.ALWAYS_ANIMATE,
                    },
                    {
                        name: F.intl.string(F.t.IlLT7e),
                        desc: F.intl.string(F.t.bIW9Tk),
                        value: V.yr.ANIMATE_ON_INTERACTION,
                    },
                    {
                        name: F.intl.string(F.t.IGu8x8),
                        value: V.yr.NEVER_ANIMATE,
                    },
                ],
                onChange: n,
                value: e,
            }),
        ],
    });
}
function ep() {
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = w.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, L.Z)(n, B.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(u.xJW, {
            ref: n,
            className: W.marginTop20,
            children: [
                (0, i.jsx)(u.vwX, {
                    className: W.marginBottom8,
                    children: F.intl.string(F.t.onqU6u),
                }),
                (0, i.jsx)(A.F, {
                    setting: M.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(u.j7V, {
                        className: W.marginTop20,
                        value: e,
                        onChange: g.eN,
                        children: F.intl.string(F.t["3Fztn5"]),
                    }),
                }),
                (0, i.jsx)(A.F, {
                    setting: M.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(u.j7V, {
                        className: W.marginTop8,
                        value: t,
                        note: F.intl.string(F.t.Q7wgHR),
                        onChange: (e) => {
                            D.default.track(U.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: U.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                w.dN.updateSetting(e);
                        },
                        children: F.intl.string(F.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function eg() {
    let e = w.OW.useSetting(),
        t = (0, c.e7)([R.Z], () => R.Z.speechRate),
        [n, s] = r.useState(!1);
    return p.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.F, {
                      setting: M.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(u.xJW, {
                          className: W.marginTop20,
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: W.marginBottom8,
                                  children: F.intl.string(F.t.VpSKeH),
                              }),
                              (0, i.jsx)(A.F, {
                                  setting: M.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(u.j7V, {
                                      className: W.marginTop20,
                                      value: e,
                                      onChange: w.OW.updateSetting,
                                      children: F.intl.string(F.t.qvTIwc),
                                  }),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(A.F, {
                      setting: M.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(u.xJW, {
                          className: W.marginTop20,
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  id: Q,
                                  className: W.marginBottom20,
                                  children: F.intl.string(F.t.lsW5Eh),
                              }),
                              (0, i.jsx)("div", {
                                  className: z.ttsPreviewWrapper,
                                  children: (0, i.jsx)(u.zxk, {
                                      icon: n ? u.fpf : u.o1U,
                                      text: F.intl.string(F.t.hymc8v),
                                      onClick: () => {
                                          if (n) {
                                              (0, P.NB)(), s(!1);
                                              return;
                                          }
                                          (0, P.cP)(
                                              F.intl.string(F.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1),
                                          ),
                                              s(!0);
                                      },
                                      "aria-label": ""
                                          .concat(F.intl.string(F.t.hymc8v), " ")
                                          .concat(F.intl.string(F.t.lsW5Eh)),
                                  }),
                              }),
                              (0, i.jsx)(u.iRW, {
                                  markers: G.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: ee,
                                  onValueRender: (e) => "x".concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)("span", {
                                                className: z.ttsSliderMarker,
                                                children: F.intl.string(F.t["493lwc"]),
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)("span", {
                                                  className: z.ttsSliderMarker,
                                                  children: F.intl.string(F.t.ZSZEdX),
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)("span", { children: "x1.0" })
                                              : e % 1 == 0
                                                ? ""
                                                : void 0,
                                  "aria-labelledby": Q,
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
