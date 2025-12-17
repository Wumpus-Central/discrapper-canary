n.d(t, {
    N: () => ey,
    No: () => eo,
    ZP: () => ea,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(493773),
    d = n(419363),
    f = n(857595),
    p = n(607070),
    _ = n(299363),
    m = n(627845),
    h = n(651123),
    g = n(906732),
    E = n(296812),
    b = n(313201),
    y = n(877371),
    O = n(243778),
    v = n(272157),
    S = n(829716),
    I = n(786761),
    T = n(3148),
    C = n(739566),
    A = n(753206),
    N = n(440849),
    P = n(921801),
    R = n(196051),
    w = n(441729),
    D = n(626135),
    x = n(63063),
    L = n(740492),
    j = n(695346),
    M = n(313789),
    k = n(263937),
    U = n(996073),
    G = n(273313),
    Z = n(518596),
    F = n(526761),
    B = n(726985),
    V = n(981631),
    H = n(611480),
    Y = n(653477),
    W = n(388032),
    K = n(143525),
    z = n(54354),
    q = n(328756);
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
function X(e) {
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
let ee = (0, b.hQ)(),
    et = (0, b.hQ)(),
    en = (0, b.hQ)(),
    er = o().debounce((e) => {
        (0, f.o2)(e);
    }, 250),
    ei = o().debounce((e) => {
        (0, R.Ct)(e);
    }, 250);
function ea(e) {
    _.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = (0, E.A)("UserSettingsAccessibility"),
        n = (0, v.i)({ location: "UserSettingsAccessibility" }),
        i = (0, y.A)("UserSettingsAccessibility"),
        a = (0, h.z)("UserSettingsAccessibility");
    return (0, r.jsx)(G.Z, {
        title: W.intl.string(W.t.G0neg7),
        children: (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(eo, {}),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_SATURATION,
                    children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.izJ, {})],
                }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, r.jsx)(eu, {}), (0, r.jsx)(c.izJ, {})],
                }),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.F, {
                                  setting: B.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(ed, {}),
                              }),
                              (0, r.jsx)(c.izJ, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.izJ, {})],
                }),
                a &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                    }),
                n &&
                    (0, r.jsxs)(P.F, {
                        setting: B.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                        children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.izJ, {})],
                    }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_CONTRAST,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_STICKERS,
                    children: [(0, r.jsx)(eE, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, r.jsx)(eg, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(P.F, {
                    setting: B.s6.ACCESSIBILITY_MESSAGES,
                    children: [(0, r.jsx)(eb, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                i &&
                    (0, r.jsxs)(P.F, {
                        setting: B.s6.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, r.jsx)(el, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                    }),
                (0, r.jsx)(ev, {}),
                (0, r.jsx)(P.F, {
                    setting: B.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)("div", {
                        className: z.appearanceUpsell,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: W.intl.format(W.t.DHpTjT, {
                                onAppearanceClick() {
                                    (0, Z.openUserSettings)(M.n.APPEARANCE_PANEL, { section: V.oAB.APPEARANCE });
                                },
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eo() {
    let e = j.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, I.e5)(
                    $(
                        X(
                            {},
                            (0, T.ZP)({
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
    return (0, r.jsx)(c.Rny, {
        children: (0, r.jsxs)(c.Zbd, {
            className: z.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: z.previewHeader,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            text: W.intl.string(W.t["2RHHgz"]),
                        }),
                        (0, r.jsx)("div", {
                            className: z.previewAvatars,
                            children: [V.Skl.ONLINE, V.Skl.DND, V.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    c.Xo$,
                                    {
                                        "aria-label": W.intl.string(W.t.lqaIxI),
                                        src: q,
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
                    className: z.previewMessage,
                    children: (0, r.jsx)(A.Z, {
                        compact: e,
                        author: $(X({}, (0, C.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function es() {
    let e = (0, s.e7)([p.Z], () => p.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, f.vW)(e ? p.X.HIGH : p.X.DEFAULT);
    }
    return (0, r.jsx)(O.ZP, {
        contentTypes: [l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(c.rsf, {
                label: W.intl.string(W.t.aZlePv),
                description: W.intl.string(W.t["v2qF8+"]),
                badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function el() {
    let e = (0, s.e7)([p.Z], () => p.Z.isSwitchIconsEnabled);
    return (0, r.jsx)(c.rsf, {
        label: W.intl.string(W.t["S3z+pV"]),
        description: W.intl.string(W.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, f.ky)(e),
        hasIcon: !0,
    });
}
function ec() {
    let { saturation: e, desaturateUserColors: t } = (0, s.cj)([p.Z], () => ({
        saturation: p.Z.saturation,
        desaturateUserColors: p.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.iRW, {
                label: W.intl.string(W.t["5PWWCY"]),
                description: W.intl.string(W.t["0PbE/H"]),
                "aria-labelledby": ee,
                "aria-describedby": et,
                markers: V.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: er,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(P.F, {
                setting: B.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(c.rsf, {
                    label: W.intl.string(W.t.bQCodD),
                    description: W.intl.string(W.t.nlAOEW),
                    checked: t,
                    onChange: f.f1,
                }),
            }),
        ],
    });
}
function eu() {
    let e = (0, s.e7)([p.Z], () => p.Z.alwaysShowLinkDecorations);
    function t() {
        (0, f.gs)(!e);
    }
    return (0, r.jsx)(c.rsf, {
        label: W.intl.string(W.t.OLZFB8),
        description: W.intl.string(W.t["72i5GI"]),
        checked: e,
        onChange: t,
    });
}
function ed() {
    let e = (0, s.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(c.rsf, {
        label: W.intl.string(W.t["+Isihb"]),
        description: W.intl.string(W.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, f.HU)(!e),
    });
}
function ef() {
    let e = (0, s.e7)([L.ZP], () => L.ZP.hdrDynamicRange);
    function t(e) {
        (0, f.zH)(e);
    }
    return (0, r.jsx)(P.F, {
        setting: B.s6.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, r.jsx)(c.FXm, {
            label: W.intl.string(W.t.nemtgW),
            badge: "beta",
            description: W.intl.string(W.t["O/Gjvn"]),
            options: [
                {
                    name: W.intl.string(W.t.D5Fma9),
                    desc: W.intl.string(W.t.Qj75ck),
                    value: "no-limit",
                },
                {
                    name: W.intl.string(W.t.ldcGIH),
                    desc: W.intl.string(W.t["+V/bDk"]),
                    value: "standard",
                },
            ],
            onChange: t,
            value: e,
        }),
    });
}
function ep() {
    let e = (0, s.e7)([p.Z], () => p.Z.roleStyle);
    function t(e) {
        (0, f.u1)(e);
    }
    return (0, r.jsx)(c.FXm, {
        label: W.intl.string(W.t.uSOPWm),
        description: W.intl.string(W.t["86hjzQ"]),
        options: [
            {
                name: W.intl.string(W.t.YEOEi6),
                value: "username",
            },
            {
                name: W.intl.string(W.t.mQaro3),
                value: "dot",
            },
            {
                name: W.intl.string(W.t.Ji2EVJ),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function e_() {
    let e = (0, s.e7)([p.Z], () => p.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, g.ZP)();
    function n(e) {
        (0, f.X2)(e), D.default.track(V.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(c.rsf, {
        label: W.intl.string(K.default["2gFUEw"]),
        description: W.intl.format(K.default.L8U56h, {
            onClickOpenModal() {
                (0, S.I)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function em() {
    let e = (0, s.e7)([p.Z], () => p.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, U.Z)(t, F.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(c.C3N, {
                label: W.intl.string(W.t.BT8Bmp),
                children: (0, r.jsx)(P.F, {
                    setting: B.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                    children: (0, r.jsx)(c.rsf, {
                        label: W.intl.string(W.t["sSY+mD"]),
                        description: W.intl.format(W.t.u6UjrL, {
                            onThemeClick() {
                                (0, Z.openUserSettings)(M.n.APPEARANCE_PANEL, { section: V.oAB.APPEARANCE });
                            },
                        }),
                        checked: e,
                        onChange: f.Uv,
                    }),
                }),
            }),
        })
    );
}
function eh() {
    let [e] = (0, s.Wu)([p.Z], () => [p.Z.syncForcedColors, p.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let a = i.useRef(null);
    i.useEffect(() => {
        null != a.current && (clearTimeout(a.current), (a.current = null)),
            t !== e && (a.current = setTimeout(() => (0, f.qz)(t), 150));
    }, [t, e]);
    let o = W.intl.format(W.t.GwEVE2, { learnMoreLink: x.Z.getArticleURL(V.BhN.FORCED_COLORS) });
    return (0, r.jsxs)(c.C3N, {
        label: W.intl.string(W.t["TYyfO/"]),
        children: [
            (0, r.jsx)(P.F, {
                setting: B.s6.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(es, {}),
            }),
            (0, m.b)()
                ? (0, r.jsx)(P.F, {
                      setting: B.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(c.rsf, {
                          label: W.intl.string(W.t.cguiec),
                          description: o,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function eg() {
    let e = j.QK.useSetting(),
        t = j.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, s.cj)([p.Z, k.Z], () => ({
            systemPrefersReducedMotion: p.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: p.Z.rawPrefersReducedMotion,
            useReducedMotion: p.Z.useReducedMotion,
            gifAutoPlayOverrideReason: k.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: k.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        _ = i.useRef(null);
    (0, U.Z)(_, F.rP.REDUCED_MOTION);
    let m = i.useCallback(
            (e) => {
                (0, f.Zt)(e ? "auto" : o);
            },
            [o],
        ),
        h = i.useCallback((e) => {
            (0, f.Zt)(e ? "reduce" : "no-preference");
        }, []);
    return (0, r.jsx)("div", {
        ref: _,
        title: W.intl.string(W.t.e3TR1b),
        className: z.reducedMotion,
        children: (0, r.jsxs)(c.C3N, {
            label: W.intl.string(W.t.e3TR1b),
            description: W.intl.format(W.t["2l9U2j"], { helpdeskArticle: x.Z.getArticleURL(V.BhN.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(c.rsf, {
                    label: W.intl.string(W.t["+Dx+HD"]),
                    checked: d,
                    onChange: m,
                }),
                (0, r.jsx)(P.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(c.rsf, {
                        label: W.intl.string(W.t.b3XBzg),
                        checked: n,
                        onChange: h,
                    }),
                }),
                (0, r.jsx)(P.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(c.rsf, {
                        label: W.intl.string(W.t.Iayoh5),
                        description: null != l ? (0, N.Z)(l) : void 0,
                        checked: e,
                        onChange: j.QK.updateSetting,
                    }),
                }),
                (0, r.jsx)(P.F, {
                    setting: B.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(c.rsf, {
                        label: W.intl.string(W.t.iIaOlc),
                        description: null != u ? (0, N.Z)(u) : void 0,
                        checked: t,
                        onChange: j.Yk.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function eE() {
    let e = j.Wp.useSetting(),
        t = (0, s.e7)([k.Z], () => k.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            j.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.FXm, {
        label: W.intl.string(W.t["6NtAuJ"]),
        description: null != t ? (0, N.Z)(t) : W.intl.string(W.t.GRa6U7),
        options: [
            {
                name: W.intl.string(W.t["Xp+X2U"]),
                value: H.yr.ALWAYS_ANIMATE,
            },
            {
                name: W.intl.string(W.t.IlLT7e),
                desc: W.intl.string(W.t.bIW9Tl),
                value: H.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: W.intl.string(W.t.IGu8x3),
                value: H.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eb() {
    let e = (0, s.e7)([p.Z], () => p.Z.isSubmitButtonEnabled),
        t = j.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, U.Z)(n, F.rP.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(c.C3N, {
                label: W.intl.string(W.t.onqU6o),
                children: [
                    (0, r.jsx)(P.F, {
                        setting: B.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(c.rsf, {
                            label: W.intl.string(W.t["3Fztn5"]),
                            checked: e,
                            onChange: f.eN,
                        }),
                    }),
                    (0, r.jsx)(P.F, {
                        setting: B.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(c.rsf, {
                            label: W.intl.string(W.t.TZ2hZH),
                            description: W.intl.string(W.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                D.default.track(V.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: V.jXE.SETTINGS_ACCESSIBILITY },
                                }),
                                    j.dN.updateSetting(e);
                            },
                        }),
                    }),
                ],
            }),
        })
    );
}
function ey() {
    let e = (0, s.e7)([w.Z], () => w.Z.speechRate);
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.iRW, {
                label: W.intl.string(W.t.lsW5Ev),
                markers: Y.q,
                initialValue: e,
                defaultValue: 1,
                stickToMarkers: !0,
                onValueChange: ei,
                onValueRender: (e) => "x".concat(e.toFixed(2)),
                onMarkerRender: (e) =>
                    0 === e
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: W.intl.string(W.t["493lwX"]),
                          })
                        : 10 === e
                          ? (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: W.intl.string(W.t.ZSZEdS),
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
                "aria-labelledby": en,
            }),
            (0, r.jsx)(eO, {}),
        ],
    });
}
function eO() {
    let [e, t] = i.useState(!1),
        n = () => {
            if (e) {
                (0, R.NB)(), t(!1);
                return;
            }
            let n = () => t(!0),
                r = () => t(!1);
            (0, R.cP)(W.intl.string(W.t.PKaNJL), !0, void 0, n, r), t(!0);
        };
    return (
        (0, u.zq)(() => (0, R.NB)()),
        (0, r.jsx)(c.Button, {
            text: W.intl.string(W.t.SKNnqq),
            icon: e ? c.fpf : c.o1U,
            size: "sm",
            onClick: n,
        })
    );
}
function ev() {
    let e = j.OW.useSetting();
    return d.Zh
        ? (0, r.jsx)(P.F, {
              setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
              children: (0, r.jsxs)(c.C3N, {
                  label: W.intl.string(W.t.VpSKeO),
                  children: [
                      (0, r.jsx)(P.F, {
                          setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                          children: (0, r.jsx)(c.rsf, {
                              label: W.intl.string(W.t.qvTIwX),
                              checked: e,
                              onChange: j.OW.updateSetting,
                          }),
                      }),
                      (0, r.jsx)(P.F, {
                          setting: B.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                          children: (0, r.jsx)(ey, {}),
                      }),
                  ],
              }),
          })
        : null;
}
