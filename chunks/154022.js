n.d(t, {
    N: () => eb,
    No: () => ea,
    ZP: () => ei,
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
    v = n(829716),
    S = n(786761),
    I = n(3148),
    T = n(739566),
    C = n(753206),
    A = n(440849),
    N = n(921801),
    P = n(196051),
    R = n(441729),
    w = n(626135),
    D = n(63063),
    x = n(740492),
    L = n(695346),
    j = n(313789),
    M = n(263937),
    k = n(996073),
    U = n(273313),
    G = n(518596),
    Z = n(526761),
    F = n(726985),
    B = n(981631),
    V = n(611480),
    H = n(653477),
    Y = n(388032),
    W = n(143525),
    K = n(54354),
    z = n(328756);
function q(e, t, n) {
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
                q(e, t, n[t]);
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
function J(e, t) {
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
let $ = (0, b.hQ)(),
    ee = (0, b.hQ)(),
    et = (0, b.hQ)(),
    en = o().debounce((e) => {
        (0, f.o2)(e);
    }, 250),
    er = o().debounce((e) => {
        (0, P.Ct)(e);
    }, 250);
function ei(e) {
    _.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled;
    let t = (0, E.A)("UserSettingsAccessibility"),
        n = (0, y.A)("UserSettingsAccessibility"),
        i = (0, h.z)("UserSettingsAccessibility");
    return (0, r.jsx)(U.Z, {
        title: Y.intl.string(Y.t.G0neg7),
        children: (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(ea, {}),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_SATURATION,
                    children: [(0, r.jsx)(el, {}), (0, r.jsx)(c.izJ, {})],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_LINK_DECORATIONS,
                    children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.izJ, {})],
                }),
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.F, {
                                  setting: F.s6.ACCESSIBILITY_CUSTOM_CURSOR,
                                  children: (0, r.jsx)(eu, {}),
                              }),
                              (0, r.jsx)(c.izJ, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_ROLE_STYLE,
                    children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.izJ, {})],
                }),
                i &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                    }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.izJ, {})],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_PROFILE_COLORS,
                    children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_CONTRAST,
                    children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_STICKERS,
                    children: [(0, r.jsx)(eg, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_REDUCED_MOTION,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                (0, r.jsxs)(N.F, {
                    setting: F.s6.ACCESSIBILITY_MESSAGES,
                    children: [(0, r.jsx)(eE, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                }),
                n &&
                    (0, r.jsxs)(N.F, {
                        setting: F.s6.ACCESSIBILITY_SWITCH_ICON,
                        children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.izJ, { gap: 4 })],
                    }),
                (0, r.jsx)(eO, {}),
                (0, r.jsx)(N.F, {
                    setting: F.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                    children: (0, r.jsx)("div", {
                        className: K.appearanceUpsell,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: Y.intl.format(Y.t.DHpTjT, {
                                onAppearanceClick() {
                                    (0, G.openUserSettings)(j.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
                                },
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ea() {
    let e = L.jU.useSetting(),
        [t] = i.useState(() => {
            let e = "1337",
                t = (0, S.e5)(
                    J(
                        Q(
                            {},
                            (0, I.ZP)({
                                channelId: e,
                                content: Y.intl.formatToPlainString(Y.t.bB80LC, {
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
            className: K.preview,
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("div", {
                    className: K.previewHeader,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            text: Y.intl.string(Y.t["2RHHgz"]),
                        }),
                        (0, r.jsx)("div", {
                            className: K.previewAvatars,
                            children: [B.Skl.ONLINE, B.Skl.DND, B.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    c.Xo$,
                                    {
                                        "aria-label": Y.intl.string(Y.t.lqaIxI),
                                        src: z,
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
                    className: K.previewMessage,
                    children: (0, r.jsx)(C.Z, {
                        compact: e,
                        author: J(Q({}, (0, T.ZH)(t)), { colorString: "#DD80F4" }),
                        message: t,
                    }),
                }),
            ],
        }),
    });
}
function eo() {
    let e = (0, s.e7)([p.Z], () => p.Z.isHighContrastModeEnabled);
    function t(e) {
        (0, f.vW)(e ? p.X.HIGH : p.X.DEFAULT);
    }
    return (0, r.jsx)(O.ZP, {
        contentTypes: [l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
        children: (n) => {
            let { visibleContent: i } = n;
            return (0, r.jsx)(c.rsf, {
                label: Y.intl.string(Y.t.aZlePv),
                description: Y.intl.string(Y.t["v2qF8+"]),
                badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : void 0,
                checked: e,
                onChange: t,
            });
        },
    });
}
function es() {
    let e = (0, s.e7)([p.Z], () => p.Z.isSwitchIconsEnabled);
    return (0, r.jsx)(c.rsf, {
        label: Y.intl.string(Y.t["S3z+pV"]),
        description: Y.intl.string(Y.t["3QuI9+"]),
        checked: e,
        onChange: (e) => (0, f.ky)(e),
        hasIcon: !0,
    });
}
function el() {
    let { saturation: e, desaturateUserColors: t } = (0, s.cj)([p.Z], () => ({
        saturation: p.Z.saturation,
        desaturateUserColors: p.Z.desaturateUserColors,
    }));
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.iRW, {
                label: Y.intl.string(Y.t["5PWWCY"]),
                description: Y.intl.string(Y.t["0PbE/H"]),
                "aria-labelledby": $,
                "aria-describedby": ee,
                markers: B.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: en,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? "".concat(100 * e, "%") : void 0),
            }),
            (0, r.jsx)(N.F, {
                setting: F.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(c.rsf, {
                    label: Y.intl.string(Y.t.bQCodD),
                    description: Y.intl.string(Y.t.nlAOEW),
                    checked: t,
                    onChange: f.f1,
                }),
            }),
        ],
    });
}
function ec() {
    let e = (0, s.e7)([p.Z], () => p.Z.alwaysShowLinkDecorations);
    function t() {
        (0, f.gs)(!e);
    }
    return (0, r.jsx)(c.rsf, {
        label: Y.intl.string(Y.t.OLZFB8),
        description: Y.intl.string(Y.t["72i5GI"]),
        checked: e,
        onChange: t,
    });
}
function eu() {
    let e = (0, s.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.enableCustomCursor) || e;
    });
    return (0, r.jsx)(c.rsf, {
        label: Y.intl.string(Y.t["+Isihb"]),
        description: Y.intl.string(Y.t.nNZ1Tz),
        checked: e,
        onChange: () => (0, f.HU)(!e),
    });
}
function ed() {
    let e = (0, s.e7)([x.ZP], () => x.ZP.hdrDynamicRange);
    function t(e) {
        (0, f.zH)(e);
    }
    return (0, r.jsx)(N.F, {
        setting: F.s6.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
        children: (0, r.jsx)(c.FXm, {
            label: Y.intl.string(Y.t.nemtgW),
            badge: "beta",
            description: Y.intl.string(Y.t["O/Gjvn"]),
            options: [
                {
                    name: Y.intl.string(Y.t.D5Fma9),
                    desc: Y.intl.string(Y.t.Qj75ck),
                    value: "no-limit",
                },
                {
                    name: Y.intl.string(Y.t.ldcGIH),
                    desc: Y.intl.string(Y.t["+V/bDk"]),
                    value: "standard",
                },
            ],
            onChange: t,
            value: e,
        }),
    });
}
function ef() {
    let e = (0, s.e7)([p.Z], () => p.Z.roleStyle);
    function t(e) {
        (0, f.u1)(e);
    }
    return (0, r.jsx)(c.FXm, {
        label: Y.intl.string(Y.t.uSOPWm),
        description: Y.intl.string(Y.t["86hjzQ"]),
        options: [
            {
                name: Y.intl.string(Y.t.YEOEi6),
                value: "username",
            },
            {
                name: Y.intl.string(Y.t.mQaro3),
                value: "dot",
            },
            {
                name: Y.intl.string(Y.t.Ji2EVJ),
                value: "hidden",
            },
        ],
        onChange: t,
        value: e,
    });
}
function ep() {
    let e = (0, s.e7)([p.Z], () => p.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, g.ZP)();
    function n(e) {
        (0, f.X2)(e), w.default.track(B.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: e });
    }
    return (0, r.jsx)(c.rsf, {
        label: Y.intl.string(W.default["2gFUEw"]),
        description: Y.intl.format(W.default.L8U56h, {
            onClickOpenModal() {
                (0, v.I)({ analyticsLocations: t });
            },
        }),
        checked: e,
        onChange: n,
    });
}
function e_() {
    let e = (0, s.e7)([p.Z], () => p.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, k.Z)(t, Z.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(c.C3N, {
                label: Y.intl.string(Y.t.BT8Bmp),
                children: (0, r.jsx)(N.F, {
                    setting: F.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                    children: (0, r.jsx)(c.rsf, {
                        label: Y.intl.string(Y.t["sSY+mD"]),
                        description: Y.intl.format(Y.t.u6UjrL, {
                            onThemeClick() {
                                (0, G.openUserSettings)(j.n.APPEARANCE_PANEL, { section: B.oAB.APPEARANCE });
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
function em() {
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
    let o = Y.intl.format(Y.t.GwEVE2, { learnMoreLink: D.Z.getArticleURL(B.BhN.FORCED_COLORS) });
    return (0, r.jsxs)(c.C3N, {
        label: Y.intl.string(Y.t["TYyfO/"]),
        children: [
            (0, r.jsx)(N.F, {
                setting: F.s6.ACCESSIBILITY_HIGH_CONTRAST,
                children: (0, r.jsx)(eo, {}),
            }),
            (0, m.b)()
                ? (0, r.jsx)(N.F, {
                      setting: F.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
                      children: (0, r.jsx)(c.rsf, {
                          label: Y.intl.string(Y.t.cguiec),
                          description: o,
                          checked: t,
                          onChange: n,
                      }),
                  })
                : null,
        ],
    });
}
function eh() {
    let e = L.QK.useSetting(),
        t = L.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: a,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: u,
        } = (0, s.cj)([p.Z, M.Z], () => ({
            systemPrefersReducedMotion: p.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: p.Z.rawPrefersReducedMotion,
            useReducedMotion: p.Z.useReducedMotion,
            gifAutoPlayOverrideReason: M.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
            animateEmojiOverrideReason: M.Z.getAppliedOverrideReasonKey("animateEmoji"),
        })),
        d = "auto" === a,
        _ = i.useRef(null);
    (0, k.Z)(_, Z.rP.REDUCED_MOTION);
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
        title: Y.intl.string(Y.t.e3TR1b),
        className: K.reducedMotion,
        children: (0, r.jsxs)(c.C3N, {
            label: Y.intl.string(Y.t.e3TR1b),
            description: Y.intl.format(Y.t["2l9U2j"], { helpdeskArticle: D.Z.getArticleURL(B.BhN.REDUCED_MOTION) }),
            children: [
                (0, r.jsx)(c.rsf, {
                    label: Y.intl.string(Y.t["+Dx+HD"]),
                    checked: d,
                    onChange: m,
                }),
                (0, r.jsx)(N.F, {
                    setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                    children: (0, r.jsx)(c.rsf, {
                        label: Y.intl.string(Y.t.b3XBzg),
                        checked: n,
                        onChange: h,
                    }),
                }),
                (0, r.jsx)(N.F, {
                    setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                    children: (0, r.jsx)(c.rsf, {
                        label: Y.intl.string(Y.t.Iayoh5),
                        description: null != l ? (0, A.Z)(l) : void 0,
                        checked: e,
                        onChange: L.QK.updateSetting,
                    }),
                }),
                (0, r.jsx)(N.F, {
                    setting: F.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                    children: (0, r.jsx)(c.rsf, {
                        label: Y.intl.string(Y.t.iIaOlc),
                        description: null != u ? (0, A.Z)(u) : void 0,
                        checked: t,
                        onChange: L.Yk.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function eg() {
    let e = L.Wp.useSetting(),
        t = (0, s.e7)([M.Z], () => M.Z.getAppliedOverrideReasonKey("animateStickers")),
        n = i.useCallback((e) => {
            L.Wp.updateSetting(e);
        }, []);
    return (0, r.jsx)(c.FXm, {
        label: Y.intl.string(Y.t["6NtAuJ"]),
        description: null != t ? (0, A.Z)(t) : Y.intl.string(Y.t.GRa6U7),
        options: [
            {
                name: Y.intl.string(Y.t["Xp+X2U"]),
                value: V.yr.ALWAYS_ANIMATE,
            },
            {
                name: Y.intl.string(Y.t.IlLT7e),
                desc: Y.intl.string(Y.t.bIW9Tl),
                value: V.yr.ANIMATE_ON_INTERACTION,
            },
            {
                name: Y.intl.string(Y.t.IGu8x3),
                value: V.yr.NEVER_ANIMATE,
            },
        ],
        onChange: (e) => n(e),
        value: e,
    });
}
function eE() {
    let e = (0, s.e7)([p.Z], () => p.Z.isSubmitButtonEnabled),
        t = L.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, k.Z)(n, Z.rP.LEGACY_CHAT_INPUT),
        (0, r.jsx)("div", {
            ref: n,
            children: (0, r.jsxs)(c.C3N, {
                label: Y.intl.string(Y.t.onqU6o),
                children: [
                    (0, r.jsx)(N.F, {
                        setting: F.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                        children: (0, r.jsx)(c.rsf, {
                            label: Y.intl.string(Y.t["3Fztn5"]),
                            checked: e,
                            onChange: f.eN,
                        }),
                    }),
                    (0, r.jsx)(N.F, {
                        setting: F.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                        children: (0, r.jsx)(c.rsf, {
                            label: Y.intl.string(Y.t.TZ2hZH),
                            description: Y.intl.string(Y.t.Q7wgHc),
                            checked: t,
                            onChange: (e) => {
                                w.default.track(B.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: e,
                                    location: { section: B.jXE.SETTINGS_ACCESSIBILITY },
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
function eb() {
    let e = (0, s.e7)([R.Z], () => R.Z.speechRate);
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.iRW, {
                label: Y.intl.string(Y.t.lsW5Ev),
                markers: H.q,
                initialValue: e,
                defaultValue: 1,
                stickToMarkers: !0,
                onValueChange: er,
                onValueRender: (e) => "x".concat(e.toFixed(2)),
                onMarkerRender: (e) =>
                    0 === e
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: Y.intl.string(Y.t["493lwX"]),
                          })
                        : 10 === e
                          ? (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: Y.intl.string(Y.t.ZSZEdS),
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
                "aria-labelledby": et,
            }),
            (0, r.jsx)(ey, {}),
        ],
    });
}
function ey() {
    let [e, t] = i.useState(!1),
        n = () => {
            if (e) {
                (0, P.NB)(), t(!1);
                return;
            }
            let n = () => t(!0),
                r = () => t(!1);
            (0, P.cP)(Y.intl.string(Y.t.PKaNJL), !0, void 0, n, r), t(!0);
        };
    return (
        (0, u.zq)(() => (0, P.NB)()),
        (0, r.jsx)(c.Button, {
            text: Y.intl.string(Y.t.SKNnqq),
            icon: e ? c.fpf : c.o1U,
            size: "sm",
            onClick: n,
        })
    );
}
function eO() {
    let e = L.OW.useSetting();
    return d.Zh
        ? (0, r.jsx)(N.F, {
              setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
              children: (0, r.jsxs)(c.C3N, {
                  label: Y.intl.string(Y.t.VpSKeO),
                  children: [
                      (0, r.jsx)(N.F, {
                          setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                          children: (0, r.jsx)(c.rsf, {
                              label: Y.intl.string(Y.t.qvTIwX),
                              checked: e,
                              onChange: L.OW.updateSetting,
                          }),
                      }),
                      (0, r.jsx)(N.F, {
                          setting: F.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                          children: (0, r.jsx)(eb, {}),
                      }),
                  ],
              }),
          })
        : null;
}
