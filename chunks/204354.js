n.d(t, { D: () => j0 });
var i,
    l,
    s,
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
    S = n(780964),
    T = n(550640),
    f = n(374193),
    p = n(477900),
    x = n(582128),
    I = n(855986),
    _ = n(652215),
    b = n(346055),
    N = n(534514),
    C = n(95362),
    y = n(97808),
    v = n(778712),
    j = n(821609),
    O = n(775602),
    D = n(432005),
    R = n(963852),
    L = n(763754),
    P = n(20851),
    G = n(95701),
    M = n(486020),
    U = n(253932),
    V = n(792996),
    k = n(345016);
let w = new G.nA({ id: "1337", guild_id: "1337", type: _.rbe.GUILD_TEXT, name: "preview" }),
    F = [
        { status: _.clD.IDLE, discriminator: "2" },
        { status: _.clD.DND, discriminator: "3" },
        { status: _.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, D.rh)({ ...(0, R.Ay)({ channelId: w.id, content: e }), state: _.cmJ.SENT, reactions: t });
}
var X = n(471245);
let z = (0, h.zD)(S.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => V.intl.string(V.t.TZ2hZH),
        useSubtitle: () => V.intl.string(V.t.Q7wgHc),
        useValue: () => U.D_.useSetting(),
        setValue: (e) => U.D_.updateSetting(e),
    }),
    H = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => V.intl.string(V.t.XYvMIX),
        useSubtitle: () => V.intl.string(V.t.T0rbtM),
        useValue: U._z.useSetting,
        setValue: U._z.updateSetting,
    });
var Y = n(100767),
    W = n(435558),
    K = n.n(W),
    Z = n(935399),
    q = n(331322),
    Q = n(893007),
    $ = n(113494),
    J = n(782134),
    ee = n(54570),
    et = n(8880),
    en = n(75804);
let ei = K().debounce((e) => {
    (0, ee.zU)(e);
}, 250);
function el(e) {
    return 0 === e
        ? { value: e, label: V.intl.string(V.t["493lwX"]) }
        : 10 === e
          ? { value: e, label: V.intl.string(V.t.ZSZEdS) }
          : 1 === e
            ? { value: e, label: "x1.0" }
            : { value: e, label: e % 1 == 0 ? "" : void 0 };
}
function es() {
    let [e, t] = x.useState(!1);
    return (
        (0, Z.l0)(() => (0, ee.pr)()),
        (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.SKNnqq),
            icon: e ? $.PauseIcon : J.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, ee.pr)(), t(!1));
                    return;
                }
                ((0, ee.AU)(
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
let er = (0, h.E2)(S.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [V.intl.string(V.t.lsW5Ev)],
        Component: function () {
            let e = (0, I.bG)([et.A], () => et.A.speechRate);
            return (0, p.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(Q.A, {
                        label: V.intl.string(V.t.lsW5Ev),
                        description: V.intl.string(V.t.Ci4wMS),
                        marks: en.P.map(el),
                        defaultValue: e,
                        defaultMark: 1,
                        snapToMarks: !0,
                        minValue: en.P["0"],
                        maxValue: en.P[en.P.length - 1],
                        onChangeEnd: ei,
                        formatValue: (e) => `x${e.toFixed(2)}`,
                    }),
                    (0, p.jsx)(es, {}),
                ],
            });
        },
        usePredicate: () => Y.$j,
    }),
    ea = (0, h.zZ)(S.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => V.intl.string(V.t.XVR0Rb),
        buildLayout: () => [er, H, z],
    }),
    eo = (0, h.AK)(S.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.aTfeGK),
        destinationKey: S.X.APPEARANCE_PANEL,
    }),
    eu = (0, h.gN)(S.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [eo] });
var ed = n(955572);
let ec = (0, h.zD)(S.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => V.intl.string(V.t.OCJg5f),
    useSubtitle: () => V.intl.string(V.t.HEO0s3),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.desaturateUserColors),
    setValue: () => (0, ed.YV)(),
});
var eg = n(652525);
let em = (0, h.zD)(S.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => V.intl.string(V.t["+Isihb"]),
        useSubtitle: () => V.intl.string(V.t.nNZ1Tz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.enableCustomCursor),
        setValue: (e) => (0, ed.ts)(e),
        usePredicate: () => (0, eg.t)("EnableCustomCursorSetting"),
    }),
    eA = (0, h.zD)(S.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => V.intl.string(V.t["S3z+pV"]),
        useSubtitle: () => V.intl.string(V.t["3QuI9+"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ed.Gm)(e),
        hasIcon: !0,
    });
var eE = n(554146);
let eh = (0, h.zD)(S.X.HIGH_CONTRAST_MODE, {
    useTitle: () => V.intl.string(V.t.aZlePv),
    useSubtitle: () => V.intl.string(V.t["v2qF8+"]),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ed.uh)(e ? O._1.HIGH : O._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: f.Xi.NEW, dismissibleContent: eE.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eS = n(406360),
    eT = n(964404);
let ef = (0, h.Qx)(S.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => V.intl.string(V.t.nemtgW),
        useSubtitle: () => V.intl.string(V.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: f.Xi.BETA }),
        useOptions: function () {
            return x.useMemo(
                () => [
                    { name: V.intl.string(V.t.D5Fma9), desc: V.intl.string(V.t.Qj75ck), value: "no-limit" },
                    { name: V.intl.string(V.t.ldcGIH), desc: V.intl.string(V.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eS.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ed.FU)(e);
        },
        useValue: function () {
            return (0, I.bG)([eT.Ay], () => eT.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", V.intl.string(V.t["O/Gjvn"])],
    }),
    ep = (0, h.Hn)(S.X.OFFICIAL_MESSAGE_STYLE, {
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
    ex = (0, h.Hn)(S.X.ROLE_STYLE, {
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
(0, h.Qx)(S.X.ROLE_STYLE, {
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
let eI = (0, h.sN)(S.X.SATURATION, {
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
    eb = n(839214),
    eN = n(502229),
    eC = n(975571);
let ey = (0, eb.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ev = (0, h.zD)(S.X.SYNC_FORCED_COLORS, {
        useTitle: () => V.intl.string(V.t.cguiec),
        useSubtitle: () => V.intl.format(V.t.GwEVE2, { learnMoreLink: eC.A.getArticleURL(_.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, I.bG)([O.Ay], () => O.Ay.syncForcedColors);
            return (
                (0, e_.Ay)(() => {
                    ey.setState({ syncEnabled: O.Ay.syncForcedColors });
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
            if (e === O.Ay.syncForcedColors) return void ey.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, ed.D3)(e), ey.setState({ updateTimeout: null }));
            }, 150);
            ey.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eN.D)(),
    }),
    ej = (0, h.zZ)(S.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => V.intl.string(V.t.JqvyiY),
        buildLayout: () => [eI, ec, eh, em, ev, ef, ex, ep, eA, eu],
    });
var eO = n(397438),
    eD = n(355097),
    eR = n(571674);
function eL(e) {
    return (0, I.bG)([eO.A], () =>
        (function (e) {
            switch (e) {
                case eD._A.REDUCED_MOTION:
                    return V.intl.format(V.t["1dT9V4"], {});
                case eD._A.REDUCED_MOTION_STICKERS:
                    return V.intl.string(V.t["2ExvRu"]);
                case eD._A.GAME_MODE:
                    return V.intl.string(eR.default.VGcdxP);
                default:
                    return;
            }
        })(eO.A.getAppliedOverrideReasonKey(e)),
    );
}
function eP(e) {
    return (0, I.bG)([eO.A], () => eO.A.getAppliedOverrideReasonKey(e) === eD._A.GAME_MODE);
}
let eG = (0, h.zD)(S.X.ANIMATE_EMOJIS, {
        useTitle: () => V.intl.string(V.t.iIaOlc),
        useSubtitle: () => eL("animateEmoji"),
        useDisabled: () => eP("animateEmoji"),
        useValue: () => U.Sf.useSetting(),
        setValue: (e) => U.Sf.updateSetting(e),
    }),
    eM = (0, h.zD)(S.X.ANIMATE_GIFS, {
        useTitle: () => V.intl.string(V.t.wqsK7q),
        useSubtitle: () => eL("gifAutoPlay"),
        useDisabled: () => eP("gifAutoPlay"),
        useValue: () => U.kt.useSetting(),
        setValue: (e) => U.kt.updateSetting(e),
    });
var eU = n(823894);
let eV = (0, h.Qx)(S.X.ANIMATE_STICKERS, {
        useTitle: () => V.intl.string(V.t.sBHIh0),
        useSubtitle: () => eL("animateStickers"),
        useDisabled: () => eP("animateStickers"),
        useOptions: () => [
            { name: V.intl.string(V.t["Xp+X2U"]), value: eU.BJ.ALWAYS_ANIMATE },
            { name: V.intl.string(V.t.IlLT7e), desc: V.intl.string(V.t.bIW9Tl), value: eU.BJ.ANIMATE_ON_INTERACTION },
            { name: V.intl.string(V.t.IGu8x3), value: eU.BJ.NEVER_ANIMATE },
        ],
        useValue: () => U.S0.useSetting(),
        setValue: (e) => U.S0.updateSetting(e),
    }),
    ek = (0, h.zD)(S.X.REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.b3XBzg),
        useSubtitle: () => V.intl.format(V.t.XqvxJc, { helpdeskArticle: eC.A.getArticleURL(_.MVz.REDUCED_MOTION) }),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.prefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "reduce" : "no-preference"),
    }),
    ew = (0, h.zD)(S.X.SYNC_REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.oL55A6),
        useValue: () => (0, I.bG)([O.Ay], () => "auto" === O.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "auto" : O.Ay.systemPrefersReducedMotion),
    });
function eF(e) {
    return V.intl.formatToPlainString(V.t.pyvjRp, { seconds: e });
}
let eB = (0, h.sN)(S.X.TOAST_DURATION, {
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
    eX = (0, h.zZ)(S.X.MOTION_CATEGORY, {
        useTitle: () => V.intl.string(V.t.e3TR1b),
        buildLayout: () => [ek, ew, eB, eM, eG, eV],
    });
var ez = n(688810),
    eH = n(259065),
    eY = n(842671);
let eW = (0, h.zD)(S.X.DISPLAY_NAME_STYLES, {
    useTitle: () => V.intl.string(eY.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, ez.Ay)();
        return V.intl.format(eY.default.aEax6P, {
            onClickOpenModal() {
                (0, eH.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ed.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, h.sN)(S.X.APPEARANCE_FONT_SCALING, {
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
    eq = (0, h.zD)(S.X.UNDERLINE_LINKS, {
        useTitle: () => V.intl.string(V.t.OLZFB8),
        useSubtitle: () => V.intl.string(V.t.DIX3ke),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ed.kI)(e),
    }),
    eQ = (0, h.zZ)(S.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["bxh/R7"]),
        buildLayout: () => [eZ, eq, eW],
    });
var e$ = n(873298);
let eJ = (0, h.Qx)(S.X.APPEARANCE_UI_DENSITY, {
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
    e2 = (0, h.Qx)(S.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
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
function e4(e) {
    return `${e.toFixed(0)}px`;
}
let e5 = (0, h.sN)(S.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => V.intl.string(V.t.Q6lKkg),
    useSubtitle: () => V.intl.string(V.t.p7eUrb),
    markers: e3.qh,
    stickToMarkers: !0,
    minValue: e3.qh["0"],
    maxValue: e3.qh[e3.qh.length - 1],
    useDefaultValue: () => 16 * !U.hH.useSetting(),
    useExternalValue: () => (0, I.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
    getInitialValue: () => O.Ay.messageGroupSpacing,
    onValueRender: e4,
    onMarkerRender: e4,
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
let e7 = (0, h.sN)(S.X.APPEARANCE_ZOOM, {
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
    e9 = (0, h.zZ)(S.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.VKYWk8),
        buildLayout: () => [eJ, e2, e5, e7],
    }),
    te = (0, h.t_)(S.X.ACCESSIBILITY_PANEL, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        buildLayout: () => [eQ, e9, ej, eX, ea],
        decoration: {
            type: f.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = U.hH.useSetting(),
                    t = U.jW.useSetting(),
                    n = x.useMemo(
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
                return (0, p.jsx)(b.M, {
                    children: (0, p.jsxs)("section", {
                        "aria-label": V.intl.string(V.t.RC22qg),
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                className: k.Vf,
                                children: V.intl.string(V.t.RC22qg),
                            }),
                            (0, p.jsxs)(C.Ip, {
                                className: k.VH,
                                children: [
                                    (0, p.jsx)("ol", {
                                        className: k.DZ,
                                        style: { gap: i },
                                        "aria-label": V.intl.string(V.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, p.jsx)(
                                                "li",
                                                {
                                                    children: (0, p.jsx)(P.A, {
                                                        message: t,
                                                        channel: w,
                                                        compact: e,
                                                        author: { ...(0, L.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: k.Jb,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: k.HD,
                                                children: F.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, p.jsx)(
                                                        y.eu,
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
                                            (0, p.jsx)(j.$, {
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
    tt = (0, h.i4)(S.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        icon: T.AccessibilityIcon,
        useMenu: X.A,
        buildLayout: () => [te],
    });
n(321073);
var tn = n(650809),
    ti = n(477782),
    tl = n(620632),
    ts = n(73153),
    tr = n(74396),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(129230),
    tc = n(189081);
let tg = (0, h.zD)(S.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, I.bG)([tc.A], () => tc.A.hasLibraryApplication()),
        useTitle: () => V.intl.string(V.t.fi3UQN),
        useSubtitle: () => V.intl.string(V.t["8mYp37"]),
        useValue: () => !U.l_.useSetting(),
        setValue: (e) => U.l_.updateSetting(!e),
    }),
    tm = (0, h.zZ)(S.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [tg],
    });
var tA = n(284009),
    tE = n.n(tA),
    th = n(199966),
    tS = n(963935);
function tT(e) {
    let { title: t } = e;
    return t;
}
function tf(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tp(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, p.jsx)(tf, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tx(e) {
    return e.type === tS.Z6.LIST;
}
function tI(e, t) {
    let { limit: n = 2, formatter: i = tT } = t ?? {};
    tE()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, th._)(),
        r = l.get(e) ?? s.get(e);
    tE()(
        null != r && (r.type === tS.Z6.ACCORDION || tx(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tx(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return x.useMemo(() => {
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
        let l = Math.min(n, 3);
        if (t.length <= l)
            if (1 === t.length)
                return V.intl.format(V.t["3H9tCW"], { settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return V.intl.format(V.t.MWryo6, {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return V.intl.format(V.t.a00b5G, {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tp({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? V.intl.format(V.t.O8vNbS, { settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? V.intl.format(V.t["acXG/W"], {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                })
              : V.intl.format(V.t["5+ldWc"], {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tp({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var t_ = n(951260);
let tb = (0, h.zD)(S.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tN = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    tC = (0, h.zD)(S.X.ENABLE_SEND_BUTTON, tN),
    ty = (0, h.zD)(S.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tN,
        usePredicate: () => !(0, t_.n)("EnableSendButtonOutsideExperiment"),
    }),
    tv = (0, h.zD)(S.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => V.intl.string(V.t.WggFoO),
        useSubtitle: () => V.intl.string(V.t.XpErGj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ed.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tj = (0, h.zD)(S.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => V.intl.string(V.t.YErWkD),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ed.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tO = (0, h.zD)(S.X.ENABLE_GIF_BUTTON, {
        useTitle: () => V.intl.string(V.t.k7oNEz),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ed.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tD = (0, h.zD)(S.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tR = (0, h.Qx)(S.X.EXPRESSION_PICKER_FORMAT, {
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
    tL = (0, h.FW)(S.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => V.intl.string(V.t["V9/cNN"]),
        buildLayout: () => [tR, tv, tj, tO, tD],
    }),
    tP = (0, h.bd)(S.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.IwVGQs) : V.intl.string(V.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tI(S.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, t_.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tC, tb, tL],
    });
var tG = n(565645);
let tM = (0, h.zD)(S.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => V.intl.string(V.t["79qal8"]),
        useSubtitle: () =>
            V.intl.format(V.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(tG.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: U.j7.useSetting,
        setValue: U.j7.updateSetting,
    }),
    tU = (0, h.zD)(S.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => V.intl.string(V.t.c0oFDw),
        useValue: U.BQ.useSetting,
        setValue: U.BQ.updateSetting,
    }),
    tV = (0, h.zD)(S.X.CHAT_TEXT_BOX_PREVIEWS, {
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
let tw = (0, h.zD)(S.X.CHAT_STICKERS_AUTOCOMPLETE, {
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
    tF = (0, h.zZ)(S.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ob7VMB),
        useSearchTerms: () => [V.intl.string(V.t.onqU6o)],
        buildLayout: () => [tV, tM, tw, tU, ty, tP],
    });
var tB = n(526162),
    tX = n(793943),
    tz = n(792656),
    tH = n(830543),
    tY = n(145359),
    tW = n(161368),
    tK = n(236814),
    tZ = n(211824),
    tq = n(701256);
let tQ = (0, h.E2)(S.X.APPEARANCE_HEXAGON_CAMPAIGN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT), V.intl.string(tq.default.EWenaG)],
    Component: function () {
        return (0, p.jsx)(tW.A, { type: "settings", iconSize: tK.N8.SIZE_48 });
    },
    usePredicate: () => (0, tY.Lz)(tZ.vB.APP_ICON, "HexagonCampaignAppIconSetting") !== tZ.S9.HIDDEN,
});
var t$ = n(785007),
    tJ = n(848971),
    t0 = n(915089),
    t1 = n(739053),
    t2 = n(82498),
    t3 = n(682901);
let t4 = (0, h.E2)(S.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT)],
    Component: function () {
        let e = (0, t0.GV)(),
            { ref: t, ...n } = (0, t$._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
        return (
            (0, Z.Ay)(() => {
                i &&
                    (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t3.e.APP_ICON_UPSELL,
                        location_stack: [tk.A.USER_SETTINGS],
                    }),
                    (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, [tk.A.USER_SETTINGS], () =>
                        (0, t2.uq)(t3.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, p.jsx)("div", {
                ...n,
                ref: t,
                children: (0, p.jsx)(q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(tJ.m, { disabled: i, size: tK.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t5() {
    ((0, tX.nf)(tX.HP.APP_ICON), (0, tH.default)());
}
function t6() {
    return (0, p.jsx)(tz.A, {
        subscriptionTier: t3.pe.TIER_2,
        defaultTextOverride: V.intl.string(V.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: _.ZSU.BUTTON_CTA, objectType: _.btD.BUY },
        fullWidth: !0,
    });
}
let t8 = (0, h.zZ)(S.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RPh2ou),
        useSubtitle: () => V.intl.string(V.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([tB.A], () => tB.A.isUpsellPreview);
            return x.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: f.UV.BUTTON,
                        text: V.intl.string(V.t["6acvnZ"]),
                        onClick: t5,
                    }),
                    e && t.push({ id: "upsell-button", type: f.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t6 }),
                    { type: f.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t4, tQ],
    }),
    t7 = (0, h.AK)(S.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.UDr3Iy),
        useSearchTerms: () => [V.intl.string(V.t.UDr3Iy)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    t9 = (0, h.gN)(S.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t7] });
var ne = n(143129),
    nt = n(794412),
    nn = n(749884),
    ni = n(708526);
let nl = eC.A.getArticleURL(_.MVz.FAVORITES_GUILD),
    ns = (0, h.E2)(S.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [V.intl.string(ni.default.OT1NK5)],
        Component: function () {
            let e = (0, nn.A)(!1);
            return (0, p.jsx)(ne.d, {
                checked: e,
                description: V.intl.format(ni.default.GR2KOG, { helpCenterLink: nl }),
                onChange: nt.kG,
                label: V.intl.string(ni.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    nr = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => V.intl.string(V.t.U47N1p),
        useValue: U.hD.useSetting,
        setValue: U.hD.updateSetting,
    }),
    na = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => V.intl.string(V.t.VP11No),
        useValue: U.X6.useSetting,
        setValue: U.X6.updateSetting,
    }),
    no = (0, h.FW)(S.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => V.intl.string(V.t["9nyle0"]),
        buildLayout: () => [nr, na],
    }),
    nu = (0, h.zD)(S.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => V.intl.string(V.t["5bK9vw"]),
        useValue: U.rs.useSetting,
        setValue: U.rs.updateSetting,
    }),
    nd = (0, h.zD)(S.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => V.intl.string(V.t["zge/fP"]),
        useValue: U.jW.useSetting,
        setValue: U.jW.updateSetting,
    });
var nc = n(28863),
    ng = n(766075);
let nm = (0, h.zD)(S.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => V.intl.string(V.t.JgjNG3),
        useSubtitle: () => {
            if (!U.hH.useSetting())
                return V.intl.format(V.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            nc.Anchor,
                            {
                                onClick: () => (0, ng.openUserSettings)(S.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
    nA = (0, h.Hn)(S.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => V.intl.string(V.t.QgwmVz),
        useOptions: () => [
            { value: _.P6Q.ON_CLICK, id: _.P6Q.ON_CLICK, label: V.intl.string(V.t["KFH/me"]) },
            { value: _.P6Q.ALWAYS, id: _.P6Q.ALWAYS, label: V.intl.string(V.t.Pe1RbL) },
            { value: _.P6Q.IF_MODERATOR, id: _.P6Q.IF_MODERATOR, label: V.intl.string(V.t.K5VTBE) },
        ],
        useValue: U.gs.useSetting,
        setValue: U.gs.updateSetting,
    }),
    nE = (0, h.zD)(S.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => V.intl.string(V.t.AInv5m),
        useValue: U.SY.useSetting,
        setValue: U.SY.updateSetting,
    }),
    nh = (0, h.zZ)(S.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.OIgYlQ),
        useSearchTerms: () => [V.intl.string(V.t["/VQax8"])],
        buildLayout: () => [no, nu, nd, nA, nE, nm, ns, t9],
    });
var nS = n(753806),
    nT = n(145331);
let nf = (0, h.Qx)(S.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            (t ? nS.A.cleanUpPrivateChannelSearchState() : nS.A.cleanUpSearchState({ type: _.I4_.DMS }),
                (0, nT._k)({
                    prevIsCrossDMSettingEnabled: U.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nT.vy.USER_SETTINGS,
                }),
                U.Hu.updateSetting(t));
        },
    }),
    np = (0, h.zZ)(S.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5h0QOP"]),
        buildLayout: () => [nf],
    });
var nx = n(574381);
let nI = (0, h.zD)(S.X.STREAMING_AUTO_STREAMER_MODE, {
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
            return nx.Av;
        },
    }),
    n_ = (0, h.zD)(S.X.STREAMING_STREAMER_MODE, {
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
var nb = n(77729),
    nN = n(589051),
    nC = n(415173),
    ny = n(999834);
let nv = [],
    nj = (0, h.Hn)(S.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ny.b_)(),
                t = (0, nN.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return x.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nC.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, I.bG)([tu.A], () => tu.A.getSettings().disabledOverlayWidgets ?? nv);
        },
        setValue: (e) => to.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nO = (0, h.zD)(S.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => V.intl.string(V.t.LSBUGR),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    nD = (0, h.zD)(S.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nR = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => V.intl.string(V.t.OrqYDP),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nL = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sUAbLd),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nP = (0, h.zD)(S.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t["iA81+a"]),
        useSubtitle: () => V.intl.string(V.t.P4vj0h),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => nb.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nG = (0, h.FW)(S.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.xYhOEh),
        buildLayout: () => [nO, nD, nR, nL, nP, nj],
    }),
    nM = (0, h.zZ)(S.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.S5GfOW),
        buildLayout: () => [n_, nI, nG],
    });
var nU = n(47671),
    nV = n(141343),
    nk = n(665267);
let nw = (0, h.zD)(S.X.SYNC_PROFILE_THEMES, {
    useTitle: () => V.intl.string(V.t.C00w4l),
    useValue: () => (0, I.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
    setValue: () => (0, ed.M1)(),
});
var nF = n(817281),
    nB = n(284016),
    nX = n(413599);
let nz = (0, h.zD)(S.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => V.intl.string(V.t["/B+kEV"]),
    useSearchTerms: () => [V.intl.string(V.t.Ksh3ik)],
    useValue: function () {
        return (0, I.bG)([nB.A], () => !1 !== nB.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, I.bG)([nX.A], () => nX.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nX.A.theme,
            i = nU.A.gradientPreset?.id ?? null,
            l = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = _.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nF.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nH = n(714907);
let nY = (0, h.AK)(S.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.nhVQDJ),
        useSearchTerms: () => [V.intl.string(V.t.nhVQDJ)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    nW = (0, h.gN)(S.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nY] }),
    nK = (0, h.zZ)(S.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, I.bG)([O.Ay], () => O.Ay.useForcedColors)
                ? {
                      type: f.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eN.D)()
                          ? V.intl.format(V.t.Jae48E, {
                                onClick: () => {
                                    (0, ng.openUserSettings)(S.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : V.intl.string(V.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, I.bG)([nU.A, O.Ay], () => O.Ay.useForcedColors || nU.A.isPreview),
                t = (0, nV.V)();
            return e || t
                ? null
                : {
                      type: f.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: f.UV.BUTTON,
                              text: V.intl.string(V.t["E+COuA"]),
                              onClick: nk.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nH.k, nz, nw, nW],
    }),
    nZ = (0, h.t_)(S.X.APPEARANCE_PANEL, {
        initialize: function () {
            tr.A.isFetching() ||
                (ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                tl.Bo.get({ url: _.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        buildLayout: () => [nK, t8, nh, tF, np, nM, tm],
    }),
    nq = [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nQ = (0, h.i4)(S.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["iHH+ky"]),
        icon: tn.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ta.A)(),
                l =
                    ((e = U.D_.useSetting()),
                    (t = U.SI.useSetting()),
                    e
                        ? null
                        : (0, p.jsx)(ti.sL, {
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
                s =
                    ((n = (0, I.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, p.jsx)(ti.sL, {
                        id: "streamer-mode-toggle",
                        label: V.intl.string(V.t.p9ZAJZ),
                        action: () => {
                            to.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return x.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, p.jsx)(ti.rX, { label: V.intl.string(V.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, p.jsx)(ti.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => nq,
        buildLayout: () => [nZ],
    });
var n$ = n(37646),
    nJ = n(172471);
let n0 = (0, h.t_)(S.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nJ.F],
    }),
    n1 = (0, h.i4)(S.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n$.LanguageIcon,
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [n0],
    });
var n2 = n(3137),
    n3 = n(646514),
    n4 = n(314116),
    n5 = n(270003),
    n6 = n(834730),
    n8 = n(939249),
    n7 = n(369606),
    n9 = n(320448),
    ie = n(604121),
    it = n(725951),
    ii = n(400492),
    il = n(669067),
    is = n(115063),
    ir = n(415677),
    ia = n(927018),
    io = n(591563),
    iu = n(532197),
    id = n(403362),
    ic = n(874486),
    ig = n(503698),
    im = n.n(ig),
    iA = n(536637),
    iE = n.n(iA),
    ih = n(5377),
    iS = n(906688),
    iT = n(98705);
function ip(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, ia.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = iE()(n),
        m = null != o && l,
        A = m ? n8.D : "div";
    return (0, p.jsxs)(A, {
        className: im()(iT.kL, m && iT.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: iT.zc,
                children: (0, p.jsx)(iS.A, { achievementId: t, size: iS.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, p.jsxs)("div", {
                className: iT.VW,
                children: [
                    null != n &&
                        (0, p.jsx)(n6.E, {
                            variant: "footnote/semibold",
                            color: "text-muted",
                            className: iT.YR,
                            children: (0, ih.mk)(g),
                        }),
                    (0, p.jsx)(n6.E, { variant: "body-md/medium", color: d, children: s() }),
                    (0, p.jsx)(n6.E, { variant: "body-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ix = n(545744);
function iI(e) {
    let { onBackClick: t } = e,
        n = (0, I.bG)([ic.A], () => ic.A.getAllUnlockedAchievements()),
        i = x.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = x.useMemo(
            () =>
                Object.values(ia.l0)
                    .filter(id.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(n8.D, {
                onClick: t,
                className: ix.vv,
                children: [
                    (0, p.jsx)(iu.A, { direction: iu.A.Directions.LEFT, className: ix.Kk }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: V.intl.string(V.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: ix.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: ix.if,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: V.intl.string(V.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(n6.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: V.intl.string(V.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: ix.nr,
                        children: (0, p.jsx)(n7.TrophyIcon, {
                            size: "custom",
                            color: n3.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, p.jsx)("div", {
                    className: ix.yF,
                    children: (0, p.jsx)("div", {
                        className: ix.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, p.jsx)(ip, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, p.jsxs)("div", {
                    className: ix.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: ix.if,
                            children: (0, p.jsx)(n6.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: V.intl.string(V.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: ix.Eh,
                            children: l.map((e) => (0, p.jsx)(ip, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: ix.yF, children: (0, p.jsx)("div", { className: ix.F3 }) }),
        ],
    });
}
var i_ = n(224964),
    ib = n(31408),
    iN = n(368588);
let iC = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iy = (0, W.range)(0, 11),
    iv = (0, W.range)(0, 2.25, 0.25),
    ij = (0, W.range)(1, 11),
    iO = (0, W.range)(1, 26),
    iD = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iR(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, p.jsx)(
                ne.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => l({ ...i, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, p.jsx)(n5.n, { label: V.intl.string(V.t.bWVN1D), children: s });
}
function iL(e) {
    let { children: t } = e;
    return (0, p.jsx)(n6.E, { className: iN.iF, variant: "body-sm/normal", color: "text-default", children: t });
}
function iP(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    return (0, p.jsx)(ne.d, {
        label: V.intl.string(V.t.vuiXm9),
        description: V.intl.string(V.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, ir._)(ia.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n4.A)({
                          title: l ? V.intl.string(V.t["FxT+p0"]) : V.intl.string(V.t.TAZ4F9),
                          subtitle: l ? V.intl.string(V.t.gmixrx) : V.intl.string(V.t.jN3t3K),
                          confirmText: V.intl.string(V.t.JFfins),
                          onConfirm: () => i(l ? iC : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iG(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: l,
                confettiEnabledLocations: s,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, p.jsxs)(n5.n, {
        label: V.intl.string(V.t.mqxwJO),
        children: [
            (0, p.jsx)(ne.d, {
                label: V.intl.string(V.t.s0KCgF),
                description: V.intl.string(V.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iN.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.a18Sug) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.vd0D81),
                        disabled: a,
                        marks: ij,
                        snapToMarks: !0,
                        minValue: ij[0],
                        maxValue: ij[ij.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iN.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.xoldVn) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.sPO3ij),
                        disabled: a,
                        marks: iO,
                        snapToMarks: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(iR, {
                disabled: a,
                locations: [
                    {
                        location: ib.k.CHAT_INPUT,
                        title: V.intl.string(V.t.elTtyz),
                        description: V.intl.string(V.t.HtKfMi),
                    },
                    {
                        location: ib.k.REACTION,
                        title: V.intl.string(V.t.Ik4VIa),
                        description: V.intl.string(V.t.y4rqK0),
                    },
                    {
                        location: ib.k.MEMBER_USER,
                        title: V.intl.string(V.t.ZXBlAn),
                        description: V.intl.string(V.t["m9RD+c"]),
                    },
                    {
                        location: ib.k.CALL_TILE,
                        title: V.intl.string(V.t.V66giQ),
                        description: V.intl.string(V.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iM(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, p.jsxs)(n5.n, {
        label: V.intl.string(V.t.Xz0ole),
        children: [
            (0, p.jsx)(ne.d, {
                label: V.intl.string(V.t.o3iV7B),
                description: V.intl.string(V.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, p.jsx)(ne.d, {
                label: V.intl.string(V.t["Ax+IoW"]),
                description: V.intl.string(V.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iN.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.L0oQuh),
                        disabled: r,
                        marks: iy,
                        snapToMarks: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => s({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iU(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, p.jsxs)(n5.n, {
        label: V.intl.string(V.t.wVS5Sd),
        children: [
            (0, p.jsx)(ne.d, {
                label: V.intl.string(V.t.N004zO),
                description: r ? V.intl.string(V.t.GckHGw) : V.intl.string(V.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iN.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.UxnnC4),
                        disabled: a,
                        marks: iv,
                        snapToMarks: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, ir._)(ia.sn.MORE),
                                s(t, 1));
                        },
                        formatValue: (e) => (e === iv[iv.length - 1] ? V.intl.string(V.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(iR, {
                disabled: a,
                locations: [
                    {
                        location: ib.uD.CHAT_INPUT,
                        title: V.intl.string(V.t.vUcvPP),
                        description: V.intl.string(V.t.y00OrF),
                    },
                    {
                        location: ib.uD.VOICE_USER,
                        title: V.intl.string(V.t.TcRO54),
                        description: V.intl.string(V.t.YJCxVY),
                    },
                    {
                        location: ib.uD.MENTION,
                        title: V.intl.string(V.t.oW4shO),
                        description: V.intl.string(V.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iV(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(n5.n, {
        label: V.intl.string(V.t.EuXv2q),
        children: (0, p.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iN.hw,
                    children: (0, p.jsx)(j.$, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tH.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function ik(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(n8.D, {
        onClick: function () {
            return t(1);
        },
        className: iN.Tq,
        children: [
            (0, p.jsx)("div", {
                className: iN.w1,
                children: (0, p.jsx)(n7.TrophyIcon, { size: "md", color: n3.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: iN.qL,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: V.intl.string(V.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(n9.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: iN.nT,
            }),
        ],
    });
}
function iw() {
    return n
        .e(504660)
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iF(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, I.cf)([n2.A], () => n2.A.getState()),
        [l, s] = x.useState({ x: 0, y: 0 }),
        r = (0, i_.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, ii.Ak)("poggermode_enabled"),
                (0, is.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, io.O9)(e),
            null == t)
        )
            return;
        let A =
            ((s = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? s) && (u ?? o));
        0 === t && A && r.fire(l.x, l.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, is.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        x.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, p.jsx)(iP, { settings: i, updateSettings: a }),
                (0, p.jsx)(ik, { onChangePage: t }),
                (0, p.jsx)(iM, { settings: i, updateSettings: a }),
                (0, p.jsx)(iU, { settings: i, updateSettings: a }),
                (0, p.jsx)(iG, { settings: i, updateSettings: a }),
                (0, p.jsx)(iV, { updateSettings: a }),
            ],
        })
    );
}
function iB(e) {
    return 0 === e ? it.f.LEFT : it.f.RIGHT;
}
let iX = (0, h.E2)(S.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = x.useState(0),
                [n, i] = x.useState(iB(e)),
                [l, s] = x.useState(!1),
                r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
                a = l && !r;
            return (
                x.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iB(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                x.useEffect(() => {
                    (0, il._)(iD[e]);
                }, [e]),
                x.useEffect(() => {
                    Math.random() > 0.99 && (0, ir._)(ia.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(it.A, {
                            className: iN.l3,
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
                                        return (0, p.jsx)(iF, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, p.jsx)(iI, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? iN.Sr : iN.IP,
                            children: (0, p.jsx)(ie.a, {
                                className: iN.gT,
                                importData: iw,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => s(!1),
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
    iz = (0, h.zZ)(S.X.POGGERMODE_CATEGORY, { buildLayout: () => [iX] });
var iH = n(212043);
let iY = (0, h.t_)(S.X.POGGERMODE_PANEL, { useTitle: () => V.intl.string(V.t.AtCukI), buildLayout: () => [iz] }),
    iW = (0, h.i4)(S.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: n(724405), className: iH.$ }),
        usePredicate: () => (0, I.bG)([n2.A], () => n2.A.settingsVisible),
        buildLayout: () => [iY],
    });
var iK = n(307301),
    iZ = n(410767),
    iq = n(683071),
    iQ = n(97260),
    i$ = n(340344),
    iJ = n(57757),
    i0 = n(188321),
    i1 = n(695366),
    i2 = n(812729),
    i3 = n.n(i2),
    i4 = n(587895),
    i5 = n(429913),
    i6 = n(616356),
    i8 = n(644727);
function i7(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i9() {
    let e = (0, I.bG)([i6.A], () => i6.A.getStreamerActiveStreamMetadata()),
        t = (0, I.bG)(
            [i8.Ay],
            () => {
                let e = i8.Ay.getVisibleGame();
                return null != e ? i8.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i3(),
        ),
        [n] = (0, i5.A)([i7(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var le = n(769015),
    lt = n(988468),
    ln = n(526919),
    li = n(435075);
function ll(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, p.jsx)("div", {
              className: li.zc,
              children: (0, p.jsx)(i1.CircleErrorIcon, { size: "sm", color: n3.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: li.nt,
              children: [
                  (0, p.jsx)(le.A, { game: n, pid: t.pid, size: le.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: li.Am,
                      children: (0, p.jsx)(i1.CircleErrorIcon, {
                          size: "sm",
                          color: n3.A.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function ls(e) {
    let t = (0, I.bG)([lt.Ay], () => lt.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i9();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, ln.NP)(),
        s = l && null != n && t === _.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function lr(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = ls(n);
    return i
        ? (0, p.jsxs)("div", {
              className: im()(li.kL, t),
              children: [
                  (0, p.jsx)(ll, { game: l, application: s }),
                  (0, p.jsxs)("div", {
                      className: li.FS,
                      children: [
                          (0, p.jsx)(n6.E, {
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != l
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(n6.E, {
                              variant: "body-xs/medium",
                              color: "text-muted",
                              children: V.intl.format(V.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      text: V.intl.string(V.t["1iI46O"]),
                      onClick: function () {
                          (0, ln.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var la = n(404778),
    lo = n(579370),
    lu = n(532624),
    ld = n(691885),
    lc = n(452027),
    lg = n(408278),
    lm = n(241326),
    lA = n(866665),
    lE = n(140735),
    lh = n(489718),
    lS = n(827343),
    lT = n(368484),
    lf = n(350535),
    lp = n(189213),
    lx = n(192308),
    lI = n(95477),
    l_ = n(128376),
    lb = n(290676);
let lN = [];
var lC = n(235986),
    ly = n(320264),
    lv = n(734057),
    lj = n(808728),
    lO = n(71393),
    lD = n(967198),
    lR = n(926140),
    lL = n(847893);
function lP() {}
let lG = [lR.rD.VOICE_CHANNEL];
function lM(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lU() {
    return (0, p.jsx)("div", {
        className: lL.i1,
        children: (0, p.jsx)(n6.E, {
            variant: "body-md/medium",
            color: "text-muted",
            className: lL.GN,
            children: V.intl.string(V.t.zHjCd1),
        }),
    });
}
function lV(e) {
    let { keybind: t, className: n } = e,
        i = x.useRef(t);
    x.useEffect(() => {
        i.current = t;
    });
    let [l, s] = x.useState(t.params?.channelId ?? void 0),
        r = x.useCallback(() => {
            (0, lx.mM)(
                async () => (e) =>
                    (0, p.jsx)(lk, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iQ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: im()(lL.a8, n),
        children: (0, p.jsx)(lc.D, {
            label: V.intl.string(V.t.q4JpM8),
            children: (0, p.jsxs)(lC.A, {
                align: lC.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lL.$X, children: (0, p.jsx)(lw, { channelId: l }) }),
                    (0, p.jsx)(lC.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lk(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = x.useId(),
        a = x.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: n,
                    autocompleterOptions: i,
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = x.useState(""),
                [a, o] = x.useState(lN),
                u = x.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lN) : o(e);
                }, []);
            x.useEffect(
                () =>
                    l_.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = x.useState(() => new lb.A(u, n, void 0, i));
            return (
                x.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: x.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lG, autocompleterBeforeCreateSearchContext: lM }),
        c =
            ((t = "" !== o),
            (n = (0, I.yK)(
                [lj.A, lv.A, lD.A],
                () => {
                    let e = lD.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lj.A.getVocalChannelIds(e)) {
                        let e = lv.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = x.useState(0),
                i = x.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                x.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    x.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lR.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lR.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lv.A.getChannel(n.parent_id) : void 0,
                              r = lO.A.getGuild(n.guild_id);
                          return (0, p.jsx)(
                              ly.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      (s(n.id), l());
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != r ? (0, p.jsx)("div", { className: lL.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(lU, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(lp.a, {
        transitionState: i,
        onClose: l,
        title: V.intl.string(V.t.Dm8O4e),
        subtitle: V.intl.string(V.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lI.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            l();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === lR.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? s(void 0) : s(e.id), l());
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
function lw(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, I.cf)([lv.A, lO.A], () => {
            let e = null != t ? lv.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lv.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lO.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, p.jsx)(n6.E, {
              variant: "body-md/medium",
              color: "text-muted",
              className: lL.GN,
              children: V.intl.string(V.t["/fYIK7"]),
          })
        : (0, p.jsx)(ly.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lP,
              onFocus: lP,
              onMouseEnter: lP,
              focused: !1,
              children: null != l ? (0, p.jsx)("div", { className: lL.J5, children: l.name }) : null,
          });
}
var lF = n(650583),
    lB = n(731854),
    lX = n(94451);
function lz(e) {
    let { keybind: t } = e,
        n = (0, I.bG)([lu.Ay], () => lu.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([lu.Ay], () => lu.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? lu.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, lo.Rg)(i)
                      ? (0, p.jsx)("div", {
                            className: lX.$e,
                            children: (0, p.jsx)(iq.w, {
                                type: "info",
                                message: V.intl.format(V.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, p.jsx)("div", {
                        className: lX.$e,
                        children: (0, p.jsx)(iq.w, {
                            type: "warning",
                            message: V.intl.string(V.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, p.jsx)("div", {
                  className: lX.$e,
                  children: (0, p.jsx)(iq.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" }),
              })
        : null;
}
function lH(e) {
    let { keybind: t } = e,
        n = lf.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, p.jsx)("div", {
              className: lX.$e,
              children: (0, p.jsx)(iq.w, { type: "warning", message: V.intl.string(V.t["7lQlw3"]), role: "status" }),
          })
        : lF.Yy.has(n)
          ? (0, p.jsx)("div", {
                className: lX.$e,
                children: (0, p.jsx)(iq.w, {
                    type: "warning",
                    message: V.intl.format(V.t.MOIaNd, {
                        keyboardNavArticle: eC.A.getArticleURL(_.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function lY(e) {
    let { keybind: t } = e;
    return t.action === _.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lV, { keybind: t, className: lX._M }) : null;
}
let lW = x.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = x.useCallback((e) => iQ.A.setKeybind({ ...t, action: e }), [t]),
        s = x.useCallback(
            (e) => {
                if (
                    ((0, lo.uL)(t.id, t.shortcut, e, lu.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === _.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? lB.x.DEFAULT;
                    lS.default.setMode(lt.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iQ.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = x.useCallback(() => iQ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = x.useCallback(() => iQ.A.deleteKeybind(t.id), [t.id]),
        o = x.useId(),
        u = x.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, p.jsxs)("div", {
        className: lX.f_,
        children: [
            (0, p.jsx)(lH, { keybind: t }),
            (0, p.jsx)(lz, { keybind: t }),
            (0, p.jsx)("div", {
                className: lX.XI,
                children: (0, p.jsx)(ld.l, {
                    selectionMode: "single",
                    label: V.intl.string(V.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: lX.LE,
                children: (0, p.jsx)(lc.D, {
                    label: V.intl.string(V.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(lT.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: lX.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(lg.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lm.TrashIcon,
                            "aria-label": V.intl.string(V.t.qEHmmB),
                        }),
                    (0, p.jsx)(lA.m, {
                        text: V.intl.string(t.enabled ? V.t.pNYGbx : V.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(lE.A, {
                                    id: o,
                                    children: V.intl.format(t.enabled ? V.t["myr/Y0"] : V.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(lh.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(n6.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                className: lX.h_,
                children: n[t.action],
            }),
            (0, p.jsx)(lY, { keybind: t }),
        ],
    });
});
var lK = n(426819),
    lZ = n(734066),
    lq = n(880144),
    lQ = n(994778),
    l$ = n(244055),
    lJ = n(603933);
function l0() {
    let e = (0, I.bG)([lu.Ay], () => lu.Ay.isWaylandPortalActive()),
        t = x.useMemo(() => e && (0, lo.u)(), [e]);
    return e
        ? (0, p.jsx)(iq.w, {
              type: "info",
              message: V.intl.string(V.t.AcH7R7),
              role: "none",
              action: t ? { text: V.intl.string(V.t.ZPHaPE), onClick: lo.qM } : void 0,
          })
        : null;
}
let l1 = function () {
        let e,
            t,
            n,
            i,
            l,
            s,
            r,
            {
                customizableKeybinds: a,
                keybindDescriptions: o,
                keybindActionTypes: u,
            } = ((e = (0, I.bG)([lu.Ay], () => lu.Ay.getState())),
            (t = (0, I.bG)([lt.Ay], () => (0, lq.A)(lt.Ay))),
            (n = (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.VIDEO))),
            (i = (0, I.bG)([l$.A], () => l$.A.isSupported)),
            (l = (0, lZ.sw)()),
            (s = (0, lZ.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
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
                        .reject((e) => !l && (e.action === _.hCu.SOUNDBOARD || e.action === _.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({ keybinds: e, enableClips: l, enableScreenshotKeybind: s, allowSoundboard: (r = (0, e8.uF)()) }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            allowSoundboard: l,
                            enableClips: s,
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
                            ((0, e8.uF)() || lt.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: _.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e8.xl)() &&
                            (a.push(
                                { id: "navigate-back", value: _.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: _.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: _.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: _.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            l &&
                                a.push(
                                    { id: "soundboard", value: _.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: _.hCu.SOUNDBOARD_HOLD },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: _.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: _.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, lQ.B)(n) ?? n };
                        })
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    allowSoundboard: r,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                }),
                keybindDescriptions: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            videoSupported: i,
                            enableClips: l,
                            enableScreenshotKeybind: s,
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
                        n && (0, e8.uF)() && (r[_.hCu.TOGGLE_GO_LIVE_STREAMING] = V.intl.string(V.t.s4C238)),
                        (0, e8.xl)() &&
                            ((r[_.hCu.NAVIGATE_BACK] = V.intl.string(V.t.nKDlEt)),
                            (r[_.hCu.NAVIGATE_FORWARD] = V.intl.string(V.t.DK0FFk)),
                            (r[_.hCu.SOUNDBOARD] = (0, e8.uF)()
                                ? V.intl.string(V.t["5wJefL"])
                                : V.intl.string(V.t.gzjsSP)),
                            (r[_.hCu.SOUNDBOARD_HOLD] = (0, e8.uF)()
                                ? V.intl.string(V.t.RRkZc9)
                                : V.intl.string(V.t.laNlTl)),
                            l &&
                                ((r[_.hCu.SAVE_CLIP] = V.intl.string(V.t.z3Wbam)),
                                s && (r[_.hCu.SAVE_SCREENSHOT] = V.intl.string(V.t.m0zd57)))),
                        r
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    videoSupported: n,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                }),
            });
        return 0 === a.length
            ? (0, p.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(l0, {}),
                      (0, p.jsx)(n6.E, {
                          variant: "body-sm/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.vyYgWp),
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(l0, {}),
                      (0, p.jsx)("div", {
                          className: lJ.A,
                          children: a.map((e, t) =>
                              (0, p.jsxs)(
                                  x.Fragment,
                                  {
                                      children: [
                                          (0, p.jsx)(lW, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, p.jsx)(la.c, { className: lJ.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    l2 = (0, h.E2)(S.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["069nVT"])],
        Component: function () {
            return nx.Av
                ? (0, p.jsx)(l1, {})
                : (0, p.jsx)(iq.w, {
                      type: "info",
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: _.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var l3 = n(475358),
    l4 = n(552992),
    l5 = n(793650);
function l6(e) {
    let { children: t } = e;
    return t([lK.Q_.MESSAGE, lK.Q_.NAVIGATION, lK.Q_.DND, lK.Q_.CHAT, lK.Q_.VOICE_AND_VIDEO, lK.Q_.MISCELLANEOUS]);
}
function l8(e) {
    let { showHeader: t = !0 } = e,
        n = K()((0, lK.Bx)())
            .filter((e) => e.description !== V.intl.string(V.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, p.jsx)(n5.n, {
                label: t ? V.intl.string(V.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: l5.jh,
                    children: (0, p.jsxs)("div", {
                        className: l5.yZ,
                        children: [
                            (0, p.jsx)(n6.E, { variant: "body-md/normal", children: V.intl.string(V.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: l5.DM,
                                children: (0, p.jsx)(l3.e, { shortcut: l4.z.binds["0"], className: l5.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l6, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lK.Gm)(e),
                                l = (0, lK.zF)(e),
                                s = n[e];
                            return (0, p.jsx)(
                                n5.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, p.jsx)("div", {
                                        className: l5.jh,
                                        children: s.map((e, t) =>
                                            (0, p.jsxs)(
                                                x.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(la.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: l5.yZ,
                                                            children: [
                                                                (0, p.jsx)(n6.E, {
                                                                    variant: "body-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: l5.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            l3.e,
                                                                            { shortcut: e, className: l5.LE },
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
let l7 = (0, h.E2)(S.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.Lz5KHI)],
        Component: () => (0, p.jsx)(l8, { showHeader: !1 }),
    }),
    l9 = (0, h.zD)(S.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => V.intl.string(eR.default.rea2Ar),
        useSubtitle: () => V.intl.string(eR.default.DwBO0x),
        useValue: () => (0, I.bG)([i0.A], () => i0.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(_.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i0.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var se = n(253400),
    st = n(546385);
let sn = (0, h.E2)(S.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nx.Av && !(0, nx.cX)(),
    useSearchTerms: () => [V.intl.string(V.t["/HIxyY"]), V.intl.string(V.t.B0hqpb)],
    Component: function () {
        let [e] = x.useState(() => se.Ay.getEnableHardwareAcceleration()),
            t = V.intl.string(V.t["/HIxyY"]),
            n = V.intl.string(V.t.B0hqpb);
        return (0, p.jsxs)(q.B, {
            children: [
                (0, p.jsx)(ne.d, { label: t, description: n, checked: e, onChange: si }),
                !e && (0, p.jsx)(st.A, { look: st.k.WARNING, children: V.intl.string(V.t.j7S6IX) }),
            ],
        });
    },
});
function si(e) {
    let t = e ? V.intl.format(V.t.LYXRxL, {}) : V.intl.format(V.t.uDP3Kz, {});
    (0, n4.A)({
        title: V.intl.string(V.t.aqpAvn),
        subtitle: t,
        confirmText: V.intl.string(V.t.vT7ckk),
        onConfirm: () => {
            se.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sl = (0, eb.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 })),
    ss = (0, h.zD)(S.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => V.intl.string(V.t["3BeZti"]),
        usePredicate: () => nx.Av && !(0, nx.cX)(),
        useValue: () => sl.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (sl.setState({ openOnStartup: e }), se.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            se.Ay.getOpenOnStart().then((e) => sl.setState({ openOnStartup: e }));
        },
    }),
    sr = (0, h.zD)(S.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => V.intl.string(V.t.dJ5MUh),
        useSubtitle: () => V.intl.string(V.t.nQavHr),
        usePredicate: () => nx.Av && !(0, nx.cX)(),
        useValue: () => sl.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (sl.setState({ minimizeToTray: e }), se.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            se.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sl.setState({ minimizeToTray: e }));
        },
    }),
    sa = (0, h.zD)(S.X.OS_START_MINIMIZED, {
        useTitle: () => V.intl.string(V.t.GfBL83),
        useSubtitle: () => V.intl.string(V.t.XGyhhc),
        usePredicate: () => (0, nx.uF)(),
        useValue: () => sl.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (sl.setState({ startMinimized: e }), se.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !sl.useState((e) => e.openOnStartup),
        initialize: () => {
            se.Ay.getSetting("START_MINIMIZED", !1).then((e) => sl.setState({ startMinimized: e }));
        },
    });
var so = n(61628);
let su = new Set(["failure", "unknown"]),
    sd = (0, h.E2)(S.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [V.intl.string(V.t.roHq80)],
        Component: function () {
            let [e, t] = x.useState(!1),
                [n, i] = x.useState(() => (0, ln.TC)()),
                l = (0, I.bG)([i8.Ay], () => i8.Ay.getSystemServiceStatus("input-service")),
                s = x.useCallback(async () => {
                    (t(!0),
                        n ? await (0, ln.z8)("windows-settings") : await (0, ln.sL)("windows-settings"),
                        t(!1),
                        i((0, ln.TC)()));
                }, [n]);
            return (0, p.jsxs)("div", {
                className: so.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: so.L,
                        children: [
                            (0, p.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n6.E, {
                                                    variant: "body-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(n6.E, {
                                                    variant: "body-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : su.has(l.state)
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
                                                                (0, id.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: V.intl.format(V.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(j.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? V.intl.string(V.t.pAwbdL) : V.intl.string(V.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: ln.XQ,
    });
var sc = n(687813),
    sg = n(613412),
    sm = n(858899),
    sA = n(384077);
let sE = (0, h.Tf)(S.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => V.intl.string(V.t.o6Qr6n),
    useSubtitle: () => V.intl.string(V.t.OuGtH8),
    useLabel: () => V.intl.string(V.t.bm1WjO),
    usePredicate: () => nx.Av && nb.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n4.A)({
            title: V.intl.string(V.t.o6Qr6n),
            subtitle: V.intl.string(V.t.JEHHJ1),
            confirmText: V.intl.string(V.t.bm1WjO),
            onConfirm: () => {
                ((0, tH.default)(),
                    (async function () {
                        try {
                            await (async function () {
                                var e;
                                let t = nb.A.tracing;
                                if (null == t) return;
                                (0, sm.P0)({ text: V.intl.string(V.t.qGRW8d) });
                                let [n, i, l] = await Promise.all([
                                        t.capturePerformanceTrace({ durationMs: 3e4 }),
                                        nb.A.processUtils.getSystemInfo(),
                                        nb.A.processUtils.getSystemMetrics((0, sA.uD)()),
                                    ]),
                                    s = {
                                        captured_at: n.startedAtISO,
                                        duration_ms: n.durationMs,
                                        categories: n.categories,
                                        ...(0, sg.getSuperProperties)(),
                                        native_build_number: nb.A.app.getBuildNumber(),
                                    },
                                    r = {
                                        systemInfo: i,
                                        systemMetrics: l,
                                        cumulativeCpuUsage: nb.A.processUtils.getCumulativeCPUUsage() ?? null,
                                        processTypeCpuUsage:
                                            nb.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
                                    },
                                    a = await ((e = {
                                        "trace.json": n.traceBytes,
                                        "system_info.json": (0, sc._u)(JSON.stringify(r, null, 2)),
                                        "metadata.json": (0, sc._u)(JSON.stringify(s, null, 2)),
                                    }),
                                    new Promise((t, n) => {
                                        (0, sc.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
                                    })),
                                    o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
                                    { filePath: u } = await t.saveTraceToDownloads(a, o);
                                (nb.A.fileManager.showItemInFolder(u),
                                    (0, sm.P0)({ text: V.intl.string(V.t.gpCRFS), variant: "success" }));
                            })();
                        } catch {
                            (0, sm.P0)({ text: V.intl.string(V.t["8ihs9i"]), variant: "critical" });
                        }
                    })());
            },
        });
    },
});
function sh() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sS = n(287809);
let sT = (0, h.Tf)(S.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sh();
    },
});
var sf = n(114129),
    sp = n(442325),
    sx = n(858760);
let sI = (0, h.zD)(S.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: f.Xi.BETA }),
    usePredicate: () => sx.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nx.xl)(),
    useValue: () => (0, I.bG)([sp.A], () => sp.A.isUserOptedIn()),
    setValue: sf.lj,
});
var s_ = n(813645);
let sb = {};
var sN = n(735729),
    sC = n(146849);
let sy = (0, h.zD)(S.X.NATIVE_MARKDOWN, {
        useTitle: () => V.intl.string(V.t["5CIvT4"]),
        usePredicate: () => sC.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, sN.A)(sC.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !s_.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sb;
                ts.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(sC.XQ, { enabled: e }),
    }),
    sv = (0, h.zZ)(S.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [sT, sE, sI, sy],
    }),
    sj = (0, h.zZ)(S.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [ss, sa, sr, sn],
        usePredicate: () => nx.Av && ((0, nx.uF)() || (0, nx.j9)()),
        initialize: () => {
            !(async function () {
                let e = await se.Ay.getOpenOnStart(),
                    t = await se.Ay.getSetting("START_MINIMIZED", !1),
                    n = await se.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
                sl.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
            })();
        },
    }),
    sO = (0, h.zZ)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["069nVT"]),
        useSubtitle: () => V.intl.string(V.t.T4LZVL),
        buildLayout: () => [l2],
        initialize: () => (iQ.A.enableAll(!1), () => iQ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nx.Av
                ? {
                      type: f.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(iq.w, {
                                      type: "info",
                                      message: V.intl.string(V.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, p.jsx)(lr, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nx.Av
                ? {
                      type: f.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: f.UV.BUTTON,
                              text: V.intl.string(V.t.zk6Xbs),
                              variant: "secondary",
                              icon: iK.PlusSmallIcon,
                              onClick: () => iQ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sD = (0, h.zZ)(S.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [l7],
    }),
    sR = (0, h.zZ)(S.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nx.Av && ((0, nx.uF)() || (0, nx.j9)()),
        buildLayout: () => [sd],
    }),
    sL = (0, h.zZ)(S.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eR.default.QG0axY),
        usePredicate: () =>
            (0, I.bG)(
                [i0.A, i$.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i0.A.hasDetectedGame &&
                    (0, iJ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [l9],
    }),
    sP = (0, h.t_)(S.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [sj, sO, sD, sR, sL, sv],
    }),
    sG = (0, h.i4)(S.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iZ.KeyboardIcon,
        buildLayout: () => [sP],
    });
var sM = n(831544),
    sU = n(922795),
    sV = n(212245),
    sk = n(329551),
    sw = n(352430),
    sF = n(854325),
    sB = n(952572),
    sX = n(717359);
let sz = (0, h.E2)(S.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: sB.A,
        Component: function () {
            let e = (0, sV.p)(),
                t = x.useRef(!1),
                n = (0, I.bG)([lt.Ay], () => lt.Ay.getVideoDeviceId()),
                [i, l] = x.useState((0, sk.i)(sS.default.getCurrentUser())),
                s = x.useRef(i);
            return (
                x.useEffect(
                    () => () => {
                        t.current && (0, sw._C)(s.current);
                    },
                    [],
                ),
                (0, p.jsx)(sX.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sF.gB)(n, { location: e.location }).catch(_.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sH = (0, h.zD)(S.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => V.intl.string(V.t["3Ppr1h"]),
        useSubtitle: () => V.intl.string(V.t.WNbX4O),
        useValue: U.bm.useSetting,
        setValue: (e) => {
            (U.bm.updateSetting(e), td.default.track(_.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sY = n(625841),
    sW = n(74848),
    sK = n(204050);
let sZ = (0, eb.D)(() => ({ previewEnabled: !1 })),
    sq = (0, h.E2)(S.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, I.bG)([lt.Ay], () => lt.Ay.isVideoAvailable()),
                { id: t } = (0, sW.x5)(lB.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, p.jsx)(sY.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: lB.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sK.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sZ.setState({ previewEnabled: !1 }),
                                  window.open((0, sK.i)(t)),
                                  td.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sQ = n(745317),
    s$ = n(9219);
let sJ = (0, h.E2)(S.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = lt.Ay.getCameraComponent(),
                t = (0, I.bG)([lt.Ay], () => lt.Ay.getVideoDeviceId()),
                n = sZ.useField("previewEnabled"),
                i = (0, I.bG)([lt.Ay], () => lt.Ay.isVideoAvailable());
            return ((0, e_.l0)(() => {
                sZ.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, p.jsx)("div", {
                      className: s$.T9,
                      children: (0, p.jsxs)("div", {
                          className: s$.Xi,
                          children: [
                              (0, p.jsxs)("div", {
                                  className: s$.UI,
                                  children: [
                                      (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, p.jsx)(sQ.kE, {}),
                                  ],
                              }),
                              (0, p.jsx)(sQ.eK, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: s$.T9,
                      children: (0, p.jsx)(lA.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, p.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => sZ.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    s0 = (0, h.zZ)(S.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.VIDEO)),
        buildLayout: () => [sJ, sH, sq, sz],
    }),
    s1 = (0, h.zD)(S.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nx.j9)();
        },
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lS.default.setOpenH264Enabled(e),
                (0, n4.A)({
                    title: V.intl.string(V.t["9jf31O"]),
                    subtitle: V.intl.string(V.t["J2wg+X"]),
                    confirmText: V.intl.string(V.t.BddRzS),
                    onConfirm: () => nb.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    s2 = (0, h.zD)(S.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getAecDump());
        },
        setValue: lS.default.setAecDump,
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.isAecDumpSupported());
        },
    });
var s3 = n(139033),
    s4 = n(862482),
    s5 = n(640238),
    s6 = n(825484),
    s8 = n(497029),
    s7 = n(487329),
    s9 = n(353835);
let re = (0, eb.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rt() {
    let e = await nb.A.fileManager.getLogPath();
    nb.A.fileManager.showItemInFolder(e);
}
function rn(e) {
    (0, n4.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => lS.default.setDebugLogging(e),
    });
}
async function ri() {
    await (async function (e) {
        let { onUploadStart: t, onUploadFinish: n } = e;
        t?.();
        try {
            let e, t;
            (await lt.Ay.getMediaEngine().writeAudioDebugState(),
                await s9.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
                await (0, s8.a)(_.Umv.RTC),
                (e = V.intl.string(V.t["fKBB8+"])),
                (t = V.intl.string(V.t.BvyxE7)),
                (0, s3.A)({ title: e, subtitle: t }));
        } catch (s) {
            var i;
            let e, t, n, l;
            ((i = s.displayMessage),
                (e = V.intl.string(V.t.QZg0J7)),
                (t = i ?? V.intl.string(V.t.VzHcSm)),
                (n = (0, s7.B1)(s7.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
                (l = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
                (0, lx.qf)((n) =>
                    (0, p.jsx)(s5.a, {
                        header: e,
                        confirmButtonColor: s4.$n.Colors.BRAND,
                        confirmText: V.intl.string(V.t.BddRzS),
                        ...n,
                        children: (0, p.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", height: "100%" },
                            children: [
                                (0, p.jsx)(n6.E, { variant: "body-md/normal", children: t }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-sm/semibold",
                                    selectable: !0,
                                    style: { marginTop: "auto" },
                                    children: l,
                                }),
                            ],
                        }),
                    }),
                ));
        } finally {
            n?.();
        }
    })({
        onUploadStart: () => re.setState({ isUploading: !0 }),
        onUploadFinish: () => re.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rl = (0, h.E2)(S.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.DEBUG_LOGGING));
        return nx.Av && e && null != nb.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, I.bG)([lt.Ay], () => lt.Ay.getDebugLogging()),
            t = re.useField("isUploading"),
            n = re.useField("isDisabled"),
            i = x.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(lE.A, { tag: "legend", id: i, children: V.intl.string(V.t["FjN+et"]) }),
                (0, p.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(ne.d, {
                            label: V.intl.string(V.t["726JHL"]),
                            description: V.intl.string(V.t["/7ak9Q"]),
                            checked: e,
                            onChange: rn,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, p.jsxs)(s6.e, {
                                children: [
                                    (0, p.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: ri,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.nuPtYi),
                                        onClick: rt,
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
var rs = n(233545),
    rr = n(58663),
    ra = n(412780);
function ro() {
    return (0, I.bG)([sS.default, lt.Ay], () => {
        let e = sS.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === se.Ay.releaseChannel || "development" === se.Ay.releaseChannel,
            i = lt.Ay.supports(lB.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let ru = (0, h.zD)(S.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, I.bG)([ra.Ay], () => ra.Ay.shouldRecordNextConnection());
        },
        setValue: rr.A,
        usePredicate: ro,
    }),
    rd = (0, h.Tf)(S.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: rs.YW,
        usePredicate: ro,
    });
var rc = n(926919),
    rg = n(111162),
    rm = n(855302);
let rA = (0, h.zD)(S.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => V.intl.string(V.t["0CEP6e"]),
        useSubtitle: () => V.intl.string(V.t["kBXuW+"]),
        useValue: function () {
            return (0, I.bG)([rg.default], () => rg.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rg.default.isStreamInfoOverlayEnabled;
            ((0, rm.A)("stream_info_overlay_enabled", e, t), (0, rc.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return U.Q_.useSetting();
        },
    }),
    rE = (0, h.bd)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rA, s2, ru, rd, rl],
    });
function rh(e, t, n) {
    (0, n4.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rS = (0, h.Tf)(S.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rh(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), lS.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rT = (0, h.zZ)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [s1, rE, rS],
    });
var rf = n(343446),
    rp = n(360729),
    rx = n(303227),
    rI = n(558076),
    r_ = n(687782);
let rb = (0, h.zD)(S.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(r_.default.qYzpsI),
        useSubtitle: () => V.intl.string(r_.default["+vMoL1"]),
        useValue: () => (0, I.bG)([rI.A], () => rI.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rx.Ft)(e),
    }),
    rN = (0, h.zZ)(S.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(r_.default.wRLmM0),
        usePredicate: function () {
            let e = (0, I.yK)([lO.A], () => lO.A.getGuildIds()),
                { loaded: t, override: n } = (0, I.cf)([rf.A], () => ({
                    loaded: rf.A.getLoadedGuildExperiment(rp.vJ),
                    override: rf.A.getExperimentOverrideDescriptor(rp.vJ),
                }));
            return (0, x.useMemo)(
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
        buildLayout: () => [rb],
    });
var rC = n(347481),
    ry = n(852712),
    rv = n(179172),
    rj = n(868162);
let rO = (0, h.zD)(S.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => V.intl.string(V.t.gF8HJo),
        useSubtitle: () => V.intl.string(V.t.cfrfyZ),
        useValue: function () {
            return (0, I.bG)([rj.A], () => !0 !== rj.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rv.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rD = (0, h.zD)(S.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lS.default.setAutomaticGainControl(e, {
                page: _.liQ.USER_SETTINGS,
                section: _.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, I.bG)([lt.Ay, rC.A], () => {
                let e = lt.Ay.getInputDeviceId();
                return rC.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.isAutomaticGainControlSupported() && lt.Ay.isInputProfileCustom());
        },
    }),
    rR = (0, h.sN)(S.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => V.intl.string(V.t.AlybXj),
        setValue: (e) =>
            lS.default.setAttenuation(
                e,
                lt.Ay.getAttenuateWhileSpeakingSelf(),
                lt.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lt.Ay.getAttenuation(),
    }),
    rL = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, I.bG)([lt.Ay], () => lt.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lS.default.setAttenuation(lt.Ay.getAttenuation(), e, lt.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rP = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, I.bG)([lt.Ay], () => lt.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lS.default.setAttenuation(lt.Ay.getAttenuation(), lt.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rG = (0, h.FW)(S.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.ATTENUATION)),
        buildLayout: () => [rR, rL, rP],
    }),
    rM = (0, h.zD)(S.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lS.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.showBypassSystemInputProcessing() && lt.Ay.isInputProfileCustom());
        },
    }),
    rU = (0, h.zD)(S.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, I.bG)([eT.Ay], () => !eT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rm.A)("switch_channel_warning_enabled", e, !eT.Ay.disableVoiceChannelChangeAlert),
                nF.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rV = (0, h.zD)(S.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.BbESsg),
        useSubtitle: () => V.intl.string(V.t.LoOB1F),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => {
                let { vadUseKrisp: e } = lt.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lt.Ay.getMode();
            lS.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, I.bG)(
                [lt.Ay],
                () => lt.Ay.getMode() !== _.TBI.VOICE_ACTIVITY || !lt.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.isAdvancedVoiceActivitySupported() && lt.Ay.isInputProfileCustom());
        },
    }),
    rk = (0, h.Hn)(S.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rh(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => lS.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, I.cf)([lt.Ay], () => ({
                legacyAudioSubsystemSupported: lt.Ay.supports(lB.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lt.Ay.supports(lB.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lt.Ay.supports(lB.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return x.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lB.rB.STANDARD, value: lB.rB.STANDARD, label: V.intl.string(V.t.dqb2JZ) }]),
                    e && i.push({ id: lB.rB.LEGACY, value: lB.rB.LEGACY, label: V.intl.string(V.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lB.rB.EXPERIMENTAL, value: lB.rB.EXPERIMENTAL, label: V.intl.string(V.t.liQmtr) }),
                    n && i.push({ id: lB.rB.AUTOMATIC, value: lB.rB.AUTOMATIC, label: V.intl.string(V.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rw = (0, h.zD)(S.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getQoS());
        },
        setValue: function (e) {
            lS.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.QOS));
        },
    }),
    rF = (0, h.zD)(S.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lS.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rB = (0, h.bd)(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tI(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, I.bG)([lt.Ay], () => lt.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rD, rV, rM, rO, rF, rU, rG, rk, rw],
    }),
    rX = (0, h.zD)(S.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lS.default.setEchoCancellation(e, { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, I.bG)([lt.Ay, rC.A], () => {
                let e = lt.Ay.getInputDeviceId();
                return rC.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.isInputProfileCustom());
        },
    });
var rz = n(205693),
    rH = n(451988),
    rY = n(205513),
    rW = n(475883),
    rK = n(303707);
let rZ = (0, t0.Ld)();
function rq(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: im()(rW.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, p.jsx)("div", { className: im()(rW.Jx, rW.NU, { [rW.zY]: t && !r, [rW.r9]: r }) }),
    });
}
function rQ(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, I.cf)([lt.Ay], () => ({
            threshold: lt.Ay.getModeOptions().threshold,
            autoThreshold: lt.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, I.bG)([lt.Ay], () => lt.Ay.getMode());
    return (0, p.jsx)("section", {
        className: im()(rW.Mo, rW.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, p.jsx)(rY.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lS.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n3.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n3.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rZ,
            disabled: s,
            children: (0, p.jsxs)("div", {
                className: im()(rW.NU, rW.TL, rW.Jx, rK.bar),
                children: [
                    (0, p.jsx)("div", { className: im()(rW.GS, rW.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let r$ = (0, h.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, I.bG)([lt.Ay], () => lt.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, I.cf)([lt.Ay], () => ({
                autoThreshold: lt.Ay.getModeOptions().autoThreshold,
                disabled: lt.Ay.getMode() !== lB.TB.VOICE_ACTIVITY,
            })),
            n = x.useCallback((e) => {
                let t = lt.Ay.getMode(),
                    { threshold: n } = lt.Ay.getModeOptions();
                lS.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, I.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = x.useState(-100),
                    [n, i] = x.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lB.ME.VOICE) === lB.ME.VOICE));
                }
                return (
                    x.useEffect(() => {
                        let e = new rH.Ep();
                        return (
                            e.start(1e3, () => {
                                (lt.Ay.getMediaEngine().on(rz.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (lt.Ay.getMediaEngine().removeListener(rz.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, I.bG)([lt.Ay], () => lt.Ay.isEnabled()),
            a = x.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: rW.B4,
                        children: (0, p.jsx)(iq.w, {
                            type: "warning",
                            message: V.intl.format(V.t["O13I+O"], { onEnableClick: () => lS.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = x.useMemo(() => (e ? V.intl.string(V.t.JsbzjA) : V.intl.string(V.t.MLmyMY)), [e]),
            u = x.useId(),
            d = x.useId();
        return i
            ? (0, p.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, p.jsx)(lE.A, { tag: "legend", id: u, children: V.intl.string(V.t.GByLar) }),
                      (0, p.jsx)(lE.A, { id: d, children: o }),
                      (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, p.jsx)(ne.d, {
                                  disabled: t,
                                  label: V.intl.string(V.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, p.jsx)(rq, {
                                        isSpeaking: s,
                                        className: rW.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rQ, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(lc.D, {
                          label: V.intl.string(V.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, p.jsx)(rq, {
                                        isSpeaking: s,
                                        className: rW.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rQ, {
                                        volume: l,
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
var rJ = n(366010);
let r0 = n(993830),
    r1 = n(413142),
    r2 = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO };
function r3() {
    let e = (0, I.bG)([nX.A], () => (0, rJ.q)(nX.A.theme));
    return (0, p.jsx)("img", { src: e ? r0 : r1, width: 48, height: 32, alt: "" });
}
let r4 = (0, h.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, I.bG)([lt.Ay], () => lt.Ay.isInputProfileCustom() && lt.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = x.useCallback((e) => {
                (lS.default.setNoiseCancellation("KRISP" === e, r2),
                    lS.default.setNoiseSuppression("STANDARD" === e, r2));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, I.cf)([lt.Ay], () => ({
                noiseCancellation: lt.Ay.getNoiseCancellation(),
                noiseSuppression: lt.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lt.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lt.Ay.isNoiseCancellationSupported(),
            })),
            s = x.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: V.intl.string(V.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: V.intl.string(V.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: V.intl.string(V.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? V.intl.format(V.t["1q5aTp"], { helpArticle: eC.A.getArticleURL(_.MVz.NOISE_SUPPRESSION) })
                : V.intl.string(V.t.OWKjw5);
        return (0, p.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(ld.l, {
                    label: V.intl.string(V.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, p.jsx)(r3, {}),
            ],
        });
    },
});
var r5 = n(934729),
    r6 = n(621380);
let r8 = !nx.Av;
function r7() {
    return (0, I.bG)([lt.Ay], () => lt.Ay.getMode() === lB.TB.PUSH_TO_TALK);
}
let r9 = (0, h.zD)(S.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nx.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, I.bG)([lt.Ay], () => lt.Ay.getMode());
        return x.useMemo(() => {
            if (!nx.Av && e === lB.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r5._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, I.bG)([lt.Ay], () => lt.Ay.getActiveInputProfile() !== r6.m.STUDIO);
    },
    useValue: function () {
        return (0, I.bG)([lt.Ay], () => lt.Ay.getMode() === lB.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lB.TB.PUSH_TO_TALK : lB.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lB.TB.PUSH_TO_TALK &&
                r8 &&
                (0, lx.mM)(async () => {
                    let { Alert: e } = await Promise.all([n.e(844331), n.e(542369)]).then(n.bind(n, 291064));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r5._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            lS.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var ae = n(484599);
function at(e) {
    let t,
        { shortcut: n } = e,
        i = (0, I.bG)([lu.Ay], () => lu.Ay.isWaylandPortalActive()),
        l = (0, I.bG)([lu.Ay], () => {
            let e = lu.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
            return null != e ? lu.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return i && 0 !== n.length
        ? lu.Ay.isWaylandPortalEligibleShortcut(n)
            ? null == l || l.bound
                ? null != (t = se.Ay.getCrashReporterMetadata()?.wm) && /\bKDE\b/i.test(t)
                    ? (0, p.jsx)(iq.w, {
                          type: "info",
                          message: V.intl.format(V.t.e8TotY, {
                              kdeFixUrl: "https://invent.kde.org/plasma/kglobalacceld/-/merge_requests/130",
                          }),
                          role: "none",
                      })
                    : null
                : (0, p.jsx)(iq.w, { type: "warning", message: V.intl.string(V.t.PTCrUP), role: "status" })
            : (0, p.jsx)(iq.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" })
        : null;
}
let an = (0, h.E2)(S.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: r7,
        Component: function () {
            let e = (0, I.bG)([lt.Ay], () => {
                    let { shortcut: e } = lt.Ay.getModeOptions();
                    return e;
                }),
                t = V.intl.format(V.t.HVvn5T, {
                    onClick: () => (0, ng.openUserSettings)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, p.jsx)(lc.D, {
                label: V.intl.string(V.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsxs)("div", {
                    className: ae.e,
                    children: [
                        (0, p.jsx)(lT.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = lu.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, lo.uL)(t.id, t.shortcut, e, lu.Ay.getWaylandPortalShortcutState(t.id)),
                                    lS.default.setMode(_.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, p.jsx)(at, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    ai = (0, h.sN)(S.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            lS.default.setMode(_.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: 2e3,
        getInitialValue: function () {
            let { delay: e } = lt.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r7,
    });
var al = n(833473),
    as = n(844981),
    ar = n(610234);
function aa() {
    return (0, as.Ay)("VoiceSettings");
}
let ao = (0, h.zD)(S.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(ar.default.LGDPhA),
        useSubtitle: function () {
            let e = aa();
            if ((0, as.Xt)(e))
                return e === as.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(ar.default.rOXfEw)
                    : V.intl.string(ar.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, I.bG)([al.A], () => al.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lS.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return aa() !== as.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, as.Xt)(aa());
        },
    }),
    au = (0, h.Qx)(S.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ry._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getActiveInputProfile() ?? r6.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lS.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ry.d)({ location: "InputProfileCategory" });
            return [
                { value: r6.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r6.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r6.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ad = (0, h.zZ)(S.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, I.bG)([rC.A, lt.Ay], () => {
                let e = lt.Ay.getInputDeviceId();
                return (
                    (rC.A.hasEchoCancellation(e) || rC.A.hasNoiseSuppression(e) || rC.A.hasAutomaticGainControl(e)) &&
                    lt.Ay.isInputProfileCustom()
                );
            });
            return x.useMemo(() => {
                if (e)
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: V.intl.string(V.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [au, r$, r4, rX, ao, r9, an, ai, rB],
    });
var ac = n(403581),
    ag = n(983851),
    am = n(687021),
    aA = n(128450),
    aE = n(796774),
    ah = n(209932),
    aS = n(458976),
    aT = n(984813),
    af = n(265872),
    ap = n(305866),
    ax = n(22231),
    aI = n(342073),
    a_ = n(448645),
    ab = n(792348),
    aN = n(233324),
    aC = n(340368),
    ay = n(327289),
    av = n(533491),
    aj = n(647451);
function aO(e) {
    let { onSelect: t } = e,
        [n, i] = x.useState(!1),
        l = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        s = a_.Ay.canUseCustomCallSounds(l),
        r = x.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, p.jsx)(af.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(ap.l, {
                children: (0, p.jsx)(ay.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, p.jsx)(aN.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(av.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, p.jsx)(ax.PencilIcon, { size: "md", color: "currentColor", className: aj.Wo }),
            }),
    });
}
function aD(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ab.A)(t, null),
        i = (0, aS.wH)(),
        l = (0, aC._)("SoundPreviewButton") ? aI.WaveformIcon : ag.VoiceNormalIcon,
        s =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(av.dT, {
        onClick: n,
        text: s,
        children: (0, p.jsx)(l, { size: "md", color: "currentColor", className: aj.wg }),
    });
}
function aR(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, aC._)("SoundboardCustomCallSoundSettingsPreview") ? aI.WaveformIcon : ag.VoiceNormalIcon;
    return (0, p.jsxs)("div", {
        className: aj.D6,
        children: [
            (0, p.jsxs)("div", {
                className: aj.kL,
                children: [
                    a && (0, p.jsx)(tG.A, { emojiId: s, emojiName: r, className: aj.Zg }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/normal",
                        color: "text-strong",
                        className: aj.dj,
                        children:
                            null == t
                                ? V.intl.string(V.t.PoWNfe)
                                : n
                                  ? V.intl.format(V.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, p.jsx)(n6.E, {
                                                variant: "body-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, p.jsx)(aD, { sound: t })
                        : (0, p.jsx)(o, { size: "md", color: "currentColor", className: aj.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: aj.kL,
                children: [
                    (0, p.jsx)(aO, { onSelect: i }),
                    l &&
                        !n &&
                        (0, p.jsx)(av.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, p.jsx)(lm.TrashIcon, {
                                size: "md",
                                color: n3.A.unsafe_rawColors.RED_400.css,
                                className: aj.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aL = n(617617);
n(980504);
var aP = n(806050);
function aG(e) {
    return (0, I.bG)([ah.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ah.A.getSound("0" === t ? "0" : t, n);
    });
}
function aM(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([aL.A], () => aL.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aG(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, p.jsxs)("div", {
        className: aP.Io,
        children: [
            r
                ? (0, p.jsx)(tG.A, { emojiId: l, emojiName: s, className: aP.nW })
                : (0, p.jsx)(ag.VoiceNormalIcon, { size: "md", color: "currentColor", className: aP.nW }),
            (0, p.jsx)(n6.E, { className: aP.dK, variant: "body-xs/medium", children: i.name }),
        ],
    });
}
let aU = (0, h.E2)(S.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = x.useState("0"),
            i = (0, aT.mz)(t),
            l = aG(i),
            s = i?.type === aT.PP.GLOBAL,
            r = (0, I.bG)([ah.A], () => ah.A.hasFetchedAllSounds()) && null != i && null == l;
        (x.useEffect(() => {
            r && (0, aS.ND)({ location: e });
        }, [r, e]),
            x.useEffect(() => {
                (0, aE.E7)();
            }, []));
        let a = x.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(aM, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n5.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(am.A, {
                    guildId: t,
                    className: aP.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(aA.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, p.jsx)(ac.NitroWheelIcon, { size: "md", color: "currentColor", className: aP.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aR, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, aS.Dv)(t, e) : (0, aS.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: aP.lm,
                                children: (0, p.jsx)(iq.w, {
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
var aV = n(824744);
let ak = (0, h.sN)(S.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aV.w)(e);
        (0, aE.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aS.wH)();
        return (0, aV.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aw = n(864145);
let aF = (0, h.sN)(S.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aV.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aV.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aw.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aB = (0, h.zZ)(S.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [ak, aF, aU],
    });
var aX = n(803224),
    az = n(552122);
let aH = (0, h.E2)(S.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != az.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(n6.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, ng.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aY = (0, h.AK)(S.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: S.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aW = (0, h.gN)(S.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aY] });
var aK = n(264686);
let aZ = (0, eb.D)(() => ({ currentPlayingSound: null }));
function aq() {
    let e = aZ.getField("currentPlayingSound");
    (e?.stop(), aZ.setState({ currentPlayingSound: null }));
}
function aQ(e) {
    let t = aZ.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ii.Ak)(e);
    aZ.setState({ currentPlayingSound: n });
}
function a$(e) {
    return (0, h.zD)(`${S.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aQ(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, I.bG)([aX.A], () => aX.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aX.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aK.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, I.bG)([aX.A], () => aX.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aJ = [
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
    a0 = (0, h.D1)(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tI(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aq();
            };
        },
        buildLayout: () => aJ.map((e) => a$(e)),
    }),
    a1 = (0, h.zZ)(S.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, I.bG)([aX.A], () => aX.A.getDisableAllSounds());
            return x.useMemo(() => {
                if (e)
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.format(V.t.fRvixS, {
                            onClick: () => (0, ng.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [a0, aH, aW],
    }),
    a2 = (0, h.zD)(S.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.e3Zz3F),
        useSubtitle: () => V.intl.string(V.t.RztTjP),
        useValue: function () {
            return !U.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rm.A)("stream_previews_disabled", !e, U.uh.getSetting(), [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                U.uh.updateSetting(!e));
        },
    }),
    a3 = (0, h.zD)(S.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getVideoHook());
        },
        setValue: lS.default.setVideoHook,
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.supportsVideoHook());
        },
    }),
    a4 = (0, h.zD)(S.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getExperimentalSoundshare());
        },
        setValue: lS.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => {
                let e = lt.Ay.supportsExperimentalSoundshare(),
                    t = lt.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a5 = (0, h.zD)(S.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lS.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lt.Ay.supports(lB.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a6 = (0, h.sN)(S.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lS.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lt.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, I.bG)([lt.Ay], () => lt.Ay.getSidechainCompression());
            return lt.Ay.supports(lB.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a8 = (0, h.zD)(S.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t.lt8rRx),
        useSubtitle: () => V.intl.string(V.t.ie1mgY),
        useValue: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nx.cX)() && e
                ? (0, n4.A)({
                      title: V.intl.string(V.t["9jf31O"]),
                      subtitle: V.intl.string(V.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lS.default.setUseSystemScreensharePicker(e), nb.A.app.relaunch());
                      },
                      confirmText: V.intl.string(V.t.BddRzS),
                  })
                : lS.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, I.bG)([lt.Ay], () => lt.Ay.supportsSystemScreensharePicker() && (0, nx.cX)());
        },
    }),
    a7 = (0, h.bd)(S.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => tI(S.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a5, a6, a8, a4, a3],
    }),
    a9 = (0, h.zZ)(S.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a2, a7] });
var oe = n(106713);
let ot = (0, h.E2)(S.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = oe.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(sY.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: lB.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    on = (0, h.E2)(S.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = oe.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(sY.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: lB.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oi = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [ot, on] }),
    ol = (0, h.sN)(S.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lt.Ay.getInputVolume();
            return (0, aV.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aV.w)(e);
            lS.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    os = (0, h.sN)(S.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lt.Ay.getOutputVolume();
            return (0, aV.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aV.w)(e);
            lS.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    or = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ol, os] });
var oa = n(164636),
    oo = n(782600),
    ou = n(804037);
let od = `${eC.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oc = (0, h.E2)(S.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, oa.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oa.bG)([lt.Ay], () => lt.Ay.supports(lB.O5.LOOPBACK))
                ? (0, p.jsx)(oo.A, {
                      size: "md",
                      notchBackground: oo.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(n6.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, p.jsx)(nc.Anchor, {
                                  className: ou.X,
                                  href: eC.A.getArticleURL(_.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: od }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    og = e8.uF() ? ["BTHENUM", "BTHHFENUM"] : [];
function om(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, p.jsxs)(q.B, {
        children: [
            n && (0, p.jsx)(lr, { sourcePage: "voice" }),
            t && (0, p.jsx)(st.A, { look: st.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oA = (0, h.zZ)(S.X.VOICE_CATEGORY, {
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
            let e = ls("voice"),
                t = (0, sW.x5)(lB.oh.AUDIO_INPUT),
                n = (0, sW.x5)(lB.oh.AUDIO_OUTPUT),
                i = x.useMemo(() => {
                    let e = og.some((e) => t?.hardwareId?.startsWith(e)),
                        i = og.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return x.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: f.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(om, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [oi, or, oc],
    }),
    oE = (0, h.t_)(S.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oA, ad, s0, a9, a1, aB, rN, rT],
    }),
    oh = (0, h.i4)(S.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => lt.Ay.isSupported(),
        icon: sM.MicrophoneIcon,
        useMenu: sU.A,
        buildLayout: () => [oE],
    }),
    oS = (0, h.WI)(S.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [oh, nQ, tt, iW, sG, n1],
    });
var oT = n(360669),
    of = n(369143),
    op = n(975807),
    ox = n(566345),
    oI = n(139286),
    o_ = n(534247);
function ob(e) {
    let {
            surface: t,
            title: n,
            children: i,
            actions: l,
            graphicSrc: s,
            graphicLottie: r,
            footnote: a,
            size: o = "default",
        } = e,
        { analyticsLocations: u } = (0, ez.Ay)();
    (0, oI.A)(
        {
            name: sg.ImpressionNames.GIFT_CARDS_MARKETING_BANNER,
            type: sg.ImpressionTypes.VIEW,
            properties: { surface: t, location_stack: u },
        },
        { trackOnInitialLoad: !0 },
    );
    let d = "compact" === o;
    return (0, p.jsxs)("div", {
        className: im()(o_.kL, { [o_.oE]: d }),
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: d ? 24 : 16,
                fullWidth: !1,
                className: o_.Qs,
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: d ? 12 : 8,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: d ? "heading-lg/semibold" : "heading-xl/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                            i,
                        ],
                    }),
                    (l.length > 0 || null != a) &&
                        (0, p.jsxs)(q.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                l.length > 0 &&
                                    (0, p.jsx)(q.B, {
                                        direction: "horizontal",
                                        gap: d ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: l.map((e) =>
                                            (0, p.jsx)(
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
                                null != a &&
                                    (0, p.jsx)(n6.E, { variant: "footnote/normal", color: "text-subtle", children: a }),
                            ],
                        }),
                ],
            }),
            null != r
                ? (0, p.jsx)("div", {
                      className: o_.yO,
                      children: (0, p.jsx)(ox.v, { type: "lottie", lottie: r, aspectRatio: "6/4" }),
                  })
                : (0, p.jsx)("img", { src: s, className: o_.fA, alt: "" }),
        ],
    });
}
function oN(e) {
    let { analyticsLocations: t } = (0, ez.Ay)();
    return x.useCallback(
        (n, i) => {
            td.default.track(_.HAw.GIFT_CARDS_MARKETING_BANNER_CTA_CLICKED, {
                surface: e,
                cta: n,
                partner: i?.partner,
                url: i?.url,
                location_stack: t,
            });
        },
        [e, t],
    );
}
var oC = n(927813);
let oy = `${window.GLOBAL_ENV.MARKETING_ENDPOINT}/gift-cards`,
    ov = 3 * oC.A.Millis.DAYS_30;
var oj = n(321671),
    oO = n(936564),
    oD = n(669815),
    oR = n(46653),
    oL = n(615405),
    oP = n(295405),
    oG = n(945810);
let oM = (0, oG.mj)({
    name: "2026-10-gift-cards-in-app-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function oU(e) {
    return { enabled: oM.useConfig(e).enabled };
}
var oV = n(811091);
let ok = null,
    ow = null;
var oF = n(956956),
    oB = n(289873),
    oX = n(115560),
    oz = n(465323),
    oH = n(37766),
    oY = n(194261),
    oW = n(391048),
    oK = n(99696),
    oZ = n(202613),
    oq = n(83617),
    oQ = n(607399),
    o$ = n(993077),
    oJ = n(150934),
    o0 = n(256006),
    o1 = n(718718),
    o2 = n(558740);
let o3 = /[^0-9/]/g,
    o4 = /[^0-9]/g;
class o5 extends x.PureComponent {
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
            l,
            s,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(o3, "").split("/"))[0]),
                (l = n[1]),
                (s = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                s.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            d = o.selectionStart;
        (u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(o4, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, p.jsx)(lI.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var o6 = n(832208),
    o8 = n(782328);
let o7 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, t0.Ld)(),
                        title: () => V.intl.string(V.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => V.intl.string(V.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => o8.ep,
                        renderInput: (e) => (0, p.jsx)(o5, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o9 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = x.useState(!1),
            [a, o] = x.useState(null),
            [u, d] = x.useState(i);
        return (
            x.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(o6.A, {
                className: n,
                form: o7,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, o2.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var ue = n(219887),
    ut = n(292856);
let un = "isDefault";
class ui extends x.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        let { paymentSource: t, isDefault: n } = e,
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
            expiresMonth: t instanceof oZ.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oZ.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oD.ey)(), (0, oD.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(id.Vq).length))
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
        let [i, l] = n.split("/");
        (this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear"));
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, p.jsx)("div", {
                      className: ut.zc,
                      children: (0, p.jsx)(iq.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: ut.zc,
                  children: (0, p.jsx)(iq.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, o0.g)(n);
        return (0, p.jsxs)("div", {
            className: ut.yV,
            children: [
                (0, p.jsx)(n6.E, {
                    className: ut.bV,
                    variant: "body-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, p.jsx)(o1.Ay, {
                    ...e,
                    mode: o1.Ay.Modes.EDIT,
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
        return (0, p.jsxs)("div", {
            className: ut.yV,
            children: [
                (0, p.jsx)(n6.E, { className: ut.bV, variant: "body-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, p.jsx)(o9, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: i, expirationValid: l } = this.state;
        return (0, p.jsx)("div", {
            className: ut.AU,
            children: (0, p.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(s6.e, {
                        children: (0, p.jsxs)("div", {
                            className: ut.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(lA.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: ut.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oQ.Fr ? "sm" : "md",
                                    text: oQ.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(s6.e, {
                        children: [
                            (0, p.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oQ.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oQ.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: l } = this.props,
            { isDefault: s } = this.state,
            r = e instanceof oZ.SJ;
        return (0, p.jsx)(o$.Z, {
            editable: !0,
            className: im()(ut.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: ut.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(ue.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: ut.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: ut.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: ut.D5,
                        children: (0, p.jsx)(oJ.S, {
                            value: un,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, un),
                            label: V.intl.string(V.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(la.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let ul = I.Ay.connectStores([oL.A], () => ({ updateError: oL.A.editSourceError, removeError: oL.A.removeSourceError }))(
    ui,
);
var us = n(140624),
    ur = n(849405),
    ua = n(329693);
function uo() {
    (0, oK.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oX.A)() });
}
class uu extends x.PureComponent {
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
            isForSubscription: l,
            locale: s,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return n
            ? (0, p.jsx)(ul, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: s,
                  isForSubscription: l,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      i ? null : (0, p.jsx)(la.c, { className: ua.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: ua.Yb,
                          children: [
                              (0, p.jsx)(ue.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, p.jsx)(j.$, {
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
let ud = x.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = x.useState(null),
        o = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, I.bG)([oL.A], () => oL.A.ipCountryCode),
        d = x.useMemo(() => (0, oz.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        x.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oD.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(la.c, { className: ua.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: ua.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(ue.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(lC.A, {
                                  align: lC.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(oH.PaymentTypeGiftCardIcon, { size: "lg" }),
                                      (0, p.jsx)(n6.E, {
                                          variant: "body-sm/medium",
                                          className: ur.Wi,
                                          children: V.intl.string(us.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: ua.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: ua.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oB.y, { type: oB.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(n6.E, {
                                                  variant: "body-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oz.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(j.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: V.intl.string(us.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class uc extends x.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oD.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oD.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oD.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oq.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lx.mM)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oW.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: ua.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: ua.z8,
                          children: [
                              (0, p.jsx)(n6.E, { variant: "body-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, p.jsx)(n6.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  className: ua.Sv,
                                  children: V.intl.string(V.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, p.jsx)(j.$, { onClick: this.handleAddPaymentMethod, text: V.intl.string(V.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: i,
                locale: l,
                removing: s,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = K()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oV.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oZ.LQ)),
            c = u.filter((e) => e instanceof oZ.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    uu,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: s,
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
                          (0, p.jsx)(
                              ud,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: uo,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(ud, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: uo,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oY.LockIcon, { size: "sm", className: ua.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(la.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var ug = n(459357),
    um = n(166403),
    uA = n(773669),
    uE = n(943009);
function uh() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oF.Gw)(e.country) };
}
let uS = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, I.bG)([oL.A], () => oL.A.isSyncing),
                i = (0, I.bG)([oP.A], () => oP.A.paymentSources),
                l = (0, I.bG)([oP.A], () => oP.A.defaultPaymentSourceId),
                s = (0, I.bG)([uA.default], () => uA.default.locale),
                r = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
                a = (0, I.bG)([oL.A], () => oL.A.isRemovingPaymentSource),
                o = (0, I.bG)([oL.A], () => oL.A.isUpdatingPaymentSource),
                { enabled: u } = (0, ug.c)({ location: "UserSettingsBilling" });
            return (x.useEffect(() => {
                (oD.$o(), oD.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: uE.o, children: (0, p.jsx)(oB.y, {}) })
                : (0, p.jsx)(uc, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== _.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.W26xGQ), V.intl.string(V.t["3pIjBH"])],
    }),
    uT = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = oN("billing_banner"),
                t = x.useMemo(
                    () => [
                        {
                            text: V.intl.string(oj.default["6bWeWP"]),
                            onClick: () => {
                                (e("learn_more", { url: oy }), (0, op.A)(oy));
                            },
                        },
                        {
                            text: V.intl.string(oj.default.xYa9Y8),
                            onClick: () => {
                                let t = eC.A.getArticleURL(_.MVz.BUY_GIFT_CARDS);
                                (e("where_to_buy", { url: t }), (0, op.A)(t));
                            },
                        },
                    ],
                    [e],
                );
            return (0, p.jsx)("div", {
                className: oO.k,
                children: (0, p.jsx)(ob, {
                    surface: "billing_banner",
                    title: V.intl.string(oj.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: t,
                    children: (0, p.jsx)(n6.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: V.intl.string(oj.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (function (e) {
                var t;
                let { location: n, countGiftCardWallet: i, canFetchPaymentSources: l = !0 } = e,
                    { enabled: s } = oU({ location: n }),
                    r = (0, I.bG)([oR.default], () => oR.default.getId()),
                    a = null != (t = (0, I.bG)([oR.default], () => oR.default.getId())) && oV.default.age(t) >= ov,
                    { hasFetchedPaymentSources: o, hasValidPaymentMethod: u } = (0, I.cf)(
                        [oP.A],
                        () => ({
                            hasFetchedPaymentSources: oP.A.hasFetchedPaymentSources,
                            hasValidPaymentMethod: (function (e, t) {
                                let { countGiftCardWallet: n } = t;
                                return Object.values(e).some(
                                    (e) => !e.invalid && e.type !== _.hes.UNKNOWN && (n || e.type !== _.hes.TDS_WALLET),
                                );
                            })(oP.A.paymentSources, { countGiftCardWallet: i }),
                        }),
                        [i],
                    ),
                    d = s && a,
                    c = d && l;
                return (
                    x.useEffect(() => {
                        !c ||
                            ok === r ||
                            oP.A.hasFetchedPaymentSources ||
                            oL.A.isPaymentSourceFetching ||
                            ((ok = r),
                            oD.$o().then((e) => {
                                null == e && (ow = r);
                            }));
                    }, [c, r]),
                    d && ow !== r && o && !u
                );
            })({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    uf = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = uh();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == uh()
                ? null
                : {
                      type: f.p3.INFO_POPOVER,
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
        buildLayout: () => [uS, uT],
    });
var up = n(837381),
    ux = n(516521),
    uI = n(928039),
    u_ = n(921853),
    ub = n(22306);
function uN(e) {
    let { currentPageIndex: t, numPages: n, onChangePage: i, children: l, showPageCount: s = !0, ref: r, ...a } = e,
        o = t >= n - 1,
        u = s
            ? V.intl.format(V.t.MtpIwg, { currentPage: t + 1, numPages: n })
            : V.intl.format(V.t.bKI77c, { currentPage: t + 1 });
    return (0, p.jsxs)("div", {
        ref: r,
        ...a,
        children: [
            l,
            (0, p.jsx)("div", {
                className: ub.v,
                children: (0, p.jsxs)("div", {
                    className: ub.U,
                    children: [
                        (0, p.jsx)(lg.K, {
                            variant: "icon-only",
                            icon: u_.ChevronSmallLeftIcon,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": V.intl.string(V.t.vgfxaA),
                        }),
                        (0, p.jsx)(n6.E, { variant: "body-sm/medium", children: u }),
                        (0, p.jsx)(lg.K, {
                            variant: "icon-only",
                            icon: n9.ChevronSmallRightIcon,
                            disabled: o,
                            onClick: () => i(t + 1),
                            "aria-label": V.intl.string(V.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var uC = n(431955);
n(938796);
var uy = n(334279),
    uv = n(122817),
    uj = n(665260),
    uO = n(315069),
    uD = n(557009),
    uR = n(570221),
    uL = n(191115);
class uP extends uO.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    invoice;
    static createFromServer(e) {
        let t = null != e.payment_source ? oZ.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uC.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? uL.A.createFromServer(e.subscription) : null;
        return new uP({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            flags: e.flags,
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uD.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uR.Y.createFromServer(e.invoice) : null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.amount = e.amount),
            (this.amountRefunded = e.amountRefunded),
            (this.createdAt = e.createdAt),
            (this.currency = e.currency),
            (this.description = e.description),
            (this.paymentSource = e.paymentSource),
            (this.paymentGateway = e.paymentGateway),
            (this.status = e.status),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscription = e.subscription),
            (this.skuId = e.skuId),
            (this.skuPrice = e.skuPrice),
            (this.sku = e.sku),
            (this.flags = e.flags),
            (this.downloadableInvoice = e.downloadableInvoice),
            (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
            (this.hasInvoiceURL = e.hasInvoiceURL),
            (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs),
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons),
            (this.entitlements = e.entitlements),
            (this.invoice = e.invoice));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === _.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === _.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && t3.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return t3.pW.has(t);
                })
        );
    }
    get isGift() {
        return uj.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(t3.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === _.EZt.GUILD_PRODUCT || uj.Lt(this.sku.flags, uv.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === _.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && uy.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uG =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uM =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uU =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uV =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uk =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uw(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oZ.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uC.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uP({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uF = { receipts: [], cursor: null };
var uB = n(34188),
    uX = n(597770),
    uz = n(660298),
    uH = n(371710),
    uY = n(291322),
    uW = n(147925),
    uK = n(707554),
    uZ = n(957565),
    uq = n(250627),
    uQ = n(871109),
    u$ = n(571654),
    uJ = n(411342),
    u0 = n(179499),
    u1 = n(362280),
    u2 = n(95035),
    u3 = n(317525),
    u4 = n(460103);
function u5(e) {
    let { description: t, detail: n } = e;
    return (0, p.jsx)("li", {
        className: u4.Iu,
        children: (0, p.jsxs)(lC.A, {
            justify: lC.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function u6(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uq.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, u$.z)(i),
        s = (0, I.bG)([lO.A], () => lO.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = x.useCallback(async () => {
            (s?.features.has(_.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, u1.A)(_.BVt.GUILD_PRODUCT(t, n))
                : await (0, u1.A)(_.BVt.CHANNEL(t)),
                (0, tH.default)());
        }, [s, t, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            null != r && (0, p.jsx)(u5, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, p.jsx)(u5, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, p.jsx)(u2.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function u8(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uq.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, I.bG)([uQ.A], () => uQ.A.getGuildProductFetchState(n) === uQ.e.FETCHING),
        s = i?.role_id,
        r = (0, I.bG)([u3.A], () => (null != s ? u3.A.getRole(t, s) : void 0), [t, s]),
        a = (0, u0.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, p.jsx)("div", { className: u4.hT, children: (0, p.jsx)(oB.y, {}) })
        : null != i && (o || u)
          ? (0, p.jsxs)("div", {
                className: u4.hT,
                children: [
                    o &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u4.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, p.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                o && (0, p.jsx)("div", { className: u4.yF }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u4.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, p.jsx)(uJ.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u7 = function (e, t) {
    (0, lx.mM)(async () => {
        let { default: i } = await n.e(234138).then(n.bind(n, 206049));
        return (n) => (0, p.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u9 = n(818348);
function de(e) {
    let { payment: t } = e,
        [n, i] = x.useState(null),
        [l, s] = x.useState(null);
    async function r(e) {
        try {
            let n = await (async function (e) {
                try {
                    return (
                        await tl.Bo.get({
                            url: _.Rsh.BILLING_INVOICE_BREAKDOWN,
                            query: { payment_id: e },
                            oldFormErrors: !0,
                            rejectWithError: !1,
                        })
                    ).body;
                } catch (e) {
                    throw e;
                }
            })(t.id);
            i(n);
            let l = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(l, "_blank"), s(null));
        } catch (e) {
            s(e.body?.message);
        }
    }
    let a = null != t.paymentSource && t.status === u9.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, p.jsxs)("div", {
              className: u4.It,
              children: [
                  (0, p.jsx)(nc.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, p.jsx)(nc.Anchor, {
                            className: u4.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, p.jsx)(iq.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, p.jsxs)("div", {
                className: u4.It,
                children: [
                    (0, p.jsx)(nc.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, p.jsx)(
                                  nc.Anchor,
                                  {
                                      className: u4.oe,
                                      href: e,
                                      children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, p.jsx)(iq.w, { type: "critical", message: l, role: "alert" }),
                ],
            })
          : a
            ? (0, p.jsx)("div", {
                  className: u4.It,
                  children: (0, p.jsx)(nc.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u7(t, e));
                      },
                      children: V.intl.formatToPlainString(V.t.onRIxS, {}),
                  }),
              })
            : null;
}
var dt = n(510022),
    dn = n(427262),
    di = n(106799),
    dl = n(580630);
let ds = (e) => `https://${_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function dr(e, t) {
    return t === u9.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: u4.db,
              children: [
                  (0, p.jsx)(di.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, dl.$g)(e, t);
}
function da(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, ez.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uk.REDEEMED
        ? null
        : n.status === uk.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uK.H, { className: u4.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: u4.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: dn.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uk.CLAIMED || n.status === uk.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uK.H, { className: u4.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: u4.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: dn.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: u4.TP,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t["jcSP+g"]),
                                  onClick: () => (0, ng.openUserSettings)(S.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uK.H, { className: u4.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: u4.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: u4.TP,
                          children: l
                              ? (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, op.A)(ds(i)),
                                })
                              : (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(_.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: s,
                                            }),
                                            (0, dt.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var du = n(933832),
    dd = n(789645);
function dc(e) {
    let { refund: t, locale: n } = e,
        i = ds(n),
        l = t.eligible ? du.CheckmarkLargeIcon : dd.XSmallIcon;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uK.H, { className: u4.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: u4.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uV.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uV.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uV.GIFT:
                                    return e.eligible
                                        ? V.intl.format(V.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? V.intl.format(V.t["8uEuEe"], { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dt2jVC, { dateLimit: n });
                            }
                        })(t, i),
                    }),
                    t.policy !== uV.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: u4.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: u4.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: u4._Z,
                                            children: [
                                                (0, p.jsx)(uK.H, {
                                                    className: u4.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: u4.z9,
                                                    children: [
                                                        (0, p.jsx)(l, { className: u4.xb, color: "currentColor" }),
                                                        (0, p.jsx)("div", {
                                                            children: V.intl.formatToPlainString(V.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(nc.Anchor, { href: i, children: V.intl.string(V.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var dg = n(679897);
function dm(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: u4.mg,
        children: (0, p.jsxs)(lC.A, {
            justify: lC.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function dA(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    return (0, p.jsx)(lA.m, {
        forceOpen: r,
        text: l ? i : n,
        children: (0, p.jsx)(n8.D, {
            onMouseEnter: () => {
                l && s(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uZ.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, p.jsx)("div", { className: u4.l9, children: t }),
        }),
    });
}
function dE(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: u4.mg,
        children: (0, p.jsxs)("div", {
            className: u4.bx,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, p.jsx)(dA, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function dh(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uU.REVERSED;
    return (0, p.jsxs)(n6.E, {
        variant: "footnote/semibold",
        color: "none",
        tag: "span",
        className: im()(dg.XM, n ? dg.aB : dg.EN),
        children: [
            t === uU.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uU.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uU.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function dS(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u9.kM.APPLE_PARTNER ? new oZ.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(ue.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: u4.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function dT(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(dS, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      lC.A,
                      {
                          justify: lC.A.Justify.BETWEEN,
                          align: lC.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(dS, { payment: e, locale: n }),
                              (0, p.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(dh, { tag: e.tag }),
                                      (0, p.jsx)(n6.E, {
                                          variant: "body-md/normal",
                                          color: "text-subtle",
                                          children: dr(e.amount, t.currency),
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
function df(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: u4.ts }),
            t.delisted
                ? (0, p.jsx)(iq.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, op.A)(ds(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(u8, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dp(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, p.jsx)(n8.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: u4.WI,
            children: [
                (0, p.jsx)(uK.H, { className: u4.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: im()(u4.iL, u4.W),
                    children: [
                        (0, p.jsx)(dT, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(dm, { description: t.description, cost: dr(t.subtotal, l) }),
                                            (0, p.jsx)(dm, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: dr(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(dm, { description: V.intl.string(V.t.txajQG), cost: dr(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(dm, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: dr(-t.amount_refunded, l),
                                            }),
                                            (0, p.jsx)(dm, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: dr(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(dE, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, p.jsx)(u6, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, p.jsx)(df, { guildProduct: s, locale: n }),
                (0, p.jsx)(de, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(da, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(dc, { refund: a, locale: n }),
            ],
        }),
    });
}
function dx(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uY.A, { size: 24, iconSize: 16, color: n3.A.unsafe_rawColors.NEUTRAL_1, className: u4.Sy })
        : (0, p.jsx)("div", {
              className: im()(u4.Sy, u4.uX, u4.Xr),
              children: (0, p.jsx)(ac.NitroWheelIcon, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  color: n3.A.colors.ICON_DEFAULT,
              }),
          });
}
function dI(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, I.bG)([lO.A], () => lO.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uM.NITRO:
            return (0, p.jsx)(dx, { withGradient: !0 });
        case uM.NITRO_BASIC:
            return (0, p.jsx)(dx, { withGradient: !1 });
        case uM.SHOP:
            return (0, p.jsx)(uB.ShopIcon, {
                size: "custom",
                width: 23,
                height: 23,
                color: "currentColor",
                className: u4.sV,
            });
        case uM.APPLICATION:
        case uM.PRODUCT:
            return (0, p.jsx)(le.A, {
                className: u4.Sy,
                guildClassName: u4.zA,
                game: t.icon === uM.APPLICATION ? n : void 0,
                guild: i,
                size: le.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function d_(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uG.PAID)
        switch (i.status) {
            case uk.CLAIMED:
                return (0, p.jsx)("span", { className: u4.gD, children: V.intl.string(V.t.lIsIFo) });
            case uk.UNCLAIMED:
                return (0, p.jsx)("span", { className: u4.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uk.REDEEMED:
                return (0, p.jsx)("span", { className: u4.gD, children: V.intl.string(V.t.Osji1u) });
            case uk.FAILED:
                return (0, p.jsx)("span", { className: u4.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: u4.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: u4.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uG.PENDING:
            return (0, p.jsx)("span", { className: u4.oE, children: V.intl.string(V.t.y7F0Re) });
        case uG.FAILED:
            return (0, p.jsx)("span", { className: u4.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uG.REVERSED:
            return (0, p.jsx)("span", { className: u4.ob, children: V.intl.string(V.t.YQv9Li) });
        case uG.CANCELED:
            return (0, p.jsx)("span", { className: u4.ob, children: V.intl.string(V.t.ttkBhy) });
        case uG.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: u4.gD, children: V.intl.string(V.t.lYbZzz) });
        case uG.REFUNDED:
            return (0, p.jsx)("span", { className: u4.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uG.PAID:
            return null;
    }
}
function db(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = x.useState(!1),
        { hasAlreadyLinked: r } = (0, uz.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(up.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n8.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: im()(u4.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(lC.A, {
                        className: u4.J7,
                        align: lC.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                className: u4.p6,
                                children: (0, ih.i$)(iE()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: u4.h_,
                                children: [
                                    (0, p.jsx)(dI, { receipt: t }),
                                    (0, p.jsx)("div", {
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
                                                                      return (0, a_.xq)(t)
                                                                          ? a_.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${a_.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case _.rzx.GIFT: {
                                                              let e = t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t } = e;
                                                                      return (0, uH.t$)(t);
                                                                  })
                                                                  .filter((e) => null != e);
                                                              if (0 === e.length) return null;
                                                              return e
                                                                  .map((e) => a_.Ay.getDisplayName(e, !1, i))
                                                                  .join(", ");
                                                          }
                                                          case _.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return V.intl.formatToPlainString(
                                                                  t.interval === t3.WT.YEAR
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
                                    t.is_gift || t.subscription?.type === _.rzx.GIFT
                                        ? (0, p.jsx)(lA.m, {
                                              text: V.intl.string(V.t.QddTpm),
                                              children: (0, p.jsx)(uX.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: u4.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: u4.vj,
                                children: [
                                    (0, p.jsx)(d_, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: u4.q9, children: dr(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uW.A, {
                                className: u4.fT,
                                direction: l ? uW.A.Directions.UP : uW.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, p.jsx)(dp, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dN = n(949779);
function dC(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        l = x.useRef(null),
        [s, r] = x.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * s, (s + 1) * 10);
    x.useEffect(() => {
        l.current?.scrollTo({ to: 0 });
    }, [s]);
    let u = x.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, uI.A)("billing-history", l);
    return (0, p.jsx)(up.hD, {
        navigator: d,
        children: (0, p.jsx)(up.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(uN, {
                    className: dN.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(ux.Ch, {
                        className: dN.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(db, { className: im()(dN.Nj, dN.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dy(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(o$.Z, {
            className: dN.K1,
            children: [
                (0, p.jsx)("div", {
                    className: dN.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u9.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: dN.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u9.qm[t.paymentGateway],
                        billingHistoryLink: (0, a_.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function dv(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = x.useState(uF),
                [n, i] = x.useState(!1),
                [l, s] = x.useState(!1),
                [r, a] = x.useState(!1),
                o = x.useCallback((e, n) => {
                    tl.Bo.get({
                        url: _.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                l = i.receipts.map(uw);
                            t((t) => ({ receipts: null == e ? l : [...t.receipts, ...l], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && s(!0);
                        })
                        .finally(() => {
                            (i(!0), a(!1));
                        });
                }, []);
            x.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = x.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: l, loadNextPage: u };
        })(),
        r = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: dN.GD,
              children: [
                  null != r && a ? (0, p.jsx)(dy, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: im()(dN.PQ, dN.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: im()(dN.Nj, dN.Bd),
                                    children: (0, p.jsxs)(lC.A, {
                                        className: dN.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: u4.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: dN.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: u4.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(dC, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, p.jsx)(n6.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oB.y, {});
}
var dj = n(500597);
let dO = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, I.bG)([uA.default], () => uA.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dj.kb, {}), (0, p.jsx)(dv, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    dD = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [dO],
    }),
    dR = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [uf, dD],
        useObscuredNotice: of.L,
    }),
    dL = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: oT.CreditCardIcon,
        buildLayout: () => [dR],
    });
var dP = n(70283),
    dG = n(682618),
    dM = n(997101);
let dU = {
        [dM.d.US]: [
            {
                id: "walmart",
                name: "Walmart",
                url: "https://www.walmart.com/ip/Discord-25-Gift-Card-Digital/20844423221?classType=REGULAR&from=/search",
            },
            {
                id: "best_buy",
                name: "Best Buy\xae",
                url: "https://www.bestbuy.com/product/discord-25-gift-card-digital/JJG34YFV8K/sku/6685454",
            },
            {
                id: "target",
                name: "Target",
                url: "https://www.target.com/p/discord-gift-card-email-delivery/-/A-1013530846?preselect=1013327744",
            },
            {
                id: "gamestop",
                name: "GameStop",
                url: "https://www.gamestop.com/gift-cards/virtual-currency/products/discord-25-gift-card/448794.html",
            },
        ],
        [dM.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
        [dM.d.FR]: [
            {
                id: "micromania",
                name: "Micromania",
                url: "https://www.micromania.fr/p/carte-discord-25-euros-166241.html",
            },
        ],
    },
    dV = [];
function dk(e) {
    return null == e ? dV : (dU[e] ?? dV);
}
var dw = n(597758),
    dF = n(35587),
    dB = n(86379);
let dX = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dj.uK,
        usePredicate: () => (0, dB.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dz = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dX] });
var dH = n(704333),
    dY = n(414499),
    dW = n(31300);
function dK(e) {
    let { enabled: t } = oU({ location: e }),
        n = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.storeCountry?.country);
    return t && dk(n).length > 0;
}
var dZ = n(178881);
function dq() {
    return n.e(5660).then(n.bind(n, 946647));
}
function dQ(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(n6.E, {
        variant: "body-xs/normal",
        color: "text-default",
        className: dZ.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let d$ = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dJ],
        usePredicate: () => dK("GiftInventoryMarketingBanner"),
    }),
    dJ = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dK("GiftCardsGiftInventoryBanner"),
                t = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.storeCountry?.country),
                n = oN("gift_inventory_banner"),
                i = x.useMemo(
                    () =>
                        dk(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n("retailer", { partner: e.id, url: e.url }), (0, op.A)(e.url));
                            },
                        })),
                    [t, n],
                ),
                l = x.useCallback(() => {
                    (n("billing_settings"), (0, ng.openUserSettings)(S.X.BILLING_PANEL));
                }, [n]),
                s = x.useCallback(() => {
                    (n("learn_more", { url: oy }), (0, op.A)(oy));
                }, [n]);
            return e
                ? (0, p.jsx)(ob, {
                      surface: "gift_inventory_banner",
                      size: "compact",
                      title: V.intl.string(oj.default.Ja5Q8Z),
                      graphicLottie: dq,
                      actions: i,
                      children: (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dQ, {
                                  icon: dH.ServerGridIcon,
                                  children: V.intl.string(oj.default["9xo1g9"]),
                              }),
                              (0, p.jsx)(dQ, { icon: dY.CloudIcon, children: V.intl.string(oj.default.I5UWh9) }),
                              (0, p.jsx)(dQ, {
                                  icon: uX.GiftIcon,
                                  children: V.intl.format(oj.default.ZuneBP, { onBillingSettingsClick: l }),
                              }),
                              (0, p.jsx)(dQ, {
                                  icon: dW.ScreenIcon,
                                  children: V.intl.format(oj.default.UwYHGm, { websiteUrl: s }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var d0 = n(982240),
    d1 = n(45052),
    d2 = n(620301),
    d3 = n(914410),
    d4 = n(339514),
    d5 = n(573343);
function d6(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: im()(d5.fO, { [d5.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: d5.si }),
            (0, p.jsxs)("div", {
                className: d5.tc,
                children: [
                    (0, p.jsx)(n6.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(d4.default.qvx9E4, { count: (0, d0.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d8(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: d5.dw,
        children: t.map((e) => (0, p.jsx)(d6, { tier: e, iconUrl: (0, d1.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d7(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, d2.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: _.ZSU.BUTTON_CTA, objectType: _.btD.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: d5.NG,
        children: (0, p.jsx)(j.$, {
            variant: "primary",
            icon: uX.GiftIcon,
            text: V.intl.string(d4.default.DZnomS),
            onClick: l,
        }),
    });
}
function d9(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, d0.rL)(i),
        a = (0, d0.rL)(l),
        o = (0, d1.GZ)(n, i, l),
        u = (0, d1.Se)(i),
        d = (0, d1.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(d4.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(d4.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: d5.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: d5.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: d5.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: d5.Qs,
                    children: [
                        (0, p.jsx)(n6.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(d3.Ay, { variant: d3.qP.BLUE, weight: d3.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(n6.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            className: d5.qg,
                            children: V.intl.format(d4.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: d5.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: d5.qS }),
                    }),
            ],
        })
    );
}
function ce(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, I.cf)([d0.Ay], () => ({
            badgeProgress: d0.Ay.getSingleRequirementProgress(dP.$.GIFTING)?.current ?? 0,
            currentTier: d0.Ay.getCurrentTier(dP.$.GIFTING),
            nextTier: d0.Ay.getNextTier(dP.$.GIFTING),
            giftsRemaining: d0.Ay.getRemainingToNextTier(dP.$.GIFTING),
            tiers: d0.Ay.getBadgeById(dP.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: d5.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: d5.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(d9, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, p.jsx)("div", { className: d5.yF }),
                                  ],
                              }),
                          (0, p.jsx)(d8, { tiers: r, currentTier: i }),
                          (0, p.jsx)(n6.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: d5.PJ,
                              children: V.intl.string(d4.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(d7, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let ct = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(d4.default.sFokBp),
        buildLayout: () => [cn],
        usePredicate: () => null != (0, I.bG)([d0.Ay], () => d0.Ay.getBadgeById(dP.$.GIFTING)),
    }),
    cn = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(d4.default.sFokBp)],
        Component: () => (0, p.jsx)(ce, {}),
    });
var ci = n(264779),
    cl = n(412260),
    cs = n(555393),
    cr = n(725807),
    ca = n(212168),
    co = n(976860),
    cu = n(469778),
    cd = n(45938),
    cc = n(109802),
    cg = n(869038),
    cm = n(380856);
function cA(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(lC.A, {
        className: im()(cm.wx, n),
        align: lC.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: cm.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cE(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: im()(cm.rf, n), children: t });
}
class ch extends x.PureComponent {
    static Header = cA;
    static Body = cE;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: im()(cm.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cS = n(153626),
    cT = n(446263),
    cf = n(871123),
    cp = n(366523),
    cx = n(30793),
    cI = n(97352),
    c_ = n(67480),
    cb = n(615396),
    cN = n(274904);
class cC extends x.PureComponent {
    _copyModeTimeout = new rH.Ep();
    state = { copyMode: cc.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cc.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case cc.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cg.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, cd.AK)(t, n),
            (0, uZ.C)(
                e,
                () => this.setState({ copyMode: cc.q.SUCCESS }),
                () => this.setState({ copyMode: cc.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cc.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state,
            i = !(0, cS.m)(t);
        return (0, p.jsxs)(lC.A, {
            direction: lC.A.Direction.VERTICAL,
            className: cN.Gj,
            children: [
                (0, p.jsx)(cc.e, {
                    className: cN.ph,
                    value: (0, cd.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uZ.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s4.XD.BRAND,
                    buttonLook: s4.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cN.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(x.Fragment, {
                                  children: [
                                      V.intl.format(V.t.ltVZcJ, { hours: t.expiresAt.diff(iE()(), "h") }),
                                      i ? (0, p.jsx)(x.Fragment, { children: " \u2014\xa0" }) : null,
                                  ],
                              })
                            : null,
                        i
                            ? (0, p.jsx)(n8.D, {
                                  tag: "a",
                                  onClick: () => this.handleRevoke(t.code),
                                  children: V.intl.string(V.t.v6Yazx),
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
class cy extends x.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await cg.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && cg.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cf.bF)(e)
            ? (0, p.jsx)(cp.e, { shape: "square", sku: e, containerClassName: cN.ez })
            : null != t
              ? (0, p.jsx)(cT.A, { giftStyle: t, className: cN.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(le.A, { game: n, size: le.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cf.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: im()(cN.Oc, cN.ic),
                  children: [
                      (0, p.jsx)(le.A, { game: n, size: le.M.XSMALL, skuId: e.id, className: cN._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cN.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === t3.FB
                    ? V.intl.string(V.t.odsU6W)
                    : i === t3.Bu && null != n
                      ? V.intl.formatToPlainString(n.interval === t3.WT.MONTH ? V.t.uZjpiJ : V.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : V.intl.formatToPlainString(n.interval === t3.WT.MONTH ? V.t.rCJvqo : V.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, p.jsx)("div", { className: cN.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lC.A, {
            justify: lC.A.Justify.BETWEEN,
            align: lC.A.Align.CENTER,
            className: cN.pe,
            children: [
                (0, p.jsx)(n6.E, { variant: "body-md/normal", children: V.intl.string(V.t.lELyPj) }),
                (0, p.jsx)(j.$, {
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
                sku: l,
                isFetching: s,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, p.jsxs)(ch, {
            className: i,
            children: [
                (0, p.jsx)(n8.D, {
                    onClick: this.handleToggleOpen,
                    className: cN.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(ch.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cN.MY,
                            children: [
                                (0, p.jsxs)(lC.A, {
                                    align: lC.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cN.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uW.A, {
                                    direction: a ? uW.A.Directions.UP : uW.A.Directions.DOWN,
                                    className: cN.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(ch.Body, {
                          children: s
                              ? (0, p.jsx)(oB.y, { className: cN.u1 })
                              : (0, p.jsxs)(x.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(cC, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cv = I.Ay.connectStores([c_.A, tu.A, cx.A, i4.A, cI.A, oR.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = c_.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cx.A.getForGifterSKUAndPlan(oR.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: cx.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cx.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i4.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cb.c9)(n) : null,
        giftCodes: s,
    };
})(cy);
var cj = n(725570),
    cO = n(736653),
    cD = n(46054);
let cR = iE().duration(30, "days");
var cL = n(416052),
    cP = n(878309);
function cG(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(lp.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cP.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cP.t4,
            children: [
                (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, p.jsx)(n6.E, { variant: "body-md/normal", className: cP.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cM = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = x.useState(null),
        o = (0, t0.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (x.useEffect(() => {
        null == i &&
            (0, ci.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(cG, { onClose: t, transitionState: s })
        : null == i
          ? (0, p.jsx)(oB.y, { className: cP.Lq })
          : (0, p.jsx)(lp.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cP.N1,
                    children: [
                        (0, p.jsx)("div", { className: cP.Qw }),
                        (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, p.jsx)(n6.E, {
                            variant: "body-md/normal",
                            className: cP.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: V.intl.string(V.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: V.intl.string(V.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, ci.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(la.c, { className: cP.M5 }),
                        (0, p.jsx)(lc.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, p.jsx)(cL.A, {
                                value: i,
                                buttonColor: s4.$n.Colors.BRAND,
                                buttonLook: s4.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cU = n(136380);
function cV(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cO.Ay)(),
        d = (0, ci.WD)(n.id, u),
        c = null != i,
        g = x.useMemo(
            () =>
                (0, ih.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? iE()(n.outboundRedemptionEndDate)
                            : iE()(n.endDate).add(cR)
                        : iE()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = V.intl.format(V.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = V.intl.format(V.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = V.intl.format(V.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = V.intl.format(V.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? V.intl.string(V.t["2cHUti"]) : V.intl.string(V.t.O13yhz),
        A = (0, cs.N)()?.isEligible === !0,
        E = x.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cU.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cU.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cU.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cU.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: cU.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: h }),
                                            (0, p.jsx)(n6.E, {
                                                variant: "body-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, p.jsx)(j.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, p.jsx)(n6.E, {
                            className: cU.GL,
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: cD.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(cj.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cM, {
                            ...e,
                            onClose: E,
                            onClaim: dw.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function ck(e) {
    let { redesign: t = !1 } = e,
        n = (0, I.yK)([cu.A], () => cu.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, cs.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dF.y7)(),
        a = n.find((e) => e.giftCodeBatchId === t3.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === t3.Bu && !e.consumed) ?? [],
        [u, d] = K().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t3.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, p.jsxs)("div", {
                      className: cU.N1,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, p.jsx)(la.c, { className: cU.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: cU.uo,
                      children: [
                          (0, p.jsx)(ac.NitroWheelIcon, {
                              size: "md",
                              color: n3.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cU.PC,
                          }),
                          (0, p.jsx)(n6.E, {
                              variant: "body-md/normal",
                              className: cU.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, co.pX)(_.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(cr.A, {
                              showGradient: !0,
                              className: cU.aA,
                              subscriptionTier: t3.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(ca.A, {
                className: cU.Yj,
                isShown: !1 === i && c,
                type: ca.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cU.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cV, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, p.jsx)(cV, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  cv,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t3.FB,
                                  },
                                  (0, cd.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  cv,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t3.Bu,
                                  },
                                  (0, cd.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  cv,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t3.Bu,
                                  },
                                  (0, cd.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cw = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: cB,
        buildLayout: () => [cF],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, I.cf)(
                    [cl.A],
                    () => ({
                        claimedOutboundPromotionCodes: cl.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cl.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dF.T1)({ includeClaimedPromotions: !0 }),
                i = (0, ci.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cF = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cB()],
        Component: () => (0, p.jsx)(ck, { redesign: !0 }),
    });
function cB() {
    return V.intl.string(V.t.YzjdWJ);
}
var cX = n(339048),
    cz = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cH = n(183636),
    cY = n(949192);
function cW() {
    var e, t;
    let n,
        i,
        l = (0, I.yK)([cu.A], () => cu.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, cd.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = x.useState(!1);
    if (
        (x.useEffect(() => {
            (0, cX.XJ)().then(() => a(!0));
        }, []),
        (e = cz.GIFT_INVENTORY),
        (t = !r),
        (n = x.useRef(null)),
        (i = x.useRef(!1)),
        x.useEffect(() => {
            if (i.current) return;
            if (!t) {
                i.current = !0;
                return;
            }
            n.current ??= performance.now();
            let l = setTimeout(
                () => {
                    ((i.current = !0),
                        "focused" === cH.A.getState() &&
                            (0, cY.pM)(Error(`${e} load timed out`), {
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
            return () => clearTimeout(l);
        }, [e, t, void 0]),
        !r)
    )
        return (0, p.jsx)(oB.y, { className: cU.Lq });
    if (0 === Object.keys(s).length)
        return (0, p.jsxs)("div", {
            className: cU.p$,
            children: [
                (0, p.jsx)(uK.H, { className: cU.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cU.WO,
                    children: V.intl.format(V.t.HezvJ8, {
                        onClick: function () {
                            (0, ng.openUserSettings)(S.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let o = K()
        .keys(s)
        .map((e) => {
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, cd.X6)(e);
            return (0, p.jsx)(cv, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, p.jsx)(q.B, { gap: "lg", children: o });
}
let cK = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cq, buildLayout: () => [cZ] }),
    cZ = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cq()], Component: () => (0, p.jsx)(cW, {}) });
function cq() {
    return V.intl.string(V.t.FWe6CP);
}
var cQ = n(532446),
    c$ = n(499454);
class cJ extends x.Component {
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
                    (await (0, oK.Qp)(n),
                        (0, oK.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oX.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, cd.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await cg.Ay.resolveGiftCode(e, { withSubscriptionPlan: !0, withGiftSubscriptionAgreement: !0 });
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
                (0, c$.h)({ processedCode: e }),
                this.setState({ codeInput: "" }));
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: l, isPromoCode: s } = this.state,
            r = e ? V.intl.string(V.t["hVEn/j"]) : V.intl.string(V.t.SeKIoS),
            a = e ? V.intl.string(V.t.epHMtp) : void 0;
        return (0, p.jsx)(n5.n, {
            label: e ? void 0 : V.intl.string(V.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(cQ.M, {
                    children: [
                        (0, p.jsx)(lI.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? V.intl.string(V.t.Y11a2u) : null,
                            helperText: s
                                ? V.intl.format(V.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, p.jsx)(j.$, {
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
function c0(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, ug.c)({ location: "UserSettingsBilling" }),
        i = x.useContext(td.Ig),
        l = (0, I.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cJ, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let c1 = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [c2],
        usePredicate: () => !(0, dB.Hp)(),
    }),
    c2 = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(c0, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    c3 = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [d$, c1, cw, ct, cK, dz],
        initialize: () => {
            (dw.Ay.fetchClaimedOutboundPromotionCodes(), (0, dG.o0)(dP.$.GIFTING));
        },
    }),
    c4 = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uX.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dF.IO)().length;
            return x.useMemo(() => ({ badgeType: f.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = ug.A.getConfig(e).enabled,
                n = oM.getConfig(e).enabled,
                i = dk(sS.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && i
                ? [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [c3],
    });
var c5 = n(659758),
    c6 = n(177993),
    c8 = n(517352),
    c7 = n(831259),
    c9 = n(462887),
    ge = n(73825),
    gt = n(531260),
    gn = n(160946),
    gi = n(721668),
    gl = n(224016),
    gs = n(526292),
    gr = n(881489),
    ga = n(300349),
    go = n(106512),
    gu = n(175020),
    gd = n(403227),
    gc = n(812537),
    gg = n(103411),
    gm = n(190187),
    gA = n(930861),
    gE = n(854627),
    gh = n(619019),
    gS = n(326084),
    gT = n(851746),
    gf = n(664654),
    gp = n(610709),
    gx = n(912140),
    gI = n(953727);
let g_ = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gI.A)({ ...l }),
            children: [
                (0, p.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, p.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, p.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, p.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, p.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    gb = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cO.Ay)(),
            s = (0, c9.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gI.A)({ ...i }),
            children: [
                (0, p.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, p.jsxs)("defs", {
                            children: [
                                (0, p.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, p.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, p.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, p.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, p.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, p.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, p.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : s ? 0.5 : 0.2,
                        }),
                        (0, p.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, p.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: s ? "0.6" : "0.4",
                                }),
                                (0, p.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("defs", {
                    children: [
                        (0, p.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, p.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, p.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, p.jsx)("feOffset", { dy: "4" }),
                                (0, p.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, p.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, p.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, p.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, p.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("g", {
                    filter: s ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, p.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: s ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: s ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: s ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, p.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, p.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var gN = n(387316),
    gC =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let gy = "url(#gradient)",
    gv = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: i,
                initialPercentage: l = 0,
                progressCircleStrokeSize: s = 2,
                progressCircleVariation: r,
                progressCircleStroke: a,
            } = e,
            o = 43 + s / 2,
            u = 2 * Math.PI * o,
            [d, c] = x.useState(l);
        x.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, cO.Ay)(),
            m = (0, c9.q)(g),
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
                            return gy;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gy;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: gN.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gN.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? gN.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: s,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, p.jsx)("circle", {
                            stroke: h,
                            strokeWidth: s,
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
                (0, p.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, p.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, p.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, p.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, p.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, p.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, p.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, p.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, p.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsx)("div", { className: gN.Vw, children: n }),
            ],
        });
    };
var gj = n(104773);
function gO(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = x.useMemo(() => (0, gx.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: gj.Q7,
        children: (0, p.jsx)("div", {
            className: gj.Nk,
            children: null != l && (0, p.jsx)("img", { className: gj.CH, alt: i, src: l }),
        }),
    });
}
let gD = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gC.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        S = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        T = t && !S;
    return (0, p.jsx)("div", {
        className: im()(gj.G3, n),
        children: (0, p.jsx)(gv, {
            animationClassName: im()(gj._0, { [gj.uJ]: T, [A ?? ""]: T }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gC.NITRO_GEM:
                        return (0, p.jsx)(g_, {
                            className: T ? gj.Ow : void 0,
                            backgroundColor: im()(gj.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gC.NITRO_LOGO:
                        return (0, p.jsx)(gb, { circleColor: E, ellipseOpacity: m });
                    case gC.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(gO, {
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
function gR(e) {
    let { hasSentAll: t } = e;
    return V.intl.string(V.t.USo4s7);
}
function gL(e) {
    let { helpdeskArticle: t, referralsStatuses: n } = e;
    return (function (e) {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
        return t
            ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
            : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
    })({ hasSentAll: n.sent >= 3, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
}
var gP = n(14313);
function gG(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, gE.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, p.jsx)(N.D, { variant: "heading-sm/semibold", className: gP.n5, children: n });
    return (0, p.jsx)(lA.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, p.jsx)("div", { className: gP.Lg, children: r }),
    });
}
function gM(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: gP.Ip,
        children: [
            (0, p.jsx)("div", { className: gP.Ej }),
            (0, p.jsx)("div", { className: im()({ [gP.ch]: t > n, [gP.q_]: t === n }) }),
        ],
    });
}
function gU(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: gP.ZM,
        children: [
            (0, p.jsx)(gG, { userRecord: i, placement: 1 }),
            (0, p.jsx)(gM, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(gG, { userRecord: l, placement: 2 }),
            (0, p.jsx)(gM, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(gG, { userRecord: s, placement: 3 }),
        ],
    });
}
function gV(e) {
    let { analyticsLocations: t } = e;
    (td.default.track(_.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
        (0, lx.mM)(async () => {
            let { default: e } = await Promise.all([n.e(647658), n.e(228304)]).then(n.bind(n, 581846));
            return (n) => (0, p.jsx)(e, { ...n, sourceAnalyticsLocations: t });
        }));
}
let gk = function (e) {
    let { variant: t = "default" } = e,
        n = (0, I.bG)([gT.A], () => gT.A.getRecipientStatus()),
        { referralSentUsers: i } = (0, gf.J)(),
        l = x.useMemo(() => i.map((e) => new gh.A(e)), [i]),
        s = { redeemed: 0, converted: 0, sent: n.size };
    n.forEach((e) => {
        (e === gS.aK.REDEEMED && s.redeemed++, e === gS.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let r = 3 === s.sent,
        a = eC.A.getArticleURL(_.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: o } = (0, ez.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        u = x.useRef(null),
        d = (s.sent / 3) * 100;
    if ("settings" === t)
        return (0, p.jsx)(ez.f5, {
            value: o,
            children: (0, p.jsxs)("div", {
                className: gP.W0,
                children: [
                    (0, p.jsx)("div", {
                        className: gP.xh,
                        children: (0, p.jsx)(gp.fx, { nReferralsSent: s.sent, imageSize: 56 }),
                    }),
                    (0, p.jsxs)("div", {
                        className: gP.z1,
                        children: [
                            (0, p.jsx)(N.D, { variant: "heading-lg/semibold", children: gR({ hasSentAll: r }) }),
                            (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                children: gL({ helpdeskArticle: a, referralsStatuses: s }),
                            }),
                            (0, p.jsx)(gp.ZP, { referralSentUsers: l, className: gP.D1 }),
                        ],
                    }),
                    (0, p.jsx)(j.$, {
                        variant: "expressive",
                        text: V.intl.string(r ? V.t.SY9tyI : V.t.Lm2nFc),
                        onClick: () => gV({ analyticsLocations: o }),
                    }),
                ],
            }),
        });
    let c = (0, p.jsxs)("div", {
            className: gP.hE,
            children: [
                (0, p.jsx)(gD, { percentage: d, progressCircleVariation: gC.NITRO_LOGO, iconClassName: gP.ER }),
                (0, p.jsxs)("div", {
                    className: gP.Ns,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-xl/semibold",
                            className: gP.R0,
                            children: gR({ hasSentAll: r }),
                        }),
                        (0, p.jsx)(gU, { userRecords: l }),
                        (0, p.jsx)(n6.E, {
                            variant: "body-sm/normal",
                            children: gL({ helpdeskArticle: a, referralsStatuses: s }),
                        }),
                        (0, p.jsx)("div", {
                            className: gP.Fb,
                            children: (0, p.jsx)(gA.wL, {
                                "data-migration-pending": !0,
                                className: gP.r$,
                                color: s4.XD.CUSTOM,
                                onClick: () => gV({ analyticsLocations: o }),
                                onlyShineOnHover: !0,
                                children: (0, p.jsxs)("div", {
                                    className: gP.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gP.QH,
                                        }),
                                        r ? V.intl.string(V.t.SY9tyI) : V.intl.string(V.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        g = 3 === s.redeemed;
    return (0, p.jsx)(ez.f5, {
        value: o,
        children: (0, p.jsx)("div", {
            className: im()(gP.kL, { [gP.AP]: g }),
            children: (0, p.jsx)("div", { ref: u, className: im()(gP.d_, { [gP.kS]: g }), children: c }),
        }),
    });
};
var gw = n(194509),
    gF = n(465794),
    gB = n(774774),
    gX = n(156601),
    gz = n(926239),
    gH = n(88001),
    gY = n(107198),
    gW = n(487518),
    gK = n(956537),
    gZ = n(185062);
let gq = "to_premium_home_button",
    gQ = "premium home page";
function g$(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        { enabled: s } = ga.A.useConfig({ location: "PremiumManagementSettings" }),
        r = s && (0, c9.q)(l) ? "text-strong" : "text-overlay-light",
        a = t.hasActiveTrial,
        o = t.planIdFromItems === t3.gD.PREMIUM_YEAR_TIER_2,
        u = t.hasAnyPremiumGroup,
        d = (0, gt.A)(),
        c = null != t.trialEndsAt ? iE()(t.trialEndsAt).diff(iE()(), "d") : 0,
        g = t3.hd[t.planIdFromItems],
        m = a_.Ay.getDefaultPrice(g.id),
        A = a_.Ay.formatPriceString(m, g.interval);
    if (n || a) {
        let e = (0, c9.M)(l) ? gB.at.PREMIUM_TIER_2_WHITE_FILL : gB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !a && (o || u)
                    ? (0, p.jsx)(gB.e4, { text: V.intl.string(V.t.EyjDRE), className: gW.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gB.HU, {
                                  text: a ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gW.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gW.on }),
                          ],
                      }),
                (0, p.jsx)(N.D, {
                    variant: "heading-sm/medium",
                    color: r,
                    className: gW.KB,
                    children: (function () {
                        if (a) return V.intl.format(V.t["2CGBri"], { remainingTime: c, price: A });
                        if (u && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, dl.$g)(m.amount, m.currency);
                            return V.intl.format(gY.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return o
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: a_.Ay.getExpectedRenewalDate(t, d),
                              })
                            : V.intl.formatToPlainString(V.t["3ZiutU"], {
                                  percent: i?.percentage ?? 30,
                                  regularPrice: A,
                                  numMonths: i?.duration ?? 1,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, p.jsx)(gX.A, {
        color: r,
        variant: s ? "body-sm/medium" : void 0,
        className: s ? gW.rf : void 0,
        subscriptionTier: t3.pe.TIER_2,
        interval: g.interval,
    });
}
function gJ() {
    let { enabled: e } = ga.A.useConfig({ location: "PremiumManagementSettings" }),
        t = (0, gs.k5)(),
        n = (0, gs.nf)(),
        i = (0, cO.Ay)(),
        l = e && (0, c9.q)(i),
        s = l ? "text-strong" : "text-overlay-light",
        r = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
        a = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        o = a?.isPremiumWithPremiumGroup(),
        u = (0, gt.A)(),
        d = (0, gr.ds)(),
        c = null !== r && null !== r.planIdFromItems;
    if (!c && !u.isFractionalPremiumActive && !o) return null;
    let g = u.isFractionalPremiumActive,
        m = null !== r && r.hasActiveTrial,
        A = (0, p.jsx)(gz.ZP, {
            featureSet: a?.isPremiumGroupPrimary()
                ? gz.Nz.PREMIUM_GROUP_PRIMARY
                : a?.isPremiumGroupMember()
                  ? gz.Nz.PREMIUM_GROUP_MEMBER
                  : g
                    ? gz.Nz.FRACTIONAL_PREMIUM
                    : gz.Nz.DEFAULT,
            enablePremiumBrandRefresh: e,
            textVariant: e ? "body-sm/medium" : void 0,
        });
    return (0, p.jsxs)("div", {
        className: im()(gW.$Y, { [gW.J5]: t || m, [gW.gd]: e }),
        children: [
            (0, p.jsxs)("div", {
                className: gW.jp,
                children: [
                    o
                        ? (0, p.jsx)(N.D, { variant: "nitro-md", color: s, className: gW._K, children: (0, gH.DP)() })
                        : (0, p.jsx)(gl.A, { className: gW.TJ, color: l ? "var(--text-strong)" : void 0 }),
                    o && !t
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : g && !d
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gB.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gW.LW,
                                        colorOptions: gB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(N.D, {
                                        variant: "heading-sm/medium",
                                        color: s,
                                        className: gW.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : c
                            ? (0, p.jsx)(g$, {
                                  premiumSubscription: r,
                                  isDiscountApplied: t,
                                  activeDiscountInfo: n,
                                  theme: i,
                              })
                            : d
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gB.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gW.uS,
                                            colorOptions: (0, c9.M)(i)
                                                ? gB.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(N.D, {
                                            variant: "heading-sm/medium",
                                            color: s,
                                            className: gW.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    e ? (0, p.jsx)(q.B, { direction: "vertical", gap: 12, className: gW.bY, children: A }) : A,
                    g && !c
                        ? (0, p.jsxs)(s6.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, p.jsx)(gF.A, {
                                      defaultTextOverride: d ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gq,
                                              target: gQ,
                                          }),
                                              (0, tH.default)(),
                                              (0, co.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      variant: e ? "secondary" : "overlay-secondary",
                                      fullWidth: !e,
                                      size: "md",
                                      text: d ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, p.jsxs)(s6.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, p.jsx)(j.$, {
                                      variant: l ? "primary" : "overlay-primary",
                                      fullWidth: !e,
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gq,
                                              target: gQ,
                                          }),
                                              (0, tH.default)(),
                                              (0, co.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      text: V.intl.string(e ? V.t.rVjt5j : V.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, p.jsx)(j.$, {
                                      variant: e ? "secondary" : "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, ng.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: V.intl.string(e ? V.t.FVEaqm : V.t["9uDy6C"]),
                                      fullWidth: !e,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)("div", {
                className: gW.ah,
                children: (0, p.jsx)("img", {
                    className: gW.ah,
                    alt: "",
                    src: e ? gZ.A : "/assets/3aaa2c2d1874c196.svg",
                }),
            }),
        ],
    });
}
function g0() {
    let { enabled: e } = ga.A.useConfig({ location: "PremiumManagementSettings" });
    function t() {
        td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: "gifting_button", target: "payment modal" });
    }
    return e
        ? (0, p.jsx)(gu.A, {
              variant: "settings",
              location: tk.A.PREMIUM_SETTINGS,
              analyticsLocation: {},
              onGiftClick: t,
          })
        : (0, p.jsxs)("div", {
              className: gW.T1,
              children: [
                  (0, p.jsx)("img", { className: gW.GY, alt: "", src: gK }),
                  (0, p.jsxs)("div", {
                      className: gW.b4,
                      children: [
                          (0, p.jsx)(N.D, {
                              className: gW.Vz,
                              variant: "heading-xl/semibold",
                              children: V.intl.string(V.t["3KomGa"]),
                          }),
                          (0, p.jsx)(n6.E, {
                              className: gW.Oi,
                              variant: "body-sm/normal",
                              children: V.intl.string(V.t.yQ06u1),
                          }),
                          (0, p.jsx)(gw.A, {
                              className: im()(gW.Tp, gW._c),
                              textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gW.VV },
                              color: s4.$n.Colors.CUSTOM,
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          });
}
function g1(e) {
    let { premiumSubscription: t, giftPromotion: n, showReferral: i } = e,
        { enabled: l } = ga.A.useConfig({ location: "PremiumManagementSettings" }),
        { analyticsLocations: s } = (0, ez.Ay)(),
        r = x.useRef(null),
        [a, o] = x.useState(!1),
        u = !!t?.hasActiveTrial;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: l ? 24 : 40,
                className: l ? gW.W0 : void 0,
                children: [
                    n,
                    (0, p.jsx)(gJ, {}),
                    i && (0, p.jsx)(gk, { variant: l ? "settings" : "default" }),
                    null == n && (0, p.jsx)(g0, {}),
                    l
                        ? (0, p.jsx)(gc.A, {
                              variant: "settings",
                              className: gW.hM,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanTier: t3.PremiumTypes.TIER_2,
                          })
                        : (0, p.jsx)(gd.A, {
                              hideCTAs: !0,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanColumnClassName: gW.JG,
                              selectedPlanTier: t3.PremiumTypes.TIER_2,
                          }),
                ],
            }),
            (0, p.jsx)(c7.L, {
                innerRef: r,
                onChange: (e) => {
                    e &&
                        !a &&
                        (td.default.track(_.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }),
                        o(!0));
                },
                children: (0, p.jsx)("div", { ref: r, className: gW._Z }),
            }),
        ],
    });
}
let g2 = function () {
        let e = (0, dB.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
            i = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
            l = (0, I.bG)([um.A], () => um.A.hasFetchedSubscriptions()),
            s = (0, gn.Y)(t3.T7),
            [r, a] = x.useState(!0),
            o = (0, gt.A)({ forceFetch: !0 }),
            u = (0, I.bG)([cl.A], () => {
                let e = cl.A.getMarketingComponentBySurface(c8.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return e?.surface ?? null;
            }),
            d = !(oQ.Fr || oQ.v1) && null != u;
        (0, gm.i)();
        let c = (0, gg.m)();
        if (
            (x.useEffect(() => {
                !(async function () {
                    (e || (await Promise.all([oD.hP(), oD.$o(), (0, ge.zS)(null, null, _.tF5.DISCOVERY)])), a(!1));
                })();
            }, [e]),
            e)
        )
            return (0, p.jsx)(dj.uK, {});
        let g = l && null !== i && s,
            m = o.fetched && o.isFractionalPremiumActive,
            A = n?.isPremiumWithPremiumGroup();
        return g || m || r || A
            ? null != n && (g || m || A) && !r
                ? (0, p.jsx)(ez.f5, {
                      value: t,
                      children: (0, p.jsx)(g1, {
                          premiumSubscription: i,
                          giftPromotion: d ? (0, p.jsx)(go.m, { config: u }) : null,
                          showReferral: c,
                      }),
                  })
                : (0, p.jsx)(oB.y, {})
            : (0, p.jsx)(gi.A, { title: V.intl.string(V.t.dyq9TR), note: null });
    },
    g3 = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
            return (0, a_.YE)(e, t3.PremiumTypes.TIER_2) ? (0, p.jsx)(g2, {}) : (0, p.jsx)(c6.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    g4 = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [g3] }),
    g5 = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: of.L,
        buildLayout: () => [g4],
    }),
    g6 = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: ac.NitroWheelIcon,
        usePersistentBadge: function (e) {
            let t = (0, c5.e)(e);
            return x.useMemo(() => ({ badgeType: f.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [g5],
    });
var g8 = n(104510),
    g7 = n(559201),
    g9 = n(859241),
    me = n(527113),
    mt = n(338548),
    mn = n(504047),
    mi = n(711014),
    ml = n(178368),
    ms = n(809545),
    mr = n(168482);
function ma() {
    return (0, p.jsxs)("div", {
        className: ms.iE,
        children: [
            (0, p.jsx)("img", { className: ms.Kk, alt: "", src: mr }),
            (0, p.jsxs)("div", {
                className: ms.pq,
                children: [
                    (0, p.jsx)(n6.E, { variant: "body-lg/semibold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: V.intl.string(V.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(j.$, {
                variant: "secondary",
                text: V.intl.string(V.t.JFlifp),
                onClick: function () {
                    ((0, co.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var mo = n(365199),
    mu = n(233824),
    md = n(443865),
    mc = n(165862),
    mg = n(473145);
function mm(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? V.intl.string(V.t["PR0n//"]) : V.intl.string(V.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? V.intl.string(V.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: V.intl.string(V.t.twFU3R), subtext: l ? null : V.intl.string(V.t.oQ9lOh), disabled: !l },
            uncancel: { label: V.intl.string(V.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case _.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = V.intl.string(V.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case _.Dmq.PAUSE_PENDING:
        case _.Dmq.PAUSED:
            a === t3.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = V.intl.string(V.t.LiLRRT)),
                (o.cancel.subtext = V.intl.string(V.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = x.useMemo(
        () =>
            s.isPausedOrPausePending && a === t3.xc.NONE
                ? (0, p.jsx)(ti.Dr, {
                      id: "manage-subscription",
                      label: V.intl.string(V.t.obRG6Y),
                      action: () => (0, ng.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: md.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: md.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(mc.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": V.intl.string(V.t.ogxXGq),
        onClose: i,
        children: [
            (0, p.jsx)(ti.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, lx.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(295570),
                            n.e(378357),
                            n.e(870528),
                            n.e(205896),
                            n.e(621158),
                            n.e(693173),
                            n.e(418710),
                            n.e(303439),
                        ]).then(n.bind(n, 710802));
                        return (n) =>
                            (0, p.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: _.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, mg.I5)(t)
                ? (0, p.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lx.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, p.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, p.jsx)(ti.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, lx.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, p.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var mA = n(545934),
    mE = n(682163),
    mh = n(987144),
    mS = n(864310),
    mT = n(290413);
function mf(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mS.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? mT.OA,
        children: [
            (0, p.jsx)(mE.Ay, { className: mT.$f, guild: t, size: mE.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: mT.gI,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: mT.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mT.QW,
                                children: [
                                    (0, p.jsx)(g8.BoostGemIcon, {
                                        className: mT.Wz,
                                        color: n3.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== _.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: mT.zk }),
                                        (0, p.jsx)(n6.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, mg.gb)(t.premiumTier, { useLevels: !1 }),
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
function mp(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([lO.A], () => lO.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: mT.Nr,
              children: [
                  (0, p.jsx)(mf, { guild: n }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g8.BoostGemIcon,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, mh.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: _.ZSU.BUTTON_CTA,
                                  objectType: _.btD.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var mx = n(747381);
let mI =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function m_(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = x.useRef(null),
        a = (0, mg.I5)(t),
        o = x.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gt.A)(),
        c = x.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === _.TVA.NONE) return "";
                    let n = [
                        V.intl.formatToPlainString(V.t["dLlKX/"], { numEmojiSlots: t3.TG[e].limits.emoji }),
                        V.intl.formatToPlainString(V.t["+ANIfv"], { numStickerSlots: t3.TG[e].limits.stickers }),
                        V.intl.formatToPlainString(V.t["4gt60b"], {
                            numSoundboardSlots: t3.TG[e].limits.soundboardSounds,
                        }),
                        V.intl.formatToPlainString(V.t.XahSjZ, {
                            resolution: t3.TG[e].limits.screenShareQualityResolution,
                            framerate: t3.TG[e].limits.screenShareQualityFramerate,
                        }),
                        V.intl.formatToPlainString(V.t.NbNs7S, { bitrate: t3.TG[e].limits.bitrate / 1e3 }),
                        V.intl.formatToPlainString(V.t.VVKcpn, { filesize: t3.TG[e].limits.fileSize / 1024 / 1024 }),
                        V.intl.formatToPlainString(V.t.TbpCvv, { numVideoStageSeats: t3.TG[e].limits.stageVideoUsers }),
                        V.intl.string(V.t.LDyX3i),
                        V.intl.string(V.t.YtGlPW),
                    ];
                    (e >= _.TVA.TIER_2 && (n.push(V.intl.string(V.t.SztbtN)), n.push(V.intl.string(V.t["3GK91n"]))),
                        e >= _.TVA.TIER_3 && n.push(V.intl.string(V.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return V.intl.formatToPlainString(V.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = x.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oV.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = x.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: im()(mx.iq, { [mx.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: mx.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mx.bB, src: mI }),
                    A
                        ? (0, p.jsx)(n6.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(n6.E, { variant: "body-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: mx.zk }),
                                              (0, p.jsx)(n6.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: V.intl.formatToPlainString(V.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: mx.zk }),
                                              (0, p.jsx)(n6.E, {
                                                  variant: "body-sm/medium",
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
            (0, p.jsx)(af.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(mm, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: l,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, p.jsx)(n8.D, {
                        innerRef: r,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        className: mx.Mj,
                        ...e,
                        children: (0, p.jsx)(mo.MoreHorizontalIcon, {
                            size: "xs",
                            color: n3.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mb(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, I.bG)([lO.A], () => lO.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: mx.Nr,
        children: [
            (0, p.jsx)("div", {
                className: mx.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(mf, { guild: s, className: mx.OA }),
                                  (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, mu.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: mx.OA,
                              children: (0, p.jsx)(N.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    m_,
                    {
                        slot: e,
                        guildTier: s?.premiumTier,
                        premiumSubscription: i,
                        hasCancelableSlots: l,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function mN(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = x.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                mA.A.createFromServer(
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
                s = {};
            for (let n of Object.keys(t)) {
                let i = t[n];
                if ((!(0, mg.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > a_.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: mx.kR,
        children: oV.default
            .keys(s)
            .map((e) => (0, p.jsx)(mb, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mC = n(502572),
    my = n(983511),
    mv = n(342744),
    mj = n(496431);
let mO = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mj.A)(n);
    return (0, p.jsx)(n6.E, {
        className: t,
        variant: "body-sm/medium",
        color: "text-muted",
        children: (0, ih.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var mD = n(731536);
function mR(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = x.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, mg.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? a_.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === t3.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: mD.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: mD.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: mD._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: mD.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: mD.F8, src: mI }),
                                          (0, p.jsx)("div", {
                                              className: im()(mD.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: mD.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: mD.Qp,
                                      children: [
                                          (0, p.jsx)(n6.E, {
                                              variant: "heading-sm/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, p.jsx)(n6.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-subtle",
                                              children: V.intl.format(V.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)(mC.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: g8.BoostGemIcon,
                                      text: V.intl.string(V.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lx.mM)(async () => {
                                              let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(
                                                  n.bind(n, 770101),
                                              );
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, mh.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: _.JJy.SETTINGS_PREMIUM,
                                                                      object: _.ZSU.BUTTON_CTA,
                                                                      objectType: _.btD.BUY,
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
                  s.map((e, t) =>
                      (0, p.jsx)(
                          mL,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, mg.I5)(e),
                              isCanceled: (0, mg.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mL(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = x.useRef(null),
        u = x.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(mO, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(n6.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(n6.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = l || s;
    return (0, p.jsxs)("div", {
        className: im()(mD.iq, { [mD.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: mD.kd,
                children: [(0, p.jsx)("img", { alt: "", className: mD.bB, src: mI }), t],
            }),
            c &&
                (0, p.jsx)(af.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(mc.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": V.intl.string(V.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, p.jsx)(ti.Dr, {
                                        id: "cancel-boost",
                                        label: V.intl.string(V.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lx.mM)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(my.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, p.jsx)(ti.Dr, {
                                        id: "uncancel-boost",
                                        label: V.intl.string(V.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? V.intl.string(V.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lx.mM)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(mv.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(n8.D, {
                            innerRef: o,
                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                            className: mD.Mj,
                            ...e,
                            children: (0, p.jsx)(mo.MoreHorizontalIcon, {
                                size: "xs",
                                color: n3.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mP = n(834612);
function mG(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== t3.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: mP.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mP.b,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, p.jsx)(n6.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(mN, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mR, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mM = n(414184),
    mU = n(9146);
function mV() {
    return (0, p.jsxs)("div", {
        className: mU.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mU.kR,
                children: mM.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mU.Nr,
                            children: [
                                (0, p.jsx)(n, { className: mU.Kk }),
                                (0, p.jsx)(n6.E, {
                                    className: mU.h_,
                                    color: "text-muted",
                                    variant: "body-sm/medium",
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
var mk = n(847374),
    mw = n(232122),
    mF = n(665984);
function mB() {
    let [e, t] = x.useState(null),
        [n, i] = x.useState(null);
    return (0, p.jsxs)("div", {
        className: mF.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mF.p_,
                children: mw.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n8.D,
                        {
                            tag: "li",
                            className: im()(mF.Aw, { [mF.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mF.k7,
                                    children: [
                                        (0, p.jsx)(n6.E, {
                                            className: mF.b1,
                                            color: o,
                                            variant: "heading-sm/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(mk.ChevronSmallDownIcon, {
                                            size: "sm",
                                            color: n3.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mF.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(n6.E, {
                                        className: mF.ZF,
                                        color: "text-muted",
                                        variant: "body-sm/medium",
                                        children: l.getAnswer(),
                                    }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var mX = n(182859),
    mz = n(586428),
    mH = n(416763);
function mY() {
    let e = eC.A.getArticleURL(_.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mH.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mH.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mH.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mH.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(mz.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(mX.A, {
                variant: "member",
                className: mH.iO,
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
var mW = n(315629),
    mK = n(87719),
    mZ = n(961085);
function mq() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
    if (null == e || a_.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mW.h, {
        color: "nitro-pink",
        className: mZ.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mZ.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mZ.q3, src: mI }),
                    (0, p.jsxs)("div", {
                        className: mZ.Tm,
                        children: [
                            (0, p.jsx)(n6.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: 2, boostCount: 2 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mZ.xv,
                                children: [
                                    (0, p.jsx)(ac.NitroWheelIcon, { className: mZ.nE }),
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: 2,
                                            boostCount: 2,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(j.$, {
                variant: "expressive",
                size: "sm",
                icon: ac.NitroWheelIcon,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mK.e,
            }),
        ],
    });
}
var mQ = n(532991);
function m$() {
    let e = (0, I.bG)([mn.A], () => mn.A.affinities),
        t = (0, I.bG)([mi.Ay], () => mi.Ay.getFlattenedGuildIds()),
        n = x.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, p.jsxs)("div", {
              className: mQ.i,
              children: [
                  (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mQ.k, children: n.map((e) => (0, p.jsx)(mp, { guildId: e }, e)) }),
              ],
          });
}
var mJ = n(967246);
function m0(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mW.h, {
        color: "nitro-pink",
        className: mJ.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mJ.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mJ.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mJ.F8, src: mI }),
                            (0, p.jsx)("div", {
                                className: im()(mJ.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mJ.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mJ.Tm,
                        children: [
                            (0, p.jsx)(n6.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mJ.xv,
                                children: [
                                    (0, p.jsx)(ac.NitroWheelIcon, { className: mJ.nE }),
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: 2,
                                            boostCount: 2,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(j.$, {
                variant: "primary",
                size: "sm",
                icon: g8.BoostGemIcon,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lx.mM)(async () => {
                        let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mh.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: _.JJy.SETTINGS_PREMIUM,
                                                object: _.ZSU.BUTTON_CTA,
                                                objectType: _.btD.BUY,
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
var m1 = n(89150);
function m2(e) {
    let { premiumSubscription: t } = e,
        n = (0, I.bG)([ml.A], () => ml.A.boostSlots),
        i = x.useMemo(() => Object.values(n), [n]),
        l = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        s = (0, I.bG)([mn.A], () => mn.A.affinities),
        r = (0, I.bG)([mi.Ay], () => mi.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, I.bG)([g9.A], () => g9.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, gt.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t3.xc.NONE,
        g = x.useMemo(() => {
            if (null == t || c) return 0;
            let e = a_.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: m1.GO,
        children: [
            (0, p.jsx)(dj.kb, { className: m1.ek }),
            (0, p.jsx)(mY, {}),
            (0, p.jsx)(mq, {}),
            g > 0 && (0, p.jsx)(m0, { count: g }),
            d && (0, p.jsx)(mt.A, {}),
            !a && (0, p.jsx)(ma, {}),
            (0, p.jsxs)("div", {
                className: m1.C_,
                children: [
                    (0, p.jsx)(mG, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(m$, {}),
                    (0, p.jsx)(me.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mV, {}),
                    (0, p.jsx)(mB, {}),
                ],
            }),
        ],
    });
}
var m3 = n(819677);
let m4 = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            x.useEffect(() => {
                (oD.hP(), oD.$o(), (0, g7.CD)(), (0, ge.zS)(null, null, _.tF5.DISCOVERY), (0, g7.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, I.cf)([um.A], () => ({
                    hasFetchedSubscriptions: um.A.hasFetchedSubscriptions(),
                    premiumSubscription: um.A.getPremiumTypeSubscription(),
                })),
                n = (0, gn.Y)(),
                i = (0, I.bG)([oP.A], () => oP.A.hasFetchedPaymentSources),
                l = (0, I.bG)([g9.A], () => g9.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = x.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, p.jsx)("div", { className: im()(m3.kL, m3.Lq), children: (0, p.jsx)(oB.y, {}) })
                : (0, p.jsxs)("div", {
                      className: m3.kL,
                      children: [
                          (0, p.jsx)("div", { className: m3.Tp }),
                          (0, p.jsx)("div", { className: m3.Qs, children: (0, p.jsx)(m2, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    m5 = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m4] }),
    m6 = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [m5],
    }),
    m8 = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: g8.BoostGemIcon,
        buildLayout: () => [m6],
    });
var m7 = n(153659),
    m9 = n(155984),
    Ae = n(357758),
    At = n(262077),
    An = n(281445),
    Ai = n(624479),
    Al = n(626584),
    As = n(263775);
let Ar = (0, oG.mj)({
    name: "2026-10-gsh-change-payment-method",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Aa = n(196736),
    Ao = n(685743),
    Au = n(349085),
    Ad = n(342942),
    Ac = n(376205),
    Ag = n(269249),
    Am = n(758836),
    AA = n(49999),
    AE = n(105518),
    Ah = n(439050);
let AS = new Al.A("GameServerSubscriptionsSection");
function AT(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function Af(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let Ap = (e) => {
        let { subscriptionId: t, skuId: i } = e,
            { analyticsLocations: l } = (0, ez.Ay)(),
            s = (function (e) {
                let { location: t } = e;
                return Ar.useConfig({ location: t }).enabled;
            })({ location: "user_settings_subscriptions" }),
            r = x.useCallback(() => {
                var e;
                ((e = { subscriptionId: t, skuId: i, analyticsLocations: l }),
                    (0, lx.mM)(async () => {
                        let { default: t } = await n.e(498934).then(n.bind(n, 592149));
                        return (n) => (0, p.jsx)(t, { ...n, ...e });
                    }));
            }, [t, i, l]);
        return s
            ? (0, p.jsx)(j.$, { variant: "secondary", size: "sm", text: V.intl.string(V.t.SgX7Ra), onClick: r })
            : null;
    },
    Ax = x.memo(function (e) {
        let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
            { analyticsLocations: l } = (0, ez.Ay)(),
            s = t.instance.subscriptionId,
            r = t.instance.planId,
            a = (0, Au.A)(t.gameId, "cover") ?? t.coverUrl,
            [o, u] = (0, As.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
            d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
            c = oR.default.getId() ?? "0",
            { handleCopyServerIp: g, animateCopyIcon: m } = (0, Ao.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
            A = x.useCallback(() => {
                (0, Ad.A)({
                    provider: An.X.SHOCKBYTE,
                    onAccept: () => {
                        (u(AA.i.TAKE_ACTION), g());
                    },
                });
            }, [u, g]),
            {
                hasSubscription: E,
                priceLabel: h,
                dateLabel: S,
                isCanceled: T,
                isDanger: f,
            } = (0, I.bG)(
                [um.A, cI.A],
                () => {
                    let e = null != s ? um.A.getSubscriptionById(s) : null;
                    if (null == e)
                        return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                    let t = null != e.canceledAt,
                        l = !t && null != e.renewalMutations,
                        r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                        a = null != r ? cI.A.get(r) : null,
                        o = null != a ? n.get(a.skuId) : null,
                        u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                        d =
                            null != u && o?.priceCurrency != null
                                ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, dl.$g)(u, o.priceCurrency) })
                                : null,
                        c = AT(e.currentPeriodEnd);
                    return {
                        hasSubscription: !0,
                        priceLabel: d,
                        dateLabel: t
                            ? V.intl.formatToPlainString(AE.default["3aEgK6"], { date: c })
                            : l
                              ? V.intl.formatToPlainString(AE.default.KFSA3M, { date: c })
                              : V.intl.formatToPlainString(AE.default["9A6cRW"], { date: c }),
                        isCanceled: t,
                        isDanger: t || l,
                    };
                },
                [s, n, i],
                Af,
            ),
            b = x.useCallback(() => {
                if (null == s) return;
                let e = um.A.getSubscriptionById(s),
                    t = null != e ? AT(e.currentPeriodEnd) : "";
                (0, n4.A)({
                    title: V.intl.string(AE.default.TEYPNR),
                    subtitle: V.intl.formatToPlainString(AE.default.XR1WrB, { date: t }),
                    confirmText: V.intl.string(V.t["cY+Oob"]),
                    cancelText: V.intl.string(AE.default.zjfaGH),
                    variant: "critical",
                    onConfirm: async () => {
                        try {
                            (await oD.M2(s, l), await oD.hP());
                        } catch (e) {
                            AS.error("Failed to cancel game server subscription", e);
                        }
                    },
                });
            }, [s, l]),
            N = x.useCallback(() => {
                if (null == s) return;
                let e = um.A.getSubscriptionById(s);
                if (null == e) return;
                let t = e.items[0]?.planId,
                    a = null != t ? cI.A.get(t) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d = null != u && o?.priceCurrency != null ? (0, dl.$g)(u, o.priceCurrency) : "",
                    c = AT(e.currentPeriodEnd);
                (0, n4.A)({
                    title: V.intl.string(AE.default.o96qbc),
                    subtitle: V.intl.formatToPlainString(AE.default["7n6Qq+"], { price: d, date: c }),
                    confirmText: V.intl.string(V.t.iIvF2z),
                    cancelText: V.intl.string(V.t["ETE/oC"]),
                    variant: "primary",
                    onConfirm: async () => {
                        try {
                            await (0, ge.ur)(r);
                            let t = e.items;
                            (await oD.nV(
                                e,
                                { status: _.Dmq.ACTIVE, items: t, currency: e.currency },
                                { amount: 0, currency: e.currency },
                                (0, a_.UC)(t, e.currency),
                                l,
                            ),
                                await oD.hP());
                        } catch (e) {
                            AS.error("Failed to re-subscribe to game server subscription", e);
                        }
                    },
                });
            }, [s, r, l, n, i]),
            C = "" !== t.serverIp && ":" !== t.serverIp;
        return (0, p.jsxs)("div", {
            className: Ah.nM,
            children: [
                (0, p.jsxs)("div", {
                    className: Ah.M4,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Ah.Vs,
                            "aria-hidden": !0,
                            children: [
                                null != a && (0, p.jsx)("img", { className: Ah.uP, src: a, alt: "" }),
                                (0, p.jsx)("div", { className: Ah.tw }),
                            ],
                        }),
                        (0, p.jsxs)("div", {
                            className: Ah.CR,
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: t.serverName,
                                }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                }),
                                C &&
                                    (d
                                        ? (0, p.jsxs)("div", {
                                              className: Ah.CQ,
                                              children: [
                                                  (0, p.jsx)(n6.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-muted",
                                                      tag: "span",
                                                      lineClamp: 1,
                                                      children: t.serverIp,
                                                  }),
                                                  (0, p.jsx)(n8.D, {
                                                      className: Ah.cL,
                                                      onClick: g,
                                                      "aria-label": V.intl.string(V.t.OpuAlK),
                                                      children: m
                                                          ? (0, p.jsx)(du.CheckmarkLargeIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            })
                                                          : (0, p.jsx)(Ai.CopyIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            }),
                                                  }),
                                              ],
                                          })
                                        : (0, p.jsx)(u2.A, {
                                              onClick: A,
                                              children: V.intl.string(AE.default["f+F7H3"]),
                                          })),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: Ah.Rd,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Ah.Ff,
                            children: [
                                null != h &&
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: h,
                                    }),
                                null != S &&
                                    (f
                                        ? (0, p.jsxs)("div", {
                                              className: Ah.ez,
                                              children: [
                                                  (0, p.jsx)(i1.CircleErrorIcon, {
                                                      size: "xs",
                                                      color: "text-feedback-critical",
                                                  }),
                                                  (0, p.jsx)(n6.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-feedback-critical",
                                                      tag: "span",
                                                      children: S,
                                                  }),
                                              ],
                                          })
                                        : (0, p.jsx)(n6.E, {
                                              variant: "body-sm/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: S,
                                          })),
                            ],
                        }),
                        E && !T && null != s && (0, p.jsx)(Ap, { subscriptionId: s, skuId: r }),
                        E &&
                            (T
                                ? (0, p.jsx)(j.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: V.intl.string(V.t.iIvF2z),
                                      onClick: N,
                                  })
                                : (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t["ETE/oC"]),
                                      onClick: b,
                                  })),
                    ],
                }),
            ],
        });
    });
function AI(e) {
    let { servers: t } = e,
        n = (0, Aa.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, Ag.Y)(),
        l = (0, I.bG)([sS.default], () => a_.Ay.canUseShopDiscounts(sS.default.getCurrentUser())),
        s = x.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, I.yK)([um.A], () => (0, Ac.HY)(t, i, (e) => um.A.getSubscriptionById(e)), [t, i]);
    x.useEffect(() => {
        let e = r.filter((e) => !cI.A.isLoadedForSKU(e) && !cI.A.isFetchingForSKU(e));
        e.length > 0 && (0, ge.jv)(e).catch(() => {});
    }, [r]);
    let a = x.useCallback(() => {
        ((0, tH.default)(), (0, co.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(Am.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: Ah.uW,
        children: [
            (0, p.jsxs)("div", {
                className: Ah.wx,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(AE.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: Ah.h_,
                        children: [
                            (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(AE.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(u2.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(n6.E, {
                                        variant: "body-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(AE.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: Ah.p_,
                children: t.map((e) =>
                    (0, p.jsx)(Ax, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var A_ = n(55766),
    Ab = n(696986),
    AN = n(364036);
function AC(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, p.jsx)(Ab.h, { size: 4 }),
            (0, p.jsx)(n6.E, { variant: "body-md/normal", className: AN.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, p.jsx)(Ab.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: AN.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AN.RI }),
                    (0, p.jsxs)("div", {
                        className: AN.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: AN.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(n6.E, {
                                variant: "body-md/normal",
                                className: AN.h_,
                                children: V.intl.format(V.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(j.$, {
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
var Ay = n(872351),
    Av = n(9113),
    Aj = n(599941),
    AO = n(384684),
    AD = n(2242);
let AR = [];
var AL = n(885574),
    AP = n(805251),
    AG = n(912851),
    AM = n(182744);
let AU = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n8.D, {
        onClick: i ? void 0 : n,
        className: AM.x6,
        children: (0, p.jsxs)("div", {
            className: AM.hQ,
            children: [
                i
                    ? (0, p.jsx)(oB.y, { type: oB.y.Type.PULSING_ELLIPSIS, className: AM.__invalid_spinner })
                    : (0, p.jsx)(n6.E, { variant: "body-md/medium", className: AM.Pf, children: t }),
                (0, p.jsx)(mk.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: AM.UE }),
            ],
        }),
    });
};
var AV = n(465932),
    Ak = n(543767),
    Aw = n(590885),
    AF = n(790284),
    AB = n(636194),
    AX = n(624456),
    Az = n(710144),
    AH = n(815332),
    AY = n(31637),
    AW = n(557506);
function AK(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, t0.GV)(),
        { analyticsLocations: a } = (0, ez.Ay)(tk.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = x.useState(!1),
                [i, l] = x.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oD.M2(t, e), !0);
                    } catch (e) {
                        l(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a),
        c = i.role_benefits.benefits.filter((e) => e.ref_type === AD.bN.CHANNEL),
        g = i.role_benefits.benefits.filter((e) => e.ref_type === AD.bN.INTANGIBLE),
        m = iE()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = V.intl.formatToPlainString(V.t.KsMRP5, {
            numChannels: c.length,
            numAdditionalBenefits: g.length,
            subscriptionEndDate: m,
        });
    return (0, p.jsx)(lp.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: V.intl.string(V.t.EP6EPb), variant: "secondary", onClick: s },
            {
                variant: "critical-primary",
                text: V.intl.string(V.t.F6lUDF),
                onClick: async function () {
                    (await o(l.id)) && s();
                },
                loading: d,
            },
        ],
        title: V.intl.string(V.t.O6l5tM),
        subtitle: A,
        onClose: s,
        children: (0, p.jsxs)(q.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(iq.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, p.jsx)(AY.x, { listingId: i.id, guildId: n.guild_id, className: AW.P }),
            ],
        }),
    });
}
var AZ = n(319225),
    Aq = n(746080),
    AQ = n(883616);
function A$(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, p.jsxs)("div", {
        className: AQ.L0,
        children: [
            (0, p.jsxs)("div", {
                className: AQ.a5,
                children: [
                    (0, p.jsx)(N.D, { variant: "body-xs/semibold", className: AQ.HU, children: t }),
                    i &&
                        (0, p.jsx)(lA.m, {
                            text: l,
                            children: (0, p.jsx)(AL.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AQ.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", className: AQ.sx, children: n }),
        ],
    });
}
function AJ(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, Ak.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, I.yK)([oP.A], () => [oP.A.hasFetchedPaymentSources, oP.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, p.jsx)(Aw.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oB.y, {});
}
function A0(e) {
    let {
        isTrial: t,
        isCancelled: n,
        isResubscribing: i,
        shouldHideRoleSubscriptionEntryPoints: l,
        onCancelSubscriptionClick: s,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return n && (t || l)
        ? null
        : (0, p.jsx)(lc.D, {
              label: V.intl.string(V.t["4neDM+"]),
              children: (0, p.jsx)("div", {
                  className: AQ.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !l && (0, p.jsx)(AU, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(AU, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let A1 = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AX.M)(e),
                n = (0, I.bG)([AB.A], () => AB.A.getSubscriptionListingForPlan(t)),
                i = (0, I.bG)([AB.A], () =>
                    null != n ? AB.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, I.bG)([lO.A], () => lO.A.getGuild(i?.guild_id)),
                [s, r] = x.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, Aj.XE)();
            x.useEffect(() => {
                s && null != l && null == AB.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = iE()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, dl.$g)(t.price, t.currency) : "",
                              l = iE()(t.createdAt).format("M/D/YY"),
                              s = t.status === _.Dmq.CANCELED,
                              r = t.status === _.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? V.intl.string(V.t.UAfot2) : V.intl.string(V.t.CVjLcM),
                              subscriptionPrice: i,
                              isCancelled: s,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: l,
                expanded: s,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: n,
                groupListing: i,
                subscriptionInfo: o,
            };
        })(t),
        [o, u] = x.useState(!1),
        d = (0, t0.GV)(),
        { analyticsLocations: c } = (0, ez.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, AV.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    let {
            isCancelled: A,
            isPastDue: E,
            subscriptionPrice: h,
            memberSince: T,
            nextRenewalDate: f,
            nextRenewalLabel: b,
            isTrial: N,
        } = a,
        C = n.soft_deleted || null == l || m;
    return (0, p.jsxs)("div", {
        className: AQ.kL,
        children: [
            (0, p.jsx)(Az.A, {
                onClick: r,
                className: AQ.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != l && (0, p.jsx)(mE.Ay, { guild: l, active: !0, size: mE.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: AQ.if,
                                children: [
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-md/medium",
                                        className: AQ.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: AQ.xp,
                                        children: [
                                            (0, p.jsx)(n6.E, {
                                                variant: "body-sm/normal",
                                                className: AQ.KR,
                                                children: n.name,
                                            }),
                                            A
                                                ? (0, p.jsx)(AP.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : N
                                                  ? (0, p.jsx)(AP.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : E
                                                    ? (0, p.jsx)(lA.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              className: AQ.qc,
                                                              children: (0, p.jsx)(AP.E, {
                                                                  type: { text: V.intl.string(V.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, p.jsx)(lA.m, {
                                                      text: V.intl.string(V.t.nv1IqK),
                                                      children: (0, p.jsx)("div", {
                                                          className: AQ.Bi,
                                                          children: (0, p.jsx)(AP.E, {
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
                            (0, p.jsx)(n8.D, {
                                onClick: i(r),
                                "aria-label": V.intl.string(V.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, p.jsx)(mk.ChevronSmallDownIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: im()(AQ.D6, { [AQ.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, p.jsxs)("div", {
                      id: d,
                      children: [
                          (0, p.jsx)("div", { className: AQ.yF }),
                          (0, p.jsx)(AH.A, { groupListingId: i.id, subscription: t, className: AQ.kE }),
                          (0, p.jsxs)("div", {
                              className: AQ.Zx,
                              children: [
                                  (0, p.jsx)(A$, { label: b, value: f }),
                                  (0, p.jsx)(A$, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: h,
                                      showInfoIcon: N,
                                      infoIconTooltipText: N ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(A$, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, p.jsx)(Ab.h, { size: 16 }),
                          !A &&
                              !m &&
                              (0, p.jsx)(lc.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, p.jsx)(AJ, { subscription: t }),
                              }),
                          !C &&
                              (0, p.jsx)(A0, {
                                  isTrial: N,
                                  isCancelled: A,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lx.qf)((t) => (0, p.jsx)(AK, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, co.pX)(_.BVt.CHANNEL(l.id, Aq.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          AG.A.show(
                                              _.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (AF.A.setState({ subsection: eD.nR }),
                                                      (0, ng.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: async function () {
                                      try {
                                          (u(!0),
                                              await oD.QP(t, c),
                                              (0, AZ.E)({
                                                  title: V.intl.string(V.t.oPV2cy),
                                                  body: V.intl.string(V.t.DdRizV),
                                              }));
                                      } finally {
                                          u(!1);
                                      }
                                  },
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var A2 = n(661097);
let A3 = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, I.bG)([AO.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AO.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? AD.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AD.M_.NONE
                                  : AD.M_.IN_SUBSCRIPTION_SERVER;
                        })([AO.A]),
                    ) === AD.M_.SUBSCRIBED,
                n = (0, I.bG)([um.A], () => um.A.getActiveGuildSubscriptions()),
                i = x.useRef(!1);
            return (
                x.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = um.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !um.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oD.hP());
                }, [e, t]),
                n ?? AR
            );
        })(),
        { loading: i } = (0, Aj.eb)(n);
    return ((0, Av.A)(oQ.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oB.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(j.$, {
                        text: V.intl.string(V.t.hqyhKQ),
                        icon: Ay.ArrowSmallUpIcon,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, p.jsx)(Ab.h, { size: 10 }),
                    (0, p.jsx)(n5.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: A2.A,
                            children: n.map((e) => (0, p.jsx)(A1, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var A4 = n(327479),
    A5 = n(932012);
function A6(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, p.jsx)(Ab.h, { size: 4 }),
            (0, p.jsx)(n6.E, { variant: "body-md/normal", className: A5.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, p.jsx)(Ab.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: A5.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: A5._e }),
                    (0, p.jsxs)("div", {
                        className: A5.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: A5.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, p.jsx)(n6.E, {
                                variant: "body-md/normal",
                                className: A5.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(A4.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var A8 = n(548411),
    A7 = n(417098),
    A9 = n(143582),
    Ee = n(915043),
    Et = n(631466);
function En(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = x.useMemo(() => {
            let e = !1;
            return (
                x.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, p.jsxs)("div", {
        className: im()(Et.iE, t),
        children: [
            (0, p.jsx)("div", { className: im()(Et.wx, i), children: n }),
            s && (0, p.jsx)("div", { className: Et.Qs, children: l }),
        ],
    });
}
var Ei = n(885996),
    El = n(251843),
    Es = n(664121),
    Er = n(950305),
    Ea = n(943775),
    Eo = n(123791),
    Eu = n(900797),
    Ed = n(611643);
let Ec = x.createContext({ isOpen: !1, toggleOpen: () => {} });
function Eg(e) {
    let { children: t } = e,
        [n, i] = x.useReducer((e) => !e, !1),
        l = x.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(Ec.Provider, { value: l, children: t(n) });
}
Eg.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = x.useContext(Ec),
        s = i ? Eu.ChevronSmallUpIcon : mk.ChevronSmallDownIcon,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, p.jsxs)(n8.D, {
        className: im()(Ed.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(n6.E, { variant: "heading-xs/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Em = n(627363),
    EA = n(328968),
    EE = n(163437),
    Eh = n(3432);
function ES(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var ET = n(562312),
    Ef = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function Ep(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: r } = t,
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
            [cI.A, c_.A, EA.A, lO.A],
            () => {
                let e,
                    n = cI.A.get(r),
                    i = null != n ? c_.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? EA.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, EE.PJ)(o.skuFlags),
                    d = u && null != l ? lO.A.getGuild(l) : void 0,
                    c = (0, EE.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = cI.A.get(t.planId) ?? void 0;
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
            [l, r, s, t],
        ),
        { data: h } = (0, Em.YY)(a),
        S = x.useMemo(() => (null != h ? (0, Ea.A)(h, 100) : null), [h]),
        T = g?.deleted ?? !1,
        f = null != g && (0, EE.Se)(g),
        b = t.status === _.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, ez.Ay)(),
        [y] = (0, Ak.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = ES(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(En, {
        headerClassName: ET.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: ET.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(El._, { src: S.href, imageClassName: ET.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: ET.aF,
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-sm/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(n6.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? V.intl.string(V.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)("div", {
                              className: ET.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(EN, {
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
                : (0, p.jsx)(oB.y, { type: oB.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(Eb, {
                    type: "warning",
                    title: f
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(Eb, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            b && (0, p.jsx)(Eb, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: ET.zH,
                children: [
                    (0, p.jsx)(E_, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: ET.yW,
                                          children: [
                                              (0, p.jsx)(Es.ServerIcon, { size: "xs" }),
                                              V.intl.string(V.t.QjL3vn),
                                          ],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: ET._t,
                                              children: [
                                                  (0, p.jsx)(n6.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(mE.Ay, { guild: c, size: mE.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: ET.yW,
                                  children: [(0, p.jsx)(Er.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Ex, { invoicePreview: y, subscriptionPlan: o }),
                    (0, p.jsx)(E_, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: ES(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(EI, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Ey, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: T,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(EC, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Ex(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(E_, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, dl.CE)((0, dl.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(E_, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, dl.CE)((0, dl.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(E_, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(n6.E, { variant: "body-sm/semibold", children: s }),
                s !== i &&
                    (0, p.jsx)(lA.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(n6.E, {
                            variant: "body-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function EI(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dl.CE)((0, dl.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(E_, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(n6.E, { variant: "body-sm/medium", children: n }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(E_, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function E_(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: ET.nM,
        children: [
            (0, p.jsx)(n6.E, { variant: "body-sm/medium", children: t }),
            (0, p.jsx)(n6.E, { variant: "body-sm/medium", className: ET.u4, children: n }),
        ],
    });
}
function Eb(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: ET.Xm,
        children: (0, p.jsx)(iq.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function EN(e) {
    let {
            app: t,
            storeListing: i,
            sku: l,
            subscription: s,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, EE.Se)(l),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = x.useState(!1),
        E = (0, Eo.C)(t.id),
        h = (0, I.bG)([c_.A], () => c_.A.getParentSKU(i.skuId), [i.skuId]),
        S = x.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        T = 0 !== S.length;
    return (0, p.jsxs)("div", {
        className: ET.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.QtMnkW),
                        onClick: async function () {
                            try {
                                A(!0);
                                let { subscription: e } = await (0, oD.QP)(s, g);
                                if (null == e) return;
                                (0, lx.mM)(async () => {
                                    let { default: t } = await Promise.all([n.e(888454), n.e(52396)]).then(
                                        n.bind(n, 115623),
                                    );
                                    return (n) =>
                                        (0, p.jsx)(t, {
                                            ...n,
                                            storeListing: i,
                                            subscription: uL.A.createFromServer(e),
                                        });
                                });
                            } finally {
                                A(!1);
                            }
                        },
                        loading: m,
                    })
                  : (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t["E8G/tr"]),
                        onClick: function () {
                            (0, lx.mM)(async () => {
                                let { default: e } = await Promise.all([n.e(509032), n.e(299523)]).then(
                                    n.bind(n, 548750),
                                );
                                return (n) =>
                                    (0, p.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            T &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: S,
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
function EC(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(Eg, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: ET.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: ET.wV,
                        children: [
                            e && (0, p.jsx)(n6.E, { variant: "body-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, p.jsx)(Eg.Toggle, {
                                className: ET.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, p.jsx)(Ei.F, { header: i, icon: (0, Eh.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Ey(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: ET.Ji,
                children: (0, p.jsx)(lc.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, p.jsx)(oB.y, { type: oB.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: ET.Ji,
                  children: (0, p.jsxs)(A7.$T, {
                      color: A7.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: ET.Ji,
                  children: (0, p.jsx)(lc.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, p.jsx)(Aw.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Ev = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    Ej = n(856383);
let EO = (0, I.UT)(cI.A, {
    getQueryId: _.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cI.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && Ej.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, ge.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var ED = n(240248),
    ER = n(237218),
    EL = n(763064);
function EP(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: EL.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(n6.E, {
                    className: EL.B0,
                    variant: "body-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(Eu.ChevronSmallUpIcon, { color: n3.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(mk.ChevronSmallDownIcon, { color: n3.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = x.useState(null),
        c = x.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    x.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(n6.E, {
                    ...i,
                    className: EL.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var EG = n(920352);
function EM(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = x.useMemo(() => (null == n.thumbnail ? null : (0, ER.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = EO(n.skuId),
        u = x.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, a_._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(En, {
              className: im()(EG.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: EG.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(El._, { src: a.href, imageClassName: EG.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(N.D, { variant: "heading-sm/semibold", children: n.summary }),
                                      (0, p.jsx)(n6.E, { variant: "body-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, ED.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: EG.h_,
                          children: (0, p.jsx)(EP, { variant: "body-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: EG.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, p.jsx)(Ei.F, { header: n, icon: (0, Eh.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var EU = n(185438),
    EV = n(683380);
function Ek(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Ea.A)(t, 100),
        u = (0, EE.PJ)(r.flags),
        d = u ? Es.ServerIcon : Er.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, I.bG)([lO.A], () => (u && null != g ? lO.A.getGuild(g) : void 0), [g, u]),
        A = (0, I.bG)(
            [c_.A],
            () => {
                if (null != a) return c_.A.get(a);
            },
            [a],
        ),
        E = ES(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: EV.wx,
                children: [
                    null != o && (0, p.jsx)(El._, { src: o.href, imageClassName: EV.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: EV.p4,
                                children: [
                                    (0, p.jsxs)(N.D, {
                                        variant: "heading-sm/medium",
                                        className: EV.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n6.E, { variant: "body-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: EV.vP,
                                                    children: [
                                                        (0, p.jsx)(mE.Ay, { guild: m, size: mE.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(N.D, {
                                                            variant: "heading-sm/semibold",
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
            (0, p.jsx)(Eg, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: EV._B,
                        children: [
                            (0, p.jsx)(n6.E, { variant: "body-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(n6.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(n6.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(Eg.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: EV.x0,
                children: [
                    (0, p.jsx)(EM, {
                        storeListing: i,
                        className: EV.o3,
                        cta: (0, p.jsxs)("div", {
                            className: EV.cJ,
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  EM,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(n6.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(Ew, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function Ew(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, EU.A)({
            analyticsLocation: _.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(EM, {
        storeListing: t,
        cta: (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class EF extends x.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(A7.$T, {
                  color: A7.Hv.DANGER,
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
function EB(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = x.useState({ route: Ev.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Ev.HOME });
    }
    let a = (e) => {
            (l({ route: Ev.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = x.useState({});
    x.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Ef.LOADING })),
                (0, A9._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Ef.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Ef.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Ee.E)(),
        c = d !== Ee.mJ.LOADED;
    switch (s) {
        case Ev.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        EF,
                        {
                            subscription: e,
                            children: (0, p.jsx)(Ep, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Ef.LOADING : (o[e.id] ?? Ef.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Ev.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(Ek, { ...m, navigateToHome: r });
        default:
            (0, id.xb)(s);
    }
}
var EX = n(707989);
function Ez(e) {
    let { onGoBack: t } = e,
        n = (0, I.yK)(
            [um.A],
            () =>
                um.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = x.useState();
    return (
        null == i && (i = (0, p.jsx)(EH, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: EX.A,
                    children: (0, p.jsx)(EB, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, p.jsx)(EH, {
                                    title: e,
                                    onBack: () => {
                                        (t(), l(void 0));
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
function EH(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: EX.D,
        children: [
            (0, p.jsx)(lg.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, p.jsx)(A8.ArrowLargeLeftIcon, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
let EY = (0, oG.mj)({
    kind: "user",
    name: "2026-11-subscription-management-settings-brand-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var EW = n(366999),
    EK = n(391659);
function EZ(e) {
    let t,
        n,
        {
            showChargingUpState: i,
            rowValueText: l,
            endsAt: s,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = V.intl.string(gY.default["/S02sx"])), (n = V.intl.string(gY.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === t3.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = im()({ [EK.Hs]: i, [EK.mT]: !i }),
        d = im()({ [EK.CQ]: i, [EK.ZM]: !i }),
        c = im()({ [EK.EM]: !i });
    return (0, p.jsxs)("div", {
        className: EK.r6,
        children: [
            (0, p.jsxs)("div", {
                className: EK.Nv,
                children: [
                    (0, p.jsx)(N.D, { variant: "heading-sm/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(n6.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: EK.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(n6.E, { variant: "body-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let Eq = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, a_.kX)(t),
        r = s.length > 0,
        a = (0, EW.Ay)(t.endsAt, EW.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: im()(n, EK.f8),
            children: [
                (0, p.jsx)("div", {
                    className: EK.J_,
                    children: (0, p.jsxs)("div", {
                        className: EK.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: EK.xt,
                                children: (0, p.jsx)(ac.NitroWheelIcon, {
                                    size: "md",
                                    color: "white",
                                    className: EK.T8,
                                }),
                            }),
                            (0, p.jsx)("div", {
                                className: EK.pt,
                                children: (0, p.jsx)(N.D, {
                                    variant: "heading-sm/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(n6.E, {
                                className: EK.PJ,
                                variant: "body-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(EZ, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                    hasPremiumGroup: l,
                }),
            ],
        }),
    });
};
var EQ = n(447732),
    E$ = n(803306),
    EJ = n(358787),
    E0 = n(50302);
function E1(e) {
    let {
            user: t,
            planId: n,
            count: i,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: s = [],
            hasPremiumGroup: r,
            holdsNextCredit: a,
            gifterId: o,
        } = e,
        [u, d] = (0, I.yK)([cI.A], () => [cI.A.get(n), null != l ? cI.A.get(l.planId) : null]),
        c = (0, I.bG)([sS.default], () => (null != o ? sS.default.getUser(o) : null)),
        g = (0, dn.xG)(c, { decoration: "auto" });
    if (null == u || a_.Ay.getInterval(n).intervalType !== t3.WT.MONTH) return null;
    let m = null != d ? d.skuId : null,
        A = u.skuId === m,
        E = (0, a_.z4)(n),
        h = a_.Ay.getDisplayName(n),
        S = null;
    if (r) S = V.intl.string(gY.default["5asczk"]);
    else if (A && null != l) {
        if (a) {
            let e;
            e = new Date(l.status === _.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
            let t = (0, a_._e)(e, s);
            S = V.intl.formatToPlainString(V.t["5CNRRA"], { date: t ?? 0 });
        }
    } else S = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: h });
    let T = E || t.hasFreePremium() || (null != l && l.isPurchasedExternally) ? null : S;
    return (
        null != c &&
            (T =
                null != T
                    ? V.intl.formatToPlainString(E0.default.SDm5sW, { username: g, detail: T })
                    : V.intl.formatToPlainString(E0.default.Dvld9i, { username: g })),
        (0, p.jsxs)("div", {
            className: EK.Bh,
            children: [
                (0, p.jsx)("div", {
                    className: im()({
                        [EK.bY]: E,
                        [EK.sr]: u.skuId === t3.pe.TIER_0,
                        [EK.lP]: u.skuId === t3.pe.TIER_1,
                        [EK.eb]: u.skuId === t3.pe.TIER_2,
                    }),
                    children: E
                        ? (0, p.jsx)(g8.BoostGemIcon, { size: "md", color: "currentColor", className: EK.Kk })
                        : (0, p.jsx)(ac.NitroWheelIcon, { size: "md", color: "currentColor", className: EK.Kk }),
                }),
                (0, p.jsxs)("div", {
                    className: EK.pt,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-sm/semibold",
                            children:
                                null != o
                                    ? V.intl.string(E0.default.ydxNPG)
                                    : V.intl.format(V.t.LzobT9, { planName: h }),
                        }),
                        null != T &&
                            (0, p.jsx)(N.D, {
                                className: EK.gj,
                                variant: "heading-xs/semibold",
                                color: "text-default",
                                children: T,
                            }),
                    ],
                }),
                (0, p.jsx)(n6.E, {
                    className: EK.PJ,
                    variant: "body-md/semibold",
                    children: V.intl.format(V.t["ess/xl"], { count: i }),
                }),
            ],
        })
    );
}
let E2 = function (e) {
    let t,
        n,
        i,
        { className: l, entitlements: s } = e,
        r =
            ((t = x.useMemo(
                () =>
                    (function (e) {
                        let t = {},
                            n = new Map();
                        for (let i of e) {
                            let { subscriptionPlanId: e, parentId: l, consumed: s, gifterId: r, sourceType: a } = i;
                            if (null != e && null != l && !0 !== s)
                                if (null != r && a === EQ.G.GIFT_SUBSCRIPTION_GRANT) {
                                    let t = `${r}:${e}`,
                                        l = n.get(t);
                                    null == l
                                        ? n.set(t, { key: t, gifterId: r, planId: e, entitlements: [i] })
                                        : l.entitlements.push(i);
                                } else (t[e] ??= []).push(i);
                        }
                        let i = Array.from(n.values());
                        for (let e of i) e.entitlements.sort((e, t) => oV.default.compare(e.id, t.id));
                        return (
                            i.sort((e, t) => oV.default.compare(e.entitlements[0].id, t.entitlements[0].id)),
                            { planCredits: t, giftedSubscriptionCredits: i }
                        );
                    })(s),
                [s],
            )),
            (n = x.useMemo(
                () =>
                    K().uniq(
                        t.giftedSubscriptionCredits.map((e) => {
                            let { gifterId: t } = e;
                            return t;
                        }),
                    ),
                [t],
            )),
            (i = x.useRef(new Set())),
            x.useEffect(() => {
                for (let e of n)
                    i.current.has(e) ||
                        (i.current.add(e),
                        (async function (e) {
                            try {
                                await (0, E$.wz)(e);
                            } catch {}
                        })(e));
            }, [n]),
            t),
        { planCredits: a, giftedSubscriptionCredits: o } = r,
        u = (0, I.yK)([cu.A], () => cu.A.getUnactivatedFractionalPremiumUnits()),
        d = (0, I.bG)([um.A], () => um.A.getPremiumSubscription()),
        c = (0, I.bG)([cI.A], () => (null != d ? cI.A.get(d.planId) : null)),
        g = x.useMemo(
            () =>
                null != c
                    ? (function (e, t) {
                          let { planCredits: n, giftedSubscriptionCredits: i } = e,
                              l = new Date(),
                              s = [
                                  ...Object.values(n).flat(),
                                  ...i.flatMap((e) => {
                                      let { entitlements: t } = e;
                                      return t;
                                  }),
                              ]
                                  .filter((e) =>
                                      (function (e, t) {
                                          let { startsAt: n, endsAt: i } = e;
                                          return (null == n || n <= t) && (null == i || i >= t);
                                      })(e, l),
                                  )
                                  .sort((e, t) => oV.default.compare(e.id, t.id)),
                              r = new Set(),
                              a = new Map();
                          for (let { id: e, skuId: n } of s) {
                              let i = a.get(n) ?? 0;
                              i < t && (r.add(e), a.set(n, i + 1));
                          }
                          return r;
                      })(r, a_.Ay.getIntervalMonths(c.interval, c.intervalCount))
                    : new Set(),
            [r, c],
        ),
        m = (0, I.bG)([um.A], () => null == um.A.getPremiumTypeSubscription()),
        A =
            null != a[t3.gD.PREMIUM_MONTH_TIER_1] ||
            o.some((e) => {
                let { planId: t } = e;
                return t === t3.gD.PREMIUM_MONTH_TIER_1;
            }),
        E = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
    if (null == E) return null;
    let h = E.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: im()(l, EK.xF, EK.J_),
                children: [
                    Object.keys(a).map((e) =>
                        (0, p.jsx)(
                            E1,
                            {
                                planId: e,
                                count: a[e].length,
                                userPremiumSubscription: d,
                                user: E,
                                unconsumedFractionalPremiumUnits: u,
                                hasPremiumGroup: h,
                                holdsNextCredit: a[e].some((e) => {
                                    let { id: t } = e;
                                    return g.has(t);
                                }),
                            },
                            e,
                        ),
                    ),
                    o.map((e) => {
                        let { key: t, planId: n, gifterId: i, entitlements: l } = e;
                        return (0, p.jsx)(
                            E1,
                            {
                                planId: n,
                                count: l.length,
                                userPremiumSubscription: d,
                                user: E,
                                unconsumedFractionalPremiumUnits: u,
                                hasPremiumGroup: h,
                                holdsNextCredit: l.some((e) => {
                                    let { id: t } = e;
                                    return g.has(t);
                                }),
                                gifterId: i,
                            },
                            t,
                        );
                    }),
                ],
            }),
            A &&
                m &&
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(n6.E, {
                            className: EK.eT,
                            variant: "body-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(EJ.iE, {}),
                    ],
                }),
        ],
    });
};
var E3 = n(902782);
function E4(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        [s] = (0, Ak.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? E3.r : E3.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, a_.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cI.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, dl.$g)(s.total, s.currency);
    return (
        u.interval === t3.WT.YEAR
            ? (t = V.intl.format(V.t["jPz/39"], {
                  price: d,
                  termsUrl: _.X7G.TERMS,
                  paidURL: _.X7G.PAID_TERMS,
                  privacyUrl: _.X7G.PRIVACY,
              }))
            : u.interval === t3.WT.MONTH &&
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
        (0, p.jsx)(n6.E, { color: "text-muted", className: r, variant: "body-xs/normal", children: t })
    );
}
function E5(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(E4, { subscription: t, withOverheadSeparator: n });
}
var E6 = n(488110),
    E8 = n(689255);
let E7 = { [eD.nR]: "role_subscriptions_panel", [eD.PZ]: "application_subscriptions_panel" };
function E9() {
    return (0, p.jsx)(o$.Z, {
        className: E8.wb,
        type: o$.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lC.A, {
            align: lC.A.Align.CENTER,
            children: [
                (0, p.jsx)(le.A, { game: null, size: le.M.SMALL, className: E8.pV }),
                (0, p.jsx)("span", { className: E8.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function he(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ae._)(e, t));
}
function ht() {
    let e = (0, I.bG)([cu.A], () => cu.A.getForApplication(t3.tv), [], he);
    return (
        x.useEffect(() => {
            (0, cX.LM)(t3.tv);
        }, []),
        (0, p.jsx)(n5.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && a_.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(E2, { className: E8.fX, entitlements: e })
                    : (0, p.jsx)(E9, {}),
        })
    );
}
function hn() {
    return (0, p.jsx)("hr", { className: E8.hr });
}
let hi = function () {
        var e;
        let { enabled: t } = EY.useConfig({ location: "subscription_management_settings" }),
            n = (0, I.bG)([um.A], () => um.A.getPremiumTypeSubscription()),
            i = (0, At.A)({ subscriptionFilter: (e) => E6.Hy.has(e.status) }),
            l = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
            s = i.length > 1,
            r = (0, I.bG)(
                [oP.A],
                () => (null != n && null != n.paymentSourceId ? oP.A.getPaymentSource(n.paymentSourceId) : null),
                [n],
            ),
            a = (0, I.bG)([um.A], () => um.A.hasFetchedSubscriptions()),
            o = (0, I.bG)([oL.A], () => oL.A.isBusy),
            u = (0, gn.Y)(),
            d = AF.A.useField("subsection"),
            c = AF.A.useField("scrollToGameServers"),
            g = x.useRef(null);
        x.useEffect(() => {
            (0, il._)(null != d ? E7[d] : S.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let m = (0, I.bG)([um.A], () => um.A.getActiveApplicationSubscriptions()?.length ?? 0),
            A = (0, I.bG)(
                [um.A],
                () =>
                    Object.values(um.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === _.rzx.GUILD)
                        .filter((e) => e.status !== _.Dmq.ENDED).length,
            ),
            E = (0, I.bG)([um.A], () =>
                Object.values(um.A.getSubscriptions() ?? {}).some((e) => e.type === _.rzx.GAME_SERVER),
            ),
            { servers: h } = (0, A_.f)({ enabled: E }),
            T = (0, I.yK)([um.A], () => (0, Ac.eP)(h, (e) => um.A.getSubscriptionById(e)), [h]),
            f = (0, gt.A)({ forceFetch: !0 }),
            b = (0, gr.ds)(),
            C = null !== n ? n.currentPeriodEnd : void 0,
            y =
                !(b && !(f.unactivatedUnits.length > 0)) &&
                (f.fractionalState !== t3.xc.NONE || f.unactivatedUnits.length > 0);
        return (x.useEffect(() => {
            c &&
                a &&
                u &&
                T.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                AF.A.setState({ scrollToGameServers: !1 }));
        }, [c, a, u, T.length]),
        x.useEffect(
            () => (
                (0, ge.zS)(),
                oD.hP(),
                (0, g7.CD)(),
                oD.$o(),
                function () {
                    AF.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(of.A, {})
            : a && u
              ? d === eD.nR
                  ? (0, p.jsx)(A3, { onGoBack: () => AF.A.setState({ subsection: null }) })
                  : d === eD.PZ
                    ? (0, p.jsx)(Ez, { onGoBack: () => AF.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: E8.kL,
                          children: (0, p.jsxs)("div", {
                              className: E8.Qs,
                              children: [
                                  t
                                      ? null
                                      : (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                s ? (0, p.jsx)(E6.Sb, {}) : null,
                                                null != n
                                                    ? (0, p.jsx)(E6.Ay, {
                                                          subscription: n,
                                                          paymentSource: r,
                                                          busy: o,
                                                          subscriptions: i,
                                                      })
                                                    : (0, p.jsx)(E6.TC, {}),
                                                y &&
                                                    ((e = !!l?.isPremiumWithPremiumGroup()),
                                                    (0, p.jsxs)("section", {
                                                        children: [
                                                            (0, p.jsx)(N.D, {
                                                                variant: "heading-sm/semibold",
                                                                className: E8.HL,
                                                                children: V.intl.string(V.t.Obre8v),
                                                            }),
                                                            (0, p.jsx)(n6.E, {
                                                                variant: "body-md/normal",
                                                                className: E8.JU,
                                                                children: V.intl.format(V.t["7Zi06b"], {
                                                                    helpCenterLink: eC.A.getArticleURL(
                                                                        _.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                                    ),
                                                                }),
                                                            }),
                                                            (0, p.jsx)(Eq, {
                                                                className: E8.fX,
                                                                fractionalPremiumInfo: f,
                                                                activationDate: C,
                                                                hasPremiumGroup: e,
                                                            }),
                                                        ],
                                                    })),
                                                (0, p.jsx)(ht, {}),
                                            ],
                                        }),
                                  A > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hn, {}),
                                              (0, p.jsx)(AC, {
                                                  count: A,
                                                  onClickManageSubscription: () => AF.A.setState({ subsection: eD.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hn, {}),
                                              (0, p.jsx)(A6, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (AF.A.setState({ subsection: eD.PZ }),
                                                          td.default.track(
                                                              _.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  T.length > 0 &&
                                      (0, p.jsxs)("div", {
                                          ref: g,
                                          children: [(0, p.jsx)(hn, {}), (0, p.jsx)(AI, { servers: T })],
                                      }),
                                  (0, p.jsx)(hn, {}),
                                  null != n ? (0, p.jsx)(E5, { subscription: n, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: im()(E8.kL, E8.Lq), children: (0, p.jsx)(oB.y, {}) });
    },
    hl = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, p.jsx)(hi, {}),
    }),
    hs = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [hl],
    }),
    hr = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [hs] }),
    ha = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: m7.SubscriptionIcon,
        usePersistentBadge: function () {
            let e = (0, m9.l)();
            return x.useMemo(
                () => ({
                    badgeType: f.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e
                        ? (0, p.jsx)(i1.CircleErrorIcon, { size: "xs", color: n3.A.unsafe_rawColors.YELLOW_300 })
                        : null,
                }),
                [e],
            );
        },
        buildLayout: () => [hr],
    }),
    ho = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [g6, m8, ha, c4, dL],
    });
var hu = n(540999),
    hd = n(663417),
    hc = n(148810),
    hg = n(521502),
    hm = n(380610),
    hA = n(390486),
    hE = n(611677),
    hh = n(103557),
    hS = n(986238);
class hT extends x.Component {
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
        e.key === lF.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hc.SB)(e);
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
        var e;
        return "discord_ios" in (e = this.props.buildOverrides ?? {}) || "discord_android" in e;
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: l,
                allowedVersionEntry: s,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = hS.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, p.jsx)(ld.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hS.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(ld.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hS.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lI.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: iK.PlusSmallIcon,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, p.jsx)(ld.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, p.jsx)(hh.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(hh.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, p.jsx)(ne.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, p.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, p.jsx)(iq.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, p.jsx)(lp.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(cL.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
var hf = n(428524);
let hp = [
        { id: "discord_web", value: "discord_web", label: "Discord web / desktop" },
        { id: "discord_marketing", value: "discord_marketing", label: "Marketing website" },
        { id: "discord_developers", value: "discord_developers", label: "Developer portal" },
        { id: "discord_ios", value: "discord_ios", label: "Discord iOS" },
        { id: "discord_android", value: "discord_android", label: "Discord Android" },
    ],
    hx = [
        { id: "branch", value: "branch", label: "Branch name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ],
    hI = { type: "branch", id: "" },
    h_ = (0, h.E2)(S.X.BUILD_OVERRIDES, {
        useSearchTerms: () => ["build override", "build overrides", "branch", "commit"],
        Component: function () {
            let e = (0, I.bG)([hg.A], () =>
                    (0, hm.kK)() ? hg.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                [t] = x.useState(hA.HP),
                [n, i] = x.useState(),
                [l, s] = x.useState("discord_web"),
                [r, a] = x.useState(hI),
                [o, u] = x.useState(!1),
                [d, c] = x.useState(!1),
                [g, m] = x.useState(),
                [A, E] = x.useState(!1),
                h = void 0 === n,
                S = d || o || h,
                T = n?.[l],
                f = r.id.trim(),
                _ = null != T ? r.id !== T.id || r.type !== T.type : "" !== r.id,
                b = "discord_ios" === l || "discord_android" === l,
                C = b ? ("" !== f ? { ...r, id: f } : null) : _ ? null : T;
            async function y() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null != n) {
                    (u(!0), m(void 0), E(!1));
                    try {
                        let t = { ...n };
                        e ? delete t[l] : (t[l] = { ...r, id: f });
                        let s = await (0, hc.Zk)(t);
                        if (200 !== s.status)
                            return void m(
                                400 === s.status
                                    ? String(s.body[l] ?? "Unable to save this override.")
                                    : "Unable to save this override. Try again.",
                            );
                        (i(t), a(t[l] ?? hI), E(!0));
                    } catch {
                        m("Unable to save this override. Try again.");
                    } finally {
                        u(!1);
                    }
                }
            }
            async function v(e) {
                c(!0);
                try {
                    (await e()) && window.location.reload(!0);
                } finally {
                    c(!1);
                }
            }
            return (
                x.useEffect(() => {
                    let e = !1;
                    return (
                        !(async function () {
                            let t = await (0, hm.bD)();
                            e || (i(t ?? null), null != t && a(t.discord_web ?? hI));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, []),
                (0, p.jsxs)(q.B, {
                    gap: 32,
                    children: [
                        (0, p.jsx)("section", {
                            children: (0, p.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: "Current build" }),
                                    (0, p.jsxs)("div", {
                                        className: hf.n,
                                        children: [
                                            (0, p.jsxs)(q.B, {
                                                gap: 4,
                                                children: [
                                                    (0, p.jsx)(n6.E, {
                                                        variant: "body-md/medium",
                                                        children: null != e ? e.id : "Default build",
                                                    }),
                                                    (0, p.jsx)(n6.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            null != e
                                                                ? "Discord web / desktop \xb7 Override active"
                                                                : "You\u2019re using the regular release. No web build override is active.",
                                                    }),
                                                ],
                                            }),
                                            null != e &&
                                                (0, p.jsx)(j.$, {
                                                    variant: "critical-secondary",
                                                    text: "Clear override",
                                                    disabled: S || _,
                                                    onClick: () => v(async () => (await (0, hc.iD)()).ok),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, p.jsx)(hE.l, {
                            onSubmit: (e) => {
                                (e.preventDefault(), y());
                            },
                            children: (0, p.jsxs)(n5.n, {
                                label: "Manual override",
                                description:
                                    "Choose a project and a branch or commit. Other project overrides are kept when you save.",
                                children: [
                                    (0, p.jsx)(ld.l, {
                                        selectionMode: "single",
                                        label: "Project",
                                        options: hp,
                                        value: l,
                                        onSelectionChange: function (e) {
                                            (s(e), a(n?.[e] ?? hI), m(void 0), E(!1));
                                        },
                                        disabled: S || _,
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: hf.O,
                                        children: [
                                            (0, p.jsx)(ld.l, {
                                                selectionMode: "single",
                                                label: "Target type",
                                                options: hx,
                                                value: r.type,
                                                onSelectionChange: (e) => {
                                                    (a({ type: e, id: "" }), E(!1));
                                                },
                                                disabled: S,
                                            }),
                                            (0, p.jsx)(lI.k, {
                                                label: "branch" === r.type ? "Branch name" : "Commit SHA",
                                                value: r.id,
                                                onChange: (e) => {
                                                    (a({ ...r, id: e }), E(!1));
                                                },
                                                placeholder:
                                                    "branch" === r.type ? "team/feature-name" : "Full commit SHA",
                                                disabled: S,
                                                error: g,
                                            }),
                                        ],
                                    }),
                                    h && (0, p.jsx)(oB.y, {}),
                                    null === n &&
                                        (0, p.jsx)(iq.w, {
                                            role: "alert",
                                            type: "critical",
                                            message:
                                                "Unable to load overrides, so saving is off. Try opening this page again.",
                                        }),
                                    b &&
                                        (0, p.jsx)(iq.w, {
                                            role: "status",
                                            type: "info",
                                            message:
                                                "Use a public link to apply mobile builds. Create one below, then open it on the matching device.",
                                        }),
                                    b &&
                                        "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL &&
                                        (0, p.jsx)(iq.w, {
                                            role: "status",
                                            type: "warning",
                                            message:
                                                "Generate mobile build override links from the stable web or desktop client.",
                                        }),
                                    A &&
                                        (0, p.jsx)(iq.w, {
                                            role: "status",
                                            type: "info",
                                            message: "Saved. Reload the app to run the selected build.",
                                        }),
                                    (0, p.jsxs)(s6.e, {
                                        justify: "start",
                                        children: [
                                            (0, p.jsx)(j.$, {
                                                type: "submit",
                                                text: "Save override",
                                                disabled: S || null == n || "" === f || b,
                                                loading: o,
                                            }),
                                            _ &&
                                                (0, p.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: "Discard changes",
                                                    disabled: S,
                                                    onClick: () => {
                                                        (a(T ?? hI), m(void 0));
                                                    },
                                                }),
                                            null != T &&
                                                !b &&
                                                (0, p.jsx)(j.$, {
                                                    variant: "critical-secondary",
                                                    text: "Remove target",
                                                    onClick: () => y(!0),
                                                    disabled: S,
                                                }),
                                            A &&
                                                (0, p.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: "Reload app",
                                                    onClick: () => window.location.reload(),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, p.jsx)("section", {
                            children: (0, p.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, p.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, p.jsx)(N.D, {
                                                variant: "heading-md/semibold",
                                                children: "Recent builds",
                                            }),
                                            (0, p.jsx)(n6.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children: "Return to a web build you used on this device.",
                                            }),
                                        ],
                                    }),
                                    0 === t.length
                                        ? (0, p.jsx)(n6.E, {
                                              variant: "body-md/normal",
                                              color: "text-subtle",
                                              children:
                                                  "Your recent builds will appear here after you apply an override.",
                                          })
                                        : t.map((t) =>
                                              (0, p.jsxs)(
                                                  "div",
                                                  {
                                                      className: hf.n,
                                                      children: [
                                                          (0, p.jsxs)(q.B, {
                                                              gap: 4,
                                                              children: [
                                                                  (0, p.jsx)(n6.E, {
                                                                      variant: "body-md/medium",
                                                                      children: t.id,
                                                                  }),
                                                                  (0, p.jsx)(n6.E, {
                                                                      variant: "body-sm/normal",
                                                                      color: "text-subtle",
                                                                      children: "id" === t.type ? "Commit" : "Branch",
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, p.jsx)(j.$, {
                                                              variant: "secondary",
                                                              size: "sm",
                                                              text: t.id === e?.id ? "Active" : "Reapply",
                                                              disabled: S || _ || t.id === e?.id,
                                                              onClick: () => v(() => (0, hA.mk)(t)),
                                                          }),
                                                      ],
                                                  },
                                                  t.id,
                                              ),
                                          ),
                                ],
                            }),
                        }),
                        (0, p.jsx)("section", {
                            children: (0, p.jsxs)(q.B, {
                                gap: 12,
                                children: [
                                    (0, p.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, p.jsx)(N.D, {
                                                variant: "heading-md/semibold",
                                                children: "Share an override",
                                            }),
                                            (0, p.jsx)(n6.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children:
                                                    "Create a public link for the selected project. Choose who can use it and when it expires.",
                                            }),
                                        ],
                                    }),
                                    (0, p.jsx)(s6.e, {
                                        justify: "start",
                                        children: (0, p.jsx)(j.$, {
                                            variant: "secondary",
                                            text: "Generate public link",
                                            disabled: S || null == C,
                                            onClick: function () {
                                                null != C &&
                                                    (0, lx.qf)((e) =>
                                                        (0, p.jsx)(hT, { ...e, buildOverrides: { [l]: C } }),
                                                    );
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                })
            );
        },
    }),
    hb = (0, h.zZ)(S.X.BUILD_OVERRIDES_CATEGORY, {
        useTitle: () => "Build Overrides",
        useSubtitle: () => "Choose the build this client runs, or share an override with someone else.",
        buildLayout: () => [h_],
    }),
    hN = (0, h.t_)(S.X.BUILD_OVERRIDES_PANEL, { useTitle: () => "Build Overrides", buildLayout: () => [hb] }),
    hC = (0, h.i4)(S.X.BUILD_OVERRIDES_SIDEBAR_ITEM, {
        useTitle: () => "Build Overrides",
        icon: hd.RefreshIcon,
        useMenu: function () {
            let e = (0, I.bG)([hg.A], () =>
                    (0, hm.kK)() ? hg.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                t = (0, I.bG)([hu.A], () => hu.A.isDeveloper),
                [n] = x.useState(hA.HP),
                [i, l] = x.useState(!1),
                s = x.useMemo(
                    () => (null == e || n.some((t) => t.id === e.id) ? n : [{ id: e.id, type: e.type }, ...n]),
                    [e, n],
                );
            if (!t) return null;
            async function r(e) {
                if (!i)
                    try {
                        (l(!0), (await e()) && window.location.reload(!0));
                    } finally {
                        l(!1);
                    }
            }
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    s.length > 0 &&
                        (0, p.jsx)(ti.rX, {
                            children: s.map((t) =>
                                (0, p.jsx)(
                                    ti.iD,
                                    {
                                        id: `build-override-${t.id.replaceAll("--", "__")}`,
                                        label: t.id,
                                        subtext: t.id === e?.id ? "Active" : void 0,
                                        group: "build-overrides",
                                        checked: t.id === e?.id,
                                        disabled: i,
                                        action: () =>
                                            (function (t) {
                                                if (t.id !== e?.id) return r(() => (0, hA.mk)(t));
                                            })(t),
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                    (0, p.jsx)(ti.rX, {
                        children: (0, p.jsx)(ti.Dr, {
                            id: "clear-build-override",
                            label: V.intl.string(V.t["/Nz9rY"]),
                            disabled: i || null == e,
                            action: function () {
                                if (null != e) return r(async () => (await (0, hc.iD)()).ok);
                            },
                        }),
                    }),
                ],
            });
        },
        buildLayout: () => [hN],
    });
var hy = n(306471),
    hv = n(964355),
    hj = n(172272);
let hO = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isAxeEnabled),
        setValue: (e) => (0, rc.x)({ axeEnabled: e }),
    }),
    hD = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hR = n(276086),
    hL = n(354328);
let hP = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hL.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hR.L)("highlight_mana_components", e);
        },
    }),
    hG = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, hL.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, hR.L)("highlight_mana_text_overrides", e);
        },
    }),
    hM = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, hL.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, hR.L)("highlight_mana_text", e);
        },
    }),
    hU = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hL.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hR.L)("highlight_void_toggleables", e);
        },
    }),
    hV = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, I.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hj.O.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hj.O.getState().setHorizontalSpacing(e);
        },
    }),
    hk = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rc.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hw = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, I.bG)([rg.default], () => rg.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hj.O.getState().verticalSpacing,
        asValueChanges: (e) => {
            hj.O.getState().setVerticalSpacing(e);
        },
    }),
    hF = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hD, hk, hV, hw, hP, hM, hG, hU, hO],
    });
var hB = n(246605),
    hX = n(274184);
function hz(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = x.useState(l ?? ""),
        u = x.useRef(null),
        [d, c] = x.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        x.useEffect(() => g, []),
        (0, p.jsx)(lc.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, p.jsx)(lI.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            (c(0), s(null));
                            return;
                        }
                        u.current = setTimeout(() => {
                            (c(1),
                                r(e).then((t) => {
                                    (c(null == t ? 2 : 3), null != t && s(e));
                                }));
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let hH = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, I.bG)([hX.Ay], () => hX.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(hz, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hB.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    hY = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var hW = n(256311),
    hK = n(883600);
let hZ = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, I.bG)([hK.A], () => hK.A.overrideId());
        return (0, p.jsx)(hz, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hW.A.setChangelogOverride(e),
            fetchOverride: async function (e) {
                let t = hK.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hW.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            },
        });
    },
});
var hq = n(506774);
let hQ = new Date("2018-01-01"),
    h$ = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oV.default.fromTimestamp(hQ.getTime()),
        onClick: () => (hq.w.set("lastChangeLogDate", hQ), U.pK.updateSetting(oV.default.fromTimestamp(hQ.getTime()))),
    }),
    hJ = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, I.bG)([rg.default], () => rg.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, I.bG)(
                [rg.default],
                () => rg.default.disableAppCollectionsCache || rg.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rc.x)({ disableAppCollectionsCache: e }),
    }),
    h0 = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isForcedCanary),
        setValue: (e) => {
            (0, rc.x)({ canary: e });
        },
    }),
    h1 = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.sourceMapsEnabled),
        setValue: (e) => (0, rc.x)({ sourceMapsEnabled: e }),
    }),
    h2 = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rc.x)({ onlyShowPreviewAppCollections: e }),
    });
var h3 = n(10094),
    h4 = n(683760);
let h5 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t3.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t3.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t3.PremiumTypes.TIER_2 },
    ],
    h6 = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => h5,
        clearable: !0,
        useValue: () =>
            (0, I.bG)([h4.A], () => {
                let e = h4.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, h3.O)(null, void 0)
                : null === e
                  ? (0, h3.O)(void 0, void 0)
                  : (0, h3.O)(0 === e ? null : e, void 0);
        },
    });
var h8 = n(374042);
let h7 = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, I.bG)([hX.Ay], () => hX.Ay.getSurveyOverride());
            return (0, p.jsx)(hz, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hB.xr(e),
                fetchOverride: (e) => (0, h8.B)(e, !0) ?? null,
            });
        },
    }),
    h9 = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [h6, h7, hH, hZ, h$, h0, hY, h2, hJ, h1],
    }),
    Se = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rc.x)({ logAnalyticsEvents: e }),
    }),
    St = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rc.x)({ logGatewayEvents: e }),
    }),
    Sn = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.preventPopoutClose),
        setValue: (e) => (0, rc.x)({ preventPopoutClose: e }),
    }),
    Si = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.logKeyboardMismatches),
        setValue: (e) => (0, rc.x)({ logKeyboardMismatches: e }),
    }),
    Sl = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rc.x)({ logOverlayEvents: e }),
    }),
    Ss = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isLoggingQuestEvents),
        setValue: (e) => (0, rc.x)({ logQuestEvents: e }),
    }),
    Sr = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, I.bG)([rg.default], () => rg.default.isTracingRequests),
        setValue: (e) => (0, rc.x)({ trace: e }),
    }),
    Sa = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [St, Sl, Sr, Se, Si, Sn, Ss] }),
    So = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [h9, Sa, hF],
    }),
    Su = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hy.StaffBadgeIcon,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: n,
                    isLoggingOverlayEvents: i,
                    isLoggingAnalyticsEvents: l,
                    isTracingRequests: s,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: d,
                    isStaff: c,
                } = (0, I.cf)([rg.default, hu.A, sS.default], () => ({
                    layoutDebuggingEnabled: rg.default.layoutDebuggingEnabled,
                    isDeveloper: hu.A.isDeveloper,
                    isLoggingGatewayEvents: rg.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rg.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rg.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rg.default.isTracingRequests,
                    isForcedCanary: rg.default.isForcedCanary,
                    isSourceMapsEnabled: rg.default.sourceMapsEnabled,
                    isAxeEnabled: rg.default.isAxeEnabled,
                    preventPopoutClose: rg.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rg.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rg.default.disableAppCollectionsCache,
                    isStaff: sS.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, hj.O)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = hj.O.getState(),
                h = U.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          ti.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ng.openUserSettings)(S.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, p.jsx)(
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
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, rc.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rc.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, rc.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, p.jsxs)(
                          ti.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ng.openUserSettings)(S.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rc.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rc.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, rc.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, rc.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rc.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, p.jsxs)(
                          ti.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ng.openUserSettings)(S.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, rc.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rc.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(hv.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: 64,
                                                              onChange: (e) => A(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, p.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(hv.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: 64,
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
                          ? (0, p.jsx)(
                                ti.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => sh() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [So],
    });
var Sd = n(127062),
    Sc = n(25044),
    Sg = n(80703),
    Sm = n(123292),
    SA = n(683438),
    SE = n(890856),
    Sh = n(173936),
    SS = n(100392),
    ST = n(102609),
    Sf = n(271478),
    Sp = n(386976),
    Sx = n(257433),
    SI = n(32523),
    S_ = n(96919),
    Sb = n(688151),
    SN = n(863763);
function SC(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = x.useState(l),
        [a, o] = x.useState(!1),
        u = x.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, I.bG)([oR.default], () => oR.default.getId()),
        c = (0, I.bG)([oR.default], () => {
            let e = oR.default.getInstallationForTracking();
            return null == e ? null : (0, Sg.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, Sx.iN)(t, g),
        A = (0, Sx.Fm)(t, g),
        E = (0, I.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sb.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = x.useCallback(
            (e) => {
                (0, uZ.C)((0, SS.yA)(n), () => {
                    ((0, sm.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, p.jsx)(SE.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(n6.E, {
                variant: "body-md/medium",
                className: SN.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uZ.p5 &&
                                        (0, p.jsx)(n8.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(Sh.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n6.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: SN.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: SN.Os, children: S });
    let T = "";
    return (
        (T =
            t.system === ST.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Sb.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: SN.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(Sf.g, {
                        label: t.system === ST.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: SN.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(n6.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsx)(n6.E, {
                                  variant: "body-lg/medium",
                                  className: SN.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "mono-md/bold",
                                  className: SN.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "body-lg/medium",
                                  className: SN.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "mono-md/bold",
                                  className: SN.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "body-lg/medium",
                                  className: SN.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "mono-md/bold",
                                  className: SN.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: SN.id,
                          children: (0, p.jsx)(Sm.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(la.c, { className: SN.yF }),
            ],
        })
    );
}
function Sy(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = x.useState(null != i),
        [r, a] = x.useState(!1),
        o = x.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, I.bG)([rf.A], () => rf.A.getLoadedGuildExperiment(n)),
        d = (0, I.bG)([rf.A, lO.A, i$.A], () => {
            if (t.system === ST.l5.LEGACY) return null == rf.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lO.A.getGuildsArray().some((t) => null != i$.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, I.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sb.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, I.yK)([oR.default, lO.A, rf.A, i$.A], () => {
            let e = t.system === ST.l5.LEGACY,
                i = t.name,
                l = oR.default.getId(),
                s = K().sortBy(lO.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rf.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Sb.RE.NOT_ELIGIBLE)
                    : (i$.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Sb.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = K()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== ST.l5.LEGACY,
        E = (0, I.yK)([lO.A], () => K().sortBy(lO.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, S] = x.useState(() => lD.A.getGuildId() ?? lD.A.getLastSelectedGuildId()),
        T = E.find((e) => e.id === h)?.name,
        f = (0, I.bG)(
            [i$.A],
            () => {
                if (A && null != h) return i$.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, I.bG)([i$.A, oR.default], () => {
            if (!A) return;
            let e = oR.default.getId();
            return i$.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        b = null != _ && (_.isOverride || _.useAsEligibility),
        N = (0, p.jsx)(n8.D, {
            onClick: o,
            children: (0, p.jsxs)(n6.E, {
                variant: "body-md/medium",
                className: SN.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(n6.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: SN.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: SN.Os,
              children: [
                  N,
                  (0, p.jsx)(Sf.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: SN.h_,
                          children: (0, p.jsx)(ld.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: h ?? void 0,
                              options: E.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => S(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, p.jsx)("div", {
                      className: SN.h_,
                      children: d
                          ? (0, p.jsx)(n6.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === ST.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(n6.E, {
                                  variant: "body-lg/medium",
                                  className: SN.id,
                                  children: ["Server Descriptor", null != T ? ` (${T})` : ""],
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "mono-md/bold",
                                  className: SN.AS,
                                  children: null == f ? "None" : JSON.stringify(f, void 0, 2),
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "body-lg/medium",
                                  className: SN.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(n6.E, {
                                  variant: "mono-md/bold",
                                  className: SN.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-lg/medium",
                                    className: SN.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(n6.E, { variant: "mono-md/bold", className: SN.AS, children: g }),
                                t.system === ST.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(n6.E, {
                                                variant: "body-lg/medium",
                                                className: SN.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(n6.E, {
                                                variant: "mono-md/bold",
                                                className: SN.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-lg/medium",
                                    className: SN.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(n6.E, {
                                    variant: "mono-md/bold",
                                    className: SN.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-lg/medium",
                                    className: SN.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(n6.E, {
                                    variant: "mono-md/bold",
                                    className: SN.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: SN.id,
                            children: (0, p.jsx)(Sm.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(la.c, { className: SN.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: SN.Os, children: N });
}
let Sv = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Sp.op)(),
                { experiments: n, overridesInfo: i } = (0, SI.hI)(),
                l = x.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = x.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, I.bG)([oR.default], () => {
                    let e = oR.default.getInstallationForTracking();
                    return null == e ? null : (0, Sg.v)(e);
                }),
                [a, o] = x.useState(""),
                u = (0, S_.oC)((0, S_.R3)((0, S_.Fm)(l), s), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(n6.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uZ.p5 &&
                                    (0, p.jsx)(Sm.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uZ.C)(r, () => {
                                                (0, sm.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(SA.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sy : SC;
                              return (0, p.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: s[e.id],
                                      defaultOpen: null != s[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, p.jsx)("div", {
                              className: SN.p$,
                              children: (0, p.jsx)(N.D, {
                                  variant: "heading-sm/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Sj = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sv] }),
    SO = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sj] }),
    SD = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Sd.BeakerIcon,
        useMenu: Sc.A,
        buildLayout: () => [SO],
    }),
    SR = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => hu.A.isDeveloper,
        buildLayout: () => [SD, hC, Su],
    });
var SL = n(682348),
    SP = n(977556),
    SG = n(751075),
    SM = n(843402);
let SU = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function SV() {
    let e = (0, I.yK)([i8.Ay], () => i8.Ay.getGamesSeen(!1)),
        t = (0, I.bG)([i8.Ay], () => SU(...i8.Ay.getOverrides()));
    x.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, SM.a2)(), SM.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = x.useMemo(
        () =>
            e.reduce((e, t) => ((0, SP.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Sk(e) {
    let { gameHistory: t } = SV();
    return {
        namedGames: x.useMemo(
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
function Sw(e) {
    let { namedGames: t, totalCount: n } = Sk(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function SF() {
    let { namedGames: e } = Sk(2),
        [t, n] = x.useMemo(() => e.map((e) => e.id), [e]);
    x.useEffect(() => {
        Em.Ay.fetchApplications([t, n].filter(id.Vq));
    }, [t, n]);
    let [i, l] = (0, I.yK)([i4.A], () => [t, n].map(i4.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(le.A, { game: i, size: le.M.MEDIUM_LARGE }), shape: SG.e.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(le.A, { game: l, size: le.M.MEDIUM }), shape: SG.e.ROUNDED } : null,
          };
}
let SB = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sw(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = SF();
            return { type: f.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, I.bG)([i8.Ay], () => i8.Ay.getGamesSeen(!1).some((e) => !(0, SP.n1)(e))) && (0, nx.xl)(),
    }),
    SX = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [SB] });
var Sz = n(533440),
    SH = n(406535),
    SY = n(966756);
let SW = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(SY.default.A0FVCV),
        useSubtitle: () => V.intl.string(SY.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    SK = (0, oG.mj)({
        kind: "user",
        name: "2026-11-notify-friends-on-custom-status-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    SZ = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ON_CUSTOM_STATUS_UPDATE_SETTING, {
        useTitle: () => V.intl.string(SY.default.AOUyrx),
        useSubtitle: () => V.intl.string(SY.default.bZ094C),
        useValue: U.Eb.useSetting,
        setValue: function (e) {
            (U.Eb.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    notify_friends_on_custom_status_update: e,
                }));
        },
        usePredicate: () => SK.useConfig({ location: "NotifyFriendsOnCustomStatusUpdateSetting" }).enabled,
    }),
    Sq = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(SY.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(SY.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    SQ = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [Sz._, SW, SZ, Sq, SX],
    }),
    S$ = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    SJ = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [S$] });
var S0 = n(365258);
let S1 = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(SY.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(SY.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(SY.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(SY.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, S0.g8)(t, e);
        if (null == i) return;
        let l = (0, S0.Xc)(e);
        (0, lx.mM)(async () => {
            let { default: e } = await Promise.all([n.e(462955), n.e(562041), n.e(341996)]).then(n.bind(n, 32167));
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var S2 = n(498642),
    S3 = n(573435),
    S4 = n(260509),
    S5 = n(771810);
function S6(e) {
    let { guild: t, size: n } = e,
        i = (0, S4.Iv)(t, n, !1, !0),
        l = (0, S4.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: S5.F,
              children: (0, p.jsx)(n6.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "body-md/semibold" : "footnote/semibold",
                  children: l,
              }),
          });
}
function S8(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(S3.Ay, {
        className: S5.z,
        mask: S3.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(S6, { guild: t, size: n }),
    });
}
var S7 =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let S9 = {
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
                l = t.includes(n.id);
            return !i && l ? -1 : i && !l ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                l = t.includes(n.id);
            return i && !l ? -1 : !i && l ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var Te = n(618118);
function Tt(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, I.bG)([S2.A], () => S2.A.getMemberCount(t.id));
    return (0, p.jsxs)(q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: Te.FO, children: (0, p.jsx)(S8, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: Te.QH,
                children: (0, p.jsx)(ne.d, {
                    label: t.name,
                    description: V.intl.format(SY.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function Tn(e) {
    let { overflowGuilds: t } = e,
        n = (0, I.bG)([uA.default], () => uA.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, x.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(V.intl.formatToPlainString(SY.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(SG.q, {
                icons: {
                    frontIcon: { icon: (0, p.jsx)(S6, { guild: t[0], size: 48 }), shape: SG.e.SQUIRCLE },
                    backIcon:
                        null != t[1] ? { icon: (0, p.jsx)(S6, { guild: t[1], size: 48 }), shape: SG.e.SQUIRCLE } : null,
                },
            }),
            (0, p.jsxs)("div", {
                className: Te.yW,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        className: Te.Xc,
                        children: V.intl.format(SY.default.MEMaup, { count: i }),
                    }),
                    (0, p.jsx)(n6.E, { variant: "body-sm/normal", color: "text-muted", className: Te.Xc, children: s }),
                ],
            }),
        ],
    });
}
function Ti() {
    return (0, p.jsx)("div", {
        className: Te.yW,
        children: (0, p.jsx)(n6.E, {
            variant: "body-md/semibold",
            className: Te.Xc,
            children: V.intl.string(SY.default.BRjBVV),
        }),
    });
}
function Tl(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? V.intl.string(SY.default.BRjBVV) : V.intl.formatToPlainString(SY.default.MEMaup, { count: n.length });
    return (0, p.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, p.jsx)(Ti, {}) : (0, p.jsx)(Tn, { overflowGuilds: n }),
            (0, p.jsx)(lg.K, {
                variant: "secondary",
                size: "md",
                icon: t ? Eu.ChevronSmallUpIcon : mk.ChevronSmallDownIcon,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function Ts(e) {
    let {
            guilds: t,
            searchQuery: n,
            listId: i,
            isActivityRestrictedForGuild: l,
            onToggleActivityRestrictedGuild: s,
        } = e,
        {
            isExpanded: r,
            hasMoreGuilds: a,
            visibleGuilds: o,
            overflowGuilds: u,
            toggleExpanded: d,
            firstRevealedRowRef: c,
        } = (function (e) {
            let { guilds: t, searchQuery: n } = e,
                [i, l] = (0, x.useState)(null),
                s = i === n,
                r = "" === n && t.length > 10,
                a = r && !s ? t.slice(0, 10) : t,
                o = r ? t.slice(10) : [],
                u = (0, x.useRef)(null),
                d = (0, x.useRef)(!1);
            return (
                (0, x.useEffect)(() => {
                    d.current &&
                        ((d.current = !1), u.current?.focus(), u.current?.scrollIntoView({ block: "nearest" }));
                }, [s]),
                {
                    isExpanded: s,
                    hasMoreGuilds: r,
                    visibleGuilds: a,
                    overflowGuilds: o,
                    toggleExpanded: function () {
                        ((d.current = !s), l(s ? null : n));
                    },
                    firstRevealedRowRef: u,
                }
            );
        })({ guilds: t, searchQuery: n });
    return (0, p.jsxs)("ul", {
        className: Te.X1,
        id: i,
        "aria-label": V.intl.string(V.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, p.jsx)("div", {
                    className: Te.pb,
                    children: (0, p.jsx)(n6.E, {
                        className: Te.R$,
                        variant: "body-lg/medium",
                        children: V.intl.string(V.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, p.jsx)(
                    Tt,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, p.jsx)(Tl, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let Tr = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: i,
            setSearchQuery: l,
            sortOrder: s,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: g,
        } = (function () {
            let [e, t] = (0, x.useState)(""),
                [n, i] = (0, x.useState)("server-order"),
                l = (0, I.bG)([mi.Ay], () => mi.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lO.A], () => lO.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = U.Pw.useSetting(),
                [o, u] = (0, x.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await U.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, x.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, x.useState)(() => S9[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(S9[e](r, a)), i(e));
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
                    c ? d([]) : d(l);
                },
                numTotalGuilds: l.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        m = (0, x.useId)(),
        A = (0, x.useRef)(null),
        E = (0, x.useMemo)(
            () => [
                { id: S7.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: S7.SERVER_ORDER },
                { id: S7.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: S7.RECENTLY_JOINED },
                { id: S7.ACTIVITY_SHARING_ON, label: V.intl.string(SY.default.ZI51JZ), value: S7.ACTIVITY_SHARING_ON },
                {
                    id: S7.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(SY.default["+kxafn"]),
                    value: S7.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: Te.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: Te.N1,
                children: [
                    (0, p.jsx)(SA.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(_.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: V.intl.string(V.t["H+nRYw"]),
                        "aria-label": V.intl.string(V.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, p.jsxs)("div", {
                            className: Te.gO,
                            children: [
                                (0, p.jsx)(af.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(mc.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": V.intl.string(V.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, p.jsx)(ti.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, p.jsx)(
                                                        ti.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
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
                                        (0, p.jsxs)(n8.D, {
                                            ...e,
                                            innerRef: A,
                                            className: Te.Ku,
                                            children: [
                                                (0, p.jsx)(n6.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(mk.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: n3.A.colors.TEXT_SUBTLE,
                                                }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(Sm.Q, {
                                    variant: "primary",
                                    textVariant: "body-sm/medium",
                                    onClick: o,
                                    text: a ? V.intl.string(V.t["7lxcLO"]) : V.intl.string(V.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(lE.A, {
                "aria-live": "polite",
                role: "region",
                children: V.intl.format(SY.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsx)(Ts, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var Ta = n(68322);
let To = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(SY.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: Ta.l,
                      children: (0, p.jsx)(iq.w, {
                          type: "warning",
                          message: V.intl.string(SY.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(Tr, { notice: e });
        },
    }),
    Tu = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [S1, To, SJ],
    }),
    Td = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(SY.default.khuuzv),
        useSubtitle: () => V.intl.string(SY.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    Tc = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(n6.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            n6.E,
                            { tag: "span", variant: "body-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    Tg = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(SY.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(SY.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    Tm = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(SY.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [Td, Tg, Tc],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    TA = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [SQ, Tu, Tm],
    }),
    TE = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: SL.UserPlatformIcon,
        buildLayout: () => [TA],
    });
var Th = n(712440),
    TS = n(361328);
let TT = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: TS.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var Tf = n(478016),
    Tp = n(396478),
    Tx = n(77468),
    TI = n(289498),
    T_ = n(573648),
    Tb = n(643068),
    TN = n(370480),
    TC = n(522978);
let Ty = new Set([_.fg2.XBOX, _.fg2.PLAYSTATION, _.fg2.PLAYSTATION_STAGING, _.fg2.CRUNCHYROLL]);
var Tv = n(169869),
    Tj = n(152578),
    TO = n(733110),
    TD = n(744813),
    TR = n(757036),
    TL = n(555837),
    TP = n(43990),
    TG = n(241524),
    TM = n(51965),
    TU = n(377368),
    TV = n(631368),
    Tk = n(212739),
    Tw = n(417869),
    TF = n(337091),
    TB = n(831768),
    TX = n(660594);
function Tz() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, TV.$)()),
            (t = (0, Tk.O)()),
            (l = null != (i = (0, I.bG)([Tw.A], () => Tw.A.getAccount(null, _.fg2.XBOX))) && !i.revoked),
            e === TV.C.NONE || t
                ? { variant: TV.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === TV.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, ez.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, TU.yW)(a),
        u = (0, TG.A)("(max-width: 485px)");
    if (s === TV.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case TV.C.HAS_ACCESS:
        case TV.C.BLOCK_CLAIM:
            ((c = V.intl.string(TB.default["7PdsMK"])),
                (g = (0, p.jsx)(TM.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(TB.default.CubeLC),
                    onClick: () => {
                        (0, lx.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(878140), n.e(532203)]).then(n.bind(n, 15654));
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case TV.C.NO_ACCESS:
            ((c = V.intl.string(TB.default.NwkRTZ)),
                (g = (0, p.jsx)(tz.A, {
                    defaultTextOverride: V.intl.string(TB.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t3.pe.TIER_2,
                })));
            break;
        default:
            (0, id.xb)(s);
    }
    return (0, p.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, p.jsxs)("div", {
                className: TX.bV,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, p.jsx)(ac.NitroWheelIcon, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(TP.N, {
                theme: _.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: TX.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: TX.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: TX.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: TX.$h }),
                                        (0, p.jsx)("div", { className: TX.Rv }),
                                        (0, p.jsx)("div", { className: TX.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: TX.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: TX.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: TX.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(n6.E, {
                                                    variant: "body-lg/semibold",
                                                    color: "text-strong",
                                                    className: TX.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: TX.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: TX.yF }),
                                            (0, p.jsxs)("div", {
                                                className: TX.sQ,
                                                children: [
                                                    (0, p.jsx)(uX.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n3.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(n6.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(TF.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(TU.Hx.CONNECT),
                                                                    (0, TC.A)({
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
var TH = n(201718),
    TY = n(321078),
    TW = n(672130),
    TK = n(379848),
    TZ = n(688901);
function Tq(e) {
    let { markAsDismissed: t } = e;
    return (
        x.useEffect(() => t(AA.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: TZ.Ad, children: (0, p.jsx)(AP.E, { type: "new", variant: "primary" }) })
    );
}
function TQ(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, p.jsxs)("div", {
        className: TZ.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: TZ.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: TZ.TK,
                        children: [
                            (0, p.jsx)(TK.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, p.jsx)(Tq, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(n6.E, { variant: "body-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(n6.E, { variant: "body-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: s }),
        ],
    });
}
function T$() {
    let e = eC.A.getArticleURL(_.MVz.PS_CONNECTION);
    return (0, p.jsx)(TQ, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, TC.A)({ platformType: _.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let TJ = "/assets/9df988a227916145.png";
function T0() {
    return (0, p.jsx)(TQ, {
        title: V.intl.string(TF.default["9cLtDI"]),
        body: V.intl.format(TF.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(_.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: TJ, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, TC.A)({ platformType: _.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function T1() {
    let e = eC.A.getArticleURL(_.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(TQ, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: TJ, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, TC.A)({ platformType: _.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var T2 = n(783419),
    T3 = n(534952),
    T4 = n(705799),
    T5 = n(247259);
function T6(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, I.cf)(
            [Tw.A],
            () => ({
                isJoining: Tw.A.isJoining(n.id),
                joinErrorMessage:
                    "" === Tw.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : Tw.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== Tw.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, I.bG)([lO.A], () => lO.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    Tx.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: T5.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: T5.XX,
                    children: [
                        (0, p.jsx)(mE.Ay, { size: mE.Ay.Sizes.SMALL, guild: n.guild, className: T5.$f }),
                        (0, p.jsxs)("div", {
                            className: T5.Vn,
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nc.Anchor, {
                                    href: T_.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(n6.E, {
                                        variant: "body-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                s &&
                    (0, p.jsx)(n6.E, {
                        variant: "body-xs/normal",
                        color: "text-feedback-critical",
                        className: T5.R,
                        children: l,
                    }),
            ],
        })
    );
}
function T8(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, TL.G)()), (i = (0, TR.L)(t3.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === _.fg2.XBOX && s
        ? (0, p.jsx)(T0, {})
        : l.twoWayLink
          ? null
          : l.type === _.fg2.XBOX
            ? (0, p.jsx)(T1, {})
            : l.type === _.fg2.PLAYSTATION
              ? (0, p.jsx)(T$, {})
              : null;
}
function T7(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = x.useState(u.friendSync),
        [A, E] = x.useState(u.visibility),
        [h, S] = x.useState(u.metadataVisibility),
        [T, f] = x.useState(u.showActivity),
        [I, b] = x.useState(null),
        [N, C] = x.useState(null),
        [y, v] = x.useState(!1),
        [O, D] = x.useState([]),
        R = (0, Tb.ML)(u.type),
        L = T_.A.get(R);
    x.useEffect(() => {
        (m(u.friendSync), E(u.visibility), S(u.metadataVisibility), f(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: I, inProgressMetadataVisibility: N },
        G = x.useRef(P);
    return (
        x.useEffect(() => {
            G.current = P;
        }),
        x.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), Tx.A.setVisibility(u.type, u.id, e), b(null)),
                null != t && (S(t), Tx.A.setMetadataVisibility(u.type, u.id, t), C(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: T5.FI,
            children: [
                ((t = T_.A.get(u.type)),
                (n = T_.A.get(R)),
                (i = "1" === (u.metadata ?? {})[T2.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === _.fg2.TWITTER &&
                    i &&
                    (l = (0, p.jsx)(lA.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, p.jsx)(Tj.A, {
                            color: n3.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(Tf.CheckmarkSmallIcon, {
                                size: "xs",
                                color: n3.A.unsafe_rawColors.WHITE.css,
                            }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: T5.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: T5.gj,
                            src: (0, c9.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: T5.$p,
                                    children: [
                                        (0, p.jsx)(n6.E, {
                                            color: "text-strong",
                                            variant: "body-md/semibold",
                                            className: T5.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: T5.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(n6.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    className: T5.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(T4.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n8.D, {
                            className: T5.uH,
                            onClick: function () {
                                let e = T_.A.get(u.type);
                                (0, lx.qf)((t) =>
                                    (0, p.jsx)(lp.a, {
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
                                            Ty.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(st.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(dd.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(T8, { account: u }),
                (function (e) {
                    if (e.revoked) return null;
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, TN.An)(t[T2.pK.CREATED_AT], c);
                    switch (e.type) {
                        case _.fg2.REDDIT:
                            n = (0, Tv.xE)(t, T5.Nz);
                            break;
                        case _.fg2.STEAM:
                            n = (0, Tv.dy)(t, T5.Nz);
                            break;
                        case _.fg2.LETTERBOXD:
                            n = (0, Tv.uq)(t, T5.Nz);
                            break;
                        case _.fg2.BLUESKY:
                        case _.fg2.TWITTER:
                        case _.fg2.MASTODON:
                            n = (0, Tv.ED)(t, T5.Nz);
                            break;
                        case _.fg2.EBAY:
                            n = (0, Tv.ub)(t, T5.Nz);
                            break;
                        case _.fg2.PAYPAL:
                            n = (0, Tv.gZ)(t, T5.Nz);
                            break;
                        case _.fg2.TIKTOK:
                            n = (0, Tv.HU)(t, T5.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                n6.E,
                                {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    className: T5.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== T_.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: T5.Z3,
                                        children: (0, p.jsx)(AP.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    n6.E,
                                    {
                                        variant: "body-xs/normal",
                                        className: T5.vt,
                                        children: V.intl.format(V.t.Up2ni7, {
                                            helpdeskUrl: eC.A.getArticleURL(_.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = V.intl.string(V.t["LVh3/5"])));
                    return (
                        l && (s = V.intl.string(V.t.i4jeWR)),
                        n.push(
                            (0, p.jsx)(
                                "div",
                                {
                                    className: T5.jy,
                                    children: (0, p.jsx)(j.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: l,
                                        "aria-label": V.intl.string(V.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  (v(!0),
                                                      Tx.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), D(O), v(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, p.jsx)("div", { className: T5.tJ, children: n })
                    );
                })(u),
                (_.txh.has(u.type) &&
                    (s = (0, p.jsx)(ne.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), Tx.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                _.ewM.has(u.type) &&
                    (r = (0, p.jsx)(ne.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: L.name }),
                        checked: T,
                        onChange: function (e) {
                            (f(e), Tx.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                T_.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(ne.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (C(n), (0, TC.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), Tx.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: T5.HZ,
                    children: [
                        (0, p.jsx)(ne.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (b(n), (0, TC.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), Tx.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(la.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(iq.w, {
                          type: "info",
                          message: V.intl.format(V.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, TC.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lc.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(T6, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(TD.A, { partner: u.type }),
            ],
        })
    );
}
function T9(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: T5.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: T5.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: im()(T5.gj, T5.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: T5.$p,
                                          children: (0, p.jsx)(n6.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: T5.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(n6.E, {
                                          variant: "body-xs/normal",
                                          color: "text-strong",
                                          className: T5.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n8.D, {
                                  className: T5.uH,
                                  onClick: () =>
                                      (0, TS.d1)(n, t.scopes, () => {
                                          Th.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(dd.XSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: T5.HZ,
                      children: (0, p.jsx)(ne.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              TH.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fe() {
    let e = (0, Tb.gn)(),
        t = (0, i5.A)((0, T3.Gl)());
    return (0, p.jsxs)("div", {
        className: T5.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(TW.A, { application: e, innerClassName: T5.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    TI.A,
                    { type: e.type, innerClassName: T5.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function ft(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = x.useMemo(() => i.filter((e) => T_.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oB.y, { type: oB.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, p.jsx)(Tp.pp, {
                    theme: r,
                    className: T5.p$,
                    children: (0, p.jsx)(Tp.SG, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: V.intl.format(V.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, p.jsx)(
                                T9,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                T7,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Tx.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: T5.V, children: t })
    );
}
let fn = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lc.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, p.jsx)(fe, {}) });
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
    fi = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, I.bG)([Tw.A], () => Tw.A.isFetching()),
                n = (0, I.bG)([Tw.A], () => Tw.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, I.cf)([TO.A], () => ({
                    authorizedAppsFetchState: TO.A.getFetchState(),
                    authorizedApps: TO.A.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, TY.A)(sS.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cO.Ay)(),
                o = (0, I.bG)([uA.default], () => uA.default.locale);
            return (x.useEffect(() => {
                i === TO.FetchState.NOT_FETCHED && Th.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(Tz, {}),
                          (0, p.jsx)(ft, {
                              fetching: t || s || (r.length > 0 && i !== TO.FetchState.FETCHED),
                              accounts: n,
                              appIdentities: r,
                              authorizedApps: l,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            Tx.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    fl = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [fn, fi],
    }),
    fs = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [TT],
        initialize: () => (
            Th.A.fetch(),
            () => {
                TS.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    fr = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: of.L,
        buildLayout: () => [fl, fs],
    }),
    fa = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: Sh.LinkIcon,
        buildLayout: () => [fr],
    });
var fo = n(625657),
    fu = n(592598),
    fd = n(228342),
    fc = n(373954),
    fg = n(672396);
let fm = fE(null);
function fA() {
    var e;
    let t = fE(fm);
    ((e = fm),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(_.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (fm = t)));
}
function fE(e) {
    let t = fc.default.getNotificationPositionMode(),
        n = t !== _.G6Q.DISABLED,
        i = lu.Ay.getOverlayKeybind(),
        l = lu.Ay.getOverlayChatKeybind();
    return {
        enabled: fd.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: fu.A.isNotificationDisabled(fg.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lf.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lf.dI)(l.shortcut) : null,
        text_opacity_slider: fc.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? fd.default.enabled,
    };
}
var fh = n(237984),
    fS = n(63035);
function fT(e) {
    (e.preventDefault(), e.stopPropagation());
}
function ff(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: fT, children: t });
}
function fp(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: l,
        action: s,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, p.jsxs)("div", {
        className: im()(fS.HS, d),
        children: [
            (0, p.jsxs)(SE.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: fS.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: fS.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: fS.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: fS.c8,
                                children: [
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        className: fS.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, p.jsx)(n6.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(n6.E, {
                                            variant: "footnote/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: fS.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: fS.Om, children: a }),
        ],
    });
}
let fx = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(fp, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, p.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, fh.b)(tk.A.USER_SETTINGS, _.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var fI = n(273626),
    f_ = n(684013),
    fb = n(56562),
    fN = n(311043),
    fC = n(454908),
    fy = n(41984),
    fv = n(918825),
    fj = n(861862),
    fO = n(562519);
let fD = 5 * oC.A.Millis.DAY,
    fR = new fO.A("overlay_survey_timestamps");
function fL(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(fR.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < fD) ||
            Array.from(fR.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lx.mM)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e(914052), n.e(82318)]).then(n.bind(n, 387101));
                return ((i = Date.now()), fR.add(i), (n) => (0, p.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function fP() {
    (0, ln.sL)("overlay-settings");
}
function fG(e) {
    let { className: t, game: n } = e;
    return (0, ln.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(iq.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: fP },
              }),
          })
        : null;
}
var fM = n(760751),
    fU = n(9302),
    fV = n(656513);
let fk = new Set([
    fy.AR.INITIALIZING,
    fy.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    fy.AR.WAITING_FOR_MODULE_TRACKING,
    fy.AR.WAITING_FOR_OVERLAY_OPEN,
    fy.AR.WAITING_FOR_POPOUT_OPEN,
    fy.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    fy.AR.WAITING_FOR_REACT_INITIALIZATION,
    fy.AR.WAITING_FOR_PID_FOCUS,
    fy.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function fw(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = x.useState(!1);
    return (0, p.jsx)(fV.N, {
        className: fS.uR,
        collapsibleContent: (0, p.jsx)("div", { className: fS.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(fp, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: im()(fS.AC, n),
                action: (0, p.jsxs)("div", {
                    className: fS.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(mk.ChevronSmallDownIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(n9.ChevronSmallRightIcon, {
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
let fF = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i9();
        (0, fC.I)(e?.id);
        let n = e?.pid,
            i = (0, I.bG)(
                [fj.default],
                () => (null == e || null == n ? null : fj.default.getTrackedGameByPid(n)),
                [e, n],
                i3(),
            ),
            { data: l } = (0, fC.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, I.cf)(
                [fM.A, tc.A, fN.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i8.hw)(e, !1, [fM.A, tc.A, fN.A]),
                [e, i],
            ),
            a = (0, I.bG)(
                [i8.Ay, fM.A, tc.A, fN.A],
                () => (null == e ? null : (0, i8.xU)(e, i8.Ay, fM.A, tc.A, fN.A)),
                [e],
                i3(),
            ),
            [o, u] = x.useState(r),
            [d, c] = x.useState(s),
            [g, m] = x.useState(!1);
        x.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, fU.kA)(),
            E = !(0, fU.T6)(),
            { legacyEnabled: h, oopEnabled: S } = (0, I.cf)([fj.default], () => fj.default.getGlobalEnabledStatus());
        function T(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case fv.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), fI.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case fv.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), fI.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case fv.OverlayToggledClientSettingType.LEGACY:
                    (f_.A.setEnabled(t, S), (0, fv.Q)(t, fv.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case fv.OverlayToggledClientSettingType.OOP:
                    (f_.A.setEnabled(h, t), (0, fv.Q)(t, fv.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                fL(
                    i ? fv.OverlayToggledClientSettingType.LEGACY_GAME : fv.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let f = A && E,
            _ = !h && !S,
            b = !o && !h && d && !A,
            N = !d && !S && o && !E,
            C = i?.overlayMethod === fy.Ue.Disabled,
            y = i?.state === fy.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && fk.has(i.state) && !C,
            j = i?.overlayMethod === fy.Ue.OutOfProcess,
            O = i?.overlayMethod === fy.Ue.OutOfProcessLimitedInteraction,
            D = i?.overlayMethod === fy.Ue.Hook,
            R = i?.state === fy.AR.OVERLAY_CRASHED || i?.state === fy.AR.OVERLAY_CRASHED_DISABLED,
            L = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n6.E,
                                        {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && O:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n6.E,
                                        {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && D:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n6.E,
                                        { tag: "span", variant: "body-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== fb.aI.BORDERLESS_FULLSCREEN:
                                        return V.intl.string(V.t.mJmbeC);
                                    case E:
                                        return V.intl.string(V.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return V.intl.string(V.t.WiY24u);
                                    case !S:
                                        return V.intl.string(V.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return V.intl.string(V.t.XcGEcs);
                                    default:
                                        return V.intl.string(V.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [V.intl.string(V.t.OFC2aw), null];
                    case f:
                        return [V.intl.string(V.t.m7X4az), null];
                    case _:
                        return [V.intl.string(V.t["9DUS5l"]), null];
                    case L:
                        return [V.intl.string(V.t.nQ9EdJ), null];
                    case b:
                    case N:
                        return [V.intl.string(V.t.VWUn0a), null];
                    case v:
                        if (j) return [V.intl.string(V.t["s8+CFq"]), null];
                        if (D) return [V.intl.string(V.t.JEEdqt), null];
                        if (O) return [V.intl.string(V.t.pzBMwY), null];
                        return [V.intl.string(V.t["2Xhy9k"]), null];
                    case null == i:
                        return [V.intl.string(V.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === fb.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, e_.Ay)(() => {
            fI.A.getDetectableGames();
        });
        let [M, U] = x.useMemo(
            () =>
                v
                    ? ["text-muted", n3.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n3.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n3.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", n3.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n3.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, D],
        );
        return null == e
            ? null
            : (0, p.jsxs)(fw, {
                  onExpand: m,
                  className: g ? fS.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(lA.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, p.jsx)(Tj.A, {
                                        size: 16,
                                        color: n3.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(Tf.CheckmarkSmallIcon, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n3.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != G ? G : void 0,
                  header: (0, p.jsxs)(p.Fragment, {
                      children: [
                          y || v
                              ? (0, p.jsx)(dW.ScreenIcon, { size: "xxs", color: U })
                              : (0, p.jsx)("div", { className: fS.W4 }),
                          (0, p.jsx)(n6.E, {
                              variant: "body-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(le.A, { game: t, pid: e?.pid, size: le.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, p.jsx)(ff, {
                      children: (0, p.jsx)(ne.d, {
                          checked: (o && S) || (d && h),
                          disabled: f,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (fI.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (f_.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (f_.A.setEnabled(t, t),
                                              fI.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? fv.OverlayToggledClientSettingType.LEGACY_GAME
                                                : fv.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? fv.OverlayToggledClientSettingType.OOP_GAME
                                                : fv.OverlayToggledClientSettingType.OOP),
                                      null != s && fL(s, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !S && o,
                                          l = !h && d,
                                          s = !o && S,
                                          r = !d && h;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && S) || (d && h)),
                              );
                          },
                      }),
                  }),
                  warning: (0, p.jsx)(fG, { className: fS.Hh, game: e }),
                  children: [
                      (0, p.jsx)(fp, {
                          title: V.intl.string(V.t["7BlVIs"]),
                          description: V.intl.string(V.t.ndgADE),
                          hint: S ? void 0 : V.intl.string(V.t.cAFVsL),
                          "aria-label": V.intl.string(V.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ne.d, {
                                      checked: o && S,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !S
                                              ? T(e, fv.OverlayToggledClientSettingType.OOP)
                                              : T(e, fv.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: fS.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(fp, {
                          title: V.intl.string(V.t.BfFpW1),
                          description: V.intl.string(V.t.OzInYk),
                          hint: h ? void 0 : V.intl.string(V.t["3sYHXm"]),
                          "aria-label": V.intl.string(V.t.BfFpW1),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ne.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? T(e, fv.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, fv.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: fS.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i9();
        return null != e;
    },
    useSearchTerms: () => [V.intl.string(V.t["9cb1Uz"])],
});
var fB = n(206885);
function fX(e) {
    let { game: t, gameApplication: n } = e,
        i = x.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, I.bG)([i4.A], () => (null != n ? n : i4.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(le.A, { game: l, pid: i, size: le.M.SMALL });
}
function fz(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, fC.I)(t?.id);
    let o = (0, I.cf)([i8.Ay, fM.A, tc.A, fN.A], () => (0, i8.xU)(t, i8.Ay, fM.A, tc.A, fN.A)),
        u = (0, I.cf)([fM.A, tc.A, fN.A], () => (0, i8.hw)(t, !1, [fM.A, tc.A, fN.A]), [t]),
        d = l(u),
        [c, g] = x.useState(d);
    return (
        x.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(fp, {
            title: t.name,
            icon: (0, p.jsx)(fX, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(ne.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && fL(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: fS.Kz }),
                ],
            }),
        })
    );
}
let fH = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, I.cf)([fj.default], () =>
                    fj.default.getGlobalEnabledStatus(),
                ),
                l = (0, I.yK)([i8.Ay], () => i8.Ay.getGamesSeen(!0)).filter((e) => !(0, SP.n1)(e)),
                s = (0, i5.A)(l.map((e) => e.id)),
                r = !(0, fU.kA)();
            function a(e) {
                f_.A.setEnabled(e, i);
                let t = i8.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fv.Q)(e, fv.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && fL(fv.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                fI.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () =>
                    (0, fU.kA)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, p.jsx)(fp, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: fS.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(ne.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              fB.O && (0, p.jsx)("div", { className: fS.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(fw, {
                      onExpand: t,
                      className: e ? fS.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, p.jsx)(ff, {
                          children: (0, p.jsx)(ne.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: fS.SC,
                              children: (0, p.jsx)(n6.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: fS.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      fz,
                                      {
                                          rawGame: e,
                                          clientSettingType: fv.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
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
    fY = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, I.cf)([fj.default], () =>
                    fj.default.getGlobalEnabledStatus(),
                ),
                l = !(0, fU.T6)(),
                s = (0, I.yK)([i8.Ay], () => i8.Ay.getGamesSeen(!0)).filter((e) => !(0, SP.n1)(e)),
                r = (0, i5.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                f_.A.setEnabled(i, e);
                let l = i8.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fv.Q)(e, fv.OverlayToggledClientSettingType.OOP, l),
                    t && fL(fv.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                fI.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () => (fB.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, p.jsx)(fp, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: fS.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(ne.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              fB.O && (0, p.jsx)("div", { className: fS.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(fw, {
                      onExpand: t,
                      className: e ? fS.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, p.jsx)(ff, {
                          children: (0, p.jsx)(ne.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: fS.SC,
                              children: (0, p.jsx)(n6.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: fS.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      fz,
                                      {
                                          rawGame: e,
                                          clientSettingType: fv.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
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
    fW = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [fF, fY, fH, fx],
    }),
    fK = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, I.bG)([fc.default], () => !fc.default.disableClickableRegions),
        setValue: (e) => {
            f_.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    fZ = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lu.Ay], () => lu.Ay.getOverlayKeybind()),
                t = !(0, fU.kA)(),
                n = !(0, fU.T6)(),
                [i, l] = (0, I.yK)([i8.Ay], () => [i8.Ay.canShowAdminWarning, i8.Ay.getVisibleGame()], []),
                s = (0, ln.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lu.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: fS.hc,
                children: (0, p.jsxs)("div", {
                    className: fS.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: fS.Bu,
                            children: [
                                (0, p.jsx)(n6.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fS.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fS.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: fS.IH,
                            children: (0, p.jsx)(lT.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tE()(null != e, "Keybind should never be undefined"),
                                        iQ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.VsAZcC)],
    });
var fq = n(515183),
    fQ = n(682763);
let f$ = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i9();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i9();
            return null != e && (0, fq.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i9(),
                n = t?.id,
                i = (0, I.bG)([fu.A], () => fu.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, fq.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = i6.A.getStreamerActiveStreamMetadata()),
                    (l = i7(
                        t,
                        (i =
                            null != (n = i8.Ay.getVisibleGame())
                                ? i8.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i4.A.getApplication(l) ?? void 0 });
            null != s && (0, fQ.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    fJ = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [fZ, f$, fK] });
var f0 = n(93465),
    f1 = n(222407);
let f2 = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: f0.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: f0.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: f0.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: f0.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: f0.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: f0.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nN.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, I.bG)([fu.A], () => fu.A.isNotificationDisabledBySetting(f0.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function f3(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, I.bG)([fu.A], () => fu.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, f1.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let f4 = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => f2.map(f3),
    }),
    f5 = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [f4],
    }),
    f6 = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, I.bG)([fc.default], () => fc.default.getAvatarSizeMode()),
        setValue: (e) => {
            f_.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: _.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: _.OSZ.SMALL },
        ],
    }),
    f8 = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, I.bG)([fc.default], () => fc.default.getDisplayNameMode()),
        setValue: (e) => {
            f_.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: _.pwA.NEVER },
        ],
    }),
    f7 = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, I.bG)([fc.default], () => fc.default.getDisplayUserMode()),
        setValue: (e) => {
            f_.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var f9 = n(391973),
    pe = n(887287),
    pt = n(897720),
    pn = n(83880);
function pi() {
    let e = pe.A.getWidgetByType(_.uss.VOICE_V3);
    if (null == e) return null;
    let t = pn.A.getWidget(e.id);
    return null != t && (0, pt.ZO)(t) ? t : null;
}
n(392164);
let pl = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pi();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pi();
        null != t &&
            (e < 1
                ? (0, f9.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, f9.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var ps = n(502812),
    pr = n(968898),
    pa = n(288737);
function po(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new pa.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new gh.A({ id: l, username: e }),
        member: {
            nick: e,
            userId: l,
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
let pu = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, I.cf)([fc.default], () => ({
                    avatarSizeMode: fc.default.getAvatarSizeMode(),
                    displayNameMode: fc.default.getDisplayNameMode(),
                    displayUserMode: fc.default.getDisplayUserMode(),
                })),
                [s] = x.useState(() => [
                    po(V.intl.string(V.t.C0ZDvo), !0, !1),
                    po(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    po(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, I.bG)([pe.A, pn.A], () => {
                    let e = pe.A.getWidgetByType(_.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pn.A.getWidget(e.id);
                    return null != t && (0, pt.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = po(t.username)).user = t), e) : null, ...s].filter(id.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(TP.N, {
                    theme: _.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: im()(fS.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: fS.kJ,
                                    children: (0, p.jsx)(ps.DH, {
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
                                        displayUserMode: l,
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
                                (0, p.jsxs)("div", {
                                    className: fS.R$,
                                    children: [
                                        (0, p.jsx)(pr.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, p.jsx)(pr.CS, {}),
                                        (0, p.jsx)(pr.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: fS.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pd = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [pu, f6, f8, f7, pl],
    });
var pc = n(667419),
    pg = n(776162),
    pm = n(499466),
    pA = n(934058),
    pE = n(630398),
    ph = n(233470),
    pS = n(361729);
let pT = [],
    pf = {
        [_.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
        [_.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
        [_.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
        [_.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
        [_.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
        [_.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
        [_.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
        [_.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
    };
function pp(e) {
    let t = nC.A[e],
        n = pf[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, nN.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, I.bG)([pn.A], () => (0, pc.$e)(e, pn.A), []),
        setValue: (t) => {
            ((0, pc.j$)(), (0, pc.JA)(e, !t));
        },
    });
}
let px = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(pS.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(pS.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => pg.t3.flatMap(pp),
    }),
    pI = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, I.bG)([pA.A], () => pA.A.getOwnedProjects()),
                t = (0, pm.TW)("overlay_settings_conjure_apps"),
                n = (0, I.bG)([pA.A], () => pA.A.getServerProjects());
            (x.useEffect(() => {
                t && (0, ph.listProjects)();
            }, [t]),
                (0, pE.A)({ refetchOnMount: !0 }));
            let i = t ? e : pT;
            return 0 === i.length && 0 === n.length
                ? null
                : (0, p.jsxs)(q.B, {
                      gap: 16,
                      children: [
                          i.length > 0
                              ? (0, p.jsxs)(q.B, {
                                    gap: 8,
                                    children: [
                                        (0, p.jsx)(N.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-muted",
                                            children: V.intl.string(pS.default["pbu+Yx"]),
                                        }),
                                        i.map((e) => (0, p.jsx)(pg.i2, { project: e }, e.id)),
                                    ],
                                })
                              : null,
                          (0, p.jsx)(pg.R, { projects: n }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(pS.default["pbu+Yx"])],
    }),
    p_ = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pc.eL,
    }),
    pb = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(pS.default["Qk/rJB"]),
        usePredicate: ny.b_,
        buildLayout: () => [px, pI, p_],
    });
var pN = n(54761);
function pC() {
    let [e, t] = (0, As.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(AA.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: pN.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pN.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: pN.vJ,
                                  children: [
                                      (0, p.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(n6.E, {
                                          variant: "body-md/normal",
                                          color: "text-muted",
                                          children: V.intl.string(V.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pN.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pN.VV,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(AA.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(la.c, { className: pN.yF }),
              ],
          });
}
function py() {
    let e = (0, I.bG)([tu.A], () => tu.A.enabled),
        t = (0, nN.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(iq.w, {
                      type: "warning",
                      message: V.intl.format(V.t.fuEX5B, {
                          onClick: function () {
                              return (0, ng.openUserSettings)(S.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, p.jsx)(la.c, { className: pN.yF }),
              ],
          })
        : null;
}
let pv = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                fA(),
                lu.Ay.addChangeListener(fA),
                fu.A.addChangeListener(fA),
                fc.default.addChangeListener(fA),
                fd.default.addChangeListener(fA),
                e8.isPlatformEmbedded && (0, SM.a2)(),
                () => {
                    (lu.Ay.removeChangeListener(fA),
                        fu.A.removeChangeListener(fA),
                        fc.default.removeChangeListener(fA),
                        fd.default.removeChangeListener(fA),
                        e8.isPlatformEmbedded && (0, SM.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: f.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(pC, {}), (0, p.jsx)(py, {})] });
            },
        },
        buildLayout: () => [fW, fJ, pb, pd, f5],
    }),
    pj = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: fo.WindowTopOutlineIcon,
        usePredicate: ny.b_,
        buildLayout: () => [pv],
    });
var pO = n(687966);
let pD = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pR = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pD] });
var pL = n(227309),
    pP = n(29160),
    pG = n(552366),
    pM = n(938442);
function pU(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, fC.I)(t.id);
    let o = (0, I.cf)([i8.Ay, fM.A, tc.A, fN.A], () => (0, i8.xU)(t, i8.Ay, fM.A, tc.A, fN.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, I.cf)([i8.Ay], () => ({
            canToggleDetection: null == a || i8.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i8.Ay.isDetectionEnabled(o),
        })),
        c = (0, I.bG)([i8.Ay], () => i8.Ay.getVisibleGame()),
        [g, m] = x.useState(!1),
        A = x.useRef(null),
        E = null != c && (0, i8.Es)(o) === (0, i8.Es)(c),
        h = !l && !g,
        S = !i && !E,
        T = h || S,
        f = x.useMemo(
            () =>
                (0, SP.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [b, N] = x.useState(f ?? "???"),
        C = im()(pM.tR, {
            [pG.LO]: !i,
            [pG.Rw]: i,
            [pG.FB]: null != o && i,
            [pG.xL]: r,
            [pG.fG]: null != s && s.length > 0,
        });
    function y() {
        (fI.A.deleteEntry(o),
            s?.forEach((e) => {
                fI.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? fM.A.getDetectableGame(o.id) : null;
        (td.default.track(_.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, SP.n1)(o) ? o.gameName : o.name,
        }),
            (0, lx.mM)(async () => {
                let { default: t } = await Promise.all([n.e(568035), n.e(627495)]).then(n.bind(n, 651930));
                return (n) =>
                    (0, p.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: C,
                children: [
                    (0, p.jsxs)("div", {
                        className: im()(pG.$K, pM.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, p.jsxs)("div", {
                                      className: pG.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: pG.mO, children: f }),
                                          (0, p.jsx)(lA.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, p.jsx)(Tj.A, {
                                                  className: pG.qf,
                                                  size: 18,
                                                  color: n3.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(Tf.CheckmarkSmallIcon, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n3.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: im()(pG.mO, pG.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: b,
                                      onBlur: function () {
                                          o.name !== b && fI.A.editName(o, b);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lF.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => N(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || E
                                        ? (e = V.intl.string(V.t.VbV5dv))
                                        : null != n && "" !== n && (e = V.intl.format(V.t["gGeOE+"], { when: n })),
                                    (0, p.jsx)(n6.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: pG.GN,
                                        children: (0, p.jsx)(pP.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, e8.uF)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    T &&
                        (0, p.jsx)(af.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(mc.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": V.intl.string(V.t["UKOtz+"]),
                                    children: (0, p.jsxs)(ti.rX, {
                                        children: [
                                            h &&
                                                (0, p.jsx)(ti.Dr, {
                                                    id: "report",
                                                    label: V.intl.string(V.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            S &&
                                                (0, p.jsx)(ti.Dr, {
                                                    id: "remove",
                                                    label: V.intl.string(V.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, p.jsx)("div", {
                                    className: im()(pG._Q, { [pG.g9]: t.isShown }),
                                    children: (0, p.jsx)(lA.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(lg.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: mo.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, p.jsx)(lA.m, {
                        text: V.intl.string(V.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, p.jsx)(lh.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lx.mM)(async () => {
                                          let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, p.jsx)(e, {
                                                  ...t,
                                                  title: V.intl.formatToPlainString(V.t.PZ4fKc, { platform: f }),
                                                  subtitle: V.intl.formatToPlainString(V.t.ZIQbfb, { platform: f }),
                                                  actions: [
                                                      {
                                                          text: V.intl.string(V.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: V.intl.string(V.t.Fmjztz),
                                                          onClick: () => {
                                                              (fI.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : fI.A.toggleDetection(o);
                            },
                            "aria-label": V.intl.string(V.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, p.jsx)("div", {
                    className: pG.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            x.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pU, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: pG.PQ }),
                                ],
                            },
                            (0, i8.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pV() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = SV();
    return 0 === e.length
        ? null
        : (0, p.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n5.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pU,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pL.a7 ? t : void 0 },
                              (0, i8.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pk = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pV, {}),
});
var pw = n(424994);
let pF = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pk, pR],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, I.bG)([i8.Ay], () => i8.Ay.getGamesSeen(!1).some((e) => !(0, SP.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pw.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pB = n(890497),
    pX = n(853270),
    pz = n(969426);
function pH(e) {
    let { onClose: t } = e,
        n = (0, I.bG)([i8.Ay], () => i8.Ay.getCandidateGames()),
        [i, l] = x.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(ap.l, {
        className: im()(pX.H, pz.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, p.jsx)(pB.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: im()(pX.o, pM.xM),
                children: [
                    (0, p.jsx)(Sm.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (fI.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pY = n(475007),
    pW = n(221851);
function pK() {
    let e = x.useRef(null);
    return (0, p.jsxs)("div", {
        className: im()(pY.a, pW.Gf),
        children: [
            (0, p.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, p.jsx)(af.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pH, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(Sm.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "body-sm/medium",
                        text: V.intl.string(V.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function pZ() {
    return (0, p.jsx)("div", {
        className: im()(pM.tR, pG.eS, pG.Rw),
        children: (0, p.jsxs)("div", {
            className: im()(pG.$K, pM.Vd),
            children: [
                (0, p.jsx)("div", { className: pG.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, p.jsx)(pK, {}),
            ],
        }),
    });
}
let pq = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = SV(),
                n = (0, I.bG)([i8.Ay], () => i8.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(pZ, {})
                : (0, p.jsxs)("div", {
                      className: im()(pM.Vd, pG.C2),
                      children: [
                          (0, p.jsx)(
                              pU,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pL.a7 ? e : void 0,
                              },
                              (0, i8.Es)(n),
                          ),
                          (0, p.jsx)(pK, {}),
                      ],
                  });
        },
    }),
    pQ = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [pq],
    }),
    p$ = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [pQ, pF],
    }),
    pJ = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pO.GameControllerIcon,
        usePredicate: ny.Pi,
        buildLayout: () => [p$],
    });
var p0 = n(176781),
    p1 = n(341923),
    p2 = n(419490),
    p3 = n(572164),
    p4 = n(489496),
    p5 = n(696016),
    p6 = n(683825);
let p8 = (0, h.sN)(S.X.CLIPS_BITRATE, {
    useTitle: () => V.intl.string((0, p1.H)() ? p6.default.i2xEfm : V.t["8bZyov"]),
    useSubtitle: () => V.intl.string((0, p1.H)() ? p6.default.sY70pa : V.t["h8DSx/"]),
    minValue: 10,
    maxValue: 100,
    useDefaultValue: () => 75,
    getInitialValue: () => p2.Ay.getSettings().clipsQuality.bitratePercent ?? 75,
    onValueRender: (e) => `${Math.round(e)}%`,
    setValue: (e) => {
        let { clipsQuality: t } = p2.Ay.getSettings();
        p4.GS({ ...t, bitratePercent: Math.round(e) });
    },
    markers: [10, 25, 50, 75, 100],
    onMarkerRender: (e) => `${Math.round(e)}%`,
    useDisabled: () => !(0, p3.E)(),
});
var p7 = n(226640);
let p9 = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string((0, p1.H)() ? p6.default.juVL76 : V.t["2wScL1"]),
        useSubtitle: () => V.intl.string((0, p1.H)() ? p6.default.n6Ts7o : V.t["Rf9+fy"]),
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = p2.Ay.getSettings();
            p4.GS({ ...t, frameRate: e });
        },
        useOptions: p7.Fz,
        useDisabled: () => !(0, p3.E)(),
    }),
    xe = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, I.bG)([p2.Ay], () => p2.Ay.getHardwareClassification()) === p5.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(st.A, { look: st.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    xt = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string((0, p1.H)() ? p6.default.CnXTMY : V.t.OgfUio),
        useSubtitle: () => ((0, p1.H)() ? null : V.intl.string(V.t.H7j4tY)),
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().clipsLength),
        setValue: (e) => p4.h$(e),
        useOptions: p7.Qu,
        useDisabled: () => !(0, p3.E)(),
    }),
    xn = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p1.H)()
                ? (0, p.jsx)(iq.w, { type: "info", role: "none", message: V.intl.string(p6.default["1C6Gea"]) })
                : (0, p.jsx)(st.A, { look: st.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) });
        },
    }),
    xi = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string((0, p1.H)() ? p6.default["82AJHx"] : V.t.aFudZJ),
        useSubtitle: () => V.intl.string((0, p1.H)() ? p6.default["0Y9r0P"] : V.t.nIrkW5),
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = p2.Ay.getSettings();
            p4.GS({ ...t, resolution: e });
        },
        useOptions: p7.gF,
        useDisabled: () => !(0, p3.E)(),
    }),
    xl = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string((0, p1.H)() ? p6.default.nvHjmr : V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string((0, p1.H)() ? p6.default.HzqWWF : V.t.m4Cjj9),
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().remindersEnabled),
        setValue: (e) => p4.Mt(e),
        useDisabled: () => !(0, p3.E)(),
    });
n(51318);
let xs = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string((0, p1.H)() ? p6.default.E6QvLy : p6.default.TGwzMe),
        buildLayout: () => [xe, xt, p9, xi, p8, xn, xl],
    }),
    xr = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => ((0, p1.H)() ? V.intl.string(p6.default.Oh9NEy) : "Show clips debug tooltips"),
        useSubtitle: () =>
            (0, p1.H)()
                ? V.intl.string(p6.default.XoptI1)
                : "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => p4.YP(e),
    }),
    xa = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => ((0, p1.H)() ? V.intl.string(p6.default["Pm/g4t"]) : "Show POV clips in Gallery"),
        useSubtitle: () =>
            (0, p1.H)()
                ? V.intl.string(p6.default.aSPNgv)
                : "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => p4.Uh(e),
    }),
    xo = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, I.bG)([sS.default], () => {
                let e = sS.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [xr, xa],
    });
var xu = n(271597),
    xd = n(417270),
    xc = n(847825);
let xg = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([lu.Ay], () => lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
        tE()(null != n, "Save clip keybind unset");
        let i = !(0, p3.E)(),
            l = (0, p1.H)(),
            s = (0, lf.Xt)(n.shortcut, (0, lf.OH)("alt+c")),
            r = x.useRef(null),
            a = x.useCallback(
                (e) => {
                    iQ.A.setKeybind({ ...n, shortcut: e });
                },
                [n],
            ),
            o = x.useCallback(() => {
                iQ.A.setKeybind({ ...n, shortcut: (0, lf.OH)("alt+c") });
            }, [n]);
        return (0, p.jsx)(lc.D, {
            label: V.intl.string(l ? p6.default["8Cx5u+"] : V.t.pf54EU),
            description: V.intl.string(l ? p6.default.sved3b : V.t["QyB/jK"]),
            layout: "horizontal-responsive",
            children: (0, p.jsx)("div", {
                className: xc.g,
                children: (0, p.jsx)(lT.A, {
                    ref: r,
                    disabled: i,
                    defaultValue: n.shortcut,
                    onChange: a,
                    keycaps: t,
                    trailingActions: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(lA.m, {
                                text: V.intl.string(p6.default.bUtubv),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, p.jsx)(lg.K, {
                                    icon: iZ.KeyboardIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i,
                                    "aria-label": V.intl.string(p6.default.bUtubv),
                                    onClick: (e) => {
                                        (e.stopPropagation(), r.current?.toggleRecordMode());
                                    },
                                }),
                            }),
                            (0, p.jsx)(lA.m, {
                                text: V.intl.string(p6.default.Kyk1Tp),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, p.jsx)(lg.K, {
                                    icon: xd.RetryIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i || (l && s),
                                    "aria-label": V.intl.string(p6.default.Kyk1Tp),
                                    onClick: (e) => {
                                        (e.stopPropagation(), o());
                                    },
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    xm = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () =>
            (0, p1.H)()
                ? [V.intl.string(p6.default["8Cx5u+"]), V.intl.string(p6.default.sved3b)]
                : [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        usePredicate: () => (0, I.bG)([lu.Ay], () => null != lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
        Component: xg,
    }),
    xA = (0, h.E2)(S.X.CLIPS_MANUAL_KEYBIND, {
        usePredicate: () => {
            let e = (0, p1.H)(),
                t = (0, I.bG)([lu.Ay], () => null != lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
            return e && t;
        },
        useSearchTerms: xm.useSearchTerms,
        Component: () => (0, p.jsx)(xg, { keycaps: !0 }),
    }),
    xE = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([lu.Ay], () => lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
            i = (0, I.bG)([lu.Ay], () => lu.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0));
        (tE()(null != n, "Save clip keybind unset"), tE()(null != i, "Save screenshot keybind unset"));
        let l = x.useCallback(
            (e) => {
                iQ.A.setKeybind({ ...i, shortcut: e });
            },
            [i],
        );
        return (0, p.jsx)(lc.D, {
            label: V.intl.string(V.t["0U/hj7"]),
            description: V.intl.string(V.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, p.jsx)("div", {
                className: xc.g,
                children: (0, p.jsx)(lT.A, { defaultValue: i.shortcut, onChange: l, keycaps: t }),
            }),
        });
    },
    xh = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: lZ.BW,
        Component: xE,
    }),
    xS = (0, h.E2)(S.X.CLIPS_MANUAL_SCREENSHOT_KEYBIND, {
        useSearchTerms: xh.useSearchTerms,
        usePredicate: () => {
            let e = (0, p1.H)(),
                t = (0, lZ.BW)(),
                n = (0, I.bG)(
                    [lu.Ay],
                    () =>
                        null != lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0) &&
                        null != lu.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0),
                );
            return e && t && n;
        },
        Component: () => (0, p.jsx)(xE, { keycaps: !0 }),
    }),
    xT = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, p3.E)(),
        setValue: (e) => p4.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    xf = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, {
        usePredicate: () => !(0, p1.H)(),
        buildLayout: () => [xT, xm, xh],
        headerSettingKey: xT.key,
    }),
    xp = (0, h.AK)(S.X.CLIPS_VOICE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(p6.default.ArBuEu),
        destinationKey: S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING,
    }),
    xx = (0, h.gN)(S.X.CLIPS_RELATED_SETTINGS, { usePredicate: p1.H, buildLayout: () => [xp] });
var xI = n(428678),
    x_ = n(650684),
    xb = n(439408),
    xN = n(464132),
    xC = n(791498);
let xy = (0, h.E2)(S.X.CLIPS_CAPTURE_MODE, {
        usePredicate: () => {
            let e = (0, lZ.sw)(),
                t = (0, p1.H)();
            return e && t;
        },
        useSearchTerms: () => [
            V.intl.string(p6.default["n+Htm0"]),
            V.intl.string(p6.default["uO/2T5"]),
            V.intl.string(p6.default["2Uh8Zr"]),
            V.intl.string(p6.default.uEs0uv),
        ],
        Component: function () {
            let e,
                { value: t, onChange: n } = (0, xN.U)(),
                i = (0, xC.q)(xy);
            return (0, p.jsx)(xb.u, {
                label: V.intl.string(p6.default["n+Htm0"]),
                options:
                    ((e = (0, I.bG)([lu.Ay], () =>
                        (0, lf.dI)(lu.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, lf.OH)("alt+c"), !0),
                    )),
                    [
                        { value: "off", title: V.intl.string(p6.default["uO/2T5"]), icon: xI.DenyIcon },
                        {
                            value: "manual",
                            title: V.intl.string(p6.default["2Uh8Zr"]),
                            description:
                                e.length > 0
                                    ? V.intl.formatToPlainString(p6.default["qYS+JH"], { keybind: e })
                                    : V.intl.string(p6.default.VfTZ7q),
                            icon: p0.ClipsIcon,
                        },
                        {
                            value: "auto",
                            title: V.intl.string(p6.default.uEs0uv),
                            description: V.intl.string(p6.default.MRWtw9),
                            icon: x_.ClipsAutoIcon,
                            accent: "nitro",
                        },
                    ]),
                value: t,
                onChange: (e) => {
                    (i(), n(e));
                },
            });
        },
    }),
    xv = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () =>
            V.intl.format((0, p1.H)() ? p6.default["6C94PY"] : p6.default["dh7g+S"], {
                learnMoreLink: eC.A.getArticleURL(_.MVz.CLIPS),
            }),
        useHeaderDecoration: () =>
            (0, p1.H)()
                ? {
                      type: f.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              type: f.UV.BUTTON,
                              id: "clips-library",
                              text: V.intl.string(p6.default["5pE8FG"]),
                              variant: "secondary",
                              onClick: () => (0, xu.p)(),
                          },
                      ],
                  }
                : void 0,
        buildLayout: () => [xy, xf, xA, xS, xx],
    }),
    xj = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () =>
            (0, p1.H)()
                ? [V.intl.string(p6.default.DonDIR), V.intl.string(p6.default.qiqPrh)]
                : [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, I.bG)([p2.Ay], () => p2.Ay.getSettings().storageLocation),
                t = !(0, p3.E)() || !(0, lZ.ri)(lt.Ay),
                n = (0, p1.H)(),
                i = x.useRef(!1);
            return (0, p.jsx)(lc.D, {
                label: V.intl.string(n ? p6.default.DonDIR : V.t.s4773E),
                description: V.intl.string(n ? p6.default.qiqPrh : V.t.svjwGh),
                layout: "vertical",
                children: (0, p.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, p.jsx)(lI.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": V.intl.formatToPlainString(V.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, p.jsx)(j.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: async function () {
                                if (!t && !i.current) {
                                    i.current = !0;
                                    try {
                                        let e = await nb.A.fileManager.showOpenDialog({
                                            properties: ["openDirectory", "createDirectory"],
                                        });
                                        e.length > 0 && p4.HU(e[0]);
                                    } finally {
                                        i.current = !1;
                                    }
                                }
                            },
                            text: V.intl.string(p6.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    xO = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(p6.default["0Q+pdZ"]),
        buildLayout: () => [xj],
    }),
    xD = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lZ.sw,
        usePersistentBadge: () =>
            (0, p1.H)() ? { badgeType: f.Xi.EARLY_ACCESS } : { badgeType: f.Xi.COUNT, count: 0 },
        buildLayout: () => [xv, xs, xO, xo],
    }),
    xR = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: p0.ClipsIcon,
        buildLayout: () => [xD],
    }),
    xL = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [pJ, TE, xR, pj, fa],
    });
var xP = n(631670),
    xG = n(974504),
    xM = n(836602),
    xU = n(591179),
    xV = n(100663),
    xk = n(761508),
    xw = n(159001),
    xF = n(872200),
    xB = n(919395),
    xX = n(68750);
function xz(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(N.D, { variant: "body-md/medium", className: xX.Vf, children: t }), n],
    });
}
function xH(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, p.jsx)("div", {
        className: im()(xX.UA, n),
        children: (0, p.jsxs)("div", {
            className: im()(xX.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: im()(xX.Fp, a && xX.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(xz, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(xz, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: xX.oB, children: t }),
            ],
        }),
    });
}
var xY = n(641318),
    xW = n(101058),
    xK = n(851767),
    xZ = n(696451),
    xq = n(590941);
function xQ() {
    return (0, p.jsxs)("div", {
        className: xq.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xq.Sl }),
            (0, p.jsx)(N.D, { className: xq.h8, variant: "heading-lg/semibold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, p.jsx)(n6.E, { className: xq.h8, variant: "body-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xq.h8,
                children: (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, co.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                    },
                }),
            }),
        ],
    });
}
var x$ = n(81400),
    xJ = n(450232),
    x0 = n(468450),
    x1 = n(355622),
    x2 = n(408018),
    x3 = n(989161),
    x4 = n(290386),
    x5 = n(941933),
    x6 = n(486264);
let x8 = (0, t0.Ld)(),
    x7 = (0, G.createChannelRecord)({ id: "1", type: _.rbe.DM }),
    x9 = (0, t0.Ld)();
function Ie(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, x4.U)({ location: "profile_customization_about_me" }),
        [u, d] = x.useState(l ?? r),
        [c, g] = x.useState((0, x2.x7)(u)),
        m = x.useRef(r),
        A = x.useRef(!1);
    return (
        x.useEffect(() => {
            if (m.current !== r) {
                let e = (0, x2.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        x.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, x2.x7)(r)));
        }, [l, r, u]),
        (0, p.jsxs)(aA.A, {
            title: t,
            titleId: x8,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(x3.Ay, {
                    "aria-describedby": x9,
                    "aria-labelledby": x8,
                    className: x6.i,
                    innerClassName: x6.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: x7,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: x5.y,
                    type: x1.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(lE.A, { id: x9, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var It = n(821956),
    In = n(562819),
    Ii = n(84540),
    Il = n(467690);
function Is(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, xB.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xB.CP)(n?.id),
        c = r ? gA.wL : s4.$n;
    return (0, p.jsx)(aA.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: Il.NC,
            children: [
                (0, p.jsx)(c, {
                    size: s4.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, In.L)({ analyticsLocations: a, guild: n });
                    },
                    className: im()({ [Il.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Il.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, It.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, Ii.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Ir = n(339984),
    Ia = n(942132);
let Io = [{ name: "gif", extensions: ["gif"] }];
function Iu(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: i,
            sectionTitle: l,
            changeAvatarButtonText: s,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, ez.Ay)(),
        m = c ? gA.wL : s4.$n,
        A = x.useCallback(() => {
            (0, x0.XD)({
                uploadType: Ir.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Io : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(aA.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: Ia.NC,
            children: [
                (0, p.jsx)(m, {
                    className: im()({ [Ia.yj]: c }),
                    size: s4.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ia.DT,
                        children: (0, p.jsx)(j.$, {
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
var Id = n(810188);
function Ic(e) {
    let { user: t, guildId: n, className: i } = e,
        l = a_.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xB.B0)(t, n),
        [d, c] = (0, As.kn)([eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, x.useCallback)(() => {
            (c(AA.i.TAKE_ACTION),
                td.default.track(_.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eH.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, x.useCallback)(() => {
            ((0, Ii.p)({ displayNameStyles: null }), td.default.track(_.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, x.useCallback)(() => {
            (0, Ii.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(aA.A, {
        title: V.intl.string(eY.default["86GtGH"]),
        titleBadge: g
            ? (0, p.jsx)("div", { className: Id.A, children: (0, p.jsx)(AP.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Id.N,
            children: [
                (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(eY.default.vJqrIg), onClick: m }),
                null == n &&
                    null != h &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eY.default.ymq8WQ),
                        onClick: A,
                    }),
                null != n &&
                    null != h &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eY.default["j/KRxc"]),
                        onClick: E,
                    }),
            ],
        }),
    });
}
var Ig = n(637193),
    Im = n(622410);
function IA(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xB.rv)(t, n?.id),
        d = x.useCallback(() => {
            (0, Ig.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = x.useCallback(() => {
            (0, Ii.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(aA.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Im.u,
            children: [
                (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var IE = n(88524);
function Ih(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: l,
            className: s,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, ez.Ay)(),
        g = d ? gA.wL : s4.$n;
    return (0, p.jsx)(aA.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: IE.NC,
            children: [
                (0, p.jsx)(g, {
                    className: im()({ [IE.yj]: d }),
                    size: s4.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, x0.XD)({ uploadType: Ir.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: IE.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? V.intl.string(V.t.jHlJNS) : V.intl.string(V.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var IS = n(617061),
    IT = n(625613);
function If(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: i,
            className: l,
            sectionTitle: s,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, ez.Ay)(),
        d = a_.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xB.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xB.nZ)(n?.id);
    x.useEffect(() => {
        d &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t3.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, t2.uq)(t3.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gA.wL : s4.$n;
    return (0, p.jsx)(aA.A, {
        forcedDivider: r,
        borderType: ca.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, p.jsxs)("div", {
            className: IT.NC,
            children: [
                (0, p.jsx)(A, {
                    size: s4.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, IS.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: im()({ [IT.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: IT.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, Ii.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Ip = n(515727),
    Ix = n(594401);
function II(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = (0, xB.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xB.Tu)(n?.id),
        [o, u] = (0, As.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(aA.A, {
        showBorder: d,
        borderType: d ? ca.i.NEW_UPSELL : ca.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: Ix.Ad, children: (0, p.jsx)(AP.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: Ix.NC,
            children: [
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, Ip.w)({ analyticsLocations: l, guild: n }), u(AA.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ix.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, Ii.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var I_ = n(602853),
    Ib = n(654107),
    IN = n(527212),
    IC = n(101928),
    Iy = n(819169),
    Iv = n(317097),
    Ij = n(508274),
    IO = n(379012);
function ID(e) {
    let {
            onChange: t,
            onClose: n,
            color: i,
            suggestedColors: l,
            disabled: s,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = x.useRef(null),
        c = (0, I_.r)(n3.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n3.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, x0.sN)(i),
        A = (0, Iv.Hl)(i),
        E = A === c ? g : A,
        h = m ? n3.A.unsafe_rawColors.WHITE.css : n3.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, Iy.A)(a),
        T = (0, Iy.A)(o),
        [f, I] = x.useState((0, oX.A)());
    return (
        x.useEffect(() => {
            (S !== a || T !== o) && I((0, oX.A)());
        }, [o, a, T, S]),
        (0, p.jsx)(af.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(Ij.VN, {
                    ...e,
                    value: i,
                    onChange: t,
                    suggestedColors: l,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, p.jsxs)("div", {
                    ref: d,
                    className: im()(IO.oP, { [IO.r9]: s }),
                    children: [
                        (0, p.jsx)(n8.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? _.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: IO.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(ax.PencilIcon, {
                                size: "custom",
                                className: IO.BW,
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
var IR = n(190377);
function IL(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: l,
            preventDisabled: s,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, IN.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, IC.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = a_.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, I_.r)(n3.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, Ib.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(aA.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: im()(IR.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: IR.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: IR.YX,
                          children: (0, p.jsx)(ID, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n6.E, {
                                  className: IR.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: IR.YX,
                          children: (0, p.jsx)(ID, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n6.E, {
                                  className: IR.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: IR.WA,
                              children: (0, p.jsx)(j.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(V.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function IP(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, t0.GV)();
    return (0, p.jsx)(aA.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, p.jsx)(lI.k, {
            "aria-labelledby": o,
            placeholder: s ?? V.intl.string(V.t.NPEUUu),
            maxLength: 40,
            value: l ?? r,
            onChange: function (e) {
                i(e === r ? void 0 : e);
            },
            disabled: a,
            spellCheck: !1,
        }),
    });
}
var IG = n(684732),
    IM = n(576705),
    IU = n(931175);
function IV(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, I.bG)([IM.A], () => IM.A.can(_.xBc.CHANGE_NICKNAME, r) || IM.A.can(_.xBc.MANAGE_NICKNAMES, r)),
        o = (0, TR.L)(t3.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aA.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lI.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: 32,
                onChange: function (e) {
                    (0, Ii.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, p.jsx)(Ic, { user: s, guildId: r.id, className: IU.F }),
        ],
    });
}
var Ik = n(233454);
let Iw = "/assets/b25da78aa7949feb.png";
function IF(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cO.Ay)(),
        { analyticsLocations: s } = (0, ez.Ay)(tk.A.PREMIUM_UPSELL_OVERLAY);
    return (x.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: t3.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, t2.uq)(t3.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, p.jsxs)("div", {
              className: Ik.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: Ik.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: Ik.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.ASH:
                                      case _.NJ8.DARK:
                                      case _.NJ8.ONYX:
                                          return Iw;
                                      case _.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return Iw;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: Ik._9,
                              children: [
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(cr.A, {
                              size: s4.$n.Sizes.LARGE,
                              color: s4.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: a_.Ay.isPremium(t)
                                      ? V.intl.string(V.t.AfRWI8)
                                      : V.intl.string(V.t.nkdUym),
                              },
                              subscriptionTier: t3.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var IB = n(203164);
function IX() {
    let e = (0, I.bG)([sS.default], () => {
            let e = sS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, TR.L)(t3.PremiumTypes.TIER_2),
        n = (0, I.bG)([xM.A, lO.A], () => lO.A.getGuild(xM.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, I.cf)([xM.A], () => ({ ...xM.A.getPendingChanges(n.id), errors: xM.A.getErrors(n.id) })),
        d = (0, xW.V7)({ userId: e.id, image: i }),
        c = (0, x$.EC)(n.id),
        g = (0, I.bG)([xZ.Ay], () => (null == n.id ? null : xZ.Ay.getMember(n.id, e.id))),
        m = (0, I.bG)([xK.A], () => xK.A.getGuildMemberProfile(e.id, n.id)),
        A = a_.Ay.canUsePremiumProfileCustomization(e),
        E = (0, xB.z5)(i, g?.avatar),
        h = (0, xB.Ac)(s, m?.banner),
        S = (0, IG.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: IB.Q,
        children: [
            (0, p.jsx)(
                IV,
                {
                    errors: u?.nick ?? c?.nick,
                    username: dn.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                IP,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Ii.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, p.jsxs)(IF, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        Iu,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, p.jsx)(xJ.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, x0.rM)(e, g?.avatar, (e) => (0, Ii.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        Is,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, p.jsx)(xJ.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(Ic, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        IA,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(xJ.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        If,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, p.jsx)(xJ.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        II,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, p.jsx)(xJ.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        Ih,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, x0.rM)(e, m?.banner, (e) => (0, Ii.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(IL, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Ii.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        Ie,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, p.jsx)(xJ.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Ii.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: T,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var Iz = n(832131);
function IH(e) {
    (0, lx.mM)(async () => {
        let { default: t } = await Promise.all([n.e(935205), n.e(843117), n.e(596202)]).then(n.bind(n, 63473));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: _.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function IY(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, I.bG)([sS.default], () => {
            let e = sS.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, I.bG)([xZ.Ay], () => (null != t ? xZ.Ay.getMember(t.id, l.id) : null)),
        r = (0, I.bG)([xK.A], () => !xK.A.isFetchingProfile(l.id, t?.id)),
        a = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, I.cf)([xM.A], () => xM.A.getPendingChanges(t?.id)),
        c = (0, xW.V7)({ userId: l.id, image: o }),
        g = (0, xB.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xB.B0)(l, t?.id);
    return (x.useEffect(() => xw.IM, []), a)
        ? (0, p.jsx)(of.A, {})
        : r
          ? (0, p.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(_.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(am.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(xH, {
                                      profilePreviewTitle: (0, p.jsx)(N.D, {
                                          variant: "heading-sm/medium",
                                          className: Iz.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(xY.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: a_.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: IH,
                                          containerClassName: Iz.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(xF.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? Iz.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(IX, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(xQ, {}),
                ],
            })
          : (0, p.jsx)(oB.y, {});
}
var IW = n(917445),
    IK = n(641130);
function IZ(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: IK.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var Iq = n(823092),
    IQ = n(969935),
    I$ = n(379197),
    IJ = n(488430),
    I0 = n(457421),
    I1 = n(940622),
    I2 = n(559474),
    I3 = n(757993);
let I4 = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, ez.Ay)(tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = x.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, I1.mb)(I2.RN.UPSELL_BANNER)),
        (t = (0, I1.mb)(I2.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, I.bG)([I0.A], () => I0.A.getMarketingBySurface(I$.R.EDIT_PROFILE_SETTINGS))),
        (i = x.useMemo(
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
        x.useMemo(
            () => ({ ...i, type: IJ.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, Iq.L_)();
    return (
        x.useEffect(() => {
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t3.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, t2.uq)(t3.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, p.jsxs)("div", {
            ref: s,
            className: I3.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: I3.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: I3.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: I3.Em,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-lg/semibold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: I3.DD,
                            children: o,
                        }),
                        (0, p.jsx)(n6.E, {
                            variant: "body-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, IQ.Cz)({
                                analyticsLocations: l,
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
var I5 = n(451909),
    I6 = n(202639),
    I8 = n(521440),
    I7 = n(536015),
    I9 = n(423814),
    _e = n(77528),
    _t = n(590180),
    _n = n(898461),
    _i = n(469054),
    _l = n(601298),
    _s = n(207803),
    _r = n(461797);
let _a = Object.keys(_r.jB);
function _o(e) {
    let t = null == e ? _a : _a.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var _u = n(201805),
    _d = n(221650);
function _c(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, _u.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = x.useMemo(() => {
            let e = (0, _r.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: _d.kL,
        children: [
            (0, p.jsx)(n8.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: _d.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(n8.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: _d.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: _d.L_ }),
                    (0, p.jsx)(n6.E, {
                        className: _d._e,
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _g = n(511484),
    _m = n(811611),
    _A = n(206697),
    _E = n(729934);
function _h(e, t) {
    let n = _E.A.useField("scrollPosition"),
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, x.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _E.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _S = n(844222),
    _T = n(842092);
let _f = "/assets/d4955aabdcb5bdee.png",
    _p = { assetOrigin: _i.E.NEW_ASSET, imageUri: _f, staticImageUri: _f, description: "", originalAsset: void 0 };
function _x(e) {
    let { user: t } = e,
        { reducedMotion: n } = x.useContext(_S.C),
        {
            pendingAvatar: i,
            pendingBanner: l,
            pendingAvatarDecoration: s,
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
        } = (0, I.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, xW.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(xY.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _p,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _T.WX,
        containerClassName: _T.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _I = n(829497);
function __(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = a_.Ay.isPremium(t),
        s = a_.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, I.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getErrors(),
                n = xM.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, x.useState)(_o()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, x.useMemo)(() => {
                    let t = (0, _r.Wt)(e);
                    return {
                        banner: (0, _l.X)({
                            assetOrigin: _i.E.NEW_ASSET,
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
                r = (0, I.bG)([_t.A], () => {
                    let e = _t.A.getProduct(l);
                    return (0, _n.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, x.useEffect)(() => {
                (0, _s.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, x.useCallback)(() => {
                let n = _o(e);
                (t(n), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = x.useRef(null);
    _h(m, eD._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _A.T)(), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    x.useEffect(() => {
        n &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t3.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: _.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, t2.uq)(t3.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let S = (0, _e.V)()?.subscriptionTrial?.skuId === t3.pe.TIER_2,
        T = (0, I9.O)(),
        f = (0, _g.U9)(T, t3.pe.TIER_2);
    return i
        ? (0, p.jsx)(ez.f5, {
              value: A,
              children: (0, p.jsxs)(ca.A, {
                  ref: m,
                  className: _I.MT,
                  type: ca.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(xH, {
                          stickyPreview: !1,
                          layoutClassName: _I.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ac.NitroWheelIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: _I.PC,
                                  }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(_c, { preset: c, onShuffle: g }), (0, p.jsx)(_x, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-xl/semibold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(n6.E, {
                                              className: _I.h_,
                                              variant: "body-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(IL, {
                                      className: _I.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xW.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: _s.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(Ih, {
                                      className: _I.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: _s.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(Iu, {
                                          className: _I.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: _s.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(Ic, { user: t, className: _I.fz }),
                                  !S &&
                                      (0, p.jsx)(n6.E, {
                                          variant: "body-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(I6.d, {
                              onSubscribeModalClose: h,
                              className: _I.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, I7.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: l
                                  ? V.intl.string(V.t.AfRWI8)
                                  : f
                                    ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: T?.discount.amount })
                                    : V.intl.string(V.t.pj0XBN),
                              position: "inline",
                          }),
                      S &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: _I.BU }),
                                  (0, p.jsx)(_m.Ay, {
                                      type: t3.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: t3.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var _b = n(814390),
    _N = n(643056),
    _C = n(843282),
    _y = n(145497),
    _v = n(685073),
    _j = n(534400),
    _O = n(581781),
    _D = n(743981),
    _R = n(195801);
let _L = (0, t0.Ld)(),
    _P = x.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, I.cf)([sS.default], () => (0, _v.Zo)(sS.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = x.useMemo(() => {
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
                let { guildId: n, tag: i, badge: r } = l;
                return (
                    null == n ||
                        null == i ||
                        n !== s ||
                        e.has(n) ||
                        e.set(n, { id: n, name: V.intl.string(V.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = x.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(_O.A, {
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
            u = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(_y.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(_j.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _D.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "body-sm/semibold",
                          });
                },
                [r],
            ),
            c = x.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = x.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = x.useCallback((e) => e === s, [s]),
            A = x.useCallback((e) => e, []),
            E = x.useCallback(() => {
                i?.(null);
            }, [i]),
            h = x.useRef(null);
        return (
            _h(h, eD._F.GUILD_TAG),
            (0, p.jsxs)(aA.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _L,
                ref: h,
                children: [
                    (0, p.jsx)(n6.E, {
                        className: _R.VA,
                        variant: "body-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(_C.Pw, {
                        className: _R.Lt,
                        optionClassName: _R.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: A,
                        clear: E,
                        clearable: null != s,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var _G = n(318785),
    _M = n(470739);
let _U = function () {
    return (0, _N.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(aA.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, p.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _M.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _V = n(953726);
let _k = (0, t0.Ld)();
function _w(e) {
    let t = (0, TR.L)(t3.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aA.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _k,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lI.k, {
                    "aria-labelledby": _k,
                    placeholder: e.placeholder,
                    maxLength: 32,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(Ic, { user: e.user, className: _V.F }),
        ],
    });
}
var _F = n(376626);
function _B(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: _F.u,
        children: (0, p.jsx)(ne.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, xP._e)() : (0, Ii.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _X(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, I_.r)(n3.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Ib.rh)(s, r, !1),
        o = (0, Iv.LX)(a[0]);
    return (0, p.jsx)(aA.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, p.jsx)(ID, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _z = n(518477);
let _H = function () {
    let e = (0, I.bG)([oR.default], () => oR.default.getId());
    return (0, p.jsx)(aA.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, xV.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _z.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _Y = n(654910);
function _W() {
    let e = (0, I.bG)([sS.default], () => {
            let e = sS.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([xK.A], () => xK.A.getUserProfile(e.id)),
        n = (0, _N.d)({ location: "DefaultCustomizationSections" }),
        {
            pendingAvatar: i,
            pendingGlobalName: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingAccentColor: o,
            pendingThemeColors: u,
            pendingLegacyUsernameDisabled: d,
            pendingPrimaryGuildId: c,
            errors: g,
        } = (0, I.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xW.V7)({ userId: e.id, image: i }),
        A = (0, x$.EC)(),
        E = a_.Ay.canUsePremiumProfileCustomization(e),
        h = (0, xB.z5)(i, e.avatar),
        S = (0, xB.Ac)(s, t?.banner),
        T = (0, IN.Ay)(e.id),
        f = T?.getLegacyUsername(),
        x = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        b = (0, _G.b)(),
        N = null != (0, _v.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: _Y.Q,
        children: [
            (0, p.jsx)(_w, {
                placeholder: e.username,
                errors: x,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, Ii.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                IP,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Ii.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(_H, {}),
            (0, p.jsx)(
                Iu,
                {
                    onAvatarChange: (e) => {
                        ((0, Ii.p)({ avatar: e }), (0, xB.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(Is, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(IA, { user: e }),
            (0, p.jsx)(If, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, p.jsx)(II, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              Ih,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Ii.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(IL, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, Ii.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      _X,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, Ii.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                Ie,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, Ii.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (b.length > 0 || N) &&
                (0, p.jsx)(_P, {
                    availablePrimaryGuilds: b,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, Ii.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, p.jsx)(_B, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(_U, {}, "badges"),
        ],
    });
}
function _K() {
    (0, lx.mM)(async () => {
        let { default: e } = await Promise.all([n.e(935205), n.e(843117), n.e(113210)]).then(n.bind(n, 192641));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                source: {
                    page: _.liQ.USER_SETTINGS,
                    section: _.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: _.ZSU.BUTTON_CTA,
                    type: _.btD.BUY,
                },
            });
    });
}
var _Z = n(447080);
function _q() {
    let e = (0, I.bG)([sS.default], () => {
            let e = sS.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, I.cf)([xM.A], () => ({ ...xM.A.getPendingChanges(), showNotice: xM.A.showNotice() })),
        a = (0, xW.V7)({ userId: e.id, image: i }),
        o = (0, xB.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _b.A)() && null != n ? I5.Ay.parse(void 0, n).content : n,
        d = a_.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    x.useEffect(() => xP.IM, []);
    let [g, m] = x.useState(!1),
        A = !d,
        E = x.useRef(null);
    return t
        ? (0, p.jsx)(of.A, {})
        : (0, p.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, p.jsx)(I4, {}),
                  (0, p.jsx)(xH, {
                      profilePreview: (0, p.jsx)(xY.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _K,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _Z.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(xF.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _Z.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(_W, {}),
                  }),
                  (0, p.jsx)(c7.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(__, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, p.jsx)(I6.d, {
                          className: _Z.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, I7.K)({}) }),
                          textVariant: "heading-sm/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(I8.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: _Z.Xl,
                              children: (0, p.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(_.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: ac.NitroWheelIcon,
                              }),
                          }),
                      }),
              ],
          });
}
var _Q = n(188567);
n(46121);
var _$ = n(944983);
let _J = { [eD.Eq.USER_PROFILE]: "main_profile_tab", [eD.Eq.GUILD]: "guild_profile_tab" },
    _0 = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lD.A, mi.Ay, xM.A], () => {
                    let e = xM.A.selectedGuildId ?? lD.A.getGuildId();
                    return null == e || xM._.has(e) ? mi.Ay.getFlattenedGuildIds().find((e) => !xM._.has(e)) : e;
                }),
                t = (0, I.bG)([lO.A], () => lO.A.getGuild(e)),
                n = (0, I.bG)([xM.A], () => xM.A.showNotice()),
                i = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
                l = _E.A.useField("subsection");
            return (
                x.useEffect(() => {
                    (0, il._)(_J[l]);
                }, [l]),
                x.useEffect(() => {
                    null != i && t?.id != null && (0, IW.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(IZ, {
                    children: (0, p.jsxs)(uK.F, {
                        component: (0, p.jsx)(lE.A, {
                            children: (0, p.jsx)(N.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(xk.V, {
                                className: _$.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, is.fO)({ duration: 300, intensity: 1.4 }),
                                                _Q._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eD.Eq.GUILD && null != t && (0, xw.V2)(t.id),
                                            _E.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        xk.V.Item,
                                        {
                                            className: _$.YU,
                                            id: eD.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eD.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        xk.V.Item,
                                        {
                                            className: im()(_$.YU, _$.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eD.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eD.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eD.Eq.GUILD
                                ? (0, p.jsx)(IY, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, is.fO)({ duration: 300, intensity: 1.4 }),
                                                  _Q._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xw.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(_q, {}),
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
    _1 = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_0] });
var _2 = n(379633);
function _3() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gE.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: _2.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: _2.FS,
                      children: [
                          (0, p.jsx)(n6.E, {
                              color: "text-strong",
                              variant: "body-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: _2.Fk,
                              children: [
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(ax.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _4 = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [xM.A], element: xG.A },
        initialize: () => xP.F7,
        buildLayout: () => [_1],
    }),
    _5 = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _8,
        StronglyDiscouragedCustomComponent: _3,
        usePredicate: () => !(0, xU.X)("user_settings_sidebar"),
        buildLayout: () => [_4],
    }),
    _6 = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _8,
        StronglyDiscouragedCustomComponent: _3,
        usePredicate: () => (0, xU.X)("user_settings_sidebar"),
        onClick: () => {
            let e = oR.default.getId();
            (0, xV.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _8() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gE.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _7 = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_5, _6] });
var _9 = n(98207);
n(204925);
let be = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lx.mM)(
        async () => {
            let { default: t } = await Promise.all([n.e(213042), n.e(319623), n.e(121007)]).then(n.bind(n, 110744));
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u9.tE : null, onCloseCallback: t },
    );
};
var bt = n(940856),
    bn = n(506775),
    bi = n(121780),
    bl = n(871309),
    bs = n(961943);
function br() {
    let e = bi.A.getCountryCode(),
        t = null != e ? bs.q5[e.alpha2] : void 0;
    bl.A.openUrl(eC.A.getArticleURL(t ?? bs.GF));
}
var ba = n(484051);
function bo() {
    return (0, ba.a)(bs.LI);
}
var bu = n(124616);
function bd() {
    let e = bo(),
        t = (0, bn.ZP)();
    if (!e) return null;
    switch (t) {
        case bn.M$.ADULT:
            return V.intl.format(bu.default.gi4ulu, { handleOnAgeGatedContentHook: bn.M0 });
        case bn.M$.TEEN:
            return V.intl.format(bu.default["221iML"], {
                handleOnAgeGatedContentHook: bn.M0,
                handleOnConfirmAgeHook: bn.aP,
            });
        case bn.M$.UNVERIFIED:
            return V.intl.format(bu.default["W0/7DD"], {
                handleOnAgeGatedContentHook: br,
                handleOnConfirmAgeHook: bn.aP,
            });
    }
}
var bc = n(26137),
    bg = n(957485);
function bm() {
    let e = bo(),
        t = (0, bn.ZP)();
    return e
        ? {
              icon: t === bn.M$.ADULT ? bc.UserCircleIcon : bg.ShieldUserIcon,
              backgroundColor: n3.A.colors.BACKGROUND_MOD_SUBTLE,
          }
        : null;
}
function bA() {
    let e = bm();
    return null != e ? { type: f.hp.ICON, ...e } : null;
}
function bE() {
    return bo() ? V.intl.string(V.t.piqs0o) : null;
}
var bh = n(160808);
let bS = [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    bT = [];
function bf() {
    return (0, bh.Wt)() ? bS : bT;
}
var bp = n(36149),
    bx = n(207560),
    bI = (((m = {}).LEGACY = "legacy"), (m.AGE_NOTICE = "ageNotice"), m),
    b_ = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function bb(e, t) {
    let n = (0, I.bG)([sS.default], () => null != sS.default.getCurrentUser()),
        i = (0, bx.fk)(),
        l = (0, bn.ZP)(),
        s = (0, bp.Y2)(),
        r = bo();
    if (!n || (!i && !r) || t !== (r ? "ageNotice" : "legacy")) return !1;
    switch (l) {
        case bn.M$.UNVERIFIED:
            return "verify" === e;
        case bn.M$.TEEN:
            return e === (r ? "info" : "verify");
        case bn.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var bN = n(664188);
function bC() {
    let e = (0, bn.hD)();
    return (0, p.jsxs)(n6.E, {
        variant: "body-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(bN.default.WM5adV, { handleOnHelpUrlHook: bn.M0 })],
    });
}
let by = {
        useTitle: () => bE() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: bd,
        useVariant: () => "secondary",
        useLeadingDecoration: bA,
        getDismissibleBadges: bf,
        useTrailingDecoration: () => ({
            type: f.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: bC,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lx.mM)(async () => {
                let { default: e } = await n.e(145361).then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    bv = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...by, usePredicate: () => bb(b_.EDIT, bI.LEGACY) }),
    bj = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...by,
        usePredicate: () => bb(b_.EDIT, bI.AGE_NOTICE),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    bO = {
        useTitle: () => bE() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: bd,
        useLeadingDecoration: function () {
            let e = bm();
            return null != e ? { type: f.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: bf,
        useTrailingDecoration: () => ({ type: f.Ln.TEXT, text: (0, bn.hD)() }),
    },
    bD = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...bO, usePredicate: () => bb(b_.INFO, bI.LEGACY) }),
    bR = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...bO,
        usePredicate: () => bb(b_.INFO, bI.AGE_NOTICE),
    }),
    bL = {
        useTitle: () => bE() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: bd,
        useVariant: () => "secondary",
        useLeadingDecoration: bA,
        getDismissibleBadges: bf,
        useTrailingDecoration: () => ({ type: f.fq.TEXT, text: (0, bn.hD)() }),
        useLabel: function () {
            return (0, bp.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: bn.aP,
    },
    bP = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...bL, usePredicate: () => bb(b_.VERIFY, bI.LEGACY) }),
    bG = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...bL,
        usePredicate: () => bb(b_.VERIFY, bI.AGE_NOTICE),
    }),
    bM = [bP, bv, bD],
    bU = [bG, bj, bR],
    bV = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: f.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => be(),
    });
function bk(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function bw(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function bF(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = x.useState(!1),
        a = s ? t : n(t);
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(n6.E, { variant: "body-md/medium", children: a }),
            (0, p.jsx)(Sm.Q, {
                variant: "primary",
                textVariant: "body-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function bB() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(n6.E, { variant: "body-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, p.jsx)(bF, {
              text: e,
              censor: bw,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let bX = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: f.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: bB }),
    useLabel: function () {
        return null == (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.email)
            ? V.intl.string(V.t["pvBD+W"])
            : V.intl.string(V.t["8peUT0"]);
    },
    onClick: function () {
        (0, lx.mM)(async () => {
            let { default: e } = await Promise.all([n.e(279385), n.e(420577), n.e(553207)]).then(n.bind(n, 162282));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var bz = n(557722),
    bH = n(53516);
function bY() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(n6.E, { variant: "body-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, p.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(bF, {
                  text: t,
                  censor: bk,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let bW = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: f.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: bY }),
    useLabel: function () {
        return null == (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    onClick: function () {
        null == sS.default.getCurrentUser()?.phone
            ? (0, lx.mM)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e(590275),
                          n.e(766806),
                          n.e(989545),
                          n.e(757786),
                          n.e(84704),
                          n.e(286197),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, p.jsx)(e, { reason: bz.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: bH.V },
              )
            : (0, lx.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(911837), n.e(840933)]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function bK() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function bZ() {
    let e = (0, x$.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(n6.E, { variant: "body-md/medium", children: i }),
            null != t &&
                (0, p.jsx)(lA.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(i1.CircleErrorIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n3.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let bq = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: f.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: bZ,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (bK() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: bK,
        onClick: function () {
            (0, lx.mM)(async () => {
                let { default: e } = await Promise.all([n.e(745281), n.e(329995), n.e(820969)]).then(n.bind(n, 667792));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    bQ = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, I.bG)([sS.default], () => null != sS.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: f.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: V.intl.string(V.t.tuGzBT),
                            text: V.intl.string(V.t.NAzplE),
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, bt.S)(e) },
                        }
                  : {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => be() },
                    };
        },
        buildLayout: () => [bq, bV, bX, bW, ...bM],
    });
var b$ = n(398177);
let bJ = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lx.qf)((e) => (0, p.jsx)(b$.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var b0 = n(200921);
let b1 = [];
function b2() {
    b1 = [];
}
class b3 extends I.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return b1;
    }
}
let b4 = new b3(ts.h, {
    LOGOUT: b2,
    LOGIN_SUCCESS: b2,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        b1 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...b1],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        b1 = n;
    },
});
function b5() {
    let e = (0, I.cf)([b4], () => b4.getSessions());
    return x.useMemo(() => {
        let t = [...e],
            n = null,
            i = oR.default.getAuthSessionIdHash();
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
function b6(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : iE()(e).fromNow();
}
var b8 = n(176524),
    b7 = n(646270),
    b9 = n(738678),
    Ne = n(489828);
function Nt(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(b8.A, { icon: t, color: r ? n3.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(n6.E, { variant: "body-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(n6.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(n6.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(n6.E, { variant: "body-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function Nn(e) {
    let { session: t, current: n } = e,
        {
            location: i,
            platform: l,
            os: s,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let n = e.client_info?.location ?? e.client_info?.ip,
                i = e.client_info?.platform,
                { text: l, icon: s } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: V.intl.string(V.t.cDHCNY), icon: dW.ScreenIcon };
                        case "ios":
                        case "android":
                            return { text: e, icon: b7.MobilePhoneIcon };
                        case "horizon os":
                            return { text: e, icon: b9.VrHeadsetIcon };
                        default:
                            return { text: e, icon: dW.ScreenIcon };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : b6(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(id.Vq);
    return (0, p.jsx)(Nt, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n8.D, {
                className: Ne.X,
                onClick: () => (0, b0.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, p.jsx)(dd.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
    });
}
function Ni(e) {
    let { title: t, children: n } = e,
        i = x.useId();
    return (0, p.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(N.D, { id: i, variant: "heading-sm/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let Nl = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = b5();
            return null == e
                ? (0, p.jsx)(oB.y, {})
                : (0, p.jsx)(Ni, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, p.jsx)(Nn, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Ns = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = b5();
            return (0, p.jsx)(lc.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, p.jsx)(j.$, {
                    onClick: () => (0, b0.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = b5();
            return e.length > 0;
        },
    });
var Nr = n(766928);
function Na() {
    return (0, p.jsx)(Nt, {
        icon: Nr.LaptopPhoneIcon,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, ng.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let No = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = b5(),
                t = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
            return (0, p.jsxs)(Ni, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(Nn, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(Na, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = b5(),
                t = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Nu = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, b0.GY)();
        },
        buildLayout: () => [Nl, No, Ns],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    Nd = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: of.L,
        buildLayout: () => [Nu],
    }),
    Nc = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [Nd],
        initialize: () => {
            (0, b0.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = b5(),
                n = t.length + +(null != e);
            return {
                type: f.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var Ng = n(464477);
function Nm(e) {
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
function NA() {
    return (0, oa.bG)([sS.default], () => {
        let e = sS.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var NE =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function Nh() {
    let e = (0, oa.bG)([sS.default], () => sS.default.getCurrentUser()?.verified);
    return Ng.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function NS() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oa.bG)([lO.A, IM.A, sS.default], () =>
        sS.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lO.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        IM.A.can(_.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var NT = n(466034),
    Nf = n(705147);
let Np = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => NS(!0),
        useDisabled: () => null !== NS(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, I.bG)([oR.default], () => oR.default.hasTOTPEnabled()),
                t = Nh() === NE.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            (async function () {
                let e = (await (0, Nf.k)("totp")) ? V.t.xlA7Tl : V.t.EA4ZEk;
                (0, n4.A)({
                    title: V.intl.string(V.t["D+aE7g"]),
                    subtitle: V.intl.string(e),
                    variant: "critical",
                    confirmText: V.intl.string(V.t.N86XcP),
                    onConfirm: () => _9.A.disable(),
                });
            })(),
    }),
    Nx = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([oR.default], () => oR.default.hasTOTPEnabled()),
                t = Nh() === NE.AVAILABLE;
            if (!e && t)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: NT.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Nh()) {
                case NE.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case NE.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case NE.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [Np],
    });
var NI = n(670492),
    N_ = n(32880),
    Nb = n(658675),
    NN = n(900686);
function NC() {
    (0, lx.mM)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _9.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lx.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e(514567), n.e(96179)]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, p.jsx)(e, { ...n, password: t });
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
var Ny = n(858487);
function Nv(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Nj() {
    let e = NI.A.getVerificationKey();
    if ("" === e) return void NC();
    try {
        await _9.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sm.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function NO(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Nv(t),
        l = x.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Nb.P, { checked: n }), (0, p.jsx)(n6.E, { variant: "body-md/normal", children: i })],
        });
    return uZ.p5
        ? (0, p.jsx)(n8.D, {
              tag: "li",
              className: im()(Ny.aY, Ny.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uZ.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uZ.C)(i), (0, sm.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: Ny.aY, children: s });
}
let ND = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, I.bG)([NI.A], () => NI.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: NA,
        buildLayout: () => [NR],
    }),
    NR = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, I.bG)([NI.A], () => NI.A.getBackupCodes()),
                t = x.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Nv(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: NC })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: Ny.E5,
                              children: e.map((e) => (0, p.jsx)(NO, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(s6.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(NN.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: N_.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: hd.RefreshIcon,
                                      onClick: Nj,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    NL = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = x.useState(!1),
                n = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(Sm.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lx.mM)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: _9.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    NP = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, I.bG)([sS.default], () => Nm(sS.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
                t = (0, I.bG)([sS.default], () => null != Nm(sS.default.getCurrentUser()));
            if (!e)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: NG,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Nh(),
                t = NA(),
                n = (0, I.bG)([oR.default], () => oR.default.hasTOTPEnabled());
            return e === NE.AVAILABLE && t && n;
        },
        buildLayout: () => [NL],
    });
function NG() {
    let e = sS.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: bz.d.USER_SETTINGS_UPDATE, onAddedPhone: _9.A.enableSMS }),
                (0, lx.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(590275),
                            n.e(766806),
                            n.e(989545),
                            n.e(757786),
                            n.e(84704),
                            n.e(286197),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, p.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: bH.V },
                ));
        } else _9.A.enableSMS();
}
var NM = n(665671),
    NU = n(442433),
    NV = n(917136),
    Nk = n(976910),
    Nw = n(267255);
function NF(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: Nw.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n6.E, { variant: "body-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(n6.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: b6(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lg.K, {
                icon: mo.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, NU.L3)(e, async () => {
                        let { default: e } = await n.e(32529).then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let NB = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (Nh() === NE.AVAILABLE)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iK.PlusSmallIcon,
                            onClick: NM.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Nh()) {
                    case NE.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: f.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case NE.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: f.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case NE.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NX],
    }),
    NX = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, I.cf)([Nk.A], () => ({
                hasFetchedCredentials: Nk.A.hasFetchedCredentials(),
                credentials: Nk.A.getCredentials(),
            }));
            return (x.useEffect(() => {
                t || NV.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(NF, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oB.y, {});
        },
    }),
    Nz = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [NB, Nx, NP, ND],
    }),
    NH = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = NA();
            return { type: f.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nz],
    }),
    NY = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [bJ, NH, Nc],
    }),
    NW = { [bn.M$.ADULT]: bu.default.PMznGO, [bn.M$.TEEN]: bu.default.qSkhZH, [bn.M$.UNVERIFIED]: bu.default.vGxRDB },
    NK = [eE.M.TINY_BRONCO_NOTICE],
    NZ = [];
function Nq() {
    bl.A.openUrl(bs.M1);
}
var NQ = n(308645),
    N$ = n(881979),
    NJ = n(37380);
let N0 = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NJ.A,
    }),
    N1 = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [N0] }),
    N2 = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [N1],
    }),
    N3 = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: N$.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, N$._k)();
            return { type: f.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: f.xn.TEXT, text: (0, N$.aO)() };
        },
        initialize: () => {
            NQ.Yn();
        },
        buildLayout: () => [N2],
    }),
    N4 = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (bo() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, bh.LH)(),
                t = (0, bn.ZP)(),
                [n, i] = (0, As.kn)(e ? NK : NZ);
            return e && null != n
                ? {
                      type: f.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(NW[t], { handleOnBlogHook: Nq }),
                      onDismiss: () => i(AA.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...bU, N3],
    });
var N5 = n(738188),
    N6 = n(834981),
    N8 = n(987197),
    N7 = n(822585),
    N9 = n(840387),
    Ce = n(281906),
    Ct = n(665956);
let Cn = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: Ce.p,
        useSearchTerms: () => [
            V.intl.string(Ct.default.RZqaJn),
            V.intl.string(Ct.default.bdBmqy),
            V.intl.string(Ct.default["gVWG+6"]),
            V.intl.string(Ct.default.ahKIJO),
            V.intl.string(Ct.default["8SLtqb"]),
        ],
    }),
    Ci = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Cn] }),
    Cl = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(Ct.default.RZqaJn),
        buildLayout: () => [Ci],
    }),
    Cs = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(Ct.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, N8.f)(),
                t = (0, N7.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, N6.VT)();
            return x.useMemo(() => (n ? { badgeType: f.Xi.WARNING } : { badgeType: f.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Cr],
    }),
    Cr = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, N6.Li)() ? V.intl.string(Ct.default.IcMQUP) : V.intl.string(Ct.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, N9.Z)(),
                t = (0, N6.Li)();
            return e
                ? t
                    ? V.intl.string(Ct.default.G8lHFU)
                    : V.intl.string(Ct.default.uOLNEZ)
                : V.intl.string(Ct.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, N8.f)(),
                t = (0, N7.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: f.Xy.ICON,
                      icon: N5.WarningIcon,
                      color: n3.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n3.A.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
                  };
        },
        buildLayout: () => [Cl],
    });
var Ca = n(425587),
    Co = n(662758);
function Cu(e) {
    if (e.body.code === _.t02.INVALID_PASSWORD) throw e;
    (0, s3.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function Cd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sS.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Ca.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s3.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lO.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s3.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, lx.qf)((t) =>
                  (0, p.jsx)(Co.default, {
                      ...t,
                      handleSubmit: (t) => (0, xP.U_)(t, e).then(_.tEg, Cu),
                      title: e ? V.intl.string(V.t.xca2ts) : V.intl.string(V.t.goXv9g),
                      actionText: e ? V.intl.string(V.t["8lQ2rR"]) : V.intl.string(V.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? V.intl.string(V.t.FB4H1D) : V.intl.string(V.t.gk7h32),
                  }),
              )
            : (0, n4.A)({
                  title: V.intl.string(V.t.xca2ts),
                  subtitle: V.intl.string(V.t.FB4H1D),
                  confirmText: V.intl.string(V.t["8lQ2rR"]),
                  onConfirm: () => (0, xP.U_)("", !0),
              });
}
let Cc = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Cd(!0),
    }),
    Cg = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Cd(!1),
        usePredicate: () => {
            let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Cm = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Cg, Cc] }),
    CA = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_9.A.clearBackupCodes(), (0, xP.Uo)());
            };
        },
        useObscuredNotice: of.L,
        buildLayout: () => [bQ, NY, N4, Cs, Cm],
    }),
    CE = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: Er.UserIcon,
        buildLayout: () => [CA],
    });
var Ch = n(254138),
    CS = n(290595),
    CT = n(677166),
    Cf = n(410310),
    Cp = n(405018),
    Cx = n(137005);
let CI = "user_settings_data_usage",
    C_ = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cx.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cx.default.V0EPTo, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, CT.Zd)(CI),
            useValue: () => !(0, Cf.p)().optedOut,
            setValue: (e) => {
                Cf.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, Cf.p)().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cx.default.Z9bKIJ, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CT.ws)(CI, { autoTrackExposure: !1 }) || Cp.A.isLocked()
                    ? []
                    : [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var Cb = n(153488),
    CN = n(171316),
    CC = n(327919),
    Cy = n(558001);
n(866945);
var Cv = n(835002);
function Cj() {
    let e = (0, CN.uM)(),
        t = (0, N6.vx)(),
        n = x.useCallback(() => {
            ((0, CC.A)(t, tH.default, () =>
                (0, sm.P0)({
                    text: V.intl.formatToPlainString(Ct.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, Cy.N)(Cv.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cv.YX.LEARN_MORE));
        }, [t]),
        i = x.useCallback(() => {
            (0, Cy.N)(Cv.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cv.YX.VIEWED);
        }, []);
    return x.useMemo(() => {
        if (e)
            return {
                type: f.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(Ct.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CO = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string((0, p1.H)() ? p6.default["IxZyA+"] : V.t.AGDDkH),
    useSubtitle: () => V.intl.string((0, p1.H)() ? p6.default.GjNXmw : V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => p4.eQ({ allowVoiceRecording: e }),
});
var CD = n(157559),
    CR = n(331887);
function CL() {
    let e = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
        t = (0, I.bG)([CR.A], () => CR.A.harvestType),
        [n, i] = x.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = x.useRef(null);
    return (x.useEffect(() => {
        let e = l - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            (clearTimeout(s.current), (s.current = t));
        }
        return () => clearTimeout(s.current);
    }, [l]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : l > n
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(l) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let CP = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = CL();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: eC.A.getArticleURL(_.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return V.intl.string(V.t.hIbRso);
                case "not_verified":
                    return V.intl.format(V.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, p.jsx)(
                                n8.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, ng.openUserSettings)(S.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = iE()(e.nextAllowed).format("MMMM Do YYYY");
                    return V.intl.format(V.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                tl.Bo.get({ url: _.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CL().allowed,
        useLoading: () => (0, I.bG)([CR.A], () => CR.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => V.intl.string(V.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lx.mM)(async () => {
                        let { default: e } = await n.e(292063).then(n.bind(n, 970018));
                        return (n) => (0, p.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xP.$I)(n)
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
                                            ? CD.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : CD.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        CD.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    CG = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, ng.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ng.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var CM = n(641216);
let CU = (0, oG.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function CV() {
    let { enabled: e } = CU.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Ck = n(884705);
function Cw() {
    return (0, I.bG)([Ck.A], () => Ck.A.isTogglesDisabled());
}
function CF() {
    return !U.vf.useSetting();
}
function CB(e) {
    U.vf.updateSetting(!e);
}
function CX() {
    let e = Cw(),
        t = U.H1.useSetting(),
        n = (0, CN.uM)();
    return e || t || n;
}
let Cz = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !CV(),
        useValue: CF,
        setValue: CB,
        useDisabled: CX,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    CH = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CV,
        useValue: CF,
        setValue: CB,
        useDisabled: CX,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function CY() {
    return !U.H1.useSetting();
}
function CW(e) {
    U.H1.updateSetting(!e);
}
function CK() {
    let e = Cw(),
        t = (0, CN.uM)();
    return e || t;
}
let CZ = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !CV(),
        useValue: CY,
        setValue: CW,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CK,
    }),
    Cq = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CV,
        useValue: CY,
        setValue: CW,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: CK,
    }),
    CQ = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sw(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = SF();
            return { type: f.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, I.bG)([i8.Ay], () => i8.Ay.getGamesSeen(!1).some((e) => !(0, SP.n1)(e))) && (0, nx.xl)(),
    }),
    C$ = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CQ] });
var CJ = n(972737);
let C0 = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, I.bG)([Cb.A], () => Cb.A.hasConsented(_.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CS.U)([_.YAq.USAGE_STATISTICS], []).catch(CJ.i)
                : (0, CJ.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, CS.U)([], [_.YAq.USAGE_STATISTICS]).catch(CJ.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: CN.uM,
    }),
    C1 = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: Cj,
        initialize: () => {
            Cb.A.fetchedConsents || (0, CS.Q)();
        },
        buildLayout: () => [CG, C0, CM._, CZ, Cz, ...C_, CO, CP, C$],
    });
var C2 = n(870549);
let C3 = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(C2.default.F3llsQ),
    useSubtitle: () => V.intl.string(C2.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: SH.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function C4() {
    let e = U.JG.useSetting();
    return (0, I.yK)(
        [mi.Ay, lO.A],
        () => {
            let t = new Set(e);
            return mi.Ay.getFlattenedGuildIds().filter((e) => null != lO.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let C5 = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = C4();
            if (0 === e.length) return V.intl.format(V.t.QJIJ5p, {});
            let t = lO.A.getGuild(e[0]),
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
                    ((e = C4()),
                    0 ===
                    (t = (0, I.yK)(
                        [lO.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lO.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: { icon: (0, p.jsx)(S6, { guild: t[0], size: 48 }), shape: SG.e.SQUIRCLE },
                                backIcon: { icon: (0, p.jsx)(S6, { guild: t[1], size: 48 }), shape: SG.e.SQUIRCLE },
                            }
                          : { frontIcon: { icon: (0, p.jsx)(S6, { guild: t[0], size: 48 }), shape: SG.e.SQUIRCLE } });
            return { type: f.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    C6 = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [C5] }),
    C8 = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, S0.gS)(t, e);
            null != i &&
                (0, lx.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(462955), n.e(562041), n.e(763786)]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, p.jsx)(e, {
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
    C7 = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [C8, C3, C6],
    });
var C9 = n(952270),
    ye = n(609649);
let yt = { [e$.tR.REAL_MONEY_GAMING]: ye.default.pmIitA },
    yn = Object.keys(yt).map(Number),
    yi = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(ye.default.foQaI1)],
        usePredicate: CV,
        Component: function () {
            let e = x.useMemo(
                    () =>
                        yn.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(yt[e]),
                            leading: C9.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, p.jsx)(pB.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of yn) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(ye.default.foQaI1),
                description: V.intl.format(ye.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(ye.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    yl = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(ye.default.XUj46U),
        usePredicate: CV,
        buildLayout: () => [Cq, CH, yi],
    });
var ys = n(714763),
    yr = n(814278),
    ya = n(597798),
    yo = n(627784),
    yu = n(977997),
    yd = n(144485);
async function yc(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, yr.to)(1), t?.());
        } catch (t) {
            let e = new yo.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                CD.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
n(603266);
let yg = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, yr.Lu)() }),
    useValue: function () {
        return (0, I.bG)([ys.A], () => ys.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        !(async function (e) {
            let t,
                n,
                i =
                    ((t = yu.A.getVoiceStateForUser(oR.default.getId())),
                    (n = lv.A.getChannel(t?.channelId)),
                    oR.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                        ? n.id
                        : null);
            null != i
                ? yd.A.openSecureFramesUpdateConfirmation({
                      title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
                      subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
                      confirmText: V.intl.string(V.t.aTuFYT),
                      onConfirm: async () => {
                          await yc(e, () => {
                              (ya.default.disconnect(), ya.default.selectVoiceChannel(i));
                          });
                      },
                  })
                : await yc(e);
        })(e);
    },
});
var ym = n(787392);
function yA() {
    return (0, I.yK)([ym.A], () => ym.A.getUserIds());
}
var yE = n(966327),
    yh = n(774156);
function yS(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        l = (0, I.bG)([sS.default], () => sS.default.getUser(t)),
        s = dn.Ay.getFormattedName(l),
        r = x.useCallback(() => {
            (0, yr.kj)(t);
        }, [t]),
        a = x.useCallback(() => (0, xV.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        x.useEffect(() => {
            (0, E$.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: yh.uW,
            children: [
                null != l && (0, p.jsx)(yE.A, { className: yh.my, user: l, size: v._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: yh.Qq,
                    children: [
                        (0, p.jsx)(n8.D, {
                            className: yh.Xh,
                            onClick: a,
                            children: (0, p.jsx)(n6.E, {
                                variant: "body-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, p.jsx)(n6.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(n8.D, { onClick: r, className: yh.Qz, children: (0, p.jsx)(lm.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yT(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, yr.tC)(i.timestamp),
        r = x.useCallback(() => {
            (0, yr.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: yh.Qq,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, p.jsx)(n6.E, { variant: "body-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, p.jsx)(n8.D, {
                className: yh.Kk,
                onClick: r,
                children: (0, p.jsx)(dd.XSmallIcon, { size: "md", color: n3.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yf(e) {
    let { userId: t } = e,
        n = (0, I.yK)([ym.A], () =>
            K()(ym.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(yS, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    x.Fragment,
                    {
                        children: [
                            (0, p.jsx)(yT, { className: yh.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: yh.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yp = n(464946),
    yx = n(492422);
let yI = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = yA();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yA();
            return (0, p.jsxs)(yp.h, {
                children: [
                    (0, p.jsx)(yp._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, yr.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: yx.A, children: (0, p.jsx)(yf, { userId: e }) }, e)),
                ],
            });
        },
    }),
    y_ = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.xl)(),
        buildLayout: () => [yg, yI],
    }),
    yb = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [C1, yl, C7, y_],
    }),
    yN = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: Ch.ShieldLockIcon,
        buildLayout: () => [yb],
    });
var yC = n(476713);
let yy = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yv = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yy] });
var yj = n(875444);
function yO(e, t) {
    let n = (0, I.bG)([TO.A], () => TO.A.getFetchState()),
        i = (0, I.bG)([TO.A], () => (e ? TO.A.getNewestTokensForNonChildrenApplications() : TO.A.getNewestTokens())),
        l = x.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yj.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        x.useEffect(() => {
            t || Th.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== TO.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var yD = n(514479);
function yR() {
    return (0, p.jsxs)("div", {
        className: yD.d,
        children: [
            (0, p.jsx)(n6.E, {
                variant: "body-md/medium",
                color: "text-strong",
                className: yD.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, p.jsx)(n6.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yL = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yO(!0, !0);
        return e ? (0, p.jsx)(oB.y, {}) : (0, p.jsx)(yR, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yO(!0, !0);
        return e || 0 === t.length;
    },
});
function yP() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yO(!0, !0);
    return !e && t.length > 0;
}
let yG = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yP,
    }),
    yM = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yP,
    });
function yU() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yO(!0, !0);
    return {
        sortedGames: x.useMemo(() => e.toSorted((e, t) => oV.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yV = n(171576);
function yk(e) {
    let { body: t, button: n, noticeType: i } = e;
    return (
        (0, e_.Ay)(() => {
            (0, Cy.N)(i, Cv.YX.VIEWED);
        }),
        (0, p.jsx)(iq.w, { type: "info", message: t, action: n, role: "none" })
    );
}
function yw(e, t) {
    return x.useCallback(() => {
        (t(), (0, Cy.N)(e, Cv.YX.LEARN_MORE));
    }, [e, t]);
}
function yF(e, t) {
    return {
        handleLearnMore: yw(e, t),
        handleConfirmAge: x.useCallback(() => {
            (bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cy.N)(e, Cv.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yB() {
    let e,
        t = (0, CN.uM)(),
        n = (0, bx.fk)(),
        i = (0, bp.b8)(),
        l = (0, N9.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, ba.x)(bs.LI)) return e;
    }
}
var yX = n(687123),
    yz = n(444802);
function yH() {
    let e = (0, yz.WX)();
    x.useEffect(() => {
        (0, Cy.N)(Cv.YA.AGE_CONFIRMATION_NOTICE, Cv.YX.VIEWED);
    }, []);
    let t = x.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cy.N)(Cv.YA.AGE_CONFIRMATION_NOTICE, Cv.YX.LEARN_MORE));
        }, [e]),
        n = x.useCallback(() => {
            (bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cy.N)(Cv.YA.AGE_CONFIRMATION_NOTICE, Cv.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(iq.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nc.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yY() {
    let e = (0, bx.aX)(yX.t.REACTIVE_CHECK),
        t = (0, bp.b8)();
    return x.useMemo(() => {
        if (e && !t) return { type: f.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yH };
    }, [e, t]);
}
var yW = n(323073),
    yK = n(386171),
    yZ = n(96607);
let yq = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yK.hT,
        useDisabled: function () {
            let e = (0, yZ.A)() ?? !0,
                t = (0, yW.sP)(),
                n = (0, bp.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yW.p5)() && e
                ? bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yQ = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yK.tI,
        useDisabled: function () {
            let e = (0, yZ.A)() ?? !0,
                t = (0, yW.sP)(),
                n = (0, bp.yM)();
            return x.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yW.p5)() && e
                ? bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    y$ = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yJ = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [y$] });
n(667532);
var y0 = n(390248),
    y1 = n(632119),
    y2 = n(945276),
    y3 = n(389737),
    y4 = n(523009);
function y5() {
    let e,
        t = (0, y2.A)() ?? !0,
        n = (0, CN.uM)(),
        i = (0, CN.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oa.cf)([aL.A], () => aL.A.settings.textAndImages?.explicitContentSettings ?? (0, y1.C$)())),
        {
            explicitContentGuilds: (0, y1.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, y1.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, y1.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, y0.hK)() && t.includes(e$.TO.SHOW)
            ? bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, y1.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(Ct.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(y3.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(Ct.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function y6() {
    let e,
        t = (0, y2.A)() ?? !0,
        n = (0, CN.uM)(),
        i = (0, CN.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, oa.cf)([aL.A], () => aL.A.settings.textAndImages?.goreContentSettings ?? (0, yz.T4)())),
        {
            goreContentGuilds: (0, yz.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yz.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yz.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, y0.hK)() && t.includes(e$.TO.SHOW)
            ? bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yz.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: e$.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(Ct.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(y3.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(y4.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(Ct.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y8 = n(875162),
    y7 = n(636745);
let y9 = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yz.WX)(),
            t = x.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: y5,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: y6,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(yp.h, {
            children: [
                (0, p.jsx)(yp._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(y8.A, { tabs: t, orientation: "vertical", tabsClassName: y7.v }),
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
var ve = n(639555),
    vt = n(617641),
    vn = n(546140),
    vi = n(406935),
    vl = n(594061);
let vs = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(_.MVz.SAFETY_ALERTS) }),
        useValue: vn.L,
        setValue: function (e) {
            return vl.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = vi._t.create({ value: e });
                },
                vl.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, vt.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, ve.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, y2.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    vr = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3upKU8"]),
        useInlineNotice: function () {
            var e;
            let t,
                n,
                i,
                l,
                s,
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
                S = Cj(),
                T =
                    ((l = (0, CN.uM)()),
                    (s = (0, bx.fk)()),
                    (r = (0, bp.b8)()),
                    (a = (0, N9.Z)()),
                    (o = yF(Cv.YA.AGE_CONFIRMATION_NOTICE, br)),
                    (u = yw(Cv.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, bn.M0)),
                    (d = x.useCallback(() => {
                        (0, Cy.N)(Cv.YA.AGE_CONFIRMATION_NOTICE, Cv.YX.VIEWED);
                    }, [])),
                    (c = x.useCallback(() => {
                        (0, Cy.N)(Cv.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cv.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (!l && (0, ba.x)(bs.LI)) {
                            if (s && !r)
                                return {
                                    type: f.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(bu.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(bu.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: f.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(bu.default.HBnyJM, { handleOnAgeGatedContentHook: u }),
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                I =
                    ((e = (0, N9.Z)()),
                    (t = (0, yz.WX)()),
                    (n = x.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cy.N)(Cv.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cv.YX.LEARN_MORE));
                    }, [t])),
                    (i = x.useCallback(() => {
                        (0, Cy.N)(Cv.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cv.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (e)
                            return {
                                type: f.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: V.intl.format(V.t.EUo0yj, {
                                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, bx.SJ)()),
                    (m = (0, bp.b8)()),
                    (A = g && !m),
                    (E = x.useCallback(() => {
                        (bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cy.N)(Cv.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cv.YX.LEARN_MORE));
                    }, [])),
                    (h = x.useCallback(() => {
                        (0, Cy.N)(Cv.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cv.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (A)
                            return {
                                type: f.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: V.intl.format(V.t.OX4ybh, {
                                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                b = yY();
            return S ?? T ?? b ?? _ ?? I;
        },
        buildLayout: () => [y9, vs, yq, yQ, yJ],
    });
var va = n(923457),
    vo = n(750714);
let vu = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, I.bG)([sS.default], () => sS.default.getCurrentUser()),
                i = (0, bx.yv)(va.p.SPAM_FILTERS);
            return e !== e$.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? e$.he.FRIENDS_AND_NON_FRIENDS
                  : (vo.xY.get(t) ?? e$.he.NON_FRIENDS);
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
    }),
    vd = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return x.useMemo(() => (0, is.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? 14 : 14 & ~_.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, CN.uM)();
        },
    }),
    vc = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, is.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uj.UI(t, _.dzt.MUTUAL_FRIENDS) : uj.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CN.uM)();
        },
    }),
    vg = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, is.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uj.UI(t, _.dzt.MUTUAL_GUILDS) : uj.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CN.uM)();
        },
    }),
    vm = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [vd, vc, vg],
    });
var vA = n(420825);
let vE = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, vA.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    vh = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: Cj,
        buildLayout: () => [vm, vE],
    });
var vS = n(994500),
    vT = n(49229),
    vf = n(730134),
    vp = n(276573);
function vx(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: vp.wx,
        children: [
            (0, p.jsx)("div", {
                className: vp.zc,
                children: i ? (0, p.jsx)(xI.DenyIcon, {}) : (0, p.jsx)(C9.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: vp.Qq,
                children: [
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(n6.E, {
                        variant: "body-md/medium",
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
function vI(e) {
    let { userId: t, last: n } = e,
        i = (0, I.bG)([vS.A], () => vS.A.isBlocked(t)),
        l = (0, I.bG)([sS.default], () => sS.default.getUser(t)),
        [s, r] = x.useState(!1),
        a = x.useCallback(() => {
            (r(!0),
                i
                    ? vT.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : vT.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: im()(vp.nM, { [vp.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: vp.eF,
                      children: [
                          (0, p.jsx)(vf.A, { user: l, size: v._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: vp.Qq,
                              children: [
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, p.jsx)(n6.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      text: V.intl.string(i ? V.t.XyHpKH : V.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function v_(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = x.useState(5);
    return (0, p.jsx)(yp.h, {
        children: (0, p.jsxs)("div", {
            className: vp.Nr,
            children: [
                (0, p.jsx)(vx, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: vp.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(vI, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: vp.vM,
                          children: (0, p.jsx)(n8.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: vp.Qf,
                              children: (0, p.jsx)(n6.E, {
                                  variant: "body-sm/semibold",
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
let vb = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, I.bG)([vS.A], () => vS.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vS.A], () => vS.A.getBlockedIDs());
            return (0, p.jsx)(v_, { userIds: e, listType: "blocked" });
        },
    }),
    vN = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, I.bG)([vS.A], () => vS.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vS.A], () => vS.A.getIgnoredIDs());
            return (0, p.jsx)(v_, { userIds: e, listType: "ignored" });
        },
    }),
    vC = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [vb, vN],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, I.cf)([vS.A], () => ({
                hasBlockedUsers: vS.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: vS.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var vy = n(22385),
    vv = n(556534),
    vj = n(111159),
    vO = n(152056),
    vD = n(428031),
    vR = n(978433);
let vL = { label: () => V.intl.string(V.t["32u1Dx"]), value: "0" };
var vP = n(307863),
    vG = n(954225);
function vM() {
    return (0, vP.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function vU(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vV = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vM,
    useSubtitle: function () {
        let e = (0, vv.Tx)(),
            t = (0, vv.q9)(),
            n = (0, vP.e)();
        return "0" === e
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
        let e = (0, vv.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, vD.K)();
        return "0" === e ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, CN.uM)();
        return "0" === (0, vv.Tx)() && e;
    },
    setValue: function (e) {
        let t = vy.xk.getState().selectedGuildId;
        if ("0" === t) {
            var n;
            ((n = !e),
                (0, CJ.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s4.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), vU(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lO.A.getGuildIds() : []), vU(n, !0));
                    },
                }));
        } else {
            let n = (0, is.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vG.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eD.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var vk = n(116774),
    vw = n(953298);
function vF(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vB() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vX = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vB,
        useSubtitle: function () {
            let e = (0, vv.q9)(),
                t = eC.A.getArticleURL(_.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, vv.Tx)(),
                t = (0, vD.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, vk.s)(),
                l = (0, CN.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || ("0" === e && l ? !s : "0" === e ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, vv.Tx)(),
                t = (0, CN.uM)(),
                n = (0, vD.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, vk.s)();
            return "0" === e ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = vy.xk.getState().selectedGuildId;
            if (!e && (0, vw.w)())
                return void bl.A.showAgeVerificationGetStartedModal({ entryPoint: yV.q1.MESSAGE_REQUESTS_SETTINGS });
            if ("0" === t) {
                var n;
                ((n = !e),
                    (0, CJ.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s4.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vF(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lO.A.getGuildIds() : []), vF(n, !0));
                        },
                    }));
            } else {
                let n = (0, is.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vG.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eD.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vz = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vM(), vB()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, vy.xk)(),
                l = (0, I.bG)([mi.Ay], () => mi.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lO.A], () => lO.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, vD.K)()),
                    (0, I.bG)(
                        [lO.A],
                        () => {
                            let n = new Set(e);
                            return lO.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            x.useEffect(
                () =>
                    vO.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = vy.xk.getState().selectedGuildId;
                            "" === t && "" !== e && "0" === n && null != a ? i(a) : "" === e && "0" !== n && i("0");
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = x.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...vL,
                        id: vL.value,
                        label: vL.label(),
                        leading: (0, p.jsx)("div", {
                            className: vR.KP,
                            children: (0, p.jsx)(vj.ClydeIcon, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: vR.cl,
                            }),
                        }),
                    }),
                    l.forEach((t) => {
                        let n = s[t];
                        null != n &&
                            e.push({
                                id: n.id,
                                label: n.name,
                                value: n.id,
                                leading: (0, p.jsx)(mE.Ay, {
                                    className: vR.cl,
                                    guild: n,
                                    size: mE.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [l, s]);
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pB.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    "0" === n &&
                        r > 0 &&
                        (0, p.jsx)(n6.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            className: vR.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
                                        n6.E,
                                        { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    vH = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, vv.Tx)(),
                t = yB();
            return "0" === e && null != t;
        },
        Component: function () {
            let e = yB(),
                t = yF(Cv.YA.AGE_CONFIRMATION_NOTICE, br),
                n = yw(Cv.YA.CONTENT_AND_SOCIAL_NOTICE, bn.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(yk, {
                        noticeType: Cv.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(bu.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        button: { text: V.intl.string(bu.default["cI+bc/"]), onClick: t.handleConfirmAge },
                    });
                case "teen":
                    return (0, p.jsx)(yk, {
                        noticeType: Cv.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(bu.default["5KHq55"], { handleOnAgeGatedContentHook: n }),
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vY = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = Cj(),
                t = yY();
            if ("0" === (0, vv.Tx)()) return e ?? t;
        },
        buildLayout: () => [vz, vV, vX, vH],
    }),
    vW = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [vu] }),
    vK = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yU();
            function t(e, t) {
                return (0, p.jsx)(
                    n6.E,
                    { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
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
                let { sortedGames: e } = yU();
                return x.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: 48,
                                height: 48,
                            }),
                            shape: SG.e.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: 40,
                                    height: 40,
                                }),
                                shape: SG.e.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: f.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            Th.A.fetch();
        },
        buildLayout: () => [yG, yM, yL, yv],
    }),
    vZ = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [vr, vW, vY, vh, vK, vC],
    }),
    vq = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yC.ChatShieldIcon,
        buildLayout: () => [vZ],
    });
var vQ = n(782603),
    v$ = n(899847),
    vJ = n(695515);
let v0 = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
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
    v1 = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, ng.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    v2 = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, I.bG)([aX.A], () => aX.A.getTTSType()),
        setValue: (e) => aK.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: _.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: _.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: _.aVn.NEVER },
            ];
        },
        usePredicate: () => Y.$j,
    }),
    v3 = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    v4 = (0, h.bd)(v3, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tI(v3, {
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
        buildLayout: () => [v0, v1, v2],
    }),
    v5 = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [v4],
    }),
    v6 = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, I.bG)([aX.A], () => !aX.A.getDisableUnreadBadge());
        },
        setValue: (e) => aK.default.setDisableUnreadBadge(!e),
    }),
    v8 = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [v6],
    });
var v7 = n(840559),
    v9 = n(997187);
let je = (0, oG.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var jt = n(723923);
let jn = jt.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, I.cf)([v9.A], () => v9.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, v7.CA)(e.category, t),
        }),
    ),
    ji = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, I.cf)([v9.A], () => v9.A.getEmailSettings());
            return jt.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, v7.NI)(),
        useVariant: () => "critical-secondary",
    }),
    jl = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = je.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = v9.A.getEmailSettings();
            e || (0, v7.cR)();
        },
        buildLayout: () => [...jn, ji],
    }),
    js = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, I.bG)([aX.A], () => aX.A.getDesktopType()) !== _.nRU.NEVER;
        },
        setValue: (e) => aK.default.setDesktopType(e ? _.nRU.ALL : _.nRU.NEVER),
    });
var jr = n(832712),
    ja = n(543465),
    jo = n(790782);
let ju = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, I.bG)([ja.Ay], () => ja.Ay.useNewNotifications),
    setValue: function (e) {
        (jr.A.setAccountFlag(SH.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hq.w.set("turnedOffNewNotifications", !0),
                td.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lO.A.getGuildsArray().filter(
                        (e) => ja.Ay.resolveGuildUnreadSetting(e) === jo.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, I.bG)(
            [sS.default, ja.Ay],
            () =>
                sS.default.getCurrentUser()?.isStaff() ||
                sS.default.getCurrentUser()?.isStaffPersonal() ||
                ja.Ay.useNewNotifications,
        ),
});
var jd = n(534654);
let jc = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, I.bG)([aX.A], () => aX.A.screenDowntimeReminder),
        setValue: (e) => aK.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, jd.A)(),
                t = (0, N6.Du)();
            return e && t;
        },
    }),
    jg = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, jd.A)(),
                t = (0, N6.Du)();
            return e && t;
        },
    }),
    jm = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    jA = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    jE = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    jh = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var jS = n(815807);
let jT = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, jS.n4)(e, U.Zp.getSetting()),
    }),
    jf = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    jp = (0, oG.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    jx = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SH.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => jp.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    jI = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [jE, jm, jA, jf, jx, jh, jT],
    }),
    j_ = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, I.bG)([aX.A], () => aX.A.taskbarFlash),
        setValue: (e) => aK.default.setTaskbarFlash(e),
        usePredicate: () => (0, nx.uF)(),
    }),
    jb = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [js, j_, jI, ju, jg, jc],
    });
var jN = n(965957),
    jC = n(312671),
    jy = n(235079);
let jv = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = az.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, I.bG)([jC.A], () => jC.A.getSoundpack()),
            t = az.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = az.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, jN.p)(e ? t : jy.i.CLASSIC));
    },
    usePredicate: az.A.useIsEligible,
});
var jj = n(970931);
let jO = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: jj.kB,
        useDisabledMessage: () => ((0, jj.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    jD = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    jR = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aQ("message3") }),
        useValue: () =>
            (0, I.bG)([aX.A], () => aX.A.getNotifyMessagesInSelectedChannel() && !aX.A.getDisableAllSounds()),
        setValue: (e) => aK.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, I.bG)([aX.A], () => aX.A.getDisableAllSounds()),
    }),
    jL = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, I.bG)([aX.A], () => aX.A.getDisableAllSounds()),
        setValue: (e) => aK.default.toggleDisableAllSounds(e),
    }),
    jP = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aq();
            };
        },
        buildLayout: () => [a$(jO), jR, a$(jD), jL],
    }),
    jG = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    jM = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [jG] }),
    jU = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [jv, jP, jM],
    }),
    jV = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vJ.A.getAgeGroup() || vJ.A.isLoading() || (vJ.A.canRefetch() && v$.Ay.initialPageLoad());
        },
        buildLayout: () => [jb, jU, v8, jl, v5],
    }),
    jk = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vQ.BellIcon,
        buildLayout: () => [jV],
    }),
    jw = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [CE, yN, vq, jk],
    });
var jF = n(387758),
    jB = n(271866),
    jX = n(147964),
    jz = n(868511);
let jH = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, I.bG)([jX.A], () => null != jX.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lx.qf)((e) => (0, p.jsx)(jz.A, { ...e })) : jB.cL();
        },
    }),
    jY = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uZ.p5,
    }),
    jW = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jY, jH] }),
    jK = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [jW] }),
    jZ = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: jF.AngleBracketsIcon,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jK],
    });
var jq = n(70688),
    jQ = n(830215);
let j$ = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jq.DoorExitIcon,
        onClick: () => {
            (0, n4.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jQ.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jJ = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [jZ, j$],
    }),
    j0 = (0, h.Hr)({ buildLayout: () => [_7, jw, ho, oS, xL, SR, jJ], analyticsKey: "user_settings" });
