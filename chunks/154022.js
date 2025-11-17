n.d(t, { Z: () => en }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(419363),
    d = n(857595),
    f = n(607070),
    _ = n(299363),
    p = n(627845),
    h = n(906732),
    m = n(296812),
    g = n(313201),
    E = n(877371),
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
    D = n(63063),
    w = n(695346),
    x = n(313789),
    L = n(263937),
    M = n(996073),
    k = n(273313),
    j = n(518596),
    U = n(526761),
    G = n(726985),
    B = n(981631),
    Z = n(611480),
    F = n(653477),
    V = n(388032),
    H = n(88406),
    Y = n(953752),
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
let Q = (0, g.hQ)(),
    J = (0, g.hQ)(),
    $ = (0, g.hQ)(),
    ee = o().debounce((e) => {
        (0, d.o2)(e);
    }, 250),
    et = o().debounce((e) => {
        (0, N.Ct)(e);
    }, 250);
function en(e) {
    _.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = (0, m.A)("UserSettingsAccessibility"),
        n = y.fN.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        i = (0, E.A)("UserSettingsAccessibility");
    return (0, r.jsx)(k.Z, {
        title: V.intl.string(V.t.G0neg7),
        children: (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(er, {}),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_SATURATION,
                    children: [(0, r.jsx)(eo, {}), (0, r.jsx)(c.izJ, {})],
                }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.izJ, {})],
                }),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.F, {
                                  setting: G.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(el, {}),
                              }),
                              (0, r.jsx)(c.izJ, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.izJ, {})],
                }),
                n &&
                    (0, r.jsxs)(C.F, {
                        setting: G.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                        children: [(0, r.jsx)(eu, {}), (0, r.jsx)(c.izJ, {})],
                    }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_CONTRAST,
                    children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_STICKERS,
                    children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(C.F, {
                    setting: G.s6.ACCESSIBILITY_MESSAGES,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                i &&
                    (0, r.jsxs)(C.F, {
                        setting: G.s6.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, r.jsx)(ea, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                    }),
                (0, r.jsx)(em, {}),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: V.intl.format(V.t.DHpTjT, {
                            onAppearanceClick() {
                                (0, j.openUserSettings)(x.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
                            },
                        }),
                    }),
                }),
            ],
        }),
    });
}
function er() {
    let e = w.jU.useSetting(),
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
    return (0, r.jsx)(c.Rny, {
        children: (0, r.jsxs)(c.Zbd, {
            className: Y.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.previewHeader,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            text: V.intl.string(V.t["2RHHgz"]),
                        }),
                        (0, r.jsx)("div", {
                            className: Y.previewAvatars,
                            children: [B.Skl.ONLINE, B.Skl.DND, B.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    c.Xo$,
                                    {
                                        "aria-label": V.intl.string(V.t.lqaIxI),
                                        src: W,
                                        size: c.EFr.SIZE_32,
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
    let e = (0, s.e7)([f.Z], () => f.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, d.vW)(e ? f.X.HIGH : f.X.DEFAULT);
    }
    return (0, r.jsx)(b.ZP, {
        contentTypes: [l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(c.rsf, {
                label: V.intl.string(V.t.aZlePv),
                description: V.intl.string(V.t["v2qF8+"]),
                badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function ea() {
    let e = (0, s.e7)([f.Z], () => f.Z.isSwitchIconsEnabled);
    return (0, r.jsx)(c.rsf, {
        label: V.intl.string(V.t["S3z+pV"]),
        description: V.intl.string(V.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, d.ky)(e),
        hasIcon: !0,
    });
}
function eo() {
    let { saturation: e, desaturateUserColors: t } = (0, s.cj)([f.Z], () => ({
        saturation: f.Z.saturation,
        desaturateUserColors: f.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.iRW, {
                label: V.intl.string(V.t["5PWWCY"]),
                description: V.intl.string(V.t["0PbE/H"]),
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
                children: (0, r.jsx)(c.rsf, {
                    label: V.intl.string(V.t.bQCodD),
                    description: V.intl.string(V.t.nlAOEW),
                    checked: t,
                    onChange: d.f1,
                }),
            }),
        ],
    });
}
function es() {
    let e = (0, s.e7)([f.Z], () => f.Z.alwaysShowLinkDecorations);
    function t() {
        (0, d.gs)(!e);
    }
    return (0, r.jsx)(c.rsf, {
        label: V.intl.string(V.t.OLZFB8),
        description: V.intl.string(V.t["72i5GI"]),
        checked: e,
        onChange: t,
    });
}
function el() {
    let e = (0, s.e7)([f.Z], () => {
        var e;
        return null == (e = f.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(c.rsf, {
        label: V.intl.string(V.t["+Isihb"]),
        description: V.intl.string(V.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, d.HU)(!e),
    });
}
function ec() {
    let e = (0, s.e7)([f.Z], () => f.Z.roleStyle);
    function t(e) {
        (0, d.u1)(e);
    }
    return (0, r.jsx)(c.FXm, {
        label: V.intl.string(V.t.uSOPWm),
        description: V.intl.string(V.t["86hjzQ"]),
        options: [
            {
                name: V.intl.string(V.t.YEOEi6),
                value: "username",
            },
            {
                name: V.intl.string(V.t.mQaro3),
                value: "dot",
            },
            {
                name: V.intl.string(V.t.Ji2EVJ),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function eu() {
    let e = (0, s.e7)([f.Z], () => f.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, h.ZP)();
    function n(e) {
        (0, d.X2)(e), P.default.track(B.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(c.rsf, {
        label: V.intl.string(H.default["2gFUEw"]),
        description: V.intl.format(H.default.L8U56h, {
            onClickOpenModal() {
                (0, O.I)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function ed() {
    let e = (0, s.e7)([f.Z], () => f.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, M.Z)(t, U.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(c.C3N, {
                label: V.intl.string(V.t.BT8Bmp),
                children: (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                    children: (0, r.jsx)(c.rsf, {
                        label: V.intl.string(V.t["sSY+mD"]),
                        description: V.intl.format(V.t.u6UjrL, {
                            onThemeClick() {
                                (0, j.openUserSettings)(x.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
                            },
                        }),
                        checked: e,
                        onChange: d.Uv,
                    }),
                }),
            }),
        })
    );
}
function ef() {
    let [e] = (0, s.Wu)([f.Z], () => [f.Z.syncForcedColors, f.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, d.qz)(t), 150));
    }, [t, e]);
    let o = V.intl.format(V.t.GwEVE2, { learnMoreLink: D.Z.getArticleURL(B.BhN.FORCED_COLORS) });
    return (0, r.jsxs)(c.C3N, {
        label: V.intl.string(V.t["TYyfO/"]),
        children: [
            (0, r.jsx)(C.F, {
                setting: G.s6.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(ei, {}),
            }),
            (0, p.b)()
                ? (0, r.jsx)(C.F, {
                      setting: G.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(c.rsf, {
                          label: V.intl.string(V.t.cguiec),
                          description: o,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function e_() {
    let e = w.QK.useSetting(),
        t = w.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, s.cj)([f.Z, L.Z], () => ({
            systemPrefersReducedMotion: f.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: f.Z.rawPrefersReducedMotion,
            useReducedMotion: f.Z.useReducedMotion,
            gifAutoPlayOverrideReason: L.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: L.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        _ = "auto" === a,
        p = i.useRef(null);
    (0, M.Z)(p, U.rP.REDUCED_MOTION);
    let h = i.useCallback(
            (e) => {
                (0, d.Zt)(e ? "auto" : o);
            },
            [o],
        ),
        m = i.useCallback((e) => {
            (0, d.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsx)("div", {
        ref: p,
        title: V.intl.string(V.t.e3TR1b),
        className: Y.reducedMotion,
        children: (0, r.jsxs)(c.C3N, {
            label: V.intl.string(V.t.e3TR1b),
            description: V.intl.format(V.t["2l9U2j"], { helpdeskArticle: D.Z.getArticleURL(B.BhN.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(c.Checkbox, {
                    checked: _,
                    onChange: h,
                    label: V.intl.string(V.t["+Dx+HD"]),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(c.rsf, {
                        label: V.intl.string(V.t.b3XBzg),
                        checked: n,
                        onChange: m,
                    }),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(c.rsf, {
                        label: V.intl.string(V.t.Iayoh5),
                        description: null != l ? (0, A.Z)(l) : void 0,
                        checked: e,
                        onChange: w.QK.updateSetting,
                    }),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(c.rsf, {
                        label: V.intl.string(V.t.iIaOlc),
                        description: null != u ? (0, A.Z)(u) : void 0,
                        checked: t,
                        onChange: w.Yk.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function ep() {
    let e = w.Wp.useSetting(),
        t = (0, s.e7)([L.Z], () => L.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            w.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.FXm, {
        label: V.intl.string(V.t["6NtAuJ"]),
        description: null != t ? (0, A.Z)(t) : V.intl.string(V.t.GRa6U7),
        options: [
            {
                name: V.intl.string(V.t["Xp+X2U"]),
                value: Z.yr.ALWAYS_ANIMATE,
            },
            {
                name: V.intl.string(V.t.IlLT7e),
                desc: V.intl.string(V.t.bIW9Tl),
                value: Z.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: V.intl.string(V.t.IGu8x3),
                value: Z.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eh() {
    let e = (0, s.e7)([f.Z], () => f.Z.isSubmitButtonEnabled),
        t = w.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, M.Z)(n, U.rP.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(c.C3N, {
                label: V.intl.string(V.t.onqU6o),
                children: [
                    (0, r.jsx)(C.F, {
                        setting: G.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(c.rsf, {
                            label: V.intl.string(V.t["3Fztn5"]),
                            checked: e,
                            onChange: d.eN,
                        }),
                    }),
                    (0, r.jsx)(C.F, {
                        setting: G.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(c.rsf, {
                            label: V.intl.string(V.t.TZ2hZH),
                            description: V.intl.string(V.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                P.default.track(B.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: B.jXE.SETTINGS_ACCESSIBILITY },
                                }),
                                    w.dN.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function em() {
    let e = w.OW.useSetting(),
        t = (0, s.e7)([R.Z], () => R.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!u.Zh) return null;
    let o = () => {
        if (n) {
            (0, N.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, N.cP)(V.intl.string(V.t.PKaNJL), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsx)(C.F, {
        setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
        children: (0, r.jsxs)(c.C3N, {
            label: V.intl.string(V.t.VpSKeO),
            children: [
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                    children: (0, r.jsx)(c.rsf, {
                        label: V.intl.string(V.t.qvTIwX),
                        checked: e,
                        onChange: w.OW.updateSetting,
                    }),
                }),
                (0, r.jsx)(C.F, {
                    setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                    children: (0, r.jsxs)(c.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(c.iRW, {
                                label: V.intl.string(V.t.lsW5Ev),
                                markers: F.q,
                                initialValue: t,
                                defaultValue: 1,
                                stickToMarkers: !0,
                                onValueChange: et,
                                onValueRender: (e) => "x".concat(e.toFixed(2)),
                                onMarkerRender: (e) =>
                                    0 === e
                                        ? (0, r.jsx)(c.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-secondary",
                                              children: V.intl.string(V.t["493lwX"]),
                                          })
                                        : 10 === e
                                          ? (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                color: "text-secondary",
                                                children: V.intl.string(V.t.ZSZEdS),
                                            })
                                          : 1 === e
                                            ? (0, r.jsx)(c.Text, {
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
                                children: (0, r.jsx)(c.Button, {
                                    size: "sm",
                                    icon: n ? c.fpf : c.o1U,
                                    text: V.intl.string(V.t.hymc8s),
                                    onClick: o,
                                    "aria-label": ""
                                        .concat(V.intl.string(V.t.hymc8s), " ")
                                        .concat(V.intl.string(V.t.lsW5Ev)),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
