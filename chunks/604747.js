n.d(t, { D: () => jW });
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
    N = n(346055),
    b = n(534514),
    C = n(95362),
    y = n(97808),
    v = n(778712),
    j = n(821609),
    O = n(775602),
    R = n(432005),
    D = n(963852),
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
    return (0, R.rh)({ ...(0, D.Ay)({ channelId: w.id, content: e }), state: _.cmJ.SENT, reactions: t });
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
    J = n(113494),
    $ = n(782134),
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
            icon: e ? J.PauseIcon : $.PlayIcon,
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
    eN = n(839214),
    eb = n(502229),
    eC = n(975571);
let ey = (0, eN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
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
        usePredicate: () => (0, eb.D)(),
    }),
    ej = (0, h.zZ)(S.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => V.intl.string(V.t.JqvyiY),
        buildLayout: () => [eI, ec, eh, em, ev, ef, ex, ep, eA, eu],
    });
var eO = n(397438),
    eR = n(355097),
    eD = n(571674);
function eL(e) {
    return (0, I.bG)([eO.A], () =>
        (function (e) {
            switch (e) {
                case eR._A.REDUCED_MOTION:
                    return V.intl.format(V.t["1dT9V4"], {});
                case eR._A.REDUCED_MOTION_STICKERS:
                    return V.intl.string(V.t["2ExvRu"]);
                case eR._A.GAME_MODE:
                    return V.intl.string(eD.default.VGcdxP);
                default:
                    return;
            }
        })(eO.A.getAppliedOverrideReasonKey(e)),
    );
}
function eP(e) {
    return (0, I.bG)([eO.A], () => eO.A.getAppliedOverrideReasonKey(e) === eR._A.GAME_MODE);
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
var eJ = n(873298);
let e$ = (0, h.Qx)(S.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => V.intl.string(V.t["C/5V0A"]),
        useSubtitle: () => V.intl.string(V.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: V.intl.string(V.t["7iegX4"]), value: eJ.NS.COMPACT },
            { name: V.intl.string(V.t.bBvAEH), value: eJ.NS.DEFAULT },
            { name: V.intl.string(V.t["4cuYHx"]), value: eJ.NS.COZY },
        ],
        useValue: () => U.Xi.useSetting(),
        setValue: (e) => {
            e !== eJ.NS.UNSET_UI_DENSITY && U.Xi.updateSetting(e);
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
function e5(e) {
    return `${e.toFixed(0)}px`;
}
let e4 = (0, h.sN)(S.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => V.intl.string(V.t.Q6lKkg),
    useSubtitle: () => V.intl.string(V.t.p7eUrb),
    markers: e3.qh,
    stickToMarkers: !0,
    minValue: e3.qh["0"],
    maxValue: e3.qh[e3.qh.length - 1],
    useDefaultValue: () => 16 * !U.hH.useSetting(),
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
        buildLayout: () => [e$, e2, e4, e7],
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
                return (0, p.jsx)(N.M, {
                    children: (0, p.jsxs)("section", {
                        "aria-label": V.intl.string(V.t.RC22qg),
                        children: [
                            (0, p.jsx)(b.D, {
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
let tN = (0, h.zD)(S.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tb = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    tC = (0, h.zD)(S.X.ENABLE_SEND_BUTTON, tb),
    ty = (0, h.zD)(S.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tb,
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
    tR = (0, h.zD)(S.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, I.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tD = (0, h.Qx)(S.X.EXPRESSION_PICKER_FORMAT, {
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
        buildLayout: () => [tD, tv, tj, tO, tR],
    }),
    tP = (0, h.bd)(S.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.IwVGQs) : V.intl.string(V.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tI(S.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, t_.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tC, tN, tL],
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
    tY = n(576254),
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
var tJ = n(785007),
    t$ = n(848971),
    t0 = n(915089),
    t1 = n(739053),
    t2 = n(82498),
    t3 = n(682901);
let t5 = (0, h.E2)(S.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT)],
    Component: function () {
        let e = (0, t0.GV)(),
            { ref: t, ...n } = (0, tJ._u)({ orientation: "horizontal", labelledBy: e }),
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
                    children: (0, p.jsx)(t$.m, { disabled: i, size: tK.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t4() {
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
                        onClick: t4,
                    }),
                    e && t.push({ id: "upsell-button", type: f.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t6 }),
                    { type: f.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t5, tQ],
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
var nN = n(77729),
    nb = n(589051),
    nC = n(415173),
    ny = n(999834);
let nv = [],
    nj = (0, h.Hn)(S.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ny.b_)(),
                t = (0, nb.Mn)("StreamerModeSettings");
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
    nR = (0, h.zD)(S.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, I.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    nD = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_SOUNDS, {
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
        usePredicate: () => nN.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nG = (0, h.FW)(S.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.xYhOEh),
        buildLayout: () => [nO, nR, nD, nL, nP, nj],
    }),
    nM = (0, h.zZ)(S.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.S5GfOW),
        buildLayout: () => [n_, nI, nG],
    });
var nU = n(850333),
    nV = n(141343),
    nk = n(665267),
    nw = n(414133),
    nF = n(557441);
let nB = (0, h.Hn)(S.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => V.intl.string(V.t.Q7mm4g),
        useSearchTerms: () => [V.intl.string(nF.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: V.intl.string(V.t["hrS/Pc"]), value: eJ.tI.GUILD },
            { id: "personal", label: V.intl.string(V.t.mlvXIq), value: eJ.tI.PERSONAL },
        ],
        useValue: () => U.zY.useSetting(),
        setValue: U.zY.updateSetting,
        usePredicate: () => (0, nw.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nX = (0, h.zD)(S.X.SYNC_PROFILE_THEMES, {
        useTitle: () => V.intl.string(V.t.C00w4l),
        useValue: () => (0, I.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ed.M1)(),
    });
var nz = n(817281),
    nH = n(284016),
    nY = n(413599);
let nW = (0, h.zD)(S.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => V.intl.string(V.t["/B+kEV"]),
    useSearchTerms: () => [V.intl.string(V.t.Ksh3ik)],
    useValue: function () {
        return (0, I.bG)([nH.A], () => !1 !== nH.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, I.bG)([nY.A], () => nY.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nY.A.theme,
            i = nU.A.gradientPreset?.id ?? null,
            l = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = _.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nz.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nK = n(714907);
let nZ = (0, h.AK)(S.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.nhVQDJ),
        useSearchTerms: () => [V.intl.string(V.t.nhVQDJ)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    nq = (0, h.gN)(S.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nZ] }),
    nQ = (0, h.zZ)(S.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, I.bG)([O.Ay], () => O.Ay.useForcedColors)
                ? {
                      type: f.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eb.D)()
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
        buildLayout: () => [nK.k, nW, nX, nB, nq],
    }),
    nJ = (0, h.t_)(S.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [nQ, t8, nh, tF, np, nM, tm],
    }),
    n$ = [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    n0 = (0, h.i4)(S.X.APPEARANCE_SIDEBAR_ITEM, {
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
        getDismissibleBadges: () => n$,
        buildLayout: () => [nJ],
    });
var n1 = n(37646),
    n2 = n(172471);
let n3 = (0, h.t_)(S.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [n2.F],
    }),
    n5 = (0, h.i4)(S.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n1.LanguageIcon,
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [n3],
    });
var n4 = n(3137),
    n6 = n(646514),
    n8 = n(314116),
    n7 = n(270003),
    n9 = n(834730),
    ie = n(939249),
    it = n(369606),
    ii = n(320448),
    il = n(604121),
    is = n(725951),
    ir = n(400492),
    ia = n(669067),
    io = n(115063),
    iu = n(415677),
    id = n(927018),
    ic = n(591563),
    ig = n(532197),
    im = n(403362),
    iA = n(874486),
    iE = n(503698),
    ih = n.n(iE),
    iS = n(536637),
    iT = n.n(iS),
    ip = n(5377),
    ix = n(906688),
    iI = n(98705);
function i_(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, id.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = iT()(n),
        m = null != o && l,
        A = m ? ie.D : "div";
    return (0, p.jsxs)(A, {
        className: ih()(iI.kL, m && iI.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: iI.zc,
                children: (0, p.jsx)(ix.A, { achievementId: t, size: ix.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, p.jsxs)("div", {
                className: iI.VW,
                children: [
                    null != n &&
                        (0, p.jsx)(n9.E, {
                            variant: "footnote/semibold",
                            color: "text-muted",
                            className: iI.YR,
                            children: (0, ip.mk)(g),
                        }),
                    (0, p.jsx)(n9.E, { variant: "body-md/medium", color: d, children: s() }),
                    (0, p.jsx)(n9.E, { variant: "body-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iN = n(545744);
function ib(e) {
    let { onBackClick: t } = e,
        n = (0, I.bG)([iA.A], () => iA.A.getAllUnlockedAchievements()),
        i = x.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = x.useMemo(
            () =>
                Object.values(id.l0)
                    .filter(im.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(ie.D, {
                onClick: t,
                className: iN.vv,
                children: [
                    (0, p.jsx)(ig.A, { direction: ig.A.Directions.LEFT, className: iN.Kk }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: V.intl.string(V.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: iN.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: iN.if,
                        children: [
                            (0, p.jsx)(b.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: V.intl.string(V.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(n9.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: V.intl.string(V.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: iN.nr,
                        children: (0, p.jsx)(it.TrophyIcon, {
                            size: "custom",
                            color: n6.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, p.jsx)("div", {
                    className: iN.yF,
                    children: (0, p.jsx)("div", {
                        className: iN.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, p.jsx)(i_, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, p.jsxs)("div", {
                    className: iN.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: iN.if,
                            children: (0, p.jsx)(n9.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: V.intl.string(V.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: iN.Eh,
                            children: l.map((e) => (0, p.jsx)(i_, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: iN.yF, children: (0, p.jsx)("div", { className: iN.F3 }) }),
        ],
    });
}
var iC = n(224964),
    iy = n(31408),
    iv = n(368588);
let ij = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iO = (0, W.range)(0, 11),
    iR = (0, W.range)(0, 2.25, 0.25),
    iD = (0, W.range)(1, 11),
    iL = (0, W.range)(1, 26),
    iP = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iG(e) {
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
    return (0, p.jsx)(n7.n, { label: V.intl.string(V.t.bWVN1D), children: s });
}
function iM(e) {
    let { children: t } = e;
    return (0, p.jsx)(n9.E, { className: iv.iF, variant: "body-sm/normal", color: "text-default", children: t });
}
function iU(e) {
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
            (e || (0, iu._)(id.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n8.A)({
                          title: l ? V.intl.string(V.t["FxT+p0"]) : V.intl.string(V.t.TAZ4F9),
                          subtitle: l ? V.intl.string(V.t.gmixrx) : V.intl.string(V.t.jN3t3K),
                          confirmText: V.intl.string(V.t.JFfins),
                          onConfirm: () => i(l ? ij : { enabled: !0, warningSeen: !0 }),
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
                confettiSize: l,
                confettiEnabledLocations: s,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, p.jsxs)(n7.n, {
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
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, p.jsx)(iM, { children: V.intl.string(V.t.a18Sug) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.vd0D81),
                        disabled: a,
                        marks: iD,
                        snapToMarks: !0,
                        minValue: iD[0],
                        maxValue: iD[iD.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, p.jsx)(iM, { children: V.intl.string(V.t.xoldVn) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.sPO3ij),
                        disabled: a,
                        marks: iL,
                        snapToMarks: !0,
                        minValue: iL[0],
                        maxValue: iL[iL.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(iG, {
                disabled: a,
                locations: [
                    {
                        location: iy.k.CHAT_INPUT,
                        title: V.intl.string(V.t.elTtyz),
                        description: V.intl.string(V.t.HtKfMi),
                    },
                    {
                        location: iy.k.REACTION,
                        title: V.intl.string(V.t.Ik4VIa),
                        description: V.intl.string(V.t.y4rqK0),
                    },
                    {
                        location: iy.k.MEMBER_USER,
                        title: V.intl.string(V.t.ZXBlAn),
                        description: V.intl.string(V.t["m9RD+c"]),
                    },
                    {
                        location: iy.k.CALL_TILE,
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
function ik(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, p.jsxs)(n7.n, {
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
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, p.jsx)(iM, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.L0oQuh),
                        disabled: r,
                        marks: iO,
                        snapToMarks: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => s({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iw(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, p.jsxs)(n7.n, {
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
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iv.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, p.jsx)(iM, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.UxnnC4),
                        disabled: a,
                        marks: iR,
                        snapToMarks: !0,
                        minValue: iR[0],
                        maxValue: iR[iR.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, iu._)(id.sn.MORE),
                                s(t, 1));
                        },
                        formatValue: (e) => (e === iR[iR.length - 1] ? V.intl.string(V.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(iG, {
                disabled: a,
                locations: [
                    {
                        location: iy.uD.CHAT_INPUT,
                        title: V.intl.string(V.t.vUcvPP),
                        description: V.intl.string(V.t.y00OrF),
                    },
                    {
                        location: iy.uD.VOICE_USER,
                        title: V.intl.string(V.t.TcRO54),
                        description: V.intl.string(V.t.YJCxVY),
                    },
                    {
                        location: iy.uD.MENTION,
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
function iF(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(n7.n, {
        label: V.intl.string(V.t.EuXv2q),
        children: (0, p.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iv.hw,
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
function iB(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(ie.D, {
        onClick: function () {
            return t(1);
        },
        className: iv.Tq,
        children: [
            (0, p.jsx)("div", {
                className: iv.w1,
                children: (0, p.jsx)(it.TrophyIcon, { size: "md", color: n6.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: iv.qL,
                children: [
                    (0, p.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: V.intl.string(V.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(ii.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: iv.nT,
            }),
        ],
    });
}
function iX() {
    return n
        .e(504660)
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iz(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, I.cf)([n4.A], () => n4.A.getState()),
        [l, s] = x.useState({ x: 0, y: 0 }),
        r = (0, iC.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
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
            ((s = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? s) && (u ?? o));
        0 === t && A && r.fire(l.x, l.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, io.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
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
                (0, p.jsx)(iU, { settings: i, updateSettings: a }),
                (0, p.jsx)(iB, { onChangePage: t }),
                (0, p.jsx)(ik, { settings: i, updateSettings: a }),
                (0, p.jsx)(iw, { settings: i, updateSettings: a }),
                (0, p.jsx)(iV, { settings: i, updateSettings: a }),
                (0, p.jsx)(iF, { updateSettings: a }),
            ],
        })
    );
}
function iH(e) {
    return 0 === e ? is.f.LEFT : is.f.RIGHT;
}
let iY = (0, h.E2)(S.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = x.useState(0),
                [n, i] = x.useState(iH(e)),
                [l, s] = x.useState(!1),
                r = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
                a = l && !r;
            return (
                x.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iH(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                x.useEffect(() => {
                    (0, ia._)(iP[e]);
                }, [e]),
                x.useEffect(() => {
                    Math.random() > 0.99 && (0, iu._)(id.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(is.A, {
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
                                        return (0, p.jsx)(iz, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, p.jsx)(ib, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? iv.Sr : iv.IP,
                            children: (0, p.jsx)(il.a, {
                                className: iv.gT,
                                importData: iX,
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
    iW = (0, h.zZ)(S.X.POGGERMODE_CATEGORY, { buildLayout: () => [iY] });
var iK = n(212043);
let iZ = (0, h.t_)(S.X.POGGERMODE_PANEL, { useTitle: () => V.intl.string(V.t.AtCukI), buildLayout: () => [iW] }),
    iq = (0, h.i4)(S.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: n(724405), className: iK.$ }),
        usePredicate: () => (0, I.bG)([n4.A], () => n4.A.settingsVisible),
        buildLayout: () => [iZ],
    });
var iQ = n(307301),
    iJ = n(410767),
    i$ = n(683071),
    i0 = n(97260),
    i1 = n(50258),
    i2 = n(57757),
    i3 = n(188321),
    i5 = n(695366),
    i4 = n(812729),
    i6 = n.n(i4),
    i8 = n(587895),
    i7 = n(429913),
    i9 = n(616356),
    le = n(644727);
function lt(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function ln() {
    let e = (0, I.bG)([i9.A], () => i9.A.getStreamerActiveStreamMetadata()),
        t = (0, I.bG)(
            [le.Ay],
            () => {
                let e = le.Ay.getVisibleGame();
                return null != e ? le.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i6(),
        ),
        [n] = (0, i7.A)([lt(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var li = n(769015),
    ll = n(754712),
    ls = n(526919),
    lr = n(435075);
function la(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, p.jsx)("div", {
              className: lr.zc,
              children: (0, p.jsx)(i5.CircleErrorIcon, { size: "sm", color: n6.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: lr.nt,
              children: [
                  (0, p.jsx)(li.A, { game: n, pid: t.pid, size: li.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: lr.Am,
                      children: (0, p.jsx)(i5.CircleErrorIcon, {
                          size: "sm",
                          color: n6.A.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function lo(e) {
    let t = (0, I.bG)([ll.Ay], () => ll.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = ln();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, ls.NP)(),
        s = l && null != n && t === _.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function lu(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = lo(n);
    return i
        ? (0, p.jsxs)("div", {
              className: ih()(lr.kL, t),
              children: [
                  (0, p.jsx)(la, { game: l, application: s }),
                  (0, p.jsxs)("div", {
                      className: lr.FS,
                      children: [
                          (0, p.jsx)(n9.E, {
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != l
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(n9.E, {
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
                          (0, ls.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var ld = n(404778),
    lc = n(579370),
    lg = n(532624),
    lm = n(691885),
    lA = n(452027),
    lE = n(408278),
    lh = n(241326),
    lS = n(866665),
    lT = n(140735),
    lf = n(489718),
    lp = n(827343),
    lx = n(368484),
    lI = n(350535),
    l_ = n(189213),
    lN = n(192308),
    lb = n(95477),
    lC = n(128376),
    ly = n(290676);
let lv = [];
var lj = n(235986),
    lO = n(320264),
    lR = n(734057),
    lD = n(808728),
    lL = n(71393),
    lP = n(967198),
    lG = n(926140),
    lM = n(847893);
function lU() {}
let lV = [lG.rD.VOICE_CHANNEL];
function lk(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lw() {
    return (0, p.jsx)("div", {
        className: lM.i1,
        children: (0, p.jsx)(n9.E, {
            variant: "body-md/medium",
            color: "text-muted",
            className: lM.GN,
            children: V.intl.string(V.t.zHjCd1),
        }),
    });
}
function lF(e) {
    let { keybind: t, className: n } = e,
        i = x.useRef(t);
    x.useEffect(() => {
        i.current = t;
    });
    let [l, s] = x.useState(t.params?.channelId ?? void 0),
        r = x.useCallback(() => {
            (0, lN.mM)(
                async () => (e) =>
                    (0, p.jsx)(lB, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), i0.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: ih()(lM.a8, n),
        children: (0, p.jsx)(lA.D, {
            label: V.intl.string(V.t.q4JpM8),
            children: (0, p.jsxs)(lj.A, {
                align: lj.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lM.$X, children: (0, p.jsx)(lX, { channelId: l }) }),
                    (0, p.jsx)(lj.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lB(e) {
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
                [a, o] = x.useState(lv),
                u = x.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lv) : o(e);
                }, []);
            x.useEffect(
                () =>
                    lC.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = x.useState(() => new ly.A(u, n, void 0, i));
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
        })({ visible: !0, autocompleterResultTypes: lV, autocompleterBeforeCreateSearchContext: lk }),
        c =
            ((t = "" !== o),
            (n = (0, I.yK)(
                [lD.A, lR.A, lP.A],
                () => {
                    let e = lP.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lD.A.getVocalChannelIds(e)) {
                        let e = lR.A.getChannel(t);
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
            if (e?.type === lG.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lG.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lR.A.getChannel(n.parent_id) : void 0,
                              r = lL.A.getGuild(n.guild_id);
                          return (0, p.jsx)(
                              lO.c3,
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
                                      null != r ? (0, p.jsx)("div", { className: lM.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(lw, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(l_.a, {
        transitionState: i,
        onClose: l,
        title: V.intl.string(V.t.Dm8O4e),
        subtitle: V.intl.string(V.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lb.k, {
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
                                if (e?.type === lG.rD.VOICE_CHANNEL) return e.record;
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
function lX(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, I.cf)([lR.A, lL.A], () => {
            let e = null != t ? lR.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lR.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lL.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, p.jsx)(n9.E, {
              variant: "body-md/medium",
              color: "text-muted",
              className: lM.GN,
              children: V.intl.string(V.t["/fYIK7"]),
          })
        : (0, p.jsx)(lO.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lU,
              onFocus: lU,
              onMouseEnter: lU,
              focused: !1,
              children: null != l ? (0, p.jsx)("div", { className: lM.J5, children: l.name }) : null,
          });
}
var lz = n(650583),
    lH = n(731854),
    lY = n(94451);
function lW(e) {
    let { keybind: t } = e,
        n = (0, I.bG)([lg.Ay], () => lg.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([lg.Ay], () => lg.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? lg.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, lc.Rg)(i)
                      ? (0, p.jsx)("div", {
                            className: lY.$e,
                            children: (0, p.jsx)(i$.w, {
                                type: "info",
                                message: V.intl.format(V.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, p.jsx)("div", {
                        className: lY.$e,
                        children: (0, p.jsx)(i$.w, {
                            type: "warning",
                            message: V.intl.string(V.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, p.jsx)("div", {
                  className: lY.$e,
                  children: (0, p.jsx)(i$.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" }),
              })
        : null;
}
function lK(e) {
    let { keybind: t } = e,
        n = lI.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, p.jsx)("div", {
              className: lY.$e,
              children: (0, p.jsx)(i$.w, { type: "warning", message: V.intl.string(V.t["7lQlw3"]), role: "status" }),
          })
        : lz.Yy.has(n)
          ? (0, p.jsx)("div", {
                className: lY.$e,
                children: (0, p.jsx)(i$.w, {
                    type: "warning",
                    message: V.intl.format(V.t.MOIaNd, {
                        keyboardNavArticle: eC.A.getArticleURL(_.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function lZ(e) {
    let { keybind: t } = e;
    return t.action === _.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lF, { keybind: t, className: lY._M }) : null;
}
let lq = x.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = x.useCallback((e) => i0.A.setKeybind({ ...t, action: e }), [t]),
        s = x.useCallback(
            (e) => {
                if (
                    ((0, lc.uL)(t.id, t.shortcut, e, lg.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === _.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? lH.x.DEFAULT;
                    lp.default.setMode(ll.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                i0.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = x.useCallback(() => i0.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = x.useCallback(() => i0.A.deleteKeybind(t.id), [t.id]),
        o = x.useId(),
        u = x.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, p.jsxs)("div", {
        className: lY.f_,
        children: [
            (0, p.jsx)(lK, { keybind: t }),
            (0, p.jsx)(lW, { keybind: t }),
            (0, p.jsx)("div", {
                className: lY.XI,
                children: (0, p.jsx)(lm.l, {
                    selectionMode: "single",
                    label: V.intl.string(V.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: lY.LE,
                children: (0, p.jsx)(lA.D, {
                    label: V.intl.string(V.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(lx.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: lY.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(lE.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lh.TrashIcon,
                            "aria-label": V.intl.string(V.t.qEHmmB),
                        }),
                    (0, p.jsx)(lS.m, {
                        text: V.intl.string(t.enabled ? V.t.pNYGbx : V.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(lT.A, {
                                    id: o,
                                    children: V.intl.format(t.enabled ? V.t["myr/Y0"] : V.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(lf.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(n9.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                className: lY.h_,
                children: n[t.action],
            }),
            (0, p.jsx)(lZ, { keybind: t }),
        ],
    });
});
var lQ = n(158781),
    lJ = n(734066),
    l$ = n(880144),
    l0 = n(994778),
    l1 = n(244055),
    l2 = n(603933);
function l3() {
    let e = (0, I.bG)([lg.Ay], () => lg.Ay.isWaylandPortalActive()),
        t = x.useMemo(() => e && (0, lc.u)(), [e]);
    return e
        ? (0, p.jsx)(i$.w, {
              type: "info",
              message: V.intl.string(V.t.AcH7R7),
              role: "none",
              action: t ? { text: V.intl.string(V.t.ZPHaPE), onClick: lc.qM } : void 0,
          })
        : null;
}
let l5 = function () {
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
            } = ((e = (0, I.bG)([lg.Ay], () => lg.Ay.getState())),
            (t = (0, I.bG)([ll.Ay], () => (0, l$.A)(ll.Ay))),
            (n = (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.VIDEO))),
            (i = (0, I.bG)([l1.A], () => l1.A.isSupported)),
            (l = (0, lJ.sw)()),
            (s = (0, lJ.BW)()),
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
                            ((0, e8.uF)() || ll.Ay.getUseSystemScreensharePicker()) &&
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
                            return { id: t, value: n, label: (0, l0.B)(n) ?? n };
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
                      (0, p.jsx)(l3, {}),
                      (0, p.jsx)(n9.E, {
                          variant: "body-sm/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.vyYgWp),
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(l3, {}),
                      (0, p.jsx)("div", {
                          className: l2.A,
                          children: a.map((e, t) =>
                              (0, p.jsxs)(
                                  x.Fragment,
                                  {
                                      children: [
                                          (0, p.jsx)(lq, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, p.jsx)(ld.c, { className: l2.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    l4 = (0, h.E2)(S.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["069nVT"])],
        Component: function () {
            return nx.Av
                ? (0, p.jsx)(l5, {})
                : (0, p.jsx)(i$.w, {
                      type: "info",
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: _.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var l6 = n(475358),
    l8 = n(552992),
    l7 = n(793650);
function l9(e) {
    let { children: t } = e;
    return t([lQ.Q_.MESSAGE, lQ.Q_.NAVIGATION, lQ.Q_.DND, lQ.Q_.CHAT, lQ.Q_.VOICE_AND_VIDEO, lQ.Q_.MISCELLANEOUS]);
}
function se(e) {
    let { showHeader: t = !0 } = e,
        n = K()((0, lQ.Bx)())
            .filter((e) => e.description !== V.intl.string(V.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, p.jsx)(n7.n, {
                label: t ? V.intl.string(V.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: l7.jh,
                    children: (0, p.jsxs)("div", {
                        className: l7.yZ,
                        children: [
                            (0, p.jsx)(n9.E, { variant: "body-md/normal", children: V.intl.string(V.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: l7.DM,
                                children: (0, p.jsx)(l6.e, { shortcut: l8.z.binds["0"], className: l7.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l9, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lQ.Gm)(e),
                                l = (0, lQ.zF)(e),
                                s = n[e];
                            return (0, p.jsx)(
                                n7.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, p.jsx)("div", {
                                        className: l7.jh,
                                        children: s.map((e, t) =>
                                            (0, p.jsxs)(
                                                x.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(ld.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: l7.yZ,
                                                            children: [
                                                                (0, p.jsx)(n9.E, {
                                                                    variant: "body-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: l7.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            l6.e,
                                                                            { shortcut: e, className: l7.LE },
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
let st = (0, h.E2)(S.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.Lz5KHI)],
        Component: () => (0, p.jsx)(se, { showHeader: !1 }),
    }),
    sn = (0, h.zD)(S.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => V.intl.string(eD.default.rea2Ar),
        useSubtitle: () => V.intl.string(eD.default.DwBO0x),
        useValue: () => (0, I.bG)([i3.A], () => i3.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(_.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i3.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var si = n(253400),
    sl = n(546385);
let ss = (0, h.E2)(S.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nx.Av && !(0, nx.cX)(),
    useSearchTerms: () => [V.intl.string(V.t["/HIxyY"]), V.intl.string(V.t.B0hqpb)],
    Component: function () {
        let [e] = x.useState(() => si.Ay.getEnableHardwareAcceleration()),
            t = V.intl.string(V.t["/HIxyY"]),
            n = V.intl.string(V.t.B0hqpb);
        return (0, p.jsxs)(q.B, {
            children: [
                (0, p.jsx)(ne.d, { label: t, description: n, checked: e, onChange: sr }),
                !e && (0, p.jsx)(sl.A, { look: sl.k.WARNING, children: V.intl.string(V.t.j7S6IX) }),
            ],
        });
    },
});
function sr(e) {
    let t = e ? V.intl.format(V.t.LYXRxL, {}) : V.intl.format(V.t.uDP3Kz, {});
    (0, n8.A)({
        title: V.intl.string(V.t.aqpAvn),
        subtitle: t,
        confirmText: V.intl.string(V.t.vT7ckk),
        onConfirm: () => {
            si.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sa = (0, eN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 })),
    so = (0, h.zD)(S.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => V.intl.string(V.t["3BeZti"]),
        usePredicate: () => nx.Av && !(0, nx.cX)(),
        useValue: () => sa.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (sa.setState({ openOnStartup: e }), si.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            si.Ay.getOpenOnStart().then((e) => sa.setState({ openOnStartup: e }));
        },
    }),
    su = (0, h.zD)(S.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => V.intl.string(V.t.dJ5MUh),
        useSubtitle: () => V.intl.string(V.t.nQavHr),
        usePredicate: () => nx.Av && !(0, nx.cX)(),
        useValue: () => sa.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (sa.setState({ minimizeToTray: e }), si.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            si.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sa.setState({ minimizeToTray: e }));
        },
    }),
    sd = (0, h.zD)(S.X.OS_START_MINIMIZED, {
        useTitle: () => V.intl.string(V.t.GfBL83),
        useSubtitle: () => V.intl.string(V.t.XGyhhc),
        usePredicate: () => (0, nx.uF)(),
        useValue: () => sa.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (sa.setState({ startMinimized: e }), si.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !sa.useState((e) => e.openOnStartup),
        initialize: () => {
            si.Ay.getSetting("START_MINIMIZED", !1).then((e) => sa.setState({ startMinimized: e }));
        },
    });
var sc = n(61628);
let sg = new Set(["failure", "unknown"]),
    sm = (0, h.E2)(S.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [V.intl.string(V.t.roHq80)],
        Component: function () {
            let [e, t] = x.useState(!1),
                [n, i] = x.useState(() => (0, ls.TC)()),
                l = (0, I.bG)([le.Ay], () => le.Ay.getSystemServiceStatus("input-service")),
                s = x.useCallback(async () => {
                    (t(!0),
                        n ? await (0, ls.z8)("windows-settings") : await (0, ls.sL)("windows-settings"),
                        t(!1),
                        i((0, ls.TC)()));
                }, [n]);
            return (0, p.jsxs)("div", {
                className: sc.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: sc.L,
                        children: [
                            (0, p.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n9.E, {
                                                    variant: "body-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(n9.E, {
                                                    variant: "body-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : sg.has(l.state)
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
                                                                (0, im.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n9.E, {
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
        usePredicate: ls.XQ,
    });
var sA = n(687813),
    sE = n(613412),
    sh = n(858899),
    sS = n(384077);
let sT = (0, h.Tf)(S.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => V.intl.string(V.t.o6Qr6n),
    useSubtitle: () => V.intl.string(V.t.OuGtH8),
    useLabel: () => V.intl.string(V.t.bm1WjO),
    usePredicate: () => nx.Av && nN.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n8.A)({
            title: V.intl.string(V.t.o6Qr6n),
            subtitle: V.intl.string(V.t.JEHHJ1),
            confirmText: V.intl.string(V.t.bm1WjO),
            onConfirm: () => {
                ((0, tH.default)(),
                    (async function () {
                        try {
                            await (async function () {
                                var e;
                                let t = nN.A.tracing;
                                if (null == t) return;
                                (0, sh.P0)({ text: V.intl.string(V.t.qGRW8d) });
                                let [n, i, l] = await Promise.all([
                                        t.capturePerformanceTrace({ durationMs: 3e4 }),
                                        nN.A.processUtils.getSystemInfo(),
                                        nN.A.processUtils.getSystemMetrics((0, sS.uD)()),
                                    ]),
                                    s = {
                                        captured_at: n.startedAtISO,
                                        duration_ms: n.durationMs,
                                        categories: n.categories,
                                        ...(0, sE.getSuperProperties)(),
                                        native_build_number: nN.A.app.getBuildNumber(),
                                    },
                                    r = {
                                        systemInfo: i,
                                        systemMetrics: l,
                                        cumulativeCpuUsage: nN.A.processUtils.getCumulativeCPUUsage() ?? null,
                                        processTypeCpuUsage:
                                            nN.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
                                    },
                                    a = await ((e = {
                                        "trace.json": n.traceBytes,
                                        "system_info.json": (0, sA._u)(JSON.stringify(r, null, 2)),
                                        "metadata.json": (0, sA._u)(JSON.stringify(s, null, 2)),
                                    }),
                                    new Promise((t, n) => {
                                        (0, sA.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
                                    })),
                                    o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
                                    { filePath: u } = await t.saveTraceToDownloads(a, o);
                                (nN.A.fileManager.showItemInFolder(u),
                                    (0, sh.P0)({ text: V.intl.string(V.t.gpCRFS), variant: "success" }));
                            })();
                        } catch {
                            (0, sh.P0)({ text: V.intl.string(V.t["8ihs9i"]), variant: "critical" });
                        }
                    })());
            },
        });
    },
});
function sf() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sp = n(287809);
let sx = (0, h.Tf)(S.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sf();
    },
});
var sI = n(114129),
    s_ = n(442325),
    sN = n(858760);
let sb = (0, h.zD)(S.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: f.Xi.BETA }),
    usePredicate: () => sN.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nx.xl)(),
    useValue: () => (0, I.bG)([s_.A], () => s_.A.isUserOptedIn()),
    setValue: sI.lj,
});
var sC = n(813645);
let sy = {};
var sv = n(735729),
    sj = n(146849);
let sO = (0, h.zD)(S.X.NATIVE_MARKDOWN, {
        useTitle: () => V.intl.string(V.t["5CIvT4"]),
        usePredicate: () => sj.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, sv.A)(sj.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !sC.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sy;
                ts.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(sj.XQ, { enabled: e }),
    }),
    sR = (0, h.zZ)(S.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [sx, sT, sb, sO],
    }),
    sD = (0, h.zZ)(S.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [so, sd, su, ss],
        usePredicate: () => nx.Av && ((0, nx.uF)() || (0, nx.j9)()),
        initialize: () => {
            !(async function () {
                let e = await si.Ay.getOpenOnStart(),
                    t = await si.Ay.getSetting("START_MINIMIZED", !1),
                    n = await si.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
                sa.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
            })();
        },
    }),
    sL = (0, h.zZ)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["069nVT"]),
        useSubtitle: () => V.intl.string(V.t.T4LZVL),
        buildLayout: () => [l4],
        initialize: () => (i0.A.enableAll(!1), () => i0.A.enableAll(!0)),
        useInlineNotice: function () {
            return nx.Av
                ? {
                      type: f.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(i$.w, {
                                      type: "info",
                                      message: V.intl.string(V.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, p.jsx)(lu, { sourcePage: "keybinds" }),
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
                              icon: iQ.PlusSmallIcon,
                              onClick: () => i0.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sP = (0, h.zZ)(S.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [st],
    }),
    sG = (0, h.zZ)(S.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nx.Av && ((0, nx.uF)() || (0, nx.j9)()),
        buildLayout: () => [sm],
    }),
    sM = (0, h.zZ)(S.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eD.default.QG0axY),
        usePredicate: () =>
            (0, I.bG)(
                [i3.A, i1.A],
                () =>
                    e8.isPlatformEmbedded &&
                    i3.A.hasDetectedGame &&
                    (0, i2.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [sn],
    }),
    sU = (0, h.t_)(S.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [sD, sL, sP, sG, sM, sR],
    }),
    sV = (0, h.i4)(S.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iJ.KeyboardIcon,
        buildLayout: () => [sU],
    });
var sk = n(831544),
    sw = n(922795),
    sF = n(212245),
    sB = n(329551),
    sX = n(352430),
    sz = n(854325),
    sH = n(952572),
    sY = n(717359);
let sW = (0, h.E2)(S.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: sH.A,
        Component: function () {
            let e = (0, sF.p)(),
                t = x.useRef(!1),
                n = (0, I.bG)([ll.Ay], () => ll.Ay.getVideoDeviceId()),
                [i, l] = x.useState((0, sB.i)(sp.default.getCurrentUser())),
                s = x.useRef(i);
            return (
                x.useEffect(
                    () => () => {
                        t.current && (0, sX._C)(s.current);
                    },
                    [],
                ),
                (0, p.jsx)(sY.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sz.gB)(n, { location: e.location }).catch(_.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sK = (0, h.zD)(S.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => V.intl.string(V.t["3Ppr1h"]),
        useSubtitle: () => V.intl.string(V.t.WNbX4O),
        useValue: U.bm.useSetting,
        setValue: (e) => {
            (U.bm.updateSetting(e), td.default.track(_.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sZ = n(625841),
    sq = n(74848),
    sQ = n(204050);
let sJ = (0, eN.D)(() => ({ previewEnabled: !1 })),
    s$ = (0, h.E2)(S.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, I.bG)([ll.Ay], () => ll.Ay.isVideoAvailable()),
                { id: t } = (0, sq.x5)(lH.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, p.jsx)(sZ.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: lH.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sQ.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sJ.setState({ previewEnabled: !1 }),
                                  window.open((0, sQ.i)(t)),
                                  td.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var s0 = n(745317),
    s1 = n(9219);
let s2 = (0, h.E2)(S.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = ll.Ay.getCameraComponent(),
                t = (0, I.bG)([ll.Ay], () => ll.Ay.getVideoDeviceId()),
                n = sJ.useField("previewEnabled"),
                i = (0, I.bG)([ll.Ay], () => ll.Ay.isVideoAvailable());
            return ((0, e_.l0)(() => {
                sJ.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, p.jsx)("div", {
                      className: s1.T9,
                      children: (0, p.jsxs)("div", {
                          className: s1.Xi,
                          children: [
                              (0, p.jsxs)("div", {
                                  className: s1.UI,
                                  children: [
                                      (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, p.jsx)(s0.kE, {}),
                                  ],
                              }),
                              (0, p.jsx)(s0.eK, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: s1.T9,
                      children: (0, p.jsx)(lS.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, p.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => sJ.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    s3 = (0, h.zZ)(S.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.VIDEO)),
        buildLayout: () => [s2, sK, s$, sW],
    }),
    s5 = (0, h.zD)(S.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nx.j9)();
        },
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lp.default.setOpenH264Enabled(e),
                (0, n8.A)({
                    title: V.intl.string(V.t["9jf31O"]),
                    subtitle: V.intl.string(V.t["J2wg+X"]),
                    confirmText: V.intl.string(V.t.BddRzS),
                    onConfirm: () => nN.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    s4 = (0, h.zD)(S.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getAecDump());
        },
        setValue: lp.default.setAecDump,
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.isAecDumpSupported());
        },
    });
var s6 = n(139033),
    s8 = n(862482),
    s7 = n(640238),
    s9 = n(825484),
    re = n(497029),
    rt = n(487329),
    rn = n(353835);
let ri = (0, eN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rl() {
    let e = await nN.A.fileManager.getLogPath();
    nN.A.fileManager.showItemInFolder(e);
}
function rs(e) {
    (0, n8.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => lp.default.setDebugLogging(e),
    });
}
async function rr() {
    await (async function (e) {
        let { onUploadStart: t, onUploadFinish: n } = e;
        t?.();
        try {
            let e, t;
            (await ll.Ay.getMediaEngine().writeAudioDebugState(),
                await rn.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
                await (0, re.a)(_.Umv.RTC),
                (e = V.intl.string(V.t["fKBB8+"])),
                (t = V.intl.string(V.t.BvyxE7)),
                (0, s6.A)({ title: e, subtitle: t }));
        } catch (s) {
            var i;
            let e, t, n, l;
            ((i = s.displayMessage),
                (e = V.intl.string(V.t.QZg0J7)),
                (t = i ?? V.intl.string(V.t.VzHcSm)),
                (n = (0, rt.B1)(rt.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
                (l = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
                (0, lN.qf)((n) =>
                    (0, p.jsx)(s7.a, {
                        header: e,
                        confirmButtonColor: s8.$n.Colors.BRAND,
                        confirmText: V.intl.string(V.t.BddRzS),
                        ...n,
                        children: (0, p.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", height: "100%" },
                            children: [
                                (0, p.jsx)(n9.E, { variant: "body-md/normal", children: t }),
                                (0, p.jsx)(n9.E, {
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
        onUploadStart: () => ri.setState({ isUploading: !0 }),
        onUploadFinish: () => ri.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let ra = (0, h.E2)(S.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.DEBUG_LOGGING));
        return nx.Av && e && null != nN.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, I.bG)([ll.Ay], () => ll.Ay.getDebugLogging()),
            t = ri.useField("isUploading"),
            n = ri.useField("isDisabled"),
            i = x.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(lT.A, { tag: "legend", id: i, children: V.intl.string(V.t["FjN+et"]) }),
                (0, p.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(ne.d, {
                            label: V.intl.string(V.t["726JHL"]),
                            description: V.intl.string(V.t["/7ak9Q"]),
                            checked: e,
                            onChange: rs,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, p.jsxs)(s9.e, {
                                children: [
                                    (0, p.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: rr,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.nuPtYi),
                                        onClick: rl,
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
var ro = n(233545),
    ru = n(58663),
    rd = n(412780);
function rc() {
    return (0, I.bG)([sp.default, ll.Ay], () => {
        let e = sp.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === si.Ay.releaseChannel || "development" === si.Ay.releaseChannel,
            i = ll.Ay.supports(lH.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rg = (0, h.zD)(S.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, I.bG)([rd.Ay], () => rd.Ay.shouldRecordNextConnection());
        },
        setValue: ru.A,
        usePredicate: rc,
    }),
    rm = (0, h.Tf)(S.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: ro.YW,
        usePredicate: rc,
    });
var rA = n(926919),
    rE = n(111162),
    rh = n(855302);
let rS = (0, h.zD)(S.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => V.intl.string(V.t["0CEP6e"]),
        useSubtitle: () => V.intl.string(V.t["kBXuW+"]),
        useValue: function () {
            return (0, I.bG)([rE.default], () => rE.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rE.default.isStreamInfoOverlayEnabled;
            ((0, rh.A)("stream_info_overlay_enabled", e, t), (0, rA.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return U.Q_.useSetting();
        },
    }),
    rT = (0, h.bd)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rS, s4, rg, rm, ra],
    });
function rf(e, t, n) {
    (0, n8.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rp = (0, h.Tf)(S.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rf(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), lp.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rx = (0, h.zZ)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [s5, rT, rp],
    });
var rI = n(343446),
    r_ = n(360729),
    rN = n(303227),
    rb = n(558076),
    rC = n(687782);
let ry = (0, h.zD)(S.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(rC.default.qYzpsI),
        useSubtitle: () => V.intl.string(rC.default["+vMoL1"]),
        useValue: () => (0, I.bG)([rb.A], () => rb.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rN.Ft)(e),
    }),
    rv = (0, h.zZ)(S.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(rC.default.wRLmM0),
        usePredicate: function () {
            let e = (0, I.yK)([lL.A], () => lL.A.getGuildIds()),
                { loaded: t, override: n } = (0, I.cf)([rI.A], () => ({
                    loaded: rI.A.getLoadedGuildExperiment(r_.vJ),
                    override: rI.A.getExperimentOverrideDescriptor(r_.vJ),
                }));
            return (0, x.useMemo)(
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
var rj = n(347481),
    rO = n(852712),
    rR = n(179172),
    rD = n(868162);
let rL = (0, h.zD)(S.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => V.intl.string(V.t.gF8HJo),
        useSubtitle: () => V.intl.string(V.t.cfrfyZ),
        useValue: function () {
            return (0, I.bG)([rD.A], () => !0 !== rD.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rR.Bv(!e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rP = (0, h.zD)(S.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lp.default.setAutomaticGainControl(e, {
                page: _.liQ.USER_SETTINGS,
                section: _.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, I.bG)([ll.Ay, rj.A], () => {
                let e = ll.Ay.getInputDeviceId();
                return rj.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.isAutomaticGainControlSupported() && ll.Ay.isInputProfileCustom());
        },
    }),
    rG = (0, h.sN)(S.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => V.intl.string(V.t.AlybXj),
        setValue: (e) =>
            lp.default.setAttenuation(
                e,
                ll.Ay.getAttenuateWhileSpeakingSelf(),
                ll.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => ll.Ay.getAttenuation(),
    }),
    rM = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, I.bG)([ll.Ay], () => ll.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lp.default.setAttenuation(ll.Ay.getAttenuation(), e, ll.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rU = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, I.bG)([ll.Ay], () => ll.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lp.default.setAttenuation(ll.Ay.getAttenuation(), ll.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rV = (0, h.FW)(S.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.ATTENUATION)),
        buildLayout: () => [rG, rM, rU],
    }),
    rk = (0, h.zD)(S.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lp.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.showBypassSystemInputProcessing() && ll.Ay.isInputProfileCustom());
        },
    }),
    rw = (0, h.zD)(S.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, I.bG)([eT.Ay], () => !eT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rh.A)("switch_channel_warning_enabled", e, !eT.Ay.disableVoiceChannelChangeAlert),
                nz.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rF = (0, h.zD)(S.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.BbESsg),
        useSubtitle: () => V.intl.string(V.t.LoOB1F),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => {
                let { vadUseKrisp: e } = ll.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = ll.Ay.getMode();
            lp.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, I.bG)(
                [ll.Ay],
                () => ll.Ay.getMode() !== _.TBI.VOICE_ACTIVITY || !ll.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.isAdvancedVoiceActivitySupported() && ll.Ay.isInputProfileCustom());
        },
    }),
    rB = (0, h.Hn)(S.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rf(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => lp.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, I.cf)([ll.Ay], () => ({
                legacyAudioSubsystemSupported: ll.Ay.supports(lH.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: ll.Ay.supports(lH.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: ll.Ay.supports(lH.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return x.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lH.rB.STANDARD, value: lH.rB.STANDARD, label: V.intl.string(V.t.dqb2JZ) }]),
                    e && i.push({ id: lH.rB.LEGACY, value: lH.rB.LEGACY, label: V.intl.string(V.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lH.rB.EXPERIMENTAL, value: lH.rB.EXPERIMENTAL, label: V.intl.string(V.t.liQmtr) }),
                    n && i.push({ id: lH.rB.AUTOMATIC, value: lH.rB.AUTOMATIC, label: V.intl.string(V.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rX = (0, h.zD)(S.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getQoS());
        },
        setValue: function (e) {
            lp.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.QOS));
        },
    }),
    rz = (0, h.zD)(S.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lp.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rH = (0, h.bd)(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tI(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, I.bG)([ll.Ay], () => ll.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rP, rF, rk, rL, rz, rw, rV, rB, rX],
    }),
    rY = (0, h.zD)(S.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lp.default.setEchoCancellation(e, { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, I.bG)([ll.Ay, rj.A], () => {
                let e = ll.Ay.getInputDeviceId();
                return rj.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.isInputProfileCustom());
        },
    });
var rW = n(205693),
    rK = n(451988),
    rZ = n(205513),
    rq = n(475883),
    rQ = n(303707);
let rJ = (0, t0.Ld)();
function r$(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ih()(rq.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ih()(rq.Jx, rq.NU, { [rq.zY]: t && !r, [rq.r9]: r }) }),
    });
}
function r0(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, I.cf)([ll.Ay], () => ({
            threshold: ll.Ay.getModeOptions().threshold,
            autoThreshold: ll.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, I.bG)([ll.Ay], () => ll.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ih()(rq.Mo, rq.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, p.jsx)(rZ.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lp.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n6.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n6.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rJ,
            disabled: s,
            children: (0, p.jsxs)("div", {
                className: ih()(rq.NU, rq.TL, rq.Jx, rQ.bar),
                children: [
                    (0, p.jsx)("div", { className: ih()(rq.GS, rq.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let r1 = (0, h.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, I.bG)([ll.Ay], () => ll.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, I.cf)([ll.Ay], () => ({
                autoThreshold: ll.Ay.getModeOptions().autoThreshold,
                disabled: ll.Ay.getMode() !== lH.TB.VOICE_ACTIVITY,
            })),
            n = x.useCallback((e) => {
                let t = ll.Ay.getMode(),
                    { threshold: n } = ll.Ay.getModeOptions();
                lp.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, I.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = x.useState(-100),
                    [n, i] = x.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lH.ME.VOICE) === lH.ME.VOICE));
                }
                return (
                    x.useEffect(() => {
                        let e = new rK.Ep();
                        return (
                            e.start(1e3, () => {
                                (ll.Ay.getMediaEngine().on(rW.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (ll.Ay.getMediaEngine().removeListener(rW.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, I.bG)([ll.Ay], () => ll.Ay.isEnabled()),
            a = x.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: rq.B4,
                        children: (0, p.jsx)(i$.w, {
                            type: "warning",
                            message: V.intl.format(V.t["O13I+O"], { onEnableClick: () => lp.default.enable(!0) }),
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
                      (0, p.jsx)(lT.A, { tag: "legend", id: u, children: V.intl.string(V.t.GByLar) }),
                      (0, p.jsx)(lT.A, { id: d, children: o }),
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
                                  ? (0, p.jsx)(r$, {
                                        isSpeaking: s,
                                        className: rq.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(r0, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(lA.D, {
                          label: V.intl.string(V.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, p.jsx)(r$, {
                                        isSpeaking: s,
                                        className: rq.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(r0, {
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
var r2 = n(366010);
let r3 = n(993830),
    r5 = n(413142),
    r4 = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO };
function r6() {
    let e = (0, I.bG)([nY.A], () => (0, r2.q)(nY.A.theme));
    return (0, p.jsx)("img", { src: e ? r3 : r5, width: 48, height: 32, alt: "" });
}
let r8 = (0, h.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, I.bG)([ll.Ay], () => ll.Ay.isInputProfileCustom() && ll.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = x.useCallback((e) => {
                (lp.default.setNoiseCancellation("KRISP" === e, r4),
                    lp.default.setNoiseSuppression("STANDARD" === e, r4));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, I.cf)([ll.Ay], () => ({
                noiseCancellation: ll.Ay.getNoiseCancellation(),
                noiseSuppression: ll.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: ll.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: ll.Ay.isNoiseCancellationSupported(),
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
                (0, p.jsx)(lm.l, {
                    label: V.intl.string(V.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, p.jsx)(r6, {}),
            ],
        });
    },
});
var r7 = n(934729),
    r9 = n(621380);
let ae = !nx.Av;
function at() {
    return (0, I.bG)([ll.Ay], () => ll.Ay.getMode() === lH.TB.PUSH_TO_TALK);
}
let an = (0, h.zD)(S.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nx.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, I.bG)([ll.Ay], () => ll.Ay.getMode());
        return x.useMemo(() => {
            if (!nx.Av && e === lH.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r7._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, I.bG)([ll.Ay], () => ll.Ay.getActiveInputProfile() !== r9.m.STUDIO);
    },
    useValue: function () {
        return (0, I.bG)([ll.Ay], () => ll.Ay.getMode() === lH.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lH.TB.PUSH_TO_TALK : lH.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lH.TB.PUSH_TO_TALK &&
                ae &&
                (0, lN.mM)(async () => {
                    let { Alert: e } = await Promise.all([n.e(844331), n.e(542369)]).then(n.bind(n, 291064));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r7._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            lp.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var ai = n(484599);
function al(e) {
    let { shortcut: t } = e,
        n = (0, I.bG)([lg.Ay], () => lg.Ay.isWaylandPortalActive()),
        i = (0, I.bG)([lg.Ay], () => {
            let e = lg.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
            return null != e ? lg.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? lg.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, p.jsx)(i$.w, { type: "warning", message: V.intl.string(V.t.PTCrUP), role: "status" })
            : (0, p.jsx)(i$.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" })
        : null;
}
let as = (0, h.E2)(S.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: at,
        Component: function () {
            let e = (0, I.bG)([ll.Ay], () => {
                    let { shortcut: e } = ll.Ay.getModeOptions();
                    return e;
                }),
                t = V.intl.format(V.t.HVvn5T, {
                    onClick: () => (0, ng.openUserSettings)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, p.jsx)(lA.D, {
                label: V.intl.string(V.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsxs)("div", {
                    className: ai.e,
                    children: [
                        (0, p.jsx)(lx.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = lg.Ay.getKeybindForAction(_.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, lc.uL)(t.id, t.shortcut, e, lg.Ay.getWaylandPortalShortcutState(t.id)),
                                    lp.default.setMode(_.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, p.jsx)(al, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    ar = (0, h.sN)(S.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            lp.default.setMode(_.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: 2e3,
        getInitialValue: function () {
            let { delay: e } = ll.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: at,
    });
var aa = n(833473),
    ao = n(844981),
    au = n(610234);
function ad() {
    return (0, ao.Ay)("VoiceSettings");
}
let ac = (0, h.zD)(S.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(au.default.LGDPhA),
        useSubtitle: function () {
            let e = ad();
            if ((0, ao.Xt)(e))
                return e === ao.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(au.default.rOXfEw)
                    : V.intl.string(au.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, I.bG)([aa.A], () => aa.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lp.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ad() !== ao.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, ao.Xt)(ad());
        },
    }),
    ag = (0, h.Qx)(S.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rO._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getActiveInputProfile() ?? r9.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lp.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rO.d)({ location: "InputProfileCategory" });
            return [
                { value: r9.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r9.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r9.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    am = (0, h.zZ)(S.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, I.bG)([rj.A, ll.Ay], () => {
                let e = ll.Ay.getInputDeviceId();
                return (
                    (rj.A.hasEchoCancellation(e) || rj.A.hasNoiseSuppression(e) || rj.A.hasAutomaticGainControl(e)) &&
                    ll.Ay.isInputProfileCustom()
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
        buildLayout: () => [ag, r1, r8, rY, ac, an, as, ar, rH],
    });
var aA = n(403581),
    aE = n(983851),
    ah = n(687021),
    aS = n(128450),
    aT = n(796774),
    af = n(209932),
    ap = n(458976),
    ax = n(984813),
    aI = n(265872),
    a_ = n(305866),
    aN = n(22231),
    ab = n(342073),
    aC = n(448645),
    ay = n(792348),
    av = n(233324),
    aj = n(340368),
    aO = n(327289),
    aR = n(533491),
    aD = n(647451);
function aL(e) {
    let { onSelect: t } = e,
        [n, i] = x.useState(!1),
        l = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        s = aC.Ay.canUseCustomCallSounds(l),
        r = x.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, p.jsx)(aI.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(a_.l, {
                children: (0, p.jsx)(aO.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, p.jsx)(av.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(aR.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, p.jsx)(aN.PencilIcon, { size: "md", color: "currentColor", className: aD.Wo }),
            }),
    });
}
function aP(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ay.A)(t, null),
        i = (0, ap.wH)(),
        l = (0, aj._)("SoundPreviewButton") ? ab.WaveformIcon : aE.VoiceNormalIcon,
        s =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(aR.dT, {
        onClick: n,
        text: s,
        children: (0, p.jsx)(l, { size: "md", color: "currentColor", className: aD.wg }),
    });
}
function aG(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, aj._)("SoundboardCustomCallSoundSettingsPreview") ? ab.WaveformIcon : aE.VoiceNormalIcon;
    return (0, p.jsxs)("div", {
        className: aD.D6,
        children: [
            (0, p.jsxs)("div", {
                className: aD.kL,
                children: [
                    a && (0, p.jsx)(tG.A, { emojiId: s, emojiName: r, className: aD.Zg }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/normal",
                        color: "text-strong",
                        className: aD.dj,
                        children:
                            null == t
                                ? V.intl.string(V.t.PoWNfe)
                                : n
                                  ? V.intl.format(V.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, p.jsx)(n9.E, {
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
                        ? (0, p.jsx)(aP, { sound: t })
                        : (0, p.jsx)(o, { size: "md", color: "currentColor", className: aD.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: aD.kL,
                children: [
                    (0, p.jsx)(aL, { onSelect: i }),
                    l &&
                        !n &&
                        (0, p.jsx)(aR.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, p.jsx)(lh.TrashIcon, {
                                size: "md",
                                color: n6.A.unsafe_rawColors.RED_400.css,
                                className: aD.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aM = n(617617);
n(980504);
var aU = n(806050);
function aV(e) {
    return (0, I.bG)([af.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return af.A.getSound("0" === t ? "0" : t, n);
    });
}
function ak(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([aM.A], () => aM.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aV(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, p.jsxs)("div", {
        className: aU.Io,
        children: [
            r
                ? (0, p.jsx)(tG.A, { emojiId: l, emojiName: s, className: aU.nW })
                : (0, p.jsx)(aE.VoiceNormalIcon, { size: "md", color: "currentColor", className: aU.nW }),
            (0, p.jsx)(n9.E, { className: aU.dK, variant: "body-xs/medium", children: i.name }),
        ],
    });
}
let aw = (0, h.E2)(S.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = x.useState("0"),
            i = (0, ax.mz)(t),
            l = aV(i),
            s = i?.type === ax.PP.GLOBAL,
            r = (0, I.bG)([af.A], () => af.A.hasFetchedAllSounds()) && null != i && null == l;
        (x.useEffect(() => {
            r && (0, ap.ND)({ location: e });
        }, [r, e]),
            x.useEffect(() => {
                (0, aT.E7)();
            }, []));
        let a = x.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(ak, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n7.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(ah.A, {
                    guildId: t,
                    className: aU.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(aS.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, p.jsx)(aA.NitroWheelIcon, { size: "md", color: "currentColor", className: aU.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aG, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, ap.Dv)(t, e) : (0, ap.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: aU.lm,
                                children: (0, p.jsx)(i$.w, {
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
var aF = n(824744);
let aB = (0, h.sN)(S.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(_.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aF.w)(e);
        (0, aT.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ap.wH)();
        return (0, aF.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aX = n(864145);
let az = (0, h.sN)(S.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aF.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aF.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aX.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aH = (0, h.zZ)(S.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aB, az, aw],
    });
var aY = n(803224),
    aW = n(552122);
let aK = (0, h.E2)(S.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aW.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(n9.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, ng.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aZ = (0, h.AK)(S.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: S.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aq = (0, h.gN)(S.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aZ] });
var aQ = n(264686);
let aJ = (0, eN.D)(() => ({ currentPlayingSound: null }));
function a$() {
    let e = aJ.getField("currentPlayingSound");
    (e?.stop(), aJ.setState({ currentPlayingSound: null }));
}
function a0(e) {
    let t = aJ.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ir.Ak)(e);
    aJ.setState({ currentPlayingSound: n });
}
function a1(e) {
    return (0, h.zD)(`${S.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a0(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, I.bG)([aY.A], () => aY.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aY.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aQ.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, I.bG)([aY.A], () => aY.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let a2 = [
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
    a3 = (0, h.D1)(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tI(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                a$();
            };
        },
        buildLayout: () => a2.map((e) => a1(e)),
    }),
    a5 = (0, h.zZ)(S.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, I.bG)([aY.A], () => aY.A.getDisableAllSounds());
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
        buildLayout: () => [a3, aK, aq],
    }),
    a4 = (0, h.zD)(S.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => V.intl.string(V.t.e3Zz3F),
        useSubtitle: () => V.intl.string(V.t.RztTjP),
        useValue: function () {
            return !U.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rh.A)("stream_previews_disabled", !e, U.uh.getSetting(), [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                U.uh.updateSetting(!e));
        },
    }),
    a6 = (0, h.zD)(S.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getVideoHook());
        },
        setValue: lp.default.setVideoHook,
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.supportsVideoHook());
        },
    }),
    a8 = (0, h.zD)(S.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getExperimentalSoundshare());
        },
        setValue: lp.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => {
                let e = ll.Ay.supportsExperimentalSoundshare(),
                    t = ll.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a7 = (0, h.zD)(S.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lp.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return ll.Ay.supports(lH.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a9 = (0, h.sN)(S.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lp.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: ll.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, I.bG)([ll.Ay], () => ll.Ay.getSidechainCompression());
            return ll.Ay.supports(lH.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    oe = (0, h.zD)(S.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t.lt8rRx),
        useSubtitle: () => V.intl.string(V.t.ie1mgY),
        useValue: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nx.cX)() && e
                ? (0, n8.A)({
                      title: V.intl.string(V.t["9jf31O"]),
                      subtitle: V.intl.string(V.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lp.default.setUseSystemScreensharePicker(e), nN.A.app.relaunch());
                      },
                      confirmText: V.intl.string(V.t.BddRzS),
                  })
                : lp.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, I.bG)([ll.Ay], () => ll.Ay.supportsSystemScreensharePicker() && (0, nx.cX)());
        },
    }),
    ot = (0, h.bd)(S.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => tI(S.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a7, a9, oe, a8, a6],
    }),
    on = (0, h.zZ)(S.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a4, ot] });
var oi = n(106713);
let ol = (0, h.E2)(S.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = oi.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(sZ.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: lH.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    os = (0, h.E2)(S.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = oi.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(sZ.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: lH.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    or = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [ol, os] }),
    oa = (0, h.sN)(S.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = ll.Ay.getInputVolume();
            return (0, aF.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aF.w)(e);
            lp.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    oo = (0, h.sN)(S.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = ll.Ay.getOutputVolume();
            return (0, aF.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aF.w)(e);
            lp.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    ou = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [oa, oo] });
var od = n(164636),
    oc = n(782600),
    og = n(804037);
let om = `${eC.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oA = (0, h.E2)(S.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, od.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.LOOPBACK));
        },
        Component: function () {
            return (0, od.bG)([ll.Ay], () => ll.Ay.supports(lH.O5.LOOPBACK))
                ? (0, p.jsx)(oc.A, {
                      size: "md",
                      notchBackground: oc.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(n9.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, p.jsx)(nc.Anchor, {
                                  className: og.X,
                                  href: eC.A.getArticleURL(_.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: om }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    oE = e8.uF() ? ["BTHENUM", "BTHHFENUM"] : [];
function oh(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, p.jsxs)(q.B, {
        children: [
            n && (0, p.jsx)(lu, { sourcePage: "voice" }),
            t && (0, p.jsx)(sl.A, { look: sl.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oS = (0, h.zZ)(S.X.VOICE_CATEGORY, {
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
            let e = lo("voice"),
                t = (0, sq.x5)(lH.oh.AUDIO_INPUT),
                n = (0, sq.x5)(lH.oh.AUDIO_OUTPUT),
                i = x.useMemo(() => {
                    let e = oE.some((e) => t?.hardwareId?.startsWith(e)),
                        i = oE.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return x.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: f.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(oh, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [or, ou, oA],
    }),
    oT = (0, h.t_)(S.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oS, am, s3, on, a5, aH, rv, rx],
    }),
    of = (0, h.i4)(S.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => ll.Ay.isSupported(),
        icon: sk.MicrophoneIcon,
        useMenu: sw.A,
        buildLayout: () => [oT],
    }),
    op = (0, h.WI)(S.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [of, n0, tt, iq, sV, n5],
    });
var ox = n(360669),
    oI = n(369143),
    o_ = n(975807),
    oN = n(566345),
    ob = n(139286),
    oC = n(534247);
function oy(e) {
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
    (0, ob.A)(
        {
            name: sE.ImpressionNames.GIFT_CARDS_MARKETING_BANNER,
            type: sE.ImpressionTypes.VIEW,
            properties: { surface: t, location_stack: u },
        },
        { trackOnInitialLoad: !0 },
    );
    let d = "compact" === o;
    return (0, p.jsxs)("div", {
        className: ih()(oC.kL, { [oC.oE]: d }),
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: d ? 24 : 16,
                fullWidth: !1,
                className: oC.Qs,
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: d ? 12 : 8,
                        children: [
                            (0, p.jsx)(b.D, {
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
                                    (0, p.jsx)(n9.E, { variant: "footnote/normal", color: "text-subtle", children: a }),
                            ],
                        }),
                ],
            }),
            null != r
                ? (0, p.jsx)("div", {
                      className: oC.yO,
                      children: (0, p.jsx)(oN.v, { type: "lottie", lottie: r, aspectRatio: "6/4" }),
                  })
                : (0, p.jsx)("img", { src: s, className: oC.fA, alt: "" }),
        ],
    });
}
function ov(e) {
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
var oj = n(425565),
    oO = n(321671),
    oR = n(936564),
    oD = n(798091),
    oL = n(956956),
    oP = n(289873),
    oG = n(115560),
    oM = n(465323),
    oU = n(37766),
    oV = n(194261),
    ok = n(391048),
    ow = n(669815),
    oF = n(99696),
    oB = n(202613),
    oX = n(615405),
    oz = n(83617),
    oH = n(811091),
    oY = n(607399),
    oW = n(993077),
    oK = n(150934),
    oZ = n(256006),
    oq = n(718718),
    oQ = n(558740);
let oJ = /[^0-9/]/g,
    o$ = /[^0-9]/g;
class o0 extends x.PureComponent {
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
                ((i = (n = e.replace(oJ, "").split("/"))[0]),
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
            ? (u = u.replace(o$, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, p.jsx)(lb.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var o1 = n(832208),
    o2 = n(782328);
let o3 = [
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
                        getClassNameForLayout: () => o2.ep,
                        renderInput: (e) => (0, p.jsx)(o0, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o5 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = x.useState(!1),
            [a, o] = x.useState(null),
            [u, d] = x.useState(i);
        return (
            x.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(o1.A, {
                className: n,
                form: o3,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oQ.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o4 = n(219887),
    o6 = n(292856);
let o8 = "isDefault";
class o7 extends x.PureComponent {
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
            expiresMonth: t instanceof oB.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oB.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, ow.ey)(), (0, ow.tc)());
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
                      className: o6.zc,
                      children: (0, p.jsx)(i$.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: o6.zc,
                  children: (0, p.jsx)(i$.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oZ.g)(n);
        return (0, p.jsxs)("div", {
            className: o6.yV,
            children: [
                (0, p.jsx)(n9.E, {
                    className: o6.bV,
                    variant: "body-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, p.jsx)(oq.Ay, {
                    ...e,
                    mode: oq.Ay.Modes.EDIT,
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
            className: o6.yV,
            children: [
                (0, p.jsx)(n9.E, { className: o6.bV, variant: "body-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, p.jsx)(o5, {
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
            className: o6.AU,
            children: (0, p.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(s9.e, {
                        children: (0, p.jsxs)("div", {
                            className: o6.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(lS.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: o6.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oY.Fr ? "sm" : "md",
                                    text: oY.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(s9.e, {
                        children: [
                            (0, p.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oY.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oY.Fr ? "sm" : "md",
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
            r = e instanceof oB.SJ;
        return (0, p.jsx)(oW.Z, {
            editable: !0,
            className: ih()(o6.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: o6.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(o4.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: o6.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: o6.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: o6.D5,
                        children: (0, p.jsx)(oK.S, {
                            value: o8,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, o8),
                            label: V.intl.string(V.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(ld.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o9 = I.Ay.connectStores([oX.A], () => ({ updateError: oX.A.editSourceError, removeError: oX.A.removeSourceError }))(
    o7,
);
var ue = n(140624),
    ut = n(849405),
    un = n(329693);
function ui() {
    (0, oF.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oG.A)() });
}
class ul extends x.PureComponent {
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
            ? (0, p.jsx)(o9, {
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
                      i ? null : (0, p.jsx)(ld.c, { className: un.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: un.Yb,
                          children: [
                              (0, p.jsx)(o4.A, {
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
let us = x.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = x.useState(null),
        o = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, I.bG)([oX.A], () => oX.A.ipCountryCode),
        d = x.useMemo(() => (0, oM.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        x.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : ow.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(ld.c, { className: un.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: un.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(o4.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(lj.A, {
                                  align: lj.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(oU.PaymentTypeGiftCardIcon, { size: "lg" }),
                                      (0, p.jsx)(n9.E, {
                                          variant: "body-sm/medium",
                                          className: ut.Wi,
                                          children: V.intl.string(ue.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: un.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: un.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oP.y, { type: oP.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(n9.E, {
                                                  variant: "body-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oM.$g)(e ?? 0, n, l, {
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
                                    text: V.intl.string(ue.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ur extends x.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await ow.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await ow.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await ow.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oz.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lN.mM)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, ok.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: un.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: un.z8,
                          children: [
                              (0, p.jsx)(n9.E, { variant: "body-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, p.jsx)(n9.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  className: un.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oH.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oB.LQ)),
            c = u.filter((e) => e instanceof oB.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    ul,
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
                              us,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: ui,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(us, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: ui,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(b.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oV.LockIcon, { size: "sm", className: un.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(n9.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(ld.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var ua = n(459357),
    uo = n(295405),
    uu = n(166403),
    ud = n(773669),
    uc = n(943009);
function ug() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oL.Gw)(e.country) };
}
let um = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, I.bG)([oX.A], () => oX.A.isSyncing),
                i = (0, I.bG)([uo.A], () => uo.A.paymentSources),
                l = (0, I.bG)([uo.A], () => uo.A.defaultPaymentSourceId),
                s = (0, I.bG)([ud.default], () => ud.default.locale),
                r = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
                a = (0, I.bG)([oX.A], () => oX.A.isRemovingPaymentSource),
                o = (0, I.bG)([oX.A], () => oX.A.isUpdatingPaymentSource),
                { enabled: u } = (0, ua.c)({ location: "UserSettingsBilling" });
            return (x.useEffect(() => {
                (ow.$o(), ow.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: uc.o, children: (0, p.jsx)(oP.y, {}) })
                : (0, p.jsx)(ur, {
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
    uA = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = ov("billing_banner"),
                t = x.useMemo(
                    () => [
                        {
                            text: V.intl.string(oO.default["6bWeWP"]),
                            onClick: () => {
                                (e("learn_more", { url: oj.C }), (0, o_.A)(oj.C));
                            },
                        },
                        {
                            text: V.intl.string(oO.default.xYa9Y8),
                            onClick: () => {
                                let t = eC.A.getArticleURL(_.MVz.BUY_GIFT_CARDS);
                                (e("where_to_buy", { url: t }), (0, o_.A)(t));
                            },
                        },
                    ],
                    [e],
                );
            return (0, p.jsx)("div", {
                className: oR.k,
                children: (0, p.jsx)(oy, {
                    surface: "billing_banner",
                    title: V.intl.string(oO.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: t,
                    children: (0, p.jsx)(n9.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: V.intl.string(oO.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oD.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    uE = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = ug();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ug()
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
        buildLayout: () => [um, uA],
    });
var uh = n(837381),
    uS = n(516521),
    uT = n(928039),
    uf = n(921853),
    up = n(22306);
function ux(e) {
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
                className: up.v,
                children: (0, p.jsxs)("div", {
                    className: up.U,
                    children: [
                        (0, p.jsx)(lE.K, {
                            variant: "icon-only",
                            icon: uf.ChevronSmallLeftIcon,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": V.intl.string(V.t.vgfxaA),
                        }),
                        (0, p.jsx)(n9.E, { variant: "body-sm/medium", children: u }),
                        (0, p.jsx)(lE.K, {
                            variant: "icon-only",
                            icon: ii.ChevronSmallRightIcon,
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
var uI = n(431955);
n(938796);
var u_ = n(334279),
    uN = n(122817),
    ub = n(665260),
    uC = n(315069),
    uy = n(557009),
    uv = n(570221),
    uj = n(191115);
class uO extends uC.A {
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
        let t = null != e.payment_source ? oB.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uI.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? uj.A.createFromServer(e.subscription) : null;
        return new uO({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uy.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uv.Y.createFromServer(e.invoice) : null,
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
        return ub.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(t3.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === _.EZt.GUILD_PRODUCT || ub.Lt(this.sku.flags, uN.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === _.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && u_.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uR =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uD =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uL =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uP =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uG =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uM(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oB.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uI.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uO({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uU = { receipts: [], cursor: null };
var uV = n(34188),
    uk = n(597770),
    uw = n(724302),
    uF = n(291322),
    uB = n(147925),
    uX = n(707554),
    uz = n(957565),
    uH = n(250627),
    uY = n(871109),
    uW = n(571654),
    uK = n(411342),
    uZ = n(179499),
    uq = n(362280),
    uQ = n(95035),
    uJ = n(317525),
    u$ = n(460103);
function u0(e) {
    let { description: t, detail: n } = e;
    return (0, p.jsx)("li", {
        className: u$.Iu,
        children: (0, p.jsxs)(lj.A, {
            justify: lj.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function u1(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uH.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, uW.z)(i),
        s = (0, I.bG)([lL.A], () => lL.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = x.useCallback(async () => {
            (s?.features.has(_.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, uq.A)(_.BVt.GUILD_PRODUCT(t, n))
                : await (0, uq.A)(_.BVt.CHANNEL(t)),
                (0, tH.default)());
        }, [s, t, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            null != r && (0, p.jsx)(u0, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, p.jsx)(u0, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, p.jsx)(uQ.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function u2(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uH.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, I.bG)([uY.A], () => uY.A.getGuildProductFetchState(n) === uY.e.FETCHING),
        s = i?.role_id,
        r = (0, I.bG)([uJ.A], () => (null != s ? uJ.A.getRole(t, s) : void 0), [t, s]),
        a = (0, uZ.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, p.jsx)("div", { className: u$.hT, children: (0, p.jsx)(oP.y, {}) })
        : null != i && (o || u)
          ? (0, p.jsxs)("div", {
                className: u$.hT,
                children: [
                    o &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u$.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, p.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                o && (0, p.jsx)("div", { className: u$.yF }),
                                (0, p.jsx)(n9.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u$.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, p.jsx)(uK.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u3 = function (e, t) {
    (0, lN.mM)(async () => {
        let { default: i } = await n.e(234138).then(n.bind(n, 206049));
        return (n) => (0, p.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u5 = n(818348);
function u4(e) {
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
    let a = null != t.paymentSource && t.status === u5.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, p.jsxs)("div", {
              className: u$.It,
              children: [
                  (0, p.jsx)(nc.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, p.jsx)(nc.Anchor, {
                            className: u$.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, p.jsx)(i$.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, p.jsxs)("div", {
                className: u$.It,
                children: [
                    (0, p.jsx)(nc.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, p.jsx)(
                                  nc.Anchor,
                                  {
                                      className: u$.oe,
                                      href: e,
                                      children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, p.jsx)(i$.w, { type: "critical", message: l, role: "alert" }),
                ],
            })
          : a
            ? (0, p.jsx)("div", {
                  className: u$.It,
                  children: (0, p.jsx)(nc.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u3(t, e));
                      },
                      children: V.intl.formatToPlainString(V.t.onRIxS, {}),
                  }),
              })
            : null;
}
var u6 = n(510022),
    u8 = n(427262),
    u7 = n(106799),
    u9 = n(580630);
let de = (e) => `https://${_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function dt(e, t) {
    return t === u5.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: u$.db,
              children: [
                  (0, p.jsx)(u7.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, u9.$g)(e, t);
}
function dn(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, ez.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uG.REDEEMED
        ? null
        : n.status === uG.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uX.H, { className: u$.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: u$.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: u8.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uG.CLAIMED || n.status === uG.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uX.H, { className: u$.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: u$.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: u8.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: u$.TP,
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
                      (0, p.jsx)(uX.H, { className: u$.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: u$.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: u$.TP,
                          children: l
                              ? (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, o_.A)(de(i)),
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
                                            (0, u6.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var di = n(933832),
    dl = n(789645);
function ds(e) {
    let { refund: t, locale: n } = e,
        i = de(n),
        l = t.eligible ? di.CheckmarkLargeIcon : dl.XSmallIcon;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uX.H, { className: u$.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: u$.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uP.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uP.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uP.GIFT:
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
                    t.policy !== uP.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: u$.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: u$.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: u$._Z,
                                            children: [
                                                (0, p.jsx)(uX.H, {
                                                    className: u$.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: u$.z9,
                                                    children: [
                                                        (0, p.jsx)(l, { className: u$.xb, color: "currentColor" }),
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
var dr = n(679897);
function da(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: u$.mg,
        children: (0, p.jsxs)(lj.A, {
            justify: lj.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function du(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    return (0, p.jsx)(lS.m, {
        forceOpen: r,
        text: l ? i : n,
        children: (0, p.jsx)(ie.D, {
            onMouseEnter: () => {
                l && s(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uz.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, p.jsx)("div", { className: u$.l9, children: t }),
        }),
    });
}
function dd(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: u$.mg,
        children: (0, p.jsxs)("div", {
            className: u$.bx,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, p.jsx)(du, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function dc(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uL.REVERSED;
    return (0, p.jsxs)(n9.E, {
        variant: "footnote/semibold",
        color: "none",
        tag: "span",
        className: ih()(dr.XM, n ? dr.aB : dr.EN),
        children: [
            t === uL.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uL.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uL.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function dg(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u5.kM.APPLE_PARTNER ? new oB.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(o4.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: u$.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function dm(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(dg, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      lj.A,
                      {
                          justify: lj.A.Justify.BETWEEN,
                          align: lj.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(dg, { payment: e, locale: n }),
                              (0, p.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(dc, { tag: e.tag }),
                                      (0, p.jsx)(n9.E, {
                                          variant: "body-md/normal",
                                          color: "text-subtle",
                                          children: dt(e.amount, t.currency),
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
function dA(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: u$.ts }),
            t.delisted
                ? (0, p.jsx)(i$.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, o_.A)(de(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(u2, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dE(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, p.jsx)(ie.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: u$.WI,
            children: [
                (0, p.jsx)(uX.H, { className: u$.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: ih()(u$.iL, u$.W),
                    children: [
                        (0, p.jsx)(dm, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(da, { description: t.description, cost: dt(t.subtotal, l) }),
                                            (0, p.jsx)(da, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: dt(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(da, { description: V.intl.string(V.t.txajQG), cost: dt(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(da, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: dt(-t.amount_refunded, l),
                                            }),
                                            (0, p.jsx)(da, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: dt(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(dd, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, p.jsx)(u1, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, p.jsx)(dA, { guildProduct: s, locale: n }),
                (0, p.jsx)(u4, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(dn, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(ds, { refund: a, locale: n }),
            ],
        }),
    });
}
function dh(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uF.A, { size: 24, iconSize: 16, color: n6.A.unsafe_rawColors.NEUTRAL_1, className: u$.Sy })
        : (0, p.jsx)("div", {
              className: ih()(u$.Sy, u$.uX, u$.Xr),
              children: (0, p.jsx)(aA.NitroWheelIcon, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  color: n6.A.colors.ICON_DEFAULT,
              }),
          });
}
function dS(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, I.bG)([lL.A], () => lL.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uD.NITRO:
            return (0, p.jsx)(dh, { withGradient: !0 });
        case uD.NITRO_BASIC:
            return (0, p.jsx)(dh, { withGradient: !1 });
        case uD.SHOP:
            return (0, p.jsx)(uV.ShopIcon, {
                size: "custom",
                width: 23,
                height: 23,
                color: "currentColor",
                className: u$.sV,
            });
        case uD.APPLICATION:
        case uD.PRODUCT:
            return (0, p.jsx)(li.A, {
                className: u$.Sy,
                guildClassName: u$.zA,
                game: t.icon === uD.APPLICATION ? n : void 0,
                guild: i,
                size: li.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function dT(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uR.PAID)
        switch (i.status) {
            case uG.CLAIMED:
                return (0, p.jsx)("span", { className: u$.gD, children: V.intl.string(V.t.lIsIFo) });
            case uG.UNCLAIMED:
                return (0, p.jsx)("span", { className: u$.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uG.REDEEMED:
                return (0, p.jsx)("span", { className: u$.gD, children: V.intl.string(V.t.Osji1u) });
            case uG.FAILED:
                return (0, p.jsx)("span", { className: u$.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: u$.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: u$.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uR.PENDING:
            return (0, p.jsx)("span", { className: u$.oE, children: V.intl.string(V.t.y7F0Re) });
        case uR.FAILED:
            return (0, p.jsx)("span", { className: u$.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uR.REVERSED:
            return (0, p.jsx)("span", { className: u$.ob, children: V.intl.string(V.t.YQv9Li) });
        case uR.CANCELED:
            return (0, p.jsx)("span", { className: u$.ob, children: V.intl.string(V.t.ttkBhy) });
        case uR.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: u$.gD, children: V.intl.string(V.t.lYbZzz) });
        case uR.REFUNDED:
            return (0, p.jsx)("span", { className: u$.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uR.PAID:
            return null;
    }
}
function df(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = x.useState(!1),
        { hasAlreadyLinked: r } = (0, uw.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(uh.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(ie.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: ih()(u$.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(lj.A, {
                        className: u$.J7,
                        align: lj.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, p.jsx)(n9.E, {
                                variant: "body-sm/normal",
                                className: u$.p6,
                                children: (0, ip.i$)(iT()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: u$.h_,
                                children: [
                                    (0, p.jsx)(dS, { receipt: t }),
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
                                                                      return (0, aC.xq)(t)
                                                                          ? aC.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aC.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
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
                                    t.is_gift
                                        ? (0, p.jsx)(lS.m, {
                                              text: V.intl.string(V.t.QddTpm),
                                              children: (0, p.jsx)(uk.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: u$.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: u$.vj,
                                children: [
                                    (0, p.jsx)(dT, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: u$.q9, children: dt(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uB.A, {
                                className: u$.fT,
                                direction: l ? uB.A.Directions.UP : uB.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, p.jsx)(dE, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dp = n(949779);
function dx(e) {
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
        d = (0, uT.A)("billing-history", l);
    return (0, p.jsx)(uh.hD, {
        navigator: d,
        children: (0, p.jsx)(uh.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(ux, {
                    className: dp.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(uS.Ch, {
                        className: dp.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(df, { className: ih()(dp.Nj, dp.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dI(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oW.Z, {
            className: dp.K1,
            children: [
                (0, p.jsx)("div", {
                    className: dp.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u5.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: dp.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u5.qm[t.paymentGateway],
                        billingHistoryLink: (0, aC.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function d_(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = x.useState(uU),
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
                                l = i.receipts.map(uM);
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
        r = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: dp.GD,
              children: [
                  null != r && a ? (0, p.jsx)(dI, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: ih()(dp.PQ, dp.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: ih()(dp.Nj, dp.Bd),
                                    children: (0, p.jsxs)(lj.A, {
                                        className: dp.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: u$.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: dp.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: u$.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(dx, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, p.jsx)(n9.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(n9.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oP.y, {});
}
var dN = n(500597);
let db = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, I.bG)([ud.default], () => ud.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dN.kb, {}), (0, p.jsx)(d_, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    dC = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [db],
    }),
    dy = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [uE, dC],
        useObscuredNotice: oI.L,
    }),
    dv = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: ox.CreditCardIcon,
        buildLayout: () => [dy],
    });
var dj = n(70283),
    dO = n(682618),
    dR = n(997101);
let dD = {
        [dR.d.US]: [
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
        [dR.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
        [dR.d.FR]: [
            {
                id: "micromania",
                name: "Micromania",
                url: "https://www.micromania.fr/p/carte-discord-25-euros-166241.html",
            },
        ],
    },
    dL = [];
function dP(e) {
    return null == e ? dL : (dD[e] ?? dL);
}
var dG = n(92202),
    dM = n(45052),
    dU = n(597758),
    dV = n(35587),
    dk = n(86379);
let dw = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dN.uK,
        usePredicate: () => (0, dk.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dF = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dw] });
var dB = n(704333),
    dX = n(414499),
    dz = n(31300);
function dH(e) {
    let { enabled: t } = (0, dG.K)({ location: e }),
        n = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.storeCountry?.country);
    return t && dP(n).length > 0;
}
var dY = n(178881);
function dW() {
    return n.e(5660).then(n.bind(n, 946647));
}
function dK(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(n9.E, {
        variant: "body-xs/normal",
        color: "text-default",
        className: dY.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dZ = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dq],
        usePredicate: () => dH("GiftInventoryMarketingBanner"),
    }),
    dq = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dH("GiftCardsGiftInventoryBanner"),
                t = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.storeCountry?.country),
                n = ov("gift_inventory_banner"),
                i = x.useMemo(
                    () =>
                        dP(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n("retailer", { partner: e.id, url: e.url }), (0, o_.A)(e.url));
                            },
                        })),
                    [t, n],
                ),
                l = x.useCallback(() => {
                    (n("billing_settings"), (0, ng.openUserSettings)(S.X.BILLING_PANEL));
                }, [n]),
                s = x.useCallback(() => {
                    (n("learn_more", { url: oj.C }), (0, o_.A)(oj.C));
                }, [n]);
            return e
                ? (0, p.jsx)(oy, {
                      surface: "gift_inventory_banner",
                      size: "compact",
                      title: V.intl.string(oO.default.Ja5Q8Z),
                      graphicLottie: dW,
                      actions: i,
                      children: (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dK, {
                                  icon: dB.ServerGridIcon,
                                  children: V.intl.string(oO.default["9xo1g9"]),
                              }),
                              (0, p.jsx)(dK, { icon: dX.CloudIcon, children: V.intl.string(oO.default.I5UWh9) }),
                              (0, p.jsx)(dK, {
                                  icon: uk.GiftIcon,
                                  children: V.intl.format(oO.default.ZuneBP, { onBillingSettingsClick: l }),
                              }),
                              (0, p.jsx)(dK, {
                                  icon: dz.ScreenIcon,
                                  children: V.intl.format(oO.default.UwYHGm, { websiteUrl: s }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dQ = n(982240),
    dJ = n(620301),
    d$ = n(914410),
    d0 = n(339514),
    d1 = n(573343);
function d2(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: ih()(d1.fO, { [d1.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: d1.si }),
            (0, p.jsxs)("div", {
                className: d1.tc,
                children: [
                    (0, p.jsx)(n9.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(d0.default.qvx9E4, { count: (0, dQ.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d3(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: d1.dw,
        children: t.map((e) => (0, p.jsx)(d2, { tier: e, iconUrl: (0, dM.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d5(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, dJ.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: _.ZSU.BUTTON_CTA, objectType: _.btD.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: d1.NG,
        children: (0, p.jsx)(j.$, {
            variant: "primary",
            icon: uk.GiftIcon,
            text: V.intl.string(d0.default.DZnomS),
            onClick: l,
        }),
    });
}
function d4(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, dQ.rL)(i),
        a = (0, dQ.rL)(l),
        o = (0, dM.GZ)(n, i, l),
        u = (0, dM.Se)(i),
        d = (0, dM.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(d0.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(d0.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: d1.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: d1.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: d1.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: d1.Qs,
                    children: [
                        (0, p.jsx)(n9.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(d$.Ay, { variant: d$.qP.BLUE, weight: d$.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(n9.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            className: d1.qg,
                            children: V.intl.format(d0.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: d1.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: d1.qS }),
                    }),
            ],
        })
    );
}
function d6(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, I.cf)([dQ.Ay], () => ({
            badgeProgress: dQ.Ay.getSingleRequirementProgress(dj.$.GIFTING)?.current ?? 0,
            currentTier: dQ.Ay.getCurrentTier(dj.$.GIFTING),
            nextTier: dQ.Ay.getNextTier(dj.$.GIFTING),
            giftsRemaining: dQ.Ay.getRemainingToNextTier(dj.$.GIFTING),
            tiers: dQ.Ay.getBadgeById(dj.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: d1.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: d1.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(d4, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, p.jsx)("div", { className: d1.yF }),
                                  ],
                              }),
                          (0, p.jsx)(d3, { tiers: r, currentTier: i }),
                          (0, p.jsx)(n9.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: d1.PJ,
                              children: V.intl.string(d0.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(d5, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let d8 = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(d0.default.sFokBp),
        buildLayout: () => [d7],
        usePredicate: () => {
            let e = (0, dM.F5)("gift_inventory"),
                t = (0, I.bG)([dQ.Ay], () => dQ.Ay.getBadgeById(dj.$.GIFTING));
            return e && null != t;
        },
    }),
    d7 = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(d0.default.sFokBp)],
        Component: () => (0, p.jsx)(d6, {}),
    });
var d9 = n(264779),
    ce = n(412260),
    ct = n(555393),
    cn = n(725807),
    ci = n(212168),
    cl = n(976860),
    cs = n(469778),
    cr = n(45938),
    ca = n(109802),
    co = n(869038),
    cu = n(380856);
function cd(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(lj.A, {
        className: ih()(cu.wx, n),
        align: lj.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: cu.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cc(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: ih()(cu.rf, n), children: t });
}
class cg extends x.PureComponent {
    static Header = cd;
    static Body = cc;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: ih()(cu.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cm = n(446263),
    cA = n(871123),
    cE = n(366523),
    ch = n(46653),
    cS = n(30793),
    cT = n(97352),
    cf = n(67480),
    cp = n(615396),
    cx = n(274904);
class cI extends x.PureComponent {
    _copyModeTimeout = new rK.Ep();
    state = { copyMode: ca.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case ca.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case ca.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        co.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, cr.AK)(t, n),
            (0, uz.C)(
                e,
                () => this.setState({ copyMode: ca.q.SUCCESS }),
                () => this.setState({ copyMode: ca.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: ca.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(lj.A, {
            direction: lj.A.Direction.VERTICAL,
            className: cx.Gj,
            children: [
                (0, p.jsx)(ca.e, {
                    className: cx.ph,
                    value: (0, cr.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uz.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s8.XD.BRAND,
                    buttonLook: s8.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cx.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(x.Fragment, {
                                  children: [
                                      V.intl.format(V.t.ltVZcJ, { hours: t.expiresAt.diff(iT()(), "h") }),
                                      (0, p.jsx)(x.Fragment, { children: " \u2014\xa0" }),
                                  ],
                              })
                            : null,
                        (0, p.jsx)(ie.D, {
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
class c_ extends x.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await co.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && co.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cA.bF)(e)
            ? (0, p.jsx)(cE.e, { shape: "square", sku: e, containerClassName: cx.ez })
            : null != t
              ? (0, p.jsx)(cm.A, { giftStyle: t, className: cx.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(li.A, { game: n, size: li.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cA.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ih()(cx.Oc, cx.ic),
                  children: [
                      (0, p.jsx)(li.A, { game: n, size: li.M.XSMALL, skuId: e.id, className: cx._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cx.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
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
            (0, p.jsx)("div", { className: cx.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lj.A, {
            justify: lj.A.Justify.BETWEEN,
            align: lj.A.Align.CENTER,
            className: cx.pe,
            children: [
                (0, p.jsx)(n9.E, { variant: "body-md/normal", children: V.intl.string(V.t.lELyPj) }),
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
        return (0, p.jsxs)(cg, {
            className: i,
            children: [
                (0, p.jsx)(ie.D, {
                    onClick: this.handleToggleOpen,
                    className: cx.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cg.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cx.MY,
                            children: [
                                (0, p.jsxs)(lj.A, {
                                    align: lj.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cx.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uB.A, {
                                    direction: a ? uB.A.Directions.UP : uB.A.Directions.DOWN,
                                    className: cx.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cg.Body, {
                          children: s
                              ? (0, p.jsx)(oP.y, { className: cx.u1 })
                              : (0, p.jsxs)(x.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(cI, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cN = I.Ay.connectStores([cf.A, tu.A, cS.A, i8.A, cT.A, ch.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = cf.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cS.A.getForGifterSKUAndPlan(ch.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: cS.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cS.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i8.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cp.c9)(n) : null,
        giftCodes: s,
    };
})(c_);
var cb = n(725570),
    cC = n(736653),
    cy = n(46054);
let cv = iT().duration(30, "days");
var cj = n(416052),
    cO = n(878309);
function cR(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(l_.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cO.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cO.t4,
            children: [
                (0, p.jsx)(b.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, p.jsx)(n9.E, { variant: "body-md/normal", className: cO.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cD = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = x.useState(null),
        o = (0, t0.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (x.useEffect(() => {
        null == i &&
            (0, d9.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(cR, { onClose: t, transitionState: s })
        : null == i
          ? (0, p.jsx)(oP.y, { className: cO.Lq })
          : (0, p.jsx)(l_.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cO.N1,
                    children: [
                        (0, p.jsx)("div", { className: cO.Qw }),
                        (0, p.jsx)(b.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, p.jsx)(n9.E, {
                            variant: "body-md/normal",
                            className: cO.G3,
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
                            let e = (0, d9.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(ld.c, { className: cO.M5 }),
                        (0, p.jsx)(lA.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, p.jsx)(cj.A, {
                                value: i,
                                buttonColor: s8.$n.Colors.BRAND,
                                buttonLook: s8.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cL = n(136380);
function cP(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cC.Ay)(),
        d = (0, d9.WD)(n.id, u),
        c = null != i,
        g = x.useMemo(
            () =>
                (0, ip.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? iT()(n.outboundRedemptionEndDate)
                            : iT()(n.endDate).add(cv)
                        : iT()(n.endDate),
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
        A = (0, ct.N)()?.isEligible === !0,
        E = x.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cL.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cL.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cL.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cL.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: cL.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: h }),
                                            (0, p.jsx)(n9.E, {
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
                        (0, p.jsx)(n9.E, {
                            className: cL.GL,
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: cy.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(cb.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cD, {
                            ...e,
                            onClose: E,
                            onClaim: dU.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cG(e) {
    let { redesign: t = !1 } = e,
        n = (0, I.yK)([cs.A], () => cs.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, ct.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dV.y7)(),
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
                      className: cL.N1,
                      children: [
                          (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, p.jsx)(ld.c, { className: cL.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: cL.uo,
                      children: [
                          (0, p.jsx)(aA.NitroWheelIcon, {
                              size: "md",
                              color: n6.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cL.PC,
                          }),
                          (0, p.jsx)(n9.E, {
                              variant: "body-md/normal",
                              className: cL.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tH.default)(), (0, cl.pX)(_.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(cn.A, {
                              showGradient: !0,
                              className: cL.aA,
                              subscriptionTier: t3.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(ci.A, {
                className: cL.Yj,
                isShown: !1 === i && c,
                type: ci.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cL.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cP, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, p.jsx)(cP, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  cN,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t3.FB,
                                  },
                                  (0, cr.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  cN,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t3.Bu,
                                  },
                                  (0, cr.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  cN,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t3.Bu,
                                  },
                                  (0, cr.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cM = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: cV,
        buildLayout: () => [cU],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, I.cf)(
                    [ce.A],
                    () => ({
                        claimedOutboundPromotionCodes: ce.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ce.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dV.T1)({ includeClaimedPromotions: !0 }),
                i = (0, d9.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cU = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cV()],
        Component: () => (0, p.jsx)(cG, { redesign: !0 }),
    });
function cV() {
    return V.intl.string(V.t.YzjdWJ);
}
var ck = n(339048),
    cw = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cF = n(183636),
    cB = n(949192);
function cX() {
    var e, t;
    let n,
        i,
        l = (0, I.yK)([cs.A], () => cs.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, cr.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = x.useState(!1);
    if (
        (x.useEffect(() => {
            (0, ck.XJ)().then(() => a(!0));
        }, []),
        (e = cw.GIFT_INVENTORY),
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
                        "focused" === cF.A.getState() &&
                            (0, cB.pM)(Error(`${e} load timed out`), {
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
        return (0, p.jsx)(oP.y, { className: cL.Lq });
    if (0 === Object.keys(s).length)
        return (0, p.jsxs)("div", {
            className: cL.p$,
            children: [
                (0, p.jsx)(uX.H, { className: cL.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cL.WO,
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
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, cr.X6)(e);
            return (0, p.jsx)(cN, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, p.jsx)(q.B, { gap: "lg", children: o });
}
let cz = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cY, buildLayout: () => [cH] }),
    cH = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cY()], Component: () => (0, p.jsx)(cX, {}) });
function cY() {
    return V.intl.string(V.t.FWe6CP);
}
var cW = n(532446),
    cK = n(499454);
class cZ extends x.Component {
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
                    (await (0, oF.Qp)(n),
                        (0, oF.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oG.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, cr.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await co.Ay.resolveGiftCode(e);
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
                (0, cK.h)({ processedCode: e }),
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
        return (0, p.jsx)(n7.n, {
            label: e ? void 0 : V.intl.string(V.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(cW.M, {
                    children: [
                        (0, p.jsx)(lb.k, {
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
function cq(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, ua.c)({ location: "UserSettingsBilling" }),
        i = x.useContext(td.Ig),
        l = (0, I.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cZ, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let cQ = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cJ],
        usePredicate: () => !(0, dk.Hp)(),
    }),
    cJ = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cq, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    c$ = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dZ, cQ, cM, d8, cz, dF],
        initialize: () => {
            (dU.Ay.fetchClaimedOutboundPromotionCodes(), (0, dM.Ig)("gift_inventory") && (0, dO.o0)(dj.$.GIFTING));
        },
    }),
    c0 = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uk.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dV.IO)().length;
            return x.useMemo(() => ({ badgeType: f.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = ua.A.getConfig(e).enabled,
                n = dG.A.getConfig(e).enabled,
                i = dP(sp.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && i
                ? [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [c$],
    });
var c1 = n(659758),
    c2 = n(839667),
    c3 = n(517352),
    c5 = n(831259),
    c4 = n(462887),
    c6 = n(73825),
    c8 = n(531260),
    c7 = n(160946),
    c9 = n(721668),
    ge = n(224016),
    gt = n(526292),
    gn = n(881489),
    gi = n(300349),
    gl = n(106512),
    gs = n(175020),
    gr = n(403227),
    ga = n(812537),
    go = n(103411),
    gu = n(190187),
    gd = n(930861),
    gc = n(854627),
    gg = n(619019),
    gm = n(326084),
    gA = n(851746),
    gE = n(664654),
    gh = n(610709),
    gS = n(912140),
    gT = n(953727);
let gf = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gT.A)({ ...l }),
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
    gp = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cC.Ay)(),
            s = (0, c4.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gT.A)({ ...i }),
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
var gx = n(387316),
    gI =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let g_ = "url(#gradient)",
    gN = (e) => {
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
        let g = (0, cC.Ay)(),
            m = (0, c4.q)(g),
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
                            return g_;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : g_;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: gx.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gx.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? gx.F3 : void 0,
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
                (0, p.jsx)("div", { className: gx.Vw, children: n }),
            ],
        });
    };
var gb = n(104773);
function gC(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = x.useMemo(() => (0, gS.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: gb.Q7,
        children: (0, p.jsx)("div", {
            className: gb.Nk,
            children: null != l && (0, p.jsx)("img", { className: gb.CH, alt: i, src: l }),
        }),
    });
}
let gy = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gI.NITRO_GEM,
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
        className: ih()(gb.G3, n),
        children: (0, p.jsx)(gN, {
            animationClassName: ih()(gb._0, { [gb.uJ]: T, [A ?? ""]: T }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gI.NITRO_GEM:
                        return (0, p.jsx)(gf, {
                            className: T ? gb.Ow : void 0,
                            backgroundColor: ih()(gb.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gI.NITRO_LOGO:
                        return (0, p.jsx)(gp, { circleColor: E, ellipseOpacity: m });
                    case gI.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(gC, {
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
function gv(e) {
    let { hasSentAll: t } = e;
    return V.intl.string(V.t.USo4s7);
}
function gj(e) {
    let { helpdeskArticle: t, referralsStatuses: n } = e;
    return (function (e) {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
        return t
            ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
            : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
    })({ hasSentAll: n.sent >= 3, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
}
var gO = n(14313);
function gR(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, gc.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, p.jsx)(b.D, { variant: "heading-sm/semibold", className: gO.n5, children: n });
    return (0, p.jsx)(lS.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, p.jsx)("div", { className: gO.Lg, children: r }),
    });
}
function gD(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: gO.Ip,
        children: [
            (0, p.jsx)("div", { className: gO.Ej }),
            (0, p.jsx)("div", { className: ih()({ [gO.ch]: t > n, [gO.q_]: t === n }) }),
        ],
    });
}
function gL(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: gO.ZM,
        children: [
            (0, p.jsx)(gR, { userRecord: i, placement: 1 }),
            (0, p.jsx)(gD, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(gR, { userRecord: l, placement: 2 }),
            (0, p.jsx)(gD, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(gR, { userRecord: s, placement: 3 }),
        ],
    });
}
function gP(e) {
    let { analyticsLocations: t } = e;
    (td.default.track(_.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
        (0, lN.mM)(async () => {
            let { default: e } = await Promise.all([n.e(647658), n.e(228304)]).then(n.bind(n, 581846));
            return (n) => (0, p.jsx)(e, { ...n, sourceAnalyticsLocations: t });
        }));
}
let gG = function (e) {
    let { variant: t = "default" } = e,
        n = (0, I.bG)([gA.A], () => gA.A.getRecipientStatus()),
        { referralSentUsers: i } = (0, gE.J)(),
        l = x.useMemo(() => i.map((e) => new gg.A(e)), [i]),
        s = { redeemed: 0, converted: 0, sent: n.size };
    n.forEach((e) => {
        (e === gm.aK.REDEEMED && s.redeemed++, e === gm.aK.CONVERTED && (s.redeemed++, s.converted++));
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
                className: gO.W0,
                children: [
                    (0, p.jsx)("div", {
                        className: gO.xh,
                        children: (0, p.jsx)(gh.fx, { nReferralsSent: s.sent, imageSize: 56 }),
                    }),
                    (0, p.jsxs)("div", {
                        className: gO.z1,
                        children: [
                            (0, p.jsx)(b.D, { variant: "heading-lg/semibold", children: gv({ hasSentAll: r }) }),
                            (0, p.jsx)(n9.E, {
                                variant: "body-sm/normal",
                                children: gj({ helpdeskArticle: a, referralsStatuses: s }),
                            }),
                            (0, p.jsx)(gh.ZP, { referralSentUsers: l, className: gO.D1 }),
                        ],
                    }),
                    (0, p.jsx)(j.$, {
                        variant: "expressive",
                        text: V.intl.string(r ? V.t.SY9tyI : V.t.Lm2nFc),
                        onClick: () => gP({ analyticsLocations: o }),
                    }),
                ],
            }),
        });
    let c = (0, p.jsxs)("div", {
            className: gO.hE,
            children: [
                (0, p.jsx)(gy, { percentage: d, progressCircleVariation: gI.NITRO_LOGO, iconClassName: gO.ER }),
                (0, p.jsxs)("div", {
                    className: gO.Ns,
                    children: [
                        (0, p.jsx)(b.D, {
                            variant: "heading-xl/semibold",
                            className: gO.R0,
                            children: gv({ hasSentAll: r }),
                        }),
                        (0, p.jsx)(gL, { userRecords: l }),
                        (0, p.jsx)(n9.E, {
                            variant: "body-sm/normal",
                            children: gj({ helpdeskArticle: a, referralsStatuses: s }),
                        }),
                        (0, p.jsx)("div", {
                            className: gO.Fb,
                            children: (0, p.jsx)(gd.wL, {
                                "data-migration-pending": !0,
                                className: gO.r$,
                                color: s8.XD.CUSTOM,
                                onClick: () => gP({ analyticsLocations: o }),
                                onlyShineOnHover: !0,
                                children: (0, p.jsxs)("div", {
                                    className: gO.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gO.QH,
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
            className: ih()(gO.kL, { [gO.AP]: g }),
            children: (0, p.jsx)("div", { ref: u, className: ih()(gO.d_, { [gO.kS]: g }), children: c }),
        }),
    });
};
var gM = n(194509),
    gU = n(465794),
    gV = n(774774),
    gk = n(156601),
    gw = n(543213),
    gF = n(88001),
    gB = n(107198),
    gX = n(487518),
    gz = n(956537),
    gH = n(185062);
let gY = "to_premium_home_button",
    gW = "premium home page";
function gK(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        { enabled: s } = gi.A.useConfig({ location: "PremiumManagementSettings" }),
        r = s && (0, c4.q)(l) ? "text-strong" : "text-overlay-light",
        a = t.hasActiveTrial,
        o = t.planIdFromItems === t3.gD.PREMIUM_YEAR_TIER_2,
        u = t.hasAnyPremiumGroup,
        d = (0, c8.A)(),
        c = null != t.trialEndsAt ? iT()(t.trialEndsAt).diff(iT()(), "d") : 0,
        g = t3.hd[t.planIdFromItems],
        m = aC.Ay.getDefaultPrice(g.id),
        A = aC.Ay.formatPriceString(m, g.interval);
    if (n || a) {
        let e = (0, c4.M)(l) ? gV.at.PREMIUM_TIER_2_WHITE_FILL : gV.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !a && (o || u)
                    ? (0, p.jsx)(gV.e4, { text: V.intl.string(V.t.EyjDRE), className: gX.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gV.HU, {
                                  text: a ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gX.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gX.on }),
                          ],
                      }),
                (0, p.jsx)(b.D, {
                    variant: "heading-sm/medium",
                    color: r,
                    className: gX.KB,
                    children: (function () {
                        if (a) return V.intl.format(V.t["2CGBri"], { remainingTime: c, price: A });
                        if (u && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u9.$g)(m.amount, m.currency);
                            return V.intl.format(gB.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return o
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: aC.Ay.getExpectedRenewalDate(t, d),
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
    return (0, p.jsx)(gk.A, {
        color: r,
        variant: s ? "body-sm/medium" : void 0,
        className: s ? gX.rf : void 0,
        subscriptionTier: t3.pe.TIER_2,
        interval: g.interval,
    });
}
function gZ() {
    let { enabled: e } = gi.A.useConfig({ location: "PremiumManagementSettings" }),
        t = (0, gt.k5)(),
        n = (0, gt.nf)(),
        i = (0, cC.Ay)(),
        l = e && (0, c4.q)(i),
        s = l ? "text-strong" : "text-overlay-light",
        r = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
        a = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        o = a?.isPremiumWithPremiumGroup(),
        u = (0, c8.A)(),
        d = (0, gn.ds)(),
        c = null !== r && null !== r.planIdFromItems;
    if (!c && !u.isFractionalPremiumActive && !o) return null;
    let g = u.isFractionalPremiumActive,
        m = null !== r && r.hasActiveTrial,
        A = (0, p.jsx)(gw.ZP, {
            featureSet: a?.isPremiumGroupPrimary()
                ? gw.Nz.PREMIUM_GROUP_PRIMARY
                : a?.isPremiumGroupMember()
                  ? gw.Nz.PREMIUM_GROUP_MEMBER
                  : g
                    ? gw.Nz.FRACTIONAL_PREMIUM
                    : gw.Nz.DEFAULT,
            enablePremiumBrandRefresh: e,
            textVariant: e ? "body-sm/medium" : void 0,
        });
    return (0, p.jsxs)("div", {
        className: ih()(gX.$Y, { [gX.J5]: t || m, [gX.gd]: e }),
        children: [
            (0, p.jsxs)("div", {
                className: gX.jp,
                children: [
                    o
                        ? (0, p.jsx)(b.D, { variant: "nitro-md", color: s, className: gX._K, children: (0, gF.DP)() })
                        : (0, p.jsx)(ge.A, { className: gX.TJ, color: l ? "var(--text-strong)" : void 0 }),
                    o && !t
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : g && !d
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gV.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gX.LW,
                                        colorOptions: gV.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(b.D, {
                                        variant: "heading-sm/medium",
                                        color: s,
                                        className: gX.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : c
                            ? (0, p.jsx)(gK, {
                                  premiumSubscription: r,
                                  isDiscountApplied: t,
                                  activeDiscountInfo: n,
                                  theme: i,
                              })
                            : d
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gV.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gX.uS,
                                            colorOptions: (0, c4.M)(i)
                                                ? gV.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gV.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(b.D, {
                                            variant: "heading-sm/medium",
                                            color: s,
                                            className: gX.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    e ? (0, p.jsx)(q.B, { direction: "vertical", gap: 12, className: gX.bY, children: A }) : A,
                    g && !c
                        ? (0, p.jsxs)(s9.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, p.jsx)(gU.A, {
                                      defaultTextOverride: d ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gY,
                                              target: gW,
                                          }),
                                              (0, tH.default)(),
                                              (0, cl.pX)(_.BVt.APPLICATION_STORE));
                                      },
                                      variant: e ? "secondary" : "overlay-secondary",
                                      fullWidth: !e,
                                      size: "md",
                                      text: d ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, p.jsxs)(s9.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, p.jsx)(j.$, {
                                      variant: l ? "primary" : "overlay-primary",
                                      fullWidth: !e,
                                      onClick: () => {
                                          (td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gY,
                                              target: gW,
                                          }),
                                              (0, tH.default)(),
                                              (0, cl.pX)(_.BVt.APPLICATION_STORE));
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
                className: gX.ah,
                children: (0, p.jsx)("img", {
                    className: gX.ah,
                    alt: "",
                    src: e ? gH.A : "/assets/3aaa2c2d1874c196.svg",
                }),
            }),
        ],
    });
}
function gq() {
    let { enabled: e } = gi.A.useConfig({ location: "PremiumManagementSettings" });
    function t() {
        td.default.track(_.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: "gifting_button", target: "payment modal" });
    }
    return e
        ? (0, p.jsx)(gs.A, {
              variant: "settings",
              location: tk.A.PREMIUM_SETTINGS,
              analyticsLocation: {},
              onGiftClick: t,
          })
        : (0, p.jsxs)("div", {
              className: gX.T1,
              children: [
                  (0, p.jsx)("img", { className: gX.GY, alt: "", src: gz }),
                  (0, p.jsxs)("div", {
                      className: gX.b4,
                      children: [
                          (0, p.jsx)(b.D, {
                              className: gX.Vz,
                              variant: "heading-xl/semibold",
                              children: V.intl.string(V.t["3KomGa"]),
                          }),
                          (0, p.jsx)(n9.E, {
                              className: gX.Oi,
                              variant: "body-sm/normal",
                              children: V.intl.string(V.t.yQ06u1),
                          }),
                          (0, p.jsx)(gM.A, {
                              className: ih()(gX.Tp, gX._c),
                              textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gX.VV },
                              color: s8.$n.Colors.CUSTOM,
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          });
}
function gQ(e) {
    let { premiumSubscription: t, giftPromotion: n, showReferral: i } = e,
        { enabled: l } = gi.A.useConfig({ location: "PremiumManagementSettings" }),
        { analyticsLocations: s } = (0, ez.Ay)(),
        r = x.useRef(null),
        [a, o] = x.useState(!1),
        u = !!t?.hasActiveTrial;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: l ? 24 : 40,
                className: l ? gX.W0 : void 0,
                children: [
                    n,
                    (0, p.jsx)(gZ, {}),
                    i && (0, p.jsx)(gG, { variant: l ? "settings" : "default" }),
                    null == n && (0, p.jsx)(gq, {}),
                    l
                        ? (0, p.jsx)(ga.A, {
                              variant: "settings",
                              className: gX.hM,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanTier: t3.PremiumTypes.TIER_2,
                          })
                        : (0, p.jsx)(gr.A, {
                              hideCTAs: !0,
                              headingOverride: V.intl.string(V.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanColumnClassName: gX.JG,
                              selectedPlanTier: t3.PremiumTypes.TIER_2,
                          }),
                ],
            }),
            (0, p.jsx)(c5.L, {
                innerRef: r,
                onChange: (e) => {
                    e &&
                        !a &&
                        (td.default.track(_.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }),
                        o(!0));
                },
                children: (0, p.jsx)("div", { ref: r, className: gX._Z }),
            }),
        ],
    });
}
let gJ = function () {
        let e = (0, dk.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
            i = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
            l = (0, I.bG)([uu.A], () => uu.A.hasFetchedSubscriptions()),
            s = (0, c7.Y)(t3.T7),
            [r, a] = x.useState(!0),
            o = (0, c8.A)({ forceFetch: !0 }),
            u = (0, I.bG)([ce.A], () => {
                let e = ce.A.getMarketingComponentBySurface(c3.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return e?.surface ?? null;
            }),
            d = !(oY.Fr || oY.v1) && null != u;
        (0, gu.i)();
        let c = (0, go.m)();
        if (
            (x.useEffect(() => {
                !(async function () {
                    (e || (await Promise.all([ow.hP(), ow.$o(), (0, c6.zS)(null, null, _.tF5.DISCOVERY)])), a(!1));
                })();
            }, [e]),
            e)
        )
            return (0, p.jsx)(dN.uK, {});
        let g = l && null !== i && s,
            m = o.fetched && o.isFractionalPremiumActive,
            A = n?.isPremiumWithPremiumGroup();
        return g || m || r || A
            ? null != n && (g || m || A) && !r
                ? (0, p.jsx)(ez.f5, {
                      value: t,
                      children: (0, p.jsx)(gQ, {
                          premiumSubscription: i,
                          giftPromotion: d ? (0, p.jsx)(gl.m, { config: u }) : null,
                          showReferral: c,
                      }),
                  })
                : (0, p.jsx)(oP.y, {})
            : (0, p.jsx)(c9.A, { title: V.intl.string(V.t.dyq9TR), note: null });
    },
    g$ = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
            return (0, aC.YE)(e, t3.PremiumTypes.TIER_2) ? (0, p.jsx)(gJ, {}) : (0, p.jsx)(c2.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    g0 = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [g$] }),
    g1 = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: oI.L,
        buildLayout: () => [g0],
    }),
    g2 = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: aA.NitroWheelIcon,
        usePersistentBadge: function (e) {
            let t = (0, c1.e)(e);
            return x.useMemo(() => ({ badgeType: f.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [g1],
    });
var g3 = n(104510),
    g5 = n(559201),
    g4 = n(859241),
    g6 = n(527113),
    g8 = n(338548),
    g7 = n(504047),
    g9 = n(711014),
    me = n(178368),
    mt = n(809545),
    mn = n(168482);
function mi() {
    return (0, p.jsxs)("div", {
        className: mt.iE,
        children: [
            (0, p.jsx)("img", { className: mt.Kk, alt: "", src: mn }),
            (0, p.jsxs)("div", {
                className: mt.pq,
                children: [
                    (0, p.jsx)(n9.E, { variant: "body-lg/semibold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, p.jsx)(n9.E, {
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
                    ((0, cl.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                },
            }),
        ],
    });
}
var ml = n(365199),
    ms = n(233824),
    mr = n(443865),
    ma = n(165862),
    mo = n(473145);
function mu(e) {
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
                      iconLeft: mr.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: mr.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(ma.W, {
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
                    (0, lN.mM)(async () => {
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
            (0, mo.I5)(t)
                ? (0, p.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lN.mM)(async () => {
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
                          (0, lN.mM)(async () => {
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
var md = n(545934),
    mc = n(682163),
    mg = n(987144),
    mm = n(864310),
    mA = n(290413);
function mE(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mm.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? mA.OA,
        children: [
            (0, p.jsx)(mc.Ay, { className: mA.$f, guild: t, size: mc.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: mA.gI,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: mA.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mA.QW,
                                children: [
                                    (0, p.jsx)(g3.BoostGemIcon, {
                                        className: mA.Wz,
                                        color: n6.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== _.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: mA.zk }),
                                        (0, p.jsx)(n9.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, mo.gb)(t.premiumTier, { useLevels: !1 }),
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
function mh(e) {
    let { guildId: t } = e,
        n = (0, I.bG)([lL.A], () => lL.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: mA.Nr,
              children: [
                  (0, p.jsx)(mE, { guild: n }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g3.BoostGemIcon,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, mg.g)({
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
var mS = n(747381);
let mT =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mf(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = x.useRef(null),
        a = (0, mo.I5)(t),
        o = x.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c8.A)(),
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
            let e = null != t.premiumGuildSubscription ? oH.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = x.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: ih()(mS.iq, { [mS.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: mS.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mS.bB, src: mT }),
                    A
                        ? (0, p.jsx)(n9.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(n9.E, { variant: "body-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: mS.zk }),
                                              (0, p.jsx)(n9.E, {
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
                                              (0, p.jsx)("div", { className: mS.zk }),
                                              (0, p.jsx)(n9.E, {
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
            (0, p.jsx)(aI.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(mu, {
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
                    (0, p.jsx)(ie.D, {
                        innerRef: r,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        className: mS.Mj,
                        ...e,
                        children: (0, p.jsx)(ml.MoreHorizontalIcon, {
                            size: "xs",
                            color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mp(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, I.bG)([lL.A], () => lL.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: mS.Nr,
        children: [
            (0, p.jsx)("div", {
                className: mS.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(mE, { guild: s, className: mS.OA }),
                                  (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tH.default)(),
                                              (0, ms.K4)({
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
                              className: mS.OA,
                              children: (0, p.jsx)(b.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    mf,
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
function mx(e) {
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
                                md.A.createFromServer(
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
                if ((!(0, mo.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: mS.kR,
        children: oH.default
            .keys(s)
            .map((e) => (0, p.jsx)(mp, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mI = n(502572),
    m_ = n(983511),
    mN = n(342744),
    mb = n(496431);
let mC = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mb.A)(n);
    return (0, p.jsx)(n9.E, {
        className: t,
        variant: "body-sm/medium",
        color: "text-muted",
        children: (0, ip.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var my = n(731536);
function mv(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = x.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, mo.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === t3.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: my.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: my.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: my._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: my.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: my.F8, src: mT }),
                                          (0, p.jsx)("div", {
                                              className: ih()(my.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: my.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: my.Qp,
                                      children: [
                                          (0, p.jsx)(n9.E, {
                                              variant: "heading-sm/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, p.jsx)(n9.E, {
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
                          (0, p.jsx)(mI.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: g3.BoostGemIcon,
                                      text: V.intl.string(V.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lN.mM)(async () => {
                                              let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(
                                                  n.bind(n, 770101),
                                              );
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, mg.g)({
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
                          mj,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, mo.I5)(e),
                              isCanceled: (0, mo.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mj(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = x.useRef(null),
        u = x.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(mC, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(n9.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(n9.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = l || s;
    return (0, p.jsxs)("div", {
        className: ih()(my.iq, { [my.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: my.kd,
                children: [(0, p.jsx)("img", { alt: "", className: my.bB, src: mT }), t],
            }),
            c &&
                (0, p.jsx)(aI.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(ma.W, {
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
                                                (0, lN.mM)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(m_.default, { ...e, guildBoostSlot: n }),
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
                                                (0, lN.mM)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(mN.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(ie.D, {
                            innerRef: o,
                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                            className: my.Mj,
                            ...e,
                            children: (0, p.jsx)(ml.MoreHorizontalIcon, {
                                size: "xs",
                                color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mO = n(834612);
function mR(e) {
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
              className: mO.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mO.b,
                      children: [
                          (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, p.jsx)(n9.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(mx, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mv, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mD = n(414184),
    mL = n(9146);
function mP() {
    return (0, p.jsxs)("div", {
        className: mL.iE,
        children: [
            (0, p.jsx)(b.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mL.kR,
                children: mD.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mL.Nr,
                            children: [
                                (0, p.jsx)(n, { className: mL.Kk }),
                                (0, p.jsx)(n9.E, {
                                    className: mL.h_,
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
var mG = n(847374),
    mM = n(232122),
    mU = n(665984);
function mV() {
    let [e, t] = x.useState(null),
        [n, i] = x.useState(null);
    return (0, p.jsxs)("div", {
        className: mU.iE,
        children: [
            (0, p.jsx)(b.D, { variant: "heading-xl/medium", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mU.p_,
                children: mM.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        ie.D,
                        {
                            tag: "li",
                            className: ih()(mU.Aw, { [mU.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mU.k7,
                                    children: [
                                        (0, p.jsx)(n9.E, {
                                            className: mU.b1,
                                            color: o,
                                            variant: "heading-sm/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(mG.ChevronSmallDownIcon, {
                                            size: "sm",
                                            color: n6.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mU.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(n9.E, {
                                        className: mU.ZF,
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
var mk = n(182859),
    mw = n(586428),
    mF = n(416763);
function mB() {
    let e = eC.A.getArticleURL(_.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mF.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mF.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mF.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mF.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(b.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(mw.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(mk.A, {
                variant: "member",
                className: mF.iO,
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
var mX = n(315629),
    mz = n(87719),
    mH = n(961085);
function mY() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
    if (null == e || aC.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mX.h, {
        color: "nitro-pink",
        className: mH.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mH.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mH.q3, src: mT }),
                    (0, p.jsxs)("div", {
                        className: mH.Tm,
                        children: [
                            (0, p.jsx)(n9.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: 2, boostCount: 2 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mH.xv,
                                children: [
                                    (0, p.jsx)(aA.NitroWheelIcon, { className: mH.nE }),
                                    (0, p.jsx)(n9.E, {
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
                icon: aA.NitroWheelIcon,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mz.e,
            }),
        ],
    });
}
var mW = n(532991);
function mK() {
    let e = (0, I.bG)([g7.A], () => g7.A.affinities),
        t = (0, I.bG)([g9.Ay], () => g9.Ay.getFlattenedGuildIds()),
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
              className: mW.i,
              children: [
                  (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mW.k, children: n.map((e) => (0, p.jsx)(mh, { guildId: e }, e)) }),
              ],
          });
}
var mZ = n(967246);
function mq(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mX.h, {
        color: "nitro-pink",
        className: mZ.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mZ.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mZ.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mZ.F8, src: mT }),
                            (0, p.jsx)("div", {
                                className: ih()(mZ.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mZ.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mZ.Tm,
                        children: [
                            (0, p.jsx)(n9.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mZ.xv,
                                children: [
                                    (0, p.jsx)(aA.NitroWheelIcon, { className: mZ.nE }),
                                    (0, p.jsx)(n9.E, {
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
                icon: g3.BoostGemIcon,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lN.mM)(async () => {
                        let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mg.g)({
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
var mQ = n(89150);
function mJ(e) {
    let { premiumSubscription: t } = e,
        n = (0, I.bG)([me.A], () => me.A.boostSlots),
        i = x.useMemo(() => Object.values(n), [n]),
        l = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        s = (0, I.bG)([g7.A], () => g7.A.affinities),
        r = (0, I.bG)([g9.Ay], () => g9.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, I.bG)([g4.A], () => g4.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, c8.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t3.xc.NONE,
        g = x.useMemo(() => {
            if (null == t || c) return 0;
            let e = aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mQ.GO,
        children: [
            (0, p.jsx)(dN.kb, { className: mQ.ek }),
            (0, p.jsx)(mB, {}),
            (0, p.jsx)(mY, {}),
            g > 0 && (0, p.jsx)(mq, { count: g }),
            d && (0, p.jsx)(g8.A, {}),
            !a && (0, p.jsx)(mi, {}),
            (0, p.jsxs)("div", {
                className: mQ.C_,
                children: [
                    (0, p.jsx)(mR, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(mK, {}),
                    (0, p.jsx)(g6.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mP, {}),
                    (0, p.jsx)(mV, {}),
                ],
            }),
        ],
    });
}
var m$ = n(819677);
let m0 = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            x.useEffect(() => {
                (ow.hP(), ow.$o(), (0, g5.CD)(), (0, c6.zS)(null, null, _.tF5.DISCOVERY), (0, g5.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, I.cf)([uu.A], () => ({
                    hasFetchedSubscriptions: uu.A.hasFetchedSubscriptions(),
                    premiumSubscription: uu.A.getPremiumTypeSubscription(),
                })),
                n = (0, c7.Y)(),
                i = (0, I.bG)([uo.A], () => uo.A.hasFetchedPaymentSources),
                l = (0, I.bG)([g4.A], () => g4.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = x.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, p.jsx)("div", { className: ih()(m$.kL, m$.Lq), children: (0, p.jsx)(oP.y, {}) })
                : (0, p.jsxs)("div", {
                      className: m$.kL,
                      children: [
                          (0, p.jsx)("div", { className: m$.Tp }),
                          (0, p.jsx)("div", { className: m$.Qs, children: (0, p.jsx)(mJ, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    m1 = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m0] }),
    m2 = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [m1],
    }),
    m3 = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: g3.BoostGemIcon,
        buildLayout: () => [m2],
    });
var m5 = n(153659),
    m4 = n(155984),
    m6 = n(357758),
    m8 = n(262077),
    m7 = n(281445),
    m9 = n(624479),
    Ae = n(626584),
    At = n(263775),
    An = n(945810);
let Ai = (0, An.mj)({
    name: "2026-10-gsh-change-payment-method",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Al = n(196736),
    As = n(685743),
    Ar = n(349085),
    Aa = n(342942),
    Ao = n(376205),
    Au = n(269249),
    Ad = n(758836),
    Ac = n(49999),
    Ag = n(105518),
    Am = n(439050);
let AA = new Ae.A("GameServerSubscriptionsSection");
function AE(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function Ah(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let AS = (e) => {
        let { subscriptionId: t, skuId: i } = e,
            { analyticsLocations: l } = (0, ez.Ay)(),
            s = (function (e) {
                let { location: t } = e;
                return Ai.useConfig({ location: t }).enabled;
            })({ location: "user_settings_subscriptions" }),
            r = x.useCallback(() => {
                var e;
                ((e = { subscriptionId: t, skuId: i, analyticsLocations: l }),
                    (0, lN.mM)(async () => {
                        let { default: t } = await n.e(498934).then(n.bind(n, 592149));
                        return (n) => (0, p.jsx)(t, { ...n, ...e });
                    }));
            }, [t, i, l]);
        return s
            ? (0, p.jsx)(j.$, { variant: "secondary", size: "sm", text: V.intl.string(V.t.SgX7Ra), onClick: r })
            : null;
    },
    AT = x.memo(function (e) {
        let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
            { analyticsLocations: l } = (0, ez.Ay)(),
            s = t.instance.subscriptionId,
            r = t.instance.planId,
            a = (0, Ar.A)(t.gameId, "cover") ?? t.coverUrl,
            [o, u] = (0, At.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
            d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
            c = ch.default.getId() ?? "0",
            { handleCopyServerIp: g, animateCopyIcon: m } = (0, As.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
            A = x.useCallback(() => {
                (0, Aa.A)({
                    provider: m7.X.SHOCKBYTE,
                    onAccept: () => {
                        (u(Ac.i.TAKE_ACTION), g());
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
                [uu.A, cT.A],
                () => {
                    let e = null != s ? uu.A.getSubscriptionById(s) : null;
                    if (null == e)
                        return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                    let t = null != e.canceledAt,
                        l = !t && null != e.renewalMutations,
                        r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                        a = null != r ? cT.A.get(r) : null,
                        o = null != a ? n.get(a.skuId) : null,
                        u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                        d =
                            null != u && o?.priceCurrency != null
                                ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, u9.$g)(u, o.priceCurrency) })
                                : null,
                        c = AE(e.currentPeriodEnd);
                    return {
                        hasSubscription: !0,
                        priceLabel: d,
                        dateLabel: t
                            ? V.intl.formatToPlainString(Ag.default["3aEgK6"], { date: c })
                            : l
                              ? V.intl.formatToPlainString(Ag.default.KFSA3M, { date: c })
                              : V.intl.formatToPlainString(Ag.default["9A6cRW"], { date: c }),
                        isCanceled: t,
                        isDanger: t || l,
                    };
                },
                [s, n, i],
                Ah,
            ),
            N = x.useCallback(() => {
                if (null == s) return;
                let e = uu.A.getSubscriptionById(s),
                    t = null != e ? AE(e.currentPeriodEnd) : "";
                (0, n8.A)({
                    title: V.intl.string(Ag.default.TEYPNR),
                    subtitle: V.intl.formatToPlainString(Ag.default.XR1WrB, { date: t }),
                    confirmText: V.intl.string(V.t["cY+Oob"]),
                    cancelText: V.intl.string(Ag.default.zjfaGH),
                    variant: "critical",
                    onConfirm: async () => {
                        try {
                            (await ow.M2(s, l), await ow.hP());
                        } catch (e) {
                            AA.error("Failed to cancel game server subscription", e);
                        }
                    },
                });
            }, [s, l]),
            b = x.useCallback(() => {
                if (null == s) return;
                let e = uu.A.getSubscriptionById(s);
                if (null == e) return;
                let t = e.items[0]?.planId,
                    a = null != t ? cT.A.get(t) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d = null != u && o?.priceCurrency != null ? (0, u9.$g)(u, o.priceCurrency) : "",
                    c = AE(e.currentPeriodEnd);
                (0, n8.A)({
                    title: V.intl.string(Ag.default.o96qbc),
                    subtitle: V.intl.formatToPlainString(Ag.default["7n6Qq+"], { price: d, date: c }),
                    confirmText: V.intl.string(V.t.iIvF2z),
                    cancelText: V.intl.string(V.t["ETE/oC"]),
                    variant: "primary",
                    onConfirm: async () => {
                        try {
                            await (0, c6.ur)(r);
                            let t = e.items;
                            (await ow.nV(
                                e,
                                { status: _.Dmq.ACTIVE, items: t, currency: e.currency },
                                { amount: 0, currency: e.currency },
                                (0, aC.UC)(t, e.currency),
                                l,
                            ),
                                await ow.hP());
                        } catch (e) {
                            AA.error("Failed to re-subscribe to game server subscription", e);
                        }
                    },
                });
            }, [s, r, l, n, i]),
            C = "" !== t.serverIp && ":" !== t.serverIp;
        return (0, p.jsxs)("div", {
            className: Am.nM,
            children: [
                (0, p.jsxs)("div", {
                    className: Am.M4,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Am.Vs,
                            "aria-hidden": !0,
                            children: [
                                null != a && (0, p.jsx)("img", { className: Am.uP, src: a, alt: "" }),
                                (0, p.jsx)("div", { className: Am.tw }),
                            ],
                        }),
                        (0, p.jsxs)("div", {
                            className: Am.CR,
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: t.serverName,
                                }),
                                (0, p.jsx)(n9.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                }),
                                C &&
                                    (d
                                        ? (0, p.jsxs)("div", {
                                              className: Am.CQ,
                                              children: [
                                                  (0, p.jsx)(n9.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-muted",
                                                      tag: "span",
                                                      lineClamp: 1,
                                                      children: t.serverIp,
                                                  }),
                                                  (0, p.jsx)(ie.D, {
                                                      className: Am.cL,
                                                      onClick: g,
                                                      "aria-label": V.intl.string(V.t.OpuAlK),
                                                      children: m
                                                          ? (0, p.jsx)(di.CheckmarkLargeIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            })
                                                          : (0, p.jsx)(m9.CopyIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            }),
                                                  }),
                                              ],
                                          })
                                        : (0, p.jsx)(uQ.A, {
                                              onClick: A,
                                              children: V.intl.string(Ag.default["f+F7H3"]),
                                          })),
                            ],
                        }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: Am.Rd,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Am.Ff,
                            children: [
                                null != h &&
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: h,
                                    }),
                                null != S &&
                                    (f
                                        ? (0, p.jsxs)("div", {
                                              className: Am.ez,
                                              children: [
                                                  (0, p.jsx)(i5.CircleErrorIcon, {
                                                      size: "xs",
                                                      color: "text-feedback-critical",
                                                  }),
                                                  (0, p.jsx)(n9.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-feedback-critical",
                                                      tag: "span",
                                                      children: S,
                                                  }),
                                              ],
                                          })
                                        : (0, p.jsx)(n9.E, {
                                              variant: "body-sm/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: S,
                                          })),
                            ],
                        }),
                        E && !T && null != s && (0, p.jsx)(AS, { subscriptionId: s, skuId: r }),
                        E &&
                            (T
                                ? (0, p.jsx)(j.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: V.intl.string(V.t.iIvF2z),
                                      onClick: b,
                                  })
                                : (0, p.jsx)(j.$, {
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
function Af(e) {
    let { servers: t } = e,
        n = (0, Al.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, Au.Y)(),
        l = (0, I.bG)([sp.default], () => aC.Ay.canUseShopDiscounts(sp.default.getCurrentUser())),
        s = x.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, I.yK)([uu.A], () => (0, Ao.HY)(t, i, (e) => uu.A.getSubscriptionById(e)), [t, i]);
    x.useEffect(() => {
        let e = r.filter((e) => !cT.A.isLoadedForSKU(e) && !cT.A.isFetchingForSKU(e));
        e.length > 0 && (0, c6.jv)(e).catch(() => {});
    }, [r]);
    let a = x.useCallback(() => {
        ((0, tH.default)(), (0, cl.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(Ad.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: Am.uW,
        children: [
            (0, p.jsxs)("div", {
                className: Am.wx,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(Ag.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: Am.h_,
                        children: [
                            (0, p.jsx)(n9.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(Ag.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(uQ.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(n9.E, {
                                        variant: "body-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(Ag.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: Am.p_,
                children: t.map((e) =>
                    (0, p.jsx)(AT, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var Ap = n(55766),
    Ax = n(696986),
    AI = n(364036);
function A_(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, p.jsx)(Ax.h, { size: 4 }),
            (0, p.jsx)(n9.E, { variant: "body-md/normal", className: AI.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, p.jsx)(Ax.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: AI.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AI.RI }),
                    (0, p.jsxs)("div", {
                        className: AI.FS,
                        children: [
                            (0, p.jsx)(b.D, {
                                variant: "heading-xl/semibold",
                                className: AI.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(n9.E, {
                                variant: "body-md/normal",
                                className: AI.h_,
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
var AN = n(872351),
    Ab = n(9113),
    AC = n(599941),
    Ay = n(384684),
    Av = n(2242);
let Aj = [];
var AO = n(885574),
    AR = n(805251),
    AD = n(912851),
    AL = n(182744);
let AP = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(ie.D, {
        onClick: i ? void 0 : n,
        className: AL.x6,
        children: (0, p.jsxs)("div", {
            className: AL.hQ,
            children: [
                i
                    ? (0, p.jsx)(oP.y, { type: oP.y.Type.PULSING_ELLIPSIS, className: AL.__invalid_spinner })
                    : (0, p.jsx)(n9.E, { variant: "body-md/medium", className: AL.Pf, children: t }),
                (0, p.jsx)(mG.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: AL.UE }),
            ],
        }),
    });
};
var AG = n(465932),
    AM = n(543767),
    AU = n(590885),
    AV = n(790284),
    Ak = n(636194),
    Aw = n(624456),
    AF = n(710144),
    AB = n(815332),
    AX = n(31637),
    Az = n(557506);
function AH(e) {
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
                        return (n(!0), await ow.M2(t, e), !0);
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
        c = i.role_benefits.benefits.filter((e) => e.ref_type === Av.bN.CHANNEL),
        g = i.role_benefits.benefits.filter((e) => e.ref_type === Av.bN.INTANGIBLE),
        m = iT()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = V.intl.formatToPlainString(V.t.KsMRP5, {
            numChannels: c.length,
            numAdditionalBenefits: g.length,
            subscriptionEndDate: m,
        });
    return (0, p.jsx)(l_.a, {
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
                null != u ? (0, p.jsx)(i$.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, p.jsx)(AX.x, { listingId: i.id, guildId: n.guild_id, className: Az.P }),
            ],
        }),
    });
}
var AY = n(319225),
    AW = n(746080),
    AK = n(883616);
function AZ(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, p.jsxs)("div", {
        className: AK.L0,
        children: [
            (0, p.jsxs)("div", {
                className: AK.a5,
                children: [
                    (0, p.jsx)(b.D, { variant: "body-xs/semibold", className: AK.HU, children: t }),
                    i &&
                        (0, p.jsx)(lS.m, {
                            text: l,
                            children: (0, p.jsx)(AO.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AK.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(b.D, { variant: "heading-xl/semibold", className: AK.sx, children: n }),
        ],
    });
}
function Aq(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ez.Ay)(),
        [i] = (0, AM.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, I.yK)([uo.A], () => [uo.A.hasFetchedPaymentSources, uo.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, p.jsx)(AU.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oP.y, {});
}
function AQ(e) {
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
        : (0, p.jsx)(lA.D, {
              label: V.intl.string(V.t["4neDM+"]),
              children: (0, p.jsx)("div", {
                  className: AK.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !l && (0, p.jsx)(AP, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(AP, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let AJ = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Aw.M)(e),
                n = (0, I.bG)([Ak.A], () => Ak.A.getSubscriptionListingForPlan(t)),
                i = (0, I.bG)([Ak.A], () =>
                    null != n ? Ak.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, I.bG)([lL.A], () => lL.A.getGuild(i?.guild_id)),
                [s, r] = x.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AC.XE)();
            x.useEffect(() => {
                s && null != l && null == Ak.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = iT()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u9.$g)(t.price, t.currency) : "",
                              l = iT()(t.createdAt).format("M/D/YY"),
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, AG.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    let {
            isCancelled: A,
            isPastDue: E,
            subscriptionPrice: h,
            memberSince: T,
            nextRenewalDate: f,
            nextRenewalLabel: N,
            isTrial: b,
        } = a,
        C = n.soft_deleted || null == l || m;
    return (0, p.jsxs)("div", {
        className: AK.kL,
        children: [
            (0, p.jsx)(AF.A, {
                onClick: r,
                className: AK.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != l && (0, p.jsx)(mc.Ay, { guild: l, active: !0, size: mc.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: AK.if,
                                children: [
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-md/medium",
                                        className: AK.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: AK.xp,
                                        children: [
                                            (0, p.jsx)(n9.E, {
                                                variant: "body-sm/normal",
                                                className: AK.KR,
                                                children: n.name,
                                            }),
                                            A
                                                ? (0, p.jsx)(AR.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : b
                                                  ? (0, p.jsx)(AR.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : E
                                                    ? (0, p.jsx)(lS.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              className: AK.qc,
                                                              children: (0, p.jsx)(AR.E, {
                                                                  type: { text: V.intl.string(V.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, p.jsx)(lS.m, {
                                                      text: V.intl.string(V.t.nv1IqK),
                                                      children: (0, p.jsx)("div", {
                                                          className: AK.Bi,
                                                          children: (0, p.jsx)(AR.E, {
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
                            (0, p.jsx)(ie.D, {
                                onClick: i(r),
                                "aria-label": V.intl.string(V.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, p.jsx)(mG.ChevronSmallDownIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ih()(AK.D6, { [AK.S7]: s }),
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
                          (0, p.jsx)("div", { className: AK.yF }),
                          (0, p.jsx)(AB.A, { groupListingId: i.id, subscription: t, className: AK.kE }),
                          (0, p.jsxs)("div", {
                              className: AK.Zx,
                              children: [
                                  (0, p.jsx)(AZ, { label: N, value: f }),
                                  (0, p.jsx)(AZ, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: h,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(AZ, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, p.jsx)(Ax.h, { size: 16 }),
                          !A &&
                              !m &&
                              (0, p.jsx)(lA.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, p.jsx)(Aq, { subscription: t }),
                              }),
                          !C &&
                              (0, p.jsx)(AQ, {
                                  isTrial: b,
                                  isCancelled: A,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lN.qf)((t) => (0, p.jsx)(AH, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, cl.pX)(_.BVt.CHANNEL(l.id, AW.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tH.default)(),
                                          AD.A.show(
                                              _.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (AV.A.setState({ subsection: eR.nR }),
                                                      (0, ng.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: async function () {
                                      try {
                                          (u(!0),
                                              await ow.QP(t, c),
                                              (0, AY.E)({
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
var A$ = n(661097);
let A0 = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, I.bG)([Ay.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Ay.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? Av.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Av.M_.NONE
                                  : Av.M_.IN_SUBSCRIPTION_SERVER;
                        })([Ay.A]),
                    ) === Av.M_.SUBSCRIBED,
                n = (0, I.bG)([uu.A], () => uu.A.getActiveGuildSubscriptions()),
                i = x.useRef(!1);
            return (
                x.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = uu.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !uu.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), ow.hP());
                }, [e, t]),
                n ?? Aj
            );
        })(),
        { loading: i } = (0, AC.eb)(n);
    return ((0, Ab.A)(oY.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oP.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(j.$, {
                        text: V.intl.string(V.t.hqyhKQ),
                        icon: AN.ArrowSmallUpIcon,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, p.jsx)(Ax.h, { size: 10 }),
                    (0, p.jsx)(n7.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: A$.A,
                            children: n.map((e) => (0, p.jsx)(AJ, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var A1 = n(327479),
    A2 = n(932012);
function A3(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, p.jsx)(Ax.h, { size: 4 }),
            (0, p.jsx)(n9.E, { variant: "body-md/normal", className: A2.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, p.jsx)(Ax.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: A2.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: A2._e }),
                    (0, p.jsxs)("div", {
                        className: A2.FS,
                        children: [
                            (0, p.jsx)(b.D, {
                                variant: "heading-xl/semibold",
                                className: A2.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, p.jsx)(n9.E, {
                                variant: "body-md/normal",
                                className: A2.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(A1.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var A5 = n(548411),
    A4 = n(417098),
    A6 = n(143582),
    A8 = n(915043),
    A7 = n(631466);
function A9(e) {
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
        className: ih()(A7.iE, t),
        children: [
            (0, p.jsx)("div", { className: ih()(A7.wx, i), children: n }),
            s && (0, p.jsx)("div", { className: A7.Qs, children: l }),
        ],
    });
}
var Ee = n(885996),
    Et = n(251843),
    En = n(664121),
    Ei = n(950305),
    El = n(943775),
    Es = n(123791),
    Er = n(900797),
    Ea = n(611643);
let Eo = x.createContext({ isOpen: !1, toggleOpen: () => {} });
function Eu(e) {
    let { children: t } = e,
        [n, i] = x.useReducer((e) => !e, !1),
        l = x.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(Eo.Provider, { value: l, children: t(n) });
}
Eu.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = x.useContext(Eo),
        s = i ? Er.ChevronSmallUpIcon : mG.ChevronSmallDownIcon,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, p.jsxs)(ie.D, {
        className: ih()(Ea.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(n9.E, { variant: "heading-xs/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Ed = n(627363),
    Ec = n(328968),
    Eg = n(163437),
    Em = n(3432);
function EA(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var EE = n(562312),
    Eh = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function ES(e) {
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
            [cT.A, cf.A, Ec.A, lL.A],
            () => {
                let e,
                    n = cT.A.get(r),
                    i = null != n ? cf.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? Ec.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Eg.PJ)(o.skuFlags),
                    d = u && null != l ? lL.A.getGuild(l) : void 0,
                    c = (0, Eg.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = cT.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, Ed.YY)(a),
        S = x.useMemo(() => (null != h ? (0, El.A)(h, 100) : null), [h]),
        T = g?.deleted ?? !1,
        f = null != g && (0, Eg.Se)(g),
        N = t.status === _.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, ez.Ay)(),
        [y] = (0, AM.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = EA(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(A9, {
        headerClassName: EE.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: EE.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(Et._, { src: S.href, imageClassName: EE.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: EE.aF,
                                      children: [
                                          (0, p.jsx)(b.D, {
                                              variant: "heading-sm/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(n9.E, {
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
                              className: EE.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(EI, {
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
                : (0, p.jsx)(oP.y, { type: oP.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(Ex, {
                    type: "warning",
                    title: f
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(Ex, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, p.jsx)(Ex, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: EE.zH,
                children: [
                    (0, p.jsx)(Ep, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: EE.yW,
                                          children: [
                                              (0, p.jsx)(En.ServerIcon, { size: "xs" }),
                                              V.intl.string(V.t.QjL3vn),
                                          ],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: EE._t,
                                              children: [
                                                  (0, p.jsx)(n9.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(mc.Ay, { guild: c, size: mc.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: EE.yW,
                                  children: [(0, p.jsx)(Ei.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(ET, { invoicePreview: y, subscriptionPlan: o }),
                    (0, p.jsx)(Ep, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: EA(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Ef, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(EN, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: T,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(E_, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function ET(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(Ep, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, u9.CE)((0, u9.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(Ep, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, u9.CE)((0, u9.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Ep, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(n9.E, { variant: "body-sm/semibold", children: s }),
                s !== i &&
                    (0, p.jsx)(lS.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(n9.E, {
                            variant: "body-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function Ef(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u9.CE)((0, u9.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(Ep, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(n9.E, { variant: "body-sm/medium", children: n }),
                    (0, p.jsx)(n9.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(Ep, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function Ep(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: EE.nM,
        children: [
            (0, p.jsx)(n9.E, { variant: "body-sm/medium", children: t }),
            (0, p.jsx)(n9.E, { variant: "body-sm/medium", className: EE.u4, children: n }),
        ],
    });
}
function Ex(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: EE.Xm,
        children: (0, p.jsx)(i$.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function EI(e) {
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
        c = (0, Eg.Se)(l),
        { analyticsLocations: g } = (0, ez.Ay)(),
        [m, A] = x.useState(!1),
        E = (0, Es.C)(t.id),
        h = (0, I.bG)([cf.A], () => cf.A.getParentSKU(i.skuId), [i.skuId]),
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
        className: EE.fw,
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
                                let { subscription: e } = await (0, ow.QP)(s, g);
                                if (null == e) return;
                                (0, lN.mM)(async () => {
                                    let { default: t } = await Promise.all([n.e(888454), n.e(52396)]).then(
                                        n.bind(n, 115623),
                                    );
                                    return (n) =>
                                        (0, p.jsx)(t, {
                                            ...n,
                                            storeListing: i,
                                            subscription: uj.A.createFromServer(e),
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
                            (0, lN.mM)(async () => {
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
function E_(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(Eu, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: EE.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: EE.wV,
                        children: [
                            e && (0, p.jsx)(n9.E, { variant: "body-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, p.jsx)(Eu.Toggle, {
                                className: EE.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, p.jsx)(Ee.F, { header: i, icon: (0, Em.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function EN(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: EE.Ji,
                children: (0, p.jsx)(lA.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, p.jsx)(oP.y, { type: oP.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: EE.Ji,
                  children: (0, p.jsxs)(A4.$T, {
                      color: A4.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: EE.Ji,
                  children: (0, p.jsx)(lA.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, p.jsx)(AU.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Eb = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    EC = n(856383);
let Ey = (0, I.UT)(cT.A, {
    getQueryId: _.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cT.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && EC.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c6.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var Ev = n(240248),
    Ej = n(237218),
    EO = n(763064);
function ER(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = x.useState(!1),
        [r, a] = x.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: EO.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(n9.E, {
                    className: EO.B0,
                    variant: "body-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(Er.ChevronSmallUpIcon, { color: n6.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(mG.ChevronSmallDownIcon, { color: n6.A.colors.TEXT_BRAND, size: "xs" }),
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
                (0, p.jsx)(n9.E, {
                    ...i,
                    className: EO.Qs,
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
var ED = n(920352);
function EL(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = x.useMemo(() => (null == n.thumbnail ? null : (0, Ej.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = Ey(n.skuId),
        u = x.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aC._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(A9, {
              className: ih()(ED.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: ED.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(Et._, { src: a.href, imageClassName: ED.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(b.D, { variant: "heading-sm/semibold", children: n.summary }),
                                      (0, p.jsx)(n9.E, { variant: "body-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, Ev.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: ED.h_,
                          children: (0, p.jsx)(ER, { variant: "body-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: ED.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, p.jsx)(Ee.F, { header: n, icon: (0, Em.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var EP = n(185438),
    EG = n(683380);
function EM(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, El.A)(t, 100),
        u = (0, Eg.PJ)(r.flags),
        d = u ? En.ServerIcon : Ei.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, I.bG)([lL.A], () => (u && null != g ? lL.A.getGuild(g) : void 0), [g, u]),
        A = (0, I.bG)(
            [cf.A],
            () => {
                if (null != a) return cf.A.get(a);
            },
            [a],
        ),
        E = EA(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: EG.wx,
                children: [
                    null != o && (0, p.jsx)(Et._, { src: o.href, imageClassName: EG.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(b.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: EG.p4,
                                children: [
                                    (0, p.jsxs)(b.D, {
                                        variant: "heading-sm/medium",
                                        className: EG.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n9.E, { variant: "body-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: EG.vP,
                                                    children: [
                                                        (0, p.jsx)(mc.Ay, { guild: m, size: mc.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(b.D, {
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
            (0, p.jsx)(Eu, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: EG._B,
                        children: [
                            (0, p.jsx)(n9.E, { variant: "body-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(n9.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(n9.E, {
                                            variant: "body-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(Eu.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: EG.x0,
                children: [
                    (0, p.jsx)(EL, {
                        storeListing: i,
                        className: EG.o3,
                        cta: (0, p.jsxs)("div", {
                            className: EG.cJ,
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(n9.E, {
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
                                  EL,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(n9.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(EU, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function EU(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, EP.A)({
            analyticsLocation: _.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(EL, {
        storeListing: t,
        cta: (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class EV extends x.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(A4.$T, {
                  color: A4.Hv.DANGER,
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
function Ek(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = x.useState({ route: Eb.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Eb.HOME });
    }
    let a = (e) => {
            (l({ route: Eb.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = x.useState({});
    x.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Eh.LOADING })),
                (0, A6._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Eh.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Eh.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, A8.E)(),
        c = d !== A8.mJ.LOADED;
    switch (s) {
        case Eb.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        EV,
                        {
                            subscription: e,
                            children: (0, p.jsx)(ES, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Eh.LOADING : (o[e.id] ?? Eh.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Eb.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(EM, { ...m, navigateToHome: r });
        default:
            (0, im.xb)(s);
    }
}
var Ew = n(707989);
function EF(e) {
    let { onGoBack: t } = e,
        n = (0, I.yK)(
            [uu.A],
            () =>
                uu.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = x.useState();
    return (
        null == i && (i = (0, p.jsx)(EB, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: Ew.A,
                    children: (0, p.jsx)(Ek, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, p.jsx)(EB, {
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
function EB(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: Ew.D,
        children: [
            (0, p.jsx)(lE.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, p.jsx)(A5.ArrowLargeLeftIcon, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(b.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
let EX = (0, An.mj)({
    kind: "user",
    name: "2026-11-subscription-management-settings-brand-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var Ez = n(366999),
    EH = n(391659);
function EY(e) {
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
        ? ((t = V.intl.string(gB.default["/S02sx"])), (n = V.intl.string(gB.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === t3.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ih()({ [EH.Hs]: i, [EH.mT]: !i }),
        d = ih()({ [EH.CQ]: i, [EH.ZM]: !i }),
        c = ih()({ [EH.EM]: !i });
    return (0, p.jsxs)("div", {
        className: EH.r6,
        children: [
            (0, p.jsxs)("div", {
                className: EH.Nv,
                children: [
                    (0, p.jsx)(b.D, { variant: "heading-sm/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(n9.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: EH.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(n9.E, { variant: "body-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let EW = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, aC.kX)(t),
        r = s.length > 0,
        a = (0, Ez.Ay)(t.endsAt, Ez.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ih()(n, EH.f8),
            children: [
                (0, p.jsx)("div", {
                    className: EH.J_,
                    children: (0, p.jsxs)("div", {
                        className: EH.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: EH.xt,
                                children: (0, p.jsx)(aA.NitroWheelIcon, {
                                    size: "md",
                                    color: "white",
                                    className: EH.T8,
                                }),
                            }),
                            (0, p.jsx)("div", {
                                className: EH.pt,
                                children: (0, p.jsx)(b.D, {
                                    variant: "heading-sm/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(n9.E, {
                                className: EH.PJ,
                                variant: "body-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(EY, {
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
var EK = n(358787);
function EZ(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, I.yK)([cT.A], () => [cT.A.get(i), null != s ? cT.A.get(s.planId) : null]);
    if (null == o || aC.Ay.getInterval(i).intervalType !== t3.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aC.z4)(i),
        m = aC.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gB.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === _.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, aC._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: EH.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ih()({
                    [EH.bY]: g,
                    [EH.sr]: o.skuId === t3.pe.TIER_0,
                    [EH.lP]: o.skuId === t3.pe.TIER_1,
                    [EH.eb]: o.skuId === t3.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(g3.BoostGemIcon, { size: "md", color: "currentColor", className: EH.Kk })
                    : (0, p.jsx)(aA.NitroWheelIcon, { size: "md", color: "currentColor", className: EH.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: EH.pt,
                children: [
                    (0, p.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(b.D, {
                            className: EH.gj,
                            variant: "heading-xs/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(n9.E, {
                className: EH.PJ,
                variant: "body-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let Eq = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, I.yK)([cs.A], () => cs.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, I.bG)([uu.A], () => uu.A.getPremiumSubscription()),
        r = (0, I.bG)([uu.A], () => null == uu.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === t3.gD.PREMIUM_MONTH_TIER_1),
        o = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ih()(t, EH.xF, EH.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
                        EZ,
                        {
                            planId: e,
                            count: i[e].length,
                            userPremiumSubscription: s,
                            user: o,
                            unconsumedFractionalPremiumUnits: l,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(n9.E, {
                            className: EH.eT,
                            variant: "body-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(EK.iE, {}),
                    ],
                }),
        ],
    });
};
var EQ = n(902782);
function EJ(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        [s] = (0, AM.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? EQ.r : EQ.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aC.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cT.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, u9.$g)(s.total, s.currency);
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
        (0, p.jsx)(n9.E, { color: "text-muted", className: r, variant: "body-xs/normal", children: t })
    );
}
function E$(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === _.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(EJ, { subscription: t, withOverheadSeparator: n });
}
var E0 = n(488110),
    E1 = n(689255);
let E2 = { [eR.nR]: "role_subscriptions_panel", [eR.PZ]: "application_subscriptions_panel" };
function E3() {
    return (0, p.jsx)(oW.Z, {
        className: E1.wb,
        type: oW.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lj.A, {
            align: lj.A.Align.CENTER,
            children: [
                (0, p.jsx)(li.A, { game: null, size: li.M.SMALL, className: E1.pV }),
                (0, p.jsx)("span", { className: E1.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function E5(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, m6._)(e, t));
}
function E4() {
    let e = (0, I.bG)([cs.A], () => cs.A.getForApplication(t3.tv), [], E5);
    return (
        x.useEffect(() => {
            (0, ck.LM)(t3.tv);
        }, []),
        (0, p.jsx)(n7.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aC.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(Eq, { className: E1.fX, entitlements: e })
                    : (0, p.jsx)(E3, {}),
        })
    );
}
function E6() {
    return (0, p.jsx)("hr", { className: E1.hr });
}
let E8 = function () {
        var e;
        let { enabled: t } = EX.useConfig({ location: "subscription_management_settings" }),
            n = (0, I.bG)([uu.A], () => uu.A.getPremiumTypeSubscription()),
            i = (0, m8.A)({ subscriptionFilter: (e) => E0.Hy.has(e.status) }),
            l = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
            s = i.length > 1,
            r = (0, I.bG)(
                [uo.A],
                () => (null != n && null != n.paymentSourceId ? uo.A.getPaymentSource(n.paymentSourceId) : null),
                [n],
            ),
            a = (0, I.bG)([uu.A], () => uu.A.hasFetchedSubscriptions()),
            o = (0, I.bG)([oX.A], () => oX.A.isBusy),
            u = (0, c7.Y)(),
            d = AV.A.useField("subsection"),
            c = AV.A.useField("scrollToGameServers"),
            g = x.useRef(null);
        x.useEffect(() => {
            (0, ia._)(null != d ? E2[d] : S.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let m = (0, I.bG)([uu.A], () => uu.A.getActiveApplicationSubscriptions()?.length ?? 0),
            A = (0, I.bG)(
                [uu.A],
                () =>
                    Object.values(uu.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === _.rzx.GUILD)
                        .filter((e) => e.status !== _.Dmq.ENDED).length,
            ),
            E = (0, I.bG)([uu.A], () =>
                Object.values(uu.A.getSubscriptions() ?? {}).some((e) => e.type === _.rzx.GAME_SERVER),
            ),
            { servers: h } = (0, Ap.f)({ enabled: E }),
            T = (0, I.yK)([uu.A], () => (0, Ao.eP)(h, (e) => uu.A.getSubscriptionById(e)), [h]),
            f = (0, c8.A)({ forceFetch: !0 }),
            N = (0, gn.ds)(),
            C = null !== n ? n.currentPeriodEnd : void 0,
            y =
                !(N && !(f.unactivatedUnits.length > 0)) &&
                (f.fractionalState !== t3.xc.NONE || f.unactivatedUnits.length > 0);
        return (x.useEffect(() => {
            c &&
                a &&
                u &&
                T.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                AV.A.setState({ scrollToGameServers: !1 }));
        }, [c, a, u, T.length]),
        x.useEffect(
            () => (
                (0, c6.zS)(),
                ow.hP(),
                (0, g5.CD)(),
                ow.$o(),
                function () {
                    AV.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(oI.A, {})
            : a && u
              ? d === eR.nR
                  ? (0, p.jsx)(A0, { onGoBack: () => AV.A.setState({ subsection: null }) })
                  : d === eR.PZ
                    ? (0, p.jsx)(EF, { onGoBack: () => AV.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: E1.kL,
                          children: (0, p.jsxs)("div", {
                              className: E1.Qs,
                              children: [
                                  t
                                      ? null
                                      : (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                s ? (0, p.jsx)(E0.Sb, {}) : null,
                                                null != n
                                                    ? (0, p.jsx)(E0.Ay, {
                                                          subscription: n,
                                                          paymentSource: r,
                                                          busy: o,
                                                          subscriptions: i,
                                                      })
                                                    : (0, p.jsx)(E0.TC, {}),
                                                y &&
                                                    ((e = !!l?.isPremiumWithPremiumGroup()),
                                                    (0, p.jsxs)("section", {
                                                        children: [
                                                            (0, p.jsx)(b.D, {
                                                                variant: "heading-sm/semibold",
                                                                className: E1.HL,
                                                                children: V.intl.string(V.t.Obre8v),
                                                            }),
                                                            (0, p.jsx)(n9.E, {
                                                                variant: "body-md/normal",
                                                                className: E1.JU,
                                                                children: V.intl.format(V.t["7Zi06b"], {
                                                                    helpCenterLink: eC.A.getArticleURL(
                                                                        _.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                                    ),
                                                                }),
                                                            }),
                                                            (0, p.jsx)(EW, {
                                                                className: E1.fX,
                                                                fractionalPremiumInfo: f,
                                                                activationDate: C,
                                                                hasPremiumGroup: e,
                                                            }),
                                                        ],
                                                    })),
                                                (0, p.jsx)(E4, {}),
                                            ],
                                        }),
                                  A > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(E6, {}),
                                              (0, p.jsx)(A_, {
                                                  count: A,
                                                  onClickManageSubscription: () => AV.A.setState({ subsection: eR.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(E6, {}),
                                              (0, p.jsx)(A3, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (AV.A.setState({ subsection: eR.PZ }),
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
                                          children: [(0, p.jsx)(E6, {}), (0, p.jsx)(Af, { servers: T })],
                                      }),
                                  (0, p.jsx)(E6, {}),
                                  null != n ? (0, p.jsx)(E$, { subscription: n, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ih()(E1.kL, E1.Lq), children: (0, p.jsx)(oP.y, {}) });
    },
    E7 = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, p.jsx)(E8, {}),
    }),
    E9 = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [E7],
    }),
    he = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [E9] }),
    ht = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: m5.SubscriptionIcon,
        usePersistentBadge: function () {
            let e = (0, m4.l)();
            return x.useMemo(
                () => ({
                    badgeType: f.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e
                        ? (0, p.jsx)(i5.CircleErrorIcon, { size: "xs", color: n6.A.unsafe_rawColors.YELLOW_300 })
                        : null,
                }),
                [e],
            );
        },
        buildLayout: () => [he],
    }),
    hn = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [g2, m3, ht, c0, dv],
    });
var hi = n(540999),
    hl = n(663417),
    hs = n(611677),
    hr = n(148810),
    ha = n(521502),
    ho = n(380610),
    hu = n(390486),
    hd = n(103557),
    hc = n(986238);
class hg extends x.Component {
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
        e.key === lz.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hr.SB)(e);
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
            d = hc.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lm.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hc.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lm.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hc.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lb.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: iQ.PlusSmallIcon,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, p.jsx)(lm.l, {
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
                    : (0, p.jsx)(hd.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(hd.f, {
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
        return (0, p.jsx)(i$.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, p.jsx)(l_.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(cj.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
var hm = n(428524);
let hA = [
        { id: "discord_web", value: "discord_web", label: "Discord web / desktop" },
        { id: "discord_marketing", value: "discord_marketing", label: "Marketing website" },
        { id: "discord_developers", value: "discord_developers", label: "Developer portal" },
        { id: "discord_ios", value: "discord_ios", label: "Discord iOS" },
        { id: "discord_android", value: "discord_android", label: "Discord Android" },
    ],
    hE = [
        { id: "branch", value: "branch", label: "Branch name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ],
    hh = { type: "branch", id: "" },
    hS = (0, h.E2)(S.X.BUILD_OVERRIDES, {
        useSearchTerms: () => ["build override", "build overrides", "branch", "commit"],
        Component: function () {
            let e = (0, I.bG)([ha.A], () =>
                    (0, ho.kK)() ? ha.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                [t] = x.useState(hu.HP),
                [n, i] = x.useState(),
                [l, s] = x.useState("discord_web"),
                [r, a] = x.useState(hh),
                [o, u] = x.useState(!1),
                [d, c] = x.useState(!1),
                [g, m] = x.useState(),
                [A, E] = x.useState(!1),
                h = void 0 === n,
                S = d || o || h,
                T = n?.[l],
                f = r.id.trim(),
                _ = null != T ? r.id !== T.id || r.type !== T.type : "" !== r.id,
                N = "discord_ios" === l || "discord_android" === l,
                C = N ? ("" !== f ? { ...r, id: f } : null) : _ ? null : T;
            async function y() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null != n) {
                    (u(!0), m(void 0), E(!1));
                    try {
                        let t = { ...n };
                        e ? delete t[l] : (t[l] = { ...r, id: f });
                        let s = await (0, hr.Zk)(t);
                        if (200 !== s.status)
                            return void m(
                                400 === s.status
                                    ? String(s.body[l] ?? "Unable to save this override.")
                                    : "Unable to save this override. Try again.",
                            );
                        (i(t), a(t[l] ?? hh), E(!0));
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
                            let t = await (0, ho.bD)();
                            e || (i(t ?? null), null != t && a(t.discord_web ?? hh));
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
                                    (0, p.jsx)(b.D, { variant: "heading-md/semibold", children: "Current build" }),
                                    (0, p.jsxs)("div", {
                                        className: hm.n,
                                        children: [
                                            (0, p.jsxs)(q.B, {
                                                gap: 4,
                                                children: [
                                                    (0, p.jsx)(n9.E, {
                                                        variant: "body-md/medium",
                                                        children: null != e ? e.id : "Default build",
                                                    }),
                                                    (0, p.jsx)(n9.E, {
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
                                                    onClick: () => v(async () => (await (0, hr.iD)()).ok),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, p.jsx)(hs.l, {
                            onSubmit: (e) => {
                                (e.preventDefault(), y());
                            },
                            children: (0, p.jsxs)(n7.n, {
                                label: "Manual override",
                                description:
                                    "Choose a project and a branch or commit. Other project overrides are kept when you save.",
                                children: [
                                    (0, p.jsx)(lm.l, {
                                        selectionMode: "single",
                                        label: "Project",
                                        options: hA,
                                        value: l,
                                        onSelectionChange: function (e) {
                                            (s(e), a(n?.[e] ?? hh), m(void 0), E(!1));
                                        },
                                        disabled: S || _,
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: hm.O,
                                        children: [
                                            (0, p.jsx)(lm.l, {
                                                selectionMode: "single",
                                                label: "Target type",
                                                options: hE,
                                                value: r.type,
                                                onSelectionChange: (e) => {
                                                    (a({ type: e, id: "" }), E(!1));
                                                },
                                                disabled: S,
                                            }),
                                            (0, p.jsx)(lb.k, {
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
                                    h && (0, p.jsx)(oP.y, {}),
                                    null === n &&
                                        (0, p.jsx)(i$.w, {
                                            role: "alert",
                                            type: "critical",
                                            message:
                                                "Unable to load overrides, so saving is off. Try opening this page again.",
                                        }),
                                    N &&
                                        (0, p.jsx)(i$.w, {
                                            role: "status",
                                            type: "info",
                                            message:
                                                "Use a public link to apply mobile builds. Create one below, then open it on the matching device.",
                                        }),
                                    N &&
                                        "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL &&
                                        (0, p.jsx)(i$.w, {
                                            role: "status",
                                            type: "warning",
                                            message:
                                                "Generate mobile build override links from the stable web or desktop client.",
                                        }),
                                    A &&
                                        (0, p.jsx)(i$.w, {
                                            role: "status",
                                            type: "info",
                                            message: "Saved. Reload the app to run the selected build.",
                                        }),
                                    (0, p.jsxs)(s9.e, {
                                        justify: "start",
                                        children: [
                                            (0, p.jsx)(j.$, {
                                                type: "submit",
                                                text: "Save override",
                                                disabled: S || null == n || "" === f || N,
                                                loading: o,
                                            }),
                                            _ &&
                                                (0, p.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: "Discard changes",
                                                    disabled: S,
                                                    onClick: () => {
                                                        (a(T ?? hh), m(void 0));
                                                    },
                                                }),
                                            null != T &&
                                                !N &&
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
                                            (0, p.jsx)(b.D, {
                                                variant: "heading-md/semibold",
                                                children: "Recent builds",
                                            }),
                                            (0, p.jsx)(n9.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children: "Return to a web build you used on this device.",
                                            }),
                                        ],
                                    }),
                                    0 === t.length
                                        ? (0, p.jsx)(n9.E, {
                                              variant: "body-md/normal",
                                              color: "text-subtle",
                                              children:
                                                  "Your recent builds will appear here after you apply an override.",
                                          })
                                        : t.map((t) =>
                                              (0, p.jsxs)(
                                                  "div",
                                                  {
                                                      className: hm.n,
                                                      children: [
                                                          (0, p.jsxs)(q.B, {
                                                              gap: 4,
                                                              children: [
                                                                  (0, p.jsx)(n9.E, {
                                                                      variant: "body-md/medium",
                                                                      children: t.id,
                                                                  }),
                                                                  (0, p.jsx)(n9.E, {
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
                                                              onClick: () => v(() => (0, hu.mk)(t)),
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
                                            (0, p.jsx)(b.D, {
                                                variant: "heading-md/semibold",
                                                children: "Share an override",
                                            }),
                                            (0, p.jsx)(n9.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children:
                                                    "Create a public link for the selected project. Choose who can use it and when it expires.",
                                            }),
                                        ],
                                    }),
                                    (0, p.jsx)(s9.e, {
                                        justify: "start",
                                        children: (0, p.jsx)(j.$, {
                                            variant: "secondary",
                                            text: "Generate public link",
                                            disabled: S || null == C,
                                            onClick: function () {
                                                null != C &&
                                                    (0, lN.qf)((e) =>
                                                        (0, p.jsx)(hg, { ...e, buildOverrides: { [l]: C } }),
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
    hT = (0, h.zZ)(S.X.BUILD_OVERRIDES_CATEGORY, {
        useTitle: () => "Build Overrides",
        useSubtitle: () => "Choose the build this client runs, or share an override with someone else.",
        buildLayout: () => [hS],
    }),
    hf = (0, h.t_)(S.X.BUILD_OVERRIDES_PANEL, { useTitle: () => "Build Overrides", buildLayout: () => [hT] }),
    hp = (0, h.i4)(S.X.BUILD_OVERRIDES_SIDEBAR_ITEM, {
        useTitle: () => "Build Overrides",
        icon: hl.RefreshIcon,
        buildLayout: () => [hf],
    });
var hx = n(306471),
    hI = n(964355),
    h_ = n(172272);
let hN = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isAxeEnabled),
        setValue: (e) => (0, rA.x)({ axeEnabled: e }),
    }),
    hb = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rA.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hC = n(276086),
    hy = n(354328);
let hv = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hy.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hC.L)("highlight_mana_components", e);
        },
    }),
    hj = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, hy.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, hC.L)("highlight_mana_text_overrides", e);
        },
    }),
    hO = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, hy.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, hC.L)("highlight_mana_text", e);
        },
    }),
    hR = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hy.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hC.L)("highlight_void_toggleables", e);
        },
    }),
    hD = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, I.bG)([rE.default], () => rE.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h_.O.getState().horizontalSpacing,
        asValueChanges: (e) => {
            h_.O.getState().setHorizontalSpacing(e);
        },
    }),
    hL = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rA.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hP = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, I.bG)([rE.default], () => rE.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h_.O.getState().verticalSpacing,
        asValueChanges: (e) => {
            h_.O.getState().setVerticalSpacing(e);
        },
    }),
    hG = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hb, hL, hD, hP, hv, hO, hj, hR, hN],
    });
var hM = n(246605),
    hU = n(274184);
function hV(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = x.useState(l ?? ""),
        u = x.useRef(null),
        [d, c] = x.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        x.useEffect(() => g, []),
        (0, p.jsx)(lA.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, p.jsx)(lb.k, {
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
let hk = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, I.bG)([hU.Ay], () => hU.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(hV, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hM.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    hw = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var hF = n(256311),
    hB = n(883600);
let hX = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, I.bG)([hB.A], () => hB.A.overrideId());
        return (0, p.jsx)(hV, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hF.A.setChangelogOverride(e),
            fetchOverride: async function (e) {
                let t = hB.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hF.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            },
        });
    },
});
var hz = n(506774);
let hH = new Date("2018-01-01"),
    hY = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oH.default.fromTimestamp(hH.getTime()),
        onClick: () => (hz.w.set("lastChangeLogDate", hH), U.pK.updateSetting(oH.default.fromTimestamp(hH.getTime()))),
    }),
    hW = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, I.bG)([rE.default], () => rE.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, I.bG)(
                [rE.default],
                () => rE.default.disableAppCollectionsCache || rE.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rA.x)({ disableAppCollectionsCache: e }),
    }),
    hK = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isForcedCanary),
        setValue: (e) => {
            (0, rA.x)({ canary: e });
        },
    }),
    hZ = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.sourceMapsEnabled),
        setValue: (e) => (0, rA.x)({ sourceMapsEnabled: e }),
    }),
    hq = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rA.x)({ onlyShowPreviewAppCollections: e }),
    });
var hQ = n(10094),
    hJ = n(683760);
let h$ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t3.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t3.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t3.PremiumTypes.TIER_2 },
    ],
    h0 = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => h$,
        clearable: !0,
        useValue: () =>
            (0, I.bG)([hJ.A], () => {
                let e = hJ.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hQ.O)(null, void 0)
                : null === e
                  ? (0, hQ.O)(void 0, void 0)
                  : (0, hQ.O)(0 === e ? null : e, void 0);
        },
    });
var h1 = n(374042);
let h2 = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, I.bG)([hU.Ay], () => hU.Ay.getSurveyOverride());
            return (0, p.jsx)(hV, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hM.xr(e),
                fetchOverride: (e) => (0, h1.B)(e, !0) ?? null,
            });
        },
    }),
    h3 = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [h0, h2, hk, hX, hY, hK, hw, hq, hW, hZ],
        useInlineNotice: () => ({
            type: f.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    h5 = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rA.x)({ logAnalyticsEvents: e }),
    }),
    h4 = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rA.x)({ logGatewayEvents: e }),
    }),
    h6 = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.preventPopoutClose),
        setValue: (e) => (0, rA.x)({ preventPopoutClose: e }),
    }),
    h8 = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.logKeyboardMismatches),
        setValue: (e) => (0, rA.x)({ logKeyboardMismatches: e }),
    }),
    h7 = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rA.x)({ logOverlayEvents: e }),
    }),
    h9 = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isLoggingQuestEvents),
        setValue: (e) => (0, rA.x)({ logQuestEvents: e }),
    }),
    Se = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, I.bG)([rE.default], () => rE.default.isTracingRequests),
        setValue: (e) => (0, rA.x)({ trace: e }),
    }),
    St = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [h4, h7, Se, h5, h8, h6, h9] }),
    Sn = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [h3, St, hG],
    }),
    Si = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hx.StaffBadgeIcon,
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
                } = (0, I.cf)([rE.default, hi.A, sp.default], () => ({
                    layoutDebuggingEnabled: rE.default.layoutDebuggingEnabled,
                    isDeveloper: hi.A.isDeveloper,
                    isLoggingGatewayEvents: rE.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rE.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rE.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rE.default.isTracingRequests,
                    isForcedCanary: rE.default.isForcedCanary,
                    isSourceMapsEnabled: rE.default.sourceMapsEnabled,
                    isAxeEnabled: rE.default.isAxeEnabled,
                    preventPopoutClose: rE.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rE.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rE.default.disableAppCollectionsCache,
                    isStaff: sp.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, h_.O)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = h_.O.getState(),
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
                                              (0, rA.x)({ canary: !r });
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
                                              (0, rA.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, rA.x)({ disableAppCollectionsCache: !d });
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
                                              (0, rA.x)({ logGatewayEvents: !n });
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
                                              (0, rA.x)({ logOverlayEvents: !i });
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
                                              (0, rA.x)({ logAnalyticsEvents: !l });
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
                                              (0, rA.x)({ trace: !s });
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
                                              (0, rA.x)({ preventPopoutClose: !o });
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
                                              (0, rA.x)({ axeEnabled: !a });
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
                                              (0, rA.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, p.jsx)(hI.i, {
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
                                                          (0, p.jsx)(hI.i, {
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
                                { id: "discord-stats", label: "Discord Stats", action: () => sf() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Sn],
    });
var Sl = n(127062),
    Ss = n(25044),
    Sr = n(80703),
    Sa = n(123292),
    So = n(683438),
    Su = n(890856),
    Sd = n(173936),
    Sc = n(100392),
    Sg = n(102609),
    Sm = n(271478),
    SA = n(386976),
    SE = n(257433),
    Sh = n(32523),
    SS = n(96919),
    ST = n(688151),
    Sf = n(863763);
function Sp(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = x.useState(l),
        [a, o] = x.useState(!1),
        u = x.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, I.bG)([ch.default], () => ch.default.getId()),
        c = (0, I.bG)([ch.default], () => {
            let e = ch.default.getInstallationForTracking();
            return null == e ? null : (0, Sr.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, SE.iN)(t, g),
        A = (0, SE.Fm)(t, g),
        E = (0, I.yK)([rI.A], () =>
            K()
                .sortBy(rI.A.getRecentExposures(ST.Vh.USER, n), (e) => {
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
                (0, uz.C)((0, Sc.yA)(n), () => {
                    ((0, sh.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, p.jsx)(Su.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(n9.E, {
                variant: "body-md/medium",
                className: Sf.DD,
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
                                    uz.p5 &&
                                        (0, p.jsx)(ie.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(Sd.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n9.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: Sf.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: Sf.Os, children: S });
    let T = "";
    return (
        (T =
            t.system === Sg.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? ST.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: Sf.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(Sm.g, {
                        label: t.system === Sg.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Sf.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(n9.E, {
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
                              (0, p.jsx)(n9.E, {
                                  variant: "body-lg/medium",
                                  className: Sf.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "mono-md/bold",
                                  className: Sf.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "body-lg/medium",
                                  className: Sf.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "mono-md/bold",
                                  className: Sf.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "body-lg/medium",
                                  className: Sf.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "mono-md/bold",
                                  className: Sf.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: Sf.id,
                          children: (0, p.jsx)(Sa.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(ld.c, { className: Sf.yF }),
            ],
        })
    );
}
function Sx(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = x.useState(null != i),
        [r, a] = x.useState(!1),
        o = x.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, I.bG)([rI.A], () => rI.A.getLoadedGuildExperiment(n)),
        d = (0, I.bG)([rI.A, lL.A, i1.A], () => {
            if (t.system === Sg.l5.LEGACY) return null == rI.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lL.A.getGuildsArray().some((t) => null != i1.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, I.yK)([rI.A], () =>
            K()
                .sortBy(rI.A.getRecentExposures(ST.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, I.yK)([ch.default, lL.A, rI.A, i1.A], () => {
            let e = t.system === Sg.l5.LEGACY,
                i = t.name,
                l = ch.default.getId(),
                s = K().sortBy(lL.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rI.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? ST.RE.NOT_ELIGIBLE)
                    : (i1.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? ST.RE.NOT_ELIGIBLE);
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
        A = t.system !== Sg.l5.LEGACY,
        E = (0, I.yK)([lL.A], () => K().sortBy(lL.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, S] = x.useState(() => lP.A.getGuildId() ?? lP.A.getLastSelectedGuildId()),
        T = E.find((e) => e.id === h)?.name,
        f = (0, I.bG)(
            [i1.A],
            () => {
                if (A && null != h) return i1.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, I.bG)([i1.A, ch.default], () => {
            if (!A) return;
            let e = ch.default.getId();
            return i1.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        b = (0, p.jsx)(ie.D, {
            onClick: o,
            children: (0, p.jsxs)(n9.E, {
                variant: "body-md/medium",
                className: Sf.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(n9.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: Sf.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: Sf.Os,
              children: [
                  b,
                  (0, p.jsx)(Sm.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Sf.h_,
                          children: (0, p.jsx)(lm.l, {
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
                      className: Sf.h_,
                      children: d
                          ? (0, p.jsx)(n9.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Sg.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(n9.E, {
                                  variant: "body-lg/medium",
                                  className: Sf.id,
                                  children: ["Server Descriptor", null != T ? ` (${T})` : ""],
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "mono-md/bold",
                                  className: Sf.AS,
                                  children: null == f ? "None" : JSON.stringify(f, void 0, 2),
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "body-lg/medium",
                                  className: Sf.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(n9.E, {
                                  variant: "mono-md/bold",
                                  className: Sf.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-lg/medium",
                                    className: Sf.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(n9.E, { variant: "mono-md/bold", className: Sf.AS, children: g }),
                                t.system === Sg.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(n9.E, {
                                                variant: "body-lg/medium",
                                                className: Sf.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(n9.E, {
                                                variant: "mono-md/bold",
                                                className: Sf.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(n9.E, {
                                    variant: "body-lg/medium",
                                    className: Sf.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(n9.E, {
                                    variant: "mono-md/bold",
                                    className: Sf.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(n9.E, {
                                    variant: "body-lg/medium",
                                    className: Sf.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(n9.E, {
                                    variant: "mono-md/bold",
                                    className: Sf.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: Sf.id,
                            children: (0, p.jsx)(Sa.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(ld.c, { className: Sf.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: Sf.Os, children: b });
}
let SI = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, SA.op)(),
                { experiments: n, overridesInfo: i } = (0, Sh.hI)(),
                l = x.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = x.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, I.bG)([ch.default], () => {
                    let e = ch.default.getInstallationForTracking();
                    return null == e ? null : (0, Sr.v)(e);
                }),
                [a, o] = x.useState(""),
                u = (0, SS.oC)((0, SS.R3)((0, SS.Fm)(l), s), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(n9.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uz.p5 &&
                                    (0, p.jsx)(Sa.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uz.C)(r, () => {
                                                (0, sh.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(So.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sx : Sp;
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
                              className: Sf.p$,
                              children: (0, p.jsx)(b.D, {
                                  variant: "heading-sm/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    S_ = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [SI] }),
    SN = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [S_] }),
    Sb = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Sl.BeakerIcon,
        useMenu: Ss.A,
        buildLayout: () => [SN],
    }),
    SC = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => hi.A.isDeveloper,
        buildLayout: () => [Sb, hp, Si],
    });
var Sy = n(682348),
    Sv = n(977556),
    Sj = n(751075),
    SO = n(843402);
let SR = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function SD() {
    let e = (0, I.yK)([le.Ay], () => le.Ay.getGamesSeen(!1)),
        t = (0, I.bG)([le.Ay], () => SR(...le.Ay.getOverrides()));
    x.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, SO.a2)(), SO.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = x.useMemo(
        () =>
            e.reduce((e, t) => ((0, Sv.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function SL(e) {
    let { gameHistory: t } = SD();
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
function SP(e) {
    let { namedGames: t, totalCount: n } = SL(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function SG() {
    let { namedGames: e } = SL(2),
        [t, n] = x.useMemo(() => e.map((e) => e.id), [e]);
    x.useEffect(() => {
        Ed.Ay.fetchApplications([t, n].filter(im.Vq));
    }, [t, n]);
    let [i, l] = (0, I.yK)([i8.A], () => [t, n].map(i8.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(li.A, { game: i, size: li.M.MEDIUM_LARGE }), shape: Sj.e.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(li.A, { game: l, size: li.M.MEDIUM }), shape: Sj.e.ROUNDED } : null,
          };
}
let SM = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = SP(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = SG();
            return { type: f.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, I.bG)([le.Ay], () => le.Ay.getGamesSeen(!1).some((e) => !(0, Sv.n1)(e))) && (0, nx.xl)(),
    }),
    SU = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [SM] });
var SV = n(533440),
    Sk = n(406535),
    Sw = n(966756);
let SF = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(Sw.default.A0FVCV),
        useSubtitle: () => V.intl.string(Sw.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    SB = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(Sw.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(Sw.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    SX = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [SV._, SF, SB, SU],
    }),
    Sz = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    SH = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Sz] });
var SY = n(365258);
let SW = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(Sw.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(Sw.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(Sw.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(Sw.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, SY.g8)(t, e);
        if (null == i) return;
        let l = (0, SY.Xc)(e);
        (0, lN.mM)(async () => {
            let { default: e } = await Promise.all([n.e(26411), n.e(562041), n.e(341996)]).then(n.bind(n, 32167));
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var SK = n(498642),
    SZ = n(573435),
    Sq = n(260509),
    SQ = n(771810);
function SJ(e) {
    let { guild: t, size: n } = e,
        i = (0, Sq.Iv)(t, n, !1, !0),
        l = (0, Sq.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: SQ.F,
              children: (0, p.jsx)(n9.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "body-md/semibold" : "footnote/semibold",
                  children: l,
              }),
          });
}
function S$(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(SZ.Ay, {
        className: SQ.z,
        mask: SZ.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(SJ, { guild: t, size: n }),
    });
}
var S0 =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let S1 = {
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
var S2 = n(618118);
function S3(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, I.bG)([SK.A], () => SK.A.getMemberCount(t.id));
    return (0, p.jsxs)(q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: S2.FO, children: (0, p.jsx)(S$, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: S2.QH,
                children: (0, p.jsx)(ne.d, {
                    label: t.name,
                    description: V.intl.format(Sw.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function S5(e) {
    let { overflowGuilds: t } = e,
        n = (0, I.bG)([ud.default], () => ud.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, x.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(V.intl.formatToPlainString(Sw.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(Sj.q, {
                icons: {
                    frontIcon: { icon: (0, p.jsx)(SJ, { guild: t[0], size: 48 }), shape: Sj.e.SQUIRCLE },
                    backIcon:
                        null != t[1] ? { icon: (0, p.jsx)(SJ, { guild: t[1], size: 48 }), shape: Sj.e.SQUIRCLE } : null,
                },
            }),
            (0, p.jsxs)("div", {
                className: S2.yW,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        className: S2.Xc,
                        children: V.intl.format(Sw.default.MEMaup, { count: i }),
                    }),
                    (0, p.jsx)(n9.E, { variant: "body-sm/normal", color: "text-muted", className: S2.Xc, children: s }),
                ],
            }),
        ],
    });
}
function S4() {
    return (0, p.jsx)("div", {
        className: S2.yW,
        children: (0, p.jsx)(n9.E, {
            variant: "body-md/semibold",
            className: S2.Xc,
            children: V.intl.string(Sw.default.BRjBVV),
        }),
    });
}
function S6(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? V.intl.string(Sw.default.BRjBVV) : V.intl.formatToPlainString(Sw.default.MEMaup, { count: n.length });
    return (0, p.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, p.jsx)(S4, {}) : (0, p.jsx)(S5, { overflowGuilds: n }),
            (0, p.jsx)(lE.K, {
                variant: "secondary",
                size: "md",
                icon: t ? Er.ChevronSmallUpIcon : mG.ChevronSmallDownIcon,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function S8(e) {
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
        className: S2.X1,
        id: i,
        "aria-label": V.intl.string(V.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, p.jsx)("div", {
                    className: S2.pb,
                    children: (0, p.jsx)(n9.E, {
                        className: S2.R$,
                        variant: "body-lg/medium",
                        children: V.intl.string(V.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, p.jsx)(
                    S3,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, p.jsx)(S6, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let S7 = function (e) {
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
                l = (0, I.bG)([g9.Ay], () => g9.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lL.A], () => lL.A.getGuilds()),
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
                [g, m] = (0, x.useState)(() => S1[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(S1[e](r, a)), i(e));
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
                { id: S0.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: S0.SERVER_ORDER },
                { id: S0.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: S0.RECENTLY_JOINED },
                { id: S0.ACTIVITY_SHARING_ON, label: V.intl.string(Sw.default.ZI51JZ), value: S0.ACTIVITY_SHARING_ON },
                {
                    id: S0.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(Sw.default["+kxafn"]),
                    value: S0.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: S2.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: S2.N1,
                children: [
                    (0, p.jsx)(So.I, {
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
                            className: S2.gO,
                            children: [
                                (0, p.jsx)(aI.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(ma.W, {
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
                                        (0, p.jsxs)(ie.D, {
                                            ...e,
                                            innerRef: A,
                                            className: S2.Ku,
                                            children: [
                                                (0, p.jsx)(n9.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(mG.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: n6.A.colors.TEXT_SUBTLE,
                                                }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(Sa.Q, {
                                    variant: "primary",
                                    textVariant: "body-sm/medium",
                                    onClick: o,
                                    text: a ? V.intl.string(V.t["7lxcLO"]) : V.intl.string(V.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(lT.A, {
                "aria-live": "polite",
                role: "region",
                children: V.intl.format(Sw.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsx)(S8, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var S9 = n(68322);
let Te = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(Sw.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: S9.l,
                      children: (0, p.jsx)(i$.w, {
                          type: "warning",
                          message: V.intl.string(Sw.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(S7, { notice: e });
        },
    }),
    Tt = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [SW, Te, SH],
    }),
    Tn = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(Sw.default.khuuzv),
        useSubtitle: () => V.intl.string(Sw.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    Ti = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(n9.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            n9.E,
                            { tag: "span", variant: "body-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    Tl = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(Sw.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(Sw.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    Ts = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(Sw.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [Tn, Tl, Ti],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    Tr = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [SX, Tt, Ts],
    }),
    Ta = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: Sy.UserPlatformIcon,
        buildLayout: () => [Tr],
    });
var To = n(712440),
    Tu = n(361328);
let Td = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Tu.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var Tc = n(478016),
    Tg = n(396478),
    Tm = n(77468),
    TA = n(289498),
    TE = n(573648),
    Th = n(643068),
    TS = n(370480),
    TT = n(522978);
let Tf = new Set([_.fg2.XBOX, _.fg2.PLAYSTATION, _.fg2.PLAYSTATION_STAGING, _.fg2.CRUNCHYROLL]);
var Tp = n(169869),
    Tx = n(152578),
    TI = n(733110),
    T_ = n(744813),
    TN = n(757036),
    Tb = n(555837),
    TC = n(43990),
    Ty = n(241524),
    Tv = n(51965),
    Tj = n(377368),
    TO = n(631368),
    TR = n(212739),
    TD = n(417869),
    TL = n(337091),
    TP = n(831768),
    TG = n(660594);
function TM() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, TO.$)()),
            (t = (0, TR.O)()),
            (l = null != (i = (0, I.bG)([TD.A], () => TD.A.getAccount(null, _.fg2.XBOX))) && !i.revoked),
            e === TO.C.NONE || t
                ? { variant: TO.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === TO.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, ez.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, Tj.yW)(a),
        u = (0, Ty.A)("(max-width: 485px)");
    if (s === TO.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case TO.C.HAS_ACCESS:
        case TO.C.BLOCK_CLAIM:
            ((c = V.intl.string(TP.default["7PdsMK"])),
                (g = (0, p.jsx)(Tv.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(TP.default.CubeLC),
                    onClick: () => {
                        (0, lN.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(878140), n.e(532203)]).then(n.bind(n, 15654));
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case TO.C.NO_ACCESS:
            ((c = V.intl.string(TP.default.NwkRTZ)),
                (g = (0, p.jsx)(tz.A, {
                    defaultTextOverride: V.intl.string(TP.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t3.pe.TIER_2,
                })));
            break;
        default:
            (0, im.xb)(s);
    }
    return (0, p.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, p.jsxs)("div", {
                className: TG.bV,
                children: [
                    (0, p.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, p.jsx)(aA.NitroWheelIcon, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(TC.N, {
                theme: _.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: TG.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: TG.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: TG.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: TG.$h }),
                                        (0, p.jsx)("div", { className: TG.Rv }),
                                        (0, p.jsx)("div", { className: TG.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: TG.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: TG.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: TG.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(n9.E, {
                                                    variant: "body-lg/semibold",
                                                    color: "text-strong",
                                                    className: TG.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: TG.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: TG.yF }),
                                            (0, p.jsxs)("div", {
                                                className: TG.sQ,
                                                children: [
                                                    (0, p.jsx)(uk.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n6.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(n9.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(TL.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(Tj.Hx.CONNECT),
                                                                    (0, TT.A)({
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
var TU = n(201718),
    TV = n(321078),
    Tk = n(672130),
    Tw = n(379848),
    TF = n(688901);
function TB(e) {
    let { markAsDismissed: t } = e;
    return (
        x.useEffect(() => t(Ac.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: TF.Ad, children: (0, p.jsx)(AR.E, { type: "new", variant: "primary" }) })
    );
}
function TX(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, p.jsxs)("div", {
        className: TF.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: TF.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: TF.TK,
                        children: [
                            (0, p.jsx)(Tw.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, p.jsx)(TB, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(n9.E, { variant: "body-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(n9.E, { variant: "body-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: s }),
        ],
    });
}
function Tz() {
    let e = eC.A.getArticleURL(_.MVz.PS_CONNECTION);
    return (0, p.jsx)(TX, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, TT.A)({ platformType: _.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let TH = "/assets/9df988a227916145.png";
function TY() {
    return (0, p.jsx)(TX, {
        title: V.intl.string(TL.default["9cLtDI"]),
        body: V.intl.format(TL.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(_.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: TH, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, TT.A)({ platformType: _.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function TW() {
    let e = eC.A.getArticleURL(_.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(TX, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: TH, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, TT.A)({ platformType: _.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var TK = n(783419),
    TZ = n(534952),
    Tq = n(705799),
    TQ = n(247259);
function TJ(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, I.cf)(
            [TD.A],
            () => ({
                isJoining: TD.A.isJoining(n.id),
                joinErrorMessage:
                    "" === TD.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : TD.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== TD.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, I.bG)([lL.A], () => lL.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    Tm.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: TQ.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: TQ.XX,
                    children: [
                        (0, p.jsx)(mc.Ay, { size: mc.Ay.Sizes.SMALL, guild: n.guild, className: TQ.$f }),
                        (0, p.jsxs)("div", {
                            className: TQ.Vn,
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nc.Anchor, {
                                    href: TE.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(n9.E, {
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
                    (0, p.jsx)(n9.E, {
                        variant: "body-xs/normal",
                        color: "text-feedback-critical",
                        className: TQ.R,
                        children: l,
                    }),
            ],
        })
    );
}
function T$(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, Tb.G)()), (i = (0, TN.L)(t3.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === _.fg2.XBOX && s
        ? (0, p.jsx)(TY, {})
        : l.twoWayLink
          ? null
          : l.type === _.fg2.XBOX
            ? (0, p.jsx)(TW, {})
            : l.type === _.fg2.PLAYSTATION
              ? (0, p.jsx)(Tz, {})
              : null;
}
function T0(e) {
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
        [I, N] = x.useState(null),
        [b, C] = x.useState(null),
        [y, v] = x.useState(!1),
        [O, R] = x.useState([]),
        D = (0, Th.ML)(u.type),
        L = TE.A.get(D);
    x.useEffect(() => {
        (m(u.friendSync), E(u.visibility), S(u.metadataVisibility), f(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: I, inProgressMetadataVisibility: b },
        G = x.useRef(P);
    return (
        x.useEffect(() => {
            G.current = P;
        }),
        x.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), Tm.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (S(t), Tm.A.setMetadataVisibility(u.type, u.id, t), C(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: TQ.FI,
            children: [
                ((t = TE.A.get(u.type)),
                (n = TE.A.get(D)),
                (i = "1" === (u.metadata ?? {})[TK.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === _.fg2.TWITTER &&
                    i &&
                    (l = (0, p.jsx)(lS.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, p.jsx)(Tx.A, {
                            color: n6.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(Tc.CheckmarkSmallIcon, {
                                size: "xs",
                                color: n6.A.unsafe_rawColors.WHITE.css,
                            }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: TQ.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: TQ.gj,
                            src: (0, c4.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: TQ.$p,
                                    children: [
                                        (0, p.jsx)(n9.E, {
                                            color: "text-strong",
                                            variant: "body-md/semibold",
                                            className: TQ.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: TQ.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(n9.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    className: TQ.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(Tq.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(ie.D, {
                            className: TQ.uH,
                            onClick: function () {
                                let e = TE.A.get(u.type);
                                (0, lN.qf)((t) =>
                                    (0, p.jsx)(l_.a, {
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
                                            Tf.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(sl.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(dl.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(T$, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, TS.An)(t[TK.pK.CREATED_AT], c);
                    switch (e.type) {
                        case _.fg2.REDDIT:
                            n = (0, Tp.xE)(t, TQ.Nz);
                            break;
                        case _.fg2.STEAM:
                            n = (0, Tp.dy)(t, TQ.Nz);
                            break;
                        case _.fg2.LETTERBOXD:
                            n = (0, Tp.uq)(t, TQ.Nz);
                            break;
                        case _.fg2.BLUESKY:
                        case _.fg2.TWITTER:
                        case _.fg2.MASTODON:
                            n = (0, Tp.ED)(t, TQ.Nz);
                            break;
                        case _.fg2.EBAY:
                            n = (0, Tp.ub)(t, TQ.Nz);
                            break;
                        case _.fg2.PAYPAL:
                            n = (0, Tp.gZ)(t, TQ.Nz);
                            break;
                        case _.fg2.TIKTOK:
                            n = (0, Tp.HU)(t, TQ.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                n9.E,
                                {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    className: TQ.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== TE.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: TQ.Z3,
                                        children: (0, p.jsx)(AR.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    n9.E,
                                    {
                                        variant: "body-xs/normal",
                                        className: TQ.vt,
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
                                    className: TQ.jy,
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
                                                      Tm.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), R(O), v(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, p.jsx)("div", { className: TQ.tJ, children: n })
                    );
                })(u),
                (_.txh.has(u.type) &&
                    (s = (0, p.jsx)(ne.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), Tm.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                _.ewM.has(u.type) &&
                    (r = (0, p.jsx)(ne.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: L.name }),
                        checked: T,
                        onChange: function (e) {
                            (f(e), Tm.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                TE.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(ne.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (C(n), (0, TT.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), Tm.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: TQ.HZ,
                    children: [
                        (0, p.jsx)(ne.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, TT.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), Tm.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(ld.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(i$.w, {
                          type: "info",
                          message: V.intl.format(V.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, TT.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lA.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(TJ, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(T_.A, { partner: u.type }),
            ],
        })
    );
}
function T1(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: TQ.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: TQ.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: ih()(TQ.gj, TQ.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: TQ.$p,
                                          children: (0, p.jsx)(n9.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: TQ.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(n9.E, {
                                          variant: "body-xs/normal",
                                          color: "text-strong",
                                          className: TQ.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(ie.D, {
                                  className: TQ.uH,
                                  onClick: () =>
                                      (0, Tu.d1)(n, t.scopes, () => {
                                          To.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(dl.XSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: TQ.HZ,
                      children: (0, p.jsx)(ne.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              TU.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function T2() {
    let e = (0, Th.gn)(),
        t = (0, i7.A)((0, TZ.Gl)());
    return (0, p.jsxs)("div", {
        className: TQ.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(Tk.A, { application: e, innerClassName: TQ.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    TA.A,
                    { type: e.type, innerClassName: TQ.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function T3(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = x.useMemo(() => i.filter((e) => TE.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oP.y, { type: oP.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, p.jsx)(Tg.pp, {
                    theme: r,
                    className: TQ.p$,
                    children: (0, p.jsx)(Tg.SG, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(b.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: V.intl.format(V.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, p.jsx)(
                                T1,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                T0,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Tm.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: TQ.V, children: t })
    );
}
let T5 = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lA.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, p.jsx)(T2, {}) });
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
    T4 = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, I.bG)([TD.A], () => TD.A.isFetching()),
                n = (0, I.bG)([TD.A], () => TD.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, I.cf)([TI.A], () => ({
                    authorizedAppsFetchState: TI.A.getFetchState(),
                    authorizedApps: TI.A.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, TV.A)(sp.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cC.Ay)(),
                o = (0, I.bG)([ud.default], () => ud.default.locale);
            return (x.useEffect(() => {
                i === TI.FetchState.NOT_FETCHED && To.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(TM, {}),
                          (0, p.jsx)(T3, {
                              fetching: t || s || (r.length > 0 && i !== TI.FetchState.FETCHED),
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
            Tm.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    T6 = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [T5, T4],
    }),
    T8 = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [Td],
        initialize: () => (
            To.A.fetch(),
            () => {
                Tu.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    T7 = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: oI.L,
        buildLayout: () => [T6, T8],
    }),
    T9 = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: Sd.LinkIcon,
        buildLayout: () => [T7],
    });
var fe = n(625657),
    ft = n(592598),
    fn = n(228342),
    fi = n(373954),
    fl = n(672396);
let fs = fa(null);
function fr() {
    var e;
    let t = fa(fs);
    ((e = fs),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(_.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (fs = t)));
}
function fa(e) {
    let t = fi.default.getNotificationPositionMode(),
        n = t !== _.G6Q.DISABLED,
        i = lg.Ay.getOverlayKeybind(),
        l = lg.Ay.getOverlayChatKeybind();
    return {
        enabled: fn.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: ft.A.isNotificationDisabled(fl.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lI.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lI.dI)(l.shortcut) : null,
        text_opacity_slider: fi.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? fn.default.enabled,
    };
}
var fo = n(237984),
    fu = n(63035);
function fd(e) {
    (e.preventDefault(), e.stopPropagation());
}
function fc(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: fd, children: t });
}
function fg(e) {
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
        className: ih()(fu.HS, d),
        children: [
            (0, p.jsxs)(Su.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: fu.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: fu.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: fu.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: fu.c8,
                                children: [
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        className: fu.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, p.jsx)(n9.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(n9.E, {
                                            variant: "footnote/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: fu.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: fu.Om, children: a }),
        ],
    });
}
let fm = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(fg, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, p.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, fo.b)(tk.A.USER_SETTINGS, _.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var fA = n(273626),
    fE = n(684013),
    fh = n(56562),
    fS = n(311043),
    fT = n(454908),
    ff = n(41984),
    fp = n(918825),
    fx = n(861862),
    fI = n(562519);
let f_ = 5 * n(927813).A.Millis.DAY,
    fN = new fI.A("overlay_survey_timestamps");
function fb(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(fN.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < f_) ||
            Array.from(fN.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lN.mM)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e(914052), n.e(82318)]).then(n.bind(n, 387101));
                return ((i = Date.now()), fN.add(i), (n) => (0, p.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function fC() {
    (0, ls.sL)("overlay-settings");
}
function fy(e) {
    let { className: t, game: n } = e;
    return (0, ls.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(i$.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(_.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: fC },
              }),
          })
        : null;
}
var fv = n(760751),
    fj = n(9302),
    fO = n(656513);
let fR = new Set([
    ff.AR.INITIALIZING,
    ff.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    ff.AR.WAITING_FOR_MODULE_TRACKING,
    ff.AR.WAITING_FOR_OVERLAY_OPEN,
    ff.AR.WAITING_FOR_POPOUT_OPEN,
    ff.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    ff.AR.WAITING_FOR_REACT_INITIALIZATION,
    ff.AR.WAITING_FOR_PID_FOCUS,
    ff.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function fD(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = x.useState(!1);
    return (0, p.jsx)(fO.N, {
        className: fu.uR,
        collapsibleContent: (0, p.jsx)("div", { className: fu.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(fg, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ih()(fu.AC, n),
                action: (0, p.jsxs)("div", {
                    className: fu.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(mG.ChevronSmallDownIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(ii.ChevronSmallRightIcon, {
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
let fL = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = ln();
        (0, fT.I)(e?.id);
        let n = e?.pid,
            i = (0, I.bG)(
                [fx.default],
                () => (null == e || null == n ? null : fx.default.getTrackedGameByPid(n)),
                [e, n],
                i6(),
            ),
            { data: l } = (0, fT.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, I.cf)(
                [fv.A, tc.A, fS.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, le.hw)(e, !1, [fv.A, tc.A, fS.A]),
                [e, i],
            ),
            a = (0, I.bG)(
                [le.Ay, fv.A, tc.A, fS.A],
                () => (null == e ? null : (0, le.xU)(e, le.Ay, fv.A, tc.A, fS.A)),
                [e],
                i6(),
            ),
            [o, u] = x.useState(r),
            [d, c] = x.useState(s),
            [g, m] = x.useState(!1);
        x.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, fj.kA)(),
            E = !(0, fj.T6)(),
            { legacyEnabled: h, oopEnabled: S } = (0, I.cf)([fx.default], () => fx.default.getGlobalEnabledStatus());
        function T(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case fp.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), fA.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case fp.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), fA.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case fp.OverlayToggledClientSettingType.LEGACY:
                    (fE.A.setEnabled(t, S), (0, fp.Q)(t, fp.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case fp.OverlayToggledClientSettingType.OOP:
                    (fE.A.setEnabled(h, t), (0, fp.Q)(t, fp.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                fb(
                    i ? fp.OverlayToggledClientSettingType.LEGACY_GAME : fp.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let f = A && E,
            _ = !h && !S,
            N = !o && !h && d && !A,
            b = !d && !S && o && !E,
            C = i?.overlayMethod === ff.Ue.Disabled,
            y = i?.state === ff.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && fR.has(i.state) && !C,
            j = i?.overlayMethod === ff.Ue.OutOfProcess,
            O = i?.overlayMethod === ff.Ue.OutOfProcessLimitedInteraction,
            R = i?.overlayMethod === ff.Ue.Hook,
            D = i?.state === ff.AR.OVERLAY_CRASHED || i?.state === ff.AR.OVERLAY_CRASHED_DISABLED,
            L = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n9.E,
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
                                        n9.E,
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
                    case y && R:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n9.E,
                                        { tag: "span", variant: "body-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== fh.aI.BORDERLESS_FULLSCREEN:
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
                    case D:
                        return [V.intl.string(V.t.OFC2aw), null];
                    case f:
                        return [V.intl.string(V.t.m7X4az), null];
                    case _:
                        return [V.intl.string(V.t["9DUS5l"]), null];
                    case L:
                        return [V.intl.string(V.t.nQ9EdJ), null];
                    case N:
                    case b:
                        return [V.intl.string(V.t.VWUn0a), null];
                    case v:
                        if (j) return [V.intl.string(V.t["s8+CFq"]), null];
                        if (R) return [V.intl.string(V.t.JEEdqt), null];
                        if (O) return [V.intl.string(V.t.pzBMwY), null];
                        return [V.intl.string(V.t["2Xhy9k"]), null];
                    case null == i:
                        return [V.intl.string(V.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === fh.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, e_.Ay)(() => {
            fA.A.getDetectableGames();
        });
        let [M, U] = x.useMemo(
            () =>
                v
                    ? ["text-muted", n6.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n6.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n6.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && R
                          ? ["text-strong", n6.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n6.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, R],
        );
        return null == e
            ? null
            : (0, p.jsxs)(fD, {
                  onExpand: m,
                  className: g ? fu.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(lS.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, p.jsx)(Tx.A, {
                                        size: 16,
                                        color: n6.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(Tc.CheckmarkSmallIcon, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n6.A.colors.WHITE.css,
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
                              ? (0, p.jsx)(dz.ScreenIcon, { size: "xxs", color: U })
                              : (0, p.jsx)("div", { className: fu.W4 }),
                          (0, p.jsx)(n9.E, {
                              variant: "body-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(li.A, { game: t, pid: e?.pid, size: li.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, p.jsx)(fc, {
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
                                          (fA.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (fE.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (fE.A.setEnabled(t, t),
                                              fA.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? fp.OverlayToggledClientSettingType.LEGACY_GAME
                                                : fp.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? fp.OverlayToggledClientSettingType.OOP_GAME
                                                : fp.OverlayToggledClientSettingType.OOP),
                                      null != s && fb(s, e.id ?? null));
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
                  warning: (0, p.jsx)(fy, { className: fu.Hh, game: e }),
                  children: [
                      (0, p.jsx)(fg, {
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
                                              ? T(e, fp.OverlayToggledClientSettingType.OOP)
                                              : T(e, fp.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: fu.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(fg, {
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
                                              ? T(e, fp.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, fp.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: fu.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = ln();
        return null != e;
    },
    useSearchTerms: () => [V.intl.string(V.t["9cb1Uz"])],
});
var fP = n(206885);
function fG(e) {
    let { game: t, gameApplication: n } = e,
        i = x.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, I.bG)([i8.A], () => (null != n ? n : i8.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(li.A, { game: l, pid: i, size: li.M.SMALL });
}
function fM(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, fT.I)(t?.id);
    let o = (0, I.cf)([le.Ay, fv.A, tc.A, fS.A], () => (0, le.xU)(t, le.Ay, fv.A, tc.A, fS.A)),
        u = (0, I.cf)([fv.A, tc.A, fS.A], () => (0, le.hw)(t, !1, [fv.A, tc.A, fS.A]), [t]),
        d = l(u),
        [c, g] = x.useState(d);
    return (
        x.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(fg, {
            title: t.name,
            icon: (0, p.jsx)(fG, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(ne.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && fb(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: fu.Kz }),
                ],
            }),
        })
    );
}
let fU = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, I.cf)([fx.default], () =>
                    fx.default.getGlobalEnabledStatus(),
                ),
                l = (0, I.yK)([le.Ay], () => le.Ay.getGamesSeen(!0)).filter((e) => !(0, Sv.n1)(e)),
                s = (0, i7.A)(l.map((e) => e.id)),
                r = !(0, fj.kA)();
            function a(e) {
                fE.A.setEnabled(e, i);
                let t = le.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fp.Q)(e, fp.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && fb(fp.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                fA.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () =>
                    (0, fj.kA)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, p.jsx)(fg, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: fu.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(ne.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              fP.O && (0, p.jsx)("div", { className: fu.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(fD, {
                      onExpand: t,
                      className: e ? fu.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, p.jsx)(fc, {
                          children: (0, p.jsx)(ne.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: fu.SC,
                              children: (0, p.jsx)(n9.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: fu.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      fM,
                                      {
                                          rawGame: e,
                                          clientSettingType: fp.OverlayToggledClientSettingType.LEGACY_GAME,
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
    fV = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, I.cf)([fx.default], () =>
                    fx.default.getGlobalEnabledStatus(),
                ),
                l = !(0, fj.T6)(),
                s = (0, I.yK)([le.Ay], () => le.Ay.getGamesSeen(!0)).filter((e) => !(0, Sv.n1)(e)),
                r = (0, i7.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                fE.A.setEnabled(i, e);
                let l = le.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fp.Q)(e, fp.OverlayToggledClientSettingType.OOP, l),
                    t && fb(fp.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                fA.A.toggleOverlay(t, e, i);
            }
            let u = x.useMemo(
                () => (fP.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, p.jsx)(fg, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: fu.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(ne.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              fP.O && (0, p.jsx)("div", { className: fu.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(fD, {
                      onExpand: t,
                      className: e ? fu.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, p.jsx)(fc, {
                          children: (0, p.jsx)(ne.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: fu.SC,
                              children: (0, p.jsx)(n9.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: fu.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      fM,
                                      {
                                          rawGame: e,
                                          clientSettingType: fp.OverlayToggledClientSettingType.OOP_GAME,
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
    fk = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [fL, fV, fU, fm],
    }),
    fw = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, I.bG)([fi.default], () => !fi.default.disableClickableRegions),
        setValue: (e) => {
            fE.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    fF = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lg.Ay], () => lg.Ay.getOverlayKeybind()),
                t = !(0, fj.kA)(),
                n = !(0, fj.T6)(),
                [i, l] = (0, I.yK)([le.Ay], () => [le.Ay.canShowAdminWarning, le.Ay.getVisibleGame()], []),
                s = (0, ls.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lg.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: fu.hc,
                children: (0, p.jsxs)("div", {
                    className: fu.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: fu.Bu,
                            children: [
                                (0, p.jsx)(n9.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fu.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fu.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: fu.IH,
                            children: (0, p.jsx)(lx.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tE()(null != e, "Keybind should never be undefined"),
                                        i0.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.VsAZcC)],
    });
var fB = n(515183),
    fX = n(682763);
let fz = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = ln();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = ln();
            return null != e && (0, fB.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = ln(),
                n = t?.id,
                i = (0, I.bG)([ft.A], () => ft.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, fB.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = i9.A.getStreamerActiveStreamMetadata()),
                    (l = lt(
                        t,
                        (i =
                            null != (n = le.Ay.getVisibleGame())
                                ? le.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i8.A.getApplication(l) ?? void 0 });
            null != s && (0, fX.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    fH = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [fF, fz, fw] });
var fY = n(93465),
    fW = n(222407);
let fK = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: fY.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: fY.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: fY.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: fY.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: fY.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: fY.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nb.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, I.bG)([ft.A], () => ft.A.isNotificationDisabledBySetting(fY.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function fZ(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, I.bG)([ft.A], () => ft.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, fW.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let fq = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => fK.map(fZ),
    }),
    fQ = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [fq],
    }),
    fJ = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, I.bG)([fi.default], () => fi.default.getAvatarSizeMode()),
        setValue: (e) => {
            fE.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: _.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: _.OSZ.SMALL },
        ],
    }),
    f$ = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, I.bG)([fi.default], () => fi.default.getDisplayNameMode()),
        setValue: (e) => {
            fE.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: _.pwA.NEVER },
        ],
    }),
    f0 = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, I.bG)([fi.default], () => fi.default.getDisplayUserMode()),
        setValue: (e) => {
            fE.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: _.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: _.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var f1 = n(391973),
    f2 = n(887287),
    f3 = n(897720),
    f5 = n(83880);
function f4() {
    let e = f2.A.getWidgetByType(_.uss.VOICE_V3);
    if (null == e) return null;
    let t = f5.A.getWidget(e.id);
    return null != t && (0, f3.ZO)(t) ? t : null;
}
n(392164);
let f6 = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = f4();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = f4();
        null != t &&
            (e < 1
                ? (0, f1.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, f1.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var f8 = n(502812),
    f7 = n(968898),
    f9 = n(288737);
function pe(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new f9.A({
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
        user: new gg.A({ id: l, username: e }),
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
let pt = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, I.cf)([fi.default], () => ({
                    avatarSizeMode: fi.default.getAvatarSizeMode(),
                    displayNameMode: fi.default.getDisplayNameMode(),
                    displayUserMode: fi.default.getDisplayUserMode(),
                })),
                [s] = x.useState(() => [
                    pe(V.intl.string(V.t.C0ZDvo), !0, !1),
                    pe(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    pe(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, I.bG)([f2.A, f5.A], () => {
                    let e = f2.A.getWidgetByType(_.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = f5.A.getWidget(e.id);
                    return null != t && (0, f3.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pe(t.username)).user = t), e) : null, ...s].filter(im.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(TC.N, {
                    theme: _.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ih()(fu.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: fu.kJ,
                                    children: (0, p.jsx)(f8.DH, {
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
                                    className: fu.R$,
                                    children: [
                                        (0, p.jsx)(f7.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, p.jsx)(f7.CS, {}),
                                        (0, p.jsx)(f7.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: fu.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pn = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [pt, fJ, f$, f0, f6],
    });
var pi = n(667419),
    pl = n(776162),
    ps = n(499466),
    pr = n(934058),
    pa = n(630398),
    po = n(233470),
    pu = n(361729);
let pd = [],
    pc = {
        [_.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
        [_.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
        [_.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
        [_.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
        [_.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
        [_.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
        [_.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
        [_.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
    };
function pg(e) {
    let t = nC.A[e],
        n = pc[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, nb.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, I.bG)([f5.A], () => (0, pi.$e)(e, f5.A), []),
        setValue: (t) => {
            ((0, pi.j$)(), (0, pi.JA)(e, !t));
        },
    });
}
let pm = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(pu.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(pu.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => pl.t3.flatMap(pg),
    }),
    pA = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, I.bG)([pr.A], () => pr.A.getOwnedProjects()),
                t = (0, ps.TW)("overlay_settings_conjure_apps"),
                n = (0, I.bG)([pr.A], () => pr.A.getServerProjects());
            (x.useEffect(() => {
                t && (0, po.listProjects)();
            }, [t]),
                (0, pa.A)({ refetchOnMount: !0 }));
            let i = t ? e : pd;
            return 0 === i.length && 0 === n.length
                ? null
                : (0, p.jsxs)(q.B, {
                      gap: 16,
                      children: [
                          i.length > 0
                              ? (0, p.jsxs)(q.B, {
                                    gap: 8,
                                    children: [
                                        (0, p.jsx)(b.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-muted",
                                            children: V.intl.string(pu.default["pbu+Yx"]),
                                        }),
                                        i.map((e) => (0, p.jsx)(pl.i2, { project: e }, e.id)),
                                    ],
                                })
                              : null,
                          (0, p.jsx)(pl.R, { projects: n }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(pu.default["pbu+Yx"])],
    }),
    pE = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pi.eL,
    }),
    ph = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(pu.default["Qk/rJB"]),
        usePredicate: ny.b_,
        buildLayout: () => [pm, pA, pE],
    });
var pS = n(54761);
function pT() {
    let [e, t] = (0, At.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(Ac.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: pS.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pS.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: pS.vJ,
                                  children: [
                                      (0, p.jsx)(b.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(n9.E, {
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
                                  className: pS.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pS.VV,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(Ac.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(ld.c, { className: pS.yF }),
              ],
          });
}
function pf() {
    let e = (0, I.bG)([tu.A], () => tu.A.enabled),
        t = (0, nb.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(i$.w, {
                      type: "warning",
                      message: V.intl.format(V.t.fuEX5B, {
                          onClick: function () {
                              return (0, ng.openUserSettings)(S.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, p.jsx)(ld.c, { className: pS.yF }),
              ],
          })
        : null;
}
let pp = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                fr(),
                lg.Ay.addChangeListener(fr),
                ft.A.addChangeListener(fr),
                fi.default.addChangeListener(fr),
                fn.default.addChangeListener(fr),
                e8.isPlatformEmbedded && (0, SO.a2)(),
                () => {
                    (lg.Ay.removeChangeListener(fr),
                        ft.A.removeChangeListener(fr),
                        fi.default.removeChangeListener(fr),
                        fn.default.removeChangeListener(fr),
                        e8.isPlatformEmbedded && (0, SO.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: f.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(pT, {}), (0, p.jsx)(pf, {})] });
            },
        },
        buildLayout: () => [fk, fH, ph, pn, fQ],
    }),
    px = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: fe.WindowTopOutlineIcon,
        usePredicate: ny.b_,
        buildLayout: () => [pp],
    });
var pI = n(687966);
let p_ = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pN = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [p_] });
var pb = n(227309),
    pC = n(29160),
    py = n(552366),
    pv = n(938442);
function pj(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, fT.I)(t.id);
    let o = (0, I.cf)([le.Ay, fv.A, tc.A, fS.A], () => (0, le.xU)(t, le.Ay, fv.A, tc.A, fS.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, I.cf)([le.Ay], () => ({
            canToggleDetection: null == a || le.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: le.Ay.isDetectionEnabled(o),
        })),
        c = (0, I.bG)([le.Ay], () => le.Ay.getVisibleGame()),
        [g, m] = x.useState(!1),
        A = x.useRef(null),
        E = null != c && (0, le.Es)(o) === (0, le.Es)(c),
        h = !l && !g,
        S = !i && !E,
        T = h || S,
        f = x.useMemo(
            () =>
                (0, Sv.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, b] = x.useState(f ?? "???"),
        C = ih()(pv.tR, {
            [py.LO]: !i,
            [py.Rw]: i,
            [py.FB]: null != o && i,
            [py.xL]: r,
            [py.fG]: null != s && s.length > 0,
        });
    function y() {
        (fA.A.deleteEntry(o),
            s?.forEach((e) => {
                fA.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? fv.A.getDetectableGame(o.id) : null;
        (td.default.track(_.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, Sv.n1)(o) ? o.gameName : o.name,
        }),
            (0, lN.mM)(async () => {
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
                        className: ih()(py.$K, pv.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, p.jsxs)("div", {
                                      className: py.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: py.mO, children: f }),
                                          (0, p.jsx)(lS.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, p.jsx)(Tx.A, {
                                                  className: py.qf,
                                                  size: 18,
                                                  color: n6.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(Tc.CheckmarkSmallIcon, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n6.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: ih()(py.mO, py.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && fA.A.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lz.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => b(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || E
                                        ? (e = V.intl.string(V.t.VbV5dv))
                                        : null != n && "" !== n && (e = V.intl.format(V.t["gGeOE+"], { when: n })),
                                    (0, p.jsx)(n9.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: py.GN,
                                        children: (0, p.jsx)(pC.A, {
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
                        (0, p.jsx)(aI.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(ma.W, {
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
                                    className: ih()(py._Q, { [py.g9]: t.isShown }),
                                    children: (0, p.jsx)(lS.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(lE.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: ml.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, p.jsx)(lS.m, {
                        text: V.intl.string(V.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, p.jsx)(lf.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lN.mM)(async () => {
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
                                                              (fA.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : fA.A.toggleDetection(o);
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
                    className: py.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            x.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pj, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: py.PQ }),
                                ],
                            },
                            (0, le.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pO() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = SD();
    return 0 === e.length
        ? null
        : (0, p.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n7.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pj,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pb.a7 ? t : void 0 },
                              (0, le.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pR = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pO, {}),
});
var pD = n(424994);
let pL = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pR, pN],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, I.bG)([le.Ay], () => le.Ay.getGamesSeen(!1).some((e) => !(0, Sv.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pD.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pP = n(890497),
    pG = n(853270),
    pM = n(969426);
function pU(e) {
    let { onClose: t } = e,
        n = (0, I.bG)([le.Ay], () => le.Ay.getCandidateGames()),
        [i, l] = x.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(a_.l, {
        className: ih()(pG.H, pM.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, p.jsx)(pP.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: ih()(pG.o, pv.xM),
                children: [
                    (0, p.jsx)(Sa.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (fA.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pV = n(475007),
    pk = n(221851);
function pw() {
    let e = x.useRef(null);
    return (0, p.jsxs)("div", {
        className: ih()(pV.a, pk.Gf),
        children: [
            (0, p.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, p.jsx)(aI.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pU, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(Sa.Q, {
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
function pF() {
    return (0, p.jsx)("div", {
        className: ih()(pv.tR, py.eS, py.Rw),
        children: (0, p.jsxs)("div", {
            className: ih()(py.$K, pv.Vd),
            children: [
                (0, p.jsx)("div", { className: py.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, p.jsx)(pw, {}),
            ],
        }),
    });
}
let pB = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = SD(),
                n = (0, I.bG)([le.Ay], () => le.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(pF, {})
                : (0, p.jsxs)("div", {
                      className: ih()(pv.Vd, py.C2),
                      children: [
                          (0, p.jsx)(
                              pj,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pb.a7 ? e : void 0,
                              },
                              (0, le.Es)(n),
                          ),
                          (0, p.jsx)(pw, {}),
                      ],
                  });
        },
    }),
    pX = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [pB],
    }),
    pz = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [pX, pL],
    }),
    pH = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pI.GameControllerIcon,
        usePredicate: ny.Pi,
        buildLayout: () => [pz],
    });
var pY = n(176781),
    pW = n(341923),
    pK = n(419490),
    pZ = n(572164),
    pq = n(489496),
    pQ = n(696016),
    pJ = n(683825);
let p$ = (0, h.sN)(S.X.CLIPS_BITRATE, {
    useTitle: () => V.intl.string((0, pW.H)() ? pJ.default.i2xEfm : V.t["8bZyov"]),
    useSubtitle: () => V.intl.string((0, pW.H)() ? pJ.default.sY70pa : V.t["h8DSx/"]),
    minValue: 10,
    maxValue: 100,
    useDefaultValue: () => 75,
    getInitialValue: () => pK.Ay.getSettings().clipsQuality.bitratePercent ?? 75,
    onValueRender: (e) => `${Math.round(e)}%`,
    setValue: (e) => {
        let { clipsQuality: t } = pK.Ay.getSettings();
        pq.GS({ ...t, bitratePercent: Math.round(e) });
    },
    markers: [10, 25, 50, 75, 100],
    onMarkerRender: (e) => `${Math.round(e)}%`,
    useDisabled: () => !(0, pZ.E)(),
});
var p0 = n(226640);
let p1 = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string((0, pW.H)() ? pJ.default.juVL76 : V.t["2wScL1"]),
        useSubtitle: () => V.intl.string((0, pW.H)() ? pJ.default.n6Ts7o : V.t["Rf9+fy"]),
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = pK.Ay.getSettings();
            pq.GS({ ...t, frameRate: e });
        },
        useOptions: p0.Fz,
        useDisabled: () => !(0, pZ.E)(),
    }),
    p2 = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, I.bG)([pK.Ay], () => pK.Ay.getHardwareClassification()) === pQ.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(sl.A, { look: sl.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    p3 = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string((0, pW.H)() ? pJ.default.CnXTMY : V.t.OgfUio),
        useSubtitle: () => ((0, pW.H)() ? null : V.intl.string(V.t.H7j4tY)),
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().clipsLength),
        setValue: (e) => pq.h$(e),
        useOptions: p0.Qu,
        useDisabled: () => !(0, pZ.E)(),
    }),
    p5 = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, pW.H)()
                ? (0, p.jsx)(i$.w, { type: "info", role: "none", message: V.intl.string(pJ.default["1C6Gea"]) })
                : (0, p.jsx)(sl.A, { look: sl.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) });
        },
    }),
    p4 = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string((0, pW.H)() ? pJ.default["82AJHx"] : V.t.aFudZJ),
        useSubtitle: () => V.intl.string((0, pW.H)() ? pJ.default["0Y9r0P"] : V.t.nIrkW5),
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = pK.Ay.getSettings();
            pq.GS({ ...t, resolution: e });
        },
        useOptions: p0.gF,
        useDisabled: () => !(0, pZ.E)(),
    }),
    p6 = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string((0, pW.H)() ? pJ.default.nvHjmr : V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string((0, pW.H)() ? pJ.default.HzqWWF : V.t.m4Cjj9),
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().remindersEnabled),
        setValue: (e) => pq.Mt(e),
        useDisabled: () => !(0, pZ.E)(),
    });
n(51318);
let p8 = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string((0, pW.H)() ? pJ.default.E6QvLy : pJ.default.TGwzMe),
        buildLayout: () => [p2, p3, p1, p4, p$, p5, p6],
    }),
    p7 = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => ((0, pW.H)() ? V.intl.string(pJ.default.Oh9NEy) : "Show clips debug tooltips"),
        useSubtitle: () =>
            (0, pW.H)()
                ? V.intl.string(pJ.default.XoptI1)
                : "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => pq.YP(e),
    }),
    p9 = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => ((0, pW.H)() ? V.intl.string(pJ.default["Pm/g4t"]) : "Show POV clips in Gallery"),
        useSubtitle: () =>
            (0, pW.H)()
                ? V.intl.string(pJ.default.aSPNgv)
                : "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => pq.Uh(e),
    }),
    xe = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, I.bG)([sp.default], () => {
                let e = sp.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [p7, p9],
    });
var xt = n(271597),
    xn = n(417270),
    xi = n(847825);
let xl = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([lg.Ay], () => lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
        tE()(null != n, "Save clip keybind unset");
        let i = !(0, pZ.E)(),
            l = (0, pW.H)(),
            s = (0, lI.Xt)(n.shortcut, (0, lI.OH)("alt+c")),
            r = x.useRef(null),
            a = x.useCallback(
                (e) => {
                    i0.A.setKeybind({ ...n, shortcut: e });
                },
                [n],
            ),
            o = x.useCallback(() => {
                i0.A.setKeybind({ ...n, shortcut: (0, lI.OH)("alt+c") });
            }, [n]);
        return (0, p.jsx)(lA.D, {
            label: V.intl.string(l ? pJ.default["8Cx5u+"] : V.t.pf54EU),
            description: V.intl.string(l ? pJ.default.sved3b : V.t["QyB/jK"]),
            layout: "horizontal-responsive",
            children: (0, p.jsx)("div", {
                className: xi.g,
                children: (0, p.jsx)(lx.A, {
                    ref: r,
                    disabled: i,
                    defaultValue: n.shortcut,
                    onChange: a,
                    keycaps: t,
                    trailingActions: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(lS.m, {
                                text: V.intl.string(pJ.default.bUtubv),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, p.jsx)(lE.K, {
                                    icon: iJ.KeyboardIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i,
                                    "aria-label": V.intl.string(pJ.default.bUtubv),
                                    onClick: (e) => {
                                        (e.stopPropagation(), r.current?.toggleRecordMode());
                                    },
                                }),
                            }),
                            (0, p.jsx)(lS.m, {
                                text: V.intl.string(pJ.default.Kyk1Tp),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, p.jsx)(lE.K, {
                                    icon: xn.RetryIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i || (l && s),
                                    "aria-label": V.intl.string(pJ.default.Kyk1Tp),
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
    xs = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () =>
            (0, pW.H)()
                ? [V.intl.string(pJ.default["8Cx5u+"]), V.intl.string(pJ.default.sved3b)]
                : [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        usePredicate: () => (0, I.bG)([lg.Ay], () => null != lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
        Component: xl,
    }),
    xr = (0, h.E2)(S.X.CLIPS_MANUAL_KEYBIND, {
        usePredicate: () => {
            let e = (0, pW.H)(),
                t = (0, I.bG)([lg.Ay], () => null != lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0));
            return e && t;
        },
        useSearchTerms: xs.useSearchTerms,
        Component: () => (0, p.jsx)(xl, { keycaps: !0 }),
    }),
    xa = (e) => {
        let { keycaps: t } = e,
            n = (0, I.bG)([lg.Ay], () => lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
            i = (0, I.bG)([lg.Ay], () => lg.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0));
        (tE()(null != n, "Save clip keybind unset"), tE()(null != i, "Save screenshot keybind unset"));
        let l = x.useCallback(
            (e) => {
                i0.A.setKeybind({ ...i, shortcut: e });
            },
            [i],
        );
        return (0, p.jsx)(lA.D, {
            label: V.intl.string(V.t["0U/hj7"]),
            description: V.intl.string(V.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, p.jsx)("div", {
                className: xi.g,
                children: (0, p.jsx)(lx.A, { defaultValue: i.shortcut, onChange: l, keycaps: t }),
            }),
        });
    },
    xo = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: lJ.BW,
        Component: xa,
    }),
    xu = (0, h.E2)(S.X.CLIPS_MANUAL_SCREENSHOT_KEYBIND, {
        useSearchTerms: xo.useSearchTerms,
        usePredicate: () => {
            let e = (0, pW.H)(),
                t = (0, lJ.BW)(),
                n = (0, I.bG)(
                    [lg.Ay],
                    () =>
                        null != lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0) &&
                        null != lg.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0),
                );
            return e && t && n;
        },
        Component: () => (0, p.jsx)(xa, { keycaps: !0 }),
    }),
    xd = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, pZ.E)(),
        setValue: (e) => pq.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    xc = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, {
        usePredicate: () => !(0, pW.H)(),
        buildLayout: () => [xd, xs, xo],
        headerSettingKey: xd.key,
    }),
    xg = (0, h.AK)(S.X.CLIPS_VOICE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(pJ.default.ArBuEu),
        destinationKey: S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING,
    }),
    xm = (0, h.gN)(S.X.CLIPS_RELATED_SETTINGS, { usePredicate: pW.H, buildLayout: () => [xg] });
var xA = n(428678),
    xE = n(650684),
    xh = n(439408),
    xS = n(464132),
    xT = n(791498);
let xf = (0, h.E2)(S.X.CLIPS_CAPTURE_MODE, {
        usePredicate: () => {
            let e = (0, lJ.sw)(),
                t = (0, pW.H)();
            return e && t;
        },
        useSearchTerms: () => [
            V.intl.string(pJ.default["n+Htm0"]),
            V.intl.string(pJ.default["uO/2T5"]),
            V.intl.string(pJ.default["2Uh8Zr"]),
            V.intl.string(pJ.default.uEs0uv),
        ],
        Component: function () {
            let e,
                { value: t, onChange: n } = (0, xS.U)(),
                i = (0, xT.q)(xf);
            return (0, p.jsx)(xh.u, {
                label: V.intl.string(pJ.default["n+Htm0"]),
                options:
                    ((e = (0, I.bG)([lg.Ay], () =>
                        (0, lI.dI)(lg.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, lI.OH)("alt+c"), !0),
                    )),
                    [
                        {
                            value: "off",
                            title: V.intl.string(pJ.default["uO/2T5"]),
                            description: V.intl.string(pJ.default["l/u5Cq"]),
                            icon: xA.DenyIcon,
                        },
                        {
                            value: "manual",
                            title: V.intl.string(pJ.default["2Uh8Zr"]),
                            description:
                                e.length > 0
                                    ? V.intl.formatToPlainString(pJ.default["qYS+JH"], { keybind: e })
                                    : V.intl.string(pJ.default.VfTZ7q),
                            icon: pY.ClipsIcon,
                        },
                        {
                            value: "auto",
                            title: V.intl.string(pJ.default.uEs0uv),
                            description: V.intl.string(pJ.default.MRWtw9),
                            icon: xE.ClipsAutoIcon,
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
    xp = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () =>
            V.intl.format((0, pW.H)() ? pJ.default["6C94PY"] : pJ.default["dh7g+S"], {
                learnMoreLink: eC.A.getArticleURL(_.MVz.CLIPS),
            }),
        useHeaderDecoration: () =>
            (0, pW.H)()
                ? {
                      type: f.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              type: f.UV.BUTTON,
                              id: "clips-library",
                              text: V.intl.string(pJ.default["5pE8FG"]),
                              variant: "secondary",
                              onClick: () => (0, xt.p)(),
                          },
                      ],
                  }
                : void 0,
        buildLayout: () => [xf, xc, xr, xu, xm],
    }),
    xx = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () =>
            (0, pW.H)()
                ? [V.intl.string(pJ.default.DonDIR), V.intl.string(pJ.default.qiqPrh)]
                : [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, I.bG)([pK.Ay], () => pK.Ay.getSettings().storageLocation),
                t = !(0, pZ.E)() || !(0, lJ.ri)(ll.Ay),
                n = (0, pW.H)(),
                i = x.useRef(!1);
            return (0, p.jsx)(lA.D, {
                label: V.intl.string(n ? pJ.default.DonDIR : V.t.s4773E),
                description: V.intl.string(n ? pJ.default.qiqPrh : V.t.svjwGh),
                layout: "vertical",
                children: (0, p.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, p.jsx)(lb.k, {
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
                                        let e = await nN.A.fileManager.showOpenDialog({
                                            properties: ["openDirectory", "createDirectory"],
                                        });
                                        e.length > 0 && pq.HU(e[0]);
                                    } finally {
                                        i.current = !1;
                                    }
                                }
                            },
                            text: V.intl.string(pJ.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    xI = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(pJ.default["0Q+pdZ"]),
        buildLayout: () => [xx],
    }),
    x_ = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lJ.sw,
        usePersistentBadge: () =>
            (0, pW.H)() ? { badgeType: f.Xi.EARLY_ACCESS } : { badgeType: f.Xi.COUNT, count: 0 },
        buildLayout: () => [xp, p8, xI, xe],
    }),
    xN = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: pY.ClipsIcon,
        buildLayout: () => [x_],
    }),
    xb = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [pH, Ta, xN, px, T9],
    });
var xC = n(631670),
    xy = n(974504),
    xv = n(836602),
    xj = n(591179),
    xO = n(702476),
    xR = n(761508),
    xD = n(159001),
    xL = n(872200),
    xP = n(919395),
    xG = n(68750);
function xM(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(b.D, { variant: "body-md/medium", className: xG.Vf, children: t }), n],
    });
}
function xU(e) {
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
        className: ih()(xG.UA, n),
        children: (0, p.jsxs)("div", {
            className: ih()(xG.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: ih()(xG.Fp, a && xG.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(xM, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(xM, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: xG.oB, children: t }),
            ],
        }),
    });
}
var xV = n(641318),
    xk = n(101058),
    xw = n(851767),
    xF = n(696451),
    xB = n(590941);
function xX() {
    return (0, p.jsxs)("div", {
        className: xB.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xB.Sl }),
            (0, p.jsx)(b.D, { className: xB.h8, variant: "heading-lg/semibold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, p.jsx)(n9.E, { className: xB.h8, variant: "body-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xB.h8,
                children: (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, cl.pX)(_.BVt.GUILD_DISCOVERY), (0, tH.default)());
                    },
                }),
            }),
        ],
    });
}
var xz = n(81400),
    xH = n(450232),
    xY = n(468450),
    xW = n(355622),
    xK = n(408018),
    xZ = n(989161),
    xq = n(290386),
    xQ = n(941933),
    xJ = n(486264);
let x$ = (0, t0.Ld)(),
    x0 = (0, G.createChannelRecord)({ id: "1", type: _.rbe.DM }),
    x1 = (0, t0.Ld)();
function x2(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, xq.U)({ location: "profile_customization_about_me" }),
        [u, d] = x.useState(l ?? r),
        [c, g] = x.useState((0, xK.x7)(u)),
        m = x.useRef(r),
        A = x.useRef(!1);
    return (
        x.useEffect(() => {
            if (m.current !== r) {
                let e = (0, xK.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        x.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, xK.x7)(r)));
        }, [l, r, u]),
        (0, p.jsxs)(aS.A, {
            title: t,
            titleId: x$,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(xZ.Ay, {
                    "aria-describedby": x1,
                    "aria-labelledby": x$,
                    className: xJ.i,
                    innerClassName: xJ.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: x0,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: xQ.y,
                    type: xW.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(lT.A, { id: x1, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var x3 = n(821956),
    x5 = n(562819),
    x4 = n(84540),
    x6 = n(467690);
function x8(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, xP.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xP.CP)(n?.id),
        c = r ? gd.wL : s8.$n;
    return (0, p.jsx)(aS.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: x6.NC,
            children: [
                (0, p.jsx)(c, {
                    size: s8.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, x5.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ih()({ [x6.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x6.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, x3.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, x4.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var x7 = n(339984),
    x9 = n(942132);
let Ie = [{ name: "gif", extensions: ["gif"] }];
function It(e) {
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
        m = c ? gd.wL : s8.$n,
        A = x.useCallback(() => {
            (0, xY.XD)({
                uploadType: x7.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Ie : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(aS.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: x9.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ih()({ [x9.yj]: c }),
                    size: s8.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x9.DT,
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
var In = n(810188);
function Ii(e) {
    let { user: t, guildId: n, className: i } = e,
        l = aC.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xP.B0)(t, n),
        [d, c] = (0, At.kn)([eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, x.useCallback)(() => {
            (c(Ac.i.TAKE_ACTION),
                td.default.track(_.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eH.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, x.useCallback)(() => {
            ((0, x4.p)({ displayNameStyles: null }), td.default.track(_.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, x.useCallback)(() => {
            (0, x4.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(aS.A, {
        title: V.intl.string(eY.default["86GtGH"]),
        titleBadge: g
            ? (0, p.jsx)("div", { className: In.A, children: (0, p.jsx)(AR.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: In.N,
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
var Il = n(637193),
    Is = n(622410);
function Ir(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xP.rv)(t, n?.id),
        d = x.useCallback(() => {
            (0, Il.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = x.useCallback(() => {
            (0, x4.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(aS.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Is.u,
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
var Ia = n(88524);
function Io(e) {
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
        g = d ? gd.wL : s8.$n;
    return (0, p.jsx)(aS.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: Ia.NC,
            children: [
                (0, p.jsx)(g, {
                    className: ih()({ [Ia.yj]: d }),
                    size: s8.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, xY.XD)({ uploadType: x7.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ia.DT,
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
var Iu = n(617061),
    Id = n(625613);
function Ic(e) {
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
        d = aC.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xP.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xP.nZ)(n?.id);
    x.useEffect(() => {
        d &&
            (td.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t3.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, t1.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, t2.uq)(t3.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gd.wL : s8.$n;
    return (0, p.jsx)(aS.A, {
        forcedDivider: r,
        borderType: ci.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, p.jsxs)("div", {
            className: Id.NC,
            children: [
                (0, p.jsx)(A, {
                    size: s8.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Iu.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ih()({ [Id.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Id.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, x4.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Ig = n(515727),
    Im = n(594401);
function IA(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, ez.Ay)(),
        s = (0, xP.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xP.Tu)(n?.id),
        [o, u] = (0, At.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(aS.A, {
        showBorder: d,
        borderType: d ? ci.i.NEW_UPSELL : ci.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: Im.Ad, children: (0, p.jsx)(AR.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: Im.NC,
            children: [
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, Ig.w)({ analyticsLocations: l, guild: n }), u(Ac.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Im.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, x4.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var IE = n(602853),
    Ih = n(654107),
    IS = n(527212),
    IT = n(101928),
    If = n(819169),
    Ip = n(317097),
    Ix = n(508274),
    II = n(379012);
function I_(e) {
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
        c = (0, IE.r)(n6.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n6.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, xY.sN)(i),
        A = (0, Ip.Hl)(i),
        E = A === c ? g : A,
        h = m ? n6.A.unsafe_rawColors.WHITE.css : n6.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, If.A)(a),
        T = (0, If.A)(o),
        [f, I] = x.useState((0, oG.A)());
    return (
        x.useEffect(() => {
            (S !== a || T !== o) && I((0, oG.A)());
        }, [o, a, T, S]),
        (0, p.jsx)(aI.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(Ix.VN, {
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
                    className: ih()(II.oP, { [II.r9]: s }),
                    children: [
                        (0, p.jsx)(ie.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? _.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: II.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(aN.PencilIcon, {
                                size: "custom",
                                className: II.BW,
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
var IN = n(190377);
function Ib(e) {
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
        c = (0, IS.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, IT.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aC.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, IE.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, Ih.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(aS.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: ih()(IN.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: IN.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: IN.YX,
                          children: (0, p.jsx)(I_, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n9.E, {
                                  className: IN.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: IN.YX,
                          children: (0, p.jsx)(I_, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n9.E, {
                                  className: IN.yz,
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
                              className: IN.WA,
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
function IC(e) {
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
    return (0, p.jsx)(aS.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, p.jsx)(lb.k, {
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
var Iy = n(684732),
    Iv = n(576705),
    Ij = n(931175);
function IO(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, I.bG)([Iv.A], () => Iv.A.can(_.xBc.CHANGE_NICKNAME, r) || Iv.A.can(_.xBc.MANAGE_NICKNAMES, r)),
        o = (0, TN.L)(t3.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aS.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lb.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: 32,
                onChange: function (e) {
                    (0, x4.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, p.jsx)(Ii, { user: s, guildId: r.id, className: Ij.F }),
        ],
    });
}
var IR = n(233454);
let ID = "/assets/b25da78aa7949feb.png";
function IL(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cC.Ay)(),
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
              className: IR.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: IR.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: IR.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.ASH:
                                      case _.NJ8.DARK:
                                      case _.NJ8.ONYX:
                                          return ID;
                                      case _.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return ID;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: IR._9,
                              children: [
                                  (0, p.jsx)(n9.E, {
                                      variant: "body-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(n9.E, {
                                      variant: "body-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(cn.A, {
                              size: s8.$n.Sizes.LARGE,
                              color: s8.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aC.Ay.isPremium(t)
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
var IP = n(203164);
function IG() {
    let e = (0, I.bG)([sp.default], () => {
            let e = sp.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, TN.L)(t3.PremiumTypes.TIER_2),
        n = (0, I.bG)([xv.A, lL.A], () => lL.A.getGuild(xv.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, I.cf)([xv.A], () => ({ ...xv.A.getPendingChanges(n.id), errors: xv.A.getErrors(n.id) })),
        d = (0, xk.V7)({ userId: e.id, image: i }),
        c = (0, xz.EC)(n.id),
        g = (0, I.bG)([xF.Ay], () => (null == n.id ? null : xF.Ay.getMember(n.id, e.id))),
        m = (0, I.bG)([xw.A], () => xw.A.getGuildMemberProfile(e.id, n.id)),
        A = aC.Ay.canUsePremiumProfileCustomization(e),
        E = (0, xP.z5)(i, g?.avatar),
        h = (0, xP.Ac)(s, m?.banner),
        S = (0, Iy.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: IP.Q,
        children: [
            (0, p.jsx)(
                IO,
                {
                    errors: u?.nick ?? c?.nick,
                    username: u8.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                IC,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, x4.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, p.jsxs)(IL, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        It,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, p.jsx)(xH.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, xY.rM)(e, g?.avatar, (e) => (0, x4.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        x8,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, p.jsx)(xH.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(Ii, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        Ir,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(xH.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        Ic,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, p.jsx)(xH.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        IA,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, p.jsx)(xH.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        Io,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, xY.rM)(e, m?.banner, (e) => (0, x4.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(Ib, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, x4.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        x2,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, p.jsx)(xH.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, x4.p)({ guildId: n.id, bio: e }),
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
var IM = n(832131);
function IU(e) {
    (0, lN.mM)(async () => {
        let { default: t } = await Promise.all([n.e(935205), n.e(843117), n.e(596202)]).then(n.bind(n, 63473));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: _.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function IV(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, I.bG)([sp.default], () => {
            let e = sp.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, I.bG)([xF.Ay], () => (null != t ? xF.Ay.getMember(t.id, l.id) : null)),
        r = (0, I.bG)([xw.A], () => !xw.A.isFetchingProfile(l.id, t?.id)),
        a = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, I.cf)([xv.A], () => xv.A.getPendingChanges(t?.id)),
        c = (0, xk.V7)({ userId: l.id, image: o }),
        g = (0, xP.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xP.B0)(l, t?.id);
    return (x.useEffect(() => xD.IM, []), a)
        ? (0, p.jsx)(oI.A, {})
        : r
          ? (0, p.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(_.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ah.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(xU, {
                                      profilePreviewTitle: (0, p.jsx)(b.D, {
                                          variant: "heading-sm/medium",
                                          className: IM.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(xV.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: aC.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: IU,
                                          containerClassName: IM.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(xL.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? IM.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(IG, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(xX, {}),
                ],
            })
          : (0, p.jsx)(oP.y, {});
}
var Ik = n(917445),
    Iw = n(641130);
function IF(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: Iw.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var IB = n(823092),
    IX = n(969935),
    Iz = n(379197),
    IH = n(488430),
    IY = n(457421),
    IW = n(940622),
    IK = n(559474),
    IZ = n(757993);
let Iq = function () {
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
        } = ((e = (0, IW.mb)(IK.RN.UPSELL_BANNER)),
        (t = (0, IW.mb)(IK.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, I.bG)([IY.A], () => IY.A.getMarketingBySurface(Iz.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: IH.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, IB.L_)();
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
            className: IZ.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: IZ.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: IZ.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: IZ.Em,
                    children: [
                        (0, p.jsx)(b.D, {
                            variant: "heading-lg/semibold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: IZ.DD,
                            children: o,
                        }),
                        (0, p.jsx)(n9.E, {
                            variant: "body-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, IX.Cz)({
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
var IQ = n(451909),
    IJ = n(202639),
    I$ = n(521440),
    I0 = n(536015),
    I1 = n(423814),
    I2 = n(77528),
    I3 = n(590180),
    I5 = n(898461),
    I4 = n(469054),
    I6 = n(601298),
    I8 = n(207803),
    I7 = n(461797);
let I9 = Object.keys(I7.jB);
function _e(e) {
    let t = null == e ? I9 : I9.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var _t = n(201805),
    _n = n(221650);
function _i(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, _t.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = x.useMemo(() => {
            let e = (0, I7.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: _n.kL,
        children: [
            (0, p.jsx)(ie.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: _n.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(ie.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: _n.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: _n.L_ }),
                    (0, p.jsx)(n9.E, {
                        className: _n._e,
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _l = n(511484),
    _s = n(811611),
    _r = n(206697),
    _a = n(729934);
function _o(e, t) {
    let n = _a.A.useField("scrollPosition"),
        i = (0, I.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, x.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _a.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _u = n(844222),
    _d = n(842092);
let _c = "/assets/d4955aabdcb5bdee.png",
    _g = { assetOrigin: I4.E.NEW_ASSET, imageUri: _c, staticImageUri: _c, description: "", originalAsset: void 0 };
function _m(e) {
    let { user: t } = e,
        { reducedMotion: n } = x.useContext(_u.C),
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
        } = (0, I.cf)([xv.A], () => {
            let e = xv.A.getPendingChanges(),
                t = xv.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, xk.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(xV.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _g,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _d.WX,
        containerClassName: _d.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _A = n(829497);
function _E(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = aC.Ay.isPremium(t),
        s = aC.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, I.cf)([xv.A], () => {
            let e = xv.A.getPendingChanges(),
                t = xv.A.getErrors(),
                n = xv.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, x.useState)(_e()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, x.useMemo)(() => {
                    let t = (0, I7.Wt)(e);
                    return {
                        banner: (0, I6.X)({
                            assetOrigin: I4.E.NEW_ASSET,
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
                r = (0, I.bG)([I3.A], () => {
                    let e = I3.A.getProduct(l);
                    return (0, I5.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, x.useEffect)(() => {
                (0, I8.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, x.useCallback)(() => {
                let n = _e(e);
                (t(n), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = x.useRef(null);
    _o(m, eR._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _r.T)(), td.default.track(_.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let S = (0, I2.V)()?.subscriptionTrial?.skuId === t3.pe.TIER_2,
        T = (0, I1.O)(),
        f = (0, _l.U9)(T, t3.pe.TIER_2);
    return i
        ? (0, p.jsx)(ez.f5, {
              value: A,
              children: (0, p.jsxs)(ci.A, {
                  ref: m,
                  className: _A.MT,
                  type: ci.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(xU, {
                          stickyPreview: !1,
                          layoutClassName: _A.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(aA.NitroWheelIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: _A.PC,
                                  }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(_i, { preset: c, onShuffle: g }), (0, p.jsx)(_m, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(b.D, {
                                              variant: "heading-xl/semibold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(n9.E, {
                                              className: _A.h_,
                                              variant: "body-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(Ib, {
                                      className: _A.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xk.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: I8.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(Io, {
                                      className: _A.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: I8.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(It, {
                                          className: _A.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: I8.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(Ii, { user: t, className: _A.fz }),
                                  !S &&
                                      (0, p.jsx)(n9.E, {
                                          variant: "body-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(IJ.d, {
                              onSubscribeModalClose: h,
                              className: _A.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, I0.K)({ onSubscribeFinish: h });
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
                                  (0, p.jsx)("div", { className: _A.BU }),
                                  (0, p.jsx)(_s.Ay, {
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
var _h = n(814390),
    _S = n(643056),
    _T = n(843282),
    _f = n(145497),
    _p = n(685073),
    _x = n(534400),
    _I = n(581781),
    __ = n(743981),
    _N = n(195801);
let _b = (0, t0.Ld)(),
    _C = x.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, I.cf)([sp.default], () => (0, _p.Zo)(sp.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, p.jsx)(_I.A, {
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
                        : (0, p.jsx)(_f.j, {
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
                        : (0, p.jsx)(_x.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: __.Sl.SIZE_16,
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
            _o(h, eR._F.GUILD_TAG),
            (0, p.jsxs)(aS.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _b,
                ref: h,
                children: [
                    (0, p.jsx)(n9.E, {
                        className: _N.VA,
                        variant: "body-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(_T.Pw, {
                        className: _N.Lt,
                        optionClassName: _N.S0,
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
var _y = n(318785),
    _v = n(470739);
let _j = function () {
    return (0, _S.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(aS.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, p.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _v.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _O = n(953726);
let _R = (0, t0.Ld)();
function _D(e) {
    let t = (0, TN.L)(t3.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aS.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _R,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lb.k, {
                    "aria-labelledby": _R,
                    placeholder: e.placeholder,
                    maxLength: 32,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(Ii, { user: e.user, className: _O.F }),
        ],
    });
}
var _L = n(376626);
function _P(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: _L.u,
        children: (0, p.jsx)(ne.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, xC._e)() : (0, x4.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _G(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, IE.r)(n6.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Ih.rh)(s, r, !1),
        o = (0, Ip.LX)(a[0]);
    return (0, p.jsx)(aS.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, p.jsx)(I_, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _M = n(518477);
let _U = function () {
    let e = (0, I.bG)([ch.default], () => ch.default.getId());
    return (0, p.jsx)(aS.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, xO.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _M.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _V = n(654910);
function _k() {
    let e = (0, I.bG)([sp.default], () => {
            let e = sp.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([xw.A], () => xw.A.getUserProfile(e.id)),
        n = (0, _S.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, I.cf)([xv.A], () => {
            let e = xv.A.getPendingChanges(),
                t = xv.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xk.V7)({ userId: e.id, image: i }),
        A = (0, xz.EC)(),
        E = aC.Ay.canUsePremiumProfileCustomization(e),
        h = (0, xP.z5)(i, e.avatar),
        S = (0, xP.Ac)(s, t?.banner),
        T = (0, IS.Ay)(e.id),
        f = T?.getLegacyUsername(),
        x = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, _y.b)(),
        b = null != (0, _p.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: _V.Q,
        children: [
            (0, p.jsx)(_D, {
                placeholder: e.username,
                errors: x,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, x4.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                IC,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, x4.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(_U, {}),
            (0, p.jsx)(
                It,
                {
                    onAvatarChange: (e) => {
                        ((0, x4.p)({ avatar: e }), (0, xP.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(x8, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(Ir, { user: e }),
            (0, p.jsx)(Ic, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, p.jsx)(IA, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              Io,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, x4.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(Ib, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, x4.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      _G,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, x4.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                x2,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, x4.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || b) &&
                (0, p.jsx)(_C, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, x4.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, p.jsx)(_P, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(_j, {}, "badges"),
        ],
    });
}
function _w() {
    (0, lN.mM)(async () => {
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
var _F = n(447080);
function _B() {
    let e = (0, I.bG)([sp.default], () => {
            let e = sp.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, I.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, I.cf)([xv.A], () => ({ ...xv.A.getPendingChanges(), showNotice: xv.A.showNotice() })),
        a = (0, xk.V7)({ userId: e.id, image: i }),
        o = (0, xP.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _h.A)() && null != n ? IQ.Ay.parse(void 0, n).content : n,
        d = aC.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    x.useEffect(() => xC.IM, []);
    let [g, m] = x.useState(!1),
        A = !d,
        E = x.useRef(null);
    return t
        ? (0, p.jsx)(oI.A, {})
        : (0, p.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, p.jsx)(Iq, {}),
                  (0, p.jsx)(xU, {
                      profilePreview: (0, p.jsx)(xV.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _w,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _F.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(xL.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _F.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(_k, {}),
                  }),
                  (0, p.jsx)(c5.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(_E, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, p.jsx)(IJ.d, {
                          className: _F.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, I0.K)({}) }),
                          textVariant: "heading-sm/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(I$.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: _F.Xl,
                              children: (0, p.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(_.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: aA.NitroWheelIcon,
                              }),
                          }),
                      }),
              ],
          });
}
var _X = n(188567);
n(46121);
var _z = n(944983);
let _H = { [eR.Eq.USER_PROFILE]: "main_profile_tab", [eR.Eq.GUILD]: "guild_profile_tab" },
    _Y = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, I.bG)([lP.A, g9.Ay, xv.A], () => {
                    let e = xv.A.selectedGuildId ?? lP.A.getGuildId();
                    return null == e || xv._.has(e) ? g9.Ay.getFlattenedGuildIds().find((e) => !xv._.has(e)) : e;
                }),
                t = (0, I.bG)([lL.A], () => lL.A.getGuild(e)),
                n = (0, I.bG)([xv.A], () => xv.A.showNotice()),
                i = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
                l = _a.A.useField("subsection");
            return (
                x.useEffect(() => {
                    (0, ia._)(_H[l]);
                }, [l]),
                x.useEffect(() => {
                    null != i && t?.id != null && (0, Ik.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(IF, {
                    children: (0, p.jsxs)(uX.F, {
                        component: (0, p.jsx)(lT.A, {
                            children: (0, p.jsx)(b.D, {
                                variant: "heading-xl/medium",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(xR.V, {
                                className: _z.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                _X._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eR.Eq.GUILD && null != t && (0, xD.V2)(t.id),
                                            _a.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        xR.V.Item,
                                        {
                                            className: _z.YU,
                                            id: eR.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eR.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        xR.V.Item,
                                        {
                                            className: ih()(_z.YU, _z.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eR.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eR.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eR.Eq.GUILD
                                ? (0, p.jsx)(IV, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, io.fO)({ duration: 300, intensity: 1.4 }),
                                                  _X._.dispatch(_.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xD.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(_B, {}),
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
    _W = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_Y] });
var _K = n(379633);
function _Z() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gc.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: _K.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: _K.FS,
                      children: [
                          (0, p.jsx)(n9.E, {
                              color: "text-strong",
                              variant: "body-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: _K.Fk,
                              children: [
                                  (0, p.jsx)(n9.E, {
                                      variant: "body-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(aN.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _q = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [xv.A], element: xy.A },
        initialize: () => xC.F7,
        buildLayout: () => [_W],
    }),
    _Q = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _$,
        StronglyDiscouragedCustomComponent: _Z,
        usePredicate: () => !(0, xj.X)("user_settings_sidebar"),
        buildLayout: () => [_q],
    }),
    _J = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _$,
        StronglyDiscouragedCustomComponent: _Z,
        usePredicate: () => (0, xj.X)("user_settings_sidebar"),
        onClick: () => {
            let e = ch.default.getId();
            (0, xO.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _$() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gc.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _0 = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_Q, _J] });
var _1 = n(98207);
n(204925);
let _2 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lN.mM)(
        async () => {
            let { default: t } = await Promise.all([n.e(213042), n.e(319623), n.e(121007)]).then(n.bind(n, 110744));
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u5.tE : null, onCloseCallback: t },
    );
};
var _3 = n(940856),
    _5 = n(506775),
    _4 = n(121780),
    _6 = n(871309),
    _8 = n(961943);
function _7() {
    let e = _4.A.getCountryCode(),
        t = null != e ? _8.q5[e.alpha2] : void 0;
    _6.A.openUrl(eC.A.getArticleURL(t ?? _8.GF));
}
var _9 = n(484051);
function Ne() {
    return (0, _9.a)(_8.LI);
}
var Nt = n(124616);
function Nn() {
    let e = Ne(),
        t = (0, _5.ZP)();
    if (!e) return null;
    switch (t) {
        case _5.M$.ADULT:
            return V.intl.format(Nt.default.gi4ulu, { handleOnAgeGatedContentHook: _5.M0 });
        case _5.M$.TEEN:
            return V.intl.format(Nt.default["221iML"], {
                handleOnAgeGatedContentHook: _5.M0,
                handleOnConfirmAgeHook: _5.aP,
            });
        case _5.M$.UNVERIFIED:
            return V.intl.format(Nt.default["W0/7DD"], {
                handleOnAgeGatedContentHook: _7,
                handleOnConfirmAgeHook: _5.aP,
            });
    }
}
var Ni = n(26137),
    Nl = n(957485);
function Ns() {
    let e = Ne(),
        t = (0, _5.ZP)();
    return e
        ? {
              icon: t === _5.M$.ADULT ? Ni.UserCircleIcon : Nl.ShieldUserIcon,
              backgroundColor: n6.A.colors.BACKGROUND_MOD_SUBTLE,
          }
        : null;
}
function Nr() {
    let e = Ns();
    return null != e ? { type: f.hp.ICON, ...e } : null;
}
function Na() {
    return Ne() ? V.intl.string(V.t.piqs0o) : null;
}
var No = n(160808);
let Nu = [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    Nd = [];
function Nc() {
    return (0, No.Wt)() ? Nu : Nd;
}
var Ng = n(36149),
    Nm = n(207560),
    NA = (((m = {}).LEGACY = "legacy"), (m.AGE_NOTICE = "ageNotice"), m),
    NE = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function Nh(e, t) {
    let n = (0, I.bG)([sp.default], () => null != sp.default.getCurrentUser()),
        i = (0, Nm.fk)(),
        l = (0, _5.ZP)(),
        s = (0, Ng.Y2)(),
        r = Ne();
    if (!n || (!i && !r) || t !== (r ? "ageNotice" : "legacy")) return !1;
    switch (l) {
        case _5.M$.UNVERIFIED:
            return "verify" === e;
        case _5.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _5.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var NS = n(664188);
function NT() {
    let e = (0, _5.hD)();
    return (0, p.jsxs)(n9.E, {
        variant: "body-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(NS.default.WM5adV, { handleOnHelpUrlHook: _5.M0 })],
    });
}
let Nf = {
        useTitle: () => Na() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Nn,
        useVariant: () => "secondary",
        useLeadingDecoration: Nr,
        getDismissibleBadges: Nc,
        useTrailingDecoration: () => ({
            type: f.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: NT,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lN.mM)(async () => {
                let { default: e } = await n.e(145361).then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    Np = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...Nf, usePredicate: () => Nh(NE.EDIT, NA.LEGACY) }),
    Nx = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...Nf,
        usePredicate: () => Nh(NE.EDIT, NA.AGE_NOTICE),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    NI = {
        useTitle: () => Na() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Nn,
        useLeadingDecoration: function () {
            let e = Ns();
            return null != e ? { type: f.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: Nc,
        useTrailingDecoration: () => ({ type: f.Ln.TEXT, text: (0, _5.hD)() }),
    },
    N_ = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...NI, usePredicate: () => Nh(NE.INFO, NA.LEGACY) }),
    NN = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...NI,
        usePredicate: () => Nh(NE.INFO, NA.AGE_NOTICE),
    }),
    Nb = {
        useTitle: () => Na() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Nn,
        useVariant: () => "secondary",
        useLeadingDecoration: Nr,
        getDismissibleBadges: Nc,
        useTrailingDecoration: () => ({ type: f.fq.TEXT, text: (0, _5.hD)() }),
        useLabel: function () {
            return (0, Ng.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _5.aP,
    },
    NC = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...Nb, usePredicate: () => Nh(NE.VERIFY, NA.LEGACY) }),
    Ny = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...Nb,
        usePredicate: () => Nh(NE.VERIFY, NA.AGE_NOTICE),
    }),
    Nv = [NC, Np, N_],
    Nj = [Ny, Nx, NN],
    NO = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: f.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _2(),
    });
function NR(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function ND(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function NL(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = x.useState(!1),
        a = s ? t : n(t);
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(n9.E, { variant: "body-md/medium", children: a }),
            (0, p.jsx)(Sa.Q, {
                variant: "primary",
                textVariant: "body-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function NP() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(n9.E, { variant: "body-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, p.jsx)(NL, {
              text: e,
              censor: ND,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let NG = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: f.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: NP }),
    useLabel: function () {
        return null == (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.email)
            ? V.intl.string(V.t["pvBD+W"])
            : V.intl.string(V.t["8peUT0"]);
    },
    onClick: function () {
        (0, lN.mM)(async () => {
            let { default: e } = await Promise.all([n.e(279385), n.e(420577), n.e(553207)]).then(n.bind(n, 162282));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var NM = n(557722),
    NU = n(53516);
function NV() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(n9.E, { variant: "body-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, p.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(NL, {
                  text: t,
                  censor: NR,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let Nk = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: f.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: NV }),
    useLabel: function () {
        return null == (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    onClick: function () {
        null == sp.default.getCurrentUser()?.phone
            ? (0, lN.mM)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e(590275),
                          n.e(766806),
                          n.e(989545),
                          n.e(757786),
                          n.e(84704),
                          n.e(286197),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, p.jsx)(e, { reason: NM.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: NU.V },
              )
            : (0, lN.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(911837), n.e(840933)]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function Nw() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function NF() {
    let e = (0, xz.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(n9.E, { variant: "body-md/medium", children: i }),
            null != t &&
                (0, p.jsx)(lS.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(i5.CircleErrorIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n6.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let NB = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: f.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: NF,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (Nw() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: Nw,
        onClick: function () {
            (0, lN.mM)(async () => {
                let { default: e } = await Promise.all([n.e(745281), n.e(329995), n.e(820969)]).then(n.bind(n, 667792));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    NX = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, I.bG)([sp.default], () => null != sp.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
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
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _3.S)(e) },
                        }
                  : {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _2() },
                    };
        },
        buildLayout: () => [NB, NO, NG, Nk, ...Nv],
    });
var Nz = n(398177);
let NH = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lN.qf)((e) => (0, p.jsx)(Nz.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var NY = n(200921);
let NW = [];
function NK() {
    NW = [];
}
class NZ extends I.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return NW;
    }
}
let Nq = new NZ(ts.h, {
    LOGOUT: NK,
    LOGIN_SUCCESS: NK,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        NW = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...NW],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        NW = n;
    },
});
function NQ() {
    let e = (0, I.cf)([Nq], () => Nq.getSessions());
    return x.useMemo(() => {
        let t = [...e],
            n = null,
            i = ch.default.getAuthSessionIdHash();
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
function NJ(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : iT()(e).fromNow();
}
var N$ = n(176524),
    N0 = n(646270),
    N1 = n(738678),
    N2 = n(489828);
function N3(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(N$.A, { icon: t, color: r ? n6.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(n9.E, { variant: "body-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(n9.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(n9.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(n9.E, { variant: "body-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function N5(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dz.ScreenIcon };
                        case "ios":
                        case "android":
                            return { text: e, icon: N0.MobilePhoneIcon };
                        case "horizon os":
                            return { text: e, icon: N1.VrHeadsetIcon };
                        default:
                            return { text: e, icon: dz.ScreenIcon };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : NJ(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(im.Vq);
    return (0, p.jsx)(N3, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(ie.D, {
                className: N2.X,
                onClick: () => (0, NY.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, p.jsx)(dl.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
    });
}
function N4(e) {
    let { title: t, children: n } = e,
        i = x.useId();
    return (0, p.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(b.D, { id: i, variant: "heading-sm/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let N6 = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = NQ();
            return null == e
                ? (0, p.jsx)(oP.y, {})
                : (0, p.jsx)(N4, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, p.jsx)(N5, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    N8 = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = NQ();
            return (0, p.jsx)(lA.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, p.jsx)(j.$, {
                    onClick: () => (0, NY.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = NQ();
            return e.length > 0;
        },
    });
var N7 = n(766928);
function N9() {
    return (0, p.jsx)(N3, {
        icon: N7.LaptopPhoneIcon,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, ng.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let be = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = NQ(),
                t = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
            return (0, p.jsxs)(N4, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(N5, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(N9, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = NQ(),
                t = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    bt = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, NY.GY)();
        },
        buildLayout: () => [N6, be, N8],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    bn = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: oI.L,
        buildLayout: () => [bt],
    }),
    bi = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [bn],
        initialize: () => {
            (0, NY.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = NQ(),
                n = t.length + +(null != e);
            return {
                type: f.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var bl = n(464477);
function bs(e) {
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
function br() {
    return (0, od.bG)([sp.default], () => {
        let e = sp.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var ba =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function bo() {
    let e = (0, od.bG)([sp.default], () => sp.default.getCurrentUser()?.verified);
    return bl.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function bu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, od.bG)([lL.A, Iv.A, sp.default], () =>
        sp.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lL.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Iv.A.can(_.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var bd = n(466034),
    bc = n(705147);
let bg = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => bu(!0),
        useDisabled: () => null !== bu(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, I.bG)([ch.default], () => ch.default.hasTOTPEnabled()),
                t = bo() === ba.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            (async function () {
                let e = (await (0, bc.k)("totp")) ? V.t.xlA7Tl : V.t.EA4ZEk;
                (0, n8.A)({
                    title: V.intl.string(V.t["D+aE7g"]),
                    subtitle: V.intl.string(e),
                    variant: "critical",
                    confirmText: V.intl.string(V.t.N86XcP),
                    onConfirm: () => _1.A.disable(),
                });
            })(),
    }),
    bm = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, I.bG)([ch.default], () => ch.default.hasTOTPEnabled()),
                t = bo() === ba.AVAILABLE;
            if (!e && t)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: bd.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (bo()) {
                case ba.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case ba.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: f.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case ba.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [bg],
    });
var bA = n(670492),
    bE = n(32880),
    bh = n(658675),
    bS = n(900686);
function bT() {
    (0, lN.mM)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _1.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lN.mM)(
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
var bf = n(858487);
function bp(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function bx() {
    let e = bA.A.getVerificationKey();
    if ("" === e) return void bT();
    try {
        await _1.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sh.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function bI(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = bp(t),
        l = x.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(bh.P, { checked: n }), (0, p.jsx)(n9.E, { variant: "body-md/normal", children: i })],
        });
    return uz.p5
        ? (0, p.jsx)(ie.D, {
              tag: "li",
              className: ih()(bf.aY, bf.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uz.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uz.C)(i), (0, sh.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: bf.aY, children: s });
}
let b_ = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, I.bG)([bA.A], () => bA.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: br,
        buildLayout: () => [bN],
    }),
    bN = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, I.bG)([bA.A], () => bA.A.getBackupCodes()),
                t = x.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${bp(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: bT })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: bf.E5,
                              children: e.map((e) => (0, p.jsx)(bI, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(s9.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(bS.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: bE.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: hl.RefreshIcon,
                                      onClick: bx,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    bb = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = x.useState(!1),
                n = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(Sa.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lN.mM)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: _1.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    bC = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, I.bG)([sp.default], () => bs(sp.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()?.hasFlag(_.nhx.MFA_SMS) ?? !1),
                t = (0, I.bG)([sp.default], () => null != bs(sp.default.getCurrentUser()));
            if (!e)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: by,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = bo(),
                t = br(),
                n = (0, I.bG)([ch.default], () => ch.default.hasTOTPEnabled());
            return e === ba.AVAILABLE && t && n;
        },
        buildLayout: () => [bb],
    });
function by() {
    let e = sp.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: NM.d.USER_SETTINGS_UPDATE, onAddedPhone: _1.A.enableSMS }),
                (0, lN.mM)(
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
                    { modalKey: NU.V },
                ));
        } else _1.A.enableSMS();
}
var bv = n(665671),
    bj = n(442433),
    bO = n(917136),
    bR = n(976910),
    bD = n(267255);
function bL(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: bD.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n9.E, { variant: "body-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(n9.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: NJ(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lE.K, {
                icon: ml.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, bj.L3)(e, async () => {
                        let { default: e } = await n.e(32529).then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let bP = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (bo() === ba.AVAILABLE)
                return {
                    type: f.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: f.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iQ.PlusSmallIcon,
                            onClick: bv.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (bo()) {
                    case ba.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: f.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case ba.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: f.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case ba.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [bG],
    }),
    bG = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, I.cf)([bR.A], () => ({
                hasFetchedCredentials: bR.A.hasFetchedCredentials(),
                credentials: bR.A.getCredentials(),
            }));
            return (x.useEffect(() => {
                t || bO.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(bL, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oP.y, {});
        },
    }),
    bM = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [bP, bm, bC, b_],
    }),
    bU = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = br();
            return { type: f.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [bM],
    }),
    bV = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [NH, bU, bi],
    }),
    bk = { [_5.M$.ADULT]: Nt.default.PMznGO, [_5.M$.TEEN]: Nt.default.qSkhZH, [_5.M$.UNVERIFIED]: Nt.default.vGxRDB },
    bw = [eE.M.TINY_BRONCO_NOTICE],
    bF = [];
function bB() {
    _6.A.openUrl(_8.M1);
}
var bX = n(308645),
    bz = n(881979),
    bH = n(37380);
let bY = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: bH.A,
    }),
    bW = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [bY] }),
    bK = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [bW],
    }),
    bZ = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: bz.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, bz._k)();
            return { type: f.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: f.xn.TEXT, text: (0, bz.aO)() };
        },
        initialize: () => {
            bX.Yn();
        },
        buildLayout: () => [bK],
    }),
    bq = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (Ne() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, No.LH)(),
                t = (0, _5.ZP)(),
                [n, i] = (0, At.kn)(e ? bw : bF);
            return e && null != n
                ? {
                      type: f.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(bk[t], { handleOnBlogHook: bB }),
                      onDismiss: () => i(Ac.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...Nj, bZ],
    });
var bQ = n(738188),
    bJ = n(834981),
    b$ = n(987197),
    b0 = n(822585),
    b1 = n(840387),
    b2 = n(281906),
    b3 = n(665956);
let b5 = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: b2.p,
        useSearchTerms: () => [
            V.intl.string(b3.default.RZqaJn),
            V.intl.string(b3.default.bdBmqy),
            V.intl.string(b3.default["gVWG+6"]),
            V.intl.string(b3.default.ahKIJO),
            V.intl.string(b3.default["8SLtqb"]),
        ],
    }),
    b4 = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [b5] }),
    b6 = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(b3.default.RZqaJn),
        buildLayout: () => [b4],
    }),
    b8 = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(b3.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, b$.f)(),
                t = (0, b0.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, bJ.VT)();
            return x.useMemo(() => (n ? { badgeType: f.Xi.WARNING } : { badgeType: f.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [b7],
    }),
    b7 = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, bJ.Li)() ? V.intl.string(b3.default.IcMQUP) : V.intl.string(b3.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, b1.Z)(),
                t = (0, bJ.Li)();
            return e
                ? t
                    ? V.intl.string(b3.default.G8lHFU)
                    : V.intl.string(b3.default.uOLNEZ)
                : V.intl.string(b3.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, b$.f)(),
                t = (0, b0.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: f.Xy.ICON,
                      icon: bQ.WarningIcon,
                      color: n6.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n6.A.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
                  };
        },
        buildLayout: () => [b6],
    });
var b9 = n(425587),
    Ce = n(662758);
function Ct(e) {
    if (e.body.code === _.t02.INVALID_PASSWORD) throw e;
    (0, s6.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function Cn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sp.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await b9.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s6.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lL.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s6.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, lN.qf)((t) =>
                  (0, p.jsx)(Ce.default, {
                      ...t,
                      handleSubmit: (t) => (0, xC.U_)(t, e).then(_.tEg, Ct),
                      title: e ? V.intl.string(V.t.xca2ts) : V.intl.string(V.t.goXv9g),
                      actionText: e ? V.intl.string(V.t["8lQ2rR"]) : V.intl.string(V.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? V.intl.string(V.t.FB4H1D) : V.intl.string(V.t.gk7h32),
                  }),
              )
            : (0, n8.A)({
                  title: V.intl.string(V.t.xca2ts),
                  subtitle: V.intl.string(V.t.FB4H1D),
                  confirmText: V.intl.string(V.t["8lQ2rR"]),
                  onConfirm: () => (0, xC.U_)("", !0),
              });
}
let Ci = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Cn(!0),
    }),
    Cl = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Cn(!1),
        usePredicate: () => {
            let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Cs = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Cl, Ci] }),
    Cr = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_1.A.clearBackupCodes(), (0, xC.Uo)());
            };
        },
        useObscuredNotice: oI.L,
        buildLayout: () => [NX, bV, bq, b8, Cs],
    }),
    Ca = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: Ei.UserIcon,
        buildLayout: () => [Cr],
    });
var Co = n(254138),
    Cu = n(290595),
    Cd = n(677166),
    Cc = n(410310),
    Cg = n(405018),
    Cm = n(137005);
let CA = "user_settings_data_usage",
    CE = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cm.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cm.default.V0EPTo, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, Cd.Zd)(CA),
            useValue: () => !(0, Cc.p)().optedOut,
            setValue: (e) => {
                Cc.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, Cc.p)().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cm.default.Z9bKIJ, {
                    learnMoreURL: eC.A.getArticleURL(_.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, Cd.ws)(CA, { autoTrackExposure: !1 }) || Cg.A.isLocked()
                    ? []
                    : [{ badgeType: f.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var Ch = n(153488),
    CS = n(171316),
    CT = n(327919),
    Cf = n(558001);
n(866945);
var Cp = n(835002);
function Cx() {
    let e = (0, CS.uM)(),
        t = (0, bJ.vx)(),
        n = x.useCallback(() => {
            ((0, CT.A)(t, tH.default, () =>
                (0, sh.P0)({
                    text: V.intl.formatToPlainString(b3.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, Cf.N)(Cp.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cp.YX.LEARN_MORE));
        }, [t]),
        i = x.useCallback(() => {
            (0, Cf.N)(Cp.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cp.YX.VIEWED);
        }, []);
    return x.useMemo(() => {
        if (e)
            return {
                type: f.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(b3.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nc.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CI = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string((0, pW.H)() ? pJ.default["IxZyA+"] : V.t.AGDDkH),
    useSubtitle: () => V.intl.string((0, pW.H)() ? pJ.default.GjNXmw : V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => pq.eQ({ allowVoiceRecording: e }),
});
var C_ = n(157559),
    CN = n(331887);
function Cb() {
    let e = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
        t = (0, I.bG)([CN.A], () => CN.A.harvestType),
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
let CC = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = Cb();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: eC.A.getArticleURL(_.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return V.intl.string(V.t.hIbRso);
                case "not_verified":
                    return V.intl.format(V.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, p.jsx)(
                                ie.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, ng.openUserSettings)(S.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = iT()(e.nextAllowed).format("MMMM Do YYYY");
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
        useDisabled: () => !Cb().allowed,
        useLoading: () => (0, I.bG)([CN.A], () => CN.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => V.intl.string(V.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lN.mM)(async () => {
                        let { default: e } = await n.e(292063).then(n.bind(n, 970018));
                        return (n) => (0, p.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xC.$I)(n)
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
    Cy = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, ng.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ng.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Cv = n(641216);
let Cj = (0, An.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function CO() {
    let { enabled: e } = Cj.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CR = n(884705);
function CD() {
    return (0, I.bG)([CR.A], () => CR.A.isTogglesDisabled());
}
function CL() {
    return !U.vf.useSetting();
}
function CP(e) {
    U.vf.updateSetting(!e);
}
function CG() {
    let e = CD(),
        t = U.H1.useSetting(),
        n = (0, CS.uM)();
    return e || t || n;
}
let CM = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !CO(),
        useValue: CL,
        setValue: CP,
        useDisabled: CG,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    CU = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CO,
        useValue: CL,
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
    let e = CD(),
        t = (0, CS.uM)();
    return e || t;
}
let CF = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !CO(),
        useValue: CV,
        setValue: Ck,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: Cw,
    }),
    CB = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(_.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CO,
        useValue: CV,
        setValue: Ck,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: Cw,
    }),
    CX = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = SP(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = SG();
            return { type: f.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, I.bG)([le.Ay], () => le.Ay.getGamesSeen(!1).some((e) => !(0, Sv.n1)(e))) && (0, nx.xl)(),
    }),
    Cz = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CX] });
var CH = n(972737);
let CY = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, I.bG)([Ch.A], () => Ch.A.hasConsented(_.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cu.U)([_.YAq.USAGE_STATISTICS], []).catch(CH.i)
                : (0, CH.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, Cu.U)([], [_.YAq.USAGE_STATISTICS]).catch(CH.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: CS.uM,
    }),
    CW = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: Cx,
        initialize: () => {
            Ch.A.fetchedConsents || (0, Cu.Q)();
        },
        buildLayout: () => [Cy, CY, Cv._, CF, CM, ...CE, CI, CC, Cz],
    });
var CK = n(870549);
let CZ = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(CK.default.F3llsQ),
    useSubtitle: () => V.intl.string(CK.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Sk.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function Cq() {
    let e = U.JG.useSetting();
    return (0, I.yK)(
        [g9.Ay, lL.A],
        () => {
            let t = new Set(e);
            return g9.Ay.getFlattenedGuildIds().filter((e) => null != lL.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CQ = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Cq();
            if (0 === e.length) return V.intl.format(V.t.QJIJ5p, {});
            let t = lL.A.getGuild(e[0]),
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
                        [lL.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lL.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: { icon: (0, p.jsx)(SJ, { guild: t[0], size: 48 }), shape: Sj.e.SQUIRCLE },
                                backIcon: { icon: (0, p.jsx)(SJ, { guild: t[1], size: 48 }), shape: Sj.e.SQUIRCLE },
                            }
                          : { frontIcon: { icon: (0, p.jsx)(SJ, { guild: t[0], size: 48 }), shape: Sj.e.SQUIRCLE } });
            return { type: f.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CJ = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CQ] }),
    C$ = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => V.intl.string(V.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: V.intl.string(V.t.Boxc8R),
                    desc: V.intl.string(V.t["nLj+nc"]),
                    value: eJ.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: V.intl.string(V.t.YOIKBt),
                    desc: V.intl.string(V.t.y0JZ4s),
                    value: eJ.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: V.intl.string(V.t.u0nlJv), desc: V.intl.string(V.t["4jnKHu"]), value: eJ.KP.FRIENDS_ONLY },
            ];
        },
        useValue: U.KP.useSetting,
        setValue: function (e) {
            let t = U.KP.getSetting();
            U.KP.updateSetting(e);
            let i = (0, SY.gS)(t, e);
            null != i &&
                (0, lN.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(26411), n.e(562041), n.e(763786)]).then(
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
    C0 = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [C$, CZ, CJ],
    });
var C1 = n(952270),
    C2 = n(609649);
let C3 = { [eJ.tR.REAL_MONEY_GAMING]: C2.default.pmIitA },
    C5 = Object.keys(C3).map(Number),
    C4 = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(C2.default.foQaI1)],
        usePredicate: CO,
        Component: function () {
            let e = x.useMemo(
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
            return (0, p.jsx)(pP.Z, {
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
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(C2.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C6 = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(C2.default.XUj46U),
        usePredicate: CO,
        buildLayout: () => [CB, CU, C4],
    });
var C8 = n(714763),
    C7 = n(814278),
    C9 = n(597798),
    ye = n(627784),
    yt = n(977997),
    yn = n(144485);
async function yi(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C7.to)(1), t?.());
        } catch (t) {
            let e = new ye.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                C_.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
n(603266);
let yl = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, C7.Lu)() }),
    useValue: function () {
        return (0, I.bG)([C8.A], () => C8.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        !(async function (e) {
            let t,
                n,
                i =
                    ((t = yt.A.getVoiceStateForUser(ch.default.getId())),
                    (n = lR.A.getChannel(t?.channelId)),
                    ch.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
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
        })(e);
    },
});
var ys = n(787392);
function yr() {
    return (0, I.yK)([ys.A], () => ys.A.getUserIds());
}
var ya = n(803306),
    yo = n(966327),
    yu = n(774156);
function yd(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        l = (0, I.bG)([sp.default], () => sp.default.getUser(t)),
        s = u8.Ay.getFormattedName(l),
        r = x.useCallback(() => {
            (0, C7.kj)(t);
        }, [t]),
        a = x.useCallback(() => (0, xO.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        x.useEffect(() => {
            (0, ya.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: yu.uW,
            children: [
                null != l && (0, p.jsx)(yo.A, { className: yu.my, user: l, size: v._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: yu.Qq,
                    children: [
                        (0, p.jsx)(ie.D, {
                            className: yu.Xh,
                            onClick: a,
                            children: (0, p.jsx)(n9.E, {
                                variant: "body-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, p.jsx)(n9.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(ie.D, { onClick: r, className: yu.Qz, children: (0, p.jsx)(lh.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yc(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, C7.tC)(i.timestamp),
        r = x.useCallback(() => {
            (0, C7.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: yu.Qq,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, p.jsx)(n9.E, { variant: "body-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, p.jsx)(ie.D, {
                className: yu.Kk,
                onClick: r,
                children: (0, p.jsx)(dl.XSmallIcon, { size: "md", color: n6.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yg(e) {
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
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(yd, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    x.Fragment,
                    {
                        children: [
                            (0, p.jsx)(yc, { className: yu.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: yu.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var ym = n(464946),
    yA = n(492422);
let yE = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = yr();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yr();
            return (0, p.jsxs)(ym.h, {
                children: [
                    (0, p.jsx)(ym._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, C7.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: yA.A, children: (0, p.jsx)(yg, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yh = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.xl)(),
        buildLayout: () => [yl, yE],
    }),
    yS = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [CW, C6, C0, yh],
    }),
    yT = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: Co.ShieldLockIcon,
        buildLayout: () => [yS],
    });
var yf = n(476713);
let yp = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yx = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yp] });
var yI = n(875444);
function y_(e, t) {
    let n = (0, I.bG)([TI.A], () => TI.A.getFetchState()),
        i = (0, I.bG)([TI.A], () => (e ? TI.A.getNewestTokensForNonChildrenApplications() : TI.A.getNewestTokens())),
        l = x.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yI.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        x.useEffect(() => {
            t || To.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== TI.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var yN = n(514479);
function yb() {
    return (0, p.jsxs)("div", {
        className: yN.d,
        children: [
            (0, p.jsx)(n9.E, {
                variant: "body-md/medium",
                color: "text-strong",
                className: yN.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, p.jsx)(n9.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(_.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yC = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = y_(!0, !0);
        return e ? (0, p.jsx)(oP.y, {}) : (0, p.jsx)(yb, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = y_(!0, !0);
        return e || 0 === t.length;
    },
});
function yy() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = y_(!0, !0);
    return !e && t.length > 0;
}
let yv = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yy,
    }),
    yj = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t["ms+Tme"]),
        useSubtitle: () => V.intl.string(V.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.JIFnN9), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: V.intl.string(V.t.rRdsk1), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: V.intl.string(V.t.IVRPMX), value: eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = U.TA.useSetting();
            return e === eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eJ.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => U.TA.updateSetting(e),
        usePredicate: yy,
    });
function yO() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = y_(!0, !0);
    return {
        sortedGames: x.useMemo(() => e.toSorted((e, t) => oH.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yR = n(171576);
function yD(e) {
    let { body: t, button: n, noticeType: i } = e;
    return (
        (0, e_.Ay)(() => {
            (0, Cf.N)(i, Cp.YX.VIEWED);
        }),
        (0, p.jsx)(i$.w, { type: "info", message: t, action: n, role: "none" })
    );
}
function yL(e, t) {
    return x.useCallback(() => {
        (t(), (0, Cf.N)(e, Cp.YX.LEARN_MORE));
    }, [e, t]);
}
function yP(e, t) {
    return {
        handleLearnMore: yL(e, t),
        handleConfirmAge: x.useCallback(() => {
            (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cf.N)(e, Cp.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yG() {
    let e,
        t = (0, CS.uM)(),
        n = (0, Nm.fk)(),
        i = (0, Ng.b8)(),
        l = (0, b1.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, _9.x)(_8.LI)) return e;
    }
}
var yM = n(687123),
    yU = n(444802);
function yV() {
    let e = (0, yU.WX)();
    x.useEffect(() => {
        (0, Cf.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.VIEWED);
    }, []);
    let t = x.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cf.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.LEARN_MORE));
        }, [e]),
        n = x.useCallback(() => {
            (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cf.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(i$.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nc.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yk() {
    let e = (0, Nm.aX)(yM.t.REACTIVE_CHECK),
        t = (0, Ng.b8)();
    return x.useMemo(() => {
        if (e && !t) return { type: f.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yV };
    }, [e, t]);
}
var yw = n(323073),
    yF = n(386171),
    yB = n(96607);
let yX = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yF.hT,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, Ng.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yz = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yF.tI,
        useDisabled: function () {
            let e = (0, yB.A)() ?? !0,
                t = (0, yw.sP)(),
                n = (0, Ng.yM)();
            return x.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yw.p5)() && e
                ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yH = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yY = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yH] });
n(667532);
var yW = n(390248),
    yK = n(632119),
    yZ = n(945276),
    yq = n(389737),
    yQ = n(523009);
function yJ() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, CS.uM)(),
        i = (0, CS.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, od.cf)([aM.A], () => aM.A.settings.textAndImages?.explicitContentSettings ?? (0, yK.C$)())),
        {
            explicitContentGuilds: (0, yK.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yK.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yK.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(eJ.TO.SHOW)
            ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yK.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(b3.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yq.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(b3.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function y$() {
    let e,
        t = (0, yZ.A)() ?? !0,
        n = (0, CS.uM)(),
        i = (0, CS.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, od.cf)([aM.A], () => aM.A.settings.textAndImages?.goreContentSettings ?? (0, yU.T4)())),
        {
            goreContentGuilds: (0, yU.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yU.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yU.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yW.hK)() && t.includes(eJ.TO.SHOW)
            ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yU.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(b3.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yq.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yQ.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(b3.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var y0 = n(875162),
    y1 = n(636745);
let y2 = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yU.WX)(),
            t = x.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yJ,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: y$,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(ym.h, {
            children: [
                (0, p.jsx)(ym._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(y0.A, { tabs: t, orientation: "vertical", tabsClassName: y1.v }),
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
let y7 = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(_.MVz.SAFETY_ALERTS) }),
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
    y9 = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
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
                S = Cx(),
                T =
                    ((l = (0, CS.uM)()),
                    (s = (0, Nm.fk)()),
                    (r = (0, Ng.b8)()),
                    (a = (0, b1.Z)()),
                    (o = yP(Cp.YA.AGE_CONFIRMATION_NOTICE, _7)),
                    (u = yL(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _5.M0)),
                    (d = x.useCallback(() => {
                        (0, Cf.N)(Cp.YA.AGE_CONFIRMATION_NOTICE, Cp.YX.VIEWED);
                    }, [])),
                    (c = x.useCallback(() => {
                        (0, Cf.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (!l && (0, _9.x)(_8.LI)) {
                            if (s && !r)
                                return {
                                    type: f.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(Nt.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(Nt.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: f.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(Nt.default.HBnyJM, { handleOnAgeGatedContentHook: u }),
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                I =
                    ((e = (0, b1.Z)()),
                    (t = (0, yU.WX)()),
                    (n = x.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cf.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.LEARN_MORE));
                    }, [t])),
                    (i = x.useCallback(() => {
                        (0, Cf.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cp.YX.VIEWED);
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
                    ((g = (0, Nm.SJ)()),
                    (m = (0, Ng.b8)()),
                    (A = g && !m),
                    (E = x.useCallback(() => {
                        (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cf.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cp.YX.LEARN_MORE));
                    }, [])),
                    (h = x.useCallback(() => {
                        (0, Cf.N)(Cp.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cp.YX.VIEWED);
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
                N = yk();
            return S ?? T ?? N ?? _ ?? I;
        },
        buildLayout: () => [y2, y7, yX, yz, yY],
    });
var ve = n(923457),
    vt = n(750714);
let vn = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, I.bG)([sp.default], () => sp.default.getCurrentUser()),
                i = (0, Nm.yv)(ve.p.SPAM_FILTERS);
            return e !== eJ.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? eJ.he.FRIENDS_AND_NON_FRIENDS
                  : (vt.xY.get(t) ?? eJ.he.NON_FRIENDS);
        },
        setValue: (e) => U.he.updateSetting(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t["+w5yKk"]), value: eJ.he.FRIENDS_AND_NON_FRIENDS },
                { name: V.intl.string(V.t.yAPg6r), value: eJ.he.NON_FRIENDS },
                { name: V.intl.string(V.t.FEXKsv), value: eJ.he.DISABLED },
            ];
        },
        useSearchTerms: () => [V.intl.string(V.t.JzaP4h), V.intl.string(V.t.H9XOl3), V.intl.string(V.t.k4W40P)],
    }),
    vi = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return x.useMemo(() => (0, io.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? 14 : 14 & ~_.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, CS.uM)();
        },
    }),
    vl = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? ub.UI(t, _.dzt.MUTUAL_FRIENDS) : ub.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CS.uM)();
        },
    }),
    vs = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = x.useMemo(() => (0, io.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? ub.UI(t, _.dzt.MUTUAL_GUILDS) : ub.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CS.uM)();
        },
    }),
    vr = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [vi, vl, vs],
    });
var va = n(420825);
let vo = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, va.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    vu = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: Cx,
        buildLayout: () => [vr, vo],
    });
var vd = n(994500),
    vc = n(49229),
    vg = n(730134),
    vm = n(276573);
function vA(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: vm.wx,
        children: [
            (0, p.jsx)("div", {
                className: vm.zc,
                children: i ? (0, p.jsx)(xA.DenyIcon, {}) : (0, p.jsx)(C1.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: vm.Qq,
                children: [
                    (0, p.jsx)(n9.E, {
                        variant: "body-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(n9.E, {
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
function vE(e) {
    let { userId: t, last: n } = e,
        i = (0, I.bG)([vd.A], () => vd.A.isBlocked(t)),
        l = (0, I.bG)([sp.default], () => sp.default.getUser(t)),
        [s, r] = x.useState(!1),
        a = x.useCallback(() => {
            (r(!0),
                i
                    ? vc.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : vc.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: ih()(vm.nM, { [vm.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: vm.eF,
                      children: [
                          (0, p.jsx)(vg.A, { user: l, size: v._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: vm.Qq,
                              children: [
                                  (0, p.jsx)(n9.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, p.jsx)(n9.E, {
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
function vh(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = x.useState(5);
    return (0, p.jsx)(ym.h, {
        children: (0, p.jsxs)("div", {
            className: vm.Nr,
            children: [
                (0, p.jsx)(vA, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: vm.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(vE, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: vm.vM,
                          children: (0, p.jsx)(ie.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: vm.Qf,
                              children: (0, p.jsx)(n9.E, {
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
let vS = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, I.bG)([vd.A], () => vd.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vd.A], () => vd.A.getBlockedIDs());
            return (0, p.jsx)(vh, { userIds: e, listType: "blocked" });
        },
    }),
    vT = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, I.bG)([vd.A], () => vd.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, I.yK)([vd.A], () => vd.A.getIgnoredIDs());
            return (0, p.jsx)(vh, { userIds: e, listType: "ignored" });
        },
    }),
    vf = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [vS, vT],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, I.cf)([vd.A], () => ({
                hasBlockedUsers: vd.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: vd.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var vp = n(22385),
    vx = n(556534),
    vI = n(111159),
    v_ = n(152056),
    vN = n(428031),
    vb = n(978433);
let vC = { label: () => V.intl.string(V.t["32u1Dx"]), value: "0" };
var vy = n(307863),
    vv = n(954225);
function vj() {
    return (0, vy.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function vO(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vR = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vj,
    useSubtitle: function () {
        let e = (0, vx.Tx)(),
            t = (0, vx.q9)(),
            n = (0, vy.e)();
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
        let e = (0, vx.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, vN.K)();
        return "0" === e ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, CS.uM)();
        return "0" === (0, vx.Tx)() && e;
    },
    setValue: function (e) {
        let t = vp.xk.getState().selectedGuildId;
        if ("0" === t) {
            var n;
            ((n = !e),
                (0, CH.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s8.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), vO(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lL.A.getGuildIds() : []), vO(n, !0));
                    },
                }));
        } else {
            let n = (0, io.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vv.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var vD = n(116774),
    vL = n(953298);
function vP(e, t) {
    td.default.track(_.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vG() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vM = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vG,
        useSubtitle: function () {
            let e = (0, vx.q9)(),
                t = eC.A.getArticleURL(_.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, vx.Tx)(),
                t = (0, vN.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, vD.s)(),
                l = (0, CS.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || ("0" === e && l ? !s : "0" === e ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, vx.Tx)(),
                t = (0, CS.uM)(),
                n = (0, vN.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, vD.s)();
            return "0" === e ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = vp.xk.getState().selectedGuildId;
            if (!e && (0, vL.w)())
                return void _6.A.showAgeVerificationGetStartedModal({ entryPoint: yR.q1.MESSAGE_REQUESTS_SETTINGS });
            if ("0" === t) {
                var n;
                ((n = !e),
                    (0, CH.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s8.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vP(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lL.A.getGuildIds() : []), vP(n, !0));
                        },
                    }));
            } else {
                let n = (0, io.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(_.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vv.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vU = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vj(), vG()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, vp.xk)(),
                l = (0, I.bG)([g9.Ay], () => g9.Ay.getFlattenedGuildIds()),
                s = (0, I.bG)([lL.A], () => lL.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, vN.K)()),
                    (0, I.bG)(
                        [lL.A],
                        () => {
                            let n = new Set(e);
                            return lL.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            x.useEffect(
                () =>
                    v_.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = vp.xk.getState().selectedGuildId;
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
                        ...vC,
                        id: vC.value,
                        label: vC.label(),
                        leading: (0, p.jsx)("div", {
                            className: vb.KP,
                            children: (0, p.jsx)(vI.ClydeIcon, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: vb.cl,
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
                                leading: (0, p.jsx)(mc.Ay, {
                                    className: vb.cl,
                                    guild: n,
                                    size: mc.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [l, s]);
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pP.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    "0" === n &&
                        r > 0 &&
                        (0, p.jsx)(n9.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            className: vb.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
                                        n9.E,
                                        { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    vV = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, vx.Tx)(),
                t = yG();
            return "0" === e && null != t;
        },
        Component: function () {
            let e = yG(),
                t = yP(Cp.YA.AGE_CONFIRMATION_NOTICE, _7),
                n = yL(Cp.YA.CONTENT_AND_SOCIAL_NOTICE, _5.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(yD, {
                        noticeType: Cp.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(Nt.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        button: { text: V.intl.string(Nt.default["cI+bc/"]), onClick: t.handleConfirmAge },
                    });
                case "teen":
                    return (0, p.jsx)(yD, {
                        noticeType: Cp.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(Nt.default["5KHq55"], { handleOnAgeGatedContentHook: n }),
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vk = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = Cx(),
                t = yk();
            if ("0" === (0, vx.Tx)()) return e ?? t;
        },
        buildLayout: () => [vU, vR, vM, vV],
    }),
    vw = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [vn] }),
    vF = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yO();
            function t(e, t) {
                return (0, p.jsx)(
                    n9.E,
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
                let { sortedGames: e } = yO();
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
                            shape: Sj.e.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: 40,
                                    height: 40,
                                }),
                                shape: Sj.e.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: f.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            To.A.fetch();
        },
        buildLayout: () => [yv, yj, yC, yx],
    }),
    vB = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [y9, vw, vk, vu, vF, vf],
    }),
    vX = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: yf.ChatShieldIcon,
        buildLayout: () => [vB],
    });
var vz = n(782603),
    vH = n(899847),
    vY = n(695515);
let vW = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
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
    vK = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, ng.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    vZ = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, I.bG)([aY.A], () => aY.A.getTTSType()),
        setValue: (e) => aQ.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: _.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: _.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: _.aVn.NEVER },
            ];
        },
        usePredicate: () => Y.$j,
    }),
    vq = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vQ = (0, h.bd)(vq, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tI(vq, {
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
        buildLayout: () => [vW, vK, vZ],
    }),
    vJ = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vQ],
    }),
    v$ = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, I.bG)([aY.A], () => !aY.A.getDisableUnreadBadge());
        },
        setValue: (e) => aQ.default.setDisableUnreadBadge(!e),
    }),
    v0 = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [v$],
    });
var v1 = n(840559),
    v2 = n(997187);
let v3 = (0, An.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v5 = n(723923);
let v4 = v5.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, I.cf)([v2.A], () => v2.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, v1.CA)(e.category, t),
        }),
    ),
    v6 = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, I.cf)([v2.A], () => v2.A.getEmailSettings());
            return v5.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, v1.NI)(),
        useVariant: () => "critical-secondary",
    }),
    v8 = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = v3.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = v2.A.getEmailSettings();
            e || (0, v1.cR)();
        },
        buildLayout: () => [...v4, v6],
    }),
    v7 = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, I.bG)([aY.A], () => aY.A.getDesktopType()) !== _.nRU.NEVER;
        },
        setValue: (e) => aQ.default.setDesktopType(e ? _.nRU.ALL : _.nRU.NEVER),
    });
var v9 = n(832712),
    je = n(543465),
    jt = n(790782);
let jn = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, I.bG)([je.Ay], () => je.Ay.useNewNotifications),
    setValue: function (e) {
        (v9.A.setAccountFlag(Sk.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hz.w.set("turnedOffNewNotifications", !0),
                td.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lL.A.getGuildsArray().filter(
                        (e) => je.Ay.resolveGuildUnreadSetting(e) === jt.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, I.bG)(
            [sp.default, je.Ay],
            () =>
                sp.default.getCurrentUser()?.isStaff() ||
                sp.default.getCurrentUser()?.isStaffPersonal() ||
                je.Ay.useNewNotifications,
        ),
});
var ji = n(534654);
let jl = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, I.bG)([aY.A], () => aY.A.screenDowntimeReminder),
        setValue: (e) => aQ.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, ji.A)(),
                t = (0, bJ.Du)();
            return e && t;
        },
    }),
    js = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, ji.A)(),
                t = (0, bJ.Du)();
            return e && t;
        },
    }),
    jr = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    ja = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    jo = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    ju = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var jd = n(815807);
let jc = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, jd.n4)(e, U.Zp.getSetting()),
    }),
    jg = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    jm = (0, An.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    jA = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(_.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Sk.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => jm.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    jE = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [jo, jr, ja, jg, jA, ju, jc],
    }),
    jh = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, I.bG)([aY.A], () => aY.A.taskbarFlash),
        setValue: (e) => aQ.default.setTaskbarFlash(e),
        usePredicate: () => (0, nx.uF)(),
    }),
    jS = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [v7, jh, jE, jn, js, jl],
    });
var jT = n(965957),
    jf = n(312671),
    jp = n(235079);
let jx = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aW.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, I.bG)([jf.A], () => jf.A.getSoundpack()),
            t = aW.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aW.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, jT.p)(e ? t : jp.i.CLASSIC));
    },
    usePredicate: aW.A.useIsEligible,
});
var jI = n(970931);
let j_ = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: jI.kB,
        useDisabledMessage: () => ((0, jI.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    jN = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    jb = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a0("message3") }),
        useValue: () =>
            (0, I.bG)([aY.A], () => aY.A.getNotifyMessagesInSelectedChannel() && !aY.A.getDisableAllSounds()),
        setValue: (e) => aQ.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, I.bG)([aY.A], () => aY.A.getDisableAllSounds()),
    }),
    jC = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, I.bG)([aY.A], () => aY.A.getDisableAllSounds()),
        setValue: (e) => aQ.default.toggleDisableAllSounds(e),
    }),
    jy = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                a$();
            };
        },
        buildLayout: () => [a1(j_), jb, a1(jN), jC],
    }),
    jv = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    jj = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [jv] }),
    jO = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [jx, jy, jj],
    }),
    jR = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vY.A.getAgeGroup() || vY.A.isLoading() || (vY.A.canRefetch() && vH.Ay.initialPageLoad());
        },
        buildLayout: () => [jS, jO, v0, v8, vJ],
    }),
    jD = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vz.BellIcon,
        buildLayout: () => [jR],
    }),
    jL = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Ca, yT, vX, jD],
    });
var jP = n(387758),
    jG = n(271866),
    jM = n(147964),
    jU = n(868511);
let jV = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, I.bG)([jM.A], () => null != jM.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lN.qf)((e) => (0, p.jsx)(jU.A, { ...e })) : jG.cL();
        },
    }),
    jk = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: _.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uz.p5,
    }),
    jw = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jk, jV] }),
    jF = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [jw] }),
    jB = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: jP.AngleBracketsIcon,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jF],
    });
var jX = n(70688),
    jz = n(830215);
let jH = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jX.DoorExitIcon,
        onClick: () => {
            (0, n8.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jz.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jY = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [jB, jH],
    }),
    jW = (0, h.Hr)({ buildLayout: () => [_0, jL, hn, op, xb, SC, jY], analyticsKey: "user_settings" });
