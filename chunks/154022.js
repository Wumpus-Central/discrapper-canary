n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    f = n(230711),
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
    w = n(983929),
    D = n(28682),
    x = n(196051),
    L = n(441729),
    j = n(626135),
    M = n(63063),
    k = n(695346),
    U = n(263937),
    G = n(996073),
    B = n(869235),
    Z = n(526761),
    F = n(726985),
    V = n(981631),
    H = n(611480),
    Y = n(653477),
    W = n(388032),
    K = n(693450),
    z = n(953752),
    q = n(197571),
    X = n(328756);
function Q(e, t, n) {
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
function J(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = (0, O.hQ)(),
    en = (0, O.hQ)(),
    er = (0, O.hQ)(),
    ei = l().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    ea = l().debounce((e) => {
        (0, x.Ct)(e);
    }, 250);
function eo(e) {
    let t = m.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = b.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        i = I.f.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        a = (0, w.Z)();
    return (0, r.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: W.intl.string(W.t.G0neg4),
        children: [
            (0, r.jsx)("div", {
                className: q.marginBottom20,
                children: (0, r.jsx)(es, {}),
            }),
            t
                ? (0, r.jsx)(P.F, {
                      setting: F.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, r.jsx)(el, {}),
                  })
                : null,
            (0, r.jsxs)(P.F, {
                setting: F.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(ec, {}), (0, r.jsx)(d.$i$, {})],
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(eu, {}),
            }),
            n
                ? (0, r.jsx)(P.F, {
                      setting: F.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, r.jsx)(ed, {}),
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(ef, {}),
            }),
            i &&
                (0, r.jsx)(P.F, {
                    setting: F.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, r.jsx)(e_, {}),
                }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)(ep, {}),
            }),
            (0, g.b)()
                ? (0, r.jsxs)(P.F, {
                      setting: F.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(eh, {}), " "],
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(em, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(eg, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(eE, {}),
            }),
            (0, r.jsx)(eb, {}),
            (0, r.jsxs)(P.F, {
                setting: F.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(d.$i$, { className: q.marginTop20 }),
                    (0, r.jsx)(d.Text, {
                        className: q.marginTop20,
                        variant: "text-md/normal",
                        children: W.intl.format(W.t.DHpTjY, {
                            onAppearanceClick() {
                                a(
                                    {
                                        key: B.t.APPEARANCE_PANEL,
                                        type: D.J.PANEL,
                                    },
                                    { section: V.oAB.APPEARANCE },
                                );
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function es() {
    let e = k.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, S.e5)(
                    ee(
                        J(
                            {},
                            (0, A.ZP)({
                                channelId: e,
                                content: W.intl.formatToPlainString(W.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: V.yb.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(d.Rny, {
        children: (0, r.jsxs)(d.Zbd, {
            className: z.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: z.previewHeader,
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: W.intl.string(W.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: z.previewAvatars,
                            children: [V.Skl.ONLINE, V.Skl.DND, V.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    d.Xo$,
                                    {
                                        "aria-label": W.intl.string(W.t.lqaIxM),
                                        src: X,
                                        size: d.EFr.SIZE_32,
                                        status: e,
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: z.previewMessage,
                    children: (0, r.jsx)(N.Z, {
                        compact: e,
                        author: ee(J({}, (0, C.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function el() {
    let e = (0, c.e7)([h.Z], () => h.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, p.vW)(e ? h.X.HIGH : h.X.DEFAULT);
    }
    return (0, r.jsx)(d.hjN, {
        children: (0, r.jsx)(d.j7V, {
            value: e,
            onChange: t,
            note: W.intl.string(W.t["v2qF8/"]),
            children: (0, r.jsxs)(d.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    W.intl.string(W.t.aZlePj),
                    " ",
                    (0, r.jsx)(v.ZP, {
                        contentTypes: [u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, r.jsx)(d.IGR, {
                                      text: W.intl.string(W.t.y2b7CA),
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
function ec() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(d.hjN, {
        className: q.marginTop20,
        children: [
            (0, r.jsx)(d.vwX, {
                id: et,
                className: q.marginBottom8,
                children: W.intl.string(W.t["5PWWCQ"]),
            }),
            (0, r.jsx)(d.R94, {
                id: en,
                type: d.R94.Types.DESCRIPTION,
                className: q.marginBottom20,
                children: W.intl.string(W.t["0PbE/P"]),
            }),
            (0, r.jsx)(d.iRW, {
                "aria-labelledby": et,
                "aria-describedby": en,
                markers: V.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: ei,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: o()(q.marginTop20, q.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: W.intl.string(W.t.nlAOER),
                    children: W.intl.string(W.t.bQCodH),
                }),
            }),
        ],
    });
}
function eu() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    function t() {
        (0, p.gs)(!e);
    }
    return (0, r.jsx)(d.xJW, {
        className: q.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            note: W.intl.string(W.t["72i5GB"]),
            value: e,
            onChange: t,
            children: W.intl.string(W.t.OLZFBw),
        }),
    });
}
function ed() {
    let e = (0, c.e7)([h.Z], () => {
        var e;
        return null == (e = h.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(d.xJW, {
        className: q.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            note: W.intl.string(W.t.nNZ1T0),
            value: e,
            onChange: () => (0, p.HU)(!e),
            children: W.intl.string(W.t["+IsihY"]),
        }),
    });
}
function ef() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    function t(e) {
        (0, p.u1)(e.value);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.xJW, {
                title: W.intl.string(W.t.uSOPWl),
                className: q.marginTop20,
                children: [
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: q.marginBottom8,
                        children: W.intl.string(W.t["86hjzc"]),
                    }),
                    (0, r.jsx)(d.FXm, {
                        options: [
                            {
                                name: W.intl.string(W.t.YEOEi4),
                                value: "username",
                            },
                            {
                                name: W.intl.string(W.t.mQaro6),
                                value: "dot",
                            },
                            {
                                name: W.intl.string(W.t.Ji2EVF),
                                value: "hidden",
                            },
                        ],
                        onChange: t,
                        value: e,
                    }),
                ],
            }),
            (0, r.jsx)(d.$i$, { className: q.marginTop20 }),
        ],
    });
}
function e_() {
    let e = (0, c.e7)([h.Z], () => h.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, E.ZP)();
    function n(e) {
        (0, p.X2)(e), j.default.track(V.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(d.xJW, {
        className: q.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            value: e,
            onChange: n,
            note: W.intl.format(K.default.L8U56u, {
                onClickOpenModal() {
                    (0, T.I)({ analyticsLocations: t });
                },
            }),
            children: W.intl.string(K.default["2gFUEx"]),
        }),
    });
}
function ep() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, G.Z)(t, Z.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)(d.xJW, {
            ref: t,
            title: W.intl.string(W.t.BT8Bmp),
            className: o()(q.marginTop20, z.syncProfileThemeWithUserTheme),
            children: (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, r.jsx)(d.j7V, {
                    note: W.intl.format(W.t.u6UjrK, {
                        onThemeClick() {
                            f.Z.open(V.oAB.APPEARANCE);
                        },
                    }),
                    className: q.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: W.intl.string(W.t["sSY+mJ"]),
                }),
            }),
        })
    );
}
function eh() {
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
    let o = W.intl.format(W.t.GwEVEx, { learnMoreLink: M.Z.getArticleURL(V.BhN.FORCED_COLORS) });
    return (0, r.jsx)(d.xJW, {
        title: W.intl.string(W.t.TYyfOz),
        className: q.marginTop20,
        children: (0, r.jsx)(P.F, {
            setting: F.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(d.j7V, {
                value: t,
                note: o,
                onChange: n,
                children: W.intl.string(W.t.cguieX),
            }),
        }),
    });
}
function em() {
    let e = k.QK.useSetting(),
        t = k.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, c.cj)([h.Z, U.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: U.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: U.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        f = "auto" === a,
        _ = i.useRef(null);
    (0, G.Z)(_, Z.rP.REDUCED_MOTION);
    let m = i.useCallback(
            (e, t) => {
                (0, p.Zt)(t ? "auto" : s);
            },
            [s],
        ),
        g = i.useCallback((e) => {
            (0, p.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsxs)(d.xJW, {
        ref: _,
        title: W.intl.string(W.t.e3TR1d),
        className: o()(q.marginTop20, z.reducedMotion),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: q.marginBottom8,
                children: W.intl.format(W.t["2l9U2t"], { helpdeskArticle: M.Z.getArticleURL(V.BhN.REDUCED_MOTION) }),
            }),
            (0, r.jsx)(d.XZJ, {
                className: o()(q.marginTop20, q.marginBottom20),
                value: f,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: m,
                children: (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: W.intl.string(W.t["+Dx+HB"]),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(d.j7V, {
                    value: n,
                    onChange: g,
                    children: W.intl.string(W.t.b3XBzs),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(d.j7V, {
                    className: q.marginBottom20,
                    value: e,
                    note: null != l ? (0, R.Z)(l) : void 0,
                    onChange: k.QK.updateSetting,
                    children: W.intl.string(W.t.Iayoh4),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(d.j7V, {
                    className: q.marginBottom20,
                    value: t,
                    note: null != u ? (0, R.Z)(u) : void 0,
                    onChange: k.Yk.updateSetting,
                    children: W.intl.string(W.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function eg() {
    let e = k.Wp.useSetting(),
        t = (0, c.e7)([U.Z], () => U.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            k.Wp.updateSetting(e.value);
        }, []);
    return (0, r.jsxs)(d.xJW, {
        className: q.marginTop20,
        title: W.intl.string(W.t["6NtAuL"]),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: q.marginBottom8,
                children: null != t ? (0, R.Z)(t) : W.intl.string(W.t.GRa6U1),
            }),
            (0, r.jsx)(d.FXm, {
                options: [
                    {
                        name: W.intl.string(W.t["Xp+X2d"]),
                        value: H.yr.ALWAYS_ANIMATE,
                    },
                    {
                        name: W.intl.string(W.t.IlLT7e),
                        desc: W.intl.string(W.t.bIW9Tk),
                        value: H.yr.ANIMATE_ON_INTERACTION,
                    },
                    {
                        name: W.intl.string(W.t.IGu8x8),
                        value: H.yr.NEVER_ANIMATE,
                    },
                ],
                onChange: n,
                value: e,
            }),
        ],
    });
}
function eE() {
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = k.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, G.Z)(n, Z.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(d.xJW, {
            ref: n,
            className: q.marginTop20,
            children: [
                (0, r.jsx)(d.vwX, {
                    className: q.marginBottom8,
                    children: W.intl.string(W.t.onqU6u),
                }),
                (0, r.jsx)(P.F, {
                    setting: F.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(d.j7V, {
                        className: q.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: W.intl.string(W.t["3Fztn5"]),
                    }),
                }),
                (0, r.jsx)(P.F, {
                    setting: F.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(d.j7V, {
                        className: q.marginTop8,
                        value: t,
                        note: W.intl.string(W.t.Q7wgHR),
                        onChange: (e) => {
                            j.default.track(V.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: V.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                k.dN.updateSetting(e);
                        },
                        children: W.intl.string(W.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function eb() {
    let e = k.OW.useSetting(),
        t = (0, c.e7)([L.Z], () => L.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!_.Zh) return null;
    let o = () => {
        if (n) {
            (0, x.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, x.cP)(W.intl.string(W.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsxs)(d.xJW, {
                    className: q.marginTop20,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            className: q.marginBottom8,
                            children: W.intl.string(W.t.VpSKeH),
                        }),
                        (0, r.jsx)(P.F, {
                            setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                            children: (0, r.jsx)(d.j7V, {
                                className: q.marginTop20,
                                value: e,
                                onChange: k.OW.updateSetting,
                                children: W.intl.string(W.t.qvTIwc),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)(d.xJW, {
                    className: q.marginTop20,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            id: er,
                            className: q.marginBottom20,
                            children: W.intl.string(W.t.lsW5Eh),
                        }),
                        (0, r.jsx)("div", {
                            className: z.ttsPreviewWrapper,
                            children: (0, r.jsx)(d.zxk, {
                                icon: n ? d.fpf : d.o1U,
                                text: W.intl.string(W.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(W.intl.string(W.t.hymc8v), " ")
                                    .concat(W.intl.string(W.t.lsW5Eh)),
                            }),
                        }),
                        (0, r.jsx)(d.iRW, {
                            markers: Y.q,
                            initialValue: t,
                            defaultValue: 1,
                            stickToMarkers: !0,
                            onValueChange: ea,
                            onValueRender: (e) => "x".concat(e.toFixed(2)),
                            onMarkerRender: (e) =>
                                0 === e
                                    ? (0, r.jsx)("span", {
                                          className: z.ttsSliderMarker,
                                          children: W.intl.string(W.t["493lwc"]),
                                      })
                                    : 10 === e
                                      ? (0, r.jsx)("span", {
                                            className: z.ttsSliderMarker,
                                            children: W.intl.string(W.t.ZSZEdX),
                                        })
                                      : 1 === e
                                        ? (0, r.jsx)("span", { children: "x1.0" })
                                        : e % 1 == 0
                                          ? ""
                                          : void 0,
                            "aria-labelledby": er,
                        }),
                    ],
                }),
            }),
        ],
    });
}
