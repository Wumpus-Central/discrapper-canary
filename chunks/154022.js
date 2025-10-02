n.d(t, { Z: () => en }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(538534),
    u = n(481060),
    d = n(419363),
    f = n(857595),
    _ = n(607070),
    p = n(299363),
    h = n(627845),
    m = n(906732),
    g = n(675997),
    E = n(313201),
    b = n(243778),
    y = n(594928),
    O = n(829716),
    v = n(786761),
    I = n(3148),
    T = n(739566),
    S = n(753206),
    A = n(440849),
    C = n(921801),
    N = n(196051),
    R = n(441729),
    P = n(626135),
    w = n(63063),
    D = n(695346),
    L = n(313789),
    x = n(263937),
    j = n(996073),
    M = n(273313),
    k = n(947889),
    U = n(526761),
    G = n(726985),
    B = n(981631),
    Z = n(611480),
    F = n(653477),
    V = n(388032),
    H = n(62222),
    Y = n(133991),
    W = n(328756);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = (0, E.hQ)(),
    J = (0, E.hQ)(),
    $ = (0, E.hQ)(),
    ee = o().debounce((e) => {
        (0, f.o2)(e);
    }, 250),
    et = o().debounce((e) => {
        (0, N.Ct)(e);
    }, 250);
function en(e) {
    p.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = g.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        n = y.fN.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        i = (0, k.Z)();
    return (0, r.jsx)(M.Z, {
        title: V.intl.string(V.t.G0neg4),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(er, {}),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_SATURATION,
                    children: (0, r.jsx)(ea, {}),
                }),
                (0, r.jsx)(u.izJ, {}),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_LINK_DECORATIONS,
                    children: (0, r.jsx)(eo, {}),
                }),
                (0, r.jsx)(u.izJ, {}),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.F, {
                                  setting: G.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(es, {}),
                              }),
                              (0, r.jsx)(u.izJ, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_ROLE_STYLE,
                    children: (0, r.jsx)(el, {}),
                }),
                (0, r.jsx)(u.izJ, {}),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(C.F, {
                                setting: G.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                                children: (0, r.jsx)(ec, {}),
                            }),
                            (0, r.jsx)(u.izJ, {}),
                        ],
                    }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_PROFILE_COLORS,
                    children: (0, r.jsx)(eu, {}),
                }),
                (0, r.jsx)(u.izJ, { gap: 4 }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_CONTRAST,
                    children: (0, r.jsx)(ed, {}),
                }),
                (0, r.jsx)(u.izJ, { gap: 4 }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_STICKERS,
                    children: (0, r.jsx)(e_, {}),
                }),
                (0, r.jsx)(u.izJ, { gap: 4 }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION,
                    children: (0, r.jsx)(ef, {}),
                }),
                (0, r.jsx)(u.izJ, { gap: 4 }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_MESSAGES,
                    children: (0, r.jsx)(ep, {}),
                }),
                (0, r.jsx)(u.izJ, { gap: 4 }),
                (0, r.jsx)(eh, {}),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: V.intl.format(V.t.DHpTjY, {
                            onAppearanceClick() {
                                i(L.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
                            },
                        }),
                    }),
                }),
            ],
        }),
    });
}
function er() {
    let e = D.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, v.e5)(
                    X(
                        z(
                            {},
                            (0, I.ZP)({
                                channelId: e,
                                content: V.intl.formatToPlainString(V.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: B.yb.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(u.Rny, {
        children: (0, r.jsxs)(u.Zbd, {
            className: Y.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.previewHeader,
                    children: [
                        (0, r.jsx)(u.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: V.intl.string(V.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: Y.previewAvatars,
                            children: [B.Skl.ONLINE, B.Skl.DND, B.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    u.Xo$,
                                    {
                                        "aria-label": V.intl.string(V.t.lqaIxM),
                                        src: W,
                                        size: u.EFr.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: Y.previewMessage,
                    children: (0, r.jsx)(S.Z, {
                        compact: e,
                        author: X(z({}, (0, T.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ei() {
    let e = (0, s.e7)([_.Z], () => _.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, f.vW)(e ? _.X.HIGH : _.X.DEFAULT);
    }
    return (0, r.jsx)(b.ZP, {
        contentTypes: [l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(u.rsf, {
                label: V.intl.string(V.t.aZlePj),
                description: V.intl.string(V.t["v2qF8/"]),
                badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function ea() {
    let { saturation: e, desaturateUserColors: t } = (0, s.cj)([_.Z], () => ({
        saturation: _.Z.saturation,
        desaturateUserColors: _.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(u.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(u.iRW, {
                label: V.intl.string(V.t["5PWWCQ"]),
                description: V.intl.string(V.t["0PbE/P"]),
                "aria-labelledby": Q,
                "aria-describedby": J,
                markers: B.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: ee,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(C.F, {
                setting: G.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(u.rsf, {
                    label: V.intl.string(V.t.bQCodH),
                    description: V.intl.string(V.t.nlAOER),
                    checked: t,
                    onChange: f.f1,
                }),
            }),
        ],
    });
}
function eo() {
    let e = (0, s.e7)([_.Z], () => _.Z.alwaysShowLinkDecorations);
    function t() {
        (0, f.gs)(!e);
    }
    return (0, r.jsx)(u.rsf, {
        label: V.intl.string(V.t.OLZFBw),
        description: V.intl.string(V.t["72i5GB"]),
        checked: e,
        onChange: t,
    });
}
function es() {
    let e = (0, s.e7)([_.Z], () => {
        var e;
        return null == (e = _.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(u.rsf, {
        label: V.intl.string(V.t["+IsihY"]),
        description: V.intl.string(V.t.nNZ1T0),
        checked: e,
        onChange: () => (0, f.HU)(!e),
    });
}
function el() {
    let e = (0, s.e7)([_.Z], () => _.Z.roleStyle);
    function t(e) {
        (0, f.u1)(e);
    }
    return (0, r.jsx)(c.E, {
        label: V.intl.string(V.t.uSOPWl),
        description: V.intl.string(V.t["86hjzc"]),
        options: [
            {
                name: V.intl.string(V.t.YEOEi4),
                value: "username",
            },
            {
                name: V.intl.string(V.t.mQaro6),
                value: "dot",
            },
            {
                name: V.intl.string(V.t.Ji2EVF),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function ec() {
    let e = (0, s.e7)([_.Z], () => _.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, m.ZP)();
    function n(e) {
        (0, f.X2)(e), P.default.track(B.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(u.rsf, {
        label: V.intl.string(H.default["2gFUEx"]),
        description: V.intl.format(H.default.L8U56u, {
            onClickOpenModal() {
                (0, O.I)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function eu() {
    let e = (0, s.e7)([_.Z], () => _.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    (0, j.Z)(t, U.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
    let n = (0, k.Z)();
    return (0, r.jsx)(u.hjN, {
        ref: t,
        title: V.intl.string(V.t.BT8Bmp),
        children: (0, r.jsx)(C.F, {
            setting: G.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(u.rsf, {
                label: V.intl.string(V.t["sSY+mJ"]),
                description: V.intl.format(V.t.u6UjrK, {
                    onThemeClick() {
                        n(L.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
                    },
                }),
                checked: e,
                onChange: f.Uv,
            }),
        }),
    });
}
function ed() {
    let [e] = (0, s.Wu)([_.Z], () => [_.Z.syncForcedColors, _.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, f.qz)(t), 150));
    }, [t, e]);
    let o = V.intl.format(V.t.GwEVEx, { learnMoreLink: w.Z.getArticleURL(B.BhN.FORCED_COLORS) });
    return (0, r.jsxs)(u.C3N, {
        label: V.intl.string(V.t.TYyfOz),
        children: [
            (0, r.jsx)(C.F, {
                setting: G.s6.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(ei, {}),
            }),
            (0, h.b)()
                ? (0, r.jsx)(C.F, {
                      setting: G.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(u.rsf, {
                          label: V.intl.string(V.t.cguieX),
                          description: o,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function ef() {
    let e = D.QK.useSetting(),
        t = D.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: c,
        } = (0, s.cj)([_.Z, x.Z], () => ({
            systemPrefersReducedMotion: _.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: _.Z.rawPrefersReducedMotion,
            useReducedMotion: _.Z.useReducedMotion,
            gifAutoPlayOverrideReason: x.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: x.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        p = i.useRef(null);
    (0, j.Z)(p, U.rP.REDUCED_MOTION);
    let h = i.useCallback(
            (e) => {
                (0, f.Zt)(e ? "auto" : o);
            },
            [o],
        ),
        m = i.useCallback((e) => {
            (0, f.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsx)("div", {
        ref: p,
        title: V.intl.string(V.t.e3TR1d),
        className: Y.reducedMotion,
        children: (0, r.jsxs)(u.C3N, {
            label: V.intl.string(V.t.e3TR1d),
            description: V.intl.format(V.t["2l9U2t"], { helpdeskArticle: w.Z.getArticleURL(B.BhN.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(u.XZJ, {
                    checked: d,
                    onChange: h,
                    label: V.intl.string(V.t["+Dx+HB"]),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.b3XBzs),
                        checked: n,
                        onChange: m,
                    }),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.Iayoh4),
                        description: null != l ? (0, A.Z)(l) : void 0,
                        checked: e,
                        onChange: D.QK.updateSetting,
                    }),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.iIaOlZ),
                        description: null != c ? (0, A.Z)(c) : void 0,
                        checked: t,
                        onChange: D.Yk.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function e_() {
    let e = D.Wp.useSetting(),
        t = (0, s.e7)([x.Z], () => x.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            D.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.E, {
        label: V.intl.string(V.t["6NtAuL"]),
        description: null != t ? (0, A.Z)(t) : V.intl.string(V.t.GRa6U1),
        options: [
            {
                name: V.intl.string(V.t["Xp+X2d"]),
                value: Z.yr.ALWAYS_ANIMATE,
            },
            {
                name: V.intl.string(V.t.IlLT7e),
                desc: V.intl.string(V.t.bIW9Tk),
                value: Z.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: V.intl.string(V.t.IGu8x8),
                value: Z.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function ep() {
    let e = (0, s.e7)([_.Z], () => _.Z.isSubmitButtonEnabled),
        t = D.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, j.Z)(n, U.rP.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(u.C3N, {
                label: V.intl.string(V.t.onqU6u),
                children: [
                    (0, r.jsx)(C.F, {
                        setting: G.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t["3Fztn5"]),
                            checked: e,
                            onChange: f.eN,
                        }),
                    }),
                    (0, r.jsx)(C.F, {
                        setting: G.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t.TZ2hZG),
                            description: V.intl.string(V.t.Q7wgHR),
                            checked: t,
                            onChange: (e) => {
                                P.default.track(B.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: B.jXE.SETTINGS_ACCESSIBILITY },
                                }),
                                    D.dN.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function eh() {
    let e = D.OW.useSetting(),
        t = (0, s.e7)([R.Z], () => R.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!d.Zh) return null;
    let o = () => {
        if (n) {
            (0, N.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, N.cP)(V.intl.string(V.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(u.C3N, {
        label: V.intl.string(V.t.VpSKeH),
        children: [
            (0, r.jsx)(C.F, {
                setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                    children: (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.qvTIwc),
                        checked: e,
                        onChange: D.OW.updateSetting,
                    }),
                }),
            }),
            (0, r.jsx)(C.F, {
                setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(u.iRW, {
                            label: V.intl.string(V.t.lsW5Eh),
                            markers: F.q,
                            initialValue: t,
                            defaultValue: 1,
                            stickToMarkers: !0,
                            onValueChange: et,
                            onValueRender: (e) => "x".concat(e.toFixed(2)),
                            onMarkerRender: (e) =>
                                0 === e
                                    ? (0, r.jsx)(u.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-secondary",
                                          children: V.intl.string(V.t["493lwc"]),
                                      })
                                    : 10 === e
                                      ? (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-secondary",
                                            children: V.intl.string(V.t.ZSZEdX),
                                        })
                                      : 1 === e
                                        ? (0, r.jsx)(u.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-feedback-positive",
                                              children: "x1.0",
                                          })
                                        : e % 1 == 0
                                          ? ""
                                          : void 0,
                            "aria-labelledby": $,
                        }),
                        (0, r.jsx)("div", {
                            className: Y.ttsPreviewWrapper,
                            children: (0, r.jsx)(u.zxk, {
                                size: "sm",
                                icon: n ? u.fpf : u.o1U,
                                text: V.intl.string(V.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(V.intl.string(V.t.hymc8v), " ")
                                    .concat(V.intl.string(V.t.lsW5Eh)),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
