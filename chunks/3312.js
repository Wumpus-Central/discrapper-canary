n.d(t, { D: () => v7 });
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
    _ = n(17928),
    I = n(652215),
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
    U = n(253932),
    V = n(105292),
    k = n(345016);
let w = new G.nA({ id: "1337", guild_id: "1337", type: I.rbe.GUILD_TEXT, name: "preview" }),
    F = [
        { status: I.clD.IDLE, discriminator: "2" },
        { status: I.clD.DND, discriminator: "3" },
        { status: I.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, L.rh)({ ...(0, R.Ay)({ channelId: w.id, content: e }), state: I.cmJ.SENT, reactions: t });
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
            let e = (0, _.bG)([en.A], () => en.A.speechRate);
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
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.desaturateUserColors),
    setValue: () => (0, ed.YV)(),
});
var eg = n(652525);
let em = (0, h.zD)(x.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => V.intl.string(V.t["+Isihb"]),
        useSubtitle: () => V.intl.string(V.t.nNZ1Tz),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.enableCustomCursor),
        setValue: (e) => (0, ed.ts)(e),
        usePredicate: () => (0, eg.t)("EnableCustomCursorSetting"),
    }),
    eA = (0, h.zD)(x.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => V.intl.string(V.t["S3z+pV"]),
        useSubtitle: () => V.intl.string(V.t["3QuI9+"]),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ed.Gm)(e),
        hasIcon: !0,
    });
var eE = n(554146);
let eh = (0, h.zD)(x.X.HIGH_CONTRAST_MODE, {
    useTitle: () => V.intl.string(V.t.aZlePv),
    useSubtitle: () => V.intl.string(V.t["v2qF8+"]),
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isHighContrastModeEnabled),
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
            return (0, _.bG)([eS.Ay], () => eS.Ay.hdrDynamicRange);
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
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.officialMessageStyle),
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
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.roleStyle),
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
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.roleStyle),
    setValue: (e) => (0, ed.IX)(e),
});
let e_ = (0, h.sN)(x.X.SATURATION, {
    useTitle: () => V.intl.string(V.t["5PWWCY"]),
    useSubtitle: () => V.intl.string(V.t.xf5S6P),
    markers: I.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => O.Ay.saturation,
    asValueChanges: (e) => (0, ed.HU)(e),
});
var eI = n(964486),
    eN = n(839214),
    eC = n(502229),
    ey = n(975571);
let eb = (0, eN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ev = (0, h.zD)(x.X.SYNC_FORCED_COLORS, {
        useTitle: () => V.intl.string(V.t.cguiec),
        useSubtitle: () => V.intl.format(V.t.GwEVE2, { learnMoreLink: ey.A.getArticleURL(I.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, _.bG)([O.Ay], () => O.Ay.syncForcedColors);
            return (
                (0, eI.Ay)(() => {
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
        buildLayout: () => [e_, ec, eh, em, ev, ep, ef, eT, eA, eu],
    });
var eO = n(397438),
    eL = n(355097),
    eR = n(141531);
function eD(e) {
    return (0, _.bG)([eO.A], () =>
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
    return (0, _.bG)([eO.A], () => eO.A.getAppliedOverrideReasonKey(e) === eL._A.GAME_MODE);
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
        useSubtitle: () => V.intl.format(V.t.XqvxJc, { helpdeskArticle: ey.A.getArticleURL(I.MVz.REDUCED_MOTION) }),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.prefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "reduce" : "no-preference"),
    }),
    ew = (0, h.zD)(x.X.SYNC_REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.oL55A6),
        useValue: () => (0, _.bG)([O.Ay], () => "auto" === O.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "auto" : O.Ay.systemPrefersReducedMotion),
    });
function eF(e) {
    return V.intl.formatToPlainString(V.t.pyvjRp, { seconds: e });
}
let eB = (0, h.sN)(x.X.TOAST_DURATION, {
        useTitle: () => V.intl.string(V.t["3oxlia"]),
        useSubtitle: () => V.intl.string(V.t.CZ3jxp),
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
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ed.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, h.sN)(x.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => V.intl.string(V.t.rT3Pq5),
        useSubtitle: () => V.intl.string(V.t.LXUhen),
        markers: I.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: I.hH7.FONT_SIZES["0"],
        maxValue: I.hH7.FONT_SIZES[I.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => I.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => O.Ay.fontSize,
        onValueRender: eK,
        onMarkerRender: eK,
        asValueChanges: (e) => (0, ed.XS)(e),
    }),
    eq = (0, h.zD)(x.X.UNDERLINE_LINKS, {
        useTitle: () => V.intl.string(V.t.OLZFB8),
        useSubtitle: () => V.intl.string(V.t.DIX3ke),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.alwaysShowLinkDecorations),
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
    useExternalValue: () => (0, _.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
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
        markers: I.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: I.hH7.ZOOM_SCALES["0"],
        maxValue: I.hH7.ZOOM_SCALES[I.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => I.hH7.ZOOM_DEFAULT,
        getInitialValue: () => O.Ay.zoom,
        useExternalValue: () => (0, _.bG)([O.Ay], () => O.Ay.zoom),
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
                    i = (0, _.bG)([O.Ay], () => O.Ay.messageGroupSpacing);
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
        usePredicate: () => (0, _.bG)([tc.A], () => tc.A.hasLibraryApplication()),
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
function t_(e, t) {
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
var tI = n(951260);
let tN = (0, h.zD)(x.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tC = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    ty = (0, h.zD)(x.X.ENABLE_SEND_BUTTON, tC),
    tb = (0, h.zD)(x.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tC,
        usePredicate: () => !(0, tI.n)("EnableSendButtonOutsideExperiment"),
    }),
    tv = (0, h.zD)(x.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => V.intl.string(V.t.WggFoO),
        useSubtitle: () => V.intl.string(V.t.XpErGj),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ed.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tj = (0, h.zD)(x.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => V.intl.string(V.t.YErWkD),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ed.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tO = (0, h.zD)(x.X.ENABLE_GIF_BUTTON, {
        useTitle: () => V.intl.string(V.t.k7oNEz),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ed.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tL = (0, h.zD)(x.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tR = (0, h.Qx)(x.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => V.intl.string(V.t.AxRAWt),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat),
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
        useCollapsedSubtitle: () => t_(x.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tI.n)("ChatBarAdvancedAccordion"),
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
            (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                U.SI.updateSetting(e));
        },
    });
var tk = n(793574);
let tw = (0, h.zD)(x.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t["d+It2U"]),
        useValue: U.ML.useSetting,
        setValue: (e) => {
            (td.default.track(I.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
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
            i = (0, _.bG)([tB.A], () => tB.A.isUpsellPreview);
        return (
            (0, Z.Ay)(() => {
                i &&
                    (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t$.e.APP_ICON_UPSELL,
                        location_stack: [tk.A.USER_SETTINGS],
                    }),
                    (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tk.A.USER_SETTINGS], () =>
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
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t2 = (0, h.zZ)(x.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RPh2ou),
        useSubtitle: () => V.intl.string(V.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([tB.A], () => tB.A.isUpsellPreview);
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
let t9 = ey.A.getArticleURL(I.MVz.FAVORITES_GUILD),
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
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: V.intl.string(V.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: V.intl.string(V.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: V.intl.string(V.t.K5VTBE) },
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
            (t ? ng.A.cleanUpPrivateChannelSearchState() : ng.A.cleanUpSearchState({ type: I.I4_.DMS }),
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
            return (0, _.bG)([tu.A], () => {
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
            return (0, _.bG)([tu.A], () => {
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
    n_ = n(999834);
let nI = [],
    nN = (0, h.Hn)(x.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, n_.b_)(),
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
            return (0, _.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? nI);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nC = (0, h.zD)(x.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => V.intl.string(V.t.LSBUGR),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    ny = (0, h.zD)(x.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nb = (0, h.zD)(x.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => V.intl.string(V.t.OrqYDP),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nv = (0, h.zD)(x.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sUAbLd),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nj = (0, h.zD)(x.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t["iA81+a"]),
        useSubtitle: () => V.intl.string(V.t.P4vj0h),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
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
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ed.M1)(),
    });
var nk = n(817281),
    nw = n(284016),
    nF = n(363195);
let nB = (0, h.zD)(x.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => V.intl.string(V.t["/B+kEV"]),
    useSearchTerms: () => [V.intl.string(V.t.Ksh3ik)],
    useValue: function () {
        return (0, _.bG)([nw.A], () => !1 !== nw.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, _.bG)([nF.A], () => nF.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nF.A.theme,
            i = nR.A.gradientPreset?.id ?? null,
            s = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
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
            return (0, _.bG)([O.Ay], () => O.Ay.useForcedColors)
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
            let e = (0, _.bG)([nR.A, O.Ay], () => O.Ay.useForcedColors || nR.A.isPreview),
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
                                  (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      U.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, _.bG)([tu.A], () => tu.A.enabled, [])),
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
        n = (0, _.bG)([iu.A], () => iu.A.getAllUnlockedAchievements()),
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
    i_ = n(31408),
    iI = n(368588);
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
    return (0, T.jsx)($.E, { className: iI.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iR(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
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
                        className: iI.KF,
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
                        className: iI.KF,
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
                        location: i_.k.CHAT_INPUT,
                        title: V.intl.string(V.t.elTtyz),
                        description: V.intl.string(V.t.HtKfMi),
                    },
                    {
                        location: i_.k.REACTION,
                        title: V.intl.string(V.t.Ik4VIa),
                        description: V.intl.string(V.t.y4rqK0),
                    },
                    {
                        location: i_.k.MEMBER_USER,
                        title: V.intl.string(V.t.ZXBlAn),
                        description: V.intl.string(V.t["m9RD+c"]),
                    },
                    {
                        location: i_.k.CALL_TILE,
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
                        className: iI.KF,
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
        r = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
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
                        className: iI.KF,
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
                        location: i_.uD.CHAT_INPUT,
                        title: V.intl.string(V.t.vUcvPP),
                        description: V.intl.string(V.t.y00OrF),
                    },
                    {
                        location: i_.uD.VOICE_USER,
                        title: V.intl.string(V.t.TcRO54),
                        description: V.intl.string(V.t.YJCxVY),
                    },
                    {
                        location: i_.uD.MENTION,
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
                    className: iI.hw,
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
        className: iI.Tq,
        children: [
            (0, T.jsx)("div", {
                className: iI.w1,
                children: (0, T.jsx)(n6.TrophyIcon, { size: "md", color: n1.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, T.jsxs)("div", {
                className: iI.qL,
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
            (0, T.jsx)(n8._, { size: "custom", color: "currentColor", width: 16, className: iI.nT }),
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
        i = (0, _.cf)([n0.A], () => n0.A.getState()),
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
                r = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
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
                            className: iI.l3,
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
                            className: a ? iI.Sr : iI.IP,
                            children: (0, T.jsx)(n7.a, {
                                className: iI.gT,
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
        usePredicate: () => (0, _.bG)([n0.A], () => n0.A.settingsVisible),
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
    let e = (0, _.bG)([i5.A], () => i5.A.getStreamerActiveStreamMetadata()),
        t = (0, _.bG)(
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
    let t = (0, _.bG)([i9.Ay], () => i9.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i8();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, se.NP)(),
        l = s && null != n && t === I.TBI.PUSH_TO_TALK;
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
                                  helpCenterLink: ey.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
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
    s_ = n(978263);
let sI = [];
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
                [a, o] = f.useState(sI),
                u = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sI) : o(e);
                }, []);
            f.useEffect(
                () =>
                    sf.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = f.useState(() => new s_.A(u, n, void 0, i));
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
            (n = (0, _.yK)(
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
        } = (0, _.cf)([sy.A, sv.A], () => {
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
        n = (0, _.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
        i = (0, _.bG)([sa.Ay], () => sa.Ay.getWaylandPortalShortcutState(t.id));
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
                        keyboardNavArticle: ey.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function sY(e) {
    let { keybind: t } = e;
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, T.jsx)(sM, { keybind: t, className: sF._M }) : null;
}
let sX = f.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = f.useCallback((e) => iZ.A.setKeybind({ ...t, action: e }), [t]),
        l = f.useCallback(
            (e) => {
                if (
                    ((0, sr.uL)(t.id, t.shortcut, e, sa.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === I.hCu.PUSH_TO_TALK)
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
    let e = (0, _.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
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
            } = ((e = (0, _.bG)([sa.Ay], () => sa.Ay.getState())),
            (t = (0, _.bG)([i9.Ay], () => (0, sK.A)(i9.Ay))),
            (n = (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.VIDEO))),
            (i = (0, _.bG)([sq.A], () => sq.A.isSupported)),
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
                            { id: "unassigned", value: I.hCu.UNASSIGNED },
                            { id: "push-to-talk", value: I.hCu.PUSH_TO_TALK },
                            { id: "push-to-talk-priority", value: I.hCu.PUSH_TO_TALK_PRIORITY },
                            { id: "push-to-mute", value: I.hCu.PUSH_TO_MUTE },
                            { id: "vad-priority", value: I.hCu.VAD_PRIORITY },
                            { id: "toggle-mute", value: I.hCu.TOGGLE_MUTE },
                            { id: "toggle-deafen", value: I.hCu.TOGGLE_DEAFEN },
                            { id: "toggle-voice-mode", value: I.hCu.TOGGLE_VOICE_MODE },
                            { id: "toggle-streamer-mode", value: I.hCu.TOGGLE_STREAMER_MODE },
                            { id: "toggle-voice-channel-chat", value: I.hCu.TOGGLE_VOICE_CHANNEL_CHAT },
                        ];
                    return (
                        i && a.push({ id: "toggle-camera", value: I.hCu.TOGGLE_CAMERA }),
                        t &&
                            (a.push({ id: "toggle-overlay-input-lock", value: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            })),
                        n &&
                            ((0, e8.isWindows)() || i9.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: I.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e8.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: I.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: I.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: I.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: I.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            s &&
                                a.push(
                                    { id: "soundboard", value: I.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: I.hCu.SOUNDBOARD_HOLD },
                                ),
                            l &&
                                (a.push({ id: "save-clip", value: I.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: I.hCu.SAVE_SCREENSHOT }))),
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
                            [I.hCu.UNASSIGNED]: V.intl.string(V.t.rvlNLv),
                            [I.hCu.PUSH_TO_MUTE]: V.intl.string(V.t.xtESim),
                            [I.hCu.PUSH_TO_TALK]: V.intl.string(V.t.wTcBSy),
                            [I.hCu.PUSH_TO_TALK_PRIORITY]: V.intl.string(V.t.FhHvWH),
                            [I.hCu.TOGGLE_MUTE]: V.intl.string(V.t.X2fbUm),
                            [I.hCu.TOGGLE_DEAFEN]: V.intl.string(V.t.MjREZV),
                            [I.hCu.TOGGLE_VOICE_MODE]: V.intl.string(V.t.snm5YW),
                            [I.hCu.TOGGLE_STREAMER_MODE]: V.intl.string(V.t.YszLLx),
                            [I.hCu.VAD_PRIORITY]: V.intl.string(V.t.rSe8IZ),
                            [I.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: V.intl.string(V.t.desfB4),
                        };
                    return (
                        i && (r[I.hCu.TOGGLE_CAMERA] = V.intl.string(V.t.v1JBtL)),
                        t && (r[I.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = V.intl.string(V.t.IoP5vc)),
                        n && (0, e8.isWindows)() && (r[I.hCu.TOGGLE_GO_LIVE_STREAMING] = V.intl.string(V.t.s4C238)),
                        (0, e8.isDesktop)() &&
                            ((r[I.hCu.NAVIGATE_BACK] = V.intl.string(V.t.nKDlEt)),
                            (r[I.hCu.NAVIGATE_FORWARD] = V.intl.string(V.t.DK0FFk)),
                            (r[I.hCu.SOUNDBOARD] = (0, e8.isWindows)()
                                ? V.intl.string(V.t["5wJefL"])
                                : V.intl.string(V.t.gzjsSP)),
                            (r[I.hCu.SOUNDBOARD_HOLD] = (0, e8.isWindows)()
                                ? V.intl.string(V.t.RRkZc9)
                                : V.intl.string(V.t.laNlTl)),
                            s &&
                                ((r[I.hCu.SAVE_CLIP] = V.intl.string(V.t.z3Wbam)),
                                l && (r[I.hCu.SAVE_SCREENSHOT] = V.intl.string(V.t.m0zd57)))),
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
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
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
        useValue: () => (0, _.bG)([i$.A], () => i$.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i$.A.runningGameId }),
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
                s = (0, _.bG)([i4.Ay], () => i4.Ay.getSystemServiceStatus("input-service")),
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
                                    helpCenterLink: ey.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
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
    usePredicate: () => (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lx();
    },
});
var lT = n(114129),
    lf = n(442325),
    l_ = n(858760);
let lI = (0, h.zD)(x.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
    usePredicate: () => l_.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nh.xl)(),
    useValue: () => (0, _.bG)([lf.A], () => lf.A.isUserOptedIn()),
    setValue: lT.lj,
});
var lN = n(731699);
let lC = {};
var ly = n(735729),
    lb = n(146849);
let lv = (0, h.zD)(x.X.NATIVE_MARKDOWN, {
        useTitle: () => V.intl.string(V.t["5CIvT4"]),
        usePredicate: () => lb.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, ly.A)(lb.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !lN.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lC;
                tl.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(lb.XQ, { enabled: e }),
    }),
    lj = (0, h.zZ)(x.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [lp, lh, lI, lv],
    }),
    lO = (0, h.zZ)(x.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [ls, lr, ll, le],
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        initialize: () => {
            li();
        },
    }),
    lL = (0, h.zZ)(x.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
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
    lR = (0, h.zZ)(x.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [s6],
    }),
    lD = (0, h.zZ)(x.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        buildLayout: () => [lu],
    }),
    lP = (0, h.zZ)(x.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eR.default.QG0axY),
        usePredicate: () =>
            (0, _.bG)(
                [i$.A, iq.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i$.A.hasDetectedGame &&
                    (0, iQ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s8],
    }),
    lG = (0, h.t_)(x.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [lO, lL, lR, lD, lP, lj],
    }),
    lM = (0, h.i4)(x.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iW.F,
        buildLayout: () => [lG],
    });
var lU = n(831544),
    lV = n(922795),
    lk = n(212245),
    lw = n(329551),
    lF = n(285918),
    lB = n(312987),
    lz = n(952572),
    lY = n(382003);
let lX = (0, h.E2)(x.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: lz.A,
        Component: function () {
            let e = (0, lk.p)(),
                t = f.useRef(!1),
                n = (0, _.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                [i, s] = f.useState((0, lw.i)(lS.default.getCurrentUser())),
                l = f.useRef(i);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, lF._C)(l.current);
                    },
                    [],
                ),
                (0, T.jsx)(lY.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lB.gB)(n, { location: e.location }).catch(I.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lH = (0, h.zD)(x.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => V.intl.string(V.t["3Ppr1h"]),
        useSubtitle: () => V.intl.string(V.t.WNbX4O),
        useValue: U.bm.useSetting,
        setValue: (e) => {
            (U.bm.updateSetting(e), td.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lW = n(625841),
    lK = n(74848),
    lZ = n(204050);
let lq = (0, eN.D)(() => ({ previewEnabled: !1 })),
    lQ = (0, h.E2)(x.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, _.bG)([i9.Ay], () => i9.Ay.isVideoAvailable()),
                { id: t } = (0, lK.x5)(sw.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eY.Ay)();
            return (0, T.jsx)(lW.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: sw.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lZ.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lq.setState({ previewEnabled: !1 }),
                                  window.open((0, lZ.i)(t)),
                                  td.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var l$ = n(745317),
    lJ = n(9219);
let l0 = (0, h.E2)(x.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = i9.Ay.getCameraComponent(),
                t = (0, _.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                n = lq.useField("previewEnabled"),
                i = (0, _.bG)([i9.Ay], () => i9.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lq.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, T.jsx)("div", {
                      className: lJ.T9,
                      children: (0, T.jsxs)("div", {
                          className: lJ.Xi,
                          children: [
                              (0, T.jsxs)("div", {
                                  className: lJ.UI,
                                  children: [
                                      (0, T.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, T.jsx)(l$.kE, {}),
                                  ],
                              }),
                              (0, T.jsx)(l$.eK, {}),
                          ],
                      }),
                  })
                : (0, T.jsx)("div", {
                      className: lJ.T9,
                      children: (0, T.jsx)(sg.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, T.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => lq.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    l1 = (0, h.zZ)(x.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.VIDEO)),
        buildLayout: () => [l0, lH, lQ, lX],
    }),
    l2 = (0, h.zD)(x.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nh.j9)();
        },
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getOpenH264Enabled());
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
    l3 = (0, h.zD)(x.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAecDump());
        },
        setValue: sE.default.setAecDump,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.isAecDumpSupported());
        },
    });
var l5 = n(139033),
    l4 = n(862482),
    l6 = n(640238),
    l8 = n(825484),
    l7 = n(108088),
    l9 = n(487329),
    re = n(353835);
let rt = (0, eN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rn() {
    let e = await np.A.fileManager.getLogPath();
    np.A.fileManager.showItemInFolder(e);
}
function ri(e) {
    (0, n2.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => sE.default.setDebugLogging(e),
    });
}
async function rs(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i9.Ay.getMediaEngine().writeAudioDebugState(),
            await re.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l7.a)(I.Umv.RTC),
            (e = V.intl.string(V.t["fKBB8+"])),
            (t = V.intl.string(V.t.BvyxE7)),
            (0, l5.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = V.intl.string(V.t.QZg0J7)),
            (t = i ?? V.intl.string(V.t.VzHcSm)),
            (n = (0, l9.B1)(l9.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
            (0, sp.openModal)((n) =>
                (0, T.jsx)(l6.a, {
                    header: e,
                    confirmButtonColor: l4.$n.Colors.BRAND,
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
async function rl() {
    await rs({
        onUploadStart: () => rt.setState({ isUploading: !0 }),
        onUploadFinish: () => rt.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rr = (0, h.E2)(x.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.DEBUG_LOGGING));
        return nh.Av && e && null != np.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.getDebugLogging()),
            t = rt.useField("isUploading"),
            n = rt.useField("isDisabled"),
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
                            onChange: ri,
                        }),
                        (0, T.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, T.jsxs)(l8.e, {
                                children: [
                                    (0, T.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: rl,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, T.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.nuPtYi),
                                        onClick: rn,
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
var ra = n(233545),
    ro = n(58663),
    ru = n(412780);
function rd() {
    return (0, _.bG)([lS.default, i9.Ay], () => {
        let e = lS.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s7.Ay.releaseChannel || "development" === s7.Ay.releaseChannel,
            i = i9.Ay.supports(sw.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rc = (0, h.zD)(x.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, _.bG)([ru.Ay], () => ru.Ay.shouldRecordNextConnection());
        },
        setValue: ro.A,
        usePredicate: rd,
    }),
    rg = (0, h.Tf)(x.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: ra.YW,
        usePredicate: rd,
    });
var rm = n(926919),
    rA = n(111162),
    rE = n(855302);
let rh = (0, h.zD)(x.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => V.intl.string(V.t["0CEP6e"]),
        useSubtitle: () => V.intl.string(V.t["kBXuW+"]),
        useValue: function () {
            return (0, _.bG)([rA.default], () => rA.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rA.default.isStreamInfoOverlayEnabled;
            ((0, rE.A)("stream_info_overlay_enabled", e, t), (0, rm.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return U.Q_.useSetting();
        },
    }),
    rx = (0, h.bd)(x.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rh, l3, rc, rg, rr],
    });
function rS(e, t, n) {
    (0, n2.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rp = (0, h.Tf)(x.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rS(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), sE.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rT = (0, h.zZ)(x.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [l2, rx, rp],
    });
var rf = n(736056),
    r_ = n(360729),
    rI = n(446243),
    rN = n(558076),
    rC = n(270103);
let ry = (0, h.zD)(x.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(rC.default.qYzpsI),
        useSubtitle: () => V.intl.string(rC.default["+vMoL1"]),
        useValue: () => (0, _.bG)([rN.A], () => rN.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rI.Ft)(e),
    }),
    rb = (0, h.zZ)(x.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(rC.default.wRLmM0),
        usePredicate: function () {
            let e = (0, _.yK)([sv.A], () => sv.A.getGuildIds()),
                { loaded: t, override: n } = (0, _.cf)([rf.A], () => ({
                    loaded: rf.A.getLoadedGuildExperiment(r_.vJ),
                    override: rf.A.getExperimentOverrideDescriptor(r_.vJ),
                }));
            return (0, f.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, r_.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [ry],
    });
var rv = n(347481),
    rj = n(852712),
    rO = n(179172),
    rL = n(868162);
let rR = (0, h.zD)(x.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => V.intl.string(V.t.gF8HJo),
        useSubtitle: () => V.intl.string(V.t.cfrfyZ),
        useValue: function () {
            return (0, _.bG)([rL.A], () => !0 !== rL.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rO.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rD = (0, h.zD)(x.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sE.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, _.bG)([i9.Ay, rv.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return rv.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.isAutomaticGainControlSupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rP = (0, h.sN)(x.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
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
    rG = (0, h.zD)(x.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, _.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sE.default.setAttenuation(i9.Ay.getAttenuation(), e, i9.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rM = (0, h.zD)(x.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, _.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sE.default.setAttenuation(i9.Ay.getAttenuation(), i9.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rU = (0, h.FW)(x.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.ATTENUATION)),
        buildLayout: () => [rP, rG, rM],
    }),
    rV = (0, h.zD)(x.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sE.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.showBypassSystemInputProcessing() && i9.Ay.isInputProfileCustom());
        },
    }),
    rk = (0, h.zD)(x.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, _.bG)([eS.Ay], () => !eS.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rE.A)("switch_channel_warning_enabled", e, !eS.Ay.disableVoiceChannelChangeAlert),
                nk.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rw = (0, h.zD)(x.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.BbESsg),
        useSubtitle: () => V.intl.string(V.t.LoOB1F),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => {
                let { vadUseKrisp: e } = i9.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i9.Ay.getMode();
            sE.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, _.bG)(
                [i9.Ay],
                () => i9.Ay.getMode() !== I.TBI.VOICE_ACTIVITY || !i9.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.isAdvancedVoiceActivitySupported() && i9.Ay.isInputProfileCustom());
        },
    }),
    rF = (0, h.Hn)(x.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rS(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => sE.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, _.cf)([i9.Ay], () => ({
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
            return (0, _.bG)([i9.Ay], () => i9.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rB = (0, h.zD)(x.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getQoS());
        },
        setValue: function (e) {
            sE.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.QOS));
        },
    }),
    rz = (0, h.zD)(x.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sE.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rY = (0, h.bd)(x.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            t_(x.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rD, rw, rV, rR, rz, rk, rU, rF, rB],
    }),
    rX = (0, h.zD)(x.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sE.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, _.bG)([i9.Ay, rv.A], () => {
                let e = i9.Ay.getInputDeviceId();
                return rv.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom());
        },
    });
var rH = n(205693),
    rW = n(451988),
    rK = n(475883),
    rZ = n(303707);
let rq = (0, tK.Ld)();
function rQ(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, T.jsx)("div", {
        role: "meter",
        className: ic()(rK.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, T.jsx)("div", { className: ic()(rK.Jx, rK.NU, { [rK.zY]: t && !r, [rK.r9]: r }) }),
    });
}
function r$(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, _.cf)([i9.Ay], () => ({
            threshold: i9.Ay.getModeOptions().threshold,
            autoThreshold: i9.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
    return (0, T.jsx)("section", {
        className: ic()(rK.Mo, rK.jW),
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
            "aria-labelledby": rq,
            disabled: l,
            children: (0, T.jsxs)("div", {
                className: ic()(rK.NU, rK.TL, rK.Jx, rZ.bar),
                children: [
                    (0, T.jsx)("div", { className: ic()(rK.GS, rK.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, T.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rJ = (0, h.E2)(x.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, _.cf)([i9.Ay], () => ({
                autoThreshold: i9.Ay.getModeOptions().autoThreshold,
                disabled: i9.Ay.getMode() !== sw.TB.VOICE_ACTIVITY,
            })),
            n = f.useCallback((e) => {
                let t = i9.Ay.getMode(),
                    { threshold: n } = i9.Ay.getModeOptions();
                sE.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, _.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = f.useState(-100),
                    [n, i] = f.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sw.ME.VOICE) === sw.ME.VOICE));
                }
                return (
                    f.useEffect(() => {
                        let e = new rW.Ep();
                        return (
                            e.start(1e3, () => {
                                (i9.Ay.getMediaEngine().on(rH.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i9.Ay.getMediaEngine().removeListener(rH.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, _.bG)([i9.Ay], () => i9.Ay.isEnabled()),
            a = f.useMemo(
                () =>
                    !r &&
                    (0, T.jsx)("div", {
                        className: rK.B4,
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
                                  ? (0, T.jsx)(rQ, {
                                        isSpeaking: l,
                                        className: rK.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, T.jsx)(r$, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, T.jsx)(rQ, {
                                        isSpeaking: l,
                                        className: rK.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, T.jsx)(r$, {
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
var r0 = n(366010);
let r1 = n(993830),
    r2 = n(413142),
    r3 = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r5() {
    let e = (0, _.bG)([nF.A], () => (0, r0.q)(nF.A.theme));
    return (0, T.jsx)("img", { src: e ? r1 : r2, width: 48, height: 32, alt: "" });
}
let r4 = (0, h.E2)(x.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom() && i9.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                (sE.default.setNoiseCancellation("KRISP" === e, r3),
                    sE.default.setNoiseSuppression("STANDARD" === e, r3));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, _.cf)([i9.Ay], () => ({
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
                ? V.intl.format(V.t["1q5aTp"], { helpArticle: ey.A.getArticleURL(I.MVz.NOISE_SUPPRESSION) })
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
                s && (0, T.jsx)(r5, {}),
            ],
        });
    },
});
var r6 = n(934729),
    r8 = n(621380);
let r7 = !nh.Av;
function r9() {
    return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === sw.TB.PUSH_TO_TALK);
}
let ae = (0, h.zD)(x.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nh.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
        return f.useMemo(() => {
            if (!nh.Av && e === sw.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r6._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() !== r8.m.STUDIO);
    },
    useValue: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === sw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sw.TB.PUSH_TO_TALK : sw.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sw.TB.PUSH_TO_TALK &&
                r7 &&
                (0, sp.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, T.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r6._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            sE.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var at = n(484599);
function an(e) {
    let { shortcut: t } = e,
        n = (0, _.bG)([sa.Ay], () => sa.Ay.isWaylandPortalActive()),
        i = (0, _.bG)([sa.Ay], () => {
            let e = sa.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
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
let ai = (0, h.E2)(x.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: r9,
        Component: function () {
            let e = (0, _.bG)([i9.Ay], () => {
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
                    className: at.e,
                    children: [
                        (0, T.jsx)(sh.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = sa.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, sr.uL)(t.id, t.shortcut, e, sa.Ay.getWaylandPortalShortcutState(t.id)),
                                    sE.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, T.jsx)(an, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    as = (0, h.sN)(x.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            sE.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: I.IjB,
        getInitialValue: function () {
            let { delay: e } = i9.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r9,
    });
var al = n(833473),
    ar = n(844981),
    aa = n(943679);
function ao() {
    return (0, ar.Ay)("VoiceSettings");
}
let au = (0, h.zD)(x.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(aa.default.LGDPhA),
        useSubtitle: function () {
            let e = ao();
            if ((0, ar.Xt)(e))
                return e === ar.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(aa.default.rOXfEw)
                    : V.intl.string(aa.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, _.bG)([al.A], () => al.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sE.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ao() !== ar.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, ar.Xt)(ao());
        },
    }),
    ad = (0, h.Qx)(x.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rj._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() ?? r8.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rj.d)({ location: "InputProfileCategory" });
            return [
                { value: r8.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r8.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r8.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ac = (0, h.zZ)(x.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, _.bG)([rv.A, i9.Ay], () => {
                let e = i9.Ay.getInputDeviceId();
                return (
                    (rv.A.hasEchoCancellation(e) || rv.A.hasNoiseSuppression(e) || rv.A.hasAutomaticGainControl(e)) &&
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
        buildLayout: () => [ad, rJ, r4, rX, au, ae, ai, as, rY],
    });
var ag = n(403581),
    am = n(983851),
    aA = n(687021),
    aE = n(128450),
    ah = n(796774),
    ax = n(209932),
    aS = n(813564),
    ap = n(984813),
    aT = n(265872),
    af = n(305866),
    a_ = n(22231),
    aI = n(342073),
    aN = n(24482),
    aC = n(792348),
    ay = n(674168),
    ab = n(340368),
    av = n(754388),
    aj = n(805945),
    aO = n(647451);
function aL(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        s = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = aN.Ay.canUseCustomCallSounds(s),
        r = f.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, T.jsx)(aT.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, T.jsx)(af.l, {
                children: (0, T.jsx)(av.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, T.jsx)(ay.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, T.jsx)(aj.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, T.jsx)(a_.PencilIcon, { size: "md", color: "currentColor", className: aO.Wo }),
            }),
    });
}
function aR(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aC.A)(t, null),
        i = (0, aS.wH)(),
        s = (0, ab._)("SoundPreviewButton") ? aI.L : am.H,
        l =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, T.jsx)(aj.dT, {
        onClick: n,
        text: l,
        children: (0, T.jsx)(s, { size: "md", color: "currentColor", className: aO.wg }),
    });
}
function aD(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l),
        o = (0, ab._)("SoundboardCustomCallSoundSettingsPreview") ? aI.L : am.H;
    return (0, T.jsxs)("div", {
        className: aO.D6,
        children: [
            (0, T.jsxs)("div", {
                className: aO.kL,
                children: [
                    a && (0, T.jsx)(tG.A, { emojiId: l, emojiName: r, className: aO.Zg }),
                    (0, T.jsx)($.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aO.dj,
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
                        ? (0, T.jsx)(aR, { sound: t })
                        : (0, T.jsx)(o, { size: "md", color: "currentColor", className: aO.Gk }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: aO.kL,
                children: [
                    (0, T.jsx)(aL, { onSelect: i }),
                    s &&
                        !n &&
                        (0, T.jsx)(aj.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, T.jsx)(sc.TrashIcon, {
                                size: "md",
                                color: n1.A.unsafe_rawColors.RED_400.css,
                                className: aO.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aP = n(617617);
n(980504);
var aG = n(806050);
function aM(e) {
    return (0, _.bG)([ax.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ax.A.getSound("0" === t ? "0" : t, n);
    });
}
function aU(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([aP.A], () => aP.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aM(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, T.jsxs)("div", {
        className: aG.Io,
        children: [
            r
                ? (0, T.jsx)(tG.A, { emojiId: s, emojiName: l, className: aG.nW })
                : (0, T.jsx)(am.H, { size: "md", color: "currentColor", className: aG.nW }),
            (0, T.jsx)($.E, { className: aG.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aV = (0, h.E2)(x.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eY.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, ap.mz)(t),
            s = aM(i),
            l = i?.type === ap.PP.GLOBAL,
            r = (0, _.bG)([ax.A], () => ax.A.hasFetchedAllSounds()) && null != i && null == s;
        (f.useEffect(() => {
            r && (0, aS.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, ah.E7)();
            }, []));
        let a = f.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, T.jsx)(aU, { guildId: e.value }) : null;
        }, []);
        return (0, T.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: ey.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, T.jsx)(aA.A, {
                    guildId: t,
                    className: aG.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, T.jsxs)(aE.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () => (0, T.jsx)(ag.t, { size: "md", color: "currentColor", className: aG.ax }),
                    }),
                    children: [
                        (0, T.jsx)(aD, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, aS.Dv)(t, e) : (0, aS.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, T.jsx)("div", {
                                className: aG.lm,
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
var ak = n(824744);
let aw = (0, h.sN)(x.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: ey.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, ak.w)(e);
        (0, ah.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aS.wH)();
        return (0, ak.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aF = n(864145);
let aB = (0, h.sN)(x.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, ak.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, ak.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aF.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    az = (0, h.zZ)(x.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aw, aB, aV],
    });
var aY = n(803224),
    aX = n(552122);
let aH = (0, h.E2)(x.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aX.A.useHolidaySoundpack(),
        Component: () =>
            (0, T.jsx)($.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aW = (0, h.AK)(x.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: x.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aK = (0, h.gN)(x.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aW] });
var aZ = n(264686);
let aq = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aQ() {
    let e = aq.getField("currentPlayingSound");
    (e?.stop(), aq.setState({ currentPlayingSound: null }));
}
function a$(e) {
    let t = aq.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aq.setState({ currentPlayingSound: n });
}
function aJ(e) {
    return (0, h.zD)(`${x.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a$(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, _.bG)([aY.A], () => aY.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aY.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aZ.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let a0 = [
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
    a1 = (0, h.D1)(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(x.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => a0.map((e) => aJ(e)),
    }),
    a2 = (0, h.zZ)(x.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds());
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
        buildLayout: () => [a1, aH, aK],
    }),
    a3 = (0, h.zD)(x.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.e3Zz3F),
        useSubtitle: () => V.intl.string(V.t.RztTjP),
        useValue: function () {
            return !U.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rE.A)("stream_previews_disabled", !e, U.uh.getSetting(), [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                U.uh.updateSetting(!e));
        },
    }),
    a5 = (0, h.zD)(x.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getVideoHook());
        },
        setValue: sE.default.setVideoHook,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.supportsVideoHook());
        },
    }),
    a4 = (0, h.zD)(x.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getExperimentalSoundshare());
        },
        setValue: sE.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => {
                let e = i9.Ay.supportsExperimentalSoundshare(),
                    t = i9.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a6 = (0, h.zD)(x.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i9.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a8 = (0, h.sN)(x.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sE.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i9.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, _.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
            return i9.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a7 = (0, h.zD)(x.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t.lt8rRx),
        useSubtitle: () => V.intl.string(V.t.ie1mgY),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getUseSystemScreensharePicker());
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
            return (0, _.bG)([i9.Ay], () => i9.Ay.supportsSystemScreensharePicker() && (0, nh.cX)());
        },
    }),
    a9 = (0, h.bd)(x.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(x.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a6, a8, a7, a4, a5],
    }),
    oe = (0, h.zZ)(x.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a3, a9] });
var ot = n(106713);
let on = (0, h.E2)(x.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, T.jsx)(lW.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: sw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oi = (0, h.E2)(x.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, T.jsx)(lW.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: sw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    os = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [on, oi] }),
    ol = (0, h.sN)(x.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i9.Ay.getInputVolume();
            return (0, ak.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ak.w)(e);
            sE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    or = (0, h.sN)(x.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i9.Ay.getOutputVolume();
            return (0, ak.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ak.w)(e);
            sE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oa = (0, h.zC)(x.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ol, or] });
var oo = n(702841),
    ou = n(152567),
    od = n(804037);
let oc = `${ey.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    og = (0, h.E2)(x.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, oo.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oo.bG)([i9.Ay], () => i9.Ay.supports(sw.O5.LOOPBACK))
                ? (0, T.jsx)(ou.A, {
                      size: "md",
                      notchBackground: ou.V.GRAY,
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
                                  className: od.X,
                                  href: ey.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: oc }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    om = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function oA(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, T.jsxs)(q.B, {
        children: [
            n && (0, T.jsx)(ss, { sourcePage: "voice" }),
            t && (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oE = (0, h.zZ)(x.X.VOICE_CATEGORY, {
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
                t = (0, lK.x5)(sw.oh.AUDIO_INPUT),
                n = (0, lK.x5)(sw.oh.AUDIO_OUTPUT),
                i = f.useMemo(() => {
                    let e = om.some((e) => t?.hardwareId?.startsWith(e)),
                        i = om.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, T.jsx)(oA, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [os, oa, og],
    }),
    oh = (0, h.t_)(x.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oE, ac, l1, oe, a2, az, rb, rT],
    }),
    ox = (0, h.i4)(x.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: lU.MicrophoneIcon,
        useMenu: lV.A,
        buildLayout: () => [oh],
    }),
    oS = (0, h.WI)(x.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [ox, nZ, tt, iX, lM, nJ],
    });
var op = n(360669),
    oT = n(643891),
    of = n(975807),
    o_ = n(534247);
function oI(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, T.jsxs)("div", {
        className: ic()(o_.kL, { [o_.oE]: a }),
        children: [
            (0, T.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: o_.Qs,
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
            (0, T.jsx)("img", { src: s, className: o_.fA, alt: "" }),
        ],
    });
}
var oN = n(425565),
    oC = n(745188),
    oy = n(936564),
    ob = n(417792),
    ov = n(423764),
    oj = n(289873),
    oO = n(132500),
    oL = n(465323),
    oR = n(37766),
    oD = n(194261),
    oP = n(391048),
    oG = n(277984),
    oM = n(99696),
    oU = n(202613),
    oV = n(615405),
    ok = n(83617),
    ow = n(935208),
    oF = n(607399),
    oB = n(993077),
    oz = n(150934),
    oY = n(256006),
    oX = n(198970),
    oH = n(71532);
let oW = /[^0-9/]/g,
    oK = /[^0-9]/g;
class oZ extends f.PureComponent {
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
                ((i = (n = e.replace(oW, "").split("/"))[0]),
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
            ? (u = u.replace(oK, ""))
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
var oq = n(832208),
    oQ = n(782328);
let o$ = [
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
                        getClassNameForLayout: () => oQ.ep,
                        renderInput: (e) => (0, T.jsx)(oZ, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oJ = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, T.jsx)(oq.A, {
                className: n,
                form: o$,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oH.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o0 = n(219887),
    o1 = n(292856);
let o2 = "isDefault";
class o3 extends f.PureComponent {
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
            expiresMonth: t instanceof oU.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oU.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oG.ey)(), (0, oG.tc)());
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
                      className: o1.zc,
                      children: (0, T.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, T.jsx)("div", {
                  className: o1.zc,
                  children: (0, T.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oY.g)(n);
        return (0, T.jsxs)("div", {
            className: o1.yV,
            children: [
                (0, T.jsx)($.E, {
                    className: o1.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, T.jsx)(oX.Ay, {
                    ...e,
                    mode: oX.Ay.Modes.EDIT,
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
            className: o1.yV,
            children: [
                (0, T.jsx)($.E, { className: o1.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, T.jsx)(oJ, {
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
            className: o1.AU,
            children: (0, T.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, T.jsx)(l8.e, {
                        children: (0, T.jsxs)("div", {
                            className: o1.lH,
                            children: [
                                n
                                    ? (0, T.jsx)(sg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, T.jsx)("div", { "aria-hidden": !0, className: o1.dm }),
                                      })
                                    : null,
                                (0, T.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oF.Fr ? "sm" : "md",
                                    text: oF.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, T.jsxs)(l8.e, {
                        children: [
                            (0, T.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oF.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, T.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oF.Fr ? "sm" : "md",
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
            r = e instanceof oU.SJ;
        return (0, T.jsx)(oB.Z, {
            editable: !0,
            className: ic()(o1.Nr, i),
            children: (0, T.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, T.jsxs)("div", {
                        className: o1.__invalid_paymentSection,
                        children: [
                            (0, T.jsx)(o0.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, T.jsx)("div", { className: o1.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, T.jsx)("div", {
                                className: o1.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, T.jsx)("div", {
                        className: o1.D5,
                        children: (0, T.jsx)(oz.S, {
                            value: o2,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, o2),
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
let o5 = _.Ay.connectStores([oV.A], () => ({ updateError: oV.A.editSourceError, removeError: oV.A.removeSourceError }))(
    o3,
);
var o4 = n(986485),
    o6 = n(849405),
    o8 = n(329693);
function o7() {
    (0, oM.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oO.A)() });
}
class o9 extends f.PureComponent {
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
            ? (0, T.jsx)(o5, {
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
                      i ? null : (0, T.jsx)(sl.c, { className: o8.__invalid_sourceDivider }),
                      (0, T.jsxs)("div", {
                          className: o8.Yb,
                          children: [
                              (0, T.jsx)(o0.A, {
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
let ue = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = f.useState(null),
        o = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, _.bG)([oV.A], () => oV.A.ipCountryCode),
        d = f.useMemo(() => (0, oL.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oG.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, T.jsxs)(T.Fragment, {
            children: [
                n ? null : (0, T.jsx)(sl.c, { className: o8.__invalid_sourceDivider }),
                (0, T.jsxs)("div", {
                    className: o8.Yb,
                    children: [
                        void 0 !== t
                            ? (0, T.jsx)(o0.A, {
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
                                      (0, T.jsx)(oR._, { size: "lg" }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/medium",
                                          className: o6.Wi,
                                          children: V.intl.string(o4.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, T.jsxs)("div", {
                            className: o8.zy,
                            children: [
                                (0, T.jsx)("div", {
                                    className: o8.Tq,
                                    children:
                                        null == r
                                            ? (0, T.jsx)(oj.y, { type: oj.y.Type.SPINNING_CIRCLE })
                                            : (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oL.$g)(e ?? 0, n, s, {
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
                                    text: V.intl.string(o4.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ut extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oG.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oG.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oG.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ok.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sp.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, T.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oP.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, T.jsxs)("div", {
            className: o8.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, T.jsxs)("div", {
                          className: o8.z8,
                          children: [
                              (0, T.jsx)($.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o8.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : ow.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oU.LQ)),
            c = u.filter((e) => e instanceof oU.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, T.jsx)(
                    o9,
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
                              ue,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: o7,
                              },
                              e.id,
                          ),
                      )
                    : (0, T.jsx)(ue, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: o7,
                      })),
            (0, T.jsxs)(T.Fragment, {
                children: [
                    t
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, T.jsx)(oD.LockIcon, { size: "sm", className: o8.hz }),
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
var un = n(459357),
    ui = n(295405),
    us = n(166403),
    ul = n(773669),
    ur = n(943009);
function ua() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, ov.Gw)(e.country) };
}
let uo = (0, h.E2)(x.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, _.bG)([oV.A], () => oV.A.isSyncing),
                i = (0, _.bG)([ui.A], () => ui.A.paymentSources),
                s = (0, _.bG)([ui.A], () => ui.A.defaultPaymentSourceId),
                l = (0, _.bG)([ul.default], () => ul.default.locale),
                r = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
                a = (0, _.bG)([oV.A], () => oV.A.isRemovingPaymentSource),
                o = (0, _.bG)([oV.A], () => oV.A.isUpdatingPaymentSource),
                { enabled: u } = (0, un.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (oG.$o(), oG.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, T.jsx)("div", { className: ur.o, children: (0, T.jsx)(oj.y, {}) })
                : (0, T.jsx)(ut, {
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
        useSearchTerms: () => [V.intl.string(V.t.W26xGQ), V.intl.string(V.t["3pIjBH"])],
    }),
    uu = (0, h.E2)(x.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = f.useMemo(
                () => [
                    { text: V.intl.string(oC.default["6bWeWP"]), onClick: () => (0, of.A)(oN.C1) },
                    {
                        text: V.intl.string(oC.default.xYa9Y8),
                        onClick: () => (0, of.A)(ey.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, T.jsx)("div", {
                className: oy.k,
                children: (0, T.jsx)(oI, {
                    title: V.intl.string(oC.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, T.jsx)($.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: V.intl.string(oC.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, ob.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ud = (0, h.zZ)(x.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = ua();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ua()
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
        buildLayout: () => [uo, uu],
    });
var uc = n(662490),
    ug = n(945810);
let um = (0, ug.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var uA = n(837381),
    uE = n(689175),
    uh = n(928039),
    ux = n(39190),
    uS = n(32731),
    up = n(380098),
    uT =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uf =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    u_ =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    uI =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uN =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uC(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oU.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uS.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new up.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uy = { receipts: [], cursor: null };
var ub = n(34188),
    uv = n(597770),
    uj = n(206828),
    uO = n(576243),
    uL = n(147925),
    uR = n(707554),
    uD = n(957565),
    uP = n(458790),
    uG = n(39209),
    uM = n(510022),
    uU = n(427262),
    uV = n(106799),
    uk = n(580630),
    uw = n(818348),
    uF = n(460103);
let uB = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uz(e, t) {
    return t === uw.Yr.DISCORD_ORB
        ? (0, T.jsxs)("span", {
              className: uF.db,
              children: [
                  (0, T.jsx)(uV.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, uk.$g)(e, t);
}
function uY(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, eY.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uN.REDEEMED
        ? null
        : n.status === uN.REFUNDED
          ? (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(uR.H, { className: uF.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, T.jsx)("div", {
                        className: uF.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: uU.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uN.CLAIMED || n.status === uN.UNCLAIMED
            ? (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsx)(uR.H, { className: uF.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uF.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: uU.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, T.jsx)("div", {
                              className: uF.TP,
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
                      (0, T.jsx)(uR.H, { className: uF.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, T.jsx)("div", {
                          className: uF.iL,
                          children: s
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, T.jsx)("div", {
                          className: uF.TP,
                          children: s
                              ? (0, T.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, of.A)(uB(i)),
                                })
                              : (0, T.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: l,
                                            }),
                                            (0, uM.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uX = n(933832),
    uH = n(789645);
function uW(e) {
    let { refund: t, locale: n } = e,
        i = uB(n),
        s = t.eligible ? uX.CheckmarkLargeIcon : uH.P;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)(uR.H, { className: uF.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, T.jsxs)("div", {
                className: uF.iL,
                children: [
                    (0, T.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uI.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uI.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uI.GIFT:
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
                    t.policy !== uI.IN_GAME_ITEM &&
                        (0, T.jsxs)("div", {
                            className: uF.My,
                            children: [
                                (0, T.jsx)("div", {
                                    className: uF.Kf,
                                    children:
                                        null != t.window &&
                                        (0, T.jsxs)("div", {
                                            className: uF._Z,
                                            children: [
                                                (0, T.jsx)(uR.H, {
                                                    className: uF.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, T.jsxs)("div", {
                                                    className: uF.z9,
                                                    children: [
                                                        (0, T.jsx)(s, { className: uF.xb, color: "currentColor" }),
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
var uK = n(679897);
function uZ(e) {
    let { description: t, cost: n } = e;
    return (0, T.jsx)("li", {
        className: uF.mg,
        children: (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            children: [(0, T.jsx)("div", { children: t }), (0, T.jsx)("div", { children: n })],
        }),
    });
}
function uq(e) {
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
                (0, uD.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, T.jsx)("div", { className: uF.l9, children: t }),
        }),
    });
}
function uQ(e) {
    let { paymentId: t } = e;
    return (0, T.jsx)("li", {
        className: uF.mg,
        children: (0, T.jsxs)("div", {
            className: uF.bx,
            children: [
                (0, T.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, T.jsx)(uq, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function u$(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === u_.REVERSED;
    return (0, T.jsxs)($.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(uK.XM, n ? uK.aB : uK.EN),
        children: [
            t === u_.REVERSED && V.intl.string(V.t.YQv9Li),
            t === u_.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === u_.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function uJ(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uw.kM.APPLE_PARTNER ? new oU.Pw({}) : null);
    return null == i
        ? null
        : (0, T.jsx)(o0.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uF.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function u0(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, T.jsx)(uJ, { payment: t.payments[0], locale: n })
            : null
        : (0, T.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, T.jsxs)(
                      sN.A,
                      {
                          justify: sN.A.Justify.BETWEEN,
                          align: sN.A.Align.CENTER,
                          children: [
                              (0, T.jsx)(uJ, { payment: e, locale: n }),
                              (0, T.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, T.jsx)(u$, { tag: e.tag }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uz(e.amount, t.currency),
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
function u1(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsx)("div", { className: uF.ts }),
            t.delisted
                ? (0, T.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, of.A)(uB(n)) },
                  })
                : null != t.guild_id && (0, T.jsx)(uP.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function u2(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, T.jsx)(n4.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, T.jsxs)("div", {
            className: uF.WI,
            children: [
                (0, T.jsx)(uR.H, { className: uF.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, T.jsxs)("div", {
                    className: ic()(uF.iL, uF.W),
                    children: [
                        (0, T.jsx)(u0, { receipt: t, locale: n }),
                        (0, T.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uZ, { description: t.description, cost: uz(t.subtotal, s) }),
                                            (0, T.jsx)(uZ, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: uz(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uZ, { description: V.intl.string(V.t.txajQG), cost: uz(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)(uZ, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: uz(-t.amount_refunded, s),
                                            }),
                                            (0, T.jsx)(uZ, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: uz(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)(uQ, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, T.jsx)(uP.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, T.jsx)(u1, { guildProduct: l, locale: n }),
                (0, T.jsx)(uG.A, { payment: t.receipt_payment }),
                null != r && (0, T.jsx)(uY, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, T.jsx)(uW, { refund: a, locale: n }),
            ],
        }),
    });
}
function u3(e) {
    let { withGradient: t } = e;
    return t
        ? (0, T.jsx)(uO.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uF.Sy })
        : (0, T.jsx)("div", {
              className: ic()(uF.Sy, uF.uX, uF.Xr),
              children: (0, T.jsx)(ag.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function u5(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, _.bG)([sv.A], () => sv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uf.NITRO:
            return (0, T.jsx)(u3, { withGradient: !0 });
        case uf.NITRO_BASIC:
            return (0, T.jsx)(u3, { withGradient: !1 });
        case uf.SHOP:
            return (0, T.jsx)(ub.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uF.sV });
        case uf.APPLICATION:
        case uf.PRODUCT:
            return (0, T.jsx)(i7.A, {
                className: uF.Sy,
                guildClassName: uF.zA,
                game: t.icon === uf.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function u4(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uT.PAID)
        switch (i.status) {
            case uN.CLAIMED:
                return (0, T.jsx)("span", { className: uF.gD, children: V.intl.string(V.t.lIsIFo) });
            case uN.UNCLAIMED:
                return (0, T.jsx)("span", { className: uF.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uN.REDEEMED:
                return (0, T.jsx)("span", { className: uF.gD, children: V.intl.string(V.t.Osji1u) });
            case uN.FAILED:
                return (0, T.jsx)("span", { className: uF.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, T.jsx)("span", { className: uF.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, T.jsx)("span", { className: uF.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uT.PENDING:
            return (0, T.jsx)("span", { className: uF.Xg, children: V.intl.string(V.t.y7F0Re) });
        case uT.FAILED:
            return (0, T.jsx)("span", { className: uF.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uT.REVERSED:
            return (0, T.jsx)("span", { className: uF.ob, children: V.intl.string(V.t.YQv9Li) });
        case uT.CANCELED:
            return (0, T.jsx)("span", { className: uF.ob, children: V.intl.string(V.t.ttkBhy) });
        case uT.PARTIALLY_REFUNDED:
            return (0, T.jsx)("span", { className: uF.gD, children: V.intl.string(V.t.lYbZzz) });
        case uT.REFUNDED:
            return (0, T.jsx)("span", { className: uF.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uT.PAID:
            return null;
    }
}
function u6(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uj.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, T.jsx)(uA.tG, {
        id: t.id,
        children: (e) =>
            (0, T.jsxs)(n4.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: ic()(uF.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, T.jsxs)(sN.A, {
                        className: uF.J7,
                        align: sN.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                className: uF.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, T.jsxs)("div", {
                                className: uF.h_,
                                children: [
                                    (0, T.jsx)(u5, { receipt: t }),
                                    (0, T.jsx)("div", {
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
                                                                      return (0, aN.xq)(t)
                                                                          ? aN.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aN.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return V.intl.formatToPlainString(
                                                                  t.interval === t$.WT.YEAR
                                                                      ? V.t.V6UFQM
                                                                      : V.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case I.rzx.APPLICATION:
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
                                              children: (0, T.jsx)(uv.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uF.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, T.jsxs)("div", {
                                className: uF.vj,
                                children: [
                                    (0, T.jsx)(u4, { receipt: t, hasLinkedToApplication: r }),
                                    (0, T.jsx)("span", { className: uF.q9, children: uz(t.net, t.currency) }),
                                ],
                            }),
                            (0, T.jsx)(uL.A, {
                                className: uF.fT,
                                direction: s ? uL.A.Directions.UP : uL.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, T.jsx)(u2, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u8 = n(949779);
function u7(e) {
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
        d = (0, uh.A)("billing-history", s);
    return (0, T.jsx)(uA.hD, {
        navigator: d,
        children: (0, T.jsx)(uA.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, T.jsx)(ux.A, {
                    className: u8.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, T.jsx)(uE.Ch, {
                        className: u8.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, T.jsx)(u6, { className: ic()(u8.Nj, u8.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u9(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, T.jsxs)(oB.Z, {
            className: u8.K1,
            children: [
                (0, T.jsx)("div", {
                    className: u8.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: uw.qm[t.paymentGateway] }),
                }),
                (0, T.jsx)("div", {
                    className: u8.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: uw.qm[t.paymentGateway],
                        billingHistoryLink: (0, aN.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function de(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = f.useState(uy),
                [n, i] = f.useState(!1),
                [s, l] = f.useState(!1),
                [r, a] = f.useState(!1),
                o = f.useCallback((e, n) => {
                    ts.Bo.get({
                        url: I.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                s = i.receipts.map(uC);
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
        r = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, T.jsxs)("div", {
              className: u8.GD,
              children: [
                  null != r && a ? (0, T.jsx)(u9, { subscription: r }) : null,
                  n.length > 0
                      ? (0, T.jsxs)("div", {
                            className: ic()(u8.PQ, u8.GD),
                            children: [
                                (0, T.jsx)("div", {
                                    className: ic()(u8.Nj, u8.Bd),
                                    children: (0, T.jsxs)(sN.A, {
                                        className: u8.Yi,
                                        children: [
                                            (0, T.jsx)("div", {
                                                className: uF.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: u8.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, T.jsx)("div", {
                                                className: uF.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, T.jsx)(u7, { receipts: n, locale: t, loadNextPage: l }),
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
        : (0, T.jsx)(oj.y, {});
}
var dt = n(545075);
let dn = (0, h.E2)(x.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, _.bG)([ul.default], () => ul.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: um.useConfig(e).enabled });
            return (0, T.jsxs)(T.Fragment, {
                children: [(0, T.jsx)(dt.kb, {}), n ? (0, T.jsx)(de, { locale: t }) : (0, T.jsx)(uc.A, { locale: t })],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    di = (0, h.zZ)(x.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [dn],
    }),
    ds = (0, h.t_)(x.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [ud, di],
        useObscuredNotice: oT.L,
    }),
    dl = (0, h.i4)(x.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: op.B,
        buildLayout: () => [ds],
    });
var dr = n(70283),
    da = n(682618),
    du = n(92202),
    dd = n(139486),
    dc = n(962644),
    dg = n(35587),
    dm = n(86379);
let dA = (0, h.E2)(x.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dt.uK,
        usePredicate: () => (0, dm.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dE = (0, h.zZ)(x.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dA] });
var dh = n(704333),
    dx = n(414499),
    dS = n(31300),
    dp = n(997101);
let dT = "https://discord.com",
    df = {
        [dp.d.US]: [
            { id: "walmart", name: "Walmart", url: dT },
            { id: "target", name: "Target", url: dT },
            { id: "amazon", name: "Amazon", url: dT },
            { id: "best_buy", name: "Best Buy", url: dT },
        ],
        [dp.d.GB]: [
            { id: "tesco", name: "Tesco", url: dT },
            { id: "smyths_toys", name: "Smythstoys", url: dT },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dT },
            { id: "asda", name: "Asda", url: dT },
        ],
        [dp.d.CA]: [{ id: "eb_games", name: "EBGames", url: dT }],
        [dp.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dT }],
        [dp.d.ES]: [{ id: "game", name: "GAME", url: dT }],
        [dp.d.FR]: [{ id: "micromania", name: "Micromania", url: dT }],
    },
    d_ = [],
    dI = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var dN = n(534284);
function dC(e) {
    let { enabled: t } = (0, du.K)({ location: e }),
        n = (0, dN.P)(),
        i = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && oN.ob.has(i);
}
var dy = n(178881);
function db(e) {
    let { icon: t, children: n } = e;
    return (0, T.jsxs)($.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dy.A,
        children: [
            (0, T.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, T.jsx)("span", { children: n }),
        ],
    });
}
let dv = (0, h.zZ)(x.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dj],
        usePredicate: () => dC("GiftInventoryMarketingBanner"),
    }),
    dj = (0, h.E2)(x.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dC("GiftCardsGiftInventoryBanner"),
                t = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, eY.Ay)();
                    return f.useCallback(
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
                i = f.useMemo(
                    () =>
                        (null == t ? d_ : (df[t] ?? d_)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, of.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, T.jsx)(oI, {
                      size: "compact",
                      title: V.intl.string(oC.default.Ja5Q8Z),
                      graphicSrc: dI,
                      actions: i,
                      children: (0, T.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, T.jsx)(db, { icon: dh.B, children: V.intl.string(oC.default["9xo1g9"]) }),
                              (0, T.jsx)(db, { icon: dx.h, children: V.intl.string(oC.default.I5UWh9) }),
                              (0, T.jsx)(db, {
                                  icon: uv.GiftIcon,
                                  children: V.intl.format(oC.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, na.openUserSettings)(x.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, T.jsx)(db, {
                                  icon: dS.k,
                                  children: V.intl.format(oC.default.UwYHGm, { websiteUrl: oN.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dO = n(982240),
    dL = n(948518),
    dR = n(914410),
    dD = n(556427),
    dP = n(573343);
function dG(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, T.jsxs)("div", {
        className: ic()(dP.fO, { [dP.bF]: i }),
        children: [
            null != n && (0, T.jsx)("img", { src: n, alt: "", className: dP.si }),
            (0, T.jsxs)("div", {
                className: dP.tc,
                children: [
                    (0, T.jsx)($.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, T.jsx)($.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(dD.default.qvx9E4, { count: (0, dO.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function dM(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, T.jsx)("div", {
        className: dP.dw,
        children: t.map((e) => (0, T.jsx)(dG, { tier: e, iconUrl: (0, dd.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function dU(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dL.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, T.jsx)("div", {
        className: dP.NG,
        children: (0, T.jsx)(j.$, {
            variant: "primary",
            icon: uv.GiftIcon,
            text: V.intl.string(dD.default.DZnomS),
            onClick: s,
        }),
    });
}
function dV(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, dO.rL)(i),
        a = (0, dO.rL)(s),
        o = (0, dd.GZ)(n, i, s),
        u = (0, dd.Se)(i),
        d = (0, dd.Se)(s);
    return (
        (t =
            null != s
                ? V.intl.formatToPlainString(dD.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : V.intl.formatToPlainString(dD.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, T.jsxs)("div", {
            className: dP.mY,
            children: [
                null != u &&
                    (0, T.jsx)("div", {
                        className: dP.fC,
                        children: (0, T.jsx)("img", { src: u, alt: "", className: dP.qS }),
                    }),
                (0, T.jsxs)("div", {
                    className: dP.Qs,
                    children: [
                        (0, T.jsx)($.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, T.jsx)(dR.Ay, { variant: dR.qP.BLUE, weight: dR.fh.MEDIUM, progress: o }),
                        (0, T.jsx)($.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dP.qg,
                            children: V.intl.format(dD.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, T.jsx)("div", {
                        className: dP.fC,
                        children: (0, T.jsx)("img", { src: d, alt: "", className: dP.qS }),
                    }),
            ],
        })
    );
}
function dk(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, _.cf)([dO.Ay], () => ({
            badgeProgress: dO.Ay.getSingleRequirementProgress(dr.$.GIFTING)?.current ?? 0,
            currentTier: dO.Ay.getCurrentTier(dr.$.GIFTING),
            nextTier: dO.Ay.getNextTier(dr.$.GIFTING),
            giftsRemaining: dO.Ay.getRemainingToNextTier(dr.$.GIFTING),
            tiers: dO.Ay.getBadgeById(dr.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, T.jsxs)("div", {
              className: dP.kL,
              children: [
                  (0, T.jsxs)("div", {
                      className: dP.Jo,
                      children: [
                          n > 0 &&
                              (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsx)(dV, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, T.jsx)("div", { className: dP.yF }),
                                  ],
                              }),
                          (0, T.jsx)(dM, { tiers: r, currentTier: i }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dP.PJ,
                              children: V.intl.string(dD.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, T.jsx)(dU, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let dw = (0, h.zZ)(x.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(dD.default.sFokBp),
        buildLayout: () => [dF],
        usePredicate: () => {
            let e = (0, dd.F5)("gift_inventory"),
                t = (0, _.bG)([dO.Ay], () => dO.Ay.getBadgeById(dr.$.GIFTING));
            return e && null != t;
        },
    }),
    dF = (0, h.E2)(x.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(dD.default.sFokBp)],
        Component: () => (0, T.jsx)(dk, {}),
    });
var dB = n(264779),
    dz = n(412260),
    dY = n(555393),
    dX = n(725807),
    dH = n(212168),
    dW = n(976860),
    dK = n(469778),
    dZ = n(45938),
    dq = n(109802),
    dQ = n(869038),
    d$ = n(380856);
function dJ(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, T.jsxs)(sN.A, {
        className: ic()(d$.wx, n),
        align: sN.A.Align.CENTER,
        children: [
            (0, T.jsx)("div", { className: d$.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function d0(e) {
    let { children: t, className: n } = e;
    return (0, T.jsx)("div", { className: ic()(d$.rf, n), children: t });
}
class d1 extends f.PureComponent {
    static Header = dJ;
    static Body = d0;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, T.jsx)("div", { className: ic()(d$.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var d2 = n(180522),
    d3 = n(871123),
    d5 = n(366523),
    d4 = n(280450),
    d6 = n(30793),
    d8 = n(97352),
    d7 = n(67480),
    d9 = n(615396),
    ce = n(274904);
class ct extends f.PureComponent {
    _copyModeTimeout = new rW.Ep();
    state = { copyMode: dq.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dq.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case dq.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dQ.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dZ.AK)(t, n),
            (0, uD.C)(
                e,
                () => this.setState({ copyMode: dq.q.SUCCESS }),
                () => this.setState({ copyMode: dq.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dq.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, T.jsxs)(sN.A, {
            direction: sN.A.Direction.VERTICAL,
            className: ce.Gj,
            children: [
                (0, T.jsx)(dq.e, {
                    className: ce.ph,
                    value: (0, dZ.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uD.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l4.XD.BRAND,
                    buttonLook: l4.pR.FILLED,
                }),
                (0, T.jsxs)("div", {
                    className: ce.KB,
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
class cn extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dQ.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dQ.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, d3.bF)(e)
            ? (0, T.jsx)(d5.e, { shape: "square", sku: e, containerClassName: ce.ez })
            : null != t
              ? (0, T.jsx)(d2.A, { giftStyle: t, className: ce.ez, shouldAnimate: this.state.isHovered })
              : (0, T.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, d3.bF)(e)
            ? (0, T.jsxs)("div", {
                  className: ic()(ce.Oc, ce.ic),
                  children: [
                      (0, T.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: ce._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, T.jsx)("div", { className: ce.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
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
            (0, T.jsx)("div", { className: ce.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, T.jsxs)(sN.A, {
            justify: sN.A.Justify.BETWEEN,
            align: sN.A.Align.CENTER,
            className: ce.pe,
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
        return (0, T.jsxs)(d1, {
            className: i,
            children: [
                (0, T.jsx)(n4.D, {
                    onClick: this.handleToggleOpen,
                    className: ce.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, T.jsx)(d1.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, T.jsxs)("div", {
                            className: ce.MY,
                            children: [
                                (0, T.jsxs)(sN.A, {
                                    align: sN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, T.jsxs)("div", {
                                            className: ce.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, T.jsx)(uL.A, {
                                    direction: a ? uL.A.Directions.UP : uL.A.Directions.DOWN,
                                    className: ce.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, T.jsx)(d1.Body, {
                          children: l
                              ? (0, T.jsx)(oj.y, { className: ce.u1 })
                              : (0, T.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, T.jsx)(ct, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let ci = _.Ay.connectStores([d7.A, tu.A, d6.A, i2.A, d8.A, d4.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = d7.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d6.A.getForGifterSKUAndPlan(d4.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tu.A.enabled,
        isFetching: d6.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: d6.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d9.c9)(n) : null,
        giftCodes: l,
    };
})(cn);
var cs = n(725570),
    cl = n(736653),
    cr = n(46054);
let ca = im().duration(30, "days");
var co = n(416052),
    cu = n(878309);
function cd(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, T.jsx)(sS.a, {
        title: "",
        size: "md",
        input: (0, T.jsx)("div", { className: cu.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, T.jsxs)("div", {
            className: cu.t4,
            children: [
                (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, T.jsx)($.E, { variant: "text-md/normal", className: cu.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cc = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eY.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == i &&
            (0, dB.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, T.jsx)(cd, { onClose: t, transitionState: l })
        : null == i
          ? (0, T.jsx)(oj.y, { className: cu.Lq })
          : (0, T.jsx)(sS.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, T.jsxs)("div", {
                    className: cu.N1,
                    children: [
                        (0, T.jsx)("div", { className: cu.Qw }),
                        (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, T.jsx)($.E, {
                            variant: "text-md/normal",
                            className: cu.G3,
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
                            let e = (0, dB.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, T.jsxs)("div", {
                    children: [
                        (0, T.jsx)(sl.c, { className: cu.M5 }),
                        (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, T.jsx)(co.A, {
                                value: i,
                                buttonColor: l4.$n.Colors.BRAND,
                                buttonLook: l4.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cg = n(136380);
function cm(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cl.Ay)(),
        d = (0, dB.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(ca)
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
        A = (0, dY.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, T.jsxs)(T.Fragment, {
        children: [
            (0, T.jsxs)("div", {
                className: cg.AX,
                children: [
                    (0, T.jsxs)("div", {
                        className: cg.Pg,
                        children: [
                            (0, T.jsxs)("div", {
                                className: cg.At,
                                children: [
                                    (0, T.jsx)("div", {
                                        className: cg.$G,
                                        children: (0, T.jsx)("img", { alt: "", src: d, className: cg.IJ }),
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
                            className: cg.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cr.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, T.jsx)(cs.aF, {
                    renderModal: (e) =>
                        (0, T.jsx)(cc, {
                            ...e,
                            onClose: E,
                            onClaim: dc.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cA(e) {
    let { redesign: t = !1 } = e,
        n = (0, _.yK)([dK.A], () => dK.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dY.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dg.y7)(),
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
                      className: cg.N1,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, T.jsx)(sl.c, { className: cg.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, T.jsxs)("div", {
                      className: cg.uo,
                      children: [
                          (0, T.jsx)(ag.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cg.PC,
                          }),
                          (0, T.jsx)($.E, {
                              variant: "text-md/normal",
                              className: cg.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tX.default)(), (0, dW.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, T.jsx)(dX.A, {
                              showGradient: !0,
                              className: cg.aA,
                              subscriptionTier: t$.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, T.jsxs)("div", {
        children: [
            g,
            (0, T.jsx)(dH.A, {
                className: cg.Yj,
                isShown: !1 === i && c,
                type: dH.i.PREMIUM,
                hasBackground: !0,
                children: (0, T.jsxs)("div", {
                    className: cg.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, T.jsx)(cm, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, T.jsx)(cm, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, T.jsx)(
                                  ci,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t$.FB,
                                  },
                                  (0, dZ.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, T.jsx)(
                                  ci,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dZ.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, T.jsx)(
                                  ci,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t$.Bu,
                                  },
                                  (0, dZ.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cE = (0, h.zZ)(x.X.MY_GIFTS_CATEGORY, {
        useTitle: cx,
        buildLayout: () => [ch],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, _.cf)(
                    [dz.A],
                    () => ({
                        claimedOutboundPromotionCodes: dz.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dz.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dg.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dB.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    ch = (0, h.E2)(x.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cx()],
        Component: () => (0, T.jsx)(cA, { redesign: !0 }),
    });
function cx() {
    return V.intl.string(V.t.YzjdWJ);
}
var cS = n(339048),
    cp = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cT = n(183636),
    cf = n(739508);
function c_() {
    var e, t;
    let n,
        i,
        s = (0, _.yK)([dK.A], () => dK.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        l = K().groupBy(s, (e) => (0, dZ.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cS.XJ)().then(() => a(!0));
        }, []),
        (e = cp.GIFT_INVENTORY),
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
                        "focused" === cT.A.getState() &&
                            (0, cf.pM)(Error(`${e} load timed out`), {
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
        return (0, T.jsx)(oj.y, { className: cg.Lq });
    if (0 === Object.keys(l).length)
        return (0, T.jsxs)("div", {
            className: cg.p$,
            children: [
                (0, T.jsx)(uR.H, { className: cg.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, T.jsx)("p", {
                    className: cg.WO,
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
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, dZ.X6)(e);
            return (0, T.jsx)(ci, { skuId: t, subscriptionPlanId: n, entitlements: l[e], giftStyle: i }, e);
        });
    return (0, T.jsx)(q.B, { gap: "lg", children: o });
}
let cI = (0, h.zZ)(x.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cC, buildLayout: () => [cN] }),
    cN = (0, h.E2)(x.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cC()], Component: () => (0, T.jsx)(c_, {}) });
function cC() {
    return V.intl.string(V.t.FWe6CP);
}
var cy = n(532446),
    cb = n(499454);
class cv extends f.Component {
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
                    (await (0, oM.Qp)(n),
                        (0, oM.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oO.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dZ.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dQ.Ay.resolveGiftCode(e);
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
                (0, cb.h)({ processedCode: e }),
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
                children: (0, T.jsxs)(cy.M, {
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
function cj(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, un.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        s = (0, _.bG)([tu.A], () => tu.A.enabled);
    return (0, T.jsx)(cv, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cO = (0, h.zZ)(x.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cL],
        usePredicate: () => !(0, dm.Hp)(),
    }),
    cL = (0, h.E2)(x.X.REDEEM_CODE_INPUT, {
        Component: () => (0, T.jsx)(cj, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cR = (0, h.t_)(x.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dv, cO, cE, dw, cI, dE],
        initialize: () => {
            (dc.Ay.fetchClaimedOutboundPromotionCodes(), (0, dd.Ig)("gift_inventory") && (0, da.o0)(dr.$.GIFTING));
        },
    }),
    cD = (0, h.i4)(x.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uv.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dg.IO)().length;
            return f.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = un.A.getConfig(e).enabled,
                n = du.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cR],
    });
var cP = n(659758),
    cG = n(281906),
    cM = n(877624),
    cU = n(269115),
    cV = n(462887),
    ck = n(73825),
    cw = n(531260),
    cF = n(160946),
    cB = n(721668),
    cz = n(224016),
    cY = n(526292),
    cX = n(881489),
    cH = n(106512),
    cW = n(22118),
    cK = n(103411),
    cZ = n(190187),
    cq = n(930861),
    cQ = n(854627),
    c$ = n(889227),
    cJ = n(326084),
    c0 = n(851746),
    c1 = n(664654),
    c2 = n(912140),
    c3 = n(953727);
let c5 = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, T.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c3.A)({ ...s }),
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
    c4 = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, cl.Ay)(),
            l = (0, cV.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, T.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, c3.A)({ ...i }),
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
var c6 = n(387316),
    c8 =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let c7 = "url(#gradient)",
    c9 = (e) => {
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
        let g = (0, cl.Ay)(),
            m = (0, cV.q)(g),
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
                            return c7;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : c7;
                        default:
                            return;
                    }
                })(m, r);
        return (0, T.jsxs)("div", {
            className: c6.Ap,
            children: [
                (0, T.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: c6.fB,
                    children: [
                        (0, T.jsx)("circle", {
                            className: 0 === r || 2 === r ? c6.F3 : void 0,
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
                (0, T.jsx)("div", { className: c6.Vw, children: n }),
            ],
        });
    };
var ge = n(104773);
function gt(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = f.useMemo(() => (0, c2.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, T.jsx)("div", {
        className: ge.Q7,
        children: (0, T.jsx)("div", {
            className: ge.Nk,
            children: null != s && (0, T.jsx)("img", { className: ge.CH, alt: i, src: s }),
        }),
    });
}
let gn = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = c8.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        S = t && !x;
    return (0, T.jsx)("div", {
        className: ic()(ge.G3, n),
        children: (0, T.jsx)(c9, {
            animationClassName: ic()(ge._0, { [ge.uJ]: S, [A ?? ""]: S }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case c8.NITRO_GEM:
                        return (0, T.jsx)(c5, {
                            className: S ? ge.Ow : void 0,
                            backgroundColor: ic()(ge.vH, s),
                            backgroundCircleSize: r,
                        });
                    case c8.NITRO_LOGO:
                        return (0, T.jsx)(c4, { circleColor: E, ellipseOpacity: m });
                    case c8.AVATAR_DECO:
                        if (null != c)
                            return (0, T.jsx)(gt, {
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
var gi = n(14313);
function gs(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, cQ.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, T.jsx)(b.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...s })
            : (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: gi.n5, children: n });
    return (0, T.jsx)(sg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !l,
        children: (0, T.jsx)("div", { className: gi.Lg, children: r }),
    });
}
function gl(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, T.jsxs)("div", {
        className: gi.Ip,
        children: [
            (0, T.jsx)("div", { className: gi.Ej }),
            (0, T.jsx)("div", { className: ic()({ [gi.ch]: t > n, [gi.q_]: t === n }) }),
        ],
    });
}
function gr(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, T.jsxs)("div", {
        className: gi.ZM,
        children: [
            (0, T.jsx)(gs, { userRecord: i, placement: 1 }),
            (0, T.jsx)(gl, { numSentReferrals: n, placement: 1 }),
            (0, T.jsx)(gs, { userRecord: s, placement: 2 }),
            (0, T.jsx)(gl, { numSentReferrals: n, placement: 2 }),
            (0, T.jsx)(gs, { userRecord: l, placement: 3 }),
        ],
    });
}
let ga = function () {
    let e = (0, _.bG)([c0.A], () => c0.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, c1.J)(),
        i = f.useMemo(() => t.map((e) => new c$.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cJ.aK.REDEEMED && s.redeemed++, e === cJ.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === c1.Z,
        r = ey.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (s.sent / c1.Z) * 100,
        d = (0, T.jsxs)("div", {
            className: gi.hE,
            children: [
                (0, T.jsx)(gn, { percentage: u, progressCircleVariation: c8.NITRO_LOGO, iconClassName: gi.ER }),
                (0, T.jsxs)("div", {
                    className: gi.Ns,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: gi.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, T.jsx)(gr, { userRecords: i }),
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= c1.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, T.jsx)("div", {
                            className: gi.Fb,
                            children: (0, T.jsx)(cq.wL, {
                                "data-migration-pending": !0,
                                className: gi.r$,
                                color: l4.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (td.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
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
                                    className: gi.Zn,
                                    children: [
                                        (0, T.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gi.QH,
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
        c = s.redeemed === c1.Z;
    return (0, T.jsx)(eY.f5, {
        value: a,
        children: (0, T.jsx)("div", {
            className: ic()(gi.kL, { [gi.AP]: c }),
            children: (0, T.jsx)("div", { ref: o, className: ic()(gi.d_, { [gi.kS]: c }), children: d }),
        }),
    });
};
var go = n(194509),
    gu = n(465794),
    gd = n(774774),
    gc = n(156601),
    gg = n(543213),
    gm = n(88001),
    gA = n(148155),
    gE = n(487518);
let gh = "to_premium_home_button",
    gx = "premium home page";
function gS(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === t$.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cw.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = t$.hd[t.planIdFromItems],
        c = aN.Ay.getDefaultPrice(d.id),
        g = aN.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cV.M)(s) ? gd.at.PREMIUM_TIER_2_WHITE_FILL : gd.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, T.jsxs)(T.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, T.jsx)(gd.e4, { text: V.intl.string(V.t.EyjDRE), className: gE.LW, colorOptions: e })
                    : (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(gd.HU, {
                                  text: l ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gE.uS,
                                  colorOptions: e,
                              }),
                              (0, T.jsx)("div", { className: gE.on }),
                          ],
                      }),
                (0, T.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gE.KB,
                    children: (function () {
                        if (l) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uk.$g)(c.amount, c.currency);
                            return V.intl.format(gA.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? t$.Cq,
                                  regularPrice: g,
                                  renewalDate: aN.Ay.getExpectedRenewalDate(t, o),
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
    return (0, T.jsx)(gc.A, { variant: void 0, subscriptionTier: t$.pe.TIER_2, interval: d.interval });
}
function gp() {
    let e = (0, cY.k5)(),
        t = (0, cY.nf)(),
        n = (0, cl.Ay)(),
        i = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        s = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cw.A)(),
        a = (0, cX.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, T.jsxs)("div", {
        className: ic()(gE.$Y, { [gE.J5]: e || d }),
        children: [
            (0, T.jsxs)("div", {
                className: gE.jp,
                children: [
                    l
                        ? (0, T.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gE._K,
                              children: (0, gm.DP)(),
                          })
                        : (0, T.jsx)(cz.A, { className: gE.TJ }),
                    l && !e
                        ? (0, T.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, T.jsxs)(T.Fragment, {
                                children: [
                                    (0, T.jsx)(gd.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gE.LW,
                                        colorOptions: gd.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, T.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gE.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: ey.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, T.jsx)(gS, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)(gd.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gE.uS,
                                            colorOptions: (0, cV.M)(n)
                                                ? gd.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gd.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, T.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gE.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, T.jsx)(gg.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? gg.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? gg.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gg.Nz.FRACTIONAL_PREMIUM
                                : gg.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, T.jsxs)(l8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, T.jsx)(gu.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gh,
                                              target: gx,
                                          }),
                                              (0, tX.default)(),
                                              (0, dW.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, T.jsxs)(l8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, T.jsx)(j.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gh,
                                              target: gx,
                                          }),
                                              (0, tX.default)(),
                                              (0, dW.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: V.intl.string(V.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, T.jsx)(j.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
                className: gE.ah,
                children: (0, T.jsx)("img", { className: gE.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gT() {
    return (0, T.jsxs)("div", {
        className: gE.T1,
        children: [
            (0, T.jsx)("img", { className: gE.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, T.jsxs)("div", {
                className: gE.b4,
                children: [
                    (0, T.jsx)(C.D, {
                        className: gE.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, T.jsx)($.E, {
                        className: gE.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, T.jsx)(go.A, {
                        className: ic()(gE.Tp, gE._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gE.VV },
                        color: l4.$n.Colors.CUSTOM,
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
let gf = function () {
        let e = (0, dm.Hp)(),
            { analyticsLocations: t } = (0, eY.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
            s = (0, _.bG)([us.A], () => us.A.hasFetchedSubscriptions()),
            l = (0, cF.Y)(t$.T7),
            [r, a] = f.useState(!0),
            o = (0, cw.A)({ forceFetch: !0 }),
            u = (0, _.bG)([dz.A], () => {
                let e = dz.A.getMarketingComponentByType(cM.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oF.Fr || oF.v1) && null != u,
            c = f.useRef(null);
        (0, cZ.i)();
        let g = (0, cK.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oG.hP(), oG.$o(), (0, ck.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, T.jsx)(dt.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, T.jsx)(cB.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, T.jsx)(oj.y, {});
        let S = !!i?.hasActiveTrial;
        return (0, T.jsx)(eY.f5, {
            value: t,
            children: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, T.jsx)(cH.m, { config: u }),
                            (0, T.jsx)(gp, {}),
                            g && (0, T.jsx)(ga, {}),
                            !d && (0, T.jsx)(gT, {}),
                            (0, T.jsx)(cW.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !S,
                                selectedPlanColumnClassName: gE.JG,
                                selectedPlanTier: t$.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, T.jsx)(cU.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, T.jsx)("div", { ref: c, className: gE._Z }),
                    }),
                ],
            }),
        });
    },
    g_ = (0, h.E2)(x.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, aN.YE)(e, t$.PremiumTypes.TIER_2) ? (0, T.jsx)(gf, {}) : (0, T.jsx)(cG.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gI = (0, h.zZ)(x.X.NITRO_CATEGORY, { buildLayout: () => [g_] }),
    gN = (0, h.t_)(x.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: oT.L,
        buildLayout: () => [gI],
    }),
    gC = (0, h.i4)(x.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: ag.t,
        usePersistentBadge: function (e) {
            let t = (0, cP.e)(e);
            return f.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gN],
    });
var gy = n(104510),
    gb = n(820739),
    gv = n(859241),
    gj = n(527113),
    gO = n(338548),
    gL = n(776096),
    gR = n(711014),
    gD = n(178368),
    gP = n(809545),
    gG = n(168482);
function gM() {
    return (0, T.jsxs)("div", {
        className: gP.iE,
        children: [
            (0, T.jsx)("img", { className: gP.Kk, alt: "", src: gG }),
            (0, T.jsxs)("div", {
                className: gP.pq,
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
                    ((0, dW.pX)(I.BVt.GUILD_DISCOVERY), (0, tX.default)());
                },
            }),
        ],
    });
}
var gU = n(365199),
    gV = n(878678),
    gk = n(443865),
    gw = n(980707),
    gF = n(473145);
function gB(e) {
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
        case I.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = V.intl.string(V.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
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
                      iconLeft: gk.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gk.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, T.jsxs)(gw.W, {
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
                            (0, T.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gF.I5)(t)
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
var gz = n(545934),
    gY = n(548118),
    gX = n(987144),
    gH = n(864310),
    gW = n(290413);
function gK(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gH.A)(t.id);
    return (0, T.jsxs)("div", {
        className: n ?? gW.OA,
        children: [
            (0, T.jsx)(gY.Ay, { className: gW.$f, guild: t, size: gY.Ay.Sizes.MEDIUM }),
            (0, T.jsxs)("div", {
                className: gW.gI,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, T.jsxs)("div", {
                        className: gW.ew,
                        children: [
                            (0, T.jsxs)("div", {
                                className: gW.QW,
                                children: [
                                    (0, T.jsx)(gy._, {
                                        className: gW.Wz,
                                        color: n1.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, T.jsxs)(T.Fragment, {
                                    children: [
                                        (0, T.jsx)("div", { className: gW.zk }),
                                        (0, T.jsx)($.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gF.gb)(t.premiumTier, { useLevels: !1 }),
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
function gZ(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: gW.Nr,
              children: [
                  (0, T.jsx)(gK, { guild: n }),
                  (0, T.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gy._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, gX.g)({
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
var gq = n(747381);
let gQ =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function g$(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = f.useRef(null),
        a = (0, gF.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cw.A)(),
        c = f.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
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
                    (e >= I.TVA.TIER_2 && (n.push(V.intl.string(V.t.SztbtN)), n.push(V.intl.string(V.t["3GK91n"]))),
                        e >= I.TVA.TIER_3 && n.push(V.intl.string(V.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return V.intl.formatToPlainString(V.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        g = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? ow.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, T.jsxs)("div", {
        className: ic()(gq.iq, { [gq.Mt]: l }),
        children: [
            (0, T.jsxs)("div", {
                className: gq.kd,
                children: [
                    (0, T.jsx)("img", { alt: "", className: gq.bB, src: gQ }),
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
                                              (0, T.jsx)("div", { className: gq.zk }),
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
                                              (0, T.jsx)("div", { className: gq.zk }),
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
            (0, T.jsx)(aT.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, T.jsx)(gB, {
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
                        className: gq.Mj,
                        ...e,
                        children: (0, T.jsx)(gU.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gJ(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, _.bG)([sv.A], () => sv.A.getGuild(t), [t]);
    return (0, T.jsxs)("div", {
        className: gq.Nr,
        children: [
            (0, T.jsx)("div", {
                className: gq.MY,
                children:
                    null != l
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(gK, { guild: l, className: gq.OA }),
                                  (0, T.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tX.default)(),
                                              (0, gV.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, T.jsx)("div", {
                              className: gq.OA,
                              children: (0, T.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, T.jsx)(
                    g$,
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
function g0(e) {
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
                                gz.A.createFromServer(
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
                if ((!(0, gF.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, T.jsx)("div", {
        className: gq.kR,
        children: ow.default
            .keys(l)
            .map((e) => (0, T.jsx)(gJ, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var g1 = n(502572),
    g2 = n(983511),
    g3 = n(342744),
    g5 = n(496431);
let g4 = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, g5.A)(n);
    return (0, T.jsx)($.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var g6 = n(731536);
function g8(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gF.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === t$.xc.NONE;
    return 0 === l.length
        ? null
        : (0, T.jsxs)("div", {
              className: g6.Nr,
              children: [
                  (0, T.jsxs)("div", {
                      className: g6.MY,
                      children: [
                          (0, T.jsxs)("div", {
                              className: g6._L,
                              children: [
                                  (0, T.jsxs)("div", {
                                      className: g6.MD,
                                      children: [
                                          (0, T.jsx)("img", { alt: "", className: g6.F8, src: gQ }),
                                          (0, T.jsx)("div", {
                                              className: ic()(g6.qS, "theme-dark"),
                                              children: (0, T.jsx)("span", { className: g6.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsxs)("div", {
                                      className: g6.Qp,
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
                          (0, T.jsx)(g1.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, T.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gy._,
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
                                                              (0, gX.g)({
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
                      (0, T.jsx)(
                          g7,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gF.I5)(e),
                              isCanceled: (0, gF.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g7(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, T.jsx)(g4, { cooldown: u.getTime() })
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
        className: ic()(g6.iq, { [g6.Mt]: i }),
        children: [
            (0, T.jsxs)("div", {
                className: g6.kd,
                children: [(0, T.jsx)("img", { alt: "", className: g6.bB, src: gQ }), t],
            }),
            c &&
                (0, T.jsx)(aT.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, T.jsxs)(gw.W, {
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
                                                        (0, T.jsx)(g2.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, T.jsx)(g3.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: g6.Mj,
                            ...e,
                            children: (0, T.jsx)(gU.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var g9 = n(834612);
function me(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ey.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== t$.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, T.jsxs)("div", {
              className: g9.i,
              children: [
                  (0, T.jsxs)("div", {
                      className: g9.b,
                      children: [
                          (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, T.jsx)($.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(g0, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, T.jsx)(g8, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mt = n(333722),
    mn = n(9146);
function mi() {
    return (0, T.jsxs)("div", {
        className: mn.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, T.jsx)("div", {
                className: mn.kR,
                children: mt.s.map((e, t) => {
                    let n = e.icon;
                    return (0, T.jsxs)(
                        "div",
                        {
                            className: mn.Nr,
                            children: [
                                (0, T.jsx)(n, { className: mn.Kk }),
                                (0, T.jsx)($.E, {
                                    className: mn.h_,
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
var ms = n(847374),
    ml = n(232122),
    mr = n(665984);
function ma() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, T.jsxs)("div", {
        className: mr.iE,
        children: [
            (0, T.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, T.jsx)("ul", {
                className: mr.p_,
                children: ml.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, T.jsxs)(
                        n4.D,
                        {
                            tag: "li",
                            className: ic()(mr.Aw, { [mr.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, T.jsxs)("div", {
                                    className: mr.k7,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            className: mr.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, T.jsx)(ms.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mr.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsx)($.E, {
                                        className: mr.ZF,
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
var mo = n(182859),
    mu = n(25525),
    md = n(416763);
function mc() {
    let e = ey.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, T.jsxs)("div", {
        className: md.wx,
        children: [
            (0, T.jsxs)("div", {
                className: md.Qs,
                children: [
                    (0, T.jsxs)("div", {
                        className: md.B5,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: md.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(mu.default.hjvcLO),
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
            (0, T.jsx)(mo.A, {
                variant: "member",
                className: md.iO,
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
var mg = n(315629),
    mm = n(87719),
    mA = n(961085);
function mE() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == e || aN.Ay.hasFreeBoosts(e)) return null;
    let t = ey.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(mg.h, {
        color: "nitro-pink",
        className: mA.vK,
        children: [
            (0, T.jsxs)("div", {
                className: mA.nw,
                children: [
                    (0, T.jsx)("img", { alt: "", className: mA.q3, src: gQ }),
                    (0, T.jsxs)("div", {
                        className: mA.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: t$.M4, boostCount: t$.M4 }),
                            }),
                            (0, T.jsxs)("div", {
                                className: mA.xv,
                                children: [
                                    (0, T.jsx)(ag.t, { className: mA.nE }),
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
                icon: ag.t,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mm.e,
            }),
        ],
    });
}
var mh = n(532991);
function mx() {
    let e = (0, _.bG)([gL.A], () => gL.A.affinities),
        t = (0, _.bG)([gR.Ay], () => gR.Ay.getFlattenedGuildIds()),
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
              className: mh.i,
              children: [
                  (0, T.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, T.jsx)("div", { className: mh.k, children: n.map((e) => (0, T.jsx)(gZ, { guildId: e }, e)) }),
              ],
          });
}
var mS = n(967246);
function mp(e) {
    let { count: t } = e,
        i = ey.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, T.jsxs)(mg.h, {
        color: "nitro-pink",
        className: mS.vK,
        children: [
            (0, T.jsxs)("div", {
                className: mS.nw,
                children: [
                    (0, T.jsxs)("div", {
                        className: mS.MD,
                        children: [
                            (0, T.jsx)("img", { alt: "", className: mS.F8, src: gQ }),
                            (0, T.jsx)("div", {
                                className: ic()(mS.qS, "theme-dark"),
                                children: (0, T.jsx)("span", { className: mS.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mS.Tm,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, T.jsxs)("div", {
                                className: mS.xv,
                                children: [
                                    (0, T.jsx)(ag.t, { className: mS.nE }),
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
                icon: gy._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, sp.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, T.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gX.g)({
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
var mT = n(89150);
function mf(e) {
    let { premiumSubscription: t } = e,
        n = (0, _.bG)([gD.A], () => gD.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        s = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        l = (0, _.bG)([gL.A], () => gL.A.affinities),
        r = (0, _.bG)([gR.Ay], () => gR.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, _.bG)([gv.A], () => gv.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cw.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t$.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, T.jsxs)("div", {
        className: mT.GO,
        children: [
            (0, T.jsx)(dt.kb, { className: mT.ek }),
            (0, T.jsx)(mc, {}),
            (0, T.jsx)(mE, {}),
            g > 0 && (0, T.jsx)(mp, { count: g }),
            d && (0, T.jsx)(gO.A, {}),
            !a && (0, T.jsx)(gM, {}),
            (0, T.jsxs)("div", {
                className: mT.C_,
                children: [
                    (0, T.jsx)(me, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, T.jsx)(mx, {}),
                    (0, T.jsx)(gj.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, T.jsx)(mi, {}),
                    (0, T.jsx)(ma, {}),
                ],
            }),
        ],
    });
}
var m_ = n(819677);
let mI = (0, h.E2)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (oG.hP(), oG.$o(), (0, gb.CD)(), (0, ck.zS)(null, null, I.tF5.DISCOVERY), (0, gb.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, _.cf)([us.A], () => ({
                    hasFetchedSubscriptions: us.A.hasFetchedSubscriptions(),
                    premiumSubscription: us.A.getPremiumTypeSubscription(),
                })),
                n = (0, cF.Y)(),
                i = (0, _.bG)([ui.A], () => ui.A.hasFetchedPaymentSources),
                s = (0, _.bG)([gv.A], () => gv.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = f.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, T.jsx)("div", { className: ic()(m_.kL, m_.Lq), children: (0, T.jsx)(oj.y, {}) })
                : (0, T.jsxs)("div", {
                      className: m_.kL,
                      children: [
                          (0, T.jsx)("div", { className: m_.Tp }),
                          (0, T.jsx)("div", { className: m_.Qs, children: (0, T.jsx)(mf, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mN = (0, h.zZ)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mI] }),
    mC = (0, h.t_)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mN],
    }),
    my = (0, h.i4)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gy._,
        buildLayout: () => [mC],
    });
var mb = n(153659),
    mv = n(155984),
    mj = n(357758),
    mO = n(262077),
    mL = n(281445),
    mR = n(624479),
    mD = n(626584),
    mP = n(131607),
    mG = n(95035),
    mM = n(196736),
    mU = n(685743),
    mV = n(349085),
    mk = n(342942),
    mw = n(376205),
    mF = n(252589),
    mB = n(758836),
    mz = n(49999),
    mY = n(394107),
    mX = n(439050);
let mH = new mD.A("GameServerSubscriptionsSection");
function mW(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mK(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mZ = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, mV.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mP.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = d4.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mU.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, mk.A)({
                provider: mL.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mz.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: S,
            isDanger: p,
        } = (0, _.bG)(
            [us.A, d8.A],
            () => {
                let e = null != l ? us.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? d8.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, uk.$g)(u, o.priceCurrency) })
                            : null,
                    c = mW(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(mY.default["3aEgK6"], { date: c })
                        : s
                          ? V.intl.formatToPlainString(mY.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(mY.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mK,
        ),
        N = f.useCallback(() => {
            if (null == l) return;
            let e = us.A.getSubscriptionById(l),
                t = null != e ? mW(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(mY.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(mY.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(mY.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oG.M2(l, s), await oG.hP());
                    } catch (e) {
                        mH.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = f.useCallback(() => {
            if (null == l) return;
            let e = us.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d8.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uk.$g)(u, o.priceCurrency) : "",
                c = mW(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(mY.default.o96qbc),
                subtitle: V.intl.formatToPlainString(mY.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, ck.ur)(r);
                        let t = e.items;
                        (await oG.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aN.UC)(t, e.currency),
                            s,
                        ),
                            await oG.hP());
                    } catch (e) {
                        mH.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, T.jsxs)("div", {
        className: mX.nM,
        children: [
            (0, T.jsxs)("div", {
                className: mX.M4,
                children: [
                    (0, T.jsxs)("div", {
                        className: mX.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, T.jsx)("img", { className: mX.uP, src: a, alt: "" }),
                            (0, T.jsx)("div", { className: mX.tw }),
                        ],
                    }),
                    (0, T.jsxs)("div", {
                        className: mX.CR,
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
                                          className: mX.CQ,
                                          children: [
                                              (0, T.jsx)($.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, T.jsx)(n4.D, {
                                                  className: mX.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, T.jsx)(uX.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, T.jsx)(mR.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, T.jsx)(mG.A, { onClick: A, children: V.intl.string(mY.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, T.jsxs)("div", {
                className: mX.Rd,
                children: [
                    (0, T.jsxs)("div", {
                        className: mX.Ff,
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
                                          className: mX.ez,
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
function mq(e) {
    let { servers: t } = e,
        n = (0, mM.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mF.Y)(),
        s = (0, _.bG)([lS.default], () => aN.Ay.canUseShopDiscounts(lS.default.getCurrentUser())),
        l = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, _.yK)([us.A], () => (0, mw.HY)(t, i, (e) => us.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !d8.A.isLoadedForSKU(e) && !d8.A.isFetchingForSKU(e));
        e.length > 0 && (0, ck.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tX.default)(), (0, dW.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mB.G2.GAME_SERVERS)));
    }, []);
    return (0, T.jsxs)("div", {
        className: mX.uW,
        children: [
            (0, T.jsxs)("div", {
                className: mX.wx,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(mY.default.vCzwM7),
                    }),
                    (0, T.jsxs)("div", {
                        className: mX.h_,
                        children: [
                            (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(mY.default.y85Eg9),
                            }),
                            n &&
                                (0, T.jsx)(mG.A, {
                                    onClick: a,
                                    children: (0, T.jsx)($.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(mY.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", {
                className: mX.p_,
                children: t.map((e) =>
                    (0, T.jsx)(mZ, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mQ = n(55766),
    m$ = n(696986),
    mJ = n(364036);
function m0(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, T.jsx)(m$.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: mJ.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, T.jsx)(m$.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: mJ.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mJ.RI }),
                    (0, T.jsxs)("div", {
                        className: mJ.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: mJ.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: mJ.h_,
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
var m1 = n(872351),
    m2 = n(9113),
    m3 = n(599941),
    m5 = n(384684),
    m4 = n(2242);
let m6 = [];
var m8 = n(885574),
    m7 = n(62010),
    m9 = n(912851),
    Ae = n(182744);
let At = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, T.jsx)(n4.D, {
        onClick: i ? void 0 : n,
        className: Ae.x6,
        children: (0, T.jsxs)("div", {
            className: Ae.hQ,
            children: [
                i
                    ? (0, T.jsx)(oj.y, { type: oj.y.Type.PULSING_ELLIPSIS, className: Ae.__invalid_spinner })
                    : (0, T.jsx)($.E, { variant: "text-md/medium", className: Ae.Pf, children: t }),
                (0, T.jsx)(ms.a, { size: "md", color: "currentColor", className: Ae.UE }),
            ],
        }),
    });
};
var An = n(465932),
    Ai = n(543767),
    As = n(951555),
    Al = n(790284),
    Ar = n(636194),
    Aa = n(624456),
    Ao = n(710144),
    Au = n(815332),
    Ad = n(162093),
    Ac = n(557506);
function Ag(e) {
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
                        return (n(!0), await oG.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === m4.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === m4.bN.INTANGIBLE),
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
                (0, T.jsx)(Ad.x, { listingId: i.id, guildId: n.guild_id, className: Ac.P }),
            ],
        }),
    });
}
var Am = n(319225),
    AA = n(746080),
    AE = n(883616);
function Ah(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, T.jsxs)("div", {
        className: AE.L0,
        children: [
            (0, T.jsxs)("div", {
                className: AE.a5,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: AE.HU, children: t }),
                    i &&
                        (0, T.jsx)(sg.m, {
                            text: s,
                            children: (0, T.jsx)(m8.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AE.Mo,
                            }),
                        }),
                ],
            }),
            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", className: AE.sx, children: n }),
        ],
    });
}
function Ax(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eY.Ay)(),
        [i] = (0, Ai.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, _.yK)([ui.A], () => [ui.A.hasFetchedPaymentSources, ui.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, T.jsx)(As.A, { subscription: t, currentInvoicePreview: i })
        : (0, T.jsx)(oj.y, {});
}
function AS(e) {
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
                  className: AE.__invalid_rowButtons,
                  children: n
                      ? (0, T.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, T.jsxs)(T.Fragment, {
                            children: [
                                !t && !s && (0, T.jsx)(At, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, T.jsx)(At, { label: V.intl.string(V.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Ap = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Aa.M)(e),
                n = (0, _.bG)([Ar.A], () => Ar.A.getSubscriptionListingForPlan(t)),
                i = (0, _.bG)([Ar.A], () =>
                    null != n ? Ar.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, _.bG)([sv.A], () => sv.A.getGuild(i?.guild_id)),
                [l, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, m3.XE)();
            f.useEffect(() => {
                l && null != s && null == Ar.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uk.$g)(t.price, t.currency) : "",
                              s = im()(t.createdAt).format("M/D/YY"),
                              l = t.status === I.Dmq.CANCELED,
                              r = t.status === I.Dmq.PAST_DUE,
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, An.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oG.QP(t, c),
                (0, Am.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
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
        className: AE.kL,
        children: [
            (0, T.jsx)(Ao.A, {
                onClick: r,
                className: AE.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, T.jsxs)(T.Fragment, {
                        children: [
                            null != s && (0, T.jsx)(gY.Ay, { guild: s, active: !0, size: gY.Ay.Sizes.MEDIUM }),
                            (0, T.jsxs)("div", {
                                className: AE.if,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        className: AE.J5,
                                        children: null != s ? s.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, T.jsxs)("div", {
                                        className: AE.xp,
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-sm/normal",
                                                className: AE.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, T.jsx)(m7.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : y
                                                  ? (0, T.jsx)(m7.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, T.jsx)(sg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, T.jsx)("div", {
                                                              className: AE.qc,
                                                              children: (0, T.jsx)(m7.E, {
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
                                                          className: AE.Bi,
                                                          children: (0, T.jsx)(m7.E, {
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
                                children: (0, T.jsx)(ms.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(AE.D6, { [AE.S7]: l }),
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
                          (0, T.jsx)("div", { className: AE.yF }),
                          (0, T.jsx)(Au.A, { groupListingId: i.id, subscription: t, className: AE.kE }),
                          (0, T.jsxs)("div", {
                              className: AE.Zx,
                              children: [
                                  (0, T.jsx)(Ah, { label: C, value: N }),
                                  (0, T.jsx)(Ah, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: S,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, T.jsx)(Ah, { label: V.intl.string(V.t.AOcwWB), value: p }),
                              ],
                          }),
                          (0, T.jsx)(m$.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, T.jsx)(su.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, T.jsx)(Ax, { subscription: t }),
                              }),
                          !b &&
                              (0, T.jsx)(AS, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sp.openModal)((t) => (0, T.jsx)(Ag, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, dW.pX)(I.BVt.CHANNEL(s.id, AA.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tX.default)(),
                                          m9.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (Al.A.setState({ subsection: eL.nR }),
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
var AT = n(661097);
let Af = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, _.bG)([m5.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m5.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? m4.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m4.M_.NONE
                                  : m4.M_.IN_SUBSCRIPTION_SERVER;
                        })([m5.A]),
                    ) === m4.M_.SUBSCRIBED,
                n = (0, _.bG)([us.A], () => us.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = us.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !us.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oG.hP());
                }, [e, t]),
                n ?? m6
            );
        })(),
        { loading: i } = (0, m3.eb)(n);
    return ((0, m2.A)(oF.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, T.jsx)(oj.y, {})
        : 0 === n.length
          ? null
          : (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: m1.z, variant: "secondary", onClick: t }),
                    (0, T.jsx)(m$.h, { size: 10 }),
                    (0, T.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, T.jsx)("div", {
                            className: AT.A,
                            children: n.map((e) => (0, T.jsx)(Ap, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var A_ = n(327479),
    AI = n(932012);
function AN(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, T.jsx)(m$.h, { size: 4 }),
            (0, T.jsx)($.E, { variant: "text-md/normal", className: AI.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, T.jsx)(m$.h, { size: 24 }),
            (0, T.jsxs)("div", {
                className: AI.Nr,
                children: [
                    (0, T.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AI._e }),
                    (0, T.jsxs)("div", {
                        className: AI.FS,
                        children: [
                            (0, T.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AI.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, T.jsx)($.E, {
                                variant: "text-md/normal",
                                className: AI.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(A_.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AC = n(548411),
    Ay = n(417098),
    Ab = n(143582),
    Av = n(915043),
    Aj = n(631466);
function AO(e) {
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
        className: ic()(Aj.iE, t),
        children: [
            (0, T.jsx)("div", { className: ic()(Aj.wx, i), children: n }),
            l && (0, T.jsx)("div", { className: Aj.Qs, children: s }),
        ],
    });
}
var AL = n(885996),
    AR = n(144165),
    AD = n(664121),
    AP = n(950305),
    AG = n(943775),
    AM = n(123791),
    AU = n(900797),
    AV = n(611643);
let Ak = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function Aw(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        s = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, T.jsx)(Ak.Provider, { value: s, children: t(n) });
}
Aw.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = f.useContext(Ak),
        l = i ? AU.t : ms.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, T.jsxs)(n4.D, {
        className: ic()(AV.L, t),
        onClick: s,
        children: [
            (0, T.jsx)($.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, T.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AF = n(627363),
    AB = n(243217),
    Az = n(328968),
    AY = n(163437),
    AX = n(3432);
function AH(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AW = n(562312),
    AK = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function AZ(e) {
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
        } = (0, _.cf)(
            [d8.A, d7.A, Az.A, sv.A],
            () => {
                let e,
                    n = d8.A.get(r),
                    i = null != n ? d7.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? Az.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AY.PJ)(o.skuFlags),
                    d = u && null != s ? sv.A.getGuild(s) : void 0,
                    c = (0, AY.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = d8.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, AF.YY)(a),
        x = f.useMemo(() => (null != h ? (0, AG.A)(h, 100) : null), [h]),
        S = g?.deleted ?? !1,
        p = null != g && (0, AY.Se)(g),
        N = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, eY.Ay)(),
        [b] = (0, Ai.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = AH(t.currentPeriodEnd),
        j = 0 === i;
    return (0, T.jsxs)(AO, {
        headerClassName: AW.dL,
        header:
            !1 === j
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsxs)("div", {
                              className: AW.VW,
                              children: [
                                  null != x &&
                                      (0, T.jsx)(AR._, { src: x.href, imageClassName: AW.Z2, width: 40, height: 40 }),
                                  (0, T.jsxs)("div", {
                                      className: AW.aF,
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
                              className: AW.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, T.jsx)(A0, {
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
                : (0, T.jsx)(oj.y, { type: oj.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, T.jsx)(AJ, {
                    type: "warning",
                    title: p
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, T.jsx)(AJ, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, T.jsx)(AJ, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, T.jsxs)("div", {
                className: AW.zH,
                children: [
                    (0, T.jsx)(A$, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, T.jsxs)(T.Fragment, {
                                  children: [
                                      (0, T.jsxs)("span", {
                                          className: AW.yW,
                                          children: [(0, T.jsx)(AD.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, T.jsxs)("span", {
                                              className: AW._t,
                                              children: [
                                                  (0, T.jsx)($.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, T.jsx)(gY.Ay, { guild: c, size: gY.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, T.jsxs)("span", {
                                  className: AW.yW,
                                  children: [(0, T.jsx)(AP.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, T.jsx)(Aq, { invoicePreview: b, subscriptionPlan: o }),
                    (0, T.jsx)(A$, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: AH(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, T.jsx)(AQ, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, T.jsx)(A2, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: S,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, T.jsx)(A1, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Aq(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, T.jsx)(A$, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, uk.CE)((0, uk.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, T.jsx)(A$, { title: V.intl.string(V.t.KI7ERx), content: i });
    let l = (0, uk.CE)((0, uk.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, T.jsx)(A$, {
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
function AQ(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uk.CE)((0, uk.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, T.jsx)(A$, {
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
    return (0, T.jsx)(A$, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function A$(e) {
    let { title: t, content: n } = e;
    return (0, T.jsxs)("div", {
        className: AW.nM,
        children: [
            (0, T.jsx)($.E, { variant: "text-sm/medium", children: t }),
            (0, T.jsx)($.E, { variant: "text-sm/medium", className: AW.u4, children: n }),
        ],
    });
}
function AJ(e) {
    let { type: t, title: n } = e;
    return (0, T.jsx)("div", {
        className: AW.Xm,
        children: (0, T.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function A0(e) {
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
        c = (0, AY.Se)(s),
        { analyticsLocations: g } = (0, eY.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, AM.C)(t.id),
        h = (0, _.bG)([d7.A], () => d7.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, oG.QP)(l, g);
            if (null == e) return;
            (0, sp.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, T.jsx)(t, { ...n, storeListing: i, subscription: AB.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, T.jsxs)("div", {
        className: AW.fw,
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
function A1(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, T.jsx)(Aw, {
        children: (e) =>
            (0, T.jsxs)("div", {
                className: AW.PX,
                children: [
                    (0, T.jsxs)("div", {
                        className: AW.wV,
                        children: [
                            e && (0, T.jsx)($.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, T.jsx)(Aw.Toggle, {
                                className: AW.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, T.jsx)(AL.FY, { header: i, icon: (0, AX.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function A2(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, T.jsx)("div", {
                className: AW.Ji,
                children: (0, T.jsx)(su.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, T.jsx)(oj.y, { type: oj.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, T.jsx)("div", {
                  className: AW.Ji,
                  children: (0, T.jsxs)(Ay.$T, {
                      color: Ay.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, T.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, T.jsx)("div", {
                  className: AW.Ji,
                  children: (0, T.jsx)(su.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, T.jsx)(As.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var A3 = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c);
n(938796);
var A5 = n(38405);
let A4 = (0, _.UT)(d8.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d8.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && A5.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, ck.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var A6 = n(240248),
    A8 = n(237218),
    A7 = n(763064);
function A9(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, T.jsx)("button", {
                className: A7.x6,
                onClick: () => l((e) => !e),
                children: (0, T.jsxs)($.E, {
                    className: A7.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        s
                            ? (0, T.jsx)(AU.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, T.jsx)(ms.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: A7.Qs,
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
var Ee = n(920352);
function Et(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, A8.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = A4(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aN._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, T.jsxs)(AO, {
              className: ic()(Ee.iE, i),
              header: (0, T.jsxs)(T.Fragment, {
                  children: [
                      (0, T.jsxs)("div", {
                          className: Ee.qd,
                          children: [
                              null != a &&
                                  (0, T.jsx)(AR._, { src: a.href, imageClassName: Ee.rW, width: 48, height: 48 }),
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
                  !(0, A6.uJ)(r) &&
                      (0, T.jsx)("div", {
                          className: Ee.h_,
                          children: (0, T.jsx)(A9, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, T.jsx)("div", {
                          className: Ee.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, T.jsx)(AL.FY, { header: n, icon: (0, AX.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var En = n(185438),
    Ei = n(683380);
function Es(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AG.A)(t, 100),
        u = (0, AY.PJ)(r.flags),
        d = u ? AD.R : AP.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, _.bG)([sv.A], () => (u && null != g ? sv.A.getGuild(g) : void 0), [g, u]),
        A = (0, _.bG)(
            [d7.A],
            () => {
                if (null != a) return d7.A.get(a);
            },
            [a],
        ),
        E = AH(n.currentPeriodEnd);
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsxs)("div", {
                className: Ei.wx,
                children: [
                    null != o && (0, T.jsx)(AR._, { src: o.href, imageClassName: Ei.Z2, width: 48, height: 48 }),
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, T.jsxs)("div", {
                                className: Ei.p4,
                                children: [
                                    (0, T.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: Ei.N4,
                                        children: [(0, T.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, T.jsxs)(T.Fragment, {
                                            children: [
                                                (0, T.jsx)($.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, T.jsxs)("span", {
                                                    className: Ei.vP,
                                                    children: [
                                                        (0, T.jsx)(gY.Ay, { guild: m, size: gY.Ay.Sizes.SMOL }),
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
            (0, T.jsx)(Aw, {
                children: (e) =>
                    (0, T.jsxs)("div", {
                        className: Ei._B,
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
                            (0, T.jsx)(Aw.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, T.jsxs)("div", {
                className: Ei.x0,
                children: [
                    (0, T.jsx)(Et, {
                        storeListing: i,
                        className: Ei.o3,
                        cta: (0, T.jsxs)("div", {
                            className: Ei.cJ,
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
                                  Et,
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
                            : (0, T.jsx)(El, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function El(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, En.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, T.jsx)(Et, {
        storeListing: t,
        cta: (0, T.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: s }),
    });
}
class Er extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, T.jsxs)(Ay.$T, {
                  color: Ay.Hv.DANGER,
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
function Ea(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = f.useState({ route: A3.HOME }),
        { route: l } = i;
    function r() {
        s({ route: A3.HOME });
    }
    let a = (e) => {
            (s({ route: A3.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AK.LOADING })),
                (0, Ab._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AK.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AK.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Av.E)(),
        c = d !== Av.mJ.LOADED;
    switch (l) {
        case A3.HOME:
            return (0, T.jsx)(T.Fragment, {
                children: t.map((e) =>
                    (0, T.jsx)(
                        Er,
                        {
                            subscription: e,
                            children: (0, T.jsx)(AZ, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AK.LOADING : (o[e.id] ?? AK.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case A3.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, T.jsx)(Es, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(l);
    }
}
var Eo = n(707989);
function Eu(e) {
    let { onGoBack: t } = e,
        n = (0, _.yK)(
            [us.A],
            () =>
                us.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = f.useState();
    return (
        null == i && (i = (0, T.jsx)(Ed, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, T.jsxs)("div", {
            children: [
                i,
                (0, T.jsx)("div", {
                    className: Eo.A,
                    children: (0, T.jsx)(Ea, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, T.jsx)(Ed, {
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
function Ed(e) {
    let { onBack: t, title: n } = e;
    return (0, T.jsxs)("div", {
        className: Eo.D,
        children: [
            (0, T.jsx)(sd.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, T.jsx)(AC.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, T.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Ec = n(366999),
    Eg = n(391659);
function Em(e) {
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
        ? ((t = V.intl.string(gA.default["/S02sx"])), (n = V.intl.string(gA.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === t$.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ic()({ [Eg.Hs]: i, [Eg.mT]: !i }),
        d = ic()({ [Eg.CQ]: i, [Eg.ZM]: !i }),
        c = ic()({ [Eg.EM]: !i });
    return (0, T.jsxs)("div", {
        className: Eg.r6,
        children: [
            (0, T.jsxs)("div", {
                className: Eg.Nv,
                children: [
                    (0, T.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, T.jsx)($.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, T.jsx)("div", {
                    className: Eg.ZS,
                    children: (0, T.jsx)("div", {
                        className: u,
                        children: (0, T.jsx)($.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let EA = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, aN.kX)(t),
        r = l.length > 0,
        a = (0, Ec.Ay)(t.endsAt, Ec.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, T.jsx)("div", {
        children: (0, T.jsxs)("div", {
            className: ic()(n, Eg.f8),
            children: [
                (0, T.jsx)("div", {
                    className: Eg.J_,
                    children: (0, T.jsxs)("div", {
                        className: Eg.Bh,
                        children: [
                            (0, T.jsx)("div", {
                                className: Eg.xt,
                                children: (0, T.jsx)(ag.t, { size: "md", color: "white", className: Eg.T8 }),
                            }),
                            (0, T.jsx)("div", {
                                className: Eg.pt,
                                children: (0, T.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, T.jsx)($.E, {
                                className: Eg.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, T.jsx)(Em, {
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
var EE = n(983048);
function Eh(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, _.yK)([d8.A], () => [d8.A.get(i), null != l ? d8.A.get(l.planId) : null]);
    if (null == o || aN.Ay.getInterval(i).intervalType !== t$.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aN.z4)(i),
        m = aN.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gA.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, aN._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, T.jsxs)("div", {
        className: Eg.Bh,
        children: [
            (0, T.jsx)("div", {
                className: ic()({
                    [Eg.bY]: g,
                    [Eg.sr]: o.skuId === t$.pe.TIER_0,
                    [Eg.lP]: o.skuId === t$.pe.TIER_1,
                    [Eg.eb]: o.skuId === t$.pe.TIER_2,
                }),
                children: g
                    ? (0, T.jsx)(gy._, { size: "md", color: "currentColor", className: Eg.Kk })
                    : (0, T.jsx)(ag.t, { size: "md", color: "currentColor", className: Eg.Kk }),
            }),
            (0, T.jsxs)("div", {
                className: Eg.pt,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, T.jsx)(C.D, {
                            className: Eg.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, T.jsx)($.E, {
                className: Eg.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let Ex = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, _.yK)([dK.A], () => dK.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, _.bG)([us.A], () => us.A.getPremiumSubscription()),
        r = (0, _.bG)([us.A], () => null == us.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t$.gD.PREMIUM_MONTH_TIER_1),
        o = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, T.jsxs)("div", {
        children: [
            (0, T.jsx)("div", {
                className: ic()(t, Eg.xF, Eg.J_),
                children: Object.keys(i).map((e) =>
                    (0, T.jsx)(
                        Eh,
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
                            className: Eg.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, T.jsx)(EE.i, {}),
                    ],
                }),
        ],
    });
};
var ES = n(902782);
function Ep(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        [l] = (0, Ai.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? ES.r : ES.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aN.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d8.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, uk.$g)(l.total, l.currency);
    return (
        u.interval === t$.WT.YEAR
            ? (t = V.intl.format(V.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === t$.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? V.intl.format(V.t.m27GpI, {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                        })
                      : V.intl.format(V.t["9xf5Vx"], {
                            price: d,
                            termsUrl: I.X7G.TERMS,
                            paidURL: I.X7G.PAID_TERMS,
                            privacyUrl: I.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, T.jsx)($.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function ET(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, T.jsx)(Ep, { subscription: t, withOverheadSeparator: n });
}
var Ef = n(580892),
    E_ = n(689255);
let EI = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function EN() {
    return (0, T.jsx)(oB.Z, {
        className: E_.wb,
        type: oB.Z.Types.CUSTOM,
        children: (0, T.jsxs)(sN.A, {
            align: sN.A.Align.CENTER,
            children: [
                (0, T.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: E_.pV }),
                (0, T.jsx)("span", { className: E_.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EC(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mj._)(e, t));
}
function Ey() {
    let e = (0, _.bG)([dK.A], () => dK.A.getForApplication(t$.tv), [], EC);
    return (
        f.useEffect(() => {
            (0, cS.LM)(t$.tv);
        }, []),
        (0, T.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aN.Ay.hasAccountCredit(e)
                    ? (0, T.jsx)(Ex, { className: E_.fX, entitlements: e })
                    : (0, T.jsx)(EN, {}),
        })
    );
}
function Eb() {
    return (0, T.jsx)("hr", { className: E_.hr });
}
let Ev = function () {
        var e;
        let t = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
            n = (0, mO.A)({ subscriptionFilter: (e) => Ef.Hy.has(e.status) }),
            i = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, _.bG)(
                [ui.A],
                () => (null != t && null != t.paymentSourceId ? ui.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, _.bG)([us.A], () => us.A.hasFetchedSubscriptions()),
            a = (0, _.bG)([oV.A], () => oV.A.isBusy),
            o = (0, cF.Y)(),
            u = Al.A.useField("subsection"),
            d = Al.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? EI[u] : x.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, _.bG)([us.A], () => us.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, _.bG)(
                [us.A],
                () =>
                    Object.values(us.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, _.bG)([us.A], () =>
                Object.values(us.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mQ.f)({ enabled: A }),
            h = (0, _.yK)([us.A], () => (0, mw.eP)(E, (e) => us.A.getSubscriptionById(e)), [E]),
            S = (0, cw.A)({ forceFetch: !0 }),
            p = (0, cX.ds)(),
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
                Al.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, ck.zS)(),
                oG.hP(),
                (0, gb.CD)(),
                oG.$o(),
                function () {
                    Al.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, T.jsx)(oT.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, T.jsx)(Af, { onGoBack: () => Al.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, T.jsx)(Eu, { onGoBack: () => Al.A.setState({ subsection: null }) })
                    : (0, T.jsx)("div", {
                          className: E_.kL,
                          children: (0, T.jsxs)("div", {
                              className: E_.Qs,
                              children: [
                                  s ? (0, T.jsx)(Ef.Sb, {}) : null,
                                  null != t
                                      ? (0, T.jsx)(Ef.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, T.jsx)(Ef.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, T.jsxs)("section", {
                                          children: [
                                              (0, T.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: E_.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, T.jsx)($.E, {
                                                  variant: "text-md/normal",
                                                  className: E_.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: ey.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, T.jsx)(EA, {
                                                  className: E_.fX,
                                                  fractionalPremiumInfo: S,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, T.jsx)(Ey, {}),
                                  m > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(Eb, {}),
                                              (0, T.jsx)(m0, {
                                                  count: m,
                                                  onClickManageSubscription: () => Al.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, T.jsxs)(T.Fragment, {
                                          children: [
                                              (0, T.jsx)(Eb, {}),
                                              (0, T.jsx)(AN, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (Al.A.setState({ subsection: eL.PZ }),
                                                          td.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  h.length > 0 &&
                                      (0, T.jsxs)("div", {
                                          ref: c,
                                          children: [(0, T.jsx)(Eb, {}), (0, T.jsx)(mq, { servers: h })],
                                      }),
                                  (0, T.jsx)(Eb, {}),
                                  null != t ? (0, T.jsx)(ET, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, T.jsx)("div", { className: ic()(E_.kL, E_.Lq), children: (0, T.jsx)(oj.y, {}) });
    },
    Ej = (0, h.E2)(x.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, T.jsx)(Ev, {}),
    }),
    EO = (0, h.zZ)(x.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [Ej],
    }),
    EL = (0, h.t_)(x.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [EO] }),
    ER = (0, h.i4)(x.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mb.L,
        usePersistentBadge: function () {
            let e = (0, mv.l)();
            return f.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, T.jsx)(iJ.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EL],
    }),
    ED = (0, h.WI)(x.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gC, my, ER, cD, dl],
    });
var EP = n(540999),
    EG = n(306471),
    EM = n(964355),
    EU = n(172272);
let EV = (0, h.zD)(x.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isAxeEnabled),
        setValue: (e) => (0, rm.x)({ axeEnabled: e }),
    }),
    Ek = (0, h.zD)(x.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Ew = n(276086),
    EF = n(354328);
let EB = (0, h.zD)(x.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EF.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Ew.L)("highlight_mana_components", e);
        },
    }),
    Ez = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EF.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, Ew.L)("highlight_mana_text_overrides", e);
        },
    }),
    EY = (0, h.zD)(x.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EF.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Ew.L)("highlight_mana_text", e);
        },
    }),
    EX = (0, h.zD)(x.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EF.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Ew.L)("highlight_void_toggleables", e);
        },
    }),
    EH = (0, h.sN)(x.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EU.YR,
        markers: Array.from({ length: EU.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EU.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            EU.Or.getState().setHorizontalSpacing(e);
        },
    }),
    EW = (0, h.zD)(x.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EK = (0, h.sN)(x.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: EU.YR,
        markers: Array.from({ length: EU.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => EU.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            EU.Or.getState().setVerticalSpacing(e);
        },
    }),
    EZ = (0, h.zZ)(x.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Ek, EW, EH, EK, EB, EY, Ez, EX, EV],
    });
var Eq = n(246605),
    EQ = n(274184);
function E$(e) {
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
let EJ = (0, h.E2)(x.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, _.bG)([EQ.Ay], () => EQ.Ay.getActionTriggeredSurveyOverride());
            return (0, T.jsx)(E$, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Eq.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    E0 = (0, h.zD)(x.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var E1 = n(396478),
    E2 = n(173936),
    E3 = n(103557),
    E5 = n(414079),
    E4 = n(148810),
    E6 = n(380610),
    E8 = n(986238),
    E7 = n(428524),
    E9 = n(252149),
    he = n(221851);
let ht = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hn = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hi(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hs extends f.Component {
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
            className: ic()(E7.oS, he.SX, E9.N, E7.nM),
            children: [
                (0, T.jsx)(E5.A, {
                    className: ic()(E7.lL, { [E7.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, T.jsxs)(sN.A, {
                    className: he.QB,
                    children: [
                        (0, T.jsx)(sN.A.Child, {
                            basis: "50%",
                            children: (0, T.jsx)(so.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hn,
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
                                className: E7.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, T.jsxs)($.E, {
                            variant: "text-sm/normal",
                            className: E7.AS,
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
class hl extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, E6.bD)();
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
        return K().without(ht, ...t);
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
        let t = await (0, E4.Zk)(e);
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
        (0, sp.openModal)((t) => (0, T.jsx)(hr, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, T.jsx)(E1.pp, {
            theme: nF.A.theme,
            className: ic()(he.eT, he.SX),
            children: (0, T.jsx)(E1.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, T.jsx)(
                      hs,
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
                      icon: E2.LinkIcon,
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
                    disabled: hi(t ?? {}),
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
            ? (0, T.jsx)(oj.y, { className: he.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                hi(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, T.jsxs)(l8.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hr extends f.Component {
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
            t = await (0, E4.SB)(e);
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
        return hi(this.props.buildOverrides ?? {});
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
            d = E8.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, T.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, T.jsx)(so.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: E8.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(so.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: E8.VP,
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
                    : (0, T.jsx)(E3.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, T.jsx)(E3.f, {
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
            actionBarInput: (0, T.jsx)(co.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let ha = (0, h.E2)(x.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hl });
var ho = n(256311),
    hu = n(883600);
let hd = (0, h.E2)(x.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, _.bG)([hu.A], () => hu.A.overrideId());
        async function t(e) {
            let t = hu.A.getChangelog(e, "en-US");
            return null != t ? t : ((await ho.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, T.jsx)(E$, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => ho.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hc = n(506774);
let hg = new Date("2018-01-01"),
    hm = (0, h.Tf)(x.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === ow.default.fromTimestamp(hg.getTime()),
        onClick: () => (hc.w.set("lastChangeLogDate", hg), U.pK.updateSetting(ow.default.fromTimestamp(hg.getTime()))),
    }),
    hA = (0, h.zD)(x.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, _.bG)([rA.default], () => rA.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, _.bG)(
                [rA.default],
                () => rA.default.disableAppCollectionsCache || rA.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rm.x)({ disableAppCollectionsCache: e }),
    }),
    hE = (0, h.zD)(x.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isForcedCanary),
        setValue: (e) => {
            (0, rm.x)({ canary: e });
        },
    }),
    hh = (0, h.zD)(x.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.sourceMapsEnabled),
        setValue: (e) => (0, rm.x)({ sourceMapsEnabled: e }),
    }),
    hx = (0, h.zD)(x.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rm.x)({ onlyShowPreviewAppCollections: e }),
    });
var hS = n(10094),
    hp = n(683760);
let hT = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t$.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t$.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t$.PremiumTypes.TIER_2 },
    ],
    hf = (0, h.Hn)(x.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hT,
        clearable: !0,
        useValue: () =>
            (0, _.bG)([hp.A], () => {
                let e = hp.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hS.O)(null, void 0)
                : null === e
                  ? (0, hS.O)(void 0, void 0)
                  : (0, hS.O)(0 === e ? null : e, void 0);
        },
    });
var h_ = n(374042);
let hI = (0, h.E2)(x.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, _.bG)([EQ.Ay], () => EQ.Ay.getSurveyOverride());
            return (0, T.jsx)(E$, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Eq.xr(e),
                fetchOverride: (e) => (0, h_.B)(e, !0) ?? null,
            });
        },
    }),
    hN = (0, h.zZ)(x.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hf, hI, EJ, hd, hm, hE, E0, hx, hA, hh, ha],
        useInlineNotice: () => ({
            type: p.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hC = (0, h.zD)(x.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rm.x)({ logAnalyticsEvents: e }),
    }),
    hy = (0, h.zD)(x.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rm.x)({ logGatewayEvents: e }),
    }),
    hb = (0, h.zD)(x.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.preventPopoutClose),
        setValue: (e) => (0, rm.x)({ preventPopoutClose: e }),
    }),
    hv = (0, h.zD)(x.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.logKeyboardMismatches),
        setValue: (e) => (0, rm.x)({ logKeyboardMismatches: e }),
    }),
    hj = (0, h.zD)(x.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rm.x)({ logOverlayEvents: e }),
    }),
    hO = (0, h.zD)(x.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingQuestEvents),
        setValue: (e) => (0, rm.x)({ logQuestEvents: e }),
    }),
    hL = (0, h.zD)(x.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isTracingRequests),
        setValue: (e) => (0, rm.x)({ trace: e }),
    }),
    hR = (0, h.zZ)(x.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hy, hj, hL, hC, hv, hb, hO] }),
    hD = (0, h.t_)(x.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hN, hR, EZ],
    }),
    hP = (0, h.i4)(x.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: EG.V,
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
                } = (0, _.cf)([rA.default, EP.A, lS.default], () => ({
                    layoutDebuggingEnabled: rA.default.layoutDebuggingEnabled,
                    isDeveloper: EP.A.isDeveloper,
                    isLoggingGatewayEvents: rA.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rA.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rA.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rA.default.isTracingRequests,
                    isForcedCanary: rA.default.isForcedCanary,
                    isSourceMapsEnabled: rA.default.sourceMapsEnabled,
                    isAxeEnabled: rA.default.isAxeEnabled,
                    preventPopoutClose: rA.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rA.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rA.default.disableAppCollectionsCache,
                    isStaff: lS.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, EU.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = EU.Or.getState(),
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
                                              (0, rm.x)({ canary: !r });
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
                                              (0, rm.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, rm.x)({ disableAppCollectionsCache: !d });
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
                                              (0, rm.x)({ logGatewayEvents: !n });
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
                                              (0, rm.x)({ logOverlayEvents: !i });
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
                                              (0, rm.x)({ logAnalyticsEvents: !s });
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
                                              (0, rm.x)({ trace: !l });
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
                                              (0, rm.x)({ preventPopoutClose: !o });
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
                                              (0, rm.x)({ axeEnabled: !a });
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
                                              (0, rm.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, T.jsx)(EM.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: EU.YR,
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
                                                          (0, T.jsx)(EM.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: EU.YR,
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
        buildLayout: () => [hD],
    });
var hG = n(127062),
    hM = n(25044),
    hU = n(80703),
    hV = n(123292),
    hk = n(683438),
    hw = n(890856),
    hF = n(100392),
    hB = n(102609),
    hz = n(271478),
    hY = n(386976),
    hX = n(257433),
    hH = n(32523),
    hW = n(96919),
    hK = n(688151),
    hZ = n(863763);
function hq(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = f.useState(s),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, _.bG)([d4.default], () => d4.default.getId()),
        c = (0, _.bG)([d4.default], () => {
            let e = d4.default.getInstallationForTracking();
            return null == e ? null : (0, hU.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hX.iN)(t, g),
        A = (0, hX.Fm)(t, g),
        E = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(hK.Vh.USER, n), (e) => {
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
                (0, uD.C)((0, hF.yA)(n), () => {
                    ((0, lg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, T.jsx)(hw.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hZ.DD,
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
                                    uD.p5 &&
                                        (0, T.jsx)(n4.D, {
                                            onClick: h,
                                            children: (0, T.jsx)(E2.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", {
                        className: hZ.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, T.jsx)("div", { className: hZ.Os, children: x });
    let S = "";
    return (
        (S =
            t.system === hB.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hK.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, T.jsxs)("div", {
            className: hZ.Os,
            children: [
                x,
                (0, T.jsx)("div", {
                    children: (0, T.jsx)(hz.g, {
                        label: t.system === hB.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, T.jsx)("div", {
                    className: hZ.h_,
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
                                  className: hZ.id,
                                  children: "Server Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hZ.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hZ.id,
                                  children: "Override Descriptor",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hZ.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hZ.id,
                                  children: "Recent Exposures",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hZ.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, T.jsx)("div", {
                          className: hZ.id,
                          children: (0, T.jsx)(hV.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, T.jsx)(sl.c, { className: hZ.yF }),
            ],
        })
    );
}
function hQ(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, _.bG)([rf.A], () => rf.A.getLoadedGuildExperiment(n)),
        d = (0, _.bG)([rf.A, sv.A, iq.A], () => {
            if (t.system === hB.l5.LEGACY) return null == rf.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(hK.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, _.yK)([d4.default, sv.A, rf.A, iq.A], () => {
            let e = t.system === hB.l5.LEGACY,
                i = t.name,
                s = d4.default.getId(),
                l = K().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rf.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hK.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hK.RE.NOT_ELIGIBLE);
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
        A = t.system !== hB.l5.LEGACY,
        E = (0, _.yK)([sv.A], () => K().sortBy(sv.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = f.useState(() => sj.A.getGuildId() ?? sj.A.getLastSelectedGuildId()),
        S = E.find((e) => e.id === h)?.name,
        p = (0, _.bG)(
            [iq.A],
            () => {
                if (A && null != h) return iq.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        I = (0, _.bG)([iq.A, d4.default], () => {
            if (!A) return;
            let e = d4.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != I && (I.isOverride || I.useAsEligibility),
        C = (0, T.jsx)(n4.D, {
            onClick: o,
            children: (0, T.jsxs)($.E, {
                variant: "text-md/medium",
                className: hZ.DD,
                children: [
                    (0, T.jsxs)("div", {
                        children: [
                            (0, T.jsx)("span", { children: t.title }),
                            (0, T.jsx)($.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, T.jsx)("span", { className: hZ.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, T.jsxs)("div", {
              className: hZ.Os,
              children: [
                  C,
                  (0, T.jsx)(hz.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, T.jsx)("div", {
                          className: hZ.h_,
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
                      className: hZ.h_,
                      children: d
                          ? (0, T.jsx)($.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hB.l5.LEGACY
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
                                  className: hZ.id,
                                  children: ["Server Descriptor", null != S ? ` (${S})` : ""],
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hZ.AS,
                                  children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-lg/medium",
                                  className: hZ.id,
                                  children: "Client Eligibility",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, T.jsx)($.E, {
                                  variant: "code",
                                  className: hZ.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hZ.id,
                                    children: "Guild Assignments",
                                }),
                                (0, T.jsx)($.E, { variant: "code", className: hZ.AS, children: g }),
                                t.system === hB.l5.LEGACY &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)($.E, {
                                                variant: "text-lg/medium",
                                                className: hZ.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, T.jsx)($.E, {
                                                variant: "code",
                                                className: hZ.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hZ.id,
                                    children: "Override Descriptor",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hZ.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-lg/medium",
                                    className: hZ.id,
                                    children: "Recent Exposures",
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "code",
                                    className: hZ.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, T.jsx)("div", {
                            className: hZ.id,
                            children: (0, T.jsx)(hV.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, T.jsx)(sl.c, { className: hZ.yF }),
              ],
          })
        : (0, T.jsx)("div", { className: hZ.Os, children: C });
}
let h$ = (0, h.E2)(x.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hY.op)(),
                { experiments: n, overridesInfo: i } = (0, hH.hI)(),
                s = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, _.bG)([d4.default], () => {
                    let e = d4.default.getInstallationForTracking();
                    return null == e ? null : (0, hU.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, hW.oC)((0, hW.R3)((0, hW.Fm)(s), l), a);
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
                                uD.p5 &&
                                    (0, T.jsx)(hV.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uD.C)(r, () => {
                                                (0, lg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, T.jsx)(hk.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hQ : hq;
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
                              className: hZ.p$,
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
    hJ = (0, h.zZ)(x.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [h$] }),
    h0 = (0, h.t_)(x.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hJ] }),
    h1 = (0, h.i4)(x.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hG.c,
        useMenu: hM.A,
        buildLayout: () => [h0],
    }),
    h2 = (0, h.WI)(x.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => EP.A.isDeveloper,
        buildLayout: () => [h1, hP],
    });
var h3 = n(682348),
    h5 = n(871633),
    h4 = n(751075),
    h6 = n(843402);
let h8 = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function h7() {
    let e = (0, _.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!1)),
        t = (0, _.bG)([i4.Ay], () => h8(...i4.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, h6.a2)(), h6.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, h5.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function h9(e) {
    let { gameHistory: t } = h7();
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
function xe(e) {
    let { namedGames: t, totalCount: n } = h9(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function xt() {
    let { namedGames: e } = h9(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        AF.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, s] = (0, _.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, T.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: h4.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, T.jsx)(i7.A, { game: s, size: i7.M.MEDIUM }), shape: h4.e0.ROUNDED } : null,
          };
}
let xn = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = xe(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = xt();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, _.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, h5.n1)(e))) && (0, nh.xl)(),
    }),
    xi = (0, h.gN)(x.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [xn] });
var xs = n(533440),
    xl = n(406535),
    xr = n(57129);
let xa = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(xr.default.A0FVCV),
        useSubtitle: () => V.intl.string(xr.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    xo = (0, h.zD)(x.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(xr.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(xr.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    xu = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [xs._, xa, xo, xi],
    }),
    xd = (0, h.AK)(x.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: x.X.DATA_AND_PRIVACY_PANEL,
    }),
    xc = (0, h.gN)(x.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [xd] });
var xg = n(365258);
let xm = (0, h.Qx)(x.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(xr.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(xr.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(xr.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(xr.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, xg.g8)(t, e);
        if (null == i) return;
        let s = (0, xg.Xc)(e);
        (0, sp.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, T.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var xA = n(498642),
    xE = n(573435),
    xh = n(260509),
    xx = n(771810);
function xS(e) {
    let { guild: t, size: n } = e,
        i = (0, xh.Iv)(t, n, !1, !0),
        s = (0, xh.Rb)(t);
    return null != i
        ? (0, T.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, T.jsx)("div", {
              className: xx.F,
              children: (0, T.jsx)($.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xp(e) {
    let { guild: t, size: n } = e;
    return (0, T.jsx)(xE.Ay, {
        className: xx.z,
        mask: xE.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, T.jsx)(xS, { guild: t, size: n }),
    });
}
var xT =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let xf = {
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
var x_ = n(618118);
function xI(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, _.bG)([xA.A], () => xA.A.getMemberCount(t.id));
    return (0, T.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, T.jsx)("div", { className: x_.FO, children: (0, T.jsx)(xp, { guild: t, size: 48 }) }),
            (0, T.jsx)("div", {
                className: x_.QH,
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
let xN = function (e) {
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
                s = (0, _.bG)([gR.Ay], () => gR.Ay.getFlattenedGuildIds()),
                l = (0, _.bG)([sv.A], () => sv.A.getGuilds()),
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
                [g, m] = (0, f.useState)(() => xf[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(xf[e](r, a)), i(e));
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
                { id: xT.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: xT.SERVER_ORDER },
                { id: xT.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: xT.RECENTLY_JOINED },
                { id: xT.ACTIVITY_SHARING_ON, label: V.intl.string(xr.default.ZI51JZ), value: xT.ACTIVITY_SHARING_ON },
                {
                    id: xT.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(xr.default["+kxafn"]),
                    value: xT.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, T.jsxs)("div", {
        className: x_.iE,
        children: [
            t,
            (0, T.jsxs)("div", {
                className: x_.N1,
                children: [
                    (0, T.jsx)(hk.I, {
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
                        placeholder: V.intl.string(V.t["H+nRYw"]),
                        "aria-label": V.intl.string(V.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, T.jsxs)("div", {
                            className: x_.gO,
                            children: [
                                (0, T.jsx)(aT.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, T.jsx)(gw.W, {
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
                                        (0, T.jsxs)(n4.D, {
                                            ...e,
                                            innerRef: A,
                                            className: x_.Ku,
                                            children: [
                                                (0, T.jsx)($.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, T.jsx)(ms.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, T.jsx)(hV.Q, {
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
                children: V.intl.format(xr.default.EvzDff, { count: n.length }),
            }),
            (0, T.jsxs)("ul", {
                className: x_.X1,
                id: m,
                "aria-label": V.intl.string(V.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, T.jsx)("div", {
                            className: x_.pb,
                            children: (0, T.jsx)($.E, {
                                className: x_.R$,
                                variant: "text-lg/medium",
                                children: V.intl.string(V.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, T.jsx)(
                            xI,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var xC = n(68322);
let xy = (0, h.E2)(x.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(xr.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, T.jsx)("div", {
                      className: xC.l,
                      children: (0, T.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(xr.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, T.jsx)(xN, { notice: e });
        },
    }),
    xb = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [xm, xy, xc],
    }),
    xv = (0, h.zD)(x.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(xr.default.khuuzv),
        useSubtitle: () => V.intl.string(xr.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    xj = (0, h.E2)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    xO = (0, h.zD)(x.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(xr.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(xr.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    xL = (0, h.zZ)(x.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(xr.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [xv, xO, xj],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    xR = (0, h.t_)(x.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [xu, xb, xL],
    }),
    xD = (0, h.i4)(x.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: h3._,
        buildLayout: () => [xR],
    });
var xP = n(712440),
    xG = n(370997);
let xM = (0, h.E2)(x.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: xG.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var xU = n(478016),
    xV = n(77468),
    xk = n(289498),
    xw = n(573648),
    xF = n(874490),
    xB = n(370480),
    xz = n(968309);
let xY = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xX = n(169869),
    xH = n(814925),
    xW = n(733110),
    xK = n(479785),
    xZ = n(757036),
    xq = n(555837),
    xQ = n(43990),
    x$ = n(241524),
    xJ = n(51965),
    x0 = n(377368),
    x1 = n(631368),
    x2 = n(212739),
    x3 = n(30370),
    x5 = n(181666),
    x4 = n(553875),
    x6 = n(660594);
function x8() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, x1.$)()),
            (t = (0, x2.O)()),
            (s = null != (i = (0, _.bG)([x3.A], () => x3.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === x1.C.NONE || t
                ? { variant: x1.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === x1.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eY.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, x0.yW)(a),
        u = (0, x$.A)("(max-width: 485px)");
    if (l === x1.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case x1.C.HAS_ACCESS:
        case x1.C.BLOCK_CLAIM:
            ((c = V.intl.string(x4.default["7PdsMK"])),
                (g = (0, T.jsx)(xJ.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(x4.default.CubeLC),
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
        case x1.C.NO_ACCESS:
            ((c = V.intl.string(x4.default.NwkRTZ)),
                (g = (0, T.jsx)(tY.A, {
                    defaultTextOverride: V.intl.string(x4.default["0vY+ie"]),
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
                className: x6.bV,
                children: [
                    (0, T.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, T.jsx)(ag.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, T.jsx)(xQ.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, T.jsx)("div", {
                        className: e,
                        children: (0, T.jsxs)("div", {
                            className: x6.Nr,
                            children: [
                                (0, T.jsxs)("div", {
                                    className: x6.Tp,
                                    children: [
                                        (0, T.jsx)("div", {
                                            className: x6.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, T.jsx)("div", { className: x6.$h }),
                                        (0, T.jsx)("div", { className: x6.Rv }),
                                        (0, T.jsx)("div", { className: x6.Lw }),
                                    ],
                                }),
                                (0, T.jsxs)("div", {
                                    className: x6.Mn,
                                    children: [
                                        (0, T.jsxs)("div", {
                                            className: x6.mY,
                                            children: [
                                                (0, T.jsx)("img", {
                                                    className: x6.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, T.jsx)($.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: x6.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, T.jsx)("div", { className: x6.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, T.jsxs)(T.Fragment, {
                                        children: [
                                            (0, T.jsx)("div", { className: x6.yF }),
                                            (0, T.jsxs)("div", {
                                                className: x6.sQ,
                                                children: [
                                                    (0, T.jsx)(uv.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, T.jsx)($.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(x5.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(x0.Hx.CONNECT),
                                                                    (0, xz.A)({
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
var x7 = n(201718),
    x9 = n(321078),
    Se = n(672130),
    St = n(379848),
    Sn = n(688901);
function Si(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(mz.i.AUTO_DISMISS), [t]),
        (0, T.jsx)("div", { className: Sn.Ad, children: (0, T.jsx)(m7.E, { type: "new", variant: "primary" }) })
    );
}
function Ss(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, T.jsxs)("div", {
        className: Sn.kL,
        children: [
            i,
            (0, T.jsxs)("div", {
                className: Sn.FS,
                children: [
                    (0, T.jsxs)("div", {
                        className: Sn.TK,
                        children: [
                            (0, T.jsx)(St.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, T.jsx)(Si, { markAsDismissed: n }) : null;
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
function Sl() {
    let e = ey.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, T.jsx)(Ss, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, T.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xz.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let Sr = "/assets/9df988a227916145.png";
function Sa() {
    return (0, T.jsx)(Ss, {
        title: V.intl.string(x5.default["9cLtDI"]),
        body: V.intl.format(x5.default["D+kUbg"], { learnMoreLink: ey.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, T.jsx)("img", { src: Sr, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xz.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function So() {
    let e = ey.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, T.jsx)(Ss, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, T.jsx)("img", { src: Sr, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xz.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Su = n(783419),
    Sd = n(534952),
    Sc = n(211180),
    Sg = n(247259);
function Sm(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, _.cf)(
            [x3.A],
            () => ({
                isJoining: x3.A.isJoining(n.id),
                joinErrorMessage:
                    "" === x3.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : x3.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== x3.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, _.bG)([sv.A], () => sv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, T.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    xV.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, T.jsxs)("div", {
            className: Sg.iA,
            children: [
                (0, T.jsxs)("div", {
                    className: Sg.XX,
                    children: [
                        (0, T.jsx)(gY.Ay, { size: gY.Ay.Sizes.SMALL, guild: n.guild, className: Sg.$f }),
                        (0, T.jsxs)("div", {
                            className: Sg.Vn,
                            children: [
                                (0, T.jsx)($.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, T.jsx)(nr.Anchor, {
                                    href: xw.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: Sg.R,
                        children: s,
                    }),
            ],
        })
    );
}
function SA(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xq.G)()), (i = (0, xZ.L)(t$.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, T.jsx)(Sa, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, T.jsx)(So, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, T.jsx)(Sl, {})
              : null;
}
function SE(e) {
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
        [_, N] = f.useState(null),
        [C, y] = f.useState(null),
        [b, v] = f.useState(!1),
        [O, L] = f.useState([]),
        R = (0, xF.ML)(u.type),
        D = xw.A.get(R);
    f.useEffect(() => {
        (m(u.friendSync), E(u.visibility), x(u.metadataVisibility), p(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: _, inProgressMetadataVisibility: C },
        G = f.useRef(P);
    return (
        f.useEffect(() => {
            G.current = P;
        }),
        f.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), xV.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (x(t), xV.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, T.jsxs)("div", {
            className: Sg.FI,
            children: [
                ((t = xw.A.get(u.type)),
                (n = xw.A.get(R)),
                (i = "1" === (u.metadata ?? {})[Su.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, T.jsx)(sg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, T.jsx)(xH.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, T.jsx)(xU.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, T.jsxs)("div", {
                    className: Sg.Il,
                    children: [
                        (0, T.jsx)("img", {
                            alt: n.name,
                            className: Sg.gj,
                            src: (0, cV.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, T.jsxs)("div", {
                            children: [
                                (0, T.jsxs)("div", {
                                    className: Sg.$p,
                                    children: [
                                        (0, T.jsx)($.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sg.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, T.jsx)("div", { className: Sg.cG, children: s }),
                                    ],
                                }),
                                (0, T.jsx)($.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sg.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(Sc.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, T.jsx)(n4.D, {
                            className: Sg.uH,
                            onClick: function () {
                                let e = xw.A.get(u.type);
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
                                            xY.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, T.jsx)(s9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, T.jsx)(uH.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, T.jsx)(SA, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xB.An)(t[Su.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xX.xE)(t, Sg.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xX.dy)(t, Sg.Nz);
                            break;
                        case I.fg2.LETTERBOXD:
                            n = (0, xX.uq)(t, Sg.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xX.ED)(t, Sg.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xX.ub)(t, Sg.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xX.gZ)(t, Sg.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xX.HU)(t, Sg.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, T.jsx)(
                                $.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sg.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xw.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, T.jsx)(
                                    "div",
                                    {
                                        className: Sg.Z3,
                                        children: (0, T.jsx)(m7.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, T.jsx)(
                                    $.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sg.vt,
                                        children: V.intl.format(V.t.Up2ni7, {
                                            helpdeskUrl: ey.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
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
                                    className: Sg.jy,
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
                                                      xV.A.refresh(e.type, e.id).finally(() => {
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
                        (0, T.jsx)("div", { className: Sg.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xV.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, T.jsx)(t4.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: S,
                        onChange: function (e) {
                            (p(e), xV.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xw.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, T.jsx)(t4.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, xz.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), xV.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, T.jsxs)("div", {
                    className: Sg.HZ,
                    children: [
                        (0, T.jsx)(t4.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xz.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), xV.A.setVisibility(u.type, u.id, n));
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
                                  (0, xz.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, T.jsx)(su.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, T.jsx)(Sm, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, T.jsx)(xK.A, { partner: u.type }),
            ],
        })
    );
}
function Sh(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, T.jsxs)("div", {
              className: Sg.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, T.jsxs)("div", {
                          className: Sg.Il,
                          children: [
                              (0, T.jsx)("img", { alt: n.name, className: ic()(Sg.gj, Sg.sN), src: i }),
                              (0, T.jsxs)("div", {
                                  children: [
                                      (0, T.jsx)("div", {
                                          className: Sg.$p,
                                          children: (0, T.jsx)($.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sg.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, T.jsx)($.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sg.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, T.jsx)(n4.D, {
                                  className: Sg.uH,
                                  onClick: () =>
                                      (0, xG.d1)(n, t.scopes, () => {
                                          xP.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, T.jsx)(uH.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, T.jsx)("div", {
                      className: Sg.HZ,
                      children: (0, T.jsx)(t4.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x7.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Sx() {
    let e = (0, xF.gn)(),
        t = (0, i3.A)((0, Sd.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, T.jsxs)("div", {
        className: Sg.lA,
        children: [
            t.map((e) => null != e && (0, T.jsx)(Se.A, { application: e, innerClassName: Sg.U$ }, e.id)),
            e.map((e) =>
                (0, T.jsx)(
                    xk.A,
                    { type: e.type, innerClassName: Sg.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function SS(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => xw.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, T.jsx)(oj.y, { type: oj.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, T.jsx)(E1.pp, {
                    theme: r,
                    className: Sg.p$,
                    children: (0, T.jsx)(E1.SG, {
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
                                Sh,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, T.jsx)(
                                SE,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            xV.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, T.jsx)("div", { className: Sg.V, children: t })
    );
}
let Sp = (0, h.E2)(x.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, T.jsx)(su.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, T.jsx)(Sx, {}) });
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
    ST = (0, h.E2)(x.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, _.bG)([x3.A], () => x3.A.isFetching()),
                n = (0, _.bG)([x3.A], () => x3.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, _.cf)([xW.default], () => ({
                    authorizedAppsFetchState: xW.default.getFetchState(),
                    authorizedApps: xW.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x9.A)(lS.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cl.Ay)(),
                o = (0, _.bG)([ul.default], () => ul.default.locale);
            return (f.useEffect(() => {
                i === xW.FetchState.NOT_FETCHED && xP.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(x8, {}),
                          (0, T.jsx)(SS, {
                              fetching: t || l || (r.length > 0 && i !== xW.FetchState.FETCHED),
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
            xV.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    Sf = (0, h.zZ)(x.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [Sp, ST],
    }),
    S_ = (0, h.zZ)(x.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [xM],
        initialize: () => (
            xP.A.fetch(),
            () => {
                xG.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    SI = (0, h.t_)(x.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: oT.L,
        buildLayout: () => [Sf, S_],
    }),
    SN = (0, h.i4)(x.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: E2.LinkIcon,
        buildLayout: () => [SI],
    });
var SC = n(625657),
    Sy = n(592598),
    Sb = n(773371),
    Sv = n(532294),
    Sj = n(672396);
let SO = SR(null);
function SL() {
    var e;
    let t = SR(SO);
    ((e = SO),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (SO = t)));
}
function SR(e) {
    let t = Sv.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sa.Ay.getOverlayKeybind(),
        s = sa.Ay.getOverlayChatKeybind();
    return {
        enabled: Sb.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Sy.A.isNotificationDisabled(Sj.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sx.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sx.dI)(s.shortcut) : null,
        text_opacity_slider: Sv.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Sb.default.enabled,
    };
}
var SD = n(237984),
    SP = n(63035);
function SG(e) {
    (e.preventDefault(), e.stopPropagation());
}
function SM(e) {
    let { children: t } = e;
    return (0, T.jsx)("div", { onClick: SG, children: t });
}
function SU(e) {
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
        className: ic()(SP.HS, d),
        children: [
            (0, T.jsxs)(hw.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, T.jsx)("div", { className: SP.x_, children: t }),
                    (0, T.jsxs)("div", {
                        className: SP.rN,
                        children: [
                            null != n && (0, T.jsx)("div", { className: SP.$t, children: n }),
                            (0, T.jsxs)("div", {
                                className: SP.c8,
                                children: [
                                    (0, T.jsx)($.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: SP.SZ,
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
                            (0, T.jsx)("div", { className: SP.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, T.jsx)("div", { className: SP.Om, children: a }),
        ],
    });
}
let SV = (0, h.E2)(x.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, T.jsx)(SU, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, T.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, SD.b)(tk.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var Sk = n(452295),
    Sw = n(684013),
    SF = n(56562),
    SB = n(311043),
    Sz = n(454908),
    SY = n(41984),
    SX = n(918825),
    SH = n(296027),
    SW = n(562519);
let SK = 5 * n(927813).A.Millis.DAY,
    SZ = new SW.A("overlay_survey_timestamps");
function Sq(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SZ.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < SK) ||
            Array.from(SZ.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sp.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SZ.add(i), (n) => (0, T.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SQ() {
    (0, se.sL)("overlay-settings");
}
function S$(e) {
    let { className: t, game: n } = e;
    return (0, se.NP)() && null != n && n.elevated
        ? (0, T.jsx)("div", {
              className: t,
              children: (0, T.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: ey.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: SQ },
              }),
          })
        : null;
}
var SJ = n(760751),
    S0 = n(9302),
    S1 = n(656513);
let S2 = new Set([
    SY.AR.INITIALIZING,
    SY.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    SY.AR.WAITING_FOR_MODULE_TRACKING,
    SY.AR.WAITING_FOR_OVERLAY_OPEN,
    SY.AR.WAITING_FOR_POPOUT_OPEN,
    SY.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    SY.AR.WAITING_FOR_REACT_INITIALIZATION,
    SY.AR.WAITING_FOR_PID_FOCUS,
    SY.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function S3(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = f.useState(!1);
    return (0, T.jsx)(S1.N, {
        className: SP.uR,
        collapsibleContent: (0, T.jsx)("div", { className: SP.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, T.jsx)(SU, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ic()(SP.AC, n),
                action: (0, T.jsxs)("div", {
                    className: SP.rc,
                    children: [
                        s.action,
                        l
                            ? (0, T.jsx)(ms.a, {
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
let S5 = (0, h.E2)(x.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, Sz.I)(e?.id);
        let n = e?.pid,
            i = (0, _.bG)(
                [SH.default],
                () => (null == e || null == n ? null : SH.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: s } = (0, Sz.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, _.cf)(
                [SJ.A, tc.A, SB.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i4.hw)(e, !1, [SJ.A, tc.A, SB.A]),
                [e, i],
            ),
            a = (0, _.bG)(
                [i4.Ay, SJ.A, tc.A, SB.A],
                () => (null == e ? null : (0, i4.xU)(e, i4.Ay, SJ.A, tc.A, SB.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(l),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, S0.supportsLegacy)(),
            E = !(0, S0.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, _.cf)([SH.default], () => SH.default.getGlobalEnabledStatus());
        function S(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SX.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), Sk.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SX.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), Sk.A.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SX.OverlayToggledClientSettingType.LEGACY:
                    (Sw.A.setEnabled(t, x), (0, SX.Q)(t, SX.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SX.OverlayToggledClientSettingType.OOP:
                    (Sw.A.setEnabled(h, t), (0, SX.Q)(t, SX.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                Sq(
                    i ? SX.OverlayToggledClientSettingType.LEGACY_GAME : SX.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let p = A && E,
            I = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === SY.Ue.Disabled,
            b = i?.state === SY.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && S2.has(i.state) && !y,
            j = i?.overlayMethod === SY.Ue.OutOfProcess,
            O = i?.overlayMethod === SY.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === SY.Ue.Hook,
            R = i?.state === SY.AR.OVERLAY_CRASHED || i?.state === SY.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== SF.aI.BORDERLESS_FULLSCREEN:
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
                    case I:
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
                        let e = i?.fullscreenType === SF.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            Sk.A.getDetectableGames();
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
            : (0, T.jsxs)(S3, {
                  onExpand: m,
                  className: g ? SP.tx : void 0,
                  title: (0, T.jsxs)(T.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, T.jsx)(sg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, T.jsx)(xH.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, T.jsx)(xU.U, {
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
                              ? (0, T.jsx)(dS.k, { size: "xxs", color: U })
                              : (0, T.jsx)("div", { className: SP.W4 }),
                          (0, T.jsx)($.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, T.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, T.jsx)(SM, {
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
                                          (Sk.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (Sw.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (Sw.A.setEnabled(t, t),
                                              Sk.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SX.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SX.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SX.OverlayToggledClientSettingType.OOP_GAME
                                                : SX.OverlayToggledClientSettingType.OOP),
                                      null != l && Sq(l, e.id ?? null));
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
                  warning: (0, T.jsx)(S$, { className: SP.Hh, game: e }),
                  children: [
                      (0, T.jsx)(SU, {
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
                                              ? S(e, SX.OverlayToggledClientSettingType.OOP)
                                              : S(e, SX.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: SP.Kz }),
                              ],
                          }),
                      }),
                      (0, T.jsx)(SU, {
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
                                              ? S(e, SX.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, SX.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, T.jsx)("div", { className: SP.Kz }),
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
var S4 = n(206885);
function S6(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, _.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, T.jsx)(i7.A, { game: s, pid: i, size: i7.M.SMALL });
}
function S8(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Sz.I)(t?.id);
    let o = (0, _.cf)([i4.Ay, SJ.A, tc.A, SB.A], () => (0, i4.xU)(t, i4.Ay, SJ.A, tc.A, SB.A)),
        u = (0, _.cf)([SJ.A, tc.A, SB.A], () => (0, i4.hw)(t, !1, [SJ.A, tc.A, SB.A]), [t]),
        d = s(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, T.jsx)(SU, {
            title: t.name,
            icon: (0, T.jsx)(S6, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(t4.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && Sq(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, T.jsx)("div", { className: SP.Kz }),
                ],
            }),
        })
    );
}
let S7 = (0, h.E2)(x.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, _.cf)([SH.default], () =>
                    SH.default.getGlobalEnabledStatus(),
                ),
                s = (0, _.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, h5.n1)(e)),
                l = (0, i3.A)(s.map((e) => e.id)),
                r = !(0, S0.supportsLegacy)();
            function a(e) {
                Sw.A.setEnabled(e, i);
                let t = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SX.Q)(e, SX.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Sq(SX.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                Sk.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, S0.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, T.jsx)(SU, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: SP.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              S4.O && (0, T.jsx)("div", { className: SP.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(S3, {
                      onExpand: t,
                      className: e ? SP.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, T.jsx)(SM, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: SP.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: SP.XG,
                              children: s.map((e, t) =>
                                  (0, T.jsx)(
                                      S8,
                                      {
                                          rawGame: e,
                                          clientSettingType: SX.OverlayToggledClientSettingType.LEGACY_GAME,
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
    S9 = (0, h.E2)(x.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, _.cf)([SH.default], () =>
                    SH.default.getGlobalEnabledStatus(),
                ),
                s = !(0, S0.supportsOutOfProcess)(),
                l = (0, _.yK)([i4.Ay], () => i4.Ay.getGamesSeen(!0)).filter((e) => !(0, h5.n1)(e)),
                r = (0, i3.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                Sw.A.setEnabled(i, e);
                let s = i4.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SX.Q)(e, SX.OverlayToggledClientSettingType.OOP, s),
                    t && Sq(SX.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                Sk.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (S4.O ? (s ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, T.jsx)(SU, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: SP.dA,
                      action: (0, T.jsxs)(T.Fragment, {
                          children: [
                              (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              S4.O && (0, T.jsx)("div", { className: SP.Kz }),
                          ],
                      }),
                  })
                : (0, T.jsxs)(S3, {
                      onExpand: t,
                      className: e ? SP.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, T.jsx)(SM, {
                          children: (0, T.jsx)(t4.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, T.jsx)("div", {
                              className: SP.SC,
                              children: (0, T.jsx)($.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, T.jsx)(y.Ip, {
                              className: SP.XG,
                              children: l.map((e, t) =>
                                  (0, T.jsx)(
                                      S8,
                                      {
                                          rawGame: e,
                                          clientSettingType: SX.OverlayToggledClientSettingType.OOP_GAME,
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
    pe = (0, h.zZ)(x.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [S5, S9, S7, SV],
    }),
    pt = (0, h.zD)(x.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, _.bG)([Sv.default], () => !Sv.default.disableClickableRegions),
        setValue: (e) => {
            Sw.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    pn = (0, h.E2)(x.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sa.Ay], () => sa.Ay.getOverlayKeybind()),
                t = !(0, S0.supportsLegacy)(),
                n = !(0, S0.supportsOutOfProcess)(),
                [i, s] = (0, _.yK)([i4.Ay], () => [i4.Ay.canShowAdminWarning, i4.Ay.getVisibleGame()], []),
                l = (0, se.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sa.DV)(e?.shortcut ?? []);
            return (0, T.jsx)("div", {
                className: SP.hc,
                children: (0, T.jsxs)("div", {
                    className: SP.eH,
                    children: [
                        (0, T.jsxs)("div", {
                            className: SP.Bu,
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
                                        className: SP.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, T.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: SP.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, T.jsx)("div", {
                            className: SP.IH,
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
var pi = n(515183),
    ps = n(682763);
let pl = (0, h.zD)(x.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, pi.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, _.bG)([Sy.A], () => Sy.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, pi.qJ)(e.pid);
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
            null != l && (0, ps.x8)(l.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    pr = (0, h.zZ)(x.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [pn, pl, pt] });
var pa = n(93465),
    po = n(222407);
let pu = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: pa.M.TEXT_CHAT,
        key: x.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: pa.M.WELCOME_GENERAL,
        key: x.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: pa.M.GO_LIVE_NUDGE,
        key: x.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: pa.M.GAME_ACTIVITY,
        key: x.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: pa.M.NOW_PLAYING,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: pa.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: x.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nT.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, _.bG)([Sy.A], () => Sy.A.isNotificationDisabledBySetting(pa.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pd(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, _.bG)([Sy.A], () => Sy.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, po.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let pc = (0, h.FW)(x.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pu.map(pd),
    }),
    pg = (0, h.zZ)(x.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [pc],
    }),
    pm = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, _.bG)([Sv.default], () => Sv.default.getAvatarSizeMode()),
        setValue: (e) => {
            Sw.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    pA = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, _.bG)([Sv.default], () => Sv.default.getDisplayNameMode()),
        setValue: (e) => {
            Sw.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    pE = (0, h.Hn)(x.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, _.bG)([Sv.default], () => Sv.default.getDisplayUserMode()),
        setValue: (e) => {
            Sw.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var ph = n(391973),
    px = n(233741),
    pS = n(897720),
    pp = n(32584);
function pT() {
    let e = px.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = pp.A.getWidget(e.id);
    return null != t && (0, pS.ZO)(t) ? t : null;
}
n(392164);
let pf = (0, h.sN)(x.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pT();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pT();
        null != t &&
            (e < 1
                ? (0, ph.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, ph.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var p_ = n(450740),
    pI = n(968898),
    pN = n(288737);
function pC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new pN.A({
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
        user: new c$.A({ id: s, username: e }),
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
let py = (0, h.E2)(x.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, _.cf)([Sv.default], () => ({
                    avatarSizeMode: Sv.default.getAvatarSizeMode(),
                    displayNameMode: Sv.default.getDisplayNameMode(),
                    displayUserMode: Sv.default.getDisplayUserMode(),
                })),
                [l] = f.useState(() => [
                    pC(V.intl.string(V.t.C0ZDvo), !0, !1),
                    pC(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    pC(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, _.bG)([px.A, pp.A], () => {
                    let e = px.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pp.A.getWidget(e.id);
                    return null != t && (0, pS.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pC(t.username)).user = t), e) : null, ...l].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, T.jsx)(xQ.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, T.jsxs)("div", {
                            className: ic()(SP.Y5, e),
                            children: [
                                (0, T.jsx)("div", {
                                    className: SP.kJ,
                                    children: (0, T.jsx)(p_.DH, {
                                        id: "voice-widget",
                                        title: V.intl.string(V.t.KNJ6Vq),
                                        channel: (0, G.createChannelRecord)({
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
                                (0, T.jsxs)("div", {
                                    className: SP.R$,
                                    children: [
                                        (0, T.jsx)(pI.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, T.jsx)(pI.CS, {}),
                                        (0, T.jsx)(pI.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, T.jsx)("div", { className: SP.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pb = (0, h.zZ)(x.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [py, pm, pA, pE, pf],
    });
var pv = n(97005),
    pj = n(667419),
    pO = n(776162),
    pL = n(114994),
    pR = n(371169),
    pD = n(671210);
let pP = {
    [I.uss.VOICE_V3]: x.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: x.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: x.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: x.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: x.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: x.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: x.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: x.X.OVERLAY_WIDGETS_STREAMS,
};
function pG(e) {
    let t = nf.A[e],
        n = pP[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, nT.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, _.bG)([pp.A], () => (0, pj.$e)(e, pp.A), []),
        setValue: (t) => {
            ((0, pj.j$)(), (0, pj.JA)(e, !t));
        },
    });
}
let pM = (0, h.FW)(x.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(pD.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(pD.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => pO.t3.flatMap(pG),
    }),
    pU = (0, h.E2)(x.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, _.bG)([pL.A], () => pL.A.getProjects());
            return (f.useEffect(() => {
                (0, pR.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, T.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, T.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(pD.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, T.jsx)(pO.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, pv.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(pD.default["pbu+Yx"])],
    }),
    pV = (0, h.Tf)(x.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pj.eL,
    }),
    pk = (0, h.zZ)(x.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(pD.default["Qk/rJB"]),
        usePredicate: n_.b_,
        buildLayout: () => [pM, pU, pV],
    });
var pw = n(54761);
function pF() {
    let [e, t] = (0, mP.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(mz.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, T.jsxs)(T.Fragment, {
              children: [
                  (0, T.jsxs)("div", {
                      className: pw.xC,
                      children: [
                          (0, T.jsx)("div", {
                              children: (0, T.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pw.tl,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              children: (0, T.jsxs)("div", {
                                  className: pw.vJ,
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
                                  className: pw.lh,
                              }),
                          }),
                          (0, T.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pw.VV,
                              children: (0, T.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(mz.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, T.jsx)(sl.c, { className: pw.yF }),
              ],
          });
}
function pB() {
    let e = (0, _.bG)([tu.A], () => tu.A.enabled),
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
                  (0, T.jsx)(sl.c, { className: pw.yF }),
              ],
          })
        : null;
}
let pz = (0, h.t_)(x.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                SL(),
                sa.Ay.addChangeListener(SL),
                Sy.A.addChangeListener(SL),
                Sv.default.addChangeListener(SL),
                Sb.default.addChangeListener(SL),
                e8.isPlatformEmbedded && (0, h6.a2)(),
                () => {
                    (sa.Ay.removeChangeListener(SL),
                        Sy.A.removeChangeListener(SL),
                        Sv.default.removeChangeListener(SL),
                        Sb.default.removeChangeListener(SL),
                        e8.isPlatformEmbedded && (0, h6.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(pF, {}), (0, T.jsx)(pB, {})] });
            },
        },
        buildLayout: () => [pe, pr, pk, pb, pg],
    }),
    pY = (0, h.i4)(x.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: SC.l,
        usePredicate: n_.b_,
        buildLayout: () => [pz],
    });
var pX = n(687966);
let pH = (0, h.AK)(x.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pW = (0, h.gN)(x.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pH] });
var pK = n(227309),
    pZ = n(29160),
    pq = n(552366),
    pQ = n(938442);
function p$(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, Sz.I)(t.id);
    let o = (0, _.cf)([i4.Ay, SJ.A, tc.A, SB.A], () => (0, i4.xU)(t, i4.Ay, SJ.A, tc.A, SB.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, _.cf)([i4.Ay], () => ({
            canToggleDetection: null == a || i4.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i4.Ay.isDetectionEnabled(o),
        })),
        c = (0, _.bG)([i4.Ay], () => i4.Ay.getVisibleGame()),
        [g, m] = f.useState(!1),
        A = f.useRef(null),
        E = null != c && (0, i4.Es)(o) === (0, i4.Es)(c),
        h = !s && !g,
        x = !i && !E,
        S = h || x,
        p = f.useMemo(
            () =>
                (0, h5.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(p ?? "???"),
        y = ic()(pQ.tR, {
            [pq.LO]: !i,
            [pq.Rw]: i,
            [pq.FB]: null != o && i,
            [pq.xL]: r,
            [pq.fG]: null != l && l.length > 0,
        });
    function b() {
        (Sk.A.deleteEntry(o),
            l?.forEach((e) => {
                Sk.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SJ.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, h5.n1)(o) ? o.gameName : o.name,
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
                        className: ic()(pq.$K, pQ.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, T.jsxs)("div", {
                                      className: pq.HS,
                                      children: [
                                          (0, T.jsx)("div", { className: pq.mO, children: p }),
                                          (0, T.jsx)(sg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, T.jsx)(xH.A, {
                                                  className: pq.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, T.jsx)(xU.U, {
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
                                      className: ic()(pq.mO, pq.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && Sk.A.editName(o, N);
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
                                        className: pq.GN,
                                        children: (0, T.jsx)(pZ.A, {
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
                        (0, T.jsx)(aT.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, T.jsx)(gw.W, {
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
                                    className: ic()(pq._Q, { [pq.g9]: t.isShown }),
                                    children: (0, T.jsx)(sg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, T.jsx)(sd.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gU.MoreHorizontalIcon,
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
                                                              (Sk.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : Sk.A.toggleDetection(o);
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
                    className: pq.AQ,
                    children: l.map((e, t) =>
                        (0, T.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, T.jsx)(p$, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, T.jsx)("div", { className: pq.PQ }),
                                ],
                            },
                            (0, i4.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pJ() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = h7();
    return 0 === e.length
        ? null
        : (0, T.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, T.jsx)(n3.n, {
                  children: (0, T.jsx)("div", {
                      children: e.map((e) =>
                          (0, T.jsx)(
                              p$,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pK.a7 ? t : void 0 },
                              (0, i4.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let p0 = (0, h.E2)(x.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, T.jsx)(pJ, {}),
});
var p1 = n(424994);
let p2 = (0, h.zZ)(x.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [p0, pW],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, _.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, h5.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: p1.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var p3 = n(890497),
    p5 = n(853270),
    p4 = n(969426);
function p6(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([i4.Ay], () => i4.Ay.getCandidateGames()),
        [i, s] = f.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, T.jsxs)(af.l, {
        className: ic()(p5.H, p4.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, T.jsx)(p3.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, T.jsxs)("div", {
                className: ic()(p5.o, pQ.xM),
                children: [
                    (0, T.jsx)(hV.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, T.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (Sk.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p8 = n(475007);
function p7() {
    let e = f.useRef(null);
    return (0, T.jsxs)("div", {
        className: ic()(p8.a, he.Gf),
        children: [
            (0, T.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, T.jsx)(aT.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, T.jsx)(p6, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, T.jsx)(hV.Q, {
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
function p9() {
    return (0, T.jsx)("div", {
        className: ic()(pQ.tR, pq.eS, pq.Rw),
        children: (0, T.jsxs)("div", {
            className: ic()(pq.$K, pQ.Vd),
            children: [
                (0, T.jsx)("div", { className: pq.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, T.jsx)(p7, {}),
            ],
        }),
    });
}
let Te = (0, h.E2)(x.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = h7(),
                n = (0, _.bG)([i4.Ay], () => i4.Ay.getVisibleGame());
            return null == n
                ? (0, T.jsx)(p9, {})
                : (0, T.jsxs)("div", {
                      className: ic()(pQ.Vd, pq.C2),
                      children: [
                          (0, T.jsx)(
                              p$,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pK.a7 ? e : void 0,
                              },
                              (0, i4.Es)(n),
                          ),
                          (0, T.jsx)(p7, {}),
                      ],
                  });
        },
    }),
    Tt = (0, h.zZ)(x.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [Te],
    }),
    Tn = (0, h.t_)(x.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [Tt, p2],
    }),
    Ti = (0, h.i4)(x.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pX.GameControllerIcon,
        usePredicate: n_.Pi,
        buildLayout: () => [Tn],
    }),
    Ts = (0, h.WI)(x.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [Ti, xD, pY, SN],
    });
var Tl = n(631670),
    Tr = n(619499),
    Ta = n(836602),
    To = n(591179),
    Tu = n(402860),
    Td = n(761508),
    Tc = n(159001),
    Tg = n(344346),
    Tm = n(919395),
    TA = n(68750);
function TE(e) {
    let { title: t, children: n } = e;
    return (0, T.jsxs)("div", {
        children: [(0, T.jsx)(C.D, { variant: "text-md/medium", className: TA.Vf, children: t }), n],
    });
}
function Th(e) {
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
        className: ic()(TA.UA, n),
        children: (0, T.jsxs)("div", {
            className: ic()(TA.yt, i),
            children: [
                (0, T.jsx)("div", {
                    className: ic()(TA.Fp, a && TA.Oz),
                    children: (0, T.jsxs)(T.Fragment, {
                        children: [
                            (0, T.jsx)(TE, { title: l ?? V.intl.string(V.t.Zb06yP), children: s }),
                            null != r ? (0, T.jsx)(TE, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, T.jsx)("div", { className: TA.oB, children: t }),
            ],
        }),
    });
}
var Tx = n(986687),
    TS = n(101058),
    Tp = n(321191),
    TT = n(696451),
    Tf = n(590941);
function T_() {
    return (0, T.jsxs)("div", {
        className: Tf.p$,
        children: [
            (0, T.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tf.Sl }),
            (0, T.jsx)(C.D, { className: Tf.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, T.jsx)($.E, { className: Tf.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, T.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tf.h8,
                children: (0, T.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, dW.pX)(I.BVt.GUILD_DISCOVERY), (0, tX.default)());
                    },
                }),
            }),
        ],
    });
}
var TI = n(81400),
    TN = n(450232),
    TC = n(252732),
    Ty = n(355622),
    Tb = n(408018),
    Tv = n(845207),
    Tj = n(290386),
    TO = n(941933),
    TL = n(486264);
let TR = (0, tK.Ld)(),
    TD = (0, G.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    TP = (0, tK.Ld)();
function TG(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Tj.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(s ?? r),
        [c, g] = f.useState((0, Tb.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tb.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== s || u === r || A.current || (d(r), g((0, Tb.x7)(r)));
        }, [s, r, u]),
        (0, T.jsxs)(aE.A, {
            title: t,
            titleId: TR,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, T.jsx)(Tv.Ay, {
                    "aria-describedby": TP,
                    "aria-labelledby": TR,
                    className: TL.i,
                    innerClassName: TL.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: TD,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: TO.y,
                    type: Ty.oU.PROFILE_BIO_INPUT,
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
                (0, T.jsx)(sm.A, { id: TP, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TM = n(821956),
    TU = n(562819),
    TV = n(84540),
    Tk = n(467690);
function Tw(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eY.Ay)(),
        o = (0, Tm.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tm.CP)(n?.id),
        c = r ? cq.wL : l4.$n;
    return (0, T.jsx)(aE.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, T.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, T.jsx)(c, {
                    size: l4.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TU.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [Tk.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TM.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, TV.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TF = n(339984),
    TB = n(942132);
let Tz = [{ name: "gif", extensions: ["gif"] }];
function TY(e) {
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
        m = c ? cq.wL : l4.$n,
        A = f.useCallback(() => {
            (0, TC.XD)({
                uploadType: TF.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Tz : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, T.jsx)(aE.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, T.jsxs)("div", {
            className: TB.NC,
            children: [
                (0, T.jsx)(m, {
                    className: ic()({ [TB.yj]: c }),
                    size: l4.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TB.DT,
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
var TX = n(248778),
    TH = n(810188);
function TW(e) {
    let { user: t, guildId: n, className: i } = e,
        s = aN.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eY.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tm.B0)(t, n),
        d = (0, TX.u)("DisplayNameStylesSection"),
        [c, g] = (0, mP.kn)(d ? [eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, f.useCallback)(() => {
            (g(mz.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eX.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, f.useCallback)(() => {
            ((0, TV.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, f.useCallback)(() => {
            (0, TV.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, T.jsx)(aE.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, T.jsx)("div", { className: TH.A, children: (0, T.jsx)(m7.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: TH.N,
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
var TK = n(637193),
    TZ = n(622410);
function Tq(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tm.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, TK.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = f.useCallback(() => {
            (0, TV.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, T.jsx)(aE.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, T.jsxs)("div", {
            className: TZ.u,
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
var TQ = n(88524);
function T$(e) {
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
        g = d ? cq.wL : l4.$n;
    return (0, T.jsx)(aE.A, {
        className: l,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, T.jsxs)("div", {
            className: TQ.NC,
            children: [
                (0, T.jsx)(g, {
                    className: ic()({ [TQ.yj]: d }),
                    size: l4.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TC.XD)({ uploadType: TF.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TQ.DT,
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
var TJ = n(617061),
    T0 = n(625613);
function T1(e) {
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
        d = aN.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tm.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tm.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(t$.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cq.wL : l4.$n;
    return (0, T.jsx)(aE.A, {
        forcedDivider: r,
        borderType: dH.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, T.jsxs)("div", {
            className: T0.NC,
            children: [
                (0, T.jsx)(A, {
                    size: l4.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TJ.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [T0.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T0.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, TV.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T2 = n(515727),
    T3 = n(594401);
function T5(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eY.Ay)(),
        l = (0, Tm.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Tm.Tu)(n?.id),
        [o, u] = (0, mP.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, T.jsx)(aE.A, {
        showBorder: d,
        borderType: d ? dH.i.NEW_UPSELL : dH.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, T.jsx)("div", { className: T3.Ad, children: (0, T.jsx)(m7.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, T.jsxs)("div", {
            className: T3.NC,
            children: [
                (0, T.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, T2.w)({ analyticsLocations: s, guild: n }), u(mz.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, T.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T3.DT,
                        children: (0, T.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, TV.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T4 = n(602853),
    T6 = n(654107),
    T8 = n(999291),
    T7 = n(101928),
    T9 = n(819169),
    fe = n(317097),
    ft = n(508274),
    fn = n(379012);
function fi(e) {
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
        c = (0, T4.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TC.sN)(i),
        A = (0, fe.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T9.A)(a),
        S = (0, T9.A)(o),
        [p, _] = f.useState((0, oO.A)());
    return (
        f.useEffect(() => {
            (x !== a || S !== o) && _((0, oO.A)());
        }, [o, a, S, x]),
        (0, T.jsx)(aT.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, T.jsx)(ft.VN, {
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
                    className: ic()(fn.oP, { [fn.r9]: l }),
                    children: [
                        (0, T.jsx)(n4.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: fn.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, T.jsx)(a_.PencilIcon, {
                                size: "custom",
                                className: fn.BW,
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
var fs = n(190377);
function fl(e) {
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
        c = (0, T8.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T7.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aN.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, T4.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, T6.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, T.jsx)(aE.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !l,
              className: ic()(fs.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, T.jsxs)("div", {
                  className: fs.hd,
                  children: [
                      (0, T.jsx)("div", {
                          className: fs.YX,
                          children: (0, T.jsx)(fi, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: fs.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, T.jsx)("div", {
                          className: fs.YX,
                          children: (0, T.jsx)(fi, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, T.jsx)($.E, {
                                  className: fs.yz,
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
                              className: fs.WA,
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
function fr(e) {
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
    return (0, T.jsx)(aE.A, {
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
var fa = n(684732),
    fo = n(576705),
    fu = n(931175);
function fd(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, _.bG)([fo.A], () => fo.A.can(I.xBc.CHANGE_NICKNAME, r) || fo.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xZ.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(aE.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, T.jsx)(sT.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, TV.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, T.jsx)(TW, { user: l, guildId: r.id, className: fu.F }),
        ],
    });
}
var fc = n(233454);
let fg = "/assets/b25da78aa7949feb.png";
function fm(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, cl.Ay)(),
        { analyticsLocations: l } = (0, eY.Ay)(tk.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tq.uq)(t$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, T.jsxs)("div", {
              className: fc.ry,
              children: [
                  (0, T.jsx)("div", { children: i }),
                  (0, T.jsxs)("div", {
                      className: fc.Wc,
                      children: [
                          (0, T.jsx)("img", {
                              className: fc.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fg;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fg;
                                  }
                              })(s),
                          }),
                          (0, T.jsxs)("div", {
                              className: fc._9,
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
                          (0, T.jsx)(dX.A, {
                              size: l4.$n.Sizes.LARGE,
                              color: l4.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aN.Ay.isPremium(t)
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
var fA = n(203164);
function fE() {
    let e = (0, _.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xZ.L)(t$.PremiumTypes.TIER_2),
        n = (0, _.bG)([Ta.A, sv.A], () => sv.A.getGuild(Ta.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, _.cf)([Ta.A], () => ({ ...Ta.A.getPendingChanges(n.id), errors: Ta.A.getErrors(n.id) })),
        d = (0, TS.V7)({ userId: e.id, image: i }),
        c = (0, TI.EC)(n.id),
        g = (0, _.bG)([TT.Ay], () => (null == n.id ? null : TT.Ay.getMember(n.id, e.id))),
        m = (0, _.bG)([Tp.A], () => Tp.A.getGuildMemberProfile(e.id, n.id)),
        A = aN.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Tm.z5)(i, g?.avatar),
        h = (0, Tm.Ac)(l, m?.banner),
        x = (0, fa.l)(o, m?.themeColors),
        S = m?.bio ?? "",
        p = m?.pronouns ?? "";
    return (0, T.jsxs)("div", {
        className: fA.Q,
        children: [
            (0, T.jsx)(
                fd,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uU.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, T.jsx)(
                fr,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TV.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: p,
                },
                "pronouns",
            ),
            (0, T.jsxs)(fm, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, T.jsx)(
                        TY,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, T.jsx)(TN.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, TC.rM)(e, g?.avatar, (e) => (0, TV.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, T.jsx)(
                        Tw,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, T.jsx)(TN.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, T.jsx)(TW, { user: e, guildId: n.id }),
                    (0, T.jsx)(
                        Tq,
                        { user: e, guild: n, titleIcon: (0, T.jsx)(TN.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, T.jsx)(
                        T1,
                        {
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, T.jsx)(TN.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, T.jsx)(
                        T5,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, T.jsx)(TN.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, T.jsx)(
                        T$,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, TC.rM)(e, m?.banner, (e) => (0, TV.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, T.jsx)(fl, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TV.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, T.jsx)(
                        TG,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, T.jsxs)(T.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, T.jsx)(TN.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TV.p)({ guildId: n.id, bio: e }),
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
var fh = n(832131);
function fx(e) {
    (0, sp.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, T.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fS(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, _.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, _.bG)([TT.Ay], () => (null != t ? TT.Ay.getMember(t.id, s.id) : null)),
        r = (0, _.bG)([Tp.A], () => !Tp.A.isFetchingProfile(s.id, t?.id)),
        a = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, _.cf)([Ta.A], () => Ta.A.getPendingChanges(t?.id)),
        c = (0, TS.V7)({ userId: s.id, image: o }),
        g = (0, Tm.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tm.B0)(s, t?.id);
    return (f.useEffect(() => Tc.IM, []), a)
        ? (0, T.jsx)(oT.A, {})
        : r
          ? (0, T.jsxs)(eY.f5, {
                value: i,
                children: [
                    (0, T.jsx)($.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: ey.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(aA.A, { guildId: t.id, onChange: n }),
                                  (0, T.jsx)(Th, {
                                      profilePreviewTitle: (0, T.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fh.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, T.jsx)(Tx.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: aN.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fx,
                                          containerClassName: fh.ti,
                                      }),
                                      nameplatePreview: (0, T.jsx)(Tg.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fh.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, T.jsx)(fE, {}),
                                  }),
                              ],
                          })
                        : (0, T.jsx)(T_, {}),
                ],
            })
          : (0, T.jsx)(oj.y, {});
}
var fp = n(903209),
    fT = n(641130);
function ff(e) {
    let { children: t, notice: n } = e;
    return (0, T.jsxs)("div", { className: fT.r, children: [n, (0, T.jsx)("div", { children: t })] });
}
var f_ = n(823092),
    fI = n(815996),
    fN = n(379197),
    fC = n(488430),
    fy = n(457421),
    fb = n(940622),
    fv = n(559474),
    fj = n(757993);
let fO = function () {
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
        } = ((e = (0, fb.mb)(fv.RN.UPSELL_BANNER)),
        (t = (0, fb.mb)(fv.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, _.bG)([fy.A], () => fy.A.getMarketingBySurface(fN.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fC.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, f_.L_)();
    return (
        f.useEffect(() => {
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tq.uq)(t$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, T.jsxs)("div", {
            ref: l,
            className: fj.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, T.jsx)("div", {
                    className: fj.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, T.jsx)("img", { src: a, className: fj.Qw, alt: "" }),
                }),
                (0, T.jsxs)("div", {
                    className: fj.Em,
                    children: [
                        (0, T.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fj.DD,
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
                            (0, fI.Cz)({
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
var fL = n(451909),
    fR = n(202639),
    fD = n(285373),
    fP = n(835071),
    fG = n(724651),
    fM = n(732280),
    fU = n(590180),
    fV = n(898461),
    fk = n(469054),
    fw = n(601298),
    fF = n(207803),
    fB = n(461797);
let fz = Object.keys(fB.jB);
function fY(e) {
    let t = null == e ? fz : fz.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var fX = n(201805),
    fH = n(221650);
function fW(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        s = (0, fX.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = f.useMemo(() => {
            let e = (0, fB.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, T.jsxs)("div", {
        className: fH.kL,
        children: [
            (0, T.jsx)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fH.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: s.render(),
            }),
            (0, T.jsxs)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${V.intl.string(V.t["44yJxh"])}`,
                className: fH.Lt,
                children: [
                    (0, T.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fH.L_ }),
                    (0, T.jsx)($.E, {
                        className: fH._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var fK = n(511484),
    fZ = n(811611),
    fq = n(206697),
    fQ = n(507553);
function f$(e, t) {
    let n = fQ.A.useField("scrollPosition"),
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), fQ.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var fJ = n(844222),
    f0 = n(842092);
let f1 = "/assets/d4955aabdcb5bdee.png",
    f2 = { assetOrigin: fk.E.NEW_ASSET, imageUri: f1, staticImageUri: f1, description: "", originalAsset: void 0 };
function f3(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(fJ.C),
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
        } = (0, _.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, TS.V7)({ userId: t.id, image: g ?? i });
    return (0, T.jsx)(Tx.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? f2,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : f0.WX,
        containerClassName: f0.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var f5 = n(829497);
function f4(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = aN.Ay.isPremium(t),
        l = aN.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, _.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getErrors(),
                n = Ta.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(fY()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, f.useMemo)(() => {
                    let t = (0, fB.Wt)(e);
                    return {
                        banner: (0, fw.X)({
                            assetOrigin: fk.E.NEW_ASSET,
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
                r = (0, _.bG)([fU.A], () => {
                    let e = fU.A.getProduct(s);
                    return (0, fV.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, fF.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, f.useCallback)(() => {
                let n = fY(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    f$(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eY.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fq.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    f.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t$.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tq.uq)(t$.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fM.V)()?.subscriptionTrial?.skuId === t$.pe.TIER_2,
        S = (0, fG.O)(),
        p = (0, fK.U9)(S, t$.pe.TIER_2);
    return i
        ? (0, T.jsx)(eY.f5, {
              value: A,
              children: (0, T.jsxs)(dH.A, {
                  ref: m,
                  className: f5.MT,
                  type: dH.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, T.jsx)(Th, {
                          stickyPreview: !1,
                          layoutClassName: f5.th,
                          profilePreviewTitle: (0, T.jsxs)(T.Fragment, {
                              children: [
                                  (0, T.jsx)(ag.t, { size: "md", color: "currentColor", className: f5.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, T.jsxs)(T.Fragment, {
                              children: [(0, T.jsx)(fW, { preset: c, onShuffle: g }), (0, T.jsx)(f3, { user: t })],
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
                                              className: f5.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, T.jsx)(fl, {
                                      className: f5.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TS.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fF.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, T.jsx)(T$, {
                                      className: f5.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fF.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, T.jsx)(TY, {
                                          className: f5.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fF.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, T.jsx)(TW, { user: t, className: f5.fz }),
                                  !x &&
                                      (0, T.jsx)($.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, T.jsx)(fR.d, {
                              onSubscribeModalClose: h,
                              className: f5.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fP.K)({ onSubscribeFinish: h });
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
                                  (0, T.jsx)("div", { className: f5.BU }),
                                  (0, T.jsx)(fZ.Ay, {
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
var f6 = n(814390),
    f8 = n(643056),
    f7 = n(843282),
    f9 = n(145497),
    _e = n(685073),
    _t = n(534400),
    _n = n(581781),
    _i = n(743981),
    _s = n(195801);
let _l = (0, tK.Ld)(),
    _r = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, _.cf)([lS.default], () => (0, _e.Zo)(lS.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, T.jsx)(_n.A, {
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
                        : (0, T.jsx)(f9.j, {
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
                        : (0, T.jsx)(_t.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _i.Sl.SIZE_16,
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
            f$(h, eL._F.GUILD_TAG),
            (0, T.jsxs)(aE.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _l,
                ref: h,
                children: [
                    (0, T.jsx)($.E, {
                        className: _s.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, T.jsx)(f7.Pw, {
                        className: _s.Lt,
                        optionClassName: _s.S0,
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
var _a = n(318785),
    _o = n(470739);
let _u = function () {
    return (0, f8.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, T.jsx)(aE.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, T.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _o.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _d = n(953726);
let _c = (0, tK.Ld)();
function _g(e) {
    let t = (0, xZ.L)(t$.PremiumTypes.TIER_2);
    return (0, T.jsxs)(aE.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _c,
        children: [
            (0, T.jsx)("div", {
                children: (0, T.jsx)(sT.k, {
                    "aria-labelledby": _c,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, T.jsx)(TW, { user: e.user, className: _d.F }),
        ],
    });
}
var _m = n(376626);
function _A(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, T.jsx)("div", {
        className: _m.u,
        children: (0, T.jsx)(t4.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: s ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, Tl._e)() : (0, TV.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _E(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T4.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, T6.rh)(l, r, !1),
        o = (0, fe.LX)(a[0]);
    return (0, T.jsx)(aE.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, T.jsx)(fi, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _h = n(518477);
let _x = function () {
    let e = (0, _.bG)([d4.default], () => d4.default.getId());
    return (0, T.jsx)(aE.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, T.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, Tu.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _h.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _S = n(654910);
function _p() {
    let e = (0, _.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([Tp.A], () => Tp.A.getUserProfile(e.id)),
        n = (0, f8.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, _.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TS.V7)({ userId: e.id, image: i }),
        A = (0, TI.EC)(),
        E = aN.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Tm.z5)(i, e.avatar),
        x = (0, Tm.Ac)(l, t?.banner),
        S = (0, T8.Ay)(e.id),
        p = S?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, _a.b)(),
        C = null != (0, _e.Zo)(e.primaryGuild).guildId;
    return (0, T.jsxs)("div", {
        className: _S.Q,
        children: [
            (0, T.jsx)(_g, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, TV.p)({ globalName: e }),
                user: e,
            }),
            (0, T.jsx)(
                fr,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TV.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, T.jsx)(_x, {}),
            (0, T.jsx)(
                TY,
                {
                    onAvatarChange: (e) => {
                        ((0, TV.p)({ avatar: e }), (0, Tm.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, T.jsx)(Tw, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, T.jsx)(Tq, { user: e }),
            (0, T.jsx)(T1, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, T.jsx)(T5, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)(
                              T$,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TV.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, T.jsx)(fl, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TV.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, T.jsx)(
                      _E,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TV.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, T.jsx)(
                TG,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, TV.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, T.jsx)(_r, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TV.p)({ primaryGuildId: e }),
                }),
            null != p &&
                !n &&
                (0, T.jsx)(_A, { legacyUsername: p, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, T.jsx)(_u, {}, "badges"),
        ],
    });
}
function _T() {
    (0, sp.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, T.jsx)(e, {
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
var _f = n(447080);
function __() {
    let e = (0, _.bG)([lS.default], () => {
            let e = lS.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, _.cf)([Ta.A], () => ({ ...Ta.A.getPendingChanges(), showNotice: Ta.A.showNotice() })),
        a = (0, TS.V7)({ userId: e.id, image: i }),
        o = (0, Tm.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, f6.A)() && null != n ? fL.Ay.parse(void 0, n).content : n,
        d = aN.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eY.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => Tl.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, T.jsx)(oT.A, {})
        : (0, T.jsxs)(eY.f5, {
              value: c,
              children: [
                  (0, T.jsx)(fO, {}),
                  (0, T.jsx)(Th, {
                      profilePreview: (0, T.jsx)(Tx.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _T,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _f.ti,
                      }),
                      nameplatePreview: (0, T.jsx)(Tg.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _f.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, T.jsx)(_p, {}),
                  }),
                  (0, T.jsx)(cU.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, T.jsx)("div", {
                          ref: E,
                          children: (0, T.jsx)(f4, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, T.jsx)(fR.d, {
                          className: _f.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, fP.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, T.jsx)(fD.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, T.jsx)("div", {
                              className: _f.Xl,
                              children: (0, T.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: ag.t,
                              }),
                          }),
                      }),
              ],
          });
}
var _I = n(625494);
n(46121);
var _N = n(944983);
let _C = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    _y = (0, h.E2)(x.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sj.A, gR.Ay, Ta.A], () => {
                    let e = Ta.A.selectedGuildId ?? sj.A.getGuildId();
                    return null == e || Ta._.has(e) ? gR.Ay.getFlattenedGuildIds().find((e) => !Ta._.has(e)) : e;
                }),
                t = (0, _.bG)([sv.A], () => sv.A.getGuild(e)),
                n = (0, _.bG)([Ta.A], () => Ta.A.showNotice()),
                i = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
                s = fQ.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(_C[s]);
                }, [s]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fp.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, T.jsx)(ff, {
                    children: (0, T.jsxs)(uR.F, {
                        component: (0, T.jsx)(sm.A, {
                            children: (0, T.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, T.jsxs)(Td.V, {
                                className: _N.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                _I._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, Tc.V2)(t.id),
                                            fQ.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, T.jsx)(
                                        Td.V.Item,
                                        {
                                            className: _N.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, T.jsx)(
                                        Td.V.Item,
                                        {
                                            className: ic()(_N.YU, _N.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eL.Eq.GUILD
                                ? (0, T.jsx)(fS, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  _I._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Tc.JJ)(e.id);
                                      },
                                  })
                                : (0, T.jsx)(__, {}),
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
    _b = (0, h.zZ)(x.X.PROFILE_CATEGORY, { buildLayout: () => [_y] });
var _v = n(379633);
function _j() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cQ.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, T.jsxs)("div", {
              className: _v.a5,
              children: [
                  (0, T.jsx)(b.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, T.jsxs)("div", {
                      className: _v.FS,
                      children: [
                          (0, T.jsx)($.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, T.jsxs)("div", {
                              className: _v.Fk,
                              children: [
                                  (0, T.jsx)($.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, T.jsx)(a_.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _O = (0, h.t_)(x.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [Ta.A], element: Tr.A },
        initialize: () => Tl.F7,
        buildLayout: () => [_b],
    }),
    _L = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _D,
        StronglyDiscouragedCustomComponent: _j,
        usePredicate: () => !(0, To.X)("user_settings_sidebar"),
        buildLayout: () => [_O],
    }),
    _R = (0, h.i4)(x.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _D,
        StronglyDiscouragedCustomComponent: _j,
        usePredicate: () => (0, To.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d4.default.getId();
            (0, Tu.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _D() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, cQ.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, T.jsx)(b.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _P = (0, h.WI)(x.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_L, _R] });
var _G = n(98207);
n(204925);
let _M = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sp.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, T.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uw.tE : null, onCloseCallback: t },
    );
};
var _U = n(940856),
    _V = n(506775),
    _k = n(379257),
    _w = n(121780),
    _F = n(666113);
function _B() {
    let e = _w.A.getCountryCode(),
        t = null != e ? _F.IN[e.alpha2] : void 0;
    _k.A.openUrl(ey.A.getArticleURL(t ?? _F.k9));
}
var _z = n(521169);
function _Y() {
    return (0, _z.w)(_F.Vc);
}
var _X = n(680091);
function _H() {
    let e = _Y(),
        t = (0, _V.ZP)();
    if (!e) return null;
    switch (t) {
        case _V.M$.ADULT:
            return V.intl.format(_X.default.gi4ulu, { handleOnAgeGatedContentHook: _V.M0 });
        case _V.M$.TEEN:
            return V.intl.format(_X.default["221iML"], {
                handleOnAgeGatedContentHook: _V.M0,
                handleOnConfirmAgeHook: _V.aP,
            });
        case _V.M$.UNVERIFIED:
            return V.intl.format(_X.default["W0/7DD"], {
                handleOnAgeGatedContentHook: _B,
                handleOnConfirmAgeHook: _V.aP,
            });
    }
}
var _W = n(26137),
    _K = n(957485);
function _Z() {
    let e = _Y(),
        t = (0, _V.ZP)();
    return e ? { icon: t === _V.M$.ADULT ? _W.r : _K.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function _q() {
    let e = _Z();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function _Q() {
    return _Y() ? V.intl.string(V.t.piqs0o) : null;
}
var _$ = n(438140);
let _J = [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    _0 = [];
function _1() {
    return (0, _$.Wt)() ? _J : _0;
}
var _2 = n(36149),
    _3 = n(207560),
    _5 = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    _4 = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function _6(e, t) {
    let n = (0, _.bG)([lS.default], () => null != lS.default.getCurrentUser()),
        i = (0, _3.fk)(),
        s = (0, _V.ZP)(),
        l = (0, _2.Y2)(),
        r = _Y();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case _V.M$.UNVERIFIED:
            return "verify" === e;
        case _V.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _V.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var _8 = n(841365);
function _7() {
    let e = (0, _V.hD)();
    return (0, T.jsxs)($.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(_8.default.WM5adV, { handleOnHelpUrlHook: _V.M0 })],
    });
}
let _9 = {
        useTitle: () => _Q() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _H,
        useVariant: () => "secondary",
        useLeadingDecoration: _q,
        getDismissibleBadges: _1,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _7,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    },
    Ie = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ..._9, usePredicate: () => _6(_4.EDIT, _5.LEGACY) }),
    It = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ..._9,
        usePredicate: () => _6(_4.EDIT, _5.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    In = {
        useTitle: () => _Q() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _H,
        useLeadingDecoration: function () {
            let e = _Z();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: _1,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, _V.hD)() }),
    },
    Ii = (0, h.v_)(x.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...In, usePredicate: () => _6(_4.INFO, _5.LEGACY) }),
    Is = (0, h.v_)(x.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...In,
        usePredicate: () => _6(_4.INFO, _5.TINY_BRONCO),
    }),
    Il = {
        useTitle: () => _Q() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _H,
        useVariant: () => "secondary",
        useLeadingDecoration: _q,
        getDismissibleBadges: _1,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, _V.hD)() }),
        useLabel: function () {
            return (0, _2.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _V.aP,
    },
    Ir = (0, h.Tf)(x.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...Il, usePredicate: () => _6(_4.VERIFY, _5.LEGACY) }),
    Ia = (0, h.Tf)(x.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...Il,
        usePredicate: () => _6(_4.VERIFY, _5.TINY_BRONCO),
    }),
    Io = [Ir, Ie, Ii],
    Iu = [Ia, It, Is],
    Id = (0, h.Tf)(x.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _M(),
    });
function Ic(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function Ig(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function Im(e) {
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
            (0, T.jsx)(hV.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function IA() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.email);
    return null == e
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, T.jsx)(Im, {
              text: e,
              censor: Ig,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let IE = (0, h.Tf)(x.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IA }),
    useLabel: function () {
        return null == (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.email)
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
var Ih = n(557722),
    Ix = n(53516);
function IS() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, T.jsx)($.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, T.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, T.jsx)(Im, {
                  text: t,
                  censor: Ic,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let Ip = (0, h.Tf)(x.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IS }),
    useLabel: function () {
        return null == (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.phone)
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
                      return (t) => (0, T.jsx)(e, { reason: Ih.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Ix.V },
              )
            : (0, sp.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, T.jsx)(e, { ...t });
              });
    },
});
function IT() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function If() {
    let e = (0, TI.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
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
let I_ = (0, h.Tf)(x.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: If,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (IT() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: IT,
        onClick: function () {
            (0, sp.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, T.jsx)(e, { ...t });
            });
        },
    }),
    II = (0, h.zZ)(x.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, _.bG)([lS.default], () => null != lS.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
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
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _U.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _M() },
                    };
        },
        buildLayout: () => [I_, Id, IE, Ip, ...Io],
    });
var IN = n(398177);
let IC = (0, h.Tf)(x.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sp.openModal)((e) => (0, T.jsx)(IN.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var Iy = n(200921);
let Ib = [];
function Iv() {
    Ib = [];
}
class Ij extends _.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return Ib;
    }
}
let IO = new Ij(tl.h, {
    LOGOUT: Iv,
    LOGIN_SUCCESS: Iv,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        Ib = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...Ib],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        Ib = n;
    },
});
function IL() {
    let e = (0, _.cf)([IO], () => IO.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            n = null,
            i = d4.default.getAuthSessionIdHash();
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
function IR(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var ID = n(176524),
    IP = n(646270),
    IG = n(738678),
    IM = n(489828);
function IU(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, T.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, T.jsx)(ID.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
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
function IV(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dS.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: IP.u };
                        case "horizon os":
                            return { text: e, icon: IG.G };
                        default:
                            return { text: e, icon: dS.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : IR(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, T.jsx)(IU, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, T.jsx)(n4.D, {
                className: IM.X,
                onClick: () => (0, Iy.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, T.jsx)(uH.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function Ik(e) {
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
let Iw = (0, h.E2)(x.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = IL();
            return null == e
                ? (0, T.jsx)(oj.y, {})
                : (0, T.jsx)(Ik, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, T.jsx)(IV, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    IF = (0, h.E2)(x.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IL();
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, T.jsx)(j.$, {
                    onClick: () => (0, Iy.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IL();
            return e.length > 0;
        },
    });
var IB = n(766928);
function Iz() {
    return (0, T.jsx)(IU, {
        icon: IB.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(x.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let IY = (0, h.E2)(x.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IL(),
                t = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
            return (0, T.jsxs)(Ik, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, T.jsx)(IV, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, T.jsx)(Iz, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IL(),
                t = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    IX = (0, h.zZ)(x.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, Iy.GY)();
        },
        buildLayout: () => [Iw, IY, IF],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    IH = (0, h.t_)(x.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: oT.L,
        buildLayout: () => [IX],
    }),
    IW = (0, h.t0)(x.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [IH],
        initialize: () => {
            (0, Iy.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = IL(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var IK = n(464477);
function IZ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? V.intl.string(V.t.YJGvuD)
              : V.intl.string(V.t["3iKih7"])
          : e.hasFlag(I.nhx.PARTNER)
            ? t
                ? V.intl.string(V.t["9UucjT"])
                : V.intl.string(V.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? V.intl.string(V.t["9VWpT9"])
                  : V.intl.string(V.t.LfCBZG)
              : null;
}
function Iq() {
    return (0, oo.bG)([lS.default], () => {
        let e = lS.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var IQ =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function I$() {
    let e = (0, oo.bG)([lS.default], () => lS.default.getCurrentUser()?.verified);
    return IK.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function IJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oo.bG)([sv.A, fo.A, lS.default], () =>
        lS.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : sv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fo.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var I0 = n(466034);
let I1 = (0, h.Tf)(x.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => IJ(!0),
        useDisabled: () => null !== IJ(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, _.bG)([d4.default], () => d4.default.hasTOTPEnabled()),
                t = I$() === IQ.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n2.A)({
                title: V.intl.string(V.t["D+aE7g"]),
                subtitle: V.intl.string(V.t.EA4ZEk),
                variant: "critical",
                confirmText: V.intl.string(V.t.N86XcP),
                onConfirm: () => _G.A.disable(),
            }),
    }),
    I2 = (0, h.zZ)(x.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([d4.default], () => d4.default.hasTOTPEnabled()),
                t = I$() === IQ.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: I0.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (I$()) {
                case IQ.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case IQ.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case IQ.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [I1],
    });
var I3 = n(670492),
    I5 = n(32880),
    I4 = n(663417),
    I6 = n(658675),
    I8 = n(900686);
function I7() {
    (0, sp.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, T.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _G.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var I9 = n(858487);
function Ne(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Nt() {
    let e = I3.A.getVerificationKey();
    if ("" === e) return void I7();
    try {
        await _G.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function Nn(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Ne(t),
        s = f.useRef(null),
        l = (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)(I6.P, { checked: n }), (0, T.jsx)($.E, { variant: "text-md/normal", children: i })],
        });
    return uD.p5
        ? (0, T.jsx)(n4.D, {
              tag: "li",
              className: ic()(I9.aY, I9.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uD.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uD.C)(i), (0, lg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, T.jsx)("li", { className: I9.aY, children: l });
}
let Ni = (0, h.zZ)(x.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, _.bG)([I3.A], () => I3.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: Iq,
        buildLayout: () => [Ns],
    }),
    Ns = (0, h.E2)(x.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, _.bG)([I3.A], () => I3.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Ne(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, T.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: I7 })
                : (0, T.jsxs)(T.Fragment, {
                      children: [
                          (0, T.jsx)("ul", {
                              className: I9.E5,
                              children: e.map((e) => (0, T.jsx)(Nn, { code: e }, e.code)),
                          }),
                          (0, T.jsxs)(l8.e, {
                              size: "sm",
                              children: [
                                  (0, T.jsx)(I8.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, T.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: I5.DownloadIcon,
                                      }),
                                  }),
                                  (0, T.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: I4.RefreshIcon,
                                      onClick: Nt,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Nl = (0, h.Tf)(x.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, T.jsx)(hV.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sp.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, T.jsx)(e, {
                        ...t,
                        handleSubmit: _G.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    Nr = (0, h.zZ)(x.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, _.bG)([lS.default], () => IZ(lS.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, _.bG)([lS.default], () => null != IZ(lS.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: Na,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = I$(),
                t = Iq(),
                n = (0, _.bG)([d4.default], () => d4.default.hasTOTPEnabled());
            return e === IQ.AVAILABLE && t && n;
        },
        buildLayout: () => [Nl],
    });
function Na() {
    let e = lS.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: Ih.d.USER_SETTINGS_UPDATE, onAddedPhone: _G.A.enableSMS }),
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
                    { modalKey: Ix.V },
                ));
        } else _G.A.enableSMS();
}
var No = n(665671),
    Nu = n(442433),
    Nd = n(917136),
    Nc = n(976910),
    Ng = n(267255);
function Nm(e) {
    let { credential: t } = e;
    return (0, T.jsxs)("li", {
        className: Ng.e,
        children: [
            (0, T.jsxs)("div", {
                children: [
                    (0, T.jsx)($.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, T.jsx)($.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: IR(t.last_used) }),
                        }),
                ],
            }),
            (0, T.jsx)(sd.K, {
                icon: gU.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nu.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, T.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let NA = (0, h.zZ)(x.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (I$() === IQ.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: No.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (I$()) {
                    case IQ.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case IQ.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case IQ.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NE],
    }),
    NE = (0, h.E2)(x.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, _.cf)([Nc.A], () => ({
                hasFetchedCredentials: Nc.A.hasFetchedCredentials(),
                credentials: Nc.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || Nd.JQ();
            }, [t]),
            t)
                ? (0, T.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, T.jsx)(Nm, { credential: e }, e.id)),
                  })
                : (0, T.jsx)(oj.y, {});
        },
    }),
    Nh = (0, h.t_)(x.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [NA, I2, Nr, Ni],
    }),
    Nx = (0, h.t0)(x.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Iq();
            return { type: p.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nh],
    }),
    NS = (0, h.zZ)(x.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [IC, Nx, IW],
    }),
    Np = { [_V.M$.ADULT]: _X.default.PMznGO, [_V.M$.TEEN]: _X.default.qSkhZH, [_V.M$.UNVERIFIED]: _X.default.vGxRDB },
    NT = [eE.M.TINY_BRONCO_NOTICE],
    Nf = [];
function N_() {
    _k.A.openUrl(_F.m5);
}
var NI = n(308645),
    NN = n(555725),
    NC = n(855267);
let Ny = (0, h.E2)(x.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NC.A,
    }),
    Nb = (0, h.zZ)(x.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Ny] }),
    Nv = (0, h.t_)(x.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [Nb],
    }),
    Nj = (0, h.t0)(x.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: NN.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, NN._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, NN.aO)() };
        },
        initialize: () => {
            NI.Yn();
        },
        buildLayout: () => [Nv],
    }),
    NO = (0, h.zZ)(x.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (_Y() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, _$.LH)(),
                t = (0, _V.ZP)(),
                [n, i] = (0, mP.kn)(e ? NT : Nf);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(Np[t], { handleOnBlogHook: N_ }),
                      onDismiss: () => i(mz.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...Iu, Nj],
    });
var NL = n(738188),
    NR = n(834981),
    ND = n(987197),
    NP = n(822585),
    NG = n(840387),
    NM = n(961526),
    NU = n(513687);
let NV = (0, h.E2)(x.X.FAMILY_CENTER_SETTING, {
        Component: NM.p,
        useSearchTerms: () => [
            V.intl.string(NU.default.RZqaJn),
            V.intl.string(NU.default.bdBmqy),
            V.intl.string(NU.default["gVWG+6"]),
            V.intl.string(NU.default.ahKIJO),
            V.intl.string(NU.default["8SLtqb"]),
        ],
    }),
    Nk = (0, h.zZ)(x.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NV] }),
    Nw = (0, h.t_)(x.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(NU.default.RZqaJn),
        buildLayout: () => [Nk],
    }),
    NF = (0, h.zZ)(x.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(NU.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, ND.f)(),
                t = (0, NP.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, NR.VT)();
            return f.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [NB],
    }),
    NB = (0, h.t0)(x.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, NR.Li)() ? V.intl.string(NU.default.IcMQUP) : V.intl.string(NU.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NG.Z)(),
                t = (0, NR.Li)();
            return e
                ? t
                    ? V.intl.string(NU.default.G8lHFU)
                    : V.intl.string(NU.default.uOLNEZ)
                : V.intl.string(NU.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, ND.f)(),
                t = (0, NP.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: NL.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Nw],
    });
var Nz = n(425587),
    NY = n(662758);
function NX(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, l5.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function NH() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lS.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Nz.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, l5.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sv.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, l5.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, sp.openModal)((t) =>
                  (0, T.jsx)(NY.default, {
                      ...t,
                      handleSubmit: (t) => (0, Tl.U_)(t, e).then(I.tEg, NX),
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
                  onConfirm: () => (0, Tl.U_)("", !0),
              });
}
let NW = (0, h.Tf)(x.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NH(!0),
    }),
    NK = (0, h.Tf)(x.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NH(!1),
        usePredicate: () => {
            let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NZ = (0, h.zZ)(x.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NK, NW] }),
    Nq = (0, h.t_)(x.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_G.A.clearBackupCodes(), (0, Tl.Uo)());
            };
        },
        useObscuredNotice: oT.L,
        buildLayout: () => [II, NS, NO, NF, NZ],
    }),
    NQ = (0, h.i4)(x.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: AP.UserIcon,
        buildLayout: () => [Nq],
    });
var N$ = n(176781),
    NJ = n(274372),
    N0 = n(572164),
    N1 = n(614584),
    N2 = n(696016);
let N3 = [N2.zq, 25, 50, N2.Y2, N2.rv],
    N5 = (0, h.sN)(x.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: N2.zq,
        maxValue: N2.rv,
        useDefaultValue: () => N2.Y2,
        getInitialValue: () => NJ.Ay.getSettings().clipsQuality.bitratePercent ?? N2.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NJ.Ay.getSettings();
            N1.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: N3,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, N0.E)(),
    });
var N4 = n(226640);
let N6 = (0, h.Hn)(x.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NJ.Ay.getSettings();
            N1.GS({ ...t, frameRate: e });
        },
        useOptions: N4.Fz,
        useDisabled: () => !(0, N0.E)(),
    }),
    N8 = (0, h.E2)(x.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getHardwareClassification()) === N2.k9.BELOW_MINIMUM,
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    N7 = (0, h.Hn)(x.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().clipsLength),
        setValue: (e) => N1.h$(e),
        useOptions: N4.Qu,
        useDisabled: () => !(0, N0.E)(),
    }),
    N9 = (0, h.E2)(x.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, T.jsx)(s9.A, { look: s9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    Ce = (0, h.Hn)(x.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NJ.Ay.getSettings();
            N1.GS({ ...t, resolution: e });
        },
        useOptions: N4.gF,
        useDisabled: () => !(0, N0.E)(),
    }),
    Ct = (0, h.zD)(x.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().remindersEnabled),
        setValue: (e) => N1.Mt(e),
        useDisabled: () => !(0, N0.E)(),
    });
var Cn = n(268378);
let Ci = (0, h.zZ)(x.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(Cn.default.TGwzMe),
        buildLayout: () => [N8, N7, N6, Ce, N5, N9, Ct],
    }),
    Cs = (0, h.zD)(x.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => N1.YP(e),
    }),
    Cl = (0, h.zD)(x.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => N1.Uh(e),
    }),
    Cr = (0, h.zZ)(x.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, _.bG)([lS.default], () => {
                let e = lS.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Cs, Cl],
    });
var Ca = n(417270),
    Co = n(847825);
let Cu = (0, h.E2)(x.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, _.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, N0.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, sx.OH)(N2.Ot) });
                }, [e]);
            return (0, T.jsx)(su.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, T.jsx)("div", {
                    className: Co.g,
                    children: (0, T.jsx)(sh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, T.jsxs)(T.Fragment, {
                            children: [
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(Cn.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Cn.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, T.jsx)(sg.m, {
                                    text: V.intl.string(Cn.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, T.jsx)(sd.K, {
                                        icon: Ca.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Cn.default.Kyk1Tp),
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
    Cd = (0, h.E2)(x.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: sW.BW,
        Component: () => {
            let e = (0, _.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, _.bG)([sa.Ay], () => sa.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
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
                    className: Co.g,
                    children: (0, T.jsx)(sh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cc = (0, h.zD)(x.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, N0.E)(),
        setValue: (e) => N1.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cg = (0, h.zY)(x.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cc, Cu, Cd], headerSettingKey: Cc.key }),
    Cm = (0, h.zZ)(x.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(Cn.default["dh7g+S"], { learnMoreLink: ey.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cg],
    }),
    CA = (0, h.E2)(x.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, _.bG)([NJ.Ay], () => NJ.Ay.getSettings().storageLocation),
                t = !(0, N0.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await np.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && N1.HU(e[0]);
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
                            text: V.intl.string(Cn.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    CE = (0, h.zZ)(x.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(Cn.default["0Q+pdZ"]),
        buildLayout: () => [CA],
    }),
    Ch = (0, h.t_)(x.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: sW.sw,
        buildLayout: () => [Cm, Ci, CE, Cr],
    }),
    Cx = (0, h.i4)(x.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: N$.x,
        buildLayout: () => [Ch],
    });
var CS = n(254138),
    Cp = n(290595),
    CT = n(677166),
    Cf = n(406935),
    C_ = n(646769),
    CI = n(405018);
let CN = (0, C_.c$)(
    "privacy",
    "swpMessagePromotionOptedOut",
    (e) => e?.value ?? null,
    (e) => (null != e ? Cf._t.create({ value: e }) : void 0),
);
function CC() {
    let e = CN.useSetting(),
        { locked: t, defaultOptedOut: n } = (0, _.cf)([CI.A], () => ({
            locked: CI.A.isLocked(),
            defaultOptedOut: CI.A.defaultsToOptedOut(),
        }));
    return { locked: t, optedOut: t || (e ?? n) };
}
var Cy = n(804422);
let Cb = "user_settings_data_usage",
    Cv = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cy.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cy.default.V0EPTo, { learnMoreURL: ey.A.getArticleURL(I.MVz.SERVER_WEB_PAGES) }),
            usePredicate: () => (0, CT.Zd)(Cb),
            useValue: () => !CC().optedOut,
            setValue: (e) => {
                CN.updateSetting(!e);
            },
            useDisabled: function () {
                return CC().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cy.default.Z9bKIJ, { learnMoreURL: ey.A.getArticleURL(I.MVz.SERVER_WEB_PAGES) }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CT.ws)(Cb, { autoTrackExposure: !1 }) || CI.A.isLocked()
                    ? []
                    : [{ badgeType: p.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var Cj = n(153488),
    CO = n(171316),
    CL = n(327919),
    CR = n(558001);
n(866945);
var CD = n(835002);
function CP() {
    let e = (0, CO.uM)(),
        t = (0, NR.vx)(),
        n = f.useCallback(() => {
            ((0, CL.A)(t, tX.default, () =>
                (0, lg.P0)({
                    text: V.intl.formatToPlainString(NU.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, CR.N)(CD.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CD.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, CR.N)(CD.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CD.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(NU.default.i284fU, {
                    hook: (e, t) => (0, T.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CG = (0, h.zD)(x.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => N1.eQ({ allowVoiceRecording: e }),
});
var CM = n(157559),
    CU = n(331887);
function CV() {
    let e = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
        t = (0, _.bG)([CU.A], () => CU.A.harvestType),
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
let Ck = (0, h.Tf)(x.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = CV();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: ey.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
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
                ts.Bo.get({ url: I.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        tl.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        tl.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CV().allowed,
        useLoading: () => (0, _.bG)([CU.A], () => CU.A.requestingHarvest),
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
                            (0, Tl.$I)(n)
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
                                            ? CM.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : CM.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        CM.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    Cw = (0, h.v_)(x.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(x.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(x.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var CF = n(641216);
let CB = (0, ug.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Cz() {
    let { enabled: e } = CB.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CY = n(884705);
function CX() {
    return (0, _.bG)([CY.A], () => CY.A.isTogglesDisabled());
}
function CH() {
    return !U.vf.useSetting();
}
function CW(e) {
    U.vf.updateSetting(!e);
}
function CK() {
    let e = CX(),
        t = U.H1.useSetting(),
        n = (0, CO.uM)();
    return e || t || n;
}
let CZ = (0, h.zD)(x.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: ey.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cz(),
        useValue: CH,
        setValue: CW,
        useDisabled: CK,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    Cq = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: ey.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cz,
        useValue: CH,
        setValue: CW,
        useDisabled: CK,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function CQ() {
    return !U.H1.useSetting();
}
function C$(e) {
    U.H1.updateSetting(!e);
}
function CJ() {
    let e = CX(),
        t = (0, CO.uM)();
    return e || t;
}
let C0 = (0, h.zD)(x.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !Cz(),
        useValue: CQ,
        setValue: C$,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CJ,
    }),
    C1 = (0, h.zD)(x.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: ey.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cz,
        useValue: CQ,
        setValue: C$,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CJ,
    }),
    C2 = (0, h.AK)(x.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: x.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = xe(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = xt();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, _.bG)([i4.Ay], () => i4.Ay.getGamesSeen(!1).some((e) => !(0, h5.n1)(e))) && (0, nh.xl)(),
    }),
    C3 = (0, h.gN)(x.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [C2] });
var C5 = n(972737);
let C4 = (0, h.zD)(x.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: ey.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, _.bG)([Cj.A], () => Cj.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cp.U)([I.YAq.USAGE_STATISTICS], []).catch(C5.i)
                : (0, C5.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, Cp.U)([], [I.YAq.USAGE_STATISTICS]).catch(C5.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: CO.uM,
    }),
    C6 = (0, h.zZ)(x.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: CP,
        initialize: () => {
            Cj.A.fetchedConsents || (0, Cp.Q)();
        },
        buildLayout: () => [Cw, C4, CF._, C0, CZ, ...Cv, CG, Ck, C3],
    });
var C8 = n(15762);
let C7 = (0, h.zD)(x.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(C8.default.F3llsQ),
    useSubtitle: () => V.intl.string(C8.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: xl.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function C9() {
    let e = U.JG.useSetting();
    return (0, _.yK)(
        [gR.Ay, sv.A],
        () => {
            let t = new Set(e);
            return gR.Ay.getFlattenedGuildIds().filter((e) => null != sv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let ye = (0, h.AK)(x.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = C9();
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
                    ((e = C9()),
                    0 ===
                    (t = (0, _.yK)(
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
                                    icon: (0, T.jsx)(xS, { guild: t[0], size: h4.CD }),
                                    shape: h4.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, T.jsx)(xS, { guild: t[1], size: h4.CD }), shape: h4.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, T.jsx)(xS, { guild: t[0], size: h4.CD }),
                                    shape: h4.e0.SQUIRCLE,
                                },
                            });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: x.X.ACTIVITY_PRIVACY_PANEL,
    }),
    yt = (0, h.gN)(x.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [ye] }),
    yn = (0, h.Qx)(x.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, xg.gS)(t, e);
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
    yi = (0, h.zZ)(x.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: ey.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [yn, C7, yt],
    });
var ys = n(952270),
    yl = n(678538);
let yr = { [e$.tR.REAL_MONEY_GAMING]: yl.default.pmIitA },
    ya = Object.keys(yr).map(Number),
    yo = (0, h.E2)(x.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(yl.default.foQaI1)],
        usePredicate: Cz,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        ya.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(yr[e]),
                            leading: ys.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, T.jsx)(p3.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of ya) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(yl.default.foQaI1),
                description: V.intl.format(yl.default["z/MfaY"], {
                    helpdeskArticle: ey.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(yl.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    yu = (0, h.zZ)(x.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(yl.default.XUj46U),
        usePredicate: Cz,
        buildLayout: () => [C1, Cq, yo],
    });
var yd = n(714763),
    yc = n(814278),
    yg = n(730852),
    ym = n(913122),
    yA = n(977997),
    yE = n(144485);
async function yh(e, t) {
    if (e) {
        tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, yc.to)(1), t?.());
        } catch (t) {
            let e = new ym.LG(t);
            (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                CM.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (tl.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function yx(e) {
    let t,
        n,
        i =
            ((t = yA.A.getVoiceStateForUser(d4.default.getId())),
            (n = sy.A.getChannel(t?.channelId)),
            d4.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? yE.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await yh(e, () => {
                      (yg.default.disconnect(), yg.default.selectVoiceChannel(i));
                  });
              },
          })
        : await yh(e);
}
n(603266);
let yS = (0, h.zD)(x.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, yc.Lu)() }),
    useValue: function () {
        return (0, _.bG)([yd.A], () => yd.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        yx(e);
    },
});
var yp = n(787392);
function yT() {
    return (0, _.yK)([yp.A], () => yp.A.getUserIds());
}
var yf = n(803306),
    y_ = n(966327),
    yI = n(774156);
function yN(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eY.Ay)(),
        s = (0, _.bG)([lS.default], () => lS.default.getUser(t)),
        l = uU.Ay.getFormattedName(s),
        r = f.useCallback(() => {
            (0, yc.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, Tu.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, yf.wz)(t);
        }, [t]),
        (0, T.jsxs)("div", {
            className: yI.uW,
            children: [
                null != s && (0, T.jsx)(y_.A, { className: yI.my, user: s, size: v._3.SIZE_40 }),
                (0, T.jsxs)("div", {
                    className: yI.Qq,
                    children: [
                        (0, T.jsx)(n4.D, {
                            className: yI.Xh,
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
                (0, T.jsx)(n4.D, { onClick: r, className: yI.Qz, children: (0, T.jsx)(sc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yC(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, yc.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, yc.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, T.jsxs)("div", {
        className: t,
        children: [
            (0, T.jsxs)("div", {
                className: yI.Qq,
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
                className: yI.Kk,
                onClick: r,
                children: (0, T.jsx)(uH.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yy(e) {
    let { userId: t } = e,
        n = (0, _.yK)([yp.A], () =>
            K()(yp.A.getUserVerifiedKeys(t))
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
            (0, T.jsx)(yN, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, T.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, T.jsx)(yC, { className: yI.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, T.jsx)("div", { className: yI.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yb = n(464946),
    yv = n(492422);
let yj = (0, h.E2)(x.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = yT();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yT();
            return (0, T.jsxs)(yb.h, {
                children: [
                    (0, T.jsx)(yb._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, yc.dc)() }),
                    }),
                    e.map((e) => (0, T.jsx)("div", { className: yv.A, children: (0, T.jsx)(yy, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yO = (0, h.zZ)(x.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [yS, yj],
    }),
    yL = (0, h.t_)(x.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [C6, yu, yi, yO],
    }),
    yR = (0, h.i4)(x.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: CS.m,
        buildLayout: () => [yL],
    });
var yD = n(476713);
let yP = (0, h.AK)(x.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: x.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yG = (0, h.gN)(x.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yP] });
var yM = n(875444);
function yU(e, t) {
    let n = (0, _.bG)([xW.default], () => xW.default.getFetchState()),
        i = (0, _.bG)([xW.default], () =>
            e ? xW.default.getNewestTokensForNonChildrenApplications() : xW.default.getNewestTokens(),
        ),
        s = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yM.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || xP.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xW.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var yV = n(514479);
function yk() {
    return (0, T.jsxs)("div", {
        className: yV.d,
        children: [
            (0, T.jsx)($.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yV.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, T.jsx)($.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: ey.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yw = (0, h.E2)(x.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yU(!0, !0);
        return e ? (0, T.jsx)(oj.y, {}) : (0, T.jsx)(yk, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yU(!0, !0);
        return e || 0 === t.length;
    },
});
function yF() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yU(!0, !0);
    return !e && t.length > 0;
}
let yB = (0, h.zD)(x.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yF,
    }),
    yz = (0, h.Qx)(x.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yF,
    });
function yY() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yU(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => ow.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yX = n(306537);
function yH(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s } = e;
    return (
        (0, eI.Ay)(() => {
            (0, CR.N)(s, CD.YX.VIEWED);
        }),
        (0, T.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yW(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, CR.N)(e, CD.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (_k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CR.N)(e, CD.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yK() {
    let e,
        t = (0, CO.uM)(),
        n = (0, _3.fk)(),
        i = (0, _2.b8)(),
        s = (0, NG.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, _z.n)(_F.Vc)) return e;
    }
}
var yZ = n(687123),
    yq = n(444802);
function yQ() {
    let e = (0, yq.WX)();
    f.useEffect(() => {
        (0, CR.N)(CD.YA.AGE_CONFIRMATION_NOTICE, CD.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(ey.A.getArticleURL(e), "_blank"), (0, CR.N)(CD.YA.AGE_CONFIRMATION_NOTICE, CD.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (_k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CR.N)(CD.YA.AGE_CONFIRMATION_NOTICE, CD.YX.CONFIRM_AGE));
        }, []);
    return (0, T.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, T.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function y$() {
    let e = (0, _3.aX)(yZ.t.REACTIVE_CHECK),
        t = (0, _2.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yQ };
    }, [e, t]);
}
var yJ = n(323073),
    y0 = n(386171),
    y1 = n(96607);
let y2 = (0, h.zD)(x.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: y0.hT,
        useDisabled: function () {
            let e = (0, y1.A)() ?? !0,
                t = (0, yJ.sP)(),
                n = (0, _2.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yJ.p5)() && e
                ? _k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    y3 = (0, h.zD)(x.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: y0.tI,
        useDisabled: function () {
            let e = (0, y1.A)() ?? !0,
                t = (0, yJ.sP)(),
                n = (0, _2.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yJ.p5)() && e
                ? _k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    y5 = (0, h.AK)(x.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: x.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    y4 = (0, h.gN)(x.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [y5] });
n(667532);
var y6 = n(390248),
    y8 = n(632119),
    y7 = n(945276),
    y9 = n(389737),
    be = n(566769);
function bt() {
    let e,
        t = (0, y7.A)() ?? !0,
        n = (0, CO.uM)(),
        i = (0, CO.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.explicitContentSettings ?? (0, y8.C$)())),
        {
            explicitContentGuilds: (0, y8.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, y8.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, y8.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, y6.hK)() && t.includes(e$.TO.SHOW)
            ? _k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, y8.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NU.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(y9.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(NU.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function bn() {
    let e,
        t = (0, y7.A)() ?? !0,
        n = (0, CO.uM)(),
        i = (0, CO.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.goreContentSettings ?? (0, yq.T4)())),
        {
            goreContentGuilds: (0, yq.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yq.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yq.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, y6.hK)() && t.includes(e$.TO.SHOW)
            ? _k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yq.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(NU.default["6Af/cw"]) : void 0 };
    return (0, T.jsxs)(y9.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, T.jsx)(be.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(NU.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var bi = n(875162),
    bs = n(636745);
let bl = (0, h.E2)(x.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yq.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: bt,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: bn,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, T.jsxs)(yb.h, {
            children: [
                (0, T.jsx)(yb._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: ey.A.getArticleURL(e) }),
                }),
                (0, T.jsx)(bi.A, { tabs: t, orientation: "vertical", tabsClassName: bs.v }),
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
var br = n(639555),
    ba = n(617641),
    bo = n(546140),
    bu = n(594061);
let bd = (0, h.zD)(x.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: ey.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: bo.L,
        setValue: function (e) {
            return bu.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = Cf._t.create({ value: e });
                },
                bu.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, ba.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, br.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, y7.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    bc = (0, h.zZ)(x.X.CONTENT_CATEGORY, {
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
                x = CP(),
                S =
                    ((s = (0, CO.uM)()),
                    (l = (0, _3.fk)()),
                    (r = (0, _2.b8)()),
                    (a = (0, NG.Z)()),
                    (o = yW(CD.YA.AGE_CONFIRMATION_NOTICE, _B)),
                    (u = yW(CD.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _V.M0)),
                    (d = f.useCallback(() => {
                        (0, CR.N)(CD.YA.AGE_CONFIRMATION_NOTICE, CD.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, CR.N)(CD.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CD.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!s && (0, _z.n)(_F.Vc)) {
                            if (l && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(_X.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(_X.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(_X.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                _ =
                    ((e = (0, NG.Z)()),
                    (t = (0, yq.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(ey.A.getArticleURL(t), "_blank"),
                            (0, CR.N)(CD.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CD.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, CR.N)(CD.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CD.YX.VIEWED);
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
                I =
                    ((g = (0, _3.SJ)()),
                    (m = (0, _2.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (_k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, CR.N)(CD.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CD.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, CR.N)(CD.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CD.YX.VIEWED);
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
                N = y$();
            return x ?? S ?? N ?? I ?? _;
        },
        buildLayout: () => [bl, bd, y2, y3, y4],
    });
var bg = n(923457),
    bm = n(750714);
let bA = (0, h.Qx)(x.X.DM_SPAM_SETTING, {
    useTitle: () => V.intl.string(V.t.puwSkY),
    useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
    useValue: function () {
        let e = U.he.useSetting(),
            t = U.cj.useSetting(),
            n = (0, _.bG)([lS.default], () => lS.default.getCurrentUser()),
            i = (0, _3.yv)(bg.p.SPAM_FILTERS);
        return e !== e$.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? e$.he.FRIENDS_AND_NON_FRIENDS
              : (bm.xY.get(t) ?? e$.he.NON_FRIENDS);
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
var bE = n(189883);
let bh = (0, h.zD)(x.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => V.intl.string(V.t["7x9dyE"]),
    useValue: function () {
        let e = U.FA.useSetting();
        return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        U.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, CO.uM)();
    },
});
var bx = n(665260);
let bS = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bx.UI(t, I.dzt.MUTUAL_FRIENDS) : bx.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CO.uM)();
        },
    }),
    bp = (0, h.zD)(x.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? bx.UI(t, I.dzt.MUTUAL_GUILDS) : bx.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CO.uM)();
        },
    }),
    bT = (0, h.FW)(x.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [bh, bS, bp],
    });
var bf = n(420825);
let b_ = (0, h.zD)(x.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, bf.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    bI = (0, h.zZ)(x.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = bE.A.useConfig({ location: "Friend Request Setting" });
            return e ? V.intl.string(V.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: CP,
        buildLayout: () => [bT, b_],
    });
var bN = n(994500),
    bC = n(428678),
    by = n(49229),
    bb = n(730134),
    bv = n(276573);
function bj(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, T.jsxs)("div", {
        className: bv.wx,
        children: [
            (0, T.jsx)("div", {
                className: bv.zc,
                children: i ? (0, T.jsx)(bC.K, {}) : (0, T.jsx)(ys.EyeSlashIcon, {}),
            }),
            (0, T.jsxs)("div", {
                className: bv.Qq,
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
function bO(e) {
    let { userId: t, last: n } = e,
        i = (0, _.bG)([bN.A], () => bN.A.isBlocked(t)),
        s = (0, _.bG)([lS.default], () => lS.default.getUser(t)),
        [l, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? by.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : by.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, T.jsxs)("div", {
              className: ic()(bv.nM, { [bv.fW]: n }),
              children: [
                  (0, T.jsxs)("div", {
                      className: bv.eF,
                      children: [
                          (0, T.jsx)(bb.A, { user: s, size: v._3.SIZE_40 }),
                          (0, T.jsxs)("div", {
                              className: bv.Qq,
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
function bL(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = f.useState(5);
    return (0, T.jsx)(yb.h, {
        children: (0, T.jsxs)("div", {
            className: bv.Nr,
            children: [
                (0, T.jsx)(bj, { listType: n, numberOfUsers: t.length }),
                (0, T.jsx)("div", {
                    className: bv.jS,
                    children: t.slice(0, i).map((e, n) => (0, T.jsx)(bO, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, T.jsx)("div", {
                          className: bv.vM,
                          children: (0, T.jsx)(n4.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bv.Qf,
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
let bR = (0, h.E2)(x.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, _.bG)([bN.A], () => bN.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([bN.A], () => bN.A.getBlockedIDs());
            return (0, T.jsx)(bL, { userIds: e, listType: "blocked" });
        },
    }),
    bD = (0, h.E2)(x.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, _.bG)([bN.A], () => bN.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([bN.A], () => bN.A.getIgnoredIDs());
            return (0, T.jsx)(bL, { userIds: e, listType: "ignored" });
        },
    }),
    bP = (0, h.zZ)(x.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: ey.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bR, bD],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, _.cf)([bN.A], () => ({
                hasBlockedUsers: bN.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bN.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bG = n(22385),
    bM = n(556534),
    bU = n(111159),
    bV = n(152056),
    bk = n(428031),
    bw = n(978433);
let bF = { label: () => V.intl.string(V.t["32u1Dx"]), value: bG.YG };
var bB = n(307863),
    bz = n(954225);
function bY() {
    return (0, bB.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function bX(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bH = (0, h.zD)(x.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bY,
    useSubtitle: function () {
        let e = (0, bM.Tx)(),
            t = (0, bM.q9)(),
            n = (0, bB.e)();
        return e === bG.YG
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
        let e = (0, bM.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, bk.K)();
        return e === bG.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, CO.uM)();
        return (0, bM.Tx)() === bG.YG && e;
    },
    setValue: function (e) {
        let t = bG.xk.getState().selectedGuildId;
        if (t === bG.YG) {
            var n;
            ((n = !e),
                (0, C5.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: l4.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), bX(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? sv.A.getGuildIds() : []), bX(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bz.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bW = n(116774),
    bK = n(953298);
function bZ(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bq() {
    return V.intl.string(V.t["3o2ojh"]);
}
let bQ = (0, h.zD)(x.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bq,
        useSubtitle: function () {
            let e = (0, bM.q9)(),
                t = ey.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bM.Tx)(),
                t = (0, bk.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, bW.s)(),
                s = (0, CO.uM)(),
                l = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === bG.YG && s ? !l : e === bG.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bM.Tx)(),
                t = (0, CO.uM)(),
                n = (0, bk.K)(),
                i = U.$s.useSetting().includes(e),
                s = (0, bW.s)();
            return e === bG.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bG.xk.getState().selectedGuildId;
            if (!e && (0, bK.w)())
                return void _k.A.showAgeVerificationGetStartedModal({ entryPoint: yX.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bG.YG) {
                var n;
                ((n = !e),
                    (0, C5.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: l4.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), bZ(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? sv.A.getGuildIds() : []), bZ(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bz.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    b$ = (0, h.E2)(x.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bY(), bq()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bG.xk)(),
                s = (0, _.bG)([gR.Ay], () => gR.Ay.getFlattenedGuildIds()),
                l = (0, _.bG)([sv.A], () => sv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, bk.K)()),
                    (0, _.bG)(
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
                    bV.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bG.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bG.YG && null != a
                                ? i(a)
                                : "" === e && n !== bG.YG && i(bG.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bF,
                            id: bF.value,
                            label: bF.label(),
                            leading: (0, T.jsx)("div", {
                                className: bw.KP,
                                children: (0, T.jsx)(bU.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bw.cl,
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
                                    leading: (0, T.jsx)(gY.Ay, {
                                        className: bw.cl,
                                        guild: n,
                                        size: gY.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bG.YG && r > 0;
            return (0, T.jsxs)(T.Fragment, {
                children: [
                    (0, T.jsx)(p3.Z, {
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
                            className: bw.h_,
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
    bJ = (0, h.E2)(x.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bM.Tx)(),
                t = yK();
            return e === bG.YG && null != t;
        },
        Component: function () {
            let e = yK(),
                t = yW(CD.YA.AGE_CONFIRMATION_NOTICE, _B),
                n = yW(CD.YA.CONTENT_AND_SOCIAL_NOTICE, _V.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, T.jsx)(yH, {
                        noticeType: CD.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(_X.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(_X.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, T.jsx)(yH, {
                        noticeType: CD.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(_X.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    b0 = (0, h.zZ)(x.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = CP(),
                t = y$();
            if ((0, bM.Tx)() === bG.YG) return e ?? t;
        },
        buildLayout: () => [b$, bH, bQ, bJ],
    }),
    b1 = (0, h.zZ)(x.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [bA] }),
    b2 = (0, h.zZ)(x.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yY();
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
                let { sortedGames: e } = yY();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, T.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: h4.CD,
                                height: h4.CD,
                            }),
                            shape: h4.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, T.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: h4.YP,
                                    height: h4.YP,
                                }),
                                shape: h4.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            xP.A.fetch();
        },
        buildLayout: () => [yB, yz, yw, yG],
    }),
    b3 = (0, h.t_)(x.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [bc, b1, b0, bI, b2, bP],
    }),
    b5 = (0, h.i4)(x.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yD.l,
        buildLayout: () => [b3],
    });
var b4 = n(782603),
    b6 = n(899847),
    b8 = n(695515);
let b7 = (0, h.Hn)(x.X.MOBILE_NOTIFICATION_DELAY, {
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
    b9 = (0, h.zD)(x.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(x.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    ve = (0, h.Qx)(x.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.getTTSType()),
        setValue: (e) => aZ.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => H.$j,
    }),
    vt = x.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vn = (0, h.bd)(vt, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(vt, {
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
        buildLayout: () => [b7, b9, ve],
    }),
    vi = (0, h.zZ)(x.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vn],
    }),
    vs = (0, h.zD)(x.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, _.bG)([aY.A], () => !aY.A.getDisableUnreadBadge());
        },
        setValue: (e) => aZ.default.setDisableUnreadBadge(!e),
    }),
    vl = (0, h.zZ)(x.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [vs],
    });
var vr = n(840559),
    va = n(997187);
let vo = (0, ug.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var vu = n(723923);
let vd = vu.px.map((e) =>
        (0, h.zD)(`${x.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, _.cf)([va.A], () => va.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, vr.CA)(e.category, t),
        }),
    ),
    vc = (0, h.Tf)(x.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, _.cf)([va.A], () => va.A.getEmailSettings());
            return vu.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, vr.NI)(),
        useVariant: () => "critical-secondary",
    }),
    vg = (0, h.zZ)(x.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = vo.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = va.A.getEmailSettings();
            e || (0, vr.cR)();
        },
        buildLayout: () => [...vd, vc],
    }),
    vm = (0, h.zD)(x.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, _.bG)([aY.A], () => aY.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aZ.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vA = n(832712),
    vE = n(543465),
    vh = n(790782);
let vx = (0, h.zD)(x.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, _.bG)([vE.Ay], () => vE.Ay.useNewNotifications),
    setValue: function (e) {
        (vA.A.setAccountFlag(xl.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hc.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sv.A.getGuildsArray().filter(
                        (e) => vE.Ay.resolveGuildUnreadSetting(e) === vh.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, _.bG)(
            [lS.default, vE.Ay],
            () =>
                lS.default.getCurrentUser()?.isStaff() ||
                lS.default.getCurrentUser()?.isStaffPersonal() ||
                vE.Ay.useNewNotifications,
        ),
});
var vS = n(534654);
let vp = (0, h.zD)(x.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.screenDowntimeReminder),
        setValue: (e) => aZ.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vS.A)(),
                t = (0, NR.Du)();
            return e && t;
        },
    }),
    vT = (0, h.zD)(x.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vS.A)(),
                t = (0, NR.Du)();
            return e && t;
        },
    }),
    vf = (0, h.zD)(x.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    v_ = (0, h.zD)(x.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vI = (0, h.zD)(x.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vN = (0, h.zD)(x.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vC = n(815807);
let vy = (0, h.Hn)(x.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vC.n4)(e, U.Zp.getSetting()),
    }),
    vb = (0, h.zD)(x.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vv = (0, ug.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vj = (0, h.zD)(x.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: xl.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vv.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vO = (0, h.FW)(x.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vI, vf, v_, vb, vj, vN, vy],
    }),
    vL = (0, h.zD)(x.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.taskbarFlash),
        setValue: (e) => aZ.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    vR = (0, h.zZ)(x.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [vm, vL, vO, vx, vT, vp],
    });
var vD = n(965957),
    vP = n(312671),
    vG = n(235079);
let vM = (0, h.zD)(x.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aX.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, _.bG)([vP.A], () => vP.A.getSoundpack()),
            t = aX.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aX.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, vD.p)(e ? t : vG.i.CLASSIC));
    },
    usePredicate: aX.A.useIsEligible,
});
var vU = n(970931);
let vV = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: vU.kB,
        useDisabledMessage: () => ((0, vU.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    vk = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    vw = (0, h.zD)(x.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a$("message3") }),
        useValue: () =>
            (0, _.bG)([aY.A], () => aY.A.getNotifyMessagesInSelectedChannel() && !aY.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
    }),
    vF = (0, h.zD)(x.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.toggleDisableAllSounds(e),
    }),
    vB = (0, h.D1)(x.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => [aJ(vV), vw, aJ(vk), vF],
    }),
    vz = (0, h.AK)(x.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: x.X.SOUNDS_CATEGORY,
    }),
    vY = (0, h.gN)(x.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vz] }),
    vX = (0, h.zZ)(x.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [vM, vB, vY],
    }),
    vH = (0, h.t_)(x.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != b8.A.getAgeGroup() || b8.A.isLoading() || (b8.A.canRefetch() && b6.Ay.initialPageLoad());
        },
        buildLayout: () => [vR, vX, vl, vg, vi],
    }),
    vW = (0, h.i4)(x.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: b4.BellIcon,
        buildLayout: () => [vH],
    }),
    vK = (0, h.WI)(x.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [NQ, yR, b5, vW, Cx],
    });
var vZ = n(387758),
    vq = n(271866),
    vQ = n(147964),
    v$ = n(868511);
let vJ = (0, h.zD)(x.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, _.bG)([vQ.A], () => null != vQ.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sp.openModal)((e) => (0, T.jsx)(v$.A, { ...e })) : vq.cL();
        },
    }),
    v0 = (0, h.zD)(x.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uD.p5,
    }),
    v1 = (0, h.zZ)(x.X.DEVELOPER_CATEGORY, { buildLayout: () => [v0, vJ] }),
    v2 = (0, h.t_)(x.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [v1] }),
    v3 = (0, h.i4)(x.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vZ.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [v2],
    });
var v5 = n(70688),
    v4 = n(830215);
let v6 = (0, h.i4)(x.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: v5.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    v4.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    v8 = (0, h.WI)(x.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [v3, v6],
    }),
    v7 = (0, h.Hr)({ buildLayout: () => [_P, vK, ED, oS, Ts, h2, v8], analyticsKey: "user_settings" });
