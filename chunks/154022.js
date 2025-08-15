n.d(t, { Z: () => Q }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    p = n(857595),
    g = n(607070),
    h = n(299363),
    f = n(627845),
    b = n(906732),
    x = n(675997),
    _ = n(313201),
    j = n(594928),
    E = n(829716),
    C = n(786761),
    O = n(3148),
    v = n(739566),
    S = n(753206),
    T = n(440849),
    N = n(921801),
    I = n(196051),
    y = n(441729),
    A = n(626135),
    P = n(63063),
    R = n(695346),
    D = n(263937),
    Z = n(996073),
    w = n(526761),
    k = n(726985),
    L = n(981631),
    B = n(611480),
    M = n(653477),
    U = n(388032),
    V = n(693450),
    G = n(953752),
    F = n(197571),
    H = n(328756);
function z(e) {
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
function W(e, t) {
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
let Y = (0, _.hQ)(),
    K = (0, _.hQ)(),
    q = (0, _.hQ)(),
    X = o().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    J = o().debounce((e) => {
        (0, I.Ct)(e);
    }, 250);
function Q(e) {
    let t = h.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = x.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        r = j.f.useExperiment({ location: "UserSettingsAccessibility" }).enabled;
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: U.intl.string(U.t.G0neg4),
        children: [
            (0, i.jsx)("div", {
                className: F.marginBottom20,
                children: (0, i.jsx)($, {}),
            }),
            t
                ? (0, i.jsx)(N.F, {
                      setting: k.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, i.jsx)(ee, {}),
                  })
                : null,
            (0, i.jsxs)(N.F, {
                setting: k.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(et, {}), (0, i.jsx)(d.$i$, {})],
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(en, {}),
            }),
            n
                ? (0, i.jsx)(N.F, {
                      setting: k.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, i.jsx)(ei, {}),
                  })
                : null,
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(er, {}),
            }),
            r &&
                (0, i.jsx)(N.F, {
                    setting: k.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, i.jsx)(es, {}),
                }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(ea, {}),
            }),
            (0, f.b)()
                ? (0, i.jsxs)(N.F, {
                      setting: k.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(el, {}), " "],
                  })
                : null,
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)(eo, {}),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ec, {}),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(ed, {}),
            }),
            (0, i.jsx)(eu, {}),
            (0, i.jsxs)(N.F, {
                setting: k.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: F.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: F.marginTop20,
                        variant: "text-md/normal",
                        children: U.intl.format(U.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(L.oAB.APPEARANCE);
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function $() {
    let e = R.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, C.e5)(
                W(
                    z(
                        {},
                        (0, O.ZP)({
                            channelId: "1337",
                            content: U.intl.formatToPlainString(U.t.bB80LC, {
                                previewLink: "https://discord.com/accessibility",
                            }),
                        }),
                    ),
                    {
                        state: L.yb.SENT,
                        id: "".concat(0),
                    },
                ),
            );
            return (e.colorString = "green"), e;
        });
    return (0, i.jsx)(d.Rny, {
        children: (0, i.jsxs)(d.Zbd, {
            className: G.preview,
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("div", {
                    className: G.previewHeader,
                    children: [
                        (0, i.jsx)(d.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: U.intl.string(U.t["2RHHg4"]),
                        }),
                        (0, i.jsx)("div", {
                            className: G.previewAvatars,
                            children: [L.Skl.ONLINE, L.Skl.DND, L.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        "aria-label": U.intl.string(U.t.lqaIxM),
                                        src: H,
                                        size: d.EFr.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: G.previewMessage,
                    children: (0, i.jsx)(S.Z, {
                        compact: e,
                        author: W(z({}, (0, v.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ee() {
    let e = (0, c.e7)([g.Z], () => g.Z.isHighContrastModeEnabled);
    return (0, i.jsx)(d.hjN, {
        children: (0, i.jsx)(d.j7V, {
            value: e,
            onChange: function (e) {
                (0, p.vW)(e ? g.X.HIGH : g.X.DEFAULT);
            },
            note: "Enhance visibility with bold colors and sharp contrast.",
            children: "High Contrast Mode",
        }),
    });
}
function et() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors,
    }));
    return (0, i.jsxs)(d.hjN, {
        className: F.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: Y,
                className: F.marginBottom8,
                children: U.intl.string(U.t["5PWWCQ"]),
            }),
            (0, i.jsx)(d.R94, {
                id: K,
                type: d.R94.Types.DESCRIPTION,
                className: F.marginBottom20,
                children: U.intl.string(U.t["0PbE/P"]),
            }),
            (0, i.jsx)(d.iRW, {
                "aria-labelledby": Y,
                "aria-describedby": K,
                markers: L.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: X,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: a()(F.marginTop20, F.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: U.intl.string(U.t.nlAOER),
                    children: U.intl.string(U.t.bQCodH),
                }),
            }),
        ],
    });
}
function en() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: F.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: U.intl.string(U.t["72i5GB"]),
            value: e,
            onChange: function () {
                (0, p.gs)(!e);
            },
            children: U.intl.string(U.t.OLZFBw),
        }),
    });
}
function ei() {
    let e = (0, c.e7)([g.Z], () => {
        var e;
        return null == (e = g.Z.enableCustomCursor) || e;
    });
    return (0, i.jsx)(d.xJW, {
        className: F.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: U.intl.string(U.t.nNZ1T0),
            value: e,
            onChange: () => (0, p.HU)(!e),
            children: U.intl.string(U.t["+IsihY"]),
        }),
    });
}
function er() {
    let e = (0, c.e7)([g.Z], () => g.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xJW, {
                title: U.intl.string(U.t.uSOPWl),
                className: F.marginTop20,
                children: [
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: F.marginBottom8,
                        children: U.intl.string(U.t["86hjzc"]),
                    }),
                    (0, i.jsx)(d.FXm, {
                        options: [
                            {
                                name: U.intl.string(U.t.YEOEi4),
                                value: "username",
                            },
                            {
                                name: U.intl.string(U.t.mQaro6),
                                value: "dot",
                            },
                            {
                                name: U.intl.string(U.t.Ji2EVF),
                                value: "hidden",
                            },
                        ],
                        onChange: function (e) {
                            (0, p.u1)(e.value);
                        },
                        value: e,
                    }),
                ],
            }),
            (0, i.jsx)(d.$i$, { className: F.marginTop20 }),
        ],
    });
}
function es() {
    let e = (0, c.e7)([g.Z], () => g.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, b.ZP)();
    return (0, i.jsx)(d.xJW, {
        className: F.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            value: e,
            onChange: function (e) {
                (0, p.X2)(e), A.default.track(L.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
            },
            note: U.intl.format(V.default.L8U56u, {
                onClickOpenModal() {
                    (0, E.I)({ analyticsLocations: t });
                },
            }),
            children: U.intl.string(V.default["2gFUEx"]),
        }),
    });
}
function ea() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, Z.Z)(t, w.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: U.intl.string(U.t.BT8Bmp),
            className: a()(F.marginTop20, G.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: U.intl.format(U.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(L.oAB.APPEARANCE);
                        },
                    }),
                    className: F.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: U.intl.string(U.t["sSY+mJ"]),
                }),
            }),
        })
    );
}
function el() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)),
            t !== e && (s.current = setTimeout(() => (0, p.qz)(t), 150));
    }, [t, e]);
    let a = U.intl.format(U.t.GwEVEx, { learnMoreLink: P.Z.getArticleURL(L.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: U.intl.string(U.t.TYyfOz),
        className: F.marginTop20,
        children: (0, i.jsx)(N.F, {
            setting: k.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: U.intl.string(U.t.cguieX),
            }),
        }),
    });
}
function eo() {
    let e = R.QK.useSetting(),
        t = R.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u,
        } = (0, c.cj)([g.Z, D.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: D.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: D.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        m = r.useRef(null);
    (0, Z.Z)(m, w.rP.REDUCED_MOTION);
    let h = r.useCallback(
            (e, t) => {
                (0, p.Zt)(t ? "auto" : l);
            },
            [l],
        ),
        f = r.useCallback((e) => {
            (0, p.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, i.jsxs)(d.xJW, {
        ref: m,
        title: U.intl.string(U.t.e3TR1d),
        className: a()(F.marginTop20, G.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: F.marginBottom8,
                children: U.intl.format(U.t["2l9U2t"], { helpdeskArticle: P.Z.getArticleURL(L.BhN.REDUCED_MOTION) }),
            }),
            (0, i.jsx)(d.XZJ, {
                className: a()(F.marginTop20, F.marginBottom20),
                value: "auto" === s,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: h,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["+Dx+HB"]),
                }),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: f,
                    children: U.intl.string(U.t.b3XBzs),
                }),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: F.marginBottom20,
                    value: e,
                    note: null != o ? (0, T.Z)(o) : void 0,
                    onChange: R.QK.updateSetting,
                    children: U.intl.string(U.t.Iayoh4),
                }),
            }),
            (0, i.jsx)(N.F, {
                setting: k.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: F.marginBottom20,
                    value: t,
                    note: null != u ? (0, T.Z)(u) : void 0,
                    onChange: R.Yk.updateSetting,
                    children: U.intl.string(U.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function ec() {
    let e = R.Wp.useSetting(),
        t = (0, c.e7)([D.Z], () => D.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = r.useCallback((e) => {
            R.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.xJW, {
        className: F.marginTop20,
        title: U.intl.string(U.t["6NtAuL"]),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: F.marginBottom8,
                children: null != t ? (0, T.Z)(t) : U.intl.string(U.t.GRa6U1),
            }),
            (0, i.jsx)(d.FXm, {
                options: [
                    {
                        name: U.intl.string(U.t["Xp+X2d"]),
                        value: B.yr.ALWAYS_ANIMATE,
                    },
                    {
                        name: U.intl.string(U.t.IlLT7e),
                        desc: U.intl.string(U.t.bIW9Tk),
                        value: B.yr.ANIMATE_ON_INTERACTION,
                    },
                    {
                        name: U.intl.string(U.t.IGu8x8),
                        value: B.yr.NEVER_ANIMATE,
                    },
                ],
                onChange: n,
                value: e,
            }),
        ],
    });
}
function ed() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = R.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, Z.Z)(n, w.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: F.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: F.marginBottom8,
                    children: U.intl.string(U.t.onqU6u),
                }),
                (0, i.jsx)(N.F, {
                    setting: k.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: F.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: U.intl.string(U.t["3Fztn5"]),
                    }),
                }),
                (0, i.jsx)(N.F, {
                    setting: k.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: F.marginTop8,
                        value: t,
                        note: U.intl.string(U.t.Q7wgHR),
                        onChange: (e) => {
                            A.default.track(L.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: L.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                R.dN.updateSetting(e);
                        },
                        children: U.intl.string(U.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function eu() {
    let e = R.OW.useSetting(),
        t = (0, c.e7)([y.Z], () => y.Z.speechRate),
        [n, s] = r.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(N.F, {
                      setting: k.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: F.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: F.marginBottom8,
                                  children: U.intl.string(U.t.VpSKeH),
                              }),
                              (0, i.jsx)(N.F, {
                                  setting: k.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: F.marginTop20,
                                      value: e,
                                      onChange: R.OW.updateSetting,
                                      children: U.intl.string(U.t.qvTIwc),
                                  }),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(N.F, {
                      setting: k.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: F.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: q,
                                  className: F.marginBottom20,
                                  children: U.intl.string(U.t.lsW5Eh),
                              }),
                              (0, i.jsx)("div", {
                                  className: G.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      icon: n ? d.fpf : d.o1U,
                                      text: U.intl.string(U.t.hymc8v),
                                      onClick: () => {
                                          if (n) {
                                              (0, I.NB)(), s(!1);
                                              return;
                                          }
                                          (0, I.cP)(
                                              U.intl.string(U.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1),
                                          ),
                                              s(!0);
                                      },
                                      "aria-label": ""
                                          .concat(U.intl.string(U.t.hymc8v), " ")
                                          .concat(U.intl.string(U.t.lsW5Eh)),
                                  }),
                              }),
                              (0, i.jsx)(d.iRW, {
                                  markers: M.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: J,
                                  onValueRender: (e) => "x".concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)("span", {
                                                className: G.ttsSliderMarker,
                                                children: U.intl.string(U.t["493lwc"]),
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)("span", {
                                                  className: G.ttsSliderMarker,
                                                  children: U.intl.string(U.t.ZSZEdX),
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)("span", { children: "x1.0" })
                                              : e % 1 == 0
                                                ? ""
                                                : void 0,
                                  "aria-labelledby": q,
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
