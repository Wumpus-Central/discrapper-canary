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
    E,
    h = n(419954),
    x = n(780964),
    S = n(550640),
    p = n(107384),
    T = n(477900),
    f = n(582128),
    I = n(17928),
    _ = n(652215),
    N = n(346055),
    C = n(297264),
    y = n(364522),
    b = n(97808),
    v = n(778712),
    j = n(821609),
    O = n(775602),
    L = n(320095),
    R = n(963852),
    D = n(763754),
    P = n(20851),
    G = n(95701),
    M = n(486020),
    U = n(885386),
    V = n(105292),
    k = n(345016);
let w = new G.nA({ id: "1337", guild_id: "1337", type: _.rbe.GUILD_TEXT, name: "preview" }),
    F = [
        { status: _.clD.IDLE, discriminator: "2" },
        { status: _.clD.DND, discriminator: "3" },
        { status: _.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, L.rh)({ ...(0, R.Ay)({ channelId: w.id, content: e }), state: _.cmJ.SENT, reactions: t });
}
var z = n(856488);
let Y = (0, h.zD)(x.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => V.intl.string(V.t.TZ2hZH),
        useSubtitle: () => V.intl.string(V.t.Q7wgHc),
        useValue: () => U.D_.useSetting(),
        setValue: (e) => U.D_.updateSetting(e),
    }),
    X = (0, h.zD)(x.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => V.intl.string(V.t.XYvMIX),
        useSubtitle: () => V.intl.string(V.t.T0rbtM),
        useValue: U._z.useSetting,
        setValue: U._z.updateSetting,
    });
var H = n(100767),
    W = n(435558),
    K = n.n(W),
    Z = n(935399),
    q = n(331322),
    Q = n(205513),
    $ = n(834730),
    J = n(113494),
    ee = n(782134),
    et = n(54570),
    en = n(8880),
    ei = n(75804);
let es = K().debounce((e) => {
    (0, et.zU)(e);
}, 250);
function el() {
    let [e, t] = f.useState(!1);
    return (
        (0, Z.l0)(() => (0, et.pr)()),
        (0, T.jsx)(j.$, {
            text: V.intl.string(V.t.SKNnqq),
            icon: e ? J.PauseIcon : ee.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, et.pr)(), t(!1));
                    return;
                }
                ((0, et.AU)(
                    V.intl.string(V.t.PKaNJL),
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
let er = (0, h.E2)(x.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [V.intl.string(V.t.lsW5Ev)],
        Component: function () {
            let e = (0, I.bG)([en.A], () => en.A.speechRate);
            return (0, T.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, T.jsx)(Q.G, {
                        label: V.intl.string(V.t.lsW5Ev),
                        description: V.intl.string(V.t.Ci4wMS),
                        markers: ei.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: es,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, T.jsx)($.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, T.jsx)($.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: V.intl.string(V.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, T.jsx)($.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, T.jsx)(el, {}),
                ],
            });
        },
        usePredicate: () => H.$j,
    }),
    ea = (0, h.zZ)(x.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => V.intl.string(V.t.XVR0Rb),
        buildLayout: () => [er, X, Y],
    }),
    eo = (0, h.AK)(x.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.aTfeGK),
        destinationKey: x.X.APPEARANCE_PANEL,
    }),
    eu = (0, h.gN)(x.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [eo] });
var ed = n(955572);
let ec = (0, h.zD)(x.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => V.intl.string(V.t.OCJg5f),
    useSubtitle: () => V.intl.string(V.t.HEO0s3),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.desaturateUserColors),
    setValue: () => (0, ed.YV)(),
});
var eg = n(652525);
let em = (0, h.zD)(x.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => V.intl.string(V.t["+Isihb"]),
        useSubtitle: () => V.intl.string(V.t.nNZ1Tz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.enableCustomCursor),
        setValue: (e) => (0, ed.ts)(e),
        usePredicate: () => (0, eg.t)("EnableCustomCursorSetting"),
    }),
    eA = (0, h.zD)(x.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => V.intl.string(V.t["S3z+pV"]),
        useSubtitle: () => V.intl.string(V.t["3QuI9+"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ed.Gm)(e),
        hasIcon: !0,
    });
var eE = n(554146);
let eh = (0, h.zD)(x.X.HIGH_CONTRAST_MODE, {
    useTitle: () => V.intl.string(V.t.aZlePv),
    useSubtitle: () => V.intl.string(V.t["v2qF8+"]),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ed.uh)(e ? O._1.HIGH : O._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: p.Xi.NEW, dismissibleContent: eE.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var ex = n(406360),
    eS = n(964404);
let ep = (0, h.Qx)(x.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => V.intl.string(V.t.nemtgW),
        useSubtitle: () => V.intl.string(V.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useOptions: function () {
            return f.useMemo(
                () => [
                    { name: V.intl.string(V.t.D5Fma9), desc: V.intl.string(V.t.Qj75ck), value: "no-limit" },
                    { name: V.intl.string(V.t.ldcGIH), desc: V.intl.string(V.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, ex.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ed.FU)(e);
        },
        useValue: function () {
            return (0, I.bG)([eS.Ay], () => eS.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", V.intl.string(V.t["O/Gjvn"])],
    }),
    eT = (0, h.Hn)(x.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => V.intl.string(V.t.nC2XBl),
        useSubtitle: () => V.intl.string(V.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: V.intl.string(V.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: V.intl.string(V.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: V.intl.string(V.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: V.intl.string(V.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.officialMessageStyle),
        setValue: (e) => (0, ed.w_)(e),
    }),
    ef = (0, h.Hn)(x.X.ROLE_STYLE, {
        useTitle: () => V.intl.string(V.t.uSOPWm),
        useSubtitle: () => V.intl.string(V.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: V.intl.string(V.t.eDdMzJ), value: "username" },
            { id: "dot", label: V.intl.string(V.t.rdmJp0), value: "dot" },
            { id: "hidden", label: V.intl.string(V.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.roleStyle),
        setValue: (e) => (0, ed.IX)(e),
    });
(0, h.Qx)(x.X.ROLE_STYLE, {
    useTitle: () => V.intl.string(V.t.uSOPWm),
    useSubtitle: () => V.intl.string(V.t["86hjzQ"]),
    useOptions: () => [
        { name: V.intl.string(V.t.YEOEi6), value: "username" },
        { name: V.intl.string(V.t.mQaro3), value: "dot" },
        { name: V.intl.string(V.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.roleStyle),
    setValue: (e) => (0, ed.IX)(e),
});
let eI = (0, h.sN)(x.X.SATURATION, {
    useTitle: () => V.intl.string(V.t["5PWWCY"]),
    useSubtitle: () => V.intl.string(V.t.xf5S6P),
    markers: _.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => O.Ay.saturation,
    asValueChanges: (e) => (0, ed.HU)(e),
});
var e_ = n(964486),
    eN = n(839214),
    eC = n(502229),
    ey = n(975571);
let eb = (0, eN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ev = (0, h.zD)(x.X.SYNC_FORCED_COLORS, {
        useTitle: () => V.intl.string(V.t.cguiec),
        useSubtitle: () => V.intl.format(V.t.GwEVE2, { learnMoreLink: ey.A.getArticleURL(_.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, I.bG)([O.Ay], () => O.Ay.syncForcedColors);
            return (
                (0, e_.Ay)(() => {
                    eb.setState({ syncEnabled: O.Ay.syncForcedColors });
                }),
                eb.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = eb.getState();
            if (null != t) {
                (clearTimeout(t), eb.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === O.Ay.syncForcedColors) return void eb.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, ed.D3)(e), eb.setState({ updateTimeout: null }));
            }, 150);
            eb.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eC.D)(),
    }),
    ej = (0, h.zZ)(x.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => V.intl.string(V.t.JqvyiY),
        buildLayout: () => [eI, ec, eh, em, ev, ep, ef, eT, eA, eu],
    });
var eO = n(397438),
    eL = n(355097),
    eR = n(141531);
function eD(e) {
    return (0, I.bG)([eO.A], () =>
        (function (e) {
            switch (e) {
                case eL._A.REDUCED_MOTION:
                    return V.intl.format(V.t["1dT9V4"], {});
                case eL._A.REDUCED_MOTION_STICKERS:
                    return V.intl.string(V.t["2ExvRu"]);
                case eL._A.GAME_MODE:
                    return V.intl.string(eR.default.VGcdxP);
                default:
                    return;
            }
        })(eO.A.getAppliedOverrideReasonKey(e)),
    );
}
function eP(e) {
    return (0, I.bG)([eO.A], () => eO.A.getAppliedOverrideReasonKey(e) === eL._A.GAME_MODE);
}
let eG = (0, h.zD)(x.X.ANIMATE_EMOJIS, {
        useTitle: () => V.intl.string(V.t.iIaOlc),
        useSubtitle: () => eD("animateEmoji"),
        useDisabled: () => eP("animateEmoji"),
        useValue: () => U.Sf.useSetting(),
        setValue: (e) => U.Sf.updateSetting(e),
    }),
    eM = (0, h.zD)(x.X.ANIMATE_GIFS, {
        useTitle: () => V.intl.string(V.t.wqsK7q),
        useSubtitle: () => eD("gifAutoPlay"),
        useDisabled: () => eP("gifAutoPlay"),
        useValue: () => U.kt.useSetting(),
        setValue: (e) => U.kt.updateSetting(e),
    });
var eU = n(823894);
let eV = (0, h.Qx)(x.X.ANIMATE_STICKERS, {
        useTitle: () => V.intl.string(V.t.sBHIh0),
        useSubtitle: () => eD("animateStickers"),
        useDisabled: () => eP("animateStickers"),
        useOptions: () => [
            { name: V.intl.string(V.t["Xp+X2U"]), value: eU.BJ.ALWAYS_ANIMATE },
            { name: V.intl.string(V.t.IlLT7e), desc: V.intl.string(V.t.bIW9Tl), value: eU.BJ.ANIMATE_ON_INTERACTION },
            { name: V.intl.string(V.t.IGu8x3), value: eU.BJ.NEVER_ANIMATE },
        ],
        useValue: () => U.S0.useSetting(),
        setValue: (e) => U.S0.updateSetting(e),
    }),
    ek = (0, h.zD)(x.X.REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.b3XBzg),
        useSubtitle: () => V.intl.format(V.t.XqvxJc, { helpdeskArticle: ey.A.getArticleURL(_.MVz.REDUCED_MOTION) }),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.prefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "reduce" : "no-preference"),
    }),
    ew = (0, h.zD)(x.X.SYNC_REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.oL55A6),
        useValue: () => (0, I.bG)([O.Ay], () => "auto" === O.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "auto" : O.Ay.systemPrefersReducedMotion),
    });
function eF(e) {
    return V.intl.formatToPlainString(V.t.pyvjRp, { seconds: e });
}
let eB = (0, h.sN)(x.X.TOAST_DURATION, {
        useTitle: () => V.intl.string(V.t["3oxlia"]),
        useSubtitle: () => V.intl.string(V.t.CZ3jxp),
        markers: _.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === _.hH7.TOAST_DURATION_MIN_SECONDS || e === _.hH7.TOAST_DURATION_MAX_SECONDS
                ? eF(e)
                : void 0,
        onValueRender: eF,
        stickToMarkers: !0,
        minValue: _.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: _.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => _.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => O.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, ed.E7)(1e3 * e),
    }),
    ez = (0, h.zZ)(x.X.MOTION_CATEGORY, {
        useTitle: () => V.intl.string(V.t.e3TR1b),
        buildLayout: () => [ek, ew, eB, eM, eG, eV],
    });
var eY = n(688810),
    eX = n(259065),
    eH = n(701974);
let eW = (0, h.zD)(x.X.DISPLAY_NAME_STYLES, {
    useTitle: () => V.intl.string(eH.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eY.Ay)();
        return V.intl.format(eH.default.aEax6P, {
            onClickOpenModal() {
                (0, eX.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ed.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, h.sN)(x.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => V.intl.string(V.t.rT3Pq5),
        useSubtitle: () => V.intl.string(V.t.LXUhen),
        markers: _.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: _.hH7.FONT_SIZES["0"],
        maxValue: _.hH7.FONT_SIZES[_.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => _.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => O.Ay.fontSize,
        onValueRender: eK,
        onMarkerRender: eK,
        asValueChanges: (e) => (0, ed.XS)(e),
    }),
    eq = (0, h.zD)(x.X.UNDERLINE_LINKS, {
        useTitle: () => V.intl.string(V.t.OLZFB8),
        useSubtitle: () => V.intl.string(V.t.DIX3ke),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ed.kI)(e),
    }),
    eQ = (0, h.zZ)(x.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["bxh/R7"]),
        buildLayout: () => [eZ, eq, eW],
    });
var e$ = n(873298);
let eJ = (0, h.Qx)(x.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => V.intl.string(V.t["C/5V0A"]),
        useSubtitle: () => V.intl.string(V.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: V.intl.string(V.t["7iegX4"]), value: e$.NS.COMPACT },
            { name: V.intl.string(V.t.bBvAEH), value: e$.NS.DEFAULT },
            { name: V.intl.string(V.t["4cuYHx"]), value: e$.NS.COZY },
        ],
        useValue: () => U.Xi.useSetting(),
        setValue: (e) => {
            e !== e$.NS.UNSET_UI_DENSITY && U.Xi.updateSetting(e);
        },
    }),
    e0 = "cozy",
    e1 = "compact",
    e2 = (0, h.Qx)(x.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => V.intl.string(V.t.nKRoPv),
        useSubtitle: () => V.intl.string(V.t.QntEEG),
        useSearchTerms: () => [V.intl.string(V.t.ZEoGMd)],
        useOptions: () => [
            { name: V.intl.string(V.t.Jqj4cZ), value: e0 },
            { name: V.intl.string(V.t["1JNcPS"]), value: e1 },
        ],
        useValue: () => (U.hH.useSetting() ? e1 : e0),
        setValue: (e) => {
            (U.hH.updateSetting(e === e1), (0, ed.AC)());
        },
    });
var e3 = n(381941);
function e5(e) {
    return `${e.toFixed(0)}px`;
}
let e4 = (0, h.sN)(x.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => V.intl.string(V.t.Q6lKkg),
    useSubtitle: () => V.intl.string(V.t.p7eUrb),
    markers: e3.qh,
    stickToMarkers: !0,
    minValue: e3.qh["0"],
    maxValue: e3.qh[e3.qh.length - 1],
    useDefaultValue: () => (U.hH.useSetting() ? e3.y5 : e3.ES),
    useExternalValue: () => (0, I.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
    getInitialValue: () => O.Ay.messageGroupSpacing,
    onValueRender: e5,
    onMarkerRender: e5,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, ed.AC)(e);
        }
    },
});
var e6 = n(775121),
    e8 = n(723702);
let e7 = (0, h.sN)(x.X.APPEARANCE_ZOOM, {
        usePredicate: () => e8.isPlatformEmbedded,
        useTitle: () => V.intl.string(V.t.i19n5L),
        useSubtitle: () => V.intl.format(V.t["x9PK/3"], { modKey: e6.A.modKey }),
        markers: _.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: _.hH7.ZOOM_SCALES["0"],
        maxValue: _.hH7.ZOOM_SCALES[_.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => _.hH7.ZOOM_DEFAULT,
        getInitialValue: () => O.Ay.zoom,
        useExternalValue: () => (0, I.bG)([O.Ay], () => O.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, ed.Qp)(e),
        useSearchTerms: () => [V.intl.string(V.t.ip0uSf)],
    }),
    e9 = (0, h.zZ)(x.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.VKYWk8),
        buildLayout: () => [eJ, e2, e4, e7],
    }),
    te = (0, h.t_)(x.X.ACCESSIBILITY_PANEL, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        buildLayout: () => [eQ, e9, ej, ez, ea],
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = U.hH.useSetting(),
                    t = U.jW.useSetting(),
                    n = f.useMemo(
                        () => [
                            B(
                                V.intl.formatToPlainString(V.t.BknJRT, {}),
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
                            B(V.intl.formatToPlainString(V.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, I.bG)([O.Ay], () => O.Ay.messageGroupSpacing);
                return (0, T.jsx)(N.M, {
                    children: (0, T.jsxs)("section", {
                        "aria-label": V.intl.string(V.t.RC22qg),
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: k.Vf,
                                children: V.intl.string(V.t.RC22qg),
                            }),
                            (0, T.jsxs)(y.Ip, {
                                className: k.VH,
                                children: [
                                    (0, T.jsx)("ol", {
                                        className: k.DZ,
                                        style: { gap: i },
                                        "aria-label": V.intl.string(V.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, T.jsx)(
                                                "li",
                                                {
                                                    children: (0, T.jsx)(P.A, {
                                                        message: t,
                                                        channel: w,
                                                        compact: e,
                                                        author: { ...(0, D.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, T.jsxs)("div", {
                                        className: k.Jb,
                                        children: [
                                            (0, T.jsx)("div", {
                                                className: k.HD,
                                                children: F.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, T.jsx)(
                                                        b.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: v._3.SIZE_32,
                                                            src: M.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": V.intl.string(V.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, T.jsx)(j.$, {
                                                text: V.intl.string(V.t["2RHHgz"]),
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
    tt = (0, h.i4)(x.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        icon: S.c,
        useMenu: z.A,
        buildLayout: () => [te],
    });
n(321073);
var tn = n(650809),
    ti = n(477782),
    ts = n(636537),
    tl = n(73153),
    tr = n(74396),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(174459),
    tc = n(189081);
let tg = (0, h.zD)(x.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, I.bG)([tc.A], () => tc.A.hasLibraryApplication()),
        useTitle: () => V.intl.string(V.t.fi3UQN),
        useSubtitle: () => V.intl.string(V.t["8mYp37"]),
        useValue: () => !U.l_.useSetting(),
        setValue: (e) => U.l_.updateSetting(!e),
    }),
    tm = (0, h.zZ)(x.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [tg],
    });
var tA = n(284009),
    tE = n.n(tA),
    th = n(199966),
    tx = n(963935);
function tS(e) {
    let { title: t } = e;
    return t;
}
function tp(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tT(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, T.jsx)(tp, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tf(e) {
    return e.type === tx.Z6.LIST;
}
function tI(e, t) {
    let { limit: n = 2, formatter: i = tS } = t ?? {};
    tE()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, th._)(),
        r = s.get(e) ?? l.get(e);
    tE()(
        null != r && (r.type === tx.Z6.ACCORDION || tf(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tf(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return f.useMemo(() => {
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
                return V.intl.format(V.t["3H9tCW"], { settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return V.intl.format(V.t.MWryo6, {
                    settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tT({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return V.intl.format(V.t.a00b5G, {
                    settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tT({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tT({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? V.intl.format(V.t.O8vNbS, { settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? V.intl.format(V.t["acXG/W"], {
                    settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tT({ setting: t[1], formatter: i, index: 1 }),
                })
              : V.intl.format(V.t["5+ldWc"], {
                    settingOneHook: tT({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tT({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tT({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var t_ = n(951260);
let tN = (0, h.zD)(x.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tC = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    ty = (0, h.zD)(x.X.ENABLE_SEND_BUTTON, tC),
    tb = (0, h.zD)(x.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tC,
        usePredicate: () => !(0, t_.n)("EnableSendButtonOutsideExperiment"),
    }),
    tv = (0, h.zD)(x.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => V.intl.string(V.t.WggFoO),
        useSubtitle: () => V.intl.string(V.t.XpErGj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ed.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tj = (0, h.zD)(x.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => V.intl.string(V.t.YErWkD),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ed.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tO = (0, h.zD)(x.X.ENABLE_GIF_BUTTON, {
        useTitle: () => V.intl.string(V.t.k7oNEz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ed.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tL = (0, h.zD)(x.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tR = (0, h.Qx)(x.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => V.intl.string(V.t.AxRAWt),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat),
        setValue: (e) => (0, ed.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.k86Soy), desc: V.intl.string(V.t.bSGTTZ), value: O.IG.FLEXIBLE },
                { name: V.intl.string(V.t.bjwSOn), desc: V.intl.string(V.t.We36HX), value: O.IG.CONDENSED },
                { name: V.intl.string(V.t.FDIKss), desc: V.intl.string(V.t["rclZL/"]), value: O.IG.HIDDEN },
            ];
        },
    }),
    tD = (0, h.FW)(x.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => V.intl.string(V.t["V9/cNN"]),
        buildLayout: () => [tR, tv, tj, tO, tL],
    }),
    tP = (0, h.bd)(x.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.IwVGQs) : V.intl.string(V.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tI(x.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, t_.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [ty, tN, tD],
    });
var tG = n(565645);
let tM = (0, h.zD)(x.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => V.intl.string(V.t["79qal8"]),
        useSubtitle: () =>
            V.intl.format(V.t.GejoQK, { emojiHook: (e, t) => (0, T.jsx)(tG.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: U.j7.useSetting,
        setValue: U.j7.updateSetting,
    }),
    tU = (0, h.zD)(x.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t.c0oFDw),
        useValue: U.BQ.useSetting,
        setValue: U.BQ.updateSetting,
    }),
    tV = (0, h.zD)(x.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.AqGrEI),
        useValue: U.SI.useSetting,
        setValue: (e) => {
            (td.default.track(_.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: _.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                U.SI.updateSetting(e));
        },
    });
var tk = n(793574);
let tw = (0, h.zD)(x.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t["d+It2U"]),
        useValue: U.ML.useSetting,
        setValue: (e) => {
            (td.default.track(_.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: _.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tk.A.TEXT_AND_IMAGES],
            }),
                U.ML.updateSetting(e));
        },
    }),
    tF = (0, h.zZ)(x.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ob7VMB),
        useSearchTerms: () => [V.intl.string(V.t.onqU6o)],
        buildLayout: () => [tV, tM, tw, tU, tb, tP],
    });
var tB = n(526162),
    tz = n(793943),
    tY = n(792656),
    tX = n(830543),
    tH = n(785007),
    tW = n(806932),
    tK = n(915089),
    tZ = n(10392),
    tq = n(82498),
    tQ = n(174197),
    t$ = n(202541);
let tJ = (0, h.E2)(x.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT)],
    Component: function () {
        let e = (0, tK.GV)(),
            { ref: t, ...n } = (0, tH._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
        return (
            (0, Z.Ay)(() => {
                i &&
                    (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t$.e.APP_ICON_UPSELL,
                        location_stack: [tk.A.USER_SETTINGS],
                    }),
                    (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, [tk.A.USER_SETTINGS], () =>
                        (0, tq.uq)(t$.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, T.jsx)("div", {
                ...n,
                ref: t,
                children: (0, T.jsx)(q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, T.jsx)(tW.m, { disabled: i, size: tQ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t0() {
    ((0, tz.nf)(tz.HP.APP_ICON), (0, tX.default)());
}
function t1() {
    return (0, T.jsx)(tY.A, {
        subscriptionTier: t$.pe.TIER_2,
        defaultTextOverride: V.intl.string(V.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t2 = (0, h.zZ)(x.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RPh2ou),
        useSubtitle: () => V.intl.string(V.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
            return f.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: p.UV.BUTTON,
                        text: V.intl.string(V.t["6acvnZ"]),
                        onClick: t0,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t1 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tJ],
    }),
    t3 = (0, h.AK)(x.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.UDr3Iy),
        useSearchTerms: () => [V.intl.string(V.t.UDr3Iy)],
        destinationKey: x.X.ACCESSIBILITY_PANEL,
    }),
    t5 = (0, h.gN)(x.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t3] });
var t4 = n(193249),
    t6 = n(16236),
    t8 = n(749884),
    t7 = n(22277);
let t9 = ey.A.getArticleURL(_.MVz.FAVORITES_GUILD),
    ne = (0, h.E2)(x.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [V.intl.string(t7.default.OT1NK5)],
        Component: function () {
            let e = (0, t8.A)(!1);
            return (0, T.jsx)(t4.d, {
                checked: e,
                description: V.intl.format(t7.default.GR2KOG, { helpCenterLink: t9 }),
                onChange: t6.kG,
                label: V.intl.string(t7.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    nt = (0, h.zD)(x.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => V.intl.string(V.t.U47N1p),
        useValue: U.hD.useSetting,
        setValue: U.hD.updateSetting,
    }),
    nn = (0, h.zD)(x.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => V.intl.string(V.t.VP11No),
        useValue: U.X6.useSetting,
        setValue: U.X6.updateSetting,
    }),
    ni = (0, h.FW)(x.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => V.intl.string(V.t["9nyle0"]),
        buildLayout: () => [nt, nn],
    }),
    ns = (0, h.zD)(x.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => V.intl.string(V.t["5bK9vw"]),
        useValue: U.rs.useSetting,
        setValue: U.rs.updateSetting,
    }),
    nl = (0, h.zD)(x.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => V.intl.string(V.t["zge/fP"]),
        useValue: U.jW.useSetting,
        setValue: U.jW.updateSetting,
    });
var nr = n(28863),
    na = n(766075);
let no = (0, h.zD)(x.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => V.intl.string(V.t.JgjNG3),
        useSubtitle: () => {
            if (!U.hH.useSetting())
                return V.intl.format(V.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, T.jsx)(
                            nr.Anchor,
                            {
                                onClick: () => (0, na.openUserSettings)(x.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !U.hH.useSetting(),
        useValue: () => {
            let e = U.aM.useSetting();
            return !U.hH.useSetting() || e;
        },
        setValue: (e) => {
            U.aM.updateSetting(e);
        },
    }),
    nu = (0, h.Hn)(x.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => V.intl.string(V.t.QgwmVz),
        useOptions: () => [
            { value: _.P6Q.ON_CLICK, id: _.P6Q.ON_CLICK, label: V.intl.string(V.t["KFH/me"]) },
            { value: _.P6Q.ALWAYS, id: _.P6Q.ALWAYS, label: V.intl.string(V.t.Pe1RbL) },
            { value: _.P6Q.IF_MODERATOR, id: _.P6Q.IF_MODERATOR, label: V.intl.string(V.t.K5VTBE) },
        ],
        useValue: U.gs.useSetting,
        setValue: U.gs.updateSetting,
    }),
    nd = (0, h.zD)(x.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => V.intl.string(V.t.AInv5m),
        useValue: U.SY.useSetting,
        setValue: U.SY.updateSetting,
    }),
    nc = (0, h.zZ)(x.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.OIgYlQ),
        useSearchTerms: () => [V.intl.string(V.t["/VQax8"])],
        buildLayout: () => [ni, ns, nl, nu, nd, no, ne, t5],
    });
var ng = n(753806),
    nm = n(145331);
let nA = (0, h.Qx)(x.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => V.intl.string(V.t.VkoLsy),
        useSearchTerms: () => [V.intl.string(V.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.E9JM4J), value: 0 },
                { name: V.intl.string(V.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!U.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? ng.A.cleanUpPrivateChannelSearchState() : ng.A.cleanUpSearchState({ type: _.I4_.DMS }),
                (0, nm._k)({
                    prevIsCrossDMSettingEnabled: U.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nm.vy.USER_SETTINGS,
                }),
                U.Hu.updateSetting(t));
        },
    }),
    nE = (0, h.zZ)(x.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5h0QOP"]),
        buildLayout: () => [nA],
    });
var nh = n(574381);
let nx = (0, h.zD)(x.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => V.intl.string(V.t.IxjaoF),
        useValue: function () {
            return (0, I.bG)([tu.A], () => {
                let { autoToggle: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nh.Av;
        },
    }),
    nS = (0, h.zD)(x.X.STREAMING_STREAMER_MODE, {
        useTitle: () => V.intl.string(V.t.TGNg6T),
        useSubtitle: () => V.intl.string(V.t["4nXLnE"]),
        useValue: function () {
            return (0, I.bG)([tu.A], () => {
                let { enabled: e } = tu.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            to.A.update({ enabled: e });
        },
    });
var np = n(77729),
    nT = n(589051),
    nf = n(81684),
    nI = n(999834);
let n_ = [],
    nN = (0, h.Hn)(x.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nI.b_)(),
                t = (0, nT.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return f.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nf.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, I.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? n_);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nC = (0, h.zD)(x.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => V.intl.string(V.t.LSBUGR),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    ny = (0, h.zD)(x.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nb = (0, h.zD)(x.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => V.intl.string(V.t.OrqYDP),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nv = (0, h.zD)(x.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sUAbLd),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nj = (0, h.zD)(x.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t["iA81+a"]),
        useSubtitle: () => V.intl.string(V.t.P4vj0h),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => np.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nO = (0, h.FW)(x.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.xYhOEh),
        buildLayout: () => [nC, ny, nb, nv, nj, nN],
    }),
    nL = (0, h.zZ)(x.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.S5GfOW),
        buildLayout: () => [nS, nx, nO],
    });
var nR = n(147248),
    nD = n(141343),
    nP = n(665267),
    nG = n(414133),
    nM = n(98908);
let nU = (0, h.Hn)(x.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => V.intl.string(V.t.Q7mm4g),
        useSearchTerms: () => [V.intl.string(nM.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: V.intl.string(V.t["hrS/Pc"]), value: e$.tI.GUILD },
            { id: "personal", label: V.intl.string(V.t.mlvXIq), value: e$.tI.PERSONAL },
        ],
        useValue: () => U.zY.useSetting(),
        setValue: U.zY.updateSetting,
        usePredicate: () => (0, nG.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nV = (0, h.zD)(x.X.SYNC_PROFILE_THEMES, {
        useTitle: () => V.intl.string(V.t.C00w4l),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ed.M1)(),
    });
var nk = n(817281),
    nw = n(284016),
    nF = n(363195);
let nB = (0, h.zD)(x.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => V.intl.string(V.t["/B+kEV"]),
    useSearchTerms: () => [V.intl.string(V.t.Ksh3ik)],
    useValue: function () {
        return (0, I.bG)([nw.A], () => !1 !== nw.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, I.bG)([nF.A], () => nF.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nF.A.theme,
            i = nR.A.gradientPreset?.id ?? null,
            s = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = _.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            tl.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nk.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nz = n(393284);
let nY = (0, h.AK)(x.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.nhVQDJ),
        useSearchTerms: () => [V.intl.string(V.t.nhVQDJ)],
        destinationKey: x.X.ACCESSIBILITY_PANEL,
    }),
    nX = (0, h.gN)(x.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nY] }),
    nH = (0, h.zZ)(x.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, I.bG)([O.Ay], () => O.Ay.useForcedColors)
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eC.D)()
                          ? V.intl.format(V.t.Jae48E, {
                                onClick: () => {
                                    (0, na.openUserSettings)(x.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : V.intl.string(V.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, I.bG)([nR.A, O.Ay], () => O.Ay.useForcedColors || nR.A.isPreview),
                t = (0, nD.V)();
            return e || t
                ? null
                : {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
                              text: V.intl.string(V.t["E+COuA"]),
                              onClick: nP.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nz.k, nB, nV, nU, nX],
    }),
    nW = (0, h.t_)(x.X.APPEARANCE_PANEL, {
        initialize: function () {
            tr.A.isFetching() ||
                (tl.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                ts.Bo.get({ url: _.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        buildLayout: () => [nH, t2, nc, tF, nE, nL, tm],
    }),
    nK = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nZ = (0, h.i4)(x.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        icon: tn.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ta.A)(),
                s =
                    ((e = U.D_.useSetting()),
                    (t = U.SI.useSetting()),
                    e
                        ? null
                        : (0, T.jsx)(ti.sL, {
                              id: "preview-markdown-toggle",
                              label: V.intl.string(V.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (td.default.track(_.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: _.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      U.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, I.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, T.jsx)(ti.sL, {
                        id: "streamer-mode-toggle",
                        label: V.intl.string(V.t.p9ZAJZ),
                        action: () => {
                            to.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return f.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, T.jsx)(ti.rX, { label: V.intl.string(V.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, T.jsx)(ti.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () => nK,
        buildLayout: () => [nW],
    });
var nq = n(37646),
    nQ = n(434404);
let n$ = (0, h.t_)(x.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nQ.F],
    }),
    nJ = (0, h.i4)(x.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nq.U,
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [n$],
    });
var n0 = n(3137),
    n1 = n(661531),
    n2 = n(314116),
    n3 = n(270003),
    n5 = n(893007),
    n4 = n(939249),
    n6 = n(369606),
    n8 = n(320448),
    n7 = n(604121),
    n9 = n(725951),
    ie = n(400492),
    it = n(669067),
    ii = n(115063),
    is = n(754692),
    il = n(927018),
    ir = n(512599),
    ia = n(532197),
    io = n(403362),
    iu = n(874486),
    id = n(503698),
    ic = n.n(id),
    ig = n(536637),
    im = n.n(ig),
    iA = n(58703),
    iE = n(906688),
    ih = n(98705);
function ix(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, il.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = im()(n),
        m = null != o && s,
        A = m ? n4.D : "div";
    return (0, T.jsxs)(A, {
        className: ic()(ih.kL, m && ih.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, T.jsx)("div", {
                className: ih.zc,
                children: (0, T.jsx)(iE.A, { achievementId: t, size: iE.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, T.jsxs)("div", {
                className: ih.VW,
                children: [
                    null != n &&
                        (0, T.jsx)($.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ih.YR,
                            children: (0, iA.mk)(g),
                        }),
                    (0, T.jsx)($.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, T.jsx)($.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iS = n(545744);
function ip(e) {
    let { onBackClick: t } = e,
        n = (0, I.bG)([iu.A], () => iu.A.getAllUnlockedAchievements()),
        i = f.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = f.useMemo(
            () =>
                Object.values(il.l0)
                    .filter(io.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsxs)(n4.D, {
                onClick: t,
                className: iS.vv,
                children: [
                    (0, T.jsx)(ia.A, { direction: ia.A.Directions.LEFT, className: iS.Kk }),
                    (0, T.jsx)($.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: V.intl.string(V.t["13/7kX"]),
                    }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: iS.N1,
                children: [
                    (0, T.jsxs)("div", {
                        className: iS.if,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: V.intl.string(V.t["6jI0hd"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: V.intl.string(V.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, T.jsx)("div", {
                        className: iS.nr,
                        children: (0, T.jsx)(n6.TrophyIcon, {
                            size: "custom",
                            color: n1.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, T.jsx)("div", {
                    className: iS.yF,
                    children: (0, T.jsx)("div", {
                        className: iS.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, T.jsx)(ix, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, T.jsxs)("div", {
                    className: iS.yF,
                    children: [
                        (0, T.jsx)("div", {
                            className: iS.if,
                            children: (0, T.jsx)($.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: V.intl.string(V.t.GFyMg1),
                            }),
                        }),
                        (0, T.jsx)("div", {
                            className: iS.Eh,
                            children: s.map((e) => (0, T.jsx)(ix, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, T.jsx)("div", { className: iS.yF, children: (0, T.jsx)("div", { className: iS.F3 }) }),
        ],
    });
}
var iT = n(224964),
    iI = n(31408),
    i_ = n(368588);
let iN = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iC = (0, W.range)(0, 11),
    iy = (0, W.range)(0, 2.25, 0.25),
    ib = (0, W.range)(1, 11),
    iv = (0, W.range)(1, 26),
    ij = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iO(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, T.jsx)(
                t4.d,
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
    return (0, T.jsx)(n3.n, { label: V.intl.string(V.t.bWVN1D), children: l });
}
function iL(e) {
    let { children: t } = e;
    return (0, T.jsx)($.E, { className: i_.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iR(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    return (0, T.jsx)(t4.d, {
        label: V.intl.string(V.t.vuiXm9),
        description: V.intl.string(V.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, is._)(il.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n2.A)({
                          title: s ? V.intl.string(V.t["FxT+p0"]) : V.intl.string(V.t.TAZ4F9),
                          subtitle: s ? V.intl.string(V.t.gmixrx) : V.intl.string(V.t.jN3t3K),
                          confirmText: V.intl.string(V.t.JFfins),
                          onConfirm: () => i(s ? iN : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iD(e) {
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
    return (0, T.jsxs)(n3.n, {
        label: V.intl.string(V.t.mqxwJO),
        children: [
            (0, T.jsx)(t4.d, {
                label: V.intl.string(V.t.s0KCgF),
                description: V.intl.string(V.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, T.jsx)(iL, { children: V.intl.string(V.t.a18Sug) }),
                    (0, T.jsx)(n5.A, {
                        "aria-label": V.intl.string(V.t.vd0D81),
                        disabled: a,
                        marks: ib,
                        snapToMarks: !0,
                        minValue: ib[0],
                        maxValue: ib[ib.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, T.jsx)(iL, { children: V.intl.string(V.t.xoldVn) }),
                    (0, T.jsx)(n5.A, {
                        "aria-label": V.intl.string(V.t.sPO3ij),
                        disabled: a,
                        marks: iv,
                        snapToMarks: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        defaultValue: s,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, T.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.k.CHAT_INPUT,
                        title: V.intl.string(V.t.elTtyz),
                        description: V.intl.string(V.t.HtKfMi),
                    },
                    {
                        location: iI.k.REACTION,
                        title: V.intl.string(V.t.Ik4VIa),
                        description: V.intl.string(V.t.y4rqK0),
                    },
                    {
                        location: iI.k.MEMBER_USER,
                        title: V.intl.string(V.t.ZXBlAn),
                        description: V.intl.string(V.t["m9RD+c"]),
                    },
                    {
                        location: iI.k.CALL_TILE,
                        title: V.intl.string(V.t.V66giQ),
                        description: V.intl.string(V.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iP(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, T.jsxs)(n3.n, {
        label: V.intl.string(V.t.Xz0ole),
        children: [
            (0, T.jsx)(t4.d, {
                label: V.intl.string(V.t.o3iV7B),
                description: V.intl.string(V.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, T.jsx)(t4.d, {
                label: V.intl.string(V.t["Ax+IoW"]),
                description: V.intl.string(V.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, T.jsx)(iL, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, T.jsx)(n5.A, {
                        "aria-label": V.intl.string(V.t.L0oQuh),
                        disabled: r,
                        marks: iC,
                        snapToMarks: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        defaultValue: s,
                        onChangeEnd: (e) => l({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iG(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, T.jsxs)(n3.n, {
        label: V.intl.string(V.t.wVS5Sd),
        children: [
            (0, T.jsx)(t4.d, {
                label: V.intl.string(V.t.N004zO),
                description: r ? V.intl.string(V.t.GckHGw) : V.intl.string(V.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, T.jsx)(iL, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, T.jsx)(n5.A, {
                        "aria-label": V.intl.string(V.t.UxnnC4),
                        disabled: a,
                        marks: iy,
                        snapToMarks: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, is._)(il.sn.MORE),
                                l(t, 1));
                        },
                        formatValue: (e) => (e === iy[iy.length - 1] ? V.intl.string(V.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, T.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.uD.CHAT_INPUT,
                        title: V.intl.string(V.t.vUcvPP),
                        description: V.intl.string(V.t.y00OrF),
                    },
                    {
                        location: iI.uD.VOICE_USER,
                        title: V.intl.string(V.t.TcRO54),
                        description: V.intl.string(V.t.YJCxVY),
                    },
                    {
                        location: iI.uD.MENTION,
                        title: V.intl.string(V.t.oW4shO),
                        description: V.intl.string(V.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iM(e) {
    let { updateSettings: t } = e;
    return (0, T.jsx)(n3.n, {
        label: V.intl.string(V.t.EuXv2q),
        children: (0, T.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, T.jsx)("div", { children: V.intl.string(V.t["1SLnki"]) }),
                (0, T.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: i_.hw,
                    children: (0, T.jsx)(j.$, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tX.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iU(e) {
    let { onChangePage: t } = e;
    return (0, T.jsxs)(n4.D, {
        onClick: function () {
            return t(1);
        },
        className: i_.Tq,
        children: [
            (0, T.jsx)("div", {
                className: i_.w1,
                children: (0, T.jsx)(n6.TrophyIcon, { size: "md", color: n1.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, T.jsxs)("div", {
                className: i_.qL,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t["6jI0hd"]),
                    }),
                    (0, T.jsx)($.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: V.intl.string(V.t.GuUItX),
                    }),
                ],
            }),
            (0, T.jsx)(n8._, { size: "custom", color: "currentColor", width: 16, className: i_.nT }),
        ],
    });
}
function iV() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function ik(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, I.cf)([n0.A], () => n0.A.getState()),
        [s, l] = f.useState({ x: 0, y: 0 }),
        r = (0, iT.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, ie.Ak)("poggermode_enabled"),
                (0, ii.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ir.O9)(e),
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
        1 === t && E && (0, ii.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        f.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, T.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, T.jsx)(iR, { settings: i, updateSettings: a }),
                (0, T.jsx)(iU, { onChangePage: t }),
                (0, T.jsx)(iP, { settings: i, updateSettings: a }),
                (0, T.jsx)(iG, { settings: i, updateSettings: a }),
                (0, T.jsx)(iD, { settings: i, updateSettings: a }),
                (0, T.jsx)(iM, { updateSettings: a }),
            ],
        })
    );
}
function iw(e) {
    return 0 === e ? n9.f.LEFT : n9.f.RIGHT;
}
let iF = (0, h.E2)(x.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = f.useState(0),
                [n, i] = f.useState(iw(e)),
                [s, l] = f.useState(!1),
                r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
                a = s && !r;
            return (
                f.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iw(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                f.useEffect(() => {
                    (0, it._)(ij[e]);
                }, [e]),
                f.useEffect(() => {
                    Math.random() > 0.99 && (0, is._)(il.sn.VISITOR_100);
                }, []),
                (0, T.jsxs)(T.Fragment, {
                    children: [
                        (0, T.jsx)(n9.A, {
                            className: i_.l3,
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
                                        return (0, T.jsx)(ik, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, T.jsx)(ip, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, T.jsx)("div", {
                            className: a ? i_.Sr : i_.IP,
                            children: (0, T.jsx)(n7.a, {
                                className: i_.gT,
                                importData: iV,
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
            V.intl.string(V.t.AtCukI),
            V.intl.string(V.t.mqxwJO),
            V.intl.string(V.t.wVS5Sd),
            V.intl.string(V.t.Xz0ole),
            V.intl.string(V.t["Ax+IoW"]),
            V.intl.string(V.t["6jI0hd"]),
            V.intl.string(V.t.s0KCgF),
        ],
    }),
    iB = (0, h.zZ)(x.X.POGGERMODE_CATEGORY, { buildLayout: () => [iF] });
var iz = n(212043);
let iY = (0, h.t_)(x.X.POGGERMODE_PANEL, { useTitle: () => V.intl.string(V.t.AtCukI), buildLayout: () => [iB] }),
    iX = (0, h.i4)(x.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AtCukI),
        icon: () => (0, T.jsx)("img", { alt: "", src: n(724405), className: iz.$ }),
        usePredicate: () => (0, I.bG)([n0.A], () => n0.A.settingsVisible),
        buildLayout: () => [iY],
    });
var iH = n(307301),
    iW = n(410767),
    iK = n(683071),
    iZ = n(97260),
    iq = n(710195),
    iQ = n(57757),
    i$ = n(188321),
    iJ = n(695366),
    i0 = n(812729),
    i1 = n.n(i0),
    i2 = n(587895),
    i3 = n(429913),
    i5 = n(616356),
    i4 = n(952818);
function i6(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i8() {
    let e = (0, I.bG)([i5.A], () => i5.A.getStreamerActiveStreamMetadata()),
        t = (0, I.bG)(
            [i4.Ay],
            () => {
                let e = i4.Ay.getVisibleGame();
                return null != e ? i4.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i1(),
        ),
        [n] = (0, i3.A)([i6(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i7 = n(769015),
    i9 = n(360906),
    se = n(935671),
    st = n(435075);
function sn(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, T.jsx)("div", {
              className: st.zc,
              children: (0, T.jsx)(iJ.E, { size: "sm", color: n1.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, T.jsxs)("div", {
              className: st.nt,
              children: [
                  (0, T.jsx)(i7.A, { game: n, pid: t.pid, size: i7.M.MEDIUM }),
                  (0, T.jsx)("div", {
                      className: st.Am,
                      children: (0, T.jsx)(iJ.E, { size: "sm", color: n1.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function si(e) {
    let t = (0, I.bG)([i9.Ay], () => i9.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i8();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, se.NP)(),
        l = s && null != n && t === _.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function ss(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = si(n);
    return i
        ? (0, T.jsxs)("div", {
              className: ic()(st.kL, t),
              children: [
                  (0, T.jsx)(sn, { game: s, application: l }),
                  (0, T.jsxs)("div", {
                      className: st.FS,
                      children: [
                          (0, T.jsx)($.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != s
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: V.intl.format(V.t["/y6htt"], {
                                  helpCenterLink: ey.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      text: V.intl.string(V.t["1iI46O"]),
                      onClick: function () {
                          (0, se.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var sl = n(404778),
    sr = n(579370),
    sa = n(532624),
    so = n(691885),
    su = n(452027),
    sd = n(408278),
    sc = n(241326),
    sg = n(866665),
    sm = n(140735),
    sA = n(489718),
    sE = n(827343),
    sh = n(635242),
    sx = n(350535),
    sS = n(189213),
    sp = n(192308),
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
    return (0, T.jsx)("div", {
        className: sL.i1,
        children: (0, T.jsx)($.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sL.GN,
            children: V.intl.string(V.t.zHjCd1),
        }),
    });
}
function sM(e) {
    let { keybind: t, className: n } = e,
        i = f.useRef(t);
    f.useEffect(() => {
        i.current = t;
    });
    let [s, l] = f.useState(t.params?.channelId ?? void 0),
        r = f.useCallback(() => {
            (0, sp.openModalLazy)(
                async () => (e) =>
                    (0, T.jsx)(sU, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iZ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, T.jsx)("div", {
        className: ic()(sL.a8, n),
        children: (0, T.jsx)(su.D, {
            label: V.intl.string(V.t.q4JpM8),
            children: (0, T.jsxs)(sN.A, {
                align: sN.A.Align.STRETCH,
                children: [
                    (0, T.jsx)("div", { className: sL.$X, children: (0, T.jsx)(sV, { channelId: s }) }),
                    (0, T.jsx)(sN.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, T.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.Dm8O4e), onClick: r }),
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
        r = f.useId(),
        a = f.useRef(null),
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
                [l, r] = f.useState(""),
                [a, o] = f.useState(s_),
                u = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(s_) : o(e);
                }, []);
            f.useEffect(
                () =>
                    sf.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = f.useState(() => new sI.A(u, n, void 0, i));
            return (
                f.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: f.useCallback(
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
            (n = (0, I.yK)(
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
            let [t, n] = f.useState(0),
                i = f.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                f.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    f.useEffect(() => {
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
                      innerAriaLabel: V.intl.string(V.t["+N3fW7"]),
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
                          return (0, T.jsx)(
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
                                      null != r ? (0, T.jsx)("div", { className: sL.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, T.jsx)(sG, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, T.jsx)(sS.a, {
        transitionState: i,
        onClose: s,
        title: V.intl.string(V.t.Dm8O4e),
        subtitle: V.intl.string(V.t.q4JpM8),
        actions: void 0,
        input: (0, T.jsx)(sT.k, {
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
            placeholder: V.intl.string(V.t.tG0r7g),
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
        } = (0, I.cf)([sy.A, sv.A], () => {
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
        ? (0, T.jsx)($.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sL.GN,
              children: V.intl.string(V.t["/fYIK7"]),
          })
        : (0, T.jsx)(sC.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sR,
              onFocus: sR,
              onMouseEnter: sR,
              focused: !1,
              children: null != s ? (0, T.jsx)("div", { className: sL.J5, children: s.name }) : null,
          });
}
var sk = n(650583),
    sw = n(731854),
    sF = n(94451);
function sB(e) {
    let { keybind: t } = e,
        n = (0, I.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([sa.Ay], () => sa.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? sa.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, sr.Rg)(i)
                      ? (0, T.jsx)("div", {
                            className: sF.$e,
                            children: (0, T.jsx)(iK.w, {
                                type: "info",
                                message: V.intl.format(V.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, T.jsx)("div", {
                        className: sF.$e,
                        children: (0, T.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.string(V.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, T.jsx)("div", {
                  className: sF.$e,
                  children: (0, T.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" }),
              })
        : null;
}
function sz(e) {
    let { keybind: t } = e,
        n = sx.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, T.jsx)("div", {
              className: sF.$e,
              children: (0, T.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t["7lQlw3"]), role: "status" }),
          })
        : sk.Yy.has(n)
          ? (0, T.jsx)("div", {
                className: sF.$e,
                children: (0, T.jsx)(iK.w, {
                    type: "warning",
                    message: V.intl.format(V.t.MOIaNd, {
                        keyboardNavArticle: ey.A.getArticleURL(_.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function sY(e) {
    let { keybind: t } = e;
    return t.action === _.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, T.jsx)(sM, { keybind: t, className: sF._M }) : null;
}
let sX = f.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = f.useCallback((e) => iZ.A.setKeybind({ ...t, action: e }), [t]),
        l = f.useCallback(
            (e) => {
                if (
                    ((0, sr.uL)(t.id, t.shortcut, e, sa.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === _.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? sw.x.DEFAULT;
                    sE.default.setMode(i9.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iZ.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = f.useCallback(() => iZ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = f.useCallback(() => iZ.A.deleteKeybind(t.id), [t.id]),
        o = f.useId(),
        u = f.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, T.jsxs)("div", {
        className: sF.f_,
        children: [
            (0, T.jsx)(sz, { keybind: t }),
            (0, T.jsx)(sB, { keybind: t }),
            (0, T.jsx)("div", {
                className: sF.XI,
                children: (0, T.jsx)(so.l, {
                    selectionMode: "single",
                    label: V.intl.string(V.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, T.jsx)("div", {
                className: sF.LE,
                children: (0, T.jsx)(su.D, {
                    label: V.intl.string(V.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, T.jsx)(sh.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, T.jsxs)("div", {
                className: sF.ne,
                children: [
                    !t.managed &&
                        (0, T.jsx)(sd.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sc.TrashIcon,
                            "aria-label": V.intl.string(V.t.qEHmmB),
                        }),
                    (0, T.jsx)(sg.m, {
                        text: V.intl.string(t.enabled ? V.t.pNYGbx : V.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsx)(sm.A, {
                                    id: o,
                                    children: V.intl.format(t.enabled ? V.t["myr/Y0"] : V.t.lYhtPO, { actionName: u }),
                                }),
                                (0, T.jsx)(sA.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, T.jsx)($.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sF.h_,
                children: n[t.action],
            }),
            (0, T.jsx)(sY, { keybind: t }),
        ],
    });
});
var sH = n(938812),
    sW = n(734066),
    sK = n(880144),
    sZ = n(994778),
    sq = n(950869),
    sQ = n(603933);
function s$() {
    let e = (0, I.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
        t = f.useMemo(() => e && (0, sr.u)(), [e]);
    return e
        ? (0, T.jsx)(iK.w, {
              type: "info",
              message: V.intl.string(V.t.AcH7R7),
              role: "none",
              action: t ? { text: V.intl.string(V.t.ZPHaPE), onClick: sr.qM } : void 0,
          })
        : null;
}
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
            } = ((e = (0, I.bG)([sa.Ay], () => sa.Ay.getState())),
            (t = (0, I.bG)([i9.Ay], () => (0, sK.A)(i9.Ay))),
            (n = (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.VIDEO))),
            (i = (0, I.bG)([sq.A], () => sq.A.isSupported)),
            (s = (0, sW.sw)()),
            (l = (0, sW.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: s } = e;
                    return K()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    _.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    _.hCu.SAVE_CLIP,
                                    _.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === _.hCu.SAVE_CLIP || e.action === _.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === _.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === _.hCu.SOUNDBOARD || e.action === _.hCu.SOUNDBOARD_HOLD))
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
                            { id: "unassigned", value: _.hCu.UNASSIGNED },
                            { id: "push-to-talk", value: _.hCu.PUSH_TO_TALK },
                            { id: "push-to-talk-priority", value: _.hCu.PUSH_TO_TALK_PRIORITY },
                            { id: "push-to-mute", value: _.hCu.PUSH_TO_MUTE },
                            { id: "vad-priority", value: _.hCu.VAD_PRIORITY },
                            { id: "toggle-mute", value: _.hCu.TOGGLE_MUTE },
                            { id: "toggle-deafen", value: _.hCu.TOGGLE_DEAFEN },
                            { id: "toggle-voice-mode", value: _.hCu.TOGGLE_VOICE_MODE },
                            { id: "toggle-streamer-mode", value: _.hCu.TOGGLE_STREAMER_MODE },
                            { id: "toggle-voice-channel-chat", value: _.hCu.TOGGLE_VOICE_CHANNEL_CHAT },
                        ];
                    return (
                        i && a.push({ id: "toggle-camera", value: _.hCu.TOGGLE_CAMERA }),
                        t &&
                            (a.push({ id: "toggle-overlay-input-lock", value: _.hCu.TOGGLE_OVERLAY_INPUT_LOCK }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: _.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            })),
                        n &&
                            ((0, e8.isWindows)() || i9.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: _.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e8.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: _.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: _.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: _.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: _.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            s &&
                                a.push(
                                    { id: "soundboard", value: _.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: _.hCu.SOUNDBOARD_HOLD },
                                ),
                            l &&
                                (a.push({ id: "save-clip", value: _.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: _.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, sZ.B)(n) ?? n };
                        })
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
                            [_.hCu.UNASSIGNED]: V.intl.string(V.t.rvlNLv),
                            [_.hCu.PUSH_TO_MUTE]: V.intl.string(V.t.xtESim),
                            [_.hCu.PUSH_TO_TALK]: V.intl.string(V.t.wTcBSy),
                            [_.hCu.PUSH_TO_TALK_PRIORITY]: V.intl.string(V.t.FhHvWH),
                            [_.hCu.TOGGLE_MUTE]: V.intl.string(V.t.X2fbUm),
                            [_.hCu.TOGGLE_DEAFEN]: V.intl.string(V.t.MjREZV),
                            [_.hCu.TOGGLE_VOICE_MODE]: V.intl.string(V.t.snm5YW),
                            [_.hCu.TOGGLE_STREAMER_MODE]: V.intl.string(V.t.YszLLx),
                            [_.hCu.VAD_PRIORITY]: V.intl.string(V.t.rSe8IZ),
                            [_.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: V.intl.string(V.t.desfB4),
                        };
                    return (
                        i && (r[_.hCu.TOGGLE_CAMERA] = V.intl.string(V.t.v1JBtL)),
                        t && (r[_.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = V.intl.string(V.t.IoP5vc)),
                        n && (0, e8.isWindows)() && (r[_.hCu.TOGGLE_GO_LIVE_STREAMING] = V.intl.string(V.t.s4C238)),
                        (0, e8.isDesktop)() &&
                            ((r[_.hCu.NAVIGATE_BACK] = V.intl.string(V.t.nKDlEt)),
                            (r[_.hCu.NAVIGATE_FORWARD] = V.intl.string(V.t.DK0FFk)),
                            (r[_.hCu.SOUNDBOARD] = (0, e8.isWindows)()
                                ? V.intl.string(V.t["5wJefL"])
                                : V.intl.string(V.t.gzjsSP)),
                            (r[_.hCu.SOUNDBOARD_HOLD] = (0, e8.isWindows)()
                                ? V.intl.string(V.t.RRkZc9)
                                : V.intl.string(V.t.laNlTl)),
                            s &&
                                ((r[_.hCu.SAVE_CLIP] = V.intl.string(V.t.z3Wbam)),
                                l && (r[_.hCu.SAVE_SCREENSHOT] = V.intl.string(V.t.m0zd57)))),
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
            ? (0, T.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, T.jsx)(s$, {}),
                      (0, T.jsx)($.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.vyYgWp),
                      }),
                  ],
              })
            : (0, T.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, T.jsx)(s$, {}),
                      (0, T.jsx)("div", {
                          className: sQ.A,
                          children: a.map((e, t) =>
                              (0, T.jsxs)(
                                  f.Fragment,
                                  {
                                      children: [
                                          (0, T.jsx)(sX, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, T.jsx)(sl.c, { className: sQ.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    s0 = (0, h.E2)(x.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["069nVT"])],
        Component: function () {
            return nh.Av
                ? (0, T.jsx)(sJ, {})
                : (0, T.jsx)(iK.w, {
                      type: "info",
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: _.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var s1 = n(475358),
    s2 = n(28647),
    s3 = n(793650);
function s5(e) {
    let { children: t } = e;
    return t([sH.Q_.MESSAGE, sH.Q_.NAVIGATION, sH.Q_.DND, sH.Q_.CHAT, sH.Q_.VOICE_AND_VIDEO, sH.Q_.MISCELLANEOUS]);
}
function s4(e) {
    let { showHeader: t = !0 } = e,
        n = K()((0, sH.Bx)())
            .filter((e) => e.description !== V.intl.string(V.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, T.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, T.jsx)(n3.n, {
                label: t ? V.intl.string(V.t.Lz5KHI) : void 0,
                children: (0, T.jsx)("div", {
                    className: s3.jh,
                    children: (0, T.jsxs)("div", {
                        className: s3.yZ,
                        children: [
                            (0, T.jsx)($.E, { variant: "text-md/normal", children: V.intl.string(V.t.sMWLBj) }),
                            (0, T.jsx)("div", {
                                className: s3.DM,
                                children: (0, T.jsx)(s1.e, { shortcut: s2.z.binds["0"], className: s3.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, T.jsx)(s5, {
                children: (e) =>
                    (0, T.jsx)(T.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sH.Gm)(e),
                                s = (0, sH.zF)(e),
                                l = n[e];
                            return (0, T.jsx)(
                                n3.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, T.jsx)("div", {
                                        className: s3.jh,
                                        children: l.map((e, t) =>
                                            (0, T.jsxs)(
                                                f.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, T.jsx)(sl.c, {}),
                                                        (0, T.jsxs)("div", {
                                                            className: s3.yZ,
                                                            children: [
                                                                (0, T.jsx)($.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, T.jsx)("div", {
                                                                    className: s3.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, T.jsx)(
                                                                            s1.e,
                                                                            { shortcut: e, className: s3.LE },
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
let s6 = (0, h.E2)(x.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.Lz5KHI)],
        Component: () => (0, T.jsx)(s4, { showHeader: !1 }),
    }),
    s8 = (0, h.zD)(x.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => V.intl.string(eR.default.rea2Ar),
        useSubtitle: () => V.intl.string(eR.default.DwBO0x),
        useValue: () => (0, I.bG)([i$.A], () => i$.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(_.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i$.A.runningGameId }),
                tl.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var s7 = n(19575),
    s9 = n(546385);
let le = (0, h.E2)(x.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nh.Av && !(0, nh.cX)(),
    useSearchTerms: () => [V.intl.string(V.t["/HIxyY"]), V.intl.string(V.t.B0hqpb)],
    Component: function () {
        let [e] = f.useState(() => s7.Ay.getEnableHardwareAcceleration()),
            t = V.intl.string(V.t["/HIxyY"]),
            n = V.intl.string(V.t.B0hqpb);
        return (0, T.jsxs)(q.B, {
            children: [
                (0, T.jsx)(t4.d, { label: t, description: n, checked: e, onChange: lt }),
                !e && (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.j7S6IX) }),
            ],
        });
    },
});
function lt(e) {
    let t = e ? V.intl.format(V.t.LYXRxL, {}) : V.intl.format(V.t.uDP3Kz, {});
    (0, n2.A)({
        title: V.intl.string(V.t.aqpAvn),
        subtitle: t,
        confirmText: V.intl.string(V.t.vT7ckk),
        onConfirm: () => {
            s7.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let ln = (0, eN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function li() {
    let e = await s7.Ay.getOpenOnStart(),
        t = await s7.Ay.getSetting("START_MINIMIZED", !1),
        n = await s7.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    ln.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let ls = (0, h.zD)(x.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => V.intl.string(V.t["3BeZti"]),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => ln.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (ln.setState({ openOnStartup: e }), s7.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            s7.Ay.getOpenOnStart().then((e) => ln.setState({ openOnStartup: e }));
        },
    }),
    ll = (0, h.zD)(x.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => V.intl.string(V.t.dJ5MUh),
        useSubtitle: () => V.intl.string(V.t.nQavHr),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => ln.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (ln.setState({ minimizeToTray: e }), s7.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            s7.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => ln.setState({ minimizeToTray: e }));
        },
    }),
    lr = (0, h.zD)(x.X.OS_START_MINIMIZED, {
        useTitle: () => V.intl.string(V.t.GfBL83),
        useSubtitle: () => V.intl.string(V.t.XGyhhc),
        usePredicate: () => (0, nh.uF)(),
        useValue: () => ln.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (ln.setState({ startMinimized: e }), s7.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !ln.useState((e) => e.openOnStartup),
        initialize: () => {
            s7.Ay.getSetting("START_MINIMIZED", !1).then((e) => ln.setState({ startMinimized: e }));
        },
    });
var la = n(61628);
let lo = new Set(["failure", "unknown"]),
    lu = (0, h.E2)(x.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [V.intl.string(V.t.roHq80)],
        Component: function () {
            let [e, t] = f.useState(!1),
                [n, i] = f.useState(() => (0, se.TC)()),
                s = (0, I.bG)([i4.Ay], () => i4.Ay.getSystemServiceStatus("input-service")),
                l = f.useCallback(async () => {
                    (t(!0),
                        n ? await (0, se.z8)("windows-settings") : await (0, se.sL)("windows-settings"),
                        t(!1),
                        i((0, se.TC)()));
                }, [n]);
            return (0, T.jsxs)("div", {
                className: la.q,
                children: [
                    (0, T.jsxs)("div", {
                        className: la.L,
                        children: [
                            (0, T.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, T.jsxs)(T.Fragment, {
                                            children: [
                                                (0, T.jsx)($.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, T.jsx)($.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : lo.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return V.intl.string(V.t["KW+nqT"]);
                                                            case "disabled":
                                                                return V.intl.string(V.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return V.intl.string(V.t.Xvs9IM);
                                                            case "initializing":
                                                                return V.intl.string(V.t.h4qz8W);
                                                            case "connecting":
                                                                return V.intl.string(V.t.fSu9XF);
                                                            case "handshaking":
                                                                return V.intl.string(V.t["00aYLJ"]);
                                                            case "running":
                                                                return V.intl.string(V.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return V.intl.string(V.t["0FONwi"]);
                                                            case "failure":
                                                                return V.intl.string(V.t.Ic0nkd);
                                                            default:
                                                                (0, io.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: V.intl.format(V.t["8CAL+D"], {
                                    helpCenterLink: ey.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(j.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? V.intl.string(V.t.pAwbdL) : V.intl.string(V.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: se.XQ,
    });
var ld = n(687813),
    lc = n(562708),
    lg = n(858899),
    lm = n(384077);
async function lA() {
    try {
        await lE();
    } catch {
        (0, lg.P0)({ text: V.intl.string(V.t["8ihs9i"]), variant: "critical" });
    }
}
async function lE() {
    var e;
    let t = np.A.tracing;
    if (null == t) return;
    (0, lg.P0)({ text: V.intl.string(V.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            np.A.processUtils.getSystemInfo(),
            np.A.processUtils.getSystemMetrics((0, lm.uD)()),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, lc.getSuperProperties)(),
            native_build_number: np.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: np.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: np.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, ld._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, ld._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, ld.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (np.A.fileManager.showItemInFolder(u), (0, lg.P0)({ text: V.intl.string(V.t.gpCRFS), variant: "success" }));
}
let lh = (0, h.Tf)(x.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => V.intl.string(V.t.o6Qr6n),
    useSubtitle: () => V.intl.string(V.t.OuGtH8),
    useLabel: () => V.intl.string(V.t.bm1WjO),
    usePredicate: () => nh.Av && np.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n2.A)({
            title: V.intl.string(V.t.o6Qr6n),
            subtitle: V.intl.string(V.t.JEHHJ1),
            confirmText: V.intl.string(V.t.bm1WjO),
            onConfirm: () => {
                ((0, tX.default)(), lA());
            },
        });
    },
});
function lx() {
    tl.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lS = n(287809);
let lp = (0, h.Tf)(x.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lx();
    },
});
var lT = n(114129),
    lf = n(442325),
    lI = n(858760);
let l_ = (0, h.zD)(x.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        usePredicate: () => lI.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nh.xl)(),
        useValue: () => (0, I.bG)([lf.A], () => lf.A.isUserOptedIn()),
        setValue: lT.lj,
    }),
    lN = (0, h.zZ)(x.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [lp, lh, l_],
    }),
    lC = (0, h.zZ)(x.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [ls, lr, ll, le],
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        initialize: () => {
            li();
        },
    }),
    ly = (0, h.zZ)(x.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["069nVT"]),
        useSubtitle: () => V.intl.string(V.t.T4LZVL),
        buildLayout: () => [s0],
        initialize: () => (iZ.A.enableAll(!1), () => iZ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nh.Av
                ? {
                      type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, T.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, T.jsx)(iK.w, {
                                      type: "info",
                                      message: V.intl.string(V.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, T.jsx)(ss, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nh.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
                              text: V.intl.string(V.t.zk6Xbs),
                              variant: "secondary",
                              icon: iH.j,
                              onClick: () => iZ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lb = (0, h.zZ)(x.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [s6],
    }),
    lv = (0, h.zZ)(x.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        buildLayout: () => [lu],
    }),
    lj = (0, h.zZ)(x.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eR.default.QG0axY),
        usePredicate: () =>
            (0, I.bG)(
                [i$.A, iq.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i$.A.hasDetectedGame &&
                    (0, iQ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s8],
    }),
    lO = (0, h.t_)(x.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [lC, ly, lb, lv, lj, lN],
    }),
    lL = (0, h.i4)(x.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iW.F,
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
let lw = (0, h.E2)(x.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: lV.A,
        Component: function () {
            let e = (0, lP.p)(),
                t = f.useRef(!1),
                n = (0, I.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                [i, s] = f.useState((0, lG.i)(lS.default.getCurrentUser())),
                l = f.useRef(i);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, lM._C)(l.current);
                    },
                    [],
                ),
                (0, T.jsx)(lk.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lU.gB)(n, { location: e.location }).catch(_.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lF = (0, h.zD)(x.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => V.intl.string(V.t["3Ppr1h"]),
        useSubtitle: () => V.intl.string(V.t.WNbX4O),
        useValue: U.bm.useSetting,
        setValue: (e) => {
            (U.bm.updateSetting(e), td.default.track(_.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lB = n(625841),
    lz = n(74848),
    lY = n(204050);
let lX = (0, eN.D)(() => ({ previewEnabled: !1 })),
    lH = (0, h.E2)(x.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, I.bG)([i9.Ay], () => i9.Ay.isVideoAvailable()),
                { id: t } = (0, lz.x5)(sw.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eY.Ay)();
            return (0, T.jsx)(lB.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: sw.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lY.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lX.setState({ previewEnabled: !1 }),
                                  window.open((0, lY.i)(t)),
                                  td.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lW = n(745317),
    lK = n(9219);
let lZ = (0, h.E2)(x.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = i9.Ay.getCameraComponent(),
                t = (0, I.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                n = lX.useField("previewEnabled"),
                i = (0, I.bG)([i9.Ay], () => i9.Ay.isVideoAvailable());
            return ((0, e_.l0)(() => {
                lX.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, T.jsx)("div", {
                      className: lK.T9,
                      children: (0, T.jsxs)("div", {
                          className: lK.Xi,
                          children: [
                              (0, T.jsxs)("div", {
                                  className: lK.UI,
                                  children: [
                                      (0, T.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, T.jsx)(lW.kE, {}),
                                  ],
                              }),
                              (0, T.jsx)(lW.eK, {}),
                          ],
                      }),
                  })
                : (0, T.jsx)("div", {
                      className: lK.T9,
                      children: (0, T.jsx)(sg.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, T.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => lX.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lq = (0, h.zZ)(x.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.VIDEO)),
        buildLayout: () => [lZ, lF, lH, lw],
    }),
    lQ = (0, h.zD)(x.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nh.j9)();
        },
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sE.default.setOpenH264Enabled(e),
                (0, n2.A)({
                    title: V.intl.string(V.t["9jf31O"]),
                    subtitle: V.intl.string(V.t["J2wg+X"]),
                    confirmText: V.intl.string(V.t.BddRzS),
                    onConfirm: () => np.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    l$ = (0, h.zD)(x.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAecDump());
        },
        setValue: sE.default.setAecDump,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAecDumpSupported());
        },
    });
var lJ = n(139033),
    l0 = n(862482),
    l1 = n(640238),
    l2 = n(825484),
    l3 = n(108088),
    l5 = n(487329),
    l4 = n(353835);
let l6 = (0, eN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l8() {
    let e = await np.A.fileManager.getLogPath();
    np.A.fileManager.showItemInFolder(e);
}
function l7(e) {
    (0, n2.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => sE.default.setDebugLogging(e),
    });
}
async function l9(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i9.Ay.getMediaEngine().writeAudioDebugState(),
            await l4.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l3.a)(_.Umv.RTC),
            (e = V.intl.string(V.t["fKBB8+"])),
            (t = V.intl.string(V.t.BvyxE7)),
            (0, lJ.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = V.intl.string(V.t.QZg0J7)),
            (t = i ?? V.intl.string(V.t.VzHcSm)),
            (n = (0, l5.B1)(l5.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
            (0, sp.openModal)((n) =>
                (0, T.jsx)(l1.a, {
                    header: e,
                    confirmButtonColor: l0.$n.Colors.BRAND,
                    confirmText: V.intl.string(V.t.BddRzS),
                    ...n,
                    children: (0, T.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, T.jsx)($.E, { variant: "text-md/normal", children: t }),
                            (0, T.jsx)($.E, {
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
let rt = (0, h.E2)(x.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.DEBUG_LOGGING));
        return nh.Av && e && null != np.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.getDebugLogging()),
            t = l6.useField("isUploading"),
            n = l6.useField("isDisabled"),
            i = f.useId();
        return (0, T.jsxs)("fieldset", {
            children: [
                (0, T.jsx)(sm.A, { tag: "legend", id: i, children: V.intl.string(V.t["FjN+et"]) }),
                (0, T.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, T.jsx)(t4.d, {
                            label: V.intl.string(V.t["726JHL"]),
                            description: V.intl.string(V.t["/7ak9Q"]),
                            checked: e,
                            onChange: l7,
                        }),
                        (0, T.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, T.jsxs)(l2.e, {
                                children: [
                                    (0, T.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: re,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, T.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.nuPtYi),
                                        onClick: l8,
                                        "aria-label": V.intl.string(V.t["L/hFOe"]),
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
    ri = n(58663),
    rs = n(412780);
function rl() {
    return (0, I.bG)([lS.default, i9.Ay], () => {
        let e = lS.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s7.Ay.releaseChannel || "development" === s7.Ay.releaseChannel,
            i = i9.Ay.supports(sw.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rr = (0, h.zD)(x.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, I.bG)([rs.Ay], () => rs.Ay.shouldRecordNextConnection());
        },
        setValue: ri.A,
        usePredicate: rl,
    }),
    ra = (0, h.Tf)(x.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: rn.YW,
        usePredicate: rl,
    });
var ro = n(926919),
    ru = n(111162),
    rd = n(855302);
let rc = (0, h.zD)(x.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => V.intl.string(V.t["0CEP6e"]),
        useSubtitle: () => V.intl.string(V.t["kBXuW+"]),
        useValue: function () {
            return (0, I.bG)([ru.default], () => ru.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ru.default.isStreamInfoOverlayEnabled;
            ((0, rd.A)("stream_info_overlay_enabled", e, t), (0, ro.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return U.Q_.useSetting();
        },
    }),
    rg = (0, h.bd)(x.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rc, l$, rr, ra, rt],
    });
function rm(e, t, n) {
    (0, n2.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rA = (0, h.Tf)(x.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rm(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), sE.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rE = (0, h.zZ)(x.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [lQ, rg, rA],
    });
var rh = n(736056),
    rx = n(360729),
    rS = n(446243),
    rp = n(558076),
    rT = n(270103);
let rf = (0, h.zD)(x.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(rT.default.qYzpsI),
        useSubtitle: () => V.intl.string(rT.default["+vMoL1"]),
        useValue: () => (0, I.bG)([rp.A], () => rp.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rS.Ft)(e),
    }),
    rI = (0, h.zZ)(x.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(rT.default.wRLmM0),
        usePredicate: function () {
            let e = (0, I.yK)([sv.A], () => sv.A.getGuildIds()),
                { loaded: t, override: n } = (0, I.cf)([rh.A], () => ({
                    loaded: rh.A.getLoadedGuildExperiment(rx.vJ),
                    override: rh.A.getExperimentOverrideDescriptor(rx.vJ),
                }));
            return (0, f.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rx.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rf],
    });
var r_ = n(347481),
    rN = n(852712),
    rC = n(179172),
    ry = n(868162);
let rb = (0, h.zD)(x.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => V.intl.string(V.t.gF8HJo),
        useSubtitle: () => V.intl.string(V.t.cfrfyZ),
        useValue: function () {
            return (0, I.bG)([ry.A], () => !0 !== ry.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rC.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rv = (0, h.zD)(x.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sE.default.setAutomaticGainControl(e, {
                page: _.liQ.USER_SETTINGS,
                section: _.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, I.bG)([i9.Ay, r_.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return r_.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAutomaticGainControlSupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rj = (0, h.sN)(x.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => V.intl.string(V.t.AlybXj),
        setValue: (e) =>
            sE.default.setAttenuation(
                e,
                i9.Ay.getAttenuateWhileSpeakingSelf(),
                i9.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i9.Ay.getAttenuation(),
    }),
    rO = (0, h.zD)(x.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, I.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sE.default.setAttenuation(i9.Ay.getAttenuation(), e, i9.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rL = (0, h.zD)(x.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, I.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sE.default.setAttenuation(i9.Ay.getAttenuation(), i9.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rR = (0, h.FW)(x.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.ATTENUATION)),
        buildLayout: () => [rj, rO, rL],
    }),
    rD = (0, h.zD)(x.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sE.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.showBypassSystemInputProcessing() && i9.Ay.isInputProfileCustom());
        },
    }),
    rP = (0, h.zD)(x.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, I.bG)([eS.Ay], () => !eS.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rd.A)("switch_channel_warning_enabled", e, !eS.Ay.disableVoiceChannelChangeAlert),
                nk.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rG = (0, h.zD)(x.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.BbESsg),
        useSubtitle: () => V.intl.string(V.t.LoOB1F),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => {
                let { vadUseKrisp: e } = i9.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i9.Ay.getMode();
            sE.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, I.bG)(
                [i9.Ay],
                () => i9.Ay.getMode() !== _.TBI.VOICE_ACTIVITY || !i9.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isAdvancedVoiceActivitySupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rM = (0, h.Hn)(x.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rm(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => sE.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, I.cf)([i9.Ay], () => ({
                legacyAudioSubsystemSupported: i9.Ay.supports(sw.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i9.Ay.supports(sw.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i9.Ay.supports(sw.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return f.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sw.rB.STANDARD, value: sw.rB.STANDARD, label: V.intl.string(V.t.dqb2JZ) }]),
                    e && i.push({ id: sw.rB.LEGACY, value: sw.rB.LEGACY, label: V.intl.string(V.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sw.rB.EXPERIMENTAL, value: sw.rB.EXPERIMENTAL, label: V.intl.string(V.t.liQmtr) }),
                    n && i.push({ id: sw.rB.AUTOMATIC, value: sw.rB.AUTOMATIC, label: V.intl.string(V.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rU = (0, h.zD)(x.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getQoS());
        },
        setValue: function (e) {
            sE.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.QOS));
        },
    }),
    rV = (0, h.zD)(x.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sE.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rk = (0, h.bd)(x.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tI(x.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rv, rG, rD, rb, rV, rP, rR, rM, rU],
    }),
    rw = (0, h.zD)(x.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sE.default.setEchoCancellation(e, { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, I.bG)([i9.Ay, r_.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return r_.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom());
        },
    });
var rF = n(205693),
    rB = n(451988),
    rz = n(475883),
    rY = n(303707);
let rX = (0, tK.Ld)();
function rH(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, T.jsx)("div", {
        role: "meter",
        className: ic()(rz.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, T.jsx)("div", { className: ic()(rz.Jx, rz.NU, { [rz.zY]: t && !r, [rz.r9]: r }) }),
    });
}
function rW(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, I.cf)([i9.Ay], () => ({
            threshold: i9.Ay.getModeOptions().threshold,
            autoThreshold: i9.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, I.bG)([i9.Ay], () => i9.Ay.getMode());
    return (0, T.jsx)("section", {
        className: ic()(rz.Mo, rz.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, T.jsx)(Q.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sE.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n1.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n1.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rX,
            disabled: l,
            children: (0, T.jsxs)("div", {
                className: ic()(rz.NU, rz.TL, rz.Jx, rY.bar),
                children: [
                    (0, T.jsx)("div", { className: ic()(rz.GS, rz.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, T.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rK = (0, h.E2)(x.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, I.cf)([i9.Ay], () => ({
                autoThreshold: i9.Ay.getModeOptions().autoThreshold,
                disabled: i9.Ay.getMode() !== sw.TB.VOICE_ACTIVITY,
            })),
            n = f.useCallback((e) => {
                let t = i9.Ay.getMode(),
                    { threshold: n } = i9.Ay.getModeOptions();
                sE.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, I.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = f.useState(-100),
                    [n, i] = f.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sw.ME.VOICE) === sw.ME.VOICE));
                }
                return (
                    f.useEffect(() => {
                        let e = new rB.Ep();
                        return (
                            e.start(1e3, () => {
                                (i9.Ay.getMediaEngine().on(rF.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i9.Ay.getMediaEngine().removeListener(rF.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, I.bG)([i9.Ay], () => i9.Ay.isEnabled()),
            a = f.useMemo(
                () =>
                    !r &&
                    (0, T.jsx)("div", {
                        className: rz.B4,
                        children: (0, T.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.format(V.t["O13I+O"], { onEnableClick: () => sE.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = f.useMemo(() => (e ? V.intl.string(V.t.JsbzjA) : V.intl.string(V.t.MLmyMY)), [e]),
            u = f.useId(),
            d = f.useId();
        return i
            ? (0, T.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, T.jsx)(sm.A, { tag: "legend", id: u, children: V.intl.string(V.t.GByLar) }),
                      (0, T.jsx)(sm.A, { id: d, children: o }),
                      (0, T.jsxs)(q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, T.jsx)(t4.d, {
                                  disabled: t,
                                  label: V.intl.string(V.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, T.jsx)(rH, {
                                        isSpeaking: l,
                                        className: rz.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, T.jsx)(rW, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, T.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, T.jsx)(su.D, {
                          label: V.intl.string(V.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, T.jsx)(rH, {
                                        isSpeaking: l,
                                        className: rz.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, T.jsx)(rW, {
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
var rZ = n(366010);
let rq = n(993830),
    rQ = n(413142),
    r$ = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO };
function rJ() {
    let e = (0, I.bG)([nF.A], () => (0, rZ.q)(nF.A.theme));
    return (0, T.jsx)("img", { src: e ? rq : rQ, width: 48, height: 32, alt: "" });
}
let r0 = (0, h.E2)(x.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom() && i9.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                (sE.default.setNoiseCancellation("KRISP" === e, r$),
                    sE.default.setNoiseSuppression("STANDARD" === e, r$));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, I.cf)([i9.Ay], () => ({
                noiseCancellation: i9.Ay.getNoiseCancellation(),
                noiseSuppression: i9.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i9.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i9.Ay.isNoiseCancellationSupported(),
            })),
            l = f.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: V.intl.string(V.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: V.intl.string(V.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: V.intl.string(V.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, i]),
            r = s
                ? V.intl.format(V.t["1q5aTp"], { helpArticle: ey.A.getArticleURL(_.MVz.NOISE_SUPPRESSION) })
                : V.intl.string(V.t.OWKjw5);
        return (0, T.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, T.jsx)(so.l, {
                    label: V.intl.string(V.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, T.jsx)(rJ, {}),
            ],
        });
    },
});
var r1 = n(934729),
    r2 = n(621380);
let r3 = !nh.Av;
function r5() {
    return (0, I.bG)([i9.Ay], () => i9.Ay.getMode() === sw.TB.PUSH_TO_TALK);
}
let r4 = (0, h.zD)(x.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nh.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, I.bG)([i9.Ay], () => i9.Ay.getMode());
        return f.useMemo(() => {
            if (!nh.Av && e === sw.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r1._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() !== r2.m.STUDIO);
    },
    useValue: function () {
        return (0, I.bG)([i9.Ay], () => i9.Ay.getMode() === sw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sw.TB.PUSH_TO_TALK : sw.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sw.TB.PUSH_TO_TALK &&
                r3 &&
                (0, sp.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, T.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r1._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            sE.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var r6 = n(484599);
function r8(e) {
    let { shortcut: t } = e,
        n = (0, I.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([sa.Ay], () => {
            let e = sa.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
            return null != e ? sa.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? sa.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, T.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.PTCrUP), role: "status" })
            : (0, T.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" })
        : null;
}
let r7 = (0, h.E2)(x.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: r5,
        Component: function () {
            let e = (0, I.bG)([i9.Ay], () => {
                    let { shortcut: e } = i9.Ay.getModeOptions();
                    return e;
                }),
                t = V.intl.format(V.t.HVvn5T, {
                    onClick: () => (0, na.openUserSettings)(x.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, T.jsxs)("div", {
                    className: r6.e,
                    children: [
                        (0, T.jsx)(sh.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = sa.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, sr.uL)(t.id, t.shortcut, e, sa.Ay.getWaylandPortalShortcutState(t.id)),
                                    sE.default.setMode(_.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, T.jsx)(r8, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    r9 = (0, h.sN)(x.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            sE.default.setMode(_.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: _.IjB,
        getInitialValue: function () {
            let { delay: e } = i9.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r5,
    });
var ae = n(833473),
    at = n(844981),
    an = n(943679);
function ai() {
    return (0, at.Ay)("VoiceSettings");
}
let as = (0, h.zD)(x.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(an.default.LGDPhA),
        useSubtitle: function () {
            let e = ai();
            if ((0, at.Xt)(e))
                return e === at.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(an.default.rOXfEw)
                    : V.intl.string(an.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, I.bG)([ae.A], () => ae.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sE.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ai() !== at.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, at.Xt)(ai());
        },
    }),
    al = (0, h.Qx)(x.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rN._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() ?? r2.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rN.d)({ location: "InputProfileCategory" });
            return [
                { value: r2.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r2.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r2.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ar = (0, h.zZ)(x.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, I.bG)([r_.A, i9.Ay], () => {
                let e = i9.Ay.getInputDeviceId();
                return (
                    (r_.A.hasEchoCancellation(e) || r_.A.hasNoiseSuppression(e) || r_.A.hasAutomaticGainControl(e)) &&
                    i9.Ay.isInputProfileCustom()
                );
            });
            return f.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: V.intl.string(V.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [al, rK, r0, rw, as, r4, r7, r9, rk],
    });
var aa = n(403581),
    ao = n(983851),
    au = n(687021),
    ad = n(128450),
    ac = n(796774),
    ag = n(209932),
    am = n(813564),
    aA = n(984813),
    aE = n(265872),
    ah = n(305866),
    ax = n(22231),
    aS = n(342073),
    ap = n(927578),
    aT = n(792348),
    af = n(674168),
    aI = n(340368),
    a_ = n(476254),
    aN = n(817232),
    aC = n(647451);
function ay(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = ap.Ay.canUseCustomCallSounds(s),
        r = f.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, T.jsx)(aE.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, T.jsx)(ah.l, {
                children: (0, T.jsx)(a_.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, T.jsx)(af.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, T.jsx)(aN.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, T.jsx)(ax.PencilIcon, { size: "md", color: "currentColor", className: aC.Wo }),
            }),
    });
}
function ab(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aT.A)(t, null),
        i = (0, am.wH)(),
        s = (0, aI._)("SoundPreviewButton") ? aS.L : ao.H,
        l =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, T.jsx)(aN.dT, {
        onClick: n,
        text: l,
        children: (0, T.jsx)(s, { size: "md", color: "currentColor", className: aC.wg }),
    });
}
function av(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l),
        o = (0, aI._)("SoundboardCustomCallSoundSettingsPreview") ? aS.L : ao.H;
    return (0, T.jsxs)("div", {
        className: aC.D6,
        children: [
            (0, T.jsxs)("div", {
                className: aC.kL,
                children: [
                    a && (0, T.jsx)(tG.A, { emojiId: l, emojiName: r, className: aC.Zg }),
                    (0, T.jsx)($.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aC.dj,
                        children:
                            null == t
                                ? V.intl.string(V.t.PoWNfe)
                                : n
                                  ? V.intl.format(V.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, T.jsx)($.E, {
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
                        ? (0, T.jsx)(ab, { sound: t })
                        : (0, T.jsx)(o, { size: "md", color: "currentColor", className: aC.Gk }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: aC.kL,
                children: [
                    (0, T.jsx)(ay, { onSelect: i }),
                    s &&
                        !n &&
                        (0, T.jsx)(aN.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, T.jsx)(sc.TrashIcon, {
                                size: "md",
                                color: n1.A.unsafe_rawColors.RED_400.css,
                                className: aC.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aj = n(617617);
n(980504);
var aO = n(806050);
function aL(e) {
    return (0, I.bG)([ag.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ag.A.getSound("0" === t ? "0" : t, n);
    });
}
function aR(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([aj.A], () => aj.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aL(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, T.jsxs)("div", {
        className: aO.Io,
        children: [
            r
                ? (0, T.jsx)(tG.A, { emojiId: s, emojiName: l, className: aO.nW })
                : (0, T.jsx)(ao.H, { size: "md", color: "currentColor", className: aO.nW }),
            (0, T.jsx)($.E, { className: aO.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aD = (0, h.E2)(x.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eY.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, aA.mz)(t),
            s = aL(i),
            l = i?.type === aA.PP.GLOBAL,
            r = (0, I.bG)([ag.A], () => ag.A.hasFetchedAllSounds()) && null != i && null == s;
        (f.useEffect(() => {
            r && (0, am.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, ac.E7)();
            }, []));
        let a = f.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, T.jsx)(aR, { guildId: e.value }) : null;
        }, []);
        return (0, T.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: ey.A.getArticleURL(_.MVz.SOUNDBOARD) }),
            children: [
                (0, T.jsx)(au.A, {
                    guildId: t,
                    className: aO.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, T.jsxs)(ad.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () => (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: aO.ax }),
                    }),
                    children: [
                        (0, T.jsx)(av, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, am.Dv)(t, e) : (0, am.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, T.jsx)("div", {
                                className: aO.lm,
                                children: (0, T.jsx)(iK.w, {
                                    type: "warning",
                                    message: V.intl.string(V.t.WkPsFR),
                                    role: "status",
                                }),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aP = n(824744);
let aG = (0, h.sN)(x.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: ey.A.getArticleURL(_.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aP.w)(e);
        (0, ac.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, am.wH)();
        return (0, aP.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aM = n(864145);
let aU = (0, h.sN)(x.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aP.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aP.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aM.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aV = (0, h.zZ)(x.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aG, aU, aD],
    });
var ak = n(803224),
    aw = n(552122);
let aF = (0, h.E2)(x.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aw.A.useHolidaySoundpack(),
        Component: () =>
            (0, T.jsx)($.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aB = (0, h.AK)(x.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: x.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    az = (0, h.gN)(x.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aB] });
var aY = n(264686);
let aX = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aH() {
    let e = aX.getField("currentPlayingSound");
    (e?.stop(), aX.setState({ currentPlayingSound: null }));
}
function aW(e) {
    let t = aX.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aX.setState({ currentPlayingSound: n });
}
function aK(e) {
    return (0, h.zD)(`${x.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aW(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, I.bG)([ak.A], () => ak.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = ak.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aY.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, I.bG)([ak.A], () => ak.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aZ = [
        { useTitle: () => V.intl.string(V.t.hK51Yg), sound: "deafen" },
        { useTitle: () => V.intl.string(V.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => V.intl.string(V.t.w4m945), sound: "mute" },
        { useTitle: () => V.intl.string(V.t.YqAjXy), sound: "unmute" },
        { useTitle: () => V.intl.string(V.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => V.intl.string(V.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => V.intl.string(V.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => V.intl.string(V.t.x98vQq),
            useSearchTerms: () => [V.intl.string(V.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => V.intl.string(V.t["1HjRqC"]),
            useSearchTerms: () => [V.intl.string(V.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => V.intl.string(V.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => V.intl.string(V.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => V.intl.string(V.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => V.intl.string(V.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => V.intl.string(V.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => V.intl.string(V.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => V.intl.string(V.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => V.intl.string(V.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => V.intl.string(V.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => V.intl.string(V.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => V.intl.string(V.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => V.intl.string(V.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => V.intl.string(V.t.CP3DC3), sound: "reconnect" },
    ],
    aq = (0, h.D1)(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tI(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aH();
            };
        },
        buildLayout: () => aZ.map((e) => aK(e)),
    }),
    aQ = (0, h.zZ)(x.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, I.bG)([ak.A], () => ak.A.getDisableAllSounds());
            return f.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.format(V.t.fRvixS, {
                            onClick: () => (0, na.openUserSettings)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aq, aF, az],
    }),
    a$ = (0, h.zD)(x.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.e3Zz3F),
        useSubtitle: () => V.intl.string(V.t.RztTjP),
        useValue: function () {
            return !U.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rd.A)("stream_previews_disabled", !e, U.uh.getSetting(), [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                U.uh.updateSetting(!e));
        },
    }),
    aJ = (0, h.zD)(x.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getVideoHook());
        },
        setValue: sE.default.setVideoHook,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supportsVideoHook());
        },
    }),
    a0 = (0, h.zD)(x.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getExperimentalSoundshare());
        },
        setValue: sE.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => {
                let e = i9.Ay.supportsExperimentalSoundshare(),
                    t = i9.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a1 = (0, h.zD)(x.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i9.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a2 = (0, h.sN)(x.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i9.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, I.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
            return i9.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a3 = (0, h.zD)(x.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t.lt8rRx),
        useSubtitle: () => V.intl.string(V.t.ie1mgY),
        useValue: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nh.cX)() && e
                ? (0, n2.A)({
                      title: V.intl.string(V.t["9jf31O"]),
                      subtitle: V.intl.string(V.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sE.default.setUseSystemScreensharePicker(e), np.A.app.relaunch());
                      },
                      confirmText: V.intl.string(V.t.BddRzS),
                  })
                : sE.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, I.bG)([i9.Ay], () => i9.Ay.supportsSystemScreensharePicker() && (0, nh.cX)());
        },
    }),
    a5 = (0, h.bd)(x.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => tI(x.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a1, a2, a3, a0, aJ],
    }),
    a4 = (0, h.zZ)(x.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a$, a5] });
var a6 = n(106713);
let a8 = (0, h.E2)(x.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a6.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, T.jsx)(lB.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: sw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a7 = (0, h.E2)(x.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a6.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, T.jsx)(lB.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: sw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a9 = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a8, a7] }),
    oe = (0, h.sN)(x.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i9.Ay.getInputVolume();
            return (0, aP.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aP.w)(e);
            sE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    ot = (0, h.sN)(x.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i9.Ay.getOutputVolume();
            return (0, aP.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aP.w)(e);
            sE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    on = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [oe, ot] });
var oi = n(702841),
    os = n(152567),
    ol = n(804037);
let or = `${ey.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oa = (0, h.E2)(x.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, oi.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oi.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK))
                ? (0, T.jsx)(os.A, {
                      size: "md",
                      notchBackground: os.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, T.jsx)(nr.Anchor, {
                                  className: ol.X,
                                  href: ey.A.getArticleURL(_.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: or }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    oo = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function ou(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, T.jsxs)(q.B, {
        children: [
            n && (0, T.jsx)(ss, { sourcePage: "voice" }),
            t && (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let od = (0, h.zZ)(x.X.VOICE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.K3lovD),
        useSearchTerms: () => [
            V.intl.string(V.t.hHMYbb),
            V.intl.string(V.t.nuFtHH),
            V.intl.string(V.t.dl18zb),
            V.intl.string(V.t["3182VD"]),
            V.intl.string(V.t["DGq/PR"]),
            V.intl.string(V.t.eATD2B),
            V.intl.string(V.t.Rtsr6w),
            V.intl.string(V.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = si("voice"),
                t = (0, lz.x5)(sw.oh.AUDIO_INPUT),
                n = (0, lz.x5)(sw.oh.AUDIO_OUTPUT),
                i = f.useMemo(() => {
                    let e = oo.some((e) => t?.hardwareId?.startsWith(e)),
                        i = oo.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, T.jsx)(ou, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a9, on, oa],
    }),
    oc = (0, h.t_)(x.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [od, ar, lq, a4, aQ, aV, rI, rE],
    }),
    og = (0, h.i4)(x.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: lR.MicrophoneIcon,
        useMenu: lD.A,
        buildLayout: () => [oc],
    }),
    om = (0, h.WI)(x.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [og, nZ, tt, iX, lL, nJ],
    });
var oA = n(360669),
    oE = n(643891),
    oh = n(975807),
    ox = n(534247);
function oS(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, T.jsxs)("div", {
        className: ic()(ox.kL, { [ox.oE]: a }),
        children: [
            (0, T.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: ox.Qs,
                children: [
                    (0, T.jsxs)(q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: a ? 12 : 8,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: a ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != l) &&
                        (0, T.jsxs)(q.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, T.jsx)(q.B, {
                                        direction: "horizontal",
                                        gap: a ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
                                            (0, T.jsx)(
                                                j.$,
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
                                    (0, T.jsx)($.E, { variant: "text-xxs/normal", color: "text-subtle", children: l }),
                            ],
                        }),
                ],
            }),
            (0, T.jsx)("img", { src: s, className: ox.fA, alt: "" }),
        ],
    });
}
var op = n(425565),
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
class oY extends f.PureComponent {
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
        return (0, T.jsx)(sT.k, {
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
                        id: (0, tK.Ld)(),
                        title: () => V.intl.string(V.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => V.intl.string(V.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oH.ep,
                        renderInput: (e) => (0, T.jsx)(oY, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oK = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, T.jsx)(oX.A, {
                className: n,
                form: oW,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oF.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oZ = n(219887),
    oq = n(292856);
let oQ = "isDefault";
class o$ extends f.PureComponent {
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
        ((0, oO.ey)(), (0, oO.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(io.Vq).length))
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
                ? (0, T.jsx)("div", {
                      className: oq.zc,
                      children: (0, T.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, T.jsx)("div", {
                  className: oq.zc,
                  children: (0, T.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ok.g)(n);
        return (0, T.jsxs)("div", {
            className: oq.yV,
            children: [
                (0, T.jsx)($.E, {
                    className: oq.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, T.jsx)(ow.Ay, {
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
        return (0, T.jsxs)("div", {
            className: oq.yV,
            children: [
                (0, T.jsx)($.E, { className: oq.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, T.jsx)(oK, {
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
        return (0, T.jsx)("div", {
            className: oq.AU,
            children: (0, T.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, T.jsx)(l2.e, {
                        children: (0, T.jsxs)("div", {
                            className: oq.lH,
                            children: [
                                n
                                    ? (0, T.jsx)(sg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, T.jsx)("div", { "aria-hidden": !0, className: oq.dm }),
                                      })
                                    : null,
                                (0, T.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oM.Fr ? "sm" : "md",
                                    text: oM.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, T.jsxs)(l2.e, {
                        children: [
                            (0, T.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oM.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, T.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oM.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["R3BPH+"]),
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
        return (0, T.jsx)(oU.Z, {
            editable: !0,
            className: ic()(oq.Nr, i),
            children: (0, T.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, T.jsxs)("div", {
                        className: oq.__invalid_paymentSection,
                        children: [
                            (0, T.jsx)(oZ.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, T.jsx)("div", { className: oq.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, T.jsx)("div", {
                                className: oq.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, T.jsx)("div", {
                        className: oq.D5,
                        children: (0, T.jsx)(oV.S, {
                            value: oQ,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oQ),
                            label: V.intl.string(V.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, T.jsx)(sl.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oJ = I.Ay.connectStores([oD.A], () => ({ updateError: oD.A.editSourceError, removeError: oD.A.removeSourceError }))(
    o$,
);
var o0 = n(986485),
    o1 = n(849405),
    o2 = n(329693);
function o3() {
    (0, oL.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oC.A)() });
}
class o5 extends f.PureComponent {
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
            ? (0, T.jsx)(oJ, {
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
            : (0, T.jsxs)(T.Fragment, {
                  children: [
                      i ? null : (0, T.jsx)(sl.c, { className: o2.__invalid_sourceDivider }),
                      (0, T.jsxs)("div", {
                          className: o2.Yb,
                          children: [
                              (0, T.jsx)(oZ.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, T.jsx)(j.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: V.intl.string(V.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let o4 = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = f.useState(null),
        o = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, I.bG)([oD.A], () => oD.A.ipCountryCode),
        d = f.useMemo(() => (0, oy.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oO.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, T.jsxs)(T.Fragment, {
            children: [
                n ? null : (0, T.jsx)(sl.c, { className: o2.__invalid_sourceDivider }),
                (0, T.jsxs)("div", {
                    className: o2.Yb,
                    children: [
                        void 0 !== t
                            ? (0, T.jsx)(oZ.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, T.jsxs)(sN.A, {
                                  align: sN.A.Align.CENTER,
                                  children: [
                                      (0, T.jsx)(ob._, { size: "lg" }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/medium",
                                          className: o1.Wi,
                                          children: V.intl.string(o0.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, T.jsxs)("div", {
                            className: o2.zy,
                            children: [
                                (0, T.jsx)("div", {
                                    className: o2.Tq,
                                    children:
                                        null == r
                                            ? (0, T.jsx)(oN.y, { type: oN.y.Type.SPINNING_CIRCLE })
                                            : (0, T.jsx)($.E, {
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
                                (0, T.jsx)(j.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: V.intl.string(o0.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o6 extends f.PureComponent {
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
        (0, sp.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, T.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
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
        return (0, T.jsxs)("div", {
            className: o2.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, T.jsxs)("div", {
                          className: o2.z8,
                          children: [
                              (0, T.jsx)($.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o2.Sv,
                                  children: V.intl.string(V.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, T.jsx)(j.$, { onClick: this.handleAddPaymentMethod, text: V.intl.string(V.t.CpOiEO) }),
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
            u = K()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oG.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oR.LQ)),
            c = u.filter((e) => e instanceof oR.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, T.jsx)(
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
                          (0, T.jsx)(
                              o4,
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
                    : (0, T.jsx)(o4, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o3,
                      })),
            (0, T.jsxs)(T.Fragment, {
                children: [
                    t
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, T.jsx)(ov.LockIcon, { size: "sm", className: o2.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, T.jsx)($.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, T.jsx)(sl.c, {}) : null,
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
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, o_.Gw)(e.country) };
}
let ui = (0, h.E2)(x.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, I.bG)([oD.A], () => oD.A.isSyncing),
                i = (0, I.bG)([o7.A], () => o7.A.paymentSources),
                s = (0, I.bG)([o7.A], () => o7.A.defaultPaymentSourceId),
                l = (0, I.bG)([ue.default], () => ue.default.locale),
                r = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
                a = (0, I.bG)([oD.A], () => oD.A.isRemovingPaymentSource),
                o = (0, I.bG)([oD.A], () => oD.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o8.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (oO.$o(), oO.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, T.jsx)("div", { className: ut.o, children: (0, T.jsx)(oN.y, {}) })
                : (0, T.jsx)(o6, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== _.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.W26xGQ), V.intl.string(V.t["3pIjBH"])],
    }),
    us = (0, h.E2)(x.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = f.useMemo(
                () => [
                    { text: V.intl.string(oT.default["6bWeWP"]), onClick: () => (0, oh.A)(op.C1) },
                    {
                        text: V.intl.string(oT.default.xYa9Y8),
                        onClick: () => (0, oh.A)(ey.A.getArticleURL(_.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, T.jsx)("div", {
                className: of.k,
                children: (0, T.jsx)(oS, {
                    title: V.intl.string(oT.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, T.jsx)($.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: V.intl.string(oT.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oI.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ul = (0, h.zZ)(x.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = un();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == un()
                ? null
                : {
                      type: p.p3.INFO_POPOVER,
                      ariaLabel: V.intl.string(V.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: V.intl.string(V.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: V.intl.string(V.t.PuB1W7),
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
    uS =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    up =
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
let uU = (e) => `https://${_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uV(e, t) {
    return t === uG.Yr.DISCORD_ORB
        ? (0, T.jsxs)("span", {
              className: uM.db,
              children: [
                  (0, T.jsx)(uD.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, uP.$g)(e, t);
}
function uk(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, eY.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === up.REDEEMED
        ? null
        : n.status === up.REFUNDED
          ? (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(ub.H, { className: uM.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, T.jsx)("div", {
                        className: uM.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: uR.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === up.CLAIMED || n.status === up.UNCLAIMED
            ? (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsx)(ub.H, { className: uM.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uM.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: uR.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, T.jsx)("div", {
                              className: uM.TP,
                              children: (0, T.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t["jcSP+g"]),
                                  onClick: () => (0, na.openUserSettings)(x.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsx)(ub.H, { className: uM.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uM.iL,
                          children: s
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, T.jsx)("div", {
                          className: uM.TP,
                          children: s
                              ? (0, T.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, oh.A)(uU(i)),
                                })
                              : (0, T.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(_.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
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
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)(ub.H, { className: uM.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, T.jsxs)("div", {
                className: uM.iL,
                children: [
                    (0, T.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uS.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uS.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uS.GIFT:
                                    return e.eligible
                                        ? V.intl.format(V.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? V.intl.format(V.t["1LDI4J"], {
                                              dateLimit: n,
                                              playtimeLimit: 2,
                                              supportURL: t,
                                          })
                                        : V.intl.formatToPlainString(V.t.s4Kk0C, { dateLimit: n, playtimeLimit: 2 });
                            }
                        })(t, i),
                    }),
                    t.policy !== uS.IN_GAME_ITEM &&
                        (0, T.jsxs)("div", {
                            className: uM.My,
                            children: [
                                (0, T.jsx)("div", {
                                    className: uM.Kf,
                                    children:
                                        null != t.window &&
                                        (0, T.jsxs)("div", {
                                            className: uM._Z,
                                            children: [
                                                (0, T.jsx)(ub.H, {
                                                    className: uM.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, T.jsxs)("div", {
                                                    className: uM.z9,
                                                    children: [
                                                        (0, T.jsx)(s, { className: uM.xb, color: "currentColor" }),
                                                        (0, T.jsx)("div", {
                                                            children: V.intl.formatToPlainString(V.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, T.jsx)(nr.Anchor, { href: i, children: V.intl.string(V.t.re5nOB) }),
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
    return (0, T.jsx)("li", {
        className: uM.mg,
        children: (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            children: [(0, T.jsx)("div", { children: t }), (0, T.jsx)("div", { children: n })],
        }),
    });
}
function uX(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(!1);
    return (0, T.jsx)(sg.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, T.jsx)(n4.D, {
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
            children: (0, T.jsx)("div", { className: uM.l9, children: t }),
        }),
    });
}
function uH(e) {
    let { paymentId: t } = e;
    return (0, T.jsx)("li", {
        className: uM.mg,
        children: (0, T.jsxs)("div", {
            className: uM.bx,
            children: [
                (0, T.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, T.jsx)(uX, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uW(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === ux.REVERSED;
    return (0, T.jsxs)($.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(uz.XM, n ? uz.aB : uz.EN),
        children: [
            t === ux.REVERSED && V.intl.string(V.t.YQv9Li),
            t === ux.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === ux.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function uK(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uG.kM.APPLE_PARTNER ? new oR.Pw({}) : null);
    return null == i
        ? null
        : (0, T.jsx)(oZ.A, {
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
            ? (0, T.jsx)(uK, { payment: t.payments[0], locale: n })
            : null
        : (0, T.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, T.jsxs)(
                      sN.A,
                      {
                          justify: sN.A.Justify.BETWEEN,
                          align: sN.A.Align.CENTER,
                          children: [
                              (0, T.jsx)(uK, { payment: e, locale: n }),
                              (0, T.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, T.jsx)(uW, { tag: e.tag }),
                                      (0, T.jsx)($.E, {
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
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)("div", { className: uM.ts }),
            t.delisted
                ? (0, T.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, oh.A)(uU(n)) },
                  })
                : null != t.guild_id && (0, T.jsx)(uj.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uQ(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, T.jsx)(n4.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, T.jsxs)("div", {
            className: uM.WI,
            children: [
                (0, T.jsx)(ub.H, { className: uM.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, T.jsxs)("div", {
                    className: ic()(uM.iL, uM.W),
                    children: [
                        (0, T.jsx)(uZ, { receipt: t, locale: n }),
                        (0, T.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uY, { description: t.description, cost: uV(t.subtotal, s) }),
                                            (0, T.jsx)(uY, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: uV(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uY, { description: V.intl.string(V.t.txajQG), cost: uV(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uY, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: uV(-t.amount_refunded, s),
                                            }),
                                            (0, T.jsx)(uY, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: uV(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uH, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, T.jsx)(uj.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, T.jsx)(uq, { guildProduct: l, locale: n }),
                (0, T.jsx)(uO.A, { payment: t.receipt_payment }),
                null != r && (0, T.jsx)(uk, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, T.jsx)(uB, { refund: a, locale: n }),
            ],
        }),
    });
}
function u$(e) {
    let { withGradient: t } = e;
    return t
        ? (0, T.jsx)(uC.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uM.Sy })
        : (0, T.jsx)("div", {
              className: ic()(uM.Sy, uM.uX, uM.Xr),
              children: (0, T.jsx)(aa.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function uJ(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, I.bG)([sv.A], () => sv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uh.NITRO:
            return (0, T.jsx)(u$, { withGradient: !0 });
        case uh.NITRO_BASIC:
            return (0, T.jsx)(u$, { withGradient: !1 });
        case uh.SHOP:
            return (0, T.jsx)(uI.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uM.sV });
        case uh.APPLICATION:
        case uh.PRODUCT:
            return (0, T.jsx)(i7.A, {
                className: uM.Sy,
                guildClassName: uM.zA,
                game: t.icon === uh.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u0(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uE.PAID)
        switch (i.status) {
            case up.CLAIMED:
                return (0, T.jsx)("span", { className: uM.gD, children: V.intl.string(V.t.lIsIFo) });
            case up.UNCLAIMED:
                return (0, T.jsx)("span", { className: uM.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case up.REDEEMED:
                return (0, T.jsx)("span", { className: uM.gD, children: V.intl.string(V.t.Osji1u) });
            case up.FAILED:
                return (0, T.jsx)("span", { className: uM.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, T.jsx)("span", { className: uM.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, T.jsx)("span", { className: uM.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uE.PENDING:
            return (0, T.jsx)("span", { className: uM.Xg, children: V.intl.string(V.t.y7F0Re) });
        case uE.FAILED:
            return (0, T.jsx)("span", { className: uM.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uE.REVERSED:
            return (0, T.jsx)("span", { className: uM.ob, children: V.intl.string(V.t.YQv9Li) });
        case uE.CANCELED:
            return (0, T.jsx)("span", { className: uM.ob, children: V.intl.string(V.t.ttkBhy) });
        case uE.PARTIALLY_REFUNDED:
            return (0, T.jsx)("span", { className: uM.gD, children: V.intl.string(V.t.lYbZzz) });
        case uE.REFUNDED:
            return (0, T.jsx)("span", { className: uM.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uE.PAID:
            return null;
    }
}
function u1(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uN.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, T.jsx)(uu.tG, {
        id: t.id,
        children: (e) =>
            (0, T.jsxs)(n4.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: ic()(uM.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, T.jsxs)(sN.A, {
                        className: uM.J7,
                        align: sN.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                className: uM.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, T.jsxs)("div", {
                                className: uM.h_,
                                children: [
                                    (0, T.jsx)(uJ, { receipt: t }),
                                    (0, T.jsx)("div", {
                                        children:
                                            null != t.subscription
                                                ? ((function (e, t) {
                                                      let { paymentSource: n } = e.receipt_payment,
                                                          i = null != n && _.AD1.has(n.type);
                                                      switch (t.type) {
                                                          case _.rzx.PREMIUM:
                                                              return t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t, quantity: n } = e;
                                                                      return (0, ap.xq)(t)
                                                                          ? ap.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ap.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case _.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return V.intl.formatToPlainString(
                                                                  t.interval === t$.WT.YEAR
                                                                      ? V.t.V6UFQM
                                                                      : V.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case _.rzx.APPLICATION:
                                                              return e.sku?.application != null
                                                                  ? V.intl.formatToPlainString(V.t["0wL/VI"], {
                                                                        tier: e.sku.name,
                                                                    })
                                                                  : V.intl.string(V.t["9czSYu"]);
                                                          default:
                                                              return null;
                                                      }
                                                  })(t, t.subscription) ?? t.description)
                                                : t.guild_product?.delisted === !0
                                                  ? V.intl.string(V.t.O7uLmw)
                                                  : t.description,
                                    }),
                                    t.is_gift
                                        ? (0, T.jsx)(sg.m, {
                                              text: V.intl.string(V.t.QddTpm),
                                              children: (0, T.jsx)(u_.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uM.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, T.jsxs)("div", {
                                className: uM.vj,
                                children: [
                                    (0, T.jsx)(u0, { receipt: t, hasLinkedToApplication: r }),
                                    (0, T.jsx)("span", { className: uM.q9, children: uV(t.net, t.currency) }),
                                ],
                            }),
                            (0, T.jsx)(uy.A, {
                                className: uM.fT,
                                direction: s ? uy.A.Directions.UP : uy.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, T.jsx)(uQ, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u2 = n(949779);
function u3(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        s = f.useRef(null),
        [l, r] = f.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * l, (l + 1) * 10);
    f.useEffect(() => {
        s.current?.scrollTo({ to: 0 });
    }, [l]);
    let u = f.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, uc.A)("billing-history", s);
    return (0, T.jsx)(uu.hD, {
        navigator: d,
        children: (0, T.jsx)(uu.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, T.jsx)(ug.A, {
                    className: u2.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, T.jsx)(ud.Ch, {
                        className: u2.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, T.jsx)(u1, { className: ic()(u2.Nj, u2.Bd), receipt: e, locale: n }, e.id),
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
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, T.jsxs)(oU.Z, {
            className: u2.K1,
            children: [
                (0, T.jsx)("div", {
                    className: u2.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: uG.qm[t.paymentGateway] }),
                }),
                (0, T.jsx)("div", {
                    className: u2.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: uG.qm[t.paymentGateway],
                        billingHistoryLink: (0, ap.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u4(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = f.useState(uf),
                [n, i] = f.useState(!1),
                [s, l] = f.useState(!1),
                [r, a] = f.useState(!1),
                o = f.useCallback((e, n) => {
                    ts.Bo.get({
                        url: _.Rsh.BILLING_HISTORY,
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
            f.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = f.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: s, loadNextPage: u };
        })(),
        r = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, T.jsxs)("div", {
              className: u2.GD,
              children: [
                  null != r && a ? (0, T.jsx)(u5, { subscription: r }) : null,
                  n.length > 0
                      ? (0, T.jsxs)("div", {
                            className: ic()(u2.PQ, u2.GD),
                            children: [
                                (0, T.jsx)("div", {
                                    className: ic()(u2.Nj, u2.Bd),
                                    children: (0, T.jsxs)(sN.A, {
                                        className: u2.Yi,
                                        children: [
                                            (0, T.jsx)("div", {
                                                className: uM.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: u2.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: uM.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, T.jsx)(u3, { receipts: n, locale: t, loadNextPage: l }),
                            ],
                        })
                      : s
                        ? (0, T.jsx)($.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, T.jsx)(oN.y, {});
}
var u6 = n(545075);
let u8 = (0, h.E2)(x.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, I.bG)([ue.default], () => ue.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: uo.useConfig(e).enabled });
            return (0, T.jsxs)(T.Fragment, {
                children: [(0, T.jsx)(u6.kb, {}), n ? (0, T.jsx)(u4, { locale: t }) : (0, T.jsx)(ur.A, { locale: t })],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    u7 = (0, h.zZ)(x.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [u8],
    }),
    u9 = (0, h.t_)(x.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [ul, u7],
        useObscuredNotice: oE.L,
    }),
    de = (0, h.i4)(x.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: oA.B,
        buildLayout: () => [u9],
    });
var dt = n(70283),
    dn = n(682618),
    di = n(92202),
    ds = n(139486),
    dl = n(962644),
    dr = n(35587),
    da = n(86379);
let du = (0, h.E2)(x.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u6.uK,
        usePredicate: () => (0, da.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dd = (0, h.zZ)(x.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [du] });
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
    dx = [],
    dS = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var dp = n(534284);
function dT(e) {
    let { enabled: t } = (0, di.K)({ location: e }),
        n = (0, dp.P)(),
        i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && op.ob.has(i);
}
var df = n(178881);
function dI(e) {
    let { icon: t, children: n } = e;
    return (0, T.jsxs)($.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: df.A,
        children: [
            (0, T.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, T.jsx)("span", { children: n }),
        ],
    });
}
let d_ = (0, h.zZ)(x.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dN],
        usePredicate: () => dT("GiftInventoryMarketingBanner"),
    }),
    dN = (0, h.E2)(x.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dT("GiftCardsGiftInventoryBanner"),
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, eY.Ay)();
                    return f.useCallback(
                        (t) => {
                            td.default.track(_.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                i = f.useMemo(
                    () =>
                        (null == t ? dx : (dh[t] ?? dx)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, oh.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, T.jsx)(oS, {
                      size: "compact",
                      title: V.intl.string(oT.default.Ja5Q8Z),
                      graphicSrc: dS,
                      actions: i,
                      children: (0, T.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, T.jsx)(dI, { icon: dc.B, children: V.intl.string(oT.default["9xo1g9"]) }),
                              (0, T.jsx)(dI, { icon: dg.h, children: V.intl.string(oT.default.I5UWh9) }),
                              (0, T.jsx)(dI, {
                                  icon: u_.GiftIcon,
                                  children: V.intl.format(oT.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, na.openUserSettings)(x.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, T.jsx)(dI, {
                                  icon: dm.k,
                                  children: V.intl.format(oT.default.UwYHGm, { websiteUrl: op.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dC = n(982240),
    dy = n(948518),
    db = n(914410),
    dv = n(556427),
    dj = n(573343);
function dO(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, T.jsxs)("div", {
        className: ic()(dj.fO, { [dj.bF]: i }),
        children: [
            null != n && (0, T.jsx)("img", { src: n, alt: "", className: dj.si }),
            (0, T.jsxs)("div", {
                className: dj.tc,
                children: [
                    (0, T.jsx)($.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, T.jsx)($.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(dv.default.qvx9E4, { count: (0, dC.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dL(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, T.jsx)("div", {
        className: dj.dw,
        children: t.map((e) => (0, T.jsx)(dO, { tier: e, iconUrl: (0, ds.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function dR(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dy.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, T.jsx)("div", {
        className: dj.NG,
        children: (0, T.jsx)(j.$, {
            variant: "primary",
            icon: u_.GiftIcon,
            text: V.intl.string(dv.default.DZnomS),
            onClick: s,
        }),
    });
}
function dD(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, dC.rL)(i),
        a = (0, dC.rL)(s),
        o = (0, ds.GZ)(n, i, s),
        u = (0, ds.Se)(i),
        d = (0, ds.Se)(s);
    return (
        (t =
            null != s
                ? V.intl.formatToPlainString(dv.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : V.intl.formatToPlainString(dv.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, T.jsxs)("div", {
            className: dj.mY,
            children: [
                null != u &&
                    (0, T.jsx)("div", {
                        className: dj.fC,
                        children: (0, T.jsx)("img", { src: u, alt: "", className: dj.qS }),
                    }),
                (0, T.jsxs)("div", {
                    className: dj.Qs,
                    children: [
                        (0, T.jsx)($.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, T.jsx)(db.Ay, { variant: db.qP.BLUE, weight: db.fh.MEDIUM, progress: o }),
                        (0, T.jsx)($.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dj.qg,
                            children: V.intl.format(dv.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, T.jsx)("div", {
                        className: dj.fC,
                        children: (0, T.jsx)("img", { src: d, alt: "", className: dj.qS }),
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
        } = (0, I.cf)([dC.Ay], () => ({
            badgeProgress: dC.Ay.getSingleRequirementProgress(dt.$.GIFTING)?.current ?? 0,
            currentTier: dC.Ay.getCurrentTier(dt.$.GIFTING),
            nextTier: dC.Ay.getNextTier(dt.$.GIFTING),
            giftsRemaining: dC.Ay.getRemainingToNextTier(dt.$.GIFTING),
            tiers: dC.Ay.getBadgeById(dt.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, T.jsxs)("div", {
              className: dj.kL,
              children: [
                  (0, T.jsxs)("div", {
                      className: dj.Jo,
                      children: [
                          n > 0 &&
                              (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsx)(dD, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, T.jsx)("div", { className: dj.yF }),
                                  ],
                              }),
                          (0, T.jsx)(dL, { tiers: r, currentTier: i }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dj.PJ,
                              children: V.intl.string(dv.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, T.jsx)(dR, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let dG = (0, h.zZ)(x.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(dv.default.sFokBp),
        buildLayout: () => [dM],
        usePredicate: () => {
            let e = (0, ds.F5)("gift_inventory"),
                t = (0, I.bG)([dC.Ay], () => dC.Ay.getBadgeById(dt.$.GIFTING));
            return e && null != t;
        },
    }),
    dM = (0, h.E2)(x.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(dv.default.sFokBp)],
        Component: () => (0, T.jsx)(dP, {}),
    });
var dU = n(264779),
    dV = n(412260),
    dk = n(555393),
    dw = n(725807),
    dF = n(212168),
    dB = n(976860),
    dz = n(469778),
    dY = n(45938),
    dX = n(109802),
    dH = n(869038),
    dW = n(380856);
function dK(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, T.jsxs)(sN.A, {
        className: ic()(dW.wx, n),
        align: sN.A.Align.CENTER,
        children: [
            (0, T.jsx)("div", { className: dW.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dZ(e) {
    let { children: t, className: n } = e;
    return (0, T.jsx)("div", { className: ic()(dW.rf, n), children: t });
}
class dq extends f.PureComponent {
    static Header = dK;
    static Body = dZ;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, T.jsx)("div", { className: ic()(dW.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dQ = n(180522),
    d$ = n(871123),
    dJ = n(366523),
    d0 = n(280450),
    d1 = n(30793),
    d2 = n(97352),
    d3 = n(67480),
    d5 = n(615396),
    d4 = n(274904);
class d6 extends f.PureComponent {
    _copyModeTimeout = new rB.Ep();
    state = { copyMode: dX.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dX.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case dX.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dH.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dY.AK)(t, n),
            (0, uv.C)(
                e,
                () => this.setState({ copyMode: dX.q.SUCCESS }),
                () => this.setState({ copyMode: dX.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dX.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, T.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: d4.Gj,
            children: [
                (0, T.jsx)(dX.e, {
                    className: d4.ph,
                    value: (0, dY.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uv.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l0.XD.BRAND,
                    buttonLook: l0.pR.FILLED,
                }),
                (0, T.jsxs)("div", {
                    className: d4.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, T.jsxs)(f.Fragment, {
                                  children: [
                                      V.intl.format(V.t.ltVZcJ, { hours: t.expiresAt.diff(im()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, T.jsx)(n4.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: V.intl.string(V.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class d8 extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dH.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dH.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, d$.bF)(e)
            ? (0, T.jsx)(dJ.e, { shape: "square", sku: e, containerClassName: d4.ez })
            : null != t
              ? (0, T.jsx)(dQ.A, { giftStyle: t, className: d4.ez, shouldAnimate: this.state.isHovered })
              : (0, T.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, d$.bF)(e)
            ? (0, T.jsxs)("div", {
                  className: ic()(d4.Oc, d4.ic),
                  children: [
                      (0, T.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: d4._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, T.jsx)("div", { className: d4.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === t$.FB
                    ? V.intl.string(V.t.odsU6W)
                    : i === t$.Bu && null != n
                      ? V.intl.formatToPlainString(n.interval === t$.WT.MONTH ? V.t.uZjpiJ : V.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : V.intl.formatToPlainString(n.interval === t$.WT.MONTH ? V.t.rCJvqo : V.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, T.jsx)("div", { className: d4.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            align: sN.A.Align.CENTER,
            className: d4.pe,
            children: [
                (0, T.jsx)($.E, { variant: "text-md/normal", children: V.intl.string(V.t.lELyPj) }),
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t.Q3Qguo),
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
        return (0, T.jsxs)(dq, {
            className: i,
            children: [
                (0, T.jsx)(n4.D, {
                    onClick: this.handleToggleOpen,
                    className: d4.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, T.jsx)(dq.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, T.jsxs)("div", {
                            className: d4.MY,
                            children: [
                                (0, T.jsxs)(sN.A, {
                                    align: sN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, T.jsxs)("div", {
                                            className: d4.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, T.jsx)(uy.A, {
                                    direction: a ? uy.A.Directions.UP : uy.A.Directions.DOWN,
                                    className: d4.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, T.jsx)(dq.Body, {
                          children: l
                              ? (0, T.jsx)(oN.y, { className: d4.u1 })
                              : (0, T.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, T.jsx)(d6, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d7 = I.Ay.connectStores([d3.A, tu.A, d1.A, i2.A, d2.A, d0.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d3.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d1.A.getForGifterSKUAndPlan(d0.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: d1.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: d1.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d5.c9)(n) : null,
        giftCodes: l,
    };
})(d8);
var d9 = n(725570),
    ce = n(736653),
    ct = n(46054);
let cn = im().duration(30, "days");
var ci = n(416052),
    cs = n(878309);
function cl(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, T.jsx)(sS.a, {
        title: "",
        size: "md",
        input: (0, T.jsx)("div", { className: cs.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, T.jsxs)("div", {
            className: cs.t4,
            children: [
                (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, T.jsx)($.E, { variant: "text-md/normal", className: cs.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cr = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
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
        ? (0, T.jsx)(cl, { onClose: t, transitionState: l })
        : null == i
          ? (0, T.jsx)(oN.y, { className: cs.Lq })
          : (0, T.jsx)(sS.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, T.jsxs)("div", {
                    className: cs.N1,
                    children: [
                        (0, T.jsx)("div", { className: cs.Qw }),
                        (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, T.jsx)($.E, {
                            variant: "text-md/normal",
                            className: cs.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: V.intl.string(V.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: V.intl.string(V.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, dU.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, T.jsxs)("div", {
                    children: [
                        (0, T.jsx)(sl.c, { className: cs.M5 }),
                        (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, T.jsx)(ci.A, {
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
var ca = n(136380);
function co(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, ce.Ay)(),
        d = (0, dU.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(cn)
                        : im()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && s
        ? (t = V.intl.format(V.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = V.intl.format(V.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = V.intl.format(V.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = V.intl.format(V.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? V.intl.string(V.t["2cHUti"]) : V.intl.string(V.t.O13yhz),
        A = (0, dk.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsxs)("div", {
                className: ca.AX,
                children: [
                    (0, T.jsxs)("div", {
                        className: ca.Pg,
                        children: [
                            (0, T.jsxs)("div", {
                                className: ca.At,
                                children: [
                                    (0, T.jsx)("div", {
                                        className: ca.$G,
                                        children: (0, T.jsx)("img", { alt: "", src: d, className: ca.IJ }),
                                    }),
                                    (0, T.jsxs)("div", {
                                        children: [
                                            (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: h }),
                                            (0, T.jsx)($.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, T.jsx)(j.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, T.jsx)($.E, {
                            className: ca.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: ct.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, T.jsx)(d9.aF, {
                    renderModal: (e) =>
                        (0, T.jsx)(cr, {
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
function cu(e) {
    let { redesign: t = !1 } = e,
        n = (0, I.yK)([dz.A], () => dz.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dk.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dr.y7)(),
        a = n.find((e) => e.giftCodeBatchId === t$.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === t$.Bu && !e.consumed) ?? [],
        [u, d] = K().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t$.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, T.jsxs)("div", {
                      className: ca.N1,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, T.jsx)(sl.c, { className: ca.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, T.jsxs)("div", {
                      className: ca.uo,
                      children: [
                          (0, T.jsx)(aa.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: ca.PC,
                          }),
                          (0, T.jsx)($.E, {
                              variant: "text-md/normal",
                              className: ca.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tX.default)(), (0, dB.pX)(_.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, T.jsx)(dw.A, {
                              showGradient: !0,
                              className: ca.aA,
                              subscriptionTier: t$.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, T.jsxs)("div", {
        children: [
            g,
            (0, T.jsx)(dF.A, {
                className: ca.Yj,
                isShown: !1 === i && c,
                type: dF.i.PREMIUM,
                hasBackground: !0,
                children: (0, T.jsxs)("div", {
                    className: ca.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, T.jsx)(co, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, T.jsx)(co, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, T.jsx)(
                                  d7,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t$.FB,
                                  },
                                  (0, dY.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, T.jsx)(
                                  d7,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dY.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, T.jsx)(
                                  d7,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dY.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cd = (0, h.zZ)(x.X.MY_GIFTS_CATEGORY, {
        useTitle: cg,
        buildLayout: () => [cc],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, I.cf)(
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
    cc = (0, h.E2)(x.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cg()],
        Component: () => (0, T.jsx)(cu, { redesign: !0 }),
    });
function cg() {
    return V.intl.string(V.t.YzjdWJ);
}
var cm = n(339048),
    cA = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cE = n(183636),
    ch = n(739508);
function cx() {
    var e, t;
    let n,
        i,
        s = (0, I.yK)([dz.A], () => dz.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = K().groupBy(s, (e) => (0, dY.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cm.XJ)().then(() => a(!0));
        }, []),
        (e = cA.GIFT_INVENTORY),
        (t = !r),
        (n = f.useRef(null)),
        (i = f.useRef(!1)),
        f.useEffect(() => {
            if (i.current) return;
            if (!t) {
                i.current = !0;
                return;
            }
            n.current ??= performance.now();
            let s = setTimeout(
                () => {
                    ((i.current = !0),
                        "focused" === cE.A.getState() &&
                            (0, ch.pM)(Error(`${e} load timed out`), {
                                tags: {
                                    ...void 0,
                                    source: "smag_screen_load",
                                    billing_context: (function (e) {
                                        if ("gift_inventory" === e) return "gifting";
                                    })(e),
                                    surface: e,
                                },
                            }));
                },
                Math.max(0, 1e4 - (performance.now() - n.current)),
            );
            return () => clearTimeout(s);
        }, [e, t, void 0]),
        !r)
    )
        return (0, T.jsx)(oN.y, { className: ca.Lq });
    if (0 === Object.keys(l).length)
        return (0, T.jsxs)("div", {
            className: ca.p$,
            children: [
                (0, T.jsx)(ub.H, { className: ca.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, T.jsx)("p", {
                    className: ca.WO,
                    children: V.intl.format(V.t.HezvJ8, {
                        onClick: function () {
                            (0, na.openUserSettings)(x.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let o = K()
        .keys(l)
        .map((e) => {
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, dY.X6)(e);
            return (0, T.jsx)(d7, { skuId: t, subscriptionPlanId: n, entitlements: l[e], giftStyle: i }, e);
        });
    return (0, T.jsx)(q.B, { gap: "lg", children: o });
}
let cS = (0, h.zZ)(x.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cT, buildLayout: () => [cp] }),
    cp = (0, h.E2)(x.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cT()], Component: () => (0, T.jsx)(cx, {}) });
function cT() {
    return V.intl.string(V.t.FWe6CP);
}
var cf = n(532446),
    cI = n(499454);
class c_ extends f.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: _.ZSU.BUTTON_CTA };
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
            let e = (0, dY.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dH.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (td.default.track(_.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: _.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: _.ZSU.BUTTON_CTA,
                },
            }),
                (0, cI.h)({ processedCode: e }),
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
            r = e ? V.intl.string(V.t["hVEn/j"]) : V.intl.string(V.t.SeKIoS),
            a = e ? V.intl.string(V.t.epHMtp) : void 0;
        return (0, T.jsx)(n3.n, {
            label: e ? void 0 : V.intl.string(V.t["il+VCo"]),
            children: (0, T.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, T.jsxs)(cf.M, {
                    children: [
                        (0, T.jsx)(sT.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? V.intl.string(V.t.Y11a2u) : null,
                            helperText: l
                                ? V.intl.format(V.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, T.jsx)(j.$, {
                            variant: "primary",
                            text: V.intl.string(V.t.KIpp7M),
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
function cN(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o8.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        s = (0, I.bG)([tu.A], () => tu.A.enabled);
    return (0, T.jsx)(c_, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cC = (0, h.zZ)(x.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cy],
        usePredicate: () => !(0, da.Hp)(),
    }),
    cy = (0, h.E2)(x.X.REDEEM_CODE_INPUT, {
        Component: () => (0, T.jsx)(cN, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cb = (0, h.t_)(x.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [d_, cC, cd, dG, cS, dd],
        initialize: () => {
            (dl.Ay.fetchClaimedOutboundPromotionCodes(), (0, ds.Ig)("gift_inventory") && (0, dn.o0)(dt.$.GIFTING));
        },
    }),
    cv = (0, h.i4)(x.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: u_.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dr.IO)().length;
            return f.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o8.A.getConfig(e).enabled,
                n = di.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cb],
    });
var cj = n(659758),
    cO = n(281906),
    cL = n(877624),
    cR = n(269115),
    cD = n(462887),
    cP = n(73825),
    cG = n(531260),
    cM = n(160946),
    cU = n(721668),
    cV = n(224016),
    ck = n(526292),
    cw = n(881489),
    cF = n(106512),
    cB = n(22118),
    cz = n(103411),
    cY = n(190187),
    cX = n(930861),
    cH = n(854627),
    cW = n(889227),
    cK = n(326084),
    cZ = n(851746),
    cq = n(664654),
    cQ = n(912140),
    c$ = n(953727);
let cJ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, T.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c$.A)({ ...s }),
            children: [
                (0, T.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, T.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, T.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, T.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, T.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    c0 = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, ce.Ay)(),
            l = (0, cD.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, T.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c$.A)({ ...i }),
            children: [
                (0, T.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, T.jsxs)("defs", {
                            children: [
                                (0, T.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, T.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, T.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, T.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, T.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, T.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, T.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, T.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, T.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, T.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, T.jsxs)("defs", {
                    children: [
                        (0, T.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, T.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, T.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, T.jsx)("feOffset", { dy: "4" }),
                                (0, T.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, T.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, T.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, T.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, T.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, T.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, T.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, T.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, T.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, T.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, T.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var c1 = n(387316),
    c2 =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let c3 = "url(#gradient)",
    c5 = (e) => {
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
            [d, c] = f.useState(s);
        f.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, ce.Ay)(),
            m = (0, cD.q)(g),
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
                            return c3;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c3;
                        default:
                            return;
                    }
                })(m, r);
        return (0, T.jsxs)("div", {
            className: c1.Ap,
            children: [
                (0, T.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: c1.fB,
                    children: [
                        (0, T.jsx)("circle", {
                            className: 0 === r || 2 === r ? c1.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, T.jsx)("circle", {
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
                (0, T.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, T.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, T.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, T.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, T.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, T.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, T.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, T.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, T.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, T.jsx)("div", { className: c1.Vw, children: n }),
            ],
        });
    };
var c4 = n(104773);
function c6(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = f.useMemo(() => (0, cQ.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, T.jsx)("div", {
        className: c4.Q7,
        children: (0, T.jsx)("div", {
            className: c4.Nk,
            children: null != s && (0, T.jsx)("img", { className: c4.CH, alt: i, src: s }),
        }),
    });
}
let c8 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = c2.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        S = t && !x;
    return (0, T.jsx)("div", {
        className: ic()(c4.G3, n),
        children: (0, T.jsx)(c5, {
            animationClassName: ic()(c4._0, { [c4.uJ]: S, [A ?? ""]: S }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case c2.NITRO_GEM:
                        return (0, T.jsx)(cJ, {
                            className: S ? c4.Ow : void 0,
                            backgroundColor: ic()(c4.vH, s),
                            backgroundCircleSize: r,
                        });
                    case c2.NITRO_LOGO:
                        return (0, T.jsx)(c0, { circleColor: E, ellipseOpacity: m });
                    case c2.AVATAR_DECO:
                        if (null != c)
                            return (0, T.jsx)(c6, {
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
var c7 = n(14313);
function c9(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cH.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, T.jsx)(b.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...s })
            : (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: c7.n5, children: n });
    return (0, T.jsx)(sg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !l,
        children: (0, T.jsx)("div", { className: c7.Lg, children: r }),
    });
}
function ge(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, T.jsxs)("div", {
        className: c7.Ip,
        children: [
            (0, T.jsx)("div", { className: c7.Ej }),
            (0, T.jsx)("div", { className: ic()({ [c7.ch]: t > n, [c7.q_]: t === n }) }),
        ],
    });
}
function gt(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, T.jsxs)("div", {
        className: c7.ZM,
        children: [
            (0, T.jsx)(c9, { userRecord: i, placement: 1 }),
            (0, T.jsx)(ge, { numSentReferrals: n, placement: 1 }),
            (0, T.jsx)(c9, { userRecord: s, placement: 2 }),
            (0, T.jsx)(ge, { numSentReferrals: n, placement: 2 }),
            (0, T.jsx)(c9, { userRecord: l, placement: 3 }),
        ],
    });
}
let gn = function () {
    let e = (0, I.bG)([cZ.A], () => cZ.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cq.J)(),
        i = f.useMemo(() => t.map((e) => new cW.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cK.aK.REDEEMED && s.redeemed++, e === cK.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cq.Z,
        r = ey.A.getArticleURL(_.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (s.sent / cq.Z) * 100,
        d = (0, T.jsxs)("div", {
            className: c7.hE,
            children: [
                (0, T.jsx)(c8, { percentage: u, progressCircleVariation: c2.NITRO_LOGO, iconClassName: c7.ER }),
                (0, T.jsxs)("div", {
                    className: c7.Ns,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: c7.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, T.jsx)(gt, { userRecords: i }),
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cq.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, T.jsx)("div", {
                            className: c7.Fb,
                            children: (0, T.jsx)(cX.wL, {
                                "data-migration-pending": !0,
                                className: c7.r$,
                                color: l0.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (td.default.track(_.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sp.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, T.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, T.jsxs)("div", {
                                    className: c7.Zn,
                                    children: [
                                        (0, T.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c7.QH,
                                        }),
                                        l ? V.intl.string(V.t.SY9tyI) : V.intl.string(V.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = s.redeemed === cq.Z;
    return (0, T.jsx)(eY.f5, {
        value: a,
        children: (0, T.jsx)("div", {
            className: ic()(c7.kL, { [c7.AP]: c }),
            children: (0, T.jsx)("div", { ref: o, className: ic()(c7.d_, { [c7.kS]: c }), children: d }),
        }),
    });
};
var gi = n(194509),
    gs = n(465794),
    gl = n(774774),
    gr = n(156601),
    ga = n(543213),
    go = n(88001),
    gu = n(148155),
    gd = n(487518);
let gc = "to_premium_home_button",
    gg = "premium home page";
function gm(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t$.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cG.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = t$.hd[t.planIdFromItems],
        c = ap.Ay.getDefaultPrice(d.id),
        g = ap.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cD.M)(s) ? gl.at.PREMIUM_TIER_2_WHITE_FILL : gl.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, T.jsxs)(T.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, T.jsx)(gl.e4, { text: V.intl.string(V.t.EyjDRE), className: gd.LW, colorOptions: e })
                    : (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(gl.HU, {
                                  text: l ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gd.uS,
                                  colorOptions: e,
                              }),
                              (0, T.jsx)("div", { className: gd.on }),
                          ],
                      }),
                (0, T.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gd.KB,
                    children: (function () {
                        if (l) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uP.$g)(c.amount, c.currency);
                            return V.intl.format(gu.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? t$.Cq,
                                  regularPrice: g,
                                  renewalDate: ap.Ay.getExpectedRenewalDate(t, o),
                              })
                            : V.intl.formatToPlainString(V.t["3ZiutU"], {
                                  percent: i?.percentage ?? t$._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? t$.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, T.jsx)(gr.A, { variant: void 0, subscriptionTier: t$.pe.TIER_2, interval: d.interval });
}
function gA() {
    let e = (0, ck.k5)(),
        t = (0, ck.nf)(),
        n = (0, ce.Ay)(),
        i = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cG.A)(),
        a = (0, cw.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, T.jsxs)("div", {
        className: ic()(gd.$Y, { [gd.J5]: e || d }),
        children: [
            (0, T.jsxs)("div", {
                className: gd.jp,
                children: [
                    l
                        ? (0, T.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gd._K,
                              children: (0, go.DP)(),
                          })
                        : (0, T.jsx)(cV.A, { className: gd.TJ }),
                    l && !e
                        ? (0, T.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, T.jsxs)(T.Fragment, {
                                children: [
                                    (0, T.jsx)(gl.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gd.LW,
                                        colorOptions: gl.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, T.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gd.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: ey.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, T.jsx)(gm, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)(gl.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gd.uS,
                                            colorOptions: (0, cD.M)(n)
                                                ? gl.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gl.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, T.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gd.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, T.jsx)(ga.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? ga.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? ga.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? ga.Nz.FRACTIONAL_PREMIUM
                                : ga.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, T.jsxs)(l2.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, T.jsx)(gs.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gc,
                                              target: gg,
                                          }),
                                              (0, tX.default)(),
                                              (0, dB.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, T.jsxs)(l2.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, T.jsx)(j.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gc,
                                              target: gg,
                                          }),
                                              (0, tX.default)(),
                                              (0, dB.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      text: V.intl.string(V.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, T.jsx)(j.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, na.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: V.intl.string(V.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, T.jsx)("div", {
                className: gd.ah,
                children: (0, T.jsx)("img", { className: gd.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gE() {
    return (0, T.jsxs)("div", {
        className: gd.T1,
        children: [
            (0, T.jsx)("img", { className: gd.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, T.jsxs)("div", {
                className: gd.b4,
                children: [
                    (0, T.jsx)(C.D, {
                        className: gd.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, T.jsx)($.E, {
                        className: gd.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, T.jsx)(gi.A, {
                        className: ic()(gd.Tp, gd._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gd.VV },
                        color: l0.$n.Colors.CUSTOM,
                        onClick: () => {
                            td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let gh = function () {
        let e = (0, da.Hp)(),
            { analyticsLocations: t } = (0, eY.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
            s = (0, I.bG)([o9.A], () => o9.A.hasFetchedSubscriptions()),
            l = (0, cM.Y)(t$.T7),
            [r, a] = f.useState(!0),
            o = (0, cG.A)({ forceFetch: !0 }),
            u = (0, I.bG)([dV.A], () => {
                let e = dV.A.getMarketingComponentByType(cL.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oM.Fr || oM.v1) && null != u,
            c = f.useRef(null);
        (0, cY.i)();
        let g = (0, cz.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oO.hP(), oO.$o(), (0, cP.zS)(null, null, _.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, T.jsx)(u6.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, T.jsx)(cU.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, T.jsx)(oN.y, {});
        let S = !!i?.hasActiveTrial;
        return (0, T.jsx)(eY.f5, {
            value: t,
            children: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, T.jsx)(cF.m, { config: u }),
                            (0, T.jsx)(gA, {}),
                            g && (0, T.jsx)(gn, {}),
                            !d && (0, T.jsx)(gE, {}),
                            (0, T.jsx)(cB.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !S,
                                selectedPlanColumnClassName: gd.JG,
                                selectedPlanTier: t$.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, T.jsx)(cR.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(_.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, T.jsx)("div", { ref: c, className: gd._Z }),
                    }),
                ],
            }),
        });
    },
    gx = (0, h.E2)(x.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, ap.YE)(e, t$.PremiumTypes.TIER_2) ? (0, T.jsx)(gh, {}) : (0, T.jsx)(cO.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gS = (0, h.zZ)(x.X.NITRO_CATEGORY, { buildLayout: () => [gx] }),
    gp = (0, h.t_)(x.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: oE.L,
        buildLayout: () => [gS],
    }),
    gT = (0, h.i4)(x.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: aa.t,
        usePersistentBadge: function (e) {
            let t = (0, cj.e)(e);
            return f.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gp],
    });
var gf = n(104510),
    gI = n(820739),
    g_ = n(859241),
    gN = n(527113),
    gC = n(338548),
    gy = n(776096),
    gb = n(711014),
    gv = n(178368),
    gj = n(809545),
    gO = n(168482);
function gL() {
    return (0, T.jsxs)("div", {
        className: gj.iE,
        children: [
            (0, T.jsx)("img", { className: gj.Kk, alt: "", src: gO }),
            (0, T.jsxs)("div", {
                className: gj.pq,
                children: [
                    (0, T.jsx)($.E, { variant: "text-lg/bold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, T.jsx)($.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: V.intl.string(V.t.kCj5ps),
                    }),
                ],
            }),
            (0, T.jsx)(j.$, {
                variant: "secondary",
                text: V.intl.string(V.t.JFlifp),
                onClick: function () {
                    ((0, dB.pX)(_.BVt.GUILD_DISCOVERY), (0, tX.default)());
                },
            }),
        ],
    });
}
var gR = n(365199),
    gD = n(878678),
    gP = n(443865),
    gG = n(980707),
    gM = n(473145);
function gU(e) {
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
                label: null != t.premiumGuildSubscription ? V.intl.string(V.t["PR0n//"]) : V.intl.string(V.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? V.intl.string(V.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: V.intl.string(V.t.twFU3R), subtext: s ? null : V.intl.string(V.t.oQ9lOh), disabled: !s },
            uncancel: { label: V.intl.string(V.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case _.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = V.intl.string(V.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case _.Dmq.PAUSE_PENDING:
        case _.Dmq.PAUSED:
            a === t$.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = V.intl.string(V.t.LiLRRT)),
                (o.cancel.subtext = V.intl.string(V.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = f.useMemo(
        () =>
            l.isPausedOrPausePending && a === t$.xc.NONE
                ? (0, T.jsx)(ti.Dr, {
                      id: "manage-subscription",
                      label: V.intl.string(V.t.obRG6Y),
                      action: () => (0, na.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gP.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gP.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, T.jsxs)(gG.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": V.intl.string(V.t.ogxXGq),
        onClose: i,
        children: [
            (0, T.jsx)(ti.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sp.openModalLazy)(async () => {
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
                            (0, T.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: _.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gM.I5)(t)
                ? (0, T.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sp.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, T.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, T.jsx)(ti.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sp.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, T.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var gV = n(545934),
    gk = n(548118),
    gw = n(987144),
    gF = n(864310),
    gB = n(290413);
function gz(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gF.A)(t.id);
    return (0, T.jsxs)("div", {
        className: n ?? gB.OA,
        children: [
            (0, T.jsx)(gk.Ay, { className: gB.$f, guild: t, size: gk.Ay.Sizes.MEDIUM }),
            (0, T.jsxs)("div", {
                className: gB.gI,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, T.jsxs)("div", {
                        className: gB.ew,
                        children: [
                            (0, T.jsxs)("div", {
                                className: gB.QW,
                                children: [
                                    (0, T.jsx)(gf._, {
                                        className: gB.Wz,
                                        color: n1.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== _.TVA.NONE &&
                                (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)("div", { className: gB.zk }),
                                        (0, T.jsx)($.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gM.gb)(t.premiumTier, { useLevels: !1 }),
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
function gY(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: gB.Nr,
              children: [
                  (0, T.jsx)(gz, { guild: n }),
                  (0, T.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gf._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, gw.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: _.ZSU.BUTTON_CTA,
                                  objectType: _.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var gX = n(747381);
let gH =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gW(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = f.useRef(null),
        a = (0, gM.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cG.A)(),
        c = f.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === _.TVA.NONE) return "";
                    let n = [
                        V.intl.formatToPlainString(V.t["dLlKX/"], { numEmojiSlots: t$.TG[e].limits.emoji }),
                        V.intl.formatToPlainString(V.t["+ANIfv"], { numStickerSlots: t$.TG[e].limits.stickers }),
                        V.intl.formatToPlainString(V.t["4gt60b"], {
                            numSoundboardSlots: t$.TG[e].limits.soundboardSounds,
                        }),
                        V.intl.formatToPlainString(V.t.XahSjZ, {
                            resolution: t$.TG[e].limits.screenShareQualityResolution,
                            framerate: t$.TG[e].limits.screenShareQualityFramerate,
                        }),
                        V.intl.formatToPlainString(V.t.NbNs7S, { bitrate: t$.TG[e].limits.bitrate / 1e3 }),
                        V.intl.formatToPlainString(V.t.VVKcpn, { filesize: t$.TG[e].limits.fileSize / 1024 / 1024 }),
                        V.intl.formatToPlainString(V.t.TbpCvv, { numVideoStageSeats: t$.TG[e].limits.stageVideoUsers }),
                        V.intl.string(V.t.LDyX3i),
                        V.intl.string(V.t.YtGlPW),
                    ];
                    (e >= _.TVA.TIER_2 && (n.push(V.intl.string(V.t.SztbtN)), n.push(V.intl.string(V.t["3GK91n"]))),
                        e >= _.TVA.TIER_3 && n.push(V.intl.string(V.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return V.intl.formatToPlainString(V.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        g = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oG.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, T.jsxs)("div", {
        className: ic()(gX.iq, { [gX.Mt]: l }),
        children: [
            (0, T.jsxs)("div", {
                className: gX.kd,
                children: [
                    (0, T.jsx)("img", { alt: "", className: gX.bB, src: gH }),
                    A
                        ? (0, T.jsx)($.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)($.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)("div", { className: gX.zk }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: V.intl.formatToPlainString(V.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)("div", { className: gX.zk }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: V.intl.formatToPlainString(V.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, T.jsx)(aE.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, T.jsx)(gU, {
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
                    (0, T.jsx)(n4.D, {
                        innerRef: r,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        className: gX.Mj,
                        ...e,
                        children: (0, T.jsx)(gR.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gK(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, I.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return (0, T.jsxs)("div", {
        className: gX.Nr,
        children: [
            (0, T.jsx)("div", {
                className: gX.MY,
                children:
                    null != l
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(gz, { guild: l, className: gX.OA }),
                                  (0, T.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tX.default)(),
                                              (0, gD.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, T.jsx)("div", {
                              className: gX.OA,
                              children: (0, T.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, T.jsx)(
                    gW,
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
function gZ(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = f.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                gV.A.createFromServer(
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
                if ((!(0, gM.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ap.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, T.jsx)("div", {
        className: gX.kR,
        children: oG.default
            .keys(l)
            .map((e) => (0, T.jsx)(gK, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gq = n(502572),
    gQ = n(983511),
    g$ = n(342744),
    gJ = n(496431);
let g0 = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gJ.A)(n);
    return (0, T.jsx)($.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var g1 = n(731536);
function g2(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gM.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ap.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t$.xc.NONE;
    return 0 === l.length
        ? null
        : (0, T.jsxs)("div", {
              className: g1.Nr,
              children: [
                  (0, T.jsxs)("div", {
                      className: g1.MY,
                      children: [
                          (0, T.jsxs)("div", {
                              className: g1._L,
                              children: [
                                  (0, T.jsxs)("div", {
                                      className: g1.MD,
                                      children: [
                                          (0, T.jsx)("img", { alt: "", className: g1.F8, src: gH }),
                                          (0, T.jsx)("div", {
                                              className: ic()(g1.qS, "theme-dark"),
                                              children: (0, T.jsx)("span", { className: g1.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsxs)("div", {
                                      className: g1.Qp,
                                      children: [
                                          (0, T.jsx)($.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, T.jsx)($.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: V.intl.format(V.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, T.jsx)(gq.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, T.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gf._,
                                      text: V.intl.string(V.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sp.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, T.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gw.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: _.JJy.SETTINGS_PREMIUM,
                                                                      object: _.ZSU.BUTTON_CTA,
                                                                      objectType: _.AnalyticsObjectTypes.BUY,
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
                      (0, T.jsx)(
                          g3,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gM.I5)(e),
                              isCanceled: (0, gM.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g3(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, T.jsx)(g0, { cooldown: u.getTime() })
            : null != d
              ? (0, T.jsx)($.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, T.jsx)($.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = s || l;
    return (0, T.jsxs)("div", {
        className: ic()(g1.iq, { [g1.Mt]: i }),
        children: [
            (0, T.jsxs)("div", {
                className: g1.kd,
                children: [(0, T.jsx)("img", { alt: "", className: g1.bB, src: gH }), t],
            }),
            c &&
                (0, T.jsx)(aE.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, T.jsxs)(gG.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": V.intl.string(V.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, T.jsx)(ti.Dr, {
                                        id: "cancel-boost",
                                        label: V.intl.string(V.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sp.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, T.jsx)(gQ.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, T.jsx)(ti.Dr, {
                                        id: "uncancel-boost",
                                        label: V.intl.string(V.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sp.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, T.jsx)(g$.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, T.jsx)(n4.D, {
                            innerRef: o,
                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                            className: g1.Mj,
                            ...e,
                            children: (0, T.jsx)(gR.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g5 = n(834612);
function g4(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ey.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== t$.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, T.jsxs)("div", {
              className: g5.i,
              children: [
                  (0, T.jsxs)("div", {
                      className: g5.b,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, T.jsx)($.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(gZ, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, T.jsx)(g2, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g6 = n(333722),
    g8 = n(9146);
function g7() {
    return (0, T.jsxs)("div", {
        className: g8.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, T.jsx)("div", {
                className: g8.kR,
                children: g6.s.map((e, t) => {
                    let n = e.icon;
                    return (0, T.jsxs)(
                        "div",
                        {
                            className: g8.Nr,
                            children: [
                                (0, T.jsx)(n, { className: g8.Kk }),
                                (0, T.jsx)($.E, {
                                    className: g8.h_,
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
var g9 = n(847374),
    me = n(232122),
    mt = n(665984);
function mn() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, T.jsxs)("div", {
        className: mt.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, T.jsx)("ul", {
                className: mt.p_,
                children: me.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, T.jsxs)(
                        n4.D,
                        {
                            tag: "li",
                            className: ic()(mt.Aw, { [mt.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, T.jsxs)("div", {
                                    className: mt.k7,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            className: mt.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, T.jsx)(g9.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mt.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsx)($.E, {
                                        className: mt.ZF,
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
var mi = n(182859),
    ms = n(25525),
    ml = n(416763);
function mr() {
    let e = ey.A.getArticleURL(_.MVz.GUILD_SUBSCRIPTIONS);
    return (0, T.jsxs)("div", {
        className: ml.wx,
        children: [
            (0, T.jsxs)("div", {
                className: ml.Qs,
                children: [
                    (0, T.jsxs)("div", {
                        className: ml.B5,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: ml.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(ms.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, T.jsx)($.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, T.jsx)(mi.A, {
                variant: "member",
                className: ml.iO,
                analyticsLocation: {
                    page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: _.JJy.HERO,
                    object: _.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var ma = n(315629),
    mo = n(87719),
    mu = n(961085);
function md() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == e || ap.Ay.hasFreeBoosts(e)) return null;
    let t = ey.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(ma.h, {
        color: "nitro-pink",
        className: mu.vK,
        children: [
            (0, T.jsxs)("div", {
                className: mu.nw,
                children: [
                    (0, T.jsx)("img", { alt: "", className: mu.q3, src: gH }),
                    (0, T.jsxs)("div", {
                        className: mu.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: t$.M4, boostCount: t$.M4 }),
                            }),
                            (0, T.jsxs)("div", {
                                className: mu.xv,
                                children: [
                                    (0, T.jsx)(aa.t, { className: mu.nE }),
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
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
            (0, T.jsx)(j.$, {
                variant: "expressive",
                size: "sm",
                icon: aa.t,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mo.e,
            }),
        ],
    });
}
var mc = n(532991);
function mg() {
    let e = (0, I.bG)([gy.A], () => gy.A.affinities),
        t = (0, I.bG)([gb.Ay], () => gb.Ay.getFlattenedGuildIds()),
        n = f.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, T.jsxs)("div", {
              className: mc.i,
              children: [
                  (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, T.jsx)("div", { className: mc.k, children: n.map((e) => (0, T.jsx)(gY, { guildId: e }, e)) }),
              ],
          });
}
var mm = n(967246);
function mA(e) {
    let { count: t } = e,
        i = ey.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(ma.h, {
        color: "nitro-pink",
        className: mm.vK,
        children: [
            (0, T.jsxs)("div", {
                className: mm.nw,
                children: [
                    (0, T.jsxs)("div", {
                        className: mm.MD,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: mm.F8, src: gH }),
                            (0, T.jsx)("div", {
                                className: ic()(mm.qS, "theme-dark"),
                                children: (0, T.jsx)("span", { className: mm.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mm.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, T.jsxs)("div", {
                                className: mm.xv,
                                children: [
                                    (0, T.jsx)(aa.t, { className: mm.nE }),
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
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
            (0, T.jsx)(j.$, {
                variant: "primary",
                size: "sm",
                icon: gf._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, sp.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, T.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gw.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: _.JJy.SETTINGS_PREMIUM,
                                                object: _.ZSU.BUTTON_CTA,
                                                objectType: _.AnalyticsObjectTypes.BUY,
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
var mE = n(89150);
function mh(e) {
    let { premiumSubscription: t } = e,
        n = (0, I.bG)([gv.A], () => gv.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = (0, I.bG)([gy.A], () => gy.A.affinities),
        r = (0, I.bG)([gb.Ay], () => gb.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, I.bG)([g_.A], () => g_.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cG.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t$.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = ap.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, T.jsxs)("div", {
        className: mE.GO,
        children: [
            (0, T.jsx)(u6.kb, { className: mE.ek }),
            (0, T.jsx)(mr, {}),
            (0, T.jsx)(md, {}),
            g > 0 && (0, T.jsx)(mA, { count: g }),
            d && (0, T.jsx)(gC.A, {}),
            !a && (0, T.jsx)(gL, {}),
            (0, T.jsxs)("div", {
                className: mE.C_,
                children: [
                    (0, T.jsx)(g4, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, T.jsx)(mg, {}),
                    (0, T.jsx)(gN.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, T.jsx)(g7, {}),
                    (0, T.jsx)(mn, {}),
                ],
            }),
        ],
    });
}
var mx = n(819677);
let mS = (0, h.E2)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (oO.hP(), oO.$o(), (0, gI.CD)(), (0, cP.zS)(null, null, _.tF5.DISCOVERY), (0, gI.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, I.cf)([o9.A], () => ({
                    hasFetchedSubscriptions: o9.A.hasFetchedSubscriptions(),
                    premiumSubscription: o9.A.getPremiumTypeSubscription(),
                })),
                n = (0, cM.Y)(),
                i = (0, I.bG)([o7.A], () => o7.A.hasFetchedPaymentSources),
                s = (0, I.bG)([g_.A], () => g_.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = f.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, T.jsx)("div", { className: ic()(mx.kL, mx.Lq), children: (0, T.jsx)(oN.y, {}) })
                : (0, T.jsxs)("div", {
                      className: mx.kL,
                      children: [
                          (0, T.jsx)("div", { className: mx.Tp }),
                          (0, T.jsx)("div", { className: mx.Qs, children: (0, T.jsx)(mh, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mp = (0, h.zZ)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mS] }),
    mT = (0, h.t_)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mp],
    }),
    mf = (0, h.i4)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gf._,
        buildLayout: () => [mT],
    });
var mI = n(153659),
    m_ = n(155984),
    mN = n(357758),
    mC = n(262077),
    my = n(281445),
    mb = n(624479),
    mv = n(626584),
    mj = n(131607),
    mO = n(95035),
    mL = n(196736),
    mR = n(685743),
    mD = n(349085),
    mP = n(342942),
    mG = n(376205),
    mM = n(252589),
    mU = n(758836),
    mV = n(49999),
    mk = n(394107),
    mw = n(439050);
let mF = new mv.A("GameServerSubscriptionsSection");
function mB(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mz(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mY = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mD.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mj.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d0.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mR.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, mP.A)({
                provider: my.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mV.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: S,
            isDanger: p,
        } = (0, I.bG)(
            [o9.A, d2.A],
            () => {
                let e = null != l ? o9.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d2.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, uP.$g)(u, o.priceCurrency) })
                            : null,
                    c = mB(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(mk.default["3aEgK6"], { date: c })
                        : s
                          ? V.intl.formatToPlainString(mk.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(mk.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mz,
        ),
        N = f.useCallback(() => {
            if (null == l) return;
            let e = o9.A.getSubscriptionById(l),
                t = null != e ? mB(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(mk.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(mk.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(mk.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oO.M2(l, s), await oO.hP());
                    } catch (e) {
                        mF.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = f.useCallback(() => {
            if (null == l) return;
            let e = o9.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d2.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uP.$g)(u, o.priceCurrency) : "",
                c = mB(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(mk.default.o96qbc),
                subtitle: V.intl.formatToPlainString(mk.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cP.ur)(r);
                        let t = e.items;
                        (await oO.nV(
                            e,
                            { status: _.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ap.UC)(t, e.currency),
                            s,
                        ),
                            await oO.hP());
                    } catch (e) {
                        mF.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, T.jsxs)("div", {
        className: mw.nM,
        children: [
            (0, T.jsxs)("div", {
                className: mw.M4,
                children: [
                    (0, T.jsxs)("div", {
                        className: mw.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, T.jsx)("img", { className: mw.uP, src: a, alt: "" }),
                            (0, T.jsx)("div", { className: mw.tw }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mw.CR,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, T.jsxs)("div", {
                                          className: mw.CQ,
                                          children: [
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, T.jsx)(n4.D, {
                                                  className: mw.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, T.jsx)(uw.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, T.jsx)(mb.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, T.jsx)(mO.A, { onClick: A, children: V.intl.string(mk.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: mw.Rd,
                children: [
                    (0, T.jsxs)("div", {
                        className: mw.Ff,
                        children: [
                            null != h &&
                                (0, T.jsx)($.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != x &&
                                (p
                                    ? (0, T.jsxs)("div", {
                                          className: mw.ez,
                                          children: [
                                              (0, T.jsx)(iJ.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, T.jsx)($.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    E &&
                        (S
                            ? (0, T.jsx)(j.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: V.intl.string(V.t.iIvF2z),
                                  onClick: C,
                              })
                            : (0, T.jsx)(j.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(V.t["ETE/oC"]),
                                  onClick: N,
                              })),
                ],
            }),
        ],
    });
});
function mX(e) {
    let { servers: t } = e,
        n = (0, mL.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mM.Y)(),
        s = (0, I.bG)([lS.default], () => ap.Ay.canUseShopDiscounts(lS.default.getCurrentUser())),
        l = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, I.yK)([o9.A], () => (0, mG.HY)(t, i, (e) => o9.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !d2.A.isLoadedForSKU(e) && !d2.A.isFetchingForSKU(e));
        e.length > 0 && (0, cP.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tX.default)(), (0, dB.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(mU.G2.GAME_SERVERS)));
    }, []);
    return (0, T.jsxs)("div", {
        className: mw.uW,
        children: [
            (0, T.jsxs)("div", {
                className: mw.wx,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(mk.default.vCzwM7),
                    }),
                    (0, T.jsxs)("div", {
                        className: mw.h_,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(mk.default.y85Eg9),
                            }),
                            n &&
                                (0, T.jsx)(mO.A, {
                                    onClick: a,
                                    children: (0, T.jsx)($.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(mk.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", {
                className: mw.p_,
                children: t.map((e) =>
                    (0, T.jsx)(mY, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mH = n(55766),
    mW = n(696986),
    mK = n(364036);
function mZ(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, T.jsx)(mW.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: mK.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, T.jsx)(mW.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: mK.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mK.RI }),
                    (0, T.jsxs)("div", {
                        className: mK.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: mK.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: mK.h_,
                                children: V.intl.format(V.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(j.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: V.intl.string(V.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var mq = n(872351),
    mQ = n(9113),
    m$ = n(599941),
    mJ = n(384684),
    m0 = n(2242);
let m1 = [];
var m2 = n(885574),
    m3 = n(62010),
    m5 = n(912851),
    m4 = n(182744);
let m6 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, T.jsx)(n4.D, {
        onClick: i ? void 0 : n,
        className: m4.x6,
        children: (0, T.jsxs)("div", {
            className: m4.hQ,
            children: [
                i
                    ? (0, T.jsx)(oN.y, { type: oN.y.Type.PULSING_ELLIPSIS, className: m4.__invalid_spinner })
                    : (0, T.jsx)($.E, { variant: "text-md/medium", className: m4.Pf, children: t }),
                (0, T.jsx)(g9.a, { size: "md", color: "currentColor", className: m4.UE }),
            ],
        }),
    });
};
var m8 = n(465932),
    m7 = n(543767),
    m9 = n(951555),
    Ae = n(790284),
    At = n(636194),
    An = n(624456),
    Ai = n(710144),
    As = n(815332),
    Al = n(162093),
    Ar = n(557506);
function Aa(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tK.GV)(),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = f.useState(!1),
                [i, s] = f.useState(null);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === m0.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === m0.bN.INTANGIBLE),
        A = im()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = V.intl.formatToPlainString(V.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, T.jsx)(sS.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: V.intl.string(V.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: V.intl.string(V.t.F6lUDF), onClick: c, loading: d },
        ],
        title: V.intl.string(V.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, T.jsxs)(q.B, {
            gap: 8,
            children: [
                null != u ? (0, T.jsx)(iK.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, T.jsx)(Al.x, { listingId: i.id, guildId: n.guild_id, className: Ar.P }),
            ],
        }),
    });
}
var Ao = n(319225),
    Au = n(746080),
    Ad = n(883616);
function Ac(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, T.jsxs)("div", {
        className: Ad.L0,
        children: [
            (0, T.jsxs)("div", {
                className: Ad.a5,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: Ad.HU, children: t }),
                    i &&
                        (0, T.jsx)(sg.m, {
                            text: s,
                            children: (0, T.jsx)(m2.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: Ad.Mo,
                            }),
                        }),
                ],
            }),
            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", className: Ad.sx, children: n }),
        ],
    });
}
function Ag(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eY.Ay)(),
        [i] = (0, m7.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, I.yK)([o7.A], () => [o7.A.hasFetchedPaymentSources, o7.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, T.jsx)(m9.A, { subscription: t, currentInvoicePreview: i })
        : (0, T.jsx)(oN.y, {});
}
function Am(e) {
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
        : (0, T.jsx)(su.D, {
              label: V.intl.string(V.t["4neDM+"]),
              children: (0, T.jsx)("div", {
                  className: Ad.__invalid_rowButtons,
                  children: n
                      ? (0, T.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, T.jsxs)(T.Fragment, {
                            children: [
                                !t && !s && (0, T.jsx)(m6, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, T.jsx)(m6, { label: V.intl.string(V.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let AA = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, An.M)(e),
                n = (0, I.bG)([At.A], () => At.A.getSubscriptionListingForPlan(t)),
                i = (0, I.bG)([At.A], () =>
                    null != n ? At.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, I.bG)([sv.A], () => sv.A.getGuild(i?.guild_id)),
                [l, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, m$.XE)();
            f.useEffect(() => {
                l && null != s && null == At.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uP.$g)(t.price, t.currency) : "",
                              s = im()(t.createdAt).format("M/D/YY"),
                              l = t.status === _.Dmq.CANCELED,
                              r = t.status === _.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: n,
                              nextRenewalLabel: l ? V.intl.string(V.t.UAfot2) : V.intl.string(V.t.CVjLcM),
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
        [o, u] = f.useState(!1),
        d = (0, tK.GV)(),
        { analyticsLocations: c } = (0, eY.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m8.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oO.QP(t, c),
                (0, Ao.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: h,
            subscriptionPrice: S,
            memberSince: p,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: y,
        } = a,
        b = n.soft_deleted || null == s || m;
    return (0, T.jsxs)("div", {
        className: Ad.kL,
        children: [
            (0, T.jsx)(Ai.A, {
                onClick: r,
                className: Ad.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, T.jsxs)(T.Fragment, {
                        children: [
                            null != s && (0, T.jsx)(gk.Ay, { guild: s, active: !0, size: gk.Ay.Sizes.MEDIUM }),
                            (0, T.jsxs)("div", {
                                className: Ad.if,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        className: Ad.J5,
                                        children: null != s ? s.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, T.jsxs)("div", {
                                        className: Ad.xp,
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-sm/normal",
                                                className: Ad.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, T.jsx)(m3.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : y
                                                  ? (0, T.jsx)(m3.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, T.jsx)(sg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, T.jsx)("div", {
                                                              className: Ad.qc,
                                                              children: (0, T.jsx)(m3.E, {
                                                                  type: { text: V.intl.string(V.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, T.jsx)(sg.m, {
                                                      text: V.intl.string(V.t.nv1IqK),
                                                      children: (0, T.jsx)("div", {
                                                          className: Ad.Bi,
                                                          children: (0, T.jsx)(m3.E, {
                                                              type: { text: V.intl.string(V.t["sBl3X/"]) },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, T.jsx)(n4.D, {
                                onClick: i(r),
                                "aria-label": V.intl.string(V.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, T.jsx)(g9.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(Ad.D6, { [Ad.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, T.jsxs)("div", {
                      id: d,
                      children: [
                          (0, T.jsx)("div", { className: Ad.yF }),
                          (0, T.jsx)(As.A, { groupListingId: i.id, subscription: t, className: Ad.kE }),
                          (0, T.jsxs)("div", {
                              className: Ad.Zx,
                              children: [
                                  (0, T.jsx)(Ac, { label: C, value: N }),
                                  (0, T.jsx)(Ac, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: S,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, T.jsx)(Ac, { label: V.intl.string(V.t.AOcwWB), value: p }),
                              ],
                          }),
                          (0, T.jsx)(mW.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, T.jsx)(su.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, T.jsx)(Ag, { subscription: t }),
                              }),
                          !b &&
                              (0, T.jsx)(Am, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sp.openModal)((t) => (0, T.jsx)(Aa, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, dB.pX)(_.BVt.CHANNEL(s.id, Au.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tX.default)(),
                                          m5.A.show(
                                              _.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (Ae.A.setState({ subsection: eL.nR }),
                                                      (0, na.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL));
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
var AE = n(661097);
let Ah = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, I.bG)([mJ.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mJ.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? m0.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m0.M_.NONE
                                  : m0.M_.IN_SUBSCRIPTION_SERVER;
                        })([mJ.A]),
                    ) === m0.M_.SUBSCRIBED,
                n = (0, I.bG)([o9.A], () => o9.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o9.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o9.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oO.hP());
                }, [e, t]),
                n ?? m1
            );
        })(),
        { loading: i } = (0, m$.eb)(n);
    return ((0, mQ.A)(oM.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, T.jsx)(oN.y, {})
        : 0 === n.length
          ? null
          : (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: mq.z, variant: "secondary", onClick: t }),
                    (0, T.jsx)(mW.h, { size: 10 }),
                    (0, T.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, T.jsx)("div", {
                            className: AE.A,
                            children: n.map((e) => (0, T.jsx)(AA, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ax = n(327479),
    AS = n(932012);
function Ap(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, T.jsx)(mW.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: AS.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, T.jsx)(mW.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: AS.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AS._e }),
                    (0, T.jsxs)("div", {
                        className: AS.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AS.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: AS.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(Ax.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AT = n(548411),
    Af = n(417098),
    AI = n(143582),
    A_ = n(915043),
    AN = n(631466);
function AC(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = f.useMemo(() => {
            let e = !1;
            return (
                f.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, T.jsxs)("div", {
        className: ic()(AN.iE, t),
        children: [
            (0, T.jsx)("div", { className: ic()(AN.wx, i), children: n }),
            l && (0, T.jsx)("div", { className: AN.Qs, children: s }),
        ],
    });
}
var Ay = n(885996),
    Ab = n(144165),
    Av = n(664121),
    Aj = n(950305),
    AO = n(943775),
    AL = n(123791),
    AR = n(900797),
    AD = n(611643);
let AP = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function AG(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        s = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, T.jsx)(AP.Provider, { value: s, children: t(n) });
}
AG.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = f.useContext(AP),
        l = i ? AR.t : g9.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, T.jsxs)(n4.D, {
        className: ic()(AD.L, t),
        onClick: s,
        children: [
            (0, T.jsx)($.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, T.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AM = n(627363),
    AU = n(243217),
    AV = n(328968),
    Ak = n(163437),
    Aw = n(3432);
function AF(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AB = n(562312),
    Az = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function AY(e) {
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
        } = (0, I.cf)(
            [d2.A, d3.A, AV.A, sv.A],
            () => {
                let e,
                    n = d2.A.get(r),
                    i = null != n ? d3.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AV.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Ak.PJ)(o.skuFlags),
                    d = u && null != s ? sv.A.getGuild(s) : void 0,
                    c = (0, Ak.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d2.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AM.YY)(a),
        x = f.useMemo(() => (null != h ? (0, AO.A)(h, 100) : null), [h]),
        S = g?.deleted ?? !1,
        p = null != g && (0, Ak.Se)(g),
        N = t.status === _.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, eY.Ay)(),
        [b] = (0, m7.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = AF(t.currentPeriodEnd),
        j = 0 === i;
    return (0, T.jsxs)(AC, {
        headerClassName: AB.dL,
        header:
            !1 === j
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsxs)("div", {
                              className: AB.VW,
                              children: [
                                  null != x &&
                                      (0, T.jsx)(Ab._, { src: x.href, imageClassName: AB.Z2, width: 40, height: 40 }),
                                  (0, T.jsxs)("div", {
                                      className: AB.aF,
                                      children: [
                                          (0, T.jsx)(C.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, T.jsx)($.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? V.intl.string(V.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, T.jsx)("div", {
                              className: AB.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, T.jsx)(AZ, {
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
                : (0, T.jsx)(oN.y, { type: oN.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, T.jsx)(AK, {
                    type: "warning",
                    title: p
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, T.jsx)(AK, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, T.jsx)(AK, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, T.jsxs)("div", {
                className: AB.zH,
                children: [
                    (0, T.jsx)(AW, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsxs)("span", {
                                          className: AB.yW,
                                          children: [(0, T.jsx)(Av.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, T.jsxs)("span", {
                                              className: AB._t,
                                              children: [
                                                  (0, T.jsx)($.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, T.jsx)(gk.Ay, { guild: c, size: gk.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, T.jsxs)("span", {
                                  className: AB.yW,
                                  children: [(0, T.jsx)(Aj.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, T.jsx)(AX, { invoicePreview: b, subscriptionPlan: o }),
                    (0, T.jsx)(AW, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: AF(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, T.jsx)(AH, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, T.jsx)(AQ, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: S,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, T.jsx)(Aq, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function AX(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, T.jsx)(AW, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, uP.CE)((0, uP.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, T.jsx)(AW, { title: V.intl.string(V.t.KI7ERx), content: i });
    let l = (0, uP.CE)((0, uP.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, T.jsx)(AW, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, T.jsxs)(T.Fragment, {
            children: [
                (0, T.jsx)($.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, T.jsx)(sg.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, T.jsx)($.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, T.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function AH(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uP.CE)((0, uP.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, T.jsx)(AW, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)($.E, { variant: "text-sm/medium", children: n }),
                    (0, T.jsx)($.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, T.jsx)(AW, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function AW(e) {
    let { title: t, content: n } = e;
    return (0, T.jsxs)("div", {
        className: AB.nM,
        children: [
            (0, T.jsx)($.E, { variant: "text-sm/medium", children: t }),
            (0, T.jsx)($.E, { variant: "text-sm/medium", className: AB.u4, children: n }),
        ],
    });
}
function AK(e) {
    let { type: t, title: n } = e;
    return (0, T.jsx)("div", {
        className: AB.Xm,
        children: (0, T.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function AZ(e) {
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
        c = (0, Ak.Se)(s),
        { analyticsLocations: g } = (0, eY.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, AL.C)(t.id),
        h = (0, I.bG)([d3.A], () => d3.A.getParentSKU(i.skuId), [i.skuId]),
        x = f.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        S = 0 !== x.length;
    async function p() {
        try {
            A(!0);
            let { subscription: e } = await (0, oO.QP)(l, g);
            if (null == e) return;
            (0, sp.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, T.jsx)(t, { ...n, storeListing: i, subscription: AU.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, T.jsxs)("div", {
        className: AB.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, T.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.QtMnkW),
                        onClick: p,
                        loading: m,
                    })
                  : (0, T.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t["E8G/tr"]),
                        onClick: function () {
                            (0, sp.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, T.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t.R74ZBR),
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
function Aq(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, T.jsx)(AG, {
        children: (e) =>
            (0, T.jsxs)("div", {
                className: AB.PX,
                children: [
                    (0, T.jsxs)("div", {
                        className: AB.wV,
                        children: [
                            e && (0, T.jsx)($.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, T.jsx)(AG.Toggle, {
                                className: AB.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, T.jsx)(Ay.FY, { header: i, icon: (0, Aw.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function AQ(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, T.jsx)("div", {
                className: AB.Ji,
                children: (0, T.jsx)(su.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, T.jsx)(oN.y, { type: oN.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, T.jsx)("div", {
                  className: AB.Ji,
                  children: (0, T.jsxs)(Af.$T, {
                      color: Af.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, T.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, T.jsx)("div", {
                  className: AB.Ji,
                  children: (0, T.jsx)(su.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, T.jsx)(m9.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var A$ = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c);
n(938796);
var AJ = n(38405);
let A0 = (0, I.UT)(d2.A, {
    getQueryId: _.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d2.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AJ.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cP.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var A1 = n(240248),
    A2 = n(237218),
    A3 = n(763064);
function A5(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, T.jsx)("button", {
                className: A3.x6,
                onClick: () => l((e) => !e),
                children: (0, T.jsxs)($.E, {
                    className: A3.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        s
                            ? (0, T.jsx)(AR.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, T.jsx)(g9.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = f.useState(null),
        c = f.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    f.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, T.jsxs)("div", {
            children: [
                (0, T.jsx)($.E, {
                    ...i,
                    className: A3.Qs,
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
var A4 = n(920352);
function A6(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, A2.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = A0(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ap._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, T.jsxs)(AC, {
              className: ic()(A4.iE, i),
              header: (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsxs)("div", {
                          className: A4.qd,
                          children: [
                              null != a &&
                                  (0, T.jsx)(Ab._, { src: a.href, imageClassName: A4.rW, width: 48, height: 48 }),
                              (0, T.jsxs)("div", {
                                  children: [
                                      (0, T.jsx)(C.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, T.jsx)($.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, A1.uJ)(r) &&
                      (0, T.jsx)("div", {
                          className: A4.h_,
                          children: (0, T.jsx)(A5, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, T.jsx)("div", {
                          className: A4.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, T.jsx)(Ay.FY, { header: n, icon: (0, Aw.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A8 = n(185438),
    A7 = n(683380);
function A9(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AO.A)(t, 100),
        u = (0, Ak.PJ)(r.flags),
        d = u ? Av.R : Aj.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, I.bG)([sv.A], () => (u && null != g ? sv.A.getGuild(g) : void 0), [g, u]),
        A = (0, I.bG)(
            [d3.A],
            () => {
                if (null != a) return d3.A.get(a);
            },
            [a],
        ),
        E = AF(n.currentPeriodEnd);
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsxs)("div", {
                className: A7.wx,
                children: [
                    null != o && (0, T.jsx)(Ab._, { src: o.href, imageClassName: A7.Z2, width: 48, height: 48 }),
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, T.jsxs)("div", {
                                className: A7.p4,
                                children: [
                                    (0, T.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: A7.N4,
                                        children: [(0, T.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, T.jsxs)(T.Fragment, {
                                            children: [
                                                (0, T.jsx)($.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, T.jsxs)("span", {
                                                    className: A7.vP,
                                                    children: [
                                                        (0, T.jsx)(gk.Ay, { guild: m, size: gk.Ay.Sizes.SMOL }),
                                                        (0, T.jsx)(C.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: V.intl.format(V.t["7ZD8p1"], {
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
            (0, T.jsx)(AG, {
                children: (e) =>
                    (0, T.jsxs)("div", {
                        className: A7._B,
                        children: [
                            (0, T.jsx)($.E, { variant: "text-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)($.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, T.jsx)($.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, T.jsx)(AG.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, T.jsxs)("div", {
                className: A7.x0,
                children: [
                    (0, T.jsx)(A6, {
                        storeListing: i,
                        className: A7.o3,
                        cta: (0, T.jsxs)("div", {
                            className: A7.cJ,
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, T.jsx)($.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, T.jsx)(
                                  A6,
                                  {
                                      storeListing: e,
                                      cta: (0, T.jsx)($.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, T.jsx)(Ee, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function Ee(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A8.A)({
            analyticsLocation: _.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, T.jsx)(A6, {
        storeListing: t,
        cta: (0, T.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: s }),
    });
}
class Et extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, T.jsxs)(Af.$T, {
                  color: Af.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      V.intl.format(V.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function En(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = f.useState({ route: A$.HOME }),
        { route: l } = i;
    function r() {
        s({ route: A$.HOME });
    }
    let a = (e) => {
            (s({ route: A$.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Az.LOADING })),
                (0, AI._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Az.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Az.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, A_.E)(),
        c = d !== A_.mJ.LOADED;
    switch (l) {
        case A$.HOME:
            return (0, T.jsx)(T.Fragment, {
                children: t.map((e) =>
                    (0, T.jsx)(
                        Et,
                        {
                            subscription: e,
                            children: (0, T.jsx)(AY, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Az.LOADING : (o[e.id] ?? Az.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case A$.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, T.jsx)(A9, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(l);
    }
}
var Ei = n(707989);
function Es(e) {
    let { onGoBack: t } = e,
        n = (0, I.yK)(
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
        [i, s] = f.useState();
    return (
        null == i && (i = (0, T.jsx)(El, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, T.jsxs)("div", {
            children: [
                i,
                (0, T.jsx)("div", {
                    className: Ei.A,
                    children: (0, T.jsx)(En, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, T.jsx)(El, {
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
function El(e) {
    let { onBack: t, title: n } = e;
    return (0, T.jsxs)("div", {
        className: Ei.D,
        children: [
            (0, T.jsx)(sd.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, T.jsx)(AT.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, T.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Er = n(366999),
    Ea = n(391659);
function Eo(e) {
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
        ? ((t = V.intl.string(gu.default["/S02sx"])), (n = V.intl.string(gu.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === t$.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ic()({ [Ea.Hs]: i, [Ea.mT]: !i }),
        d = ic()({ [Ea.CQ]: i, [Ea.ZM]: !i }),
        c = ic()({ [Ea.EM]: !i });
    return (0, T.jsxs)("div", {
        className: Ea.r6,
        children: [
            (0, T.jsxs)("div", {
                className: Ea.Nv,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, T.jsx)($.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, T.jsx)("div", {
                    className: Ea.ZS,
                    children: (0, T.jsx)("div", {
                        className: u,
                        children: (0, T.jsx)($.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Eu = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ap.kX)(t),
        r = l.length > 0,
        a = (0, Er.Ay)(t.endsAt, Er.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, T.jsx)("div", {
        children: (0, T.jsxs)("div", {
            className: ic()(n, Ea.f8),
            children: [
                (0, T.jsx)("div", {
                    className: Ea.J_,
                    children: (0, T.jsxs)("div", {
                        className: Ea.Bh,
                        children: [
                            (0, T.jsx)("div", {
                                className: Ea.xt,
                                children: (0, T.jsx)(aa.t, { size: "md", color: "white", className: Ea.T8 }),
                            }),
                            (0, T.jsx)("div", {
                                className: Ea.pt,
                                children: (0, T.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, T.jsx)($.E, {
                                className: Ea.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, T.jsx)(Eo, {
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
var Ed = n(983048);
function Ec(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, I.yK)([d2.A], () => [d2.A.get(i), null != l ? d2.A.get(l.planId) : null]);
    if (null == o || ap.Ay.getInterval(i).intervalType !== t$.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ap.z4)(i),
        m = ap.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gu.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === _.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ap._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, T.jsxs)("div", {
        className: Ea.Bh,
        children: [
            (0, T.jsx)("div", {
                className: ic()({
                    [Ea.bY]: g,
                    [Ea.sr]: o.skuId === t$.pe.TIER_0,
                    [Ea.lP]: o.skuId === t$.pe.TIER_1,
                    [Ea.eb]: o.skuId === t$.pe.TIER_2,
                }),
                children: g
                    ? (0, T.jsx)(gf._, { size: "md", color: "currentColor", className: Ea.Kk })
                    : (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: Ea.Kk }),
            }),
            (0, T.jsxs)("div", {
                className: Ea.pt,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, T.jsx)(C.D, {
                            className: Ea.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, T.jsx)($.E, {
                className: Ea.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Eg = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, I.yK)([dz.A], () => dz.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, I.bG)([o9.A], () => o9.A.getPremiumSubscription()),
        r = (0, I.bG)([o9.A], () => null == o9.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t$.gD.PREMIUM_MONTH_TIER_1),
        o = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)("div", {
                className: ic()(t, Ea.xF, Ea.J_),
                children: Object.keys(i).map((e) =>
                    (0, T.jsx)(
                        Ec,
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
                (0, T.jsxs)("div", {
                    children: [
                        (0, T.jsx)($.E, {
                            className: Ea.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, T.jsx)(Ed.i, {}),
                    ],
                }),
        ],
    });
};
var Em = n(902782);
function EA(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        [l] = (0, m7.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Em.r : Em.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ap.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d2.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, uP.$g)(l.total, l.currency);
    return (
        u.interval === t$.WT.YEAR
            ? (t = V.intl.format(V.t["jPz/39"], {
                  price: d,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : u.interval === t$.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? V.intl.format(V.t.m27GpI, {
                            price: d,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                        })
                      : V.intl.format(V.t["9xf5Vx"], {
                            price: d,
                            termsUrl: _.X7G.TERMS,
                            paidURL: _.X7G.PAID_TERMS,
                            privacyUrl: _.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, T.jsx)($.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function EE(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, T.jsx)(EA, { subscription: t, withOverheadSeparator: n });
}
var Eh = n(580892),
    Ex = n(689255);
let ES = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function Ep() {
    return (0, T.jsx)(oU.Z, {
        className: Ex.wb,
        type: oU.Z.Types.CUSTOM,
        children: (0, T.jsxs)(sN.A, {
            align: sN.A.Align.CENTER,
            children: [
                (0, T.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: Ex.pV }),
                (0, T.jsx)("span", { className: Ex.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function ET(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mN._)(e, t));
}
function Ef() {
    let e = (0, I.bG)([dz.A], () => dz.A.getForApplication(t$.tv), [], ET);
    return (
        f.useEffect(() => {
            (0, cm.LM)(t$.tv);
        }, []),
        (0, T.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && ap.Ay.hasAccountCredit(e)
                    ? (0, T.jsx)(Eg, { className: Ex.fX, entitlements: e })
                    : (0, T.jsx)(Ep, {}),
        })
    );
}
function EI() {
    return (0, T.jsx)("hr", { className: Ex.hr });
}
let E_ = function () {
        var e;
        let t = (0, I.bG)([o9.A], () => o9.A.getPremiumTypeSubscription()),
            n = (0, mC.A)({ subscriptionFilter: (e) => Eh.Hy.has(e.status) }),
            i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, I.bG)(
                [o7.A],
                () => (null != t && null != t.paymentSourceId ? o7.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, I.bG)([o9.A], () => o9.A.hasFetchedSubscriptions()),
            a = (0, I.bG)([oD.A], () => oD.A.isBusy),
            o = (0, cM.Y)(),
            u = Ae.A.useField("subsection"),
            d = Ae.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? ES[u] : x.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, I.bG)([o9.A], () => o9.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, I.bG)(
                [o9.A],
                () =>
                    Object.values(o9.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === _.rzx.GUILD)
                        .filter((e) => e.status !== _.Dmq.ENDED).length,
            ),
            A = (0, I.bG)([o9.A], () =>
                Object.values(o9.A.getSubscriptions() ?? {}).some((e) => e.type === _.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mH.f)({ enabled: A }),
            h = (0, I.yK)([o9.A], () => (0, mG.eP)(E, (e) => o9.A.getSubscriptionById(e)), [E]),
            S = (0, cG.A)({ forceFetch: !0 }),
            p = (0, cw.ds)(),
            N = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(p && !(S.unactivatedUnits.length > 0)) &&
                (S.fractionalState !== t$.xc.NONE || S.unactivatedUnits.length > 0);
        return (f.useEffect(() => {
            d &&
                r &&
                o &&
                h.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                Ae.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, cP.zS)(),
                oO.hP(),
                (0, gI.CD)(),
                oO.$o(),
                function () {
                    Ae.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, T.jsx)(oE.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, T.jsx)(Ah, { onGoBack: () => Ae.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, T.jsx)(Es, { onGoBack: () => Ae.A.setState({ subsection: null }) })
                    : (0, T.jsx)("div", {
                          className: Ex.kL,
                          children: (0, T.jsxs)("div", {
                              className: Ex.Qs,
                              children: [
                                  s ? (0, T.jsx)(Eh.Sb, {}) : null,
                                  null != t
                                      ? (0, T.jsx)(Eh.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, T.jsx)(Eh.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, T.jsxs)("section", {
                                          children: [
                                              (0, T.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: Ex.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-md/normal",
                                                  className: Ex.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: ey.A.getArticleURL(
                                                          _.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, T.jsx)(Eu, {
                                                  className: Ex.fX,
                                                  fractionalPremiumInfo: S,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, T.jsx)(Ef, {}),
                                  m > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(EI, {}),
                                              (0, T.jsx)(mZ, {
                                                  count: m,
                                                  onClickManageSubscription: () => Ae.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(EI, {}),
                                              (0, T.jsx)(Ap, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (Ae.A.setState({ subsection: eL.PZ }),
                                                          td.default.track(
                                                              _.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  h.length > 0 &&
                                      (0, T.jsxs)("div", {
                                          ref: c,
                                          children: [(0, T.jsx)(EI, {}), (0, T.jsx)(mX, { servers: h })],
                                      }),
                                  (0, T.jsx)(EI, {}),
                                  null != t ? (0, T.jsx)(EE, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, T.jsx)("div", { className: ic()(Ex.kL, Ex.Lq), children: (0, T.jsx)(oN.y, {}) });
    },
    EN = (0, h.E2)(x.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, T.jsx)(E_, {}),
    }),
    EC = (0, h.zZ)(x.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [EN],
    }),
    Ey = (0, h.t_)(x.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [EC] }),
    Eb = (0, h.i4)(x.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mI.L,
        usePersistentBadge: function () {
            let e = (0, m_.l)();
            return f.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, T.jsx)(iJ.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [Ey],
    }),
    Ev = (0, h.WI)(x.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gT, mf, Eb, cv, de],
    });
var Ej = n(540999),
    EO = n(306471),
    EL = n(964355),
    ER = n(172272);
let ED = (0, h.zD)(x.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isAxeEnabled),
        setValue: (e) => (0, ro.x)({ axeEnabled: e }),
    }),
    EP = (0, h.zD)(x.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ro.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var EG = n(276086),
    EM = n(354328);
let EU = (0, h.zD)(x.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EM.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, EG.L)("highlight_mana_components", e);
        },
    }),
    EV = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EM.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, EG.L)("highlight_mana_text_overrides", e);
        },
    }),
    Ek = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EM.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, EG.L)("highlight_mana_text", e);
        },
    }),
    Ew = (0, h.zD)(x.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EM.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, EG.L)("highlight_void_toggleables", e);
        },
    }),
    EF = (0, h.sN)(x.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: ER.YR,
        markers: Array.from({ length: ER.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => ER.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            ER.Or.getState().setHorizontalSpacing(e);
        },
    }),
    EB = (0, h.zD)(x.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ro.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ez = (0, h.sN)(x.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: ER.YR,
        markers: Array.from({ length: ER.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => ER.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            ER.Or.getState().setVerticalSpacing(e);
        },
    }),
    EY = (0, h.zZ)(x.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [EP, EB, EF, Ez, EU, Ek, EV, Ew, ED],
    });
var EX = n(246605),
    EH = n(274184);
function EW(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = f.useState(s ?? ""),
        u = f.useRef(null),
        [d, c] = f.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        f.useEffect(() => g, []),
        (0, T.jsx)(su.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, T.jsx)(sT.k, {
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
let EK = (0, h.E2)(x.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, I.bG)([EH.Ay], () => EH.Ay.getActionTriggeredSurveyOverride());
            return (0, T.jsx)(EW, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EX.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    EZ = (0, h.zD)(x.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var Eq = n(396478),
    EQ = n(173936),
    E$ = n(103557),
    EJ = n(414079),
    E0 = n(148810),
    E1 = n(380610),
    E2 = n(986238),
    E3 = n(428524),
    E5 = n(252149),
    E4 = n(221851);
let E6 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E8 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E7(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E9 extends f.Component {
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
        return (0, T.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: ic()(E3.oS, E4.SX, E5.N, E3.nM),
            children: [
                (0, T.jsx)(EJ.A, {
                    className: ic()(E3.lL, { [E3.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, T.jsxs)(sN.A, {
                    className: E4.QB,
                    children: [
                        (0, T.jsx)(sN.A.Child, {
                            basis: "50%",
                            children: (0, T.jsx)(so.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E8,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, T.jsx)(sN.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, T.jsx)(sT.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, T.jsxs)(sN.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, T.jsx)($.E, {
                                className: E3.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, T.jsxs)($.E, {
                            variant: "text-sm/normal",
                            className: E3.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, T.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class he extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, E1.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: K().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !K().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return K().without(E6, ...t);
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
        this.setState({ buildOverrides: K().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, E0.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: K().cloneDeep(e),
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
        (0, sp.openModal)((t) => (0, T.jsx)(ht, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, T.jsx)(Eq.pp, {
            theme: nF.A.theme,
            className: ic()(E4.eT, E4.SX),
            children: (0, T.jsx)(Eq.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, T.jsx)(
                      E9,
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
            : (0, T.jsx)(j.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, T.jsx)(sg.m, {
                  text: "Generate Public Link",
                  children: (0, T.jsx)(sd.K, {
                      variant: "secondary",
                      icon: EQ.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, T.jsxs)(T.Fragment, {
            children: [
                (0, T.jsx)(j.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: E7(t ?? {}),
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
            ? (0, T.jsx)(oN.y, { className: E4.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E7(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, T.jsx)($.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, T.jsx)(n3.n, {
            children: (0, T.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, T.jsx)(so.l, {
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
                    (0, T.jsxs)(l2.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class ht extends f.Component {
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
            t = await (0, E0.SB)(e);
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
        return E7(this.props.buildOverrides ?? {});
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
            d = E2.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, T.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, T.jsx)(so.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: E2.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(so.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: E2.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, T.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, T.jsx)(sT.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iH.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, T.jsx)(so.l, {
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
                    : (0, T.jsx)(E$.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(E$.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, T.jsx)(t4.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, T.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, T.jsx)(iK.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, T.jsx)(sS.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, T.jsx)(ci.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hn = (0, h.E2)(x.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: he });
var hi = n(256311),
    hs = n(883600);
let hl = (0, h.E2)(x.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, I.bG)([hs.A], () => hs.A.overrideId());
        async function t(e) {
            let t = hs.A.getChangelog(e, "en-US");
            return null != t ? t : ((await hi.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, T.jsx)(EW, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hi.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hr = n(506774);
let ha = new Date("2018-01-01"),
    ho = (0, h.Tf)(x.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oG.default.fromTimestamp(ha.getTime()),
        onClick: () => (hr.w.set("lastChangeLogDate", ha), U.pK.updateSetting(oG.default.fromTimestamp(ha.getTime()))),
    }),
    hu = (0, h.zD)(x.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, I.bG)([ru.default], () => ru.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, I.bG)(
                [ru.default],
                () => ru.default.disableAppCollectionsCache || ru.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ro.x)({ disableAppCollectionsCache: e }),
    }),
    hd = (0, h.zD)(x.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isForcedCanary),
        setValue: (e) => {
            (0, ro.x)({ canary: e });
        },
    }),
    hc = (0, h.zD)(x.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.sourceMapsEnabled),
        setValue: (e) => (0, ro.x)({ sourceMapsEnabled: e }),
    }),
    hg = (0, h.zD)(x.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ro.x)({ onlyShowPreviewAppCollections: e }),
    });
var hm = n(10094),
    hA = n(683760);
let hE = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t$.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t$.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t$.PremiumTypes.TIER_2 },
    ],
    hh = (0, h.Hn)(x.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hE,
        clearable: !0,
        useValue: () =>
            (0, I.bG)([hA.A], () => {
                let e = hA.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hm.O)(null, void 0)
                : null === e
                  ? (0, hm.O)(void 0, void 0)
                  : (0, hm.O)(0 === e ? null : e, void 0);
        },
    });
var hx = n(374042);
let hS = (0, h.E2)(x.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, I.bG)([EH.Ay], () => EH.Ay.getSurveyOverride());
            return (0, T.jsx)(EW, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => EX.xr(e),
                fetchOverride: (e) => (0, hx.B)(e, !0) ?? null,
            });
        },
    }),
    hp = (0, h.zZ)(x.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hh, hS, EK, hl, ho, hd, EZ, hg, hu, hc, hn],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hT = (0, h.zD)(x.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ro.x)({ logAnalyticsEvents: e }),
    }),
    hf = (0, h.zD)(x.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ro.x)({ logGatewayEvents: e }),
    }),
    hI = (0, h.zD)(x.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.preventPopoutClose),
        setValue: (e) => (0, ro.x)({ preventPopoutClose: e }),
    }),
    h_ = (0, h.zD)(x.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.logKeyboardMismatches),
        setValue: (e) => (0, ro.x)({ logKeyboardMismatches: e }),
    }),
    hN = (0, h.zD)(x.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ro.x)({ logOverlayEvents: e }),
    }),
    hC = (0, h.zD)(x.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingQuestEvents),
        setValue: (e) => (0, ro.x)({ logQuestEvents: e }),
    }),
    hy = (0, h.zD)(x.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isTracingRequests),
        setValue: (e) => (0, ro.x)({ trace: e }),
    }),
    hb = (0, h.zZ)(x.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hf, hN, hy, hT, h_, hI, hC] }),
    hv = (0, h.t_)(x.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hp, hb, EY],
    }),
    hj = (0, h.i4)(x.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: EO.V,
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
                } = (0, I.cf)([ru.default, Ej.A, lS.default], () => ({
                    layoutDebuggingEnabled: ru.default.layoutDebuggingEnabled,
                    isDeveloper: Ej.A.isDeveloper,
                    isLoggingGatewayEvents: ru.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ru.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ru.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ru.default.isTracingRequests,
                    isForcedCanary: ru.default.isForcedCanary,
                    isSourceMapsEnabled: ru.default.sourceMapsEnabled,
                    isAxeEnabled: ru.default.isAxeEnabled,
                    preventPopoutClose: ru.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ru.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ru.default.disableAppCollectionsCache,
                    isStaff: lS.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, ER.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = ER.Or.getState(),
                h = U.HZ.useSetting();
            return t
                ? [
                      (0, T.jsxs)(
                          ti.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, na.openUserSettings)(x.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: h,
                                          action: () => {
                                              U.HZ.updateSetting(!h);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, ro.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, ro.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, ro.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, T.jsxs)(
                          ti.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, na.openUserSettings)(x.X.LOGGING);
                              },
                              children: [
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, ro.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, ro.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, ro.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, ro.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, ro.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, T.jsxs)(
                          ti.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, na.openUserSettings)(x.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, ro.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, T.jsx)(
                                      ti.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, ro.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, T.jsx)(EL.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: ER.YR,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, T.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, T.jsx)(EL.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: ER.YR,
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
                          ? (0, T.jsx)(
                                ti.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lx() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hv],
    });
var hO = n(127062),
    hL = n(25044),
    hR = n(80703),
    hD = n(123292),
    hP = n(683438),
    hG = n(890856),
    hM = n(100392),
    hU = n(102609),
    hV = n(271478),
    hk = n(386976),
    hw = n(257433),
    hF = n(32523),
    hB = n(96919),
    hz = n(688151),
    hY = n(863763);
function hX(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = f.useState(s),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, I.bG)([d0.default], () => d0.default.getId()),
        c = (0, I.bG)([d0.default], () => {
            let e = d0.default.getInstallationForTracking();
            return null == e ? null : (0, hR.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hw.iN)(t, g),
        A = (0, hw.Fm)(t, g),
        E = (0, I.yK)([rh.A], () =>
            K()
                .sortBy(rh.A.getRecentExposures(hz.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = f.useCallback(
            (e) => {
                (0, uv.C)((0, hM.yA)(n), () => {
                    ((0, lg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, T.jsx)(hG.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hY.DD,
                children: [
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uv.p5 &&
                                        (0, T.jsx)(n4.D, {
                                            onClick: h,
                                            children: (0, T.jsx)(EQ.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", {
                        className: hY.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, T.jsx)("div", { className: hY.Os, children: x });
    let S = "";
    return (
        (S =
            t.system === hU.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hz.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, T.jsxs)("div", {
            className: hY.Os,
            children: [
                x,
                (0, T.jsx)("div", {
                    children: (0, T.jsx)(hV.g, {
                        label: t.system === hU.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, T.jsx)("div", {
                    className: hY.h_,
                    children:
                        null == A
                            ? (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, T.jsxs)("div", {
                          children: [
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hY.id,
                                  children: "Server Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hY.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hY.id,
                                  children: "Override Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hY.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hY.id,
                                  children: "Recent Exposures",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hY.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, T.jsx)("div", {
                          className: hY.id,
                          children: (0, T.jsx)(hD.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, T.jsx)(sl.c, { className: hY.yF }),
            ],
        })
    );
}
function hH(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, I.bG)([rh.A], () => rh.A.getLoadedGuildExperiment(n)),
        d = (0, I.bG)([rh.A, sv.A, iq.A], () => {
            if (t.system === hU.l5.LEGACY) return null == rh.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, I.yK)([rh.A], () =>
            K()
                .sortBy(rh.A.getRecentExposures(hz.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, I.yK)([d0.default, sv.A, rh.A, iq.A], () => {
            let e = t.system === hU.l5.LEGACY,
                i = t.name,
                s = d0.default.getId(),
                l = K().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rh.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hz.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hz.RE.NOT_ELIGIBLE);
                (l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`));
            }
            let o = K()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== hU.l5.LEGACY,
        E = (0, I.yK)([sv.A], () => K().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = f.useState(() => sj.A.getGuildId() ?? sj.A.getLastSelectedGuildId()),
        S = E.find((e) => e.id === h)?.name,
        p = (0, I.bG)(
            [iq.A],
            () => {
                if (A && null != h) return iq.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, I.bG)([iq.A, d0.default], () => {
            if (!A) return;
            let e = d0.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, T.jsx)(n4.D, {
            onClick: o,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hY.DD,
                children: [
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)("span", { children: t.title }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", { className: hY.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, T.jsxs)("div", {
              className: hY.Os,
              children: [
                  C,
                  (0, T.jsx)(hV.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, T.jsx)("div", {
                          className: hY.h_,
                          children: (0, T.jsx)(so.l, {
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
                  (0, T.jsx)("div", {
                      className: hY.h_,
                      children: d
                          ? (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hU.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, T.jsxs)("div", {
                          children: [
                              (0, T.jsxs)($.E, {
                                  variant: "text-lg/medium",
                                  className: hY.id,
                                  children: ["Server Descriptor", null != S ? ` (${S})` : ""],
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hY.AS,
                                  children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hY.id,
                                  children: "Client Eligibility",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hY.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hY.id,
                                    children: "Guild Assignments",
                                }),
                                (0, T.jsx)($.E, { variant: "code", className: hY.AS, children: g }),
                                t.system === hU.l5.LEGACY &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-lg/medium",
                                                className: hY.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, T.jsx)($.E, {
                                                variant: "code",
                                                className: hY.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hY.id,
                                    children: "Override Descriptor",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hY.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hY.id,
                                    children: "Recent Exposures",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hY.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, T.jsx)("div", {
                            className: hY.id,
                            children: (0, T.jsx)(hD.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, T.jsx)(sl.c, { className: hY.yF }),
              ],
          })
        : (0, T.jsx)("div", { className: hY.Os, children: C });
}
let hW = (0, h.E2)(x.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hk.op)(),
                { experiments: n, overridesInfo: i } = (0, hF.hI)(),
                s = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, I.bG)([d0.default], () => {
                    let e = d0.default.getInstallationForTracking();
                    return null == e ? null : (0, hR.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, hB.oC)((0, hB.R3)((0, hB.Fm)(s), l), a);
            return (0, T.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, T.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, T.jsxs)($.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uv.p5 &&
                                    (0, T.jsx)(hD.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uv.C)(r, () => {
                                                (0, lg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, T.jsx)(hP.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hH : hX;
                              return (0, T.jsx)(
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
                        : (0, T.jsx)("div", {
                              className: hY.p$,
                              children: (0, T.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    hK = (0, h.zZ)(x.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hW] }),
    hZ = (0, h.t_)(x.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hK] }),
    hq = (0, h.i4)(x.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hO.c,
        useMenu: hL.A,
        buildLayout: () => [hZ],
    }),
    hQ = (0, h.WI)(x.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => Ej.A.isDeveloper,
        buildLayout: () => [hq, hj],
    });
var h$ = n(682348),
    hJ = n(871633),
    h0 = n(751075),
    h1 = n(843402);
let h2 = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h3() {
    let e = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!1)),
        t = (0, I.bG)([i4.Ay], () => h2(...i4.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, h1.a2)(), h1.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, hJ.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h5(e) {
    let { gameHistory: t } = h3();
    return {
        namedGames: f.useMemo(
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
function h4(e) {
    let { namedGames: t, totalCount: n } = h5(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h6() {
    let { namedGames: e } = h5(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        AM.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, s] = (0, I.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, T.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: h0.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, T.jsx)(i7.A, { game: s, size: i7.M.MEDIUM }), shape: h0.e0.ROUNDED } : null,
          };
}
let h8 = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h4(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h6();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hJ.n1)(e))) && (0, nh.xl)(),
    }),
    h7 = (0, h.gN)(x.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h8] });
var h9 = n(533440),
    xe = n(406535),
    xt = n(57129);
let xn = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(xt.default.A0FVCV),
        useSubtitle: () => V.intl.string(xt.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xi = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(xt.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(xt.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xs = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [h9._, xn, xi, h7],
    }),
    xl = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: x.X.DATA_AND_PRIVACY_PANEL,
    }),
    xr = (0, h.gN)(x.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xl] });
var xa = n(365258);
let xo = (0, h.Qx)(x.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(xt.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(xt.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(xt.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(xt.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, xa.g8)(t, e);
        if (null == i) return;
        let s = (0, xa.Xc)(e);
        (0, sp.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, T.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xu = n(498642),
    xd = n(573435),
    xc = n(260509),
    xg = n(771810);
function xm(e) {
    let { guild: t, size: n } = e,
        i = (0, xc.Iv)(t, n, !1, !0),
        s = (0, xc.Rb)(t);
    return null != i
        ? (0, T.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, T.jsx)("div", {
              className: xg.F,
              children: (0, T.jsx)($.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xA(e) {
    let { guild: t, size: n } = e;
    return (0, T.jsx)(xd.Ay, {
        className: xg.z,
        mask: xd.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, T.jsx)(xm, { guild: t, size: n }),
    });
}
var xE =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let xh = {
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
var xx = n(618118);
function xS(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, I.bG)([xu.A], () => xu.A.getMemberCount(t.id));
    return (0, T.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, T.jsx)("div", { className: xx.FO, children: (0, T.jsx)(xA, { guild: t, size: 48 }) }),
            (0, T.jsx)("div", {
                className: xx.QH,
                children: (0, T.jsx)(t4.d, {
                    label: t.name,
                    description: V.intl.format(V.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let xp = function (e) {
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
            let [e, t] = (0, f.useState)(""),
                [n, i] = (0, f.useState)("server-order"),
                s = (0, I.bG)([gb.Ay], () => gb.Ay.getFlattenedGuildIds()),
                l = (0, I.bG)([sv.A], () => sv.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = U.Pw.useSetting(),
                [o, u] = (0, f.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await U.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, f.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, f.useState)(() => xh[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xh[e](r, a)), i(e));
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
        m = (0, f.useId)(),
        A = (0, f.useRef)(null),
        E = (0, f.useMemo)(
            () => [
                { id: xE.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: xE.SERVER_ORDER },
                { id: xE.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: xE.RECENTLY_JOINED },
                { id: xE.ACTIVITY_SHARING_ON, label: V.intl.string(xt.default.ZI51JZ), value: xE.ACTIVITY_SHARING_ON },
                {
                    id: xE.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(xt.default["+kxafn"]),
                    value: xE.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, T.jsxs)("div", {
        className: xx.iE,
        children: [
            t,
            (0, T.jsxs)("div", {
                className: xx.N1,
                children: [
                    (0, T.jsx)(hP.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: V.intl.string(V.t["H+nRYw"]),
                        "aria-label": V.intl.string(V.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, T.jsxs)("div", {
                            className: xx.gO,
                            children: [
                                (0, T.jsx)(aE.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, T.jsx)(gG.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": V.intl.string(V.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, T.jsx)(ti.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, T.jsx)(
                                                        ti.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (td.default.track(
                                                                    _.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, T.jsxs)(n4.D, {
                                            ...e,
                                            innerRef: A,
                                            className: xx.Ku,
                                            children: [
                                                (0, T.jsx)($.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, T.jsx)(g9.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, T.jsx)(hD.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? V.intl.string(V.t["7lxcLO"]) : V.intl.string(V.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, T.jsx)(sm.A, {
                "aria-live": "polite",
                role: "region",
                children: V.intl.format(xt.default.EvzDff, { count: n.length }),
            }),
            (0, T.jsxs)("ul", {
                className: xx.X1,
                id: m,
                "aria-label": V.intl.string(V.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, T.jsx)("div", {
                            className: xx.pb,
                            children: (0, T.jsx)($.E, {
                                className: xx.R$,
                                variant: "text-lg/medium",
                                children: V.intl.string(V.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, T.jsx)(
                            xS,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xT = n(68322);
let xf = (0, h.E2)(x.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(xt.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, T.jsx)("div", {
                      className: xT.l,
                      children: (0, T.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(xt.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, T.jsx)(xp, { notice: e });
        },
    }),
    xI = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [xo, xf, xr],
    }),
    x_ = (0, h.zD)(x.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(xt.default.khuuzv),
        useSubtitle: () => V.intl.string(xt.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    xN = (0, h.E2)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, T.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, T.jsx)(
                            $.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    xC = (0, h.zD)(x.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(xt.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(xt.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    xy = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(xt.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [x_, xC, xN],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    xb = (0, h.t_)(x.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [xs, xI, xy],
    }),
    xv = (0, h.i4)(x.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: h$._,
        buildLayout: () => [xb],
    });
var xj = n(712440),
    xO = n(370997);
let xL = (0, h.E2)(x.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xO.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var xR = n(478016),
    xD = n(77468),
    xP = n(289498),
    xG = n(573648),
    xM = n(874490),
    xU = n(370480),
    xV = n(968309);
let xk = new Set([_.fg2.XBOX, _.fg2.PLAYSTATION, _.fg2.PLAYSTATION_STAGING, _.fg2.CRUNCHYROLL]);
var xw = n(169869),
    xF = n(814925),
    xB = n(733110),
    xz = n(479785),
    xY = n(757036),
    xX = n(555837),
    xH = n(43990),
    xW = n(241524),
    xK = n(51965),
    xZ = n(377368),
    xq = n(631368),
    xQ = n(212739),
    x$ = n(30370),
    xJ = n(181666),
    x0 = n(553875),
    x1 = n(660594);
function x2() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xq.$)()),
            (t = (0, xQ.O)()),
            (s = null != (i = (0, I.bG)([x$.A], () => x$.A.getAccount(null, _.fg2.XBOX))) && !i.revoked),
            e === xq.C.NONE || t
                ? { variant: xq.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xq.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xZ.yW)(a),
        u = (0, xW.A)("(max-width: 485px)");
    if (l === xq.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xq.C.HAS_ACCESS:
        case xq.C.BLOCK_CLAIM:
            ((c = V.intl.string(x0.default["7PdsMK"])),
                (g = (0, T.jsx)(xK.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(x0.default.CubeLC),
                    onClick: () => {
                        (0, sp.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, T.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xq.C.NO_ACCESS:
            ((c = V.intl.string(x0.default.NwkRTZ)),
                (g = (0, T.jsx)(tY.A, {
                    defaultTextOverride: V.intl.string(x0.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t$.pe.TIER_2,
                })));
            break;
        default:
            (0, io.xb)(l);
    }
    return (0, T.jsxs)(eY.f5, {
        value: a,
        children: [
            (0, T.jsxs)("div", {
                className: x1.bV,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, T.jsx)(aa.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, T.jsx)(xH.N, {
                theme: _.NJ8.DARK,
                children: (e) =>
                    (0, T.jsx)("div", {
                        className: e,
                        children: (0, T.jsxs)("div", {
                            className: x1.Nr,
                            children: [
                                (0, T.jsxs)("div", {
                                    className: x1.Tp,
                                    children: [
                                        (0, T.jsx)("div", {
                                            className: x1.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, T.jsx)("div", { className: x1.$h }),
                                        (0, T.jsx)("div", { className: x1.Rv }),
                                        (0, T.jsx)("div", { className: x1.Lw }),
                                    ],
                                }),
                                (0, T.jsxs)("div", {
                                    className: x1.Mn,
                                    children: [
                                        (0, T.jsxs)("div", {
                                            className: x1.mY,
                                            children: [
                                                (0, T.jsx)("img", {
                                                    className: x1.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, T.jsx)($.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: x1.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, T.jsx)("div", { className: x1.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)("div", { className: x1.yF }),
                                            (0, T.jsxs)("div", {
                                                className: x1.sQ,
                                                children: [
                                                    (0, T.jsx)(u_.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, T.jsx)($.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(xJ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xZ.Hx.CONNECT),
                                                                    (0, xV.A)({
                                                                        platformType: _.fg2.XBOX,
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
var x3 = n(201718),
    x5 = n(321078),
    x4 = n(672130),
    x6 = n(379848),
    x8 = n(688901);
function x7(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(mV.i.AUTO_DISMISS), [t]),
        (0, T.jsx)("div", { className: x8.Ad, children: (0, T.jsx)(m3.E, { type: "new", variant: "primary" }) })
    );
}
function x9(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, T.jsxs)("div", {
        className: x8.kL,
        children: [
            i,
            (0, T.jsxs)("div", {
                className: x8.FS,
                children: [
                    (0, T.jsxs)("div", {
                        className: x8.TK,
                        children: [
                            (0, T.jsx)(x6.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, T.jsx)(x7, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, T.jsx)($.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, T.jsx)($.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, T.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: l }),
        ],
    });
}
function Se() {
    let e = ey.A.getArticleURL(_.MVz.PS_CONNECTION);
    return (0, T.jsx)(x9, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, T.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xV.A)({ platformType: _.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let St = "/assets/9df988a227916145.png";
function Sn() {
    return (0, T.jsx)(x9, {
        title: V.intl.string(xJ.default["9cLtDI"]),
        body: V.intl.format(xJ.default["D+kUbg"], { learnMoreLink: ey.A.getArticleURL(_.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, T.jsx)("img", { src: St, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xV.A)({ platformType: _.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function Si() {
    let e = ey.A.getArticleURL(_.MVz.XBOX_CONNECTION);
    return (0, T.jsx)(x9, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, T.jsx)("img", { src: St, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xV.A)({ platformType: _.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Ss = n(783419),
    Sl = n(534952),
    Sr = n(211180),
    Sa = n(247259);
function So(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, I.cf)(
            [x$.A],
            () => ({
                isJoining: x$.A.isJoining(n.id),
                joinErrorMessage:
                    "" === x$.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : x$.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== x$.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, I.bG)([sv.A], () => sv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, T.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    xD.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, T.jsxs)("div", {
            className: Sa.iA,
            children: [
                (0, T.jsxs)("div", {
                    className: Sa.XX,
                    children: [
                        (0, T.jsx)(gk.Ay, { size: gk.Ay.Sizes.SMALL, guild: n.guild, className: Sa.$f }),
                        (0, T.jsxs)("div", {
                            className: Sa.Vn,
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, T.jsx)(nr.Anchor, {
                                    href: xG.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, T.jsx)($.E, {
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
                    (0, T.jsx)($.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Sa.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Su(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xX.G)()), (i = (0, xY.L)(t$.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === _.fg2.XBOX && l
        ? (0, T.jsx)(Sn, {})
        : s.twoWayLink
          ? null
          : s.type === _.fg2.XBOX
            ? (0, T.jsx)(Si, {})
            : s.type === _.fg2.PLAYSTATION
              ? (0, T.jsx)(Se, {})
              : null;
}
function Sd(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = f.useState(u.friendSync),
        [A, E] = f.useState(u.visibility),
        [h, x] = f.useState(u.metadataVisibility),
        [S, p] = f.useState(u.showActivity),
        [I, N] = f.useState(null),
        [C, y] = f.useState(null),
        [b, v] = f.useState(!1),
        [O, L] = f.useState([]),
        R = (0, xM.ML)(u.type),
        D = xG.A.get(R);
    f.useEffect(() => {
        (m(u.friendSync), E(u.visibility), x(u.metadataVisibility), p(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: I, inProgressMetadataVisibility: C },
        G = f.useRef(P);
    return (
        f.useEffect(() => {
            G.current = P;
        }),
        f.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), xD.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xD.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, T.jsxs)("div", {
            className: Sa.FI,
            children: [
                ((t = xG.A.get(u.type)),
                (n = xG.A.get(R)),
                (i = "1" === (u.metadata ?? {})[Ss.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === _.fg2.TWITTER &&
                    i &&
                    (s = (0, T.jsx)(sg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, T.jsx)(xF.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, T.jsx)(xR.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, T.jsxs)("div", {
                    className: Sa.Il,
                    children: [
                        (0, T.jsx)("img", {
                            alt: n.name,
                            className: Sa.gj,
                            src: (0, cD.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsxs)("div", {
                                    className: Sa.$p,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sa.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, T.jsx)("div", { className: Sa.cG, children: s }),
                                    ],
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sa.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(Sr.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, T.jsx)(n4.D, {
                            className: Sa.uH,
                            onClick: function () {
                                let e = xG.A.get(u.type);
                                (0, sp.openModal)((t) =>
                                    (0, T.jsx)(sS.a, {
                                        title: V.intl.formatToPlainString(V.t.U5x12f, { name: e.name }),
                                        subtitle: V.intl.format(V.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: V.intl.string(V.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: V.intl.string(V.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            xk.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, T.jsx)(s9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, T.jsx)(uF.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, T.jsx)(Su, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xU.An)(t[Ss.pK.CREATED_AT], c);
                    switch (e.type) {
                        case _.fg2.REDDIT:
                            n = (0, xw.xE)(t, Sa.Nz);
                            break;
                        case _.fg2.STEAM:
                            n = (0, xw.dy)(t, Sa.Nz);
                            break;
                        case _.fg2.LETTERBOXD:
                            n = (0, xw.uq)(t, Sa.Nz);
                            break;
                        case _.fg2.BLUESKY:
                        case _.fg2.TWITTER:
                        case _.fg2.MASTODON:
                            n = (0, xw.ED)(t, Sa.Nz);
                            break;
                        case _.fg2.EBAY:
                            n = (0, xw.ub)(t, Sa.Nz);
                            break;
                        case _.fg2.PAYPAL:
                            n = (0, xw.gZ)(t, Sa.Nz);
                            break;
                        case _.fg2.TIKTOK:
                            n = (0, xw.HU)(t, Sa.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, T.jsx)(
                                $.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sa.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xG.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, T.jsx)(
                                    "div",
                                    {
                                        className: Sa.Z3,
                                        children: (0, T.jsx)(m3.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, T.jsx)(
                                    $.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sa.vt,
                                        children: V.intl.format(V.t.Up2ni7, {
                                            helpdeskUrl: ey.A.getArticleURL(_.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = V.intl.string(V.t["LVh3/5"])));
                    return (
                        s && (l = V.intl.string(V.t.i4jeWR)),
                        n.push(
                            (0, T.jsx)(
                                "div",
                                {
                                    className: Sa.jy,
                                    children: (0, T.jsx)(j.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": V.intl.string(V.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  (v(!0),
                                                      xD.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), L(O), v(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, T.jsx)("div", { className: Sa.tJ, children: n })
                    );
                })(u),
                (_.txh.has(u.type) &&
                    (l = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xD.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                _.ewM.has(u.type) &&
                    (r = (0, T.jsx)(t4.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: S,
                        onChange: function (e) {
                            (p(e), xD.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xG.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xV.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xD.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, T.jsxs)("div", {
                    className: Sa.HZ,
                    children: [
                        (0, T.jsx)(t4.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xV.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xD.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, T.jsx)(sl.c, {});
                })(),
                u.revoked
                    ? (0, T.jsx)(iK.w, {
                          type: "info",
                          message: V.intl.format(V.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xV.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, T.jsx)(So, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, T.jsx)(xz.A, { partner: u.type }),
            ],
        })
    );
}
function Sc(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: Sa.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, T.jsxs)("div", {
                          className: Sa.Il,
                          children: [
                              (0, T.jsx)("img", { alt: n.name, className: ic()(Sa.gj, Sa.sN), src: i }),
                              (0, T.jsxs)("div", {
                                  children: [
                                      (0, T.jsx)("div", {
                                          className: Sa.$p,
                                          children: (0, T.jsx)($.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sa.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sa.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, T.jsx)(n4.D, {
                                  className: Sa.uH,
                                  onClick: () =>
                                      (0, xO.d1)(n, t.scopes, () => {
                                          xj.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, T.jsx)(uF.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, T.jsx)("div", {
                      className: Sa.HZ,
                      children: (0, T.jsx)(t4.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x3.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Sg() {
    let e = (0, xM.gn)(),
        t = (0, i3.A)((0, Sl.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, T.jsxs)("div", {
        className: Sa.lA,
        children: [
            t.map((e) => null != e && (0, T.jsx)(x4.A, { application: e, innerClassName: Sa.U$ }, e.id)),
            e.map((e) =>
                (0, T.jsx)(
                    xP.A,
                    { type: e.type, innerClassName: Sa.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function Sm(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => xG.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, T.jsx)(oN.y, { type: oN.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, T.jsx)(Eq.pp, {
                    theme: r,
                    className: Sa.p$,
                    children: (0, T.jsx)(Eq.SG, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t.aoLS84),
                    }),
                })
              : (0, T.jsxs)(T.Fragment, {
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: V.intl.format(V.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, T.jsx)(
                                Sc,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, T.jsx)(
                                Sd,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xD.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, T.jsx)("div", { className: Sa.V, children: t })
    );
}
let SA = (0, h.E2)(x.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, T.jsx)(su.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, T.jsx)(Sg, {}) });
        },
        useSearchTerms: () => [
            V.intl.string(V.t.Zhcj9X),
            V.intl.string(V.t.QqTz8b),
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    SE = (0, h.E2)(x.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, I.bG)([x$.A], () => x$.A.isFetching()),
                n = (0, I.bG)([x$.A], () => x$.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, I.cf)([xB.default], () => ({
                    authorizedAppsFetchState: xB.default.getFetchState(),
                    authorizedApps: xB.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x5.A)(lS.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, ce.Ay)(),
                o = (0, I.bG)([ue.default], () => ue.default.locale);
            return (f.useEffect(() => {
                i === xB.FetchState.NOT_FETCHED && xj.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(x2, {}),
                          (0, T.jsx)(Sm, {
                              fetching: t || l || (r.length > 0 && i !== xB.FetchState.FETCHED),
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
            xD.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    Sh = (0, h.zZ)(x.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [SA, SE],
    }),
    Sx = (0, h.zZ)(x.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [xL],
        initialize: () => (
            xj.A.fetch(),
            () => {
                xO.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    SS = (0, h.t_)(x.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: oE.L,
        buildLayout: () => [Sh, Sx],
    }),
    Sp = (0, h.i4)(x.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: EQ.LinkIcon,
        buildLayout: () => [SS],
    });
var ST = n(625657),
    Sf = n(592598),
    SI = n(773371),
    S_ = n(532294),
    SN = n(672396);
let SC = Sb(null);
function Sy() {
    var e;
    let t = Sb(SC);
    ((e = SC),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(_.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (SC = t)));
}
function Sb(e) {
    let t = S_.default.getNotificationPositionMode(),
        n = t !== _.G6Q.DISABLED,
        i = sa.Ay.getOverlayKeybind(),
        s = sa.Ay.getOverlayChatKeybind();
    return {
        enabled: SI.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Sf.A.isNotificationDisabled(SN.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sx.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sx.dI)(s.shortcut) : null,
        text_opacity_slider: S_.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? SI.default.enabled,
    };
}
var Sv = n(237984),
    Sj = n(63035);
function SO(e) {
    (e.preventDefault(), e.stopPropagation());
}
function SL(e) {
    let { children: t } = e;
    return (0, T.jsx)("div", { onClick: SO, children: t });
}
function SR(e) {
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
    return (0, T.jsxs)("div", {
        className: ic()(Sj.HS, d),
        children: [
            (0, T.jsxs)(hG.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, T.jsx)("div", { className: Sj.x_, children: t }),
                    (0, T.jsxs)("div", {
                        className: Sj.rN,
                        children: [
                            null != n && (0, T.jsx)("div", { className: Sj.$t, children: n }),
                            (0, T.jsxs)("div", {
                                className: Sj.c8,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Sj.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, T.jsx)($.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, T.jsx)($.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, T.jsx)("div", { className: Sj.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", { className: Sj.Om, children: a }),
        ],
    });
}
let SD = (0, h.E2)(x.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, T.jsx)(SR, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, T.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, Sv.b)(tk.A.USER_SETTINGS, _.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var SP = n(452295),
    SG = n(684013),
    SM = n(56562),
    SU = n(311043),
    SV = n(454908),
    Sk = n(41984),
    Sw = n(918825),
    SF = n(296027),
    SB = n(562519);
let Sz = 5 * n(927813).A.Millis.DAY,
    SY = new SB.A("overlay_survey_timestamps");
function SX(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SY.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < Sz) ||
            Array.from(SY.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sp.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SY.add(i), (n) => (0, T.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SH() {
    (0, se.sL)("overlay-settings");
}
function SW(e) {
    let { className: t, game: n } = e;
    return (0, se.NP)() && null != n && n.elevated
        ? (0, T.jsx)("div", {
              className: t,
              children: (0, T.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: ey.A.getArticleURL(_.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: SH },
              }),
          })
        : null;
}
var SK = n(760751),
    SZ = n(9302),
    Sq = n(656513);
let SQ = new Set([
    Sk.AR.INITIALIZING,
    Sk.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    Sk.AR.WAITING_FOR_MODULE_TRACKING,
    Sk.AR.WAITING_FOR_OVERLAY_OPEN,
    Sk.AR.WAITING_FOR_POPOUT_OPEN,
    Sk.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    Sk.AR.WAITING_FOR_REACT_INITIALIZATION,
    Sk.AR.WAITING_FOR_PID_FOCUS,
    Sk.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function S$(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = f.useState(!1);
    return (0, T.jsx)(Sq.N, {
        className: Sj.uR,
        collapsibleContent: (0, T.jsx)("div", { className: Sj.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, T.jsx)(SR, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ic()(Sj.AC, n),
                action: (0, T.jsxs)("div", {
                    className: Sj.rc,
                    children: [
                        s.action,
                        l
                            ? (0, T.jsx)(g9.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, T.jsx)(n8._, {
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
let SJ = (0, h.E2)(x.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, SV.I)(e?.id);
        let n = e?.pid,
            i = (0, I.bG)(
                [SF.default],
                () => (null == e || null == n ? null : SF.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: s } = (0, SV.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, I.cf)(
                [SK.A, tc.A, SU.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i4.hw)(e, !1, [SK.A, tc.A, SU.A]),
                [e, i],
            ),
            a = (0, I.bG)(
                [i4.Ay, SK.A, tc.A, SU.A],
                () => (null == e ? null : (0, i4.xU)(e, i4.Ay, SK.A, tc.A, SU.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(l),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, SZ.supportsLegacy)(),
            E = !(0, SZ.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, I.cf)([SF.default], () => SF.default.getGlobalEnabledStatus());
        function S(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case Sw.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), SP.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case Sw.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), SP.A.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case Sw.OverlayToggledClientSettingType.LEGACY:
                    (SG.A.setEnabled(t, x), (0, Sw.Q)(t, Sw.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case Sw.OverlayToggledClientSettingType.OOP:
                    (SG.A.setEnabled(h, t), (0, Sw.Q)(t, Sw.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                SX(
                    i ? Sw.OverlayToggledClientSettingType.LEGACY_GAME : Sw.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let p = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === Sk.Ue.Disabled,
            b = i?.state === Sk.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && SQ.has(i.state) && !y,
            j = i?.overlayMethod === Sk.Ue.OutOfProcess,
            O = i?.overlayMethod === Sk.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === Sk.Ue.Hook,
            R = i?.state === Sk.AR.OVERLAY_CRASHED || i?.state === Sk.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case b && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, T.jsx)(
                                        $.E,
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
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, T.jsx)(
                                        $.E,
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
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, T.jsx)(
                                        $.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== SM.aI.BORDERLESS_FULLSCREEN:
                                        return V.intl.string(V.t.mJmbeC);
                                    case E:
                                        return V.intl.string(V.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return V.intl.string(V.t.WiY24u);
                                    case !x:
                                        return V.intl.string(V.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
                                        return V.intl.string(V.t.XcGEcs);
                                    default:
                                        return V.intl.string(V.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [V.intl.string(V.t.OFC2aw), null];
                    case p:
                        return [V.intl.string(V.t.m7X4az), null];
                    case _:
                        return [V.intl.string(V.t["9DUS5l"]), null];
                    case D:
                        return [V.intl.string(V.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [V.intl.string(V.t.VWUn0a), null];
                    case v:
                        if (j) return [V.intl.string(V.t["s8+CFq"]), null];
                        if (L) return [V.intl.string(V.t.JEEdqt), null];
                        if (O) return [V.intl.string(V.t.pzBMwY), null];
                        return [V.intl.string(V.t["2Xhy9k"]), null];
                    case null == i:
                        return [V.intl.string(V.t.vwHPRi), null];
                    case y: {
                        let e = i?.fullscreenType === SM.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, e_.Ay)(() => {
            SP.A.getDetectableGames();
        });
        let [M, U] = f.useMemo(
            () =>
                v
                    ? ["text-muted", n1.A.colors.TEXT_MUTED.css]
                    : b && O
                      ? ["text-feedback-warning", n1.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", n1.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && L
                          ? ["text-strong", n1.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n1.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, O, j, L],
        );
        return null == e
            ? null
            : (0, T.jsxs)(S$, {
                  onExpand: m,
                  className: g ? Sj.tx : void 0,
                  title: (0, T.jsxs)(T.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, T.jsx)(sg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, T.jsx)(xF.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, T.jsx)(xR.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n1.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != G ? G : void 0,
                  header: (0, T.jsxs)(T.Fragment, {
                      children: [
                          b || v
                              ? (0, T.jsx)(dm.k, { size: "xxs", color: U })
                              : (0, T.jsx)("div", { className: Sj.W4 }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, T.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, T.jsx)(SL, {
                      children: (0, T.jsx)(t4.d, {
                          checked: (o && x) || (d && h),
                          disabled: p,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (SP.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (SG.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (SG.A.setEnabled(t, t),
                                              SP.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? Sw.OverlayToggledClientSettingType.LEGACY_GAME
                                                : Sw.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? Sw.OverlayToggledClientSettingType.OOP_GAME
                                                : Sw.OverlayToggledClientSettingType.OOP),
                                      null != l && SX(l, e.id ?? null));
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
                  warning: (0, T.jsx)(SW, { className: Sj.Hh, game: e }),
                  children: [
                      (0, T.jsx)(SR, {
                          title: V.intl.string(V.t["7BlVIs"]),
                          description: V.intl.string(V.t.ndgADE),
                          hint: x ? void 0 : V.intl.string(V.t.cAFVsL),
                          "aria-label": V.intl.string(V.t["7BlVIs"]),
                          action: (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(t4.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? S(e, Sw.OverlayToggledClientSettingType.OOP)
                                              : S(e, Sw.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: Sj.Kz }),
                              ],
                          }),
                      }),
                      (0, T.jsx)(SR, {
                          title: V.intl.string(V.t.BfFpW1),
                          description: V.intl.string(V.t.OzInYk),
                          hint: h ? void 0 : V.intl.string(V.t["3sYHXm"]),
                          "aria-label": V.intl.string(V.t.BfFpW1),
                          action: (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(t4.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? S(e, Sw.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, Sw.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: Sj.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i8();
        return null != e;
    },
    useSearchTerms: () => [V.intl.string(V.t["9cb1Uz"])],
});
var S0 = n(206885);
function S1(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, I.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, T.jsx)(i7.A, { game: s, pid: i, size: i7.M.SMALL });
}
function S2(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, SV.I)(t?.id);
    let o = (0, I.cf)([i4.Ay, SK.A, tc.A, SU.A], () => (0, i4.xU)(t, i4.Ay, SK.A, tc.A, SU.A)),
        u = (0, I.cf)([SK.A, tc.A, SU.A], () => (0, i4.hw)(t, !1, [SK.A, tc.A, SU.A]), [t]),
        d = s(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, T.jsx)(SR, {
            title: t.name,
            icon: (0, T.jsx)(S1, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(t4.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && SX(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, T.jsx)("div", { className: Sj.Kz }),
                ],
            }),
        })
    );
}
let S3 = (0, h.E2)(x.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, I.cf)([SF.default], () =>
                    SF.default.getGlobalEnabledStatus(),
                ),
                s = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, hJ.n1)(e)),
                l = (0, i3.A)(s.map((e) => e.id)),
                r = !(0, SZ.supportsLegacy)();
            function a(e) {
                SG.A.setEnabled(e, i);
                let t = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Sw.Q)(e, Sw.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && SX(Sw.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                SP.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, SZ.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, T.jsx)(SR, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: Sj.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              S0.O && (0, T.jsx)("div", { className: Sj.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(S$, {
                      onExpand: t,
                      className: e ? Sj.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, T.jsx)(SL, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: Sj.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: Sj.XG,
                              children: s.map((e, t) =>
                                  (0, T.jsx)(
                                      S2,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sw.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: V.intl.format(V.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.BfFpW1)],
    }),
    S5 = (0, h.E2)(x.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, I.cf)([SF.default], () =>
                    SF.default.getGlobalEnabledStatus(),
                ),
                s = !(0, SZ.supportsOutOfProcess)(),
                l = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, hJ.n1)(e)),
                r = (0, i3.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                SG.A.setEnabled(i, e);
                let s = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Sw.Q)(e, Sw.OverlayToggledClientSettingType.OOP, s),
                    t && SX(Sw.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                SP.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (S0.O ? (s ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, T.jsx)(SR, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: Sj.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              S0.O && (0, T.jsx)("div", { className: Sj.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(S$, {
                      onExpand: t,
                      className: e ? Sj.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, T.jsx)(SL, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: Sj.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: Sj.XG,
                              children: l.map((e, t) =>
                                  (0, T.jsx)(
                                      S2,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sw.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: V.intl.format(V.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["7BlVIs"])],
    }),
    S4 = (0, h.zZ)(x.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [SJ, S5, S3, SD],
    }),
    S6 = (0, h.zD)(x.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, I.bG)([S_.default], () => !S_.default.disableClickableRegions),
        setValue: (e) => {
            SG.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    S8 = (0, h.E2)(x.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sa.Ay], () => sa.Ay.getOverlayKeybind()),
                t = !(0, SZ.supportsLegacy)(),
                n = !(0, SZ.supportsOutOfProcess)(),
                [i, s] = (0, I.yK)([i4.Ay], () => [i4.Ay.canShowAdminWarning, i4.Ay.getVisibleGame()], []),
                l = (0, se.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sa.DV)(e?.shortcut ?? []);
            return (0, T.jsx)("div", {
                className: Sj.hc,
                children: (0, T.jsxs)("div", {
                    className: Sj.eH,
                    children: [
                        (0, T.jsxs)("div", {
                            className: Sj.Bu,
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sj.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sj.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, T.jsx)("div", {
                            className: Sj.IH,
                            children: (0, T.jsx)(sh.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tE()(null != e, "Keybind should never be undefined"),
                                        iZ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.VsAZcC)],
    });
var S7 = n(515183),
    S9 = n(682763);
let pe = (0, h.zD)(x.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, S7.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, I.bG)([Sf.A], () => Sf.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, S7.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = i5.A.getStreamerActiveStreamMetadata()),
                    (s = i6(
                        t,
                        (i =
                            null != (n = i4.Ay.getVisibleGame())
                                ? i4.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i2.A.getApplication(s) ?? void 0 });
            null != l && (0, S9.x8)(l.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    pt = (0, h.zZ)(x.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [S8, pe, S6] });
var pn = n(93465),
    pi = n(222407);
let ps = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: pn.M.TEXT_CHAT,
        key: x.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: pn.M.WELCOME_GENERAL,
        key: x.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: pn.M.GO_LIVE_NUDGE,
        key: x.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: pn.M.GAME_ACTIVITY,
        key: x.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: pn.M.NOW_PLAYING,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: pn.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nT.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, I.bG)([Sf.A], () => Sf.A.isNotificationDisabledBySetting(pn.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pl(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, I.bG)([Sf.A], () => Sf.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, pi.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let pr = (0, h.FW)(x.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => ps.map(pl),
    }),
    pa = (0, h.zZ)(x.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [pr],
    }),
    po = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, I.bG)([S_.default], () => S_.default.getAvatarSizeMode()),
        setValue: (e) => {
            SG.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: _.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: _.OSZ.SMALL },
        ],
    }),
    pu = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, I.bG)([S_.default], () => S_.default.getDisplayNameMode()),
        setValue: (e) => {
            SG.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: _.pwA.NEVER },
        ],
    }),
    pd = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, I.bG)([S_.default], () => S_.default.getDisplayUserMode()),
        setValue: (e) => {
            SG.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pc = n(391973),
    pg = n(233741),
    pm = n(897720),
    pA = n(32584);
function pE() {
    let e = pg.A.getWidgetByType(_.uss.VOICE_V3);
    if (null == e) return null;
    let t = pA.A.getWidget(e.id);
    return null != t && (0, pm.ZO)(t) ? t : null;
}
n(392164);
let ph = (0, h.sN)(x.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pE();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pE();
        null != t &&
            (e < 1
                ? (0, pc.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pc.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var px = n(450740),
    pS = n(968898),
    pp = n(288737);
function pT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new pp.A({
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
        user: new cW.A({ id: s, username: e }),
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
let pf = (0, h.E2)(x.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, I.cf)([S_.default], () => ({
                    avatarSizeMode: S_.default.getAvatarSizeMode(),
                    displayNameMode: S_.default.getDisplayNameMode(),
                    displayUserMode: S_.default.getDisplayUserMode(),
                })),
                [l] = f.useState(() => [
                    pT(V.intl.string(V.t.C0ZDvo), !0, !1),
                    pT(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    pT(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, I.bG)([pg.A, pA.A], () => {
                    let e = pg.A.getWidgetByType(_.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pA.A.getWidget(e.id);
                    return null != t && (0, pm.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pT(t.username)).user = t), e) : null, ...l].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, T.jsx)(xH.N, {
                    theme: _.NJ8.ONYX,
                    children: (e) =>
                        (0, T.jsxs)("div", {
                            className: ic()(Sj.Y5, e),
                            children: [
                                (0, T.jsx)("div", {
                                    className: Sj.kJ,
                                    children: (0, T.jsx)(px.DH, {
                                        id: "voice-widget",
                                        title: V.intl.string(V.t.KNJ6Vq),
                                        channel: (0, G.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: _.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: s,
                                        avatarSizeMode: n,
                                        widget: _.uss.VOICE,
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
                                (0, T.jsxs)("div", {
                                    className: Sj.R$,
                                    children: [
                                        (0, T.jsx)(pS.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, T.jsx)(pS.CS, {}),
                                        (0, T.jsx)(pS.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, T.jsx)("div", { className: Sj.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pI = (0, h.zZ)(x.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [pf, po, pu, pd, ph],
    });
var p_ = n(97005),
    pN = n(667419),
    pC = n(776162),
    py = n(114994),
    pb = n(371169),
    pv = n(671210);
let pj = {
    [_.uss.VOICE_V3]: x.X.OVERLAY_WIDGETS_VOICE,
    [_.uss.QUICK_ACTIONS]: x.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [_.uss.NOTIFICATIONS]: x.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [_.uss.TEXT_CHAT_V3]: x.X.OVERLAY_WIDGETS_CHAT,
    [_.uss.FRIENDS]: x.X.OVERLAY_WIDGETS_FRIENDS,
    [_.uss.ACTIVITY]: x.X.OVERLAY_WIDGETS_ACTIVITY,
    [_.uss.VIDEO]: x.X.OVERLAY_WIDGETS_VIDEO,
    [_.uss.GO_LIVE]: x.X.OVERLAY_WIDGETS_STREAMS,
};
function pO(e) {
    let t = nf.A[e],
        n = pj[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, nT.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, I.bG)([pA.A], () => (0, pN.$e)(e, pA.A), []),
        setValue: (t) => {
            ((0, pN.j$)(), (0, pN.JA)(e, !t));
        },
    });
}
let pL = (0, h.FW)(x.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(pv.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(pv.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => pC.t3.flatMap(pO),
    }),
    pR = (0, h.E2)(x.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, I.bG)([py.A], () => py.A.getProjects());
            return (f.useEffect(() => {
                (0, pb.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, T.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, T.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(pv.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, T.jsx)(pC.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, p_.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(pv.default["pbu+Yx"])],
    }),
    pD = (0, h.Tf)(x.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pN.eL,
    }),
    pP = (0, h.zZ)(x.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(pv.default["Qk/rJB"]),
        usePredicate: nI.b_,
        buildLayout: () => [pL, pR, pD],
    });
var pG = n(54761);
function pM() {
    let [e, t] = (0, mj.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(mV.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, T.jsxs)(T.Fragment, {
              children: [
                  (0, T.jsxs)("div", {
                      className: pG.xC,
                      children: [
                          (0, T.jsx)("div", {
                              children: (0, T.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pG.tl,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              children: (0, T.jsxs)("div", {
                                  className: pG.vJ,
                                  children: [
                                      (0, T.jsx)(C.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: V.intl.string(V.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, T.jsx)("div", {
                              children: (0, T.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pG.lh,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pG.VV,
                              children: (0, T.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(mV.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(sl.c, { className: pG.yF }),
              ],
          });
}
function pU() {
    let e = (0, I.bG)([tu.A], () => tu.A.enabled),
        t = (0, nT.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, T.jsxs)(T.Fragment, {
              children: [
                  (0, T.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.format(V.t.fuEX5B, {
                          onClick: function () {
                              return (0, na.openUserSettings)(x.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, T.jsx)(sl.c, { className: pG.yF }),
              ],
          })
        : null;
}
let pV = (0, h.t_)(x.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                Sy(),
                sa.Ay.addChangeListener(Sy),
                Sf.A.addChangeListener(Sy),
                S_.default.addChangeListener(Sy),
                SI.default.addChangeListener(Sy),
                e8.isPlatformEmbedded && (0, h1.a2)(),
                () => {
                    (sa.Ay.removeChangeListener(Sy),
                        Sf.A.removeChangeListener(Sy),
                        S_.default.removeChangeListener(Sy),
                        SI.default.removeChangeListener(Sy),
                        e8.isPlatformEmbedded && (0, h1.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(pM, {}), (0, T.jsx)(pU, {})] });
            },
        },
        buildLayout: () => [S4, pt, pP, pI, pa],
    }),
    pk = (0, h.i4)(x.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: ST.l,
        usePredicate: nI.b_,
        buildLayout: () => [pV],
    });
var pw = n(687966);
let pF = (0, h.AK)(x.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pB = (0, h.gN)(x.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pF] });
var pz = n(227309),
    pY = n(29160),
    pX = n(552366),
    pH = n(938442);
function pW(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, SV.I)(t.id);
    let o = (0, I.cf)([i4.Ay, SK.A, tc.A, SU.A], () => (0, i4.xU)(t, i4.Ay, SK.A, tc.A, SU.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, I.cf)([i4.Ay], () => ({
            canToggleDetection: null == a || i4.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i4.Ay.isDetectionEnabled(o),
        })),
        c = (0, I.bG)([i4.Ay], () => i4.Ay.getVisibleGame()),
        [g, m] = f.useState(!1),
        A = f.useRef(null),
        E = null != c && (0, i4.Es)(o) === (0, i4.Es)(c),
        h = !s && !g,
        x = !i && !E,
        S = h || x,
        p = f.useMemo(
            () =>
                (0, hJ.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(p ?? "???"),
        y = ic()(pH.tR, {
            [pX.LO]: !i,
            [pX.Rw]: i,
            [pX.FB]: null != o && i,
            [pX.xL]: r,
            [pX.fG]: null != l && l.length > 0,
        });
    function b() {
        (SP.A.deleteEntry(o),
            l?.forEach((e) => {
                SP.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SK.A.getDetectableGame(o.id) : null;
        (td.default.track(_.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hJ.n1)(o) ? o.gameName : o.name,
        }),
            (0, sp.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, T.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsxs)("div", {
                className: y,
                children: [
                    (0, T.jsxs)("div", {
                        className: ic()(pX.$K, pH.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, T.jsxs)("div", {
                                      className: pX.HS,
                                      children: [
                                          (0, T.jsx)("div", { className: pX.mO, children: p }),
                                          (0, T.jsx)(sg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, T.jsx)(xF.A, {
                                                  className: pX.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, T.jsx)(xR.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n1.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, T.jsx)("input", {
                                      className: ic()(pX.mO, pX.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && SP.A.editName(o, N);
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
                                        ? (e = V.intl.string(V.t.VbV5dv))
                                        : null != n && "" !== n && (e = V.intl.format(V.t["gGeOE+"], { when: n })),
                                    (0, T.jsx)($.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: pX.GN,
                                        children: (0, T.jsx)(pY.A, {
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
                    S &&
                        (0, T.jsx)(aE.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, T.jsx)(gG.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": V.intl.string(V.t["UKOtz+"]),
                                    children: (0, T.jsxs)(ti.rX, {
                                        children: [
                                            h &&
                                                (0, T.jsx)(ti.Dr, {
                                                    id: "report",
                                                    label: V.intl.string(V.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, T.jsx)(ti.Dr, {
                                                    id: "remove",
                                                    label: V.intl.string(V.t.N86XcP),
                                                    color: "danger",
                                                    action: b,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, T.jsx)("div", {
                                    className: ic()(pX._Q, { [pX.g9]: t.isShown }),
                                    children: (0, T.jsx)(sg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, T.jsx)(sd.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gR.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, T.jsx)(sg.m, {
                        text: V.intl.string(V.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, T.jsx)(sA.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sp.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, T.jsx)(e, {
                                                  ...t,
                                                  title: V.intl.formatToPlainString(V.t.PZ4fKc, { platform: p }),
                                                  subtitle: V.intl.formatToPlainString(V.t.ZIQbfb, { platform: p }),
                                                  actions: [
                                                      {
                                                          text: V.intl.string(V.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: V.intl.string(V.t.Fmjztz),
                                                          onClick: () => {
                                                              (SP.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : SP.A.toggleDetection(o);
                            },
                            "aria-label": V.intl.string(V.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, T.jsx)("div", {
                    className: pX.AQ,
                    children: l.map((e, t) =>
                        (0, T.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, T.jsx)(pW, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, T.jsx)("div", { className: pX.PQ }),
                                ],
                            },
                            (0, i4.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pK() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h3();
    return 0 === e.length
        ? null
        : (0, T.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, T.jsx)(n3.n, {
                  children: (0, T.jsx)("div", {
                      children: e.map((e) =>
                          (0, T.jsx)(
                              pW,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pz.a7 ? t : void 0 },
                              (0, i4.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pZ = (0, h.E2)(x.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, T.jsx)(pK, {}),
});
var pq = n(424994);
let pQ = (0, h.zZ)(x.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pZ, pB],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hJ.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pq.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var p$ = n(890497),
    pJ = n(853270),
    p0 = n(969426);
function p1(e) {
    let { onClose: t } = e,
        n = (0, I.bG)([i4.Ay], () => i4.Ay.getCandidateGames()),
        [i, s] = f.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, T.jsxs)(ah.l, {
        className: ic()(pJ.H, p0.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, T.jsx)(p$.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, T.jsxs)("div", {
                className: ic()(pJ.o, pH.xM),
                children: [
                    (0, T.jsx)(hD.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, T.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (SP.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p2 = n(475007);
function p3() {
    let e = f.useRef(null);
    return (0, T.jsxs)("div", {
        className: ic()(p2.a, E4.Gf),
        children: [
            (0, T.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, T.jsx)(aE.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, T.jsx)(p1, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, T.jsx)(hD.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: V.intl.string(V.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function p5() {
    return (0, T.jsx)("div", {
        className: ic()(pH.tR, pX.eS, pX.Rw),
        children: (0, T.jsxs)("div", {
            className: ic()(pX.$K, pH.Vd),
            children: [
                (0, T.jsx)("div", { className: pX.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, T.jsx)(p3, {}),
            ],
        }),
    });
}
let p4 = (0, h.E2)(x.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h3(),
                n = (0, I.bG)([i4.Ay], () => i4.Ay.getVisibleGame());
            return null == n
                ? (0, T.jsx)(p5, {})
                : (0, T.jsxs)("div", {
                      className: ic()(pH.Vd, pX.C2),
                      children: [
                          (0, T.jsx)(
                              pW,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pz.a7 ? e : void 0,
                              },
                              (0, i4.Es)(n),
                          ),
                          (0, T.jsx)(p3, {}),
                      ],
                  });
        },
    }),
    p6 = (0, h.zZ)(x.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [p4],
    }),
    p8 = (0, h.t_)(x.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [p6, pQ],
    }),
    p7 = (0, h.i4)(x.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pw.GameControllerIcon,
        usePredicate: nI.Pi,
        buildLayout: () => [p8],
    }),
    p9 = (0, h.WI)(x.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [p7, xv, pk, Sp],
    });
var Te = n(631670),
    Tt = n(619499),
    Tn = n(836602),
    Ti = n(591179),
    Ts = n(402860),
    Tl = n(761508),
    Tr = n(159001),
    Ta = n(344346),
    To = n(919395),
    Tu = n(68750);
function Td(e) {
    let { title: t, children: n } = e;
    return (0, T.jsxs)("div", {
        children: [(0, T.jsx)(C.D, { variant: "text-md/medium", className: Tu.Vf, children: t }), n],
    });
}
function Tc(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, T.jsx)("div", {
        className: ic()(Tu.UA, n),
        children: (0, T.jsxs)("div", {
            className: ic()(Tu.yt, i),
            children: [
                (0, T.jsx)("div", {
                    className: ic()(Tu.Fp, a && Tu.Oz),
                    children: (0, T.jsxs)(T.Fragment, {
                        children: [
                            (0, T.jsx)(Td, { title: l ?? V.intl.string(V.t.Zb06yP), children: s }),
                            null != r ? (0, T.jsx)(Td, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, T.jsx)("div", { className: Tu.oB, children: t }),
            ],
        }),
    });
}
var Tg = n(986687),
    Tm = n(101058),
    TA = n(321191),
    TE = n(696451),
    Th = n(590941);
function Tx() {
    return (0, T.jsxs)("div", {
        className: Th.p$,
        children: [
            (0, T.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Th.Sl }),
            (0, T.jsx)(C.D, { className: Th.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, T.jsx)($.E, { className: Th.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, T.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Th.h8,
                children: (0, T.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, dB.pX)(_.BVt.GUILD_DISCOVERY), (0, tX.default)());
                    },
                }),
            }),
        ],
    });
}
var TS = n(81400),
    Tp = n(450232),
    TT = n(252732),
    Tf = n(355622),
    TI = n(408018),
    T_ = n(845207),
    TN = n(290386),
    TC = n(941933),
    Ty = n(486264);
let Tb = (0, tK.Ld)(),
    Tv = (0, G.createChannelRecord)({ id: "1", type: _.rbe.DM }),
    Tj = (0, tK.Ld)();
function TO(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TN.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(s ?? r),
        [c, g] = f.useState((0, TI.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, TI.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, TI.x7)(r)));
        }, [s, r, u]),
        (0, T.jsxs)(ad.A, {
            title: t,
            titleId: Tb,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, T.jsx)(T_.Ay, {
                    "aria-describedby": Tj,
                    "aria-labelledby": Tb,
                    className: Ty.i,
                    innerClassName: Ty.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: Tv,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: TC.y,
                    type: Tf.oU.PROFILE_BIO_INPUT,
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
                (0, T.jsx)(sm.A, { id: Tj, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TL = n(821956),
    TR = n(562819),
    TD = n(84540),
    TP = n(467690);
function TG(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eY.Ay)(),
        o = (0, To.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, To.CP)(n?.id),
        c = r ? cX.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, T.jsxs)("div", {
            className: TP.NC,
            children: [
                (0, T.jsx)(c, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TR.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [TP.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TP.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TL.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, TD.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TM = n(339984),
    TU = n(942132);
let TV = [{ name: "gif", extensions: ["gif"] }];
function Tk(e) {
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
        m = c ? cX.wL : l0.$n,
        A = f.useCallback(() => {
            (0, TT.XD)({
                uploadType: TM.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TV : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, T.jsx)(ad.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, T.jsxs)("div", {
            className: TU.NC,
            children: [
                (0, T.jsx)(m, {
                    className: ic()({ [TU.yj]: c }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TU.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? V.intl.string(V.t.TDjKDm) : V.intl.string(V.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tw = n(248778),
    TF = n(810188);
function TB(e) {
    let { user: t, guildId: n, className: i } = e,
        s = ap.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eY.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, To.B0)(t, n),
        d = (0, Tw.u)("DisplayNameStylesSection"),
        [c, g] = (0, mj.kn)(d ? [eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, f.useCallback)(() => {
            (g(mV.i.TAKE_ACTION),
                td.default.track(_.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eX.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, f.useCallback)(() => {
            ((0, TD.p)({ displayNameStyles: null }), td.default.track(_.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, f.useCallback)(() => {
            (0, TD.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, T.jsx)("div", { className: TF.A, children: (0, T.jsx)(m3.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: TF.N,
            children: [
                (0, T.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(eH.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, T.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, T.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var Tz = n(637193),
    TY = n(622410);
function TX(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, To.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, Tz.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = f.useCallback(() => {
            (0, TD.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: TY.u,
            children: [
                (0, T.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, T.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TH = n(88524);
function TW(e) {
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
        g = d ? cX.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        className: l,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, T.jsxs)("div", {
            className: TH.NC,
            children: [
                (0, T.jsx)(g, {
                    className: ic()({ [TH.yj]: d }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TT.XD)({ uploadType: TM.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TH.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? V.intl.string(V.t.jHlJNS) : V.intl.string(V.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TK = n(617061),
    TZ = n(625613);
function Tq(e) {
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
        d = ap.Ay.canUsePremiumProfileCustomization(t),
        c = (0, To.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, To.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(t$.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cX.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        forcedDivider: r,
        borderType: dF.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, T.jsxs)("div", {
            className: TZ.NC,
            children: [
                (0, T.jsx)(A, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TK.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [TZ.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TZ.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, TD.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TQ = n(515727),
    T$ = n(594401);
function TJ(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = (0, To.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, To.Tu)(n?.id),
        [o, u] = (0, mj.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, T.jsx)(ad.A, {
        showBorder: d,
        borderType: d ? dF.i.NEW_UPSELL : dF.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, T.jsx)("div", { className: T$.Ad, children: (0, T.jsx)(m3.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, T.jsxs)("div", {
            className: T$.NC,
            children: [
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, TQ.w)({ analyticsLocations: s, guild: n }), u(mV.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T$.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, TD.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T0 = n(602853),
    T1 = n(654107),
    T2 = n(999291),
    T3 = n(101928),
    T5 = n(819169),
    T4 = n(317097),
    T6 = n(508274),
    T8 = n(379012);
function T7(e) {
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
        d = f.useRef(null),
        c = (0, T0.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TT.sN)(i),
        A = (0, T4.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T5.A)(a),
        S = (0, T5.A)(o),
        [p, I] = f.useState((0, oC.A)());
    return (
        f.useEffect(() => {
            (x !== a || S !== o) && I((0, oC.A)());
        }, [o, a, S, x]),
        (0, T.jsx)(aE.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, T.jsx)(T6.VN, {
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
                return (0, T.jsxs)("div", {
                    ref: d,
                    className: ic()(T8.oP, { [T8.r9]: l }),
                    children: [
                        (0, T.jsx)(n4.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? _.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T8.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, T.jsx)(ax.PencilIcon, {
                                size: "custom",
                                className: T8.BW,
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
var T9 = n(190377);
function fe(e) {
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
        c = (0, T2.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T3.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = ap.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, T0.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, T1.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, T.jsx)(ad.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !l,
              className: ic()(T9.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, T.jsxs)("div", {
                  className: T9.hd,
                  children: [
                      (0, T.jsx)("div", {
                          className: T9.YX,
                          children: (0, T.jsx)(T7, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: T9.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, T.jsx)("div", {
                          className: T9.YX,
                          children: (0, T.jsx)(T7, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: T9.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, T.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T9.WA,
                              children: (0, T.jsx)(j.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(V.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function ft(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tK.GV)();
    return (0, T.jsx)(ad.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, T.jsx)(sT.k, {
            "aria-labelledby": o,
            placeholder: l ?? V.intl.string(V.t.NPEUUu),
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
var fn = n(684732),
    fi = n(576705),
    fs = n(931175);
function fl(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, I.bG)([fi.A], () => fi.A.can(_.xBc.CHANGE_NICKNAME, r) || fi.A.can(_.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xY.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(ad.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, T.jsx)(sT.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: _.d0r,
                onChange: function (e) {
                    (0, TD.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, T.jsx)(TB, { user: l, guildId: r.id, className: fs.F }),
        ],
    });
}
var fr = n(233454);
let fa = "/assets/b25da78aa7949feb.png";
function fo(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, ce.Ay)(),
        { analyticsLocations: l } = (0, eY.Ay)(tk.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tq.uq)(t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, T.jsxs)("div", {
              className: fr.ry,
              children: [
                  (0, T.jsx)("div", { children: i }),
                  (0, T.jsxs)("div", {
                      className: fr.Wc,
                      children: [
                          (0, T.jsx)("img", {
                              className: fr.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.ASH:
                                      case _.NJ8.DARK:
                                      case _.NJ8.ONYX:
                                          return fa;
                                      case _.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fa;
                                  }
                              })(s),
                          }),
                          (0, T.jsxs)("div", {
                              className: fr._9,
                              children: [
                                  (0, T.jsx)($.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, T.jsx)($.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, T.jsx)(dw.A, {
                              size: l0.$n.Sizes.LARGE,
                              color: l0.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ap.Ay.isPremium(t)
                                      ? V.intl.string(V.t.AfRWI8)
                                      : V.intl.string(V.t.nkdUym),
                              },
                              subscriptionTier: t$.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var fu = n(203164);
function fd() {
    let e = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xY.L)(t$.PremiumTypes.TIER_2),
        n = (0, I.bG)([Tn.A, sv.A], () => sv.A.getGuild(Tn.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, I.cf)([Tn.A], () => ({ ...Tn.A.getPendingChanges(n.id), errors: Tn.A.getErrors(n.id) })),
        d = (0, Tm.V7)({ userId: e.id, image: i }),
        c = (0, TS.EC)(n.id),
        g = (0, I.bG)([TE.Ay], () => (null == n.id ? null : TE.Ay.getMember(n.id, e.id))),
        m = (0, I.bG)([TA.A], () => TA.A.getGuildMemberProfile(e.id, n.id)),
        A = ap.Ay.canUsePremiumProfileCustomization(e),
        E = (0, To.z5)(i, g?.avatar),
        h = (0, To.Ac)(l, m?.banner),
        x = (0, fn.l)(o, m?.themeColors),
        S = m?.bio ?? "",
        p = m?.pronouns ?? "";
    return (0, T.jsxs)("div", {
        className: fu.Q,
        children: [
            (0, T.jsx)(
                fl,
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
            (0, T.jsx)(
                ft,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TD.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: p,
                },
                "pronouns",
            ),
            (0, T.jsxs)(fo, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, T.jsx)(
                        Tk,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, T.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TT.rM)(e, g?.avatar, (e) => (0, TD.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, T.jsx)(
                        TG,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, T.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, T.jsx)(TB, { user: e, guildId: n.id }),
                    (0, T.jsx)(
                        TX,
                        { user: e, guild: n, titleIcon: (0, T.jsx)(Tp.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, T.jsx)(
                        Tq,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, T.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, T.jsx)(
                        TJ,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, T.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, T.jsx)(
                        TW,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TT.rM)(e, m?.banner, (e) => (0, TD.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, T.jsx)(fe, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TD.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, T.jsx)(
                        TO,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, T.jsx)(Tp.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TD.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: S,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var fc = n(832131);
function fg(e) {
    (0, sp.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, T.jsx)(t, { source: { ...e, page: _.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fm(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, I.bG)([TE.Ay], () => (null != t ? TE.Ay.getMember(t.id, s.id) : null)),
        r = (0, I.bG)([TA.A], () => !TA.A.isFetchingProfile(s.id, t?.id)),
        a = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, I.cf)([Tn.A], () => Tn.A.getPendingChanges(t?.id)),
        c = (0, Tm.V7)({ userId: s.id, image: o }),
        g = (0, To.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, To.B0)(s, t?.id);
    return (f.useEffect(() => Tr.IM, []), a)
        ? (0, T.jsx)(oE.A, {})
        : r
          ? (0, T.jsxs)(eY.f5, {
                value: i,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: ey.A.getArticleURL(_.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(au.A, { guildId: t.id, onChange: n }),
                                  (0, T.jsx)(Tc, {
                                      profilePreviewTitle: (0, T.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fc.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, T.jsx)(Tg.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ap.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fg,
                                          containerClassName: fc.ti,
                                      }),
                                      nameplatePreview: (0, T.jsx)(Ta.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fc.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, T.jsx)(fd, {}),
                                  }),
                              ],
                          })
                        : (0, T.jsx)(Tx, {}),
                ],
            })
          : (0, T.jsx)(oN.y, {});
}
var fA = n(903209),
    fE = n(641130);
function fh(e) {
    let { children: t, notice: n } = e;
    return (0, T.jsxs)("div", { className: fE.r, children: [n, (0, T.jsx)("div", { children: t })] });
}
var fx = n(823092),
    fS = n(815996),
    fp = n(379197),
    fT = n(488430),
    ff = n(457421),
    fI = n(940622),
    f_ = n(559474),
    fN = n(757993);
let fC = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, eY.Ay)(tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = f.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, fI.mb)(f_.RN.UPSELL_BANNER)),
        (t = (0, fI.mb)(f_.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, I.bG)([ff.A], () => ff.A.getMarketingBySurface(fp.R.EDIT_PROFILE_SETTINGS))),
        (i = f.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: V.intl.string(V.t.QZVVBh),
                          body: V.intl.string(V.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        f.useMemo(
            () => ({ ...i, type: fT.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fx.L_)();
    return (
        f.useEffect(() => {
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tq.uq)(t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, T.jsxs)("div", {
            ref: l,
            className: fN.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, T.jsx)("div", {
                    className: fN.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, T.jsx)("img", { src: a, className: fN.Qw, alt: "" }),
                }),
                (0, T.jsxs)("div", {
                    className: fN.Em,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fN.DD,
                            children: o,
                        }),
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, T.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, fS.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: V.intl.string(V.t.fYfGgK),
                }),
            ],
        })
    );
};
var fy = n(451909),
    fb = n(202639),
    fv = n(285373),
    fj = n(835071),
    fO = n(724651),
    fL = n(732280),
    fR = n(590180),
    fD = n(898461),
    fP = n(469054),
    fG = n(601298),
    fM = n(207803),
    fU = n(461797);
let fV = Object.keys(fU.jB);
function fk(e) {
    let t = null == e ? fV : fV.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fw = n(201805),
    fF = n(221650);
function fB(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        s = (0, fw.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = f.useMemo(() => {
            let e = (0, fU.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, T.jsxs)("div", {
        className: fF.kL,
        children: [
            (0, T.jsx)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fF.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: s.render(),
            }),
            (0, T.jsxs)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${V.intl.string(V.t["44yJxh"])}`,
                className: fF.Lt,
                children: [
                    (0, T.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fF.L_ }),
                    (0, T.jsx)($.E, {
                        className: fF._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fz = n(511484),
    fY = n(811611),
    fX = n(206697),
    fH = n(507553);
function fW(e, t) {
    let n = fH.A.useField("scrollPosition"),
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fH.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fK = n(844222),
    fZ = n(842092);
let fq = "/assets/d4955aabdcb5bdee.png",
    fQ = { assetOrigin: fP.E.NEW_ASSET, imageUri: fq, staticImageUri: fq, description: "", originalAsset: void 0 };
function f$(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(fK.C),
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
        } = (0, I.cf)([Tn.A], () => {
            let e = Tn.A.getPendingChanges(),
                t = Tn.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Tm.V7)({ userId: t.id, image: g ?? i });
    return (0, T.jsx)(Tg.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fQ,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fZ.WX,
        containerClassName: fZ.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fJ = n(829497);
function f0(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = ap.Ay.isPremium(t),
        l = ap.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, I.cf)([Tn.A], () => {
            let e = Tn.A.getPendingChanges(),
                t = Tn.A.getErrors(),
                n = Tn.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(fk()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, f.useMemo)(() => {
                    let t = (0, fU.Wt)(e);
                    return {
                        banner: (0, fG.X)({
                            assetOrigin: fP.E.NEW_ASSET,
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
                r = (0, I.bG)([fR.A], () => {
                    let e = fR.A.getProduct(s);
                    return (0, fD.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, fM.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, f.useCallback)(() => {
                let n = fk(e);
                (t(n), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    fW(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eY.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fX.T)(), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    f.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: _.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tq.uq)(t$.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fL.V)()?.subscriptionTrial?.skuId === t$.pe.TIER_2,
        S = (0, fO.O)(),
        p = (0, fz.U9)(S, t$.pe.TIER_2);
    return i
        ? (0, T.jsx)(eY.f5, {
              value: A,
              children: (0, T.jsxs)(dF.A, {
                  ref: m,
                  className: fJ.MT,
                  type: dF.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, T.jsx)(Tc, {
                          stickyPreview: !1,
                          layoutClassName: fJ.th,
                          profilePreviewTitle: (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: fJ.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, T.jsxs)(T.Fragment, {
                              children: [(0, T.jsx)(fB, { preset: c, onShuffle: g }), (0, T.jsx)(f$, { user: t })],
                          }),
                          children: (0, T.jsxs)("div", {
                              children: [
                                  (0, T.jsxs)("div", {
                                      children: [
                                          (0, T.jsx)(C.D, {
                                              variant: "heading-xl/extrabold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, T.jsx)($.E, {
                                              className: fJ.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsx)(fe, {
                                      className: fJ.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tm.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fM.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, T.jsx)(TW, {
                                      className: fJ.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fM.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, T.jsx)(Tk, {
                                          className: fJ.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fM.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, T.jsx)(TB, { user: t, className: fJ.fz }),
                                  !x &&
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, T.jsx)(fb.d, {
                              onSubscribeModalClose: h,
                              className: fJ.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fj.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: s
                                  ? V.intl.string(V.t.AfRWI8)
                                  : p
                                    ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: S?.discount.amount })
                                    : V.intl.string(V.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, T.jsxs)("div", {
                              children: [
                                  (0, T.jsx)("div", { className: fJ.BU }),
                                  (0, T.jsx)(fY.Ay, {
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
var f1 = n(814390),
    f2 = n(643056),
    f3 = n(843282),
    f5 = n(145497),
    f4 = n(685073),
    f6 = n(534400),
    f8 = n(581781),
    f7 = n(743981),
    f9 = n(195801);
let Ie = (0, tK.Ld)(),
    It = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, I.cf)([lS.default], () => (0, f4.Zo)(lS.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
            r = f.useMemo(() => {
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
                        e.set(n, { id: n, name: V.intl.string(V.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, s, l]),
            a = f.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, T.jsx)(f8.A, {
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
            u = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, T.jsx)(f5.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, T.jsx)(f6.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f7.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = f.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, T.jsx)(T.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = f.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = f.useCallback((e) => e === l, [l]),
            A = f.useCallback((e) => e, []),
            E = f.useCallback(() => {
                i?.(null);
            }, [i]),
            h = f.useRef(null);
        return (
            fW(h, eL._F.GUILD_TAG),
            (0, T.jsxs)(ad.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: Ie,
                ref: h,
                children: [
                    (0, T.jsx)($.E, {
                        className: f9.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, T.jsx)(f3.Pw, {
                        className: f9.Lt,
                        optionClassName: f9.S0,
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
var In = n(318785),
    Ii = n(470739);
let Is = function () {
    return (0, f2.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, T.jsx)(ad.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, T.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, Ii.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var Il = n(953726);
let Ir = (0, tK.Ld)();
function Ia(e) {
    let t = (0, xY.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(ad.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: Ir,
        children: [
            (0, T.jsx)("div", {
                children: (0, T.jsx)(sT.k, {
                    "aria-labelledby": Ir,
                    placeholder: e.placeholder,
                    maxLength: _.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, T.jsx)(TB, { user: e.user, className: Il.F }),
        ],
    });
}
var Io = n(376626);
function Iu(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, T.jsx)("div", {
        className: Io.u,
        children: (0, T.jsx)(t4.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: s ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, Te._e)() : (0, TD.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Id(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T0.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, T1.rh)(l, r, !1),
        o = (0, T4.LX)(a[0]);
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, T.jsx)(T7, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Ic = n(518477);
let Ig = function () {
    let e = (0, I.bG)([d0.default], () => d0.default.getId());
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, T.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, Ts.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Ic.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Im = n(654910);
function IA() {
    let e = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([TA.A], () => TA.A.getUserProfile(e.id)),
        n = (0, f2.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, I.cf)([Tn.A], () => {
            let e = Tn.A.getPendingChanges(),
                t = Tn.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tm.V7)({ userId: e.id, image: i }),
        A = (0, TS.EC)(),
        E = ap.Ay.canUsePremiumProfileCustomization(e),
        h = (0, To.z5)(i, e.avatar),
        x = (0, To.Ac)(l, t?.banner),
        S = (0, T2.Ay)(e.id),
        p = S?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, In.b)(),
        C = null != (0, f4.Zo)(e.primaryGuild).guildId;
    return (0, T.jsxs)("div", {
        className: Im.Q,
        children: [
            (0, T.jsx)(Ia, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TD.p)({ globalName: e }),
                user: e,
            }),
            (0, T.jsx)(
                ft,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TD.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, T.jsx)(Ig, {}),
            (0, T.jsx)(
                Tk,
                {
                    onAvatarChange: (e) => {
                        ((0, TD.p)({ avatar: e }), (0, To.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, T.jsx)(TG, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, T.jsx)(TX, { user: e }),
            (0, T.jsx)(Tq, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, T.jsx)(TJ, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(
                              TW,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TD.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, T.jsx)(fe, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TD.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, T.jsx)(
                      Id,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TD.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, T.jsx)(
                TO,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, TD.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, T.jsx)(It, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TD.p)({ primaryGuildId: e }),
                }),
            null != p &&
                !n &&
                (0, T.jsx)(Iu, { legacyUsername: p, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, T.jsx)(Is, {}, "badges"),
        ],
    });
}
function IE() {
    (0, sp.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, T.jsx)(e, {
                ...t,
                source: {
                    page: _.liQ.USER_SETTINGS,
                    section: _.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: _.ZSU.BUTTON_CTA,
                    type: _.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var Ih = n(447080);
function Ix() {
    let e = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, I.cf)([Tn.A], () => ({ ...Tn.A.getPendingChanges(), showNotice: Tn.A.showNotice() })),
        a = (0, Tm.V7)({ userId: e.id, image: i }),
        o = (0, To.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, f1.A)() && null != n ? fy.Ay.parse(void 0, n).content : n,
        d = ap.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eY.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => Te.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, T.jsx)(oE.A, {})
        : (0, T.jsxs)(eY.f5, {
              value: c,
              children: [
                  (0, T.jsx)(fC, {}),
                  (0, T.jsx)(Tc, {
                      profilePreview: (0, T.jsx)(Tg.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: IE,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: Ih.ti,
                      }),
                      nameplatePreview: (0, T.jsx)(Ta.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Ih.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, T.jsx)(IA, {}),
                  }),
                  (0, T.jsx)(cR.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, T.jsx)("div", {
                          ref: E,
                          children: (0, T.jsx)(f0, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, T.jsx)(fb.d, {
                          className: Ih.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, fj.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, T.jsx)(fv.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, T.jsx)("div", {
                              className: Ih.Xl,
                              children: (0, T.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(_.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: aa.t,
                              }),
                          }),
                      }),
              ],
          });
}
var IS = n(625494);
n(46121);
var Ip = n(944983);
let IT = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    If = (0, h.E2)(x.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sj.A, gb.Ay, Tn.A], () => {
                    let e = Tn.A.selectedGuildId ?? sj.A.getGuildId();
                    return null == e || Tn._.has(e) ? gb.Ay.getFlattenedGuildIds().find((e) => !Tn._.has(e)) : e;
                }),
                t = (0, I.bG)([sv.A], () => sv.A.getGuild(e)),
                n = (0, I.bG)([Tn.A], () => Tn.A.showNotice()),
                i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
                s = fH.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(IT[s]);
                }, [s]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fA.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, T.jsx)(fh, {
                    children: (0, T.jsxs)(ub.F, {
                        component: (0, T.jsx)(sm.A, {
                            children: (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, T.jsxs)(Tl.V, {
                                className: Ip.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                IS._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, Tr.V2)(t.id),
                                            fH.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, T.jsx)(
                                        Tl.V.Item,
                                        {
                                            className: Ip.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, T.jsx)(
                                        Tl.V.Item,
                                        {
                                            className: ic()(Ip.YU, Ip.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eL.Eq.GUILD
                                ? (0, T.jsx)(fm, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  IS._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Tr.JJ)(e.id);
                                      },
                                  })
                                : (0, T.jsx)(Ix, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            V.intl.string(V.t["vi7f+q"]),
            V.intl.string(V.t.Ip9nBS),
            V.intl.string(V.t["2p07FR"]),
            V.intl.string(V.t["7vhiqk"]),
            V.intl.string(V.t.kPHroX),
            V.intl.string(V.t.lqaIxI),
            V.intl.string(V.t.Vgdusv),
            V.intl.string(V.t.DMeO2X),
        ],
    }),
    II = (0, h.zZ)(x.X.PROFILE_CATEGORY, { buildLayout: () => [If] });
var I_ = n(379633);
function IN() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cH.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, T.jsxs)("div", {
              className: I_.a5,
              children: [
                  (0, T.jsx)(b.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, T.jsxs)("div", {
                      className: I_.FS,
                      children: [
                          (0, T.jsx)($.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, T.jsxs)("div", {
                              className: I_.Fk,
                              children: [
                                  (0, T.jsx)($.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, T.jsx)(ax.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let IC = (0, h.t_)(x.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [Tn.A], element: Tt.A },
        initialize: () => Te.F7,
        buildLayout: () => [II],
    }),
    Iy = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: Iv,
        StronglyDiscouragedCustomComponent: IN,
        usePredicate: () => !(0, Ti.X)("user_settings_sidebar"),
        buildLayout: () => [IC],
    }),
    Ib = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: Iv,
        StronglyDiscouragedCustomComponent: IN,
        usePredicate: () => (0, Ti.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d0.default.getId();
            (0, Ts.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Iv() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cH.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, T.jsx)(b.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let Ij = (0, h.WI)(x.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [Iy, Ib] });
var IO = n(98207);
n(204925);
let IL = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sp.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, T.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uG.tE : null, onCloseCallback: t },
    );
};
var IR = n(940856),
    ID = n(506775),
    IP = n(379257),
    IG = n(121780),
    IM = n(666113);
function IU() {
    let e = IG.A.getCountryCode(),
        t = null != e ? IM.IN[e.alpha2] : void 0;
    IP.A.openUrl(ey.A.getArticleURL(t ?? IM.k9));
}
var IV = n(521169);
function Ik() {
    return (0, IV.w)(IM.Vc);
}
var Iw = n(680091);
function IF() {
    let e = Ik(),
        t = (0, ID.ZP)();
    if (!e) return null;
    switch (t) {
        case ID.M$.ADULT:
            return V.intl.format(Iw.default.gi4ulu, { handleOnAgeGatedContentHook: ID.M0 });
        case ID.M$.TEEN:
            return V.intl.format(Iw.default["221iML"], {
                handleOnAgeGatedContentHook: ID.M0,
                handleOnConfirmAgeHook: ID.aP,
            });
        case ID.M$.UNVERIFIED:
            return V.intl.format(Iw.default["W0/7DD"], {
                handleOnAgeGatedContentHook: IU,
                handleOnConfirmAgeHook: ID.aP,
            });
    }
}
var IB = n(26137),
    Iz = n(957485);
function IY() {
    let e = Ik(),
        t = (0, ID.ZP)();
    return e ? { icon: t === ID.M$.ADULT ? IB.r : Iz.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function IX() {
    let e = IY();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function IH() {
    return Ik() ? V.intl.string(V.t.piqs0o) : null;
}
var IW = n(438140);
let IK = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    IZ = [];
function Iq() {
    return (0, IW.Wt)() ? IK : IZ;
}
var IQ = n(36149),
    I$ = n(207560),
    IJ = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    I0 = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function I1(e, t) {
    let n = (0, I.bG)([lS.default], () => null != lS.default.getCurrentUser()),
        i = (0, I$.fk)(),
        s = (0, ID.ZP)(),
        l = (0, IQ.Y2)(),
        r = Ik();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case ID.M$.UNVERIFIED:
            return "verify" === e;
        case ID.M$.TEEN:
            return e === (r ? "info" : "verify");
        case ID.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var I2 = n(841365);
function I3() {
    let e = (0, ID.hD)();
    return (0, T.jsxs)($.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(I2.default.WM5adV, { handleOnHelpUrlHook: ID.M0 })],
    });
}
let I5 = {
        useTitle: () => IH() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: IF,
        useVariant: () => "secondary",
        useLeadingDecoration: IX,
        getDismissibleBadges: Iq,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: I3,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    },
    I4 = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I5, usePredicate: () => I1(I0.EDIT, IJ.LEGACY) }),
    I6 = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I5,
        usePredicate: () => I1(I0.EDIT, IJ.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    I8 = {
        useTitle: () => IH() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: IF,
        useLeadingDecoration: function () {
            let e = IY();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: Iq,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, ID.hD)() }),
    },
    I7 = (0, h.v_)(x.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...I8, usePredicate: () => I1(I0.INFO, IJ.LEGACY) }),
    I9 = (0, h.v_)(x.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...I8,
        usePredicate: () => I1(I0.INFO, IJ.TINY_BRONCO),
    }),
    _e = {
        useTitle: () => IH() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: IF,
        useVariant: () => "secondary",
        useLeadingDecoration: IX,
        getDismissibleBadges: Iq,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, ID.hD)() }),
        useLabel: function () {
            return (0, IQ.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: ID.aP,
    },
    _t = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ..._e, usePredicate: () => I1(I0.VERIFY, IJ.LEGACY) }),
    _n = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ..._e,
        usePredicate: () => I1(I0.VERIFY, IJ.TINY_BRONCO),
    }),
    _i = [_t, I4, I7],
    _s = [_n, I6, I9],
    _l = (0, h.Tf)(x.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => IL(),
    });
function _r(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function _a(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function _o(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = f.useState(!1),
        a = l ? t : n(t);
    return (0, T.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, T.jsx)($.E, { variant: "text-md/medium", children: a }),
            (0, T.jsx)(hD.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function _u() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.email);
    return null == e
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, T.jsx)(_o, {
              text: e,
              censor: _a,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let _d = (0, h.Tf)(x.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _u }),
    useLabel: function () {
        return null == (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.email)
            ? V.intl.string(V.t["pvBD+W"])
            : V.intl.string(V.t["8peUT0"]);
    },
    onClick: function () {
        (0, sp.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, T.jsx)(e, { ...t });
        });
    },
});
var _c = n(557722),
    _g = n(53516);
function _m() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, T.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, T.jsx)(_o, {
                  text: t,
                  censor: _r,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let _A = (0, h.Tf)(x.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _m }),
    useLabel: function () {
        return null == (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    onClick: function () {
        null == lS.default.getCurrentUser()?.phone
            ? (0, sp.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, T.jsx)(e, { reason: _c.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _g.V },
              )
            : (0, sp.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, T.jsx)(e, { ...t });
              });
    },
});
function _E() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _h() {
    let e = (0, TS.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)($.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, T.jsx)(sg.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, T.jsx)(iJ.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n1.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let _x = (0, h.Tf)(x.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _h,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (_E() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _E,
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    }),
    _S = (0, h.zZ)(x.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, I.bG)([lS.default], () => null != lS.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: V.intl.string(V.t.tuGzBT),
                            text: V.intl.string(V.t.NAzplE),
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, IR.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => IL() },
                    };
        },
        buildLayout: () => [_x, _l, _d, _A, ..._i],
    });
var _p = n(398177);
let _T = (0, h.Tf)(x.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sp.openModal)((e) => (0, T.jsx)(_p.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _f = n(200921);
let _I = [];
function __() {
    _I = [];
}
class _N extends I.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _I;
    }
}
let _C = new _N(tl.h, {
    LOGOUT: __,
    LOGIN_SUCCESS: __,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _I = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._I],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _I = n;
    },
});
function _y() {
    let e = (0, I.cf)([_C], () => _C.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            n = null,
            i = d0.default.getAuthSessionIdHash();
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
function _b(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var _v = n(176524),
    _j = n(646270),
    _O = n(738678),
    _L = n(489828);
function _R(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, T.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, T.jsx)(_v.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
            (0, T.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, T.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, T.jsx)($.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, T.jsx)($.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, T.jsx)($.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, T.jsx)($.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function _D(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dm.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: _j.u };
                        case "horizon os":
                            return { text: e, icon: _O.G };
                        default:
                            return { text: e, icon: dm.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _b(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, T.jsx)(_R, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, T.jsx)(n4.D, {
                className: _L.X,
                onClick: () => (0, _f.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, T.jsx)(uF.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _P(e) {
    let { title: t, children: n } = e,
        i = f.useId();
    return (0, T.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, T.jsx)(C.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, T.jsx)(q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let _G = (0, h.E2)(x.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _y();
            return null == e
                ? (0, T.jsx)(oN.y, {})
                : (0, T.jsx)(_P, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, T.jsx)(_D, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _M = (0, h.E2)(x.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _y();
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, T.jsx)(j.$, {
                    onClick: () => (0, _f.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _y();
            return e.length > 0;
        },
    });
var _U = n(766928);
function _V() {
    return (0, T.jsx)(_R, {
        icon: _U.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(x.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _k = (0, h.E2)(x.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _y(),
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, T.jsxs)(_P, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, T.jsx)(_D, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, T.jsx)(_V, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _y(),
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _w = (0, h.zZ)(x.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, _f.GY)();
        },
        buildLayout: () => [_G, _k, _M],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    _F = (0, h.t_)(x.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: oE.L,
        buildLayout: () => [_w],
    }),
    _B = (0, h.t0)(x.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_F],
        initialize: () => {
            (0, _f.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _y(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var _z = n(464477);
function _Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? V.intl.string(V.t.YJGvuD)
              : V.intl.string(V.t["3iKih7"])
          : e.hasFlag(_.nhx.PARTNER)
            ? t
                ? V.intl.string(V.t["9UucjT"])
                : V.intl.string(V.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? V.intl.string(V.t["9VWpT9"])
                  : V.intl.string(V.t.LfCBZG)
              : null;
}
function _X() {
    return (0, oi.bG)([lS.default], () => {
        let e = lS.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _H =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function _W() {
    let e = (0, oi.bG)([lS.default], () => lS.default.getCurrentUser()?.verified);
    return _z.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _K() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oi.bG)([sv.A, fi.A, lS.default], () =>
        lS.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : sv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fi.A.can(_.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var _Z = n(466034);
let _q = (0, h.Tf)(x.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => _K(!0),
        useDisabled: () => null !== _K(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, I.bG)([d0.default], () => d0.default.hasTOTPEnabled()),
                t = _W() === _H.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n2.A)({
                title: V.intl.string(V.t["D+aE7g"]),
                subtitle: V.intl.string(V.t.EA4ZEk),
                variant: "critical",
                confirmText: V.intl.string(V.t.N86XcP),
                onConfirm: () => IO.A.disable(),
            }),
    }),
    _Q = (0, h.zZ)(x.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([d0.default], () => d0.default.hasTOTPEnabled()),
                t = _W() === _H.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: _Z.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_W()) {
                case _H.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case _H.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case _H.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_q],
    });
var _$ = n(670492),
    _J = n(32880),
    _0 = n(663417),
    _1 = n(658675),
    _2 = n(900686);
function _3() {
    (0, sp.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, T.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    IO.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sp.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, T.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: V.intl.string(V.t.PsQmzU),
                actionText: V.intl.string(V.t.ajkYcF),
            });
    });
}
var _5 = n(858487);
function _4(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _6() {
    let e = _$.A.getVerificationKey();
    if ("" === e) return void _3();
    try {
        await IO.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function _8(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _4(t),
        s = f.useRef(null),
        l = (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)(_1.P, { checked: n }), (0, T.jsx)($.E, { variant: "text-md/normal", children: i })],
        });
    return uv.p5
        ? (0, T.jsx)(n4.D, {
              tag: "li",
              className: ic()(_5.aY, _5.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uv.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uv.C)(i), (0, lg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, T.jsx)("li", { className: _5.aY, children: l });
}
let _7 = (0, h.zZ)(x.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, I.bG)([_$.A], () => _$.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: _X,
        buildLayout: () => [_9],
    }),
    _9 = (0, h.E2)(x.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, I.bG)([_$.A], () => _$.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_4(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, T.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: _3 })
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)("ul", {
                              className: _5.E5,
                              children: e.map((e) => (0, T.jsx)(_8, { code: e }, e.code)),
                          }),
                          (0, T.jsxs)(l2.e, {
                              size: "sm",
                              children: [
                                  (0, T.jsx)(_2.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, T.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _J.DownloadIcon,
                                      }),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _0.RefreshIcon,
                                      onClick: _6,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Ne = (0, h.Tf)(x.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, T.jsx)(hD.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sp.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, T.jsx)(e, {
                        ...t,
                        handleSubmit: IO.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    Nt = (0, h.zZ)(x.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, I.bG)([lS.default], () => _Y(lS.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
                t = (0, I.bG)([lS.default], () => null != _Y(lS.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: Nn,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _W(),
                t = _X(),
                n = (0, I.bG)([d0.default], () => d0.default.hasTOTPEnabled());
            return e === _H.AVAILABLE && t && n;
        },
        buildLayout: () => [Ne],
    });
function Nn() {
    let e = lS.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _c.d.USER_SETTINGS_UPDATE, onAddedPhone: IO.A.enableSMS }),
                (0, sp.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, T.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: _g.V },
                ));
        } else IO.A.enableSMS();
}
var Ni = n(665671),
    Ns = n(442433),
    Nl = n(917136),
    Nr = n(976910),
    Na = n(267255);
function No(e) {
    let { credential: t } = e;
    return (0, T.jsxs)("li", {
        className: Na.e,
        children: [
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: _b(t.last_used) }),
                        }),
                ],
            }),
            (0, T.jsx)(sd.K, {
                icon: gR.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Ns.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, T.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Nu = (0, h.zZ)(x.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (_W() === _H.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: Ni.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_W()) {
                    case _H.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case _H.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case _H.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nd],
    }),
    Nd = (0, h.E2)(x.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, I.cf)([Nr.A], () => ({
                hasFetchedCredentials: Nr.A.hasFetchedCredentials(),
                credentials: Nr.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || Nl.JQ();
            }, [t]),
            t)
                ? (0, T.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, T.jsx)(No, { credential: e }, e.id)),
                  })
                : (0, T.jsx)(oN.y, {});
        },
    }),
    Nc = (0, h.t_)(x.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [Nu, _Q, Nt, _7],
    }),
    Ng = (0, h.t0)(x.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _X();
            return { type: p.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nc],
    }),
    Nm = (0, h.zZ)(x.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [_T, Ng, _B],
    }),
    NA = { [ID.M$.ADULT]: Iw.default.PMznGO, [ID.M$.TEEN]: Iw.default.qSkhZH, [ID.M$.UNVERIFIED]: Iw.default.vGxRDB },
    NE = [eE.M.TINY_BRONCO_NOTICE],
    Nh = [];
function Nx() {
    IP.A.openUrl(IM.m5);
}
var NS = n(308645),
    Np = n(555725),
    NT = n(855267);
let Nf = (0, h.E2)(x.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NT.A,
    }),
    NI = (0, h.zZ)(x.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nf] }),
    N_ = (0, h.t_)(x.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [NI],
    }),
    NN = (0, h.t0)(x.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: Np.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Np._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Np.aO)() };
        },
        initialize: () => {
            NS.Yn();
        },
        buildLayout: () => [N_],
    }),
    NC = (0, h.zZ)(x.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (Ik() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IW.LH)(),
                t = (0, ID.ZP)(),
                [n, i] = (0, mj.kn)(e ? NE : Nh);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(NA[t], { handleOnBlogHook: Nx }),
                      onDismiss: () => i(mV.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [..._s, NN],
    });
var Ny = n(738188),
    Nb = n(834981),
    Nv = n(987197),
    Nj = n(822585),
    NO = n(840387),
    NL = n(961526),
    NR = n(513687);
let ND = (0, h.E2)(x.X.FAMILY_CENTER_SETTING, {
        Component: NL.p,
        useSearchTerms: () => [
            V.intl.string(NR.default.RZqaJn),
            V.intl.string(NR.default.bdBmqy),
            V.intl.string(NR.default["gVWG+6"]),
            V.intl.string(NR.default.ahKIJO),
            V.intl.string(NR.default["8SLtqb"]),
        ],
    }),
    NP = (0, h.zZ)(x.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [ND] }),
    NG = (0, h.t_)(x.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(NR.default.RZqaJn),
        buildLayout: () => [NP],
    }),
    NM = (0, h.zZ)(x.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(NR.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Nv.f)(),
                t = (0, Nj.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Nb.VT)();
            return f.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NU],
    }),
    NU = (0, h.t0)(x.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nb.Li)() ? V.intl.string(NR.default.IcMQUP) : V.intl.string(NR.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NO.Z)(),
                t = (0, Nb.Li)();
            return e
                ? t
                    ? V.intl.string(NR.default.G8lHFU)
                    : V.intl.string(NR.default.uOLNEZ)
                : V.intl.string(NR.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Nv.f)(),
                t = (0, Nj.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: Ny.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NG],
    });
var NV = n(425587),
    Nk = n(662758);
function Nw(e) {
    if (e.body.code === _.t02.INVALID_PASSWORD) throw e;
    (0, lJ.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function NF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lS.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NV.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lJ.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sv.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lJ.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, sp.openModal)((t) =>
                  (0, T.jsx)(Nk.default, {
                      ...t,
                      handleSubmit: (t) => (0, Te.U_)(t, e).then(_.tEg, Nw),
                      title: e ? V.intl.string(V.t.xca2ts) : V.intl.string(V.t.goXv9g),
                      actionText: e ? V.intl.string(V.t["8lQ2rR"]) : V.intl.string(V.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? V.intl.string(V.t.FB4H1D) : V.intl.string(V.t.gk7h32),
                  }),
              )
            : (0, n2.A)({
                  title: V.intl.string(V.t.xca2ts),
                  subtitle: V.intl.string(V.t.FB4H1D),
                  confirmText: V.intl.string(V.t["8lQ2rR"]),
                  onConfirm: () => (0, Te.U_)("", !0),
              });
}
let NB = (0, h.Tf)(x.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NF(!0),
    }),
    Nz = (0, h.Tf)(x.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NF(!1),
        usePredicate: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NY = (0, h.zZ)(x.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nz, NB] }),
    NX = (0, h.t_)(x.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (IO.A.clearBackupCodes(), (0, Te.Uo)());
            };
        },
        useObscuredNotice: oE.L,
        buildLayout: () => [_S, Nm, NC, NM, NY],
    }),
    NH = (0, h.i4)(x.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: Aj.UserIcon,
        buildLayout: () => [NX],
    });
var NW = n(176781),
    NK = n(274372),
    NZ = n(572164),
    Nq = n(614584),
    NQ = n(696016);
let N$ = [NQ.zq, 25, 50, NQ.Y2, NQ.rv],
    NJ = (0, h.sN)(x.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: NQ.zq,
        maxValue: NQ.rv,
        useDefaultValue: () => NQ.Y2,
        getInitialValue: () => NK.Ay.getSettings().clipsQuality.bitratePercent ?? NQ.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NK.Ay.getSettings();
            Nq.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: N$,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, NZ.E)(),
    });
var N0 = n(226640);
let N1 = (0, h.Hn)(x.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NK.Ay.getSettings();
            Nq.GS({ ...t, frameRate: e });
        },
        useOptions: N0.Fz,
        useDisabled: () => !(0, NZ.E)(),
    }),
    N2 = (0, h.E2)(x.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, I.bG)([NK.Ay], () => NK.Ay.getHardwareClassification()) === NQ.k9.BELOW_MINIMUM,
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    N3 = (0, h.Hn)(x.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().clipsLength),
        setValue: (e) => Nq.h$(e),
        useOptions: N0.Qu,
        useDisabled: () => !(0, NZ.E)(),
    }),
    N5 = (0, h.E2)(x.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    N4 = (0, h.Hn)(x.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NK.Ay.getSettings();
            Nq.GS({ ...t, resolution: e });
        },
        useOptions: N0.gF,
        useDisabled: () => !(0, NZ.E)(),
    }),
    N6 = (0, h.zD)(x.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().remindersEnabled),
        setValue: (e) => Nq.Mt(e),
        useDisabled: () => !(0, NZ.E)(),
    });
var N8 = n(268378);
let N7 = (0, h.zZ)(x.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(N8.default.TGwzMe),
        buildLayout: () => [N2, N3, N1, N4, NJ, N5, N6],
    }),
    N9 = (0, h.zD)(x.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Nq.YP(e),
    }),
    Ce = (0, h.zD)(x.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Nq.Uh(e),
    }),
    Ct = (0, h.zZ)(x.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, I.bG)([lS.default], () => {
                let e = lS.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N9, Ce],
    });
var Cn = n(417270),
    Ci = n(847825);
let Cs = (0, h.E2)(x.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, I.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, NZ.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, sx.OH)(NQ.Ot) });
                }, [e]);
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, T.jsx)("div", {
                    className: Ci.g,
                    children: (0, T.jsx)(sh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, T.jsxs)(T.Fragment, {
                            children: [
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(N8.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(N8.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(N8.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: Cn.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(N8.default.Kyk1Tp),
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
    Cl = (0, h.E2)(x.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: sW.BW,
        Component: () => {
            let e = (0, I.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
                t = (0, I.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0));
            (tE()(null != e, "Save clip keybind unset"), tE()(null != t, "Save screenshot keybind unset"));
            let n = f.useCallback(
                (e) => {
                    iZ.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t["0U/hj7"]),
                description: V.intl.string(V.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, T.jsx)("div", {
                    className: Ci.g,
                    children: (0, T.jsx)(sh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cr = (0, h.zD)(x.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, NZ.E)(),
        setValue: (e) => Nq.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Ca = (0, h.zY)(x.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cr, Cs, Cl], headerSettingKey: Cr.key }),
    Co = (0, h.zZ)(x.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(N8.default["dh7g+S"], { learnMoreLink: ey.A.getArticleURL(_.MVz.CLIPS) }),
        buildLayout: () => [Ca],
    }),
    Cu = (0, h.E2)(x.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, I.bG)([NK.Ay], () => NK.Ay.getSettings().storageLocation),
                t = !(0, NZ.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await np.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Nq.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.s4773E),
                description: V.intl.string(V.t.svjwGh),
                layout: "vertical",
                children: (0, T.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, T.jsx)(sT.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": V.intl.formatToPlainString(V.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, T.jsx)(j.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: V.intl.string(N8.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Cd = (0, h.zZ)(x.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(N8.default["0Q+pdZ"]),
        buildLayout: () => [Cu],
    }),
    Cc = (0, h.t_)(x.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: sW.sw,
        buildLayout: () => [Co, N7, Cd, Ct],
    }),
    Cg = (0, h.i4)(x.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: NW.x,
        buildLayout: () => [Cc],
    });
var Cm = n(254138),
    CA = n(290595);
let CE = [];
var Ch = n(153488),
    Cx = n(171316),
    CS = n(327919),
    Cp = n(558001);
n(866945);
var CT = n(835002);
function Cf() {
    let e = (0, Cx.uM)(),
        t = (0, Nb.vx)(),
        n = f.useCallback(() => {
            ((0, CS.A)(t, tX.default, () =>
                (0, lg.P0)({
                    text: V.intl.formatToPlainString(NR.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, Cp.N)(CT.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CT.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, Cp.N)(CT.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CT.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(NR.default.i284fU, {
                    hook: (e, t) => (0, T.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CI = (0, h.zD)(x.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => Nq.eQ({ allowVoiceRecording: e }),
});
var C_ = n(157559),
    CN = n(331887);
function CC() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = (0, I.bG)([CN.A], () => CN.A.harvestType),
        [n, i] = f.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = f.useRef(null);
    return (f.useEffect(() => {
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
let Cy = (0, h.Tf)(x.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = CC();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: ey.A.getArticleURL(_.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return V.intl.string(V.t.hIbRso);
                case "not_verified":
                    return V.intl.format(V.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, T.jsx)(
                                n4.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, na.openUserSettings)(x.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = im()(e.nextAllowed).format("MMMM Do YYYY");
                    return V.intl.format(V.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (tl.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                ts.Bo.get({ url: _.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        tl.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        tl.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CC().allowed,
        useLoading: () => (0, I.bG)([CN.A], () => CN.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => V.intl.string(V.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sp.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, T.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, Te.$I)(n)
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
                                            ? C_.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : C_.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        C_.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    Cb = (0, h.v_)(x.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(x.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(x.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cv = n(641216);
let Cj = (0, ua.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function CO() {
    let { enabled: e } = Cj.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CL = n(884705);
function CR() {
    return (0, I.bG)([CL.A], () => CL.A.isTogglesDisabled());
}
function CD() {
    return !U.vf.useSetting();
}
function CP(e) {
    U.vf.updateSetting(!e);
}
function CG() {
    let e = CR(),
        t = U.H1.useSetting(),
        n = (0, Cx.uM)();
    return e || t || n;
}
let CM = (0, h.zD)(x.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !CO(),
        useValue: CD,
        setValue: CP,
        useDisabled: CG,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    CU = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CO,
        useValue: CD,
        setValue: CP,
        useDisabled: CG,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function CV() {
    return !U.H1.useSetting();
}
function Ck(e) {
    U.H1.updateSetting(!e);
}
function Cw() {
    let e = CR(),
        t = (0, Cx.uM)();
    return e || t;
}
let CF = (0, h.zD)(x.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !CO(),
        useValue: CV,
        setValue: Ck,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: Cw,
    }),
    CB = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CO,
        useValue: CV,
        setValue: Ck,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: Cw,
    }),
    Cz = (0, h.AK)(x.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h4(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h6();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hJ.n1)(e))) && (0, nh.xl)(),
    }),
    CY = (0, h.gN)(x.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cz] });
var CX = n(972737);
let CH = (0, h.zD)(x.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: ey.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, I.bG)([Ch.A], () => Ch.A.hasConsented(_.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CA.U)([_.YAq.USAGE_STATISTICS], []).catch(CX.i)
                : (0, CX.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, CA.U)([], [_.YAq.USAGE_STATISTICS]).catch(CX.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: Cx.uM,
    }),
    CW = (0, h.zZ)(x.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: Cf,
        initialize: () => {
            Ch.A.fetchedConsents || (0, CA.Q)();
        },
        buildLayout: () => [Cb, CH, Cv._, CF, CM, ...CE, CI, Cy, CY],
    });
var CK = n(15762);
let CZ = (0, h.zD)(x.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(CK.default.F3llsQ),
    useSubtitle: () => V.intl.string(CK.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: xe.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function Cq() {
    let e = U.JG.useSetting();
    return (0, I.yK)(
        [gb.Ay, sv.A],
        () => {
            let t = new Set(e);
            return gb.Ay.getFlattenedGuildIds().filter((e) => null != sv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CQ = (0, h.AK)(x.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Cq();
            if (0 === e.length) return V.intl.format(V.t.QJIJ5p, {});
            let t = sv.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? V.intl.format(V.t["T+8J4A"], { guildName: n })
                : V.intl.format(V.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = Cq()),
                    0 ===
                    (t = (0, I.yK)(
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
                                    icon: (0, T.jsx)(xm, { guild: t[0], size: h0.CD }),
                                    shape: h0.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, T.jsx)(xm, { guild: t[1], size: h0.CD }), shape: h0.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, T.jsx)(xm, { guild: t[0], size: h0.CD }),
                                    shape: h0.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    C$ = (0, h.gN)(x.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CQ] }),
    CJ = (0, h.Qx)(x.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => V.intl.string(V.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: V.intl.string(V.t.Boxc8R),
                    desc: V.intl.string(V.t["nLj+nc"]),
                    value: e$.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: V.intl.string(V.t.YOIKBt),
                    desc: V.intl.string(V.t.y0JZ4s),
                    value: e$.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: V.intl.string(V.t.u0nlJv), desc: V.intl.string(V.t["4jnKHu"]), value: e$.KP.FRIENDS_ONLY },
            ];
        },
        useValue: U.KP.useSetting,
        setValue: function (e) {
            let t = U.KP.getSetting();
            U.KP.updateSetting(e);
            let i = (0, xa.gS)(t, e);
            null != i &&
                (0, sp.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, T.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [V.intl.string(V.t.Qnf32C)],
    }),
    C0 = (0, h.zZ)(x.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: ey.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CJ, CZ, C$],
    });
var C1 = n(952270),
    C2 = n(678538);
let C3 = { [e$.tR.REAL_MONEY_GAMING]: C2.default.pmIitA },
    C5 = Object.keys(C3).map(Number),
    C4 = (0, h.E2)(x.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(C2.default.foQaI1)],
        usePredicate: CO,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        C5.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(C3[e]),
                            leading: C1.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, T.jsx)(p$.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of C5) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(C2.default.foQaI1),
                description: V.intl.format(C2.default["z/MfaY"], {
                    helpdeskArticle: ey.A.getArticleURL(_.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(C2.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C6 = (0, h.zZ)(x.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(C2.default.XUj46U),
        usePredicate: CO,
        buildLayout: () => [CB, CU, C4],
    });
var C8 = n(714763),
    C7 = n(814278),
    C9 = n(730852),
    ye = n(913122),
    yt = n(977997),
    yn = n(144485);
async function yi(e, t) {
    if (e) {
        tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C7.to)(1), t?.());
        } catch (t) {
            let e = new ye.LG(t);
            (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                C_.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function ys(e) {
    let t,
        n,
        i =
            ((t = yt.A.getVoiceStateForUser(d0.default.getId())),
            (n = sy.A.getChannel(t?.channelId)),
            d0.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? yn.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await yi(e, () => {
                      (C9.default.disconnect(), C9.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yi(e);
}
n(603266);
let yl = (0, h.zD)(x.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, C7.Lu)() }),
    useValue: function () {
        return (0, I.bG)([C8.A], () => C8.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        ys(e);
    },
});
var yr = n(787392);
function ya() {
    return (0, I.yK)([yr.A], () => yr.A.getUserIds());
}
var yo = n(803306),
    yu = n(966327),
    yd = n(774156);
function yc(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(),
        s = (0, I.bG)([lS.default], () => lS.default.getUser(t)),
        l = uR.Ay.getFormattedName(s),
        r = f.useCallback(() => {
            (0, C7.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, Ts.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, yo.wz)(t);
        }, [t]),
        (0, T.jsxs)("div", {
            className: yd.uW,
            children: [
                null != s && (0, T.jsx)(yu.A, { className: yd.my, user: s, size: v._3.SIZE_40 }),
                (0, T.jsxs)("div", {
                    className: yd.Qq,
                    children: [
                        (0, T.jsx)(n4.D, {
                            className: yd.Xh,
                            onClick: a,
                            children: (0, T.jsx)($.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, T.jsx)($.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, T.jsx)(n4.D, { onClick: r, className: yd.Qz, children: (0, T.jsx)(sc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yg(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C7.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, C7.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, T.jsxs)("div", {
        className: t,
        children: [
            (0, T.jsxs)("div", {
                className: yd.Qq,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, T.jsx)($.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, T.jsx)(n4.D, {
                className: yd.Kk,
                onClick: r,
                children: (0, T.jsx)(uF.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function ym(e) {
    let { userId: t } = e,
        n = (0, I.yK)([yr.A], () =>
            K()(yr.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)(yc, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, T.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, T.jsx)(yg, { className: yd.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, T.jsx)("div", { className: yd.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yA = n(464946),
    yE = n(492422);
let yh = (0, h.E2)(x.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = ya();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = ya();
            return (0, T.jsxs)(yA.h, {
                children: [
                    (0, T.jsx)(yA._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, C7.dc)() }),
                    }),
                    e.map((e) => (0, T.jsx)("div", { className: yE.A, children: (0, T.jsx)(ym, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yx = (0, h.zZ)(x.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [yl, yh],
    }),
    yS = (0, h.t_)(x.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [CW, C6, C0, yx],
    }),
    yp = (0, h.i4)(x.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: Cm.m,
        buildLayout: () => [yS],
    });
var yT = n(476713);
let yf = (0, h.AK)(x.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: x.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yI = (0, h.gN)(x.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yf] });
var y_ = n(875444);
function yN(e, t) {
    let n = (0, I.bG)([xB.default], () => xB.default.getFetchState()),
        i = (0, I.bG)([xB.default], () =>
            e ? xB.default.getNewestTokensForNonChildrenApplications() : xB.default.getNewestTokens(),
        ),
        s = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, y_.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || xj.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xB.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var yC = n(514479);
function yy() {
    return (0, T.jsxs)("div", {
        className: yC.d,
        children: [
            (0, T.jsx)($.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yC.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, T.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: ey.A.getArticleURL(_.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yb = (0, h.E2)(x.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yN(!0, !0);
        return e ? (0, T.jsx)(oN.y, {}) : (0, T.jsx)(yy, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yN(!0, !0);
        return e || 0 === t.length;
    },
});
function yv() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yN(!0, !0);
    return !e && t.length > 0;
}
let yj = (0, h.zD)(x.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yv,
    }),
    yO = (0, h.Qx)(x.X.IN_GAME_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t["ms+Tme"]),
        useSubtitle: () => V.intl.string(V.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.JIFnN9), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: V.intl.string(V.t.rRdsk1), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: V.intl.string(V.t.IVRPMX), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = U.TA.useSetting();
            return e === e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => U.TA.updateSetting(e),
        usePredicate: yv,
    });
function yL() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yN(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => oG.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yR = n(306537);
function yD(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s } = e;
    return (
        (0, e_.Ay)(() => {
            (0, Cp.N)(s, CT.YX.VIEWED);
        }),
        (0, T.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yP(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, Cp.N)(e, CT.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cp.N)(e, CT.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yG() {
    let e,
        t = (0, Cx.uM)(),
        n = (0, I$.fk)(),
        i = (0, IQ.b8)(),
        s = (0, NO.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IV.n)(IM.Vc)) return e;
    }
}
var yM = n(687123),
    yU = n(444802);
function yV() {
    let e = (0, yU.WX)();
    f.useEffect(() => {
        (0, Cp.N)(CT.YA.AGE_CONFIRMATION_NOTICE, CT.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(ey.A.getArticleURL(e), "_blank"), (0, Cp.N)(CT.YA.AGE_CONFIRMATION_NOTICE, CT.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cp.N)(CT.YA.AGE_CONFIRMATION_NOTICE, CT.YX.CONFIRM_AGE));
        }, []);
    return (0, T.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, T.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yk() {
    let e = (0, I$.aX)(yM.t.REACTIVE_CHECK),
        t = (0, IQ.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yV };
    }, [e, t]);
}
var yw = n(323073),
    yF = n(386171),
    yB = n(96607);
let yz = (0, h.zD)(x.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yF.hT,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, IQ.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yY = (0, h.zD)(x.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yF.tI,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, IQ.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yX = (0, h.AK)(x.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: x.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yH = (0, h.gN)(x.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yX] });
n(667532);
var yW = n(390248),
    yK = n(632119),
    yZ = n(945276),
    yq = n(389737),
    yQ = n(566769);
function y$() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, Cx.uM)(),
        i = (0, Cx.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oi.cf)([aj.A], () => aj.A.settings.textAndImages?.explicitContentSettings ?? (0, yK.C$)())),
        {
            explicitContentGuilds: (0, yK.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yK.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yK.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(e$.TO.SHOW)
            ? IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yK.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NR.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(yq.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(NR.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yJ() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, Cx.uM)(),
        i = (0, Cx.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, oi.cf)([aj.A], () => aj.A.settings.textAndImages?.goreContentSettings ?? (0, yU.T4)())),
        {
            goreContentGuilds: (0, yU.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yU.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yU.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(e$.TO.SHOW)
            ? IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yU.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NR.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(yq.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yQ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(NR.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y0 = n(875162),
    y1 = n(636745);
let y2 = (0, h.E2)(x.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yU.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: y$,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yJ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, T.jsxs)(yA.h, {
            children: [
                (0, T.jsx)(yA._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: ey.A.getArticleURL(e) }),
                }),
                (0, T.jsx)(y0.A, { tabs: t, orientation: "vertical", tabsClassName: y1.v }),
            ],
        });
    },
    useSearchTerms: () => [
        V.intl.string(V.t["Hj/But"]),
        V.intl.string(V.t["N/oRI+"]),
        V.intl.string(V.t.QVdYsK),
        V.intl.string(V.t["aWD+tu"]),
        V.intl.string(V.t["5mnTa7"]),
        V.intl.string(V.t["K0OWP+"]),
    ],
});
var y3 = n(639555),
    y5 = n(617641),
    y4 = n(546140),
    y6 = n(406935),
    y8 = n(594061);
let y7 = (0, h.zD)(x.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: ey.A.getArticleURL(_.MVz.SAFETY_ALERTS) }),
        useValue: y4.L,
        setValue: function (e) {
            return y8.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y6._t.create({ value: e });
                },
                y8.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y5.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y3.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yZ.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y9 = (0, h.zZ)(x.X.CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3upKU8"]),
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
                x = Cf(),
                S =
                    ((s = (0, Cx.uM)()),
                    (l = (0, I$.fk)()),
                    (r = (0, IQ.b8)()),
                    (a = (0, NO.Z)()),
                    (o = yP(CT.YA.AGE_CONFIRMATION_NOTICE, IU)),
                    (u = yP(CT.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, ID.M0)),
                    (d = f.useCallback(() => {
                        (0, Cp.N)(CT.YA.AGE_CONFIRMATION_NOTICE, CT.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, Cp.N)(CT.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CT.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!s && (0, IV.n)(IM.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(Iw.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(Iw.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(Iw.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, NO.Z)()),
                    (t = (0, yU.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(ey.A.getArticleURL(t), "_blank"),
                            (0, Cp.N)(CT.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CT.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, Cp.N)(CT.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CT.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: V.intl.format(V.t.EUo0yj, {
                                    hook: (e, t) => (0, T.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, I$.SJ)()),
                    (m = (0, IQ.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cp.N)(CT.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CT.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, Cp.N)(CT.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CT.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: V.intl.format(V.t.OX4ybh, {
                                    hook: (e, t) => (0, T.jsx)(nr.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = yk();
            return x ?? S ?? N ?? _ ?? I;
        },
        buildLayout: () => [y2, y7, yz, yY, yH],
    });
var be = n(923457),
    bt = n(750714);
let bn = (0, h.Qx)(x.X.DM_SPAM_SETTING, {
    useTitle: () => V.intl.string(V.t.puwSkY),
    useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
    useValue: function () {
        let e = U.he.useSetting(),
            t = U.cj.useSetting(),
            n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, I$.yv)(be.p.SPAM_FILTERS);
        return e !== e$.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? e$.he.FRIENDS_AND_NON_FRIENDS
              : (bt.xY.get(t) ?? e$.he.NON_FRIENDS);
    },
    setValue: (e) => U.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: V.intl.string(V.t["+w5yKk"]), value: e$.he.FRIENDS_AND_NON_FRIENDS },
            { name: V.intl.string(V.t.yAPg6r), value: e$.he.NON_FRIENDS },
            { name: V.intl.string(V.t.FEXKsv), value: e$.he.DISABLED },
        ];
    },
    useSearchTerms: () => [V.intl.string(V.t.JzaP4h), V.intl.string(V.t.H9XOl3), V.intl.string(V.t.k4W40P)],
});
var bi = n(189883);
let bs = (0, h.zD)(x.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => V.intl.string(V.t["7x9dyE"]),
    useValue: function () {
        let e = U.FA.useSetting();
        return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        U.FA.updateSetting(e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Cx.uM)();
    },
});
var bl = n(665260);
let br = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bl.UI(t, _.dzt.MUTUAL_FRIENDS) : bl.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cx.uM)();
        },
    }),
    ba = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bl.UI(t, _.dzt.MUTUAL_GUILDS) : bl.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cx.uM)();
        },
    }),
    bo = (0, h.FW)(x.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [bs, br, ba],
    });
var bu = n(420825);
let bd = (0, h.zD)(x.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, bu.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    bc = (0, h.zZ)(x.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bi.A.useConfig({ location: "Friend Request Setting" });
            return e ? V.intl.string(V.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: Cf,
        buildLayout: () => [bo, bd],
    });
var bg = n(994500),
    bm = n(428678),
    bA = n(49229),
    bE = n(730134),
    bh = n(276573);
function bx(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, T.jsxs)("div", {
        className: bh.wx,
        children: [
            (0, T.jsx)("div", {
                className: bh.zc,
                children: i ? (0, T.jsx)(bm.K, {}) : (0, T.jsx)(C1.EyeSlashIcon, {}),
            }),
            (0, T.jsxs)("div", {
                className: bh.Qq,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, T.jsx)($.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? V.intl.format(V.t["r91W/h"], { numberOfBlockedUsers: n })
                            : V.intl.format(V.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function bS(e) {
    let { userId: t, last: n } = e,
        i = (0, I.bG)([bg.A], () => bg.A.isBlocked(t)),
        s = (0, I.bG)([lS.default], () => lS.default.getUser(t)),
        [l, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? bA.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bA.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, T.jsxs)("div", {
              className: ic()(bh.nM, { [bh.fW]: n }),
              children: [
                  (0, T.jsxs)("div", {
                      className: bh.eF,
                      children: [
                          (0, T.jsx)(bE.A, { user: s, size: v._3.SIZE_40 }),
                          (0, T.jsxs)("div", {
                              className: bh.Qq,
                              children: [
                                  (0, T.jsx)($.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, T.jsx)($.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, T.jsx)(j.$, {
                      variant: "secondary",
                      text: V.intl.string(i ? V.t.XyHpKH : V.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function bp(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = f.useState(5);
    return (0, T.jsx)(yA.h, {
        children: (0, T.jsxs)("div", {
            className: bh.Nr,
            children: [
                (0, T.jsx)(bx, { listType: n, numberOfUsers: t.length }),
                (0, T.jsx)("div", {
                    className: bh.jS,
                    children: t.slice(0, i).map((e, n) => (0, T.jsx)(bS, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, T.jsx)("div", {
                          className: bh.vM,
                          children: (0, T.jsx)(n4.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bh.Qf,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: V.intl.format(V.t.jULEDr, {
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
let bT = (0, h.E2)(x.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, I.bG)([bg.A], () => bg.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([bg.A], () => bg.A.getBlockedIDs());
            return (0, T.jsx)(bp, { userIds: e, listType: "blocked" });
        },
    }),
    bf = (0, h.E2)(x.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, I.bG)([bg.A], () => bg.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([bg.A], () => bg.A.getIgnoredIDs());
            return (0, T.jsx)(bp, { userIds: e, listType: "ignored" });
        },
    }),
    bI = (0, h.zZ)(x.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: ey.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bT, bf],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, I.cf)([bg.A], () => ({
                hasBlockedUsers: bg.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bg.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var b_ = n(22385),
    bN = n(556534),
    bC = n(111159),
    by = n(152056),
    bb = n(428031),
    bv = n(978433);
let bj = { label: () => V.intl.string(V.t["32u1Dx"]), value: b_.YG };
var bO = n(307863),
    bL = n(954225);
function bR() {
    return (0, bO.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function bD(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bP = (0, h.zD)(x.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bR,
    useSubtitle: function () {
        let e = (0, bN.Tx)(),
            t = (0, bN.q9)(),
            n = (0, bO.e)();
        return e === b_.YG
            ? n
                ? V.intl.string(V.t.XXGmuB)
                : V.intl.string(V.t.wbYDfT)
            : t
              ? V.intl.string(V.t.V0ka0Q)
              : n
                ? V.intl.string(V.t.F9WY3f)
                : V.intl.string(V.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, bN.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, bb.K)();
        return e === b_.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Cx.uM)();
        return (0, bN.Tx)() === b_.YG && e;
    },
    setValue: function (e) {
        let t = b_.xk.getState().selectedGuildId;
        if (t === b_.YG) {
            var n;
            ((n = !e),
                (0, CX.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: l0.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), bD(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? sv.A.getGuildIds() : []), bD(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bL.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bG = n(116774),
    bM = n(953298);
function bU(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bV() {
    return V.intl.string(V.t["3o2ojh"]);
}
let bk = (0, h.zD)(x.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bV,
        useSubtitle: function () {
            let e = (0, bN.q9)(),
                t = ey.A.getArticleURL(_.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bN.Tx)(),
                t = (0, bb.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, bG.s)(),
                s = (0, Cx.uM)(),
                l = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === b_.YG && s ? !l : e === b_.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bN.Tx)(),
                t = (0, Cx.uM)(),
                n = (0, bb.K)(),
                i = U.$s.useSetting().includes(e),
                s = (0, bG.s)();
            return e === b_.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = b_.xk.getState().selectedGuildId;
            if (!e && (0, bM.w)())
                return void IP.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === b_.YG) {
                var n;
                ((n = !e),
                    (0, CX.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: l0.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), bU(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? sv.A.getGuildIds() : []), bU(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bL.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bw = (0, h.E2)(x.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bR(), bV()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, b_.xk)(),
                s = (0, I.bG)([gb.Ay], () => gb.Ay.getFlattenedGuildIds()),
                l = (0, I.bG)([sv.A], () => sv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, bb.K)()),
                    (0, I.bG)(
                        [sv.A],
                        () => {
                            let n = new Set(e);
                            return sv.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            f.useEffect(
                () =>
                    by.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = b_.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === b_.YG && null != a
                                ? i(a)
                                : "" === e && n !== b_.YG && i(b_.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bj,
                            id: bj.value,
                            label: bj.label(),
                            leading: (0, T.jsx)("div", {
                                className: bv.KP,
                                children: (0, T.jsx)(bC.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bv.cl,
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
                                    leading: (0, T.jsx)(gk.Ay, {
                                        className: bv.cl,
                                        guild: n,
                                        size: gk.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === b_.YG && r > 0;
            return (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(p$.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: bv.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, T.jsx)(
                                        $.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    bF = (0, h.E2)(x.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bN.Tx)(),
                t = yG();
            return e === b_.YG && null != t;
        },
        Component: function () {
            let e = yG(),
                t = yP(CT.YA.AGE_CONFIRMATION_NOTICE, IU),
                n = yP(CT.YA.CONTENT_AND_SOCIAL_NOTICE, ID.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, T.jsx)(yD, {
                        noticeType: CT.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(Iw.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(Iw.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, T.jsx)(yD, {
                        noticeType: CT.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(Iw.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bB = (0, h.zZ)(x.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = Cf(),
                t = yk();
            if ((0, bN.Tx)() === b_.YG) return e ?? t;
        },
        buildLayout: () => [bw, bP, bk, bF],
    }),
    bz = (0, h.zZ)(x.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [bn] }),
    bY = (0, h.zZ)(x.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yL();
            function t(e, t) {
                return (0, T.jsx)(
                    $.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? V.intl.string(V.t.Amr1IZ)
                : 1 === e.length
                  ? V.intl.format(V.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? V.intl.format(V.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : V.intl.format(V.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => V.intl.string(V.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = yL();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, T.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: h0.CD,
                                height: h0.CD,
                            }),
                            shape: h0.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, T.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: h0.YP,
                                    height: h0.YP,
                                }),
                                shape: h0.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            xj.A.fetch();
        },
        buildLayout: () => [yj, yO, yb, yI],
    }),
    bX = (0, h.t_)(x.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [y9, bz, bB, bc, bY, bI],
    }),
    bH = (0, h.i4)(x.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yT.l,
        buildLayout: () => [bX],
    });
var bW = n(782603),
    bK = n(899847),
    bZ = n(695515);
let bq = (0, h.Hn)(x.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => V.intl.string(V.t["8rHeOr"]),
        useSubtitle: () => V.intl.string(V.t["eJE6+J"]),
        useValue: U.cU.useSetting,
        setValue: U.cU.updateSetting,
        useOptions: () =>
            W.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: V.intl.formatToPlainString(V.t.iXLF9W, { minutes: e }),
            })),
    }),
    bQ = (0, h.zD)(x.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(x.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    b$ = (0, h.Qx)(x.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, I.bG)([ak.A], () => ak.A.getTTSType()),
        setValue: (e) => aY.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: _.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: _.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: _.aVn.NEVER },
            ];
        },
        usePredicate: () => H.$j,
    }),
    bJ = x.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    b0 = (0, h.bd)(bJ, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tI(bJ, {
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
        buildLayout: () => [bq, bQ, b$],
    }),
    b1 = (0, h.zZ)(x.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [b0],
    }),
    b2 = (0, h.zD)(x.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, I.bG)([ak.A], () => !ak.A.getDisableUnreadBadge());
        },
        setValue: (e) => aY.default.setDisableUnreadBadge(!e),
    }),
    b3 = (0, h.zZ)(x.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [b2],
    });
var b5 = n(840559),
    b4 = n(997187),
    b6 = n(723923);
let b8 = b6.px.map((e) =>
        (0, h.zD)(`${x.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, I.cf)([b4.A], () => b4.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b5.CA)(e.category, t),
        }),
    ),
    b7 = (0, h.Tf)(x.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, I.cf)([b4.A], () => b4.A.getEmailSettings());
            return b6.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b5.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b9 = (0, h.zZ)(x.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = b4.A.getEmailSettings();
            e || (0, b5.cR)();
        },
        buildLayout: () => [...b8, b7],
    }),
    ve = (0, h.zD)(x.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, I.bG)([ak.A], () => ak.A.getDesktopType()) !== _.nRU.NEVER;
        },
        setValue: (e) => aY.default.setDesktopType(e ? _.nRU.ALL : _.nRU.NEVER),
    });
var vt = n(832712),
    vn = n(543465),
    vi = n(790782);
let vs = (0, h.zD)(x.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, I.bG)([vn.Ay], () => vn.Ay.useNewNotifications),
    setValue: function (e) {
        (vt.A.setAccountFlag(xe.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hr.w.set("turnedOffNewNotifications", !0),
                td.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sv.A.getGuildsArray().filter(
                        (e) => vn.Ay.resolveGuildUnreadSetting(e) === vi.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, I.bG)(
            [lS.default, vn.Ay],
            () =>
                lS.default.getCurrentUser()?.isStaff() ||
                lS.default.getCurrentUser()?.isStaffPersonal() ||
                vn.Ay.useNewNotifications,
        ),
});
var vl = n(534654);
let vr = (0, h.zD)(x.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, I.bG)([ak.A], () => ak.A.screenDowntimeReminder),
        setValue: (e) => aY.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vl.A)(),
                t = (0, Nb.Du)();
            return e && t;
        },
    }),
    va = (0, h.zD)(x.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vl.A)(),
                t = (0, Nb.Du)();
            return e && t;
        },
    }),
    vo = (0, h.zD)(x.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    vu = (0, h.zD)(x.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vd = (0, h.zD)(x.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vc = (0, h.zD)(x.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vg = n(815807);
let vm = (0, h.Hn)(x.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vg.n4)(e, U.Zp.getSetting()),
    }),
    vA = (0, h.zD)(x.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
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
    vh = (0, h.zD)(x.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xe.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vE.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vx = (0, h.FW)(x.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vd, vo, vu, vA, vh, vc, vm],
    }),
    vS = (0, h.zD)(x.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, I.bG)([ak.A], () => ak.A.taskbarFlash),
        setValue: (e) => aY.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    vp = (0, h.zZ)(x.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [ve, vS, vx, vs, va, vr],
    });
var vT = n(965957),
    vf = n(312671),
    vI = n(235079);
let v_ = (0, h.zD)(x.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aw.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, I.bG)([vf.A], () => vf.A.getSoundpack()),
            t = aw.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aw.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, vT.p)(e ? t : vI.i.CLASSIC));
    },
    usePredicate: aw.A.useIsEligible,
});
var vN = n(970931);
let vC = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: vN.kB,
        useDisabledMessage: () => ((0, vN.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    vy = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    vb = (0, h.zD)(x.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aW("message3") }),
        useValue: () =>
            (0, I.bG)([ak.A], () => ak.A.getNotifyMessagesInSelectedChannel() && !ak.A.getDisableAllSounds()),
        setValue: (e) => aY.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, I.bG)([ak.A], () => ak.A.getDisableAllSounds()),
    }),
    vv = (0, h.zD)(x.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, I.bG)([ak.A], () => ak.A.getDisableAllSounds()),
        setValue: (e) => aY.default.toggleDisableAllSounds(e),
    }),
    vj = (0, h.D1)(x.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aH();
            };
        },
        buildLayout: () => [aK(vC), vb, aK(vy), vv],
    }),
    vO = (0, h.AK)(x.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: x.X.SOUNDS_CATEGORY,
    }),
    vL = (0, h.gN)(x.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vO] }),
    vR = (0, h.zZ)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [v_, vj, vL],
    }),
    vD = (0, h.t_)(x.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != bZ.A.getAgeGroup() || bZ.A.isLoading() || (bZ.A.canRefetch() && bK.Ay.initialPageLoad());
        },
        buildLayout: () => [vp, vR, b3, b9, b1],
    }),
    vP = (0, h.i4)(x.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: bW.BellIcon,
        buildLayout: () => [vD],
    }),
    vG = (0, h.WI)(x.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NH, yp, bH, vP, Cg],
    });
var vM = n(387758),
    vU = n(271866),
    vV = n(147964),
    vk = n(868511);
let vw = (0, h.zD)(x.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, I.bG)([vV.A], () => null != vV.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sp.openModal)((e) => (0, T.jsx)(vk.A, { ...e })) : vU.cL();
        },
    }),
    vF = (0, h.zD)(x.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uv.p5,
    }),
    vB = (0, h.zZ)(x.X.DEVELOPER_CATEGORY, { buildLayout: () => [vF, vw] }),
    vz = (0, h.t_)(x.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [vB] }),
    vY = (0, h.i4)(x.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vM.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [vz],
    });
var vX = n(70688),
    vH = n(830215);
let vW = (0, h.i4)(x.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: vX.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    vH.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vK = (0, h.WI)(x.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vY, vW],
    }),
    vZ = (0, h.Hr)({ buildLayout: () => [Ij, vG, Ev, om, p9, hQ, vK], analyticsKey: "user_settings" });
