n.d(t, { Z: () => er }), n(388685);
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
    b = n(877371),
    y = n(243778),
    O = n(594928),
    v = n(829716),
    I = n(786761),
    T = n(3148),
    S = n(739566),
    A = n(753206),
    C = n(440849),
    N = n(921801),
    R = n(196051),
    P = n(441729),
    w = n(626135),
    D = n(63063),
    L = n(695346),
    x = n(313789),
    M = n(263937),
    j = n(996073),
    k = n(273313),
    U = n(947889),
    G = n(526761),
    B = n(726985),
    Z = n(981631),
    F = n(611480),
    V = n(653477),
    H = n(388032),
    Y = n(592186),
    W = n(953752),
    K = n(328756);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = (0, E.hQ)(),
    $ = (0, E.hQ)(),
    ee = (0, E.hQ)(),
    et = o().debounce((e) => {
        (0, f.o2)(e);
    }, 250),
    en = o().debounce((e) => {
        (0, R.Ct)(e);
    }, 250);
function er(e) {
    p.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = g.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        n = O.fN.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        i = (0, b.A)("UserSettingsAccessibility"),
        a = (0, U.Z)();
    return (0, r.jsx)(k.Z, {
        title: H.intl.string(H.t.G0neg7),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(ei, {}),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_SATURATION,
                    children: [(0, r.jsx)(es, {}), (0, r.jsx)(u.izJ, {})],
                }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, r.jsx)(el, {}), (0, r.jsx)(u.izJ, {})],
                }),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.F, {
                                  setting: B.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(ec, {}),
                              }),
                              (0, r.jsx)(u.izJ, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, r.jsx)(eu, {}), (0, r.jsx)(u.izJ, {})],
                }),
                n &&
                    (0, r.jsxs)(N.F, {
                        setting: B.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(u.izJ, {})],
                    }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, r.jsx)(ef, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_CONTRAST,
                    children: [(0, r.jsx)(e_, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_STICKERS,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, r.jsx)(ep, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: B.s6.ACCESSIBILITY_MESSAGES,
                    children: [(0, r.jsx)(em, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                }),
                i &&
                    (0, r.jsxs)(N.F, {
                        setting: B.s6.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, r.jsx)(eo, {}), (0, r.jsx)(u.izJ, { gap: 4 })],
                    }),
                (0, r.jsx)(eg, {}),
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: H.intl.format(H.t.DHpTjT, {
                            onAppearanceClick() {
                                a(x.n.APPEARANCE_PANEL, { section: Z.oAB.APPEARANCE });
                            },
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ei() {
    let e = L.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, I.e5)(
                    Q(
                        q(
                            {},
                            (0, T.ZP)({
                                channelId: e,
                                content: H.intl.formatToPlainString(H.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: Z.yb.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(u.Rny, {
        children: (0, r.jsxs)(u.Zbd, {
            className: W.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: W.previewHeader,
                    children: [
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: H.intl.string(H.t["2RHHgz"]),
                        }),
                        (0, r.jsx)("div", {
                            className: W.previewAvatars,
                            children: [Z.Skl.ONLINE, Z.Skl.DND, Z.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    u.Xo$,
                                    {
                                        "aria-label": H.intl.string(H.t.lqaIxI),
                                        src: K,
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
                    className: W.previewMessage,
                    children: (0, r.jsx)(A.Z, {
                        compact: e,
                        author: Q(q({}, (0, S.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ea() {
    let e = (0, s.e7)([_.Z], () => _.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, f.vW)(e ? _.X.HIGH : _.X.DEFAULT);
    }
    return (0, r.jsx)(y.ZP, {
        contentTypes: [l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(u.rsf, {
                label: H.intl.string(H.t.aZlePv),
                description: H.intl.string(H.t["v2qF8+"]),
                badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function eo() {
    let e = (0, s.e7)([_.Z], () => _.Z.isSwitchIconsEnabled);
    return (0, r.jsx)(u.rsf, {
        label: H.intl.string(H.t["S3z+pV"]),
        description: H.intl.string(H.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, f.ky)(e),
        hasIcon: !0,
    });
}
function es() {
    let { saturation: e, desaturateUserColors: t } = (0, s.cj)([_.Z], () => ({
        saturation: _.Z.saturation,
        desaturateUserColors: _.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(u.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(u.iRW, {
                label: H.intl.string(H.t["5PWWCY"]),
                description: H.intl.string(H.t["0PbE/H"]),
                "aria-labelledby": J,
                "aria-describedby": $,
                markers: Z.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: et,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(N.F, {
                setting: B.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(u.rsf, {
                    label: H.intl.string(H.t.bQCodD),
                    description: H.intl.string(H.t.nlAOEW),
                    checked: t,
                    onChange: f.f1,
                }),
            }),
        ],
    });
}
function el() {
    let e = (0, s.e7)([_.Z], () => _.Z.alwaysShowLinkDecorations);
    function t() {
        (0, f.gs)(!e);
    }
    return (0, r.jsx)(u.rsf, {
        label: H.intl.string(H.t.OLZFB8),
        description: H.intl.string(H.t["72i5GI"]),
        checked: e,
        onChange: t,
    });
}
function ec() {
    let e = (0, s.e7)([_.Z], () => {
        var e;
        return null == (e = _.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(u.rsf, {
        label: H.intl.string(H.t["+Isihb"]),
        description: H.intl.string(H.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, f.HU)(!e),
    });
}
function eu() {
    let e = (0, s.e7)([_.Z], () => _.Z.roleStyle);
    function t(e) {
        (0, f.u1)(e);
    }
    return (0, r.jsx)(c.E, {
        label: H.intl.string(H.t.uSOPWm),
        description: H.intl.string(H.t["86hjzQ"]),
        options: [
            {
                name: H.intl.string(H.t.YEOEi6),
                value: "username",
            },
            {
                name: H.intl.string(H.t.mQaro3),
                value: "dot",
            },
            {
                name: H.intl.string(H.t.Ji2EVJ),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function ed() {
    let e = (0, s.e7)([_.Z], () => _.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, m.ZP)();
    function n(e) {
        (0, f.X2)(e), w.default.track(Z.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(u.rsf, {
        label: H.intl.string(Y.default["2gFUEw"]),
        description: H.intl.format(Y.default.L8U56h, {
            onClickOpenModal() {
                (0, v.I)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function ef() {
    let e = (0, s.e7)([_.Z], () => _.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    (0, j.Z)(t, G.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
    let n = (0, U.Z)();
    return (0, r.jsx)("div", {
        ref: t,
        children: (0, r.jsx)(u.C3N, {
            label: H.intl.string(H.t.BT8Bmp),
            children: (0, r.jsx)(N.F, {
                setting: B.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, r.jsx)(u.rsf, {
                    label: H.intl.string(H.t["sSY+mD"]),
                    description: H.intl.format(H.t.u6UjrL, {
                        onThemeClick() {
                            n(x.n.APPEARANCE_PANEL, { section: Z.oAB.APPEARANCE });
                        },
                    }),
                    checked: e,
                    onChange: f.Uv,
                }),
            }),
        }),
    });
}
function e_() {
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
    let o = H.intl.format(H.t.GwEVE2, { learnMoreLink: D.Z.getArticleURL(Z.BhN.FORCED_COLORS) });
    return (0, r.jsxs)(u.C3N, {
        label: H.intl.string(H.t["TYyfO/"]),
        children: [
            (0, r.jsx)(N.F, {
                setting: B.s6.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(ea, {}),
            }),
            (0, h.b)()
                ? (0, r.jsx)(N.F, {
                      setting: B.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(u.rsf, {
                          label: H.intl.string(H.t.cguiec),
                          description: o,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function ep() {
    let e = L.QK.useSetting(),
        t = L.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: c,
        } = (0, s.cj)([_.Z, M.Z], () => ({
            systemPrefersReducedMotion: _.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: _.Z.rawPrefersReducedMotion,
            useReducedMotion: _.Z.useReducedMotion,
            gifAutoPlayOverrideReason: M.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        p = i.useRef(null);
    (0, j.Z)(p, G.rP.REDUCED_MOTION);
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
        title: H.intl.string(H.t.e3TR1b),
        className: W.reducedMotion,
        children: (0, r.jsxs)(u.C3N, {
            label: H.intl.string(H.t.e3TR1b),
            description: H.intl.format(H.t["2l9U2j"], { helpdeskArticle: D.Z.getArticleURL(Z.BhN.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(u.Checkbox, {
                    checked: d,
                    onChange: h,
                    label: H.intl.string(H.t["+Dx+HD"]),
                }),
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(u.rsf, {
                        label: H.intl.string(H.t.b3XBzg),
                        checked: n,
                        onChange: m,
                    }),
                }),
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(u.rsf, {
                        label: H.intl.string(H.t.Iayoh5),
                        description: null != l ? (0, C.Z)(l) : void 0,
                        checked: e,
                        onChange: L.QK.updateSetting,
                    }),
                }),
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(u.rsf, {
                        label: H.intl.string(H.t.iIaOlc),
                        description: null != c ? (0, C.Z)(c) : void 0,
                        checked: t,
                        onChange: L.Yk.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function eh() {
    let e = L.Wp.useSetting(),
        t = (0, s.e7)([M.Z], () => M.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            L.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.E, {
        label: H.intl.string(H.t["6NtAuJ"]),
        description: null != t ? (0, C.Z)(t) : H.intl.string(H.t.GRa6U7),
        options: [
            {
                name: H.intl.string(H.t["Xp+X2U"]),
                value: F.yr.ALWAYS_ANIMATE,
            },
            {
                name: H.intl.string(H.t.IlLT7e),
                desc: H.intl.string(H.t.bIW9Tl),
                value: F.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: H.intl.string(H.t.IGu8x3),
                value: F.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function em() {
    let e = (0, s.e7)([_.Z], () => _.Z.isSubmitButtonEnabled),
        t = L.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, j.Z)(n, G.rP.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(u.C3N, {
                label: H.intl.string(H.t.onqU6o),
                children: [
                    (0, r.jsx)(N.F, {
                        setting: B.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(u.rsf, {
                            label: H.intl.string(H.t["3Fztn5"]),
                            checked: e,
                            onChange: f.eN,
                        }),
                    }),
                    (0, r.jsx)(N.F, {
                        setting: B.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(u.rsf, {
                            label: H.intl.string(H.t.TZ2hZH),
                            description: H.intl.string(H.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                w.default.track(Z.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: Z.jXE.SETTINGS_ACCESSIBILITY },
                                }),
                                    L.dN.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function eg() {
    let e = L.OW.useSetting(),
        t = (0, s.e7)([P.Z], () => P.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!d.Zh) return null;
    let o = () => {
        if (n) {
            (0, R.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, R.cP)(H.intl.string(H.t.PKaNJL), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsx)(N.F, {
        setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
        children: (0, r.jsxs)(u.C3N, {
            label: H.intl.string(H.t.VpSKeO),
            children: [
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                    children: (0, r.jsx)(u.rsf, {
                        label: H.intl.string(H.t.qvTIwX),
                        checked: e,
                        onChange: L.OW.updateSetting,
                    }),
                }),
                (0, r.jsx)(N.F, {
                    setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                    children: (0, r.jsxs)(u.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(u.iRW, {
                                label: H.intl.string(H.t.lsW5Ev),
                                markers: V.q,
                                initialValue: t,
                                defaultValue: 1,
                                stickToMarkers: !0,
                                onValueChange: en,
                                onValueRender: (e) => "x".concat(e.toFixed(2)),
                                onMarkerRender: (e) =>
                                    0 === e
                                        ? (0, r.jsx)(u.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-secondary",
                                              children: H.intl.string(H.t["493lwX"]),
                                          })
                                        : 10 === e
                                          ? (0, r.jsx)(u.Text, {
                                                variant: "text-xs/medium",
                                                color: "text-secondary",
                                                children: H.intl.string(H.t.ZSZEdS),
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
                                "aria-labelledby": ee,
                            }),
                            (0, r.jsx)("div", {
                                className: W.ttsPreviewWrapper,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    icon: n ? u.fpf : u.o1U,
                                    text: H.intl.string(H.t.hymc8s),
                                    onClick: o,
                                    "aria-label": ""
                                        .concat(H.intl.string(H.t.hymc8s), " ")
                                        .concat(H.intl.string(H.t.lsW5Ev)),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
