n.d(t, { Z: () => er }), n(388685);
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
    w = n(196051),
    D = n(441729),
    x = n(626135),
    L = n(63063),
    j = n(695346),
    M = n(263937),
    k = n(996073),
    U = n(526761),
    G = n(726985),
    B = n(981631),
    Z = n(611480),
    V = n(653477),
    F = n(388032),
    H = n(693450),
    Y = n(953752),
    W = n(197571),
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
let J = (0, O.hQ)(),
    $ = (0, O.hQ)(),
    ee = (0, O.hQ)(),
    et = l().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    en = l().debounce((e) => {
        (0, w.Ct)(e);
    }, 250);
function er(e) {
    let t = m.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        n = b.Z.useConfig({ location: "UserSettingsAccessibility" }).enableShopTakeOver,
        i = I.f.useExperiment({ location: "UserSettingsAccessibility" }).enabled;
    return (0, r.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: F.intl.string(F.t.G0neg4),
        children: [
            (0, r.jsx)("div", {
                className: W.marginBottom20,
                children: (0, r.jsx)(ei, {}),
            }),
            t
                ? (0, r.jsx)(P.F, {
                      setting: G.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, r.jsx)(ea, {}),
                  })
                : null,
            (0, r.jsxs)(P.F, {
                setting: G.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(eo, {}), (0, r.jsx)(d.$i$, {})],
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(es, {}),
            }),
            n
                ? (0, r.jsx)(P.F, {
                      setting: G.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                      children: (0, r.jsx)(el, {}),
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(ec, {}),
            }),
            i &&
                (0, r.jsx)(P.F, {
                    setting: G.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, r.jsx)(eu, {}),
                }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)(ed, {}),
            }),
            (0, g.b)()
                ? (0, r.jsxs)(P.F, {
                      setting: G.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(ef, {}), " "],
                  })
                : null,
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(e_, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(ep, {}),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(eh, {}),
            }),
            (0, r.jsx)(em, {}),
            (0, r.jsxs)(P.F, {
                setting: G.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(d.$i$, { className: W.marginTop20 }),
                    (0, r.jsx)(d.Text, {
                        className: W.marginTop20,
                        variant: "text-md/normal",
                        children: F.intl.format(F.t.DHpTjY, {
                            onAppearanceClick() {
                                f.Z.open(B.oAB.APPEARANCE);
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ei() {
    let e = j.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, S.e5)(
                    Q(
                        q(
                            {},
                            (0, A.ZP)({
                                channelId: e,
                                content: F.intl.formatToPlainString(F.t.bB80LC, {
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
    return (0, r.jsx)(d.Rny, {
        children: (0, r.jsxs)(d.Zbd, {
            className: Y.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.previewHeader,
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: F.intl.string(F.t["2RHHg4"]),
                        }),
                        (0, r.jsx)("div", {
                            className: Y.previewAvatars,
                            children: [B.Skl.ONLINE, B.Skl.DND, B.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    d.Xo$,
                                    {
                                        "aria-label": F.intl.string(F.t.lqaIxM),
                                        src: K,
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
                    className: Y.previewMessage,
                    children: (0, r.jsx)(N.Z, {
                        compact: e,
                        author: Q(q({}, (0, C.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function ea() {
    let e = (0, c.e7)([h.Z], () => h.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, p.vW)(e ? h.X.HIGH : h.X.DEFAULT);
    }
    return (0, r.jsx)(d.hjN, {
        children: (0, r.jsx)(d.j7V, {
            value: e,
            onChange: t,
            note: F.intl.string(F.t["v2qF8/"]),
            children: (0, r.jsxs)(d.Kqy, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                children: [
                    F.intl.string(F.t.aZlePj),
                    " ",
                    (0, r.jsx)(v.ZP, {
                        contentTypes: [u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE
                                ? (0, r.jsx)(d.IGR, {
                                      text: F.intl.string(F.t.y2b7CA),
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
function eo() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(d.hjN, {
        className: W.marginTop20,
        children: [
            (0, r.jsx)(d.vwX, {
                id: J,
                className: W.marginBottom8,
                children: F.intl.string(F.t["5PWWCQ"]),
            }),
            (0, r.jsx)(d.R94, {
                id: $,
                type: d.R94.Types.DESCRIPTION,
                className: W.marginBottom20,
                children: F.intl.string(F.t["0PbE/P"]),
            }),
            (0, r.jsx)(d.iRW, {
                "aria-labelledby": J,
                "aria-describedby": $,
                markers: B.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: et,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: o()(W.marginTop20, W.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: F.intl.string(F.t.nlAOER),
                    children: F.intl.string(F.t.bQCodH),
                }),
            }),
        ],
    });
}
function es() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    function t() {
        (0, p.gs)(!e);
    }
    return (0, r.jsx)(d.xJW, {
        className: W.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            note: F.intl.string(F.t["72i5GB"]),
            value: e,
            onChange: t,
            children: F.intl.string(F.t.OLZFBw),
        }),
    });
}
function el() {
    let e = (0, c.e7)([h.Z], () => {
        var e;
        return null == (e = h.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(d.xJW, {
        className: W.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            note: F.intl.string(F.t.nNZ1T0),
            value: e,
            onChange: () => (0, p.HU)(!e),
            children: F.intl.string(F.t["+IsihY"]),
        }),
    });
}
function ec() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    function t(e) {
        (0, p.u1)(e.value);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.xJW, {
                title: F.intl.string(F.t.uSOPWl),
                className: W.marginTop20,
                children: [
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: W.marginBottom8,
                        children: F.intl.string(F.t["86hjzc"]),
                    }),
                    (0, r.jsx)(d.FXm, {
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
                        onChange: t,
                        value: e,
                    }),
                ],
            }),
            (0, r.jsx)(d.$i$, { className: W.marginTop20 }),
        ],
    });
}
function eu() {
    let e = (0, c.e7)([h.Z], () => h.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, E.ZP)();
    function n(e) {
        (0, p.X2)(e), x.default.track(B.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(d.xJW, {
        className: W.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            value: e,
            onChange: n,
            note: F.intl.format(H.default.L8U56u, {
                onClickOpenModal() {
                    (0, T.I)({ analyticsLocations: t });
                },
            }),
            children: F.intl.string(H.default["2gFUEx"]),
        }),
    });
}
function ed() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, k.Z)(t, U.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)(d.xJW, {
            ref: t,
            title: F.intl.string(F.t.BT8Bmp),
            className: o()(W.marginTop20, Y.syncProfileThemeWithUserTheme),
            children: (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, r.jsx)(d.j7V, {
                    note: F.intl.format(F.t.u6UjrK, {
                        onThemeClick() {
                            f.Z.open(B.oAB.APPEARANCE);
                        },
                    }),
                    className: W.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: F.intl.string(F.t["sSY+mJ"]),
                }),
            }),
        })
    );
}
function ef() {
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
    let o = F.intl.format(F.t.GwEVEx, { learnMoreLink: L.Z.getArticleURL(B.BhN.FORCED_COLORS) });
    return (0, r.jsx)(d.xJW, {
        title: F.intl.string(F.t.TYyfOz),
        className: W.marginTop20,
        children: (0, r.jsx)(P.F, {
            setting: G.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(d.j7V, {
                value: t,
                note: o,
                onChange: n,
                children: F.intl.string(F.t.cguieX),
            }),
        }),
    });
}
function e_() {
    let e = j.QK.useSetting(),
        t = j.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: s,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, c.cj)([h.Z, M.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: M.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        f = "auto" === a,
        _ = i.useRef(null);
    (0, k.Z)(_, U.rP.REDUCED_MOTION);
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
        title: F.intl.string(F.t.e3TR1d),
        className: o()(W.marginTop20, Y.reducedMotion),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: W.marginBottom8,
                children: F.intl.format(F.t["2l9U2t"], { helpdeskArticle: L.Z.getArticleURL(B.BhN.REDUCED_MOTION) }),
            }),
            (0, r.jsx)(d.XZJ, {
                className: o()(W.marginTop20, W.marginBottom20),
                value: f,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: m,
                children: (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: F.intl.string(F.t["+Dx+HB"]),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(d.j7V, {
                    value: n,
                    onChange: g,
                    children: F.intl.string(F.t.b3XBzs),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(d.j7V, {
                    className: W.marginBottom20,
                    value: e,
                    note: null != l ? (0, R.Z)(l) : void 0,
                    onChange: j.QK.updateSetting,
                    children: F.intl.string(F.t.Iayoh4),
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(d.j7V, {
                    className: W.marginBottom20,
                    value: t,
                    note: null != u ? (0, R.Z)(u) : void 0,
                    onChange: j.Yk.updateSetting,
                    children: F.intl.string(F.t.iIaOlZ),
                }),
            }),
        ],
    });
}
function ep() {
    let e = j.Wp.useSetting(),
        t = (0, c.e7)([M.Z], () => M.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            j.Wp.updateSetting(e.value);
        }, []);
    return (0, r.jsxs)(d.xJW, {
        className: W.marginTop20,
        title: F.intl.string(F.t["6NtAuL"]),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: W.marginBottom8,
                children: null != t ? (0, R.Z)(t) : F.intl.string(F.t.GRa6U1),
            }),
            (0, r.jsx)(d.FXm, {
                options: [
                    {
                        name: F.intl.string(F.t["Xp+X2d"]),
                        value: Z.yr.ALWAYS_ANIMATE,
                    },
                    {
                        name: F.intl.string(F.t.IlLT7e),
                        desc: F.intl.string(F.t.bIW9Tk),
                        value: Z.yr.ANIMATE_ON_INTERACTION,
                    },
                    {
                        name: F.intl.string(F.t.IGu8x8),
                        value: Z.yr.NEVER_ANIMATE,
                    },
                ],
                onChange: n,
                value: e,
            }),
        ],
    });
}
function eh() {
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = j.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, k.Z)(n, U.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(d.xJW, {
            ref: n,
            className: W.marginTop20,
            children: [
                (0, r.jsx)(d.vwX, {
                    className: W.marginBottom8,
                    children: F.intl.string(F.t.onqU6u),
                }),
                (0, r.jsx)(P.F, {
                    setting: G.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(d.j7V, {
                        className: W.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: F.intl.string(F.t["3Fztn5"]),
                    }),
                }),
                (0, r.jsx)(P.F, {
                    setting: G.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(d.j7V, {
                        className: W.marginTop8,
                        value: t,
                        note: F.intl.string(F.t.Q7wgHR),
                        onChange: (e) => {
                            x.default.track(B.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: B.jXE.SETTINGS_ACCESSIBILITY },
                            }),
                                j.dN.updateSetting(e);
                        },
                        children: F.intl.string(F.t.TZ2hZG),
                    }),
                }),
            ],
        })
    );
}
function em() {
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
        (0, w.cP)(F.intl.string(F.t.PKaNJC), !0, void 0, e, t), a(!0);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                children: (0, r.jsxs)(d.xJW, {
                    className: W.marginTop20,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            className: W.marginBottom8,
                            children: F.intl.string(F.t.VpSKeH),
                        }),
                        (0, r.jsx)(P.F, {
                            setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                            children: (0, r.jsx)(d.j7V, {
                                className: W.marginTop20,
                                value: e,
                                onChange: j.OW.updateSetting,
                                children: F.intl.string(F.t.qvTIwc),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(P.F, {
                setting: G.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                children: (0, r.jsxs)(d.xJW, {
                    className: W.marginTop20,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            id: ee,
                            className: W.marginBottom20,
                            children: F.intl.string(F.t.lsW5Eh),
                        }),
                        (0, r.jsx)("div", {
                            className: Y.ttsPreviewWrapper,
                            children: (0, r.jsx)(d.zxk, {
                                icon: n ? d.fpf : d.o1U,
                                text: F.intl.string(F.t.hymc8v),
                                onClick: o,
                                "aria-label": ""
                                    .concat(F.intl.string(F.t.hymc8v), " ")
                                    .concat(F.intl.string(F.t.lsW5Eh)),
                            }),
                        }),
                        (0, r.jsx)(d.iRW, {
                            markers: V.q,
                            initialValue: t,
                            defaultValue: 1,
                            stickToMarkers: !0,
                            onValueChange: en,
                            onValueRender: (e) => "x".concat(e.toFixed(2)),
                            onMarkerRender: (e) =>
                                0 === e
                                    ? (0, r.jsx)("span", {
                                          className: Y.ttsSliderMarker,
                                          children: F.intl.string(F.t["493lwc"]),
                                      })
                                    : 10 === e
                                      ? (0, r.jsx)("span", {
                                            className: Y.ttsSliderMarker,
                                            children: F.intl.string(F.t.ZSZEdX),
                                        })
                                      : 1 === e
                                        ? (0, r.jsx)("span", { children: "x1.0" })
                                        : e % 1 == 0
                                          ? ""
                                          : void 0,
                            "aria-labelledby": ee,
                        }),
                    ],
                }),
            }),
        ],
    });
}
