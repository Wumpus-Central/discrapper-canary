n.d(t, { Z: () => ea }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(755721),
    f = n(481060),
    _ = n(419363),
    p = n(857595),
    h = n(607070),
    m = n(299363),
    g = n(627845),
    E = n(906732),
    b = n(675997),
    y = n(377171),
    O = n(313201),
    v = n(243778),
    I = n(594928),
    T = n(829716),
    S = n(786761),
    A = n(3148),
    C = n(739566),
    N = n(753206),
    R = n(440849),
    P = n(921801),
    w = n(196051),
    D = n(441729),
    x = n(626135),
    L = n(63063),
    j = n(695346),
    M = n(313789),
    k = n(263937),
    U = n(996073),
    G = n(947889),
    B = n(526761),
    Z = n(726985),
    F = n(981631),
    V = n(611480),
    H = n(653477),
    Y = n(388032),
    W = n(693450),
    K = n(953752),
    z = n(197571),
    q = n(328756);
function X(e, t, n) {
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
function Q(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = (0, O.hQ)(),
    et = (0, O.hQ)(),
    en = (0, O.hQ)(),
    er = l().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    ei = l().debounce((e) => {
        (0, w.Ct)(e);
    }, 250);
function ea(e) {
    let t = m.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = b.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        i = I.f.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        a = (0, G.Z)();
    return (0, r.jsxs)(f.hjN, {
        tag: f.RB0.H1,
        title: Y.intl.string(Y.t.G0neg4),
        children: [
            (0, r.jsx)("div", {
                className: z.marginBottom20,
                children: (0, r.jsx)(eo, {}),
            }),
            t
                ? (0, r.jsx)(P.F, {
                      setting: Z.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, r.jsx)(es, {}),
                  })
                : null,
            (0, r.jsxs)(P.F, {
                setting: Z.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(el, {}), (0, r.jsx)(f.$i$, {})],
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(ec, {}),
            }),
            n
                ? (0, r.jsx)(P.F, {
                      setting: Z.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, r.jsx)(eu, {}),
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(ed, {}),
            }),
            i &&
                (0, r.jsx)(P.F, {
                    setting: Z.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, r.jsx)(ef, {}),
                }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)(e_, {}),
            }),
            (0, g.b)()
                ? (0, r.jsxs)(P.F, {
                      setting: Z.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(ep, {}), " "],
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(eh, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(em, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(eg, {}),
            }),
            (0, r.jsx)(eE, {}),
            (0, r.jsxs)(P.F, {
                setting: Z.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(f.$i$, { className: z.marginTop20 }),
                    (0, r.jsx)(f.Text, {
                        className: z.marginTop20,
                        variant: "text-md/normal",
                        children: Y.intl.format(Y.t.DHpTjY, {
                            onAppearanceClick() {
                                a(M.n.APPEARANCE_PANEL, { section: F.oAB.APPEARANCE });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eo() {
    let e = j.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, S.e5)(
                    $(
                        Q(
                            {},
                            (0, A.ZP)({
                                channelId: e,
                                content: Y.intl.formatToPlainString(Y.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: F.yb.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(f.Rny, {
        children: (0, r.jsxs)(f.Zbd, {
            className: K.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: K.previewHeader,
                    children: [
                        (0, r.jsx)(f.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: Y.intl.string(Y.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: K.previewAvatars,
                            children: [F.Skl.ONLINE, F.Skl.DND, F.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    f.Xo$,
                                    {
                                        "aria-label": Y.intl.string(Y.t.lqaIxM),
                                        src: q,
                                        size: f.EFr.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: K.previewMessage,
                    children: (0, r.jsx)(N.Z, {
                        compact: e,
                        author: $(Q({}, (0, C.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function es() {
    let e = (0, c.e7)([h.Z], () => h.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, p.vW)(e ? h.X.HIGH : h.X.DEFAULT);
    }
    return (0, r.jsx)(f.hjN, {
        children: (0, r.jsx)(f.j7V, {
            value: e,
            onChange: t,
            note: Y.intl.string(Y.t["v2qF8/"]),
            children: (0, r.jsxs)(f.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    Y.intl.string(Y.t.aZlePj),
                    " ",
                    (0, r.jsx)(v.ZP, {
                        contentTypes: [u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, r.jsx)(f.IGR, {
                                      text: Y.intl.string(Y.t.y2b7CA),
                                      color: y.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                ],
            }),
        }),
    });
}
function el() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(f.hjN, {
        className: z.marginTop20,
        children: [
            (0, r.jsx)(f.vwX, {
                id: ee,
                className: z.marginBottom8,
                children: Y.intl.string(Y.t["5PWWCQ"]),
            }),
            (0, r.jsx)(f.R94, {
                id: et,
                type: f.R94.Types.DESCRIPTION,
                className: z.marginBottom20,
                children: Y.intl.string(Y.t["0PbE/P"]),
            }),
            (0, r.jsx)(f.iRW, {
                "aria-labelledby": ee,
                "aria-describedby": et,
                markers: F.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: er,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(f.j7V, {
                    hideBorder: !0,
                    className: o()(z.marginTop20, z.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: Y.intl.string(Y.t.nlAOER),
                    children: Y.intl.string(Y.t.bQCodH),
                }),
            }),
        ],
    });
}
function ec() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    function t() {
        (0, p.gs)(!e);
    }
    return (0, r.jsx)("div", {
        className: z.marginTop20,
        children: (0, r.jsx)(f.j7V, {
            note: Y.intl.string(Y.t["72i5GB"]),
            value: e,
            onChange: t,
            children: Y.intl.string(Y.t.OLZFBw),
        }),
    });
}
function eu() {
    let e = (0, c.e7)([h.Z], () => {
        var e;
        return null == (e = h.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)("div", {
        className: z.marginTop20,
        children: (0, r.jsx)(f.j7V, {
            note: Y.intl.string(Y.t.nNZ1T0),
            value: e,
            onChange: () => (0, p.HU)(!e),
            children: Y.intl.string(Y.t["+IsihY"]),
        }),
    });
}
function ed() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    function t(e) {
        (0, p.u1)(e.value);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.xJW, {
                title: Y.intl.string(Y.t.uSOPWl),
                className: z.marginTop20,
                children: [
                    (0, r.jsx)(f.R94, {
                        type: f.R94.Types.DESCRIPTION,
                        className: z.marginBottom8,
                        children: Y.intl.string(Y.t["86hjzc"]),
                    }),
                    (0, r.jsx)(d.Gu, {
                        options: [
                            {
                                name: Y.intl.string(Y.t.YEOEi4),
                                value: "username",
                            },
                            {
                                name: Y.intl.string(Y.t.mQaro6),
                                value: "dot",
                            },
                            {
                                name: Y.intl.string(Y.t.Ji2EVF),
                                value: "hidden",
                            },
                        ],
                        onChange: t,
                        value: e,
                    }),
                ],
            }),
            (0, r.jsx)(f.$i$, { className: z.marginTop20 }),
        ],
    });
}
function ef() {
    let e = (0, c.e7)([h.Z], () => h.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, E.ZP)();
    function n(e) {
        (0, p.X2)(e), x.default.track(F.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)("div", {
        className: z.marginTop20,
        children: (0, r.jsx)(f.j7V, {
            value: e,
            onChange: n,
            note: Y.intl.format(W.default.L8U56u, {
                onClickOpenModal() {
                    (0, T.I)({ analyticsLocations: t });
                },
            }),
            children: Y.intl.string(W.default["2gFUEx"]),
        }),
    });
}
function e_() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    (0, U.Z)(t, B.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
    let n = (0, G.Z)();
    return (0, r.jsx)(f.xJW, {
        ref: t,
        title: Y.intl.string(Y.t.BT8Bmp),
        className: o()(z.marginTop20, K.syncProfileThemeWithUserTheme),
        children: (0, r.jsx)(P.F, {
            setting: Z.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(f.j7V, {
                note: Y.intl.format(Y.t.u6UjrK, {
                    onThemeClick() {
                        n(M.n.APPEARANCE_PANEL, { section: F.oAB.APPEARANCE });
                    },
                }),
                className: z.marginTop20,
                value: e,
                onChange: p.Uv,
                children: Y.intl.string(Y.t["sSY+mJ"]),
            }),
        }),
    });
}
function ep() {
    let [e] = (0, c.Wu)([h.Z], () => [h.Z.syncForcedColors, h.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, p.qz)(t), 150));
    }, [t, e]);
    let o = Y.intl.format(Y.t.GwEVEx, { learnMoreLink: L.Z.getArticleURL(F.BhN.FORCED_COLORS) });
    return (0, r.jsx)(f.xJW, {
        title: Y.intl.string(Y.t.TYyfOz),
        className: z.marginTop20,
        children: (0, r.jsx)(P.F, {
            setting: Z.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(f.j7V, {
                value: t,
                note: o,
                onChange: n,
                children: Y.intl.string(Y.t.cguieX),
            }),
        }),
    });
}
function eh() {
    let e = j.QK.useSetting(),
        t = j.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, c.cj)([h.Z, k.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: k.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: k.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        _ = "auto" === a,
        m = i.useRef(null);
    (0, U.Z)(m, B.rP.REDUCED_MOTION);
    let g = i.useCallback(
            (e, t) => {
                (0, p.Zt)(t ? "auto" : s);
            },
            [s],
        ),
        E = i.useCallback((e) => {
            (0, p.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsxs)(f.xJW, {
        ref: m,
        title: Y.intl.string(Y.t.e3TR1d),
        className: o()(z.marginTop20, K.reducedMotion),
        children: [
            (0, r.jsx)(f.R94, {
                type: f.R94.Types.DESCRIPTION,
                className: z.marginBottom8,
                children: Y.intl.format(Y.t["2l9U2t"], { helpdeskArticle: L.Z.getArticleURL(F.BhN.REDUCED_MOTION) }),
            }),
            (0, r.jsx)(d.$q, {
                className: o()(z.marginTop20, z.marginBottom20),
                value: _,
                shape: d.zV.BOX,
                type: d.M0.INVERTED,
                onChange: g,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    children: Y.intl.string(Y.t["+Dx+HB"]),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(f.j7V, {
                    value: n,
                    onChange: E,
                    children: Y.intl.string(Y.t.b3XBzs),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(f.j7V, {
                    className: z.marginBottom20,
                    value: e,
                    note: null != l ? (0, R.Z)(l) : void 0,
                    onChange: j.QK.updateSetting,
                    children: Y.intl.string(Y.t.Iayoh4),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(f.j7V, {
                    className: z.marginBottom20,
                    value: t,
                    note: null != u ? (0, R.Z)(u) : void 0,
                    onChange: j.Yk.updateSetting,
                    children: Y.intl.string(Y.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function em() {
    let e = j.Wp.useSetting(),
        t = (0, c.e7)([k.Z], () => k.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            j.Wp.updateSetting(e.value);
        }, []);
    return (0, r.jsxs)(f.xJW, {
        className: z.marginTop20,
        title: Y.intl.string(Y.t["6NtAuL"]),
        children: [
            (0, r.jsx)(f.R94, {
                type: f.R94.Types.DESCRIPTION,
                className: z.marginBottom8,
                children: null != t ? (0, R.Z)(t) : Y.intl.string(Y.t.GRa6U1),
            }),
            (0, r.jsx)(d.Gu, {
                options: [
                    {
                        name: Y.intl.string(Y.t["Xp+X2d"]),
                        value: V.yr.ALWAYS_ANIMATE,
                    },
                    {
                        name: Y.intl.string(Y.t.IlLT7e),
                        desc: Y.intl.string(Y.t.bIW9Tk),
                        value: V.yr.ANIMATE_ON_INTERACTION,
                    },
                    {
                        name: Y.intl.string(Y.t.IGu8x8),
                        value: V.yr.NEVER_ANIMATE,
                    },
                ],
                onChange: n,
                value: e,
            }),
        ],
    });
}
function eg() {
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = j.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, U.Z)(n, B.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(f.xJW, {
            ref: n,
            className: z.marginTop20,
            children: [
                (0, r.jsx)(f.vwX, {
                    className: z.marginBottom8,
                    children: Y.intl.string(Y.t.onqU6u),
                }),
                (0, r.jsx)(P.F, {
                    setting: Z.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(f.j7V, {
                        className: z.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: Y.intl.string(Y.t["3Fztn5"]),
                    }),
                }),
                (0, r.jsx)(P.F, {
                    setting: Z.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(f.j7V, {
                        className: z.marginTop8,
                        value: t,
                        note: Y.intl.string(Y.t.Q7wgHR),
                        onChange: (e) => {
                            x.default.track(F.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: F.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                j.dN.updateSetting(e);
                        },
                        children: Y.intl.string(Y.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function eE() {
    let e = j.OW.useSetting(),
        t = (0, c.e7)([D.Z], () => D.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!_.Zh) return null;
    let o = () => {
        if (n) {
            (0, w.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, w.cP)(Y.intl.string(Y.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsxs)("div", {
                    className: z.marginTop20,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: z.marginBottom8,
                            children: Y.intl.string(Y.t.VpSKeH),
                        }),
                        (0, r.jsx)(P.F, {
                            setting: Z.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                            children: (0, r.jsx)(f.j7V, {
                                className: z.marginTop20,
                                value: e,
                                onChange: j.OW.updateSetting,
                                children: Y.intl.string(Y.t.qvTIwc),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: Z.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)("div", {
                    className: z.marginTop20,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            id: en,
                            className: z.marginBottom20,
                            children: Y.intl.string(Y.t.lsW5Eh),
                        }),
                        (0, r.jsx)("div", {
                            className: K.ttsPreviewWrapper,
                            children: (0, r.jsx)(f.zxk, {
                                icon: n ? f.fpf : f.o1U,
                                text: Y.intl.string(Y.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(Y.intl.string(Y.t.hymc8v), " ")
                                    .concat(Y.intl.string(Y.t.lsW5Eh)),
                            }),
                        }),
                        (0, r.jsx)(f.iRW, {
                            markers: H.q,
                            initialValue: t,
                            defaultValue: 1,
                            stickToMarkers: !0,
                            onValueChange: ei,
                            onValueRender: (e) => "x".concat(e.toFixed(2)),
                            onMarkerRender: (e) =>
                                0 === e
                                    ? (0, r.jsx)("span", {
                                          className: K.ttsSliderMarker,
                                          children: Y.intl.string(Y.t["493lwc"]),
                                      })
                                    : 10 === e
                                      ? (0, r.jsx)("span", {
                                            className: K.ttsSliderMarker,
                                            children: Y.intl.string(Y.t.ZSZEdX),
                                        })
                                      : 1 === e
                                        ? (0, r.jsx)("span", { children: "x1.0" })
                                        : e % 1 == 0
                                          ? ""
                                          : void 0,
                            "aria-labelledby": en,
                        }),
                    ],
                }),
            }),
        ],
    });
}
