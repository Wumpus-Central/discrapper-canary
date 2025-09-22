n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(538534),
    f = n(755721),
    _ = n(481060),
    p = n(419363),
    h = n(857595),
    m = n(607070),
    g = n(299363),
    E = n(627845),
    b = n(906732),
    y = n(675997),
    O = n(377171),
    v = n(313201),
    I = n(243778),
    T = n(594928),
    S = n(829716),
    A = n(786761),
    C = n(3148),
    N = n(739566),
    R = n(753206),
    P = n(440849),
    w = n(921801),
    D = n(196051),
    x = n(441729),
    L = n(626135),
    j = n(63063),
    M = n(695346),
    k = n(313789),
    U = n(263937),
    G = n(996073),
    B = n(947889),
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
let et = (0, v.hQ)(),
    en = (0, v.hQ)(),
    er = (0, v.hQ)(),
    ei = l().debounce((e) => {
        (0, h.o2)(e);
    }, 250),
    ea = l().debounce((e) => {
        (0, D.Ct)(e);
    }, 250);
function eo(e) {
    let t = g.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = y.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        i = T.fN.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        a = (0, B.Z)();
    return (0, r.jsxs)(_.hjN, {
        tag: _.RB0.H1,
        title: W.intl.string(W.t.G0neg4),
        children: [
            (0, r.jsx)("div", {
                className: q.marginBottom20,
                children: (0, r.jsx)(es, {}),
            }),
            t
                ? (0, r.jsx)(w.F, {
                      setting: F.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, r.jsx)(el, {}),
                  })
                : null,
            (0, r.jsxs)(w.F, {
                setting: F.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(ec, {}), (0, r.jsx)(_.$i$, {})],
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(eu, {}),
            }),
            n
                ? (0, r.jsx)(w.F, {
                      setting: F.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, r.jsx)(ed, {}),
                  })
                : null,
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(ef, {}),
            }),
            i &&
                (0, r.jsx)(w.F, {
                    setting: F.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, r.jsx)(e_, {}),
                }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)(ep, {}),
            }),
            (0, E.b)()
                ? (0, r.jsxs)(w.F, {
                      setting: F.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(eh, {}), " "],
                  })
                : null,
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(em, {}),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(eg, {}),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(eE, {}),
            }),
            (0, r.jsx)(eb, {}),
            (0, r.jsxs)(w.F, {
                setting: F.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(_.$i$, { className: q.marginTop20 }),
                    (0, r.jsx)(_.Text, {
                        className: q.marginTop20,
                        variant: "text-md/normal",
                        children: W.intl.format(W.t.DHpTjY, {
                            onAppearanceClick() {
                                a(k.n.APPEARANCE_PANEL, { section: V.oAB.APPEARANCE });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function es() {
    let e = M.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, A.e5)(
                    ee(
                        J(
                            {},
                            (0, C.ZP)({
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
    return (0, r.jsx)(_.Rny, {
        children: (0, r.jsxs)(_.Zbd, {
            className: z.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: z.previewHeader,
                    children: [
                        (0, r.jsx)(_.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: W.intl.string(W.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: z.previewAvatars,
                            children: [V.Skl.ONLINE, V.Skl.DND, V.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    _.Xo$,
                                    {
                                        "aria-label": W.intl.string(W.t.lqaIxM),
                                        src: X,
                                        size: _.EFr.SIZE_32,
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
                    children: (0, r.jsx)(R.Z, {
                        compact: e,
                        author: ee(J({}, (0, N.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function el() {
    let e = (0, c.e7)([m.Z], () => m.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, h.vW)(e ? m.X.HIGH : m.X.DEFAULT);
    }
    return (0, r.jsx)(_.hjN, {
        children: (0, r.jsx)(_.j7V, {
            value: e,
            onChange: t,
            note: W.intl.string(W.t["v2qF8/"]),
            children: (0, r.jsxs)(_.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    W.intl.string(W.t.aZlePj),
                    " ",
                    (0, r.jsx)(I.ZP, {
                        contentTypes: [u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, r.jsx)(_.IGR, {
                                      text: W.intl.string(W.t.y2b7CA),
                                      color: O.Z.BG_BRAND,
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
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([m.Z], () => ({
        saturation: m.Z.saturation,
        desaturateUserColors: m.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(_.hjN, {
        className: q.marginTop20,
        children: [
            (0, r.jsx)(_.vwX, {
                id: et,
                className: q.marginBottom8,
                children: W.intl.string(W.t["5PWWCQ"]),
            }),
            (0, r.jsx)(_.R94, {
                id: en,
                type: _.R94.Types.DESCRIPTION,
                className: q.marginBottom20,
                children: W.intl.string(W.t["0PbE/P"]),
            }),
            (0, r.jsx)(_.iRW, {
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
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(_.j7V, {
                    hideBorder: !0,
                    className: o()(q.marginTop20, q.marginBottom20),
                    value: t,
                    onChange: h.f1,
                    note: W.intl.string(W.t.nlAOER),
                    children: W.intl.string(W.t.bQCodH),
                }),
            }),
        ],
    });
}
function eu() {
    let e = (0, c.e7)([m.Z], () => m.Z.alwaysShowLinkDecorations);
    function t() {
        (0, h.gs)(!e);
    }
    return (0, r.jsx)("div", {
        className: q.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            note: W.intl.string(W.t["72i5GB"]),
            value: e,
            onChange: t,
            children: W.intl.string(W.t.OLZFBw),
        }),
    });
}
function ed() {
    let e = (0, c.e7)([m.Z], () => {
        var e;
        return null == (e = m.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)("div", {
        className: q.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            note: W.intl.string(W.t.nNZ1T0),
            value: e,
            onChange: () => (0, h.HU)(!e),
            children: W.intl.string(W.t["+IsihY"]),
        }),
    });
}
function ef() {
    let e = (0, c.e7)([m.Z], () => m.Z.roleStyle);
    function t(e) {
        (0, h.u1)(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.E, {
                label: W.intl.string(W.t.uSOPWl),
                description: W.intl.string(W.t["86hjzc"]),
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
            (0, r.jsx)(_.$i$, { className: q.marginTop20 }),
        ],
    });
}
function e_() {
    let e = (0, c.e7)([m.Z], () => m.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, b.ZP)();
    function n(e) {
        (0, h.X2)(e), L.default.track(V.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)("div", {
        className: q.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            value: e,
            onChange: n,
            note: W.intl.format(K.default.L8U56u, {
                onClickOpenModal() {
                    (0, S.I)({ analyticsLocations: t });
                },
            }),
            children: W.intl.string(K.default["2gFUEx"]),
        }),
    });
}
function ep() {
    let e = (0, c.e7)([m.Z], () => m.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    (0, G.Z)(t, Z.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
    let n = (0, B.Z)();
    return (0, r.jsx)(_.hjN, {
        ref: t,
        title: W.intl.string(W.t.BT8Bmp),
        children: (0, r.jsx)(w.F, {
            setting: F.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(_.j7V, {
                note: W.intl.format(W.t.u6UjrK, {
                    onThemeClick() {
                        n(k.n.APPEARANCE_PANEL, { section: V.oAB.APPEARANCE });
                    },
                }),
                className: q.marginTop8,
                value: e,
                onChange: h.Uv,
                children: W.intl.string(W.t["sSY+mJ"]),
            }),
        }),
    });
}
function eh() {
    let [e] = (0, c.Wu)([m.Z], () => [m.Z.syncForcedColors, m.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, h.qz)(t), 150));
    }, [t, e]);
    let o = W.intl.format(W.t.GwEVEx, { learnMoreLink: j.Z.getArticleURL(V.BhN.FORCED_COLORS) });
    return (0, r.jsx)(_.hjN, {
        title: W.intl.string(W.t.TYyfOz),
        className: q.marginTop20,
        children: (0, r.jsx)(w.F, {
            setting: F.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(_.j7V, {
                value: t,
                note: o,
                onChange: n,
                children: W.intl.string(W.t.cguieX),
            }),
        }),
    });
}
function em() {
    let e = M.QK.useSetting(),
        t = M.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, c.cj)([m.Z, U.Z], () => ({
            systemPrefersReducedMotion: m.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: m.Z.rawPrefersReducedMotion,
            useReducedMotion: m.Z.useReducedMotion,
            gifAutoPlayOverrideReason: U.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: U.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        p = i.useRef(null);
    (0, G.Z)(p, Z.rP.REDUCED_MOTION);
    let g = i.useCallback(
            (e, t) => {
                (0, h.Zt)(t ? "auto" : s);
            },
            [s],
        ),
        E = i.useCallback((e) => {
            (0, h.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsxs)(_.hjN, {
        ref: p,
        title: W.intl.string(W.t.e3TR1d),
        className: o()(q.marginTop20, z.reducedMotion),
        children: [
            (0, r.jsx)(_.R94, {
                type: _.R94.Types.DESCRIPTION,
                className: q.marginBottom8,
                children: W.intl.format(W.t["2l9U2t"], { helpdeskArticle: j.Z.getArticleURL(V.BhN.REDUCED_MOTION) }),
            }),
            (0, r.jsx)(f.$q, {
                className: o()(q.marginTop8, q.marginBottom20),
                value: d,
                shape: f.zV.BOX,
                type: f.M0.INVERTED,
                onChange: g,
                children: (0, r.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    children: W.intl.string(W.t["+Dx+HB"]),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(_.j7V, {
                    value: n,
                    onChange: E,
                    children: W.intl.string(W.t.b3XBzs),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(_.j7V, {
                    className: q.marginBottom20,
                    value: e,
                    note: null != l ? (0, P.Z)(l) : void 0,
                    onChange: M.QK.updateSetting,
                    children: W.intl.string(W.t.Iayoh4),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(_.j7V, {
                    className: q.marginBottom20,
                    value: t,
                    note: null != u ? (0, P.Z)(u) : void 0,
                    onChange: M.Yk.updateSetting,
                    children: W.intl.string(W.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function eg() {
    let e = M.Wp.useSetting(),
        t = (0, c.e7)([U.Z], () => U.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            M.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(d.E, {
        label: W.intl.string(W.t["6NtAuL"]),
        description: null != t ? (0, P.Z)(t) : W.intl.string(W.t.GRa6U1),
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
        onChange: (e) => n(e),
        value: e,
    });
}
function eE() {
    let e = (0, c.e7)([m.Z], () => m.Z.isSubmitButtonEnabled),
        t = M.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, G.Z)(n, Z.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(_.hjN, {
            ref: n,
            className: q.marginTop20,
            title: W.intl.string(W.t.onqU6u),
            children: [
                (0, r.jsx)(w.F, {
                    setting: F.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(_.j7V, {
                        className: q.marginTop8,
                        value: e,
                        onChange: h.eN,
                        children: W.intl.string(W.t["3Fztn5"]),
                    }),
                }),
                (0, r.jsx)(w.F, {
                    setting: F.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(_.j7V, {
                        className: q.marginTop8,
                        value: t,
                        note: W.intl.string(W.t.Q7wgHR),
                        onChange: (e) => {
                            L.default.track(V.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: V.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                M.dN.updateSetting(e);
                        },
                        children: W.intl.string(W.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function eb() {
    let e = M.OW.useSetting(),
        t = (0, c.e7)([x.Z], () => x.Z.speechRate),
        [n, a] = i.useState(!1);
    if (!p.Zh) return null;
    let o = () => {
        if (n) {
            (0, D.NB)(), a(!1);
            return;
        }
        let e = () => a(!0),
            t = () => a(!1);
        (0, D.cP)(W.intl.string(W.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsxs)("div", {
                    className: q.marginTop20,
                    children: [
                        (0, r.jsx)(_.vwX, {
                            className: q.marginBottom8,
                            children: W.intl.string(W.t.VpSKeH),
                        }),
                        (0, r.jsx)(w.F, {
                            setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                            children: (0, r.jsx)(_.j7V, {
                                className: q.marginTop20,
                                value: e,
                                onChange: M.OW.updateSetting,
                                children: W.intl.string(W.t.qvTIwc),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)("div", {
                    className: q.marginTop20,
                    children: [
                        (0, r.jsx)(_.vwX, {
                            id: er,
                            className: q.marginBottom20,
                            children: W.intl.string(W.t.lsW5Eh),
                        }),
                        (0, r.jsx)("div", {
                            className: z.ttsPreviewWrapper,
                            children: (0, r.jsx)(_.zxk, {
                                icon: n ? _.fpf : _.o1U,
                                text: W.intl.string(W.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(W.intl.string(W.t.hymc8v), " ")
                                    .concat(W.intl.string(W.t.lsW5Eh)),
                            }),
                        }),
                        (0, r.jsx)(_.iRW, {
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
