n.d(t, { D: () => vZ });
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
    U = n(660183),
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
    J = n(113494),
    $ = n(782134),
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
            icon: e ? J.PauseIcon : $.PlayIcon,
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
    ex = n(964404);
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
var eJ = n(873298);
let e$ = (0, E.Qx)(h.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => U.intl.string(U.t["C/5V0A"]),
        useSubtitle: () => U.intl.string(U.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: U.intl.string(U.t["7iegX4"]), value: eJ.NS.COMPACT },
            { name: U.intl.string(U.t.bBvAEH), value: eJ.NS.DEFAULT },
            { name: U.intl.string(U.t["4cuYHx"]), value: eJ.NS.COZY },
        ],
        useValue: () => M.Xi.useSetting(),
        setValue: (e) => {
            e !== eJ.NS.UNSET_UI_DENSITY && M.Xi.updateSetting(e);
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
let e6 = (0, E.sN)(h.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
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
var e4 = n(775121),
    e8 = n(723702);
let e7 = (0, E.sN)(h.X.APPEARANCE_ZOOM, {
        usePredicate: () => e8.isPlatformEmbedded,
        useTitle: () => U.intl.string(U.t.i19n5L),
        useSubtitle: () => U.intl.format(U.t["x9PK/3"], { modKey: e4.A.modKey }),
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
        buildLayout: () => [e$, e2, e6, e7],
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
    tJ = n(82498),
    t$ = n(174197),
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
                        (0, tJ.uq)(t0.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, S.jsx)("div", {
                ...n,
                ref: t,
                children: (0, S.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, S.jsx)(tZ.m, { disabled: i, size: t$.N8.SIZE_48 }),
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
    t6 = (0, E.AK)(h.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.UDr3Iy),
        useSearchTerms: () => [U.intl.string(U.t.UDr3Iy)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    t4 = (0, E.gN)(h.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t6] });
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
        buildLayout: () => [nu, nd, nc, nE, nh, nA, nr, t4],
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
    nb = n(85395),
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
            { id: "guild", label: U.intl.string(U.t["hrS/Pc"]), value: eJ.tI.GUILD },
            { id: "personal", label: U.intl.string(U.t.mlvXIq), value: eJ.tI.PERSONAL },
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
    nJ = (0, E.zZ)(h.X.APPEARANCE_THEME_CATEGORY, {
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
    n$ = (0, E.t_)(h.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [nJ, t5, nx, tz, nf, nU, tE],
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
        buildLayout: () => [n$],
    });
var n2 = n(37646),
    n3 = n(434404);
let n5 = (0, E.t_)(h.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n3.F],
    }),
    n6 = (0, E.i4)(h.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n2.U,
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n5],
    });
var n4 = n(3137),
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
        i = (0, f.cf)([n4.A], () => n4.A.getState()),
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
        usePredicate: () => (0, f.bG)([n4.A], () => n4.A.settingsVisible),
        buildLayout: () => [iZ],
    });
var iQ = n(307301),
    iJ = n(410767),
    i$ = n(683071),
    i0 = n(97260),
    i1 = n(710195),
    i2 = n(57757),
    i3 = n(188321),
    i5 = n(695366),
    i6 = n(812729),
    i4 = n.n(i6),
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
            i4(),
        ),
        [n] = (0, i7.A)([st(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var si = n(769015),
    ss = n(192820),
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
    return e4.A.hasBind(n)
        ? (0, S.jsx)("div", {
              className: sF.$e,
              children: (0, S.jsx)(i$.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sw.Yy.has(n)
          ? (0, S.jsx)("div", {
                className: sF.$e,
                children: (0, S.jsx)(i$.w, {
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
    sK = n(950869),
    sZ = n(532624),
    sq = n(731854),
    sQ = n(603933);
let sJ = function () {
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
    s$ = (0, E.E2)(h.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["069nVT"])],
        Component: function () {
            return nI.Av
                ? (0, S.jsx)(sJ, {})
                : (0, S.jsx)(i$.w, {
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
let s6 = (0, E.E2)(h.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.Lz5KHI)],
        Component: () => (0, S.jsx)(s5, { showHeader: !1 }),
    }),
    s4 = (0, E.zD)(h.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => U.intl.string(eL.default.rea2Ar),
        useSubtitle: () => U.intl.string(eL.default.DwBO0x),
        useValue: () => (0, f.bG)([i3.A], () => i3.A.isEnabledFor(!0)),
        setValue: (e) => {
            (tc.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i3.A.runningGameId }),
                tl.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
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
    lg = n(97483),
    lm = n(451704);
async function lA() {
    try {
        await lE();
    } catch {
        (0, lc.P)({ id: "performance-trace-failed", type: lg.Ck.FAILURE, message: U.intl.string(U.t["8ihs9i"]) });
    }
}
async function lE() {
    var e;
    let t = nC.A.tracing;
    if (null == t) return;
    (0, lc.P)({ id: "performance-trace-capturing", type: lg.Ck.MESSAGE, message: U.intl.string(U.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nC.A.processUtils.getSystemInfo(),
            nC.A.processUtils.getSystemMetrics((0, lm.getIsNativeSystemCpuTimesEnabled)()),
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
let lh = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
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
                ((0, tW.default)(), lA());
            },
        });
    },
});
function lx() {
    tl.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lp = n(287809);
let lS = (0, E.Tf)(h.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lx();
    },
});
var lT = n(114129),
    lf = n(442325),
    lI = n(858760);
let l_ = (0, E.zD)(h.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        usePredicate: () => lI.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nI.xl)(),
        useValue: () => (0, f.bG)([lf.A], () => lf.A.isUserOptedIn()),
        setValue: lT.lj,
    }),
    lN = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lS, lh, l_],
    }),
    lC = (0, E.zZ)(h.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t.cg6ltt),
        buildLayout: () => [li, ll, ls, s9],
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        initialize: () => {
            ln();
        },
    }),
    ly = (0, E.zZ)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["069nVT"]),
        useSubtitle: () => U.intl.string(U.t.T4LZVL),
        buildLayout: () => [s$],
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
                                  (0, S.jsx)(i$.w, {
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
    lb = (0, E.zZ)(h.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Lz5KHI),
        buildLayout: () => [s6],
    }),
    lv = (0, E.zZ)(h.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+XZgmA"]),
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        buildLayout: () => [lo],
    }),
    lj = (0, E.zZ)(h.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => U.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, f.bG)(
                [i3.A, i1.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i3.A.hasDetectedGame &&
                    (0, i2.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s4],
    }),
    lO = (0, E.t_)(h.X.SYSTEM_PANEL, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        buildLayout: () => [lC, ly, lb, lv, lj, lN],
    }),
    lL = (0, E.i4)(h.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        icon: iJ.F,
        buildLayout: () => [lO],
    });
var lR = n(831544),
    lD = n(922795),
    lP = n(212245),
    lG = n(329551),
    lM = n(285918),
    lU = n(312987),
    lV = n(952572),
    lk = n(382003);
let lw = (0, E.E2)(h.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.lZTUPs)],
        usePredicate: lV.A,
        Component: function () {
            let e = (0, lP.p)(),
                t = T.useRef(!1),
                n = (0, f.bG)([ss.Ay], () => ss.Ay.getVideoDeviceId()),
                [i, s] = T.useState((0, lG.i)(lp.default.getCurrentUser())),
                l = T.useRef(i);
            return (
                T.useEffect(
                    () => () => {
                        t.current && (0, lM._C)(l.current);
                    },
                    [],
                ),
                (0, S.jsx)(lk.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lU.gB)(n, { location: e.location }).catch(I.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lF = (0, E.zD)(h.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => U.intl.string(U.t["3Ppr1h"]),
        useSubtitle: () => U.intl.string(U.t.WNbX4O),
        useValue: M.bm.useSetting,
        setValue: (e) => {
            (M.bm.updateSetting(e), tc.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lB = n(625841),
    lz = n(74848),
    lY = n(204050);
let lX = (0, e_.D)(() => ({ previewEnabled: !1 })),
    lH = (0, E.E2)(h.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.FsQ3OR)],
        Component: function () {
            let e = (0, f.bG)([ss.Ay], () => ss.Ay.isVideoAvailable()),
                { id: t } = (0, lz.x5)(sq.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eY.Ay)();
            return (0, S.jsx)(lB.U, {
                label: U.intl.string(U.t.FsQ3OR),
                deviceType: sq.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lY.p)()
                    ? U.intl.format(U.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lX.setState({ previewEnabled: !1 }),
                                  window.open((0, lY.i)(t)),
                                  tc.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lW = n(745317),
    lK = n(9219);
let lZ = (0, E.E2)(h.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [U.intl.string(U.t.JIf4v7)],
        Component: function () {
            let e = ss.Ay.getCameraComponent(),
                t = (0, f.bG)([ss.Ay], () => ss.Ay.getVideoDeviceId()),
                n = lX.useField("previewEnabled"),
                i = (0, f.bG)([ss.Ay], () => ss.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lX.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, S.jsx)("div", {
                      className: lK.T9,
                      children: (0, S.jsxs)("div", {
                          className: lK.Xi,
                          children: [
                              (0, S.jsxs)("div", {
                                  className: lK.UI,
                                  children: [
                                      (0, S.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, S.jsx)(lW.kE, {}),
                                  ],
                              }),
                              (0, S.jsx)(lW.eK, {}),
                          ],
                      }),
                  })
                : (0, S.jsx)("div", {
                      className: lK.T9,
                      children: (0, S.jsx)(sA.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, S.jsx)(v.$, {
                              variant: "primary",
                              text: U.intl.string(U.t.JIf4v7),
                              onClick: () => lX.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lq = (0, E.zZ)(h.X.CAMERA_CATEGORY, {
        useTitle: () => U.intl.string(U.t.uje3P9),
        usePredicate: () => (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.VIDEO)),
        buildLayout: () => [lZ, lF, lH, lw],
    });
var lQ = n(827343);
let lJ = (0, E.zD)(h.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => U.intl.string(U.t.qFphsa),
        useSubtitle: () => U.intl.string(U.t.cQfwyY),
        usePredicate: function () {
            return (0, nI.j9)();
        },
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lQ.default.setOpenH264Enabled(e),
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
        setValue: lQ.default.setAecDump,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isAecDumpSupported());
        },
    });
var l0 = n(139033),
    l1 = n(862482),
    l2 = n(640238),
    l3 = n(825484),
    l5 = n(144009),
    l6 = n(487329),
    l4 = n(353835);
let l8 = (0, e_.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l7() {
    let e = await nC.A.fileManager.getLogPath();
    nC.A.fileManager.showItemInFolder(e);
}
function l9(e) {
    (0, n7.A)({
        title: U.intl.string(U.t["7UXEF2"]),
        subtitle: U.intl.string(U.t.IYPrRl),
        confirmText: U.intl.string(U.t.BddRzS),
        onConfirm: () => lQ.default.setDebugLogging(e),
    });
}
async function re(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await ss.Ay.getMediaEngine().writeAudioDebugState(),
            await l4.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l5.a)(I.Umv.RTC),
            (e = U.intl.string(U.t["fKBB8+"])),
            (t = U.intl.string(U.t.BvyxE7)),
            (0, l0.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = U.intl.string(U.t.QZg0J7)),
            (t = i ?? U.intl.string(U.t.VzHcSm)),
            (n = (0, l6.B1)(l6.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = U.intl.formatToPlainString(U.t.ejOT95, { errorCode: n })),
            (0, sT.openModal)((n) =>
                (0, S.jsx)(l2.a, {
                    header: e,
                    confirmButtonColor: l1.$n.Colors.BRAND,
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
async function rt() {
    await re({
        onUploadStart: () => l8.setState({ isUploading: !0 }),
        onUploadFinish: () => l8.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rn = (0, E.E2)(h.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [U.intl.string(U.t["726JHL"]), U.intl.string(U.t.EbwFfR), U.intl.string(U.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.DEBUG_LOGGING));
        return nI.Av && e && null != nC.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.getDebugLogging()),
            t = l8.useField("isUploading"),
            n = l8.useField("isDisabled"),
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
                            onChange: l9,
                        }),
                        (0, S.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, S.jsxs)(l3.e, {
                                children: [
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: rt,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.nuPtYi),
                                        onClick: l7,
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
var ri = n(233545),
    rs = n(58663),
    rl = n(412780);
function rr() {
    return (0, f.bG)([lp.default, ss.Ay], () => {
        let e = lp.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s8.Ay.releaseChannel || "development" === s8.Ay.releaseChannel,
            i = ss.Ay.supports(sq.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let ra = (0, E.zD)(h.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.U4FgFK),
        useSubtitle: () => U.intl.string(U.t.Lm72RU),
        useValue: function () {
            return (0, f.bG)([rl.Ay], () => rl.Ay.shouldRecordNextConnection());
        },
        setValue: rs.A,
        usePredicate: rr,
    }),
    ro = (0, E.Tf)(h.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.nJnOHO),
        useLabel: () => U.intl.string(U.t["3xjX0U"]),
        onClick: ri.YW,
        usePredicate: rr,
    });
var ru = n(926919),
    rd = n(111162),
    rc = n(855302);
let rg = (0, E.zD)(h.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => U.intl.string(U.t["0CEP6e"]),
        useSubtitle: () => U.intl.string(U.t["kBXuW+"]),
        useValue: function () {
            return (0, f.bG)([rd.default], () => rd.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rd.default.isStreamInfoOverlayEnabled;
            ((0, rc.A)("stream_info_overlay_enabled", e, t), (0, ru.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return M.Q_.useSetting();
        },
    }),
    rm = (0, E.bd)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t["/B4I8H"]) : U.intl.string(U.t.BTlsWH)),
        useCollapsedSubtitle: () => U.intl.string(U.t.la1Ys4),
        buildLayout: () => [rg, l$, ra, ro, rn],
    });
function rA(e, t, n) {
    (0, n7.A)({ title: e, subtitle: t, confirmText: U.intl.string(U.t.BddRzS), onConfirm: n });
}
let rE = (0, E.Tf)(h.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => U.intl.string(U.t.SXfv1v),
        useSubtitle: () => U.intl.string(U.t["buA5/q"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        onClick: function () {
            rA(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), lQ.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rh = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [lJ, rm, rE],
    });
var rx = n(736056),
    rp = n(360729),
    rS = n(446243),
    rT = n(558076),
    rf = n(270103);
let rI = (0, E.zD)(h.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => U.intl.string(rf.default.qYzpsI),
        useSubtitle: () => U.intl.string(rf.default["+vMoL1"]),
        useValue: () => (0, f.bG)([rT.A], () => rT.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rS.Ft)(e),
    }),
    r_ = (0, E.zZ)(h.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => U.intl.string(rf.default.wRLmM0),
        usePredicate: function () {
            let e = (0, f.yK)([sj.A], () => sj.A.getGuildIds()),
                { loaded: t, override: n } = (0, f.cf)([rx.A], () => ({
                    loaded: rx.A.getLoadedGuildExperiment(rp.vJ),
                    override: rx.A.getExperimentOverrideDescriptor(rp.vJ),
                }));
            return (0, T.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rp.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rI],
    });
var rN = n(347481),
    rC = n(852712),
    ry = n(179172),
    rb = n(868162);
let rv = (0, E.zD)(h.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => U.intl.string(U.t.gF8HJo),
        useSubtitle: () => U.intl.string(U.t.cfrfyZ),
        useValue: function () {
            return (0, f.bG)([rb.A], () => !0 !== rb.A.getState().neverShowModal);
        },
        setValue: function (e) {
            ry.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rj = (0, E.zD)(h.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => U.intl.string(U.t.cUMdH0),
        useSubtitle: () => U.intl.string(U.t["6EjbvA"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lQ.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, f.bG)([ss.Ay, rN.A], () => {
                let e = ss.Ay.getInputDeviceId();
                return rN.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isAutomaticGainControlSupported() && ss.Ay.isInputProfileCustom());
        },
    }),
    rO = (0, E.sN)(h.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => U.intl.string(U.t.AlybXj),
        setValue: (e) =>
            lQ.default.setAttenuation(
                e,
                ss.Ay.getAttenuateWhileSpeakingSelf(),
                ss.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => ss.Ay.getAttenuation(),
    }),
    rL = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => U.intl.string(U.t["9dHxRY"]),
        useValue: () => (0, f.bG)([ss.Ay], () => ss.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lQ.default.setAttenuation(ss.Ay.getAttenuation(), e, ss.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rR = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([ss.Ay], () => ss.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lQ.default.setAttenuation(ss.Ay.getAttenuation(), ss.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rD = (0, E.FW)(h.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.oSdBvW),
        useSubtitle: () => U.intl.string(U.t["0A/8Rt"]),
        usePredicate: () => (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.ATTENUATION)),
        buildLayout: () => [rO, rL, rR],
    }),
    rP = (0, E.zD)(h.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.DFPXIG),
        useSubtitle: () => U.intl.string(U.t["UyRX+C"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lQ.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.showBypassSystemInputProcessing() && ss.Ay.isInputProfileCustom());
        },
    }),
    rG = (0, E.zD)(h.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => U.intl.string(U.t.jrWHD3),
        useSubtitle: () => U.intl.string(U.t.YCCMkJ),
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => !ex.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rc.A)("switch_channel_warning_enabled", e, !ex.Ay.disableVoiceChannelChangeAlert),
                nX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rM = (0, E.zD)(h.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
            lQ.default.setMode(t, { vadUseKrisp: e });
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
    rU = (0, E.Hn)(h.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => U.intl.string(U.t.wVBHr0),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rA(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => lQ.default.setAudioSubsystem(e));
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
    rV = (0, E.zD)(h.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => U.intl.string(U.t.uancuJ),
        useSubtitle: () => U.intl.string(U.t.I1Eoqq),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getQoS());
        },
        setValue: function (e) {
            lQ.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.QOS));
        },
    }),
    rk = (0, E.zD)(h.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => U.intl.string(U.t["4rsOPQ"]),
        useSubtitle: () => U.intl.string(U.t.jtiiCw),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lQ.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rw = (0, E.bd)(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.KHsSWK) : U.intl.string(U.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tN(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rj, rM, rP, rv, rk, rG, rD, rU, rV],
    }),
    rF = (0, E.zD)(h.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => U.intl.string(U.t.iWTwu6),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lQ.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, f.bG)([ss.Ay, rN.A], () => {
                let e = ss.Ay.getInputDeviceId();
                return rN.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom());
        },
    });
var rB = n(205693),
    rz = n(451988),
    rY = n(475883),
    rX = n(9761);
let rH = (0, tq.Ld)();
function rW(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, S.jsx)("div", {
        role: "meter",
        className: ih()(rY.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, S.jsx)("div", { className: ih()(rY.Jx, rY.NU, { [rY.zY]: t && !r, [rY.r9]: r }) }),
    });
}
function rK(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([ss.Ay], () => ({
            threshold: ss.Ay.getModeOptions().threshold,
            autoThreshold: ss.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([ss.Ay], () => ss.Ay.getMode());
    return (0, S.jsx)("section", {
        className: ih()(rY.Mo, rY.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, S.jsx)(q.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lQ.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n8.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n8.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rH,
            disabled: l,
            children: (0, S.jsxs)("div", {
                className: ih()(rY.NU, rY.TL, rY.Jx, rX.bar),
                children: [
                    (0, S.jsx)("div", { className: ih()(rY.GS, rY.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, S.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rZ = (0, E.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
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
                lQ.default.setMode(t, { autoThreshold: e, threshold: n });
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
                        let e = new rz.Ep();
                        return (
                            e.start(1e3, () => {
                                (ss.Ay.getMediaEngine().on(rB.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (ss.Ay.getMediaEngine().removeListener(rB.bg.VoiceActivity, s), e.stop());
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
                        className: rY.B4,
                        children: (0, S.jsx)(i$.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => lQ.default.enable(!0) }),
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
                                  ? (0, S.jsx)(rW, {
                                        isSpeaking: l,
                                        className: rY.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rK, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, S.jsx)(rW, {
                                        isSpeaking: l,
                                        className: rY.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(rK, {
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
var rq = n(366010);
let rQ = n(993830),
    rJ = n(413142),
    r$ = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r0() {
    let e = (0, f.bG)([nW.A], () => (0, rq.q)(nW.A.theme));
    return (0, S.jsx)("img", { src: e ? rQ : rJ, width: 48, height: 32, alt: "" });
}
let r1 = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.isInputProfileCustom() && ss.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (lQ.default.setNoiseCancellation("KRISP" === e, r$),
                    lQ.default.setNoiseSuppression("STANDARD" === e, r$));
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
                s && (0, S.jsx)(r0, {}),
            ],
        });
    },
});
var r2 = n(934729),
    r3 = n(621380);
let r5 = !nI.Av;
function r6() {
    return (0, f.bG)([ss.Ay], () => ss.Ay.getMode() === sq.TB.PUSH_TO_TALK);
}
let r4 = (0, E.zD)(h.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nI.Av ? U.intl.string(U.t.tG4Np5) : U.intl.string(U.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, f.bG)([ss.Ay], () => ss.Ay.getMode());
        return T.useMemo(() => {
            if (!nI.Av && e === sq.TB.PUSH_TO_TALK)
                return U.intl.format(U.t["VHI4+Y"], { onDownloadClick: () => (0, r2._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.getActiveInputProfile() !== r3.m.STUDIO);
    },
    useValue: function () {
        return (0, f.bG)([ss.Ay], () => ss.Ay.getMode() === sq.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sq.TB.PUSH_TO_TALK : sq.TB.VOICE_ACTIVITY),
            (i = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sq.TB.PUSH_TO_TALK &&
                r5 &&
                (0, sT.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, S.jsx)(e, {
                            title: U.intl.string(U.t.Kdt0Gb),
                            confirmText: U.intl.string(U.t["1WjMbC"]),
                            cancelText: U.intl.string(U.t.BddRzS),
                            onConfirm: () => (0, r2._)("PTT Limited Modal"),
                            body: U.intl.string(U.t.NIozvt),
                            ...t,
                        });
                }),
            lQ.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
});
var r8 = n(484599);
let r7 = (0, E.E2)(h.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        usePredicate: r6,
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
                    className: r8.e,
                    children: (0, S.jsx)(sx.A, {
                        defaultValue: e,
                        onChange: (e) => lQ.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    r9 = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            lQ.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
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
        usePredicate: r6,
    });
var ae = n(201242),
    at = n(844981),
    an = n(943679);
function ai() {
    return (0, at.Ay)("VoiceSettings");
}
let as = (0, E.zD)(h.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => U.intl.string(an.default.LGDPhA),
        useSubtitle: function () {
            let e = ai();
            if ((0, at.Xt)(e))
                return e === at.L3.BLOCKED_MONO_OUTPUT
                    ? U.intl.string(an.default.rOXfEw)
                    : U.intl.string(an.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, f.bG)([ae.A], () => ae.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lQ.default.setSpatialAudio(e, [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ai() !== at.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, at.Xt)(ai());
        },
    }),
    al = (0, E.Qx)(h.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => U.intl.string(U.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rC._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH), U.intl.string(U.t.VZPR0R), U.intl.string(U.t.cjPbpT)],
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getActiveInputProfile() ?? r3.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lQ.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rC.d)({ location: "InputProfileCategory" });
            return [
                { value: r3.m.VOICE_ISOLATION, name: U.intl.string(U.t.cjPbpT), desc: U.intl.string(U.t.CzhvnE) },
                { value: r3.m.STUDIO, name: U.intl.string(U.t.VZPR0R), desc: U.intl.string(U.t.ZaJksS) },
                { value: r3.m.CUSTOM, name: U.intl.string(U.t["N/PQjv"]), desc: U.intl.string(U.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ar = (0, E.zZ)(h.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, f.bG)([rN.A, ss.Ay], () => {
                let e = ss.Ay.getInputDeviceId();
                return (
                    (rN.A.hasEchoCancellation(e) || rN.A.hasNoiseSuppression(e) || rN.A.hasAutomaticGainControl(e)) &&
                    ss.Ay.isInputProfileCustom()
                );
            });
            return T.useMemo(() => {
                if (e) return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [al, rZ, r1, rF, as, r4, r7, r9, rw],
    });
var aa = n(403581),
    ao = n(512950),
    au = n(983851),
    ad = n(687021),
    ac = n(128450),
    ag = n(796774),
    am = n(209932),
    aA = n(813564),
    aE = n(984813),
    ah = n(922016),
    ax = n(305866),
    ap = n(22231),
    aS = n(158045),
    aT = n(792348),
    af = n(674168),
    aI = n(511558),
    a_ = n(817232),
    aN = n(647451);
function aC(e) {
    let { onSelect: t } = e,
        [n, i] = T.useState(!1),
        s = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        l = aS.Ay.canUseCustomCallSounds(s),
        r = T.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, S.jsx)(ah.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, S.jsx)(ax.l, {
                children: (0, S.jsx)(aI.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, S.jsx)(af.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, S.jsx)(a_.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, S.jsx)(ap.PencilIcon, { size: "md", color: "currentColor", className: aN.Wo }),
            }),
    });
}
function ay(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aT.A)(t, null),
        i =
            0 === (0, aA.wH)()
                ? U.intl.string(U.t.OASXjt)
                : U.intl.formatToPlainString(U.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, S.jsx)(a_.dT, {
        onClick: n,
        text: i,
        children: (0, S.jsx)(au.H, { size: "md", color: "currentColor", className: aN.wg }),
    });
}
function ab(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, S.jsxs)("div", {
        className: aN.D6,
        children: [
            (0, S.jsxs)("div", {
                className: aN.kL,
                children: [
                    a && (0, S.jsx)(tU.A, { emojiId: l, emojiName: r, className: aN.Zg }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aN.dj,
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
                        ? (0, S.jsx)(ay, { sound: t })
                        : (0, S.jsx)(au.H, { size: "md", color: "currentColor", className: aN.Gk }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: aN.kL,
                children: [
                    (0, S.jsx)(aC, { onSelect: i }),
                    s &&
                        !n &&
                        (0, S.jsx)(a_.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, S.jsx)(sm.TrashIcon, {
                                size: "md",
                                color: n8.A.unsafe_rawColors.RED_400.css,
                                className: aN.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var av = n(617617);
n(980504);
var aj = n(806050);
function aO(e) {
    return (0, f.bG)([am.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return am.A.getSound("0" === t ? "0" : t, n);
    });
}
function aL(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([av.A], () => av.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aO(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, S.jsxs)("div", {
        className: aj.Io,
        children: [
            r
                ? (0, S.jsx)(tU.A, { emojiId: s, emojiName: l, className: aj.nW })
                : (0, S.jsx)(au.H, { size: "md", color: "currentColor", className: aj.nW }),
            (0, S.jsx)(Q.E, { className: aj.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aR = (0, E.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eY.Ay)(),
            [t, n] = T.useState("0"),
            i = (0, aE.mz)(t),
            s = aO(i),
            l = i?.type === aE.PP.GLOBAL,
            r = (0, f.bG)([am.A], () => am.A.hasFetchedAllSounds()) && null != i && null == s;
        (T.useEffect(() => {
            r && (0, aA.ND)({ location: e });
        }, [r, e]),
            T.useEffect(() => {
                (0, ag.E7)();
            }, []));
        let a = T.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, S.jsx)(aL, { guildId: e.value }) : null;
        }, []);
        return (0, S.jsxs)(n9.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, S.jsx)(ad.A, {
                    guildId: t,
                    className: aj.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, S.jsxs)(ac.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, S.jsx)(aa.t, { size: "md", color: "currentColor", className: aj.ax }),
                    }),
                    children: [
                        (0, S.jsx)(ab, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, aA.Dv)(t, e) : (0, aA.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, S.jsx)(ao.p, {
                                className: aj.lm,
                                messageType: ao.Y.WARNING,
                                children: U.intl.string(U.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aD = n(824744);
let aP = (0, E.sN)(h.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => U.intl.string(U.t.kbFsAD),
    useSubtitle: () => U.intl.format(U.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aD.w)(e);
        (0, ag.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aA.wH)();
        return (0, aD.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aG = n(864145);
let aM = (0, E.sN)(h.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t["2JbvKw"]),
        useSubtitle: () => U.intl.string(U.t.INenzY),
        setValue: function (e) {
            let t = (0, aD.w)(e);
            M.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = M.HO.getSetting();
            return (0, aD.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aG.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aU = (0, E.zZ)(h.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ABjMWI),
        buildLayout: () => [aP, aM, aR],
    });
var aV = n(803224),
    ak = n(552122);
let aw = (0, E.E2)(h.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [U.intl.string(U.t.fgSHf8)],
        usePredicate: () => null != ak.A.useHolidaySoundpack(),
        Component: () =>
            (0, S.jsx)(Q.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.Eup6Wv, {
                    onClick: () => (0, nm.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aF = (0, E.AK)(h.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.eyGEE4),
        useSearchTerms: () => [U.intl.string(U.t.eyGEE4)],
        destinationKey: h.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aB = (0, E.gN)(h.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aF] });
var az = n(264686);
let aY = (0, e_.D)(() => ({ currentPlayingSound: null }));
function aX() {
    let e = aY.getField("currentPlayingSound");
    (e?.stop(), aY.setState({ currentPlayingSound: null }));
}
function aH(e) {
    let t = aY.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ir.Ak)(e);
    aY.setState({ currentPlayingSound: n });
}
function aW(e) {
    return (0, E.zD)(`${h.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aH(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, f.bG)([aV.A], () => aV.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aV.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), az.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, f.bG)([aV.A], () => aV.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aK = [
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
    aZ = (0, E.D1)(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? U.intl.formatToPlainString(U.t["0JYT98"], { count: t })
                : U.intl.formatToPlainString(U.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tN(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aX();
            };
        },
        buildLayout: () => aK.map((e) => aW(e)),
    }),
    aq = (0, E.zZ)(h.X.SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, f.bG)([aV.A], () => aV.A.getDisableAllSounds());
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
        buildLayout: () => [aZ, aw, aB],
    }),
    aQ = (0, E.zD)(h.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.e3Zz3F),
        useSubtitle: () => U.intl.string(U.t.RztTjP),
        useValue: function () {
            return !M.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rc.A)("stream_previews_disabled", !e, M.uh.getSetting(), [tF.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                M.uh.updateSetting(!e));
        },
    }),
    aJ = (0, E.zD)(h.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => U.intl.string(U.t.GmWk2E),
        useSearchTerms: () => [U.intl.string(U.t["Fj/xn1"])],
        useSubtitle: () => U.intl.string(U.t["Fj/xn1"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getVideoHook());
        },
        setValue: lQ.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supportsVideoHook());
        },
    }),
    a$ = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getExperimentalSoundshare());
        },
        setValue: lQ.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => {
                let e = ss.Ay.supportsExperimentalSoundshare(),
                    t = ss.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a0 = (0, E.zD)(h.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => U.intl.string(U.t["/jwMtn"]),
        useSubtitle: () => U.intl.string(U.t.zlA23F),
        useValue: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lQ.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return ss.Ay.supports(sq.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a1 = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lQ.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: ss.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, f.bG)([ss.Ay], () => ss.Ay.getSidechainCompression());
            return ss.Ay.supports(sq.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a2 = (0, E.zD)(h.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
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
                          (lQ.default.setUseSystemScreensharePicker(e), nC.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : lQ.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, f.bG)([ss.Ay], () => ss.Ay.supportsSystemScreensharePicker() && (0, nI.cX)());
        },
    }),
    a3 = (0, E.bd)(h.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t.qrMyvm) : U.intl.string(U.t.LEtTNl)),
        useCollapsedSubtitle: () => tN(h.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a0, a1, a2, a$, aJ],
    }),
    a5 = (0, E.zZ)(h.X.STREAMING_CATEGORY, { useTitle: () => U.intl.string(U.t.KDdjou), buildLayout: () => [aQ, a3] });
var a6 = n(106713);
let a4 = (0, E.E2)(h.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a6.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, S.jsx)(lB.U, {
                label: U.intl.string(U.t.UTM8VP),
                deviceType: sq.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a8 = (0, E.E2)(h.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a6.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, S.jsx)(lB.U, {
                label: U.intl.string(U.t.xuYQ0n),
                deviceType: sq.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a7 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a4, a8] }),
    a9 = (0, E.sN)(h.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = ss.Ay.getInputVolume();
            return (0, aD.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aD.w)(e);
            lQ.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    oe = (0, E.sN)(h.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = ss.Ay.getOutputVolume();
            return (0, aD.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tF.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aD.w)(e);
            lQ.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    ot = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a9, oe] });
var on = n(702841),
    oi = n(152567),
    os = n(804037);
let ol = `${eC.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    or = (0, E.E2)(h.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH)],
        usePredicate: function () {
            return (0, on.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.LOOPBACK));
        },
        Component: function () {
            return (0, on.bG)([ss.Ay], () => ss.Ay.supports(sq.O5.LOOPBACK))
                ? (0, S.jsx)(oi.A, {
                      size: "md",
                      notchBackground: oi.V.GRAY,
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
                                  className: os.X,
                                  href: eC.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: U.intl.string(U.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: U.intl.format(U.t["V+B3FH"], { guideURL: ol }),
                      buttonTest: U.intl.string(U.t.gyljWE),
                      buttonStop: U.intl.string(U.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    oa = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function oo(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, S.jsxs)(Z.B, {
        children: [
            n && (0, S.jsx)(su, { sourcePage: "voice" }),
            t && (0, S.jsx)(s7.A, { look: s7.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
        ],
    });
}
let ou = (0, E.zZ)(h.X.VOICE_CATEGORY, {
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
                t = (0, lz.x5)(sq.oh.AUDIO_INPUT),
                n = (0, lz.x5)(sq.oh.AUDIO_OUTPUT),
                i = T.useMemo(() => {
                    let e = oa.some((e) => t?.hardwareId?.startsWith(e)),
                        i = oa.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return T.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, S.jsx)(oo, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a7, ot, or],
    }),
    od = (0, E.t_)(h.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        buildLayout: () => [ou, ar, lq, a5, aq, aU, r_, rh],
    }),
    oc = (0, E.i4)(h.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        usePredicate: () => ss.Ay.isSupported(),
        icon: lR.MicrophoneIcon,
        useMenu: lD.A,
        buildLayout: () => [od],
    }),
    og = (0, E.WI)(h.X.APP_SECTION, {
        useTitle: () => U.intl.string(U.t.gcyH1J),
        buildLayout: () => [oc, n1, tt, iq, lL, n6],
    });
var om = n(360669),
    oA = n(974544),
    oE = n(975807),
    oh = n(534247);
function ox(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, S.jsxs)("div", {
        className: ih()(oh.kL, { [oh.oE]: a }),
        children: [
            (0, S.jsxs)(Z.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: oh.Qs,
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        align: "start",
                        gap: a ? 12 : 8,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: a ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != l) &&
                        (0, S.jsxs)(Z.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, S.jsx)(Z.B, {
                                        direction: "horizontal",
                                        gap: a ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
                                            (0, S.jsx)(
                                                v.$,
                                                {
                                                    variant: "overlay-primary",
                                                    size: "sm",
                                                    text: e.text,
                                                    onClick: e.onClick,
                                                },
                                                String(e.text),
                                            ),
                                        ),
                                    }),
                                null != l &&
                                    (0, S.jsx)(Q.E, { variant: "text-xxs/normal", color: "text-subtle", children: l }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)("img", { src: s, className: oh.fA, alt: "" }),
        ],
    });
}
let op = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var oS = n(425565),
    oT = n(745188),
    of = n(936564),
    oI = n(417792),
    o_ = n(423764),
    oN = n(289873),
    oC = n(132500),
    oy = n(465323),
    ob = n(37766),
    ov = n(194261),
    oj = n(391048),
    oO = n(277984),
    oL = n(99696),
    oR = n(202613),
    oD = n(615405),
    oP = n(83617),
    oG = n(935208),
    oM = n(607399),
    oU = n(993077),
    oV = n(150934),
    ok = n(256006),
    ow = n(198970),
    oF = n(71532);
let oB = /[^0-9/]/g,
    oz = /[^0-9]/g;
class oY extends T.PureComponent {
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
                ((i = (n = e.replace(oB, "").split("/"))[0]),
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
            ? (u = u.replace(oz, ""))
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
var oX = n(832208),
    oH = n(782328);
let oW = [
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
                        getClassNameForLayout: () => oH.ep,
                        renderInput: (e) => (0, S.jsx)(oY, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oK = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = T.useState(!1),
            [a, o] = T.useState(null),
            [u, d] = T.useState(i);
        return (
            T.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, S.jsx)(oX.A, {
                className: n,
                form: oW,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oF.So)(e) ? o(U.intl.string(U.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oZ = n(219887),
    oq = n(292856);
let oQ = "isDefault";
class oJ extends T.PureComponent {
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
            expiresMonth: t instanceof oR.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oR.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        tl.h.wait(() => {
            ((0, oO.ey)(), (0, oO.tc)());
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
                      className: oq.zc,
                      children: (0, S.jsx)(i$.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, S.jsx)("div", {
                  className: oq.zc,
                  children: (0, S.jsx)(i$.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ok.g)(n);
        return (0, S.jsxs)("div", {
            className: oq.yV,
            children: [
                (0, S.jsx)(Q.E, {
                    className: oq.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, S.jsx)(ow.Ay, {
                    ...e,
                    mode: ow.Ay.Modes.EDIT,
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
            className: oq.yV,
            children: [
                (0, S.jsx)(Q.E, { className: oq.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, S.jsx)(oK, {
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
            className: oq.AU,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, S.jsx)(l3.e, {
                        children: (0, S.jsxs)("div", {
                            className: oq.lH,
                            children: [
                                n
                                    ? (0, S.jsx)(sA.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, S.jsx)("div", { "aria-hidden": !0, className: oq.dm }),
                                      })
                                    : null,
                                (0, S.jsx)(v.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oM.Fr ? "sm" : "md",
                                    text: oM.Fr ? U.intl.string(U.t.oyYWHE) : U.intl.string(U.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, S.jsxs)(l3.e, {
                        children: [
                            (0, S.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oM.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, S.jsx)(v.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oM.Fr ? "sm" : "md",
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
            r = e instanceof oR.SJ;
        return (0, S.jsx)(oU.Z, {
            editable: !0,
            className: ih()(oq.Nr, i),
            children: (0, S.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, S.jsxs)("div", {
                        className: oq.__invalid_paymentSection,
                        children: [
                            (0, S.jsx)(oZ.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, S.jsx)("div", { className: oq.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, S.jsx)("div", {
                                className: oq.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, S.jsx)("div", {
                        className: oq.D5,
                        children: (0, S.jsx)(oV.S, {
                            value: oQ,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oQ),
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
let o$ = f.Ay.connectStores([oD.A], () => ({ updateError: oD.A.editSourceError, removeError: oD.A.removeSourceError }))(
    oJ,
);
var o0 = n(986485),
    o1 = n(849405),
    o2 = n(329693);
function o3() {
    (0, oL.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oC.A)() });
}
class o5 extends T.PureComponent {
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
            ? (0, S.jsx)(o$, {
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
                      i ? null : (0, S.jsx)(sd.c, { className: o2.__invalid_sourceDivider }),
                      (0, S.jsxs)("div", {
                          className: o2.Yb,
                          children: [
                              (0, S.jsx)(oZ.A, {
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
let o6 = T.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = T.useState(null),
        o = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, f.bG)([oD.A], () => oD.A.ipCountryCode),
        d = T.useMemo(() => (0, oy.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        T.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oO.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, S.jsxs)(S.Fragment, {
            children: [
                n ? null : (0, S.jsx)(sd.c, { className: o2.__invalid_sourceDivider }),
                (0, S.jsxs)("div", {
                    className: o2.Yb,
                    children: [
                        void 0 !== t
                            ? (0, S.jsx)(oZ.A, {
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
                                      (0, S.jsx)(ob._, { size: "lg" }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: o1.Wi,
                                          children: U.intl.string(o0.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, S.jsxs)("div", {
                            className: o2.zy,
                            children: [
                                (0, S.jsx)("div", {
                                    className: o2.Tq,
                                    children:
                                        null == r
                                            ? (0, S.jsx)(oN.y, { type: oN.y.Type.SPINNING_CIRCLE })
                                            : (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oy.$g)(e ?? 0, n, s, {
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
                                    text: U.intl.string(o0.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o4 extends T.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oO.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oO.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oO.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oP.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sT.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, S.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oj.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, S.jsxs)("div", {
            className: o2.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, S.jsxs)("div", {
                          className: o2.z8,
                          children: [
                              (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o2.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oG.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oR.LQ)),
            c = u.filter((e) => e instanceof oR.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, S.jsx)(
                    o5,
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
                              o6,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: o3,
                              },
                              e.id,
                          ),
                      )
                    : (0, S.jsx)(o6, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o3,
                      })),
            (0, S.jsxs)(S.Fragment, {
                children: [
                    t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, S.jsx)(ov.LockIcon, { size: "sm", className: o2.hz }),
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
var o8 = n(459357),
    o7 = n(295405),
    o9 = n(166403),
    ue = n(773669),
    ut = n(943009);
function un() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, o_.Gw)(e.country) };
}
let ui = (0, E.E2)(h.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, f.bG)([oD.A], () => oD.A.isSyncing),
                i = (0, f.bG)([o7.A], () => o7.A.paymentSources),
                s = (0, f.bG)([o7.A], () => o7.A.defaultPaymentSourceId),
                l = (0, f.bG)([ue.default], () => ue.default.locale),
                r = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
                a = (0, f.bG)([oD.A], () => oD.A.isRemovingPaymentSource),
                o = (0, f.bG)([oD.A], () => oD.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o8.c)({ location: "UserSettingsBilling" });
            return (T.useEffect(() => {
                (oO.$o(), oO.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, S.jsx)("div", { className: ut.o, children: (0, S.jsx)(oN.y, {}) })
                : (0, S.jsx)(o4, {
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
    us = (0, E.E2)(h.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = T.useMemo(
                () => [
                    { text: U.intl.string(oT.default["6bWeWP"]), onClick: () => (0, oE.A)(oS.C1) },
                    {
                        text: U.intl.string(oT.default.xYa9Y8),
                        onClick: () => (0, oE.A)(eC.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, S.jsx)("div", {
                className: of.k,
                children: (0, S.jsx)(ox, {
                    title: U.intl.string(oT.default.w8gzZb),
                    graphicSrc: op,
                    actions: e,
                    children: (0, S.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: U.intl.string(oT.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oI.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ul = (0, E.zZ)(h.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.W26xGQ),
        useSubtitle: () => {
            let e = un();
            return null != e ? U.intl.format(U.t.e2t1G5, { country: e.countryName }) : U.intl.string(U.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == un()
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
        buildLayout: () => [ui, us],
    });
var ur = n(662490),
    ua = n(945810);
let uo = (0, ua.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var uu = n(837381),
    ud = n(689175),
    uc = n(928039),
    ug = n(39190),
    um = n(32731),
    uA = n(380098),
    uE =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uh =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    ux =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    up =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uS =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uT(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oR.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? um.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uA.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uf = { receipts: [], cursor: null };
var uI = n(34188),
    u_ = n(597770),
    uN = n(206828),
    uC = n(576243),
    uy = n(147925),
    ub = n(707554),
    uv = n(957565),
    uj = n(458790),
    uO = n(39209),
    uL = n(510022),
    uR = n(427262),
    uD = n(106799),
    uP = n(580630),
    uG = n(818348),
    uM = n(460103);
let uU = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uV(e, t) {
    return t === uG.Yr.DISCORD_ORB
        ? (0, S.jsxs)("span", {
              className: uM.db,
              children: [
                  (0, S.jsx)(uD.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, uP.$g)(e, t);
}
function uk(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, eY.Ay)(tF.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uS.REDEEMED
        ? null
        : n.status === uS.REFUNDED
          ? (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(ub.H, { className: uM.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, S.jsx)("div", {
                        className: uM.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uR.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uS.CLAIMED || n.status === uS.UNCLAIMED
            ? (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(ub.H, { className: uM.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uM.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uR.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, S.jsx)("div", {
                              className: uM.TP,
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
                      (0, S.jsx)(ub.H, { className: uM.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uM.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, S.jsx)("div", {
                          className: uM.TP,
                          children: s
                              ? (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, oE.A)(uU(i)),
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
                                            (0, uL.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uw = n(933832),
    uF = n(789645);
function uB(e) {
    let { refund: t, locale: n } = e,
        i = uU(n),
        s = t.eligible ? uw.CheckmarkLargeIcon : uF.P;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(ub.H, { className: uM.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, S.jsxs)("div", {
                className: uM.iL,
                children: [
                    (0, S.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === up.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case up.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case up.GIFT:
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
                    t.policy !== up.IN_GAME_ITEM &&
                        (0, S.jsxs)("div", {
                            className: uM.My,
                            children: [
                                (0, S.jsx)("div", {
                                    className: uM.Kf,
                                    children:
                                        null != t.window &&
                                        (0, S.jsxs)("div", {
                                            className: uM._Z,
                                            children: [
                                                (0, S.jsx)(ub.H, {
                                                    className: uM.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, S.jsxs)("div", {
                                                    className: uM.z9,
                                                    children: [
                                                        (0, S.jsx)(s, { className: uM.xb, color: "currentColor" }),
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
var uz = n(679897);
function uY(e) {
    let { description: t, cost: n } = e;
    return (0, S.jsx)("li", {
        className: uM.mg,
        children: (0, S.jsxs)(sC.A, {
            justify: sC.A.Justify.BETWEEN,
            children: [(0, S.jsx)("div", { children: t }), (0, S.jsx)("div", { children: n })],
        }),
    });
}
function uX(e) {
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
                (0, uv.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, S.jsx)("div", { className: uM.l9, children: t }),
        }),
    });
}
function uH(e) {
    let { paymentId: t } = e;
    return (0, S.jsx)("li", {
        className: uM.mg,
        children: (0, S.jsxs)("div", {
            className: uM.bx,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, S.jsx)(uX, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uW(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === ux.REVERSED;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ih()(uz.XM, n ? uz.aB : uz.EN),
        children: [
            t === ux.REVERSED && U.intl.string(U.t.YQv9Li),
            t === ux.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === ux.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uK(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uG.kM.APPLE_PARTNER ? new oR.Pw({}) : null);
    return null == i
        ? null
        : (0, S.jsx)(oZ.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uM.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uZ(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, S.jsx)(uK, { payment: t.payments[0], locale: n })
            : null
        : (0, S.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, S.jsxs)(
                      sC.A,
                      {
                          justify: sC.A.Justify.BETWEEN,
                          align: sC.A.Align.CENTER,
                          children: [
                              (0, S.jsx)(uK, { payment: e, locale: n }),
                              (0, S.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, S.jsx)(uW, { tag: e.tag }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uV(e.amount, t.currency),
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
function uq(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)("div", { className: uM.ts }),
            t.delisted
                ? (0, S.jsx)(ao.p, {
                      messageType: ao.Y.WARNING,
                      action: (0, S.jsx)(v.$, {
                          variant: "overlay-secondary",
                          text: U.intl.string(U.t.zoztQA),
                          onClick: () => (0, oE.A)(uU(n)),
                      }),
                      children: U.intl.string(U.t["3AvulN"]),
                  })
                : null != t.guild_id && (0, S.jsx)(uj.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uQ(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, S.jsx)(ie.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, S.jsxs)("div", {
            className: uM.WI,
            children: [
                (0, S.jsx)(ub.H, { className: uM.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, S.jsxs)("div", {
                    className: ih()(uM.iL, uM.W),
                    children: [
                        (0, S.jsx)(uZ, { receipt: t, locale: n }),
                        (0, S.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uY, { description: t.description, cost: uV(t.subtotal, s) }),
                                            (0, S.jsx)(uY, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: uV(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uY, { description: U.intl.string(U.t.txajQG), cost: uV(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uY, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: uV(-t.amount_refunded, s),
                                            }),
                                            (0, S.jsx)(uY, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: uV(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uH, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, S.jsx)(uj.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, S.jsx)(uq, { guildProduct: l, locale: n }),
                (0, S.jsx)(uO.A, { payment: t.receipt_payment }),
                null != r && (0, S.jsx)(uk, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, S.jsx)(uB, { refund: a, locale: n }),
            ],
        }),
    });
}
function uJ(e) {
    let { withGradient: t } = e;
    return t
        ? (0, S.jsx)(uC.A, { size: 24, iconSize: 16, color: n8.A.unsafe_rawColors.NEUTRAL_1, className: uM.Sy })
        : (0, S.jsx)("div", {
              className: ih()(uM.Sy, uM.uX, uM.Xr),
              children: (0, S.jsx)(aa.t, { size: "custom", width: 16, height: 16, color: n8.A.colors.ICON_DEFAULT }),
          });
}
function u$(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sj.A], () => sj.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uh.NITRO:
            return (0, S.jsx)(uJ, { withGradient: !0 });
        case uh.NITRO_BASIC:
            return (0, S.jsx)(uJ, { withGradient: !1 });
        case uh.SHOP:
            return (0, S.jsx)(uI.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uM.sV });
        case uh.APPLICATION:
        case uh.PRODUCT:
            return (0, S.jsx)(si.A, {
                className: uM.Sy,
                guildClassName: uM.zA,
                game: t.icon === uh.APPLICATION ? n : void 0,
                guild: i,
                size: si.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u0(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uE.PAID)
        switch (i.status) {
            case uS.CLAIMED:
                return (0, S.jsx)("span", { className: uM.gD, children: U.intl.string(U.t.lIsIFo) });
            case uS.UNCLAIMED:
                return (0, S.jsx)("span", { className: uM.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case uS.REDEEMED:
                return (0, S.jsx)("span", { className: uM.gD, children: U.intl.string(U.t.Osji1u) });
            case uS.FAILED:
                return (0, S.jsx)("span", { className: uM.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, S.jsx)("span", { className: uM.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, S.jsx)("span", { className: uM.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case uE.PENDING:
            return (0, S.jsx)("span", { className: uM.Xg, children: U.intl.string(U.t.y7F0Re) });
        case uE.FAILED:
            return (0, S.jsx)("span", { className: uM.ob, children: U.intl.string(U.t.Yo4ru6) });
        case uE.REVERSED:
            return (0, S.jsx)("span", { className: uM.ob, children: U.intl.string(U.t.YQv9Li) });
        case uE.CANCELED:
            return (0, S.jsx)("span", { className: uM.ob, children: U.intl.string(U.t.ttkBhy) });
        case uE.PARTIALLY_REFUNDED:
            return (0, S.jsx)("span", { className: uM.gD, children: U.intl.string(U.t.lYbZzz) });
        case uE.REFUNDED:
            return (0, S.jsx)("span", { className: uM.gD, children: U.intl.string(U.t.ZBb6NK) });
        case uE.PAID:
            return null;
    }
}
function u1(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, uN.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, S.jsx)(uu.tG, {
        id: t.id,
        children: (e) =>
            (0, S.jsxs)(ie.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: ih()(uM.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, S.jsxs)(sC.A, {
                        className: uM.J7,
                        align: sC.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uM.p6,
                                children: (0, iS.i$)(ip()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, S.jsxs)("div", {
                                className: uM.h_,
                                children: [
                                    (0, S.jsx)(u$, { receipt: t }),
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
                                                                      return (0, aS.xq)(t)
                                                                          ? aS.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aS.Ay.getDisplayName(t, !1, i)}`;
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
                                              children: (0, S.jsx)(u_.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uM.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, S.jsxs)("div", {
                                className: uM.vj,
                                children: [
                                    (0, S.jsx)(u0, { receipt: t, hasLinkedToApplication: r }),
                                    (0, S.jsx)("span", { className: uM.q9, children: uV(t.net, t.currency) }),
                                ],
                            }),
                            (0, S.jsx)(uy.A, {
                                className: uM.fT,
                                direction: s ? uy.A.Directions.UP : uy.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, S.jsx)(uQ, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u2 = n(949779);
function u3(e) {
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
        d = (0, uc.A)("billing-history", s);
    return (0, S.jsx)(uu.hD, {
        navigator: d,
        children: (0, S.jsx)(uu.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, S.jsx)(ug.A, {
                    className: u2.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, S.jsx)(ud.Ch, {
                        className: u2.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, S.jsx)(u1, { className: ih()(u2.Nj, u2.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u5(e) {
    let { subscription: t } = e;
    return (
        tx()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, S.jsxs)(oU.Z, {
            className: u2.K1,
            children: [
                (0, S.jsx)("div", {
                    className: u2.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uG.qm[t.paymentGateway] }),
                }),
                (0, S.jsx)("div", {
                    className: u2.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uG.qm[t.paymentGateway],
                        billingHistoryLink: (0, aS.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u6(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = T.useState(uf),
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
                                s = i.receipts.map(uT);
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
        r = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, S.jsxs)("div", {
              className: u2.GD,
              children: [
                  null != r && a ? (0, S.jsx)(u5, { subscription: r }) : null,
                  n.length > 0
                      ? (0, S.jsxs)("div", {
                            className: ih()(u2.PQ, u2.GD),
                            children: [
                                (0, S.jsx)("div", {
                                    className: ih()(u2.Nj, u2.Bd),
                                    children: (0, S.jsxs)(sC.A, {
                                        className: u2.Yi,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: uM.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: u2.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: uM.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, S.jsx)(u3, { receipts: n, locale: t, loadNextPage: l }),
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
        : (0, S.jsx)(oN.y, {});
}
var u4 = n(545075);
let u8 = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([ue.default], () => ue.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: uo.useConfig(e).enabled });
            return (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(u4.kb, {}), n ? (0, S.jsx)(u6, { locale: t }) : (0, S.jsx)(ur.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    u7 = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [u8],
    }),
    u9 = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [ul, u7],
        useObscuredNotice: oA.L,
    }),
    de = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: om.B,
        buildLayout: () => [u9],
    });
var dt = n(70283),
    dn = n(682618),
    di = n(92202),
    ds = n(859492),
    dl = n(962644),
    dr = n(35587),
    da = n(86379);
let du = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u4.uK,
        usePredicate: () => (0, da.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    dd = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [du] });
var dc = n(704333),
    dg = n(414499),
    dm = n(31300),
    dA = n(997101);
let dE = "https://discord.com",
    dh = {
        [dA.d.US]: [
            { id: "walmart", name: "Walmart", url: dE },
            { id: "target", name: "Target", url: dE },
            { id: "amazon", name: "Amazon", url: dE },
            { id: "best_buy", name: "Best Buy", url: dE },
        ],
        [dA.d.GB]: [
            { id: "tesco", name: "Tesco", url: dE },
            { id: "smyths_toys", name: "Smythstoys", url: dE },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dE },
            { id: "asda", name: "Asda", url: dE },
        ],
        [dA.d.CA]: [{ id: "eb_games", name: "EBGames", url: dE }],
        [dA.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dE }],
        [dA.d.ES]: [{ id: "game", name: "GAME", url: dE }],
        [dA.d.FR]: [{ id: "micromania", name: "Micromania", url: dE }],
    },
    dx = [];
var dp = n(534284);
function dS(e) {
    let { enabled: t } = (0, di.K)({ location: e }),
        n = (0, dp.P)(),
        i = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && oS.ob.has(i);
}
var dT = n(178881);
function df(e) {
    let { icon: t, children: n } = e;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dT.A,
        children: [
            (0, S.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, S.jsx)("span", { children: n }),
        ],
    });
}
let dI = (0, E.zZ)(h.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [d_],
        usePredicate: () => dS("GiftInventoryMarketingBanner"),
    }),
    d_ = (0, E.E2)(h.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dS("GiftCardsGiftInventoryBanner"),
                t = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, eY.Ay)();
                    return T.useCallback(
                        (t) => {
                            tc.default.track(I.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                partner: t.id,
                                cta_type: "retailer",
                                url: t.url,
                                promotion: "gift_cards_in_app_marketing",
                                location_stack: e,
                            });
                        },
                        [e],
                    );
                })(),
                i = T.useMemo(
                    () =>
                        (null == t ? dx : (dh[t] ?? dx)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, oE.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, S.jsx)(ox, {
                      size: "compact",
                      title: U.intl.string(oT.default.Ja5Q8Z),
                      graphicSrc: op,
                      actions: i,
                      footnote: U.intl.format(oT.default.ztNU94, { termsUrl: I.X7G.GIFT_CARD_TERMS }),
                      children: (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, S.jsx)(df, { icon: dc.B, children: U.intl.string(oT.default["9xo1g9"]) }),
                              (0, S.jsx)(df, { icon: dg.h, children: U.intl.string(oT.default.I5UWh9) }),
                              (0, S.jsx)(df, {
                                  icon: u_.GiftIcon,
                                  children: U.intl.format(oT.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, nm.openUserSettings)(h.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, S.jsx)(df, {
                                  icon: dm.k,
                                  children: U.intl.format(oT.default.UwYHGm, { websiteUrl: oS.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dN = n(982240),
    dC = n(5755),
    dy = n(914410),
    db = n(556427),
    dv = n(573343);
let dj = "UserSettingsGiftingBadgeProgress";
function dO(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, S.jsxs)("div", {
        className: ih()(dv.fO, { [dv.bF]: i }),
        children: [
            null != n && (0, S.jsx)("img", { src: n, alt: "", className: dv.si }),
            (0, S.jsxs)("div", {
                className: dv.tc,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(db.default.qvx9E4, { count: (0, dN.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dL(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, ds.b9)(dj);
    return (0, S.jsx)("div", {
        className: dv.dw,
        children: t.map((e) => (0, S.jsx)(dO, { tier: e, iconUrl: (0, ds.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function dR(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tF.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dC.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, S.jsx)("div", {
        className: dv.NG,
        children: (0, S.jsx)(v.$, {
            variant: "primary",
            icon: u_.GiftIcon,
            text: U.intl.string(db.default.DZnomS),
            onClick: s,
        }),
    });
}
function dD(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, dN.rL)(i),
        a = (0, dN.rL)(s),
        o = (0, ds.GZ)(n, i, s),
        u = (0, ds.b9)(dj),
        d = (0, ds.Se)(i, u),
        c = (0, ds.Se)(s, u);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(db.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(db.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, S.jsxs)("div", {
            className: dv.mY,
            children: [
                null != d &&
                    (0, S.jsx)("div", {
                        className: dv.fC,
                        children: (0, S.jsx)("img", { src: d, alt: "", className: dv.qS }),
                    }),
                (0, S.jsxs)("div", {
                    className: dv.Qs,
                    children: [
                        (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, S.jsx)(dy.Ay, { variant: dy.qP.BLUE, weight: dy.fh.MEDIUM, progress: o }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dv.qg,
                            children: U.intl.format(db.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, S.jsx)("div", {
                        className: dv.fC,
                        children: (0, S.jsx)("img", { src: c, alt: "", className: dv.qS }),
                    }),
            ],
        })
    );
}
function dP(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([dN.Ay], () => ({
            badgeProgress: dN.Ay.getSingleRequirementProgress(dt.$.GIFTING)?.current ?? 0,
            currentTier: dN.Ay.getCurrentTier(dt.$.GIFTING),
            nextTier: dN.Ay.getNextTier(dt.$.GIFTING),
            giftsRemaining: dN.Ay.getRemainingToNextTier(dt.$.GIFTING),
            tiers: dN.Ay.getBadgeById(dt.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, S.jsxs)("div", {
              className: dv.kL,
              children: [
                  (0, S.jsxs)("div", {
                      className: dv.Jo,
                      children: [
                          n > 0 &&
                              (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsx)(dD, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, S.jsx)("div", { className: dv.yF }),
                                  ],
                              }),
                          (0, S.jsx)(dL, { tiers: r, currentTier: i }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dv.PJ,
                              children: U.intl.string(db.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, S.jsx)(dR, { analyticsLocation: t, location: dj }),
              ],
          });
}
let dG = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(db.default.sFokBp),
        buildLayout: () => [dM],
        usePredicate: () => {
            let e = (0, ds.F5)("gift_inventory"),
                t = (0, f.bG)([dN.Ay], () => dN.Ay.getBadgeById(dt.$.GIFTING));
            return e && null != t;
        },
    }),
    dM = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(db.default.sFokBp)],
        Component: () => (0, S.jsx)(dP, {}),
    });
var dU = n(264779),
    dV = n(412260),
    dk = n(555393),
    dw = n(725807),
    dF = n(212168),
    dB = n(469778),
    dz = n(45938),
    dY = n(109802),
    dX = n(869038),
    dH = n(380856);
function dW(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, S.jsxs)(sC.A, {
        className: ih()(dH.wx, n),
        align: sC.A.Align.CENTER,
        children: [
            (0, S.jsx)("div", { className: dH.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dK(e) {
    let { children: t, className: n } = e;
    return (0, S.jsx)("div", { className: ih()(dH.rf, n), children: t });
}
class dZ extends T.PureComponent {
    static Header = dW;
    static Body = dK;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, S.jsx)("div", { className: ih()(dH.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dq = n(180522),
    dQ = n(871123),
    dJ = n(366523),
    d$ = n(280450),
    d0 = n(30793),
    d1 = n(97352),
    d2 = n(67480),
    d3 = n(615396),
    d5 = n(274904);
class d6 extends T.PureComponent {
    _copyModeTimeout = new rz.Ep();
    state = { copyMode: dY.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dY.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dY.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dX.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dz.AK)(t, n),
            (0, uv.C)(
                e,
                () => this.setState({ copyMode: dY.q.SUCCESS }),
                () => this.setState({ copyMode: dY.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dY.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, S.jsxs)(sC.A, {
            direction: sC.A.Direction.VERTICAL,
            className: d5.Gj,
            children: [
                (0, S.jsx)(dY.e, {
                    className: d5.ph,
                    value: (0, dz.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uv.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l1.XD.BRAND,
                    buttonLook: l1.pR.FILLED,
                }),
                (0, S.jsxs)("div", {
                    className: d5.KB,
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
class d4 extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dX.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dX.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dQ.bF)(e)
            ? (0, S.jsx)(dJ.e, { shape: "square", sku: e, containerClassName: d5.ez })
            : null != t
              ? (0, S.jsx)(dq.A, { giftStyle: t, className: d5.ez, shouldAnimate: this.state.isHovered })
              : (0, S.jsx)(si.A, { game: n, size: si.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dQ.bF)(e)
            ? (0, S.jsxs)("div", {
                  className: ih()(d5.Oc, d5.ic),
                  children: [
                      (0, S.jsx)(si.A, { game: n, size: si.M.XSMALL, skuId: e.id, className: d5._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, S.jsx)("div", { className: d5.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
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
            (0, S.jsx)("div", { className: d5.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, S.jsxs)(sC.A, {
            justify: sC.A.Justify.BETWEEN,
            align: sC.A.Align.CENTER,
            className: d5.pe,
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
        return (0, S.jsxs)(dZ, {
            className: i,
            children: [
                (0, S.jsx)(ie.D, {
                    onClick: this.handleToggleOpen,
                    className: d5.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, S.jsx)(dZ.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, S.jsxs)("div", {
                            className: d5.MY,
                            children: [
                                (0, S.jsxs)(sC.A, {
                                    align: sC.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, S.jsxs)("div", {
                                            className: d5.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, S.jsx)(uy.A, {
                                    direction: a ? uy.A.Directions.UP : uy.A.Directions.DOWN,
                                    className: d5.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, S.jsx)(dZ.Body, {
                          children: l
                              ? (0, S.jsx)(oN.y, { className: d5.u1 })
                              : (0, S.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, S.jsx)(d6, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d8 = f.Ay.connectStores([d2.A, td.A, d0.A, i8.A, d1.A, d$.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d2.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d0.A.getForGifterSKUAndPlan(d$.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: td.A.enabled,
        isFetching: d0.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: d0.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i8.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d3.c9)(n) : null,
        giftCodes: l,
    };
})(d4);
var d7 = n(725570),
    d9 = n(736653),
    ce = n(46054);
let ct = ip().duration(30, "days");
var cn = n(416052),
    ci = n(878309);
function cs(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, S.jsx)(sS.a, {
        title: "",
        size: "md",
        input: (0, S.jsx)("div", { className: ci.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, S.jsxs)("div", {
            className: ci.t4,
            children: [
                (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, S.jsx)(Q.E, { variant: "text-md/normal", className: ci.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let cl = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tq.GV)(),
        { analyticsLocations: u } = (0, eY.Ay)(tF.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dU.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, S.jsx)(cs, { onClose: t, transitionState: l })
        : null == i
          ? (0, S.jsx)(oN.y, { className: ci.Lq })
          : (0, S.jsx)(sS.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, S.jsxs)("div", {
                    className: ci.N1,
                    children: [
                        (0, S.jsx)("div", { className: ci.Qw }),
                        (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: ci.G3,
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
                            let e = (0, dU.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(sd.c, { className: ci.M5 }),
                        (0, S.jsx)(t8.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, S.jsx)(cn.A, {
                                value: i,
                                buttonColor: l1.$n.Colors.BRAND,
                                buttonLook: l1.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cr = n(136380);
function ca(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, d9.Ay)(),
        d = (0, dU.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, iS.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ip()(n.outboundRedemptionEndDate)
                            : ip()(n.endDate).add(ct)
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
        A = (0, dk.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: cr.AX,
                children: [
                    (0, S.jsxs)("div", {
                        className: cr.Pg,
                        children: [
                            (0, S.jsxs)("div", {
                                className: cr.At,
                                children: [
                                    (0, S.jsx)("div", {
                                        className: cr.$G,
                                        children: (0, S.jsx)("img", { alt: "", src: d, className: cr.IJ }),
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
                            className: cr.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: ce.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, S.jsx)(d7.aF, {
                    renderModal: (e) =>
                        (0, S.jsx)(cl, {
                            ...e,
                            onClose: E,
                            onClaim: dl.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function co(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dB.A], () => dB.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dk.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dr.y7)(),
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
                      className: cr.N1,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, S.jsx)(sd.c, { className: cr.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, S.jsxs)("div", {
                      className: cr.uo,
                      children: [
                          (0, S.jsx)(aa.t, {
                              size: "md",
                              color: n8.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cr.PC,
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: cr.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tW.default)(), (0, t9.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, S.jsx)(dw.A, {
                              showGradient: !0,
                              className: cr.aA,
                              subscriptionTier: t0.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, S.jsxs)("div", {
        children: [
            g,
            (0, S.jsx)(dF.A, {
                className: cr.Yj,
                isShown: !1 === i && c,
                type: dF.i.PREMIUM,
                hasBackground: !0,
                children: (0, S.jsxs)("div", {
                    className: cr.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, S.jsx)(ca, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, S.jsx)(ca, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, S.jsx)(
                                  d8,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t0.FB,
                                  },
                                  (0, dz.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, S.jsx)(
                                  d8,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t0.Bu,
                                  },
                                  (0, dz.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, S.jsx)(
                                  d8,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t0.Bu,
                                  },
                                  (0, dz.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cu = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: cc,
        buildLayout: () => [cd],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dV.A],
                    () => ({
                        claimedOutboundPromotionCodes: dV.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dV.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dr.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dU.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cd = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cc()],
        Component: () => (0, S.jsx)(co, { redesign: !0 }),
    });
function cc() {
    return U.intl.string(U.t.YzjdWJ);
}
var cg = n(339048);
function cm() {
    let e = (0, f.yK)([dB.A], () => dB.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dz.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            tl.h.wait(() => {
                (0, cg.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, S.jsx)(oN.y, { className: cr.Lq });
    if (0 === Object.keys(t).length)
        return (0, S.jsxs)("div", {
            className: cr.p$,
            children: [
                (0, S.jsx)("div", { className: cr.QT }),
                (0, S.jsx)(ub.H, { className: cr.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, S.jsx)("p", {
                    className: cr.WO,
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
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dz.X6)(e);
            return (0, S.jsx)(d8, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, S.jsx)(Z.B, { gap: "lg", children: s });
}
let cA = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: ch, buildLayout: () => [cE] }),
    cE = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [ch()], Component: () => (0, S.jsx)(cm, {}) });
function ch() {
    return U.intl.string(U.t.FWe6CP);
}
var cx = n(532446),
    cp = n(499454);
class cS extends T.Component {
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
                    (await (0, oL.Qp)(n),
                        (0, oL.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oC.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dz.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dX.Ay.resolveGiftCode(e);
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
                (0, cp.h)({ processedCode: e }),
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
                children: (0, S.jsxs)(cx.M, {
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
function cT(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o8.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(tc.AnalyticsContext),
        s = (0, f.bG)([td.A], () => td.A.enabled);
    return (0, S.jsx)(cS, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cf = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [cI],
        usePredicate: () => !(0, da.Hp)(),
    }),
    cI = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, S.jsx)(cT, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    c_ = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [dI, cf, cu, dG, cA, dd],
        initialize: () => {
            (dl.Ay.fetchClaimedOutboundPromotionCodes(), (0, ds.Ig)("gift_inventory") && (0, dn.o0)(dt.$.GIFTING));
        },
    }),
    cN = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: u_.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dr.IO)().length;
            return T.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o8.A.getConfig(e).enabled,
                n = di.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [c_],
    });
var cC = n(659758),
    cy = n(730499),
    cb = n(877624),
    cv = n(269115),
    cj = n(462887),
    cO = n(73825),
    cL = n(531260),
    cR = n(160946),
    cD = n(721668),
    cP = n(224016),
    cG = n(526292),
    cM = n(881489),
    cU = n(106512),
    cV = n(22118),
    ck = n(103411),
    cw = n(190187),
    cF = n(930861),
    cB = n(854627),
    cz = n(889227),
    cY = n(326084),
    cX = n(851746),
    cH = n(664654),
    cW = n(912140),
    cK = n(953727);
let cZ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, S.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cK.A)({ ...s }),
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
    cq = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, d9.Ay)(),
            l = (0, cj.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, S.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cK.A)({ ...i }),
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
var cQ = n(387316),
    cJ =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let c$ = "url(#gradient)",
    c0 = (e) => {
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
        let g = (0, d9.Ay)(),
            m = (0, cj.q)(g),
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
                            return c$;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c$;
                        default:
                            return;
                    }
                })(m, r);
        return (0, S.jsxs)("div", {
            className: cQ.Ap,
            children: [
                (0, S.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cQ.fB,
                    children: [
                        (0, S.jsx)("circle", {
                            className: 0 === r || 2 === r ? cQ.F3 : void 0,
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
                (0, S.jsx)("div", { className: cQ.Vw, children: n }),
            ],
        });
    };
var c1 = n(104773);
function c2(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cW.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, S.jsx)("div", {
        className: c1.Q7,
        children: (0, S.jsx)("div", {
            className: c1.Nk,
            children: null != s && (0, S.jsx)("img", { className: c1.CH, alt: i, src: s }),
        }),
    });
}
let c3 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = cJ.NITRO_GEM,
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
        className: ih()(c1.G3, n),
        children: (0, S.jsx)(c0, {
            animationClassName: ih()(c1._0, { [c1.uJ]: p, [A ?? ""]: p }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case cJ.NITRO_GEM:
                        return (0, S.jsx)(cZ, {
                            className: p ? c1.Ow : void 0,
                            backgroundColor: ih()(c1.vH, s),
                            backgroundCircleSize: r,
                        });
                    case cJ.NITRO_LOGO:
                        return (0, S.jsx)(cq, { circleColor: E, ellipseOpacity: m });
                    case cJ.AVATAR_DECO:
                        if (null != c)
                            return (0, S.jsx)(c2, {
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
var c5 = n(14313);
function c6(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cB.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, S.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c5.n5, children: n });
    return (0, S.jsx)(sA.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, S.jsx)("div", { className: c5.Lg, children: r }),
    });
}
function c4(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, S.jsxs)("div", {
        className: c5.Ip,
        children: [
            (0, S.jsx)("div", { className: c5.Ej }),
            (0, S.jsx)("div", { className: ih()({ [c5.ch]: t > n, [c5.q_]: t === n }) }),
        ],
    });
}
function c8(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, S.jsxs)("div", {
        className: c5.ZM,
        children: [
            (0, S.jsx)(c6, { userRecord: i, placement: 1 }),
            (0, S.jsx)(c4, { numSentReferrals: n, placement: 1 }),
            (0, S.jsx)(c6, { userRecord: s, placement: 2 }),
            (0, S.jsx)(c4, { numSentReferrals: n, placement: 2 }),
            (0, S.jsx)(c6, { userRecord: l, placement: 3 }),
        ],
    });
}
let c7 = function () {
    let e = (0, f.bG)([cX.A], () => cX.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cH.J)(),
        i = T.useMemo(() => t.map((e) => new cz.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cY.aK.REDEEMED && s.redeemed++, e === cY.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cH.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eY.Ay)(tF.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cH.Z) * 100,
        d = (0, S.jsxs)("div", {
            className: c5.hE,
            children: [
                (0, S.jsx)(c3, { percentage: u, progressCircleVariation: cJ.NITRO_LOGO, iconClassName: c5.ER }),
                (0, S.jsxs)("div", {
                    className: c5.Ns,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: c5.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, S.jsx)(c8, { userRecords: i }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cH.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, S.jsx)("div", {
                            className: c5.Fb,
                            children: (0, S.jsx)(cF.wL, {
                                "data-migration-pending": !0,
                                className: c5.r$,
                                color: l1.XD.CUSTOM,
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
                                    className: c5.Zn,
                                    children: [
                                        (0, S.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c5.QH,
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
        c = s.redeemed === cH.Z;
    return (0, S.jsx)(eY.f5, {
        value: a,
        children: (0, S.jsx)("div", {
            className: ih()(c5.kL, { [c5.AP]: c }),
            children: (0, S.jsx)("div", { ref: o, className: ih()(c5.d_, { [c5.kS]: c }), children: d }),
        }),
    });
};
var c9 = n(194509),
    ge = n(465794),
    gt = n(774774),
    gn = n(156601),
    gi = n(543213),
    gs = n(88001),
    gl = n(148155),
    gr = n(487518);
let ga = "to_premium_home_button",
    go = "premium home page";
function gu(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t0.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cL.A)(),
        u = null != t.trialEndsAt ? ip()(t.trialEndsAt).diff(ip()(), "d") : 0,
        d = t0.hd[t.planIdFromItems],
        c = aS.Ay.getDefaultPrice(d.id),
        g = aS.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cj.M)(s) ? gt.at.PREMIUM_TIER_2_WHITE_FILL : gt.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, S.jsx)(gt.e4, { text: U.intl.string(U.t.EyjDRE), className: gr.LW, colorOptions: e })
                    : (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(gt.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: gr.uS,
                                  colorOptions: e,
                              }),
                              (0, S.jsx)("div", { className: gr.on }),
                          ],
                      }),
                (0, S.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gr.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uP.$g)(c.amount, c.currency);
                            return U.intl.format(gl.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? U.intl.format(U.t.z2oQtA, {
                                  percent: i?.percentage ?? t0.Cq,
                                  regularPrice: g,
                                  renewalDate: aS.Ay.getExpectedRenewalDate(t, o),
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
    return (0, S.jsx)(gn.A, { variant: void 0, subscriptionTier: t0.pe.TIER_2, interval: d.interval });
}
function gd() {
    let e = (0, cG.k5)(),
        t = (0, cG.nf)(),
        n = (0, d9.Ay)(),
        i = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cL.A)(),
        a = (0, cM.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, S.jsxs)("div", {
        className: ih()(gr.$Y, { [gr.J5]: e || d }),
        children: [
            (0, S.jsxs)("div", {
                className: gr.jp,
                children: [
                    l
                        ? (0, S.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gr._K,
                              children: (0, gs.DP)(),
                          })
                        : (0, S.jsx)(cP.A, { className: gr.TJ }),
                    l && !e
                        ? (0, S.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                    (0, S.jsx)(gt.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: gr.LW,
                                        colorOptions: gt.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, S.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gr.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, S.jsx)(gu, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(gt.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: gr.uS,
                                            colorOptions: (0, cj.M)(n)
                                                ? gt.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gt.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, S.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gr.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, S.jsx)(gi.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gi.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gi.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gi.Nz.FRACTIONAL_PREMIUM
                                : gi.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, S.jsxs)(l3.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(ge.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      onClick: () => {
                                          (tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ga,
                                              target: go,
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
                        : (0, S.jsxs)(l3.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tc.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: ga,
                                              target: go,
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
                className: gr.ah,
                children: (0, S.jsx)("img", { className: gr.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gc() {
    return (0, S.jsxs)("div", {
        className: gr.T1,
        children: [
            (0, S.jsx)("img", { className: gr.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, S.jsxs)("div", {
                className: gr.b4,
                children: [
                    (0, S.jsx)(N.D, {
                        className: gr.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        className: gr.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, S.jsx)(c9.A, {
                        className: ih()(gr.Tp, gr._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: gr.VV },
                        color: l1.$n.Colors.CUSTOM,
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
let gg = function () {
        let e = (0, da.Hp)(),
            { analyticsLocations: t } = (0, eY.Ay)(tF.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
            i = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([o9.A], () => o9.A.hasFetchedSubscriptions()),
            l = (0, cR.Y)(t0.T7),
            [r, a] = T.useState(!0),
            o = (0, cL.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dV.A], () => {
                let e = dV.A.getMarketingComponentByType(cb.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oM.Fr || oM.v1) && null != u,
            c = T.useRef(null);
        (0, cw.i)();
        let g = (0, ck.m)();
        T.useEffect(() => {
            tl.h.wait(async () => {
                (e || (await Promise.all([oO.hP(), oO.$o(), (0, cO.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, S.jsx)(u4.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, S.jsx)(cD.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, S.jsx)(oN.y, {});
        let p = !!i?.hasActiveTrial;
        return (0, S.jsx)(eY.f5, {
            value: t,
            children: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, S.jsx)(cU.m, { config: u }),
                            (0, S.jsx)(gd, {}),
                            g && (0, S.jsx)(c7, {}),
                            !d && (0, S.jsx)(gc, {}),
                            (0, S.jsx)(cV.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !p,
                                selectedPlanColumnClassName: gr.JG,
                                selectedPlanTier: t0.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, S.jsx)(cv.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tc.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, S.jsx)("div", { ref: c, className: gr._Z }),
                    }),
                ],
            }),
        });
    },
    gm = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
            return (0, aS.YE)(e, t0.PremiumTypes.TIER_2) ? (0, S.jsx)(gg, {}) : (0, S.jsx)(cy.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    gA = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [gm] }),
    gE = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: oA.L,
        buildLayout: () => [gA],
    }),
    gh = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: aa.t,
        usePersistentBadge: function (e) {
            let t = (0, cC.e)(e);
            return T.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gE],
    });
var gx = n(104510),
    gp = n(820739),
    gS = n(859241),
    gT = n(527113),
    gf = n(338548),
    gI = n(776096),
    g_ = n(711014),
    gN = n(178368),
    gC = n(809545),
    gy = n(168482);
function gb() {
    return (0, S.jsxs)("div", {
        className: gC.iE,
        children: [
            (0, S.jsx)("img", { className: gC.Kk, alt: "", src: gy }),
            (0, S.jsxs)("div", {
                className: gC.pq,
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
var gv = n(365199),
    gj = n(878678),
    gO = n(443865),
    gL = n(980707),
    gR = n(473145);
function gD(e) {
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
                      iconLeft: gO.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gO.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, S.jsxs)(gL.W, {
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
                            n.e("295570"),
                            n.e("378357"),
                            n.e("870528"),
                            n.e("205896"),
                            n.e("534428"),
                            n.e("693173"),
                            n.e("418710"),
                            n.e("739957"),
                        ]).then(n.bind(n, 335508));
                        return (n) =>
                            (0, S.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gR.I5)(t)
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
var gP = n(545934),
    gG = n(548118),
    gM = n(987144),
    gU = n(864310),
    gV = n(290413);
function gk(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gU.A)(t.id);
    return (0, S.jsxs)("div", {
        className: n ?? gV.OA,
        children: [
            (0, S.jsx)(gG.Ay, { className: gV.$f, guild: t, size: gG.Ay.Sizes.MEDIUM }),
            (0, S.jsxs)("div", {
                className: gV.gI,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, S.jsxs)("div", {
                        className: gV.ew,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gV.QW,
                                children: [
                                    (0, S.jsx)(gx._, {
                                        className: gV.Wz,
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
                                        (0, S.jsx)("div", { className: gV.zk }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gR.gb)(t.premiumTier, { useLevels: !1 }),
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
function gw(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sj.A], () => sj.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: gV.Nr,
              children: [
                  (0, S.jsx)(gk, { guild: n }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gx._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gM.g)({
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
var gF = n(747381);
let gB =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gz(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, gR.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cL.A)(),
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
            let e = null != t.premiumGuildSubscription ? oG.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return U.intl.formatToPlainString(U.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = T.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, S.jsxs)("div", {
        className: ih()(gF.iq, { [gF.Mt]: l }),
        children: [
            (0, S.jsxs)("div", {
                className: gF.kd,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gF.bB, src: gB }),
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
                                              (0, S.jsx)("div", { className: gF.zk }),
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
                                              (0, S.jsx)("div", { className: gF.zk }),
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
            (0, S.jsx)(ah.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, S.jsx)(gD, {
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
                        className: gF.Mj,
                        ...e,
                        children: (0, S.jsx)(gv.MoreHorizontalIcon, {
                            size: "xs",
                            color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gY(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sj.A], () => sj.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gF.Nr,
        children: [
            (0, S.jsx)("div", {
                className: gF.MY,
                children:
                    null != l
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(gk, { guild: l, className: gF.OA }),
                                  (0, S.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tW.default)(),
                                              (0, gj.K4)({
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
                              className: gF.OA,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, S.jsx)(
                    gz,
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
function gX(e) {
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
                                gP.A.createFromServer(
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
                if ((!(0, gR.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsx)("div", {
        className: gF.kR,
        children: oG.default
            .keys(l)
            .map((e) => (0, S.jsx)(gY, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gH = n(502572),
    gW = n(983511),
    gK = n(342744),
    gZ = n(496431);
let gq = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gZ.A)(n);
    return (0, S.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iS.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var gQ = n(731536);
function gJ(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gR.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t0.xc.NONE;
    return 0 === l.length
        ? null
        : (0, S.jsxs)("div", {
              className: gQ.Nr,
              children: [
                  (0, S.jsxs)("div", {
                      className: gQ.MY,
                      children: [
                          (0, S.jsxs)("div", {
                              className: gQ._L,
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: gQ.MD,
                                      children: [
                                          (0, S.jsx)("img", { alt: "", className: gQ.F8, src: gB }),
                                          (0, S.jsx)("div", {
                                              className: ih()(gQ.qS, "theme-dark"),
                                              children: (0, S.jsx)("span", { className: gQ.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsxs)("div", {
                                      className: gQ.Qp,
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
                          (0, S.jsx)(gH.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, S.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gx._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sT.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, S.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gM.g)({
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
                          g$,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gR.I5)(e),
                              isCanceled: (0, gR.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g$(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, S.jsx)(gq, { cooldown: u.getTime() })
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
        className: ih()(gQ.iq, { [gQ.Mt]: i }),
        children: [
            (0, S.jsxs)("div", {
                className: gQ.kd,
                children: [(0, S.jsx)("img", { alt: "", className: gQ.bB, src: gB }), t],
            }),
            c &&
                (0, S.jsx)(ah.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsxs)(gL.W, {
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
                                                        (0, S.jsx)(gW.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, S.jsx)(gK.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: gQ.Mj,
                            ...e,
                            children: (0, S.jsx)(gv.MoreHorizontalIcon, {
                                size: "xs",
                                color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g0 = n(834612);
function g1(e) {
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
              className: g0.i,
              children: [
                  (0, S.jsxs)("div", {
                      className: g0.b,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(gX, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, S.jsx)(gJ, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g2 = n(333722),
    g3 = n(9146);
function g5() {
    return (0, S.jsxs)("div", {
        className: g3.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, S.jsx)("div", {
                className: g3.kR,
                children: g2.s.map((e, t) => {
                    let n = e.icon;
                    return (0, S.jsxs)(
                        "div",
                        {
                            className: g3.Nr,
                            children: [
                                (0, S.jsx)(n, { className: g3.Kk }),
                                (0, S.jsx)(Q.E, {
                                    className: g3.h_,
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
var g6 = n(847374),
    g4 = n(232122),
    g8 = n(665984);
function g7() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, S.jsxs)("div", {
        className: g8.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, S.jsx)("ul", {
                className: g8.p_,
                children: g4.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, S.jsxs)(
                        ie.D,
                        {
                            tag: "li",
                            className: ih()(g8.Aw, { [g8.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, S.jsxs)("div", {
                                    className: g8.k7,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            className: g8.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, S.jsx)(g6.a, {
                                            size: "sm",
                                            color: n8.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g8.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        className: g8.ZF,
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
var g9 = n(182859),
    me = n(25525),
    mt = n(416763);
function mn() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, S.jsxs)("div", {
        className: mt.wx,
        children: [
            (0, S.jsxs)("div", {
                className: mt.Qs,
                children: [
                    (0, S.jsxs)("div", {
                        className: mt.B5,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: mt.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(me.default.hjvcLO),
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
            (0, S.jsx)(g9.A, {
                variant: "member",
                className: mt.iO,
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
var mi = n(315629),
    ms = n(87719),
    ml = n(961085);
function mr() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
    if (null == e || aS.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mi.h, {
        color: "nitro-pink",
        className: ml.vK,
        children: [
            (0, S.jsxs)("div", {
                className: ml.nw,
                children: [
                    (0, S.jsx)("img", { alt: "", className: ml.q3, src: gB }),
                    (0, S.jsxs)("div", {
                        className: ml.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: t0.M4, boostCount: t0.M4 }),
                            }),
                            (0, S.jsxs)("div", {
                                className: ml.xv,
                                children: [
                                    (0, S.jsx)(aa.t, { className: ml.nE }),
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
                icon: aa.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: ms.e,
            }),
        ],
    });
}
var ma = n(532991);
function mo() {
    let e = (0, f.bG)([gI.A], () => gI.A.affinities),
        t = (0, f.bG)([g_.Ay], () => g_.Ay.getFlattenedGuildIds()),
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
              className: ma.i,
              children: [
                  (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, S.jsx)("div", { className: ma.k, children: n.map((e) => (0, S.jsx)(gw, { guildId: e }, e)) }),
              ],
          });
}
var mu = n(967246);
function md(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mi.h, {
        color: "nitro-pink",
        className: mu.vK,
        children: [
            (0, S.jsxs)("div", {
                className: mu.nw,
                children: [
                    (0, S.jsxs)("div", {
                        className: mu.MD,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: mu.F8, src: gB }),
                            (0, S.jsx)("div", {
                                className: ih()(mu.qS, "theme-dark"),
                                children: (0, S.jsx)("span", { className: mu.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mu.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, S.jsxs)("div", {
                                className: mu.xv,
                                children: [
                                    (0, S.jsx)(aa.t, { className: mu.nE }),
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
                icon: gx._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, S.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gM.g)({
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
var mc = n(89150);
function mg(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([gN.A], () => gN.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        l = (0, f.bG)([gI.A], () => gI.A.affinities),
        r = (0, f.bG)([g_.Ay], () => g_.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([gS.A], () => gS.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cL.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t0.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, S.jsxs)("div", {
        className: mc.GO,
        children: [
            (0, S.jsx)(u4.kb, { className: mc.ek }),
            (0, S.jsx)(mn, {}),
            (0, S.jsx)(mr, {}),
            g > 0 && (0, S.jsx)(md, { count: g }),
            d && (0, S.jsx)(gf.A, {}),
            !a && (0, S.jsx)(gb, {}),
            (0, S.jsxs)("div", {
                className: mc.C_,
                children: [
                    (0, S.jsx)(g1, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, S.jsx)(mo, {}),
                    (0, S.jsx)(gT.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, S.jsx)(g5, {}),
                    (0, S.jsx)(g7, {}),
                ],
            }),
        ],
    });
}
var mm = n(819677);
let mA = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                tl.h.wait(() => {
                    (oO.hP(), oO.$o(), (0, gp.CD)(), (0, cO.zS)(null, null, I.tF5.DISCOVERY), (0, gp.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([o9.A], () => ({
                    hasFetchedSubscriptions: o9.A.hasFetchedSubscriptions(),
                    premiumSubscription: o9.A.getPremiumTypeSubscription(),
                })),
                n = (0, cR.Y)(),
                i = (0, f.bG)([o7.A], () => o7.A.hasFetchedPaymentSources),
                s = (0, f.bG)([gS.A], () => gS.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, S.jsx)("div", { className: ih()(mm.kL, mm.Lq), children: (0, S.jsx)(oN.y, {}) })
                : (0, S.jsxs)("div", {
                      className: mm.kL,
                      children: [
                          (0, S.jsx)("div", { className: mm.Tp }),
                          (0, S.jsx)("div", { className: mm.Qs, children: (0, S.jsx)(mg, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    mE = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mA] }),
    mh = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [mE],
    }),
    mx = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: gx._,
        buildLayout: () => [mh],
    });
var mp = n(153659),
    mS = n(155984),
    mT = n(357758),
    mf = n(262077),
    mI = n(281445),
    m_ = n(624479),
    mN = n(626584),
    mC = n(131607),
    my = n(95035),
    mb = n(196736),
    mv = n(685743),
    mj = n(349085),
    mO = n(342942),
    mL = n(376205),
    mR = n(252589),
    mD = n(758836),
    mP = n(49999),
    mG = n(394107),
    mM = n(439050);
let mU = new mN.A("GameServerSubscriptionsSection");
function mV(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mk(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mw = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mj.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mC.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d$.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mv.A)(c, t.id, tF.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, mO.A)({
                provider: mI.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mP.i.TAKE_ACTION), g());
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
            [o9.A, d1.A],
            () => {
                let e = null != l ? o9.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d1.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, uP.$g)(u, o.priceCurrency) })
                            : null,
                    c = mV(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(mG.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(mG.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(mG.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mk,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = o9.A.getSubscriptionById(l),
                t = null != e ? mV(e.currentPeriodEnd) : "";
            (0, n7.A)({
                title: U.intl.string(mG.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(mG.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(mG.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oO.M2(l, s), await oO.hP());
                    } catch (e) {
                        mU.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = o9.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d1.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uP.$g)(u, o.priceCurrency) : "",
                c = mV(e.currentPeriodEnd);
            (0, n7.A)({
                title: U.intl.string(mG.default.o96qbc),
                subtitle: U.intl.formatToPlainString(mG.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cO.ur)(r);
                        let t = e.items;
                        (await oO.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aS.UC)(t, e.currency),
                            s,
                        ),
                            await oO.hP());
                    } catch (e) {
                        mU.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, S.jsxs)("div", {
        className: mM.nM,
        children: [
            (0, S.jsxs)("div", {
                className: mM.M4,
                children: [
                    (0, S.jsxs)("div", {
                        className: mM.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, S.jsx)("img", { className: mM.uP, src: a, alt: "" }),
                            (0, S.jsx)("div", { className: mM.tw }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mM.CR,
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
                                          className: mM.CQ,
                                          children: [
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, S.jsx)(ie.D, {
                                                  className: mM.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, S.jsx)(uw.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, S.jsx)(m_.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(my.A, { onClick: A, children: U.intl.string(mG.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: mM.Rd,
                children: [
                    (0, S.jsxs)("div", {
                        className: mM.Ff,
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
                                          className: mM.ez,
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
function mF(e) {
    let { servers: t } = e,
        n = (0, mb.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mR.Y)(),
        s = (0, f.bG)([lp.default], () => aS.Ay.canUseShopDiscounts(lp.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([o9.A], () => (0, mL.HY)(t, i, (e) => o9.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !d1.A.isLoadedForSKU(e) && !d1.A.isFetchingForSKU(e));
        e.length > 0 && (0, cO.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tW.default)(), (0, t9.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mD.G2.GAME_SERVERS)));
    }, []);
    return (0, S.jsxs)("div", {
        className: mM.uW,
        children: [
            (0, S.jsxs)("div", {
                className: mM.wx,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(mG.default.vCzwM7),
                    }),
                    (0, S.jsxs)("div", {
                        className: mM.h_,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(mG.default.y85Eg9),
                            }),
                            n &&
                                (0, S.jsx)(my.A, {
                                    onClick: a,
                                    children: (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(mG.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", {
                className: mM.p_,
                children: t.map((e) =>
                    (0, S.jsx)(mw, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mB = n(55766),
    mz = n(696986),
    mY = n(364036);
function mX(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, S.jsx)(mz.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: mY.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, S.jsx)(mz.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: mY.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mY.RI }),
                    (0, S.jsxs)("div", {
                        className: mY.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mY.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mY.h_,
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
var mH = n(872351),
    mW = n(9113),
    mK = n(599941),
    mZ = n(384684),
    mq = n(2242);
let mQ = [];
var mJ = n(885574),
    m$ = n(508770),
    m0 = n(912851),
    m1 = n(182744);
let m2 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, S.jsx)(ie.D, {
        onClick: i ? void 0 : n,
        className: m1.x6,
        children: (0, S.jsxs)("div", {
            className: m1.hQ,
            children: [
                i
                    ? (0, S.jsx)(oN.y, { type: oN.y.Type.PULSING_ELLIPSIS, className: m1.__invalid_spinner })
                    : (0, S.jsx)(Q.E, { variant: "text-md/medium", className: m1.Pf, children: t }),
                (0, S.jsx)(g6.a, { size: "md", color: "currentColor", className: m1.UE }),
            ],
        }),
    });
};
var m3 = n(465932),
    m5 = n(543767),
    m6 = n(951555),
    m4 = n(790284),
    m8 = n(636194),
    m7 = n(624456),
    m9 = n(710144),
    Ae = n(815332),
    At = n(162093),
    An = n(557506);
function Ai(e) {
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
                        return (n(!0), await oO.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === mq.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === mq.bN.INTANGIBLE),
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
                null != u ? (0, S.jsx)(i$.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, S.jsx)(At.x, { listingId: i.id, guildId: n.guild_id, className: An.P }),
            ],
        }),
    });
}
var As = n(319225),
    Al = n(746080),
    Ar = n(883616);
function Aa(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, S.jsxs)("div", {
        className: Ar.L0,
        children: [
            (0, S.jsxs)("div", {
                className: Ar.a5,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: Ar.HU, children: t }),
                    i &&
                        (0, S.jsx)(sA.m, {
                            text: s,
                            children: (0, S.jsx)(mJ.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: Ar.Mo,
                            }),
                        }),
                ],
            }),
            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", className: Ar.sx, children: n }),
        ],
    });
}
function Ao(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eY.Ay)(),
        [i] = (0, m5.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tF.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([o7.A], () => [o7.A.hasFetchedPaymentSources, o7.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, S.jsx)(m6.A, { subscription: t, currentInvoicePreview: i })
        : (0, S.jsx)(oN.y, {});
}
function Au(e) {
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
                  className: Ar.__invalid_rowButtons,
                  children: n
                      ? (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, S.jsxs)(S.Fragment, {
                            children: [
                                !t && !s && (0, S.jsx)(m2, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, S.jsx)(m2, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Ad = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, m7.M)(e),
                n = (0, f.bG)([m8.A], () => m8.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([m8.A], () =>
                    null != n ? m8.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sj.A], () => sj.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mK.XE)();
            T.useEffect(() => {
                l && null != s && null == m8.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ip()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uP.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m3.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oO.QP(t, c),
                (0, As.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
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
        className: Ar.kL,
        children: [
            (0, S.jsx)(m9.A, {
                onClick: r,
                className: Ar.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, S.jsxs)(S.Fragment, {
                        children: [
                            null != s && (0, S.jsx)(gG.Ay, { guild: s, active: !0, size: gG.Ay.Sizes.MEDIUM }),
                            (0, S.jsxs)("div", {
                                className: Ar.if,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: Ar.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: Ar.xp,
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: Ar.KR,
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
                                                                  className: Ar.qc,
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
                                                          className: Ar.Bi,
                                                          children: (0, S.jsx)(m$.E, {
                                                              type: { text: U.intl.string(U.t["sBl3X/"]) },
                                                              variant: "default",
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
                                children: (0, S.jsx)(g6.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ih()(Ar.D6, { [Ar.S7]: l }),
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
                          (0, S.jsx)("div", { className: Ar.yF }),
                          (0, S.jsx)(Ae.A, { groupListingId: i.id, subscription: t, className: Ar.kE }),
                          (0, S.jsxs)("div", {
                              className: Ar.Zx,
                              children: [
                                  (0, S.jsx)(Aa, { label: C, value: N }),
                                  (0, S.jsx)(Aa, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: p,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, S.jsx)(Aa, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, S.jsx)(mz.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, S.jsx)(t8.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, S.jsx)(Ao, { subscription: t }),
                              }),
                          !b &&
                              (0, S.jsx)(Au, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sT.openModal)((t) => (0, S.jsx)(Ai, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t9.pX)(I.BVt.CHANNEL(s.id, Al.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tW.default)(),
                                          m0.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (m4.A.setState({ subsection: eO.nR }),
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
var Ac = n(661097);
let Ag = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, f.bG)([mZ.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mZ.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? mq.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mq.M_.NONE
                                  : mq.M_.IN_SUBSCRIPTION_SERVER;
                        })([mZ.A]),
                    ) === mq.M_.SUBSCRIBED,
                n = (0, f.bG)([o9.A], () => o9.A.getActiveGuildSubscriptions()),
                i = T.useRef(!1);
            return (
                T.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o9.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o9.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oO.hP());
                }, [e, t]),
                n ?? mQ
            );
        })(),
        { loading: i } = (0, mK.eb)(n);
    return ((0, mW.A)(oM.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, S.jsx)(oN.y, {})
        : 0 === n.length
          ? null
          : (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mH.z, variant: "secondary", onClick: t }),
                    (0, S.jsx)(mz.h, { size: 10 }),
                    (0, S.jsx)(n9.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, S.jsx)("div", {
                            className: Ac.A,
                            children: n.map((e) => (0, S.jsx)(Ad, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Am = n(327479),
    AA = n(932012);
function AE(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, S.jsx)(mz.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: AA.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, S.jsx)(mz.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: AA.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AA._e }),
                    (0, S.jsxs)("div", {
                        className: AA.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: AA.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: AA.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(Am.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var Ah = n(548411),
    Ax = n(417098),
    Ap = n(143582),
    AS = n(915043),
    AT = n(631466);
function Af(e) {
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
        className: ih()(AT.iE, t),
        children: [
            (0, S.jsx)("div", { className: ih()(AT.wx, i), children: n }),
            l && (0, S.jsx)("div", { className: AT.Qs, children: s }),
        ],
    });
}
var AI = n(885996),
    A_ = n(144165),
    AN = n(664121),
    AC = n(950305),
    Ay = n(943775),
    Ab = n(123791),
    Av = n(900797),
    Aj = n(611643);
let AO = T.createContext({ isOpen: !1, toggleOpen: () => {} });
function AL(e) {
    let { children: t } = e,
        [n, i] = T.useReducer((e) => !e, !1),
        s = T.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, S.jsx)(AO.Provider, { value: s, children: t(n) });
}
AL.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(AO),
        l = i ? Av.t : g6.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, S.jsxs)(ie.D, {
        className: ih()(Aj.L, t),
        onClick: s,
        children: [
            (0, S.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, S.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AR = n(627363),
    AD = n(243217),
    AP = n(328968),
    AG = n(163437),
    AM = n(3432);
function AU(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AV = n(562312),
    Ak = (((u = {})[(u.LOADING = 0)] = "LOADING"), (u[(u.DONE = 1)] = "DONE"), (u[(u.ERROR = 2)] = "ERROR"), u);
function Aw(e) {
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
            [d1.A, d2.A, AP.A, sj.A],
            () => {
                let e,
                    n = d1.A.get(r),
                    i = null != n ? d2.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AP.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AG.PJ)(o.skuFlags),
                    d = u && null != s ? sj.A.getGuild(s) : void 0,
                    c = (0, AG.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d1.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AR.YY)(a),
        x = T.useMemo(() => (null != h ? (0, Ay.A)(h, 100) : null), [h]),
        p = g?.deleted ?? !1,
        _ = null != g && (0, AG.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, eY.Ay)(),
        [b] = (0, m5.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tF.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = AU(t.currentPeriodEnd),
        j = 0 === i;
    return (0, S.jsxs)(Af, {
        headerClassName: AV.dL,
        header:
            !1 === j
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsxs)("div", {
                              className: AV.VW,
                              children: [
                                  null != x &&
                                      (0, S.jsx)(A_._, { src: x.href, imageClassName: AV.Z2, width: 40, height: 40 }),
                                  (0, S.jsxs)("div", {
                                      className: AV.aF,
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
                              className: AV.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, S.jsx)(AX, {
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
                : (0, S.jsx)(oN.y, { type: oN.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, S.jsx)(AY, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, S.jsx)(AY, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, S.jsx)(AY, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, S.jsxs)("div", {
                className: AV.zH,
                children: [
                    (0, S.jsx)(Az, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsxs)("span", {
                                          className: AV.yW,
                                          children: [(0, S.jsx)(AN.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, S.jsxs)("span", {
                                              className: AV._t,
                                              children: [
                                                  (0, S.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, S.jsx)(gG.Ay, { guild: c, size: gG.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, S.jsxs)("span", {
                                  className: AV.yW,
                                  children: [(0, S.jsx)(AC.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, S.jsx)(AF, { invoicePreview: b, subscriptionPlan: o }),
                    (0, S.jsx)(Az, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: AU(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, S.jsx)(AB, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, S.jsx)(AW, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: p,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, S.jsx)(AH, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function AF(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, S.jsx)(Az, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, uP.CE)((0, uP.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, S.jsx)(Az, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, uP.CE)((0, uP.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, S.jsx)(Az, {
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
function AB(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uP.CE)((0, uP.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, S.jsx)(Az, {
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
    return (0, S.jsx)(Az, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function Az(e) {
    let { title: t, content: n } = e;
    return (0, S.jsxs)("div", {
        className: AV.nM,
        children: [
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", className: AV.u4, children: n }),
        ],
    });
}
function AY(e) {
    let { type: t, title: n } = e;
    return (0, S.jsx)(ao.p, {
        messageType: "warning" === t ? ao.Y.WARNING : ao.Y.ERROR,
        className: AV.Xm,
        children: (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
    });
}
function AX(e) {
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
        c = (0, AG.Se)(s),
        { analyticsLocations: g } = (0, eY.Ay)(),
        [m, A] = T.useState(!1),
        E = (0, Ab.C)(t.id),
        h = (0, f.bG)([d2.A], () => d2.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, oO.QP)(l, g);
            if (null == e) return;
            (0, sT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, S.jsx)(t, { ...n, storeListing: i, subscription: AD.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, S.jsxs)("div", {
        className: AV.fw,
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
function AH(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, S.jsx)(AL, {
        children: (e) =>
            (0, S.jsxs)("div", {
                className: AV.PX,
                children: [
                    (0, S.jsxs)("div", {
                        className: AV.wV,
                        children: [
                            e && (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, S.jsx)(AL.Toggle, {
                                className: AV.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, S.jsx)(AI.FY, { header: i, icon: (0, AM.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function AW(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, S.jsx)("div", {
                className: AV.Ji,
                children: (0, S.jsx)(t8.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, S.jsx)(oN.y, { type: oN.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, S.jsx)("div", {
                  className: AV.Ji,
                  children: (0, S.jsxs)(Ax.$T, {
                      color: Ax.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, S.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, S.jsx)("div", {
                  className: AV.Ji,
                  children: (0, S.jsx)(t8.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, S.jsx)(m6.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var AK = (((d = {}).HOME = "HOME"), (d.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), d);
n(938796);
var AZ = n(38405);
let Aq = (0, f.UT)(d1.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d1.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AZ.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cO.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AQ = n(240248),
    AJ = n(237218),
    A$ = n(763064);
function A0(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, S.jsx)("button", {
                className: A$.x6,
                onClick: () => l((e) => !e),
                children: (0, S.jsxs)(Q.E, {
                    className: A$.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, S.jsx)(Av.t, { color: n8.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, S.jsx)(g6.a, { color: n8.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: A$.Qs,
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
var A1 = n(920352);
function A2(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, AJ.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = Aq(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aS._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, S.jsxs)(Af, {
              className: ih()(A1.iE, i),
              header: (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsxs)("div", {
                          className: A1.qd,
                          children: [
                              null != a &&
                                  (0, S.jsx)(A_._, { src: a.href, imageClassName: A1.rW, width: 48, height: 48 }),
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
                  !(0, AQ.uJ)(r) &&
                      (0, S.jsx)("div", {
                          className: A1.h_,
                          children: (0, S.jsx)(A0, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, S.jsx)("div", {
                          className: A1.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, S.jsx)(AI.FY, { header: n, icon: (0, AM.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A3 = n(185438),
    A5 = n(683380);
function A6(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Ay.A)(t, 100),
        u = (0, AG.PJ)(r.flags),
        d = u ? AN.R : AC.UserIcon,
        c = u ? U.intl.string(U.t["46YF2D"]) : U.intl.string(U.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, f.bG)([sj.A], () => (u && null != g ? sj.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [d2.A],
            () => {
                if (null != a) return d2.A.get(a);
            },
            [a],
        ),
        E = AU(n.currentPeriodEnd);
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsxs)("div", {
                className: A5.wx,
                children: [
                    null != o && (0, S.jsx)(A_._, { src: o.href, imageClassName: A5.Z2, width: 48, height: 48 }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, S.jsxs)("div", {
                                className: A5.p4,
                                children: [
                                    (0, S.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: A5.N4,
                                        children: [(0, S.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, S.jsxs)("span", {
                                                    className: A5.vP,
                                                    children: [
                                                        (0, S.jsx)(gG.Ay, { guild: m, size: gG.Ay.Sizes.SMOL }),
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
            (0, S.jsx)(AL, {
                children: (e) =>
                    (0, S.jsxs)("div", {
                        className: A5._B,
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
                            (0, S.jsx)(AL.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, S.jsxs)("div", {
                className: A5.x0,
                children: [
                    (0, S.jsx)(A2, {
                        storeListing: i,
                        className: A5.o3,
                        cta: (0, S.jsxs)("div", {
                            className: A5.cJ,
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
                                  A2,
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
                            : (0, S.jsx)(A4, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function A4(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A3.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, S.jsx)(A2, {
        storeListing: t,
        cta: (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class A8 extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, S.jsxs)(Ax.$T, {
                  color: Ax.Hv.DANGER,
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
function A7(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = T.useState({ route: AK.HOME }),
        { route: l } = i;
    function r() {
        s({ route: AK.HOME });
    }
    let a = (e) => {
            (s({ route: AK.SWITCH_APP_PLANS, ...e }), n(U.intl.string(U.t.VFqtkP), r));
        },
        [o, u] = T.useState({});
    T.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Ak.LOADING })),
                (0, Ap._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Ak.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Ak.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AS.E)(),
        c = d !== AS.mJ.LOADED;
    switch (l) {
        case AK.HOME:
            return (0, S.jsx)(S.Fragment, {
                children: t.map((e) =>
                    (0, S.jsx)(
                        A8,
                        {
                            subscription: e,
                            children: (0, S.jsx)(Aw, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Ak.LOADING : (o[e.id] ?? Ak.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AK.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, S.jsx)(A6, { ...m, navigateToHome: r });
        default:
            (0, im.xb)(l);
    }
}
var A9 = n(707989);
function Ee(e) {
    let { onGoBack: t } = e,
        n = (0, f.yK)(
            [o9.A],
            () =>
                o9.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = T.useState();
    return (
        null == i && (i = (0, S.jsx)(Et, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, S.jsxs)("div", {
            children: [
                i,
                (0, S.jsx)("div", {
                    className: A9.A,
                    children: (0, S.jsx)(A7, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, S.jsx)(Et, {
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
function Et(e) {
    let { onBack: t, title: n } = e;
    return (0, S.jsxs)("div", {
        className: A9.D,
        children: [
            (0, S.jsx)(sg.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, S.jsx)(Ah.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, S.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var En = n(366999),
    Ei = n(391659);
function Es(e) {
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
        ? ((t = U.intl.string(gl.default["/S02sx"])), (n = U.intl.string(gl.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === t0.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ih()({ [Ei.Hs]: i, [Ei.mT]: !i }),
        d = ih()({ [Ei.CQ]: i, [Ei.ZM]: !i }),
        c = ih()({ [Ei.EM]: !i });
    return (0, S.jsxs)("div", {
        className: Ei.r6,
        children: [
            (0, S.jsxs)("div", {
                className: Ei.Nv,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, S.jsx)("div", {
                    className: Ei.ZS,
                    children: (0, S.jsx)("div", {
                        className: u,
                        children: (0, S.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let El = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, aS.kX)(t),
        r = l.length > 0,
        a = (0, En.Ay)(t.endsAt, En.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, S.jsx)("div", {
        children: (0, S.jsxs)("div", {
            className: ih()(n, Ei.f8),
            children: [
                (0, S.jsx)("div", {
                    className: Ei.J_,
                    children: (0, S.jsxs)("div", {
                        className: Ei.Bh,
                        children: [
                            (0, S.jsx)("div", {
                                className: Ei.xt,
                                children: (0, S.jsx)(aa.t, { size: "md", color: "white", className: Ei.T8 }),
                            }),
                            (0, S.jsx)("div", {
                                className: Ei.pt,
                                children: (0, S.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, S.jsx)(Q.E, {
                                className: Ei.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, S.jsx)(Es, {
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
var Er = n(983048);
function Ea(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, f.yK)([d1.A], () => [d1.A.get(i), null != l ? d1.A.get(l.planId) : null]);
    if (null == o || aS.Ay.getInterval(i).intervalType !== t0.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aS.z4)(i),
        m = aS.Ay.getDisplayName(i);
    if (a) t = U.intl.string(gl.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, aS._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, S.jsxs)("div", {
        className: Ei.Bh,
        children: [
            (0, S.jsx)("div", {
                className: ih()({
                    [Ei.bY]: g,
                    [Ei.sr]: o.skuId === t0.pe.TIER_0,
                    [Ei.lP]: o.skuId === t0.pe.TIER_1,
                    [Ei.eb]: o.skuId === t0.pe.TIER_2,
                }),
                children: g
                    ? (0, S.jsx)(gx._, { size: "md", color: "currentColor", className: Ei.Kk })
                    : (0, S.jsx)(aa.t, { size: "md", color: "currentColor", className: Ei.Kk }),
            }),
            (0, S.jsxs)("div", {
                className: Ei.pt,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, S.jsx)(N.D, {
                            className: Ei.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                className: Ei.PJ,
                variant: "text-md/semibold",
                children: U.intl.format(U.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Eo = function (e) {
    let { className: t, entitlements: n } = e,
        i = W()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, f.yK)([dB.A], () => dB.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([o9.A], () => o9.A.getPremiumSubscription()),
        r = (0, f.bG)([o9.A], () => null == o9.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t0.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)("div", {
                className: ih()(t, Ei.xF, Ei.J_),
                children: Object.keys(i).map((e) =>
                    (0, S.jsx)(
                        Ea,
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
                            className: Ei.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, S.jsx)(Er.i, {}),
                    ],
                }),
        ],
    });
};
var Eu = n(902782);
function Ed(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        [l] = (0, m5.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tF.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Eu.r : Eu.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aS.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d1.A.get(o);
    tx()(null != u, "Missing plan");
    let d = (0, uP.$g)(l.total, l.currency);
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
function Ec(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, S.jsx)(Ed, { subscription: t, withOverheadSeparator: n });
}
var Eg = n(580892),
    Em = n(689255);
let EA = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function EE() {
    return (0, S.jsx)(oU.Z, {
        className: Em.wb,
        type: oU.Z.Types.CUSTOM,
        children: (0, S.jsxs)(sC.A, {
            align: sC.A.Align.CENTER,
            children: [
                (0, S.jsx)(si.A, { game: null, size: si.M.SMALL, className: Em.pV }),
                (0, S.jsx)("span", { className: Em.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function Eh(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mT._)(e, t));
}
function Ex() {
    let e = (0, f.bG)([dB.A], () => dB.A.getForApplication(t0.tv), [], Eh);
    return (
        T.useEffect(() => {
            (0, cg.LM)(t0.tv);
        }, []),
        (0, S.jsx)(n9.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && aS.Ay.hasAccountCredit(e)
                    ? (0, S.jsx)(Eo, { className: Em.fX, entitlements: e })
                    : (0, S.jsx)(EE, {}),
        })
    );
}
function Ep() {
    return (0, S.jsx)("hr", { className: Em.hr });
}
let ES = function () {
        var e;
        let t = (0, f.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
            n = (0, mf.A)({ subscriptionFilter: (e) => Eg.Hy.has(e.status) }),
            i = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [o7.A],
                () => (null != t && null != t.paymentSourceId ? o7.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([o9.A], () => o9.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oD.A], () => oD.A.isBusy),
            o = (0, cR.Y)(),
            u = m4.A.useField("subsection"),
            d = m4.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, ia._)(null != u ? EA[u] : h.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, f.bG)([o9.A], () => o9.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, f.bG)(
                [o9.A],
                () =>
                    Object.values(o9.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, f.bG)([o9.A], () =>
                Object.values(o9.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mB.f)({ enabled: A }),
            x = (0, f.yK)([o9.A], () => (0, mL.eP)(E, (e) => o9.A.getSubscriptionById(e)), [E]),
            p = (0, cL.A)({ forceFetch: !0 }),
            _ = (0, cM.ds)(),
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
                m4.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, x.length]),
        T.useEffect(
            () => (
                tl.h.wait(() => {
                    ((0, cO.zS)(), oO.hP(), (0, gp.CD)(), oO.$o());
                }),
                function () {
                    m4.A.resetState();
                }
            ),
            [],
        ),
        td.A.enabled)
            ? (0, S.jsx)(oA.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, S.jsx)(Ag, { onGoBack: () => m4.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, S.jsx)(Ee, { onGoBack: () => m4.A.setState({ subsection: null }) })
                    : (0, S.jsx)("div", {
                          className: Em.kL,
                          children: (0, S.jsxs)("div", {
                              className: Em.Qs,
                              children: [
                                  s ? (0, S.jsx)(Eg.Sb, {}) : null,
                                  null != t
                                      ? (0, S.jsx)(Eg.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, S.jsx)(Eg.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, S.jsxs)("section", {
                                          children: [
                                              (0, S.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: Em.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: Em.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, S.jsx)(El, {
                                                  className: Em.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, S.jsx)(Ex, {}),
                                  m > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Ep, {}),
                                              (0, S.jsx)(mX, {
                                                  count: m,
                                                  onClickManageSubscription: () => m4.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Ep, {}),
                                              (0, S.jsx)(AE, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m4.A.setState({ subsection: eO.PZ }),
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
                                          children: [(0, S.jsx)(Ep, {}), (0, S.jsx)(mF, { servers: x })],
                                      }),
                                  (0, S.jsx)(Ep, {}),
                                  null != t ? (0, S.jsx)(Ec, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, S.jsx)("div", { className: ih()(Em.kL, Em.Lq), children: (0, S.jsx)(oN.y, {}) });
    },
    ET = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, S.jsx)(ES, {}),
    }),
    Ef = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [ET],
    }),
    EI = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [Ef] }),
    E_ = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: mp.L,
        usePersistentBadge: function () {
            let e = (0, mS.l)();
            return T.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, S.jsx)(i5.E, { size: "xs", color: n8.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EI],
    }),
    EN = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [gh, mx, E_, cN, de],
    });
var EC = n(540999),
    Ey = n(306471),
    Eb = n(964355),
    Ev = n(172272);
let Ej = (0, E.zD)(h.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isAxeEnabled),
        setValue: (e) => (0, ru.x)({ axeEnabled: e }),
    }),
    EO = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ru.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var EL = n(276086),
    ER = n(354328);
let ED = (0, E.zD)(h.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, ER.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, EL.L)("highlight_mana_components", e);
        },
    }),
    EP = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, ER.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, EL.L)("highlight_mana_text_overrides", e);
        },
    }),
    EG = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, ER.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, EL.L)("highlight_mana_text", e);
        },
    }),
    EM = (0, E.zD)(h.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, ER.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, EL.L)("highlight_void_toggleables", e);
        },
    }),
    EU = (0, E.sN)(h.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, f.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ev.YR,
        markers: Array.from({ length: Ev.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ev.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ev.Or.getState().setHorizontalSpacing(e);
        },
    }),
    EV = (0, E.zD)(h.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ru.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ek = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([rd.default], () => rd.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ev.YR,
        markers: Array.from({ length: Ev.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ev.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ev.Or.getState().setVerticalSpacing(e);
        },
    }),
    Ew = (0, E.zZ)(h.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [EO, EV, EU, Ek, ED, EG, EP, EM, Ej],
    });
var EF = n(246605),
    EB = n(274184);
function Ez(e) {
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
let EY = (0, E.E2)(h.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, f.bG)([EB.Ay], () => EB.Ay.getActionTriggeredSurveyOverride());
            return (0, S.jsx)(Ez, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EF.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    EX = (0, E.zD)(h.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => M.HZ.useSetting(),
        setValue: (e) => {
            M.HZ.updateSetting(e);
        },
    });
var EH = n(396478),
    EW = n(173936),
    EK = n(103557),
    EZ = n(414079),
    Eq = n(148810),
    EQ = n(380610),
    EJ = n(986238),
    E$ = n(428524),
    E0 = n(252149),
    E1 = n(221851);
let E2 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E3 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E5(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E6 extends T.Component {
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
            className: ih()(E$.oS, E1.SX, E0.N, E$.nM),
            children: [
                (0, S.jsx)(EZ.A, {
                    className: ih()(E$.lL, { [E$.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, S.jsxs)(sC.A, {
                    className: E1.QB,
                    children: [
                        (0, S.jsx)(sC.A.Child, {
                            basis: "50%",
                            children: (0, S.jsx)(sc.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E3,
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
                                className: E$.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, S.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: E$.AS,
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
class E4 extends T.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EQ.bD)();
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
        return W().without(E2, ...t);
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
        let t = await (0, Eq.Zk)(e);
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
        (0, sT.openModal)((t) => (0, S.jsx)(E8, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, S.jsx)(EH.pp, {
            theme: nW.A.theme,
            className: ih()(E1.eT, E1.SX),
            children: (0, S.jsx)(EH.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, S.jsx)(
                      E6,
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
                      icon: EW.LinkIcon,
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
                    disabled: E5(t ?? {}),
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
            ? (0, S.jsx)(oN.y, { className: E1.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E5(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, S.jsxs)(l3.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class E8 extends T.Component {
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
            experiments: this.isMobile() || null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, Eq.SB)(e);
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
        return E5(this.props.buildOverrides ?? {});
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
            d = EJ.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, S.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, S.jsx)(sc.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: EJ.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(sc.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: EJ.VP,
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
                    : (0, S.jsx)(EK.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(EK.f, {
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
        let n = ao.Y.INFO;
        switch (t) {
            case 0:
                n = ao.Y.ERROR;
                break;
            case 1:
                n = ao.Y.WARNING;
        }
        return (0, S.jsx)(ao.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, S.jsx)(sS.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, S.jsx)(cn.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let E7 = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E4 });
var E9 = n(256311),
    he = n(883600);
let ht = (0, E.E2)(h.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, f.bG)([he.A], () => he.A.overrideId());
        async function t(e) {
            let t = he.A.getChangelog(e, "en-US");
            return null != t ? t : ((await E9.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, S.jsx)(Ez, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => E9.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hn = n(506774);
let hi = new Date("2018-01-01"),
    hs = (0, E.Tf)(h.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => M.pK.useSetting() === oG.default.fromTimestamp(hi.getTime()),
        onClick: () => (hn.w.set("lastChangeLogDate", hi), M.pK.updateSetting(oG.default.fromTimestamp(hi.getTime()))),
    }),
    hl = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, f.bG)([rd.default], () => rd.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, f.bG)(
                [rd.default],
                () => rd.default.disableAppCollectionsCache || rd.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ru.x)({ disableAppCollectionsCache: e }),
    }),
    hr = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isForcedCanary),
        setValue: (e) => {
            (0, ru.x)({ canary: e });
        },
    }),
    ha = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.sourceMapsEnabled),
        setValue: (e) => (0, ru.x)({ sourceMapsEnabled: e }),
    }),
    ho = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ru.x)({ onlyShowPreviewAppCollections: e }),
    });
var hu = n(10094),
    hd = n(683760);
let hc = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t0.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t0.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t0.PremiumTypes.TIER_2 },
    ],
    hg = (0, E.Hn)(h.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hc,
        clearable: !0,
        useValue: () =>
            (0, f.bG)([hd.A], () => {
                let e = hd.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hu.O)(null, void 0)
                : null === e
                  ? (0, hu.O)(void 0, void 0)
                  : (0, hu.O)(0 === e ? null : e, void 0);
        },
    });
var hm = n(374042);
let hA = (0, E.E2)(h.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, f.bG)([EB.Ay], () => EB.Ay.getSurveyOverride());
            return (0, S.jsx)(Ez, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EF.xr(e),
                fetchOverride: (e) => (0, hm.B)(e, !0) ?? null,
            });
        },
    }),
    hE = (0, E.zZ)(h.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hg, hA, EY, ht, hs, hr, EX, ho, hl, ha, E7],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hh = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ru.x)({ logAnalyticsEvents: e }),
    }),
    hx = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ru.x)({ logGatewayEvents: e }),
    }),
    hp = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.preventPopoutClose),
        setValue: (e) => (0, ru.x)({ preventPopoutClose: e }),
    }),
    hS = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.logKeyboardMismatches),
        setValue: (e) => (0, ru.x)({ logKeyboardMismatches: e }),
    }),
    hT = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ru.x)({ logOverlayEvents: e }),
    }),
    hf = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isLoggingQuestEvents),
        setValue: (e) => (0, ru.x)({ logQuestEvents: e }),
    }),
    hI = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([rd.default], () => rd.default.isTracingRequests),
        setValue: (e) => (0, ru.x)({ trace: e }),
    }),
    h_ = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hx, hT, hI, hh, hS, hp, hf] }),
    hN = (0, E.t_)(h.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hE, h_, Ew],
    }),
    hC = (0, E.i4)(h.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ey.V,
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
                } = (0, f.cf)([rd.default, EC.A, lp.default], () => ({
                    layoutDebuggingEnabled: rd.default.layoutDebuggingEnabled,
                    isDeveloper: EC.A.isDeveloper,
                    isLoggingGatewayEvents: rd.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rd.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rd.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rd.default.isTracingRequests,
                    isForcedCanary: rd.default.isForcedCanary,
                    isSourceMapsEnabled: rd.default.sourceMapsEnabled,
                    isAxeEnabled: rd.default.isAxeEnabled,
                    preventPopoutClose: rd.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rd.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rd.default.disableAppCollectionsCache,
                    isStaff: lp.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, Ev.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = Ev.Or.getState(),
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
                                              (0, ru.x)({ canary: !r });
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
                                              (0, ru.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, ru.x)({ disableAppCollectionsCache: !d });
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
                                              (0, ru.x)({ logGatewayEvents: !n });
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
                                              (0, ru.x)({ logOverlayEvents: !i });
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
                                              (0, ru.x)({ logAnalyticsEvents: !s });
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
                                              (0, ru.x)({ trace: !l });
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
                                              (0, ru.x)({ preventPopoutClose: !o });
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
                                              (0, ru.x)({ axeEnabled: !a });
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
                                              (0, ru.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, S.jsx)(Eb.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: Ev.YR,
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
                                                          (0, S.jsx)(Eb.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: Ev.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => lx() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hN],
    });
var hy = n(127062),
    hb = n(25044),
    hv = n(80703),
    hj = n(123292),
    hO = n(857250),
    hL = n(683438),
    hR = n(890856),
    hD = n(100392),
    hP = n(102609),
    hG = n(271478),
    hM = n(386976),
    hU = n(257433),
    hV = n(32523),
    hk = n(96919),
    hw = n(688151),
    hF = n(863763);
function hB(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = T.useState(s),
        [a, o] = T.useState(!1),
        u = T.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, f.bG)([d$.default], () => d$.default.getId()),
        c = (0, f.bG)([d$.default], () => {
            let e = d$.default.getInstallationForTracking();
            return null == e ? null : (0, hv.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hU.iN)(t, g),
        A = (0, hU.Fm)(t, g),
        E = (0, f.yK)([rx.A], () =>
            W()
                .sortBy(rx.A.getRecentExposures(hw.Vh.USER, n), (e) => {
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
                (0, uv.C)((0, hD.yA)(n), () => {
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
        x = (0, S.jsx)(hR.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hF.DD,
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
                                    uv.p5 &&
                                        (0, S.jsx)(ie.D, {
                                            onClick: h,
                                            children: (0, S.jsx)(EW.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", {
                        className: hF.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, S.jsx)("div", { className: hF.Os, children: x });
    let p = "";
    return (
        (p =
            t.system === hP.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hw.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, S.jsxs)("div", {
            className: hF.Os,
            children: [
                x,
                (0, S.jsx)("div", {
                    children: (0, S.jsx)(hG.g, {
                        label: t.system === hP.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: p,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, S.jsx)("div", {
                    className: hF.h_,
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
                                  className: hF.id,
                                  children: "Server Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hF.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hF.id,
                                  children: "Override Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hF.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hF.id,
                                  children: "Recent Exposures",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hF.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, S.jsx)("div", {
                          className: hF.id,
                          children: (0, S.jsx)(hj.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, S.jsx)(sd.c, { className: hF.yF }),
            ],
        })
    );
}
function hz(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = T.useState(null != i),
        [r, a] = T.useState(!1),
        o = T.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, f.bG)([rx.A], () => rx.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rx.A, sj.A, i1.A], () => {
            if (t.system === hP.l5.LEGACY) return null == rx.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sj.A.getGuildsArray().some((t) => null != i1.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rx.A], () =>
            W()
                .sortBy(rx.A.getRecentExposures(hw.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([d$.default, sj.A, rx.A, i1.A], () => {
            let e = t.system === hP.l5.LEGACY,
                i = t.name,
                s = d$.default.getId(),
                l = W().sortBy(sj.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rx.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hw.RE.NOT_ELIGIBLE)
                    : (i1.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hw.RE.NOT_ELIGIBLE);
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
        A = t.system !== hP.l5.LEGACY,
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
        _ = (0, f.bG)([i1.A, d$.default], () => {
            if (!A) return;
            let e = d$.default.getId();
            return i1.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, S.jsx)(ie.D, {
            onClick: o,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hF.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)("span", { children: t.title }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", { className: hF.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, S.jsxs)("div", {
              className: hF.Os,
              children: [
                  C,
                  (0, S.jsx)(hG.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, S.jsx)("div", {
                          className: hF.h_,
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
                      className: hF.h_,
                      children: d
                          ? (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hP.l5.LEGACY
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
                                  className: hF.id,
                                  children: ["Server Descriptor", null != p ? ` (${p})` : ""],
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hF.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hF.id,
                                  children: "Client Eligibility",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hF.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hF.id,
                                    children: "Guild Assignments",
                                }),
                                (0, S.jsx)(Q.E, { variant: "code", className: hF.AS, children: g }),
                                t.system === hP.l5.LEGACY &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hF.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "code",
                                                className: hF.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hF.id,
                                    children: "Override Descriptor",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hF.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hF.id,
                                    children: "Recent Exposures",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hF.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, S.jsx)("div", {
                            className: hF.id,
                            children: (0, S.jsx)(hj.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, S.jsx)(sd.c, { className: hF.yF }),
              ],
          })
        : (0, S.jsx)("div", { className: hF.Os, children: C });
}
let hY = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hM.op)(),
                { experiments: n, overridesInfo: i } = (0, hV.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([d$.default], () => {
                    let e = d$.default.getInstallationForTracking();
                    return null == e ? null : (0, hv.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hk.oC)((0, hk.R3)((0, hk.Fm)(s), l), a);
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
                                uv.p5 &&
                                    (0, S.jsx)(hj.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uv.C)(r, () => {
                                                (0, lc.P)((0, hO.o)("Installation ID copied!", lg.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, S.jsx)(hL.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hz : hB;
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
                              className: hF.p$,
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
    hX = (0, E.zZ)(h.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hY] }),
    hH = (0, E.t_)(h.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hX] }),
    hW = (0, E.i4)(h.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hy.c,
        useMenu: hb.A,
        buildLayout: () => [hH],
    }),
    hK = (0, E.WI)(h.X.DEVELOPER_SECTION, {
        useTitle: () => U.intl.string(U.t["+gHUHA"]),
        usePredicate: () => EC.A.isDeveloper,
        buildLayout: () => [hW, hC],
    });
var hZ = n(682348),
    hq = n(871633),
    hQ = n(751075),
    hJ = n(843402);
let h$ = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h0() {
    let e = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([se.Ay], () => h$(...se.Ay.getOverrides()));
    T.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, hJ.a2)(), hJ.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = T.useMemo(
        () =>
            e.reduce((e, t) => ((0, hq.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h1(e) {
    let { gameHistory: t } = h0();
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
function h2(e) {
    let { namedGames: t, totalCount: n } = h1(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h3() {
    let { namedGames: e } = h1(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        AR.Ay.fetchApplications([t, n].filter(im.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i8.A], () => [t, n].map(i8.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, S.jsx)(si.A, { game: i, size: si.M.MEDIUM_LARGE }), shape: hQ.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, S.jsx)(si.A, { game: s, size: si.M.MEDIUM }), shape: hQ.e0.ROUNDED } : null,
          };
}
let h5 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h2(2);
            return U.intl.format(U.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h3();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hq.n1)(e))) && (0, nI.xl)(),
    }),
    h6 = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h5] });
var h4 = n(311059),
    h8 = n(406535),
    h7 = n(57129);
let h9 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(h7.default.A0FVCV),
        useSubtitle: () => U.intl.string(h7.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xe = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(h7.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(h7.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xt = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [h4._, h9, xe, h6],
    }),
    xn = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    xi = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xn] });
var xs = n(365258);
let xl = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(h7.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(h7.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(h7.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(h7.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, xs.g8)(t, e);
        if (null == i) return;
        let s = (0, xs.Xc)(e);
        (0, sT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, S.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xr = n(498642),
    xa = n(573435),
    xo = n(260509),
    xu = n(771810);
function xd(e) {
    let { guild: t, size: n } = e,
        i = (0, xo.Iv)(t, n, !1, !0),
        s = (0, xo.Rb)(t);
    return null != i
        ? (0, S.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, S.jsx)("div", {
              className: xu.F,
              children: (0, S.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xc(e) {
    let { guild: t, size: n } = e;
    return (0, S.jsx)(xa.Ay, {
        className: xu.z,
        mask: xa.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, S.jsx)(xd, { guild: t, size: n }),
    });
}
var xg =
    (((c = {}).SERVER_ORDER = "server-order"),
    (c.RECENTLY_JOINED = "recently-joined"),
    (c.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (c.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    c);
let xm = {
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
var xA = n(618118);
function xE(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, f.bG)([xr.A], () => xr.A.getMemberCount(t.id));
    return (0, S.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, S.jsx)("div", { className: xA.FO, children: (0, S.jsx)(xc, { guild: t, size: 48 }) }),
            (0, S.jsx)("div", {
                className: xA.QH,
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
let xh = function (e) {
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
                s = (0, f.bG)([g_.Ay], () => g_.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, T.useState)(() => xm[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xm[e](r, a)), i(e));
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
                { id: xg.SERVER_ORDER, label: U.intl.string(U.t.STMPJ2), value: xg.SERVER_ORDER },
                { id: xg.RECENTLY_JOINED, label: U.intl.string(U.t.CbaapP), value: xg.RECENTLY_JOINED },
                { id: xg.ACTIVITY_SHARING_ON, label: U.intl.string(h7.default.ZI51JZ), value: xg.ACTIVITY_SHARING_ON },
                {
                    id: xg.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(h7.default["+kxafn"]),
                    value: xg.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, S.jsxs)("div", {
        className: xA.iE,
        children: [
            t,
            (0, S.jsxs)("div", {
                className: xA.N1,
                children: [
                    (0, S.jsx)(hL.I, {
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
                            className: xA.gO,
                            children: [
                                (0, S.jsx)(ah.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, S.jsx)(gL.W, {
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
                                            className: xA.Ku,
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, S.jsx)(g6.a, { size: "xs", color: n8.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(hj.Q, {
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
                children: U.intl.format(h7.default.EvzDff, { count: n.length }),
            }),
            (0, S.jsxs)("ul", {
                className: xA.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, S.jsx)("div", {
                            className: xA.pb,
                            children: (0, S.jsx)(Q.E, {
                                className: xA.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, S.jsx)(
                            xE,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xx = n(68322);
let xp = (0, E.E2)(h.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [U.intl.string(h7.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, S.jsx)("div", {
                      className: xx.l,
                      children: (0, S.jsx)(i$.w, {
                          type: "warning",
                          message: U.intl.string(h7.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, S.jsx)(xh, { notice: e });
        },
    }),
    xS = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [xl, xp, xi],
    }),
    xT = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(h7.default.khuuzv),
        useSubtitle: () => U.intl.string(h7.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    xf = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    xI = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(h7.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(h7.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    x_ = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(h7.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [xT, xI, xf],
        useSearchTerms: () => [U.intl.string(U.t.VOszPA)],
    }),
    xN = (0, E.t_)(h.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        buildLayout: () => [xt, xS, x_],
    }),
    xC = (0, E.i4)(h.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        icon: hZ._,
        buildLayout: () => [xN],
    });
var xy = n(712440),
    xb = n(370997);
let xv = (0, E.E2)(h.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xb.Ay,
    useSearchTerms: () => [U.intl.string(U.t["f6kk+r"])],
});
var xj = n(478016),
    xO = n(77468),
    xL = n(289498),
    xR = n(573648),
    xD = n(874490),
    xP = n(370480),
    xG = n(968309);
let xM = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xU = n(169869),
    xV = n(814925),
    xk = n(733110),
    xw = n(479785),
    xF = n(757036),
    xB = n(555837),
    xz = n(43990),
    xY = n(241524),
    xX = n(51965),
    xH = n(377368),
    xW = n(631368),
    xK = n(212739),
    xZ = n(30370),
    xq = n(181666),
    xQ = n(553875),
    xJ = n(660594);
function x$() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xW.$)()),
            (t = (0, xK.O)()),
            (s = null != (i = (0, f.bG)([xZ.A], () => xZ.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xW.C.NONE || t
                ? { variant: xW.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xW.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eY.Ay)(tF.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xH.yW)(a),
        u = (0, xY.A)("(max-width: 485px)");
    if (l === xW.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xW.C.HAS_ACCESS:
        case xW.C.BLOCK_CLAIM:
            ((c = U.intl.string(xQ.default["7PdsMK"])),
                (g = (0, S.jsx)(xX.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(xQ.default.CubeLC),
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
        case xW.C.NO_ACCESS:
            ((c = U.intl.string(xQ.default.NwkRTZ)),
                (g = (0, S.jsx)(tH.A, {
                    defaultTextOverride: U.intl.string(xQ.default["0vY+ie"]),
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
                className: xJ.bV,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, S.jsx)(aa.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, S.jsx)(xz.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, S.jsx)("div", {
                        className: e,
                        children: (0, S.jsxs)("div", {
                            className: xJ.Nr,
                            children: [
                                (0, S.jsxs)("div", {
                                    className: xJ.Tp,
                                    children: [
                                        (0, S.jsx)("div", {
                                            className: xJ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, S.jsx)("div", { className: xJ.$h }),
                                        (0, S.jsx)("div", { className: xJ.Rv }),
                                        (0, S.jsx)("div", { className: xJ.Lw }),
                                    ],
                                }),
                                (0, S.jsxs)("div", {
                                    className: xJ.Mn,
                                    children: [
                                        (0, S.jsxs)("div", {
                                            className: xJ.mY,
                                            children: [
                                                (0, S.jsx)("img", {
                                                    className: xJ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xJ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, S.jsx)("div", { className: xJ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)("div", { className: xJ.yF }),
                                            (0, S.jsxs)("div", {
                                                className: xJ.sQ,
                                                children: [
                                                    (0, S.jsx)(u_.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n8.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, S.jsx)(Q.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: U.intl.format(xq.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xH.Hx.CONNECT),
                                                                    (0, xG.A)({
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
var x0 = n(201718),
    x1 = n(321078),
    x2 = n(672130),
    x3 = n(379848),
    x5 = n(688901);
function x6(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mP.i.AUTO_DISMISS), [t]),
        (0, S.jsx)("div", { className: x5.Ad, children: (0, S.jsx)(m$.E, { type: "new", variant: "brand" }) })
    );
}
function x4(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, S.jsxs)("div", {
        className: x5.kL,
        children: [
            i,
            (0, S.jsxs)("div", {
                className: x5.FS,
                children: [
                    (0, S.jsxs)("div", {
                        className: x5.TK,
                        children: [
                            (0, S.jsx)(x3.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, S.jsx)(x6, { markAsDismissed: n }) : null;
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
function x8() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, S.jsx)(x4, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, S.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xG.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let x7 = "/assets/9df988a227916145.png";
function x9() {
    return (0, S.jsx)(x4, {
        title: U.intl.string(xq.default["9cLtDI"]),
        body: U.intl.format(xq.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, S.jsx)("img", { src: x7, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xG.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function pe() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, S.jsx)(x4, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, S.jsx)("img", { src: x7, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xG.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var pt = n(783419),
    pn = n(534952),
    pi = n(211180),
    ps = n(247259);
function pl(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, f.cf)(
            [xZ.A],
            () => ({
                isJoining: xZ.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xZ.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : xZ.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xZ.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, f.bG)([sj.A], () => sj.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, S.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xO.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, S.jsxs)("div", {
            className: ps.iA,
            children: [
                (0, S.jsxs)("div", {
                    className: ps.XX,
                    children: [
                        (0, S.jsx)(gG.Ay, { size: gG.Ay.Sizes.SMALL, guild: n.guild, className: ps.$f }),
                        (0, S.jsxs)("div", {
                            className: ps.Vn,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, S.jsx)(ng.Anchor, {
                                    href: xR.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: ps.R,
                        children: s,
                    }),
            ],
        })
    );
}
function pr(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xB.G)()), (i = (0, xF.L)(t0.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, S.jsx)(x9, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, S.jsx)(pe, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, S.jsx)(x8, {})
              : null;
}
function pa(e) {
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
        R = (0, xD.ML)(u.type),
        D = xR.A.get(R);
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
            (null != e && (E(e), xO.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xO.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, S.jsxs)("div", {
            className: ps.FI,
            children: [
                ((t = xR.A.get(u.type)),
                (n = xR.A.get(R)),
                (i = "1" === (u.metadata ?? {})[pt.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, S.jsx)(sA.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, S.jsx)(xV.A, {
                            color: n8.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, S.jsx)(xj.U, { size: "xs", color: n8.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, S.jsxs)("div", {
                    className: ps.Il,
                    children: [
                        (0, S.jsx)("img", {
                            alt: n.name,
                            className: ps.gj,
                            src: (0, cj.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsxs)("div", {
                                    className: ps.$p,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: ps.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, S.jsx)("div", { className: ps.cG, children: s }),
                                    ],
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: ps.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? U.intl.format(pi.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, S.jsx)(ie.D, {
                            className: ps.uH,
                            onClick: function () {
                                let e = xR.A.get(u.type);
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
                                            xM.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, S.jsx)(s7.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, S.jsx)(uF.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, S.jsx)(pr, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xP.An)(t[pt.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xU.xE)(t, ps.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xU.dy)(t, ps.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xU.ED)(t, ps.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xU.ub)(t, ps.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xU.gZ)(t, ps.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xU.HU)(t, ps.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, S.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: ps.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xR.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, S.jsx)(
                                    "div",
                                    { className: ps.Z3, children: (0, S.jsx)(m$.E, { type: "new", variant: "brand" }) },
                                    "badge",
                                ),
                                (0, S.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: ps.vt,
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
                                    className: ps.jy,
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
                                                      xO.A.refresh(e.type, e.id).finally(() => {
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
                        (0, S.jsx)("div", { className: ps.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, S.jsx)(t7.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xO.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, S.jsx)(t7.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            (f(e), xO.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xR.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, S.jsx)(t7.d, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xG.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xO.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, S.jsxs)("div", {
                    className: ps.HZ,
                    children: [
                        (0, S.jsx)(t7.d, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xG.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xO.A.setVisibility(u.type, u.id, n));
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
                    ? (0, S.jsx)(ao.p, {
                          messageType: ao.Y.INFO,
                          children: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xG.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, S.jsx)(t8.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, S.jsx)(pl, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, S.jsx)(xw.A, { partner: u.type }),
            ],
        })
    );
}
function po(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: ps.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, S.jsxs)("div", {
                          className: ps.Il,
                          children: [
                              (0, S.jsx)("img", { alt: n.name, className: ih()(ps.gj, ps.sN), src: i }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)("div", {
                                          className: ps.$p,
                                          children: (0, S.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: ps.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: ps.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, S.jsx)(ie.D, {
                                  className: ps.uH,
                                  onClick: () =>
                                      (0, xb.d1)(n, t.scopes, () => {
                                          xy.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, S.jsx)(uF.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, S.jsx)("div", {
                      className: ps.HZ,
                      children: (0, S.jsx)(t7.d, {
                          label: U.intl.string(U.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x0.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function pu() {
    let e = (0, xD.gn)(),
        t = (0, i7.A)((0, pn.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, S.jsxs)("div", {
        className: ps.lA,
        children: [
            t.map((e) => null != e && (0, S.jsx)(x2.A, { application: e, innerClassName: ps.U$ }, e.id)),
            e.map((e) =>
                (0, S.jsx)(
                    xL.A,
                    { type: e.type, innerClassName: ps.U$, location: tF.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function pd(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xR.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, S.jsx)(oN.y, { type: oN.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, S.jsx)(EH.pp, {
                    theme: r,
                    className: ps.p$,
                    children: (0, S.jsx)(EH.SG, {
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
                                po,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, S.jsx)(
                                pa,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xO.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, S.jsx)("div", { className: ps.V, children: t })
    );
}
let pc = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, S.jsx)(t8.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, S.jsx)(pu, {}) });
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
    pg = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
                t = (0, f.bG)([xZ.A], () => xZ.A.isFetching()),
                n = (0, f.bG)([xZ.A], () => xZ.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xk.default], () => ({
                    authorizedAppsFetchState: xk.default.getFetchState(),
                    authorizedApps: xk.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x1.A)(lp.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d9.Ay)(),
                o = (0, f.bG)([ue.default], () => ue.default.locale);
            return (T.useEffect(() => {
                i === xk.FetchState.NOT_FETCHED && xy.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(x$, {}),
                          (0, S.jsx)(pd, {
                              fetching: t || l || (r.length > 0 && i !== xk.FetchState.FETCHED),
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
            xO.A.fetch();
        },
        useSearchTerms: () => [
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    pm = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, f.bG)([xZ.A], () => xZ.A.getAccounts()),
                t = T.useMemo(
                    () =>
                        xR.A.filter(
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
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, uN.RD)(o),
                g =
                    a?.type === I.fg2.RIOT_GAMES || a?.type === I.fg2.LEAGUE_OF_LEGENDS
                        ? U.intl.string(pi.default["1S6oAo"])
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
                                  text: U.intl.format(pi.default.wUXupS, {
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
        buildLayout: () => [pc, pg],
    }),
    pA = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        useSubtitle: () => U.intl.string(U.t.G9JfLg),
        buildLayout: () => [xv],
        initialize: () => (
            xy.A.fetch(),
            () => {
                xb.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    pE = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: oA.L,
        buildLayout: () => [pm, pA],
    }),
    ph = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: EW.LinkIcon,
        buildLayout: () => [pE],
    });
var px = n(625657),
    pp = n(592598),
    pS = n(773371),
    pT = n(532294),
    pf = n(672396);
let pI = pN(null);
function p_() {
    var e;
    let t = pN(pI);
    ((e = pI),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (tc.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (pI = t)));
}
function pN(e) {
    let t = pT.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sZ.Ay.getOverlayKeybind(),
        s = sZ.Ay.getOverlayChatKeybind();
    return {
        enabled: pS.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: pp.A.isNotificationDisabled(pf.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sp.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sp.dI)(s.shortcut) : null,
        text_opacity_slider: pT.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? pS.default.enabled,
    };
}
var pC = n(793480),
    py = n(371169),
    pb = n(264588),
    pv = n(114994),
    pj = n(248675),
    pO = n(610767);
function pL(e) {
    let { project: t } = e,
        n = t.application_id,
        i = (0, f.bG)([pv.A], () => pv.A.isHidden(n), [n]),
        { data: s } = (0, AR.YY)(n),
        l = null != s ? G.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: 32 }) : null;
    return (0, S.jsxs)("div", {
        className: pO.nM,
        children: [
            null != l ? (0, S.jsx)("img", { src: l, alt: "", className: pO.Kk }) : null,
            (0, S.jsx)("div", {
                className: pO.L$,
                children: (0, S.jsx)(t7.d, {
                    label: t.name,
                    checked: !i,
                    onChange: function (e) {
                        e ? (0, pb.i)(n) : (0, pb.T)(n);
                    },
                }),
            }),
        ],
    });
}
function pR() {
    let e = (0, nv.b_)(),
        t = (0, pC.TW)("overlay_settings_conjure_apps");
    return e && t;
}
let pD = (0, E.E2)(h.X.OVERLAY_CONJURE_APPS_LIST, {
        Component: function () {
            let e;
            T.useEffect(() => {
                (0, py.hF)();
            }, []);
            let t = (0, f.bG)([pv.A], () => pv.A.getProjects()),
                n = (0, f.bG)([pv.A], () => pv.A.getFetchStatus());
            return (
                t.length > 0
                    ? (e = t.map((e) => (0, S.jsx)(pL, { project: e }, e.id)))
                    : "error" === n
                      ? (e = (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(pj.default.bjmVx1),
                        }))
                      : "success" === n &&
                        (e = (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(pj.default.rGQGgB),
                        })),
                (0, S.jsxs)("div", {
                    className: pO.kL,
                    children: [
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(pj.default.sYm3az),
                        }),
                        e,
                    ],
                })
            );
        },
        usePredicate: pR,
        useSearchTerms: () => [U.intl.string(pj.default["t4Dqb/"])],
    }),
    pP = (0, E.zZ)(h.X.OVERLAY_CONJURE_APPS_CATEGORY, {
        useTitle: () => U.intl.string(pj.default["t4Dqb/"]),
        usePredicate: pR,
        buildLayout: () => [pD],
    });
var pG = n(237984),
    pM = n(63035);
function pU(e) {
    (e.preventDefault(), e.stopPropagation());
}
function pV(e) {
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
        className: ih()(pM.HS, d),
        children: [
            (0, S.jsxs)(hR.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, S.jsx)("div", { className: pM.x_, children: t }),
                    (0, S.jsxs)("div", {
                        className: pM.rN,
                        children: [
                            null != n && (0, S.jsx)("div", { className: pM.$t, children: n }),
                            (0, S.jsxs)("div", {
                                className: pM.c8,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: pM.SZ,
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
                            (0, S.jsx)("div", { className: pM.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: pM.Om, children: a }),
        ],
    });
}
let pk = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, S.jsx)(pV, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, S.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, pG.b)(tF.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var pw = n(780907),
    pF = n(684013),
    pB = n(56562),
    pz = n(311043),
    pY = n(569926),
    pX = n(41984),
    pH = n(918825),
    pW = n(296027),
    pK = n(562519);
let pZ = 5 * n(927813).A.Millis.DAY,
    pq = new pK.A("overlay_survey_timestamps");
function pQ(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(pq.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < pZ) ||
            Array.from(pq.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sT.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), pq.add(i), (n) => (0, S.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function pJ() {
    (0, sl.sL)("overlay-settings");
}
function p$(e) {
    let { className: t, game: n } = e;
    return (0, sl.NP)() && null != n && n.elevated
        ? (0, S.jsx)("div", {
              className: t,
              children: (0, S.jsx)(ao.p, {
                  messageType: ao.Y.WARNING,
                  action: (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: pJ,
                  }),
                  children: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var p0 = n(760751),
    p1 = n(9302),
    p2 = n(656513);
let p3 = new Set([
    pX.AR.INITIALIZING,
    pX.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    pX.AR.WAITING_FOR_MODULE_TRACKING,
    pX.AR.WAITING_FOR_OVERLAY_OPEN,
    pX.AR.WAITING_FOR_POPOUT_OPEN,
    pX.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    pX.AR.WAITING_FOR_REACT_INITIALIZATION,
    pX.AR.WAITING_FOR_PID_FOCUS,
    pX.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function p5(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, S.jsx)(p2.N, {
        className: pM.uR,
        collapsibleContent: (0, S.jsx)("div", { className: pM.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, S.jsx)(pV, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ih()(pM.AC, n),
                action: (0, S.jsxs)("div", {
                    className: pM.rc,
                    children: [
                        s.action,
                        l
                            ? (0, S.jsx)(g6.a, {
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
let p6 = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = sn();
        (0, pY.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [pW.default],
                () => (null == e || null == n ? null : pW.default.getTrackedGameByPid(n)),
                [e, n],
                i4(),
            ),
            { data: s } = (0, pY.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [p0.A, tm.A, pz.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, se.hw)(e, !1, [p0.A, tm.A, pz.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [se.Ay, p0.A, tm.A, pz.A],
                () => (null == e ? null : (0, se.xU)(e, se.Ay, p0.A, tm.A, pz.A)),
                [e],
                i4(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, p1.supportsLegacy)(),
            E = !(0, p1.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([pW.default], () => pW.default.getGlobalEnabledStatus());
        function p(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case pH.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), pw.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case pH.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), pw.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case pH.OverlayToggledClientSettingType.LEGACY:
                    (pF.A.setEnabled(t, x), (0, pH.Q)(t, pH.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case pH.OverlayToggledClientSettingType.OOP:
                    (pF.A.setEnabled(h, t), (0, pH.Q)(t, pH.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                pQ(
                    i ? pH.OverlayToggledClientSettingType.LEGACY_GAME : pH.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === pX.Ue.Disabled,
            b = i?.state === pX.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && p3.has(i.state) && !y,
            j = i?.overlayMethod === pX.Ue.OutOfProcess,
            O = i?.overlayMethod === pX.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === pX.Ue.Hook,
            R = i?.state === pX.AR.OVERLAY_CRASHED || i?.state === pX.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== pB.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === pB.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            pw.Ay.getDetectableGames();
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
            : (0, S.jsxs)(p5, {
                  onExpand: m,
                  className: g ? pM.tx : void 0,
                  title: (0, S.jsxs)(S.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, S.jsx)(sA.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, S.jsx)(xV.A, {
                                        size: 16,
                                        color: n8.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, S.jsx)(xj.U, {
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
                              ? (0, S.jsx)(dm.k, { size: "xxs", color: V })
                              : (0, S.jsx)("div", { className: pM.W4 }),
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
                      onClick: (e) => pU(e),
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
                                          (pw.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (pF.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (pF.A.setEnabled(t, t),
                                              pw.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? pH.OverlayToggledClientSettingType.LEGACY_GAME
                                                : pH.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? pH.OverlayToggledClientSettingType.OOP_GAME
                                                : pH.OverlayToggledClientSettingType.OOP),
                                      null != l && pQ(l, e.id ?? null));
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
                  warning: (0, S.jsx)(p$, { className: pM.Hh, game: e }),
                  children: [
                      (0, S.jsx)(pV, {
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
                                              ? p(e, pH.OverlayToggledClientSettingType.OOP)
                                              : p(e, pH.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pM.Kz }),
                              ],
                          }),
                      }),
                      (0, S.jsx)(pV, {
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
                                              ? p(e, pH.OverlayToggledClientSettingType.LEGACY)
                                              : p(e, pH.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pM.Kz }),
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
var p4 = n(206885);
function p8(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i8.A], () => (null != n ? n : i8.A.getApplication(t?.id)), [n, t]);
    return (0, S.jsx)(si.A, { game: s, pid: i, size: si.M.SMALL });
}
function p7(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, pY.I)(t?.id);
    let o = (0, f.cf)([se.Ay, p0.A, tm.A, pz.A], () => (0, se.xU)(t, se.Ay, p0.A, tm.A, pz.A)),
        u = (0, f.cf)([p0.A, tm.A, pz.A], () => (0, se.hw)(t, !1, [p0.A, tm.A, pz.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, S.jsx)(pV, {
            title: t.name,
            icon: (0, S.jsx)(p8, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(t7.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && pQ(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, S.jsx)("div", { className: pM.Kz }),
                ],
            }),
        })
    );
}
let p9 = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([pW.default], () =>
                    pW.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!0)).filter((e) => !(0, hq.n1)(e)),
                l = (0, i7.A)(s.map((e) => e.id)),
                r = !(0, p1.supportsLegacy)();
            function a(e) {
                pF.A.setEnabled(e, i);
                let t = se.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pH.Q)(e, pH.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && pQ(pH.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                pw.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, p1.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, S.jsx)(pV, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: pM.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t7.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              p4.O && (0, S.jsx)("div", { className: pM.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(p5, {
                      onExpand: t,
                      className: e ? pM.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, S.jsx)(ie.D, {
                          onClick: (e) => pU(e),
                          children: (0, S.jsx)(t7.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pM.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pM.XG,
                              children: s.map((e, t) =>
                                  (0, S.jsx)(
                                      p7,
                                      {
                                          rawGame: e,
                                          clientSettingType: pH.OverlayToggledClientSettingType.LEGACY_GAME,
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
    Se = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([pW.default], () =>
                    pW.default.getGlobalEnabledStatus(),
                ),
                s = !(0, p1.supportsOutOfProcess)(),
                l = (0, f.yK)([se.Ay], () => se.Ay.getGamesSeen(!0)).filter((e) => !(0, hq.n1)(e)),
                r = (0, i7.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                pF.A.setEnabled(i, e);
                let s = se.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pH.Q)(e, pH.OverlayToggledClientSettingType.OOP, s),
                    t && pQ(pH.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                pw.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (p4.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, S.jsx)(pV, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: pM.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t7.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              p4.O && (0, S.jsx)("div", { className: pM.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(p5, {
                      onExpand: t,
                      className: e ? pM.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, S.jsx)(ie.D, {
                          onClick: (e) => pU(e),
                          children: (0, S.jsx)(t7.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pM.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pM.XG,
                              children: l.map((e, t) =>
                                  (0, S.jsx)(
                                      p7,
                                      {
                                          rawGame: e,
                                          clientSettingType: pH.OverlayToggledClientSettingType.OOP_GAME,
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
    St = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [p6, Se, p9, pk],
    }),
    Sn = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([pT.default], () => !pT.default.disableClickableRegions),
        setValue: (e) => {
            pF.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    Si = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getOverlayKeybind()),
                t = !(0, p1.supportsLegacy)(),
                n = !(0, p1.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([se.Ay], () => [se.Ay.canShowAdminWarning, se.Ay.getVisibleGame()], []),
                l = (0, sl.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sZ.DV)(e?.shortcut ?? []);
            return (0, S.jsx)("div", {
                className: pM.hc,
                children: (0, S.jsxs)("div", {
                    className: pM.eH,
                    children: [
                        (0, S.jsxs)("div", {
                            className: pM.Bu,
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
                                        className: pM.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pM.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, S.jsx)("div", {
                            className: pM.IH,
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
var Ss = n(515183),
    Sl = n(682763);
let Sr = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = sn();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = sn();
            return null != e && (0, Ss.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = sn(),
                n = t?.id,
                i = (0, f.bG)([pp.A], () => pp.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, Ss.qJ)(e.pid);
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
            null != l && (0, Sl.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    Sa = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [Si, Sr, Sn] });
var So = n(93465),
    Su = n(222407);
let Sd = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: So.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: So.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: So.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: So.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: So.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: So.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ny.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([pp.A], () => pp.A.isNotificationDisabledBySetting(So.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Sc(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([pp.A], () => pp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, Su.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Sg = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Sd.map(Sc),
    }),
    Sm = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [Sg],
    }),
    SA = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([pT.default], () => pT.default.getAvatarSizeMode()),
        setValue: (e) => {
            pF.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    SE = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([pT.default], () => pT.default.getDisplayNameMode()),
        setValue: (e) => {
            pF.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    Sh = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([pT.default], () => pT.default.getDisplayUserMode()),
        setValue: (e) => {
            pF.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Sx = n(391973),
    Sp = n(233741),
    SS = n(897720),
    ST = n(38502);
function Sf() {
    let e = Sp.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = ST.A.getWidget(e.id);
    return null != t && (0, SS.ZO)(t) ? t : null;
}
n(392164);
let SI = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = Sf();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = Sf();
        null != t &&
            (e < 1
                ? (0, Sx.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Sx.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var S_ = n(450740),
    SN = n(968898),
    SC = n(288737);
function Sy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new SC.A({
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
        user: new cz.A({ id: s, username: e }),
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
let Sb = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([pT.default], () => ({
                    avatarSizeMode: pT.default.getAvatarSizeMode(),
                    displayNameMode: pT.default.getDisplayNameMode(),
                    displayUserMode: pT.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    Sy(U.intl.string(U.t.C0ZDvo), !0, !1),
                    Sy(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    Sy(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([Sp.A, ST.A], () => {
                    let e = Sp.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = ST.A.getWidget(e.id);
                    return null != t && (0, SS.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = Sy(t.username)).user = t), e) : null, ...l].filter(im.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, S.jsx)(xz.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, S.jsxs)("div", {
                            className: ih()(pM.Y5, e),
                            children: [
                                (0, S.jsx)("div", {
                                    className: pM.kJ,
                                    children: (0, S.jsx)(S_.DH, {
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
                                    className: pM.R$,
                                    children: [
                                        (0, S.jsx)(SN.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, S.jsx)(SN.CS, {}),
                                        (0, S.jsx)(SN.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, S.jsx)("div", { className: pM.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    Sv = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [Sb, SA, SE, Sh, SI],
    });
var Sj = n(54761);
function SO() {
    let [e, t] = (0, mC.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, K.Ay)(() => () => {
        t(mP.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsxs)("div", {
                      className: Sj.xC,
                      children: [
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: Sj.tl,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsxs)("div", {
                                  className: Sj.vJ,
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
                                  className: Sj.lh,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Sj.VV,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mP.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(sd.c, { className: Sj.yF }),
              ],
          });
}
function SL() {
    let e = (0, f.bG)([td.A], () => td.A.enabled),
        t = (0, ny.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsx)(i$.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, nm.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, S.jsx)(sd.c, { className: Sj.yF }),
              ],
          })
        : null;
}
let SR = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                p_(),
                sZ.Ay.addChangeListener(p_),
                pp.A.addChangeListener(p_),
                pT.default.addChangeListener(p_),
                pS.default.addChangeListener(p_),
                e8.isPlatformEmbedded && (0, hJ.a2)(),
                () => {
                    (sZ.Ay.removeChangeListener(p_),
                        pp.A.removeChangeListener(p_),
                        pT.default.removeChangeListener(p_),
                        pS.default.removeChangeListener(p_),
                        e8.isPlatformEmbedded && (0, hJ.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(SO, {}), (0, S.jsx)(SL, {})] });
            },
        },
        buildLayout: () => [St, Sa, Sv, pP, Sm],
    }),
    SD = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: px.l,
        usePredicate: nv.b_,
        buildLayout: () => [SR],
    });
var SP = n(687966);
let SG = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    SM = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [SG] });
var SU = n(227309),
    SV = n(29160),
    Sk = n(552366),
    Sw = n(938442);
function SF(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, pY.I)(t.id);
    let o = (0, f.cf)([se.Ay, p0.A, tm.A, pz.A], () => (0, se.xU)(t, se.Ay, p0.A, tm.A, pz.A)),
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
                (0, hq.n1)(o)
                    ? r
                        ? o.gameName
                        : U.intl.formatToPlainString(U.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = T.useState(_ ?? "???"),
        y = ih()(Sw.tR, {
            [Sk.LO]: !i,
            [Sk.Rw]: i,
            [Sk.FB]: null != o && i,
            [Sk.xL]: r,
            [Sk.fG]: null != l && l.length > 0,
        });
    function b() {
        (pw.Ay.deleteEntry(o),
            l?.forEach((e) => {
                pw.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? p0.A.getDetectableGame(o.id) : null;
        (tc.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hq.n1)(o) ? o.gameName : o.name,
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
                        className: ih()(Sk.$K, Sw.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, S.jsxs)("div", {
                                      className: Sk.HS,
                                      children: [
                                          (0, S.jsx)("div", { className: Sk.mO, children: _ }),
                                          (0, S.jsx)(sA.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, S.jsx)(xV.A, {
                                                  className: Sk.qf,
                                                  size: 18,
                                                  color: n8.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, S.jsx)(xj.U, {
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
                                      className: ih()(Sk.mO, Sk.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && pw.Ay.editName(o, N);
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
                                        className: Sk.GN,
                                        children: (0, S.jsx)(SV.A, {
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
                        (0, S.jsx)(ah.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, S.jsx)(gL.W, {
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
                                    className: ih()(Sk._Q, { [Sk.g9]: t.isShown }),
                                    children: (0, S.jsx)(sA.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, S.jsx)(sg.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gv.MoreHorizontalIcon,
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
                                                              (pw.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : pw.Ay.toggleDetection(o);
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
                    className: Sk.AQ,
                    children: l.map((e, t) =>
                        (0, S.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, S.jsx)(SF, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, S.jsx)("div", { className: Sk.PQ }),
                                ],
                            },
                            (0, se.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SB() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h0();
    return 0 === e.length
        ? null
        : (0, S.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, S.jsx)(n9.n, {
                  children: (0, S.jsx)("div", {
                      children: e.map((e) =>
                          (0, S.jsx)(
                              SF,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SU.a7 ? t : void 0 },
                              (0, se.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let Sz = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, S.jsx)(SB, {}),
});
var SY = n(424994);
let SX = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [Sz, SM],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hq.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: SY.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var SH = n(890497),
    SW = n(853270),
    SK = n(969426);
function SZ(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([se.Ay], () => se.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, S.jsxs)(ax.l, {
        className: ih()(SW.H, SK.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, S.jsx)(SH.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, S.jsxs)("div", {
                className: ih()(SW.o, Sw.xM),
                children: [
                    (0, S.jsx)(hj.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, S.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (pw.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var Sq = n(475007);
function SQ() {
    let e = T.useRef(null);
    return (0, S.jsxs)("div", {
        className: ih()(Sq.a, E1.Gf),
        children: [
            (0, S.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, S.jsx)(ah.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, S.jsx)(SZ, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, S.jsx)(hj.Q, {
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
function SJ() {
    return (0, S.jsx)("div", {
        className: ih()(Sw.tR, Sk.eS, Sk.Rw),
        children: (0, S.jsxs)("div", {
            className: ih()(Sk.$K, Sw.Vd),
            children: [
                (0, S.jsx)("div", { className: Sk.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, S.jsx)(SQ, {}),
            ],
        }),
    });
}
let S$ = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h0(),
                n = (0, f.bG)([se.Ay], () => se.Ay.getVisibleGame());
            return null == n
                ? (0, S.jsx)(SJ, {})
                : (0, S.jsxs)("div", {
                      className: ih()(Sw.Vd, Sk.C2),
                      children: [
                          (0, S.jsx)(
                              SF,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === SU.a7 ? e : void 0,
                              },
                              (0, se.Es)(n),
                          ),
                          (0, S.jsx)(SQ, {}),
                      ],
                  });
        },
    }),
    S0 = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [S$],
    }),
    S1 = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [S0, SX],
    }),
    S2 = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: SP.GameControllerIcon,
        usePredicate: nv.Pi,
        buildLayout: () => [S1],
    }),
    S3 = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [S2, xC, SD, ph],
    });
var S5 = n(631670),
    S6 = n(619499),
    S4 = n(836602),
    S8 = n(591179),
    S7 = n(402860),
    S9 = n(761508),
    Te = n(159001),
    Tt = n(344346),
    Tn = n(919395),
    Ti = n(68750);
function Ts(e) {
    let { title: t, children: n } = e;
    return (0, S.jsxs)("div", {
        children: [(0, S.jsx)(N.D, { variant: "text-md/medium", className: Ti.Vf, children: t }), n],
    });
}
function Tl(e) {
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
        className: ih()(Ti.UA, n),
        children: (0, S.jsxs)("div", {
            className: ih()(Ti.yt, i),
            children: [
                (0, S.jsx)("div", {
                    className: ih()(Ti.Fp, a && Ti.Oz),
                    children: (0, S.jsxs)(S.Fragment, {
                        children: [
                            (0, S.jsx)(Ts, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, S.jsx)(Ts, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, S.jsx)("div", { className: Ti.oB, children: t }),
            ],
        }),
    });
}
var Tr = n(986687),
    Ta = n(101058),
    To = n(321191),
    Tu = n(696451),
    Td = n(590941);
function Tc() {
    return (0, S.jsxs)("div", {
        className: Td.p$,
        children: [
            (0, S.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Td.Sl }),
            (0, S.jsx)(N.D, { className: Td.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, S.jsx)(Q.E, { className: Td.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Td.h8,
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
var Tg = n(81400),
    Tm = n(450232),
    TA = n(252732),
    TE = n(355622),
    Th = n(408018),
    Tx = n(479909),
    Tp = n(290386),
    TS = n(941933),
    TT = n(486264);
let Tf = (0, tq.Ld)(),
    TI = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    T_ = (0, tq.Ld)();
function TN(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Tp.U)({ location: "profile_customization_about_me" }),
        [u, d] = T.useState(s ?? r),
        [c, g] = T.useState((0, Th.x7)(u)),
        m = T.useRef(r),
        A = T.useRef(!1);
    return (
        T.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Th.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        T.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, Th.x7)(r)));
        }, [s, r, u]),
        (0, S.jsxs)(ac.A, {
            title: t,
            titleId: Tf,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, S.jsx)(Tx.Ay, {
                    "aria-describedby": T_,
                    "aria-labelledby": Tf,
                    className: TT.i,
                    innerClassName: TT.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: TI,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: TS.y,
                    type: TE.oU.PROFILE_BIO_INPUT,
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
                (0, S.jsx)(sE.A, { id: T_, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TC = n(821956),
    Ty = n(562819),
    Tb = n(84540),
    Tv = n(467690);
function Tj(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eY.Ay)(),
        o = (0, Tn.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tn.CP)(n?.id),
        c = r ? cF.wL : l1.$n;
    return (0, S.jsx)(ac.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: Tv.NC,
            children: [
                (0, S.jsx)(c, {
                    size: l1.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Ty.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ih()({ [Tv.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tv.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TC.uZ)(t, n) ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.OrokWm),
                            onClick: function () {
                                (0, Tb.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TO = n(339984),
    TL = n(942132);
let TR = [{ name: "gif", extensions: ["gif"] }];
function TD(e) {
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
        m = c ? cF.wL : l1.$n,
        A = T.useCallback(() => {
            (0, TA.XD)({
                uploadType: TO.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TR : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, S.jsx)(ac.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, S.jsxs)("div", {
            className: TL.NC,
            children: [
                (0, S.jsx)(m, {
                    className: ih()({ [TL.yj]: c }),
                    size: l1.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TL.DT,
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
var TP = n(248778),
    TG = n(810188);
function TM(e) {
    let { user: t, guildId: n, className: i } = e,
        s = aS.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eY.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tn.B0)(t, n),
        d = (0, TP.u)("DisplayNameStylesSection"),
        [c, g] = (0, mC.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mP.i.TAKE_ACTION),
                tc.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eX.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, Tb.p)({ displayNameStyles: null }), tc.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, Tb.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, S.jsx)(ac.A, {
        title: U.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, S.jsx)("div", { className: TG.A, children: (0, S.jsx)(m$.E, { type: "new", variant: "brand" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: TG.N,
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
var TU = n(637193),
    TV = n(622410);
function Tk(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tn.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, TU.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, Tb.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, S.jsx)(ac.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: TV.u,
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
var Tw = n(88524);
function TF(e) {
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
        g = d ? cF.wL : l1.$n;
    return (0, S.jsx)(ac.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: Tw.NC,
            children: [
                (0, S.jsx)(g, {
                    className: ih()({ [Tw.yj]: d }),
                    size: l1.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TA.XD)({ uploadType: TO.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tw.DT,
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
var TB = n(617061),
    Tz = n(625613);
function TY(e) {
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
        d = aS.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tn.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tn.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tJ.uq)(t0.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cF.wL : l1.$n;
    return (0, S.jsx)(ac.A, {
        forcedDivider: r,
        borderType: dF.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, S.jsxs)("div", {
            className: Tz.NC,
            children: [
                (0, S.jsx)(A, {
                    size: l1.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TB.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ih()({ [Tz.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tz.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.uMuafO),
                            onClick: function () {
                                (0, Tb.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TX = n(515727),
    TH = n(594401);
function TW(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = (0, Tn.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Tn.Tu)(n?.id),
        [o, u] = (0, mC.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, S.jsx)(ac.A, {
        showBorder: d,
        borderType: d ? dF.i.NEW_UPSELL : dF.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, S.jsx)("div", { className: TH.Ad, children: (0, S.jsx)(m$.E, { type: "new", variant: "brand" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, S.jsxs)("div", {
            className: TH.NC,
            children: [
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, TX.w)({ analyticsLocations: s, guild: n }), u(mP.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TH.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.nQBruk),
                            onClick: function () {
                                (0, Tb.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TK = n(602853),
    TZ = n(654107),
    Tq = n(999291),
    TQ = n(101928),
    TJ = n(819169),
    T$ = n(317097),
    T0 = n(508274),
    T1 = n(379012);
function T2(e) {
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
        c = (0, TK.r)(n8.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n8.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TA.sN)(i),
        A = (0, T$.Hl)(i),
        E = A === c ? g : A,
        h = m ? n8.A.unsafe_rawColors.WHITE.css : n8.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TJ.A)(a),
        p = (0, TJ.A)(o),
        [f, _] = T.useState((0, oC.A)());
    return (
        T.useEffect(() => {
            (x !== a || p !== o) && _((0, oC.A)());
        }, [o, a, p, x]),
        (0, S.jsx)(ah.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, S.jsx)(T0.VN, {
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
                    className: ih()(T1.oP, { [T1.r9]: l }),
                    children: [
                        (0, S.jsx)(ie.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T1.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, S.jsx)(ap.PencilIcon, {
                                size: "custom",
                                className: T1.BW,
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
var T3 = n(190377);
function T5(e) {
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
        c = (0, Tq.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TQ.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aS.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, TK.r)(n8.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TZ.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, S.jsx)(ac.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: ih()(T3.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, S.jsxs)("div", {
                  className: T3.hd,
                  children: [
                      (0, S.jsx)("div", {
                          className: T3.YX,
                          children: (0, S.jsx)(T2, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T3.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, S.jsx)("div", {
                          className: T3.YX,
                          children: (0, S.jsx)(T2, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T3.yz,
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
                              className: T3.WA,
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
function T6(e) {
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
    return (0, S.jsx)(ac.A, {
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
var T4 = n(684732),
    T8 = n(576705),
    T7 = n(931175);
function T9(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([T8.A], () => T8.A.can(I.xBc.CHANGE_NICKNAME, r) || T8.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xF.L)(t0.PremiumTypes.TIER_2);
    return (0, S.jsxs)(ac.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, S.jsx)(sf.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, Tb.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, S.jsx)(TM, { user: l, guildId: r.id, className: T7.F }),
        ],
    });
}
var fe = n(233454);
let ft = "/assets/b25da78aa7949feb.png";
function fn(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, d9.Ay)(),
        { analyticsLocations: l } = (0, eY.Ay)(tF.A.PREMIUM_UPSELL_OVERLAY);
    return (T.useEffect(() => {
        n &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: t0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tJ.uq)(t0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, S.jsxs)("div", {
              className: fe.ry,
              children: [
                  (0, S.jsx)("div", { children: i }),
                  (0, S.jsxs)("div", {
                      className: fe.Wc,
                      children: [
                          (0, S.jsx)("img", {
                              className: fe.Tn,
                              alt: U.intl.string(U.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return ft;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return ft;
                                  }
                              })(s),
                          }),
                          (0, S.jsxs)("div", {
                              className: fe._9,
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
                          (0, S.jsx)(dw.A, {
                              size: l1.$n.Sizes.LARGE,
                              color: l1.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aS.Ay.isPremium(t)
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
var fi = n(203164);
function fs() {
    let e = (0, f.bG)([lp.default], () => {
            let e = lp.default.getCurrentUser();
            return (tx()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xF.L)(t0.PremiumTypes.TIER_2),
        n = (0, f.bG)([S4.A, sj.A], () => sj.A.getGuild(S4.A.selectedGuildId));
    tx()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([S4.A], () => ({ ...S4.A.getPendingChanges(n.id), errors: S4.A.getErrors(n.id) })),
        d = (0, Ta.V7)({ userId: e.id, image: i }),
        c = (0, Tg.EC)(n.id),
        g = (0, f.bG)([Tu.Ay], () => (null == n.id ? null : Tu.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([To.A], () => To.A.getGuildMemberProfile(e.id, n.id)),
        A = aS.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Tn.z5)(i, g?.avatar),
        h = (0, Tn.Ac)(l, m?.banner),
        x = (0, T4.l)(o, m?.themeColors),
        p = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, S.jsxs)("div", {
        className: fi.Q,
        children: [
            (0, S.jsx)(
                T9,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uR.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, S.jsx)(
                T6,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, S.jsxs)(fn, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, S.jsx)(
                        TD,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, S.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TA.rM)(e, g?.avatar, (e) => (0, Tb.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, S.jsx)(
                        Tj,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, S.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, S.jsx)(TM, { user: e, guildId: n.id }),
                    (0, S.jsx)(
                        Tk,
                        { user: e, guild: n, titleIcon: (0, S.jsx)(Tm.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, S.jsx)(
                        TY,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, S.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, S.jsx)(
                        TW,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, S.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, S.jsx)(
                        TF,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TA.rM)(e, m?.banner, (e) => (0, Tb.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, S.jsx)(T5, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tb.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, S.jsx)(
                        TN,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, S.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Tb.p)({ guildId: n.id, bio: e }),
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
var fl = n(832131);
function fr(e) {
    (0, sT.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, S.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fa(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tF.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lp.default], () => {
            let e = lp.default.getCurrentUser();
            return (tx()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([Tu.Ay], () => (null != t ? Tu.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([To.A], () => !To.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([S4.A], () => S4.A.getPendingChanges(t?.id)),
        c = (0, Ta.V7)({ userId: s.id, image: o }),
        g = (0, Tn.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tn.B0)(s, t?.id);
    return (T.useEffect(() => () => tl.h.wait(Te.IM), []), a)
        ? (0, S.jsx)(oA.A, {})
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
                                  (0, S.jsx)(ad.A, { guildId: t.id, onChange: n }),
                                  (0, S.jsx)(Tl, {
                                      profilePreviewTitle: (0, S.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: fl.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, S.jsx)(Tr.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: aS.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fr,
                                          containerClassName: fl.ti,
                                      }),
                                      nameplatePreview: (0, S.jsx)(Tt.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fl.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, S.jsx)(fs, {}),
                                  }),
                              ],
                          })
                        : (0, S.jsx)(Tc, {}),
                ],
            })
          : (0, S.jsx)(oN.y, {});
}
var fo = n(903209),
    fu = n(641130);
function fd(e) {
    let { children: t, notice: n } = e;
    return (0, S.jsxs)("div", { className: fu.r, children: [n, (0, S.jsx)("div", { children: t })] });
}
var fc = n(823092),
    fg = n(815996),
    fm = n(379197),
    fA = n(488430),
    fE = n(457421),
    fh = n(940622),
    fx = n(559474),
    fp = n(757993);
let fS = function () {
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
        } = ((e = (0, fh.mb)(fx.RN.UPSELL_BANNER)),
        (t = (0, fh.mb)(fx.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, f.bG)([fE.A], () => fE.A.getMarketingBySurface(fm.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fA.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fc.L_)();
    return (
        T.useEffect(() => {
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tJ.uq)(t0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, S.jsxs)("div", {
            ref: l,
            className: fp.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, S.jsx)("div", {
                    className: fp.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, S.jsx)("img", { src: a, className: fp.Qw, alt: "" }),
                }),
                (0, S.jsxs)("div", {
                    className: fp.Em,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fp.DD,
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
                            (0, fg.Cz)({
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
var fT = n(451909),
    ff = n(202639),
    fI = n(285373),
    f_ = n(835071),
    fN = n(724651),
    fC = n(732280),
    fy = n(590180),
    fb = n(898461),
    fv = n(469054),
    fj = n(601298),
    fO = n(207803),
    fL = n(461797);
let fR = Object.keys(fL.jB);
function fD(e) {
    let t = null == e ? fR : fR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fP = n(518293),
    fG = n(221650);
function fM(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, fP.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, fL.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, S.jsxs)("div", {
        className: fG.kL,
        children: [
            (0, S.jsx)(ie.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fG.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, S.jsxs)(ie.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fG.Lt,
                children: [
                    (0, S.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fG.L_ }),
                    (0, S.jsx)(Q.E, {
                        className: fG._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fU = n(511484),
    fV = n(811611),
    fk = n(206697),
    fw = n(507553);
function fF(e, t) {
    let n = fw.A.useField("scrollPosition"),
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    (0, T.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fw.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fB = n(844222),
    fz = n(842092);
let fY = "/assets/d4955aabdcb5bdee.png",
    fX = { assetOrigin: fv.E.NEW_ASSET, imageUri: fY, staticImageUri: fY, description: "", originalAsset: void 0 };
function fH(e) {
    let { user: t } = e,
        { reducedMotion: n } = T.useContext(fB.C),
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
        } = (0, f.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Ta.V7)({ userId: t.id, image: g ?? i });
    return (0, S.jsx)(Tr.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fX,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fz.WX,
        containerClassName: fz.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fW = n(829497);
function fK(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = aS.Ay.isPremium(t),
        l = aS.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getErrors(),
                n = S4.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, T.useState)(fD()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, T.useMemo)(() => {
                    let t = (0, fL.Wt)(e);
                    return {
                        banner: (0, fj.X)({
                            assetOrigin: fv.E.NEW_ASSET,
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
                r = (0, f.bG)([fy.A], () => {
                    let e = fy.A.getProduct(s);
                    return (0, fb.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, T.useEffect)(() => {
                (0, fO.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, T.useCallback)(() => {
                let n = fD(e);
                (t(n), tc.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fF(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eY.Ay)(tF.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fk.T)(), tc.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    T.useEffect(() => {
        n &&
            (tc.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t0.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tQ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tJ.uq)(t0.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fC.V)()?.subscriptionTrial?.skuId === t0.pe.TIER_2,
        p = (0, fN.O)(),
        _ = (0, fU.U9)(p, t0.pe.TIER_2);
    return i
        ? (0, S.jsx)(eY.f5, {
              value: A,
              children: (0, S.jsxs)(dF.A, {
                  ref: m,
                  className: fW.MT,
                  type: dF.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, S.jsx)(Tl, {
                          stickyPreview: !1,
                          layoutClassName: fW.th,
                          profilePreviewTitle: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(aa.t, { size: "md", color: "currentColor", className: fW.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, S.jsxs)(S.Fragment, {
                              children: [(0, S.jsx)(fM, { preset: c, onShuffle: g }), (0, S.jsx)(fH, { user: t })],
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
                                              className: fW.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(T5, {
                                      className: fW.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ta.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fO.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, S.jsx)(TF, {
                                      className: fW.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fO.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, S.jsx)(TD, {
                                          className: fW.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fO.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, S.jsx)(TM, { user: t, className: fW.fz }),
                                  !x &&
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, S.jsx)(ff.d, {
                              onSubscribeModalClose: h,
                              className: fW.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, f_.K)({ onSubscribeFinish: h });
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
                                  (0, S.jsx)("div", { className: fW.BU }),
                                  (0, S.jsx)(fV.Ay, {
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
var fZ = n(814390),
    fq = n(643056),
    fQ = n(843282),
    fJ = n(145497),
    f$ = n(685073),
    f0 = n(534400),
    f1 = n(581781),
    f2 = n(743981),
    f3 = n(195801);
let f5 = (0, tq.Ld)(),
    f6 = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lp.default], () => (0, f$.Zo)(lp.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, S.jsx)(f1.A, {
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
                        : (0, S.jsx)(fJ.j, {
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
                        : (0, S.jsx)(f0.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f2.Sl.SIZE_16,
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
            fF(h, eO._F.GUILD_TAG),
            (0, S.jsxs)(ac.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f5,
                ref: h,
                children: [
                    (0, S.jsx)(Q.E, {
                        className: f3.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, S.jsx)(fQ.Pw, {
                        className: f3.Lt,
                        optionClassName: f3.S0,
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
var f4 = n(318785),
    f8 = n(470739);
let f7 = function () {
    return (0, fq.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, S.jsx)(ac.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, S.jsx)(v.$, {
                  text: U.intl.string(U.t.wRraFx),
                  onClick: () => {
                      (0, f8.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var f9 = n(953726);
let Ie = (0, tq.Ld)();
function It(e) {
    let t = (0, xF.L)(t0.PremiumTypes.TIER_2);
    return (0, S.jsxs)(ac.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: Ie,
        children: [
            (0, S.jsx)("div", {
                children: (0, S.jsx)(sf.k, {
                    "aria-labelledby": Ie,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, S.jsx)(TM, { user: e.user, className: f9.F }),
        ],
    });
}
var In = n(376626);
function Ii(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, S.jsx)("div", {
        className: In.u,
        children: (0, S.jsx)(t7.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, S5._e)() : (0, Tb.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Is(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TK.r)(n8.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TZ.rh)(l, r, !1),
        o = (0, T$.LX)(a[0]);
    return (0, S.jsx)(ac.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, S.jsx)(T2, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Il = n(518477);
let Ir = function () {
    let e = (0, f.bG)([d$.default], () => d$.default.getId());
    return (0, S.jsx)(ac.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, S.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, S7.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tF.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Il.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Ia = n(654910);
function Io() {
    let e = (0, f.bG)([lp.default], () => {
            let e = lp.default.getCurrentUser();
            return (tx()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([To.A], () => To.A.getUserProfile(e.id)),
        n = (0, fq.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, f.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ta.V7)({ userId: e.id, image: i }),
        A = (0, Tg.EC)(),
        E = aS.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Tn.z5)(i, e.avatar),
        x = (0, Tn.Ac)(l, t?.banner),
        p = (0, Tq.Ay)(e.id),
        T = p?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, f4.b)(),
        C = null != (0, f$.Zo)(e.primaryGuild).guildId;
    return (0, S.jsxs)("div", {
        className: Ia.Q,
        children: [
            (0, S.jsx)(It, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, Tb.p)({ globalName: e }),
                user: e,
            }),
            (0, S.jsx)(
                T6,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, S.jsx)(Ir, {}),
            (0, S.jsx)(
                TD,
                {
                    onAvatarChange: (e) => {
                        ((0, Tb.p)({ avatar: e }), (0, Tn.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: U.intl.string(U.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, S.jsx)(Tj, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, S.jsx)(Tk, { user: e }),
            (0, S.jsx)(TY, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, S.jsx)(TW, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(
                              TF,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Tb.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, S.jsx)(T5, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, Tb.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, S.jsx)(
                      Is,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, Tb.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, S.jsx)(
                TN,
                {
                    sectionTitle: U.intl.string(U.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, Tb.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, S.jsx)(f6, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, Tb.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, S.jsx)(Ii, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, S.jsx)(f7, {}, "badges"),
        ],
    });
}
function Iu() {
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
var Id = n(447080);
function Ic() {
    let e = (0, f.bG)([lp.default], () => {
            let e = lp.default.getCurrentUser();
            return (tx()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([td.A], () => td.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, f.cf)([S4.A], () => ({ ...S4.A.getPendingChanges(), showNotice: S4.A.showNotice() })),
        a = (0, Ta.V7)({ userId: e.id, image: i }),
        o = (0, Tn.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fZ.A)() && null != n ? fT.Ay.parse(void 0, n).content : n,
        d = aS.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eY.Ay)(tF.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => () => tl.h.wait(S5.IM), []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, S.jsx)(oA.A, {})
        : (0, S.jsxs)(eY.f5, {
              value: c,
              children: [
                  (0, S.jsx)(fS, {}),
                  (0, S.jsx)(Tl, {
                      profilePreview: (0, S.jsx)(Tr.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: Iu,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: Id.ti,
                      }),
                      nameplatePreview: (0, S.jsx)(Tt.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Id.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, S.jsx)(Io, {}),
                  }),
                  (0, S.jsx)(cv.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, S.jsx)("div", {
                          ref: E,
                          children: (0, S.jsx)(fK, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, S.jsx)(ff.d, {
                          className: Id.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, f_.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, S.jsx)(fI.l, {
                              size: "md",
                              location: tF.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, S.jsx)("div", {
                              className: Id.Xl,
                              children: (0, S.jsx)(v.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tc.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: U.intl.string(U.t.uw9zI7),
                                  icon: aa.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Ig = n(625494);
n(46121);
var Im = n(944983);
let IA = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    IE = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sO.A, g_.Ay, S4.A], () => {
                    let e = S4.A.selectedGuildId ?? sO.A.getGuildId();
                    return null == e || S4._.has(e) ? g_.Ay.getFlattenedGuildIds().find((e) => !S4._.has(e)) : e;
                }),
                t = (0, f.bG)([sj.A], () => sj.A.getGuild(e)),
                n = (0, f.bG)([S4.A], () => S4.A.showNotice()),
                i = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
                s = fw.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, ia._)(IA[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, fo.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, S.jsx)(fd, {
                    children: (0, S.jsxs)(ub.F, {
                        component: (0, S.jsx)(sE.A, {
                            children: (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, S.jsxs)(S9.V, {
                                className: Im.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                Ig._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, Te.V2)(t.id),
                                            fw.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, S.jsx)(
                                        S9.V.Item,
                                        {
                                            className: Im.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, S.jsx)(
                                        S9.V.Item,
                                        {
                                            className: ih()(Im.YU, Im.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, S.jsx)(fa, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                  Ig._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Te.JJ)(e.id);
                                      },
                                  })
                                : (0, S.jsx)(Ic, {}),
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
    Ih = (0, E.zZ)(h.X.PROFILE_CATEGORY, { buildLayout: () => [IE] });
var Ix = n(379633);
function Ip() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cB.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, S.jsxs)("div", {
              className: Ix.a5,
              children: [
                  (0, S.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, S.jsxs)("div", {
                      className: Ix.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, S.jsxs)("div", {
                              className: Ix.Fk,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, S.jsx)(ap.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let IS = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [S4.A], element: S6.A },
        initialize: () => () =>
            tl.h.wait(() => {
                (0, S5.F7)();
            }),
        buildLayout: () => [Ih],
    }),
    IT = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: II,
        StronglyDiscouragedCustomComponent: Ip,
        usePredicate: () => !(0, S8.X)("user_settings_sidebar"),
        buildLayout: () => [IS],
    }),
    If = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: II,
        StronglyDiscouragedCustomComponent: Ip,
        usePredicate: () => (0, S8.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d$.default.getId();
            (0, S7.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function II() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cB.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, S.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let I_ = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [IT, If] });
var IN = n(98207);
n(204925);
let IC = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sT.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, S.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uG.tE : null, onCloseCallback: t },
    );
};
var Iy = n(940856),
    Ib = n(506775),
    Iv = n(379257),
    Ij = n(121780),
    IO = n(666113);
function IL() {
    let e = Ij.A.getCountryCode(),
        t = null != e ? IO.IN[e.alpha2] : void 0;
    Iv.A.openUrl(eC.A.getArticleURL(t ?? IO.k9));
}
var IR = n(521169);
function ID() {
    return (0, IR.w)(IO.Vc);
}
var IP = n(680091);
function IG() {
    let e = ID(),
        t = (0, Ib.ZP)();
    if (!e) return null;
    switch (t) {
        case Ib.M$.ADULT:
            return U.intl.format(IP.default.gi4ulu, { handleOnAgeGatedContentHook: Ib.M0 });
        case Ib.M$.TEEN:
            return U.intl.format(IP.default["221iML"], {
                handleOnAgeGatedContentHook: Ib.M0,
                handleOnConfirmAgeHook: Ib.aP,
            });
        case Ib.M$.UNVERIFIED:
            return U.intl.format(IP.default["W0/7DD"], {
                handleOnAgeGatedContentHook: IL,
                handleOnConfirmAgeHook: Ib.aP,
            });
    }
}
var IM = n(26137),
    IU = n(957485);
function IV() {
    let e = ID(),
        t = (0, Ib.ZP)();
    return e ? { icon: t === Ib.M$.ADULT ? IM.r : IU.i, backgroundColor: n8.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Ik() {
    let e = IV();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function Iw() {
    return ID() ? U.intl.string(U.t.piqs0o) : null;
}
var IF = n(438140);
let IB = [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    Iz = [];
function IY() {
    return (0, IF.Wt)() ? IB : Iz;
}
var IX = n(36149),
    IH = n(207560),
    IW = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    IK = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function IZ(e, t) {
    let n = (0, f.bG)([lp.default], () => null != lp.default.getCurrentUser()),
        i = (0, IH.fk)(),
        s = (0, Ib.ZP)(),
        l = (0, IX.Y2)(),
        r = ID();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case Ib.M$.UNVERIFIED:
            return "verify" === e;
        case Ib.M$.TEEN:
            return e === (r ? "info" : "verify");
        case Ib.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var Iq = n(841365);
function IQ() {
    let e = (0, Ib.hD)();
    return (0, S.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(Iq.default.WM5adV, { handleOnHelpUrlHook: Ib.M0 })],
    });
}
let IJ = {
        useTitle: () => Iw() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IG,
        useVariant: () => "secondary",
        useLeadingDecoration: Ik,
        getDismissibleBadges: IY,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IQ,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sT.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    },
    I$ = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...IJ, usePredicate: () => IZ(IK.EDIT, IW.LEGACY) }),
    I0 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...IJ,
        usePredicate: () => IZ(IK.EDIT, IW.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    I1 = {
        useTitle: () => Iw() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IG,
        useLeadingDecoration: function () {
            let e = IV();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IY,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, Ib.hD)() }),
    },
    I2 = (0, E.v_)(h.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...I1, usePredicate: () => IZ(IK.INFO, IW.LEGACY) }),
    I3 = (0, E.v_)(h.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...I1,
        usePredicate: () => IZ(IK.INFO, IW.TINY_BRONCO),
    }),
    I5 = {
        useTitle: () => Iw() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IG,
        useVariant: () => "secondary",
        useLeadingDecoration: Ik,
        getDismissibleBadges: IY,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, Ib.hD)() }),
        useLabel: function () {
            return (0, IX.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: Ib.aP,
    },
    I6 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I5, usePredicate: () => IZ(IK.VERIFY, IW.LEGACY) }),
    I4 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I5,
        usePredicate: () => IZ(IK.VERIFY, IW.TINY_BRONCO),
    }),
    I8 = [I6, I$, I2],
    I7 = [I4, I0, I3],
    I9 = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
        useLabel: () => U.intl.string(U.t.BleMPB),
        onClick: () => IC(),
    });
function _e(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function _t(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function _n(e) {
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
            (0, S.jsx)(hj.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
            }),
        ],
    });
}
function _i() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.email);
    return null == e
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, S.jsx)(_n, {
              text: e,
              censor: _t,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let _s = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _i }),
    useLabel: function () {
        return null == (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.email)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.email)
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
var _l = n(557722),
    _r = n(53516);
function _a() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, S.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, S.jsx)(_n, {
                  text: t,
                  censor: _e,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let _o = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _a }),
    useLabel: function () {
        return null == (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    onClick: function () {
        null == lp.default.getCurrentUser()?.phone
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
                      return (t) => (0, S.jsx)(e, { reason: _l.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _r.V },
              )
            : (0, sT.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, S.jsx)(e, { ...t });
              });
    },
});
function _u() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _d() {
    let e = (0, Tg.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
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
let _c = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _d,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (_u() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _u,
        onClick: function () {
            (0, sT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    _g = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, f.bG)([lp.default], () => null != lp.default.getCurrentUser()),
        useTitle: () => U.intl.string(U.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
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
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, Iy.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: U.intl.string(U.t["/3qnL/"]),
                        text: U.intl.string(U.t.qKs3vg),
                        button: { text: U.intl.string(U.t["7psymi"]), onClick: () => IC() },
                    };
        },
        buildLayout: () => [_c, I9, _s, _o, ...I8],
    });
var _m = n(398177);
let _A = (0, E.Tf)(h.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => U.intl.string(U.t["CIGa+7"]),
    useLabel: () => U.intl.string(U.t.bt75uw),
    useAriaLabel: () => U.intl.string(U.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sT.openModal)((e) => (0, S.jsx)(_m.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _E = n(200921);
let _h = [];
function _x() {
    _h = [];
}
class _p extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _h;
    }
}
let _S = new _p(tl.h, {
    LOGOUT: _x,
    LOGIN_SUCCESS: _x,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _h = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._h],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _h = n;
    },
});
function _T() {
    let e = (0, f.cf)([_S], () => _S.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = d$.default.getAuthSessionIdHash();
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
function _f(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ip()(e).fromNow();
}
var _I = n(176524),
    __ = n(646270),
    _N = n(738678),
    _C = n(489828);
function _y(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, S.jsx)(_I.A, { icon: t, color: r ? n8.A.colors.ICON_MUTED : "currentColor" }),
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
function _b(e) {
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
                            return { text: U.intl.string(U.t.cDHCNY), icon: dm.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: __.u };
                        case "horizon os":
                            return { text: e, icon: _N.G };
                        default:
                            return { text: e, icon: dm.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _f(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(im.Vq);
    return (0, S.jsx)(_y, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, S.jsx)(ie.D, {
                className: _C.X,
                onClick: () => (0, _E.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, S.jsx)(uF.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _v(e) {
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
let _j = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _T();
            return null == e
                ? (0, S.jsx)(oN.y, {})
                : (0, S.jsx)(_v, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, S.jsx)(_b, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _O = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _T();
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, S.jsx)(v.$, {
                    onClick: () => (0, _E.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: U.intl.string(U.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _T();
            return e.length > 0;
        },
    });
var _L = n(766928);
function _R() {
    return (0, S.jsx)(_y, {
        icon: _L.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, nm.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tF.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _D = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _T(),
                t = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
            return (0, S.jsxs)(_v, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, S.jsx)(_b, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, S.jsx)(_R, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _T(),
                t = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _P = (0, E.zZ)(h.X.SESSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useSubtitle: () => U.intl.string(U.t.b7ZpTM),
        initialize: () => {
            (0, _E.GY)();
        },
        buildLayout: () => [_j, _D, _O],
        useSearchTerms: () => [
            U.intl.string(U.t["+1h0k/"]),
            U.intl.string(U.t.LLS19o),
            U.intl.string(U.t.xx1MWc),
            U.intl.string(U.t.lSWsrd),
        ],
    }),
    _G = (0, E.t_)(h.X.SESSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useObscuredNotice: oA.L,
        buildLayout: () => [_P],
    }),
    _M = (0, E.t0)(h.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_G],
        initialize: () => {
            (0, _E.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _T(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? U.intl.formatToPlainString(U.t.G7zwOk, { count: n }) : U.intl.string(U.t.MKDeyL),
            };
        },
    });
var _U = n(464477);
function _V(e) {
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
function _k() {
    return (0, on.bG)([lp.default], () => {
        let e = lp.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _w =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _F() {
    let e = (0, on.bG)([lp.default], () => lp.default.getCurrentUser()?.verified);
    return _U.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, on.bG)([sj.A, T8.A, lp.default], () =>
        lp.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sj.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T8.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? U.intl.string(U.t.OYTCUh)
                  : U.intl.string(U.t.HC8uSZ)
              : null,
    );
}
var _z = n(466034);
let _Y = (0, E.Tf)(h.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: () => _B(!0),
        useDisabled: () => null !== _B(!0),
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, f.bG)([d$.default], () => d$.default.hasTOTPEnabled()),
                t = _F() === _w.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n7.A)({
                title: U.intl.string(U.t["D+aE7g"]),
                subtitle: U.intl.string(U.t.EA4ZEk),
                variant: "critical",
                confirmText: U.intl.string(U.t.N86XcP),
                onConfirm: () => IN.A.disable(),
            }),
    }),
    _X = (0, E.zZ)(h.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RumMFo),
        useSubtitle: () => U.intl.string(U.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([d$.default], () => d$.default.hasTOTPEnabled()),
                t = _F() === _w.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: U.intl.string(U.t.cTNUeD),
                            onClick: _z.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_F()) {
                case _w.UNAVAILABLE_NO_CRYPTO:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.PhHhsj) };
                case _w.UNAVAILABLE_UNVERIFIED:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                case _w.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_Y],
    });
var _H = n(670492),
    _W = n(32880),
    _K = n(663417),
    _Z = n(658675),
    _q = n(900686);
function _Q() {
    (0, sT.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    IN.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var _J = n(858487);
function _$(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _0() {
    let e = _H.A.getVerificationKey();
    if ("" === e) return void _Q();
    try {
        await IN.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lc.P)({
            message: e.body?.message ?? U.intl.string(U.t.F8FvUy),
            type: lg.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function _1(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _$(t),
        s = T.useRef(null),
        l = (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(_Z.P, { checked: n }), (0, S.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return uv.p5
        ? (0, S.jsx)(ie.D, {
              tag: "li",
              className: ih()(_J.aY, _J.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uv.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uv.C)(i),
                      (0, lc.P)({ message: U.intl.string(U.t.mGZ66D), type: lg.Ck.SUCCESS, id: "backup-code-copied" }));
              },
              children: l,
          })
        : (0, S.jsx)("li", { className: _J.aY, children: l });
}
let _2 = (0, E.zZ)(h.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.fC9qV0),
        useSubtitle: () =>
            (0, f.bG)([_H.A], () => _H.A.getBackupCodes().length > 0)
                ? U.intl.format(U.t.tp7zEK, {})
                : U.intl.string(U.t.LoOi4S),
        usePredicate: _k,
        buildLayout: () => [_3],
    }),
    _3 = (0, E.E2)(h.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.fC9qV0)],
        Component: function () {
            let e = (0, f.bG)([_H.A], () => _H.A.getBackupCodes()),
                t = T.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_$(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, S.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _Q })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)("ul", {
                              className: _J.E5,
                              children: e.map((e) => (0, S.jsx)(_1, { code: e }, e.code)),
                          }),
                          (0, S.jsxs)(l3.e, {
                              size: "sm",
                              children: [
                                  (0, S.jsx)(_q.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, S.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _W.DownloadIcon,
                                      }),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      text: U.intl.string(U.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _K.RefreshIcon,
                                      onClick: _0,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _5 = (0, E.Tf)(h.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = T.useState(!1),
                n = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, S.jsx)(hj.Q, {
                              text: e ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sT.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, S.jsx)(e, {
                        ...t,
                        handleSubmit: IN.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    _6 = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lp.default], () => _V(lp.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lp.default], () => null != _V(lp.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: _4,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _F(),
                t = _k(),
                n = (0, f.bG)([d$.default], () => d$.default.hasTOTPEnabled());
            return e === _w.AVAILABLE && t && n;
        },
        buildLayout: () => [_5],
    });
function _4() {
    let e = lp.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _l.d.USER_SETTINGS_UPDATE, onAddedPhone: IN.A.enableSMS }),
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
                    { modalKey: _r.V },
                ));
        } else IN.A.enableSMS();
}
var _8 = n(665671),
    _7 = n(442433),
    _9 = n(917136),
    Ne = n(976910),
    Nt = n(267255);
function Nn(e) {
    let { credential: t } = e;
    return (0, S.jsxs)("li", {
        className: Nt.e,
        children: [
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: _f(t.last_used) }),
                        }),
                ],
            }),
            (0, S.jsx)(sg.K, {
                icon: gv.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, _7.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, S.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Ni = (0, E.zZ)(h.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.IBq4Y3),
        useSubtitle: () => U.intl.string(U.t.yK9edS),
        useHeaderDecoration: function () {
            if (_F() === _w.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iQ.j,
                            onClick: _8.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_F()) {
                    case _w.UNAVAILABLE_NO_CRYPTO:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.bWCGI9) };
                    case _w.UNAVAILABLE_UNVERIFIED:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                    case _w.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Ns],
    }),
    Ns = (0, E.E2)(h.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [U.intl.string(U.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, f.cf)([Ne.A], () => ({
                hasFetchedCredentials: Ne.A.hasFetchedCredentials(),
                credentials: Ne.A.getCredentials(),
            }));
            return (T.useEffect(() => {
                t || _9.JQ();
            }, [t]),
            t)
                ? (0, S.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, S.jsx)(Nn, { credential: e }, e.id)),
                  })
                : (0, S.jsx)(oN.y, {});
        },
    }),
    Nl = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [Ni, _X, _6, _2],
    }),
    Nr = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _k();
            return { type: p.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
        },
        buildLayout: () => [Nl],
    }),
    Na = (0, E.zZ)(h.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["0iH2vc"]),
        buildLayout: () => [_A, Nr, _M],
    }),
    No = { [Ib.M$.ADULT]: IP.default.PMznGO, [Ib.M$.TEEN]: IP.default.qSkhZH, [Ib.M$.UNVERIFIED]: IP.default.vGxRDB },
    Nu = [eA.M.TINY_BRONCO_NOTICE],
    Nd = [];
function Nc() {
    Iv.A.openUrl(IO.m5);
}
var Ng = n(308645),
    Nm = n(555725),
    NA = n(855267);
let NE = (0, E.E2)(h.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["16r9jm"])],
        Component: NA.A,
    }),
    Nh = (0, E.zZ)(h.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [NE] }),
    Nx = (0, E.t_)(h.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        buildLayout: () => [Nh],
    }),
    Np = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: Nm.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Nm._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Nm.aO)() };
        },
        initialize: () => {
            Ng.Yn();
        },
        buildLayout: () => [Nx],
    }),
    NS = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (ID() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IF.LH)(),
                t = (0, Ib.ZP)(),
                [n, i] = (0, mC.kn)(e ? Nu : Nd);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: U.intl.format(No[t], { handleOnBlogHook: Nc }),
                      onDismiss: () => i(mP.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...I7, Np],
    });
var NT = n(738188),
    Nf = n(834981),
    NI = n(987197),
    N_ = n(822585),
    NN = n(840387),
    NC = n(465558),
    Ny = n(513687);
let Nb = (0, E.E2)(h.X.FAMILY_CENTER_SETTING, {
        Component: NC.p,
        useSearchTerms: () => [
            U.intl.string(Ny.default.RZqaJn),
            U.intl.string(Ny.default.bdBmqy),
            U.intl.string(Ny.default["gVWG+6"]),
            U.intl.string(Ny.default.ahKIJO),
            U.intl.string(Ny.default["8SLtqb"]),
        ],
    }),
    Nv = (0, E.zZ)(h.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Nb] }),
    Nj = (0, E.t_)(h.X.FAMILY_CENTER_PANEL, {
        useTitle: () => U.intl.string(Ny.default.RZqaJn),
        buildLayout: () => [Nv],
    }),
    NO = (0, E.zZ)(h.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => U.intl.string(Ny.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, NI.f)(),
                t = (0, N_.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Nf.VT)();
            return T.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NL],
    }),
    NL = (0, E.t0)(h.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nf.Li)() ? U.intl.string(Ny.default.IcMQUP) : U.intl.string(Ny.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NN.Z)(),
                t = (0, Nf.Li)();
            return e
                ? t
                    ? U.intl.string(Ny.default.G8lHFU)
                    : U.intl.string(Ny.default.uOLNEZ)
                : U.intl.string(Ny.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, NI.f)(),
                t = (0, N_.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: NT.WarningIcon,
                      color: n8.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n8.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Nj],
    });
var NR = n(425587),
    ND = n(662758);
function NP(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, l0.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function NG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lp.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NR.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, l0.A)({
              title: U.intl.string(U.t["Y++oNe"]),
              subtitle: U.intl.format(U.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sj.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, l0.A)({ title: U.intl.string(U.t.vJiTOL), subtitle: U.intl.string(U.t.UyVVan) })
          : t.isClaimed()
            ? (0, sT.openModal)((t) =>
                  (0, S.jsx)(ND.default, {
                      ...t,
                      handleSubmit: (t) => (0, S5.U_)(t, e).then(I.tEg, NP),
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
                  onConfirm: () => (0, S5.U_)("", !0),
              });
}
let NM = (0, E.Tf)(h.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => U.intl.string(U.t["gIpzR+"]),
        useSubtitle: () => U.intl.string(U.t.Bd6dOf),
        useLabel: () => U.intl.string(U.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NG(!0),
    }),
    NU = (0, E.Tf)(h.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => U.intl.string(U.t["p/Tjtp"]),
        useSubtitle: () => U.intl.string(U.t.YvDmKb),
        useLabel: () => U.intl.string(U.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NG(!1),
        usePredicate: () => {
            let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NV = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NU, NM] }),
    Nk = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (IN.A.clearBackupCodes(), (0, S5.Uo)());
            };
        },
        useObscuredNotice: oA.L,
        buildLayout: () => [_g, Na, NS, NO, NV],
    }),
    Nw = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: AC.UserIcon,
        buildLayout: () => [Nk],
    });
var NF = n(176781),
    NB = n(341923),
    Nz = n(572164),
    NY = n(614584),
    NX = n(915725),
    NH = n(268378);
let NW = (0, E.zD)(h.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => U.intl.string(NH.default.j29uJx),
        useSubtitle: () => U.intl.format(NH.default.UCzGcQ, { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getEnableAutoclipping()),
        setValue: NY.uL,
        useDisabled: () => !(0, Nz.E)(),
    }),
    NK = (0, E.zY)(h.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NW], headerSettingKey: NW.key }),
    NZ = (0, E.zZ)(h.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => U.intl.string(NH.default.XWkJoi),
        useSubtitle: () => U.intl.string(NH.default["MJ/VsO"]),
        usePredicate: NB.HN,
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useInlineNotice: () =>
            (0, Nz.E)()
                ? null
                : {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: U.intl.string(NH.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: U.intl.string(NH.default.qGgW4M),
                          onClick: () => NY.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NK],
    });
var Nq = n(696016);
let NQ = [Nq.zq, 25, 50, Nq.Y2, Nq.rv],
    NJ = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: Nq.zq,
        maxValue: Nq.rv,
        useDefaultValue: () => Nq.Y2,
        getInitialValue: () => NX.Ay.getSettings().clipsQuality.bitratePercent ?? Nq.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NX.Ay.getSettings();
            NY.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: NQ,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Nz.E)(),
    });
var N$ = n(226640);
let N0 = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NX.Ay.getSettings();
            NY.GS({ ...t, frameRate: e });
        },
        useOptions: N$.Fz,
        useDisabled: () => !(0, Nz.E)(),
    }),
    N1 = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [U.intl.string(U.t.SIxrIF)],
        usePredicate: () => (0, f.bG)([NX.Ay], () => NX.Ay.getHardwareClassification()) === Nq.k9.BELOW_MINIMUM,
        Component: () => (0, S.jsx)(s7.A, { look: s7.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    N2 = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().clipsLength),
        setValue: (e) => NY.h$(e),
        useOptions: N$.Qu,
        useDisabled: () => !(0, Nz.E)(),
    }),
    N3 = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [U.intl.string(U.t["Z+MfqT"])],
        Component: () => (0, S.jsx)(s7.A, { look: s7.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    N5 = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NX.Ay.getSettings();
            NY.GS({ ...t, resolution: e });
        },
        useOptions: N$.gF,
        useDisabled: () => !(0, Nz.E)(),
    }),
    N6 = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().remindersEnabled),
        setValue: (e) => NY.Mt(e),
        useDisabled: () => !(0, Nz.E)(),
    }),
    N4 = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(NH.default.TGwzMe),
        buildLayout: () => [N1, N2, N0, N5, NJ, N3, N6],
    }),
    N8 = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NY.YP(e),
    }),
    N7 = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NY.Uh(e),
    }),
    N9 = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lp.default], () => {
                let e = lp.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N8, N7],
    });
var Ce = n(417270),
    Ct = n(847825);
let Cn = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sZ.Ay], () => sZ.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tx()(null != e, "Save clip keybind unset");
            let t = !(0, Nz.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        i0.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    i0.A.setKeybind({ ...e, shortcut: (0, sp.OH)(Nq.Ot) });
                }, [e]);
            return (0, S.jsx)(t8.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: Ct.g,
                    children: (0, S.jsx)(sx.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, S.jsxs)(S.Fragment, {
                            children: [
                                (0, S.jsx)(sA.m, {
                                    text: U.intl.string(NH.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sg.K, {
                                        icon: iJ.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(NH.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, S.jsx)(sA.m, {
                                    text: U.intl.string(NH.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sg.K, {
                                        icon: Ce.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(NH.default.Kyk1Tp),
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
    Ci = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
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
                    className: Ct.g,
                    children: (0, S.jsx)(sx.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cs = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, Nz.E)(),
        setValue: (e) => NY.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cl = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cs, Cn, Ci], headerSettingKey: Cs.key }),
    Cr = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(NH.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cl],
    }),
    Ca = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([NX.Ay], () => NX.Ay.getSettings().storageLocation),
                t = !(0, Nz.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nC.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NY.HU(e[0]);
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
                            text: U.intl.string(NH.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Co = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(NH.default["0Q+pdZ"]),
        buildLayout: () => [Ca],
    }),
    Cu = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sH.sw,
        buildLayout: () => [Cr, NZ, N4, Co, N9],
    }),
    Cd = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: NF.x,
        buildLayout: () => [Cu],
    });
var Cc = n(254138),
    Cg = n(290595);
let Cm = [];
var CA = n(153488),
    CE = n(308528),
    Ch = n(171316),
    Cx = n(558001);
n(866945);
var Cp = n(835002);
function CS() {
    let e = (0, Ch.uM)(),
        t = (0, Nf.vx)(),
        n = T.useCallback(() => {
            ((0, tW.default)(),
                CE.A.openPrivateChannel({ recipientIds: t }),
                (0, Cx.N)(Cp.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cp.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, Cx.N)(Cp.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cp.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: U.intl.format(Ny.default.i284fU, {
                    hook: (e, t) => (0, S.jsx)(ng.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CT = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => NY.eQ({ allowVoiceRecording: e }),
});
var Cf = n(157559),
    CI = n(331887);
function C_() {
    let e = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
        t = (0, f.bG)([CI.A], () => CI.A.harvestType),
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
let CN = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = C_();
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
        useDisabled: () => !C_().allowed,
        useLoading: () => (0, f.bG)([CI.A], () => CI.A.requestingHarvest),
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
                            (0, S5.$I)(n)
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
                                            ? Cf.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : Cf.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        Cf.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
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
    CC = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, nm.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nm.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cy = n(641216);
let Cb = (0, ua.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Cv() {
    let { enabled: e } = Cb.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Cj = n(884705);
function CO() {
    return (0, f.bG)([Cj.A], () => Cj.A.isTogglesDisabled());
}
function CL() {
    return !M.vf.useSetting();
}
function CR(e) {
    M.vf.updateSetting(!e);
}
function CD() {
    let e = CO(),
        t = M.H1.useSetting(),
        n = (0, Ch.uM)();
    return e || t || n;
}
let CP = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cv(),
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    CG = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function CM() {
    return !M.H1.useSetting();
}
function CU(e) {
    M.H1.updateSetting(!e);
}
function CV() {
    let e = CO(),
        t = (0, Ch.uM)();
    return e || t;
}
let Ck = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !Cv(),
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CV,
    }),
    Cw = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CV,
    }),
    CF = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h2(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h3();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([se.Ay], () => se.Ay.getGamesSeen(!1).some((e) => !(0, hq.n1)(e))) && (0, nI.xl)(),
    }),
    CB = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CF] });
var Cz = n(972737);
let CY = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([CA.A], () => CA.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cg.U)([I.YAq.USAGE_STATISTICS], []).catch(Cz.i)
                : (0, Cz.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, Cg.U)([], [I.YAq.USAGE_STATISTICS]).catch(Cz.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: Ch.uM,
    }),
    CX = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: () => CS() ?? void 0,
        initialize: () => {
            CA.A.fetchedConsents || (0, Cg.Q)();
        },
        buildLayout: () => [CC, CY, Cy._, Ck, CP, ...Cm, CT, CN, CB],
    });
var CH = n(15762);
let CW = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(CH.default.F3llsQ),
    useSubtitle: () => U.intl.string(CH.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h8.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CK() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [g_.Ay, sj.A],
        () => {
            let t = new Set(e);
            return g_.Ay.getFlattenedGuildIds().filter((e) => null != sj.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CZ = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CK();
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
                    ((e = CK()),
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
                                    icon: (0, S.jsx)(xd, { guild: t[0], size: hQ.CD }),
                                    shape: hQ.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, S.jsx)(xd, { guild: t[1], size: hQ.CD }), shape: hQ.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, S.jsx)(xd, { guild: t[0], size: hQ.CD }),
                                    shape: hQ.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Cq = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CZ] }),
    CQ = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => U.intl.string(U.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: U.intl.string(U.t.Boxc8R),
                    desc: U.intl.string(U.t["nLj+nc"]),
                    value: eJ.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: U.intl.string(U.t.YOIKBt),
                    desc: U.intl.string(U.t.y0JZ4s),
                    value: eJ.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: U.intl.string(U.t.u0nlJv), desc: U.intl.string(U.t["4jnKHu"]), value: eJ.KP.FRIENDS_ONLY },
            ];
        },
        useValue: M.KP.useSetting,
        setValue: function (e) {
            let t = M.KP.getSetting();
            M.KP.updateSetting(e);
            let i = (0, xs.gS)(t, e);
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
    CJ = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CQ, CW, Cq],
    });
var C$ = n(952270),
    C0 = n(678538);
let C1 = { [eJ.tR.REAL_MONEY_GAMING]: C0.default.pmIitA },
    C2 = Object.keys(C1).map(Number),
    C3 = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(C0.default.foQaI1)],
        usePredicate: Cv,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        C2.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(C1[e]),
                            leading: C$.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, S.jsx)(SH.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of C2) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(C0.default.foQaI1),
                description: U.intl.format(C0.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(C0.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C5 = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(C0.default.XUj46U),
        usePredicate: Cv,
        buildLayout: () => [Cw, CG, C3],
    });
var C6 = n(714763),
    C4 = n(814278),
    C8 = n(730852),
    C7 = n(913122),
    C9 = n(977997),
    ye = n(144485);
async function yt(e, t) {
    if (e) {
        tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C4.to)(1), t?.());
        } catch (t) {
            let e = new C7.LG(t);
            (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Cf.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function yn(e) {
    let t,
        n,
        i =
            ((t = C9.A.getVoiceStateForUser(d$.default.getId())),
            (n = sb.A.getChannel(t?.channelId)),
            d$.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? ye.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await yt(e, () => {
                      (C8.default.disconnect(), C8.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yt(e);
}
n(603266);
let yi = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, C4.Lu)() }),
    useValue: function () {
        return (0, f.bG)([C6.A], () => C6.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        yn(e);
    },
});
var ys = n(787392);
function yl() {
    return (0, f.yK)([ys.A], () => ys.A.getUserIds());
}
var yr = n(803306),
    ya = n(966327),
    yo = n(774156);
function yu(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(),
        s = (0, f.bG)([lp.default], () => lp.default.getUser(t)),
        l = uR.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, C4.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, S7.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, yr.wz)(t);
        }, [t]),
        (0, S.jsxs)("div", {
            className: yo.uW,
            children: [
                null != s && (0, S.jsx)(ya.A, { className: yo.my, user: s, size: b._3.SIZE_40 }),
                (0, S.jsxs)("div", {
                    className: yo.Qq,
                    children: [
                        (0, S.jsx)(ie.D, {
                            className: yo.Xh,
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
                (0, S.jsx)(ie.D, { onClick: r, className: yo.Qz, children: (0, S.jsx)(sm.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yd(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C4.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, C4.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, S.jsxs)("div", {
        className: t,
        children: [
            (0, S.jsxs)("div", {
                className: yo.Qq,
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
                className: yo.Kk,
                onClick: r,
                children: (0, S.jsx)(uF.P, { size: "md", color: n8.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yc(e) {
    let { userId: t } = e,
        n = (0, f.yK)([ys.A], () =>
            W()(ys.A.getUserVerifiedKeys(t))
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
            (0, S.jsx)(yu, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, S.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, S.jsx)(yd, { className: yo.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, S.jsx)("div", { className: yo.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yg = n(464946),
    ym = n(492422);
let yA = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = yl();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yl();
            return (0, S.jsxs)(yg.h, {
                children: [
                    (0, S.jsx)(yg._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, C4.dc)() }),
                    }),
                    e.map((e) => (0, S.jsx)("div", { className: ym.A, children: (0, S.jsx)(yc, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yE = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [yi, yA],
    }),
    yh = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [CX, C5, CJ, yE],
    }),
    yx = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: Cc.m,
        buildLayout: () => [yh],
    });
var yp = n(476713);
let yS = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yT = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yS] });
var yf = n(875444);
function yI(e, t) {
    let n = (0, f.bG)([xk.default], () => xk.default.getFetchState()),
        i = (0, f.bG)([xk.default], () =>
            e ? xk.default.getNewestTokensForNonChildrenApplications() : xk.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yf.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || xy.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xk.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var y_ = n(514479);
function yN() {
    return (0, S.jsxs)("div", {
        className: y_.d,
        children: [
            (0, S.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: y_.x,
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
let yC = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yI(!0, !0);
        return e ? (0, S.jsx)(oN.y, {}) : (0, S.jsx)(yN, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
        return e || 0 === t.length;
    },
});
function yy() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
    return !e && t.length > 0;
}
let yb = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: yy,
    }),
    yv = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t["ms+Tme"]),
        useSubtitle: () => U.intl.string(U.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.JIFnN9), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: U.intl.string(U.t.rRdsk1), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: U.intl.string(U.t.IVRPMX), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = M.TA.useSetting();
            return e === eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => M.TA.updateSetting(e),
        usePredicate: yy,
    });
function yj() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yI(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oG.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yO = n(306537),
    yL = n(40957);
function yR(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, Cx.N)(s, Cp.YX.VIEWED);
        }),
        (0, S.jsx)(i$.w, {
            type: "info",
            iconAlign: l,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, S.jsx)("span", { className: yL.r, children: t }),
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
function yD(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, Cx.N)(e, Cp.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(e, Cp.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yP() {
    let e,
        t = (0, Ch.uM)(),
        n = (0, IH.fk)(),
        i = (0, IX.b8)(),
        s = (0, NN.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IR.n)(IO.Vc)) return e;
    }
}
var yG = n(687123),
    yM = n(444802);
function yU() {
    let e = (0, yM.WX)();
    T.useEffect(() => {
        (0, Cx.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cx.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.CONFIRM_AGE));
        }, []);
    return (0, S.jsx)(ao.p, {
        messageType: ao.Y.INFO,
        action: (0, S.jsx)(hj.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: U.intl.string(U.t.FDSSia),
            onClick: n,
        }),
        children: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, S.jsx)(ng.Anchor, { onClick: t, children: e }, n) }),
    });
}
function yV() {
    let e = (0, IH.aX)(yG.t.REACTIVE_CHECK),
        t = (0, IX.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yU };
    }, [e, t]);
}
var yk = n(323073),
    yw = n(386171),
    yF = n(96607);
let yB = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yw.hT,
        useDisabled: function () {
            let e = (0, yF.A)() ?? !0,
                t = (0, yk.sP)(),
                n = (0, IX.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yk.p5)() && e
                ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yz = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yw.tI,
        useDisabled: function () {
            let e = (0, yF.A)() ?? !0,
                t = (0, yk.sP)(),
                n = (0, IX.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yk.p5)() && e
                ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yY = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yX = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yY] });
n(667532);
var yH = n(390248),
    yW = n(632119),
    yK = n(945276),
    yZ = n(389737),
    yq = n(566769);
function yQ() {
    let e,
        t = (0, yK.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, on.cf)([av.A], () => av.A.settings.textAndImages?.explicitContentSettings ?? (0, yW.C$)())),
        {
            explicitContentGuilds: (0, yW.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yW.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yW.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yH.hK)() && t.includes(eJ.TO.SHOW)
            ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yW.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yZ.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yJ() {
    let e,
        t = (0, yK.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, on.cf)([av.A], () => av.A.settings.textAndImages?.goreContentSettings ?? (0, yM.T4)())),
        {
            goreContentGuilds: (0, yM.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yM.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yM.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yH.hK)() && t.includes(eJ.TO.SHOW)
            ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yM.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yZ.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yq.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y$ = n(875162),
    y0 = n(636745);
let y1 = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yM.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: yQ,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yJ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, S.jsxs)(yg.h, {
            children: [
                (0, S.jsx)(yg._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, S.jsx)(y$.A, { tabs: t, orientation: "vertical", tabsClassName: y0.v }),
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
var y2 = n(639555),
    y3 = n(617641),
    y5 = n(546140),
    y6 = n(406935),
    y4 = n(594061);
let y8 = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: y5.L,
        setValue: function (e) {
            return y4.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y6._t.create({ value: e });
                },
                y4.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y3.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y2.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yK.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y7 = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
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
                x = CS(),
                f =
                    ((s = (0, Ch.uM)()),
                    (l = (0, IH.fk)()),
                    (r = (0, IX.b8)()),
                    (a = (0, NN.Z)()),
                    (o = yD(Cp.YA.AGE_CONFIRMATION_NOTICE, IL)),
                    (u = yD(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Ib.M0)),
                    (d = T.useCallback(() => {
                        (0, Cx.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, Cx.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, IR.n)(IO.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(IP.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: U.intl.string(IP.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(IP.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, NN.Z)()),
                    (t = (0, yM.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cx.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, Cx.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.VIEWED);
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
                    ((g = (0, IH.SJ)()),
                    (m = (0, IX.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cx.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cp.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, Cx.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cp.YX.VIEWED);
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
                N = yV();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [y1, y8, yB, yz, yX],
    });
var y9 = n(923457),
    be = n(750714);
let bt = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lp.default], () => lp.default.getCurrentUser()),
            i = (0, IH.yv)(y9.p.SPAM_FILTERS);
        return e !== eJ.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eJ.he.FRIENDS_AND_NON_FRIENDS
              : (be.xY.get(t) ?? eJ.he.NON_FRIENDS);
    },
    setValue: (e) => M.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: U.intl.string(U.t["+w5yKk"]), value: eJ.he.FRIENDS_AND_NON_FRIENDS },
            { name: U.intl.string(U.t.yAPg6r), value: eJ.he.NON_FRIENDS },
            { name: U.intl.string(U.t.FEXKsv), value: eJ.he.DISABLED },
        ];
    },
    useSearchTerms: () => [U.intl.string(U.t.JzaP4h), U.intl.string(U.t.H9XOl3), U.intl.string(U.t.k4W40P)],
});
var bn = n(189883);
let bi = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, io.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Ch.uM)();
    },
});
var bs = n(665260);
let bl = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bs.UI(t, I.dzt.MUTUAL_FRIENDS) : bs.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    br = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bs.UI(t, I.dzt.MUTUAL_GUILDS) : bs.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    ba = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [bi, bl, br],
    });
var bo = n(420825);
let bu = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, bo.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    bd = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bn.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: CS,
        buildLayout: () => [ba, bu],
    });
var bc = n(994500),
    bg = n(428678),
    bm = n(49229),
    bA = n(730134),
    bE = n(276573);
function bh(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, S.jsxs)("div", {
        className: bE.wx,
        children: [
            (0, S.jsx)("div", {
                className: bE.zc,
                children: i ? (0, S.jsx)(bg.K, {}) : (0, S.jsx)(C$.EyeSlashIcon, {}),
            }),
            (0, S.jsxs)("div", {
                className: bE.Qq,
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
function bx(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([bc.A], () => bc.A.isBlocked(t)),
        s = (0, f.bG)([lp.default], () => lp.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? bm.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bm.A.unignoreUser(t, tF.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, S.jsxs)("div", {
              className: ih()(bE.nM, { [bE.fW]: n }),
              children: [
                  (0, S.jsxs)("div", {
                      className: bE.eF,
                      children: [
                          (0, S.jsx)(bA.A, { user: s, size: b._3.SIZE_40 }),
                          (0, S.jsxs)("div", {
                              className: bE.Qq,
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
function bp(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, S.jsx)(yg.h, {
        children: (0, S.jsxs)("div", {
            className: bE.Nr,
            children: [
                (0, S.jsx)(bh, { listType: n, numberOfUsers: t.length }),
                (0, S.jsx)("div", {
                    className: bE.jS,
                    children: t.slice(0, i).map((e, n) => (0, S.jsx)(bx, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, S.jsx)("div", {
                          className: bE.vM,
                          children: (0, S.jsx)(ie.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bE.Qf,
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
let bS = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([bc.A], () => bc.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bc.A], () => bc.A.getBlockedIDs());
            return (0, S.jsx)(bp, { userIds: e, listType: "blocked" });
        },
    }),
    bT = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([bc.A], () => bc.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bc.A], () => bc.A.getIgnoredIDs());
            return (0, S.jsx)(bp, { userIds: e, listType: "ignored" });
        },
    }),
    bf = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bS, bT],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([bc.A], () => ({
                hasBlockedUsers: bc.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bc.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bI = n(22385),
    b_ = n(556534),
    bN = n(111159),
    bC = n(152056),
    by = n(428031),
    bb = n(978433);
let bv = { label: () => U.intl.string(U.t["32u1Dx"]), value: bI.YG };
var bj = n(307863),
    bO = n(954225);
function bL() {
    return (0, bj.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function bR(e, t) {
    tc.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bD = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bL,
    useSubtitle: function () {
        let e = (0, b_.Tx)(),
            t = (0, b_.q9)(),
            n = (0, bj.e)();
        return e === bI.YG
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
        let e = (0, b_.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, by.K)();
        return e === bI.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Ch.uM)();
        return (0, b_.Tx)() === bI.YG && e;
    },
    setValue: function (e) {
        let t = bI.xk.getState().selectedGuildId;
        if (t === bI.YG) {
            var n;
            ((n = !e),
                (0, Cz.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l1.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), bR(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sj.A.getGuildIds() : []), bR(n, !0));
                    },
                }));
        } else {
            let n = (0, io.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                tc.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bO.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bP = n(116774),
    bG = n(953298);
function bM(e, t) {
    tc.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bU() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bV = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bU,
        useSubtitle: function () {
            let e = (0, b_.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, b_.Tx)(),
                t = (0, by.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, bP.s)(),
                s = (0, Ch.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === bI.YG && s ? !l : e === bI.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, b_.Tx)(),
                t = (0, Ch.uM)(),
                n = (0, by.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, bP.s)();
            return e === bI.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bI.xk.getState().selectedGuildId;
            if (!e && (0, bG.w)())
                return void Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bI.YG) {
                var n;
                ((n = !e),
                    (0, Cz.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l1.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bM(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sj.A.getGuildIds() : []), bM(n, !0));
                        },
                    }));
            } else {
                let n = (0, io.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    tc.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bO.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bk = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bL(), bU()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bI.xk)(),
                s = (0, f.bG)([g_.Ay], () => g_.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sj.A], () => sj.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, by.K)()),
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
                    bC.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bI.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bI.YG && null != a
                                ? i(a)
                                : "" === e && n !== bI.YG && i(bI.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bv,
                            id: bv.value,
                            label: bv.label(),
                            leading: (0, S.jsx)("div", {
                                className: bb.KP,
                                children: (0, S.jsx)(bN.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bb.cl,
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
                                    leading: (0, S.jsx)(gG.Ay, {
                                        className: bb.cl,
                                        guild: n,
                                        size: gG.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bI.YG && r > 0;
            return (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(SH.Z, {
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
                            className: bb.h_,
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
    bw = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, b_.Tx)(),
                t = yP();
            return e === bI.YG && null != t;
        },
        Component: function () {
            let e = yP(),
                t = yD(Cp.YA.AGE_CONFIRMATION_NOTICE, IL),
                n = yD(Cp.YA.CONTENT_AND_SOCIAL_NOTICE, Ib.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, S.jsx)(yR, {
                        noticeType: Cp.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(IP.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(IP.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, S.jsx)(yR, {
                        noticeType: Cp.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: U.intl.format(IP.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: U.intl.string(U.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bF = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = CS(),
                t = yV();
            if ((0, b_.Tx)() === bI.YG) return e ?? t;
        },
        buildLayout: () => [bk, bD, bV, bw],
    }),
    bB = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [bt] }),
    bz = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yj();
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
                let { sortedGames: e } = yj();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, S.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hQ.CD,
                                height: hQ.CD,
                            }),
                            shape: hQ.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, S.jsx)("img", {
                                    src: G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: hQ.YP,
                                    height: hQ.YP,
                                }),
                                shape: hQ.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            xy.A.fetch();
        },
        buildLayout: () => [yb, yv, yC, yT],
    }),
    bY = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [y7, bB, bF, bd, bz, bf],
    }),
    bX = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: yp.l,
        buildLayout: () => [bY],
    });
var bH = n(782603),
    bW = n(899847),
    bK = n(695515);
let bZ = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
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
    bq = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, nm.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    bQ = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.JZxxGx),
        useSubtitle: () => U.intl.string(U.t.HDLtJl),
        useValue: () => (0, f.bG)([aV.A], () => aV.A.getTTSType()),
        setValue: (e) => az.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: U.intl.string(U.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: U.intl.string(U.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => X.$j,
    }),
    bJ = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    b$ = (0, E.bd)(bJ, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tN(bJ, {
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
        buildLayout: () => [bZ, bq, bQ],
    }),
    b0 = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [b$],
    }),
    b1 = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aV.A], () => !aV.A.getDisableUnreadBadge());
        },
        setValue: (e) => az.default.setDisableUnreadBadge(!e),
    }),
    b2 = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [b1],
    });
var b3 = n(840559),
    b5 = n(997187);
let b6 = (0, ua.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b4 = n(723923);
let b8 = b4.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([b5.A], () => b5.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b3.CA)(e.category, t),
        }),
    ),
    b7 = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([b5.A], () => b5.A.getEmailSettings());
            return b4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b3.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b9 = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b6.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = b5.A.getEmailSettings();
            e || (0, b3.cR)();
        },
        buildLayout: () => [...b8, b7],
    }),
    ve = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aV.A], () => aV.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => az.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vt = n(832712),
    vn = n(543465),
    vi = n(790782);
let vs = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([vn.Ay], () => vn.Ay.useNewNotifications),
    setValue: function (e) {
        (vt.A.setAccountFlag(h8.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hn.w.set("turnedOffNewNotifications", !0),
                tc.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sj.A.getGuildsArray().filter(
                        (e) => vn.Ay.resolveGuildUnreadSetting(e) === vi.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lp.default, vn.Ay],
            () =>
                lp.default.getCurrentUser()?.isStaff() ||
                lp.default.getCurrentUser()?.isStaffPersonal() ||
                vn.Ay.useNewNotifications,
        ),
});
var vl = n(534654);
let vr = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aV.A], () => aV.A.screenDowntimeReminder),
        setValue: (e) => az.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vl.A)(),
                t = (0, Nf.Du)();
            return e && t;
        },
    }),
    va = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vl.A)(),
                t = (0, Nf.Du)();
            return e && t;
        },
    }),
    vo = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    vu = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vd = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vc = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vg = n(815807);
let vm = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, vg.n4)(e, M.Zp.getSetting()),
    }),
    vA = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vE = (0, ua.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vh = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                tc.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h8.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vE.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vx = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [vd, vo, vu, vA, vh, vc, vm],
    }),
    vp = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aV.A], () => aV.A.taskbarFlash),
        setValue: (e) => az.default.setTaskbarFlash(e),
        usePredicate: () => (0, nI.uF)(),
    }),
    vS = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [ve, vp, vx, vs, va, vr],
    });
var vT = n(965957),
    vf = n(312671),
    vI = n(235079);
let v_ = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ak.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([vf.A], () => vf.A.getSoundpack()),
            t = ak.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ak.A.getHolidaySoundpack();
        (tx()(null != t, "predicate should fail if no soundpack is available"), (0, vT.p)(e ? t : vI.i.CLASSIC));
    },
    usePredicate: ak.A.useIsEligible,
});
var vN = n(970931);
let vC = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: vN.kB,
        useDisabledMessage: () => ((0, vN.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    vy = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    vb = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aH("message3") }),
        useValue: () =>
            (0, f.bG)([aV.A], () => aV.A.getNotifyMessagesInSelectedChannel() && !aV.A.getDisableAllSounds()),
        setValue: (e) => az.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aV.A], () => aV.A.getDisableAllSounds()),
    }),
    vv = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aV.A], () => aV.A.getDisableAllSounds()),
        setValue: (e) => az.default.toggleDisableAllSounds(e),
    }),
    vj = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aX();
            };
        },
        buildLayout: () => [aW(vC), vb, aW(vy), vv],
    }),
    vO = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    vL = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vO] }),
    vR = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [v_, vj, vL],
    }),
    vD = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bK.A.getAgeGroup() || bK.A.isLoading() || (bK.A.canRefetch() && bW.Ay.initialPageLoad());
        },
        buildLayout: () => [vS, vR, b2, b9, b0],
    }),
    vP = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bH.BellIcon,
        buildLayout: () => [vD],
    }),
    vG = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Nw, yx, bX, vP, Cd],
    });
var vM = n(387758),
    vU = n(271866),
    vV = n(147964),
    vk = n(868511);
let vw = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vV.A], () => null != vV.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sT.openModal)((e) => (0, S.jsx)(vk.A, { ...e })) : vU.cL();
        },
    }),
    vF = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => uv.p5,
    }),
    vB = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [vF, vw] }),
    vz = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vB] }),
    vY = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vM.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vz],
    });
var vX = n(70688),
    vH = n(830215);
let vW = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vX.DoorExitIcon,
        onClick: () => {
            (0, n7.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vH.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vK = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vY, vW],
    }),
    vZ = (0, E.Hr)({ buildLayout: () => [I_, vG, EN, og, S3, hK, vK], analyticsKey: "user_settings" });
