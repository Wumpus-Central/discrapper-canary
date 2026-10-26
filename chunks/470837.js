n.d(t, { D: () => vK });
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
    aS = n(927578),
    ap = n(792348),
    aT = n(674168),
    af = n(476254),
    aI = n(817232),
    a_ = n(647451);
function aN(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = aS.Ay.canUseCustomCallSounds(s),
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
                children: (0, T.jsx)(af.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, T.jsx)(aT.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, T.jsx)(aI.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, T.jsx)(ax.PencilIcon, { size: "md", color: "currentColor", className: a_.Wo }),
            }),
    });
}
function aC(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ap.A)(t, null),
        i =
            0 === (0, am.wH)()
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, T.jsx)(aI.dT, {
        onClick: n,
        text: i,
        children: (0, T.jsx)(ao.H, { size: "md", color: "currentColor", className: a_.wg }),
    });
}
function ay(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, T.jsxs)("div", {
        className: a_.D6,
        children: [
            (0, T.jsxs)("div", {
                className: a_.kL,
                children: [
                    a && (0, T.jsx)(tG.A, { emojiId: l, emojiName: r, className: a_.Zg }),
                    (0, T.jsx)($.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: a_.dj,
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
                        ? (0, T.jsx)(aC, { sound: t })
                        : (0, T.jsx)(ao.H, { size: "md", color: "currentColor", className: a_.Gk }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: a_.kL,
                children: [
                    (0, T.jsx)(aN, { onSelect: i }),
                    s &&
                        !n &&
                        (0, T.jsx)(aI.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, T.jsx)(sc.TrashIcon, {
                                size: "md",
                                color: n1.A.unsafe_rawColors.RED_400.css,
                                className: a_.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ab = n(617617);
n(980504);
var av = n(806050);
function aj(e) {
    return (0, I.bG)([ag.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ag.A.getSound("0" === t ? "0" : t, n);
    });
}
function aO(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([ab.A], () => ab.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aj(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, T.jsxs)("div", {
        className: av.Io,
        children: [
            r
                ? (0, T.jsx)(tG.A, { emojiId: s, emojiName: l, className: av.nW })
                : (0, T.jsx)(ao.H, { size: "md", color: "currentColor", className: av.nW }),
            (0, T.jsx)($.E, { className: av.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aL = (0, h.E2)(x.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eY.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, aA.mz)(t),
            s = aj(i),
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
            return null == e ? null : n ? (0, T.jsx)(aO, { guildId: e.value }) : null;
        }, []);
        return (0, T.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: ey.A.getArticleURL(_.MVz.SOUNDBOARD) }),
            children: [
                (0, T.jsx)(au.A, {
                    guildId: t,
                    className: av.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, T.jsxs)(ad.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () => (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: av.ax }),
                    }),
                    children: [
                        (0, T.jsx)(ay, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, am.Dv)(t, e) : (0, am.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, T.jsx)("div", {
                                className: av.lm,
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
var aR = n(824744);
let aD = (0, h.sN)(x.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: ey.A.getArticleURL(_.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aR.w)(e);
        (0, ac.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, am.wH)();
        return (0, aR.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aP = n(864145);
let aG = (0, h.sN)(x.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aR.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aR.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aP.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aM = (0, h.zZ)(x.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aD, aG, aL],
    });
var aU = n(803224),
    aV = n(552122);
let ak = (0, h.E2)(x.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aV.A.useHolidaySoundpack(),
        Component: () =>
            (0, T.jsx)($.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aw = (0, h.AK)(x.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: x.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aF = (0, h.gN)(x.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aw] });
var aB = n(264686);
let az = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aY() {
    let e = az.getField("currentPlayingSound");
    (e?.stop(), az.setState({ currentPlayingSound: null }));
}
function aX(e) {
    let t = az.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    az.setState({ currentPlayingSound: n });
}
function aH(e) {
    return (0, h.zD)(`${x.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aX(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, I.bG)([aU.A], () => aU.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aU.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aB.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, I.bG)([aU.A], () => aU.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aW = [
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
    aK = (0, h.D1)(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tI(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aY();
            };
        },
        buildLayout: () => aW.map((e) => aH(e)),
    }),
    aZ = (0, h.zZ)(x.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, I.bG)([aU.A], () => aU.A.getDisableAllSounds());
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
        buildLayout: () => [aK, ak, aF],
    }),
    aq = (0, h.zD)(x.X.STREAMING_SHOW_STREAM_PREVIEWS, {
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
    aQ = (0, h.zD)(x.X.STREAMING_ADVANCED_SCREENSHARE, {
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
    a$ = (0, h.zD)(x.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
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
    aJ = (0, h.zD)(x.X.STREAMING_STREAM_ATTENUATION, {
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
    a0 = (0, h.sN)(x.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
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
    a1 = (0, h.zD)(x.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
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
    a2 = (0, h.bd)(x.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => tI(x.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aJ, a0, a1, a$, aQ],
    }),
    a3 = (0, h.zZ)(x.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [aq, a2] });
var a5 = n(106713);
let a4 = (0, h.E2)(x.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a5.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, T.jsx)(lB.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: sw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a6 = (0, h.E2)(x.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a5.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, T.jsx)(lB.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: sw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a8 = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a4, a6] }),
    a7 = (0, h.sN)(x.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i9.Ay.getInputVolume();
            return (0, aR.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aR.w)(e);
            sE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    a9 = (0, h.sN)(x.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i9.Ay.getOutputVolume();
            return (0, aR.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aR.w)(e);
            sE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oe = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a7, a9] });
var ot = n(702841),
    on = n(152567),
    oi = n(804037);
let os = `${ey.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    ol = (0, h.E2)(x.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, ot.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, ot.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK))
                ? (0, T.jsx)(on.A, {
                      size: "md",
                      notchBackground: on.V.GRAY,
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
                                  className: oi.X,
                                  href: ey.A.getArticleURL(_.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: os }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    or = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function oa(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, T.jsxs)(q.B, {
        children: [
            n && (0, T.jsx)(ss, { sourcePage: "voice" }),
            t && (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oo = (0, h.zZ)(x.X.VOICE_CATEGORY, {
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
                    let e = or.some((e) => t?.hardwareId?.startsWith(e)),
                        i = or.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, T.jsx)(oa, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a8, oe, ol],
    }),
    ou = (0, h.t_)(x.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oo, ar, lq, a3, aZ, aM, rI, rE],
    }),
    od = (0, h.i4)(x.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: lR.MicrophoneIcon,
        useMenu: lD.A,
        buildLayout: () => [ou],
    }),
    oc = (0, h.WI)(x.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [od, nZ, tt, iX, lL, nJ],
    });
var og = n(360669),
    om = n(643891),
    oA = n(975807),
    oE = n(534247);
function oh(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, T.jsxs)("div", {
        className: ic()(oE.kL, { [oE.oE]: a }),
        children: [
            (0, T.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: oE.Qs,
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
            (0, T.jsx)("img", { src: s, className: oE.fA, alt: "" }),
        ],
    });
}
var ox = n(425565),
    oS = n(745188),
    op = n(936564),
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
class oB extends f.PureComponent {
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
        return (0, T.jsx)(sT.k, {
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
                        id: (0, tK.Ld)(),
                        title: () => V.intl.string(V.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => V.intl.string(V.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oY.ep,
                        renderInput: (e) => (0, T.jsx)(oB, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oH = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, T.jsx)(oz.A, {
                className: n,
                form: oX,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, ok.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oW = n(219887),
    oK = n(292856);
let oZ = "isDefault";
class oq extends f.PureComponent {
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
                      className: oK.zc,
                      children: (0, T.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, T.jsx)("div", {
                  className: oK.zc,
                  children: (0, T.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oU.g)(n);
        return (0, T.jsxs)("div", {
            className: oK.yV,
            children: [
                (0, T.jsx)($.E, {
                    className: oK.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, T.jsx)(oV.Ay, {
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
        return (0, T.jsxs)("div", {
            className: oK.yV,
            children: [
                (0, T.jsx)($.E, { className: oK.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, T.jsx)(oH, {
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
            className: oK.AU,
            children: (0, T.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, T.jsx)(l2.e, {
                        children: (0, T.jsxs)("div", {
                            className: oK.lH,
                            children: [
                                n
                                    ? (0, T.jsx)(sg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, T.jsx)("div", { "aria-hidden": !0, className: oK.dm }),
                                      })
                                    : null,
                                (0, T.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oP.Fr ? "sm" : "md",
                                    text: oP.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
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
                                size: oP.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, T.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oP.Fr ? "sm" : "md",
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
            r = e instanceof oO.SJ;
        return (0, T.jsx)(oG.Z, {
            editable: !0,
            className: ic()(oK.Nr, i),
            children: (0, T.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, T.jsxs)("div", {
                        className: oK.__invalid_paymentSection,
                        children: [
                            (0, T.jsx)(oW.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, T.jsx)("div", { className: oK.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, T.jsx)("div", {
                                className: oK.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, T.jsx)("div", {
                        className: oK.D5,
                        children: (0, T.jsx)(oM.S, {
                            value: oZ,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oZ),
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
let oQ = I.Ay.connectStores([oL.A], () => ({ updateError: oL.A.editSourceError, removeError: oL.A.removeSourceError }))(
    oq,
);
var o$ = n(986485),
    oJ = n(849405),
    o0 = n(329693);
function o1() {
    (0, oj.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, o_.A)() });
}
class o2 extends f.PureComponent {
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
            ? (0, T.jsx)(oQ, {
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
                      i ? null : (0, T.jsx)(sl.c, { className: o0.__invalid_sourceDivider }),
                      (0, T.jsxs)("div", {
                          className: o0.Yb,
                          children: [
                              (0, T.jsx)(oW.A, {
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
let o3 = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = f.useState(null),
        o = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, I.bG)([oL.A], () => oL.A.ipCountryCode),
        d = f.useMemo(() => (0, oN.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : ov.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, T.jsxs)(T.Fragment, {
            children: [
                n ? null : (0, T.jsx)(sl.c, { className: o0.__invalid_sourceDivider }),
                (0, T.jsxs)("div", {
                    className: o0.Yb,
                    children: [
                        void 0 !== t
                            ? (0, T.jsx)(oW.A, {
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
                                      (0, T.jsx)(oC._, { size: "lg" }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/medium",
                                          className: oJ.Wi,
                                          children: V.intl.string(o$.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, T.jsxs)("div", {
                            className: o0.zy,
                            children: [
                                (0, T.jsx)("div", {
                                    className: o0.Tq,
                                    children:
                                        null == r
                                            ? (0, T.jsx)(oI.y, { type: oI.y.Type.SPINNING_CIRCLE })
                                            : (0, T.jsx)($.E, {
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
                                (0, T.jsx)(j.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: V.intl.string(o$.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o5 extends f.PureComponent {
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
        (0, sp.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, T.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
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
        return (0, T.jsxs)("div", {
            className: o0.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, T.jsxs)("div", {
                          className: o0.z8,
                          children: [
                              (0, T.jsx)($.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o0.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oD.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oO.LQ)),
            c = u.filter((e) => e instanceof oO.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, T.jsx)(
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
                          (0, T.jsx)(
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
                    : (0, T.jsx)(o3, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o1,
                      })),
            (0, T.jsxs)(T.Fragment, {
                children: [
                    t
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, T.jsx)(oy.LockIcon, { size: "sm", className: o0.hz }),
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
var o4 = n(459357),
    o6 = n(295405),
    o8 = n(166403),
    o7 = n(773669),
    o9 = n(943009);
function ue() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, of.Gw)(e.country) };
}
let ut = (0, h.E2)(x.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, I.bG)([oL.A], () => oL.A.isSyncing),
                i = (0, I.bG)([o6.A], () => o6.A.paymentSources),
                s = (0, I.bG)([o6.A], () => o6.A.defaultPaymentSourceId),
                l = (0, I.bG)([o7.default], () => o7.default.locale),
                r = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
                a = (0, I.bG)([oL.A], () => oL.A.isRemovingPaymentSource),
                o = (0, I.bG)([oL.A], () => oL.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o4.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (ov.$o(), ov.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, T.jsx)("div", { className: o9.o, children: (0, T.jsx)(oI.y, {}) })
                : (0, T.jsx)(o5, {
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
    un = (0, h.E2)(x.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = f.useMemo(
                () => [
                    { text: V.intl.string(oS.default["6bWeWP"]), onClick: () => (0, oA.A)(ox.C1) },
                    {
                        text: V.intl.string(oS.default.xYa9Y8),
                        onClick: () => (0, oA.A)(ey.A.getArticleURL(_.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, T.jsx)("div", {
                className: op.k,
                children: (0, T.jsx)(oh, {
                    title: V.intl.string(oS.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, T.jsx)($.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: V.intl.string(oS.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oT.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ui = (0, h.zZ)(x.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = ue();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ue()
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
function uS(e) {
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
let up = { receipts: [], cursor: null };
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
let uG = (e) => `https://${_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uM(e, t) {
    return t === uD.Yr.DISCORD_ORB
        ? (0, T.jsxs)("span", {
              className: uP.db,
              children: [
                  (0, T.jsx)(uL.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, uR.$g)(e, t);
}
function uU(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, eY.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === ux.REDEEMED
        ? null
        : n.status === ux.REFUNDED
          ? (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(uC.H, { className: uP.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, T.jsx)("div", {
                        className: uP.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: uO.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === ux.CLAIMED || n.status === ux.UNCLAIMED
            ? (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsx)(uC.H, { className: uP.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uP.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: uO.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, T.jsx)("div", {
                              className: uP.TP,
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
                      (0, T.jsx)(uC.H, { className: uP.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uP.iL,
                          children: s
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, T.jsx)("div", {
                          className: uP.TP,
                          children: s
                              ? (0, T.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, oA.A)(uG(i)),
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
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)(uC.H, { className: uP.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, T.jsxs)("div", {
                className: uP.iL,
                children: [
                    (0, T.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uh.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uh.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uh.GIFT:
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
                    t.policy !== uh.IN_GAME_ITEM &&
                        (0, T.jsxs)("div", {
                            className: uP.My,
                            children: [
                                (0, T.jsx)("div", {
                                    className: uP.Kf,
                                    children:
                                        null != t.window &&
                                        (0, T.jsxs)("div", {
                                            className: uP._Z,
                                            children: [
                                                (0, T.jsx)(uC.H, {
                                                    className: uP.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, T.jsxs)("div", {
                                                    className: uP.z9,
                                                    children: [
                                                        (0, T.jsx)(s, { className: uP.xb, color: "currentColor" }),
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
var uF = n(679897);
function uB(e) {
    let { description: t, cost: n } = e;
    return (0, T.jsx)("li", {
        className: uP.mg,
        children: (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            children: [(0, T.jsx)("div", { children: t }), (0, T.jsx)("div", { children: n })],
        }),
    });
}
function uz(e) {
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
                (0, uy.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, T.jsx)("div", { className: uP.l9, children: t }),
        }),
    });
}
function uY(e) {
    let { paymentId: t } = e;
    return (0, T.jsx)("li", {
        className: uP.mg,
        children: (0, T.jsxs)("div", {
            className: uP.bx,
            children: [
                (0, T.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, T.jsx)(uz, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uX(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uE.REVERSED;
    return (0, T.jsxs)($.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(uF.XM, n ? uF.aB : uF.EN),
        children: [
            t === uE.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uE.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uE.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function uH(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uD.kM.APPLE_PARTNER ? new oO.Pw({}) : null);
    return null == i
        ? null
        : (0, T.jsx)(oW.A, {
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
            ? (0, T.jsx)(uH, { payment: t.payments[0], locale: n })
            : null
        : (0, T.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, T.jsxs)(
                      sN.A,
                      {
                          justify: sN.A.Justify.BETWEEN,
                          align: sN.A.Align.CENTER,
                          children: [
                              (0, T.jsx)(uH, { payment: e, locale: n }),
                              (0, T.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, T.jsx)(uX, { tag: e.tag }),
                                      (0, T.jsx)($.E, {
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
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)("div", { className: uP.ts }),
            t.delisted
                ? (0, T.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, oA.A)(uG(n)) },
                  })
                : null != t.guild_id && (0, T.jsx)(ub.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uZ(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, T.jsx)(n4.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, T.jsxs)("div", {
            className: uP.WI,
            children: [
                (0, T.jsx)(uC.H, { className: uP.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, T.jsxs)("div", {
                    className: ic()(uP.iL, uP.W),
                    children: [
                        (0, T.jsx)(uW, { receipt: t, locale: n }),
                        (0, T.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uB, { description: t.description, cost: uM(t.subtotal, s) }),
                                            (0, T.jsx)(uB, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: uM(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uB, { description: V.intl.string(V.t.txajQG), cost: uM(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uB, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: uM(-t.amount_refunded, s),
                                            }),
                                            (0, T.jsx)(uB, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: uM(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uY, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, T.jsx)(ub.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, T.jsx)(uK, { guildProduct: l, locale: n }),
                (0, T.jsx)(uv.A, { payment: t.receipt_payment }),
                null != r && (0, T.jsx)(uU, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, T.jsx)(uw, { refund: a, locale: n }),
            ],
        }),
    });
}
function uq(e) {
    let { withGradient: t } = e;
    return t
        ? (0, T.jsx)(u_.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uP.Sy })
        : (0, T.jsx)("div", {
              className: ic()(uP.Sy, uP.uX, uP.Xr),
              children: (0, T.jsx)(aa.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function uQ(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, I.bG)([sv.A], () => sv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uA.NITRO:
            return (0, T.jsx)(uq, { withGradient: !0 });
        case uA.NITRO_BASIC:
            return (0, T.jsx)(uq, { withGradient: !1 });
        case uA.SHOP:
            return (0, T.jsx)(uT.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uP.sV });
        case uA.APPLICATION:
        case uA.PRODUCT:
            return (0, T.jsx)(i7.A, {
                className: uP.Sy,
                guildClassName: uP.zA,
                game: t.icon === uA.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u$(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === um.PAID)
        switch (i.status) {
            case ux.CLAIMED:
                return (0, T.jsx)("span", { className: uP.gD, children: V.intl.string(V.t.lIsIFo) });
            case ux.UNCLAIMED:
                return (0, T.jsx)("span", { className: uP.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case ux.REDEEMED:
                return (0, T.jsx)("span", { className: uP.gD, children: V.intl.string(V.t.Osji1u) });
            case ux.FAILED:
                return (0, T.jsx)("span", { className: uP.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, T.jsx)("span", { className: uP.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, T.jsx)("span", { className: uP.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case um.PENDING:
            return (0, T.jsx)("span", { className: uP.Xg, children: V.intl.string(V.t.y7F0Re) });
        case um.FAILED:
            return (0, T.jsx)("span", { className: uP.ob, children: V.intl.string(V.t.Yo4ru6) });
        case um.REVERSED:
            return (0, T.jsx)("span", { className: uP.ob, children: V.intl.string(V.t.YQv9Li) });
        case um.CANCELED:
            return (0, T.jsx)("span", { className: uP.ob, children: V.intl.string(V.t.ttkBhy) });
        case um.PARTIALLY_REFUNDED:
            return (0, T.jsx)("span", { className: uP.gD, children: V.intl.string(V.t.lYbZzz) });
        case um.REFUNDED:
            return (0, T.jsx)("span", { className: uP.gD, children: V.intl.string(V.t.ZBb6NK) });
        case um.PAID:
            return null;
    }
}
function uJ(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uI.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, T.jsx)(ua.tG, {
        id: t.id,
        children: (e) =>
            (0, T.jsxs)(n4.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: ic()(uP.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, T.jsxs)(sN.A, {
                        className: uP.J7,
                        align: sN.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                className: uP.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, T.jsxs)("div", {
                                className: uP.h_,
                                children: [
                                    (0, T.jsx)(uQ, { receipt: t }),
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
                                                                      return (0, aS.xq)(t)
                                                                          ? aS.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aS.Ay.getDisplayName(t, !1, i)}`;
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
                                              children: (0, T.jsx)(uf.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uP.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, T.jsxs)("div", {
                                className: uP.vj,
                                children: [
                                    (0, T.jsx)(u$, { receipt: t, hasLinkedToApplication: r }),
                                    (0, T.jsx)("span", { className: uP.q9, children: uM(t.net, t.currency) }),
                                ],
                            }),
                            (0, T.jsx)(uN.A, {
                                className: uP.fT,
                                direction: s ? uN.A.Directions.UP : uN.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, T.jsx)(uZ, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u0 = n(949779);
function u1(e) {
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
        d = (0, uu.A)("billing-history", s);
    return (0, T.jsx)(ua.hD, {
        navigator: d,
        children: (0, T.jsx)(ua.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, T.jsx)(ud.A, {
                    className: u0.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, T.jsx)(uo.Ch, {
                        className: u0.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, T.jsx)(uJ, { className: ic()(u0.Nj, u0.Bd), receipt: e, locale: n }, e.id),
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
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, T.jsxs)(oG.Z, {
            className: u0.K1,
            children: [
                (0, T.jsx)("div", {
                    className: u0.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: uD.qm[t.paymentGateway] }),
                }),
                (0, T.jsx)("div", {
                    className: u0.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: uD.qm[t.paymentGateway],
                        billingHistoryLink: (0, aS.tW)(t.paymentGateway, "BILLING_HISTORY"),
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
            let [e, t] = f.useState(up),
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
                                s = i.receipts.map(uS);
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
        r = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, T.jsxs)("div", {
              className: u0.GD,
              children: [
                  null != r && a ? (0, T.jsx)(u2, { subscription: r }) : null,
                  n.length > 0
                      ? (0, T.jsxs)("div", {
                            className: ic()(u0.PQ, u0.GD),
                            children: [
                                (0, T.jsx)("div", {
                                    className: ic()(u0.Nj, u0.Bd),
                                    children: (0, T.jsxs)(sN.A, {
                                        className: u0.Yi,
                                        children: [
                                            (0, T.jsx)("div", {
                                                className: uP.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: u0.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: uP.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, T.jsx)(u1, { receipts: n, locale: t, loadNextPage: l }),
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
        : (0, T.jsx)(oI.y, {});
}
var u5 = n(545075);
let u4 = (0, h.E2)(x.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, I.bG)([o7.default], () => o7.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: ur.useConfig(e).enabled });
            return (0, T.jsxs)(T.Fragment, {
                children: [(0, T.jsx)(u5.kb, {}), n ? (0, T.jsx)(u3, { locale: t }) : (0, T.jsx)(us.A, { locale: t })],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    u6 = (0, h.zZ)(x.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [u4],
    }),
    u8 = (0, h.t_)(x.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [ui, u6],
        useObscuredNotice: om.L,
    }),
    u7 = (0, h.i4)(x.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: og.B,
        buildLayout: () => [u8],
    });
var u9 = n(70283),
    de = n(682618),
    dt = n(92202),
    dn = n(139486),
    di = n(962644),
    ds = n(35587),
    dl = n(86379);
let dr = (0, h.E2)(x.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u5.uK,
        usePredicate: () => (0, dl.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    da = (0, h.zZ)(x.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dr] });
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
    dE = [],
    dh = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var dx = n(534284);
function dS(e) {
    let { enabled: t } = (0, dt.K)({ location: e }),
        n = (0, dx.P)(),
        i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && ox.ob.has(i);
}
var dp = n(178881);
function dT(e) {
    let { icon: t, children: n } = e;
    return (0, T.jsxs)($.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dp.A,
        children: [
            (0, T.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, T.jsx)("span", { children: n }),
        ],
    });
}
let df = (0, h.zZ)(x.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dI],
        usePredicate: () => dS("GiftInventoryMarketingBanner"),
    }),
    dI = (0, h.E2)(x.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dS("GiftCardsGiftInventoryBanner"),
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
                        (null == t ? dE : (dA[t] ?? dE)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, oA.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, T.jsx)(oh, {
                      size: "compact",
                      title: V.intl.string(oS.default.Ja5Q8Z),
                      graphicSrc: dh,
                      actions: i,
                      children: (0, T.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, T.jsx)(dT, { icon: du.B, children: V.intl.string(oS.default["9xo1g9"]) }),
                              (0, T.jsx)(dT, { icon: dd.h, children: V.intl.string(oS.default.I5UWh9) }),
                              (0, T.jsx)(dT, {
                                  icon: uf.GiftIcon,
                                  children: V.intl.format(oS.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, na.openUserSettings)(x.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, T.jsx)(dT, {
                                  icon: dc.k,
                                  children: V.intl.format(oS.default.UwYHGm, { websiteUrl: ox.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var d_ = n(982240),
    dN = n(948518),
    dC = n(914410),
    dy = n(556427),
    db = n(573343);
function dv(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, T.jsxs)("div", {
        className: ic()(db.fO, { [db.bF]: i }),
        children: [
            null != n && (0, T.jsx)("img", { src: n, alt: "", className: db.si }),
            (0, T.jsxs)("div", {
                className: db.tc,
                children: [
                    (0, T.jsx)($.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, T.jsx)($.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(dy.default.qvx9E4, { count: (0, d_.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dj(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, T.jsx)("div", {
        className: db.dw,
        children: t.map((e) => (0, T.jsx)(dv, { tier: e, iconUrl: (0, dn.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function dO(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dN.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, T.jsx)("div", {
        className: db.NG,
        children: (0, T.jsx)(j.$, {
            variant: "primary",
            icon: uf.GiftIcon,
            text: V.intl.string(dy.default.DZnomS),
            onClick: s,
        }),
    });
}
function dL(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, d_.rL)(i),
        a = (0, d_.rL)(s),
        o = (0, dn.GZ)(n, i, s),
        u = (0, dn.Se)(i),
        d = (0, dn.Se)(s);
    return (
        (t =
            null != s
                ? V.intl.formatToPlainString(dy.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : V.intl.formatToPlainString(dy.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, T.jsxs)("div", {
            className: db.mY,
            children: [
                null != u &&
                    (0, T.jsx)("div", {
                        className: db.fC,
                        children: (0, T.jsx)("img", { src: u, alt: "", className: db.qS }),
                    }),
                (0, T.jsxs)("div", {
                    className: db.Qs,
                    children: [
                        (0, T.jsx)($.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, T.jsx)(dC.Ay, { variant: dC.qP.BLUE, weight: dC.fh.MEDIUM, progress: o }),
                        (0, T.jsx)($.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: db.qg,
                            children: V.intl.format(dy.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, T.jsx)("div", {
                        className: db.fC,
                        children: (0, T.jsx)("img", { src: d, alt: "", className: db.qS }),
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
        } = (0, I.cf)([d_.Ay], () => ({
            badgeProgress: d_.Ay.getSingleRequirementProgress(u9.$.GIFTING)?.current ?? 0,
            currentTier: d_.Ay.getCurrentTier(u9.$.GIFTING),
            nextTier: d_.Ay.getNextTier(u9.$.GIFTING),
            giftsRemaining: d_.Ay.getRemainingToNextTier(u9.$.GIFTING),
            tiers: d_.Ay.getBadgeById(u9.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, T.jsxs)("div", {
              className: db.kL,
              children: [
                  (0, T.jsxs)("div", {
                      className: db.Jo,
                      children: [
                          n > 0 &&
                              (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsx)(dL, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, T.jsx)("div", { className: db.yF }),
                                  ],
                              }),
                          (0, T.jsx)(dj, { tiers: r, currentTier: i }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: db.PJ,
                              children: V.intl.string(dy.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, T.jsx)(dO, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let dD = (0, h.zZ)(x.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(dy.default.sFokBp),
        buildLayout: () => [dP],
        usePredicate: () => {
            let e = (0, dn.F5)("gift_inventory"),
                t = (0, I.bG)([d_.Ay], () => d_.Ay.getBadgeById(u9.$.GIFTING));
            return e && null != t;
        },
    }),
    dP = (0, h.E2)(x.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(dy.default.sFokBp)],
        Component: () => (0, T.jsx)(dR, {}),
    });
var dG = n(264779),
    dM = n(412260),
    dU = n(555393),
    dV = n(725807),
    dk = n(212168),
    dw = n(976860),
    dF = n(469778),
    dB = n(45938),
    dz = n(109802),
    dY = n(869038),
    dX = n(380856);
function dH(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, T.jsxs)(sN.A, {
        className: ic()(dX.wx, n),
        align: sN.A.Align.CENTER,
        children: [
            (0, T.jsx)("div", { className: dX.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dW(e) {
    let { children: t, className: n } = e;
    return (0, T.jsx)("div", { className: ic()(dX.rf, n), children: t });
}
class dK extends f.PureComponent {
    static Header = dH;
    static Body = dW;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, T.jsx)("div", { className: ic()(dX.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dZ = n(180522),
    dq = n(871123),
    dQ = n(366523),
    d$ = n(280450),
    dJ = n(30793),
    d0 = n(97352),
    d1 = n(67480),
    d2 = n(615396),
    d3 = n(274904);
class d5 extends f.PureComponent {
    _copyModeTimeout = new rB.Ep();
    state = { copyMode: dz.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dz.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case dz.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dY.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dB.AK)(t, n),
            (0, uy.C)(
                e,
                () => this.setState({ copyMode: dz.q.SUCCESS }),
                () => this.setState({ copyMode: dz.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dz.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, T.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: d3.Gj,
            children: [
                (0, T.jsx)(dz.e, {
                    className: d3.ph,
                    value: (0, dB.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uy.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l0.XD.BRAND,
                    buttonLook: l0.pR.FILLED,
                }),
                (0, T.jsxs)("div", {
                    className: d3.KB,
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
class d4 extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dY.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dY.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dq.bF)(e)
            ? (0, T.jsx)(dQ.e, { shape: "square", sku: e, containerClassName: d3.ez })
            : null != t
              ? (0, T.jsx)(dZ.A, { giftStyle: t, className: d3.ez, shouldAnimate: this.state.isHovered })
              : (0, T.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dq.bF)(e)
            ? (0, T.jsxs)("div", {
                  className: ic()(d3.Oc, d3.ic),
                  children: [
                      (0, T.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: d3._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, T.jsx)("div", { className: d3.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
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
            (0, T.jsx)("div", { className: d3.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            align: sN.A.Align.CENTER,
            className: d3.pe,
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
        return (0, T.jsxs)(dK, {
            className: i,
            children: [
                (0, T.jsx)(n4.D, {
                    onClick: this.handleToggleOpen,
                    className: d3.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, T.jsx)(dK.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, T.jsxs)("div", {
                            className: d3.MY,
                            children: [
                                (0, T.jsxs)(sN.A, {
                                    align: sN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, T.jsxs)("div", {
                                            className: d3.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, T.jsx)(uN.A, {
                                    direction: a ? uN.A.Directions.UP : uN.A.Directions.DOWN,
                                    className: d3.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, T.jsx)(dK.Body, {
                          children: l
                              ? (0, T.jsx)(oI.y, { className: d3.u1 })
                              : (0, T.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, T.jsx)(d5, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d6 = I.Ay.connectStores([d1.A, tu.A, dJ.A, i2.A, d0.A, d$.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d1.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = dJ.A.getForGifterSKUAndPlan(d$.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: dJ.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: dJ.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d2.c9)(n) : null,
        giftCodes: l,
    };
})(d4);
var d8 = n(725570),
    d7 = n(736653),
    d9 = n(46054);
let ce = im().duration(30, "days");
var ct = n(416052),
    cn = n(878309);
function ci(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, T.jsx)(sS.a, {
        title: "",
        size: "md",
        input: (0, T.jsx)("div", { className: cn.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, T.jsxs)("div", {
            className: cn.t4,
            children: [
                (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, T.jsx)($.E, { variant: "text-md/normal", className: cn.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cs = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
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
        ? (0, T.jsx)(ci, { onClose: t, transitionState: l })
        : null == i
          ? (0, T.jsx)(oI.y, { className: cn.Lq })
          : (0, T.jsx)(sS.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, T.jsxs)("div", {
                    className: cn.N1,
                    children: [
                        (0, T.jsx)("div", { className: cn.Qw }),
                        (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, T.jsx)($.E, {
                            variant: "text-md/normal",
                            className: cn.G3,
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
                            let e = (0, dG.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, T.jsxs)("div", {
                    children: [
                        (0, T.jsx)(sl.c, { className: cn.M5 }),
                        (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, T.jsx)(ct.A, {
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
var cl = n(136380);
function cr(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, d7.Ay)(),
        d = (0, dG.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(ce)
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
        A = (0, dU.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsxs)("div", {
                className: cl.AX,
                children: [
                    (0, T.jsxs)("div", {
                        className: cl.Pg,
                        children: [
                            (0, T.jsxs)("div", {
                                className: cl.At,
                                children: [
                                    (0, T.jsx)("div", {
                                        className: cl.$G,
                                        children: (0, T.jsx)("img", { alt: "", src: d, className: cl.IJ }),
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
                            className: cl.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d9.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, T.jsx)(d8.aF, {
                    renderModal: (e) =>
                        (0, T.jsx)(cs, {
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
function ca(e) {
    let { redesign: t = !1 } = e,
        n = (0, I.yK)([dF.A], () => dF.A.getGiftable()).filter((e) => {
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
        [u, d] = K().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t$.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, T.jsxs)("div", {
                      className: cl.N1,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, T.jsx)(sl.c, { className: cl.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, T.jsxs)("div", {
                      className: cl.uo,
                      children: [
                          (0, T.jsx)(aa.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cl.PC,
                          }),
                          (0, T.jsx)($.E, {
                              variant: "text-md/normal",
                              className: cl.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tX.default)(), (0, dw.pX)(_.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, T.jsx)(dV.A, {
                              showGradient: !0,
                              className: cl.aA,
                              subscriptionTier: t$.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, T.jsxs)("div", {
        children: [
            g,
            (0, T.jsx)(dk.A, {
                className: cl.Yj,
                isShown: !1 === i && c,
                type: dk.i.PREMIUM,
                hasBackground: !0,
                children: (0, T.jsxs)("div", {
                    className: cl.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, T.jsx)(cr, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, T.jsx)(cr, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, T.jsx)(
                                  d6,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t$.FB,
                                  },
                                  (0, dB.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, T.jsx)(
                                  d6,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dB.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, T.jsx)(
                                  d6,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dB.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let co = (0, h.zZ)(x.X.MY_GIFTS_CATEGORY, {
        useTitle: cd,
        buildLayout: () => [cu],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, I.cf)(
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
    cu = (0, h.E2)(x.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cd()],
        Component: () => (0, T.jsx)(ca, { redesign: !0 }),
    });
function cd() {
    return V.intl.string(V.t.YzjdWJ);
}
var cc = n(339048),
    cg = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cm = n(183636),
    cA = n(739508);
function cE() {
    var e, t;
    let n,
        i,
        s = (0, I.yK)([dF.A], () => dF.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = K().groupBy(s, (e) => (0, dB.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cc.XJ)().then(() => a(!0));
        }, []),
        (e = cg.GIFT_INVENTORY),
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
                        "focused" === cm.A.getState() &&
                            (0, cA.pM)(Error(`${e} load timed out`), {
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
        return (0, T.jsx)(oI.y, { className: cl.Lq });
    if (0 === Object.keys(l).length)
        return (0, T.jsxs)("div", {
            className: cl.p$,
            children: [
                (0, T.jsx)(uC.H, { className: cl.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, T.jsx)("p", {
                    className: cl.WO,
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
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, dB.X6)(e);
            return (0, T.jsx)(d6, { skuId: t, subscriptionPlanId: n, entitlements: l[e], giftStyle: i }, e);
        });
    return (0, T.jsx)(q.B, { gap: "lg", children: o });
}
let ch = (0, h.zZ)(x.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cS, buildLayout: () => [cx] }),
    cx = (0, h.E2)(x.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cS()], Component: () => (0, T.jsx)(cE, {}) });
function cS() {
    return V.intl.string(V.t.FWe6CP);
}
var cp = n(532446),
    cT = n(499454);
class cf extends f.Component {
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
            let e = (0, dB.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dY.Ay.resolveGiftCode(e);
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
                (0, cT.h)({ processedCode: e }),
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
                children: (0, T.jsxs)(cp.M, {
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
function cI(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o4.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        s = (0, I.bG)([tu.A], () => tu.A.enabled);
    return (0, T.jsx)(cf, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let c_ = (0, h.zZ)(x.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cN],
        usePredicate: () => !(0, dl.Hp)(),
    }),
    cN = (0, h.E2)(x.X.REDEEM_CODE_INPUT, {
        Component: () => (0, T.jsx)(cI, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cC = (0, h.t_)(x.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [df, c_, co, dD, ch, da],
        initialize: () => {
            (di.Ay.fetchClaimedOutboundPromotionCodes(), (0, dn.Ig)("gift_inventory") && (0, de.o0)(u9.$.GIFTING));
        },
    }),
    cy = (0, h.i4)(x.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uf.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, ds.IO)().length;
            return f.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o4.A.getConfig(e).enabled,
                n = dt.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cC],
    });
var cb = n(659758),
    cv = n(281906),
    cj = n(877624),
    cO = n(269115),
    cL = n(462887),
    cR = n(73825),
    cD = n(531260),
    cP = n(160946),
    cG = n(721668),
    cM = n(224016),
    cU = n(526292),
    cV = n(881489),
    ck = n(106512),
    cw = n(22118),
    cF = n(103411),
    cB = n(190187),
    cz = n(930861),
    cY = n(854627),
    cX = n(889227),
    cH = n(326084),
    cW = n(851746),
    cK = n(664654),
    cZ = n(912140),
    cq = n(953727);
let cQ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, T.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cq.A)({ ...s }),
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
    c$ = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, d7.Ay)(),
            l = (0, cL.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, T.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cq.A)({ ...i }),
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
var cJ = n(387316),
    c0 =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let c1 = "url(#gradient)",
    c2 = (e) => {
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
        let g = (0, d7.Ay)(),
            m = (0, cL.q)(g),
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
                            return c1;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c1;
                        default:
                            return;
                    }
                })(m, r);
        return (0, T.jsxs)("div", {
            className: cJ.Ap,
            children: [
                (0, T.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cJ.fB,
                    children: [
                        (0, T.jsx)("circle", {
                            className: 0 === r || 2 === r ? cJ.F3 : void 0,
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
                (0, T.jsx)("div", { className: cJ.Vw, children: n }),
            ],
        });
    };
var c3 = n(104773);
function c5(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = f.useMemo(() => (0, cZ.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, T.jsx)("div", {
        className: c3.Q7,
        children: (0, T.jsx)("div", {
            className: c3.Nk,
            children: null != s && (0, T.jsx)("img", { className: c3.CH, alt: i, src: s }),
        }),
    });
}
let c4 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = c0.NITRO_GEM,
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
        className: ic()(c3.G3, n),
        children: (0, T.jsx)(c2, {
            animationClassName: ic()(c3._0, { [c3.uJ]: S, [A ?? ""]: S }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case c0.NITRO_GEM:
                        return (0, T.jsx)(cQ, {
                            className: S ? c3.Ow : void 0,
                            backgroundColor: ic()(c3.vH, s),
                            backgroundCircleSize: r,
                        });
                    case c0.NITRO_LOGO:
                        return (0, T.jsx)(c$, { circleColor: E, ellipseOpacity: m });
                    case c0.AVATAR_DECO:
                        if (null != c)
                            return (0, T.jsx)(c5, {
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
var c6 = n(14313);
function c8(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cY.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, T.jsx)(b.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...s })
            : (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: c6.n5, children: n });
    return (0, T.jsx)(sg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !l,
        children: (0, T.jsx)("div", { className: c6.Lg, children: r }),
    });
}
function c7(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, T.jsxs)("div", {
        className: c6.Ip,
        children: [
            (0, T.jsx)("div", { className: c6.Ej }),
            (0, T.jsx)("div", { className: ic()({ [c6.ch]: t > n, [c6.q_]: t === n }) }),
        ],
    });
}
function c9(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, T.jsxs)("div", {
        className: c6.ZM,
        children: [
            (0, T.jsx)(c8, { userRecord: i, placement: 1 }),
            (0, T.jsx)(c7, { numSentReferrals: n, placement: 1 }),
            (0, T.jsx)(c8, { userRecord: s, placement: 2 }),
            (0, T.jsx)(c7, { numSentReferrals: n, placement: 2 }),
            (0, T.jsx)(c8, { userRecord: l, placement: 3 }),
        ],
    });
}
let ge = function () {
    let e = (0, I.bG)([cW.A], () => cW.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cK.J)(),
        i = f.useMemo(() => t.map((e) => new cX.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cH.aK.REDEEMED && s.redeemed++, e === cH.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cK.Z,
        r = ey.A.getArticleURL(_.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (s.sent / cK.Z) * 100,
        d = (0, T.jsxs)("div", {
            className: c6.hE,
            children: [
                (0, T.jsx)(c4, { percentage: u, progressCircleVariation: c0.NITRO_LOGO, iconClassName: c6.ER }),
                (0, T.jsxs)("div", {
                    className: c6.Ns,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: c6.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, T.jsx)(c9, { userRecords: i }),
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cK.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, T.jsx)("div", {
                            className: c6.Fb,
                            children: (0, T.jsx)(cz.wL, {
                                "data-migration-pending": !0,
                                className: c6.r$,
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
                                    className: c6.Zn,
                                    children: [
                                        (0, T.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c6.QH,
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
        c = s.redeemed === cK.Z;
    return (0, T.jsx)(eY.f5, {
        value: a,
        children: (0, T.jsx)("div", {
            className: ic()(c6.kL, { [c6.AP]: c }),
            children: (0, T.jsx)("div", { ref: o, className: ic()(c6.d_, { [c6.kS]: c }), children: d }),
        }),
    });
};
var gt = n(194509),
    gn = n(465794),
    gi = n(774774),
    gs = n(156601),
    gl = n(543213),
    gr = n(88001),
    ga = n(148155),
    go = n(487518);
let gu = "to_premium_home_button",
    gd = "premium home page";
function gc(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t$.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cD.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = t$.hd[t.planIdFromItems],
        c = aS.Ay.getDefaultPrice(d.id),
        g = aS.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cL.M)(s) ? gi.at.PREMIUM_TIER_2_WHITE_FILL : gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, T.jsxs)(T.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, T.jsx)(gi.e4, { text: V.intl.string(V.t.EyjDRE), className: go.LW, colorOptions: e })
                    : (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(gi.HU, {
                                  text: l ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: go.uS,
                                  colorOptions: e,
                              }),
                              (0, T.jsx)("div", { className: go.on }),
                          ],
                      }),
                (0, T.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: go.KB,
                    children: (function () {
                        if (l) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uR.$g)(c.amount, c.currency);
                            return V.intl.format(ga.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? t$.Cq,
                                  regularPrice: g,
                                  renewalDate: aS.Ay.getExpectedRenewalDate(t, o),
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
    return (0, T.jsx)(gs.A, { variant: void 0, subscriptionTier: t$.pe.TIER_2, interval: d.interval });
}
function gg() {
    let e = (0, cU.k5)(),
        t = (0, cU.nf)(),
        n = (0, d7.Ay)(),
        i = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cD.A)(),
        a = (0, cV.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, T.jsxs)("div", {
        className: ic()(go.$Y, { [go.J5]: e || d }),
        children: [
            (0, T.jsxs)("div", {
                className: go.jp,
                children: [
                    l
                        ? (0, T.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: go._K,
                              children: (0, gr.DP)(),
                          })
                        : (0, T.jsx)(cM.A, { className: go.TJ }),
                    l && !e
                        ? (0, T.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, T.jsxs)(T.Fragment, {
                                children: [
                                    (0, T.jsx)(gi.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: go.LW,
                                        colorOptions: gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, T.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: go.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: ey.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, T.jsx)(gc, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)(gi.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: go.uS,
                                            colorOptions: (0, cL.M)(n)
                                                ? gi.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gi.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, T.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: go.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, T.jsx)(gl.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gl.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gl.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gl.Nz.FRACTIONAL_PREMIUM
                                : gl.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, T.jsxs)(l2.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, T.jsx)(gn.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gu,
                                              target: gd,
                                          }),
                                              (0, tX.default)(),
                                              (0, dw.pX)(_.BVt.APPLICATION_STORE));
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
                                              cta_type: gu,
                                              target: gd,
                                          }),
                                              (0, tX.default)(),
                                              (0, dw.pX)(_.BVt.APPLICATION_STORE));
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
                className: go.ah,
                children: (0, T.jsx)("img", { className: go.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gm() {
    return (0, T.jsxs)("div", {
        className: go.T1,
        children: [
            (0, T.jsx)("img", { className: go.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, T.jsxs)("div", {
                className: go.b4,
                children: [
                    (0, T.jsx)(C.D, {
                        className: go.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, T.jsx)($.E, {
                        className: go.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, T.jsx)(gt.A, {
                        className: ic()(go.Tp, go._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: go.VV },
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
let gA = function () {
        let e = (0, dl.Hp)(),
            { analyticsLocations: t } = (0, eY.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
            s = (0, I.bG)([o8.A], () => o8.A.hasFetchedSubscriptions()),
            l = (0, cP.Y)(t$.T7),
            [r, a] = f.useState(!0),
            o = (0, cD.A)({ forceFetch: !0 }),
            u = (0, I.bG)([dM.A], () => {
                let e = dM.A.getMarketingComponentByType(cj.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oP.Fr || oP.v1) && null != u,
            c = f.useRef(null);
        (0, cB.i)();
        let g = (0, cF.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([ov.hP(), ov.$o(), (0, cR.zS)(null, null, _.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, T.jsx)(u5.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, T.jsx)(cG.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, T.jsx)(oI.y, {});
        let S = !!i?.hasActiveTrial;
        return (0, T.jsx)(eY.f5, {
            value: t,
            children: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, T.jsx)(ck.m, { config: u }),
                            (0, T.jsx)(gg, {}),
                            g && (0, T.jsx)(ge, {}),
                            !d && (0, T.jsx)(gm, {}),
                            (0, T.jsx)(cw.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !S,
                                selectedPlanColumnClassName: go.JG,
                                selectedPlanTier: t$.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, T.jsx)(cO.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(_.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, T.jsx)("div", { ref: c, className: go._Z }),
                    }),
                ],
            }),
        });
    },
    gE = (0, h.E2)(x.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, aS.YE)(e, t$.PremiumTypes.TIER_2) ? (0, T.jsx)(gA, {}) : (0, T.jsx)(cv.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gh = (0, h.zZ)(x.X.NITRO_CATEGORY, { buildLayout: () => [gE] }),
    gx = (0, h.t_)(x.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: om.L,
        buildLayout: () => [gh],
    }),
    gS = (0, h.i4)(x.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: aa.t,
        usePersistentBadge: function (e) {
            let t = (0, cb.e)(e);
            return f.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gx],
    });
var gp = n(104510),
    gT = n(820739),
    gf = n(859241),
    gI = n(527113),
    g_ = n(338548),
    gN = n(776096),
    gC = n(711014),
    gy = n(178368),
    gb = n(809545),
    gv = n(168482);
function gj() {
    return (0, T.jsxs)("div", {
        className: gb.iE,
        children: [
            (0, T.jsx)("img", { className: gb.Kk, alt: "", src: gv }),
            (0, T.jsxs)("div", {
                className: gb.pq,
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
                    ((0, dw.pX)(_.BVt.GUILD_DISCOVERY), (0, tX.default)());
                },
            }),
        ],
    });
}
var gO = n(365199),
    gL = n(878678),
    gR = n(443865),
    gD = n(980707),
    gP = n(473145);
function gG(e) {
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
                      iconLeft: gR.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gR.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, T.jsxs)(gD.W, {
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
            (0, gP.I5)(t)
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
var gM = n(545934),
    gU = n(548118),
    gV = n(987144),
    gk = n(864310),
    gw = n(290413);
function gF(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gk.A)(t.id);
    return (0, T.jsxs)("div", {
        className: n ?? gw.OA,
        children: [
            (0, T.jsx)(gU.Ay, { className: gw.$f, guild: t, size: gU.Ay.Sizes.MEDIUM }),
            (0, T.jsxs)("div", {
                className: gw.gI,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, T.jsxs)("div", {
                        className: gw.ew,
                        children: [
                            (0, T.jsxs)("div", {
                                className: gw.QW,
                                children: [
                                    (0, T.jsx)(gp._, {
                                        className: gw.Wz,
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
                                        (0, T.jsx)("div", { className: gw.zk }),
                                        (0, T.jsx)($.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gP.gb)(t.premiumTier, { useLevels: !1 }),
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
function gB(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: gw.Nr,
              children: [
                  (0, T.jsx)(gF, { guild: n }),
                  (0, T.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gp._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, gV.g)({
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
var gz = n(747381);
let gY =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gX(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = f.useRef(null),
        a = (0, gP.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cD.A)(),
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
            let e = null != t.premiumGuildSubscription ? oD.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, T.jsxs)("div", {
        className: ic()(gz.iq, { [gz.Mt]: l }),
        children: [
            (0, T.jsxs)("div", {
                className: gz.kd,
                children: [
                    (0, T.jsx)("img", { alt: "", className: gz.bB, src: gY }),
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
                                              (0, T.jsx)("div", { className: gz.zk }),
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
                                              (0, T.jsx)("div", { className: gz.zk }),
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
                    return (0, T.jsx)(gG, {
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
                        className: gz.Mj,
                        ...e,
                        children: (0, T.jsx)(gO.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gH(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, I.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return (0, T.jsxs)("div", {
        className: gz.Nr,
        children: [
            (0, T.jsx)("div", {
                className: gz.MY,
                children:
                    null != l
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(gF, { guild: l, className: gz.OA }),
                                  (0, T.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tX.default)(),
                                              (0, gL.K4)({
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
                              className: gz.OA,
                              children: (0, T.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, T.jsx)(
                    gX,
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
function gW(e) {
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
                                gM.A.createFromServer(
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
                if ((!(0, gP.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, T.jsx)("div", {
        className: gz.kR,
        children: oD.default
            .keys(l)
            .map((e) => (0, T.jsx)(gH, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gK = n(502572),
    gZ = n(983511),
    gq = n(342744),
    gQ = n(496431);
let g$ = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gQ.A)(n);
    return (0, T.jsx)($.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var gJ = n(731536);
function g0(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gP.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t$.xc.NONE;
    return 0 === l.length
        ? null
        : (0, T.jsxs)("div", {
              className: gJ.Nr,
              children: [
                  (0, T.jsxs)("div", {
                      className: gJ.MY,
                      children: [
                          (0, T.jsxs)("div", {
                              className: gJ._L,
                              children: [
                                  (0, T.jsxs)("div", {
                                      className: gJ.MD,
                                      children: [
                                          (0, T.jsx)("img", { alt: "", className: gJ.F8, src: gY }),
                                          (0, T.jsx)("div", {
                                              className: ic()(gJ.qS, "theme-dark"),
                                              children: (0, T.jsx)("span", { className: gJ.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsxs)("div", {
                                      className: gJ.Qp,
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
                          (0, T.jsx)(gK.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, T.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gp._,
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
                                                              (0, gV.g)({
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
                          g1,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gP.I5)(e),
                              isCanceled: (0, gP.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g1(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, T.jsx)(g$, { cooldown: u.getTime() })
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
        className: ic()(gJ.iq, { [gJ.Mt]: i }),
        children: [
            (0, T.jsxs)("div", {
                className: gJ.kd,
                children: [(0, T.jsx)("img", { alt: "", className: gJ.bB, src: gY }), t],
            }),
            c &&
                (0, T.jsx)(aE.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, T.jsxs)(gD.W, {
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
                                                        (0, T.jsx)(gZ.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, T.jsx)(gq.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: gJ.Mj,
                            ...e,
                            children: (0, T.jsx)(gO.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g2 = n(834612);
function g3(e) {
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
              className: g2.i,
              children: [
                  (0, T.jsxs)("div", {
                      className: g2.b,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, T.jsx)($.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(gW, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, T.jsx)(g0, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var g5 = n(333722),
    g4 = n(9146);
function g6() {
    return (0, T.jsxs)("div", {
        className: g4.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, T.jsx)("div", {
                className: g4.kR,
                children: g5.s.map((e, t) => {
                    let n = e.icon;
                    return (0, T.jsxs)(
                        "div",
                        {
                            className: g4.Nr,
                            children: [
                                (0, T.jsx)(n, { className: g4.Kk }),
                                (0, T.jsx)($.E, {
                                    className: g4.h_,
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
var g8 = n(847374),
    g7 = n(232122),
    g9 = n(665984);
function me() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, T.jsxs)("div", {
        className: g9.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, T.jsx)("ul", {
                className: g9.p_,
                children: g7.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, T.jsxs)(
                        n4.D,
                        {
                            tag: "li",
                            className: ic()(g9.Aw, { [g9.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, T.jsxs)("div", {
                                    className: g9.k7,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            className: g9.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, T.jsx)(g8.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g9.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsx)($.E, {
                                        className: g9.ZF,
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
var mt = n(182859),
    mn = n(25525),
    mi = n(416763);
function ms() {
    let e = ey.A.getArticleURL(_.MVz.GUILD_SUBSCRIPTIONS);
    return (0, T.jsxs)("div", {
        className: mi.wx,
        children: [
            (0, T.jsxs)("div", {
                className: mi.Qs,
                children: [
                    (0, T.jsxs)("div", {
                        className: mi.B5,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: mi.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(mn.default.hjvcLO),
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
            (0, T.jsx)(mt.A, {
                variant: "member",
                className: mi.iO,
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
var ml = n(315629),
    mr = n(87719),
    ma = n(961085);
function mo() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == e || aS.Ay.hasFreeBoosts(e)) return null;
    let t = ey.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(ml.h, {
        color: "nitro-pink",
        className: ma.vK,
        children: [
            (0, T.jsxs)("div", {
                className: ma.nw,
                children: [
                    (0, T.jsx)("img", { alt: "", className: ma.q3, src: gY }),
                    (0, T.jsxs)("div", {
                        className: ma.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: t$.M4, boostCount: t$.M4 }),
                            }),
                            (0, T.jsxs)("div", {
                                className: ma.xv,
                                children: [
                                    (0, T.jsx)(aa.t, { className: ma.nE }),
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
                onClick: mr.e,
            }),
        ],
    });
}
var mu = n(532991);
function md() {
    let e = (0, I.bG)([gN.A], () => gN.A.affinities),
        t = (0, I.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
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
              className: mu.i,
              children: [
                  (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, T.jsx)("div", { className: mu.k, children: n.map((e) => (0, T.jsx)(gB, { guildId: e }, e)) }),
              ],
          });
}
var mc = n(967246);
function mg(e) {
    let { count: t } = e,
        i = ey.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(ml.h, {
        color: "nitro-pink",
        className: mc.vK,
        children: [
            (0, T.jsxs)("div", {
                className: mc.nw,
                children: [
                    (0, T.jsxs)("div", {
                        className: mc.MD,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: mc.F8, src: gY }),
                            (0, T.jsx)("div", {
                                className: ic()(mc.qS, "theme-dark"),
                                children: (0, T.jsx)("span", { className: mc.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mc.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, T.jsxs)("div", {
                                className: mc.xv,
                                children: [
                                    (0, T.jsx)(aa.t, { className: mc.nE }),
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
                icon: gp._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, sp.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, T.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gV.g)({
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
var mm = n(89150);
function mA(e) {
    let { premiumSubscription: t } = e,
        n = (0, I.bG)([gy.A], () => gy.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        s = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = (0, I.bG)([gN.A], () => gN.A.affinities),
        r = (0, I.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, I.bG)([gf.A], () => gf.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cD.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t$.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = aS.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, T.jsxs)("div", {
        className: mm.GO,
        children: [
            (0, T.jsx)(u5.kb, { className: mm.ek }),
            (0, T.jsx)(ms, {}),
            (0, T.jsx)(mo, {}),
            g > 0 && (0, T.jsx)(mg, { count: g }),
            d && (0, T.jsx)(g_.A, {}),
            !a && (0, T.jsx)(gj, {}),
            (0, T.jsxs)("div", {
                className: mm.C_,
                children: [
                    (0, T.jsx)(g3, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, T.jsx)(md, {}),
                    (0, T.jsx)(gI.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, T.jsx)(g6, {}),
                    (0, T.jsx)(me, {}),
                ],
            }),
        ],
    });
}
var mE = n(819677);
let mh = (0, h.E2)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (ov.hP(), ov.$o(), (0, gT.CD)(), (0, cR.zS)(null, null, _.tF5.DISCOVERY), (0, gT.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, I.cf)([o8.A], () => ({
                    hasFetchedSubscriptions: o8.A.hasFetchedSubscriptions(),
                    premiumSubscription: o8.A.getPremiumTypeSubscription(),
                })),
                n = (0, cP.Y)(),
                i = (0, I.bG)([o6.A], () => o6.A.hasFetchedPaymentSources),
                s = (0, I.bG)([gf.A], () => gf.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = f.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, T.jsx)("div", { className: ic()(mE.kL, mE.Lq), children: (0, T.jsx)(oI.y, {}) })
                : (0, T.jsxs)("div", {
                      className: mE.kL,
                      children: [
                          (0, T.jsx)("div", { className: mE.Tp }),
                          (0, T.jsx)("div", { className: mE.Qs, children: (0, T.jsx)(mA, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mx = (0, h.zZ)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mh] }),
    mS = (0, h.t_)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mx],
    }),
    mp = (0, h.i4)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gp._,
        buildLayout: () => [mS],
    });
var mT = n(153659),
    mf = n(155984),
    mI = n(357758),
    m_ = n(262077),
    mN = n(281445),
    mC = n(624479),
    my = n(626584),
    mb = n(131607),
    mv = n(95035),
    mj = n(196736),
    mO = n(685743),
    mL = n(349085),
    mR = n(342942),
    mD = n(376205),
    mP = n(252589),
    mG = n(758836),
    mM = n(49999),
    mU = n(394107),
    mV = n(439050);
let mk = new my.A("GameServerSubscriptionsSection");
function mw(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mF(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mB = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mL.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mb.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d$.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mO.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, mR.A)({
                provider: mN.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mM.i.TAKE_ACTION), g());
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
            [o8.A, d0.A],
            () => {
                let e = null != l ? o8.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d0.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, uR.$g)(u, o.priceCurrency) })
                            : null,
                    c = mw(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(mU.default["3aEgK6"], { date: c })
                        : s
                          ? V.intl.formatToPlainString(mU.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(mU.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mF,
        ),
        N = f.useCallback(() => {
            if (null == l) return;
            let e = o8.A.getSubscriptionById(l),
                t = null != e ? mw(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(mU.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(mU.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(mU.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await ov.M2(l, s), await ov.hP());
                    } catch (e) {
                        mk.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = f.useCallback(() => {
            if (null == l) return;
            let e = o8.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d0.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uR.$g)(u, o.priceCurrency) : "",
                c = mw(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(mU.default.o96qbc),
                subtitle: V.intl.formatToPlainString(mU.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cR.ur)(r);
                        let t = e.items;
                        (await ov.nV(
                            e,
                            { status: _.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aS.UC)(t, e.currency),
                            s,
                        ),
                            await ov.hP());
                    } catch (e) {
                        mk.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, T.jsxs)("div", {
        className: mV.nM,
        children: [
            (0, T.jsxs)("div", {
                className: mV.M4,
                children: [
                    (0, T.jsxs)("div", {
                        className: mV.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, T.jsx)("img", { className: mV.uP, src: a, alt: "" }),
                            (0, T.jsx)("div", { className: mV.tw }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mV.CR,
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
                                          className: mV.CQ,
                                          children: [
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, T.jsx)(n4.D, {
                                                  className: mV.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, T.jsx)(uV.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, T.jsx)(mC.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, T.jsx)(mv.A, { onClick: A, children: V.intl.string(mU.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: mV.Rd,
                children: [
                    (0, T.jsxs)("div", {
                        className: mV.Ff,
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
                                          className: mV.ez,
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
function mz(e) {
    let { servers: t } = e,
        n = (0, mj.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mP.Y)(),
        s = (0, I.bG)([lS.default], () => aS.Ay.canUseShopDiscounts(lS.default.getCurrentUser())),
        l = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, I.yK)([o8.A], () => (0, mD.HY)(t, i, (e) => o8.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !d0.A.isLoadedForSKU(e) && !d0.A.isFetchingForSKU(e));
        e.length > 0 && (0, cR.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tX.default)(), (0, dw.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(mG.G2.GAME_SERVERS)));
    }, []);
    return (0, T.jsxs)("div", {
        className: mV.uW,
        children: [
            (0, T.jsxs)("div", {
                className: mV.wx,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(mU.default.vCzwM7),
                    }),
                    (0, T.jsxs)("div", {
                        className: mV.h_,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(mU.default.y85Eg9),
                            }),
                            n &&
                                (0, T.jsx)(mv.A, {
                                    onClick: a,
                                    children: (0, T.jsx)($.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(mU.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", {
                className: mV.p_,
                children: t.map((e) =>
                    (0, T.jsx)(mB, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mY = n(55766),
    mX = n(696986),
    mH = n(364036);
function mW(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, T.jsx)(mX.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: mH.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, T.jsx)(mX.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: mH.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mH.RI }),
                    (0, T.jsxs)("div", {
                        className: mH.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: mH.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: mH.h_,
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
var mK = n(872351),
    mZ = n(9113),
    mq = n(599941),
    mQ = n(384684),
    m$ = n(2242);
let mJ = [];
var m0 = n(885574),
    m1 = n(62010),
    m2 = n(912851),
    m3 = n(182744);
let m5 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, T.jsx)(n4.D, {
        onClick: i ? void 0 : n,
        className: m3.x6,
        children: (0, T.jsxs)("div", {
            className: m3.hQ,
            children: [
                i
                    ? (0, T.jsx)(oI.y, { type: oI.y.Type.PULSING_ELLIPSIS, className: m3.__invalid_spinner })
                    : (0, T.jsx)($.E, { variant: "text-md/medium", className: m3.Pf, children: t }),
                (0, T.jsx)(g8.a, { size: "md", color: "currentColor", className: m3.UE }),
            ],
        }),
    });
};
var m4 = n(465932),
    m6 = n(543767),
    m8 = n(951555),
    m7 = n(790284),
    m9 = n(636194),
    Ae = n(624456),
    At = n(710144),
    An = n(815332),
    Ai = n(162093),
    As = n(557506);
function Al(e) {
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === m$.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === m$.bN.INTANGIBLE),
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
                (0, T.jsx)(Ai.x, { listingId: i.id, guildId: n.guild_id, className: As.P }),
            ],
        }),
    });
}
var Ar = n(319225),
    Aa = n(746080),
    Ao = n(883616);
function Au(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, T.jsxs)("div", {
        className: Ao.L0,
        children: [
            (0, T.jsxs)("div", {
                className: Ao.a5,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: Ao.HU, children: t }),
                    i &&
                        (0, T.jsx)(sg.m, {
                            text: s,
                            children: (0, T.jsx)(m0.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: Ao.Mo,
                            }),
                        }),
                ],
            }),
            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", className: Ao.sx, children: n }),
        ],
    });
}
function Ad(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eY.Ay)(),
        [i] = (0, m6.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, I.yK)([o6.A], () => [o6.A.hasFetchedPaymentSources, o6.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, T.jsx)(m8.A, { subscription: t, currentInvoicePreview: i })
        : (0, T.jsx)(oI.y, {});
}
function Ac(e) {
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
                  className: Ao.__invalid_rowButtons,
                  children: n
                      ? (0, T.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, T.jsxs)(T.Fragment, {
                            children: [
                                !t && !s && (0, T.jsx)(m5, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, T.jsx)(m5, { label: V.intl.string(V.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Ag = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Ae.M)(e),
                n = (0, I.bG)([m9.A], () => m9.A.getSubscriptionListingForPlan(t)),
                i = (0, I.bG)([m9.A], () =>
                    null != n ? m9.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, I.bG)([sv.A], () => sv.A.getGuild(i?.guild_id)),
                [l, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mq.XE)();
            f.useEffect(() => {
                l && null != s && null == m9.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uR.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m4.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await ov.QP(t, c),
                (0, Ar.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
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
        className: Ao.kL,
        children: [
            (0, T.jsx)(At.A, {
                onClick: r,
                className: Ao.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, T.jsxs)(T.Fragment, {
                        children: [
                            null != s && (0, T.jsx)(gU.Ay, { guild: s, active: !0, size: gU.Ay.Sizes.MEDIUM }),
                            (0, T.jsxs)("div", {
                                className: Ao.if,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        className: Ao.J5,
                                        children: null != s ? s.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, T.jsxs)("div", {
                                        className: Ao.xp,
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-sm/normal",
                                                className: Ao.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, T.jsx)(m1.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : y
                                                  ? (0, T.jsx)(m1.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, T.jsx)(sg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, T.jsx)("div", {
                                                              className: Ao.qc,
                                                              children: (0, T.jsx)(m1.E, {
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
                                                          className: Ao.Bi,
                                                          children: (0, T.jsx)(m1.E, {
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
                                children: (0, T.jsx)(g8.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(Ao.D6, { [Ao.S7]: l }),
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
                          (0, T.jsx)("div", { className: Ao.yF }),
                          (0, T.jsx)(An.A, { groupListingId: i.id, subscription: t, className: Ao.kE }),
                          (0, T.jsxs)("div", {
                              className: Ao.Zx,
                              children: [
                                  (0, T.jsx)(Au, { label: C, value: N }),
                                  (0, T.jsx)(Au, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: S,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, T.jsx)(Au, { label: V.intl.string(V.t.AOcwWB), value: p }),
                              ],
                          }),
                          (0, T.jsx)(mX.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, T.jsx)(su.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, T.jsx)(Ad, { subscription: t }),
                              }),
                          !b &&
                              (0, T.jsx)(Ac, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sp.openModal)((t) => (0, T.jsx)(Al, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, dw.pX)(_.BVt.CHANNEL(s.id, Aa.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tX.default)(),
                                          m2.A.show(
                                              _.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (m7.A.setState({ subsection: eL.nR }),
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
var Am = n(661097);
let AA = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, I.bG)([mQ.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mQ.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? m$.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m$.M_.NONE
                                  : m$.M_.IN_SUBSCRIPTION_SERVER;
                        })([mQ.A]),
                    ) === m$.M_.SUBSCRIBED,
                n = (0, I.bG)([o8.A], () => o8.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o8.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o8.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), ov.hP());
                }, [e, t]),
                n ?? mJ
            );
        })(),
        { loading: i } = (0, mq.eb)(n);
    return ((0, mZ.A)(oP.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, T.jsx)(oI.y, {})
        : 0 === n.length
          ? null
          : (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: mK.z, variant: "secondary", onClick: t }),
                    (0, T.jsx)(mX.h, { size: 10 }),
                    (0, T.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, T.jsx)("div", {
                            className: Am.A,
                            children: n.map((e) => (0, T.jsx)(Ag, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AE = n(327479),
    Ah = n(932012);
function Ax(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, T.jsx)(mX.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: Ah.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, T.jsx)(mX.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: Ah.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ah._e }),
                    (0, T.jsxs)("div", {
                        className: Ah.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: Ah.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: Ah.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(AE.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AS = n(548411),
    Ap = n(417098),
    AT = n(143582),
    Af = n(915043),
    AI = n(631466);
function A_(e) {
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
        className: ic()(AI.iE, t),
        children: [
            (0, T.jsx)("div", { className: ic()(AI.wx, i), children: n }),
            l && (0, T.jsx)("div", { className: AI.Qs, children: s }),
        ],
    });
}
var AN = n(885996),
    AC = n(144165),
    Ay = n(664121),
    Ab = n(950305),
    Av = n(943775),
    Aj = n(123791),
    AO = n(900797),
    AL = n(611643);
let AR = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function AD(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        s = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, T.jsx)(AR.Provider, { value: s, children: t(n) });
}
AD.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = f.useContext(AR),
        l = i ? AO.t : g8.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, T.jsxs)(n4.D, {
        className: ic()(AL.L, t),
        onClick: s,
        children: [
            (0, T.jsx)($.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, T.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AP = n(627363),
    AG = n(243217),
    AM = n(328968),
    AU = n(163437),
    AV = n(3432);
function Ak(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Aw = n(562312),
    AF = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function AB(e) {
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
            [d0.A, d1.A, AM.A, sv.A],
            () => {
                let e,
                    n = d0.A.get(r),
                    i = null != n ? d1.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AM.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AU.PJ)(o.skuFlags),
                    d = u && null != s ? sv.A.getGuild(s) : void 0,
                    c = (0, AU.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d0.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AP.YY)(a),
        x = f.useMemo(() => (null != h ? (0, Av.A)(h, 100) : null), [h]),
        S = g?.deleted ?? !1,
        p = null != g && (0, AU.Se)(g),
        N = t.status === _.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, eY.Ay)(),
        [b] = (0, m6.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ak(t.currentPeriodEnd),
        j = 0 === i;
    return (0, T.jsxs)(A_, {
        headerClassName: Aw.dL,
        header:
            !1 === j
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsxs)("div", {
                              className: Aw.VW,
                              children: [
                                  null != x &&
                                      (0, T.jsx)(AC._, { src: x.href, imageClassName: Aw.Z2, width: 40, height: 40 }),
                                  (0, T.jsxs)("div", {
                                      className: Aw.aF,
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
                              className: Aw.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, T.jsx)(AW, {
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
                : (0, T.jsx)(oI.y, { type: oI.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, T.jsx)(AH, {
                    type: "warning",
                    title: p
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, T.jsx)(AH, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, T.jsx)(AH, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, T.jsxs)("div", {
                className: Aw.zH,
                children: [
                    (0, T.jsx)(AX, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsxs)("span", {
                                          className: Aw.yW,
                                          children: [(0, T.jsx)(Ay.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, T.jsxs)("span", {
                                              className: Aw._t,
                                              children: [
                                                  (0, T.jsx)($.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, T.jsx)(gU.Ay, { guild: c, size: gU.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, T.jsxs)("span", {
                                  className: Aw.yW,
                                  children: [(0, T.jsx)(Ab.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, T.jsx)(Az, { invoicePreview: b, subscriptionPlan: o }),
                    (0, T.jsx)(AX, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: Ak(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, T.jsx)(AY, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, T.jsx)(AZ, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: S,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, T.jsx)(AK, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Az(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, T.jsx)(AX, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, uR.CE)((0, uR.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, T.jsx)(AX, { title: V.intl.string(V.t.KI7ERx), content: i });
    let l = (0, uR.CE)((0, uR.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, T.jsx)(AX, {
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
function AY(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uR.CE)((0, uR.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, T.jsx)(AX, {
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
    return (0, T.jsx)(AX, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function AX(e) {
    let { title: t, content: n } = e;
    return (0, T.jsxs)("div", {
        className: Aw.nM,
        children: [
            (0, T.jsx)($.E, { variant: "text-sm/medium", children: t }),
            (0, T.jsx)($.E, { variant: "text-sm/medium", className: Aw.u4, children: n }),
        ],
    });
}
function AH(e) {
    let { type: t, title: n } = e;
    return (0, T.jsx)("div", {
        className: Aw.Xm,
        children: (0, T.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function AW(e) {
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
        c = (0, AU.Se)(s),
        { analyticsLocations: g } = (0, eY.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, Aj.C)(t.id),
        h = (0, I.bG)([d1.A], () => d1.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, ov.QP)(l, g);
            if (null == e) return;
            (0, sp.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, T.jsx)(t, { ...n, storeListing: i, subscription: AG.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, T.jsxs)("div", {
        className: Aw.fw,
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
function AK(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, T.jsx)(AD, {
        children: (e) =>
            (0, T.jsxs)("div", {
                className: Aw.PX,
                children: [
                    (0, T.jsxs)("div", {
                        className: Aw.wV,
                        children: [
                            e && (0, T.jsx)($.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, T.jsx)(AD.Toggle, {
                                className: Aw.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, T.jsx)(AN.FY, { header: i, icon: (0, AV.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function AZ(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, T.jsx)("div", {
                className: Aw.Ji,
                children: (0, T.jsx)(su.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, T.jsx)(oI.y, { type: oI.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, T.jsx)("div", {
                  className: Aw.Ji,
                  children: (0, T.jsxs)(Ap.$T, {
                      color: Ap.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, T.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, T.jsx)("div", {
                  className: Aw.Ji,
                  children: (0, T.jsx)(su.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, T.jsx)(m8.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var Aq = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c);
n(938796);
var AQ = n(38405);
let A$ = (0, I.UT)(d0.A, {
    getQueryId: _.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d0.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AQ.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cR.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AJ = n(240248),
    A0 = n(237218),
    A1 = n(763064);
function A2(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, T.jsx)("button", {
                className: A1.x6,
                onClick: () => l((e) => !e),
                children: (0, T.jsxs)($.E, {
                    className: A1.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        s
                            ? (0, T.jsx)(AO.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, T.jsx)(g8.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: A1.Qs,
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
var A3 = n(920352);
function A5(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, A0.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = A$(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aS._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, T.jsxs)(A_, {
              className: ic()(A3.iE, i),
              header: (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsxs)("div", {
                          className: A3.qd,
                          children: [
                              null != a &&
                                  (0, T.jsx)(AC._, { src: a.href, imageClassName: A3.rW, width: 48, height: 48 }),
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
                  !(0, AJ.uJ)(r) &&
                      (0, T.jsx)("div", {
                          className: A3.h_,
                          children: (0, T.jsx)(A2, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, T.jsx)("div", {
                          className: A3.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, T.jsx)(AN.FY, { header: n, icon: (0, AV.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var A4 = n(185438),
    A6 = n(683380);
function A8(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Av.A)(t, 100),
        u = (0, AU.PJ)(r.flags),
        d = u ? Ay.R : Ab.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, I.bG)([sv.A], () => (u && null != g ? sv.A.getGuild(g) : void 0), [g, u]),
        A = (0, I.bG)(
            [d1.A],
            () => {
                if (null != a) return d1.A.get(a);
            },
            [a],
        ),
        E = Ak(n.currentPeriodEnd);
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsxs)("div", {
                className: A6.wx,
                children: [
                    null != o && (0, T.jsx)(AC._, { src: o.href, imageClassName: A6.Z2, width: 48, height: 48 }),
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, T.jsxs)("div", {
                                className: A6.p4,
                                children: [
                                    (0, T.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: A6.N4,
                                        children: [(0, T.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, T.jsxs)(T.Fragment, {
                                            children: [
                                                (0, T.jsx)($.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, T.jsxs)("span", {
                                                    className: A6.vP,
                                                    children: [
                                                        (0, T.jsx)(gU.Ay, { guild: m, size: gU.Ay.Sizes.SMOL }),
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
            (0, T.jsx)(AD, {
                children: (e) =>
                    (0, T.jsxs)("div", {
                        className: A6._B,
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
                            (0, T.jsx)(AD.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, T.jsxs)("div", {
                className: A6.x0,
                children: [
                    (0, T.jsx)(A5, {
                        storeListing: i,
                        className: A6.o3,
                        cta: (0, T.jsxs)("div", {
                            className: A6.cJ,
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
                                  A5,
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
                            : (0, T.jsx)(A7, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function A7(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, A4.A)({
            analyticsLocation: _.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, T.jsx)(A5, {
        storeListing: t,
        cta: (0, T.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: s }),
    });
}
class A9 extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, T.jsxs)(Ap.$T, {
                  color: Ap.Hv.DANGER,
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
function Ee(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = f.useState({ route: Aq.HOME }),
        { route: l } = i;
    function r() {
        s({ route: Aq.HOME });
    }
    let a = (e) => {
            (s({ route: Aq.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AF.LOADING })),
                (0, AT._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AF.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AF.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Af.E)(),
        c = d !== Af.mJ.LOADED;
    switch (l) {
        case Aq.HOME:
            return (0, T.jsx)(T.Fragment, {
                children: t.map((e) =>
                    (0, T.jsx)(
                        A9,
                        {
                            subscription: e,
                            children: (0, T.jsx)(AB, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AF.LOADING : (o[e.id] ?? AF.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Aq.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, T.jsx)(A8, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(l);
    }
}
var Et = n(707989);
function En(e) {
    let { onGoBack: t } = e,
        n = (0, I.yK)(
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
        [i, s] = f.useState();
    return (
        null == i && (i = (0, T.jsx)(Ei, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, T.jsxs)("div", {
            children: [
                i,
                (0, T.jsx)("div", {
                    className: Et.A,
                    children: (0, T.jsx)(Ee, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, T.jsx)(Ei, {
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
function Ei(e) {
    let { onBack: t, title: n } = e;
    return (0, T.jsxs)("div", {
        className: Et.D,
        children: [
            (0, T.jsx)(sd.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, T.jsx)(AS.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, T.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Es = n(366999),
    El = n(391659);
function Er(e) {
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
        ? ((t = V.intl.string(ga.default["/S02sx"])), (n = V.intl.string(ga.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === t$.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ic()({ [El.Hs]: i, [El.mT]: !i }),
        d = ic()({ [El.CQ]: i, [El.ZM]: !i }),
        c = ic()({ [El.EM]: !i });
    return (0, T.jsxs)("div", {
        className: El.r6,
        children: [
            (0, T.jsxs)("div", {
                className: El.Nv,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, T.jsx)($.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, T.jsx)("div", {
                    className: El.ZS,
                    children: (0, T.jsx)("div", {
                        className: u,
                        children: (0, T.jsx)($.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Ea = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, aS.kX)(t),
        r = l.length > 0,
        a = (0, Es.Ay)(t.endsAt, Es.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, T.jsx)("div", {
        children: (0, T.jsxs)("div", {
            className: ic()(n, El.f8),
            children: [
                (0, T.jsx)("div", {
                    className: El.J_,
                    children: (0, T.jsxs)("div", {
                        className: El.Bh,
                        children: [
                            (0, T.jsx)("div", {
                                className: El.xt,
                                children: (0, T.jsx)(aa.t, { size: "md", color: "white", className: El.T8 }),
                            }),
                            (0, T.jsx)("div", {
                                className: El.pt,
                                children: (0, T.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, T.jsx)($.E, {
                                className: El.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, T.jsx)(Er, {
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
var Eo = n(983048);
function Eu(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, I.yK)([d0.A], () => [d0.A.get(i), null != l ? d0.A.get(l.planId) : null]);
    if (null == o || aS.Ay.getInterval(i).intervalType !== t$.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aS.z4)(i),
        m = aS.Ay.getDisplayName(i);
    if (a) t = V.intl.string(ga.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === _.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, aS._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, T.jsxs)("div", {
        className: El.Bh,
        children: [
            (0, T.jsx)("div", {
                className: ic()({
                    [El.bY]: g,
                    [El.sr]: o.skuId === t$.pe.TIER_0,
                    [El.lP]: o.skuId === t$.pe.TIER_1,
                    [El.eb]: o.skuId === t$.pe.TIER_2,
                }),
                children: g
                    ? (0, T.jsx)(gp._, { size: "md", color: "currentColor", className: El.Kk })
                    : (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: El.Kk }),
            }),
            (0, T.jsxs)("div", {
                className: El.pt,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, T.jsx)(C.D, {
                            className: El.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, T.jsx)($.E, {
                className: El.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Ed = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, I.yK)([dF.A], () => dF.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, I.bG)([o8.A], () => o8.A.getPremiumSubscription()),
        r = (0, I.bG)([o8.A], () => null == o8.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t$.gD.PREMIUM_MONTH_TIER_1),
        o = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)("div", {
                className: ic()(t, El.xF, El.J_),
                children: Object.keys(i).map((e) =>
                    (0, T.jsx)(
                        Eu,
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
                            className: El.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, T.jsx)(Eo.i, {}),
                    ],
                }),
        ],
    });
};
var Ec = n(902782);
function Eg(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        [l] = (0, m6.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Ec.r : Ec.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aS.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d0.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, uR.$g)(l.total, l.currency);
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
function Em(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, T.jsx)(Eg, { subscription: t, withOverheadSeparator: n });
}
var EA = n(580892),
    EE = n(689255);
let Eh = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function Ex() {
    return (0, T.jsx)(oG.Z, {
        className: EE.wb,
        type: oG.Z.Types.CUSTOM,
        children: (0, T.jsxs)(sN.A, {
            align: sN.A.Align.CENTER,
            children: [
                (0, T.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: EE.pV }),
                (0, T.jsx)("span", { className: EE.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function ES(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mI._)(e, t));
}
function Ep() {
    let e = (0, I.bG)([dF.A], () => dF.A.getForApplication(t$.tv), [], ES);
    return (
        f.useEffect(() => {
            (0, cc.LM)(t$.tv);
        }, []),
        (0, T.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aS.Ay.hasAccountCredit(e)
                    ? (0, T.jsx)(Ed, { className: EE.fX, entitlements: e })
                    : (0, T.jsx)(Ex, {}),
        })
    );
}
function ET() {
    return (0, T.jsx)("hr", { className: EE.hr });
}
let Ef = function () {
        var e;
        let t = (0, I.bG)([o8.A], () => o8.A.getPremiumTypeSubscription()),
            n = (0, m_.A)({ subscriptionFilter: (e) => EA.Hy.has(e.status) }),
            i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, I.bG)(
                [o6.A],
                () => (null != t && null != t.paymentSourceId ? o6.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, I.bG)([o8.A], () => o8.A.hasFetchedSubscriptions()),
            a = (0, I.bG)([oL.A], () => oL.A.isBusy),
            o = (0, cP.Y)(),
            u = m7.A.useField("subsection"),
            d = m7.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? Eh[u] : x.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, I.bG)([o8.A], () => o8.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, I.bG)(
                [o8.A],
                () =>
                    Object.values(o8.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === _.rzx.GUILD)
                        .filter((e) => e.status !== _.Dmq.ENDED).length,
            ),
            A = (0, I.bG)([o8.A], () =>
                Object.values(o8.A.getSubscriptions() ?? {}).some((e) => e.type === _.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mY.f)({ enabled: A }),
            h = (0, I.yK)([o8.A], () => (0, mD.eP)(E, (e) => o8.A.getSubscriptionById(e)), [E]),
            S = (0, cD.A)({ forceFetch: !0 }),
            p = (0, cV.ds)(),
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
                m7.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, cR.zS)(),
                ov.hP(),
                (0, gT.CD)(),
                ov.$o(),
                function () {
                    m7.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, T.jsx)(om.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, T.jsx)(AA, { onGoBack: () => m7.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, T.jsx)(En, { onGoBack: () => m7.A.setState({ subsection: null }) })
                    : (0, T.jsx)("div", {
                          className: EE.kL,
                          children: (0, T.jsxs)("div", {
                              className: EE.Qs,
                              children: [
                                  s ? (0, T.jsx)(EA.Sb, {}) : null,
                                  null != t
                                      ? (0, T.jsx)(EA.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, T.jsx)(EA.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, T.jsxs)("section", {
                                          children: [
                                              (0, T.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: EE.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-md/normal",
                                                  className: EE.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: ey.A.getArticleURL(
                                                          _.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, T.jsx)(Ea, {
                                                  className: EE.fX,
                                                  fractionalPremiumInfo: S,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, T.jsx)(Ep, {}),
                                  m > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(ET, {}),
                                              (0, T.jsx)(mW, {
                                                  count: m,
                                                  onClickManageSubscription: () => m7.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(ET, {}),
                                              (0, T.jsx)(Ax, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m7.A.setState({ subsection: eL.PZ }),
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
                                          children: [(0, T.jsx)(ET, {}), (0, T.jsx)(mz, { servers: h })],
                                      }),
                                  (0, T.jsx)(ET, {}),
                                  null != t ? (0, T.jsx)(Em, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, T.jsx)("div", { className: ic()(EE.kL, EE.Lq), children: (0, T.jsx)(oI.y, {}) });
    },
    EI = (0, h.E2)(x.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, T.jsx)(Ef, {}),
    }),
    E_ = (0, h.zZ)(x.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [EI],
    }),
    EN = (0, h.t_)(x.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [E_] }),
    EC = (0, h.i4)(x.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mT.L,
        usePersistentBadge: function () {
            let e = (0, mf.l)();
            return f.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, T.jsx)(iJ.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EN],
    }),
    Ey = (0, h.WI)(x.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gS, mp, EC, cy, u7],
    });
var Eb = n(540999),
    Ev = n(306471),
    Ej = n(964355),
    EO = n(172272);
let EL = (0, h.zD)(x.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isAxeEnabled),
        setValue: (e) => (0, ro.x)({ axeEnabled: e }),
    }),
    ER = (0, h.zD)(x.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ro.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var ED = n(276086),
    EP = n(354328);
let EG = (0, h.zD)(x.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EP.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_components", e);
        },
    }),
    EM = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EP.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_text_overrides", e);
        },
    }),
    EU = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EP.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, ED.L)("highlight_mana_text", e);
        },
    }),
    EV = (0, h.zD)(x.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EP.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, ED.L)("highlight_void_toggleables", e);
        },
    }),
    Ek = (0, h.sN)(x.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EO.YR,
        markers: Array.from({ length: EO.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EO.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            EO.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Ew = (0, h.zD)(x.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ro.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EF = (0, h.sN)(x.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, I.bG)([ru.default], () => ru.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EO.YR,
        markers: Array.from({ length: EO.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EO.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            EO.Or.getState().setVerticalSpacing(e);
        },
    }),
    EB = (0, h.zZ)(x.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [ER, Ew, Ek, EF, EG, EU, EM, EV, EL],
    });
var Ez = n(246605),
    EY = n(274184);
function EX(e) {
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
let EH = (0, h.E2)(x.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, I.bG)([EY.Ay], () => EY.Ay.getActionTriggeredSurveyOverride());
            return (0, T.jsx)(EX, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ez.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    EW = (0, h.zD)(x.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var EK = n(396478),
    EZ = n(173936),
    Eq = n(103557),
    EQ = n(414079),
    E$ = n(148810),
    EJ = n(380610),
    E0 = n(986238),
    E1 = n(428524),
    E2 = n(252149),
    E3 = n(221851);
let E5 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    E4 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function E6(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class E8 extends f.Component {
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
            className: ic()(E1.oS, E3.SX, E2.N, E1.nM),
            children: [
                (0, T.jsx)(EQ.A, {
                    className: ic()(E1.lL, { [E1.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, T.jsxs)(sN.A, {
                    className: E3.QB,
                    children: [
                        (0, T.jsx)(sN.A.Child, {
                            basis: "50%",
                            children: (0, T.jsx)(so.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E4,
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
                                className: E1.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, T.jsxs)($.E, {
                            variant: "text-sm/normal",
                            className: E1.AS,
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
class E7 extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EJ.bD)();
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
        return K().without(E5, ...t);
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
        let t = await (0, E$.Zk)(e);
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
        (0, sp.openModal)((t) => (0, T.jsx)(E9, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, T.jsx)(EK.pp, {
            theme: nF.A.theme,
            className: ic()(E3.eT, E3.SX),
            children: (0, T.jsx)(EK.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, T.jsx)(
                      E8,
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
                      icon: EZ.LinkIcon,
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
                    disabled: E6(t ?? {}),
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
            ? (0, T.jsx)(oI.y, { className: E3.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E6(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
class E9 extends f.Component {
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
            t = await (0, E$.SB)(e);
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
        return E6(this.props.buildOverrides ?? {});
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
            d = E0.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, T.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, T.jsx)(so.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: E0.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(so.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: E0.VP,
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
                    : (0, T.jsx)(Eq.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(Eq.f, {
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
            actionBarInput: (0, T.jsx)(ct.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let he = (0, h.E2)(x.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E7 });
var ht = n(256311),
    hn = n(883600);
let hi = (0, h.E2)(x.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, I.bG)([hn.A], () => hn.A.overrideId());
        async function t(e) {
            let t = hn.A.getChangelog(e, "en-US");
            return null != t ? t : ((await ht.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, T.jsx)(EX, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => ht.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hs = n(506774);
let hl = new Date("2018-01-01"),
    hr = (0, h.Tf)(x.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oD.default.fromTimestamp(hl.getTime()),
        onClick: () => (hs.w.set("lastChangeLogDate", hl), U.pK.updateSetting(oD.default.fromTimestamp(hl.getTime()))),
    }),
    ha = (0, h.zD)(x.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    ho = (0, h.zD)(x.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isForcedCanary),
        setValue: (e) => {
            (0, ro.x)({ canary: e });
        },
    }),
    hu = (0, h.zD)(x.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.sourceMapsEnabled),
        setValue: (e) => (0, ro.x)({ sourceMapsEnabled: e }),
    }),
    hd = (0, h.zD)(x.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ro.x)({ onlyShowPreviewAppCollections: e }),
    });
var hc = n(10094),
    hg = n(683760);
let hm = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t$.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t$.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t$.PremiumTypes.TIER_2 },
    ],
    hA = (0, h.Hn)(x.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hm,
        clearable: !0,
        useValue: () =>
            (0, I.bG)([hg.A], () => {
                let e = hg.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hc.O)(null, void 0)
                : null === e
                  ? (0, hc.O)(void 0, void 0)
                  : (0, hc.O)(0 === e ? null : e, void 0);
        },
    });
var hE = n(374042);
let hh = (0, h.E2)(x.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, I.bG)([EY.Ay], () => EY.Ay.getSurveyOverride());
            return (0, T.jsx)(EX, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ez.xr(e),
                fetchOverride: (e) => (0, hE.B)(e, !0) ?? null,
            });
        },
    }),
    hx = (0, h.zZ)(x.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hA, hh, EH, hi, hr, ho, EW, hd, ha, hu, he],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hS = (0, h.zD)(x.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ro.x)({ logAnalyticsEvents: e }),
    }),
    hp = (0, h.zD)(x.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ro.x)({ logGatewayEvents: e }),
    }),
    hT = (0, h.zD)(x.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.preventPopoutClose),
        setValue: (e) => (0, ro.x)({ preventPopoutClose: e }),
    }),
    hf = (0, h.zD)(x.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.logKeyboardMismatches),
        setValue: (e) => (0, ro.x)({ logKeyboardMismatches: e }),
    }),
    hI = (0, h.zD)(x.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ro.x)({ logOverlayEvents: e }),
    }),
    h_ = (0, h.zD)(x.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isLoggingQuestEvents),
        setValue: (e) => (0, ro.x)({ logQuestEvents: e }),
    }),
    hN = (0, h.zD)(x.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, I.bG)([ru.default], () => ru.default.isTracingRequests),
        setValue: (e) => (0, ro.x)({ trace: e }),
    }),
    hC = (0, h.zZ)(x.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hp, hI, hN, hS, hf, hT, h_] }),
    hy = (0, h.t_)(x.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hx, hC, EB],
    }),
    hb = (0, h.i4)(x.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ev.V,
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
                } = (0, I.cf)([ru.default, Eb.A, lS.default], () => ({
                    layoutDebuggingEnabled: ru.default.layoutDebuggingEnabled,
                    isDeveloper: Eb.A.isDeveloper,
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
                { horizontalSpacing: g, verticalSpacing: m } = (0, EO.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = EO.Or.getState(),
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
                                                          (0, T.jsx)(Ej.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: EO.YR,
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
                                                          (0, T.jsx)(Ej.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: EO.YR,
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
        buildLayout: () => [hy],
    });
var hv = n(127062),
    hj = n(25044),
    hO = n(80703),
    hL = n(123292),
    hR = n(683438),
    hD = n(890856),
    hP = n(100392),
    hG = n(102609),
    hM = n(271478),
    hU = n(386976),
    hV = n(257433),
    hk = n(32523),
    hw = n(96919),
    hF = n(688151),
    hB = n(863763);
function hz(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = f.useState(s),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, I.bG)([d$.default], () => d$.default.getId()),
        c = (0, I.bG)([d$.default], () => {
            let e = d$.default.getInstallationForTracking();
            return null == e ? null : (0, hO.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hV.iN)(t, g),
        A = (0, hV.Fm)(t, g),
        E = (0, I.yK)([rh.A], () =>
            K()
                .sortBy(rh.A.getRecentExposures(hF.Vh.USER, n), (e) => {
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
                (0, uy.C)((0, hP.yA)(n), () => {
                    ((0, lg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, T.jsx)(hD.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hB.DD,
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
                                    uy.p5 &&
                                        (0, T.jsx)(n4.D, {
                                            onClick: h,
                                            children: (0, T.jsx)(EZ.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", {
                        className: hB.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, T.jsx)("div", { className: hB.Os, children: x });
    let S = "";
    return (
        (S =
            t.system === hG.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hF.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, T.jsxs)("div", {
            className: hB.Os,
            children: [
                x,
                (0, T.jsx)("div", {
                    children: (0, T.jsx)(hM.g, {
                        label: t.system === hG.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, T.jsx)("div", {
                    className: hB.h_,
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
                                  className: hB.id,
                                  children: "Server Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Override Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Recent Exposures",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, T.jsx)("div", {
                          className: hB.id,
                          children: (0, T.jsx)(hL.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, T.jsx)(sl.c, { className: hB.yF }),
            ],
        })
    );
}
function hY(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, I.bG)([rh.A], () => rh.A.getLoadedGuildExperiment(n)),
        d = (0, I.bG)([rh.A, sv.A, iq.A], () => {
            if (t.system === hG.l5.LEGACY) return null == rh.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, I.yK)([rh.A], () =>
            K()
                .sortBy(rh.A.getRecentExposures(hF.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, I.yK)([d$.default, sv.A, rh.A, iq.A], () => {
            let e = t.system === hG.l5.LEGACY,
                i = t.name,
                s = d$.default.getId(),
                l = K().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rh.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hF.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hF.RE.NOT_ELIGIBLE);
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
        A = t.system !== hG.l5.LEGACY,
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
        _ = (0, I.bG)([iq.A, d$.default], () => {
            if (!A) return;
            let e = d$.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, T.jsx)(n4.D, {
            onClick: o,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hB.DD,
                children: [
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)("span", { children: t.title }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", { className: hB.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, T.jsxs)("div", {
              className: hB.Os,
              children: [
                  C,
                  (0, T.jsx)(hM.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, T.jsx)("div", {
                          className: hB.h_,
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
                      className: hB.h_,
                      children: d
                          ? (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hG.l5.LEGACY
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
                                  className: hB.id,
                                  children: ["Server Descriptor", null != S ? ` (${S})` : ""],
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hB.id,
                                  children: "Client Eligibility",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hB.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Guild Assignments",
                                }),
                                (0, T.jsx)($.E, { variant: "code", className: hB.AS, children: g }),
                                t.system === hG.l5.LEGACY &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-lg/medium",
                                                className: hB.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, T.jsx)($.E, {
                                                variant: "code",
                                                className: hB.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Override Descriptor",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hB.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hB.id,
                                    children: "Recent Exposures",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hB.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, T.jsx)("div", {
                            className: hB.id,
                            children: (0, T.jsx)(hL.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, T.jsx)(sl.c, { className: hB.yF }),
              ],
          })
        : (0, T.jsx)("div", { className: hB.Os, children: C });
}
let hX = (0, h.E2)(x.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hU.op)(),
                { experiments: n, overridesInfo: i } = (0, hk.hI)(),
                s = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, I.bG)([d$.default], () => {
                    let e = d$.default.getInstallationForTracking();
                    return null == e ? null : (0, hO.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, hw.oC)((0, hw.R3)((0, hw.Fm)(s), l), a);
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
                                uy.p5 &&
                                    (0, T.jsx)(hL.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uy.C)(r, () => {
                                                (0, lg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, T.jsx)(hR.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hY : hz;
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
                              className: hB.p$,
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
    hH = (0, h.zZ)(x.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hX] }),
    hW = (0, h.t_)(x.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hH] }),
    hK = (0, h.i4)(x.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hv.c,
        useMenu: hj.A,
        buildLayout: () => [hW],
    }),
    hZ = (0, h.WI)(x.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => Eb.A.isDeveloper,
        buildLayout: () => [hK, hb],
    });
var hq = n(682348),
    hQ = n(871633),
    h$ = n(751075),
    hJ = n(843402);
let h0 = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h1() {
    let e = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!1)),
        t = (0, I.bG)([i4.Ay], () => h0(...i4.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, hJ.a2)(), hJ.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, hQ.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h2(e) {
    let { gameHistory: t } = h1();
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
function h3(e) {
    let { namedGames: t, totalCount: n } = h2(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h5() {
    let { namedGames: e } = h2(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        AP.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, s] = (0, I.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, T.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: h$.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, T.jsx)(i7.A, { game: s, size: i7.M.MEDIUM }), shape: h$.e0.ROUNDED } : null,
          };
}
let h4 = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = h3(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = h5();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e))) && (0, nh.xl)(),
    }),
    h6 = (0, h.gN)(x.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h4] });
var h8 = n(533440),
    h7 = n(406535),
    h9 = n(57129);
let xe = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(h9.default.A0FVCV),
        useSubtitle: () => V.intl.string(h9.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xt = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(h9.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(h9.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xn = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [h8._, xe, xt, h6],
    }),
    xi = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: x.X.DATA_AND_PRIVACY_PANEL,
    }),
    xs = (0, h.gN)(x.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xi] });
var xl = n(365258);
let xr = (0, h.Qx)(x.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(h9.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(h9.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(h9.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(h9.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, xl.g8)(t, e);
        if (null == i) return;
        let s = (0, xl.Xc)(e);
        (0, sp.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, T.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xa = n(498642),
    xo = n(573435),
    xu = n(260509),
    xd = n(771810);
function xc(e) {
    let { guild: t, size: n } = e,
        i = (0, xu.Iv)(t, n, !1, !0),
        s = (0, xu.Rb)(t);
    return null != i
        ? (0, T.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, T.jsx)("div", {
              className: xd.F,
              children: (0, T.jsx)($.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xg(e) {
    let { guild: t, size: n } = e;
    return (0, T.jsx)(xo.Ay, {
        className: xd.z,
        mask: xo.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, T.jsx)(xc, { guild: t, size: n }),
    });
}
var xm =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let xA = {
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
var xE = n(618118);
function xh(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, I.bG)([xa.A], () => xa.A.getMemberCount(t.id));
    return (0, T.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, T.jsx)("div", { className: xE.FO, children: (0, T.jsx)(xg, { guild: t, size: 48 }) }),
            (0, T.jsx)("div", {
                className: xE.QH,
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
let xx = function (e) {
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
                s = (0, I.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, f.useState)(() => xA[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xA[e](r, a)), i(e));
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
                { id: xm.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: xm.SERVER_ORDER },
                { id: xm.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: xm.RECENTLY_JOINED },
                { id: xm.ACTIVITY_SHARING_ON, label: V.intl.string(h9.default.ZI51JZ), value: xm.ACTIVITY_SHARING_ON },
                {
                    id: xm.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(h9.default["+kxafn"]),
                    value: xm.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, T.jsxs)("div", {
        className: xE.iE,
        children: [
            t,
            (0, T.jsxs)("div", {
                className: xE.N1,
                children: [
                    (0, T.jsx)(hR.I, {
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
                            className: xE.gO,
                            children: [
                                (0, T.jsx)(aE.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, T.jsx)(gD.W, {
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
                                            className: xE.Ku,
                                            children: [
                                                (0, T.jsx)($.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, T.jsx)(g8.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, T.jsx)(hL.Q, {
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
                children: V.intl.format(h9.default.EvzDff, { count: n.length }),
            }),
            (0, T.jsxs)("ul", {
                className: xE.X1,
                id: m,
                "aria-label": V.intl.string(V.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, T.jsx)("div", {
                            className: xE.pb,
                            children: (0, T.jsx)($.E, {
                                className: xE.R$,
                                variant: "text-lg/medium",
                                children: V.intl.string(V.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, T.jsx)(
                            xh,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xS = n(68322);
let xp = (0, h.E2)(x.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(h9.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, T.jsx)("div", {
                      className: xS.l,
                      children: (0, T.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(h9.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, T.jsx)(xx, { notice: e });
        },
    }),
    xT = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [xr, xp, xs],
    }),
    xf = (0, h.zD)(x.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(h9.default.khuuzv),
        useSubtitle: () => V.intl.string(h9.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    xI = (0, h.E2)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    x_ = (0, h.zD)(x.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(h9.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(h9.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    xN = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(h9.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [xf, x_, xI],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    xC = (0, h.t_)(x.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [xn, xT, xN],
    }),
    xy = (0, h.i4)(x.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: hq._,
        buildLayout: () => [xC],
    });
var xb = n(712440),
    xv = n(370997);
let xj = (0, h.E2)(x.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xv.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var xO = n(478016),
    xL = n(77468),
    xR = n(289498),
    xD = n(573648),
    xP = n(874490),
    xG = n(370480),
    xM = n(968309);
let xU = new Set([_.fg2.XBOX, _.fg2.PLAYSTATION, _.fg2.PLAYSTATION_STAGING, _.fg2.CRUNCHYROLL]);
var xV = n(169869),
    xk = n(814925),
    xw = n(733110),
    xF = n(479785),
    xB = n(757036),
    xz = n(555837),
    xY = n(43990),
    xX = n(241524),
    xH = n(51965),
    xW = n(377368),
    xK = n(631368),
    xZ = n(212739),
    xq = n(30370),
    xQ = n(181666),
    x$ = n(553875),
    xJ = n(660594);
function x0() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, xK.$)()),
            (t = (0, xZ.O)()),
            (s = null != (i = (0, I.bG)([xq.A], () => xq.A.getAccount(null, _.fg2.XBOX))) && !i.revoked),
            e === xK.C.NONE || t
                ? { variant: xK.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xK.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xW.yW)(a),
        u = (0, xX.A)("(max-width: 485px)");
    if (l === xK.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case xK.C.HAS_ACCESS:
        case xK.C.BLOCK_CLAIM:
            ((c = V.intl.string(x$.default["7PdsMK"])),
                (g = (0, T.jsx)(xH.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(x$.default.CubeLC),
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
        case xK.C.NO_ACCESS:
            ((c = V.intl.string(x$.default.NwkRTZ)),
                (g = (0, T.jsx)(tY.A, {
                    defaultTextOverride: V.intl.string(x$.default["0vY+ie"]),
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
                className: xJ.bV,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, T.jsx)(aa.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, T.jsx)(xY.N, {
                theme: _.NJ8.DARK,
                children: (e) =>
                    (0, T.jsx)("div", {
                        className: e,
                        children: (0, T.jsxs)("div", {
                            className: xJ.Nr,
                            children: [
                                (0, T.jsxs)("div", {
                                    className: xJ.Tp,
                                    children: [
                                        (0, T.jsx)("div", {
                                            className: xJ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, T.jsx)("div", { className: xJ.$h }),
                                        (0, T.jsx)("div", { className: xJ.Rv }),
                                        (0, T.jsx)("div", { className: xJ.Lw }),
                                    ],
                                }),
                                (0, T.jsxs)("div", {
                                    className: xJ.Mn,
                                    children: [
                                        (0, T.jsxs)("div", {
                                            className: xJ.mY,
                                            children: [
                                                (0, T.jsx)("img", {
                                                    className: xJ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, T.jsx)($.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xJ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, T.jsx)("div", { className: xJ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)("div", { className: xJ.yF }),
                                            (0, T.jsxs)("div", {
                                                className: xJ.sQ,
                                                children: [
                                                    (0, T.jsx)(uf.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, T.jsx)($.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(xQ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xW.Hx.CONNECT),
                                                                    (0, xM.A)({
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
var x1 = n(201718),
    x2 = n(321078),
    x3 = n(672130),
    x5 = n(379848),
    x4 = n(688901);
function x6(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(mM.i.AUTO_DISMISS), [t]),
        (0, T.jsx)("div", { className: x4.Ad, children: (0, T.jsx)(m1.E, { type: "new", variant: "primary" }) })
    );
}
function x8(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, T.jsxs)("div", {
        className: x4.kL,
        children: [
            i,
            (0, T.jsxs)("div", {
                className: x4.FS,
                children: [
                    (0, T.jsxs)("div", {
                        className: x4.TK,
                        children: [
                            (0, T.jsx)(x5.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, T.jsx)(x6, { markAsDismissed: n }) : null;
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
function x7() {
    let e = ey.A.getArticleURL(_.MVz.PS_CONNECTION);
    return (0, T.jsx)(x8, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, T.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xM.A)({ platformType: _.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let x9 = "/assets/9df988a227916145.png";
function Se() {
    return (0, T.jsx)(x8, {
        title: V.intl.string(xQ.default["9cLtDI"]),
        body: V.intl.format(xQ.default["D+kUbg"], { learnMoreLink: ey.A.getArticleURL(_.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, T.jsx)("img", { src: x9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xM.A)({ platformType: _.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function St() {
    let e = ey.A.getArticleURL(_.MVz.XBOX_CONNECTION);
    return (0, T.jsx)(x8, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, T.jsx)("img", { src: x9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xM.A)({ platformType: _.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Sn = n(783419),
    Si = n(534952),
    Ss = n(211180),
    Sl = n(247259);
function Sr(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, I.cf)(
            [xq.A],
            () => ({
                isJoining: xq.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xq.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : xq.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xq.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, I.bG)([sv.A], () => sv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, T.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    xL.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, T.jsxs)("div", {
            className: Sl.iA,
            children: [
                (0, T.jsxs)("div", {
                    className: Sl.XX,
                    children: [
                        (0, T.jsx)(gU.Ay, { size: gU.Ay.Sizes.SMALL, guild: n.guild, className: Sl.$f }),
                        (0, T.jsxs)("div", {
                            className: Sl.Vn,
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, T.jsx)(nr.Anchor, {
                                    href: xD.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: Sl.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Sa(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xz.G)()), (i = (0, xB.L)(t$.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === _.fg2.XBOX && l
        ? (0, T.jsx)(Se, {})
        : s.twoWayLink
          ? null
          : s.type === _.fg2.XBOX
            ? (0, T.jsx)(St, {})
            : s.type === _.fg2.PLAYSTATION
              ? (0, T.jsx)(x7, {})
              : null;
}
function So(e) {
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
        R = (0, xP.ML)(u.type),
        D = xD.A.get(R);
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
            (null != e && (E(e), xL.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xL.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, T.jsxs)("div", {
            className: Sl.FI,
            children: [
                ((t = xD.A.get(u.type)),
                (n = xD.A.get(R)),
                (i = "1" === (u.metadata ?? {})[Sn.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === _.fg2.TWITTER &&
                    i &&
                    (s = (0, T.jsx)(sg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, T.jsx)(xk.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, T.jsx)(xO.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, T.jsxs)("div", {
                    className: Sl.Il,
                    children: [
                        (0, T.jsx)("img", {
                            alt: n.name,
                            className: Sl.gj,
                            src: (0, cL.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsxs)("div", {
                                    className: Sl.$p,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sl.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, T.jsx)("div", { className: Sl.cG, children: s }),
                                    ],
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sl.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(Ss.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, T.jsx)(n4.D, {
                            className: Sl.uH,
                            onClick: function () {
                                let e = xD.A.get(u.type);
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
                                            xU.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, T.jsx)(s9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, T.jsx)(uk.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, T.jsx)(Sa, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xG.An)(t[Sn.pK.CREATED_AT], c);
                    switch (e.type) {
                        case _.fg2.REDDIT:
                            n = (0, xV.xE)(t, Sl.Nz);
                            break;
                        case _.fg2.STEAM:
                            n = (0, xV.dy)(t, Sl.Nz);
                            break;
                        case _.fg2.LETTERBOXD:
                            n = (0, xV.uq)(t, Sl.Nz);
                            break;
                        case _.fg2.BLUESKY:
                        case _.fg2.TWITTER:
                        case _.fg2.MASTODON:
                            n = (0, xV.ED)(t, Sl.Nz);
                            break;
                        case _.fg2.EBAY:
                            n = (0, xV.ub)(t, Sl.Nz);
                            break;
                        case _.fg2.PAYPAL:
                            n = (0, xV.gZ)(t, Sl.Nz);
                            break;
                        case _.fg2.TIKTOK:
                            n = (0, xV.HU)(t, Sl.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, T.jsx)(
                                $.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sl.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xD.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, T.jsx)(
                                    "div",
                                    {
                                        className: Sl.Z3,
                                        children: (0, T.jsx)(m1.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, T.jsx)(
                                    $.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sl.vt,
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
                                    className: Sl.jy,
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
                                                      xL.A.refresh(e.type, e.id).finally(() => {
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
                        (0, T.jsx)("div", { className: Sl.tJ, children: n })
                    );
                })(u),
                (_.txh.has(u.type) &&
                    (l = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xL.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                _.ewM.has(u.type) &&
                    (r = (0, T.jsx)(t4.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: S,
                        onChange: function (e) {
                            (p(e), xL.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xD.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xM.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xL.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, T.jsxs)("div", {
                    className: Sl.HZ,
                    children: [
                        (0, T.jsx)(t4.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xM.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xL.A.setVisibility(u.type, u.id, n));
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
                                  (0, xM.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, T.jsx)(Sr, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, T.jsx)(xF.A, { partner: u.type }),
            ],
        })
    );
}
function Su(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: Sl.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, T.jsxs)("div", {
                          className: Sl.Il,
                          children: [
                              (0, T.jsx)("img", { alt: n.name, className: ic()(Sl.gj, Sl.sN), src: i }),
                              (0, T.jsxs)("div", {
                                  children: [
                                      (0, T.jsx)("div", {
                                          className: Sl.$p,
                                          children: (0, T.jsx)($.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sl.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sl.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, T.jsx)(n4.D, {
                                  className: Sl.uH,
                                  onClick: () =>
                                      (0, xv.d1)(n, t.scopes, () => {
                                          xb.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, T.jsx)(uk.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, T.jsx)("div", {
                      className: Sl.HZ,
                      children: (0, T.jsx)(t4.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x1.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Sd() {
    let e = (0, xP.gn)(),
        t = (0, i3.A)((0, Si.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, T.jsxs)("div", {
        className: Sl.lA,
        children: [
            t.map((e) => null != e && (0, T.jsx)(x3.A, { application: e, innerClassName: Sl.U$ }, e.id)),
            e.map((e) =>
                (0, T.jsx)(
                    xR.A,
                    { type: e.type, innerClassName: Sl.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function Sc(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => xD.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, T.jsx)(oI.y, { type: oI.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, T.jsx)(EK.pp, {
                    theme: r,
                    className: Sl.p$,
                    children: (0, T.jsx)(EK.SG, {
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
                                Su,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, T.jsx)(
                                So,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xL.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, T.jsx)("div", { className: Sl.V, children: t })
    );
}
let Sg = (0, h.E2)(x.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, T.jsx)(su.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, T.jsx)(Sd, {}) });
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
    Sm = (0, h.E2)(x.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, I.bG)([xq.A], () => xq.A.isFetching()),
                n = (0, I.bG)([xq.A], () => xq.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, I.cf)([xw.default], () => ({
                    authorizedAppsFetchState: xw.default.getFetchState(),
                    authorizedApps: xw.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x2.A)(lS.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d7.Ay)(),
                o = (0, I.bG)([o7.default], () => o7.default.locale);
            return (f.useEffect(() => {
                i === xw.FetchState.NOT_FETCHED && xb.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(x0, {}),
                          (0, T.jsx)(Sc, {
                              fetching: t || l || (r.length > 0 && i !== xw.FetchState.FETCHED),
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
            xL.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    SA = (0, h.zZ)(x.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [Sg, Sm],
    }),
    SE = (0, h.zZ)(x.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [xj],
        initialize: () => (
            xb.A.fetch(),
            () => {
                xv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Sh = (0, h.t_)(x.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: om.L,
        buildLayout: () => [SA, SE],
    }),
    Sx = (0, h.i4)(x.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: EZ.LinkIcon,
        buildLayout: () => [Sh],
    });
var SS = n(625657),
    Sp = n(592598),
    ST = n(773371),
    Sf = n(532294),
    SI = n(672396);
let S_ = SC(null);
function SN() {
    var e;
    let t = SC(S_);
    ((e = S_),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(_.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (S_ = t)));
}
function SC(e) {
    let t = Sf.default.getNotificationPositionMode(),
        n = t !== _.G6Q.DISABLED,
        i = sa.Ay.getOverlayKeybind(),
        s = sa.Ay.getOverlayChatKeybind();
    return {
        enabled: ST.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Sp.A.isNotificationDisabled(SI.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sx.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sx.dI)(s.shortcut) : null,
        text_opacity_slider: Sf.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ST.default.enabled,
    };
}
var Sy = n(237984),
    Sb = n(63035);
function Sv(e) {
    (e.preventDefault(), e.stopPropagation());
}
function Sj(e) {
    let { children: t } = e;
    return (0, T.jsx)("div", { onClick: Sv, children: t });
}
function SO(e) {
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
        className: ic()(Sb.HS, d),
        children: [
            (0, T.jsxs)(hD.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, T.jsx)("div", { className: Sb.x_, children: t }),
                    (0, T.jsxs)("div", {
                        className: Sb.rN,
                        children: [
                            null != n && (0, T.jsx)("div", { className: Sb.$t, children: n }),
                            (0, T.jsxs)("div", {
                                className: Sb.c8,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Sb.SZ,
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
                            (0, T.jsx)("div", { className: Sb.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", { className: Sb.Om, children: a }),
        ],
    });
}
let SL = (0, h.E2)(x.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, T.jsx)(SO, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, T.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, Sy.b)(tk.A.USER_SETTINGS, _.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var SR = n(452295),
    SD = n(684013),
    SP = n(56562),
    SG = n(311043),
    SM = n(454908),
    SU = n(41984),
    SV = n(918825),
    Sk = n(296027),
    Sw = n(562519);
let SF = 5 * n(927813).A.Millis.DAY,
    SB = new Sw.A("overlay_survey_timestamps");
function Sz(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SB.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < SF) ||
            Array.from(SB.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sp.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SB.add(i), (n) => (0, T.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SY() {
    (0, se.sL)("overlay-settings");
}
function SX(e) {
    let { className: t, game: n } = e;
    return (0, se.NP)() && null != n && n.elevated
        ? (0, T.jsx)("div", {
              className: t,
              children: (0, T.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: ey.A.getArticleURL(_.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: SY },
              }),
          })
        : null;
}
var SH = n(760751),
    SW = n(9302),
    SK = n(656513);
let SZ = new Set([
    SU.AR.INITIALIZING,
    SU.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    SU.AR.WAITING_FOR_MODULE_TRACKING,
    SU.AR.WAITING_FOR_OVERLAY_OPEN,
    SU.AR.WAITING_FOR_POPOUT_OPEN,
    SU.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    SU.AR.WAITING_FOR_REACT_INITIALIZATION,
    SU.AR.WAITING_FOR_PID_FOCUS,
    SU.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function Sq(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = f.useState(!1);
    return (0, T.jsx)(SK.N, {
        className: Sb.uR,
        collapsibleContent: (0, T.jsx)("div", { className: Sb.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, T.jsx)(SO, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ic()(Sb.AC, n),
                action: (0, T.jsxs)("div", {
                    className: Sb.rc,
                    children: [
                        s.action,
                        l
                            ? (0, T.jsx)(g8.a, {
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
let SQ = (0, h.E2)(x.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, SM.I)(e?.id);
        let n = e?.pid,
            i = (0, I.bG)(
                [Sk.default],
                () => (null == e || null == n ? null : Sk.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: s } = (0, SM.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, I.cf)(
                [SH.A, tc.A, SG.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i4.hw)(e, !1, [SH.A, tc.A, SG.A]),
                [e, i],
            ),
            a = (0, I.bG)(
                [i4.Ay, SH.A, tc.A, SG.A],
                () => (null == e ? null : (0, i4.xU)(e, i4.Ay, SH.A, tc.A, SG.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(l),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, SW.supportsLegacy)(),
            E = !(0, SW.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, I.cf)([Sk.default], () => Sk.default.getGlobalEnabledStatus());
        function S(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SV.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), SR.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SV.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), SR.A.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SV.OverlayToggledClientSettingType.LEGACY:
                    (SD.A.setEnabled(t, x), (0, SV.Q)(t, SV.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SV.OverlayToggledClientSettingType.OOP:
                    (SD.A.setEnabled(h, t), (0, SV.Q)(t, SV.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                Sz(
                    i ? SV.OverlayToggledClientSettingType.LEGACY_GAME : SV.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let p = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === SU.Ue.Disabled,
            b = i?.state === SU.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && SZ.has(i.state) && !y,
            j = i?.overlayMethod === SU.Ue.OutOfProcess,
            O = i?.overlayMethod === SU.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === SU.Ue.Hook,
            R = i?.state === SU.AR.OVERLAY_CRASHED || i?.state === SU.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== SP.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === SP.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, e_.Ay)(() => {
            SR.A.getDetectableGames();
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
            : (0, T.jsxs)(Sq, {
                  onExpand: m,
                  className: g ? Sb.tx : void 0,
                  title: (0, T.jsxs)(T.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, T.jsx)(sg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, T.jsx)(xk.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, T.jsx)(xO.U, {
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
                              ? (0, T.jsx)(dc.k, { size: "xxs", color: U })
                              : (0, T.jsx)("div", { className: Sb.W4 }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, T.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, T.jsx)(Sj, {
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
                                          (SR.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (SD.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (SD.A.setEnabled(t, t),
                                              SR.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SV.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SV.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SV.OverlayToggledClientSettingType.OOP_GAME
                                                : SV.OverlayToggledClientSettingType.OOP),
                                      null != l && Sz(l, e.id ?? null));
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
                  warning: (0, T.jsx)(SX, { className: Sb.Hh, game: e }),
                  children: [
                      (0, T.jsx)(SO, {
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
                                              ? S(e, SV.OverlayToggledClientSettingType.OOP)
                                              : S(e, SV.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: Sb.Kz }),
                              ],
                          }),
                      }),
                      (0, T.jsx)(SO, {
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
                                              ? S(e, SV.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, SV.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: Sb.Kz }),
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
var S$ = n(206885);
function SJ(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, I.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, T.jsx)(i7.A, { game: s, pid: i, size: i7.M.SMALL });
}
function S0(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, SM.I)(t?.id);
    let o = (0, I.cf)([i4.Ay, SH.A, tc.A, SG.A], () => (0, i4.xU)(t, i4.Ay, SH.A, tc.A, SG.A)),
        u = (0, I.cf)([SH.A, tc.A, SG.A], () => (0, i4.hw)(t, !1, [SH.A, tc.A, SG.A]), [t]),
        d = s(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, T.jsx)(SO, {
            title: t.name,
            icon: (0, T.jsx)(SJ, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(t4.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && Sz(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, T.jsx)("div", { className: Sb.Kz }),
                ],
            }),
        })
    );
}
let S1 = (0, h.E2)(x.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, I.cf)([Sk.default], () =>
                    Sk.default.getGlobalEnabledStatus(),
                ),
                s = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, hQ.n1)(e)),
                l = (0, i3.A)(s.map((e) => e.id)),
                r = !(0, SW.supportsLegacy)();
            function a(e) {
                SD.A.setEnabled(e, i);
                let t = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SV.Q)(e, SV.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Sz(SV.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                SR.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, SW.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, T.jsx)(SO, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: Sb.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              S$.O && (0, T.jsx)("div", { className: Sb.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(Sq, {
                      onExpand: t,
                      className: e ? Sb.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, T.jsx)(Sj, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: Sb.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: Sb.XG,
                              children: s.map((e, t) =>
                                  (0, T.jsx)(
                                      S0,
                                      {
                                          rawGame: e,
                                          clientSettingType: SV.OverlayToggledClientSettingType.LEGACY_GAME,
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
    S2 = (0, h.E2)(x.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, I.cf)([Sk.default], () =>
                    Sk.default.getGlobalEnabledStatus(),
                ),
                s = !(0, SW.supportsOutOfProcess)(),
                l = (0, I.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, hQ.n1)(e)),
                r = (0, i3.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                SD.A.setEnabled(i, e);
                let s = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SV.Q)(e, SV.OverlayToggledClientSettingType.OOP, s),
                    t && Sz(SV.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                SR.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (S$.O ? (s ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, T.jsx)(SO, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: Sb.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              S$.O && (0, T.jsx)("div", { className: Sb.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(Sq, {
                      onExpand: t,
                      className: e ? Sb.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, T.jsx)(Sj, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: Sb.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: Sb.XG,
                              children: l.map((e, t) =>
                                  (0, T.jsx)(
                                      S0,
                                      {
                                          rawGame: e,
                                          clientSettingType: SV.OverlayToggledClientSettingType.OOP_GAME,
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
    S3 = (0, h.zZ)(x.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [SQ, S2, S1, SL],
    }),
    S5 = (0, h.zD)(x.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, I.bG)([Sf.default], () => !Sf.default.disableClickableRegions),
        setValue: (e) => {
            SD.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    S4 = (0, h.E2)(x.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sa.Ay], () => sa.Ay.getOverlayKeybind()),
                t = !(0, SW.supportsLegacy)(),
                n = !(0, SW.supportsOutOfProcess)(),
                [i, s] = (0, I.yK)([i4.Ay], () => [i4.Ay.canShowAdminWarning, i4.Ay.getVisibleGame()], []),
                l = (0, se.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sa.DV)(e?.shortcut ?? []);
            return (0, T.jsx)("div", {
                className: Sb.hc,
                children: (0, T.jsxs)("div", {
                    className: Sb.eH,
                    children: [
                        (0, T.jsxs)("div", {
                            className: Sb.Bu,
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
                                        className: Sb.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sb.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, T.jsx)("div", {
                            className: Sb.IH,
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
var S6 = n(515183),
    S8 = n(682763);
let S7 = (0, h.zD)(x.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, S6.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, I.bG)([Sp.A], () => Sp.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, S6.qJ)(e.pid);
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
            null != l && (0, S8.x8)(l.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    S9 = (0, h.zZ)(x.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [S4, S7, S5] });
var pe = n(93465),
    pt = n(222407);
let pn = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: pe.M.TEXT_CHAT,
        key: x.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: pe.M.WELCOME_GENERAL,
        key: x.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: pe.M.GO_LIVE_NUDGE,
        key: x.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: pe.M.GAME_ACTIVITY,
        key: x.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: pe.M.NOW_PLAYING,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: pe.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nT.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, I.bG)([Sp.A], () => Sp.A.isNotificationDisabledBySetting(pe.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pi(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, I.bG)([Sp.A], () => Sp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, pt.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let ps = (0, h.FW)(x.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pn.map(pi),
    }),
    pl = (0, h.zZ)(x.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [ps],
    }),
    pr = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, I.bG)([Sf.default], () => Sf.default.getAvatarSizeMode()),
        setValue: (e) => {
            SD.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: _.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: _.OSZ.SMALL },
        ],
    }),
    pa = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, I.bG)([Sf.default], () => Sf.default.getDisplayNameMode()),
        setValue: (e) => {
            SD.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: _.pwA.NEVER },
        ],
    }),
    po = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, I.bG)([Sf.default], () => Sf.default.getDisplayUserMode()),
        setValue: (e) => {
            SD.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pu = n(391973),
    pd = n(233741),
    pc = n(897720),
    pg = n(32584);
function pm() {
    let e = pd.A.getWidgetByType(_.uss.VOICE_V3);
    if (null == e) return null;
    let t = pg.A.getWidget(e.id);
    return null != t && (0, pc.ZO)(t) ? t : null;
}
n(392164);
let pA = (0, h.sN)(x.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pm();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pm();
        null != t &&
            (e < 1
                ? (0, pu.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pu.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var pE = n(450740),
    ph = n(968898),
    px = n(288737);
function pS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new px.A({
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
        user: new cX.A({ id: s, username: e }),
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
let pp = (0, h.E2)(x.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, I.cf)([Sf.default], () => ({
                    avatarSizeMode: Sf.default.getAvatarSizeMode(),
                    displayNameMode: Sf.default.getDisplayNameMode(),
                    displayUserMode: Sf.default.getDisplayUserMode(),
                })),
                [l] = f.useState(() => [
                    pS(V.intl.string(V.t.C0ZDvo), !0, !1),
                    pS(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    pS(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, I.bG)([pd.A, pg.A], () => {
                    let e = pd.A.getWidgetByType(_.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pg.A.getWidget(e.id);
                    return null != t && (0, pc.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pS(t.username)).user = t), e) : null, ...l].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, T.jsx)(xY.N, {
                    theme: _.NJ8.ONYX,
                    children: (e) =>
                        (0, T.jsxs)("div", {
                            className: ic()(Sb.Y5, e),
                            children: [
                                (0, T.jsx)("div", {
                                    className: Sb.kJ,
                                    children: (0, T.jsx)(pE.DH, {
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
                                    className: Sb.R$,
                                    children: [
                                        (0, T.jsx)(ph.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, T.jsx)(ph.CS, {}),
                                        (0, T.jsx)(ph.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, T.jsx)("div", { className: Sb.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pT = (0, h.zZ)(x.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [pp, pr, pa, po, pA],
    });
var pf = n(793480),
    pI = n(667419),
    p_ = n(776162),
    pN = n(114994),
    pC = n(371169),
    py = n(671210);
let pb = {
    [_.uss.VOICE_V3]: x.X.OVERLAY_WIDGETS_VOICE,
    [_.uss.QUICK_ACTIONS]: x.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [_.uss.NOTIFICATIONS]: x.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [_.uss.TEXT_CHAT_V3]: x.X.OVERLAY_WIDGETS_CHAT,
    [_.uss.FRIENDS]: x.X.OVERLAY_WIDGETS_FRIENDS,
    [_.uss.ACTIVITY]: x.X.OVERLAY_WIDGETS_ACTIVITY,
    [_.uss.VIDEO]: x.X.OVERLAY_WIDGETS_VIDEO,
    [_.uss.GO_LIVE]: x.X.OVERLAY_WIDGETS_STREAMS,
};
function pv(e) {
    let t = nf.A[e],
        n = pb[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, nT.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, I.bG)([pg.A], () => (0, pI.$e)(e, pg.A), []),
        setValue: (t) => {
            ((0, pI.j$)(), (0, pI.JA)(e, !t));
        },
    });
}
let pj = (0, h.FW)(x.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(py.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(py.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => p_.t3.flatMap(pv),
    }),
    pO = (0, h.E2)(x.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, I.bG)([pN.A], () => pN.A.getProjects());
            return (f.useEffect(() => {
                (0, pC.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, T.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, T.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(py.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, T.jsx)(p_.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, pf.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(py.default["pbu+Yx"])],
    }),
    pL = (0, h.Tf)(x.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pI.eL,
    }),
    pR = (0, h.zZ)(x.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(py.default["Qk/rJB"]),
        usePredicate: nI.b_,
        buildLayout: () => [pj, pO, pL],
    });
var pD = n(54761);
function pP() {
    let [e, t] = (0, mb.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(mM.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, T.jsxs)(T.Fragment, {
              children: [
                  (0, T.jsxs)("div", {
                      className: pD.xC,
                      children: [
                          (0, T.jsx)("div", {
                              children: (0, T.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pD.tl,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              children: (0, T.jsxs)("div", {
                                  className: pD.vJ,
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
                                  className: pD.lh,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pD.VV,
                              children: (0, T.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(mM.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(sl.c, { className: pD.yF }),
              ],
          });
}
function pG() {
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
                  (0, T.jsx)(sl.c, { className: pD.yF }),
              ],
          })
        : null;
}
let pM = (0, h.t_)(x.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                SN(),
                sa.Ay.addChangeListener(SN),
                Sp.A.addChangeListener(SN),
                Sf.default.addChangeListener(SN),
                ST.default.addChangeListener(SN),
                e8.isPlatformEmbedded && (0, hJ.a2)(),
                () => {
                    (sa.Ay.removeChangeListener(SN),
                        Sp.A.removeChangeListener(SN),
                        Sf.default.removeChangeListener(SN),
                        ST.default.removeChangeListener(SN),
                        e8.isPlatformEmbedded && (0, hJ.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(pP, {}), (0, T.jsx)(pG, {})] });
            },
        },
        buildLayout: () => [S3, S9, pR, pT, pl],
    }),
    pU = (0, h.i4)(x.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: SS.l,
        usePredicate: nI.b_,
        buildLayout: () => [pM],
    });
var pV = n(687966);
let pk = (0, h.AK)(x.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pw = (0, h.gN)(x.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pk] });
var pF = n(227309),
    pB = n(29160),
    pz = n(552366),
    pY = n(938442);
function pX(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, SM.I)(t.id);
    let o = (0, I.cf)([i4.Ay, SH.A, tc.A, SG.A], () => (0, i4.xU)(t, i4.Ay, SH.A, tc.A, SG.A)),
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
                (0, hQ.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(p ?? "???"),
        y = ic()(pY.tR, {
            [pz.LO]: !i,
            [pz.Rw]: i,
            [pz.FB]: null != o && i,
            [pz.xL]: r,
            [pz.fG]: null != l && l.length > 0,
        });
    function b() {
        (SR.A.deleteEntry(o),
            l?.forEach((e) => {
                SR.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SH.A.getDetectableGame(o.id) : null;
        (td.default.track(_.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hQ.n1)(o) ? o.gameName : o.name,
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
                        className: ic()(pz.$K, pY.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, T.jsxs)("div", {
                                      className: pz.HS,
                                      children: [
                                          (0, T.jsx)("div", { className: pz.mO, children: p }),
                                          (0, T.jsx)(sg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, T.jsx)(xk.A, {
                                                  className: pz.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, T.jsx)(xO.U, {
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
                                      className: ic()(pz.mO, pz.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && SR.A.editName(o, N);
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
                                        className: pz.GN,
                                        children: (0, T.jsx)(pB.A, {
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
                                return (0, T.jsx)(gD.W, {
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
                                    className: ic()(pz._Q, { [pz.g9]: t.isShown }),
                                    children: (0, T.jsx)(sg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, T.jsx)(sd.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gO.MoreHorizontalIcon,
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
                                                              (SR.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : SR.A.toggleDetection(o);
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
                    className: pz.AQ,
                    children: l.map((e, t) =>
                        (0, T.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, T.jsx)(pX, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, T.jsx)("div", { className: pz.PQ }),
                                ],
                            },
                            (0, i4.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pH() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h1();
    return 0 === e.length
        ? null
        : (0, T.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, T.jsx)(n3.n, {
                  children: (0, T.jsx)("div", {
                      children: e.map((e) =>
                          (0, T.jsx)(
                              pX,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pF.a7 ? t : void 0 },
                              (0, i4.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pW = (0, h.E2)(x.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, T.jsx)(pH, {}),
});
var pK = n(424994);
let pZ = (0, h.zZ)(x.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pW, pw],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pK.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pq = n(890497),
    pQ = n(853270),
    p$ = n(969426);
function pJ(e) {
    let { onClose: t } = e,
        n = (0, I.bG)([i4.Ay], () => i4.Ay.getCandidateGames()),
        [i, s] = f.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, T.jsxs)(ah.l, {
        className: ic()(pQ.H, p$.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, T.jsx)(pq.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, T.jsxs)("div", {
                className: ic()(pQ.o, pY.xM),
                children: [
                    (0, T.jsx)(hL.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, T.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (SR.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p0 = n(475007);
function p1() {
    let e = f.useRef(null);
    return (0, T.jsxs)("div", {
        className: ic()(p0.a, E3.Gf),
        children: [
            (0, T.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, T.jsx)(aE.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, T.jsx)(pJ, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, T.jsx)(hL.Q, {
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
function p2() {
    return (0, T.jsx)("div", {
        className: ic()(pY.tR, pz.eS, pz.Rw),
        children: (0, T.jsxs)("div", {
            className: ic()(pz.$K, pY.Vd),
            children: [
                (0, T.jsx)("div", { className: pz.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, T.jsx)(p1, {}),
            ],
        }),
    });
}
let p3 = (0, h.E2)(x.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h1(),
                n = (0, I.bG)([i4.Ay], () => i4.Ay.getVisibleGame());
            return null == n
                ? (0, T.jsx)(p2, {})
                : (0, T.jsxs)("div", {
                      className: ic()(pY.Vd, pz.C2),
                      children: [
                          (0, T.jsx)(
                              pX,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pF.a7 ? e : void 0,
                              },
                              (0, i4.Es)(n),
                          ),
                          (0, T.jsx)(p1, {}),
                      ],
                  });
        },
    }),
    p5 = (0, h.zZ)(x.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [p3],
    }),
    p4 = (0, h.t_)(x.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [p5, pZ],
    }),
    p6 = (0, h.i4)(x.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pV.GameControllerIcon,
        usePredicate: nI.Pi,
        buildLayout: () => [p4],
    }),
    p8 = (0, h.WI)(x.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [p6, xy, pU, Sx],
    });
var p7 = n(631670),
    p9 = n(619499),
    Te = n(836602),
    Tt = n(591179),
    Tn = n(402860),
    Ti = n(761508),
    Ts = n(159001),
    Tl = n(344346),
    Tr = n(919395),
    Ta = n(68750);
function To(e) {
    let { title: t, children: n } = e;
    return (0, T.jsxs)("div", {
        children: [(0, T.jsx)(C.D, { variant: "text-md/medium", className: Ta.Vf, children: t }), n],
    });
}
function Tu(e) {
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
        className: ic()(Ta.UA, n),
        children: (0, T.jsxs)("div", {
            className: ic()(Ta.yt, i),
            children: [
                (0, T.jsx)("div", {
                    className: ic()(Ta.Fp, a && Ta.Oz),
                    children: (0, T.jsxs)(T.Fragment, {
                        children: [
                            (0, T.jsx)(To, { title: l ?? V.intl.string(V.t.Zb06yP), children: s }),
                            null != r ? (0, T.jsx)(To, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, T.jsx)("div", { className: Ta.oB, children: t }),
            ],
        }),
    });
}
var Td = n(986687),
    Tc = n(101058),
    Tg = n(321191),
    Tm = n(696451),
    TA = n(590941);
function TE() {
    return (0, T.jsxs)("div", {
        className: TA.p$,
        children: [
            (0, T.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TA.Sl }),
            (0, T.jsx)(C.D, { className: TA.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, T.jsx)($.E, { className: TA.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, T.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TA.h8,
                children: (0, T.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, dw.pX)(_.BVt.GUILD_DISCOVERY), (0, tX.default)());
                    },
                }),
            }),
        ],
    });
}
var Th = n(81400),
    Tx = n(450232),
    TS = n(252732),
    Tp = n(355622),
    TT = n(408018),
    Tf = n(845207),
    TI = n(290386),
    T_ = n(941933),
    TN = n(486264);
let TC = (0, tK.Ld)(),
    Ty = (0, G.createChannelRecord)({ id: "1", type: _.rbe.DM }),
    Tb = (0, tK.Ld)();
function Tv(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TI.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(s ?? r),
        [c, g] = f.useState((0, TT.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, TT.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, TT.x7)(r)));
        }, [s, r, u]),
        (0, T.jsxs)(ad.A, {
            title: t,
            titleId: TC,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, T.jsx)(Tf.Ay, {
                    "aria-describedby": Tb,
                    "aria-labelledby": TC,
                    className: TN.i,
                    innerClassName: TN.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: Ty,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: T_.y,
                    type: Tp.oU.PROFILE_BIO_INPUT,
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
                (0, T.jsx)(sm.A, { id: Tb, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Tj = n(821956),
    TO = n(562819),
    TL = n(84540),
    TR = n(467690);
function TD(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eY.Ay)(),
        o = (0, Tr.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tr.CP)(n?.id),
        c = r ? cz.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, T.jsxs)("div", {
            className: TR.NC,
            children: [
                (0, T.jsx)(c, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TO.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [TR.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TR.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tj.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TP = n(339984),
    TG = n(942132);
let TM = [{ name: "gif", extensions: ["gif"] }];
function TU(e) {
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
        m = c ? cz.wL : l0.$n,
        A = f.useCallback(() => {
            (0, TS.XD)({
                uploadType: TP.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TM : void 0,
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
            className: TG.NC,
            children: [
                (0, T.jsx)(m, {
                    className: ic()({ [TG.yj]: c }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TG.DT,
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
var TV = n(248778),
    Tk = n(810188);
function Tw(e) {
    let { user: t, guildId: n, className: i } = e,
        s = aS.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eY.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tr.B0)(t, n),
        d = (0, TV.u)("DisplayNameStylesSection"),
        [c, g] = (0, mb.kn)(d ? [eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, f.useCallback)(() => {
            (g(mM.i.TAKE_ACTION),
                td.default.track(_.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eX.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, f.useCallback)(() => {
            ((0, TL.p)({ displayNameStyles: null }), td.default.track(_.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, f.useCallback)(() => {
            (0, TL.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, T.jsx)("div", { className: Tk.A, children: (0, T.jsx)(m1.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: Tk.N,
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
var TF = n(637193),
    TB = n(622410);
function Tz(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tr.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, TF.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = f.useCallback(() => {
            (0, TL.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: TB.u,
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
var TY = n(88524);
function TX(e) {
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
        g = d ? cz.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        className: l,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, T.jsxs)("div", {
            className: TY.NC,
            children: [
                (0, T.jsx)(g, {
                    className: ic()({ [TY.yj]: d }),
                    size: l0.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TS.XD)({ uploadType: TP.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TY.DT,
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
var TH = n(617061),
    TW = n(625613);
function TK(e) {
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
        c = (0, Tr.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tr.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(t$.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cz.wL : l0.$n;
    return (0, T.jsx)(ad.A, {
        forcedDivider: r,
        borderType: dk.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, T.jsxs)("div", {
            className: TW.NC,
            children: [
                (0, T.jsx)(A, {
                    size: l0.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TH.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [TW.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TW.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TZ = n(515727),
    Tq = n(594401);
function TQ(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = (0, Tr.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Tr.Tu)(n?.id),
        [o, u] = (0, mb.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, T.jsx)(ad.A, {
        showBorder: d,
        borderType: d ? dk.i.NEW_UPSELL : dk.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, T.jsx)("div", { className: Tq.Ad, children: (0, T.jsx)(m1.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, T.jsxs)("div", {
            className: Tq.NC,
            children: [
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, TZ.w)({ analyticsLocations: s, guild: n }), u(mM.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tq.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, TL.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T$ = n(602853),
    TJ = n(654107),
    T0 = n(999291),
    T1 = n(101928),
    T2 = n(819169),
    T3 = n(317097),
    T5 = n(508274),
    T4 = n(379012);
function T6(e) {
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
        c = (0, T$.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TS.sN)(i),
        A = (0, T3.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T2.A)(a),
        S = (0, T2.A)(o),
        [p, I] = f.useState((0, o_.A)());
    return (
        f.useEffect(() => {
            (x !== a || S !== o) && I((0, o_.A)());
        }, [o, a, S, x]),
        (0, T.jsx)(aE.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, T.jsx)(T5.VN, {
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
                    className: ic()(T4.oP, { [T4.r9]: l }),
                    children: [
                        (0, T.jsx)(n4.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? _.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T4.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, T.jsx)(ax.PencilIcon, {
                                size: "custom",
                                className: T4.BW,
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
var T8 = n(190377);
function T7(e) {
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
        c = (0, T0.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T1.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aS.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, T$.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TJ.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, T.jsx)(ad.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !l,
              className: ic()(T8.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, T.jsxs)("div", {
                  className: T8.hd,
                  children: [
                      (0, T.jsx)("div", {
                          className: T8.YX,
                          children: (0, T.jsx)(T6, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: T8.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, T.jsx)("div", {
                          className: T8.YX,
                          children: (0, T.jsx)(T6, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: T8.yz,
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
                              className: T8.WA,
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
function T9(e) {
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
var fe = n(684732),
    ft = n(576705),
    fn = n(931175);
function fi(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, I.bG)([ft.A], () => ft.A.can(_.xBc.CHANGE_NICKNAME, r) || ft.A.can(_.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xB.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(ad.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, T.jsx)(sT.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: _.d0r,
                onChange: function (e) {
                    (0, TL.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, T.jsx)(Tw, { user: l, guildId: r.id, className: fn.F }),
        ],
    });
}
var fs = n(233454);
let fl = "/assets/b25da78aa7949feb.png";
function fr(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, d7.Ay)(),
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
              className: fs.ry,
              children: [
                  (0, T.jsx)("div", { children: i }),
                  (0, T.jsxs)("div", {
                      className: fs.Wc,
                      children: [
                          (0, T.jsx)("img", {
                              className: fs.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.ASH:
                                      case _.NJ8.DARK:
                                      case _.NJ8.ONYX:
                                          return fl;
                                      case _.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fl;
                                  }
                              })(s),
                          }),
                          (0, T.jsxs)("div", {
                              className: fs._9,
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
                          (0, T.jsx)(dV.A, {
                              size: l0.$n.Sizes.LARGE,
                              color: l0.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aS.Ay.isPremium(t)
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
var fa = n(203164);
function fo() {
    let e = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xB.L)(t$.PremiumTypes.TIER_2),
        n = (0, I.bG)([Te.A, sv.A], () => sv.A.getGuild(Te.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, I.cf)([Te.A], () => ({ ...Te.A.getPendingChanges(n.id), errors: Te.A.getErrors(n.id) })),
        d = (0, Tc.V7)({ userId: e.id, image: i }),
        c = (0, Th.EC)(n.id),
        g = (0, I.bG)([Tm.Ay], () => (null == n.id ? null : Tm.Ay.getMember(n.id, e.id))),
        m = (0, I.bG)([Tg.A], () => Tg.A.getGuildMemberProfile(e.id, n.id)),
        A = aS.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Tr.z5)(i, g?.avatar),
        h = (0, Tr.Ac)(l, m?.banner),
        x = (0, fe.l)(o, m?.themeColors),
        S = m?.bio ?? "",
        p = m?.pronouns ?? "";
    return (0, T.jsxs)("div", {
        className: fa.Q,
        children: [
            (0, T.jsx)(
                fi,
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
            (0, T.jsx)(
                T9,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TL.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: p,
                },
                "pronouns",
            ),
            (0, T.jsxs)(fr, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, T.jsx)(
                        TU,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, T.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, g?.avatar, (e) => (0, TL.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, T.jsx)(
                        TD,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, T.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, T.jsx)(Tw, { user: e, guildId: n.id }),
                    (0, T.jsx)(
                        Tz,
                        { user: e, guild: n, titleIcon: (0, T.jsx)(Tx.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, T.jsx)(
                        TK,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, T.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, T.jsx)(
                        TQ,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, T.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, T.jsx)(
                        TX,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TS.rM)(e, m?.banner, (e) => (0, TL.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, T.jsx)(T7, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TL.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, T.jsx)(
                        Tv,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, T.jsx)(Tx.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TL.p)({ guildId: n.id, bio: e }),
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
var fu = n(832131);
function fd(e) {
    (0, sp.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, T.jsx)(t, { source: { ...e, page: _.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fc(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, I.bG)([Tm.Ay], () => (null != t ? Tm.Ay.getMember(t.id, s.id) : null)),
        r = (0, I.bG)([Tg.A], () => !Tg.A.isFetchingProfile(s.id, t?.id)),
        a = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, I.cf)([Te.A], () => Te.A.getPendingChanges(t?.id)),
        c = (0, Tc.V7)({ userId: s.id, image: o }),
        g = (0, Tr.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tr.B0)(s, t?.id);
    return (f.useEffect(() => Ts.IM, []), a)
        ? (0, T.jsx)(om.A, {})
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
                                  (0, T.jsx)(Tu, {
                                      profilePreviewTitle: (0, T.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fu.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, T.jsx)(Td.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: aS.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fd,
                                          containerClassName: fu.ti,
                                      }),
                                      nameplatePreview: (0, T.jsx)(Tl.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fu.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, T.jsx)(fo, {}),
                                  }),
                              ],
                          })
                        : (0, T.jsx)(TE, {}),
                ],
            })
          : (0, T.jsx)(oI.y, {});
}
var fg = n(903209),
    fm = n(641130);
function fA(e) {
    let { children: t, notice: n } = e;
    return (0, T.jsxs)("div", { className: fm.r, children: [n, (0, T.jsx)("div", { children: t })] });
}
var fE = n(823092),
    fh = n(815996),
    fx = n(379197),
    fS = n(488430),
    fp = n(457421),
    fT = n(940622),
    ff = n(559474),
    fI = n(757993);
let f_ = function () {
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
        } = ((e = (0, fT.mb)(ff.RN.UPSELL_BANNER)),
        (t = (0, fT.mb)(ff.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, I.bG)([fp.A], () => fp.A.getMarketingBySurface(fx.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fS.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fE.L_)();
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
            className: fI.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, T.jsx)("div", {
                    className: fI.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, T.jsx)("img", { src: a, className: fI.Qw, alt: "" }),
                }),
                (0, T.jsxs)("div", {
                    className: fI.Em,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fI.DD,
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
                            (0, fh.Cz)({
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
var fN = n(451909),
    fC = n(202639),
    fy = n(285373),
    fb = n(835071),
    fv = n(724651),
    fj = n(732280),
    fO = n(590180),
    fL = n(898461),
    fR = n(469054),
    fD = n(601298),
    fP = n(207803),
    fG = n(461797);
let fM = Object.keys(fG.jB);
function fU(e) {
    let t = null == e ? fM : fM.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fV = n(201805),
    fk = n(221650);
function fw(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        s = (0, fV.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = f.useMemo(() => {
            let e = (0, fG.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, T.jsxs)("div", {
        className: fk.kL,
        children: [
            (0, T.jsx)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fk.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: s.render(),
            }),
            (0, T.jsxs)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${V.intl.string(V.t["44yJxh"])}`,
                className: fk.Lt,
                children: [
                    (0, T.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fk.L_ }),
                    (0, T.jsx)($.E, {
                        className: fk._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fF = n(511484),
    fB = n(811611),
    fz = n(206697),
    fY = n(507553);
function fX(e, t) {
    let n = fY.A.useField("scrollPosition"),
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fY.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fH = n(844222),
    fW = n(842092);
let fK = "/assets/d4955aabdcb5bdee.png",
    fZ = { assetOrigin: fR.E.NEW_ASSET, imageUri: fK, staticImageUri: fK, description: "", originalAsset: void 0 };
function fq(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(fH.C),
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
        } = (0, I.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Tc.V7)({ userId: t.id, image: g ?? i });
    return (0, T.jsx)(Td.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? fZ,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : fW.WX,
        containerClassName: fW.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var fQ = n(829497);
function f$(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = aS.Ay.isPremium(t),
        l = aS.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, I.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getErrors(),
                n = Te.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(fU()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, f.useMemo)(() => {
                    let t = (0, fG.Wt)(e);
                    return {
                        banner: (0, fD.X)({
                            assetOrigin: fR.E.NEW_ASSET,
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
                r = (0, I.bG)([fO.A], () => {
                    let e = fO.A.getProduct(s);
                    return (0, fL.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, fP.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, f.useCallback)(() => {
                let n = fU(e);
                (t(n), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    fX(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eY.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fz.T)(), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let x = (0, fj.V)()?.subscriptionTrial?.skuId === t$.pe.TIER_2,
        S = (0, fv.O)(),
        p = (0, fF.U9)(S, t$.pe.TIER_2);
    return i
        ? (0, T.jsx)(eY.f5, {
              value: A,
              children: (0, T.jsxs)(dk.A, {
                  ref: m,
                  className: fQ.MT,
                  type: dk.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, T.jsx)(Tu, {
                          stickyPreview: !1,
                          layoutClassName: fQ.th,
                          profilePreviewTitle: (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(aa.t, { size: "md", color: "currentColor", className: fQ.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, T.jsxs)(T.Fragment, {
                              children: [(0, T.jsx)(fw, { preset: c, onShuffle: g }), (0, T.jsx)(fq, { user: t })],
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
                                              className: fQ.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsx)(T7, {
                                      className: fQ.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tc.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fP.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, T.jsx)(TX, {
                                      className: fQ.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fP.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, T.jsx)(TU, {
                                          className: fQ.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fP.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, T.jsx)(Tw, { user: t, className: fQ.fz }),
                                  !x &&
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, T.jsx)(fC.d, {
                              onSubscribeModalClose: h,
                              className: fQ.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fb.K)({ onSubscribeFinish: h });
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
                                  (0, T.jsx)("div", { className: fQ.BU }),
                                  (0, T.jsx)(fB.Ay, {
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
var fJ = n(814390),
    f0 = n(643056),
    f1 = n(843282),
    f2 = n(145497),
    f3 = n(685073),
    f5 = n(534400),
    f4 = n(581781),
    f6 = n(743981),
    f8 = n(195801);
let f7 = (0, tK.Ld)(),
    f9 = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, I.cf)([lS.default], () => (0, f3.Zo)(lS.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, T.jsx)(f4.A, {
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
                        : (0, T.jsx)(f2.j, {
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
                        : (0, T.jsx)(f5.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: f6.Sl.SIZE_16,
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
            fX(h, eL._F.GUILD_TAG),
            (0, T.jsxs)(ad.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: f7,
                ref: h,
                children: [
                    (0, T.jsx)($.E, {
                        className: f8.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, T.jsx)(f1.Pw, {
                        className: f8.Lt,
                        optionClassName: f8.S0,
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
var Ie = n(318785),
    It = n(470739);
let In = function () {
    return (0, f0.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, T.jsx)(ad.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, T.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, It.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var Ii = n(953726);
let Is = (0, tK.Ld)();
function Il(e) {
    let t = (0, xB.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(ad.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: Is,
        children: [
            (0, T.jsx)("div", {
                children: (0, T.jsx)(sT.k, {
                    "aria-labelledby": Is,
                    placeholder: e.placeholder,
                    maxLength: _.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, T.jsx)(Tw, { user: e.user, className: Ii.F }),
        ],
    });
}
var Ir = n(376626);
function Ia(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, T.jsx)("div", {
        className: Ir.u,
        children: (0, T.jsx)(t4.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: s ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, p7._e)() : (0, TL.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Io(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T$.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TJ.rh)(l, r, !1),
        o = (0, T3.LX)(a[0]);
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, T.jsx)(T6, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Iu = n(518477);
let Id = function () {
    let e = (0, I.bG)([d$.default], () => d$.default.getId());
    return (0, T.jsx)(ad.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, T.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, Tn.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Iu.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Ic = n(654910);
function Ig() {
    let e = (0, I.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([Tg.A], () => Tg.A.getUserProfile(e.id)),
        n = (0, f0.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, I.cf)([Te.A], () => {
            let e = Te.A.getPendingChanges(),
                t = Te.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tc.V7)({ userId: e.id, image: i }),
        A = (0, Th.EC)(),
        E = aS.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Tr.z5)(i, e.avatar),
        x = (0, Tr.Ac)(l, t?.banner),
        S = (0, T0.Ay)(e.id),
        p = S?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, Ie.b)(),
        C = null != (0, f3.Zo)(e.primaryGuild).guildId;
    return (0, T.jsxs)("div", {
        className: Ic.Q,
        children: [
            (0, T.jsx)(Il, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TL.p)({ globalName: e }),
                user: e,
            }),
            (0, T.jsx)(
                T9,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TL.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, T.jsx)(Id, {}),
            (0, T.jsx)(
                TU,
                {
                    onAvatarChange: (e) => {
                        ((0, TL.p)({ avatar: e }), (0, Tr.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, T.jsx)(TD, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, T.jsx)(Tz, { user: e }),
            (0, T.jsx)(TK, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, T.jsx)(TQ, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(
                              TX,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TL.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, T.jsx)(T7, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TL.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, T.jsx)(
                      Io,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TL.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, T.jsx)(
                Tv,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, TL.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, T.jsx)(f9, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TL.p)({ primaryGuildId: e }),
                }),
            null != p &&
                !n &&
                (0, T.jsx)(Ia, { legacyUsername: p, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, T.jsx)(In, {}, "badges"),
        ],
    });
}
function Im() {
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
var IA = n(447080);
function IE() {
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
        } = (0, I.cf)([Te.A], () => ({ ...Te.A.getPendingChanges(), showNotice: Te.A.showNotice() })),
        a = (0, Tc.V7)({ userId: e.id, image: i }),
        o = (0, Tr.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fJ.A)() && null != n ? fN.Ay.parse(void 0, n).content : n,
        d = aS.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eY.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => p7.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, T.jsx)(om.A, {})
        : (0, T.jsxs)(eY.f5, {
              value: c,
              children: [
                  (0, T.jsx)(f_, {}),
                  (0, T.jsx)(Tu, {
                      profilePreview: (0, T.jsx)(Td.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: Im,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: IA.ti,
                      }),
                      nameplatePreview: (0, T.jsx)(Tl.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? IA.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, T.jsx)(Ig, {}),
                  }),
                  (0, T.jsx)(cO.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, T.jsx)("div", {
                          ref: E,
                          children: (0, T.jsx)(f$, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, T.jsx)(fC.d, {
                          className: IA.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, fb.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, T.jsx)(fy.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, T.jsx)("div", {
                              className: IA.Xl,
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
var Ih = n(625494);
n(46121);
var Ix = n(944983);
let IS = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    Ip = (0, h.E2)(x.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sj.A, gC.Ay, Te.A], () => {
                    let e = Te.A.selectedGuildId ?? sj.A.getGuildId();
                    return null == e || Te._.has(e) ? gC.Ay.getFlattenedGuildIds().find((e) => !Te._.has(e)) : e;
                }),
                t = (0, I.bG)([sv.A], () => sv.A.getGuild(e)),
                n = (0, I.bG)([Te.A], () => Te.A.showNotice()),
                i = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
                s = fY.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(IS[s]);
                }, [s]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fg.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, T.jsx)(fA, {
                    children: (0, T.jsxs)(uC.F, {
                        component: (0, T.jsx)(sm.A, {
                            children: (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, T.jsxs)(Ti.V, {
                                className: Ix.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                Ih._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, Ts.V2)(t.id),
                                            fY.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, T.jsx)(
                                        Ti.V.Item,
                                        {
                                            className: Ix.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, T.jsx)(
                                        Ti.V.Item,
                                        {
                                            className: ic()(Ix.YU, Ix.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eL.Eq.GUILD
                                ? (0, T.jsx)(fc, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  Ih._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Ts.JJ)(e.id);
                                      },
                                  })
                                : (0, T.jsx)(IE, {}),
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
    IT = (0, h.zZ)(x.X.PROFILE_CATEGORY, { buildLayout: () => [Ip] });
var If = n(379633);
function II() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cY.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, T.jsxs)("div", {
              className: If.a5,
              children: [
                  (0, T.jsx)(b.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, T.jsxs)("div", {
                      className: If.FS,
                      children: [
                          (0, T.jsx)($.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, T.jsxs)("div", {
                              className: If.Fk,
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
let I_ = (0, h.t_)(x.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [Te.A], element: p9.A },
        initialize: () => p7.F7,
        buildLayout: () => [IT],
    }),
    IN = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: Iy,
        StronglyDiscouragedCustomComponent: II,
        usePredicate: () => !(0, Tt.X)("user_settings_sidebar"),
        buildLayout: () => [I_],
    }),
    IC = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: Iy,
        StronglyDiscouragedCustomComponent: II,
        usePredicate: () => (0, Tt.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d$.default.getId();
            (0, Tn.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Iy() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cY.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, T.jsx)(b.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let Ib = (0, h.WI)(x.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [IN, IC] });
var Iv = n(98207);
n(204925);
let Ij = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sp.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, T.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uD.tE : null, onCloseCallback: t },
    );
};
var IO = n(940856),
    IL = n(506775),
    IR = n(379257),
    ID = n(121780),
    IP = n(666113);
function IG() {
    let e = ID.A.getCountryCode(),
        t = null != e ? IP.IN[e.alpha2] : void 0;
    IR.A.openUrl(ey.A.getArticleURL(t ?? IP.k9));
}
var IM = n(521169);
function IU() {
    return (0, IM.w)(IP.Vc);
}
var IV = n(680091);
function Ik() {
    let e = IU(),
        t = (0, IL.ZP)();
    if (!e) return null;
    switch (t) {
        case IL.M$.ADULT:
            return V.intl.format(IV.default.gi4ulu, { handleOnAgeGatedContentHook: IL.M0 });
        case IL.M$.TEEN:
            return V.intl.format(IV.default["221iML"], {
                handleOnAgeGatedContentHook: IL.M0,
                handleOnConfirmAgeHook: IL.aP,
            });
        case IL.M$.UNVERIFIED:
            return V.intl.format(IV.default["W0/7DD"], {
                handleOnAgeGatedContentHook: IG,
                handleOnConfirmAgeHook: IL.aP,
            });
    }
}
var Iw = n(26137),
    IF = n(957485);
function IB() {
    let e = IU(),
        t = (0, IL.ZP)();
    return e ? { icon: t === IL.M$.ADULT ? Iw.r : IF.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Iz() {
    let e = IB();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function IY() {
    return IU() ? V.intl.string(V.t.piqs0o) : null;
}
var IX = n(438140);
let IH = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    IW = [];
function IK() {
    return (0, IX.Wt)() ? IH : IW;
}
var IZ = n(36149),
    Iq = n(207560),
    IQ = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    I$ = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function IJ(e, t) {
    let n = (0, I.bG)([lS.default], () => null != lS.default.getCurrentUser()),
        i = (0, Iq.fk)(),
        s = (0, IL.ZP)(),
        l = (0, IZ.Y2)(),
        r = IU();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case IL.M$.UNVERIFIED:
            return "verify" === e;
        case IL.M$.TEEN:
            return e === (r ? "info" : "verify");
        case IL.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var I0 = n(841365);
function I1() {
    let e = (0, IL.hD)();
    return (0, T.jsxs)($.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(I0.default.WM5adV, { handleOnHelpUrlHook: IL.M0 })],
    });
}
let I2 = {
        useTitle: () => IY() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ik,
        useVariant: () => "secondary",
        useLeadingDecoration: Iz,
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: I1,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    },
    I3 = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I2, usePredicate: () => IJ(I$.EDIT, IQ.LEGACY) }),
    I5 = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I2,
        usePredicate: () => IJ(I$.EDIT, IQ.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    I4 = {
        useTitle: () => IY() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ik,
        useLeadingDecoration: function () {
            let e = IB();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, IL.hD)() }),
    },
    I6 = (0, h.v_)(x.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...I4, usePredicate: () => IJ(I$.INFO, IQ.LEGACY) }),
    I8 = (0, h.v_)(x.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...I4,
        usePredicate: () => IJ(I$.INFO, IQ.TINY_BRONCO),
    }),
    I7 = {
        useTitle: () => IY() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ik,
        useVariant: () => "secondary",
        useLeadingDecoration: Iz,
        getDismissibleBadges: IK,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, IL.hD)() }),
        useLabel: function () {
            return (0, IZ.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: IL.aP,
    },
    I9 = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I7, usePredicate: () => IJ(I$.VERIFY, IQ.LEGACY) }),
    _e = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I7,
        usePredicate: () => IJ(I$.VERIFY, IQ.TINY_BRONCO),
    }),
    _t = [I9, I3, I6],
    _n = [_e, I5, I8],
    _i = (0, h.Tf)(x.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => Ij(),
    });
function _s(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function _l(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function _r(e) {
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
            (0, T.jsx)(hL.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function _a() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.email);
    return null == e
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, T.jsx)(_r, {
              text: e,
              censor: _l,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let _o = (0, h.Tf)(x.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _a }),
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
var _u = n(557722),
    _d = n(53516);
function _c() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, T.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, T.jsx)(_r, {
                  text: t,
                  censor: _s,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let _g = (0, h.Tf)(x.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _c }),
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
                      return (t) => (0, T.jsx)(e, { reason: _u.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _d.V },
              )
            : (0, sp.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, T.jsx)(e, { ...t });
              });
    },
});
function _m() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _A() {
    let e = (0, Th.EC)(),
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
let _E = (0, h.Tf)(x.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _A,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (_m() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _m,
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    }),
    _h = (0, h.zZ)(x.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, IO.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => Ij() },
                    };
        },
        buildLayout: () => [_E, _i, _o, _g, ..._t],
    });
var _x = n(398177);
let _S = (0, h.Tf)(x.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sp.openModal)((e) => (0, T.jsx)(_x.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _p = n(200921);
let _T = [];
function _f() {
    _T = [];
}
class _I extends I.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _T;
    }
}
let __ = new _I(tl.h, {
    LOGOUT: _f,
    LOGIN_SUCCESS: _f,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        _T = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [..._T],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        _T = n;
    },
});
function _N() {
    let e = (0, I.cf)([__], () => __.getSessions());
    return f.useMemo(() => {
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
function _C(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var _y = n(176524),
    _b = n(646270),
    _v = n(738678),
    _j = n(489828);
function _O(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, T.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, T.jsx)(_y.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
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
function _L(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dc.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: _b.u };
                        case "horizon os":
                            return { text: e, icon: _v.G };
                        default:
                            return { text: e, icon: dc.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _C(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, T.jsx)(_O, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, T.jsx)(n4.D, {
                className: _j.X,
                onClick: () => (0, _p.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, T.jsx)(uk.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _R(e) {
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
let _D = (0, h.E2)(x.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _N();
            return null == e
                ? (0, T.jsx)(oI.y, {})
                : (0, T.jsx)(_R, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, T.jsx)(_L, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _P = (0, h.E2)(x.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _N();
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, T.jsx)(j.$, {
                    onClick: () => (0, _p.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _N();
            return e.length > 0;
        },
    });
var _G = n(766928);
function _M() {
    return (0, T.jsx)(_O, {
        icon: _G.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(x.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _U = (0, h.E2)(x.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _N(),
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, T.jsxs)(_R, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, T.jsx)(_L, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, T.jsx)(_M, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _N(),
                t = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    _V = (0, h.zZ)(x.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, _p.GY)();
        },
        buildLayout: () => [_D, _U, _P],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    _k = (0, h.t_)(x.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: om.L,
        buildLayout: () => [_V],
    }),
    _w = (0, h.t0)(x.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [_k],
        initialize: () => {
            (0, _p.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = _N(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var _F = n(464477);
function _B(e) {
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
function _z() {
    return (0, ot.bG)([lS.default], () => {
        let e = lS.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _Y =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function _X() {
    let e = (0, ot.bG)([lS.default], () => lS.default.getCurrentUser()?.verified);
    return _F.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, ot.bG)([sv.A, ft.A, lS.default], () =>
        lS.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : sv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        ft.A.can(_.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var _W = n(466034);
let _K = (0, h.Tf)(x.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => _H(!0),
        useDisabled: () => null !== _H(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, I.bG)([d$.default], () => d$.default.hasTOTPEnabled()),
                t = _X() === _Y.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n2.A)({
                title: V.intl.string(V.t["D+aE7g"]),
                subtitle: V.intl.string(V.t.EA4ZEk),
                variant: "critical",
                confirmText: V.intl.string(V.t.N86XcP),
                onConfirm: () => Iv.A.disable(),
            }),
    }),
    _Z = (0, h.zZ)(x.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([d$.default], () => d$.default.hasTOTPEnabled()),
                t = _X() === _Y.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: _W.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (_X()) {
                case _Y.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case _Y.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case _Y.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [_K],
    });
var _q = n(670492),
    _Q = n(32880),
    _$ = n(663417),
    _J = n(658675),
    _0 = n(900686);
function _1() {
    (0, sp.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, T.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    Iv.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var _2 = n(858487);
function _3(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _5() {
    let e = _q.A.getVerificationKey();
    if ("" === e) return void _1();
    try {
        await Iv.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function _4(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _3(t),
        s = f.useRef(null),
        l = (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)(_J.P, { checked: n }), (0, T.jsx)($.E, { variant: "text-md/normal", children: i })],
        });
    return uy.p5
        ? (0, T.jsx)(n4.D, {
              tag: "li",
              className: ic()(_2.aY, _2.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uy.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uy.C)(i), (0, lg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, T.jsx)("li", { className: _2.aY, children: l });
}
let _6 = (0, h.zZ)(x.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, I.bG)([_q.A], () => _q.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: _z,
        buildLayout: () => [_8],
    }),
    _8 = (0, h.E2)(x.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, I.bG)([_q.A], () => _q.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${_3(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, T.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: _1 })
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)("ul", {
                              className: _2.E5,
                              children: e.map((e) => (0, T.jsx)(_4, { code: e }, e.code)),
                          }),
                          (0, T.jsxs)(l2.e, {
                              size: "sm",
                              children: [
                                  (0, T.jsx)(_0.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, T.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _Q.DownloadIcon,
                                      }),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: _$.RefreshIcon,
                                      onClick: _5,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    _7 = (0, h.Tf)(x.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, T.jsx)(hL.Q, {
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
                        handleSubmit: Iv.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    _9 = (0, h.zZ)(x.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, I.bG)([lS.default], () => _B(lS.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
                t = (0, I.bG)([lS.default], () => null != _B(lS.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: Ne,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _X(),
                t = _z(),
                n = (0, I.bG)([d$.default], () => d$.default.hasTOTPEnabled());
            return e === _Y.AVAILABLE && t && n;
        },
        buildLayout: () => [_7],
    });
function Ne() {
    let e = lS.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _u.d.USER_SETTINGS_UPDATE, onAddedPhone: Iv.A.enableSMS }),
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
                    { modalKey: _d.V },
                ));
        } else Iv.A.enableSMS();
}
var Nt = n(665671),
    Nn = n(442433),
    Ni = n(917136),
    Ns = n(976910),
    Nl = n(267255);
function Nr(e) {
    let { credential: t } = e;
    return (0, T.jsxs)("li", {
        className: Nl.e,
        children: [
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: _C(t.last_used) }),
                        }),
                ],
            }),
            (0, T.jsx)(sd.K, {
                icon: gO.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nn.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, T.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Na = (0, h.zZ)(x.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (_X() === _Y.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: Nt.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_X()) {
                    case _Y.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case _Y.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case _Y.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [No],
    }),
    No = (0, h.E2)(x.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, I.cf)([Ns.A], () => ({
                hasFetchedCredentials: Ns.A.hasFetchedCredentials(),
                credentials: Ns.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || Ni.JQ();
            }, [t]),
            t)
                ? (0, T.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, T.jsx)(Nr, { credential: e }, e.id)),
                  })
                : (0, T.jsx)(oI.y, {});
        },
    }),
    Nu = (0, h.t_)(x.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [Na, _Z, _9, _6],
    }),
    Nd = (0, h.t0)(x.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _z();
            return { type: p.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nu],
    }),
    Nc = (0, h.zZ)(x.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [_S, Nd, _w],
    }),
    Ng = { [IL.M$.ADULT]: IV.default.PMznGO, [IL.M$.TEEN]: IV.default.qSkhZH, [IL.M$.UNVERIFIED]: IV.default.vGxRDB },
    Nm = [eE.M.TINY_BRONCO_NOTICE],
    NA = [];
function NE() {
    IR.A.openUrl(IP.m5);
}
var Nh = n(308645),
    Nx = n(555725),
    NS = n(855267);
let Np = (0, h.E2)(x.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NS.A,
    }),
    NT = (0, h.zZ)(x.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Np] }),
    Nf = (0, h.t_)(x.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [NT],
    }),
    NI = (0, h.t0)(x.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: Nx.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Nx._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Nx.aO)() };
        },
        initialize: () => {
            Nh.Yn();
        },
        buildLayout: () => [Nf],
    }),
    N_ = (0, h.zZ)(x.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (IU() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IX.LH)(),
                t = (0, IL.ZP)(),
                [n, i] = (0, mb.kn)(e ? Nm : NA);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(Ng[t], { handleOnBlogHook: NE }),
                      onDismiss: () => i(mM.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [..._n, NI],
    });
var NN = n(738188),
    NC = n(834981),
    Ny = n(987197),
    Nb = n(822585),
    Nv = n(840387),
    Nj = n(961526),
    NO = n(513687);
let NL = (0, h.E2)(x.X.FAMILY_CENTER_SETTING, {
        Component: Nj.p,
        useSearchTerms: () => [
            V.intl.string(NO.default.RZqaJn),
            V.intl.string(NO.default.bdBmqy),
            V.intl.string(NO.default["gVWG+6"]),
            V.intl.string(NO.default.ahKIJO),
            V.intl.string(NO.default["8SLtqb"]),
        ],
    }),
    NR = (0, h.zZ)(x.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NL] }),
    ND = (0, h.t_)(x.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(NO.default.RZqaJn),
        buildLayout: () => [NR],
    }),
    NP = (0, h.zZ)(x.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(NO.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Ny.f)(),
                t = (0, Nb.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, NC.VT)();
            return f.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NG],
    }),
    NG = (0, h.t0)(x.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, NC.Li)() ? V.intl.string(NO.default.IcMQUP) : V.intl.string(NO.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nv.Z)(),
                t = (0, NC.Li)();
            return e
                ? t
                    ? V.intl.string(NO.default.G8lHFU)
                    : V.intl.string(NO.default.uOLNEZ)
                : V.intl.string(NO.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Ny.f)(),
                t = (0, Nb.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: NN.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [ND],
    });
var NM = n(425587),
    NU = n(662758);
function NV(e) {
    if (e.body.code === _.t02.INVALID_PASSWORD) throw e;
    (0, lJ.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function Nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lS.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NM.A.fetchTeams(!0)).body;
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
                  (0, T.jsx)(NU.default, {
                      ...t,
                      handleSubmit: (t) => (0, p7.U_)(t, e).then(_.tEg, NV),
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
                  onConfirm: () => (0, p7.U_)("", !0),
              });
}
let Nw = (0, h.Tf)(x.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nk(!0),
    }),
    NF = (0, h.Tf)(x.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nk(!1),
        usePredicate: () => {
            let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NB = (0, h.zZ)(x.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NF, Nw] }),
    Nz = (0, h.t_)(x.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (Iv.A.clearBackupCodes(), (0, p7.Uo)());
            };
        },
        useObscuredNotice: om.L,
        buildLayout: () => [_h, Nc, N_, NP, NB],
    }),
    NY = (0, h.i4)(x.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: Ab.UserIcon,
        buildLayout: () => [Nz],
    });
var NX = n(176781),
    NH = n(274372),
    NW = n(572164),
    NK = n(614584),
    NZ = n(696016);
let Nq = [NZ.zq, 25, 50, NZ.Y2, NZ.rv],
    NQ = (0, h.sN)(x.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: NZ.zq,
        maxValue: NZ.rv,
        useDefaultValue: () => NZ.Y2,
        getInitialValue: () => NH.Ay.getSettings().clipsQuality.bitratePercent ?? NZ.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Nq,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, NW.E)(),
    });
var N$ = n(226640);
let NJ = (0, h.Hn)(x.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, frameRate: e });
        },
        useOptions: N$.Fz,
        useDisabled: () => !(0, NW.E)(),
    }),
    N0 = (0, h.E2)(x.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, I.bG)([NH.Ay], () => NH.Ay.getHardwareClassification()) === NZ.k9.BELOW_MINIMUM,
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    N1 = (0, h.Hn)(x.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().clipsLength),
        setValue: (e) => NK.h$(e),
        useOptions: N$.Qu,
        useDisabled: () => !(0, NW.E)(),
    }),
    N2 = (0, h.E2)(x.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    N3 = (0, h.Hn)(x.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NH.Ay.getSettings();
            NK.GS({ ...t, resolution: e });
        },
        useOptions: N$.gF,
        useDisabled: () => !(0, NW.E)(),
    }),
    N5 = (0, h.zD)(x.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().remindersEnabled),
        setValue: (e) => NK.Mt(e),
        useDisabled: () => !(0, NW.E)(),
    });
var N4 = n(268378);
let N6 = (0, h.zZ)(x.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(N4.default.TGwzMe),
        buildLayout: () => [N0, N1, NJ, N3, NQ, N2, N5],
    }),
    N8 = (0, h.zD)(x.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NK.YP(e),
    }),
    N7 = (0, h.zD)(x.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NK.Uh(e),
    }),
    N9 = (0, h.zZ)(x.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, I.bG)([lS.default], () => {
                let e = lS.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N8, N7],
    });
var Ce = n(417270),
    Ct = n(847825);
let Cn = (0, h.E2)(x.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, I.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, NW.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, sx.OH)(NZ.Ot) });
                }, [e]);
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, T.jsx)("div", {
                    className: Ct.g,
                    children: (0, T.jsx)(sh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, T.jsxs)(T.Fragment, {
                            children: [
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(N4.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(N4.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(N4.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: Ce.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(N4.default.Kyk1Tp),
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
    Ci = (0, h.E2)(x.X.CLIPS_SCREENSHOT_KEYBIND, {
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
                    className: Ct.g,
                    children: (0, T.jsx)(sh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cs = (0, h.zD)(x.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, NW.E)(),
        setValue: (e) => NK.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cl = (0, h.zY)(x.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cs, Cn, Ci], headerSettingKey: Cs.key }),
    Cr = (0, h.zZ)(x.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(N4.default["dh7g+S"], { learnMoreLink: ey.A.getArticleURL(_.MVz.CLIPS) }),
        buildLayout: () => [Cl],
    }),
    Ca = (0, h.E2)(x.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, I.bG)([NH.Ay], () => NH.Ay.getSettings().storageLocation),
                t = !(0, NW.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await np.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NK.HU(e[0]);
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
                            text: V.intl.string(N4.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Co = (0, h.zZ)(x.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(N4.default["0Q+pdZ"]),
        buildLayout: () => [Ca],
    }),
    Cu = (0, h.t_)(x.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: sW.sw,
        buildLayout: () => [Cr, N6, Co, N9],
    }),
    Cd = (0, h.i4)(x.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: NX.x,
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
var CS = n(835002);
function Cp() {
    let e = (0, Ch.uM)(),
        t = (0, NC.vx)(),
        n = f.useCallback(() => {
            ((0, tX.default)(),
                CE.A.openPrivateChannel({ recipientIds: t }),
                (0, Cx.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, Cx.N)(CS.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CS.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(NO.default.i284fU, {
                    hook: (e, t) => (0, T.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CT = (0, h.zD)(x.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => NK.eQ({ allowVoiceRecording: e }),
});
var Cf = n(157559),
    CI = n(331887);
function C_() {
    let e = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = (0, I.bG)([CI.A], () => CI.A.harvestType),
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
let CN = (0, h.Tf)(x.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = C_();
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
        useDisabled: () => !C_().allowed,
        useLoading: () => (0, I.bG)([CI.A], () => CI.A.requestingHarvest),
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
                            (0, p7.$I)(n)
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
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : Cf.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        Cf.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    CC = (0, h.v_)(x.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(x.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(x.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cy = n(641216);
let Cb = (0, ul.mj)({
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
    return (0, I.bG)([Cj.A], () => Cj.A.isTogglesDisabled());
}
function CL() {
    return !U.vf.useSetting();
}
function CR(e) {
    U.vf.updateSetting(!e);
}
function CD() {
    let e = CO(),
        t = U.H1.useSetting(),
        n = (0, Ch.uM)();
    return e || t || n;
}
let CP = (0, h.zD)(x.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cv(),
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    CG = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CL,
        setValue: CR,
        useDisabled: CD,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function CM() {
    return !U.H1.useSetting();
}
function CU(e) {
    U.H1.updateSetting(!e);
}
function CV() {
    let e = CO(),
        t = (0, Ch.uM)();
    return e || t;
}
let Ck = (0, h.zD)(x.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !Cv(),
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CV,
    }),
    Cw = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: ey.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cv,
        useValue: CM,
        setValue: CU,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CV,
    }),
    CF = (0, h.AK)(x.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = h3(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h5();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, I.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, hQ.n1)(e))) && (0, nh.xl)(),
    }),
    CB = (0, h.gN)(x.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CF] });
var Cz = n(972737);
let CY = (0, h.zD)(x.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: ey.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, I.bG)([CA.A], () => CA.A.hasConsented(_.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cg.U)([_.YAq.USAGE_STATISTICS], []).catch(Cz.i)
                : (0, Cz.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, Cg.U)([], [_.YAq.USAGE_STATISTICS]).catch(Cz.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: Ch.uM,
    }),
    CX = (0, h.zZ)(x.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: Cp,
        initialize: () => {
            CA.A.fetchedConsents || (0, Cg.Q)();
        },
        buildLayout: () => [CC, CY, Cy._, Ck, CP, ...Cm, CT, CN, CB],
    });
var CH = n(15762);
let CW = (0, h.zD)(x.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(CH.default.F3llsQ),
    useSubtitle: () => V.intl.string(CH.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h7.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CK() {
    let e = U.JG.useSetting();
    return (0, I.yK)(
        [gC.Ay, sv.A],
        () => {
            let t = new Set(e);
            return gC.Ay.getFlattenedGuildIds().filter((e) => null != sv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CZ = (0, h.AK)(x.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CK();
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
                    ((e = CK()),
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
                                    icon: (0, T.jsx)(xc, { guild: t[0], size: h$.CD }),
                                    shape: h$.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, T.jsx)(xc, { guild: t[1], size: h$.CD }), shape: h$.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, T.jsx)(xc, { guild: t[0], size: h$.CD }),
                                    shape: h$.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Cq = (0, h.gN)(x.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CZ] }),
    CQ = (0, h.Qx)(x.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, xl.gS)(t, e);
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
    C$ = (0, h.zZ)(x.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: ey.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CQ, CW, Cq],
    });
var CJ = n(952270),
    C0 = n(678538);
let C1 = { [e$.tR.REAL_MONEY_GAMING]: C0.default.pmIitA },
    C2 = Object.keys(C1).map(Number),
    C3 = (0, h.E2)(x.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(C0.default.foQaI1)],
        usePredicate: Cv,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        C2.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(C1[e]),
                            leading: CJ.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, T.jsx)(pq.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of C2) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(C0.default.foQaI1),
                description: V.intl.format(C0.default["z/MfaY"], {
                    helpdeskArticle: ey.A.getArticleURL(_.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(C0.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C5 = (0, h.zZ)(x.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(C0.default.XUj46U),
        usePredicate: Cv,
        buildLayout: () => [Cw, CG, C3],
    });
var C4 = n(714763),
    C6 = n(814278),
    C8 = n(730852),
    C7 = n(913122),
    C9 = n(977997),
    ye = n(144485);
async function yt(e, t) {
    if (e) {
        tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C6.to)(1), t?.());
        } catch (t) {
            let e = new C7.LG(t);
            (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Cf.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function yn(e) {
    let t,
        n,
        i =
            ((t = C9.A.getVoiceStateForUser(d$.default.getId())),
            (n = sy.A.getChannel(t?.channelId)),
            d$.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? ye.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await yt(e, () => {
                      (C8.default.disconnect(), C8.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yt(e);
}
n(603266);
let yi = (0, h.zD)(x.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, C6.Lu)() }),
    useValue: function () {
        return (0, I.bG)([C4.A], () => C4.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        yn(e);
    },
});
var ys = n(787392);
function yl() {
    return (0, I.yK)([ys.A], () => ys.A.getUserIds());
}
var yr = n(803306),
    ya = n(966327),
    yo = n(774156);
function yu(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(),
        s = (0, I.bG)([lS.default], () => lS.default.getUser(t)),
        l = uO.Ay.getFormattedName(s),
        r = f.useCallback(() => {
            (0, C6.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, Tn.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, yr.wz)(t);
        }, [t]),
        (0, T.jsxs)("div", {
            className: yo.uW,
            children: [
                null != s && (0, T.jsx)(ya.A, { className: yo.my, user: s, size: v._3.SIZE_40 }),
                (0, T.jsxs)("div", {
                    className: yo.Qq,
                    children: [
                        (0, T.jsx)(n4.D, {
                            className: yo.Xh,
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
                (0, T.jsx)(n4.D, { onClick: r, className: yo.Qz, children: (0, T.jsx)(sc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yd(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C6.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, C6.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, T.jsxs)("div", {
        className: t,
        children: [
            (0, T.jsxs)("div", {
                className: yo.Qq,
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
                className: yo.Kk,
                onClick: r,
                children: (0, T.jsx)(uk.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yc(e) {
    let { userId: t } = e,
        n = (0, I.yK)([ys.A], () =>
            K()(ys.A.getUserVerifiedKeys(t))
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
            (0, T.jsx)(yu, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, T.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, T.jsx)(yd, { className: yo.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, T.jsx)("div", { className: yo.yF }),
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
let yA = (0, h.E2)(x.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = yl();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yl();
            return (0, T.jsxs)(yg.h, {
                children: [
                    (0, T.jsx)(yg._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, C6.dc)() }),
                    }),
                    e.map((e) => (0, T.jsx)("div", { className: ym.A, children: (0, T.jsx)(yc, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yE = (0, h.zZ)(x.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [yi, yA],
    }),
    yh = (0, h.t_)(x.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [CX, C5, C$, yE],
    }),
    yx = (0, h.i4)(x.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: Cc.m,
        buildLayout: () => [yh],
    });
var yS = n(476713);
let yp = (0, h.AK)(x.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: x.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yT = (0, h.gN)(x.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yp] });
var yf = n(875444);
function yI(e, t) {
    let n = (0, I.bG)([xw.default], () => xw.default.getFetchState()),
        i = (0, I.bG)([xw.default], () =>
            e ? xw.default.getNewestTokensForNonChildrenApplications() : xw.default.getNewestTokens(),
        ),
        s = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yf.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || xb.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xw.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var y_ = n(514479);
function yN() {
    return (0, T.jsxs)("div", {
        className: y_.d,
        children: [
            (0, T.jsx)($.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: y_.x,
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
let yC = (0, h.E2)(x.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yI(!0, !0);
        return e ? (0, T.jsx)(oI.y, {}) : (0, T.jsx)(yN, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
        return e || 0 === t.length;
    },
});
function yy() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yI(!0, !0);
    return !e && t.length > 0;
}
let yb = (0, h.zD)(x.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yy,
    }),
    yv = (0, h.Qx)(x.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yy,
    });
function yj() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yI(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => oD.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yO = n(306537);
function yL(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s } = e;
    return (
        (0, e_.Ay)(() => {
            (0, Cx.N)(s, CS.YX.VIEWED);
        }),
        (0, T.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yR(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, Cx.N)(e, CS.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(e, CS.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yD() {
    let e,
        t = (0, Ch.uM)(),
        n = (0, Iq.fk)(),
        i = (0, IZ.b8)(),
        s = (0, Nv.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IM.n)(IP.Vc)) return e;
    }
}
var yP = n(687123),
    yG = n(444802);
function yM() {
    let e = (0, yG.WX)();
    f.useEffect(() => {
        (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(ey.A.getArticleURL(e), "_blank"), (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.CONFIRM_AGE));
        }, []);
    return (0, T.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, T.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yU() {
    let e = (0, Iq.aX)(yP.t.REACTIVE_CHECK),
        t = (0, IZ.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yM };
    }, [e, t]);
}
var yV = n(323073),
    yk = n(386171),
    yw = n(96607);
let yF = (0, h.zD)(x.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yk.hT,
        useDisabled: function () {
            let e = (0, yw.A)() ?? !0,
                t = (0, yV.sP)(),
                n = (0, IZ.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yV.p5)() && e
                ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yB = (0, h.zD)(x.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yk.tI,
        useDisabled: function () {
            let e = (0, yw.A)() ?? !0,
                t = (0, yV.sP)(),
                n = (0, IZ.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yV.p5)() && e
                ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yz = (0, h.AK)(x.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: x.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yY = (0, h.gN)(x.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yz] });
n(667532);
var yX = n(390248),
    yH = n(632119),
    yW = n(945276),
    yK = n(389737),
    yZ = n(566769);
function yq() {
    let e,
        t = (0, yW.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, ot.cf)([ab.A], () => ab.A.settings.textAndImages?.explicitContentSettings ?? (0, yH.C$)())),
        {
            explicitContentGuilds: (0, yH.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yH.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yH.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yX.hK)() && t.includes(e$.TO.SHOW)
            ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yH.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NO.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(yK.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(NO.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yQ() {
    let e,
        t = (0, yW.A)() ?? !0,
        n = (0, Ch.uM)(),
        i = (0, Ch.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, ot.cf)([ab.A], () => ab.A.settings.textAndImages?.goreContentSettings ?? (0, yG.T4)())),
        {
            goreContentGuilds: (0, yG.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yG.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yG.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yX.hK)() && t.includes(e$.TO.SHOW)
            ? IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yG.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NO.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(yK.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(yZ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(NO.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y$ = n(875162),
    yJ = n(636745);
let y0 = (0, h.E2)(x.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yG.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yq,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yQ,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, T.jsxs)(yg.h, {
            children: [
                (0, T.jsx)(yg._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: ey.A.getArticleURL(e) }),
                }),
                (0, T.jsx)(y$.A, { tabs: t, orientation: "vertical", tabsClassName: yJ.v }),
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
var y1 = n(639555),
    y2 = n(617641),
    y3 = n(546140),
    y5 = n(406935),
    y4 = n(594061);
let y6 = (0, h.zD)(x.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: ey.A.getArticleURL(_.MVz.SAFETY_ALERTS) }),
        useValue: y3.L,
        setValue: function (e) {
            return y4.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y5._t.create({ value: e });
                },
                y4.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y2.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, y1.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yW.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y8 = (0, h.zZ)(x.X.CONTENT_CATEGORY, {
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
                x = Cp(),
                S =
                    ((s = (0, Ch.uM)()),
                    (l = (0, Iq.fk)()),
                    (r = (0, IZ.b8)()),
                    (a = (0, Nv.Z)()),
                    (o = yR(CS.YA.AGE_CONFIRMATION_NOTICE, IG)),
                    (u = yR(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, IL.M0)),
                    (d = f.useCallback(() => {
                        (0, Cx.N)(CS.YA.AGE_CONFIRMATION_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!s && (0, IM.n)(IP.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(IV.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(IV.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(IV.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, Nv.Z)()),
                    (t = (0, yG.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(ey.A.getArticleURL(t), "_blank"),
                            (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CS.YX.VIEWED);
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
                    ((g = (0, Iq.SJ)()),
                    (m = (0, IZ.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, Cx.N)(CS.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CS.YX.VIEWED);
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
                N = yU();
            return x ?? S ?? N ?? _ ?? I;
        },
        buildLayout: () => [y0, y6, yF, yB, yY],
    });
var y7 = n(923457),
    y9 = n(750714);
let be = (0, h.Qx)(x.X.DM_SPAM_SETTING, {
    useTitle: () => V.intl.string(V.t.puwSkY),
    useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
    useValue: function () {
        let e = U.he.useSetting(),
            t = U.cj.useSetting(),
            n = (0, I.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, Iq.yv)(y7.p.SPAM_FILTERS);
        return e !== e$.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? e$.he.FRIENDS_AND_NON_FRIENDS
              : (y9.xY.get(t) ?? e$.he.NON_FRIENDS);
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
var bt = n(189883);
let bn = (0, h.zD)(x.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => V.intl.string(V.t["7x9dyE"]),
    useValue: function () {
        let e = U.FA.useSetting();
        return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        U.FA.updateSetting(e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Ch.uM)();
    },
});
var bi = n(665260);
let bs = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bi.UI(t, _.dzt.MUTUAL_FRIENDS) : bi.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    bl = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bi.UI(t, _.dzt.MUTUAL_GUILDS) : bi.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Ch.uM)();
        },
    }),
    br = (0, h.FW)(x.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [bn, bs, bl],
    });
var ba = n(420825);
let bo = (0, h.zD)(x.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, ba.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    bu = (0, h.zZ)(x.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bt.A.useConfig({ location: "Friend Request Setting" });
            return e ? V.intl.string(V.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: Cp,
        buildLayout: () => [br, bo],
    });
var bd = n(994500),
    bc = n(428678),
    bg = n(49229),
    bm = n(730134),
    bA = n(276573);
function bE(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, T.jsxs)("div", {
        className: bA.wx,
        children: [
            (0, T.jsx)("div", {
                className: bA.zc,
                children: i ? (0, T.jsx)(bc.K, {}) : (0, T.jsx)(CJ.EyeSlashIcon, {}),
            }),
            (0, T.jsxs)("div", {
                className: bA.Qq,
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
function bh(e) {
    let { userId: t, last: n } = e,
        i = (0, I.bG)([bd.A], () => bd.A.isBlocked(t)),
        s = (0, I.bG)([lS.default], () => lS.default.getUser(t)),
        [l, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? bg.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bg.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, T.jsxs)("div", {
              className: ic()(bA.nM, { [bA.fW]: n }),
              children: [
                  (0, T.jsxs)("div", {
                      className: bA.eF,
                      children: [
                          (0, T.jsx)(bm.A, { user: s, size: v._3.SIZE_40 }),
                          (0, T.jsxs)("div", {
                              className: bA.Qq,
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
function bx(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = f.useState(5);
    return (0, T.jsx)(yg.h, {
        children: (0, T.jsxs)("div", {
            className: bA.Nr,
            children: [
                (0, T.jsx)(bE, { listType: n, numberOfUsers: t.length }),
                (0, T.jsx)("div", {
                    className: bA.jS,
                    children: t.slice(0, i).map((e, n) => (0, T.jsx)(bh, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, T.jsx)("div", {
                          className: bA.vM,
                          children: (0, T.jsx)(n4.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bA.Qf,
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
let bS = (0, h.E2)(x.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, I.bG)([bd.A], () => bd.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([bd.A], () => bd.A.getBlockedIDs());
            return (0, T.jsx)(bx, { userIds: e, listType: "blocked" });
        },
    }),
    bp = (0, h.E2)(x.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, I.bG)([bd.A], () => bd.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([bd.A], () => bd.A.getIgnoredIDs());
            return (0, T.jsx)(bx, { userIds: e, listType: "ignored" });
        },
    }),
    bT = (0, h.zZ)(x.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: ey.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bS, bp],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, I.cf)([bd.A], () => ({
                hasBlockedUsers: bd.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bd.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bf = n(22385),
    bI = n(556534),
    b_ = n(111159),
    bN = n(152056),
    bC = n(428031),
    by = n(978433);
let bb = { label: () => V.intl.string(V.t["32u1Dx"]), value: bf.YG };
var bv = n(307863),
    bj = n(954225);
function bO() {
    return (0, bv.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function bL(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bR = (0, h.zD)(x.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bO,
    useSubtitle: function () {
        let e = (0, bI.Tx)(),
            t = (0, bI.q9)(),
            n = (0, bv.e)();
        return e === bf.YG
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
        let e = (0, bI.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, bC.K)();
        return e === bf.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Ch.uM)();
        return (0, bI.Tx)() === bf.YG && e;
    },
    setValue: function (e) {
        let t = bf.xk.getState().selectedGuildId;
        if (t === bf.YG) {
            var n;
            ((n = !e),
                (0, Cz.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: l0.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), bL(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? sv.A.getGuildIds() : []), bL(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bj.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bD = n(116774),
    bP = n(953298);
function bG(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bM() {
    return V.intl.string(V.t["3o2ojh"]);
}
let bU = (0, h.zD)(x.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bM,
        useSubtitle: function () {
            let e = (0, bI.q9)(),
                t = ey.A.getArticleURL(_.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bI.Tx)(),
                t = (0, bC.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, bD.s)(),
                s = (0, Ch.uM)(),
                l = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === bf.YG && s ? !l : e === bf.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bI.Tx)(),
                t = (0, Ch.uM)(),
                n = (0, bC.K)(),
                i = U.$s.useSetting().includes(e),
                s = (0, bD.s)();
            return e === bf.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bf.xk.getState().selectedGuildId;
            if (!e && (0, bP.w)())
                return void IR.A.showAgeVerificationGetStartedModal({ entryPoint: yO.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bf.YG) {
                var n;
                ((n = !e),
                    (0, Cz.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: l0.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), bG(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? sv.A.getGuildIds() : []), bG(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bj.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bV = (0, h.E2)(x.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bO(), bM()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bf.xk)(),
                s = (0, I.bG)([gC.Ay], () => gC.Ay.getFlattenedGuildIds()),
                l = (0, I.bG)([sv.A], () => sv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, bC.K)()),
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
                    bN.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bf.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bf.YG && null != a
                                ? i(a)
                                : "" === e && n !== bf.YG && i(bf.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bb,
                            id: bb.value,
                            label: bb.label(),
                            leading: (0, T.jsx)("div", {
                                className: by.KP,
                                children: (0, T.jsx)(b_.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: by.cl,
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
                                    leading: (0, T.jsx)(gU.Ay, {
                                        className: by.cl,
                                        guild: n,
                                        size: gU.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bf.YG && r > 0;
            return (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(pq.Z, {
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
                            className: by.h_,
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
    bk = (0, h.E2)(x.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bI.Tx)(),
                t = yD();
            return e === bf.YG && null != t;
        },
        Component: function () {
            let e = yD(),
                t = yR(CS.YA.AGE_CONFIRMATION_NOTICE, IG),
                n = yR(CS.YA.CONTENT_AND_SOCIAL_NOTICE, IL.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, T.jsx)(yL, {
                        noticeType: CS.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(IV.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(IV.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, T.jsx)(yL, {
                        noticeType: CS.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(IV.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bw = (0, h.zZ)(x.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = Cp(),
                t = yU();
            if ((0, bI.Tx)() === bf.YG) return e ?? t;
        },
        buildLayout: () => [bV, bR, bU, bk],
    }),
    bF = (0, h.zZ)(x.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [be] }),
    bB = (0, h.zZ)(x.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yj();
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
                let { sortedGames: e } = yj();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, T.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: h$.CD,
                                height: h$.CD,
                            }),
                            shape: h$.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, T.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: h$.YP,
                                    height: h$.YP,
                                }),
                                shape: h$.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            xb.A.fetch();
        },
        buildLayout: () => [yb, yv, yC, yT],
    }),
    bz = (0, h.t_)(x.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [y8, bF, bw, bu, bB, bT],
    }),
    bY = (0, h.i4)(x.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yS.l,
        buildLayout: () => [bz],
    });
var bX = n(782603),
    bH = n(899847),
    bW = n(695515);
let bK = (0, h.Hn)(x.X.MOBILE_NOTIFICATION_DELAY, {
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
    bZ = (0, h.zD)(x.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(x.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    bq = (0, h.Qx)(x.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, I.bG)([aU.A], () => aU.A.getTTSType()),
        setValue: (e) => aB.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: _.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: _.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: _.aVn.NEVER },
            ];
        },
        usePredicate: () => H.$j,
    }),
    bQ = x.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    b$ = (0, h.bd)(bQ, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tI(bQ, {
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
        buildLayout: () => [bK, bZ, bq],
    }),
    bJ = (0, h.zZ)(x.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [b$],
    }),
    b0 = (0, h.zD)(x.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, I.bG)([aU.A], () => !aU.A.getDisableUnreadBadge());
        },
        setValue: (e) => aB.default.setDisableUnreadBadge(!e),
    }),
    b1 = (0, h.zZ)(x.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [b0],
    });
var b2 = n(840559),
    b3 = n(997187);
let b5 = (0, ul.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b4 = n(723923);
let b6 = b4.px.map((e) =>
        (0, h.zD)(`${x.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, I.cf)([b3.A], () => b3.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b2.CA)(e.category, t),
        }),
    ),
    b8 = (0, h.Tf)(x.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, I.cf)([b3.A], () => b3.A.getEmailSettings());
            return b4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b2.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b7 = (0, h.zZ)(x.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b5.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = b3.A.getEmailSettings();
            e || (0, b2.cR)();
        },
        buildLayout: () => [...b6, b8],
    }),
    b9 = (0, h.zD)(x.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, I.bG)([aU.A], () => aU.A.getDesktopType()) !== _.nRU.NEVER;
        },
        setValue: (e) => aB.default.setDesktopType(e ? _.nRU.ALL : _.nRU.NEVER),
    });
var ve = n(832712),
    vt = n(543465),
    vn = n(790782);
let vi = (0, h.zD)(x.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, I.bG)([vt.Ay], () => vt.Ay.useNewNotifications),
    setValue: function (e) {
        (ve.A.setAccountFlag(h7.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hs.w.set("turnedOffNewNotifications", !0),
                td.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sv.A.getGuildsArray().filter(
                        (e) => vt.Ay.resolveGuildUnreadSetting(e) === vn.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, I.bG)(
            [lS.default, vt.Ay],
            () =>
                lS.default.getCurrentUser()?.isStaff() ||
                lS.default.getCurrentUser()?.isStaffPersonal() ||
                vt.Ay.useNewNotifications,
        ),
});
var vs = n(534654);
let vl = (0, h.zD)(x.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, I.bG)([aU.A], () => aU.A.screenDowntimeReminder),
        setValue: (e) => aB.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vs.A)(),
                t = (0, NC.Du)();
            return e && t;
        },
    }),
    vr = (0, h.zD)(x.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vs.A)(),
                t = (0, NC.Du)();
            return e && t;
        },
    }),
    va = (0, h.zD)(x.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    vo = (0, h.zD)(x.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vu = (0, h.zD)(x.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vd = (0, h.zD)(x.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vc = n(815807);
let vg = (0, h.Hn)(x.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vc.n4)(e, U.Zp.getSetting()),
    }),
    vm = (0, h.zD)(x.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vA = (0, ul.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vE = (0, h.zD)(x.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h7.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vA.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vh = (0, h.FW)(x.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vu, va, vo, vm, vE, vd, vg],
    }),
    vx = (0, h.zD)(x.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, I.bG)([aU.A], () => aU.A.taskbarFlash),
        setValue: (e) => aB.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    vS = (0, h.zZ)(x.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [b9, vx, vh, vi, vr, vl],
    });
var vp = n(965957),
    vT = n(312671),
    vf = n(235079);
let vI = (0, h.zD)(x.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aV.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, I.bG)([vT.A], () => vT.A.getSoundpack()),
            t = aV.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aV.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, vp.p)(e ? t : vf.i.CLASSIC));
    },
    usePredicate: aV.A.useIsEligible,
});
var v_ = n(970931);
let vN = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: v_.kB,
        useDisabledMessage: () => ((0, v_.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    vC = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    vy = (0, h.zD)(x.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aX("message3") }),
        useValue: () =>
            (0, I.bG)([aU.A], () => aU.A.getNotifyMessagesInSelectedChannel() && !aU.A.getDisableAllSounds()),
        setValue: (e) => aB.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, I.bG)([aU.A], () => aU.A.getDisableAllSounds()),
    }),
    vb = (0, h.zD)(x.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, I.bG)([aU.A], () => aU.A.getDisableAllSounds()),
        setValue: (e) => aB.default.toggleDisableAllSounds(e),
    }),
    vv = (0, h.D1)(x.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aY();
            };
        },
        buildLayout: () => [aH(vN), vy, aH(vC), vb],
    }),
    vj = (0, h.AK)(x.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: x.X.SOUNDS_CATEGORY,
    }),
    vO = (0, h.gN)(x.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vj] }),
    vL = (0, h.zZ)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [vI, vv, vO],
    }),
    vR = (0, h.t_)(x.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != bW.A.getAgeGroup() || bW.A.isLoading() || (bW.A.canRefetch() && bH.Ay.initialPageLoad());
        },
        buildLayout: () => [vS, vL, b1, b7, bJ],
    }),
    vD = (0, h.i4)(x.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: bX.BellIcon,
        buildLayout: () => [vR],
    }),
    vP = (0, h.WI)(x.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NY, yx, bY, vD, Cd],
    });
var vG = n(387758),
    vM = n(271866),
    vU = n(147964),
    vV = n(868511);
let vk = (0, h.zD)(x.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, I.bG)([vU.A], () => null != vU.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sp.openModal)((e) => (0, T.jsx)(vV.A, { ...e })) : vM.cL();
        },
    }),
    vw = (0, h.zD)(x.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uy.p5,
    }),
    vF = (0, h.zZ)(x.X.DEVELOPER_CATEGORY, { buildLayout: () => [vw, vk] }),
    vB = (0, h.t_)(x.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [vF] }),
    vz = (0, h.i4)(x.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vG.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [vB],
    });
var vY = n(70688),
    vX = n(830215);
let vH = (0, h.i4)(x.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: vY.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    vX.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vW = (0, h.WI)(x.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vz, vH],
    }),
    vK = (0, h.Hr)({ buildLayout: () => [Ib, vP, Ey, oc, p8, hZ, vW], analyticsKey: "user_settings" });
