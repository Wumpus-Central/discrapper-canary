n.d(t, { Z: () => es }), n(388685);
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
    B = n(273313),
    Z = n(947889),
    F = n(526761),
    V = n(726985),
    H = n(981631),
    Y = n(611480),
    W = n(653477),
    K = n(388032),
    z = n(62222),
    q = n(133991),
    X = n(10198),
    Q = n(328756);
function J(e, t, n) {
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
function $(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ee(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let en = (0, v.hQ)(),
    er = (0, v.hQ)(),
    ei = (0, v.hQ)(),
    ea = l().debounce((e) => {
        (0, h.o2)(e);
    }, 250),
    eo = l().debounce((e) => {
        (0, D.Ct)(e);
    }, 250);
function es(e) {
    let t = g.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = y.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        i = T.fN.useExperiment({ location: "UserSettingsAccessibility" }).enabled,
        a = (0, Z.Z)();
    return (0, r.jsxs)(B.Z, {
        title: K.intl.string(K.t.G0neg4),
        children: [
            (0, r.jsx)("div", {
                className: X.marginBottom20,
                children: (0, r.jsx)(el, {}),
            }),
            t
                ? (0, r.jsx)(w.F, {
                      setting: V.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, r.jsx)(ec, {}),
                  })
                : null,
            (0, r.jsxs)(w.F, {
                setting: V.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(eu, {}), (0, r.jsx)(_.$i$, {})],
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(ed, {}),
            }),
            n
                ? (0, r.jsx)(w.F, {
                      setting: V.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, r.jsx)(ef, {}),
                  })
                : null,
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(e_, {}),
            }),
            i &&
                (0, r.jsx)(w.F, {
                    setting: V.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, r.jsx)(ep, {}),
                }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)(eh, {}),
            }),
            (0, E.b)()
                ? (0, r.jsxs)(w.F, {
                      setting: V.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(em, {}), " "],
                  })
                : null,
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(eg, {}),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(eE, {}),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(eb, {}),
            }),
            (0, r.jsx)(ey, {}),
            (0, r.jsxs)(w.F, {
                setting: V.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(_.$i$, { className: X.marginTop20 }),
                    (0, r.jsx)(_.Text, {
                        className: X.marginTop20,
                        variant: "text-md/normal",
                        children: K.intl.format(K.t.DHpTjY, {
                            onAppearanceClick() {
                                a(k.n.APPEARANCE_PANEL, { section: H.oAB.APPEARANCE });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function el() {
    let e = M.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, A.e5)(
                    et(
                        $(
                            {},
                            (0, C.ZP)({
                                channelId: e,
                                content: K.intl.formatToPlainString(K.t.bB80LC, {
                                    previewLink: "https://discord.com/accessibility",
                                }),
                            }),
                        ),
                        {
                            state: H.yb.SENT,
                            id: "".concat(0),
                        },
                    ),
                );
            return (t.colorString = "green"), t;
        });
    return (0, r.jsx)(_.Rny, {
        children: (0, r.jsxs)(_.Zbd, {
            className: q.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: q.previewHeader,
                    children: [
                        (0, r.jsx)(_.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: K.intl.string(K.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: q.previewAvatars,
                            children: [H.Skl.ONLINE, H.Skl.DND, H.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    _.Xo$,
                                    {
                                        "aria-label": K.intl.string(K.t.lqaIxM),
                                        src: Q,
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
                    className: q.previewMessage,
                    children: (0, r.jsx)(R.Z, {
                        compact: e,
                        author: et($({}, (0, N.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ec() {
    let e = (0, c.e7)([m.Z], () => m.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, h.vW)(e ? m.X.HIGH : m.X.DEFAULT);
    }
    return (0, r.jsx)(_.hjN, {
        children: (0, r.jsx)(_.j7V, {
            value: e,
            onChange: t,
            note: K.intl.string(K.t["v2qF8/"]),
            children: (0, r.jsxs)(_.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    K.intl.string(K.t.aZlePj),
                    " ",
                    (0, r.jsx)(I.ZP, {
                        contentTypes: [u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, r.jsx)(_.IGR, {
                                      text: K.intl.string(K.t.y2b7CA),
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
function eu() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([m.Z], () => ({
        saturation: m.Z.saturation,
        desaturateUserColors: m.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(_.hjN, {
        className: X.marginTop20,
        children: [
            (0, r.jsx)(_.vwX, {
                id: en,
                className: X.marginBottom8,
                children: K.intl.string(K.t["5PWWCQ"]),
            }),
            (0, r.jsx)(_.R94, {
                id: er,
                type: _.R94.Types.DESCRIPTION,
                className: X.marginBottom20,
                children: K.intl.string(K.t["0PbE/P"]),
            }),
            (0, r.jsx)(_.iRW, {
                "aria-labelledby": en,
                "aria-describedby": er,
                markers: H.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: ea,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(_.j7V, {
                    hideBorder: !0,
                    className: o()(X.marginTop20, X.marginBottom20),
                    value: t,
                    onChange: h.f1,
                    note: K.intl.string(K.t.nlAOER),
                    children: K.intl.string(K.t.bQCodH),
                }),
            }),
        ],
    });
}
function ed() {
    let e = (0, c.e7)([m.Z], () => m.Z.alwaysShowLinkDecorations);
    function t() {
        (0, h.gs)(!e);
    }
    return (0, r.jsx)("div", {
        className: X.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            note: K.intl.string(K.t["72i5GB"]),
            value: e,
            onChange: t,
            children: K.intl.string(K.t.OLZFBw),
        }),
    });
}
function ef() {
    let e = (0, c.e7)([m.Z], () => {
        var e;
        return null == (e = m.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)("div", {
        className: X.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            note: K.intl.string(K.t.nNZ1T0),
            value: e,
            onChange: () => (0, h.HU)(!e),
            children: K.intl.string(K.t["+IsihY"]),
        }),
    });
}
function e_() {
    let e = (0, c.e7)([m.Z], () => m.Z.roleStyle);
    function t(e) {
        (0, h.u1)(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.E, {
                label: K.intl.string(K.t.uSOPWl),
                description: K.intl.string(K.t["86hjzc"]),
                options: [
                    {
                        name: K.intl.string(K.t.YEOEi4),
                        value: "username",
                    },
                    {
                        name: K.intl.string(K.t.mQaro6),
                        value: "dot",
                    },
                    {
                        name: K.intl.string(K.t.Ji2EVF),
                        value: "hidden",
                    },
                ],
                onChange: t,
                value: e,
            }),
            (0, r.jsx)(_.$i$, { className: X.marginTop20 }),
        ],
    });
}
function ep() {
    let e = (0, c.e7)([m.Z], () => m.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, b.ZP)();
    function n(e) {
        (0, h.X2)(e), L.default.track(H.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)("div", {
        className: X.marginTop20,
        children: (0, r.jsx)(_.j7V, {
            value: e,
            onChange: n,
            note: K.intl.format(z.default.L8U56u, {
                onClickOpenModal() {
                    (0, S.I)({ analyticsLocations: t });
                },
            }),
            children: K.intl.string(z.default["2gFUEx"]),
        }),
    });
}
function eh() {
    let e = (0, c.e7)([m.Z], () => m.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    (0, G.Z)(t, F.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
    let n = (0, Z.Z)();
    return (0, r.jsx)(_.hjN, {
        ref: t,
        title: K.intl.string(K.t.BT8Bmp),
        children: (0, r.jsx)(w.F, {
            setting: V.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
            children: (0, r.jsx)(_.j7V, {
                note: K.intl.format(K.t.u6UjrK, {
                    onThemeClick() {
                        n(k.n.APPEARANCE_PANEL, { section: H.oAB.APPEARANCE });
                    },
                }),
                className: X.marginTop8,
                value: e,
                onChange: h.Uv,
                children: K.intl.string(K.t["sSY+mJ"]),
            }),
        }),
    });
}
function em() {
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
    let o = K.intl.format(K.t.GwEVEx, { learnMoreLink: j.Z.getArticleURL(H.BhN.FORCED_COLORS) });
    return (0, r.jsx)(_.hjN, {
        title: K.intl.string(K.t.TYyfOz),
        className: X.marginTop20,
        children: (0, r.jsx)(w.F, {
            setting: V.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(_.j7V, {
                value: t,
                note: o,
                onChange: n,
                children: K.intl.string(K.t.cguieX),
            }),
        }),
    });
}
function eg() {
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
    (0, G.Z)(p, F.rP.REDUCED_MOTION);
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
        title: K.intl.string(K.t.e3TR1d),
        className: o()(X.marginTop20, q.reducedMotion),
        children: [
            (0, r.jsx)(_.R94, {
                type: _.R94.Types.DESCRIPTION,
                className: X.marginBottom8,
                children: K.intl.format(K.t["2l9U2t"], { helpdeskArticle: j.Z.getArticleURL(H.BhN.REDUCED_MOTION) }),
            }),
            (0, r.jsx)(f.$q, {
                className: o()(X.marginTop8, X.marginBottom20),
                value: d,
                shape: f.zV.BOX,
                type: f.M0.INVERTED,
                onChange: g,
                children: (0, r.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    children: K.intl.string(K.t["+Dx+HB"]),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(_.j7V, {
                    value: n,
                    onChange: E,
                    children: K.intl.string(K.t.b3XBzs),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(_.j7V, {
                    className: X.marginBottom20,
                    value: e,
                    note: null != l ? (0, P.Z)(l) : void 0,
                    onChange: M.QK.updateSetting,
                    children: K.intl.string(K.t.Iayoh4),
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(_.j7V, {
                    className: X.marginBottom20,
                    value: t,
                    note: null != u ? (0, P.Z)(u) : void 0,
                    onChange: M.Yk.updateSetting,
                    children: K.intl.string(K.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function eE() {
    let e = M.Wp.useSetting(),
        t = (0, c.e7)([U.Z], () => U.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            M.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(d.E, {
        label: K.intl.string(K.t["6NtAuL"]),
        description: null != t ? (0, P.Z)(t) : K.intl.string(K.t.GRa6U1),
        options: [
            {
                name: K.intl.string(K.t["Xp+X2d"]),
                value: Y.yr.ALWAYS_ANIMATE,
            },
            {
                name: K.intl.string(K.t.IlLT7e),
                desc: K.intl.string(K.t.bIW9Tk),
                value: Y.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: K.intl.string(K.t.IGu8x8),
                value: Y.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eb() {
    let e = (0, c.e7)([m.Z], () => m.Z.isSubmitButtonEnabled),
        t = M.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, G.Z)(n, F.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(_.hjN, {
            ref: n,
            className: X.marginTop20,
            title: K.intl.string(K.t.onqU6u),
            children: [
                (0, r.jsx)(w.F, {
                    setting: V.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(_.j7V, {
                        className: X.marginTop8,
                        value: e,
                        onChange: h.eN,
                        children: K.intl.string(K.t["3Fztn5"]),
                    }),
                }),
                (0, r.jsx)(w.F, {
                    setting: V.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(_.j7V, {
                        className: X.marginTop8,
                        value: t,
                        note: K.intl.string(K.t.Q7wgHR),
                        onChange: (e) => {
                            L.default.track(H.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: H.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                M.dN.updateSetting(e);
                        },
                        children: K.intl.string(K.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function ey() {
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
        (0, D.cP)(K.intl.string(K.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsxs)("div", {
                    className: X.marginTop20,
                    children: [
                        (0, r.jsx)(_.vwX, {
                            className: X.marginBottom8,
                            children: K.intl.string(K.t.VpSKeH),
                        }),
                        (0, r.jsx)(w.F, {
                            setting: V.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                            children: (0, r.jsx)(_.j7V, {
                                className: X.marginTop20,
                                value: e,
                                onChange: M.OW.updateSetting,
                                children: K.intl.string(K.t.qvTIwc),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(w.F, {
                setting: V.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)("div", {
                    className: X.marginTop20,
                    children: [
                        (0, r.jsx)(_.vwX, {
                            id: ei,
                            className: X.marginBottom20,
                            children: K.intl.string(K.t.lsW5Eh),
                        }),
                        (0, r.jsx)("div", {
                            className: q.ttsPreviewWrapper,
                            children: (0, r.jsx)(_.zxk, {
                                icon: n ? _.fpf : _.o1U,
                                text: K.intl.string(K.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(K.intl.string(K.t.hymc8v), " ")
                                    .concat(K.intl.string(K.t.lsW5Eh)),
                            }),
                        }),
                        (0, r.jsx)(_.iRW, {
                            markers: W.q,
                            initialValue: t,
                            defaultValue: 1,
                            stickToMarkers: !0,
                            onValueChange: eo,
                            onValueRender: (e) => "x".concat(e.toFixed(2)),
                            onMarkerRender: (e) =>
                                0 === e
                                    ? (0, r.jsx)("span", {
                                          className: q.ttsSliderMarker,
                                          children: K.intl.string(K.t["493lwc"]),
                                      })
                                    : 10 === e
                                      ? (0, r.jsx)("span", {
                                            className: q.ttsSliderMarker,
                                            children: K.intl.string(K.t.ZSZEdX),
                                        })
                                      : 1 === e
                                        ? (0, r.jsx)("span", { children: "x1.0" })
                                        : e % 1 == 0
                                          ? ""
                                          : void 0,
                            "aria-labelledby": ei,
                        }),
                    ],
                }),
            }),
        ],
    });
}
