n.d(t, { D: () => vE });
var i,
    s,
    l,
    r,
    a,
    o,
    u,
    d,
    c,
    g,
    m,
    A,
    E = n(419954),
    h = n(780964),
    x = n(550640),
    p = n(107384),
    S = n(477900),
    T = n(582128),
    f = n(17928),
    I = n(652215),
    _ = n(346055),
    N = n(297264),
    C = n(364522),
    y = n(97808),
    b = n(778712),
    v = n(821609),
    j = n(775602),
    O = n(320095),
    L = n(963852),
    R = n(763754),
    D = n(20851),
    P = n(95701),
    G = n(486020),
    M = n(885386),
    U = n(375708),
    V = n(345016);
let k = new P.nA({ id: "1337", guild_id: "1337", type: I.rbe.GUILD_TEXT, name: "preview" }),
    w = [
        { status: I.clD.IDLE, discriminator: "2" },
        { status: I.clD.DND, discriminator: "3" },
        { status: I.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, O.rh)({ ...(0, L.Ay)({ channelId: k.id, content: e }), state: I.cmJ.SENT, reactions: t });
}
var B = n(856488);
let z = (0, E.zD)(h.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => U.intl.string(U.t.TZ2hZH),
        useSubtitle: () => U.intl.string(U.t.Q7wgHc),
        useValue: () => M.D_.useSetting(),
        setValue: (e) => M.D_.updateSetting(e),
    }),
    Y = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => U.intl.string(U.t.XYvMIX),
        useSubtitle: () => U.intl.string(U.t.T0rbtM),
        useValue: M._z.useSetting,
        setValue: M._z.updateSetting,
    });
var X = n(100767),
    H = n(435558),
    W = n.n(H),
    K = n(935399),
    Z = n(331322),
    q = n(299163),
    Q = n(834730),
    $ = n(113494),
    J = n(782134),
    ee = n(54570),
    et = n(8880),
    en = n(75804);
let ei = W().debounce((e) => {
    (0, ee.zU)(e);
}, 250);
function es() {
    let [e, t] = T.useState(!1);
    return (
        (0, K.l0)(() => (0, ee.pr)()),
        (0, S.jsx)(v.$, {
            text: U.intl.string(U.t.SKNnqq),
            icon: e ? $.PauseIcon : J.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, ee.pr)(), t(!1));
                    return;
                }
                ((0, ee.AU)(
                    U.intl.string(U.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
                ),
                    t(!0));
            },
        })
    );
}
let el = (0, E.E2)(h.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [U.intl.string(U.t.lsW5Ev)],
        Component: function () {
            let e = (0, f.bG)([et.A], () => et.A.speechRate);
            return (0, S.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(q.A, {
                        label: U.intl.string(U.t.lsW5Ev),
                        description: U.intl.string(U.t.Ci4wMS),
                        markers: en.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ei,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, S.jsx)(Q.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, S.jsx)(Q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: U.intl.string(U.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, S.jsx)(Q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, S.jsx)(es, {}),
                ],
            });
        },
        usePredicate: () => X.$j,
    }),
    er = (0, E.zZ)(h.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => U.intl.string(U.t.XVR0Rb),
        buildLayout: () => [el, Y, z],
    }),
    ea = (0, E.AK)(h.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.aTfeGK),
        destinationKey: h.X.APPEARANCE_PANEL,
    }),
    eo = (0, E.gN)(h.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [ea] });
var eu = n(955572);
let ed = (0, E.zD)(h.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => U.intl.string(U.t.OCJg5f),
    useSubtitle: () => U.intl.string(U.t.HEO0s3),
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.desaturateUserColors),
    setValue: () => (0, eu.YV)(),
});
var ec = n(652525);
let eg = (0, E.zD)(h.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => U.intl.string(U.t["+Isihb"]),
        useSubtitle: () => U.intl.string(U.t.nNZ1Tz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.enableCustomCursor),
        setValue: (e) => (0, eu.ts)(e),
        usePredicate: () => (0, ec.t)("EnableCustomCursorSetting"),
    }),
    em = (0, E.zD)(h.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => U.intl.string(U.t["S3z+pV"]),
        useSubtitle: () => U.intl.string(U.t["3QuI9+"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, eu.Gm)(e),
        hasIcon: !0,
    });
var eA = n(554146);
let eE = (0, E.zD)(h.X.HIGH_CONTRAST_MODE, {
    useTitle: () => U.intl.string(U.t.aZlePv),
    useSubtitle: () => U.intl.string(U.t["v2qF8+"]),
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, eu.uh)(e ? j._1.HIGH : j._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: p.Xi.NEW, dismissibleContent: eA.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eh = n(406360),
    ex = n(742023);
let ep = (0, E.Qx)(h.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => U.intl.string(U.t.nemtgW),
        useSubtitle: () => U.intl.string(U.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useOptions: function () {
            return T.useMemo(
                () => [
                    { name: U.intl.string(U.t.D5Fma9), desc: U.intl.string(U.t.Qj75ck), value: "no-limit" },
                    { name: U.intl.string(U.t.ldcGIH), desc: U.intl.string(U.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eh.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, eu.FU)(e);
        },
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => ex.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", U.intl.string(U.t["O/Gjvn"])],
    }),
    eS = (0, E.Hn)(h.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => U.intl.string(U.t.nC2XBl),
        useSubtitle: () => U.intl.string(U.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: U.intl.string(U.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: U.intl.string(U.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: U.intl.string(U.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: U.intl.string(U.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.officialMessageStyle),
        setValue: (e) => (0, eu.w_)(e),
    }),
    eT = (0, E.Hn)(h.X.ROLE_STYLE, {
        useTitle: () => U.intl.string(U.t.uSOPWm),
        useSubtitle: () => U.intl.string(U.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: U.intl.string(U.t.eDdMzJ), value: "username" },
            { id: "dot", label: U.intl.string(U.t.rdmJp0), value: "dot" },
            { id: "hidden", label: U.intl.string(U.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.roleStyle),
        setValue: (e) => (0, eu.IX)(e),
    });
(0, E.Qx)(h.X.ROLE_STYLE, {
    useTitle: () => U.intl.string(U.t.uSOPWm),
    useSubtitle: () => U.intl.string(U.t["86hjzQ"]),
    useOptions: () => [
        { name: U.intl.string(U.t.YEOEi6), value: "username" },
        { name: U.intl.string(U.t.mQaro3), value: "dot" },
        { name: U.intl.string(U.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.roleStyle),
    setValue: (e) => (0, eu.IX)(e),
});
let ef = (0, E.sN)(h.X.SATURATION, {
    useTitle: () => U.intl.string(U.t["5PWWCY"]),
    useSubtitle: () => U.intl.string(U.t.xf5S6P),
    markers: I.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => j.Ay.saturation,
    asValueChanges: (e) => (0, eu.HU)(e),
});
var eI = n(964486),
    e_ = n(839214),
    eN = n(502229),
    eC = n(975571);
let ey = (0, e_.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eb = (0, E.zD)(h.X.SYNC_FORCED_COLORS, {
        useTitle: () => U.intl.string(U.t.cguiec),
        useSubtitle: () => U.intl.format(U.t.GwEVE2, { learnMoreLink: eC.A.getArticleURL(I.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, f.bG)([j.Ay], () => j.Ay.syncForcedColors);
            return (
                (0, eI.Ay)(() => {
                    ey.setState({ syncEnabled: j.Ay.syncForcedColors });
                }),
                ey.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ey.getState();
            if (null != t) {
                (clearTimeout(t), ey.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === j.Ay.syncForcedColors) return void ey.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, eu.D3)(e), ey.setState({ updateTimeout: null }));
            }, 150);
            ey.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eN.D)(),
    }),
    ev = (0, E.zZ)(h.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => U.intl.string(U.t.JqvyiY),
        buildLayout: () => [ef, ed, eE, eg, eb, ep, eT, eS, em, eo],
    });
var ej = n(397438),
    eO = n(355097),
    eL = n(141531);
function eR(e) {
    return (0, f.bG)([ej.A], () =>
        (function (e) {
            switch (e) {
                case eO._A.REDUCED_MOTION:
                    return U.intl.format(U.t["1dT9V4"], {});
                case eO._A.REDUCED_MOTION_STICKERS:
                    return U.intl.string(U.t["2ExvRu"]);
                case eO._A.GAME_MODE:
                    return U.intl.string(eL.default.VGcdxP);
                default:
                    return;
            }
        })(ej.A.getAppliedOverrideReasonKey(e)),
    );
}
function eD(e) {
    return (0, f.bG)([ej.A], () => ej.A.getAppliedOverrideReasonKey(e) === eO._A.GAME_MODE);
}
let eP = (0, E.zD)(h.X.ANIMATE_EMOJIS, {
        useTitle: () => U.intl.string(U.t.iIaOlc),
        useSubtitle: () => eR("animateEmoji"),
        useDisabled: () => eD("animateEmoji"),
        useValue: () => M.Sf.useSetting(),
        setValue: (e) => M.Sf.updateSetting(e),
    }),
    eG = (0, E.zD)(h.X.ANIMATE_GIFS, {
        useTitle: () => U.intl.string(U.t.wqsK7q),
        useSubtitle: () => eR("gifAutoPlay"),
        useDisabled: () => eD("gifAutoPlay"),
        useValue: () => M.kt.useSetting(),
        setValue: (e) => M.kt.updateSetting(e),
    });
var eM = n(823894);
let eU = (0, E.Qx)(h.X.ANIMATE_STICKERS, {
        useTitle: () => U.intl.string(U.t.sBHIh0),
        useSubtitle: () => eR("animateStickers"),
        useDisabled: () => eD("animateStickers"),
        useOptions: () => [
            { name: U.intl.string(U.t["Xp+X2U"]), value: eM.BJ.ALWAYS_ANIMATE },
            { name: U.intl.string(U.t.IlLT7e), desc: U.intl.string(U.t.bIW9Tl), value: eM.BJ.ANIMATE_ON_INTERACTION },
            { name: U.intl.string(U.t.IGu8x3), value: eM.BJ.NEVER_ANIMATE },
        ],
        useValue: () => M.S0.useSetting(),
        setValue: (e) => M.S0.updateSetting(e),
    }),
    eV = (0, E.zD)(h.X.REDUCED_MOTION, {
        useTitle: () => U.intl.string(U.t.b3XBzg),
        useSubtitle: () => U.intl.format(U.t.XqvxJc, { helpdeskArticle: eC.A.getArticleURL(I.MVz.REDUCED_MOTION) }),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.prefersReducedMotion),
        setValue: (e) => (0, eu.qz)(e ? "reduce" : "no-preference"),
    }),
    ek = (0, E.zD)(h.X.SYNC_REDUCED_MOTION, {
        useTitle: () => U.intl.string(U.t.oL55A6),
        useValue: () => (0, f.bG)([j.Ay], () => "auto" === j.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, eu.qz)(e ? "auto" : j.Ay.systemPrefersReducedMotion),
    });
var ew = n(973283);
function eF(e) {
    return U.intl.formatToPlainString(U.t.pyvjRp, { seconds: e });
}
let eB = (0, E.sN)(h.X.TOAST_DURATION, {
        useTitle: () => U.intl.string(U.t["3oxlia"]),
        useSubtitle: () => U.intl.string(U.t.CZ3jxp),
        usePredicate: () => (0, ew.D2)("ToastDurationSetting"),
        markers: I.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === I.hH7.TOAST_DURATION_MIN_SECONDS || e === I.hH7.TOAST_DURATION_MAX_SECONDS
                ? eF(e)
                : void 0,
        onValueRender: eF,
        stickToMarkers: !0,
        minValue: I.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: I.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => I.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => j.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, eu.E7)(1e3 * e),
    }),
    ez = (0, E.zZ)(h.X.MOTION_CATEGORY, {
        useTitle: () => U.intl.string(U.t.e3TR1b),
        buildLayout: () => [eV, ek, eB, eG, eP, eU],
    });
var eY = n(688810),
    eX = n(259065),
    eH = n(701974);
let eW = (0, E.zD)(h.X.DISPLAY_NAME_STYLES, {
    useTitle: () => U.intl.string(eH.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eY.Ay)();
        return U.intl.format(eH.default.aEax6P, {
            onClickOpenModal() {
                (0, eX.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, eu.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, E.sN)(h.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => U.intl.string(U.t.rT3Pq5),
        useSubtitle: () => U.intl.string(U.t.LXUhen),
        markers: I.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: I.hH7.FONT_SIZES["0"],
        maxValue: I.hH7.FONT_SIZES[I.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => I.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => j.Ay.fontSize,
        onValueRender: eK,
        onMarkerRender: eK,
        asValueChanges: (e) => (0, eu.XS)(e),
    }),
    eq = (0, E.zD)(h.X.UNDERLINE_LINKS, {
        useTitle: () => U.intl.string(U.t.OLZFB8),
        useSubtitle: () => U.intl.string(U.t.DIX3ke),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, eu.kI)(e),
    }),
    eQ = (0, E.zZ)(h.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["bxh/R7"]),
        buildLayout: () => [eZ, eq, eW],
    });
var e$ = n(873298);
let eJ = (0, E.Qx)(h.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => U.intl.string(U.t["C/5V0A"]),
        useSubtitle: () => U.intl.string(U.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: U.intl.string(U.t["7iegX4"]), value: e$.NS.COMPACT },
            { name: U.intl.string(U.t.bBvAEH), value: e$.NS.DEFAULT },
            { name: U.intl.string(U.t["4cuYHx"]), value: e$.NS.COZY },
        ],
        useValue: () => M.Xi.useSetting(),
        setValue: (e) => {
            e !== e$.NS.UNSET_UI_DENSITY && M.Xi.updateSetting(e);
        },
    }),
    e0 = "cozy",
    e1 = "compact",
    e2 = (0, E.Qx)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => U.intl.string(U.t.nKRoPv),
        useSubtitle: () => U.intl.string(U.t.QntEEG),
        useSearchTerms: () => [U.intl.string(U.t.ZEoGMd)],
        useOptions: () => [
            { name: U.intl.string(U.t.Jqj4cZ), value: e0 },
            { name: U.intl.string(U.t["1JNcPS"]), value: e1 },
        ],
        useValue: () => (M.hH.useSetting() ? e1 : e0),
        setValue: (e) => {
            (M.hH.updateSetting(e === e1), (0, eu.AC)());
        },
    });
var e3 = n(381941);
function e5(e) {
    return `${e.toFixed(0)}px`;
}
let e4 = (0, E.sN)(h.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => U.intl.string(U.t.Q6lKkg),
    useSubtitle: () => U.intl.string(U.t.p7eUrb),
    markers: e3.qh,
    stickToMarkers: !0,
    minValue: e3.qh["0"],
    maxValue: e3.qh[e3.qh.length - 1],
    useDefaultValue: () => (M.hH.useSetting() ? e3.y5 : e3.ES),
    useExternalValue: () => (0, f.bG)([j.Ay], () => j.Ay.messageGroupSpacing),
    getInitialValue: () => j.Ay.messageGroupSpacing,
    onValueRender: e5,
    onMarkerRender: e5,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, eu.AC)(e);
        }
    },
});
var e6 = n(775121),
    e8 = n(723702);
let e7 = (0, E.sN)(h.X.APPEARANCE_ZOOM, {
        usePredicate: () => e8.isPlatformEmbedded,
        useTitle: () => U.intl.string(U.t.i19n5L),
        useSubtitle: () => U.intl.format(U.t["x9PK/3"], { modKey: e6.A.modKey }),
        markers: I.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: I.hH7.ZOOM_SCALES["0"],
        maxValue: I.hH7.ZOOM_SCALES[I.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => I.hH7.ZOOM_DEFAULT,
        getInitialValue: () => j.Ay.zoom,
        useExternalValue: () => (0, f.bG)([j.Ay], () => j.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, eu.Qp)(e),
        useSearchTerms: () => [U.intl.string(U.t.ip0uSf)],
    }),
    e9 = (0, E.zZ)(h.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.VKYWk8),
        buildLayout: () => [eJ, e2, e4, e7],
    }),
    te = (0, E.t_)(h.X.ACCESSIBILITY_PANEL, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        buildLayout: () => [eQ, e9, ev, ez, er],
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = M.hH.useSetting(),
                    t = M.jW.useSetting(),
                    n = T.useMemo(
                        () => [
                            F(
                                U.intl.formatToPlainString(U.t.BknJRT, {}),
                                t
                                    ? [
                                          {
                                              emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                              me: !0,
                                              count: 3,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                          {
                                              emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                              me: !1,
                                              count: 1,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                      ]
                                    : [],
                            ),
                            F(U.intl.formatToPlainString(U.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, f.bG)([j.Ay], () => j.Ay.messageGroupSpacing);
                return (0, S.jsx)(_.M, {
                    children: (0, S.jsxs)("section", {
                        "aria-label": U.intl.string(U.t.RC22qg),
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: V.Vf,
                                children: U.intl.string(U.t.RC22qg),
                            }),
                            (0, S.jsxs)(C.Ip, {
                                className: V.VH,
                                children: [
                                    (0, S.jsx)("ol", {
                                        className: V.DZ,
                                        style: { gap: i },
                                        "aria-label": U.intl.string(U.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, S.jsx)(
                                                "li",
                                                {
                                                    children: (0, S.jsx)(D.A, {
                                                        message: t,
                                                        channel: k,
                                                        compact: e,
                                                        author: { ...(0, R.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: V.Jb,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: V.HD,
                                                children: w.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, S.jsx)(
                                                        y.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: b._3.SIZE_32,
                                                            src: G.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": U.intl.string(U.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, S.jsx)(v.$, {
                                                text: U.intl.string(U.t["2RHHgz"]),
                                                size: "sm",
                                                variant: "primary",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            },
            sticky: !0,
        },
    }),
    tt = (0, E.i4)(h.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        icon: x.c,
        useMenu: B.A,
        buildLayout: () => [te],
    });
n(321073);
var tn = n(650809),
    ti = n(477782),
    ts = n(636537),
    tl = n(73153),
    tr = n(74396),
    ta = n(93055),
    to = n(269880),
    tu = n(55619),
    td = n(351906),
    tc = n(174459),
    tg = n(812993),
    tm = n(189081);
let tA = (0, E.zD)(h.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, f.bG)([tm.A], () => tm.A.hasLibraryApplication()),
        useTitle: () => U.intl.string(U.t.fi3UQN),
        useSubtitle: () => U.intl.string(U.t["8mYp37"]),
        useValue: () => !M.l_.useSetting(),
        setValue: (e) => M.l_.updateSetting(!e),
    }),
    tE = (0, E.zZ)(h.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [tA],
    });
var th = n(284009),
    tx = n.n(th),
    tp = n(199966),
    tS = n(963935);
function tT(e) {
    let { title: t } = e;
    return t;
}
function tf(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tI(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, S.jsx)(tf, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function t_(e) {
    return e.type === tS.Z6.LIST;
}
function tN(e, t) {
    let { limit: n = 2, formatter: i = tT } = t ?? {};
    tx()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tp._)(),
        r = s.get(e) ?? l.get(e);
    tx()(
        null != r && (r.type === tS.Z6.ACCORDION || t_(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = t_(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return T.useMemo(() => {
        let e = a,
            t = [];
        for (let n of o)
            if ("useTitle" in n && null != n.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: n.key, useTitle: n.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(n, 3);
        if (t.length <= s)
            if (1 === t.length)
                return U.intl.format(U.t["3H9tCW"], { settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return U.intl.format(U.t.MWryo6, {
                    settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tI({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return U.intl.format(U.t.a00b5G, {
                    settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tI({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tI({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? U.intl.format(U.t.O8vNbS, { settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? U.intl.format(U.t["acXG/W"], {
                    settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tI({ setting: t[1], formatter: i, index: 1 }),
                })
              : U.intl.format(U.t["5+ldWc"], {
                    settingOneHook: tI({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tI({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tI({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tC = n(951260);
let ty = (0, E.zD)(h.X.ENABLE_APPS_BUTTON, {
        useTitle: () => U.intl.string(U.t.ZTH4j4),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, eu.n8)({ appsButtonEnabled: e }),
    }),
    tb = {
        useTitle: () => U.intl.string(U.t["I/5LyL"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSubmitButtonEnabled),
        setValue: () => (0, eu.Xt)(),
    },
    tv = (0, E.zD)(h.X.ENABLE_SEND_BUTTON, tb),
    tj = (0, E.zD)(h.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tb,
        usePredicate: () => !(0, tC.n)("EnableSendButtonOutsideExperiment"),
    }),
    tO = (0, E.zD)(h.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => U.intl.string(U.t.WggFoO),
        useSubtitle: () => U.intl.string(U.t.XpErGj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, eu.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tL = (0, E.zD)(h.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => U.intl.string(U.t.YErWkD),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, eu.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tR = (0, E.zD)(h.X.ENABLE_GIF_BUTTON, {
        useTitle: () => U.intl.string(U.t.k7oNEz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isGifButtonEnabled),
        setValue: (e) => (0, eu.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tD = (0, E.zD)(h.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => U.intl.string(U.t.Ar0krj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, eu.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tP = (0, E.Qx)(h.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => U.intl.string(U.t.AxRAWt),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat),
        setValue: (e) => (0, eu.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.k86Soy), desc: U.intl.string(U.t.bSGTTZ), value: j.IG.FLEXIBLE },
                { name: U.intl.string(U.t.bjwSOn), desc: U.intl.string(U.t.We36HX), value: j.IG.CONDENSED },
                { name: U.intl.string(U.t.FDIKss), desc: U.intl.string(U.t["rclZL/"]), value: j.IG.HIDDEN },
            ];
        },
    }),
    tG = (0, E.FW)(h.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => U.intl.string(U.t["V9/cNN"]),
        buildLayout: () => [tP, tO, tL, tR, tD],
    }),
    tM = (0, E.bd)(h.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.IwVGQs) : U.intl.string(U.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tN(h.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tC.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tv, ty, tG],
    });
var tU = n(565645);
let tV = (0, E.zD)(h.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => U.intl.string(U.t["79qal8"]),
        useSubtitle: () =>
            U.intl.format(U.t.GejoQK, { emojiHook: (e, t) => (0, S.jsx)(tU.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: M.j7.useSetting,
        setValue: M.j7.updateSetting,
    }),
    tk = (0, E.zD)(h.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t.c0oFDw),
        useValue: M.BQ.useSetting,
        setValue: M.BQ.updateSetting,
    }),
    tw = (0, E.zD)(h.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.AqGrEI),
        useValue: M.SI.useSetting,
        setValue: (e) => {
            (tc.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                M.SI.updateSetting(e));
        },
    });
var tF = n(793574);
let tB = (0, E.zD)(h.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t["d+It2U"]),
        useValue: M.ML.useSetting,
        setValue: (e) => {
            (tc.default.track(I.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tF.A.TEXT_AND_IMAGES],
            }),
                M.ML.updateSetting(e));
        },
    }),
    tz = (0, E.zZ)(h.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ob7VMB),
        useSearchTerms: () => [U.intl.string(U.t.onqU6o)],
        buildLayout: () => [tw, tV, tB, tk, tj, tM],
    });
var tY = n(526162),
    tX = n(793943),
    tH = n(792656),
    tW = n(830543),
    tK = n(785007),
    tZ = n(806932),
    tq = n(915089),
    tQ = n(10392),
    t$ = n(82498),
    tJ = n(174197),
    t0 = n(202541);
let t1 = (0, E.E2)(h.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [U.intl.string(U.t.gnwxvT)],
    Component: function () {
        let e = (0, tq.GV)(),
            { ref: t, ...n } = (0, tK._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, f.bG)([tY.A], () => tY.A.isUpsellPreview);
        return (
            (0, K.Ay)(() => {
                i &&
                    (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t0.e.APP_ICON_UPSELL,
                        location_stack: [tF.A.USER_SETTINGS],
                    }),
                    (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tF.A.USER_SETTINGS], () =>
                        (0, t$.uq)(t0.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, S.jsx)("div", {
                ...n,
                ref: t,
                children: (0, S.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, S.jsx)(tZ.m, { disabled: i, size: tJ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t2() {
    ((0, tX.nf)(tX.HP.APP_ICON), (0, tW.default)());
}
function t3() {
    return (0, S.jsx)(tH.A, {
        subscriptionTier: t0.pe.TIER_2,
        defaultTextOverride: U.intl.string(U.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t5 = (0, E.zZ)(h.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RPh2ou),
        useSubtitle: () => U.intl.string(U.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([tY.A], () => tY.A.isUpsellPreview);
            return T.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: p.UV.BUTTON,
                        text: U.intl.string(U.t["6acvnZ"]),
                        onClick: t2,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t3 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t1],
    }),
    t4 = (0, E.AK)(h.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.UDr3Iy),
        useSearchTerms: () => [U.intl.string(U.t.UDr3Iy)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    t6 = (0, E.gN)(h.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t4] });
var t8 = n(452027),
    t7 = n(193249),
    t9 = n(976860),
    ne = n(16236),
    nt = n(635233),
    nn = n(749884),
    ni = n(22277);
let ns = eC.A.getArticleURL(I.MVz.FAVORITES_GUILD);
function nl() {
    let { analyticsLocations: e } = (0, eY.Ay)(tF.A.USER_SETTINGS_FAVORITES),
        t = T.useCallback(() => {
            ((0, nt.mv)("settings_page"), (0, t9.uh)(I.YYv), (0, tW.default)());
        }, []);
    return (0, S.jsx)(eY.f5, {
        value: e,
        children: (0, S.jsx)(t8.D, {
            label: U.intl.string(ni.default.OT1NK5),
            description: U.intl.format(ni.default.GR2KOG, { helpCenterLink: ns }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, S.jsx)(v.$, { variant: "secondary", text: U.intl.string(ni.default["7WwLnr"]), onClick: t }),
                    (0, S.jsx)(tH.A, {
                        subscriptionTier: t0.pe.TIER_2,
                        defaultTextOverride: U.intl.string(ni.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let nr = (0, E.E2)(h.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, ta.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [U.intl.string(ni.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, ta.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, nn.A)(!1);
            return e
                ? (0, S.jsx)(t7.d, {
                      checked: t,
                      description: U.intl.format(ni.default.GR2KOG, { helpCenterLink: ns }),
                      onChange: ne.kG,
                      label: U.intl.string(ni.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, S.jsx)(nl, {});
        },
    }),
    na = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => U.intl.string(U.t.U47N1p),
        useValue: M.hD.useSetting,
        setValue: M.hD.updateSetting,
    }),
    no = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => U.intl.string(U.t.VP11No),
        useValue: M.X6.useSetting,
        setValue: M.X6.updateSetting,
    }),
    nu = (0, E.FW)(h.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => U.intl.string(U.t["9nyle0"]),
        buildLayout: () => [na, no],
    }),
    nd = (0, E.zD)(h.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => U.intl.string(U.t["5bK9vw"]),
        useValue: M.rs.useSetting,
        setValue: M.rs.updateSetting,
    }),
    nc = (0, E.zD)(h.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => U.intl.string(U.t["zge/fP"]),
        useValue: M.jW.useSetting,
        setValue: M.jW.updateSetting,
    });
var ng = n(28863),
    nm = n(766075);
let nA = (0, E.zD)(h.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => U.intl.string(U.t.JgjNG3),
        useSubtitle: () => {
            if (!M.hH.useSetting())
                return U.intl.format(U.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, S.jsx)(
                            ng.Anchor,
                            {
                                onClick: () => (0, nm.openUserSettings)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !M.hH.useSetting(),
        useValue: () => {
            let e = M.aM.useSetting();
            return !M.hH.useSetting() || e;
        },
        setValue: (e) => {
            M.aM.updateSetting(e);
        },
    }),
    nE = (0, E.Hn)(h.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => U.intl.string(U.t.QgwmVz),
        useOptions: () => [
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: U.intl.string(U.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: U.intl.string(U.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: U.intl.string(U.t.K5VTBE) },
        ],
        useValue: M.gs.useSetting,
        setValue: M.gs.updateSetting,
    }),
    nh = (0, E.zD)(h.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => U.intl.string(U.t.AInv5m),
        useValue: M.SY.useSetting,
        setValue: M.SY.updateSetting,
    }),
    nx = (0, E.zZ)(h.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.OIgYlQ),
        useSearchTerms: () => [U.intl.string(U.t["/VQax8"])],
        buildLayout: () => [nu, nd, nc, nE, nh, nA, nr, t6],
    });
var np = n(753806),
    nS = n(145331);
let nT = (0, E.Qx)(h.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => U.intl.string(U.t.VkoLsy),
        useSearchTerms: () => [U.intl.string(U.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.E9JM4J), value: 0 },
                { name: U.intl.string(U.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!M.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? np.A.cleanUpPrivateChannelSearchState() : np.A.cleanUpSearchState({ type: I.I4_.DMS }),
                (0, nS._k)({
                    prevIsCrossDMSettingEnabled: M.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nS.vy.USER_SETTINGS,
                }),
                M.Hu.updateSetting(t));
        },
    }),
    nf = (0, E.zZ)(h.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5h0QOP"]),
        buildLayout: () => [nT],
    });
var nI = n(574381);
let n_ = (0, E.zD)(h.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.IxjaoF),
        useValue: function () {
            return (0, f.bG)([td.A], () => {
                let { autoToggle: e } = td.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tu.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nI.Av;
        },
    }),
    nN = (0, E.zD)(h.X.STREAMING_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.TGNg6T),
        useSubtitle: () => U.intl.string(U.t["4nXLnE"]),
        useValue: function () {
            return (0, f.bG)([td.A], () => {
                let { enabled: e } = td.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tu.A.update({ enabled: e });
        },
    });
var nC = n(77729),
    ny = n(589051),
    nb = n(588857),
    nv = n(999834);
let nj = [],
    nO = (0, E.Hn)(h.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => U.intl.string(U.t.VCDSLW),
        useSearchTerms: () => [U.intl.string(U.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nv.b_)(),
                t = (0, ny.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return T.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nb.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, f.bG)([td.A], () => td.A.getSettings().disabledOverlayWidgets ?? nj);
        },
        setValue: (e) => tu.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nL = (0, E.zD)(h.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => U.intl.string(U.t.LSBUGR),
        useValue: () =>
            (0, f.bG)([td.A], () => {
                let { hidePersonalInformation: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ hidePersonalInformation: e }),
    }),
    nR = (0, E.zD)(h.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => U.intl.string(U.t.uWBOri),
        useValue: () =>
            (0, f.bG)([td.A], () => {
                let { hideInstantInvites: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ hideInstantInvites: e }),
    }),
    nD = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => U.intl.string(U.t.OrqYDP),
        useValue: () =>
            (0, f.bG)([td.A], () => {
                let { disableSounds: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ disableSounds: e }),
    }),
    nP = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sUAbLd),
        useValue: () =>
            (0, f.bG)([td.A], () => {
                let { disableNotifications: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ disableNotifications: e }),
    }),
    nG = (0, E.zD)(h.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t["iA81+a"]),
        useSubtitle: () => U.intl.string(U.t.P4vj0h),
        useValue: () =>
            (0, f.bG)([td.A], () => {
                let { enableContentProtection: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ enableContentProtection: e }),
        usePredicate: () => nC.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nM = (0, E.FW)(h.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.xYhOEh),
        buildLayout: () => [nL, nR, nD, nP, nG, nO],
    }),
    nU = (0, E.zZ)(h.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.S5GfOW),
        buildLayout: () => [nN, n_, nM],
    });
var nV = n(147248),
    nk = n(141343),
    nw = n(665267),
    nF = n(414133),
    nB = n(98908);
let nz = (0, E.Hn)(h.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => U.intl.string(U.t.Q7mm4g),
        useSearchTerms: () => [U.intl.string(nB.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: U.intl.string(U.t["hrS/Pc"]), value: e$.tI.GUILD },
            { id: "personal", label: U.intl.string(U.t.mlvXIq), value: e$.tI.PERSONAL },
        ],
        useValue: () => M.zY.useSetting(),
        setValue: M.zY.updateSetting,
        usePredicate: () => (0, nF.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nY = (0, E.zD)(h.X.SYNC_PROFILE_THEMES, {
        useTitle: () => U.intl.string(U.t.C00w4l),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, eu.M1)(),
    });
var nX = n(817281),
    nH = n(284016),
    nW = n(363195);
let nK = (0, E.zD)(h.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => U.intl.string(U.t["/B+kEV"]),
    useSearchTerms: () => [U.intl.string(U.t.Ksh3ik)],
    useValue: function () {
        return (0, f.bG)([nH.A], () => !1 !== nH.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, f.bG)([nW.A], () => nW.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nW.A.theme,
            i = nV.A.gradientPreset?.id ?? null,
            s = M.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            tl.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nX.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nZ = n(393284);
let nq = (0, E.AK)(h.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.nhVQDJ),
        useSearchTerms: () => [U.intl.string(U.t.nhVQDJ)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    nQ = (0, E.gN)(h.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nq] }),
    n$ = (0, E.zZ)(h.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, f.bG)([j.Ay], () => j.Ay.useForcedColors)
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eN.D)()
                          ? U.intl.format(U.t.Jae48E, {
                                onClick: () => {
                                    (0, nm.openUserSettings)(h.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : U.intl.string(U.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, f.bG)([nV.A, j.Ay], () => j.Ay.useForcedColors || nV.A.isPreview),
                t = (0, nk.V)();
            return e || t
                ? null
                : {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
                              text: U.intl.string(U.t["E+COuA"]),
                              onClick: nw.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nZ.k, nK, nY, nz, nQ],
    }),
    nJ = (0, E.t_)(h.X.APPEARANCE_PANEL, {
        initialize: function () {
            tr.A.isFetching() ||
                (tl.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                ts.Bo.get({ url: I.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        tl.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        tl.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        buildLayout: () => [n$, t5, nx, tz, nf, nU, tE],
    }),
    n0 = [
        { badgeType: p.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, S.jsx)(tg.JI, { text: U.intl.string(U.t.y2b7CA) });
            },
        },
    ],
    n1 = (0, E.i4)(h.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        icon: tn.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, to.A)(),
                s =
                    ((e = M.D_.useSetting()),
                    (t = M.SI.useSetting()),
                    e
                        ? null
                        : (0, S.jsx)(ti.sL, {
                              id: "preview-markdown-toggle",
                              label: U.intl.string(U.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (tc.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      M.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, f.bG)([td.A], () => td.A.enabled, [])),
                    (0, S.jsx)(ti.sL, {
                        id: "streamer-mode-toggle",
                        label: U.intl.string(U.t.p9ZAJZ),
                        action: () => {
                            tu.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return T.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, S.jsx)(ti.rX, { label: U.intl.string(U.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, S.jsx)(ti.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, ta.ad)().isFreemium
                ? n0.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eA.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : n0,
        buildLayout: () => [nJ],
    });
var n2 = n(37646),
    n3 = n(434404);
let n5 = (0, E.t_)(h.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n3.F],
    }),
    n4 = (0, E.i4)(h.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n2.U,
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n5],
    });
var n6 = n(3137),
    n8 = n(661531),
    n7 = n(314116),
    n9 = n(270003),
    ie = n(939249),
    it = n(369606),
    ii = n(320448),
    is = n(604121),
    il = n(725951),
    ir = n(400492),
    ia = n(669067),
    io = n(115063),
    iu = n(754692),
    id = n(927018),
    ic = n(512599),
    ig = n(532197),
    im = n(403362),
    iA = n(874486),
    iE = n(503698),
    ih = n.n(iE),
    ix = n(536637),
    ip = n.n(ix),
    iS = n(58703),
    iT = n(906688),
    iI = n(98705);
function i_(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, id.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ip()(n),
        m = null != o && s,
        A = m ? ie.D : "div";
    return (0, S.jsxs)(A, {
        className: ih()(iI.kL, m && iI.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, S.jsx)("div", {
                className: iI.zc,
                children: (0, S.jsx)(iT.A, { achievementId: t, size: iT.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, S.jsxs)("div", {
                className: iI.VW,
                children: [
                    null != n &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iI.YR,
                            children: (0, iS.mk)(g),
                        }),
                    (0, S.jsx)(Q.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, S.jsx)(Q.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iN = n(545744);
function iC(e) {
    let { onBackClick: t } = e,
        n = (0, f.bG)([iA.A], () => iA.A.getAllUnlockedAchievements()),
        i = T.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = T.useMemo(
            () =>
                Object.values(id.l0)
                    .filter(im.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)(ie.D, {
                onClick: t,
                className: iN.vv,
                children: [
                    (0, S.jsx)(ig.A, { direction: ig.A.Directions.LEFT, className: iN.Kk }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["13/7kX"]),
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: iN.N1,
                children: [
                    (0, S.jsxs)("div", {
                        className: iN.if,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: U.intl.string(U.t["6jI0hd"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: U.intl.string(U.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, S.jsx)("div", {
                        className: iN.nr,
                        children: (0, S.jsx)(it.TrophyIcon, {
                            size: "custom",
                            color: n8.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, S.jsx)("div", {
                    className: iN.yF,
                    children: (0, S.jsx)("div", {
                        className: iN.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, S.jsx)(i_, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, S.jsxs)("div", {
                    className: iN.yF,
                    children: [
                        (0, S.jsx)("div", {
                            className: iN.if,
                            children: (0, S.jsx)(Q.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: U.intl.string(U.t.GFyMg1),
                            }),
                        }),
                        (0, S.jsx)("div", {
                            className: iN.Eh,
                            children: s.map((e) => (0, S.jsx)(i_, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, S.jsx)("div", { className: iN.yF, children: (0, S.jsx)("div", { className: iN.F3 }) }),
        ],
    });
}
var iy = n(224964),
    ib = n(31408),
    iv = n(368588);
let ij = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iO = (0, H.range)(0, 11),
    iL = (0, H.range)(0, 2.25, 0.25),
    iR = (0, H.range)(1, 11),
    iD = (0, H.range)(1, 26),
    iP = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iG(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, S.jsx)(
                t7.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...i, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, S.jsx)(n9.n, { label: U.intl.string(U.t.bWVN1D), children: l });
}
function iM(e) {
    let { children: t } = e;
    return (0, S.jsx)(Q.E, { className: iv.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iU(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    return (0, S.jsx)(t7.d, {
        label: U.intl.string(U.t.vuiXm9),
        description: U.intl.string(U.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, iu._)(id.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n7.A)({
                          title: s ? U.intl.string(U.t["FxT+p0"]) : U.intl.string(U.t.TAZ4F9),
                          subtitle: s ? U.intl.string(U.t.gmixrx) : U.intl.string(U.t.jN3t3K),
                          confirmText: U.intl.string(U.t.JFfins),
                          onConfirm: () => i(s ? ij : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iV(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, S.jsxs)(n9.n, {
        label: U.intl.string(U.t.mqxwJO),
        children: [
            (0, S.jsx)(t7.d, {
                label: U.intl.string(U.t.s0KCgF),
                description: U.intl.string(U.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: U.intl.string(U.t.vd0D81),
                    }),
                    (0, S.jsx)(iM, { children: U.intl.string(U.t.a18Sug) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iR,
                        stickToMarkers: !0,
                        minValue: iR[0],
                        maxValue: iR[iR.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: U.intl.string(U.t.sPO3ij),
                    }),
                    (0, S.jsx)(iM, { children: U.intl.string(U.t.xoldVn) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iD,
                        stickToMarkers: !0,
                        minValue: iD[0],
                        maxValue: iD[iD.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, S.jsx)(iG, {
                disabled: a,
                locations: [
                    {
                        location: ib.k.CHAT_INPUT,
                        title: U.intl.string(U.t.elTtyz),
                        description: U.intl.string(U.t.HtKfMi),
                    },
                    {
                        location: ib.k.REACTION,
                        title: U.intl.string(U.t.Ik4VIa),
                        description: U.intl.string(U.t.y4rqK0),
                    },
                    {
                        location: ib.k.MEMBER_USER,
                        title: U.intl.string(U.t.ZXBlAn),
                        description: U.intl.string(U.t["m9RD+c"]),
                    },
                    {
                        location: ib.k.CALL_TILE,
                        title: U.intl.string(U.t.V66giQ),
                        description: U.intl.string(U.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function ik(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, S.jsxs)(n9.n, {
        label: U.intl.string(U.t.Xz0ole),
        children: [
            (0, S.jsx)(t7.d, {
                label: U.intl.string(U.t.o3iV7B),
                description: U.intl.string(U.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, S.jsx)(t7.d, {
                label: U.intl.string(U.t["Ax+IoW"]),
                description: U.intl.string(U.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: U.intl.string(U.t.L0oQuh),
                    }),
                    (0, S.jsx)(iM, { children: U.intl.string(U.t["/OOFpL"]) }),
                    (0, S.jsx)(q.A, {
                        disabled: r,
                        markers: iO,
                        stickToMarkers: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iw(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, S.jsxs)(n9.n, {
        label: U.intl.string(U.t.wVS5Sd),
        children: [
            (0, S.jsx)(t7.d, {
                label: U.intl.string(U.t.N004zO),
                description: r ? U.intl.string(U.t.GckHGw) : U.intl.string(U.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: U.intl.string(U.t.UxnnC4),
                    }),
                    (0, S.jsx)(iM, { children: U.intl.string(U.t.CEOEOb) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iL,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iL[0],
                        maxValue: iL[iL.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, iu._)(id.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === iL[iL.length - 1] ? U.intl.string(U.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, S.jsx)(iG, {
                disabled: a,
                locations: [
                    {
                        location: ib.uD.CHAT_INPUT,
                        title: U.intl.string(U.t.vUcvPP),
                        description: U.intl.string(U.t.y00OrF),
                    },
                    {
                        location: ib.uD.VOICE_USER,
                        title: U.intl.string(U.t.TcRO54),
                        description: U.intl.string(U.t.YJCxVY),
                    },
                    {
                        location: ib.uD.MENTION,
                        title: U.intl.string(U.t.oW4shO),
                        description: U.intl.string(U.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iF(e) {
    let { updateSettings: t } = e;
    return (0, S.jsx)(n9.n, {
        label: U.intl.string(U.t.EuXv2q),
        children: (0, S.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["1SLnki"]) }),
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iv.hw,
                    children: (0, S.jsx)(v.$, {
                        variant: "primary",
                        size: "sm",
                        text: U.intl.string(U.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tW.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iB(e) {
    let { onChangePage: t } = e;
    return (0, S.jsxs)(ie.D, {
        onClick: function () {
            return t(1);
        },
        className: iv.Tq,
        children: [
            (0, S.jsx)("div", {
                className: iv.w1,
                children: (0, S.jsx)(it.TrophyIcon, { size: "md", color: n8.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, S.jsxs)("div", {
                className: iv.qL,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["6jI0hd"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.string(U.t.GuUItX),
                    }),
                ],
            }),
            (0, S.jsx)(ii._, { size: "custom", color: "currentColor", width: 16, className: iv.nT }),
        ],
    });
}
function iz() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iY(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, f.cf)([n6.A], () => n6.A.getState()),
        [s, l] = T.useState({ x: 0, y: 0 }),
        r = (0, iy.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, ir.Ak)("poggermode_enabled"),
                (0, io.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ic.O9)(e),
            null == t)
        )
            return;
        let A =
            ((l = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? l) && (u ?? o));
        0 === t && A && r.fire(s.x, s.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, io.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        T.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, S.jsxs)(Z.B, {
            gap: 24,
            children: [
                (0, S.jsx)(iU, { settings: i, updateSettings: a }),
                (0, S.jsx)(iB, { onChangePage: t }),
                (0, S.jsx)(ik, { settings: i, updateSettings: a }),
                (0, S.jsx)(iw, { settings: i, updateSettings: a }),
                (0, S.jsx)(iV, { settings: i, updateSettings: a }),
                (0, S.jsx)(iF, { updateSettings: a }),
            ],
        })
    );
}
function iX(e) {
    return 0 === e ? il.f.LEFT : il.f.RIGHT;
}
let iH = (0, E.E2)(h.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = T.useState(0),
                [n, i] = T.useState(iX(e)),
                [s, l] = T.useState(!1),
                r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
                a = s && !r;
            return (
                T.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iX(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                T.useEffect(() => {
                    (0, ia._)(iP[e]);
                }, [e]),
                T.useEffect(() => {
                    Math.random() > 0.99 && (0, iu._)(id.sn.VISITOR_100);
                }, []),
                (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(il.A, {
                            className: iv.l3,
                            step: e,
                            direction: n,
                            children: (function (e, t, n) {
                                function i(e) {
                                    return () => {
                                        t(e);
                                    };
                                }
                                switch (e) {
                                    case 0:
                                        return (0, S.jsx)(iY, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, S.jsx)(iC, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, S.jsx)("div", {
                            className: a ? iv.Sr : iv.IP,
                            children: (0, S.jsx)(is.a, {
                                className: iv.gT,
                                importData: iz,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => l(!1),
                            }),
                        }),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            U.intl.string(U.t.AtCukI),
            U.intl.string(U.t.mqxwJO),
            U.intl.string(U.t.wVS5Sd),
            U.intl.string(U.t.Xz0ole),
            U.intl.string(U.t["Ax+IoW"]),
            U.intl.string(U.t["6jI0hd"]),
            U.intl.string(U.t.s0KCgF),
        ],
    }),
    iW = (0, E.zZ)(h.X.POGGERMODE_CATEGORY, { buildLayout: () => [iH] });
var iK = n(212043);
let iZ = (0, E.t_)(h.X.POGGERMODE_PANEL, { useTitle: () => U.intl.string(U.t.AtCukI), buildLayout: () => [iW] }),
    iq = (0, E.i4)(h.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AtCukI),
        icon: () => (0, S.jsx)("img", { alt: "", src: n(724405), className: iK.$ }),
        usePredicate: () => (0, f.bG)([n6.A], () => n6.A.settingsVisible),
        buildLayout: () => [iZ],
    });
var iQ = n(307301),
    i$ = n(410767),
    iJ = n(683071),
    i0 = n(97260),
    i1 = n(710195),
    i2 = n(57757),
    i3 = n(188321),
    i5 = n(695366),
    i4 = n(812729),
    i6 = n.n(i4),
    i8 = n(587895),
    i7 = n(429913),
    i9 = n(616356),
    se = n(952818);
function st(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function sn() {
    let e = (0, f.bG)([i9.A], () => i9.A.getStreamerActiveStreamMetadata()),
        t = (0, f.bG)(
            [se.Ay],
            () => {
                let e = se.Ay.getVisibleGame();
                return null != e ? se.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i6(),
        ),
        [n] = (0, i7.A)([st(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var si = n(769015),
    ss = n(25578),
    sl = n(935671),
    sr = n(435075);
function sa(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, S.jsx)("div", {
              className: sr.zc,
              children: (0, S.jsx)(i5.E, { size: "sm", color: n8.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, S.jsxs)("div", {
              className: sr.nt,
              children: [
                  (0, S.jsx)(si.A, { game: n, pid: t.pid, size: si.M.MEDIUM }),
                  (0, S.jsx)("div", {
                      className: sr.Am,
                      children: (0, S.jsx)(i5.E, { size: "sm", color: n8.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function so(e) {
    let t = (0, f.bG)([ss.Ay], () => ss.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = sn();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, sl.NP)(),
        l = s && null != n && t === I.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function su(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = so(n);
    return i
        ? (0, S.jsxs)("div", {
              className: ih()(sr.kL, t),
              children: [
                  (0, S.jsx)(sa, { game: s, application: l }),
                  (0, S.jsxs)("div", {
                      className: sr.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? U.intl.string(U.t.vxfv7v)
                                      : null != s
                                        ? U.intl.string(U.t.fAYU2G)
                                        : U.intl.string(U.t["9V4X/c"]),
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: U.intl.format(U.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: function () {
                          (0, sl.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var sd = n(404778),
    sc = n(691885),
    sg = n(408278),
    sm = n(241326),
    sA = n(866665),
    sE = n(140735),
    sh = n(489718),
    sx = n(635242),
    sp = n(350535),
    sS = n(189213),
    sT = n(192308),
    sf = n(95477),
    sI = n(320989),
    s_ = n(978263);
let sN = [];
var sC = n(235986),
    sy = n(484734),
    sb = n(734057),
    sv = n(808728),
    sj = n(71393),
    sO = n(967198),
    sL = n(926140),
    sR = n(847893);
function sD() {}
let sP = [sL.rD.VOICE_CHANNEL];
function sG(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sM() {
    return (0, S.jsx)("div", {
        className: sR.i1,
        children: (0, S.jsx)(Q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sR.GN,
            children: U.intl.string(U.t.zHjCd1),
        }),
    });
}
function sU(e) {
    let { keybind: t, className: n } = e,
        i = T.useRef(t);
    T.useEffect(() => {
        i.current = t;
    });
    let [s, l] = T.useState(t.params?.channelId ?? void 0),
        r = T.useCallback(() => {
            (0, sT.openModalLazy)(
                async () => (e) =>
                    (0, S.jsx)(sV, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), i0.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, S.jsx)("div", {
        className: ih()(sR.a8, n),
        children: (0, S.jsx)(t8.D, {
            label: U.intl.string(U.t.q4JpM8),
            children: (0, S.jsxs)(sC.A, {
                align: sC.A.Align.STRETCH,
                children: [
                    (0, S.jsx)("div", { className: sR.$X, children: (0, S.jsx)(sk, { channelId: s }) }),
                    (0, S.jsx)(sC.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sV(e) {
    let t,
        n,
        { transitionState: i, onClose: s, onSelect: l } = e,
        r = T.useId(),
        a = T.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: n,
                    autocompleterOptions: i,
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = T.useState(""),
                [a, o] = T.useState(sN),
                u = T.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sN) : o(e);
                }, []);
            T.useEffect(
                () =>
                    sI.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = T.useState(() => new s_.A(u, n, void 0, i));
            return (
                T.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: T.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sP, autocompleterBeforeCreateSearchContext: sG }),
        c =
            ((t = "" !== o),
            (n = (0, f.yK)(
                [sv.Ay, sb.A, sO.A],
                () => {
                    let e = sO.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sv.Ay.getVocalChannelIds(e)) {
                        let e = sb.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = T.useState(0),
                i = T.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                T.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    T.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === sL.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        h =
            A > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: U.intl.string(U.t["+N3fW7"]),
                      ref: a,
                      sections: [A],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === sL.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sb.A.getChannel(n.parent_id) : void 0,
                              r = sj.A.getGuild(n.guild_id);
                          return (0, S.jsx)(
                              sy.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      (l(n.id), s());
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != r ? (0, S.jsx)("div", { className: sR.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, S.jsx)(sM, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, S.jsx)(sS.a, {
        transitionState: i,
        onClose: s,
        title: U.intl.string(U.t.Dm8O4e),
        subtitle: U.intl.string(U.t.q4JpM8),
        actions: void 0,
        input: (0, S.jsx)(sf.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            s();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === sL.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? l(void 0) : l(e.id), s());
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(A - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= A - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: U.intl.string(U.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": A > 0,
            "aria-activedescendant": A > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: h,
    });
}
function sk(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, f.cf)([sb.A, sj.A], () => {
            let e = null != t ? sb.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sb.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sj.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, S.jsx)(Q.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sR.GN,
              children: U.intl.string(U.t["/fYIK7"]),
          })
        : (0, S.jsx)(sy.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sD,
              onFocus: sD,
              onMouseEnter: sD,
              focused: !1,
              children: null != s ? (0, S.jsx)("div", { className: sR.J5, children: s.name }) : null,
          });
}
var sw = n(650583),
    sF = n(94451);
function sB(e) {
    let { keybind: t } = e,
        n = sp.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, S.jsx)("div", {
              className: sF.$e,
              children: (0, S.jsx)(iJ.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sw.Yy.has(n)
          ? (0, S.jsx)("div", {
                className: sF.$e,
                children: (0, S.jsx)(iJ.w, {
                    type: "warning",
                    message: U.intl.format(U.t.MOIaNd, {
                        keyboardNavArticle: eC.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function sz(e) {
    let { keybind: t } = e;
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, S.jsx)(sU, { keybind: t, className: sF._M }) : null;
}
let sY = T.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = T.useCallback((e) => i0.A.setKeybind({ ...t, action: e }), [t]),
        l = T.useCallback((e) => i0.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = T.useCallback(() => i0.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = T.useCallback(() => i0.A.deleteKeybind(t.id), [t.id]),
        o = T.useId(),
        u = T.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, S.jsxs)("div", {
        className: sF.f_,
        children: [
            (0, S.jsx)(sB, { keybind: t }),
            (0, S.jsx)("div", {
                className: sF.XI,
                children: (0, S.jsx)(sc.l, {
                    selectionMode: "single",
                    label: U.intl.string(U.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, S.jsx)("div", {
                className: sF.LE,
                children: (0, S.jsx)(t8.D, {
                    label: U.intl.string(U.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, S.jsx)(sx.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, S.jsxs)("div", {
                className: sF.ne,
                children: [
                    !t.managed &&
                        (0, S.jsx)(sg.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sm.TrashIcon,
                            "aria-label": U.intl.string(U.t.qEHmmB),
                        }),
                    (0, S.jsx)(sA.m, {
                        text: U.intl.string(t.enabled ? U.t.pNYGbx : U.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(sE.A, {
                                    id: o,
                                    children: U.intl.format(t.enabled ? U.t["myr/Y0"] : U.t.lYhtPO, { actionName: u }),
                                }),
                                (0, S.jsx)(sh.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sF.h_,
                children: n[t.action],
            }),
            (0, S.jsx)(sz, { keybind: t }),
        ],
    });
});
var sX = n(696760),
    sH = n(734066),
    sW = n(880144),
    sK = n(614455),
    sZ = n(532624),
    sq = n(731854),
    sQ = n(603933);
let s$ = function () {
        let e,
            t,
            n,
            i,
            s,
            l,
            r,
            {
                customizableKeybinds: a,
                keybindDescriptions: o,
                keybindActionTypes: u,
            } = ((e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getState())),
            (t = (0, f.bG)([ss.Ay], () => (0, sW.A)(ss.Ay))),
            (n = (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.VIDEO))),
            (i = (0, f.bG)([sK.A], () => sK.A.isSupported)),
            (s = (0, sH.sw)()),
            (l = (0, sH.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: s } = e;
                    return W()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    I.hCu.SAVE_CLIP,
                                    I.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === I.hCu.SAVE_CLIP || e.action === I.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === I.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === I.hCu.SOUNDBOARD || e.action === I.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (r = (0, e8.isWindows)()),
                }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            allowSoundboard: s,
                            enableClips: l,
                            enableScreenshotKeybind: r,
                        } = e,
                        a = [
                            { id: "unassigned", value: I.hCu.UNASSIGNED, label: U.intl.string(U.t["0Uh579"]) },
                            { id: "push-to-talk", value: I.hCu.PUSH_TO_TALK, label: U.intl.string(U.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: I.hCu.PUSH_TO_TALK_PRIORITY,
                                label: U.intl.string(U.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: I.hCu.PUSH_TO_MUTE, label: U.intl.string(U.t.hSCRqd) },
                            { id: "vad-priority", value: I.hCu.VAD_PRIORITY, label: U.intl.string(U.t["49d6Nd"]) },
                            { id: "toggle-mute", value: I.hCu.TOGGLE_MUTE, label: U.intl.string(U.t.PlkYKD) },
                            { id: "toggle-deafen", value: I.hCu.TOGGLE_DEAFEN, label: U.intl.string(U.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: I.hCu.TOGGLE_VOICE_MODE,
                                label: U.intl.string(U.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: I.hCu.TOGGLE_STREAMER_MODE,
                                label: U.intl.string(U.t.BK0Ncc),
                            },
                            {
                                id: "toggle-voice-channel-chat",
                                value: I.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: U.intl.string(U.t.YeqEjm),
                            },
                        ];
                    return (
                        i &&
                            a.push({
                                id: "toggle-camera",
                                value: I.hCu.TOGGLE_CAMERA,
                                label: U.intl.string(U.t.hf8JVT),
                            }),
                        t &&
                            (a.push({
                                id: "toggle-overlay-input-lock",
                                value: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: U.intl.string(U.t.VsAZcC),
                            }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: U.intl.string(U.t.hurHWo),
                            })),
                        n &&
                            ((0, e8.isWindows)() || ss.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: I.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: U.intl.string(U.t.ybdjJD),
                            }),
                        (0, e8.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: I.hCu.NAVIGATE_BACK, label: U.intl.string(U.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: I.hCu.NAVIGATE_FORWARD,
                                    label: U.intl.string(U.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: I.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: U.intl.string(U.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: I.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: U.intl.string(U.t.CV7mT7),
                                },
                            ),
                            s &&
                                a.push(
                                    { id: "soundboard", value: I.hCu.SOUNDBOARD, label: U.intl.string(U.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: I.hCu.SOUNDBOARD_HOLD,
                                        label: U.intl.string(U.t["1xFbP/"]),
                                    },
                                ),
                            l &&
                                (a.push({ id: "save-clip", value: I.hCu.SAVE_CLIP, label: U.intl.string(U.t.U4URzP) }),
                                r &&
                                    a.push({
                                        id: "save-screenshot",
                                        value: I.hCu.SAVE_SCREENSHOT,
                                        label: U.intl.string(U.t["+WloFH"]),
                                    }))),
                        a
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    allowSoundboard: r,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                }),
                keybindDescriptions: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            enableClips: s,
                            enableScreenshotKeybind: l,
                        } = e,
                        r = {
                            [I.hCu.UNASSIGNED]: U.intl.string(U.t.rvlNLv),
                            [I.hCu.PUSH_TO_MUTE]: U.intl.string(U.t.xtESim),
                            [I.hCu.PUSH_TO_TALK]: U.intl.string(U.t.wTcBSy),
                            [I.hCu.PUSH_TO_TALK_PRIORITY]: U.intl.string(U.t.FhHvWH),
                            [I.hCu.TOGGLE_MUTE]: U.intl.string(U.t.X2fbUm),
                            [I.hCu.TOGGLE_DEAFEN]: U.intl.string(U.t.MjREZV),
                            [I.hCu.TOGGLE_VOICE_MODE]: U.intl.string(U.t.snm5YW),
                            [I.hCu.TOGGLE_STREAMER_MODE]: U.intl.string(U.t.YszLLx),
                            [I.hCu.VAD_PRIORITY]: U.intl.string(U.t.rSe8IZ),
                            [I.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: U.intl.string(U.t.desfB4),
                        };
                    return (
                        i && (r[I.hCu.TOGGLE_CAMERA] = U.intl.string(U.t.v1JBtL)),
                        t && (r[I.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = U.intl.string(U.t.IoP5vc)),
                        n && (0, e8.isWindows)() && (r[I.hCu.TOGGLE_GO_LIVE_STREAMING] = U.intl.string(U.t.s4C238)),
                        (0, e8.isDesktop)() &&
                            ((r[I.hCu.NAVIGATE_BACK] = U.intl.string(U.t.nKDlEt)),
                            (r[I.hCu.NAVIGATE_FORWARD] = U.intl.string(U.t.DK0FFk)),
                            (r[I.hCu.SOUNDBOARD] = (0, e8.isWindows)()
                                ? U.intl.string(U.t["5wJefL"])
                                : U.intl.string(U.t.gzjsSP)),
                            (r[I.hCu.SOUNDBOARD_HOLD] = (0, e8.isWindows)()
                                ? U.intl.string(U.t.RRkZc9)
                                : U.intl.string(U.t.laNlTl)),
                            s &&
                                ((r[I.hCu.SAVE_CLIP] = U.intl.string(U.t.z3Wbam)),
                                l && (r[I.hCu.SAVE_SCREENSHOT] = U.intl.string(U.t.m0zd57)))),
                        r
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                }),
            });
        return 0 === a.length
            ? (0, S.jsx)(Q.E, { variant: "text-sm/normal", color: "text-subtle", children: U.intl.string(U.t.vyYgWp) })
            : (0, S.jsx)("div", {
                  className: sQ.A,
                  children: a.map((e, t) =>
                      (0, S.jsxs)(
                          T.Fragment,
                          {
                              children: [
                                  (0, S.jsx)(sY, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, S.jsx)(sd.c, { className: sQ.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    sJ = (0, E.E2)(h.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["069nVT"])],
        Component: function () {
            return nI.Av
                ? (0, S.jsx)(s$, {})
                : (0, S.jsx)(iJ.w, {
                      type: "info",
                      message: U.intl.format(U.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "static",
                  });
        },
    });
var s0 = n(475358),
    s1 = n(28647),
    s2 = n(793650);
function s3(e) {
    let { children: t } = e;
    return t([sX.Q_.MESSAGE, sX.Q_.NAVIGATION, sX.Q_.DND, sX.Q_.CHAT, sX.Q_.VOICE_AND_VIDEO, sX.Q_.MISCELLANEOUS]);
}
function s5(e) {
    let { showHeader: t = !0 } = e,
        n = W()((0, sX.Bx)())
            .filter((e) => e.description !== U.intl.string(U.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, S.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, S.jsx)(n9.n, {
                label: t ? U.intl.string(U.t.Lz5KHI) : void 0,
                children: (0, S.jsx)("div", {
                    className: s2.jh,
                    children: (0, S.jsxs)("div", {
                        className: s2.yZ,
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.sMWLBj) }),
                            (0, S.jsx)("div", {
                                className: s2.DM,
                                children: (0, S.jsx)(s0.e, { shortcut: s1.z.binds["0"], className: s2.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, S.jsx)(s3, {
                children: (e) =>
                    (0, S.jsx)(S.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sX.Gm)(e),
                                s = (0, sX.zF)(e),
                                l = n[e];
                            return (0, S.jsx)(
                                n9.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, S.jsx)("div", {
                                        className: s2.jh,
                                        children: l.map((e, t) =>
                                            (0, S.jsxs)(
                                                T.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, S.jsx)(sd.c, {}),
                                                        (0, S.jsxs)("div", {
                                                            className: s2.yZ,
                                                            children: [
                                                                (0, S.jsx)(Q.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, S.jsx)("div", {
                                                                    className: s2.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, S.jsx)(
                                                                            s0.e,
                                                                            { shortcut: e, className: s2.LE },
                                                                            e,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                e.description,
                                            ),
                                        ),
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
            }),
        ],
    });
}
let s4 = (0, E.E2)(h.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.Lz5KHI)],
        Component: () => (0, S.jsx)(s5, { showHeader: !1 }),
    }),
    s6 = (0, E.zD)(h.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => U.intl.string(eL.default.rea2Ar),
        useSubtitle: () => U.intl.string(eL.default.DwBO0x),
        useValue: () => (0, f.bG)([i3.A], () => i3.A.isEnabledFor(!0)),
        setValue: (e) => {
            tl.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e });
        },
    });
var s8 = n(19575),
    s7 = n(546385);
let s9 = (0, E.E2)(h.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nI.Av && !(0, nI.cX)(),
    useSearchTerms: () => [U.intl.string(U.t["/HIxyY"]), U.intl.string(U.t.B0hqpb)],
    Component: function () {
        let [e] = T.useState(() => s8.Ay.getEnableHardwareAcceleration()),
            t = U.intl.string(U.t["/HIxyY"]),
            n = U.intl.string(U.t.B0hqpb);
        return (0, S.jsxs)(Z.B, {
            children: [
                (0, S.jsx)(t7.d, { label: t, description: n, checked: e, onChange: le }),
                !e && (0, S.jsx)(s7.A, { look: s7.k.WARNING, children: U.intl.string(U.t.j7S6IX) }),
            ],
        });
    },
});
function le(e) {
    let t = e ? U.intl.format(U.t.LYXRxL, {}) : U.intl.format(U.t.uDP3Kz, {});
    (0, n7.A)({
        title: U.intl.string(U.t.aqpAvn),
        subtitle: t,
        confirmText: U.intl.string(U.t.vT7ckk),
        onConfirm: () => {
            s8.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lt = (0, e_.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function ln() {
    let e = await s8.Ay.getOpenOnStart(),
        t = await s8.Ay.getSetting("START_MINIMIZED", !1),
        n = await s8.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lt.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let li = (0, E.zD)(h.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => U.intl.string(U.t["3BeZti"]),
        usePredicate: () => nI.Av && !(0, nI.cX)(),
        useValue: () => lt.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (lt.setState({ openOnStartup: e }), s8.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            s8.Ay.getOpenOnStart().then((e) => lt.setState({ openOnStartup: e }));
        },
    }),
    ls = (0, E.zD)(h.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => U.intl.string(U.t.dJ5MUh),
        useSubtitle: () => U.intl.string(U.t.nQavHr),
        usePredicate: () => nI.Av && !(0, nI.cX)(),
        useValue: () => lt.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (lt.setState({ minimizeToTray: e }), s8.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            s8.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lt.setState({ minimizeToTray: e }));
        },
    }),
    ll = (0, E.zD)(h.X.OS_START_MINIMIZED, {
        useTitle: () => U.intl.string(U.t.GfBL83),
        useSubtitle: () => U.intl.string(U.t.XGyhhc),
        usePredicate: () => (0, nI.uF)(),
        useValue: () => lt.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (lt.setState({ startMinimized: e }), s8.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !lt.useState((e) => e.openOnStartup),
        initialize: () => {
            s8.Ay.getSetting("START_MINIMIZED", !1).then((e) => lt.setState({ startMinimized: e }));
        },
    });
var lr = n(61628);
let la = new Set(["failure", "unknown"]),
    lo = (0, E.E2)(h.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [U.intl.string(U.t.roHq80)],
        Component: function () {
            let [e, t] = T.useState(!1),
                [n, i] = T.useState(() => (0, sl.TC)()),
                s = (0, f.bG)([se.Ay], () => se.Ay.getSystemServiceStatus("input-service")),
                l = T.useCallback(async () => {
                    (t(!0),
                        n ? await (0, sl.z8)("windows-settings") : await (0, sl.sL)("windows-settings"),
                        t(!1),
                        i((0, sl.TC)()));
                }, [n]);
            return (0, S.jsxs)("div", {
                className: lr.q,
                children: [
                    (0, S.jsxs)("div", {
                        className: lr.L,
                        children: [
                            (0, S.jsxs)(Z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.roHq80),
                                    }),
                                    n &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : la.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return U.intl.string(U.t["KW+nqT"]);
                                                            case "disabled":
                                                                return U.intl.string(U.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return U.intl.string(U.t.Xvs9IM);
                                                            case "initializing":
                                                                return U.intl.string(U.t.h4qz8W);
                                                            case "connecting":
                                                                return U.intl.string(U.t.fSu9XF);
                                                            case "handshaking":
                                                                return U.intl.string(U.t["00aYLJ"]);
                                                            case "running":
                                                                return U.intl.string(U.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return U.intl.string(U.t["0FONwi"]);
                                                            case "failure":
                                                                return U.intl.string(U.t.Ic0nkd);
                                                            default:
                                                                (0, im.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.format(U.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(v.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? U.intl.string(U.t.pAwbdL) : U.intl.string(U.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: sl.XQ,
    });
var lu = n(687813),
    ld = n(562708),
    lc = n(739187),
    lg = n(97483);
async function lm() {
    try {
        await lA();
    } catch {
        (0, lc.P)({ id: "performance-trace-failed", type: lg.Ck.FAILURE, message: U.intl.string(U.t["8ihs9i"]) });
    }
}
async function lA() {
    var e;
    let t = nC.A.tracing;
    if (null == t) return;
    (0, lc.P)({ id: "performance-trace-capturing", type: lg.Ck.MESSAGE, message: U.intl.string(U.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nC.A.processUtils.getSystemInfo(),
            nC.A.processUtils.getSystemMetrics(),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, ld.getSuperProperties)(),
            native_build_number: nC.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nC.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nC.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, lu._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, lu._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, lu.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nC.A.fileManager.showItemInFolder(u),
        (0, lc.P)({ id: "performance-trace-saved", type: lg.Ck.SUCCESS, message: U.intl.string(U.t.gpCRFS) }));
}
let lE = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => U.intl.string(U.t.o6Qr6n),
    useSubtitle: () => U.intl.string(U.t.OuGtH8),
    useLabel: () => U.intl.string(U.t.bm1WjO),
    usePredicate: () => nI.Av && nC.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n7.A)({
            title: U.intl.string(U.t.o6Qr6n),
            subtitle: U.intl.string(U.t.JEHHJ1),
            confirmText: U.intl.string(U.t.bm1WjO),
            onConfirm: () => {
                ((0, tW.default)(), lm());
            },
        });
    },
});
function lh() {
    tl.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lx = n(287809);
let lp = (0, E.Tf)(h.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lh();
    },
});
var lS = n(114129),
    lT = n(442325),
    lf = n(858760);
let lI = (0, E.zD)(h.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        usePredicate: () => lf.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nI.xl)(),
        useValue: () => (0, f.bG)([lT.A], () => lT.A.isUserOptedIn()),
        setValue: lS.lj,
    }),
    l_ = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lp, lE, lI],
    }),
    lN = (0, E.zZ)(h.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t.cg6ltt),
        buildLayout: () => [li, ll, ls, s9],
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        initialize: () => {
            ln();
        },
    }),
    lC = (0, E.zZ)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["069nVT"]),
        useSubtitle: () => U.intl.string(U.t.T4LZVL),
        buildLayout: () => [sJ],
        initialize: () => (i0.A.enableAll(!1), () => i0.A.enableAll(!0)),
        useInlineNotice: function () {
            return nI.Av
                ? {
                      type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, S.jsxs)(Z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, S.jsx)(iJ.w, {
                                      type: "info",
                                      message: U.intl.string(U.t["5pkmHa"]),
                                      role: "static",
                                  }),
                                  (0, S.jsx)(su, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nI.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
                              text: U.intl.string(U.t.zk6Xbs),
                              variant: "secondary",
                              icon: iQ.j,
                              onClick: () => i0.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    ly = (0, E.zZ)(h.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Lz5KHI),
        buildLayout: () => [s4],
    }),
    lb = (0, E.zZ)(h.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+XZgmA"]),
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        buildLayout: () => [lo],
    }),
    lv = (0, E.zZ)(h.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => U.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, f.bG)(
                [i3.A, i1.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i3.A.hasDetectedGame &&
                    (0, i2.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s6],
    }),
    lj = (0, E.t_)(h.X.SYSTEM_PANEL, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        buildLayout: () => [lN, lC, ly, lb, lv, l_],
    }),
    lO = (0, E.i4)(h.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        icon: i$.F,
        buildLayout: () => [lj],
    });
var lL = n(831544),
    lR = n(922795),
    lD = n(212245),
    lP = n(329551),
    lG = n(285918),
    lM = n(312987),
    lU = n(952572),
    lV = n(382003);
let lk = (0, E.E2)(h.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.lZTUPs)],
        usePredicate: lU.A,
        Component: function () {
            let e = (0, lD.p)(),
                t = T.useRef(!1),
                n = (0, f.bG)([ss.Ay], () => ss.Ay.getVideoDeviceId()),
                [i, s] = T.useState((0, lP.i)(lx.default.getCurrentUser())),
                l = T.useRef(i);
            return (
                T.useEffect(
                    () => () => {
                        t.current && (0, lG._C)(l.current);
                    },
                    [],
                ),
                (0, S.jsx)(lV.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lM.gB)(n, { location: e.location }).catch(I.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lw = (0, E.zD)(h.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => U.intl.string(U.t["3Ppr1h"]),
        useSubtitle: () => U.intl.string(U.t.WNbX4O),
        useValue: M.bm.useSetting,
        setValue: (e) => {
            (M.bm.updateSetting(e), tc.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lF = n(625841),
    lB = n(74848),
    lz = n(204050);
let lY = (0, e_.D)(() => ({ previewEnabled: !1 })),
    lX = (0, E.E2)(h.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.FsQ3OR)],
        Component: function () {
            let e = (0, f.bG)([ss.Ay], () => ss.Ay.isVideoAvailable()),
                { id: t } = (0, lB.x5)(sq.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eY.Ay)();
            return (0, S.jsx)(lF.U, {
                label: U.intl.string(U.t.FsQ3OR),
                deviceType: sq.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lz.p)()
                    ? U.intl.format(U.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lY.setState({ previewEnabled: !1 }),
                                  window.open((0, lz.i)(t)),
                                  tc.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lH = n(745317),
    lW = n(9219);
let lK = (0, E.E2)(h.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [U.intl.string(U.t.JIf4v7)],
        Component: function () {
            let e = ss.Ay.getCameraComponent(),
                t = (0, f.bG)([ss.Ay], () => ss.Ay.getVideoDeviceId()),
                n = lY.useField("previewEnabled"),
                i = (0, f.bG)([ss.Ay], () => ss.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lY.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, S.jsx)("div", {
                      className: lW.T9,
                      children: (0, S.jsxs)("div", {
                          className: lW.Xi,
                          children: [
                              (0, S.jsxs)("div", {
                                  className: lW.UI,
                                  children: [
                                      (0, S.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, S.jsx)(lH.kE, {}),
                                  ],
                              }),
                              (0, S.jsx)(lH.eK, {}),
                          ],
                      }),
                  })
                : (0, S.jsx)("div", {
                      className: lW.T9,
                      children: (0, S.jsx)(sA.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, S.jsx)(v.$, {
                              variant: "primary",
                              text: U.intl.string(U.t.JIf4v7),
                              onClick: () => lY.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lZ = (0, E.zZ)(h.X.CAMERA_CATEGORY, {
        useTitle: () => U.intl.string(U.t.uje3P9),
        usePredicate: () => (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.VIDEO)),
        buildLayout: () => [lK, lw, lX, lk],
    });
var lq = n(827343);
let lQ = (0, E.zD)(h.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => U.intl.string(U.t.qFphsa),
        useSubtitle: () => U.intl.string(U.t.cQfwyY),
        usePredicate: function () {
            return (0, nI.j9)();
        },
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lq.default.setOpenH264Enabled(e),
                (0, n7.A)({
                    title: U.intl.string(U.t["9jf31O"]),
                    subtitle: U.intl.string(U.t["J2wg+X"]),
                    confirmText: U.intl.string(U.t.BddRzS),
                    onConfirm: () => nC.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    l$ = (0, E.zD)(h.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => U.intl.string(U.t["r6K+TL"]),
        useSubtitle: () => U.intl.string(U.t["xl9+I6"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getAecDump());
        },
        setValue: lq.default.setAecDump,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isAecDumpSupported());
        },
    });
var lJ = n(139033),
    l0 = n(862482),
    l1 = n(640238),
    l2 = n(825484),
    l3 = n(144009),
    l5 = n(487329),
    l4 = n(353835);
let l6 = (0, e_.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l8() {
    let e = await nC.A.fileManager.getLogPath();
    nC.A.fileManager.showItemInFolder(e);
}
function l7(e) {
    (0, n7.A)({
        title: U.intl.string(U.t["7UXEF2"]),
        subtitle: U.intl.string(U.t.IYPrRl),
        confirmText: U.intl.string(U.t.BddRzS),
        onConfirm: () => lq.default.setDebugLogging(e),
    });
}
async function l9(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await ss.Ay.getMediaEngine().writeAudioDebugState(),
            await l4.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l3.a)(I.Umv.RTC),
            (e = U.intl.string(U.t["fKBB8+"])),
            (t = U.intl.string(U.t.BvyxE7)),
            (0, lJ.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = U.intl.string(U.t.QZg0J7)),
            (t = i ?? U.intl.string(U.t.VzHcSm)),
            (n = (0, l5.B1)(l5.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = U.intl.formatToPlainString(U.t.ejOT95, { errorCode: n })),
            (0, sT.openModal)((n) =>
                (0, S.jsx)(l1.a, {
                    header: e,
                    confirmButtonColor: l0.$n.Colors.BRAND,
                    confirmText: U.intl.string(U.t.BddRzS),
                    ...n,
                    children: (0, S.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            ));
    } finally {
        n?.();
    }
}
async function re() {
    await l9({
        onUploadStart: () => l6.setState({ isUploading: !0 }),
        onUploadFinish: () => l6.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rt = (0, E.E2)(h.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [U.intl.string(U.t["726JHL"]), U.intl.string(U.t.EbwFfR), U.intl.string(U.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.DEBUG_LOGGING));
        return nI.Av && e && null != nC.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.getDebugLogging()),
            t = l6.useField("isUploading"),
            n = l6.useField("isDisabled"),
            i = T.useId();
        return (0, S.jsxs)("fieldset", {
            children: [
                (0, S.jsx)(sE.A, { tag: "legend", id: i, children: U.intl.string(U.t["FjN+et"]) }),
                (0, S.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, S.jsx)(t7.d, {
                            label: U.intl.string(U.t["726JHL"]),
                            description: U.intl.string(U.t["/7ak9Q"]),
                            checked: e,
                            onChange: l7,
                        }),
                        (0, S.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, S.jsxs)(l2.e, {
                                children: [
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: re,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.nuPtYi),
                                        onClick: l8,
                                        "aria-label": U.intl.string(U.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
var rn = n(233545),
    ri = n(412780);
function rs() {
    return (0, f.bG)([lx.default, ss.Ay], () => {
        let e = lx.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s8.Ay.releaseChannel || "development" === s8.Ay.releaseChannel,
            i = ss.Ay.supports(sq.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rl = (0, E.zD)(h.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.U4FgFK),
        useSubtitle: () => U.intl.string(U.t.Lm72RU),
        useValue: function () {
            return (0, f.bG)([ri.Ay], () => ri.Ay.shouldRecordNextConnection());
        },
        setValue: rn.Et,
        usePredicate: rs,
    }),
    rr = (0, E.Tf)(h.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.nJnOHO),
        useLabel: () => U.intl.string(U.t["3xjX0U"]),
        onClick: rn.YW,
        usePredicate: rs,
    });
var ra = n(926919),
    ro = n(111162),
    ru = n(855302);
let rd = (0, E.zD)(h.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => U.intl.string(U.t["0CEP6e"]),
        useSubtitle: () => U.intl.string(U.t["kBXuW+"]),
        useValue: function () {
            return (0, f.bG)([ro.default], () => ro.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ro.default.isStreamInfoOverlayEnabled;
            ((0, ru.A)("stream_info_overlay_enabled", e, t), (0, ra.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return M.Q_.useSetting();
        },
    }),
    rc = (0, E.bd)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t["/B4I8H"]) : U.intl.string(U.t.BTlsWH)),
        useCollapsedSubtitle: () => U.intl.string(U.t.la1Ys4),
        buildLayout: () => [rd, l$, rl, rr, rt],
    });
function rg(e, t, n) {
    (0, n7.A)({ title: e, subtitle: t, confirmText: U.intl.string(U.t.BddRzS), onConfirm: n });
}
let rm = (0, E.Tf)(h.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => U.intl.string(U.t.SXfv1v),
        useSubtitle: () => U.intl.string(U.t["buA5/q"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        onClick: function () {
            rg(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), lq.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rA = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [lQ, rc, rm],
    });
var rE = n(736056),
    rh = n(360729),
    rx = n(446243),
    rp = n(558076),
    rS = n(270103);
let rT = (0, E.zD)(h.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => U.intl.string(rS.default.qYzpsI),
        useSubtitle: () => U.intl.string(rS.default["+vMoL1"]),
        useValue: () => (0, f.bG)([rp.A], () => rp.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rx.Ft)(e),
    }),
    rf = (0, E.zZ)(h.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => U.intl.string(rS.default.wRLmM0),
        usePredicate: function () {
            let e = (0, f.yK)([sj.A], () => sj.A.getGuildIds()),
                { loaded: t, override: n } = (0, f.cf)([rE.A], () => ({
                    loaded: rE.A.getLoadedGuildExperiment(rh.vJ),
                    override: rE.A.getExperimentOverrideDescriptor(rh.vJ),
                }));
            return (0, T.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rh.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rT],
    });
var rI = n(347481),
    r_ = n(852712),
    rN = n(179172),
    rC = n(868162);
let ry = (0, E.zD)(h.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => U.intl.string(U.t.gF8HJo),
        useSubtitle: () => U.intl.string(U.t.cfrfyZ),
        useValue: function () {
            return (0, f.bG)([rC.A], () => !0 !== rC.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rN.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rb = (0, E.zD)(h.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => U.intl.string(U.t.cUMdH0),
        useSubtitle: () => U.intl.string(U.t["6EjbvA"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lq.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, f.bG)([ss.Ay, rI.A], () => {
                let e = ss.Ay.getInputDeviceId();
                return rI.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isAutomaticGainControlSupported() && ss.Ay.isInputProfileCustom());
        },
    }),
    rv = (0, E.sN)(h.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => U.intl.string(U.t.AlybXj),
        setValue: (e) =>
            lq.default.setAttenuation(
                e,
                ss.Ay.getAttenuateWhileSpeakingSelf(),
                ss.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => ss.Ay.getAttenuation(),
    }),
    rj = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => U.intl.string(U.t["9dHxRY"]),
        useValue: () => (0, f.bG)([ss.Ay], () => ss.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lq.default.setAttenuation(ss.Ay.getAttenuation(), e, ss.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rO = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([ss.Ay], () => ss.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lq.default.setAttenuation(ss.Ay.getAttenuation(), ss.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rL = (0, E.FW)(h.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.oSdBvW),
        useSubtitle: () => U.intl.string(U.t["0A/8Rt"]),
        usePredicate: () => (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.ATTENUATION)),
        buildLayout: () => [rv, rj, rO],
    }),
    rR = (0, E.zD)(h.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.DFPXIG),
        useSubtitle: () => U.intl.string(U.t["UyRX+C"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lq.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.showBypassSystemInputProcessing() && ss.Ay.isInputProfileCustom());
        },
    }),
    rD = (0, E.zD)(h.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => U.intl.string(U.t.jrWHD3),
        useSubtitle: () => U.intl.string(U.t.YCCMkJ),
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => !ex.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, ru.A)("switch_channel_warning_enabled", e, !ex.Ay.disableVoiceChannelChangeAlert),
                nX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rP = (0, E.zD)(h.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.BbESsg),
        useSubtitle: () => U.intl.string(U.t.LoOB1F),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => {
                let { vadUseKrisp: e } = ss.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = ss.Ay.getMode();
            lq.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, f.bG)(
                [ss.Ay],
                () => ss.Ay.getMode() !== I.TBI.VOICE_ACTIVITY || !ss.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isAdvancedVoiceActivitySupported() && ss.Ay.isInputProfileCustom());
        },
    }),
    rG = (0, E.Hn)(h.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => U.intl.string(U.t.wVBHr0),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rg(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => lq.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, f.cf)([ss.Ay], () => ({
                legacyAudioSubsystemSupported: ss.Ay.supports(sq.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: ss.Ay.supports(sq.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: ss.Ay.supports(sq.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return T.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sq.rB.STANDARD, value: sq.rB.STANDARD, label: U.intl.string(U.t.dqb2JZ) }]),
                    e && i.push({ id: sq.rB.LEGACY, value: sq.rB.LEGACY, label: U.intl.string(U.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sq.rB.EXPERIMENTAL, value: sq.rB.EXPERIMENTAL, label: U.intl.string(U.t.liQmtr) }),
                    n && i.push({ id: sq.rB.AUTOMATIC, value: sq.rB.AUTOMATIC, label: U.intl.string(U.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rM = (0, E.zD)(h.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => U.intl.string(U.t.uancuJ),
        useSubtitle: () => U.intl.string(U.t.I1Eoqq),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getQoS());
        },
        setValue: function (e) {
            lq.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.QOS));
        },
    }),
    rU = (0, E.zD)(h.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => U.intl.string(U.t["4rsOPQ"]),
        useSubtitle: () => U.intl.string(U.t.jtiiCw),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lq.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rV = (0, E.bd)(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.KHsSWK) : U.intl.string(U.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tN(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rb, rP, rR, ry, rU, rD, rL, rG, rM],
    }),
    rk = (0, E.zD)(h.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => U.intl.string(U.t.iWTwu6),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lq.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, f.bG)([ss.Ay, rI.A], () => {
                let e = ss.Ay.getInputDeviceId();
                return rI.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom());
        },
    });
var rw = n(205693),
    rF = n(451988),
    rB = n(475883),
    rz = n(9761);
let rY = (0, tq.Ld)();
function rX(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, S.jsx)("div", {
        role: "meter",
        className: ih()(rB.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, S.jsx)("div", { className: ih()(rB.Jx, rB.NU, { [rB.zY]: t && !r, [rB.r9]: r }) }),
    });
}
function rH(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([ss.Ay], () => ({
            threshold: ss.Ay.getModeOptions().threshold,
            autoThreshold: ss.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([ss.Ay], () => ss.Ay.getMode());
    return (0, S.jsx)("section", {
        className: ih()(rB.Mo, rB.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, S.jsx)(q.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lq.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n8.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n8.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rY,
            disabled: l,
            children: (0, S.jsxs)("div", {
                className: ih()(rB.NU, rB.TL, rB.Jx, rz.bar),
                children: [
                    (0, S.jsx)("div", { className: ih()(rB.GS, rB.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, S.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rW = (0, E.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [U.intl.string(U.t["sqUm+k"]), U.intl.string(U.t.I1Zuq0), U.intl.string(U.t.nuFtHH)],
    usePredicate: () => (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, f.cf)([ss.Ay], () => ({
                autoThreshold: ss.Ay.getModeOptions().autoThreshold,
                disabled: ss.Ay.getMode() !== sq.TB.VOICE_ACTIVITY,
            })),
            n = T.useCallback((e) => {
                let t = ss.Ay.getMode(),
                    { threshold: n } = ss.Ay.getModeOptions();
                lq.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = T.useState(-100),
                    [n, i] = T.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sq.ME.VOICE) === sq.ME.VOICE));
                }
                return (
                    T.useEffect(() => {
                        let e = new rF.Ep();
                        return (
                            e.start(1e3, () => {
                                (ss.Ay.getMediaEngine().on(rw.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (ss.Ay.getMediaEngine().removeListener(rw.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, f.bG)([ss.Ay], () => ss.Ay.isEnabled()),
            a = T.useMemo(
                () =>
                    !r &&
                    (0, S.jsx)("div", {
                        className: rB.B4,
                        children: (0, S.jsx)(iJ.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => lq.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = T.useMemo(() => (e ? U.intl.string(U.t.JsbzjA) : U.intl.string(U.t.MLmyMY)), [e]),
            u = T.useId(),
            d = T.useId();
        return i
            ? (0, S.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, S.jsx)(sE.A, { tag: "legend", id: u, children: U.intl.string(U.t.GByLar) }),
                      (0, S.jsx)(sE.A, { id: d, children: o }),
                      (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, S.jsx)(t7.d, {
                                  disabled: t,
                                  label: U.intl.string(U.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, S.jsx)(rX, {
                                        isSpeaking: l,
                                        className: rB.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rH, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, S.jsxs)(Z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, S.jsx)(t8.D, {
                          label: U.intl.string(U.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, S.jsx)(rX, {
                                        isSpeaking: l,
                                        className: rB.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rH, {
                                        volume: s,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      a,
                  ],
              });
    },
});
var rK = n(366010);
let rZ = n(993830),
    rq = n(413142),
    rQ = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r$() {
    let e = (0, f.bG)([nW.A], () => (0, rK.q)(nW.A.theme));
    return (0, S.jsx)("img", { src: e ? rZ : rq, width: 48, height: 32, alt: "" });
}
let rJ = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom() && ss.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (lq.default.setNoiseCancellation("KRISP" === e, rQ),
                    lq.default.setNoiseSuppression("STANDARD" === e, rQ));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, f.cf)([ss.Ay], () => ({
                noiseCancellation: ss.Ay.getNoiseCancellation(),
                noiseSuppression: ss.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: ss.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: ss.Ay.isNoiseCancellationSupported(),
            })),
            l = T.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: U.intl.string(U.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: U.intl.string(U.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: U.intl.string(U.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, i]),
            r = s
                ? U.intl.format(U.t["1q5aTp"], { helpArticle: eC.A.getArticleURL(I.MVz.NOISE_SUPPRESSION) })
                : U.intl.string(U.t.OWKjw5);
        return (0, S.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, S.jsx)(sc.l, {
                    label: U.intl.string(U.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, S.jsx)(r$, {}),
            ],
        });
    },
});
var r0 = n(934729),
    r1 = n(621380);
let r2 = !nI.Av;
function r3() {
    return (0, f.bG)([ss.Ay], () => ss.Ay.getMode() === sq.TB.PUSH_TO_TALK);
}
let r5 = (0, E.zD)(h.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nI.Av ? U.intl.string(U.t.tG4Np5) : U.intl.string(U.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.getMode());
        return T.useMemo(() => {
            if (!nI.Av && e === sq.TB.PUSH_TO_TALK)
                return U.intl.format(U.t["VHI4+Y"], { onDownloadClick: () => (0, r0._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.getActiveInputProfile() !== r1.m.STUDIO);
    },
    useValue: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.getMode() === sq.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sq.TB.PUSH_TO_TALK : sq.TB.VOICE_ACTIVITY),
            (i = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sq.TB.PUSH_TO_TALK &&
                r2 &&
                (0, sT.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, S.jsx)(e, {
                            title: U.intl.string(U.t.Kdt0Gb),
                            confirmText: U.intl.string(U.t["1WjMbC"]),
                            cancelText: U.intl.string(U.t.BddRzS),
                            onConfirm: () => (0, r0._)("PTT Limited Modal"),
                            body: U.intl.string(U.t.NIozvt),
                            ...t,
                        });
                }),
            lq.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
});
var r4 = n(484599);
let r6 = (0, E.E2)(h.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        usePredicate: r3,
        Component: function () {
            let e = (0, f.bG)([ss.Ay], () => {
                    let { shortcut: e } = ss.Ay.getModeOptions();
                    return e;
                }),
                t = U.intl.format(U.t.HVvn5T, {
                    onClick: () => (0, nm.openUserSettings)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: r4.e,
                    children: (0, S.jsx)(sx.A, {
                        defaultValue: e,
                        onChange: (e) => lq.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    r8 = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            lq.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: I.IjB,
        getInitialValue: function () {
            let { delay: e } = ss.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r3,
    });
var r7 = n(844981),
    r9 = n(943679);
function ae() {
    return (0, r7.Ay)("VoiceSettings");
}
let at = (0, E.zD)(h.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => U.intl.string(r9.default.LGDPhA),
        useSubtitle: function () {
            let e = ae();
            if ((0, r7.Xt)(e))
                return e === r7.L3.BLOCKED_MONO_OUTPUT
                    ? U.intl.string(r9.default.rOXfEw)
                    : U.intl.string(r9.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lq.default.setSpatialAudio(e, [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ae() !== r7.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, r7.Xt)(ae());
        },
    }),
    an = (0, E.Qx)(h.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => U.intl.string(U.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, r_._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH), U.intl.string(U.t.VZPR0R), U.intl.string(U.t.cjPbpT)],
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getActiveInputProfile() ?? r1.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lq.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, r_.d)({ location: "InputProfileCategory" });
            return [
                { value: r1.m.VOICE_ISOLATION, name: U.intl.string(U.t.cjPbpT), desc: U.intl.string(U.t.CzhvnE) },
                { value: r1.m.STUDIO, name: U.intl.string(U.t.VZPR0R), desc: U.intl.string(U.t.ZaJksS) },
                { value: r1.m.CUSTOM, name: U.intl.string(U.t["N/PQjv"]), desc: U.intl.string(U.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ai = (0, E.zZ)(h.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, f.bG)([rI.A, ss.Ay], () => {
                let e = ss.Ay.getInputDeviceId();
                return (
                    (rI.A.hasEchoCancellation(e) || rI.A.hasNoiseSuppression(e) || rI.A.hasAutomaticGainControl(e)) &&
                    ss.Ay.isInputProfileCustom()
                );
            });
            return T.useMemo(() => {
                if (e) return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [an, rW, rJ, rk, at, r5, r6, r8, rV],
    });
var as = n(403581),
    al = n(512950),
    ar = n(983851),
    aa = n(687021),
    ao = n(128450),
    au = n(796774),
    ad = n(209932),
    ac = n(813564),
    ag = n(984813),
    am = n(922016),
    aA = n(305866),
    aE = n(22231),
    ah = n(158045),
    ax = n(792348),
    ap = n(674168),
    aS = n(511558),
    aT = n(817232),
    af = n(647451);
function aI(e) {
    let { onSelect: t } = e,
        [n, i] = T.useState(!1),
        s = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        l = ah.Ay.canUseCustomCallSounds(s),
        r = T.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, S.jsx)(am.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, S.jsx)(aA.l, {
                children: (0, S.jsx)(aS.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, S.jsx)(ap.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, S.jsx)(aT.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, S.jsx)(aE.PencilIcon, { size: "md", color: "currentColor", className: af.Wo }),
            }),
    });
}
function a_(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ax.A)(t, null),
        i =
            0 === (0, ac.wH)()
                ? U.intl.string(U.t.OASXjt)
                : U.intl.formatToPlainString(U.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, S.jsx)(aT.dT, {
        onClick: n,
        text: i,
        children: (0, S.jsx)(ar.H, { size: "md", color: "currentColor", className: af.wg }),
    });
}
function aN(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, S.jsxs)("div", {
        className: af.D6,
        children: [
            (0, S.jsxs)("div", {
                className: af.kL,
                children: [
                    a && (0, S.jsx)(tU.A, { emojiId: l, emojiName: r, className: af.Zg }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: af.dj,
                        children:
                            null == t
                                ? U.intl.string(U.t.PoWNfe)
                                : n
                                  ? U.intl.format(U.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, S.jsx)(Q.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, S.jsx)(a_, { sound: t })
                        : (0, S.jsx)(ar.H, { size: "md", color: "currentColor", className: af.Gk }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: af.kL,
                children: [
                    (0, S.jsx)(aI, { onSelect: i }),
                    s &&
                        !n &&
                        (0, S.jsx)(aT.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, S.jsx)(sm.TrashIcon, {
                                size: "md",
                                color: n8.A.unsafe_rawColors.RED_400.css,
                                className: af.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aC = n(617617);
n(980504);
var ay = n(806050);
function ab(e) {
    return (0, f.bG)([ad.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ad.A.getSound("0" === t ? "0" : t, n);
    });
}
function av(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([aC.A], () => aC.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ab(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, S.jsxs)("div", {
        className: ay.Io,
        children: [
            r
                ? (0, S.jsx)(tU.A, { emojiId: s, emojiName: l, className: ay.nW })
                : (0, S.jsx)(ar.H, { size: "md", color: "currentColor", className: ay.nW }),
            (0, S.jsx)(Q.E, { className: ay.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aj = (0, E.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eY.Ay)(),
            [t, n] = T.useState("0"),
            i = (0, ag.mz)(t),
            s = ab(i),
            l = i?.type === ag.PP.GLOBAL,
            r = (0, f.bG)([ad.A], () => ad.A.hasFetchedAllSounds()) && null != i && null == s;
        (T.useEffect(() => {
            r && (0, ac.ND)({ location: e });
        }, [r, e]),
            T.useEffect(() => {
                (0, au.E7)();
            }, []));
        let a = T.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, S.jsx)(av, { guildId: e.value }) : null;
        }, []);
        return (0, S.jsxs)(n9.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, S.jsx)(aa.A, {
                    guildId: t,
                    className: ay.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, S.jsxs)(ao.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, S.jsx)(as.t, { size: "md", color: "currentColor", className: ay.ax }),
                    }),
                    children: [
                        (0, S.jsx)(aN, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ac.Dv)(t, e) : (0, ac.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, S.jsx)(al.p, {
                                className: ay.lm,
                                messageType: al.Y.WARNING,
                                children: U.intl.string(U.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aO = n(824744);
let aL = (0, E.sN)(h.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => U.intl.string(U.t.kbFsAD),
    useSubtitle: () => U.intl.format(U.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aO.w)(e);
        (0, au.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ac.wH)();
        return (0, aO.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aR = n(864145);
let aD = (0, E.sN)(h.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t["2JbvKw"]),
        useSubtitle: () => U.intl.string(U.t.INenzY),
        setValue: function (e) {
            let t = (0, aO.w)(e);
            M.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = M.HO.getSetting();
            return (0, aO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aR.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aP = (0, E.zZ)(h.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ABjMWI),
        buildLayout: () => [aL, aD, aj],
    });
var aG = n(803224),
    aM = n(552122);
let aU = (0, E.E2)(h.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [U.intl.string(U.t.fgSHf8)],
        usePredicate: () => null != aM.A.useHolidaySoundpack(),
        Component: () =>
            (0, S.jsx)(Q.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.Eup6Wv, {
                    onClick: () => (0, nm.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aV = (0, E.AK)(h.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.eyGEE4),
        useSearchTerms: () => [U.intl.string(U.t.eyGEE4)],
        destinationKey: h.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    ak = (0, E.gN)(h.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aV] });
var aw = n(264686);
let aF = (0, e_.D)(() => ({ currentPlayingSound: null }));
function aB() {
    let e = aF.getField("currentPlayingSound");
    (e?.stop(), aF.setState({ currentPlayingSound: null }));
}
function az(e) {
    let t = aF.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ir.Ak)(e);
    aF.setState({ currentPlayingSound: n });
}
function aY(e) {
    return (0, E.zD)(`${h.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => az(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, f.bG)([aG.A], () => aG.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aG.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aw.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aX = [
        { useTitle: () => U.intl.string(U.t.hK51Yg), sound: "deafen" },
        { useTitle: () => U.intl.string(U.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => U.intl.string(U.t.w4m945), sound: "mute" },
        { useTitle: () => U.intl.string(U.t.YqAjXy), sound: "unmute" },
        { useTitle: () => U.intl.string(U.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => U.intl.string(U.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => U.intl.string(U.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => U.intl.string(U.t.x98vQq),
            useSearchTerms: () => [U.intl.string(U.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => U.intl.string(U.t["1HjRqC"]),
            useSearchTerms: () => [U.intl.string(U.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => U.intl.string(U.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => U.intl.string(U.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => U.intl.string(U.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => U.intl.string(U.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => U.intl.string(U.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => U.intl.string(U.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => U.intl.string(U.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => U.intl.string(U.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => U.intl.string(U.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => U.intl.string(U.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => U.intl.string(U.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => U.intl.string(U.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => U.intl.string(U.t.CP3DC3), sound: "reconnect" },
    ],
    aH = (0, E.D1)(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? U.intl.formatToPlainString(U.t["0JYT98"], { count: t })
                : U.intl.formatToPlainString(U.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tN(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aB();
            };
        },
        buildLayout: () => aX.map((e) => aY(e)),
    }),
    aW = (0, E.zZ)(h.X.SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds());
            return T.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: U.intl.format(U.t.fRvixS, {
                            onClick: () => (0, nm.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aH, aU, ak],
    }),
    aK = (0, E.zD)(h.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.e3Zz3F),
        useSubtitle: () => U.intl.string(U.t.RztTjP),
        useValue: function () {
            return !M.uh.useSetting();
        },
        setValue: function (e) {
            ((0, ru.A)("stream_previews_disabled", !e, M.uh.getSetting(), [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                M.uh.updateSetting(!e));
        },
    }),
    aZ = (0, E.zD)(h.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => U.intl.string(U.t.GmWk2E),
        useSearchTerms: () => [U.intl.string(U.t["Fj/xn1"])],
        useSubtitle: () => U.intl.string(U.t["Fj/xn1"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getVideoHook());
        },
        setValue: lq.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supportsVideoHook());
        },
    }),
    aq = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getExperimentalSoundshare());
        },
        setValue: lq.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => {
                let e = ss.Ay.supportsExperimentalSoundshare(),
                    t = ss.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aQ = (0, E.zD)(h.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => U.intl.string(U.t["/jwMtn"]),
        useSubtitle: () => U.intl.string(U.t.zlA23F),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lq.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return ss.Ay.supports(sq.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a$ = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lq.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: ss.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, f.bG)([ss.Ay], () => ss.Ay.getSidechainCompression());
            return ss.Ay.supports(sq.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aJ = (0, E.zD)(h.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t.lt8rRx),
        useSubtitle: () => U.intl.string(U.t.ie1mgY),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nI.cX)() && e
                ? (0, n7.A)({
                      title: U.intl.string(U.t["9jf31O"]),
                      subtitle: U.intl.string(U.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lq.default.setUseSystemScreensharePicker(e), nC.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : lq.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supportsSystemScreensharePicker() && (0, nI.cX)());
        },
    }),
    a0 = (0, E.bd)(h.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t.qrMyvm) : U.intl.string(U.t.LEtTNl)),
        useCollapsedSubtitle: () => tN(h.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aQ, a$, aJ, aq, aZ],
    }),
    a1 = (0, E.zZ)(h.X.STREAMING_CATEGORY, { useTitle: () => U.intl.string(U.t.KDdjou), buildLayout: () => [aK, a0] });
var a2 = n(106713);
let a3 = (0, E.E2)(h.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a2.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, S.jsx)(lF.U, {
                label: U.intl.string(U.t.UTM8VP),
                deviceType: sq.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a5 = (0, E.E2)(h.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a2.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, S.jsx)(lF.U, {
                label: U.intl.string(U.t.xuYQ0n),
                deviceType: sq.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a4 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a3, a5] }),
    a6 = (0, E.sN)(h.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = ss.Ay.getInputVolume();
            return (0, aO.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aO.w)(e);
            lq.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    a8 = (0, E.sN)(h.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = ss.Ay.getOutputVolume();
            return (0, aO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aO.w)(e);
            lq.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a7 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a6, a8] });
var a9 = n(702841),
    oe = n(152567),
    ot = n(804037);
let on = `${eC.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oi = (0, E.E2)(h.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH)],
        usePredicate: function () {
            return (0, a9.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.LOOPBACK));
        },
        Component: function () {
            return (0, a9.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.LOOPBACK))
                ? (0, S.jsx)(oe.A, {
                      size: "md",
                      notchBackground: oe.V.GRAY,
                      captionVoice: U.intl.string(U.t.bp3JOV),
                      captionNoVoice: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t.bgn75v),
                              }),
                              U.intl.string(U.t["MA+OZh"]),
                              (0, S.jsx)(ng.Anchor, {
                                  className: ot.X,
                                  href: eC.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: U.intl.string(U.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: U.intl.format(U.t["V+B3FH"], { guideURL: on }),
                      buttonTest: U.intl.string(U.t.gyljWE),
                      buttonStop: U.intl.string(U.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    os = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function ol(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, S.jsxs)(Z.B, {
        children: [
            n && (0, S.jsx)(su, { sourcePage: "voice" }),
            t && (0, S.jsx)(s7.A, { look: s7.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
        ],
    });
}
let or = (0, E.zZ)(h.X.VOICE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.K3lovD),
        useSearchTerms: () => [
            U.intl.string(U.t.hHMYbb),
            U.intl.string(U.t.nuFtHH),
            U.intl.string(U.t.dl18zb),
            U.intl.string(U.t["3182VD"]),
            U.intl.string(U.t["DGq/PR"]),
            U.intl.string(U.t.eATD2B),
            U.intl.string(U.t.Rtsr6w),
            U.intl.string(U.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = so("voice"),
                t = (0, lB.x5)(sq.oh.AUDIO_INPUT),
                n = (0, lB.x5)(sq.oh.AUDIO_OUTPUT),
                i = T.useMemo(() => {
                    let e = os.some((e) => t?.hardwareId?.startsWith(e)),
                        i = os.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return T.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, S.jsx)(ol, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a4, a7, oi],
    }),
    oa = (0, E.t_)(h.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        buildLayout: () => [or, ai, lZ, a1, aW, aP, rf, rA],
    }),
    oo = (0, E.i4)(h.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        usePredicate: () => ss.Ay.isSupported(),
        icon: lL.MicrophoneIcon,
        useMenu: lR.A,
        buildLayout: () => [oa],
    }),
    ou = (0, E.WI)(h.X.APP_SECTION, {
        useTitle: () => U.intl.string(U.t.gcyH1J),
        buildLayout: () => [oo, n1, tt, iq, lO, n4],
    });
var od = n(360669),
    oc = n(974544),
    og = n(423764),
    om = n(289873),
    oA = n(132500),
    oE = n(465323),
    oh = n(37766),
    ox = n(194261),
    op = n(391048),
    oS = n(277984),
    oT = n(99696),
    of = n(202613),
    oI = n(615405),
    o_ = n(83617),
    oN = n(935208),
    oC = n(607399),
    oy = n(993077),
    ob = n(150934),
    ov = n(256006),
    oj = n(198970),
    oO = n(71532);
let oL = /[^0-9/]/g,
    oR = /[^0-9]/g;
class oD extends T.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        ((this._inputRef = e), null != t && t(e));
    };
    handleChange = (e, t) => {
        let n,
            i,
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(oL, "").split("/"))[0]),
                (s = n[1]),
                (l = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                l.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != s && "" !== s)) && l.push("/"),
                null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)),
                l.push(s),
                l.join("")),
            d = o.selectionStart;
        (u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(oR, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, S.jsx)(sf.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oP = n(832208),
    oG = n(782328);
let oM = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tq.Ld)(),
                        title: () => U.intl.string(U.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => U.intl.string(U.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oG.ep,
                        renderInput: (e) => (0, S.jsx)(oD, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oU = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = T.useState(!1),
            [a, o] = T.useState(null),
            [u, d] = T.useState(i);
        return (
            T.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, S.jsx)(oP.A, {
                className: n,
                form: oM,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oO.So)(e) ? o(U.intl.string(U.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oV = n(219887),
    ok = n(292856);
let ow = "isDefault";
class oF extends T.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: n } = e,
            i = t.billingAddress;
        this.state = {
            billingAddress: {
                name: i.name ?? "",
                line1: i.line1 ?? "",
                line2: i.line2 ?? "",
                country: i.country ?? "",
                state: i.state ?? "",
                city: i.city ?? "",
                postalCode: i.postalCode ?? "",
            },
            expiresMonth: t instanceof of.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof of.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        tl.h.wait(() => {
            ((0, oS.ey)(), (0, oS.tc)());
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(im.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: n, expiresYear: i } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: n,
                expiresYear: i,
                isDefault: t,
            });
        }
    };
    handleCancel = () => {
        this.props.onCancel();
    };
    handleDelete = () => {
        let { onDelete: e, paymentSource: t } = this.props;
        e(t.id);
    };
    handleAddressUpdate = (e, t, n) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: n },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: n } = e;
        if ((this.setState({ expirationValid: t }), null == n || "" === n)) return;
        let [i, s] = n.split("/");
        (this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear"));
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, S.jsx)("div", {
                      className: ok.zc,
                      children: (0, S.jsx)(iJ.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, S.jsx)("div", {
                  className: ok.zc,
                  children: (0, S.jsx)(iJ.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ov.g)(n);
        return (0, S.jsxs)("div", {
            className: ok.yV,
            children: [
                (0, S.jsx)(Q.E, {
                    className: ok.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, S.jsx)(oj.Ay, {
                    ...e,
                    mode: oj.Ay.Modes.EDIT,
                    layout: i,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let n = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, S.jsxs)("div", {
            className: ok.yV,
            children: [
                (0, S.jsx)(Q.E, { className: ok.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, S.jsx)(oU, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: i, expirationValid: s } = this.state;
        return (0, S.jsx)("div", {
            className: ok.AU,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, S.jsx)(l2.e, {
                        children: (0, S.jsxs)("div", {
                            className: ok.lH,
                            children: [
                                n
                                    ? (0, S.jsx)(sA.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, S.jsx)("div", { "aria-hidden": !0, className: ok.dm }),
                                      })
                                    : null,
                                (0, S.jsx)(v.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oC.Fr ? "sm" : "md",
                                    text: oC.Fr ? U.intl.string(U.t.oyYWHE) : U.intl.string(U.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, S.jsxs)(l2.e, {
                        children: [
                            (0, S.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oC.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, S.jsx)(v.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oC.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof of.SJ;
        return (0, S.jsx)(oy.Z, {
            editable: !0,
            className: ih()(ok.Nr, i),
            children: (0, S.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, S.jsxs)("div", {
                        className: ok.__invalid_paymentSection,
                        children: [
                            (0, S.jsx)(oV.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, S.jsx)("div", { className: ok.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, S.jsx)("div", {
                                className: ok.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, S.jsx)("div", {
                        className: ok.D5,
                        children: (0, S.jsx)(ob.S, {
                            value: ow,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, ow),
                            label: U.intl.string(U.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, S.jsx)(sd.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oB = f.Ay.connectStores([oI.A], () => ({ updateError: oI.A.editSourceError, removeError: oI.A.removeSourceError }))(
    oF,
);
var oz = n(986485),
    oY = n(849405),
    oX = n(329693);
function oH() {
    (0, oT.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oA.A)() });
}
class oW extends T.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            hideDivider: i,
            isForSubscription: s,
            locale: l,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return n
            ? (0, S.jsx)(oB, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: l,
                  isForSubscription: s,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      i ? null : (0, S.jsx)(sd.c, { className: oX.__invalid_sourceDivider }),
                      (0, S.jsxs)("div", {
                          className: oX.Yb,
                          children: [
                              (0, S.jsx)(oV.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, S.jsx)(v.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: U.intl.string(U.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let oK = T.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = T.useState(null),
        o = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, f.bG)([oI.A], () => oI.A.ipCountryCode),
        d = T.useMemo(() => (0, oE.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        T.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oS.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, S.jsxs)(S.Fragment, {
            children: [
                n ? null : (0, S.jsx)(sd.c, { className: oX.__invalid_sourceDivider }),
                (0, S.jsxs)("div", {
                    className: oX.Yb,
                    children: [
                        void 0 !== t
                            ? (0, S.jsx)(oV.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, S.jsxs)(sC.A, {
                                  align: sC.A.Align.CENTER,
                                  children: [
                                      (0, S.jsx)(oh._, { size: "lg" }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: oY.Wi,
                                          children: U.intl.string(oz.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, S.jsxs)("div", {
                            className: oX.zy,
                            children: [
                                (0, S.jsx)("div", {
                                    className: oX.Tq,
                                    children:
                                        null == r
                                            ? (0, S.jsx)(om.y, { type: om.y.Type.SPINNING_CIRCLE })
                                            : (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oE.$g)(e ?? 0, n, s, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, S.jsx)(v.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: U.intl.string(oz.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oZ extends T.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oS.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oS.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oS.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, o_.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sT.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, S.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, op.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, S.jsxs)("div", {
            className: oX.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, S.jsxs)("div", {
                          className: oX.z8,
                          children: [
                              (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oX.Sv,
                                  children: U.intl.string(U.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, S.jsx)(v.$, { onClick: this.handleAddPaymentMethod, text: U.intl.string(U.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: i,
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = W()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oN.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof of.LQ)),
            c = u.filter((e) => e instanceof of.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, S.jsx)(
                    oW,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: l,
                        isEditing: g === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, S.jsx)(
                              oK,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oH,
                              },
                              e.id,
                          ),
                      )
                    : (0, S.jsx)(oK, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: oH,
                      })),
            (0, S.jsxs)(S.Fragment, {
                children: [
                    t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, S.jsx)(ox.LockIcon, { size: "sm", className: oX.hz }),
                                          " ",
                                          U.intl.string(U.t.W26xGQ),
                                      ],
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, S.jsx)(sd.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oq = n(459357),
    oQ = n(295405),
    o$ = n(166403),
    oJ = n(773669),
    o0 = n(943009);
function o1() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, og.Gw)(e.country) };
}
let o2 = (0, E.E2)(h.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, f.bG)([oI.A], () => oI.A.isSyncing),
                i = (0, f.bG)([oQ.A], () => oQ.A.paymentSources),
                s = (0, f.bG)([oQ.A], () => oQ.A.defaultPaymentSourceId),
                l = (0, f.bG)([oJ.default], () => oJ.default.locale),
                r = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
                a = (0, f.bG)([oI.A], () => oI.A.isRemovingPaymentSource),
                o = (0, f.bG)([oI.A], () => oI.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oq.c)({ location: "UserSettingsBilling" });
            return (T.useEffect(() => {
                (oS.$o(), oS.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, S.jsx)("div", { className: o0.o, children: (0, S.jsx)(om.y, {}) })
                : (0, S.jsx)(oZ, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== I.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.W26xGQ), U.intl.string(U.t["3pIjBH"])],
    }),
    o3 = (0, E.zZ)(h.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.W26xGQ),
        useSubtitle: () => {
            let e = o1();
            return null != e ? U.intl.format(U.t.e2t1G5, { country: e.countryName }) : U.intl.string(U.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == o1()
                ? null
                : {
                      type: p.p3.INFO_POPOVER,
                      ariaLabel: U.intl.string(U.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: U.intl.string(U.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: U.intl.string(U.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      (window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e());
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [o2],
    });
var o5 = n(662490),
    o4 = n(945810);
let o6 = (0, o4.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o8 = n(837381),
    o7 = n(689175),
    o9 = n(928039),
    ue = n(39190),
    ut = n(32731),
    un = n(380098),
    ui =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    us =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    ul =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    ur =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    ua =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uo(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? of.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? ut.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new un.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uu = { receipts: [], cursor: null };
var ud = n(34188),
    uc = n(597770),
    ug = n(206828),
    um = n(576243),
    uA = n(147925),
    uE = n(707554),
    uh = n(975807),
    ux = n(957565),
    up = n(458790),
    uS = n(39209),
    uT = n(510022),
    uf = n(427262),
    uI = n(106799),
    u_ = n(580630),
    uN = n(818348),
    uC = n(460103);
let uy = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function ub(e, t) {
    return t === uN.Yr.DISCORD_ORB
        ? (0, S.jsxs)("span", {
              className: uC.db,
              children: [
                  (0, S.jsx)(uI.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, u_.$g)(e, t);
}
function uv(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, eY.Ay)(tF.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === ua.REDEEMED
        ? null
        : n.status === ua.REFUNDED
          ? (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(uE.H, { className: uC.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, S.jsx)("div", {
                        className: uC.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uf.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === ua.CLAIMED || n.status === ua.UNCLAIMED
            ? (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uE.H, { className: uC.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uC.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uf.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, S.jsx)("div", {
                              className: uC.TP,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t["jcSP+g"]),
                                  onClick: () => (0, nm.openUserSettings)(h.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uE.H, { className: uC.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uC.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, S.jsx)("div", {
                          className: uC.TP,
                          children: s
                              ? (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, uh.A)(uy(i)),
                                })
                              : (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (tc.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: l,
                                            }),
                                            (0, uT.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uj = n(933832),
    uO = n(789645);
function uL(e) {
    let { refund: t, locale: n } = e,
        i = uy(n),
        s = t.eligible ? uj.CheckmarkLargeIcon : uO.P;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(uE.H, { className: uC.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, S.jsxs)("div", {
                className: uC.iL,
                children: [
                    (0, S.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === ur.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case ur.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case ur.GIFT:
                                    return e.eligible
                                        ? U.intl.format(U.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? U.intl.format(U.t["1LDI4J"], {
                                              dateLimit: n,
                                              playtimeLimit: 2,
                                              supportURL: t,
                                          })
                                        : U.intl.formatToPlainString(U.t.s4Kk0C, { dateLimit: n, playtimeLimit: 2 });
                            }
                        })(t, i),
                    }),
                    t.policy !== ur.IN_GAME_ITEM &&
                        (0, S.jsxs)("div", {
                            className: uC.My,
                            children: [
                                (0, S.jsx)("div", {
                                    className: uC.Kf,
                                    children:
                                        null != t.window &&
                                        (0, S.jsxs)("div", {
                                            className: uC._Z,
                                            children: [
                                                (0, S.jsx)(uE.H, {
                                                    className: uC.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, S.jsxs)("div", {
                                                    className: uC.z9,
                                                    children: [
                                                        (0, S.jsx)(s, { className: uC.xb, color: "currentColor" }),
                                                        (0, S.jsx)("div", {
                                                            children: U.intl.formatToPlainString(U.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(ng.Anchor, { href: i, children: U.intl.string(U.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var uR = n(679897);
function uD(e) {
    let { description: t, cost: n } = e;
    return (0, S.jsx)("li", {
        className: uC.mg,
        children: (0, S.jsxs)(sC.A, {
            justify: sC.A.Justify.BETWEEN,
            children: [(0, S.jsx)("div", { children: t }), (0, S.jsx)("div", { children: n })],
        }),
    });
}
function uP(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    return (0, S.jsx)(sA.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, S.jsx)(ie.D, {
            onMouseEnter: () => {
                s && l(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, ux.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, S.jsx)("div", { className: uC.l9, children: t }),
        }),
    });
}
function uG(e) {
    let { paymentId: t } = e;
    return (0, S.jsx)("li", {
        className: uC.mg,
        children: (0, S.jsxs)("div", {
            className: uC.bx,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, S.jsx)(uP, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uM(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === ul.REVERSED;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ih()(uR.XM, n ? uR.aB : uR.EN),
        children: [
            t === ul.REVERSED && U.intl.string(U.t.YQv9Li),
            t === ul.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === ul.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uU(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uN.kM.APPLE_PARTNER ? new of.Pw({}) : null);
    return null == i
        ? null
        : (0, S.jsx)(oV.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uC.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uV(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, S.jsx)(uU, { payment: t.payments[0], locale: n })
            : null
        : (0, S.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, S.jsxs)(
                      sC.A,
                      {
                          justify: sC.A.Justify.BETWEEN,
                          align: sC.A.Align.CENTER,
                          children: [
                              (0, S.jsx)(uU, { payment: e, locale: n }),
                              (0, S.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, S.jsx)(uM, { tag: e.tag }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: ub(e.amount, t.currency),
                                      }),
                                  ],
                              }),
                          ],
                      },
                      e.id,
                  ),
              ),
          });
}
function uk(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)("div", { className: uC.ts }),
            t.delisted
                ? (0, S.jsx)(al.p, {
                      messageType: al.Y.WARNING,
                      action: (0, S.jsx)(v.$, {
                          variant: "overlay-secondary",
                          text: U.intl.string(U.t.zoztQA),
                          onClick: () => (0, uh.A)(uy(n)),
                      }),
                      children: U.intl.string(U.t["3AvulN"]),
                  })
                : null != t.guild_id && (0, S.jsx)(up.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uw(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, S.jsx)(ie.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, S.jsxs)("div", {
            className: uC.WI,
            children: [
                (0, S.jsx)(uE.H, { className: uC.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, S.jsxs)("div", {
                    className: ih()(uC.iL, uC.W),
                    children: [
                        (0, S.jsx)(uV, { receipt: t, locale: n }),
                        (0, S.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uD, { description: t.description, cost: ub(t.subtotal, s) }),
                                            (0, S.jsx)(uD, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: ub(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uD, { description: U.intl.string(U.t.txajQG), cost: ub(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uD, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: ub(-t.amount_refunded, s),
                                            }),
                                            (0, S.jsx)(uD, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: ub(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uG, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, S.jsx)(up.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, S.jsx)(uk, { guildProduct: l, locale: n }),
                (0, S.jsx)(uS.A, { payment: t.receipt_payment }),
                null != r && (0, S.jsx)(uv, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, S.jsx)(uL, { refund: a, locale: n }),
            ],
        }),
    });
}
function uF(e) {
    let { withGradient: t } = e;
    return t
        ? (0, S.jsx)(um.A, { size: 24, iconSize: 16, color: n8.A.unsafe_rawColors.NEUTRAL_1, className: uC.Sy })
        : (0, S.jsx)("div", {
              className: ih()(uC.Sy, uC.uX, uC.Xr),
              children: (0, S.jsx)(as.t, { size: "custom", width: 16, height: 16, color: n8.A.colors.ICON_DEFAULT }),
          });
}
function uB(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sj.A], () => sj.A.getGuild(n?.guildId));
    switch (t.icon) {
        case us.NITRO:
            return (0, S.jsx)(uF, { withGradient: !0 });
        case us.NITRO_BASIC:
            return (0, S.jsx)(uF, { withGradient: !1 });
        case us.SHOP:
            return (0, S.jsx)(ud.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uC.sV });
        case us.APPLICATION:
        case us.PRODUCT:
            return (0, S.jsx)(si.A, {
                className: uC.Sy,
                guildClassName: uC.zA,
                game: t.icon === us.APPLICATION ? n : void 0,
                guild: i,
                size: si.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function uz(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === ui.PAID)
        switch (i.status) {
            case ua.CLAIMED:
                return (0, S.jsx)("span", { className: uC.gD, children: U.intl.string(U.t.lIsIFo) });
            case ua.UNCLAIMED:
                return (0, S.jsx)("span", { className: uC.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case ua.REDEEMED:
                return (0, S.jsx)("span", { className: uC.gD, children: U.intl.string(U.t.Osji1u) });
            case ua.FAILED:
                return (0, S.jsx)("span", { className: uC.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, S.jsx)("span", { className: uC.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, S.jsx)("span", { className: uC.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case ui.PENDING:
            return (0, S.jsx)("span", { className: uC.Xg, children: U.intl.string(U.t.y7F0Re) });
        case ui.FAILED:
            return (0, S.jsx)("span", { className: uC.ob, children: U.intl.string(U.t.Yo4ru6) });
        case ui.REVERSED:
            return (0, S.jsx)("span", { className: uC.ob, children: U.intl.string(U.t.YQv9Li) });
        case ui.CANCELED:
            return (0, S.jsx)("span", { className: uC.ob, children: U.intl.string(U.t.ttkBhy) });
        case ui.PARTIALLY_REFUNDED:
            return (0, S.jsx)("span", { className: uC.gD, children: U.intl.string(U.t.lYbZzz) });
        case ui.REFUNDED:
            return (0, S.jsx)("span", { className: uC.gD, children: U.intl.string(U.t.ZBb6NK) });
        case ui.PAID:
            return null;
    }
}
function uY(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, ug.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, S.jsx)(o8.tG, {
        id: t.id,
        children: (e) =>
            (0, S.jsxs)(ie.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: ih()(uC.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, S.jsxs)(sC.A, {
                        className: uC.J7,
                        align: sC.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uC.p6,
                                children: (0, iS.i$)(ip()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, S.jsxs)("div", {
                                className: uC.h_,
                                children: [
                                    (0, S.jsx)(uB, { receipt: t }),
                                    (0, S.jsx)("div", {
                                        children:
                                            null != t.subscription
                                                ? ((function (e, t) {
                                                      let { paymentSource: n } = e.receipt_payment,
                                                          i = null != n && I.AD1.has(n.type);
                                                      switch (t.type) {
                                                          case I.rzx.PREMIUM:
                                                              return t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t, quantity: n } = e;
                                                                      return (0, ah.xq)(t)
                                                                          ? ah.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ah.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return U.intl.formatToPlainString(
                                                                  t.interval === t0.WT.YEAR
                                                                      ? U.t.V6UFQM
                                                                      : U.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case I.rzx.APPLICATION:
                                                              return e.sku?.application != null
                                                                  ? U.intl.formatToPlainString(U.t["0wL/VI"], {
                                                                        tier: e.sku.name,
                                                                    })
                                                                  : U.intl.string(U.t["9czSYu"]);
                                                          default:
                                                              return null;
                                                      }
                                                  })(t, t.subscription) ?? t.description)
                                                : t.guild_product?.delisted === !0
                                                  ? U.intl.string(U.t.O7uLmw)
                                                  : t.description,
                                    }),
                                    t.is_gift
                                        ? (0, S.jsx)(sA.m, {
                                              text: U.intl.string(U.t.QddTpm),
                                              children: (0, S.jsx)(uc.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uC.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, S.jsxs)("div", {
                                className: uC.vj,
                                children: [
                                    (0, S.jsx)(uz, { receipt: t, hasLinkedToApplication: r }),
                                    (0, S.jsx)("span", { className: uC.q9, children: ub(t.net, t.currency) }),
                                ],
                            }),
                            (0, S.jsx)(uA.A, {
                                className: uC.fT,
                                direction: s ? uA.A.Directions.UP : uA.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, S.jsx)(uw, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var uX = n(949779);
function uH(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        s = T.useRef(null),
        [l, r] = T.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * l, (l + 1) * 10);
    T.useEffect(() => {
        s.current?.scrollTo({ to: 0 });
    }, [l]);
    let u = T.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, o9.A)("billing-history", s);
    return (0, S.jsx)(o8.hD, {
        navigator: d,
        children: (0, S.jsx)(o8.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, S.jsx)(ue.A, {
                    className: uX.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, S.jsx)(o7.Ch, {
                        className: uX.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, S.jsx)(uY, { className: ih()(uX.Nj, uX.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function uW(e) {
    let { subscription: t } = e;
    return (
        tx()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, S.jsxs)(oy.Z, {
            className: uX.K1,
            children: [
                (0, S.jsx)("div", {
                    className: uX.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uN.qm[t.paymentGateway] }),
                }),
                (0, S.jsx)("div", {
                    className: uX.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uN.qm[t.paymentGateway],
                        billingHistoryLink: (0, ah.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function uK(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = T.useState(uu),
                [n, i] = T.useState(!1),
                [s, l] = T.useState(!1),
                [r, a] = T.useState(!1),
                o = T.useCallback((e, n) => {
                    ts.Bo.get({
                        url: I.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                s = i.receipts.map(uo);
                            t((t) => ({ receipts: null == e ? s : [...t.receipts, ...s], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && l(!0);
                        })
                        .finally(() => {
                            (i(!0), a(!1));
                        });
                }, []);
            T.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = T.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: s, loadNextPage: u };
        })(),
        r = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, S.jsxs)("div", {
              className: uX.GD,
              children: [
                  null != r && a ? (0, S.jsx)(uW, { subscription: r }) : null,
                  n.length > 0
                      ? (0, S.jsxs)("div", {
                            className: ih()(uX.PQ, uX.GD),
                            children: [
                                (0, S.jsx)("div", {
                                    className: ih()(uX.Nj, uX.Bd),
                                    children: (0, S.jsxs)(sC.A, {
                                        className: uX.Yi,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: uC.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: uX.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: uC.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, S.jsx)(uH, { receipts: n, locale: t, loadNextPage: l }),
                            ],
                        })
                      : s
                        ? (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: U.intl.string(U.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.string(U.t.GqvDkk),
                            }),
              ],
          })
        : (0, S.jsx)(om.y, {});
}
var uZ = n(545075);
let uq = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([oJ.default], () => oJ.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: o6.useConfig(e).enabled });
            return (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(uZ.kb, {}), n ? (0, S.jsx)(uK, { locale: t }) : (0, S.jsx)(o5.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    uQ = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [uq],
    }),
    u$ = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [o3, uQ],
        useObscuredNotice: oc.L,
    }),
    uJ = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: od.B,
        buildLayout: () => [u$],
    });
var u0 = n(70283),
    u1 = n(682618),
    u2 = n(859492),
    u3 = n(962644),
    u5 = n(35587),
    u4 = n(86379);
let u6 = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: uZ.uK,
        usePredicate: () => (0, u4.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    u8 = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [u6] });
var u7 = n(982240),
    u9 = n(5755),
    de = n(914410),
    dt = n(556427),
    dn = n(573343);
let di = "UserSettingsGiftingBadgeProgress";
function ds(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, S.jsxs)("div", {
        className: ih()(dn.fO, { [dn.bF]: i }),
        children: [
            null != n && (0, S.jsx)("img", { src: n, alt: "", className: dn.si }),
            (0, S.jsxs)("div", {
                className: dn.tc,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(dt.default.qvx9E4, { count: (0, u7.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dl(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, u2.b9)(di);
    return (0, S.jsx)("div", {
        className: dn.dw,
        children: t.map((e) => (0, S.jsx)(ds, { tier: e, iconUrl: (0, u2.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function dr(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tF.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, u9.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, S.jsx)("div", {
        className: dn.NG,
        children: (0, S.jsx)(v.$, {
            variant: "primary",
            icon: uc.GiftIcon,
            text: U.intl.string(dt.default.DZnomS),
            onClick: s,
        }),
    });
}
function da(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, u7.rL)(i),
        a = (0, u7.rL)(s),
        o = (0, u2.GZ)(n, i, s),
        u = (0, u2.b9)(di),
        d = (0, u2.Se)(i, u),
        c = (0, u2.Se)(s, u);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(dt.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(dt.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, S.jsxs)("div", {
            className: dn.mY,
            children: [
                null != d &&
                    (0, S.jsx)("div", {
                        className: dn.fC,
                        children: (0, S.jsx)("img", { src: d, alt: "", className: dn.qS }),
                    }),
                (0, S.jsxs)("div", {
                    className: dn.Qs,
                    children: [
                        (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, S.jsx)(de.Ay, { variant: de.qP.BLUE, weight: de.fh.MEDIUM, progress: o }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dn.qg,
                            children: U.intl.format(dt.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, S.jsx)("div", {
                        className: dn.fC,
                        children: (0, S.jsx)("img", { src: c, alt: "", className: dn.qS }),
                    }),
            ],
        })
    );
}
function du(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([u7.Ay], () => ({
            badgeProgress: u7.Ay.getSingleRequirementProgress(u0.$.GIFTING)?.current ?? 0,
            currentTier: u7.Ay.getCurrentTier(u0.$.GIFTING),
            nextTier: u7.Ay.getNextTier(u0.$.GIFTING),
            giftsRemaining: u7.Ay.getRemainingToNextTier(u0.$.GIFTING),
            tiers: u7.Ay.getBadgeById(u0.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, S.jsxs)("div", {
              className: dn.kL,
              children: [
                  (0, S.jsxs)("div", {
                      className: dn.Jo,
                      children: [
                          n > 0 &&
                              (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsx)(da, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, S.jsx)("div", { className: dn.yF }),
                                  ],
                              }),
                          (0, S.jsx)(dl, { tiers: r, currentTier: i }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dn.PJ,
                              children: U.intl.string(dt.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, S.jsx)(dr, { analyticsLocation: t, location: di }),
              ],
          });
}
let dd = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(dt.default.sFokBp),
        buildLayout: () => [dc],
        usePredicate: () => {
            let e = (0, u2.F5)("gift_inventory"),
                t = (0, f.bG)([u7.Ay], () => u7.Ay.getBadgeById(u0.$.GIFTING));
            return e && null != t;
        },
    }),
    dc = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(dt.default.sFokBp)],
        Component: () => (0, S.jsx)(du, {}),
    });
var dg = n(264779),
    dm = n(412260),
    dA = n(555393),
    dE = n(725807),
    dh = n(212168),
    dx = n(469778),
    dp = n(45938),
    dS = n(109802),
    dT = n(869038),
    df = n(380856);
function dI(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, S.jsxs)(sC.A, {
        className: ih()(df.wx, n),
        align: sC.A.Align.CENTER,
        children: [
            (0, S.jsx)("div", { className: df.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function d_(e) {
    let { children: t, className: n } = e;
    return (0, S.jsx)("div", { className: ih()(df.rf, n), children: t });
}
class dN extends T.PureComponent {
    static Header = dI;
    static Body = d_;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, S.jsx)("div", { className: ih()(df.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dC = n(180522),
    dy = n(871123),
    db = n(366523),
    dv = n(280450),
    dj = n(30793),
    dO = n(97352),
    dL = n(67480),
    dR = n(615396),
    dD = n(274904);
class dP extends T.PureComponent {
    _copyModeTimeout = new rF.Ep();
    state = { copyMode: dS.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dS.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dS.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dT.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dp.AK)(t, n),
            (0, ux.C)(
                e,
                () => this.setState({ copyMode: dS.q.SUCCESS }),
                () => this.setState({ copyMode: dS.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dS.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, S.jsxs)(sC.A, {
            direction: sC.A.Direction.VERTICAL,
            className: dD.Gj,
            children: [
                (0, S.jsx)(dS.e, {
                    className: dD.ph,
                    value: (0, dp.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: ux.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l0.XD.BRAND,
                    buttonLook: l0.pR.FILLED,
                }),
                (0, S.jsxs)("div", {
                    className: dD.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, S.jsxs)(T.Fragment, {
                                  children: [
                                      U.intl.format(U.t.ltVZcJ, { hours: t.expiresAt.diff(ip()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, S.jsx)(ie.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: U.intl.string(U.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class dG extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dT.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dT.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dy.bF)(e)
            ? (0, S.jsx)(db.e, { shape: "square", sku: e, containerClassName: dD.ez })
            : null != t
              ? (0, S.jsx)(dC.A, { giftStyle: t, className: dD.ez, shouldAnimate: this.state.isHovered })
              : (0, S.jsx)(si.A, { game: n, size: si.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dy.bF)(e)
            ? (0, S.jsxs)("div", {
                  className: ih()(dD.Oc, dD.ic),
                  children: [
                      (0, S.jsx)(si.A, { game: n, size: si.M.XSMALL, skuId: e.id, className: dD._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, S.jsx)("div", { className: dD.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === t0.FB
                    ? U.intl.string(U.t.odsU6W)
                    : i === t0.Bu && null != n
                      ? U.intl.formatToPlainString(n.interval === t0.WT.MONTH ? U.t.uZjpiJ : U.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : U.intl.formatToPlainString(n.interval === t0.WT.MONTH ? U.t.rCJvqo : U.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, S.jsx)("div", { className: dD.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, S.jsxs)(sC.A, {
            justify: sC.A.Justify.BETWEEN,
            align: sC.A.Align.CENTER,
            className: dD.pe,
            children: [
                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.lELyPj) }),
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t.Q3Qguo),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode,
                }),
            ],
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: n,
                className: i,
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, S.jsxs)(dN, {
            className: i,
            children: [
                (0, S.jsx)(ie.D, {
                    onClick: this.handleToggleOpen,
                    className: dD.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, S.jsx)(dN.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, S.jsxs)("div", {
                            className: dD.MY,
                            children: [
                                (0, S.jsxs)(sC.A, {
                                    align: sC.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, S.jsxs)("div", {
                                            className: dD.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, S.jsx)(uA.A, {
                                    direction: a ? uA.A.Directions.UP : uA.A.Directions.DOWN,
                                    className: dD.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, S.jsx)(dN.Body, {
                          children: l
                              ? (0, S.jsx)(om.y, { className: dD.u1 })
                              : (0, S.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, S.jsx)(dP, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let dM = f.Ay.connectStores([dL.A, td.A, dj.A, i8.A, dO.A, dv.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = dL.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = dj.A.getForGifterSKUAndPlan(dv.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: td.A.enabled,
        isFetching: dj.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: dj.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i8.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, dR.c9)(n) : null,
        giftCodes: l,
    };
})(dG);
var dU = n(725570),
    dV = n(736653),
    dk = n(46054);
let dw = ip().duration(30, "days");
var dF = n(416052),
    dB = n(878309);
function dz(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, S.jsx)(sS.a, {
        title: "",
        size: "md",
        input: (0, S.jsx)("div", { className: dB.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, S.jsxs)("div", {
            className: dB.t4,
            children: [
                (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, S.jsx)(Q.E, { variant: "text-md/normal", className: dB.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let dY = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tq.GV)(),
        { analyticsLocations: u } = (0, eY.Ay)(tF.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dg.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, S.jsx)(dz, { onClose: t, transitionState: l })
        : null == i
          ? (0, S.jsx)(om.y, { className: dB.Lq })
          : (0, S.jsx)(sS.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, S.jsxs)("div", {
                    className: dB.N1,
                    children: [
                        (0, S.jsx)("div", { className: dB.Qw }),
                        (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: dB.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: U.intl.string(U.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: U.intl.string(U.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, dg.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(sd.c, { className: dB.M5 }),
                        (0, S.jsx)(t8.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, S.jsx)(dF.A, {
                                value: i,
                                buttonColor: l0.$n.Colors.BRAND,
                                buttonLook: l0.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var dX = n(136380);
function dH(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, dV.Ay)(),
        d = (0, dg.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, iS.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ip()(n.outboundRedemptionEndDate)
                            : ip()(n.endDate).add(dw)
                        : ip()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && s
        ? (t = U.intl.format(U.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = U.intl.format(U.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = U.intl.format(U.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = U.intl.format(U.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? U.intl.string(U.t["2cHUti"]) : U.intl.string(U.t.O13yhz),
        A = (0, dA.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: dX.AX,
                children: [
                    (0, S.jsxs)("div", {
                        className: dX.Pg,
                        children: [
                            (0, S.jsxs)("div", {
                                className: dX.At,
                                children: [
                                    (0, S.jsx)("div", {
                                        className: dX.$G,
                                        children: (0, S.jsx)("img", { alt: "", src: d, className: dX.IJ }),
                                    }),
                                    (0, S.jsxs)("div", {
                                        children: [
                                            (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: h }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, S.jsx)(v.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, S.jsx)(Q.E, {
                            className: dX.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: dk.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, S.jsx)(dU.aF, {
                    renderModal: (e) =>
                        (0, S.jsx)(dY, {
                            ...e,
                            onClose: E,
                            onClaim: u3.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function dW(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dx.A], () => dx.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dA.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, u5.y7)(),
        a = n.find((e) => e.giftCodeBatchId === t0.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === t0.Bu && !e.consumed) ?? [],
        [u, d] = W().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t0.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, S.jsxs)("div", {
                      className: dX.N1,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, S.jsx)(sd.c, { className: dX.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, S.jsxs)("div", {
                      className: dX.uo,
                      children: [
                          (0, S.jsx)(as.t, {
                              size: "md",
                              color: n8.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: dX.PC,
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: dX.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tW.default)(), (0, t9.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, S.jsx)(dE.A, {
                              showGradient: !0,
                              className: dX.aA,
                              subscriptionTier: t0.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, S.jsxs)("div", {
        children: [
            g,
            (0, S.jsx)(dh.A, {
                className: dX.Yj,
                isShown: !1 === i && c,
                type: dh.i.PREMIUM,
                hasBackground: !0,
                children: (0, S.jsxs)("div", {
                    className: dX.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, S.jsx)(dH, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, S.jsx)(dH, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, S.jsx)(
                                  dM,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t0.FB,
                                  },
                                  (0, dp.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, S.jsx)(
                                  dM,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t0.Bu,
                                  },
                                  (0, dp.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, S.jsx)(
                                  dM,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t0.Bu,
                                  },
                                  (0, dp.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let dK = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: dq,
        buildLayout: () => [dZ],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dm.A],
                    () => ({
                        claimedOutboundPromotionCodes: dm.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dm.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, u5.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dg.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    dZ = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [dq()],
        Component: () => (0, S.jsx)(dW, { redesign: !0 }),
    });
function dq() {
    return U.intl.string(U.t.YzjdWJ);
}
var dQ = n(339048);
function d$() {
    let e = (0, f.yK)([dx.A], () => dx.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dp.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            tl.h.wait(() => {
                (0, dQ.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, S.jsx)(om.y, { className: dX.Lq });
    if (0 === Object.keys(t).length)
        return (0, S.jsxs)("div", {
            className: dX.p$,
            children: [
                (0, S.jsx)("div", { className: dX.QT }),
                (0, S.jsx)(uE.H, { className: dX.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, S.jsx)("p", {
                    className: dX.WO,
                    children: U.intl.format(U.t.HezvJ8, {
                        onClick: function () {
                            (0, nm.openUserSettings)(h.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = W()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dp.X6)(e);
            return (0, S.jsx)(dM, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, S.jsx)(Z.B, { gap: "lg", children: s });
}
let dJ = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: d1, buildLayout: () => [d0] }),
    d0 = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [d1()], Component: () => (0, S.jsx)(d$, {}) });
function d1() {
    return U.intl.string(U.t.FWe6CP);
}
var d2 = n(532446),
    d3 = n(499454);
class d5 extends T.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: I.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let n = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    (await (0, oT.Qp)(n),
                        (0, oT.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oA.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dp.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dT.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tc.default.track(I.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: I.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: I.ZSU.BUTTON_CTA,
                },
            }),
                (0, d3.h)({ processedCode: e }),
                this.setState({ codeInput: "" }));
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: s, isPromoCode: l } = this.state,
            r = e ? U.intl.string(U.t["hVEn/j"]) : U.intl.string(U.t.SeKIoS),
            a = e ? U.intl.string(U.t.epHMtp) : void 0;
        return (0, S.jsx)(n9.n, {
            label: e ? void 0 : U.intl.string(U.t["il+VCo"]),
            children: (0, S.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, S.jsxs)(d2.M, {
                    children: [
                        (0, S.jsx)(sf.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? U.intl.string(U.t.Y11a2u) : null,
                            helperText: l
                                ? U.intl.format(U.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, S.jsx)(v.$, {
                            variant: "primary",
                            text: U.intl.string(U.t.KIpp7M),
                            type: "submit",
                            loading: i,
                            disabled: e && 0 === n.length,
                        }),
                    ],
                }),
            }),
        });
    }
}
function d4(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oq.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(tc.AnalyticsContext),
        s = (0, f.bG)([td.A], () => td.A.enabled);
    return (0, S.jsx)(d5, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let d6 = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [d8],
        usePredicate: () => !(0, u4.Hp)(),
    }),
    d8 = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, S.jsx)(d4, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    d7 = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [d6, dK, dd, dJ, u8],
        initialize: () => {
            (u3.Ay.fetchClaimedOutboundPromotionCodes(), (0, u2.Ig)("gift_inventory") && (0, u1.o0)(u0.$.GIFTING));
        },
    }),
    d9 = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: uc.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, u5.IO)().length;
            return T.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [d7],
    });
var ce = n(659758),
    ct = n(87958),
    cn = n(877624),
    ci = n(269115),
    cs = n(462887),
    cl = n(73825),
    cr = n(531260),
    ca = n(160946),
    co = n(721668),
    cu = n(224016),
    cd = n(526292),
    cc = n(881489),
    cg = n(106512),
    cm = n(22118),
    cA = n(103411),
    cE = n(190187),
    ch = n(930861),
    cx = n(854627),
    cp = n(889227),
    cS = n(326084),
    cT = n(851746),
    cf = n(664654),
    cI = n(912140),
    c_ = n(953727);
let cN = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, S.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c_.A)({ ...s }),
            children: [
                (0, S.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, S.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, S.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, S.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, S.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    cC = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, dV.Ay)(),
            l = (0, cs.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, S.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c_.A)({ ...i }),
            children: [
                (0, S.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, S.jsxs)("defs", {
                            children: [
                                (0, S.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, S.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, S.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, S.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, S.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, S.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, S.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, S.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, S.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, S.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsxs)("defs", {
                    children: [
                        (0, S.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, S.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, S.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, S.jsx)("feOffset", { dy: "4" }),
                                (0, S.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, S.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, S.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, S.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, S.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, S.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, S.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, S.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, S.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, S.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var cy = n(387316),
    cb =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let cv = "url(#gradient)",
    cj = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: i,
                initialPercentage: s = 0,
                progressCircleStrokeSize: l = 2,
                progressCircleVariation: r,
                progressCircleStroke: a,
            } = e,
            o = 43 + l / 2,
            u = 2 * Math.PI * o,
            [d, c] = T.useState(s);
        T.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, dV.Ay)(),
            m = (0, cs.q)(g),
            A = (function (e) {
                switch (e) {
                    case 0:
                    case 2:
                        return "var(--background-base-low)";
                    case 1:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(r),
            E = 1 === r ? (m ? "0.3" : "0.2") : void 0,
            h =
                a ??
                (function (e, t) {
                    switch (t) {
                        case 0:
                        case 2:
                            return cv;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : cv;
                        default:
                            return;
                    }
                })(m, r);
        return (0, S.jsxs)("div", {
            className: cy.Ap,
            children: [
                (0, S.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cy.fB,
                    children: [
                        (0, S.jsx)("circle", {
                            className: 0 === r || 2 === r ? cy.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, S.jsx)("circle", {
                            stroke: h,
                            strokeWidth: l,
                            strokeLinecap: "round",
                            strokeDasharray: `${u} ${u}`,
                            className: i,
                            style: { strokeDashoffset: (1 - d / 100) * u },
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                        }),
                    ],
                }),
                (0, S.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, S.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, S.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, S.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, S.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, S.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, S.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, S.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, S.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, S.jsx)("div", { className: cy.Vw, children: n }),
            ],
        });
    };
var cO = n(104773);
function cL(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cI.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, S.jsx)("div", {
        className: cO.Q7,
        children: (0, S.jsx)("div", {
            className: cO.Nk,
            children: null != s && (0, S.jsx)("img", { className: cO.CH, alt: i, src: s }),
        }),
    });
}
let cR = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = cb.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        p = t && !x;
    return (0, S.jsx)("div", {
        className: ih()(cO.G3, n),
        children: (0, S.jsx)(cj, {
            animationClassName: ih()(cO._0, { [cO.uJ]: p, [A ?? ""]: p }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case cb.NITRO_GEM:
                        return (0, S.jsx)(cN, {
                            className: p ? cO.Ow : void 0,
                            backgroundColor: ih()(cO.vH, s),
                            backgroundCircleSize: r,
                        });
                    case cb.NITRO_LOGO:
                        return (0, S.jsx)(cC, { circleColor: E, ellipseOpacity: m });
                    case cb.AVATAR_DECO:
                        if (null != c)
                            return (0, S.jsx)(cL, {
                                avatarDecorationLegacyAssetId: d,
                                avatarDecorationSkuId: c,
                                avatarDecoAssetDescription: g,
                            });
                        return null;
                    default:
                        return null;
                }
            })(),
        }),
    });
};
var cD = n(14313);
function cP(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cx.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, S.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: cD.n5, children: n });
    return (0, S.jsx)(sA.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, S.jsx)("div", { className: cD.Lg, children: r }),
    });
}
function cG(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, S.jsxs)("div", {
        className: cD.Ip,
        children: [
            (0, S.jsx)("div", { className: cD.Ej }),
            (0, S.jsx)("div", { className: ih()({ [cD.ch]: t > n, [cD.q_]: t === n }) }),
        ],
    });
}
function cM(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, S.jsxs)("div", {
        className: cD.ZM,
        children: [
            (0, S.jsx)(cP, { userRecord: i, placement: 1 }),
            (0, S.jsx)(cG, { numSentReferrals: n, placement: 1 }),
            (0, S.jsx)(cP, { userRecord: s, placement: 2 }),
            (0, S.jsx)(cG, { numSentReferrals: n, placement: 2 }),
            (0, S.jsx)(cP, { userRecord: l, placement: 3 }),
        ],
    });
}
let cU = function () {
    let e = (0, f.bG)([cT.A], () => cT.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cf.J)(),
        i = T.useMemo(() => t.map((e) => new cp.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cS.aK.REDEEMED && s.redeemed++, e === cS.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cf.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eY.Ay)(tF.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cf.Z) * 100,
        d = (0, S.jsxs)("div", {
            className: cD.hE,
            children: [
                (0, S.jsx)(cR, { percentage: u, progressCircleVariation: cb.NITRO_LOGO, iconClassName: cD.ER }),
                (0, S.jsxs)("div", {
                    className: cD.Ns,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: cD.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, S.jsx)(cM, { userRecords: i }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cf.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, S.jsx)("div", {
                            className: cD.Fb,
                            children: (0, S.jsx)(ch.wL, {
                                "data-migration-pending": !0,
                                className: cD.r$,
                                color: l0.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (tc.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sT.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, S.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, S.jsxs)("div", {
                                    className: cD.Zn,
                                    children: [
                                        (0, S.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: cD.QH,
                                        }),
                                        l ? U.intl.string(U.t.SY9tyI) : U.intl.string(U.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = s.redeemed === cf.Z;
    return (0, S.jsx)(eY.f5, {
        value: a,
        children: (0, S.jsx)("div", {
            className: ih()(cD.kL, { [cD.AP]: c }),
            children: (0, S.jsx)("div", { ref: o, className: ih()(cD.d_, { [cD.kS]: c }), children: d }),
        }),
    });
};
var cV = n(194509),
    ck = n(465794),
    cw = n(774774),
    cF = n(156601),
    cB = n(543213),
    cz = n(88001),
    cY = n(148155),
    cX = n(487518);
let cH = "to_premium_home_button",
    cW = "premium home page";
function cK(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t0.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cr.A)(),
        u = null != t.trialEndsAt ? ip()(t.trialEndsAt).diff(ip()(), "d") : 0,
        d = t0.hd[t.planIdFromItems],
        c = ah.Ay.getDefaultPrice(d.id),
        g = ah.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cs.M)(s) ? cw.at.PREMIUM_TIER_2_WHITE_FILL : cw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, S.jsx)(cw.e4, { text: U.intl.string(U.t.EyjDRE), className: cX.LW, colorOptions: e })
                    : (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(cw.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: cX.uS,
                                  colorOptions: e,
                              }),
                              (0, S.jsx)("div", { className: cX.on }),
                          ],
                      }),
                (0, S.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: cX.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u_.$g)(c.amount, c.currency);
                            return U.intl.format(cY.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? U.intl.format(U.t.z2oQtA, {
                                  percent: i?.percentage ?? t0.Cq,
                                  regularPrice: g,
                                  renewalDate: ah.Ay.getExpectedRenewalDate(t, o),
                              })
                            : U.intl.formatToPlainString(U.t["3ZiutU"], {
                                  percent: i?.percentage ?? t0._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? t0.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, S.jsx)(cF.A, { variant: void 0, subscriptionTier: t0.pe.TIER_2, interval: d.interval });
}
function cZ() {
    let e = (0, cd.k5)(),
        t = (0, cd.nf)(),
        n = (0, dV.Ay)(),
        i = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cr.A)(),
        a = (0, cc.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, S.jsxs)("div", {
        className: ih()(cX.$Y, { [cX.J5]: e || d }),
        children: [
            (0, S.jsxs)("div", {
                className: cX.jp,
                children: [
                    l
                        ? (0, S.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: cX._K,
                              children: (0, cz.DP)(),
                          })
                        : (0, S.jsx)(cu.A, { className: cX.TJ }),
                    l && !e
                        ? (0, S.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                    (0, S.jsx)(cw.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: cX.LW,
                                        colorOptions: cw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, S.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: cX.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, S.jsx)(cK, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(cw.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: cX.uS,
                                            colorOptions: (0, cs.M)(n)
                                                ? cw.at.PREMIUM_TIER_2_WHITE_FILL
                                                : cw.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, S.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: cX.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, S.jsx)(cB.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? cB.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? cB.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? cB.Nz.FRACTIONAL_PREMIUM
                                : cB.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, S.jsxs)(l2.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(ck.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      onClick: () => {
                                          (tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: cH,
                                              target: cW,
                                          }),
                                              (0, tW.default)(),
                                              (0, t9.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? U.intl.string(U.t.VR2iVB) : U.intl.string(U.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, S.jsxs)(l2.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: cH,
                                              target: cW,
                                          }),
                                              (0, tW.default)(),
                                              (0, t9.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: U.intl.string(U.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, nm.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: U.intl.string(U.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, S.jsx)("div", {
                className: cX.ah,
                children: (0, S.jsx)("img", { className: cX.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function cq() {
    return (0, S.jsxs)("div", {
        className: cX.T1,
        children: [
            (0, S.jsx)("img", { className: cX.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, S.jsxs)("div", {
                className: cX.b4,
                children: [
                    (0, S.jsx)(N.D, {
                        className: cX.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        className: cX.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, S.jsx)(cV.A, {
                        className: ih()(cX.Tp, cX._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: cX.VV },
                        color: l0.$n.Colors.CUSTOM,
                        onClick: () => {
                            tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: "gifting_button",
                                target: "payment modal",
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
let cQ = function () {
        let e = (0, u4.Hp)(),
            { analyticsLocations: t } = (0, eY.Ay)(tF.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
            i = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([o$.A], () => o$.A.hasFetchedSubscriptions()),
            l = (0, ca.Y)(t0.T7),
            [r, a] = T.useState(!0),
            o = (0, cr.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dm.A], () => {
                let e = dm.A.getMarketingComponentByType(cn.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oC.Fr || oC.v1) && null != u,
            c = T.useRef(null);
        (0, cE.i)();
        let g = (0, cA.m)();
        T.useEffect(() => {
            tl.h.wait(async () => {
                (e || (await Promise.all([oS.hP(), oS.$o(), (0, cl.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, S.jsx)(uZ.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, S.jsx)(co.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, S.jsx)(om.y, {});
        let p = !!i?.hasActiveTrial;
        return (0, S.jsx)(eY.f5, {
            value: t,
            children: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, S.jsx)(cg.m, { config: u }),
                            (0, S.jsx)(cZ, {}),
                            g && (0, S.jsx)(cU, {}),
                            !d && (0, S.jsx)(cq, {}),
                            (0, S.jsx)(cm.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !p,
                                selectedPlanColumnClassName: cX.JG,
                                selectedPlanTier: t0.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, S.jsx)(ci.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tc.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, S.jsx)("div", { ref: c, className: cX._Z }),
                    }),
                ],
            }),
        });
    },
    c$ = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
            return (0, ah.YE)(e, t0.PremiumTypes.TIER_2) ? (0, S.jsx)(cQ, {}) : (0, S.jsx)(ct.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    cJ = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [c$] }),
    c0 = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: oc.L,
        buildLayout: () => [cJ],
    }),
    c1 = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: as.t,
        usePersistentBadge: function (e) {
            let t = (0, ce.e)(e);
            return T.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [c0],
    });
var c2 = n(104510),
    c3 = n(820739),
    c5 = n(859241),
    c4 = n(527113),
    c6 = n(338548),
    c8 = n(776096),
    c7 = n(711014),
    c9 = n(178368),
    ge = n(809545),
    gt = n(168482);
function gn() {
    return (0, S.jsxs)("div", {
        className: ge.iE,
        children: [
            (0, S.jsx)("img", { className: ge.Kk, alt: "", src: gt }),
            (0, S.jsxs)("div", {
                className: ge.pq,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-lg/bold", children: U.intl.string(U.t.ZHNSYf) }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: U.intl.string(U.t.kCj5ps),
                    }),
                ],
            }),
            (0, S.jsx)(v.$, {
                variant: "secondary",
                text: U.intl.string(U.t.JFlifp),
                onClick: function () {
                    ((0, t9.pX)(I.BVt.GUILD_DISCOVERY), (0, tW.default)());
                },
            }),
        ],
    });
}
var gi = n(365199),
    gs = n(878678),
    gl = n(443865),
    gr = n(980707),
    ga = n(473145);
function go(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: s,
            premiumSubscription: l,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? U.intl.string(U.t["PR0n//"]) : U.intl.string(U.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? U.intl.string(U.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: U.intl.string(U.t.twFU3R), subtext: s ? null : U.intl.string(U.t.oQ9lOh), disabled: !s },
            uncancel: { label: U.intl.string(U.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case I.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = U.intl.string(U.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
            a === t0.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = U.intl.string(U.t.LiLRRT)),
                (o.cancel.subtext = U.intl.string(U.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = T.useMemo(
        () =>
            l.isPausedOrPausePending && a === t0.xc.NONE
                ? (0, S.jsx)(ti.Dr, {
                      id: "manage-subscription",
                      label: U.intl.string(U.t.obRG6Y),
                      action: () => (0, nm.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gl.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gl.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, S.jsxs)(gr.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: i,
        children: [
            (0, S.jsx)(ti.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("203112"),
                            n.e("647367"),
                            n.e("677508"),
                            n.e("889002"),
                            n.e("610943"),
                            n.e("534428"),
                            n.e("693173"),
                            n.e("418710"),
                            n.e("238249"),
                        ]).then(n.bind(n, 724624));
                        return (n) =>
                            (0, S.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, ga.I5)(t)
                ? (0, S.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sT.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, S.jsx)(ti.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sT.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var gu = n(545934),
    gd = n(548118),
    gc = n(987144),
    gg = n(864310),
    gm = n(290413);
function gA(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gg.A)(t.id);
    return (0, S.jsxs)("div", {
        className: n ?? gm.OA,
        children: [
            (0, S.jsx)(gd.Ay, { className: gm.$f, guild: t, size: gd.Ay.Sizes.MEDIUM }),
            (0, S.jsxs)("div", {
                className: gm.gI,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, S.jsxs)("div", {
                        className: gm.ew,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gm.QW,
                                children: [
                                    (0, S.jsx)(c2._, {
                                        className: gm.Wz,
                                        color: n8.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)("div", { className: gm.zk }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, ga.gb)(t.premiumTier, { useLevels: !1 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function gE(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sj.A], () => sj.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: gm.Nr,
              children: [
                  (0, S.jsx)(gA, { guild: n }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: c2._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gc.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: I.ZSU.BUTTON_CTA,
                                  objectType: I.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var gh = n(747381);
let gx =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gp(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, ga.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cr.A)(),
        c = T.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
                    let n = [
                        U.intl.formatToPlainString(U.t["dLlKX/"], { numEmojiSlots: t0.TG[e].limits.emoji }),
                        U.intl.formatToPlainString(U.t["+ANIfv"], { numStickerSlots: t0.TG[e].limits.stickers }),
                        U.intl.formatToPlainString(U.t["4gt60b"], {
                            numSoundboardSlots: t0.TG[e].limits.soundboardSounds,
                        }),
                        U.intl.formatToPlainString(U.t.XahSjZ, {
                            resolution: t0.TG[e].limits.screenShareQualityResolution,
                            framerate: t0.TG[e].limits.screenShareQualityFramerate,
                        }),
                        U.intl.formatToPlainString(U.t.NbNs7S, { bitrate: t0.TG[e].limits.bitrate / 1e3 }),
                        U.intl.formatToPlainString(U.t.VVKcpn, { filesize: t0.TG[e].limits.fileSize / 1024 / 1024 }),
                        U.intl.formatToPlainString(U.t.TbpCvv, { numVideoStageSeats: t0.TG[e].limits.stageVideoUsers }),
                        U.intl.string(U.t.LDyX3i),
                        U.intl.string(U.t.YtGlPW),
                    ];
                    (e >= I.TVA.TIER_2 && (n.push(U.intl.string(U.t.SztbtN)), n.push(U.intl.string(U.t["3GK91n"]))),
                        e >= I.TVA.TIER_3 && n.push(U.intl.string(U.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return U.intl.formatToPlainString(U.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        g = T.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oN.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return U.intl.formatToPlainString(U.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = T.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, S.jsxs)("div", {
        className: ih()(gh.iq, { [gh.Mt]: l }),
        children: [
            (0, S.jsxs)("div", {
                className: gh.kd,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gh.bB, src: gx }),
                    A
                        ? (0, S.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: U.intl.format(U.t.Z4ULRD, { date: m }),
                          })
                        : (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gh.zk }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: U.intl.formatToPlainString(U.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gh.zk }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: U.intl.formatToPlainString(U.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, S.jsx)(am.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, S.jsx)(go, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: s,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, S.jsx)(ie.D, {
                        innerRef: r,
                        "aria-label": U.intl.string(U.t.PdRCRg),
                        className: gh.Mj,
                        ...e,
                        children: (0, S.jsx)(gi.MoreHorizontalIcon, {
                            size: "xs",
                            color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gS(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sj.A], () => sj.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gh.Nr,
        children: [
            (0, S.jsx)("div", {
                className: gh.MY,
                children:
                    null != l
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(gA, { guild: l, className: gh.OA }),
                                  (0, S.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tW.default)(),
                                              (0, gs.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, S.jsx)("div", {
                              className: gh.OA,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, S.jsx)(
                    gp,
                    {
                        slot: e,
                        guildTier: l?.premiumTier,
                        premiumSubscription: i,
                        hasCancelableSlots: s,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function gT(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = T.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                gu.A.createFromServer(
                                    {
                                        id: n.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: n.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return i;
                    })(i, n),
                    numActiveSlots: 0,
                };
            let e = 0,
                l = {};
            for (let n of Object.keys(t)) {
                let i = t[n];
                if ((!(0, ga.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsx)("div", {
        className: gh.kR,
        children: oN.default
            .keys(l)
            .map((e) => (0, S.jsx)(gS, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gf = n(502572),
    gI = n(983511),
    g_ = n(342744),
    gN = n(496431);
let gC = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gN.A)(n);
    return (0, S.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iS.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var gy = n(731536);
function gb(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, ga.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t0.xc.NONE;
    return 0 === l.length
        ? null
        : (0, S.jsxs)("div", {
              className: gy.Nr,
              children: [
                  (0, S.jsxs)("div", {
                      className: gy.MY,
                      children: [
                          (0, S.jsxs)("div", {
                              className: gy._L,
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: gy.MD,
                                      children: [
                                          (0, S.jsx)("img", { alt: "", className: gy.F8, src: gx }),
                                          (0, S.jsx)("div", {
                                              className: ih()(gy.qS, "theme-dark"),
                                              children: (0, S.jsx)("span", { className: gy.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsxs)("div", {
                                      className: gy.Qp,
                                      children: [
                                          (0, S.jsx)(Q.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: U.intl.format(U.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, S.jsx)(Q.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: U.intl.format(U.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, S.jsx)(gf.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, S.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: c2._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sT.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, S.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gc.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: I.JJy.SETTINGS_PREMIUM,
                                                                      object: I.ZSU.BUTTON_CTA,
                                                                      objectType: I.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              }));
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  l.map((e, t) =>
                      (0, S.jsx)(
                          gv,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, ga.I5)(e),
                              isCanceled: (0, ga.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gv(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, S.jsx)(gC, { cooldown: u.getTime() })
            : null != d
              ? (0, S.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.format(U.t.Z4ULRD, { date: d }),
                })
              : (0, S.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.string(U.t["2mcafz"]),
                });
    let c = s || l;
    return (0, S.jsxs)("div", {
        className: ih()(gy.iq, { [gy.Mt]: i }),
        children: [
            (0, S.jsxs)("div", {
                className: gy.kd,
                children: [(0, S.jsx)("img", { alt: "", className: gy.bB, src: gx }), t],
            }),
            c &&
                (0, S.jsx)(am.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsxs)(gr.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": U.intl.string(U.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, S.jsx)(ti.Dr, {
                                        id: "cancel-boost",
                                        label: U.intl.string(U.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sT.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gI.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, S.jsx)(ti.Dr, {
                                        id: "uncancel-boost",
                                        label: U.intl.string(U.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sT.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(g_.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, S.jsx)(ie.D, {
                            innerRef: o,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            className: gy.Mj,
                            ...e,
                            children: (0, S.jsx)(gi.MoreHorizontalIcon, {
                                size: "xs",
                                color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var gj = n(834612);
function gO(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== t0.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, S.jsxs)("div", {
              className: gj.i,
              children: [
                  (0, S.jsxs)("div", {
                      className: gj.b,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(gT, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, S.jsx)(gb, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var gL = n(333722),
    gR = n(9146);
function gD() {
    return (0, S.jsxs)("div", {
        className: gR.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, S.jsx)("div", {
                className: gR.kR,
                children: gL.s.map((e, t) => {
                    let n = e.icon;
                    return (0, S.jsxs)(
                        "div",
                        {
                            className: gR.Nr,
                            children: [
                                (0, S.jsx)(n, { className: gR.Kk }),
                                (0, S.jsx)(Q.E, {
                                    className: gR.h_,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var gP = n(847374),
    gG = n(232122),
    gM = n(665984);
function gU() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, S.jsxs)("div", {
        className: gM.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, S.jsx)("ul", {
                className: gM.p_,
                children: gG.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, S.jsxs)(
                        ie.D,
                        {
                            tag: "li",
                            className: ih()(gM.Aw, { [gM.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, S.jsxs)("div", {
                                    className: gM.k7,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            className: gM.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, S.jsx)(gP.a, {
                                            size: "sm",
                                            color: n8.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: gM.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        className: gM.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var gV = n(182859),
    gk = n(25525),
    gw = n(416763);
function gF() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, S.jsxs)("div", {
        className: gw.wx,
        children: [
            (0, S.jsxs)("div", {
                className: gw.Qs,
                children: [
                    (0, S.jsxs)("div", {
                        className: gw.B5,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: gw.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(gk.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, S.jsx)(gV.A, {
                variant: "member",
                className: gw.iO,
                analyticsLocation: {
                    page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: I.JJy.HERO,
                    object: I.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var gB = n(315629),
    gz = n(87719),
    gY = n(961085);
function gX() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
    if (null == e || ah.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(gB.h, {
        color: "nitro-pink",
        className: gY.vK,
        children: [
            (0, S.jsxs)("div", {
                className: gY.nw,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gY.q3, src: gx }),
                    (0, S.jsxs)("div", {
                        className: gY.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: t0.M4, boostCount: t0.M4 }),
                            }),
                            (0, S.jsxs)("div", {
                                className: gY.xv,
                                children: [
                                    (0, S.jsx)(as.t, { className: gY.nE }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: t0.M4,
                                            boostCount: t0.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)(v.$, {
                variant: "expressive",
                size: "sm",
                icon: as.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: gz.e,
            }),
        ],
    });
}
var gH = n(532991);
function gW() {
    let e = (0, f.bG)([c8.A], () => c8.A.affinities),
        t = (0, f.bG)([c7.Ay], () => c7.Ay.getFlattenedGuildIds()),
        n = T.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, S.jsxs)("div", {
              className: gH.i,
              children: [
                  (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, S.jsx)("div", { className: gH.k, children: n.map((e) => (0, S.jsx)(gE, { guildId: e }, e)) }),
              ],
          });
}
var gK = n(967246);
function gZ(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(gB.h, {
        color: "nitro-pink",
        className: gK.vK,
        children: [
            (0, S.jsxs)("div", {
                className: gK.nw,
                children: [
                    (0, S.jsxs)("div", {
                        className: gK.MD,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: gK.F8, src: gx }),
                            (0, S.jsx)("div", {
                                className: ih()(gK.qS, "theme-dark"),
                                children: (0, S.jsx)("span", { className: gK.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: gK.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, S.jsxs)("div", {
                                className: gK.xv,
                                children: [
                                    (0, S.jsx)(as.t, { className: gK.nE }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: t0.M4,
                                            boostCount: t0.M4,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)(v.$, {
                variant: "primary",
                size: "sm",
                icon: c2._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, S.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gc.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: I.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: I.JJy.SETTINGS_PREMIUM,
                                                object: I.ZSU.BUTTON_CTA,
                                                objectType: I.AnalyticsObjectTypes.BUY,
                                            },
                                            guild: e,
                                        }));
                                },
                            });
                    });
                },
            }),
        ],
    });
}
var gq = n(89150);
function gQ(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([c9.A], () => c9.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        l = (0, f.bG)([c8.A], () => c8.A.affinities),
        r = (0, f.bG)([c7.Ay], () => c7.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([c5.A], () => c5.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cr.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t0.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, S.jsxs)("div", {
        className: gq.GO,
        children: [
            (0, S.jsx)(uZ.kb, { className: gq.ek }),
            (0, S.jsx)(gF, {}),
            (0, S.jsx)(gX, {}),
            g > 0 && (0, S.jsx)(gZ, { count: g }),
            d && (0, S.jsx)(c6.A, {}),
            !a && (0, S.jsx)(gn, {}),
            (0, S.jsxs)("div", {
                className: gq.C_,
                children: [
                    (0, S.jsx)(gO, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, S.jsx)(gW, {}),
                    (0, S.jsx)(c4.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, S.jsx)(gD, {}),
                    (0, S.jsx)(gU, {}),
                ],
            }),
        ],
    });
}
var g$ = n(819677);
let gJ = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                tl.h.wait(() => {
                    (oS.hP(), oS.$o(), (0, c3.CD)(), (0, cl.zS)(null, null, I.tF5.DISCOVERY), (0, c3.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([o$.A], () => ({
                    hasFetchedSubscriptions: o$.A.hasFetchedSubscriptions(),
                    premiumSubscription: o$.A.getPremiumTypeSubscription(),
                })),
                n = (0, ca.Y)(),
                i = (0, f.bG)([oQ.A], () => oQ.A.hasFetchedPaymentSources),
                s = (0, f.bG)([c5.A], () => c5.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, S.jsx)("div", { className: ih()(g$.kL, g$.Lq), children: (0, S.jsx)(om.y, {}) })
                : (0, S.jsxs)("div", {
                      className: g$.kL,
                      children: [
                          (0, S.jsx)("div", { className: g$.Tp }),
                          (0, S.jsx)("div", { className: g$.Qs, children: (0, S.jsx)(gQ, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    g0 = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [gJ] }),
    g1 = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [g0],
    }),
    g2 = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: c2._,
        buildLayout: () => [g1],
    });
var g3 = n(153659),
    g5 = n(155984),
    g4 = n(357758),
    g6 = n(262077),
    g8 = n(281445),
    g7 = n(624479),
    g9 = n(626584),
    me = n(131607),
    mt = n(95035),
    mn = n(196736),
    mi = n(685743),
    ms = n(349085),
    ml = n(342942),
    mr = n(376205),
    ma = n(252589),
    mo = n(758836),
    mu = n(49999),
    md = n(394107),
    mc = n(439050);
let mg = new g9.A("GameServerSubscriptionsSection");
function mm(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mA(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mE = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, ms.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, me.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = dv.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mi.A)(c, t.id, tF.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, ml.A)({
                provider: g8.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mu.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: p,
            isDanger: _,
        } = (0, f.bG)(
            [o$.A, dO.A],
            () => {
                let e = null != l ? o$.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? dO.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, u_.$g)(u, o.priceCurrency) })
                            : null,
                    c = mm(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(md.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(md.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(md.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mA,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = o$.A.getSubscriptionById(l),
                t = null != e ? mm(e.currentPeriodEnd) : "";
            (0, n7.A)({
                title: U.intl.string(md.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(md.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(md.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oS.M2(l, s), await oS.hP());
                    } catch (e) {
                        mg.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = o$.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? dO.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, u_.$g)(u, o.priceCurrency) : "",
                c = mm(e.currentPeriodEnd);
            (0, n7.A)({
                title: U.intl.string(md.default.o96qbc),
                subtitle: U.intl.formatToPlainString(md.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cl.ur)(r);
                        let t = e.items;
                        (await oS.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ah.UC)(t, e.currency),
                            s,
                        ),
                            await oS.hP());
                    } catch (e) {
                        mg.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, S.jsxs)("div", {
        className: mc.nM,
        children: [
            (0, S.jsxs)("div", {
                className: mc.M4,
                children: [
                    (0, S.jsxs)("div", {
                        className: mc.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, S.jsx)("img", { className: mc.uP, src: a, alt: "" }),
                            (0, S.jsx)("div", { className: mc.tw }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mc.CR,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, S.jsxs)("div", {
                                          className: mc.CQ,
                                          children: [
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, S.jsx)(ie.D, {
                                                  className: mc.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, S.jsx)(uj.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, S.jsx)(g7.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(mt.A, { onClick: A, children: U.intl.string(md.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: mc.Rd,
                children: [
                    (0, S.jsxs)("div", {
                        className: mc.Ff,
                        children: [
                            null != h &&
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != x &&
                                (_
                                    ? (0, S.jsxs)("div", {
                                          className: mc.ez,
                                          children: [
                                              (0, S.jsx)(i5.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    E &&
                        (p
                            ? (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: U.intl.string(U.t.iIvF2z),
                                  onClick: C,
                              })
                            : (0, S.jsx)(v.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: U.intl.string(U.t["ETE/oC"]),
                                  onClick: N,
                              })),
                ],
            }),
        ],
    });
});
function mh(e) {
    let { servers: t } = e,
        n = (0, mn.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, ma.Y)(),
        s = (0, f.bG)([lx.default], () => ah.Ay.canUseShopDiscounts(lx.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([o$.A], () => (0, mr.HY)(t, i, (e) => o$.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !dO.A.isLoadedForSKU(e) && !dO.A.isFetchingForSKU(e));
        e.length > 0 && (0, cl.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tW.default)(), (0, t9.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mo.G2.GAME_SERVERS)));
    }, []);
    return (0, S.jsxs)("div", {
        className: mc.uW,
        children: [
            (0, S.jsxs)("div", {
                className: mc.wx,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(md.default.vCzwM7),
                    }),
                    (0, S.jsxs)("div", {
                        className: mc.h_,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(md.default.y85Eg9),
                            }),
                            n &&
                                (0, S.jsx)(mt.A, {
                                    onClick: a,
                                    children: (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(md.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", {
                className: mc.p_,
                children: t.map((e) =>
                    (0, S.jsx)(mE, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mx = n(55766),
    mp = n(696986),
    mS = n(364036);
function mT(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, S.jsx)(mp.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: mS.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, S.jsx)(mp.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: mS.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mS.RI }),
                    (0, S.jsxs)("div", {
                        className: mS.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mS.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mS.h_,
                                children: U.intl.format(U.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(v.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: U.intl.string(U.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var mf = n(872351),
    mI = n(9113),
    m_ = n(599941),
    mN = n(384684),
    mC = n(2242);
let my = [];
var mb = n(885574),
    mv = n(912851),
    mj = n(182744);
let mO = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, S.jsx)(ie.D, {
        onClick: i ? void 0 : n,
        className: mj.x6,
        children: (0, S.jsxs)("div", {
            className: mj.hQ,
            children: [
                i
                    ? (0, S.jsx)(om.y, { type: om.y.Type.PULSING_ELLIPSIS, className: mj.__invalid_spinner })
                    : (0, S.jsx)(Q.E, { variant: "text-md/medium", className: mj.Pf, children: t }),
                (0, S.jsx)(gP.a, { size: "md", color: "currentColor", className: mj.UE }),
            ],
        }),
    });
};
var mL = n(465932),
    mR = n(543767),
    mD = n(951555),
    mP = n(790284),
    mG = n(636194),
    mM = n(624456),
    mU = n(710144),
    mV = n(815332),
    mk = n(162093),
    mw = n(557506);
function mF(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tq.GV)(),
        { analyticsLocations: a } = (0, eY.Ay)(tF.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = T.useState(!1),
                [i, s] = T.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oS.M2(t, e), !0);
                    } catch (e) {
                        s(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(s.id)) && l();
    }
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === mC.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === mC.bN.INTANGIBLE),
        A = ip()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = U.intl.formatToPlainString(U.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, S.jsx)(sS.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: U.intl.string(U.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: U.intl.string(U.t.F6lUDF), onClick: c, loading: d },
        ],
        title: U.intl.string(U.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, S.jsxs)(Z.B, {
            gap: 8,
            children: [
                null != u ? (0, S.jsx)(iJ.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, S.jsx)(mk.x, { listingId: i.id, guildId: n.guild_id, className: mw.P }),
            ],
        }),
    });
}
var mB = n(319225),
    mz = n(746080),
    mY = n(883616);
function mX(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, S.jsxs)("div", {
        className: mY.L0,
        children: [
            (0, S.jsxs)("div", {
                className: mY.a5,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: mY.HU, children: t }),
                    i &&
                        (0, S.jsx)(sA.m, {
                            text: s,
                            children: (0, S.jsx)(mb.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: mY.Mo,
                            }),
                        }),
                ],
            }),
            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", className: mY.sx, children: n }),
        ],
    });
}
function mH(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eY.Ay)(),
        [i] = (0, mR.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tF.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([oQ.A], () => [oQ.A.hasFetchedPaymentSources, oQ.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, S.jsx)(mD.A, { subscription: t, currentInvoicePreview: i })
        : (0, S.jsx)(om.y, {});
}
function mW(e) {
    let {
        isTrial: t,
        isCancelled: n,
        isResubscribing: i,
        shouldHideRoleSubscriptionEntryPoints: s,
        onCancelSubscriptionClick: l,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return n && (t || s)
        ? null
        : (0, S.jsx)(t8.D, {
              label: U.intl.string(U.t["4neDM+"]),
              children: (0, S.jsx)("div", {
                  className: mY.__invalid_rowButtons,
                  children: n
                      ? (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, S.jsxs)(S.Fragment, {
                            children: [
                                !t && !s && (0, S.jsx)(mO, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, S.jsx)(mO, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let mK = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, mM.M)(e),
                n = (0, f.bG)([mG.A], () => mG.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([mG.A], () =>
                    null != n ? mG.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sj.A], () => sj.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, m_.XE)();
            T.useEffect(() => {
                l && null != s && null == mG.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ip()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u_.$g)(t.price, t.currency) : "",
                              s = ip()(t.createdAt).format("M/D/YY"),
                              l = t.status === I.Dmq.CANCELED,
                              r = t.status === I.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: n,
                              nextRenewalLabel: l ? U.intl.string(U.t.UAfot2) : U.intl.string(U.t.CVjLcM),
                              subscriptionPrice: i,
                              isCancelled: l,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: s,
                expanded: l,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: n,
                groupListing: i,
                subscriptionInfo: o,
            };
        })(t),
        [o, u] = T.useState(!1),
        d = (0, tq.GV)(),
        { analyticsLocations: c } = (0, eY.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, mL.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oS.QP(t, c),
                (0, mB.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: x,
            subscriptionPrice: p,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: y,
        } = a,
        b = n.soft_deleted || null == s || m;
    return (0, S.jsxs)("div", {
        className: mY.kL,
        children: [
            (0, S.jsx)(mU.A, {
                onClick: r,
                className: mY.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, S.jsxs)(S.Fragment, {
                        children: [
                            null != s && (0, S.jsx)(gd.Ay, { guild: s, active: !0, size: gd.Ay.Sizes.MEDIUM }),
                            (0, S.jsxs)("div", {
                                className: mY.if,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: mY.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: mY.xp,
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: mY.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, S.jsx)(tg.Lp, { text: U.intl.string(U.t["7uFZGt"]) })
                                                : y
                                                  ? (0, S.jsx)(tg.Lp, {
                                                        text: U.intl.string(U.t["6anton"]),
                                                        color: n8.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : x
                                                    ? (0, S.jsx)(sA.m, {
                                                          text: U.intl.string(U.t.eSuJE2),
                                                          children: (0, S.jsx)("div", {
                                                              children: (0, S.jsx)(tg.Lp, {
                                                                  className: mY.qc,
                                                                  text: U.intl.string(U.t.NrRwIl),
                                                                  color: n8.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, S.jsx)(sA.m, {
                                                      text: U.intl.string(U.t.nv1IqK),
                                                      children: (0, S.jsx)("div", {
                                                          children: (0, S.jsx)(tg.Lp, {
                                                              text: U.intl.string(U.t["sBl3X/"]),
                                                              color: n8.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, S.jsx)(ie.D, {
                                onClick: i(r),
                                "aria-label": U.intl.string(U.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, S.jsx)(gP.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ih()(mY.D6, { [mY.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, S.jsxs)("div", {
                      id: d,
                      children: [
                          (0, S.jsx)("div", { className: mY.yF }),
                          (0, S.jsx)(mV.A, { groupListingId: i.id, subscription: t, className: mY.kE }),
                          (0, S.jsxs)("div", {
                              className: mY.Zx,
                              children: [
                                  (0, S.jsx)(mX, { label: C, value: N }),
                                  (0, S.jsx)(mX, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: p,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, S.jsx)(mX, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, S.jsx)(mp.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, S.jsx)(t8.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, S.jsx)(mH, { subscription: t }),
                              }),
                          !b &&
                              (0, S.jsx)(mW, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sT.openModal)((t) => (0, S.jsx)(mF, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t9.pX)(I.BVt.CHANNEL(s.id, mz.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tW.default)(),
                                          mv.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (mP.A.setState({ subsection: eO.nR }),
                                                      (0, nm.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: A,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var mZ = n(661097);
let mq = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, f.bG)([mN.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mN.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? mC.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mC.M_.NONE
                                  : mC.M_.IN_SUBSCRIPTION_SERVER;
                        })([mN.A]),
                    ) === mC.M_.SUBSCRIBED,
                n = (0, f.bG)([o$.A], () => o$.A.getActiveGuildSubscriptions()),
                i = T.useRef(!1);
            return (
                T.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o$.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o$.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oS.hP());
                }, [e, t]),
                n ?? my
            );
        })(),
        { loading: i } = (0, m_.eb)(n);
    return ((0, mI.A)(oC.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, S.jsx)(om.y, {})
        : 0 === n.length
          ? null
          : (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mf.z, variant: "secondary", onClick: t }),
                    (0, S.jsx)(mp.h, { size: 10 }),
                    (0, S.jsx)(n9.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, S.jsx)("div", {
                            className: mZ.A,
                            children: n.map((e) => (0, S.jsx)(mK, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var mQ = n(327479),
    m$ = n(932012);
function mJ(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, S.jsx)(mp.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: m$.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, S.jsx)(mp.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: m$.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: m$._e }),
                    (0, S.jsxs)("div", {
                        className: m$.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: m$.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: m$.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(mQ.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var m0 = n(548411),
    m1 = n(417098),
    m2 = n(143582),
    m3 = n(915043),
    m5 = n(631466);
function m4(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = T.useMemo(() => {
            let e = !1;
            return (
                T.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, S.jsxs)("div", {
        className: ih()(m5.iE, t),
        children: [
            (0, S.jsx)("div", { className: ih()(m5.wx, i), children: n }),
            l && (0, S.jsx)("div", { className: m5.Qs, children: s }),
        ],
    });
}
var m6 = n(885996),
    m8 = n(144165),
    m7 = n(664121),
    m9 = n(950305),
    Ae = n(943775),
    At = n(123791),
    An = n(900797),
    Ai = n(611643);
let As = T.createContext({ isOpen: !1, toggleOpen: () => {} });
function Al(e) {
    let { children: t } = e,
        [n, i] = T.useReducer((e) => !e, !1),
        s = T.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, S.jsx)(As.Provider, { value: s, children: t(n) });
}
Al.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(As),
        l = i ? An.t : gP.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, S.jsxs)(ie.D, {
        className: ih()(Ai.L, t),
        onClick: s,
        children: [
            (0, S.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, S.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Ar = n(627363),
    Aa = n(243217),
    Ao = n(328968),
    Au = n(163437),
    Ad = n(3432);
function Ac(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Ag = n(562312),
    Am = (((u = {})[(u.LOADING = 0)] = "LOADING"), (u[(u.DONE = 1)] = "DONE"), (u[(u.ERROR = 2)] = "ERROR"), u);
function AA(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: g,
            isCancelled: m,
            isOrphanedGuildSubscription: A,
            renewalPlan: E,
        } = (0, f.cf)(
            [dO.A, dL.A, Ao.A, sj.A],
            () => {
                let e,
                    n = dO.A.get(r),
                    i = null != n ? dL.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? Ao.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Au.PJ)(o.skuFlags),
                    d = u && null != s ? sj.A.getGuild(s) : void 0,
                    c = (0, Au.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = dO.A.get(t.planId) ?? void 0;
                }
                return {
                    appId: a,
                    isGuildSubscription: u,
                    isOrphanedGuildSubscription: g,
                    plan: n,
                    sku: i,
                    storeListing: o,
                    subscriptionForGuild: d,
                    isCancelled: c,
                    renewalPlan: e,
                };
            },
            [s, r, l, t],
        ),
        { data: h } = (0, Ar.YY)(a),
        x = T.useMemo(() => (null != h ? (0, Ae.A)(h, 100) : null), [h]),
        p = g?.deleted ?? !1,
        _ = null != g && (0, Au.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, eY.Ay)(),
        [b] = (0, mR.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tF.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ac(t.currentPeriodEnd),
        j = 0 === i;
    return (0, S.jsxs)(m4, {
        headerClassName: Ag.dL,
        header:
            !1 === j
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsxs)("div", {
                              className: Ag.VW,
                              children: [
                                  null != x &&
                                      (0, S.jsx)(m8._, { src: x.href, imageClassName: Ag.Z2, width: 40, height: 40 }),
                                  (0, S.jsxs)("div", {
                                      className: Ag.aF,
                                      children: [
                                          (0, S.jsx)(N.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? U.intl.string(U.t["7kqy7W"]),
                                          }),
                                          (0, S.jsx)(Q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? U.intl.string(U.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, S.jsx)("div", {
                              className: Ag.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, S.jsx)(AS, {
                                      subscription: t,
                                      app: h,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: A,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, S.jsx)(om.y, { type: om.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, S.jsx)(Ap, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, S.jsx)(Ap, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, S.jsx)(Ap, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, S.jsxs)("div", {
                className: Ag.zH,
                children: [
                    (0, S.jsx)(Ax, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsxs)("span", {
                                          className: Ag.yW,
                                          children: [(0, S.jsx)(m7.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, S.jsxs)("span", {
                                              className: Ag._t,
                                              children: [
                                                  (0, S.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, S.jsx)(gd.Ay, { guild: c, size: gd.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, S.jsxs)("span", {
                                  className: Ag.yW,
                                  children: [(0, S.jsx)(m9.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, S.jsx)(AE, { invoicePreview: b, subscriptionPlan: o }),
                    (0, S.jsx)(Ax, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: Ac(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, S.jsx)(Ah, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, S.jsx)(Af, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: p,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, S.jsx)(AT, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function AE(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, S.jsx)(Ax, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, u_.CE)((0, u_.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, S.jsx)(Ax, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, u_.CE)((0, u_.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, S.jsx)(Ax, {
        title: U.intl.string(U.t.KI7ERx),
        content: (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, S.jsx)(sA.m, {
                        text: U.intl.format(U.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, S.jsx)(Q.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, S.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function Ah(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u_.CE)((0, u_.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, S.jsx)(Ax, {
            title: U.intl.string(U.t.hIhAM3),
            content: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: n }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, S.jsx)(Ax, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function Ax(e) {
    let { title: t, content: n } = e;
    return (0, S.jsxs)("div", {
        className: Ag.nM,
        children: [
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", className: Ag.u4, children: n }),
        ],
    });
}
function Ap(e) {
    let { type: t, title: n } = e;
    return (0, S.jsx)(al.p, {
        messageType: "warning" === t ? al.Y.WARNING : al.Y.ERROR,
        className: Ag.Xm,
        children: (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
    });
}
function AS(e) {
    let {
            app: t,
            storeListing: i,
            sku: s,
            subscription: l,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, Au.Se)(s),
        { analyticsLocations: g } = (0, eY.Ay)(),
        [m, A] = T.useState(!1),
        E = (0, At.C)(t.id),
        h = (0, f.bG)([dL.A], () => dL.A.getParentSKU(i.skuId), [i.skuId]),
        x = T.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        p = 0 !== x.length;
    async function I() {
        try {
            A(!0);
            let { subscription: e } = await (0, oS.QP)(l, g);
            if (null == e) return;
            (0, sT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, S.jsx)(t, { ...n, storeListing: i, subscription: Aa.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, S.jsxs)("div", {
        className: Ag.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t["E8G/tr"]),
                        onClick: function () {
                            (0, sT.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, S.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            p &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: x,
                            app: t,
                            subscriptionGroup: h,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function AT(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, S.jsx)(Al, {
        children: (e) =>
            (0, S.jsxs)("div", {
                className: Ag.PX,
                children: [
                    (0, S.jsxs)("div", {
                        className: Ag.wV,
                        children: [
                            e && (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, S.jsx)(Al.Toggle, {
                                className: Ag.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, S.jsx)(m6.FY, { header: i, icon: (0, Ad.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Af(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, S.jsx)("div", {
                className: Ag.Ji,
                children: (0, S.jsx)(t8.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, S.jsx)(om.y, { type: om.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, S.jsx)("div", {
                  className: Ag.Ji,
                  children: (0, S.jsxs)(m1.$T, {
                      color: m1.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, S.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, S.jsx)("div", {
                  className: Ag.Ji,
                  children: (0, S.jsx)(t8.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, S.jsx)(mD.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var AI = (((d = {}).HOME = "HOME"), (d.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), d);
n(938796);
var A_ = n(38405);
let AN = (0, f.UT)(dO.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = dO.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && A_.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cl.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AC = n(240248),
    Ay = n(237218),
    Ab = n(763064);
function Av(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, S.jsx)("button", {
                className: Ab.x6,
                onClick: () => l((e) => !e),
                children: (0, S.jsxs)(Q.E, {
                    className: Ab.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, S.jsx)(An.t, { color: n8.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, S.jsx)(gP.a, { color: n8.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = T.useState(null),
        c = T.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    T.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, S.jsxs)("div", {
            children: [
                (0, S.jsx)(Q.E, {
                    ...i,
                    className: Ab.Qs,
                    lineClamp: s ? void 0 : n,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var Aj = n(920352);
function AO(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, Ay.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = AN(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ah._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, S.jsxs)(m4, {
              className: ih()(Aj.iE, i),
              header: (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsxs)("div", {
                          className: Aj.qd,
                          children: [
                              null != a &&
                                  (0, S.jsx)(m8._, { src: a.href, imageClassName: Aj.rW, width: 48, height: 48 }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)(N.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, S.jsx)(Q.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, AC.uJ)(r) &&
                      (0, S.jsx)("div", {
                          className: Aj.h_,
                          children: (0, S.jsx)(Av, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, S.jsx)("div", {
                          className: Aj.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, S.jsx)(m6.FY, { header: n, icon: (0, Ad.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var AL = n(185438),
    AR = n(683380);
function AD(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Ae.A)(t, 100),
        u = (0, Au.PJ)(r.flags),
        d = u ? m7.R : m9.UserIcon,
        c = u ? U.intl.string(U.t["46YF2D"]) : U.intl.string(U.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, f.bG)([sj.A], () => (u && null != g ? sj.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [dL.A],
            () => {
                if (null != a) return dL.A.get(a);
            },
            [a],
        ),
        E = Ac(n.currentPeriodEnd);
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsxs)("div", {
                className: AR.wx,
                children: [
                    null != o && (0, S.jsx)(m8._, { src: o.href, imageClassName: AR.Z2, width: 48, height: 48 }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, S.jsxs)("div", {
                                className: AR.p4,
                                children: [
                                    (0, S.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: AR.N4,
                                        children: [(0, S.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, S.jsxs)("span", {
                                                    className: AR.vP,
                                                    children: [
                                                        (0, S.jsx)(gd.Ay, { guild: m, size: gd.Ay.Sizes.SMOL }),
                                                        (0, S.jsx)(N.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: U.intl.format(U.t["7ZD8p1"], {
                                                                guildName: m.name,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)(Al, {
                children: (e) =>
                    (0, S.jsxs)("div", {
                        className: AR._B,
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t["goe+hk"]) }),
                            e &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t["Q8qJ+5"], {}),
                                        }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, S.jsx)(Al.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, S.jsxs)("div", {
                className: AR.x0,
                children: [
                    (0, S.jsx)(AO, {
                        storeListing: i,
                        className: AR.o3,
                        cta: (0, S.jsxs)("div", {
                            className: AR.cJ,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: U.intl.string(U.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, S.jsx)(
                                  AO,
                                  {
                                      storeListing: e,
                                      cta: (0, S.jsx)(Q.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: U.intl.format(U.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, S.jsx)(AP, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function AP(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, AL.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, S.jsx)(AO, {
        storeListing: t,
        cta: (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class AG extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, S.jsxs)(m1.$T, {
                  color: m1.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      U.intl.format(U.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function AM(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = T.useState({ route: AI.HOME }),
        { route: l } = i;
    function r() {
        s({ route: AI.HOME });
    }
    let a = (e) => {
            (s({ route: AI.SWITCH_APP_PLANS, ...e }), n(U.intl.string(U.t.VFqtkP), r));
        },
        [o, u] = T.useState({});
    T.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Am.LOADING })),
                (0, m2._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Am.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Am.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, m3.E)(),
        c = d !== m3.mJ.LOADED;
    switch (l) {
        case AI.HOME:
            return (0, S.jsx)(S.Fragment, {
                children: t.map((e) =>
                    (0, S.jsx)(
                        AG,
                        {
                            subscription: e,
                            children: (0, S.jsx)(AA, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Am.LOADING : (o[e.id] ?? Am.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AI.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, S.jsx)(AD, { ...m, navigateToHome: r });
        default:
            (0, im.xb)(l);
    }
}
var AU = n(707989);
function AV(e) {
    let { onGoBack: t } = e,
        n = (0, f.yK)(
            [o$.A],
            () =>
                o$.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = T.useState();
    return (
        null == i && (i = (0, S.jsx)(Ak, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, S.jsxs)("div", {
            children: [
                i,
                (0, S.jsx)("div", {
                    className: AU.A,
                    children: (0, S.jsx)(AM, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, S.jsx)(Ak, {
                                    title: e,
                                    onBack: () => {
                                        (t(), s(void 0));
                                    },
                                }),
                            );
                        },
                    }),
                }),
            ],
        })
    );
}
function Ak(e) {
    let { onBack: t, title: n } = e;
    return (0, S.jsxs)("div", {
        className: AU.D,
        children: [
            (0, S.jsx)(sg.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, S.jsx)(m0.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, S.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Aw = n(366999),
    AF = n(391659);
function AB(e) {
    let t,
        n,
        {
            showChargingUpState: i,
            rowValueText: s,
            endsAt: l,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = U.intl.string(cY.default["/S02sx"])), (n = U.intl.string(cY.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === t0.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ih()({ [AF.Hs]: i, [AF.mT]: !i }),
        d = ih()({ [AF.CQ]: i, [AF.ZM]: !i }),
        c = ih()({ [AF.EM]: !i });
    return (0, S.jsxs)("div", {
        className: AF.r6,
        children: [
            (0, S.jsxs)("div", {
                className: AF.Nv,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, S.jsx)("div", {
                    className: AF.ZS,
                    children: (0, S.jsx)("div", {
                        className: u,
                        children: (0, S.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Az = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ah.kX)(t),
        r = l.length > 0,
        a = (0, Aw.Ay)(t.endsAt, Aw.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, S.jsx)("div", {
        children: (0, S.jsxs)("div", {
            className: ih()(n, AF.f8),
            children: [
                (0, S.jsx)("div", {
                    className: AF.J_,
                    children: (0, S.jsxs)("div", {
                        className: AF.Bh,
                        children: [
                            (0, S.jsx)("div", {
                                className: AF.xt,
                                children: (0, S.jsx)(as.t, { size: "md", color: "white", className: AF.T8 }),
                            }),
                            (0, S.jsx)("div", {
                                className: AF.pt,
                                children: (0, S.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, S.jsx)(Q.E, {
                                className: AF.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, S.jsx)(AB, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                    hasPremiumGroup: s,
                }),
            ],
        }),
    });
};
var AY = n(983048);
function AX(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, f.yK)([dO.A], () => [dO.A.get(i), null != l ? dO.A.get(l.planId) : null]);
    if (null == o || ah.Ay.getInterval(i).intervalType !== t0.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ah.z4)(i),
        m = ah.Ay.getDisplayName(i);
    if (a) t = U.intl.string(cY.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ah._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, S.jsxs)("div", {
        className: AF.Bh,
        children: [
            (0, S.jsx)("div", {
                className: ih()({
                    [AF.bY]: g,
                    [AF.sr]: o.skuId === t0.pe.TIER_0,
                    [AF.lP]: o.skuId === t0.pe.TIER_1,
                    [AF.eb]: o.skuId === t0.pe.TIER_2,
                }),
                children: g
                    ? (0, S.jsx)(c2._, { size: "md", color: "currentColor", className: AF.Kk })
                    : (0, S.jsx)(as.t, { size: "md", color: "currentColor", className: AF.Kk }),
            }),
            (0, S.jsxs)("div", {
                className: AF.pt,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, S.jsx)(N.D, {
                            className: AF.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                className: AF.PJ,
                variant: "text-md/semibold",
                children: U.intl.format(U.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let AH = function (e) {
    let { className: t, entitlements: n } = e,
        i = W()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, f.yK)([dx.A], () => dx.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([o$.A], () => o$.A.getPremiumSubscription()),
        r = (0, f.bG)([o$.A], () => null == o$.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t0.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)("div", {
                className: ih()(t, AF.xF, AF.J_),
                children: Object.keys(i).map((e) =>
                    (0, S.jsx)(
                        AX,
                        {
                            planId: e,
                            count: i[e].length,
                            userPremiumSubscription: l,
                            user: o,
                            unconsumedFractionalPremiumUnits: s,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(Q.E, {
                            className: AF.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, S.jsx)(AY.i, {}),
                    ],
                }),
        ],
    });
};
var AW = n(902782);
function AK(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        [l] = (0, mR.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tF.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? AW.r : AW.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ah.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = dO.A.get(o);
    tx()(null != u, "Missing plan");
    let d = (0, u_.$g)(l.total, l.currency);
    return (
        u.interval === t0.WT.YEAR
            ? (t = U.intl.format(U.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === t0.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? U.intl.format(U.t.m27GpI, {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                        })
                      : U.intl.format(U.t["9xf5Vx"], {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, S.jsx)(Q.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function AZ(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, S.jsx)(AK, { subscription: t, withOverheadSeparator: n });
}
var Aq = n(963897),
    AQ = n(689255);
let A$ = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function AJ() {
    return (0, S.jsx)(oy.Z, {
        className: AQ.wb,
        type: oy.Z.Types.CUSTOM,
        children: (0, S.jsxs)(sC.A, {
            align: sC.A.Align.CENTER,
            children: [
                (0, S.jsx)(si.A, { game: null, size: si.M.SMALL, className: AQ.pV }),
                (0, S.jsx)("span", { className: AQ.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function A0(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, g4._)(e, t));
}
function A1() {
    let e = (0, f.bG)([dx.A], () => dx.A.getForApplication(t0.tv), [], A0);
    return (
        T.useEffect(() => {
            (0, dQ.LM)(t0.tv);
        }, []),
        (0, S.jsx)(n9.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && ah.Ay.hasAccountCredit(e)
                    ? (0, S.jsx)(AH, { className: AQ.fX, entitlements: e })
                    : (0, S.jsx)(AJ, {}),
        })
    );
}
function A2() {
    return (0, S.jsx)("hr", { className: AQ.hr });
}
let A3 = function () {
        var e;
        let t = (0, f.bG)([o$.A], () => o$.A.getPremiumTypeSubscription()),
            n = (0, g6.A)({ subscriptionFilter: (e) => Aq.Hy.has(e.status) }),
            i = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [oQ.A],
                () => (null != t && null != t.paymentSourceId ? oQ.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([o$.A], () => o$.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oI.A], () => oI.A.isBusy),
            o = (0, ca.Y)(),
            u = mP.A.useField("subsection"),
            d = mP.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, ia._)(null != u ? A$[u] : h.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, f.bG)([o$.A], () => o$.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, f.bG)(
                [o$.A],
                () =>
                    Object.values(o$.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, f.bG)([o$.A], () =>
                Object.values(o$.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mx.f)({ enabled: A }),
            x = (0, f.yK)([o$.A], () => (0, mr.eP)(E, (e) => o$.A.getSubscriptionById(e)), [E]),
            p = (0, cr.A)({ forceFetch: !0 }),
            _ = (0, cc.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(_ && !(p.unactivatedUnits.length > 0)) &&
                (p.fractionalState !== t0.xc.NONE || p.unactivatedUnits.length > 0);
        return (T.useEffect(() => {
            d &&
                r &&
                o &&
                x.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                mP.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, x.length]),
        T.useEffect(
            () => (
                tl.h.wait(() => {
                    ((0, cl.zS)(), oS.hP(), (0, c3.CD)(), oS.$o());
                }),
                function () {
                    mP.A.resetState();
                }
            ),
            [],
        ),
        td.A.enabled)
            ? (0, S.jsx)(oc.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, S.jsx)(mq, { onGoBack: () => mP.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, S.jsx)(AV, { onGoBack: () => mP.A.setState({ subsection: null }) })
                    : (0, S.jsx)("div", {
                          className: AQ.kL,
                          children: (0, S.jsxs)("div", {
                              className: AQ.Qs,
                              children: [
                                  s ? (0, S.jsx)(Aq.Sb, {}) : null,
                                  null != t
                                      ? (0, S.jsx)(Aq.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, S.jsx)(Aq.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, S.jsxs)("section", {
                                          children: [
                                              (0, S.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: AQ.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: AQ.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, S.jsx)(Az, {
                                                  className: AQ.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, S.jsx)(A1, {}),
                                  m > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(A2, {}),
                                              (0, S.jsx)(mT, {
                                                  count: m,
                                                  onClickManageSubscription: () => mP.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(A2, {}),
                                              (0, S.jsx)(mJ, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (mP.A.setState({ subsection: eO.PZ }),
                                                          tc.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, S.jsxs)("div", {
                                          ref: c,
                                          children: [(0, S.jsx)(A2, {}), (0, S.jsx)(mh, { servers: x })],
                                      }),
                                  (0, S.jsx)(A2, {}),
                                  null != t ? (0, S.jsx)(AZ, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, S.jsx)("div", { className: ih()(AQ.kL, AQ.Lq), children: (0, S.jsx)(om.y, {}) });
    },
    A5 = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, S.jsx)(A3, {}),
    }),
    A4 = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [A5],
    }),
    A6 = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [A4] }),
    A8 = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: g3.L,
        usePersistentBadge: function () {
            let e = (0, g5.l)();
            return T.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, S.jsx)(i5.E, { size: "xs", color: n8.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [A6],
    }),
    A7 = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [c1, g2, A8, d9, uJ],
    });
var A9 = n(540999),
    Ee = n(306471),
    Et = n(964355),
    En = n(172272);
let Ei = (0, E.zD)(h.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isAxeEnabled),
        setValue: (e) => (0, ra.x)({ axeEnabled: e }),
    }),
    Es = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ra.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var El = n(276086),
    Er = n(354328);
let Ea = (0, E.zD)(h.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Er.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_components", e);
        },
    }),
    Eo = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, Er.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_text_overrides", e);
        },
    }),
    Eu = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, Er.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_text", e);
        },
    }),
    Ed = (0, E.zD)(h.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Er.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, El.L)("highlight_void_toggleables", e);
        },
    }),
    Ec = (0, E.sN)(h.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: En.YR,
        markers: Array.from({ length: En.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => En.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            En.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Eg = (0, E.zD)(h.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ra.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Em = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: En.YR,
        markers: Array.from({ length: En.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => En.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            En.Or.getState().setVerticalSpacing(e);
        },
    }),
    EA = (0, E.zZ)(h.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Es, Eg, Ec, Em, Ea, Eu, Eo, Ed, Ei],
    });
var EE = n(246605),
    Eh = n(274184);
function Ex(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = T.useState(s ?? ""),
        u = T.useRef(null),
        [d, c] = T.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        T.useEffect(() => g, []),
        (0, S.jsx)(t8.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, S.jsx)(sf.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            (c(0), l(null));
                            return;
                        }
                        u.current = setTimeout(() => {
                            (c(1),
                                r(e).then((t) => {
                                    (c(null == t ? 2 : 3), null != t && l(e));
                                }));
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let Ep = (0, E.E2)(h.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, f.bG)([Eh.Ay], () => Eh.Ay.getActionTriggeredSurveyOverride());
            return (0, S.jsx)(Ex, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EE.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    ES = (0, E.zD)(h.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => M.HZ.useSetting(),
        setValue: (e) => {
            M.HZ.updateSetting(e);
        },
    });
var ET = n(396478),
    Ef = n(173936),
    EI = n(103557),
    E_ = n(414079),
    EN = n(148810),
    EC = n(380610),
    Ey = n(986238),
    Eb = n(428524),
    Ev = n(252149),
    Ej = n(221851);
let EO = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    EL = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function ER(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ED extends T.Component {
    handleRemoveBuildOverride = () => {
        this.props.onBuildOverrideRemoved(this.props.project);
    };
    handleOverrideIdChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { id: e });
    };
    handleOverrideTypeChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { type: e, id: "" });
    };
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: s } = this.props;
        return (0, S.jsxs)(sC.A, {
            direction: sC.A.Direction.VERTICAL,
            className: ih()(Eb.oS, Ej.SX, Ev.N, Eb.nM),
            children: [
                (0, S.jsx)(E_.A, {
                    className: ih()(Eb.lL, { [Eb.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, S.jsxs)(sC.A, {
                    className: Ej.QB,
                    children: [
                        (0, S.jsx)(sC.A.Child, {
                            basis: "50%",
                            children: (0, S.jsx)(sc.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: EL,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, S.jsx)(sC.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, S.jsx)(sf.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, S.jsxs)(sC.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, S.jsx)(Q.E, {
                                className: Eb.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, S.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: Eb.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, S.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class EP extends T.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EC.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: W().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !W().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return W().without(EO, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: i };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        (delete t[e], this.setState({ buildOverrides: t }));
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: W().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, EN.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: W().cloneDeep(e),
                errors: {},
                didSave: !0,
                saving: !1,
            });
        } else if (400 === t.status) {
            let e = t.body;
            this.setState({ errors: e, saving: !1, didSave: !1 });
        } else this.setState({ saving: !1, didSave: !1 });
    };
    handleLinkGeneration = () => {
        let { buildOverrides: e } = this.state;
        (0, sT.openModal)((t) => (0, S.jsx)(EG, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, S.jsx)(ET.pp, {
            theme: nW.A.theme,
            className: ih()(Ej.eT, Ej.SX),
            children: (0, S.jsx)(ET.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, S.jsx)(
                      ED,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, S.jsx)(v.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, S.jsx)(sA.m, {
                  text: "Generate Public Link",
                  children: (0, S.jsx)(sg.K, {
                      variant: "secondary",
                      icon: Ef.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(v.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: ER(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, S.jsx)(om.y, { className: Ej.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                ER(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, S.jsx)(Q.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, S.jsx)(n9.n, {
            children: (0, S.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(sc.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !s,
                    }),
                    l,
                    e,
                    (0, S.jsxs)(l2.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class EG extends T.Component {
    state = {
        ttlSeconds: 3600,
        releaseChannel: "all",
        userIds: new Set(),
        userIdEntry: "",
        userIdEntryError: null,
        allowedVersions: [],
        allowedVersionEntry: "",
        allowedVersionEntryError: null,
        publicLink: " ",
        statusText: null,
        status: 0,
        allowLoggedOut: !1,
    };
    setUserEntryError = (e) => {
        this.setState({ userIdEntryError: e });
    };
    setStatusMessage = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: n });
        };
    })();
    handleUserIDEntry = (e) => {
        if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
        let t = new Set(e.split(/[,\s]+/).filter(Boolean));
        this.setState({ userIdEntry: e, userIds: t });
    };
    setAllowedVersionError = (e) => {
        this.setState({ allowedVersionEntryError: e });
    };
    handleAllowedVersionEntry = (e) => {
        this.setState({ allowedVersionEntry: e });
    };
    handleAllowedVersionEnter = (e) => {
        e.key === sw.dh.ENTER && this.handleAddAllowedVersion();
    };
    handleAddAllowedVersion = () => {
        let { allowedVersions: e, allowedVersionEntry: t } = this.state;
        return 0 === (t = t.trim()).length
            ? this.setAllowedVersionError("Enter a valid version number!")
            : e.indexOf(t) >= 0
              ? this.setAllowedVersionError("You already added that version!")
              : void this.setState({
                    allowedVersions: [...e, t],
                    allowedVersionEntry: "",
                    allowedVersionEntryError: "",
                });
    };
    handleRemoveAllowedVersion = (e) => {
        let { allowedVersions: t } = this.state;
        ((t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t }));
    };
    handleAllowLoggedOut = (e) => {
        this.setState({ allowLoggedOut: e });
    };
    handleExpirationChange = (e) => {
        this.setState({ ttlSeconds: e });
    };
    handleReleaseChannelChange = (e) => {
        this.setState({ releaseChannel: e });
    };
    handleExperiments = (e) => {
        if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
        try {
            let t = JSON.parse(e);
            for (let e in t) {
                if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                    return void this.setState({ experimentsError: `${e} is an invalid experiment name` });
                if ("number" != typeof t[e])
                    return void this.setState({ experimentsError: `${e} has an invalid bucket override` });
            }
        } catch (e) {
            this.setState({ experimentsError: `Unable to parse experiments ${e.message}` });
            return;
        }
        this.setState({ experiments: e, experimentsError: void 0 });
    };
    generatePayload = () => ({
        overrides: this.props.buildOverrides,
        meta: {
            release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
            ttl_seconds: this.state.ttlSeconds,
            user_ids: Array.from(this.state.userIds),
            allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
            allow_logged_out: this.state.allowLoggedOut,
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, EN.SB)(e);
        !1 !== t.error
            ? this.setStatusMessage(JSON.stringify(t.error), 0)
            : (this.setState({ publicLink: t.url.toString() }),
              0 === e.meta.user_ids.length &&
                  this.setStatusMessage(
                      "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                      1,
                  ));
    };
    isMobile() {
        return ER(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: s,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = Ey.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, S.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, S.jsx)(sc.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ey.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(sc.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ey.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, S.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, S.jsx)(sf.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iQ.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, S.jsx)(sc.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, S.jsx)(EI.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, S.jsx)(EI.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, S.jsx)(t7.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, S.jsx)("div", {});
        let n = al.Y.INFO;
        switch (t) {
            case 0:
                n = al.Y.ERROR;
                break;
            case 1:
                n = al.Y.WARNING;
        }
        return (0, S.jsx)(al.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, S.jsx)(sS.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, S.jsx)(dF.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let EM = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: EP });
var EU = n(256311),
    EV = n(883600);
let Ek = (0, E.E2)(h.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, f.bG)([EV.A], () => EV.A.overrideId());
        async function t(e) {
            let t = EV.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EU.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, S.jsx)(Ex, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EU.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Ew = n(506774);
let EF = new Date("2018-01-01"),
    EB = (0, E.Tf)(h.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => M.pK.useSetting() === oN.default.fromTimestamp(EF.getTime()),
        onClick: () => (Ew.w.set("lastChangeLogDate", EF), M.pK.updateSetting(oN.default.fromTimestamp(EF.getTime()))),
    }),
    Ez = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, f.bG)([ro.default], () => ro.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, f.bG)(
                [ro.default],
                () => ro.default.disableAppCollectionsCache || ro.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ra.x)({ disableAppCollectionsCache: e }),
    }),
    EY = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isForcedCanary),
        setValue: (e) => {
            (0, ra.x)({ canary: e });
        },
    }),
    EX = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.sourceMapsEnabled),
        setValue: (e) => (0, ra.x)({ sourceMapsEnabled: e }),
    }),
    EH = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ra.x)({ onlyShowPreviewAppCollections: e }),
    });
var EW = n(10094),
    EK = n(683760);
let EZ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t0.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t0.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t0.PremiumTypes.TIER_2 },
    ],
    Eq = (0, E.Hn)(h.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EZ,
        clearable: !0,
        useValue: () =>
            (0, f.bG)([EK.A], () => {
                let e = EK.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, EW.O)(null, void 0)
                : null === e
                  ? (0, EW.O)(void 0, void 0)
                  : (0, EW.O)(0 === e ? null : e, void 0);
        },
    });
var EQ = n(374042);
let E$ = (0, E.E2)(h.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, f.bG)([Eh.Ay], () => Eh.Ay.getSurveyOverride());
            return (0, S.jsx)(Ex, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EE.xr(e),
                fetchOverride: (e) => (0, EQ.B)(e, !0) ?? null,
            });
        },
    }),
    EJ = (0, E.zZ)(h.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Eq, E$, Ep, Ek, EB, EY, ES, EH, Ez, EX, EM],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    E0 = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ra.x)({ logAnalyticsEvents: e }),
    }),
    E1 = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ra.x)({ logGatewayEvents: e }),
    }),
    E2 = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.preventPopoutClose),
        setValue: (e) => (0, ra.x)({ preventPopoutClose: e }),
    }),
    E3 = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.logKeyboardMismatches),
        setValue: (e) => (0, ra.x)({ logKeyboardMismatches: e }),
    }),
    E5 = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ra.x)({ logOverlayEvents: e }),
    }),
    E4 = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingQuestEvents),
        setValue: (e) => (0, ra.x)({ logQuestEvents: e }),
    }),
    E6 = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isTracingRequests),
        setValue: (e) => (0, ra.x)({ trace: e }),
    }),
    E8 = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [E1, E5, E6, E0, E3, E2, E4] }),
    E7 = (0, E.t_)(h.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [EJ, E8, EA],
    }),
    E9 = (0, E.i4)(h.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ee.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: n,
                    isLoggingOverlayEvents: i,
                    isLoggingAnalyticsEvents: s,
                    isTracingRequests: l,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: d,
                    isStaff: c,
                } = (0, f.cf)([ro.default, A9.A, lx.default], () => ({
                    layoutDebuggingEnabled: ro.default.layoutDebuggingEnabled,
                    isDeveloper: A9.A.isDeveloper,
                    isLoggingGatewayEvents: ro.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ro.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ro.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ro.default.isTracingRequests,
                    isForcedCanary: ro.default.isForcedCanary,
                    isSourceMapsEnabled: ro.default.sourceMapsEnabled,
                    isAxeEnabled: ro.default.isAxeEnabled,
                    preventPopoutClose: ro.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ro.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ro.default.disableAppCollectionsCache,
                    isStaff: lx.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, En.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = En.Or.getState(),
                x = M.HZ.useSetting();
            return t
                ? [
                      (0, S.jsxs)(
                          ti.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nm.openUserSettings)(h.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              M.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, ra.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, ra.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, ra.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, S.jsxs)(
                          ti.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nm.openUserSettings)(h.X.LOGGING);
                              },
                              children: [
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, ra.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, ra.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, ra.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, ra.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, ra.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, S.jsxs)(
                          ti.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nm.openUserSettings)(h.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, ra.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, S.jsx)(
                                      ti.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, ra.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(Et.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: En.YR,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, S.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(Et.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: En.YR,
                                                              onChange: (e) => E(e),
                                                              "aria-label": "Vertical Spacing",
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                          }),
                                                  },
                                                  "vertical-spacing",
                                              ),
                                          ],
                                      }),
                              ],
                          },
                          "design-tools",
                      ),
                      c
                          ? (0, S.jsx)(
                                ti.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lh() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [E7],
    });
var he = n(127062),
    ht = n(25044),
    hn = n(80703),
    hi = n(123292),
    hs = n(857250),
    hl = n(683438),
    hr = n(890856),
    ha = n(100392),
    ho = n(102609),
    hu = n(271478),
    hd = n(386976),
    hc = n(257433),
    hg = n(32523),
    hm = n(96919),
    hA = n(688151),
    hE = n(863763);
function hh(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = T.useState(s),
        [a, o] = T.useState(!1),
        u = T.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, f.bG)([dv.default], () => dv.default.getId()),
        c = (0, f.bG)([dv.default], () => {
            let e = dv.default.getInstallationForTracking();
            return null == e ? null : (0, hn.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hc.iN)(t, g),
        A = (0, hc.Fm)(t, g),
        E = (0, f.yK)([rE.A], () =>
            W()
                .sortBy(rE.A.getRecentExposures(hA.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = T.useCallback(
            (e) => {
                (0, ux.C)((0, ha.yA)(n), () => {
                    ((0, lc.P)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: lg.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, S.jsx)(hr.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hE.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    ux.p5 &&
                                        (0, S.jsx)(ie.D, {
                                            onClick: h,
                                            children: (0, S.jsx)(Ef.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", {
                        className: hE.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, S.jsx)("div", { className: hE.Os, children: x });
    let p = "";
    return (
        (p =
            t.system === ho.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hA.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, S.jsxs)("div", {
            className: hE.Os,
            children: [
                x,
                (0, S.jsx)("div", {
                    children: (0, S.jsx)(hu.g, {
                        label: t.system === ho.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: p,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, S.jsx)("div", {
                    className: hE.h_,
                    children:
                        null == A
                            ? (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, S.jsxs)("div", {
                          children: [
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hE.id,
                                  children: "Server Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hE.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hE.id,
                                  children: "Override Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hE.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hE.id,
                                  children: "Recent Exposures",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hE.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, S.jsx)("div", {
                          className: hE.id,
                          children: (0, S.jsx)(hi.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, S.jsx)(sd.c, { className: hE.yF }),
            ],
        })
    );
}
function hx(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = T.useState(null != i),
        [r, a] = T.useState(!1),
        o = T.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, f.bG)([rE.A], () => rE.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rE.A, sj.A, i1.A], () => {
            if (t.system === ho.l5.LEGACY) return null == rE.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sj.A.getGuildsArray().some((t) => null != i1.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rE.A], () =>
            W()
                .sortBy(rE.A.getRecentExposures(hA.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([dv.default, sj.A, rE.A, i1.A], () => {
            let e = t.system === ho.l5.LEGACY,
                i = t.name,
                s = dv.default.getId(),
                l = W().sortBy(sj.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rE.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hA.RE.NOT_ELIGIBLE)
                    : (i1.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hA.RE.NOT_ELIGIBLE);
                (l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`));
            }
            let o = W()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== ho.l5.LEGACY,
        E = (0, f.yK)([sj.A], () => W().sortBy(sj.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = T.useState(() => sO.A.getGuildId() ?? sO.A.getLastSelectedGuildId()),
        p = E.find((e) => e.id === h)?.name,
        I = (0, f.bG)(
            [i1.A],
            () => {
                if (A && null != h) return i1.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, f.bG)([i1.A, dv.default], () => {
            if (!A) return;
            let e = dv.default.getId();
            return i1.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, S.jsx)(ie.D, {
            onClick: o,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hE.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)("span", { children: t.title }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", { className: hE.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, S.jsxs)("div", {
              className: hE.Os,
              children: [
                  C,
                  (0, S.jsx)(hu.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, S.jsx)("div", {
                          className: hE.h_,
                          children: (0, S.jsx)(sc.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: h ?? void 0,
                              options: E.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => x(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, S.jsx)("div", {
                      className: hE.h_,
                      children: d
                          ? (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === ho.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, S.jsxs)("div", {
                          children: [
                              (0, S.jsxs)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hE.id,
                                  children: ["Server Descriptor", null != p ? ` (${p})` : ""],
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hE.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hE.id,
                                  children: "Client Eligibility",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hE.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hE.id,
                                    children: "Guild Assignments",
                                }),
                                (0, S.jsx)(Q.E, { variant: "code", className: hE.AS, children: g }),
                                t.system === ho.l5.LEGACY &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hE.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "code",
                                                className: hE.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hE.id,
                                    children: "Override Descriptor",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hE.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hE.id,
                                    children: "Recent Exposures",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hE.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, S.jsx)("div", {
                            className: hE.id,
                            children: (0, S.jsx)(hi.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, S.jsx)(sd.c, { className: hE.yF }),
              ],
          })
        : (0, S.jsx)("div", { className: hE.Os, children: C });
}
let hp = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hd.op)(),
                { experiments: n, overridesInfo: i } = (0, hg.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([dv.default], () => {
                    let e = dv.default.getInstallationForTracking();
                    return null == e ? null : (0, hn.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hm.oC)((0, hm.R3)((0, hm.Fm)(s), l), a);
            return (0, S.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, S.jsxs)(Z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, S.jsxs)(Q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                ux.p5 &&
                                    (0, S.jsx)(hi.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, ux.C)(r, () => {
                                                (0, lc.P)((0, hs.o)("Installation ID copied!", lg.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, S.jsx)(hl.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hx : hh;
                              return (0, S.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: l[e.id],
                                      defaultOpen: null != l[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, S.jsx)("div", {
                              className: hE.p$,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    hS = (0, E.zZ)(h.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hp] }),
    hT = (0, E.t_)(h.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hS] }),
    hf = (0, E.i4)(h.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: he.c,
        useMenu: ht.A,
        buildLayout: () => [hT],
    }),
    hI = (0, E.WI)(h.X.DEVELOPER_SECTION, {
        useTitle: () => U.intl.string(U.t["+gHUHA"]),
        usePredicate: () => A9.A.isDeveloper,
        buildLayout: () => [hf, E9],
    });
var h_ = n(682348),
    hN = n(871633),
    hC = n(751075),
    hy = n(843402);
let hb = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function hv() {
    let e = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([se.Ay], () => hb(...se.Ay.getOverrides()));
    T.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, hy.a2)(), hy.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = T.useMemo(
        () =>
            e.reduce((e, t) => ((0, hN.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function hj(e) {
    let { gameHistory: t } = hv();
    return {
        namedGames: T.useMemo(
            () =>
                t
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .take(e)
                    .toArray(),
            [t, e],
        ),
        totalCount: t.length,
    };
}
function hO(e) {
    let { namedGames: t, totalCount: n } = hj(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function hL() {
    let { namedGames: e } = hj(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        Ar.Ay.fetchApplications([t, n].filter(im.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i8.A], () => [t, n].map(i8.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, S.jsx)(si.A, { game: i, size: si.M.MEDIUM_LARGE }), shape: hC.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, S.jsx)(si.A, { game: s, size: si.M.MEDIUM }), shape: hC.e0.ROUNDED } : null,
          };
}
let hR = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = hO(2);
            return U.intl.format(U.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = hL();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hN.n1)(e))) && (0, nI.xl)(),
    }),
    hD = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [hR] });
var hP = n(311059),
    hG = n(406535),
    hM = n(57129);
let hU = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(hM.default.A0FVCV),
        useSubtitle: () => U.intl.string(hM.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    hV = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(hM.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(hM.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    hk = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [hP._, hU, hV, hD],
    }),
    hw = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    hF = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [hw] });
var hB = n(365258);
let hz = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(hM.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(hM.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(hM.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(hM.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, hB.g8)(t, e);
        if (null == i) return;
        let s = (0, hB.Xc)(e);
        (0, sT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, S.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var hY = n(498642),
    hX = n(573435),
    hH = n(260509),
    hW = n(771810);
function hK(e) {
    let { guild: t, size: n } = e,
        i = (0, hH.Iv)(t, n, !1, !0),
        s = (0, hH.Rb)(t);
    return null != i
        ? (0, S.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, S.jsx)("div", {
              className: hW.F,
              children: (0, S.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function hZ(e) {
    let { guild: t, size: n } = e;
    return (0, S.jsx)(hX.Ay, {
        className: hW.z,
        mask: hX.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, S.jsx)(hK, { guild: t, size: n }),
    });
}
var hq =
    (((c = {}).SERVER_ORDER = "server-order"),
    (c.RECENTLY_JOINED = "recently-joined"),
    (c.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (c.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    c);
let hQ = {
    "recently-joined": (e) =>
        e
            .concat()
            .sort((e, t) =>
                null == e.joinedAt
                    ? -1
                    : null == t.joinedAt
                      ? 1
                      : e.joinedAt === t.joinedAt
                        ? 0
                        : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime(),
            ),
    "activity-sharing-on": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return !i && s ? -1 : i && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                s = t.includes(n.id);
            return i && !s ? -1 : !i && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var h$ = n(618118);
function hJ(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, f.bG)([hY.A], () => hY.A.getMemberCount(t.id));
    return (0, S.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, S.jsx)("div", { className: h$.FO, children: (0, S.jsx)(hZ, { guild: t, size: 48 }) }),
            (0, S.jsx)("div", {
                className: h$.QH,
                children: (0, S.jsx)(t7.d, {
                    label: t.name,
                    description: U.intl.format(U.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let h0 = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: i,
            setSearchQuery: s,
            sortOrder: l,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: g,
        } = (function () {
            let [e, t] = (0, T.useState)(""),
                [n, i] = (0, T.useState)("server-order"),
                s = (0, f.bG)([c7.Ay], () => c7.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sj.A], () => sj.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = M.Pw.useSetting(),
                [o, u] = (0, T.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await M.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, T.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, T.useState)(() => hQ[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(hQ[e](r, a)), i(e));
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    (t ? i.delete(n) : i.add(n), d([...i]));
                },
                isActivityRestricted: function (e) {
                    return o.includes(e);
                },
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: function () {
                    c ? d([]) : d(s);
                },
                numTotalGuilds: s.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        m = (0, T.useId)(),
        A = (0, T.useRef)(null),
        E = (0, T.useMemo)(
            () => [
                { id: hq.SERVER_ORDER, label: U.intl.string(U.t.STMPJ2), value: hq.SERVER_ORDER },
                { id: hq.RECENTLY_JOINED, label: U.intl.string(U.t.CbaapP), value: hq.RECENTLY_JOINED },
                { id: hq.ACTIVITY_SHARING_ON, label: U.intl.string(hM.default.ZI51JZ), value: hq.ACTIVITY_SHARING_ON },
                {
                    id: hq.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(hM.default["+kxafn"]),
                    value: hq.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, S.jsxs)("div", {
        className: h$.iE,
        children: [
            t,
            (0, S.jsxs)("div", {
                className: h$.N1,
                children: [
                    (0, S.jsx)(hl.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (tc.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            tc.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tc.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: U.intl.string(U.t["H+nRYw"]),
                        "aria-label": U.intl.string(U.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, S.jsxs)("div", {
                            className: h$.gO,
                            children: [
                                (0, S.jsx)(am.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, S.jsx)(gr.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": U.intl.string(U.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, S.jsx)(ti.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, S.jsx)(
                                                        ti.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (tc.default.track(
                                                                    I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: g,
                                                                    },
                                                                ),
                                                                    r(i));
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, S.jsxs)(ie.D, {
                                            ...e,
                                            innerRef: A,
                                            className: h$.Ku,
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, S.jsx)(gP.a, { size: "xs", color: n8.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(hi.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? U.intl.string(U.t["7lxcLO"]) : U.intl.string(U.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)(sE.A, {
                "aria-live": "polite",
                role: "region",
                children: U.intl.format(hM.default.EvzDff, { count: n.length }),
            }),
            (0, S.jsxs)("ul", {
                className: h$.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, S.jsx)("div", {
                            className: h$.pb,
                            children: (0, S.jsx)(Q.E, {
                                className: h$.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, S.jsx)(
                            hJ,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var h1 = n(68322);
let h2 = (0, E.E2)(h.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [U.intl.string(hM.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, S.jsx)("div", {
                      className: h1.l,
                      children: (0, S.jsx)(iJ.w, {
                          type: "warning",
                          message: U.intl.string(hM.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, S.jsx)(h0, { notice: e });
        },
    }),
    h3 = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [hz, h2, hF],
    }),
    h5 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(hM.default.khuuzv),
        useSubtitle: () => U.intl.string(hM.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    h4 = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, S.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, S.jsx)(
                            Q.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    h6 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(hM.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(hM.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    h8 = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(hM.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [h5, h6, h4],
        useSearchTerms: () => [U.intl.string(U.t.VOszPA)],
    }),
    h7 = (0, E.t_)(h.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        buildLayout: () => [hk, h3, h8],
    }),
    h9 = (0, E.i4)(h.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        icon: h_._,
        buildLayout: () => [h7],
    });
var xe = n(712440),
    xt = n(370997);
let xn = (0, E.E2)(h.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xt.Ay,
    useSearchTerms: () => [U.intl.string(U.t["f6kk+r"])],
});
var xi = n(478016),
    xs = n(508770),
    xl = n(77468),
    xr = n(289498),
    xa = n(573648),
    xo = n(874490),
    xu = n(370480),
    xd = n(968309);
let xc = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xg = n(169869),
    xm = n(814925),
    xA = n(733110),
    xE = n(479785),
    xh = n(757036),
    xx = n(555837),
    xp = n(43990),
    xS = n(241524),
    xT = n(51965),
    xf = n(377368),
    xI = n(631368),
    x_ = n(212739),
    xN = n(30370),
    xC = n(181666),
    xy = n(553875),
    xb = n(660594);
function xv() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xI.$)()),
            (t = (0, x_.O)()),
            (s = null != (i = (0, f.bG)([xN.A], () => xN.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xI.C.NONE || t
                ? { variant: xI.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xI.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eY.Ay)(tF.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xf.yW)(a),
        u = (0, xS.A)("(max-width: 485px)");
    if (l === xI.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xI.C.HAS_ACCESS:
        case xI.C.BLOCK_CLAIM:
            ((c = U.intl.string(xy.default["7PdsMK"])),
                (g = (0, S.jsx)(xT.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(xy.default.CubeLC),
                    onClick: () => {
                        (0, sT.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, S.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xI.C.NO_ACCESS:
            ((c = U.intl.string(xy.default.NwkRTZ)),
                (g = (0, S.jsx)(tH.A, {
                    defaultTextOverride: U.intl.string(xy.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t0.pe.TIER_2,
                })));
            break;
        default:
            (0, im.xb)(l);
    }
    return (0, S.jsxs)(eY.f5, {
        value: a,
        children: [
            (0, S.jsxs)("div", {
                className: xb.bV,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, S.jsx)(as.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, S.jsx)(xp.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, S.jsx)("div", {
                        className: e,
                        children: (0, S.jsxs)("div", {
                            className: xb.Nr,
                            children: [
                                (0, S.jsxs)("div", {
                                    className: xb.Tp,
                                    children: [
                                        (0, S.jsx)("div", {
                                            className: xb.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, S.jsx)("div", { className: xb.$h }),
                                        (0, S.jsx)("div", { className: xb.Rv }),
                                        (0, S.jsx)("div", { className: xb.Lw }),
                                    ],
                                }),
                                (0, S.jsxs)("div", {
                                    className: xb.Mn,
                                    children: [
                                        (0, S.jsxs)("div", {
                                            className: xb.mY,
                                            children: [
                                                (0, S.jsx)("img", {
                                                    className: xb.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xb.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, S.jsx)("div", { className: xb.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)("div", { className: xb.yF }),
                                            (0, S.jsxs)("div", {
                                                className: xb.sQ,
                                                children: [
                                                    (0, S.jsx)(uc.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n8.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, S.jsx)(Q.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: U.intl.format(xC.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xf.Hx.CONNECT),
                                                                    (0, xd.A)({
                                                                        platformType: I.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    }));
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var xj = n(201718),
    xO = n(321078),
    xL = n(672130),
    xR = n(379848),
    xD = n(688901);
function xP(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mu.i.AUTO_DISMISS), [t]),
        (0, S.jsx)("div", { className: xD.Ad, children: (0, S.jsx)(xs.E, { type: "new", variant: "brand" }) })
    );
}
function xG(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, S.jsxs)("div", {
        className: xD.kL,
        children: [
            i,
            (0, S.jsxs)("div", {
                className: xD.FS,
                children: [
                    (0, S.jsxs)("div", {
                        className: xD.TK,
                        children: [
                            (0, S.jsx)(xR.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, S.jsx)(xP, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, S.jsx)(Q.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, S.jsx)(v.$, { text: U.intl.string(U.t.vD60Pv), onClick: l }),
        ],
    });
}
function xM() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, S.jsx)(xG, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, S.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xd.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let xU = "/assets/9df988a227916145.png";
function xV() {
    return (0, S.jsx)(xG, {
        title: U.intl.string(xC.default["9cLtDI"]),
        body: U.intl.format(xC.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, S.jsx)("img", { src: xU, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xd.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function xk() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, S.jsx)(xG, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, S.jsx)("img", { src: xU, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xd.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var xw = n(783419),
    xF = n(534952),
    xB = n(211180),
    xz = n(247259);
function xY(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, f.cf)(
            [xN.A],
            () => ({
                isJoining: xN.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xN.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : xN.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xN.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, f.bG)([sj.A], () => sj.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, S.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xl.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, S.jsxs)("div", {
            className: xz.iA,
            children: [
                (0, S.jsxs)("div", {
                    className: xz.XX,
                    children: [
                        (0, S.jsx)(gd.Ay, { size: gd.Ay.Sizes.SMALL, guild: n.guild, className: xz.$f }),
                        (0, S.jsxs)("div", {
                            className: xz.Vn,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, S.jsx)(ng.Anchor, {
                                    href: xa.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: xz.R,
                        children: s,
                    }),
            ],
        })
    );
}
function xX(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xx.G)()), (i = (0, xh.L)(t0.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, S.jsx)(xV, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, S.jsx)(xk, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, S.jsx)(xM, {})
              : null;
}
function xH(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = T.useState(u.friendSync),
        [A, E] = T.useState(u.visibility),
        [h, x] = T.useState(u.metadataVisibility),
        [p, f] = T.useState(u.showActivity),
        [_, N] = T.useState(null),
        [C, y] = T.useState(null),
        [b, j] = T.useState(!1),
        [O, L] = T.useState([]),
        R = (0, xo.ML)(u.type),
        D = xa.A.get(R);
    T.useEffect(() => {
        (m(u.friendSync), E(u.visibility), x(u.metadataVisibility), f(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: _, inProgressMetadataVisibility: C },
        G = T.useRef(P);
    return (
        T.useEffect(() => {
            G.current = P;
        }),
        T.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), xl.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xl.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, S.jsxs)("div", {
            className: xz.FI,
            children: [
                ((t = xa.A.get(u.type)),
                (n = xa.A.get(R)),
                (i = "1" === (u.metadata ?? {})[xw.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, S.jsx)(sA.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, S.jsx)(xm.A, {
                            color: n8.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, S.jsx)(xi.U, { size: "xs", color: n8.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, S.jsxs)("div", {
                    className: xz.Il,
                    children: [
                        (0, S.jsx)("img", {
                            alt: n.name,
                            className: xz.gj,
                            src: (0, cs.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsxs)("div", {
                                    className: xz.$p,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: xz.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, S.jsx)("div", { className: xz.cG, children: s }),
                                    ],
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: xz.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? U.intl.format(xB.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, S.jsx)(ie.D, {
                            className: xz.uH,
                            onClick: function () {
                                let e = xa.A.get(u.type);
                                (0, sT.openModal)((t) =>
                                    (0, S.jsx)(sS.a, {
                                        title: U.intl.formatToPlainString(U.t.U5x12f, { name: e.name }),
                                        subtitle: U.intl.format(U.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: U.intl.string(U.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: U.intl.string(U.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            xc.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, S.jsx)(s7.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, S.jsx)(uO.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, S.jsx)(xX, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xu.An)(t[xw.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xg.xE)(t, xz.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xg.dy)(t, xz.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xg.ED)(t, xz.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xg.ub)(t, xz.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xg.gZ)(t, xz.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xg.HU)(t, xz.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, S.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: xz.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xa.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, S.jsx)(
                                    "div",
                                    { className: xz.Z3, children: (0, S.jsx)(xs.E, { type: "new", variant: "brand" }) },
                                    "badge",
                                ),
                                (0, S.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: xz.vt,
                                        children: U.intl.format(U.t.Up2ni7, {
                                            helpdeskUrl: eC.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = U.intl.string(U.t["LVh3/5"])));
                    return (
                        s && (l = U.intl.string(U.t.i4jeWR)),
                        n.push(
                            (0, S.jsx)(
                                "div",
                                {
                                    className: xz.jy,
                                    children: (0, S.jsx)(v.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": U.intl.string(U.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      xl.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), L(O), j(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, S.jsx)("div", { className: xz.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, S.jsx)(t7.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xl.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, S.jsx)(t7.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            (f(e), xl.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xa.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, S.jsx)(t7.d, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xd.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xl.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, S.jsxs)("div", {
                    className: xz.HZ,
                    children: [
                        (0, S.jsx)(t7.d, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xd.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xl.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, S.jsx)(sd.c, {});
                })(),
                u.revoked
                    ? (0, S.jsx)(al.p, {
                          messageType: al.Y.INFO,
                          children: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xd.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, S.jsx)(t8.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, S.jsx)(xY, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, S.jsx)(xE.A, { partner: u.type }),
            ],
        })
    );
}
function xW(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: xz.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, S.jsxs)("div", {
                          className: xz.Il,
                          children: [
                              (0, S.jsx)("img", { alt: n.name, className: ih()(xz.gj, xz.sN), src: i }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)("div", {
                                          className: xz.$p,
                                          children: (0, S.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: xz.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: xz.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, S.jsx)(ie.D, {
                                  className: xz.uH,
                                  onClick: () =>
                                      (0, xt.d1)(n, t.scopes, () => {
                                          xe.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, S.jsx)(uO.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, S.jsx)("div", {
                      className: xz.HZ,
                      children: (0, S.jsx)(t7.d, {
                          label: U.intl.string(U.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              xj.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function xK() {
    let e = (0, xo.gn)(),
        t = (0, i7.A)((0, xF.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, S.jsxs)("div", {
        className: xz.lA,
        children: [
            t.map((e) => null != e && (0, S.jsx)(xL.A, { application: e, innerClassName: xz.U$ }, e.id)),
            e.map((e) =>
                (0, S.jsx)(
                    xr.A,
                    { type: e.type, innerClassName: xz.U$, location: tF.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function xZ(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xa.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, S.jsx)(om.y, { type: om.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, S.jsx)(ET.pp, {
                    theme: r,
                    className: xz.p$,
                    children: (0, S.jsx)(ET.SG, {
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: U.intl.format(U.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, S.jsx)(
                                xW,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, S.jsx)(
                                xH,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xl.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, S.jsx)("div", { className: xz.V, children: t })
    );
}
let xq = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, S.jsx)(t8.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, S.jsx)(xK, {}) });
        },
        useSearchTerms: () => [
            U.intl.string(U.t.Zhcj9X),
            U.intl.string(U.t.QqTz8b),
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    xQ = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
                t = (0, f.bG)([xN.A], () => xN.A.isFetching()),
                n = (0, f.bG)([xN.A], () => xN.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xA.default], () => ({
                    authorizedAppsFetchState: xA.default.getFetchState(),
                    authorizedApps: xA.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, xO.A)(lx.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, dV.Ay)(),
                o = (0, f.bG)([oJ.default], () => oJ.default.locale);
            return (T.useEffect(() => {
                i === xA.FetchState.NOT_FETCHED && xe.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(xv, {}),
                          (0, S.jsx)(xZ, {
                              fetching: t || l || (r.length > 0 && i !== xA.FetchState.FETCHED),
                              accounts: n,
                              appIdentities: r,
                              authorizedApps: s,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            xl.A.fetch();
        },
        useSearchTerms: () => [
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    x$ = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, f.bG)([xN.A], () => xN.A.getAccounts()),
                t = T.useMemo(
                    () =>
                        xa.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = T.useState(0),
                [s, l] = T.useState(t),
                r = t !== s;
            r && (l(t), i(0));
            let a = T.useMemo(() => t[n], [t, n]),
                o = (0, i7.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, ug.RD)(o),
                g =
                    a?.type === I.fg2.RIOT_GAMES || a?.type === I.fg2.LEAGUE_OF_LEGENDS
                        ? U.intl.string(xB.default["1S6oAo"])
                        : o?.name,
                m = null != a && c,
                A = m && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !m || A || i((e) => e + 1),
                T.useMemo(
                    () =>
                        A
                            ? {
                                  type: p.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: U.intl.format(xB.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, A],
                )
            );
        },
        buildLayout: () => [xq, xQ],
    }),
    xJ = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        useSubtitle: () => U.intl.string(U.t.G9JfLg),
        buildLayout: () => [xn],
        initialize: () => (
            xe.A.fetch(),
            () => {
                xt.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    x0 = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: oc.L,
        buildLayout: () => [x$, xJ],
    }),
    x1 = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: Ef.LinkIcon,
        buildLayout: () => [x0],
    });
var x2 = n(625657),
    x3 = n(592598),
    x5 = n(773371),
    x4 = n(532294),
    x6 = n(672396);
let x8 = x9(null);
function x7() {
    var e;
    let t = x9(x8);
    ((e = x8),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (tc.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (x8 = t)));
}
function x9(e) {
    let t = x4.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sZ.Ay.getOverlayKeybind(),
        s = sZ.Ay.getOverlayChatKeybind();
    return {
        enabled: x5.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: x3.A.isNotificationDisabled(x6.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sp.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sp.dI)(s.shortcut) : null,
        text_opacity_slider: x4.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? x5.default.enabled,
    };
}
var pe = n(237984),
    pt = n(63035);
function pn(e) {
    (e.preventDefault(), e.stopPropagation());
}
function pi(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: s,
        action: l,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, S.jsxs)("div", {
        className: ih()(pt.HS, d),
        children: [
            (0, S.jsxs)(hr.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, S.jsx)("div", { className: pt.x_, children: t }),
                    (0, S.jsxs)("div", {
                        className: pt.rN,
                        children: [
                            null != n && (0, S.jsx)("div", { className: pt.$t, children: n }),
                            (0, S.jsxs)("div", {
                                className: pt.c8,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: pt.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, S.jsx)("div", { className: pt.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: pt.Om, children: a }),
        ],
    });
}
let ps = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, S.jsx)(pi, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, S.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, pe.b)(tF.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var pl = n(31300),
    pr = n(780907),
    pa = n(684013),
    po = n(56562),
    pu = n(311043),
    pd = n(569926),
    pc = n(41984),
    pg = n(918825),
    pm = n(296027),
    pA = n(562519);
let pE = 5 * n(927813).A.Millis.DAY,
    ph = new pA.A("overlay_survey_timestamps");
function px(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(ph.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < pE) ||
            Array.from(ph.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sT.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), ph.add(i), (n) => (0, S.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function pp() {
    (0, sl.sL)("overlay-settings");
}
function pS(e) {
    let { className: t, game: n } = e;
    return (0, sl.NP)() && null != n && n.elevated
        ? (0, S.jsx)("div", {
              className: t,
              children: (0, S.jsx)(al.p, {
                  messageType: al.Y.WARNING,
                  action: (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: pp,
                  }),
                  children: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var pT = n(760751),
    pf = n(9302),
    pI = n(656513);
let p_ = new Set([
    pc.AR.INITIALIZING,
    pc.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    pc.AR.WAITING_FOR_MODULE_TRACKING,
    pc.AR.WAITING_FOR_OVERLAY_OPEN,
    pc.AR.WAITING_FOR_POPOUT_OPEN,
    pc.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    pc.AR.WAITING_FOR_REACT_INITIALIZATION,
    pc.AR.WAITING_FOR_PID_FOCUS,
    pc.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function pN(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, S.jsx)(pI.N, {
        className: pt.uR,
        collapsibleContent: (0, S.jsx)("div", { className: pt.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, S.jsx)(pi, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ih()(pt.AC, n),
                action: (0, S.jsxs)("div", {
                    className: pt.rc,
                    children: [
                        s.action,
                        l
                            ? (0, S.jsx)(gP.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, S.jsx)(ii._, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let pC = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = sn();
        (0, pd.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [pm.default],
                () => (null == e || null == n ? null : pm.default.getTrackedGameByPid(n)),
                [e, n],
                i6(),
            ),
            { data: s } = (0, pd.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [pT.A, tm.A, pu.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, se.hw)(e, !1, [pT.A, tm.A, pu.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [se.Ay, pT.A, tm.A, pu.A],
                () => (null == e ? null : (0, se.xU)(e, se.Ay, pT.A, tm.A, pu.A)),
                [e],
                i6(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, pf.supportsLegacy)(),
            E = !(0, pf.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([pm.default], () => pm.default.getGlobalEnabledStatus());
        function p(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case pg.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), pr.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case pg.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), pr.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case pg.OverlayToggledClientSettingType.LEGACY:
                    (pa.A.setEnabled(t, x), (0, pg.Q)(t, pg.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case pg.OverlayToggledClientSettingType.OOP:
                    (pa.A.setEnabled(h, t), (0, pg.Q)(t, pg.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                px(
                    i ? pg.OverlayToggledClientSettingType.LEGACY_GAME : pg.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === pc.Ue.Disabled,
            b = i?.state === pc.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && p_.has(i.state) && !y,
            j = i?.overlayMethod === pc.Ue.OutOfProcess,
            O = i?.overlayMethod === pc.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === pc.Ue.Hook,
            R = i?.state === pc.AR.OVERLAY_CRASHED || i?.state === pc.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case b && j:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
                                        Q.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case b && O:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
                                        Q.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case b && L:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== po.aI.BORDERLESS_FULLSCREEN:
                                        return U.intl.string(U.t.mJmbeC);
                                    case E:
                                        return U.intl.string(U.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return U.intl.string(U.t.WiY24u);
                                    case !x:
                                        return U.intl.string(U.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
                                        return U.intl.string(U.t.XcGEcs);
                                    default:
                                        return U.intl.string(U.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [U.intl.string(U.t.OFC2aw), null];
                    case I:
                        return [U.intl.string(U.t.m7X4az), null];
                    case _:
                        return [U.intl.string(U.t["9DUS5l"]), null];
                    case D:
                        return [U.intl.string(U.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [U.intl.string(U.t.VWUn0a), null];
                    case v:
                        if (j) return [U.intl.string(U.t["s8+CFq"]), null];
                        if (L) return [U.intl.string(U.t.JEEdqt), null];
                        if (O) return [U.intl.string(U.t.pzBMwY), null];
                        return [U.intl.string(U.t["2Xhy9k"]), null];
                    case null == i:
                        return [U.intl.string(U.t.vwHPRi), null];
                    case y: {
                        let e = i?.fullscreenType === po.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            pr.Ay.getDetectableGames();
        });
        let [M, V] = T.useMemo(
            () =>
                v
                    ? ["text-muted", n8.A.colors.TEXT_MUTED.css]
                    : b && O
                      ? ["text-feedback-warning", n8.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", n8.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && L
                          ? ["text-strong", n8.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n8.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, O, j, L],
        );
        return null == e
            ? null
            : (0, S.jsxs)(pN, {
                  onExpand: m,
                  className: g ? pt.tx : void 0,
                  title: (0, S.jsxs)(S.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, S.jsx)(sA.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, S.jsx)(xm.A, {
                                        size: 16,
                                        color: n8.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, S.jsx)(xi.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n8.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != G ? G : void 0,
                  header: (0, S.jsxs)(S.Fragment, {
                      children: [
                          b || v
                              ? (0, S.jsx)(pl.k, { size: "xxs", color: V })
                              : (0, S.jsx)("div", { className: pt.W4 }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: U.intl.string(U.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, S.jsx)(si.A, { game: t, pid: e?.pid, size: si.M.MEDIUM }),
                  "aria-label": U.intl.string(U.t["87O5GC"]),
                  action: (0, S.jsx)(ie.D, {
                      onClick: (e) => pn(e),
                      children: (0, S.jsx)(t7.d, {
                          checked: (o && x) || (d && h),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (pr.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (pa.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (pa.A.setEnabled(t, t),
                                              pr.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? pg.OverlayToggledClientSettingType.LEGACY_GAME
                                                : pg.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? pg.OverlayToggledClientSettingType.OOP_GAME
                                                : pg.OverlayToggledClientSettingType.OOP),
                                      null != l && px(l, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !x && o,
                                          s = !h && d,
                                          l = !o && x,
                                          r = !d && h;
                                      switch (!0) {
                                          case n && (i || s) && (l || r):
                                              return "both";
                                          case n && (i || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && x) || (d && h)),
                              );
                          },
                      }),
                  }),
                  warning: (0, S.jsx)(pS, { className: pt.Hh, game: e }),
                  children: [
                      (0, S.jsx)(pi, {
                          title: U.intl.string(U.t["7BlVIs"]),
                          description: U.intl.string(U.t.ndgADE),
                          hint: x ? void 0 : U.intl.string(U.t.cAFVsL),
                          "aria-label": U.intl.string(U.t["7BlVIs"]),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t7.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? p(e, pg.OverlayToggledClientSettingType.OOP)
                                              : p(e, pg.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pt.Kz }),
                              ],
                          }),
                      }),
                      (0, S.jsx)(pi, {
                          title: U.intl.string(U.t.BfFpW1),
                          description: U.intl.string(U.t.OzInYk),
                          hint: h ? void 0 : U.intl.string(U.t["3sYHXm"]),
                          "aria-label": U.intl.string(U.t.BfFpW1),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t7.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? p(e, pg.OverlayToggledClientSettingType.LEGACY)
                                              : p(e, pg.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pt.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = sn();
        return null != e;
    },
    useSearchTerms: () => [U.intl.string(U.t["9cb1Uz"])],
});
var py = n(206885);
function pb(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i8.A], () => (null != n ? n : i8.A.getApplication(t?.id)), [n, t]);
    return (0, S.jsx)(si.A, { game: s, pid: i, size: si.M.SMALL });
}
function pv(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, pd.I)(t?.id);
    let o = (0, f.cf)([se.Ay, pT.A, tm.A, pu.A], () => (0, se.xU)(t, se.Ay, pT.A, tm.A, pu.A)),
        u = (0, f.cf)([pT.A, tm.A, pu.A], () => (0, se.hw)(t, !1, [pT.A, tm.A, pu.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, S.jsx)(pi, {
            title: t.name,
            icon: (0, S.jsx)(pb, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(t7.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && px(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, S.jsx)("div", { className: pt.Kz }),
                ],
            }),
        })
    );
}
let pj = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([pm.default], () =>
                    pm.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!0)).filter((e) => !(0, hN.n1)(e)),
                l = (0, i7.A)(s.map((e) => e.id)),
                r = !(0, pf.supportsLegacy)();
            function a(e) {
                pa.A.setEnabled(e, i);
                let t = se.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pg.Q)(e, pg.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && px(pg.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                pr.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, pf.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, S.jsx)(pi, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: pt.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t7.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              py.O && (0, S.jsx)("div", { className: pt.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(pN, {
                      onExpand: t,
                      className: e ? pt.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, S.jsx)(ie.D, {
                          onClick: (e) => pn(e),
                          children: (0, S.jsx)(t7.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pt.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pt.XG,
                              children: s.map((e, t) =>
                                  (0, S.jsx)(
                                      pv,
                                      {
                                          rawGame: e,
                                          clientSettingType: pg.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: U.intl.format(U.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.BfFpW1)],
    }),
    pO = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([pm.default], () =>
                    pm.default.getGlobalEnabledStatus(),
                ),
                s = !(0, pf.supportsOutOfProcess)(),
                l = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!0)).filter((e) => !(0, hN.n1)(e)),
                r = (0, i7.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                pa.A.setEnabled(i, e);
                let s = se.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pg.Q)(e, pg.OverlayToggledClientSettingType.OOP, s),
                    t && px(pg.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                pr.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (py.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, S.jsx)(pi, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: pt.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t7.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              py.O && (0, S.jsx)("div", { className: pt.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(pN, {
                      onExpand: t,
                      className: e ? pt.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, S.jsx)(ie.D, {
                          onClick: (e) => pn(e),
                          children: (0, S.jsx)(t7.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pt.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pt.XG,
                              children: l.map((e, t) =>
                                  (0, S.jsx)(
                                      pv,
                                      {
                                          rawGame: e,
                                          clientSettingType: pg.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: U.intl.format(U.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["7BlVIs"])],
    }),
    pL = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [pC, pO, pj, ps],
    }),
    pR = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([x4.default], () => !x4.default.disableClickableRegions),
        setValue: (e) => {
            pa.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    pD = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getOverlayKeybind()),
                t = !(0, pf.supportsLegacy)(),
                n = !(0, pf.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([se.Ay], () => [se.Ay.canShowAdminWarning, se.Ay.getVisibleGame()], []),
                l = (0, sl.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sZ.DV)(e?.shortcut ?? []);
            return (0, S.jsx)("div", {
                className: pt.hc,
                children: (0, S.jsxs)("div", {
                    className: pt.eH,
                    children: [
                        (0, S.jsxs)("div", {
                            className: pt.Bu,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: U.intl.string(U.t.VsAZcC),
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pt.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pt.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, S.jsx)("div", {
                            className: pt.IH,
                            children: (0, S.jsx)(sx.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tx()(null != e, "Keybind should never be undefined"),
                                        i0.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.VsAZcC)],
    });
var pP = n(515183),
    pG = n(682763);
let pM = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = sn();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = sn();
            return null != e && (0, pP.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = sn(),
                n = t?.id,
                i = (0, f.bG)([x3.A], () => x3.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, pP.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = i9.A.getStreamerActiveStreamMetadata()),
                    (s = st(
                        t,
                        (i =
                            null != (n = se.Ay.getVisibleGame())
                                ? se.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i8.A.getApplication(s) ?? void 0 });
            null != l && (0, pG.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    pU = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [pD, pM, pR] });
var pV = n(93465);
let pk = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: pV.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: pV.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: pV.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: pV.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: pV.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: pV.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ny.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([x3.A], () => x3.A.isNotificationDisabledBySetting(pV.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pw(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([x3.A], () => x3.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            pa.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let pF = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pk.map(pw),
    }),
    pB = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [pF],
    }),
    pz = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([x4.default], () => x4.default.getAvatarSizeMode()),
        setValue: (e) => {
            pa.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    pY = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([x4.default], () => x4.default.getDisplayNameMode()),
        setValue: (e) => {
            pa.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    pX = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([x4.default], () => x4.default.getDisplayUserMode()),
        setValue: (e) => {
            pa.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pH = n(391973),
    pW = n(489277),
    pK = n(897720),
    pZ = n(38502);
function pq() {
    let e = pW.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = pZ.A.getWidget(e.id);
    return null != t && (0, pK.ZO)(t) ? t : null;
}
n(392164);
let pQ = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pq();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pq();
        null != t &&
            (e < 1
                ? (0, pH.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pH.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var p$ = n(450740),
    pJ = n(968898),
    p0 = n(288737);
function p1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new p0.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new cp.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
let p2 = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([x4.default], () => ({
                    avatarSizeMode: x4.default.getAvatarSizeMode(),
                    displayNameMode: x4.default.getDisplayNameMode(),
                    displayUserMode: x4.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    p1(U.intl.string(U.t.C0ZDvo), !0, !1),
                    p1(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    p1(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([pW.A, pZ.A], () => {
                    let e = pW.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pZ.A.getWidget(e.id);
                    return null != t && (0, pK.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = p1(t.username)).user = t), e) : null, ...l].filter(im.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, S.jsx)(xp.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, S.jsxs)("div", {
                            className: ih()(pt.Y5, e),
                            children: [
                                (0, S.jsx)("div", {
                                    className: pt.kJ,
                                    children: (0, S.jsx)(p$.DH, {
                                        id: "voice-widget",
                                        title: U.intl.string(U.t.KNJ6Vq),
                                        channel: (0, P.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: I.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: s,
                                        avatarSizeMode: n,
                                        widget: I.uss.VOICE,
                                        anchorLeft: !0,
                                        application: null,
                                        stream: null,
                                        streamApplication: null,
                                        streamMetadata: null,
                                        locked: !1,
                                        pinned: !1,
                                        isSettingsPreview: !0,
                                        isPreviewingInGame: !1,
                                        maxDisplayedVoiceStates: a,
                                    }),
                                }),
                                (0, S.jsxs)("div", {
                                    className: pt.R$,
                                    children: [
                                        (0, S.jsx)(pJ.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, S.jsx)(pJ.CS, {}),
                                        (0, S.jsx)(pJ.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, S.jsx)("div", { className: pt.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    p3 = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [p2, pz, pY, pX, pQ],
    });
var p5 = n(54761);
function p4() {
    let [e, t] = (0, me.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, K.Ay)(() => () => {
        t(mu.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsxs)("div", {
                      className: p5.xC,
                      children: [
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: p5.tl,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsxs)("div", {
                                  className: p5.vJ,
                                  children: [
                                      (0, S.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: U.intl.string(U.t.jzjJQg),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: U.intl.string(U.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: p5.lh,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: p5.VV,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mu.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(sd.c, { className: p5.yF }),
              ],
          });
}
function p6() {
    let e = (0, f.bG)([td.A], () => td.A.enabled),
        t = (0, ny.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsx)(iJ.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, nm.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, S.jsx)(sd.c, { className: p5.yF }),
              ],
          })
        : null;
}
let p8 = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                x7(),
                sZ.Ay.addChangeListener(x7),
                x3.A.addChangeListener(x7),
                x4.default.addChangeListener(x7),
                x5.default.addChangeListener(x7),
                e8.isPlatformEmbedded && (0, hy.a2)(),
                () => {
                    (sZ.Ay.removeChangeListener(x7),
                        x3.A.removeChangeListener(x7),
                        x4.default.removeChangeListener(x7),
                        x5.default.removeChangeListener(x7),
                        e8.isPlatformEmbedded && (0, hy.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(p4, {}), (0, S.jsx)(p6, {})] });
            },
        },
        buildLayout: () => [pL, pU, p3, pB],
    }),
    p7 = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: x2.l,
        usePredicate: nv.b_,
        buildLayout: () => [p8],
    });
var p9 = n(687966);
let Se = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    St = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Se] });
var Sn = n(227309),
    Si = n(29160),
    Ss = n(552366),
    Sl = n(938442);
function Sr(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, pd.I)(t.id);
    let o = (0, f.cf)([se.Ay, pT.A, tm.A, pu.A], () => (0, se.xU)(t, se.Ay, pT.A, tm.A, pu.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, f.cf)([se.Ay], () => ({
            canToggleDetection: null == a || se.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: se.Ay.isDetectionEnabled(o),
        })),
        c = (0, f.bG)([se.Ay], () => se.Ay.getVisibleGame()),
        [g, m] = T.useState(!1),
        A = T.useRef(null),
        E = null != c && (0, se.Es)(o) === (0, se.Es)(c),
        h = !s && !g,
        x = !i && !E,
        p = h || x,
        _ = T.useMemo(
            () =>
                (0, hN.n1)(o)
                    ? r
                        ? o.gameName
                        : U.intl.formatToPlainString(U.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = T.useState(_ ?? "???"),
        y = ih()(Sl.tR, {
            [Ss.LO]: !i,
            [Ss.Rw]: i,
            [Ss.FB]: null != o && i,
            [Ss.xL]: r,
            [Ss.fG]: null != l && l.length > 0,
        });
    function b() {
        (pr.Ay.deleteEntry(o),
            l?.forEach((e) => {
                pr.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? pT.A.getDetectableGame(o.id) : null;
        (tc.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hN.n1)(o) ? o.gameName : o.name,
        }),
            (0, sT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, S.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: y,
                children: [
                    (0, S.jsxs)("div", {
                        className: ih()(Ss.$K, Sl.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, S.jsxs)("div", {
                                      className: Ss.HS,
                                      children: [
                                          (0, S.jsx)("div", { className: Ss.mO, children: _ }),
                                          (0, S.jsx)(sA.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, S.jsx)(xm.A, {
                                                  className: Ss.qf,
                                                  size: 18,
                                                  color: n8.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, S.jsx)(xi.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n8.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, S.jsx)("input", {
                                      className: ih()(Ss.mO, Ss.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && pr.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sw.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = o;
                                return (
                                    i || E
                                        ? (e = U.intl.string(U.t.VbV5dv))
                                        : null != n && "" !== n && (e = U.intl.format(U.t["gGeOE+"], { when: n })),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: Ss.GN,
                                        children: (0, S.jsx)(Si.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, e8.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    p &&
                        (0, S.jsx)(am.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, S.jsx)(gr.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": U.intl.string(U.t["UKOtz+"]),
                                    children: (0, S.jsxs)(ti.rX, {
                                        children: [
                                            h &&
                                                (0, S.jsx)(ti.Dr, {
                                                    id: "report",
                                                    label: U.intl.string(U.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, S.jsx)(ti.Dr, {
                                                    id: "remove",
                                                    label: U.intl.string(U.t.N86XcP),
                                                    color: "danger",
                                                    action: b,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, S.jsx)("div", {
                                    className: ih()(Ss._Q, { [Ss.g9]: t.isShown }),
                                    children: (0, S.jsx)(sA.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, S.jsx)(sg.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gi.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, S.jsx)(sA.m, {
                        text: U.intl.string(U.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, S.jsx)(sh.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sT.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, S.jsx)(e, {
                                                  ...t,
                                                  title: U.intl.formatToPlainString(U.t.PZ4fKc, { platform: _ }),
                                                  subtitle: U.intl.formatToPlainString(U.t.ZIQbfb, { platform: _ }),
                                                  actions: [
                                                      {
                                                          text: U.intl.string(U.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: U.intl.string(U.t.Fmjztz),
                                                          onClick: () => {
                                                              (pr.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : pr.Ay.toggleDetection(o);
                            },
                            "aria-label": U.intl.string(U.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, S.jsx)("div", {
                    className: Ss.AQ,
                    children: l.map((e, t) =>
                        (0, S.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, S.jsx)(Sr, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, S.jsx)("div", { className: Ss.PQ }),
                                ],
                            },
                            (0, se.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function Sa() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = hv();
    return 0 === e.length
        ? null
        : (0, S.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, S.jsx)(n9.n, {
                  children: (0, S.jsx)("div", {
                      children: e.map((e) =>
                          (0, S.jsx)(
                              Sr,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === Sn.a7 ? t : void 0 },
                              (0, se.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let So = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, S.jsx)(Sa, {}),
});
var Su = n(424994);
let Sd = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [So, St],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hN.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: Su.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var Sc = n(890497),
    Sg = n(853270),
    Sm = n(969426);
function SA(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([se.Ay], () => se.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, S.jsxs)(aA.l, {
        className: ih()(Sg.H, Sm.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, S.jsx)(Sc.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, S.jsxs)("div", {
                className: ih()(Sg.o, Sl.xM),
                children: [
                    (0, S.jsx)(hi.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, S.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (pr.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SE = n(475007);
function Sh() {
    let e = T.useRef(null);
    return (0, S.jsxs)("div", {
        className: ih()(SE.a, Ej.Gf),
        children: [
            (0, S.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, S.jsx)(am.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, S.jsx)(SA, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, S.jsx)(hi.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: U.intl.string(U.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function Sx() {
    return (0, S.jsx)("div", {
        className: ih()(Sl.tR, Ss.eS, Ss.Rw),
        children: (0, S.jsxs)("div", {
            className: ih()(Ss.$K, Sl.Vd),
            children: [
                (0, S.jsx)("div", { className: Ss.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, S.jsx)(Sh, {}),
            ],
        }),
    });
}
let Sp = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = hv(),
                n = (0, f.bG)([se.Ay], () => se.Ay.getVisibleGame());
            return null == n
                ? (0, S.jsx)(Sx, {})
                : (0, S.jsxs)("div", {
                      className: ih()(Sl.Vd, Ss.C2),
                      children: [
                          (0, S.jsx)(
                              Sr,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === Sn.a7 ? e : void 0,
                              },
                              (0, se.Es)(n),
                          ),
                          (0, S.jsx)(Sh, {}),
                      ],
                  });
        },
    }),
    SS = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [Sp],
    }),
    ST = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [SS, Sd],
    }),
    Sf = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: p9.GameControllerIcon,
        usePredicate: nv.Pi,
        buildLayout: () => [ST],
    }),
    SI = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [Sf, h9, p7, x1],
    });
var S_ = n(631670),
    SN = n(619499),
    SC = n(836602),
    Sy = n(591179),
    Sb = n(402860),
    Sv = n(761508),
    Sj = n(159001),
    SO = n(344346),
    SL = n(919395),
    SR = n(68750);
function SD(e) {
    let { title: t, children: n } = e;
    return (0, S.jsxs)("div", {
        children: [(0, S.jsx)(N.D, { variant: "text-md/medium", className: SR.Vf, children: t }), n],
    });
}
function SP(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, S.jsx)("div", {
        className: ih()(SR.UA, n),
        children: (0, S.jsxs)("div", {
            className: ih()(SR.yt, i),
            children: [
                (0, S.jsx)("div", {
                    className: ih()(SR.Fp, a && SR.Oz),
                    children: (0, S.jsxs)(S.Fragment, {
                        children: [
                            (0, S.jsx)(SD, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, S.jsx)(SD, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, S.jsx)("div", { className: SR.oB, children: t }),
            ],
        }),
    });
}
var SG = n(986687),
    SM = n(101058),
    SU = n(321191),
    SV = n(696451),
    Sk = n(590941);
function Sw() {
    return (0, S.jsxs)("div", {
        className: Sk.p$,
        children: [
            (0, S.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Sk.Sl }),
            (0, S.jsx)(N.D, { className: Sk.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, S.jsx)(Q.E, { className: Sk.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Sk.h8,
                children: (0, S.jsx)(v.$, {
                    variant: "primary",
                    text: U.intl.string(U.t.jQ3pqt),
                    onClick: function () {
                        ((0, t9.pX)(I.BVt.GUILD_DISCOVERY), (0, tW.default)());
                    },
                }),
            }),
        ],
    });
}
var SF = n(81400),
    SB = n(450232),
    Sz = n(252732),
    SY = n(355622),
    SX = n(408018),
    SH = n(479909),
    SW = n(290386),
    SK = n(941933),
    SZ = n(486264);
let Sq = (0, tq.Ld)(),
    SQ = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    S$ = (0, tq.Ld)();
function SJ(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, SW.U)({ location: "profile_customization_about_me" }),
        [u, d] = T.useState(s ?? r),
        [c, g] = T.useState((0, SX.x7)(u)),
        m = T.useRef(r),
        A = T.useRef(!1);
    return (
        T.useEffect(() => {
            if (m.current !== r) {
                let e = (0, SX.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        T.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, SX.x7)(r)));
        }, [s, r, u]),
        (0, S.jsxs)(ao.A, {
            title: t,
            titleId: Sq,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, S.jsx)(SH.Ay, {
                    "aria-describedby": S$,
                    "aria-labelledby": Sq,
                    className: SZ.i,
                    innerClassName: SZ.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: SQ,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: SK.y,
                    type: SY.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, S.jsx)(sE.A, { id: S$, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var S0 = n(821956),
    S1 = n(562819),
    S2 = n(84540),
    S3 = n(467690);
function S5(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eY.Ay)(),
        o = (0, SL.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, SL.CP)(n?.id),
        c = r ? ch.wL : l0.$n;
    return (0, S.jsx)(ao.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: S3.NC,
            children: [
                (0, S.jsx)(c, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, S1.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ih()({ [S3.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S3.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, S0.uZ)(t, n) ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.OrokWm),
                            onClick: function () {
                                (0, S2.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var S4 = n(339984),
    S6 = n(942132);
let S8 = [{ name: "gif", extensions: ["gif"] }];
function S7(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: i,
            sectionTitle: s,
            changeAvatarButtonText: l,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, eY.Ay)(),
        m = c ? ch.wL : l0.$n,
        A = T.useCallback(() => {
            (0, Sz.XD)({
                uploadType: S4.HL.AVATAR,
                analyticsSource: g,
                filters: u ? S8 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, S.jsx)(ao.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, S.jsxs)("div", {
            className: S6.NC,
            children: [
                (0, S.jsx)(m, {
                    className: ih()({ [S6.yj]: c }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S6.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? U.intl.string(U.t.TDjKDm) : U.intl.string(U.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var S9 = n(248778),
    Te = n(810188);
function Tt(e) {
    let { user: t, guildId: n, className: i } = e,
        s = ah.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eY.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, SL.B0)(t, n),
        d = (0, S9.u)("DisplayNameStylesSection"),
        [c, g] = (0, me.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mu.i.TAKE_ACTION),
                tc.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eX.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, S2.p)({ displayNameStyles: null }), tc.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, S2.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, S.jsx)(ao.A, {
        title: U.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, S.jsx)("div", { className: Te.A, children: (0, S.jsx)(xs.E, { type: "new", variant: "brand" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: Te.N,
            children: [
                (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(eH.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eH.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eH.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var Tn = n(637193),
    Ti = n(622410);
function Ts(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, SL.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, Tn.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, S2.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, S.jsx)(ao.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: Ti.u,
            children: [
                (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Tl = n(88524);
function Tr(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: s,
            className: l,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, eY.Ay)(),
        g = d ? ch.wL : l0.$n;
    return (0, S.jsx)(ao.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: Tl.NC,
            children: [
                (0, S.jsx)(g, {
                    className: ih()({ [Tl.yj]: d }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Sz.XD)({ uploadType: S4.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tl.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? U.intl.string(U.t.jHlJNS) : U.intl.string(U.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Ta = n(617061),
    To = n(625613);
function Tu(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: i,
            className: s,
            sectionTitle: l,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, eY.Ay)(),
        d = ah.Ay.canUsePremiumProfileCustomization(t),
        c = (0, SL.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, SL.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, t$.uq)(t0.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? ch.wL : l0.$n;
    return (0, S.jsx)(ao.A, {
        forcedDivider: r,
        borderType: dh.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, S.jsxs)("div", {
            className: To.NC,
            children: [
                (0, S.jsx)(A, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Ta.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ih()({ [To.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: To.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.uMuafO),
                            onClick: function () {
                                (0, S2.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Td = n(515727),
    Tc = n(594401);
function Tg(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = (0, SL.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, SL.Tu)(n?.id),
        [o, u] = (0, me.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, S.jsx)(ao.A, {
        showBorder: d,
        borderType: d ? dh.i.NEW_UPSELL : dh.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, S.jsx)("div", { className: Tc.Ad, children: (0, S.jsx)(xs.E, { type: "new", variant: "brand" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, S.jsxs)("div", {
            className: Tc.NC,
            children: [
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, Td.w)({ analyticsLocations: s, guild: n }), u(mu.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tc.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.nQBruk),
                            onClick: function () {
                                (0, S2.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tm = n(602853),
    TA = n(654107),
    TE = n(999291),
    Th = n(101928),
    Tx = n(819169),
    Tp = n(317097),
    TS = n(508274),
    TT = n(379012);
function Tf(e) {
    let {
            onChange: t,
            onClose: n,
            color: i,
            suggestedColors: s,
            disabled: l,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = T.useRef(null),
        c = (0, Tm.r)(n8.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n8.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Sz.sN)(i),
        A = (0, Tp.Hl)(i),
        E = A === c ? g : A,
        h = m ? n8.A.unsafe_rawColors.WHITE.css : n8.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, Tx.A)(a),
        p = (0, Tx.A)(o),
        [f, _] = T.useState((0, oA.A)());
    return (
        T.useEffect(() => {
            (x !== a || p !== o) && _((0, oA.A)());
        }, [o, a, p, x]),
        (0, S.jsx)(am.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, S.jsx)(TS.VN, {
                    ...e,
                    value: i,
                    onChange: t,
                    suggestedColors: s,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, S.jsxs)("div", {
                    ref: d,
                    className: ih()(TT.oP, { [TT.r9]: l }),
                    children: [
                        (0, S.jsx)(ie.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: TT.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, S.jsx)(aE.PencilIcon, {
                                size: "custom",
                                className: TT.BW,
                                width: 14,
                                height: 14,
                                color: h,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var TI = n(190377);
function T_(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: s,
            preventDisabled: l,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, TE.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, Th.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = ah.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, Tm.r)(n8.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TA.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, S.jsx)(ao.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: ih()(TI.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, S.jsxs)("div", {
                  className: TI.hd,
                  children: [
                      (0, S.jsx)("div", {
                          className: TI.YX,
                          children: (0, S.jsx)(Tf, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: TI.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, S.jsx)("div", {
                          className: TI.YX,
                          children: (0, S.jsx)(Tf, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: TI.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TI.WA,
                              children: (0, S.jsx)(v.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: U.intl.string(U.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function TN(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tq.GV)();
    return (0, S.jsx)(ao.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, S.jsx)(sf.k, {
            "aria-labelledby": o,
            placeholder: l ?? U.intl.string(U.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                i(e === r ? void 0 : e);
            },
            disabled: a,
            spellCheck: !1,
        }),
    });
}
var TC = n(684732),
    Ty = n(576705),
    Tb = n(931175);
function Tv(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([Ty.A], () => Ty.A.can(I.xBc.CHANGE_NICKNAME, r) || Ty.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xh.L)(t0.PremiumTypes.TIER_2);
    return (0, S.jsxs)(ao.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, S.jsx)(sf.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, S2.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, S.jsx)(Tt, { user: l, guildId: r.id, className: Tb.F }),
        ],
    });
}
var Tj = n(233454);
let TO = "/assets/b25da78aa7949feb.png";
function TL(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, dV.Ay)(),
        { analyticsLocations: l } = (0, eY.Ay)(tF.A.PREMIUM_UPSELL_OVERLAY);
    return (T.useEffect(() => {
        n &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: t0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, t$.uq)(t0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, S.jsxs)("div", {
              className: Tj.ry,
              children: [
                  (0, S.jsx)("div", { children: i }),
                  (0, S.jsxs)("div", {
                      className: Tj.Wc,
                      children: [
                          (0, S.jsx)("img", {
                              className: Tj.Tn,
                              alt: U.intl.string(U.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return TO;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return TO;
                                  }
                              })(s),
                          }),
                          (0, S.jsxs)("div", {
                              className: Tj._9,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.dMaDFX),
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, S.jsx)(dE.A, {
                              size: l0.$n.Sizes.LARGE,
                              color: l0.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ah.Ay.isPremium(t)
                                      ? U.intl.string(U.t.AfRWI8)
                                      : U.intl.string(U.t.nkdUym),
                              },
                              subscriptionTier: t0.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var TR = n(203164);
function TD() {
    let e = (0, f.bG)([lx.default], () => {
            let e = lx.default.getCurrentUser();
            return (tx()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xh.L)(t0.PremiumTypes.TIER_2),
        n = (0, f.bG)([SC.A, sj.A], () => sj.A.getGuild(SC.A.selectedGuildId));
    tx()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([SC.A], () => ({ ...SC.A.getPendingChanges(n.id), errors: SC.A.getErrors(n.id) })),
        d = (0, SM.V7)({ userId: e.id, image: i }),
        c = (0, SF.EC)(n.id),
        g = (0, f.bG)([SV.Ay], () => (null == n.id ? null : SV.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([SU.A], () => SU.A.getGuildMemberProfile(e.id, n.id)),
        A = ah.Ay.canUsePremiumProfileCustomization(e),
        E = (0, SL.z5)(i, g?.avatar),
        h = (0, SL.Ac)(l, m?.banner),
        x = (0, TC.l)(o, m?.themeColors),
        p = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, S.jsxs)("div", {
        className: TR.Q,
        children: [
            (0, S.jsx)(
                Tv,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uf.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, S.jsx)(
                TN,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, S2.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, S.jsxs)(TL, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, S.jsx)(
                        S7,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, S.jsx)(SB.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Sz.rM)(e, g?.avatar, (e) => (0, S2.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, S.jsx)(
                        S5,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, S.jsx)(SB.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, S.jsx)(Tt, { user: e, guildId: n.id }),
                    (0, S.jsx)(
                        Ts,
                        { user: e, guild: n, titleIcon: (0, S.jsx)(SB.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, S.jsx)(
                        Tu,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, S.jsx)(SB.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, S.jsx)(
                        Tg,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, S.jsx)(SB.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, S.jsx)(
                        Tr,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Sz.rM)(e, m?.banner, (e) => (0, S2.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, S.jsx)(T_, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, S2.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, S.jsx)(
                        SJ,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, S.jsx)(SB.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, S2.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var TP = n(832131);
function TG(e) {
    (0, sT.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, S.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function TM(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tF.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lx.default], () => {
            let e = lx.default.getCurrentUser();
            return (tx()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([SV.Ay], () => (null != t ? SV.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([SU.A], () => !SU.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([SC.A], () => SC.A.getPendingChanges(t?.id)),
        c = (0, SM.V7)({ userId: s.id, image: o }),
        g = (0, SL.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, SL.B0)(s, t?.id);
    return (T.useEffect(() => () => tl.h.wait(Sj.IM), []), a)
        ? (0, S.jsx)(oc.A, {})
        : r
          ? (0, S.jsxs)(eY.f5, {
                value: i,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(aa.A, { guildId: t.id, onChange: n }),
                                  (0, S.jsx)(SP, {
                                      profilePreviewTitle: (0, S.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: TP.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, S.jsx)(SG.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ah.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: TG,
                                          containerClassName: TP.ti,
                                      }),
                                      nameplatePreview: (0, S.jsx)(SO.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? TP.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, S.jsx)(TD, {}),
                                  }),
                              ],
                          })
                        : (0, S.jsx)(Sw, {}),
                ],
            })
          : (0, S.jsx)(om.y, {});
}
var TU = n(903209),
    TV = n(641130);
function Tk(e) {
    let { children: t, notice: n } = e;
    return (0, S.jsxs)("div", { className: TV.r, children: [n, (0, S.jsx)("div", { children: t })] });
}
var Tw = n(823092),
    TF = n(815996),
    TB = n(379197),
    Tz = n(488430),
    TY = n(457421),
    TX = n(940622),
    TH = n(559474),
    TW = n(757993);
let TK = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, eY.Ay)(tF.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = T.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, TX.mb)(TH.RN.UPSELL_BANNER)),
        (t = (0, TX.mb)(TH.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, f.bG)([TY.A], () => TY.A.getMarketingBySurface(TB.R.EDIT_PROFILE_SETTINGS))),
        (i = T.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: U.intl.string(U.t.QZVVBh),
                          body: U.intl.string(U.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        T.useMemo(
            () => ({ ...i, type: Tz.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, Tw.L_)();
    return (
        T.useEffect(() => {
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, t$.uq)(t0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, S.jsxs)("div", {
            ref: l,
            className: TW.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, S.jsx)("div", {
                    className: TW.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, S.jsx)("img", { src: a, className: TW.Qw, alt: "" }),
                }),
                (0, S.jsxs)("div", {
                    className: TW.Em,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: TW.DD,
                            children: o,
                        }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, S.jsx)(v.$, {
                    onClick: function () {
                        g(() =>
                            (0, TF.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tF.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: U.intl.string(U.t.fYfGgK),
                }),
            ],
        })
    );
};
var TZ = n(451909),
    Tq = n(202639),
    TQ = n(285373),
    T$ = n(835071),
    TJ = n(724651),
    T0 = n(732280),
    T1 = n(590180),
    T2 = n(898461),
    T3 = n(469054),
    T5 = n(601298),
    T4 = n(207803),
    T6 = n(461797);
let T8 = Object.keys(T6.jB);
function T7(e) {
    let t = null == e ? T8 : T8.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var T9 = n(518293),
    fe = n(221650);
function ft(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, T9.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, T6.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, S.jsxs)("div", {
        className: fe.kL,
        children: [
            (0, S.jsx)(ie.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fe.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, S.jsxs)(ie.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fe.Lt,
                children: [
                    (0, S.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fe.L_ }),
                    (0, S.jsx)(Q.E, {
                        className: fe._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fn = n(511484),
    fi = n(811611),
    fs = n(206697),
    fl = n(507553);
function fr(e, t) {
    let n = fl.A.useField("scrollPosition"),
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    (0, T.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fl.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fa = n(844222),
    fo = n(842092);
let fu = "/assets/d4955aabdcb5bdee.png",
    fd = { assetOrigin: T3.E.NEW_ASSET, imageUri: fu, staticImageUri: fu, description: "", originalAsset: void 0 };
function fc(e) {
    let { user: t } = e,
        { reducedMotion: n } = T.useContext(fa.C),
        {
            pendingAvatar: i,
            pendingBanner: s,
            pendingAvatarDecoration: l,
            pendingProfileEffect: r,
            pendingDisplayNameStyles: a,
            pendingThemeColors: o,
            pendingPronouns: u,
            pendingBio: d,
            tryItOutThemeColors: c,
            tryItOutAvatar: g,
            tryItOutBanner: m,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: E,
        } = (0, f.cf)([SC.A], () => {
            let e = SC.A.getPendingChanges(),
                t = SC.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, SM.V7)({ userId: t.id, image: g ?? i });
    return (0, S.jsx)(SG.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fd,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fo.WX,
        containerClassName: fo.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fg = n(829497);
function fm(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = ah.Ay.isPremium(t),
        l = ah.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([SC.A], () => {
            let e = SC.A.getPendingChanges(),
                t = SC.A.getErrors(),
                n = SC.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, T.useState)(T7()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, T.useMemo)(() => {
                    let t = (0, T6.Wt)(e);
                    return {
                        banner: (0, T5.X)({
                            assetOrigin: T3.E.NEW_ASSET,
                            imageUri: t.getBannerSrc(!1),
                            staticImageUri: t.getBannerSrc(!0),
                            description: t.getBannerAltText(),
                            originalAsset: void 0,
                        }),
                        themeColors: t.themeColorsLegacy,
                        avatarDecorationSkuId: t.avatarDecorationSkuId,
                        displayNameStyles: t.displayNameStyles,
                    };
                }, [e]),
                r = (0, f.bG)([T1.A], () => {
                    let e = T1.A.getProduct(s);
                    return (0, T2.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, T.useEffect)(() => {
                (0, T4.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, T.useCallback)(() => {
                let n = T7(e);
                (t(n), tc.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fr(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eY.Ay)(tF.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fs.T)(), tc.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    T.useEffect(() => {
        n &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, t$.uq)(t0.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, T0.V)()?.subscriptionTrial?.skuId === t0.pe.TIER_2,
        p = (0, TJ.O)(),
        _ = (0, fn.U9)(p, t0.pe.TIER_2);
    return i
        ? (0, S.jsx)(eY.f5, {
              value: A,
              children: (0, S.jsxs)(dh.A, {
                  ref: m,
                  className: fg.MT,
                  type: dh.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, S.jsx)(SP, {
                          stickyPreview: !1,
                          layoutClassName: fg.th,
                          profilePreviewTitle: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(as.t, { size: "md", color: "currentColor", className: fg.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, S.jsxs)(S.Fragment, {
                              children: [(0, S.jsx)(ft, { preset: c, onShuffle: g }), (0, S.jsx)(fc, { user: t })],
                          }),
                          children: (0, S.jsxs)("div", {
                              children: [
                                  (0, S.jsxs)("div", {
                                      children: [
                                          (0, S.jsx)(N.D, {
                                              variant: "heading-xl/extrabold",
                                              children: U.intl.string(U.t["2zGdAW"]),
                                          }),
                                          (0, S.jsx)(Q.E, {
                                              className: fg.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(T_, {
                                      className: fg.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, SM.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: T4.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, S.jsx)(Tr, {
                                      className: fg.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: T4.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, S.jsx)(S7, {
                                          className: fg.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: T4.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, S.jsx)(Tt, { user: t, className: fg.fz }),
                                  !x &&
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, S.jsx)(Tq.d, {
                              onSubscribeModalClose: h,
                              className: fg.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, T$.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: s
                                  ? U.intl.string(U.t.AfRWI8)
                                  : _
                                    ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: p?.discount.amount })
                                    : U.intl.string(U.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, S.jsxs)("div", {
                              children: [
                                  (0, S.jsx)("div", { className: fg.BU }),
                                  (0, S.jsx)(fi.Ay, {
                                      type: t0.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: t0.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var fA = n(814390),
    fE = n(643056),
    fh = n(843282),
    fx = n(145497),
    fp = n(685073),
    fS = n(534400),
    fT = n(581781),
    ff = n(743981),
    fI = n(195801);
let f_ = (0, tq.Ld)(),
    fN = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lx.default], () => (0, fp.Zo)(lx.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
            r = T.useMemo(() => {
                let e = new Map();
                for (let n of t)
                    n.profile?.tag != null &&
                        e.set(n.id, {
                            id: n.id,
                            name: n.name,
                            icon: n.icon,
                            tag: n.profile.tag,
                            badge: n.profile.badge ?? void 0,
                        });
                let { guildId: n, tag: i, badge: r } = s;
                return (
                    null == n ||
                        null == i ||
                        n !== l ||
                        e.has(n) ||
                        e.set(n, { id: n, name: U.intl.string(U.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, s, l]),
            a = T.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, S.jsx)(fT.A, {
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [r],
            ),
            u = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, S.jsx)(fx.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = T.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, S.jsx)(fS.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: ff.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = T.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, S.jsx)(S.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = T.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = T.useCallback((e) => e === l, [l]),
            A = T.useCallback((e) => e, []),
            E = T.useCallback(() => {
                i?.(null);
            }, [i]),
            h = T.useRef(null);
        return (
            fr(h, eO._F.GUILD_TAG),
            (0, S.jsxs)(ao.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f_,
                ref: h,
                children: [
                    (0, S.jsx)(Q.E, {
                        className: fI.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, S.jsx)(fh.Pw, {
                        className: fI.Lt,
                        optionClassName: fI.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: A,
                        clear: E,
                        clearable: null != l,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var fC = n(318785),
    fy = n(992526),
    fb = n(470739);
let fv = function () {
    return (0, fy.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, S.jsx)(ao.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, S.jsx)(v.$, {
                  text: U.intl.string(U.t.wRraFx),
                  onClick: () => {
                      (0, fb.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var fj = n(953726);
let fO = (0, tq.Ld)();
function fL(e) {
    let t = (0, xh.L)(t0.PremiumTypes.TIER_2);
    return (0, S.jsxs)(ao.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: fO,
        children: [
            (0, S.jsx)("div", {
                children: (0, S.jsx)(sf.k, {
                    "aria-labelledby": fO,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, S.jsx)(Tt, { user: e.user, className: fj.F }),
        ],
    });
}
var fR = n(376626);
function fD(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, S.jsx)("div", {
        className: fR.u,
        children: (0, S.jsx)(t7.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, S_._e)() : (0, S2.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function fP(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, Tm.r)(n8.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TA.rh)(l, r, !1),
        o = (0, Tp.LX)(a[0]);
    return (0, S.jsx)(ao.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, S.jsx)(Tf, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var fG = n(518477);
let fM = function () {
    let e = (0, f.bG)([dv.default], () => dv.default.getId());
    return (0, S.jsx)(ao.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, S.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, Sb.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tF.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: fG.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var fU = n(654910);
function fV() {
    let e = (0, f.bG)([lx.default], () => {
            let e = lx.default.getCurrentUser();
            return (tx()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([SU.A], () => SU.A.getUserProfile(e.id)),
        n = (0, fE.d)({ location: "DefaultCustomizationSections" }),
        {
            pendingAvatar: i,
            pendingGlobalName: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingAccentColor: o,
            pendingThemeColors: u,
            pendingLegacyUsernameDisabled: d,
            pendingPrimaryGuildId: c,
            errors: g,
        } = (0, f.cf)([SC.A], () => {
            let e = SC.A.getPendingChanges(),
                t = SC.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, SM.V7)({ userId: e.id, image: i }),
        A = (0, SF.EC)(),
        E = ah.Ay.canUsePremiumProfileCustomization(e),
        h = (0, SL.z5)(i, e.avatar),
        x = (0, SL.Ac)(l, t?.banner),
        p = (0, TE.Ay)(e.id),
        T = p?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, fC.b)(),
        C = null != (0, fp.Zo)(e.primaryGuild).guildId;
    return (0, S.jsxs)("div", {
        className: fU.Q,
        children: [
            (0, S.jsx)(fL, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, S2.p)({ globalName: e }),
                user: e,
            }),
            (0, S.jsx)(
                TN,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, S2.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, S.jsx)(fM, {}),
            (0, S.jsx)(
                S7,
                {
                    onAvatarChange: (e) => {
                        ((0, S2.p)({ avatar: e }), (0, SL.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: U.intl.string(U.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, S.jsx)(S5, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, S.jsx)(Ts, { user: e }),
            (0, S.jsx)(Tu, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, S.jsx)(Tg, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(
                              Tr,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, S2.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, S.jsx)(T_, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, S2.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, S.jsx)(
                      fP,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, S2.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, S.jsx)(
                SJ,
                {
                    sectionTitle: U.intl.string(U.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, S2.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, S.jsx)(fN, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, S2.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, S.jsx)(fD, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, S.jsx)(fv, {}, "badges"),
        ],
    });
}
function fk() {
    (0, sT.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                source: {
                    page: I.liQ.USER_SETTINGS,
                    section: I.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: I.ZSU.BUTTON_CTA,
                    type: I.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var fw = n(447080);
function fF() {
    let e = (0, f.bG)([lx.default], () => {
            let e = lx.default.getCurrentUser();
            return (tx()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, f.cf)([SC.A], () => ({ ...SC.A.getPendingChanges(), showNotice: SC.A.showNotice() })),
        a = (0, SM.V7)({ userId: e.id, image: i }),
        o = (0, SL.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fA.A)() && null != n ? TZ.Ay.parse(void 0, n).content : n,
        d = ah.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eY.Ay)(tF.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => () => tl.h.wait(S_.IM), []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, S.jsx)(oc.A, {})
        : (0, S.jsxs)(eY.f5, {
              value: c,
              children: [
                  (0, S.jsx)(TK, {}),
                  (0, S.jsx)(SP, {
                      profilePreview: (0, S.jsx)(SG.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: fk,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: fw.ti,
                      }),
                      nameplatePreview: (0, S.jsx)(SO.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? fw.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, S.jsx)(fV, {}),
                  }),
                  (0, S.jsx)(ci.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, S.jsx)("div", {
                          ref: E,
                          children: (0, S.jsx)(fm, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, S.jsx)(Tq.d, {
                          className: fw.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, T$.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, S.jsx)(TQ.l, {
                              size: "md",
                              location: tF.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, S.jsx)("div", {
                              className: fw.Xl,
                              children: (0, S.jsx)(v.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tc.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: U.intl.string(U.t.uw9zI7),
                                  icon: as.t,
                              }),
                          }),
                      }),
              ],
          });
}
var fB = n(625494);
n(46121);
var fz = n(944983);
let fY = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    fX = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sO.A, c7.Ay, SC.A], () => {
                    let e = SC.A.selectedGuildId ?? sO.A.getGuildId();
                    return null == e || SC._.has(e) ? c7.Ay.getFlattenedGuildIds().find((e) => !SC._.has(e)) : e;
                }),
                t = (0, f.bG)([sj.A], () => sj.A.getGuild(e)),
                n = (0, f.bG)([SC.A], () => SC.A.showNotice()),
                i = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
                s = fl.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, ia._)(fY[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, TU.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, S.jsx)(Tk, {
                    children: (0, S.jsxs)(uE.F, {
                        component: (0, S.jsx)(sE.A, {
                            children: (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, S.jsxs)(Sv.V, {
                                className: fz.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                fB._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, Sj.V2)(t.id),
                                            fl.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, S.jsx)(
                                        Sv.V.Item,
                                        {
                                            className: fz.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, S.jsx)(
                                        Sv.V.Item,
                                        {
                                            className: ih()(fz.YU, fz.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, S.jsx)(TM, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                  fB._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Sj.JJ)(e.id);
                                      },
                                  })
                                : (0, S.jsx)(fF, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            U.intl.string(U.t["vi7f+q"]),
            U.intl.string(U.t.Ip9nBS),
            U.intl.string(U.t["2p07FR"]),
            U.intl.string(U.t["7vhiqk"]),
            U.intl.string(U.t.kPHroX),
            U.intl.string(U.t.lqaIxI),
            U.intl.string(U.t.Vgdusv),
            U.intl.string(U.t.DMeO2X),
        ],
    }),
    fH = (0, E.zZ)(h.X.PROFILE_CATEGORY, { buildLayout: () => [fX] });
var fW = n(379633);
function fK() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cx.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, S.jsxs)("div", {
              className: fW.a5,
              children: [
                  (0, S.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, S.jsxs)("div", {
                      className: fW.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, S.jsxs)("div", {
                              className: fW.Fk,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, S.jsx)(aE.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let fZ = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [SC.A], element: SN.A },
        initialize: () => () =>
            tl.h.wait(() => {
                (0, S_.F7)();
            }),
        buildLayout: () => [fH],
    }),
    fq = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: f$,
        StronglyDiscouragedCustomComponent: fK,
        usePredicate: () => !(0, Sy.X)("user_settings_sidebar"),
        buildLayout: () => [fZ],
    }),
    fQ = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: f$,
        StronglyDiscouragedCustomComponent: fK,
        usePredicate: () => (0, Sy.X)("user_settings_sidebar"),
        onClick: () => {
            let e = dv.default.getId();
            (0, Sb.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function f$() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cx.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, S.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let fJ = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [fq, fQ] });
var f0 = n(98207);
n(204925);
let f1 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sT.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, S.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uN.tE : null, onCloseCallback: t },
    );
};
var f2 = n(940856),
    f3 = n(506775),
    f5 = n(379257),
    f4 = n(121780),
    f6 = n(666113);
function f8() {
    let e = f4.A.getCountryCode(),
        t = null != e ? f6.IN[e.alpha2] : void 0;
    f5.A.openUrl(eC.A.getArticleURL(t ?? f6.k9));
}
var f7 = n(521169);
function f9() {
    return (0, f7.w)(f6.Vc);
}
var Ie = n(680091);
function It() {
    let e = f9(),
        t = (0, f3.ZP)();
    if (!e) return null;
    switch (t) {
        case f3.M$.ADULT:
            return U.intl.format(Ie.default.gi4ulu, { handleOnAgeGatedContentHook: f3.M0 });
        case f3.M$.TEEN:
            return U.intl.format(Ie.default["221iML"], {
                handleOnAgeGatedContentHook: f3.M0,
                handleOnConfirmAgeHook: f3.aP,
            });
        case f3.M$.UNVERIFIED:
            return U.intl.format(Ie.default["W0/7DD"], {
                handleOnAgeGatedContentHook: f8,
                handleOnConfirmAgeHook: f3.aP,
            });
    }
}
var In = n(26137),
    Ii = n(957485);
function Is() {
    let e = f9(),
        t = (0, f3.ZP)();
    return e ? { icon: t === f3.M$.ADULT ? In.r : Ii.i, backgroundColor: n8.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Il() {
    let e = Is();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function Ir() {
    return f9() ? U.intl.string(U.t.piqs0o) : null;
}
var Ia = n(438140);
let Io = [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    Iu = [];
function Id() {
    return (0, Ia.Wt)() ? Io : Iu;
}
var Ic = n(36149),
    Ig = n(207560),
    Im = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    IA = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function IE(e, t) {
    let n = (0, f.bG)([lx.default], () => null != lx.default.getCurrentUser()),
        i = (0, Ig.fk)(),
        s = (0, f3.ZP)(),
        l = (0, Ic.Y2)(),
        r = f9();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case f3.M$.UNVERIFIED:
            return "verify" === e;
        case f3.M$.TEEN:
            return e === (r ? "info" : "verify");
        case f3.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var Ih = n(841365);
function Ix() {
    let e = (0, f3.hD)();
    return (0, S.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(Ih.default.WM5adV, { handleOnHelpUrlHook: f3.M0 })],
    });
}
let Ip = {
        useTitle: () => Ir() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: It,
        useVariant: () => "secondary",
        useLeadingDecoration: Il,
        getDismissibleBadges: Id,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: Ix,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sT.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    },
    IS = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...Ip, usePredicate: () => IE(IA.EDIT, Im.LEGACY) }),
    IT = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...Ip,
        usePredicate: () => IE(IA.EDIT, Im.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    If = {
        useTitle: () => Ir() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: It,
        useLeadingDecoration: function () {
            let e = Is();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: Id,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, f3.hD)() }),
    },
    II = (0, E.v_)(h.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...If, usePredicate: () => IE(IA.INFO, Im.LEGACY) }),
    I_ = (0, E.v_)(h.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...If,
        usePredicate: () => IE(IA.INFO, Im.TINY_BRONCO),
    }),
    IN = {
        useTitle: () => Ir() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: It,
        useVariant: () => "secondary",
        useLeadingDecoration: Il,
        getDismissibleBadges: Id,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, f3.hD)() }),
        useLabel: function () {
            return (0, Ic.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: f3.aP,
    },
    IC = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...IN, usePredicate: () => IE(IA.VERIFY, Im.LEGACY) }),
    Iy = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...IN,
        usePredicate: () => IE(IA.VERIFY, Im.TINY_BRONCO),
    }),
    Ib = [IC, IS, II],
    Iv = [Iy, IT, I_],
    Ij = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
        useLabel: () => U.intl.string(U.t.BleMPB),
        onClick: () => f1(),
    });
function IO(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function IL(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function IR(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = T.useState(!1),
        a = l ? t : n(t);
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, S.jsx)(Q.E, { variant: "text-md/medium", children: a }),
            (0, S.jsx)(hi.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
            }),
        ],
    });
}
function ID() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.email);
    return null == e
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, S.jsx)(IR, {
              text: e,
              censor: IL,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let IP = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: ID }),
    useLabel: function () {
        return null == (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.email)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.email)
            ? U.intl.string(U.t["pvBD+W"])
            : U.intl.string(U.t["8peUT0"]);
    },
    onClick: function () {
        (0, sT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, S.jsx)(e, { ...t });
        });
    },
});
var IG = n(557722),
    IM = n(53516);
function IU() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, S.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, S.jsx)(IR, {
                  text: t,
                  censor: IO,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let IV = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IU }),
    useLabel: function () {
        return null == (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    onClick: function () {
        null == lx.default.getCurrentUser()?.phone
            ? (0, sT.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, S.jsx)(e, { reason: IG.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: IM.V },
              )
            : (0, sT.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, S.jsx)(e, { ...t });
              });
    },
});
function Ik() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function Iw() {
    let e = (0, SF.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(Q.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, S.jsx)(sA.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, S.jsx)(i5.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n8.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let IF = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: Iw,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (Ik() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: Ik,
        onClick: function () {
            (0, sT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    IB = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, f.bG)([lx.default], () => null != lx.default.getCurrentUser()),
        useTitle: () => U.intl.string(U.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: U.intl.string(U.t.tuGzBT),
                            text: U.intl.string(U.t.NAzplE),
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, f2.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: U.intl.string(U.t["/3qnL/"]),
                        text: U.intl.string(U.t.qKs3vg),
                        button: { text: U.intl.string(U.t["7psymi"]), onClick: () => f1() },
                    };
        },
        buildLayout: () => [IF, Ij, IP, IV, ...Ib],
    });
var Iz = n(398177);
let IY = (0, E.Tf)(h.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => U.intl.string(U.t["CIGa+7"]),
    useLabel: () => U.intl.string(U.t.bt75uw),
    useAriaLabel: () => U.intl.string(U.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sT.openModal)((e) => (0, S.jsx)(Iz.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var IX = n(200921);
let IH = [];
function IW() {
    IH = [];
}
class IK extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return IH;
    }
}
let IZ = new IK(tl.h, {
    LOGOUT: IW,
    LOGIN_SUCCESS: IW,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        IH = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...IH],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        IH = n;
    },
});
function Iq() {
    let e = (0, f.cf)([IZ], () => IZ.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = dv.default.getAuthSessionIdHash();
        if (null != i) {
            let e = t.findIndex((e) => e.id_hash === i);
            e >= 0 && (n = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            { currentSession: n, otherSessions: t }
        );
    }, [e]);
}
function IQ(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ip()(e).fromNow();
}
var I$ = n(176524),
    IJ = n(646270),
    I0 = n(738678),
    I1 = n(489828);
function I2(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, S.jsx)(I$.A, { icon: t, color: r ? n8.A.colors.ICON_MUTED : "currentColor" }),
            (0, S.jsxs)(Z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function I3(e) {
    let { session: t, current: n } = e,
        {
            location: i,
            platform: s,
            os: l,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let n = e.client_info?.location ?? e.client_info?.ip,
                i = e.client_info?.platform,
                { text: s, icon: l } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: U.intl.string(U.t.cDHCNY), icon: pl.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: IJ.u };
                        case "horizon os":
                            return { text: e, icon: I0.G };
                        default:
                            return { text: e, icon: pl.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : IQ(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(im.Vq);
    return (0, S.jsx)(I2, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, S.jsx)(ie.D, {
                className: I1.X,
                onClick: () => (0, IX.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, S.jsx)(uO.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function I5(e) {
    let { title: t, children: n } = e,
        i = T.useId();
    return (0, S.jsxs)(Z.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, S.jsx)(N.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, S.jsx)(Z.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let I4 = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = Iq();
            return null == e
                ? (0, S.jsx)(om.y, {})
                : (0, S.jsx)(I5, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, S.jsx)(I3, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    I6 = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Iq();
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, S.jsx)(v.$, {
                    onClick: () => (0, IX.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: U.intl.string(U.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Iq();
            return e.length > 0;
        },
    });
var I8 = n(766928);
function I7() {
    return (0, S.jsx)(I2, {
        icon: I8.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, nm.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tF.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let I9 = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Iq(),
                t = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
            return (0, S.jsxs)(I5, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, S.jsx)(I3, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, S.jsx)(I7, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Iq(),
                t = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _e = (0, E.zZ)(h.X.SESSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useSubtitle: () => U.intl.string(U.t.b7ZpTM),
        initialize: () => {
            (0, IX.GY)();
        },
        buildLayout: () => [I4, I9, I6],
        useSearchTerms: () => [
            U.intl.string(U.t["+1h0k/"]),
            U.intl.string(U.t.LLS19o),
            U.intl.string(U.t.xx1MWc),
            U.intl.string(U.t.lSWsrd),
        ],
    }),
    _t = (0, E.t_)(h.X.SESSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useObscuredNotice: oc.L,
        buildLayout: () => [_e],
    }),
    _n = (0, E.t0)(h.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_t],
        initialize: () => {
            (0, IX.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = Iq(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? U.intl.formatToPlainString(U.t.G7zwOk, { count: n }) : U.intl.string(U.t.MKDeyL),
            };
        },
    });
var _i = n(464477);
function _s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? U.intl.string(U.t.YJGvuD)
              : U.intl.string(U.t["3iKih7"])
          : e.hasFlag(I.nhx.PARTNER)
            ? t
                ? U.intl.string(U.t["9UucjT"])
                : U.intl.string(U.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? U.intl.string(U.t["9VWpT9"])
                  : U.intl.string(U.t.LfCBZG)
              : null;
}
function _l() {
    return (0, a9.bG)([lx.default], () => {
        let e = lx.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _r =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _a() {
    let e = (0, a9.bG)([lx.default], () => lx.default.getCurrentUser()?.verified);
    return _i.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, a9.bG)([sj.A, Ty.A, lx.default], () =>
        lx.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sj.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Ty.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? U.intl.string(U.t.OYTCUh)
                  : U.intl.string(U.t.HC8uSZ)
              : null,
    );
}
var _u = n(466034);
let _d = (0, E.Tf)(h.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: () => _o(!0),
        useDisabled: () => null !== _o(!0),
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, f.bG)([dv.default], () => dv.default.hasTOTPEnabled()),
                t = _a() === _r.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n7.A)({
                title: U.intl.string(U.t["D+aE7g"]),
                subtitle: U.intl.string(U.t.EA4ZEk),
                variant: "critical",
                confirmText: U.intl.string(U.t.N86XcP),
                onConfirm: () => f0.A.disable(),
            }),
    }),
    _c = (0, E.zZ)(h.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RumMFo),
        useSubtitle: () => U.intl.string(U.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([dv.default], () => dv.default.hasTOTPEnabled()),
                t = _a() === _r.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: U.intl.string(U.t.cTNUeD),
                            onClick: _u.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_a()) {
                case _r.UNAVAILABLE_NO_CRYPTO:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.PhHhsj) };
                case _r.UNAVAILABLE_UNVERIFIED:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                case _r.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_d],
    });
var _g = n(670492),
    _m = n(32880),
    _A = n(663417),
    _E = n(658675),
    _h = n(900686);
function _x() {
    (0, sT.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    f0.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sT.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, S.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: U.intl.string(U.t.PsQmzU),
                actionText: U.intl.string(U.t.ajkYcF),
            });
    });
}
var _p = n(858487);
function _S(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _T() {
    let e = _g.A.getVerificationKey();
    if ("" === e) return void _x();
    try {
        await f0.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lc.P)({
            message: e.body?.message ?? U.intl.string(U.t.F8FvUy),
            type: lg.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function _f(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _S(t),
        s = T.useRef(null),
        l = (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(_E.P, { checked: n }), (0, S.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return ux.p5
        ? (0, S.jsx)(ie.D, {
              tag: "li",
              className: ih()(_p.aY, _p.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, ux.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, ux.C)(i),
                      (0, lc.P)({ message: U.intl.string(U.t.mGZ66D), type: lg.Ck.SUCCESS, id: "backup-code-copied" }));
              },
              children: l,
          })
        : (0, S.jsx)("li", { className: _p.aY, children: l });
}
let _I = (0, E.zZ)(h.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.fC9qV0),
        useSubtitle: () =>
            (0, f.bG)([_g.A], () => _g.A.getBackupCodes().length > 0)
                ? U.intl.format(U.t.tp7zEK, {})
                : U.intl.string(U.t.LoOi4S),
        usePredicate: _l,
        buildLayout: () => [__],
    }),
    __ = (0, E.E2)(h.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.fC9qV0)],
        Component: function () {
            let e = (0, f.bG)([_g.A], () => _g.A.getBackupCodes()),
                t = T.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_S(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, S.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _x })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)("ul", {
                              className: _p.E5,
                              children: e.map((e) => (0, S.jsx)(_f, { code: e }, e.code)),
                          }),
                          (0, S.jsxs)(l2.e, {
                              size: "sm",
                              children: [
                                  (0, S.jsx)(_h.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, S.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _m.DownloadIcon,
                                      }),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      text: U.intl.string(U.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _A.RefreshIcon,
                                      onClick: _T,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _N = (0, E.Tf)(h.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = T.useState(!1),
                n = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, S.jsx)(hi.Q, {
                              text: e ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sT.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, S.jsx)(e, {
                        ...t,
                        handleSubmit: f0.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    _C = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lx.default], () => _s(lx.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lx.default], () => null != _s(lx.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: _y,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _a(),
                t = _l(),
                n = (0, f.bG)([dv.default], () => dv.default.hasTOTPEnabled());
            return e === _r.AVAILABLE && t && n;
        },
        buildLayout: () => [_N],
    });
function _y() {
    let e = lx.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: IG.d.USER_SETTINGS_UPDATE, onAddedPhone: f0.A.enableSMS }),
                (0, sT.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, S.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: IM.V },
                ));
        } else f0.A.enableSMS();
}
var _b = n(665671),
    _v = n(442433),
    _j = n(917136),
    _O = n(976910),
    _L = n(267255);
function _R(e) {
    let { credential: t } = e;
    return (0, S.jsxs)("li", {
        className: _L.e,
        children: [
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: IQ(t.last_used) }),
                        }),
                ],
            }),
            (0, S.jsx)(sg.K, {
                icon: gi.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, _v.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, S.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let _D = (0, E.zZ)(h.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.IBq4Y3),
        useSubtitle: () => U.intl.string(U.t.yK9edS),
        useHeaderDecoration: function () {
            if (_a() === _r.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iQ.j,
                            onClick: _b.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_a()) {
                    case _r.UNAVAILABLE_NO_CRYPTO:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.bWCGI9) };
                    case _r.UNAVAILABLE_UNVERIFIED:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                    case _r.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [_P],
    }),
    _P = (0, E.E2)(h.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [U.intl.string(U.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, f.cf)([_O.A], () => ({
                hasFetchedCredentials: _O.A.hasFetchedCredentials(),
                credentials: _O.A.getCredentials(),
            }));
            return (T.useEffect(() => {
                t || _j.JQ();
            }, [t]),
            t)
                ? (0, S.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, S.jsx)(_R, { credential: e }, e.id)),
                  })
                : (0, S.jsx)(om.y, {});
        },
    }),
    _G = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [_D, _c, _C, _I],
    }),
    _M = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _l();
            return { type: p.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
        },
        buildLayout: () => [_G],
    }),
    _U = (0, E.zZ)(h.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["0iH2vc"]),
        buildLayout: () => [IY, _M, _n],
    }),
    _V = { [f3.M$.ADULT]: Ie.default.PMznGO, [f3.M$.TEEN]: Ie.default.qSkhZH, [f3.M$.UNVERIFIED]: Ie.default.vGxRDB },
    _k = [eA.M.TINY_BRONCO_NOTICE],
    _w = [];
function _F() {
    f5.A.openUrl(f6.m5);
}
var _B = n(308645),
    _z = n(555725),
    _Y = n(855267);
let _X = (0, E.E2)(h.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["16r9jm"])],
        Component: _Y.A,
    }),
    _H = (0, E.zZ)(h.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [_X] }),
    _W = (0, E.t_)(h.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        buildLayout: () => [_H],
    }),
    _K = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: _z.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, _z._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, _z.aO)() };
        },
        initialize: () => {
            _B.Yn();
        },
        buildLayout: () => [_W],
    }),
    _Z = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (f9() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, Ia.LH)(),
                t = (0, f3.ZP)(),
                [n, i] = (0, me.kn)(e ? _k : _w);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: U.intl.format(_V[t], { handleOnBlogHook: _F }),
                      onDismiss: () => i(mu.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...Iv, _K],
    });
var _q = n(738188),
    _Q = n(834981),
    _$ = n(987197),
    _J = n(822585),
    _0 = n(840387),
    _1 = n(465558),
    _2 = n(513687);
let _3 = (0, E.E2)(h.X.FAMILY_CENTER_SETTING, {
        Component: _1.p,
        useSearchTerms: () => [
            U.intl.string(_2.default.RZqaJn),
            U.intl.string(_2.default.bdBmqy),
            U.intl.string(_2.default["gVWG+6"]),
            U.intl.string(_2.default.ahKIJO),
            U.intl.string(_2.default["8SLtqb"]),
        ],
    }),
    _5 = (0, E.zZ)(h.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [_3] }),
    _4 = (0, E.t_)(h.X.FAMILY_CENTER_PANEL, {
        useTitle: () => U.intl.string(_2.default.RZqaJn),
        buildLayout: () => [_5],
    }),
    _6 = (0, E.zZ)(h.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => U.intl.string(_2.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, _$.f)(),
                t = (0, _J.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, _Q.VT)();
            return T.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [_8],
    }),
    _8 = (0, E.t0)(h.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, _Q.Li)() ? U.intl.string(_2.default.IcMQUP) : U.intl.string(_2.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, _0.Z)(),
                t = (0, _Q.Li)();
            return e
                ? t
                    ? U.intl.string(_2.default.G8lHFU)
                    : U.intl.string(_2.default.uOLNEZ)
                : U.intl.string(_2.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, _$.f)(),
                t = (0, _J.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: _q.WarningIcon,
                      color: n8.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n8.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [_4],
    });
var _7 = n(425587),
    _9 = n(662758);
function Ne(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, lJ.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function Nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lx.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await _7.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lJ.A)({
              title: U.intl.string(U.t["Y++oNe"]),
              subtitle: U.intl.format(U.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sj.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lJ.A)({ title: U.intl.string(U.t.vJiTOL), subtitle: U.intl.string(U.t.UyVVan) })
          : t.isClaimed()
            ? (0, sT.openModal)((t) =>
                  (0, S.jsx)(_9.default, {
                      ...t,
                      handleSubmit: (t) => (0, S_.U_)(t, e).then(I.tEg, Ne),
                      title: e ? U.intl.string(U.t.xca2ts) : U.intl.string(U.t.goXv9g),
                      actionText: e ? U.intl.string(U.t["8lQ2rR"]) : U.intl.string(U.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? U.intl.string(U.t.FB4H1D) : U.intl.string(U.t.gk7h32),
                  }),
              )
            : (0, n7.A)({
                  title: U.intl.string(U.t.xca2ts),
                  subtitle: U.intl.string(U.t.FB4H1D),
                  confirmText: U.intl.string(U.t["8lQ2rR"]),
                  onConfirm: () => (0, S_.U_)("", !0),
              });
}
let Nn = (0, E.Tf)(h.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => U.intl.string(U.t["gIpzR+"]),
        useSubtitle: () => U.intl.string(U.t.Bd6dOf),
        useLabel: () => U.intl.string(U.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nt(!0),
    }),
    Ni = (0, E.Tf)(h.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => U.intl.string(U.t["p/Tjtp"]),
        useSubtitle: () => U.intl.string(U.t.YvDmKb),
        useLabel: () => U.intl.string(U.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nt(!1),
        usePredicate: () => {
            let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Ns = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Ni, Nn] }),
    Nl = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (f0.A.clearBackupCodes(), (0, S_.Uo)());
            };
        },
        useObscuredNotice: oc.L,
        buildLayout: () => [IB, _U, _Z, _6, Ns],
    }),
    Nr = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: m9.UserIcon,
        buildLayout: () => [Nl],
    });
var Na = n(176781),
    No = n(341923),
    Nu = n(572164),
    Nd = n(614584),
    Nc = n(915725),
    Ng = n(268378);
let Nm = (0, E.zD)(h.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => U.intl.string(Ng.default.j29uJx),
        useSubtitle: () => U.intl.format(Ng.default.UCzGcQ, { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getEnableAutoclipping()),
        setValue: Nd.uL,
        useDisabled: () => !(0, Nu.E)(),
    }),
    NA = (0, E.zY)(h.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [Nm], headerSettingKey: Nm.key }),
    NE = (0, E.zZ)(h.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => U.intl.string(Ng.default.XWkJoi),
        useSubtitle: () => U.intl.string(Ng.default["MJ/VsO"]),
        usePredicate: No.HN,
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useInlineNotice: () =>
            (0, Nu.E)()
                ? null
                : {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: U.intl.string(Ng.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: U.intl.string(Ng.default.qGgW4M),
                          onClick: () => Nd.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NA],
    });
var Nh = n(696016);
let Nx = [Nh.zq, 25, 50, Nh.Y2, Nh.rv],
    Np = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: Nh.zq,
        maxValue: Nh.rv,
        useDefaultValue: () => Nh.Y2,
        getInitialValue: () => Nc.Ay.getSettings().clipsQuality.bitratePercent ?? Nh.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Nc.Ay.getSettings();
            Nd.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Nx,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Nu.E)(),
    });
var NS = n(226640);
let NT = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Nc.Ay.getSettings();
            Nd.GS({ ...t, frameRate: e });
        },
        useOptions: NS.Fz,
        useDisabled: () => !(0, Nu.E)(),
    }),
    Nf = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [U.intl.string(U.t.SIxrIF)],
        usePredicate: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getHardwareClassification()) === Nh.k9.BELOW_MINIMUM,
        Component: () => (0, S.jsx)(s7.A, { look: s7.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    NI = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().clipsLength),
        setValue: (e) => Nd.h$(e),
        useOptions: NS.Qu,
        useDisabled: () => !(0, Nu.E)(),
    }),
    N_ = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [U.intl.string(U.t["Z+MfqT"])],
        Component: () => (0, S.jsx)(s7.A, { look: s7.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    NN = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nc.Ay.getSettings();
            Nd.GS({ ...t, resolution: e });
        },
        useOptions: NS.gF,
        useDisabled: () => !(0, Nu.E)(),
    }),
    NC = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().remindersEnabled),
        setValue: (e) => Nd.Mt(e),
        useDisabled: () => !(0, Nu.E)(),
    }),
    Ny = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(Ng.default.TGwzMe),
        buildLayout: () => [Nf, NI, NT, NN, Np, N_, NC],
    }),
    Nb = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Nd.YP(e),
    }),
    Nv = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Nd.Uh(e),
    }),
    Nj = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lx.default], () => {
                let e = lx.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Nb, Nv],
    });
var NO = n(417270),
    NL = n(847825);
let NR = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tx()(null != e, "Save clip keybind unset");
            let t = !(0, Nu.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        i0.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    i0.A.setKeybind({ ...e, shortcut: (0, sp.OH)(Nh.Ot) });
                }, [e]);
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: NL.g,
                    children: (0, S.jsx)(sx.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, S.jsxs)(S.Fragment, {
                            children: [
                                (0, S.jsx)(sA.m, {
                                    text: U.intl.string(Ng.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sg.K, {
                                        icon: i$.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(Ng.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, S.jsx)(sA.m, {
                                    text: U.intl.string(Ng.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sg.K, {
                                        icon: NO.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(Ng.default.Kyk1Tp),
                                        onClick: (e) => {
                                            (e.stopPropagation(), s());
                                        },
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            });
        },
    }),
    ND = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t["0U/hj7"]), U.intl.string(U.t["5zxkdo"])],
        usePredicate: sH.BW,
        Component: () => {
            let e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, f.bG)([sZ.Ay], () => sZ.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
            (tx()(null != e, "Save clip keybind unset"), tx()(null != t, "Save screenshot keybind unset"));
            let n = T.useCallback(
                (e) => {
                    i0.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t["0U/hj7"]),
                description: U.intl.string(U.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, S.jsx)("div", {
                    className: NL.g,
                    children: (0, S.jsx)(sx.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    NP = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, Nu.E)(),
        setValue: (e) => Nd.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    NG = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [NP, NR, ND], headerSettingKey: NP.key }),
    NM = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(Ng.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [NG],
    }),
    NU = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([Nc.Ay], () => Nc.Ay.getSettings().storageLocation),
                t = !(0, Nu.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nC.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Nd.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t.s4773E),
                description: U.intl.string(U.t.svjwGh),
                layout: "vertical",
                children: (0, S.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, S.jsx)(sf.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": U.intl.formatToPlainString(U.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, S.jsx)(v.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: U.intl.string(Ng.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    NV = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(Ng.default["0Q+pdZ"]),
        buildLayout: () => [NU],
    }),
    Nk = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sH.sw,
        buildLayout: () => [NM, NE, Ny, NV, Nj],
    }),
    Nw = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: Na.x,
        buildLayout: () => [Nk],
    });
var NF = n(254138),
    NB = n(290595);
let Nz = [];
var NY = n(153488),
    NX = n(308528),
    NH = n(171316),
    NW = n(558001);
n(866945);
var NK = n(835002);
function NZ() {
    let e = (0, NH.uM)(),
        t = (0, _Q.vx)(),
        n = T.useCallback(() => {
            ((0, tW.default)(),
                NX.A.openPrivateChannel({ recipientIds: t }),
                (0, NW.N)(NK.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, NK.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, NW.N)(NK.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, NK.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: U.intl.format(_2.default.i284fU, {
                    hook: (e, t) => (0, S.jsx)(ng.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let Nq = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => Nd.eQ({ allowVoiceRecording: e }),
});
var NQ = n(157559),
    N$ = n(331887);
function NJ() {
    let e = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
        t = (0, f.bG)([N$.A], () => N$.A.harvestType),
        [n, i] = T.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = T.useRef(null);
    return (T.useEffect(() => {
        let e = s - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            (clearTimeout(l.current), (l.current = t));
        }
        return () => clearTimeout(l.current);
    }, [s]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : s > n
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(s) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let N0 = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = NJ();
            if (e.allowed) return U.intl.format(U.t.NRI6vt, { article: eC.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return U.intl.string(U.t.hIbRso);
                case "not_verified":
                    return U.intl.format(U.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, S.jsx)(
                                ie.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nm.openUserSettings)(h.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ip()(e.nextAllowed).format("MMMM Do YYYY");
                    return U.intl.format(U.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (tl.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                ts.Bo.get({ url: I.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        tl.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        tl.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !NJ().allowed,
        useLoading: () => (0, f.bG)([N$.A], () => N$.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => U.intl.string(U.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sT.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, S.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, S_.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            tl.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? NQ.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : NQ.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        NQ.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e));
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    N1 = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, nm.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nm.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var N2 = n(641216);
let N3 = (0, o4.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function N5() {
    let { enabled: e } = N3.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var N4 = n(884705);
function N6() {
    return (0, f.bG)([N4.A], () => N4.A.isTogglesDisabled());
}
function N8() {
    return !M.vf.useSetting();
}
function N7(e) {
    M.vf.updateSetting(!e);
}
function N9() {
    let e = N6(),
        t = M.H1.useSetting(),
        n = (0, NH.uM)();
    return e || t || n;
}
let Ce = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !N5(),
        useValue: N8,
        setValue: N7,
        useDisabled: N9,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    Ct = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: N5,
        useValue: N8,
        setValue: N7,
        useDisabled: N9,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function Cn() {
    return !M.H1.useSetting();
}
function Ci(e) {
    M.H1.updateSetting(!e);
}
function Cs() {
    let e = N6(),
        t = (0, NH.uM)();
    return e || t;
}
let Cl = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !N5(),
        useValue: Cn,
        setValue: Ci,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: Cs,
    }),
    Cr = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: N5,
        useValue: Cn,
        setValue: Ci,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: Cs,
    }),
    Ca = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = hO(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = hL();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hN.n1)(e))) && (0, nI.xl)(),
    }),
    Co = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Ca] });
var Cu = n(972737);
let Cd = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([NY.A], () => NY.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, NB.U)([I.YAq.USAGE_STATISTICS], []).catch(Cu.i)
                : (0, Cu.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, NB.U)([], [I.YAq.USAGE_STATISTICS]).catch(Cu.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: NH.uM,
    }),
    Cc = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: () => NZ() ?? void 0,
        initialize: () => {
            NY.A.fetchedConsents || (0, NB.Q)();
        },
        buildLayout: () => [N1, Cd, N2._, Cl, Ce, ...Nz, Nq, N0, Co],
    });
var Cg = n(15762);
let Cm = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(Cg.default.F3llsQ),
    useSubtitle: () => U.intl.string(Cg.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: hG.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CA() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [c7.Ay, sj.A],
        () => {
            let t = new Set(e);
            return c7.Ay.getFlattenedGuildIds().filter((e) => null != sj.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CE = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CA();
            if (0 === e.length) return U.intl.format(U.t.QJIJ5p, {});
            let t = sj.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? U.intl.format(U.t["T+8J4A"], { guildName: n })
                : U.intl.format(U.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = CA()),
                    0 ===
                    (t = (0, f.yK)(
                        [sj.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sj.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, S.jsx)(hK, { guild: t[0], size: hC.CD }),
                                    shape: hC.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, S.jsx)(hK, { guild: t[1], size: hC.CD }), shape: hC.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, S.jsx)(hK, { guild: t[0], size: hC.CD }),
                                    shape: hC.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Ch = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CE] }),
    Cx = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => U.intl.string(U.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: U.intl.string(U.t.Boxc8R),
                    desc: U.intl.string(U.t["nLj+nc"]),
                    value: e$.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: U.intl.string(U.t.YOIKBt),
                    desc: U.intl.string(U.t.y0JZ4s),
                    value: e$.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: U.intl.string(U.t.u0nlJv), desc: U.intl.string(U.t["4jnKHu"]), value: e$.KP.FRIENDS_ONLY },
            ];
        },
        useValue: M.KP.useSetting,
        setValue: function (e) {
            let t = M.KP.getSetting();
            M.KP.updateSetting(e);
            let i = (0, hB.gS)(t, e);
            null != i &&
                (0, sT.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, S.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [U.intl.string(U.t.Qnf32C)],
    }),
    Cp = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [Cx, Cm, Ch],
    });
var CS = n(952270),
    CT = n(678538);
let Cf = { [e$.tR.REAL_MONEY_GAMING]: CT.default.pmIitA },
    CI = Object.keys(Cf).map(Number),
    C_ = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(CT.default.foQaI1)],
        usePredicate: N5,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        CI.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(Cf[e]),
                            leading: CS.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, S.jsx)(Sc.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of CI) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(CT.default.foQaI1),
                description: U.intl.format(CT.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(CT.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    CN = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(CT.default.XUj46U),
        usePredicate: N5,
        buildLayout: () => [Cr, Ct, C_],
    });
var CC = n(714763),
    Cy = n(814278),
    Cb = n(730852),
    Cv = n(913122),
    Cj = n(977997),
    CO = n(144485);
async function CL(e, t) {
    if (e) {
        tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, Cy.to)(1), t?.());
        } catch (t) {
            let e = new Cv.LG(t);
            (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                NQ.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function CR(e) {
    let t,
        n,
        i =
            ((t = Cj.A.getVoiceStateForUser(dv.default.getId())),
            (n = sb.A.getChannel(t?.channelId)),
            dv.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? CO.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await CL(e, () => {
                      (Cb.default.disconnect(), Cb.default.selectVoiceChannel(i));
                  });
              },
          })
        : await CL(e);
}
n(603266);
let CD = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, Cy.Lu)() }),
    useValue: function () {
        return (0, f.bG)([CC.A], () => CC.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        CR(e);
    },
});
var CP = n(787392);
function CG() {
    return (0, f.yK)([CP.A], () => CP.A.getUserIds());
}
var CM = n(803306),
    CU = n(966327),
    CV = n(774156);
function Ck(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(),
        s = (0, f.bG)([lx.default], () => lx.default.getUser(t)),
        l = uf.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, Cy.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, Sb.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, CM.wz)(t);
        }, [t]),
        (0, S.jsxs)("div", {
            className: CV.uW,
            children: [
                null != s && (0, S.jsx)(CU.A, { className: CV.my, user: s, size: b._3.SIZE_40 }),
                (0, S.jsxs)("div", {
                    className: CV.Qq,
                    children: [
                        (0, S.jsx)(ie.D, {
                            className: CV.Xh,
                            onClick: a,
                            children: (0, S.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: U.intl.format(U.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, S.jsx)(ie.D, { onClick: r, className: CV.Qz, children: (0, S.jsx)(sm.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function Cw(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, Cy.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, Cy.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, S.jsxs)("div", {
        className: t,
        children: [
            (0, S.jsxs)("div", {
                className: CV.Qq,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: U.intl.format(U.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, S.jsx)(ie.D, {
                className: CV.Kk,
                onClick: r,
                children: (0, S.jsx)(uO.P, { size: "md", color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CF(e) {
    let { userId: t } = e,
        n = (0, f.yK)([CP.A], () =>
            W()(CP.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(Ck, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, S.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, S.jsx)(Cw, { className: CV.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, S.jsx)("div", { className: CV.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CB = n(464946),
    Cz = n(492422);
let CY = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = CG();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CG();
            return (0, S.jsxs)(CB.h, {
                children: [
                    (0, S.jsx)(CB._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, Cy.dc)() }),
                    }),
                    e.map((e) => (0, S.jsx)("div", { className: Cz.A, children: (0, S.jsx)(CF, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CX = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [CD, CY],
    }),
    CH = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [Cc, CN, Cp, CX],
    }),
    CW = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: NF.m,
        buildLayout: () => [CH],
    });
var CK = n(476713);
let CZ = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Cq = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [CZ] });
var CQ = n(875444);
function C$(e, t) {
    let n = (0, f.bG)([xA.default], () => xA.default.getFetchState()),
        i = (0, f.bG)([xA.default], () =>
            e ? xA.default.getNewestTokensForNonChildrenApplications() : xA.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, CQ.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || xe.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xA.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var CJ = n(514479);
function C0() {
    return (0, S.jsxs)("div", {
        className: CJ.d,
        children: [
            (0, S.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: CJ.x,
                children: U.intl.string(U.t["+0U77d"]),
            }),
            (0, S.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let C1 = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = C$(!0, !0);
        return e ? (0, S.jsx)(om.y, {}) : (0, S.jsx)(C0, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = C$(!0, !0);
        return e || 0 === t.length;
    },
});
function C2() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = C$(!0, !0);
    return !e && t.length > 0;
}
let C3 = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: C2,
    }),
    C5 = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t["ms+Tme"]),
        useSubtitle: () => U.intl.string(U.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.JIFnN9), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: U.intl.string(U.t.rRdsk1), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: U.intl.string(U.t.IVRPMX), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = M.TA.useSetting();
            return e === e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => M.TA.updateSetting(e),
        usePredicate: C2,
    });
function C4() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = C$(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oN.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var C6 = n(306537),
    C8 = n(40957);
function C7(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, NW.N)(s, NK.YX.VIEWED);
        }),
        (0, S.jsx)(iJ.w, {
            type: "info",
            iconAlign: l,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, S.jsx)("span", { className: C8.r, children: t }),
                    (0, S.jsx)(Z.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: (0, S.jsx)(v.$, { variant: "secondary", size: "sm", text: n, onClick: i }),
                    }),
                ],
            }),
        })
    );
}
function C9(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, NW.N)(e, NK.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, NW.N)(e, NK.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function ye() {
    let e,
        t = (0, NH.uM)(),
        n = (0, Ig.fk)(),
        i = (0, Ic.b8)(),
        s = (0, _0.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, f7.n)(f6.Vc)) return e;
    }
}
var yt = n(687123),
    yn = n(444802);
function yi() {
    let e = (0, yn.WX)();
    T.useEffect(() => {
        (0, NW.N)(NK.YA.AGE_CONFIRMATION_NOTICE, NK.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, NW.N)(NK.YA.AGE_CONFIRMATION_NOTICE, NK.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, NW.N)(NK.YA.AGE_CONFIRMATION_NOTICE, NK.YX.CONFIRM_AGE));
        }, []);
    return (0, S.jsx)(al.p, {
        messageType: al.Y.INFO,
        action: (0, S.jsx)(hi.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: U.intl.string(U.t.FDSSia),
            onClick: n,
        }),
        children: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, S.jsx)(ng.Anchor, { onClick: t, children: e }, n) }),
    });
}
function ys() {
    let e = (0, Ig.aX)(yt.t.REACTIVE_CHECK),
        t = (0, Ic.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yi };
    }, [e, t]);
}
var yl = n(323073),
    yr = n(386171),
    ya = n(96607);
let yo = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yr.hT,
        useDisabled: function () {
            let e = (0, ya.A)() ?? !0,
                t = (0, yl.sP)(),
                n = (0, Ic.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yl.p5)() && e
                ? f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yu = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yr.tI,
        useDisabled: function () {
            let e = (0, ya.A)() ?? !0,
                t = (0, yl.sP)(),
                n = (0, Ic.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yl.p5)() && e
                ? f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yd = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yc = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yd] });
n(667532);
var yg = n(390248),
    ym = n(632119),
    yA = n(945276),
    yE = n(389737),
    yh = n(566769);
function yx() {
    let e,
        t = (0, yA.A)() ?? !0,
        n = (0, NH.uM)(),
        i = (0, NH.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, a9.cf)([aC.A], () => aC.A.settings.textAndImages?.explicitContentSettings ?? (0, ym.C$)())),
        {
            explicitContentGuilds: (0, ym.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, ym.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, ym.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yg.hK)() && t.includes(e$.TO.SHOW)
            ? f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, ym.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: e$.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(_2.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yE.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? U.intl.string(_2.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yp() {
    let e,
        t = (0, yA.A)() ?? !0,
        n = (0, NH.uM)(),
        i = (0, NH.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, a9.cf)([aC.A], () => aC.A.settings.textAndImages?.goreContentSettings ?? (0, yn.T4)())),
        {
            goreContentGuilds: (0, yn.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yn.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yn.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yg.hK)() && t.includes(e$.TO.SHOW)
            ? f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yn.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: e$.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(_2.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yE.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yh.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? U.intl.string(_2.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yS = n(875162),
    yT = n(636745);
let yf = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yn.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: yx,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yp,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, S.jsxs)(CB.h, {
            children: [
                (0, S.jsx)(CB._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, S.jsx)(yS.A, { tabs: t, orientation: "vertical", tabsClassName: yT.v }),
            ],
        });
    },
    useSearchTerms: () => [
        U.intl.string(U.t["Hj/But"]),
        U.intl.string(U.t["N/oRI+"]),
        U.intl.string(U.t.QVdYsK),
        U.intl.string(U.t["aWD+tu"]),
        U.intl.string(U.t["5mnTa7"]),
        U.intl.string(U.t["K0OWP+"]),
    ],
});
var yI = n(639555),
    y_ = n(617641),
    yN = n(546140),
    yC = n(406935),
    yy = n(594061);
let yb = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: yN.L,
        setValue: function (e) {
            return yy.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = yC._t.create({ value: e });
                },
                yy.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y_.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yI.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yA.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    yv = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3upKU8"]),
        useInlineNotice: function () {
            var e;
            let t,
                n,
                i,
                s,
                l,
                r,
                a,
                o,
                u,
                d,
                c,
                g,
                m,
                A,
                E,
                h,
                x = NZ(),
                f =
                    ((s = (0, NH.uM)()),
                    (l = (0, Ig.fk)()),
                    (r = (0, Ic.b8)()),
                    (a = (0, _0.Z)()),
                    (o = C9(NK.YA.AGE_CONFIRMATION_NOTICE, f8)),
                    (u = C9(NK.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f3.M0)),
                    (d = T.useCallback(() => {
                        (0, NW.N)(NK.YA.AGE_CONFIRMATION_NOTICE, NK.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, NW.N)(NK.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, NK.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, f7.n)(f6.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(Ie.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: U.intl.string(Ie.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(Ie.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, _0.Z)()),
                    (t = (0, yn.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, NW.N)(NK.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, NK.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, NW.N)(NK.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, NK.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: U.intl.format(U.t.EUo0yj, {
                                    hook: (e, t) => (0, S.jsx)(ng.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, Ig.SJ)()),
                    (m = (0, Ic.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, NW.N)(NK.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, NK.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, NW.N)(NK.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, NK.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: h,
                                text: U.intl.format(U.t.OX4ybh, {
                                    hook: (e, t) => (0, S.jsx)(ng.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = ys();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [yf, yb, yo, yu, yc],
    });
var yj = n(923457),
    yO = n(750714);
let yL = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lx.default], () => lx.default.getCurrentUser()),
            i = (0, Ig.yv)(yj.p.SPAM_FILTERS);
        return e !== e$.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? e$.he.FRIENDS_AND_NON_FRIENDS
              : (yO.xY.get(t) ?? e$.he.NON_FRIENDS);
    },
    setValue: (e) => M.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: U.intl.string(U.t["+w5yKk"]), value: e$.he.FRIENDS_AND_NON_FRIENDS },
            { name: U.intl.string(U.t.yAPg6r), value: e$.he.NON_FRIENDS },
            { name: U.intl.string(U.t.FEXKsv), value: e$.he.DISABLED },
        ];
    },
    useSearchTerms: () => [U.intl.string(U.t.JzaP4h), U.intl.string(U.t.H9XOl3), U.intl.string(U.t.k4W40P)],
});
var yR = n(189883);
let yD = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, io.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, NH.uM)();
    },
});
var yP = n(665260);
let yG = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? yP.UI(t, I.dzt.MUTUAL_FRIENDS) : yP.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, NH.uM)();
        },
    }),
    yM = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? yP.UI(t, I.dzt.MUTUAL_GUILDS) : yP.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, NH.uM)();
        },
    }),
    yU = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [yD, yG, yM],
    });
var yV = n(420825);
let yk = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, yV.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    yw = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = yR.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: NZ,
        buildLayout: () => [yU, yk],
    });
var yF = n(994500),
    yB = n(428678),
    yz = n(717398),
    yY = n(730134),
    yX = n(276573);
function yH(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, S.jsxs)("div", {
        className: yX.wx,
        children: [
            (0, S.jsx)("div", {
                className: yX.zc,
                children: i ? (0, S.jsx)(yB.K, {}) : (0, S.jsx)(CS.EyeSlashIcon, {}),
            }),
            (0, S.jsxs)("div", {
                className: yX.Qq,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: U.intl.string(i ? U.t.PFOUKW : U.t["93ZDWE"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? U.intl.format(U.t["r91W/h"], { numberOfBlockedUsers: n })
                            : U.intl.format(U.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function yW(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([yF.A], () => yF.A.isBlocked(t)),
        s = (0, f.bG)([lx.default], () => lx.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? yz.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : yz.A.unignoreUser(t, tF.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, S.jsxs)("div", {
              className: ih()(yX.nM, { [yX.fW]: n }),
              children: [
                  (0, S.jsxs)("div", {
                      className: yX.eF,
                      children: [
                          (0, S.jsx)(yY.A, { user: s, size: b._3.SIZE_40 }),
                          (0, S.jsxs)("div", {
                              className: yX.Qq,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      text: U.intl.string(i ? U.t.XyHpKH : U.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function yK(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, S.jsx)(CB.h, {
        children: (0, S.jsxs)("div", {
            className: yX.Nr,
            children: [
                (0, S.jsx)(yH, { listType: n, numberOfUsers: t.length }),
                (0, S.jsx)("div", {
                    className: yX.jS,
                    children: t.slice(0, i).map((e, n) => (0, S.jsx)(yW, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, S.jsx)("div", {
                          className: yX.vM,
                          children: (0, S.jsx)(ie.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: yX.Qf,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: U.intl.format(U.t.jULEDr, {
                                      numberOfUsers: i + 5 < t.length ? 5 : t.length - i,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let yZ = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([yF.A], () => yF.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([yF.A], () => yF.A.getBlockedIDs());
            return (0, S.jsx)(yK, { userIds: e, listType: "blocked" });
        },
    }),
    yq = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([yF.A], () => yF.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([yF.A], () => yF.A.getIgnoredIDs());
            return (0, S.jsx)(yK, { userIds: e, listType: "ignored" });
        },
    }),
    yQ = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [yZ, yq],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([yF.A], () => ({
                hasBlockedUsers: yF.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: yF.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var y$ = n(22385),
    yJ = n(556534),
    y0 = n(111159),
    y1 = n(152056),
    y2 = n(428031),
    y3 = n(978433);
let y5 = { label: () => U.intl.string(U.t["32u1Dx"]), value: y$.YG };
var y4 = n(307863),
    y6 = n(954225);
function y8() {
    return (0, y4.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function y7(e, t) {
    tc.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let y9 = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: y8,
    useSubtitle: function () {
        let e = (0, yJ.Tx)(),
            t = (0, yJ.q9)(),
            n = (0, y4.e)();
        return e === y$.YG
            ? n
                ? U.intl.string(U.t.XXGmuB)
                : U.intl.string(U.t.wbYDfT)
            : t
              ? U.intl.string(U.t.V0ka0Q)
              : n
                ? U.intl.string(U.t.F9WY3f)
                : U.intl.string(U.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, yJ.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, y2.K)();
        return e === y$.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, NH.uM)();
        return (0, yJ.Tx)() === y$.YG && e;
    },
    setValue: function (e) {
        let t = y$.xk.getState().selectedGuildId;
        if (t === y$.YG) {
            var n;
            ((n = !e),
                (0, Cu.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l0.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), y7(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sj.A.getGuildIds() : []), y7(n, !0));
                    },
                }));
        } else {
            let n = (0, io.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                tc.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: y6.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var be = n(116774),
    bt = n(953298);
function bn(e, t) {
    tc.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bi() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bs = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bi,
        useSubtitle: function () {
            let e = (0, yJ.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, yJ.Tx)(),
                t = (0, y2.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, be.s)(),
                s = (0, NH.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === y$.YG && s ? !l : e === y$.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, yJ.Tx)(),
                t = (0, NH.uM)(),
                n = (0, y2.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, be.s)();
            return e === y$.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = y$.xk.getState().selectedGuildId;
            if (!e && (0, bt.w)())
                return void f5.A.showAgeVerificationGetStartedModal({ entryPoint: C6.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === y$.YG) {
                var n;
                ((n = !e),
                    (0, Cu.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l0.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bn(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sj.A.getGuildIds() : []), bn(n, !0));
                        },
                    }));
            } else {
                let n = (0, io.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    tc.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: y6.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bl = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [y8(), bi()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, y$.xk)(),
                s = (0, f.bG)([c7.Ay], () => c7.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sj.A], () => sj.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, y2.K)()),
                    (0, f.bG)(
                        [sj.A],
                        () => {
                            let n = new Set(e);
                            return sj.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            T.useEffect(
                () =>
                    y1.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = y$.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === y$.YG && null != a
                                ? i(a)
                                : "" === e && n !== y$.YG && i(y$.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...y5,
                            id: y5.value,
                            label: y5.label(),
                            leading: (0, S.jsx)("div", {
                                className: y3.KP,
                                children: (0, S.jsx)(y0.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: y3.cl,
                                }),
                            }),
                        }),
                        s.forEach((t) => {
                            let n = l[t];
                            null != n &&
                                e.push({
                                    id: n.id,
                                    label: n.name,
                                    value: n.id,
                                    leading: (0, S.jsx)(gd.Ay, {
                                        className: y3.cl,
                                        guild: n,
                                        size: gd.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === y$.YG && r > 0;
            return (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(Sc.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: y3.h_,
                            children: U.intl.format(U.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, S.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    br = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, yJ.Tx)(),
                t = ye();
            return e === y$.YG && null != t;
        },
        Component: function () {
            let e = ye(),
                t = C9(NK.YA.AGE_CONFIRMATION_NOTICE, f8),
                n = C9(NK.YA.CONTENT_AND_SOCIAL_NOTICE, f3.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, S.jsx)(C7, {
                        noticeType: NK.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(Ie.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(Ie.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, S.jsx)(C7, {
                        noticeType: NK.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: U.intl.format(Ie.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: U.intl.string(U.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    ba = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = NZ(),
                t = ys();
            if ((0, yJ.Tx)() === y$.YG) return e ?? t;
        },
        buildLayout: () => [bl, y9, bs, br],
    }),
    bo = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [yL] }),
    bu = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = C4();
            function t(e, t) {
                return (0, S.jsx)(
                    Q.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? U.intl.string(U.t.Amr1IZ)
                : 1 === e.length
                  ? U.intl.format(U.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? U.intl.format(U.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : U.intl.format(U.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => U.intl.string(U.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = C4();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, S.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hC.CD,
                                height: hC.CD,
                            }),
                            shape: hC.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, S.jsx)("img", {
                                    src: G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: hC.YP,
                                    height: hC.YP,
                                }),
                                shape: hC.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            xe.A.fetch();
        },
        buildLayout: () => [C3, C5, C1, Cq],
    }),
    bd = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [yv, bo, ba, yw, bu, yQ],
    }),
    bc = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: CK.l,
        buildLayout: () => [bd],
    });
var bg = n(782603),
    bm = n(899847),
    bA = n(695515);
let bE = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => U.intl.string(U.t["8rHeOr"]),
        useSubtitle: () => U.intl.string(U.t["eJE6+J"]),
        useValue: M.cU.useSetting,
        setValue: M.cU.updateSetting,
        useOptions: () =>
            H.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: U.intl.formatToPlainString(U.t.iXLF9W, { minutes: e }),
            })),
    }),
    bh = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, nm.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    bx = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.JZxxGx),
        useSubtitle: () => U.intl.string(U.t.HDLtJl),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.getTTSType()),
        setValue: (e) => aw.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: U.intl.string(U.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: U.intl.string(U.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => X.$j,
    }),
    bp = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bS = (0, E.bd)(bp, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tN(bp, {
                formatter: (e) => {
                    let { title: t, index: n } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === n
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [bE, bh, bx],
    }),
    bT = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [bS],
    }),
    bf = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aG.A], () => !aG.A.getDisableUnreadBadge());
        },
        setValue: (e) => aw.default.setDisableUnreadBadge(!e),
    }),
    bI = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [bf],
    });
var b_ = n(840559),
    bN = n(997187);
let bC = (0, o4.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var by = n(723923);
let bb = by.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([bN.A], () => bN.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b_.CA)(e.category, t),
        }),
    ),
    bv = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([bN.A], () => bN.A.getEmailSettings());
            return by.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b_.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bj = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = bC.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = bN.A.getEmailSettings();
            e || (0, b_.cR)();
        },
        buildLayout: () => [...bb, bv],
    }),
    bO = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aG.A], () => aG.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aw.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var bL = n(832712),
    bR = n(543465),
    bD = n(790782);
let bP = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([bR.Ay], () => bR.Ay.useNewNotifications),
    setValue: function (e) {
        (bL.A.setAccountFlag(hG.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Ew.w.set("turnedOffNewNotifications", !0),
                tc.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sj.A.getGuildsArray().filter(
                        (e) => bR.Ay.resolveGuildUnreadSetting(e) === bD.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lx.default, bR.Ay],
            () =>
                lx.default.getCurrentUser()?.isStaff() ||
                lx.default.getCurrentUser()?.isStaffPersonal() ||
                bR.Ay.useNewNotifications,
        ),
});
var bG = n(534654);
let bM = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.screenDowntimeReminder),
        setValue: (e) => aw.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bG.A)(),
                t = (0, _Q.Du)();
            return e && t;
        },
    }),
    bU = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bG.A)(),
                t = (0, _Q.Du)();
            return e && t;
        },
    }),
    bV = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    bk = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bw = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bF = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bB = n(815807);
let bz = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, bB.n4)(e, M.Zp.getSetting()),
    }),
    bY = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bX = (0, o4.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bH = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hG.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => bX.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bW = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [bw, bV, bk, bY, bH, bF, bz],
    }),
    bK = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.taskbarFlash),
        setValue: (e) => aw.default.setTaskbarFlash(e),
        usePredicate: () => (0, nI.uF)(),
    }),
    bZ = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [bO, bK, bW, bP, bU, bM],
    });
var bq = n(965957),
    bQ = n(312671),
    b$ = n(235079);
let bJ = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aM.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([bQ.A], () => bQ.A.getSoundpack()),
            t = aM.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aM.A.getHolidaySoundpack();
        (tx()(null != t, "predicate should fail if no soundpack is available"), (0, bq.p)(e ? t : b$.i.CLASSIC));
    },
    usePredicate: aM.A.useIsEligible,
});
var b0 = n(970931);
let b1 = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: b0.kB,
        useDisabledMessage: () => ((0, b0.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    b2 = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    b3 = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => az("message3") }),
        useValue: () =>
            (0, f.bG)([aG.A], () => aG.A.getNotifyMessagesInSelectedChannel() && !aG.A.getDisableAllSounds()),
        setValue: (e) => aw.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds()),
    }),
    b5 = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds()),
        setValue: (e) => aw.default.toggleDisableAllSounds(e),
    }),
    b4 = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aB();
            };
        },
        buildLayout: () => [aY(b1), b3, aY(b2), b5],
    }),
    b6 = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    b8 = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [b6] }),
    b7 = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [bJ, b4, b8],
    }),
    b9 = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bA.A.getAgeGroup() || bA.A.isLoading() || (bA.A.canRefetch() && bm.Ay.initialPageLoad());
        },
        buildLayout: () => [bZ, b7, bI, bj, bT],
    }),
    ve = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bg.BellIcon,
        buildLayout: () => [b9],
    }),
    vt = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Nr, CW, bc, ve, Nw],
    });
var vn = n(387758),
    vi = n(271866),
    vs = n(147964),
    vl = n(868511);
let vr = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vs.A], () => null != vs.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sT.openModal)((e) => (0, S.jsx)(vl.A, { ...e })) : vi.cL();
        },
    }),
    va = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => ux.p5,
    }),
    vo = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [va, vr] }),
    vu = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vo] }),
    vd = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vn.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vu],
    });
var vc = n(70688),
    vg = n(830215);
let vm = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vc.DoorExitIcon,
        onClick: () => {
            (0, n7.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vg.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vA = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vd, vm],
    }),
    vE = (0, E.Hr)({ buildLayout: () => [fJ, vt, A7, ou, SI, hI, vA], analyticsKey: "user_settings" });
