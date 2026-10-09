n.d(t, { D: () => vH });
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
function ew(e) {
    return U.intl.formatToPlainString(U.t.pyvjRp, { seconds: e });
}
let eF = (0, E.sN)(h.X.TOAST_DURATION, {
        useTitle: () => U.intl.string(U.t["3oxlia"]),
        useSubtitle: () => U.intl.string(U.t.CZ3jxp),
        markers: I.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === I.hH7.TOAST_DURATION_MIN_SECONDS || e === I.hH7.TOAST_DURATION_MAX_SECONDS
                ? ew(e)
                : void 0,
        onValueRender: ew,
        stickToMarkers: !0,
        minValue: I.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: I.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => I.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => j.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, eu.E7)(1e3 * e),
    }),
    eB = (0, E.zZ)(h.X.MOTION_CATEGORY, {
        useTitle: () => U.intl.string(U.t.e3TR1b),
        buildLayout: () => [eV, ek, eF, eG, eP, eU],
    });
var ez = n(688810),
    eY = n(259065),
    eX = n(701974);
let eH = (0, E.zD)(h.X.DISPLAY_NAME_STYLES, {
    useTitle: () => U.intl.string(eX.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, ez.Ay)();
        return U.intl.format(eX.default.aEax6P, {
            onClickOpenModal() {
                (0, eY.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, f.bG)([j.Ay], () => j.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, eu.Dm)(e),
});
function eW(e) {
    return `${e.toFixed(0)}px`;
}
let eK = (0, E.sN)(h.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => U.intl.string(U.t.rT3Pq5),
        useSubtitle: () => U.intl.string(U.t.LXUhen),
        markers: I.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: I.hH7.FONT_SIZES["0"],
        maxValue: I.hH7.FONT_SIZES[I.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => I.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => j.Ay.fontSize,
        onValueRender: eW,
        onMarkerRender: eW,
        asValueChanges: (e) => (0, eu.XS)(e),
    }),
    eZ = (0, E.zD)(h.X.UNDERLINE_LINKS, {
        useTitle: () => U.intl.string(U.t.OLZFB8),
        useSubtitle: () => U.intl.string(U.t.DIX3ke),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, eu.kI)(e),
    }),
    eq = (0, E.zZ)(h.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["bxh/R7"]),
        buildLayout: () => [eK, eZ, eH],
    });
var eQ = n(873298);
let eJ = (0, E.Qx)(h.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => U.intl.string(U.t["C/5V0A"]),
        useSubtitle: () => U.intl.string(U.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: U.intl.string(U.t["7iegX4"]), value: eQ.NS.COMPACT },
            { name: U.intl.string(U.t.bBvAEH), value: eQ.NS.DEFAULT },
            { name: U.intl.string(U.t["4cuYHx"]), value: eQ.NS.COZY },
        ],
        useValue: () => M.Xi.useSetting(),
        setValue: (e) => {
            e !== eQ.NS.UNSET_UI_DENSITY && M.Xi.updateSetting(e);
        },
    }),
    e$ = "cozy",
    e0 = "compact",
    e1 = (0, E.Qx)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => U.intl.string(U.t.nKRoPv),
        useSubtitle: () => U.intl.string(U.t.QntEEG),
        useSearchTerms: () => [U.intl.string(U.t.ZEoGMd)],
        useOptions: () => [
            { name: U.intl.string(U.t.Jqj4cZ), value: e$ },
            { name: U.intl.string(U.t["1JNcPS"]), value: e0 },
        ],
        useValue: () => (M.hH.useSetting() ? e0 : e$),
        setValue: (e) => {
            (M.hH.updateSetting(e === e0), (0, eu.AC)());
        },
    });
var e2 = n(381941);
function e3(e) {
    return `${e.toFixed(0)}px`;
}
let e5 = (0, E.sN)(h.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => U.intl.string(U.t.Q6lKkg),
    useSubtitle: () => U.intl.string(U.t.p7eUrb),
    markers: e2.qh,
    stickToMarkers: !0,
    minValue: e2.qh["0"],
    maxValue: e2.qh[e2.qh.length - 1],
    useDefaultValue: () => (M.hH.useSetting() ? e2.y5 : e2.ES),
    useExternalValue: () => (0, f.bG)([j.Ay], () => j.Ay.messageGroupSpacing),
    getInitialValue: () => j.Ay.messageGroupSpacing,
    onValueRender: e3,
    onMarkerRender: e3,
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
    e4 = n(723702);
let e8 = (0, E.sN)(h.X.APPEARANCE_ZOOM, {
        usePredicate: () => e4.isPlatformEmbedded,
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
    e7 = (0, E.zZ)(h.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.VKYWk8),
        buildLayout: () => [eJ, e1, e5, e8],
    }),
    e9 = (0, E.t_)(h.X.ACCESSIBILITY_PANEL, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        buildLayout: () => [eq, e7, ev, eB, er],
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
    te = (0, E.i4)(h.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        icon: x.c,
        useMenu: B.A,
        buildLayout: () => [e9],
    });
n(321073);
var tt = n(650809),
    tn = n(477782),
    ti = n(636537),
    ts = n(73153),
    tl = n(74396),
    tr = n(93055),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(174459),
    tc = n(812993),
    tg = n(189081);
let tm = (0, E.zD)(h.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, f.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => U.intl.string(U.t.fi3UQN),
        useSubtitle: () => U.intl.string(U.t["8mYp37"]),
        useValue: () => !M.l_.useSetting(),
        setValue: (e) => M.l_.updateSetting(!e),
    }),
    tA = (0, E.zZ)(h.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [tm],
    });
var tE = n(284009),
    th = n.n(tE),
    tx = n(199966),
    tp = n(963935);
function tS(e) {
    let { title: t } = e;
    return t;
}
function tT(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tf(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, S.jsx)(tT, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tI(e) {
    return e.type === tp.Z6.LIST;
}
function t_(e, t) {
    let { limit: n = 2, formatter: i = tS } = t ?? {};
    th()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tx._)(),
        r = s.get(e) ?? l.get(e);
    th()(
        null != r && (r.type === tp.Z6.ACCORDION || tI(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tI(r) ? (r.collapseAfter ?? 0) : 0,
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
                return U.intl.format(U.t["3H9tCW"], { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return U.intl.format(U.t.MWryo6, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return U.intl.format(U.t.a00b5G, {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? U.intl.format(U.t.O8vNbS, { settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? U.intl.format(U.t["acXG/W"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                })
              : U.intl.format(U.t["5+ldWc"], {
                    settingOneHook: tf({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tf({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tf({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tN = n(951260);
let tC = (0, E.zD)(h.X.ENABLE_APPS_BUTTON, {
        useTitle: () => U.intl.string(U.t.ZTH4j4),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, eu.n8)({ appsButtonEnabled: e }),
    }),
    ty = {
        useTitle: () => U.intl.string(U.t["I/5LyL"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSubmitButtonEnabled),
        setValue: () => (0, eu.Xt)(),
    },
    tb = (0, E.zD)(h.X.ENABLE_SEND_BUTTON, ty),
    tv = (0, E.zD)(h.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...ty,
        usePredicate: () => !(0, tN.n)("EnableSendButtonOutsideExperiment"),
    }),
    tj = (0, E.zD)(h.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => U.intl.string(U.t.WggFoO),
        useSubtitle: () => U.intl.string(U.t.XpErGj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, eu.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tO = (0, E.zD)(h.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => U.intl.string(U.t.YErWkD),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, eu.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tL = (0, E.zD)(h.X.ENABLE_GIF_BUTTON, {
        useTitle: () => U.intl.string(U.t.k7oNEz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isGifButtonEnabled),
        setValue: (e) => (0, eu.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tR = (0, E.zD)(h.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => U.intl.string(U.t.Ar0krj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, eu.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tD = (0, E.Qx)(h.X.EXPRESSION_PICKER_FORMAT, {
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
    tP = (0, E.FW)(h.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => U.intl.string(U.t["V9/cNN"]),
        buildLayout: () => [tD, tj, tO, tL, tR],
    }),
    tG = (0, E.bd)(h.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.IwVGQs) : U.intl.string(U.t.cFNDh5);
        },
        useCollapsedSubtitle: () => t_(h.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tN.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tb, tC, tP],
    });
var tM = n(565645);
let tU = (0, E.zD)(h.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => U.intl.string(U.t["79qal8"]),
        useSubtitle: () =>
            U.intl.format(U.t.GejoQK, { emojiHook: (e, t) => (0, S.jsx)(tM.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: M.j7.useSetting,
        setValue: M.j7.updateSetting,
    }),
    tV = (0, E.zD)(h.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t.c0oFDw),
        useValue: M.BQ.useSetting,
        setValue: M.BQ.updateSetting,
    }),
    tk = (0, E.zD)(h.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.AqGrEI),
        useValue: M.SI.useSetting,
        setValue: (e) => {
            (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                M.SI.updateSetting(e));
        },
    });
var tw = n(793574);
let tF = (0, E.zD)(h.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t["d+It2U"]),
        useValue: M.ML.useSetting,
        setValue: (e) => {
            (td.default.track(I.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tw.A.TEXT_AND_IMAGES],
            }),
                M.ML.updateSetting(e));
        },
    }),
    tB = (0, E.zZ)(h.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ob7VMB),
        useSearchTerms: () => [U.intl.string(U.t.onqU6o)],
        buildLayout: () => [tk, tU, tF, tV, tv, tG],
    });
var tz = n(526162),
    tY = n(793943),
    tX = n(792656),
    tH = n(830543),
    tW = n(785007),
    tK = n(806932),
    tZ = n(915089),
    tq = n(10392),
    tQ = n(82498),
    tJ = n(174197),
    t$ = n(202541);
let t0 = (0, E.E2)(h.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [U.intl.string(U.t.gnwxvT)],
    Component: function () {
        let e = (0, tZ.GV)(),
            { ref: t, ...n } = (0, tW._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, f.bG)([tz.A], () => tz.A.isUpsellPreview);
        return (
            (0, K.Ay)(() => {
                i &&
                    (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t$.e.APP_ICON_UPSELL,
                        location_stack: [tw.A.USER_SETTINGS],
                    }),
                    (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tw.A.USER_SETTINGS], () =>
                        (0, tQ.uq)(t$.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, S.jsx)("div", {
                ...n,
                ref: t,
                children: (0, S.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, S.jsx)(tK.m, { disabled: i, size: tJ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t1() {
    ((0, tY.nf)(tY.HP.APP_ICON), (0, tH.default)());
}
function t2() {
    return (0, S.jsx)(tX.A, {
        subscriptionTier: t$.pe.TIER_2,
        defaultTextOverride: U.intl.string(U.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t3 = (0, E.zZ)(h.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RPh2ou),
        useSubtitle: () => U.intl.string(U.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([tz.A], () => tz.A.isUpsellPreview);
            return T.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: p.UV.BUTTON,
                        text: U.intl.string(U.t["6acvnZ"]),
                        onClick: t1,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t2 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t0],
    }),
    t5 = (0, E.AK)(h.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.UDr3Iy),
        useSearchTerms: () => [U.intl.string(U.t.UDr3Iy)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    t6 = (0, E.gN)(h.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t5] });
var t4 = n(452027),
    t8 = n(193249),
    t7 = n(976860),
    t9 = n(16236),
    ne = n(635233),
    nt = n(749884),
    nn = n(22277);
let ni = eC.A.getArticleURL(I.MVz.FAVORITES_GUILD);
function ns() {
    let { analyticsLocations: e } = (0, ez.Ay)(tw.A.USER_SETTINGS_FAVORITES),
        t = T.useCallback(() => {
            ((0, ne.mv)("settings_page"), (0, t7.uh)(I.YYv), (0, tH.default)());
        }, []);
    return (0, S.jsx)(ez.f5, {
        value: e,
        children: (0, S.jsx)(t4.D, {
            label: U.intl.string(nn.default.OT1NK5),
            description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, S.jsx)(v.$, { variant: "secondary", text: U.intl.string(nn.default["7WwLnr"]), onClick: t }),
                    (0, S.jsx)(tX.A, {
                        subscriptionTier: t$.pe.TIER_2,
                        defaultTextOverride: U.intl.string(nn.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let nl = (0, E.E2)(h.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, tr.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [U.intl.string(nn.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, tr.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, nt.A)(!1);
            return e
                ? (0, S.jsx)(t8.d, {
                      checked: t,
                      description: U.intl.format(nn.default.GR2KOG, { helpCenterLink: ni }),
                      onChange: t9.kG,
                      label: U.intl.string(nn.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, S.jsx)(ns, {});
        },
    }),
    nr = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => U.intl.string(U.t.U47N1p),
        useValue: M.hD.useSetting,
        setValue: M.hD.updateSetting,
    }),
    na = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => U.intl.string(U.t.VP11No),
        useValue: M.X6.useSetting,
        setValue: M.X6.updateSetting,
    }),
    no = (0, E.FW)(h.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => U.intl.string(U.t["9nyle0"]),
        buildLayout: () => [nr, na],
    }),
    nu = (0, E.zD)(h.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => U.intl.string(U.t["5bK9vw"]),
        useValue: M.rs.useSetting,
        setValue: M.rs.updateSetting,
    }),
    nd = (0, E.zD)(h.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => U.intl.string(U.t["zge/fP"]),
        useValue: M.jW.useSetting,
        setValue: M.jW.updateSetting,
    });
var nc = n(28863),
    ng = n(766075);
let nm = (0, E.zD)(h.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => U.intl.string(U.t.JgjNG3),
        useSubtitle: () => {
            if (!M.hH.useSetting())
                return U.intl.format(U.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, S.jsx)(
                            nc.Anchor,
                            {
                                onClick: () => (0, ng.openUserSettings)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
    nA = (0, E.Hn)(h.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => U.intl.string(U.t.QgwmVz),
        useOptions: () => [
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: U.intl.string(U.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: U.intl.string(U.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: U.intl.string(U.t.K5VTBE) },
        ],
        useValue: M.gs.useSetting,
        setValue: M.gs.updateSetting,
    }),
    nE = (0, E.zD)(h.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => U.intl.string(U.t.AInv5m),
        useValue: M.SY.useSetting,
        setValue: M.SY.updateSetting,
    }),
    nh = (0, E.zZ)(h.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.OIgYlQ),
        useSearchTerms: () => [U.intl.string(U.t["/VQax8"])],
        buildLayout: () => [no, nu, nd, nA, nE, nm, nl, t6],
    });
var nx = n(753806),
    np = n(145331);
let nS = (0, E.Qx)(h.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            (t ? nx.A.cleanUpPrivateChannelSearchState() : nx.A.cleanUpSearchState({ type: I.I4_.DMS }),
                (0, np._k)({
                    prevIsCrossDMSettingEnabled: M.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: np.vy.USER_SETTINGS,
                }),
                M.Hu.updateSetting(t));
        },
    }),
    nT = (0, E.zZ)(h.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5h0QOP"]),
        buildLayout: () => [nS],
    });
var nf = n(574381);
let nI = (0, E.zD)(h.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.IxjaoF),
        useValue: function () {
            return (0, f.bG)([tu.A], () => {
                let { autoToggle: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nf.Av;
        },
    }),
    n_ = (0, E.zD)(h.X.STREAMING_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.TGNg6T),
        useSubtitle: () => U.intl.string(U.t["4nXLnE"]),
        useValue: function () {
            return (0, f.bG)([tu.A], () => {
                let { enabled: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ enabled: e });
        },
    });
var nN = n(77729),
    nC = n(589051),
    ny = n(85395),
    nb = n(999834);
let nv = [],
    nj = (0, E.Hn)(h.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => U.intl.string(U.t.VCDSLW),
        useSearchTerms: () => [U.intl.string(U.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nb.b_)(),
                t = (0, nC.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return T.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(ny.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, f.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? nv);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nO = (0, E.zD)(h.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => U.intl.string(U.t.LSBUGR),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    nL = (0, E.zD)(h.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => U.intl.string(U.t.uWBOri),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nR = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => U.intl.string(U.t.OrqYDP),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nD = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sUAbLd),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nP = (0, E.zD)(h.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t["iA81+a"]),
        useSubtitle: () => U.intl.string(U.t.P4vj0h),
        useValue: () =>
            (0, f.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => nN.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nG = (0, E.FW)(h.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.xYhOEh),
        buildLayout: () => [nO, nL, nR, nD, nP, nj],
    }),
    nM = (0, E.zZ)(h.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.S5GfOW),
        buildLayout: () => [n_, nI, nG],
    });
var nU = n(147248),
    nV = n(141343),
    nk = n(665267),
    nw = n(414133),
    nF = n(98908);
let nB = (0, E.Hn)(h.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => U.intl.string(U.t.Q7mm4g),
        useSearchTerms: () => [U.intl.string(nF.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: U.intl.string(U.t["hrS/Pc"]), value: eQ.tI.GUILD },
            { id: "personal", label: U.intl.string(U.t.mlvXIq), value: eQ.tI.PERSONAL },
        ],
        useValue: () => M.zY.useSetting(),
        setValue: M.zY.updateSetting,
        usePredicate: () => (0, nw.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nz = (0, E.zD)(h.X.SYNC_PROFILE_THEMES, {
        useTitle: () => U.intl.string(U.t.C00w4l),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, eu.M1)(),
    });
var nY = n(817281),
    nX = n(284016),
    nH = n(363195);
let nW = (0, E.zD)(h.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => U.intl.string(U.t["/B+kEV"]),
    useSearchTerms: () => [U.intl.string(U.t.Ksh3ik)],
    useValue: function () {
        return (0, f.bG)([nX.A], () => !1 !== nX.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, f.bG)([nH.A], () => nH.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nH.A.theme,
            i = nU.A.gradientPreset?.id ?? null,
            s = M.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nY.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nK = n(393284);
let nZ = (0, E.AK)(h.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.nhVQDJ),
        useSearchTerms: () => [U.intl.string(U.t.nhVQDJ)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    nq = (0, E.gN)(h.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nZ] }),
    nQ = (0, E.zZ)(h.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, f.bG)([j.Ay], () => j.Ay.useForcedColors)
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eN.D)()
                          ? U.intl.format(U.t.Jae48E, {
                                onClick: () => {
                                    (0, ng.openUserSettings)(h.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : U.intl.string(U.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, f.bG)([nU.A, j.Ay], () => j.Ay.useForcedColors || nU.A.isPreview),
                t = (0, nV.V)();
            return e || t
                ? null
                : {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
                              text: U.intl.string(U.t["E+COuA"]),
                              onClick: nk.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nK.k, nW, nz, nB, nq],
    }),
    nJ = (0, E.t_)(h.X.APPEARANCE_PANEL, {
        initialize: function () {
            tl.A.isFetching() ||
                (ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                ti.Bo.get({ url: I.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        ts.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        buildLayout: () => [nQ, t3, nh, tB, nT, nM, tA],
    }),
    n$ = [
        { badgeType: p.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, S.jsx)(tc.JI, { text: U.intl.string(U.t.y2b7CA) });
            },
        },
    ],
    n0 = (0, E.i4)(h.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        icon: tt.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ta.A)(),
                s =
                    ((e = M.D_.useSetting()),
                    (t = M.SI.useSetting()),
                    e
                        ? null
                        : (0, S.jsx)(tn.sL, {
                              id: "preview-markdown-toggle",
                              label: U.intl.string(U.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      M.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, f.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, S.jsx)(tn.sL, {
                        id: "streamer-mode-toggle",
                        label: U.intl.string(U.t.p9ZAJZ),
                        action: () => {
                            to.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return T.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, S.jsx)(tn.rX, { label: U.intl.string(U.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, S.jsx)(tn.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, tr.ad)().isFreemium
                ? n$.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eA.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : n$,
        buildLayout: () => [nJ],
    });
var n1 = n(37646),
    n2 = n(434404);
let n3 = (0, E.t_)(h.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n2.F],
    }),
    n5 = (0, E.i4)(h.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n1.U,
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [n3],
    });
var n6 = n(3137),
    n4 = n(661531),
    n8 = n(314116),
    n7 = n(270003),
    n9 = n(939249),
    ie = n(369606),
    it = n(320448),
    ii = n(604121),
    is = n(725951),
    il = n(400492),
    ir = n(669067),
    ia = n(115063),
    io = n(754692),
    iu = n(927018),
    id = n(512599),
    ic = n(532197),
    ig = n(403362),
    im = n(874486),
    iA = n(503698),
    iE = n.n(iA),
    ih = n(536637),
    ix = n.n(ih),
    ip = n(58703),
    iS = n(906688),
    iT = n(98705);
function iI(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, iu.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ix()(n),
        m = null != o && s,
        A = m ? n9.D : "div";
    return (0, S.jsxs)(A, {
        className: iE()(iT.kL, m && iT.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, S.jsx)("div", {
                className: iT.zc,
                children: (0, S.jsx)(iS.A, { achievementId: t, size: iS.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, S.jsxs)("div", {
                className: iT.VW,
                children: [
                    null != n &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iT.YR,
                            children: (0, ip.mk)(g),
                        }),
                    (0, S.jsx)(Q.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, S.jsx)(Q.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var i_ = n(545744);
function iN(e) {
    let { onBackClick: t } = e,
        n = (0, f.bG)([im.A], () => im.A.getAllUnlockedAchievements()),
        i = T.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = T.useMemo(
            () =>
                Object.values(iu.l0)
                    .filter(ig.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)(n9.D, {
                onClick: t,
                className: i_.vv,
                children: [
                    (0, S.jsx)(ic.A, { direction: ic.A.Directions.LEFT, className: i_.Kk }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["13/7kX"]),
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: i_.N1,
                children: [
                    (0, S.jsxs)("div", {
                        className: i_.if,
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
                        className: i_.nr,
                        children: (0, S.jsx)(ie.TrophyIcon, {
                            size: "custom",
                            color: n4.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, S.jsx)("div", {
                    className: i_.yF,
                    children: (0, S.jsx)("div", {
                        className: i_.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, S.jsx)(iI, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, S.jsxs)("div", {
                    className: i_.yF,
                    children: [
                        (0, S.jsx)("div", {
                            className: i_.if,
                            children: (0, S.jsx)(Q.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: U.intl.string(U.t.GFyMg1),
                            }),
                        }),
                        (0, S.jsx)("div", {
                            className: i_.Eh,
                            children: s.map((e) => (0, S.jsx)(iI, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, S.jsx)("div", { className: i_.yF, children: (0, S.jsx)("div", { className: i_.F3 }) }),
        ],
    });
}
var iC = n(224964),
    iy = n(31408),
    ib = n(368588);
let iv = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ij = (0, H.range)(0, 11),
    iO = (0, H.range)(0, 2.25, 0.25),
    iL = (0, H.range)(1, 11),
    iR = (0, H.range)(1, 26),
    iD = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iP(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, S.jsx)(
                t8.d,
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
    return (0, S.jsx)(n7.n, { label: U.intl.string(U.t.bWVN1D), children: l });
}
function iG(e) {
    let { children: t } = e;
    return (0, S.jsx)(Q.E, { className: ib.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iM(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    return (0, S.jsx)(t8.d, {
        label: U.intl.string(U.t.vuiXm9),
        description: U.intl.string(U.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, io._)(iu.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n8.A)({
                          title: s ? U.intl.string(U.t["FxT+p0"]) : U.intl.string(U.t.TAZ4F9),
                          subtitle: s ? U.intl.string(U.t.gmixrx) : U.intl.string(U.t.jN3t3K),
                          confirmText: U.intl.string(U.t.JFfins),
                          onConfirm: () => i(s ? iv : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iU(e) {
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
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.mqxwJO),
        children: [
            (0, S.jsx)(t8.d, {
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
                        className: ib.KF,
                        children: U.intl.string(U.t.vd0D81),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.a18Sug) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iL,
                        stickToMarkers: !0,
                        minValue: iL[0],
                        maxValue: iL[iL.length - 1],
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
                        className: ib.KF,
                        children: U.intl.string(U.t.sPO3ij),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.xoldVn) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iR,
                        stickToMarkers: !0,
                        minValue: iR[0],
                        maxValue: iR[iR.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, S.jsx)(iP, {
                disabled: a,
                locations: [
                    {
                        location: iy.k.CHAT_INPUT,
                        title: U.intl.string(U.t.elTtyz),
                        description: U.intl.string(U.t.HtKfMi),
                    },
                    {
                        location: iy.k.REACTION,
                        title: U.intl.string(U.t.Ik4VIa),
                        description: U.intl.string(U.t.y4rqK0),
                    },
                    {
                        location: iy.k.MEMBER_USER,
                        title: U.intl.string(U.t.ZXBlAn),
                        description: U.intl.string(U.t["m9RD+c"]),
                    },
                    {
                        location: iy.k.CALL_TILE,
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
function iV(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.Xz0ole),
        children: [
            (0, S.jsx)(t8.d, {
                label: U.intl.string(U.t.o3iV7B),
                description: U.intl.string(U.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, S.jsx)(t8.d, {
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
                        className: ib.KF,
                        children: U.intl.string(U.t.L0oQuh),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t["/OOFpL"]) }),
                    (0, S.jsx)(q.A, {
                        disabled: r,
                        markers: ij,
                        stickToMarkers: !0,
                        minValue: ij[0],
                        maxValue: ij[ij.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function ik(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, S.jsxs)(n7.n, {
        label: U.intl.string(U.t.wVS5Sd),
        children: [
            (0, S.jsx)(t8.d, {
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
                        className: ib.KF,
                        children: U.intl.string(U.t.UxnnC4),
                    }),
                    (0, S.jsx)(iG, { children: U.intl.string(U.t.CEOEOb) }),
                    (0, S.jsx)(q.A, {
                        disabled: a,
                        markers: iO,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, io._)(iu.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === iO[iO.length - 1] ? U.intl.string(U.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, S.jsx)(iP, {
                disabled: a,
                locations: [
                    {
                        location: iy.uD.CHAT_INPUT,
                        title: U.intl.string(U.t.vUcvPP),
                        description: U.intl.string(U.t.y00OrF),
                    },
                    {
                        location: iy.uD.VOICE_USER,
                        title: U.intl.string(U.t.TcRO54),
                        description: U.intl.string(U.t.YJCxVY),
                    },
                    {
                        location: iy.uD.MENTION,
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
function iw(e) {
    let { updateSettings: t } = e;
    return (0, S.jsx)(n7.n, {
        label: U.intl.string(U.t.EuXv2q),
        children: (0, S.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["1SLnki"]) }),
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ib.hw,
                    children: (0, S.jsx)(v.$, {
                        variant: "primary",
                        size: "sm",
                        text: U.intl.string(U.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tH.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iF(e) {
    let { onChangePage: t } = e;
    return (0, S.jsxs)(n9.D, {
        onClick: function () {
            return t(1);
        },
        className: ib.Tq,
        children: [
            (0, S.jsx)("div", {
                className: ib.w1,
                children: (0, S.jsx)(ie.TrophyIcon, { size: "md", color: n4.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, S.jsxs)("div", {
                className: ib.qL,
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
            (0, S.jsx)(it._, { size: "custom", color: "currentColor", width: 16, className: ib.nT }),
        ],
    });
}
function iB() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iz(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, f.cf)([n6.A], () => n6.A.getState()),
        [s, l] = T.useState({ x: 0, y: 0 }),
        r = (0, iC.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, il.Ak)("poggermode_enabled"),
                (0, ia.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, id.O9)(e),
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
        1 === t && E && (0, ia.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
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
                (0, S.jsx)(iM, { settings: i, updateSettings: a }),
                (0, S.jsx)(iF, { onChangePage: t }),
                (0, S.jsx)(iV, { settings: i, updateSettings: a }),
                (0, S.jsx)(ik, { settings: i, updateSettings: a }),
                (0, S.jsx)(iU, { settings: i, updateSettings: a }),
                (0, S.jsx)(iw, { updateSettings: a }),
            ],
        })
    );
}
function iY(e) {
    return 0 === e ? is.f.LEFT : is.f.RIGHT;
}
let iX = (0, E.E2)(h.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = T.useState(0),
                [n, i] = T.useState(iY(e)),
                [s, l] = T.useState(!1),
                r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
                a = s && !r;
            return (
                T.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iY(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                T.useEffect(() => {
                    (0, ir._)(iD[e]);
                }, [e]),
                T.useEffect(() => {
                    Math.random() > 0.99 && (0, io._)(iu.sn.VISITOR_100);
                }, []),
                (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(is.A, {
                            className: ib.l3,
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
                                        return (0, S.jsx)(iz, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, S.jsx)(iN, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, S.jsx)("div", {
                            className: a ? ib.Sr : ib.IP,
                            children: (0, S.jsx)(ii.a, {
                                className: ib.gT,
                                importData: iB,
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
    iH = (0, E.zZ)(h.X.POGGERMODE_CATEGORY, { buildLayout: () => [iX] });
var iW = n(212043);
let iK = (0, E.t_)(h.X.POGGERMODE_PANEL, { useTitle: () => U.intl.string(U.t.AtCukI), buildLayout: () => [iH] }),
    iZ = (0, E.i4)(h.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AtCukI),
        icon: () => (0, S.jsx)("img", { alt: "", src: n(724405), className: iW.$ }),
        usePredicate: () => (0, f.bG)([n6.A], () => n6.A.settingsVisible),
        buildLayout: () => [iK],
    });
var iq = n(307301),
    iQ = n(410767),
    iJ = n(683071),
    i$ = n(97260),
    i0 = n(710195),
    i1 = n(57757),
    i2 = n(188321),
    i3 = n(695366),
    i5 = n(812729),
    i6 = n.n(i5),
    i4 = n(587895),
    i8 = n(429913),
    i7 = n(616356),
    i9 = n(952818);
function se(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function st() {
    let e = (0, f.bG)([i7.A], () => i7.A.getStreamerActiveStreamMetadata()),
        t = (0, f.bG)(
            [i9.Ay],
            () => {
                let e = i9.Ay.getVisibleGame();
                return null != e ? i9.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i6(),
        ),
        [n] = (0, i8.A)([se(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var sn = n(769015),
    si = n(192820),
    ss = n(935671),
    sl = n(435075);
function sr(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, S.jsx)("div", {
              className: sl.zc,
              children: (0, S.jsx)(i3.E, { size: "sm", color: n4.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, S.jsxs)("div", {
              className: sl.nt,
              children: [
                  (0, S.jsx)(sn.A, { game: n, pid: t.pid, size: sn.M.MEDIUM }),
                  (0, S.jsx)("div", {
                      className: sl.Am,
                      children: (0, S.jsx)(i3.E, { size: "sm", color: n4.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function sa(e) {
    let t = (0, f.bG)([si.Ay], () => si.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = st();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, ss.NP)(),
        l = s && null != n && t === I.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function so(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = sa(n);
    return i
        ? (0, S.jsxs)("div", {
              className: iE()(sl.kL, t),
              children: [
                  (0, S.jsx)(sr, { game: s, application: l }),
                  (0, S.jsxs)("div", {
                      className: sl.FS,
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
                          (0, ss.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var su = n(404778),
    sd = n(691885),
    sc = n(408278),
    sg = n(241326),
    sm = n(866665),
    sA = n(140735),
    sE = n(489718),
    sh = n(635242),
    sx = n(350535),
    sp = n(189213),
    sS = n(192308),
    sT = n(95477),
    sf = n(320989),
    sI = n(978263);
let s_ = [];
var sN = n(235986),
    sC = n(484734),
    sy = n(734057),
    sb = n(808728),
    sv = n(71393),
    sj = n(967198),
    sO = n(926140),
    sL = n(847893);
function sR() {}
let sD = [sO.rD.VOICE_CHANNEL];
function sP(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sG() {
    return (0, S.jsx)("div", {
        className: sL.i1,
        children: (0, S.jsx)(Q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sL.GN,
            children: U.intl.string(U.t.zHjCd1),
        }),
    });
}
function sM(e) {
    let { keybind: t, className: n } = e,
        i = T.useRef(t);
    T.useEffect(() => {
        i.current = t;
    });
    let [s, l] = T.useState(t.params?.channelId ?? void 0),
        r = T.useCallback(() => {
            (0, sS.openModalLazy)(
                async () => (e) =>
                    (0, S.jsx)(sU, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), i$.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, S.jsx)("div", {
        className: iE()(sL.a8, n),
        children: (0, S.jsx)(t4.D, {
            label: U.intl.string(U.t.q4JpM8),
            children: (0, S.jsxs)(sN.A, {
                align: sN.A.Align.STRETCH,
                children: [
                    (0, S.jsx)("div", { className: sL.$X, children: (0, S.jsx)(sV, { channelId: s }) }),
                    (0, S.jsx)(sN.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sU(e) {
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
                [a, o] = T.useState(s_),
                u = T.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(s_) : o(e);
                }, []);
            T.useEffect(
                () =>
                    sf.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = T.useState(() => new sI.A(u, n, void 0, i));
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
        })({ visible: !0, autocompleterResultTypes: sD, autocompleterBeforeCreateSearchContext: sP }),
        c =
            ((t = "" !== o),
            (n = (0, f.yK)(
                [sb.Ay, sy.A, sj.A],
                () => {
                    let e = sj.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sb.Ay.getVocalChannelIds(e)) {
                        let e = sy.A.getChannel(t);
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
            if (e?.type === sO.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === sO.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sy.A.getChannel(n.parent_id) : void 0,
                              r = sv.A.getGuild(n.guild_id);
                          return (0, S.jsx)(
                              sC.c3,
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
                                      null != r ? (0, S.jsx)("div", { className: sL.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, S.jsx)(sG, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, S.jsx)(sp.a, {
        transitionState: i,
        onClose: s,
        title: U.intl.string(U.t.Dm8O4e),
        subtitle: U.intl.string(U.t.q4JpM8),
        actions: void 0,
        input: (0, S.jsx)(sT.k, {
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
                                if (e?.type === sO.rD.VOICE_CHANNEL) return e.record;
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
function sV(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, f.cf)([sy.A, sv.A], () => {
            let e = null != t ? sy.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sy.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sv.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, S.jsx)(Q.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sL.GN,
              children: U.intl.string(U.t["/fYIK7"]),
          })
        : (0, S.jsx)(sC.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sR,
              onFocus: sR,
              onMouseEnter: sR,
              focused: !1,
              children: null != s ? (0, S.jsx)("div", { className: sL.J5, children: s.name }) : null,
          });
}
var sk = n(650583),
    sw = n(94451);
function sF(e) {
    let { keybind: t } = e,
        n = sx.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, S.jsx)("div", {
              className: sw.$e,
              children: (0, S.jsx)(iJ.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sk.Yy.has(n)
          ? (0, S.jsx)("div", {
                className: sw.$e,
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
function sB(e) {
    let { keybind: t } = e;
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, S.jsx)(sM, { keybind: t, className: sw._M }) : null;
}
let sz = T.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = T.useCallback((e) => i$.A.setKeybind({ ...t, action: e }), [t]),
        l = T.useCallback((e) => i$.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = T.useCallback(() => i$.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = T.useCallback(() => i$.A.deleteKeybind(t.id), [t.id]),
        o = T.useId(),
        u = T.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, S.jsxs)("div", {
        className: sw.f_,
        children: [
            (0, S.jsx)(sF, { keybind: t }),
            (0, S.jsx)("div", {
                className: sw.XI,
                children: (0, S.jsx)(sd.l, {
                    selectionMode: "single",
                    label: U.intl.string(U.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, S.jsx)("div", {
                className: sw.LE,
                children: (0, S.jsx)(t4.D, {
                    label: U.intl.string(U.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, S.jsx)(sh.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, S.jsxs)("div", {
                className: sw.ne,
                children: [
                    !t.managed &&
                        (0, S.jsx)(sc.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sg.TrashIcon,
                            "aria-label": U.intl.string(U.t.qEHmmB),
                        }),
                    (0, S.jsx)(sm.m, {
                        text: U.intl.string(t.enabled ? U.t.pNYGbx : U.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(sA.A, {
                                    id: o,
                                    children: U.intl.format(t.enabled ? U.t["myr/Y0"] : U.t.lYhtPO, { actionName: u }),
                                }),
                                (0, S.jsx)(sE.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sw.h_,
                children: n[t.action],
            }),
            (0, S.jsx)(sB, { keybind: t }),
        ],
    });
});
var sY = n(696760),
    sX = n(734066),
    sH = n(880144),
    sW = n(950869),
    sK = n(532624),
    sZ = n(731854),
    sq = n(603933);
let sQ = function () {
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
            } = ((e = (0, f.bG)([sK.Ay], () => sK.Ay.getState())),
            (t = (0, f.bG)([si.Ay], () => (0, sH.A)(si.Ay))),
            (n = (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.VIDEO))),
            (i = (0, f.bG)([sW.A], () => sW.A.isSupported)),
            (s = (0, sX.sw)()),
            (l = (0, sX.BW)()),
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
                    allowSoundboard: (r = (0, e4.isWindows)()),
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
                            ((0, e4.isWindows)() || si.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: I.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: U.intl.string(U.t.ybdjJD),
                            }),
                        (0, e4.isDesktop)() &&
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
                        n && (0, e4.isWindows)() && (r[I.hCu.TOGGLE_GO_LIVE_STREAMING] = U.intl.string(U.t.s4C238)),
                        (0, e4.isDesktop)() &&
                            ((r[I.hCu.NAVIGATE_BACK] = U.intl.string(U.t.nKDlEt)),
                            (r[I.hCu.NAVIGATE_FORWARD] = U.intl.string(U.t.DK0FFk)),
                            (r[I.hCu.SOUNDBOARD] = (0, e4.isWindows)()
                                ? U.intl.string(U.t["5wJefL"])
                                : U.intl.string(U.t.gzjsSP)),
                            (r[I.hCu.SOUNDBOARD_HOLD] = (0, e4.isWindows)()
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
                  className: sq.A,
                  children: a.map((e, t) =>
                      (0, S.jsxs)(
                          T.Fragment,
                          {
                              children: [
                                  (0, S.jsx)(sz, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, S.jsx)(su.c, { className: sq.y, gap: 24 }) : null,
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
            return nf.Av
                ? (0, S.jsx)(sQ, {})
                : (0, S.jsx)(iJ.w, {
                      type: "info",
                      message: U.intl.format(U.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "static",
                  });
        },
    });
var s$ = n(475358),
    s0 = n(28647),
    s1 = n(793650);
function s2(e) {
    let { children: t } = e;
    return t([sY.Q_.MESSAGE, sY.Q_.NAVIGATION, sY.Q_.DND, sY.Q_.CHAT, sY.Q_.VOICE_AND_VIDEO, sY.Q_.MISCELLANEOUS]);
}
function s3(e) {
    let { showHeader: t = !0 } = e,
        n = W()((0, sY.Bx)())
            .filter((e) => e.description !== U.intl.string(U.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, S.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, S.jsx)(n7.n, {
                label: t ? U.intl.string(U.t.Lz5KHI) : void 0,
                children: (0, S.jsx)("div", {
                    className: s1.jh,
                    children: (0, S.jsxs)("div", {
                        className: s1.yZ,
                        children: [
                            (0, S.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.sMWLBj) }),
                            (0, S.jsx)("div", {
                                className: s1.DM,
                                children: (0, S.jsx)(s$.e, { shortcut: s0.z.binds["0"], className: s1.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, S.jsx)(s2, {
                children: (e) =>
                    (0, S.jsx)(S.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sY.Gm)(e),
                                s = (0, sY.zF)(e),
                                l = n[e];
                            return (0, S.jsx)(
                                n7.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, S.jsx)("div", {
                                        className: s1.jh,
                                        children: l.map((e, t) =>
                                            (0, S.jsxs)(
                                                T.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, S.jsx)(su.c, {}),
                                                        (0, S.jsxs)("div", {
                                                            className: s1.yZ,
                                                            children: [
                                                                (0, S.jsx)(Q.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, S.jsx)("div", {
                                                                    className: s1.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, S.jsx)(
                                                                            s$.e,
                                                                            { shortcut: e, className: s1.LE },
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
let s5 = (0, E.E2)(h.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.Lz5KHI)],
        Component: () => (0, S.jsx)(s3, { showHeader: !1 }),
    }),
    s6 = (0, E.zD)(h.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => U.intl.string(eL.default.rea2Ar),
        useSubtitle: () => U.intl.string(eL.default.DwBO0x),
        useValue: () => (0, f.bG)([i2.A], () => i2.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i2.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var s4 = n(19575),
    s8 = n(546385);
let s7 = (0, E.E2)(h.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nf.Av && !(0, nf.cX)(),
    useSearchTerms: () => [U.intl.string(U.t["/HIxyY"]), U.intl.string(U.t.B0hqpb)],
    Component: function () {
        let [e] = T.useState(() => s4.Ay.getEnableHardwareAcceleration()),
            t = U.intl.string(U.t["/HIxyY"]),
            n = U.intl.string(U.t.B0hqpb);
        return (0, S.jsxs)(Z.B, {
            children: [
                (0, S.jsx)(t8.d, { label: t, description: n, checked: e, onChange: s9 }),
                !e && (0, S.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.j7S6IX) }),
            ],
        });
    },
});
function s9(e) {
    let t = e ? U.intl.format(U.t.LYXRxL, {}) : U.intl.format(U.t.uDP3Kz, {});
    (0, n8.A)({
        title: U.intl.string(U.t.aqpAvn),
        subtitle: t,
        confirmText: U.intl.string(U.t.vT7ckk),
        onConfirm: () => {
            s4.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let le = (0, e_.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lt() {
    let e = await s4.Ay.getOpenOnStart(),
        t = await s4.Ay.getSetting("START_MINIMIZED", !1),
        n = await s4.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    le.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let ln = (0, E.zD)(h.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => U.intl.string(U.t["3BeZti"]),
        usePredicate: () => nf.Av && !(0, nf.cX)(),
        useValue: () => le.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (le.setState({ openOnStartup: e }), s4.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            s4.Ay.getOpenOnStart().then((e) => le.setState({ openOnStartup: e }));
        },
    }),
    li = (0, E.zD)(h.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => U.intl.string(U.t.dJ5MUh),
        useSubtitle: () => U.intl.string(U.t.nQavHr),
        usePredicate: () => nf.Av && !(0, nf.cX)(),
        useValue: () => le.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (le.setState({ minimizeToTray: e }), s4.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            s4.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => le.setState({ minimizeToTray: e }));
        },
    }),
    ls = (0, E.zD)(h.X.OS_START_MINIMIZED, {
        useTitle: () => U.intl.string(U.t.GfBL83),
        useSubtitle: () => U.intl.string(U.t.XGyhhc),
        usePredicate: () => (0, nf.uF)(),
        useValue: () => le.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (le.setState({ startMinimized: e }), s4.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !le.useState((e) => e.openOnStartup),
        initialize: () => {
            s4.Ay.getSetting("START_MINIMIZED", !1).then((e) => le.setState({ startMinimized: e }));
        },
    });
var ll = n(61628);
let lr = new Set(["failure", "unknown"]),
    la = (0, E.E2)(h.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [U.intl.string(U.t.roHq80)],
        Component: function () {
            let [e, t] = T.useState(!1),
                [n, i] = T.useState(() => (0, ss.TC)()),
                s = (0, f.bG)([i9.Ay], () => i9.Ay.getSystemServiceStatus("input-service")),
                l = T.useCallback(async () => {
                    (t(!0),
                        n ? await (0, ss.z8)("windows-settings") : await (0, ss.sL)("windows-settings"),
                        t(!1),
                        i((0, ss.TC)()));
                }, [n]);
            return (0, S.jsxs)("div", {
                className: ll.q,
                children: [
                    (0, S.jsxs)("div", {
                        className: ll.L,
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
                                                            : lr.has(s.state)
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
                                                                (0, ig.xb)(e.state);
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
        usePredicate: ss.XQ,
    });
var lo = n(687813),
    lu = n(562708),
    ld = n(858899),
    lc = n(451704);
async function lg() {
    try {
        await lm();
    } catch {
        (0, ld.P0)({ text: U.intl.string(U.t["8ihs9i"]), variant: "critical" });
    }
}
async function lm() {
    var e;
    let t = nN.A.tracing;
    if (null == t) return;
    (0, ld.P0)({ text: U.intl.string(U.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nN.A.processUtils.getSystemInfo(),
            nN.A.processUtils.getSystemMetrics((0, lc.getIsNativeSystemCpuTimesEnabled)()),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, lu.getSuperProperties)(),
            native_build_number: nN.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nN.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nN.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, lo._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, lo._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, lo.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nN.A.fileManager.showItemInFolder(u), (0, ld.P0)({ text: U.intl.string(U.t.gpCRFS), variant: "success" }));
}
let lA = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => U.intl.string(U.t.o6Qr6n),
    useSubtitle: () => U.intl.string(U.t.OuGtH8),
    useLabel: () => U.intl.string(U.t.bm1WjO),
    usePredicate: () => nf.Av && nN.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n8.A)({
            title: U.intl.string(U.t.o6Qr6n),
            subtitle: U.intl.string(U.t.JEHHJ1),
            confirmText: U.intl.string(U.t.bm1WjO),
            onConfirm: () => {
                ((0, tH.default)(), lg());
            },
        });
    },
});
function lE() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lh = n(287809);
let lx = (0, E.Tf)(h.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lE();
    },
});
var lp = n(114129),
    lS = n(442325),
    lT = n(858760);
let lf = (0, E.zD)(h.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        usePredicate: () => lT.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nf.xl)(),
        useValue: () => (0, f.bG)([lS.A], () => lS.A.isUserOptedIn()),
        setValue: lp.lj,
    }),
    lI = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lx, lA, lf],
    }),
    l_ = (0, E.zZ)(h.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t.cg6ltt),
        buildLayout: () => [ln, ls, li, s7],
        usePredicate: () => nf.Av && ((0, nf.uF)() || (0, nf.j9)()),
        initialize: () => {
            lt();
        },
    }),
    lN = (0, E.zZ)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["069nVT"]),
        useSubtitle: () => U.intl.string(U.t.T4LZVL),
        buildLayout: () => [sJ],
        initialize: () => (i$.A.enableAll(!1), () => i$.A.enableAll(!0)),
        useInlineNotice: function () {
            return nf.Av
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
                                  (0, S.jsx)(so, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nf.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
                              text: U.intl.string(U.t.zk6Xbs),
                              variant: "secondary",
                              icon: iq.j,
                              onClick: () => i$.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lC = (0, E.zZ)(h.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Lz5KHI),
        buildLayout: () => [s5],
    }),
    ly = (0, E.zZ)(h.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+XZgmA"]),
        usePredicate: () => nf.Av && ((0, nf.uF)() || (0, nf.j9)()),
        buildLayout: () => [la],
    }),
    lb = (0, E.zZ)(h.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => U.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, f.bG)(
                [i2.A, i0.A],
                () =>
                    e4.isPlatformEmbedded &&
                    i2.A.hasDetectedGame &&
                    (0, i1.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s6],
    }),
    lv = (0, E.t_)(h.X.SYSTEM_PANEL, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        buildLayout: () => [l_, lN, lC, ly, lb, lI],
    }),
    lj = (0, E.i4)(h.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        icon: iQ.F,
        buildLayout: () => [lv],
    });
var lO = n(831544),
    lL = n(922795),
    lR = n(212245),
    lD = n(329551),
    lP = n(285918),
    lG = n(312987),
    lM = n(952572),
    lU = n(382003);
let lV = (0, E.E2)(h.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.lZTUPs)],
        usePredicate: lM.A,
        Component: function () {
            let e = (0, lR.p)(),
                t = T.useRef(!1),
                n = (0, f.bG)([si.Ay], () => si.Ay.getVideoDeviceId()),
                [i, s] = T.useState((0, lD.i)(lh.default.getCurrentUser())),
                l = T.useRef(i);
            return (
                T.useEffect(
                    () => () => {
                        t.current && (0, lP._C)(l.current);
                    },
                    [],
                ),
                (0, S.jsx)(lU.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lG.gB)(n, { location: e.location }).catch(I.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lk = (0, E.zD)(h.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => U.intl.string(U.t["3Ppr1h"]),
        useSubtitle: () => U.intl.string(U.t.WNbX4O),
        useValue: M.bm.useSetting,
        setValue: (e) => {
            (M.bm.updateSetting(e), td.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lw = n(625841),
    lF = n(74848),
    lB = n(204050);
let lz = (0, e_.D)(() => ({ previewEnabled: !1 })),
    lY = (0, E.E2)(h.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.FsQ3OR)],
        Component: function () {
            let e = (0, f.bG)([si.Ay], () => si.Ay.isVideoAvailable()),
                { id: t } = (0, lF.x5)(sZ.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, S.jsx)(lw.U, {
                label: U.intl.string(U.t.FsQ3OR),
                deviceType: sZ.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lB.p)()
                    ? U.intl.format(U.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lz.setState({ previewEnabled: !1 }),
                                  window.open((0, lB.i)(t)),
                                  td.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lX = n(745317),
    lH = n(9219);
let lW = (0, E.E2)(h.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [U.intl.string(U.t.JIf4v7)],
        Component: function () {
            let e = si.Ay.getCameraComponent(),
                t = (0, f.bG)([si.Ay], () => si.Ay.getVideoDeviceId()),
                n = lz.useField("previewEnabled"),
                i = (0, f.bG)([si.Ay], () => si.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lz.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, S.jsx)("div", {
                      className: lH.T9,
                      children: (0, S.jsxs)("div", {
                          className: lH.Xi,
                          children: [
                              (0, S.jsxs)("div", {
                                  className: lH.UI,
                                  children: [
                                      (0, S.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, S.jsx)(lX.kE, {}),
                                  ],
                              }),
                              (0, S.jsx)(lX.eK, {}),
                          ],
                      }),
                  })
                : (0, S.jsx)("div", {
                      className: lH.T9,
                      children: (0, S.jsx)(sm.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, S.jsx)(v.$, {
                              variant: "primary",
                              text: U.intl.string(U.t.JIf4v7),
                              onClick: () => lz.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lK = (0, E.zZ)(h.X.CAMERA_CATEGORY, {
        useTitle: () => U.intl.string(U.t.uje3P9),
        usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.VIDEO)),
        buildLayout: () => [lW, lk, lY, lV],
    });
var lZ = n(827343);
let lq = (0, E.zD)(h.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => U.intl.string(U.t.qFphsa),
        useSubtitle: () => U.intl.string(U.t.cQfwyY),
        usePredicate: function () {
            return (0, nf.j9)();
        },
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lZ.default.setOpenH264Enabled(e),
                (0, n8.A)({
                    title: U.intl.string(U.t["9jf31O"]),
                    subtitle: U.intl.string(U.t["J2wg+X"]),
                    confirmText: U.intl.string(U.t.BddRzS),
                    onConfirm: () => nN.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lQ = (0, E.zD)(h.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => U.intl.string(U.t["r6K+TL"]),
        useSubtitle: () => U.intl.string(U.t["xl9+I6"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAecDump());
        },
        setValue: lZ.default.setAecDump,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAecDumpSupported());
        },
    });
var lJ = n(139033),
    l$ = n(862482),
    l0 = n(640238),
    l1 = n(825484),
    l2 = n(144009),
    l3 = n(487329),
    l5 = n(353835);
let l6 = (0, e_.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l4() {
    let e = await nN.A.fileManager.getLogPath();
    nN.A.fileManager.showItemInFolder(e);
}
function l8(e) {
    (0, n8.A)({
        title: U.intl.string(U.t["7UXEF2"]),
        subtitle: U.intl.string(U.t.IYPrRl),
        confirmText: U.intl.string(U.t.BddRzS),
        onConfirm: () => lZ.default.setDebugLogging(e),
    });
}
async function l7(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await si.Ay.getMediaEngine().writeAudioDebugState(),
            await l5.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l2.a)(I.Umv.RTC),
            (e = U.intl.string(U.t["fKBB8+"])),
            (t = U.intl.string(U.t.BvyxE7)),
            (0, lJ.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = U.intl.string(U.t.QZg0J7)),
            (t = i ?? U.intl.string(U.t.VzHcSm)),
            (n = (0, l3.B1)(l3.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = U.intl.formatToPlainString(U.t.ejOT95, { errorCode: n })),
            (0, sS.openModal)((n) =>
                (0, S.jsx)(l0.a, {
                    header: e,
                    confirmButtonColor: l$.$n.Colors.BRAND,
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
async function l9() {
    await l7({
        onUploadStart: () => l6.setState({ isUploading: !0 }),
        onUploadFinish: () => l6.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let re = (0, E.E2)(h.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [U.intl.string(U.t["726JHL"]), U.intl.string(U.t.EbwFfR), U.intl.string(U.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.DEBUG_LOGGING));
        return nf.Av && e && null != nN.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.getDebugLogging()),
            t = l6.useField("isUploading"),
            n = l6.useField("isDisabled"),
            i = T.useId();
        return (0, S.jsxs)("fieldset", {
            children: [
                (0, S.jsx)(sA.A, { tag: "legend", id: i, children: U.intl.string(U.t["FjN+et"]) }),
                (0, S.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, S.jsx)(t8.d, {
                            label: U.intl.string(U.t["726JHL"]),
                            description: U.intl.string(U.t["/7ak9Q"]),
                            checked: e,
                            onChange: l8,
                        }),
                        (0, S.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, S.jsxs)(l1.e, {
                                children: [
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: l9,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, S.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.nuPtYi),
                                        onClick: l4,
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
var rt = n(233545),
    rn = n(58663),
    ri = n(412780);
function rs() {
    return (0, f.bG)([lh.default, si.Ay], () => {
        let e = lh.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s4.Ay.releaseChannel || "development" === s4.Ay.releaseChannel,
            i = si.Ay.supports(sZ.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rl = (0, E.zD)(h.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.U4FgFK),
        useSubtitle: () => U.intl.string(U.t.Lm72RU),
        useValue: function () {
            return (0, f.bG)([ri.Ay], () => ri.Ay.shouldRecordNextConnection());
        },
        setValue: rn.A,
        usePredicate: rs,
    }),
    rr = (0, E.Tf)(h.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.nJnOHO),
        useLabel: () => U.intl.string(U.t["3xjX0U"]),
        onClick: rt.YW,
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
        buildLayout: () => [rd, lQ, rl, rr, re],
    });
function rg(e, t, n) {
    (0, n8.A)({ title: e, subtitle: t, confirmText: U.intl.string(U.t.BddRzS), onConfirm: n });
}
let rm = (0, E.Tf)(h.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => U.intl.string(U.t.SXfv1v),
        useSubtitle: () => U.intl.string(U.t["buA5/q"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        onClick: function () {
            rg(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), lZ.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rA = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [lq, rc, rm],
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
            let e = (0, f.yK)([sv.A], () => sv.A.getGuildIds()),
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
            return e4.isPlatformEmbedded;
        },
    }),
    rb = (0, E.zD)(h.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => U.intl.string(U.t.cUMdH0),
        useSubtitle: () => U.intl.string(U.t["6EjbvA"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lZ.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, f.bG)([si.Ay, rI.A], () => {
                let e = si.Ay.getInputDeviceId();
                return rI.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAutomaticGainControlSupported() && si.Ay.isInputProfileCustom());
        },
    }),
    rv = (0, E.sN)(h.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => U.intl.string(U.t.AlybXj),
        setValue: (e) =>
            lZ.default.setAttenuation(
                e,
                si.Ay.getAttenuateWhileSpeakingSelf(),
                si.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => si.Ay.getAttenuation(),
    }),
    rj = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => U.intl.string(U.t["9dHxRY"]),
        useValue: () => (0, f.bG)([si.Ay], () => si.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lZ.default.setAttenuation(si.Ay.getAttenuation(), e, si.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rO = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([si.Ay], () => si.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lZ.default.setAttenuation(si.Ay.getAttenuation(), si.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rL = (0, E.FW)(h.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.oSdBvW),
        useSubtitle: () => U.intl.string(U.t["0A/8Rt"]),
        usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.ATTENUATION)),
        buildLayout: () => [rv, rj, rO],
    }),
    rR = (0, E.zD)(h.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.DFPXIG),
        useSubtitle: () => U.intl.string(U.t["UyRX+C"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lZ.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.showBypassSystemInputProcessing() && si.Ay.isInputProfileCustom());
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
                nY.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rP = (0, E.zD)(h.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.BbESsg),
        useSubtitle: () => U.intl.string(U.t.LoOB1F),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => {
                let { vadUseKrisp: e } = si.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = si.Ay.getMode();
            lZ.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, f.bG)(
                [si.Ay],
                () => si.Ay.getMode() !== I.TBI.VOICE_ACTIVITY || !si.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isAdvancedVoiceActivitySupported() && si.Ay.isInputProfileCustom());
        },
    }),
    rG = (0, E.Hn)(h.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => U.intl.string(U.t.wVBHr0),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rg(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => lZ.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, f.cf)([si.Ay], () => ({
                legacyAudioSubsystemSupported: si.Ay.supports(sZ.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: si.Ay.supports(sZ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: si.Ay.supports(sZ.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return T.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sZ.rB.STANDARD, value: sZ.rB.STANDARD, label: U.intl.string(U.t.dqb2JZ) }]),
                    e && i.push({ id: sZ.rB.LEGACY, value: sZ.rB.LEGACY, label: U.intl.string(U.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sZ.rB.EXPERIMENTAL, value: sZ.rB.EXPERIMENTAL, label: U.intl.string(U.t.liQmtr) }),
                    n && i.push({ id: sZ.rB.AUTOMATIC, value: sZ.rB.AUTOMATIC, label: U.intl.string(U.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rM = (0, E.zD)(h.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => U.intl.string(U.t.uancuJ),
        useSubtitle: () => U.intl.string(U.t.I1Eoqq),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getQoS());
        },
        setValue: function (e) {
            lZ.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.QOS));
        },
    }),
    rU = (0, E.zD)(h.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => U.intl.string(U.t["4rsOPQ"]),
        useSubtitle: () => U.intl.string(U.t.jtiiCw),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lZ.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e4.isPlatformEmbedded;
        },
    }),
    rV = (0, E.bd)(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.KHsSWK) : U.intl.string(U.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            t_(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rb, rP, rR, ry, rU, rD, rL, rG, rM],
    }),
    rk = (0, E.zD)(h.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => U.intl.string(U.t.iWTwu6),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lZ.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, f.bG)([si.Ay, rI.A], () => {
                let e = si.Ay.getInputDeviceId();
                return rI.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom());
        },
    });
var rw = n(205693),
    rF = n(451988),
    rB = n(475883),
    rz = n(9761);
let rY = (0, tZ.Ld)();
function rX(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, S.jsx)("div", {
        role: "meter",
        className: iE()(rB.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, S.jsx)("div", { className: iE()(rB.Jx, rB.NU, { [rB.zY]: t && !r, [rB.r9]: r }) }),
    });
}
function rH(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([si.Ay], () => ({
            threshold: si.Ay.getModeOptions().threshold,
            autoThreshold: si.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([si.Ay], () => si.Ay.getMode());
    return (0, S.jsx)("section", {
        className: iE()(rB.Mo, rB.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, S.jsx)(q.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lZ.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n4.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n4.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rY,
            disabled: l,
            children: (0, S.jsxs)("div", {
                className: iE()(rB.NU, rB.TL, rB.Jx, rz.bar),
                children: [
                    (0, S.jsx)("div", { className: iE()(rB.GS, rB.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, S.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rW = (0, E.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [U.intl.string(U.t["sqUm+k"]), U.intl.string(U.t.I1Zuq0), U.intl.string(U.t.nuFtHH)],
    usePredicate: () => (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, f.cf)([si.Ay], () => ({
                autoThreshold: si.Ay.getModeOptions().autoThreshold,
                disabled: si.Ay.getMode() !== sZ.TB.VOICE_ACTIVITY,
            })),
            n = T.useCallback((e) => {
                let t = si.Ay.getMode(),
                    { threshold: n } = si.Ay.getModeOptions();
                lZ.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, f.bG)([si.Ay], () => si.Ay.supports(sZ.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = T.useState(-100),
                    [n, i] = T.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sZ.ME.VOICE) === sZ.ME.VOICE));
                }
                return (
                    T.useEffect(() => {
                        let e = new rF.Ep();
                        return (
                            e.start(1e3, () => {
                                (si.Ay.getMediaEngine().on(rw.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (si.Ay.getMediaEngine().removeListener(rw.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, f.bG)([si.Ay], () => si.Ay.isEnabled()),
            a = T.useMemo(
                () =>
                    !r &&
                    (0, S.jsx)("div", {
                        className: rB.B4,
                        children: (0, S.jsx)(iJ.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => lZ.default.enable(!0) }),
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
                      (0, S.jsx)(sA.A, { tag: "legend", id: u, children: U.intl.string(U.t.GByLar) }),
                      (0, S.jsx)(sA.A, { id: d, children: o }),
                      (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, S.jsx)(t8.d, {
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
                      (0, S.jsx)(t4.D, {
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
function rJ() {
    let e = (0, f.bG)([nH.A], () => (0, rK.q)(nH.A.theme));
    return (0, S.jsx)("img", { src: e ? rZ : rq, width: 48, height: 32, alt: "" });
}
let r$ = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.isInputProfileCustom() && si.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (lZ.default.setNoiseCancellation("KRISP" === e, rQ),
                    lZ.default.setNoiseSuppression("STANDARD" === e, rQ));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, f.cf)([si.Ay], () => ({
                noiseCancellation: si.Ay.getNoiseCancellation(),
                noiseSuppression: si.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: si.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: si.Ay.isNoiseCancellationSupported(),
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
                (0, S.jsx)(sd.l, {
                    label: U.intl.string(U.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, S.jsx)(rJ, {}),
            ],
        });
    },
});
var r0 = n(934729),
    r1 = n(621380);
let r2 = !nf.Av;
function r3() {
    return (0, f.bG)([si.Ay], () => si.Ay.getMode() === sZ.TB.PUSH_TO_TALK);
}
let r5 = (0, E.zD)(h.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nf.Av ? U.intl.string(U.t.tG4Np5) : U.intl.string(U.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, f.bG)([si.Ay], () => si.Ay.getMode());
        return T.useMemo(() => {
            if (!nf.Av && e === sZ.TB.PUSH_TO_TALK)
                return U.intl.format(U.t["VHI4+Y"], { onDownloadClick: () => (0, r0._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.getActiveInputProfile() !== r1.m.STUDIO);
    },
    useValue: function () {
        return (0, f.bG)([si.Ay], () => si.Ay.getMode() === sZ.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sZ.TB.PUSH_TO_TALK : sZ.TB.VOICE_ACTIVITY),
            (i = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sZ.TB.PUSH_TO_TALK &&
                r2 &&
                (0, sS.openModalLazy)(async () => {
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
            lZ.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
});
var r6 = n(484599);
let r4 = (0, E.E2)(h.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        usePredicate: r3,
        Component: function () {
            let e = (0, f.bG)([si.Ay], () => {
                    let { shortcut: e } = si.Ay.getModeOptions();
                    return e;
                }),
                t = U.intl.format(U.t.HVvn5T, {
                    onClick: () => (0, ng.openUserSettings)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, S.jsx)(t4.D, {
                label: U.intl.string(U.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: r6.e,
                    children: (0, S.jsx)(sh.A, {
                        defaultValue: e,
                        onChange: (e) => lZ.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    r8 = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            lZ.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: I.IjB,
        getInitialValue: function () {
            let { delay: e } = si.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r3,
    });
var r7 = n(201242),
    r9 = n(844981),
    ae = n(943679);
function at() {
    return (0, r9.Ay)("VoiceSettings");
}
let an = (0, E.zD)(h.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => U.intl.string(ae.default.LGDPhA),
        useSubtitle: function () {
            let e = at();
            if ((0, r9.Xt)(e))
                return e === r9.L3.BLOCKED_MONO_OUTPUT
                    ? U.intl.string(ae.default.rOXfEw)
                    : U.intl.string(ae.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, f.bG)([r7.A], () => r7.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lZ.default.setSpatialAudio(e, [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return at() !== r9.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, r9.Xt)(at());
        },
    }),
    ai = (0, E.Qx)(h.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => U.intl.string(U.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, r_._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH), U.intl.string(U.t.VZPR0R), U.intl.string(U.t.cjPbpT)],
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getActiveInputProfile() ?? r1.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lZ.default.setActiveInputProfile(e, { analyticsLocations: t });
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
    as = (0, E.zZ)(h.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, f.bG)([rI.A, si.Ay], () => {
                let e = si.Ay.getInputDeviceId();
                return (
                    (rI.A.hasEchoCancellation(e) || rI.A.hasNoiseSuppression(e) || rI.A.hasAutomaticGainControl(e)) &&
                    si.Ay.isInputProfileCustom()
                );
            });
            return T.useMemo(() => {
                if (e) return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [ai, rW, r$, rk, an, r5, r4, r8, rV],
    });
var al = n(403581),
    ar = n(512950),
    aa = n(983851),
    ao = n(687021),
    au = n(128450),
    ad = n(796774),
    ac = n(209932),
    ag = n(813564),
    am = n(984813),
    aA = n(922016),
    aE = n(305866),
    ah = n(22231),
    ax = n(158045),
    ap = n(792348),
    aS = n(674168),
    aT = n(511558),
    af = n(817232),
    aI = n(647451);
function a_(e) {
    let { onSelect: t } = e,
        [n, i] = T.useState(!1),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = ax.Ay.canUseCustomCallSounds(s),
        r = T.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, S.jsx)(aA.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, S.jsx)(aE.l, {
                children: (0, S.jsx)(aT.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, S.jsx)(aS.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, S.jsx)(af.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, S.jsx)(ah.PencilIcon, { size: "md", color: "currentColor", className: aI.Wo }),
            }),
    });
}
function aN(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ap.A)(t, null),
        i =
            0 === (0, ag.wH)()
                ? U.intl.string(U.t.OASXjt)
                : U.intl.formatToPlainString(U.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, S.jsx)(af.dT, {
        onClick: n,
        text: i,
        children: (0, S.jsx)(aa.H, { size: "md", color: "currentColor", className: aI.wg }),
    });
}
function aC(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, S.jsxs)("div", {
        className: aI.D6,
        children: [
            (0, S.jsxs)("div", {
                className: aI.kL,
                children: [
                    a && (0, S.jsx)(tM.A, { emojiId: l, emojiName: r, className: aI.Zg }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aI.dj,
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
                        ? (0, S.jsx)(aN, { sound: t })
                        : (0, S.jsx)(aa.H, { size: "md", color: "currentColor", className: aI.Gk }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: aI.kL,
                children: [
                    (0, S.jsx)(a_, { onSelect: i }),
                    s &&
                        !n &&
                        (0, S.jsx)(af.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, S.jsx)(sg.TrashIcon, {
                                size: "md",
                                color: n4.A.unsafe_rawColors.RED_400.css,
                                className: aI.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ay = n(617617);
n(980504);
var ab = n(806050);
function av(e) {
    return (0, f.bG)([ac.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ac.A.getSound("0" === t ? "0" : t, n);
    });
}
function aj(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([ay.A], () => ay.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = av(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, S.jsxs)("div", {
        className: ab.Io,
        children: [
            r
                ? (0, S.jsx)(tM.A, { emojiId: s, emojiName: l, className: ab.nW })
                : (0, S.jsx)(aa.H, { size: "md", color: "currentColor", className: ab.nW }),
            (0, S.jsx)(Q.E, { className: ab.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aO = (0, E.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = T.useState("0"),
            i = (0, am.mz)(t),
            s = av(i),
            l = i?.type === am.PP.GLOBAL,
            r = (0, f.bG)([ac.A], () => ac.A.hasFetchedAllSounds()) && null != i && null == s;
        (T.useEffect(() => {
            r && (0, ag.ND)({ location: e });
        }, [r, e]),
            T.useEffect(() => {
                (0, ad.E7)();
            }, []));
        let a = T.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, S.jsx)(aj, { guildId: e.value }) : null;
        }, []);
        return (0, S.jsxs)(n7.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, S.jsx)(ao.A, {
                    guildId: t,
                    className: ab.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, S.jsxs)(au.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, S.jsx)(al.t, { size: "md", color: "currentColor", className: ab.ax }),
                    }),
                    children: [
                        (0, S.jsx)(aC, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ag.Dv)(t, e) : (0, ag.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, S.jsx)(ar.p, {
                                className: ab.lm,
                                messageType: ar.Y.WARNING,
                                children: U.intl.string(U.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aL = n(824744);
let aR = (0, E.sN)(h.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => U.intl.string(U.t.kbFsAD),
    useSubtitle: () => U.intl.format(U.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aL.w)(e);
        (0, ad.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ag.wH)();
        return (0, aL.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aD = n(864145);
let aP = (0, E.sN)(h.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t["2JbvKw"]),
        useSubtitle: () => U.intl.string(U.t.INenzY),
        setValue: function (e) {
            let t = (0, aL.w)(e);
            M.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = M.HO.getSetting();
            return (0, aL.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aD.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aG = (0, E.zZ)(h.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ABjMWI),
        buildLayout: () => [aR, aP, aO],
    });
var aM = n(803224),
    aU = n(552122);
let aV = (0, E.E2)(h.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [U.intl.string(U.t.fgSHf8)],
        usePredicate: () => null != aU.A.useHolidaySoundpack(),
        Component: () =>
            (0, S.jsx)(Q.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.Eup6Wv, {
                    onClick: () => (0, ng.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    ak = (0, E.AK)(h.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.eyGEE4),
        useSearchTerms: () => [U.intl.string(U.t.eyGEE4)],
        destinationKey: h.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aw = (0, E.gN)(h.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [ak] });
var aF = n(264686);
let aB = (0, e_.D)(() => ({ currentPlayingSound: null }));
function az() {
    let e = aB.getField("currentPlayingSound");
    (e?.stop(), aB.setState({ currentPlayingSound: null }));
}
function aY(e) {
    let t = aB.getField("currentPlayingSound");
    t?.stop();
    let n = (0, il.Ak)(e);
    aB.setState({ currentPlayingSound: n });
}
function aX(e) {
    return (0, E.zD)(`${h.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aY(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, f.bG)([aM.A], () => aM.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aM.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aF.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, f.bG)([aM.A], () => aM.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aH = [
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
    aW = (0, E.D1)(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? U.intl.formatToPlainString(U.t["0JYT98"], { count: t })
                : U.intl.formatToPlainString(U.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                az();
            };
        },
        buildLayout: () => aH.map((e) => aX(e)),
    }),
    aK = (0, E.zZ)(h.X.SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, f.bG)([aM.A], () => aM.A.getDisableAllSounds());
            return T.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: U.intl.format(U.t.fRvixS, {
                            onClick: () => (0, ng.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aW, aV, aw],
    }),
    aZ = (0, E.zD)(h.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.e3Zz3F),
        useSubtitle: () => U.intl.string(U.t.RztTjP),
        useValue: function () {
            return !M.uh.useSetting();
        },
        setValue: function (e) {
            ((0, ru.A)("stream_previews_disabled", !e, M.uh.getSetting(), [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                M.uh.updateSetting(!e));
        },
    }),
    aq = (0, E.zD)(h.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => U.intl.string(U.t.GmWk2E),
        useSearchTerms: () => [U.intl.string(U.t["Fj/xn1"])],
        useSubtitle: () => U.intl.string(U.t["Fj/xn1"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getVideoHook());
        },
        setValue: lZ.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supportsVideoHook());
        },
    }),
    aQ = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getExperimentalSoundshare());
        },
        setValue: lZ.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => {
                let e = si.Ay.supportsExperimentalSoundshare(),
                    t = si.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aJ = (0, E.zD)(h.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => U.intl.string(U.t["/jwMtn"]),
        useSubtitle: () => U.intl.string(U.t.zlA23F),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lZ.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return si.Ay.supports(sZ.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a$ = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lZ.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: si.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, f.bG)([si.Ay], () => si.Ay.getSidechainCompression());
            return si.Ay.supports(sZ.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a0 = (0, E.zD)(h.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t.lt8rRx),
        useSubtitle: () => U.intl.string(U.t.ie1mgY),
        useValue: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nf.cX)() && e
                ? (0, n8.A)({
                      title: U.intl.string(U.t["9jf31O"]),
                      subtitle: U.intl.string(U.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lZ.default.setUseSystemScreensharePicker(e), nN.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : lZ.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, f.bG)([si.Ay], () => si.Ay.supportsSystemScreensharePicker() && (0, nf.cX)());
        },
    }),
    a1 = (0, E.bd)(h.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t.qrMyvm) : U.intl.string(U.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(h.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aJ, a$, a0, aQ, aq],
    }),
    a2 = (0, E.zZ)(h.X.STREAMING_CATEGORY, { useTitle: () => U.intl.string(U.t.KDdjou), buildLayout: () => [aZ, a1] });
var a3 = n(106713);
let a5 = (0, E.E2)(h.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a3.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, S.jsx)(lw.U, {
                label: U.intl.string(U.t.UTM8VP),
                deviceType: sZ.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a6 = (0, E.E2)(h.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a3.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, S.jsx)(lw.U, {
                label: U.intl.string(U.t.xuYQ0n),
                deviceType: sZ.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a4 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a5, a6] }),
    a8 = (0, E.sN)(h.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = si.Ay.getInputVolume();
            return (0, aL.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aL.w)(e);
            lZ.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    a7 = (0, E.sN)(h.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = si.Ay.getOutputVolume();
            return (0, aL.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aL.w)(e);
            lZ.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a9 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a8, a7] });
var oe = n(702841),
    ot = n(152567),
    on = n(804037);
let oi = `${eC.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    os = (0, E.E2)(h.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH)],
        usePredicate: function () {
            return (0, oe.bG)([si.Ay], () => si.Ay.supports(sZ.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oe.bG)([si.Ay], () => si.Ay.supports(sZ.O5.LOOPBACK))
                ? (0, S.jsx)(ot.A, {
                      size: "md",
                      notchBackground: ot.V.GRAY,
                      captionVoice: U.intl.string(U.t.bp3JOV),
                      captionNoVoice: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t.bgn75v),
                              }),
                              U.intl.string(U.t["MA+OZh"]),
                              (0, S.jsx)(nc.Anchor, {
                                  className: on.X,
                                  href: eC.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: U.intl.string(U.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: U.intl.format(U.t["V+B3FH"], { guideURL: oi }),
                      buttonTest: U.intl.string(U.t.gyljWE),
                      buttonStop: U.intl.string(U.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    ol = e4.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function or(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, S.jsxs)(Z.B, {
        children: [
            n && (0, S.jsx)(so, { sourcePage: "voice" }),
            t && (0, S.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
        ],
    });
}
let oa = (0, E.zZ)(h.X.VOICE_CATEGORY, {
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
            let e = sa("voice"),
                t = (0, lF.x5)(sZ.oh.AUDIO_INPUT),
                n = (0, lF.x5)(sZ.oh.AUDIO_OUTPUT),
                i = T.useMemo(() => {
                    let e = ol.some((e) => t?.hardwareId?.startsWith(e)),
                        i = ol.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return T.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, S.jsx)(or, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a4, a9, os],
    }),
    oo = (0, E.t_)(h.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        buildLayout: () => [oa, as, lK, a2, aK, aG, rf, rA],
    }),
    ou = (0, E.i4)(h.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        usePredicate: () => si.Ay.isSupported(),
        icon: lO.MicrophoneIcon,
        useMenu: lL.A,
        buildLayout: () => [oo],
    }),
    od = (0, E.WI)(h.X.APP_SECTION, {
        useTitle: () => U.intl.string(U.t.gcyH1J),
        buildLayout: () => [ou, n0, te, iZ, lj, n5],
    });
var oc = n(360669),
    og = n(974544),
    om = n(975807),
    oA = n(534247);
function oE(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, S.jsxs)("div", {
        className: iE()(oA.kL, { [oA.oE]: a }),
        children: [
            (0, S.jsxs)(Z.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: oA.Qs,
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
            (0, S.jsx)("img", { src: s, className: oA.fA, alt: "" }),
        ],
    });
}
let oh = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var ox = n(425565),
    op = n(745188),
    oS = n(936564),
    oT = n(417792),
    of = n(423764),
    oI = n(289873),
    o_ = n(132500),
    oN = n(465323),
    oC = n(37766),
    oy = n(194261),
    ob = n(391048),
    ov = n(277984),
    oj = n(99696),
    oO = n(202613),
    oL = n(615405),
    oR = n(83617),
    oD = n(935208),
    oP = n(607399),
    oG = n(993077),
    oM = n(150934),
    oU = n(256006),
    oV = n(198970),
    ok = n(71532);
let ow = /[^0-9/]/g,
    oF = /[^0-9]/g;
class oB extends T.PureComponent {
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
                ((i = (n = e.replace(ow, "").split("/"))[0]),
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
            ? (u = u.replace(oF, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, S.jsx)(sT.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oz = n(832208),
    oY = n(782328);
let oX = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tZ.Ld)(),
                        title: () => U.intl.string(U.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => U.intl.string(U.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oY.ep,
                        renderInput: (e) => (0, S.jsx)(oB, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oH = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = T.useState(!1),
            [a, o] = T.useState(null),
            [u, d] = T.useState(i);
        return (
            T.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, S.jsx)(oz.A, {
                className: n,
                form: oX,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, ok.So)(e) ? o(U.intl.string(U.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oW = n(219887),
    oK = n(292856);
let oZ = "isDefault";
class oq extends T.PureComponent {
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
            expiresMonth: t instanceof oO.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oO.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, ov.ey)(), (0, ov.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ig.Vq).length))
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
                      className: oK.zc,
                      children: (0, S.jsx)(iJ.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, S.jsx)("div", {
                  className: oK.zc,
                  children: (0, S.jsx)(iJ.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oU.g)(n);
        return (0, S.jsxs)("div", {
            className: oK.yV,
            children: [
                (0, S.jsx)(Q.E, {
                    className: oK.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, S.jsx)(oV.Ay, {
                    ...e,
                    mode: oV.Ay.Modes.EDIT,
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
            className: oK.yV,
            children: [
                (0, S.jsx)(Q.E, { className: oK.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, S.jsx)(oH, {
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
            className: oK.AU,
            children: (0, S.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, S.jsx)(l1.e, {
                        children: (0, S.jsxs)("div", {
                            className: oK.lH,
                            children: [
                                n
                                    ? (0, S.jsx)(sm.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, S.jsx)("div", { "aria-hidden": !0, className: oK.dm }),
                                      })
                                    : null,
                                (0, S.jsx)(v.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oP.Fr ? "sm" : "md",
                                    text: oP.Fr ? U.intl.string(U.t.oyYWHE) : U.intl.string(U.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, S.jsxs)(l1.e, {
                        children: [
                            (0, S.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oP.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, S.jsx)(v.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oP.Fr ? "sm" : "md",
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
            r = e instanceof oO.SJ;
        return (0, S.jsx)(oG.Z, {
            editable: !0,
            className: iE()(oK.Nr, i),
            children: (0, S.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, S.jsxs)("div", {
                        className: oK.__invalid_paymentSection,
                        children: [
                            (0, S.jsx)(oW.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, S.jsx)("div", { className: oK.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, S.jsx)("div", {
                                className: oK.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, S.jsx)("div", {
                        className: oK.D5,
                        children: (0, S.jsx)(oM.S, {
                            value: oZ,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oZ),
                            label: U.intl.string(U.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, S.jsx)(su.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oQ = f.Ay.connectStores([oL.A], () => ({ updateError: oL.A.editSourceError, removeError: oL.A.removeSourceError }))(
    oq,
);
var oJ = n(986485),
    o$ = n(849405),
    o0 = n(329693);
function o1() {
    (0, oj.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, o_.A)() });
}
class o2 extends T.PureComponent {
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
            ? (0, S.jsx)(oQ, {
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
                      i ? null : (0, S.jsx)(su.c, { className: o0.__invalid_sourceDivider }),
                      (0, S.jsxs)("div", {
                          className: o0.Yb,
                          children: [
                              (0, S.jsx)(oW.A, {
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
let o3 = T.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = T.useState(null),
        o = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, f.bG)([oL.A], () => oL.A.ipCountryCode),
        d = T.useMemo(() => (0, oN.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        T.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : ov.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, S.jsxs)(S.Fragment, {
            children: [
                n ? null : (0, S.jsx)(su.c, { className: o0.__invalid_sourceDivider }),
                (0, S.jsxs)("div", {
                    className: o0.Yb,
                    children: [
                        void 0 !== t
                            ? (0, S.jsx)(oW.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, S.jsxs)(sN.A, {
                                  align: sN.A.Align.CENTER,
                                  children: [
                                      (0, S.jsx)(oC._, { size: "lg" }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: o$.Wi,
                                          children: U.intl.string(oJ.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, S.jsxs)("div", {
                            className: o0.zy,
                            children: [
                                (0, S.jsx)("div", {
                                    className: o0.Tq,
                                    children:
                                        null == r
                                            ? (0, S.jsx)(oI.y, { type: oI.y.Type.SPINNING_CIRCLE })
                                            : (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oN.$g)(e ?? 0, n, s, {
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
                                    text: U.intl.string(oJ.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o5 extends T.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await ov.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await ov.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await ov.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oR.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sS.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, S.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, ob.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, S.jsxs)("div", {
            className: o0.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, S.jsxs)("div", {
                          className: o0.z8,
                          children: [
                              (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o0.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oD.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oO.LQ)),
            c = u.filter((e) => e instanceof oO.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, S.jsx)(
                    o2,
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
                              o3,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: o1,
                              },
                              e.id,
                          ),
                      )
                    : (0, S.jsx)(o3, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o1,
                      })),
            (0, S.jsxs)(S.Fragment, {
                children: [
                    t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, S.jsx)(oy.LockIcon, { size: "sm", className: o0.hz }),
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
                    m !== d.length - 1 || (o && c.length > 0) ? (0, S.jsx)(su.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var o6 = n(459357),
    o4 = n(295405),
    o8 = n(166403),
    o7 = n(773669),
    o9 = n(943009);
function ue() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, of.Gw)(e.country) };
}
let ut = (0, E.E2)(h.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, f.bG)([oL.A], () => oL.A.isSyncing),
                i = (0, f.bG)([o4.A], () => o4.A.paymentSources),
                s = (0, f.bG)([o4.A], () => o4.A.defaultPaymentSourceId),
                l = (0, f.bG)([o7.default], () => o7.default.locale),
                r = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
                a = (0, f.bG)([oL.A], () => oL.A.isRemovingPaymentSource),
                o = (0, f.bG)([oL.A], () => oL.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o6.c)({ location: "UserSettingsBilling" });
            return (T.useEffect(() => {
                (ov.$o(), ov.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, S.jsx)("div", { className: o9.o, children: (0, S.jsx)(oI.y, {}) })
                : (0, S.jsx)(o5, {
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
    un = (0, E.E2)(h.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = T.useMemo(
                () => [
                    { text: U.intl.string(op.default["6bWeWP"]), onClick: () => (0, om.A)(ox.C1) },
                    {
                        text: U.intl.string(op.default.xYa9Y8),
                        onClick: () => (0, om.A)(eC.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, S.jsx)("div", {
                className: oS.k,
                children: (0, S.jsx)(oE, {
                    title: U.intl.string(op.default.w8gzZb),
                    graphicSrc: oh,
                    actions: e,
                    children: (0, S.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: U.intl.string(op.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oT.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ui = (0, E.zZ)(h.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.W26xGQ),
        useSubtitle: () => {
            let e = ue();
            return null != e ? U.intl.format(U.t.e2t1G5, { country: e.countryName }) : U.intl.string(U.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ue()
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
        buildLayout: () => [ut, un],
    });
var us = n(662490),
    ul = n(945810);
let ur = (0, ul.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ua = n(837381),
    uo = n(689175),
    uu = n(928039),
    ud = n(39190),
    uc = n(32731),
    ug = n(380098),
    um =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uA =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    uE =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    uh =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    ux =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function up(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oO.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uc.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new ug.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uS = { receipts: [], cursor: null };
var uT = n(34188),
    uf = n(597770),
    uI = n(206828),
    u_ = n(576243),
    uN = n(147925),
    uC = n(707554),
    uy = n(957565),
    ub = n(458790),
    uv = n(39209),
    uj = n(510022),
    uO = n(427262),
    uL = n(106799),
    uR = n(580630),
    uD = n(818348),
    uP = n(460103);
let uG = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uM(e, t) {
    return t === uD.Yr.DISCORD_ORB
        ? (0, S.jsxs)("span", {
              className: uP.db,
              children: [
                  (0, S.jsx)(uL.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, uR.$g)(e, t);
}
function uU(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, ez.Ay)(tw.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === ux.REDEEMED
        ? null
        : n.status === ux.REFUNDED
          ? (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(uC.H, { className: uP.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, S.jsx)("div", {
                        className: uP.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uO.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === ux.CLAIMED || n.status === ux.UNCLAIMED
            ? (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uC.H, { className: uP.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uP.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uO.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, S.jsx)("div", {
                              className: uP.TP,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t["jcSP+g"]),
                                  onClick: () => (0, ng.openUserSettings)(h.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsx)(uC.H, { className: uP.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, S.jsx)("div", {
                          className: uP.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, S.jsx)("div", {
                          className: uP.TP,
                          children: s
                              ? (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, om.A)(uG(i)),
                                })
                              : (0, S.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: l,
                                            }),
                                            (0, uj.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uV = n(933832),
    uk = n(789645);
function uw(e) {
    let { refund: t, locale: n } = e,
        i = uG(n),
        s = t.eligible ? uV.CheckmarkLargeIcon : uk.P;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(uC.H, { className: uP.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, S.jsxs)("div", {
                className: uP.iL,
                children: [
                    (0, S.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uh.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uh.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case uh.GIFT:
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
                    t.policy !== uh.IN_GAME_ITEM &&
                        (0, S.jsxs)("div", {
                            className: uP.My,
                            children: [
                                (0, S.jsx)("div", {
                                    className: uP.Kf,
                                    children:
                                        null != t.window &&
                                        (0, S.jsxs)("div", {
                                            className: uP._Z,
                                            children: [
                                                (0, S.jsx)(uC.H, {
                                                    className: uP.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, S.jsxs)("div", {
                                                    className: uP.z9,
                                                    children: [
                                                        (0, S.jsx)(s, { className: uP.xb, color: "currentColor" }),
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
                                (0, S.jsx)(nc.Anchor, { href: i, children: U.intl.string(U.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var uF = n(679897);
function uB(e) {
    let { description: t, cost: n } = e;
    return (0, S.jsx)("li", {
        className: uP.mg,
        children: (0, S.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            children: [(0, S.jsx)("div", { children: t }), (0, S.jsx)("div", { children: n })],
        }),
    });
}
function uz(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    return (0, S.jsx)(sm.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, S.jsx)(n9.D, {
            onMouseEnter: () => {
                s && l(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uy.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, S.jsx)("div", { className: uP.l9, children: t }),
        }),
    });
}
function uY(e) {
    let { paymentId: t } = e;
    return (0, S.jsx)("li", {
        className: uP.mg,
        children: (0, S.jsxs)("div", {
            className: uP.bx,
            children: [
                (0, S.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, S.jsx)(uz, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uX(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uE.REVERSED;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: iE()(uF.XM, n ? uF.aB : uF.EN),
        children: [
            t === uE.REVERSED && U.intl.string(U.t.YQv9Li),
            t === uE.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === uE.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uH(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uD.kM.APPLE_PARTNER ? new oO.Pw({}) : null);
    return null == i
        ? null
        : (0, S.jsx)(oW.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uP.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uW(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, S.jsx)(uH, { payment: t.payments[0], locale: n })
            : null
        : (0, S.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, S.jsxs)(
                      sN.A,
                      {
                          justify: sN.A.Justify.BETWEEN,
                          align: sN.A.Align.CENTER,
                          children: [
                              (0, S.jsx)(uH, { payment: e, locale: n }),
                              (0, S.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, S.jsx)(uX, { tag: e.tag }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uM(e.amount, t.currency),
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
function uK(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)("div", { className: uP.ts }),
            t.delisted
                ? (0, S.jsx)(ar.p, {
                      messageType: ar.Y.WARNING,
                      action: (0, S.jsx)(v.$, {
                          variant: "overlay-secondary",
                          text: U.intl.string(U.t.zoztQA),
                          onClick: () => (0, om.A)(uG(n)),
                      }),
                      children: U.intl.string(U.t["3AvulN"]),
                  })
                : null != t.guild_id && (0, S.jsx)(ub.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uZ(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, S.jsx)(n9.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, S.jsxs)("div", {
            className: uP.WI,
            children: [
                (0, S.jsx)(uC.H, { className: uP.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, S.jsxs)("div", {
                    className: iE()(uP.iL, uP.W),
                    children: [
                        (0, S.jsx)(uW, { receipt: t, locale: n }),
                        (0, S.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uB, { description: t.description, cost: uM(t.subtotal, s) }),
                                            (0, S.jsx)(uB, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: uM(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uB, { description: U.intl.string(U.t.txajQG), cost: uM(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(uB, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: uM(-t.amount_refunded, s),
                                            }),
                                            (0, S.jsx)(uB, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: uM(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(uY, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, S.jsx)(ub.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, S.jsx)(uK, { guildProduct: l, locale: n }),
                (0, S.jsx)(uv.A, { payment: t.receipt_payment }),
                null != r && (0, S.jsx)(uU, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, S.jsx)(uw, { refund: a, locale: n }),
            ],
        }),
    });
}
function uq(e) {
    let { withGradient: t } = e;
    return t
        ? (0, S.jsx)(u_.A, { size: 24, iconSize: 16, color: n4.A.unsafe_rawColors.NEUTRAL_1, className: uP.Sy })
        : (0, S.jsx)("div", {
              className: iE()(uP.Sy, uP.uX, uP.Xr),
              children: (0, S.jsx)(al.t, { size: "custom", width: 16, height: 16, color: n4.A.colors.ICON_DEFAULT }),
          });
}
function uQ(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sv.A], () => sv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uA.NITRO:
            return (0, S.jsx)(uq, { withGradient: !0 });
        case uA.NITRO_BASIC:
            return (0, S.jsx)(uq, { withGradient: !1 });
        case uA.SHOP:
            return (0, S.jsx)(uT.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uP.sV });
        case uA.APPLICATION:
        case uA.PRODUCT:
            return (0, S.jsx)(sn.A, {
                className: uP.Sy,
                guildClassName: uP.zA,
                game: t.icon === uA.APPLICATION ? n : void 0,
                guild: i,
                size: sn.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function uJ(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === um.PAID)
        switch (i.status) {
            case ux.CLAIMED:
                return (0, S.jsx)("span", { className: uP.gD, children: U.intl.string(U.t.lIsIFo) });
            case ux.UNCLAIMED:
                return (0, S.jsx)("span", { className: uP.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case ux.REDEEMED:
                return (0, S.jsx)("span", { className: uP.gD, children: U.intl.string(U.t.Osji1u) });
            case ux.FAILED:
                return (0, S.jsx)("span", { className: uP.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, S.jsx)("span", { className: uP.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, S.jsx)("span", { className: uP.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case um.PENDING:
            return (0, S.jsx)("span", { className: uP.Xg, children: U.intl.string(U.t.y7F0Re) });
        case um.FAILED:
            return (0, S.jsx)("span", { className: uP.ob, children: U.intl.string(U.t.Yo4ru6) });
        case um.REVERSED:
            return (0, S.jsx)("span", { className: uP.ob, children: U.intl.string(U.t.YQv9Li) });
        case um.CANCELED:
            return (0, S.jsx)("span", { className: uP.ob, children: U.intl.string(U.t.ttkBhy) });
        case um.PARTIALLY_REFUNDED:
            return (0, S.jsx)("span", { className: uP.gD, children: U.intl.string(U.t.lYbZzz) });
        case um.REFUNDED:
            return (0, S.jsx)("span", { className: uP.gD, children: U.intl.string(U.t.ZBb6NK) });
        case um.PAID:
            return null;
    }
}
function u$(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, uI.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, S.jsx)(ua.tG, {
        id: t.id,
        children: (e) =>
            (0, S.jsxs)(n9.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: iE()(uP.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, S.jsxs)(sN.A, {
                        className: uP.J7,
                        align: sN.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uP.p6,
                                children: (0, ip.i$)(ix()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, S.jsxs)("div", {
                                className: uP.h_,
                                children: [
                                    (0, S.jsx)(uQ, { receipt: t }),
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
                                                                      return (0, ax.xq)(t)
                                                                          ? ax.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ax.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return U.intl.formatToPlainString(
                                                                  t.interval === t$.WT.YEAR
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
                                        ? (0, S.jsx)(sm.m, {
                                              text: U.intl.string(U.t.QddTpm),
                                              children: (0, S.jsx)(uf.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uP.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, S.jsxs)("div", {
                                className: uP.vj,
                                children: [
                                    (0, S.jsx)(uJ, { receipt: t, hasLinkedToApplication: r }),
                                    (0, S.jsx)("span", { className: uP.q9, children: uM(t.net, t.currency) }),
                                ],
                            }),
                            (0, S.jsx)(uN.A, {
                                className: uP.fT,
                                direction: s ? uN.A.Directions.UP : uN.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, S.jsx)(uZ, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u0 = n(949779);
function u1(e) {
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
        d = (0, uu.A)("billing-history", s);
    return (0, S.jsx)(ua.hD, {
        navigator: d,
        children: (0, S.jsx)(ua.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, S.jsx)(ud.A, {
                    className: u0.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, S.jsx)(uo.Ch, {
                        className: u0.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, S.jsx)(u$, { className: iE()(u0.Nj, u0.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u2(e) {
    let { subscription: t } = e;
    return (
        th()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, S.jsxs)(oG.Z, {
            className: u0.K1,
            children: [
                (0, S.jsx)("div", {
                    className: u0.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uD.qm[t.paymentGateway] }),
                }),
                (0, S.jsx)("div", {
                    className: u0.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uD.qm[t.paymentGateway],
                        billingHistoryLink: (0, ax.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u3(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = T.useState(uS),
                [n, i] = T.useState(!1),
                [s, l] = T.useState(!1),
                [r, a] = T.useState(!1),
                o = T.useCallback((e, n) => {
                    ti.Bo.get({
                        url: I.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                s = i.receipts.map(up);
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
        r = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, S.jsxs)("div", {
              className: u0.GD,
              children: [
                  null != r && a ? (0, S.jsx)(u2, { subscription: r }) : null,
                  n.length > 0
                      ? (0, S.jsxs)("div", {
                            className: iE()(u0.PQ, u0.GD),
                            children: [
                                (0, S.jsx)("div", {
                                    className: iE()(u0.Nj, u0.Bd),
                                    children: (0, S.jsxs)(sN.A, {
                                        className: u0.Yi,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: uP.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: u0.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, S.jsx)("div", {
                                                className: uP.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, S.jsx)(u1, { receipts: n, locale: t, loadNextPage: l }),
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
        : (0, S.jsx)(oI.y, {});
}
var u5 = n(545075);
let u6 = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([o7.default], () => o7.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: ur.useConfig(e).enabled });
            return (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(u5.kb, {}), n ? (0, S.jsx)(u3, { locale: t }) : (0, S.jsx)(us.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    u4 = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [u6],
    }),
    u8 = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [ui, u4],
        useObscuredNotice: og.L,
    }),
    u7 = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: oc.B,
        buildLayout: () => [u8],
    });
var u9 = n(70283),
    de = n(682618),
    dt = n(92202),
    dn = n(859492),
    di = n(962644),
    ds = n(35587),
    dl = n(86379);
let dr = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u5.uK,
        usePredicate: () => (0, dl.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    da = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dr] });
var du = n(704333),
    dd = n(414499),
    dc = n(31300),
    dg = n(997101);
let dm = "https://discord.com",
    dA = {
        [dg.d.US]: [
            { id: "walmart", name: "Walmart", url: dm },
            { id: "target", name: "Target", url: dm },
            { id: "amazon", name: "Amazon", url: dm },
            { id: "best_buy", name: "Best Buy", url: dm },
        ],
        [dg.d.GB]: [
            { id: "tesco", name: "Tesco", url: dm },
            { id: "smyths_toys", name: "Smythstoys", url: dm },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dm },
            { id: "asda", name: "Asda", url: dm },
        ],
        [dg.d.CA]: [{ id: "eb_games", name: "EBGames", url: dm }],
        [dg.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dm }],
        [dg.d.ES]: [{ id: "game", name: "GAME", url: dm }],
        [dg.d.FR]: [{ id: "micromania", name: "Micromania", url: dm }],
    },
    dE = [];
var dh = n(534284);
function dx(e) {
    let { enabled: t } = (0, dt.K)({ location: e }),
        n = (0, dh.P)(),
        i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && ox.ob.has(i);
}
var dp = n(178881);
function dS(e) {
    let { icon: t, children: n } = e;
    return (0, S.jsxs)(Q.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dp.A,
        children: [
            (0, S.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, S.jsx)("span", { children: n }),
        ],
    });
}
let dT = (0, E.zZ)(h.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [df],
        usePredicate: () => dx("GiftInventoryMarketingBanner"),
    }),
    df = (0, E.E2)(h.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dx("GiftCardsGiftInventoryBanner"),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, ez.Ay)();
                    return T.useCallback(
                        (t) => {
                            td.default.track(I.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                        (null == t ? dE : (dA[t] ?? dE)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, om.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, S.jsx)(oE, {
                      size: "compact",
                      title: U.intl.string(op.default.Ja5Q8Z),
                      graphicSrc: oh,
                      actions: i,
                      footnote: U.intl.format(op.default.ztNU94, { termsUrl: I.X7G.GIFT_CARD_TERMS }),
                      children: (0, S.jsxs)(Z.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, S.jsx)(dS, { icon: du.B, children: U.intl.string(op.default["9xo1g9"]) }),
                              (0, S.jsx)(dS, { icon: dd.h, children: U.intl.string(op.default.I5UWh9) }),
                              (0, S.jsx)(dS, {
                                  icon: uf.GiftIcon,
                                  children: U.intl.format(op.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, ng.openUserSettings)(h.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, S.jsx)(dS, {
                                  icon: dc.k,
                                  children: U.intl.format(op.default.UwYHGm, { websiteUrl: ox.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dI = n(982240),
    d_ = n(5755),
    dN = n(914410),
    dC = n(556427),
    dy = n(573343);
let db = "UserSettingsGiftingBadgeProgress";
function dv(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, S.jsxs)("div", {
        className: iE()(dy.fO, { [dy.bF]: i }),
        children: [
            null != n && (0, S.jsx)("img", { src: n, alt: "", className: dy.si }),
            (0, S.jsxs)("div", {
                className: dy.tc,
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, S.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(dC.default.qvx9E4, { count: (0, dI.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dj(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, dn.b9)(db);
    return (0, S.jsx)("div", {
        className: dy.dw,
        children: t.map((e) => (0, S.jsx)(dv, { tier: e, iconUrl: (0, dn.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function dO(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, d_.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, S.jsx)("div", {
        className: dy.NG,
        children: (0, S.jsx)(v.$, {
            variant: "primary",
            icon: uf.GiftIcon,
            text: U.intl.string(dC.default.DZnomS),
            onClick: s,
        }),
    });
}
function dL(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, dI.rL)(i),
        a = (0, dI.rL)(s),
        o = (0, dn.GZ)(n, i, s),
        u = (0, dn.b9)(db),
        d = (0, dn.Se)(i, u),
        c = (0, dn.Se)(s, u);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(dC.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(dC.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, S.jsxs)("div", {
            className: dy.mY,
            children: [
                null != d &&
                    (0, S.jsx)("div", {
                        className: dy.fC,
                        children: (0, S.jsx)("img", { src: d, alt: "", className: dy.qS }),
                    }),
                (0, S.jsxs)("div", {
                    className: dy.Qs,
                    children: [
                        (0, S.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, S.jsx)(dN.Ay, { variant: dN.qP.BLUE, weight: dN.fh.MEDIUM, progress: o }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dy.qg,
                            children: U.intl.format(dC.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, S.jsx)("div", {
                        className: dy.fC,
                        children: (0, S.jsx)("img", { src: c, alt: "", className: dy.qS }),
                    }),
            ],
        })
    );
}
function dR(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([dI.Ay], () => ({
            badgeProgress: dI.Ay.getSingleRequirementProgress(u9.$.GIFTING)?.current ?? 0,
            currentTier: dI.Ay.getCurrentTier(u9.$.GIFTING),
            nextTier: dI.Ay.getNextTier(u9.$.GIFTING),
            giftsRemaining: dI.Ay.getRemainingToNextTier(u9.$.GIFTING),
            tiers: dI.Ay.getBadgeById(u9.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, S.jsxs)("div", {
              className: dy.kL,
              children: [
                  (0, S.jsxs)("div", {
                      className: dy.Jo,
                      children: [
                          n > 0 &&
                              (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsx)(dL, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, S.jsx)("div", { className: dy.yF }),
                                  ],
                              }),
                          (0, S.jsx)(dj, { tiers: r, currentTier: i }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dy.PJ,
                              children: U.intl.string(dC.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, S.jsx)(dO, { analyticsLocation: t, location: db }),
              ],
          });
}
let dD = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(dC.default.sFokBp),
        buildLayout: () => [dP],
        usePredicate: () => {
            let e = (0, dn.F5)("gift_inventory"),
                t = (0, f.bG)([dI.Ay], () => dI.Ay.getBadgeById(u9.$.GIFTING));
            return e && null != t;
        },
    }),
    dP = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(dC.default.sFokBp)],
        Component: () => (0, S.jsx)(dR, {}),
    });
var dG = n(264779),
    dM = n(412260),
    dU = n(555393),
    dV = n(725807),
    dk = n(212168),
    dw = n(469778),
    dF = n(45938),
    dB = n(109802),
    dz = n(869038),
    dY = n(380856);
function dX(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, S.jsxs)(sN.A, {
        className: iE()(dY.wx, n),
        align: sN.A.Align.CENTER,
        children: [
            (0, S.jsx)("div", { className: dY.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dH(e) {
    let { children: t, className: n } = e;
    return (0, S.jsx)("div", { className: iE()(dY.rf, n), children: t });
}
class dW extends T.PureComponent {
    static Header = dX;
    static Body = dH;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, S.jsx)("div", { className: iE()(dY.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dK = n(180522),
    dZ = n(871123),
    dq = n(366523),
    dQ = n(280450),
    dJ = n(30793),
    d$ = n(97352),
    d0 = n(67480),
    d1 = n(615396),
    d2 = n(274904);
class d3 extends T.PureComponent {
    _copyModeTimeout = new rF.Ep();
    state = { copyMode: dB.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dB.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dB.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dz.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dF.AK)(t, n),
            (0, uy.C)(
                e,
                () => this.setState({ copyMode: dB.q.SUCCESS }),
                () => this.setState({ copyMode: dB.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dB.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, S.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: d2.Gj,
            children: [
                (0, S.jsx)(dB.e, {
                    className: d2.ph,
                    value: (0, dF.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uy.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l$.XD.BRAND,
                    buttonLook: l$.pR.FILLED,
                }),
                (0, S.jsxs)("div", {
                    className: d2.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, S.jsxs)(T.Fragment, {
                                  children: [
                                      U.intl.format(U.t.ltVZcJ, { hours: t.expiresAt.diff(ix()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, S.jsx)(n9.D, {
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
class d5 extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dz.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dz.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dZ.bF)(e)
            ? (0, S.jsx)(dq.e, { shape: "square", sku: e, containerClassName: d2.ez })
            : null != t
              ? (0, S.jsx)(dK.A, { giftStyle: t, className: d2.ez, shouldAnimate: this.state.isHovered })
              : (0, S.jsx)(sn.A, { game: n, size: sn.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dZ.bF)(e)
            ? (0, S.jsxs)("div", {
                  className: iE()(d2.Oc, d2.ic),
                  children: [
                      (0, S.jsx)(sn.A, { game: n, size: sn.M.XSMALL, skuId: e.id, className: d2._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, S.jsx)("div", { className: d2.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === t$.FB
                    ? U.intl.string(U.t.odsU6W)
                    : i === t$.Bu && null != n
                      ? U.intl.formatToPlainString(n.interval === t$.WT.MONTH ? U.t.uZjpiJ : U.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : U.intl.formatToPlainString(n.interval === t$.WT.MONTH ? U.t.rCJvqo : U.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, S.jsx)("div", { className: d2.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, S.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            align: sN.A.Align.CENTER,
            className: d2.pe,
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
        return (0, S.jsxs)(dW, {
            className: i,
            children: [
                (0, S.jsx)(n9.D, {
                    onClick: this.handleToggleOpen,
                    className: d2.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, S.jsx)(dW.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, S.jsxs)("div", {
                            className: d2.MY,
                            children: [
                                (0, S.jsxs)(sN.A, {
                                    align: sN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, S.jsxs)("div", {
                                            className: d2.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, S.jsx)(uN.A, {
                                    direction: a ? uN.A.Directions.UP : uN.A.Directions.DOWN,
                                    className: d2.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, S.jsx)(dW.Body, {
                          children: l
                              ? (0, S.jsx)(oI.y, { className: d2.u1 })
                              : (0, S.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, S.jsx)(d3, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d6 = f.Ay.connectStores([d0.A, tu.A, dJ.A, i4.A, d$.A, dQ.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d0.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = dJ.A.getForGifterSKUAndPlan(dQ.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: dJ.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: dJ.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i4.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d1.c9)(n) : null,
        giftCodes: l,
    };
})(d5);
var d4 = n(725570),
    d8 = n(736653),
    d7 = n(46054);
let d9 = ix().duration(30, "days");
var ce = n(416052),
    ct = n(878309);
function cn(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, S.jsx)(sp.a, {
        title: "",
        size: "md",
        input: (0, S.jsx)("div", { className: ct.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, S.jsxs)("div", {
            className: ct.t4,
            children: [
                (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, S.jsx)(Q.E, { variant: "text-md/normal", className: ct.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let ci = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tZ.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dG.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, S.jsx)(cn, { onClose: t, transitionState: l })
        : null == i
          ? (0, S.jsx)(oI.y, { className: ct.Lq })
          : (0, S.jsx)(sp.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, S.jsxs)("div", {
                    className: ct.N1,
                    children: [
                        (0, S.jsx)("div", { className: ct.Qw }),
                        (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: ct.G3,
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
                            let e = (0, dG.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(su.c, { className: ct.M5 }),
                        (0, S.jsx)(t4.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, S.jsx)(ce.A, {
                                value: i,
                                buttonColor: l$.$n.Colors.BRAND,
                                buttonLook: l$.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cs = n(136380);
function cl(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, d8.Ay)(),
        d = (0, dG.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, ip.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ix()(n.outboundRedemptionEndDate)
                            : ix()(n.endDate).add(d9)
                        : ix()(n.endDate),
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
        A = (0, dU.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: cs.AX,
                children: [
                    (0, S.jsxs)("div", {
                        className: cs.Pg,
                        children: [
                            (0, S.jsxs)("div", {
                                className: cs.At,
                                children: [
                                    (0, S.jsx)("div", {
                                        className: cs.$G,
                                        children: (0, S.jsx)("img", { alt: "", src: d, className: cs.IJ }),
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
                            className: cs.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d7.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, S.jsx)(d4.aF, {
                    renderModal: (e) =>
                        (0, S.jsx)(ci, {
                            ...e,
                            onClose: E,
                            onClaim: di.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cr(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dw.A], () => dw.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dU.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, ds.y7)(),
        a = n.find((e) => e.giftCodeBatchId === t$.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === t$.Bu && !e.consumed) ?? [],
        [u, d] = W().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t$.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, S.jsxs)("div", {
                      className: cs.N1,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, S.jsx)(su.c, { className: cs.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, S.jsxs)("div", {
                      className: cs.uo,
                      children: [
                          (0, S.jsx)(al.t, {
                              size: "md",
                              color: n4.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cs.PC,
                          }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: cs.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, S.jsx)(dV.A, {
                              showGradient: !0,
                              className: cs.aA,
                              subscriptionTier: t$.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, S.jsxs)("div", {
        children: [
            g,
            (0, S.jsx)(dk.A, {
                className: cs.Yj,
                isShown: !1 === i && c,
                type: dk.i.PREMIUM,
                hasBackground: !0,
                children: (0, S.jsxs)("div", {
                    className: cs.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, S.jsx)(cl, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, S.jsx)(cl, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, S.jsx)(
                                  d6,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t$.FB,
                                  },
                                  (0, dF.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, S.jsx)(
                                  d6,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dF.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, S.jsx)(
                                  d6,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dF.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let ca = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: cu,
        buildLayout: () => [co],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dM.A],
                    () => ({
                        claimedOutboundPromotionCodes: dM.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dM.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, ds.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dG.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    co = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cu()],
        Component: () => (0, S.jsx)(cr, { redesign: !0 }),
    });
function cu() {
    return U.intl.string(U.t.YzjdWJ);
}
var cd = n(339048);
function cc() {
    let e = (0, f.yK)([dw.A], () => dw.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dF.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            (0, cd.XJ)().then(() => i(!0));
        }, []),
        !n)
    )
        return (0, S.jsx)(oI.y, { className: cs.Lq });
    if (0 === Object.keys(t).length)
        return (0, S.jsxs)("div", {
            className: cs.p$,
            children: [
                (0, S.jsx)(uC.H, { className: cs.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, S.jsx)("p", {
                    className: cs.WO,
                    children: U.intl.format(U.t.HezvJ8, {
                        onClick: function () {
                            (0, ng.openUserSettings)(h.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = W()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dF.X6)(e);
            return (0, S.jsx)(d6, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, S.jsx)(Z.B, { gap: "lg", children: s });
}
let cg = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cA, buildLayout: () => [cm] }),
    cm = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cA()], Component: () => (0, S.jsx)(cc, {}) });
function cA() {
    return U.intl.string(U.t.FWe6CP);
}
var cE = n(532446),
    ch = n(499454);
class cx extends T.Component {
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
                    (await (0, oj.Qp)(n),
                        (0, oj.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, o_.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dF.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dz.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (td.default.track(I.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: I.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: I.ZSU.BUTTON_CTA,
                },
            }),
                (0, ch.h)({ processedCode: e }),
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
        return (0, S.jsx)(n7.n, {
            label: e ? void 0 : U.intl.string(U.t["il+VCo"]),
            children: (0, S.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, S.jsxs)(cE.M, {
                    children: [
                        (0, S.jsx)(sT.k, {
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
function cp(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o6.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(td.AnalyticsContext),
        s = (0, f.bG)([tu.A], () => tu.A.enabled);
    return (0, S.jsx)(cx, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cS = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [cT],
        usePredicate: () => !(0, dl.Hp)(),
    }),
    cT = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, S.jsx)(cp, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    cf = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [dT, cS, ca, dD, cg, da],
        initialize: () => {
            (di.Ay.fetchClaimedOutboundPromotionCodes(), (0, dn.Ig)("gift_inventory") && (0, de.o0)(u9.$.GIFTING));
        },
    }),
    cI = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: uf.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, ds.IO)().length;
            return T.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o6.A.getConfig(e).enabled,
                n = dt.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cf],
    });
var c_ = n(659758),
    cN = n(730499),
    cC = n(877624),
    cy = n(269115),
    cb = n(462887),
    cv = n(73825),
    cj = n(531260),
    cO = n(160946),
    cL = n(721668),
    cR = n(224016),
    cD = n(526292),
    cP = n(881489),
    cG = n(106512),
    cM = n(22118),
    cU = n(103411),
    cV = n(190187),
    ck = n(930861),
    cw = n(854627),
    cF = n(889227),
    cB = n(326084),
    cz = n(851746),
    cY = n(664654),
    cX = n(912140),
    cH = n(953727);
let cW = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, S.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cH.A)({ ...s }),
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
    cK = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, d8.Ay)(),
            l = (0, cb.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, S.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cH.A)({ ...i }),
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
var cZ = n(387316),
    cq =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let cQ = "url(#gradient)",
    cJ = (e) => {
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
        let g = (0, d8.Ay)(),
            m = (0, cb.q)(g),
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
                            return cQ;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : cQ;
                        default:
                            return;
                    }
                })(m, r);
        return (0, S.jsxs)("div", {
            className: cZ.Ap,
            children: [
                (0, S.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cZ.fB,
                    children: [
                        (0, S.jsx)("circle", {
                            className: 0 === r || 2 === r ? cZ.F3 : void 0,
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
                (0, S.jsx)("div", { className: cZ.Vw, children: n }),
            ],
        });
    };
var c$ = n(104773);
function c0(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cX.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, S.jsx)("div", {
        className: c$.Q7,
        children: (0, S.jsx)("div", {
            className: c$.Nk,
            children: null != s && (0, S.jsx)("img", { className: c$.CH, alt: i, src: s }),
        }),
    });
}
let c1 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = cq.NITRO_GEM,
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
        className: iE()(c$.G3, n),
        children: (0, S.jsx)(cJ, {
            animationClassName: iE()(c$._0, { [c$.uJ]: p, [A ?? ""]: p }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case cq.NITRO_GEM:
                        return (0, S.jsx)(cW, {
                            className: p ? c$.Ow : void 0,
                            backgroundColor: iE()(c$.vH, s),
                            backgroundCircleSize: r,
                        });
                    case cq.NITRO_LOGO:
                        return (0, S.jsx)(cK, { circleColor: E, ellipseOpacity: m });
                    case cq.AVATAR_DECO:
                        if (null != c)
                            return (0, S.jsx)(c0, {
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
var c2 = n(14313);
function c3(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cw.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, S.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c2.n5, children: n });
    return (0, S.jsx)(sm.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, S.jsx)("div", { className: c2.Lg, children: r }),
    });
}
function c5(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, S.jsxs)("div", {
        className: c2.Ip,
        children: [
            (0, S.jsx)("div", { className: c2.Ej }),
            (0, S.jsx)("div", { className: iE()({ [c2.ch]: t > n, [c2.q_]: t === n }) }),
        ],
    });
}
function c6(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, S.jsxs)("div", {
        className: c2.ZM,
        children: [
            (0, S.jsx)(c3, { userRecord: i, placement: 1 }),
            (0, S.jsx)(c5, { numSentReferrals: n, placement: 1 }),
            (0, S.jsx)(c3, { userRecord: s, placement: 2 }),
            (0, S.jsx)(c5, { numSentReferrals: n, placement: 2 }),
            (0, S.jsx)(c3, { userRecord: l, placement: 3 }),
        ],
    });
}
let c4 = function () {
    let e = (0, f.bG)([cz.A], () => cz.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cY.J)(),
        i = T.useMemo(() => t.map((e) => new cF.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cB.aK.REDEEMED && s.redeemed++, e === cB.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cY.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cY.Z) * 100,
        d = (0, S.jsxs)("div", {
            className: c2.hE,
            children: [
                (0, S.jsx)(c1, { percentage: u, progressCircleVariation: cq.NITRO_LOGO, iconClassName: c2.ER }),
                (0, S.jsxs)("div", {
                    className: c2.Ns,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: c2.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, S.jsx)(c6, { userRecords: i }),
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cY.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, S.jsx)("div", {
                            className: c2.Fb,
                            children: (0, S.jsx)(ck.wL, {
                                "data-migration-pending": !0,
                                className: c2.r$,
                                color: l$.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (td.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sS.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, S.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, S.jsxs)("div", {
                                    className: c2.Zn,
                                    children: [
                                        (0, S.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c2.QH,
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
        c = s.redeemed === cY.Z;
    return (0, S.jsx)(ez.f5, {
        value: a,
        children: (0, S.jsx)("div", {
            className: iE()(c2.kL, { [c2.AP]: c }),
            children: (0, S.jsx)("div", { ref: o, className: iE()(c2.d_, { [c2.kS]: c }), children: d }),
        }),
    });
};
var c8 = n(194509),
    c7 = n(465794),
    c9 = n(774774),
    ge = n(156601),
    gt = n(543213),
    gn = n(88001),
    gi = n(148155),
    gs = n(487518);
let gl = "to_premium_home_button",
    gr = "premium home page";
function ga(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t$.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cj.A)(),
        u = null != t.trialEndsAt ? ix()(t.trialEndsAt).diff(ix()(), "d") : 0,
        d = t$.hd[t.planIdFromItems],
        c = ax.Ay.getDefaultPrice(d.id),
        g = ax.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cb.M)(s) ? c9.at.PREMIUM_TIER_2_WHITE_FILL : c9.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, S.jsx)(c9.e4, { text: U.intl.string(U.t.EyjDRE), className: gs.LW, colorOptions: e })
                    : (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(c9.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: gs.uS,
                                  colorOptions: e,
                              }),
                              (0, S.jsx)("div", { className: gs.on }),
                          ],
                      }),
                (0, S.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gs.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uR.$g)(c.amount, c.currency);
                            return U.intl.format(gi.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? U.intl.format(U.t.z2oQtA, {
                                  percent: i?.percentage ?? t$.Cq,
                                  regularPrice: g,
                                  renewalDate: ax.Ay.getExpectedRenewalDate(t, o),
                              })
                            : U.intl.formatToPlainString(U.t["3ZiutU"], {
                                  percent: i?.percentage ?? t$._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? t$.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, S.jsx)(ge.A, { variant: void 0, subscriptionTier: t$.pe.TIER_2, interval: d.interval });
}
function go() {
    let e = (0, cD.k5)(),
        t = (0, cD.nf)(),
        n = (0, d8.Ay)(),
        i = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cj.A)(),
        a = (0, cP.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, S.jsxs)("div", {
        className: iE()(gs.$Y, { [gs.J5]: e || d }),
        children: [
            (0, S.jsxs)("div", {
                className: gs.jp,
                children: [
                    l
                        ? (0, S.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gs._K,
                              children: (0, gn.DP)(),
                          })
                        : (0, S.jsx)(cR.A, { className: gs.TJ }),
                    l && !e
                        ? (0, S.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                    (0, S.jsx)(c9.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: gs.LW,
                                        colorOptions: c9.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, S.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gs.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, S.jsx)(ga, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(c9.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: gs.uS,
                                            colorOptions: (0, cb.M)(n)
                                                ? c9.at.PREMIUM_TIER_2_WHITE_FILL
                                                : c9.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, S.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gs.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, S.jsx)(gt.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gt.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gt.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gt.Nz.FRACTIONAL_PREMIUM
                                : gt.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, S.jsxs)(l1.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(c7.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gl,
                                              target: gr,
                                          }),
                                              (0, tH.default)(),
                                              (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? U.intl.string(U.t.VR2iVB) : U.intl.string(U.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, S.jsxs)(l1.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gl,
                                              target: gr,
                                          }),
                                              (0, tH.default)(),
                                              (0, t7.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: U.intl.string(U.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, S.jsx)(v.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
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
                className: gs.ah,
                children: (0, S.jsx)("img", { className: gs.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gu() {
    return (0, S.jsxs)("div", {
        className: gs.T1,
        children: [
            (0, S.jsx)("img", { className: gs.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, S.jsxs)("div", {
                className: gs.b4,
                children: [
                    (0, S.jsx)(N.D, {
                        className: gs.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, S.jsx)(Q.E, {
                        className: gs.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, S.jsx)(c8.A, {
                        className: iE()(gs.Tp, gs._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: gs.VV },
                        color: l$.$n.Colors.CUSTOM,
                        onClick: () => {
                            td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let gd = function () {
        let e = (0, dl.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tw.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            i = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([o8.A], () => o8.A.hasFetchedSubscriptions()),
            l = (0, cO.Y)(t$.T7),
            [r, a] = T.useState(!0),
            o = (0, cj.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dM.A], () => {
                let e = dM.A.getMarketingComponentByType(cC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oP.Fr || oP.v1) && null != u,
            c = T.useRef(null);
        (0, cV.i)();
        let g = (0, cU.m)();
        T.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([ov.hP(), ov.$o(), (0, cv.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, S.jsx)(u5.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, S.jsx)(cL.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, S.jsx)(oI.y, {});
        let p = !!i?.hasActiveTrial;
        return (0, S.jsx)(ez.f5, {
            value: t,
            children: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, S.jsx)(cG.m, { config: u }),
                            (0, S.jsx)(go, {}),
                            g && (0, S.jsx)(c4, {}),
                            !d && (0, S.jsx)(gu, {}),
                            (0, S.jsx)(cM.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !p,
                                selectedPlanColumnClassName: gs.JG,
                                selectedPlanTier: t$.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, S.jsx)(cy.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, S.jsx)("div", { ref: c, className: gs._Z }),
                    }),
                ],
            }),
        });
    },
    gc = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return (0, ax.YE)(e, t$.PremiumTypes.TIER_2) ? (0, S.jsx)(gd, {}) : (0, S.jsx)(cN.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    gg = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [gc] }),
    gm = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: og.L,
        buildLayout: () => [gg],
    }),
    gA = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: al.t,
        usePersistentBadge: function (e) {
            let t = (0, c_.e)(e);
            return T.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gm],
    });
var gE = n(104510),
    gh = n(820739),
    gx = n(859241),
    gp = n(527113),
    gS = n(338548),
    gT = n(776096),
    gf = n(711014),
    gI = n(178368),
    g_ = n(809545),
    gN = n(168482);
function gC() {
    return (0, S.jsxs)("div", {
        className: g_.iE,
        children: [
            (0, S.jsx)("img", { className: g_.Kk, alt: "", src: gN }),
            (0, S.jsxs)("div", {
                className: g_.pq,
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
                    ((0, t7.pX)(I.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var gy = n(365199),
    gb = n(878678),
    gv = n(443865),
    gj = n(980707),
    gO = n(473145);
function gL(e) {
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
            a === t$.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = U.intl.string(U.t.LiLRRT)),
                (o.cancel.subtext = U.intl.string(U.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = T.useMemo(
        () =>
            l.isPausedOrPausePending && a === t$.xc.NONE
                ? (0, S.jsx)(tn.Dr, {
                      id: "manage-subscription",
                      label: U.intl.string(U.t.obRG6Y),
                      action: () => (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gv.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gv.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, S.jsxs)(gj.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: i,
        children: [
            (0, S.jsx)(tn.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sS.openModalLazy)(async () => {
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
            (0, gO.I5)(t)
                ? (0, S.jsx)(tn.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sS.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, S.jsx)(tn.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sS.openModalLazy)(async () => {
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
var gR = n(545934),
    gD = n(548118),
    gP = n(987144),
    gG = n(864310),
    gM = n(290413);
function gU(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gG.A)(t.id);
    return (0, S.jsxs)("div", {
        className: n ?? gM.OA,
        children: [
            (0, S.jsx)(gD.Ay, { className: gM.$f, guild: t, size: gD.Ay.Sizes.MEDIUM }),
            (0, S.jsxs)("div", {
                className: gM.gI,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, S.jsxs)("div", {
                        className: gM.ew,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gM.QW,
                                children: [
                                    (0, S.jsx)(gE._, {
                                        className: gM.Wz,
                                        color: n4.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
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
                                        (0, S.jsx)("div", { className: gM.zk }),
                                        (0, S.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gO.gb)(t.premiumTier, { useLevels: !1 }),
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
function gV(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: gM.Nr,
              children: [
                  (0, S.jsx)(gU, { guild: n }),
                  (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gE._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gP.g)({
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
var gk = n(747381);
let gw =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gF(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, gO.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cj.A)(),
        c = T.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
                    let n = [
                        U.intl.formatToPlainString(U.t["dLlKX/"], { numEmojiSlots: t$.TG[e].limits.emoji }),
                        U.intl.formatToPlainString(U.t["+ANIfv"], { numStickerSlots: t$.TG[e].limits.stickers }),
                        U.intl.formatToPlainString(U.t["4gt60b"], {
                            numSoundboardSlots: t$.TG[e].limits.soundboardSounds,
                        }),
                        U.intl.formatToPlainString(U.t.XahSjZ, {
                            resolution: t$.TG[e].limits.screenShareQualityResolution,
                            framerate: t$.TG[e].limits.screenShareQualityFramerate,
                        }),
                        U.intl.formatToPlainString(U.t.NbNs7S, { bitrate: t$.TG[e].limits.bitrate / 1e3 }),
                        U.intl.formatToPlainString(U.t.VVKcpn, { filesize: t$.TG[e].limits.fileSize / 1024 / 1024 }),
                        U.intl.formatToPlainString(U.t.TbpCvv, { numVideoStageSeats: t$.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? oD.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return U.intl.formatToPlainString(U.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = T.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, S.jsxs)("div", {
        className: iE()(gk.iq, { [gk.Mt]: l }),
        children: [
            (0, S.jsxs)("div", {
                className: gk.kd,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gk.bB, src: gw }),
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
                                              (0, S.jsx)("div", { className: gk.zk }),
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
                                              (0, S.jsx)("div", { className: gk.zk }),
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
            (0, S.jsx)(aA.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, S.jsx)(gL, {
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
                    (0, S.jsx)(n9.D, {
                        innerRef: r,
                        "aria-label": U.intl.string(U.t.PdRCRg),
                        className: gk.Mj,
                        ...e,
                        children: (0, S.jsx)(gy.MoreHorizontalIcon, {
                            size: "xs",
                            color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gB(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gk.Nr,
        children: [
            (0, S.jsx)("div", {
                className: gk.MY,
                children:
                    null != l
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(gU, { guild: l, className: gk.OA }),
                                  (0, S.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, gb.K4)({
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
                              className: gk.OA,
                              children: (0, S.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, S.jsx)(
                    gF,
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
function gz(e) {
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
                                gR.A.createFromServer(
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
                if ((!(0, gO.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsx)("div", {
        className: gk.kR,
        children: oD.default
            .keys(l)
            .map((e) => (0, S.jsx)(gB, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gY = n(502572),
    gX = n(983511),
    gH = n(342744),
    gW = n(496431);
let gK = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gW.A)(n);
    return (0, S.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ip.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var gZ = n(731536);
function gq(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gO.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t$.xc.NONE;
    return 0 === l.length
        ? null
        : (0, S.jsxs)("div", {
              className: gZ.Nr,
              children: [
                  (0, S.jsxs)("div", {
                      className: gZ.MY,
                      children: [
                          (0, S.jsxs)("div", {
                              className: gZ._L,
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: gZ.MD,
                                      children: [
                                          (0, S.jsx)("img", { alt: "", className: gZ.F8, src: gw }),
                                          (0, S.jsx)("div", {
                                              className: iE()(gZ.qS, "theme-dark"),
                                              children: (0, S.jsx)("span", { className: gZ.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsxs)("div", {
                                      className: gZ.Qp,
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
                          (0, S.jsx)(gY.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, S.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gE._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sS.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, S.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gP.g)({
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
                          gQ,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gO.I5)(e),
                              isCanceled: (0, gO.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gQ(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, S.jsx)(gK, { cooldown: u.getTime() })
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
        className: iE()(gZ.iq, { [gZ.Mt]: i }),
        children: [
            (0, S.jsxs)("div", {
                className: gZ.kd,
                children: [(0, S.jsx)("img", { alt: "", className: gZ.bB, src: gw }), t],
            }),
            c &&
                (0, S.jsx)(aA.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsxs)(gj.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": U.intl.string(U.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, S.jsx)(tn.Dr, {
                                        id: "cancel-boost",
                                        label: U.intl.string(U.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sS.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gX.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, S.jsx)(tn.Dr, {
                                        id: "uncancel-boost",
                                        label: U.intl.string(U.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sS.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gH.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, S.jsx)(n9.D, {
                            innerRef: o,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            className: gZ.Mj,
                            ...e,
                            children: (0, S.jsx)(gy.MoreHorizontalIcon, {
                                size: "xs",
                                color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var gJ = n(834612);
function g$(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== t$.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, S.jsxs)("div", {
              className: gJ.i,
              children: [
                  (0, S.jsxs)("div", {
                      className: gJ.b,
                      children: [
                          (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(gz, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, S.jsx)(gq, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g0 = n(333722),
    g1 = n(9146);
function g2() {
    return (0, S.jsxs)("div", {
        className: g1.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, S.jsx)("div", {
                className: g1.kR,
                children: g0.s.map((e, t) => {
                    let n = e.icon;
                    return (0, S.jsxs)(
                        "div",
                        {
                            className: g1.Nr,
                            children: [
                                (0, S.jsx)(n, { className: g1.Kk }),
                                (0, S.jsx)(Q.E, {
                                    className: g1.h_,
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
var g3 = n(847374),
    g5 = n(232122),
    g6 = n(665984);
function g4() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, S.jsxs)("div", {
        className: g6.iE,
        children: [
            (0, S.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, S.jsx)("ul", {
                className: g6.p_,
                children: g5.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, S.jsxs)(
                        n9.D,
                        {
                            tag: "li",
                            className: iE()(g6.Aw, { [g6.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, S.jsxs)("div", {
                                    className: g6.k7,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            className: g6.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, S.jsx)(g3.a, {
                                            size: "sm",
                                            color: n4.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g6.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsx)(Q.E, {
                                        className: g6.ZF,
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
var g8 = n(182859),
    g7 = n(25525),
    g9 = n(416763);
function me() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, S.jsxs)("div", {
        className: g9.wx,
        children: [
            (0, S.jsxs)("div", {
                className: g9.Qs,
                children: [
                    (0, S.jsxs)("div", {
                        className: g9.B5,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: g9.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(g7.default.hjvcLO),
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
            (0, S.jsx)(g8.A, {
                variant: "member",
                className: g9.iO,
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
var mt = n(315629),
    mn = n(87719),
    mi = n(961085);
function ms() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == e || ax.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mt.h, {
        color: "nitro-pink",
        className: mi.vK,
        children: [
            (0, S.jsxs)("div", {
                className: mi.nw,
                children: [
                    (0, S.jsx)("img", { alt: "", className: mi.q3, src: gw }),
                    (0, S.jsxs)("div", {
                        className: mi.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: t$.M4, boostCount: t$.M4 }),
                            }),
                            (0, S.jsxs)("div", {
                                className: mi.xv,
                                children: [
                                    (0, S.jsx)(al.t, { className: mi.nE }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: t$.M4,
                                            boostCount: t$.M4,
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
                icon: al.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: mn.e,
            }),
        ],
    });
}
var ml = n(532991);
function mr() {
    let e = (0, f.bG)([gT.A], () => gT.A.affinities),
        t = (0, f.bG)([gf.Ay], () => gf.Ay.getFlattenedGuildIds()),
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
              className: ml.i,
              children: [
                  (0, S.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, S.jsx)("div", { className: ml.k, children: n.map((e) => (0, S.jsx)(gV, { guildId: e }, e)) }),
              ],
          });
}
var ma = n(967246);
function mo(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(mt.h, {
        color: "nitro-pink",
        className: ma.vK,
        children: [
            (0, S.jsxs)("div", {
                className: ma.nw,
                children: [
                    (0, S.jsxs)("div", {
                        className: ma.MD,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: ma.F8, src: gw }),
                            (0, S.jsx)("div", {
                                className: iE()(ma.qS, "theme-dark"),
                                children: (0, S.jsx)("span", { className: ma.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: ma.Tm,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, S.jsxs)("div", {
                                className: ma.xv,
                                children: [
                                    (0, S.jsx)(al.t, { className: ma.nE }),
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: t$.M4,
                                            boostCount: t$.M4,
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
                icon: gE._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sS.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, S.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gP.g)({
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
var mu = n(89150);
function md(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([gI.A], () => gI.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = (0, f.bG)([gT.A], () => gT.A.affinities),
        r = (0, f.bG)([gf.Ay], () => gf.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([gx.A], () => gx.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cj.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t$.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = ax.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, S.jsxs)("div", {
        className: mu.GO,
        children: [
            (0, S.jsx)(u5.kb, { className: mu.ek }),
            (0, S.jsx)(me, {}),
            (0, S.jsx)(ms, {}),
            g > 0 && (0, S.jsx)(mo, { count: g }),
            d && (0, S.jsx)(gS.A, {}),
            !a && (0, S.jsx)(gC, {}),
            (0, S.jsxs)("div", {
                className: mu.C_,
                children: [
                    (0, S.jsx)(g$, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, S.jsx)(mr, {}),
                    (0, S.jsx)(gp.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, S.jsx)(g2, {}),
                    (0, S.jsx)(g4, {}),
                ],
            }),
        ],
    });
}
var mc = n(819677);
let mg = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                (ov.hP(), ov.$o(), (0, gh.CD)(), (0, cv.zS)(null, null, I.tF5.DISCOVERY), (0, gh.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([o8.A], () => ({
                    hasFetchedSubscriptions: o8.A.hasFetchedSubscriptions(),
                    premiumSubscription: o8.A.getPremiumTypeSubscription(),
                })),
                n = (0, cO.Y)(),
                i = (0, f.bG)([o4.A], () => o4.A.hasFetchedPaymentSources),
                s = (0, f.bG)([gx.A], () => gx.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, S.jsx)("div", { className: iE()(mc.kL, mc.Lq), children: (0, S.jsx)(oI.y, {}) })
                : (0, S.jsxs)("div", {
                      className: mc.kL,
                      children: [
                          (0, S.jsx)("div", { className: mc.Tp }),
                          (0, S.jsx)("div", { className: mc.Qs, children: (0, S.jsx)(md, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    mm = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mg] }),
    mA = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [mm],
    }),
    mE = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: gE._,
        buildLayout: () => [mA],
    });
var mh = n(153659),
    mx = n(155984),
    mp = n(357758),
    mS = n(262077),
    mT = n(281445),
    mf = n(624479),
    mI = n(626584),
    m_ = n(131607),
    mN = n(95035),
    mC = n(196736),
    my = n(685743),
    mb = n(349085),
    mv = n(342942),
    mj = n(376205),
    mO = n(252589),
    mL = n(758836),
    mR = n(49999),
    mD = n(394107),
    mP = n(439050);
let mG = new mI.A("GameServerSubscriptionsSection");
function mM(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mU(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mV = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mb.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, m_.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = dQ.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, my.A)(c, t.id, tw.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, mv.A)({
                provider: mT.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mR.i.TAKE_ACTION), g());
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
            [o8.A, d$.A],
            () => {
                let e = null != l ? o8.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d$.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, uR.$g)(u, o.priceCurrency) })
                            : null,
                    c = mM(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(mD.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(mD.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(mD.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mU,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = o8.A.getSubscriptionById(l),
                t = null != e ? mM(e.currentPeriodEnd) : "";
            (0, n8.A)({
                title: U.intl.string(mD.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(mD.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(mD.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await ov.M2(l, s), await ov.hP());
                    } catch (e) {
                        mG.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = o8.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d$.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uR.$g)(u, o.priceCurrency) : "",
                c = mM(e.currentPeriodEnd);
            (0, n8.A)({
                title: U.intl.string(mD.default.o96qbc),
                subtitle: U.intl.formatToPlainString(mD.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cv.ur)(r);
                        let t = e.items;
                        (await ov.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ax.UC)(t, e.currency),
                            s,
                        ),
                            await ov.hP());
                    } catch (e) {
                        mG.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, S.jsxs)("div", {
        className: mP.nM,
        children: [
            (0, S.jsxs)("div", {
                className: mP.M4,
                children: [
                    (0, S.jsxs)("div", {
                        className: mP.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, S.jsx)("img", { className: mP.uP, src: a, alt: "" }),
                            (0, S.jsx)("div", { className: mP.tw }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: mP.CR,
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
                                          className: mP.CQ,
                                          children: [
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, S.jsx)(n9.D, {
                                                  className: mP.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, S.jsx)(uV.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, S.jsx)(mf.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, S.jsx)(mN.A, { onClick: A, children: U.intl.string(mD.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: mP.Rd,
                children: [
                    (0, S.jsxs)("div", {
                        className: mP.Ff,
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
                                          className: mP.ez,
                                          children: [
                                              (0, S.jsx)(i3.E, { size: "xs", color: "text-feedback-critical" }),
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
function mk(e) {
    let { servers: t } = e,
        n = (0, mC.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mO.Y)(),
        s = (0, f.bG)([lh.default], () => ax.Ay.canUseShopDiscounts(lh.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([o8.A], () => (0, mj.HY)(t, i, (e) => o8.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !d$.A.isLoadedForSKU(e) && !d$.A.isFetchingForSKU(e));
        e.length > 0 && (0, cv.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tH.default)(), (0, t7.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mL.G2.GAME_SERVERS)));
    }, []);
    return (0, S.jsxs)("div", {
        className: mP.uW,
        children: [
            (0, S.jsxs)("div", {
                className: mP.wx,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(mD.default.vCzwM7),
                    }),
                    (0, S.jsxs)("div", {
                        className: mP.h_,
                        children: [
                            (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(mD.default.y85Eg9),
                            }),
                            n &&
                                (0, S.jsx)(mN.A, {
                                    onClick: a,
                                    children: (0, S.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(mD.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", {
                className: mP.p_,
                children: t.map((e) =>
                    (0, S.jsx)(mV, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mw = n(55766),
    mF = n(696986),
    mB = n(364036);
function mz(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, S.jsx)(mF.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: mB.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, S.jsx)(mF.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: mB.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mB.RI }),
                    (0, S.jsxs)("div", {
                        className: mB.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mB.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mB.h_,
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
var mY = n(872351),
    mX = n(9113),
    mH = n(599941),
    mW = n(384684),
    mK = n(2242);
let mZ = [];
var mq = n(885574),
    mQ = n(508770),
    mJ = n(912851),
    m$ = n(182744);
let m0 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, S.jsx)(n9.D, {
        onClick: i ? void 0 : n,
        className: m$.x6,
        children: (0, S.jsxs)("div", {
            className: m$.hQ,
            children: [
                i
                    ? (0, S.jsx)(oI.y, { type: oI.y.Type.PULSING_ELLIPSIS, className: m$.__invalid_spinner })
                    : (0, S.jsx)(Q.E, { variant: "text-md/medium", className: m$.Pf, children: t }),
                (0, S.jsx)(g3.a, { size: "md", color: "currentColor", className: m$.UE }),
            ],
        }),
    });
};
var m1 = n(465932),
    m2 = n(543767),
    m3 = n(951555),
    m5 = n(790284),
    m6 = n(636194),
    m4 = n(624456),
    m8 = n(710144),
    m7 = n(815332),
    m9 = n(162093),
    Ae = n(557506);
function At(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tZ.GV)(),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return (n(!0), await ov.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === mK.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === mK.bN.INTANGIBLE),
        A = ix()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = U.intl.formatToPlainString(U.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, S.jsx)(sp.a, {
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
                (0, S.jsx)(m9.x, { listingId: i.id, guildId: n.guild_id, className: Ae.P }),
            ],
        }),
    });
}
var An = n(319225),
    Ai = n(746080),
    As = n(883616);
function Al(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, S.jsxs)("div", {
        className: As.L0,
        children: [
            (0, S.jsxs)("div", {
                className: As.a5,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: As.HU, children: t }),
                    i &&
                        (0, S.jsx)(sm.m, {
                            text: s,
                            children: (0, S.jsx)(mq.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: As.Mo,
                            }),
                        }),
                ],
            }),
            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", className: As.sx, children: n }),
        ],
    });
}
function Ar(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, m2.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tw.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([o4.A], () => [o4.A.hasFetchedPaymentSources, o4.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, S.jsx)(m3.A, { subscription: t, currentInvoicePreview: i })
        : (0, S.jsx)(oI.y, {});
}
function Aa(e) {
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
        : (0, S.jsx)(t4.D, {
              label: U.intl.string(U.t["4neDM+"]),
              children: (0, S.jsx)("div", {
                  className: As.__invalid_rowButtons,
                  children: n
                      ? (0, S.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, S.jsxs)(S.Fragment, {
                            children: [
                                !t && !s && (0, S.jsx)(m0, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, S.jsx)(m0, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Ao = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, m4.M)(e),
                n = (0, f.bG)([m6.A], () => m6.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([m6.A], () =>
                    null != n ? m6.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sv.A], () => sv.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mH.XE)();
            T.useEffect(() => {
                l && null != s && null == m6.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ix()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uR.$g)(t.price, t.currency) : "",
                              s = ix()(t.createdAt).format("M/D/YY"),
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
        d = (0, tZ.GV)(),
        { analyticsLocations: c } = (0, ez.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m1.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await ov.QP(t, c),
                (0, An.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
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
        className: As.kL,
        children: [
            (0, S.jsx)(m8.A, {
                onClick: r,
                className: As.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, S.jsxs)(S.Fragment, {
                        children: [
                            null != s && (0, S.jsx)(gD.Ay, { guild: s, active: !0, size: gD.Ay.Sizes.MEDIUM }),
                            (0, S.jsxs)("div", {
                                className: As.if,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: As.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: As.xp,
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: As.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, S.jsx)(tc.Lp, { text: U.intl.string(U.t["7uFZGt"]) })
                                                : y
                                                  ? (0, S.jsx)(tc.Lp, {
                                                        text: U.intl.string(U.t["6anton"]),
                                                        color: n4.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : x
                                                    ? (0, S.jsx)(sm.m, {
                                                          text: U.intl.string(U.t.eSuJE2),
                                                          children: (0, S.jsx)("div", {
                                                              children: (0, S.jsx)(tc.Lp, {
                                                                  className: As.qc,
                                                                  text: U.intl.string(U.t.NrRwIl),
                                                                  color: n4.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, S.jsx)(sm.m, {
                                                      text: U.intl.string(U.t.nv1IqK),
                                                      children: (0, S.jsx)("div", {
                                                          className: As.Bi,
                                                          children: (0, S.jsx)(mQ.E, {
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
                            (0, S.jsx)(n9.D, {
                                onClick: i(r),
                                "aria-label": U.intl.string(U.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, S.jsx)(g3.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: iE()(As.D6, { [As.S7]: l }),
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
                          (0, S.jsx)("div", { className: As.yF }),
                          (0, S.jsx)(m7.A, { groupListingId: i.id, subscription: t, className: As.kE }),
                          (0, S.jsxs)("div", {
                              className: As.Zx,
                              children: [
                                  (0, S.jsx)(Al, { label: C, value: N }),
                                  (0, S.jsx)(Al, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: p,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, S.jsx)(Al, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, S.jsx)(mF.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, S.jsx)(t4.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, S.jsx)(Ar, { subscription: t }),
                              }),
                          !b &&
                              (0, S.jsx)(Aa, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sS.openModal)((t) => (0, S.jsx)(At, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t7.pX)(I.BVt.CHANNEL(s.id, Ai.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          mJ.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (m5.A.setState({ subsection: eO.nR }),
                                                      (0, ng.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
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
var Au = n(661097);
let Ad = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, f.bG)([mW.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mW.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? mK.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mK.M_.NONE
                                  : mK.M_.IN_SUBSCRIPTION_SERVER;
                        })([mW.A]),
                    ) === mK.M_.SUBSCRIBED,
                n = (0, f.bG)([o8.A], () => o8.A.getActiveGuildSubscriptions()),
                i = T.useRef(!1);
            return (
                T.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o8.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o8.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), ov.hP());
                }, [e, t]),
                n ?? mZ
            );
        })(),
        { loading: i } = (0, mH.eb)(n);
    return ((0, mX.A)(oP.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, S.jsx)(oI.y, {})
        : 0 === n.length
          ? null
          : (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mY.z, variant: "secondary", onClick: t }),
                    (0, S.jsx)(mF.h, { size: 10 }),
                    (0, S.jsx)(n7.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, S.jsx)("div", {
                            className: Au.A,
                            children: n.map((e) => (0, S.jsx)(Ao, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ac = n(327479),
    Ag = n(932012);
function Am(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, S.jsx)(mF.h, { size: 4 }),
            (0, S.jsx)(Q.E, { variant: "text-md/normal", className: Ag.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, S.jsx)(mF.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: Ag.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ag._e }),
                    (0, S.jsxs)("div", {
                        className: Ag.FS,
                        children: [
                            (0, S.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: Ag.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, S.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: Ag.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(Ac.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AA = n(548411),
    AE = n(417098),
    Ah = n(143582),
    Ax = n(915043),
    Ap = n(631466);
function AS(e) {
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
        className: iE()(Ap.iE, t),
        children: [
            (0, S.jsx)("div", { className: iE()(Ap.wx, i), children: n }),
            l && (0, S.jsx)("div", { className: Ap.Qs, children: s }),
        ],
    });
}
var AT = n(885996),
    Af = n(144165),
    AI = n(664121),
    A_ = n(950305),
    AN = n(943775),
    AC = n(123791),
    Ay = n(900797),
    Ab = n(611643);
let Av = T.createContext({ isOpen: !1, toggleOpen: () => {} });
function Aj(e) {
    let { children: t } = e,
        [n, i] = T.useReducer((e) => !e, !1),
        s = T.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, S.jsx)(Av.Provider, { value: s, children: t(n) });
}
Aj.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(Av),
        l = i ? Ay.t : g3.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, S.jsxs)(n9.D, {
        className: iE()(Ab.L, t),
        onClick: s,
        children: [
            (0, S.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, S.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AO = n(627363),
    AL = n(243217),
    AR = n(328968),
    AD = n(163437),
    AP = n(3432);
function AG(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AM = n(562312),
    AU = (((u = {})[(u.LOADING = 0)] = "LOADING"), (u[(u.DONE = 1)] = "DONE"), (u[(u.ERROR = 2)] = "ERROR"), u);
function AV(e) {
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
            [d$.A, d0.A, AR.A, sv.A],
            () => {
                let e,
                    n = d$.A.get(r),
                    i = null != n ? d0.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AR.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AD.PJ)(o.skuFlags),
                    d = u && null != s ? sv.A.getGuild(s) : void 0,
                    c = (0, AD.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d$.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AO.YY)(a),
        x = T.useMemo(() => (null != h ? (0, AN.A)(h, 100) : null), [h]),
        p = g?.deleted ?? !1,
        _ = null != g && (0, AD.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, ez.Ay)(),
        [b] = (0, m2.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tw.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = AG(t.currentPeriodEnd),
        j = 0 === i;
    return (0, S.jsxs)(AS, {
        headerClassName: AM.dL,
        header:
            !1 === j
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsxs)("div", {
                              className: AM.VW,
                              children: [
                                  null != x &&
                                      (0, S.jsx)(Af._, { src: x.href, imageClassName: AM.Z2, width: 40, height: 40 }),
                                  (0, S.jsxs)("div", {
                                      className: AM.aF,
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
                              className: AM.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, S.jsx)(Az, {
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
                : (0, S.jsx)(oI.y, { type: oI.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, S.jsx)(AB, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, S.jsx)(AB, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, S.jsx)(AB, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, S.jsxs)("div", {
                className: AM.zH,
                children: [
                    (0, S.jsx)(AF, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsxs)("span", {
                                          className: AM.yW,
                                          children: [(0, S.jsx)(AI.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, S.jsxs)("span", {
                                              className: AM._t,
                                              children: [
                                                  (0, S.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, S.jsx)(gD.Ay, { guild: c, size: gD.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, S.jsxs)("span", {
                                  className: AM.yW,
                                  children: [(0, S.jsx)(A_.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, S.jsx)(Ak, { invoicePreview: b, subscriptionPlan: o }),
                    (0, S.jsx)(AF, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: AG(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, S.jsx)(Aw, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, S.jsx)(AX, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: p,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, S.jsx)(AY, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Ak(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, S.jsx)(AF, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, uR.CE)((0, uR.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, S.jsx)(AF, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, uR.CE)((0, uR.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, S.jsx)(AF, {
        title: U.intl.string(U.t.KI7ERx),
        content: (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, S.jsx)(sm.m, {
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
function Aw(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uR.CE)((0, uR.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, S.jsx)(AF, {
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
    return (0, S.jsx)(AF, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function AF(e) {
    let { title: t, content: n } = e;
    return (0, S.jsxs)("div", {
        className: AM.nM,
        children: [
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, S.jsx)(Q.E, { variant: "text-sm/medium", className: AM.u4, children: n }),
        ],
    });
}
function AB(e) {
    let { type: t, title: n } = e;
    return (0, S.jsx)(ar.p, {
        messageType: "warning" === t ? ar.Y.WARNING : ar.Y.ERROR,
        className: AM.Xm,
        children: (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
    });
}
function Az(e) {
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
        c = (0, AD.Se)(s),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = T.useState(!1),
        E = (0, AC.C)(t.id),
        h = (0, f.bG)([d0.A], () => d0.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, ov.QP)(l, g);
            if (null == e) return;
            (0, sS.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, S.jsx)(t, { ...n, storeListing: i, subscription: AL.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, S.jsxs)("div", {
        className: AM.fw,
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
                            (0, sS.openModalLazy)(async () => {
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
function AY(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, S.jsx)(Aj, {
        children: (e) =>
            (0, S.jsxs)("div", {
                className: AM.PX,
                children: [
                    (0, S.jsxs)("div", {
                        className: AM.wV,
                        children: [
                            e && (0, S.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, S.jsx)(Aj.Toggle, {
                                className: AM.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, S.jsx)(AT.FY, { header: i, icon: (0, AP.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function AX(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, S.jsx)("div", {
                className: AM.Ji,
                children: (0, S.jsx)(t4.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, S.jsx)(oI.y, { type: oI.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, S.jsx)("div", {
                  className: AM.Ji,
                  children: (0, S.jsxs)(AE.$T, {
                      color: AE.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, S.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, S.jsx)("div", {
                  className: AM.Ji,
                  children: (0, S.jsx)(t4.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, S.jsx)(m3.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var AH = (((d = {}).HOME = "HOME"), (d.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), d);
n(938796);
var AW = n(38405);
let AK = (0, f.UT)(d$.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d$.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AW.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cv.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AZ = n(240248),
    Aq = n(237218),
    AQ = n(763064);
function AJ(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, S.jsx)("button", {
                className: AQ.x6,
                onClick: () => l((e) => !e),
                children: (0, S.jsxs)(Q.E, {
                    className: AQ.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, S.jsx)(Ay.t, { color: n4.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, S.jsx)(g3.a, { color: n4.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: AQ.Qs,
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
var A$ = n(920352);
function A0(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, Aq.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = AK(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ax._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, S.jsxs)(AS, {
              className: iE()(A$.iE, i),
              header: (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsxs)("div", {
                          className: A$.qd,
                          children: [
                              null != a &&
                                  (0, S.jsx)(Af._, { src: a.href, imageClassName: A$.rW, width: 48, height: 48 }),
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
                  !(0, AZ.uJ)(r) &&
                      (0, S.jsx)("div", {
                          className: A$.h_,
                          children: (0, S.jsx)(AJ, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, S.jsx)("div", {
                          className: A$.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, S.jsx)(AT.FY, { header: n, icon: (0, AP.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A1 = n(185438),
    A2 = n(683380);
function A3(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AN.A)(t, 100),
        u = (0, AD.PJ)(r.flags),
        d = u ? AI.R : A_.UserIcon,
        c = u ? U.intl.string(U.t["46YF2D"]) : U.intl.string(U.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, f.bG)([sv.A], () => (u && null != g ? sv.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [d0.A],
            () => {
                if (null != a) return d0.A.get(a);
            },
            [a],
        ),
        E = AG(n.currentPeriodEnd);
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsxs)("div", {
                className: A2.wx,
                children: [
                    null != o && (0, S.jsx)(Af._, { src: o.href, imageClassName: A2.Z2, width: 48, height: 48 }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, S.jsxs)("div", {
                                className: A2.p4,
                                children: [
                                    (0, S.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: A2.N4,
                                        children: [(0, S.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, S.jsxs)("span", {
                                                    className: A2.vP,
                                                    children: [
                                                        (0, S.jsx)(gD.Ay, { guild: m, size: gD.Ay.Sizes.SMOL }),
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
            (0, S.jsx)(Aj, {
                children: (e) =>
                    (0, S.jsxs)("div", {
                        className: A2._B,
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
                            (0, S.jsx)(Aj.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, S.jsxs)("div", {
                className: A2.x0,
                children: [
                    (0, S.jsx)(A0, {
                        storeListing: i,
                        className: A2.o3,
                        cta: (0, S.jsxs)("div", {
                            className: A2.cJ,
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
                                  A0,
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
                            : (0, S.jsx)(A5, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function A5(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A1.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, S.jsx)(A0, {
        storeListing: t,
        cta: (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class A6 extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, S.jsxs)(AE.$T, {
                  color: AE.Hv.DANGER,
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
function A4(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = T.useState({ route: AH.HOME }),
        { route: l } = i;
    function r() {
        s({ route: AH.HOME });
    }
    let a = (e) => {
            (s({ route: AH.SWITCH_APP_PLANS, ...e }), n(U.intl.string(U.t.VFqtkP), r));
        },
        [o, u] = T.useState({});
    T.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AU.LOADING })),
                (0, Ah._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AU.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AU.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Ax.E)(),
        c = d !== Ax.mJ.LOADED;
    switch (l) {
        case AH.HOME:
            return (0, S.jsx)(S.Fragment, {
                children: t.map((e) =>
                    (0, S.jsx)(
                        A6,
                        {
                            subscription: e,
                            children: (0, S.jsx)(AV, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AU.LOADING : (o[e.id] ?? AU.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AH.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, S.jsx)(A3, { ...m, navigateToHome: r });
        default:
            (0, ig.xb)(l);
    }
}
var A8 = n(707989);
function A7(e) {
    let { onGoBack: t } = e,
        n = (0, f.yK)(
            [o8.A],
            () =>
                o8.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = T.useState();
    return (
        null == i && (i = (0, S.jsx)(A9, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, S.jsxs)("div", {
            children: [
                i,
                (0, S.jsx)("div", {
                    className: A8.A,
                    children: (0, S.jsx)(A4, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, S.jsx)(A9, {
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
function A9(e) {
    let { onBack: t, title: n } = e;
    return (0, S.jsxs)("div", {
        className: A8.D,
        children: [
            (0, S.jsx)(sc.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, S.jsx)(AA.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, S.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Ee = n(366999),
    Et = n(391659);
function En(e) {
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
        ? ((t = U.intl.string(gi.default["/S02sx"])), (n = U.intl.string(gi.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === t$.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = iE()({ [Et.Hs]: i, [Et.mT]: !i }),
        d = iE()({ [Et.CQ]: i, [Et.ZM]: !i }),
        c = iE()({ [Et.EM]: !i });
    return (0, S.jsxs)("div", {
        className: Et.r6,
        children: [
            (0, S.jsxs)("div", {
                className: Et.Nv,
                children: [
                    (0, S.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, S.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, S.jsx)("div", {
                    className: Et.ZS,
                    children: (0, S.jsx)("div", {
                        className: u,
                        children: (0, S.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Ei = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ax.kX)(t),
        r = l.length > 0,
        a = (0, Ee.Ay)(t.endsAt, Ee.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, S.jsx)("div", {
        children: (0, S.jsxs)("div", {
            className: iE()(n, Et.f8),
            children: [
                (0, S.jsx)("div", {
                    className: Et.J_,
                    children: (0, S.jsxs)("div", {
                        className: Et.Bh,
                        children: [
                            (0, S.jsx)("div", {
                                className: Et.xt,
                                children: (0, S.jsx)(al.t, { size: "md", color: "white", className: Et.T8 }),
                            }),
                            (0, S.jsx)("div", {
                                className: Et.pt,
                                children: (0, S.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, S.jsx)(Q.E, {
                                className: Et.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, S.jsx)(En, {
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
var Es = n(983048);
function El(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, f.yK)([d$.A], () => [d$.A.get(i), null != l ? d$.A.get(l.planId) : null]);
    if (null == o || ax.Ay.getInterval(i).intervalType !== t$.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ax.z4)(i),
        m = ax.Ay.getDisplayName(i);
    if (a) t = U.intl.string(gi.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ax._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, S.jsxs)("div", {
        className: Et.Bh,
        children: [
            (0, S.jsx)("div", {
                className: iE()({
                    [Et.bY]: g,
                    [Et.sr]: o.skuId === t$.pe.TIER_0,
                    [Et.lP]: o.skuId === t$.pe.TIER_1,
                    [Et.eb]: o.skuId === t$.pe.TIER_2,
                }),
                children: g
                    ? (0, S.jsx)(gE._, { size: "md", color: "currentColor", className: Et.Kk })
                    : (0, S.jsx)(al.t, { size: "md", color: "currentColor", className: Et.Kk }),
            }),
            (0, S.jsxs)("div", {
                className: Et.pt,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, S.jsx)(N.D, {
                            className: Et.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, S.jsx)(Q.E, {
                className: Et.PJ,
                variant: "text-md/semibold",
                children: U.intl.format(U.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Er = function (e) {
    let { className: t, entitlements: n } = e,
        i = W()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, f.yK)([dw.A], () => dw.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([o8.A], () => o8.A.getPremiumSubscription()),
        r = (0, f.bG)([o8.A], () => null == o8.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t$.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)("div", {
                className: iE()(t, Et.xF, Et.J_),
                children: Object.keys(i).map((e) =>
                    (0, S.jsx)(
                        El,
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
                            className: Et.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, S.jsx)(Es.i, {}),
                    ],
                }),
        ],
    });
};
var Ea = n(902782);
function Eo(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        [l] = (0, m2.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tw.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Ea.r : Ea.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ax.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d$.A.get(o);
    th()(null != u, "Missing plan");
    let d = (0, uR.$g)(l.total, l.currency);
    return (
        u.interval === t$.WT.YEAR
            ? (t = U.intl.format(U.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === t$.WT.MONTH &&
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
function Eu(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, S.jsx)(Eo, { subscription: t, withOverheadSeparator: n });
}
var Ed = n(580892),
    Ec = n(689255);
let Eg = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function Em() {
    return (0, S.jsx)(oG.Z, {
        className: Ec.wb,
        type: oG.Z.Types.CUSTOM,
        children: (0, S.jsxs)(sN.A, {
            align: sN.A.Align.CENTER,
            children: [
                (0, S.jsx)(sn.A, { game: null, size: sn.M.SMALL, className: Ec.pV }),
                (0, S.jsx)("span", { className: Ec.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EA(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mp._)(e, t));
}
function EE() {
    let e = (0, f.bG)([dw.A], () => dw.A.getForApplication(t$.tv), [], EA);
    return (
        T.useEffect(() => {
            (0, cd.LM)(t$.tv);
        }, []),
        (0, S.jsx)(n7.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && ax.Ay.hasAccountCredit(e)
                    ? (0, S.jsx)(Er, { className: Ec.fX, entitlements: e })
                    : (0, S.jsx)(Em, {}),
        })
    );
}
function Eh() {
    return (0, S.jsx)("hr", { className: Ec.hr });
}
let Ex = function () {
        var e;
        let t = (0, f.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
            n = (0, mS.A)({ subscriptionFilter: (e) => Ed.Hy.has(e.status) }),
            i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [o4.A],
                () => (null != t && null != t.paymentSourceId ? o4.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([o8.A], () => o8.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oL.A], () => oL.A.isBusy),
            o = (0, cO.Y)(),
            u = m5.A.useField("subsection"),
            d = m5.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, ir._)(null != u ? Eg[u] : h.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, f.bG)([o8.A], () => o8.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, f.bG)(
                [o8.A],
                () =>
                    Object.values(o8.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, f.bG)([o8.A], () =>
                Object.values(o8.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mw.f)({ enabled: A }),
            x = (0, f.yK)([o8.A], () => (0, mj.eP)(E, (e) => o8.A.getSubscriptionById(e)), [E]),
            p = (0, cj.A)({ forceFetch: !0 }),
            _ = (0, cP.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(_ && !(p.unactivatedUnits.length > 0)) &&
                (p.fractionalState !== t$.xc.NONE || p.unactivatedUnits.length > 0);
        return (T.useEffect(() => {
            d &&
                r &&
                o &&
                x.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                m5.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, x.length]),
        T.useEffect(
            () => (
                (0, cv.zS)(),
                ov.hP(),
                (0, gh.CD)(),
                ov.$o(),
                function () {
                    m5.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, S.jsx)(og.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, S.jsx)(Ad, { onGoBack: () => m5.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, S.jsx)(A7, { onGoBack: () => m5.A.setState({ subsection: null }) })
                    : (0, S.jsx)("div", {
                          className: Ec.kL,
                          children: (0, S.jsxs)("div", {
                              className: Ec.Qs,
                              children: [
                                  s ? (0, S.jsx)(Ed.Sb, {}) : null,
                                  null != t
                                      ? (0, S.jsx)(Ed.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, S.jsx)(Ed.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, S.jsxs)("section", {
                                          children: [
                                              (0, S.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: Ec.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, S.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: Ec.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, S.jsx)(Ei, {
                                                  className: Ec.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, S.jsx)(EE, {}),
                                  m > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Eh, {}),
                                              (0, S.jsx)(mz, {
                                                  count: m,
                                                  onClickManageSubscription: () => m5.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(Eh, {}),
                                              (0, S.jsx)(Am, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m5.A.setState({ subsection: eO.PZ }),
                                                          td.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, S.jsxs)("div", {
                                          ref: c,
                                          children: [(0, S.jsx)(Eh, {}), (0, S.jsx)(mk, { servers: x })],
                                      }),
                                  (0, S.jsx)(Eh, {}),
                                  null != t ? (0, S.jsx)(Eu, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, S.jsx)("div", { className: iE()(Ec.kL, Ec.Lq), children: (0, S.jsx)(oI.y, {}) });
    },
    Ep = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, S.jsx)(Ex, {}),
    }),
    ES = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [Ep],
    }),
    ET = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [ES] }),
    Ef = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: mh.L,
        usePersistentBadge: function () {
            let e = (0, mx.l)();
            return T.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, S.jsx)(i3.E, { size: "xs", color: n4.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [ET],
    }),
    EI = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [gA, mE, Ef, cI, u7],
    });
var E_ = n(540999),
    EN = n(306471),
    EC = n(964355),
    Ey = n(172272);
let Eb = (0, E.zD)(h.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isAxeEnabled),
        setValue: (e) => (0, ra.x)({ axeEnabled: e }),
    }),
    Ev = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ra.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Ej = n(276086),
    EO = n(354328);
let EL = (0, E.zD)(h.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EO.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Ej.L)("highlight_mana_components", e);
        },
    }),
    ER = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EO.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, Ej.L)("highlight_mana_text_overrides", e);
        },
    }),
    ED = (0, E.zD)(h.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EO.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Ej.L)("highlight_mana_text", e);
        },
    }),
    EP = (0, E.zD)(h.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EO.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Ej.L)("highlight_void_toggleables", e);
        },
    }),
    EG = (0, E.sN)(h.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ey.YR,
        markers: Array.from({ length: Ey.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ey.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ey.Or.getState().setHorizontalSpacing(e);
        },
    }),
    EM = (0, E.zD)(h.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ra.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EU = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([ro.default], () => ro.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ey.YR,
        markers: Array.from({ length: Ey.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ey.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ey.Or.getState().setVerticalSpacing(e);
        },
    }),
    EV = (0, E.zZ)(h.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Ev, EM, EG, EU, EL, ED, ER, EP, Eb],
    });
var Ek = n(246605),
    Ew = n(274184);
function EF(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = T.useState(s ?? ""),
        u = T.useRef(null),
        [d, c] = T.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        T.useEffect(() => g, []),
        (0, S.jsx)(t4.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, S.jsx)(sT.k, {
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
let EB = (0, E.E2)(h.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, f.bG)([Ew.Ay], () => Ew.Ay.getActionTriggeredSurveyOverride());
            return (0, S.jsx)(EF, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ek.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    Ez = (0, E.zD)(h.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => M.HZ.useSetting(),
        setValue: (e) => {
            M.HZ.updateSetting(e);
        },
    });
var EY = n(396478),
    EX = n(173936),
    EH = n(103557),
    EW = n(414079),
    EK = n(148810),
    EZ = n(380610),
    Eq = n(986238),
    EQ = n(428524),
    EJ = n(252149),
    E$ = n(221851);
let E0 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E1 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E2(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E3 extends T.Component {
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
        return (0, S.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: iE()(EQ.oS, E$.SX, EJ.N, EQ.nM),
            children: [
                (0, S.jsx)(EW.A, {
                    className: iE()(EQ.lL, { [EQ.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, S.jsxs)(sN.A, {
                    className: E$.QB,
                    children: [
                        (0, S.jsx)(sN.A.Child, {
                            basis: "50%",
                            children: (0, S.jsx)(sd.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E1,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, S.jsx)(sN.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, S.jsx)(sT.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, S.jsxs)(sN.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, S.jsx)(Q.E, {
                                className: EQ.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, S.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: EQ.AS,
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
class E5 extends T.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EZ.bD)();
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
        return W().without(E0, ...t);
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
        let t = await (0, EK.Zk)(e);
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
        (0, sS.openModal)((t) => (0, S.jsx)(E6, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, S.jsx)(EY.pp, {
            theme: nH.A.theme,
            className: iE()(E$.eT, E$.SX),
            children: (0, S.jsx)(EY.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, S.jsx)(
                      E3,
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
            : (0, S.jsx)(sm.m, {
                  text: "Generate Public Link",
                  children: (0, S.jsx)(sc.K, {
                      variant: "secondary",
                      icon: EX.LinkIcon,
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
                    disabled: E2(t ?? {}),
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
            ? (0, S.jsx)(oI.y, { className: E$.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E2(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, S.jsx)(Q.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, S.jsx)(n7.n, {
            children: (0, S.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(sd.l, {
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
                    (0, S.jsxs)(l1.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class E6 extends T.Component {
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
        e.key === sk.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, EK.SB)(e);
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
        return E2(this.props.buildOverrides ?? {});
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
            d = Eq.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, S.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, S.jsx)(sd.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Eq.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(sd.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Eq.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, S.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, S.jsx)(sT.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iq.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, S.jsx)(sd.l, {
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
                    : (0, S.jsx)(EH.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(EH.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, S.jsx)(t8.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, S.jsx)("div", {});
        let n = ar.Y.INFO;
        switch (t) {
            case 0:
                n = ar.Y.ERROR;
                break;
            case 1:
                n = ar.Y.WARNING;
        }
        return (0, S.jsx)(ar.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, S.jsx)(sp.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, S.jsx)(ce.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let E4 = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E5 });
var E8 = n(256311),
    E7 = n(883600);
let E9 = (0, E.E2)(h.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, f.bG)([E7.A], () => E7.A.overrideId());
        async function t(e) {
            let t = E7.A.getChangelog(e, "en-US");
            return null != t ? t : ((await E8.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, S.jsx)(EF, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => E8.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var he = n(506774);
let ht = new Date("2018-01-01"),
    hn = (0, E.Tf)(h.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => M.pK.useSetting() === oD.default.fromTimestamp(ht.getTime()),
        onClick: () => (he.w.set("lastChangeLogDate", ht), M.pK.updateSetting(oD.default.fromTimestamp(ht.getTime()))),
    }),
    hi = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    hs = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isForcedCanary),
        setValue: (e) => {
            (0, ra.x)({ canary: e });
        },
    }),
    hl = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.sourceMapsEnabled),
        setValue: (e) => (0, ra.x)({ sourceMapsEnabled: e }),
    }),
    hr = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ra.x)({ onlyShowPreviewAppCollections: e }),
    });
var ha = n(10094),
    ho = n(683760);
let hu = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t$.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t$.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t$.PremiumTypes.TIER_2 },
    ],
    hd = (0, E.Hn)(h.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hu,
        clearable: !0,
        useValue: () =>
            (0, f.bG)([ho.A], () => {
                let e = ho.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, ha.O)(null, void 0)
                : null === e
                  ? (0, ha.O)(void 0, void 0)
                  : (0, ha.O)(0 === e ? null : e, void 0);
        },
    });
var hc = n(374042);
let hg = (0, E.E2)(h.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, f.bG)([Ew.Ay], () => Ew.Ay.getSurveyOverride());
            return (0, S.jsx)(EF, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ek.xr(e),
                fetchOverride: (e) => (0, hc.B)(e, !0) ?? null,
            });
        },
    }),
    hm = (0, E.zZ)(h.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hd, hg, EB, E9, hn, hs, Ez, hr, hi, hl, E4],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hA = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ra.x)({ logAnalyticsEvents: e }),
    }),
    hE = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ra.x)({ logGatewayEvents: e }),
    }),
    hh = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.preventPopoutClose),
        setValue: (e) => (0, ra.x)({ preventPopoutClose: e }),
    }),
    hx = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.logKeyboardMismatches),
        setValue: (e) => (0, ra.x)({ logKeyboardMismatches: e }),
    }),
    hp = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ra.x)({ logOverlayEvents: e }),
    }),
    hS = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isLoggingQuestEvents),
        setValue: (e) => (0, ra.x)({ logQuestEvents: e }),
    }),
    hT = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([ro.default], () => ro.default.isTracingRequests),
        setValue: (e) => (0, ra.x)({ trace: e }),
    }),
    hf = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hE, hp, hT, hA, hx, hh, hS] }),
    hI = (0, E.t_)(h.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hm, hf, EV],
    }),
    h_ = (0, E.i4)(h.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: EN.V,
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
                } = (0, f.cf)([ro.default, E_.A, lh.default], () => ({
                    layoutDebuggingEnabled: ro.default.layoutDebuggingEnabled,
                    isDeveloper: E_.A.isDeveloper,
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
                    isStaff: lh.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, Ey.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = Ey.Or.getState(),
                x = M.HZ.useSetting();
            return t
                ? [
                      (0, S.jsxs)(
                          tn.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, S.jsx)(
                                      tn.sL,
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
                                      tn.sL,
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
                                      tn.sL,
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
                                      tn.sL,
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
                          tn.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.LOGGING);
                              },
                              children: [
                                  (0, S.jsx)(
                                      tn.sL,
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
                                      tn.sL,
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
                                      tn.sL,
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
                                      tn.sL,
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
                                      tn.sL,
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
                          tn.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ng.openUserSettings)(h.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, S.jsx)(
                                      tn.sL,
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
                                      tn.sL,
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
                                                  tn.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(EC.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: Ey.YR,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, S.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(EC.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: Ey.YR,
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
                                tn.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lE() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hI],
    });
var hN = n(127062),
    hC = n(25044),
    hy = n(80703),
    hb = n(123292),
    hv = n(683438),
    hj = n(890856),
    hO = n(100392),
    hL = n(102609),
    hR = n(271478),
    hD = n(386976),
    hP = n(257433),
    hG = n(32523),
    hM = n(96919),
    hU = n(688151),
    hV = n(863763);
function hk(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = T.useState(s),
        [a, o] = T.useState(!1),
        u = T.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, f.bG)([dQ.default], () => dQ.default.getId()),
        c = (0, f.bG)([dQ.default], () => {
            let e = dQ.default.getInstallationForTracking();
            return null == e ? null : (0, hy.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hP.iN)(t, g),
        A = (0, hP.Fm)(t, g),
        E = (0, f.yK)([rE.A], () =>
            W()
                .sortBy(rE.A.getRecentExposures(hU.Vh.USER, n), (e) => {
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
                (0, uy.C)((0, hO.yA)(n), () => {
                    ((0, ld.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, S.jsx)(hj.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hV.DD,
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
                                    uy.p5 &&
                                        (0, S.jsx)(n9.D, {
                                            onClick: h,
                                            children: (0, S.jsx)(EX.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", {
                        className: hV.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, S.jsx)("div", { className: hV.Os, children: x });
    let p = "";
    return (
        (p =
            t.system === hL.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hU.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, S.jsxs)("div", {
            className: hV.Os,
            children: [
                x,
                (0, S.jsx)("div", {
                    children: (0, S.jsx)(hR.g, {
                        label: t.system === hL.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: p,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, S.jsx)("div", {
                    className: hV.h_,
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
                                  className: hV.id,
                                  children: "Server Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Override Descriptor",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Recent Exposures",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, S.jsx)("div", {
                          className: hV.id,
                          children: (0, S.jsx)(hb.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, S.jsx)(su.c, { className: hV.yF }),
            ],
        })
    );
}
function hw(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = T.useState(null != i),
        [r, a] = T.useState(!1),
        o = T.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, f.bG)([rE.A], () => rE.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rE.A, sv.A, i0.A], () => {
            if (t.system === hL.l5.LEGACY) return null == rE.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sv.A.getGuildsArray().some((t) => null != i0.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rE.A], () =>
            W()
                .sortBy(rE.A.getRecentExposures(hU.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([dQ.default, sv.A, rE.A, i0.A], () => {
            let e = t.system === hL.l5.LEGACY,
                i = t.name,
                s = dQ.default.getId(),
                l = W().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rE.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hU.RE.NOT_ELIGIBLE)
                    : (i0.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hU.RE.NOT_ELIGIBLE);
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
        A = t.system !== hL.l5.LEGACY,
        E = (0, f.yK)([sv.A], () => W().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = T.useState(() => sj.A.getGuildId() ?? sj.A.getLastSelectedGuildId()),
        p = E.find((e) => e.id === h)?.name,
        I = (0, f.bG)(
            [i0.A],
            () => {
                if (A && null != h) return i0.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, f.bG)([i0.A, dQ.default], () => {
            if (!A) return;
            let e = dQ.default.getId();
            return i0.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, S.jsx)(n9.D, {
            onClick: o,
            children: (0, S.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hV.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)("span", { children: t.title }),
                            (0, S.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", { className: hV.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, S.jsxs)("div", {
              className: hV.Os,
              children: [
                  C,
                  (0, S.jsx)(hR.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, S.jsx)("div", {
                          className: hV.h_,
                          children: (0, S.jsx)(sd.l, {
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
                      className: hV.h_,
                      children: d
                          ? (0, S.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hL.l5.LEGACY
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
                                  className: hV.id,
                                  children: ["Server Descriptor", null != p ? ` (${p})` : ""],
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Client Eligibility",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, S.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Guild Assignments",
                                }),
                                (0, S.jsx)(Q.E, { variant: "code", className: hV.AS, children: g }),
                                t.system === hL.l5.LEGACY &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hV.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, S.jsx)(Q.E, {
                                                variant: "code",
                                                className: hV.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Override Descriptor",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hV.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Recent Exposures",
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "code",
                                    className: hV.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, S.jsx)("div", {
                            className: hV.id,
                            children: (0, S.jsx)(hb.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, S.jsx)(su.c, { className: hV.yF }),
              ],
          })
        : (0, S.jsx)("div", { className: hV.Os, children: C });
}
let hF = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hD.op)(),
                { experiments: n, overridesInfo: i } = (0, hG.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([dQ.default], () => {
                    let e = dQ.default.getInstallationForTracking();
                    return null == e ? null : (0, hy.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hM.oC)((0, hM.R3)((0, hM.Fm)(s), l), a);
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
                                uy.p5 &&
                                    (0, S.jsx)(hb.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uy.C)(r, () => {
                                                (0, ld.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, S.jsx)(hv.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hw : hk;
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
                              className: hV.p$,
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
    hB = (0, E.zZ)(h.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hF] }),
    hz = (0, E.t_)(h.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hB] }),
    hY = (0, E.i4)(h.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hN.c,
        useMenu: hC.A,
        buildLayout: () => [hz],
    }),
    hX = (0, E.WI)(h.X.DEVELOPER_SECTION, {
        useTitle: () => U.intl.string(U.t["+gHUHA"]),
        usePredicate: () => E_.A.isDeveloper,
        buildLayout: () => [hY, h_],
    });
var hH = n(682348),
    hW = n(871633),
    hK = n(751075),
    hZ = n(843402);
let hq = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function hQ() {
    let e = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([i9.Ay], () => hq(...i9.Ay.getOverrides()));
    T.useEffect(() => {
        if (e4.isPlatformEmbedded) return ((0, hZ.a2)(), hZ.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = T.useMemo(
        () =>
            e.reduce((e, t) => ((0, hW.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function hJ(e) {
    let { gameHistory: t } = hQ();
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
function h$(e) {
    let { namedGames: t, totalCount: n } = hJ(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h0() {
    let { namedGames: e } = hJ(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        AO.Ay.fetchApplications([t, n].filter(ig.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i4.A], () => [t, n].map(i4.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, S.jsx)(sn.A, { game: i, size: sn.M.MEDIUM_LARGE }), shape: hK.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, S.jsx)(sn.A, { game: s, size: sn.M.MEDIUM }), shape: hK.e0.ROUNDED } : null,
          };
}
let h1 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h$(2);
            return U.intl.format(U.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h0();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e))) && (0, nf.xl)(),
    }),
    h2 = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h1] });
var h3 = n(311059),
    h5 = n(406535),
    h6 = n(57129);
let h4 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(h6.default.A0FVCV),
        useSubtitle: () => U.intl.string(h6.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    h8 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(h6.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(h6.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    h7 = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [h3._, h4, h8, h2],
    }),
    h9 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    xe = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [h9] });
var xt = n(365258);
let xn = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(h6.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eQ.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(h6.default.m3oL7Q) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(h6.default["5+lnTA"]) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(h6.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, xt.g8)(t, e);
        if (null == i) return;
        let s = (0, xt.Xc)(e);
        (0, sS.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, S.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xi = n(498642),
    xs = n(573435),
    xl = n(260509),
    xr = n(771810);
function xa(e) {
    let { guild: t, size: n } = e,
        i = (0, xl.Iv)(t, n, !1, !0),
        s = (0, xl.Rb)(t);
    return null != i
        ? (0, S.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, S.jsx)("div", {
              className: xr.F,
              children: (0, S.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xo(e) {
    let { guild: t, size: n } = e;
    return (0, S.jsx)(xs.Ay, {
        className: xr.z,
        mask: xs.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, S.jsx)(xa, { guild: t, size: n }),
    });
}
var xu =
    (((c = {}).SERVER_ORDER = "server-order"),
    (c.RECENTLY_JOINED = "recently-joined"),
    (c.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (c.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    c);
let xd = {
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
var xc = n(618118);
function xg(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, f.bG)([xi.A], () => xi.A.getMemberCount(t.id));
    return (0, S.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, S.jsx)("div", { className: xc.FO, children: (0, S.jsx)(xo, { guild: t, size: 48 }) }),
            (0, S.jsx)("div", {
                className: xc.QH,
                children: (0, S.jsx)(t8.d, {
                    label: t.name,
                    description: U.intl.format(U.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let xm = function (e) {
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
                s = (0, f.bG)([gf.Ay], () => gf.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sv.A], () => sv.A.getGuilds()),
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
                [g, m] = (0, T.useState)(() => xd[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xd[e](r, a)), i(e));
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
                { id: xu.SERVER_ORDER, label: U.intl.string(U.t.STMPJ2), value: xu.SERVER_ORDER },
                { id: xu.RECENTLY_JOINED, label: U.intl.string(U.t.CbaapP), value: xu.RECENTLY_JOINED },
                { id: xu.ACTIVITY_SHARING_ON, label: U.intl.string(h6.default.ZI51JZ), value: xu.ACTIVITY_SHARING_ON },
                {
                    id: xu.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(h6.default["+kxafn"]),
                    value: xu.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, S.jsxs)("div", {
        className: xc.iE,
        children: [
            t,
            (0, S.jsxs)("div", {
                className: xc.N1,
                children: [
                    (0, S.jsx)(hv.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                            className: xc.gO,
                            children: [
                                (0, S.jsx)(aA.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, S.jsx)(gj.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": U.intl.string(U.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, S.jsx)(tn.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, S.jsx)(
                                                        tn.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (td.default.track(
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
                                        (0, S.jsxs)(n9.D, {
                                            ...e,
                                            innerRef: A,
                                            className: xc.Ku,
                                            children: [
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, S.jsx)(g3.a, { size: "xs", color: n4.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(hb.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? U.intl.string(U.t["7lxcLO"]) : U.intl.string(U.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)(sA.A, {
                "aria-live": "polite",
                role: "region",
                children: U.intl.format(h6.default.EvzDff, { count: n.length }),
            }),
            (0, S.jsxs)("ul", {
                className: xc.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, S.jsx)("div", {
                            className: xc.pb,
                            children: (0, S.jsx)(Q.E, {
                                className: xc.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, S.jsx)(
                            xg,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xA = n(68322);
let xE = (0, E.E2)(h.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [U.intl.string(h6.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, S.jsx)("div", {
                      className: xA.l,
                      children: (0, S.jsx)(iJ.w, {
                          type: "warning",
                          message: U.intl.string(h6.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, S.jsx)(xm, { notice: e });
        },
    }),
    xh = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [xn, xE, xe],
    }),
    xx = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(h6.default.khuuzv),
        useSubtitle: () => U.intl.string(h6.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    xp = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    xS = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(h6.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(h6.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    xT = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(h6.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [xx, xS, xp],
        useSearchTerms: () => [U.intl.string(U.t.VOszPA)],
    }),
    xf = (0, E.t_)(h.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        buildLayout: () => [h7, xh, xT],
    }),
    xI = (0, E.i4)(h.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cq98yL),
        icon: hH._,
        buildLayout: () => [xf],
    });
var x_ = n(712440),
    xN = n(370997);
let xC = (0, E.E2)(h.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xN.Ay,
    useSearchTerms: () => [U.intl.string(U.t["f6kk+r"])],
});
var xy = n(478016),
    xb = n(77468),
    xv = n(289498),
    xj = n(573648),
    xO = n(874490),
    xL = n(370480),
    xR = n(968309);
let xD = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xP = n(169869),
    xG = n(814925),
    xM = n(733110),
    xU = n(479785),
    xV = n(757036),
    xk = n(555837),
    xw = n(43990),
    xF = n(241524),
    xB = n(51965),
    xz = n(377368),
    xY = n(631368),
    xX = n(212739),
    xH = n(30370),
    xW = n(181666),
    xK = n(553875),
    xZ = n(660594);
function xq() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xY.$)()),
            (t = (0, xX.O)()),
            (s = null != (i = (0, f.bG)([xH.A], () => xH.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xY.C.NONE || t
                ? { variant: xY.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xY.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, ez.Ay)(tw.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xz.yW)(a),
        u = (0, xF.A)("(max-width: 485px)");
    if (l === xY.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xY.C.HAS_ACCESS:
        case xY.C.BLOCK_CLAIM:
            ((c = U.intl.string(xK.default["7PdsMK"])),
                (g = (0, S.jsx)(xB.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(xK.default.CubeLC),
                    onClick: () => {
                        (0, sS.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, S.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xY.C.NO_ACCESS:
            ((c = U.intl.string(xK.default.NwkRTZ)),
                (g = (0, S.jsx)(tX.A, {
                    defaultTextOverride: U.intl.string(xK.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t$.pe.TIER_2,
                })));
            break;
        default:
            (0, ig.xb)(l);
    }
    return (0, S.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, S.jsxs)("div", {
                className: xZ.bV,
                children: [
                    (0, S.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, S.jsx)(al.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, S.jsx)(xw.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, S.jsx)("div", {
                        className: e,
                        children: (0, S.jsxs)("div", {
                            className: xZ.Nr,
                            children: [
                                (0, S.jsxs)("div", {
                                    className: xZ.Tp,
                                    children: [
                                        (0, S.jsx)("div", {
                                            className: xZ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, S.jsx)("div", { className: xZ.$h }),
                                        (0, S.jsx)("div", { className: xZ.Rv }),
                                        (0, S.jsx)("div", { className: xZ.Lw }),
                                    ],
                                }),
                                (0, S.jsxs)("div", {
                                    className: xZ.Mn,
                                    children: [
                                        (0, S.jsxs)("div", {
                                            className: xZ.mY,
                                            children: [
                                                (0, S.jsx)("img", {
                                                    className: xZ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, S.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xZ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, S.jsx)("div", { className: xZ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, S.jsxs)(S.Fragment, {
                                        children: [
                                            (0, S.jsx)("div", { className: xZ.yF }),
                                            (0, S.jsxs)("div", {
                                                className: xZ.sQ,
                                                children: [
                                                    (0, S.jsx)(uf.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n4.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, S.jsx)(Q.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: U.intl.format(xW.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xz.Hx.CONNECT),
                                                                    (0, xR.A)({
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
var xQ = n(201718),
    xJ = n(321078),
    x$ = n(672130),
    x0 = n(379848),
    x1 = n(688901);
function x2(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mR.i.AUTO_DISMISS), [t]),
        (0, S.jsx)("div", { className: x1.Ad, children: (0, S.jsx)(mQ.E, { type: "new", variant: "brand" }) })
    );
}
function x3(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, S.jsxs)("div", {
        className: x1.kL,
        children: [
            i,
            (0, S.jsxs)("div", {
                className: x1.FS,
                children: [
                    (0, S.jsxs)("div", {
                        className: x1.TK,
                        children: [
                            (0, S.jsx)(x0.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, S.jsx)(x2, { markAsDismissed: n }) : null;
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
function x5() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, S.jsx)(x3, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, S.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xR.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let x6 = "/assets/9df988a227916145.png";
function x4() {
    return (0, S.jsx)(x3, {
        title: U.intl.string(xW.default["9cLtDI"]),
        body: U.intl.format(xW.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, S.jsx)("img", { src: x6, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xR.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function x8() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, S.jsx)(x3, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, S.jsx)("img", { src: x6, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xR.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var x7 = n(783419),
    x9 = n(534952),
    pe = n(211180),
    pt = n(247259);
function pn(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, f.cf)(
            [xH.A],
            () => ({
                isJoining: xH.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xH.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : xH.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xH.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, f.bG)([sv.A], () => sv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, S.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xb.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, S.jsxs)("div", {
            className: pt.iA,
            children: [
                (0, S.jsxs)("div", {
                    className: pt.XX,
                    children: [
                        (0, S.jsx)(gD.Ay, { size: gD.Ay.Sizes.SMALL, guild: n.guild, className: pt.$f }),
                        (0, S.jsxs)("div", {
                            className: pt.Vn,
                            children: [
                                (0, S.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, S.jsx)(nc.Anchor, {
                                    href: xj.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: pt.R,
                        children: s,
                    }),
            ],
        })
    );
}
function pi(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xk.G)()), (i = (0, xV.L)(t$.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, S.jsx)(x4, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, S.jsx)(x8, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, S.jsx)(x5, {})
              : null;
}
function ps(e) {
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
        R = (0, xO.ML)(u.type),
        D = xj.A.get(R);
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
            (null != e && (E(e), xb.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xb.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, S.jsxs)("div", {
            className: pt.FI,
            children: [
                ((t = xj.A.get(u.type)),
                (n = xj.A.get(R)),
                (i = "1" === (u.metadata ?? {})[x7.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, S.jsx)(sm.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, S.jsx)(xG.A, {
                            color: n4.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, S.jsx)(xy.U, { size: "xs", color: n4.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, S.jsxs)("div", {
                    className: pt.Il,
                    children: [
                        (0, S.jsx)("img", {
                            alt: n.name,
                            className: pt.gj,
                            src: (0, cb.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsxs)("div", {
                                    className: pt.$p,
                                    children: [
                                        (0, S.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: pt.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, S.jsx)("div", { className: pt.cG, children: s }),
                                    ],
                                }),
                                (0, S.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: pt.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? U.intl.format(pe.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, S.jsx)(n9.D, {
                            className: pt.uH,
                            onClick: function () {
                                let e = xj.A.get(u.type);
                                (0, sS.openModal)((t) =>
                                    (0, S.jsx)(sp.a, {
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
                                            xD.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, S.jsx)(s8.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, S.jsx)(uk.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, S.jsx)(pi, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xL.An)(t[x7.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xP.xE)(t, pt.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xP.dy)(t, pt.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xP.ED)(t, pt.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xP.ub)(t, pt.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xP.gZ)(t, pt.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xP.HU)(t, pt.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, S.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: pt.M4,
                                    children: U.intl.format(U.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = U.intl.string(U.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xj.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, S.jsx)(
                                    "div",
                                    { className: pt.Z3, children: (0, S.jsx)(mQ.E, { type: "new", variant: "brand" }) },
                                    "badge",
                                ),
                                (0, S.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: pt.vt,
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
                                    className: pt.jy,
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
                                                      xb.A.refresh(e.type, e.id).finally(() => {
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
                        (0, S.jsx)("div", { className: pt.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, S.jsx)(t8.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xb.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, S.jsx)(t8.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            (f(e), xb.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xj.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, S.jsx)(t8.d, {
                        label: U.intl.string(U.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xR.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xb.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, S.jsxs)("div", {
                    className: pt.HZ,
                    children: [
                        (0, S.jsx)(t8.d, {
                            label: U.intl.string(U.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xR.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xb.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, S.jsx)(su.c, {});
                })(),
                u.revoked
                    ? (0, S.jsx)(ar.p, {
                          messageType: ar.Y.INFO,
                          children: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xR.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, S.jsx)(t4.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, S.jsx)(pn, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, S.jsx)(xU.A, { partner: u.type }),
            ],
        })
    );
}
function pl(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: pt.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, S.jsxs)("div", {
                          className: pt.Il,
                          children: [
                              (0, S.jsx)("img", { alt: n.name, className: iE()(pt.gj, pt.sN), src: i }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)("div", {
                                          className: pt.$p,
                                          children: (0, S.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: pt.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: pt.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, S.jsx)(n9.D, {
                                  className: pt.uH,
                                  onClick: () =>
                                      (0, xN.d1)(n, t.scopes, () => {
                                          x_.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, S.jsx)(uk.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, S.jsx)("div", {
                      className: pt.HZ,
                      children: (0, S.jsx)(t8.d, {
                          label: U.intl.string(U.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              xQ.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function pr() {
    let e = (0, xO.gn)(),
        t = (0, i8.A)((0, x9.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, S.jsxs)("div", {
        className: pt.lA,
        children: [
            t.map((e) => null != e && (0, S.jsx)(x$.A, { application: e, innerClassName: pt.U$ }, e.id)),
            e.map((e) =>
                (0, S.jsx)(
                    xv.A,
                    { type: e.type, innerClassName: pt.U$, location: tw.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function pa(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xj.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, S.jsx)(oI.y, { type: oI.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, S.jsx)(EY.pp, {
                    theme: r,
                    className: pt.p$,
                    children: (0, S.jsx)(EY.SG, {
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
                                pl,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, S.jsx)(
                                ps,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xb.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, S.jsx)("div", { className: pt.V, children: t })
    );
}
let po = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, S.jsx)(t4.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, S.jsx)(pr, {}) });
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
    pu = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, f.bG)([xH.A], () => xH.A.isFetching()),
                n = (0, f.bG)([xH.A], () => xH.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xM.default], () => ({
                    authorizedAppsFetchState: xM.default.getFetchState(),
                    authorizedApps: xM.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, xJ.A)(lh.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d8.Ay)(),
                o = (0, f.bG)([o7.default], () => o7.default.locale);
            return (T.useEffect(() => {
                i === xM.FetchState.NOT_FETCHED && x_.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(xq, {}),
                          (0, S.jsx)(pa, {
                              fetching: t || l || (r.length > 0 && i !== xM.FetchState.FETCHED),
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
            xb.A.fetch();
        },
        useSearchTerms: () => [
            U.intl.string(U.t["+/hZM/"]),
            U.intl.string(U.t.bsbMVz),
            U.intl.string(U.t.f7yOAX),
            U.intl.string(U.t.FYKGsL),
            U.intl.string(U.t["+KCMSi"]),
        ],
    }),
    pd = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, f.bG)([xH.A], () => xH.A.getAccounts()),
                t = T.useMemo(
                    () =>
                        xj.A.filter(
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
                o = (0, i8.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, uI.RD)(o),
                g =
                    a?.type === I.fg2.RIOT_GAMES || a?.type === I.fg2.LEAGUE_OF_LEGENDS
                        ? U.intl.string(pe.default["1S6oAo"])
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
                                  text: U.intl.format(pe.default.wUXupS, {
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
        buildLayout: () => [po, pu],
    }),
    pc = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        useSubtitle: () => U.intl.string(U.t.G9JfLg),
        buildLayout: () => [xC],
        initialize: () => (
            x_.A.fetch(),
            () => {
                xN.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    pg = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: og.L,
        buildLayout: () => [pd, pc],
    }),
    pm = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: EX.LinkIcon,
        buildLayout: () => [pg],
    });
var pA = n(625657),
    pE = n(592598),
    ph = n(773371),
    px = n(532294),
    pp = n(672396);
let pS = pf(null);
function pT() {
    var e;
    let t = pf(pS);
    ((e = pS),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (pS = t)));
}
function pf(e) {
    let t = px.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sK.Ay.getOverlayKeybind(),
        s = sK.Ay.getOverlayChatKeybind();
    return {
        enabled: ph.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: pE.A.isNotificationDisabled(pp.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sx.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sx.dI)(s.shortcut) : null,
        text_opacity_slider: px.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ph.default.enabled,
    };
}
var pI = n(793480),
    p_ = n(371169),
    pN = n(264588),
    pC = n(114994),
    py = n(248675),
    pb = n(610767);
function pv(e) {
    let { project: t } = e,
        n = t.application_id,
        i = (0, f.bG)([pC.A], () => pC.A.isHidden(n), [n]),
        { data: s } = (0, AO.YY)(n),
        l = null != s ? G.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: 32 }) : null;
    return (0, S.jsxs)("div", {
        className: pb.nM,
        children: [
            null != l ? (0, S.jsx)("img", { src: l, alt: "", className: pb.Kk }) : null,
            (0, S.jsx)("div", {
                className: pb.L$,
                children: (0, S.jsx)(t8.d, {
                    label: t.name,
                    checked: !i,
                    onChange: function (e) {
                        e ? (0, pN.i)(n) : (0, pN.T)(n);
                    },
                }),
            }),
        ],
    });
}
function pj() {
    let e = (0, nb.b_)(),
        t = (0, pI.TW)("overlay_settings_conjure_apps");
    return e && t;
}
let pO = (0, E.E2)(h.X.OVERLAY_CONJURE_APPS_LIST, {
        Component: function () {
            let e;
            T.useEffect(() => {
                (0, p_.hF)();
            }, []);
            let t = (0, f.bG)([pC.A], () => pC.A.getProjects()),
                n = (0, f.bG)([pC.A], () => pC.A.getFetchStatus());
            return (
                t.length > 0
                    ? (e = t.map((e) => (0, S.jsx)(pv, { project: e }, e.id)))
                    : "error" === n
                      ? (e = (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(py.default.bjmVx1),
                        }))
                      : "success" === n &&
                        (e = (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(py.default.rGQGgB),
                        })),
                (0, S.jsxs)("div", {
                    className: pb.kL,
                    children: [
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: U.intl.string(py.default.sYm3az),
                        }),
                        e,
                    ],
                })
            );
        },
        usePredicate: pj,
        useSearchTerms: () => [U.intl.string(py.default["t4Dqb/"])],
    }),
    pL = (0, E.zZ)(h.X.OVERLAY_CONJURE_APPS_CATEGORY, {
        useTitle: () => U.intl.string(py.default["t4Dqb/"]),
        usePredicate: pj,
        buildLayout: () => [pO],
    });
var pR = n(237984),
    pD = n(63035);
function pP(e) {
    (e.preventDefault(), e.stopPropagation());
}
function pG(e) {
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
        className: iE()(pD.HS, d),
        children: [
            (0, S.jsxs)(hj.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, S.jsx)("div", { className: pD.x_, children: t }),
                    (0, S.jsxs)("div", {
                        className: pD.rN,
                        children: [
                            null != n && (0, S.jsx)("div", { className: pD.$t, children: n }),
                            (0, S.jsxs)("div", {
                                className: pD.c8,
                                children: [
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: pD.SZ,
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
                            (0, S.jsx)("div", { className: pD.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: pD.Om, children: a }),
        ],
    });
}
let pM = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, S.jsx)(pG, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, S.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, pR.b)(tw.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var pU = n(780907),
    pV = n(684013),
    pk = n(56562),
    pw = n(311043),
    pF = n(569926),
    pB = n(41984),
    pz = n(918825),
    pY = n(296027),
    pX = n(562519);
let pH = 5 * n(927813).A.Millis.DAY,
    pW = new pX.A("overlay_survey_timestamps");
function pK(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(pW.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < pH) ||
            Array.from(pW.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sS.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), pW.add(i), (n) => (0, S.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function pZ() {
    (0, ss.sL)("overlay-settings");
}
function pq(e) {
    let { className: t, game: n } = e;
    return (0, ss.NP)() && null != n && n.elevated
        ? (0, S.jsx)("div", {
              className: t,
              children: (0, S.jsx)(ar.p, {
                  messageType: ar.Y.WARNING,
                  action: (0, S.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: pZ,
                  }),
                  children: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var pQ = n(760751),
    pJ = n(9302),
    p$ = n(656513);
let p0 = new Set([
    pB.AR.INITIALIZING,
    pB.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    pB.AR.WAITING_FOR_MODULE_TRACKING,
    pB.AR.WAITING_FOR_OVERLAY_OPEN,
    pB.AR.WAITING_FOR_POPOUT_OPEN,
    pB.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    pB.AR.WAITING_FOR_REACT_INITIALIZATION,
    pB.AR.WAITING_FOR_PID_FOCUS,
    pB.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function p1(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, S.jsx)(p$.N, {
        className: pD.uR,
        collapsibleContent: (0, S.jsx)("div", { className: pD.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, S.jsx)(pG, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: iE()(pD.AC, n),
                action: (0, S.jsxs)("div", {
                    className: pD.rc,
                    children: [
                        s.action,
                        l
                            ? (0, S.jsx)(g3.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, S.jsx)(it._, {
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
let p2 = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = st();
        (0, pF.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [pY.default],
                () => (null == e || null == n ? null : pY.default.getTrackedGameByPid(n)),
                [e, n],
                i6(),
            ),
            { data: s } = (0, pF.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [pQ.A, tg.A, pw.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i9.hw)(e, !1, [pQ.A, tg.A, pw.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [i9.Ay, pQ.A, tg.A, pw.A],
                () => (null == e ? null : (0, i9.xU)(e, i9.Ay, pQ.A, tg.A, pw.A)),
                [e],
                i6(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, pJ.supportsLegacy)(),
            E = !(0, pJ.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([pY.default], () => pY.default.getGlobalEnabledStatus());
        function p(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case pz.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), pU.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case pz.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), pU.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case pz.OverlayToggledClientSettingType.LEGACY:
                    (pV.A.setEnabled(t, x), (0, pz.Q)(t, pz.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case pz.OverlayToggledClientSettingType.OOP:
                    (pV.A.setEnabled(h, t), (0, pz.Q)(t, pz.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                pK(
                    i ? pz.OverlayToggledClientSettingType.LEGACY_GAME : pz.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === pB.Ue.Disabled,
            b = i?.state === pB.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && p0.has(i.state) && !y,
            j = i?.overlayMethod === pB.Ue.OutOfProcess,
            O = i?.overlayMethod === pB.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === pB.Ue.Hook,
            R = i?.state === pB.AR.OVERLAY_CRASHED || i?.state === pB.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== pk.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === pk.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            pU.Ay.getDetectableGames();
        });
        let [M, V] = T.useMemo(
            () =>
                v
                    ? ["text-muted", n4.A.colors.TEXT_MUTED.css]
                    : b && O
                      ? ["text-feedback-warning", n4.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", n4.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && L
                          ? ["text-strong", n4.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n4.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, O, j, L],
        );
        return null == e
            ? null
            : (0, S.jsxs)(p1, {
                  onExpand: m,
                  className: g ? pD.tx : void 0,
                  title: (0, S.jsxs)(S.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, S.jsx)(sm.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, S.jsx)(xG.A, {
                                        size: 16,
                                        color: n4.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, S.jsx)(xy.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n4.A.colors.WHITE.css,
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
                              ? (0, S.jsx)(dc.k, { size: "xxs", color: V })
                              : (0, S.jsx)("div", { className: pD.W4 }),
                          (0, S.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: U.intl.string(U.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, S.jsx)(sn.A, { game: t, pid: e?.pid, size: sn.M.MEDIUM }),
                  "aria-label": U.intl.string(U.t["87O5GC"]),
                  action: (0, S.jsx)(n9.D, {
                      onClick: (e) => pP(e),
                      children: (0, S.jsx)(t8.d, {
                          checked: (o && x) || (d && h),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (pU.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (pV.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (pV.A.setEnabled(t, t),
                                              pU.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? pz.OverlayToggledClientSettingType.LEGACY_GAME
                                                : pz.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? pz.OverlayToggledClientSettingType.OOP_GAME
                                                : pz.OverlayToggledClientSettingType.OOP),
                                      null != l && pK(l, e.id ?? null));
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
                  warning: (0, S.jsx)(pq, { className: pD.Hh, game: e }),
                  children: [
                      (0, S.jsx)(pG, {
                          title: U.intl.string(U.t["7BlVIs"]),
                          description: U.intl.string(U.t.ndgADE),
                          hint: x ? void 0 : U.intl.string(U.t.cAFVsL),
                          "aria-label": U.intl.string(U.t["7BlVIs"]),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t8.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? p(e, pz.OverlayToggledClientSettingType.OOP)
                                              : p(e, pz.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pD.Kz }),
                              ],
                          }),
                      }),
                      (0, S.jsx)(pG, {
                          title: U.intl.string(U.t.BfFpW1),
                          description: U.intl.string(U.t.OzInYk),
                          hint: h ? void 0 : U.intl.string(U.t["3sYHXm"]),
                          "aria-label": U.intl.string(U.t.BfFpW1),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(t8.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? p(e, pz.OverlayToggledClientSettingType.LEGACY)
                                              : p(e, pz.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: pD.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = st();
        return null != e;
    },
    useSearchTerms: () => [U.intl.string(U.t["9cb1Uz"])],
});
var p3 = n(206885);
function p5(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i4.A], () => (null != n ? n : i4.A.getApplication(t?.id)), [n, t]);
    return (0, S.jsx)(sn.A, { game: s, pid: i, size: sn.M.SMALL });
}
function p6(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, pF.I)(t?.id);
    let o = (0, f.cf)([i9.Ay, pQ.A, tg.A, pw.A], () => (0, i9.xU)(t, i9.Ay, pQ.A, tg.A, pw.A)),
        u = (0, f.cf)([pQ.A, tg.A, pw.A], () => (0, i9.hw)(t, !1, [pQ.A, tg.A, pw.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, S.jsx)(pG, {
            title: t.name,
            icon: (0, S.jsx)(p5, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(t8.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && pK(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, S.jsx)("div", { className: pD.Kz }),
                ],
            }),
        })
    );
}
let p4 = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([pY.default], () =>
                    pY.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, hW.n1)(e)),
                l = (0, i8.A)(s.map((e) => e.id)),
                r = !(0, pJ.supportsLegacy)();
            function a(e) {
                pV.A.setEnabled(e, i);
                let t = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pz.Q)(e, pz.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && pK(pz.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                pU.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, pJ.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, S.jsx)(pG, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: pD.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              p3.O && (0, S.jsx)("div", { className: pD.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(p1, {
                      onExpand: t,
                      className: e ? pD.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, S.jsx)(n9.D, {
                          onClick: (e) => pP(e),
                          children: (0, S.jsx)(t8.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pD.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pD.XG,
                              children: s.map((e, t) =>
                                  (0, S.jsx)(
                                      p6,
                                      {
                                          rawGame: e,
                                          clientSettingType: pz.OverlayToggledClientSettingType.LEGACY_GAME,
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
    p8 = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([pY.default], () =>
                    pY.default.getGlobalEnabledStatus(),
                ),
                s = !(0, pJ.supportsOutOfProcess)(),
                l = (0, f.yK)([i9.Ay], () => i9.Ay.getGamesSeen(!0)).filter((e) => !(0, hW.n1)(e)),
                r = (0, i8.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                pV.A.setEnabled(i, e);
                let s = i9.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, pz.Q)(e, pz.OverlayToggledClientSettingType.OOP, s),
                    t && pK(pz.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                pU.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (p3.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, S.jsx)(pG, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: pD.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              p3.O && (0, S.jsx)("div", { className: pD.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(p1, {
                      onExpand: t,
                      className: e ? pD.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, S.jsx)(n9.D, {
                          onClick: (e) => pP(e),
                          children: (0, S.jsx)(t8.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: pD.SC,
                              children: (0, S.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(C.Ip, {
                              className: pD.XG,
                              children: l.map((e, t) =>
                                  (0, S.jsx)(
                                      p6,
                                      {
                                          rawGame: e,
                                          clientSettingType: pz.OverlayToggledClientSettingType.OOP_GAME,
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
    p7 = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [p2, p8, p4, pM],
    }),
    p9 = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([px.default], () => !px.default.disableClickableRegions),
        setValue: (e) => {
            pV.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    Se = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sK.Ay], () => sK.Ay.getOverlayKeybind()),
                t = !(0, pJ.supportsLegacy)(),
                n = !(0, pJ.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([i9.Ay], () => [i9.Ay.canShowAdminWarning, i9.Ay.getVisibleGame()], []),
                l = (0, ss.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sK.DV)(e?.shortcut ?? []);
            return (0, S.jsx)("div", {
                className: pD.hc,
                children: (0, S.jsxs)("div", {
                    className: pD.eH,
                    children: [
                        (0, S.jsxs)("div", {
                            className: pD.Bu,
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
                                        className: pD.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, S.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: pD.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, S.jsx)("div", {
                            className: pD.IH,
                            children: (0, S.jsx)(sh.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (th()(null != e, "Keybind should never be undefined"),
                                        i$.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.VsAZcC)],
    });
var St = n(515183),
    Sn = n(682763);
let Si = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = st();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = st();
            return null != e && (0, St.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = st(),
                n = t?.id,
                i = (0, f.bG)([pE.A], () => pE.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, St.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = i7.A.getStreamerActiveStreamMetadata()),
                    (s = se(
                        t,
                        (i =
                            null != (n = i9.Ay.getVisibleGame())
                                ? i9.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i4.A.getApplication(s) ?? void 0 });
            null != l && (0, Sn.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    Ss = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [Se, Si, p9] });
var Sl = n(93465),
    Sr = n(222407);
let Sa = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: Sl.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: Sl.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: Sl.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: Sl.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: Sl.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: Sl.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nC.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([pE.A], () => pE.A.isNotificationDisabledBySetting(Sl.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function So(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([pE.A], () => pE.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, Sr.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Su = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Sa.map(So),
    }),
    Sd = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [Su],
    }),
    Sc = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([px.default], () => px.default.getAvatarSizeMode()),
        setValue: (e) => {
            pV.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    Sg = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([px.default], () => px.default.getDisplayNameMode()),
        setValue: (e) => {
            pV.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    Sm = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([px.default], () => px.default.getDisplayUserMode()),
        setValue: (e) => {
            pV.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var SA = n(391973),
    SE = n(233741),
    Sh = n(897720),
    Sx = n(38502);
function Sp() {
    let e = SE.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sx.A.getWidget(e.id);
    return null != t && (0, Sh.ZO)(t) ? t : null;
}
n(392164);
let SS = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = Sp();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = Sp();
        null != t &&
            (e < 1
                ? (0, SA.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, SA.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var ST = n(450740),
    Sf = n(968898),
    SI = n(288737);
function S_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new SI.A({
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
        user: new cF.A({ id: s, username: e }),
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
let SN = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([px.default], () => ({
                    avatarSizeMode: px.default.getAvatarSizeMode(),
                    displayNameMode: px.default.getDisplayNameMode(),
                    displayUserMode: px.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    S_(U.intl.string(U.t.C0ZDvo), !0, !1),
                    S_(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    S_(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([SE.A, Sx.A], () => {
                    let e = SE.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sx.A.getWidget(e.id);
                    return null != t && (0, Sh.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = S_(t.username)).user = t), e) : null, ...l].filter(ig.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, S.jsx)(xw.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, S.jsxs)("div", {
                            className: iE()(pD.Y5, e),
                            children: [
                                (0, S.jsx)("div", {
                                    className: pD.kJ,
                                    children: (0, S.jsx)(ST.DH, {
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
                                    className: pD.R$,
                                    children: [
                                        (0, S.jsx)(Sf.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, S.jsx)(Sf.CS, {}),
                                        (0, S.jsx)(Sf.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, S.jsx)("div", { className: pD.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    SC = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [SN, Sc, Sg, Sm, SS],
    });
var Sy = n(54761);
function Sb() {
    let [e, t] = (0, m_.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, K.Ay)(() => () => {
        t(mR.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsxs)("div", {
                      className: Sy.xC,
                      children: [
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: Sy.tl,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsxs)("div", {
                                  className: Sy.vJ,
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
                                  className: Sy.lh,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Sy.VV,
                              children: (0, S.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mR.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(su.c, { className: Sy.yF }),
              ],
          });
}
function Sv() {
    let e = (0, f.bG)([tu.A], () => tu.A.enabled),
        t = (0, nC.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsx)(iJ.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, ng.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, S.jsx)(su.c, { className: Sy.yF }),
              ],
          })
        : null;
}
let Sj = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                pT(),
                sK.Ay.addChangeListener(pT),
                pE.A.addChangeListener(pT),
                px.default.addChangeListener(pT),
                ph.default.addChangeListener(pT),
                e4.isPlatformEmbedded && (0, hZ.a2)(),
                () => {
                    (sK.Ay.removeChangeListener(pT),
                        pE.A.removeChangeListener(pT),
                        px.default.removeChangeListener(pT),
                        ph.default.removeChangeListener(pT),
                        e4.isPlatformEmbedded && (0, hZ.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(Sb, {}), (0, S.jsx)(Sv, {})] });
            },
        },
        buildLayout: () => [p7, Ss, SC, pL, Sd],
    }),
    SO = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: pA.l,
        usePredicate: nb.b_,
        buildLayout: () => [Sj],
    });
var SL = n(687966);
let SR = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    SD = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [SR] });
var SP = n(227309),
    SG = n(29160),
    SM = n(552366),
    SU = n(938442);
function SV(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, pF.I)(t.id);
    let o = (0, f.cf)([i9.Ay, pQ.A, tg.A, pw.A], () => (0, i9.xU)(t, i9.Ay, pQ.A, tg.A, pw.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, f.cf)([i9.Ay], () => ({
            canToggleDetection: null == a || i9.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i9.Ay.isDetectionEnabled(o),
        })),
        c = (0, f.bG)([i9.Ay], () => i9.Ay.getVisibleGame()),
        [g, m] = T.useState(!1),
        A = T.useRef(null),
        E = null != c && (0, i9.Es)(o) === (0, i9.Es)(c),
        h = !s && !g,
        x = !i && !E,
        p = h || x,
        _ = T.useMemo(
            () =>
                (0, hW.n1)(o)
                    ? r
                        ? o.gameName
                        : U.intl.formatToPlainString(U.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = T.useState(_ ?? "???"),
        y = iE()(SU.tR, {
            [SM.LO]: !i,
            [SM.Rw]: i,
            [SM.FB]: null != o && i,
            [SM.xL]: r,
            [SM.fG]: null != l && l.length > 0,
        });
    function b() {
        (pU.Ay.deleteEntry(o),
            l?.forEach((e) => {
                pU.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? pQ.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hW.n1)(o) ? o.gameName : o.name,
        }),
            (0, sS.openModalLazy)(async () => {
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
                        className: iE()(SM.$K, SU.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, S.jsxs)("div", {
                                      className: SM.HS,
                                      children: [
                                          (0, S.jsx)("div", { className: SM.mO, children: _ }),
                                          (0, S.jsx)(sm.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, S.jsx)(xG.A, {
                                                  className: SM.qf,
                                                  size: 18,
                                                  color: n4.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, S.jsx)(xy.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n4.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, S.jsx)("input", {
                                      className: iE()(SM.mO, SM.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && pU.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sk.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: SM.GN,
                                        children: (0, S.jsx)(SG.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, e4.isWindows)() && (t = t.toUpperCase()),
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
                        (0, S.jsx)(aA.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, S.jsx)(gj.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": U.intl.string(U.t["UKOtz+"]),
                                    children: (0, S.jsxs)(tn.rX, {
                                        children: [
                                            h &&
                                                (0, S.jsx)(tn.Dr, {
                                                    id: "report",
                                                    label: U.intl.string(U.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, S.jsx)(tn.Dr, {
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
                                    className: iE()(SM._Q, { [SM.g9]: t.isShown }),
                                    children: (0, S.jsx)(sm.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, S.jsx)(sc.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gy.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, S.jsx)(sm.m, {
                        text: U.intl.string(U.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, S.jsx)(sE.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sS.openModalLazy)(async () => {
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
                                                              (pU.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : pU.Ay.toggleDetection(o);
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
                    className: SM.AQ,
                    children: l.map((e, t) =>
                        (0, S.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, S.jsx)(SV, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, S.jsx)("div", { className: SM.PQ }),
                                ],
                            },
                            (0, i9.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function Sk() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = hQ();
    return 0 === e.length
        ? null
        : (0, S.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, S.jsx)(n7.n, {
                  children: (0, S.jsx)("div", {
                      children: e.map((e) =>
                          (0, S.jsx)(
                              SV,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SP.a7 ? t : void 0 },
                              (0, i9.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let Sw = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, S.jsx)(Sk, {}),
});
var SF = n(424994);
let SB = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [Sw, SD],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: SF.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var Sz = n(890497),
    SY = n(853270),
    SX = n(969426);
function SH(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([i9.Ay], () => i9.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, S.jsxs)(aE.l, {
        className: iE()(SY.H, SX.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, S.jsx)(Sz.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, S.jsxs)("div", {
                className: iE()(SY.o, SU.xM),
                children: [
                    (0, S.jsx)(hb.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, S.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (pU.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SW = n(475007);
function SK() {
    let e = T.useRef(null);
    return (0, S.jsxs)("div", {
        className: iE()(SW.a, E$.Gf),
        children: [
            (0, S.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, S.jsx)(aA.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, S.jsx)(SH, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, S.jsx)(hb.Q, {
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
function SZ() {
    return (0, S.jsx)("div", {
        className: iE()(SU.tR, SM.eS, SM.Rw),
        children: (0, S.jsxs)("div", {
            className: iE()(SM.$K, SU.Vd),
            children: [
                (0, S.jsx)("div", { className: SM.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, S.jsx)(SK, {}),
            ],
        }),
    });
}
let Sq = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = hQ(),
                n = (0, f.bG)([i9.Ay], () => i9.Ay.getVisibleGame());
            return null == n
                ? (0, S.jsx)(SZ, {})
                : (0, S.jsxs)("div", {
                      className: iE()(SU.Vd, SM.C2),
                      children: [
                          (0, S.jsx)(
                              SV,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === SP.a7 ? e : void 0,
                              },
                              (0, i9.Es)(n),
                          ),
                          (0, S.jsx)(SK, {}),
                      ],
                  });
        },
    }),
    SQ = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [Sq],
    }),
    SJ = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [SQ, SB],
    }),
    S$ = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: SL.GameControllerIcon,
        usePredicate: nb.Pi,
        buildLayout: () => [SJ],
    }),
    S0 = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [S$, xI, SO, pm],
    });
var S1 = n(631670),
    S2 = n(619499),
    S3 = n(836602),
    S5 = n(591179),
    S6 = n(402860),
    S4 = n(761508),
    S8 = n(159001),
    S7 = n(344346),
    S9 = n(919395),
    Te = n(68750);
function Tt(e) {
    let { title: t, children: n } = e;
    return (0, S.jsxs)("div", {
        children: [(0, S.jsx)(N.D, { variant: "text-md/medium", className: Te.Vf, children: t }), n],
    });
}
function Tn(e) {
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
        className: iE()(Te.UA, n),
        children: (0, S.jsxs)("div", {
            className: iE()(Te.yt, i),
            children: [
                (0, S.jsx)("div", {
                    className: iE()(Te.Fp, a && Te.Oz),
                    children: (0, S.jsxs)(S.Fragment, {
                        children: [
                            (0, S.jsx)(Tt, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, S.jsx)(Tt, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, S.jsx)("div", { className: Te.oB, children: t }),
            ],
        }),
    });
}
var Ti = n(986687),
    Ts = n(101058),
    Tl = n(321191),
    Tr = n(696451),
    Ta = n(590941);
function To() {
    return (0, S.jsxs)("div", {
        className: Ta.p$,
        children: [
            (0, S.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Ta.Sl }),
            (0, S.jsx)(N.D, { className: Ta.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, S.jsx)(Q.E, { className: Ta.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Ta.h8,
                children: (0, S.jsx)(v.$, {
                    variant: "primary",
                    text: U.intl.string(U.t.jQ3pqt),
                    onClick: function () {
                        ((0, t7.pX)(I.BVt.GUILD_DISCOVERY), (0, tH.default)());
                    },
                }),
            }),
        ],
    });
}
var Tu = n(81400),
    Td = n(450232),
    Tc = n(252732),
    Tg = n(355622),
    Tm = n(408018),
    TA = n(479909),
    TE = n(290386),
    Th = n(941933),
    Tx = n(486264);
let Tp = (0, tZ.Ld)(),
    TS = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    TT = (0, tZ.Ld)();
function Tf(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TE.U)({ location: "profile_customization_about_me" }),
        [u, d] = T.useState(s ?? r),
        [c, g] = T.useState((0, Tm.x7)(u)),
        m = T.useRef(r),
        A = T.useRef(!1);
    return (
        T.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tm.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        T.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, Tm.x7)(r)));
        }, [s, r, u]),
        (0, S.jsxs)(au.A, {
            title: t,
            titleId: Tp,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, S.jsx)(TA.Ay, {
                    "aria-describedby": TT,
                    "aria-labelledby": Tp,
                    className: Tx.i,
                    innerClassName: Tx.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: TS,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: Th.y,
                    type: Tg.oU.PROFILE_BIO_INPUT,
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
                (0, S.jsx)(sA.A, { id: TT, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TI = n(821956),
    T_ = n(562819),
    TN = n(84540),
    TC = n(467690);
function Ty(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, S9.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S9.CP)(n?.id),
        c = r ? ck.wL : l$.$n;
    return (0, S.jsx)(au.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: TC.NC,
            children: [
                (0, S.jsx)(c, {
                    size: l$.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, T_.L)({ analyticsLocations: a, guild: n });
                    },
                    className: iE()({ [TC.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TC.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TI.uZ)(t, n) ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.OrokWm),
                            onClick: function () {
                                (0, TN.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tb = n(339984),
    Tv = n(942132);
let Tj = [{ name: "gif", extensions: ["gif"] }];
function TO(e) {
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
        { newestAnalyticsLocation: g } = (0, ez.Ay)(),
        m = c ? ck.wL : l$.$n,
        A = T.useCallback(() => {
            (0, Tc.XD)({
                uploadType: Tb.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Tj : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, S.jsx)(au.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, S.jsxs)("div", {
            className: Tv.NC,
            children: [
                (0, S.jsx)(m, {
                    className: iE()({ [Tv.yj]: c }),
                    size: l$.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tv.DT,
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
var TL = n(248778),
    TR = n(810188);
function TD(e) {
    let { user: t, guildId: n, className: i } = e,
        s = ax.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S9.B0)(t, n),
        d = (0, TL.u)("DisplayNameStylesSection"),
        [c, g] = (0, m_.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mR.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, TN.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, TN.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, S.jsx)(au.A, {
        title: U.intl.string(eX.default["86GtGH"]),
        titleBadge: m
            ? (0, S.jsx)("div", { className: TR.A, children: (0, S.jsx)(mQ.E, { type: "new", variant: "brand" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: TR.N,
            children: [
                (0, S.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(eX.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, S.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var TP = n(637193),
    TG = n(622410);
function TM(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S9.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, TP.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, TN.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, S.jsx)(au.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: TG.u,
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
var TU = n(88524);
function TV(e) {
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
        { newestAnalyticsLocation: c } = (0, ez.Ay)(),
        g = d ? ck.wL : l$.$n;
    return (0, S.jsx)(au.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: TU.NC,
            children: [
                (0, S.jsx)(g, {
                    className: iE()({ [TU.yj]: d }),
                    size: l$.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tc.XD)({ uploadType: Tb.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TU.DT,
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
var Tk = n(617061),
    Tw = n(625613);
function TF(e) {
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
        { analyticsLocations: u } = (0, ez.Ay)(),
        d = ax.Ay.canUsePremiumProfileCustomization(t),
        c = (0, S9.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, S9.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tQ.uq)(t$.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? ck.wL : l$.$n;
    return (0, S.jsx)(au.A, {
        forcedDivider: r,
        borderType: dk.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, S.jsxs)("div", {
            className: Tw.NC,
            children: [
                (0, S.jsx)(A, {
                    size: l$.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tk.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: iE()({ [Tw.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tw.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.uMuafO),
                            onClick: function () {
                                (0, TN.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TB = n(515727),
    Tz = n(594401);
function TY(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = (0, S9.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, S9.Tu)(n?.id),
        [o, u] = (0, m_.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, S.jsx)(au.A, {
        showBorder: d,
        borderType: d ? dk.i.NEW_UPSELL : dk.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, S.jsx)("div", { className: Tz.Ad, children: (0, S.jsx)(mQ.E, { type: "new", variant: "brand" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, S.jsxs)("div", {
            className: Tz.NC,
            children: [
                (0, S.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, TB.w)({ analyticsLocations: s, guild: n }), u(mR.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tz.DT,
                        children: (0, S.jsx)(v.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.nQBruk),
                            onClick: function () {
                                (0, TN.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TX = n(602853),
    TH = n(654107),
    TW = n(999291),
    TK = n(101928),
    TZ = n(819169),
    Tq = n(317097),
    TQ = n(508274),
    TJ = n(379012);
function T$(e) {
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
        c = (0, TX.r)(n4.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n4.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tc.sN)(i),
        A = (0, Tq.Hl)(i),
        E = A === c ? g : A,
        h = m ? n4.A.unsafe_rawColors.WHITE.css : n4.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TZ.A)(a),
        p = (0, TZ.A)(o),
        [f, _] = T.useState((0, o_.A)());
    return (
        T.useEffect(() => {
            (x !== a || p !== o) && _((0, o_.A)());
        }, [o, a, p, x]),
        (0, S.jsx)(aA.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, S.jsx)(TQ.VN, {
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
                    className: iE()(TJ.oP, { [TJ.r9]: l }),
                    children: [
                        (0, S.jsx)(n9.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: TJ.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, S.jsx)(ah.PencilIcon, {
                                size: "custom",
                                className: TJ.BW,
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
var T0 = n(190377);
function T1(e) {
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
        c = (0, TW.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TK.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = ax.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, TX.r)(n4.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TH.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, S.jsx)(au.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: iE()(T0.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, S.jsxs)("div", {
                  className: T0.hd,
                  children: [
                      (0, S.jsx)("div", {
                          className: T0.YX,
                          children: (0, S.jsx)(T$, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T0.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, S.jsx)("div", {
                          className: T0.YX,
                          children: (0, S.jsx)(T$, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, S.jsx)(Q.E, {
                                  className: T0.yz,
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
                              className: T0.WA,
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
function T2(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tZ.GV)();
    return (0, S.jsx)(au.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, S.jsx)(sT.k, {
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
var T3 = n(684732),
    T5 = n(576705),
    T6 = n(931175);
function T4(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([T5.A], () => T5.A.can(I.xBc.CHANGE_NICKNAME, r) || T5.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xV.L)(t$.PremiumTypes.TIER_2);
    return (0, S.jsxs)(au.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, S.jsx)(sT.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, TN.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, S.jsx)(TD, { user: l, guildId: r.id, className: T6.F }),
        ],
    });
}
var T8 = n(233454);
let T7 = "/assets/b25da78aa7949feb.png";
function T9(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, d8.Ay)(),
        { analyticsLocations: l } = (0, ez.Ay)(tw.A.PREMIUM_UPSELL_OVERLAY);
    return (T.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tQ.uq)(t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, S.jsxs)("div", {
              className: T8.ry,
              children: [
                  (0, S.jsx)("div", { children: i }),
                  (0, S.jsxs)("div", {
                      className: T8.Wc,
                      children: [
                          (0, S.jsx)("img", {
                              className: T8.Tn,
                              alt: U.intl.string(U.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return T7;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T7;
                                  }
                              })(s),
                          }),
                          (0, S.jsxs)("div", {
                              className: T8._9,
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
                          (0, S.jsx)(dV.A, {
                              size: l$.$n.Sizes.LARGE,
                              color: l$.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ax.Ay.isPremium(t)
                                      ? U.intl.string(U.t.AfRWI8)
                                      : U.intl.string(U.t.nkdUym),
                              },
                              subscriptionTier: t$.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var fe = n(203164);
function ft() {
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xV.L)(t$.PremiumTypes.TIER_2),
        n = (0, f.bG)([S3.A, sv.A], () => sv.A.getGuild(S3.A.selectedGuildId));
    th()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([S3.A], () => ({ ...S3.A.getPendingChanges(n.id), errors: S3.A.getErrors(n.id) })),
        d = (0, Ts.V7)({ userId: e.id, image: i }),
        c = (0, Tu.EC)(n.id),
        g = (0, f.bG)([Tr.Ay], () => (null == n.id ? null : Tr.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([Tl.A], () => Tl.A.getGuildMemberProfile(e.id, n.id)),
        A = ax.Ay.canUsePremiumProfileCustomization(e),
        E = (0, S9.z5)(i, g?.avatar),
        h = (0, S9.Ac)(l, m?.banner),
        x = (0, T3.l)(o, m?.themeColors),
        p = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, S.jsxs)("div", {
        className: fe.Q,
        children: [
            (0, S.jsx)(
                T4,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uO.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, S.jsx)(
                T2,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TN.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, S.jsxs)(T9, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, S.jsx)(
                        TO,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, S.jsx)(Td.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Tc.rM)(e, g?.avatar, (e) => (0, TN.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, S.jsx)(
                        Ty,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, S.jsx)(Td.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, S.jsx)(TD, { user: e, guildId: n.id }),
                    (0, S.jsx)(
                        TM,
                        { user: e, guild: n, titleIcon: (0, S.jsx)(Td.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, S.jsx)(
                        TF,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, S.jsx)(Td.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, S.jsx)(
                        TY,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, S.jsx)(Td.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, S.jsx)(
                        TV,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Tc.rM)(e, m?.banner, (e) => (0, TN.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, S.jsx)(T1, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TN.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, S.jsx)(
                        Tf,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, S.jsx)(Td.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TN.p)({ guildId: n.id, bio: e }),
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
var fn = n(832131);
function fi(e) {
    (0, sS.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, S.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fs(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tw.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([Tr.Ay], () => (null != t ? Tr.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([Tl.A], () => !Tl.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([S3.A], () => S3.A.getPendingChanges(t?.id)),
        c = (0, Ts.V7)({ userId: s.id, image: o }),
        g = (0, S9.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, S9.B0)(s, t?.id);
    return (T.useEffect(() => S8.IM, []), a)
        ? (0, S.jsx)(og.A, {})
        : r
          ? (0, S.jsxs)(ez.f5, {
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
                                  (0, S.jsx)(ao.A, { guildId: t.id, onChange: n }),
                                  (0, S.jsx)(Tn, {
                                      profilePreviewTitle: (0, S.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: fn.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, S.jsx)(Ti.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ax.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fi,
                                          containerClassName: fn.ti,
                                      }),
                                      nameplatePreview: (0, S.jsx)(S7.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fn.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, S.jsx)(ft, {}),
                                  }),
                              ],
                          })
                        : (0, S.jsx)(To, {}),
                ],
            })
          : (0, S.jsx)(oI.y, {});
}
var fl = n(903209),
    fr = n(641130);
function fa(e) {
    let { children: t, notice: n } = e;
    return (0, S.jsxs)("div", { className: fr.r, children: [n, (0, S.jsx)("div", { children: t })] });
}
var fo = n(823092),
    fu = n(815996),
    fd = n(379197),
    fc = n(488430),
    fg = n(457421),
    fm = n(940622),
    fA = n(559474),
    fE = n(757993);
let fh = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, ez.Ay)(tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = T.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, fm.mb)(fA.RN.UPSELL_BANNER)),
        (t = (0, fm.mb)(fA.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, f.bG)([fg.A], () => fg.A.getMarketingBySurface(fd.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fc.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fo.L_)();
    return (
        T.useEffect(() => {
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tQ.uq)(t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, S.jsxs)("div", {
            ref: l,
            className: fE.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, S.jsx)("div", {
                    className: fE.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, S.jsx)("img", { src: a, className: fE.Qw, alt: "" }),
                }),
                (0, S.jsxs)("div", {
                    className: fE.Em,
                    children: [
                        (0, S.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fE.DD,
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
                            (0, fu.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var fx = n(451909),
    fp = n(202639),
    fS = n(285373),
    fT = n(835071),
    ff = n(724651),
    fI = n(732280),
    f_ = n(590180),
    fN = n(898461),
    fC = n(469054),
    fy = n(601298),
    fb = n(207803),
    fv = n(461797);
let fj = Object.keys(fv.jB);
function fO(e) {
    let t = null == e ? fj : fj.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fL = n(518293),
    fR = n(221650);
function fD(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, fL.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, fv.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, S.jsxs)("div", {
        className: fR.kL,
        children: [
            (0, S.jsx)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fR.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, S.jsxs)(n9.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fR.Lt,
                children: [
                    (0, S.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fR.L_ }),
                    (0, S.jsx)(Q.E, {
                        className: fR._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fP = n(511484),
    fG = n(811611),
    fM = n(206697),
    fU = n(507553);
function fV(e, t) {
    let n = fU.A.useField("scrollPosition"),
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    (0, T.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fU.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fk = n(844222),
    fw = n(842092);
let fF = "/assets/d4955aabdcb5bdee.png",
    fB = { assetOrigin: fC.E.NEW_ASSET, imageUri: fF, staticImageUri: fF, description: "", originalAsset: void 0 };
function fz(e) {
    let { user: t } = e,
        { reducedMotion: n } = T.useContext(fk.C),
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
        } = (0, f.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Ts.V7)({ userId: t.id, image: g ?? i });
    return (0, S.jsx)(Ti.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fB,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fw.WX,
        containerClassName: fw.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fY = n(829497);
function fX(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = ax.Ay.isPremium(t),
        l = ax.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getErrors(),
                n = S3.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, T.useState)(fO()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, T.useMemo)(() => {
                    let t = (0, fv.Wt)(e);
                    return {
                        banner: (0, fy.X)({
                            assetOrigin: fC.E.NEW_ASSET,
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
                r = (0, f.bG)([f_.A], () => {
                    let e = f_.A.getProduct(s);
                    return (0, fN.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, T.useEffect)(() => {
                (0, fb.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, T.useCallback)(() => {
                let n = fO(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fV(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tw.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fM.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    T.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tq.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tQ.uq)(t$.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fI.V)()?.subscriptionTrial?.skuId === t$.pe.TIER_2,
        p = (0, ff.O)(),
        _ = (0, fP.U9)(p, t$.pe.TIER_2);
    return i
        ? (0, S.jsx)(ez.f5, {
              value: A,
              children: (0, S.jsxs)(dk.A, {
                  ref: m,
                  className: fY.MT,
                  type: dk.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, S.jsx)(Tn, {
                          stickyPreview: !1,
                          layoutClassName: fY.th,
                          profilePreviewTitle: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(al.t, { size: "md", color: "currentColor", className: fY.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, S.jsxs)(S.Fragment, {
                              children: [(0, S.jsx)(fD, { preset: c, onShuffle: g }), (0, S.jsx)(fz, { user: t })],
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
                                              className: fY.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(T1, {
                                      className: fY.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ts.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fb.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, S.jsx)(TV, {
                                      className: fY.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fb.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, S.jsx)(TO, {
                                          className: fY.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fb.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, S.jsx)(TD, { user: t, className: fY.fz }),
                                  !x &&
                                      (0, S.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, S.jsx)(fp.d, {
                              onSubscribeModalClose: h,
                              className: fY.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fT.K)({ onSubscribeFinish: h });
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
                                  (0, S.jsx)("div", { className: fY.BU }),
                                  (0, S.jsx)(fG.Ay, {
                                      type: t$.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: t$.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var fH = n(814390),
    fW = n(643056),
    fK = n(843282),
    fZ = n(145497),
    fq = n(685073),
    fQ = n(534400),
    fJ = n(581781),
    f$ = n(743981),
    f0 = n(195801);
let f1 = (0, tZ.Ld)(),
    f2 = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lh.default], () => (0, fq.Zo)(lh.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, S.jsx)(fJ.A, {
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
                        : (0, S.jsx)(fZ.j, {
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
                        : (0, S.jsx)(fQ.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f$.Sl.SIZE_16,
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
            fV(h, eO._F.GUILD_TAG),
            (0, S.jsxs)(au.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f1,
                ref: h,
                children: [
                    (0, S.jsx)(Q.E, {
                        className: f0.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, S.jsx)(fK.Pw, {
                        className: f0.Lt,
                        optionClassName: f0.S0,
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
var f3 = n(318785),
    f5 = n(470739);
let f6 = function () {
    return (0, fW.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, S.jsx)(au.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, S.jsx)(v.$, {
                  text: U.intl.string(U.t.wRraFx),
                  onClick: () => {
                      (0, f5.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var f4 = n(953726);
let f8 = (0, tZ.Ld)();
function f7(e) {
    let t = (0, xV.L)(t$.PremiumTypes.TIER_2);
    return (0, S.jsxs)(au.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: f8,
        children: [
            (0, S.jsx)("div", {
                children: (0, S.jsx)(sT.k, {
                    "aria-labelledby": f8,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, S.jsx)(TD, { user: e.user, className: f4.F }),
        ],
    });
}
var f9 = n(376626);
function Ie(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, S.jsx)("div", {
        className: f9.u,
        children: (0, S.jsx)(t8.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, S1._e)() : (0, TN.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function It(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TX.r)(n4.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TH.rh)(l, r, !1),
        o = (0, Tq.LX)(a[0]);
    return (0, S.jsx)(au.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, S.jsx)(T$, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var In = n(518477);
let Ii = function () {
    let e = (0, f.bG)([dQ.default], () => dQ.default.getId());
    return (0, S.jsx)(au.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, S.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, S6.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tw.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: In.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Is = n(654910);
function Il() {
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (th()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([Tl.A], () => Tl.A.getUserProfile(e.id)),
        n = (0, fW.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, f.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ts.V7)({ userId: e.id, image: i }),
        A = (0, Tu.EC)(),
        E = ax.Ay.canUsePremiumProfileCustomization(e),
        h = (0, S9.z5)(i, e.avatar),
        x = (0, S9.Ac)(l, t?.banner),
        p = (0, TW.Ay)(e.id),
        T = p?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, f3.b)(),
        C = null != (0, fq.Zo)(e.primaryGuild).guildId;
    return (0, S.jsxs)("div", {
        className: Is.Q,
        children: [
            (0, S.jsx)(f7, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TN.p)({ globalName: e }),
                user: e,
            }),
            (0, S.jsx)(
                T2,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TN.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, S.jsx)(Ii, {}),
            (0, S.jsx)(
                TO,
                {
                    onAvatarChange: (e) => {
                        ((0, TN.p)({ avatar: e }), (0, S9.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: U.intl.string(U.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, S.jsx)(Ty, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, S.jsx)(TM, { user: e }),
            (0, S.jsx)(TF, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, S.jsx)(TY, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(
                              TV,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TN.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, S.jsx)(T1, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TN.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, S.jsx)(
                      It,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TN.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, S.jsx)(
                Tf,
                {
                    sectionTitle: U.intl.string(U.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, TN.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, S.jsx)(f2, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TN.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, S.jsx)(Ie, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, S.jsx)(f6, {}, "badges"),
        ],
    });
}
function Ir() {
    (0, sS.openModalLazy)(async () => {
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
var Ia = n(447080);
function Io() {
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (th()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, f.cf)([S3.A], () => ({ ...S3.A.getPendingChanges(), showNotice: S3.A.showNotice() })),
        a = (0, Ts.V7)({ userId: e.id, image: i }),
        o = (0, S9.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fH.A)() && null != n ? fx.Ay.parse(void 0, n).content : n,
        d = ax.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tw.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => S1.IM, []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, S.jsx)(og.A, {})
        : (0, S.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, S.jsx)(fh, {}),
                  (0, S.jsx)(Tn, {
                      profilePreview: (0, S.jsx)(Ti.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: Ir,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: Ia.ti,
                      }),
                      nameplatePreview: (0, S.jsx)(S7.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Ia.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, S.jsx)(Il, {}),
                  }),
                  (0, S.jsx)(cy.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, S.jsx)("div", {
                          ref: E,
                          children: (0, S.jsx)(fX, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, S.jsx)(fp.d, {
                          className: Ia.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, fT.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, S.jsx)(fS.l, {
                              size: "md",
                              location: tw.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, S.jsx)("div", {
                              className: Ia.Xl,
                              children: (0, S.jsx)(v.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: U.intl.string(U.t.uw9zI7),
                                  icon: al.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Iu = n(625494);
n(46121);
var Id = n(944983);
let Ic = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    Ig = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sj.A, gf.Ay, S3.A], () => {
                    let e = S3.A.selectedGuildId ?? sj.A.getGuildId();
                    return null == e || S3._.has(e) ? gf.Ay.getFlattenedGuildIds().find((e) => !S3._.has(e)) : e;
                }),
                t = (0, f.bG)([sv.A], () => sv.A.getGuild(e)),
                n = (0, f.bG)([S3.A], () => S3.A.showNotice()),
                i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
                s = fU.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, ir._)(Ic[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, fl.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, S.jsx)(fa, {
                    children: (0, S.jsxs)(uC.F, {
                        component: (0, S.jsx)(sA.A, {
                            children: (0, S.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, S.jsxs)(S4.V, {
                                className: Id.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                Iu._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, S8.V2)(t.id),
                                            fU.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, S.jsx)(
                                        S4.V.Item,
                                        {
                                            className: Id.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, S.jsx)(
                                        S4.V.Item,
                                        {
                                            className: iE()(Id.YU, Id.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, S.jsx)(fs, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ia.fO)({ duration: 300, intensity: 1.4 }),
                                                  Iu._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, S8.JJ)(e.id);
                                      },
                                  })
                                : (0, S.jsx)(Io, {}),
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
    Im = (0, E.zZ)(h.X.PROFILE_CATEGORY, { buildLayout: () => [Ig] });
var IA = n(379633);
function IE() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cw.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, S.jsxs)("div", {
              className: IA.a5,
              children: [
                  (0, S.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, S.jsxs)("div", {
                      className: IA.FS,
                      children: [
                          (0, S.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, S.jsxs)("div", {
                              className: IA.Fk,
                              children: [
                                  (0, S.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, S.jsx)(ah.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let Ih = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [S3.A], element: S2.A },
        initialize: () => S1.F7,
        buildLayout: () => [Im],
    }),
    Ix = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: IS,
        StronglyDiscouragedCustomComponent: IE,
        usePredicate: () => !(0, S5.X)("user_settings_sidebar"),
        buildLayout: () => [Ih],
    }),
    Ip = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: IS,
        StronglyDiscouragedCustomComponent: IE,
        usePredicate: () => (0, S5.X)("user_settings_sidebar"),
        onClick: () => {
            let e = dQ.default.getId();
            (0, S6.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function IS() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cw.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, S.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let IT = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [Ix, Ip] });
var If = n(98207);
n(204925);
let II = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sS.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, S.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uD.tE : null, onCloseCallback: t },
    );
};
var I_ = n(940856),
    IN = n(506775),
    IC = n(379257),
    Iy = n(121780),
    Ib = n(666113);
function Iv() {
    let e = Iy.A.getCountryCode(),
        t = null != e ? Ib.IN[e.alpha2] : void 0;
    IC.A.openUrl(eC.A.getArticleURL(t ?? Ib.k9));
}
var Ij = n(521169);
function IO() {
    return (0, Ij.w)(Ib.Vc);
}
var IL = n(680091);
function IR() {
    let e = IO(),
        t = (0, IN.ZP)();
    if (!e) return null;
    switch (t) {
        case IN.M$.ADULT:
            return U.intl.format(IL.default.gi4ulu, { handleOnAgeGatedContentHook: IN.M0 });
        case IN.M$.TEEN:
            return U.intl.format(IL.default["221iML"], {
                handleOnAgeGatedContentHook: IN.M0,
                handleOnConfirmAgeHook: IN.aP,
            });
        case IN.M$.UNVERIFIED:
            return U.intl.format(IL.default["W0/7DD"], {
                handleOnAgeGatedContentHook: Iv,
                handleOnConfirmAgeHook: IN.aP,
            });
    }
}
var ID = n(26137),
    IP = n(957485);
function IG() {
    let e = IO(),
        t = (0, IN.ZP)();
    return e ? { icon: t === IN.M$.ADULT ? ID.r : IP.i, backgroundColor: n4.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function IM() {
    let e = IG();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function IU() {
    return IO() ? U.intl.string(U.t.piqs0o) : null;
}
var IV = n(438140);
let Ik = [{ badgeType: p.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    Iw = [];
function IF() {
    return (0, IV.Wt)() ? Ik : Iw;
}
var IB = n(36149),
    Iz = n(207560),
    IY = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    IX = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function IH(e, t) {
    let n = (0, f.bG)([lh.default], () => null != lh.default.getCurrentUser()),
        i = (0, Iz.fk)(),
        s = (0, IN.ZP)(),
        l = (0, IB.Y2)(),
        r = IO();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case IN.M$.UNVERIFIED:
            return "verify" === e;
        case IN.M$.TEEN:
            return e === (r ? "info" : "verify");
        case IN.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var IW = n(841365);
function IK() {
    let e = (0, IN.hD)();
    return (0, S.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(IW.default.WM5adV, { handleOnHelpUrlHook: IN.M0 })],
    });
}
let IZ = {
        useTitle: () => IU() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IR,
        useVariant: () => "secondary",
        useLeadingDecoration: IM,
        getDismissibleBadges: IF,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IK,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sS.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    },
    Iq = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...IZ, usePredicate: () => IH(IX.EDIT, IY.LEGACY) }),
    IQ = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...IZ,
        usePredicate: () => IH(IX.EDIT, IY.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    IJ = {
        useTitle: () => IU() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IR,
        useLeadingDecoration: function () {
            let e = IG();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IF,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, IN.hD)() }),
    },
    I$ = (0, E.v_)(h.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...IJ, usePredicate: () => IH(IX.INFO, IY.LEGACY) }),
    I0 = (0, E.v_)(h.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...IJ,
        usePredicate: () => IH(IX.INFO, IY.TINY_BRONCO),
    }),
    I1 = {
        useTitle: () => IU() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IR,
        useVariant: () => "secondary",
        useLeadingDecoration: IM,
        getDismissibleBadges: IF,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, IN.hD)() }),
        useLabel: function () {
            return (0, IB.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: IN.aP,
    },
    I2 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I1, usePredicate: () => IH(IX.VERIFY, IY.LEGACY) }),
    I3 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I1,
        usePredicate: () => IH(IX.VERIFY, IY.TINY_BRONCO),
    }),
    I5 = [I2, Iq, I$],
    I6 = [I3, IQ, I0],
    I4 = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
        useLabel: () => U.intl.string(U.t.BleMPB),
        onClick: () => II(),
    });
function I8(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function I7(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function I9(e) {
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
            (0, S.jsx)(hb.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
            }),
        ],
    });
}
function _e() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.email);
    return null == e
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, S.jsx)(I9, {
              text: e,
              censor: I7,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let _t = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _e }),
    useLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.email)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.email)
            ? U.intl.string(U.t["pvBD+W"])
            : U.intl.string(U.t["8peUT0"]);
    },
    onClick: function () {
        (0, sS.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, S.jsx)(e, { ...t });
        });
    },
});
var _n = n(557722),
    _i = n(53516);
function _s() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, S.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, S.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, S.jsx)(I9, {
                  text: t,
                  censor: I8,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let _l = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _s }),
    useLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    onClick: function () {
        null == lh.default.getCurrentUser()?.phone
            ? (0, sS.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, S.jsx)(e, { reason: _n.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _i.V },
              )
            : (0, sS.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, S.jsx)(e, { ...t });
              });
    },
});
function _r() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _a() {
    let e = (0, Tu.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(Q.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, S.jsx)(sm.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, S.jsx)(i3.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n4.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let _o = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _a,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (_r() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _r,
        onClick: function () {
            (0, sS.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    _u = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, f.bG)([lh.default], () => null != lh.default.getCurrentUser()),
        useTitle: () => U.intl.string(U.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
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
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, I_.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: U.intl.string(U.t["/3qnL/"]),
                        text: U.intl.string(U.t.qKs3vg),
                        button: { text: U.intl.string(U.t["7psymi"]), onClick: () => II() },
                    };
        },
        buildLayout: () => [_o, I4, _t, _l, ...I5],
    });
var _d = n(398177);
let _c = (0, E.Tf)(h.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => U.intl.string(U.t["CIGa+7"]),
    useLabel: () => U.intl.string(U.t.bt75uw),
    useAriaLabel: () => U.intl.string(U.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sS.openModal)((e) => (0, S.jsx)(_d.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _g = n(200921);
let _m = [];
function _A() {
    _m = [];
}
class _E extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _m;
    }
}
let _h = new _E(ts.h, {
    LOGOUT: _A,
    LOGIN_SUCCESS: _A,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _m = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._m],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _m = n;
    },
});
function _x() {
    let e = (0, f.cf)([_h], () => _h.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = dQ.default.getAuthSessionIdHash();
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
function _p(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ix()(e).fromNow();
}
var _S = n(176524),
    _T = n(646270),
    _f = n(738678),
    _I = n(489828);
function __(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, S.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, S.jsx)(_S.A, { icon: t, color: r ? n4.A.colors.ICON_MUTED : "currentColor" }),
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
function _N(e) {
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
                            return { text: U.intl.string(U.t.cDHCNY), icon: dc.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: _T.u };
                        case "horizon os":
                            return { text: e, icon: _f.G };
                        default:
                            return { text: e, icon: dc.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _p(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ig.Vq);
    return (0, S.jsx)(__, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, S.jsx)(n9.D, {
                className: _I.X,
                onClick: () => (0, _g.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, S.jsx)(uk.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _C(e) {
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
let _y = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _x();
            return null == e
                ? (0, S.jsx)(oI.y, {})
                : (0, S.jsx)(_C, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, S.jsx)(_N, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _b = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _x();
            return (0, S.jsx)(t4.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, S.jsx)(v.$, {
                    onClick: () => (0, _g.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: U.intl.string(U.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _x();
            return e.length > 0;
        },
    });
var _v = n(766928);
function _j() {
    return (0, S.jsx)(__, {
        icon: _v.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, ng.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tw.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _O = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _x(),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return (0, S.jsxs)(_C, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, S.jsx)(_N, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, S.jsx)(_j, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _x(),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _L = (0, E.zZ)(h.X.SESSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useSubtitle: () => U.intl.string(U.t.b7ZpTM),
        initialize: () => {
            (0, _g.GY)();
        },
        buildLayout: () => [_y, _O, _b],
        useSearchTerms: () => [
            U.intl.string(U.t["+1h0k/"]),
            U.intl.string(U.t.LLS19o),
            U.intl.string(U.t.xx1MWc),
            U.intl.string(U.t.lSWsrd),
        ],
    }),
    _R = (0, E.t_)(h.X.SESSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.mEndXM),
        useObscuredNotice: og.L,
        buildLayout: () => [_L],
    }),
    _D = (0, E.t0)(h.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_R],
        initialize: () => {
            (0, _g.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _x(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? U.intl.formatToPlainString(U.t.G7zwOk, { count: n }) : U.intl.string(U.t.MKDeyL),
            };
        },
    });
var _P = n(464477);
function _G(e) {
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
function _M() {
    return (0, oe.bG)([lh.default], () => {
        let e = lh.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _U =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _V() {
    let e = (0, oe.bG)([lh.default], () => lh.default.getCurrentUser()?.verified);
    return _P.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oe.bG)([sv.A, T5.A, lh.default], () =>
        lh.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T5.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? U.intl.string(U.t.OYTCUh)
                  : U.intl.string(U.t.HC8uSZ)
              : null,
    );
}
var _w = n(466034);
let _F = (0, E.Tf)(h.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: () => _k(!0),
        useDisabled: () => null !== _k(!0),
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, f.bG)([dQ.default], () => dQ.default.hasTOTPEnabled()),
                t = _V() === _U.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n8.A)({
                title: U.intl.string(U.t["D+aE7g"]),
                subtitle: U.intl.string(U.t.EA4ZEk),
                variant: "critical",
                confirmText: U.intl.string(U.t.N86XcP),
                onConfirm: () => If.A.disable(),
            }),
    }),
    _B = (0, E.zZ)(h.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RumMFo),
        useSubtitle: () => U.intl.string(U.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([dQ.default], () => dQ.default.hasTOTPEnabled()),
                t = _V() === _U.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: U.intl.string(U.t.cTNUeD),
                            onClick: _w.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_V()) {
                case _U.UNAVAILABLE_NO_CRYPTO:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.PhHhsj) };
                case _U.UNAVAILABLE_UNVERIFIED:
                    return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                case _U.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_F],
    });
var _z = n(670492),
    _Y = n(32880),
    _X = n(663417),
    _H = n(658675),
    _W = n(900686);
function _K() {
    (0, sS.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    If.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sS.openModalLazy)(
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
var _Z = n(858487);
function _q(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _Q() {
    let e = _z.A.getVerificationKey();
    if ("" === e) return void _K();
    try {
        await If.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, ld.P0)({ text: e.body?.message ?? U.intl.string(U.t.F8FvUy), variant: "critical" });
    }
}
function _J(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _q(t),
        s = T.useRef(null),
        l = (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(_H.P, { checked: n }), (0, S.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return uy.p5
        ? (0, S.jsx)(n9.D, {
              tag: "li",
              className: iE()(_Z.aY, _Z.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uy.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uy.C)(i), (0, ld.P0)({ text: U.intl.string(U.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, S.jsx)("li", { className: _Z.aY, children: l });
}
let _$ = (0, E.zZ)(h.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.fC9qV0),
        useSubtitle: () =>
            (0, f.bG)([_z.A], () => _z.A.getBackupCodes().length > 0)
                ? U.intl.format(U.t.tp7zEK, {})
                : U.intl.string(U.t.LoOi4S),
        usePredicate: _M,
        buildLayout: () => [_0],
    }),
    _0 = (0, E.E2)(h.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.fC9qV0)],
        Component: function () {
            let e = (0, f.bG)([_z.A], () => _z.A.getBackupCodes()),
                t = T.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_q(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, S.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _K })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)("ul", {
                              className: _Z.E5,
                              children: e.map((e) => (0, S.jsx)(_J, { code: e }, e.code)),
                          }),
                          (0, S.jsxs)(l1.e, {
                              size: "sm",
                              children: [
                                  (0, S.jsx)(_W.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, S.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _Y.DownloadIcon,
                                      }),
                                  }),
                                  (0, S.jsx)(v.$, {
                                      text: U.intl.string(U.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _X.RefreshIcon,
                                      onClick: _Q,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _1 = (0, E.Tf)(h.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => U.intl.string(U.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = T.useState(!1),
                n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, S.jsx)(hb.Q, {
                              text: e ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sS.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, S.jsx)(e, {
                        ...t,
                        handleSubmit: If.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    _2 = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lh.default], () => _G(lh.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lh.default], () => null != _G(lh.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: _3,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _V(),
                t = _M(),
                n = (0, f.bG)([dQ.default], () => dQ.default.hasTOTPEnabled());
            return e === _U.AVAILABLE && t && n;
        },
        buildLayout: () => [_1],
    });
function _3() {
    let e = lh.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _n.d.USER_SETTINGS_UPDATE, onAddedPhone: If.A.enableSMS }),
                (0, sS.openModalLazy)(
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
                    { modalKey: _i.V },
                ));
        } else If.A.enableSMS();
}
var _5 = n(665671),
    _6 = n(442433),
    _4 = n(917136),
    _8 = n(976910),
    _7 = n(267255);
function _9(e) {
    let { credential: t } = e;
    return (0, S.jsxs)("li", {
        className: _7.e,
        children: [
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, S.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: _p(t.last_used) }),
                        }),
                ],
            }),
            (0, S.jsx)(sc.K, {
                icon: gy.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, _6.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, S.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Ne = (0, E.zZ)(h.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.IBq4Y3),
        useSubtitle: () => U.intl.string(U.t.yK9edS),
        useHeaderDecoration: function () {
            if (_V() === _U.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iq.j,
                            onClick: _5.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_V()) {
                    case _U.UNAVAILABLE_NO_CRYPTO:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "info", text: U.intl.string(U.t.bWCGI9) };
                    case _U.UNAVAILABLE_UNVERIFIED:
                        return { type: p.lT.INLINE_NOTICE, noticeType: "warning", text: U.intl.string(U.t.uggF7o) };
                    case _U.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nt],
    }),
    Nt = (0, E.E2)(h.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [U.intl.string(U.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, f.cf)([_8.A], () => ({
                hasFetchedCredentials: _8.A.hasFetchedCredentials(),
                credentials: _8.A.getCredentials(),
            }));
            return (T.useEffect(() => {
                t || _4.JQ();
            }, [t]),
            t)
                ? (0, S.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, S.jsx)(_9, { credential: e }, e.id)),
                  })
                : (0, S.jsx)(oI.y, {});
        },
    }),
    Nn = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [Ne, _B, _2, _$],
    }),
    Ni = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _M();
            return { type: p.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
        },
        buildLayout: () => [Nn],
    }),
    Ns = (0, E.zZ)(h.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t["0iH2vc"]),
        buildLayout: () => [_c, Ni, _D],
    }),
    Nl = { [IN.M$.ADULT]: IL.default.PMznGO, [IN.M$.TEEN]: IL.default.qSkhZH, [IN.M$.UNVERIFIED]: IL.default.vGxRDB },
    Nr = [eA.M.TINY_BRONCO_NOTICE],
    Na = [];
function No() {
    IC.A.openUrl(Ib.m5);
}
var Nu = n(308645),
    Nd = n(555725),
    Nc = n(855267);
let Ng = (0, E.E2)(h.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["16r9jm"])],
        Component: Nc.A,
    }),
    Nm = (0, E.zZ)(h.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Ng] }),
    NA = (0, E.t_)(h.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        buildLayout: () => [Nm],
    }),
    NE = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: Nd.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Nd._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Nd.aO)() };
        },
        initialize: () => {
            Nu.Yn();
        },
        buildLayout: () => [NA],
    }),
    Nh = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (IO() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IV.LH)(),
                t = (0, IN.ZP)(),
                [n, i] = (0, m_.kn)(e ? Nr : Na);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: U.intl.format(Nl[t], { handleOnBlogHook: No }),
                      onDismiss: () => i(mR.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...I6, NE],
    });
var Nx = n(738188),
    Np = n(834981),
    NS = n(987197),
    NT = n(822585),
    Nf = n(840387),
    NI = n(465558),
    N_ = n(513687);
let NN = (0, E.E2)(h.X.FAMILY_CENTER_SETTING, {
        Component: NI.p,
        useSearchTerms: () => [
            U.intl.string(N_.default.RZqaJn),
            U.intl.string(N_.default.bdBmqy),
            U.intl.string(N_.default["gVWG+6"]),
            U.intl.string(N_.default.ahKIJO),
            U.intl.string(N_.default["8SLtqb"]),
        ],
    }),
    NC = (0, E.zZ)(h.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NN] }),
    Ny = (0, E.t_)(h.X.FAMILY_CENTER_PANEL, {
        useTitle: () => U.intl.string(N_.default.RZqaJn),
        buildLayout: () => [NC],
    }),
    Nb = (0, E.zZ)(h.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => U.intl.string(N_.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, NS.f)(),
                t = (0, NT.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Np.VT)();
            return T.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Nv],
    }),
    Nv = (0, E.t0)(h.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Np.Li)() ? U.intl.string(N_.default.IcMQUP) : U.intl.string(N_.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nf.Z)(),
                t = (0, Np.Li)();
            return e
                ? t
                    ? U.intl.string(N_.default.G8lHFU)
                    : U.intl.string(N_.default.uOLNEZ)
                : U.intl.string(N_.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, NS.f)(),
                t = (0, NT.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: Nx.WarningIcon,
                      color: n4.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n4.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Ny],
    });
var Nj = n(425587),
    NO = n(662758);
function NL(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, lJ.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function NR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lh.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Nj.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lJ.A)({
              title: U.intl.string(U.t["Y++oNe"]),
              subtitle: U.intl.format(U.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sv.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lJ.A)({ title: U.intl.string(U.t.vJiTOL), subtitle: U.intl.string(U.t.UyVVan) })
          : t.isClaimed()
            ? (0, sS.openModal)((t) =>
                  (0, S.jsx)(NO.default, {
                      ...t,
                      handleSubmit: (t) => (0, S1.U_)(t, e).then(I.tEg, NL),
                      title: e ? U.intl.string(U.t.xca2ts) : U.intl.string(U.t.goXv9g),
                      actionText: e ? U.intl.string(U.t["8lQ2rR"]) : U.intl.string(U.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? U.intl.string(U.t.FB4H1D) : U.intl.string(U.t.gk7h32),
                  }),
              )
            : (0, n8.A)({
                  title: U.intl.string(U.t.xca2ts),
                  subtitle: U.intl.string(U.t.FB4H1D),
                  confirmText: U.intl.string(U.t["8lQ2rR"]),
                  onConfirm: () => (0, S1.U_)("", !0),
              });
}
let ND = (0, E.Tf)(h.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => U.intl.string(U.t["gIpzR+"]),
        useSubtitle: () => U.intl.string(U.t.Bd6dOf),
        useLabel: () => U.intl.string(U.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NR(!0),
    }),
    NP = (0, E.Tf)(h.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => U.intl.string(U.t["p/Tjtp"]),
        useSubtitle: () => U.intl.string(U.t.YvDmKb),
        useLabel: () => U.intl.string(U.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NR(!1),
        usePredicate: () => {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NG = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NP, ND] }),
    NM = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (If.A.clearBackupCodes(), (0, S1.Uo)());
            };
        },
        useObscuredNotice: og.L,
        buildLayout: () => [_u, Ns, Nh, Nb, NG],
    }),
    NU = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: A_.UserIcon,
        buildLayout: () => [NM],
    });
var NV = n(176781),
    Nk = n(341923),
    Nw = n(572164),
    NF = n(614584),
    NB = n(915725),
    Nz = n(268378);
let NY = (0, E.zD)(h.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => U.intl.string(Nz.default.j29uJx),
        useSubtitle: () => U.intl.format(Nz.default.UCzGcQ, { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getEnableAutoclipping()),
        setValue: NF.uL,
        useDisabled: () => !(0, Nw.E)(),
    }),
    NX = (0, E.zY)(h.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NY], headerSettingKey: NY.key }),
    NH = (0, E.zZ)(h.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => U.intl.string(Nz.default.XWkJoi),
        useSubtitle: () => U.intl.string(Nz.default["MJ/VsO"]),
        usePredicate: Nk.HN,
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useInlineNotice: () =>
            (0, Nw.E)()
                ? null
                : {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: U.intl.string(Nz.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: U.intl.string(Nz.default.qGgW4M),
                          onClick: () => NF.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NX],
    });
var NW = n(696016);
let NK = [NW.zq, 25, 50, NW.Y2, NW.rv],
    NZ = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: NW.zq,
        maxValue: NW.rv,
        useDefaultValue: () => NW.Y2,
        getInitialValue: () => NB.Ay.getSettings().clipsQuality.bitratePercent ?? NW.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NF.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: NK,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Nw.E)(),
    });
var Nq = n(226640);
let NQ = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NF.GS({ ...t, frameRate: e });
        },
        useOptions: Nq.Fz,
        useDisabled: () => !(0, Nw.E)(),
    }),
    NJ = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [U.intl.string(U.t.SIxrIF)],
        usePredicate: () => (0, f.bG)([NB.Ay], () => NB.Ay.getHardwareClassification()) === NW.k9.BELOW_MINIMUM,
        Component: () => (0, S.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    N$ = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsLength),
        setValue: (e) => NF.h$(e),
        useOptions: Nq.Qu,
        useDisabled: () => !(0, Nw.E)(),
    }),
    N0 = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [U.intl.string(U.t["Z+MfqT"])],
        Component: () => (0, S.jsx)(s8.A, { look: s8.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    N1 = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NF.GS({ ...t, resolution: e });
        },
        useOptions: Nq.gF,
        useDisabled: () => !(0, Nw.E)(),
    }),
    N2 = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().remindersEnabled),
        setValue: (e) => NF.Mt(e),
        useDisabled: () => !(0, Nw.E)(),
    }),
    N3 = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(Nz.default.TGwzMe),
        buildLayout: () => [NJ, N$, NQ, N1, NZ, N0, N2],
    }),
    N5 = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NF.YP(e),
    }),
    N6 = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NF.Uh(e),
    }),
    N4 = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lh.default], () => {
                let e = lh.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N5, N6],
    });
var N8 = n(417270),
    N7 = n(847825);
let N9 = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sK.Ay], () => sK.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            th()(null != e, "Save clip keybind unset");
            let t = !(0, Nw.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        i$.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    i$.A.setKeybind({ ...e, shortcut: (0, sx.OH)(NW.Ot) });
                }, [e]);
            return (0, S.jsx)(t4.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: N7.g,
                    children: (0, S.jsx)(sh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, S.jsxs)(S.Fragment, {
                            children: [
                                (0, S.jsx)(sm.m, {
                                    text: U.intl.string(Nz.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sc.K, {
                                        icon: iQ.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(Nz.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, S.jsx)(sm.m, {
                                    text: U.intl.string(Nz.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, S.jsx)(sc.K, {
                                        icon: N8.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(Nz.default.Kyk1Tp),
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
    Ce = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t["0U/hj7"]), U.intl.string(U.t["5zxkdo"])],
        usePredicate: sX.BW,
        Component: () => {
            let e = (0, f.bG)([sK.Ay], () => sK.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, f.bG)([sK.Ay], () => sK.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
            (th()(null != e, "Save clip keybind unset"), th()(null != t, "Save screenshot keybind unset"));
            let n = T.useCallback(
                (e) => {
                    i$.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, S.jsx)(t4.D, {
                label: U.intl.string(U.t["0U/hj7"]),
                description: U.intl.string(U.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, S.jsx)("div", {
                    className: N7.g,
                    children: (0, S.jsx)(sh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Ct = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, Nw.E)(),
        setValue: (e) => NF.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cn = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Ct, N9, Ce], headerSettingKey: Ct.key }),
    Ci = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(Nz.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cn],
    }),
    Cs = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().storageLocation),
                t = !(0, Nw.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nN.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NF.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, S.jsx)(t4.D, {
                label: U.intl.string(U.t.s4773E),
                description: U.intl.string(U.t.svjwGh),
                layout: "vertical",
                children: (0, S.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, S.jsx)(sT.k, {
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
                            text: U.intl.string(Nz.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Cl = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(Nz.default["0Q+pdZ"]),
        buildLayout: () => [Cs],
    }),
    Cr = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sX.sw,
        buildLayout: () => [Ci, NH, N3, Cl, N4],
    }),
    Ca = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: NV.x,
        buildLayout: () => [Cr],
    });
var Co = n(254138),
    Cu = n(290595);
let Cd = [];
var Cc = n(153488),
    Cg = n(308528),
    Cm = n(171316),
    CA = n(558001);
n(866945);
var CE = n(835002);
function Ch() {
    let e = (0, Cm.uM)(),
        t = (0, Np.vx)(),
        n = T.useCallback(() => {
            ((0, tH.default)(),
                Cg.A.openPrivateChannel({ recipientIds: t }),
                (0, CA.N)(CE.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CE.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, CA.N)(CE.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CE.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: U.intl.format(N_.default.i284fU, {
                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let Cx = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => NF.eQ({ allowVoiceRecording: e }),
});
var Cp = n(157559),
    CS = n(331887);
function CT() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        t = (0, f.bG)([CS.A], () => CS.A.harvestType),
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
let Cf = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = CT();
            if (e.allowed) return U.intl.format(U.t.NRI6vt, { article: eC.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return U.intl.string(U.t.hIbRso);
                case "not_verified":
                    return U.intl.format(U.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, S.jsx)(
                                n9.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, ng.openUserSettings)(h.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ix()(e.nextAllowed).format("MMMM Do YYYY");
                    return U.intl.format(U.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                ti.Bo.get({ url: I.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CT().allowed,
        useLoading: () => (0, f.bG)([CS.A], () => CS.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => U.intl.string(U.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sS.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, S.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, S1.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Cp.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : Cp.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        Cp.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
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
    CI = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ng.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var C_ = n(641216);
let CN = (0, ul.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function CC() {
    let { enabled: e } = CN.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Cy = n(884705);
function Cb() {
    return (0, f.bG)([Cy.A], () => Cy.A.isTogglesDisabled());
}
function Cv() {
    return !M.vf.useSetting();
}
function Cj(e) {
    M.vf.updateSetting(!e);
}
function CO() {
    let e = Cb(),
        t = M.H1.useSetting(),
        n = (0, Cm.uM)();
    return e || t || n;
}
let CL = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !CC(),
        useValue: Cv,
        setValue: Cj,
        useDisabled: CO,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    CR = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CC,
        useValue: Cv,
        setValue: Cj,
        useDisabled: CO,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function CD() {
    return !M.H1.useSetting();
}
function CP(e) {
    M.H1.updateSetting(!e);
}
function CG() {
    let e = Cb(),
        t = (0, Cm.uM)();
    return e || t;
}
let CM = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !CC(),
        useValue: CD,
        setValue: CP,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CG,
    }),
    CU = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CC,
        useValue: CD,
        setValue: CP,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CG,
    }),
    CV = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h$(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h0();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([i9.Ay], () => i9.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e))) && (0, nf.xl)(),
    }),
    Ck = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CV] });
var Cw = n(972737);
let CF = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([Cc.A], () => Cc.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cu.U)([I.YAq.USAGE_STATISTICS], []).catch(Cw.i)
                : (0, Cw.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, Cu.U)([], [I.YAq.USAGE_STATISTICS]).catch(Cw.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: Cm.uM,
    }),
    CB = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: () => Ch() ?? void 0,
        initialize: () => {
            Cc.A.fetchedConsents || (0, Cu.Q)();
        },
        buildLayout: () => [CI, CF, C_._, CM, CL, ...Cd, Cx, Cf, Ck],
    });
var Cz = n(15762);
let CY = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(Cz.default.F3llsQ),
    useSubtitle: () => U.intl.string(Cz.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h5.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CX() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [gf.Ay, sv.A],
        () => {
            let t = new Set(e);
            return gf.Ay.getFlattenedGuildIds().filter((e) => null != sv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CH = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CX();
            if (0 === e.length) return U.intl.format(U.t.QJIJ5p, {});
            let t = sv.A.getGuild(e[0]),
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
                    ((e = CX()),
                    0 ===
                    (t = (0, f.yK)(
                        [sv.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sv.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, S.jsx)(xa, { guild: t[0], size: hK.CD }),
                                    shape: hK.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, S.jsx)(xa, { guild: t[1], size: hK.CD }), shape: hK.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, S.jsx)(xa, { guild: t[0], size: hK.CD }),
                                    shape: hK.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CW = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CH] }),
    CK = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => U.intl.string(U.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: U.intl.string(U.t.Boxc8R),
                    desc: U.intl.string(U.t["nLj+nc"]),
                    value: eQ.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: U.intl.string(U.t.YOIKBt),
                    desc: U.intl.string(U.t.y0JZ4s),
                    value: eQ.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: U.intl.string(U.t.u0nlJv), desc: U.intl.string(U.t["4jnKHu"]), value: eQ.KP.FRIENDS_ONLY },
            ];
        },
        useValue: M.KP.useSetting,
        setValue: function (e) {
            let t = M.KP.getSetting();
            M.KP.updateSetting(e);
            let i = (0, xt.gS)(t, e);
            null != i &&
                (0, sS.openModalLazy)(async () => {
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
    CZ = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CK, CY, CW],
    });
var Cq = n(952270),
    CQ = n(678538);
let CJ = { [eQ.tR.REAL_MONEY_GAMING]: CQ.default.pmIitA },
    C$ = Object.keys(CJ).map(Number),
    C0 = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(CQ.default.foQaI1)],
        usePredicate: CC,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        C$.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(CJ[e]),
                            leading: Cq.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, S.jsx)(Sz.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of C$) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(CQ.default.foQaI1),
                description: U.intl.format(CQ.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(CQ.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C1 = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(CQ.default.XUj46U),
        usePredicate: CC,
        buildLayout: () => [CU, CR, C0],
    });
var C2 = n(714763),
    C3 = n(814278),
    C5 = n(730852),
    C6 = n(913122),
    C4 = n(977997),
    C8 = n(144485);
async function C7(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C3.to)(1), t?.());
        } catch (t) {
            let e = new C6.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Cp.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function C9(e) {
    let t,
        n,
        i =
            ((t = C4.A.getVoiceStateForUser(dQ.default.getId())),
            (n = sy.A.getChannel(t?.channelId)),
            dQ.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? C8.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await C7(e, () => {
                      (C5.default.disconnect(), C5.default.selectVoiceChannel(i));
                  });
              },
          })
        : await C7(e);
}
n(603266);
let ye = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, C3.Lu)() }),
    useValue: function () {
        return (0, f.bG)([C2.A], () => C2.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        C9(e);
    },
});
var yt = n(787392);
function yn() {
    return (0, f.yK)([yt.A], () => yt.A.getUserIds());
}
var yi = n(803306),
    ys = n(966327),
    yl = n(774156);
function yr(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        s = (0, f.bG)([lh.default], () => lh.default.getUser(t)),
        l = uO.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, C3.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, S6.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, yi.wz)(t);
        }, [t]),
        (0, S.jsxs)("div", {
            className: yl.uW,
            children: [
                null != s && (0, S.jsx)(ys.A, { className: yl.my, user: s, size: b._3.SIZE_40 }),
                (0, S.jsxs)("div", {
                    className: yl.Qq,
                    children: [
                        (0, S.jsx)(n9.D, {
                            className: yl.Xh,
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
                (0, S.jsx)(n9.D, { onClick: r, className: yl.Qz, children: (0, S.jsx)(sg.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function ya(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C3.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, C3.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, S.jsxs)("div", {
        className: t,
        children: [
            (0, S.jsxs)("div", {
                className: yl.Qq,
                children: [
                    (0, S.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: U.intl.format(U.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, S.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, S.jsx)(n9.D, {
                className: yl.Kk,
                onClick: r,
                children: (0, S.jsx)(uk.P, { size: "md", color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yo(e) {
    let { userId: t } = e,
        n = (0, f.yK)([yt.A], () =>
            W()(yt.A.getUserVerifiedKeys(t))
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
            (0, S.jsx)(yr, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, S.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, S.jsx)(ya, { className: yl.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, S.jsx)("div", { className: yl.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yu = n(464946),
    yd = n(492422);
let yc = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = yn();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yn();
            return (0, S.jsxs)(yu.h, {
                children: [
                    (0, S.jsx)(yu._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, C3.dc)() }),
                    }),
                    e.map((e) => (0, S.jsx)("div", { className: yd.A, children: (0, S.jsx)(yo, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yg = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e4.isDesktop)(),
        buildLayout: () => [ye, yc],
    }),
    ym = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [CB, C1, CZ, yg],
    }),
    yA = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: Co.m,
        buildLayout: () => [ym],
    });
var yE = n(476713);
let yh = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yx = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yh] });
var yp = n(875444);
function yS(e, t) {
    let n = (0, f.bG)([xM.default], () => xM.default.getFetchState()),
        i = (0, f.bG)([xM.default], () =>
            e ? xM.default.getNewestTokensForNonChildrenApplications() : xM.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yp.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || x_.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xM.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var yT = n(514479);
function yf() {
    return (0, S.jsxs)("div", {
        className: yT.d,
        children: [
            (0, S.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yT.x,
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
let yI = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yS(!0, !0);
        return e ? (0, S.jsx)(oI.y, {}) : (0, S.jsx)(yf, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yS(!0, !0);
        return e || 0 === t.length;
    },
});
function y_() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yS(!0, !0);
    return !e && t.length > 0;
}
let yN = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: y_,
    }),
    yC = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t["ms+Tme"]),
        useSubtitle: () => U.intl.string(U.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.JIFnN9), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: U.intl.string(U.t.rRdsk1), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: U.intl.string(U.t.IVRPMX), value: eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = M.TA.useSetting();
            return e === eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eQ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => M.TA.updateSetting(e),
        usePredicate: y_,
    });
function yy() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yS(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oD.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yb = n(306537),
    yv = n(40957);
function yj(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, CA.N)(s, CE.YX.VIEWED);
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
                    (0, S.jsx)("span", { className: yv.r, children: t }),
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
function yO(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, CA.N)(e, CE.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CA.N)(e, CE.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yL() {
    let e,
        t = (0, Cm.uM)(),
        n = (0, Iz.fk)(),
        i = (0, IB.b8)(),
        s = (0, Nf.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, Ij.n)(Ib.Vc)) return e;
    }
}
var yR = n(687123),
    yD = n(444802);
function yP() {
    let e = (0, yD.WX)();
    T.useEffect(() => {
        (0, CA.N)(CE.YA.AGE_CONFIRMATION_NOTICE, CE.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, CA.N)(CE.YA.AGE_CONFIRMATION_NOTICE, CE.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CA.N)(CE.YA.AGE_CONFIRMATION_NOTICE, CE.YX.CONFIRM_AGE));
        }, []);
    return (0, S.jsx)(ar.p, {
        messageType: ar.Y.INFO,
        action: (0, S.jsx)(hb.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: U.intl.string(U.t.FDSSia),
            onClick: n,
        }),
        children: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, S.jsx)(nc.Anchor, { onClick: t, children: e }, n) }),
    });
}
function yG() {
    let e = (0, Iz.aX)(yR.t.REACTIVE_CHECK),
        t = (0, IB.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yP };
    }, [e, t]);
}
var yM = n(323073),
    yU = n(386171),
    yV = n(96607);
let yk = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yU.hT,
        useDisabled: function () {
            let e = (0, yV.A)() ?? !0,
                t = (0, yM.sP)(),
                n = (0, IB.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yM.p5)() && e
                ? IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yw = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yU.tI,
        useDisabled: function () {
            let e = (0, yV.A)() ?? !0,
                t = (0, yM.sP)(),
                n = (0, IB.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yM.p5)() && e
                ? IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yF = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yB = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yF] });
n(667532);
var yz = n(390248),
    yY = n(632119),
    yX = n(945276),
    yH = n(389737),
    yW = n(566769);
function yK() {
    let e,
        t = (0, yX.A)() ?? !0,
        n = (0, Cm.uM)(),
        i = (0, Cm.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oe.cf)([ay.A], () => ay.A.settings.textAndImages?.explicitContentSettings ?? (0, yY.C$)())),
        {
            explicitContentGuilds: (0, yY.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yY.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yY.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yz.hK)() && t.includes(eQ.TO.SHOW)
            ? IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yY.Jz)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(N_.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yH.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? U.intl.string(N_.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yZ() {
    let e,
        t = (0, yX.A)() ?? !0,
        n = (0, Cm.uM)(),
        i = (0, Cm.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, oe.cf)([ay.A], () => ay.A.settings.textAndImages?.goreContentSettings ?? (0, yD.T4)())),
        {
            goreContentGuilds: (0, yD.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yD.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yD.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yz.hK)() && t.includes(eQ.TO.SHOW)
            ? IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yD.qY)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(N_.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(yH.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(yW.A, {
                title: U.intl.string(U.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? U.intl.string(N_.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yq = n(875162),
    yQ = n(636745);
let yJ = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yD.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: yK,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yZ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, S.jsxs)(yu.h, {
            children: [
                (0, S.jsx)(yu._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, S.jsx)(yq.A, { tabs: t, orientation: "vertical", tabsClassName: yQ.v }),
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
var y$ = n(639555),
    y0 = n(617641),
    y1 = n(546140),
    y2 = n(406935),
    y3 = n(594061);
let y5 = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: y1.L,
        setValue: function (e) {
            return y3.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y2._t.create({ value: e });
                },
                y3.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y0.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y$.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yX.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y6 = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
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
                x = Ch(),
                f =
                    ((s = (0, Cm.uM)()),
                    (l = (0, Iz.fk)()),
                    (r = (0, IB.b8)()),
                    (a = (0, Nf.Z)()),
                    (o = yO(CE.YA.AGE_CONFIRMATION_NOTICE, Iv)),
                    (u = yO(CE.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, IN.M0)),
                    (d = T.useCallback(() => {
                        (0, CA.N)(CE.YA.AGE_CONFIRMATION_NOTICE, CE.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, CA.N)(CE.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CE.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, Ij.n)(Ib.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(IL.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: U.intl.string(IL.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(IL.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, Nf.Z)()),
                    (t = (0, yD.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, CA.N)(CE.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CE.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, CA.N)(CE.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CE.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: U.intl.format(U.t.EUo0yj, {
                                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, Iz.SJ)()),
                    (m = (0, IB.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, CA.N)(CE.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CE.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, CA.N)(CE.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CE.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: h,
                                text: U.intl.format(U.t.OX4ybh, {
                                    hook: (e, t) => (0, S.jsx)(nc.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = yG();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [yJ, y5, yk, yw, yB],
    });
var y4 = n(923457),
    y8 = n(750714);
let y7 = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            i = (0, Iz.yv)(y4.p.SPAM_FILTERS);
        return e !== eQ.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eQ.he.FRIENDS_AND_NON_FRIENDS
              : (y8.xY.get(t) ?? eQ.he.NON_FRIENDS);
    },
    setValue: (e) => M.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: U.intl.string(U.t["+w5yKk"]), value: eQ.he.FRIENDS_AND_NON_FRIENDS },
            { name: U.intl.string(U.t.yAPg6r), value: eQ.he.NON_FRIENDS },
            { name: U.intl.string(U.t.FEXKsv), value: eQ.he.DISABLED },
        ];
    },
    useSearchTerms: () => [U.intl.string(U.t.JzaP4h), U.intl.string(U.t.H9XOl3), U.intl.string(U.t.k4W40P)],
});
var y9 = n(189883);
let be = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, ia.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Cm.uM)();
    },
});
var bt = n(665260);
let bn = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bt.UI(t, I.dzt.MUTUAL_FRIENDS) : bt.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cm.uM)();
        },
    }),
    bi = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ia.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? bt.UI(t, I.dzt.MUTUAL_GUILDS) : bt.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cm.uM)();
        },
    }),
    bs = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [be, bn, bi],
    });
var bl = n(420825);
let br = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, bl.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    ba = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = y9.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: Ch,
        buildLayout: () => [bs, br],
    });
var bo = n(994500),
    bu = n(428678),
    bd = n(49229),
    bc = n(730134),
    bg = n(276573);
function bm(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, S.jsxs)("div", {
        className: bg.wx,
        children: [
            (0, S.jsx)("div", {
                className: bg.zc,
                children: i ? (0, S.jsx)(bu.K, {}) : (0, S.jsx)(Cq.EyeSlashIcon, {}),
            }),
            (0, S.jsxs)("div", {
                className: bg.Qq,
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
function bA(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([bo.A], () => bo.A.isBlocked(t)),
        s = (0, f.bG)([lh.default], () => lh.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? bd.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bd.A.unignoreUser(t, tw.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, S.jsxs)("div", {
              className: iE()(bg.nM, { [bg.fW]: n }),
              children: [
                  (0, S.jsxs)("div", {
                      className: bg.eF,
                      children: [
                          (0, S.jsx)(bc.A, { user: s, size: b._3.SIZE_40 }),
                          (0, S.jsxs)("div", {
                              className: bg.Qq,
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
function bE(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, S.jsx)(yu.h, {
        children: (0, S.jsxs)("div", {
            className: bg.Nr,
            children: [
                (0, S.jsx)(bm, { listType: n, numberOfUsers: t.length }),
                (0, S.jsx)("div", {
                    className: bg.jS,
                    children: t.slice(0, i).map((e, n) => (0, S.jsx)(bA, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, S.jsx)("div", {
                          className: bg.vM,
                          children: (0, S.jsx)(n9.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bg.Qf,
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
let bh = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([bo.A], () => bo.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bo.A], () => bo.A.getBlockedIDs());
            return (0, S.jsx)(bE, { userIds: e, listType: "blocked" });
        },
    }),
    bx = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([bo.A], () => bo.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([bo.A], () => bo.A.getIgnoredIDs());
            return (0, S.jsx)(bE, { userIds: e, listType: "ignored" });
        },
    }),
    bp = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bh, bx],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([bo.A], () => ({
                hasBlockedUsers: bo.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bo.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bS = n(22385),
    bT = n(556534),
    bf = n(111159),
    bI = n(152056),
    b_ = n(428031),
    bN = n(978433);
let bC = { label: () => U.intl.string(U.t["32u1Dx"]), value: bS.YG };
var by = n(307863),
    bb = n(954225);
function bv() {
    return (0, by.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function bj(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bO = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bv,
    useSubtitle: function () {
        let e = (0, bT.Tx)(),
            t = (0, bT.q9)(),
            n = (0, by.e)();
        return e === bS.YG
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
        let e = (0, bT.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, b_.K)();
        return e === bS.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Cm.uM)();
        return (0, bT.Tx)() === bS.YG && e;
    },
    setValue: function (e) {
        let t = bS.xk.getState().selectedGuildId;
        if (t === bS.YG) {
            var n;
            ((n = !e),
                (0, Cw.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l$.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), bj(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sv.A.getGuildIds() : []), bj(n, !0));
                    },
                }));
        } else {
            let n = (0, ia.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bb.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bL = n(116774),
    bR = n(953298);
function bD(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bP() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bG = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bP,
        useSubtitle: function () {
            let e = (0, bT.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bT.Tx)(),
                t = (0, b_.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, bL.s)(),
                s = (0, Cm.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === bS.YG && s ? !l : e === bS.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bT.Tx)(),
                t = (0, Cm.uM)(),
                n = (0, b_.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, bL.s)();
            return e === bS.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bS.xk.getState().selectedGuildId;
            if (!e && (0, bR.w)())
                return void IC.A.showAgeVerificationGetStartedModal({ entryPoint: yb.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bS.YG) {
                var n;
                ((n = !e),
                    (0, Cw.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l$.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bD(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sv.A.getGuildIds() : []), bD(n, !0));
                        },
                    }));
            } else {
                let n = (0, ia.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bb.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bM = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bv(), bP()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bS.xk)(),
                s = (0, f.bG)([gf.Ay], () => gf.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sv.A], () => sv.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, b_.K)()),
                    (0, f.bG)(
                        [sv.A],
                        () => {
                            let n = new Set(e);
                            return sv.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            T.useEffect(
                () =>
                    bI.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bS.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bS.YG && null != a
                                ? i(a)
                                : "" === e && n !== bS.YG && i(bS.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bC,
                            id: bC.value,
                            label: bC.label(),
                            leading: (0, S.jsx)("div", {
                                className: bN.KP,
                                children: (0, S.jsx)(bf.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bN.cl,
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
                                    leading: (0, S.jsx)(gD.Ay, {
                                        className: bN.cl,
                                        guild: n,
                                        size: gD.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bS.YG && r > 0;
            return (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(Sz.Z, {
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
                            className: bN.h_,
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
    bU = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bT.Tx)(),
                t = yL();
            return e === bS.YG && null != t;
        },
        Component: function () {
            let e = yL(),
                t = yO(CE.YA.AGE_CONFIRMATION_NOTICE, Iv),
                n = yO(CE.YA.CONTENT_AND_SOCIAL_NOTICE, IN.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, S.jsx)(yj, {
                        noticeType: CE.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(IL.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(IL.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, S.jsx)(yj, {
                        noticeType: CE.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: U.intl.format(IL.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: U.intl.string(U.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bV = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = Ch(),
                t = yG();
            if ((0, bT.Tx)() === bS.YG) return e ?? t;
        },
        buildLayout: () => [bM, bO, bG, bU],
    }),
    bk = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [y7] }),
    bw = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yy();
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
                let { sortedGames: e } = yy();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, S.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hK.CD,
                                height: hK.CD,
                            }),
                            shape: hK.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, S.jsx)("img", {
                                    src: G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: hK.YP,
                                    height: hK.YP,
                                }),
                                shape: hK.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            x_.A.fetch();
        },
        buildLayout: () => [yN, yC, yI, yx],
    }),
    bF = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [y6, bk, bV, ba, bw, bp],
    }),
    bB = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: yE.l,
        buildLayout: () => [bF],
    });
var bz = n(782603),
    bY = n(899847),
    bX = n(695515);
let bH = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
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
    bW = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, ng.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    bK = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.JZxxGx),
        useSubtitle: () => U.intl.string(U.t.HDLtJl),
        useValue: () => (0, f.bG)([aM.A], () => aM.A.getTTSType()),
        setValue: (e) => aF.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: U.intl.string(U.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: U.intl.string(U.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => X.$j,
    }),
    bZ = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bq = (0, E.bd)(bZ, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(bZ, {
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
        buildLayout: () => [bH, bW, bK],
    }),
    bQ = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [bq],
    }),
    bJ = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aM.A], () => !aM.A.getDisableUnreadBadge());
        },
        setValue: (e) => aF.default.setDisableUnreadBadge(!e),
    }),
    b$ = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [bJ],
    });
var b0 = n(840559),
    b1 = n(997187);
let b2 = (0, ul.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b3 = n(723923);
let b5 = b3.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([b1.A], () => b1.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b0.CA)(e.category, t),
        }),
    ),
    b6 = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([b1.A], () => b1.A.getEmailSettings());
            return b3.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b0.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b4 = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b2.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = b1.A.getEmailSettings();
            e || (0, b0.cR)();
        },
        buildLayout: () => [...b5, b6],
    }),
    b8 = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aM.A], () => aM.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aF.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var b7 = n(832712),
    b9 = n(543465),
    ve = n(790782);
let vt = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([b9.Ay], () => b9.Ay.useNewNotifications),
    setValue: function (e) {
        (b7.A.setAccountFlag(h5.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (he.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sv.A.getGuildsArray().filter(
                        (e) => b9.Ay.resolveGuildUnreadSetting(e) === ve.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lh.default, b9.Ay],
            () =>
                lh.default.getCurrentUser()?.isStaff() ||
                lh.default.getCurrentUser()?.isStaffPersonal() ||
                b9.Ay.useNewNotifications,
        ),
});
var vn = n(534654);
let vi = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aM.A], () => aM.A.screenDowntimeReminder),
        setValue: (e) => aF.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vn.A)(),
                t = (0, Np.Du)();
            return e && t;
        },
    }),
    vs = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vn.A)(),
                t = (0, Np.Du)();
            return e && t;
        },
    }),
    vl = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    vr = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    va = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vo = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vu = n(815807);
let vd = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: eQ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: eQ.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: eQ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, vu.n4)(e, M.Zp.getSetting()),
    }),
    vc = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vg = (0, ul.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vm = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vg.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vA = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [va, vl, vr, vc, vm, vo, vd],
    }),
    vE = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aM.A], () => aM.A.taskbarFlash),
        setValue: (e) => aF.default.setTaskbarFlash(e),
        usePredicate: () => (0, nf.uF)(),
    }),
    vh = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [b8, vE, vA, vt, vs, vi],
    });
var vx = n(965957),
    vp = n(312671),
    vS = n(235079);
let vT = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aU.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([vp.A], () => vp.A.getSoundpack()),
            t = aU.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aU.A.getHolidaySoundpack();
        (th()(null != t, "predicate should fail if no soundpack is available"), (0, vx.p)(e ? t : vS.i.CLASSIC));
    },
    usePredicate: aU.A.useIsEligible,
});
var vf = n(970931);
let vI = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: vf.kB,
        useDisabledMessage: () => ((0, vf.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    v_ = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    vN = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => aY("message3") }),
        useValue: () =>
            (0, f.bG)([aM.A], () => aM.A.getNotifyMessagesInSelectedChannel() && !aM.A.getDisableAllSounds()),
        setValue: (e) => aF.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aM.A], () => aM.A.getDisableAllSounds()),
    }),
    vC = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aM.A], () => aM.A.getDisableAllSounds()),
        setValue: (e) => aF.default.toggleDisableAllSounds(e),
    }),
    vy = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                az();
            };
        },
        buildLayout: () => [aX(vI), vN, aX(v_), vC],
    }),
    vb = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    vv = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vb] }),
    vj = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [vT, vy, vv],
    }),
    vO = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bX.A.getAgeGroup() || bX.A.isLoading() || (bX.A.canRefetch() && bY.Ay.initialPageLoad());
        },
        buildLayout: () => [vh, vj, b$, b4, bQ],
    }),
    vL = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bz.BellIcon,
        buildLayout: () => [vO],
    }),
    vR = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NU, yA, bB, vL, Ca],
    });
var vD = n(387758),
    vP = n(271866),
    vG = n(147964),
    vM = n(868511);
let vU = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vG.A], () => null != vG.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sS.openModal)((e) => (0, S.jsx)(vM.A, { ...e })) : vP.cL();
        },
    }),
    vV = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => uy.p5,
    }),
    vk = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [vV, vU] }),
    vw = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vk] }),
    vF = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vD.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vw],
    });
var vB = n(70688),
    vz = n(830215);
let vY = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vB.DoorExitIcon,
        onClick: () => {
            (0, n8.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vz.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vX = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vF, vY],
    }),
    vH = (0, E.Hr)({ buildLayout: () => [IT, vR, EI, od, S0, hX, vX], analyticsKey: "user_settings" });
